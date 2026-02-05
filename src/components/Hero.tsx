// src/components/Hero.tsx
import { MessageCircleMore } from "lucide-react";
import { useState } from "react";

export function Hero() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section
            id="hero"
            className="relative min-h-[calc(100vh-64px)] overflow-hidden bg-white"
        >
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03)_0%,transparent_50%),radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.03)_0%,transparent_50%)]"></div>

            {/* Decorative elements */}
            <div className="absolute top-20 right-10 h-96 w-96 rounded-full bg-gradient-to-br from-blue-100/30 to-transparent blur-3xl"></div>
            <div className="absolute bottom-20 left-10 h-96 w-96 rounded-full bg-gradient-to-br from-purple-100/30 to-transparent blur-3xl"></div>

            <div className="relative mx-auto flex min-h-[calc(100vh-64px)] max-w-7xl flex-col-reverse items-center justify-center gap-16 px-6 py-16 sm:py-20 md:flex-row lg:px-8">
                {/* Left Content */}
                <div className="flex flex-1 flex-col space-y-8 animate-fadeInLeft">
                    {/* Badge */}
                    <div className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-200/80 bg-gradient-to-r from-blue-50 to-indigo-50/50 px-4 py-2 shadow-sm">
                        <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse"></div>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
                            Software Developer
                        </p>
                    </div>

                    {/* Name */}
                    <div className="space-y-4">
                        <h1 className="text-5xl font-black tracking-tight text-slate-900 sm:text-6xl md:text-7xl lg:text-8xl">
                            Nazarii
                            <br />
                            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                Konechnyi
                            </span>
                        </h1>
                        <div className="h-1.5 w-24 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 animate-expandWidth"></div>
                    </div>

                    {/* Description */}
                    <p className="max-w-xl text-lg leading-relaxed text-slate-600 sm:text-xl">
                        Second-year Computer Science student who enjoys full-stack web development.
                        I build small but real projects, experiment with modern web tech, and constantly refine how I write and ship code.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4 pt-2">

                        <button
                            onClick={() => {
                                const el = document.getElementById("contacts");
                                if (el) {
                                    const y = el.getBoundingClientRect().top + window.scrollY - 80;
                                    window.scrollTo({ top: y, behavior: "smooth" });
                                }
                            }}
                            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl border border-blue-500 bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105 active:scale-100"
                        >
                            {/* Shine effect */}
                            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"></div>
                            <MessageCircleMore className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                            <span className="relative">Contact Me</span>
                            <svg className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </button>

                        <a
                            href="/Nazarii_Konechnyi_CV.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl border border-slate-200 bg-white px-8 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition-all duration-300 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50 hover:scale-105 active:scale-100"
                        >
                            {/* Shine effect */}
                            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-slate-100/50 to-transparent transition-transform duration-700 group-hover:translate-x-full"></div>

                            <svg className="relative h-4 w-4 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span className="relative">Download CV</span>
                        </a>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex flex-1 items-center justify-center animate-fadeInRight">
                    <div
                        className="group relative cursor-pointer"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {/* Animated particles that fly out on hover */}
                        <div className="absolute inset-0 pointer-events-none">
                            {/* Particle 1 - top */}
                            <div className={`absolute top-0 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 shadow-lg shadow-blue-500/50 transition-all duration-700 ${isHovered ? 'opacity-100 -translate-y-20 scale-150' : 'opacity-0 translate-y-0 scale-0'}`}></div>

                            {/* Particle 2 - top right */}
                            <div className={`absolute top-8 right-0 h-2 w-2 rounded-full bg-gradient-to-r from-indigo-400 to-indigo-600 shadow-lg shadow-indigo-500/50 transition-all duration-700 delay-75 ${isHovered ? 'opacity-100 translate-x-16 -translate-y-16 scale-150' : 'opacity-0 translate-x-0 translate-y-0 scale-0'}`}></div>

                            {/* Particle 3 - right */}
                            <div className={`absolute top-1/2 right-0 -translate-y-1/2 h-2 w-2 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 shadow-lg shadow-purple-500/50 transition-all duration-700 delay-150 ${isHovered ? 'opacity-100 translate-x-24 scale-150' : 'opacity-0 translate-x-0 scale-0'}`}></div>

                            {/* Particle 4 - bottom right */}
                            <div className={`absolute bottom-8 right-0 h-2 w-2 rounded-full bg-gradient-to-r from-pink-400 to-pink-600 shadow-lg shadow-pink-500/50 transition-all duration-700 delay-200 ${isHovered ? 'opacity-100 translate-x-16 translate-y-16 scale-150' : 'opacity-0 translate-x-0 translate-y-0 scale-0'}`}></div>

                            {/* Particle 5 - bottom */}
                            <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 shadow-lg shadow-blue-500/50 transition-all duration-700 delay-100 ${isHovered ? 'opacity-100 translate-y-20 scale-150' : 'opacity-0 translate-y-0 scale-0'}`}></div>

                            {/* Particle 6 - bottom left */}
                            <div className={`absolute bottom-8 left-0 h-2 w-2 rounded-full bg-gradient-to-r from-indigo-400 to-indigo-600 shadow-lg shadow-indigo-500/50 transition-all duration-700 delay-75 ${isHovered ? 'opacity-100 -translate-x-16 translate-y-16 scale-150' : 'opacity-0 translate-x-0 translate-y-0 scale-0'}`}></div>

                            {/* Particle 7 - left */}
                            <div className={`absolute top-1/2 left-0 -translate-y-1/2 h-2 w-2 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 shadow-lg shadow-purple-500/50 transition-all duration-700 delay-150 ${isHovered ? 'opacity-100 -translate-x-24 scale-150' : 'opacity-0 translate-x-0 scale-0'}`}></div>

                            {/* Particle 8 - top left */}
                            <div className={`absolute top-8 left-0 h-2 w-2 rounded-full bg-gradient-to-r from-pink-400 to-pink-600 shadow-lg shadow-pink-500/50 transition-all duration-700 delay-200 ${isHovered ? 'opacity-100 -translate-x-16 -translate-y-16 scale-150' : 'opacity-0 translate-x-0 translate-y-0 scale-0'}`}></div>
                        </div>

                        {/* Pulsating rings */}
                        <div className={`absolute -inset-8 rounded-full border-2 border-blue-400/30 transition-all duration-700 ${isHovered ? 'scale-110 opacity-0' : 'scale-100 opacity-100'}`}></div>
                        <div className={`absolute -inset-12 rounded-full border-2 border-indigo-400/20 transition-all duration-700 delay-100 ${isHovered ? 'scale-110 opacity-0' : 'scale-100 opacity-100'}`}></div>
                        <div className={`absolute -inset-16 rounded-full border-2 border-purple-400/10 transition-all duration-700 delay-200 ${isHovered ? 'scale-110 opacity-0' : 'scale-100 opacity-100'}`}></div>

                        {/* Main image container with tilt effect */}
                        <div
                            className={`relative h-72 w-72 overflow-hidden rounded-full border-4 border-white shadow-2xl transition-all duration-500 sm:h-80 sm:w-80 md:h-96 md:w-96 ${isHovered
                                ? 'shadow-blue-400/40 scale-105 -rotate-6'
                                : 'shadow-slate-300/50 scale-100 rotate-0'
                                }`}
                        >
                            <img
                                src="/avatar.jpg"
                                alt="Nazarii Konechnyi"
                                className={`h-full w-full object-cover transition-all duration-500 ${isHovered ? 'scale-110 brightness-105' : 'scale-100 brightness-100'
                                    }`}
                            />

                            {/* Animated gradient border that rotates */}
                            <div className={`absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 blur-md transition-opacity duration-500 ${isHovered ? 'opacity-60 animate-spin-slow' : 'opacity-0'}`}></div>
                        </div>

                        {/* Tech stack badges that appear on hover */}
                        <div className={`absolute -right-4 top-1/4 flex flex-col gap-2 transition-all duration-500 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                            <div className="bg-white border border-blue-200 rounded-lg px-3 py-1.5 shadow-lg backdrop-blur-sm">
                                <span className="text-xs font-bold text-blue-600">React</span>
                            </div>
                            <div className="bg-white border border-indigo-200 rounded-lg px-3 py-1.5 shadow-lg backdrop-blur-sm" style={{ transitionDelay: '100ms' }}>
                                <span className="text-xs font-bold text-indigo-600">TypeScript</span>
                            </div>
                            <div className="bg-white border border-purple-200 rounded-lg px-3 py-1.5 shadow-lg backdrop-blur-sm" style={{ transitionDelay: '200ms' }}>
                                <span className="text-xs font-bold text-purple-600">Node.js</span>
                            </div>
                        </div>

                        {/* Emoji that bounces in */}
                        <div className={`absolute -top-8 -right-8 text-5xl transition-all duration-500 ${isHovered ? 'opacity-100 scale-100 rotate-12' : 'opacity-0 scale-0 rotate-0'}`}>
                            ⚡
                        </div>

                        {/* Status indicator */}
                        <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white border border-green-200 rounded-full px-4 py-2 shadow-lg transition-all duration-500 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            <div className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse"></div>
                            <span className="text-xs font-bold text-green-700">Available for work</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom wave decoration */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

            <style>{`
                @keyframes fadeInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes fadeInRight {
                    from {
                        opacity: 0;
                        transform: translateX(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes expandWidth {
                    from {
                        width: 0;
                    }
                    to {
                        width: 6rem;
                    }
                }

                @keyframes spin-slow {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }

                .animate-fadeInLeft {
                    animation: fadeInLeft 0.8s ease-out;
                }

                .animate-fadeInRight {
                    animation: fadeInRight 0.8s ease-out;
                }

                .animate-expandWidth {
                    animation: expandWidth 1.2s ease-out;
                }

                .animate-spin-slow {
                    animation: spin-slow 3s linear infinite;
                }
            `}</style>
        </section>
    );
}