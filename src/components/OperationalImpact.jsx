import React from 'react';
import { TrendingUp, Users, MessageSquare, DollarSign, ShieldCheck, Zap, Activity } from 'lucide-react';

const METRICS = [
  {
    val: '94.2%',
    label: 'PEAK COURT UTILIZATION',
    desc: 'Dynamic slot reallocation and automated re-booking eliminate empty afternoon and morning slots.',
    icon: Activity,
    accent: '#1A4332'
  },
  {
    val: '3.8X',
    label: 'MEMBER RETENTION MULTIPLIER',
    desc: 'Cohort-based recurring membership architectures replace unpredictable one-off pay-and-play revenue.',
    icon: Users,
    accent: '#D4F03C'
  },
  {
    val: '100K+',
    label: 'AUTOMATED WHATSAPP INTERACTIONS',
    desc: 'High-volume WhatsApp API handles instant match bookings, waitlists, and match-making without staff.',
    icon: MessageSquare,
    accent: '#1A4332'
  },
  {
    val: '$180K+',
    label: 'MONTHLY RECURRING REVENUE',
    desc: 'Engineered predictable monthly cashflow through bespoke digital infrastructure and automated billing.',
    icon: DollarSign,
    accent: '#D4F03C'
  }
];

const TRUST_BADGES = [
  { title: 'MULTI-VENUE SCALABLE', detail: 'Centralized multi-facility management' },
  { title: 'SUPABASE & POSTGRES CORE', detail: 'Enterprise-grade row-level security' },
  { title: 'ZERO FRONT-DESK OVERHEAD', detail: '100% self-serve player booking flow' },
  { title: 'REAL-TIME SLACK INTEGRATION', detail: 'Instant lead alerts into daily staff ops' }
];

export default function OperationalImpact({ onOpenBooking }) {
  return (
    <section id="impact" className="relative w-full py-24 px-6 sm:px-10 bg-[#F8F9FA] border-b border-[rgba(30,34,41,0.12)]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#1A4332]/20 bg-[#1A4332]/5 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#1A4332]" />
              <span className="font-mono text-xs font-bold text-[#1A4332] uppercase tracking-wider">
                OPERATIONAL BENCHMARKS & VERIFIED METRICS
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#1E2229] uppercase tracking-tight">
              ENGINEERED FOR <span className="text-[#1A4332]">MAXIMUM CAPACITY</span>
            </h2>
            <p className="mt-3 text-[#6B7280] max-w-xl text-sm sm:text-base font-sans">
              Racquet venues leak thousands of dollars every month through dead-hours and manual front-desk communication. We replace friction with automated systems.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="btn-court-green px-6 py-3 rounded-xl text-xs uppercase flex items-center gap-2 self-start md:self-auto cursor-pointer"
          >
            <span>AUDIT YOUR VENUE CAPACITY</span>
          </button>
        </div>

        {/* 4 Quantified Impact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {METRICS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-7 rounded-3xl border border-[#E5E7EB] hover:border-[#1A4332] transition-all duration-300 shadow-court-card flex flex-col justify-between group"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-mono text-[10px] font-bold text-[#6B7280] uppercase tracking-wider">
                      {item.label}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-[#F8F9FA] border border-[#E5E7EB] flex items-center justify-center group-hover:bg-[#1A4332] group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4 text-[#1E2229] group-hover:text-white" />
                    </div>
                  </div>
                  <div className="font-display font-bold text-3xl sm:text-4xl text-[#1E2229] tracking-tight">
                    {item.val}
                  </div>
                </div>
                <p className="mt-4 pt-4 border-t border-[#E5E7EB] text-xs font-sans text-[#4B5563] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Trust Infrastructure Badge Strip */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#1E2229] text-white flex flex-col lg:flex-row items-center justify-between gap-6 shadow-court-elevated">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#1A4332] border border-[#D4F03C]/30 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-[#D4F03C]" />
            </div>
            <div>
              <span className="font-mono text-[10px] text-[#D4F03C] font-bold tracking-widest uppercase">
                ENTERPRISE STACK
              </span>
              <h4 className="font-display font-bold text-lg text-white">
                PRODUCTION-GRADE DIGITAL INFRASTRUCTURE
              </h4>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full lg:w-auto text-left">
            {TRUST_BADGES.map((b, i) => (
              <div key={i} className="p-3 bg-white/[0.04] rounded-xl border border-white/10 font-sans">
                <div className="font-bold text-xs text-white uppercase">{b.title}</div>
                <div className="text-[10px] text-gray-400 mt-0.5">{b.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
