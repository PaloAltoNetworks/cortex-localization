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

const dictionaryIdentitySecurity = {
  exact: {
    "Administrative": "管理者権限",
    "Identity Overview": "アイデンティティ概要",
    "Identity Asset Inventory": "アイデンティティ資産インベントリ",
    "Cloud Unified Human Identities": "クラウド統合された人間のアイデンティティ",
    "Empty Groups": "空のグループ",
    "Cloud Groups": "クラウドグループ",
    "SaaS Groups": "SaaSグループ",
    "On-Premises Groups": "オンプレミスグループ",
    "On premises Unified Human Identities": "オンプレミス統合された人間のアイデンティティ",
    "Secrets": "シークレット",
    "MFA Disabled": "MFA無効",
    "SaaS Unified Human Identities": "SaaS統合された人間のアイデンティティ",
    "SaaS Human Identities": "SaaS人間のアイデンティティ",
    "On-premises Human Identities": "オンプレミス人間のアイデンティティ",
    "Weak Passwords": "脆弱なパスワード",
    "Team Membership": "チームメンバーシップ",
    "Who does it grant access to?": "誰にアクセス権を付与しますか?",
    "Last Commit": "最終コミット",
    "This widget show the riskiest identities with the highest score combination of risks. Fixing such identity will improve the overall score.":
      "このウィジェットは、複数のリスクを組み合わせたスコアが最も高い、最もリスクの高いアイデンティティを表示します。これらのアイデンティティを修正することで、全体のスコアが改善されます。",
    "In this widget, you can find information about your Admin Identities. We identify identity as admin if it meets the following criteria:":
      "このウィジェットでは、管理者アイデンティティに関する情報を確認できます。以下の基準を満たす場合、そのアイデンティティを管理者として識別します:",
    "• Has one of the Built-in Admin policies": "・組み込みの管理者ポリシーのいずれかを持っている",
    "• Has custom policies with administrative permissions": "・管理者権限を持つカスタムポリシーを持っている",
    "In addition to the access, we take into consideration the level on which this access was granted for the identity":
      "また、アクセス権自体に加えて、そのアクセスがどのレベルでアイデンティティに付与されたかも考慮します",
    "This widget provides an overview of your assets at risk and enables you to quickly and easily identify the riskiest identity asset categories, helping you prioritize and address the most critical security vulnerabilities first.":
      "このウィジェットは、リスクにさらされている資産の概要を提供し、最もリスクの高いアイデンティティ資産カテゴリを迅速かつ簡単に特定できるようにすることで、最も重大なセキュリティ脆弱性への優先的な対応を支援します。",
    "Admins Only": "管理者のみ",
    "Admins Summary": "管理者サマリー",
    "AWS IAM Role": "AWS IAMロール",
    "AWS IAM Role has role chaining permissions to admin":
      "AWS IAMロールに管理者へのロールチェーン権限があります",
    "Config": "設定",
    "Got even more time?": "もっと時間がありますか?",
    "Human Identities": "人間のアイデンティティ",
    "IAM Identity Asset Inventory": "IAMアイデンティティ資産インベントリ",
    "Identities with excessive policies": "過剰なポリシーを持つアイデンティティ",
    "Identities with unused permissions": "未使用の権限を持つアイデンティティ",
    "Identity Security Findings": "アイデンティティセキュリティの検出結果",
    "Inactive identities": "非アクティブなアイデンティティ",
    "List": "リスト",
    "Management Group": "管理グループ",
    "Non-Human Identities": "人間以外のアイデンティティ",
    "Number of admins from total number of Identities": "アイデンティティ総数に対する管理者数",
    "Policies": "ポリシー",
    "Read": "読み取り",
    "Resource": "リソース",
    "Resource Group": "リソースグループ",
    "Risk Assessments": "リスク評価",
    "Show all issues >": "すべてのイシューを表示 >",
    "Subscription": "サブスクリプション",
    "Top Critical Issues to Address": "対処すべき主要な重大イシュー",
    "Top Identities at Risk": "リスクの高いアイデンティティトップ",
    "Top Issues to improve your Identity Security": "アイデンティティセキュリティを改善するための主要なイシュー",
    "Unified Human Identities": "統合された人間のアイデンティティ",
    "View policies": "ポリシーを表示",
    "We’ve identified the most pressing vulnerabilities to help secure your identity.":
      "アイデンティティのセキュリティ確保に役立つ、最も重要な脆弱性を特定しました。",
    "Write": "書き込み",
  },

  patterns: [
    // "121 Empty Groups" -> "空のグループ 121件"
    { re: /^([\d,]+)\s+Empty Groups$/, tpl: "空のグループ $1件" },
    // "4,993 MFA Disabled" -> "MFA無効 4,993件"
    { re: /^([\d,]+)\s+MFA Disabled$/, tpl: "MFA無効 $1件" },
    // "0 Weak Passwords" -> "脆弱なパスワード 0件"
    { re: /^([\d,]+)\s+Weak Passwords$/, tpl: "脆弱なパスワード $1件" },
    // "6,829 Service Accounts" -> "サービスアカウント 6,829件"
    { re: /^([\d,]+)\s+Service Accounts$/, tpl: "サービスアカウント $1件" },
    // "7,074 Secrets" -> "シークレット 7,074件"
    { re: /^([\d,]+)\s+Secrets$/, tpl: "シークレット $1件" },
    // "1,632 Admin" -> "管理者 1,632件"
    { re: /^([\d,]+)\s+Admin$/, tpl: "管理者 $1件" },
    // "1,449 Sensitive Access" -> "機密アクセス 1,449件"
    { re: /^([\d,]+)\s+Sensitive Access$/, tpl: "機密アクセス $1件" },
    // "6,181 Inactive" -> "非アクティブ 6,181件"
    { re: /^([\d,]+)\s+Inactive$/, tpl: "非アクティブ $1件" },
    // "Where can this VCS Collaborator access?" -> "このVCS Collaboratorはどこにアクセスできますか?"
    { re: /^Where can this (.+) access\?$/, tpl: "この$1はどこにアクセスできますか?" },
    // "This identity has access to 3 assets" -> "このアイデンティティは3件の資産にアクセスできます"
    { re: /^This identity has access to (\d+) assets?$/, tpl: "このアイデンティティは$1件の資産にアクセスできます" },
    // "0 Tactics" / "1 Tactic" -> "戦術 N件"
    { re: /^(\d+)\s+Tactics?$/, tpl: "戦術 $1件" },
    // "0 Techniques" / "1 Technique" -> "テクニック N件"
    { re: /^(\d+)\s+Techniques?$/, tpl: "テクニック $1件" },
    // "11,633 issues" -> "11,633 件のイシュー"
    { re: /^(\d[\d,]*)\s+issues$/, tpl: "$1 件のイシュー" },
    // "148 admins at risk" -> "リスクのある管理者 148 名"
    { re: /^(\d[\d,]*)\s+admins at risk$/, tpl: "リスクのある管理者 $1 名" },
  ],

  skip: [
    // チャートライブラリの帰属表示
    // Chart-library attribution text.
    /^Created with Highcharts/,
  ],
};
