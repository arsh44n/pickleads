import React, { useState } from 'react';
import { Smartphone, Database, MessageSquare, Workflow, Terminal, CheckCircle2, ShieldCheck, ArrowRight, Zap, RefreshCw, Layers } from 'lucide-react';

const IMPACT_SYSTEMS = [
  {
    id: 'mobile-app',
    number: 'SYSTEM 01',
    name: 'Branded Mobile & Web App',
    category: 'PLAYER EXPERIENCE',
    tagline: 'Your Logo On Their Home Screen',
    summary: 'Custom iOS and Android apps for your venue. Friction-free court reservations, unified member tabs, and 1-tap Apple Pay checkouts—with zero competitor distractions.',
    highlights: [
      'Native iOS & Android apps custom-branded to your club',
      'Sub-15 second court reservations with 1-tap Apple Pay',
      'Unified member wallet for courts, pro-shop gear & café tabs'
    ],
    impact: 'Eliminates third-party app churn with direct mobile booking.',
    mockupType: 'app'
  },
  {
    id: 'whatsapp-engine',
    number: 'SYSTEM 02',
    name: 'Automated WhatsApp Re-Activation',
    category: 'RETENTION ENGINE',
    tagline: 'Fills Cancelled Courts in Under 60s',
    summary: 'Direct Meta Cloud API pipeline that automatically blasts open slots to skill-matched waitlists the second a cancellation occurs—turning empty hours into revenue without manual phone calls.',
    highlights: [
      'Automated waitlist blasts to skill-matched (DUPR) cohorts',
      '1-tap interactive WhatsApp confirmation & instant card charge',
      'Automatic re-engagement funnels for inactive 14+ day players'
    ],
    impact: 'Recovers up to 85% of last-minute cancellations on autopilot.',
    mockupType: 'whatsapp'
  },
  {
    id: 'cloud-intelligence',
    number: 'SYSTEM 03',
    name: 'Sovereign Venue Intelligence',
    category: 'DATA SOVEREIGNTY',
    tagline: '100% Data Ownership & Dynamic Yield',
    summary: 'Enterprise cloud database that guarantees zero double-bookings, optimizes court pricing based on real-time peak demand, and reconciles 100% of player payments directly into your bank.',
    highlights: [
      'Dedicated, private cloud database with 100% export rights',
      'Dynamic peak-hour yield pricing to maximize court revenue',
      'Direct-to-bank Stripe payouts with zero platform commission tax'
    ],
    impact: 'Guarantees permanent customer data sovereignty with bank-grade reliability.',
    mockupType: 'analytics'
  }
];

