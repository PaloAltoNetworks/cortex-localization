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

const dictionaryDataSecurityCommandCenter = {
  exact: {
    "Data Security Command Center": "データセキュリティ コマンドセンター",

    "AI Assets": "AIアセット",
    "Alerted Policy Violations": "アラートが発生したポリシー違反",
    "Automated": "自動",
    "Automated Issues": "自動化されたイシュー",
    "Data Assets Discovered": "発見アセット",
    "Developer Secrets": "開発者シークレット",
    "Endpoint": "エンドポイント",
    "Manual": "手動",
    "No active threats created yet": "アクティブな脅威はまだ作成されていません",
    "No policy violations found": "ポリシー違反は見つかりませんでした",
    "On-Prem": "オンプレミス",
    "Powered by Sensitive Data": "Sensitive Data 搭載",
    "Prevented Policy Violations": "防止されたポリシー違反",
    "Resolved Issues": "解決済みのイシュー",
    "Sensitive": "機密",
    "Sensitive Data Assets": "機密データアセット",
  },

  patterns: [
    { re: /^(\d[\d,.]*[KkMm]?)\s+Assets$/, tpl: "資産 $1 件" },
    { re: /^(\d[\d,.]*[KkMm]?)\s+Databases$/, tpl: "データベース $1 件" },
    { re: /^(\d[\d,.]*[KkMm]?)\s+Datastores$/, tpl: "データストア $1 件" },
    { re: /^(\d[\d,.]*[KkMm]?)\s+Endpoints$/, tpl: "エンドポイント $1 件" },
    { re: /^(\d[\d,.]*[KkMm]?)\s+Data Store Services$/, tpl: "データストアサービス $1 件" },
  ],

  skip: [],
};
