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

const dictionaryCloudCommandCenter = {
  exact: {
    "Cortex Cloud Command Center": "Cortex Cloud 커맨드 센터",
    "Cloud Command Center": "클라우드 커맨드 센터",

    "Connect Data Source": "데이터 소스 연결",
    "Showing results from all providers": "모든 공급자의 결과 표시 중",
    "Total Assets at Risk": "위험에 처한 총 자산",

    "Active Threat Cases": "활성 위협 케이스",
    "Posture Cases": "보안 태세 케이스",
    "Created": "생성됨",
    "Resolved": "해결됨",
    "Actions Available": "사용 가능한 작업",
    "Automation Available": "사용 가능한 자동화",
    "Remediation Available": "사용 가능한 수정 조치",

    "Top Active Threats to Address": "대응해야 할 주요 활성 위협",
    "Investigate and resolve top threats to prevent breach":
      "침해를 방지하려면 주요 위협을 조사하고 해결하세요",
    "View Active Threats": "활성 위협 보기",

    "Top Posture Cases to Address": "대응해야 할 주요 보안 태세 케이스",
    "Remediate the cases below to improve your organizational security posture":
      "아래 케이스를 수정 조치하여 조직의 보안 태세를 개선하세요",
    "All Classes": "모든 클래스",
    "View Posture Cases": "보안 태세 케이스 보기",

    "Vulnerability Summary": "취약점 요약",
    "Manage Vulnerabilities": "취약점 관리",
    "Unique Risky Vulnerabilities Issues": "고유한 위험 취약점 이슈",
    "Critical & High": "심각 및 높음",
    "Weaponized Exploit": "무기화된 익스플로잇",
    "Fix Available": "수정 사용 가능",
    "Top Risky Vulnerabilities": "위험도 높은 주요 취약점",

    "Compliance Summary": "규정 준수 요약",
    "View Compliance Center": "규정 준수 센터 보기",
    "Compliance Standard by Score": "점수별 규정 준수 표준",
    "Standards Status": "표준 상태",
    "Controls Assessed": "평가된 컨트롤",

    // --- Dashboard: data-source connection / scan status / asset explorer ---
    "Connect account": "계정 연결",
    "Scanning health": "스캔 상태",
    "Explore AI Assets": "AI 자산 탐색",
    "Explore API Assets": "API 자산 탐색",
    "Explore Compute Assets": "컴퓨팅 자산 탐색",
    "Explore Data Assets": "데이터 자산 탐색",
    "Explore Identity Assets": "ID 자산 탐색",
    "Explore Other Assets": "기타 자산 탐색",
    "Explore Network Assets": "네트워크 자산 탐색",
  },

  patterns: [
    { re: /^(\d[\d,.]*[KkMm]?)\s+Controls Assessed$/, tpl: "평가된 컨트롤 $1개" },
    { re: /^(\d[\d,.]*[KkMm]?)\s+AWS Accounts$/, tpl: "AWS 계정 $1개" },
    { re: /^(\d[\d,.]*[KkMm]?)\s+GCP Accounts$/, tpl: "GCP 계정 $1개" },
    { re: /^(\d[\d,.]*[KkMm]?)\s+Azure Accounts$/, tpl: "Azure 계정 $1개" },
    { re: /^(\d[\d,.]*[KkMm]?)\s+OCI Accounts$/, tpl: "OCI 계정 $1개" },
    { re: /^(\d[\d,.]*[KkMm]?)\s+Snowflake Accounts$/, tpl: "Snowflake 계정 $1개" },
    { re: /^(\d+)%\s+Health$/, tpl: "상태 $1%" },
  ],

  skip: [],
};
