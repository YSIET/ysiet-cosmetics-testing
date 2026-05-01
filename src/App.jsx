import React from "react";
import {
  ArrowRight,
  Award,
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

function LinkButton({ href, children, variant = "primary", className = "" }) {
  const variants = {
    primary:
      "bg-[#2F6F73] text-white hover:bg-[#285E62] shadow-[0_12px_30px_rgba(47,111,115,0.16)]",
    secondary:
      "bg-white text-[#254E58] border border-[#D7E3E5] hover:border-[#8AB7BC]",
    light: "bg-white text-[#254E58] hover:bg-[#F4FAFA]",
    ghost:
      "bg-white/12 text-white border border-white/25 hover:bg-white/18",
  };

  return (
    <a
      href={href}
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
        "rounded-[24px] border border-[#D9E6E8] bg-white shadow-[0_16px_42px_rgba(37,78,88,0.055)]",
        className
      )}
    >
      {children}
    </div>
  );
}

const label =
  "text-[11px] font-black uppercase tracking-[0.24em] text-[#3B8E92]";

const title =
  "whitespace-nowrap text-[clamp(1.1rem,2.8vw,2.05rem)] font-black leading-[1.08] tracking-[-0.04em] text-[#263F46]";

const titleLight =
  "whitespace-nowrap text-[clamp(1.1rem,2.8vw,2.05rem)] font-black leading-[1.08] tracking-[-0.04em] text-white";

const heroTitle =
  "whitespace-nowrap text-[clamp(1.85rem,4.1vw,3.65rem)] font-black leading-[1.04] tracking-[-0.06em] text-[#263F46]";

const cardTitle =
  "whitespace-nowrap text-[clamp(1.25rem,2.1vw,1.75rem)] font-black tracking-[-0.04em]";

const proofItems = [
  "식약처 지정 제18호",
  "KOLAS 제364호",
  "연세대학교 교원창업기업",
  "이태규 교수 연구실 창업",
];

