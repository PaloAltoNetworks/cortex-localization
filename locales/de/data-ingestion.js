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

const dictionaryDataIngestion = {
  exact: {
    "Data Ingestion": "Datenaufnahme",

    "All": "Alle",
    "All Sources": "Alle Quellen",
    "Cloud Logging": "Cloud-Protokollierung",
    "Current Day Ingested": "Heute aufgenommen",
    "Daily Consumption": "Täglicher Verbrauch",
    "Detailed Ingestion": "Detaillierte Aufnahme",
    "Found": "Gefunden",
    "Ingestion Rate": "Aufnahmerate",
    "Last Day Ingested": "Am Vortag aufgenommen",
    "Last Seen": "Zuletzt gesehen",
    "Note: graph display is limited to top 100 results per day.":
      "Hinweis: Die Diagrammanzeige ist auf die 100 wichtigsten Ergebnisse pro Tag begrenzt.",
    "Product": "Produkt",
    "ProductS": "Produkte",
    "Products": "Produkte",
    "Vendor": "Hersteller",
    "Vendors": "Hersteller",
    "results": "Ergebnisse",
    "no filter": "kein Filter",
  },

  patterns: [
    { re: /^(\d+)\s+selected$/, tpl: "$1 ausgewählt" },
  ],

  skip: [],
};
