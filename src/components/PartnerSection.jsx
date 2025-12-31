import { ArrowRight, Download } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import sponsorshipDeck from '../assets/sponsorship.pdf';

const PartnerSection = () => {
  return (
    <section id="partnerwithus" className="relative w-full bg-black text-white py-16 md:py-24 px-6 md:px-12 overflow-hidden">
      
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-pink-900/10 blur-[150px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            {/* Reduced mobile font size from text-7xl to text-5xl */}
            <h2 className="text-5xl sm:text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8]">
              Be A
              <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 via-pink-500 to-orange-500">
              Partner
              </span>
            </h2>
            {/* Reduced text size for better mobile reading */}
            <p className="text-sm md:text-xl text-gray-400 mt-6 md:mt-8 max-w-lg font-medium leading-relaxed">
              Join the movement. Connect with the brightest minds and showcase your brand at the university's largest technical fest.
            </p>
          </div>
          
          <div className="lg:col-span-5">
            <div className="relative group">
              <div className="absolute -inset-1 bg-linear-to-r from-purple-600 to-orange-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 md:p-8">
                {/* Reduced card header size */}
                <h3 className="text-xl md:text-2xl font-black uppercase mb-2">Sponsorship Deck</h3>
                <p className="text-gray-400 text-xs md:text-sm mb-6">Download the official brochure to see demographics, deliverables, and past impact.</p>
                
                <div className="flex flex-col gap-3">
                  <a 
                    href={sponsorshipDeck} 
                    download="Udhgam_Sponsorship_Deck.pdf"
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
                  <Link 
                    to="/partnerships"
                    className="cursor-pointer flex items-center justify-between w-full p-4 bg-white/5 border border-white/10 text-white font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-white/10 transition-all duration-300 group"
                  >
                    <span>View Sponsorship Tiers</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
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