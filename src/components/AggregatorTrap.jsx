import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, AlertCircle, ShieldCheck } from 'lucide-react';

export default function AggregatorTrap({ onOpenBooking }) {
  const [monthlyBookings, setMonthlyBookings] = useState(1200);
  const [activeSpotlight, setActiveSpotlight] = useState(0);
  const itemRefs = useRef([]);

  const avgBookingRate = 60;
  const commissionRate = 0.035;
  const monthlyLeak = Math.round(monthlyBookings * avgBookingRate * commissionRate);
  const annualLeak = Math.round(monthlyLeak * 12);

  const traps = [
    {
      id: 'exclusivity',
      title: 'The Exclusivity Illusion',
      question: 'Is it exclusive?',
      lead: 'You pay monthly listing fees for visibility, but the platform advertises your nearest rivals on your court page.',
      desc: 'When a player searches for your venue on an aggregator app, they are greeted by nearby competitors, discounted promos, and suggested venues. You pay for the listing, yet the platform uses your hard-earned traffic to cross-sell other clubs.',
      takeaway: 'Aggregator directories monetize your traffic, not your exclusivity.',
      mediaType: 'image',
      src: './images/is-it-exclusive.jpg',
      alt: 'Is it exclusive? - Racquet Club Reality'
    },
    {
      id: 'community',
      title: 'The Community Illusion',
      question: 'Do you really own your community?',
      lead: 'You build the courts, manage the turf, and host the games—yet you are forbidden from contacting your own players.',
      desc: 'Aggregators mask phone numbers and gatekeep customer emails to ensure you can never leave. When a rainout occurs or you launch a private coaching league, you cannot message your players directly—you must pay the app to reach the people on your own courts.',
      takeaway: 'If you cannot contact them directly, you do not own a community. You are renting an audience.',
      mediaType: 'video',
      src: './videos/do-you-own-your-community.mp4',
      alt: 'Do you really own your community?'
    },
    {
      id: 'commission',
      title: 'The Perpetual Margin Tax',
      question: 'Do you own it or rent it?',
      lead: 'A 3% to 5% cut on every single reservation that compounds infinitely as your venue grows.',
      desc: 'Unlike fixed digital infrastructure, aggregator fees scale with your sweat. When your club does $30,000 a month, you pay $1,050. When you scale to $75,000, you pay $2,625 for the exact same database query. You are building equity for an app while paying permanent rent on your own success.',
      takeaway: 'Sovereign digital infrastructure keeps your software cost strictly fixed while you keep 100% of court revenue.',
      mediaType: 'video',
      src: './videos/do-you-own-it-or-rent-it.mp4',
      alt: 'Do you own it or rent it?'
    }
  ];

  // Intersection observer to track which trap is in the spotlight
  useEffect(() => {
    const handleScroll = () => {
      const triggerY = window.scrollY + window.innerHeight * 0.45;
      itemRefs.current.forEach((ref, index) => {
        if (ref) {
          const top = ref.offsetTop;
          const height = ref.offsetHeight;
          if (triggerY >= top && triggerY < top + height) {
            setActiveSpotlight(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="the-trap" className="relative w-full">
      {/* Part 1: The 3 Spotlight Traps on Light Off-White Canvas */}
      <div className="w-full pt-32 pb-24 px-6 sm:px-10 bg-[#F8F9FA] text-[#1E2229] border-b border-[rgba(30,34,41,0.08)]">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A4332]/10 border border-[#1A4332]/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#1A4332]" />
              <span className="font-mono text-xs font-bold text-[#1A4332] uppercase tracking-widest">
                THE AGGREGATOR TRAP
              </span>
            </div>

            <h2 className="font-display font-bold text-4xl sm:text-6xl uppercase tracking-tight text-[#1E2229] leading-tight">
              THE TRUE COST OF <span className="text-[#1A4332]">RENTING YOUR PLAYERS</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[#4B5563] font-sans leading-relaxed">
              Third-party booking apps masquerade as partners while extracting your margins and standing between you and your players through cost stacking.
            </p>
          </div>

          {/* 3 Spotlight Traps with Visuals Filling Container 100% */}
          <div className="space-y-32">
            {traps.map((trap, idx) => {
              const isEven = idx % 2 === 1;
              const isSpotlight = activeSpotlight === idx;

              return (
                <div
                  key={trap.id}
                  ref={(el) => (itemRefs.current[idx] = el)}
                  className={`transition-all duration-700 ${
                    isSpotlight ? 'opacity-100 scale-100' : 'opacity-80 hover:opacity-100'
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                    
                    {/* Visual Asset Container (7 Cols) — Strictly 16:9, Fills Edge-to-Edge Without Black Bars */}
                    <div className={`lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-court-elevated border border-[#E5E7EB] bg-gray-100 group">
                        {trap.mediaType === 'image' ? (
                          <img
                            src={trap.src}
                            alt={trap.alt}
                            className="absolute inset-0 w-full h-full object-cover filter contrast-[1.03] group-hover:scale-104 transition-transform duration-700"
                            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                          />
                        ) : (
                          <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover filter contrast-[1.03]"
                            style={{ 
                              objectFit: 'cover', 
                              width: '100%', 
                              height: '100%', 
                              transform: 'scale(1.24)',
                              transformOrigin: 'center center'
                            }}
                          >
                            <source src={trap.src} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        )}

                        {/* Subtle Vignette for Luxury Finish */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                      </div>
                    </div>

                    {/* Text Editorial Container (5 Cols) */}
                    <div className={`lg:col-span-5 space-y-4 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                      {/* Philosophical Question Pill */}
                      <div className="inline-block font-mono text-xs font-bold text-[#1A4332] uppercase tracking-wider bg-[#1A4332]/10 px-3.5 py-1 rounded-full border border-[#1A4332]/15">
                        {trap.question}
                      </div>

                      <h3 className="font-display font-bold text-3xl sm:text-4xl text-[#1E2229] uppercase tracking-tight leading-snug">
                        {trap.title}
                      </h3>

                      <p className="text-base font-semibold text-[#1A4332] leading-snug">
                        {trap.lead}
                      </p>

                      <p className="text-sm sm:text-base font-sans text-[#4B5563] leading-relaxed">
                        {trap.desc}
                      </p>

                      <div className="pt-4 border-t border-[#E5E7EB]">
                        <span className="font-mono text-[10px] text-gray-500 uppercase tracking-wider block mb-1">
                          STRATEGIC VERDICT
                        </span>
                        <p className="text-xs sm:text-sm font-sans font-medium text-[#1E2229]">
                          {trap.takeaway}
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* Part 2: Calculate Your Revenue Leak in Palette Rich Forest Green (#1A4332) */}
      <div className="w-full py-24 px-6 sm:px-10 bg-[#1A4332] text-white border-b border-[#14171C]/20 shadow-inner">
        <div className="max-w-7xl mx-auto">
          
          {/* Pristine White Card on the Dark Green Canvas */}
          <div className="bg-white rounded-3xl border border-white/20 p-8 sm:p-14 shadow-2xl text-[#1E2229]">
            <div className="max-w-3xl mb-10">
              <span className="font-mono text-xs font-bold text-[#1A4332] uppercase tracking-wider block mb-1">
                THE MATHEMATICAL REALITY
              </span>
              <h3 className="font-display font-bold text-3xl sm:text-5xl uppercase tracking-tight text-[#1E2229]">
                CALCULATE YOUR REVENUE LEAK
              </h3>
              <p className="text-sm sm:text-base text-[#4B5563] font-sans mt-2">
                Adjust your monthly court booking volume to see how aggregator commissions drain your gross margin annually.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Slider Section (7 Cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="font-bold text-[#1E2229] uppercase tracking-wider">
                    MONTHLY COURT RESERVATIONS
                  </span>
                  <span className="text-lg font-bold text-[#1A4332]">
                    {monthlyBookings.toLocaleString()} BOOKINGS
                  </span>
                </div>

                <input
                  type="range"
                  min="400"
                  max="3000"
                  step="50"
                  value={monthlyBookings}
                  onChange={(e) => setMonthlyBookings(Number(e.target.value))}
                  className="w-full h-3.5 bg-[#E5E7EB] rounded-lg appearance-none cursor-pointer accent-[#1A4332]"
                />

                <div className="flex justify-between text-[11px] font-mono text-[#6B7280]">
                  <span>400 Bookings</span>
                  <span>1,500 Bookings</span>
                  <span>3,000+ Bookings</span>
                </div>
              </div>

              {/* Metric Results (5 Cols) */}
              <div className="lg:col-span-5 bg-[#F8F9FA] p-7 rounded-2xl border border-[#E5E7EB] flex flex-col justify-between gap-5 shadow-sm">
                <div>
                  <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest block">
                    ANNUAL MARGIN LOST TO COMMISSIONS
                  </span>
                  <div className="font-display font-bold text-4xl sm:text-5xl text-[#1E2229] mt-1">
                    -${annualLeak.toLocaleString()}
                  </div>
                  <div className="text-xs font-mono text-[#1A4332] font-bold mt-1.5">
                    ~${monthlyLeak.toLocaleString()} DRAINED EVERY MONTH
                  </div>
                </div>

                <button
                  onClick={onOpenBooking}
                  className="btn-pickle-lime w-full py-4 rounded-xl text-xs uppercase flex items-center justify-center gap-2 cursor-pointer shadow-lime-glow font-bold"
                >
                  <span>STOP RENTING YOUR PLAYERS</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
