// Web Audio Engine for BMW M5 G90 TwinPower Turbo V8 & M Hybrid Exhaust Simulation

class BMWMAudioEngine {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.activeMode = 'SPORT'; // ROAD, SPORT, TRACK
    this.throttle = 0.2; // 0.0 to 1.0
    this.analyser = null;
    this.gainNode = null;
    this.oscillators = [];
    this.filterNode = null;
    this.waveshaper = null;
    this.noiseNode = null;
  }

  init() {
    if (this.ctx) return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    this.ctx = new AudioContext();

    this.analyser = this.ctx.createAnalyser();
    this.analyser.fftSize = 64;

    this.gainNode = this.ctx.createGain();
    this.gainNode.gain.setValueAtTime(0.001, this.ctx.currentTime);

    // Distortion curve for raw exhaust rasp
    this.waveshaper = this.ctx.createWaveShaper();
    this.waveshaper.curve = this.makeDistortionCurve(18);
    this.waveshaper.oversample = '4x';

    // Lowpass filter representing muffler & flap damping
    this.filterNode = this.ctx.createBiquadFilter();
    this.filterNode.type = 'lowpass';
    this.updateModeFilter('SPORT');

    this.waveshaper.connect(this.filterNode);
    this.filterNode.connect(this.gainNode);
    this.gainNode.connect(this.analyser);
    this.analyser.connect(this.ctx.destination);
  }

  makeDistortionCurve(amount) {
    const k = typeof amount === 'number' ? amount : 50;
    const n_samples = 44100;
    const curve = new Float32Array(n_samples);
    const deg = Math.PI / 180;
    for (let i = 0; i < n_samples; ++i) {
      const x = (i * 2) / n_samples - 1;
      curve[i] = ((3 + k) * x * 20 * deg) / (Math.PI + k * Math.abs(x));
    }
    return curve;
  }

  updateModeFilter(mode) {
    if (!this.filterNode || !this.ctx) return;
    this.activeMode = mode;
    const now = this.ctx.currentTime;
    if (mode === 'ROAD') {
      this.filterNode.frequency.setTargetAtTime(320, now, 0.1);
      this.filterNode.Q.setTargetAtTime(1.0, now, 0.1);
    } else if (mode === 'SPORT') {
      this.filterNode.frequency.setTargetAtTime(780, now, 0.1);
      this.filterNode.Q.setTargetAtTime(2.2, now, 0.1);
    } else if (mode === 'TRACK') {
      this.filterNode.frequency.setTargetAtTime(1900, now, 0.1);
      this.filterNode.Q.setTargetAtTime(3.8, now, 0.1);
    }
  }

  start() {
    this.init();
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    if (this.isPlaying) return;

    this.isPlaying = true;
    const now = this.ctx.currentTime;
    this.gainNode.gain.cancelScheduledValues(now);
    this.gainNode.gain.setTargetAtTime(0.18, now, 0.15);

    // Primary V8 Firing Oscillator (Cross-plane crankshaft rumble)
    const osc1 = this.ctx.createOscillator();
    osc1.type = 'sawtooth';
    osc1.frequency.setValueAtTime(48, now);

    // Sub-harmonic V8 rumble
    const osc2 = this.ctx.createOscillator();
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(24, now);

    // Secondary pulse
    const osc3 = this.ctx.createOscillator();
    osc3.type = 'sawtooth';
    osc3.frequency.setValueAtTime(96, now);

    // E-Motor high-frequency synthetic whine
    const oscHybrid = this.ctx.createOscillator();
    oscHybrid.type = 'sine';
    oscHybrid.frequency.setValueAtTime(420, now);

    const hybridGain = this.ctx.createGain();
    hybridGain.gain.setValueAtTime(0.04, now);
    oscHybrid.connect(hybridGain);
    hybridGain.connect(this.gainNode);

    osc1.connect(this.waveshaper);
    osc2.connect(this.waveshaper);
    osc3.connect(this.waveshaper);

    osc1.start();
    osc2.start();
    osc3.start();
    oscHybrid.start();

    this.oscillators = [osc1, osc2, osc3, oscHybrid];
  }

  stop() {
    if (!this.isPlaying || !this.ctx) return;
    const now = this.ctx.currentTime;
    this.gainNode.gain.cancelScheduledValues(now);
    this.gainNode.gain.setTargetAtTime(0.0001, now, 0.15);

    setTimeout(() => {
      this.oscillators.forEach(osc => {
        try { osc.stop(); osc.disconnect(); } catch (e) {}
      });
      this.oscillators = [];
      this.isPlaying = false;
    }, 200);
  }

  setThrottle(val) {
    if (!this.ctx || !this.isPlaying || this.oscillators.length < 4) return;
    this.throttle = Math.max(0, Math.min(1, val));
    const now = this.ctx.currentTime;

    // Pitch mapping: 48Hz idle up to 180Hz redline
    const baseFreq = 48 + this.throttle * 130;
    this.oscillators[0].frequency.setTargetAtTime(baseFreq, now, 0.08);
    this.oscillators[1].frequency.setTargetAtTime(baseFreq * 0.5, now, 0.08);
    this.oscillators[2].frequency.setTargetAtTime(baseFreq * 2.0, now, 0.08);
    // E-Motor pitch ramp: 420Hz up to 1400Hz
    this.oscillators[3].frequency.setTargetAtTime(420 + this.throttle * 980, now, 0.08);

    // Volume modulation
    const targetVol = 0.14 + this.throttle * 0.18;
    this.gainNode.gain.setTargetAtTime(targetVol, now, 0.05);

    // Filter opening on throttle
    if (this.filterNode) {
      const modeBase = this.activeMode === 'ROAD' ? 320 : this.activeMode === 'SPORT' ? 780 : 1800;
      this.filterNode.frequency.setTargetAtTime(modeBase + this.throttle * 1200, now, 0.08);
    }
  }

  triggerPop() {
    if (!this.ctx || !this.isPlaying) return;
    const now = this.ctx.currentTime;
    // Overrun crackle & pop
    const bufferSize = this.ctx.sampleRate * 0.08;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.3));
    }
    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;
    const popFilter = this.ctx.createBiquadFilter();
    popFilter.type = 'bandpass';
    popFilter.frequency.value = 600;
    popFilter.Q.value = 1.5;

    const popGain = this.ctx.createGain();
    popGain.gain.setValueAtTime(0.3, now);
    popGain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

    noise.connect(popFilter);
    popFilter.connect(popGain);
    popGain.connect(this.ctx.destination);
    noise.start(now);
  }

  getFrequencyData(array) {
    if (!this.analyser) return;
    this.analyser.getByteFrequencyData(array);
  }
}

export const bmwAudio = new BMWMAudioEngine();
