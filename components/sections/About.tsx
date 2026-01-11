"use client";
import gsap from "gsap";
import { ChevronDown } from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "../ui/button";

const basicInfo = [
  { Birth: "1990.11.26" },
  { Email: "2_jungeun@naver.com" },
  { Address: "부산광역시 부산진구" },
];

const eduInfo = [
  {
    period: "2025.07 ~ 2026.02",
    organization: "(재)부산인재개발원 부산IT교육센터",
    description: "[K디지털] AI&빅데이터 분석 활용 풀스택 서비스 개발",
  },
  {
    period: "2022.03 ~ 2022.08",
    organization: "(재)부산인재개발원 부산IT교육센터",
    description: "프론트엔드 UI/UX웹디자인&웹퍼블리셔",
  },
  {
    period: "2009.03 ~ 2012.02",
    organization: "신라대학교",
    description: "물리치료학과",
  },
  { period: "2006.03 ~ 2009.02", organization: "경원고등학교" },
];

const careerInfo = [
  {
    period: "2023.04 ~ 2025.04",
    company: "(주)넥솔",
    role: "개발부 책임연구원",
    work: "UI/UX디자인 · 퍼블리싱",
  },
  {
    period: "2022.10 ~ 2025.04",
    company: "(주)투어아이투어",
    role: "개발팀 실장",
    work: "UI/UX디자인 · 프론트엔드",
  },
];

