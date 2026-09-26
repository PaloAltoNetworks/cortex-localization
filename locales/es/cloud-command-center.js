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

const dictionaryCloudCommandCenter = {
  exact: {
    "Cortex Cloud Command Center": "Centro de comando de Cortex Cloud",
    "Cloud Command Center": "Centro de comando de nube",

    "Connect Data Source": "Conectar origen de datos",
    "Showing results from all providers": "Se muestran resultados de todos los proveedores",
    "Total Assets at Risk": "Total de activos en riesgo",

    "Active Threat Cases": "Casos de amenazas activas",
    "Posture Cases": "Casos de postura",
    "Created": "Creado",
    "Resolved": "Resuelto",
    "Actions Available": "Acciones disponibles",
    "Automation Available": "Automatización disponible",
    "Remediation Available": "Corrección disponible",

    "Top Active Threats to Address": "Principales amenazas activas que abordar",
    "Investigate and resolve top threats to prevent breach":
      "Investigue y resuelva las principales amenazas para evitar una brecha",
    "View Active Threats": "Ver amenazas activas",

    "Top Posture Cases to Address": "Principales casos de postura que abordar",
    "Remediate the cases below to improve your organizational security posture":
      "Corrija los siguientes casos para mejorar la postura de seguridad de su organización",
    "All Classes": "Todas las clases",
    "View Posture Cases": "Ver casos de postura",

    "Vulnerability Summary": "Resumen de vulnerabilidades",
    "Manage Vulnerabilities": "Administrar vulnerabilidades",
    "Unique Risky Vulnerabilities Issues": "Incidencias de vulnerabilidades de riesgo únicas",
    "Critical & High": "Crítica y alta",
    "Weaponized Exploit": "Exploit convertido en arma",
    "Fix Available": "Corrección disponible",
    "Top Risky Vulnerabilities": "Principales vulnerabilidades de riesgo",

    "Compliance Summary": "Resumen de cumplimiento",
    "View Compliance Center": "Ver centro de cumplimiento",
    "Compliance Standard by Score": "Estándares de cumplimiento por puntuación",
    "Standards Status": "Estado de los estándares",
    "Controls Assessed": "Controles evaluados",

    // --- Dashboard: data-source connection / scan status / asset explorer ---
    "Connect account": "Conectar cuenta",
    "Scanning health": "Salud del análisis",
    "Explore AI Assets": "Explorar activos de IA",
    "Explore API Assets": "Explorar activos de API",
    "Explore Compute Assets": "Explorar activos de cómputo",
    "Explore Data Assets": "Explorar activos de datos",
    "Explore Identity Assets": "Explorar activos de identidad",
    "Explore Other Assets": "Explorar otros activos",
    "Explore Network Assets": "Explorar activos de red",
  },

  patterns: [
    { re: /^(\d[\d,.]*[KkMm]?)\s+Controls Assessed$/, tpl: "$1 controles evaluados" },
    { re: /^(\d[\d,.]*[KkMm]?)\s+AWS Accounts$/, tpl: "$1 cuentas de AWS" },
    { re: /^(\d[\d,.]*[KkMm]?)\s+GCP Accounts$/, tpl: "$1 cuentas de GCP" },
    { re: /^(\d[\d,.]*[KkMm]?)\s+Azure Accounts$/, tpl: "$1 cuentas de Azure" },
    { re: /^(\d[\d,.]*[KkMm]?)\s+OCI Accounts$/, tpl: "$1 cuentas de OCI" },
    { re: /^(\d[\d,.]*[KkMm]?)\s+Snowflake Accounts$/, tpl: "$1 cuentas de Snowflake" },
    { re: /^(\d+)%\s+Health$/, tpl: "Salud: $1%" },
  ],

  skip: [],
};
