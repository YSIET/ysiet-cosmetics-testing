import React from "react";
import { motion } from "framer-motion";
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
  Microscope,
  Phone,
  ShieldCheck,
  TimerReset,
  Users,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const proofBadges = [
  "식약처 지정 화장품 시험·검사기관 제18호",
  "KOLAS 국제공인시험기관 제364호",
  "일반 의뢰 7일 · 긴급 의뢰 3일 가능 여부 상담",
  "1건 의뢰도 전문 카운셀링 지원",
];

const urgentReasons = [
  "출시·출고 일정은 정해졌는데 시험성적서가 아직 없나요?",
  "자가품질 위탁검사 항목과 준비서류가 헷갈리시나요?",
  "대형기관은 견적·상담·진행 확인이 느리다고 느끼셨나요?",
  "브랜드사·제조사·유통사 제출용 성적서가 급하게 필요하신가요?",
];

const comparisonRows = [
  ["기관 설명을 먼저 읽어야 함", "성적서 납기부터 바로 확인"],
  ["메뉴가 많고 동선이 복잡함", "견적 요청까지 한 화면에서 이동"],
  ["가격 감이 늦게 잡힘", "대표 수수료를 먼저 공개"],
  ["처음 의뢰자는 준비서류가 막막함", "자가품질 위탁검사 준비서류를 바로 안내"],
  ["대형기관 신뢰도는 있으나 상담 체감이 느릴 수 있음", "1건 의뢰도 전문 카운셀링 강조"],
];

const decidingFactors = [
  {
    icon: TimerReset,
    title: "납기",
    punch: "일반 7일 · 긴급 3일",
    desc: "고객이 가장 먼저 알고 싶은 것은 ‘언제 받을 수 있나’입니다. 가능 여부를 먼저 상담합니다.",
  },
  {
    icon: ShieldCheck,
    title: "공식성",
    punch: "식약처 지정 제18호",
    desc: "화장품 시험·검사기관 지정 근거를 첫 화면에서 바로 보여줍니다.",
  },
  {
    icon: Award,
    title: "공신력",
    punch: "KOLAS 제364호",
    desc: "국제공인시험기관이라는 신뢰근거를 숨기지 않고 전면에 배치합니다.",
  },
  {
    icon: Banknote,
    title: "가격 감각",
    punch: "대표 수수료 공개",
    desc: "문의 전 고객이 비용 감을 잡을 수 있게 핵심 수수료를 먼저 보여줍니다.",
  },
];

const services = [
  "화장품 자가품질 위탁검사",
  "유통화장품 안전관리 항목 분석",
  "기능성화장품 품질관리",
  "무첨가(Free) 광고 검증 성분분석",
  "중금속·유해물질 성분 분석",
  "화장품 원료·부자재 분석",
  "신제품 공동 개발 및 R&D 지원",
  "시험방법 유효성 확인 및 보고서",
];

const feeHighlights = [
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
  {
    step: "01",
    title: "납기 먼저 확인",
    desc: "제품명, 제형, 제출처, 희망 납기를 먼저 알려주세요. 가능한 진행 일정을 우선 검토합니다.",
  },
  {
    step: "02",
    title: "시험항목·서류 안내",
    desc: "자가품질, 납품, 수입, 기능성 여부에 따라 필요한 시험항목과 준비서류를 안내합니다.",
  },
  {
    step: "03",
    title: "시료 접수·분석 진행",
    desc: "우편 또는 방문으로 시료를 접수하고, 수수료 납입 시점부터 분석이 진행됩니다.",
  },
  {
    step: "04",
    title: "시험성적서 발급",
    desc: "시험 완료 후 성적서 원본을 우편으로 전달합니다.",
  },
];

