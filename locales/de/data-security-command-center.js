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

const dictionaryDataSecurityCommandCenter = {
  exact: {
    "Data Security Command Center": "Data Security Command Center",

    "AI Assets": "KI-Assets",
    "Alerted Policy Violations": "Gemeldete Richtlinienverstöße",
    "Automated": "Automatisiert",
    "Automated Issues": "Automatisierte Probleme",
    "Data Assets Discovered": "Erkannte Daten-Assets",
    "Developer Secrets": "Entwickler-Secrets",
    "Endpoint": "Endpoint",
    "Manual": "Manuell",
    "No active threats created yet": "Noch keine aktiven Bedrohungen erstellt",
    "No policy violations found": "Keine Richtlinienverstöße gefunden",
    "On-Prem": "On-Premises",
    "Powered by Sensitive Data": "Unterstützt durch Sensitive Data",
    "Prevented Policy Violations": "Verhinderte Richtlinienverstöße",
    "Resolved Issues": "Behobene Probleme",
    "Sensitive": "Sensibel",
    "Sensitive Data Assets": "Sensible Daten-Assets",
  },

  patterns: [
    { re: /^(\d[\d,.]*[KkMm]?)\s+Assets$/, tpl: "$1 Assets" },
    { re: /^(\d[\d,.]*[KkMm]?)\s+Databases$/, tpl: "$1 Datenbanken" },
    { re: /^(\d[\d,.]*[KkMm]?)\s+Datastores$/, tpl: "$1 Datenspeicher" },
    { re: /^(\d[\d,.]*[KkMm]?)\s+Endpoints$/, tpl: "$1 Endpoints" },
    { re: /^(\d[\d,.]*[KkMm]?)\s+Data Store Services$/, tpl: "$1 Datenspeicherdienste" },
  ],

  skip: [],
};
