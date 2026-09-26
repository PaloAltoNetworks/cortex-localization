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

const dictionaryAspmCommandCenter = {
  exact: {
    "ASPM Command Center": "ASPM コマンドセンター",

    // --- 期間フィルター ---
    // --- Time-range filter ---
    "All time": "すべての期間",
    "30D": "30日",
    "7D": "7日",
    "90D": "90日",

    // --- サプライチェーンセキュリティ ウィジェット ---
    // --- Supply Chain Security widget ---
    "Not detected in your organization": "組織内では検出されていません",
    "View all attacks": "すべての攻撃を表示",
    "Latest Supply Chain Attacks": "最新のサプライチェーン攻撃",

    // --- カバレッジウィジェット(SVGチャート内、foreignObject) ---
    // --- Coverage widget (inside an SVG chart, via foreignObject) ---
    "Total Coverage": "合計カバレッジ",
    "Top Application at Risk": "リスクの高いトップアプリケーション",

    // --- クラウドアカウント/アプリケーション ---
    // --- Cloud account / application ---
    "Azure cloud accounts": "Azureクラウドアカウント",
    "AWS cloud accounts": "AWSクラウドアカウント",
    "Google cloud accounts": "Google Cloudアカウント",
    "Applications": "アプリケーション",

    // --- ケース/イシュー ---
    // --- Case / issue ---
    "Issues & Findings": "イシューと検出結果",
    "CASES": "ケース",
    "OPENED": "オープン",
    "CLOSED": "クローズ",

    // --- AI Guardrails ウィジェット ---
    // --- AI Guardrails widget ---
    "AI Guardrails": "AIガードレール",
    "Uncover your tailored AI guardrail recommendations to prevent security risks":
      "セキュリティリスクを防ぐための、お客様専用のAIガードレール推奨事項を確認",
  },

  patterns: [
    // "All Applications (30)" -> "すべてのアプリケーション (30)"
    { re: /^All Applications\s+(\(\d+\))$/, tpl: "すべてのアプリケーション $1" },
  ],

  skip: [],
};
