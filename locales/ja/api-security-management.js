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

const dictionaryApiSecurityManagement = {
  exact: {
    "API Security Management": "APIセキュリティ管理",

    "Asset count by sensitive data type": "機密データ種別ごとの資産数",
    "Attack traffic over time": "攻撃トラフィックの推移",
    "Attacks Over Time": "攻撃の推移",
    "Attacks by Country of Origin": "発信元国別の攻撃",
    "Blocked Attacks": "ブロックされた攻撃",
    "High severity issues": "重要度の高いイシュー",
    "Last 24 Hours": "過去24時間",
    "Number of APIs": "APIの数",
    "Provider": "プロバイダー",
    "Risks by severity over time": "重要度別リスクの推移",
    "Risky API Funnel": "リスクのあるAPIファネル",
    "Sensitive Data": "機密データ",
    "Source": "ソース",
    "Total APIs": "APIの合計",
    "Total Attacks": "攻撃の合計",
    "Total Requests": "リクエストの合計",
    "Total Risks": "リスクの合計",
    "Total attacks per type": "種類別の攻撃合計",
    "Try to update or adjust your query filters": "クエリフィルターを更新または調整してください",
    "View by": "表示単位",
  },

  patterns: [],

  skip: [
    // ファネルチャート内部のステップ用ラベル(表示用テキストではない)
    // Internal step label inside a funnel chart (not display text).
    /^stairs level\d+$/,
  ],
};
