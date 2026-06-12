import React, { useState, useEffect } from 'react';
import { 
  Building2, CheckCircle2, MapPin, Phone, Mail, Award, 
  TrendingUp, Settings, Users, ShieldCheck, Factory, 
  HardHat, FileText, ChevronDown, MessageCircle, Menu, 
  X, ArrowRight, Download, Calculator, BarChart3, Globe,
  Briefcase, Star, Percent, Zap, Check, Sparkles, HelpCircle
} from 'lucide-react';

// --- DATA CONSTANTS ---

const BRAND_COLORS = {
  whiteBg: '#FFFFFF',
  panelLight: '#F8FAFC',
  accentRed: '#E31837',
  neonRedGlow: 'rgba(227, 24, 55, 0.05)',
  neutralDark: '#0F172A',
  neutralMuted: '#64748B'
};

const BENEFITS = [
  { icon: TrendingUp, title: "Attractive Dealer Margins", desc: "Lucrative, highly competitive margin tiers engineered to maximize your return on working capital investment." },
  { icon: Award, title: "Strong Brand Demand", desc: "Leverage a brand name trusted implicitly by structural engineers, premier builders, and private contractors." },
  { icon: Users, title: "Marketing & Promotional Support", desc: "Data-driven local lead routing, localized branding material, and hyper-targeted advertising campaigns." },
  { icon: MapPin, title: "Territory-Based Business Opportunities", desc: "Work with complete peace of mind under locked exclusive regional parameters with absolute zero internal competition." },
  { icon: BarChart3, title: "Faster Stock Movement", desc: "Surging infrastructural growth across South India ensures dynamic stock rotation cycles." },
  { icon: Factory, title: "Consistent Supply Chain Support", desc: "Unmatched logistics and continuous supply flows backed by our high-output continuous rolling mills." },
  { icon: Briefcase, title: "Business Growth Assistance", desc: "Flexible credit system frameworks, credit protection, and expansion toolkits to scale your business footprint." },
  { icon: Settings, title: "Dealer Training & Product Knowledge Support", desc: "Comprehensive technical orientation, structural certification modules, and sales strategy workshops." },
  { icon: Sparkles, title: "Long-Term Business Partnership Benefits", desc: "Build a generational family-owned asset aligned with Karnataka's leading manufacturing powerhouse." }
];

const TERRITORY_REGIONS = {
  "Karnataka": [
    { city: "Bengaluru Region", status: "Limited Slots Available" },
    { city: "Mysuru Division", status: "Active Search" },
    { city: "Hubli-Dharwad Sector", status: "Available" },
    { city: "Mangaluru Coastal Zone", status: "Exclusive Slot Open" }
  ],
  "Tamil Nadu": [
    { city: "Chennai Metro", status: "Closed (Waitlist Open)" },
    { city: "Coimbatore Industrial", status: "Limited Available" },
    { city: "Madurai Hub", status: "Active Search" },
    { city: "Salem Region", status: "Available" }
  ],
  "Andhra Pradesh": [
    { city: "Visakhapatnam Hub", status: "Exclusive Slot Open" },
    { city: "Vijayawada Sector", status: "Active Search" },
    { city: "Guntur Region", status: "Available" }
  ],
  "Telangana": [
    { city: "Hyderabad North Corridor", status: "Closed (Waitlist Open)" },
    { city: "Warangal Core Sector", status: "Available" },
    { city: "Nalgonda Cluster", status: "Active Search" }
  ]
};

const ELIGIBLE_PROFILES = [
  { segment: "Enterprise Steel Dealers", qualification: "Active distribution portfolio of > 100 Tons monthly" },
  { segment: "TMT & Cement Networks", qualification: "Established B2B network with builders & contractors" },
  { segment: "Premium Hardware Houses", qualification: "Vast warehouse staging capacity and logistics setup" },
  { segment: "Infrastructure Suppliers", qualification: "Licensed vendor capability for state and municipal projects" }
];

const ONBOARDING_TIMELINE = [
  { step: "01", title: "Prospectus Intake", duration: "Day 1", desc: "Submit verified business credentials via the secure B2B gateway." },
  { step: "02", title: "Enterprise Verification", duration: "Day 2-3", desc: "Financial check and corporate background review by our treasury team." },
  { step: "03", title: "Territory Allocation", duration: "Day 4", desc: "Direct mapping of exclusive territory boundaries and pricing structure." },
  { step: "04", title: "Sovereign Agreement", duration: "Day 7", desc: "Legal execution of the regional distribution contract." },
  { step: "05", title: "Logistics Setup & Launch", duration: "Day 10", desc: "Dispatch of foundational inventory, marketing kits, and sales training." }
];

