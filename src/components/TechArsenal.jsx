import React, { useState } from 'react';
import { Cpu, Terminal, Layout, Database, Workflow, Sparkles } from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: 'ALL ARSENAL' },
  { id: 'mobile', label: 'FRONTEND & MOBILE' },
  { id: 'backend', label: 'BACKEND & DATABASE' },
  { id: 'automation', label: 'AUTOMATION & DATA' },
  { id: 'ai', label: 'AI & DEVELOPMENT' }
];

const TOOLS = [
  { name: 'React Native', cat: 'mobile', role: 'Mobile Client Architecture', desc: 'Cross-platform native iOS & Android booking app development for players.' },
  { name: 'Expo Go', cat: 'mobile', role: 'Rapid Mobile Deployment', desc: 'Streamlined testing, zero-delay OTA updates, and friction-free club member onboarding.' },
  { name: 'HTML / CSS / JS', cat: 'mobile', role: 'Web Applications & PWA', desc: 'Responsive, lightweight web portals for player match sign-ups and club schedules.' },
  
  { name: 'Python', cat: 'backend', role: 'Custom API & Algorithms', desc: 'Powering automated matchmaking, waitlist slot reallocation, and WhatsApp integrations.' },
  { name: 'Supabase', cat: 'backend', role: 'Managed Cloud Infrastructure', desc: 'Serverless backend hosting player auth, live court booking tables, and LeadOS core.' },
  { name: 'PostgreSQL', cat: 'backend', role: 'Relational Club Database', desc: 'ACID-compliant storage for recurring cohort billing, court capacity, and audit logs.' },
  { name: 'SQL', cat: 'backend', role: 'Query Optimization', desc: 'Complex relational querying for cohort retention and venue utilization telemetry.' },

  { name: 'n8n', cat: 'automation', role: 'Workflow Orchestration', desc: 'Self-hosted automation pipelines connecting bookings, payment webhooks, and team Slack.' },
  { name: 'Power BI', cat: 'automation', role: 'Executive BI Telemetry', desc: 'Interactive dashboards tracking member lifetime value and court utilization rates.' },
  { name: 'Tableau', cat: 'automation', role: 'Visual Analytics', desc: 'Multi-venue comparative benchmarking for club owners and franchise leadership.' },
  { name: 'Google Sheets', cat: 'automation', role: 'Lightweight Reporting', desc: 'Automated 2-way sync for front-desk staff rosters and quick daily check-ins.' },

  { name: 'Emergent AI', cat: 'ai', role: 'Agentic Core Integration', desc: 'Autonomous player inquiry parsing, intent classification, and proactive goal routing.' },
  { name: 'Cursor', cat: 'ai', role: 'AI-Accelerated Engineering', desc: 'High-velocity systems development ensuring rapid sprint delivery for client clubs.' },
  { name: 'Kiro', cat: 'ai', role: 'Specialized Dev Architecture', desc: 'Custom AI developer tooling for reliable, mission-critical club backend workflows.' }
];

export default function TechArsenal() {
  const [selectedCat, setSelectedCat] = useState('all');

  const filtered = selectedCat === 'all'
    ? TOOLS
    : TOOLS.filter(t => t.cat === selectedCat);

  return (
    <section id="arsenal" className="relative w-full py-24 px-6 sm:px-10 bg-white border-b border-[rgba(30,34,41,0.12)]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#1A4332]/20 bg-[#1A4332]/5 mb-3">
              <Cpu className="w-3.5 h-3.5 text-[#1A4332]" />
              <span className="font-mono text-xs font-bold text-[#1A4332] uppercase tracking-wider">
                TECHNOLOGY ARCHITECTURE
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#1E2229] uppercase tracking-tight">
              THE <span className="text-[#1A4332]">TECH ARSENAL</span>
            </h2>
            <p className="mt-3 text-[#6B7280] max-w-xl text-sm sm:text-base font-sans">
              No bloated WordPress themes or sluggish no-code toys. We engineer our club systems using robust, high-throughput technologies built to scale across multiple locations.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 self-start md:self-auto">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCat(c.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all border cursor-pointer ${
                  selectedCat === c.id
                    ? 'bg-[#1A4332] text-white border-[#1A4332] shadow-sm'
                    : 'bg-[#F8F9FA] text-[#4B5563] border-[#E5E7EB] hover:border-[#1A4332]'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#F8F9FA] border border-[#E5E7EB] hover:border-[#1A4332] hover:bg-white transition-all shadow-sm flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-display font-bold text-base text-[#1E2229] group-hover:text-[#1A4332] transition-colors">
                    {item.name}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#1A4332] opacity-50 group-hover:opacity-100" />
                </div>
                <div className="font-mono text-[10px] text-[#1A4332] font-bold uppercase tracking-wider mb-2">
                  {item.role}
                </div>
                <p className="text-xs font-sans text-[#6B7280] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
