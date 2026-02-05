// src/components/SkillsSection.tsx
import { useState } from "react";
import type { ComponentType } from "react";
import {
    SiJavascript,
    SiTypescript,
    SiPython,
    SiSharp,
    SiC,
    SiCplusplus,
    SiReact,
    SiRedux,
    SiReactrouter,
    SiHtml5,
    SiCss3,
    SiTailwindcss,
    SiBootstrap,
    SiDotnet,
    SiFastapi,
    SiDjango,
    SiJson,
    SiPostgresql,
    SiSupabase,
    SiMysql,
    SiGit,
    SiGithub,
    SiDocker,
    SiLinux,
    SiVercel,
    SiPostman,
    SiGithubactions,
    SiAmazon,
    SiSwagger,
    SiJsonwebtokens,
} from "react-icons/si";
import {
    TbComponents,
    TbApi,
    TbSql,
    TbDatabase,
    TbShieldLock,
    TbCookie,
    TbArrowsShuffle,
    TbDeviceMobile,
    TbAccessible,
    TbCube,
    TbUsersGroup,
    TbBug,
    TbChecklist,
} from "react-icons/tb";

type Skill = { name: string; Icon: ComponentType<{ className?: string }> };
type SkillGroup = { title: string; subtitle: string; skills: Skill[] };

const groups: SkillGroup[] = [
    {
        title: "Programming Languages",
        subtitle: "Languages I use across web and backend development",
        skills: [
            { name: "JavaScript (ES6+)", Icon: SiJavascript },
            { name: "TypeScript", Icon: SiTypescript },
            { name: "Python", Icon: SiPython },
            { name: "C#", Icon: SiSharp },
            { name: "C", Icon: SiC },
            { name: "C++", Icon: SiCplusplus },
        ],
    },
    {
        title: "Frontend",
        subtitle: "UI, routing, state management, styling",
        skills: [
            { name: "React", Icon: SiReact },
            { name: "Redux", Icon: SiRedux },
            { name: "React Router", Icon: SiReactrouter },
            { name: "HTML5", Icon: SiHtml5 },
            { name: "CSS3", Icon: SiCss3 },
            { name: "TailwindCSS", Icon: SiTailwindcss },
            { name: "Bootstrap", Icon: SiBootstrap },
            { name: "shadcn/ui", Icon: TbComponents },
        ],
    },
    {
        title: "Backend & APIs",
        subtitle: "Frameworks, API design, and data formats",
        skills: [
            { name: "ASP.NET Core", Icon: SiDotnet },
            { name: ".NET", Icon: SiDotnet },
            { name: "FastAPI", Icon: SiFastapi },
            { name: "Django", Icon: SiDjango },
            { name: "REST API design", Icon: TbApi },
            { name: "JSON", Icon: SiJson },
            { name: "Swagger / OpenAPI", Icon: SiSwagger },
        ],
    },
    {
        title: "Databases",
        subtitle: "Relational DBs, SQL, and data access patterns",
        skills: [
            { name: "PostgreSQL", Icon: SiPostgresql },
            { name: "Supabase", Icon: SiSupabase },
            { name: "MySQL", Icon: SiMysql },
            { name: "SQL", Icon: TbSql },
            { name: "ORM", Icon: TbDatabase },
        ],
    },
    {
        title: "DevOps & Tools",
        subtitle: "Shipping, environments, and developer tooling",
        skills: [
            { name: "Git", Icon: SiGit },
            { name: "GitHub", Icon: SiGithub },
            { name: "Docker", Icon: SiDocker },
            { name: "Linux", Icon: SiLinux },
            { name: "Vercel", Icon: SiVercel },
            { name: "Render", Icon: TbApi },
            { name: "Postman", Icon: SiPostman },
            { name: "CI/CD", Icon: SiGithubactions },
            { name: "AWS/Azure", Icon: SiAmazon }
        ],
    },
    {
        title: "Web & Software Engineering",
        subtitle: "Core concepts and best practices",
        skills: [
            { name: "Authentication & Authorization", Icon: TbShieldLock },
            { name: "JWT", Icon: SiJsonwebtokens },
            { name: "Cookies", Icon: TbCookie },
            { name: "CORS", Icon: TbArrowsShuffle },
            { name: "Responsive Design", Icon: TbDeviceMobile },
            { name: "Accessibility", Icon: TbAccessible },
            { name: "OOP", Icon: TbCube },
            { name: "Agile / Scrum", Icon: TbUsersGroup },
            { name: "Testing & Debugging", Icon: TbBug },
            { name: "Debugging checklists", Icon: TbChecklist },
        ],
    },
];

