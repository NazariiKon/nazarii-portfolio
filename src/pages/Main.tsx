import { Journey } from "../components/Journey";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { Contact } from "../components/Contact";
import { Honors } from "../components/Awards";

export default function Main() {
    return (
        <div className="min-h-screen bg-white text-slate-900">
            <Navbar />
            <main>
                <Hero />
                <Projects />
                <Honors />
                <Skills />
                <Journey />
                <Contact />
            </main>
        </div>
    );
}