import React from "react";
import {
  ArrowRight,
  Award,
  Banknote,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  FileText,
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

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

function LinkButton({ href, children, variant = "primary", className = "" }) {
  const variants = {
    primary:
      "bg-[#3E7B7F] text-white hover:bg-[#346A6E] shadow-[0_14px_32px_rgba(62,123,127,0.16)]",
    secondary:
      "bg-white text-[#2E525A] border border-[#D8E5E7] hover:border-[#98BBC0]",
    light:
      "bg-white text-[#2E525A] border border-white/30 hover:bg-[#F7FBFB]",
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

function SectionTitle({ eyebrow, titleText, description, light = false }) {
  return (
    <div className="mb-12">
      <p
        className={cx(
          "mb-4 text-[11px] font-black uppercase tracking-[0.22em]",
          light ? "text-[#DDF4F1]" : "text-[#5E8E90]"
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cx(
          "whitespace-nowrap text-[clamp(1.05rem,2.6vw,2rem)] font-black leading-[1.1] tracking-[-0.04em]",
          light ? "text-white" : "text-[#27434A]"
        )}
      >
        {titleText}
      </h2>
      {description ? (
        <p
          className={cx(
            "mt-7 whitespace-nowrap text-[clamp(0.78rem,1.2vw,1.05rem)] leading-8",
            light ? "text-[#EFFAFA]" : "text-[#60767B]"
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

const heroTitle =
  "whitespace-nowrap text-[clamp(1.65rem,3.6vw,3.35rem)] font-black leading-[1.06] tracking-[-0.055em] text-[#27434A]";

const heroServiceTitle =
  "mb-5 whitespace-nowrap text-[clamp(1.15rem,2.3vw,1.95rem)] font-black leading-[1.1] tracking-[-0.04em] text-[#4F888B]";

const cardTitle =
  "whitespace-nowrap text-[clamp(1.1rem,2vw,1.65rem)] font-black tracking-[-0.04em]";

const oneLineLight =
  "whitespace-nowrap text-[clamp(0.8rem,1.25vw,1.06rem)] leading-8 text-[#EFFAFA]";

const proofItems = [
  "식약처 지정 제18호",
  "KOLAS 제364호",
  "연세대학교 교원창업기업",
  "대표 수수료 공개",
];

const customerPaths = [
  {
    title: "출시 전 성적서",
    desc: "출고일이 정해졌다면 필요한 항목과 희망 납기부터 확인하세요",
  },
  {
    title: "자가품질 위탁검사",
    desc: "처음 의뢰해도 계약, 시료, 서류, 성적서까지 순서대로 안내합니다",
  },
  {
    title: "납품용 성적서",
    desc: "거래처 제출 일정에 맞춰 시험 가능 여부를 먼저 확인합니다",
  },
  {
    title: "수입화장품 검사",
    desc: "통관과 제출 목적에 맞춰 필요한 시험항목을 확인합니다",
  },
  {
    title: "기능성화장품",
    desc: "미백, 주름개선, 자외선차단 관련 품질검사 항목을 상담합니다",
  },
  {
    title: "광고 검증 분석",
    desc: "무첨가 표시와 성분 검증 목적의 분석을 안내합니다",
  },
];

const salesReasons = [
  {
    icon: <TimerReset className="h-6 w-6" />,
    title: "납기부터 확인",
    desc: "성적서가 필요한 날짜가 있다면 시험 가능 여부를 먼저 안내합니다",
  },
  {
    icon: <Banknote className="h-6 w-6" />,
    title: "수수료 먼저 확인",
    desc: "대표 시험항목 수수료를 공개해 문의 전 비용 감을 잡을 수 있습니다",
  },
  {
    icon: <ClipboardCheck className="h-6 w-6" />,
    title: "처음 의뢰도 안내",
    desc: "검사항목을 몰라도 제품 정보와 제출 목적부터 상담할 수 있습니다",
  },
  {
    icon: <FileCheck2 className="h-6 w-6" />,
    title: "성적서 중심 진행",
    desc: "기관 소개보다 고객이 필요한 시험성적서 발급 동선에 집중합니다",
  },
];

const keyStrengths = [
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "식약처 지정 제18호",
    desc: "화장품 시험검사기관 지정 근거를 바탕으로 시험 상담을 진행합니다",
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "KOLAS 제364호",
    desc: "국제공인시험기관의 품질 체계와 신뢰성을 기반으로 분석합니다",
  },
  {
    icon: <TimerReset className="h-6 w-6" />,
    title: "일반 7일 긴급 3일",
    desc: "성적서가 필요한 날짜가 있다면 가능 여부를 먼저 확인합니다",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "1건 의뢰 상담",
    desc: "처음 진행하는 브랜드와 소량 의뢰도 필요한 순서대로 안내합니다",
  },
];

const services = [
  "화장품 자가품질 위탁검사",
  "유통화장품 안전관리 항목 분석",
  "기능성화장품 품질관리",
  "무첨가 광고 검증 성분분석",
  "중금속 유해물질 성분 분석",
  "화장품 원료 부자재 분석",
  "신제품 공동 개발 및 R&D 지원",
  "시험방법 유효성 확인 및 보고서",
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
  ["02", "항목 안내", "제품 유형과 제출 목적에 따라 필요한 시험항목을 안내합니다"],
  ["03", "시료 접수", "시료와 의뢰 정보를 확인한 뒤 분석 일정을 잡습니다"],
  ["04", "성적서 발급", "시험 완료 후 시험성적서 발급 절차를 안내합니다"],
];

const trustItems = [
  {
    title: "식약처 지정기관",
    desc: "제18호 지정기관으로 자가품질 위탁검사 상담이 가능합니다",
    logo: MFDS_LOGO,
    logoAlt: "식품의약품안전처 심볼",
    logoType: "square",
  },
  {
    title: "KOLAS 공인기관",
    desc: "KOLAS 제364호 국제공인시험기관으로 분석 서비스를 제공합니다",
    logo: KOLAS_LOGO,
    logoAlt: "KOLAS 심볼",
    logoType: "wide",
  },
  {
    title: "연세대학교 교원창업기업",
    desc: "연구 기반 전문성과 현장형 시험분석 서비스를 함께 제공합니다",
    logo: YONSEI_LOGO,
    logoAlt: "연세대학교 심볼",
    logoType: "circle",
  },
  {
    title: "대표이사 엄유진 박사",
    desc: "전문 연구 인력을 중심으로 처음 의뢰도 차근차근 안내합니다",
    icon: <Users className="h-6 w-6" />,
  },
];

const aboutCards = [
  {
    title: "기관명",
    desc: "(주)와이에스환경기술연구원",
  },
  {
    title: "영문명",
    desc: "YS Institute of Environmental Technology",
  },
  {
    title: "기관 지정",
    desc: "식약처 지정 화장품 시험검사기관 제18호",
  },
  {
    title: "공인 체계",
    desc: "KOLAS 국제공인시험기관 제364호",
  },
  {
    title: "대표이사",
    desc: "엄유진 박사",
  },
  {
    title: "소재지",
    desc: "서울시 종로구 인사동5길 42 종로빌딩 10층",
  },
];

const aboutStrengths = [
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "지정기관 기반 신뢰",
    desc: "식약처 지정 화장품 시험검사기관으로 자가품질 위탁검사와 품질검사 상담을 공식 지정 근거에 기반해 안내합니다",
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "국제공인시험기관 체계",
    desc: "KOLAS 인정 시험분석 품질시스템과 기술력을 바탕으로 분석결과의 신뢰성을 높입니다",
  },
  {
    icon: <Microscope className="h-6 w-6" />,
    title: "석박사급 연구인력",
    desc: "화장품 완제품, 원료, 유해물질, 기능성 성분 분석을 전문 연구인력이 수행합니다",
  },
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

const aboutProcess = [
  ["01", "의뢰접수와 상담", "시험의뢰서, 제품정보, 시험항목, 희망 납기를 먼저 확인합니다"],
  ["02", "시료 전달과 수납확인", "우편 또는 직접 접수 후 수수료 납입 시점부터 분석을 진행합니다"],
  ["03", "시험분석 진행", "전문 시험요원이 인증 시험법과 표준물질 관리 체계를 바탕으로 분석합니다"],
  ["04", "성적서 발급", "분석 완료 후 요청 방식에 따라 성적서를 이메일 또는 우편으로 안내합니다"],
];

const aboutValues = ["정확", "정밀", "정직", "디테일", "변화"];

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

const quickActions = [
  {
    icon: <Mail className="h-8 w-8" />,
    title: "빠른 견적 문의",
    desc: "시험항목 견적이 필요하시면 제품 정보와 함께 바로 요청하세요",
    href: "mailto:testing@ysiet.com",
  },
  {
    icon: <ClipboardCheck className="h-8 w-8" />,
    title: "자가품질 위탁검사",
    desc: "처음 의뢰하는 경우에도 필요한 순서대로 안내해드립니다",
    href: "/#documents",
  },
  {
    icon: <FileText className="h-8 w-8" />,
    title: "성적서 안내",
    desc: "성적서 발급 절차와 필요한 준비사항을 먼저 확인하세요",
    href: "/#process",
  },
  {
    icon: <Building2 className="h-8 w-8" />,
    title: "기관소개",
    desc: "지정기관과 공인시험기관으로서의 신뢰근거를 확인하세요",
    href: "/about",
  },
];

function Header({ showKakao = false }) {
  return (
    <header className="sticky top-0 z-50 border-b border-[#D8E5E7] bg-[#FCFEFE]/92 backdrop-blur-xl">
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
            <p className="whitespace-nowrap text-[13px] font-black tracking-[-0.02em] text-[#27434A] sm:text-base">
              (주)와이에스환경기술연구원
            </p>
            <p className="truncate text-xs font-bold text-[#73878C]">
              YS Institute of Environmental Technology
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-4 text-sm font-bold text-[#60767B] xl:flex">
          <a href="/#sales" className="hover:text-[#3E7B7F]">
            선택이유
          </a>
          <a href="/#paths" className="hover:text-[#3E7B7F]">
            의뢰상황
          </a>
          <a href="/#services" className="hover:text-[#3E7B7F]">
            검사항목
          </a>
          <a href="/#fees" className="hover:text-[#3E7B7F]">
            수수료
          </a>
          <a href="/#contact" className="hover:text-[#3E7B7F]">
            문의
          </a>
          <a href="/about" className="hover:text-[#3E7B7F]">
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

function BrandTrustBar() {
  return (
    <section className="border-y border-[#D8E5E7] bg-[#F4F7F7]">
      <div className="mx-auto grid max-w-7xl gap-4 px-5 py-6 md:grid-cols-4">
        <div className="flex items-center gap-3 rounded-2xl border border-[#D8E5E7] bg-white px-4 py-4">
          <TrustLogo src={YS_LOGO} alt="와이에스환경기술연구원 로고" />
          <div>
            <p className="text-sm font-black text-[#27434A]">와이에스환경기술연구원</p>
            <p className="text-xs font-bold text-[#73878C]">시험분석 전문기관</p>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-2xl border border-[#D8E5E7] bg-white px-4 py-4">
          <TrustLogo src={YONSEI_LOGO} alt="연세대학교 심볼" type="circle" />
          <div>
            <p className="text-sm font-black text-[#27434A]">연세대학교 교원창업기업</p>
            <p className="text-xs font-bold text-[#73878C]">연구 기반 시험분석 서비스</p>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-2xl border border-[#D8E5E7] bg-white px-4 py-4">
          <TrustLogo src={MFDS_LOGO} alt="식품의약품안전처 심볼" />
          <div>
            <p className="text-sm font-black text-[#27434A]">식약처 지정 제18호</p>
            <p className="text-xs font-bold text-[#73878C]">화장품 시험검사기관</p>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-2xl border border-[#D8E5E7] bg-white px-4 py-4">
          <TrustLogo src={KOLAS_LOGO} alt="KOLAS 심볼" type="wide" />
          <div>
            <p className="text-sm font-black text-[#27434A]">KOLAS 제364호</p>
            <p className="text-xs font-bold text-[#73878C]">국제공인시험기관</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ showKakao = false }) {
  return (
    <footer className="border-t border-[#D8E5E7] bg-[#F3F6F6]">
      <div className="mx-auto max-w-7xl px-5 py-12">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[28px] border border-[#D8E5E7] bg-white p-7">
            <div className="flex items-start gap-4">
              <img
                src={YS_LOGO}
                alt="와이에스환경기술연구원 로고"
                className="h-16 w-16 rounded-2xl border border-[#E1ECEE] bg-white p-1 object-contain"
              />
              <div>
                <p className="text-2xl font-black tracking-[-0.03em] text-[#27434A]">
                  와이에스환경기술연구원
                </p>
                <p className="mt-1 text-sm font-bold text-[#73878C]">
                  YS Institute of Environmental Technology
                </p>
                <p className="mt-5 leading-7 text-[#5F747A]">
                  대표이사 엄유진 박사
                </p>
                <p className="mt-2 leading-7 text-[#5F747A]">
                  식약처 지정 화장품 시험검사기관 제18호 · KOLAS 국제공인시험기관 제364호
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[24px] border border-[#D8E5E7] bg-white p-6">
              <p className="mb-4 text-[11px] font-black uppercase tracking-[0.22em] text-[#5E8E90]">
                Contact
              </p>
              <div className="space-y-3 text-[#27434A]">
                <p className="font-black">대표전화 02-312-0540</p>
                <p className="font-bold text-[#60767B]">이메일 testing@ysiet.com</p>
                <p className="font-bold text-[#60767B]">팩스 02-312-0560</p>
                {showKakao ? (
                  <a
                    href={KAKAO_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full bg-[#FEE500] px-4 py-2 text-sm font-black text-[#2D2926]"
                  >
                    카톡문의
                  </a>
                ) : null}
              </div>
            </div>

            <div className="rounded-[24px] border border-[#D8E5E7] bg-white p-6">
              <p className="mb-4 text-[11px] font-black uppercase tracking-[0.22em] text-[#5E8E90]">
                Address
              </p>
              <div className="space-y-3 text-[#27434A]">
                <p className="font-black">서울시 종로구 인사동5길 42 종로빌딩 10층</p>
                <p className="font-bold text-[#60767B]">평일 09:00 ~ 18:00</p>
                <p className="font-bold text-[#60767B]">
                  문의 전 제품명과 희망 납기를 알려주세요
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function MobileStickyButtons() {
  return (
    <div className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-3xl -translate-x-1/2 rounded-full bg-[#3A666D] p-2 shadow-2xl md:hidden">
      <div className="grid grid-cols-2 gap-2">
        <a
          href="tel:02-312-0540"
          className="rounded-full bg-white px-4 py-3 text-center text-sm font-black text-[#2E525A]"
        >
          전화 상담
        </a>
        <a
          href="mailto:testing@ysiet.com"
          className="rounded-full bg-[#3E7B7F] px-4 py-3 text-center text-sm font-black text-white"
        >
          이메일 견적
        </a>
      </div>
    </div>
  );
}

function QuickActionSection() {
  return (
    <section className="overflow-hidden border-t border-[#D8E5E7] bg-[#F3F6F6] py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5">
        <SectionTitle
          eyebrow="Quick Access"
          titleText="바로 확인할 수 있게 정리했습니다"
          description="홈페이지 하단에서도 바로 문의와 안내 확인이 가능하도록 빠른 동선을 배치했습니다"
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {quickActions.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              className="group"
            >
              <Card className="h-full transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(36,72,82,0.08)]">
                <div className="p-7">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EDF5F5] text-[#4F888B]">
                    {item.icon}
                  </div>
                  <h3 className="whitespace-nowrap text-[1.28rem] font-black tracking-[-0.03em] text-[#27434A]">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-7 text-[#60767B]">{item.desc}</p>
                  <div className="mt-6 inline-flex items-center text-sm font-black text-[#3E7B7F]">
                    바로 이동
                    <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <>
      <Header showKakao />

      <section id="top" className="relative overflow-hidden bg-[#EEF5F4]">
        <div className="absolute inset-0">
          <div className="absolute -left-36 top-28 h-[30rem] w-[30rem] rounded-full bg-[#DCEDE9] blur-3xl" />
          <div className="absolute -right-32 -top-36 h-[36rem] w-[36rem] rounded-full bg-[#DDEBF0] blur-3xl" />
          <div className="absolute bottom-[-14rem] left-[35%] h-[28rem] w-[28rem] rounded-full bg-[#F7F3E8] blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1.04fr_0.96fr] lg:items-start lg:py-24">
          <div className="min-w-0 pt-2">
            <p className={heroServiceTitle}>화장품 품질검사 위탁 서비스</p>

            <h1 className={heroTitle}>출시·납품 성적서 먼저 확인</h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#4F656A]">
              자가품질 위탁검사, 유통화장품 안전관리, 기능성화장품 품질검사까지
              필요한 항목과 납기를 먼저 안내합니다
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <LinkButton href="#contact" className="h-14 px-8 text-base">
                성적서 납기 확인 <ArrowRight className="ml-2 h-5 w-5" />
              </LinkButton>
              <LinkButton
                href="#fees"
                variant="secondary"
                className="h-14 px-8 text-base"
              >
                대표 수수료 보기
              </LinkButton>
            </div>

            <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-2">
              {proofItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-[#D8E5E7] bg-white/75 px-4 py-3 text-sm font-black text-[#27434A] shadow-sm"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#4F888B]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <Card className="border-0 bg-white/90 p-3 shadow-[0_28px_72px_rgba(36,72,82,0.11)]">
            <div className="rounded-[22px] bg-[#3E6F76] p-7 text-white">
              <p className="mb-3 text-[11px] font-black uppercase tracking-[0.2em] text-[#DDF4F1]">
                Fast Check
              </p>
              <h2 className={cardTitle}>시험기관 비교 중이신가요</h2>
              <p className="mt-4 leading-7 text-[#EFFAFA]">
                납기와 수수료를 먼저 확인해보세요
              </p>
            </div>

            <div className="grid gap-3 p-5">
              <div className="rounded-2xl border border-[#DCE8EA] bg-[#F8FBFB] p-4">
                <p className="text-sm font-bold text-[#73878C]">일반 의뢰</p>
                <p className="mt-1 text-2xl font-black tracking-[-0.04em] text-[#27434A]">
                  7일 소요일
                </p>
              </div>
              <div className="rounded-2xl border border-[#DCE8EA] bg-[#F8FBFB] p-4">
                <p className="text-sm font-bold text-[#73878C]">긴급 의뢰</p>
                <p className="mt-1 text-2xl font-black tracking-[-0.04em] text-[#27434A]">
                  3일 상담 가능
                </p>
              </div>
              <div className="rounded-2xl border border-[#DCE8EA] bg-[#F8FBFB] p-4">
                <p className="text-sm font-bold text-[#73878C]">대표 전화</p>
                <p className="mt-1 text-2xl font-black tracking-[-0.04em] text-[#27434A]">
                  02-312-0540
                </p>
              </div>
            </div>

            <div className="grid gap-3 px-5 pb-5 sm:grid-cols-2">
              <a
                href="tel:02-312-0540"
                className="flex items-center justify-center gap-2 rounded-2xl bg-[#3E7B7F] px-4 py-4 text-center font-black text-white transition hover:bg-[#346A6E]"
              >
                <Phone className="h-5 w-5" /> 전화 상담
              </a>
              <a
                href="mailto:testing@ysiet.com"
                className="flex items-center justify-center gap-2 rounded-2xl border border-[#D8E5E7] bg-white px-4 py-4 text-center font-black text-[#2E525A] transition hover:border-[#98BBC0]"
              >
                <Mail className="h-5 w-5" /> 이메일 견적
              </a>
            </div>
          </Card>
        </div>
      </section>

      <BrandTrustBar />

      <section
        id="sales"
        className="mx-auto max-w-7xl overflow-hidden px-5 py-20 lg:py-24"
      >
        <SectionTitle
          eyebrow="Why YSIET"
          titleText="비교하다가도 문의하게 되는 이유"
          description="고객이 홈페이지에서 가장 먼저 알고 싶은 것은 기관의 규모가 아니라 성적서가 언제, 어떤 항목으로, 어느 정도 비용으로 가능한지입니다"
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {salesReasons.map((item) => (
            <Card key={item.title}>
              <div className="p-7">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EDF5F5] text-[#4F888B]">
                  {item.icon}
                </div>
                <h3 className="whitespace-nowrap text-xl font-black tracking-[-0.03em] text-[#27434A]">
                  {item.title}
                </h3>
                <p className="mt-4 leading-7 text-[#60767B]">{item.desc}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8 rounded-[28px] border border-[#D8E5E7] bg-[#F7FAFA] p-6 md:flex md:items-center md:justify-between">
          <div>
            <p className="text-xl font-black tracking-[-0.03em] text-[#27434A]">
              이미 여러 시험기관을 보고 오셨다면
            </p>
            <p className="mt-2 leading-7 text-[#60767B]">
              YSIET에서는 먼저 필요한 성적서의 항목, 납기, 준비서류부터 확인하실 수 있습니다
            </p>
          </div>
          <LinkButton href="#contact" className="mt-5 md:mt-0">
            바로 문의하기
          </LinkButton>
        </div>
      </section>

      <section
        id="paths"
        className="overflow-hidden bg-[#EEF5F4] px-5 py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Start Here"
            titleText="어떤 상황이신가요"
            description="시험항목을 정확히 몰라도 괜찮습니다. 제품 상황과 제출 목적을 기준으로 필요한 순서를 안내합니다"
          />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {customerPaths.map((item) => (
              <a key={item.title} href="#contact" className="group">
                <Card className="h-full transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_24px_65px_rgba(36,72,82,0.08)]">
                  <div className="p-7">
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EDF5F5] text-[#4F888B]">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                    <h3 className="whitespace-nowrap text-xl font-black tracking-[-0.03em] text-[#27434A]">
                      {item.title}
                    </h3>
                    <p className="mt-3 leading-7 text-[#60767B]">{item.desc}</p>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#4B7D82] py-20 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-5">
          <SectionTitle
            eyebrow="Key Points"
            titleText="의뢰 전 확인할 4가지"
            light
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {keyStrengths.map((item) => (
              <div
                key={item.title}
                className="rounded-[24px] border border-white/18 bg-white/[0.11] p-7"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#4B7D82]">
                  {item.icon}
                </div>
                <h3 className="whitespace-nowrap text-xl font-black tracking-[-0.03em]">
                  {item.title}
                </h3>
                <p className="mt-4 leading-7 text-[#EFFAFA]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="services"
        className="mx-auto max-w-7xl overflow-hidden px-5 py-20 lg:py-24"
      >
        <SectionTitle
          eyebrow="Testing Services"
          titleText="검사 서비스 한눈에"
          description="일반 화장품, 기능성 화장품, 원료 부자재, R&D 지원까지 제품 유형과 제출 목적에 따라 상담 후 확정됩니다"
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service}
              className="rounded-[22px] border border-[#D8E5E7] bg-white p-6 transition hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(36,72,82,0.07)]"
            >
              <CheckCircle2 className="mb-5 h-6 w-6 text-[#4F888B]" />
              <p className="text-lg font-black leading-7 tracking-[-0.025em] text-[#27434A]">
                {service}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="fees" className="overflow-hidden bg-[#FBFCFC] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5">
          <SectionTitle
            eyebrow="Fee Guide"
            titleText="대표 수수료 확인"
            description="실제 견적은 시험항목, 제품유형, 긴급 여부에 따라 상담 후 안내받으실 수 있습니다"
          />

          <div className="hidden overflow-hidden rounded-[24px] border border-[#D8E5E7] bg-white md:block">
            <div className="grid grid-cols-[1.2fr_0.8fr_0.8fr] bg-[#EEF5F4] px-5 py-4 text-sm font-black text-[#27434A]">
              <div>대표 시험항목</div>
              <div>수수료</div>
              <div>비고</div>
            </div>
            {feeRows.map(([name, price, note]) => (
              <div
                key={name}
                className="grid grid-cols-[1.2fr_0.8fr_0.8fr] border-t border-[#D8E5E7] px-5 py-4"
              >
                <div className="font-bold text-[#4F656A]">{name}</div>
                <div className="font-black text-[#4F888B]">{price}</div>
                <div className="font-bold text-[#73878C]">{note}</div>
              </div>
            ))}
          </div>

          <div className="grid gap-3 md:hidden">
            {feeRows.map(([name, price, note]) => (
              <Card key={name}>
                <div className="p-5">
                  <p className="font-black text-[#27434A]">{name}</p>
                  <p className="mt-2 text-2xl font-black text-[#4F888B]">
                    {price}
                  </p>
                  <p className="mt-1 text-sm font-bold text-[#73878C]">{note}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-6 rounded-[24px] bg-[#4B7D82] p-6 text-white md:flex md:items-center md:justify-between">
            <div>
              <p className="text-[clamp(1rem,2.4vw,1.2rem)] font-black">
                견적 전 비용 범위를 먼저 확인하세요
              </p>
              <p className="mt-2 text-[#EFFAFA]">
                제품명과 필요 항목을 보내주시면 실제 견적 기준으로 안내드립니다
              </p>
            </div>
            <LinkButton href="#contact" variant="light" className="mt-5 md:mt-0">
              견적 요청하기
            </LinkButton>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl overflow-hidden px-5 py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <SectionTitle
              eyebrow="Self Quality Testing"
              titleText="자가품질 위탁검사 안내"
            />
            <p className="mt-[-1.5rem] text-lg leading-8 text-[#60767B]">
              품질검사 시설이 없는 경우 식약처 지정 시험검사기관과 품질검사 위탁계약을
              체결하여 품질관리를 진행할 수 있습니다
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["위탁계약", "최초 의뢰 또는 변경사항 발생 시 체결"],
              ["계약비용", "무료, 우편비용 발생 시 실비 청구"],
              ["분석 시작", "수수료 납입 시점부터 진행"],
              ["성적서", "시험 완료 후 원본 우편 전달"],
            ].map(([name, desc]) => (
              <Card key={name}>
                <div className="p-6">
                  <p className="mb-3 text-[11px] font-black uppercase tracking-[0.22em] text-[#5E8E90]">
                    Check
                  </p>
                  <h3 className="text-2xl font-black tracking-[-0.035em] text-[#27434A]">
                    {name}
                  </h3>
                  <p className="mt-4 leading-7 text-[#60767B]">{desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        id="documents"
        className="overflow-hidden bg-[#EEF5F4] py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-5">
          <SectionTitle
            eyebrow="Before Request"
            titleText="문의 전 준비서류"
            description="준비서류와 제품 정보를 미리 알려주시면 상담과 접수가 훨씬 빨라집니다"
          />

          <div className="grid gap-3 md:grid-cols-2">
            {documents.map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-[20px] border border-[#D8E5E7] bg-white/82 p-5 shadow-sm"
              >
                <ClipboardCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#4F888B]" />
                <p className="font-bold text-[#4F656A]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="overflow-hidden bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5">
          <SectionTitle eyebrow="Process" titleText="성적서 발급 4단계" />

          <div className="grid gap-5 md:grid-cols-4">
            {process.map(([step, name, desc]) => (
              <Card key={step}>
                <div className="p-7">
                  <p className="text-5xl font-black tracking-[-0.05em] text-[#D6E7E9]">
                    {step}
                  </p>
                  <h3 className="mt-4 text-xl font-black tracking-[-0.03em] text-[#27434A]">
                    {name}
                  </h3>
                  <p className="mt-3 leading-7 text-[#60767B]">{desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        id="trust"
        className="mx-auto max-w-7xl overflow-hidden px-5 py-20 lg:py-24"
      >
        <SectionTitle eyebrow="Trust Proof" titleText="신뢰근거 확인" />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => (
            <Card key={item.title}>
              <div className="p-7">
                <div className="mb-6 flex h-14 w-20 items-center justify-center rounded-2xl bg-[#EDF5F5] text-[#4F888B]">
                  {item.logo ? (
                    <img
                      src={item.logo}
                      alt={item.logoAlt}
                      className={item.logoType === "wide" ? "h-11 w-16 object-contain" : "h-11 w-11 object-contain"}
                    />
                  ) : (
                    item.icon
                  )}
                </div>
                <h3 className="text-xl font-black tracking-[-0.03em] text-[#27434A]">
                  {item.title}
                </h3>
                <p className="mt-4 leading-7 text-[#60767B]">{item.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-7xl overflow-hidden px-5 py-20 lg:py-24"
      >
        <div className="overflow-hidden rounded-[32px] bg-[#4B7D82] p-8 text-white shadow-[0_30px_80px_rgba(62,123,127,0.16)] md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.86fr] lg:items-center">
            <div>
              <p className="mb-4 text-[11px] font-black uppercase tracking-[0.22em] text-[#DDF4F1]">
                Request Quote
              </p>
              <h2 className="whitespace-nowrap text-[clamp(1.08rem,3vw,2.55rem)] font-black leading-[1.08] tracking-[-0.05em]">
                성적서 납기를 먼저 알려주세요
              </h2>
              <p className={`mt-7 ${oneLineLight}`}>
                제품명, 제형, 필요한 성적서 용도, 희망 납기를 알려주시면 우선 검토 후 안내드립니다
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="tel:02-312-0540"
                  className="inline-flex h-14 items-center justify-center rounded-full bg-white px-8 font-black text-[#2E525A]"
                >
                  <Phone className="mr-2 h-5 w-5" /> 02-312-0540
                </a>
                <a
                  href="mailto:testing@ysiet.com"
                  className="inline-flex h-14 items-center justify-center rounded-full border border-white/25 bg-white/12 px-8 font-black text-white"
                >
                  <Mail className="mr-2 h-5 w-5" /> 이메일 견적
                </a>
              </div>
            </div>

            <div className="rounded-[26px] bg-white p-6 text-[#27434A]">
              <p className="text-sm font-black text-[#4F888B]">
                견적 요청 시 알려주세요
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  "제품명 / 제형",
                  "희망 검사항목",
                  "성적서 제출처",
                  "희망 납기",
                  "시료 준비 가능일",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 font-bold">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#4F888B]" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="mailto:testing@ysiet.com"
                className="mt-6 flex h-14 items-center justify-center rounded-2xl bg-[#3E7B7F] font-black text-white"
              >
                빠른 견적 요청하기
              </a>
              <div className="mt-5 flex gap-3 rounded-2xl bg-[#F3F7F7] p-4 text-sm font-bold leading-6 text-[#4F656A]">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#4F888B]" />
                서울시 종로구 인사동5길 42 종로빌딩 10층
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="overflow-hidden bg-[#EEF5F4] py-20 lg:py-24">
        <div className="mx-auto max-w-5xl px-5">
          <SectionTitle eyebrow="FAQ" titleText="자주 묻는 질문" />

          <div className="space-y-4">
            {faqs.map(([q, a]) => (
              <details
                key={q}
                className="group rounded-[22px] border border-[#D8E5E7] bg-white p-6 shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black text-[#27434A]">
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

      <QuickActionSection />
      <Footer showKakao />
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

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:py-24">
          <div>
            <p className="mb-5 whitespace-nowrap text-[clamp(1rem,1.9vw,1.35rem)] font-black tracking-[-0.02em] text-[#4F888B]">
              화장품시험검사기관 소개
            </p>
            <h1 className="whitespace-nowrap text-[clamp(1.7rem,3.6vw,3.1rem)] font-black leading-[1.05] tracking-[-0.055em] text-[#27434A]">
              신뢰할 수 있는 분석결과를 제공합니다
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#4F656A]">
              와이에스환경기술연구원은 KOLAS 국제공인시험기관이자 식약처 지정 화장품 시험검사기관으로,
              화장품 품질검사와 시험분석, 품질보증 서비스를 제공합니다
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
                  <p className="font-black text-[#27434A]">(주)와이에스환경기술연구원</p>
                  <p className="text-sm font-bold text-[#73878C]">
                    YS Institute of Environmental Technology
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-[#D8E5E7] bg-white px-4 py-4">
                <img
                  src={YONSEI_LOGO}
                  alt="연세대학교 심볼"
                  className="h-14 w-14 rounded-full object-cover"
                />
                <div>
                  <p className="font-black text-[#27434A]">연세대학교 교원창업기업</p>
                  <p className="text-sm font-bold text-[#73878C]">
                    연구 기반 전문 시험분석 서비스
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
                    <p className="mt-1 text-lg font-black tracking-[-0.04em] text-[#27434A]">
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
                    <p className="mt-1 text-lg font-black tracking-[-0.04em] text-[#27434A]">
                      KOLAS 제364호
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <BrandTrustBar />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:py-24">
        <SectionTitle
          eyebrow="Company Overview"
          titleText="기관 기본정보"
          description="시험기관 선택 전 확인해야 할 지정, 공인, 소재지, 연락 정보를 한눈에 정리했습니다"
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {aboutCards.map((item) => (
            <Card key={item.title}>
              <div className="p-7">
                <p className="mb-4 text-[11px] font-black uppercase tracking-[0.22em] text-[#5E8E90]">
                  {item.title}
                </p>
                <p className="text-lg font-black leading-8 tracking-[-0.02em] text-[#27434A]">
                  {item.desc}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="overflow-hidden bg-[#EEF5F4] px-5 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Why Reliable"
            titleText="시험기관으로서의 신뢰"
            description="공식 지정과 국제공인 체계, 전문 연구인력, 분석결과 신뢰 보장 프로세스를 기반으로 시험분석 서비스를 제공합니다"
          />

          <div className="grid gap-5 md:grid-cols-3">
            {aboutStrengths.map((item) => (
              <Card key={item.title}>
                <div className="p-7">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EDF5F5] text-[#4F888B]">
                    {item.icon}
                  </div>
                  <h3 className="whitespace-nowrap text-xl font-black tracking-[-0.03em] text-[#27434A]">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-7 text-[#60767B]">{item.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:py-24">
        <SectionTitle
          eyebrow="Testing Scope"
          titleText="화장품 시험검사 서비스 분야"
          description="완제품 품질검사부터 원료 분석, 기능성화장품, R&D 지원까지 제품 목적에 맞춰 상담합니다"
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {aboutServiceFields.map((item) => (
            <Card key={item.title}>
              <div className="p-7">
                <CheckCircle2 className="mb-5 h-6 w-6 text-[#4F888B]" />
                <h3 className="whitespace-nowrap text-xl font-black tracking-[-0.03em] text-[#27434A]">
                  {item.title}
                </h3>
                <p className="mt-4 leading-7 text-[#60767B]">{item.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="overflow-hidden bg-[#4B7D82] px-5 py-20 text-white lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Service Process"
            titleText="의뢰부터 성적서까지 4단계"
            description="시험의뢰서, 시료, 수수료, 분석 진행, 성적서 발급까지 고객이 헷갈리지 않도록 안내합니다"
            light
          />

          <div className="grid gap-5 md:grid-cols-4">
            {aboutProcess.map(([step, name, desc]) => (
              <div
                key={step}
                className="rounded-[24px] border border-white/18 bg-white/[0.11] p-7"
              >
                <p className="text-5xl font-black tracking-[-0.05em] text-[#DDF4F1]">
                  {step}
                </p>
                <h3 className="mt-5 whitespace-nowrap text-xl font-black tracking-[-0.03em]">
                  {name}
                </h3>
                <p className="mt-4 leading-7 text-[#EFFAFA]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <SectionTitle
              eyebrow="Quality Philosophy"
              titleText="정확한 분석이 고객의 경쟁력입니다"
              description="와이에스환경기술연구원은 시험분석 서비스를 통해 신뢰할 수 있는 가치를 만들고, 고객기업의 경쟁력 향상에 기여하는 것을 목표로 합니다"
            />
            <div className="mt-[-1.5rem] flex flex-wrap gap-3">
              {aboutValues.map((value) => (
                <span
                  key={value}
                  className="rounded-full border border-[#D8E5E7] bg-white px-5 py-3 text-sm font-black text-[#3E7B7F]"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>

          <Card>
            <div className="p-8">
              <p className="mb-4 text-[11px] font-black uppercase tracking-[0.22em] text-[#5E8E90]">
                Contact
              </p>
              <h3 className="whitespace-nowrap text-2xl font-black tracking-[-0.04em] text-[#27434A]">
                기관 정보를 확인하셨다면 바로 상담하세요
              </h3>
              <p className="mt-4 leading-8 text-[#60767B]">
                필요한 성적서 용도, 제품명, 제형, 희망 납기, 검사항목을 알려주시면 우선 검토 후 안내드립니다
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <a
                  href="tel:02-312-0540"
                  className="inline-flex h-14 items-center justify-center rounded-2xl bg-[#3E7B7F] px-6 font-black text-white"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  전화 상담
                </a>
                <a
                  href="mailto:testing@ysiet.com"
                  className="inline-flex h-14 items-center justify-center rounded-2xl border border-[#D8E5E7] bg-white px-6 font-black text-[#2E525A]"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  이메일 견적
                </a>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="overflow-hidden bg-[#EEF5F4] px-5 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Location"
            titleText="찾아오시는 길"
            description="본사는 종로 인사동에 위치하며 연세대학교와 연계된 연구 기반 서비스를 함께 제공합니다"
          />

          <div className="grid gap-5 md:grid-cols-2">
            <Card>
              <div className="p-7">
                <MapPin className="mb-5 h-6 w-6 text-[#4F888B]" />
                <h3 className="whitespace-nowrap text-xl font-black tracking-[-0.03em] text-[#27434A]">
                  본사 종로
                </h3>
                <p className="mt-4 leading-7 text-[#60767B]">
                  서울특별시 종로구 인사동5길 42 종로빌딩 10층
                </p>
                <p className="mt-3 leading-7 text-[#60767B]">
                  종각역 3번 출구 도보 5분 이내, 안국역 6번 출구 도보 10분 이내
                </p>
              </div>
            </Card>

            <Card>
              <div className="p-7">
                <Building2 className="mb-5 h-6 w-6 text-[#4F888B]" />
                <h3 className="whitespace-nowrap text-xl font-black tracking-[-0.03em] text-[#27434A]">
                  연세대학교 연계 연구 기반
                </h3>
                <p className="mt-4 leading-7 text-[#60767B]">
                  연세대학교 교원창업기업으로 연구 기반 전문성과 시험분석 서비스를 연결합니다
                </p>
                <div className="mt-5 flex items-center gap-4 rounded-2xl border border-[#D8E5E7] bg-[#F8FBFB] p-4">
                  <img
                    src={YONSEI_LOGO}
                    alt="연세대학교 심볼"
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <p className="font-black text-[#27434A]">
                    연세대학교 교원창업기업
                  </p>
                </div>
              </div>
            </Card>
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
    <main className="min-h-screen w-full overflow-x-hidden bg-[#FAFCFC] text-[#27434A] antialiased">
      {path === "/about" ? <AboutPage /> : <HomePage />}
    </main>
  );
}
