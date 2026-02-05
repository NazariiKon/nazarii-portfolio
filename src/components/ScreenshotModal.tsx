// src/components/ScreenshotModal.tsx
import { useState, useEffect } from "react";

interface Project {
    id: string;
    title: string;
    images: string[];
}

interface ScreenshotModalProps {
    projectId: string;
    projects: Project[];
    onClose: () => void;
}

export function ScreenshotModal({ projectId, projects, onClose }: ScreenshotModalProps) {
    const project = projects.find(p => p.id === projectId);
    const [index, setIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    if (!project) return null;

    const total = project.images.length;

    const prev = () => {
        setIsLoading(true);
        setIndex((i) => (i === 0 ? total - 1 : i - 1));
    };

    const next = () => {
        setIsLoading(true);
        setIndex((i) => (i === total - 1 ? 0 : i + 1));
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [index]);

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 animate-fadeIn"
            onClick={onClose}
        >
            {/* Backdrop with blur */}
            <div className="absolute inset-0 bg-slate-900/95 backdrop-blur-md"></div>

            {/* Decorative gradient blobs */}
            <div className="absolute top-20 left-20 h-96 w-96 rounded-full bg-gradient-to-br from-blue-500/20 to-transparent blur-3xl"></div>
            <div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-gradient-to-br from-purple-500/20 to-transparent blur-3xl"></div>

            {/* Modal Container */}
            <div
                className="relative w-full max-w-6xl h-[90vh] flex flex-col bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden animate-scaleIn"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="relative p-4 sm:p-6 border-b border-slate-200 bg-gradient-to-r from-slate-50 to-white">
                    {/* Gradient line on top */}
                    <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

                    <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                            <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-bold text-lg sm:text-xl shadow-lg shadow-blue-500/30">
                                📸
                            </div>
                            <div className="min-w-0">
                                <h3 className="text-lg sm:text-2xl font-bold text-slate-900 truncate">
                                    {project.title}
                                </h3>
                                <p className="text-xs sm:text-sm text-slate-500">Screenshots Gallery</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                            {/* Counter Badge */}
                            <div className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/50 rounded-full">
                                <span className="text-xs sm:text-sm font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    {index + 1} / {total}
                                </span>
                            </div>

                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="group p-2 sm:p-2.5 hover:bg-slate-100 rounded-xl transition-all duration-200 border border-transparent hover:border-slate-200"
                                aria-label="Close modal"
                            >
                                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600 group-hover:text-slate-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Image Container */}
                <div className="flex-1 relative overflow-hidden bg-slate-50 flex items-center justify-center p-4 sm:p-8">
                    {/* Loading spinner */}
                    {isLoading && (
                        <div className="absolute inset-0 flex items-center justify-center bg-slate-50 z-10">
                            <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
                        </div>
                    )}

                    {/* Image */}
                    <div className="relative w-full h-full flex items-center justify-center group">
                        <img
                            src={project.images[index]}
                            alt={`Screenshot ${index + 1} of ${project.title}`}
                            className="max-w-full max-h-full object-contain rounded-lg transition-all duration-300 group-hover:shadow-blue-500/20"
                            onLoad={() => setIsLoading(false)}
                        />
                    </div>

                    {/* Navigation Arrows */}
                    {total > 1 && (
                        <>
                            <button
                                onClick={prev}
                                className="group absolute left-2 sm:left-6 p-3 sm:p-4 bg-white/95 hover:bg-white border border-slate-200 shadow-xl rounded-xl sm:rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:border-blue-300 active:scale-100"
                                aria-label="Previous screenshot"
                            >
                                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-slate-700 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            <button
                                onClick={next}
                                className="group absolute right-2 sm:right-6 p-3 sm:p-4 bg-white/95 hover:bg-white border border-slate-200 shadow-xl rounded-xl sm:rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:border-blue-300 active:scale-100"
                                aria-label="Next screenshot"
                            >
                                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-slate-700 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </>
                    )}
                </div>

                {/* Thumbnail Navigation */}
                {total > 1 && (
                    <div className="p-4 sm:p-6 border-t border-slate-200 bg-white">
                        <div className="flex justify-center items-center gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-hide">
                            {project.images.map((img, i) => (
                                <button
                                    key={i}
                                    onClick={() => {
                                        setIsLoading(true);
                                        setIndex(i);
                                    }}
                                    className={`group relative flex-shrink-0 transition-all duration-300 rounded-lg overflow-hidden ${i === index
                                        ? "ring-3 ring-blue-500 shadow-lg scale-110"
                                        : "ring-2 ring-slate-200 hover:ring-blue-300 hover:scale-105"
                                        }`}
                                    aria-label={`Go to screenshot ${i + 1}`}
                                >
                                    {/* Thumbnail */}
                                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-slate-100">
                                        <img
                                            src={img}
                                            alt={`Thumbnail ${i + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Active indicator */}
                                    {i === index && (
                                        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent"></div>
                                    )}

                                    {/* Number badge */}
                                    <div className={`absolute top-1 right-1 px-1.5 py-0.5 rounded text-xs font-bold transition-all ${i === index
                                        ? "bg-blue-600 text-white"
                                        : "bg-white/90 text-slate-600 group-hover:bg-blue-100"
                                        }`}>
                                        {i + 1}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Bottom gradient line */}
                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
            </div>

            <style>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                @keyframes scaleIn {
                    from {
                        opacity: 0;
                        transform: scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                .animate-fadeIn {
                    animation: fadeIn 0.2s ease-out;
                }

                .animate-scaleIn {
                    animation: scaleIn 0.3s ease-out;
                }

                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }

                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
}