import { ArrowRight, Heart } from 'lucide-react';
import React from 'react';

const Footer = () => {
  return (
    <footer
      id="contact"
      className="relative w-full bg-black text-white py-12 px-6 md:px-12 lg:px-16"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 flex items-center">
            <h2 className="text-7xl md:text-8xl lg:text-[7rem] font-black uppercase tracking-tighter leading-[0.85]">
              Get In
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 via-pink-500 to-orange-500">
                Touch
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5 grid grid-cols-2 gap-7">
            <div>
              <h3 className="text-xs font-bold tracking-[0.25em] uppercase text-purple-400 mb-2">Location</h3>
              <p className="text-lg text-gray-200">
                Woxsen University<br />Hyderabad, India
              </p>
            </div>
            <div>
              <h3 className="text-xs font-bold tracking-[0.25em] uppercase text-purple-400 mb-2">Contact</h3>
              <a
                href="mailto:codex@woxsen.edu.in"
                className="text-lg text-gray-200 break-all hover:text-purple-400 transition-colors"
              >
                codex@woxsen.edu.in
              </a>
            </div>
            <div>
              <h3 className="text-xs font-bold tracking-[0.25em] uppercase text-purple-400 mb-2">Dates</h3>
              <p className="text-lg text-gray-200">3rd Feb - 5th Feb 2026</p>
            </div>
            <div>
              <h3 className="text-xs font-bold tracking-[0.25em] uppercase text-purple-400 mb-2">Stalk Us</h3>
              <div className="flex flex-col gap-1">
                <a href="#" className="text-lg text-gray-200 hover:text-purple-400 transition-colors">Instagram</a>
                <a href="#" className="text-lg text-gray-200 hover:text-purple-400 transition-colors">Twitter (X)</a>
                <a href="#" className="text-lg text-gray-200 hover:text-purple-400 transition-colors">Facebook</a>
                <a href="#" className="text-lg text-gray-200 hover:text-purple-400 transition-colors">Youtube</a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 border-t border-white/10 pt-10">
          <div className="lg:col-span-7 flex flex-col gap-3">
            <p className="text-gray-400 max-w-lg text-2xl">
              We are available to help with any queries you have about the event. Email us any time and we'll get back to you within 24 hours. <br /> <br /> <br /> <br /> <br />
            </p>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Udhgam. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400 font-medium">
              <span>Made with</span>
              <Heart size={14} className="text-red-500" fill="currentColor" />
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-3">
            <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-widest">Questions?</h3>
            <form className="flex flex-col gap-3 max-w-lg">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full h-12 bg-[#111] border border-white/20 rounded-lg px-4 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows="4"
                className="w-full bg-[#111] border border-white/20 rounded-lg p-4 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
              />
              <button
                type="submit"
                className="h-12 w-full flex items-center justify-center gap-2 bg-white text-black rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-gray-200 transition-colors"
              >
                <span>Send Message</span>
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
