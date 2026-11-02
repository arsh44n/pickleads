import React, { useState } from 'react';
import { Sparkles, Palette, Shield, Compass, Sliders, ChevronRight } from 'lucide-react';

const AMBIENT_COLORS = [
  { id: 'm-blue', name: 'M Electric Blue', hex: '#0568A6' },
  { id: 'navy', name: 'Deep Midnight Navy', hex: '#252859' },
  { id: 'amber', name: 'Cognac Saddle Amber', hex: '#BF5B21' },
  { id: 'm-red', name: 'M Apex Crimson', hex: '#D93030' },
  { id: 'platinum', name: 'Cold Milled Platinum', hex: '#8C97A8' },
];

const MATERIALS = [
  {
    title: 'M Carbon Exterior Package',
    tag: 'LIGHTWEIGHT COMPOSITES',
    desc: 'Visually exposed carbon fibre-reinforced plastic (CFRP) on the roof, exterior aerodynamic mirror housings, and rear decklid gurney spoiler. Hand-finished with UV-protective clear gloss lacquer.',
    specs: ['CFRP Carbon Roof (-30kg)', 'Aerodynamic Mirror Caps', 'Rear Decklid Gurney Flap']
  },
  {
    title: 'M Multifunction Merino Seats',
    tag: 'ERGONOMIC LUXURY',
    desc: 'Upholstered in sumptuous Full Merino leather featuring motorsport honeycomb perforations and illuminated M5 emblems embedded directly in the headrests. Equipped with electro-pneumatic lateral bolster clamping.',
    specs: ['Full Grain Merino Leather', 'Illuminated M5 Badges', 'Electro-pneumatic Bolsters']
  },
  {
    title: 'M Ergonomic Steering Wheel',
    tag: 'RACE COCKPIT INTERACTION',
    desc: 'Thick-rimmed leather steering wheel with an authentic red 12 o’clock motorsport marking, carbon-reinforced shift paddles, and dedicated red anodized M1 and M2 programmable memory switches.',
    specs: ['Red 12 O’Clock Stripe', 'Carbon Shift Paddles', 'Programmable M1 / M2 Buttons']
  }
];

