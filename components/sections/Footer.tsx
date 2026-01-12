"use client";
import gsap from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";


gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef<HTMLDivElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);
  const fgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = footerRef.current;
    const bg = bgRef.current;
    const fg = fgRef.current;
    if (!section || !bg || !fg) return;

    const ctx = gsap.context(() => {
      gsap.set([bg, fg], { willChange: "transform" });

      // bg_space
      gsap.fromTo(
        bg,
        { y: 120, scale: 1.1 },
        {
          y: 60,
          scale: 1.0,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        }
      );

      // spaceman
      gsap.fromTo(
        fg,
        { y: 0, x: 40, rotate: -2, scale: 1 },
        {
          y: -100,
          x: -60,
          rotate: 2,
          scale: 1.05,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={footerRef} id="footer" className="relative h-96 lg:h-[80vh] overflow-clip bg-black">
      <div ref={bgRef} className="absolute inset-0">
        <Image
          src="/images/space.png"
          alt="space"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div ref={fgRef} className="absolute inset-0 pointer-events-none">
        <div className="absolute -bottom-40 right-[12%] w-full max-w-[80vw]">
          <Image
            src="/images/spaceman.png"
            alt="spaceman"
            width={1536}
            height={1024}
            className="w-full h-auto select-none"
          />
        </div>
      </div>
    </div>
  )
}
