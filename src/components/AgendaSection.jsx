import {
    ArrowUpRight,
    Atom,
    Bot,
    Brain,
    Camera,
    Code,
    Cpu,
    Database,
    FlaskConical,
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
      { id: "f1", category: "Flagship", title: "Tensor v2.0", desc: "The main event. 24-hour hackathon. You, your team, and a problem statement. No sleep, just shipping code.", icon: Code, color: "text-purple-400", borderColor: "group-hover:border-purple-500/50" },
      { id: "f2", category: "Flagship", title: "AgentX", desc: "AI Agents are taking over. Build autonomous systems that can think, act, and solve problems on their own.", icon: Bot, color: "text-cyan-400", borderColor: "group-hover:border-cyan-500/50" },
      { id: "f3", category: "Flagship", title: "ML Challenge", desc: "Pure data science. Train your models, improve your accuracy, and beat the benchmark.", icon: Brain, color: "text-pink-400", borderColor: "group-hover:border-pink-500/50" },
      { id: "f4", category: "Flagship", title: "DataVerse", desc: "A datathon for the visualization wizards. Turn boring datasets into compelling stories.", icon: Database, color: "text-blue-400", borderColor: "group-hover:border-blue-500/50" },
  
      // --- TECHNICAL ---
      { id: "t1", category: "Technical", title: "Product Pitch", desc: "Shark Tank style pitching. Sell your idea to investors who won't hold back.", icon: Presentation, color: "text-green-400", borderColor: "group-hover:border-green-500/50" },
      { id: "t2", category: "Technical", title: "Prototype Presentation", desc: "Don't just talk about it, show it working. Hardware, software, or barely holding together.", icon: Cpu, color: "text-orange-400", borderColor: "group-hover:border-orange-500/50" },
      { id: "t3", category: "Technical", title: "Poster Presentation", desc: "Academic rigor meets visual storytelling. Defend your research.", icon: Layers, color: "text-yellow-400", borderColor: "group-hover:border-yellow-500/50" },
      { id: "t4", category: "Technical", title: "Tech Debate", desc: "Fight with logic. Controversial tech topics, two sides, and a moderator who loves chaos.", icon: Users, color: "text-red-400", borderColor: "group-hover:border-red-500/50" },
    //   { id: "t6", category: "Technical", title: "Event Coverage", desc: "Videography and reporting. Document the history we are making.", icon: Video, color: "text-zinc-400", borderColor: "group-hover:border-zinc-500/50" },
  
      // --- SPEAKERS ---
      { id: "s1", category: "Speakers", title: "TEDx Talks", desc: "Ideas worth spreading. Short, powerful, and actually interesting.", icon: Mic, color: "text-red-500", borderColor: "group-hover:border-red-500/50" },
      { id: "s2", category: "Speakers", title: "Panel Discussions", desc: "Unscripted conversations with industry leaders. No corporate fluff.", icon: Users, color: "text-purple-400", borderColor: "group-hover:border-purple-500/50" },
      { id: "s3", category: "Speakers", title: "Guest Mentorship", desc: "1:1 sessions with builders. Come prepared with questions.", icon: Rocket, color: "text-blue-400", borderColor: "group-hover:border-blue-500/50" },
      { id: "s4", category: "Speakers", title: "Industry Booths", desc: "Jobs, internships, and free swag. Network like your career depends on it.", icon: ShoppingBag, color: "text-emerald-400", borderColor: "group-hover:border-emerald-500/50" },
  
      // --- CULTURAL ---
      { id: "c1", category: "Cultural", title: "Regional Dance", desc: "High energy, local beats. A performance that wakes you up.", icon: Music, color: "text-rose-400", borderColor: "group-hover:border-rose-500/50" },
      { id: "c2", category: "Cultural", title: "Faculty Games", desc: "See your professors in a way you definitely won't see in class.", icon: Smile, color: "text-yellow-400", borderColor: "group-hover:border-yellow-500/50" },
      { id: "c3", category: "Cultural", title: "Fun Games", desc: "When your code breaks, come here to blow off steam.", icon: Gamepad2, color: "text-green-400", borderColor: "group-hover:border-green-500/50" },
      { id: "c4", category: "Cultural", title: "Memory Lane", desc: "A nostalgic trip through the history of Udhgam.", icon: Ghost, color: "text-gray-400", borderColor: "group-hover:border-gray-500/50" },
  
      // --- CARNIVAL ---
      { id: "t5", category: "Carnival", title: "Photography Challenge", desc: "Capture the madness. Best shots of the fest get featured.", icon: Camera, color: "text-indigo-400", borderColor: "group-hover:border-indigo-500/50" },
      { id: "x1", category: "Carnival", title: "Nitrogen Ice Cream", desc: "Chemistry you can eat. Flash-frozen right in front of you.", icon: FlaskConical, color: "text-cyan-300", borderColor: "group-hover:border-cyan-500/50" },
      { id: "x2", category: "Carnival", title: "Glow Painting", desc: "Dark room, neon paints. Create art that literally shines.", icon: Palette, color: "text-lime-400", borderColor: "group-hover:border-lime-500/50" },
      { id: "x3", category: "Carnival", title: "VR Experience", desc: "Reality is boring. Put on the headset and go somewhere else.", icon: Atom, color: "text-purple-400", borderColor: "group-hover:border-purple-500/50" },
      { id: "x4", category: "Carnival", title: "Slime Booth", desc: "Sticky, messy, and oddly satisfying.", icon: Zap, color: "text-pink-400", borderColor: "group-hover:border-pink-500/50" },
      { id: "x5", category: "Carnival", title: "Mystery Room", desc: "Locked in. Puzzles everywhere. You have to logic your way out.", icon: Puzzle, color: "text-red-400", borderColor: "group-hover:border-red-500/50" },
      { id: "x6", category: "Carnival", title: "Origami + Math", desc: "Fold complex structures and look smart doing it.", icon: Layers, color: "text-orange-400", borderColor: "group-hover:border-orange-500/50" },
      { id: "x7", category: "Carnival", title: "DIY Workshop", desc: "Badge making, keychain crafting. Take something home.", icon: Scissors, color: "text-teal-400", borderColor: "group-hover:border-teal-500/50" },
      { id: "x8", category: "Carnival", title: "Best Out of Waste", desc: "Trash to treasure. Creativity test using recycled materials.", icon: Ghost, color: "text-green-500", borderColor: "group-hover:border-green-500/50" }
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
      <section id="agenda" className="relative w-full bg-black text-white py-20 md:py-24 px-0 md:px-12 overflow-hidden">
        
        {/* Background Blurs */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-900/05 blur-[100px] rounded-full pointer-events-none"></div>
  
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            
            {/* LEFT COLUMN: Sticky Header & Info */}
            <div className="lg:col-span-4 flex flex-col gap-8 order-1 lg:sticky lg:top-24 px-6 md:px-0">
              <div>
                  <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.8]">
                      The <br/>
                      <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 via-pink-500 to-orange-500">
                          Tracks
                      </span>
                  </h2>
                  <p className="text-lg text-gray-400 mt-6 font-medium leading-relaxed">
                     The wait is finally over! We have curated some really cool and challenging contests for you. From tech heavy contests to fun filled activities, there's something for everyone.
                  </p>
              </div>
  
              <div className="p-6 rounded-3xl bg-[#111] border border-white/10 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-linear-to-br from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                      <h4 className="text-xl font-black uppercase mb-2">Registrations Opening Soon</h4>
                      <p className="text-xs text-gray-400 mb-4">
                      </p>
                      <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-purple-400">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                          Stay tuned!
                      </div>
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
                                              w-[85vw] sm:w-[320px] md:w-[320px] h-[240px] 
                                              group relative p-6 rounded-3xl bg-[#111] border border-white/10 ${event.borderColor} 
                                              transition-all duration-300 hover:bg-[#161616] flex flex-col gap-4 
                                              snap-center md:snap-start
                                          `}
                                      >
                                          <div className="flex justify-between items-start">
                                              <div className={`w-10 h-10 rounded-xl bg-black border border-white/10 flex items-center justify-center shrink-0 ${event.color} group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-900/10`}>
                                                  <event.icon size={20} />
                                              </div>
                                              <ArrowUpRight className="text-white/20 group-hover:text-white transition-colors" size={18} />
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
                          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter">Full Lineup</h2>
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
                                      <h3 className="text-xl md:text-2xl font-black uppercase tracking-widest text-white/50">{categoryGroup.name}</h3>
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
                                              <h4 className="text-lg md:text-xl font-bold text-white mb-2">{event.title}</h4>
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