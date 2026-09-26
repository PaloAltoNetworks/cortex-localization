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
    "Application Configurations": "애플리케이션 구성",
    "Approaching SLA Threshold": "SLA 임계값 임박",
    "Auto-refresh related app assets": "관련 앱 자산 자동 새로 고침",
    "Define the issue target SLA per issue severity": "이슈 심각도별 목표 SLA를 정의하세요",
    "Each issue's SLA status will be determined based on these settings. Updates are applied automatically during periodic scans.":
      "각 이슈의 SLA 상태는 이 설정에 따라 결정됩니다. 업데이트는 정기 스캔 중에 자동으로 적용됩니다.",
    "Set how many days before the SLA breach an issue should be marked as 'Approaching SLA.' This helps teams identify and prioritize issues before they become overdue.":
      "SLA 위반 며칠 전에 이슈를 \"SLA 임박\"으로 표시할지 설정합니다. 이를 통해 팀이 기한이 초과되기 전에 이슈를 식별하고 우선순위를 지정할 수 있습니다.",
    "When enabled, related repositories, pipelines, registries, and cloud accounts are automatically refreshed (added or removed) every 4 hours. When disabled, the application remains static after creation and requires manual updates.":
      "사용 설정하면 관련 리포지토리, 파이프라인, 레지스트리 및 클라우드 계정이 4시간마다 자동으로 새로 고쳐집니다(추가 또는 제거). 사용 중지하면 애플리케이션은 생성 후 정적으로 유지되며 수동 업데이트가 필요합니다.",
    "days before overdue": "기한 초과 전 일수",
    "AppSec Issues Configurations": "AppSec 이슈 구성",
    "Are SBOM issues considered new": "SBOM 이슈를 신규로 간주할지 여부",
    "When enabled, all detected SBOM findings are treated as new vulnerabilities. When disabled, the baseline for identifying new SBOM vulnerabilities starts with the next scan, excluding previously identified findings.":
      "사용 설정하면 탐지된 모든 SBOM 결과가 새 취약점으로 처리됩니다. 사용 중지하면 새 SBOM 취약점을 식별하는 기준선이 다음 스캔부터 시작되며, 이전에 식별된 결과는 제외됩니다.",
  },

  patterns: [],

  skip: [],
};
