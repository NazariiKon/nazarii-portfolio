// src/components/JourneySection.tsx
type TimelineType = "work" | "education";

type TimelineItem = {
    id: string;
    type: TimelineType;
    period: string;
    title: string;
    org: string;
    mode?: string;
    bullets: string[];
    links?: { label: string; href: string }[];
};

const items: TimelineItem[] = [
    {
        id: "dcu-bsc",
        type: "education",
        period: "Sep 2024 - May 2028",
        title: "Bachelor's Degree, Computer Science",
        org: "Dublin City University",
        bullets: [
            "Activities: Mixed Martial Arts Club.",
            "First Class Honours (first year).",
        ],
    },
    {
        id: "qqi-cathal-brugha",
        type: "education",
        period: "2023 - 2024",
        title: "QQI Level 5, Computer Systems and Network",
        org: "Cathal Brugha College",
        bullets: [
            "Studied computer systems, networking, and troubleshooting fundamentals.",
        ],
    },
    {
        id: "associate-applied-math-it",
        type: "education",
        period: "Sep 2020 - Jun 2024",
        title: "Associate's Degree, Applied Mathematics (Information Technology)",
        org: "Technical College of National University of Water and Environmental Engineering",
        bullets: [
            "Focused on math/CS foundations and software development basics.",
        ],
    },
    {
        id: "it-step-diploma",
        type: "education",
        period: "Dec 2019 - Jun 2022",
        title: "Diploma in Software Development",
        org: "IT STEP Academy",
        bullets: [
            "Comprehensive program covering OOP, .NET/C#, web development, databases, design patterns, and project management.",
            "Capstone: Online Classifieds Platform (Team Lead).",
        ],
        links: [
            { label: "View Diploma", href: "/IT_STEP.pdf" }
        ],
    },
    {
        id: "honeycomb-internship",
        type: "work",
        period: "Jun 2022 - Sep 2022",
        title: "Full-Stack Developer Intern",
        org: "Honeycomb Software",
        mode: "On-site",
        bullets: [
            "Developed and tested features using React (frontend) and .NET (backend).",
            "Worked in an Agile team: daily stand-ups, sprint planning, code reviews.",
            "Used Git for version control (branches, pull requests, reviews).",
            "Integrated REST APIs to connect frontend components with backend services.",
            "Debugged and fixed 10+ minor bugs to improve module stability.",
        ],
    },
];

const badgeClass = (type: TimelineType) =>
    type === "work"
        ? "bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border-blue-200/50"
        : "bg-gradient-to-r from-purple-50 to-indigo-50 text-purple-700 border-purple-200/50";

const dotClass = (type: TimelineType) =>
    type === "work"
        ? "bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/50"
        : "bg-gradient-to-br from-purple-500 to-indigo-600 shadow-lg shadow-purple-500/50";

const iconClass = (type: TimelineType) =>
    type === "work" ? "💼" : "🎓";

