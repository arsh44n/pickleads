import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

const STAGES = [
  {
    id: 'stage-01',
    step: 'STAGE 01',
    code: 'FOUNDATION',
    title: 'Digital Presence & Initial Infrastructure',
    subtitle: 'Setting Up Your Digital Groundwork',
    image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=1200&q=80',
    lead: 'For new or emerging venues establishing their online identity and digital storefront.',
    desc: 'We deliver your custom responsive website, build your clean online presence, and assist with targeted outbound marketing to introduce your facility locally and build your initial community of players.',
    services: [
      'Custom high-converting club website & brand identity',
      'Online digital presence setup & local discoverability',
      'Initial player acquisition marketing to build your player list',
      'Direct WhatsApp onboarding link for seamless member inquiries'
    ]
  },
  {
    id: 'stage-02',
    step: 'STAGE 02',
    code: 'GROWTH',
    title: 'Revenue Optimization & Brand Acceleration',
    subtitle: 'Maximizing Revenue Streams for Active Venues',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    lead: 'For established facilities with an active player base ready to scale into a recognized brand.',
    desc: 'Once your courts are operating and engaging players, we help optimize and unlock new revenue lines—transitioning you to a bespoke booking platform, activating café & pro-shop commerce, and providing growth marketing so you can focus on venue operations.',
    services: [
      'Private-label mobile app (iOS & Android) and web booking',
      'Revenue expansion: In-club café tabs, pro-shop gear & clinics',
      'Targeted player acquisition & marketing growth services',
      'Elimination of aggregator commissions on your court revenue'
    ]
  },
  {
    id: 'stage-03',
    step: 'STAGE 03',
    code: 'AUTHORITY',
    title: 'Brand Sustainability & Club Lifestyle',
    subtitle: 'Maintaining Long-Term Community Loyalty',
    image: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=1200&q=80',
    lead: 'For premier venues establishing lasting market authority and permanent community retention.',
    desc: 'At the brand stage, operational systems ensure sustained loyalty. We provide private club social networks, verified DUPR matchmaking, doubles partner finders, and automated retention loops to elevate your courts into an indispensable lifestyle cult.',
    services: [
      'In-app member community, social feeds & player profiles',
      'Automated DUPR/Elo rating matchmaking for balanced matches',
      'Automated player re-engagement loops via WhatsApp & email',
      'Tournament, club mixer & VIP league operational frameworks'
    ]
  }
];

export default function ClubLifecycle({ onOpenBooking }) {
  const [activeStage, setActiveStage] = useState(0);
  const stageRefs = useRef([]);

  // Scroll detection to update active stage smoothly using viewport-relative bounding rect
  useEffect(() => {
    const handleScroll = () => {
      const viewportCenter = window.innerHeight * 0.48;
      let closestIndex = 0;
      let minDistance = Infinity;

      stageRefs.current.forEach((ref, index) => {
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

      setActiveStage(closestIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const current = STAGES[activeStage];

  return (
    <section id="lifecycle" className="relative w-full py-32 px-6 sm:px-10 bg-white text-[#1E2229] border-b border-[rgba(30,34,41,0.12)]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header: Title & Caption strictly in 1 line on desktop */}
        <div className="w-full mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A4332]/10 border border-[#1A4332]/20 mb-5">
            <Sparkles className="w-4 h-4 text-[#1A4332]" />
            <span className="font-mono text-xs font-bold text-[#1A4332] uppercase tracking-widest">
              THE TRANSFORMATION FRAMEWORK
            </span>
          </div>

          {/* Strictly 1 Line Title */}
          <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-[54px] uppercase tracking-tight text-[#1E2229] leading-tight whitespace-normal md:whitespace-nowrap">
            THE 3-STAGE <span className="text-[#1A4332]">CLUB LIFECYCLE</span>
          </h2>

          {/* Strictly 1 Line Caption on Desktop */}
          <p className="mt-4 text-sm sm:text-base lg:text-[17px] text-[#4B5563] font-sans leading-relaxed whitespace-normal xl:whitespace-nowrap">
            How a racquet facility transitions from an unknown court into a sovereign, high-margin lifestyle movement.
          </p>
        </div>

        {/* Mirrored Scrollytelling Grid: LEFT Sticky Asset Showcase (7 Cols), RIGHT Scrolling Narrative (5 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Apple-Grade Sticky Showcase Asset Frame (7 Cols) — Pure Visual Image Filling the Box */}
          <div className="lg:col-span-7 sticky top-32 lg:top-[calc(50vh-270px)] transition-all duration-300 order-2 lg:order-1 flex justify-center">
            <div className="relative rounded-3xl overflow-hidden shadow-court-elevated border border-[#E5E7EB] bg-gray-100 aspect-[16/10] sm:aspect-[4/3] lg:aspect-[16/11] w-full group">
              <img
                key={current.id}
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover filter contrast-[1.03] group-hover:scale-102 transition-all duration-700 animate-fadeIn"
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </div>
          </div>

          {/* RIGHT: Spacious, High-Contrast Narrative Steps (5 Cols) */}
          <div className="lg:col-span-5 space-y-36 pb-20 order-1 lg:order-2">
            {STAGES.map((stg, idx) => (
              <div
                key={stg.id}
                ref={(el) => (stageRefs.current[idx] = el)}
                className={`transition-all duration-500 pl-6 border-l-4 ${
                  activeStage === idx 
                    ? 'opacity-100 scale-100 border-[#1A4332]' 
                    : 'opacity-70 hover:opacity-95 scale-[0.98] border-transparent'
                }`}
              >
                {/* Step Marker */}
                <div className="flex items-center gap-3 mb-4">
                  <span className={`font-mono text-xs font-bold px-3 py-1 rounded-md tracking-widest transition-colors ${
                    activeStage === idx ? 'bg-[#1A4332] text-[#D4F03C]' : 'bg-gray-200 text-gray-700'
                  }`}>
                    {stg.step}
                  </span>
                  <span className="font-mono text-xs text-[#1A4332] font-bold uppercase tracking-wider">
                    {stg.code}
                  </span>
                </div>

                {/* Step Headline */}
                <h3 className="font-display font-bold text-3xl sm:text-4xl text-[#1E2229] uppercase tracking-tight mb-2 leading-snug">
                  {stg.title}
                </h3>

                {/* Subtitle */}
                <p className="font-mono text-xs font-bold text-[#1A4332] uppercase tracking-wider block mb-3">
                  {stg.subtitle}
                </p>

                {/* Grounded Proposition */}
                <p className="text-sm font-semibold text-[#1A4332] mb-3 leading-snug">
                  {stg.lead}
                </p>

                {/* Realistic, Minimal Explanatory Text */}
                <p className="text-xs sm:text-sm font-sans text-[#4B5563] leading-relaxed mb-6 font-medium">
                  {stg.desc}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-2.5 pt-4 border-t border-[#E5E7EB]">
                  <span className="font-mono text-[10px] text-gray-500 uppercase tracking-wider block mb-1">
                    SERVICES WE PROVIDE AT THIS STAGE:
                  </span>
                  {stg.services.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#1A4332] shrink-0 mt-0.5" />
                      <span className="text-xs font-sans text-[#1E2229] font-medium leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Direct Action Link */}
                <div className="pt-5 mt-4 border-t border-[#E5E7EB]">
                  <button
                    onClick={onOpenBooking}
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#1A4332] hover:text-[#1E2229] uppercase tracking-wider group-hover:translate-x-1 transition-transform cursor-pointer"
                  >
                    <span>DISCUSS {stg.code} SERVICES</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
