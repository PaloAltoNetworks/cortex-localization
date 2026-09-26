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

const dictionaryAiSecurityModule = {
  exact: {
    "AI Activity": "AIアクティビティ",
    "Model Families": "モデルファミリー",
    "Use this widget to identify AI assets at risk due to critical-severity security posture issues in your environment.":
      "このウィジェットを使用して、環境内の重大な重要度のセキュリティポスチャーイシューによりリスクにさらされているAI資産を特定してください。",
    "Use this widget to identify AI datasets with a high number of sensitive records.":
      "このウィジェットを使用して、機密レコード数が多いAIデータセットを特定してください。",
    "Use this widget to identify Data Profiles and Data Patterns in your AI datasets.":
      "このウィジェットを使用して、AIデータセット内のデータプロファイルとデータパターンを特定してください。",
    "Use this widget to identify the most vulnerable AI software packages and most risky compute assets with AI software packages.":
      "このウィジェットを使用して、最も脆弱なAIソフトウェアパッケージと、AIソフトウェアパッケージを含む最もリスクの高いコンピュート資産を特定してください。",
    "Use this widget to identify the most active models and identities in your AI ecosystem.":
      "このウィジェットを使用して、AIエコシステム内で最もアクティブなモデルとアイデンティティを特定してください。",
    "AI Inventory": "AIインベントリ",
    "AI Security Detection Rules": "AIセキュリティ検出ルール",
    "AI Security Issues": "AIセキュリティイシュー",
    "Active Threats": "アクティブな脅威",
    "AWS Assets": "AWS資産",
    "Azure Assets": "Azure資産",
    "GCP Assets": "GCP資産",
    "Data Pattern": "データパターン",
    "Data Profile": "データプロファイル",
    "Invocations": "呼び出し回数",
    "Model": "モデル",
    "Most Sensitive AI Datasets": "最も機密性の高いAIデータセット",
    "No Assets with Issues": "イシューのある資産はありません",
    "No Training Datasets Found": "トレーニングデータセットが見つかりません",
    "Posture Issues": "ポスチャーイシュー",
    "Remediate the most pressing issues to improve your AI security posture.":
      "AIセキュリティ体制を改善するため、最も重要なイシューを修復してください。",
    "Risk Trends": "リスクトレンド",
    "Risky Assets": "リスクのある資産",
    "Security issues discovered in your AI ecosystem": "AIエコシステムで検出されたセキュリティイシュー",
    "Sensitive Data Used by AI": "AIが使用する機密データ",
    "Top AI Assets At Risk": "リスクの高いAI資産トップ",
    "Top AI Threats and Posture Issues to Address": "対処すべき主要なAI脅威とポスチャーイシュー",
    "Top Active Identities": "主要なアクティブアイデンティティ",
    "Top Active Models": "主要なアクティブモデル",
    "Total Open Issues": "オープンイシューの合計",
    "Visualization of the AI ecosystem": "AIエコシステムの可視化",
    "Vulnerable AI Software Packages": "脆弱なAIソフトウェアパッケージ",
    "Vulnerable Packages": "脆弱なパッケージ",
    "You're secure, no issues to show": "安全です、表示するイシューはありません",
  },

  patterns: [
    { re: /^(\d+)\s+Training Datasets$/, tpl: "トレーニングデータセット $1件" },
    { re: /^(\d+)\s+Inference Datasets$/, tpl: "推論データセット $1件" },
    { re: /^(\d+)\s+Instances$/, tpl: "インスタンス $1件" },
    { re: /^(\d+)\s+Model Families$/, tpl: "モデルファミリー $1件" },
    { re: /^(\d+)\s+Model Families Found$/, tpl: "$1件のモデルファミリーが見つかりました" },
    { re: /^(\d+)\s+Model Endpoints$/, tpl: "モデルエンドポイント $1件" },
    { re: /^(\d+)\s+Agents$/, tpl: "エージェント $1件" },
    { re: /^(\d+)\s+Models$/, tpl: "モデル $1件" },
    { re: /^Issues Created\s+(\(\d+\))$/, tpl: "作成されたイシュー $1" },
    { re: /^Issues Resolved\s+(\(\d+\))$/, tpl: "解決済みのイシュー $1" },
  ],

  skip: [
    // 個別の検出結果の日時表記(完全に動的)
    // Per-finding detection-date text (fully dynamic).
    /^First Discovered on /,
  ],
};
