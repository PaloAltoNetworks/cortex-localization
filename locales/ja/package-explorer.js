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

const dictionaryPackageExplorer = {
  exact: {
    "Deprecated packages": "非推奨パッケージ",
    "Samples": "サンプル",
    "Console URL": "コンソールURL",
    "Public URL": "公開URL",
    "Report false positive": "誤検知を報告",
    "Layer IDs": "レイヤーID",
    "Origin Package Name": "元のパッケージ名",
    "Symbols": "シンボル",
    "PURL": "PURL",
    "Copy PURL": "PURLをコピー",
    "Risk:": "リスク:",
    "Source Package": "ソースパッケージ",
    "Binaries": "バイナリ",
    "High-risk packages": "リスクの高いパッケージ",
    "Highlights": "ハイライト",
    "Package Type": "パッケージタイプ",
    "Packages currently classified as high operational risk":
      "現在高い運用リスクに分類されているパッケージ",
    "Packages highlights": "パッケージのハイライト",
    "Total used packages by development stage": "開発ステージ別の使用パッケージ合計",
    "Used In": "使用箇所",
  },

  patterns: [
    // "4 Malicious packages" -> "4件の悪意のあるパッケージ"
    { re: /^(\d+)\s+Malicious packages$/, tpl: "$1件の悪意のあるパッケージ" },
    // "0 Deprecated packages" -> "0件の非推奨パッケージ"
    { re: /^(\d+)\s+Deprecated packages$/, tpl: "$1件の非推奨パッケージ" },
    // "0 Code, 1 Runtime, 0 Deploy" -> "コード 0件、ランタイム 1件、デプロイ 0件"
    { re: /^(\d+)\s+Code,\s+(\d+)\s+Runtime,\s+(\d+)\s+Deploy$/, tpl: "コード $1件、ランタイム $2件、デプロイ $3件" },
  ],

  skip: [],
};
