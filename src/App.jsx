import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ExternalLink,
  FileBadge2,
  FileCheck2,
  HelpCircle,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Microscope,
  Phone,
  ShieldCheck,
  TimerReset,
  UserCheck,
  Award,
  Star,
  X,
  Zap,
  AlertTriangle,
  Clock,
  ClipboardList,
  Layers,
  Package,
  Plane,
  CalendarClock,
} from "lucide-react";

/* ── 상수 ── */
const KAKAO_URL        = "https://pf.kakao.com/_xbUlsn";
const YS_LOGO          = "/ysiet-symbol.png";
const YONSEI_LOGO      = "/yonsei-symbol.jpg";
const KOLAS_LOGO       = "/kolas-symbol.jpg";
const MFDS_LOGO        = "/mfds-symbol.jpg";
const CERTIFICATE_PDF  = "/ysiet-cosmetics-certificate.pdf";
const LAB_INTRO_PDF    = "/ysiet-lab-intro.pdf";
const FEE_GUIDE_PDF    = "/ysiet-fee-guide.pdf";
const SELF_QUALITY_PDF = "/ysiet-self-quality-service.pdf";

function cx(...c) { return c.filter(Boolean).join(" "); }

/* ══════════════════════════
   DATA
══════════════════════════ */

const feeRows = [
  ["내용량 / pH",                    "각 5,000원",   "VAT 별도"],
  ["납 비소 안티몬 카드뮴 니켈",       "각 30,000원",  "ICP-MS 분석"],
  ["수은",                           "15,000원",    "DMA-80 분석"],
  ["중금속 5종 동시분석",             "100,000원",   "납·비소·안티몬·카드뮴·니켈"],
  ["유통화장품 안전관리기준 전 항목",   "325,000원",   "미생물 제외"],
  ["기능성 미백·주름개선 단일항목",     "각 40,000원", "성분별 확인"],
  ["기능성 미백·주름개선 복합항목",     "각 70,000원", "성분 조합별 확인"],
  ["살균·보존제",                     "각 50,000원", "항목별 확인"],
  ["파라벤류 7종 동시분석",            "140,000원",   "동시분석"],
];

const faqs = [
  ["검사항목을 몰라도 문의할 수 있나요?",
   "가능합니다. 제품 유형, 제형, 제출처, 희망 납기를 알려주시면 우선 확인해야 할 항목과 준비사항을 안내드립니다."],
  ["성적서 발급까지 얼마나 걸리나요?",
   "일반 의뢰는 접수 완료 기준 5영업일 이내, 긴급 의뢰는 3영업일 기준으로 협의 가능합니다. 단, 시험 항목과 일정에 따라 달라질 수 있으며, 접수 시 예상 일정을 먼저 안내드립니다."],
  ["자가품질 위탁검사는 왜 필요한가요?",
   "화장품책임판매업자는 제조번호별 품질검사를 마친 후 제품을 유통해야 하며, 자체 시설이 없는 경우 식약처 지정 시험·검사기관 위탁으로 법적 요건을 충족할 수 있습니다."],
  ["납품이나 입점 일정이 촉박해도 상담 가능한가요?",
   "가능합니다. 납품·입점·유통 일정이 정해져 있다면 먼저 알려주세요. 성적서 준비가 지연되지 않도록 가능 일정과 필요한 항목을 우선 확인합니다."],
  ["1건만 의뢰해도 상담 가능한가요?",
   "가능합니다. 1건의 분석 요청도 제품 정보와 제출 목적에 맞춰 상담받으실 수 있습니다."],
];

const certificateFacts = [
  ["지정번호",  "제18호"],
  ["기관명칭",  "(주)와이에스환경기술연구원"],
  ["업무범위",  "검사명령검사, 품질검사"],
  ["분야",     "화장품"],
  ["품목",     "일반화장품, 기능성화장품"],
  ["유효기간",  "2024. 7. 19. ~ 2028. 7. 18."],
  ["법적 근거", "화장품법 시행규칙 제12조 5항", "화장품책임판매업자의 자가품질 위탁검사 수행"],
];

const compareRows = [
  { label: "식약처 지정 위탁검사기관",                        other: "기관에 따라 상이",  highlight: false },
  { label: "KOLAS 국제공인 (ISO/IEC 17025)",              other: "기관에 따라 상이",  highlight: false },
  { label: "연세대 교원창업 — 석·박사 연구인력 직접 분석",      other: "해당 기관 없음",   highlight: true  },
  { label: "납기 확약 (일반 5영업일 / 긴급 3영업일 협의)", other: "기관에 따라 상이",  highlight: false },
  { label: "검사항목 전담 안내 (항목 몰라도 OK)",             other: "기관에 따라 상이",  highlight: false },
  { label: "법정 자가품질 위탁 요건 대응",                    other: "기관에 따라 상이",  highlight: false },
];

const qualityProofs = [
  { icon: Star,       title: "숙련도 테스트 참여",     desc: "국내·외 숙련도 테스트와 품질보증팀 관리감독으로 분석결과 신뢰성을 관리합니다." },
  { icon: Award,      title: "인증표준물질 사용",      desc: "분석 시 인증표준물질을 활용해 결과 신뢰도를 높이는 품질관리 프로세스를 운영합니다." },
  { icon: UserCheck,  title: "석·박사 분석·연구 인력", desc: "각 분야 분석·연구 전담 인력이 화장품 개발, 연구과제, 시험분석 상담을 지원합니다." },
  { icon: Microscope, title: "첨단 분석장비 기반",     desc: "ICP-MS, ICP-OES, DMA-80, GC-MS, HPLC 등 주요 분석 장비 기반으로 시험분석을 수행합니다." },
];

const processSteps = [
  { num: "01", title: "의뢰접수 / 상담",  desc: "시험의뢰서 접수 후 개별 상담을 진행합니다" },
  { num: "02", title: "시료 접수 / 수납", desc: "시료와 수수료 납입 확인 후 분석을 진행합니다" },
  { num: "03", title: "시험분석 진행",    desc: "숙련된 시험검사자가 기준에 따라 분석합니다" },
  { num: "04", title: "성적서 발급",      desc: "시험성적서를 요청하신 방법으로 전달합니다" },
];

const aboutCards = [
  ["기관명",    "(주)와이에스환경기술연구원"],
  ["영문명",    "YS Institute of Environmental Technology"],
  ["기관 지정", "식약처 지정 화장품 시험검사기관 제18호"],
  ["공인 체계", "KOLAS 국제공인시험기관 제364호"],
  ["분석 역량", "석·박사급 분석인력 / ICP-MS, ICP-OES, DMA-80, GC-MS, HPLC 등"],
  ["소재지",   "서울시 종로구 인사동5길 42 종로빌딩 10층"],
];

const aboutServiceFields = [
  { title: "일반 화장품 분석",   desc: "국내 제조 및 수입 화장품, 유통화장품 안전관리 항목, 중금속 및 유해물질 항목을 확인합니다." },
  { title: "기능성 화장품 분석", desc: "미백, 주름개선, 자외선차단 등 기능성화장품 품질관리 항목을 지원합니다." },
  { title: "화장품 원료 분석",   desc: "원료와 부자재의 납품용 위해성 분석, 기능성 원료 평가, 원재료 분석을 지원합니다." },
  { title: "화장품 R&D 지원",   desc: "신제품 개발, 원재료 연구, 시험방법 유효성 확인시험, 공동 개발과 컨설팅을 지원합니다." },
];

const labEquipmentCards = [
  { name: "ICP-MS",  desc: "중금속·유해 무기원소 정량, 미량 함유 농도 신뢰 검증" },
  { name: "ICP-OES", desc: "다원소 동시 분석 및 시료 전처리 과정 포함 정밀 측정" },
  { name: "DMA-80",  desc: "수은 및 휘발성 중금속 항목의 신속·고감도 검출" },
  { name: "GC-MS",   desc: "잔류 용매·휘발성 유기물·관능 성분 스크리닝" },
  { name: "HPLC",    desc: "보존제·자외선차단·기능성 주성분 정량 및 확인" },
];

const preparedDocsCards = [
  { title: "품질검사 위탁계약 (최초 의뢰 시)", body: "사업자등록증 사본·대표자 도장이 필요합니다. 위탁계약 체결 비용은 무료이며 우편 비용만 실비 청구될 수 있습니다." },
  { title: "시험의뢰서", body: "시료명·제조일자·요청 시험항목·용량·수량 등을 작성해 제출해 주세요." },
  { title: "수입화장품", body: "표준통관예정보고서(EDI) 등 수입 신고 관련 서류 제출이 필요할 수 있습니다." },
  { title: "기능성화장품", body: "제품 기준 및 시험방법 관련 자료 일체(필요 시 협의·안내)" },
];

/* ══════════════════════════
   공통 컴포넌트
══════════════════════════ */

function FamilySiteSelect() {
  function handleChange(e) {
    const url = e.target.value;
    if (!url) return;
    window.open(url, "_blank", "noopener,noreferrer");
    e.target.value = "";
  }
  return (
    <div className="relative w-full lg:w-[148px]">
      <select defaultValue="" onChange={handleChange}
        className="h-10 w-full appearance-none border border-[#D6DADB] bg-white px-4 pr-9 text-[13px] font-semibold text-[#747F82] outline-none transition hover:bg-[#FAFAFA]">
        <option value="" disabled>패밀리사이트</option>
        <option value="https://ysiet.com/">와이에스환경기술연구원</option>
        <option value="https://qha.co.kr/">밸런스랩 큐모발검사</option>
      </select>
      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8A9497]" />
    </div>
  );
}

