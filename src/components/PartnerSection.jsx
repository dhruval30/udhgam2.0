import { ArrowRight, Download } from 'lucide-react';
import React from 'react';

const PartnerSection = () => {
  return (
    <section id="partnerwithus" className="relative w-full bg-black text-white py-24 px-6 md:px-12 overflow-hidden">
      
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-pink-900/10 blur-[150px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8]">
              Be A
              <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 via-pink-500 to-orange-500">
              Partner
              </span>
            </h2>
            <p className="max-w-2xl text-lg md:text-xl text-gray-400 mt-8 font-medium">
              Udhgam 2.0 is the epicenter of passionate creators, developers, and future leaders. All sponsorship packages are flexible and customizable.
            </p>
          </div>
          <div className="lg:col-span-5 w-full">
            <div className="relative p-1 bg-linear-to-br from-purple-600 via-pink-600 to-orange-500 rounded-4xl shadow-2xl shadow-purple-500/30">
              <div className="bg-[#111] rounded-[22px] p-8 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-4xl font-black uppercase tracking-tight leading-none">
                    Get In Touch
                  </h3>
                  <p className="text-base text-gray-400 mt-4 font-medium">
                    Our sponsorship deck has all the details. Let's build something legendary together.
                  </p>
                </div>
                <div className="flex flex-col gap-4 mt-8">
                  <a 
                    // href="/udhgam_sponsorship_deck.pdf"
                    download
                    className="flex items-center justify-between w-full p-4 bg-white text-black font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-gray-200 transition-all duration-300 group"
                  >
                    <span>Download Brochure</span>
                    <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                  <a 
                    href="mailto:udhgam@woxsen.edu.in"
                    className="flex items-center justify-between w-full p-4 bg-white/5 border border-white/10 text-white font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-white/10 transition-all duration-300 group"
                  >
                    <span>Email The Team</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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

export default PartnerSection;