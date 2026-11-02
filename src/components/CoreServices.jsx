import React, { useState } from 'react';
import { Smartphone, Zap, Database, ArrowRight, Layers, CheckCircle2, ChevronRight } from 'lucide-react';

const SERVICES = [
  {
    id: 'infrastructure',
    title: 'Custom Digital Infrastructure',
    tag: 'PILLAR 01 // BESPOKE PLATFORMS',
    icon: Smartphone,
    shortDesc: 'End-to-end mobile and web application development tailored specifically for high-capacity racquet and padel clubs.',
    deliverables: [
      'Multi-venue court allocation & reservation matrix',
      'Cohort-based automated subscription & recurring billing engines',
      'Real-time player dashboards with skill rating & matchmaking',
      'Mobile-first PWA and native iOS/Android deployment'
    ],
    tech: ['React Native', 'Expo Go', 'Emergent AI', 'Tailwind', 'Stripe Connect'],
    architectureNote: 'Eliminates 3rd-party SaaS fees with an owned digital asset built exclusively for your club.'
  },
  {
    id: 'gtm',
    title: 'Automated GTM & Revenue Systems',
    tag: 'PILLAR 02 // PLAYER ACQUISITION',
    icon: Zap,
    shortDesc: 'High-volume outbound communication pipelines and automated direct-to-consumer conversion networks.',
    deliverables: [
      'Dedicated high-volume WhatsApp marketing agency services',
      'Automated WhatsApp API broadcast & match invite flows',
      'Dynamic waitlist re-allocation on court cancellations (<60s)',
      'Targeted local player acquisition & tournament promotional funnels'
    ],
    tech: ['WhatsApp Business API', 'Meta Graph API', 'Python', 'Webhooks', 'Twilio'],
    architectureNote: 'Transforms passive court inventory into instant WhatsApp bookings with 90%+ open rates.'
  },
  {
    id: 'ai-ops',
    title: 'AI & Data Operations (LeadOS)',
    tag: 'PILLAR 03 // INTELLIGENT BACKEND',
    icon: Database,
    shortDesc: 'Centralized operational hubs for intent-centric lead capture, attendance telemetry, and club automation.',
    deliverables: [
      'Custom integration of LeadOS (Intent-Centric AI OS)',
      'Real-time Slack workspace routing for staff action alerts',
      'Automated n8n workflow pipelines connecting CRM & courts',
      'Automated attendance tracking & member retention triggers'
    ],
    tech: ['n8n', 'Supabase', 'PostgreSQL', 'Python', 'Slack API'],
    architectureNote: 'Routes every incoming player lead directly into staff Slack workflows with zero manual data entry.'
  }
];

export default function CoreServices({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState(0);

  const active = SERVICES[activeTab];
  const Icon = active.icon;

  return (
    <section id="services" className="relative w-full py-24 px-6 sm:px-10 bg-white border-b border-[rgba(30,34,41,0.12)]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#1A4332]/20 bg-[#1A4332]/5 mb-3">
            <Layers className="w-3.5 h-3.5 text-[#1A4332]" />
            <span className="font-mono text-xs font-bold text-[#1A4332] uppercase tracking-wider">
              CORE INFRASTRUCTURE CAPABILITIES
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#1E2229] uppercase tracking-tight">
            THE THREE <span className="text-[#1A4332]">PILLARS OF SCALE</span>
          </h2>
          <p className="mt-3 text-[#6B7280] max-w-2xl text-sm sm:text-base font-sans">
            We don't sell generic advertising packages. We design, deploy, and maintain the underlying operational architecture of the modern racquet club.
          </p>
        </div>

        {/* 3 Pillar Selector Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {SERVICES.map((srv, idx) => {
            const SrvIcon = srv.icon;
            const isSelected = activeTab === idx;
            return (
              <button
                key={srv.id}
                onClick={() => setActiveTab(idx)}
                className={`p-7 rounded-3xl text-left transition-all border cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#1E2229] text-white border-[#1E2229] shadow-court-elevated transform -translate-y-1'
                    : 'bg-[#F8F9FA] text-[#1E2229] border-[#E5E7EB] hover:border-[#1A4332] hover:bg-white'
                }`}
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className={`font-mono text-[10px] font-bold tracking-widest uppercase ${
                      isSelected ? 'text-[#D4F03C]' : 'text-[#1A4332]'
                    }`}>
                      {srv.tag}
                    </span>
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                      isSelected ? 'bg-white/10 text-white' : 'bg-white border border-[#E5E7EB] text-[#1A4332]'
                    }`}>
                      <SrvIcon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-xl mb-3">
                    {srv.title}
                  </h3>
                  <p className={`text-xs font-sans leading-relaxed ${
                    isSelected ? 'text-gray-300' : 'text-[#4B5563]'
                  }`}>
                    {srv.shortDesc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-1 text-xs font-mono font-bold">
                  <span>INSPECT PILLAR SPEC</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Deep Dive Inspection Panel for Active Pillar */}
        <div className="bg-[#F8F9FA] p-8 sm:p-12 rounded-3xl border border-[#E5E7EB] shadow-court-card grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#1A4332] text-white flex items-center justify-center">
                <Icon className="w-5 h-5 text-[#D4F03C]" />
              </div>
              <div>
                <span className="font-mono text-xs font-bold text-[#1A4332] uppercase">{active.tag}</span>
                <h3 className="font-display font-bold text-2xl text-[#1E2229]">{active.title}</h3>
              </div>
            </div>

            <p className="text-sm font-sans text-[#4B5563] leading-relaxed">
              {active.shortDesc}
            </p>

            {/* Deliverables Checklist */}
            <div className="space-y-3 pt-2">
              <span className="font-mono text-[10px] font-bold text-[#1E2229] tracking-wider uppercase block">
                ENGINEERING DELIVERABLES:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {active.deliverables.map((item, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-white border border-[#E5E7EB] flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1A4332] shrink-0 mt-0.5" />
                    <span className="text-xs font-sans text-[#1E2229] font-medium leading-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architectural Note */}
            <div className="p-4 rounded-xl bg-white border-l-4 border-l-[#1A4332] border border-[#E5E7EB] text-xs font-sans text-[#4B5563]">
              <b className="text-[#1E2229]">ARCHITECTURAL ADVANTAGE:</b> {active.architectureNote}
            </div>
          </div>

          {/* Tech Stack & Quick Action (5 Cols) */}
          <div className="lg:col-span-5 bg-white p-7 rounded-2xl border border-[#E5E7EB] shadow-sm space-y-6">
            <div>
              <span className="font-mono text-[10px] font-bold text-[#6B7280] tracking-widest uppercase block mb-3">
                DEPLOYED TECH ARSENAL:
              </span>
              <div className="flex flex-wrap gap-2">
                {active.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-[#F8F9FA] border border-[#E5E7EB] font-mono text-xs font-bold text-[#1E2229]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-xl bg-[#1E2229] text-white space-y-3">
              <span className="font-mono text-[10px] text-[#D4F03C] uppercase tracking-wider font-bold">
                READY TO DEPLOY
              </span>
              <h4 className="font-display font-bold text-lg text-white">
                INTEGRATE {active.title.toUpperCase()}
              </h4>
              <p className="text-xs font-sans text-gray-300">
                Book a 30-minute systems architecture consultation with Arshaan Khan to map your venue rollout.
              </p>
              <button
                onClick={onOpenBooking}
                className="btn-pickle-lime w-full py-3 rounded-xl text-xs flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <span>REQUEST ARCHITECTURE CALL</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
