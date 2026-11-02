import React, { useState } from 'react';
import { 
  Calendar, 
  MessageCircle, 
  CheckCircle2, 
  Phone, 
  Mail, 
  Send, 
  Sparkles, 
  ArrowUpRight, 
  ShieldCheck,
  Check
} from 'lucide-react';
import { CONFIG } from '../config';

const SERVICE_OPTIONS = [
  'Custom Website & Online Presence',
  'Private-Label Booking App (iOS & Android)',
  'In-Club Café & Pro-Shop Ancillary Commerce',
  'Player Community & Matchmaking Retention',
  'Aggregator Migration (0% Commission)'
];

export default function FinalCTA() {
  // Direct Inquiry Form State (Right side dark card)
  const [inquiryData, setInquiryData] = useState({
    name: '',
    companyName: '',
    mobile: '',
    socialLink: '',
    services: ['Custom Website & Online Presence'],
    remark: ''
  });
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [generatedWhatsAppUrl, setGeneratedWhatsAppUrl] = useState('');

  const toggleService = (service) => {
    setInquiryData((prev) => {
      const exists = prev.services.includes(service);
      if (exists) {
        if (prev.services.length === 1) return prev; // keep at least 1
        return { ...prev, services: prev.services.filter((s) => s !== service) };
      } else {
        return { ...prev, services: [...prev.services, service] };
      }
    });
  };

  const handleInquirySubmit = (e) => {
    e.preventDefault();

    // Construct the structured WhatsApp message payload based on user's input
    const message = 
`*NEW CLUB INQUIRY — PICKLEADS*
━━━━━━━━━━━━━━━━━━━━
• *Name:* ${inquiryData.name}
• *Club / Company:* ${inquiryData.companyName}
• *WhatsApp / Mobile:* ${inquiryData.mobile}
• *Social / Website:* ${inquiryData.socialLink || 'Not provided'}
• *Services Requested:*
${inquiryData.services.map((s) => `  - ${s}`).join('\n')}
• *Remarks / Goals:*
  "${inquiryData.remark || 'No extra remarks'}"
━━━━━━━━━━━━━━━━━━━━`;

    const whatsappUrl = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    setGeneratedWhatsAppUrl(whatsappUrl);

    // Open WhatsApp directly so the message is dispatched immediately to Arshaan
    window.open(whatsappUrl, '_blank');

    setInquirySubmitted(true);
  };

  return (
    <section id="final-cta" className="relative w-full py-28 sm:py-36 px-6 sm:px-10 bg-[#F4F6F8] text-[#1E2229] border-b border-[rgba(30,34,41,0.12)] overflow-hidden">
      
      {/* Full-Bleed Light Padel Court Background Asset */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <img
          src="./images/final-cta-bg.jpg"
          alt="Padel Court Background"
          className="w-full h-full object-cover object-center filter contrast-[1.04] brightness-[1.02]"
        />
        {/* Subtle light gradient scrims so the court image is crisp and clear, while text remains effortlessly readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F4F6F8]/95 via-[#F4F6F8]/75 to-[#F4F6F8]/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F4F6F8]/60 via-transparent to-[#F4F6F8]/70" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: "LET'S TALK" Headline & Action Buttons (6 Cols) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A4332]/10 text-[#1A4332] text-xs font-mono font-bold tracking-widest uppercase border border-[#1A4332]/25 shadow-sm backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#1A4332]" />
              <span>SECTION 05 // STRATEGIC NEXT STEP</span>
            </div>

            {/* High-Contrast Editorial Headline */}
            <h2 className="font-display font-bold text-4xl sm:text-6xl lg:text-[62px] text-[#1E2229] uppercase tracking-tight leading-[1.08]">
              LET'S TALK. <br />
              <span className="text-[#1A4332]">TURN YOUR COURTS</span> <br />
              <span className="text-[#1E2229]">INTO A BRAND.</span>
            </h2>

            <p className="text-base sm:text-lg font-sans text-[#374151] max-w-xl leading-relaxed font-medium">
              Whether you are launching your initial courts, growing an active player community, or ready to reclaim 100% data ownership and eliminate aggregator commission taxes—we build and deploy the exact digital infrastructure for your stage.
            </p>

            {/* Action Buttons: Direct Calendar Booking Link & WhatsApp */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href={CONFIG.CALENDAR_LINK}
                target="_blank"
                rel="noreferrer"
                className="btn-pickle-lime px-8 py-4 rounded-xl text-xs sm:text-sm uppercase flex items-center justify-center gap-2.5 cursor-pointer shadow-md font-bold transition-all hover:scale-[1.02]"
              >
                <Calendar className="w-4 h-4 text-[#1E2229]" />
                <span>BOOK VIA CALENDAR</span>
                <ArrowUpRight className="w-4 h-4 text-[#1E2229]" />
              </a>

              <a
                href={`https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=Hi%20Arshaan,%20I'd%20like%20to%20discuss%20our%20club's%20digital%20infrastructure.`}
                target="_blank"
                rel="noreferrer"
                className="px-7 py-4 rounded-xl bg-white/95 hover:bg-white text-[#1E2229] border border-[#D1D5DB] text-xs sm:text-sm font-sans font-bold flex items-center justify-center gap-2.5 transition-all cursor-pointer shadow-sm backdrop-blur-md hover:border-[#9CA3AF]"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>TALK ON WHATSAPP</span>
                <ArrowUpRight className="w-4 h-4 text-gray-500" />
              </a>
            </div>

            {/* Direct Founder Credentials (Clean, no extra subtitle lines) */}
            <div className="pt-6 border-t border-gray-300/80 space-y-3 font-sans">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1A4332] border border-[#D4F03C]/40 flex items-center justify-center font-display font-bold text-sm text-[#D4F03C] shadow-sm">
                  AK
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-[#1E2229]">
                    Arshaan Khan
                  </h4>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-1 text-xs font-mono text-[#4B5563]">
                <a href={`mailto:${CONFIG.EMAIL}`} className="hover:text-[#1A4332] flex items-center gap-1.5 transition-colors font-semibold">
                  <Mail className="w-3.5 h-3.5 text-[#1A4332]" />
                  <span>{CONFIG.EMAIL}</span>
                </a>
                <a href={`https://wa.me/${CONFIG.WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="hover:text-[#1A4332] flex items-center gap-1.5 transition-colors font-semibold">
                  <Phone className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>+{CONFIG.WHATSAPP_NUMBER}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Consultation Form (Preserving the Dark Color Palette) */}
          <div className="lg:col-span-6">
            <div className="bg-[#1E2229] p-8 sm:p-10 rounded-3xl border border-[#2D333E] shadow-2xl relative overflow-hidden text-white">
              
              {/* Subtle Luxury Corner Ambient Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#1A4332] rounded-full blur-[90px] opacity-40 pointer-events-none" />

              {!inquirySubmitted ? (
                <>
                  <div className="mb-6 relative z-10">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-[11px] font-bold text-[#D4F03C] uppercase tracking-wider flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-[#D4F03C]" />
                        DIRECT VENUE CONSULTATION
                      </span>
                      <span className="font-mono text-[10px] text-gray-400">
                        DIRECT WHATSAPP DISPATCH
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-white uppercase tracking-tight">
                      TELL US ABOUT YOUR CLUB
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-gray-300 mt-1 leading-relaxed">
                      Share your facility details below. Submitting will format and dispatch your inquiry directly to Arshaan on WhatsApp.
                    </p>
                  </div>

                  <form onSubmit={handleInquirySubmit} className="space-y-4 font-sans text-xs relative z-10">
                    {/* Name & Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-gray-300 font-bold uppercase text-[10px] tracking-wider block mb-1.5">
                          YOUR NAME *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Marcus Sterling"
                          value={inquiryData.name}
                          onChange={(e) => setInquiryData({ ...inquiryData, name: e.target.value })}
                          className="w-full p-3.5 rounded-xl bg-black/40 border border-white/15 text-white placeholder-gray-500 focus:border-[#D4F03C] focus:bg-black/60 outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="text-gray-300 font-bold uppercase text-[10px] tracking-wider block mb-1.5">
                          COMPANY / CLUB NAME *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Sovereign Padel Club"
                          value={inquiryData.companyName}
                          onChange={(e) => setInquiryData({ ...inquiryData, companyName: e.target.value })}
                          className="w-full p-3.5 rounded-xl bg-black/40 border border-white/15 text-white placeholder-gray-500 focus:border-[#D4F03C] focus:bg-black/60 outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Mobile Number & Social Link */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-gray-300 font-bold uppercase text-[10px] tracking-wider block mb-1.5">
                          MOBILE / WHATSAPP NUMBER *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+1 (555) 000-0000"
                          value={inquiryData.mobile}
                          onChange={(e) => setInquiryData({ ...inquiryData, mobile: e.target.value })}
                          className="w-full p-3.5 rounded-xl bg-black/40 border border-white/15 text-white placeholder-gray-500 focus:border-[#D4F03C] focus:bg-black/60 outline-none transition-all font-mono"
                        />
                      </div>

                      <div>
                        <label className="text-gray-300 font-bold uppercase text-[10px] tracking-wider block mb-1.5">
                          SOCIAL LINK / WEBSITE
                        </label>
                        <input
                          type="text"
                          placeholder="Instagram handle or website URL"
                          value={inquiryData.socialLink}
                          onChange={(e) => setInquiryData({ ...inquiryData, socialLink: e.target.value })}
                          className="w-full p-3.5 rounded-xl bg-black/40 border border-white/15 text-white placeholder-gray-500 focus:border-[#D4F03C] focus:bg-black/60 outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Services Interested In (Interactive Selection Pills) */}
                    <div>
                      <label className="text-gray-300 font-bold uppercase text-[10px] tracking-wider block mb-2">
                        SERVICES YOU ARE INTERESTED IN (SELECT ALL THAT APPLY) *
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {SERVICE_OPTIONS.map((srv) => {
                          const selected = inquiryData.services.includes(srv);
                          return (
                            <button
                              key={srv}
                              type="button"
                              onClick={() => toggleService(srv)}
                              className={`px-3 py-2 rounded-xl text-[11px] font-sans font-medium transition-all text-left flex items-center gap-1.5 cursor-pointer ${
                                selected
                                  ? 'bg-[#1A4332] text-[#D4F03C] border border-[#D4F03C]/40 shadow-sm'
                                  : 'bg-black/30 text-gray-300 hover:text-white border border-white/10 hover:border-white/20'
                              }`}
                            >
                              {selected && <Check className="w-3 h-3 text-[#D4F03C] shrink-0" />}
                              <span>{srv}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Remarks / Details */}
                    <div>
                      <label className="text-gray-300 font-bold uppercase text-[10px] tracking-wider block mb-1.5">
                        ANY REMARK / SPECIFIC GOALS
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Tell us about your courts, current software or booking platform, and where you need help..."
                        value={inquiryData.remark}
                        onChange={(e) => setInquiryData({ ...inquiryData, remark: e.target.value })}
                        className="w-full p-3.5 rounded-xl bg-black/40 border border-white/15 text-white placeholder-gray-500 focus:border-[#D4F03C] focus:bg-black/60 outline-none transition-all resize-none leading-relaxed"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="btn-pickle-lime w-full py-4 rounded-xl text-xs sm:text-sm uppercase font-bold cursor-pointer shadow-lime-glow flex items-center justify-center gap-2 mt-2 transition-all hover:scale-[1.01]"
                    >
                      <Send className="w-4 h-4 text-[#1E2229]" />
                      <span>DISPATCH INQUIRY DIRECTLY VIA WHATSAPP</span>
                    </button>

                    <p className="text-[10px] font-mono text-gray-400 text-center pt-1">
                      🔒 100% Direct & Confidential to Arshaan Khan. No third-party exposure.
                    </p>
                  </form>
                </>
              ) : (
                /* Inquiry Submitted Success View */
                <div className="py-8 text-center space-y-6 relative z-10 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#1A4332] border border-[#D4F03C]/40 mx-auto flex items-center justify-center text-[#D4F03C] shadow-lg">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>

                  <div className="space-y-2">
                    <span className="font-mono text-xs text-[#D4F03C] uppercase tracking-widest block font-bold">
                      INQUIRY DISPATCHED
                    </span>
                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-white uppercase">
                      THANK YOU, {inquiryData.name.toUpperCase()}!
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
                      Your inquiry for <strong className="text-white">{inquiryData.companyName}</strong> has been formulated and sent to Arshaan's direct WhatsApp (<strong className="text-white">+{CONFIG.WHATSAPP_NUMBER}</strong>).
                    </p>
                  </div>

                  {/* Summary Box */}
                  <div className="p-4 rounded-2xl bg-black/40 border border-white/15 text-left font-mono text-xs space-y-2 max-w-md mx-auto">
                    <div className="flex justify-between text-gray-400">
                      <span>Mobile / WhatsApp:</span>
                      <span className="text-white font-bold">{inquiryData.mobile}</span>
                    </div>
                    <div className="text-gray-400">
                      <span>Selected Services:</span>
                      <div className="text-[#D4F03C] mt-1 text-[11px]">
                        {inquiryData.services.join(' • ')}
                      </div>
                    </div>
                  </div>

                  {/* Backup Direct Click Button (If browser blocked popup) */}
                  <div className="space-y-3 pt-2">
                    <a
                      href={generatedWhatsAppUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-pickle-lime w-full py-3.5 rounded-xl text-xs uppercase font-bold flex items-center justify-center gap-2 transition-all shadow-lime-glow cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 text-[#1E2229]" />
                      <span>CLICK HERE IF WHATSAPP DIDN'T OPEN AUTOMATICALLY</span>
                    </a>

                    <div>
                      <button
                        type="button"
                        onClick={() => {
                          setInquirySubmitted(false);
                          setInquiryData({
                            name: '',
                            companyName: '',
                            mobile: '',
                            socialLink: '',
                            services: ['Custom Website & Online Presence'],
                            remark: ''
                          });
                        }}
                        className="text-xs font-mono text-gray-400 hover:text-white transition-colors cursor-pointer"
                      >
                        ← Submit Another Query
                      </button>
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
