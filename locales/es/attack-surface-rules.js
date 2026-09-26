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

const dictionaryAttackSurfaceRules = {
  exact: {
    "Attack Surface Rules": "Reglas de superficie de ataque",

    "ASM Issue Categories": "Categorías de incidencias de ASM",
    "Estimated Issue Count": "Número estimado de incidencias",
    "Remediation Guidance": "Guía de corrección",
    "Remote Access Services": "Servicios de acceso remoto",
    "IT and Security Infrastructure": "Infraestructura de TI y seguridad",

    // --- Category combination labels (fixed) ---
    "Development Infrastructure, AI Infrastructure": "Infraestructura de desarrollo, infraestructura de IA",
    "Business Operations Applications, Software Potentially Impacted by CISA Known Exploited Vulnerabilities (BOD 22-01)":
      "Aplicaciones de operaciones empresariales, software potencialmente afectado por vulnerabilidades explotadas conocidas de CISA (BOD 22-01)",
    "IT and Security Infrastructure, Software Potentially Impacted by CISA Known Exploited Vulnerabilities (BOD 22-01)":
      "Infraestructura de TI y seguridad, software potencialmente afectado por vulnerabilidades explotadas conocidas de CISA (BOD 22-01)",
    "Unpatched, Misconfigured, and end-of-life (EOL) systems, Software Potentially Impacted by CISA Known Exploited Vulnerabilities (BOD 22-01)":
      "Sistemas sin parches, mal configurados y al final de su vida útil (EOL), software potencialmente afectado por vulnerabilidades explotadas conocidas de CISA (BOD 22-01)",
  },

  patterns: [],

  skip: [],
};
