import React, { useState } from 'react';
import { Cpu, ShieldCheck, Gauge, Activity, Crosshair, Wrench, ChevronRight, Zap } from 'lucide-react';

const COMPONENTS = [
  {
    id: 'suspension',
    name: 'Adaptive M Suspension',
    category: 'CHASSIS & KINEMATICS',
    badge: 'INTEGRAL ACTIVE STEERING',
    description: 'Electronically controlled twin-tube dampers analyze steering angle, transverse acceleration, and wheel velocity in milliseconds to adjust rebound and compression forces per millisecond.',
    features: [
      { label: 'Damper Response', val: '< 2.5 ms', desc: 'Realtime electromagnetic solenoid valve regulation' },
      { label: 'Rear-Wheel Steering', val: '1.5°', desc: 'Integral Active Steering enhances stability above 60 km/h' },
      { label: 'Axle Geometry', val: 'High-Camber Double Wishbone', desc: 'Forged aluminum arms with rigid spherical joints' },
      { label: 'Strut Bracing', val: 'CFRP & Cast Aluminum', desc: 'Rigid front-end reinforcement connects shock towers' }
    ],
    technicalFormula: 'F_damping = c(v_wheel) · x_damper + k_roll · θ_chassis',
    simulation: {
      cornering: 'Outer Dampers: 88% Stiffened | Inner: 32% Absorptive | Rear Steer: -1.2° Anti-phase',
      braking: 'Front Anti-Dive: 94% Compression | Rear Rebound: Controlled Extended',
      launch: 'Rear Squat Elimination: 90% Damper Load Lock | 50:50 Torque Bias'
    }
  },
  {
    id: 'brakes',
    name: 'M Carbon Ceramic Brakes',
    category: 'DECELERATION & THERMAL',
    badge: 'MOTORSPORT GOLD CALIPERS',
    description: 'Silicon carbide-reinforced carbon fibre matrix discs offer unmatched thermal resilience, resisting brake fade under continuous 1,000°C racetrack punishment while slashing rotating unsprung mass.',
    features: [
      { label: 'Front Disc Diameter', val: '420 mm', desc: 'Perforated and internally ventilated carbon ceramic' },
      { label: 'Rear Disc Diameter', val: '398 mm', desc: 'Floating rotor design with aluminum hat' },
      { label: 'Calipers', val: '6-Piston Fixed Front', desc: 'Finished in Motorsport Gold with BMW M tricolor logo' },
      { label: 'Mass Reduction', val: '-20.5 kg', desc: 'Direct reduction of unsprung rotational mass' }
    ],
    technicalFormula: 'Q_dissipation = μ_ceramic(T) · F_clamp · r_rotor · ω',
    simulation: {
      cornering: 'Trail Braking Modulation: 45% Inner Rear Vectoring Brake Intervention',
      braking: 'Full Threshold Stop (100-0 km/h): 30.5m | Disc Temp: 680°C | Deceleration: 1.35 G',
      launch: 'Brake Boost Standby: 0 Bar Pad Pre-Contact for Zero Friction Loss'
    }
  },
  {
    id: 'hybrid',
    name: 'M Hybrid & M xDrive System',
    category: 'ELECTRIFIED PROPULSION',
    badge: 'ACTIVE M DIFFERENTIAL',
    description: 'A seamlessly integrated high-performance hybrid powertrain with an intelligent rear-biased M xDrive transfer box and multi-plate clutch, capable of decoupling front drive for 100% rear-wheel drift mode.',
    features: [
      { label: 'High-Voltage Battery', val: '18.6 kWh', desc: 'Usable energy capacity located low in underbody' },
      { label: 'Electric Boost', val: '197 HP / 450 Nm', desc: 'Patented pre-gearing stage in 8-speed M Steptronic' },
      { label: 'Active M Diff', val: '0 – 100% Variable Lock', desc: 'Electro-mechanical multi-plate clutch at rear axle' },
      { label: 'Drive Modes', val: '4WD / 4WD Sport / 2WD', desc: 'Dedicated 2WD pure rear-wheel-drive drift capability' }
    ],
    technicalFormula: 'T_system = T_ICE(RPM) + T_EMOTOR_boost · i_pregear = 1000 Nm',
    simulation: {
      cornering: 'Active M Differential locks 70% outer wheel for razor-sharp apex rotation',
      braking: 'Regenerative Braking: 0.3g recuperation recharging 18.6 kWh high-voltage cell',
      launch: 'M xDrive Launch Control: 1,000 Nm instant surge with zero wheel spin'
    }
  }
];

