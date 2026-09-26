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
    "API Security Management": "Gestion de la sécurité des API",

    "Asset count by sensitive data type": "Nombre d'actifs par type de données sensibles",
    "Attack traffic over time": "Évolution du trafic d'attaque",
    "Attacks Over Time": "Évolution des attaques",
    "Attacks by Country of Origin": "Attaques par pays d'origine",
    "Blocked Attacks": "Attaques bloquées",
    "High severity issues": "Problèmes de gravité élevée",
    "Last 24 Hours": "24 dernières heures",
    "Number of APIs": "Nombre d'API",
    "Provider": "Fournisseur",
    "Risks by severity over time": "Évolution des risques par gravité",
    "Risky API Funnel": "Entonnoir des API à risque",
    "Sensitive Data": "Données sensibles",
    "Source": "Source",
    "Total APIs": "Total des API",
    "Total Attacks": "Total des attaques",
    "Total Requests": "Total des requêtes",
    "Total Risks": "Total des risques",
    "Total attacks per type": "Total des attaques par type",
    "Try to update or adjust your query filters": "Essayez de mettre à jour ou d'ajuster les filtres de votre requête",
    "View by": "Afficher par",
  },

  patterns: [],

  skip: [
    // Internal step label inside a funnel chart (not display text).
    /^stairs level\d+$/,
  ],
};
