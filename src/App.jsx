import React from "react";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Banknote,
  CalendarClock,
  CheckCircle2,
  ClipboardCheck,
  FlaskConical,
  HelpCircle,
  Mail,
  MapPin,
  Microscope,
  Phone,
  ShieldCheck,
  TimerReset,
  Users,
} from "lucide-react";

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

function PrimaryButton({ href, children, className = "" }) {
  return (
    <a
      href={href}
      className={cx(
        "inline-flex h-12 items-center justify-center rounded-full bg-[#0B2A4A] px-6 text-sm font-black text-white shadow-lg shadow-slate-900/10 transition hover:bg-[#123A63]",
        className
      )}
    >
      {children}
    </a>
  );
}

function SecondaryButton({ href, children, className = "" }) {
  return (
    <a
      href={href}
      className={cx(
        "inline-flex h-12 items-center justify-center rounded-full border border-[#C9D9E1] bg-white px-6 text-sm font-black text-[#0B2A4A] shadow-sm transition hover:border-[#0B2A4A]",
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
        "rounded-[26px] border border-[#DCE8EE] bg-white shadow-[0_18px_54px_rgba(8,24,39,0.06)]",
        className
      )}
    >
      {children}
    </div>
  );
}

const labelClass =
  "text-xs font-black uppercase tracking-[0.28em] text-[#217E8F]";

const titleClass =
  "whitespace-nowrap text-[clamp(1.32rem,2.05vw,2.22rem)] font-black leading-[1.1] tracking-[-0.04em] text-[#081827]";

const titleLightClass =
  "whitespace-nowrap text-[clamp(1.32rem,2.05vw,2.22rem)] font-black leading-[1.1] tracking-[-0.04em] text-white";

const heroTitleClass =
  "text-[clamp(2.05rem,4.3vw,4.45rem)] font-black leading-[1.03] tracking-[-0.065em] text-[#081827]";

const proofBadges = [
  "식약처 지정 화장품 시험·검사기관 제18호",
  "KOLAS 국제공인시험기관 제364호",
  "일반 의뢰 7일 · 긴급 의뢰 3일 가능 여부 상담",
  "1건 의뢰도 전문 카운셀링 지원",
];

const quickQuestions = [
  "출시·출고 전 시험성적서가 필요하신가요",
  "자가품질 위탁검사 항목이 헷갈리시나요",
  "견적·상담·진행 확인을 빠르게 받고 싶으신가요",
  "브랜드사·제조사·유통사 제출용 성적서가 필요하신가요",
];

const keyPoints = [
  {
    title: "식약처 지정 제18호",
    desc: "화장품 시험·검사기관 지정 근거를 바탕으로 상담합니다",
    icon: <ShieldCheck className="h-7 w-7" />,
  },
  {
    title: "KOLAS 제364호",
    desc: "국제공인시험기관의 신뢰성을 기반으로 시험분석을 진행합니다",
    icon: <Award className="h-7 w-7" />,
  },
  {
    title: "일반 7일 긴급 3일",
    desc: "희망 일정이 있다면 가능 여부를 먼저 확인해드립니다",
    icon: <TimerReset className="h-7 w-7" />,
  },
  {
    title: "대표 수수료 공개",
    desc: "문의 전 주요 시험항목의 비용 범위를 먼저 확인할 수 있습니다",
    icon: <Banknote className="h-7 w-7" />,
  },
];

const comparisonRows = [
  ["기관 설명을 먼저 읽어야 함", "성적서 납기부터 바로 확인"],
  ["메뉴가 많고 동선이 복잡함", "견적 요청까지 빠르게 이동"],
  ["가격 감이 늦게 잡힘", "대표 수수료를 먼저 확인"],
  ["처음 의뢰자는 준비서류가 막막함", "필요 서류를 한눈에 안내"],
  ["상담과 진행 확인이 느릴 수 있음", "1건 의뢰도 전문 카운셀링 지원"],
];

