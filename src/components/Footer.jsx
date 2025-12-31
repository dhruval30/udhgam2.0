import { ValidationError, useForm } from '@formspree/react';
import { ArrowRight, Heart } from 'lucide-react';
import React, { useState } from 'react';

const Footer = () => {
  const formspreeId = import.meta.env.VITE_FORMSPREE_ID;
  const [state, handleSubmit] = useForm(formspreeId);
  const [clickCount, setClickCount] = useState(0);

  const handleSecretClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);

    if (newCount === 10) {
      setClickCount(0); 
      const apiKey = import.meta.env.VITE_COUNTER_API_KEY;
      fetch('https://api.counterapi.dev/v2/dhruval-padias-team-2232/first-counter-2232')
        .then(res => res.json())
        .then(data => {
          alert(`Backdoor Accessed\n\nStats:\n${JSON.stringify(data, null, 2)}`);
        })
        .catch(() => alert("Could not fetch stats. Check API Key or Network."));
    }
  };
  return (
    <footer
      id="contact"
      className="relative w-full bg-black text-white py-10 md:py-16 px-6 md:px-12 lg:px-16"
    >
      {/* Reduced vertical gap from gap-16 to gap-8 on mobile */}
      <div className="max-w-7xl mx-auto flex flex-col gap-8 md:gap-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className="lg:col-span-7 flex items-center">
            {/* AGGRESSIVE RESIZE: text-7xl -> text-4xl on mobile */}
            <h2 className="text-4xl sm:text-7xl md:text-8xl lg:text-[7rem] font-black uppercase tracking-tighter leading-[0.9] md:leading-[0.85]">
              Get In
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 via-pink-500 to-orange-500">
                Touch
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5 grid grid-cols-2 gap-6 md:gap-7">
            <div>
              <h3 className="text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase text-purple-400 mb-2">Location</h3>
              <p className="text-sm md:text-lg text-gray-200">
                Woxsen University<br />Hyderabad, India
              </p>
            </div>
            <div>
              <h3 className="text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase text-purple-400 mb-2">Contact</h3>
              <a
                href="mailto:udhgam@woxsen.edu.in"
                className="text-sm md:text-lg text-gray-200 break-all hover:text-purple-400 transition-colors"
              >
                udhgam@woxsen.edu.in
              </a>
            </div>
            <div>
              <h3 className="text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase text-purple-400 mb-2">Dates</h3>
              <p className="text-sm md:text-lg text-gray-200">3rd Feb - 5th Feb 2026</p>
            </div>
            <div>
              <h3 className="text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase text-purple-400 mb-2">Stalk Us</h3>
              <div className="flex flex-col gap-1">
                <a href="https://www.instagram.com/udhgam2025/" className="text-sm md:text-lg text-gray-200 hover:text-purple-400 transition-colors" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://www.linkedin.com/posts/woxsen-university_udhgam-activity-7295649138023534592-Fss3/" className="text-sm md:text-lg text-gray-200 hover:text-purple-400 transition-colors" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 border-t border-white/10 pt-8 md:pt-10">
          <div className="lg:col-span-7 flex flex-col gap-4 md:gap-3 order-last lg:order-first">
            {/* Reduced description text from text-2xl to text-sm on mobile */}
            <p className="text-gray-400 max-w-lg text-sm md:text-xl leading-relaxed">
              We are available to help with any queries you have about the event. Email us any time and we'll get back to you within 24 hours. 
              <br className="hidden md:block"/> <br className="hidden md:block"/> <br className="hidden md:block"/>
            </p>
            <div className="mt-4 md:mt-0">
                <p className="text-gray-500 text-xs md:text-sm">
                © {new Date().getFullYear()} Udhgam. All rights reserved.
                </p>
                <div className="flex items-center gap-2 text-xs md:text-sm text-gray-500 font-medium select-none mt-1">
                <span title='made by dhruval'>Made with</span>
                <Heart size={12} className="text-red-500 md:w-3.5 md:h-3.5" fill="currentColor" />
                <span 
                    onClick={handleSecretClick}
                    className="ml-1 opacity-20 hover:opacity-100 transition-opacity duration-300 text-[10px] cursor-pointer hover:text-purple-400"
                    title="made by dhruval"
                >
                    ~ by dhruval
                </span>
                </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 flex flex-col gap-3">
            <h3 className="text-sm md:text-lg font-bold text-white mb-2 uppercase tracking-widest">Questions?</h3>

            {state.succeeded ? (
              <p className="text-green-400 text-sm md:text-lg font-medium">Thank you! We’ll get back to you soon.</p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-lg">
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full h-10 md:h-12 bg-[#111] border border-white/20 rounded-lg px-4 text-xs md:text-base text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />

                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  required
                  rows="4"
                  className="w-full bg-[#111] border border-white/20 rounded-lg p-4 text-xs md:text-base text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="h-10 md:h-12 w-full flex items-center justify-center gap-2 bg-white text-black rounded-lg font-bold text-xs md:text-sm uppercase tracking-widest hover:bg-gray-200 transition-colors"
                >
                  <span>{state.submitting ? "Sending..." : "Send Message"}</span>
                  <ArrowRight size={16} className="md:w-[18px] md:h-[18px]" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;