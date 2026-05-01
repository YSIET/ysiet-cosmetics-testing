# YSIET Cosmetics Landing Page

와이에스환경기술연구원 화장품 시험·검사 단독 랜딩페이지입니다.

## 핵심 메시지

- 식약처 지정 화장품 시험·검사기관 제18호
- KOLAS 국제공인시험기관 제364호
- 일반 의뢰 7일 · 긴급 의뢰 3일 가능 여부 상담
- 대표 수수료 공개
- 1건 의뢰도 전문 카운셀링 지원

## 로컬 실행

```bash
npm install
npm run dev
```

## 배포 빌드

```bash
npm run build
```

## Vercel 설정

- Framework Preset: Vite
- Build Command: npm run build
- Output Directory: dist
- Install Command: npm install

## 수정이 자주 필요한 위치

- 전화번호: `src/App.jsx` 안의 `02-312-0540`
- 이메일: `src/App.jsx` 안의 `testing@ysiet.com`
- 주소: `src/App.jsx` 안의 `서울시 종로구 인사동5길 42 종로빌딩 10층`
- 수수료: `src/App.jsx` 안의 `feeHighlights`
- 검사 서비스: `src/App.jsx` 안의 `services`

## 주의

수수료, 납기, 지정기관·인정기관 문구는 실제 운영 정책과 최신 기관 자료에 맞게 최종 확인 후 공개하세요.
