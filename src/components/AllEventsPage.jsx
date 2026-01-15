import {
    ArrowUpRight,
    Atom,
    Bot,
    Brain,
    Camera,
    Code,
    Cpu,
    Database,
    Gamepad2,
    Ghost,
    Layers,
    Mic,
    Music,
    Palette,
    Presentation,
    Puzzle,
    Rocket,
    Scissors,
    ShoppingBag,
    Smile,
    Ticket,
    Users,
    Zap
} from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const AllEventsPage = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [hoveredEvent, setHoveredEvent] = useState(null);

    const events = [
        // --- FLAGSHIP ---
        {
            id: "f1",
            category: "Flagship",
            title: "Tensor v2.0",
            desc: "24H Hackathon. Solve real problems. Code. Collaborate.",
            icon: Code,
            color: "group-hover:text-purple-400",
            glow: "group-hover:shadow-[0_0_50px_-10px_rgba(168,85,247,0.3)]",
            href: "https://unstop.com/hackathons/tensor-v20-24-hour-hackathon-udhgam-20-woxsen-university-hyderabad-1622299"
        },
        {
            id: "f2",
            category: "Flagship",
            title: "AgentX",
            desc: "Agentic AI Challenge. Build autonomous systems.",
            icon: Bot,
            color: "group-hover:text-cyan-400",
            glow: "group-hover:shadow-[0_0_50px_-10px_rgba(34,211,238,0.3)]",
            href: "https://unstop.com/competitions/agentx-agentic-development-competition-udhgam-20-woxsen-university-hyderabad-1622320"
        },
        {
            id: "f3",
            category: "Flagship",
            title: "ML Challenge",
            desc: "Optimize models. Real-world datasets. High performance.",
            icon: Brain,
            color: "group-hover:text-pink-400",
            glow: "group-hover:shadow-[0_0_50px_-10px_rgba(244,114,182,0.3)]"
        },
        {
            id: "f4",
            category: "Flagship",
            title: "DataVerse",
            desc: "Datathon. Visualize insights. Tell stories with data.",
            icon: Database,
            color: "group-hover:text-blue-400",
            glow: "group-hover:shadow-[0_0_50px_-10px_rgba(96,165,250,0.3)]",
            href: "https://unstop.com/hackathons/dataverse-udhgam-20-woxsen-university-hyderabad-1622457"
        },

        // --- TECHNICAL ---
        {
            id: "t1",
            category: "Technical",
            title: "Product Pitch",
            desc: "Startup ideas. Industry panel. High stakes.",
            icon: Presentation,
            color: "group-hover:text-emerald-400",
            glow: "group-hover:shadow-[0_0_50px_-10px_rgba(52,211,153,0.3)]"
        },
        {
            id: "t2",
            category: "Technical",
            title: "Prototype Pres.",
            desc: "Hardware & Software showcases. Working models.",
            icon: Cpu,
            color: "group-hover:text-orange-400",
            glow: "group-hover:shadow-[0_0_50px_-10px_rgba(251,146,60,0.3)]"
        },
        {
            id: "t3",
            category: "Technical",
            title: "Poster Pres.",
            desc: "Academic research. Visual communication.",
            icon: Layers,
            color: "group-hover:text-yellow-400",
            glow: "group-hover:shadow-[0_0_50px_-10px_rgba(250,204,21,0.3)]"
        },
        {
            id: "t4",
            category: "Technical",
            title: "Tech Debate",
            desc: "Emerging tech topics. Logic, clarity, and perspective.",
            icon: Users,
            color: "group-hover:text-red-400",
            glow: "group-hover:shadow-[0_0_50px_-10px_rgba(248,113,113,0.3)]"
        },

        // --- SPEAKERS ---
        {
            id: "s1",
            category: "Speakers",
            title: "WoxTalks",
            desc: "Industry leaders. Real-world insights. Short format.",
            icon: Mic,
            color: "group-hover:text-rose-500",
            glow: "group-hover:shadow-[0_0_50px_-10px_rgba(244,63,94,0.3)]"
        },
        {
            id: "s2",
            category: "Speakers",
            title: "Panel Discussions",
            desc: "Tech trends. Business future. Open conversation.",
            icon: Users,
            color: "group-hover:text-purple-400",
            glow: "group-hover:shadow-[0_0_50px_-10px_rgba(192,132,252,0.3)]"
        },
        {
            id: "s3",
            category: "Speakers",
            title: "Mentorship",
            desc: "1:1 Sessions. Experienced professionals.",
            icon: Rocket,
            color: "group-hover:text-blue-400",
            glow: "group-hover:shadow-[0_0_50px_-10px_rgba(96,165,250,0.3)]"
        },
        {
            id: "s4",
            category: "Speakers",
            title: "Industry Booths",
            desc: "Internships. Jobs. Networking & Collaboration.",
            icon: ShoppingBag,
            color: "group-hover:text-emerald-400",
            glow: "group-hover:shadow-[0_0_50px_-10px_rgba(52,211,153,0.3)]"
        },

        // --- CULTURAL ---
        {
            id: "c1",
            category: "Cultural",
            title: "Regional Dance",
            desc: "Culture. Rhythm. Expression. Live performance.",
            icon: Music,
            color: "group-hover:text-pink-400",
            glow: "group-hover:shadow-[0_0_50px_-10px_rgba(244,114,182,0.3)]"
        },
        {
            id: "c2",
            category: "Cultural",
            title: "Faculty Games",
            desc: "Competitive. Fun. Faculty interaction.",
            icon: Smile,
            color: "group-hover:text-yellow-400",
            glow: "group-hover:shadow-[0_0_50px_-10px_rgba(250,204,21,0.3)]"
        },
        {
            id: "c3",
            category: "Cultural",
            title: "Fun Games",
            desc: "Relaxation. Casual gaming. Interaction.",
            icon: Gamepad2,
            color: "group-hover:text-green-400",
            glow: "group-hover:shadow-[0_0_50px_-10px_rgba(74,222,128,0.3)]"
        },

        // --- CARNIVAL ---
        {
            id: "t5",
            category: "Carnival",
            title: "Photography",
            desc: "Capture the moment. Visual storytelling.",
            icon: Camera,
            color: "group-hover:text-indigo-400",
            glow: "group-hover:shadow-[0_0_50px_-10px_rgba(129,140,248,0.3)]"
        },
        {
            id: "x2",
            category: "Carnival",
            title: "Glow Painting",
            desc: "UV Lights. Fluorescent paints. Creative darkroom.",
            icon: Palette,
            color: "group-hover:text-lime-400",
            glow: "group-hover:shadow-[0_0_50px_-10px_rgba(163,230,53,0.3)]",
            href: "https://unstop.com/events/glow-in-the-dark-painting-udhgam-20-woxsen-university-hyderabad-1624375"
        },
        {
            id: "x3",
            category: "Carnival",
            title: "VR Experience",
            desc: "Virtual Reality. Immersive environments.",
            icon: Atom,
            color: "group-hover:text-purple-400",
            glow: "group-hover:shadow-[0_0_50px_-10px_rgba(192,132,252,0.3)]",
            href: "https://unstop.com/o/VP9quXW?lb=7s3YFcgM&utm_medium=Share&utm_source=udhgahar98676&utm_campaign=Events"
        },
        {
            id: "x4",
            category: "Carnival",
            title: "Slime Booth",
            desc: "Experimental. Hands-on. Creative play.",
            icon: Zap,
            color: "group-hover:text-pink-400",
            glow: "group-hover:shadow-[0_0_50px_-10px_rgba(244,114,182,0.3)]"
        },
        {
            id: "x5",
            category: "Carnival",
            title: "Mystery Room",
            desc: "Logic. Teamwork. Escape the room.",
            icon: Puzzle,
            color: "group-hover:text-red-400",
            glow: "group-hover:shadow-[0_0_50px_-10px_rgba(248,113,113,0.3)]"
        },
        {
            id: "x6",
            category: "Carnival",
            title: "Origami + Math",
            desc: "Geometry. Paper art. Precision design.",
            icon: Layers,
            color: "group-hover:text-orange-400",
            glow: "group-hover:shadow-[0_0_50px_-10px_rgba(251,146,60,0.3)]",
            href: "https://unstop.com/events/origami-math-art-udhgam-20-woxsen-university-hyderabad-1624384"
        },
        {
            id: "x7",
            category: "Carnival",
            title: "Upcycled Fashion",
            desc: "Sustainability. Fashion. Repurposed materials.",
            icon: Scissors,
            color: "group-hover:text-teal-400",
            glow: "group-hover:shadow-[0_0_50px_-10px_rgba(45,212,191,0.3)]",
            href: "https://unstop.com/events/upcycled-sustainability-fashion-show-udhgam-20-woxsen-university-hyderabad-1624359"
        },
        {
            id: "x8",
            category: "Carnival",
            title: "Best Out of Waste",
            desc: "Create. Build. Repurpose discarded materials.",
            icon: Ghost,
            color: "group-hover:text-green-500",
            glow: "group-hover:shadow-[0_0_50px_-10px_rgba(34,197,94,0.3)]",
            href: "https://unstop.com/events/repurpose-best-out-of-waste-udhgam-20-woxsen-university-hyderabad-1623084"
        }
    ];

    const categories = ['All', 'Flagship', 'Technical', 'Speakers', 'Cultural', 'Carnival'];

    const filteredEvents = activeCategory === 'All'
        ? events
        : events.filter(e => e.category === activeCategory);

    return (
        <div className="bg-[#020202] min-h-screen flex flex-col">
            <section className="relative w-full max-w-[1600px] mx-auto pt-20 pb-20 px-6 md:px-12 flex-grow">
                
                {/* --- BACKGROUND --- */}
                <div className="fixed inset-0 z-0 pointer-events-none">
                     <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] opacity-20"></div>
                     <div className="absolute top-0 left-0 w-full h-[500px] bg-linear-to-b from-purple-900/10 to-transparent blur-3xl"></div>
                </div>

                <div className="relative z-10">
                    {/* --- HEADER --- */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
                        <div>
                            <Link to="/" className="group inline-flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-white transition-colors uppercase tracking-widest mb-4">
                                <ArrowUpRight className="rotate-[-135deg] group-hover:-translate-x-1 transition-transform" size={14} /> 
                                Back to Home
                            </Link>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-none text-white">
                                Official<br/>
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-white">Lineup</span>
                            </h1>
                        </div>

                        {/* --- TABS --- */}
                        <div className="flex flex-wrap gap-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-4 py-2 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest border transition-all duration-300
                                        ${activeCategory === cat 
                                            ? 'bg-white text-black border-white' 
                                            : 'bg-transparent text-gray-500 border-white/10 hover:border-white hover:text-white'}
                                    `}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* --- GRID SYSTEM --- */}
                    {/* Collapsed Border Strategy: Container has Top & Left borders. Items have Right & Bottom. */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 border-t border-l border-white/10">
                        {filteredEvents.map((event) => (
                            <div
                                key={event.id}
                                className="group relative bg-[#050505] min-h-[300px] p-8 flex flex-col justify-between border-r border-b border-white/10 hover:bg-[#0a0a0a] transition-colors duration-500"
                            >
                                {/* Hover Glow */}
                                <div className={`absolute top-0 right-0 w-[200px] h-[200px] bg-radial from-current to-transparent opacity-0 group-hover:opacity-20 blur-[60px] transition-opacity duration-700 pointer-events-none translate-x-1/3 -translate-y-1/3 ${event.color}`}></div>

                                {/* Top Content */}
                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-6">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-600 border border-white/10 px-2 py-1 rounded">
                                            {event.category}
                                        </span>
                                        <event.icon size={24} className={`text-gray-600 transition-colors duration-300 ${event.color}`} />
                                    </div>

                                    <h3 className="text-2xl md:text-3xl font-black uppercase leading-none tracking-tight text-white mb-3 group-hover:translate-x-1 transition-transform duration-300">
                                        {event.title}
                                    </h3>
                                    <p className="text-gray-500 text-xs font-medium uppercase tracking-wide leading-5 max-w-[90%]">
                                        {event.desc}
                                    </p>
                                </div>

                                {/* Bottom Action */}
                                <div className="relative z-10 pt-8 mt-auto">
                                    {event.href ? (
                                        <a
                                            href={event.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`group/btn flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-white hover:text-purple-400 transition-colors cursor-pointer`}
                                        >
                                            <span>Register</span>
                                            <ArrowUpRight className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" size={14} />
                                        </a>
                                    ) : (
                                        <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-gray-600 cursor-not-allowed">
                                            <span>On Spot</span>
                                            <Ticket size={14} />
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            <Footer />
        </div>
    );
};

export default AllEventsPage;