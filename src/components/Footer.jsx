import React from 'react';
import { ArrowUp, Mail, MessageCircle, MapPin, Shield } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#14171C] text-gray-400 font-sans text-xs py-16 px-6 sm:px-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top Branding & Direct Contact Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border-b border-white/10 pb-10">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#1A4332] flex items-center justify-center">
                <span className="w-3 h-3 rounded-full bg-[#D4F03C]" />
              </div>
              <span className="font-display font-bold text-2xl text-white tracking-wider">
                PICKLEADS
              </span>
            </div>
            <p className="font-mono text-xs text-gray-400">
              Digital Infrastructure & Automated Revenue Systems for Padel & Pickleball Clubs
            </p>
          </div>

          {/* Contact Strip */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-mono">
            <a
              href="mailto:arsh44n.me@gmail.com"
              className="text-gray-300 hover:text-[#D4F03C] flex items-center gap-1.5 transition-colors"
            >
              <Mail className="w-4 h-4 text-[#1A4332]" />
              <span>arsh44n.me@gmail.com</span>
            </a>
            <a
              href="https://wa.me/918837866368"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-[#D4F03C] flex items-center gap-1.5 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>+91 8837866368</span>
            </a>
            <a
              href="https://www.linkedin.com/in/arsh44n/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-[#D4F03C] flex items-center gap-1.5 transition-colors"
            >
              <svg className="w-4 h-4 fill-[#0A66C2]" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.62 1.62 0 1 0 0-3.24 1.62 1.62 0 0 0 0 3.24M5.08 18.5h2.77v-8.37H5.08v8.37Z"/>
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Bottom Legal & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4 text-gray-500 font-mono text-[11px]">
          <div className="flex items-center gap-4">
            <span>© 2026 Pickleads. All rights reserved. Directed by Arshaan Khan.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 transition-all cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
