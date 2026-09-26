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

const dictionaryMitreAttackFrameworkCoverage = {
  exact: {
    "MITRE ATT&CK Framework Coverage": "MITRE ATT&CK 프레임워크 적용 범위",

    "Active": "활성",
    "Contributing Data Sources": "기여 데이터 소스",
    "Data Source Type:": "데이터 소스 유형:",
    "Detection Type:": "탐지 유형:",
    "Download Support File": "지원 파일 다운로드",
    "Inactive": "비활성",
    "Number of Detection Rules Per Tactic": "전술별 탐지 규칙 수",
    "Please try again in a few minutes.": "몇 분 후에 다시 시도하세요.",
    "Show only Covered Methods": "적용되는 기법만 표시",
    "We are experiencing a problem, data may not be up to date.":
      "문제가 발생했습니다. 데이터가 최신 상태가 아닐 수 있습니다.",
  },

  patterns: [
    { re: /^(\d+)\s+items selected$/, tpl: "$1개 항목 선택됨" },
  ],

  skip: [],
};
