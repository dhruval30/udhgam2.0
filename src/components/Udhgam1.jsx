import { ArrowLeft, ArrowRight, Award, Laugh, Users, Zap } from 'lucide-react';
import React, { useState } from 'react';

const slides = [
  {
    id: 1,
    image: '/udhgam-admin.jpeg',
    title: 'The Hype',
    desc: 'When the screens lit up, the energy shifted. It wasn’t just an announcement, it was the moment Udhgam officially began.',
  },
  {
    id: 2,
    image: '/inaugration.jpeg',
    title: 'Big Talks',
    desc: 'Industry professionals shared real experiences and insights. Honest conversations, practical takeaways, and stories worth listening to.',
  },
  {
    id: 3,
    image: '/classroom2.jpeg',
    title: 'Code Mode',
    desc: 'Teams settled in, ideas took shape, and the focus was intense. Long hours, quick iterations, and a shared goal to build something meaningful.',
  },
  {
    id: 4,
    image: '/classroom.jpeg',
    title: 'Level Up',
    desc: 'The workshops were interactive and hands-on. Participants explored new concepts, asked questions, and walked away with skills they could actually use.',
  },
  {
    id: 5,
    image: '/inaugration1.jpeg',
    title: 'Full House',
    desc: 'A packed venue, high energy, and an engaged crowd. The atmosphere captured exactly what Udhgam stands for — curiosity, collaboration, and community.',
  },
];

const stats = [
  { value: '3K+', label: 'Attendees', icon: Users },
  { value: '5+', label: 'Events', icon: Zap },
  { value: '1.5L+', label: 'Prize Pool', icon: Award },
  { value: '∞', label: 'Fun', icon: Laugh },
];

const Udhgam1 = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section id="udhgam1.0" className="relative w-full bg-black text-white py-24 px-6 md:px-12 overflow-hidden">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="mb-16 text-center lg:text-left">
          <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8]">
            The <br/>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 via-pink-500 to-orange-500">
              Prequel
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mt-6 max-w-lg mx-auto lg:mx-0 font-medium">
            A look back at the madness from Udhgam 1.0.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-20">
            {stats.map((stat, idx) => (
              <div 
                key={idx}
                className="relative p-6 rounded-3xl bg-[#111] border border-white/10 hover:border-purple-500/50 transition-all duration-300 group overflow-hidden"
              >
                <div className="absolute inset-0 bg-linear-to-br from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                    <stat.icon className="w-6 h-6 text-purple-500 mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-1">{stat.value}</h3>
                    <p className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase">{stat.label}</p>
                </div>
              </div>
            ))}
        </div>

        <div className="relative w-full">
            <div className="overflow-hidden rounded-4xl border border-white/10 bg-[#0a0a0a] shadow-2xl shadow-purple-900/10">
                <div 
                    className="flex transition-transform duration-700 cubic-bezier(0.4, 0, 0.2, 1)"
                    style={{ transform: `translateX(-${current * 100}%)` }}
                >
                    {slides.map((slide) => (
                        <div key={slide.id} className="w-full shrink-0 flex flex-col lg:flex-row lg:h-[600px]">
                            <div className="relative w-full lg:w-[60%] aspect-4/3 lg:aspect-auto overflow-hidden group">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                <img 
                                    src={slide.image} 
                                    alt={slide.title} 
                                    className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                                />
                            </div>

                            <div className="relative w-full lg:w-[40%] bg-[#111] p-8 md:p-12 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/10">
                                <span className="absolute -bottom-5 -right-2.5 text-[8rem] font-black text-white/3 select-none pointer-events-none leading-none overflow-hidden">
                                    0{slide.id}
                                </span>

                                <div className="relative z-10">
                                    <h3 className="text-4xl md:text-6xl font-black uppercase leading-[0.9] mb-6 tracking-tight">
                                        {slide.title}
                                    </h3>
                                    
                                    <div className="flex mb-8">
                                        <div className="w-1 bg-linear-to-b from-purple-500 to-pink-500 rounded-full mr-6 shrink-0"></div>
                                        <p className="text-gray-400 text-base md:text-lg leading-relaxed font-medium">
                                            {slide.desc}
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <button 
                                            onClick={prevSlide}
                                            className="w-14 h-14 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 group"
                                        >
                                            <ArrowLeft size={22} className="group-hover:-translate-x-0.5 transition-transform" />
                                        </button>
                                        
                                        <button 
                                            onClick={nextSlide}
                                            className="w-14 h-14 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 group"
                                        >
                                            <ArrowRight size={22} className="group-hover:translate-x-0.5 transition-transform" />
                                        </button>
                                    </div>
                                </div>

                            </div>

                        </div>
                    ))}
                </div>
            </div>

        </div>

      </div>
    </section>
  );
};

export default Udhgam1;