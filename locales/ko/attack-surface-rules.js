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

const dictionaryAttackSurfaceRules = {
  exact: {
    "Attack Surface Rules": "공격 표면 규칙",

    "ASM Issue Categories": "ASM 이슈 범주",
    "Estimated Issue Count": "예상 이슈 수",
    "Remediation Guidance": "수정 조치 가이드",
    "Remote Access Services": "원격 액세스 서비스",
    "IT and Security Infrastructure": "IT 및 보안 인프라",

    // --- Category combination labels (fixed) ---
    "Development Infrastructure, AI Infrastructure": "개발 인프라, AI 인프라",
    "Business Operations Applications, Software Potentially Impacted by CISA Known Exploited Vulnerabilities (BOD 22-01)":
      "비즈니스 운영 애플리케이션, CISA 알려진 악용 취약점(BOD 22-01)의 영향을 받을 수 있는 소프트웨어",
    "IT and Security Infrastructure, Software Potentially Impacted by CISA Known Exploited Vulnerabilities (BOD 22-01)":
      "IT 및 보안 인프라, CISA 알려진 악용 취약점(BOD 22-01)의 영향을 받을 수 있는 소프트웨어",
    "Unpatched, Misconfigured, and end-of-life (EOL) systems, Software Potentially Impacted by CISA Known Exploited Vulnerabilities (BOD 22-01)":
      "패치되지 않은 시스템, 잘못 구성된 시스템 및 지원 종료(EOL) 시스템, CISA 알려진 악용 취약점(BOD 22-01)의 영향을 받을 수 있는 소프트웨어",
  },

  patterns: [],

  skip: [],
};
