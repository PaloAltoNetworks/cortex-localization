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

const dictionaryApplicationConfigurations = {
  exact: {
    "Application Configurations": "アプリケーション構成",
    "Approaching SLA Threshold": "SLA間近のしきい値",
    "Auto-refresh related app assets": "関連するアプリ資産を自動更新",
    "Define the issue target SLA per issue severity": "イシューの重要度ごとに目標SLAを定義してください",
    "Each issue's SLA status will be determined based on these settings. Updates are applied automatically during periodic scans.":
      "各イシューのSLAステータスは、これらの設定に基づいて決定されます。更新は定期スキャン時に自動的に適用されます。",
    "Set how many days before the SLA breach an issue should be marked as 'Approaching SLA.' This helps teams identify and prioritize issues before they become overdue.":
      "SLA違反の何日前にイシューを「SLA間近」として表示するかを設定します。これにより、期限超過になる前にチームがイシューを特定し優先順位を付けやすくなります。",
    "When enabled, related repositories, pipelines, registries, and cloud accounts are automatically refreshed (added or removed) every 4 hours. When disabled, the application remains static after creation and requires manual updates.":
      "有効にすると、関連するリポジトリ、パイプライン、レジストリ、クラウドアカウントが4時間ごとに自動的に更新されます(追加または削除されます)。無効にすると、作成後のアプリケーションは静的なままとなり、手動での更新が必要になります。",
    "days before overdue": "期限超過の何日前",
    "AppSec Issues Configurations": "AppSecイシューの設定",
    "Are SBOM issues considered new": "SBOMのイシューを新規とみなすかどうか",
    "When enabled, all detected SBOM findings are treated as new vulnerabilities. When disabled, the baseline for identifying new SBOM vulnerabilities starts with the next scan, excluding previously identified findings.":
      "有効にすると、検出されたすべてのSBOM検出結果が新しい脆弱性として扱われます。無効にすると、新しいSBOM脆弱性を識別するための基準は次回のスキャンから開始され、それ以前に識別済みの検出結果は除外されます。",
  },

  patterns: [],

  skip: [],
};
