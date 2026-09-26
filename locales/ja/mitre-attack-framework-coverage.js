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
    "MITRE ATT&CK Framework Coverage": "MITRE ATT&CK フレームワークカバレッジ",

    "Active": "アクティブ",
    "Contributing Data Sources": "貢献しているデータソース",
    "Data Source Type:": "データソースの種類:",
    "Detection Type:": "検出タイプ:",
    "Download Support File": "サポートファイルをダウンロード",
    "Inactive": "非アクティブ",
    "Number of Detection Rules Per Tactic": "戦術別の検出ルール数",
    "Please try again in a few minutes.": "しばらくしてから再度お試しください。",
    "Show only Covered Methods": "カバーされている手法のみ表示",
    "We are experiencing a problem, data may not be up to date.":
      "問題が発生しています。データが最新でない可能性があります。",
  },

  patterns: [
    // "N items selected" -> "N件選択中"
    { re: /^(\d+)\s+items selected$/, tpl: "$1件選択中" },
  ],

  skip: [],
};
