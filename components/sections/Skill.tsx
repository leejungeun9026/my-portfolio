import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function Skill() {
  const projectList = [
    {
      num: "01",
      title: "스프링부트-리액트 웹프로젝트 : 타로버블팁",
      link: "",
    },
    {
      num: "02",
      title: "장고-리액트 웹프로젝트 : 부산 축제 정보",
      link: "",
    },
    {
      num: "03",
      title: "스프링부트 웹프로젝트 : 애니모니",
      link: "",
    },
    {
      num: "04",
      title: "머신러닝",
      link: "",
    },
  ];

  const skillList = [
    {
      type: "AI & DATA",
      datalist: [
        {
          title: "OpenAI(GPT) 서비스 연동",
          skills: ["GPT 결과를 백엔드 로직과 연계하여 서비스 기능으로 구현"],
          project: [projectList[0]],
        },
        {
          title: "PyTorch / ML·DL 기초",
          skills: [
            "데이터 통계·시각화(회귀, 상관분석, 히트맵)",
            "회귀·분류 머신러닝 모델 학습 및 테스트",
          ],
        },
        {
          title: "공공데이터 활용",
          skills: ["공공데이터 API 연동", "데이터 정제 및 저장 전략 수립·수행"],
          project: [projectList[1]],
        },
      ],
    },
    {
      type: "Backend",
      datalist: [
        {
          title: "Java / Spring Boot",
          skills: [
            "REST API 구현, JPA 기반 CRUD",
            "JWT 인증/인가, OAuth2 소셜 로그인 연동 경험",
          ],
          project: [projectList[0], projectList[2]],
        },
        {
          title: "Python / Django",
          skills: [
            "REST API 구현, Admin 활용 데이터 관리",
            "관리용 커스텀 커맨드/수동 실행 기능 구현",
          ],
          project: [projectList[1]],
        },
      ],
    },
    {
      type: "Frontend",
      datalist: [
        {
          title: "React / TypeScript",
          skills: ["REST API 연동", "컴포넌트 구조 설계, 상태 관리"],
          project: [projectList[0]],
        },
        {
          title: "UI",
          skills: [
            "CSS (Flexbox, Grid, Media Query, Keyframes) 기반 반응형·애니메이션 UI 구현",
            "Bootstrap, Tailwind CSS, shadcn 기반 스타일링",
          ],
        },
      ],
    },
    {
      type: "Tools",
      datalist: [
        {
          title: "Git / GitHub",
          skills: [
            "개인 및 팀 프로젝트에서 협업 도구로 사용",
            "코드 공유 및 변경 이력 관리",
          ],
        },
        {
          title: "Postman / Swagger",
          skills: [
            "REST API 테스트 및 요청·응답 검증",
            "API 문서화 및 엔드포인트 확인",
          ],
        },
        {
          title: "Notion / Slack",
          skills: ["팀 커뮤니케이션 및 작업 진행 상황 관리"],
        },
      ],
    },
  ];

  const SkillCard = (idx: number) => {
    return (
      <Card className="flex-1 h-full gap-6 text-accent bg-white/10 ring-1 ring-white/10 backdrop-blur-sm border-b border-white/10 shadow-[0_2px_30px_rgba(255,255,255,0.1)]">
        <CardHeader className="block">
          <CardTitle className="text-lg ff_rix font-normal">
            {skillList[idx].type}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {skillList[idx].datalist.map((list, idx) => {
              const title = list.title;
              const skill = list.skills;
              return (
                <li key={idx} className="space-y-2">
                  <h6 className="font-extrabold">
                    {title}{" "}
                    {list.project && (
                      <span className="text-xs text-blue-500">
                        {list.project.map((p) => `[${p.num}]`).join(", ")}
                      </span>
                    )}
                  </h6>
                  <ul className="space-y-1 opacity-70 list-disc ps-5">
                    {skill.map((s, idx) => {
                      return <li key={idx}>{s} </li>;
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </CardContent>
      </Card>
    );
  };

  return (
    <section id="skill" className="px-4 py-16 lg:py-20">
      <div className="title mb-6 lg:mb-10 ff_rix text-accent">
        <h2 className="text-4xl lg:text-6xl text-nowrap">Skill</h2>
      </div>
      <div className="content text-accent tracking-tight leading-tight transition-all">
        <div className="grid lg:grid-cols-2 gap-5">
          <div className="col-span row-span-2">{SkillCard(0)}</div>
          <div className="col-span">{SkillCard(1)}</div>
          <div className="col-span lg:order-4">{SkillCard(2)}</div>
          <div className="col-span lg:order-3 row-span-2">{SkillCard(3)}</div>
        </div>
        <div className="pt-6 text-sm">
          <span className="font-semibold">프로젝트 :</span>{" "}
          <span className=" text-blue-400">
            {projectList.map((p) => `[${p.num}] ${p.title}`).join(" / ")}
          </span>
        </div>
      </div>
    </section>
  );
}
