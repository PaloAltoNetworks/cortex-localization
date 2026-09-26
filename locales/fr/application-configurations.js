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
    "Application Configurations": "Configurations des applications",
    "Approaching SLA Threshold": "Seuil d'approche du SLA",
    "Auto-refresh related app assets": "Actualiser automatiquement les actifs d'application associés",
    "Define the issue target SLA per issue severity": "Définissez le SLA cible des problèmes pour chaque gravité",
    "Each issue's SLA status will be determined based on these settings. Updates are applied automatically during periodic scans.":
      "Le statut SLA de chaque problème sera déterminé en fonction de ces paramètres. Les mises à jour sont appliquées automatiquement lors des analyses périodiques.",
    "Set how many days before the SLA breach an issue should be marked as 'Approaching SLA.' This helps teams identify and prioritize issues before they become overdue.":
      "Définissez combien de jours avant le dépassement du SLA un problème doit être marqué comme \"SLA proche\". Cela aide les équipes à identifier et à hiérarchiser les problèmes avant qu'ils ne soient en retard.",
    "When enabled, related repositories, pipelines, registries, and cloud accounts are automatically refreshed (added or removed) every 4 hours. When disabled, the application remains static after creation and requires manual updates.":
      "Lorsque cette option est activée, les dépôts, pipelines, registres et comptes cloud associés sont actualisés automatiquement (ajoutés ou supprimés) toutes les 4 heures. Lorsqu'elle est désactivée, l'application reste statique après sa création et nécessite des mises à jour manuelles.",
    "days before overdue": "jours avant l'échéance",
    "AppSec Issues Configurations": "Configurations des problèmes AppSec",
    "Are SBOM issues considered new": "Les problèmes SBOM sont-ils considérés comme nouveaux",
    "When enabled, all detected SBOM findings are treated as new vulnerabilities. When disabled, the baseline for identifying new SBOM vulnerabilities starts with the next scan, excluding previously identified findings.":
      "Lorsque cette option est activée, tous les constats SBOM détectés sont traités comme de nouvelles vulnérabilités. Lorsqu'elle est désactivée, la référence pour identifier les nouvelles vulnérabilités SBOM commence à la prochaine analyse, en excluant les constats déjà identifiés.",
  },

  patterns: [],

  skip: [],
};
