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
