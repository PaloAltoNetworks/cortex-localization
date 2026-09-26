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
    "Data Ingestion": "Ingestion de données",

    "All": "Tous",
    "All Sources": "Toutes les sources",
    "Cloud Logging": "Journalisation cloud",
    "Current Day Ingested": "Volume ingéré aujourd'hui",
    "Daily Consumption": "Consommation quotidienne",
    "Detailed Ingestion": "Ingestion détaillée",
    "Found": "Trouvé",
    "Ingestion Rate": "Taux d'ingestion",
    "Last Day Ingested": "Volume ingéré la veille",
    "Last Seen": "Vu pour la dernière fois",
    "Note: graph display is limited to top 100 results per day.":
      "Remarque : l'affichage du graphique est limité aux 100 premiers résultats par jour.",
    "Product": "Produit",
    "ProductS": "Produits",
    "Products": "Produits",
    "Vendor": "Éditeur",
    "Vendors": "Éditeurs",
    "results": "résultats",
    "no filter": "aucun filtre",
  },

  patterns: [
    { re: /^(\d+)\s+selected$/, tpl: "$1 sélectionné(s)" },
  ],

  skip: [],
};
