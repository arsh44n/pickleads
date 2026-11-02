import React, { useState, useEffect, useRef } from 'react';
import { 
  Database, 
  Percent, 
  Coffee, 
  Users, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  DollarSign
} from 'lucide-react';

export default function OwnYourCourts({ onOpenBooking }) {
  const [activePillar, setActivePillar] = useState(0);
  const sectionRefs = useRef([]);

  const pillars = [
    {
      id: 'data-ownership',
      step: '01',
      title: '100% Data Ownership',
      tag: 'DIRECT MEMBER ACCESS',
      lead: "You built the venue. You shouldn't have to beg an app for your players' contact info.",
      desc: 'Aggregators mask player emails and gatekeep phone numbers so you can never leave. With your own sovereign infrastructure, every single booking routes directly into your direct WhatsApp & email customer CRM from day one.',
      impactMetric: '100%',
      impactLabel: 'Direct Player Contacts Retained',
      image: '/images/sovereign-data-ownership.png',
      badge: 'PROPRIETARY MEMBER DATABASE',
      stats: [
        { label: 'Unmasked Contacts', value: '100%' },
        { label: 'Direct WhatsApp Retargeting', value: 'Active' },
        { label: 'Intermediary Gatekeepers', value: 'Zero' }
      ]
    },
    {
      id: 'zero-commission',
      step: '02',
      title: 'Zero Per-Booking Commissions',
      tag: 'PERMANENT MARGIN FREEDOM',
      lead: 'Stop paying a 3% to 5% tax on every court reservation your own community makes.',
      desc: 'As your venue adds courts and scales revenue, third-party apps charge you more and more for the exact same software. We replace commission draining apps with a fixed-overhead infrastructure where 100% of the money goes straight to your bank.',
      impactMetric: '0.0%',
      impactLabel: 'Platform Commission Tax',
      image: '/images/sovereign-own-your-courts.jpg',
      badge: 'UNTOUCHED GROSS MARGINS',
      stats: [
        { label: 'Per-Booking Platform Cut', value: '0.0%' },
        { label: 'Annual Revenue Saved', value: '$32k - $74k' },
        { label: 'Direct Stripe Payout', value: 'Instant' }
      ]
    },
    {
      id: 'in-club-commerce',
      step: '03',
      title: 'In-Club Café, Pro-Shop & Ancillary Revenue',
      tag: 'EXPANDED VENUE COMMERCE',
      lead: 'Turn a $40 hourly court rental into a $140 comprehensive luxury club visit.',
      desc: 'Aggregators only let you sell court slots. Your private digital platform connects your entire property—allowing players to pre-order smoothies, cold brews, and protein bowls delivered straight to Court 3, charge pro-shop rackets to their account, and book coaching clinics with 1 tap.',
      impactMetric: '+38%',
      impactLabel: 'Average Secondary Spend per Player',
      image: '/images/sovereign-cafe-commerce.jpg',
      badge: 'UNIFIED PLAYER WALLET',
      stats: [
        { label: 'Café & Bar Pre-Orders', value: 'Enabled' },
        { label: 'Pro-Shop Tab Sync', value: 'Instant' },
        { label: 'Clinic & League Billing', value: 'Unified' }
      ]
    },
    {
      id: 'social-matchmaking',
      step: '04',
      title: 'Private Club Social Network & Matchmaking',
      tag: 'COMMUNITY-LED RETENTION',
      lead: "Players don't just book courts. They show up for their community and competition.",
      desc: 'Transform your facility into an exclusive, sticky social club. Our platform gives your players a private social feed, verified DUPR/Elo rating matchmaking, open doubles mixers, and partner finders—turning casual court renters into a lifelong, self-sustaining movement.',
      impactMetric: '4.2X',
      impactLabel: 'Weekly Player Session Frequency',
      image: '/images/sovereign-social-club.jpg',
      badge: 'COMMUNITY NETWORK EFFECT',
      stats: [
        { label: 'DUPR / Skill Matchmaking', value: 'Automated' },
        { label: 'Doubles Open Mixers', value: 'Live' },
        { label: 'Player Community Feed', value: 'Integrated' }
      ]
    }
  ];

  // Scroll detection to update active pillar smoothly using viewport-relative bounding rect
  useEffect(() => {
    const handleScroll = () => {
      const viewportCenter = window.innerHeight * 0.48;
      let closestIndex = 0;
      let minDistance = Infinity;

      sectionRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const elementCenter = rect.top + rect.height * 0.35;
          const distance = Math.abs(elementCenter - viewportCenter);
          if (distance < minDistance) {
            minDistance = distance;
            closestIndex = index;
          }
        }
      });

      setActivePillar(closestIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const current = pillars[activePillar];

  return (
    <section id="the-solution" className="relative w-full py-32 px-6 sm:px-10 bg-[#F8F9FA] text-[#1E2229] border-b border-[rgba(30,34,41,0.12)]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header: Spacious, Uncluttered, Editorial */}
        <div className="w-full mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A4332]/10 border border-[#1A4332]/20 mb-6">
            <ShieldCheck className="w-4 h-4 text-[#1A4332]" />
            <span className="font-mono text-xs font-bold text-[#1A4332] uppercase tracking-widest">
              THE SOVEREIGN PLATFORM
            </span>
          </div>
          
          <h2 className="font-display font-bold text-[clamp(1.5rem,4.2vw,3.75rem)] uppercase tracking-tight text-[#1E2229] leading-[1.12]">
            <span className="block whitespace-nowrap">DON'T RENT YOUR BUSINESS.</span>
            <span className="block whitespace-nowrap text-[#1A4332] mt-2">OWN YOUR COURTS.</span>
          </h2>
          
          <p className="mt-5 text-sm sm:text-base lg:text-[17px] text-[#4B5563] font-sans leading-relaxed whitespace-normal xl:whitespace-nowrap">
            Transition from third-party aggregator dependency to bespoke, luxury digital infrastructure. Reclaim 100% of your customer data, eliminate commission drains, and build a high-retention club culture.
          </p>
        </div>

        {/* Apple-Style Scrollytelling Grid: Left Scrolling Narrative, Right Sticky Living Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Spacious, High-Contrast Narrative Steps (5 Cols) */}
          <div className="lg:col-span-5 space-y-36 pb-20">
            {pillars.map((pillar, idx) => (
              <div
                key={pillar.id}
                ref={(el) => (sectionRefs.current[idx] = el)}
                className={`transition-all duration-500 pl-6 border-l-4 ${
                  activePillar === idx 
                    ? 'opacity-100 scale-100 border-[#1A4332]' 
                    : 'opacity-70 hover:opacity-95 scale-[0.98] border-transparent'
                }`}
              >
                {/* Step Marker */}
                <div className="flex items-center gap-3 mb-4">
                  <span className={`font-mono text-xs font-bold px-3 py-1 rounded-md tracking-widest transition-colors ${
                    activePillar === idx ? 'bg-[#1A4332] text-[#D4F03C]' : 'bg-gray-200 text-gray-700'
                  }`}>
                    STEP {pillar.step}
                  </span>
                  <span className="font-mono text-xs text-[#1A4332] font-bold uppercase tracking-wider">
                    {pillar.tag}
                  </span>
                </div>

                {/* Step Headline */}
                <h3 className="font-display font-bold text-3xl sm:text-4xl text-[#1E2229] uppercase tracking-tight mb-4 leading-snug">
                  {pillar.title}
                </h3>

                {/* Bold Proposition */}
                <p className="text-base sm:text-lg font-display text-[#1A4332] font-semibold mb-4 leading-snug">
                  {pillar.lead}
                </p>

                {/* Deep Explanatory Copy */}
                <p className="text-sm sm:text-base font-sans text-[#4B5563] leading-relaxed mb-6 font-medium">
                  {pillar.desc}
                </p>

                {/* Key Metric Highlight Pill */}
                <div className="p-5 rounded-2xl bg-white border border-[#E5E7EB] shadow-sm flex items-center justify-between mb-6">
                  <div>
                    <span className="font-mono text-[10px] text-gray-500 uppercase tracking-wider block">
                      MEASURABLE CLUB IMPACT
                    </span>
                    <span className="text-xs font-semibold text-[#1E2229]">
                      {pillar.impactLabel}
                    </span>
                  </div>
                  <div className="font-display font-bold text-3xl text-[#1A4332]">
                    {pillar.impactMetric}
                  </div>
                </div>

                {/* Quick Checkpoints */}
                <div className="space-y-2 border-t border-[#E5E7EB] pt-4">
                  {pillar.stats.map((stat, sIdx) => (
                    <div key={sIdx} className="flex justify-between items-center text-xs font-mono">
                      <span className="text-[#6B7280]">{stat.label}</span>
                      <span className="font-bold text-[#1E2229]">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT: Apple-Grade Sticky Showcase Asset Frame (7 Cols) — Pure Visual Image Filling the Box */}
          <div className="lg:col-span-7 sticky top-32 lg:top-[calc(50vh-290px)] transition-all duration-300 flex justify-center">
            <div className="relative rounded-3xl overflow-hidden shadow-court-elevated border border-[#E5E7EB] bg-[#0A0D14] w-full max-w-[480px] aspect-[4/5] sm:h-[580px] sm:w-[464px] group">
              <img
                key={current.id}
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover filter contrast-[1.03] group-hover:scale-102 transition-all duration-700 animate-fadeIn"
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
