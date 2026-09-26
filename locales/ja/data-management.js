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

const dictionaryDataManagement = {
  exact: {
    // --- Dataset Management 画面 ---
    // --- Dataset Management screen ---
    "Cold Range": "コールド範囲",
    "Dataset": "データセット",
    "Dataset Name": "データセット名",
    "Dataset Views": "データセットビュー",
    "Hot Range": "ホット範囲",
    "Hot Storage License": "ホットストレージライセンス",
    "Log Update Type": "ログ更新タイプ",
    "Logs": "ログ",
    "Lookup": "ルックアップ",
    "Raw": "Raw",
    "System Audit": "システム監査",
    "Total Days Stored": "保存日数の合計",
    "Total Size Stored": "保存容量の合計",
    "Average Daily Size": "1日あたりの平均サイズ",
    "Average Event Size": "イベントあたりの平均サイズ",
    "Data tier": "データ階層",
    "Default Query Target": "デフォルトのクエリ対象",
    "Source Query": "ソースクエリ",
    "TTL": "TTL",
    "TTL(minutes)": "TTL(分)",
    "Total Events": "イベント総数",
    "Is Valid": "有効かどうか",
    "Related Tables": "関連テーブル",
    "New Dataset View": "新しいデータセットビュー",
    "Dataset View Name": "データセットビュー名",
    "Created At": "作成日時",
    "Add Lookup": "ルックアップを追加",
    "Upload a csv, tsv, or json file (max. 30MB) to be used as a dataset":
      "データセットとして使用するCSV、TSV、またはJSONファイルをアップロードしてください(最大30MB)",
    "Drag and Drop a file here": "ここにファイルをドラッグ&ドロップ",
    "browse": "参照して",
    "your files": "ファイルを選択",
    "Define dataset name": "データセット名を定義",

    // --- Parsing Rules 画面 ---
    // --- Parsing Rules screen ---
    "User Defined": "ユーザー定義",
    "Default Rules": "デフォルトルール",
    "Both": "両方",
    "Simulate": "シミュレート",
    "Event ID": "イベントID",
    "Input Logs": "入力ログ",
    "Line number": "行番号",
    "Logs output": "ログ出力",
    "No output logs": "出力ログがありません",
    "Output Logs": "出力ログ",
    "Raw log": "生ログ",
    "Show more": "もっと見る",
    "Success": "成功",
    "XQL Samples": "XQLサンプル",
    "Sample time": "サンプル時刻",
    "Layout": "レイアウト",
    "Filters": "フィルター",
    "Restore default layout": "デフォルトのレイアウトに戻す",
    "APPEARANCE": "外観",
    "LOG FORMAT": "ログ形式",
    "TREE": "ツリー",
    "Search column": "列を検索",
    "Remove all": "すべて削除",
    "Add all": "すべて追加",
    "You can change your parsing rules and try again": "解析ルールを変更して再度お試しください",

    // --- Compute Units Usage 画面 ---
    // --- Compute Units Usage screen ---
    "API Query": "APIクエリ",
    "Agent and LLM consumption is currently shown for informational purposes only and does not impact your Compute Unit balance.":
      "エージェントおよびLLMの消費量は現在、情報提供のみを目的として表示されており、コンピュートユニット残高には影響しません。",
    "Agentic Assistant": "エージェント型アシスタント",
    "Agents & LLM": "エージェントとLLM",
    "Compute Unit Usage": "コンピュートユニット使用量",
    "Compute units": "コンピュートユニット",
    "Consumption by category over time": "カテゴリ別の消費量の推移",
    "Daily limit": "1日あたりの上限",
    "LLM Task": "LLMタスク",
    "Notebook": "ノートブック",
    "Queries": "クエリ",
    "Set daily limit": "1日あたりの上限を設定",
    "Set a daily limit to manage your compute unit consumption. This helps distribute your annual quota over time and prevent early depletion.":
      "1日あたりの上限を設定することで、コンピュートユニットの消費量を管理できます。これにより、年間クォータを時間をかけて分配し、早期の枯渇を防ぐことができます。",
    "Queries limit": "クエリの上限",
    "No limit": "無制限",
    "This is your": "これは、あなたの",
    "Timestamp": "タイムスタンプ",
    "Total annual usage": "年間使用量の合計",
    "Trigger Type": "トリガータイプ",
    "Unused": "未使用",
    "Usage by type": "タイプ別の使用量",
    "XQL Queries": "XQLクエリ",
    "Billable": "課金対象",
    "Trigger/PAPI Key ID": "トリガー/PAPIキーID",
    "Query/Prompt": "クエリ/プロンプト",
  },

  patterns: [
    // "Cortex GB hot retention: 31 days" -> "Cortex GB ホット保持期間: 31日"
    { re: /^Cortex GB hot retention:\s*(\d+)\s*days$/, tpl: "Cortex GB ホット保持期間: $1日" },
    // "Cortex EP hot retention: 31 days" -> "Cortex EP ホット保持期間: 31日"
    { re: /^Cortex EP hot retention:\s*(\d+)\s*days$/, tpl: "Cortex EP ホット保持期間: $1日" },
    // "Cortex EP issues and cases hot retention: 186 days" -> "Cortex EP イシュー・ケース ホット保持期間: 186日"
    { re: /^Cortex EP issues and cases hot retention:\s*(\d+)\s*days$/, tpl: "Cortex EP イシュー・ケース ホット保持期間: $1日" },
    // "Cortex GB issues and cases hot retention: 186 days" -> "Cortex GB イシュー・ケース ホット保持期間: 186日"
    { re: /^Cortex GB issues and cases hot retention:\s*(\d+)\s*days$/, tpl: "Cortex GB イシュー・ケース ホット保持期間: $1日" },
    // "IN VIEW (5)" -> "表示中 (5)"
    { re: /^IN VIEW\s+(\(\d+\))$/, tpl: "表示中 $1" },
    // "ADD COLUMNS (1)" -> "追加可能な列 (1)"
    { re: /^ADD COLUMNS\s+(\(\d+\))$/, tpl: "追加可能な列 $1" },
    // "Divide annual quota evenly" と "[55 per day]" は別々のテキスト
    // ノードに分割されているため、それぞれ個別にパターン化する
    // "Divide annual quota evenly" and "[55 per day]" render as separate text
    // nodes, so each is pattern-matched individually.
    { re: /^Divide annual quota evenly$/, tpl: "年間クォータを均等に分配" },
    { re: /^(\d+)% of annual quota$/, tpl: "年間クォータの$1%" },
    { re: /^\[(\d+) per day\]$/, tpl: "[1日あたり$1件]" },
  ],

  skip: [],
};