const FAQS = [
  { q: "How are regional distribution rights protected by Indus TMT?", a: "Every distribution contract carries an explicit territorial monopoly clause. We legally lock designated zip codes, routing 100% of local builder and retail demand queries directly to your firm." },
  { q: "What is the capital staging and credit structure?", a: "Initial working capital requirements depend strictly on the allocated region and tier capacity. Our corporate division offers custom banking alignments, trade credit models, and volume incentives for verified high-velocity accounts." },
  { q: "How long does the qualification process take to complete?", a: "We expedite partnership approvals. Once you submit complete financial records and storage parameters, verified onboarding ranges between 7 to 10 banking days." },
  { q: "What localized growth marketing support is deployed?", a: "Indus TMT deploys targeted geofenced corporate programmatic ads across builders and engineering circles in your region. Leads generated are integrated directly to your assigned commercial team." }
];

// --- ULTRA-PREMIUM LIGHT MINIMALIST FORM ---
const LuxuryLeadForm = ({ buttonText = "Apply for Dealership", id = "lead-form" }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-12 text-center flex flex-col items-center justify-center h-full min-h-[450px] bg-white border border-slate-200 shadow-2xl rounded-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E31837]/5 to-transparent pointer-events-none"></div>
        <div className="w-20 h-20 bg-[#E31837]/10 border border-[#E31837]/30 rounded-full flex items-center justify-center mb-6">
          <Sparkles className="w-10 h-10 text-[#E31837]" />
        </div>
        <h3 className="text-3xl font-black text-slate-900 tracking-tight mb-4">Application Logged</h3>
        <p className="text-slate-500 text-base leading-relaxed max-w-sm">
          Your credentials have bypassed the queue. A Senior Commercial Director will initiate contact with your office within 12 hours.
        </p>
      </div>
    );
  }

  return (
    <form id={id} onSubmit={handleSubmit} className="p-8 md:p-10 bg-white border border-slate-200/80 shadow-[0_30px_70px_rgba(0,0,0,0.06)] rounded-xl relative">
      <div className="absolute -top-px left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-[#E31837] to-transparent"></div>
      
      <div className="mb-8 text-center md:text-left">
        <div className="inline-flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-[#E31837] animate-ping"></span>
          <span className="text-[#E31837] text-xs font-bold tracking-[0.2em] uppercase">Executive Registry</span>
        </div>
        <h3 className="text-3xl font-black tracking-tight text-slate-900">Apply for Dealership</h3>
        <p className="text-slate-500 text-sm mt-2">Submit preliminary commercial records for prioritized evaluation.</p>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <input required type="text" id={`${id}-name`} className="peer w-full bg-slate-50 border border-slate-200 focus:border-[#E31837] focus:bg-white p-3 text-sm text-slate-900 outline-none transition-colors rounded" placeholder="Full Name" />
            <label htmlFor={`${id}-name`} className="absolute left-3 -top-2.5 bg-white px-1 text-[11px] font-bold text-slate-500 peer-focus:text-[#E31837] transition-all">Full Name *</label>
          </div>
          <div className="relative">
            <input required type="tel" id={`${id}-phone`} className="peer w-full bg-slate-50 border border-slate-200 focus:border-[#E31837] focus:bg-white p-3 text-sm text-slate-900 outline-none transition-colors rounded" placeholder="Phone" />
            <label htmlFor={`${id}-phone`} className="absolute left-3 -top-2.5 bg-white px-1 text-[11px] font-bold text-slate-500 peer-focus:text-[#E31837] transition-all">Mobile *</label>
          </div>
        </div>

        <div className="relative">
          <input required type="text" id={`${id}-company`} className="peer w-full bg-slate-50 border border-slate-200 focus:border-[#E31837] focus:bg-white p-3 text-sm text-slate-900 outline-none transition-colors rounded" placeholder="Company Name" />
          <label htmlFor={`${id}-company`} className="absolute left-3 -top-2.5 bg-white px-1 text-[11px] font-bold text-slate-500 peer-focus:text-[#E31837] transition-all">Registered Firm Name *</label>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <select required defaultValue="" className="peer w-full bg-slate-50 border border-slate-200 focus:border-[#E31837] focus:bg-white p-3 text-sm text-slate-900 outline-none transition-colors rounded appearance-none">
              <option value="" disabled hidden>Choose Territory State *</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Telangana">Telangana</option>
            </select>
            <label className="absolute left-3 -top-2.5 bg-white px-1 text-[11px] font-bold text-slate-500">Territory State *</label>
          </div>
          <div className="relative">
            <input required type="text" id={`${id}-city`} className="peer w-full bg-slate-50 border border-slate-200 focus:border-[#E31837] focus:bg-white p-3 text-sm text-slate-900 outline-none transition-colors rounded" placeholder="City" />
            <label htmlFor={`${id}-city`} className="absolute left-3 -top-2.5 bg-white px-1 text-[11px] font-bold text-slate-500 peer-focus:text-[#E31837] transition-all">City *</label>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <select required defaultValue="" className="peer w-full bg-slate-50 border border-slate-200 focus:border-[#E31837] focus:bg-white p-3 text-sm text-slate-900 outline-none transition-colors rounded appearance-none">
              <option value="" disabled hidden>Business Segment *</option>
              <option value="Steel Dealer">Steel Dealer / Retailer</option>
              <option value="TMT / Building">Building Material Dealer</option>
              <option value="Regional Stockist">Regional Stockist</option>
            </select>
            <label className="absolute left-3 -top-2.5 bg-white px-1 text-[11px] font-bold text-slate-500">Firm Profile *</label>
          </div>

          <div className="relative">
            <input required type="text" id={`${id}-gst`} className="peer w-full bg-slate-50 border border-slate-200 focus:border-[#E31837] focus:bg-white p-3 text-sm text-slate-900 outline-none transition-colors rounded" placeholder="GST Number" />
            <label htmlFor={`${id}-gst`} className="absolute left-3 -top-2.5 bg-white px-1 text-[11px] font-bold text-slate-500 peer-focus:text-[#E31837] transition-all">Registered GST Number *</label>
          </div>
        </div>
        
        <div className="relative">
           <select required defaultValue="" className="peer w-full bg-slate-50 border border-slate-200 focus:border-[#E31837] focus:bg-white p-3 text-sm text-slate-900 outline-none transition-colors rounded appearance-none">
            <option value="" disabled hidden>Monthly Capacity *</option>
            <option value="0-50">0 - 50 Tons</option>
            <option value="50-100">50 - 100 Tons</option>
            <option value="100-500">100 - 500 Tons</option>
            <option value="500+">500+ Tons</option>
          </select>
          <label className="absolute left-3 -top-2.5 bg-white px-1 text-[11px] font-bold text-slate-500">Estimated Monthly Vol. *</label>
        </div>
      </div>

      <button type="submit" className="w-full mt-8 bg-[#E31837] hover:bg-[#c6112d] active:scale-[0.98] text-white font-extrabold py-4 px-6 transition-all duration-300 flex items-center justify-between group rounded-lg shadow-lg shadow-red-500/10">
        <span className="tracking-widest uppercase text-xs">Verify & Register Prospectus</span>
        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
      </button>

      <div className="mt-6 flex items-center justify-between text-xs text-slate-400">
        <span className="flex items-center"><ShieldCheck className="w-4 h-4 mr-1.5 text-emerald-600" /> Secure Corporate Link</span>
        <span>ISO 27001 Compliant</span>
      </div>
    </form>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState(0); 
  const [selectedTerritoryState, setSelectedTerritoryState] = useState("Karnataka");
  
  // Exit intent popup state
  const [showExitModal, setShowExitModal] = useState(false);
  const [exitFormSubmitted, setExitFormSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    const handleMouseLeave = (e) => {
      if (e.clientY < 5) {
        const shown = sessionStorage.getItem('exitModalShown');
        if (!shown) {
          setShowExitModal(true);
          sessionStorage.setItem('exitModalShown', 'true');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault(); // Prevents URL jumping which breaks in some previews
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false); // Close mobile menu if open
  };

  const scrollToForm = () => {
    document.getElementById('application-form-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-sans text-slate-700 bg-white selection:bg-[#E31837] selection:text-white antialiased overflow-x-hidden">
      
      {/* FAQ Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": FAQS.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": { "@type": "Answer", "text": faq.a }
        }))
      })}} />

      {/* --- FLOATING HEADER --- */}
      <header className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md py-4 border-b border-slate-200' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
          
          {/* Logo Aligned Left */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#E31837] flex items-center justify-center rounded-md shadow-sm">
              <Building2 className="text-white w-5 h-5" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-xl font-black tracking-[0.2em] uppercase text-slate-900 leading-none">INDUS <span className="text-[#E31837]">TMT</span></span>
              <span className="block text-[8px] tracking-[0.4em] font-bold text-slate-400 mt-1 leading-none">INDUSTRIAL GLOBAL</span>
            </div>
          </div>

          {/* Desktop Navigation Aligned Right */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#benefits" onClick={(e) => scrollToSection(e, 'benefits')} className="text-xs font-black uppercase tracking-widest text-slate-700 hover:text-slate-900 transition-colors cursor-pointer">Why Distributors Choose Us</a>
            <a href="#eligible" onClick={(e) => scrollToSection(e, 'eligible')} className="text-xs font-black uppercase tracking-widest text-slate-700 hover:text-slate-900 transition-colors cursor-pointer">Who Can Apply?</a>
            <a href="#territories" onClick={(e) => scrollToSection(e, 'territories')} className="text-xs font-black uppercase tracking-widest text-slate-700 hover:text-[#E31837] transition-colors flex items-center gap-2 cursor-pointer">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span> Open Territories
            </a>
            <a href="#faq" onClick={(e) => scrollToSection(e, 'faq')} className="text-xs font-black uppercase tracking-widest text-slate-700 hover:text-slate-900 transition-colors cursor-pointer">FAQS</a>
            <button onClick={scrollToForm} className="bg-[#E31837] hover:bg-red-700 text-white text-xs font-black uppercase tracking-widest px-6 py-2.5 transition-all duration-300 rounded shadow-md ml-2 cursor-pointer">
              Request Prospectus
            </button>
          </nav>

          {/* Mobile Navigation Toggle */}
          <button className="lg:hidden text-slate-900 hover:text-[#E31837] transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Mobile Navigation Panel */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-slate-200 p-6 flex flex-col gap-6 shadow-2xl animate-in slide-in-from-top duration-300">
             <a href="#benefits" onClick={(e) => scrollToSection(e, 'benefits')} className="text-slate-800 text-xs font-bold uppercase tracking-widest cursor-pointer">Why Distributors Choose Us</a>
             <a href="#eligible" onClick={(e) => scrollToSection(e, 'eligible')} className="text-slate-800 text-xs font-bold uppercase tracking-widest cursor-pointer">Who Can Apply?</a>
             <a href="#territories" onClick={(e) => scrollToSection(e, 'territories')} className="text-[#E31837] text-xs font-bold uppercase tracking-widest flex items-center gap-2 cursor-pointer">
               <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span> Open Territories
             </a>
             <a href="#faq" onClick={(e) => scrollToSection(e, 'faq')} className="text-slate-800 text-xs font-bold uppercase tracking-widest cursor-pointer">FAQS</a>
             <button onClick={() => { setIsMenuOpen(false); scrollToForm(); }} className="bg-[#E31837] text-white text-xs font-bold uppercase tracking-widest px-6 py-4 mt-4 w-full rounded cursor-pointer">
               Request Prospectus
             </button>
          </div>
        )}
      </header>

      {/* --- PREMIUM LIGHT-HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center bg-white pt-24 overflow-hidden">
        {/* Abstract Fine Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#E31837]/3 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-slate-100 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 pt-16 pb-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <div className="flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 bg-slate-50 backdrop-blur-md mb-8 self-start">
                <Sparkles className="w-4 h-4 text-[#E31837]" />
                <span className="text-slate-600 text-[10px] font-bold tracking-[0.25em] uppercase">Private Staging Platform 2026</span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black text-slate-900 leading-[1.05] tracking-tight mb-8">
                Become an Authorized <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E31837] to-red-800">Indus TMT Dealer</span>
              </h1>
              
              <p className="text-slate-500 text-lg md:text-xl max-w-xl leading-relaxed mb-10 font-light">
                Become the Authorized Indus TMT Distribution Partner. Tap into South India's high-velocity infrastructure boom with verified, premium-grade steel and protected territorial allocations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 mb-8">
                <button onClick={scrollToForm} className="bg-[#E31837] hover:bg-slate-900 text-white font-black uppercase tracking-widest text-xs px-8 py-4 transition-all duration-300 flex items-center justify-center group rounded shadow-lg shadow-red-500/10">
                  Secure Partnership Slot <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </button>
                <a href="tel:+919876543210" className="bg-[#0F172A] hover:bg-[#E31837] text-white font-black uppercase tracking-widest text-xs px-8 py-4 transition-all duration-300 flex items-center justify-center rounded shadow-lg">
                  <Phone className="w-4 h-4 mr-2" /> Talk to Our Executive
                </a>
              </div>
            </div>

            <div className="w-full" id="application-form-section">
              <LuxuryLeadForm buttonText="Acquire Partnership Package" id="hero-register" />
            </div>

          </div>
        </div>
      </section>

      {/* --- WHY DISTRIBUTORS PREFER INDUS TMT --- */}
      <section id="benefits" className="py-28 bg-[#FAFAFA] border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E31837]"></span>
              <span className="text-[#E31837] text-xs font-bold tracking-[0.2em] uppercase">Institutional Advantage</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-6">Why Leading Distributors Partner with Indus TMT</h2>
            <p className="text-slate-500 text-lg font-light leading-relaxed">
              We design structured B2B merchant operations that prioritize inventory velocities, structural consistency, and territory exclusivity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BENEFITS.map((benefit, idx) => {
              const IconComp = benefit.icon;
              // Center the 10th card gracefully
              const isLastCardCentered = idx === 9 ? "lg:col-start-2" : "";
              return (
                <div key={idx} className={`bg-white border border-slate-200/80 hover:border-slate-300 hover:shadow-lg p-8 transition-all duration-300 rounded-xl relative group ${isLastCardCentered}`}>
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#E31837] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="w-12 h-12 rounded-lg bg-[#E31837]/5 flex items-center justify-center mb-6 border border-slate-200/60 group-hover:bg-[#E31837] group-hover:text-white transition-colors">
                    <IconComp className="w-5 h-5 text-slate-800 group-hover:text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 tracking-tight">{benefit.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-light">{benefit.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* --- GEOGRAPHIC TERRITORY STAGED BOARD --- */}
      <section id="territories" className="py-28 bg-white border-t border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <div className="flex flex-col">
              <div className="inline-flex items-center gap-2 mb-4 self-start">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                <span className="text-emerald-600 text-xs font-bold tracking-[0.2em] uppercase">Live Allocation Map</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-6">Open Territories for Dealership</h2>
              <p className="text-slate-500 text-base font-light leading-relaxed mb-8">
                Explore real-time sector status across expansion markets in Southern India. We authorize exclusive monopolies per zip code cluster. Toggle states below to evaluate potential regional openings.
              </p>

              <div className="flex flex-col gap-3">
                {Object.keys(TERRITORY_REGIONS).map((state, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setSelectedTerritoryState(state)}
                    className={`w-full py-4 px-6 text-left text-xs font-black uppercase tracking-widest border transition-all flex items-center justify-between rounded ${selectedTerritoryState === state ? 'bg-[#E31837] border-[#E31837] text-white shadow-md shadow-red-500/10' : 'border-slate-200 bg-white text-slate-600 hover:text-slate-900 hover:border-slate-300'}`}
                  >
                    <span>{state} Sector</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ))}
              </div>
            </div>

            <div className="w-full">
              <div className="bg-white border border-slate-200 rounded-xl p-8 md:p-10 shadow-xl relative">
                <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-150">
                  <span className="text-xs uppercase font-bold tracking-widest text-slate-400">Regional Cluster Registry</span>
                  <span className="text-xs font-mono text-[#E31837] uppercase">{selectedTerritoryState} Sector</span>
                </div>

                <div className="space-y-4">
                  {TERRITORY_REGIONS[selectedTerritoryState].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center p-4 bg-slate-50 border border-slate-200/60 rounded">
                      <div className="flex items-center gap-3">
                        <MapPin className="w-4 h-4 text-slate-400" />
                        <span className="font-bold text-slate-900 text-sm">{item.city}</span>
                      </div>
                      <span className={`text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-sm ${item.status.includes('Closed') ? 'bg-red-50 text-red-600 border border-red-200' : item.status.includes('Limited') ? 'bg-amber-50 text-amber-600 border border-amber-200' : 'bg-emerald-50 text-emerald-600 border border-emerald-200'}`}>
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200 text-center">
                  <button onClick={scrollToForm} className="w-full bg-slate-900 hover:bg-[#E31837] text-white font-black uppercase tracking-widest text-xs py-3.5 px-6 transition-all rounded shadow">
                    Check Availability On {selectedTerritoryState} 
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* --- ENTERPRISE HERITAGE --- */}
      <section id="about" className="py-28 border-t border-slate-100 bg-[#FAFAFA] relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <div className="relative w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-[#E31837]/5 to-transparent pointer-events-none rounded-2xl z-10"></div>
              <img src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80&w=1200" alt="Indus TMT Automated Rolling Mill" className="rounded-2xl shadow-xl border border-slate-200 grayscale hover:grayscale-0 transition-all duration-700 w-full h-[450px] object-cover" />
              <div className="absolute -bottom-6 -right-6 bg-white border border-slate-200 p-6 rounded-lg shadow-xl hidden sm:block">
                <span className="text-xs uppercase tracking-widest text-slate-400 block mb-1">Production Limit</span>
                <span className="text-2xl font-black text-slate-900">400,000+ MT / PA</span>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="inline-flex items-center gap-2 mb-4 self-start">
                <div className="w-6 h-[1px] bg-[#E31837]"></div>
                <span className="text-[#E31837] text-xs font-bold tracking-[0.2em] uppercase">Architectural Legacy</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-6">Manufacturing Masterclass</h2>
              <p className="text-slate-500 text-lg leading-relaxed font-light mb-8">
                For over three decades, Indus TMT has set the gold standard in premium structural engineering. Our state-of-the-art mills utilize premier thermomechanical treating technology to build ductile steel cores that safeguard massive commercial developments, bridges, and highways.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <div className="p-5 bg-white border border-slate-200/60 rounded-lg shadow-sm">
                  <h4 className="font-bold text-slate-900 mb-2">Automated Calibration</h4>
                  <p className="text-xs text-slate-500">Every millimeter of output is laserscanned and verified for consistent rib profiles.</p>
                </div>
                <div className="p-5 bg-white border border-slate-200/60 rounded-lg shadow-sm">
                  <h4 className="font-bold text-slate-900 mb-2">Bespoke Metallurgy</h4>
                  <p className="text-xs text-slate-500">Enhanced high yield ductility prevents structural snap fatigue during earth tremors.</p>
                </div>
              </div>

              <button className="flex items-center text-slate-900 font-bold tracking-widest text-xs uppercase hover:text-[#E31837] transition-colors group self-start">
                <Download className="w-4 h-4 mr-2" /> Download Corporate Profile Document <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* --- WHO CAN APPLY SECTOR --- */}
      <section id="eligible" className="py-28 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Left Column */}
            <div className="flex flex-col">
              <span className="text-[#E31837] text-xs font-bold tracking-[0.2em] uppercase mb-4 block self-start">Merchant Verification Parameters</span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-6">Who Can Apply?</h2>
              <p className="text-slate-500 text-base font-light leading-relaxed mb-10">
                We select and approve high-growth entities with verified capital lines and substantial storage facilities.
              </p>

              <div className="space-y-5">
                {ELIGIBLE_PROFILES.map((item, idx) => (
                  <div key={idx} className="p-6 md:p-8 bg-slate-50/50 border border-slate-200 rounded-xl hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-slate-900 text-lg mb-2">{item.segment}</h4>
                    <p className="text-sm text-slate-500 font-light">{item.qualification}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column with alignment offset */}
            <div className="w-full lg:pt-[216px]">
              <div className="bg-slate-50/30 border border-slate-200 p-8 md:p-10 rounded-2xl shadow-sm">
                <span className="bg-[#E31837] text-white text-[11px] font-bold tracking-widest uppercase px-2 py-1 inline-block mb-8 rounded-sm">Staging Threshold Questionnaire</span>
                
                <div className="space-y-8">
                  <div className="flex">
                    <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center shrink-0 mr-5">
                      <Check className="w-6 h-6 text-[#E31837]" strokeWidth={2.5} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-base mb-1">Corporate Staging Setup</h4>
                      <p className="text-sm text-slate-500 font-light leading-relaxed">Company registration must carry a valid GST/Company Tax filing number with clean auditing records.</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center shrink-0 mr-5">
                      <Check className="w-6 h-6 text-[#E31837]" strokeWidth={2.5} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-base mb-1">Stockyard Layouts</h4>
                      <p className="text-sm text-slate-500 font-light leading-relaxed">Adequate, dry-covered staging warehouse setup capable of securing heavy truck delivery offloads.</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center shrink-0 mr-5">
                      <Check className="w-6 h-6 text-[#E31837]" strokeWidth={2.5} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-base mb-1">Working Capital Soundness</h4>
                      <p className="text-sm text-slate-500 font-light leading-relaxed">Audited capital solvency parameters to support continuous product rotation pipelines.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* --- TIMELINE METRIC FLOW --- */}
      <section className="py-28 bg-[#FAFAFA] border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[#E31837] text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Onboarding Path</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-6">Operational Launch Sequencing</h2>
            <p className="text-slate-500 text-lg font-light leading-relaxed">
              We expedite dealer licensing. Transition from registration to commercial logistics launch in 5 transparent operational phases.
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-[50px] left-10 right-10 h-[1px] bg-slate-200 z-0"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
              {ONBOARDING_TIMELINE.map((item, idx) => (
                <div key={idx} className="bg-white border border-slate-200 p-6 rounded-lg hover:border-slate-300 transition-all shadow-sm">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-3xl font-black text-[#E31837]">{item.step}</span>
                    <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold bg-slate-50 px-3 py-1 border border-slate-200 rounded-sm">{item.duration}</span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-base mb-2 tracking-tight">{item.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="inline-block bg-white border border-slate-200 px-8 py-5 rounded-xl max-w-2xl shadow-sm">
              <p className="text-sm font-medium text-slate-600">
                “Our merchant commitment isn't just basic material supply. We design demand-generation protocols to drive sales volume directly for your warehouse.”
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* --- TRUST STATEMENT --- */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 mb-4 justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E31837]"></span>
            <span className="text-[#E31837] text-xs font-bold tracking-[0.2em] uppercase">Trust Statement</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 mb-12 max-w-4xl mx-auto">
            Built on Trust. Driven by Performance. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E31837] to-red-800">Focused on Dealer Success.</span>
          </h2>

          {/* Certifications Highlight */}
          <div className="pt-12 border-t border-slate-100">
             <span className="text-xs uppercase font-bold tracking-widest text-slate-400 block mb-8">Globally Recognized Certifications</span>
             <div className="flex flex-wrap justify-center gap-6">
               <div className="px-6 py-3 bg-white border border-slate-200 rounded-lg text-slate-700 text-sm tracking-widest uppercase font-black shadow-sm flex items-center gap-2">
                 <Award className="w-5 h-5 text-[#E31837]"/> ISO 9001:2015
               </div>
               <div className="px-6 py-3 bg-white border border-slate-200 rounded-lg text-slate-700 text-sm tracking-widest uppercase font-black shadow-sm flex items-center gap-2">
                 <ShieldCheck className="w-5 h-5 text-[#E31837]"/> BIS Standard IS 1786
               </div>
               <div className="px-6 py-3 bg-white border border-slate-200 rounded-lg text-slate-700 text-sm tracking-widest uppercase font-black shadow-sm flex items-center gap-2">
                 <Zap className="w-5 h-5 text-[#E31837]"/> Fe-550D High-Ductility
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- PRESETS & ACCORDION FAQS --- */}
      <section id="faq" className="py-28 bg-[#FAFAFA] border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          
          <div className="text-center mb-20">
            <span className="text-[#E31837] text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Institutional FAQ</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">Dealership Protocols</h2>
          </div>

          <div className="border-t border-slate-200 space-y-2">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="border-b border-slate-100">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full py-7 flex justify-between items-center text-left hover:text-[#E31837] transition-colors group"
                >
                  <span className="text-lg md:text-xl font-bold tracking-tight text-slate-800 group-hover:text-[#E31837] transition-colors pr-6">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-500 ${openFaq === idx ? 'rotate-180 text-[#E31837]' : 'text-slate-400'}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === idx ? 'max-h-64 pb-7 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-slate-500 leading-relaxed font-light text-base">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- THE APEX CALL TO ACTION --- */}
      <section className="py-28 bg-white relative overflow-hidden border-t border-slate-200">
        <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#E31837] to-transparent"></div>
        <div className="absolute inset-0 bg-red-500/[0.01] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="bg-white border border-slate-200 rounded-2xl p-8 md:p-14 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center shadow-2xl">
            <div className="lg:w-1/2 flex flex-col">
              <span className="text-[#E31837] text-xs font-bold tracking-[0.25em] uppercase mb-4 block self-start">Corporate Alliances</span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight mb-6">
                Acquire Exclusive Territorial Rights
              </h2>
              <p className="text-slate-500 text-base font-light leading-relaxed mb-8">
                Submit verified organizational parameters and corporate credentials to request the localized market distribution prospectus.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center text-sm text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-[#E31837] mr-3" /> Dedicated Corporate Account Manager
                </div>
                <div className="flex items-center text-sm text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-[#E31837] mr-3" /> Advanced Trade Credit Structures Available
                </div>
                <div className="flex items-center text-sm text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-[#E31837] mr-3" /> Localized Builder Routing Campaigns Activated
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <LuxuryLeadForm buttonText="Initiate Registration" id="bottom-prospectus" />
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-50 pt-24 pb-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
            
            <div className="md:col-span-7 lg:col-span-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-[#E31837] flex items-center justify-center rounded-sm">
                  <Building2 className="text-white w-4 h-4" />
                </div>
                <span className="text-slate-900 text-xl font-black tracking-[0.2em] uppercase">INDUS <span className="text-[#E31837]">TMT</span></span>
              </div>
              <p className="text-slate-500 font-light text-sm leading-relaxed max-w-sm mb-8">
                Pioneering regional structural reinforcement structures since 1996. We fabricate the high ductility steel that anchors commercial futures.
              </p>
              <div className="flex gap-4">
                 <div className="w-10 h-10 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:border-slate-400 transition-all cursor-pointer rounded-sm bg-white">In</div>
                 <div className="w-10 h-10 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:border-slate-400 transition-all cursor-pointer rounded-sm bg-white">X</div>
              </div>
            </div>
            
            <div className="md:col-span-5 lg:col-span-4">
              <h4 className="text-slate-800 text-xs font-bold tracking-[0.2em] uppercase mb-8">Corporate Operations</h4>
              <ul className="space-y-4 text-xs font-bold tracking-widest uppercase text-slate-500">
                <li>Industrial Estate Cluster</li>
                <li>Bangalore, Karnataka</li>
                <li>India - 560001</li>
                <li className="pt-4 text-slate-900 font-black tracking-normal lowercase">global@industmt.com</li>
                <li className="text-slate-900 font-black tracking-normal lowercase">+91 98765 43210</li>
              </ul>
            </div>

          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-200 text-[9px] font-bold tracking-[0.3em] uppercase text-slate-400">
            <p>&copy; {new Date().getFullYear()} INDUS TMT INDUSTRIES LIMITED.</p>
            <div className="flex gap-8 mt-4 md:mt-0">
              <a href="#" className="hover:text-slate-700 transition-colors">Privacy Charter</a>
              <a href="#" className="hover:text-slate-700 transition-colors">Terms of Operations</a>
            </div>
          </div>
        </div>
      </footer>

      {/* --- FLOATING ACTIONS --- */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
        <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="w-12 h-12 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110">
          <MessageCircle className="w-6 h-6" />
        </a>
      </div>

      {/* --- EXIT INTENT POPUP --- */}
      {showExitModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-md p-4 animate-in fade-in duration-300">
          <div className="bg-white border border-slate-200 p-8 max-w-lg w-full rounded-2xl relative shadow-2xl">
            <button 
              onClick={() => setShowExitModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            {!exitFormSubmitted ? (
              <div>
                <span className="text-[#E31837] text-xs font-bold tracking-widest uppercase block mb-2">Priority Call Reservation</span>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-4">Request a Rapid Callback</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  Not ready to submit a full prospectus? Leave your contact details below to secure a brief callback window with our regional expansion director.
                </p>
                <form onSubmit={(e) => { e.preventDefault(); setExitFormSubmitted(true); }} className="space-y-4">
                  <input required type="text" placeholder="Your Name" className="w-full bg-slate-50 border border-slate-200 p-3 text-sm text-slate-900 outline-none rounded focus:border-[#E31837] focus:bg-white" />
                  <input required type="tel" placeholder="Mobile Contact Number" className="w-full bg-slate-50 border border-slate-200 p-3 text-sm text-slate-900 outline-none rounded focus:border-[#E31837] focus:bg-white" />
                  <button type="submit" className="w-full bg-[#E31837] hover:bg-red-700 text-white font-black uppercase tracking-widest text-xs py-3.5 px-4 transition-colors rounded shadow-md">
                    Lock-In Callback Window
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-6">
                <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto mb-4 animate-bounce" />
                <h4 className="text-xl font-bold text-slate-900 mb-2">Callback Secured</h4>
                <p className="text-slate-500 text-sm">We will contact you within the next operational dispatch cycle.</p>
                <button onClick={() => setShowExitModal(false)} className="mt-6 text-xs text-[#E31837] uppercase tracking-widest font-bold">Close Window</button>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}