import React, { useState } from 'react';
import { 
  Check, 
  MapPin, 
  Calendar, 
  CreditCard, 
  FileText, 
  Sliders, 
  X, 
  ChevronRight, 
  CheckCircle2, 
  ShieldCheck, 
  Phone,
  Sparkles,
  Download,
  Search
} from 'lucide-react';

const EXTERIOR_COLORS = [
  { id: 'carbon-black', name: 'Carbon Black Metallic', hex: '#1C1F26', price: 0 },
  { id: 'isle-of-man', name: 'Isle of Man Green Metallic', hex: '#163B29', price: 1200 },
  { id: 'frozen-grey', name: 'Frozen Deep Grey Matte', hex: '#4B515C', price: 3600 },
  { id: 'marina-blue', name: 'Marina Bay Blue Metallic', hex: '#0568A6', price: 1200 },
  { id: 'alpine-white', name: 'Alpine White Solid', hex: '#F0F2F5', price: 0 }
];

const WHEELS = [
  { id: '951-black', name: '20"/21" Style 951 M Jet Black', price: 0 },
  { id: '951-bicolor', name: '20"/21" Style 951 M Bicolor Polished', price: 950 }
];

const BRAKES = [
  { id: 'ceramic-gold', name: 'M Carbon Ceramic Brakes (Gold)', price: 8500 },
  { id: 'compound-red', name: 'M High-Performance Compound (Red)', price: 0 }
];

const UPHOLSTERY = [
  { id: 'black-merino', name: 'Black Full Merino Leather', price: 0 },
  { id: 'silverstone', name: 'Silverstone II / Black Bi-Color', price: 1500 },
  { id: 'kyalami', name: 'Kyalami Orange / Black Merino', price: 1500 }
];

const ALL_DEALERS = [
  { name: 'BMW M Certified Center Manhattan', city: 'New York, NY', zip: '10019', dist: '2.4 miles', phone: '+1 (212) 555-0199', status: 'In-Stock M5 Test Cars' },
  { name: 'Beverly Hills BMW M Studio', city: 'Los Angeles, CA', zip: '90210', dist: '5.1 miles', phone: '+1 (310) 555-0142', status: 'VIP Lounge & Track Days' },
  { name: 'BMW of Miami Performance Center', city: 'Miami, FL', zip: '33101', dist: '3.8 miles', phone: '+1 (305) 555-0188', status: 'Immediate Allocation Slots' },
  { name: 'BMW M Experience Center Munich', city: 'Munich, Germany', zip: '80809', dist: 'Headquarters', phone: '+49 89 1250-16000', status: 'Factory Delivery & Proving Ground' }
];

