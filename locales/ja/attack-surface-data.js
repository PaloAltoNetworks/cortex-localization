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

const dictionaryAttackSurfaceData = {
  exact: {
    "Attack Surface Management Data": "アタックサーフェス管理データ",
    "Data Enablement": "データ有効化",
    "Enable Attack Surface Data": "アタックサーフェスデータを有効にする",
    // 他画面の結果未読み込み時に表示される案内文中のリンクテキストと、その直後の
    // 文言(2つのテキストノードに分かれているが、続けて読むと1文になる:
    // 「アタックサーフェス管理データを有効化して結果を読み込む」)。
    // The link text and the text right after it in a "results not loaded yet" prompt shown on
    // other screens (split across two text nodes, but reads as one sentence together:
    // "Enable Attack Surface Management Data to load results").
    "Enable Attack Surface Management Data": "アタックサーフェス管理データを有効化",
    "to load results": "して結果を読み込む",
    "Enables discovery of unmanaged cloud resources. Discovered services will impact workload consumption.":
      "管理されていないクラウドリソースの検出を有効にします。検出されたサービスはワークロードの消費量に影響します。",
    "Please note: the selection can be changed only once every 7 days": "ご注意: この選択は7日に1回のみ変更できます",
    "Visit our": "こちらの",
    "for more information around Attack Surface data for Cortex Cloud.":
      "でCortex Cloudのアタックサーフェスデータについて詳しく確認できます。",
  },

  patterns: [],

  skip: [],
};
