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

const dictionaryForensics = {
  exact: {
    // --- Forensics(フォレンジック調査・証跡収集)画面 ---
    // --- Forensics (investigation & evidence collection) screen ---
    "Forensic Investigations": "フォレンジック調査",
    "Investigation": "調査",
    "Evidence Collections": "証跡コレクション",
    "New Issues": "新規イシュー",
    "New Investigation": "新しい調査",
    "Create New Investigation": "新しい調査を作成",
    "investigation Name": "調査名",
    "Your investigation Name": "調査名を入力してください",
    "Save & Start A Collection": "保存してコレクションを開始",
    "Available to adopt": "採用可能",
    "Override Report mode?": "Reportモードを上書きしますか?",
    "Allow agents to block file hashes even when the Malware Profile is set to Report":
      "マルウェアプロファイルがReportに設定されている場合でも、エージェントがファイルハッシュをブロックできるようにします",
    "Override": "上書き",
    "Endpoint name or IP": "エンドポイント名またはIP",
    "TOTAL ITEMS": "合計アイテム数",
    "NEW ISSUES": "新規イシュー",
    "LAST RECEIVED": "最終受信",

    // --- コマンド履歴/検索結果グリッドの列 ---
    // --- Command history / search-results grid columns ---
    "Command History": "コマンド履歴",
    "Collection ID": "コレクションID",
    "Command": "コマンド",
    "File Created": "ファイル作成日時",
    "File Modified": "ファイル更新日時",
    "Generated Time": "生成日時",
    "Investigation ID": "調査ID",
    "Line": "行",
    "Result ID": "結果ID",
    "Row UUID": "行UUID",
    "Search ID": "検索ID",
    "User SID": "ユーザーSID",

    "Legacy Forensics": "レガシーフォレンジック",
    "Legacy Artifact Collections - Windows": "レガシーアーティファクトコレクション - Windows",
    "Timezone and Timestamp": "タイムゾーンとタイムスタンプ",
    "*This is a global application change, you can review in":
      "*これはアプリケーション全体に適用される変更です。次の場所で確認できます:",
    "Example:": "例:",
    "Archive History": "アーカイブ履歴",

    // --- リモートアクセスツールのログ/アーティファクト画面 ---
    // --- Remote access tool logs / artifact screen ---
    "Remote Access": "リモートアクセス",
    "Connection ID": "接続ID",
    "Connection Type": "接続タイプ",
    "Message": "メッセージ",
    "Source Host": "ソースホスト",
    "Source Row UUID": "ソース行UUID",
    "Alias": "エイリアス",
    "AnyDesk Id": "AnyDesk ID",
    "Log Accessed": "ログアクセス日時",
    "Log Created": "ログ作成日時",
    "Log File": "ログファイル",
    "Log Modified": "ログ更新日時",
    // サイドバーの証跡種別一覧(LogMeIn/TeamViewerはブランド名のため
    // 未翻訳のまま。AnyDesk~/User Access Loggingは説明的な名称のため翻訳)。
    // Sidebar list of evidence types (LogMeIn/TeamViewer are left untranslated as brand names;
    // AnyDesk ~ / User Access Logging are translated since they are descriptive names).
    "AnyDesk Connection Logs": "AnyDeskの接続ログ",
    "AnyDesk Trace Logs": "AnyDeskのトレースログ",
    "User Access Logging": "ユーザーアクセスログ",

    // --- アーティファクト詳細の共通列(削除ファイル/エントリ系) ---
    // --- Artifact-detail common columns (deleted file/entry type) ---
    "Accessed": "アクセス日時",
    "Deleted": "削除日時",
    "Entry Created": "エントリ作成日時",
    "Entry Modified": "エントリ更新日時",
    "Original Path": "元のパス",
    "Deleted Data": "削除されたデータ",
    "Entry": "エントリ",
    "Key Last Modified": "キー最終更新日時",
    "MRU Order": "MRU順序",
    "Value Path": "値のパス",
    "Context": "コンテキスト",
    "Executable Name": "実行ファイル名",
    "Executable Path": "実行ファイルパス",

    // --- 「File Access」アーティファクトのサイドバー(すべて/Jumplists/
    // OpenSavePidlMRU/Recent Files/ShellBags/TypedPaths)。OpenSavePidlMRUや
    // ShellBags、TypedPathsはWindowsのレジストリキー名そのものであり、
    // フォレンジック調査では日本語でもこの英語名で参照されるため未翻訳。
    // --- "File Access" artifact sidebar (All/Jumplists/OpenSavePidlMRU/Recent Files/ShellBags/
    // TypedPaths). OpenSavePidlMRU, ShellBags, and TypedPaths are literal Windows registry key
    // names, and are referenced by these same English names even in Japanese forensics work,
    // so they are left untranslated.
    "File Access": "ファイルアクセス",
    "Jumplists": "ジャンプリスト",
    "Recent Files": "最近使用したファイル",

    // --- 「Network Data」アーティファクトのサイドバー ---
    // --- "Network Data" artifact sidebar ---
    "Network Data": "ネットワークデータ",
    "Interface": "インターフェース",
    "ARP Cache": "ARPキャッシュ",
    "DNS Cache": "DNSキャッシュ",
    "Hosts File": "hostsファイル",

    // --- 「System Statistics」アーティファクトのサイドバー、および
    // フォアグラウンド/バックグラウンドの各種利用状況メトリクス列 ---
    // --- "System Statistics" artifact sidebar, and the foreground/background usage-metric columns ---
    "System Statistics": "システム統計",
    "Application Resource Usage": "アプリケーションリソース使用状況",
    "Network Connectivity Usage": "ネットワーク接続使用状況",
    "Network Data Usage": "ネットワークデータ使用状況",
    "Background Bytes Read": "バックグラウンド読み取りバイト数",
    "Background Bytes Written": "バックグラウンド書き込みバイト数",
    "Background Context Switches": "バックグラウンドコンテキストスイッチ数",
    "Background Cycle Time": "バックグラウンドサイクルタイム",
    "Background Num Read Operations": "バックグラウンド読み取り操作数",
    "Background Num Write Operations": "バックグラウンド書き込み操作数",
    "Background Number Of Flushes": "バックグラウンドフラッシュ数",
    "Face Time": "フェイスタイム",
    "Foreground Bytes Read": "フォアグラウンド読み取りバイト数",
    "Foreground Bytes Written": "フォアグラウンド書き込みバイト数",
    "Foreground Context Switches": "フォアグラウンドコンテキストスイッチ数",
    "Foreground Cycle Time": "フォアグラウンドサイクルタイム",
    "Foreground Num Read Operations": "フォアグラウンド読み取り操作数",
    "Foreground Num Write Operations": "フォアグラウンド書き込み操作数",
    "Foreground Number Of Flushes": "フォアグラウンドフラッシュ数",
    "User Searches": "ユーザー検索",

    // --- 「実行履歴」系アーティファクトのサイドバー(すべて/Amcache/
    // Background Activity Monitor/CidSizeMRU/LastVisitedPidlMRU/Prefetch/
    // Recentfilecache/Shimcache/UserAssist/Windows Activities)。Amcache、
    // CidSizeMRU、LastVisitedPidlMRU、Prefetch、Recentfilecache、
    // Shimcache、UserAssistはWindowsのレジストリキー/機能名そのもので
    // あり、フォレンジック調査では日本語でもこの英語名で参照されるため
    // 未翻訳。Background Activity MonitorとWindows Activitiesは説明的な
    // 名称のため翻訳する。
    // --- "Execution history"-type artifact sidebar (All/Amcache/Background Activity Monitor/
    // CidSizeMRU/LastVisitedPidlMRU/Prefetch/Recentfilecache/Shimcache/UserAssist/Windows
    // Activities). Amcache, CidSizeMRU, LastVisitedPidlMRU, Prefetch, Recentfilecache, Shimcache,
    // and UserAssist are literal Windows registry key/feature names, referenced by these same
    // English names even in Japanese forensics work, so they are left untranslated. Background
    // Activity Monitor and Windows Activities are translated since they are descriptive names.
    "Background Activity Monitor": "バックグラウンドアクティビティモニター",
    "Windows Activities": "Windowsアクティビティ",

    // --- 「Network Indicators」「Data Access」タブ、詳細パネルの列見出し ---
    // --- "Network Indicators"/"Data Access" tabs, detail-panel column headers ---
    "Network Indicators": "ネットワーク指標",
    "Data Access": "データアクセス",
    "Earliest Activity": "最初のアクティビティ",
    "Latest Activity": "最新のアクティビティ",
    "Log Search": "ログ検索",
    "Browser History": "ブラウザ履歴",

    // --- Collections(トリアージ/ハントコレクション作成ウィザード) ---
    // --- Collections (triage/hunt collection creation wizard) ---
    "Exports": "エクスポート",
    "Export all": "すべてエクスポート",
    "Collections": "コレクション",
    "New Collection": "新しいコレクション",
    "New Triage Collection": "新しいトリアージコレクション",
    "triage collection name": "トリアージコレクション名",
    "Add Collection Name": "コレクション名を追加",
    "triage type": "トリアージタイプ",
    "Select triage type": "トリアージタイプを選択",
    "No endpoints. Please add triage type onlineif you would like to automate triage collections on specified endpoints.":
      "エンドポイントがありません。特定のエンドポイントでトリアージコレクションを自動化する場合は、オンラインのトリアージタイプを追加してください。",
    "Please hit Next to continue": "続行するには「Next」をクリックしてください",
    "Save Collection and Exit": "コレクションを保存して終了",
    "Volatiles": "揮発性データ",
    "File Collections": "ファイルコレクション",
    "Custom File Collections": "カスタムファイルコレクション",
    "Complete Configuration": "設定を完了",
    "Save new preset": "新しいプリセットを保存",
    "Select Presets (macOS)": "プリセットを選択(macOS)",
    "Offline": "オフライン",
    "Online": "オンライン",
    "Select Presets (Windows)": "プリセットを選択(Windows)",
    "Select Presets (Linux)": "プリセットを選択(Linux)",
    "No Collections Yet": "コレクションはまだありません",
    "Start adding collections": "コレクションの追加を開始",
    "hunt collection name": "ハントコレクション名",
    "New Hunt Collection": "新しいハントコレクション",
    "maximum concurrent endpoints": "同時実行の最大エンドポイント数",
    "One-Time Collection": "1回限りのコレクション",
    "Repeat Collection Every": "次の間隔でコレクションを繰り返す",
    "Valid range time must be at least 1 hr. Scheduled hunts are executed based on the time zone of the agent":
      "有効な範囲は1時間以上である必要があります。スケジュールされたハントは、エージェントのタイムゾーンに基づいて実行されます",

    // --- 調査(Investigation)画面: 自動化/Playbook設定と、エンドポイント
    // 対応アクションの結果表示 ---
    // --- Investigation screen: automation/Playbook configuration, and
    // endpoint response-action result display ---
    "New Playbook": "新しいPlaybook",
    "Hide Script Helper": "スクリプトヘルパーを非表示",
    "Upload a file": "ファイルをアップロード",
    "Edit Automation Rule": "自動化ルールを編集",
    "To add rule conditions, select a field and its value using the filter or right-click on a table cell to select that field and value.":
      "ルール条件を追加するには、フィルターを使用してフィールドとその値を選択するか、テーブルのセルを右クリックしてそのフィールドと値を選択してください。",
    "Select Automation": "自動化を選択",
    "Action Last Update": "アクションの最終更新",
    "Scanning Complete": "スキャン完了",
    "Hash": "ハッシュ",
    "FILE PATHS": "ファイルパス",
    "Download definitions file": "定義ファイルをダウンロード",
    // "investigation"は小文字始まりのまま(表記揺れ)。実際の表示テキストと
    // 完全一致させるためそのまま採用。「クローズ」は既存の"Close Reason"/
    // "Close User"(ケースのクローズ関連)に合わせた表記。
    // "investigation" is kept lowercase to match the actual displayed text (a casing
    // inconsistency in the product). "クローズ" matches the existing "Close Reason"/
    // "Close User" (case-closing) terminology.
    "Edit investigation": "調査を編集",
    "Close investigation": "調査をクローズ",
    "Add Name": "名前を追加",
    // スケジュール入力(例: 「次の間隔でコレクションを繰り返す」)の時間単位
    // ドロップダウン("Hrs"/"Days"等)の選択肢。
    // A time-unit dropdown option (e.g. "Hrs"/"Days") in a schedule input such as
    // "Repeat Collection Every".
    "Hrs": "時間",
    "Invalid time range selected, Please enter a valid range, minimum 1 hour.":
      "無効な時間範囲が選択されました。1時間以上の有効な範囲を入力してください。",

    // --- 調査(Investigation)画面: コメント欄、および許可/ブロックリストへの
    // 移動、「エンドポイントを分離」アクション ---
    // --- Investigation screen: the comment section, moving values to the
    // allow/block list, and the "Isolate endpoint" action ---
    "Add comment": "コメントを追加",
    "Enter a comment": "コメントを入力してください",
    "Edit comment": "コメントを編集",
    // "case"が小文字始まりのまま(表記揺れ)。実際の表示テキストと完全一致
    // させるためそのまま採用。調査の詳細パネルに表示される、関連ケースの
    // IDを編集する操作。
    // "case" is kept lowercase to match the actual displayed text (a casing inconsistency
    // in the product). Edits the ID of the case associated with this investigation, shown in
    // the investigation's detail panel.
    "Edit case ID": "ケースIDを編集",
    // 調査内のハッシュ/インジケーターを許可リストへ移動するアクション。
    // xql-search.jsの"Add to allow list"(許可リストに追加)とは異なる操作
    // (Move)のため、別エントリとして追加。
    // Moves a hash/indicator from within an investigation to the allow list. A different
    // action from xql-search.js's "Add to allow list", so added as a separate entry.
    "Move to allow list": "許可リストに移動",
    // 上と同じ要領で、ブロックリストへの移動。
    // Same as above, but moving to the block list instead.
    "Move to block list": "ブロックリストに移動",
    "Value is already added to block list": "この値は既にブロックリストに追加されています",

    // --- 調査内の「エンドポイントを分離」アクション ---
    // --- The "Isolate endpoint" action from within an investigation ---
    "ISOLATE ENDPOINTS": "エンドポイントを分離",
    // "You are about to isolate"の直後に、対象数を表す別要素(例: "1 endpoint"、
    // 下のpatternsで処理)が続く。文が2つの要素に分かれているため、この部分
    // だけでは主語・目的語が完結しない訳文になるが、実際の表示ではコロンの後に
    // 件数が続く形でまとまる。
    // Followed immediately by a separate element giving the target count (e.g. "1 endpoint",
    // handled in patterns below). Since the sentence is split across two elements, this part
    // alone doesn't form a fully self-contained translation, but reads naturally once the count
    // follows the colon in the actual UI.
    "You are about to isolate": "分離しようとしています:",
    // endpoint-policy-management.jsの"Isolation will block host network access, except for
    // traffic to Cortex XDR."と似ているが、"host"ではなく"endpoint"、末尾のピリオドも無い
    // (実際の表示テキストと完全一致させるため、別エントリとして追加)。
    // Similar to endpoint-policy-management.js's "Isolation will block host network access,
    // except for traffic to Cortex XDR." but says "endpoint" instead of "host" and has no
    // trailing period (added as a separate entry to exact-match the actual displayed text).
    "Isolation will block endpoint network access, except for traffic to Cortex XDR":
      "分離すると、Cortex XDRへの通信を除き、エンドポイントのネットワークアクセスがブロックされます",
    "Edit isolation comment": "分離コメントを編集",
    // 原文が"Cancel isolation?"ではなく"Cancel isolate?"(文法的にやや不自然)
    // だが、実際の表示テキストと完全一致させるためそのまま採用。
    // The original text says "Cancel isolate?" rather than the more natural "Cancel
    // isolation?", but kept verbatim here to exact-match what's actually displayed.
    "Cancel isolate?": "分離をキャンセルしますか?",
    "Note: Cancellation is not guaranteed if the action is in progress by the time the request is processed.":
      "注: リクエストが処理される時点でアクションが進行中の場合、キャンセルが保証されるとは限りません。",
    "Cancel action": "アクションをキャンセル",
    // "Cancel action"(汎用)とは別に、アクション種別ごとの個別のキャンセル
    // 操作ボタン/確認ダイアログが存在する。"Cancel isolate?"(分離用)と同様、
    // ファイルの取得(files retrieval。general-settings.jsの小文字表記の
    // アクション名一覧を参照)用の個別のキャンセル操作。
    // Alongside the generic "Cancel action", there are per-action-type cancel buttons/confirm
    // dialogs. Like "Cancel isolate?" (for isolation), these are the file-retrieval-specific
    // cancel action (see "files retrieval" in general-settings.js's lowercase action-name list).
    "Cancel files retrieval": "ファイルの取得をキャンセル",
    "Cancel files retrieval?": "ファイルの取得をキャンセルしますか?",
    // 上の"Cancel isolate?"(確認ダイアログ)とは別に存在する、ボタン等の
    // ラベル用の表記(疑問符なし)。
    // A separate label (no question mark), used on a button etc., distinct from the "Cancel
    // isolate?" confirmation-dialog text above.
    "Cancel isolation": "分離をキャンセル",
    // 保留中のアクション(分離/ファイルの取得等)の有効期限を更新する操作。
    // general-settings.jsの"Action Center Expiration"(有効期限は作成から
    // 1〜30日で設定可能。更新は"pending"状態のアクションにのみ影響)と同種の概念。
    // Updates the expiration of a pending action (isolation, file retrieval, etc.) — the same
    // concept as general-settings.js's "Action Center Expiration" (expiration can be set
    // within 1-30 days from creation; updating it only affects actions in "pending" status).
    "Update expiration": "有効期限を更新",
  },

  patterns: [
    // "Detailed Results - Resume Endpoint Protection (ID 107)" -> "詳細な結果 - Resume Endpoint Protection(ID 107)"
    // アクション種別名(可変)は他画面のアクション名一覧(general-settings.js
    // 等、小文字表記の"resume endpoint protection"等)と別管理のため、ここでは
    // 未翻訳のまま維持する。
    // The action-type name (variable) is managed separately from the lowercase action-name list
    // elsewhere (e.g. "resume endpoint protection" in general-settings.js), so it is left
    // untranslated here.
    { re: /^Detailed Results - (.+) \(ID (\d+)\)$/, tpl: "詳細な結果 - $1(ID $2)" },
    // 「エンドポイントを分離」/「アクションをキャンセル」ダイアログの対象数
    // ("1 endpoint"、"5 endpoints"等)。
    // Target count in the "Isolate endpoint" / "Cancel action" dialogs (e.g. "1 endpoint",
    // "5 endpoints").
    { re: /^(\d+)\s+endpoints?$/, tpl: "$1件のエンドポイント" },
    // "This pending action will be canceled for 1 endpoint." -> "この保留中のアクションは、1件のエンドポイントに対してキャンセルされます。"
    { re: /^This pending action will be canceled for\s+(\d+)\s+endpoints?\.$/,
      tpl: "この保留中のアクションは、$1件のエンドポイントに対してキャンセルされます。" },
    // "Changing isolation comment for rrischer-ubuntu-cortecli" -> "rrischer-ubuntu-cortecliの分離コメントを変更中"
    // エンドポイント名(識別子)部分は未翻訳のまま維持する。
    // The endpoint name (an identifier) is left untranslated.
    { re: /^Changing isolation comment for\s+(.+)$/, tpl: "$1の分離コメントを変更中" },
  ],

  skip: [],
};
