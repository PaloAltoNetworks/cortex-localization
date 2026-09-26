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

const dictionaryCompliance = {
  exact: {
    // --- Compliance > Standards Catalog 画面 ---
    // --- Compliance > Standards Catalog screen ---
    "Standards Catalog": "基準カタログ",
    "Create Standard": "基準を作成",
    "Create New Standard": "新しい基準を作成",
    "Assign Controls": "コントロールを割り当て",
    "Select Controls": "コントロールを選択",
    "Create New Control": "新しいコントロールを作成",
    "Control name": "コントロール名",
    "Sub category": "サブカテゴリ",
    "Select custom standards": "カスタム基準を選択",
    "Delete custom standard?": "カスタム基準を削除しますか?",
    "Delete Custom Control": "カスタムコントロールを削除",

    // --- Compliance > Assessment Profiles 画面 ---
    // --- Compliance > Assessment Profiles screen ---
    "Assessment Profiles": "評価プロファイル",
    "Asset Group Name": "アセットグループ名",
    "Create New Assessment": "新しい評価を作成",
    "Enabled": "有効",
    "Report Frequency (UTC)": "レポート頻度 (UTC)",
    "Report Targets": "レポート送信先",
    "Standard Name": "基準名",
    "Yes": "はい",
    "New Assessment Profile": "新しい評価プロファイル",
    "Standards and Asset Group": "基準とアセットグループ",
    "Configure the profile name and report settings.": "プロファイル名とレポート設定を構成してください。",
    "Generate a scheduled report": "スケジュール設定されたレポートを生成",
    "Report Types": "レポートタイプ",
    "Add profile name": "プロファイル名を追加",
    "Select a compliance standard and asset group.": "コンプライアンス基準とアセットグループを選択してください。",
    "Select standard": "基準を選択",
    "Review your assessment profile configuration.": "評価プロファイルの設定内容を確認してください。",
    "Assessment Profile ID": "評価プロファイルID",

    // --- Assessment Profilesグリッドの行アクション ---
    // --- Assessment Profiles grid row actions ---
    "View Asset Group": "アセットグループを表示",
    "View Assessment Results": "評価結果を表示",
    "Export to PDF": "PDFにエクスポート",
    "Export to CSV": "CSVにエクスポート",
    "Delete Report": "レポートを削除",
  },

  patterns: [
    // "at 12:00 every day" -> "毎日 12:00 に"
    { re: /^at (\d{1,2}:\d{2}) every day$/, tpl: "毎日 $1 に" },
    // "You are about to delete "auenoyama-test"" -> "「auenoyama-test」を削除しようとしています"
    // カスタム基準/コントロールの削除確認ダイアログの本文。名前(識別子)部分は未翻訳のまま維持する。
    // The body text of the custom standard/control delete-confirmation dialog. The name
    // (an identifier) is left untranslated.
    { re: /^You are about to delete "(.+)"$/, tpl: "「$1」を削除しようとしています" },
    // "Are you sure you want do delete "auenoyama-test"?" -> "「auenoyama-test」を削除してもよろしいですか?"
    // 原文が"want to delete"ではなく"want do delete"という誤植だが、実際の
    // 表示テキストと完全一致させるためそのまま採用。
    // The original text has a typo, "want do delete" instead of "want to delete", but is kept
    // verbatim here to exact-match what's actually displayed.
    { re: /^Are you sure you want do delete "(.+)"\?$/, tpl: "「$1」を削除してもよろしいですか?" },
    // "This will disable assessment profile "Zain B Test"" -> "評価プロファイル「Zain B Test」を無効にします"
    { re: /^This will disable assessment profile "(.+)"$/, tpl: "評価プロファイル「$1」を無効にします" },
    // "This will delete profile "auenoyama" permanently" -> "プロファイル「auenoyama」を完全に削除します"
    { re: /^This will delete profile "(.+)" permanently$/, tpl: "プロファイル「$1」を完全に削除します" },
  ],

  skip: [],
};
