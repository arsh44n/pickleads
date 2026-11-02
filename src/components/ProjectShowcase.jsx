import React, { useState } from 'react';
import { Smartphone, MessageSquare, Terminal, ChevronRight, CheckCircle2, ArrowUpRight, FolderGit2 } from 'lucide-react';

const PROJECTS = [
  {
    id: 'pickle-pedal',
    title: 'Pickle & Pedal Operations',
    focus: 'NEXT-GEN CLUB MANAGEMENT PLATFORM',
    badge: 'MULTI-VENUE ECOSYSTEM',
    desc: 'Comprehensive multi-venue sports court booking platform and cohort-based subscription engine engineered to streamline player onboarding, dynamic court allocation, and recurring revenue.',
    icon: Smartphone,
    problem: 'Multiple sports facilities faced manual scheduling chaos, payment drop-offs, and volatile court utilization during mid-day dead-hours.',
    solution: 'Engineered a unified React Native / Expo booking client coupled with automated cohort subscription tiers and real-time court allocation algorithms.',
    outcomes: [
      'Multi-venue court allocation operational across all facilities',
      'Recurring cohort subscriptions implemented replacing pay-and-play',
      'Automated cancellation re-booking with instant waitlist trigger',
      'Sub-2 second booking confirmation latency'
    ],
    tech: ['React Native', 'Expo Go', 'Emergent AI', 'Supabase', 'Stripe']
  },
  {
    id: 'whatsapp-engine',
    title: 'High-Volume WhatsApp Engine',
    focus: 'DIRECT PLAYER ACQUISITION & RETENTION',
    badge: 'API BROADCAST NETWORK',
    desc: 'Specialized, standalone direct-to-consumer marketing framework designed to execute high-volume WhatsApp campaigns, leveraging official API integrations to drive instant bookings and match engagement.',
    icon: MessageSquare,
    problem: 'Email marketing resulted in <18% open rates and manual WhatsApp messages overwhelmed front-desk staff during peak tournament and court hours.',
    solution: 'Architected automated WhatsApp Business API broadcast and conversational workflows triggering instant match invitations and promo confirmations.',
    outcomes: [
      'Over 90% direct message open rate within 5 minutes',
      'Automated match-invite routing based on player skill cohorts',
      'Zero front-desk staff involvement for confirmation workflows',
      'Direct tournament ticket reservation via interactive buttons'
    ],
    tech: ['WhatsApp Business API', 'Python', 'Webhooks', 'Meta Graph API', 'PostgreSQL']
  },
  {
    id: 'leados',
    title: 'LeadOS Backend Integration',
    focus: 'INTENT-CENTRIC AI OPERATING SYSTEM',
    badge: 'SLACK COMMAND CENTER',
    desc: 'Architected an intent-centric AI operating system and proactive goal execution framework hosted on Supabase. Captures, routes, and converts club leads seamlessly into daily Slack staff workflows.',
    icon: Terminal,
    problem: 'Inquiries from social ads, website visits, and phone walk-ins sat unconverted in fragmented inboxes without staff ownership or follow-up tracking.',
    solution: 'Deployed LeadOS on Supabase to analyze player intent in real time, automatically routing qualified leads into dedicated staff Slack channels with one-click action triggers.',
    outcomes: [
      'Zero lost leads across web, WhatsApp, and walk-in funnels',
      'Instant real-time Slack notifications with pre-qualified player intent',
      'Automated n8n nurturing pipelines for unconfirmed trial bookings',
      'Centralized operational database running on Supabase Postgres'
    ],
    tech: ['LeadOS', 'n8n', 'Supabase', 'PostgreSQL', 'Slack API', 'Python']
  }
];

