import React, { useState } from 'react';
import { Gauge, Cpu, Zap, Compass, ShieldCheck, Leaf, Eye, Monitor, Layers, Check, X } from 'lucide-react';

export default function TechSpecs() {
  const [unit, setUnit] = useState('metric'); // 'metric' or 'imperial'

  const specs = [
    {
      label: 'SYSTEM OUTPUT',
      value: unit === 'metric' ? '535 kW / 727 HP' : '717 BHP / 727 HP',
      sub: 'TwinPower Turbo V8 + E-Motor',
      accent: '#0568A6'
    },
    {
      label: 'MAXIMUM TORQUE',
      value: unit === 'metric' ? '1,000 Nm' : '738 lb-ft',
      sub: 'M xDrive All-Wheel Distribution',
      accent: '#D93030'
    },
    {
      label: 'ACCELERATION 0-100 KM/H',
      value: unit === 'metric' ? '3.5 SEC' : '3.4 SEC (0-60 MPH)',
      sub: '0-200 km/h in 10.9 sec',
      accent: '#BF5B21'
    },
    {
      label: 'TOP SPEED (M DRIVER’S)',
      value: unit === 'metric' ? '305 km/h' : '190 mph',
      sub: 'Electronically regulated limit',
      accent: '#252859'
    },
    {
      label: 'PURE ELECTRIC RANGE',
      value: unit === 'metric' ? 'UP TO 69 km' : 'UP TO 43 miles',
      sub: 'WLTP Emission-Free Urban Cycle',
      accent: '#0568A6'
    },
    {
      label: 'USABLE BATTERY ENERGY',
      value: '18.6 kWh',
      sub: 'Lithium-ion with 7.4 kW AC charging',
      accent: '#252859'
    },
    {
      label: 'TRANSMISSION',
      value: '8-Speed M Steptronic',
      sub: 'Drivelogic & Pre-geared E-Motor',
      accent: '#D93030'
    },
    {
      label: 'SUSPENSION ARCHITECTURE',
      value: 'Adaptive M + Active Steer',
      sub: 'Rear-axle steering up to 1.5°',
      accent: '#0568A6'
    }
  ];

  const competitors = [
    {
      car: 'BMW M5 Sedan (G90)',
      hp: '727 HP',
      torque: '1,000 Nm',
      evRange: '69 km',
      accel: '3.5 s',
      msrp: 'From $119,500',
      isHero: true
    },
    {
      car: 'Porsche Panamera Turbo E-Hybrid',
      hp: '680 HP',
      torque: '930 Nm',
      evRange: '56 km',
      accel: '3.2 s',
      msrp: 'From $191,000',
      isHero: false
    },
    {
      car: 'Mercedes-AMG GT 63 S E-Performance',
      hp: '843 HP',
      torque: '1,400 Nm',
      evRange: '12 km',
      accel: '2.9 s',
      msrp: 'From $194,900',
      isHero: false
    }
  ];

  return (
    <section id="tech-specs" className="relative w-full py-24 px-6 bg-[#F8F9FA] border-b border-[#D9D9D9] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D9D9D9] bg-white mb-3 shadow-sm">
              <Gauge className="w-3.5 h-3.5 text-[#0568A6]" />
              <span className="font-mono text-xs font-bold text-[#252859] uppercase tracking-wider">Telemetry & Specifications</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-[#252859] uppercase tracking-tight">
              TECHNICAL <span className="text-[#0568A6]">DATA & TELEMETRY</span>
            </h2>
            <p className="mt-3 text-[#4B5563] max-w-xl text-sm sm:text-base">
              The benchmark figures of the G90 generation. A synthesis of motorsport combustion output and electrified high-voltage precision.
            </p>
          </div>

          {/* Metric / Imperial Unit Switcher */}
          <div className="p-1 rounded-xl flex items-center bg-white border border-[#D9D9D9] shadow-sm self-start md:self-auto">
            <button
              onClick={() => setUnit('metric')}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                unit === 'metric'
                  ? 'bg-[#252859] text-white shadow-sm'
                  : 'text-[#6B7280] hover:text-[#252859]'
              }`}
            >
              METRIC (KM/H, NM)
            </button>
            <button
              onClick={() => setUnit('imperial')}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                unit === 'imperial'
                  ? 'bg-[#252859] text-white shadow-sm'
                  : 'text-[#6B7280] hover:text-[#252859]'
              }`}
            >
              IMPERIAL (MPH, LB-FT)
            </button>
          </div>
        </div>

        {/* High-Density Performance Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {specs.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-3xl border border-[#D9D9D9] hover:border-[#0568A6] transition-all shadow-car-card flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="font-mono text-[10px] text-[#6B7280] tracking-widest uppercase font-bold">
                    {item.label}
                  </span>
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: item.accent }}
                  />
                </div>
                <div className="font-display font-bold text-2xl lg:text-3xl text-[#252859] tracking-tight">
                  {item.value}
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-[#D9D9D9] text-xs font-mono text-[#4B5563] font-medium">
                {item.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Competitive Benchmark Comparison Table (Buyer Psychology: Decision Justification) */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#D9D9D9] shadow-car-card mb-16">
          <div className="mb-6">
            <span className="font-mono text-[10px] text-[#0568A6] font-bold uppercase tracking-widest">
              SUPER-SALOON BENCHMARK
            </span>
            <h3 className="font-display font-bold text-2xl text-[#252859] mt-1">
              THE G90 ADVANTAGE VS KEY RIVALS
            </h3>
            <p className="text-xs text-[#6B7280] mt-1">
              Unrivaled balance of 727 hp combined power, 69 km zero-emission urban range, and significant value advantage.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono text-xs">
              <thead>
                <tr className="border-b border-[#D9D9D9] text-[#6B7280] text-[11px] font-bold">
                  <th className="py-3 px-4">VEHICLE</th>
                  <th className="py-3 px-4">SYSTEM OUTPUT</th>
                  <th className="py-3 px-4">TORQUE</th>
                  <th className="py-3 px-4">EV ONLY RANGE</th>
                  <th className="py-3 px-4">0-100 KM/H</th>
                  <th className="py-3 px-4">STARTING MSRP</th>
                </tr>
              </thead>
              <tbody>
                {competitors.map((c, i) => (
                  <tr
                    key={i}
                    className={`border-b border-[#D9D9D9] transition-colors ${
                      c.isHero
                        ? 'bg-[#F1F4F8] font-bold text-[#252859]'
                        : 'text-[#4B5563] hover:bg-slate-50'
                    }`}
                  >
                    <td className="py-4 px-4 flex items-center gap-2">
                      {c.isHero && <span className="w-2 h-2 rounded-full bg-[#D93030]" />}
                      <span className={c.isHero ? 'text-[#252859] font-display font-bold' : ''}>{c.car}</span>
                    </td>
                    <td className="py-4 px-4 font-bold">{c.hp}</td>
                    <td className="py-4 px-4">{c.torque}</td>
                    <td className="py-4 px-4">
                      <span className={c.isHero ? 'text-[#0568A6] font-bold' : ''}>{c.evRange}</span>
                    </td>
                    <td className="py-4 px-4">{c.accel}</td>
                    <td className="py-4 px-4 font-bold">{c.msrp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Digital Cockpit Innovations & Smart Assistance Suite */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Digital Cockpit (6 Cols) */}
          <div className="lg:col-span-6 bg-white p-8 rounded-3xl border border-[#D9D9D9] shadow-car-card space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#F8F9FA] border border-[#D9D9D9]">
                <Monitor className="w-5 h-5 text-[#0568A6]" />
              </div>
              <div>
                <span className="font-mono text-[10px] text-[#6B7280] font-bold uppercase tracking-widest">
                  COCKPIT INTERFACE
                </span>
                <h3 className="font-display font-bold text-xl text-[#252859]">
                  BMW CURVED DISPLAY & M HEAD-UP DISPLAY
                </h3>
              </div>
            </div>

            <p className="text-xs text-[#4B5563] leading-relaxed">
              Seamless one-piece curved glass housing a 12.3" Information Display and 14.9" Control Display. Features M-specific graphic modes with dynamic shift lights, G-meter, tire thermal status, and hybrid power flow.
            </p>

            <div className="space-y-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-[#F8F9FA] border border-[#D9D9D9] flex items-center justify-between font-mono text-xs">
                <span className="text-[#4B5563] font-medium">M Head-Up Display:</span>
                <span className="text-[#252859] font-bold">Shift Lights + Lap Timer in Line of Sight</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#F8F9FA] border border-[#D9D9D9] flex items-center justify-between font-mono text-xs">
                <span className="text-[#4B5563] font-medium">BMW Operating System 8.5:</span>
                <span className="text-[#252859] font-bold">QuickSelect Flat Menu Architecture</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#F8F9FA] border border-[#D9D9D9] flex items-center justify-between font-mono text-xs">
                <span className="text-[#4B5563] font-medium">Interaction Bar:</span>
                <span className="text-[#252859] font-bold">Backlit Crystalline Touch Surface</span>
              </div>
            </div>
          </div>

          {/* Smart Assistance Suite (6 Cols) */}
          <div className="lg:col-span-6 bg-white p-8 rounded-3xl border border-[#D9D9D9] shadow-car-card space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#F8F9FA] border border-[#D9D9D9]">
                <ShieldCheck className="w-5 h-5 text-[#D93030]" />
              </div>
              <div>
                <span className="font-mono text-[10px] text-[#6B7280] font-bold uppercase tracking-widest">
                  INTELLIGENT PILOT
                </span>
                <h3 className="font-display font-bold text-xl text-[#252859]">
                  DRIVING & PARKING ASSISTANT PROFESSIONAL
                </h3>
              </div>
            </div>

            <p className="text-xs text-[#4B5563] leading-relaxed">
              Cutting-edge sensor fusion combining radar, ultrasonic sensors, and multi-camera arrays for effortless autonomous high-speed cruising and automated precision maneuvering.
            </p>

            <div className="space-y-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-[#F8F9FA] border border-[#D9D9D9] flex items-center justify-between font-mono text-xs">
                <span className="text-[#4B5563] font-medium">Steering & Lane Control:</span>
                <span className="text-[#252859] font-bold">Active assistance up to 210 km/h</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#F8F9FA] border border-[#D9D9D9] flex items-center justify-between font-mono text-xs">
                <span className="text-[#4B5563] font-medium">Parking Assistant Plus:</span>
                <span className="text-[#252859] font-bold">Surround View 3D + Remote Parking App</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#F8F9FA] border border-[#D9D9D9] flex items-center justify-between font-mono text-xs">
                <span className="text-[#4B5563] font-medium">Emergency Stop Assistant:</span>
                <span className="text-[#252859] font-bold">Autonomous safe lane pullover & SOS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sustainability & Circular Economy Banner */}
        <div className="bg-white p-8 rounded-3xl border border-[#D9D9D9] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
              <Leaf className="w-7 h-7 text-emerald-600" />
            </div>
            <div>
              <span className="font-mono text-xs text-emerald-600 font-bold uppercase tracking-wider">
                SUSTAINABILITY & CIRCULAR VALUE CREATION
              </span>
              <h4 className="font-display font-bold text-xl text-[#252859] mt-1">
                MANUFACTURED WITH 100% GREEN ENERGY IN PLANT DINGOLFING
              </h4>
              <p className="text-xs text-[#4B5563] mt-1 max-w-2xl leading-relaxed">
                The BMW M5 (G90) is manufactured utilizing secondary recycled aluminum castings and green electricity across all production lines. The high-voltage battery cells are produced using renewable power to minimize cradle-to-gate carbon footprint.
              </p>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <div className="text-right font-mono">
              <div className="text-xs text-[#6B7280] font-bold">CO2 OPTIMIZATION</div>
              <div className="text-2xl font-bold text-emerald-600 font-display">-32% CO2e</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
