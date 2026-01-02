import { ArrowLeft, ArrowUpRight, BadgeCheck, Eye, Globe, Sparkles, Users } from 'lucide-react';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const stats = [
  { label: 'Impressions', value: '1.5L+', icon: Eye, color: 'text-pink-500' },
  { label: 'Pan-India Reg.', value: '650+', icon: Globe, color: 'text-purple-500' }, 
  { label: 'Footfall', value: '3K+', icon: Users, color: 'text-orange-500' },
];

const galleryItems = [
  { src: '/past/everyonePhoto.png', alt: 'The Whole Squad', span: 'md:col-span-4 md:row-span-2', title: 'The Collective', subtitle: 'United by code.' },
  { src: '/past/udhgam-admin.jpeg', alt: 'Admin Team', span: 'md:col-span-1 md:row-span-2', title: 'Execution', subtitle: 'Behind the scenes.' },
  { src: '/past/inaugrationCrowd.png', alt: 'Inauguration Crowd', span: 'md:col-span-2 md:row-span-2', title: 'Full House', subtitle: 'The energy was electric.' },
  { src: '/past/inaugrationDean.png', alt: 'Dean Speaking', span: 'md:col-span-1 md:row-span-1', title: 'Vision', subtitle: 'Setting the tone.' },
  { src: '/past/judges.png', alt: 'Judges', span: 'md:col-span-1 md:row-span-1', title: 'Evaluation', subtitle: 'Expert eyes.' },
  { src: '/past/groupPhoto.png', alt: 'Core Team Group', span: 'md:col-span-2 md:row-span-1', title: 'The Team', subtitle: 'Making it happen.' },
  { src: '/past/discussion.png', alt: 'Panel Discussion', span: 'md:col-span-1 md:row-span-1', title: 'Dialogue', subtitle: 'Real conversations.' },
  { src: '/past/classroom.jpeg', alt: 'Classroom Vibe', span: 'md:col-span-1 md:row-span-1', title: 'Focus', subtitle: 'Locked in.' },
  { src: '/past/groupProfsStudents.png', alt: 'Professors and Students', span: 'md:col-span-2 md:row-span-1', title: 'Mentorship', subtitle: 'Bridging the gap.' },
  { src: '/past/professors.png', alt: 'Professors', span: 'md:col-span-1 md:row-span-1', title: 'Guidance', subtitle: 'Leading the way.' },
  { src: '/past/classroom2.jpeg', alt: 'Workshop Action', span: 'md:col-span-1 md:row-span-1', title: 'Build', subtitle: 'Hands-on learning.' },
  { src: '/past/inaugration.jpeg', alt: 'Inauguration Lamp', span: 'md:col-span-2 md:row-span-1', title: 'Tradition', subtitle: 'New beginnings.' },
  { src: '/past/inaugration1.jpeg', alt: 'Inauguration Stage', span: 'md:col-span-2 md:row-span-1', title: 'Launch', subtitle: 'Lift off.' },
];

const PastEditionPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden">
      <nav className="fixed top-0 left-0 right-0 z-100 px-4 md:px-12 py-5 flex justify-between items-center bg-black/80 backdrop-blur-xl border-b border-white/5">
        <Link to="/" className="group flex items-center gap-2 text-xs md:text-sm font-bold tracking-widest uppercase hover:text-purple-400 transition-colors text-white">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to 2.0
        </Link>
        <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono text-white/50 uppercase tracking-widest">
           <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
           Archive
        </div>
      </nav>

      <header className="relative pt-32 md:pt-48 pb-16 md:pb-28 px-6 md:px-12 bg-[#0a0a0a] overflow-hidden">
        <div className="max-w-[1800px] mx-auto relative">
          
          <h1 className="text-[20vw] lg:text-[15rem] xl:text-[18rem] leading-[0.8] font-black uppercase tracking-tighter text-[#111] absolute -top-10 md:-top-20 left-0 -z-10 select-none pointer-events-none opacity-50">
            Legacy
          </h1>
          
          <div className="flex flex-col xl:flex-row items-start xl:items-end justify-between gap-12 mt-4 md:mt-20 relative z-10">
            <div className="w-full max-w-4xl animate-in slide-in-from-bottom-10 fade-in duration-1000">
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-purple-500/30 rounded-full bg-purple-900/10 text-purple-300 text-[10px] font-bold tracking-widest uppercase">
                    <Sparkles size={12} />
                    <span>Established 2025</span>
                </div>
                
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.9] mb-8">
                  The <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 via-pink-500 to-orange-500">Origin</span> Story
                </h2>
                
                <p className="max-w-2xl text-gray-400 text-sm md:text-lg lg:text-xl font-medium leading-relaxed md:border-l-2 border-purple-500/30 pl-0 md:pl-6">
                    It started with an idea. It ended as a movement. <br/>
                    The numbers speak for themselves.
                </p>
            </div>

            <div className="w-full xl:w-auto grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-16 border-t xl:border-t-0 xl:border-l border-white/10 pt-8 xl:pt-0 xl:pl-16">
                {stats.map((stat, idx) => (
                    <div key={idx} className="flex flex-col">
                        <stat.icon className={`w-6 h-6 md:w-8 md:h-8 mb-4 ${stat.color}`} />
                        <span className="text-3xl md:text-5xl font-black tracking-tighter text-white leading-none">{stat.value}</span>
                        <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-gray-500 mt-2">{stat.label}</span>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </header>

      <section className="py-12 md:py-20 px-6 border-y border-white/5 bg-[#080808]">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                <div className="p-4 bg-blue-600/10 rounded-2xl text-blue-500 border border-blue-500/20">
                    <BadgeCheck size={32} />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-white uppercase tracking-tight">Verified Impact</h3>
                    <p className="text-sm md:text-base text-gray-400 mt-1">Check out the official engagement numbers on Unstop.</p>
                </div>
            </div>
            
            <a 
                href="https://unstop.com/college-fests/udhgam-student-council-woxsen-university-308074" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full md:w-auto group flex items-center justify-center gap-4 px-10 py-5 bg-white text-black font-black uppercase tracking-widest text-xs md:text-sm hover:bg-purple-500 hover:text-white transition-all duration-300 rounded-sm"
            >
                View Unstop Profile
                <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
        </div>
      </section>

      <section className="px-4 md:px-12 py-16 md:py-24 bg-[#050505]">
        <div className="max-w-[1800px] mx-auto">
            
            <div className="flex justify-between items-end mb-10 px-2">
                 <h3 className="text-gray-500 text-xs font-bold tracking-[0.4em] uppercase">Visual Archive</h3>
                 <div className="hidden lg:flex items-center gap-2 text-[10px] font-mono text-gray-600">
                    <Users size={12}/>
                    <span>UDHGAM_MEDIA_2025</span>
                 </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] md:auto-rows-[350px] 2xl:auto-rows-[450px] gap-4 md:gap-5">
                {galleryItems.map((item, idx) => (
                    <div 
                        key={idx} 
                        className={`relative group overflow-hidden bg-[#111] rounded-xl border border-white/5 ${item.span}`}
                    >
                        <img 
                            src={item.src} 
                            alt={item.alt} 
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                        />
                        
                        <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-70"></div>

                        <div className="absolute bottom-0 left-0 p-6 md:p-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out z-10">
                            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white mb-2 drop-shadow-xl">
                                {item.title}
                            </h3>
                            <div className="h-1 w-10 group-hover:w-full bg-linear-to-r from-purple-500 to-pink-500 transition-all duration-500 mb-3"></div>
                            <p className="text-xs md:text-base font-mono text-gray-300 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 uppercase tracking-widest">
                                {item.subtitle}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
      </section>
      <section className="py-24 md:py-48 border-t border-white/5 text-center bg-[#050505]">
        <h3 className="text-gray-500 text-xs md:text-sm font-bold tracking-[0.4em] uppercase mb-10">
            You've seen the history
        </h3>
        <Link to="/" className="inline-block px-4">
             <h2 className="text-4xl sm:text-7xl md:text-9xl font-black text-white hover:text-purple-500 transition-colors duration-500 cursor-pointer uppercase tracking-tighter leading-none">
                It's Time to Build the <br/> Future.
             </h2>
        </Link>
      </section>
      <Footer />

    </div>
  );
};

export default PastEditionPage;