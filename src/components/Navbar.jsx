import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { CONFIG } from '../config';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'THE TRAP', href: '#the-trap' },
    { label: 'THE SOLUTION', href: '#the-solution' },
    { label: 'CLUB LIFECYCLE', href: '#lifecycle' },
    { label: "LET'S TALK", href: '#final-cta' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-5 sm:px-10 py-4 ${
        isScrolled
          ? 'bg-[#F8F9FA]/95 border-b border-[rgba(30,34,41,0.12)] shadow-sm backdrop-blur-md'
          : 'bg-transparent border-b border-white/10 backdrop-blur-[2px]'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-[#1A4332] flex items-center justify-center shadow-md relative overflow-hidden">
            <span className="w-3.5 h-3.5 rounded-full bg-[#D4F03C] shadow-[0_0_8px_#D4F03C]" />
          </div>
          <div>
            <span
              className={`font-display font-bold text-xl sm:text-2xl tracking-wider block transition-colors ${
                isScrolled ? 'text-[#1E2229]' : 'text-white'
              }`}
            >
              PICKLEADS
            </span>
            <span
              className={`font-mono text-[9px] font-bold tracking-widest uppercase block transition-colors ${
                isScrolled ? 'text-[#1A4332]' : 'text-[#D4F03C]'
              }`}
            >
              OWN YOUR ECOSYSTEM
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 font-sans text-xs tracking-wider font-semibold">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`transition-colors relative py-1 ${
                isScrolled
                  ? 'text-[#1E2229] hover:text-[#1A4332]'
                  : 'text-white/85 hover:text-white'
              }`}
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4F03C] transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right CTA Button (Electric Lime Accent - Opens Cal Link) */}
        <div className="flex items-center gap-4">
          <a
            href={CONFIG.CALENDAR_LINK}
            target="_blank"
            rel="noreferrer"
            className="btn-pickle-lime px-5 py-2.5 rounded-xl text-xs flex items-center gap-2 cursor-pointer shadow-sm font-bold"
          >
            <span>BOOK A CALL</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-xl border transition-colors ${
              isScrolled
                ? 'bg-white text-[#1E2229] border-[#E5E7EB]'
                : 'bg-black/30 text-white border-white/20'
            }`}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 p-6 bg-white rounded-2xl border border-[#E5E7EB] shadow-xl animate-in slide-in-from-top-3 duration-200">
          <div className="flex flex-col gap-4 font-sans text-xs font-semibold text-[#1E2229]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-gray-100 hover:text-[#1A4332]"
              >
                {link.label}
              </a>
            ))}
            <a
              href={CONFIG.CALENDAR_LINK}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-pickle-lime w-full py-3 rounded-xl text-center mt-2 cursor-pointer font-bold block"
            >
              BOOK VIA CALENDAR
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
