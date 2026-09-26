/**
 * © 2026 Palo Alto Networks, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const dictionaryMarketplace = {
  exact: {
    "Installed Content Packs": "설치된 콘텐츠 팩",
    "Show": "표시",
    "All Packs": "모든 팩",
    "Notifications active": "알림 활성",
    "Update to 1.1.6": "1.1.6으로 업데이트",
    "Content": "콘텐츠",
    "Dependencies": "종속성",
    "Version History": "버전 기록",
    "Show Deprecated Content": "사용 중단된 콘텐츠 표시",
    "INFO": "정보",
    "Last installed": "마지막 설치",
    "Installed version": "설치된 버전",
    "Certification": "인증",
    "Certified": "인증됨",
    "Supported by": "지원 제공",
    "Go to": "이동:",
    "Content Pack support site": "콘텐츠 팩 지원 사이트",
    "First Created": "최초 생성",
    "Last Release": "마지막 릴리스",
    "Free Enricher": "무료 보강 도구",
    "WORKS WITH THE FOLLOWING INTEGRATIONS:": "다음 통합과 연동됩니다:",
    "DISCLAIMER": "고지 사항",
    "Content packs are licensed by the Publisher identified above and subject to the Publisher’s own":
      "콘텐츠 팩은 위에 명시된 게시자가 라이선스를 제공하며 게시자 고유의",
    "licensing terms": "라이선스 조건",
    "Marketplace documentation": "마켓플레이스 문서",
    "Cart": "장바구니",
    "Your cart is empty": "장바구니가 비어 있습니다",
    "Go shopping": "쇼핑하기",
    "Categories": "범주",
    "Filter by:": "필터 기준:",
    "Search in": "검색 대상",
    "Sort by": "정렬 기준",
    "See all": "모두 보기",
    "See more": "더 보기",
    "Show installed": "설치된 항목 표시",
    "Content Pack includes": "콘텐츠 팩 포함 항목",
    "Content Packs": "콘텐츠 팩",
    "Getting Started": "시작하기",
    "Partner Spotlight": "파트너 스포트라이트",
    "Partners": "파트너",
    "Published By": "게시자",
    "Types": "유형",
    "Use Cases": "사용 사례",
    "Alerts": "경고",
    "Analytics & SIEM": "분석 및 SIEM",
    "Asset Management": "자산 관리",
    "Attack": "공격",
    "Breach": "침해",
    "Breach Notification": "침해 알림",
    "Classifiers": "분류자",
    "Code Repositories": "코드 리포지토리",
    "Collection": "수집",
    "Dark Web": "다크 웹",
    "Data Model Rules": "데이터 모델 규칙",
    "Identity And Access Management": "ID 및 액세스 관리",
    "Incident Response": "인시던트 대응",
    "Extracts text from images.": "이미지에서 텍스트를 추출합니다.",
    "Show Commands": "명령 표시",
    "The following packs have updates:": "다음 팩에 업데이트가 있습니다:",
  },

  patterns: [
    { re: /^Content Packs Library\s+(\(\d+\))$/, tpl: "콘텐츠 팩 라이브러리 $1" },
    { re: /^(\d+)\s+Scripts?$/, tpl: "스크립트 $1개" },
    { re: /^(\d+)\s+Integrations?$/, tpl: "통합 $1개" },
    { re: /^(\d+)\s+updates?\s+available$/, tpl: "사용 가능한 업데이트 $1개" },
  ],

  skip: [],
};
