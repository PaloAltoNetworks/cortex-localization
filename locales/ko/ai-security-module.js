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

const dictionaryAiSecurityModule = {
  exact: {
    "AI Activity": "AI 활동",
    "Model Families": "모델 패밀리",
    "Use this widget to identify AI assets at risk due to critical-severity security posture issues in your environment.":
      "이 위젯을 사용하여 환경에서 심각도가 심각인 보안 태세 이슈로 인해 위험에 노출된 AI 자산을 식별하세요.",
    "Use this widget to identify AI datasets with a high number of sensitive records.":
      "이 위젯을 사용하여 민감한 레코드가 많은 AI 데이터 세트를 식별하세요.",
    "Use this widget to identify Data Profiles and Data Patterns in your AI datasets.":
      "이 위젯을 사용하여 AI 데이터 세트의 데이터 프로필 및 데이터 패턴을 식별하세요.",
    "Use this widget to identify the most vulnerable AI software packages and most risky compute assets with AI software packages.":
      "이 위젯을 사용하여 가장 취약한 AI 소프트웨어 패키지와 AI 소프트웨어 패키지가 포함된 가장 위험한 컴퓨팅 자산을 식별하세요.",
    "Use this widget to identify the most active models and identities in your AI ecosystem.":
      "이 위젯을 사용하여 AI 에코시스템에서 가장 활발한 모델과 ID를 식별하세요.",
    "AI Inventory": "AI 인벤토리",
    "AI Security Detection Rules": "AI 보안 탐지 규칙",
    "AI Security Issues": "AI 보안 이슈",
    "Active Threats": "활성 위협",
    "AWS Assets": "AWS 자산",
    "Azure Assets": "Azure 자산",
    "GCP Assets": "GCP 자산",
    "Data Pattern": "데이터 패턴",
    "Data Profile": "데이터 프로필",
    "Invocations": "호출 횟수",
    "Model": "모델",
    "Most Sensitive AI Datasets": "가장 민감한 AI 데이터 세트",
    "No Assets with Issues": "이슈가 있는 자산 없음",
    "No Training Datasets Found": "학습 데이터 세트를 찾을 수 없음",
    "Posture Issues": "보안 태세 이슈",
    "Remediate the most pressing issues to improve your AI security posture.":
      "가장 시급한 이슈를 수정 조치하여 AI 보안 태세를 개선하세요.",
    "Risk Trends": "위험 추세",
    "Risky Assets": "위험한 자산",
    "Security issues discovered in your AI ecosystem": "AI 에코시스템에서 발견된 보안 이슈",
    "Sensitive Data Used by AI": "AI가 사용하는 민감한 데이터",
    "Top AI Assets At Risk": "위험에 노출된 상위 AI 자산",
    "Top AI Threats and Posture Issues to Address": "대응해야 할 상위 AI 위협 및 보안 태세 이슈",
    "Top Active Identities": "상위 활성 ID",
    "Top Active Models": "상위 활성 모델",
    "Total Open Issues": "총 열린 이슈",
    "Visualization of the AI ecosystem": "AI 에코시스템 시각화",
    "Vulnerable AI Software Packages": "취약한 AI 소프트웨어 패키지",
    "Vulnerable Packages": "취약한 패키지",
    "You're secure, no issues to show": "안전합니다. 표시할 이슈가 없습니다",
  },

  patterns: [
    { re: /^(\d+)\s+Training Datasets$/, tpl: "학습 데이터 세트 $1개" },
    { re: /^(\d+)\s+Inference Datasets$/, tpl: "추론 데이터 세트 $1개" },
    { re: /^(\d+)\s+Instances$/, tpl: "인스턴스 $1개" },
    { re: /^(\d+)\s+Model Families$/, tpl: "모델 패밀리 $1개" },
    { re: /^(\d+)\s+Model Families Found$/, tpl: "모델 패밀리 $1개를 찾았습니다" },
    { re: /^(\d+)\s+Model Endpoints$/, tpl: "모델 엔드포인트 $1개" },
    { re: /^(\d+)\s+Agents$/, tpl: "에이전트 $1개" },
    { re: /^(\d+)\s+Models$/, tpl: "모델 $1개" },
    { re: /^Issues Created\s+(\(\d+\))$/, tpl: "생성된 이슈 $1" },
    { re: /^Issues Resolved\s+(\(\d+\))$/, tpl: "해결된 이슈 $1" },
  ],

  skip: [
    // Per-finding detection-date text (fully dynamic).
    /^First Discovered on /,
  ],
};
