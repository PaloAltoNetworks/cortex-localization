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

const dictionaryCloudCommandCenter = {
  exact: {
    "Cortex Cloud Command Center": "Cortex Cloud コマンドセンター",
    "Cloud Command Center": "クラウドコマンドセンター",

    "Connect Data Source": "データソースを接続",
    "Showing results from all providers": "すべてのプロバイダーの結果を表示中",
    "Total Assets at Risk": "リスクのある資産の合計",

    "Active Threat Cases": "アクティブな脅威ケース",
    "Posture Cases": "ポスチャーケース",
    "Created": "作成済み",
    "Resolved": "解決済み",
    "Actions Available": "利用可能なアクション",
    "Automation Available": "利用可能な自動化",
    "Remediation Available": "利用可能な修復",

    "Top Active Threats to Address": "対処すべき主要なアクティブ脅威",
    "Investigate and resolve top threats to prevent breach":
      "侵害を防ぐため主要な脅威を調査・解決してください",
    "View Active Threats": "アクティブな脅威を表示",

    "Top Posture Cases to Address": "対処すべき主要なポスチャーケース",
    "Remediate the cases below to improve your organizational security posture":
      "以下のケースを修復して組織のセキュリティ体制を改善してください",
    "All Classes": "すべてのクラス",
    "View Posture Cases": "ポスチャーケースを表示",

    "Vulnerability Summary": "脆弱性サマリー",
    "Manage Vulnerabilities": "脆弱性を管理",
    "Unique Risky Vulnerabilities Issues": "固有のリスクのある脆弱性のイシュー",
    "Critical & High": "重大 & 高",
    "Weaponized Exploit": "武器化されたエクスプロイト",
    "Fix Available": "修正あり",
    "Top Risky Vulnerabilities": "リスクの高い脆弱性トップ",

    "Compliance Summary": "コンプライアンスサマリー",
    "View Compliance Center": "コンプライアンスセンターを表示",
    "Compliance Standard by Score": "スコア別コンプライアンス基準",
    "Standards Status": "基準ステータス",
    "Controls Assessed": "評価済みコントロール",

    // --- ダッシュボード: データソース接続/スキャン状況/資産エクスプローラー ---
    // --- Dashboard: data-source connection / scan status / asset explorer ---
    "Connect account": "アカウントを接続",
    "Scanning health": "スキャンの健全性",
    "Explore AI Assets": "AI資産を探索",
    "Explore API Assets": "API資産を探索",
    "Explore Compute Assets": "コンピュート資産を探索",
    "Explore Data Assets": "データ資産を探索",
    "Explore Identity Assets": "アイデンティティ資産を探索",
    "Explore Other Assets": "その他の資産を探索",
    "Explore Network Assets": "ネットワーク資産を探索",
  },

  patterns: [
    { re: /^(\d[\d,.]*[KkMm]?)\s+Controls Assessed$/, tpl: "$1 件の評価済みコントロール" },
    { re: /^(\d[\d,.]*[KkMm]?)\s+AWS Accounts$/, tpl: "AWSアカウント $1 件" },
    { re: /^(\d[\d,.]*[KkMm]?)\s+GCP Accounts$/, tpl: "GCPアカウント $1 件" },
    { re: /^(\d[\d,.]*[KkMm]?)\s+Azure Accounts$/, tpl: "Azureアカウント $1 件" },
    { re: /^(\d[\d,.]*[KkMm]?)\s+OCI Accounts$/, tpl: "OCIアカウント $1 件" },
    { re: /^(\d[\d,.]*[KkMm]?)\s+Snowflake Accounts$/, tpl: "Snowflakeアカウント $1 件" },
    { re: /^(\d+)%\s+Health$/, tpl: "健全性 $1%" },
  ],

  skip: [],
};
