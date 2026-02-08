// src/components/Honors.tsx
type Award = {
    id: string;
    title: string;
    date: string;
    organization: string;
    prize?: string;
    description: string;
    link?: { label: string; href: string };
};

const awards: Award[] = [
    {
        id: "datalex-2025",
        title: "The Datalex \"Best Project\" Award 2025",
        date: "May 2025",
        organization: "Dublin City University",
        prize: "€2,500",
        description: "Winner of the Datalex Best DIME Project Award for our digital innovation project in the first-year Digital Innovation Management & Enterprise (DIME) module. Selected from 44 competing projects for outstanding work across poster, report, orals, and website development.",
        link: {
            label: "Read More",
            href: "https://www.dcu.ie/computing/news/2025/may/datalex-dcu-best-dime-project-award"
        }
    },
];

export function Honors() {
    return (
        <section id="honors" className="relative bg-white py-20 sm:py-28 overflow-hidden">
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
                            Honors &
                            <span className="ml-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                Awards
                            </span>
                        </h2>
                        <div className="h-1 w-32 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 animate-expandWidth"></div>
                    </div>
                    <p className="mx-auto max-w-2xl text-lg text-slate-600 animate-fadeInUp delay-200">
                        Recognition for outstanding work and achievements
                    </p>
                </div>

                {/* Awards Grid */}
                <div className="mx-auto max-w-4xl space-y-8">
                    {awards.map((award, index) => (
                        <div
                            key={award.id}
                            className="group relative animate-fadeInUp"
                            style={{ animationDelay: `${0.3 + index * 0.15}s` }}
                        >
                            {/* Main Card */}
                            <div className="relative rounded-2xl border border-slate-200/80 bg-white/80 backdrop-blur-sm p-8 sm:p-10 shadow-sm transition-all duration-500 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-100/50 hover:-translate-y-2">
                                {/* Top gradient line */}
                                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                                {/* Trophy Icon - Floating on the side */}
                                <div className="absolute -left-6 top-8 hidden sm:flex">
                                    <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-600 shadow-xl shadow-yellow-500/50 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                                        <span className="text-4xl">🏆</span>
                                        {/* Pulse ring */}
                                        <div className="absolute inset-0 rounded-2xl bg-yellow-400/30 animate-ping"></div>
                                        {/* Shine effect */}
                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                                    </div>
                                </div>

                                {/* Mobile Trophy */}
                                <div className="mb-6 inline-flex sm:hidden">
                                    <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-600 shadow-lg shadow-yellow-500/50">
                                        <span className="text-3xl">🏆</span>
                                        <div className="absolute inset-0 rounded-2xl bg-yellow-400/30 animate-ping"></div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="space-y-5 sm:pl-16">
                                    {/* Header with Prize Badge */}
                                    <div className="flex flex-wrap items-start justify-between gap-4">
                                        <div className="flex-1 space-y-3">
                                            {/* Title */}
                                            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
                                                {award.title}
                                            </h3>

                                            {/* Organization & Date */}
                                            <div className="flex flex-wrap items-center gap-3">
                                                <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-200/80 bg-gradient-to-r from-purple-50 to-indigo-50/50 px-3 py-1.5 text-xs font-bold text-purple-700 shadow-sm">
                                                    <span>🎓</span>
                                                    {award.organization}
                                                </span>
                                                <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-600">
                                                    <span>📅</span>
                                                    {award.date}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Prize Badge */}
                                        {award.prize && (
                                            <div className="shrink-0">
                                                <div className="relative inline-flex items-center gap-2 overflow-hidden rounded-xl border-2 border-yellow-400/80 bg-gradient-to-br from-yellow-50 via-amber-50 to-yellow-100 px-5 py-3 shadow-lg shadow-yellow-500/20 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-yellow-500/30 group-hover:scale-105">
                                                    {/* Shine effect */}
                                                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 group-hover:translate-x-full"></div>

                                                    <span className="relative text-2xl">💰</span>
                                                    <span className="relative text-xl font-black text-yellow-700">{award.prize}</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Divider */}
                                    <div className="h-px bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200"></div>

                                    {/* Description */}
                                    <p className="text-base sm:text-lg leading-relaxed text-slate-600">
                                        {award.description}
                                    </p>

                                    {/* Stats/Highlights */}
                                    <div className="flex flex-wrap gap-4 pt-2">
                                        <div className="inline-flex items-center gap-2 rounded-xl border border-blue-100 bg-blue-50/50 px-4 py-2">
                                            <span className="text-lg">🎯</span>
                                            <div className="text-left">
                                                <p className="text-xs font-medium text-blue-600">Competing Projects</p>
                                                <p className="text-lg font-bold text-blue-700">44</p>
                                            </div>
                                        </div>
                                        <div className="inline-flex items-center gap-2 rounded-xl border border-indigo-100 bg-indigo-50/50 px-4 py-2">
                                            <span className="text-lg">⭐</span>
                                            <div className="text-left">
                                                <p className="text-xs font-medium text-indigo-600">Selection</p>
                                                <p className="text-lg font-bold text-indigo-700">Winner</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Link */}
                                    {award.link && (
                                        <div className="pt-2">
                                            <a
                                                href={award.link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group/link relative inline-flex items-center gap-2 overflow-hidden rounded-xl border border-blue-200/80 bg-gradient-to-r from-blue-50 to-indigo-50/50 px-5 py-3 text-sm font-bold text-blue-700 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-200/50 hover:-translate-y-0.5 hover:scale-105"
                                            >
                                                {/* Shine effect */}
                                                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-500 group-hover/link:translate-x-full"></div>

                                                {/* Link icon */}
                                                <svg className="relative h-4 w-4 transition-transform duration-300 group-hover/link:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                                </svg>

                                                <span className="relative">{award.link.label}</span>

                                                {/* Arrow icon */}
                                                <svg className="relative h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </a>
                                        </div>
                                    )}
                                </div>

                                {/* Bottom corner decoration */}
                                <div className="absolute bottom-0 right-0 h-32 w-32 overflow-hidden rounded-br-2xl">
                                    <div className="absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-gradient-to-tl from-blue-100/0 via-yellow-100/0 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:from-yellow-100/40 group-hover:via-blue-100/20"></div>
                                </div>

                                {/* Confetti particles on hover */}
                                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                                    <div className={`absolute top-1/4 left-1/4 h-2 w-2 rounded-full bg-yellow-400 opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:-translate-y-8 group-hover:translate-x-4`}></div>
                                    <div className={`absolute top-1/3 right-1/4 h-1.5 w-1.5 rounded-full bg-blue-400 opacity-0 transition-all duration-700 delay-75 group-hover:opacity-100 group-hover:-translate-y-12 group-hover:-translate-x-6`}></div>
                                    <div className={`absolute top-1/2 left-1/3 h-2 w-2 rounded-full bg-purple-400 opacity-0 transition-all duration-700 delay-150 group-hover:opacity-100 group-hover:translate-y-8 group-hover:-translate-x-4`}></div>
                                    <div className={`absolute bottom-1/4 right-1/3 h-1.5 w-1.5 rounded-full bg-indigo-400 opacity-0 transition-all duration-700 delay-100 group-hover:opacity-100 group-hover:translate-y-10 group-hover:translate-x-8`}></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom decoration */}
                <div className="mt-16 flex justify-center gap-2 animate-fadeIn delay-600">
                    <div className="h-1.5 w-1.5 rounded-full bg-yellow-400 animate-pulse"></div>
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
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
            `}</style>
        </section>
    );
}