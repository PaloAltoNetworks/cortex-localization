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
    "Attack Surface Rules": "Regeln für die Angriffsfläche",

    "ASM Issue Categories": "ASM-Problemkategorien",
    "Estimated Issue Count": "Geschätzte Anzahl Probleme",
    "Remediation Guidance": "Anleitung zur Behebung",
    "Remote Access Services": "Fernzugriffsdienste",
    "IT and Security Infrastructure": "IT- und Sicherheitsinfrastruktur",

    // --- Category combination labels (fixed) ---
    "Development Infrastructure, AI Infrastructure": "Entwicklungsinfrastruktur, KI-Infrastruktur",
    "Business Operations Applications, Software Potentially Impacted by CISA Known Exploited Vulnerabilities (BOD 22-01)":
      "Geschäftsanwendungen, Software, die potenziell von bekannten ausgenutzten Schwachstellen laut CISA (BOD 22-01) betroffen ist",
    "IT and Security Infrastructure, Software Potentially Impacted by CISA Known Exploited Vulnerabilities (BOD 22-01)":
      "IT- und Sicherheitsinfrastruktur, Software, die potenziell von bekannten ausgenutzten Schwachstellen laut CISA (BOD 22-01) betroffen ist",
    "Unpatched, Misconfigured, and end-of-life (EOL) systems, Software Potentially Impacted by CISA Known Exploited Vulnerabilities (BOD 22-01)":
      "Nicht gepatchte, fehlkonfigurierte und End-of-Life-Systeme (EOL), Software, die potenziell von bekannten ausgenutzten Schwachstellen laut CISA (BOD 22-01) betroffen ist",
  },

  patterns: [],

  skip: [],
};
