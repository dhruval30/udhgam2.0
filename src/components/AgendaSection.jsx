import {
    ArrowUpRight,
    Atom,
    Bot,
    Brain,
    Camera,
    Code,
    Cpu,
    Database,
    Gamepad2,
    Ghost,
    Layers,
    Maximize2,
    Mic,
    Music,
    Palette,
    Presentation,
    Puzzle,
    Rocket,
    Scissors,
    ShoppingBag,
    Smile,
    Users,
    X,
    Zap
} from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
  
  const AgendaSection = () => {
    const [activeTab, setActiveTab] = useState("Flagship");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const scrollContainerRef = useRef(null);
    const categoryRefs = useRef({}); 
  
    const categories = ["Flagship", "Technical", "Speakers", "Cultural", "Carnival"];
  
    const events = [
        // --- FLAGSHIP EVENTS ---
        { 
          id: "f1", 
          category: "Flagship", 
          title: "Tensor v2.0", 
          desc: "A 24-hour hackathon focused on solving real problems through code, collaboration, and innovation.", 
          icon: Code, 
          color: "text-purple-400", 
          borderColor: "group-hover:border-purple-500/50", 
          href: "https://unstop.com/hackathons/tensor-v20-24-hour-hackathon-udhgam-20-woxsen-university-hyderabad-1622299"
        },
        { 
          id: "f2", 
          category: "Flagship", 
          title: "AgentX", 
          desc: "An agentic development challenge focused on building autonomous AI systems that can reason and act independently.", 
          icon: Bot, 
          color: "text-cyan-400", 
          borderColor: "group-hover:border-cyan-500/50", 
          href: "https://unstop.com/competitions/agentx-agentic-development-competition-udhgam-20-woxsen-university-hyderabad-1622320" 
        },
        { 
          id: "f3", 
          category: "Flagship", 
          title: "ML Challenge", 
          desc: "A competitive machine learning challenge focused on model performance, optimization, and real-world datasets.", 
          icon: Brain, 
          color: "text-pink-400", 
          borderColor: "group-hover:border-pink-500/50" 
        },
        { 
          id: "f4", 
          category: "Flagship", 
          title: "DataVerse", 
          desc: "A datathon centered on data analysis and visualization, turning insights into impactful stories.", 
          icon: Database, 
          color: "text-blue-400", 
          borderColor: "group-hover:border-blue-500/50", 
          href: "https://unstop.com/hackathons/dataverse-udhgam-20-woxsen-university-hyderabad-1622457" 
        },
      
        // --- TECHNICAL ---
        { 
          id: "t1", 
          category: "Technical", 
          title: "Product Pitch", 
          desc: "A startup-style pitching event where teams present ideas to a panel of industry professionals.", 
          icon: Presentation, 
          color: "text-green-400", 
          borderColor: "group-hover:border-green-500/50" 
        },
        { 
          id: "t2", 
          category: "Technical", 
          title: "Prototype Presentation", 
          desc: "Showcase working prototypes across hardware, software, and integrated systems.", 
          icon: Cpu, 
          color: "text-orange-400", 
          borderColor: "group-hover:border-orange-500/50" 
        },
        { 
          id: "t3", 
          category: "Technical", 
          title: "Poster Presentation", 
          desc: "A platform to present academic and technical research through well-structured visual communication.", 
          icon: Layers, 
          color: "text-yellow-400", 
          borderColor: "group-hover:border-yellow-500/50" 
        },
        { 
          id: "t4", 
          category: "Technical", 
          title: "Tech Debate", 
          desc: "Structured debates on emerging technology topics, judged on clarity, logic, and perspective.", 
          icon: Users, 
          color: "text-red-400", 
          borderColor: "group-hover:border-red-500/50" 
        },
      
        // --- SPEAKERS ---
        { 
          id: "s1", 
          category: "Speakers", 
          title: "WoxTalks", 
          desc: "Short-format talks by industry professionals and innovators sharing real-world insights.", 
          icon: Mic, 
          color: "text-red-500", 
          borderColor: "group-hover:border-red-500/50" 
        },
        { 
          id: "s2", 
          category: "Speakers", 
          title: "Panel Discussions", 
          desc: "Open conversations with leaders from tech and business on trends shaping the future.", 
          icon: Users, 
          color: "text-purple-400", 
          borderColor: "group-hover:border-purple-500/50" 
        },
        { 
          id: "s3", 
          category: "Speakers", 
          title: "Guest Mentorship", 
          desc: "One-on-one mentoring sessions with experienced professionals across domains.", 
          icon: Rocket, 
          color: "text-blue-400", 
          borderColor: "group-hover:border-blue-500/50" 
        },
        { 
          id: "s4", 
          category: "Speakers", 
          title: "Industry Booths", 
          desc: "Company showcases featuring opportunities for internships, jobs, and collaborations.", 
          icon: ShoppingBag, 
          color: "text-emerald-400", 
          borderColor: "group-hover:border-emerald-500/50" 
        },
      
        // --- CULTURAL ---
        { 
          id: "c1", 
          category: "Cultural", 
          title: "Regional Dance", 
          desc: "Live performances celebrating culture, rhythm, and expression.", 
          icon: Music, 
          color: "text-rose-400", 
          borderColor: "group-hover:border-rose-500/50" 
        },
        { 
          id: "c2", 
          category: "Cultural", 
          title: "Faculty Games", 
          desc: "Light-hearted competitive activities featuring faculty members.", 
          icon: Smile, 
          color: "text-yellow-400", 
          borderColor: "group-hover:border-yellow-500/50" 
        },
        { 
          id: "c3", 
          category: "Cultural", 
          title: "Fun Games", 
          desc: "Casual games and activities designed for relaxation and interaction.", 
          icon: Gamepad2, 
          color: "text-green-400", 
          borderColor: "group-hover:border-green-500/50" 
        },
      
        // --- CARNIVAL ---
        { 
          id: "t5", 
          category: "Carnival", 
          title: "Photography Challenge", 
          desc: "Capture the best moments of the fest through your lens.", 
          icon: Camera, 
          color: "text-indigo-400", 
          borderColor: "group-hover:border-indigo-500/50" 
        },
        { 
          id: "x2", 
          category: "Carnival", 
          title: "Glow in the Dark Painting", 
          desc: "A creative space using fluorescent paints under UV lighting.", 
          icon: Palette, 
          color: "text-lime-400", 
          borderColor: "group-hover:border-lime-500/50",
          href: "https://unstop.com/events/glow-in-the-dark-painting-udhgam-20-woxsen-university-hyderabad-1624375"
        },
        { 
          id: "x3", 
          category: "Carnival", 
          title: "VR Experience", 
          desc: "Explore immersive virtual environments through interactive VR setups.", 
          icon: Atom, 
          color: "text-purple-400", 
          borderColor: "group-hover:border-purple-500/50",
          href: "https://unstop.com/o/VP9quXW?lb=7s3YFcgM&utm_medium=Share&utm_source=udhgahar98676&utm_campaign=Events"
        },
        { 
          id: "x4", 
          category: "Carnival", 
          title: "Slime Booth", 
          desc: "A hands-on activity space focused on creative play and experimentation.", 
          icon: Zap, 
          color: "text-pink-400", 
          borderColor: "group-hover:border-pink-500/50" 
        },
        { 
          id: "x5", 
          category: "Carnival", 
          title: "Mystery Room", 
          desc: "An escape-room style challenge based on logic and teamwork.", 
          icon: Puzzle, 
          color: "text-red-400", 
          borderColor: "group-hover:border-red-500/50" 
        },
        { 
          id: "x6", 
          category: "Carnival", 
          title: "Origami + Math Art", 
          desc: "A creative corner combining geometry, paper art, and design.", 
          icon: Layers, 
          color: "text-orange-400", 
          borderColor: "group-hover:border-orange-500/50",
          href: "https://unstop.com/events/origami-math-art-udhgam-20-woxsen-university-hyderabad-1624384"
        },
        { 
          id: "x7", 
          category: "Carnival", 
          title: "Upcycled: Sustainability Fashion Show", 
          desc: "A showcase of fashion made from recycled and repurposed materials.", 
          icon: Scissors, 
          color: "text-teal-400", 
          borderColor: "group-hover:border-teal-500/50",
          href: "https://unstop.com/events/upcycled-sustainability-fashion-show-udhgam-20-woxsen-university-hyderabad-1624359"
        },
        { 
          id: "x8", 
          category: "Carnival", 
          title: "Repurpose: Best Out of Waste", 
          desc: "A creativity challenge focused on building useful items from discarded materials.", 
          icon: Ghost, 
          color: "text-green-500", 
          borderColor: "group-hover:border-green-500/50",
          href: "https://unstop.com/events/repurpose-best-out-of-waste-udhgam-20-woxsen-university-hyderabad-1623084"
        }
      ];         
  
    const eventsByCategory = categories.map(cat => ({
      name: cat,
      items: events.filter(e => e.category === cat)
    }));
  
    const handleTabClick = (cat) => {
      setActiveTab(cat);
      const element = categoryRefs.current[cat];
      if (element && scrollContainerRef.current) {
          // Center the selected category
          const offset = element.offsetLeft - 24; 
          scrollContainerRef.current.scrollTo({ left: offset, behavior: 'smooth' });
      }
    };
  
    const handleScroll = () => {
      if (!scrollContainerRef.current) return;
      
      const container = scrollContainerRef.current;
      const scrollLeft = container.scrollLeft;
      const containerWidth = container.offsetWidth;
      const centerPosition = scrollLeft + (containerWidth / 2);
  
      let currentCategory = activeTab;
  
      for (const cat of categories) {
          const element = categoryRefs.current[cat];
          if (element) {
              const { offsetLeft, offsetWidth } = element;
              if (centerPosition >= offsetLeft && centerPosition <= (offsetLeft + offsetWidth)) {
                  currentCategory = cat;
                  break;
              }
          }
      }
  
      if (currentCategory !== activeTab) {
          setActiveTab(currentCategory);
      }
    };
  
    useEffect(() => {
      if (isModalOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }
    }, [isModalOpen]);
  
    return (
      <section id="agenda" className="relative w-full bg-black text-white py-10 md:py-24 px-0 md:px-12 overflow-hidden">
        
        {/* Background Blurs */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-900/05 blur-[100px] rounded-full pointer-events-none"></div>
  
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            
            {/* LEFT COLUMN: Sticky Header & Info */}
            <div className="lg:col-span-4 flex flex-col gap-8 order-1 lg:sticky lg:top-24 px-6 md:px-0">
              <div>
                  <h2 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.8]">
                      The <br/>
                      <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 via-pink-500 to-orange-500">
                          Tracks
                      </span>
                  </h2>
                  <p className="text-sm md:text-lg text-gray-400 mt-4 md:mt-6 font-medium leading-relaxed">
                     The wait is finally over! We have curated some really cool and challenging contests for you. From tech heavy contests to fun filled activities, there's something for everyone.
                  </p>
              </div>
  

<div className="p-6 rounded-3xl bg-[#111] border border-white/10 relative overflow-hidden group">
  <div className="absolute inset-0 bg-linear-to-br from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

  <div className="relative z-10">
    <a
      href="#register"
      className="inline-block text-lg md:text-xl font-black uppercase mb-2 hover:text-purple-400 transition-colors duration-300"
    >
      Registrations Live!
    </a>

    <p className="text-xs text-gray-400 mb-4">
    </p>
  </div>
</div>
  
              <div className="hidden lg:flex items-center gap-2 text-xs text-gray-500 font-mono opacity-50">
                  <span>// SCROLL RIGHT FOR MORE</span>
                  <div className="w-12 h-px bg-gray-700"></div>
              </div>
            </div>
            
            {/* RIGHT COLUMN: The Reel & Controls */}
            <div className="lg:col-span-8 flex flex-col gap-6 order-2 min-w-0 relative">
              
              {/* Controls: Tabs (Wrapped) + Expand Button */}
              {/* UPDATED: flex-wrap to ensure all tabs are visible on mobile */}
              <div className="px-6 md:px-0 flex items-start justify-between gap-4">
                  <div className="flex flex-1 flex-wrap gap-2">
                      {categories.map((cat) => (
                          <button
                              key={cat}
                              onClick={() => handleTabClick(cat)}
                              className={`whitespace-nowrap cursor-pointer px-4 py-2 md:px-5 md:py-2.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest border transition-all duration-300 ${
                                  activeTab === cat 
                                  ? 'bg-white text-black border-white shadow-lg shadow-white/10' 
                                  : 'bg-black text-gray-500 border-white/10 hover:border-white/30 hover:text-white'
                              }`}
                          >
                              {cat}
                          </button>
                      ))}
                  </div>
                  
                  <button 
                      onClick={() => setIsModalOpen(true)}
                      className="shrink-0 w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300"
                      title="View Full Schedule"
                  >
                      <Maximize2 size={18} />
                  </button>
              </div>
  
              {/* THE REEL: Responsive Horizontal Scroll */}
              <div className="relative group/reel">
                  <div 
                      ref={scrollContainerRef}
                      onScroll={handleScroll}
                      className="
                          flex gap-4 md:gap-8 overflow-x-auto snap-x snap-mandatory 
                          pb-8 pt-2 px-6 md:px-0 no-scrollbar scroll-smooth
                      "
                  >
                      {eventsByCategory.map((categoryGroup) => (
                          <div 
                              key={categoryGroup.name}
                              ref={el => categoryRefs.current[categoryGroup.name] = el}
                              className="flex flex-col gap-4 shrink-0"
                          >
                               <div className="grid grid-rows-1 md:grid-rows-2 grid-flow-col gap-4">
                                  {categoryGroup.items.map((event) => (
                                      <div 
                                          key={event.id}
                                          className={`
                                              w-[85vw] sm:w-[320px] md:w-[320px] h-60 
                                              group relative p-6 rounded-3xl bg-[#111] border border-white/10 ${event.borderColor} 
                                              transition-all duration-300 hover:bg-[#161616] flex flex-col gap-4 
                                              snap-center md:snap-start
                                          `}
                                      >
                                          <div className="flex justify-between items-start">
                                              <div className={`w-10 h-10 rounded-xl bg-black border border-white/10 flex items-center justify-center shrink-0 ${event.color} group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-900/10`}>
                                                  <event.icon size={20} />
                                              </div>
					  {event.href && (
						  <a
						  href={event.href}
						  target="_blank"
						  rel="noopener noreferrer"
						  className="text-white/20 group-hover:text-white transition-colors"
						  aria-label={`Open ${event.title} registration`}
						  >
						  <ArrowUpRight size={18} />
						  </a>
					  )}

                                          </div>
  
                                          <div className="flex-1 flex flex-col justify-between">
                                              <div>
                                                  <span className={`text-[9px] font-bold uppercase tracking-widest ${event.color} opacity-80 mb-2 block`}>
                                                      {event.category}
                                                  </span>
                                                  
                                                  <h3 className="text-lg font-black uppercase text-white tracking-tight mb-2 leading-none">
                                                      {event.title}
                                                  </h3>
                                              </div>
                                              
                                              <p className="text-xs text-gray-400 font-medium leading-relaxed line-clamp-3">
                                                  {event.desc}
                                              </p>
                                          </div>
                                      </div>
                                  ))}
                               </div>
                          </div>
                      ))}
                  </div>
                  
                  {/* Desktop Fade Mask */}
                  <div className="hidden md:block absolute top-0 right-0 h-full w-24 bg-linear-to-l from-black to-transparent pointer-events-none z-10"></div>
              </div>
  
            </div>
          </div>
        </div>
  
        {/* --- MAXIMIZED MODAL --- */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300">
              <div 
                  className="absolute inset-0 bg-black/90 backdrop-blur-xl"
                  onClick={() => setIsModalOpen(false)}
              ></div>
  
              <div className="relative w-full max-w-7xl h-full max-h-full bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden flex flex-col shadow-2xl">
                  
                  <div className="flex items-center justify-between p-6 md:p-8 border-b border-white/10 bg-black/50">
                      <div>
                          <h2 className="text-xl md:text-4xl font-black uppercase tracking-tighter">Full Lineup</h2>
                          <p className="text-xs md:text-sm text-gray-400 mt-1">Registrations Opening Soon!</p>
                      </div>
                      <button 
                          onClick={() => setIsModalOpen(false)}
                          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white hover:text-black flex items-center justify-center transition-all duration-300"
                      >
                          <X size={20} />
                      </button>
                  </div>
  
                  <div className="flex-1 overflow-y-auto p-6 md:p-8">
                      <div className="space-y-16">
                          {eventsByCategory.map((categoryGroup) => (
                              <div key={categoryGroup.name}>
                                  <div className="flex items-center gap-4 mb-8">
                                      <h3 className="text-lg md:text-2xl font-black uppercase tracking-widest text-white/50">{categoryGroup.name}</h3>
                                      <div className="h-px flex-1 bg-white/10"></div>
                                  </div>
                                  
                                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                      {categoryGroup.items.map((event) => (
                                          <div 
                                              key={event.id}
                                              className={`group p-6 rounded-2xl bg-[#111] border border-white/5 hover:border-white/20 transition-all duration-300`}
                                          >
                                              <div className="flex items-start justify-between mb-4">
                                                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${event.color} bg-white/5`}>
                                                      <event.icon size={20} />
                                                  </div>
                                                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-600 border border-white/10 px-2 py-1 rounded-full">
                                                      {event.category}
                                                  </span>
                                              </div>
                                              <h4 className="text-base md:text-xl font-bold text-white mb-2">{event.title}</h4>
                                              <p className="text-xs md:text-sm text-gray-400 leading-relaxed">{event.desc}</p>
                                          </div>
                                      ))}
                                  </div>
                              </div>
                          ))}
                      </div>
                  </div>
  
              </div>
          </div>
        )}
  
      </section>
    );
  };
  
  export default AgendaSection;
