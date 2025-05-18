## ♻️ PI-FE: 업사이클링/리사이클링 제품 검색 프론트엔드

안녕하세요! 👋
**PI-FE**는 업사이클링·리사이클링 제품을 손쉽게 검색할 수 있도록 도와주는 플랫폼의 **프론트엔드 레포지토리**입니다.
AI 이미지 분석을 통해 **재료를 인식하고**, 해당 재료로 만들어진 제품과 제작 업체를 손쉽게 검색할 수 있어요! 🔍

---

## 🔧 기술 스택

| 분야         | 기술                                |
| ---------- | --------------------------------- |
| 패키지 매니저    | pnpm                              |
| 언어         | TypeScript                        |
| 프레임워크      | React / React Native              |
| HTTP 클라이언트 | Axios                             |
| UI 컴포넌트    | shadcn/ui                         |
| 스타일링       | Tailwind CSS                      |
| 번들러        | Vite                              |

---

## 🧠 주요 기능

* 📸 **AI 이미지 검색 기능**
  사용자가 업로드한 이미지를 분석해 해당 재료(material)를 추출하고, 관련 제품(product)을 조회합니다.

* 🔍 **텍스트 기반 검색**
  제품명 또는 재료명으로도 간편하게 검색 가능!

* 🏷️ **카테고리 기반 필터링**
  `plastic`, `fabric`, `glass`, `wood`, `can` 등 5가지 카테고리 필터링 제공

* 🏭 **제조사(Company) 정보 제공**
  제품 상세 페이지에서 제작 업체의 정보도 함께 제공합니다.

---

## 🗂️ 프론트엔드 프로젝트 구조

```bash
pi-FE/
├── public/                 # 정적 파일 (favicon, robots.txt 등)
├── src/
│   ├── apis /             # axios instance, api 관리 등
│   ├── assets/             # 이미지, 아이콘, 폰트 등
│   ├── components/         # 재사용 가능한 UI 컴포넌트
│   ├── constants/         # api, 카테고리 등 상수 
│   ├── hooks/              # 커스텀 훅
│   ├── pages/              # 라우팅 페이지 또는 화면 단위 컴포넌트
│   ├── utils/              # 유틸 함수
│   └── global.css          # global.css (tailwind 세팅 등)
│   └── App.tsx             # 진입 컴포넌트
├── tsconfig.json           # TypeScript 설정
└── package.json
```

---

## 🚀 로컬 실행 방법

```bash
# 1. 레포지토리 클론
git clone https://github.com/pi-8th-NerdinaryHackathon/pi-FE.git
cd pi-FE

# 2. 패키지 설치
pnpm install

# 3. 환경 변수 설정
# 프로젝트 루트에 .env 파일 생성 후 API 엔드포인트 등 설정
# 예시:
# VITE_API_BASE_URL=https://api.example.com

# 4. 개발 서버 실행
pnpm run dev
```

---

## 📌 향후 계획

* ✅ AI 기반 이미지 검색 최적화
* ⏳ 즐겨찾기(Favorites) 기능
* ⏳ 사용자 리뷰 및 평점 기능
* ⏳ 관리자 대시보드(UI/UX 개선)

---

## 📄 라이선스

MIT © 2025 PI Team
Feel free to use, fork and improve! 🌱