function Header({ showKakao = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const navLinks = [
    ["/why", "선택이유"],
    ["/proof", "품질근거"],
    ["/fees", "수수료"],
    ["/how", "의뢰안내"],
    ["/about", "기관소개"],
  ];

  return (
    <header className={cx(
      "sticky top-0 z-50 transition-all duration-300",
      scrolled
        ? "border-b border-[#D8E5E7] bg-white/98 shadow-[0_2px_20px_rgba(36,72,82,0.08)] backdrop-blur-xl"
        : "border-b border-transparent bg-[#0A1E24]/80 backdrop-blur-sm"
    )}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4">
        <a href="/" className="flex min-w-0 items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#DCE8EA] bg-white shadow-sm">
            <img src={YS_LOGO} alt="와이에스환경기술연구원 로고" className="h-9 w-9 object-contain" />
          </div>
          <div className="min-w-0">
            <p className={cx("whitespace-nowrap text-[13px] font-black tracking-[-0.02em] sm:text-sm transition-colors", scrolled ? "text-[#263F46]" : "text-white")}>
              (주)와이에스환경기술연구원
            </p>
            <p className={cx("text-[11px] font-bold transition-colors", scrolled ? "text-[#5E8E90]" : "text-[#7FC8CC]")}>
              식약처 지정 제18호 · KOLAS 제364호
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-bold xl:flex">
          {navLinks.map(([href, label]) => (
            <a key={label} href={href}
              className={cx("transition hover:text-[#285F67]", scrolled ? "text-[#60767B]" : "text-white/80 hover:text-white")}>
              {label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          {showKakao && (
            <a href={KAKAO_URL} target="_blank" rel="noreferrer"
              className="hidden md:inline-flex h-10 items-center justify-center gap-1.5 rounded-full bg-[#FEE500] px-4 text-sm font-black text-[#2D2926] shadow-[0_4px_14px_rgba(254,229,0,0.35)] transition hover:bg-[#F6D600]">
              <MessageCircle className="h-4 w-4" /> 카카오 문의
            </a>
          )}
          <a href="/#contact"
            className="hidden sm:inline-flex h-10 items-center justify-center rounded-full bg-[#285F67] px-5 text-sm font-black text-white shadow-[0_4px_14px_rgba(40,95,103,0.30)] transition hover:bg-[#1C4D54]">
            납기 확인
          </a>
          {/* 모바일 햄버거 */}
          <button onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl xl:hidden"
            aria-label="메뉴">
            {mobileOpen
              ? <X className={cx("h-6 w-6 transition-colors", scrolled ? "text-[#263F46]" : "text-white")} />
              : <Menu className={cx("h-6 w-6 transition-colors", scrolled ? "text-[#263F46]" : "text-white")} />
            }
          </button>
        </div>
      </div>

      {/* 모바일 내비게이션 드롭다운 */}
      {mobileOpen && (
        <div className={cx(
          "border-t px-5 pb-5 pt-3 xl:hidden",
          scrolled ? "border-[#D8E5E7] bg-white" : "border-white/10 bg-[#0A1E24]"
        )}>
          <div className="flex flex-col gap-1">
            {navLinks.map(([href, label]) => (
              <a key={label} href={href}
                onClick={() => setMobileOpen(false)}
                className={cx(
                  "rounded-xl px-4 py-3 text-[15px] font-bold transition",
                  scrolled
                    ? "text-[#4F656A] hover:bg-[#F5F8F8]"
                    : "text-white/80 hover:bg-white/10"
                )}>
                {label}
              </a>
            ))}
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <a href={KAKAO_URL} target="_blank" rel="noreferrer"
              className="flex h-11 items-center justify-center gap-1.5 rounded-xl bg-[#FEE500] text-sm font-bold text-[#2D2926]">
              <MessageCircle className="h-4 w-4" /> 카카오
            </a>
            <a href="/#contact"
              onClick={() => setMobileOpen(false)}
              className="flex h-11 items-center justify-center gap-1.5 rounded-xl bg-[#285F67] text-sm font-bold text-white">
              납기 확인
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#D8DCDD] bg-[#ECEEEE]">
      <div className="mx-auto max-w-7xl px-5 py-5">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-start">
          <div className="flex min-w-0 items-start gap-3">
            <img src={YS_LOGO} alt="와이에스환경기술연구원" className="h-[60px] w-auto shrink-0 object-contain opacity-90" />
            <div className="min-w-0">
              <div className="text-[13px] font-semibold leading-[1.8] text-[#687477]">
                <p>(주)와이에스환경기술연구원 | (03149) 서울특별시 종로구 인사동5길 42 종로빌딩 10층</p>
                <p>대표이사 엄유진 | 사업자등록번호 211-87-79879 | 대표전화 02-312-0540 | 팩스 02-312-0560</p>
                <p>COPYRIGHT © YS INSTITUTE OF ENVIRONMENTAL TECHNOLOGY. ALL RIGHTS RESERVED.</p>
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {[["개인정보처리방침","#"],["이메일수집거부","#"],["공평성보장선언","#"]].map(([label,href]) => (
                  <a key={label} href={href}
                    className="inline-flex h-8 items-center border border-[#D8DCDD] bg-white px-4 text-[12px] font-semibold text-[#747F82] transition hover:bg-[#F8F9F9]">
                    {label}<span className="ml-2 text-[#A1AAAD]">›</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:ml-auto lg:shrink-0"><FamilySiteSelect /></div>
        </div>
      </div>
    </footer>
  );
}

function HomeHeroNew() {
  return (
    <section className="relative overflow-hidden bg-[#0A1E24]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[#1A4E5A] opacity-50 blur-[130px]" />
        <div className="absolute -right-32 bottom-0 h-[400px] w-[500px] rounded-full bg-[#0E3A42] opacity-60 blur-[100px]" />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage:"linear-gradient(#5DC8BE 1px,transparent 1px),linear-gradient(90deg,#5DC8BE 1px,transparent 1px)",backgroundSize:"48px 48px"}} />
      </div>
      <div className="relative mx-auto max-w-7xl px-5 pb-14 pt-14 lg:pb-18 lg:pt-16">
        <div className="grid gap-10 lg:grid-cols-[3fr_2fr] lg:items-start lg:gap-12">
          <div>
            <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-[#5DC8BE]/30 bg-[#5DC8BE]/10 px-4 py-2">
              <ShieldCheck className="h-4 w-4 text-[#5DC8BE]" />
              <span className="text-[13px] font-black text-[#5DC8BE]">
                식약처 지정 화장품 위탁검사기관 — 전국 19개 중 제18호
              </span>
            </div>
            <h1 className="max-w-[560px] text-[clamp(1.95rem,3.8vw,3rem)] font-black leading-[1.12] tracking-[-0.055em] text-white">
              납기는 다가오는데,
              <br />
              검사 어디 맡겨야 할지 막막하신가요?
            </h1>
            <p className="mt-6 max-w-lg text-[clamp(0.95rem,1.2vw,1.06rem)] leading-[1.85] text-[#8BBFC4]">
              제품명과 희망 납기만 보내주시면, 필요한 시험항목과 가능 일정을 전담 연구원이 먼저 검토해드립니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-2.5">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/8 px-3 py-2 pr-4 backdrop-blur-sm">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/25 bg-white">
                  <img src={MFDS_LOGO} alt="" className="h-7 w-7 object-contain" /></span>
                <span className="text-[12px] font-black text-white sm:text-[13px]">식약처 지정 제18호</span>
              </span>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/8 px-3 py-2 pr-4 backdrop-blur-sm">
                <span className="flex h-8 w-[52px] shrink-0 items-center justify-center rounded-lg border border-white/25 bg-white">
                  <img src={KOLAS_LOGO} alt="" className="h-6 w-[44px] object-contain" /></span>
                <span className="text-[12px] font-black text-white sm:text-[13px]">KOLAS 제364호</span>
              </span>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/8 px-3 py-2 pr-4 backdrop-blur-sm">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#FEE500]/35 bg-white">
                  <img src={YONSEI_LOGO} alt="" className="h-full w-full object-cover" /></span>
                <span className="text-[12px] font-black text-white sm:text-[13px]">연세대 교원창업기업</span>
              </span>
            </div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href={KAKAO_URL} target="_blank" rel="noreferrer"
                className="inline-flex flex-1 min-w-[200px] items-center justify-center gap-2 rounded-2xl bg-[#FEE500] px-6 py-4 text-[15px] font-black text-[#2D2926] shadow-[0_8px_28px_rgba(254,229,0,0.38)] transition hover:bg-[#F6D600]">
                💬 카카오 1:1 상담
              </a>
              <a href="tel:02-312-0540"
                className="inline-flex flex-1 min-w-[200px] items-center justify-center gap-2 rounded-2xl border border-white/30 bg-transparent px-6 py-4 text-[15px] font-black text-white shadow-[0_8px_24px_rgba(0,0,0,0.2)] transition hover:bg-white/10">
                📞 02-312-0540
              </a>
            </div>
          </div>

          <div className="rounded-[28px] border border-white/15 bg-white/10 p-7 shadow-[0_40px_80px_rgba(0,0,0,0.28)] backdrop-blur-md lg:sticky lg:top-28">
            <p className="mb-2 text-[10px] font-black uppercase tracking-[0.22em] text-[#7FD4CC]">Quick Check</p>
            <h2 className="text-lg font-black leading-snug tracking-[-0.04em] text-white">문의 시 먼저 확인하는 4가지</h2>
            <div className="mt-4 space-y-2.5">
              {[
                ["제품명", "정식 제품명 또는 임시 제품명"],
                ["제형", "크림, 앰플, 토너, 선크림 등"],
                ["성적서 용도", "자가품질 / 납품 / 출시 / 수입 / 광고"],
                ["희망 납기", "성적서가 필요한 날짜"],
              ].map(([title, desc], i) => (
                <div key={title}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/8 px-4 py-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#285F67] text-xs font-black text-white">{i + 1}</span>
                  <div className="min-w-0">
                    <span className="block text-sm font-black text-white">{title}</span>
                    <span className="block text-xs font-bold text-[#7FC8CC] sm:inline sm:font-bold">{desc}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 grid grid-cols-2 gap-2 rounded-2xl border border-white/10 bg-white/8 p-4">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0 text-[#7FC8CC]" />
                <div>
                  <p className="text-[10px] font-black text-[#7FC8CC]">일반 의뢰</p>
                  <p className="text-lg font-black text-white">5영업일</p>
                  <p className="text-[9px] font-bold text-[#5A9EA4]">접수 완료 기준</p>
                </div>
              </div>
              <div className="flex items-center gap-2 border-l border-white/15 pl-3">
                <Zap className="h-4 w-4 shrink-0 text-[#5DC8BE]" />
                <div>
                  <p className="text-[10px] font-black text-[#7FC8CC]">긴급 의뢰</p>
                  <p className="text-lg font-black text-[#5DC8BE]">3영업일</p>
                  <p className="text-[9px] font-bold text-[#5A9EA4]">일정 협의 후 확정</p>
                </div>
              </div>
            </div>
            <div className="mt-5 space-y-2.5">
              <a href={KAKAO_URL} target="_blank" rel="noreferrer"
                className="flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-[#FEE500] font-black text-[#2D2926] shadow-[0_8px_24px_rgba(254,229,0,0.35)] transition hover:bg-[#F6D600]">
                <MessageCircle className="h-5 w-5" />💬 카카오톡으로 납기 확인하기 <ArrowRight className="h-4 w-4 shrink-0" />
              </a>
              <div className="grid grid-cols-2 gap-2">
                <a href="tel:02-312-0540"
                  className="flex h-11 items-center justify-center gap-1 rounded-xl border border-white/22 bg-white/12 text-[13px] font-black text-white transition hover:bg-white/18">
                  📞 전화 상담
                </a>
                <a href="mailto:testing@ysiet.com"
                  className="flex h-11 items-center justify-center gap-1 rounded-xl border border-white/22 bg-white/12 text-[13px] font-black text-white transition hover:bg-white/18">
                  ✉ 이메일 견적
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-14 flex justify-center pb-6">
          <a href="#home-usp" className="group inline-flex flex-col items-center gap-1 text-[13px] font-bold text-[#7FC8CC] transition hover:text-[#5DC8BE]">
            <span className="animate-bounce text-xl leading-none text-[#5DC8BE]">↓</span>
            <span>왜 와이에스인가</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function HomeUSP3() {
  return (
    <section id="home-usp" className="border-t border-[#EEF3F3] bg-white py-16 lg:py-[5.25rem]">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-12 text-center lg:mb-14">
          <p className="mb-3 text-[11px] font-black uppercase tracking-[0.24em] text-[#5E8E90]">Why us</p>
          <h2 className="text-[clamp(1.5rem,2.8vw,2.25rem)] font-black leading-[1.12] tracking-[-0.045em] text-[#0A1E24]">
            19개 식약처 지정기관 중, 와이에스만의 3가지
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-8 text-[#60767B]">
            법적 지정·국제공인을 넘어, 학술 기반 + 직통 상담
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {([
            ["border-t-[#FEE500]", "/why", "19개 기관 중 유일", "대학 연구 기반 분석 인력이 직접 검사. 단순 접수·외주가 아닌, 석·박사 연구자가 결과를 책임집니다.", "자세히"],
            ["border-t-[#285F67]", "/proof", "법정 지정 + 국제공인", "식약처 지정 제18호 + KOLAS 제364호(ISO/IEC 17025). 법적 효력과 국제 신뢰를 동시에 갖춘 시험성적서를 발행합니다.", "품질근거 보기"],
            ["border-t-[#5DC8BE]", "/how", "대표번호 거치지 않고 바로", "무기분석(중금속 등)·유기분석(보존제·자외선차단 등) 분야 담당 연구원에게 직접 연결됩니다.", "전담 직통 보기"],
          ]).map(([top, href, headline, desc, lbl]) => (
            <div key={href}
              className={cx(
                "group rounded-2xl border border-[#D8E5E7] border-t-4 bg-white p-7 shadow-[0_10px_32px_rgba(36,72,82,0.06)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(40,95,103,0.13)]",
                top
              )}
            >
              <p className="text-[13px] font-black text-[#285F67]">{headline}</p>
              <p className="mt-3 text-[14px] leading-[1.8] font-semibold text-[#60767B]">{desc}</p>
              <a href={href}
                className="mt-5 inline-flex items-center gap-1 text-sm font-black text-[#285F67] underline-offset-4 hover:underline">
                {lbl} <ArrowRight className="h-4 w-4 shrink-0" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeOrderSituations() {
  const items = [
    { Icon: ClipboardList, title: "자가품질 위탁검사 처음 의뢰", desc: "법정 검사항목부터 준비서류까지 한 번에 정리해서 안내드립니다." },
    { Icon: Package,       title: "거래처 납품용 성적서 필요", desc: "납품·입점 일정에 맞춰 가능 여부부터 확인합니다." },
    { Icon: CalendarClock, title: "제품 출시 일정으로 납기 확인", desc: "마케팅 일정까지 고려해 일정부터 잡습니다." },
    { Icon: Plane,         title: "수입화장품 제출용 검토", desc: "수입 신고 및 제출용 서류 검토 플로우를 함께 맞춥니다." },
    { Icon: Star,          title: "기능성화장품 품질관리 항목 확인", desc: "단일항목·복합항목 포함 가능 범위를 안내합니다." },
    { Icon: Layers,       title: "원료·부자재·R&D 분석 상담", desc: "원료 분석부터 개발 과정 컨설팅까지 협업합니다." },
  ];
  return (
    <section className="bg-[#F5F8F8] py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-10 text-center lg:mb-12">
          <p className="mb-3 text-[11px] font-black uppercase tracking-[0.24em] text-[#5E8E90]">When to ask</p>
          <h2 className="text-[clamp(1.45rem,2.6vw,2.1rem)] font-black leading-[1.15] tracking-[-0.045em] text-[#0A1E24]">
            이 중 한 상황이라면, 지금 문의하세요
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-8 text-[#60767B]">
            처음이든, 다른 기관과 거래 중이든 — 모두 환영합니다
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ Icon, title, desc }) => (
            <div key={title}
              className="rounded-2xl border border-[#D8E5E7] bg-white p-6 shadow-[0_10px_28px_rgba(36,72,82,0.055)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(40,95,103,0.11)]">
              <Icon className="mb-4 h-8 w-8 text-[#4F888B]" strokeWidth={1.75} />
              <p className="text-[15px] font-black text-[#263F46]">{title}</p>
              <p className="mt-2 text-[13px] leading-[1.75] font-semibold text-[#60767B]">{desc}</p>
              <a href={KAKAO_URL} target="_blank" rel="noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center gap-1 rounded-xl bg-[#FEE500] py-3 text-[13px] font-black text-[#2D2926] shadow-[0_6px_20px_rgba(254,229,0,0.28)] transition hover:bg-[#F6D600]">
                💬 이 경우 문의하기 <ArrowRight className="h-4 w-4 shrink-0" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeFeesQuickView() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-12 text-center">
          <p className="mb-3 text-[11px] font-black uppercase tracking-[0.24em] text-[#5E8E90]">Pricing</p>
          <h2 className="text-[clamp(1.45rem,2.6vw,2.1rem)] font-black tracking-[-0.045em] text-[#0A1E24]">일정과 비용, 명확하게</h2>
        </div>
        <div className="mx-auto mb-12 grid max-w-4xl gap-4 sm:grid-cols-3">
          {[
            { big: "5영업일", sub: "일반 의뢰 기준" },
            { big: "3영업일", sub: "긴급 의뢰 (협의)" },
            { big: "무료", sub: "위탁계약 체결" },
          ].map((s) => (
            <div key={s.big}
              className="overflow-hidden rounded-2xl border border-[#D8E5E7] bg-[#FAFCFC] text-center shadow-[0_10px_28px_rgba(36,72,82,0.05)]">
              <div className="h-1.5 bg-gradient-to-r from-[#285F67] to-[#5DC8BE]" />
              <div className="px-4 py-6">
                <p className="text-2xl font-black text-[#285F67]">{s.big}</p>
                <p className="mt-2 text-[12px] font-bold leading-5 text-[#60767B]">{s.sub}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="overflow-hidden rounded-2xl border border-[#D8E5E7] shadow-[0_8px_28px_rgba(36,72,82,0.06)]">
          <div className="hidden grid-cols-[1.65fr_0.85fr_0.95fr] gap-px bg-[#EEF5F4] px-6 py-3 text-sm font-black text-[#263F46] md:grid">
            <div>대표 시험항목</div>
            <div className="text-right">금액</div>
            <div>비고</div>
          </div>
          {[
            ["내용량 / pH", "각 5,000원", "VAT 별도"],
            ["중금속 5종 동시분석 (납·비소·안티몬·카드뮴·니켈)", "100,000원", " — "],
            ["유통화장품 안전관리기준 전 항목", "325,000원", "미생물 제외"],
            ["기능성 단일 항목 (미백/주름개선)", "각 40,000원", ""],
            ["파라벤류 7종 동시분석", "140,000원", ""],
          ].map(([name, amt, note], i) => (
            <div key={name}
              className={cx(
                "flex flex-wrap items-start justify-between gap-3 border-t border-[#F0F3F3] px-6 py-4 md:grid md:grid-cols-[1.65fr_0.85fr_0.95fr]",
                i % 2 === 0 ? "bg-white" : "bg-[#FAFCFC]"
              )}
            >
              <p className="font-semibold leading-6 text-[#4F656A] md:col-span-1">{name}</p>
              <p className="text-right font-black text-[#285F67] md:col-start-2 md:justify-self-end">{amt}</p>
              <p className="text-sm font-semibold text-[#8A9EA2] md:col-start-3">{note || " "}</p>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-8 grid max-w-4xl gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-[#D8E5E7] bg-[#F8FBFB] p-6">
            <p className="text-[13px] font-bold leading-7 text-[#4F656A]">
              <span className="mr-2 font-black text-[#285F67]">✓</span>
              Raw Data는 사전 요청 시 제공 가능 (의뢰항목 수수료의 10% 추가)
            </p>
          </div>
          <div className="rounded-2xl border border-[#D8E5E7] bg-[#F8FBFB] p-6">
            <p className="text-[13px] font-bold leading-7 text-[#4F656A]">
              <span className="mr-2 font-black text-[#285F67]">✓</span>
              일반 7일 / 긴급 3일 기준 (시험일정에 따라 협의)
            </p>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="/fees"
            className="inline-flex h-12 min-w-[200px] items-center justify-center gap-2 rounded-2xl border border-[#D8E5E7] bg-white px-7 text-[14px] font-black text-[#28474E] shadow-sm transition hover:border-[#9DBFC4]">
            전체 수수료 보기 <ArrowRight className="h-4 w-4 shrink-0" />
          </a>
          <a href={FEE_GUIDE_PDF} target="_blank" rel="noreferrer"
            className="inline-flex h-12 min-w-[200px] items-center justify-center gap-2 rounded-2xl bg-[#285F67] px-7 text-[14px] font-black text-white shadow-[0_8px_24px_rgba(40,95,103,0.25)] transition hover:bg-[#1C4D54]">
            수수료 PDF 다운로드 <ExternalLink className="h-4 w-4 shrink-0" />
          </a>
        </div>
      </div>
    </section>
  );
}

function HomeContactCenter() {
  return (
    <section className="bg-[#FAFCFC] pb-14 pt-4 lg:pb-20">
      <div className="mx-auto max-w-7xl px-5 py-14">
        <div className="mb-12 text-center">
          <p className="mb-3 text-[11px] font-black uppercase tracking-[0.24em] text-[#5E8E90]">Direct</p>
          <h2 className="text-[clamp(1.45rem,2.6vw,2.1rem)] font-black tracking-[-0.045em] text-[#0A1E24]">지금 바로, 분야 담당 연구원에게</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-8 text-[#60767B]">
            대표번호를 거치지 않고, 분야 담당 연구원과 직접 상담하세요
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="group rounded-2xl border border-[#D8E5E7] bg-white p-7 shadow-[0_10px_28px_rgba(36,72,82,0.06)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(40,95,103,0.11)]">
            <p className="mb-3 inline-block rounded-full bg-[#EEF5F4] px-3 py-1 text-[11px] font-black uppercase tracking-[0.12em] text-[#285F67]">무기분석</p>
            <p className="text-lg font-black text-[#263F46]">전석호 수석연구원</p>
            <p className="mt-3 text-[13px] font-semibold leading-[1.8] text-[#60767B]">
              중금속·디옥산·메탄올·포름알데하이드 등
            </p>
            <a href="tel:07043374869"
              className="mt-6 flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#285F67] text-sm font-black text-white transition hover:bg-[#1C4D54]">
              <Phone className="h-4 w-4 shrink-0" /> 070-4337-4869
            </a>
          </div>
          <div className="group rounded-2xl border border-[#D8E5E7] bg-white p-7 shadow-[0_10px_28px_rgba(36,72,82,0.06)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(40,95,103,0.11)]">
            <p className="mb-3 inline-block rounded-full bg-[#EEF5F4] px-3 py-1 text-[11px] font-black uppercase tracking-[0.12em] text-[#285F67]">유기분석</p>
            <p className="text-lg font-black text-[#263F46]">박미희 책임연구원</p>
            <p className="mt-3 text-[13px] font-semibold leading-[1.8] text-[#60767B]">
              살균·보존제·자외선차단·기능성 주성분 등
            </p>
            <a href="tel:07043374830"
              className="mt-6 flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#285F67] text-sm font-black text-white transition hover:bg-[#1C4D54]">
              <Phone className="h-4 w-4 shrink-0" /> 070-4337-4830
            </a>
          </div>
        </div>
      </div>
      <div className="rounded-t-[32px] bg-[#0A1E24] px-5 py-14">
        <div className="mx-auto max-w-3xl space-y-5">
          <a href={KAKAO_URL} target="_blank" rel="noreferrer"
            className="flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-[#FEE500] text-[16px] font-black text-[#2D2926] shadow-[0_10px_32px_rgba(254,229,0,0.38)] transition hover:bg-[#F6D600]">
            <MessageCircle className="h-5 w-5" /> 💬 카카오톡 1:1 상담
          </a>
          <div className="grid gap-3 sm:grid-cols-2">
            <a href="tel:02-312-0540"
              className="flex h-12 items-center justify-center gap-2 rounded-2xl border border-white/25 bg-white/10 text-[14px] font-black text-white transition hover:bg-white/14">
              ☎ 대표번호 02-312-0540
            </a>
            <a href="mailto:testing@ysiet.com"
              className="flex h-12 items-center justify-center gap-2 rounded-2xl border border-white/25 bg-white/8 text-[14px] font-black text-white transition hover:bg-white/12">
              ✉ testing@ysiet.com
            </a>
          </div>
          <div className="rounded-2xl border border-white/12 bg-white/8 p-5 text-[13px] font-bold leading-7 text-[#AECDD0]">
            ✓ 위탁계약 체결 무료 (실비만)
            <br />
            ✓ 화장품법 시행규칙 제12조 5항 법정 위탁검사
            <br />
            시료 발송: 서울 종로구 인사동5길 42 종로빌딩 10층
          </div>
        </div>
      </div>
    </section>
  );
}

function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0A1E24] px-3 pb-[env(safe-area-inset-bottom)] pt-2 md:hidden">
      <div className="grid grid-cols-3 gap-2 pb-2">
        <a href="tel:02-312-0540"
          className="flex flex-col items-center gap-1 rounded-xl bg-white/12 py-3 text-[11px] font-black text-white">
          <Phone className="h-[18px] w-[18px]" />전화
        </a>
        <a href={KAKAO_URL} target="_blank" rel="noreferrer"
          className="flex flex-col items-center gap-1 rounded-xl bg-[#FEE500] py-3 text-[11px] font-black text-[#2D2926]">
          <MessageCircle className="h-[18px] w-[18px]" />카카오
        </a>
        <a href="mailto:testing@ysiet.com"
          className="flex flex-col items-center gap-1 rounded-xl bg-[#285F67] py-3 text-[11px] font-black text-white">
          <Mail className="h-[18px] w-[18px]" />이메일
        </a>
      </div>
    </div>
  );
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={cx("overflow-hidden rounded-2xl border transition-all duration-200",
      open ? "border-[#285F67]/40 shadow-[0_8px_28px_rgba(40,95,103,0.10)]" : "border-[#D8E5E7] bg-white")}>
      <button onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left">
        <span className="flex items-center gap-3 text-[15px] font-black text-[#263F46]">
          <HelpCircle className="h-5 w-5 shrink-0 text-[#4F888B]" />{q}
        </span>
        <span className={cx("shrink-0 text-2xl font-black leading-none text-[#285F67] transition-transform duration-200", open && "rotate-45")}>+</span>
      </button>
      {open && (
        <div className="border-t border-[#EEF3F3] bg-[#F8FBFB] px-6 pb-5 pt-4 text-[15px] leading-8 text-[#60767B]">{a}</div>
      )}
    </div>
  );
}

function SubpageHero({ eyebrow, title, subtitle }) {
  return (
    <section className="border-b border-[#D8E5E7] bg-[#EEF5F4] py-14 lg:py-[4.25rem]">
      <div className="mx-auto max-w-7xl px-5">
        <p className="mb-4 text-[11px] font-black uppercase tracking-[0.24em] text-[#5E8E90]">{eyebrow}</p>
        <h1 className="max-w-[900px] text-[clamp(1.65rem,3.2vw,2.65rem)] font-black leading-[1.15] tracking-[-0.05em] text-[#263F46]">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-[15px] leading-8 text-[#4F656A]">{subtitle}</p>
        <div className="mt-8 flex flex-wrap gap-2.5">
          {[
            { t: "식약처 지정 제18호", s: "bg-[#1C3038] text-white border border-transparent" },
            { t: "KOLAS 제364호", s: "bg-white border border-[#D8E5E7] text-[#263F46]" },
            { t: "연세대 교원창업기업", s: "bg-[#285F67] text-white border border-transparent" },
          ].map(({ t, s }) => (
            <span key={t} className={cx("inline-flex h-9 items-center rounded-full px-4 text-[11px] font-black tracking-[-0.02em]", s)}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function SubpageFooterCta({ eyebrow }) {
  return (
    <section className="bg-[#0A1E24] py-14">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="min-w-0">
            <p className="mb-3 text-[11px] font-black uppercase tracking-[0.24em] text-[#5DC8BE]">{eyebrow || "Contact"}</p>
            <h2 className="text-[clamp(1.35rem,2.6vw,2.2rem)] font-black leading-[1.12] tracking-[-0.045em] text-white">지금 문의하기</h2>
            <p className="mt-3 max-w-xl text-[15px] leading-8 text-[#7FC8CC]">
              제품명·제형·희망 납기를 알려주시면 담당자가 가능 일정과 필요 항목을 검토합니다.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto lg:shrink-0">
            <a href={KAKAO_URL} target="_blank" rel="noreferrer"
              className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-2xl bg-[#FEE500] px-8 font-black text-[#2D2926] transition hover:bg-[#F6D600]">
              <MessageCircle className="h-5 w-5 shrink-0" /> 카카오톡
            </a>
            <a href="tel:02-312-0540"
              className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-2xl bg-white/15 px-8 font-black text-white transition hover:bg-white/22">
              <Phone className="h-5 w-5 shrink-0" /> 전화 상담
            </a>
            <a href="mailto:testing@ysiet.com"
              className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-2xl border border-white/25 bg-white/8 px-8 font-black text-white transition hover:bg-white/15">
              <Mail className="h-5 w-5 shrink-0" /> 이메일
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header showKakao={true} />

      <main>
        <HomeHeroNew />

        <HomeUSP3 />

        <HomeOrderSituations />

        <HomeFeesQuickView />

        <HomeContactCenter />
      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}

/* ══════════════════════════
   홈 페이지
══════════════════════════ */
function LegacyHomePage() {
  return (
    <>
      <Header showKakao />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0A1E24]">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[#1A4E5A] opacity-50 blur-[130px]" />
          <div className="absolute -right-32 bottom-0 h-[400px] w-[500px] rounded-full bg-[#0E3A42] opacity-60 blur-[100px]" />
          <div className="absolute inset-0 opacity-[0.03]"
            style={{backgroundImage:"linear-gradient(#5DC8BE 1px,transparent 1px),linear-gradient(90deg,#5DC8BE 1px,transparent 1px)",backgroundSize:"48px 48px"}} />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-14 lg:pb-20 lg:pt-16">
          <div className="grid gap-14 lg:grid-cols-[1fr_440px] lg:items-start">

            {/* 좌: 헤드라인 */}
            <div>
              {/* 상단 배지 */}
              <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-[#5DC8BE]/30 bg-[#5DC8BE]/10 px-4 py-2">
                <ShieldCheck className="h-4 w-4 text-[#5DC8BE]" />
                <span className="text-[13px] font-black text-[#5DC8BE]">
                  식약처 지정 화장품 위탁검사기관 — 전국 19개 중 제18호
                </span>
              </div>

              {/* 메인 헤드라인 */}
              <h1 className="max-w-[640px] text-[clamp(2rem,3.8vw,3.2rem)] font-black leading-[1.08] tracking-[-0.055em] text-white">
                성적서 납기,<br />
                <span className="relative inline-block text-[#5DC8BE]">
                  놓치면 납품이 밀립니다.
                  <span className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-[#5DC8BE]/40" />
                </span><br />
                <span className="text-white/90">먼저 확인하세요.</span>
              </h1>

              <p className="mt-6 max-w-lg text-[clamp(0.95rem,1.2vw,1.06rem)] leading-[1.9] text-[#8BBFC4]">
                검사항목을 몰라도 괜찮습니다.
                제품명·제형·희망 납기만 알려주시면
                식약처 지정·KOLAS 공인 기관에서
                필요한 항목과 가능 일정을 전담 안내합니다.
              </p>

              {/* 핵심 숫자 하이라이트 */}
              <div className="mt-7 inline-flex items-center gap-3 rounded-xl border border-[#5DC8BE]/25 bg-[#5DC8BE]/8 px-5 py-3">
                <span className="text-2xl font-black text-[#5DC8BE]">19</span>
                <span className="text-[13px] leading-5 font-medium text-[#8BBFC4]">개 식약처 지정기관 중<br /><span className="font-bold text-white">와이에스를 선택해야 하는 이유 ↓</span></span>
              </div>

              {/* 연세대 차별점 강조 블록 */}
              <div className="mt-7 flex items-start gap-4 rounded-2xl border border-[#FEE500]/20 bg-[#FEE500]/8 p-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#FEE500]/40 bg-white">
                  <img src={YONSEI_LOGO} alt="연세대학교" className="h-12 w-12 rounded-full object-cover" />
                </div>
                <div>
                  <p className="text-[13px] font-black text-[#FEE500]">연세대학교 교원창업기업 — 19개 기관 중 유일</p>
                  <p className="mt-1 text-[12px] leading-5 font-bold text-[#C8A800]">
                    대학 연구 기반 분석 인력이 직접 검사합니다.
                    단순 접수·외주가 아닌, 석·박사 연구자가 결과를 책임집니다.
                  </p>
                </div>
              </div>

              {/* 핵심 수치 */}
              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  { val: "5영업일",       label: "일반 의뢰 기준 납기" },
                  { val: "3영업일",       label: "긴급 의뢰 (협의)" },
                  { val: "19개 중 제18호", label: "식약처 지정기관" },
                ].map((s) => (
                  <div key={s.val}
                    className="rounded-2xl border border-white/12 bg-white/8 px-5 py-4 backdrop-blur-sm">
                    <p className="text-xl font-black text-white">{s.val}</p>
                    <p className="mt-1 text-[11px] font-bold text-[#7FC8CC]">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* 신뢰 로고 — 식약처 + KOLAS (연세대는 위에서 강조했으므로 제외) */}
              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  { logo: MFDS_LOGO,  label: "식약처 지정 제18호", sub: "화장품 시험검사기관",      type: "sq" },
                  { logo: KOLAS_LOGO, label: "KOLAS 제364호",     sub: "ISO/IEC 17025 국제공인", type: "wide" },
                ].map((item) => (
                  <div key={item.label}
                    className="flex items-center gap-3 rounded-xl border border-white/12 bg-white/8 px-4 py-3 backdrop-blur-sm">
                    <div className={cx(
                      "flex shrink-0 items-center justify-center border border-white/20 bg-white",
                      item.type === "wide" ? "h-9 w-14 rounded-lg" : "h-9 w-9 rounded-lg"
                    )}>
                      <img src={item.logo} alt={item.label}
                        className={cx("object-contain", item.type === "wide" ? "h-7 w-12" : "h-7 w-7")} />
                    </div>
                    <div>
                      <p className="text-[13px] font-black text-white">{item.label}</p>
                      <p className="text-[11px] font-bold text-[#7FC8CC]">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* 사회적 증거 숫자 */}
              <div className="mt-6 grid grid-cols-3 gap-2 rounded-2xl border border-white/12 bg-white/8 px-4 py-4 backdrop-blur-sm">
                {[
                  { val: "17년",  label: "KOLAS 공인 유지" },
                  { val: "7년차", label: "식약처 지정 운영" },
                  { val: "AA등급", label: "기보 기술신용평가" },
                ].map((s, i) => (
                  <div key={s.val} className={cx("text-center", i !== 0 && "border-l border-white/15")}>
                    <p className="text-lg font-black text-white">{s.val}</p>
                    <p className="mt-0.5 text-[10px] font-bold text-[#7FC8CC]">{s.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-4">
                <a href={CERTIFICATE_PDF} target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-black text-[#5DC8BE] underline-offset-4 hover:underline">
                  시험·검사기관 지정서 보기 <ExternalLink className="h-3.5 w-3.5" />
                </a>
                <a href={SELF_QUALITY_PDF} target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-black text-[#5DC8BE] underline-offset-4 hover:underline">
                  자가품질 위탁 소개자료 <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* 우: 문의 패널 */}
            <div className="rounded-[28px] border border-white/15 bg-white/10 p-7 shadow-[0_40px_80px_rgba(0,0,0,0.3)] backdrop-blur-md">
              <div className="mb-5 flex items-start gap-3 rounded-xl border border-[#FEE500]/30 bg-[#FEE500]/10 p-3">
                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-[#FEE500]" />
                <p className="text-[12px] font-bold leading-5 text-[#FEE500]">
                  납품·입점 일정이 있다면 성적서 납기를 <strong>지금</strong> 먼저 확인하세요.
                  일정 확인 없이 접수하면 지연 위험이 있습니다.
                </p>
              </div>

              <p className="mb-2 text-[10px] font-black uppercase tracking-[0.22em] text-[#7FD4CC]">Quick Check</p>
              <h2 className="text-lg font-black leading-snug tracking-[-0.04em] text-white">
                문의 시 먼저 확인하는 4가지
              </h2>

              <div className="mt-4 space-y-2.5">
                {[
                  ["제품명",     "정식 제품명 또는 임시 제품명"],
                  ["제형",       "크림, 앰플, 토너, 선크림 등"],
                  ["성적서 용도", "자가품질 / 납품 / 출시 / 수입 / 광고"],
                  ["희망 납기",  "성적서가 필요한 날짜"],
                ].map(([title, desc], i) => (
                  <div key={title}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/8 px-4 py-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#285F67] text-xs font-black text-white">{i + 1}</span>
                    <div>
                      <span className="text-sm font-black text-white">{title}</span>
                      <span className="ml-2 text-xs font-bold text-[#7FC8CC]">{desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 grid grid-cols-2 gap-2 rounded-2xl border border-white/10 bg-white/8 p-4">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-[#7FC8CC]" />
                  <div>
                    <p className="text-[10px] font-black text-[#7FC8CC]">일반 의뢰</p>
                    <p className="text-lg font-black text-white">5영업일</p>
                    <p className="text-[9px] font-bold text-[#5A9EA4]">접수 완료 기준</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 border-l border-white/15 pl-4">
                  <Zap className="h-4 w-4 text-[#5DC8BE]" />
                  <div>
                    <p className="text-[10px] font-black text-[#7FC8CC]">긴급 의뢰</p>
                    <p className="text-lg font-black text-[#5DC8BE]">3영업일</p>
                    <p className="text-[9px] font-bold text-[#5A9EA4]">일정 협의 후 확정</p>
                  </div>
                </div>
              </div>

              <div className="mt-5 space-y-2.5">
                <a href={KAKAO_URL} target="_blank" rel="noreferrer"
                  className="flex h-14 w-full items-center justify-center gap-2.5 rounded-2xl bg-[#FEE500] font-black text-[#2D2926] shadow-[0_8px_24px_rgba(254,229,0,0.35)] transition hover:bg-[#F6D600]">
                  <MessageCircle className="h-5 w-5" />
                  카카오톡으로 납기 확인하기 <ArrowRight className="h-4 w-4" />
                </a>
                <div className="grid grid-cols-2 gap-2">
                  <a href="tel:02-312-0540"
                    className="flex h-12 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/12 text-sm font-black text-white transition hover:bg-white/18">
                    <Phone className="h-4 w-4" /> 전화 상담
                  </a>
                  <a href="mailto:testing@ysiet.com"
                    className="flex h-12 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/12 text-sm font-black text-white transition hover:bg-white/18">
                    <Mail className="h-4 w-4" /> 이메일 견적
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY YS */}
      <section id="why" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-12">
            <p className="mb-3 text-[11px] font-black uppercase tracking-[0.24em] text-[#5E8E90]">Why YSIET</p>
            <h2 className="max-w-2xl text-[clamp(1.6rem,2.8vw,2.4rem)] font-black leading-[1.1] tracking-[-0.05em] text-[#0A1E24]">
              식약처 지정 19개 위탁검사기관 중<br />
              <span className="text-[#285F67]">왜 와이에스여야 하는가</span>
            </h2>
            <p className="mt-4 max-w-2xl text-[15px] leading-8 text-[#60767B]">
              지정 여부만으로는 충분하지 않습니다.
              납기 대응력, 공인 분석 체계, 전담 안내 능력을 함께 갖춘 기관인지 확인하세요.
            </p>
          </div>

          <div className="mb-12">
            {/* 데스크탑 테이블 */}
            <div className="hidden overflow-hidden rounded-2xl border border-[#D8E5E7] shadow-[0_8px_30px_rgba(36,72,82,0.07)] md:block">
              <div className="grid grid-cols-[1fr_120px_160px] bg-[#0A1E24] px-6 py-5">
                <p className="text-sm font-semibold text-white/60">비교 항목</p>
                <p className="text-center text-sm font-bold text-[#5DC8BE]">와이에스 ✓</p>
                <p className="text-center text-sm font-semibold text-white/35">타 기관 일반</p>
              </div>
              {compareRows.map((row, i) => (
                <div key={row.label}
                  className={cx(
                    "grid grid-cols-[1fr_120px_160px] items-center border-t px-6 py-4",
                    row.highlight
                      ? "border-[#FEE500]/30 bg-[#FFFBEA]"
                      : i % 2 === 0 ? "border-[#EEF3F3] bg-white" : "border-[#EEF3F3] bg-[#FAFCFC]"
                  )}>
                  <p className={cx("font-semibold", row.highlight ? "text-[#7A6000]" : "text-[#4F656A]")}>
                    {row.highlight && <span className="mr-2 inline-block rounded-full bg-[#FEE500] px-2 py-0.5 text-[10px] font-black text-[#7A6000]">유일</span>}
                    {row.label}
                  </p>
                  <div className="flex justify-center">
                    <span className={cx(
                      "inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-bold",
                      row.highlight ? "bg-[#FEE500] text-[#7A6000]" : "bg-[#E8F5F4] text-[#285F67]"
                    )}>
                      <CheckCircle2 className="h-3.5 w-3.5" /> 보유
                    </span>
                  </div>
                  <p className={cx("text-center text-sm font-medium", row.highlight ? "text-[#B89000]" : "text-[#A0B0B4]")}>
                    {row.other}
                  </p>
                </div>
              ))}
            </div>

            {/* 모바일 카드뷰 */}
            <div className="space-y-3 md:hidden">
              {compareRows.map((row) => (
                <div key={row.label}
                  className={cx(
                    "rounded-xl border p-4",
                    row.highlight
                      ? "border-[#FEE500]/40 bg-[#FFFBEA]"
                      : "border-[#D8E5E7] bg-white"
                  )}>
                  <div className="flex items-start justify-between gap-3">
                    <p className={cx("text-[14px] font-semibold leading-6", row.highlight ? "text-[#7A6000]" : "text-[#4F656A]")}>
                      {row.highlight && <span className="mr-1.5 inline-block rounded-full bg-[#FEE500] px-2 py-0.5 text-[10px] font-black text-[#7A6000]">유일</span>}
                      {row.label}
                    </p>
                    <span className={cx(
                      "inline-flex shrink-0 items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-bold",
                      row.highlight ? "bg-[#FEE500] text-[#7A6000]" : "bg-[#E8F5F4] text-[#285F67]"
                    )}>
                      <CheckCircle2 className="h-3 w-3" /> YS 보유
                    </span>
                  </div>
                  <p className={cx("mt-2 text-[12px] font-medium", row.highlight ? "text-[#B89000]" : "text-[#A0B0B4]")}>
                    타 기관: {row.other}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12 flex items-center gap-3 rounded-xl border border-[#D8E5E7] bg-[#F8FBFB] px-5 py-4">
            <ShieldCheck className="h-5 w-5 shrink-0 text-[#4F888B]" />
            <p className="text-[13px] leading-6 text-[#60767B]">
              위 비교는 식약처 지정 기관 공통 요건과 와이에스 보유 역량을 기준으로 정리한 내용입니다.
              <a href="https://www.mfds.go.kr/brd/m_218/list.do" target="_blank" rel="noreferrer"
                className="ml-1 font-black text-[#285F67] underline underline-offset-4">
                식약처 공식 지정기관 목록에서 직접 비교해보세요 →
              </a>
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { Icon: Zap,        title: "검사항목 몰라도 OK",     desc: "제품명·제형·납기만 알려주시면 필요한 항목과 준비사항을 전담 안내해드립니다.",   accent: "border-l-[#5DC8BE]" },
              { Icon: FileCheck2, title: "법정 자가품질 위탁 대응", desc: "자체 시설 없는 책임판매업자도 식약처 지정기관 위탁으로 법적 요건을 충족합니다.", accent: "border-l-[#285F67]" },
              { Icon: TimerReset, title: "납품 일정 기준 검토",     desc: "납품·입점·유통 일정에 맞춰 성적서 가능 일정을 먼저 확인해드립니다.",         accent: "border-l-[#FEE500]" },
              { Icon: UserCheck,  title: "전담 담당자 1:1 안내",    desc: "처음 의뢰하거나 기관을 전환하는 경우에도 항목과 절차를 함께 정리합니다.",     accent: "border-l-[#F87171]" },
            ].map(({ Icon, title, desc, accent }) => (
              <div key={title}
                className={cx("group rounded-2xl border border-[#D8E5E7] border-l-4 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(40,95,103,0.12)]", accent)}>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF5F4] text-[#285F67] transition group-hover:bg-[#285F67] group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-[15px] font-bold tracking-[-0.02em] text-[#1C3038]">{title}</h3>
                <p className="mt-2 text-[13px] leading-[1.8] text-[#7A8E93]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 고객 후기 */}
      <section className="bg-[#F5F8F8] py-16">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-10">
            <p className="mb-3 text-[11px] font-black uppercase tracking-[0.24em] text-[#5E8E90]">Client Reviews</p>
            <h2 className="text-[clamp(1.4rem,2.4vw,2rem)] font-black leading-[1.1] tracking-[-0.045em] text-[#0A1E24]">
              실제 의뢰 고객의 이야기
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                text: "처음 의뢰해보는 거라 걱정했는데 생각보다 진행이 잘 됐습니다. 문의드렸을 때 설명도 친절했고, 필요한 내용도 정리해서 알려주셔서 준비하는 데 도움이 됐습니다. 결과 안내도 그냥 형식적인 느낌이 아니라 실제로 참고할 수 있게 설명해주셔서 괜찮았습니다.",
                label: "K사 품질관리팀 · 스킨케어 브랜드",
              },
              {
                text: "출시 전에 품질검사 때문에 신경 쓸 게 많았는데, 와이에스 쪽에서 응대가 빨라서 도움이 됐습니다. 중간에 확인할 부분도 잘 안내해주셨고, 전체적으로 소통이 괜찮았습니다. 너무 과장해서 좋다고 하기보다는, 실무적으로 맡기기에 무난하고 믿을 만한 곳이라는 느낌이었습니다.",
                label: "J사 제품기획팀 · OEM 제조사",
              },
            ].map((r) => (
              <div key={r.label}
                className="rounded-2xl border border-[#D8E5E7] bg-white p-7 shadow-[0_8px_24px_rgba(36,72,82,0.055)]">
                <div className="mb-4 text-3xl font-black leading-none text-[#BFD9DC]">"</div>
                <p className="text-[15px] leading-8 text-[#4F656A]">{r.text}</p>
                <div className="mt-5 flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-4 w-4 fill-[#FEE500]" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-[13px] font-black text-[#5E8E90]">{r.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 기존 기관 전환 고객 섹션 */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5">

          <div className="mb-10">
            <p className="mb-3 text-[11px] font-black uppercase tracking-[0.24em] text-[#B8860B]">Switching?</p>
            <h2 className="text-[clamp(1.5rem,2.6vw,2.2rem)] font-black leading-[1.1] tracking-[-0.048em] text-[#0A1E24]">
              기존 검사기관에서 전환을 고려 중이신가요?
            </h2>
            <p className="mt-4 max-w-2xl text-[15px] leading-8 text-[#60767B]">
              거래 중인 기관이 있어도 이런 불편을 느꼈다면, 비교해볼 가치가 있습니다.
            </p>
          </div>

          {/* Pain Point → YS 대비 */}
          <div className="mb-10 grid gap-4 md:grid-cols-2">
            {[
              {
                pain: "진행 상황을 매번 물어봐야 안다",
                ys: "접수·분석·발급 단계별 이메일 안내",
                icon: "📞",
              },
              {
                pain: "담당자가 자주 바뀌어 매번 처음부터 설명한다",
                ys: "전담 담당자 고정 배정, 이력 기반 응대",
                icon: "🔄",
              },
              {
                pain: "긴급 요청 시 추가 비용이 불투명하다",
                ys: "긴급 수수료 사전 고지, 접수 전 확정",
                icon: "💰",
              },
              {
                pain: "성적서 재발행·수정 요청 시 응대가 느리다",
                ys: "성적서 관련 요청은 담당자 직통으로 당일 확인",
                icon: "📄",
              },
            ].map((item) => (
              <div key={item.pain}
                className="overflow-hidden rounded-2xl border border-[#D8E5E7]">
                <div className="flex items-start gap-3 bg-[#FFF8F8] px-5 py-4">
                  <span className="mt-0.5 text-lg">{item.icon}</span>
                  <div>
                    <p className="text-[12px] font-semibold text-[#C0392B]">기존 기관에서 흔한 불편</p>
                    <p className="mt-1 text-[14px] font-semibold leading-6 text-[#7A3B3B]">{item.pain}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-[#F5FBF9] px-5 py-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#285F67]" />
                  <div>
                    <p className="text-[12px] font-semibold text-[#285F67]">와이에스는 이렇게 합니다</p>
                    <p className="mt-1 text-[14px] font-semibold leading-6 text-[#1C3038]">{item.ys}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 전환 고객 후기 */}
          <div className="mb-10 rounded-2xl border-2 border-[#FEE500]/40 bg-[#FFFDF5] p-7">
            <div className="mb-4 flex items-center gap-2">
              <span className="rounded-full bg-[#FEE500] px-3 py-1 text-[11px] font-black text-[#7A6000]">전환 고객</span>
              <span className="text-[13px] font-semibold text-[#B89000]">기존 기관에서 옮겨온 고객의 이야기</span>
            </div>
            <p className="text-[15px] leading-8 text-[#4F656A]">
              "이전 기관은 성적서가 나오기 전까지 중간 진행 상황을 알 수가 없어서, 납품 일정이 빠듯할 때마다 불안했습니다.
              와이에스로 옮기고 나서는 접수 후 단계별로 안내가 와서 따로 확인 전화를 하지 않아도 됩니다.
              담당자가 바뀌지 않아서 매번 설명을 반복할 필요도 없어졌고요.
              전환 과정 자체도 위탁계약 체결부터 항목 매칭까지 같이 정리해줘서 부담이 적었습니다."
            </p>
            <p className="mt-4 text-[13px] font-bold text-[#5E8E90]">M사 품질관리팀 · 기능성 화장품 제조사 · 전환 6개월차</p>
          </div>

          {/* 전환 혜택 */}
          <div className="rounded-2xl bg-[#0A1E24] p-7 md:p-10">
            <p className="mb-2 text-[11px] font-black uppercase tracking-[0.24em] text-[#5DC8BE]">Switching Benefits</p>
            <h3 className="text-xl font-black tracking-[-0.04em] text-white">
              전환 시 지원하는 것들
            </h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "위탁계약 체결 지원", desc: "기존 계약 종료 후 신규 위탁계약 체결까지 실무 절차를 안내합니다." },
                { title: "기존 항목 매칭 확인", desc: "기존 기관에서 의뢰하던 항목을 확인하고 동일 범위로 매칭합니다." },
                { title: "시범 검사 1회 제공", desc: "전환 전 실제 검사 결과를 비교할 수 있도록 시범 검사 1회를 지원합니다." },
                { title: "전담 담당자 즉시 배정", desc: "전환 첫 의뢰부터 전담 담당자가 배정되어 이전 기관과의 차이를 최소화합니다." },
              ].map((b) => (
                <div key={b.title}
                  className="rounded-xl border border-white/12 bg-white/8 p-5">
                  <p className="text-[14px] font-bold text-white">{b.title}</p>
                  <p className="mt-2 text-[13px] leading-6 text-[#8BBFC4]">{b.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href={KAKAO_URL} target="_blank" rel="noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#FEE500] px-6 font-bold text-[#2D2926] transition hover:bg-[#F6D600]">
                <MessageCircle className="h-4 w-4" /> 전환 상담 문의하기
              </a>
              <a href="tel:02-312-0540"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 font-bold text-white transition hover:bg-white/15">
                <Phone className="h-4 w-4" /> 02-312-0540
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 대표 소개 */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5">
          <div className="overflow-hidden rounded-[28px] border border-[#D8E5E7] shadow-[0_16px_44px_rgba(36,72,82,0.07)]">
            <div className="grid lg:grid-cols-[280px_1fr]">
              <div className="flex items-center justify-center bg-[#EEF5F4] p-8">
                <div className="overflow-hidden rounded-2xl border-4 border-white shadow-[0_12px_32px_rgba(36,72,82,0.12)]">
                  <img src="/eom-yujin.png" alt="엄유진 대표"
                    className="h-48 w-40 object-cover object-top" />
                </div>
              </div>
              <div className="p-8 lg:p-10">
                <p className="mb-2 text-[11px] font-black uppercase tracking-[0.24em] text-[#5E8E90]">Director</p>
                <h3 className="text-2xl font-black tracking-[-0.04em] text-[#0A1E24]">
                  엄유진 <span className="text-lg font-bold text-[#5E8E90]">대표이사 · Ph.D.</span>
                </h3>
                <p className="mt-1 text-[14px] font-bold text-[#285F67]">
                  연세대학교 화공생명공학 박사 · ICP-MS / LC-MS/MS 극미량 분석 전문가
                </p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    { val: "17년",  label: "KOLAS 공인 유지" },
                    { val: "7년차", label: "식약처 지정 운영" },
                    { val: "AA등급", label: "기보 기술신용평가" },
                    { val: "2개",   label: "식약처·KOLAS 동시 인증" },
                  ].map((s) => (
                    <div key={s.label} className="flex items-center gap-3 rounded-xl bg-[#F5F8F8] px-4 py-3">
                      <p className="text-lg font-black text-[#285F67]">{s.val}</p>
                      <p className="text-[13px] font-bold text-[#60767B]">{s.label}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-[14px] leading-7 text-[#60767B]">
                  모발 미네랄·중금속 분석 원천기술 보유. 12년간 직접 서비스를 운영하며 쌓은 실전 분석 경험을 바탕으로 화장품 위탁검사 전 과정을 책임집니다.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a href={KAKAO_URL} target="_blank" rel="noreferrer"
                    className="inline-flex h-11 items-center gap-2 rounded-xl bg-[#FEE500] px-5 text-sm font-black text-[#2D2926] transition hover:bg-[#F6D600]">
                    <MessageCircle className="h-4 w-4" /> 담당자에게 직접 문의
                  </a>
                  <a href="tel:02-312-0540"
                    className="inline-flex h-11 items-center gap-2 rounded-xl border border-[#D8E5E7] px-5 text-sm font-black text-[#28474E] transition hover:border-[#9DBFC4]">
                    <Phone className="h-4 w-4" /> 02-312-0540
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 실험실 사진 갤러리 */}
      <section className="bg-[#0A1E24] py-14">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-8">
            <p className="mb-3 text-[11px] font-black uppercase tracking-[0.24em] text-[#5DC8BE]">Our Laboratory</p>
            <h2 className="text-[clamp(1.4rem,2.4vw,2rem)] font-black leading-[1.1] tracking-[-0.045em] text-white">
              첨단 분석장비를 직접 확인하세요
            </h2>
            <p className="mt-3 text-[14px] leading-7 text-[#7FC8CC]">
              ICP-MS, LC-MS/MS, GC-MS, HPLC 등 정밀 분석 장비와 숙련된 연구인력이 검사 전 과정을 직접 수행합니다.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { src: "/lab-01.jpg", alt: "와이에스 분석실 전경", label: "분석실 전경" },
              { src: "/lab-04.jpg", alt: "정밀 분석장비",        label: "정밀 분석장비" },
              { src: "/lab-02.jpg", alt: "연구원 시료 분석",     label: "시료 분석 작업" },
              { src: "/lab-03.jpg", alt: "연구원 시료 전처리",   label: "시료 전처리" },
            ].map((item) => (
              <div key={item.src} className="group overflow-hidden rounded-2xl">
                <div className="relative overflow-hidden">
                  <img src={item.src} alt={item.alt}
                    className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <p className="absolute bottom-3 left-4 text-[13px] font-black text-white">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 인정서 + 품질근거 */}
      <section id="proof" className="bg-[#F5F8F8] py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-12">
            <p className="mb-3 text-[11px] font-black uppercase tracking-[0.24em] text-[#5E8E90]">Credentials & Quality</p>
            <h2 className="text-[clamp(1.5rem,2.6vw,2.2rem)] font-black leading-[1.1] tracking-[-0.048em] text-[#0A1E24]">
              공식 인정서와 품질 운영 근거
            </h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <div className="rounded-[24px] border border-[#D8E5E7] bg-white p-7 shadow-[0_16px_44px_rgba(36,72,82,0.07)]">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF5F4] text-[#285F67]">
                  <FileBadge2 className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-black text-[#263F46]">인정서 핵심 정보</p>
                  <p className="text-sm font-bold text-[#73878C]">화장품 시험·검사기관 지정서 기준</p>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {certificateFacts.map(([label, value, sub]) => (
                  <div key={label} className="rounded-xl bg-[#F5F8F8] px-4 py-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.15em] text-[#5E8E90]">{label}</p>
                    <p className="mt-1.5 text-[13px] font-black leading-6 text-[#263F46]">{value}</p>
                    {sub ? <p className="mt-1 text-[11px] font-bold leading-[1.65] text-[#60767B]">{sub}</p> : null}
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-xl border border-[#5DC8BE]/30 bg-[#EAF6F6] px-5 py-4">
                <p className="text-[13px] font-bold leading-7 text-[#28474E]">
                  본 기관 발행 시험성적서는 화장품법 시행규칙 제12조 5항에 따른 법정 자가품질 위탁검사 결과서입니다.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={CERTIFICATE_PDF} target="_blank" rel="noreferrer"
                  className="inline-flex h-11 items-center gap-2 rounded-xl bg-[#1C3038] px-5 text-sm font-black text-white transition hover:bg-[#263F46]">
                  인정서 PDF 보기 <ExternalLink className="h-4 w-4" />
                </a>
                <a href={LAB_INTRO_PDF} target="_blank" rel="noreferrer"
                  className="inline-flex h-11 items-center gap-2 rounded-xl border border-[#D8E5E7] px-5 text-sm font-black text-[#28474E] transition hover:border-[#9DBFC4]">
                  기관소개 자료
                </a>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {qualityProofs.map(({ icon: Icon, title, desc }) => (
                <div key={title}
                  className="rounded-2xl border border-[#D8E5E7] bg-white p-5 shadow-[0_6px_18px_rgba(36,72,82,0.05)]">
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-[#EEF5F4] text-[#285F67]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-[14px] font-bold text-[#263F46]">{title}</h3>
                  <p className="mt-2 text-[13px] leading-6 text-[#7A8E93]">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 수수료 */}
      <section id="fees" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-10">
            <p className="mb-3 text-[11px] font-black uppercase tracking-[0.24em] text-[#5E8E90]">Fee Guide</p>
            <h2 className="text-[clamp(1.5rem,2.6vw,2.2rem)] font-black leading-[1.1] tracking-[-0.048em] text-[#0A1E24]">대표 수수료 확인</h2>
            <p className="mt-3 max-w-xl text-[15px] leading-8 text-[#60767B]">
              자주 문의하시는 항목입니다. 최종 견적은 제품 유형·항목·긴급 여부에 따라 안내드립니다.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-2 rounded-xl border border-[#D8E5E7] bg-[#F8FBFB] px-5 py-4">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-[#4F888B]" aria-hidden />
              <p className="text-[13px] font-bold leading-6 text-[#4F656A]">
                <span className="font-black text-[#285F67]">✓</span> 품질검사 위탁계약 체결은 무료입니다{" "}
                <span className="font-semibold text-[#60767B]">(우편 비용 발생 시 실비만 청구)</span>
              </p>
            </div>
          </div>
          <div className="hidden overflow-hidden rounded-2xl border border-[#D8E5E7] shadow-[0_8px_28px_rgba(36,72,82,0.06)] md:block">
            <div className="grid grid-cols-[1.5fr_0.65fr_0.65fr] bg-[#EEF5F4] px-6 py-4 text-sm font-black text-[#263F46]">
              <div>대표 시험항목</div><div>수수료</div><div>비고</div>
            </div>
            {feeRows.map(([name, price, note], i) => (
              <div key={name}
                className={cx("grid grid-cols-[1.5fr_0.65fr_0.65fr] items-center border-t border-[#F0F3F3] px-6 py-4",
                  i % 2 === 0 ? "bg-white" : "bg-[#FAFCFC]")}>
                <p className="font-bold text-[#4F656A]">{name}</p>
                <p className="font-black text-[#285F67]">{price}</p>
                <p className="text-sm font-bold text-[#8A9EA2]">{note}</p>
              </div>
            ))}
          </div>
          <div className="grid gap-3 md:hidden">
            {feeRows.map(([name, price, note]) => (
              <div key={name} className="rounded-xl border border-[#D8E5E7] bg-white p-5">
                <p className="font-black text-[#263F46]">{name}</p>
                <p className="mt-1.5 text-xl font-black text-[#285F67]">{price}</p>
                <p className="text-sm font-bold text-[#8A9EA2]">{note}</p>
              </div>
            ))}
          </div>

          {/* 패키지 견적 예시 */}
          <div className="mt-8 mb-8">
            <p className="mb-4 text-[15px] font-black text-[#0A1E24]">제품 유형별 예상 비용 · 일정 예시</p>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  type: "크림 · 로션 1종",
                  use: "자가품질 / 납품용",
                  items: "유통화장품 안전관리기준 전 항목 (미생물 제외)",
                  price: "약 325,000원",
                  days: "접수 완료 기준 5영업일 이내",
                  sample: "완제품 3개 이상",
                },
                {
                  type: "기능성 미백 크림",
                  use: "자가품질 + 기능성 확인",
                  items: "안전관리기준 전 항목 + 미백 성분 단일항목",
                  price: "약 365,000원",
                  days: "접수 완료 기준 5영업일 이내",
                  sample: "완제품 3개 이상",
                },
                {
                  type: "선크림",
                  use: "자가품질 + 자외선차단",
                  items: "안전관리기준 전 항목 + 자외선차단 성분",
                  price: "약 365,000원",
                  days: "접수 완료 기준 5영업일 이내",
                  sample: "완제품 3개 이상",
                },
              ].map((pkg) => (
                <div key={pkg.type}
                  className="overflow-hidden rounded-2xl border border-[#D8E5E7] bg-white shadow-[0_6px_18px_rgba(36,72,82,0.05)]">
                  <div className="h-1.5 bg-gradient-to-r from-[#285F67] to-[#5DC8BE]" />
                  <div className="p-5">
                  <p className="text-[15px] font-bold text-[#0A1E24]">{pkg.type}</p>
                  <p className="mt-1 text-[12px] font-medium text-[#5E8E90]">{pkg.use}</p>
                  <div className="mt-4 space-y-2 text-[13px]">
                    <div className="flex gap-2">
                      <span className="shrink-0 font-semibold text-[#8A9EA2]">항목</span>
                      <span className="text-[#4F656A]">{pkg.items}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="shrink-0 font-semibold text-[#8A9EA2]">납기</span>
                      <span className="font-semibold text-[#285F67]">{pkg.days}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="shrink-0 font-semibold text-[#8A9EA2]">시료</span>
                      <span className="text-[#4F656A]">{pkg.sample}</span>
                    </div>
                  </div>
                  <p className="mt-4 text-xl font-black text-[#285F67]">{pkg.price} <span className="text-xs font-medium text-[#8A9EA2]">+ VAT</span></p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-3 text-[12px] font-bold text-[#8A9EA2]">
              * 위 금액은 대표적인 의뢰 유형 기준 참고 가격이며, 제품 유형·시험항목·긴급 여부에 따라 달라질 수 있습니다.
            </p>
          </div>

          <div className="mt-8 rounded-2xl bg-[#0A1E24] p-6 md:flex md:items-center md:justify-between">
            <div>
              <p className="text-lg font-black text-white">비용보다 제품명과 납기를 먼저 알려주세요</p>
              <p className="mt-1 text-sm leading-7 text-[#7FC8CC]">납품·입점 일정이 있다면 성적서 가능 일정을 먼저 확인해드립니다.</p>
              <p className="mt-1 text-xs font-bold text-[#4F8890]">Raw Data 제공 가능 (사전 요청 시, 별도 수수료)</p>
            </div>
            <div className="mt-5 flex flex-col gap-2 sm:flex-row md:mt-0 md:shrink-0">
              <a href={FEE_GUIDE_PDF} target="_blank" rel="noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-white px-5 text-sm font-black text-[#0A1E24] transition hover:bg-[#F0F7F7]">
                수수료 PDF 보기
              </a>
              <a href="#contact"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 text-sm font-black text-white transition hover:bg-white/15">
                납기 확인
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 프로세스 + 문의 */}
      <section id="contact" className="bg-[#F5F8F8] py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-14">
            <p className="mb-3 text-[11px] font-black uppercase tracking-[0.24em] text-[#5E8E90]">Process</p>
            <h2 className="mb-8 text-[clamp(1.3rem,2.2vw,1.9rem)] font-black leading-[1.12] tracking-[-0.04em] text-[#0A1E24]">시험·검사 위탁의뢰 4단계</h2>
            <div className="overflow-hidden rounded-2xl border border-[#D8E5E7] bg-white shadow-[0_8px_28px_rgba(36,72,82,0.06)]">
              <div className="grid md:grid-cols-4">
                {processSteps.map((s, i) => (
                  <div key={s.num}
                    className={cx("p-6", i !== 0 && "border-t border-[#F0F3F3] md:border-l md:border-t-0")}>
                    <p className="text-3xl font-black tracking-[-0.05em] text-[#BFD9DC]">{s.num}</p>
                    <h3 className="mt-2 font-black text-[#263F46]">{s.title}</h3>
                    <p className="mt-1.5 text-sm leading-6 text-[#60767B]">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 시료 준비 가이드 */}
          <div className="mb-14 rounded-2xl border border-[#D8E5E7] bg-white p-6 shadow-[0_8px_28px_rgba(36,72,82,0.06)]">
            <p className="mb-5 text-[15px] font-black text-[#0A1E24]">처음 의뢰하시는 분을 위한 시료 준비 가이드</p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                { type: "크림 · 로션류",   amount: "완제품 3개 이상", note: "30g 이상 / 개당" },
                { type: "토너 · 에센스류", amount: "완제품 3개 이상", note: "50mL 이상 / 개당" },
                { type: "선크림",          amount: "완제품 3개 이상", note: "30g 이상 / 개당" },
                { type: "원료 · 벌크",     amount: "50g 또는 50mL 이상", note: "별도 협의 가능" },
              ].map((s) => (
                <div key={s.type} className="rounded-xl bg-[#F5F8F8] px-4 py-4">
                  <p className="text-[14px] font-black text-[#263F46]">{s.type}</p>
                  <p className="mt-2 text-[13px] font-bold text-[#285F67]">{s.amount}</p>
                  <p className="mt-0.5 text-[12px] font-bold text-[#8A9EA2]">{s.note}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-xl border border-[#E8EFF0] bg-[#FAFCFC] p-4">
              <p className="text-[13px] leading-6 text-[#60767B]">
                <span className="font-black text-[#4F888B]">발송 주소</span> — 서울시 종로구 인사동5길 42 종로빌딩 10층 시료접수 담당자 앞
              </p>
              <p className="mt-1 text-[13px] leading-6 text-[#60767B]">
                <span className="font-black text-[#4F888B]">입금 계좌</span> — 우리은행 1005-504-148745 (주)와이에스환경기술연구원
              </p>
              <p className="mt-1 text-[12px] font-bold text-[#8A9EA2]">
                * 정확한 시료 용량과 개수는 제품 유형·검사 항목에 따라 달라질 수 있습니다. 문의 시 안내드립니다.
              </p>
            </div>
          </div>

          {/* 검사항목별 전담 담당자 */}
          <div className="mb-14">
            <div className="mb-8">
              <p className="mb-3 text-[11px] font-black uppercase tracking-[0.24em] text-[#5E8E90]">Direct Dial</p>
              <h3 className="text-[clamp(1.35rem,2.5vw,1.95rem)] font-black leading-[1.15] tracking-[-0.04em] text-[#0A1E24]">
                검사항목별 전담 담당자 직통
              </h3>
              <p className="mt-3 max-w-2xl text-[15px] leading-8 text-[#60767B]">
                대표번호를 거치지 않고, 분야 담당 연구원과 바로 상담하세요.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="group rounded-2xl border border-[#D8E5E7] bg-white p-7 shadow-[0_8px_24px_rgba(36,72,82,0.055)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(40,95,103,0.12)]">
                <p className="mb-3 inline-block rounded-full bg-[#EEF5F4] px-3 py-1 text-[11px] font-black uppercase tracking-[0.12em] text-[#285F67]">무기분석</p>
                <p className="text-lg font-black text-[#263F46]">전석호 수석연구원</p>
                <p className="mt-3 text-[13px] leading-[1.8] font-semibold text-[#60767B]">
                  중금속 5종 (납·비소·수은·안티몬·카드뮴·니켈), 디옥산, 메탄올, 포름알데하이드
                </p>
                <a href="tel:07043374869"
                  className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#285F67] text-sm font-black text-white shadow-[0_4px_14px_rgba(40,95,103,0.25)] transition hover:bg-[#1C4D54]">
                  <Phone className="h-4 w-4 shrink-0" /> 070-4337-4869
                </a>
                <p className="mt-4 border-t border-[#EEF3F3] pt-4 text-center text-[12px] font-bold leading-6 text-[#8A9EA2]">
                  어느 담당자인지 모르겠다면 →{" "}
                  <a href="tel:02-312-0540" className="font-black text-[#285F67] underline-offset-4 hover:underline">대표번호 02-312-0540</a>
                </p>
              </div>
              <div className="group rounded-2xl border border-[#D8E5E7] bg-white p-7 shadow-[0_8px_24px_rgba(36,72,82,0.055)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(40,95,103,0.12)]">
                <p className="mb-3 inline-block rounded-full bg-[#EEF5F4] px-3 py-1 text-[11px] font-black uppercase tracking-[0.12em] text-[#285F67]">유기분석</p>
                <p className="text-lg font-black text-[#263F46]">박미희 책임연구원</p>
                <p className="mt-3 text-[13px] leading-[1.8] font-semibold text-[#60767B]">
                  살균·보존제(파라벤 등), 자외선차단 성분, 기능성 주성분(미백/주름개선), 프탈레이트류, 배합금지 성분
                </p>
                <a href="tel:07043374830"
                  className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#285F67] text-sm font-black text-white shadow-[0_4px_14px_rgba(40,95,103,0.25)] transition hover:bg-[#1C4D54]">
                  <Phone className="h-4 w-4 shrink-0" /> 070-4337-4830
                </a>
                <p className="mt-4 border-t border-[#EEF3F3] pt-4 text-center text-[12px] font-bold leading-6 text-[#8A9EA2]">
                  어느 담당자인지 모르겠다면 →{" "}
                  <a href="tel:02-312-0540" className="font-black text-[#285F67] underline-offset-4 hover:underline">대표번호 02-312-0540</a>
                </p>
              </div>
            </div>
          </div>

          {/* 문의 다크 박스 */}
          <div className="relative overflow-hidden rounded-[32px] bg-[#0A1E24] p-8 shadow-[0_40px_100px_rgba(10,30,36,0.3)] md:p-12">
            <div className="pointer-events-none absolute inset-0 opacity-[0.03]"
              style={{backgroundImage:"linear-gradient(#5DC8BE 1px,transparent 1px),linear-gradient(90deg,#5DC8BE 1px,transparent 1px)",backgroundSize:"40px 40px"}} />
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#285F67] opacity-20 blur-[60px]" />

            <p className="relative mb-4 text-[11px] font-black uppercase tracking-[0.24em] text-[#5DC8BE]">Contact</p>
            <div className="relative grid gap-10 lg:grid-cols-[1fr_400px] lg:items-start">
              <div>
                <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-black leading-[1.1] tracking-[-0.05em] text-white">
                  납품 일정이 있다면<br />
                  <span className="text-[#5DC8BE]">지금 납기부터 확인하세요</span>
                </h2>
                <p className="mt-5 text-[15px] leading-8 text-[#8BBFC4]">
                  제품명과 희망 납기만 보내주셔도 전담 담당자가
                  가능한 일정과 필요한 항목을 먼저 검토해드립니다.
                  처음 의뢰하거나 기관을 전환하는 경우도 동일합니다.
                </p>
                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  <a href={KAKAO_URL} target="_blank" rel="noreferrer"
                    className="flex h-14 items-center justify-center gap-2 rounded-2xl bg-[#FEE500] font-black text-[#2D2926] shadow-[0_8px_24px_rgba(254,229,0,0.3)] transition hover:bg-[#F6D600]">
                    <MessageCircle className="h-5 w-5" /> 카카오톡
                  </a>
                  <a href="tel:02-312-0540"
                    className="flex h-14 items-center justify-center gap-2 rounded-2xl bg-white/15 font-black text-white transition hover:bg-white/22">
                    <Phone className="h-5 w-5" /> 전화 상담
                  </a>
                  <a href="mailto:testing@ysiet.com"
                    className="flex h-14 items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/8 font-black text-white transition hover:bg-white/15">
                    <Mail className="h-5 w-5" /> 이메일
                  </a>
                </div>
                <div className="mt-5 flex items-start gap-3 rounded-2xl border border-white/12 bg-white/8 p-4">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#5DC8BE]" />
                  <p className="text-sm font-bold leading-7 text-[#AECDD0]">
                    식약처 지정 제18호 · KOLAS 제364호 공인기관이 납기와 항목을 함께 검토합니다.
                    처음이어도, 전환이어도 괜찮습니다.
                  </p>
                </div>
              </div>
              <div className="rounded-[22px] bg-white p-6 text-[#263F46]">
                <p className="text-[13px] font-black text-[#4F888B]">빠른 검토를 위한 정보</p>
                <div className="mt-4 space-y-2.5">
                  {[
                    ["제품명 / 제형",    "크림, 앰플, 토너 등"],
                    ["희망 검사항목",   "모르셔도 괜찮습니다"],
                    ["성적서 제출처",   "자가품질, 납품, 출시 등"],
                    ["희망 납기",       "필요한 날짜"],
                    ["시료 준비 가능일", "접수 가능 시점"],
                  ].map(([title, hint]) => (
                    <div key={title} className="flex items-center gap-3 rounded-xl bg-[#F3F7F7] px-4 py-3">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#4F888B]" />
                      <span className="text-sm font-black text-[#263F46]">{title}</span>
                      <span className="ml-auto text-xs font-bold text-[#8AACB0]">{hint}</span>
                    </div>
                  ))}
                </div>
                <a href="mailto:testing@ysiet.com"
                  className="mt-5 flex h-12 items-center justify-center gap-2 rounded-xl bg-[#1C3038] font-black text-white transition hover:bg-[#263F46]">
                  납기 가능 여부 확인
                </a>
                <div className="mt-4 flex gap-2 rounded-xl border border-[#D8E5E7] p-3 text-[13px] font-bold text-[#60767B]">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#4F888B]" />
                  서울시 종로구 인사동5길 42 종로빌딩 10층
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-white py-16 pb-28 md:pb-16">
        <div className="mx-auto max-w-3xl px-5">
          <p className="mb-3 text-[11px] font-black uppercase tracking-[0.24em] text-[#5E8E90]">FAQ</p>
          <h2 className="mb-8 text-[clamp(1.4rem,2.4vw,2rem)] font-black leading-[1.12] tracking-[-0.045em] text-[#0A1E24]">자주 묻는 질문</h2>
          <div className="space-y-3">
            {faqs.map(([q, a]) => <FaqItem key={q} q={q} a={a} />)}
          </div>
        </div>
      </section>

      <Footer />
      <MobileStickyBar />
    </>
  );
}

/* ══════════════════════════ /why ─ WhyPage
══════════════════════════ */
function WhyPage() {
  return (
    <>
      <Header showKakao />
      <SubpageHero
        eyebrow="Why YSIET"
        title="왜 와이에스를 선택해야 하는가"
        subtitle="식약처 지정 19개 화장품 시험·검사기관 중, 와이에스만의 차별점"
      />
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-12">
            <div className="hidden overflow-hidden rounded-2xl border border-[#D8E5E7] shadow-[0_8px_30px_rgba(36,72,82,0.07)] md:block">
              <div className="grid grid-cols-[1fr_120px_160px] bg-[#0A1E24] px-6 py-5">
                <p className="text-sm font-semibold text-white/60">비교 항목</p>
                <p className="text-center text-sm font-bold text-[#5DC8BE]">와이에스 ✓</p>
                <p className="text-center text-sm font-semibold text-white/35">타 기관 일반</p>
              </div>
              {compareRows.map((row, i) => (
                <div key={row.label}
                  className={cx(
                    "grid grid-cols-[1fr_120px_160px] items-center border-t px-6 py-4",
                    row.highlight ? "border-[#FEE500]/30 bg-[#FFFBEA]" : i % 2 === 0 ? "border-[#EEF3F3] bg-white" : "border-[#EEF3F3] bg-[#FAFCFC]"
                  )}>
                  <p className={cx("font-semibold", row.highlight ? "text-[#7A6000]" : "text-[#4F656A]")}>
                    {row.highlight && <span className="mr-2 inline-block rounded-full bg-[#FEE500] px-2 py-0.5 text-[10px] font-black text-[#7A6000]">유일</span>}
                    {row.label}
                  </p>
                  <div className="flex justify-center">
                    <span className={cx("inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-bold",
                      row.highlight ? "bg-[#FEE500] text-[#7A6000]" : "bg-[#E8F5F4] text-[#285F67]"
                    )}><CheckCircle2 className="h-3.5 w-3.5" /> 보유</span>
                  </div>
                  <p className={cx("text-center text-sm font-medium", row.highlight ? "text-[#B89000]" : "text-[#A0B0B4]")}>{row.other}</p>
                </div>
              ))}
            </div>
            <div className="space-y-3 md:hidden">{compareRows.map((row) => (
              <div key={row.label} className={cx("rounded-xl border p-4", row.highlight ? "border-[#FEE500]/40 bg-[#FFFBEA]" : "border-[#D8E5E7] bg-white")}>
                <div className="flex items-start justify-between gap-3">
                  <p className={cx("text-[14px] font-semibold leading-6", row.highlight ? "text-[#7A6000]" : "text-[#4F656A]")}>
                    {row.highlight && <span className="mr-1.5 inline-block rounded-full bg-[#FEE500] px-2 py-0.5 text-[10px] font-black text-[#7A6000]">유일</span>}
                    {row.label}</p>
                  <span className={cx("inline-flex shrink-0 items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-bold",
                    row.highlight ? "bg-[#FEE500] text-[#7A6000]" : "bg-[#E8F5F4] text-[#285F67]"
                  )}><CheckCircle2 className="h-3 w-3" /> YS 보유</span></div>
                <p className={cx("mt-2 text-[12px] font-medium", row.highlight ? "text-[#B89000]" : "text-[#A0B0B4]")}>타 기관: {row.other}</p>
              </div>
            ))}</div>
          </div>
          <div className="mb-12 flex items-center gap-3 rounded-xl border border-[#D8E5E7] bg-[#F8FBFB] px-5 py-4">
            <ShieldCheck className="h-5 w-5 shrink-0 text-[#4F888B]" />
            <p className="text-[13px] leading-6 text-[#60767B]">
              위 비교는 식약처 지정 기관 공통 요건과 와이에스 보유 역량을 기준으로 정리한 내용입니다.
              <a href="https://www.mfds.go.kr/brd/m_218/list.do" target="_blank" rel="noreferrer"
                className="ml-1 font-black text-[#285F67] underline underline-offset-4">식약처 공식 지정기관 목록에서 직접 비교해보세요 →</a>
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { Icon: Zap, title: "검사항목 몰라도 OK", desc: "제품명·제형·납기만 알려주시면 필요한 항목과 준비사항을 전담 안내해드립니다.", accent: "border-l-[#5DC8BE]" },
              { Icon: FileCheck2, title: "법정 자가품질 위탁 대응", desc: "자체 시설 없는 책임판매업자도 식약처 지정기관 위탁으로 법적 요건을 충족합니다.", accent: "border-l-[#285F67]" },
              { Icon: TimerReset, title: "납품 일정 기준 검토", desc: "납품·입점·유통 일정에 맞춰 성적서 가능 일정을 먼저 확인해드립니다.", accent: "border-l-[#FEE500]" },
              { Icon: UserCheck, title: "전담 담당자 1:1 안내", desc: "처음 의뢰하거나 기관을 전환하는 경우에도 항목과 절차를 함께 정리합니다.", accent: "border-l-[#F87171]" },
            ].map(({ Icon, title, desc, accent }) => (
              <div key={title}
                className={cx("group rounded-2xl border border-[#D8E5E7] border-l-4 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(40,95,103,0.12)]", accent)}>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF5F4] text-[#285F67] transition group-hover:bg-[#285F67] group-hover:text-white">
                  <Icon className="h-5 w-5" /></div>
                <h3 className="text-[15px] font-bold tracking-[-0.02em] text-[#1C3038]">{title}</h3>
                <p className="mt-2 text-[13px] leading-[1.8] text-[#7A8E93]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#F5F8F8] py-16">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-10">
            <p className="mb-3 text-[11px] font-black uppercase tracking-[0.24em] text-[#5E8E90]">Client Reviews</p>
            <h2 className="text-[clamp(1.4rem,2.4vw,2rem)] font-black leading-[1.1] tracking-[-0.045em] text-[#0A1E24]">실제 의뢰 고객의 이야기</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {[{ text: "처음 의뢰해보는 거라 걱정했는데 생각보다 진행이 잘 됐습니다. 문의드렸을 때 설명도 친절했고, 필요한 내용도 정리해서 알려주셔서 준비하는 데 도움이 됐습니다. 결과 안내도 그냥 형식적인 느낌이 아니라 실제로 참고할 수 있게 설명해주셔서 괜찮았습니다.", label: "K사 품질관리팀 · 스킨케어 브랜드" }, { text: "출시 전에 품질검사 때문에 신경 쓸 게 많았는데, 와이에스 쪽에서 응대가 빨라서 도움이 됐습니다. 중간에 확인할 부분도 잘 안내해주셨고, 전체적으로 소통이 괜찮았습니다. 너무 과장해서 좋다고 하기보다는, 실무적으로 맡기기에 무난하고 믿을 만한 곳이라는 느낌이었습니다.", label: "J사 제품기획팀 · OEM 제조사" },].map((r) => (
              <div key={r.label} className="rounded-2xl border border-[#D8E5E7] bg-white p-7 shadow-[0_8px_24px_rgba(36,72,82,0.055)]">
                <div className="mb-4 text-3xl font-black leading-none text-[#BFD9DC]">"</div>
                <p className="text-[15px] leading-8 text-[#4F656A]">{r.text}</p>
                <div className="mt-5 flex items-center gap-2">
                  <div className="flex gap-0.5">{[...Array(5)].map((_, i) => (<svg key={i} className="h-4 w-4 fill-[#FEE500]" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>))}</div>
                  <p className="text-[13px] font-black text-[#5E8E90]">{r.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-10">
            <p className="mb-3 text-[11px] font-black uppercase tracking-[0.24em] text-[#B8860B]">Switching?</p>
            <h2 className="text-[clamp(1.5rem,2.6vw,2.2rem)] font-black leading-[1.1] tracking-[-0.048em] text-[#0A1E24]">기존 검사기관에서 전환을 고려 중이신가요?</h2>
            <p className="mt-4 max-w-2xl text-[15px] leading-8 text-[#60767B]">거래 중인 기관이 있어도 이런 불편을 느꼈다면, 비교해볼 가치가 있습니다.</p>
          </div>
          <div className="mb-10 grid gap-4 md:grid-cols-2">{[
            { pain: "진행 상황을 매번 물어봐야 안다", ys: "접수·분석·발급 단계별 이메일 안내", icon: "📞" },
            { pain: "담당자가 자주 바뀌어 매번 처음부터 설명한다", ys: "전담 담당자 고정 배정, 이력 기반 응대", icon: "🔄" },
            { pain: "긴급 요청 시 추가 비용이 불투명하다", ys: "긴급 수수료 사전 고지, 접수 전 확정", icon: "💰" },
            { pain: "성적서 재발행·수정 요청 시 응대가 느리다", ys: "성적서 관련 요청은 담당자 직통으로 당일 확인", icon: "📄" },
          ].map((item) => (
            <div key={item.pain} className="overflow-hidden rounded-2xl border border-[#D8E5E7]">
              <div className="flex items-start gap-3 bg-[#FFF8F8] px-5 py-4">
                <span className="mt-0.5 text-lg">{item.icon}</span>
                <div>
                  <p className="text-[12px] font-semibold text-[#C0392B]">기존 기관에서 흔한 불편</p>
                  <p className="mt-1 text-[14px] font-semibold leading-6 text-[#7A3B3B]">{item.pain}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-[#F5FBF9] px-5 py-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#285F67]" />
                <div>
                  <p className="text-[12px] font-semibold text-[#285F67]">와이에스는 이렇게 합니다</p>
                  <p className="mt-1 text-[14px] font-semibold leading-6 text-[#1C3038]">{item.ys}</p>
                </div>
              </div>
            </div>
          ))}</div>
          <div className="mb-10 rounded-2xl border-2 border-[#FEE500]/40 bg-[#FFFDF5] p-7">
            <div className="mb-4 flex items-center gap-2">
              <span className="rounded-full bg-[#FEE500] px-3 py-1 text-[11px] font-black text-[#7A6000]">전환 고객</span>
              <span className="text-[13px] font-semibold text-[#B89000]">기존 기관에서 옮겨온 고객의 이야기</span>
            </div>
            <p className="text-[15px] leading-8 text-[#4F656A]">
              &quot;이전 기관은 성적서가 나오기 전까지 중간 진행 상황을 알 수가 없어서, 납품 일정이 빠듯할 때마다 불안했습니다.
              와이에스로 옮기고 나서는 접수 후 단계별로 안내가 와서 따로 확인 전화를 하지 않아도 됩니다.
              담당자가 바뀌지 않아서 매번 설명을 반복할 필요도 없어졌고요.
              전환 과정 자체도 위탁계약 체결부터 항목 매칭까지 같이 정리해줘서 부담이 적었습니다.&quot;
            </p>
            <p className="mt-4 text-[13px] font-bold text-[#5E8E90]">M사 품질관리팀 · 기능성 화장품 제조사 · 전환 6개월차</p>
          </div>
          <div className="rounded-2xl bg-[#0A1E24] p-7 md:p-10">
            <p className="mb-2 text-[11px] font-black uppercase tracking-[0.24em] text-[#5DC8BE]">Switching Benefits</p>
            <h3 className="text-xl font-black tracking-[-0.04em] text-white">전환 시 지원하는 것들</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{[
              { title: "위탁계약 체결 지원", desc: "기존 계약 종료 후 신규 위탁계약 체결까지 실무 절차를 안내합니다." },
              { title: "기존 항목 매칭 확인", desc: "기존 기관에서 의뢰하던 항목을 확인하고 동일 범위로 매칭합니다." },
              { title: "시범 검사 1회 제공", desc: "전환 전 실제 검사 결과를 비교할 수 있도록 시범 검사 1회를 지원합니다." },
              { title: "전담 담당자 즉시 배정", desc: "전환 첫 의뢰부터 전담 담당자가 배정되어 이전 기관과의 차이를 최소화합니다." },
            ].map((b) => (
              <div key={b.title} className="rounded-xl border border-white/12 bg-white/8 p-5">
                <p className="text-[14px] font-bold text-white">{b.title}</p>
                <p className="mt-2 text-[13px] leading-6 text-[#8BBFC4]">{b.desc}</p>
              </div>
            ))}</div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href={KAKAO_URL} target="_blank" rel="noreferrer" className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#FEE500] px-6 font-bold text-[#2D2926] transition hover:bg-[#F6D600]">
                <MessageCircle className="h-4 w-4" /> 전환 상담 문의하기</a>
              <a href="tel:02-312-0540" className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 font-bold text-white transition hover:bg-white/15">
                <Phone className="h-4 w-4" /> 02-312-0540</a>
            </div>
          </div>
        </div>
      </section>
      <SubpageFooterCta eyebrow="Next Step" />
      <Footer />
      <MobileStickyBar />
    </>
  );
}

/* ══════════════════════════ /proof ─ ProofPage
══════════════════════════ */
function ProofPage() {
  return (
    <>
      <Header showKakao />
      <SubpageHero
        eyebrow="Credentials & Quality"
        title="공식 인정서와 품질 운영 근거"
        subtitle="법적 지정 + 국제공인 + 분석결과 신뢰 보장 프로세스"
      />
      <section className="bg-[#F5F8F8] py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <div className="rounded-[24px] border border-[#D8E5E7] bg-white p-7 shadow-[0_16px_44px_rgba(36,72,82,0.07)]">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF5F4] text-[#285F67]">
                  <FileBadge2 className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-black text-[#263F46]">인정서 핵심 정보</p>
                  <p className="text-sm font-bold text-[#73878C]">화장품 시험·검사기관 지정서 기준</p>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {certificateFacts.map(([label, value, sub]) => (
                  <div key={label} className="rounded-xl bg-[#F5F8F8] px-4 py-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.15em] text-[#5E8E90]">{label}</p>
                    <p className="mt-1.5 text-[13px] font-black leading-6 text-[#263F46]">{value}</p>
                    {sub ? <p className="mt-1 text-[11px] font-bold leading-[1.65] text-[#60767B]">{sub}</p> : null}
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-xl border border-[#5DC8BE]/30 bg-[#EAF6F6] px-5 py-4">
                <p className="text-[13px] font-bold leading-7 text-[#28474E]">
                  본 기관 발행 시험성적서는 화장품법 시행규칙 제12조 5항에 따른 법정 자가품질 위탁검사 결과서입니다.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={CERTIFICATE_PDF} target="_blank" rel="noreferrer"
                  className="inline-flex h-11 items-center gap-2 rounded-xl bg-[#1C3038] px-5 text-sm font-black text-white transition hover:bg-[#263F46]">
                  인정서 PDF 보기 <ExternalLink className="h-4 w-4" />
                </a>
                <a href={LAB_INTRO_PDF} target="_blank" rel="noreferrer"
                  className="inline-flex h-11 items-center gap-2 rounded-xl border border-[#D8E5E7] px-5 text-sm font-black text-[#28474E] transition hover:border-[#9DBFC4]">
                  기관소개 PDF 보기
                </a>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {qualityProofs.map(({ icon: Icon, title, desc }) => (
                <div key={title}
                  className="rounded-2xl border border-[#D8E5E7] bg-white p-5 shadow-[0_6px_18px_rgba(36,72,82,0.05)]">
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-[#EEF5F4] text-[#285F67]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-[14px] font-bold text-[#263F46]">{title}</h3>
                  <p className="mt-2 text-[13px] leading-6 text-[#7A8E93]">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-10">
            <p className="mb-3 text-[11px] font-black uppercase tracking-[0.24em] text-[#5E8E90]">Laboratory</p>
            <h2 className="text-[clamp(1.35rem,2.4vw,2rem)] font-black leading-[1.12] tracking-[-0.045em] text-[#0A1E24]">보유 주요 분석 장비</h2>
            <p className="mt-3 max-w-2xl text-[15px] leading-8 text-[#60767B]">대표 장비별로 활용 가능한 검사 범위를 한눈에 확인해 보세요.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {labEquipmentCards.map((eq) => (
              <div key={eq.name}
                className="rounded-2xl border border-[#D8E5E7] bg-[#FAFCFC] p-6 shadow-[0_8px_24px_rgba(36,72,82,0.05)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(40,95,103,0.09)]">
                <Microscope className="mb-3 h-6 w-6 text-[#4F888B]" aria-hidden />
                <p className="text-[16px] font-black text-[#263F46]">{eq.name}</p>
                <p className="mt-2 text-[13px] leading-7 text-[#60767B]">{eq.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SubpageFooterCta eyebrow="Contact" />
      <Footer />
      <MobileStickyBar />
    </>
  );
}

/* ══════════════════════════ /fees ─ FeesPage
══════════════════════════ */
function FeesPage() {
  const pkgRows = [
    { type: "크림 · 로션 1종", use: "자가품질 / 납품용", items: "유통화장품 안전관리기준 전 항목 (미생물 제외)", price: "약 325,000원", days: "접수 완료 기준 5영업일 이내", sample: "완제품 3개 이상" },
    { type: "기능성 미백 크림", use: "자가품질 + 기능성 확인", items: "안전관리기준 전 항목 + 미백 성분 단일항목", price: "약 365,000원", days: "접수 완료 기준 5영업일 이내", sample: "완제품 3개 이상" },
    { type: "선크림", use: "자가품질 + 자외선차단", items: "안전관리기준 전 항목 + 자외선차단 성분", price: "약 365,000원", days: "접수 완료 기준 5영업일 이내", sample: "완제품 3개 이상" },
  ];
  return (
    <>
      <Header showKakao />
      <SubpageHero eyebrow="Fee Guide" title="시험 수수료 안내" subtitle="검사항목별 명확한 비용 — VAT 별도" />
      <section className="bg-white py-14 lg:pb-20 lg:pt-16">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-10">
            <p className="mb-3 max-w-xl text-[15px] leading-8 text-[#60767B]">
              자주 문의하시는 항목입니다. 최종 견적은 제품 유형·항목·긴급 여부에 따라 안내드립니다.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-2 rounded-xl border border-[#D8E5E7] bg-[#F8FBFB] px-5 py-4">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-[#4F888B]" aria-hidden />
              <p className="text-[13px] font-bold leading-6 text-[#4F656A]">
                <span className="font-black text-[#285F67]">✓</span> 품질검사 위탁계약 체결은 무료입니다{" "}
                <span className="font-semibold text-[#60767B]">(우편 비용 발생 시 실비만 청구)</span>
              </p>
            </div>
          </div>
          <div className="hidden overflow-hidden rounded-2xl border border-[#D8E5E7] shadow-[0_8px_28px_rgba(36,72,82,0.06)] md:block">
            <div className="grid grid-cols-[1.5fr_0.65fr_0.65fr] bg-[#EEF5F4] px-6 py-4 text-sm font-black text-[#263F46]">
              <div>대표 시험항목</div><div>수수료</div><div>비고</div>
            </div>
            {feeRows.map(([name, price, note], i) => (
              <div key={name}
                className={cx("grid grid-cols-[1.5fr_0.65fr_0.65fr] items-center border-t border-[#F0F3F3] px-6 py-4",
                  i % 2 === 0 ? "bg-white" : "bg-[#FAFCFC]")}>
                <p className="font-bold text-[#4F656A]">{name}</p>
                <p className="font-black text-[#285F67]">{price}</p>
                <p className="text-sm font-bold text-[#8A9EA2]">{note}</p>
              </div>
            ))}
          </div>
          <div className="grid gap-3 md:hidden">
            {feeRows.map(([name, price, note]) => (
              <div key={name} className="rounded-xl border border-[#D8E5E7] bg-white p-5">
                <p className="font-black text-[#263F46]">{name}</p>
                <p className="mt-1.5 text-xl font-black text-[#285F67]">{price}</p>
                <p className="text-sm font-bold text-[#8A9EA2]">{note}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 mb-6">
            <p className="mb-4 text-[15px] font-black text-[#0A1E24]">제품 유형별 예상 비용 · 일정 예시</p>
            <div className="grid gap-4 md:grid-cols-3">
              {pkgRows.map((pkg) => (
                <div key={pkg.type}
                  className="overflow-hidden rounded-2xl border border-[#D8E5E7] bg-white shadow-[0_6px_18px_rgba(36,72,82,0.05)]">
                  <div className="h-1.5 bg-gradient-to-r from-[#285F67] to-[#5DC8BE]" />
                  <div className="p-5">
                    <p className="text-[15px] font-bold text-[#0A1E24]">{pkg.type}</p>
                    <p className="mt-1 text-[12px] font-medium text-[#5E8E90]">{pkg.use}</p>
                    <div className="mt-4 space-y-2 text-[13px]">
                      <div className="flex gap-2"><span className="shrink-0 font-semibold text-[#8A9EA2]">항목</span><span className="text-[#4F656A]">{pkg.items}</span></div>
                      <div className="flex gap-2"><span className="shrink-0 font-semibold text-[#8A9EA2]">납기</span><span className="font-semibold text-[#285F67]">{pkg.days}</span></div>
                      <div className="flex gap-2"><span className="shrink-0 font-semibold text-[#8A9EA2]">시료</span><span className="text-[#4F656A]">{pkg.sample}</span></div>
                    </div>
                    <p className="mt-4 text-xl font-black text-[#285F67]">{pkg.price} <span className="text-xs font-medium text-[#8A9EA2]">+ VAT</span></p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-3 text-[12px] font-bold text-[#8A9EA2]">
              * 위 금액은 대표적인 의뢰 유형 기준 참고 가격이며, 제품 유형·시험항목·긴급 여부에 따라 달라질 수 있습니다.
            </p>
          </div>
          <div className="mb-10 grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-[#D8E5E7] bg-[#F8FBFB] p-6">
              <p className="text-[13px] font-black text-[#263F46]">Raw Data 제공</p>
              <p className="mt-2 text-[13px] leading-7 text-[#60767B]">
                Raw Data는 사전 요청 시 제공 가능하며, 의뢰항목 수수료의 10%가 추가됩니다.
              </p>
            </div>
            <div className="rounded-2xl border border-[#D8E5E7] bg-[#F8FBFB] p-6">
              <p className="text-[13px] font-black text-[#263F46]">시험 일정 안내</p>
              <p className="mt-2 text-[13px] leading-7 text-[#60767B]">
                일반 의뢰는 7일, 긴급 의뢰는 3일 기준이며 본 원의 시험일정에 따라 협의 가능합니다.
              </p>
            </div>
          </div>
          <div className="rounded-2xl bg-[#0A1E24] p-6 md:flex md:items-center md:justify-between">
            <div>
              <p className="text-lg font-black text-white">비용보다 제품명과 납기를 먼저 알려주세요</p>
              <p className="mt-1 text-sm leading-7 text-[#7FC8CC]">납품·입점 일정이 있다면 성적서 가능 일정을 먼저 확인해드립니다.</p>
            </div>
            <div className="mt-5 flex flex-col gap-2 sm:flex-row md:mt-0 md:shrink-0">
              <a href={FEE_GUIDE_PDF} target="_blank" rel="noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-white px-5 text-sm font-black text-[#0A1E24] transition hover:bg-[#F0F7F7]">
                수수료 PDF 보기</a>
              <a href="/#contact"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 text-sm font-black text-white transition hover:bg-white/15">
                납기 확인</a>
            </div>
          </div>
        </div>
      </section>
      <SubpageFooterCta eyebrow="Contact" />
      <Footer />
      <MobileStickyBar />
    </>
  );
}

/* ══════════════════════════ /how ─ HowPage
══════════════════════════ */
function HowPage() {
  return (
    <>
      <Header showKakao />
      <SubpageHero
        eyebrow="Guide"
        title="의뢰 안내 — 처음 의뢰하셔도 괜찮습니다"
        subtitle="검사항목 몰라도 됩니다. 제품명과 희망 납기만 알려주시면 전담 연구원이 검토해드립니다."
      />
      <section className="bg-[#F5F8F8] py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-8">
            <p className="mb-3 text-[11px] font-black uppercase tracking-[0.24em] text-[#5E8E90]">Process</p>
            <h2 className="mb-8 text-[clamp(1.3rem,2.2vw,1.9rem)] font-black leading-[1.12] tracking-[-0.04em] text-[#0A1E24]">시험·검사 위탁의뢰 4단계</h2>
            <div className="overflow-hidden rounded-2xl border border-[#D8E5E7] bg-white shadow-[0_8px_28px_rgba(36,72,82,0.06)]">
              <div className="grid md:grid-cols-4">
                {processSteps.map((s, i) => (
                  <div key={s.num}
                    className={cx("p-6", i !== 0 && "border-t border-[#F0F3F3] md:border-l md:border-t-0")}>
                    <p className="text-3xl font-black tracking-[-0.05em] text-[#BFD9DC]">{s.num}</p>
                    <h3 className="mt-2 font-black text-[#263F46]">{s.title}</h3>
                    <p className="mt-1.5 text-sm leading-6 text-[#60767B]">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-14 rounded-2xl border border-[#D8E5E7] bg-white p-6 shadow-[0_8px_28px_rgba(36,72,82,0.06)]">
            <p className="mb-5 text-[15px] font-black text-[#0A1E24]">처음 의뢰하시는 분을 위한 시료 준비 가이드</p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                { type: "크림 · 로션류",   amount: "완제품 3개 이상", note: "30g 이상 / 개당" },
                { type: "토너 · 에센스류", amount: "완제품 3개 이상", note: "50mL 이상 / 개당" },
                { type: "선크림",          amount: "완제품 3개 이상", note: "30g 이상 / 개당" },
                { type: "원료 · 벌크",     amount: "50g 또는 50mL 이상", note: "별도 협의 가능" },
              ].map((s) => (
                <div key={s.type} className="rounded-xl bg-[#F5F8F8] px-4 py-4">
                  <p className="text-[14px] font-black text-[#263F46]">{s.type}</p>
                  <p className="mt-2 text-[13px] font-bold text-[#285F67]">{s.amount}</p>
                  <p className="mt-0.5 text-[12px] font-bold text-[#8A9EA2]">{s.note}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-xl border border-[#E8EFF0] bg-[#FAFCFC] p-4">
              <p className="text-[13px] leading-6 text-[#60767B]">
                <span className="font-black text-[#4F888B]">발송 주소</span> — 서울시 종로구 인사동5길 42 종로빌딩 10층 시료접수 담당자 앞
              </p>
              <p className="mt-1 text-[13px] leading-6 text-[#60767B]">
                <span className="font-black text-[#4F888B]">입금 계좌</span> — 우리은행 1005-504-148745 · 입금주 (주)와이에스환경기술연구원
              </p>
              <p className="mt-1 text-[12px] font-bold text-[#8A9EA2]">
                * 정확한 시료 용량과 개수는 제품 유형·검사 항목에 따라 달라질 수 있습니다. 문의 시 안내드립니다.
              </p>
            </div>
          </div>

          <div className="mb-14 rounded-2xl border border-[#D8E5E7] bg-white p-6 shadow-[0_8px_28px_rgba(36,72,82,0.06)]">
            <p className="mb-5 text-[15px] font-black text-[#0A1E24]">준비서류</p>
            <div className="grid gap-4 md:grid-cols-2">
              {preparedDocsCards.map((d) => (
                <div key={d.title} className="rounded-xl border border-[#EEF3F3] bg-[#FAFCFC] p-5">
                  <p className="text-[14px] font-black text-[#263F46]">{d.title}</p>
                  <p className="mt-2 text-[13px] leading-7 text-[#60767B]">{d.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[#D8E5E7] bg-[#EEF5F4] p-6 text-center md:text-left md:flex md:items-center md:justify-between md:gap-6">
            <div>
              <p className="text-[13px] font-black text-[#4F888B]">자료 다운로드</p>
              <p className="mt-1 text-[15px] font-black text-[#263F46]">자가품질 위탁검사 안내 PDF</p>
              <p className="mt-1 text-[12px] font-bold text-[#60767B]">법정 요건·절차를 한 장으로 요약한 자료입니다.</p>
            </div>
            <a href={SELF_QUALITY_PDF} target="_blank" rel="noreferrer"
              className="mt-5 inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-[#1C3038] px-6 text-sm font-black text-white transition hover:bg-[#263F46] md:mt-0">
              자가품질 위탁검사 안내 PDF 보기 <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-8">
            <p className="mb-3 text-[11px] font-black uppercase tracking-[0.24em] text-[#5E8E90]">Direct Dial</p>
            <h2 className="text-[clamp(1.35rem,2.5vw,1.95rem)] font-black leading-[1.15] tracking-[-0.04em] text-[#0A1E24]">검사항목별 전담 담당자 직통</h2>
            <p className="mt-3 max-w-2xl text-[15px] leading-8 text-[#60767B]">대표번호를 거치지 않고, 분야 담당 연구원과 바로 상담하세요.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="group rounded-2xl border border-[#D8E5E7] bg-white p-7 shadow-[0_8px_24px_rgba(36,72,82,0.055)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(40,95,103,0.12)]">
              <p className="mb-3 inline-block rounded-full bg-[#EEF5F4] px-3 py-1 text-[11px] font-black uppercase tracking-[0.12em] text-[#285F67]">무기분석</p>
              <p className="text-lg font-black text-[#263F46]">전석호 수석연구원</p>
              <p className="mt-3 text-[13px] leading-[1.8] font-semibold text-[#60767B]">
                중금속 5종 (납·비소·수은·안티몬·카드뮴·니켈), 디옥산, 메탄올, 포름알데하이드
              </p>
              <a href="tel:07043374869"
                className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#285F67] text-sm font-black text-white shadow-[0_4px_14px_rgba(40,95,103,0.25)] transition hover:bg-[#1C4D54]">
                <Phone className="h-4 w-4 shrink-0" /> 070-4337-4869
              </a>
              <p className="mt-4 border-t border-[#EEF3F3] pt-4 text-center text-[12px] font-bold leading-6 text-[#8A9EA2]">
                어느 담당자인지 모르겠다면 →{" "}
                <a href="tel:02-312-0540" className="font-black text-[#285F67] underline-offset-4 hover:underline">대표번호 02-312-0540</a>
              </p>
            </div>
            <div className="group rounded-2xl border border-[#D8E5E7] bg-white p-7 shadow-[0_8px_24px_rgba(36,72,82,0.055)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(40,95,103,0.12)]">
              <p className="mb-3 inline-block rounded-full bg-[#EEF5F4] px-3 py-1 text-[11px] font-black uppercase tracking-[0.12em] text-[#285F67]">유기분석</p>
              <p className="text-lg font-black text-[#263F46]">박미희 책임연구원</p>
              <p className="mt-3 text-[13px] leading-[1.8] font-semibold text-[#60767B]">
                살균·보존제(파라벤 등), 자외선차단 성분, 기능성 주성분(미백/주름개선), 프탈레이트류, 배합금지 성분
              </p>
              <a href="tel:07043374830"
                className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#285F67] text-sm font-black text-white shadow-[0_4px_14px_rgba(40,95,103,0.25)] transition hover:bg-[#1C4D54]">
                <Phone className="h-4 w-4 shrink-0" /> 070-4337-4830
              </a>
              <p className="mt-4 border-t border-[#EEF3F3] pt-4 text-center text-[12px] font-bold leading-6 text-[#8A9EA2]">
                어느 담당자인지 모르겠다면 →{" "}
                <a href="tel:02-312-0540" className="font-black text-[#285F67] underline-offset-4 hover:underline">대표번호 02-312-0540</a>
              </p>
            </div>
          </div>
          <div className="mx-auto mt-10 max-w-2xl">
            <a href={KAKAO_URL} target="_blank" rel="noreferrer"
              className="flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-[#FEE500] font-black text-[#2D2926] shadow-[0_8px_28px_rgba(254,229,0,0.38)] transition hover:bg-[#F6D600]">
              <MessageCircle className="h-5 w-5" /> 카카오톡으로 바로 문의하기
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-[#EEF3F3] bg-white pb-14 pt-12">
        <div className="mx-auto max-w-3xl px-5">
          <p className="mb-3 text-[11px] font-black uppercase tracking-[0.24em] text-[#5E8E90]">FAQ</p>
          <h2 className="mb-8 text-[clamp(1.4rem,2.4vw,2rem)] font-black leading-[1.12] tracking-[-0.045em] text-[#0A1E24]">자주 묻는 질문</h2>
          <div className="space-y-3">{faqs.map(([q, a]) => <FaqItem key={q} q={q} a={a} />)}</div>
        </div>
      </section>

      <SubpageFooterCta eyebrow="Contact" />
      <Footer />
      <MobileStickyBar />
    </>
  );
}

/* ══════════════════════════
   기관소개 페이지
══════════════════════════ */
function AboutPage() {
  return (
    <>
      <Header showKakao />
      <section className="bg-[#EEF5F4] py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-5 text-[clamp(1rem,1.9vw,1.35rem)] font-black tracking-[-0.02em] text-[#4F888B]">화장품시험검사기관 소개</p>
            <h1 className="text-[clamp(1.7rem,3.6vw,3.1rem)] font-black leading-[1.08] tracking-[-0.055em] text-[#263F46]">신뢰할 수 있는 분석결과를 제공합니다</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#4F656A]">
              와이에스환경기술연구원은 KOLAS 국제공인시험기관이자 식약처 지정 화장품 시험검사기관으로,
              인증된 시험법을 통한 완제품 및 원료 품질검사와 화장품 산업 전반의 컨설팅을 제공합니다.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="/#contact"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[#1C3038] px-8 text-base font-black text-white transition hover:bg-[#263F46]">
                성적서 납기 확인 <ArrowRight className="h-5 w-5" />
              </a>
              <a href={LAB_INTRO_PDF} target="_blank" rel="noreferrer"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-[#D8E5E7] bg-white px-8 text-base font-black text-[#28474E] transition hover:border-[#9DBFC4]">
                기관소개 PDF 보기
              </a>
            </div>
          </div>
          <div className="rounded-[28px] border border-[#D8E5E7] bg-white p-5 shadow-[0_28px_72px_rgba(36,72,82,0.1)]">
            <div className="grid gap-3 rounded-[22px] bg-[#F8FBFB] p-5">
              <div className="flex items-center gap-4 rounded-2xl border border-[#D8E5E7] bg-white px-4 py-4">
                <img src={YS_LOGO} alt="YS 로고" className="h-14 w-14 rounded-2xl border border-[#E2EDEF] bg-white p-1 object-contain" />
                <div>
                  <p className="font-black text-[#263F46]">(주)와이에스환경기술연구원</p>
                  <p className="text-sm font-bold text-[#73878C]">YS Institute of Environmental Technology</p>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-3 rounded-2xl border border-[#D8E5E7] bg-white p-4">
                  <img src={MFDS_LOGO} alt="식약처" className="h-12 w-12 object-contain" />
                  <div>
                    <p className="text-xs font-bold text-[#73878C]">화장품 시험검사기관</p>
                    <p className="mt-1 text-lg font-black tracking-[-0.04em] text-[#263F46]">식약처 지정 제18호</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-[#D8E5E7] bg-white p-4">
                  <img src={KOLAS_LOGO} alt="KOLAS" className="h-12 w-16 object-contain" />
                  <div>
                    <p className="text-xs font-bold text-[#73878C]">국제공인시험기관</p>
                    <p className="mt-1 text-lg font-black tracking-[-0.04em] text-[#263F46]">KOLAS 제364호</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-2xl border border-[#D8E5E7] bg-white px-4 py-4">
                <img src={YONSEI_LOGO} alt="연세대학교" className="h-14 w-14 rounded-full object-cover" />
                <div>
                  <p className="font-black text-[#263F46]">연세대학교 교원창업기업</p>
                  <p className="text-sm font-bold text-[#73878C]">연구 기반 전문 시험분석 서비스</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div>
              <p className="mb-3 text-[11px] font-black uppercase tracking-[0.24em] text-[#5E8E90]">Official Certificate</p>
              <h2 className="mb-5 text-[clamp(1.35rem,2.4vw,2rem)] font-black leading-[1.12] tracking-[-0.045em] text-[#263F46]">시험·검사기관 지정서를 직접 확인하세요</h2>
              <p className="mb-6 max-w-xl text-[15px] leading-8 text-[#60767B]">
                식약처 화장품 시험·검사기관 지정서 제18호에 명시된 기관입니다.
                공식 인정서에는 업무범위, 품목, 유효기간이 기재되어 있습니다.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href={CERTIFICATE_PDF} target="_blank" rel="noreferrer"
                  className="inline-flex h-11 items-center gap-2 rounded-xl bg-[#1C3038] px-5 text-sm font-black text-white transition hover:bg-[#263F46]">
                  인정서 PDF 보기 <ExternalLink className="h-4 w-4" />
                </a>
                <a href={LAB_INTRO_PDF} target="_blank" rel="noreferrer"
                  className="inline-flex h-11 items-center gap-2 rounded-xl border border-[#D8E5E7] px-5 text-sm font-black text-[#28474E] transition hover:border-[#9DBFC4]">
                  기관소개 자료
                </a>
              </div>
            </div>
            <div className="rounded-[24px] border border-[#D8E5E7] bg-white p-6 shadow-[0_16px_36px_rgba(36,72,82,0.055)]">
              <div className="grid gap-3 sm:grid-cols-2">
                {certificateFacts.map(([label, value, sub]) => (
                  <div key={label} className="rounded-xl bg-[#F5F8F8] px-4 py-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.15em] text-[#5E8E90]">{label}</p>
                    <p className="mt-1.5 text-[13px] font-black leading-6 text-[#263F46]">{value}</p>
                    {sub ? <p className="mt-1 text-[11px] font-bold leading-[1.65] text-[#60767B]">{sub}</p> : null}
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-xl border border-[#5DC8BE]/30 bg-[#EAF6F6] px-5 py-4">
                <p className="text-[13px] font-bold leading-7 text-[#28474E]">
                  본 기관 발행 시험성적서는 화장품법 시행규칙 제12조 5항에 따른 법정 자가품질 위탁검사 결과서입니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FAFCFC] py-14">
        <div className="mx-auto max-w-7xl px-5">
          <p className="mb-3 text-[11px] font-black uppercase tracking-[0.24em] text-[#5E8E90]">Company Overview</p>
          <h2 className="mb-8 text-[clamp(1.35rem,2.4vw,2rem)] font-black leading-[1.12] tracking-[-0.045em] text-[#263F46]">기관 기본정보</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {aboutCards.map(([title, desc]) => (
              <div key={title} className="rounded-2xl border border-[#D8E5E7] bg-white p-7 shadow-[0_6px_20px_rgba(36,72,82,0.04)]">
                <p className="mb-3 text-[10px] font-black uppercase tracking-[0.22em] text-[#5E8E90]">{title}</p>
                <p className="text-[15px] font-black leading-7 tracking-[-0.02em] text-[#263F46]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F1F7F6] py-14">
        <div className="mx-auto max-w-7xl px-5">
          <p className="mb-3 text-[11px] font-black uppercase tracking-[0.24em] text-[#5E8E90]">Testing Scope</p>
          <h2 className="mb-8 text-[clamp(1.35rem,2.4vw,2rem)] font-black leading-[1.12] tracking-[-0.045em] text-[#263F46]">화장품 시험검사 서비스 분야</h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {aboutServiceFields.map((item) => (
              <div key={item.title} className="rounded-2xl border border-[#D8E5E7] bg-white p-7 shadow-[0_6px_20px_rgba(36,72,82,0.04)]">
                <Microscope className="mb-5 h-6 w-6 text-[#4F888B]" />
                <h3 className="text-[17px] font-black tracking-[-0.03em] text-[#263F46]">{item.title}</h3>
                <p className="mt-3 text-[14px] leading-7 text-[#60767B]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 실험실 갤러리 */}
      <section className="bg-[#0A1E24] py-14">
        <div className="mx-auto max-w-7xl px-5">
          <p className="mb-3 text-[11px] font-black uppercase tracking-[0.24em] text-[#5DC8BE]">Our Laboratory</p>
          <h2 className="mb-8 text-[clamp(1.35rem,2.4vw,2rem)] font-black leading-[1.1] tracking-[-0.045em] text-white">분석 시설 전경</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { src: "/lab-01.jpg", label: "분석실 전경" },
              { src: "/lab-04.jpg", label: "정밀 분석장비" },
              { src: "/lab-02.jpg", label: "시료 분석 작업" },
              { src: "/lab-03.jpg", label: "시료 전처리" },
            ].map((item) => (
              <div key={item.src} className="group overflow-hidden rounded-2xl">
                <div className="relative overflow-hidden">
                  <img src={item.src} alt={item.label}
                    className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <p className="absolute bottom-3 left-4 text-[13px] font-bold text-white">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 대표 소개 */}
      <section className="bg-[#F5F8F8] py-14">
        <div className="mx-auto max-w-7xl px-5">
          <div className="overflow-hidden rounded-[28px] border border-[#D8E5E7] bg-white shadow-[0_16px_44px_rgba(36,72,82,0.07)]">
            <div className="grid lg:grid-cols-[280px_1fr]">
              <div className="flex items-center justify-center bg-[#EEF5F4] p-8">
                <div className="overflow-hidden rounded-2xl border-4 border-white shadow-[0_12px_32px_rgba(36,72,82,0.12)]">
                  <img src="/eom-yujin.png" alt="엄유진 대표" className="h-48 w-40 object-cover object-top" />
                </div>
              </div>
              <div className="p-8 lg:p-10">
                <p className="mb-2 text-[11px] font-black uppercase tracking-[0.24em] text-[#5E8E90]">Director</p>
                <h3 className="text-2xl font-black tracking-[-0.04em] text-[#0A1E24]">
                  엄유진 <span className="text-lg font-bold text-[#5E8E90]">대표이사 · Ph.D.</span>
                </h3>
                <p className="mt-1 text-[14px] font-bold text-[#285F67]">
                  연세대학교 화공생명공학 박사 · ICP-MS / LC-MS/MS 극미량 분석 전문가
                </p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    { val: "17년",  label: "KOLAS 공인 유지" },
                    { val: "7년차", label: "식약처 지정 운영" },
                    { val: "AA등급", label: "기보 기술신용평가" },
                    { val: "2개",   label: "식약처·KOLAS 동시 인증" },
                  ].map((s) => (
                    <div key={s.label} className="flex items-center gap-3 rounded-xl bg-[#F5F8F8] px-4 py-3">
                      <p className="text-lg font-black text-[#285F67]">{s.val}</p>
                      <p className="text-[13px] font-bold text-[#60767B]">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-[#0A1E24] py-14">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-8 lg:grid-cols-[1fr_200px] lg:items-center">
            <div>
              <p className="mb-3 text-[11px] font-black uppercase tracking-[0.24em] text-[#5DC8BE]">Contact</p>
              <h2 className="text-[clamp(1.35rem,2.8vw,2.35rem)] font-black leading-[1.12] tracking-[-0.05em] text-white">기관 정보를 확인하셨다면 바로 상담하세요</h2>
              <p className="mt-4 text-[15px] leading-8 text-[#7FC8CC]">성적서 용도, 제품명, 제형, 희망 납기를 알려주시면 담당자가 우선 검토 후 안내드립니다.</p>
            </div>
            <div className="flex flex-col gap-3">
              <a href={KAKAO_URL} target="_blank" rel="noreferrer"
                className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-[#FEE500] font-black text-[#2D2926] transition hover:bg-[#F6D600]">
                <MessageCircle className="h-5 w-5" /> 카카오톡
              </a>
              <a href="tel:02-312-0540"
                className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-white/15 font-black text-white transition hover:bg-white/22">
                <Phone className="h-5 w-5" /> 전화 상담
              </a>
              <a href="mailto:testing@ysiet.com"
                className="flex h-12 items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/8 font-black text-white transition hover:bg-white/15">
                <Mail className="h-5 w-5" /> 이메일
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <MobileStickyBar />
    </>
  );
}

export default function App() {
  const path = window.location.pathname;
  let Page = HomePage;
  if (path === "/about") Page = AboutPage;
  else if (path === "/why") Page = WhyPage;
  else if (path === "/proof") Page = ProofPage;
  else if (path === "/fees") Page = FeesPage;
  else if (path === "/how") Page = HowPage;
  return (
    <main className="min-h-screen w-full bg-white text-[#263F46] antialiased">
      <Page />
    </main>
  );
}
