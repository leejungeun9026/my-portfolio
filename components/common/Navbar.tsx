"use client";

import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default function Navbar() {
  const scrollTo = (target: string) => {
    gsap.to(window, {
      duration: 1,
      ease: "power2.out",
      scrollTo: { y: target, offsetY: 0 }, // offsetY = 고정 헤더 높이
    });
  };

  return (
    <div id="Navbar" className="fixed top-0 left-0 z-50 w-full px-3 py-3">
      <nav className="text-center">
        <ul className="inline-flex justify-center items-center rounded-full bg-white/10 p-1 ring-1 ring-white/10 backdrop-blur-sm border-b border-white/10 shadow-[0_2px_30px_rgba(255,255,255,0.1)]">
          {[
            ["Home", "#hero"],
            ["About", "#about"],
            ["Skill", "#skill"],
            ["Project", "#project"],
            ["Contact", "#contact"],
          ].map(([label, target]) => (
            <li
              key={target}
              onClick={() => scrollTo(target)}
              className="cursor-pointer select-none rounded-full px-2 py-1 sm:px-4 sm:py-2 text-xs text-white/80 hover:text-white hover:bg-white/15 hover:backdrop-blur-lg active:scale-[0.98] transition uppercase font-semibold"
            >
              {label}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
