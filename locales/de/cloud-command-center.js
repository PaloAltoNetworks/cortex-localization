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

const dictionaryCloudCommandCenter = {
  exact: {
    "Cortex Cloud Command Center": "Cortex Cloud Command Center",
    "Cloud Command Center": "Cloud Command Center",

    "Connect Data Source": "Datenquelle verbinden",
    "Showing results from all providers": "Ergebnisse aller Anbieter werden angezeigt",
    "Total Assets at Risk": "Gefährdete Assets insgesamt",

    "Active Threat Cases": "Aktive Bedrohungsfälle",
    "Posture Cases": "Fälle zur Sicherheitslage",
    "Created": "Erstellt",
    "Resolved": "Gelöst",
    "Actions Available": "Aktionen verfügbar",
    "Automation Available": "Automatisierung verfügbar",
    "Remediation Available": "Behebung verfügbar",

    "Top Active Threats to Address": "Wichtigste aktive Bedrohungen",
    "Investigate and resolve top threats to prevent breach":
      "Untersuchen und beheben Sie die wichtigsten Bedrohungen, um Sicherheitsverletzungen zu verhindern",
    "View Active Threats": "Aktive Bedrohungen anzeigen",

    "Top Posture Cases to Address": "Wichtigste Fälle zur Sicherheitslage",
    "Remediate the cases below to improve your organizational security posture":
      "Beheben Sie die folgenden Fälle, um die Sicherheitslage Ihrer Organisation zu verbessern",
    "All Classes": "Alle Klassen",
    "View Posture Cases": "Fälle zur Sicherheitslage anzeigen",

    "Vulnerability Summary": "Schwachstellenübersicht",
    "Manage Vulnerabilities": "Schwachstellen verwalten",
    "Unique Risky Vulnerabilities Issues": "Eindeutige riskante Schwachstellenprobleme",
    "Critical & High": "Kritisch und Hoch",
    "Weaponized Exploit": "Bewaffneter Exploit",
    "Fix Available": "Korrektur verfügbar",
    "Top Risky Vulnerabilities": "Riskanteste Schwachstellen",

    "Compliance Summary": "Compliance-Übersicht",
    "View Compliance Center": "Compliance Center anzeigen",
    "Compliance Standard by Score": "Compliance-Standards nach Bewertung",
    "Standards Status": "Status der Standards",
    "Controls Assessed": "Bewertete Kontrollen",

    // --- Dashboard: data-source connection / scan status / asset explorer ---
    "Connect account": "Konto verbinden",
    "Scanning health": "Scan-Integrität",
    "Explore AI Assets": "KI-Assets erkunden",
    "Explore API Assets": "API-Assets erkunden",
    "Explore Compute Assets": "Compute-Assets erkunden",
    "Explore Data Assets": "Daten-Assets erkunden",
    "Explore Identity Assets": "Identitäts-Assets erkunden",
    "Explore Other Assets": "Sonstige Assets erkunden",
    "Explore Network Assets": "Netzwerk-Assets erkunden",
  },

  patterns: [
    { re: /^(\d[\d,.]*[KkMm]?)\s+Controls Assessed$/, tpl: "$1 bewertete Kontrollen" },
    { re: /^(\d[\d,.]*[KkMm]?)\s+AWS Accounts$/, tpl: "$1 AWS-Konten" },
    { re: /^(\d[\d,.]*[KkMm]?)\s+GCP Accounts$/, tpl: "$1 GCP-Konten" },
    { re: /^(\d[\d,.]*[KkMm]?)\s+Azure Accounts$/, tpl: "$1 Azure-Konten" },
    { re: /^(\d[\d,.]*[KkMm]?)\s+OCI Accounts$/, tpl: "$1 OCI-Konten" },
    { re: /^(\d[\d,.]*[KkMm]?)\s+Snowflake Accounts$/, tpl: "$1 Snowflake-Konten" },
    { re: /^(\d+)%\s+Health$/, tpl: "Integrität: $1%" },
  ],

  skip: [],
};
