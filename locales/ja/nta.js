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

const dictionaryNta = {
  exact: {
    "DNS Activity": "DNSアクティビティ",
    "DNS Response Codes": "DNS応答コード",
    "Daily DNS Queries": "1日あたりのDNSクエリ数",
    "Daily Threats": "1日あたりの脅威数",
    "Dataset Unavailable": "データセットが利用できません",
    "FAILED TO RUN QUERY": "クエリの実行に失敗しました",
    "From Zone": "送信元ゾーン",
    "GB Sent and Received": "送受信GB数",
    "Geo Locations": "地理的位置",
    "HTTP Activity": "HTTPアクティビティ",
    "HTTP Content Type": "HTTPコンテンツタイプ",
    "HTTP Method": "HTTPメソッド",
    "HTTP Response Code": "HTTP応答コード",
    "HTTP User Agent": "HTTPユーザーエージェント",
    "Network Zones": "ネットワークゾーン",
    "Overview": "概要",
    "Recent Threats": "最近の脅威",
    "The required dataset for this widget is not available.":
      "このウィジェットに必要なデータセットが利用できません。",
    "Threat Category": "脅威カテゴリ",
    "Threat Severity": "脅威の重要度",
    "Threat Sources": "脅威のソース",
    "Threats": "脅威",
    "To Zone": "宛先ゾーン",
    "Top App-IDs": "上位App-ID",
    "Top Geo Locations": "上位地理的位置",
    "Transport Protocols": "トランスポートプロトコル",
    "URL Activity": "URLアクティビティ",
    "URL Categories": "URLカテゴリ",
    "URL Risk": "URLリスク",
    "Volume": "ボリューム",
    "Zones": "ゾーン",
  },

  patterns: [
    // "unknown field action." -> "不明なフィールド action。"
    { re: /^unknown field (\w+)\.$/, tpl: "不明なフィールド $1。" },
    // "+ 6 more" -> "他 6 件"
    { re: /^\+\s*(\d+)\s+more$/, tpl: "他 $1 件" },
  ],

  skip: [],
};
