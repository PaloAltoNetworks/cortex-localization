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

const dictionaryDataClassification = {
  exact: {
    // --- Data Patterns タブ ---
    // --- Data Patterns tab ---
    "Add Pattern": "パターンを追加",
    "Data Pattern Name": "データパターン名",
    "Enter data pattern name": "データパターン名を入力してください",
    "Enter context words": "コンテキストワードを入力してください",
    "Enter regex": "正規表現を入力してください",
    "Enter test string here": "ここにテスト用の文字列を入力してください",
    "Geo": "地域",
    "Select Geos": "地域を選択してください",
    "Last Updated By": "最終更新者",
    "Add description": "説明を追加",
    "Apply data patterns to the data profile:": "データプロファイルにデータパターンを適用:",
    "Built-in Data Pattern": "組み込みデータパターン",
    "Context Words": "コンテキストワード",
    "Create New Data Pattern": "新しいデータパターンを作成",
    "Custom patterns are added as OR statements to custom profiles only. You can edit it later from the data profile page.":
      "カスタムパターンはカスタムプロファイルにのみOR条件として追加されます。データプロファイルページから後で編集できます。",
    "Enter an integer from 10 to 150.": "10から150までの整数を入力してください。",
    "Enter your test string, and we will highlight any matches based on the regex you configure.":
      "テスト用の文字列を入力すると、設定した正規表現に一致した箇所がハイライト表示されます。",
    "Full Masking": "完全マスキング",
    "No results found.": "結果が見つかりませんでした。",
    "Partial Masking": "部分マスキング",
    "Proximity": "近接度",
    "Regular Expression (Regex)": "正規表現(Regex)",
    "Show Advanced Options": "詳細オプションを表示",
    "Hide Advanced Options": "詳細オプションを非表示",
    "Test": "テスト",
    "Test Data Pattern": "データパターンをテスト",
    "Test results appear here": "テスト結果はここに表示されます",
    "Uses the Rust regular expression syntax.": "Rustの正規表現構文を使用します。",
    "masking level": "マスキングレベル",

    // --- Data Topics タブ(件数が少ないため全訳) ---
    // --- Data Topics tab (translated in full since there are few entries) ---
    "Topic Name": "トピック名",
    "Last Updated At": "最終更新日時",
    "Business Continuity Plans": "事業継続計画",
    "CVs": "履歴書",
    "Corporate Filings": "法人届出書類",
    "Financial Transactions & Payroll": "金融取引と給与",
    "Legal Agreements": "法的契約書",
    "Medical Certificates and Records": "医療証明書・記録",
    "Tax Documents": "税務書類",
    "Business continuity and disaster recovery plans. These strategic documents outline procedures for maintaining operations during disruptions.":
      "事業継続計画および災害復旧計画。これらの戦略文書は、混乱発生時に業務を維持するための手順を定めています。",
    "Financial transaction records including invoices, receipts, and payment confirmations, as well as Employee compensation records including salary details, deductions, and payment history.":
      "請求書、領収書、支払い確認書を含む金融取引記録、および給与明細、控除、支払い履歴を含む従業員報酬記録。",
    "Formal contracts and service terms between parties. These files define legal obligations related to business operations.":
      "当事者間の正式な契約書およびサービス利用規約。これらのファイルは、事業運営に関連する法的義務を定めています。",
    "Official corporate registration documents, annual reports, and regulatory filings. These records are essential for legal compliance and corporate governance.":
      "公式の法人登記書類、年次報告書、規制当局への届出書類。これらの記録は法令遵守および企業統治に不可欠です。",
    "Private health information and clinical documentation for individuals. This sensitive data requires high-level protection to maintain patient confidentiality and regulatory compliance.":
      "個人の医療情報および臨床記録。この機密データは、患者の秘密保持および規制遵守を維持するために高いレベルの保護が必要です。",
    "Professional profiles detailing candidate work history and qualifications. These documents contain personal information and are subject to privacy regulations.":
      "候補者の職務経歴および資格を詳細に記載した職務経歴書。これらの文書には個人情報が含まれ、プライバシー規制の対象となります。",
    "Tax filings, returns, and related financial documents. These contain sensitive financial data subject to regulatory requirements.":
      "税務申告書、確定申告書、および関連する財務書類。これらには規制要件の対象となる機密性の高い財務データが含まれます。",

    // --- Data Profiles タブ(件数が少ないため全訳。PCI/PHI/PII/GDPR/CCPA
    // は業界標準の略語のため英語のまま) ---
    // --- Data Profiles tab (translated in full since there are few entries;
    // PCI/PHI/PII/GDPR/CCPA are left in English as industry-standard abbreviations) ---
    "Built-in Data Profile": "組み込みデータプロファイル",
    "Cloud, SaaS": "クラウド, SaaS",
    "Cloud, SaaS, Endpoints, APIs": "クラウド, SaaS, エンドポイント, API",
    "Condition": "条件",
    "Data Location": "データの場所",
    "Data Profile Name": "データプロファイル名",
    "View Condition": "条件を表示",
    "Create New Data Profile": "新しいデータプロファイルを作成",
    "Select Data Location": "データの場所を選択",
    "Set Conditions": "条件を設定",
    "The displayed filters are based on your previous selections.": "表示されているフィルターは、以前の選択内容に基づいています。",
    "Your selection determines the available condition filters.": "選択内容に応じて、利用可能な条件フィルターが決まります。",
    "CCN (Credit Card Numbers)": "CCN(クレジットカード番号)",
    "Intellectual Property - Code": "知的財産 - コード",

    // --- Global Settings タブ ---
    // --- Global Settings tab ---
    "Collect Masked Data Patterns": "マスキングされたデータパターンを収集",
    "Collects samples of data patterns that are masked by the Classification Engine.":
      "分類エンジンによってマスキングされたデータパターンのサンプルを収集します。",
    "OCR (Optical Character Recognition)": "OCR(光学文字認識)",
    "OCR extracts text from images. Disabling this option reduces overall scanning time.":
      "OCRは画像からテキストを抽出します。このオプションを無効にすると、全体のスキャン時間が短縮されます。",
  },

  patterns: [],

  skip: [
    // Data Profiles画面の「説明」列(各プロファイルの説明文)は、
    // 要望により翻訳対象から除外している(対応する exact エントリを
    // 削除済み)。
    // The Data Profiles screen's "Description" column (each profile's description text) is
    // excluded from translation by request (its exact-dictionary entry has been removed).
  ],
};
