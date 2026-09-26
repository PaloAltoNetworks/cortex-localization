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

const dictionaryAspmCommandCenter = {
  exact: {
    "ASPM Command Center": "ASPM 커맨드 센터",

    // --- Time-range filter ---
    "All time": "전체 기간",
    "30D": "30일",
    "7D": "7일",
    "90D": "90일",

    // --- Supply Chain Security widget ---
    "Not detected in your organization": "조직에서 탐지되지 않음",
    "View all attacks": "모든 공격 보기",
    "Latest Supply Chain Attacks": "최신 공급망 공격",

    // --- Coverage widget (inside an SVG chart, via foreignObject) ---
    "Total Coverage": "전체 적용 범위",
    "Top Application at Risk": "위험도가 가장 높은 애플리케이션",

    // --- Cloud account / application ---
    "Azure cloud accounts": "Azure 클라우드 계정",
    "AWS cloud accounts": "AWS 클라우드 계정",
    "Google cloud accounts": "Google Cloud 계정",
    "Applications": "애플리케이션",

    // --- Case / issue ---
    "Issues & Findings": "이슈 및 발견 사항",
    "CASES": "케이스",
    "OPENED": "열림",
    "CLOSED": "종료됨",

    // --- AI Guardrails widget ---
    "AI Guardrails": "AI 가드레일",
    "Uncover your tailored AI guardrail recommendations to prevent security risks":
      "보안 위험을 방지하기 위한 맞춤형 AI 가드레일 권장 사항 확인",
  },

  patterns: [
    { re: /^All Applications\s+(\(\d+\))$/, tpl: "모든 애플리케이션 $1" },
  ],

  skip: [],
};
