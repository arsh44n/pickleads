import React from 'react';
import { UserCheck, Mail, MessageCircle, MapPin, Award, CheckCircle2 } from 'lucide-react';

export default function FounderSection() {
  return (
    <section id="founder" className="relative w-full py-24 px-6 sm:px-10 bg-[#F8F9FA] border-b border-[rgba(30,34,41,0.12)]">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl border border-[#E5E7EB] p-8 sm:p-12 shadow-court-card grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Founder Card Info (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-6">
            <div className="relative">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-[#1A4332] text-white flex items-center justify-center font-display font-bold text-3xl sm:text-4xl shadow-md border-4 border-[#F8F9FA]">
                AK
              </div>
              <div className="absolute -bottom-2 -right-2 px-2.5 py-1 rounded-full bg-[#D4F03C] text-[#1E2229] font-mono text-[9px] font-bold uppercase shadow-sm">
                SYSTEMS ARCHITECT
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-1.5 text-[#1A4332] font-mono text-xs font-bold uppercase tracking-wider mb-1">
                <UserCheck className="w-4 h-4" />
                <span>FOUNDER & GTM ENGINEER</span>
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#1E2229]">
                ARSHAAN KHAN
              </h3>
              <p className="text-xs font-mono text-[#6B7280] mt-1 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#1A4332]" />
                <span>Punjab, India • Serving Racquet Venues Globally</span>
              </p>
            </div>

            {/* Direct Connect Pills */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              <a
                href="https://www.linkedin.com/in/arsh44n/"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-[#F8F9FA] border border-[#E5E7EB] text-xs font-sans font-bold text-[#1E2229] hover:border-[#1A4332] hover:text-[#1A4332] flex items-center gap-2 transition-all"
              >
                <svg className="w-3.5 h-3.5 fill-[#0A66C2]" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.62 1.62 0 1 0 0-3.24 1.62 1.62 0 0 0 0 3.24M5.08 18.5h2.77v-8.37H5.08v8.37Z"/>
                </svg>
                <span>LINKEDIN</span>
              </a>
              <a
                href="https://wa.me/918837866368?text=Hi%20Arshaan,%20I'd%20like%20to%20discuss%20digital%20infrastructure%20for%20our%20racquet%20club."
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-[#F8F9FA] border border-[#E5E7EB] text-xs font-sans font-bold text-[#1E2229] hover:border-[#1A4332] hover:text-[#1A4332] flex items-center gap-2 transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WHATSAPP</span>
              </a>
              <a
                href="mailto:arsh44n.me@gmail.com"
                className="px-4 py-2 rounded-xl bg-[#F8F9FA] border border-[#E5E7EB] text-xs font-sans font-bold text-[#1E2229] hover:border-[#1A4332] hover:text-[#1A4332] flex items-center gap-2 transition-all"
              >
                <Mail className="w-3.5 h-3.5 text-[#1A4332]" />
                <span>EMAIL</span>
              </a>
            </div>
          </div>

          {/* Right: Operational Philosophy & Engineering Manifesto (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 lg:border-l lg:border-[#E5E7EB] lg:pl-10">
            <span className="font-mono text-[10px] text-[#1A4332] font-bold tracking-widest uppercase block">
              OPERATIONAL PHILOSOPHY
            </span>

            <blockquote className="font-display font-bold text-xl sm:text-2xl text-[#1E2229] leading-snug">
              "We don't just run ads; we build the underlying digital infrastructure—from intent-centric operating systems to automated WhatsApp marketing engines—that ensures clubs operate at peak efficiency and maximum capacity."
            </blockquote>

            <div className="space-y-3 pt-2 text-xs sm:text-sm font-sans text-[#4B5563] leading-relaxed">
              <p>
                Most agency setups treat racquet clubs like generic e-commerce stores: pumping leads into a dead spreadsheet while courts sit empty during off-peak hours and front-desk staff burn out answering repetitive booking queries.
              </p>
              <p>
                At Pickleads, we engineer direct-to-consumer digital infrastructure: cohort-based subscription engines that lock in recurring revenue, high-volume WhatsApp automations that confirm matches in minutes, and LeadOS backends hosted on Supabase that give club operators total clarity over every square foot of court space.
              </p>
            </div>

            <div className="pt-4 border-t border-[#E5E7EB] flex flex-wrap gap-4 text-xs font-mono text-[#1E2229] font-bold">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#1A4332]" />
                DIRECT FOUNDER ENGINEERING
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#1A4332]" />
                ZERO AGENCY FLUFF
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#1A4332]" />
                OWNED DIGITAL ASSETS
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
