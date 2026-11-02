import React, { useState } from 'react';
import { Eye, Sun, Moon, Sparkles, Compass, ShieldAlert, CheckCircle2, ChevronRight, Zap } from 'lucide-react';

const PERSPECTIVES = [
  {
    id: 'iconic-glow',
    title: 'Iconic Glow & Double Light',
    subtitle: 'Front Illumination Architecture',
    desc: 'The sculptural BMW kidney grille features continuous contour line illumination ("Iconic Glow"). Paired with sharp vertical double light signature headlights, the M5 commands respect before the engine even turns over.',
    stats: { beam: '500m LaserMatrix', contour: '360° Neon LED', signature: 'Vertical Dual Arrow' },
    badge: 'SIGNATURE LIGHTING',
  },
  {
    id: 'stance',
    title: 'Widened Track & Flared Arches',
    subtitle: 'Muscular Widebody Architecture',
    desc: 'A massive +75 mm front track increase and +48 mm rear widening accommodate 20" front and 21" rear M light alloy wheels (Style 951 M Black). Aerodynamically optimized air curtains channel airflow past the high-camber front wheels.',
    stats: { frontWidth: '+75 mm', rearWidth: '+48 mm', wheels: '20" / 21" Staggered' },
    badge: 'AERODYNAMIC STANCE',
  },
  {
    id: 'diffuser',
    title: 'Two-Section Diffuser & Quad Exhaust',
    subtitle: 'High-Downforce Rear Architecture',
    desc: 'Motorsport rear apron with deep twin-channel aerodynamic diffuser. Houses 100mm quad chrome-black tailpipes with electronically controlled twin continuous exhaust flaps for instant acoustic management.',
    stats: { tailpipes: '4x 100mm Quad', flaps: 'Twin Continuous', downforce: 'Race Optimized' },
    badge: 'EXHAUST ARCHITECTURE',
  },
  {
    id: 'carpet',
    title: 'M Dynamic Welcome Light Carpet',
    subtitle: 'Sensory Entry Experience',
    desc: 'As the driver approaches with the BMW Digital Key Plus, high-resolution micro-lens projectors cast a dynamic M-stripe animated carpet onto the tarmac alongside both front doors.',
    stats: { range: '3.0 Meters', projection: 'Dynamic M Stripes', auth: 'Digital Key Plus (UWB)' },
    badge: 'IMMERSIVE WELCOME',
  }
];

