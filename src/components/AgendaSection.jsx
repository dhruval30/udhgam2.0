import { AlertCircle, ArrowUpRight, Clock, Lock, Sparkles, Zap } from 'lucide-react';
import React, { useState } from 'react';

const AgendaSection = () => {
  const [activeDay, setActiveDay] = useState(0);

  const days = [
    { id: 0, label: 'Day 01', date: '03 Feb' },
    { id: 1, label: 'Day 02', date: '04 Feb' },
    { id: 2, label: 'Day 03', date: '05 Feb' },
  ];

  return (
    <section id="agenda" className="relative w-full bg-black text-white py-24 px-6 md:px-12 overflow-hidden">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-900/05 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <div className="lg:col-span-5 flex flex-col gap-6 order-2 lg:order-1 relative">
             
             <div className="absolute -top-10 left-0 md:-left-4 rotate-[-4deg] bg-[#E60000] text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest border border-red-400 shadow-[4px_4px_0px_rgba(255,255,255,0.2)] z-20 hidden lg:block">
                Confidential • Declassifying Soon
             </div>

             <div className="flex items-center gap-3 mb-2 pt-4 lg:pt-0">
                <AlertCircle size={20} className="text-purple-500" />
                <h3 className="text-lg font-bold tracking-widest uppercase text-gray-300">Briefing</h3>
             </div>

             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
                
                {/* Card 1: Keynotes */}
                <div className="group relative p-6 rounded-3xl bg-[#111] border border-white/10 hover:border-purple-500/50 transition-all duration-300 overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowUpRight size={20} className="text-purple-500" />
                    </div>
                    <div className="h-full flex flex-col justify-between">
                        <div className="w-10 h-10 rounded-full bg-purple-900/30 flex items-center justify-center text-purple-400 mb-4">
                            <Zap size={20} fill="currentColor" />
                        </div>
                        <div>
                            <h4 className="text-xl font-black uppercase mb-2">Keynotes</h4>
                            <p className="text-xs text-gray-400 leading-relaxed">Real stories. No fluff. Industry leaders building the next decade.</p>
                        </div>
                    </div>
                </div>

                {/* Card 2: Workshops */}
                <div className="group relative p-6 rounded-3xl bg-[#111] border border-white/10 hover:border-pink-500/50 transition-all duration-300 overflow-hidden">
                     <div className="absolute inset-0 bg-linear-to-br from-pink-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="h-full flex flex-col justify-between relative z-10">
                        <div className="w-10 h-10 rounded-full bg-pink-900/30 flex items-center justify-center text-pink-400 mb-4">
                            <Clock size={20} />
                        </div>
                        <div>
                            <h4 className="text-xl font-black uppercase mb-2">Workshops</h4>
                            <p className="text-xs text-gray-400 leading-relaxed">Laptop required. You build, you deploy, you learn.</p>
                        </div>
                    </div>
                </div>

                {/* Card 3: Panels */}
                <div className="group relative p-6 rounded-3xl bg-[#111] border border-white/10 hover:border-orange-500/50 transition-all duration-300 overflow-hidden">
                    <div className="h-full flex flex-col justify-between">
                        <div className="w-10 h-10 rounded-full bg-orange-900/30 flex items-center justify-center text-orange-400 mb-4">
                            <Sparkles size={20} />
                        </div>
                        <div>
                            <h4 className="text-xl font-black uppercase mb-2">Panels</h4>
                            <p className="text-xs text-gray-400 leading-relaxed">Debates that matter. Unscripted conversations.</p>
                        </div>
                    </div>
                </div>

                 {/* Card 4: Networking */}
                 <div className="group relative p-6 rounded-3xl bg-white text-black border border-white/10 hover:scale-[1.02] transition-all duration-300 overflow-hidden">
                    <div className="h-full flex flex-col justify-between">
                        <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center text-black mb-4">
                            <ArrowUpRight size={20} />
                        </div>
                        <div>
                            <h4 className="text-xl font-black uppercase mb-2">Network</h4>
                            <p className="text-xs text-gray-600 font-bold leading-relaxed">3K+ Connections made in past editions.</p>
                        </div>
                    </div>
                </div>

             </div>
          </div>
          
          <div className="lg:col-span-7 flex flex-col order-1 lg:order-2">
            <div className="relative mb-12 lg:text-right">
                <div className="lg:hidden absolute -top-8 right-0 rotate-[4deg] bg-[#E60000] text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest border border-red-400 shadow-[4px_4px_0px_rgba(255,255,255,0.2)] z-20">
                    Confidential
                </div>

                <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8]">
                    The <br/>
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 via-pink-500 to-orange-500">
                        Agenda
                    </span>
                </h2>
            </div>

            <div className="flex gap-2 mb-0 overflow-x-auto no-scrollbar lg:justify-end">
              {days.map((day) => (
                <button
                  key={day.id}
                  onClick={() => setActiveDay(day.id)}
                  className={`relative px-6 py-4 rounded-t-2xl border-t border-x border-white/10 transition-all duration-300 min-w-[120px] text-left group ${
                    activeDay === day.id 
                      ? 'bg-[#111] border-purple-500/50 text-white' 
                      : 'bg-black text-gray-600 hover:bg-[#0f0f0f]'
                  }`}
                >
                  {activeDay === day.id && (
                    <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-purple-500 to-pink-500"></div>
                  )}
                  
                  <span className="block text-[10px] font-bold uppercase tracking-widest mb-1">{day.label}</span>
                  <span className="block text-xl font-black">{day.date}</span>
                </button>
              ))}
            </div>

            {/* Redacted Content Box */}
            <div className="relative flex-1 bg-[#111] border border-white/10 border-t-0 rounded-b-3xl rounded-tl-3xl p-8 md:p-10 overflow-hidden min-h-[400px]">
                
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/40 backdrop-blur-[2px]">
                    <div className="bg-black border border-white/20 rounded-2xl p-6 flex flex-col items-center text-center shadow-2xl transform hover:scale-105 transition-transform duration-500">
                        <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mb-4 text-purple-400">
                            <Lock size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white uppercase tracking-tight">Locked Access</h3>
                        <p className="text-sm text-gray-400 mt-2 max-w-[200px]">Full detailed timeline drops in <span className="text-white font-bold">2 weeks</span>.</p>
                    </div>
                </div>

                {/* Ghost Content */}
                <div className="opacity-20 pointer-events-none select-none space-y-8">
                    {[1, 2, 3, 4, 5].map((item) => (
                        <div key={item} className="flex gap-6">
                            <div className="w-16 text-right font-mono text-sm">09:00</div>
                            <div className="flex-1 space-y-2">
                                <div className="h-6 w-3/4 bg-white rounded-sm"></div> 
                                <div className="h-3 w-full bg-gray-600 rounded-sm"></div>
                                <div className="h-3 w-1/2 bg-gray-600 rounded-sm"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
          </div>

        </div>

        <div className="mt-16 py-6 border-t border-dashed border-white/20 flex justify-between items-center">
             <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">
                // Status: Curation in progress
             </p>
        </div>

      </div>
    </section>
  );
};

export default AgendaSection;
