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
    "DNS Activity": "Activité DNS",
    "DNS Response Codes": "Codes de réponse DNS",
    "Daily DNS Queries": "Requêtes DNS quotidiennes",
    "Daily Threats": "Menaces quotidiennes",
    "Dataset Unavailable": "Jeu de données indisponible",
    "FAILED TO RUN QUERY": "ÉCHEC DE L'EXÉCUTION DE LA REQUÊTE",
    "From Zone": "Zone source",
    "GB Sent and Received": "Go envoyés et reçus",
    "Geo Locations": "Géolocalisations",
    "HTTP Activity": "Activité HTTP",
    "HTTP Content Type": "Type de contenu HTTP",
    "HTTP Method": "Méthode HTTP",
    "HTTP Response Code": "Code de réponse HTTP",
    "HTTP User Agent": "User-Agent HTTP",
    "Network Zones": "Zones réseau",
    "Overview": "Vue d'ensemble",
    "Recent Threats": "Menaces récentes",
    "The required dataset for this widget is not available.":
      "Le jeu de données requis pour ce widget n'est pas disponible.",
    "Threat Category": "Catégorie de menace",
    "Threat Severity": "Gravité de la menace",
    "Threat Sources": "Sources des menaces",
    "Threats": "Menaces",
    "To Zone": "Zone de destination",
    "Top App-IDs": "Principaux App-ID",
    "Top Geo Locations": "Principales géolocalisations",
    "Transport Protocols": "Protocoles de transport",
    "URL Activity": "Activité URL",
    "URL Categories": "Catégories d'URL",
    "URL Risk": "Risque URL",
    "Volume": "Volume",
    "Zones": "Zones",
  },

  patterns: [
    { re: /^unknown field (\w+)\.$/, tpl: "Champ inconnu $1." },
    { re: /^\+\s*(\d+)\s+more$/, tpl: "+ $1 de plus" },
  ],

  skip: [],
};
