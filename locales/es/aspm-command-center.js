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

const dictionaryAspmCommandCenter = {
  exact: {
    "ASPM Command Center": "Centro de comando de ASPM",

    // --- Time-range filter ---
    "All time": "Todo el período",
    "30D": "30 d",
    "7D": "7 d",
    "90D": "90 d",

    // --- Supply Chain Security widget ---
    "Not detected in your organization": "No detectado en su organización",
    "View all attacks": "Ver todos los ataques",
    "Latest Supply Chain Attacks": "Últimos ataques a la cadena de suministro",

    // --- Coverage widget (inside an SVG chart, via foreignObject) ---
    "Total Coverage": "Cobertura total",
    "Top Application at Risk": "Aplicación con mayor riesgo",

    // --- Cloud account / application ---
    "Azure cloud accounts": "Cuentas de nube de Azure",
    "AWS cloud accounts": "Cuentas de nube de AWS",
    "Google cloud accounts": "Cuentas de Google Cloud",
    "Applications": "Aplicaciones",

    // --- Case / issue ---
    "Issues & Findings": "Incidencias y hallazgos",
    "CASES": "CASOS",
    "OPENED": "ABIERTOS",
    "CLOSED": "CERRADOS",

    // --- AI Guardrails widget ---
    "AI Guardrails": "AI Guardrails",
    "Uncover your tailored AI guardrail recommendations to prevent security risks":
      "Descubra las recomendaciones de AI Guardrails adaptadas a usted para prevenir riesgos de seguridad",
  },

  patterns: [
    { re: /^All Applications\s+(\(\d+\))$/, tpl: "Todas las aplicaciones $1" },
  ],

  skip: [],
};