export default function TechArsenalEnterprise() {
  const [activeSystem, setActiveSystem] = useState(IMPACT_SYSTEMS[0]);

  return (
    <section id="tech-arsenal" className="relative w-full py-32 px-6 sm:px-10 bg-[#1E2229] text-white border-b border-white/10 overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1A4332]/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header: Title & Caption strictly in a single line on desktop */}
        <div className="w-full mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4F03C]/10 border border-[#D4F03C]/30 text-[#D4F03C] text-xs font-mono font-bold tracking-widest uppercase mb-5">
            <Zap className="w-3.5 h-3.5 text-[#D4F03C]" />
            <span>OPERATIONAL SYSTEMS ARCHITECTURE</span>
          </div>
          
          {/* Strictly 1 Line Title */}
          <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-[54px] uppercase tracking-tight text-white leading-tight whitespace-normal md:whitespace-nowrap">
            ENGINEERED FOR <span className="text-[#D4F03C]">REAL-WORLD VENUES IMPACT</span>
          </h2>
          
          {/* Strictly 1 Line Caption */}
          <p className="mt-4 text-sm sm:text-base lg:text-[17px] text-gray-300 font-sans leading-relaxed whitespace-normal xl:whitespace-nowrap">
            Custom digital infrastructure connecting court schedules, automated player re-activation, and venue intelligence into a unified engine.
          </p>
        </div>

        {/* 3 Sleek Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {IMPACT_SYSTEMS.map((sys) => {
            const isSelected = activeSystem.id === sys.id;
            return (
              <button
                key={sys.id}
                onClick={() => setActiveSystem(sys)}
                className={`text-left p-5 sm:p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-[#14171C] border-[#D4F03C] shadow-lg shadow-[#D4F03C]/5'
                    : 'bg-white/5 border-white/10 hover:border-white/25 hover:bg-white/8'
                }`}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-mono text-[10px] font-bold text-[#D4F03C] tracking-widest uppercase">
                    {sys.number}
                  </span>
                  <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-[#D4F03C]' : 'bg-transparent'}`} />
                </div>
                <h3 className="font-display font-bold text-base sm:text-lg text-white mb-1">
                  {sys.name}
                </h3>
                <p className="text-xs font-mono text-gray-400">
                  {sys.tagline}
                </p>
              </button>
            );
          })}
        </div>

        {/* Minimalist, High-Impact Showcase Card */}
        <div className="bg-[#14171C] rounded-3xl border border-white/10 p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left: Minimal, Relevant Description & Bullets (5 Cols) */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <span className="font-mono text-xs font-bold text-[#D4F03C] uppercase tracking-wider block mb-1">
                  {activeSystem.category}
                </span>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white uppercase tracking-tight">
                  {activeSystem.name}
                </h3>
              </div>

              {/* Crisp, Single Paragraph Description */}
              <p className="text-sm font-sans text-gray-300 leading-relaxed">
                {activeSystem.summary}
              </p>

              {/* 3 Essential Checklist Points */}
              <div className="space-y-2.5 pt-2">
                {activeSystem.highlights.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#D4F03C] shrink-0 mt-0.5" />
                    <span className="text-xs font-sans text-gray-200 leading-relaxed">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>

              {/* Single Key Outcome Pill */}
              <div className="pt-3 border-t border-white/10">
                <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest block mb-1">
                  DIRECT VENUE IMPACT
                </span>
                <p className="text-xs font-mono font-semibold text-emerald-400">
                  {activeSystem.impact}
                </p>
              </div>
            </div>

            {/* Right: Living Visual Mockup (7 Cols) */}
            <div className="lg:col-span-7 flex justify-center">
              
              {/* MOCKUP 1: BRANDED MOBILE APP */}
              {activeSystem.mockupType === 'app' && (
                <div className="relative w-full max-w-[340px] rounded-[38px] bg-black p-4 border-4 border-gray-700 shadow-2xl">
                  {/* Speaker pill notch */}
                  <div className="w-24 h-4 bg-gray-800 rounded-full mx-auto mb-4" />
                  
                  {/* Phone Screen Canvas */}
                  <div className="bg-[#1E2229] rounded-[28px] p-4 text-white space-y-4">
                    {/* Club Brand Header */}
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-[#1A4332] flex items-center justify-center font-bold text-[10px] text-[#D4F03C]">
                          LC
                        </div>
                        <span className="font-display font-bold text-xs tracking-wider">
                          LUMEN PADEL CLUB
                        </span>
                      </div>
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    </div>

                    {/* Active Court Grid */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-[10px] font-mono text-gray-400">
                        <span>TODAY • 7:00 PM – 8:30 PM</span>
                        <span className="text-[#D4F03C]">COURTS 1–4</span>
                      </div>

                      <div className="p-3 rounded-xl bg-white/5 border border-[#D4F03C]/30 flex justify-between items-center">
                        <div>
                          <div className="text-xs font-bold text-white">Panoramic Court 01</div>
                          <div className="text-[10px] font-mono text-gray-400">Outdoor • Floodlights Active</div>
                        </div>
                        <span className="px-2.5 py-1 rounded bg-[#D4F03C] text-[#1E2229] font-mono text-[9px] font-bold uppercase">
                          RESERVE $60
                        </span>
                      </div>

                      <div className="p-3 rounded-xl bg-white/5 border border-white/5 opacity-50 flex justify-between items-center">
                        <div>
                          <div className="text-xs font-bold text-white">Championship Court 02</div>
                          <div className="text-[10px] font-mono text-gray-400">Booked by VIP Squad</div>
                        </div>
                        <span className="px-2.5 py-1 rounded bg-white/10 text-gray-400 font-mono text-[9px]">
                          OCCUPIED
                        </span>
                      </div>
                    </div>

                    {/* Fast Checkout Bottom Bar */}
                    <div className="p-3 rounded-xl bg-[#1A4332] flex items-center justify-between">
                      <div className="text-[10px] font-mono">
                        <span className="text-gray-300 block">Fast 1-Tap Booking</span>
                        <span className="font-bold text-white">Apple Pay Ready</span>
                      </div>
                      <span className="px-3 py-1.5 rounded-lg bg-[#D4F03C] text-[#1E2229] text-[10px] font-bold uppercase">
                        CONFIRM
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* MOCKUP 2: AUTOMATED WHATSAPP CANCELLATION ENGINE */}
              {activeSystem.mockupType === 'whatsapp' && (
                <div className="bg-[#0B141A] rounded-3xl p-6 border border-white/10 w-full max-w-md shadow-2xl font-sans">
                  {/* WhatsApp Chat Header */}
                  <div className="flex items-center gap-3 pb-4 border-b border-white/10 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#1A4332] flex items-center justify-center font-bold text-xs text-[#D4F03C]">
                      PC
                    </div>
                    <div>
                      <div className="font-bold text-sm text-white flex items-center gap-1.5">
                        <span>Padel Club Concierge Bot</span>
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      </div>
                      <span className="text-[10px] font-mono text-gray-400">Official WhatsApp Business API</span>
                    </div>
                  </div>

                  {/* Message Stream */}
                  <div className="space-y-3 text-xs">
                    {/* Bot Broadcast */}
                    <div className="bg-[#1F2C34] text-gray-200 p-3.5 rounded-2xl rounded-tl-none border border-white/5 space-y-2 max-w-[90%]">
                      <p className="font-semibold text-white">
                        🎾 Court Alert: Slot Opened!
                      </p>
                      <p className="text-[11px] leading-relaxed text-gray-300">
                        Hey Alex! A prime slot just opened for tonight:
                        <br />• <b>Court 03 (Panoramic)</b>
                        <br />• <b>8:00 PM – 9:30 PM</b>
                        <br />As a 4.0 DUPR member, you get priority access.
                      </p>
                      <div className="pt-1 flex gap-2">
                        <span className="px-3 py-1 rounded-md bg-[#00A884] text-white font-bold text-[10px]">
                          Reply "1" to Book Instantly
                        </span>
                      </div>
                    </div>

                    {/* User Reply */}
                    <div className="flex justify-end">
                      <div className="bg-[#005C4B] text-white px-3.5 py-1.5 rounded-2xl rounded-tr-none font-mono text-xs">
                        1
                      </div>
                    </div>

                    {/* Bot Instant Confirmation */}
                    <div className="bg-[#1F2C34] text-gray-200 p-3.5 rounded-2xl rounded-tl-none border border-white/5 space-y-1 max-w-[90%]">
                      <p className="font-bold text-emerald-400">✓ Booking Confirmed!</p>
                      <p className="text-[11px] text-gray-300">
                        Court 03 is locked in your name. Card on file charged ($60). Your doubles mates have been notified via WhatsApp.
                      </p>
                      <span className="text-[9px] font-mono text-gray-400 block pt-1">
                        Automated in 12 seconds • 0 staff intervention
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* MOCKUP 3: SOVEREIGN REVENUE & OCCUPANCY DASHBOARD */}
              {activeSystem.mockupType === 'analytics' && (
                <div className="bg-[#14171C] rounded-3xl p-6 border border-white/10 shadow-2xl space-y-4 w-full max-w-md">
                  <div className="flex justify-between items-center pb-3 border-b border-white/10">
                    <span className="font-mono text-xs font-bold text-[#D4F03C] uppercase tracking-wider">
                      LIVE VENUE TELEMETRY
                    </span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[9px] font-bold">
                      100% PRIVATE DB
                    </span>
                  </div>

                  {/* 4 Stats Grid */}
                  <div className="grid grid-cols-2 gap-3 font-mono">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                      <span className="text-[10px] text-gray-400 block uppercase">Peak Occupancy</span>
                      <span className="text-xl font-bold text-white">96.4%</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                      <span className="text-[10px] text-gray-400 block uppercase">Dynamic Yield (RPM)</span>
                      <span className="text-xl font-bold text-[#D4F03C]">+$18.50/hr</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                      <span className="text-[10px] text-gray-400 block uppercase">Player Retention</span>
                      <span className="text-xl font-bold text-emerald-400">89.2%</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                      <span className="text-[10px] text-gray-400 block uppercase">Aggregator Tax Paid</span>
                      <span className="text-xl font-bold text-emerald-400">$0.00</span>
                    </div>
                  </div>

                  {/* Occupancy Heatmap Preview */}
                  <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 space-y-2">
                    <div className="flex justify-between text-[10px] font-mono text-gray-400">
                      <span>HOURLY COURT HEATMAP (TODAY)</span>
                      <span className="text-emerald-400">ALL COURTS BALANCED</span>
                    </div>
                    <div className="grid grid-cols-8 gap-1.5 h-6 items-end">
                      <div className="h-2 bg-emerald-800 rounded-sm" />
                      <div className="h-3 bg-emerald-700 rounded-sm" />
                      <div className="h-4 bg-emerald-600 rounded-sm" />
                      <div className="h-5 bg-[#D4F03C] rounded-sm" />
                      <div className="h-6 bg-[#D4F03C] rounded-sm" />
                      <div className="h-6 bg-[#D4F03C] rounded-sm" />
                      <div className="h-5 bg-emerald-500 rounded-sm" />
                      <div className="h-4 bg-emerald-700 rounded-sm" />
                    </div>
                  </div>
                </div>
              )}

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
