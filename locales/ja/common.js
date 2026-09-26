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

const dictionaryCommon = {
  exact: {
    "Score": "スコア",
    "CVSS": "CVSS",
    "EPSS": "EPSS",
    "Vulnerability": "脆弱性",
    "Assets": "資産",
    "Publish Date": "公開日",
    "Display": "表示",
    "Collapse": "折りたたむ",
    "Expand": "展開",
    "Added on": "追加日",
    "Add filters": "フィルターを追加",
    "Clear All": "すべてクリア",
    "Click to open list": "クリックしてリストを開く",
    "Click to filter": "クリックしてフィルター",
    "Actions": "アクション",
    "Critical": "重大",
    "High": "高",
    "Medium": "中",
    "Low": "低",
    "Status": "ステータス",
    "Category": "カテゴリ",
    "Severity": "重要度",
    "Refresh": "更新",
    "Search": "検索",
    "Settings": "設定",
    "Help": "ヘルプ",
    "Dashboard": "ダッシュボード",
    "Dashboards": "ダッシュボード一覧",
    "Dashboards & Reports": "ダッシュボードとレポート",
    "Dashboards Manager": "ダッシュボードマネージャー",
    "Cases": "ケース",
    "Cases & Issues": "ケースとイシュー",
    "Issue": "イシュー",
    "Issues": "イシュー",
    "Open": "オープン",
    "Closed": "クローズ",

    // --- 左ナビゲーション(全ダッシュボード共通) ---
    // --- Left navigation (common to all dashboards) ---
    "Action Center": "アクションセンター",
    "Agentic Assistant Hub": "エージェント型アシスタントハブ",
    "AI Prompts": "AIプロンプト",
    "AI Security": "AIセキュリティ",
    "All Assets": "すべての資産",
    "All Endpoints": "すべてのエンドポイント",
    "Analytics Rules": "分析ルール",
    "Application Security": "アプリケーションセキュリティ",
    "Attack Surface": "アタックサーフェス",
    "Attack Surface Issues": "アタックサーフェスイシュー",
    "Automation": "自動化",
    "Automation Rules": "自動化ルール",
    "Back to main": "メインに戻る",
    "BIOC": "BIOC",
    "IOC": "IOC",
    "Case Configuration": "ケース設定",
    "Code to Cloud Coverage": "Code to Cloud カバレッジ",
    "Compliance": "コンプライアンス",
    "Configurations": "設定",
    "Correlations": "相関分析",
    "Data Security": "データセキュリティ",
    "Detection Rules": "検出ルール",
    "Device Control Violations": "デバイス制御違反",
    "Disk Encryption Visibility": "ディスク暗号化の可視性",
    "Endpoints": "エンドポイント",
    "File Integrity Monitoring": "ファイル整合性監視",
    "Forensics": "フォレンジック",
    "Graph Search": "グラフ検索",
    "Groups": "グループ",
    "Host Firewall": "ホストファイアウォール",
    "Host Insights": "ホストインサイト",
    "Identity Security": "アイデンティティセキュリティ",
    "Installations": "インストール",
    "Inventory": "インベントリ",
    "Investigation & Response": "調査と対応",
    "Kubernetes Security": "Kubernetesセキュリティ",
    "Live Terminal": "ライブターミナル",
    "Modules": "モジュール",
    "Playbooks": "Playbook",
    "Playground": "プレイグラウンド",
    "Policy Management": "ポリシー管理",
    "Posture Management": "ポスチャー管理",
    "Query Center": "クエリセンター",
    "Query Templates": "クエリテンプレート",
    "Reports": "レポート",
    "Response": "対応",
    "Risk Scores": "リスクスコア",
    "Rules & Policies": "ルールとポリシー",
    "Scheduled Queries": "スケジュールクエリ",
    "Scripts": "スクリプト",
    "Supply Chain Security": "サプライチェーンセキュリティ",
    "Tenant Navigator": "テナントナビゲーター",
    "Threat Management": "脅威管理",
    "Vulnerability Management": "脆弱性管理",
    "XQL Search": "XQL検索",
    "Select": "選択",
    "Select..": "選択..",

    // --- ウィジェット共通の空/エラー状態 ---
    // --- Widget common empty/error states ---
    "Feature Unavailable": "機能が利用できません",
    "Inadequate License": "ライセンス不足",
    "No Permissions": "権限がありません",
    "No Results Found": "結果が見つかりません",
    "No data": "データなし",
    "No data is available as the dataset configured for this widget doesn't exist.":
      "このウィジェットに設定されたデータセットが存在しないため、データがありません。",
    "Private Widget": "非公開ウィジェット",
    "This asset is not associated with any groups": "この資産はどのグループにも関連付けられていません",
    "This widget has been deleted.": "このウィジェットは削除されました。",
    "This widget is unavailable.": "このウィジェットは利用できません。",
    "Widget Deleted": "ウィジェットは削除されました",
    "You do not have permission to view this private widget":
      "この非公開ウィジェットを表示する権限がありません",
    "You don't have the license required to view this widget.":
      "このウィジェットを表示するために必要なライセンスがありません。",
    "You don't have the permissions required to view this widget.":
      "このウィジェットを表示するために必要な権限がありません。",

    // --- ag-Grid共通UI ---
    // --- ag-Grid common UI ---
    "Drag here to set column labels": "ここにドラッグして列ラベルを設定",
    "Drag here to set row groups": "ここにドラッグして行グループを設定",
    "Pin Column": "列を固定",
    "Hide Column": "列を非表示",
    "Autosize column": "列の幅を自動調整",
    "Autosize all columns": "すべての列の幅を自動調整",
    "Row Height": "行の高さ",
    "Column Fit": "列のフィット",
    "Compact": "コンパクト",
    "Specious": "ゆったり",
    "Fit Content": "コンテンツに合わせる",
    "Distribute": "均等に分配",
    "Fill Content": "コンテンツで埋める",
    "Details": "詳細",
    "Discover Now": "今すぐ検出",
    "Copy text to clipboard": "テキストをクリップボードにコピー",
    "Copy entire row": "行全体をコピー",
    "Show empty rows": "空の行を表示",
    "Hide empty rows": "空の行を非表示",
    "Include empty values": "空の値を含める",
    "Open in VirusTotal": "VirusTotalで開く",
    "Open in Agentic Assistant": "Agentic Assistantで開く",
    "Open in Editor": "エディタで開く",
    "Duplicate": "複製",
    "Share": "共有",
    "Change owner": "所有者を変更",
    "Revert": "元に戻す",
    "View saved filters": "保存済みフィルターを表示",
    "Export filters": "フィルターをエクスポート",
    "View Examples": "サンプルを表示",
    "Edit": "編集",
    "Save as New": "新規として保存",
    "(Clear Selection)": "(選択を解除)",
    "Username": "ユーザー名",
    "Password": "パスワード",
    "View": "表示",
    "Cards view": "カード表示",
    "Learn more": "詳細はこちら",
    "Export to file": "ファイルにエクスポート",
    "Type your search here": "ここに検索語を入力してください",
    "Search by name or description": "名前または説明で検索",
    "here": "ここ",
    "Please fill out this field.": "この項目を入力してください。",
    "Discard changes?": "変更を破棄しますか?",
    "Unsaved Changes": "未保存の変更",
    "You have unsaved changes. Are you sure you want to leave? All unsaved data will be lost.":
      "保存されていない変更があります。このまま離れてもよろしいですか?保存されていないデータはすべて失われます。",
    "Unsaved changes will be lost.": "保存されていない変更は失われます。",
    "Discard": "破棄",
    "Changes will not be saved.": "変更は保存されません。",
    "Discard changes": "変更を破棄",
    "Changes were not saved, if you proceed you will lose your changes":
      "変更は保存されていません。続行すると変更内容は失われます",
    "Press SPACE to select this row": "スペースキーでこの行を選択",
    "Press SPACE to deselect this row": "スペースキーでこの行の選択を解除",
    "You must enter name": "名前を入力してください",
    "Enter Name": "名前を入力",
    "Enter Email": "メールアドレスを入力",
    "Search in table...": "テーブル内を検索...",
    // "Search...": 汎用の検索窓のplaceholderで、多くは実データ(英語)への
    // 部分一致検索のため、日本語で入力しても検索できない。「検索...」と
    // 訳すと日本語入力でも検索できるように誤解させるため、翻訳しない
    // (エントリ自体を削除して原文のまま表示する)。
    // "Search...": the placeholder of generic search boxes. Most of them do a substring match against
    // the underlying (English) data, so Japanese input never matches. Translating it to "検索..." would
    // mislead the user into thinking Japanese input works, so this entry is removed (left untranslated,
    // showing the original English).
    "Define a value here...": "ここに値を入力してください...",
    "Remove filters": "フィルターを削除",
    "Save filters": "フィルターを保存",
    "Save Filter": "フィルターを保存",
    "filter name": "フィルター名",
    "Share this filter": "このフィルターを共有",
    "Show filter panel": "フィルターパネルを表示",
    "Hide filter panel": "フィルターパネルを非表示",
    "Group ID": "グループID",
    "Installers": "インストーラー",
    "Command and Control": "コマンド&コントロール",
    "Credential Access": "認証情報へのアクセス",
    "Defense Impairment": "防御機能の妨害",
    "Discovery": "探索",
    "Execution": "実行",
    "Exfiltration": "持ち出し",
    "Initial Access": "初期アクセス",
    "Lateral Movement": "横展開",
    "Persistence": "永続化",
    "Privilege Escalation": "権限昇格",
    "Reconnaissance": "偵察",
    "Resource Development": "リソース開発",
    "Add description here": "ここに説明を追加",
    "Specify description": "説明を入力してください",
    "Remove description": "説明を削除",
    "Enter description": "説明を入力してください",
    "Hide Widgets": "ウィジェットを非表示",
    "Show Widgets": "ウィジェットを表示",

    // --- 複数ダッシュボードで共通の警告/リンク ---
    // --- Warnings/links common to multiple dashboards ---
    "License Violation warning": "ライセンス違反の警告",
    "See Data Ingestion": "データ取り込みを表示",
    "Open Issues": "オープンイシュー",
    "Compliance Score": "コンプライアンススコア",
    "Not Applicable": "該当なし",
    "not applicable": "該当なし",
    "Other": "その他",
    "Workloads": "ワークロード",
    "cloud account": "クラウドアカウント",
    "Cloud": "クラウド",
    "Identity": "アイデンティティ",
    "Network": "ネットワーク",
    "from last month": "先月から",
    "MTTR": "平均修復時間",
    "Last 24H": "過去24時間",
    "Last 30D": "過去30日間",
    "Custom": "カスタム",
    "Security Services": "セキュリティサービス",
    "Notifications": "通知",
    "Cortex CLOUD License": "Cortex CLOUD ライセンス",
    "Cortex - Analytics": "Cortex - アナリティクス",
    "Management Audit Logs": "管理監査ログ",
    "Agent Audit Logs": "エージェント監査ログ",
    "XDR Collector Audit Logs": "XDRコレクター監査ログ",
    "Health Issues": "健全性のイシュー",
    "Issue Exception & Exclusion": "イシューの例外と除外",
    "Data Sources & Integrations": "データソースと連携",

    // --- ツールチップ(ホバーで表示、ngb-popover-window内) ---
    // --- Tooltip (shown on hover, inside ngb-popover-window) ---
    "Connecting a data source does not imply that all detectors in the same category will be relevant for that source. Rule applicability should be assessed based on the specific context.":
      "データソースを接続しても、同じカテゴリ内のすべての検出項目がそのソースに関連するとは限りません。ルールの適用可否は個別の状況に応じて判断してください。",

    // --- 「戦術とテクニックを選択」モーダル(MITRE ATT&CKマトリクス、複数画面で共有) ---
    // 個々のテクニック/サブテクニック名(セルの可変テキスト)自体は、
    // content.js側でAI翻訳(動的翻訳)の対象にしている。
    // --- "Select tactics and techniques" modal (the MITRE ATT&CK matrix, shared across screens) ---
    // The individual technique/sub-technique names (each cell's variable text) are instead made
    // eligible for AI (dynamic) translation on the content.js side.
    "Select tactics and techniques": "戦術とテクニックを選択",
    "sub-technique": "サブテクニック",
    // アイコンのスクリーンリーダー用ラベル(視覚的には非表示)。
    // Screen-reader-only labels for icons (not visible on screen).
    "mitre logo": "MITREロゴ",
    "free search": "フリー検索",
  },

  patterns: [
    // "Supported format: CSV" -> "対応形式: CSV"(汎用のファイルアップロード
    // コンポーネント<u-file-upload-dropzone-hint>のヒント文言。拡張子部分は
    // 未翻訳のまま維持する)
    // "Supported format: CSV" -> "対応形式: CSV" (the hint text of the generic
    // <u-file-upload-dropzone-hint> file-upload component; the format/extension part is left untranslated)
    { re: /^Supported format:\s*(.+)$/, tpl: "対応形式: $1" },

    // "N results" -> "N 件の結果"(カンマ区切りの数字にも対応)
    { re: /^([\d,]+)\s+results$/, tpl: "$1 件の結果" },

    // "+N More" -> "他 N 件"
    { re: /^\+\s*(\d+)\s+[Mm]ore$/, tpl: "他 $1 件" },

    // "1 Selected" (大文字小文字を問わない) -> "1 件選択中"
    { re: /^(\d+)\s+selected$/i, tpl: "$1 件選択中" },

    // "selected out of 38" (件数部分が別要素に分かれているケース)
    // -> "件が選択されています(全38件中)"
    { re: /^selected out of\s+([\d,]+)$/i, tpl: "件が選択されています(全$1件中)" },

    // "N Impacted Assets" -> "N 件の影響を受けた資産"
    { re: /^(\d[\d,.]*[KkMm]?)\s+Impacted Assets$/, tpl: "$1 件の影響を受けた資産" },

    // ヘッダーの通知件数 "Notifications  (99+)" -> "通知  (99+)"
    { re: /^Notifications\s+(\(.+\))$/, tpl: "通知 $1" },

    // "65 days" -> "65日" (MTTR等で使われる、日数単体の表記)
    // "65 days" -> "65日" (a bare day-count notation, used e.g. in MTTR).
    { re: /^(\d[\d,.]*)\s+days$/, tpl: "$1日" },

    // 取り込みクォータ超過の警告文(日付・日数部分が動的)
    // Ingestion-quota-exceeded warning (the date/day-count parts are dynamic).
    {
      re: /^Based on a (\d+) day average calculation from (.+) to (.+), your daily default ingestion quota is exceeded\. Increase your license limit or reduce your daily ingestion; otherwise, you can expect data processing delays or data not being collected by the application$/,
      tpl: "過去$1日間の平均計算($2〜$3)に基づき、1日あたりのデフォルト取り込みクォータを超過しています。ライセンス上限を引き上げるか、1日あたりの取り込み量を減らしてください。そうしない場合、データ処理の遅延やアプリケーションでデータが収集されない可能性があります。",
    },

    // ag-Gridの右クリックメニュー "Show rows with 'X'" / "Hide rows with 'X'"
    // ag-Grid's right-click menu: "Show rows with 'X'" / "Hide rows with 'X'".
    { re: /^Show rows with\s+(['"].*['"])$/, tpl: "$1 の行を表示" },
    { re: /^Hide rows with\s+(['"].*['"])$/, tpl: "$1 の行を非表示" },
    // ag-Gridの日付列フィルター "Show rows N days prior to 'X'" / "Show rows N days after 'X'"
    // ag-Grid's date-column filter: "Show rows N days prior to 'X'" / "Show rows N days after 'X'".
    { re: /^Show rows\s+(\d+)\s+days prior to\s+(['"].*['"])$/, tpl: "$2 の$1日前までの行を表示" },
    { re: /^Show rows\s+(\d+)\s+days after\s+(['"].*['"])$/, tpl: "$2 の$1日後までの行を表示" },
    // XIFエディタの見出し "User defined rules (Last updated on Jun 4th 2026)"
    // XIF editor heading: "User defined rules (Last updated on Jun 4th 2026)".
    { re: /^User defined rules\s*\(Last updated on\s+(.+)\)$/, tpl: "ユーザー定義ルール (最終更新: $1)" },
  ],

  skip: [
    // CVE番号+資産/ホスト名の個別検出結果(例: "CVE-2022-1471 vulnerability
    // in org.yaml_snakeyaml at rsam-mas-tl-jenkins-docker")のみ除外する。
    // 単に"CVE-"で始まるだけでスキップすると、Supply Chain Attacksの
    // 説明文(例: MongoBleed, React2Shell, Log4Shell)もCVE番号から
    // 始まるため、辞書に登録済みでも誤ってスキップされてしまう。
    // Excludes only a per-finding text combining a CVE number with an asset/host name
    // (e.g. "CVE-2022-1471 vulnerability in org.yaml_snakeyaml at rsam-mas-tl-jenkins-docker").
    // Skipping anything that merely starts with "CVE-" would also wrongly skip Supply Chain
    // Attacks' own descriptions (e.g. for MongoBleed, React2Shell, Log4Shell), which likewise
    // start with a CVE number, even though those already have a dictionary entry.
    /^CVE-\d{4}-\d+ vulnerability in/,
    // Malware検知メッセージなど、テンプレート化が複雑な文章
    // Malware-detection messages and other text too complex to templatize.
    /Malware was detected in/i,
    /during RUNTIME scanning/i,
    // ag-Grid内部のコンポーネント/クラス名
    // Internal ag-Grid component/class names.
    /^AG-[A-Z-]+$/,
    // 時刻を含む動的な更新表示(将来パターン化を検討)
    // Dynamic "last updated" display that includes a time (a pattern-based rule may be worth
    // adding for this later).
    /^Last updated on/,
    // Sketch(デザインツール)のSVGメタデータ
    // SVG metadata left behind by the Sketch design tool.
    /^Created with Sketch\.$/,
    /^Generator: Sketch/,
    // 日時のタイムスタンプ表記(完全に動的)
    // Date/time timestamp text (fully dynamic).
    /^[A-Z][a-z]{2}\s+\d{1,2}(st|nd|rd|th)\s+\d{4}\s+\d{2}:\d{2}:\d{2}$/,
    // 日時のタイムスタンプ表記(別フォーマット: "August 28, 2026 at 11:02:33 AM UTC")
    // Date/time timestamp text (a different format), e.g. "August 28, 2026 at 11:02:33 AM UTC".
    /^[A-Z][a-z]+\s+\d{1,2},\s+\d{4}\s+at\s+\d{1,2}:\d{2}:\d{2}\s+[AP]M\s+UTC$/,
    // クラウドのリージョンコード(技術識別子、翻訳しない)
    // Cloud region codes (technical identifiers — not translated).
    /^[a-z]{2}-[a-z]+-\d+$/,
    /^global$/,
  ],
};
