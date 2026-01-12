"use client";

import { useRouter } from "next/navigation";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ExternalLink, Github, GithubIcon, Link, Search } from "lucide-react";

const projectList = [
  {
    link: "https://",
    github: "https://github.com/leejungeun9026/tarotfront",
    img: [],
    type: "개인",
    title: "스프링부트-리액트 웹 프로젝트",
    name: "타로버블팁",
    overview: "개인 질문에 따라 타로 카드를 선택하고, 카드 조합에 대한 해석을 ChatGPT 기반으로 제공하는 웹 서비스입니다.",
    goal: [
      "사용자의 자유로운 질문을 입력으로 받아, 질문과 카드에 맞는 맞춤형 해석을 AI가  제공하는 구조를 서비스로 구현",
      "사용자의 흥미와 몰입도를 높이도록하는 인터랙티브 UI/UX 설계",
    ],
    skill: [
      {
        title: "Backend",
        list: "Spring Boot, JPA, JWT, OAuth2",
      },
      {
        title: "Frontend",
        list: "React, TypeScript, Tailwind CSS, shadcn"
      },
      {
        title: "AI",
        list: "OpenAI (GPT) API",
      },
      {
        title: "Infra",
        list: " AWS EC2, MySQL",
      },
    ],
    member:
    {
      count: "총 1명 (개인 프로젝트)",
      myrole: [
        "서비스 기획, 시스템 설계, 프론트엔드 및 백엔드 개발, 배포 전 과정 진행",
      ],
    },
    feature: [
      "GPT API를 서비스 로직에 통합하여 카드·질문·해석 흐름을 서버에서 조합",
      "사용자 인터랙션을 고려한 카드 선택 및 결과 노출 UI 구현",
      "비회원/회원 사용 흐름을 고려한 인증 구조 설계",
    ],
    issue: [
      {
        title: "GPT 응답 데이터 구조 설계 이슈",
        problem:
          "초기에는 GPT 응답 원문을 저장하는 응답 테이블 하나만 사용해 데이터를 관리했습니다. 이 방식은 실시간 응답 제공에는 문제가 없었지만, 서비스에서 사용하는 결과 데이터와 원본 응답이 섞이면서 데이터 활용과 관리가 비효율적이었습니다.",
        resolve:
          "GPT 응답 원문을 저장하는 응답 테이블과, 서비스에서 사용하는 결과 테이블을 분리하여 구조를 개선했습니다. 원본 데이터는 보관하고, 프론트에는 정제된 결과 데이터만 전달하도록 통일해 데이터 관리 효율을 높였습니다.",
      },
      {
        title: "AI 응답 지연에 따른 사용자 경험 개선",
        problem:
          "프롬프트가 길어질수록 응답 시간이 느려졌고, 반대로 프롬프트를 줄이면 원하는 조건이 충분히 반영되지 않거나 일부 조건이 배제되는 문제가 발생했습니다. 필요한 조건은 유지하면서 토큰 사용량을 최소화하는 방향으로 프롬프트를 지속적으로 조정했지만, 응답 시간을 더 줄이는 데에는 한계가 있었습니다.",
        resolve:
          "이후 응답 속도 자체를 줄이기보다 사용자 경험 관점에서 문제를 해결하고자 접근했습니다. 응답 대기 중에는 로딩 화면을 제공하고, 응답이 빠르게 도착한 경우에는 즉시 결과를 노출하도록 처리하여 사용자 체감 대기 시간을 개선했습니다.",
      },
      {
        title: "OAuth 사용자 식별 구조 개선",
        problem:
          "초기에는 사용자 정보와 OAuth 정보를 하나의 테이블에서 함께 관리했습니다. 이 방식은 단일 OAuth 제공자 사용 시에는 문제가 없었지만, OAuth 제공자가 1개 이상이 되는 경우 확장 구조가 필요하게 되었습니다.",
        resolve:
          "사용자 기본 정보를 관리하는User 테이블과 OAuth 인증 정보를 관리하는 OAuth 테이블을 분리했습니다. 로그인 시 OAuth 정보를 기준으로 내부 사용자 계정과 매핑한 뒤, 이후 서비스 로직에서는 내부 사용자 기준으로 인증·권한을 처리하도록 구조를 개선했습니다.",
      },
    ],
    learn: [
      "AI 요청 프롬프트는 비용과 필요한 요청 정보를 함께 고려하며 설계해야 한다는 기준을 갖게 되었습니다.",
      "서비스에서 사용하는 데이터는 즉시 사용 여부와 관계없이 구조화하여 관리하는 것이 확장성과 유지보수 측면에서 중요하다는 점을 체감했습니다.",
      "기술적으로 성능 개선에 한계가 있는 경우, 문제를 단순히 기술 영역으로만 보지 않고 사용자 경험까지 함께 고려해 해결 방향을 고민할 수 있다는 관점을 갖게 되었습니다.",
    ],
  },
  {
    link: "",
    github: "",
    img: [],
    type: "팀",
    title: "장고-리액트 웹 프로젝트",
    name: "부산 축제 정보",
    overview: "공공데이터 API를 활용해 부산 지역 축제 정보를 수집·정제하여 제공하는 웹 서비스입니다",
    goal: [
      "프론트엔드는 사용자에게 부산 축제 정보를 직관적으로 제공",
      "백엔드는 공공데이터를 수집·정제하여 관리 가능한 데이터로 제공",
    ],
    skill: [
      {
        title: "Backend",
        list: "Django, Django REST Framework",
      },
      {
        title: "Frontend",
        list: "React, TypeScript, Tailwind CSS, shadcn"
      },
      {
        title: "Data",
        list: "공공데이터 API"
      },
      {
        title: "Infra",
        list: "AWS EC2, MySQL"
      },
    ],
    member:
    {
      count: "총 2명 (프론트엔드 1명/백엔드 1명)",
      myrole: [
        "백엔드 전반 담당",
        "데이터 수집·정제·관리 구조 설계 및 구현",
        "관리자 중심 데이터 관리 기능 및 API 제공",
      ],
    },
    feature: [
      "공공데이터 API 분석 및 데이터 수집 로직 구현",
      "데이터 정규화를 고려한 DB 모델 설계 및 데이터 관리 정책 수립",
      "Django Admin의 장점을 활용하여 관리자가 데이터를 조회·수정·삭제할 수 있는 관리 기능 구현",
      "프론트엔드 협업을 위한 REST API 설계 및 API 문서화(Swagger)",
    ],
    issue: [
      {
        title: "공공데이터 업데이트 주기 및 관리 방식",
        problem:
          "공공데이터 API를 확인한 결과, 프로젝트 제작 시점(10월 기준) 마지막 업데이트가 2025년 5월로 확인되었습니다. 자주 변경되지 않는 데이터 특성상, 주기적인 스케줄러 방식은 불필요한 요청과 관리 비용이 발생할 수 있다고 판단했습니다.",
        resolve:
          "자동 스케줄러 대신 Django Admin에서 관리자가 직접 동기화를 실행할 수 있는 방식을 선택했습니다. 이를 통해 매번 서버 명령어로 데이터를 갱신할 필요 없이, 관리 화면에서 필요할 때만 최신 데이터를 반영할 수 있도록 관리 중심 구조로 설계했습니다.",
      },
      {
        title: "공공데이터 필드 불일치 및 날짜 데이터 처리 문제",
        problem:
          "공공데이터의 날짜 데이터는 특히 누락되거나 문자열 형태로 제공되는 등 일관성이 부족했습니다. 이 상태로 프론트엔드에 전달할 경우 추가 가공과 예외 처리가 필요했습니다.",
        resolve:
          "서비스에서 사용할 날짜 데이터 기준을 먼저 정의하고, 날짜 정보를 타입별로 정규화하여 DB에 저장했습니다. 유효한 데이터만 프론트엔드에 전달하도록 정책을 수립해, 저장 시점에 데이터 품질을 보장하는 구조로 개선했습니다.",
      },
      {
        title: "데이터 변경 여부 판단 기준 수립",
        problem:
          "공공데이터 재수집 시 기존 데이터와의 변경 여부를 판단해야 했으며, 모든 필드를 직접 비교하는 방식은 비효율적이었습니다.",
        resolve:
          "이터를 스냅샷 기준으로 관리하고, 주요 필드를 기반으로 해시 값을 생성해 변경 여부를 판단하도록 구현했습니다. 이를 통해 실제 변경된 데이터만 갱신할 수 있도록 개선했습니다.",
      },
    ],
    learn: [
      "공공데이터는 정제해서 사용해야겠다는 단순한 생각을 넘어, 날짜 데이터처럼 응답이 정확하지 않은 경우 어떤 기준으로 가공해야 서비스에서 최대한 활용 가능한지를 고민해볼 수 있었습니다.",
    ],
  },
  {
    link: "",
    github: "",
    img: [],
    type: "팀",
    title: "스프링부트 웹 프로젝트",
    name: "애니모리",
    overview: "지역 기반 반려동물 커뮤니티 서비스로, 반려동물 관련 정보 공유와 소통을 목적으로 한 회원제 웹 서비스입니다. 공지사항, 커뮤니티, 중고장터, 산책 메이트 모집, 시터 구인·구직 게시판을 제공합니다.",
    goal: [
      "관리자는 어드민을 통해 공지사항을 작성·관리",
      "회원은 등급(역할)에 따라 게시판 성격에 맞게 기능을 이용 (게시판별로 작성·수정·삭제 권한 차등 제공)",
    ],
    skill: [
      {
        title: "Backend",
        list: "Spring Boot, JPA"
      },
      {
        title: "Frontend",
        list: "Thymeleaf, Bootstrap"
      },
      {
        title: "Database",
        list: "MySQL",
      },
    ],
    member:
    {
      count: "총 5명 (기능 단위로 역할 분담)",
      myrole: [
        "팀장 및 시터 구인·구직 게시판 구현",
        "팀원들이 학습한 내용을 각자 서비스 기능으로 구현할 수 있도록 기능 단위 역할 분담 및 구조 정리",
        "GitHub 브랜치를 활용한 코드 공유 및 병합 과정 관리",
        "사용자 화면과 관리자 화면의 기본 템플릿(레이아웃) 구성",
        "개인적으로 시터 구인·구직 게시판 기능 구현 담당",
      ],
    },
    feature: [
      "회원가입 및 로그인 기능 구현",
      "반려동물 시터 구인·구직 게시판 구현 (회원 역할에 따라 게시글 및 댓글 작성 기능을 차등 제공)",
    ],
    issue: [
      {
        title: "협업을 고려한 프로젝트 구조 분리 및 GitHub 관리",
        problem:
          "각자 기능을 개별적으로 구현한 뒤 병합하는 방식으로 진행할 경우, 프로젝트 구조가 통일되지 않으면 파일 동시 수정으로 인한 충돌이 발생할 수 있다고 예상했습니다.",
        resolve:
          "개발 시작 전 프로젝트 폴더 구조와 공통 템플릿, 회원 관련 기능을 먼저 통일해 공유했습니다. 이후 각자 맡은 기능 영역만 수정하도록 작업 범위를 분리하고, GitHub 브랜치를 나누어 관리해 공통 코드와 개인 작업 영역을 구분했습니다.",
      },
      {
        title: "로컬 개발 환경에서의 DB 구조 통일 문제",
        problem:
          "공통 서버 없이 각자 로컬 환경에서 개발을 진행해야 했기 때문에, DB 구조를 각자 수동으로 관리할 경우 구조 불일치가 발생할 수 있었습니다.",
        resolve:
          "엔티티 기반으로 테이블 정의를 코드로 관리할 수 있도록 JPA를 사용해 DB 구조를 통일했습니다. 이를 통해 각자 로컬 환경에서도 DB 구조를 일일이 맞추지 않고 동일한 기준으로 개발할 수 있었습니다.",
      },
    ],
    learn: [
      "첫 팀 프로젝트를 통해, 협업을 원활하게 진행하기 위해서는 프로젝트 구조와 역할 분담 등 선행되어야 할 요소들을 먼저 고민해야 한다는 점을 느꼈습니다.",
      "매일 회의를 통해 작업 방향과 기준을 공유하며 팀원 모두가 같은 이해를 갖도록 조율했고, 그 결과 협업 과정에서 큰 충돌이나 작업 혼선 없이 프로젝트를 안정적으로 진행할 수 있었습니다.",
      "이를 통해 초기 커뮤니케이션과 지속적인 공유의 중요성을 배울 수 있었습니다.",
    ],
  },
];



