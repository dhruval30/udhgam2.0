import { ArrowRight, History, Instagram, Linkedin, Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BG_IMAGE_PATH = '/bg.png';
const MAIN_CENTER_LOGO = '/udhgam2.0.png';
const UNI_LOGO_PATH = '/woxsen-logo.png';
const SMALL_EVENT_LOGO = '/udhgam-small.png';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Kept exactly as it was: these will scroll to #IDs on the home page
  const menuItems = ['About', 'Agenda', 'Udhgam 1.0', 'Partner with us', 'Contact'];

  return (
    <section className="relative w-full h-dvh overflow-hidden bg-[#0a0a0a] text-white font-sans selection:bg-red-600 selection:text-white">
      
      <div className="absolute inset-0 z-0">
        <img
          src={BG_IMAGE_PATH}
          alt="Background"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/80 via-transparent to-black/90"></div>
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"></div>
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-8 md:py-6 flex justify-between items-center bg-black">
        <div className="flex items-center gap-4 md:gap-6">
          <img src={UNI_LOGO_PATH} alt="University Logo" className="h-8 md:h-12 object-contain" />
          
          <div className="hidden md:block w-px h-8 bg-white/20"></div>
          <img src={SMALL_EVENT_LOGO} alt="Event Logo" className="hidden md:block h-16 object-contain" />
        </div>

        {/* Desktop Menu - SCROLLS TO SECTIONS */}
        <div className="hidden md:flex items-center gap-10 text-[11px] font-bold tracking-[0.2em] text-gray-300 uppercase">
          {menuItems.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(/ /g, '')}`}
              className="hover:text-white transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
            {/* NEW BUTTON: LINKS TO /PAST PAGE */}
            <Link 
              to="/past" 
              className="hidden md:flex items-center gap-2 px-5 py-2 border border-white/30 text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 font-bold text-xs tracking-widest uppercase"
            >
                <History size={14} />
                <span>Rewind</span>
            </Link>

            <a href="#register" className="hidden md:flex items-center gap-2 px-6 py-2 bg-white text-black hover:bg-gray-200 transition-all duration-300 font-bold text-xs tracking-widest uppercase">
                <span>Register</span>
                <ArrowRight size={14} />
            </a>
            
            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(true)}>
              <Menu size={28} />
            </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-60 bg-black transition-transform duration-300 flex flex-col ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center p-6 border-b border-white/10">
            <img src={UNI_LOGO_PATH} alt="University Logo" className="h-8 object-contain" />
            <button onClick={() => setIsMenuOpen(false)} className="text-white/70 hover:text-white">
                <X size={32} />
            </button>
        </div>

        <div className="flex flex-col px-8 py-8 gap-6 overflow-y-auto">
            {/* Added Rewind Link to Mobile Menu */}
            <Link 
                to="/past"
                onClick={() => setIsMenuOpen(false)}
                className="group flex justify-between items-center text-2xl font-bold text-purple-400 tracking-wide uppercase border-b border-white/5 pb-4"
            >
                <span className="flex items-center gap-3"><History size={24}/> Rewind 1.0</span>
                <ArrowRight className="text-purple-400/50 group-hover:text-purple-400 group-hover:translate-x-2 transition-all" size={24} />
            </Link>

            {menuItems.map((item) => (
                <a 
                    key={item} 
                    href={`#${item.toLowerCase().replace(/ /g, '')}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="group flex justify-between items-center text-2xl font-bold text-white tracking-wide uppercase border-b border-white/5 pb-4"
                >
                    {item}
                    <ArrowRight className="text-white/50 group-hover:text-white group-hover:translate-x-2 transition-all" size={24} />
                </a>
            ))}
        </div>

        <div className="mt-auto px-8 pb-12">
            <div className="flex border border-white/20 divide-x divide-white/20">
              <a
                href="https://www.instagram.com/udhgam2025/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-4 flex justify-center items-center hover:bg-white/10 text-white transition-colors"
              >
                <Instagram size={20} />
              </a>

              <a
                href="https://www.linkedin.com/posts/woxsen-university_udhgam-activity-7295649138023534592-Fss3/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-4 flex justify-center items-center hover:bg-white/10 text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
      </div>

      {/* Social Sidebar (Desktop) */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-0">
        <a
          href="https://www.instagram.com/udhgam2025/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center border border-white/20 text-white/60 hover:bg-white hover:text-black hover:border-white transition-all duration-300"
        >
          <Instagram size={18} />
        </a>

        <a
          href="https://www.linkedin.com/posts/woxsen-university_udhgam-activity-7295649138023534592-Fss3/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center border border-white/20 text-white/60 hover:bg-white hover:text-black hover:border-white transition-all duration-300"
        >
          <Linkedin size={18} />
        </a>
      </div>

      {/* Right Side Date Info */}
      <div className="absolute z-30 top-20 right-6 flex flex-col items-end text-right md:top-1/2 md:right-12 md:-translate-y-1/2">
        
        <h3 className="text-[8px] md:text-[10px] font-bold tracking-[0.2em] md:tracking-[0.3em] text-white mb-1 md:mb-2 uppercase drop-shadow-md">
            February 2026
        </h3>

        <div className="flex flex-col items-center mr-1">
            <span className="text-3xl md:text-7xl font-black text-white leading-none drop-shadow-xl">03</span>
            <div className="h-4 md:h-6 w-px bg-white/40 my-1"></div>
            <span className="text-3xl md:text-7xl font-black text-white leading-none drop-shadow-xl">05</span>
        </div>

        <div className="w-8 md:w-12 h-px bg-white/30 mt-3 md:mt-5 mb-2 md:mb-3 mr-1"></div>

        <div className="mr-1">
            <h4 className="text-xs md:text-xl font-bold text-white leading-tight drop-shadow-md">
                Woxsen<br />University
            </h4>
            <p className="text-[8px] md:text-xs font-medium text-gray-400 mt-1 tracking-wide uppercase">
                Hyderabad
            </p>
        </div>
      </div>

      {/* Main Center Logo */}
      <main className="absolute inset-0 z-20 flex flex-col justify-end items-center px-4 pb-48 md:justify-center md:pb-0">
        <div className="relative w-full max-w-[260px] md:max-w-[900px]">
          <img
            src={MAIN_CENTER_LOGO}
            alt="Main Logo"
            className="w-full h-auto object-contain drop-shadow-2xl"
          />
        </div>
      </main>

      {/* Mobile Bottom CTA */}
      <div className="md:hidden absolute bottom-24 left-6 right-6 z-40">
        <a href="#register" className="flex items-center justify-center w-full h-14 bg-linear-to-r from-[#E60000] to-[#4A00E0] text-white font-bold tracking-[0.2em] text-sm uppercase shadow-2xl shadow-purple-900/50">
            Register Now
        </a>
      </div>

    </section>
  );
};

export default LandingPage;