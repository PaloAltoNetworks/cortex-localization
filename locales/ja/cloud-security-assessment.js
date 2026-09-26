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

const dictionaryCloudSecurityAssessment = {
  exact: {
    "Cloud Security Assessment": "クラウドセキュリティアセスメント",

    "Issues By Status": "ステータス別イシュー",
    "Issues by status": "ステータス別イシュー",
    "Open Issues By Severity": "重要度別オープンイシュー",
    "Open Issues By Violation Type": "違反タイプ別オープンイシュー",
    "Open Issues count": "オープンイシュー数",
    "Open issues by severity": "重要度別オープンイシュー",
    "Open issues by violation type": "違反タイプ別オープンイシュー",
    "Top Open Issues by Rule": "ルール別の主要なオープンイシュー",
    "issues": "イシュー",
    "rule": "ルール",
    "severity": "重要度",

    // --- 重要度バッジ(大文字表記の列挙値) ---
    // --- Severity badges (uppercase enum values) ---
    "CRITICAL": "重大",
    "HIGH": "高",
    "MEDIUM": "中",
    "LOW": "低",
    "NEW": "新規",
    "IN_PROGRESS": "進行中",
    "RESOLVED": "解決済み",

    // --- カテゴリバッジ(大文字表記の列挙値) ---
    // --- Category badges (uppercase enum values) ---
    "ATTACK PATH": "アタックパス",
    "ATTACK_PATH": "アタックパス",
    "CODE": "コード",
    "CONFIGURATION": "設定",
    "DATA": "データ",
    "IDENTITY": "アイデンティティ",
    "POSTURE": "ポスチャー",
    "VULNERABILITY": "脆弱性",
  },

  patterns: [],

  skip: [
    // ファイルパスを含む個別の検出結果メッセージ(完全に動的)
    // Per-finding message containing a file path (fully dynamic).
    /found in \//,
  ],
};