export default function Craftsmanship() {
  const [ambientColor, setAmbientColor] = useState(AMBIENT_COLORS[0]);
  const [activeMButton, setActiveMButton] = useState('M1'); // 'M1', 'M2'

  return (
    <section id="craftsmanship" className="relative w-full py-24 px-6 bg-[#FFFFFF] border-b border-[#D9D9D9] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D9D9D9] bg-[#F1F4F8] mb-3 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#0568A6]" />
              <span className="font-mono text-xs font-bold text-[#252859] uppercase tracking-wider">Bespoke Craftsmanship</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-[#252859] uppercase tracking-tight">
              MATERIALS <span className="text-[#0568A6]">& COCKPIT ARTISTRY</span>
            </h2>
            <p className="mt-3 text-[#4B5563] max-w-xl text-sm sm:text-base">
              Where high-tensile carbon composites meet the sensory indulgence of hand-stitched Merino leather and personalized ambient illumination.
            </p>
          </div>

          {/* Interactive Ambient Color Picker */}
          <div className="p-3 rounded-2xl bg-[#F8F9FA] border border-[#D9D9D9] flex items-center gap-3 shadow-sm">
            <span className="font-mono text-xs text-[#252859] font-bold flex items-center gap-1.5 pl-2">
              <Palette className="w-3.5 h-3.5 text-[#0568A6]" />
              <span>AMBIENT LIGHT:</span>
            </span>
            <div className="flex items-center gap-2">
              {AMBIENT_COLORS.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setAmbientColor(c)}
                  className={`w-7 h-7 rounded-full transition-all cursor-pointer relative ${
                    ambientColor.id === c.id ? 'scale-125 ring-2 ring-[#252859] ring-offset-2 ring-offset-white' : 'hover:scale-110'
                  }`}
                  style={{ backgroundColor: c.hex }}
                  title={c.name}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Cockpit Experience Display Box */}
        <div className="relative rounded-3xl overflow-hidden bg-[#F8F9FA] border border-[#D9D9D9] p-6 sm:p-10 mb-12 shadow-car-card">
          {/* Dynamic Ambient Light Strip */}
          <div
            className="absolute top-0 left-0 right-0 h-2 transition-all duration-700 shadow-md"
            style={{
              backgroundColor: ambientColor.hex,
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Cockpit Visualization with Ambient Glow (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-mono text-xs text-[#6B7280] font-bold uppercase tracking-widest">
                    ACTIVE CABIN ENVIRONMENT
                  </span>
                  <h3 className="font-display font-bold text-2xl text-[#252859] mt-1">
                    BMW INTERACTION BAR & ILLUMINATION
                  </h3>
                </div>
                <span
                  className="font-mono text-xs font-bold px-3 py-1 rounded-full border border-[#D9D9D9] bg-white"
                  style={{ color: ambientColor.hex }}
                >
                  {ambientColor.name}
                </span>
              </div>

              {/* Ambient Strip Visual Representation */}
              <div className="p-6 rounded-2xl bg-white border border-[#D9D9D9] shadow-sm relative overflow-hidden">
                <div
                  className="w-full h-1.5 rounded-full transition-all duration-700 mb-6"
                  style={{
                    backgroundColor: ambientColor.hex,
                    boxShadow: `0 0 15px ${ambientColor.hex}`
                  }}
                />

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 font-mono text-xs text-[#252859]">
                  <div className="p-3 bg-[#F8F9FA] rounded-xl border border-[#D9D9D9]">
                    <span className="text-[10px] text-[#6B7280] font-bold uppercase block">SEAT UPHOLSTERY</span>
                    <span className="text-[#252859] font-bold">Black / Silverstone Merino</span>
                  </div>
                  <div className="p-3 bg-[#F8F9FA] rounded-xl border border-[#D9D9D9]">
                    <span className="text-[10px] text-[#6B7280] font-bold uppercase block">TRIM ACCENTS</span>
                    <span className="text-[#252859] font-bold">M Carbon Fibre Twill</span>
                  </div>
                  <div className="p-3 bg-[#F8F9FA] rounded-xl border border-[#D9D9D9]">
                    <span className="text-[10px] text-[#6B7280] font-bold uppercase block">HEADLINER</span>
                    <span className="text-[#252859] font-bold">Anthracite Alcantara</span>
                  </div>
                </div>
              </div>

              {/* Interactive M1 / M2 Button Selector */}
              <div className="p-5 rounded-2xl bg-white border border-[#D9D9D9] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border-2 border-[#D93030] bg-[#D93030]/10 flex items-center justify-center font-display font-bold text-[#D93030] text-sm">
                    M
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm text-[#252859]">STEERING WHEEL M BUTTONS</div>
                    <div className="font-mono text-xs text-[#6B7280] font-medium">Programmable Instant Pre-sets</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setActiveMButton('M1')}
                    className={`px-5 py-2.5 rounded-xl font-display font-bold text-xs tracking-wider transition-all border cursor-pointer ${
                      activeMButton === 'M1'
                        ? 'bg-[#252859] text-white border-[#252859] shadow-md'
                        : 'bg-[#F8F9FA] text-[#252859] border-[#D9D9D9] hover:border-[#252859]'
                    }`}
                  >
                    M1: ROAD GRAND TOURING
                  </button>
                  <button
                    onClick={() => setActiveMButton('M2')}
                    className={`px-5 py-2.5 rounded-xl font-display font-bold text-xs tracking-wider transition-all border cursor-pointer ${
                      activeMButton === 'M2'
                        ? 'bg-[#D93030] text-white border-[#D93030] shadow-md'
                        : 'bg-[#F8F9FA] text-[#252859] border-[#D9D9D9] hover:border-[#D93030]'
                    }`}
                  >
                    M2: TRACK ATTACK 2WD
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Active M-Preset Telemetry Snapshot (5 Cols) */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-white border border-[#D9D9D9] shadow-sm font-mono text-xs space-y-4">
              <div className="flex justify-between items-center text-[11px] border-b border-[#D9D9D9] pb-2 font-bold">
                <span className="text-[#6B7280]">PROGRAMMED PRESET: <b className="text-[#252859]">{activeMButton}</b></span>
                <span className="text-[#0568A6] font-bold">CONFIG ACTIVE</span>
              </div>

              {activeMButton === 'M1' ? (
                <div className="space-y-3">
                  <div className="text-[#252859] font-medium leading-relaxed text-xs">
                    <b>M1 Setup: Everyday Refinement & High-Speed Highway Cruising.</b> Dynamic Damper Control set to Comfort, M xDrive active 4WD with standard DSC stability control.
                  </div>
                  <div className="space-y-2 pt-2 text-[11px] text-[#4B5563]">
                    <div className="flex justify-between"><span>DRIVETRAIN:</span> <b className="text-[#252859]">HYBRID EFFICIENT</b></div>
                    <div className="flex justify-between"><span>CHASSIS:</span> <b className="text-[#252859]">COMFORT</b></div>
                    <div className="flex justify-between"><span>STEERING:</span> <b className="text-[#252859]">COMFORT</b></div>
                    <div className="flex justify-between"><span>BRAKES:</span> <b className="text-[#252859]">COMFORT (PROGRESSIVE)</b></div>
                    <div className="flex justify-between"><span>M xDrive:</span> <b className="text-[#0568A6] font-bold">4WD ALL-WHEEL</b></div>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="text-[#252859] font-medium leading-relaxed text-xs">
                    <b>M2 Setup: Racetrack Attack & Controlled Oversteer Drift.</b> Drivelogic shifted to Stage 3 Manual, DSC completely deactivated, M xDrive locked into pure 2WD rear-wheel-drive!
                  </div>
                  <div className="space-y-2 pt-2 text-[11px] text-[#4B5563]">
                    <div className="flex justify-between"><span>DRIVETRAIN:</span> <b className="text-[#D93030] font-bold">SPORT PLUS</b></div>
                    <div className="flex justify-between"><span>CHASSIS:</span> <b className="text-[#D93030] font-bold">SPORT PLUS (MAX STIFF)</b></div>
                    <div className="flex justify-between"><span>STEERING:</span> <b className="text-[#D93030] font-bold">SPORT (DIRECT 14.1:1)</b></div>
                    <div className="flex justify-between"><span>BRAKES:</span> <b className="text-[#D93030] font-bold">SPORT (INSTANT BITE)</b></div>
                    <div className="flex justify-between"><span>M xDrive:</span> <b className="text-[#D93030] font-bold">2WD PURE REAR DRIFT</b></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Asymmetric Material Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MATERIALS.map((mat, i) => (
            <div key={i} className="bg-[#F8F9FA] p-7 rounded-3xl border border-[#D9D9D9] hover:border-[#0568A6] transition-all shadow-sm">
              <span className="font-mono text-[10px] text-[#0568A6] font-bold tracking-widest uppercase">
                {mat.tag}
              </span>
              <h4 className="font-display font-bold text-xl text-[#252859] mt-1 mb-3">
                {mat.title}
              </h4>
              <p className="text-xs text-[#4B5563] leading-relaxed mb-6">
                {mat.desc}
              </p>
              <div className="space-y-2 pt-4 border-t border-[#D9D9D9]">
                {mat.specs.map((s, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-mono text-[#252859] font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0568A6]" />
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