const faqs = [
  {
    q: "다른 시험기관 대신 YSIET에 문의해야 하는 이유가 뭔가요?",
    a: "YSIET는 식약처 지정 화장품 시험·검사기관 제18호이자 KOLAS 국제공인시험기관 제364호입니다. 여기에 일반 7일·긴급 3일 가능 여부 상담, 대표 수수료 공개, 1건 의뢰 상담까지 고객이 바로 결정할 수 있는 정보를 앞에 둡니다.",
  },
  {
    q: "성적서 발급까지 얼마나 걸리나요?",
    a: "일반 의뢰 소요일은 7일, 긴급 의뢰 소요일은 3일입니다. 단, 긴급 의뢰 가능 여부는 연구원의 시험 일정과 의뢰 항목에 따라 달라질 수 있습니다.",
  },
  {
    q: "자가품질 위탁검사 항목을 몰라도 문의해도 되나요?",
    a: "네. 제품 유형, 제형, 제출처, 희망 납기를 알려주시면 먼저 확인해야 할 항목과 준비사항을 안내드립니다.",
  },
  {
    q: "처음 의뢰하거나 1건만 의뢰해도 되나요?",
    a: "가능합니다. 1건의 분석 요청에도 전문적인 카운셀링을 지원하며, 처음 의뢰하시는 고객도 절차와 준비서류를 안내받을 수 있습니다.",
  },
];

