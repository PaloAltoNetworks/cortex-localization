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

const dictionaryMitreAttackFrameworkCoverage = {
  exact: {
    "MITRE ATT&CK Framework Coverage": "Abdeckung des MITRE ATT&CK-Frameworks",

    "Active": "Aktiv",
    "Contributing Data Sources": "Beitragende Datenquellen",
    "Data Source Type:": "Datenquellentyp:",
    "Detection Type:": "Erkennungstyp:",
    "Download Support File": "Supportdatei herunterladen",
    "Inactive": "Inaktiv",
    "Number of Detection Rules Per Tactic": "Anzahl der Erkennungsregeln pro Taktik",
    "Please try again in a few minutes.": "Bitte versuchen Sie es in einigen Minuten erneut.",
    "Show only Covered Methods": "Nur abgedeckte Methoden anzeigen",
    "We are experiencing a problem, data may not be up to date.":
      "Es ist ein Problem aufgetreten. Die Daten sind möglicherweise nicht aktuell.",
  },

  patterns: [
    { re: /^(\d+)\s+items selected$/, tpl: "$1 Elemente ausgewählt" },
  ],

  skip: [],
};
