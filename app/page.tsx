"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import About from "@/components/sections/About";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Project from "@/components/sections/Project";
import Skill from "@/components/sections/Skill";

gsap.registerPlugin(ScrollTrigger);


export default function Home() {
  const mainRef = useRef<HTMLElement | null>(null);
  const noiseRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // bg_noise
      gsap.fromTo(
        noiseRef.current,
        { opacity: 1 },
        {
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top bottom",
            end: "top center",
            scrub: 1.5,
          },
        }
      );

      // bg_color
      gsap.fromTo(
        mainRef.current,
        { backgroundColor: "#171717" }, // neutral-900
        {
          backgroundColor: "#000000",
          ease: "none",
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top bottom",
            end: "top center",
            scrub: 1.5,
          },
        }
      );

    }, mainRef);

    return () => ctx.revert();
  }, []);


  return (
    <>
      {/* noise_bg */}
      <div ref={noiseRef} className="background_noise" style={{ backgroundImage: "url(/images/noise.png)" }
      }></ div>

      <main ref={mainRef} className="min-h-screen bg-neutral-900">
        {/* main_wrapper */}
        <div className="relative z-10">
          <div className="main_wrapper mx-auto w-full max-w-5xl pt-12.25 sm:pt-14.25">
            <div className="divide-accent/10 divide-y">
              <Hero />
              <About />
              <div ref={triggerRef}>
                <Skill />
              </div>
              <Project />
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