export default function ProductReveal() {
  const [activePersp, setActivePersp] = useState(PERSPECTIVES[0]);
  const [lightMode, setLightMode] = useState('iconic'); // 'day', 'iconic', 'track'
  const [activeHotspot, setActiveHotspot] = useState(null);

  const hotspots = [
    { id: 'kidney', x: '51%', y: '48%', label: 'Iconic Glow Grille', text: 'Illuminated contour line kidney frame with high-gloss black active slats' },
    { id: 'drl', x: '42%', y: '44%', label: 'Double Light Signature', text: 'Sculpted vertical LED daytime running lights with adaptive matrix beams' },
    { id: 'wheels', x: '24%', y: '68%', label: 'Style 951 M Alloys', text: 'Forged 20" front / 21" rear staggered double-spoke lightweight wheels' },
    { id: 'diffuser', x: '82%', y: '62%', label: 'Quad Exhaust & Diffuser', text: 'Quad 100 mm exhaust tailpipes with twin electronically regulated sound flaps' },
  ];

  return (
    <section id="product-reveal" className="relative w-full py-24 px-6 bg-[#F8F9FA] border-b border-[#D9D9D9] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D9D9D9] bg-white mb-3 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#0568A6]" />
              <span className="font-mono text-xs font-bold text-[#252859] uppercase tracking-wider">Exterior Sculpture</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-[#252859] uppercase tracking-tight">
              DESIGNED TO <span className="text-[#0568A6]">DOMINATE</span>
            </h2>
            <p className="mt-3 text-[#4B5563] max-w-xl text-sm sm:text-base">
              A high-impact athletic presence with widened proportions, motorsport carbon aerodynamics, and the signature BMW kidney Iconic Glow.
            </p>
          </div>

          {/* Interactive Light Mode Selector */}
          <div className="p-1.5 rounded-2xl flex items-center gap-1.5 bg-white border border-[#D9D9D9] shadow-sm self-start md:self-auto">
            <button
              onClick={() => setLightMode('day')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                lightMode === 'day'
                  ? 'bg-[#252859] text-white shadow-sm'
                  : 'text-[#4B5563] hover:text-[#252859]'
              }`}
            >
              <Sun className="w-3.5 h-3.5" />
              <span>DAYLIGHT RUN</span>
            </button>
            <button
              onClick={() => setLightMode('iconic')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                lightMode === 'iconic'
                  ? 'bg-[#0568A6] text-white shadow-sm'
                  : 'text-[#4B5563] hover:text-[#252859]'
              }`}
            >
              <Moon className="w-3.5 h-3.5" />
              <span>ICONIC GLOW</span>
            </button>
            <button
              onClick={() => setLightMode('track')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                lightMode === 'track'
                  ? 'bg-[#D93030] text-white shadow-sm'
                  : 'text-[#4B5563] hover:text-[#252859]'
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              <span>TRACK MATRIX</span>
            </button>
          </div>
        </div>

        {/* Main Showcase Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Interactive Visual Vehicle Display (8 Cols) */}
          <div className="lg:col-span-8 relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#F4F6F9] to-[#E9EDF2] border border-[#D9D9D9] min-h-[440px] md:min-h-[520px] flex items-center justify-center p-6 shadow-car-card">
            {/* Dynamic Light Background Accent */}
            <div
              className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${
                lightMode === 'iconic'
                  ? 'opacity-100 bg-[radial-gradient(ellipse_at_center,_rgba(5,104,166,0.12)_0%,_transparent_70%)]'
                  : lightMode === 'track'
                  ? 'opacity-100 bg-[radial-gradient(ellipse_at_center,_rgba(217,48,48,0.12)_0%,_transparent_70%)]'
                  : 'opacity-40 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.6)_0%,_transparent_70%)]'
              }`}
            />

            {/* Showcase Image */}
            <div className="relative w-full h-full max-h-[460px] flex items-center justify-center">
              <img
                src="/assets/bmw-showcase.jpeg"
                alt="BMW M5 Sedan High-Performance Showcase"
                className={`w-full max-h-[440px] object-contain drop-shadow-[0_15px_30px_rgba(37,40,89,0.25)] transition-all duration-700 ${
                  lightMode === 'iconic'
                    ? 'filter contrast-105 brightness-100'
                    : lightMode === 'track'
                    ? 'filter saturate-110 contrast-110'
                    : 'filter brightness-100'
                }`}
              />

              {/* Iconic Glow Kidney & Headlight Simulation Overlay */}
              {lightMode === 'iconic' && (
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <div className="w-[180px] h-[75px] rounded-full border-2 border-[#0568A6] shadow-[0_0_30px_#0568A6,inset_0_0_15px_#0568A6] animate-pulse opacity-90 translate-y-2" />
                  <div className="absolute left-[28%] top-[45%] w-10 h-1 bg-[#0568A6] blur-[2px] shadow-[0_0_10px_#0568A6]" />
                  <div className="absolute right-[28%] top-[45%] w-10 h-1 bg-[#0568A6] blur-[2px] shadow-[0_0_10px_#0568A6]" />
                </div>
              )}

              {/* Track Matrix High-Beam Simulation */}
              {lightMode === 'track' && (
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <div className="w-[200px] h-[80px] rounded-full border-2 border-[#D93030] shadow-[0_0_35px_#D93030] opacity-80 translate-y-2" />
                  <div className="absolute left-[24%] top-[43%] w-24 h-6 bg-gradient-to-r from-transparent via-[#D93030]/30 to-transparent blur-md -rotate-6" />
                  <div className="absolute right-[24%] top-[43%] w-24 h-6 bg-gradient-to-r from-transparent via-[#D93030]/30 to-transparent blur-md rotate-6" />
                </div>
              )}

              {/* Interactive Hotspot Buttons */}
              {hotspots.map((spot) => (
                <button
                  key={spot.id}
                  onClick={() => setActiveHotspot(activeHotspot?.id === spot.id ? null : spot)}
                  className={`absolute z-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-transform duration-200 ${
                    activeHotspot?.id === spot.id ? 'scale-125' : 'hover:scale-110'
                  }`}
                  style={{ left: spot.x, top: spot.y }}
                  title={spot.label}
                >
                  <div className="relative flex items-center justify-center">
                    <span className="absolute w-8 h-8 rounded-full bg-[#0568A6]/30 animate-ping" />
                    <span className="relative w-7 h-7 rounded-full bg-[#252859] border-2 border-white flex items-center justify-center text-xs font-bold text-white shadow-md">
                      +
                    </span>
                  </div>
                </button>
              ))}

              {/* Active Hotspot Modal Popover */}
              {activeHotspot && (
                <div className="absolute z-30 bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-80 p-5 rounded-2xl bg-white border border-[#D9D9D9] shadow-2xl animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#0568A6] font-bold">
                      INSPECTED COMPONENT
                    </span>
                    <button
                      onClick={() => setActiveHotspot(null)}
                      className="text-[#6B7280] hover:text-[#252859] text-xs font-mono font-bold cursor-pointer"
                    >
                      [CLOSE]
                    </button>
                  </div>
                  <h4 className="font-display font-bold text-sm text-[#252859]">{activeHotspot.label}</h4>
                  <p className="text-xs text-[#4B5563] mt-1.5 leading-relaxed">{activeHotspot.text}</p>
                </div>
              )}
            </div>

            {/* Bottom Stance Specs Bar */}
            <div className="absolute bottom-4 left-6 right-6 flex justify-between items-center text-[11px] font-mono text-[#4B5563] border-t border-[#D9D9D9] pt-3">
              <span className="flex items-center gap-2 font-bold text-[#252859]">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                AERODYNAMIC DRAG: <b className="text-[#252859]">Cd 0.31</b>
              </span>
              <span className="font-semibold text-[#0568A6]">DOUBLE-SPOKE STYLE 951 M</span>
            </div>
          </div>

          {/* Perspective Selector & Technical Storytelling (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col gap-3.5">
            {PERSPECTIVES.map((p) => {
              const isSelected = activePersp.id === p.id;
              return (
                <div
                  key={p.id}
                  onClick={() => setActivePersp(p)}
                  className={`p-5 rounded-2xl cursor-pointer transition-all border ${
                    isSelected
                      ? 'bg-white border-[#252859] shadow-car-card transform translate-x-1'
                      : 'bg-[#FFFFFF] border-[#D9D9D9] hover:border-[#0568A6] hover:bg-[#F8F9FA]'
                  }`}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className={`font-mono text-[10px] tracking-widest uppercase font-bold ${
                      isSelected ? 'text-[#0568A6]' : 'text-[#6B7280]'
                    }`}>
                      {p.badge}
                    </span>
                    {isSelected && (
                      <span className="w-2.5 h-2.5 rounded-full bg-[#D93030] shadow-sm" />
                    )}
                  </div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-[#252859]">
                    {p.title}
                  </h3>
                  <p className="text-xs text-[#4B5563] mt-2 line-clamp-3 leading-relaxed">
                    {p.desc}
                  </p>

                  {/* Stats list for selected perspective */}
                  {isSelected && (
                    <div className="mt-4 pt-3 border-t border-[#D9D9D9] grid grid-cols-3 gap-2 text-center">
                      {Object.entries(p.stats).map(([k, v]) => (
                        <div key={k} className="bg-[#F8F9FA] rounded-xl p-2 border border-[#D9D9D9]">
                          <div className="text-[11px] font-mono font-bold text-[#252859]">{v}</div>
                          <div className="text-[9px] font-mono text-[#6B7280] uppercase tracking-tighter">{k}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
