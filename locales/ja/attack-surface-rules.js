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

const dictionaryAttackSurfaceRules = {
  exact: {
    "Attack Surface Rules": "アタックサーフェスルール",

    "ASM Issue Categories": "ASMイシューカテゴリ",
    "Estimated Issue Count": "推定イシュー数",
    "Remediation Guidance": "修復ガイダンス",
    "Remote Access Services": "リモートアクセスサービス",
    "IT and Security Infrastructure": "ITおよびセキュリティインフラ",

    // --- カテゴリの組み合わせ表記(固定) ---
    // --- Category combination labels (fixed) ---
    "Development Infrastructure, AI Infrastructure": "開発インフラ、AIインフラ",
    "Business Operations Applications, Software Potentially Impacted by CISA Known Exploited Vulnerabilities (BOD 22-01)":
      "ビジネス運用アプリケーション、CISA既知の悪用された脆弱性(BOD 22-01)の影響を受ける可能性のあるソフトウェア",
    "IT and Security Infrastructure, Software Potentially Impacted by CISA Known Exploited Vulnerabilities (BOD 22-01)":
      "ITおよびセキュリティインフラ、CISA既知の悪用された脆弱性(BOD 22-01)の影響を受ける可能性のあるソフトウェア",
    "Unpatched, Misconfigured, and end-of-life (EOL) systems, Software Potentially Impacted by CISA Known Exploited Vulnerabilities (BOD 22-01)":
      "未パッチ、設定ミス、およびサポート終了(EOL)システム、CISA既知の悪用された脆弱性(BOD 22-01)の影響を受ける可能性のあるソフトウェア",
  },

  patterns: [],

  skip: [],
};
