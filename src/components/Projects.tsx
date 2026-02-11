// src/components/ProjectsSection.tsx
import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { PROJECTS_IMAGES } from "../projects-images";
import { ScreenshotModal } from "./ScreenshotModal";

export interface Project {
    id: string;
    title: string;
    period: string;
    subtitle: string;
    description: string;
    tech: string[];
    liveUrl?: string;
    githubUrl?: string;
    images: string[];
}

const projects: Project[] = [
    {
        id: "menu-plus",
        title: "Menu+",
        period: "Jan 2026 - Present",
        subtitle: "QR Menu Builder & Ordering System",
        description:
            "Full-stack QR menu CMS for small venues that replaces paper menus with dynamic QR codes. Venue owners manage venues, categories, items, prices, and photos in an admin panel and instantly publish changes via printable/downloadable QR codes. Guests open a mobile-first menu, add items to a cart, and share a pre-filled order via WhatsApp, cutting waiter time and printing costs.",
        tech: ["React", "Next.js", "TypeScript", "FastAPI", "Supabase", "TailwindCSS", "shadcn/ui"],
        liveUrl: "https://menu-plus-client.vercel.app/",
        githubUrl: "https://github.com/NazariiKon/menu-plus",
        images: PROJECTS_IMAGES.menu,
    },
    {
        id: "jobsdublin",
        title: "JobsDublin.ie",
        period: "Jul - Sep 2025",
        subtitle: "Irish Job Board Platform",
        description:
            "Full-stack job board tailored for Ireland's market, inspired by Indeed. Job seekers search by keyword/location, view details, log in via Google/email, upload CVs (drag-and-drop with preview), and apply seamlessly. Employers manage company profiles, post/edit vacancies, review applicants/CVs in a dashboard, and approve/reject with pagination & search — streamlining local hiring for Dublin & beyond.",
        tech: ["React", "TypeScript", "Vite", "Redux", "TailwindCSS", "FastAPI", "PostgreSQL", "Google OAuth", "Docker"],
        liveUrl: "https://jobsdublin.onrender.com/",
        githubUrl: "https://github.com/NazariiKon/jobsdublin.ie",
        images: PROJECTS_IMAGES.jobsdublin,
    },
    {
        id: "classifieds",
        title: "Online Classifieds Platform",
        period: "Jun - Sep 2022",
        subtitle: "Classifieds Marketplace (Team Lead)",
        description:
            "Led 4-developer team in building a full-featured classifieds marketplace. Users register/login (JWT/Google OAuth), post ads with images, filter by category/subcategory/user, add to cart, and create orders. Features VIP ads, password reset, hierarchical categories; I focused on backend API design, Entity Framework data model, and Swagger docs.",
        tech: ["ASP.NET Core", "Entity Framework Core", "SQLite", "JWT Auth", "Google OAuth", "Swagger", "React", "PrimeReact"],
        githubUrl: "https://github.com/NazariiKon/DiplomnaOLX",
        images: PROJECTS_IMAGES.diploma,
    },
    {
        id: "college-reception",
        title: "College Reception",
        period: "Apr 2023",
        subtitle: "WinForms Student Management System",
        description: "Desktop app for college reception: main table with JOINed student data (name, major, passport, education, graduation, awards), full-text search across all 6 fields, add new students form. Double-click opens exam details with streams by speciality, exam dates, and automatic grade display",
        tech: ["C#", ".NET 6", "WinForms", "SQLite", "DataGridView", "Entity Framework Core"],
        githubUrl: "https://github.com/NazariiKon/college-reception-WF-SQLite",
        images: PROJECTS_IMAGES.collegeReception,
    },
    {
        id: "slingshot-castle-siege",
        title: "Slingshot Castle Siege",
        period: "Jun 2022",
        subtitle: "Angry Birds-style Physics Game",
        description: "Unity 3D physics game with slingshot mechanics: drag-to-aim system launches destructible projectiles at layered castle structures across 2 levels. Real-time Rigidbody collisions cause chain destruction reactions, level progression with snapshot UI, and win condition when castles fully collapse.",
        tech: ["Unity 3D", "C#", "Rigidbody Physics", "UI Canvas", "Particle Systems"],
        githubUrl: "https://github.com/NazariiKon/Castle",
        images: PROJECTS_IMAGES.castle,
    },
    {
        id: "memory-match-game",
        title: "Memory Match Game",
        period: "May 2022",
        subtitle: "College WPF project",
        description: "WPF desktop game: flip cards to reveal animal images, match pairs, timer runs in real time, 6x4 grid, 12 pairs total. Start screen, gameplay with auto timer, and end state when all pairs are matched.",
        tech: ["C#", ".NET Framework", "WPF", "XAML Grid layouts", "DispatcherTimer", "ImageBrush + Resource PNGs"],
        githubUrl: "https://github.com/NazariiKon/memory-match-game-wpf",
        images: PROJECTS_IMAGES.memory,
    },
    {
        id: "apple-picker",
        title: "Apple Picker",
        period: "May 2022",
        subtitle: "Unity Arcade Catch Game",
        description: "Classic Unity arcade game: moving apple tree drops apples at increasing speed, catch with basket (3 lives system) for 100 points each. Progressive difficulty ramps every 5 apples, PlayerPrefs high score persistence, collision-based scoring, and dynamic life management with auto scene transitions.",
        tech: ["Unity 2D", "C#", "Rigidbody2D", "Colliders", "PlayerPrefs", "UI Text"],
        githubUrl: "https://github.com/NazariiKon/ApplePicker",
        images: PROJECTS_IMAGES.applePicker,
    },
    {
        id: "androidApp",
        title: "Shop Android App",
        period: "May 2022",
        subtitle: "Java E-commerce with .NET Core Backend",
        description: "Full-stack e-commerce mobile app with user authentication, product CRUD operations, image upload/download. Java Android client consumes .NET Core 8 REST API (PostgreSQL, EF Core) with JWT auth, Retrofit networking, Glide image loading from static file server, and Material Design UI.",
        tech: ["Java", "AndroidX", ".NET Core 8", "Retrofit", "Glide", "EF Core", "PostgreSQL", "JWT Auth", "Material Design"],
        githubUrl: "https://github.com/NazariiKon/androidApp",
        images: PROJECTS_IMAGES.shopAndroid
    },
    {
        id: "book-catalog",
        title: "Book Catalog API",
        period: "Feb 2022",
        subtitle: "React + Spring Boot Image Gallery",
        description:
            "Educational full-stack app with image cropper, multiple file uploads via Base64, and book catalog management. React frontend crops/uploads images that persist in PostgreSQL + filesystem, then links them to books via REST API. Demonstrates Axios integration, JPA relationships (Author→Book→Images), and Docker PostgreSQL.",
        tech: ["React", "Spring Boot", "Axios", "PostgreSQL", "JPA/Hibernate", "Cropper.js", "Docker"],
        liveUrl: "",
        githubUrl: "https://github.com/NazariiKon/SpringBoot",
        images: PROJECTS_IMAGES.books,
    },
    {
        id: "crocodile-chat",
        title: "Crocodile Chat",
        period: "Jun 2021",
        subtitle: "Real-time Drawing Chat App",
        description:
            "First project: real-time collaborative drawing + chat app for multiple clients. Users connect via UDP (text chat) and TCP (image sync), draw on shared InkCanvas, and see live updates from all participants — tested with simultaneous multi‑client sessions.",
        tech: ["C#", "WPF", "InkCanvas", "UDP", "TCP", "BinaryFormatter"],
        githubUrl: "https://github.com/NazariiKon/chat-and-paint",
        images: PROJECTS_IMAGES.crocodile,
    }
];

