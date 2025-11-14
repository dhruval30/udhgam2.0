import React from 'react';

const SectionDivider = () => {
  const messages = [
    "ARE YOU STILL SCROLLING?",
    "THE CONTENT IS OVER",
    `GO CLICK "REGISTER"`,
    "SERIOUSLY, WHAT ARE YOU LOOKING FOR?",
    "YOU'VE REACHED THE END",
    "(ALMOST)",
    "THE FOOTER IS NEXT..."
  ];

  const COPIES = 10;

  return (
    <>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); } /* shift by one full copy */
        }
        .animate-marquee {
          animation: marquee 50s linear infinite;
          will-change: transform;
        }
      `}</style>

      <section
        id="pre-footer-divider"
        className="relative w-full py-20 bg-black overflow-hidden"
      >
        <div className="relative w-full flex flex-col gap-8">
          <div className="h-px w-full max-w-7xl mx-auto bg-linear-to-r 
          from-purple-500/0 via-purple-500/40 to-purple-500/0"></div>
          <div className="relative flex overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap min-w-max">
              {Array.from({ length: COPIES }).map((_, idx) => (
                <div
                  key={idx}
                  aria-hidden={idx > 0}
                  className="flex items-center gap-10 px-5"
                >
                  {messages.map((msg, i) => (
                    <span
                      key={i}
                      className={
                        "text-4xl font-black uppercase tracking-tighter" +
                        (msg.includes("REGISTER")
                          ? " text-transparent bg-clip-text bg-linear-to-r from-purple-500 via-pink-500 to-orange-500 opacity-30"
                          : " text-white/10")
                      }
                    >
                      {msg}
                    </span>
                  ))}
                </div>
              ))}

            </div>
          </div>
          <div className="h-px w-full max-w-7xl mx-auto bg-linear-to-r 
          from-purple-500/0 via-purple-500/40 to-purple-500/0"></div>

        </div>
      </section>
    </>
  );
};

export default SectionDivider;
