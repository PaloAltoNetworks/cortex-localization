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

const dictionaryAspmCommandCenter = {
  exact: {
    "ASPM Command Center": "ASPM Command Center",

    // --- Time-range filter ---
    "All time": "Gesamter Zeitraum",
    "30D": "30 T",
    "7D": "7 T",
    "90D": "90 T",

    // --- Supply Chain Security widget ---
    "Not detected in your organization": "In Ihrer Organisation nicht erkannt",
    "View all attacks": "Alle Angriffe anzeigen",
    "Latest Supply Chain Attacks": "Neueste Lieferkettenangriffe",

    // --- Coverage widget (inside an SVG chart, via foreignObject) ---
    "Total Coverage": "Gesamtabdeckung",
    "Top Application at Risk": "Anwendung mit dem höchsten Risiko",

    // --- Cloud account / application ---
    "Azure cloud accounts": "Azure-Cloud-Konten",
    "AWS cloud accounts": "AWS-Cloud-Konten",
    "Google cloud accounts": "Google-Cloud-Konten",
    "Applications": "Anwendungen",

    // --- Case / issue ---
    "Issues & Findings": "Probleme und Befunde",
    "CASES": "FÄLLE",
    "OPENED": "GEÖFFNET",
    "CLOSED": "GESCHLOSSEN",

    // --- AI Guardrails widget ---
    "AI Guardrails": "KI-Guardrails",
    "Uncover your tailored AI guardrail recommendations to prevent security risks":
      "Entdecken Sie Ihre maßgeschneiderten KI-Guardrail-Empfehlungen zur Vermeidung von Sicherheitsrisiken",
  },

  patterns: [
    { re: /^All Applications\s+(\(\d+\))$/, tpl: "Alle Anwendungen $1" },
  ],

  skip: [],
};
