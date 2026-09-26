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

const dictionaryDataIngestion = {
  exact: {
    "Data Ingestion": "データ取り込み",

    "All": "すべて",
    "All Sources": "すべてのソース",
    "Cloud Logging": "クラウドロギング",
    "Current Day Ingested": "当日の取り込み量",
    "Daily Consumption": "日次消費量",
    "Detailed Ingestion": "詳細な取り込み",
    "Found": "検出",
    "Ingestion Rate": "取り込みレート",
    "Last Day Ingested": "前日の取り込み量",
    "Last Seen": "最終確認",
    "Note: graph display is limited to top 100 results per day.":
      "注: グラフ表示は1日あたり上位100件の結果に制限されています。",
    "Product": "製品",
    "ProductS": "製品",
    "Products": "製品",
    "Vendor": "ベンダー",
    "Vendors": "ベンダー",
    "results": "結果",
    "no filter": "フィルターなし",
  },

  patterns: [
    // "N selected" -> "N 件選択中"
    { re: /^(\d+)\s+selected$/, tpl: "$1 件選択中" },
  ],

  skip: [],
};