export default function About() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const toggle = () => {
    if (!contentRef.current) return;

    if (open) {
      gsap.to(contentRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    } else {
      gsap.fromTo(
        contentRef.current,
        { height: 0, opacity: 0 },
        {
          height: "auto",
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
        }
      );
    }

    setOpen(!open);
  };

  return (
    <section id="about" className="px-4 py-16 lg:py-20">
      <div className="title mb-6 lg:mb-10 ff_rix text-accent">
        <h2 className="text-4xl lg:text-6xl text-nowrap">About</h2>
      </div>
      <div className="content tracking-tight leading-tight">
        <div className="flex flex-col lg:flex-row gap-8 text-accent">
          <div>
            <ul className="flex flex-col gap-3">
              {basicInfo.map((it, idx) => {
                const [name, value] = Object.entries(it)[0];
                return (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-20 shrink-0 font-extrabold">{name}</span>
                    <span>{value}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-3">
              <li>
                <h5 className="font-extrabold">Ecudation</h5>
              </li>
              {eduInfo.map((it, idx) => {
                return (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-36 shrink-0 font-semibold opacity-60">
                      {it.period}
                    </div>
                    <div className="space-y-1">
                      <p>{it.organization}</p>
                      <p className="text-sm opacity-50">{it.description}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-3">
              <li>
                <h5 className="font-extrabold">Career</h5>
              </li>
              {careerInfo.map((it, idx) => {
                return (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-36 shrink-0 font-semibold opacity-60">
                      {it.period}
                    </div>
                    <div className="space-y-1">
                      <p>{it.company}</p>
                      <p>{it.role}</p>
                      <p className="text-sm opacity-50">{it.work}</p>
                    </div>
                  </li>
                );
              })}
              <li>
                <p className="text-sm opacity-60 text-nowrap">
                  특이사항: (주)투어아이투어 재직 중, 경영진 협의를 통해 <br />
                  (주)넥솔 프로젝트 실무 겸임 수행
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8">
          <div className="text-center">
            <Button onClick={toggle} variant="outline" className="mx-auto">
              자기소개서
              <ChevronDown
                className={`transition-all ${open ? "rotate-180" : ""}`}
              />
            </Button>
          </div>
          <div ref={contentRef} className="overflow-hidden h-0 text-accent">
            <div className="pt-6 space-y-8 text-justify">
              <section>
                <h5 className="mb-4 text-xl font-bold">
                  UX/UI에서 출발한 개발자
                </h5>
                <div className="space-y-2 leading-relaxed">
                  <p>
                    UX/UI 디자인과 퍼블리싱으로 개발을 시작하여 실무에서 사용자
                    화면을 구현하는 경험을 쌓았습니다. 단순히 화면을 만드는 것을
                    넘어, 화면에 표시되는 데이터가 어떤 흐름으로 전달되는지에
                    대한 관심이 자연스럽게 생겼습니다.
                  </p>
                  <p>
                    이 과정에서 서비스 구조 전반을 이해하고 직접 설계해보고
                    싶다는 목표가 생겼고, 프론트엔드 경험을 바탕으로 백엔드
                    영역까지 학습 범위를 확장하게 되었습니다.
                  </p>
                  <p>
                    특히 프론트엔드에서 어떤 데이터가 어떤 형태로 내려오면
                    개발이 효율적인지 이해하고 있어, 서버 구조를 설계하는 데
                    강점을 가지고 있습니다. 이러한 경험을 바탕으로 현재는
                    백엔드를 주력으로 개발 역량을 집중하고 있습니다.
                  </p>
                </div>
              </section>
              <section>
                <h5 className="mb-4 text-xl font-bold">
                  낯선 AI를 다루게 되다
                </h5>
                <div className="space-y-2 leading-relaxed">
                  <p>
                    퍼블리싱을 처음 접했던 실무 초반인 당시에 AI는 다소 낯선
                    존재였습니다. 그러나 시간이 지나며 ChatGPT, Gemini와 같은 AI
                    서비스를 모두가 한 번쯤은 경험해보는 도구가 되는걸
                    지켜보면서, 단순히 사용하는 입장을 넘어 이러한 AI가 어떤
                    구조로 동작하며 어떻게 서비스 기능으로 연결되는지에 대한
                    궁금증이 생기게 되었습니다.
                  </p>
                  <p>
                    이제 AI는 단순한 보조 도구를 넘어, IT 서비스 전반에서
                    없어서는 안 될 핵심 요소가 되었고, 개발자로서 이를 어떻게
                    활용하고 서비스에 녹여낼 것인가가 중요한 역량이라고 생각하게
                    되었습니다.
                  </p>
                  <p>
                    이에 AI를 백엔드 로직과 연계하는 기능을 구현하고,
                    머신러닝·딥러닝 기초 학습을 통해 모델 학습과 결과 해석을
                    경험했습니다. 이를 바탕으로 AI를 서비스 구성 요소로 활용하는
                    백엔드 개발자를 목표로 역량을 확장하고 있습니다.
                  </p>
                </div>
              </section>
              <section>
                <h5 className="mb-4 text-xl font-bold">프로젝트 리더를 맡다</h5>
                <div className="space-y-2 leading-relaxed">
                  <p>
                    학원 과정 동안 진행한 두 개의 팀 프로젝트에서 모두 팀장을
                    맡아 프로젝트를 이끌었습니다.
                  </p>
                  <p>
                    제가 가지고 있는 실무 경험을 바탕으로 일정 관리, 협업 툴
                    정리와 커뮤니케이션에 집중하며 모든 팀원이 동일한 방향을
                    이해하고 작업할 수 있도록 조율했습니다. 각자가 학원에서 배운
                    기술들을 분리된 개개인의 과제가 아니라, 하나의 서비스로
                    연결해보는 경험을 팀원 모두가 해보는 것을 중요하게
                    생각했습니다.
                  </p>
                  <p>
                    팀장의 역할과 개인 개발 역할을 동시에 수행하는 것이 쉽지는
                    않았지만, 실무를 경험한 입장에서 개발 과정에서 발생할 수
                    있는 트러블이나 이슈를 미리 공유하고 대응할 수 있었습니다.
                    그 결과 모든 팀원이 큰 트러블 없이 프로젝트를 완수하고, 기획
                    의도에 맞게 발표까지 안정적으로 마무리할 수 있었습니다.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
