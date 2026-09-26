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

const dictionaryLicense = {
  exact: {
    "License Details": "Lizenzdetails",
    "Sync license details": "Lizenzdetails synchronisieren",
    "A single Compute Unit add-on for Cortex CLOUD": "Ein einzelnes Compute Unit-Add-on für Cortex CLOUD",
    "Advanced identity threat detection and response capabilities": "Erweiterte Funktionen zur Erkennung und Abwehr von Identitätsbedrohungen",
    "Application Security add-on for CLOUD, including IAC, SCA and Secrets Security":
      "Application Security-Add-on für CLOUD, einschließlich IAC, SCA und Secrets Security",
    "Cloud Runtime Workloads": "Cloud-Runtime-Workloads",
    "Extended Compute Units": "Erweiterte Compute Units",
    "Forensics Module": "Forensikmodul",
    "Forensics add-on for Cortex CLOUD": "Forensik-Add-on für Cortex CLOUD",
    "Free trial": "Kostenlose Testversion",
    "Host Insights Module": "Host Insights-Modul",
    "Host Insights add-on for Cortex CLOUD": "Host Insights-Add-on für Cortex CLOUD",
    "ITDR Module": "ITDR-Modul",
    "Runtime Security": "Runtime-Sicherheit",
  },

  patterns: [
    { re: /^Addons \((\d+)\)$/, tpl: "Add-ons ($1)" },
    { re: /^(\d[\d,]*)\s+agents$/, tpl: "$1 Agents" },
    { re: /^Expires (.+)$/, tpl: "Läuft ab: $1" },
    { re: /^Expires on (.+)$/, tpl: "Läuft ab am: $1" },
    { re: /^Trial Expires on (.+)$/, tpl: "Testversion läuft ab am: $1" },
    { re: /^Usage: (.+)$/, tpl: "Nutzung: $1" },
    { re: /^([\d.,]+)\s+additional daily on average \(([\d.,]+)\s+annually\)$/, tpl: "Durchschnittlich $1 zusätzlich pro Tag ($2 pro Jahr)" },
  ],

  skip: [],
};
