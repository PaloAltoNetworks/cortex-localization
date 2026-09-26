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

const dictionaryApiSecurityManagement = {
  exact: {
    "API Security Management": "API-Sicherheitsverwaltung",

    "Asset count by sensitive data type": "Anzahl der Assets nach sensiblem Datentyp",
    "Attack traffic over time": "Angriffsdatenverkehr im Zeitverlauf",
    "Attacks Over Time": "Angriffe im Zeitverlauf",
    "Attacks by Country of Origin": "Angriffe nach Herkunftsland",
    "Blocked Attacks": "Blockierte Angriffe",
    "High severity issues": "Probleme mit hohem Schweregrad",
    "Last 24 Hours": "Letzte 24 Stunden",
    "Number of APIs": "Anzahl der APIs",
    "Provider": "Anbieter",
    "Risks by severity over time": "Risiken nach Schweregrad im Zeitverlauf",
    "Risky API Funnel": "Trichter riskanter APIs",
    "Sensitive Data": "Sensible Daten",
    "Source": "Quelle",
    "Total APIs": "APIs gesamt",
    "Total Attacks": "Angriffe gesamt",
    "Total Requests": "Anfragen gesamt",
    "Total Risks": "Risiken gesamt",
    "Total attacks per type": "Angriffe gesamt nach Typ",
    "Try to update or adjust your query filters": "Versuchen Sie, Ihre Abfragefilter zu aktualisieren oder anzupassen",
    "View by": "Anzeigen nach",
  },

  patterns: [],

  skip: [
    // Internal step label inside a funnel chart (not display text).
    /^stairs level\d+$/,
  ],
};