function SkillTile({ name, Icon }: Skill) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="group relative rounded-xl border border-slate-200 bg-gradient-to-br from-white to-slate-50/50 p-4 transition-all duration-300 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100/50 hover:-translate-y-1"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-50/0 via-indigo-50/0 to-purple-50/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:from-blue-50/40 group-hover:via-indigo-50/30 group-hover:to-purple-50/40"></div>

            {/* Shine effect */}
            <div className="absolute inset-0 overflow-hidden rounded-xl">
                <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-[100%]"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center gap-3">
                <div className="relative">
                    {/* Icon glow */}
                    <div className={`absolute inset-0 rounded-lg bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-lg transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>

                    {/* Icon container */}
                    <div className="relative flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-slate-100 to-slate-200/80 transition-all duration-300 group-hover:from-blue-100 group-hover:to-indigo-100 group-hover:scale-110 group-hover:rotate-3">
                        <Icon className="h-7 w-7 text-slate-700 transition-colors duration-300 group-hover:text-blue-600" />
                    </div>
                </div>

                <div className="text-center text-xs font-semibold text-slate-700 transition-colors duration-300 group-hover:text-slate-900">
                    {name}
                </div>
            </div>

            {/* Corner accent */}
            <div className="absolute top-0 right-0 h-8 w-8 overflow-hidden rounded-tr-xl">
                <div className="absolute -top-4 -right-4 h-8 w-8 rotate-45 bg-gradient-to-br from-blue-400/0 to-blue-400/0 transition-all duration-300 group-hover:from-blue-400/20 group-hover:to-purple-400/20"></div>
            </div>
        </div>
    );
}

export function Skills() {
    return (
        <section id="skills" className="relative bg-white py-20 sm:py-28 overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.03)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(139,92,246,0.03)_0%,transparent_50%)]"></div>

            {/* Decorative elements */}
            <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-gradient-to-br from-blue-100/30 to-transparent blur-3xl"></div>
            <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-gradient-to-br from-purple-100/30 to-transparent blur-3xl"></div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <div className="mb-16 space-y-4 text-center animate-[fadeInUp_0.6s_ease-out]">
                    <div className="inline-flex flex-col items-center">
                        <h2 className="text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl mb-3">
                            Technical
                            <span className="ml-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                Skills
                            </span>
                        </h2>
                        <div className="h-1 w-32 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 animate-[expandWidth_1s_ease-out]"></div>
                    </div>
                    {/* <p className="mx-auto max-w-2xl text-lg text-slate-600 animate-[fadeInUp_0.6s_ease-out_0.2s_both]">
                        A comprehensive overview of the tools and concepts I use in full-stack development
                    </p> */}
                </div>

                {/* Skills Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
                    {groups.map((group, groupIndex) => (
                        <div
                            key={group.title}
                            className="group relative animate-[fadeInUp_0.6s_ease-out_both]"
                            style={{ animationDelay: `${0.3 + groupIndex * 0.1}s` }}
                        >
                            {/* Card */}
                            <div className="relative h-full rounded-2xl border border-slate-200/80 bg-white/80 backdrop-blur-sm p-8 shadow-sm transition-all duration-500 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50">
                                {/* Top gradient line */}
                                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                                {/* Header */}
                                <div className="mb-6 space-y-2">
                                    <h3 className="text-2xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
                                        {group.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed text-slate-600">
                                        {group.subtitle}
                                    </p>
                                </div>

                                {/* Divider */}
                                <div className="mb-6 h-px bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200"></div>

                                {/* Skills Grid */}
                                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                                    {group.skills.map((skill, skillIndex) => (
                                        <div
                                            key={skill.name}
                                            className="animate-[fadeInScale_0.5s_ease-out_both]"
                                            style={{ animationDelay: `${0.5 + groupIndex * 0.1 + skillIndex * 0.03}s` }}
                                        >
                                            <SkillTile name={skill.name} Icon={skill.Icon} />
                                        </div>
                                    ))}
                                </div>

                                {/* Bottom corner decoration */}
                                <div className="absolute bottom-0 right-0 h-24 w-24 overflow-hidden rounded-br-2xl">
                                    <div className="absolute -bottom-12 -right-12 h-24 w-24 rounded-full bg-gradient-to-tl from-blue-100/0 via-indigo-100/0 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:from-blue-100/40 group-hover:via-indigo-100/30"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom decoration */}
                <div className="mt-16 flex justify-center gap-2 animate-[fadeIn_0.8s_ease-out_1.5s_both] select-none">
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

                @keyframes fadeInScale {
                    from {
                        opacity: 0;
                        transform: scale(0.9);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
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
            `}</style>
        </section>
    );
}