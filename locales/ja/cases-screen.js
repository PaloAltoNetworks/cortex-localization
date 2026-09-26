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

const dictionaryCasesScreen = {
  exact: {
    "All Cases": "すべてのケース",
    "Manual Fix": "手動修正",
    "Manage case team": "ケースチームを管理",
    "All Tasks": "すべてのタスク",
    "Save new view": "新しいビューを保存",
    "Revert changes": "変更を元に戻す",
    "Add to favorites": "お気に入りに追加",
    "Set as Default": "デフォルトに設定",
    "Update User Permissions": "ユーザー権限を更新",
    "Update Asset Configuration": "資産設定を更新",
    "Select Action": "アクションを選択",
    "Issues grouped": "グループ化されたイシュー",
    "issues created": "作成されたイシュー",
    "system automatic updates": "システムの自動更新",
    "Severity changed": "重要度が変更されました",
    "Activities": "アクティビティ",
    "Add a new timeline record": "新しいタイムラインレコードを追加",
    "Query Execution ID": "クエリ実行ID",
    "Attach File": "ファイルを添付",
    "Select file": "ファイルを選択",
    "Mark record as evidence": "レコードを証拠としてマーク",
    "Record Name": "レコード名",
    "Record Creation Time": "レコード作成日時",
    "Evidence Comment": "証拠コメント",
    "Record ID": "レコードID",
    "Timelines": "タイムライン",
    "Evidence Flag Time": "証拠フラグの日時",
    "Evidence Flag By": "証拠フラグの設定者",
    "We couldn't find any results matching your filters. Try adjusting your filters.": "フィルターに一致する結果が見つかりませんでした。フィルターを調整してみてください。",
    "Case activity": "ケースアクティビティ",
    "Detection": "検出",
    "System update": "システム更新",
    "Add a new comment here...": "ここに新しいコメントを追加してください...",
    "Key Assets": "主要資産",
    "were added to the case because they relate to the same asset": "が、同じ資産に関連するためケースに追加されました",
    "Assignee": "担当者",
    "Case Domain": "ケースドメイン",
    "In Progress": "進行中",
    "Last Updated": "最終更新",
    "Modified": "変更済み",
    "New case": "新規ケース",
    "Resolution Timer": "解決タイマー",
    "Press ENTER to sort. Press CTRL ENTER to open filter":
      "Enterキーでソート、Ctrl+Enterでフィルターを開く",

    // --- ビュー一覧サイドバー ---
    // --- View list sidebar ---
    "All Views": "すべてのビュー",
    "System": "システム",
    "Updated": "更新日",
    "Default View": "デフォルトビュー",

    // --- ケースのカテゴリ(ドメイン) ---
    // --- Case category (domain) ---
    "Health Domain": "ヘルスドメイン",
    "Hunting Domain": "ハンティングドメイン",
    "IT Domain": "ITドメイン",
    "Posture Domain": "ポスチャードメイン",
    "Security Domain": "セキュリティドメイン",

    // --- テーブルカラム/その他 ---
    // --- Table column / other ---
    "Case ID": "ケースID",
    "Legacy Status": "レガシーステータス",
    "Updates available": "更新あり",
    "Ensure that authorization for Docker client commands is enabled":
      "Dockerクライアントコマンドの認可が有効になっていることを確認してください",

    // --- カラム選択メニュー ---
    // --- Column-selection menu ---
    "Select all": "すべて選択",
    "Reset": "リセット",
    "Creation Time": "作成日時",
    "Predicted score": "予測スコア",
    "Case Description": "ケースの説明",
    "Asset IDs": "アセットID",
    "Asset Names": "アセット名",
    "Asset Classes": "アセットクラス",
    "Asset Categories": "アセットカテゴリ",
    "Asset Regions": "アセットリージョン",
    "Asset Providers": "アセットプロバイダー",
    "Asset Accounts": "アセットアカウント",
    "Asset Types": "アセットタイプ",
    "Business Application Names": "ビジネスアプリケーション名",
    "Asset Cloud Account Names": "アセットクラウドアカウント名",
    "Asset External Provider IDs": "アセット外部プロバイダーID",
    "Hosts": "ホスト",
    "MITRE ATT&CK Tactic": "MITRE ATT&CK 戦術",
    "MITRE ATT&CK Technique": "MITRE ATT&CK テクニック",
    "Issue Categories": "イシューカテゴリ",
    "WildFire Hits": "WildFireヒット数",
    "Critical Severity Issues": "重大なイシュー数",
    "High Severity Issues": "高重要度のイシュー数",
    "Medium Severity Issues": "中重要度のイシュー数",
    "Low Severity Issues": "低重要度のイシュー数",
    "Users": "ユーザー",
    "Resolved Timestamp": "解決日時",
    "Resolution Comment": "解決コメント",
    "Starred": "お気に入り",
    "Case Detection Methods": "ケース検出方法",
    "Last Issue Arrived At": "最終イシュー到着日時",
    "Tags": "タグ",
    "Original Tags": "元のタグ",
    "Assignee Email": "担当者のメールアドレス",
    "Resolution SLA": "解決SLA",
    "Case Team": "ケースチーム",
    "Access Mode": "アクセスモード",
    "Issues Grouping Status": "イシューのグループ化ステータス",
    "Add field": "フィールドを追加",
    "Case Details": "ケース詳細",
    "Category:": "カテゴリ:",
    "Choose existing issue/s": "既存のイシューを選択",
    "Choose which playbook will run": "実行するPlaybookを選択してください",
    "Create a new issue": "新しいイシューを作成",
    "Create new case": "新しいケースを作成",
    "Host IP:": "ホストIP:",
    "Host Name:": "ホスト名:",
    "Issue Details": "イシュー詳細",
    "Issue Fields": "イシューフィールド",
    "Legacy Domain:": "レガシードメイン:",
    "Link issue to this case": "このケースにイシューをリンク",
    "Local IP:": "ローカルIP:",
    "Name:": "名前:",
    "Open complete MITRE matrix": "MITREマトリクス全体を開く",
    "Playbook": "Playbook",
    "Remote Host:": "リモートホスト:",
    "Remote IP:": "リモートIP:",
    "Remote Port:": "リモートポート:",
    "Reset form": "フォームをリセット",
    "Restore default system fields": "デフォルトのシステムフィールドに戻す",
    "Select a Playbook": "Playbookを選択",
    "Select:": "選択:",
    "Set fields as default for new Security domain cases": "新しいSecurityドメインのケースにこのフィールドをデフォルトとして設定",
    "Severity:": "重要度:",
    "User name:": "ユーザー名:",
    "Automatically by trigger": "トリガーによる自動実行",
    "Case War Room": "ケース対応ルーム",
    "Detailed View": "詳細ビュー",
    "Issues & Insights": "イシューとインサイト",
    "Key Assets & Artifacts": "主要な資産とアーティファクト",
    "Timeline": "タイムライン",
    "Case created": "ケースが作成されました",
    "Issue created": "イシューが作成されました",
    "Resolution Center": "解決センター",
    "View Related Issues": "関連するイシューを表示",
    "Open in Asset Inventory": "資産インベントリで開く",
    "Check the Pending and Recommended tabs to get started": "はじめに、保留中タブと推奨タブを確認してください",
    "New recommendations will appear here": "新しい推奨事項がここに表示されます",
    "No action required": "対応不要",
    "No actions are currently running": "現在実行中のアクションはありません",
    "No actions have completed yet": "完了したアクションはまだありません",
    "No recommendations": "推奨事項なし",
    "No comments": "コメントなし",
    "Add a comment to start the discussion": "コメントを追加してディスカッションを開始してください",
    "Hi! What's on your mind?": "こんにちは!何か気になることはありますか?",
    "Artifacts": "アーティファクト",
    "No associated artifacts": "関連するアーティファクトはありません",
    "All records": "すべてのレコード",
    "Add Record": "レコードを追加",
    "Occurred At": "発生日時",
    "Created Time": "作成日時",
    "Ascending": "昇順",
    "Descending": "降順",
    "List View": "リストビュー",
    "Journal View": "ジャーナルビュー",
    "Chats": "チャット",
    "Notes": "メモ",
    "Files": "ファイル",
    "Case history": "ケース履歴",
    "Commands and playbook tasks": "コマンドとPlaybookタスク",
    "Issue history": "イシュー履歴",
    "Commands and task results": "コマンドとタスク結果",
    "Drop file here": "ここにファイルをドロップ",
    "Case grouping is active": "ケースのグループ化が有効",
    "Case grouping is inactive": "ケースのグループ化が無効",
    "New related issues will automatically be grouped into the case": "新しい関連イシューは自動的にこのケースにグループ化されます",

    // --- ケースのWar Room内のクエリ実行パネル(実行ボタン・実行済みクエリ一覧) ---
    // --- Query-execution panel inside the case's War Room (run button and executed-query list) ---
    "Load more results": "結果をもっと見る",
    "Run query": "クエリを実行",
    "Run in same tab": "同じタブで実行",
    "Run in new tab": "新しいタブで実行",
    "Save query to Library": "クエリをライブラリに保存",
    "Rename": "名前を変更",
    "Show executed queries": "実行済みのクエリを表示",
    "Remove": "削除",
    "Show executed queries in new tab": "実行済みのクエリを新しいタブで表示",
    "Show executed queries in same tab": "実行済みのクエリを同じタブで表示",
    "Choose issues": "イシューを選択",

    "Issue Context Data": "イシューのコンテキストデータ",
    "Layout Info": "レイアウト情報",
    "Review the actions below to help resolve the issue.": "以下のアクションを確認して、イシューの解決にお役立てください。",
    "Choose an automation to execute.": "実行する自動化を選択してください。",
    "There is no playbook attached to this case": "このケースにはPlaybookが添付されていません",
    "No recommendations available.": "利用可能な推奨事項はありません。",
    "Choose a playbook": "Playbookを選択",
    "No entries yet. Commands, actions and updates will be displayed here.":
      "まだ項目がありません。コマンド、アクション、更新はここに表示されます。",
    "You're all caught up! Check the Recommended tab to continue.":
      "すべて対応済みです。続けるには推奨タブを確認してください。",
    "Your completed tasks will show up here, helping you track your progress":
      "完了したタスクはここに表示され、進捗の把握に役立ちます",
    "Edit case details": "ケース詳細を編集",
    "Summarize with AI": "AIで要約",
    "AI generates a title and description that summarize the case. For single-issue cases, the issue’s name and description are displayed.":
      "AIがケースを要約するタイトルと説明を生成します。単一のイシューからなるケースの場合は、そのイシューの名前と説明が表示されます。",
    "Case title": "ケースのタイトル",
    "Star case": "ケースにスターを付ける",
    "Copy case URL": "ケースのURLをコピー",
    "Switch to legacy view": "レガシービューに切り替え",
    "View context data": "コンテキストデータを表示",
    "Comments": "コメント",
    "Notepad": "メモ帳",
    "Grouping graph": "グループ化グラフ",
    "Merge Cases": "ケースを統合",
    "Insert the Case ID to merge the cases with": "統合するケースIDを入力してください",
    "Insert Case ID": "ケースIDを入力してください",
    "Select the calculation method of the merged cases": "統合後のケースのスコア計算方法を選択してください",
    "Rule-based Score": "ルールベースのスコア",
    "(Case score is recalculated to include merged cases)": "(統合されたケースを含めてケースのスコアが再計算されます)",
    "Manual score": "手動スコア",
    "Merge": "統合",

    // --- 「Starring Policy」(注目ポリシー)の編集画面 ---
    // --- "Starring Policy" edit screen ---
    "configuration name": "設定名",
    "Import featured hosts": "注目ホストをインポート",
    "Add featured hosts": "注目ホストを追加",
    "Import featured users": "注目ユーザーをインポート",
    "Add featured users": "注目ユーザーを追加",
    "Import featured IP Addresses": "注目IPアドレスをインポート",
    // 元のテキストは"IP"部分のみ小文字("ip addresses")という表記揺れが
    // あるが、実際の表示テキストと完全一致させるためそのまま採用。
    // The original text has inconsistent casing ("ip addresses" in lowercase); kept verbatim here
    // so this still exact-matches what's actually displayed on screen.
    "Add featured ip addresses": "注目IPアドレスを追加",
    "Define a value between 0 and 100": "0から100の間の値を入力してください",
    "Add Configuration": "設定を追加",
    // 元のテキストが単数形("Configuration")のまま("Configurations"に
    // なっていない)が、実際の表示テキストと完全一致させるためそのまま採用。
    // The original text uses the singular "Configuration" (not "Configurations"); kept verbatim
    // here so this still exact-matches what's actually displayed on screen.
    "There are no starring Configuration": "注目設定がありません",
    "Use In Query": "クエリで使用",
  },

  patterns: [
    // 'Run "GCP Network Exposure - Auto-remediate" automation for multiple issues' -> '複数のイシューに対して「GCP Network Exposure - Auto-remediate」自動化を実行'
    { re: /^Run "(.+)" automation for multiple issues$/, tpl: "複数のイシューに対して「$1」自動化を実行" },
    // "3 Activities" -> "アクティビティ 3件"
    { re: /^(\d+)\s+Activities$/, tpl: "アクティビティ $1件" },
    // "2 alerts" -> "2件のアラート"
    { re: /^(\d+)\s+alerts?$/, tpl: "$1件のアラート" },
    // "Missing 3 required field(s)" -> "3件の必須フィールドが未入力です"
    { re: /^Missing\s+(\d+)\s+required field\(s\)$/, tpl: "$1件の必須フィールドが未入力です" },
    // "0 Tactics and 0 Techniques" -> "0件の戦術と0件のテクニック"
    { re: /^(\d+)\s+Tactics? and\s+(\d+)\s+Techniques?$/, tpl: "$1件の戦術と$2件のテクニック" },
    // "Assets (1)" -> "資産 (1)"
    { re: /^Assets\s+(\(\d+\))$/, tpl: "資産 $1" },
    // "Issues grouping is disabled because the case is open for more than 30 days" -> "ケースが30日以上開いているため、イシューのグループ化は無効になっています"
    { re: /^Issues grouping is disabled because the case is open for more than\s+(\d+)\s+days$/, tpl: "ケースが$1日以上開いているため、イシューのグループ化は無効になっています" },
    // "Issues grouping is disabled because the last issue was triggered more than 14 days ago" -> "最後のイシューがトリガーされてから14日以上経過しているため、イシューのグループ化は無効になっています"
    { re: /^Issues grouping is disabled because the last issue was triggered more than\s+(\d+)\s+days ago$/, tpl: "最後のイシューがトリガーされてから$1日以上経過しているため、イシューのグループ化は無効になっています" },
    // "2,835 out of 852,904 results" -> "852,904件中2,835件の結果"
    { re: /^([\d,]+)\s+out of\s+([\d,]+)\s+results$/, tpl: "$2件中$1件の結果" },

    // "51 out of 51 selected" -> "51件中51件選択中"
    { re: /^([\d,]+)\s+out of\s+([\d,]+)\s+selected$/, tpl: "$2件中$1件選択中" },

    // 経過時間表記(解決タイマー等) "22d 11h 25m" のような組み合わせ
    // Elapsed-time notation (resolution timer, etc.), combinations like "22d 11h 25m".
    { re: /^(\d+)d\s+(\d+)h\s+(\d+)m$/, tpl: "$1日$2時間$3分" },
    { re: /^(\d+)d\s+(\d+)m$/, tpl: "$1日$2分" },
    { re: /^(\d+)d\s+(\d+)h$/, tpl: "$1日$2時間" },
    { re: /^(\d+)h\s+(\d+)m$/, tpl: "$1時間$2分" },
    { re: /^(\d+)d$/, tpl: "$1日" },
    { re: /^(\d+)h$/, tpl: "$1時間" },
    { re: /^(\d+)m$/, tpl: "$1分" },
    // "Edit Starring Policy #1" -> "注目ポリシー #1を編集"
    { re: /^Edit Starring Policy #(\d+)$/, tpl: "注目ポリシー #$1を編集" },
  ],

  skip: [
    // CVE番号を含む個別の検出結果タイトル(完全に動的)
    // Per-finding title containing a CVE number (fully dynamic).
    /along with \d+ other issues$/,
  ],
};
