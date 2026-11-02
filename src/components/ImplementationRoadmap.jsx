import React, { useState } from 'react';
import { Calendar, CheckCircle2, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

const PHASES = [
  {
    phase: 'PHASE 01',
    duration: 'WEEK 01',
    title: 'Operational Diagnostic & Bottleneck Audit',
    desc: 'Deep-dive audit into your current booking flow, off-peak court dead-hours, member churn, and front-desk communication overhead.',
    deliverables: [
      'Court capacity & dead-hours utilization report',
      'Player dropout & booking friction analysis',
      'Custom technical architecture blueprint',
      'Supabase & API integration roadmap'
    ]
  },
  {
    phase: 'PHASE 02',
    duration: 'WEEKS 02 – 04',
    title: 'Core Infrastructure Build & Database Setup',
    desc: 'Engineering your multi-venue court allocation matrix, React Native booking app, and Supabase relational PostgreSQL database.',
    deliverables: [
      'Multi-venue court allocation logic',
      'Bespoke mobile player interface (iOS/Android)',
      'Secure player authentication & Stripe billing',
      'LeadOS backend deployed on Supabase'
    ]
  },
  {
    phase: 'PHASE 03',
    duration: 'WEEKS 05 – 06',
    title: 'Automated WhatsApp Pipelines & Cohort Engines',
    desc: 'Deploying high-volume WhatsApp API broadcast flows, automated cancellation re-booking triggers, and cohort subscription tiers.',
    deliverables: [
      'Verified WhatsApp Business API integration',
      'Automated waitlist & dead-hour blast sequences',
      'Cohort-based recurring membership logic',
      'Real-time automated match confirmation webhooks'
    ]
  },
  {
    phase: 'PHASE 04',
    duration: 'WEEK 07',
    title: 'Slack Staff Command Center & Club Go-Live',
    desc: 'Integrating LeadOS into your daily staff Slack channels, conducting venue staff training, and launching full court automation.',
    deliverables: [
      'Real-time Slack notification channels for leads',
      'Staff operational runbooks & video training',
      'Full live multi-court public launch',
      'Ongoing 24/7 backend monitoring & SLA support'
    ]
  }
];

export default function ImplementationRoadmap({ onOpenBooking }) {
  const [activePhase, setActivePhase] = useState(0);

  return (
    <section id="roadmap" className="relative w-full py-24 px-6 sm:px-10 bg-white border-b border-[rgba(30,34,41,0.12)]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#1A4332]/20 bg-[#1A4332]/5 mb-3">
              <Clock className="w-3.5 h-3.5 text-[#1A4332]" />
              <span className="font-mono text-xs font-bold text-[#1A4332] uppercase tracking-wider">
                TRANSPARENT SPRINT SCHEDULE
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#1E2229] uppercase tracking-tight">
              THE 7-WEEK <span className="text-[#1A4332]">DEPLOYMENT ROADMAP</span>
            </h2>
            <p className="mt-3 text-[#6B7280] max-w-xl text-sm sm:text-base font-sans">
              From initial court diagnostic to live production code. Zero guesswork, zero downtime for existing players, and predictable milestone deliverables.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="btn-court-green px-6 py-3 rounded-xl text-xs uppercase flex items-center gap-2 self-start md:self-auto cursor-pointer"
          >
            <span>RESERVE SPRINT TIMELINE</span>
          </button>
        </div>

        {/* 4 Phase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {PHASES.map((p, idx) => {
            const isSelected = activePhase === idx;
            return (
              <div
                key={idx}
                onClick={() => setActivePhase(idx)}
                className={`p-7 rounded-3xl transition-all border cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#1E2229] text-white border-[#1E2229] shadow-court-elevated transform -translate-y-1'
                    : 'bg-[#F8F9FA] text-[#1E2229] border-[#E5E7EB] hover:border-[#1A4332] hover:bg-white'
                }`}
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className={`font-mono text-[10px] font-bold tracking-widest uppercase ${
                      isSelected ? 'text-[#D4F03C]' : 'text-[#1A4332]'
                    }`}>
                      {p.phase}
                    </span>
                    <span className={`font-mono text-[10px] px-2.5 py-0.5 rounded-full font-bold ${
                      isSelected ? 'bg-white/10 text-white' : 'bg-[#E5E7EB] text-[#1E2229]'
                    }`}>
                      {p.duration}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg mb-2">
                    {p.title}
                  </h3>
                  <p className={`text-xs font-sans leading-relaxed ${
                    isSelected ? 'text-gray-300' : 'text-[#6B7280]'
                  }`}>
                    {p.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 space-y-2">
                  <span className={`font-mono text-[9px] font-bold uppercase tracking-wider block ${
                    isSelected ? 'text-gray-400' : 'text-[#6B7280]'
                  }`}>
                    KEY MILESTONES:
                  </span>
                  {p.deliverables.slice(0, 2).map((d, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[11px] font-sans">
                      <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-[#D4F03C]' : 'text-[#1A4332]'}`} />
                      <span className="truncate">{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Phase Detail Strip */}
        <div className="bg-[#F8F9FA] p-6 sm:p-8 rounded-3xl border border-[#E5E7EB] flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#1A4332] text-[#D4F03C] flex items-center justify-center font-display font-bold text-lg">
              0{activePhase + 1}
            </div>
            <div>
              <span className="font-mono text-xs text-[#1A4332] font-bold uppercase">
                {PHASES[activePhase].duration} // {PHASES[activePhase].phase}
              </span>
              <h4 className="font-display font-bold text-xl text-[#1E2229]">
                {PHASES[activePhase].title}
              </h4>
            </div>
          </div>

          <button
            onClick={onOpenBooking}
            className="btn-pickle-lime px-6 py-3 rounded-xl text-xs flex items-center gap-2 cursor-pointer shrink-0"
          >
            <span>INQUIRE ABOUT SPRINT AVAILABILITY</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