export default function ConfiguratorCTA() {
  const [selectedColor, setSelectedColor] = useState(EXTERIOR_COLORS[0]);
  const [selectedWheel, setSelectedWheel] = useState(WHEELS[0]);
  const [selectedBrake, setSelectedBrake] = useState(BRAKES[0]);
  const [selectedLeather, setSelectedLeather] = useState(UPHOLSTERY[0]);

  // Modals & Drawers state
  const [isTestDriveOpen, setIsTestDriveOpen] = useState(false);
  const [isDealerOpen, setIsDealerOpen] = useState(false);
  const [isFinancingOpen, setIsFinancingOpen] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [dealerSearch, setDealerSearch] = useState('');

  // Financing state
  const basePrice = 119500;
  const totalPrice = basePrice + selectedColor.price + selectedWheel.price + selectedBrake.price + selectedLeather.price;
  const [downPayment, setDownPayment] = useState(25000);
  const [months, setMonths] = useState(36);

  const loanAmount = Math.max(0, totalPrice - downPayment);
  const monthlyEst = Math.round((loanAmount * 1.055) / months);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dealership: 'BMW M Certified Center Manhattan',
    date: '2026-11-15',
    trackMode: false
  });

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setBookingConfirmed(true);
  };

  // Download Spec Sheet function
  const handleDownloadBrochure = () => {
    const content = `=====================================================
BMW M5 SEDAN (G90) — OFFICIAL SPECIFICATION SHEET
"Driving pleasure. To the core."
=====================================================

YOUR CONFIGURED SPECIFICATION:
Base Vehicle: BMW M5 Sedan (G90)
Exterior Color: ${selectedColor.name} (+$${selectedColor.price})
Wheels: ${selectedWheel.name} (+$${selectedWheel.price})
Braking System: ${selectedBrake.name} (+$${selectedBrake.price})
Interior Upholstery: ${selectedLeather.name} (+$${selectedLeather.price})

Total MSRP (Est.): $${totalPrice.toLocaleString()} USD
Est. Monthly Lease: $${monthlyEst.toLocaleString()} / month (36 mo, $${downPayment.toLocaleString()} down)

PERFORMANCE DATA:
- Combined System Output: 535 kW (727 HP)
- Combined Peak Torque: 1,000 Nm
- Acceleration 0-100 km/h: 3.5 Seconds (0-60 mph in 3.4s)
- Top Speed: 305 km/h (M Driver's Package)
- Pure Electric Range: Up to 69 km (WLTP)
- Battery Capacity: 18.6 kWh (Lithium-ion)
- Transmission: 8-Speed M Steptronic with Drivelogic
- All-Wheel Drive: M xDrive with 2WD Drift Mode

SUSTAINABILITY:
- Manufactured at BMW Group Plant Dingolfing with 100% Green Energy
- -32% Cradle-to-Gate CO2e Reduction

For test drive appointments, contact your local BMW M Certified Center.
BMW AG, Munich, Germany.
`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `BMW-M5-G90-Specification.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const filteredDealers = ALL_DEALERS.filter(d => 
    d.name.toLowerCase().includes(dealerSearch.toLowerCase()) ||
    d.city.toLowerCase().includes(dealerSearch.toLowerCase()) ||
    d.zip.includes(dealerSearch)
  );

  return (
    <section id="configurator" className="relative w-full py-24 px-6 bg-[#FFFFFF] border-b border-[#D9D9D9] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D9D9D9] bg-[#F1F4F8] mb-3 shadow-sm">
            <Sliders className="w-3.5 h-3.5 text-[#0568A6]" />
            <span className="font-mono text-xs font-bold text-[#252859] uppercase tracking-wider">Bespoke Specification</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-[#252859] uppercase tracking-tight">
            CONFIGURE <span className="text-[#0568A6]">YOUR BMW M5</span>
          </h2>
          <p className="mt-3 text-[#4B5563] max-w-xl text-sm sm:text-base">
            Tailor the exterior aesthetics, lightweight aerodynamics, and bespoke cockpit materials to your exacting racetrack standards.
          </p>
        </div>

        {/* Interactive Mini Configurator Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left: Live Vehicle Staging & Selected Spec Summary (7 Cols) */}
          <div className="lg:col-span-7 bg-[#F8F9FA] p-8 rounded-3xl border border-[#D9D9D9] shadow-car-card flex flex-col justify-between min-h-[520px]">
            <div>
              <div className="flex justify-between items-center mb-6">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#0568A6] font-bold">
                    SPECIFICATION PREVIEW
                  </span>
                  <h3 className="font-display font-bold text-2xl text-[#252859] mt-0.5">
                    BMW M5 SEDAN (G90)
                  </h3>
                </div>
                <div className="text-right">
                  <div className="font-display font-bold text-3xl text-[#252859]">
                    ${totalPrice.toLocaleString()}
                  </div>
                  <div className="font-mono text-[10px] text-[#6B7280] uppercase font-bold">
                    EST. MSRP INCL. OPTIONS
                  </div>
                </div>
              </div>

              {/* Dynamic Vehicle Visualizer with color aura */}
              <div className="relative w-full h-64 sm:h-76 rounded-2xl bg-white border border-[#D9D9D9] shadow-inner flex items-center justify-center p-4 overflow-hidden group">
                <div
                  className="absolute inset-0 opacity-15 transition-all duration-700 blur-2xl"
                  style={{ backgroundColor: selectedColor.hex }}
                />
                <img
                  src="/assets/bmw-showcase.jpeg"
                  alt="BMW M5 Configuration"
                  className="w-full h-full object-contain drop-shadow-[0_12px_24px_rgba(37,40,89,0.2)] transition-transform duration-500 group-hover:scale-105"
                />

                {/* Color Badge Pill */}
                <div className="absolute top-4 left-4 bg-white/95 px-3 py-1.5 rounded-full border border-[#D9D9D9] shadow-sm flex items-center gap-2">
                  <span className="w-3.5 h-3.5 rounded-full border border-[#D9D9D9]" style={{ backgroundColor: selectedColor.hex }} />
                  <span className="font-mono text-xs font-bold text-[#252859]">{selectedColor.name}</span>
                </div>
              </div>

              {/* Specification Breakdown Summary */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-xs text-[#252859]">
                <div className="p-3 rounded-xl bg-white border border-[#D9D9D9] shadow-sm">
                  <span className="text-[10px] text-[#6B7280] font-bold uppercase block">FINISH</span>
                  <span className="text-[#252859] font-bold">{selectedColor.name}</span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#D9D9D9] shadow-sm">
                  <span className="text-[10px] text-[#6B7280] font-bold uppercase block">WHEELS</span>
                  <span className="text-[#252859] font-bold">{selectedWheel.name}</span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#D9D9D9] shadow-sm">
                  <span className="text-[10px] text-[#6B7280] font-bold uppercase block">BRAKES</span>
                  <span className="text-[#252859] font-bold">{selectedBrake.name}</span>
                </div>
              </div>
            </div>

            {/* Quick Action CTA Row */}
            <div className="mt-8 pt-6 border-t border-[#D9D9D9] flex flex-wrap gap-4 items-center justify-between">
              <div className="font-mono text-xs text-[#4B5563]">
                MONTHLY ESTIMATE: <b className="text-[#252859] text-base font-display font-bold">${monthlyEst.toLocaleString()}/MO</b>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={handleDownloadBrochure}
                  className="text-xs font-mono font-bold text-[#0568A6] hover:underline flex items-center gap-1 cursor-pointer"
                  title="Download configured specification summary"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>DOWNLOAD SPEC SHEET</span>
                </button>
                <button
                  onClick={() => setIsFinancingOpen(true)}
                  className="text-xs font-mono font-bold text-[#D93030] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <CreditCard className="w-3.5 h-3.5" />
                  <span>CALCULATE LEASING</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right: Customization Controls (5 Cols) */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-[#D9D9D9] shadow-car-card space-y-6">
            {/* 1. Exterior Color */}
            <div>
              <label className="font-mono text-xs text-[#4B5563] font-bold uppercase tracking-wider block mb-3">
                1. EXTERIOR FINISH: <b className="text-[#252859]">{selectedColor.name}</b>
              </label>
              <div className="flex flex-wrap gap-3">
                {EXTERIOR_COLORS.map((col) => (
                  <button
                    key={col.id}
                    onClick={() => setSelectedColor(col)}
                    className={`w-10 h-10 rounded-full transition-all cursor-pointer relative ${
                      selectedColor.id === col.id
                        ? 'scale-110 ring-2 ring-[#252859] ring-offset-2 ring-offset-white shadow-md'
                        : 'hover:scale-105 opacity-85 hover:opacity-100'
                    }`}
                    style={{ backgroundColor: col.hex }}
                    title={`${col.name} (+$${col.price})`}
                  >
                    {selectedColor.id === col.id && (
                      <Check className={`w-4 h-4 mx-auto ${col.id === 'alpine-white' ? 'text-[#252859]' : 'text-white'}`} />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Wheels */}
            <div>
              <label className="font-mono text-xs text-[#4B5563] font-bold uppercase tracking-wider block mb-2">
                2. WHEELS:
              </label>
              <div className="space-y-2">
                {WHEELS.map((w) => (
                  <button
                    key={w.id}
                    onClick={() => setSelectedWheel(w)}
                    className={`w-full p-3 rounded-xl text-left font-mono text-xs flex justify-between items-center transition-all border cursor-pointer ${
                      selectedWheel.id === w.id
                        ? 'bg-[#252859] text-white border-[#252859] shadow-sm'
                        : 'bg-[#F8F9FA] text-[#252859] border-[#D9D9D9] hover:border-[#0568A6]'
                    }`}
                  >
                    <span>{w.name}</span>
                    <span className="font-bold">+{w.price === 0 ? 'INCLUDED' : `$${w.price}`}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Brakes */}
            <div>
              <label className="font-mono text-xs text-[#4B5563] font-bold uppercase tracking-wider block mb-2">
                3. BRAKE SYSTEM:
              </label>
              <div className="space-y-2">
                {BRAKES.map((b) => (
                  <button
                    key={b.id}
                    onClick={() => setSelectedBrake(b)}
                    className={`w-full p-3 rounded-xl text-left font-mono text-xs flex justify-between items-center transition-all border cursor-pointer ${
                      selectedBrake.id === b.id
                        ? 'bg-[#252859] text-white border-[#252859] shadow-sm'
                        : 'bg-[#F8F9FA] text-[#252859] border-[#D9D9D9] hover:border-[#0568A6]'
                    }`}
                  >
                    <span>{b.name}</span>
                    <span className="font-bold">+{b.price === 0 ? 'INCLUDED' : `$${b.price}`}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Interior Leather */}
            <div>
              <label className="font-mono text-xs text-[#4B5563] font-bold uppercase tracking-wider block mb-2">
                4. SEAT UPHOLSTERY:
              </label>
              <div className="space-y-2">
                {UPHOLSTERY.map((u) => (
                  <button
                    key={u.id}
                    onClick={() => setSelectedLeather(u)}
                    className={`w-full p-3 rounded-xl text-left font-mono text-xs flex justify-between items-center transition-all border cursor-pointer ${
                      selectedLeather.id === u.id
                        ? 'bg-[#252859] text-white border-[#252859] shadow-sm'
                        : 'bg-[#F8F9FA] text-[#252859] border-[#D9D9D9] hover:border-[#0568A6]'
                    }`}
                  >
                    <span>{u.name}</span>
                    <span className="font-bold">+{u.price === 0 ? 'INCLUDED' : `$${u.price}`}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Primary Action Buttons (Engineered, high-converting) */}
            <div className="pt-4 space-y-3">
              <button
                onClick={() => setIsTestDriveOpen(true)}
                className="btn-m-primary w-full py-4 rounded-2xl text-xs flex items-center justify-center gap-2 cursor-pointer shadow-car-button"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>BOOK M5 TEST DRIVE EXPERIENCE</span>
              </button>

              <button
                onClick={() => setIsDealerOpen(true)}
                className="btn-m-navy w-full py-3.5 rounded-2xl text-xs flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <MapPin className="w-3.5 h-3.5 text-[#BF5B21]" />
                <span>FIND CERTIFIED BMW M DEALERS</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 1. Modal: Test Drive Booking */}
      {isTestDriveOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl bg-white p-6 sm:p-8 rounded-3xl border border-[#D9D9D9] shadow-2xl">
            <button
              onClick={() => { setIsTestDriveOpen(false); setBookingConfirmed(false); }}
              className="absolute top-6 right-6 text-[#6B7280] hover:text-[#252859] p-1 rounded-full hover:bg-slate-100 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {!bookingConfirmed ? (
              <>
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0568A6]/10 border border-[#0568A6]/20 mb-2 font-mono text-[10px] text-[#0568A6] font-bold uppercase">
                    VIP CONCIERGE SCHEDULING
                  </div>
                  <h3 className="font-display font-bold text-2xl text-[#252859] uppercase">
                    SCHEDULE YOUR M5 TEST DRIVE
                  </h3>
                  <p className="text-xs text-[#4B5563] mt-1">
                    Experience the 727 HP hybrid synergy on road or closed track under professional M certified supervision.
                  </p>
                </div>

                <form onSubmit={handleBookingSubmit} className="space-y-4 font-mono text-xs">
                  <div>
                    <label className="text-[#4B5563] font-bold uppercase text-[10px] block mb-1">FULL NAME</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alexander Hamilton"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-3 rounded-xl bg-[#F8F9FA] border border-[#D9D9D9] text-[#252859] focus:border-[#0568A6] outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[#4B5563] font-bold uppercase text-[10px] block mb-1">EMAIL ADDRESS</label>
                      <input
                        type="email"
                        required
                        placeholder="name@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full p-3 rounded-xl bg-[#F8F9FA] border border-[#D9D9D9] text-[#252859] focus:border-[#0568A6] outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[#4B5563] font-bold uppercase text-[10px] block mb-1">PHONE NUMBER</label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full p-3 rounded-xl bg-[#F8F9FA] border border-[#D9D9D9] text-[#252859] focus:border-[#0568A6] outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[#4B5563] font-bold uppercase text-[10px] block mb-1">PREFERRED M CENTER</label>
                    <select
                      value={formData.dealership}
                      onChange={(e) => setFormData({ ...formData, dealership: e.target.value })}
                      className="w-full p-3 rounded-xl bg-[#F8F9FA] border border-[#D9D9D9] text-[#252859] focus:border-[#0568A6] outline-none"
                    >
                      {ALL_DEALERS.map((d, i) => (
                        <option key={i} value={d.name}>
                          {d.name} ({d.city})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-[#4B5563] font-bold uppercase text-[10px] block mb-1">PREFERRED DATE</label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full p-3 rounded-xl bg-[#F8F9FA] border border-[#D9D9D9] text-[#252859] focus:border-[#0568A6] outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-m-primary w-full py-4 mt-4 rounded-2xl text-xs uppercase cursor-pointer"
                  >
                    CONFIRM VIP APPOINTMENT
                  </button>
                </form>
              </>
            ) : (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-400 mx-auto flex items-center justify-center text-emerald-600">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-2xl text-[#252859] uppercase">
                  APPOINTMENT CONFIRMED
                </h3>
                <p className="font-mono text-xs text-[#4B5563] max-w-md mx-auto leading-relaxed">
                  Thank you, <b className="text-[#252859]">{formData.name || 'Driver'}</b>. Your BMW M Concierge at <b className="text-[#252859]">{formData.dealership}</b> has reserved a G90 M5 Sedan for <b className="text-[#252859]">{formData.date}</b>.
                </p>
                <div className="p-4 rounded-2xl bg-[#F1F4F8] border border-[#D9D9D9] font-mono text-xs text-[#4B5563] inline-block">
                  RESERVATION CODE: <b className="text-[#252859]">BMW-M5-G90-{Math.floor(100000 + Math.random() * 900000)}</b>
                </div>
                <div>
                  <button
                    onClick={() => { setIsTestDriveOpen(false); setBookingConfirmed(false); }}
                    className="btn-m-navy px-6 py-2.5 rounded-xl text-xs cursor-pointer mt-4"
                  >
                    CLOSE WINDOW
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 2. Slide-out Drawer: Certified Dealer Locator */}
      {isDealerOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-md h-full bg-white p-6 sm:p-8 flex flex-col justify-between border-l border-[#D9D9D9] shadow-2xl animate-in slide-in-from-right duration-300 overflow-y-auto">
            <div>
              <div className="flex justify-between items-center mb-6">
                <div>
                  <span className="font-mono text-[10px] text-[#D93030] uppercase tracking-widest font-bold">
                    GLOBAL NETWORK
                  </span>
                  <h3 className="font-display font-bold text-xl text-[#252859]">
                    M CERTIFIED CENTERS
                  </h3>
                </div>
                <button
                  onClick={() => setIsDealerOpen(false)}
                  className="text-[#6B7280] hover:text-[#252859] p-1 rounded-full hover:bg-slate-100 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Search input for dealer */}
              <div className="relative mb-5">
                <Search className="w-4 h-4 text-[#6B7280] absolute left-3 top-3.5" />
                <input
                  type="text"
                  placeholder="Filter by city, state, or zip..."
                  value={dealerSearch}
                  onChange={(e) => setDealerSearch(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#F8F9FA] border border-[#D9D9D9] text-[#252859] text-xs font-mono outline-none focus:border-[#0568A6]"
                />
              </div>

              <div className="space-y-4 font-mono text-xs">
                {filteredDealers.map((dealer, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-[#F8F9FA] border border-[#D9D9D9] hover:border-[#0568A6] transition-all">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-bold text-[#252859] text-sm">{dealer.name}</h4>
                      <span className="text-[10px] text-[#0568A6] font-bold">{dealer.dist}</span>
                    </div>
                    <div className="text-[#6B7280] text-xs mb-2">{dealer.city} • {dealer.zip}</div>
                    <div className="text-[11px] text-emerald-600 font-bold flex items-center gap-1.5 mb-3">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>{dealer.status}</span>
                    </div>
                    <div className="pt-2 border-t border-[#D9D9D9] flex justify-between items-center text-[11px]">
                      <a href={`tel:${dealer.phone}`} className="text-[#252859] font-bold hover:text-[#0568A6] flex items-center gap-1">
                        <Phone className="w-3 h-3 text-[#0568A6]" />
                        <span>{dealer.phone}</span>
                      </a>
                      <button
                        onClick={() => {
                          setIsDealerOpen(false);
                          setIsTestDriveOpen(true);
                          setFormData({ ...formData, dealership: dealer.name });
                        }}
                        className="text-[#D93030] hover:underline font-bold cursor-pointer"
                      >
                        SELECT DEALER
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#D9D9D9] text-center font-mono text-[11px] text-[#6B7280]">
              BMW AG OFFICIAL RETAILER NETWORK CONNECTED
            </div>
          </div>
        </div>
      )}

      {/* 3. Modal: Financing & Leasing Calculator */}
      {isFinancingOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white p-6 sm:p-8 rounded-3xl border border-[#D9D9D9] shadow-2xl">
            <button
              onClick={() => setIsFinancingOpen(false)}
              className="absolute top-6 right-6 text-[#6B7280] hover:text-[#252859] p-1 rounded-full hover:bg-slate-100 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <span className="font-mono text-[10px] text-[#0568A6] uppercase tracking-widest font-bold">
                FINANCIAL SERVICES
              </span>
              <h3 className="font-display font-bold text-2xl text-[#252859] uppercase mt-0.5">
                BMW FINANCIAL ESTIMATOR
              </h3>
              <p className="text-xs text-[#4B5563] mt-1">
                Customize lease and retail installment options for your configured BMW M5 Sedan.
              </p>
            </div>

            <div className="space-y-5 font-mono text-xs">
              <div className="p-4 rounded-xl bg-[#F8F9FA] border border-[#D9D9D9] flex justify-between items-center">
                <span className="text-[#4B5563] uppercase font-bold">CONFIGURED VEHICLE TOTAL:</span>
                <span className="font-display font-bold text-[#252859] text-lg">${totalPrice.toLocaleString()}</span>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-[#4B5563] font-bold">DOWN PAYMENT:</span>
                  <span className="text-[#252859] font-bold">${downPayment.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="60000"
                  step="1000"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  className="w-full h-2.5 bg-[#E5E7EB] rounded-lg appearance-none cursor-pointer accent-[#252859]"
                />
              </div>

              <div>
                <label className="text-[#4B5563] font-bold uppercase text-[10px] block mb-2">TERM DURATION</label>
                <div className="grid grid-cols-3 gap-3">
                  {[36, 48, 60].map((t) => (
                    <button
                      key={t}
                      onClick={() => setMonths(t)}
                      className={`py-2 rounded-xl text-xs font-mono font-bold transition-all border cursor-pointer ${
                        months === t
                          ? 'bg-[#252859] text-white border-[#252859]'
                          : 'bg-[#F8F9FA] text-[#4B5563] border-[#D9D9D9] hover:border-[#252859]'
                      }`}
                    >
                      {t} MONTHS
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#F1F4F8] border border-[#D9D9D9] text-center">
                <div className="text-[10px] text-[#6B7280] uppercase tracking-widest font-bold">ESTIMATED MONTHLY PAYMENT</div>
                <div className="font-display font-bold text-3xl text-[#252859] mt-1">
                  ${monthlyEst.toLocaleString()} <span className="text-xs font-mono text-[#0568A6]">/ MONTH*</span>
                </div>
                <div className="text-[9px] text-[#6B7280] mt-2">
                  *Excludes destination charges, taxes, licensing, and dealer fees. Subject to credit approval by BMW Financial Services NA, LLC.
                </div>
              </div>

              <button
                onClick={() => {
                  setIsFinancingOpen(false);
                  setIsTestDriveOpen(true);
                }}
                className="btn-m-primary w-full py-4 rounded-2xl text-xs uppercase cursor-pointer"
              >
                PROCEED WITH THIS ESTIMATE
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
