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

const dictionaryAppsecPolicies = {
  exact: {
    "AppSec Policies": "AppSec 정책",

    "AI Recommendations": "AI 권장 사항",
    "New Policy": "새 정책",
    "Policy Id": "정책 ID",
    "Recommended": "권장",
    "Scope": "범위",
    "Trigger": "트리거",

    // --- Built-in policy names (fixed catalog) ---
    "Block Build and Pull Request on Valid secrets":
      "유효한 시크릿이 있으면 빌드 및 풀 리퀘스트 차단",
    "Block Build and Pull Request on Valid secrets in public repository":
      "퍼블릭 리포지토리에 유효한 시크릿이 있으면 빌드 및 풀 리퀘스트 차단",
    "Block Build and Pull Request on strong Copyleft License":
      "강력한 카피레프트 라이선스가 있으면 빌드 및 풀 리퀘스트 차단",
    "Block PR on Packages with a HIGH severity operational risk":
      "심각도 HIGH의 운영 위험이 있는 패키지에 대해 PR 차단",
    "Block Pull Request": "풀 리퀘스트 차단",
    "Block – CI Code Scan": "차단 - CI 코드 스캔",
    "CI Code Scan": "CI 코드 스캔",
    "CI Image Scan": "CI 이미지 스캔",
    "Comment on Pull Request": "풀 리퀘스트에 댓글 달기",
    "Create Issue – CI Image Scan": "이슈 생성 - CI 이미지 스캔",
    "Create Issue – Periodic Scan": "이슈 생성 - 주기적 스캔",
    "Create issue on Secrets found in a GitHub/GitLab webhook URL":
      "GitHub/GitLab 웹훅 URL에서 발견된 시크릿에 대해 이슈 생성",
    "Create issue on a Direct Poisoned Pipeline Execution":
      "Direct Poisoned Pipeline Execution에 대해 이슈 생성",
    "Create issue on a Direct Poisoned Pipeline Execution by outside collaborators":
      "외부 공동 작업자에 의한 Direct Poisoned Pipeline Execution에 대해 이슈 생성",
    "Create issues on HIGH and CRITICAL severity IaC misconfigurations":
      "심각도 HIGH/CRITICAL IaC 잘못된 구성에 대해 이슈 생성",
    "Create issues on HIGH and CRITICAL severity vulnerabilities":
      "심각도 HIGH/CRITICAL 취약점에 대해 이슈 생성",
    "Create issues on Valid secrets": "유효한 시크릿에 대해 이슈 생성",
    "Create issues on Valid secrets in public repository":
      "퍼블릭 리포지토리의 유효한 시크릿에 대해 이슈 생성",
    "PR Scan": "PR 스캔",
    "Periodic Scan": "주기적 스캔",
    "Report – CI Code Scan": "보고서 - CI 코드 스캔",
    "Secrets found in GitHub/GitLab webhook URL": "GitHub/GitLab 웹훅 URL에서 발견된 시크릿",

    // --- Condition-expression labels (fixed template) ---
    "AppSec Rule = Secrets found in webhook URL": "AppSec 규칙 = 웹훅 URL에서 발견된 시크릿",
    "AppSec Rule = Direct Poisoned Pipeline Execution":
      "AppSec 규칙 = Direct Poisoned Pipeline Execution",
    "AppSec Rule = Direct Poisoned Pipeline Execution by outside collaborators":
      "AppSec 규칙 = 외부 공동 작업자에 의한 Direct Poisoned Pipeline Execution",
    "AppSec Rule = Strong copyleft license found in code":
      "AppSec 규칙 = 코드에서 발견된 강력한 카피레프트 라이선스",
    "Finding Type = Iac Misconfigurations, Secrets, Vulnerability, Licenses, Operational Risk, Code Weaknesses, Malware":
      "발견 유형 = IaC 잘못된 구성, 시크릿, 취약점, 라이선스, 운영 위험, 코드 취약점, 멀웨어",
    "Finding Type = Iac Misconfigurations, Secrets, Vulnerability, Licenses, Operational Risk, Code Weaknesses, Malware, Malicious Packages":
      "발견 유형 = IaC 잘못된 구성, 시크릿, 취약점, 라이선스, 운영 위험, 코드 취약점, 멀웨어, 악성 패키지",
    "Finding Type = CI/CD Risks": "발견 유형 = CI/CD 위험",
    "Finding Type = Iac Misconfigurations": "발견 유형 = IaC 잘못된 구성",
    "Finding Type = Licenses": "발견 유형 = 라이선스",
    "Finding Type = Operational Risk": "발견 유형 = 운영 위험",
    "Finding Type = Secrets": "발견 유형 = 시크릿",
    "Finding Type = Vulnerability": "발견 유형 = 취약점",
    "Is Public Repository = Yes": "퍼블릭 리포지토리 여부 = 예",
    "Secret Validity = Valid": "시크릿 유효성 = 유효",
    "Severity = Critical, High": "심각도 = 심각, 높음",
    "PR Scan, CI Code Scan": "PR 스캔, CI 코드 스캔",
  },

  patterns: [],

  skip: [],
};