const services = [
  "화장품 자가품질 위탁검사",
  "유통화장품 안전관리 항목 분석",
  "기능성화장품 품질관리",
  "무첨가 광고 검증 성분분석",
  "중금속·유해물질 성분 분석",
  "화장품 원료·부자재 분석",
  "신제품 공동 개발 및 R&D 지원",
  "시험방법 유효성 확인 및 보고서",
];

const fees = [
  ["내용량 / pH", "각 5,000원"],
  ["납·비소·안티몬·카드뮴·니켈", "각 30,000원"],
  ["중금속 5종 동시분석", "100,000원"],
  ["유통화장품 안전관리기준 전 항목", "325,000원"],
  ["기능성 미백·주름개선 단일항목", "각 40,000원"],
  ["살균·보존제", "각 50,000원"],
];

const documents = [
  "품질검사 위탁계약: 사업자등록증 사본, 대표자 도장",
  "시험의뢰서: 시료명, 용량, 제조일자, 제조번호, 시험항목",
  "수입화장품: 표준통관예정보고서 EDI",
  "기능성화장품: 제품 기준 및 시험방법 등 필요 시",
  "최초 의뢰: 사업자등록증 사본",
];

const process = [
  ["01", "납기 먼저 확인", "제품명, 제형, 제출처, 희망 납기를 먼저 알려주세요"],
  ["02", "시험항목 안내", "자가품질, 납품, 수입, 기능성 여부에 따라 필요한 항목을 안내합니다"],
  ["03", "시료 접수", "우편 또는 방문 접수 후 수수료 납입 시점부터 분석을 진행합니다"],
  ["04", "성적서 발급", "시험 완료 후 시험성적서 원본을 우편으로 전달합니다"],
];

const trustItems = [
  {
    title: "식약처 지정 화장품 시험·검사기관",
    desc: "제18호 지정기관으로 화장품 시험·검사와 자가품질 위탁검사 상담이 가능합니다",
    icon: <ShieldCheck className="h-7 w-7" />,
  },
  {
    title: "KOLAS 국제공인시험기관",
    desc: "KOLAS 제364호 국제공인시험기관으로 신뢰도 높은 분석 서비스를 제공합니다",
    icon: <Award className="h-7 w-7" />,
  },
  {
    title: "전문 분석 인력과 장비",
    desc: "숙련된 연구진과 분석 장비를 기반으로 신속하고 정확한 분석 결과를 제공합니다",
    icon: <Microscope className="h-7 w-7" />,
  },
  {
    title: "1건 의뢰도 상담 지원",
    desc: "처음 의뢰하는 고객도 준비서류와 진행 절차를 안내받을 수 있습니다",
    icon: <Users className="h-7 w-7" />,
  },
];

const faqs = [
  [
    "다른 시험기관 대신 YSIET에 문의해야 하는 이유가 뭔가요",
    "YSIET는 식약처 지정 화장품 시험·검사기관 제18호이자 KOLAS 국제공인시험기관 제364호입니다. 일반 7일·긴급 3일 가능 여부 상담, 대표 수수료 공개, 1건 의뢰 상담까지 한 번에 안내받을 수 있습니다.",
  ],
  [
    "성적서 발급까지 얼마나 걸리나요",
    "일반 의뢰 소요일은 7일, 긴급 의뢰 소요일은 3일입니다. 단, 긴급 의뢰 가능 여부는 연구원의 시험 일정과 의뢰 항목에 따라 달라질 수 있습니다.",
  ],
  [
    "자가품질 위탁검사 항목을 몰라도 문의해도 되나요",
    "네. 제품 유형, 제형, 제출처, 희망 납기를 알려주시면 먼저 확인해야 할 항목과 준비사항을 안내드립니다.",
  ],
  [
    "처음 의뢰하거나 1건만 의뢰해도 되나요",
    "가능합니다. 1건의 분석 요청에도 전문적인 카운셀링을 지원하며, 처음 의뢰하시는 고객도 절차와 준비서류를 안내받을 수 있습니다.",
  ],
];

