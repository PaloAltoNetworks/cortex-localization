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

const dictionaryAiSecurityModule = {
  exact: {
    "AI Activity": "Actividad de IA",
    "Model Families": "Familias de modelos",
    "Use this widget to identify AI assets at risk due to critical-severity security posture issues in your environment.":
      "Use este widget para identificar los activos de IA en riesgo debido a incidencias de postura de seguridad de gravedad crítica en su entorno.",
    "Use this widget to identify AI datasets with a high number of sensitive records.":
      "Use este widget para identificar los conjuntos de datos de IA con un gran número de registros confidenciales.",
    "Use this widget to identify Data Profiles and Data Patterns in your AI datasets.":
      "Use este widget para identificar los perfiles de datos y patrones de datos en sus conjuntos de datos de IA.",
    "Use this widget to identify the most vulnerable AI software packages and most risky compute assets with AI software packages.":
      "Use este widget para identificar los paquetes de software de IA más vulnerables y los activos de cómputo de mayor riesgo con paquetes de software de IA.",
    "Use this widget to identify the most active models and identities in your AI ecosystem.":
      "Use este widget para identificar los modelos e identidades más activos en su ecosistema de IA.",
    "AI Inventory": "Inventario de IA",
    "AI Security Detection Rules": "Reglas de detección de seguridad de IA",
    "AI Security Issues": "Incidencias de seguridad de IA",
    "Active Threats": "Amenazas activas",
    "AWS Assets": "Activos de AWS",
    "Azure Assets": "Activos de Azure",
    "GCP Assets": "Activos de GCP",
    "Data Pattern": "Patrón de datos",
    "Data Profile": "Perfil de datos",
    "Invocations": "Invocaciones",
    "Model": "Modelo",
    "Most Sensitive AI Datasets": "Conjuntos de datos de IA más confidenciales",
    "No Assets with Issues": "No hay activos con incidencias",
    "No Training Datasets Found": "No se encontraron conjuntos de datos de entrenamiento",
    "Posture Issues": "Incidencias de postura",
    "Remediate the most pressing issues to improve your AI security posture.":
      "Corrija las incidencias más urgentes para mejorar la postura de seguridad de IA.",
    "Risk Trends": "Tendencias de riesgo",
    "Risky Assets": "Activos en riesgo",
    "Security issues discovered in your AI ecosystem": "Incidencias de seguridad detectadas en su ecosistema de IA",
    "Sensitive Data Used by AI": "Datos confidenciales usados por la IA",
    "Top AI Assets At Risk": "Principales activos de IA en riesgo",
    "Top AI Threats and Posture Issues to Address": "Principales amenazas de IA e incidencias de postura que abordar",
    "Top Active Identities": "Principales identidades activas",
    "Top Active Models": "Principales modelos activos",
    "Total Open Issues": "Total de incidencias abiertas",
    "Visualization of the AI ecosystem": "Visualización del ecosistema de IA",
    "Vulnerable AI Software Packages": "Paquetes de software de IA vulnerables",
    "Vulnerable Packages": "Paquetes vulnerables",
    "You're secure, no issues to show": "Está protegido, no hay incidencias que mostrar",
  },

  patterns: [
    { re: /^(\d+)\s+Training Datasets$/, tpl: "$1 conjuntos de datos de entrenamiento" },
    { re: /^(\d+)\s+Inference Datasets$/, tpl: "$1 conjuntos de datos de inferencia" },
    { re: /^(\d+)\s+Instances$/, tpl: "$1 instancias" },
    { re: /^(\d+)\s+Model Families$/, tpl: "$1 familias de modelos" },
    { re: /^(\d+)\s+Model Families Found$/, tpl: "Se encontraron $1 familias de modelos" },
    { re: /^(\d+)\s+Model Endpoints$/, tpl: "$1 endpoints de modelo" },
    { re: /^(\d+)\s+Agents$/, tpl: "$1 agentes" },
    { re: /^(\d+)\s+Models$/, tpl: "$1 modelos" },
    { re: /^Issues Created\s+(\(\d+\))$/, tpl: "Incidencias creadas $1" },
    { re: /^Issues Resolved\s+(\(\d+\))$/, tpl: "Incidencias resueltas $1" },
  ],

  skip: [
    // Per-finding detection-date text (fully dynamic).
    /^First Discovered on /,
  ],
};
