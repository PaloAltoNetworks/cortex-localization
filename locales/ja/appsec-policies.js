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

const dictionaryAppsecPolicies = {
  exact: {
    "AppSec Policies": "AppSecポリシー",

    "AI Recommendations": "AIの推奨事項",
    "New Policy": "新しいポリシー",
    "Policy Id": "ポリシーID",
    "Recommended": "推奨",
    "Scope": "範囲",
    "Trigger": "トリガー",

    // --- 組み込みポリシー名(固定カタログ) ---
    // --- Built-in policy names (fixed catalog) ---
    "Block Build and Pull Request on Valid secrets":
      "有効なシークレットに対してビルドとプルリクエストをブロック",
    "Block Build and Pull Request on Valid secrets in public repository":
      "パブリックリポジトリの有効なシークレットに対してビルドとプルリクエストをブロック",
    "Block Build and Pull Request on strong Copyleft License":
      "強いコピーレフトライセンスに対してビルドとプルリクエストをブロック",
    "Block PR on Packages with a HIGH severity operational risk":
      "重要度HIGHの運用リスクがあるパッケージに対してPRをブロック",
    "Block Pull Request": "プルリクエストをブロック",
    "Block – CI Code Scan": "ブロック - CIコードスキャン",
    "CI Code Scan": "CIコードスキャン",
    "CI Image Scan": "CIイメージスキャン",
    "Comment on Pull Request": "プルリクエストにコメント",
    "Create Issue – CI Image Scan": "イシューを作成 - CIイメージスキャン",
    "Create Issue – Periodic Scan": "イシューを作成 - 定期スキャン",
    "Create issue on Secrets found in a GitHub/GitLab webhook URL":
      "GitHub/GitLabのウェブフックURLで見つかったシークレットに対してイシューを作成",
    "Create issue on a Direct Poisoned Pipeline Execution":
      "Direct Poisoned Pipeline Executionに対してイシューを作成",
    "Create issue on a Direct Poisoned Pipeline Execution by outside collaborators":
      "外部コラボレーターによるDirect Poisoned Pipeline Executionに対してイシューを作成",
    "Create issues on HIGH and CRITICAL severity IaC misconfigurations":
      "重要度HIGH/CRITICALのIaC設定ミスに対してイシューを作成",
    "Create issues on HIGH and CRITICAL severity vulnerabilities":
      "重要度HIGH/CRITICALの脆弱性に対してイシューを作成",
    "Create issues on Valid secrets": "有効なシークレットに対してイシューを作成",
    "Create issues on Valid secrets in public repository":
      "パブリックリポジトリの有効なシークレットに対してイシューを作成",
    "PR Scan": "PRスキャン",
    "Periodic Scan": "定期スキャン",
    "Report – CI Code Scan": "レポート - CIコードスキャン",
    "Secrets found in GitHub/GitLab webhook URL": "GitHub/GitLabのウェブフックURLで見つかったシークレット",

    // --- 条件式の表記(固定テンプレート) ---
    // --- Condition-expression labels (fixed template) ---
    "AppSec Rule = Secrets found in webhook URL": "AppSecルール = ウェブフックURLで見つかったシークレット",
    "AppSec Rule = Direct Poisoned Pipeline Execution":
      "AppSecルール = Direct Poisoned Pipeline Execution",
    "AppSec Rule = Direct Poisoned Pipeline Execution by outside collaborators":
      "AppSecルール = 外部コラボレーターによるDirect Poisoned Pipeline Execution",
    "AppSec Rule = Strong copyleft license found in code":
      "AppSecルール = コード内の強いコピーレフトライセンス",
    "Finding Type = Iac Misconfigurations, Secrets, Vulnerability, Licenses, Operational Risk, Code Weaknesses, Malware":
      "検出タイプ = IaC設定ミス、シークレット、脆弱性、ライセンス、運用リスク、コードの弱点、マルウェア",
    "Finding Type = Iac Misconfigurations, Secrets, Vulnerability, Licenses, Operational Risk, Code Weaknesses, Malware, Malicious Packages":
      "検出タイプ = IaC設定ミス、シークレット、脆弱性、ライセンス、運用リスク、コードの弱点、マルウェア、悪意のあるパッケージ",
    "Finding Type = CI/CD Risks": "検出タイプ = CI/CDリスク",
    "Finding Type = Iac Misconfigurations": "検出タイプ = IaC設定ミス",
    "Finding Type = Licenses": "検出タイプ = ライセンス",
    "Finding Type = Operational Risk": "検出タイプ = 運用リスク",
    "Finding Type = Secrets": "検出タイプ = シークレット",
    "Finding Type = Vulnerability": "検出タイプ = 脆弱性",
    "Is Public Repository = Yes": "パブリックリポジトリ = はい",
    "Secret Validity = Valid": "シークレットの有効性 = 有効",
    "Severity = Critical, High": "重要度 = 重大, 高",
    "PR Scan, CI Code Scan": "PRスキャン, CIコードスキャン",
  },

  patterns: [],

  skip: [],
};
