import React, { useState } from 'react';
import { Star, Award, ShieldCheck, CheckCircle2, ChevronRight, TrendingUp, Trophy } from 'lucide-react';

const REVIEWS = [
  {
    source: 'CAR AND DRIVER',
    score: '10 / 10',
    title: 'The Benchmark Super-Saloon Reborn',
    quote: 'The G90 proves that electrification and pure combustion fury can coalesce into something extraordinary. 727 hp on tap with sports-car agility and zero-emission city silent cruising.',
    badge: 'EDITOR’S CHOICE 2026',
    date: 'OCTOBER 2026'
  },
  {
    source: 'TOP GEAR',
    score: '9.5 / 10',
    title: 'Terrifying Pace with Everyday Luxury',
    quote: 'BMW M didn’t just add hybrid power; they re-engineered the super-sedan blueprint. The instantaneous electric torque-fill makes this feel faster in the real world than any previous M5.',
    badge: 'SUPER SALOON OF THE YEAR',
    date: 'SEPTEMBER 2026'
  },
  {
    source: 'MOTOR TREND',
    score: 'BEST IN CLASS',
    title: 'Engineering Mastery at Its Apex',
    quote: 'From the M Carbon ceramic stopping power to the sheer traction of the rear-biased M xDrive, the G90 is an engineering triumph for the modern performance era.',
    badge: 'GOLDEN CALIPER NOMINEE',
    date: 'AUGUST 2026'
  }
];

const TRUST_METRICS = [
  { label: 'CUSTOMER SATISFACTION', val: '99.4%', detail: 'Global BMW M Owner Index' },
  { label: 'NÜRBURGRING VALIDATION', val: '7:20 MIN', detail: 'Nordschleife Benchmark Lap' },
  { label: 'BATTERY WARRANTY', val: '8 YEARS', detail: '160,000 km High-Voltage Coverage' },
  { label: 'M ULTIMATE CARE', val: '3 YEARS', detail: 'Factory Scheduled Maintenance Included' }
];

export default function SocialProof() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="relative w-full py-20 px-6 bg-[#FFFFFF] border-b border-[#D9D9D9]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D9D9D9] bg-[#F1F4F8] mb-3">
              <Trophy className="w-3.5 h-3.5 text-[#BF5B21]" />
              <span className="font-mono text-xs font-bold text-[#252859] uppercase tracking-wider">
                BUYER VALIDATION & INDUSTRY ACCLAIM
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#252859] uppercase tracking-tight">
              CRITICALLY ACCLAIMED. <span className="text-[#0568A6]">TRACK PROVEN.</span>
            </h2>
            <p className="mt-2 text-[#4B5563] max-w-xl text-sm sm:text-base">
              The world's leading automotive journalists and Nürburgring test drivers confirm what 40 years of M heritage promised: uncompromised supremacy.
            </p>
          </div>

          {/* Trust Seal Pill */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#F8F9FA] border border-[#D9D9D9] self-start md:self-auto shadow-sm">
            <ShieldCheck className="w-5 h-5 text-[#0568A6]" />
            <span className="font-mono text-xs font-bold text-[#252859]">
              BMW M GMBH OFFICIAL CERTIFIED PROGRAM
            </span>
          </div>
        </div>

        {/* 4 Trust Metrics Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {TRUST_METRICS.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#F8F9FA] border border-[#D9D9D9] hover:border-[#0568A6] transition-all shadow-sm"
            >
              <div className="text-[10px] font-mono font-bold text-[#6B7280] uppercase tracking-wider mb-1">
                {item.label}
              </div>
              <div className="font-display font-bold text-2xl sm:text-3xl text-[#252859] tracking-tight">
                {item.val}
              </div>
              <div className="text-xs font-mono text-[#0568A6] font-medium mt-1">
                {item.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Press Reviews Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Review Selector Tabs (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {REVIEWS.map((rev, index) => {
              const isSelected = activeTab === index;
              return (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`p-5 rounded-2xl text-left transition-all border cursor-pointer ${
                    isSelected
                      ? 'bg-[#252859] text-white border-[#252859] shadow-lg transform translate-x-1'
                      : 'bg-[#F8F9FA] text-[#252859] border-[#D9D9D9] hover:border-[#0568A6] hover:bg-white'
                  }`}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className={`font-mono text-xs font-bold tracking-wider ${isSelected ? 'text-[#BF5B21]' : 'text-[#0568A6]'}`}>
                      {rev.source}
                    </span>
                    <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded-full ${isSelected ? 'bg-white/20 text-white' : 'bg-[#E5E7EB] text-[#252859]'}`}>
                      {rev.score}
                    </span>
                  </div>
                  <div className={`font-display font-bold text-sm sm:text-base mt-1 ${isSelected ? 'text-white' : 'text-[#252859]'}`}>
                    {rev.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Review Quote Spotlight (8 cols) */}
          <div className="lg:col-span-8 p-8 sm:p-10 rounded-3xl bg-[#F8F9FA] border border-[#D9D9D9] flex flex-col justify-between shadow-sm relative overflow-hidden">
            {/* Top Badge */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-1.5 text-[#BF5B21]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="font-mono text-xs font-bold text-[#D93030] tracking-wider uppercase px-3 py-1 rounded-full bg-[#D93030]/10 border border-[#D93030]/20">
                {REVIEWS[activeTab].badge}
              </span>
            </div>

            {/* Quote Body */}
            <blockquote className="text-lg sm:text-xl md:text-2xl font-sans font-medium text-[#252859] leading-snug my-2">
              "{REVIEWS[activeTab].quote}"
            </blockquote>

            {/* Author / Source Meta */}
            <div className="mt-8 pt-6 border-t border-[#D9D9D9] flex justify-between items-center">
              <div>
                <span className="font-display font-bold text-base text-[#252859] block">
                  {REVIEWS[activeTab].source} EDITORIAL TEAM
                </span>
                <span className="font-mono text-xs text-[#6B7280]">
                  Official First Drive Review // {REVIEWS[activeTab].date}
                </span>
              </div>
              <a
                href="#configurator"
                className="btn-m-primary px-5 py-2.5 rounded-xl text-xs flex items-center gap-2"
              >
                <span>TEST DRIVE NOW</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
