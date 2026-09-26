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
    "Application Configurations": "Anwendungskonfigurationen",
    "Approaching SLA Threshold": "SLA-Schwellenwert bald erreicht",
    "Auto-refresh related app assets": "Zugehörige App-Assets automatisch aktualisieren",
    "Define the issue target SLA per issue severity": "Definieren Sie die Ziel-SLA für Probleme je Schweregrad",
    "Each issue's SLA status will be determined based on these settings. Updates are applied automatically during periodic scans.":
      "Der SLA-Status jedes Problems wird anhand dieser Einstellungen bestimmt. Aktualisierungen werden bei periodischen Scans automatisch angewendet.",
    "Set how many days before the SLA breach an issue should be marked as 'Approaching SLA.' This helps teams identify and prioritize issues before they become overdue.":
      "Legen Sie fest, wie viele Tage vor einer SLA-Verletzung ein Problem als \"SLA bald erreicht\" markiert werden soll. So können Teams Probleme erkennen und priorisieren, bevor sie überfällig werden.",
    "When enabled, related repositories, pipelines, registries, and cloud accounts are automatically refreshed (added or removed) every 4 hours. When disabled, the application remains static after creation and requires manual updates.":
      "Wenn aktiviert, werden zugehörige Repositorys, Pipelines, Registrys und Cloud-Konten alle 4 Stunden automatisch aktualisiert (hinzugefügt oder entfernt). Wenn deaktiviert, bleibt die Anwendung nach der Erstellung statisch und muss manuell aktualisiert werden.",
    "days before overdue": "Tage vor Überfälligkeit",
    "AppSec Issues Configurations": "Konfiguration von AppSec-Problemen",
    "Are SBOM issues considered new": "Gelten SBOM-Probleme als neu",
    "When enabled, all detected SBOM findings are treated as new vulnerabilities. When disabled, the baseline for identifying new SBOM vulnerabilities starts with the next scan, excluding previously identified findings.":
      "Wenn aktiviert, werden alle erkannten SBOM-Befunde als neue Schwachstellen behandelt. Wenn deaktiviert, beginnt die Basislinie zur Identifizierung neuer SBOM-Schwachstellen mit dem nächsten Scan, und zuvor identifizierte Befunde werden ausgeschlossen.",
  },

  patterns: [],

  skip: [],
};
