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

const dictionaryAssessmentResults = {
  exact: {
    "Assessment Results": "평가 결과",

    "Assessment by Label": "레이블별 평가",
    "Assessment by Score": "점수별 평가",
    "Assessments": "평가",
    "Controls Status": "컨트롤 상태",
    "Labels": "레이블",
    "Last Evaluation Time": "마지막 평가 시간",
    "Not Assessed": "평가되지 않음",
    "On Prem": "온프레미스",
  },

  patterns: [
    { re: /^(\d+)-(\d+)%\s+Compliant$/, tpl: "$1-$2% 준수" },
  ],

  skip: [],
};
