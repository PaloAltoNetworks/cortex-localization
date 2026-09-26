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

const dictionaryApplicationSecurity = {
  exact: {
    "Application Security Asset Inventory Summary": "アプリケーションセキュリティ資産インベントリサマリー",
    "Dashboard ID": "ダッシュボードID",
    "Cloud Resource": "クラウドリソース",
    "Urgency Breakdown": "緊急度の内訳",
    "Overdue": "期限超過",
    "On Track": "順調",
    "Approaching": "接近中",
    "SLA Status": "SLAステータス",
    "Not Urgent Issues with Incomplete Code-to-Cloud Traceability": "Code-to-Cloudトレーサビリティが不完全な、緊急ではないイシュー",
    "Not Urgent": "緊急ではない",
    "Urgent": "緊急",
    "OWASP Categories": "OWASPカテゴリ",
    "Automated Fix Code Lines": "自動修正コード行数",
    "Cloud Resource ID": "クラウドリソースID",
    "First Commit Hash Date": "初回コミットハッシュ日",
    "Run ID": "実行ID",
    "Last Commit Date": "最終コミット日",
    "Last Hash": "最終ハッシュ",
    "Removal Git User": "削除したGitユーザー",
    "Rule Category": "ルールカテゴリ",
    "Rule ID Link": "ルールIDリンク",
    "Rule Subcategory": "ルールサブカテゴリ",
    "Validation": "検証",
    "Validation Link": "検証リンク",
    "Issue Backlog Status": "イシューのバックログステータス",
    "Ingestion Method": "取り込み方法",
    "Found in History": "履歴内で検出",
    "Max Business Criticality": "最大ビジネス重要度",
    "Is CWE Top 25": "CWE Top 25かどうか",
    "Is OWASP Top 10": "OWASP Top 10かどうか",
    "IaC Resource Has YOR Tag": "IaCリソースにYORタグがあるか",
    "Assets with all relevant scanners active": "関連するすべてのスキャナーが有効な資産",
    "Assets with some scanners active": "一部のスキャナーが有効な資産",
    "Assets without any scanner active": "有効なスキャナーがない資産",
    "All onboarded assets distributed by coverage of scan": "スキャンのカバレッジ別に分布した、オンボード済みのすべての資産",
    "All data sources detected in your organization and their level of coverage": "組織内で検出されたすべてのデータソースと、そのカバレッジレベル",
    "All scan types, including 3rd party ingestions, and their coverage across onboarded, relevant assets":
      "サードパーティ製の取り込みを含むすべてのスキャンタイプと、オンボード済みの関連資産全体におけるそのカバレッジ",
    "Rescan": "再スキャン",
    "Export SBOM": "SBOMをエクスポート",
    "0 assets added in the past 7 days": "過去7日間で追加された資産は0件です",
    "ASPM Coverage": "ASPMカバレッジ",
    "Azure Repos": "Azure Repos",
    "Bitbucket": "Bitbucket",
    "Coverage by Scanner Type": "スキャナータイプ別カバレッジ",
    "Coverage by Status": "ステータス別カバレッジ",
    "Covered": "カバー済み",
    "Findings By Type": "タイプ別の検出結果",
    "Issues By Type": "タイプ別のイシュー",
    "Scan Date:": "スキャン日:",
    "Is Fixable": "修正可能かどうか",
    "Approved OSI": "OSI承認済み",
    "Filter in": "含めるフィルター",
    "Filter out": "除外フィルター",
    "GitHub": "GitHub",
    "GitHub Actions": "GitHub Actions",
    "GitLab": "GitLab",
    "Gitlab CI/CD": "GitLab CI/CD",
    "IaC": "IaC",
    "JFrog Artifactory": "JFrog Artifactory",
    "Onboarding by Data Source": "データソース別オンボーディング",
    "Oracle Cloud Infrastructure": "Oracle Cloud Infrastructure",
    "SAST": "SAST",
    "SCA": "SCA",
    "Dashboard Link": "ダッシュボードリンク",
    "Sharing": "共有",
    "Has Critical Cases": "重大なケースの有無",
    "Has Low Cases": "低のケースの有無",
    "Has High Cases": "高のケースの有無",
    "Has Medium Cases": "中のケースの有無",
    "Asset Provider": "アセットプロバイダー",
    "Instance": "インスタンス",
    "Is scanned by vulnerabilities": "脆弱性スキャン対象かどうか",
    "Is scanned by code weakness": "コードの弱点スキャン対象かどうか",
    "Is scanned by secrets": "シークレットスキャン対象かどうか",
    "Is scanned by IaC": "IaCスキャン対象かどうか",
    "Is scanned by Malware": "マルウェアスキャン対象かどうか",
    "Is scanned by CICD": "CI/CDスキャン対象かどうか",
    "Scanners Data": "スキャナーデータ",
    "Last Scan Status": "最終スキャンステータス",
    "Status Coverage": "ステータスカバレッジ",
    "Is scanned by Veracode": "Veracodeスキャン対象かどうか",
    "Is scanned by Semgrep": "Semgrepスキャン対象かどうか",
    "Is scanned by SonarQube": "SonarQubeスキャン対象かどうか",
    "Is scanned by Snyk": "Snykスキャン対象かどうか",
    "Is scanned by Checkmarx": "Checkmarxスキャン対象かどうか",
    "Vendor Name": "ベンダー名",
    "Supply Chain Tool Scan Types": "サプライチェーンツールのスキャンタイプ",
    "Supply Chain Tool ID": "サプライチェーンツールID",
    "Supply Chain Tool Name": "サプライチェーンツール名",
    "Supply Chain Tool Category": "サプライチェーンツールカテゴリ",
    "No policies found. Please visit the policies page to create a policy": "ポリシーが見つかりません。ポリシーページからポリシーを作成してください",
    "Detection Rate": "検出率",
    "Missing Detection": "検出未対応",
    "Missing Prevention": "防止未対応",
    "New Objective": "新しい目標",
    "Objectives": "目標",
    "Objectives by owner": "オーナー別目標",
    "Open cases breakdown by severity": "重要度別のオープンケース内訳",
    "Prevention Rate": "防止率",
    "Remediation Rate": "修復率",
    "Create Policy >": "ポリシーを作成 >",
    "AppSec Dashboard": "AppSecダッシュボード",
    "AppSec Objectives": "AppSec目標",
    "AppSec Coverage": "AppSecカバレッジ",
    "Application Management": "アプリケーション管理",
    "Branch Periodic Scans": "ブランチ定期スキャン",
    "Pull Request Scans": "プルリクエストスキャン",
    "CI Scans": "CIスキャン",
    "Open fix pull request": "修正のプルリクエストを開く",
    "Approve": "承認",
    "Reject": "却下",
    "Approved": "承認済み",
    "Rejected": "却下済み",
    "Last Updated:": "最終更新:",
    "Usage:": "使用状況:",
    "Displays a prioritized list of the most critical security issues with available fixes.":
      "修正が利用可能な、最も重大なセキュリティイシューを優先順位付けした一覧を表示します。",
    "Displays the most frequently triggered AppSec policies, ranked by the number of high and critical issues identified.":
      "検出された高・重大なイシューの件数でランク付けした、最も頻繁にトリガーされたAppSecポリシーを表示します。",
    "Backlog status": "バックログステータス",
    "Bitbucket Repository": "Bitbucketリポジトリ",
    "Build blockers": "ビルドブロッカー",
    "CI/CD Pipelines": "CI/CDパイプライン",
    "CI/CD Risks": "CI/CDリスク",
    "Code Weakness": "コードの弱点",
    "Create Application >": "アプリケーションを作成 >",
    "GitHub Repository": "GitHubリポジトリ",
    "GitLab Repository": "GitLabリポジトリ",
    "IaC Misconfiguration Scanner": "IaC設定ミス スキャナー",
    "IaC Misconfigurations": "IaC設定ミス",
    "Issue generators": "イシュージェネレーター",
    "Last 7 Days": "過去7日間",
    "Licenses": "ライセンス",
    "Licenses Scanner": "ライセンス スキャナー",
    "Malicious": "悪意のある",
    "Malicious Packages": "悪意のあるパッケージ",
    "Notice": "お知らせ",
    "Number of open from total issues": "全イシュー中のオープン数",
    "Open Issues by AppSec Scanner": "AppSecスキャナー別オープンイシュー",
    "Open Issues by SLA": "SLA別オープンイシュー",
    "Open Issues by Urgency and Scan type": "緊急度・スキャンタイプ別オープンイシュー",
    "Package Integrity Scanner": "パッケージ整合性スキャナー",
    "Package Operational Risk": "パッケージ運用リスク",
    "Pipelines": "パイプライン",
    "PR blockers": "PRブロッカー",
    "Repositories": "リポジトリ",
    "Scanner": "スキャナー",
    "Secrets": "シークレット",
    "Secrets Scanner": "シークレットスキャナー",
    "Severities": "重要度",
    "Show All": "すべて表示",
    "The selected time filter is not carried over when navigating to another page. Counts may differ.":
      "選択した期間フィルターは他のページに移動すると引き継がれません。件数が異なる場合があります。",
    "Top Issues to Address": "対処すべき主要なイシュー",
    "Top Pipelines at Risk": "リスクの高いパイプライントップ",
    "Top Policies to Address": "対処すべき主要なポリシー",
    "Top Repositories at Risk": "リスクの高いリポジトリトップ",
    "Vulnerabilities Scanner": "脆弱性スキャナー",
  },

  patterns: [
    // "472Overdue" -> "472件 期限超過"
    { re: /^(\d[\d,]*)Overdue$/, tpl: "$1件 期限超過" },
    // "88On Track" -> "88件 順調"
    { re: /^(\d[\d,]*)On Track$/, tpl: "$1件 順調" },
    // "4Approaching" -> "4件 接近中"
    { re: /^(\d[\d,]*)Approaching$/, tpl: "$1件 接近中" },
    // "ECR has 67/67 Onboarded Registries." -> "ECRには、オンボード済みのレジストリが67/67件あります。"
    { re: /^(.+) has (\d+)\/(\d+) Onboarded Registries\.$/, tpl: "$1には、オンボード済みのレジストリが$2/$3件あります。" },
    // "GitLab has 13/13 Onboarded VCS Repositories." -> "GitLabには、オンボード済みのVCSリポジトリが13/13件あります。"
    { re: /^(.+) has (\d+)\/(\d+) Onboarded VCS Repositories\.$/, tpl: "$1には、オンボード済みのVCSリポジトリが$2/$3件あります。" },
    // "GitHub Actions has 10/10 Onboarded CI/CD Pipelines." -> "GitHub Actionsには、オンボード済みのCI/CDパイプラインが10/10件あります。"
    { re: /^(.+) has (\d+)\/(\d+) Onboarded CI\/CD Pipelines\.$/, tpl: "$1には、オンボード済みのCI/CDパイプラインが$2/$3件あります。" },
    // "Azure Pipelines has 18/18 Onboarded ." -> "Azure Pipelinesには、オンボード済みが18/18件あります。"
    // 原文自体に「Onboarded」の後に来る対象名(Registries等)が入っておらず、
    // "Onboarded ."という欠落した形で表示されている。原文の形をそのまま
    // 反映して翻訳する。
    // The source text itself is missing the noun that normally follows
    // "Onboarded" (e.g. "Registries") and renders as "Onboarded ." with
    // nothing in between. The translation mirrors that as-is.
    { re: /^(.+) has (\d+)\/(\d+) Onboarded \.$/, tpl: "$1には、オンボード済みが$2/$3件あります。" },
    // "231 / 248 relevant assets are covered by SCA" -> "SCAでカバーされている関連資産: 231 / 248"
    { re: /^(\d+)\s*\/\s*(\d+)\s+relevant assets are covered by\s+(.+)$/, tpl: "$3でカバーされている関連資産: $1 / $2" },
    // "Fully Covered (53%)" -> "完全にカバー済み (53%)"
    { re: /^Fully Covered\s+(\(.+\))$/, tpl: "完全にカバー済み $1" },
    // "Not Covered (4%)" -> "カバーされていません (4%)"
    { re: /^Not Covered\s+(\(.+\))$/, tpl: "カバーされていません $1" },
    // "Partially Covered (43%)" -> "部分的にカバー済み (43%)"
    { re: /^Partially Covered\s+(\(.+\))$/, tpl: "部分的にカバー済み $1" },
    // "N Fixable" -> "N 件修正可能"
    { re: /^(\d[\d,.]*)\s+Fixable$/, tpl: "$1 件修正可能" },

    // ステータス+件数のバッジ
    // Status-plus-count badges.
    { re: /^Approaching\s+(\(.+\))$/, tpl: "接近中 $1" },
    { re: /^Top Urgent\s+(\(.+\))$/, tpl: "最重要緊急 $1" },
    { re: /^Urgent\s+(\(.+\))$/, tpl: "緊急 $1" },
    { re: /^Overdue\s+(\(.+\))$/, tpl: "期限超過 $1" },
    { re: /^Critical\s+(\(.+\))$/, tpl: "重大 $1" },
    { re: /^High\s+(\(.+\))$/, tpl: "高 $1" },
    { re: /^Medium\s+(\(.+\))$/, tpl: "中 $1" },
    { re: /^Low\s+(\(.+\))$/, tpl: "低 $1" },
    // "Remediation Rate < 50%" -> "修復率 < 50%"
    { re: /^Remediation Rate\s*([<>]=?)\s*(\d+)%$/, tpl: "修復率 $1 $2%" },
    // "Detection Rate < 50%" -> "検出率 < 50%"
    { re: /^Detection Rate\s*([<>]=?)\s*(\d+)%$/, tpl: "検出率 $1 $2%" },
    // "Prevention Rate < 50%" -> "防止率 < 50%"
    { re: /^Prevention Rate\s*([<>]=?)\s*(\d+)%$/, tpl: "防止率 $1 $2%" },
  ],

  skip: [
    // 個別の検出結果(日時・CVE・パッケージバージョンを含む、完全動的)
    // Per-finding text (date, CVE, package version — fully dynamic).
    /^First discovered on /,
    /^CVE-\d{4}-\d+ in /,
    // スキャナー種別が不明なバグ表示
    // A bug display where the scanner type is unknown.
    /^undefined Scanner$/,
    // チャートライブラリの帰属表示
    // Chart-library attribution text.
    /^Created with Highcharts/,
  ],
};
