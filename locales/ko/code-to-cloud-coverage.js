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

const dictionaryCodeToCloudCoverage = {
  exact: {
    // --- Code to Cloud coverage screen ---
    "Artifact type": "아티팩트 유형",
    "Artifacts traced from runtime": "런타임에서 추적된 아티팩트",
    "Infrastructure": "인프라",
    "Cloud assets traced from runtime": "런타임에서 추적된 클라우드 자산",
    "Cloud assets fully traced cloud-to-code": "클라우드에서 코드까지 완전히 추적된 클라우드 자산",
    "Cloud assets lack YOR tags; manual tagging needed": "클라우드 자산에 YOR 태그가 없습니다. 수동 태그 지정이 필요합니다",
    "Tagging Needed": "태그 지정 필요",
    "View Cloud assets without YOR tag": "YOR 태그가 없는 클라우드 자산 보기",
    "Cloud assets without YOR TAG": "YOR 태그가 없는 클라우드 자산",
    "Calculate to": "계산 대상",
    "Artifacts traced from source": "소스에서 추적된 아티팩트",
    "VCS Repos lack connected pipelines to trace to build": "VCS 리포지토리에 빌드까지 추적할 연결된 파이프라인이 없습니다",
    "View repositories": "리포지토리 보기",
    "Repos with no traced pipelines": "추적된 파이프라인이 없는 리포지토리",
    "VCS Repos lack registry connection for trace to deploy": "VCS 리포지토리에 배포까지 추적할 레지스트리 연결이 없습니다",
    "Repos with no traced artifact registries": "추적된 아티팩트 레지스트리가 없는 리포지토리",
    "Build": "빌드",
    "Calculate from": "계산 기준",
    "Cloud → Code": "Cloud → Code",
    "Code → Cloud": "Code → Cloud",
    "Container Images not traced beyond Deploy": "배포 이후로 추적되지 않은 컨테이너 이미지",
    "Container images lack VCS repos to trace to Code": "컨테이너 이미지에 코드까지 추적할 VCS 리포지토리가 없습니다",
    "Container images lack pipelines to trace to Build": "컨테이너 이미지에 빌드까지 추적할 파이프라인이 없습니다",
    "Deployment": "배포",
    "Flow Direction": "흐름 방향",
    "Onboard CI/CD instances": "CI/CD 인스턴스 온보딩",
    "Onboard Container Registries": "컨테이너 레지스트리 온보딩",
    "Onboard VCS Organization/repo": "VCS 조직/리포지토리 온보딩",
    "Onboarding suggested": "온보딩 권장",
    "Recommended Next Steps": "권장 다음 단계",
    "Runtime Images not traced": "추적되지 않은 런타임 이미지",
    "Runtime Images not traced beyond pipeline": "파이프라인 이후로 추적되지 않은 런타임 이미지",
    "Runtime artifacts": "런타임 아티팩트",
    "Runtime artifacts fully traced cloud-to-code": "클라우드에서 코드까지 완전히 추적된 런타임 아티팩트",
    "Runtime images lack registries to trace to Deploy": "런타임 이미지에 배포까지 추적할 레지스트리가 없습니다",
    "Steps required to improve traceability": "추적성 향상에 필요한 단계",
    "VM instances lack pipelines to trace to Build": "VM 인스턴스에 빌드까지 추적할 파이프라인이 없습니다",
    "VM instances not traced beyond Runtime": "런타임 이후로 추적되지 않은 VM 인스턴스",
    "View Runtime Images traced only to pipeline": "파이프라인까지만 추적된 런타임 이미지 보기",
    "View Untraced Container Images": "추적되지 않은 컨테이너 이미지 보기",
    "View Untraced VM Instances": "추적되지 않은 VM 인스턴스 보기",
    "What is being traced": "추적 대상",
    "Untraced": "추적되지 않음",
    "No repositories detected": "탐지된 리포지토리 없음",
    // Kept verbatim ("not transferred"). Other items use "not traced", but this one uses a
    // different word; kept as-is to exact-match the actual displayed text.
    "Cloud Assets not transferred": "전송되지 않은 클라우드 자산",
    "IaC resource traced from code": "코드에서 추적된 IaC 리소스",
    "No runtime detected": "탐지된 런타임 없음",
    "No pipelines detected": "탐지된 파이프라인 없음",
    "No deployment detected": "탐지된 배포 없음",
    "Artifacts transferred": "전송된 아티팩트",
    "Artifacts not transferred": "전송되지 않은 아티팩트",
    "Repositories not transferred": "전송되지 않은 리포지토리",
    "IaC resources not transferred": "전송되지 않은 IaC 리소스",
    "Repositories transferred": "전송된 리포지토리",
    "Cloud Assets transferred": "전송된 클라우드 자산",
    "IaC resources transferred": "전송된 IaC 리소스",
    "IaC resources lack YOR tags to trace to runtime": "IaC 리소스에 런타임까지 추적할 YOR 태그가 없습니다",
    "Tagged IaC resources lack cloud accounts for Runtime trace": "태그가 지정된 IaC 리소스에 런타임 추적을 위한 클라우드 계정이 없습니다",
    "View IaC resources without YOR tag": "YOR 태그가 없는 IaC 리소스 보기",
    "View untraced tagged IaC resources": "추적되지 않은 태그 지정 IaC 리소스 보기",
    "Onboard Cloud Accounts": "클라우드 계정 온보딩",
    // In the actual DOM, the count (e.g. "829") sits in its own highlight span,
    // and the "/ 1244" part and the label are further split into separate text
    // nodes by an Angular comment node (<!---->) in between. So this label
    // reaches the dictionary as its own isolated text node — register it as
    // an exact match rather than a fraction pattern.
    // "wo" is shorthand for "without" as displayed in the product; translated by meaning.
    "IaC resources wo YOR": "YOR 태그 없는 IaC 리소스",
    "IaC resources with YOR but not traced": "YOR 태그는 있지만 추적되지 않은 IaC 리소스",
  },

  patterns: [
    // The leading fraction (count) part is variable and left untranslated.
    { re: /^([\d,.]+\s*\/\s*[\d,.]+[A-Za-z]*)\s+Cloud assets fully traced cloud-to-code$/,
      tpl: "$1 클라우드에서 코드까지 완전히 추적된 클라우드 자산" },
    { re: /^([\d,.]+\s*\/\s*[\d,.]+[A-Za-z]*)\s+IaC resources fully traced code-to-cloud$/,
      tpl: "$1 코드에서 클라우드까지 완전히 추적된 IaC 리소스" },
    // The numerator is rendered in a separate sibling element; this text node only
    // contains the "/ 94" part, which is variable and left untranslated.
    { re: /^(\/\s*[\d,.]+[A-Za-z]*)\s+Repositories fully traced code-to-cloud$/,
      tpl: "$1 코드에서 클라우드까지 완전히 추적된 리포지토리" },
    { re: /^(\/\s*[\d,.]+[A-Za-z]*)\s+Runtime artifacts fully traced cloud-to-code$/,
      tpl: "$1 클라우드에서 코드까지 완전히 추적된 런타임 아티팩트" },
    { re: /^(\/\s*[\d,.]+[A-Za-z]*)\s+IaC resources fully traced code-to-cloud$/,
      tpl: "$1 코드에서 클라우드까지 완전히 추적된 IaC 리소스" },
    { re: /^(\/\s*[\d,.]+[A-Za-z]*)\s+Cloud assets fully traced cloud-to-code$/,
      tpl: "$1 클라우드에서 코드까지 완전히 추적된 클라우드 자산" },
  ],

  skip: [],
};
