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

const dictionaryApiSecurityManagement = {
  exact: {
    "API Security Management": "API 보안 관리",

    "Asset count by sensitive data type": "민감한 데이터 유형별 자산 수",
    "Attack traffic over time": "시간 경과에 따른 공격 트래픽",
    "Attacks Over Time": "시간 경과에 따른 공격",
    "Attacks by Country of Origin": "출발 국가별 공격",
    "Blocked Attacks": "차단된 공격",
    "High severity issues": "높은 심각도 이슈",
    "Last 24 Hours": "최근 24시간",
    "Number of APIs": "API 수",
    "Provider": "공급자",
    "Risks by severity over time": "시간 경과에 따른 심각도별 위험",
    "Risky API Funnel": "위험한 API 퍼널",
    "Sensitive Data": "민감한 데이터",
    "Source": "소스",
    "Total APIs": "전체 API",
    "Total Attacks": "전체 공격",
    "Total Requests": "전체 요청",
    "Total Risks": "전체 위험",
    "Total attacks per type": "유형별 전체 공격",
    "Try to update or adjust your query filters": "쿼리 필터를 업데이트하거나 조정해 보세요",
    "View by": "보기 기준",
  },

  patterns: [],

  skip: [
    // Internal step label inside a funnel chart (not display text).
    /^stairs level\d+$/,
  ],
};
