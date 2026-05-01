import React from "react";
import {
  ArrowRight,
  Award,
  Banknote,
  CalendarClock,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
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

const KAKAO_URL = "https://pf.kakao.com/_xbUlsn";

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
    ghost: "bg-white/12 text-white border border-white/25 hover:bg-white/18",
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
        "rounded-[24px] border border-[#D9E6E8] bg-white shadow-[0_16px_42px_rgba(37,78,88,0.055)]",
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
          "mb-3 text-[10px] font-black uppercase tracking-[0.2em]",
          light ? "text-[#D7F0EF]" : "text-[#3B8E92]"
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cx(
          "whitespace-nowrap text-[clamp(1.1rem,2.8vw,2.05rem)] font-black leading-[1.08] tracking-[-0.04em]",
          light ? "text-white" : "text-[#263F46]"
        )}
      >
        {titleText}
      </h2>
      {description ? (
        <p
          className={cx(
            "mt-6 whitespace-nowrap text-[clamp(0.82rem,1.35vw,1.125rem)] leading-8",
            light ? "text-[#EEF8F8]" : "text-[#5B7278]"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

const heroTitle =
  "whitespace-nowrap text-[clamp(1.85rem,4.1vw,3.65rem)] font-black leading-[1.04] tracking-[-0.06em] text-[#263F46]";

const heroServiceTitle =
  "mb-5 whitespace-nowrap text-[clamp(1.3rem,2.8vw,2.15rem)] font-black leading-[1.08] tracking-[-0.04em] text-[#3B8E92]";

const cardTitle =
  "whitespace-nowrap text-[clamp(1.25rem,2.1vw,1.75rem)] font-black tracking-[-0.04em]";

const oneLineLight =
  "whitespace-nowrap text-[clamp(0.82rem,1.35vw,1.125rem)] leading-8 text-[#EEF8F8]";

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
    icon: <Mic