export default function ProjectShowcase({ onOpenBooking }) {
  const [expandedProject, setExpandedProject] = useState(PROJECTS[0].id);

  return (
    <section id="projects" className="relative w-full py-24 px-6 sm:px-10 bg-[#F8F9FA] border-b border-[rgba(30,34,41,0.12)]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#1A4332]/20 bg-[#1A4332]/5 mb-3">
              <FolderGit2 className="w-3.5 h-3.5 text-[#1A4332]" />
              <span className="font-mono text-xs font-bold text-[#1A4332] uppercase tracking-wider">
                FLAGSHIP PROJECT DELIVERABLES
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#1E2229] uppercase tracking-tight">
              PROVEN SYSTEMS <span className="text-[#1A4332]">IN PRODUCTION</span>
            </h2>
            <p className="mt-3 text-[#6B7280] max-w-xl text-sm sm:text-base font-sans">
              Real infrastructure deployments powering multi-venue sports clubs, high-volume player communication, and automated backend operations.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="btn-pickle-lime px-6 py-3 rounded-xl text-xs uppercase flex items-center gap-2 self-start md:self-auto cursor-pointer"
          >
            <span>DISCUSS SIMILAR DEPLOYMENT</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Project Cards Grid */}
        <div className="space-y-6">
          {PROJECTS.map((proj) => {
            const Icon = proj.icon;
            const isExpanded = expandedProject === proj.id;

            return (
              <div
                key={proj.id}
                className="bg-white rounded-3xl border border-[#E5E7EB] hover:border-[#1A4332] transition-all shadow-court-card overflow-hidden"
              >
                {/* Main Card Header Bar */}
                <div
                  onClick={() => setExpandedProject(isExpanded ? null : proj.id)}
                  className="p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 cursor-pointer select-none group"
                >
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#F8F9FA] border border-[#E5E7EB] flex items-center justify-center shrink-0 group-hover:bg-[#1A4332] group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6 text-[#1A4332] group-hover:text-white" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="font-mono text-[10px] font-bold text-[#1A4332] uppercase tracking-wider">
                          {proj.focus}
                        </span>
                        <span className="font-mono text-[9px] px-2 py-0.5 rounded-full bg-[#1A4332]/10 text-[#1A4332] font-bold">
                          {proj.badge}
                        </span>
                      </div>
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-[#1E2229]">
                        {proj.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="hidden sm:flex flex-wrap gap-1.5">
                      {proj.tech.slice(0, 3).map((t, idx) => (
                        <span key={idx} className="font-mono text-[11px] px-2.5 py-1 rounded-lg bg-[#F8F9FA] border border-[#E5E7EB] text-[#4B5563]">
                          {t}
                        </span>
                      ))}
                    </div>

                    <button
                      className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all border cursor-pointer ${
                        isExpanded
                          ? 'bg-[#1E2229] text-white border-[#1E2229]'
                          : 'bg-[#F8F9FA] text-[#1E2229] border-[#E5E7EB] group-hover:border-[#1A4332]'
                      }`}
                    >
                      {isExpanded ? 'COLLAPSE SPECS' : 'INSPECT ARCHITECTURE'}
                    </button>
                  </div>
                </div>

                {/* Expandable Architecture Drawer */}
                {isExpanded && (
                  <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-[#E5E7EB] bg-[#F8F9FA]/60 grid grid-cols-1 lg:grid-cols-12 gap-8 animate-in fade-in duration-300">
                    {/* Left: Problem & Solution Breakdown (7 Cols) */}
                    <div className="lg:col-span-7 space-y-4">
                      <div>
                        <span className="font-mono text-[10px] font-bold text-[#E53E3E] uppercase tracking-wider block mb-1">
                          THE OPERATIONAL BOTTLENECK:
                        </span>
                        <p className="text-xs sm:text-sm font-sans text-[#4B5563] leading-relaxed">
                          {proj.problem}
                        </p>
                      </div>

                      <div className="pt-2">
                        <span className="font-mono text-[10px] font-bold text-[#1A4332] uppercase tracking-wider block mb-1">
                          THE ENGINEERING ARCHITECTURE:
                        </span>
                        <p className="text-xs sm:text-sm font-sans text-[#1E2229] leading-relaxed font-medium">
                          {proj.solution}
                        </p>
                      </div>
                    </div>

                    {/* Right: Quantified Outcomes & Tech Stack (5 Cols) */}
                    <div className="lg:col-span-5 bg-white p-5 rounded-2xl border border-[#E5E7EB] shadow-sm space-y-4">
                      <span className="font-mono text-[10px] font-bold text-[#1E2229] tracking-wider uppercase block">
                        VERIFIED PRODUCTION OUTCOMES:
                      </span>
                      <div className="space-y-2">
                        {proj.outcomes.map((out, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs font-sans text-[#4B5563]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#1A4332] shrink-0 mt-0.5" />
                            <span>{out}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-3 border-t border-[#E5E7EB]">
                        <span className="font-mono text-[10px] font-bold text-[#6B7280] uppercase block mb-1.5">
                          FULL TECH STACK:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {proj.tech.map((t, i) => (
                            <span key={i} className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#F8F9FA] border border-[#E5E7EB] text-[#1E2229] font-bold">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
