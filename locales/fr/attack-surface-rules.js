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
    "Attack Surface Rules": "Règles de surface d'attaque",

    "ASM Issue Categories": "Catégories de problèmes ASM",
    "Estimated Issue Count": "Nombre estimé de problèmes",
    "Remediation Guidance": "Conseils de correction",
    "Remote Access Services": "Services d'accès à distance",
    "IT and Security Infrastructure": "Infrastructure informatique et de sécurité",

    // --- Category combination labels (fixed) ---
    "Development Infrastructure, AI Infrastructure": "Infrastructure de développement, infrastructure IA",
    "Business Operations Applications, Software Potentially Impacted by CISA Known Exploited Vulnerabilities (BOD 22-01)":
      "Applications d'exploitation métier, logiciels potentiellement affectés par les vulnérabilités connues exploitées de la CISA (BOD 22-01)",
    "IT and Security Infrastructure, Software Potentially Impacted by CISA Known Exploited Vulnerabilities (BOD 22-01)":
      "Infrastructure informatique et de sécurité, logiciels potentiellement affectés par les vulnérabilités connues exploitées de la CISA (BOD 22-01)",
    "Unpatched, Misconfigured, and end-of-life (EOL) systems, Software Potentially Impacted by CISA Known Exploited Vulnerabilities (BOD 22-01)":
      "Systèmes non corrigés, mal configurés et en fin de vie (EOL), logiciels potentiellement affectés par les vulnérabilités connues exploitées de la CISA (BOD 22-01)",
  },

  patterns: [],

  skip: [],
};
