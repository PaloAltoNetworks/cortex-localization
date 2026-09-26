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

const dictionaryMarketplace = {
  exact: {
    "Installed Content Packs": "インストール済みのコンテンツパック",
    "Show": "表示",
    "All Packs": "すべてのパック",
    "Notifications active": "通知が有効",
    "Update to 1.1.6": "1.1.6に更新",
    "Content": "コンテンツ",
    "Dependencies": "依存関係",
    "Version History": "バージョン履歴",
    "Show Deprecated Content": "非推奨のコンテンツを表示",
    "INFO": "情報",
    "Last installed": "最終インストール日",
    "Installed version": "インストール済みバージョン",
    "Certification": "認証",
    "Certified": "認証済み",
    "Supported by": "サポート提供元",
    "Go to": "移動先:",
    "Content Pack support site": "コンテンツパックのサポートサイト",
    "First Created": "初回作成日",
    "Last Release": "最終リリース日",
    "Free Enricher": "無料のエンリッチャー",
    "WORKS WITH THE FOLLOWING INTEGRATIONS:": "以下の統合と連携します:",
    "DISCLAIMER": "免責事項",
    "Content packs are licensed by the Publisher identified above and subject to the Publisher’s own":
      "コンテンツパックは上記に記載された発行元によってライセンス供与されており、発行元独自の",
    "licensing terms": "ライセンス条項",
    "Marketplace documentation": "マーケットプレイスのドキュメント",
    "Cart": "カート",
    "Your cart is empty": "カートは空です",
    "Go shopping": "ショッピングを続ける",
    "Categories": "カテゴリ",
    "Filter by:": "フィルター:",
    "Search in": "検索対象",
    "Sort by": "並べ替え",
    "See all": "すべて見る",
    "See more": "もっと見る",
    "Show installed": "インストール済みを表示",
    "Content Pack includes": "コンテンツパックの内容",
    "Content Packs": "コンテンツパック",
    "Getting Started": "はじめに",
    "Partner Spotlight": "パートナースポットライト",
    "Partners": "パートナー",
    "Published By": "発行元",
    "Types": "タイプ",
    "Use Cases": "ユースケース",
    "Alerts": "アラート",
    "Analytics & SIEM": "分析とSIEM",
    "Asset Management": "資産管理",
    "Attack": "攻撃",
    "Breach": "侵害",
    "Breach Notification": "侵害通知",
    "Classifiers": "分類子",
    "Code Repositories": "コードリポジトリ",
    "Collection": "収集",
    "Dark Web": "ダークウェブ",
    "Data Model Rules": "データモデルルール",
    "Identity And Access Management": "アイデンティティとアクセス管理",
    "Incident Response": "インシデント対応",
    "Extracts text from images.": "画像からテキストを抽出します。",
    "Show Commands": "コマンドを表示",
    "The following packs have updates:": "以下のパックに更新があります:",
  },

  patterns: [
    // "Content Packs Library (42)" -> "コンテンツパックライブラリ (42)"
    { re: /^Content Packs Library\s+(\(\d+\))$/, tpl: "コンテンツパックライブラリ $1" },
    // "1 Script" / "1 Integration" -> "1 件のスクリプト" / "1 件の統合"
    { re: /^(\d+)\s+Scripts?$/, tpl: "$1 件のスクリプト" },
    { re: /^(\d+)\s+Integrations?$/, tpl: "$1 件の統合" },
    // "1 update available" / "3 updates available" -> "1件の更新が利用可能です"
    { re: /^(\d+)\s+updates?\s+available$/, tpl: "$1件の更新が利用可能です" },
  ],

  skip: [],
};
