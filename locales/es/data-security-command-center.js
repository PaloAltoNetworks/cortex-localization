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
    "Data Security Command Center": "Centro de comando de seguridad de datos",

    "AI Assets": "Activos de IA",
    "Alerted Policy Violations": "Infracciones de políticas con alerta",
    "Automated": "Automatizado",
    "Automated Issues": "Incidencias automatizadas",
    "Data Assets Discovered": "Activos de datos descubiertos",
    "Developer Secrets": "Secretos de desarrolladores",
    "Endpoint": "Endpoint",
    "Manual": "Manual",
    "No active threats created yet": "Todavía no se han creado amenazas activas",
    "No policy violations found": "No se encontraron infracciones de políticas",
    "On-Prem": "Entorno local",
    "Powered by Sensitive Data": "Con tecnología de Sensitive Data",
    "Prevented Policy Violations": "Infracciones de políticas prevenidas",
    "Resolved Issues": "Incidencias resueltas",
    "Sensitive": "Confidencial",
    "Sensitive Data Assets": "Activos de datos confidenciales",
  },

  patterns: [
    { re: /^(\d[\d,.]*[KkMm]?)\s+Assets$/, tpl: "$1 activos" },
    { re: /^(\d[\d,.]*[KkMm]?)\s+Databases$/, tpl: "$1 bases de datos" },
    { re: /^(\d[\d,.]*[KkMm]?)\s+Datastores$/, tpl: "$1 almacenes de datos" },
    { re: /^(\d[\d,.]*[KkMm]?)\s+Endpoints$/, tpl: "$1 endpoints" },
    { re: /^(\d[\d,.]*[KkMm]?)\s+Data Store Services$/, tpl: "$1 servicios de almacén de datos" },
  ],

  skip: [],
};
