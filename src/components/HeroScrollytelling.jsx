import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Sparkles, Zap, Shield, Gauge, Cpu, Layers } from 'lucide-react';

const TOTAL_FRAMES = 238;

export default function HeroScrollytelling() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);
  const animFrameIdRef = useRef(null);

  const [loadedCount, setLoadedCount] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
  const [scrollPercent, setScrollPercent] = useState(0);

  // Preload frames
  useEffect(() => {
    let isCancelled = false;
    const images = [];
    let loaded = 0;

    // Load initial frame 1 first for instant visual
    const firstImg = new Image();
    firstImg.src = `/frames/ezgif-frame-001.jpg`;
    firstImg.onload = () => {
      if (!isCancelled) {
        images[0] = firstImg;
        loaded++;
        setLoadedCount(loaded);
        drawFrame(0);
      }
    };
    images[0] = firstImg;

    // Load remaining frames
    for (let i = 2; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const frameNum = String(i).padStart(3, '0');
      img.src = `/frames/ezgif-frame-${frameNum}.jpg`;
      img.onload = () => {
        if (!isCancelled) {
          loaded++;
          setLoadedCount(loaded);
          if (loaded >= 30 && !isReady) {
            setIsReady(true);
          }
        }
      };
      images[i - 1] = img;
    }

    imagesRef.current = images;

    return () => {
      isCancelled = true;
    };
  }, []);

  // Frame drawing helper
  const drawFrame = (frameIdx) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = imagesRef.current[frameIdx];
    if (!img || !img.complete) {
      // Find closest loaded frame if current isn't ready
      for (let offset = 1; offset < 20; offset++) {
        const prev = imagesRef.current[frameIdx - offset];
        if (prev && prev.complete) {
          renderImgToCanvas(ctx, canvas, prev);
          return;
        }
        const next = imagesRef.current[frameIdx + offset];
        if (next && next.complete) {
          renderImgToCanvas(ctx, canvas, next);
          return;
        }
      }
      return;
    }

    renderImgToCanvas(ctx, canvas, img);
  };

  const renderImgToCanvas = (ctx, canvas, img) => {
    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    // Compute aspect-ratio contain fitting
    const imgRatio = img.naturalWidth / img.naturalHeight || (16 / 9);
    const canvasRatio = width / height;

    let drawW, drawH, drawX, drawY;

    if (canvasRatio > imgRatio) {
      // Screen is wider than image
      drawH = height;
      drawW = height * imgRatio;
      drawX = (width - drawW) / 2;
      drawY = 0;
    } else {
      // Screen is taller than image
      drawW = width;
      drawH = width / imgRatio;
      drawX = 0;
      drawY = (height - drawH) / 2;
    }

    ctx.drawImage(img, drawX, drawY, drawW, drawH);
  };

  // Resize canvas to match display DPR
  const handleResize = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();
    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);

    const activeIdx = Math.min(
      TOTAL_FRAMES - 1,
      Math.max(0, Math.round(currentProgressRef.current * (TOTAL_FRAMES - 1)))
    );
    drawFrame(activeIdx);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Physics-smoothed Lerp Loop with requestAnimationFrame
  useEffect(() => {
    const onScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const scrollableDistance = rect.height - window.innerHeight;
      if (scrollableDistance <= 0) return;

      const progress = Math.min(Math.max(-rect.top / scrollableDistance, 0), 1);
      targetProgressRef.current = progress;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    let lastIndex = -1;

    const tick = () => {
      const factor = 0.085;
      const diff = targetProgressRef.current - currentProgressRef.current;

      if (Math.abs(diff) > 0.0001) {
        currentProgressRef.current += diff * factor;
      } else {
        currentProgressRef.current = targetProgressRef.current;
      }

      const frameIdx = Math.min(
        TOTAL_FRAMES - 1,
        Math.max(0, Math.round(currentProgressRef.current * (TOTAL_FRAMES - 1)))
      );

      if (frameIdx !== lastIndex) {
        lastIndex = frameIdx;
        drawFrame(frameIdx);
        setCurrentFrameIndex(frameIdx);
        setScrollPercent(Math.round(currentProgressRef.current * 100));
      }

      animFrameIdRef.current = requestAnimationFrame(tick);
    };

    animFrameIdRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
    };
  }, []);

  // Jump to frame when clicking scrub bar
  const handleScrubClick = (e) => {
    const bar = e.currentTarget;
    const rect = bar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, clickX / rect.width));

    const container = containerRef.current;
    if (!container) return;
    const rectCont = container.getBoundingClientRect();
    const scrollableDistance = rectCont.height - window.innerHeight;
    const targetY = window.scrollY + rectCont.top + ratio * scrollableDistance;

    window.scrollTo({
      top: targetY,
      behavior: 'smooth'
    });
  };

  const progress = currentProgressRef.current;

  // Opacity calculations for overlays
  const heroTextOpacity = Math.max(0, 1 - progress * 5.5);
  const milestone1Opacity = Math.max(0, Math.min(1, (progress - 0.12) * 8)) * Math.max(0, Math.min(1, (0.35 - progress) * 8));
  const milestone2Opacity = Math.max(0, Math.min(1, (progress - 0.38) * 8)) * Math.max(0, Math.min(1, (0.62 - progress) * 8));
  const milestone3Opacity = Math.max(0, Math.min(1, (progress - 0.65) * 8)) * Math.max(0, Math.min(1, (0.86 - progress) * 8));
  const milestone4Opacity = Math.max(0, Math.min(1, (progress - 0.88) * 9));

  return (
    <div
      ref={containerRef}
      id="hero-scroll-container"
      className="relative w-full h-[500vh] bg-gradient-to-b from-[#F9FBFC] via-[#EFF2F6] to-[#E6EAEF]"
    >
      {/* Sticky Fullscreen Pinned Viewport */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        {/* Soft Ambient Light Gradient */}
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-[#0568A6]/10 via-[#252859]/5 to-transparent blur-3xl opacity-80" />

        {/* 3D Frame Sequence Canvas */}
        <canvas
          ref={canvasRef}
          className="w-full h-full object-contain pointer-events-none z-0"
        />

        {/* Loading Overlay if initial frames are fetching */}
        {loadedCount < 30 && (
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-[#F8F9FA] text-[#252859]">
            <div className="relative w-20 h-20 mb-6 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-2 border-[#D9D9D9]" />
              <div className="absolute inset-0 rounded-full border-2 border-t-[#0568A6] border-r-[#D93030] animate-spin" />
              <span className="font-display font-bold text-sm tracking-widest text-[#252859]">M5</span>
            </div>
            <div className="font-mono text-xs text-[#252859]/80 font-bold tracking-widest uppercase mb-2">
              INITIALIZING DECONSTRUCTION MATRIX
            </div>
            <div className="w-52 h-1.5 bg-[#D9D9D9] rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#0568A6] via-[#252859] to-[#D93030] transition-all duration-300"
                style={{ width: `${Math.min(100, (loadedCount / 30) * 100)}%` }}
              />
            </div>
          </div>
        )}

        {/* 0% Scroll: Hero Headline & Badging (Dark, crisp, perfectly legible over light studio frames) */}
        <div
          className="absolute inset-0 z-10 flex flex-col justify-between items-center py-20 px-6 pointer-events-none transition-opacity duration-300"
          style={{ opacity: heroTextOpacity }}
        >
          {/* Top Tagline with dark contrast */}
          <div className="text-center mt-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D9D9D9] bg-white/90 backdrop-blur-md shadow-sm mb-3">
              <div className="w-5 h-2.5 bg-m-stripes rounded-sm" />
              <span className="font-mono text-[11px] font-bold tracking-widest uppercase text-[#252859]">
                G90 FIRST EVER HYBRID POWERTRAIN
              </span>
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#252859] uppercase drop-shadow-sm">
              THE ALL-NEW <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#252859] via-[#0568A6] to-[#252859]">BMW M5</span>
            </h1>
            <p className="mt-2 text-base sm:text-xl font-medium text-[#252859]/80 tracking-wide">
              Driving pleasure. <span className="text-[#D93030] font-bold">To the core.</span>
            </p>
          </div>

          {/* Bottom Hero HUD Telemetry & Scroll Prompt */}
          <div className="flex flex-col items-center gap-5 w-full max-w-4xl">
            {/* Quick Spec Pills with high-contrast light cards */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 w-full max-w-xl text-center">
              <div className="light-panel px-4 py-3 rounded-2xl shadow-car-card">
                <div className="font-display font-bold text-xl sm:text-2xl text-[#252859]">
                  727 <span className="text-xs font-mono text-[#0568A6] font-bold">HP</span>
                </div>
                <div className="text-[10px] font-mono font-bold text-[#6B7280] uppercase tracking-wider">System Output</div>
              </div>

              <div className="light-panel px-4 py-3 rounded-2xl shadow-car-card">
                <div className="font-display font-bold text-xl sm:text-2xl text-[#252859]">
                  1000 <span className="text-xs font-mono text-[#D93030] font-bold">NM</span>
                </div>
                <div className="text-[10px] font-mono font-bold text-[#6B7280] uppercase tracking-wider">Combined Torque</div>
              </div>

              <div className="light-panel px-4 py-3 rounded-2xl shadow-car-card">
                <div className="font-display font-bold text-xl sm:text-2xl text-[#252859]">
                  3.5 <span className="text-xs font-mono text-[#BF5B21] font-bold">SEC</span>
                </div>
                <div className="text-[10px] font-mono font-bold text-[#6B7280] uppercase tracking-wider">0-100 KM/H</div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="flex flex-col items-center gap-2 pointer-events-auto">
              <span className="font-mono text-[10px] font-bold tracking-[0.25em] uppercase text-[#252859] animate-pulse">
                SCROLL TO DECONSTRUCT ARCHITECTURE
              </span>
              <div className="w-5 h-9 rounded-full border-2 border-[#252859]/30 flex items-start justify-center p-1 bg-white/80 shadow-sm">
                <div className="w-1.5 h-2.5 bg-[#252859] rounded-full animate-bounce" />
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Telemetry HUD Overlays During Scrubbing (High contrast light cards) */}

        {/* Milestone 1: Carbon Shell & Aerodynamics (Frames ~28 - 85) */}
        <div
          className="absolute left-6 md:left-16 top-1/4 z-20 max-w-sm pointer-events-none transition-opacity duration-300"
          style={{ opacity: milestone1Opacity }}
        >
          <div className="light-panel-elevated p-5 rounded-2xl border-l-4 border-l-[#0568A6]">
            <div className="flex items-center gap-2 text-[#0568A6] mb-2 font-mono text-xs font-bold tracking-wider">
              <Layers className="w-4 h-4" />
              <span>PHASE 01 // AERODYNAMICS & RIGIDITY</span>
            </div>
            <h3 className="font-display font-bold text-xl text-[#252859] tracking-wide">
              M CARBON ROOF & ARCHES
            </h3>
            <p className="text-xs text-[#374151] mt-2 leading-relaxed">
              CFRP carbon-fibre reinforced plastic roof lowers vehicle center of gravity. Flared wheel arches accommodate wider track (+75mm front) for racetrack road holding.
            </p>
            <div className="mt-3 pt-3 border-t border-[#D9D9D9] flex justify-between text-[11px] font-mono text-[#4B5563]">
              <span>WEIGHT SAVING: <b className="text-[#252859]">-30.4 KG</b></span>
              <span>DOWNFORCE: <b className="text-[#0568A6] font-bold">+18%</b></span>
            </div>
          </div>
        </div>

        {/* Milestone 2: S68 4.4L TwinPower Turbo V8 (Frames ~90 - 150) */}
        <div
          className="absolute right-6 md:right-16 top-1/4 z-20 max-w-sm pointer-events-none transition-opacity duration-300"
          style={{ opacity: milestone2Opacity }}
        >
          <div className="light-panel-elevated p-5 rounded-2xl border-l-4 border-l-[#D93030]">
            <div className="flex items-center gap-2 text-[#D93030] mb-2 font-mono text-xs font-bold tracking-wider">
              <Cpu className="w-4 h-4" />
              <span>PHASE 02 // COMBUSTION HEART</span>
            </div>
            <h3 className="font-display font-bold text-xl text-[#252859] tracking-wide">
              4.4L M TWINPOWER TURBO V8
            </h3>
            <p className="text-xs text-[#374151] mt-2 leading-relaxed">
              High-revving S68 unit delivers 585 hp (430 kW) alone. Cross-bank exhaust manifolds ensure instantaneous turbo response with twin electronically-controlled wastegates.
            </p>
            <div className="mt-3 pt-3 border-t border-[#D9D9D9] flex justify-between text-[11px] font-mono text-[#4B5563]">
              <span>MAX RPM: <b className="text-[#252859]">7,200</b></span>
              <span>V8 TORQUE: <b className="text-[#D93030] font-bold">750 NM</b></span>
            </div>
          </div>
        </div>

        {/* Milestone 3: E-Motor & 18.6 kWh Hybrid System (Frames ~155 - 205) */}
        <div
          className="absolute left-6 md:left-16 bottom-28 z-20 max-w-sm pointer-events-none transition-opacity duration-300"
          style={{ opacity: milestone3Opacity }}
        >
          <div className="light-panel-elevated p-5 rounded-2xl border-l-4 border-l-[#0568A6]">
            <div className="flex items-center gap-2 text-[#0568A6] mb-2 font-mono text-xs font-bold tracking-wider">
              <Zap className="w-4 h-4" />
              <span>PHASE 03 // ELECTRIC ACCELERATION</span>
            </div>
            <h3 className="font-display font-bold text-xl text-[#252859] tracking-wide">
              M HYBRID E-DRIVE MATRIX
            </h3>
            <p className="text-xs text-[#374151] mt-2 leading-relaxed">
              197 hp (145 kW) synchronous e-motor integrated into the 8-speed M Steptronic transmission. Patented pre-gearing stage boosts torque to 450 Nm directly at transmission input.
            </p>
            <div className="mt-3 pt-3 border-t border-[#D9D9D9] flex justify-between text-[11px] font-mono text-[#4B5563]">
              <span>EV RANGE: <b className="text-[#0568A6] font-bold">69 KM</b></span>
              <span>BATTERY: <b className="text-[#252859]">18.6 KWH</b></span>
            </div>
          </div>
        </div>

        {/* Milestone 4: Deconstruction Complete / Full M Architecture (Frames ~210 - 238) */}
        <div
          className="absolute right-6 md:right-16 bottom-28 z-20 max-w-sm pointer-events-none transition-opacity duration-300"
          style={{ opacity: milestone4Opacity }}
        >
          <div className="light-panel-elevated p-5 rounded-2xl border-l-4 border-l-[#BF5B21]">
            <div className="flex items-center gap-2 text-[#BF5B21] mb-2 font-mono text-xs font-bold tracking-wider">
              <Shield className="w-4 h-4" />
              <span>PHASE 04 // TOTAL CHASSIS SYNTHESIS</span>
            </div>
            <h3 className="font-display font-bold text-xl text-[#252859] tracking-wide">
              ADAPTIVE M & CERAMIC BRAKES
            </h3>
            <p className="text-xs text-[#374151] mt-2 leading-relaxed">
              Fully decoupled architecture revealed. High-performance ceramic matrix brakes with gold-painted calipers and rear-biased M xDrive ensure uncompromised motorsport pedigree.
            </p>
            <div className="mt-3 pt-3 border-t border-[#D9D9D9] flex justify-between text-[11px] font-mono text-[#4B5563]">
              <span>DISC DIAMETER: <b className="text-[#252859]">420 MM</b></span>
              <span>CALIPERS: <b className="text-[#BF5B21] font-bold">6-PISTON FIXED</b></span>
            </div>
          </div>
        </div>

        {/* Bottom Persistent Scrollytelling Telemetry HUD */}
        <div className="absolute bottom-5 left-0 right-0 z-20 px-6 flex flex-col items-center">
          <div className="w-full max-w-3xl light-panel py-2.5 px-5 rounded-2xl border border-[#D9D9D9] flex flex-col gap-2 shadow-car-elevated">
            {/* Top row with telemetry text */}
            <div className="flex items-center justify-between text-[11px] font-mono tracking-wider">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0568A6] animate-ping" />
                <span className="text-[#252859] font-bold">EXPLODED VIEW 3D TELEMETRY</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#4B5563]">
                  FRAME <span className="text-[#252859] font-bold">{String(currentFrameIndex + 1).padStart(3, '0')}</span> / {TOTAL_FRAMES}
                </span>
                <span className="text-[#D9D9D9]">|</span>
                <span className="text-[#D93030] font-bold">{scrollPercent}%</span>
              </div>
            </div>

            {/* Clickable / Draggable Scrub Bar */}
            <div
              onClick={handleScrubClick}
              className="relative w-full h-2.5 bg-[#E5E7EB] rounded-full cursor-pointer group overflow-hidden border border-[#D9D9D9]"
              title="Click or drag to scrub animation"
            >
              {/* BMW M Tricolor Gradient fill */}
              <div
                className="h-full bg-gradient-to-r from-[#0568A6] via-[#252859] to-[#D93030] relative transition-all duration-75 rounded-full"
                style={{ width: `${(currentFrameIndex / (TOTAL_FRAMES - 1)) * 100}%` }}
              >
                <div className="absolute right-0 top-0 bottom-0 w-2.5 bg-white shadow-md border-r border-[#252859]" />
              </div>
            </div>

            {/* Bottom mini indicator tags */}
            <div className="flex justify-between items-center text-[9px] font-mono text-[#6B7280] uppercase font-semibold">
              <span>001: ASSEMBLED</span>
              <span>060: AERODYNAMICS</span>
              <span>120: V8 BITURBO</span>
              <span>180: M HYBRID</span>
              <span>238: FULL CHASSIS</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
