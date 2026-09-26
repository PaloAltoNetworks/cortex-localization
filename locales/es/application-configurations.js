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
    "Application Configurations": "Configuraciones de aplicaciones",
    "Approaching SLA Threshold": "Umbral de SLA próximo",
    "Auto-refresh related app assets": "Actualizar automáticamente los activos de aplicación relacionados",
    "Define the issue target SLA per issue severity": "Defina el SLA objetivo de las incidencias según su gravedad",
    "Each issue's SLA status will be determined based on these settings. Updates are applied automatically during periodic scans.":
      "El estado del SLA de cada incidencia se determinará en función de esta configuración. Las actualizaciones se aplican automáticamente durante los análisis periódicos.",
    "Set how many days before the SLA breach an issue should be marked as 'Approaching SLA.' This helps teams identify and prioritize issues before they become overdue.":
      "Establezca cuántos días antes del incumplimiento del SLA se debe marcar una incidencia como \"SLA próximo\". Esto ayuda a los equipos a identificar y priorizar las incidencias antes de que venzan.",
    "When enabled, related repositories, pipelines, registries, and cloud accounts are automatically refreshed (added or removed) every 4 hours. When disabled, the application remains static after creation and requires manual updates.":
      "Si se habilita, los repositorios, las canalizaciones, los registros y las cuentas en la nube relacionados se actualizan automáticamente (se agregan o eliminan) cada 4 horas. Si se deshabilita, la aplicación permanece estática después de su creación y requiere actualizaciones manuales.",
    "days before overdue": "días antes del vencimiento",
    "AppSec Issues Configurations": "Configuraciones de incidencias de AppSec",
    "Are SBOM issues considered new": "Considerar nuevas las incidencias de SBOM",
    "When enabled, all detected SBOM findings are treated as new vulnerabilities. When disabled, the baseline for identifying new SBOM vulnerabilities starts with the next scan, excluding previously identified findings.":
      "Si se habilita, todos los hallazgos de SBOM detectados se tratan como vulnerabilidades nuevas. Si se deshabilita, la referencia para identificar nuevas vulnerabilidades de SBOM comienza con el siguiente análisis, excluyendo los hallazgos identificados previamente.",
  },

  patterns: [],

  skip: [],
};
