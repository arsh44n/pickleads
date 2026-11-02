import React, { useState } from 'react';
import { Calendar, MessageCircle, Download, CheckCircle2, X, Phone, Mail, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';

export default function ConversionSuite({ isOpen, onClose }) {
  const [confirmed, setConfirmed] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    clubName: '',
    courts: '4 Courts',
    date: '2026-11-10'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmed(true);
  };

  const handleDownloadBlueprint = () => {
    const text = `=====================================================
PICKLEADS — DIGITAL INFRASTRUCTURE BLUEPRINT
Scaling Racquet Clubs Through High-Intent Automation & Custom Tech
=====================================================

FOUNDER: Arshaan Khan
Go-To-Market Systems Engineer & AI Automation Specialist
Email: arsh44n.me@gmail.com | WhatsApp: +91 8837866368
LinkedIn: https://www.linkedin.com/in/arsh44n/ | Punjab, India

-----------------------------------------------------
1. CORE INFRASTRUCTURE DELIVERABLES
-----------------------------------------------------
- Custom Multi-Venue Court Allocation Matrix (React Native & Web)
- Cohort-Based Subscription Engine (Recurring membership cashflow)
- Real-Time Player Matching & Skill Rating Dashboard
- Dedicated High-Volume WhatsApp Marketing Engine (API Broadcasts)
- LeadOS Backend Integration on Supabase with Postgres Database
- Real-Time Slack Team Integration for Instant Lead Alerts

-----------------------------------------------------
2. PRODUCTION VERIFIED BENCHMARKS
-----------------------------------------------------
- 94.2% Average Court Utilization Rate
- 3.8x Member Retention Multiplier vs Pay-and-Play
- 100,000+ Automated Player WhatsApp Engagements
- $180k+ Monthly Recurring Club Revenue Engineered

-----------------------------------------------------
3. 7-WEEK DEPLOYMENT SCHEDULE
-----------------------------------------------------
- Week 1: Operational Diagnostic & Capacity Bottleneck Audit
- Weeks 2-4: Custom React Native Client & Supabase Database Build
- Weeks 5-6: WhatsApp API & Cohort Subscription Engine Deployment
- Week 7: Slack Staff Command Center, Runbook Training & Live Launch

To reserve your venue sprint, reach out directly via WhatsApp (+91 8837866368).
© 2026 Pickleads. All rights reserved.
`;
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Pickleads-Club-Infrastructure-Blueprint.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      {/* Persistent Pre-Footer Conversion Section */}
      <section className="relative w-full py-24 px-6 sm:px-10 bg-[#F8F9FA] border-b border-[rgba(30,34,41,0.12)]">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#1E2229] rounded-3xl p-8 sm:p-14 text-white shadow-court-elevated relative overflow-hidden">
            {/* Ambient Background Accent */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#1A4332] rounded-full blur-[120px] opacity-40 pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A4332] text-[#D4F03C] text-xs font-mono font-bold tracking-wider uppercase">
                  READY TO UPGRADE YOUR DIGITAL INFRASTRUCTURE?
                </div>
                <h2 className="font-display font-bold text-3xl sm:text-5xl text-white uppercase tracking-tight">
                  LET’S ARCHITECT YOUR <span className="text-[#D4F03C]">CLUB REVENUE ENGINE</span>
                </h2>
                <p className="text-sm sm:text-base font-sans text-gray-300 max-w-xl leading-relaxed">
                  Book a direct 30-minute systems architecture consultation with Arshaan Khan to map your venue booking flow and eliminate court dead-hours.
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                  <button
                    onClick={() => onClose(true)}
                    className="btn-pickle-lime px-7 py-3.5 rounded-xl text-xs uppercase flex items-center gap-2 cursor-pointer shadow-lime-glow"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>BOOK SYSTEMS ARCHITECTURE CALL</span>
                  </button>

                  <a
                    href="https://wa.me/918837866368?text=Hi%20Arshaan,%20I'd%20like%20to%20discuss%20digital%20infrastructure%20for%20our%20racquet%20club."
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 text-xs font-sans font-bold flex items-center gap-2 transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 text-[#D4F03C]" />
                    <span>DIRECT WHATSAPP CONCIERGE</span>
                  </a>
                </div>
              </div>

              {/* Right: Quick Spec Download Card (5 Cols) */}
              <div className="lg:col-span-5 bg-white/5 p-7 rounded-2xl border border-white/10 space-y-4 font-sans text-xs">
                <span className="font-mono text-[10px] text-[#D4F03C] font-bold uppercase tracking-wider block">
                  TECHNICAL BRIEFING
                </span>
                <h4 className="font-display font-bold text-xl text-white">
                  CLUB DIGITAL ARCHITECTURE BLUEPRINT
                </h4>
                <p className="text-gray-300 text-xs leading-relaxed">
                  Download the technical specification sheet detailing our multi-venue booking schemas, WhatsApp API webhook architecture, and LeadOS Supabase deployment.
                </p>

                <button
                  onClick={handleDownloadBlueprint}
                  className="w-full py-3 rounded-xl bg-white hover:bg-gray-100 text-[#1E2229] font-sans font-bold text-xs uppercase flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
                >
                  <Download className="w-4 h-4 text-[#1A4332]" />
                  <span>DOWNLOAD BLUEPRINT (TXT)</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl bg-white rounded-3xl border border-[#E5E7EB] p-8 shadow-2xl">
            <button
              onClick={() => {
                onClose(false);
                setConfirmed(false);
              }}
              className="absolute top-6 right-6 p-2 rounded-full text-gray-400 hover:text-[#1E2229] hover:bg-gray-100 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {!confirmed ? (
              <>
                <div className="mb-6">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A4332]/10 text-[#1A4332] font-mono text-[10px] font-bold uppercase tracking-wider mb-2">
                    DIRECT WITH FOUNDER
                  </div>
                  <h3 className="font-display font-bold text-2xl text-[#1E2229]">
                    SCHEDULE ARCHITECTURE CONSULTATION
                  </h3>
                  <p className="text-xs font-sans text-gray-500 mt-1">
                    Select a time to map out your racquet club’s custom booking app and automated revenue systems with Arshaan Khan.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs">
                  <div>
                    <label className="text-[#1E2229] font-bold uppercase text-[10px] block mb-1">YOUR NAME</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Marcus Sterling"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-3 rounded-xl bg-[#F8F9FA] border border-[#E5E7EB] text-[#1E2229] focus:border-[#1A4332] outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[#1E2229] font-bold uppercase text-[10px] block mb-1">BUSINESS EMAIL</label>
                      <input
                        type="email"
                        required
                        placeholder="marcus@racquetclub.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full p-3 rounded-xl bg-[#F8F9FA] border border-[#E5E7EB] text-[#1E2229] focus:border-[#1A4332] outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[#1E2229] font-bold uppercase text-[10px] block mb-1">WHATSAPP / PHONE</label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full p-3 rounded-xl bg-[#F8F9FA] border border-[#E5E7EB] text-[#1E2229] focus:border-[#1A4332] outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[#1E2229] font-bold uppercase text-[10px] block mb-1">CLUB / FACILITY NAME</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Apex Padel Club"
                        value={formData.clubName}
                        onChange={(e) => setFormData({ ...formData, clubName: e.target.value })}
                        className="w-full p-3 rounded-xl bg-[#F8F9FA] border border-[#E5E7EB] text-[#1E2229] focus:border-[#1A4332] outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[#1E2229] font-bold uppercase text-[10px] block mb-1">COURT COUNT</label>
                      <select
                        value={formData.courts}
                        onChange={(e) => setFormData({ ...formData, courts: e.target.value })}
                        className="w-full p-3 rounded-xl bg-[#F8F9FA] border border-[#E5E7EB] text-[#1E2229] focus:border-[#1A4332] outline-none"
                      >
                        <option value="1-3 Courts">1–3 Courts</option>
                        <option value="4-8 Courts">4–8 Courts</option>
                        <option value="8+ Multi-Venue">8+ Multi-Venue Complex</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[#1E2229] font-bold uppercase text-[10px] block mb-1">PREFERRED CONSULTATION DATE</label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full p-3 rounded-xl bg-[#F8F9FA] border border-[#E5E7EB] text-[#1E2229] focus:border-[#1A4332] outline-none font-mono"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-pickle-lime w-full py-4 mt-4 rounded-xl text-xs uppercase cursor-pointer"
                  >
                    CONFIRM SYSTEMS ARCHITECTURE CALL
                  </button>
                </form>
              </>
            ) : (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#1A4332]/10 border border-[#1A4332] mx-auto flex items-center justify-center text-[#1A4332]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-2xl text-[#1E2229] uppercase">
                  CONSULTATION REQUESTED
                </h3>
                <p className="font-sans text-xs text-[#4B5563] max-w-md mx-auto leading-relaxed">
                  Thank you, <b>{formData.name}</b>. Arshaan Khan will review the infrastructure requirements for <b>{formData.clubName || 'your club'}</b> and send a calendar invitation to <b>{formData.email}</b>.
                </p>
                <div className="p-4 rounded-xl bg-[#F8F9FA] border border-[#E5E7EB] font-mono text-xs text-[#6B7280]">
                  DIRECT WHATSAPP CONFIRMATION DISPATCHED TO: <b className="text-[#1E2229]">{formData.phone}</b>
                </div>
                <button
                  onClick={() => {
                    onClose(false);
                    setConfirmed(false);
                  }}
                  className="btn-court-green px-6 py-2.5 rounded-xl text-xs uppercase cursor-pointer mt-2"
                >
                  CLOSE WINDOW
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
