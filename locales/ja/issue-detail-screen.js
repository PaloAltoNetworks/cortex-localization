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

const dictionaryIssueDetailScreen = {
  exact: {
    "Affected Assets": "影響を受けた資産",
    "Action:": "アクション:",
    "Assignee:": "担当者:",
    "Cloud Configuration Issue Rule": "クラウド構成イシュールール",
    "Cloud Configuration Layout": "クラウド構成レイアウト",
    "Compute Policy": "コンピュートポリシー",
    "Copy issue URL": "イシューのURLをコピー",
    "Created:": "作成日:",
    "Detected (Scanned)": "検出済み(スキャン済み)",
    "Detection Logic": "検出ロジック",
    "Evidence": "証跡",
    "Issue Layout:": "イシューレイアウト:",
    "Linked Cases": "リンクされたケース",
    "No Changes": "変更なし",
    "Open in new tab": "新しいタブで開く",
    "Press SPACE to select this row": "スペースキーでこの行を選択",
    "Resolution": "解決",
    "Status:": "ステータス:",
    "Triggered by rule:": "トリガールール:",
    "Updated:": "更新日:",
    "War Room": "ウォールーム",
    "Work Plan": "作業計画",

    // --- 組み込みルール名(固定カタログ) ---
    // --- Built-in rule names (fixed catalog) ---
    "Auditd unmonitored file permission changes found":
      "Auditdでファイル権限変更が監視されていません",
    "Auditd unmonitored kernel module loading and unloading found":
      "Auditdでカーネルモジュールのロード/アンロードが監視されていません",
    "Auditd unmonitored network configuration changes found":
      "Auditdでネットワーク構成変更が監視されていません",
    "Linux host with ICMP packet redirect enabled found":
      "ICMPパケットリダイレクトが有効なLinuxホストが見つかりました",
    "Linux host with unrestricted default user umask found":
      "デフォルトユーザーのumaskが制限されていないLinuxホストが見つかりました",
    "Linux host without AIDE service found": "AIDEサービスがないLinuxホストが見つかりました",
    "Minimum days between password changes is misconfigured":
      "パスワード変更間の最小日数が誤って設定されています",
  },

  patterns: [
    // "Open for 6 minutes" -> "6分間オープン"
    { re: /^Open for (\d+)\s+minutes?$/, tpl: "$1分間オープン" },
    { re: /^Open for (\d+)\s+hours?$/, tpl: "$1時間オープン" },
    { re: /^Open for (\d+)\s+days?$/, tpl: "$1日間オープン" },
  ],

  skip: [],
};
