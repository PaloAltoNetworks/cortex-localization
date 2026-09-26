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

const dictionaryLicense = {
  exact: {
    "License Details": "ライセンスの詳細",
    "Sync license details": "ライセンスの詳細を同期",
    "A single Compute Unit add-on for Cortex CLOUD": "Cortex CLOUD用の単一Compute Unitアドオン",
    "Advanced identity threat detection and response capabilities": "高度なアイデンティティ脅威検出・対応機能",
    "Application Security add-on for CLOUD, including IAC, SCA and Secrets Security":
      "IAC、SCA、Secrets Securityを含む、CLOUD用のApplication Securityアドオン",
    "Cloud Runtime Workloads": "クラウドランタイムワークロード",
    "Extended Compute Units": "拡張Compute Unit",
    "Forensics Module": "フォレンジックモジュール",
    "Forensics add-on for Cortex CLOUD": "Cortex CLOUD用のフォレンジックアドオン",
    "Free trial": "無料トライアル",
    "Host Insights Module": "Host Insightsモジュール",
    "Host Insights add-on for Cortex CLOUD": "Cortex CLOUD用のHost Insightsアドオン",
    "ITDR Module": "ITDRモジュール",
    "Runtime Security": "ランタイムセキュリティ",
  },

  patterns: [
    // "Addons (5)" -> "アドオン (5)"
    { re: /^Addons \((\d+)\)$/, tpl: "アドオン ($1)" },
    // "50 agents" -> "エージェント 50件"
    { re: /^(\d[\d,]*)\s+agents$/, tpl: "エージェント $1件" },
    // "Expires Mar 27th 2027" -> "有効期限: Mar 27th 2027"
    { re: /^Expires (.+)$/, tpl: "有効期限: $1" },
    // "Expires on Mar 26th 2027" -> "有効期限: Mar 26th 2027"
    { re: /^Expires on (.+)$/, tpl: "有効期限: $1" },
    // "Trial Expires on Mar 26th 2027" -> "トライアル有効期限: Mar 26th 2027"
    { re: /^Trial Expires on (.+)$/, tpl: "トライアル有効期限: $1" },
    // "Usage: 40% [2/5]" -> "使用状況: 40% [2/5]"
    { re: /^Usage: (.+)$/, tpl: "使用状況: $1" },
    // "2.082 additional daily on average (760 annually)" -> "1日あたり平均2.082件の追加(年間760件)"
    { re: /^([\d.,]+)\s+additional daily on average \(([\d.,]+)\s+annually\)$/, tpl: "1日あたり平均$1件の追加(年間$2件)" },
  ],

  skip: [],
};