export default function App() {
  return (
    <main className="min-h-screen bg-[#F7FAFC] text-[#081827] antialiased">
      <header className="sticky top-0 z-50 border-b border-[#DCE8EE]/80 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#top" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0B2A4A] text-white shadow-sm">
              <FlaskConical className="h-5 w-5" />
            </div>
            <div>
              <p className="text-base font-black tracking-[-0.02em]">YSIET</p>
              <p className="text-xs font-bold text-slate-500">
                Cosmetic Testing Laboratory
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-bold text-slate-600 xl:flex">
            <a href="#strength" className="hover:text-[#0B2A4A]">핵심 장점</a>
            <a href="#services" className="hover:text-[#0B2A4A]">검사항목</a>
            <a href="#fees" className="hover:text-[#0B2A4A]">수수료</a>
            <a href="#documents" className="hover:text-[#0B2A4A]">준비서류</a>
            <a href="#contact" className="hover:text-[#0B2A4A]">문의</a>
          </nav>

          <PrimaryButton href="#contact" className="h-10 px-5">
            납기 확인
          </PrimaryButton>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden bg-[#F2F8FB]">
        <div className="absolute inset-0">
          <div className="absolute left-[-12rem] top-24 h-[28rem] w-[28rem] rounded-full bg-[#DDF2F0] blur-3xl" />
          <div className="absolute right-[-10rem] top-[-8rem] h-[34rem] w-[34rem] rounded-full bg-[#CBE4F2] blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#BED7E4] bg-white/80 px-4 py-2 text-sm font-black text-[#0B2A4A] shadow-sm">
              <BadgeCheck className="h-4 w-4 text-[#217E8F]" />
              다른 시험기관을 살펴보다 오셨다면 먼저 납기부터 확인하세요
            </div>

            <h1 className={heroTitleClass}>
              화장품 성적서
              <span className="block text-[#217E8F]">더 이상 기다리지 말고</span>
              먼저 일정 잡으세요
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-700 md:text-xl md:leading-9">
              식약처 지정 제18호와 KOLAS 제364호의 신뢰성으로 자가품질 위탁검사부터 시험성적서 발급까지 안내합니다
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton href="#contact" className="h-14 px-8 text-base">
                지금 성적서 납기 확인 <ArrowRight className="ml-2 h-5 w-5" />
              </PrimaryButton>
              <SecondaryButton href="#fees" className="h-14 px-8 text-base">
                대표 수수료 보기
              </SecondaryButton>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {proofBadges.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-[#DCE8EE] bg-white/85 px-4 py-3 text-sm font-black shadow-sm"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#217E8F]" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <Card className="border-0 bg-white/95 p-3 shadow-[0_30px_90px_rgba(8,24,39,0.12)]">
            <div className="rounded-[24px] bg-[#0B2A4A] p-7 text-white">
              <p className="text-xs font-black uppercase tracking-[0.26em] text-[#A8DDE8]">
                Fast Check
              </p>
              <h2 className="mt-3 whitespace-nowrap text-[clamp(1.28rem,1.9vw,1.72rem)] font-black tracking-[-0.04em]">
                여러 시험기관을 살펴보다 오셨나요
              </h2>
              <p className="mt-3 leading-7 text-slate-200">
                납기, 지정기관, KOLAS, 수수료를 먼저 확인해보세요
              </p>
            </div>

            <div className="space-y-3 p-5">
              {quickQuestions.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-2xl border border-[#E6EEF2] bg-[#F7FAFC] p-4"
                >
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#217E8F]" />
                  <p className="font-bold text-slate-800">{item}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-3 px-5 pb-5 sm:grid-cols-2">
              <a
                href="tel:02-312-0540"
                className="flex items-center justify-center gap-2 rounded-2xl bg-[#0B2A4A] px-4 py-4 text-center font-black text-white transition hover:bg-[#12385E]"
              >
                <Phone className="h-5 w-5" /> 02-312-0540
              </a>
              <a
                href="mailto:testing@ysiet.com"
                className="flex items-center justify-center gap-2 rounded-2xl border border-[#DCE8EE] bg-white px-4 py-4 text-center font-black text-[#0B2A4A] transition hover:border-[#0B2A4A]"
              >
                <Mail className="h-5 w-5" /> 이메일 견적
              </a>
            </div>
          </Card>
        </div>
      </section>

      <section className="border-y border-[#DCE8EE] bg-white">
        <div className="mx-auto grid max-w-7xl divide-y divide-[#DCE8EE] px-5 md:grid-cols-4 md:divide-x md:divide-y-0">
          <div className="flex items-center gap-3 py-5 md:px-5">
            <ShieldCheck className="h-5 w-5 text-[#217E8F]" />
            <p className="font-black">식약처 지정 제18호</p>
          </div>
          <div className="flex items-center gap-3 py-5 md:px-5">
            <Award className="h-5 w-5 text-[#217E8F]" />
            <p className="font-black">KOLAS 제364호</p>
          </div>
          <div className="flex items-center gap-3 py-5 md:px-5">
            <CalendarClock className="h-5 w-5 text-[#217E8F]" />
            <p className="font-black">일반 7일 긴급 3일</p>
          </div>
          <div className="flex items-center gap-3 py-5 md:px-5">
            <Banknote className="h-5 w-5 text-[#217E8F]" />
            <p className="font-black">대표 수수료 공개</p>
          </div>
        </div>
      </section>

      <section id="strength" className="mx-auto max-w-7xl px-5 py-24">
        <div className="mb-12">
          <p className={labelClass}>Key Points</p>
          <h2 className={titleClass}>성적서 의뢰 전 꼭 확인할 4가지</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {keyPoints.map((item) => (
            <Card key={item.title} className="transition duration-300 hover:-translate-y-1">
              <div className="p-7">
                <div className="mb-6 flex h-13 w-13 items-center justify-center rounded-2xl bg-[#E8F5F7] text-[#217E8F]">
                  {item.icon}
                </div>
                <h3 className="whitespace-nowrap text-xl font-black tracking-[-0.03em]">
                  {item.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-600">{item.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-[#0B2A4A] py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#A8DDE8]">
              Before Request
            </p>
            <h2 className={titleLightClass}>의뢰 전 자주 막히는 부분</h2>
            <p className="mt-6 text-lg leading-8 text-slate-200">
              성적서 일정, 준비서류, 수수료 범위를 먼저 확인하시면 상담과 접수가 더 빨라집니다
            </p>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/10">
            <div className="grid grid-cols-2 border-b border-white/10">
              <div className="p-5 text-sm font-black text-slate-300">
                의뢰 전 고민
              </div>
              <div className="bg-[#217E8F] p-5 text-sm font-black text-white">
                YSIET 안내
              </div>
            </div>
            {comparisonRows.map(([before, after]) => (
              <div key={before} className="grid grid-cols-2 border-b border-white/10 last:border-b-0">
                <div className="p-5 font-bold text-slate-300">{before}</div>
                <div className="p-5 font-black text-white">{after}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-24">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className={labelClass}>Testing Services</p>
            <h2 className={titleClass}>검사 가능한 서비스를 한눈에</h2>
          </div>
          <p className="text-lg leading-8 text-slate-600">
            일반 화장품, 기능성 화장품, 원료·부자재, R&D 지원까지 제품 유형과 제출 목적에 따라 상담 후 확정됩니다
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service}
              className="rounded-[24px] border border-[#DCE8EE] bg-white p-6 transition hover:-translate-y-1"
            >
              <CheckCircle2 className="mb-5 h-6 w-6 text-[#217E8F]" />
              <p className="text-lg font-black leading-7 tracking-[-0.025em]">
                {service}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="fees" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className={labelClass}>Fee Guide</p>
              <h2 className={titleClass}>가격 감을 먼저 잡게 해드립니다</h2>
            </div>
            <p className="text-lg leading-8 text-slate-600">
              대표 수수료를 먼저 확인하고 실제 견적은 시험항목, 제품유형, 긴급 여부에 따라 상담 후 안내받으실 수 있습니다
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {fees.map(([name, price]) => (
              <div
                key={name}
                className="rounded-[24px] border border-[#DCE8EE] bg-[#F7FAFC] p-6"
              >
                <p className="text-base font-black text-slate-700">{name}</p>
                <p className="mt-3 text-3xl font-black tracking-[-0.04em] text-[#217E8F]">
                  {price}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-[28px] bg-[#0B2A4A] p-6 text-white md:flex md:items-center md:justify-between">
            <div>
              <p className="whitespace-nowrap text-xl font-black">
                견적을 기다리기 전에 먼저 범위를 확인하세요
              </p>
              <p className="mt-2 text-slate-200">
                제품명과 필요 항목을 보내주시면 실제 견적 기준으로 안내드립니다
              </p>
            </div>
            <a
              href="#contact"
              className="mt-5 inline-flex rounded-full bg-white px-6 py-3 font-black text-[#0B2A4A] md:mt-0"
            >
              견적 요청하기
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className={labelClass}>Self Quality Testing</p>
            <h2 className={titleClass}>자가품질 위탁검사 처음이어도 바로 시작</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              품질검사 시설이 없는 경우 식약처 지정 시험·검사기관과 품질검사 위탁계약을 체결하여 품질관리를 진행할 수 있습니다
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <div className="p-6">
                <p className={labelClass}>Check</p>
                <h3 className="mt-2 text-2xl font-black tracking-[-0.035em]">위탁계약</h3>
                <p className="mt-3 leading-7 text-slate-600">최초 의뢰 또는 변경사항 발생 시 체결</p>
              </div>
            </Card>
            <Card>
              <div className="p-6">
                <p className={labelClass}>Check</p>
                <h3 className="mt-2 text-2xl font-black tracking-[-0.035em]">계약비용</h3>
                <p className="mt-3 leading-7 text-slate-600">무료, 우편비용 발생 시 실비 청구</p>
              </div>
            </Card>
            <Card>
              <div className="p-6">
                <p className={labelClass}>Check</p>
                <h3 className="mt-2 text-2xl font-black tracking-[-0.035em]">분석 시작</h3>
                <p className="mt-3 leading-7 text-slate-600">수수료 납입 시점부터 진행</p>
              </div>
            </Card>
            <Card>
              <div className="p-6">
                <p className={labelClass}>Check</p>
                <h3 className="mt-2 text-2xl font-black tracking-[-0.035em]">성적서</h3>
                <p className="mt-3 leading-7 text-slate-600">시험 완료 후 원본 우편 전달</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="documents" className="bg-[#EEF7FA] py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className={labelClass}>Before Request</p>
            <h2 className={titleClass}>문의 전 준비하면 견적이 빨라집니다</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              준비서류와 제품 정보를 미리 알려주시면 상담과 접수가 훨씬 빨라집니다
            </p>
          </div>

          <div className="space-y-3">
            {documents.map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-[22px] border border-[#DCE8EE] bg-white p-5 shadow-sm"
              >
                <ClipboardCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#217E8F]" />
                <p className="font-bold text-slate-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-12">
            <p className={labelClass}>Process</p>
            <h2 className={titleClass}>복잡한 설명 없이 성적서까지 4단계</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-4">
            {process.map(([step, name, desc]) => (
              <Card key={step}>
                <div className="p-7">
                  <p className="text-5xl font-black tracking-[-0.05em] text-[#CFE6EF]">
                    {step}
                  </p>
                  <h3 className="mt-4 text-xl font-black tracking-[-0.03em]">
                    {name}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">{desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="trust" className="mx-auto max-w-7xl px-5 py-24">
        <div className="mb-12">
          <p className={labelClass}>Trust Proof</p>
          <h2 className={titleClass}>확인된 신뢰근거를 한눈에</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => (
            <Card key={item.title}>
              <div className="p-7">
                <div className="mb-6 flex h-13 w-13 items-center justify-center rounded-2xl bg-[#E8F5F7] text-[#217E8F]">
                  {item.icon}
                </div>
                <h3 className="text-xl font-black tracking-[-0.03em]">
                  {item.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-600">{item.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 py-24">
        <div className="overflow-hidden rounded-[36px] bg-[#081827] p-8 text-white shadow-[0_32px_90px_rgba(8,24,39,0.18)] md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.86fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[#A8DDE8]">
                Request Quote
              </p>
              <h2 className="whitespace-nowrap text-[clamp(1.42rem,2.9vw,2.9rem)] font-black leading-[1.08] tracking-[-0.05em]">
                기관 비교는 충분합니다 이제 납기부터 확인하세요
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                제품명, 제형, 필요한 성적서 용도, 희망 납기를 알려주시면 우선 검토 후 안내드립니다
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="tel:02-312-0540"
                  className="inline-flex h-14 items-center justify-center rounded-full bg-white px-8 font-black text-[#0B2A4A]"
                >
                  <Phone className="mr-2 h-5 w-5" /> 02-312-0540
                </a>
                <a
                  href="mailto:testing@ysiet.com"
                  className="inline-flex h-14 items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 font-black text-white"
                >
                  <Mail className="mr-2 h-5 w-5" /> testing@ysiet.com
                </a>
              </div>
            </div>

            <div className="rounded-[28px] bg-white p-6 text-[#081827]">
              <p className="text-sm font-black text-[#217E8F]">
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
                    <CheckCircle2 className="h-5 w-5 text-[#217E8F]" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="mailto:testing@ysiet.com"
                className="mt-6 flex h-14 items-center justify-center rounded-2xl bg-[#0B2A4A] font-black text-white"
              >
                빠른 견적 요청하기
              </a>
              <div className="mt-5 flex gap-3 rounded-2xl bg-[#F2F8FB] p-4 text-sm font-bold leading-6 text-slate-700">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#217E8F]" />
                서울시 종로구 인사동5길 42 종로빌딩 10층
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-[#F2F8FB] py-24">
        <div className="mx-auto max-w-5xl px-5">
          <div className="mb-10 text-center">
            <p className={labelClass}>FAQ</p>
            <h2 className={titleClass}>자주 묻는 질문</h2>
          </div>

          <div className="space-y-4">
            {faqs.map(([q, a]) => (
              <details
                key={q}
                className="group rounded-[24px] border border-[#DCE8EE] bg-white p-6 shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black">
                  <span className="flex items-center gap-3">
                    <HelpCircle className="h-5 w-5 text-[#217E8F]" />
                    {q}
                  </span>
                  <span className="text-[#217E8F] transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 leading-8 text-slate-600">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#061421] px-5 py-12 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_1fr] md:items-center">
          <div>
            <p className="text-2xl font-black tracking-[-0.03em]">
              와이에스환경기술연구원
            </p>
            <p className="mt-3 max-w-xl leading-7 text-slate-400">
              식약처 지정 화장품 시험·검사기관 제18호 · KOLAS 국제공인시험기관 제364호
            </p>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <p className="font-bold text-slate-300">대표 전화: 02-312-0540</p>
            <p className="font-bold text-slate-300">이메일: testing@ysiet.com</p>
            <p className="font-bold text-slate-300">팩스: 02-312-0560</p>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm text-slate-500">
          © YS Institute of Environmental Technology. All rights reserved.
        </div>
      </footer>

      <div className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-3xl -translate-x-1/2 rounded-full bg-[#061421] p-2 shadow-2xl md:hidden">
        <div className="grid grid-cols-2 gap-2">
          <a
            href="tel:02-312-0540"
            className="rounded-full bg-white px-4 py-3 text-center text-sm font-black text-[#0B2A4A]"
          >
            전화 상담
          </a>
          <a
            href="mailto:testing@ysiet.com"
            className="rounded-full bg-[#217E8F] px-4 py-3 text-center text-sm font-black text-white"
          >
            이메일 견적
          </a>
        </div>
      </div>
    </main>
  );
}
