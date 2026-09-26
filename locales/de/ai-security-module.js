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

const dictionaryAiSecurityModule = {
  exact: {
    "AI Activity": "KI-Aktivität",
    "Model Families": "Modellfamilien",
    "Use this widget to identify AI assets at risk due to critical-severity security posture issues in your environment.":
      "Verwenden Sie dieses Widget, um KI-Assets zu identifizieren, die durch Probleme der Sicherheitslage mit kritischem Schweregrad in Ihrer Umgebung gefährdet sind.",
    "Use this widget to identify AI datasets with a high number of sensitive records.":
      "Verwenden Sie dieses Widget, um KI-Datensätze mit einer hohen Anzahl sensibler Einträge zu identifizieren.",
    "Use this widget to identify Data Profiles and Data Patterns in your AI datasets.":
      "Verwenden Sie dieses Widget, um Datenprofile und Datenmuster in Ihren KI-Datensätzen zu identifizieren.",
    "Use this widget to identify the most vulnerable AI software packages and most risky compute assets with AI software packages.":
      "Verwenden Sie dieses Widget, um die anfälligsten KI-Softwarepakete und die riskantesten Compute-Assets mit KI-Softwarepaketen zu identifizieren.",
    "Use this widget to identify the most active models and identities in your AI ecosystem.":
      "Verwenden Sie dieses Widget, um die aktivsten Modelle und Identitäten in Ihrem KI-Ökosystem zu identifizieren.",
    "AI Inventory": "KI-Inventar",
    "AI Security Detection Rules": "KI-Sicherheitserkennungsregeln",
    "AI Security Issues": "KI-Sicherheitsprobleme",
    "Active Threats": "Aktive Bedrohungen",
    "AWS Assets": "AWS-Assets",
    "Azure Assets": "Azure-Assets",
    "GCP Assets": "GCP-Assets",
    "Data Pattern": "Datenmuster",
    "Data Profile": "Datenprofil",
    "Invocations": "Aufrufe",
    "Model": "Modell",
    "Most Sensitive AI Datasets": "Sensibelste KI-Datensätze",
    "No Assets with Issues": "Keine Assets mit Problemen",
    "No Training Datasets Found": "Keine Trainingsdatensätze gefunden",
    "Posture Issues": "Probleme der Sicherheitslage",
    "Remediate the most pressing issues to improve your AI security posture.":
      "Beheben Sie die dringendsten Probleme, um die Sicherheitslage Ihrer KI zu verbessern.",
    "Risk Trends": "Risikotrends",
    "Risky Assets": "Riskante Assets",
    "Security issues discovered in your AI ecosystem": "In Ihrem KI-Ökosystem erkannte Sicherheitsprobleme",
    "Sensitive Data Used by AI": "Von KI verwendete sensible Daten",
    "Top AI Assets At Risk": "Am stärksten gefährdete KI-Assets",
    "Top AI Threats and Posture Issues to Address": "Wichtigste KI-Bedrohungen und Probleme der Sicherheitslage",
    "Top Active Identities": "Aktivste Identitäten",
    "Top Active Models": "Aktivste Modelle",
    "Total Open Issues": "Offene Probleme gesamt",
    "Visualization of the AI ecosystem": "Visualisierung des KI-Ökosystems",
    "Vulnerable AI Software Packages": "Anfällige KI-Softwarepakete",
    "Vulnerable Packages": "Anfällige Pakete",
    "You're secure, no issues to show": "Sie sind sicher, keine Probleme vorhanden",
  },

  patterns: [
    { re: /^(\d+)\s+Training Datasets$/, tpl: "$1 Trainingsdatensätze" },
    { re: /^(\d+)\s+Inference Datasets$/, tpl: "$1 Inferenzdatensätze" },
    { re: /^(\d+)\s+Instances$/, tpl: "$1 Instanzen" },
    { re: /^(\d+)\s+Model Families$/, tpl: "$1 Modellfamilien" },
    { re: /^(\d+)\s+Model Families Found$/, tpl: "$1 Modellfamilien gefunden" },
    { re: /^(\d+)\s+Model Endpoints$/, tpl: "$1 Modell-Endpoints" },
    { re: /^(\d+)\s+Agents$/, tpl: "$1 Agents" },
    { re: /^(\d+)\s+Models$/, tpl: "$1 Modelle" },
    { re: /^Issues Created\s+(\(\d+\))$/, tpl: "Erstellte Probleme $1" },
    { re: /^Issues Resolved\s+(\(\d+\))$/, tpl: "Behobene Probleme $1" },
  ],

  skip: [
    // Per-finding detection-date text (fully dynamic).
    /^First Discovered on /,
  ],
};
