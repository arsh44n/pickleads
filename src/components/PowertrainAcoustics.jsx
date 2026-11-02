import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Gauge, Zap, Flame, Activity, Disc, ChevronRight } from 'lucide-react';
import { bmwAudio } from '../utils/audioEngine';

const MODES = {
  ROAD: {
    name: 'ROAD',
    tag: 'EFFICIENCY & SUPREME COMFORT',
    v8Power: '40%',
    evPower: '60%',
    flaps: 'CLOSED (15%)',
    db: '68 dB',
    color: '#0568A6',
    damping: 'Adaptive Comfort',
    gearbox: 'Smooth Steptronic D',
    desc: 'Pure electric urban cruising combined with silent hybrid assistance. Quad exhaust flaps remain closed for relaxed long-distance touring.'
  },
  SPORT: {
    name: 'SPORT',
    tag: 'DYNAMIC AGILITY & RAPID LAUNCH',
    v8Power: '75%',
    evPower: '85%',
    flaps: 'ACTIVE DUAL FLAP (60%)',
    db: '94 dB',
    color: '#252859',
    damping: 'M Dynamic Sport',
    gearbox: 'Crisp Shift S-Mode',
    desc: 'V8 twin-turbo fires up into deep resonant growl. Electric drive acts as an instantaneous torque-fill, eliminating turbo lag entirely.'
  },
  TRACK: {
    name: 'TRACK',
    tag: '100% UNRESTRICTED MOTORSPORT',
    v8Power: '100%',
    evPower: '100%',
    flaps: 'OPEN QUAD BYPASS (100%)',
    db: '118 dB',
    color: '#D93030',
    damping: 'Racetrack Stiffened',
    gearbox: 'Drivelogic 3 Manual Shift',
    desc: 'Uncompromising 727 HP uncapped launch. Quad exhaust valves swing completely open, unleashing raw V8 bi-turbo acoustic roar and overrun backfire crackles.'
  }
};

