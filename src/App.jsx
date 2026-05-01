import React from "react";
import {
  ArrowRight,
  Award,
  Banknote,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  HelpCircle,
  Mail,
  MapPin,
  Microscope,
  Phone,
  ShieldCheck,
  TimerReset,
  Users,
} from "lucide-react";

const KAKAO_URL = "https://pf.kakao.com/_xbUlsn";

const YS_LOGO = "/ysiet-symbol.png";
const YONSEI_LOGO = "/yonsei-symbol.jpg";
const KOLAS_LOGO = "/kolas-symbol.jpg";
const MFDS_LOGO = "/mfds-symbol.jpg";

const SECTION = "py-12 lg:py-14";
const SECTION_TIGHT = "py-8 lg:py-10";

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

function LinkButton({ href, children, variant = "primary", className = "" }) {
  const variants = {
    primary:
      "bg-[#285F67] text-white hover:bg-[#214F56] shadow-[0_16px_34px_rgba(40,95,103,0.22)]",
    secondary:
      "bg-white text-[#28474E] border border-[#D8E5E7] hover:border-[#9DBFC4]",
    light:
      "bg-white text-[#28474E] border border-white/30 hover:bg-[#F7FBFB]",
    yellow:
      "bg-[#FEE500] text-[#2D2926] hover:bg-[#F6D600] shadow-[0_12px_28px_rgba(254,229,0,0.22)]",
  };

  return (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noreferrer" : undefined}
      className={cx(
        "inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-black transition",
        variants[variant],
        className
      )}
    >
      {children}
    </a>
  );
}

function Card({ children, className = "" }) {
  return (
    <div
      className={cx(
        "rounded-[24px] border border-[#D8E5E7] bg-white shadow-[0_18px_40px_rgba(36,72,82,0.055)]",
        className
      )}
    >
      {children}
    </div>
  );
}

