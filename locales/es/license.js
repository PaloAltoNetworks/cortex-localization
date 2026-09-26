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

const dictionaryLicense = {
  exact: {
    "License Details": "Detalles de la licencia",
    "Sync license details": "Sincronizar detalles de la licencia",
    "A single Compute Unit add-on for Cortex CLOUD": "Complemento de una sola Compute Unit para Cortex CLOUD",
    "Advanced identity threat detection and response capabilities": "Funcionalidades avanzadas de detección y respuesta a amenazas de identidad",
    "Application Security add-on for CLOUD, including IAC, SCA and Secrets Security":
      "Complemento de Application Security para CLOUD, que incluye IAC, SCA y Secrets Security",
    "Cloud Runtime Workloads": "Cargas de trabajo en tiempo de ejecución en la nube",
    "Extended Compute Units": "Compute Units ampliadas",
    "Forensics Module": "Módulo de análisis forense",
    "Forensics add-on for Cortex CLOUD": "Complemento de análisis forense para Cortex CLOUD",
    "Free trial": "Prueba gratuita",
    "Host Insights Module": "Módulo Host Insights",
    "Host Insights add-on for Cortex CLOUD": "Complemento de Host Insights para Cortex CLOUD",
    "ITDR Module": "Módulo ITDR",
    "Runtime Security": "Seguridad en tiempo de ejecución",
  },

  patterns: [
    { re: /^Addons \((\d+)\)$/, tpl: "Complementos ($1)" },
    { re: /^(\d[\d,]*)\s+agents$/, tpl: "$1 agentes" },
    { re: /^Expires (.+)$/, tpl: "Vence: $1" },
    { re: /^Expires on (.+)$/, tpl: "Vence el $1" },
    { re: /^Trial Expires on (.+)$/, tpl: "La prueba vence el $1" },
    { re: /^Usage: (.+)$/, tpl: "Uso: $1" },
    { re: /^([\d.,]+)\s+additional daily on average \(([\d.,]+)\s+annually\)$/, tpl: "$1 adicionales al día de media ($2 al año)" },
  ],

  skip: [],
};
