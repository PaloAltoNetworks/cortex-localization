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

const dictionaryDataSecurityCommandCenter = {
  exact: {
    "Data Security Command Center": "Centre de commande Data Security",

    "AI Assets": "Actifs IA",
    "Alerted Policy Violations": "Violations de politique ayant généré une alerte",
    "Automated": "Automatisé",
    "Automated Issues": "Problèmes automatisés",
    "Data Assets Discovered": "Actifs de données découverts",
    "Developer Secrets": "Secrets de développeur",
    "Endpoint": "Endpoint",
    "Manual": "Manuel",
    "No active threats created yet": "Aucune menace active créée pour le moment",
    "No policy violations found": "Aucune violation de politique trouvée",
    "On-Prem": "Sur site",
    "Powered by Sensitive Data": "Optimisé par Sensitive Data",
    "Prevented Policy Violations": "Violations de politique empêchées",
    "Resolved Issues": "Problèmes résolus",
    "Sensitive": "Sensible",
    "Sensitive Data Assets": "Actifs de données sensibles",
  },

  patterns: [
    { re: /^(\d[\d,.]*[KkMm]?)\s+Assets$/, tpl: "$1 actifs" },
    { re: /^(\d[\d,.]*[KkMm]?)\s+Databases$/, tpl: "$1 bases de données" },
    { re: /^(\d[\d,.]*[KkMm]?)\s+Datastores$/, tpl: "$1 magasins de données" },
    { re: /^(\d[\d,.]*[KkMm]?)\s+Endpoints$/, tpl: "$1 endpoints" },
    { re: /^(\d[\d,.]*[KkMm]?)\s+Data Store Services$/, tpl: "$1 services de stockage de données" },
  ],

  skip: [],
};
