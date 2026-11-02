import React from 'react';
import Navbar from './components/Navbar';
import HeroVideo from './components/HeroVideo';
import AggregatorTrap from './components/AggregatorTrap';
import OwnYourCourts from './components/OwnYourCourts';
import ClubLifecycle from './components/ClubLifecycle';
import TechArsenalEnterprise from './components/TechArsenalEnterprise';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import { CONFIG } from './config';

export default function App() {
  const handleOpenCalendar = () => {
    window.open(CONFIG.CALENDAR_LINK, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1E2229] selection:bg-[#D4F03C] selection:text-[#1E2229]">
      {/* Floating Modern Country Club Navbar */}
      <Navbar onOpenBooking={handleOpenCalendar} />

      {/* Hero Section: Fullscreen Background Video with 2-Line Title & Staggered Word Reveal */}
      <HeroVideo />

      {/* Main Narrative Suite: Renting vs. Owning Your Business Ecosystem */}
      <main className="relative z-10">
        {/* Section 1: The Aggregator Trap (The Problem & Cost Stacking Math) */}
        <AggregatorTrap onOpenBooking={handleOpenCalendar} />

        {/* Section 2: The Solution (Don't Rent Your Business. Own Your Courts.) */}
        <OwnYourCourts onOpenBooking={handleOpenCalendar} />

        {/* Section 3: The 3-Stage Club Growth Lifecycle */}
        <ClubLifecycle onOpenBooking={handleOpenCalendar} />

        {/* Section 4: Operational System Architecture (Temporarily hidden per request, code preserved) */}
        {/* <TechArsenalEnterprise /> */}

        {/* Section 5: The Strategic Next Step (Direct Inquiry & Call Booking) */}
        <FinalCTA />
      </main>

      {/* Executive Footer */}
      <Footer />
    </div>
  );
}
