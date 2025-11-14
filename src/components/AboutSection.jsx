import { ArrowUpRight, Calendar, MapPin } from 'lucide-react';
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="relative w-full bg-black text-white py-16 sm:py-20 md:py-28 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/10 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
            <div className="lg:col-span-7 flex flex-col gap-8 sm:gap-10 md:gap-12">
                <div className="relative">
                    <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] uppercase">
                        A Movement <br/>
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 via-pink-500 to-orange-500">
                            Of Ideas
                        </span> <br/>
                        <span className="italic font-serif font-light text-white/40 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">&</span> Impact.
                    </h2>
                    
                    {/* Sticker badge */}
                    {/* <div className="absolute -top-4 sm:-top-6 md:-top-8 right-0 sm:right-8 md:right-16 lg:right-20 rotate-12 bg-white text-black font-black text-[10px] sm:text-xs px-3 py-1.5 rounded-full border-2 border-purple-900 shadow-[3px_3px_0px_#a855f7] sm:shadow-[4px_4px_0px_#a855f7]">
                        EST. 2025
                    </div> */}
                </div>
                <div className="space-y-4 sm:space-y-6 max-w-2xl">
                    <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-300 leading-relaxed">
                        Following the resounding success of Udhgam 2025, we are <span className="text-white underline decoration-purple-500 decoration-2 sm:decoration-4 underline-offset-4">reimagining</span> what a celebration of innovation looks like.
                    </p>
                    <p className="text-sm sm:text-base md:text-lg text-gray-500 leading-relaxed">
                    "Udhgam" - meaning a new beginning - is a vision that unites the students, innovators, and creators across disciplines to explore the limitless frontiers of technology and creativity. Udhgam 2.0 elevates this vision, transforming the fest into a movement.
                    This edition brings together inter-university participation from leading institutes, strategic partnerships with startups and innovation hubs, and sustainability-driven themes reflecting modern challenges.
                    </p>
                </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-5 sm:gap-6">
                <div className="relative group overflow-hidden rounded-2xl sm:rounded-3xl bg-linear-to-br from-[#1a1a2e] to-[#0f0f1e] border border-white/10 p-6 sm:p-7 md:p-8 transition-all hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10">
                    <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-purple-600/20 blur-2xl sm:blur-3xl rounded-full"></div>
                    <div className="flex flex-col gap-5 sm:gap-6 relative z-10">
                        <div>
                            <div className="flex items-center gap-2 text-purple-400 mb-2 sm:mb-3">
                                <Calendar size={16} className="sm:w-[18px] sm:h-[18px]" />
                                <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase">Event Dates</span>
                            </div>
                            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
                                3 - 5 Feb <span className="text-white/30">2026</span>
                            </h3>
                        </div>
                        
                        <div className="w-full h-px bg-white/10"></div>
                        <div>
                            <div className="flex items-center gap-2 text-purple-400 mb-2 sm:mb-3">
                                <MapPin size={16} className="sm:w-[18px] sm:h-[18px]" />
                                <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase">Location</span>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-white">Woxsen University</h3>
                            <p className="text-sm sm:text-base text-gray-400">Hyderabad, India</p>
                        </div>
                    </div>
                </div>

                <div className="relative group overflow-hidden rounded-2xl sm:rounded-3xl p-0.5 transition-transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/20">
                    <div className="absolute inset-0 bg-linear-to-r from-purple-600 via-pink-600 to-orange-600 opacity-100 group-hover:opacity-100 transition-opacity"></div>
                    
                    <div className="relative bg-white h-full rounded-2xl sm:rounded-[22px] p-6 sm:p-7 md:p-8 flex flex-col justify-between group-hover:bg-gray-50 transition-all">
                        <div className="flex justify-between items-start gap-4">
                            <div>
                                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-none tracking-tighter text-black">
                                    Partner<br/>With Us
                                </h3>
                                <p className="text-xs sm:text-sm font-semibold text-gray-600 mt-2 sm:mt-3">Shape the future.</p>
                            </div>
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black text-white rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300 shrink-0">
                                <ArrowUpRight size={20} className="sm:w-6 sm:h-6" strokeWidth={2.5} />
                            </div>
                        </div>
                        
                        <div className="mt-6 sm:mt-8">
                            <p className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-gray-400 mb-2">Contact Team</p>
                            <a href="mailto:codex@woxsen.edu.in" className="text-base sm:text-lg font-bold underline decoration-2 underline-offset-4 hover:text-purple-600 transition-colors break-all text-black">
                                codex@woxsen.edu.in
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;