export function Projects() {
    const [showAll, setShowAll] = useState(false);
    const [selectedProject, setSelectedProject] = useState<string | null>(null);

    const displayedProjects = showAll ? projects : projects.slice(0, 3);

    return (
        <section id="projects" className="relative bg-white py-20 sm:py-28 overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.03)_0%,transparent_50%),radial-gradient(circle_at_20%_70%,rgba(139,92,246,0.03)_0%,transparent_50%)]"></div>

            {/* Decorative elements */}
            <div className="absolute top-32 right-20 h-64 w-64 rounded-full bg-gradient-to-br from-blue-100/20 to-transparent blur-3xl"></div>
            <div className="absolute bottom-32 left-20 h-64 w-64 rounded-full bg-gradient-to-br from-purple-100/20 to-transparent blur-3xl"></div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <div className="mb-16 space-y-4 text-center animate-[fadeInUp_0.6s_ease-out]">
                    <div className="inline-flex flex-col items-center">
                        <h2 className="text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl mb-3">
                            Featured
                            <span className="ml-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                Projects
                            </span>
                        </h2>
                        <div className="h-1 w-32 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 animate-[expandWidth_1s_ease-out]"></div>
                    </div>
                    {/* <p className="mx-auto max-w-2xl text-lg text-slate-600 animate-[fadeInUp_0.6s_ease-out_0.2s_both]">
                        Real-world applications showcasing my full-stack development expertise
                    </p> */}
                </div>

                {/* Projects */}
                <div className="space-y-8">
                    {displayedProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className="animate-[fadeInUp_0.6s_ease-out_both]"
                            style={{ animationDelay: `${0.3 + index * 0.15}s` }}
                        >
                            <ProjectCard
                                project={project}
                                onOpenScreenshots={(projectId) => setSelectedProject(projectId)}
                            />
                        </div>
                    ))}
                </div>

                {/* Show More/Less Button */}
                {projects.length > 3 && (
                    <div className="flex justify-center pt-12 animate-[fadeIn_0.8s_ease-out_1s_both]">
                        <button
                            onClick={() => setShowAll((v) => !v)}
                            className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white px-8 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100/50 hover:-translate-y-0.5"
                        >
                            {/* Gradient overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/0 via-indigo-50/0 to-purple-50/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:from-blue-50/50 group-hover:via-indigo-50/40 group-hover:to-purple-50/50"></div>

                            {/* Shine effect */}
                            <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-[100%]"></div>

                            <span className="relative flex items-center gap-2">
                                {showAll ? (
                                    <>
                                        <svg className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                        </svg>
                                        Show less
                                    </>
                                ) : (
                                    <>
                                        <svg className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                        Show {projects.length - 3} more project{projects.length - 3 > 1 ? 's' : ''}
                                    </>
                                )}
                            </span>
                        </button>
                    </div>
                )}

                {/* Bottom decoration */}
                <div className="mt-16 flex justify-center gap-2 animate-[fadeIn_0.8s_ease-out_1.5s_both]">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse"></div>
                    <div className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="h-1.5 w-1.5 rounded-full bg-purple-400 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
            </div>

            {/* Screenshot Modal */}
            {selectedProject && (
                <ScreenshotModal
                    projectId={selectedProject}
                    projects={projects}
                    onClose={() => setSelectedProject(null)}
                />
            )}

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
            `}</style>
        </section>
    );
}