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

const dictionaryLicense = {
  exact: {
    "License Details": "라이선스 세부 정보",
    "Sync license details": "라이선스 세부 정보 동기화",
    "A single Compute Unit add-on for Cortex CLOUD": "Cortex CLOUD용 단일 Compute Unit 애드온",
    "Advanced identity threat detection and response capabilities": "고급 ID 위협 탐지 및 대응 기능",
    "Application Security add-on for CLOUD, including IAC, SCA and Secrets Security":
      "IAC, SCA 및 Secrets Security를 포함한 CLOUD용 Application Security 애드온",
    "Cloud Runtime Workloads": "클라우드 런타임 워크로드",
    "Extended Compute Units": "확장 Compute Unit",
    "Forensics Module": "포렌식 모듈",
    "Forensics add-on for Cortex CLOUD": "Cortex CLOUD용 포렌식 애드온",
    "Free trial": "무료 평가판",
    "Host Insights Module": "Host Insights 모듈",
    "Host Insights add-on for Cortex CLOUD": "Cortex CLOUD용 Host Insights 애드온",
    "ITDR Module": "ITDR 모듈",
    "Runtime Security": "런타임 보안",
  },

  patterns: [
    { re: /^Addons \((\d+)\)$/, tpl: "애드온 ($1)" },
    { re: /^(\d[\d,]*)\s+agents$/, tpl: "에이전트 $1개" },
    { re: /^Expires (.+)$/, tpl: "만료: $1" },
    { re: /^Expires on (.+)$/, tpl: "만료일: $1" },
    { re: /^Trial Expires on (.+)$/, tpl: "평가판 만료일: $1" },
    { re: /^Usage: (.+)$/, tpl: "사용량: $1" },
    { re: /^([\d.,]+)\s+additional daily on average \(([\d.,]+)\s+annually\)$/, tpl: "일일 평균 $1개 추가(연간 $2개)" },
  ],

  skip: [],
};