export default function EngineeringWorkbench() {
  const [selectedComp, setSelectedComp] = useState(COMPONENTS[0]);
  const [simCondition, setSimCondition] = useState('cornering'); // 'cornering', 'braking', 'launch'

  return (
    <section id="engineering" className="relative w-full py-24 px-6 bg-[#F8F9FA] border-b border-[#D9D9D9] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D9D9D9] bg-white mb-3 shadow-sm">
            <Wrench className="w-3.5 h-3.5 text-[#0568A6]" />
            <span className="font-mono text-xs font-bold text-[#252859] uppercase tracking-wider">Engineering Workbench</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-[#252859] uppercase tracking-tight">
            COMPONENT-LEVEL <span className="text-[#0568A6]">INSPECTION</span>
          </h2>
          <p className="mt-3 text-[#4B5563] max-w-2xl text-sm sm:text-base">
            Peer into the motorsport-grade engineering that underpins the G90. Every bushing, solenoid, and carbon composite layer is honed for extreme track endurance.
          </p>
        </div>

        {/* Component Selector Navigation Tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {COMPONENTS.map((comp) => {
            const isSelected = selectedComp.id === comp.id;
            return (
              <button
                key={comp.id}
                onClick={() => setSelectedComp(comp)}
                className={`px-6 py-4 rounded-2xl font-mono text-xs tracking-wider transition-all border text-left cursor-pointer ${
                  isSelected
                    ? 'bg-white text-[#252859] border-[#252859] shadow-car-card transform -translate-y-0.5'
                    : 'bg-white text-[#4B5563] border-[#D9D9D9] hover:border-[#0568A6]'
                }`}
              >
                <div className="text-[10px] text-[#6B7280] uppercase font-bold">{comp.category}</div>
                <div className="font-display font-bold text-sm sm:text-base text-[#252859] mt-1">{comp.name}</div>
              </button>
            );
          })}
        </div>

        {/* Main Inspection Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Details: Technical Specs & Schematic (7 Cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-[#D9D9D9] shadow-car-card space-y-7">
            <div className="flex justify-between items-start">
              <div>
                <span className="font-mono text-[10px] tracking-widest uppercase text-[#0568A6] font-bold">
                  {selectedComp.badge}
                </span>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#252859] mt-1">
                  {selectedComp.name}
                </h3>
              </div>
              <div className="p-3 rounded-2xl bg-[#F8F9FA] border border-[#D9D9D9]">
                <Cpu className="w-6 h-6 text-[#252859]" />
              </div>
            </div>

            <p className="text-sm text-[#4B5563] leading-relaxed">
              {selectedComp.description}
            </p>

            {/* Feature Spec Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {selectedComp.features.map((f, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-[#F8F9FA] border border-[#D9D9D9] flex flex-col justify-between">
                  <div>
                    <div className="font-mono text-[10px] text-[#6B7280] uppercase font-bold tracking-wider">{f.label}</div>
                    <div className="font-display font-bold text-lg text-[#252859] mt-1">{f.val}</div>
                  </div>
                  <div className="text-[11px] font-mono text-[#4B5563] mt-2 border-t border-[#D9D9D9] pt-2">
                    {f.desc}
                  </div>
                </div>
              ))}
            </div>

            {/* Technical Formula Box */}
            <div className="p-4 rounded-xl bg-[#F1F4F8] border border-[#D9D9D9] font-mono text-xs flex items-center justify-between">
              <div>
                <span className="text-[#6B7280] text-[10px] uppercase font-bold block">MATHEMATICAL KINEMATICS MODEL:</span>
                <span className="text-[#252859] font-bold">{selectedComp.technicalFormula}</span>
              </div>
              <Activity className="w-4 h-4 text-[#0568A6] shrink-0" />
            </div>
          </div>

          {/* Right Details: Interactive Telemetry Simulation Sandbox (5 Cols) */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-[#D9D9D9] shadow-car-card flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2 text-[#D93030] font-mono text-xs font-bold">
                <Crosshair className="w-4 h-4" />
                <span>DYNAMIC TELEMETRY SIMULATOR</span>
              </div>
              <h4 className="font-display font-bold text-xl text-[#252859]">
                STRESS LOAD RESPONSE
              </h4>
              <p className="text-xs text-[#6B7280] mt-1">
                Select a dynamic track maneuver to observe how {selectedComp.name} adapts forces in real time.
              </p>

              {/* Simulation Mode Selector */}
              <div className="grid grid-cols-3 gap-2 mt-5">
                {[
                  { id: 'cornering', label: '1.2G CORNER' },
                  { id: 'braking', label: 'FULL STOP' },
                  { id: 'launch', label: 'M LAUNCH' }
                ].map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSimCondition(s.id)}
                    className={`py-2 px-1 rounded-xl font-mono text-[11px] font-bold tracking-wider transition-all border cursor-pointer ${
                      simCondition === s.id
                        ? 'bg-[#252859] text-white border-[#252859] shadow-md'
                        : 'bg-[#F8F9FA] text-[#4B5563] border-[#D9D9D9] hover:border-[#0568A6]'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>

              {/* Simulated Diagnostic Readout Box */}
              <div className="mt-6 p-4 rounded-2xl bg-[#F8F9FA] border border-[#D9D9D9] font-mono text-xs space-y-3">
                <div className="flex justify-between items-center text-[10px] text-[#6B7280] border-b border-[#D9D9D9] pb-2 font-bold">
                  <span>ACTIVE CONDITION: <b className="text-[#252859] uppercase">{simCondition}</b></span>
                  <span className="text-emerald-600 font-bold">● SYSTEM NOMINAL</span>
                </div>
                <div className="text-[#252859] font-medium text-xs leading-relaxed">
                  {selectedComp.simulation[simCondition]}
                </div>

                {/* Animated Telemetry Bars */}
                <div className="space-y-2 pt-2">
                  <div>
                    <div className="flex justify-between text-[10px] text-[#4B5563] font-bold mb-1">
                      <span>CHASSIS TORSIONAL STIFFNESS:</span>
                      <span className="text-[#252859]">38,500 Nm/deg</span>
                    </div>
                    <div className="w-full h-2 bg-[#E5E7EB] rounded-full overflow-hidden">
                      <div className="h-full bg-[#0568A6] w-[92%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[10px] text-[#4B5563] font-bold mb-1">
                      <span>THERMAL DISSIPATION LOAD:</span>
                      <span className="text-[#252859]">{simCondition === 'braking' ? '88%' : '42%'}</span>
                    </div>
                    <div className="w-full h-2 bg-[#E5E7EB] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#D93030] transition-all duration-300"
                        style={{ width: simCondition === 'braking' ? '88%' : '42%' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quality Certification Seal */}
            <div className="p-4 rounded-2xl bg-[#F1F4F8] border border-[#D9D9D9] flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
              <div className="text-[11px] font-mono text-[#252859] font-bold">
                <span>RACE-VALIDATED AT NÜRBURGRING NORDSCHLEIFE. ENGINEERED BY BMW M GMBH.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
