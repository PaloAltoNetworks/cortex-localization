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

const dictionaryCloudSecurityAssessment = {
  exact: {
    "Cloud Security Assessment": "클라우드 보안 평가",

    "Issues By Status": "상태별 이슈",
    "Issues by status": "상태별 이슈",
    "Open Issues By Severity": "심각도별 열린 이슈",
    "Open Issues By Violation Type": "위반 유형별 열린 이슈",
    "Open Issues count": "열린 이슈 수",
    "Open issues by severity": "심각도별 열린 이슈",
    "Open issues by violation type": "위반 유형별 열린 이슈",
    "Top Open Issues by Rule": "규칙별 상위 열린 이슈",
    "issues": "이슈",
    "rule": "규칙",
    "severity": "심각도",

    // --- Severity badges (uppercase enum values) ---
    "CRITICAL": "심각",
    "HIGH": "높음",
    "MEDIUM": "중간",
    "LOW": "낮음",
    "NEW": "신규",
    "IN_PROGRESS": "진행 중",
    "RESOLVED": "해결됨",

    // --- Category badges (uppercase enum values) ---
    "ATTACK PATH": "공격 경로",
    "ATTACK_PATH": "공격 경로",
    "CODE": "코드",
    "CONFIGURATION": "구성",
    "DATA": "데이터",
    "IDENTITY": "ID",
    "POSTURE": "보안 태세",
    "VULNERABILITY": "취약점",
  },

  patterns: [],

  skip: [
    // Per-finding message containing a file path (fully dynamic).
    /found in \//,
  ],
};
