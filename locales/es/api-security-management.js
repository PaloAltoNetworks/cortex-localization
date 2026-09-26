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
    "API Security Management": "Gestión de seguridad de API",

    "Asset count by sensitive data type": "Número de activos por tipo de datos confidenciales",
    "Attack traffic over time": "Evolución del tráfico de ataques",
    "Attacks Over Time": "Evolución de los ataques",
    "Attacks by Country of Origin": "Ataques por país de origen",
    "Blocked Attacks": "Ataques bloqueados",
    "High severity issues": "Incidencias de gravedad alta",
    "Last 24 Hours": "Últimas 24 horas",
    "Number of APIs": "Número de API",
    "Provider": "Proveedor",
    "Risks by severity over time": "Evolución de los riesgos por gravedad",
    "Risky API Funnel": "Embudo de API riesgosas",
    "Sensitive Data": "Datos confidenciales",
    "Source": "Origen",
    "Total APIs": "Total de API",
    "Total Attacks": "Total de ataques",
    "Total Requests": "Total de solicitudes",
    "Total Risks": "Total de riesgos",
    "Total attacks per type": "Total de ataques por tipo",
    "Try to update or adjust your query filters": "Intente actualizar o ajustar los filtros de la consulta",
    "View by": "Ver por",
  },

  patterns: [],

  skip: [
    // Internal step label inside a funnel chart (not display text).
    /^stairs level\d+$/,
  ],
};
