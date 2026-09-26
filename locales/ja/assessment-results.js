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
    "Assessment Results": "評価結果",

    "Assessment by Label": "ラベル別の評価",
    "Assessment by Score": "スコア別の評価",
    "Assessments": "評価",
    "Controls Status": "コントロールステータス",
    "Labels": "ラベル",
    "Last Evaluation Time": "最終評価日時",
    "Not Assessed": "未評価",
    "On Prem": "オンプレミス",
  },

  patterns: [
    // "0-50% Compliant" -> "0〜50% 準拠"
    { re: /^(\d+)-(\d+)%\s+Compliant$/, tpl: "$1〜$2% 準拠" },
  ],

  skip: [],
};
