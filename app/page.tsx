import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Project from "@/components/sections/Project";
import Skill from "@/components/sections/Skill";

export default function Home() {
  return (
    <main className="relative">
      <div className="background_noise"></div>
      <div className="main_wrapper mx-auto w-full max-w-5xl pt-12.25 sm:pt-14.25">
        <div className="section_fixed_wrapper">
          <div className="divide-accent/10 divide-y">
            <Hero />
            <About />
            <Skill />
            <Project />
            <Contact />
          </div>
        </div>
      </div>
    </main>
  );
}