export default function YSIETCosmeticsLanding() {
  return (
    <main className="min-h-screen bg-[#fff8f4] text-slate-950">
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#top" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-sm">
              <FlaskConical className="h-5 w-5" />
            </div>
            <div>
              <p className="text-base font-black tracking-tight">YSIET</p>
              <p className="text-xs font-bold text-slate-500">화장품 시험·검사 성적서 상담</p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-bold text-slate-600 xl:flex">
            <a href="#compare" className="hover:text-slate-950">기관 비교</a>
            <a href="#services" className="hover:text-slate-950">검사항목</a>
            <a href="#fees" className="hover:text-slate-950">수수료</a>
            <a href="#documents" className="hover:text-slate-950">준비서류</a>
            <a href="#process" className="hover:text-slate-950">절차</a>
          </nav>

          <a href="#contact">
            <Button className="rounded-full bg-rose-600 px-5 font-black text-white hover:bg-rose-700">
              납기 확인
            </Button>
          </a>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute -left-20 top-10 h-96 w-96 rounded-full bg-rose-500 blur-3xl" />
          <div className="absolute right-0 top-0 h-[28rem] w-[28rem] rounded-full bg-orange-400 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1.07fr_0.93fr] lg:items-center lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-black text-rose-100 shadow-sm backdrop-blur">
              <Zap className="h-4 w-4" />
              다른 시험기관을 살펴보다 오셨다면, 먼저 성적서 납기부터 확인하세요
            </div>

            <h1 className="max-w-5xl text-5xl font-black leading-[1.02] tracking-tight md:text-7xl">
              화장품 성적서,
              <span className="block text-rose-300">크게 기다리지 말고</span>
              먼저 일정 잡으세요.
            </h1>

            <p className="mt-7 max-w-2xl text-xl leading-9 text-slate-200">
              식약처 지정 제18호와 KOLAS 제364호의 신뢰성. 일반 7일·긴급 3일 가능 여부 상담.
              자가품질 위탁검사부터 시험성적서 발급까지 바로 안내합니다.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {proofBadges.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-3 text-sm font-black text-white ring-1 ring-white/15"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-rose-300" />
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#contact">
                <Button
                  size="lg"
                  className="h-14 rounded-full bg-rose-500 px-8 text-base font-black text-white hover:bg-rose-400"
                >
                  지금 성적서 납기 확인 <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="#compare">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 rounded-full border-white/30 bg-white/10 px-8 text-base font-black text-white hover:bg-white/20 hover:text-white"
                >
                  왜 YSIET인가
                </Button>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <Card className="rounded-[2rem] border-0 bg-white text-slate-950 shadow-2xl shadow-rose-900/40">
              <CardContent className="p-7 md:p-9">
                <div className="mb-7 rounded-3xl bg-gradient-to-br from-rose-600 to-orange-500 p-6 text-white">
                  <p className="text-sm font-black text-rose-100">FAST DECISION</p>
                  <h2 className="mt-2 text-3xl font-black">KC* 등 시험기관을 살펴보다 오셨나요?</h2>
                  <p className="mt-3 leading-7 text-rose-50">
                    그럼 아래 4가지만 먼저 확인하세요. 납기, 지정기관, KOLAS, 수수료.
                  </p>
                </div>

                <div className="space-y-3">
                  {urgentReasons.map((item) => (
                    <div
                      key={item}
                      className="flex gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4"
                    >
                      <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-rose-600" />
                      <p className="font-bold text-slate-800">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  <a
                    href="tel:02-312-0540"
                    className="flex items-center justify-center gap-2 rounded-2xl bg-rose-600 px-4 py-4 text-center font-black text-white transition hover:bg-rose-700"
                  >
                    <Phone className="h-5 w-5" /> 02-312-0540
                  </a>
                  <a
                    href="mailto:testing@ysiet.com"
                    className="flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-4 py-4 text-center font-black text-white transition hover:bg-slate-800"
                  >
                    <Mail className="h-5 w-5" /> 이메일 견적
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-6">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 md:grid-cols-4">
          {[
            [ShieldCheck, "식약처 지정 제18호"],
            [Award, "KOLAS 제364호"],
            [CalendarClock, "일반 7일 · 긴급 3일"],
            [Banknote, "대표 수수료 공개"],
          ].map(([Icon, text]) => (
            <div key={text} className="flex items-center gap-3 rounded-2xl bg-[#fff8f4] px-5 py-4">
              <Icon className="h-5 w-5 text-rose-600" />
              <p className="font-black">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="compare" className="mx-auto max-w-7xl px-5 py-24">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-rose-600">
              Institution Comparison
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-6xl">
              다른 시험기관을 살펴보다가도 YSIET에 문의하게 되는 이유.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              고객은 긴 기관 소개보다 “내 성적서가 언제 나오고, 얼마쯤 들고, 무엇을 준비해야 하는지”를 먼저 알고 싶어 합니다.
              그래서 YSIET는 결정에 필요한 정보를 앞에 둡니다.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex rounded-full bg-slate-950 px-7 py-4 font-black text-white transition hover:bg-slate-800"
            >
              기관 선택 전 납기 확인하기
            </a>
          </div>

          <div className="overflow-hidden rounded-[2rem] bg-white shadow-xl ring-1 ring-slate-200">
            <div className="grid grid-cols-2 bg-slate-950 text-white">
              <div className="p-5 text-sm font-black text-slate-300">
                대형기관식 페이지에서 고객이 느끼는 점
              </div>
              <div className="bg-rose-600 p-5 text-sm font-black">
                YSIET 랜딩페이지가 바로 답하는 것
              </div>
            </div>

            {comparisonRows.map(([before, after]) => (
              <div key={before} className="grid grid-cols-2 border-t border-slate-100">
                <div className="p-5 font-bold text-slate-500 line-through decoration-rose-400/70">
                  {before}
                </div>
                <div className="p-5 font-black text-slate-950">{after}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-24 text-white">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-rose-300">
              Decision Factors
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-6xl">
              고객의 결정 버튼은 이 4개에서 눌립니다.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {decidingFactors.map((item) => (
              <Card key={item.title} className="rounded-3xl border-white/10 bg-white/10 text-white shadow-xl">
                <CardContent className="p-7">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-500 text-white">
                    <item.icon className="h-7 w-7" />
                  </div>
                  <p className="text-sm font-black text-rose-200">{item.title}</p>
                  <h3 className="mt-2 text-2xl font-black">{item.punch}</h3>
                  <p className="mt-4 leading-7 text-slate-300">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-24">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-rose-600">
              Testing Services
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              검사 가능한 서비스를 한눈에.
            </h2>
          </div>
          <p className="text-lg leading-8 text-slate-700">
            일반 화장품, 기능성 화장품, 원료·부자재, R&D 지원까지.
            정확한 가능 여부와 세부 항목은 제품 유형과 제출 목적에 따라 상담 후 확정됩니다.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service}
              className="flex items-start gap-4 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-rose-50 text-rose-600">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <p className="text-lg font-black">{service}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="fees" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-rose-600">
                Fee Guide
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
                가격 감을 먼저 잡게 해드립니다.
              </h2>
            </div>
            <p className="text-lg leading-8 text-slate-700">
              고객이 문의를 미루는 가장 큰 이유 중 하나는 비용 불확실성입니다.
              대표 수수료를 먼저 보여주고, 실제 견적은 시험항목·제품유형·긴급 여부에 따라 상담 후 안내합니다.
              모든 금액은 VAT 별도입니다.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {feeHighlights.map(([item, price]) => (
              <div key={item} className="rounded-3xl bg-[#fff8f4] p-6 ring-1 ring-slate-200">
                <p className="text-lg font-black text-slate-900">{item}</p>
                <p className="mt-3 text-3xl font-black text-rose-600">{price}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-3xl bg-slate-950 p-6 text-white md:flex md:items-center md:justify-between">
            <div>
              <p className="text-xl font-black">견적을 기다리기 전에, 먼저 범위를 확인하세요.</p>
              <p className="mt-2 text-slate-300">
                제품명과 필요 항목을 보내주시면 실제 견적 기준으로 안내드립니다.
              </p>
            </div>
            <a href="#contact" className="mt-5 inline-flex rounded-full bg-rose-600 px-6 py-3 font-black text-white md:mt-0">
              견적 요청하기
            </a>
          </div>
        </div>
      </section>

      <section id="self-quality" className="mx-auto max-w-7xl px-5 py-24">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-rose-600">
              Self Quality Testing
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              자가품질 위탁검사, 처음이어도 바로 시작할 수 있게.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              화장품 제조업자·책임판매업자는 품질검사 시설이 없는 경우 식약처 지정 시험·검사기관과
              품질검사 위탁계약을 체결하여 품질관리를 진행할 수 있습니다.
              YSIET는 계약, 시험의뢰, 시료 접수, 성적서 발급까지 한 번에 안내합니다.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["위탁계약", "최초 의뢰 또는 변경사항 발생 시 체결"],
              ["계약비용", "무료, 우편비용 발생 시 실비 청구"],
              ["분석 시작", "수수료 납입 시점부터 진행"],
              ["성적서", "시험 완료 후 원본 우편 전달"],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <p className="text-sm font-black text-rose-600">CHECK</p>
                <h3 className="mt-2 text-2xl font-black">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="documents" className="bg-slate-950 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-rose-300">
              Before Request
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              문의 전 준비하면 견적이 빨라집니다.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              준비서류와 제품 정보를 미리 알려주시면 상담과 접수가 훨씬 빨라집니다.
            </p>
          </div>

          <div className="space-y-3">
            {documents.map((item) => (
              <div key={item} className="flex gap-3 rounded-3xl bg-white/10 p-5 ring-1 ring-white/10">
                <ClipboardCheck className="mt-0.5 h-5 w-5 shrink-0 text-rose-300" />
                <p className="font-bold text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="trust" className="py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-rose-600">
              Trust Proof
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              신뢰근거는 숨기지 않고, 반복해서 설득합니다.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              고객이 기관을 비교할 때 보는 것은 단순한 규모가 아니라 지정 여부, 공인 여부, 납기, 상담 대응입니다.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              [
                ShieldCheck,
                "MFDS",
                "식약처 지정 화장품 시험·검사기관",
                "제18호 지정기관으로 화장품 시험·검사와 자가품질 위탁검사 상담이 가능합니다.",
              ],
              [
                Award,
                "KOLAS",
                "국제공인시험기관",
                "KOLAS 제364호 국제공인시험기관으로 분석 결과의 신뢰성을 강조할 수 있습니다.",
              ],
              [
                Microscope,
                "EXPERT",
                "석·박사 분석/연구 전담 인력",
                "숙련된 연구진과 분석 장비를 기반으로 신속·정확·정밀한 분석 결과를 제공합니다.",
              ],
              [
                Users,
                "COUNSELING",
                "1건 의뢰도 전문 카운셀링",
                "화장품 분석뿐 아니라 제품개발, 관련법령 준수, 준비서류까지 상담합니다.",
              ],
            ].map(([Icon, eyebrow, title, desc]) => (
              <Card key={title} className="rounded-3xl border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <CardContent className="p-7">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white">
                    <Icon className="h-7 w-7" />
                  </div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-rose-600">{eyebrow}</p>
                  <h3 className="mt-2 text-xl font-black">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-rose-600">
              Process
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              복잡한 설명 없이, 성적서까지 4단계.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              고객이 중간에 헤매지 않도록 필요한 정보만 빠르게 확인하고 진행합니다.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-4">
            {process.map((item) => (
              <Card key={item.step} className="rounded-3xl border-slate-200 shadow-sm">
                <CardContent className="p-7">
                  <p className="text-5xl font-black text-rose-100">{item.step}</p>
                  <h3 className="mt-4 text-xl font-black">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 py-24">
        <div className="overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-rose-600 to-orange-500 p-8 text-white shadow-2xl shadow-rose-200 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-rose-100">
                Request Quote
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-6xl">
                기관 비교는 충분합니다. 이제 YSIET에 납기부터 확인하세요.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-rose-50">
                일반 7일 · 긴급 3일 가능 여부 상담. 제품명, 제형, 필요한 성적서 용도, 희망 납기를 알려주시면
                우선 검토 후 안내드립니다.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="tel:02-312-0540"
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-white px-8 font-black text-slate-950 transition hover:bg-rose-50"
                >
                  <Phone className="h-5 w-5" /> 02-312-0540
                </a>
                <a
                  href="mailto:testing@ysiet.com"
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-slate-950 px-8 font-black text-white transition hover:bg-slate-800"
                >
                  <Mail className="h-5 w-5" /> testing@ysiet.com
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] bg-white p-6 text-slate-950 shadow-xl">
              <p className="text-sm font-black text-rose-600">견적 요청 시 알려주세요</p>
              <ul className="mt-4 space-y-3">
                {["제품명 / 제형", "희망 검사항목", "성적서 제출처", "희망 납기", "시료 준비 가능일"].map((item) => (
                  <li key={item} className="flex items-center gap-3 font-bold">
                    <CheckCircle2 className="h-5 w-5 text-rose-600" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="mailto:testing@ysiet.com">
                <Button className="mt-6 h-14 w-full rounded-2xl bg-slate-950 text-base font-black text-white hover:bg-slate-800">
                  빠른 견적 요청하기
                </Button>
              </a>
              <div className="mt-5 rounded-2xl bg-rose-50 p-4 text-sm font-bold leading-6 text-rose-800">
                주소: 서울시 종로구 인사동5길 42 종로빌딩 10층
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-[#fffaf7] py-24">
        <div className="mx-auto max-w-5xl px-5">
          <div className="mb-10 text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-rose-600">
              FAQ
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              망설이는 고객의 마지막 질문까지 답합니다.
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="group rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black">
                  <span className="flex items-center gap-3">
                    <HelpCircle className="h-5 w-5 text-rose-600" />
                    {faq.q}
                  </span>
                  <span className="text-rose-600 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 leading-8 text-slate-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 px-5 py-12 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_1fr] md:items-center">
          <div>
            <p className="text-2xl font-black">와이에스환경기술연구원</p>
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

      <div className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-3xl -translate-x-1/2 rounded-full bg-slate-950 p-2 shadow-2xl md:hidden">
        <div className="grid grid-cols-2 gap-2">
          <a
            href="tel:02-312-0540"
            className="rounded-full bg-white px-4 py-3 text-center text-sm font-black text-slate-950"
          >
            전화 상담
          </a>
          <a
            href="mailto:testing@ysiet.com"
            className="rounded-full bg-rose-600 px-4 py-3 text-center text-sm font-black text-white"
          >
            이메일 견적
          </a>
        </div>
      </div>
    </main>
  );
}
