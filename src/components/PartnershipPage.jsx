import {
    ArrowLeft,
    ArrowRight,
    Bot,
    Brain,
    CheckCircle2,
    Code,
    Database,
    FileText,
    Mail,
    Music,
    Phone,
    Sparkles
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
        bg: "bg-[#111]",
        perks: ["Logo on Selected Materials", "Event-Time Mentions", "Digital Acknowledgments"]
      },
      {
        name: "Title Sponsor",
        price: "₹1.5L - ₹2L",
        fullPrice: "₹1,50,000 - ₹2,00,000",
        color: "text-purple-400",
        borderColor: "border-purple-500/50",
        bg: "bg-[#151515]",
        highlight: true,
        perks: ["Exclusive 'Presented By' Rights", "Opening & Closing Keynote", "Dedicated Experience Stall", "Logo on All Assets", "Direct Student Outreach"]
      },
      {
        name: "Co-Sponsor",
        price: "₹1.25L - ₹1.5L",
        fullPrice: "₹1,25,000 - ₹1,50,000",
        color: "text-white",
        borderColor: "border-white/10",
        bg: "bg-[#111]",
        perks: ["Strong Co-Branded Visibility", "On-Stage Mentions", "Campus Display Space", "Digital Promotions"]
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
      <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500/30">
        <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-4 md:py-6 flex justify-between items-center bg-black/80 backdrop-blur-xl border-b border-white/5">
          <Link to="/" className="flex items-center gap-2 group">
            <ArrowLeft size={16} className="text-gray-400 group-hover:text-white transition-colors" />
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-gray-400 group-hover:text-white transition-colors">Return</span>
          </Link>
          <div className="flex items-center gap-4">
              <span className="hidden md:inline-block text-[10px] font-bold uppercase tracking-widest text-gray-600">
                  Sponsorship Details
              </span>
              <a 
                href={sponsorshipDeck} 
                download="Udhgam_Sponsorship_Deck.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-[10px] md:text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 group cursor-pointer"
                >
                <FileText size={14} />
                Download Brochure
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform"/>
                </a>
          </div>
        </nav>
  
        <section className="pt-32 md:pt-40 pb-16 md:pb-20 px-6 md:px-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] md:w-[800px] h-[400px] md:h-[600px] bg-purple-900/10 blur-[80px] md:blur-[120px] rounded-full pointer-events-none"></div>
          
          <div className="max-w-[1400px] mx-auto relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-end gap-8 md:gap-12">
                  <div>
                      <div className="flex items-center gap-3 mb-6">
                          <Sparkles size={14} className="text-purple-500" />
                          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-purple-400">Strategic Partnership</span>
                      </div>
                      <h1 className="text-5xl md:text-9xl font-black uppercase tracking-tighter leading-[0.9] text-white">
                          Udhgam <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 via-pink-500 to-orange-500">2.0</span>
                      </h1>
                  </div>
                  <div className="md:max-w-md mb-2 flex flex-col gap-6 items-start md:items-end text-left md:text-right">
                      <p className="text-sm md:text-lg text-gray-400 font-medium leading-relaxed max-w-xs md:max-w-none">
                          A convergence of engineers, designers, and future leaders. 
                          Targeted engagement, high-impact visibility, and direct access to top talent.
                      </p>
                      <a 
                        download
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-[10px] md:text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 group cursor-pointer"
                      >
                        <FileText size={14} />
                        Download Brochure
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform"/>
                      </a>
                  </div>
              </div>
  
              <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 mt-16 md:mt-20 border border-white/10 rounded-2xl overflow-hidden">
                  {[
                      { label: "Udhgam 1.0 Impressions", val: "1.5L+" },
                      { label: "Previous Footfall", val: "3,000+" },
                      { label: "Demographic", val: "Tech & Gen-Z" },
                      { label: "Engagement", val: "3 Days" }
                  ].map((stat, i) => (
                      <div key={i} className="bg-black p-6 md:p-8 text-center hover:bg-[#0a0a0a] transition-colors">
                          <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.val}</div>
                          <div className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-gray-600">{stat.label}</div>
                      </div>
                  ))}
              </div>
          </div>
        </section>
  
        <section className="py-16 md:py-24 px-6 md:px-12 border-t border-white/5 bg-[#050505]">
          <div className="max-w-[1400px] mx-auto">
              <div className="mb-12 md:mb-16">
                  <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">Fest Ownership</h2>
                  <p className="text-sm md:text-base text-gray-500">Highest brand recall across the entire university ecosystem.</p>
              </div>
  
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {festTiers.map((tier, i) => (
                      <div 
                          key={i} 
                          className={`
                              relative flex flex-col justify-between p-6 md:p-8 rounded-3xl border transition-all duration-300
                              ${tier.bg} ${tier.borderColor} ${tier.highlight ? 'shadow-2xl shadow-purple-900/20 z-10 md:scale-[1.02]' : 'hover:border-white/30'}
                          `}
                      >
                          {tier.highlight && (
                              <div className="absolute top-0 right-0 bg-purple-600 text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-bl-xl rounded-tr-2xl">
                                  Highest Perks
                              </div>
                          )}
                          
                          <div>
                              <div className={`text-[10px] font-bold uppercase tracking-widest mb-4 ${tier.color}`}>{tier.name}</div>
                              <div className="text-2xl md:text-3xl font-bold text-white mb-8">{tier.fullPrice}</div>
                              <div className="w-full h-px bg-white/5 mb-8"></div>
                              <ul className="space-y-4">
                                  {tier.perks.map((perk, idx) => (
                                      <li key={idx} className="flex gap-3 text-xs md:text-sm text-gray-400">
                                          <CheckCircle2 size={16} className={`shrink-0 ${tier.highlight ? 'text-purple-500' : 'text-gray-600'}`} />
                                          <span className={tier.highlight ? 'text-gray-200' : ''}>{perk}</span>
                                      </li>
                                  ))}
                              </ul>
                          </div>
  
                          <a href="mailto:udhgam@woxsen.edu.in" className={`
                              w-full mt-12 py-4 rounded-xl text-[10px] md:text-xs font-black uppercase tracking-widest transition-all text-center block
                              ${tier.highlight ? 'bg-white text-black hover:bg-gray-200' : 'bg-white/5 text-white hover:bg-white/10'}
                          `}>
                              Select Tier
                          </a>
                      </div>
                  ))}
              </div>
          </div>
        </section>
  
        <section className="py-16 md:py-24 px-6 md:px-12 border-t border-white/5 bg-black">
          <div className="max-w-[1400px] mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6">
                  <div>
                      <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">Strategic Tracks</h2>
                      <p className="text-sm md:text-base text-gray-500">Target specific demographics: Developers, AI Enthusiasts, or Data Engineers.</p>
                  </div>
                  <div className="hidden md:block">
                      <a href="mailto:udhgam@woxsen.edu.in" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-purple-400 hover:text-white transition-colors">
                          Request Custom Plan <ArrowRight size={16}/>
                      </a>
                  </div>
              </div>
  
              <div className="space-y-4">
                  {trackEvents.map((track, i) => (
                      <div 
                          key={i} 
                          className="group relative bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-500"
                      >
                          <div className="absolute top-0 left-0 w-1 h-full bg-linear-to-b from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                          
                          <div className="flex flex-col lg:flex-row">
                              <div className="p-6 md:p-8 lg:w-[40%] flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/5">
                                  <div className={`flex items-center gap-3 mb-4 ${track.accent}`}>
                                      <track.icon size={24} />
                                      <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest border border-white/10 px-2 py-1 rounded text-white/50">{track.subtitle}</span>
                                  </div>
                                  <h3 className="text-xl md:text-2xl font-black uppercase text-white mb-2">{track.title}</h3>
                                  <p className="text-xs md:text-sm text-gray-500 leading-relaxed">{track.desc}</p>
                              </div>
  
                              <div className="lg:w-[60%] grid grid-cols-1 md:grid-cols-3">
                                  {track.tiers.map((tier, idx) => (
                                      <div 
                                          key={idx} 
                                          className={`
                                              p-5 md:p-6 flex flex-row md:flex-col justify-between md:justify-center items-center md:items-start
                                              ${idx !== 2 ? 'border-b md:border-b-0 md:border-r border-white/5' : ''}
                                          `}
                                      >
                                          <span className={`text-[9px] md:text-[10px] font-bold uppercase tracking-widest mb-0 md:mb-2 ${idx === 0 ? track.accent : 'text-gray-600'}`}>
                                              {tier.role}
                                          </span>
                                          <span className="text-sm md:text-lg font-bold text-white">
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
  
        <section className="py-24 px-6 md:px-12 border-t border-white/10 bg-[#050505] text-center">
          <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-tight">
                  Let's build <br/> <span className="text-purple-500">The Future</span>
              </h2>
              <p className="text-gray-400 mb-12 text-sm md:text-lg">
                  Secure your spot at Woxsen's largest technical festival.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <a 
                      href="mailto:udhgam@woxsen.edu.in"
                      className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-black rounded-xl font-bold uppercase tracking-widest hover:scale-105 transition-transform"
                  >
                      <Mail size={18} />
                      Email
                  </a>
                  <a 
                      href="tel:9867172110"
                      className="flex items-center justify-center gap-3 px-8 py-4 bg-[#111] border border-white/10 text-white rounded-xl font-bold uppercase tracking-widest hover:bg-[#222] transition-colors"
                  >
                      <Phone size={18} />
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