export default function Project() {
  const ProjectSummary = (idx: number) => {
    const project = projectList[idx]
    const ltToRt = idx % 2 == 0

    return (
      <div className="relative w-full h-full" style={{ minHeight: "100dvh" }}>
        <div className={`px-4 py-16 lg:py-20 lg:w-1/2 h-full ${!ltToRt && 'lg:absolute lg:right-0'}`}>
          <div className="title mb-6 lg:mb-10 ff_rix text-accent">
            <h2 className="text-4xl lg:text-6xl text-nowrap">
              Project 0{idx + 1}
            </h2>
          </div>
          <div className="content space-y-6 tracking-tight text-accent">
            <div className="project_title">
              <h3 className="text-xl leading-tight break-keep">
                <Badge variant="secondary" className="align-text-top mt-0.5 me-1 text-white bg-blue-600/50">
                  {project.type}
                </Badge>
                <span className="text-blue-300 font-bold text-nowrap">{"{"} {project.name} {"}"}</span>{" "}
                {project.title}
              </h3>
              <p className="pt-2">{project.overview}</p>
            </div>

            <div className={`w-full h-96 lg:absolute lg:w-[50dvw] lg:h-full lg:top-0 ${ltToRt ? 'lg:left-1/2' : 'lg:left-0 lg:-translate-x-full'}`}>
              <div className="img_wrap w-full h-full overflow-clip bg-accent/10">
              </div>
            </div>

            <div className="text-sm">
              <p className="mb-1 font-semibold opacity-60">인원 및 역할</p>
              <ul className="space-y-1 list-disc ps-5">
                <li>
                  {project.member.count}
                </li>

                {project.type == "개인" ?
                  (project.member.myrole.map((r, idx) => {
                    return (
                      <li key={idx}>{r}</li>
                    )
                  }))
                  :
                  (<li>내 역할
                    <ul className="list-decimal ps-5">
                      {project.member.myrole.map((r, idx) => {
                        return (
                          <li key={idx}>{r}</li>
                        )
                      })}
                    </ul>
                  </li>)}
              </ul>
            </div>

            <div className="text-sm">
              <p className="mb-1 font-semibold opacity-60">사용 기술</p>
              <ul className="space-y-1 list-disc ps-5">
                {project.skill.map((s, idx) => {
                  const lang = s.title
                  const skill = s.list
                  return (
                    <li key={idx}>
                      <ul>
                        <li>{lang} : {skill}</li>
                      </ul>
                    </li>)
                })}
              </ul>
            </div>

            <div className="text-sm">
              <p className="mb-1 font-semibold opacity-60">핵심 구현</p>
              <ul className="space-y-1 list-disc ps-5">
                {project.feature.map((f, idx) => {
                  return (
                    <li key={idx}>
                      <ul>
                        <li>{f}</li>
                      </ul>
                    </li>)
                })}
              </ul>
            </div>

            <div className="w-full">
              <ul className="flex justify-center lg:justify-start flex-wrap gap-2 text-primary">
                <li>
                  <Button variant="outline" size="sm" onClick={() => window.open(project.link, "_blank",)}>
                    <Search /> 프로젝트 자세히 보기
                  </Button>
                </li>
                <li>
                  <Button variant="outline" size="sm" onClick={() => window.open(project.github, "_blank",)}>
                    <Github /> github source
                  </Button>
                </li>
                <li>
                  <Button variant="outline" size="sm" onClick={() => window.open(project.link, "_blank",)}>
                    <Link /> 서비스 바로가기
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div >
    );
  };

  const ProjectDetail = (idx: number) => {
    const project = projectList[idx]

    return (
      <div className="w-full h-full">
        <div className="text_wrap px-4 pt-16 lg:pt-20 ">
          <div className="title mb-6 lg:mb-10 ff_rix text-accent">
            <h2 className="text-4xl lg:text-6xl text-nowrap">
              Project 0{idx + 1}
            </h2>
          </div>
          <div className="content tracking-tight text-accent">
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="text-white bg-blue-600/50">
                {project.type}
              </Badge>
              <h3 className="text-xl">{project.title} : <span className="font-semibold">{project.name}</span></h3>
            </div>
            <ul className="list-decimal ps-5 pt-4 space-y-4 text-sm">
              <li>
                <p className="mb-2"><b className="font-bold">Overview</b> <span className="opacity-50">서비스 소개</span></p>
                <ul className="space-y-1">
                  <li>{project.overview}</li>
                </ul>
              </li>
              <li>
                <p className="mb-2"><b className="font-bold">Project Goal</b> <span className="opacity-50">프로젝트 목표</span></p>
                <ul className="space-y-1 list-disc ps-4">
                  {project.goal.map((g, idx) => { return (<li key={idx}>{g}</li>) })}
                </ul>
              </li>
              <li>
                <p className="mb-2"><b className="font-bold">Technologies</b> <span className="opacity-50">사용 기술</span></p>
                <ul className="space-y-1 list-disc ps-4">
                  {project.skill.map((s, idx) => {
                    const lang = s.title
                    const skill = s.list
                    return (
                      <li key={idx}>
                        <ul>
                          <li>{lang} : {skill}</li>
                        </ul>
                      </li>)
                  })}
                </ul>
              </li>
              <li>
                <p className="mb-2"><b className="font-bold">Features</b> <span className="opacity-50">핵심 구현</span></p>
                <ul className="space-y-1 list-disc ps-4">
                  {project.feature.map((f, idx) => {
                    return (
                      <li key={idx}>
                        <ul>
                          <li>{f}</li>
                        </ul>
                      </li>)
                  })}
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="img_wrap rounded-xl overflow-clip">
          <div className="w-full aspect-4/3 bg-accent/10"></div>
        </div>
      </div >
    );
  };

  return (
    <>
      <section id="project">
        {ProjectSummary(0)}
      </section>
      <section>
        {ProjectSummary(1)}
      </section>
      <section>
        {ProjectSummary(2)}
      </section>
    </>
  );
}