function SectionTitle({ eyebrow, titleText, description, light = false, compact = false }) {
  return (
    <div className={compact ? "mb-6" : "mb-8"}>
      <p
        className={cx(
          "mb-4 text-[11px] font-black uppercase tracking-[0.24em]",
          light ? "text-[#BFE6E2]" : "text-[#5E8E90]"
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cx(
          "whitespace-nowrap text-[clamp(1.1rem,2.55vw,2.05rem)] font-black leading-[1.08] tracking-[-0.045em]",
          light ? "text-white" : "text-[#263F46]"
        )}
      >
        {titleText}
      </h2>
      {description ? (
        <p
          className={cx(
            "mt-5 text-[clamp(0.86rem,1.12vw,1rem)] leading-8",
            light ? "text-[#E8F6F5]" : "text-[#60767B]"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

function TrustLogo({ src, alt, type = "square" }) {
  const boxClass =
    type === "wide"
      ? "h-12 w-20 rounded-xl"
      : type === "circle"
      ? "h-12 w-12 rounded-full"
      : "h-12 w-12 rounded-xl";

  const imgClass =
    type === "wide"
      ? "h-10 w-16 object-contain"
      : type === "circle"
      ? "h-11 w-11 rounded-full object-cover"
      : "h-10 w-10 object-contain";

  return (
    <div
      className={cx(
        "flex shrink-0 items-center justify-center overflow-hidden border border-[#E1ECEE] bg-white",
        boxClass
      )}
    >
      <img src={src} alt={alt} className={imgClass} />
    </div>
  );
}

function FamilySiteSelect() {
  function handleChange(event) {
    const url = event.target.value;
    if (!url) return;
    window.open(url, "_blank", "noopener,noreferrer");
    event.target.value = "";
  }

  return (
    <div className="relative w-full lg:w-[148px]">
      <select
        defaultValue=""
        onChange={handleChange}
        className="h-10 w-full appearance-none border border-[#D6DADB] bg-white px-4 pr-9 text-[13px] font-semibold text-[#747F82] outline-none transition hover:bg-[#FAFAFA]"
      >
        <option value="" disabled>
          패밀리사이트
        </option>
        <option value="https://ysiet.com/">와이에스환경기술연구원</option>
        <option value="https://qha.co.kr/">밸런스랩 큐모발검사</option>
      </select>
      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8A9497]" />
    </div>
  );
}

const conversionChecklist = [
  {
    title: "제품명",
    desc: "정식 제품명 또는 임시 제품명",
  },
  {
    title: "제형",
    desc: "크림, 앰플, 토너, 선크림 등",
  },
  {
    title: "성적서 용도",
    desc: "자가품질, 납품, 출시, 수입, 광고 검증",
  },
  {
    title: "희망 납기",
    desc: "성적서가 필요한 날짜",
  },
];

const trustProofs = [
  {
    title: "식약처 지정 제18호",
    desc: "화장품 시험검사기관",
    logo: MFDS_LOGO,
    logoAlt: "식품의약품안전처 심볼",
    type: "square",
  },
  {
    title: "KOLAS 제364호",
    desc: "국제공인시험기관",
    logo: KOLAS_LOGO,
    logoAlt: "KOLAS 심볼",
    type: "wide",
  },
  {
    title: "연세대학교 교원창업기업",
    desc: "연구 기반 시험분석 서비스",
    logo: YONSEI_LOGO,
    logoAlt: "연세대학교 심볼",
    type: "circle",
  },
];

const decisionItems = [
  {
    icon: <TimerReset className="h-6 w-6" />,
    title: "납기",
    desc: "일반 7일, 긴급 3일 상담 가능 여부를 먼저 확인합니다",
  },
  {
    icon: <ClipboardCheck className="h-6 w-6" />,
    title: "항목",
    desc: "제품 유형과 제출 목적에 맞는 시험항목을 안내합니다",
  },
  {
    icon: <Banknote className="h-6 w-6" />,
    title: "비용",
    desc: "대표 수수료를 먼저 확인하고 실제 견적을 안내합니다",
  },
];

const strongReasons = [
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "공식 지정기관",
    desc: "식약처 지정 화장품 시험검사기관 제18호",
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "국제공인 체계",
    desc: "KOLAS 제364호 국제공인시험기관",
  },
  {
    icon: <TimerReset className="h-6 w-6" />,
    title: "납기 중심 상담",
    desc: "출시일과 납품일 기준 가능 여부 우선 확인",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "처음 의뢰도 가능",
    desc: "제품명, 제형, 성적서 용도, 희망 납기 기준 안내",
  },
];

const serviceGroups = [
  {
    title: "자가품질 위탁검사",
    desc: "화장품 품질검사 위탁계약, 시료 접수, 성적서 발급 안내",
  },
  {
    title: "납품·출시 성적서",
    desc: "거래처 제출, 출고 일정, 제품 출시 목적의 시험성적서 상담",
  },
  {
    title: "기능성화장품 품질검사",
    desc: "미백, 주름개선, 자외선차단 관련 품질관리 항목 상담",
  },
  {
    title: "원료·부자재·R&D 분석",
    desc: "원료, 부자재, 신제품 개발, 광고 검증 목적의 분석 지원",
  },
];

const feeRows = [
  ["내용량 / pH", "각 5,000원", "항목별 확인"],
  ["납 비소 안티몬 카드뮴 니켈", "각 30,000원", "항목별 확인"],
  ["중금속 5종 동시분석", "100,000원", "상담 후 확인"],
  ["유통화장품 안전관리기준 전 항목", "325,000원", "미생물 제외"],
  ["기능성 미백 주름개선 단일항목", "각 40,000원", "성분별 확인"],
  ["살균 보존제", "각 50,000원", "항목별 확인"],
];

const documents = [
  "제품명, 제형, 용량, 제조번호, 제조일자",
  "성적서 제출처와 희망 납기",
  "희망 검사항목 또는 제출 목적",
  "품질검사 위탁계약 시 사업자등록증 사본",
  "수입화장품은 표준통관예정보고서 EDI",
];

const process = [
  ["01", "납기 확인", "성적서가 필요한 날짜와 제출처를 먼저 확인합니다"],
  ["02", "항목 안내", "제품 유형과 제출 목적에 맞는 시험항목을 안내합니다"],
  ["03", "시료 접수", "시료와 의뢰 정보를 확인한 뒤 분석 일정을 잡습니다"],
  ["04", "성적서 발급", "시험 완료 후 성적서 발급 절차를 안내합니다"],
];

const faqs = [
  [
    "검사항목을 몰라도 문의할 수 있나요",
    "가능합니다. 제품 유형, 제형, 제출처, 희망 납기를 알려주시면 먼저 확인해야 할 항목과 준비사항을 안내드립니다.",
  ],
  [
    "성적서 발급까지 얼마나 걸리나요",
    "일반 의뢰 소요일은 7일, 긴급 의뢰 소요일은 3일입니다. 단, 시험 일정과 항목에 따라 가능 여부가 달라질 수 있습니다.",
  ],
  [
    "자가품질 위탁검사는 처음인데 진행 가능한가요",
    "가능합니다. 위탁계약, 시험의뢰서, 시료 접수, 성적서 발급까지 필요한 순서대로 안내드립니다.",
  ],
  [
    "1건만 의뢰해도 상담 가능한가요",
    "가능합니다. 1건의 분석 요청도 제품 정보와 제출 목적에 맞춰 상담받으실 수 있습니다.",
  ],
];

const footerPolicyLinks = [
  { label: "개인정보처리방침", href: "#" },
  { label: "이메일수집거부", href: "#" },
  { label: "공평성보장선언", href: "#" },
];

const aboutCards = [
  ["기관명", "(주)와이에스환경기술연구원"],
  ["영문명", "YS Institute of Environmental Technology"],
  ["기관 지정", "식약처 지정 화장품 시험검사기관 제18호"],
  ["공인 체계", "KOLAS 국제공인시험기관 제364호"],
  ["대표이사", "엄유진 박사"],
  ["소재지", "서울시 종로구 인사동5길 42 종로빌딩 10층"],
];

const aboutServiceFields = [
  {
    title: "일반 화장품 분석",
    desc: "국내 제조 및 수입 화장품, 화장비누, 유통화장품 안전관리 항목, 중금속 및 유해물질 항목을 확인합니다",
  },
  {
    title: "기능성 화장품 분석",
    desc: "미백, 주름개선, 자외선차단 등 기능성화장품 품질관리와 주성분 확인, 함량 및 허용치 검사를 지원합니다",
  },
  {
    title: "화장품 원료 분석",
    desc: "원료와 부자재의 납품용 위해성 분석, 기능성 원료 효능 평가, 원재료 관련 분석을 지원합니다",
  },
  {
    title: "화장품 R&D 지원",
    desc: "신제품 개발, 원재료 연구, 시험방법 유효성 확인시험, 신제품 공동 개발과 컨설팅을 함께 지원합니다",
  },
];

function Header({ showKakao = false }) {
  return (
    <header className="sticky top-0 z-50 border-b border-[#D8E5E7] bg-[#FCFEFE]/94 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4">
        <a href="/" className="flex min-w-0 items-center gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-[#DCE8EA] bg-white">
            <img
              src={YS_LOGO}
              alt="와이에스환경기술연구원 로고"
              className="h-10 w-10 object-contain"
            />
          </div>
          <div className="min-w-0">
            <p className="whitespace-nowrap text-[13px] font-black tracking-[-0.02em] text-[#263F46] sm:text-base">
              (주)와이에스환경기술연구원
            </p>
            <p className="truncate text-xs font-bold text-[#73878C]">
              YS Institute of Environmental Technology
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-4 text-sm font-bold text-[#60767B] xl:flex">
          <a href="/#decision" className="hover:text-[#285F67]">
            상담기준
          </a>
          <a href="/#strength" className="hover:text-[#285F67]">
            신뢰근거
          </a>
          <a href="/#services" className="hover:text-[#285F67]">
            검사항목
          </a>
          <a href="/#fees" className="hover:text-[#285F67]">
            수수료
          </a>
          <a href="/#contact" className="hover:text-[#285F67]">
            문의
          </a>
          <a href="/about" className="hover:text-[#285F67]">
            기관소개
          </a>
          {showKakao ? (
            <a
              href={KAKAO_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 items-center justify-center rounded-full bg-[#FEE500] px-4 text-sm font-black text-[#2D2926] shadow-[0_10px_24px_rgba(254,229,0,0.22)] transition hover:bg-[#F6D600]"
            >
              카톡문의
            </a>
          ) : null}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 md:flex">
          <LinkButton href="/#contact" className="h-10 px-5">
            납기 확인
          </LinkButton>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#D8DCDD] bg-[#ECEEEE]">
      <div className="mx-auto max-w-7xl px-5 py-4">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-start">
          <div className="flex min-w-0 items-start gap-3">
            <div className="flex shrink-0 items-start pt-[1px]">
              <img
                src={YS_LOGO}
                alt="와이에스환경기술연구원 로고"
                className="h-[60px] w-auto object-contain opacity-90"
              />
            </div>

            <div className="min-w-0 pt-[1px]">
              <div className="space-y-0 text-[15.5px] font-semibold leading-[1.24] text-[#687477]">
                <p>
                  (주)와이에스환경기술연구원 | (03149) 서울특별시 종로구 인사동5길 42 종로빌딩 10층
                </p>
                <p>
                  대표이사 엄유진 | 사업자등록번호 211-87-79879 | 대표전화 02-312-0540 | 팩스 02-312-0560
                </p>
                <p>
                  COPYRIGHT © YS INSTITUTE OF ENVIRONMENTAL TECHNOLOGY. ALL RIGHTS RESERVED.
                </p>
              </div>

              <div className="mt-2 flex flex-wrap gap-2">
                {footerPolicyLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="inline-flex h-8 items-center justify-center border border-[#D8DCDD] bg-white px-5 text-[13px] font-semibold text-[#747F82] transition hover:bg-[#F8F9F9]"
                  >
                    {item.label}
                    <span className="ml-3 text-[#A1AAAD]">›</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full pt-[2px] lg:ml-6 lg:w-[148px] lg:shrink-0">
            <FamilySiteSelect />
          </div>
        </div>
      </div>
    </footer>
  );
}

function MobileStickyButtons() {
  return (
    <div className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-3xl -translate-x-1/2 rounded-full bg-[#263F46] p-2 shadow-2xl md:hidden">
      <div className="grid grid-cols-2 gap-2">
        <a
          href="tel:02-312-0540"
          className="rounded-full bg-white px-4 py-3 text-center text-sm font-black text-[#28474E]"
        >
          전화 상담
        </a>
        <a
          href="mailto:testing@ysiet.com"
          className="rounded-full bg-[#285F67] px-4 py-3 text-center text-sm font-black text-white"
        >
          이메일 견적
        </a>
      </div>
    </div>
  );
}

function HeroConversionPanel() {
  return (
    <Card className="relative overflow-hidden border-0 bg-white shadow-[0_34px_90px_rgba(36,72,82,0.15)]">
      <div className="absolute right-[-4.5rem] top-[-4.5rem] h-44 w-44 rounded-full bg-[#DCEDE9]" />
      <div className="relative p-7">
        <p className="mb-3 text-[11px] font-black uppercase tracking-[0.24em] text-[#5E8E90]">
          Quote Ready
        </p>
        <h2 className="whitespace-nowrap text-[clamp(1.05rem,2.15vw,1.62rem)] font-black leading-[1.08] tracking-[-0.045em] text-[#263F46]">
          오늘 문의하면 먼저 확인하는 4가지
        </h2>

        <div className="mt-6 grid gap-3">
          {conversionChecklist.map((item, index) => (
            <div
              key={item.title}
              className="flex items-center gap-4 rounded-2xl border border-[#DCE8EA] bg-[#F8FBFB] p-4"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#285F67] text-sm font-black text-white">
                {index + 1}
              </div>
              <div>
                <p className="text-base font-black text-[#263F46]">{item.title}</p>
                <p className="mt-1 text-sm font-semibold text-[#73878C]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-3 rounded-[22px] bg-[#EEF5F4] p-4 sm:grid-cols-3">
          <div>
            <p className="text-xs font-black text-[#73878C]">일반</p>
            <p className="mt-1 text-xl font-black text-[#263F46]">7일</p>
          </div>
          <div>
            <p className="text-xs font-black text-[#73878C]">긴급</p>
            <p className="mt-1 text-xl font-black text-[#263F46]">3일 상담</p>
          </div>
          <div>
            <p className="text-xs font-black text-[#73878C]">전화</p>
            <p className="mt-1 text-xl font-black text-[#263F46]">02-312-0540</p>
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <a
            href="tel:02-312-0540"
            className="flex h-14 items-center justify-center gap-2 rounded-2xl bg-[#285F67] px-4 text-center font-black text-white transition hover:bg-[#214F56]"
          >
            <Phone className="h-5 w-5" /> 전화 상담
          </a>
          <a
            href="mailto:testing@ysiet.com"
            className="flex h-14 items-center justify-center gap-2 rounded-2xl border border-[#D8E5E7] bg-white px-4 text-center font-black text-[#28474E] transition hover:border-[#98BBC0]"
          >
            <Mail className="h-5 w-5" /> 이메일 견적
          </a>
        </div>
      </div>
    </Card>
  );
}

function HomePage() {
  return (
    <>
      <Header showKakao />

      <section id="top" className="relative overflow-hidden bg-[#F5F8F8]">
        <div className="absolute inset-0">
          <div className="absolute left-0 top-0 h-full w-[52%] bg-[#EAF3F1]" />
          <div className="absolute -left-36 top-24 h-[30rem] w-[30rem] rounded-full bg-[#DCEDE9] blur-3xl" />
          <div className="absolute -right-32 -top-36 h-[36rem] w-[36rem] rounded-full bg-[#DDEBF0] blur-3xl" />
          <div className="absolute bottom-[-14rem] left-[35%] h-[28rem] w-[28rem] rounded-full bg-[#F7F3E8] blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[minmax(0,1fr)_minmax(430px,500px)] lg:items-center lg:py-16">
          <div className="min-w-0">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#CFE1E2] bg-white/80 px-4 py-2 text-sm font-black text-[#285F67] shadow-sm">
              <ShieldCheck className="h-4 w-4" />
              식약처 지정·KOLAS 공인 화장품 품질검사 위탁기관
            </div>

            <p className="mb-5 whitespace-nowrap text-[clamp(1.06rem,2.15vw,1.8rem)] font-black leading-[1.1] tracking-[-0.04em] text-[#4F888B]">
              화장품 품질검사 위탁 서비스
            </p>

            <h1 className="whitespace-nowrap text-[clamp(1.7rem,3vw,2.78rem)] font-black leading-[1.05] tracking-[-0.06em] text-[#243F46]">
              성적서 납기 가능 여부를 먼저 확인하세요
            </h1>

            <p className="mt-5 max-w-2xl text-[clamp(0.95rem,1.22vw,1.08rem)] leading-8 text-[#4F656A]">
              제품명·제형·성적서 용도·희망 납기만 알려주시면 필요한 시험항목과 진행 가능 여부를 우선 안내드립니다.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <LinkButton href="#contact" className="h-14 px-8 text-base">
                납기 가능 여부 먼저 확인 <ArrowRight className="ml-2 h-5 w-5" />
              </LinkButton>
              <LinkButton
                href="mailto:testing@ysiet.com"
                variant="secondary"
                className="h-14 px-8 text-base"
              >
                제품명·희망납기 보내기
              </LinkButton>
            </div>

            <div className="mt-8 grid gap-3 md:grid-cols-3">
              {trustProofs.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center gap-3 rounded-2xl border border-[#CFE1E2] bg-white px-4 py-4 shadow-[0_12px_32px_rgba(36,72,82,0.045)]"
                >
                  <TrustLogo src={item.logo} alt={item.logoAlt} type={item.type} />
                  <div>
                    <p className="whitespace-nowrap text-sm font-black text-[#263F46]">
                      {item.title}
                    </p>
                    <p className="mt-1 text-xs font-bold text-[#73878C]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <HeroConversionPanel />
        </div>
      </section>

      <section id="decision" className="relative overflow-hidden bg-[#263F46] py-12 text-white">
        <div className="absolute inset-0 opacity-[0.08]">
          <div className="absolute left-12 top-8 h-44 w-44 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-0 right-20 h-52 w-52 rounded-full bg-white blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5">
          <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
            <div>
              <p className="mb-4 text-[11px] font-black uppercase tracking-[0.24em] text-[#BFE6E2]">
                Customer First
              </p>
              <h2 className="whitespace-nowrap text-[clamp(1.08rem,2.62vw,2.08rem)] font-black leading-[1.08] tracking-[-0.045em]">
                고객이 가장 먼저 알고 싶은 것부터 답합니다
              </h2>
              <p className="mt-5 leading-8 text-[#E5F5F3]">
                기관 규모보다 먼저 확인해야 하는 것은 성적서가 언제, 어떤 항목으로,
                어느 정도 비용으로 가능한지입니다.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {decisionItems.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[24px] border border-white/18 bg-white/[0.10] p-6 backdrop-blur"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#285F67]">
                    {item.icon}
                  </div>
                  <h3 className="whitespace-nowrap text-2xl font-black tracking-[-0.04em]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#E8F6F5]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="strength" className="overflow-hidden bg-[#FAFCFC] py-10 lg:py-11">
        <div className="mx-auto max-w-7xl px-5">
          <div className="overflow-hidden rounded-[30px] border border-[#D8E5E7] bg-white shadow-[0_24px_64px_rgba(36,72,82,0.07)]">
            <div className="grid lg:grid-cols-[0.78fr_1.22fr]">
              <div className="bg-[#315F66] p-7 text-white lg:p-8">
                <p className="mb-3 text-[11px] font-black uppercase tracking-[0.24em] text-[#DDF4F1]">
                  Why YSIET
                </p>
                <h2 className="whitespace-nowrap text-[clamp(1.05rem,2.1vw,1.78rem)] font-black leading-[1.08] tracking-[-0.045em]">
                  신뢰근거와 문의전환을 압축했습니다
                </h2>
                <p className="mt-4 leading-7 text-[#EFFAFA]">
                  지정기관, 공인체계, 납기 중심 상담, 처음 의뢰 지원만 남겼습니다.
                </p>
                <LinkButton href="#contact" variant="light" className="mt-6 h-11 px-5">
                  제품명·희망납기 보내기
                </LinkButton>
              </div>

              <div className="grid gap-0 md:grid-cols-2">
                {strongReasons.map((item) => (
                  <div
                    key={item.title}
                    className="border-b border-[#D8E5E7] p-5 md:border-l odd:md:border-l-0 md:[&:nth-child(n+3)]:border-b-0"
                  >
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#EDF5F5] text-[#4F888B]">
                      {item.icon}
                    </div>
                    <h3 className="whitespace-nowrap text-lg font-black tracking-[-0.03em] text-[#263F46]">
                      {item.title}
                    </h3>
                    <p className="mt-2 leading-6 text-[#60767B]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="overflow-hidden bg-[#F1F7F6] py-8 lg:py-10">
        <div className="mx-auto max-w-7xl px-5">
          <SectionTitle
            eyebrow="Testing Scope"
            titleText="필요한 성적서 유형만 빠르게 확인하세요"
            description="일반 화장품, 기능성 화장품, 원료 부자재, R&D 지원까지 제품 유형과 제출 목적에 따라 상담 후 확정됩니다."
            compact
          />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {serviceGroups.map((item) => (
              <Card key={item.title} className="h-full">
                <div className="p-6">
                  <CheckCircle2 className="mb-4 h-6 w-6 text-[#4F888B]" />
                  <h3 className="whitespace-nowrap text-lg font-black tracking-[-0.03em] text-[#263F46]">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-7 text-[#60767B]">{item.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="fees" className="overflow-hidden bg-[#FAFCFC] py-8 lg:py-10">
        <div className="mx-auto max-w-7xl px-5">
          <SectionTitle
            eyebrow="Fee Guide"
            titleText="대표 수수료 확인"
            description="실제 견적은 시험항목, 제품유형, 긴급 여부에 따라 상담 후 안내받으실 수 있습니다."
            compact
          />

          <div className="hidden overflow-hidden rounded-[24px] border border-[#D8E5E7] bg-white md:block">
            <div className="grid grid-cols-[1.2fr_0.8fr_0.8fr] bg-[#EEF5F4] px-5 py-3 text-sm font-black text-[#263F46]">
              <div>대표 시험항목</div>
              <div>수수료</div>
              <div>비고</div>
            </div>
            {feeRows.map(([name, price, note]) => (
              <div
                key={name}
                className="grid grid-cols-[1.2fr_0.8fr_0.8fr] border-t border-[#D8E5E7] px-5 py-3"
              >
                <div className="font-bold text-[#4F656A]">{name}</div>
                <div className="font-black text-[#285F67]">{price}</div>
                <div className="font-bold text-[#73878C]">{note}</div>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-[22px] bg-[#315F66] p-5 text-white md:flex md:items-center md:justify-between">
            <div>
              <p className="text-[clamp(1rem,2.2vw,1.15rem)] font-black">
                비용을 보기 전에 제품명과 납기를 먼저 알려주세요
              </p>
              <p className="mt-2 text-[#EFFAFA]">
                항목과 긴급 여부에 따라 실제 견적 기준으로 안내드립니다.
              </p>
            </div>
            <LinkButton href="#contact" variant="light" className="mt-5 h-11 px-5 md:mt-0">
              납기 가능 여부 먼저 확인
            </LinkButton>
          </div>
        </div>
      </section>

      <section id="documents" className="overflow-hidden bg-[#F1F7F6] py-7 lg:py-8">
        <div className="mx-auto max-w-7xl px-5">
          <SectionTitle
            eyebrow="Before Request"
            titleText="문의 전 이것만 준비하시면 빠릅니다"
            description="모든 항목을 정확히 몰라도 괜찮습니다. 제품 정보와 희망 납기만 있어도 우선 검토가 가능합니다."
            compact
          />

          <div className="grid gap-3 md:grid-cols-2">
            {documents.map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-[18px] border border-[#D8E5E7] bg-white/88 px-5 py-3 shadow-sm"
              >
                <ClipboardCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#4F888B]" />
                <p className="font-bold text-[#4F656A]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="overflow-hidden bg-[#FAFCFC] py-8 lg:py-9">
        <div className="mx-auto max-w-7xl px-5">
          <SectionTitle eyebrow="Process" titleText="성적서 발급 4단계" compact />

          <div className="overflow-hidden rounded-[24px] border border-[#D8E5E7] bg-white shadow-[0_18px_44px_rgba(36,72,82,0.055)]">
            <div className="grid md:grid-cols-4">
              {process.map(([step, name, desc], index) => (
                <div
                  key={step}
                  className={cx(
                    "p-5",
                    index !== 0 && "border-t border-[#D8E5E7] md:border-l md:border-t-0"
                  )}
                >
                  <p className="text-3xl font-black tracking-[-0.05em] text-[#BFD9DC]">
                    {step}
                  </p>
                  <h3 className="mt-2 text-lg font-black tracking-[-0.03em] text-[#263F46]">
                    {name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#60767B]">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="overflow-hidden bg-[#FAFCFC] py-10 lg:py-12">
        <div className="mx-auto max-w-7xl px-5">
          <div className="overflow-hidden rounded-[34px] bg-[#263F46] text-white shadow-[0_34px_90px_rgba(38,63,70,0.20)]">
            <div className="grid gap-0 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="p-8 md:p-12">
                <p className="mb-4 text-[11px] font-black uppercase tracking-[0.24em] text-[#BFE6E2]">
                  Request Quote
                </p>
                <h2 className="whitespace-nowrap text-[clamp(1.08rem,2.9vw,2.42rem)] font-black leading-[1.08] tracking-[-0.05em]">
                  제품명과 희망 납기만 보내도 먼저 검토합니다
                </h2>
                <p className="mt-7 text-[clamp(0.88rem,1.18vw,1.02rem)] leading-8 text-[#EFFAFA]">
                  제품명, 제형, 필요한 성적서 용도, 희망 납기를 알려주시면 우선 검토 후 안내드립니다.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  <a
                    href="tel:02-312-0540"
                    className="inline-flex h-14 items-center justify-center rounded-full bg-white px-8 font-black text-[#28474E]"
                  >
                    <Phone className="mr-2 h-5 w-5" /> 02-312-0540
                  </a>
                  <a
                    href="mailto:testing@ysiet.com"
                    className="inline-flex h-14 items-center justify-center rounded-full border border-white/25 bg-white/12 px-8 font-black text-white"
                  >
                    <Mail className="mr-2 h-5 w-5" /> 제품명·희망납기 보내기
                  </a>
                </div>
              </div>

              <div className="bg-white p-7 text-[#263F46] md:p-8">
                <p className="text-sm font-black text-[#4F888B]">
                  빠른 검토를 위한 5가지
                </p>
                <ul className="mt-5 space-y-3">
                  {[
                    "제품명 / 제형",
                    "희망 검사항목",
                    "성적서 제출처",
                    "희망 납기",
                    "시료 준비 가능일",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 rounded-2xl bg-[#F3F7F7] px-4 py-3 font-bold"
                    >
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-[#4F888B]" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="mailto:testing@ysiet.com"
                  className="mt-6 flex h-14 items-center justify-center rounded-2xl bg-[#285F67] font-black text-white"
                >
                  납기 가능 여부 먼저 확인
                </a>
                <div className="mt-5 flex gap-3 rounded-2xl border border-[#D8E5E7] bg-white p-4 text-sm font-bold leading-6 text-[#4F656A]">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#4F888B]" />
                  서울시 종로구 인사동5길 42 종로빌딩 10층
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="faq" className="overflow-hidden bg-[#F1F7F6] py-8 lg:py-9">
        <div className="mx-auto max-w-5xl px-5">
          <SectionTitle eyebrow="FAQ" titleText="자주 묻는 질문" compact />

          <div className="space-y-3">
            {faqs.map(([q, a]) => (
              <details
                key={q}
                className="group rounded-[20px] border border-[#D8E5E7] bg-white px-6 py-4 shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-black text-[#263F46]">
                  <span className="flex items-center gap-3">
                    <HelpCircle className="h-5 w-5 shrink-0 text-[#4F888B]" />
                    {q}
                  </span>
                  <span className="text-[#4F888B] transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 leading-8 text-[#60767B]">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <MobileStickyButtons />
    </>
  );
}

function AboutPage() {
  return (
    <>
      <Header />

      <section className="relative overflow-hidden bg-[#EEF5F4]">
        <div className="absolute inset-0">
          <div className="absolute -left-36 top-32 h-[30rem] w-[30rem] rounded-full bg-[#DCEDE9] blur-3xl" />
          <div className="absolute -right-32 -top-36 h-[36rem] w-[36rem] rounded-full bg-[#DDEBF0] blur-3xl" />
          <div className="absolute bottom-[-16rem] left-[42%] h-[28rem] w-[28rem] rounded-full bg-[#F7F3E8] blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:py-20">
          <div>
            <p className="mb-5 whitespace-nowrap text-[clamp(1rem,1.9vw,1.35rem)] font-black tracking-[-0.02em] text-[#4F888B]">
              화장품시험검사기관 소개
            </p>
            <h1 className="whitespace-nowrap text-[clamp(1.7rem,3.6vw,3.1rem)] font-black leading-[1.05] tracking-[-0.055em] text-[#263F46]">
              신뢰할 수 있는 분석결과를 제공합니다
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#4F656A]">
              와이에스환경기술연구원은 KOLAS 국제공인시험기관이자 식약처 지정 화장품 시험검사기관으로,
              화장품 품질검사와 시험분석, 품질보증 서비스를 제공합니다.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <LinkButton href="/#contact" className="h-14 px-8 text-base">
                성적서 납기 확인 <ArrowRight className="ml-2 h-5 w-5" />
              </LinkButton>
              <LinkButton href="/" variant="secondary" className="h-14 px-8 text-base">
                메인으로 돌아가기
              </LinkButton>
            </div>
          </div>

          <Card className="border-0 bg-white/92 p-4 shadow-[0_28px_72px_rgba(36,72,82,0.1)]">
            <div className="grid gap-4 rounded-[22px] bg-[#F8FBFB] p-6">
              <div className="flex items-center gap-4 rounded-2xl border border-[#D8E5E7] bg-white px-4 py-4">
                <img
                  src={YS_LOGO}
                  alt="YS 로고"
                  className="h-14 w-14 rounded-2xl border border-[#E2EDEF] bg-white p-1 object-contain"
                />
                <div>
                  <p className="font-black text-[#263F46]">(주)와이에스환경기술연구원</p>
                  <p className="text-sm font-bold text-[#73878C]">
                    YS Institute of Environmental Technology
                  </p>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-4 rounded-2xl border border-[#D8E5E7] bg-white p-4">
                  <img
                    src={MFDS_LOGO}
                    alt="식품의약품안전처 심볼"
                    className="h-12 w-12 object-contain"
                  />
                  <div>
                    <p className="text-sm font-bold text-[#73878C]">화장품 시험검사기관</p>
                    <p className="mt-1 text-lg font-black tracking-[-0.04em] text-[#263F46]">
                      식약처 지정 제18호
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-[#D8E5E7] bg-white p-4">
                  <img
                    src={KOLAS_LOGO}
                    alt="KOLAS 심볼"
                    className="h-12 w-16 object-contain"
                  />
                  <div>
                    <p className="text-sm font-bold text-[#73878C]">국제공인시험기관</p>
                    <p className="mt-1 text-lg font-black tracking-[-0.04em] text-[#263F46]">
                      KOLAS 제364호
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-[#D8E5E7] bg-white px-4 py-4">
                <img
                  src={YONSEI_LOGO}
                  alt="연세대학교 심볼"
                  className="h-14 w-14 rounded-full object-cover"
                />
                <div>
                  <p className="font-black text-[#263F46]">연세대학교 교원창업기업</p>
                  <p className="text-sm font-bold text-[#73878C]">
                    연구 기반 전문 시험분석 서비스
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className={cx("overflow-hidden bg-[#FAFCFC]", SECTION)}>
        <div className="mx-auto max-w-7xl px-5">
          <SectionTitle
            eyebrow="Company Overview"
            titleText="기관 기본정보"
            description="시험기관 선택 전 확인해야 할 지정, 공인, 소재지, 연락 정보를 한눈에 정리했습니다."
          />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {aboutCards.map(([title, desc]) => (
              <Card key={title}>
                <div className="p-7">
                  <p className="mb-4 text-[11px] font-black uppercase tracking-[0.22em] text-[#5E8E90]">
                    {title}
                  </p>
                  <p className="text-lg font-black leading-8 tracking-[-0.02em] text-[#263F46]">
                    {desc}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className={cx("overflow-hidden bg-[#F1F7F6]", SECTION)}>
        <div className="mx-auto max-w-7xl px-5">
          <SectionTitle
            eyebrow="Testing Scope"
            titleText="화장품 시험검사 서비스 분야"
            description="완제품 품질검사부터 원료 분석, 기능성화장품, R&D 지원까지 제품 목적에 맞춰 상담합니다."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {aboutServiceFields.map((item) => (
              <Card key={item.title}>
                <div className="p-7">
                  <Microscope className="mb-5 h-6 w-6 text-[#4F888B]" />
                  <h3 className="whitespace-nowrap text-xl font-black tracking-[-0.03em] text-[#263F46]">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-7 text-[#60767B]">{item.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#263F46] py-12 text-white">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="mb-4 text-[11px] font-black uppercase tracking-[0.24em] text-[#BFE6E2]">
                Contact
              </p>
              <h2 className="whitespace-nowrap text-[clamp(1.1rem,2.8vw,2.35rem)] font-black leading-[1.08] tracking-[-0.05em]">
                기관 정보를 확인하셨다면 바로 상담하세요
              </h2>
              <p className="mt-5 leading-8 text-[#E8F6F5]">
                필요한 성적서 용도, 제품명, 제형, 희망 납기, 검사항목을 알려주시면 우선 검토 후 안내드립니다.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href="tel:02-312-0540"
                className="inline-flex h-14 items-center justify-center rounded-2xl bg-white px-6 font-black text-[#28474E]"
              >
                <Phone className="mr-2 h-5 w-5" />
                전화 상담
              </a>
              <a
                href="mailto:testing@ysiet.com"
                className="inline-flex h-14 items-center justify-center rounded-2xl border border-white/25 bg-white/12 px-6 font-black text-white"
              >
                <Mail className="mr-2 h-5 w-5" />
                이메일 견적
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <MobileStickyButtons />
    </>
  );
}

export default function App() {
  const path = window.location.pathname;

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#FAFCFC] text-[#263F46] antialiased">
      {path === "/about" ? <AboutPage /> : <HomePage />}
    </main>
  );
}
