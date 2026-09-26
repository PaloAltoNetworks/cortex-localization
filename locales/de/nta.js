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

const dictionaryNta = {
  exact: {
    "DNS Activity": "DNS-Aktivität",
    "DNS Response Codes": "DNS-Antwortcodes",
    "Daily DNS Queries": "Tägliche DNS-Abfragen",
    "Daily Threats": "Tägliche Bedrohungen",
    "Dataset Unavailable": "Datensatz nicht verfügbar",
    "FAILED TO RUN QUERY": "ABFRAGE KONNTE NICHT AUSGEFÜHRT WERDEN",
    "From Zone": "Quellzone",
    "GB Sent and Received": "Gesendete und empfangene GB",
    "Geo Locations": "Geografische Standorte",
    "HTTP Activity": "HTTP-Aktivität",
    "HTTP Content Type": "HTTP-Inhaltstyp",
    "HTTP Method": "HTTP-Methode",
    "HTTP Response Code": "HTTP-Antwortcode",
    "HTTP User Agent": "HTTP-User-Agent",
    "Network Zones": "Netzwerkzonen",
    "Overview": "Übersicht",
    "Recent Threats": "Aktuelle Bedrohungen",
    "The required dataset for this widget is not available.":
      "Der für dieses Widget erforderliche Datensatz ist nicht verfügbar.",
    "Threat Category": "Bedrohungskategorie",
    "Threat Severity": "Schweregrad der Bedrohung",
    "Threat Sources": "Bedrohungsquellen",
    "Threats": "Bedrohungen",
    "To Zone": "Zielzone",
    "Top App-IDs": "Top-App-IDs",
    "Top Geo Locations": "Top-Standorte",
    "Transport Protocols": "Transportprotokolle",
    "URL Activity": "URL-Aktivität",
    "URL Categories": "URL-Kategorien",
    "URL Risk": "URL-Risiko",
    "Volume": "Volumen",
    "Zones": "Zonen",
  },

  patterns: [
    { re: /^unknown field (\w+)\.$/, tpl: "Unbekanntes Feld $1." },
    { re: /^\+\s*(\d+)\s+more$/, tpl: "+ $1 weitere" },
  ],

  skip: [],
};
