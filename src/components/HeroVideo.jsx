import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export default function HeroVideo() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Reveal text after exactly 3 seconds
    const timer = setTimeout(() => {
      setShowText(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Line 1 and Line 2 strictly separated so it never wraps into 3 or 4 lines
  const line1Words = ["Scaling", "Racquet", "Clubs", "Through"];
  const line2Words = ["High-Intent", "Automation", "&", "Custom", "Tech."];

  const captionWords = [
    "We", "build", "bespoke", "court-booking", "platforms,", "cohort-based", 
    "subscription", "engines,", "and", "automated", "Go-To-Market", "pipelines", 
    "that", "nurture", "the", "community."
  ];

  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#1E2229] flex items-center justify-center">
      {/* Fullscreen Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 filter brightness-[0.85] contrast-[1.08]"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Cinematic Dark Gradient Scrim for Pristine Contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/30 to-black/70 z-10 pointer-events-none" />

      {/* Content Container (Word-by-word reveal after 3 seconds) */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-4 sm:px-8 text-center flex flex-col items-center justify-center">
        {/* Main Headline — STRICTLY EXACTLY TWO LINES ACROSS ALL SCREENS */}
        <h1 className="w-full font-display font-bold text-[clamp(1.35rem,4.2vw,3.65rem)] text-white uppercase tracking-tight leading-[1.15] drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)] text-center mx-auto">
          {/* Line 1 - Strictly 1 Line */}
          <span className="block whitespace-nowrap text-center mx-auto">
            {line1Words.map((word, index) => {
              const delay = 3000 + index * 90;
              return (
                <span
                  key={index}
                  className="inline-block mx-[0.14em] transition-all duration-700 ease-out"
                  style={{
                    opacity: showText ? 1 : 0,
                    transform: showText ? 'translateY(0)' : 'translateY(24px)',
                    transitionDelay: `${delay}ms`
                  }}
                >
                  {word}
                </span>
              );
            })}
          </span>

          {/* Line 2 - Strictly 1 Line, Centered in the Middle of the Page */}
          <span className="block whitespace-nowrap text-center mx-auto mt-1.5 sm:mt-2.5">
            {line2Words.map((word, index) => {
              const delay = 3000 + (line1Words.length + index) * 90;
              return (
                <span
                  key={index}
                  className="inline-block mx-[0.14em] transition-all duration-700 ease-out"
                  style={{
                    opacity: showText ? 1 : 0,
                    transform: showText ? 'translateY(0)' : 'translateY(24px)',
                    transitionDelay: `${delay}ms`
                  }}
                >
                  {word === "High-Intent" || word === "Automation" ? (
                    <span className="text-[#D4F03C] drop-shadow-[0_0_20px_rgba(212,240,60,0.5)]">{word}</span>
                  ) : (
                    word
                  )}
                </span>
              );
            })}
          </span>
        </h1>

        {/* Caption Text (word-by-word reveal right after headline) */}
        <p className="mt-6 sm:mt-8 max-w-3xl text-sm sm:text-lg md:text-xl text-[#F8F9FA]/90 font-sans font-normal leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] mx-auto">
          {captionWords.map((word, index) => {
            const delay = 3850 + index * 45;
            return (
              <span
                key={index}
                className="inline-block mr-[0.24em] transition-all duration-500 ease-out"
                style={{
                  opacity: showText ? 1 : 0,
                  transform: showText ? 'translateY(0)' : 'translateY(14px)',
                  transitionDelay: `${delay}ms`
                }}
              >
                {word}
              </span>
            );
          })}
        </p>
      </div>

      {/* Subtle Scroll Down Prompt at Bottom of Viewport */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none transition-opacity duration-1000"
        style={{ opacity: showText ? 0.75 : 0, transitionDelay: '4600ms' }}
      >
        <span className="font-mono text-[10px] tracking-[0.28em] text-white/70 uppercase font-bold">
          SCROLL TO EXPLORE INFRASTRUCTURE
        </span>
        <ChevronDown className="w-4 h-4 text-[#D4F03C] animate-bounce" />
      </div>
    </section>
  );
}
