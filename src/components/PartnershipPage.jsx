import {
    ArrowLeft,
    ArrowRight,
    ArrowUpRight,
    Bot,
    Brain,
    CheckCircle2,
    Clock,
    Code,
    Database,
    Download,
    Eye,
    Globe,
    Mail,
    Music,
    Phone,
    Sparkles,
    Users,
    Zap
} from 'lucide-react';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import sponsorshipDeck from '../assets/sponsorship.pdf';
import Footer from './Footer';

const PartnershipPage = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const festTiers = [
    {
      name: "Associate",
      price: "₹1L - ₹1.25L",
      fullPrice: "₹1,00,000 - ₹1,25,000",
      color: "text-gray-400",
      borderColor: "border-white/10",
      bg: "bg-[#0a0a0a]",
      perks: ["Logo on Selected Materials", "Event-Time Mentions", "Digital Acknowledgments"]
    },
    {
      name: "Title Sponsor",
      price: "₹1.5L - ₹2L",
      fullPrice: "₹1,50,000 - ₹2,00,000",
      color: "text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-400",
      borderColor: "border-purple-500/50",
      bg: "bg-[#120f1d]",
      highlight: true,
      perks: ["Exclusive 'Presented By' Rights", "Opening & Closing Keynote", "Dedicated Experience Stall", "Logo on All Assets", "Direct Student Outreach"]
    },
    {
      name: "Co-Sponsor",
      price: "₹1.25L - ₹1.5L",
      fullPrice: "₹1,25,000 - ₹1,50,000",
      color: "text-white",
      borderColor: "border-white/10",
      bg: "bg-[#0a0a0a]",
      perks: ["Strong Co-Branded Visibility", "On-Stage Mentions", "Digital Promotions"]
    }
  ];

  const trackEvents = [
    {
      title: "Tensor v2.0",
      subtitle: "Flagship Hackathon",
      desc: "24-Hour intense coding marathon. Integration with high-performance developers.",
      icon: Code,
      accent: "text-purple-400",
      tiers: [
        { role: "Title", price: "₹1L - ₹1.25L" },
        { role: "Co-Sponsor", price: "₹75k - ₹1L" },
        { role: "Associate", price: "₹50k - ₹75k" }
      ]
    },
    {
      title: "Agent X",
      subtitle: "AI & Automation",
      desc: "Autonomous AI agents & ML systems. Positioning as a leader in emerging tech.",
      icon: Bot,
      accent: "text-cyan-400",
      tiers: [
        { role: "Title", price: "₹75k - ₹1L" },
        { role: "Co-Sponsor", price: "₹50k - ₹75k" },
        { role: "Associate", price: "₹25k - ₹50k" }
      ]
    },
    {
      title: "ML Challenge",
      subtitle: "Data Science",
      desc: "Model optimization and benchmarking. Access to top analytical talent.",
      icon: Brain,
      accent: "text-pink-400",
      tiers: [
        { role: "Title", price: "₹75k - ₹1L" },
        { role: "Co-Sponsor", price: "₹50k - ₹75k" },
        { role: "Associate", price: "₹25k - ₹50k" }
      ]
    },
    {
      title: "DataVerse",
      subtitle: "Datathon",
      desc: "Data storytelling and visualization. Branding across dashboards and insights.",
      icon: Database,
      accent: "text-blue-400",
      tiers: [
        { role: "Title", price: "₹75k - ₹1L" },
        { role: "Co-Sponsor", price: "₹50k - ₹75k" },
        { role: "Associate", price: "₹25k - ₹50k" }
      ]
    },
    {
      title: "Cultural Fest",
      subtitle: "Mass Reach",
      desc: "The social core. Highest footfall (3000+) and campus-wide engagement.",
      icon: Music,
      accent: "text-orange-400",
      tiers: [
        { role: "Title", price: "₹1.5L - ₹2.5L" },
        { role: "Co-Sponsor", price: "₹1L - ₹1.5L" },
        { role: "Associate", price: "₹50k - ₹1L" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500/30 overflow-x-hidden">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-4 flex justify-between items-center bg-black/80 backdrop-blur-md border-b border-white/5">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
              <ArrowLeft size={16} className="text-gray-400 group-hover:text-white transition-colors" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 group-hover:text-white transition-colors">Back</span>
        </Link>
        
        <a 
          href={sponsorshipDeck} 
          download="Udhgam_Sponsorship_Deck.pdf"
          className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-bold text-[10px] uppercase tracking-widest hover:bg-gray-200 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)]"
          >
          <Download size={14} />
          <span>Brochure</span>
        </a>
        <a 
          href={sponsorshipDeck} 
          download="Udhgam_Sponsorship_Deck.pdf"
          className="md:hidden flex items-center justify-center w-8 h-8 rounded-full bg-white text-black"
          >
          <Download size={16} />
        </a>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-28 pb-12 md:pt-48 md:pb-32 px-4 md:px-8 overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-0 right-0 w-[250px] md:w-[800px] h-[250px] md:h-[800px] bg-purple-900/20 blur-[80px] md:blur-[120px] rounded-full pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[150px] md:w-[600px] h-[150px] md:h-[600px] bg-blue-900/10 blur-[60px] md:blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col items-start gap-6 md:gap-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-[9px] md:text-[10px] font-bold uppercase tracking-widest mb-1">
                    <Sparkles size={12} />
                    <span>Partnership Opportunities</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl md:text-9xl font-black uppercase tracking-tighter leading-[0.9] text-white">
                    Build The <br className="md:hidden"/>
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 via-pink-500 to-orange-500">
                        Future.
                    </span>
                </h1>
                
                <div className="flex flex-col md:flex-row md:items-end justify-between w-full gap-8 md:gap-16 border-l-2 border-white/20 pl-4 md:pl-8 mt-2 md:mt-4">
                    <p className="text-sm md:text-xl text-gray-300 font-medium leading-relaxed max-w-2xl">
                        Udhgam 2.0 isn't just a fest; it's a convergence of India's brightest minds. 
                        Partner with us to position your brand at the forefront of innovation.
                    </p>
                    
                    <div className="flex flex-col gap-2 shrink-0">
                        <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Contact for Queries</div>
                        <a href="mailto:udhgam@woxsen.edu.in" className="text-base md:text-2xl font-bold text-white hover:text-purple-400 transition-colors flex items-center gap-2">
                            udhgam@woxsen.edu.in <ArrowUpRight size={18} className="text-gray-600"/>
                        </a>
                    </div>
                </div>
            </div>

            {/* LEGACY STRIP: NO ZOOM, JUST GLOW */}
            <div className="mt-16 md:mt-24">
              <div className="flex items-center gap-4 mb-6 md:mb-8 opacity-60">
                  <div className="h-px bg-white/20 grow"></div>
                  <span className="text-white/60 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
                      Legacy // Udhgam 1.0
                  </span>
                  <div className="h-px bg-white/20 grow"></div>
              </div>

              <div className="relative bg-[#0a0a0a] border border-white/10 rounded-2xl md:rounded-4xl overflow-hidden shadow-2xl shadow-black/50">
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-purple-500 via-pink-500 to-orange-500 opacity-60"></div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/10">
                      {[
                          { label: "Impressions", val: "1.5L+", icon: Eye },
                          { label: "Total Footfall", val: "3,000+", icon: Users },
                          { label: "Universities", val: "50+", icon: Globe },
                          { label: "Engagement", val: "3 Days", icon: Clock }
                      ].map((stat, i) => (
                          <div key={i} className="group relative p-6 md:p-10 flex flex-col items-center justify-center text-center hover:bg-white/3 transition-colors cursor-default">
                              <div className="mb-3 md:mb-4 p-2 md:p-3 rounded-full bg-white/5 text-gray-500 group-hover:text-purple-400 group-hover:bg-purple-500/10 transition-colors duration-300">
                                  <stat.icon size={18} className="md:w-5 md:h-5" />
                              </div>
                              <div className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-linear-to-b from-white to-gray-500 group-hover:from-purple-400 group-hover:to-pink-500 mb-2 tracking-tight transition-all duration-500">
                                  {stat.val}
                              </div>
                              <div className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 group-hover:text-white transition-colors">
                                  {stat.label}
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
            </div>

        </div>
      </section>

      {/* Main Sponsorship Tiers */}
      <section className="py-16 md:py-32 px-4 md:px-8 bg-[#050505] relative">
        <div className="max-w-7xl mx-auto">
            <div className="mb-12 md:mb-24 text-center md:text-left">
                <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter mb-3 md:mb-4">Fest Ownership</h2>
                <p className="text-gray-400 max-w-xl mx-auto md:mx-0 text-sm md:text-lg">Dominate the campus landscape with highest-tier branding.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
                {festTiers.map((tier, i) => (
                    <div 
                        key={i} 
                        className={`
                            relative flex flex-col p-6 md:p-8 rounded-3xl md:rounded-4xl border transition-all duration-300 group
                            ${tier.bg} ${tier.borderColor} 
                            ${tier.highlight ? 'md:-mt-12 md:mb-12 shadow-[0_0_50px_rgba(168,85,247,0.1)] z-20' : 'hover:border-white/20 hover:bg-[#111] z-10'}
                        `}
                    >
                        {tier.highlight && (
                            <div className="absolute -top-3 md:-top-4 inset-x-0 flex justify-center">
                                <div className="bg-linear-to-r from-purple-600 to-pink-600 text-white text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-lg">
                                    Most Popular
                                </div>
                            </div>
                        )}
                        
                        <div className="mb-6 md:mb-8">
                            <h3 className={`text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-2 md:mb-4 ${tier.color}`}>{tier.name}</h3>
                            <div className="flex items-baseline gap-1">
                                <span className="text-2xl md:text-4xl font-black text-white tracking-tight">{tier.fullPrice.split(' - ')[0]}</span>
                            </div>
                            <div className="text-[10px] md:text-xs text-gray-500 mt-1">{tier.fullPrice}</div>
                        </div>

                        <div className="w-full h-px bg-white/5 mb-6 md:mb-8 group-hover:bg-white/10 transition-colors"></div>

                        <ul className="space-y-4 md:space-y-5 mb-8 md:mb-10 grow">
                            {tier.perks.map((perk, idx) => (
                                <li key={idx} className="flex gap-3 md:gap-4 items-start text-xs md:text-sm text-gray-300 group-hover:text-white transition-colors">
                                    <CheckCircle2 size={16} className={`shrink-0 mt-0.5 ${tier.highlight ? 'text-purple-500' : 'text-gray-600 group-hover:text-gray-400'}`} />
                                    <span className="leading-snug">{perk}</span>
                                </li>
                            ))}
                        </ul>

                        <a href="mailto:udhgam@woxsen.edu.in" className={`
                            w-full py-3 md:py-4 rounded-xl text-[10px] md:text-xs font-black uppercase tracking-[0.2em] transition-all text-center flex items-center justify-center gap-2 group/btn
                            ${tier.highlight ? 'bg-white text-black hover:bg-gray-200' : 'bg-white/5 text-white hover:bg-white/10 border border-white/5'}
                        `}>
                            Inquire Now <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform"/>
                        </a>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Strategic Tracks */}
      <section className="py-16 md:py-32 px-4 md:px-8 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6">
                <div>
                    <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter mb-3 md:mb-4">Strategic Tracks</h2>
                    <p className="text-gray-400 max-w-md text-sm md:text-base">Target specific demographics by sponsoring individual high-performance events.</p>
                </div>
                <a href="mailto:udhgam@woxsen.edu.in" className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-purple-400 hover:text-white transition-colors">
                    Request Custom Plan <ArrowRight size={16}/>
                </a>
            </div>

            <div className="grid grid-cols-1 gap-4">
                {trackEvents.map((track, i) => (
                    <div 
                        key={i} 
                        className="group relative bg-[#0a0a0a] border border-white/5 rounded-2xl md:rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500"
                    >
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        <div className="flex flex-col lg:flex-row items-stretch">
                            {/* Left Side: Info */}
                            <div className="p-6 md:p-10 lg:w-[40%] flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/5 bg-linear-to-br from-white/2 to-transparent">
                                <div className={`flex items-center gap-3 mb-4 md:mb-6 ${track.accent}`}>
                                    <div className="p-2 md:p-3 rounded-lg md:rounded-xl bg-white/5 border border-white/5 group-hover:bg-white/10 transition-colors">
                                        <track.icon size={20} className="md:w-6 md:h-6" />
                                    </div>
                                    <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest border border-white/10 px-2 py-1 rounded text-white/60">{track.subtitle}</span>
                                </div>
                                <h3 className="text-xl md:text-3xl font-black uppercase text-white mb-2 md:mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                                    {track.title}
                                </h3>
                                <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-medium">{track.desc}</p>
                            </div>

                            {/* Right Side: Tiers Grid */}
                            <div className="lg:w-[60%] grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/5">
                                {track.tiers.map((tier, idx) => (
                                    <div 
                                        key={idx} 
                                        className="p-4 md:p-8 flex sm:flex-col items-center justify-between sm:justify-center hover:bg-white/2 transition-colors"
                                    >
                                        <span className={`text-[9px] md:text-[10px] font-bold uppercase tracking-widest sm:mb-3 ${idx === 0 ? track.accent : 'text-gray-500'}`}>
                                            {tier.role}
                                        </span>
                                        <span className="text-base sm:text-xl md:text-2xl font-bold text-white tabular-nums">
                                            {tier.price}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-32 px-6 md:px-12 border-t border-white/10 bg-[#050505] text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-600/10 blur-[80px] md:blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
            <Zap size={32} className="text-yellow-400 mx-auto mb-6 md:mb-8 animate-bounce opacity-80 md:w-12 md:h-12" />
            <h2 className="text-4xl md:text-8xl font-black uppercase tracking-tighter mb-6 md:mb-8 leading-[0.9]">
                Let's Make <br/> <span className="text-purple-500">History.</span>
            </h2>
            <p className="text-gray-400 mb-8 md:mb-12 text-sm md:text-xl font-medium max-w-2xl mx-auto">
                Secure your spot at Woxsen's largest technical festival before the slots run out.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
                <a 
                    href="mailto:udhgam@woxsen.edu.in"
                    className="flex items-center justify-center gap-3 px-8 py-4 md:py-5 bg-white text-black rounded-xl font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors shadow-xl shadow-white/10 text-xs md:text-sm"
                >
                    <Mail size={16} className="md:w-[18px] md:h-[18px]"/>
                    Email Us
                </a>
                <a 
                    href="tel:9867172110"
                    className="flex items-center justify-center gap-3 px-8 py-4 md:py-5 bg-[#111] border border-white/10 text-white rounded-xl font-bold uppercase tracking-widest hover:bg-[#222] hover:border-white/20 transition-all text-xs md:text-sm"
                >
                    <Phone size={16} className="md:w-[18px] md:h-[18px]"/>
                    +91 98671 72110
                </a>
            </div>
        </div>
      </section>

      <Footer />

    </div>
  );
};

export default PartnershipPage;