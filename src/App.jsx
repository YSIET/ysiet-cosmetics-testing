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
  MessageCircle,
  Microscope,
  Phone,
  ShieldCheck,
  TimerReset,
  UserCheck,
  Award,
  Star,
  Zap,
  AlertTriangle,
  Clock,
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
   "일반 의뢰는 통상 7일 기준으로 안내되며, 긴급 의뢰는 3일 기준으로 상담 가능합니다. 단, 시험 일정과 항목에 따라 가능 여부가 달라질 수 있습니다."],
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
];

const compareRows = [
  { label: "식약처 지정 위탁검사기관",                        other: "일부만 해당",      highlight: false },
  { label: "KOLAS 국제공인 (ISO/IEC 17025)",              other: "대부분 미보유",    highlight: false },
  { label: "연세대 교원창업 — 석·박사 연구인력 직접 분석",      other: "19개 중 유일",    highlight: true  },
  { label: "납기 일정 사전 상담 (일반 7일 / 긴급 3일 상담)", other: "일정 협의 불투명", highlight: false },
  { label: "검사항목 전담 안내 (항목 몰라도 OK)",             other: "셀프 확인 필요",  highlight: false },
  { label: "법정 자가품질 위탁 요건 대응",                    other: "기관에 따라 상이", highlight: false },
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
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

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
          {[["/#why","선택이유"],["/#proof","품질근거"],["/#fees","수수료"],["/#contact","문의"],["/about","기관소개"]].map(([href,label]) => (
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
            className="inline-flex h-10 items-center justify-center rounded-full bg-[#285F67] px-5 text-sm font-black text-white shadow-[0_4px_14px_rgba(40,95,103,0.30)] transition hover:bg-[#1C4D54]">
            납기 확인
          </a>
        </div>
      </div>
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

/* ══════════════════════════
   홈 페이지
══════════════════════════ */
function HomePage() {
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
                <span className="text-[#5DC8BE]">놓치면 납품이 밀립니다.</span><br />
                <span className="text-white/90">먼저 확인하세요.</span>
              </h1>

              <p className="mt-6 max-w-lg text-[clamp(0.95rem,1.2vw,1.06rem)] leading-[1.9] text-[#8BBFC4]">
                검사항목을 몰라도 괜찮습니다.
                제품명·제형·희망 납기만 알려주시면
                식약처 지정·KOLAS 공인 기관에서
                필요한 항목과 가능 일정을 전담 안내합니다.
              </p>

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
                  { val: "7일",           label: "일반 의뢰 기준 납기" },
                  { val: "3일",           label: "긴급 의뢰 상담 가능" },
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

              {/* 사회적 증거 플레이스홀더 — 숫자 나중에 채울 자리 */}
              {/* TODO: 실적 데이터 확보 후 아래 주석 해제
              <div className="mt-6 flex flex-wrap gap-4 rounded-2xl border border-white/10 bg-white/6 px-5 py-4">
                <div className="text-center">
                  <p className="text-2xl font-black text-white">X,XXX<span className="text-base">건+</span></p>
                  <p className="mt-1 text-[11px] font-bold text-[#7FC8CC]">누적 의뢰건수</p>
                </div>
                <div className="border-l border-white/15 pl-4 text-center">
                  <p className="text-2xl font-black text-white">XXX<span className="text-base">개사+</span></p>
                  <p className="mt-1 text-[11px] font-bold text-[#7FC8CC]">거래 브랜드</p>
                </div>
                <div className="border-l border-white/15 pl-4 text-center">
                  <p className="text-2xl font-black text-white">XX<span className="text-base">년</span></p>
                  <p className="mt-1 text-[11px] font-bold text-[#7FC8CC]">분석 경력</p>
                </div>
              </div>
              -->

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
                    <p className="text-lg font-black text-white">통상 7일</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 border-l border-white/15 pl-4">
                  <Zap className="h-4 w-4 text-[#5DC8BE]" />
                  <div>
                    <p className="text-[10px] font-black text-[#7FC8CC]">긴급 의뢰</p>
                    <p className="text-lg font-black text-[#5DC8BE]">3일 상담</p>
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

          <div className="mb-12 overflow-hidden rounded-2xl border border-[#D8E5E7] shadow-[0_8px_30px_rgba(36,72,82,0.07)]">
            <div className="grid grid-cols-[1fr_130px_170px] bg-[#0A1E24] px-6 py-5">
              <p className="text-sm font-black text-white/60">비교 항목</p>
              <p className="text-center text-sm font-black text-[#5DC8BE]">와이에스 ✓</p>
              <p className="text-center text-sm font-black text-white/35">타 기관 일반</p>
            </div>
            {compareRows.map((row, i) => (
              <div key={row.label}
                className={cx(
                  "grid grid-cols-[1fr_130px_170px] items-center border-t px-6 py-4",
                  row.highlight
                    ? "border-[#FEE500]/30 bg-[#FFFBEA]"
                    : i % 2 === 0 ? "border-[#EEF3F3] bg-white" : "border-[#EEF3F3] bg-[#FAFCFC]"
                )}>
                <p className={cx("font-bold", row.highlight ? "text-[#7A6000]" : "text-[#4F656A]")}>
                  {row.highlight && <span className="mr-2 inline-block rounded-full bg-[#FEE500] px-2 py-0.5 text-[10px] font-black text-[#7A6000]">유일</span>}
                  {row.label}
                </p>
                <div className="flex justify-center">
                  <span className={cx(
                    "inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-black",
                    row.highlight ? "bg-[#FEE500] text-[#7A6000]" : "bg-[#E8F5F4] text-[#285F67]"
                  )}>
                    <CheckCircle2 className="h-3.5 w-3.5" /> 보유
                  </span>
                </div>
                <p className={cx("text-center text-sm font-bold", row.highlight ? "text-[#B89000]" : "text-[#A0B0B4]")}>
                  {row.other}
                </p>
              </div>
            ))}
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { Icon: Zap,        title: "검사항목 몰라도 OK",     desc: "제품명·제형·납기만 알려주시면 필요한 항목과 준비사항을 전담 안내해드립니다." },
              { Icon: FileCheck2, title: "법정 자가품질 위탁 대응", desc: "자체 시설 없는 책임판매업자도 식약처 지정기관 위탁으로 법적 요건을 충족합니다." },
              { Icon: TimerReset, title: "납품 일정 기준 검토",     desc: "납품·입점·유통 일정에 맞춰 성적서 가능 일정을 먼저 확인해드립니다." },
              { Icon: UserCheck,  title: "전담 담당자 1:1 안내",    desc: "처음 의뢰하거나 기관을 전환하는 경우에도 항목과 절차를 함께 정리합니다." },
            ].map(({ Icon, title, desc }) => (
              <div key={title}
                className="group rounded-2xl border border-[#D8E5E7] bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[#9DBFC4] hover:shadow-[0_16px_40px_rgba(40,95,103,0.12)]">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF5F4] text-[#285F67] transition group-hover:bg-[#285F67] group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-[15px] font-black tracking-[-0.02em] text-[#1C3038]">{title}</h3>
                <p className="mt-2 text-[13px] leading-[1.8] text-[#60767B]">{desc}</p>
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
                {certificateFacts.map(([label, value]) => (
                  <div key={label} className="rounded-xl bg-[#F5F8F8] px-4 py-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.15em] text-[#5E8E90]">{label}</p>
                    <p className="mt-1.5 text-[13px] font-black leading-6 text-[#263F46]">{value}</p>
                  </div>
                ))}
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
                  <h3 className="text-[14px] font-black text-[#263F46]">{title}</h3>
                  <p className="mt-2 text-[13px] leading-6 text-[#60767B]">{desc}</p>
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

/* ══════════════════════════
   기관소개 페이지
══════════════════════════ */
function AboutPage() {
  return (
    <>
      <Header />
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
                {certificateFacts.map(([label, value]) => (
                  <div key={label} className="rounded-xl bg-[#F5F8F8] px-4 py-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.15em] text-[#5E8E90]">{label}</p>
                    <p className="mt-1.5 text-[13px] font-black leading-6 text-[#263F46]">{value}</p>
                  </div>
                ))}
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
  return (
    <main className="min-h-screen w-full bg-white text-[#263F46] antialiased">
      {path === "/about" ? <AboutPage /> : <HomePage />}
    </main>
  );
}
