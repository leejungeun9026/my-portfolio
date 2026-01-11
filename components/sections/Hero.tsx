"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Button } from "../ui/button";
import { ChevronDown, Download, Github } from "lucide-react";

export default function Hero() {
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const preview = previewRef.current;
    if (!preview) return;

    const move = (e: MouseEvent) => {
      gsap.to(preview, {
        x: e.clientX + 20,
        y: e.clientY + 20,
        duration: 0.3,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const showPreview = () => {
    gsap.to(previewRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.3,
    });
  };

  const hidePreview = () => {
    gsap.to(previewRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.3,
    });
  };

  return (
    <section id="hero" className="px-4 py-10">
      <div
        className="relative w-full cursor-default"
        style={{ height: "calc(100dvh - 137px)", minHeight: "360px" }}
      >
        <div className="absolute w-full left-1/2 top-1/2 -translate-1/2">
          <div className="flex flex-col gap-8 justify-start lg:items-center">
            <div className="text-accent">
              <div className="title ff_rix">
                <div className="w-full ps-4 lg:ps-0 mb-3 lg:mb-6 inline-flex items-end lg:justify-center gap-x-3 gap-y-1 flex-wrap leading-none transition-all">
                  <h2 className="text-6xl lg:text-8xl tracking-tight text-nowrap">
                    이정은
                  </h2>
                  <h6 className="text-3xl lg:text-4xl text-nowrap">
                    Lee Jungeun
                  </h6>
                </div>
              </div>
              <div className="subtitle">
                <div className="flex items-center gap-2 lg:gap-5">
                  <div className="text-8xl font-thin">{"{"}</div>
                  <div className="text-2xl leading-relaxed">
                    <p>프론트엔드 경험을 기반으로</p>
                    <p>
                      <span
                        className="font-bold underline underline-offset-4 cursor-pointer"
                        onMouseEnter={showPreview}
                        onMouseLeave={hidePreview}
                      >
                        AI와 데이터를 서비스로 연결
                      </span>
                      하는 <br className="block sm:hidden" />웹 개발자입니다.
                    </p>
                  </div>
                  <div className="text-8xl font-thin">{"}"}</div>
                </div>
              </div>
            </div>
            <ul className="w-full flex justify-center gap-2">
              <li>
                <Button variant="outline" className="">
                  <Download />
                  PPT
                </Button>
              </li>
              <li>
                <Button variant="outline">
                  <Github />
                  github
                </Button>
              </li>
            </ul>
          </div>
        </div>
        <div className="absolute left-1/2 bottom-0 -translate-1/2">
          <div className="text-accent animate-bounce opacity-50">
            <ChevronDown size="28" />
          </div>
        </div>
      </div>
      <div
        ref={previewRef}
        className="fixed top-0 left-0 pointer-events-none z-50 opacity-0 scale-75"
      >
        <img
          src="https://img.freepik.com/free-vector/ai-technology-microchip-background-vector-digital-transformation-concept_53876-112222.jpg?semt=ais_hybrid&w=740&q=80"
          alt=""
          style={{ width: "40px", height: "40px" }}
        />
      </div>
    </section>
  );
}
