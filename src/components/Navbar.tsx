import { useState, useEffect } from "react";

const sections = [
    { id: "hero", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "journey", label: "My Journey" },
    { id: "contacts", label: "Contacts" },
];

function scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: "smooth" });
}

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 10);

            const ids = ["hero", "projects", "skills", "journey"];
            const margins = 150;
            let current = "hero";
            let minDistance = Number.POSITIVE_INFINITY;

            ids.forEach((id) => {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    const distFromTop = rect.top;
                    if (distFromTop <= margins && distFromTop > -el.offsetHeight) {
                        const candidate = Math.abs(distFromTop);
                        if (candidate < minDistance) {
                            minDistance = candidate;
                            current = id;
                        }
                    }
                }
            });

            setActiveSection(current);
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);


    const handleNavClick = (id: string) => {
        scrollToSection(id);
        setOpen(false);
        setActiveSection(id);
    };

    return (
        <header
            className={`sticky top-0 z-50 border-b transition-all duration-300 ${scrolled
                ? "bg-white/95 backdrop-blur-md border-slate-200 shadow-sm"
                : "bg-white/80 backdrop-blur-sm border-transparent"
                }`}
        >
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
                {/* Logo */}
                <button
                    onClick={() => handleNavClick("hero")}
                    className="group relative text-xl font-black tracking-tight text-slate-900 transition-colors hover:text-blue-600"
                >
                    <span className="relative">
                        Nazarii
                        <span className="ml-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            Konechnyi
                        </span>
                    </span>
                    {/* Underline animation */}
                    <div className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 transition-all duration-300 group-hover:w-full"></div>
                </button>

                {/* Desktop Navigation */}
                <div className="hidden gap-2 sm:flex">
                    {sections.map((section) => (
                        <button
                            key={section.id}
                            onClick={() => handleNavClick(section.id)}
                            className={`group relative overflow-hidden rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${activeSection === section.id
                                ? "bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700"
                                : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                                }`}
                        >
                            {/* Shine effect */}
                            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-500 group-hover:translate-x-full"></div>

                            <span className="relative">{section.label}</span>

                            {/* Active indicator */}
                            {activeSection === section.id && (
                                <div className="absolute bottom-0 left-1/2 h-0.5 w-8 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
                            )}
                        </button>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="group relative inline-flex items-center justify-center rounded-lg p-2.5 text-slate-700 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-700 sm:hidden"
                    onClick={() => setOpen((prev) => !prev)}
                    aria-label="Toggle navigation"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className={`h-6 w-6 transition-transform duration-300 ${open ? "rotate-90" : ""
                            }`}
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        {open ? (
                            <path
                                d="M6 18L18 6M6 6l12 12"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        ) : (
                            <path
                                d="M4 7h16M4 12h16M4 17h16"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        )}
                    </svg>
                </button>
            </nav>

            {/* Mobile Menu */}
            {open && (
                <div className="animate-slideDown border-t border-slate-200 bg-white shadow-lg sm:hidden">
                    <div className="mx-auto flex max-w-7xl flex-col space-y-1 px-6 py-4">
                        {sections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => handleNavClick(section.id)}
                                className={`group relative overflow-hidden rounded-lg px-4 py-3 text-left text-sm font-semibold transition-all duration-300 ${activeSection === section.id
                                    ? "bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700"
                                    : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                                    }`}
                            >
                                {/* Shine effect */}
                                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-500 group-hover:translate-x-full"></div>

                                <span className="relative flex items-center gap-3">
                                    {activeSection === section.id && (
                                        <div className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 animate-pulse"></div>
                                    )}
                                    {section.label}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            )}

            <style>{`
                @keyframes slideDown {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-slideDown {
                    animation: slideDown 0.3s ease-out;
                }
            `}</style>
        </header>
    );
}