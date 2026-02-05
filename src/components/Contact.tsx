// src/components/Contact.tsx
export function Contact() {
    const email = "nazar.konechniy2@gmail.com";
    const whatsappNumber = "353879644297";
    const whatsappLink = `https://wa.me/${whatsappNumber}`;

    const handleEmailClick = () => {
        window.location.href = `mailto:${email}`;
    };

    return (
        <section id="contacts" className="relative bg-white py-20 sm:py-28 overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03)_0%,transparent_50%),radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.03)_0%,transparent_50%)]"></div>

            {/* Decorative elements */}
            <div className="absolute top-20 right-10 h-96 w-96 rounded-full bg-gradient-to-br from-blue-100/30 to-transparent blur-3xl"></div>
            <div className="absolute bottom-20 left-10 h-96 w-96 rounded-full bg-gradient-to-br from-purple-100/30 to-transparent blur-3xl"></div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <div className="mb-16 space-y-4 text-center animate-fadeInUp">
                    <div className="inline-flex flex-col items-center">
                        <h2 className="text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl mb-3">
                            Get In
                            <span className="ml-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                Touch
                            </span>
                        </h2>
                        <div className="h-1 w-32 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 animate-expandWidth"></div>
                    </div>
                    <p className="mx-auto max-w-2xl text-lg text-slate-600 animate-fadeInUp delay-200">
                        Let's connect! Feel free to reach out via email or WhatsApp
                    </p>
                </div>

                {/* Contact Cards */}
                <div className="mx-auto max-w-4xl grid gap-8 sm:grid-cols-2">
                    {/* Email Card */}
                    <div
                        className="group relative rounded-2xl border border-slate-200/80 bg-white/80 backdrop-blur-sm p-8 shadow-sm transition-all duration-500 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50 hover:-translate-y-2 animate-fadeInLeft"
                        style={{ animationDelay: '0.3s' }}
                    >
                        {/* Top gradient line */}
                        <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                        {/* Icon */}
                        <div className="mb-6 inline-flex">
                            <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/50 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                {/* Pulse ring */}
                                <div className="absolute inset-0 rounded-2xl bg-blue-400/30 animate-ping"></div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
                                Email Me
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                Send me an email and I'll get back to you as soon as possible.
                            </p>

                            {/* Email display */}
                            <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">
                                <span>📧</span>
                                <span>{email}</span>
                            </div>

                            {/* Button */}
                            <button
                                onClick={handleEmailClick}
                                className="group/btn relative w-full inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl border border-blue-500 bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105 active:scale-100 mt-2"
                            >
                                {/* Shine effect */}
                                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full"></div>

                                <span className="relative">Open Email Client</span>
                                <svg className="relative h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </button>
                        </div>

                        {/* Bottom corner decoration */}
                        <div className="absolute bottom-0 right-0 h-24 w-24 overflow-hidden rounded-br-2xl">
                            <div className="absolute -bottom-12 -right-12 h-24 w-24 rounded-full bg-gradient-to-tl from-blue-100/0 via-indigo-100/0 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:from-blue-100/30 group-hover:via-indigo-100/20"></div>
                        </div>
                    </div>

                    {/* WhatsApp Card */}
                    <div
                        className="group relative rounded-2xl border border-slate-200/80 bg-white/80 backdrop-blur-sm p-8 shadow-sm transition-all duration-500 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-100/50 hover:-translate-y-2 animate-fadeInRight"
                        style={{ animationDelay: '0.3s' }}
                    >
                        {/* Top gradient line */}
                        <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                        {/* Icon */}
                        <div className="mb-6 inline-flex">
                            <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 shadow-lg shadow-purple-500/50 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                                <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                                {/* Pulse ring */}
                                <div className="absolute inset-0 rounded-2xl bg-purple-400/30 animate-ping"></div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-purple-600">
                                WhatsApp Me
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                Start a conversation on WhatsApp for quick and easy communication.
                            </p>

                            {/* Phone display */}
                            <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">
                                <span>📱</span>
                                <span>+{whatsappNumber}</span>
                            </div>

                            {/* Button */}
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/btn relative w-full inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl border border-purple-500 bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-purple-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/40 hover:scale-105 active:scale-100 mt-2"
                            >
                                {/* Shine effect */}
                                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full"></div>

                                <span className="relative">Open WhatsApp</span>
                                <svg className="relative h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </a>
                        </div>

                        {/* Bottom corner decoration */}
                        <div className="absolute bottom-0 right-0 h-24 w-24 overflow-hidden rounded-br-2xl">
                            <div className="absolute -bottom-12 -right-12 h-24 w-24 rounded-full bg-gradient-to-tl from-purple-100/0 via-indigo-100/0 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:from-purple-100/30 group-hover:via-indigo-100/20"></div>
                        </div>
                    </div>
                </div>

                {/* Social Links (Optional) */}
                <div className="mt-16 text-center animate-fadeInUp delay-600">
                    <p className="text-sm text-slate-500 mb-4">Or connect with me on social media</p>
                    <div className="flex justify-center gap-4">
                        <a
                            href="https://www.linkedin.com/in/nazariik/"
                            className="group flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100/50 hover:-translate-y-1"
                        >
                            <svg className="h-5 w-5 text-slate-600 transition-colors duration-300 group-hover:text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>

                        {/* GitHub placeholder - add your link */}
                        <a
                            href="https://github.com/NazariiKon"
                            className="group flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-slate-400 hover:shadow-lg hover:shadow-slate-200/50 hover:-translate-y-1"
                        >
                            <svg className="h-5 w-5 text-slate-600 transition-colors duration-300 group-hover:text-slate-900" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Bottom decoration */}
                <div className="mt-16 flex justify-center gap-2 animate-fadeIn delay-800">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse"></div>
                    <div className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="h-1.5 w-1.5 rounded-full bg-purple-400 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
            </div>

            <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

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

                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                @keyframes expandWidth {
                    from {
                        width: 0;
                    }
                    to {
                        width: 8rem;
                    }
                }

                .animate-fadeInUp {
                    animation: fadeInUp 0.6s ease-out forwards;
                    opacity: 0;
                }

                .animate-fadeInLeft {
                    animation: fadeInLeft 0.8s ease-out forwards;
                    opacity: 0;
                }

                .animate-fadeInRight {
                    animation: fadeInRight 0.8s ease-out forwards;
                    opacity: 0;
                }

                .animate-fadeIn {
                    animation: fadeIn 0.8s ease-out forwards;
                    opacity: 0;
                }

                .animate-expandWidth {
                    animation: expandWidth 1s ease-out;
                }

                .delay-200 {
                    animation-delay: 0.2s;
                }

                .delay-600 {
                    animation-delay: 0.6s;
                }

                .delay-800 {
                    animation-delay: 0.8s;
                }
            `}</style>
        </section>
    );
}