export default function PowertrainAcoustics() {
  const [selectedMode, setSelectedMode] = useState('SPORT');
  const [isAudioActive, setIsAudioActive] = useState(false);
  const [throttle, setThrottle] = useState(0.3);
  const [isRevving, setIsRevving] = useState(false);
  const visualizerCanvasRef = useRef(null);
  const animationFrameRef = useRef(null);

  // Handle mode change
  const handleModeChange = (modeKey) => {
    setSelectedMode(modeKey);
    bmwAudio.updateModeFilter(modeKey);
    if (isAudioActive) {
      bmwAudio.triggerPop();
    }
  };

  // Toggle master sound
  const toggleSound = () => {
    if (isAudioActive) {
      bmwAudio.stop();
      setIsAudioActive(false);
    } else {
      bmwAudio.start();
      bmwAudio.updateModeFilter(selectedMode);
      bmwAudio.setThrottle(throttle);
      setIsAudioActive(true);
    }
  };

  // Throttle rev simulation
  const handleThrottleChange = (e) => {
    const val = parseFloat(e.target.value);
    setThrottle(val);
    if (isAudioActive) {
      bmwAudio.setThrottle(val);
    }
  };

  // Press & hold rev button
  const startRev = () => {
    setIsRevving(true);
    if (!isAudioActive) {
      bmwAudio.start();
      setIsAudioActive(true);
    }
    bmwAudio.setThrottle(0.95);
    setThrottle(0.95);
  };

  const stopRev = () => {
    setIsRevving(false);
    bmwAudio.setThrottle(0.2);
    setThrottle(0.2);
    if (isAudioActive) {
      bmwAudio.triggerPop();
    }
  };

  // Realtime Audio Visualizer Loop
  useEffect(() => {
    const canvas = visualizerCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const freqData = new Uint8Array(32);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (isAudioActive) {
        bmwAudio.getFrequencyData(freqData);
      } else {
        for (let i = 0; i < 32; i++) {
          freqData[i] = Math.sin(Date.now() * 0.003 + i * 0.3) * 15 + 10;
        }
      }

      const barWidth = (canvas.width / 32) * 0.75;
      let x = 0;

      for (let i = 0; i < 32; i++) {
        const barHeight = (freqData[i] / 255) * canvas.height * 0.85 + 4;

        const activeColor = MODES[selectedMode].color;
        const grad = ctx.createLinearGradient(0, canvas.height, 0, 0);
        grad.addColorStop(0, '#0F121C');
        grad.addColorStop(0.6, activeColor);
        grad.addColorStop(1, '#FFFFFF');

        ctx.fillStyle = grad;
        ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);

        x += barWidth + 3;
      }

      animationFrameRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isAudioActive, selectedMode]);

  const current = MODES[selectedMode];

  return (
    <section id="powertrain" className="relative w-full py-24 px-6 bg-[#FFFFFF] border-b border-[#D9D9D9] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D9D9D9] bg-[#F1F4F8] mb-3 shadow-sm">
              <Activity className="w-3.5 h-3.5 text-[#D93030]" />
              <span className="font-mono text-xs font-bold text-[#252859] uppercase tracking-wider">Acoustic & Drive Dynamics</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-[#252859] uppercase tracking-tight">
              POWERTRAIN <span className="text-[#0568A6]">& ACOUSTICS</span>
            </h2>
            <p className="mt-3 text-[#4B5563] max-w-xl text-sm sm:text-base">
              Dual hearts in perfect synchronicity: high-revving 4.4L TwinPower Turbo V8 paired with a race-bred synchronous electric drive and quad active-flap exhaust.
            </p>
          </div>

          {/* Sound Toggle Button */}
          <button
            onClick={toggleSound}
            className={`flex items-center gap-3 px-5 py-3 rounded-2xl font-mono text-xs font-bold tracking-wider transition-all cursor-pointer border shadow-sm ${
              isAudioActive
                ? 'bg-[#0568A6] text-white border-[#0568A6] shadow-md'
                : 'bg-white text-[#252859] border-[#D9D9D9] hover:border-[#0568A6]'
            }`}
          >
            {isAudioActive ? <Volume2 className="w-4 h-4 animate-pulse" /> : <VolumeX className="w-4 h-4" />}
            <span>{isAudioActive ? 'EXHAUST SYNTHESIZER: ACTIVE' : 'ENABLE ACOUSTICS'}</span>
          </button>
        </div>

        {/* M Drive Mode Switcher Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {Object.keys(MODES).map((key) => {
            const m = MODES[key];
            const isSelected = selectedMode === key;
            return (
              <button
                key={key}
                onClick={() => handleModeChange(key)}
                className={`p-6 rounded-2xl text-left transition-all border relative overflow-hidden cursor-pointer ${
                  isSelected
                    ? 'bg-white border-[#252859] shadow-car-card transform -translate-y-0.5'
                    : 'bg-[#F8F9FA] border-[#D9D9D9] hover:border-[#0568A6] hover:bg-white'
                }`}
              >
                {/* Active highlight line */}
                {isSelected && (
                  <div
                    className="absolute top-0 left-0 right-0 h-1.5"
                    style={{ backgroundColor: m.color }}
                  />
                )}
                <div className="flex justify-between items-center mb-1">
                  <span className="font-display font-bold text-xl text-[#252859]">M MODE: {m.name}</span>
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: m.color }}
                  />
                </div>
                <div className="font-mono text-[10px] text-[#6B7280] tracking-wider uppercase mb-3 font-semibold">
                  {m.tag}
                </div>
                <div className="flex items-center gap-4 text-xs font-mono text-[#4B5563]">
                  <span>FLAPS: <b className="text-[#252859]">{m.flaps}</b></span>
                  <span>DECIBEL: <b style={{ color: m.color }}>{m.db}</b></span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Central Cockpit Telemetry Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Dual-Heart Power Distribution (7 Cols) */}
          <div className="lg:col-span-7 bg-[#F8F9FA] p-6 sm:p-8 rounded-3xl border border-[#D9D9D9] flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="font-display font-bold text-lg text-[#252859]">HYBRID POWER SYNERGY</h3>
                  <p className="font-mono text-xs text-[#6B7280] mt-0.5">V8 Petrol vs. Synchronous Electric Drive</p>
                </div>
                <div className="text-right">
                  <div className="font-display font-bold text-2xl text-[#252859]">
                    727 <span className="text-sm font-mono text-[#0568A6]">HP</span>
                  </div>
                  <div className="font-mono text-[10px] text-[#6B7280] uppercase font-semibold">Combined Peak Output</div>
                </div>
              </div>

              {/* Power Split Meters */}
              <div className="space-y-5">
                {/* Combustion V8 */}
                <div className="p-4 rounded-2xl bg-white border border-[#D9D9D9]">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <Flame className="w-4 h-4 text-[#D93030]" />
                      <span className="font-mono text-xs font-bold text-[#252859]">M TWINPOWER TURBO V8 (4.4L)</span>
                    </div>
                    <span className="font-mono text-xs text-[#252859] font-bold">585 HP (430 kW) / 750 Nm</span>
                  </div>
                  <div className="w-full h-3 bg-[#E5E7EB] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#D93030] transition-all duration-500 rounded-full"
                      style={{ width: current.v8Power }}
                    />
                  </div>
                  <div className="flex justify-between text-[10px] font-mono text-[#6B7280] mt-2 font-medium">
                    <span>Cross-bank exhaust manifolds</span>
                    <span>High-pressure direct injection (350 bar)</span>
                  </div>
                </div>

                {/* Electric E-Motor */}
                <div className="p-4 rounded-2xl bg-white border border-[#D9D9D9]">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-[#0568A6]" />
                      <span className="font-mono text-xs font-bold text-[#252859]">M HYBRID ELECTRIC DRIVE</span>
                    </div>
                    <span className="font-mono text-xs text-[#252859] font-bold">197 HP (145 kW) / 450 Nm Pre-Geared</span>
                  </div>
                  <div className="w-full h-3 bg-[#E5E7EB] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#0568A6] transition-all duration-500 rounded-full"
                      style={{ width: current.evPower }}
                    />
                  </div>
                  <div className="flex justify-between text-[10px] font-mono text-[#6B7280] mt-2 font-medium">
                    <span>18.6 kWh Lithium-ion high voltage</span>
                    <span>Zero-delay instantaneous launch</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mode Behavioral Insight Callout */}
            <div className="mt-8 p-4 rounded-2xl bg-white border border-[#D9D9D9] flex items-start gap-3">
              <Activity className="w-5 h-5 text-[#252859] shrink-0 mt-0.5" />
              <div>
                <div className="font-mono text-xs font-bold text-[#252859] uppercase tracking-wider">
                  {selectedMode} CONFIGURATION PROFILE
                </div>
                <p className="text-xs text-[#4B5563] mt-1 leading-relaxed">
                  {current.desc}
                </p>
                <div className="mt-3 flex flex-wrap gap-4 text-[11px] font-mono text-[#4B5563]">
                  <span>SUSPENSION: <b className="text-[#252859]">{current.damping}</b></span>
                  <span>DRIVELOGIC: <b className="text-[#252859]">{current.gearbox}</b></span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Exhaust Sound Stage & Interactive Rev Throttle (5 Cols) */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-[#D9D9D9] flex flex-col justify-between shadow-car-card">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="font-mono text-xs tracking-widest uppercase text-[#4B5563] font-bold">
                  EXHAUST FLAP FREQUENCY ANALYZER
                </span>
                <span
                  className="font-mono text-xs font-bold px-3 py-1 rounded-full border"
                  style={{ borderColor: current.color, color: current.color }}
                >
                  {current.db}
                </span>
              </div>

              {/* Realtime Waveform Canvas (Cockpit Instrument Style) */}
              <div className="w-full h-36 bg-[#161928] rounded-2xl p-2 flex items-center justify-center relative overflow-hidden shadow-inner">
                <canvas
                  ref={visualizerCanvasRef}
                  width={380}
                  height={130}
                  className="w-full h-full relative z-10"
                />
              </div>

              {/* Throttle Slider */}
              <div className="mt-6">
                <div className="flex justify-between items-center text-xs font-mono mb-2">
                  <span className="text-[#4B5563] font-bold">RPM THROTTLE POSITION:</span>
                  <span className="text-[#252859] font-bold text-sm">{Math.round(1200 + throttle * 6000)} RPM</span>
                </div>
                <input
                  type="range"
                  min="0.1"
                  max="1.0"
                  step="0.01"
                  value={throttle}
                  onChange={handleThrottleChange}
                  className="w-full h-2.5 bg-[#E5E7EB] rounded-lg appearance-none cursor-pointer accent-[#D93030]"
                />
              </div>
            </div>

            {/* Interactive Rev Pedal / Test Flaps Button */}
            <div className="mt-8 space-y-3">
              <button
                onMouseDown={startRev}
                onMouseUp={stopRev}
                onTouchStart={startRev}
                onTouchEnd={stopRev}
                className={`w-full py-4 rounded-2xl font-display font-bold text-sm tracking-wider uppercase transition-all select-none shadow-car-button flex items-center justify-center gap-3 cursor-pointer ${
                  isRevving
                    ? 'bg-[#B82222] text-white scale-[0.98]'
                    : 'bg-[#D93030] hover:bg-[#B82222] text-white'
                }`}
              >
                <Flame className={`w-5 h-5 ${isRevving ? 'animate-bounce text-yellow-300' : 'text-white'}`} />
                <span>{isRevving ? 'REV REDLINE // 7,200 RPM!' : 'HOLD TO REV THROTTLE'}</span>
              </button>

              <button
                onClick={() => {
                  if (!isAudioActive) {
                    bmwAudio.start();
                    setIsAudioActive(true);
                  }
                  bmwAudio.triggerPop();
                }}
                className="btn-m-navy w-full py-3 rounded-xl text-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <Activity className="w-3.5 h-3.5 text-[#0568A6]" />
                <span>TRIGGER OVERRUN CRACKLES & POPS</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
