// src/components/ProjectCard.tsx
import { useState } from "react";
import type { Project } from "./Projects";

interface ProjectCardProps {
    project: Project;
    onOpenScreenshots: (projectId: string) => void;
}

export function ProjectCard({ project, onOpenScreenshots }: ProjectCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="group relative rounded-2xl border border-slate-200/80 bg-white/80 backdrop-blur-sm p-8 shadow-sm transition-all duration-500 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-100/50"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Top gradient line */}
            <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

            {/* Gradient glow effect */}
            <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-500/0 via-indigo-500/0 to-purple-500/0 opacity-0 blur transition-opacity duration-500 ${isHovered ? 'opacity-30' : ''}`}></div>

            <div className="relative space-y-6">
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0 flex-1 space-y-2">
                        <h3 className="text-2xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
                            {project.title}
                        </h3>
                        <p className="text-sm font-medium text-slate-600">{project.subtitle}</p>
                    </div>

                    <time className="shrink-0 rounded-full border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100/50 px-4 py-1.5 text-xs font-semibold text-slate-700 shadow-sm transition-all duration-300 group-hover:border-blue-200 group-hover:from-blue-50 group-hover:to-indigo-50/50 group-hover:text-blue-700">
                        {project.period}
                    </time>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200"></div>

                {/* Description */}
                <p className="text-sm leading-relaxed text-slate-600">
                    {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                        <span
                            key={tech}
                            className="group/tech relative overflow-hidden rounded-lg border border-blue-200/50 bg-gradient-to-br from-blue-50 to-indigo-50/50 px-3 py-1.5 text-xs font-semibold text-blue-700 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-md hover:shadow-blue-100/50 hover:-translate-y-0.5 animate-[fadeInScale_0.4s_ease-out_both]"
                            style={{ animationDelay: `${index * 0.03}s` }}
                        >
                            {/* Shine effect */}
                            <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-500 group-hover/tech:translate-x-[100%]"></div>
                            <span className="relative">{tech}</span>
                        </span>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                    <div className="flex flex-wrap gap-3">
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/btn relative inline-flex items-center gap-2 overflow-hidden rounded-xl border border-blue-200 bg-gradient-to-r from-blue-50 to-blue-100/50 px-5 py-2.5 text-sm font-semibold text-blue-700 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-200/50 hover:-translate-y-0.5 active:translate-y-0"
                            >
                                {/* Shine effect */}
                                <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-500 group-hover/btn:translate-x-[100%]"></div>

                                <svg className="relative h-4 w-4 transition-transform duration-300 group-hover/btn:scale-110 group-hover/btn:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                </svg>
                                <span className="relative">Live Demo</span>
                            </a>
                        )}

                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/btn relative inline-flex items-center gap-2 overflow-hidden rounded-xl border border-slate-200 bg-gradient-to-r from-slate-50 to-slate-100/50 px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50 hover:-translate-y-0.5 active:translate-y-0"
                            >
                                {/* Shine effect */}
                                <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-500 group-hover/btn:translate-x-[100%]"></div>

                                <svg className="relative h-4 w-4 transition-transform duration-300 group-hover/btn:scale-110" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.643.105-3.372 0 0 1.05-.336 3.44 1.28 1-.28 2.07-.414 3.13-.42 1.06.006 2.13.14 3.13.42 2.39-1.616 3.445-1.28 3.445-1.28.645 1.729.24 3.069.12 3.372.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                </svg>
                                <span className="relative">View Code</span>
                            </a>
                        )}
                    </div>

                    {project.images.length > 0 && (
                        <button
                            onClick={() => onOpenScreenshots(project.id)}
                            className="group/btn relative inline-flex items-center gap-2.5 overflow-hidden rounded-xl border border-purple-200 bg-gradient-to-r from-purple-50 via-indigo-50/80 to-purple-50 px-5 py-2.5 text-sm font-bold text-purple-700 shadow-sm transition-all duration-300 hover:border-purple-300 hover:shadow-lg hover:shadow-purple-200/50 hover:scale-105 active:scale-100"
                        >
                            {/* Animated gradient background */}
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-100/0 via-indigo-100/50 to-purple-100/0 opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100"></div>

                            {/* Shine effect */}
                            <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/60 to-transparent transition-transform duration-500 group-hover/btn:translate-x-[100%]"></div>

                            <span className="relative text-xl transition-transform duration-300 group-hover/btn:scale-110">📸</span>
                            <span className="relative">
                                {project.images.length} screenshot{project.images.length > 1 ? 's' : ''}
                            </span>

                            {/* Sparkle effect */}
                            <div className="absolute top-1 right-1 h-2 w-2 rounded-full bg-purple-400/0 transition-all duration-300 group-hover/btn:bg-purple-400/60 group-hover/btn:animate-ping"></div>
                        </button>
                    )}
                </div>
            </div>

            {/* Bottom corner decoration */}
            <div className="absolute bottom-0 right-0 h-32 w-32 overflow-hidden rounded-br-2xl">
                <div className="absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-gradient-to-tl from-blue-100/0 via-indigo-100/0 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:from-blue-100/30 group-hover:via-indigo-100/20"></div>
            </div>

            <style>{`
                @keyframes fadeInScale {
                    from {
                        opacity: 0;
                        transform: scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
            `}</style>
        </div>
    );
}