export function Journey() {
    return (
        <section id="journey" className="relative bg-white py-20 sm:py-28 overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_20%,rgba(59,130,246,0.03)_0%,transparent_50%),radial-gradient(circle_at_60%_80%,rgba(139,92,246,0.03)_0%,transparent_50%)]"></div>

            {/* Decorative elements */}
            <div className="absolute top-40 right-20 h-64 w-64 rounded-full bg-gradient-to-br from-blue-100/30 to-transparent blur-3xl"></div>
            <div className="absolute bottom-40 left-20 h-64 w-64 rounded-full bg-gradient-to-br from-purple-100/30 to-transparent blur-3xl"></div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <div className="mb-16 space-y-4 text-center animate-fadeInUp">
                    <div className="inline-flex flex-col items-center">
                        <h2 className="text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl mb-3">
                            My
                            <span className="ml-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                Journey
                            </span>
                        </h2>
                        <div className="h-1 w-32 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 animate-expandWidth"></div>
                    </div>
                    <p className="mx-auto max-w-2xl text-lg text-slate-600 animate-fadeInUp delay-200">
                        Education and experience in chronological order
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative mx-auto max-w-4xl">
                    {/* Vertical line */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-indigo-200 to-purple-200"></div>

                    {/* Timeline items */}
                    <div className="space-y-12">
                        {items.map((item, index) => (
                            <div
                                key={item.id}
                                className="relative pl-20 animate-fadeInUp"
                                style={{ animationDelay: `${0.3 + index * 0.15}s` }}
                            >
                                {/* Timeline dot with icon */}
                                <div className="absolute left-0 top-0 flex items-center justify-center">
                                    <div className={`relative flex h-16 w-16 items-center justify-center rounded-full ${dotClass(item.type)} border-4 border-white transition-all duration-300 hover:scale-110`}>
                                        <span className="text-2xl">{iconClass(item.type)}</span>

                                        {/* Pulse ring */}
                                        <div className={`absolute inset-0 rounded-full ${item.type === "work" ? "bg-blue-400/30" : "bg-purple-400/30"} animate-ping`}></div>
                                    </div>
                                </div>

                                {/* Card */}
                                <div className="group relative rounded-2xl border border-slate-200/80 bg-white/80 backdrop-blur-sm p-6 sm:p-8 shadow-sm transition-all duration-500 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50">
                                    {/* Top gradient line */}
                                    <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                                    {/* Header */}
                                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                                        <div className="min-w-0 flex-1 space-y-3">
                                            {/* Badges */}
                                            <div className="flex flex-wrap items-center gap-2">
                                                <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-bold shadow-sm ${badgeClass(item.type)}`}>
                                                    <span>{iconClass(item.type)}</span>
                                                    {item.type === "work" ? "Work Experience" : "Education"}
                                                </span>
                                                {item.mode && (
                                                    <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
                                                        📍 {item.mode}
                                                    </span>
                                                )}
                                            </div>

                                            {/* Title & Org */}
                                            <div>
                                                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
                                                    {item.title}
                                                </h3>
                                                <p className="mt-1 text-sm sm:text-base font-medium text-slate-600">
                                                    {item.org}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Period */}
                                        <time className="shrink-0 rounded-full border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100/50 px-4 py-2 text-xs sm:text-sm font-semibold text-slate-700 shadow-sm transition-all duration-300 group-hover:border-blue-200 group-hover:from-blue-50 group-hover:to-indigo-50/50 group-hover:text-blue-700">
                                            {item.period}
                                        </time>
                                    </div>

                                    {/* Divider */}
                                    <div className="my-5 h-px bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200"></div>

                                    {/* Bullets */}
                                    <ul className="space-y-3">
                                        {item.bullets.map((bullet, bulletIndex) => (
                                            <li
                                                key={bullet}
                                                className="flex items-start gap-3 text-sm sm:text-base text-slate-600 animate-fadeInLeft"
                                                style={{ animationDelay: `${0.5 + index * 0.15 + bulletIndex * 0.05}s` }}
                                            >
                                                <span className="mt-1.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600"></span>
                                                <span className="leading-relaxed">{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Links */}
                                    {item.links && item.links.length > 0 && (
                                        <div className="mt-6 flex flex-wrap gap-3">
                                            {item.links.map((link) => (
                                                <a
                                                    key={link.href}
                                                    href={link.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="group/link relative inline-flex items-center gap-2 overflow-hidden rounded-xl border border-blue-200/80 bg-gradient-to-r from-blue-50 to-indigo-50/50 px-4 py-2.5 text-sm font-bold text-blue-700 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-200/50 hover:-translate-y-0.5 hover:scale-105"
                                                >
                                                    {/* Shine effect */}
                                                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-500 group-hover/link:translate-x-full"></div>

                                                    {/* Document icon */}
                                                    <svg className="relative h-4 w-4 transition-transform duration-300 group-hover/link:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                    </svg>

                                                    <span className="relative">{link.label}</span>

                                                    {/* Arrow icon */}
                                                    <svg className="relative h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                    </svg>
                                                </a>
                                            ))}
                                        </div>
                                    )}

                                    {/* Bottom corner decoration */}
                                    <div className="absolute bottom-0 right-0 h-24 w-24 overflow-hidden rounded-br-2xl">
                                        <div className="absolute -bottom-12 -right-12 h-24 w-24 rounded-full bg-gradient-to-tl from-blue-100/0 via-indigo-100/0 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:from-blue-100/30 group-hover:via-indigo-100/20"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom decoration */}
                <div className="mt-16 flex justify-center gap-2 animate-fadeIn delay-1500">
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
                        transform: translateX(-10px);
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
                    animation: fadeInLeft 0.4s ease-out forwards;
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

                .delay-1500 {
                    animation-delay: 1.5s;
                }
            `}</style>
        </section>
    );
}