const customerPaths = [
  {
    title: "출시 전 성적서",
    desc: "출고일이 정해졌다면 희망 납기부터 확인하세요",
  },
  {
    title: "자가품질 위탁검사",
    desc: "처음 의뢰해도 계약과 준비서류를 안내합니다",
  },
  {
    title: "수입화장품 검사",
    desc: "통관과 제출 목적에 맞춰 필요한 항목을 확인합니다",
  },
  {
    title: "기능성화장품",
    desc: "미백 주름개선 자외선차단 관련 항목을 상담합니다",
  },
  {
    title: "원료 부자재 분석",
    desc: "원료 납품과 제품개발 목적의 분석을 상담합니다",
  },
  {
    title: "광고 검증 분석",
    desc: "무첨가 표시와 성분 검증 목적의 분석을 안내합니다",
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
    icon: <Banknote className="h-6 w-6" />,
    title: "대표 수수료 공개",
    desc: "문의 전 주요 항목의 비용 범위를 먼저 확인할 수 있습니다",
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
  "품질검사 위탁계약: 사업자등록증 사본, 대표자 도장",
  "시험의뢰서: 시료명, 용량, 제조일자, 제조번호, 시험항목",
  "수입화장품: 표준통관예정보고서 EDI",
  "기능성화장품: 제품 기준 및 시험방법 등 필요 시",
  "최초 의뢰: 사업자등록증 사본",
];

const process = [
  ["01", "납기 확인", "제품명, 제형, 제출처, 희망 납기를 먼저 알려주세요"],
  [
    "02",
    "항목 안내",
    "자가품질, 납품, 수입, 기능성 여부에 따라 필요한 항목을 안내합니다",
  ],
  [
    "03",
    "시료 접수",
    "우편 또는 방문 접수 후 수수료 납입 시점부터 분석을 진행합니다",
  ],
  ["04", "성적서 발급", "시험 완료 후 시험성적서 원본을 우편으로 전달합니다"],
];

const trustItems = [
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "식약처 지정기관",
    desc: "제18호 지정기관으로 자가품질 위탁검사 상담이 가능합니다",
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "KOLAS 공인기관",
    desc: "KOLAS 제364호 국제공인시험기관으로 분석 서비스를 제공합니다",
  },
  {
    icon: <Microscope className="h-6 w-6" />,
    title: "연세대학교 교원창업기업",
    desc: "연세대학교 화공생명공학과 이태규 교수 연구실에서 출발한 분석 전문 기업입니다",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "대표이사 엄유진 박사",
    desc: "전문 연구 인력을 중심으로 처음 의뢰도 차근차근 안내합니다",
  },
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

export default function App() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#F7FAF9] text-[#263F46] antialiased">
      <header className="sticky top-0 z-50 border-b border-[#D9E6E8] bg-[#FBFDFC]/92 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4">
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#3F7F83] text-white">
              <FlaskConical className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <p className="whitespace-nowrap text-[13px] font-black tracking-[-0.02em] text-[#263F46] sm:text-base">
                (주)와이에스환경기술연구원
              </p>
              <p className="truncate text-xs font-bold text-[#6B8288]">
                YS Institute of Environmental Technology
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-bold text-[#5B7278] xl:flex">
            <a href="#paths" className="hover:text-[#2F6F73]">
              의뢰상황
            </a>
            <a href="#services" className="hover:text-[#2F6F73]">
              검사항목
            </a>
            <a href="#fees" className="hover:text-[#2F6F73]">
              수수료
            </a>
            <a href="#documents" className="hover:text-[#2F6F73]">
              준비서류
            </a>
            <a href="#contact" className="hover:text-[#2F6F73]">
              문의
            </a>
          </nav>

          <LinkButton href="#contact" className="h-10 shrink-0 px-5">
            납기 확인
          </LinkButton>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden bg-[#EEF6F4]">
        <div className="absolute inset-0">
          <div className="absolute -left-36 top-32 h-[30rem] w-[30rem] rounded-full bg-[#DDEFE9] blur-3xl" />
          <div className="absolute -right-32 -top-36 h-[38rem] w-[38rem] rounded-full bg-[#D9EAF0] blur-3xl" />
          <div className="absolute bottom-[-14rem] left-[36%] h-[28rem] w-[28rem] rounded-full bg-[#FAF6EB] blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1.02fr_0.98fr] lg:items-start lg:py-24">
          <div className="min-w-0 pt-2">
            <p className="mb-4 text-[clamp(0.95rem,2vw,1.2rem)] font-black tracking-[0.03em] text-[#3B8E92]">
              화장품 품질검사 위탁 서비스
            </p>

            <h1 className={heroTitle}>출시·납품 성적서 먼저 확인</h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#4E666D]">
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
                  className="flex items-center gap-3 rounded-2xl border border-[#D9E6E8] bg-white/72 px-4 py-3 text-sm font-black text-[#263F46] shadow-sm"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#3B8E92]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <Card className="border-0 bg-white/88 p-3 shadow-[0_28px_72px_rgba(37,78,88,0.11)]">
            <div className="rounded-[22px] bg-[#3F7F83] p-7 text-white">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[#D7F0EF]">
                Fast Check
              </p>
              <h2 className={cardTitle}>시험기관 비교 중이신가요</h2>
              <p className="mt-3 leading-7 text-[#EEF8F8]">
                납기와 수수료를 먼저 확인해보세요
              </p>
            </div>

            <div className="grid gap-3 p-5">
              <div className="rounded-2xl border border-[#DDE9EB] bg-[#F7FAF9] p-4">
                <p className="text-sm font-bold text-[#6B8288]">일반 의뢰</p>
                <p className="mt-1 text-2xl font-black tracking-[-0.04em] text-[#263F46]">
                  7일 소요일
                </p>
              </div>
              <div className="rounded-2xl border border-[#DDE9EB] bg-[#F7FAF9] p-4">
                <p className="text-sm font-bold text-[#6B8288]">긴급 의뢰</p>
                <p className="mt-1 text-2xl font-black tracking-[-0.04em] text-[#263F46]">
                  3일 상담 가능
                </p>
              </div>
              <div className="rounded-2xl border border-[#DDE9EB] bg-[#F7FAF9] p-4">
                <p className="text-sm font-bold text-[#6B8288]">대표 전화</p>
                <p className="mt-1 text-2xl font-black tracking-[-0.04em] text-[#263F46]">
                  02-312-0540
                </p>
              </div>
            </div>

            <div className="grid gap-3 px-5 pb-5 sm:grid-cols-2">
              <a
                href="tel:02-312-0540"
                className="flex items-center justify-center gap-2 rounded-2xl bg-[#2F6F73] px-4 py-4 text-center font-black text-white transition hover:bg-[#285E62]"
              >
                <Phone className="h-5 w-5" /> 전화 상담
              </a>
              <a
                href="mailto:testing@ysiet.com"
                className="flex items-center justify-center gap-2 rounded-2xl border border-[#D9E6E8] bg-white px-4 py-4 text-center font-black text-[#254E58] transition hover:border-[#8AB7BC]"
              >
                <Mail className="h-5 w-5" /> 이메일 견적
              </a>
            </div>
          </Card>
        </div>
      </section>

      <section className="border-y border-[#D9E6E8] bg-[#FBFDFC]">
        <div className="mx-auto grid max-w-7xl divide-y divide-[#D9E6E8] px-5 md:grid-cols-4 md:divide-x md:divide-y-0">
          {[
            [ShieldCheck, "식약처 지정 제18호"],
            [Award, "KOLAS 제364호"],
            [CalendarClock, "이태규 교수 연구실 창업"],
            [Banknote, "대표 수수료 공개"],
          ].map(([Icon, text]) => (
            <div key={text} className="flex items-center gap-3 py-5 md:px-5">
              <Icon className="h-5 w-5 shrink-0 text-[#3B8E92]" />
              <p className="font-black text-[#263F46]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="paths"
        className="mx-auto max-w-7xl overflow-hidden px-5 py-20 lg:py-24"
      >
        <div className="mb-12">
          <p className={label}>Start Here</p>
          <h2 className={title}>어떤 상황이신가요</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {customerPaths.map((item) => (
            <a key={item.title} href="#contact" className="group">
              <Card className="h-full transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_26px_75px_rgba(37,78,88,0.1)]">
                <div className="p-7">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E6F4F2] text-[#3B8E92]">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                  <h3 className="whitespace-nowrap text-xl font-black tracking-[-0.03em] text-[#263F46]">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-7 text-[#5B7278]">{item.desc}</p>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </section>

      <section className="overflow-hidden bg-[#3F7F83] py-20 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-12">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#D7F0EF]">
              Key Points
            </p>
            <h2 className={titleLight}>의뢰 전 확인할 4가지</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {keyStrengths.map((item) => (
              <div
                key={item.title}
                className="rounded-[24px] border border-white/18 bg-white/[0.10] p-7"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#3F7F83]">
                  {item.icon}
                </div>
                <h3 className="whitespace-nowrap text-xl font-black tracking-[-0.03em]">
                  {item.title}
                </h3>
                <p className="mt-4 leading-7 text-[#EEF8F8]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="services"
        className="mx-auto max-w-7xl overflow-hidden px-5 py-20 lg:py-24"
      >
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className={label}>Testing Services</p>
            <h2 className={title}>검사 서비스 한눈에</h2>
          </div>
          <p className="text-lg leading-8 text-[#5B7278]">
            일반 화장품, 기능성 화장품, 원료 부자재, R&D 지원까지 제품 유형과 제출 목적에
            따라 상담 후 확정됩니다
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service}
              className="rounded-[22px] border border-[#D9E6E8] bg-white p-6 transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(37,78,88,0.08)]"
            >
              <CheckCircle2 className="mb-5 h-6 w-6 text-[#3B8E92]" />
              <p className="text-lg font-black leading-7 tracking-[-0.025em] text-[#263F46]">
                {service}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="fees" className="overflow-hidden bg-[#FBFDFC] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className={label}>Fee Guide</p>
              <h2 className={title}>대표 수수료 확인</h2>
            </div>
            <p className="text-lg leading-8 text-[#5B7278]">
              실제 견적은 시험항목, 제품유형, 긴급 여부에 따라 상담 후 안내받으실 수
              있습니다
            </p>
          </div>

          <div className="hidden overflow-hidden rounded-[24px] border border-[#D9E6E8] bg-white md:block">
            <div className="grid grid-cols-[1.2fr_0.8fr_0.8fr] bg-[#EEF6F4] px-5 py-4 text-sm font-black text-[#263F46]">
              <div>대표 시험항목</div>
              <div>수수료</div>
              <div>비고</div>
            </div>
            {feeRows.map(([name, price, note]) => (
              <div
                key={name}
                className="grid grid-cols-[1.2fr_0.8fr_0.8fr] border-t border-[#D9E6E8] px-5 py-4"
              >
                <div className="font-bold text-[#4E666D]">{name}</div>
                <div className="font-black text-[#3B8E92]">{price}</div>
                <div className="font-bold text-[#6B8288]">{note}</div>
              </div>
            ))}
          </div>

          <div className="grid gap-3 md:hidden">
            {feeRows.map(([name, price, note]) => (
              <Card key={name}>
                <div className="p-5">
                  <p className="font-black text-[#263F46]">{name}</p>
                  <p className="mt-2 text-2xl font-black text-[#3B8E92]">
                    {price}
                  </p>
                  <p className="mt-1 text-sm font-bold text-[#6B8288]">{note}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-6 rounded-[24px] bg-[#3F7F83] p-6 text-white md:flex md:items-center md:justify-between">
            <div>
              <p className="text-[clamp(1rem,2.6vw,1.25rem)] font-black">
                견적 전 비용 범위를 먼저 확인하세요
              </p>
              <p className="mt-2 text-[#EEF8F8]">
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
            <p className={label}>Self Quality Testing</p>
            <h2 className={title}>자가품질 위탁검사 안내</h2>
            <p className="mt-6 text-lg leading-8 text-[#5B7278]">
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
                  <p className="text-xs font-black uppercase tracking-[0.24em] text-[#3B8E92]">
                    Check
                  </p>
                  <h3 className="mt-2 text-2xl font-black tracking-[-0.035em] text-[#263F46]">
                    {name}
                  </h3>
                  <p className="mt-3 leading-7 text-[#5B7278]">{desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        id="documents"
        className="overflow-hidden bg-[#EEF6F4] py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className={label}>Before Request</p>
            <h2 className={title}>문의 전 준비서류</h2>
            <p className="mt-6 text-lg leading-8 text-[#5B7278]">
              준비서류와 제품 정보를 미리 알려주시면 상담과 접수가 훨씬 빨라집니다
            </p>
          </div>

          <div className="space-y-3">
            {documents.map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-[20px] border border-[#D9E6E8] bg-white/82 p-5 shadow-sm"
              >
                <ClipboardCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#3B8E92]" />
                <p className="font-bold text-[#4E666D]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="overflow-hidden bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-12">
            <p className={label}>Process</p>
            <h2 className={title}>성적서 발급 4단계</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-4">
            {process.map(([step, name, desc]) => (
              <Card key={step}>
                <div className="p-7">
                  <p className="text-5xl font-black tracking-[-0.05em] text-[#C8E3E4]">
                    {step}
                  </p>
                  <h3 className="mt-4 text-xl font-black tracking-[-0.03em] text-[#263F46]">
                    {name}
                  </h3>
                  <p className="mt-3 leading-7 text-[#5B7278]">{desc}</p>
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
        <div className="mb-12">
          <p className={label}>Trust Proof</p>
          <h2 className={title}>신뢰근거 확인</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => (
            <Card key={item.title}>
              <div className="p-7">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E6F4F2] text-[#3B8E92]">
                  {item.icon}
                </div>
                <h3 className="text-xl font-black tracking-[-0.03em] text-[#263F46]">
                  {item.title}
                </h3>
                <p className="mt-4 leading-7 text-[#5B7278]">{item.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-7xl overflow-hidden px-5 py-20 lg:py-24"
      >
        <div className="overflow-hidden rounded-[32px] bg-[#3F7F83] p-8 text-white shadow-[0_32px_90px_rgba(47,111,115,0.18)] md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.86fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[#D7F0EF]">
                Request Quote
              </p>
              <h2 className="whitespace-nowrap text-[clamp(1.2rem,3.4vw,2.8rem)] font-black leading-[1.08] tracking-[-0.05em]">
                성적서 납기를 먼저 알려주세요
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#EEF8F8]">
                제품명, 제형, 필요한 성적서 용도, 희망 납기를 알려주시면 우선 검토 후
                안내드립니다
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="tel:02-312-0540"
                  className="inline-flex h-14 items-center justify-center rounded-full bg-white px-8 font-black text-[#254E58]"
                >
                  <Phone className="mr-2 h-5 w-5" /> 02-312-0540
                </a>
                <a
                  href="mailto:testing@ysiet.com"
                  className="inline-flex h-14 items-center justify-center rounded-full border border-white/25 bg-white/12 px-8 font-black text-white"
                >
                  <Mail className="mr-2 h-5 w-5" /> testing@ysiet.com
                </a>
              </div>
            </div>

            <div className="rounded-[26px] bg-white p-6 text-[#263F46]">
              <p className="text-sm font-black text-[#3B8E92]">
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
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#3B8E92]" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="mailto:testing@ysiet.com"
                className="mt-6 flex h-14 items-center justify-center rounded-2xl bg-[#2F6F73] font-black text-white"
              >
                빠른 견적 요청하기
              </a>
              <div className="mt-5 flex gap-3 rounded-2xl bg-[#F3F8F7] p-4 text-sm font-bold leading-6 text-[#4E666D]">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#3B8E92]" />
                서울시 종로구 인사동5길 42 종로빌딩 10층
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="overflow-hidden bg-[#EEF6F4] py-20 lg:py-24">
        <div className="mx-auto max-w-5xl px-5">
          <div className="mb-10 text-center">
            <p className={label}>FAQ</p>
            <h2 className={title}>자주 묻는 질문</h2>
          </div>

          <div className="space-y-4">
            {faqs.map(([q, a]) => (
              <details
                key={q}
                className="group rounded-[22px] border border-[#D9E6E8] bg-white p-6 shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black text-[#263F46]">
                  <span className="flex items-center gap-3">
                    <HelpCircle className="h-5 w-5 shrink-0 text-[#3B8E92]" />
                    {q}
                  </span>
                  <span className="text-[#3B8E92] transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 leading-8 text-[#5B7278]">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className="overflow-hidden bg-[#2D5056] px-5 py-12 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_1fr] md:items-center">
          <div>
            <p className="text-2xl font-black tracking-[-0.03em]">
              와이에스환경기술연구원
            </p>
            <p className="mt-3 max-w-xl leading-7 text-[#DDEDEE]">
              대표이사 엄유진 박사
            </p>
            <p className="mt-2 max-w-xl leading-7 text-[#DDEDEE]">
              식약처 지정 화장품 시험검사기관 제18호 · KOLAS 국제공인시험기관 제364호
            </p>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <p className="font-bold text-[#DDEDEE]">대표 전화: 02-312-0540</p>
            <p className="font-bold text-[#DDEDEE]">이메일: testing@ysiet.com</p>
            <p className="font-bold text-[#DDEDEE]">팩스: 02-312-0560</p>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-white/15 pt-6 text-sm text-[#C4D8DB]">
          © YS Institute of Environmental Technology. All rights reserved.
        </div>
      </footer>

      <div className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-3xl -translate-x-1/2 rounded-full bg-[#2D5056] p-2 shadow-2xl md:hidden">
        <div className="grid grid-cols-2 gap-2">
          <a
            href="tel:02-312-0540"
            className="rounded-full bg-white px-4 py-3 text-center text-sm font-black text-[#254E58]"
          >
            전화 상담
          </a>
          <a
            href="mailto:testing@ysiet.com"
            className="rounded-full bg-[#3B8E92] px-4 py-3 text-center text-sm font-black text-white"
          >
            이메일 견적
          </a>
        </div>
      </div>
    </main>
  );
}
