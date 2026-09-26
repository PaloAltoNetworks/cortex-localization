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

const dictionaryCloudSecurityAssessment = {
  exact: {
    "Cloud Security Assessment": "Cloud-Sicherheitsbewertung",

    "Issues By Status": "Probleme nach Status",
    "Issues by status": "Probleme nach Status",
    "Open Issues By Severity": "Offene Probleme nach Schweregrad",
    "Open Issues By Violation Type": "Offene Probleme nach Verstoßtyp",
    "Open Issues count": "Anzahl offener Probleme",
    "Open issues by severity": "Offene Probleme nach Schweregrad",
    "Open issues by violation type": "Offene Probleme nach Verstoßtyp",
    "Top Open Issues by Rule": "Wichtigste offene Probleme nach Regel",
    "issues": "Probleme",
    "rule": "Regel",
    "severity": "Schweregrad",

    // --- Severity badges (uppercase enum values) ---
    "CRITICAL": "KRITISCH",
    "HIGH": "HOCH",
    "MEDIUM": "MITTEL",
    "LOW": "NIEDRIG",
    "NEW": "NEU",
    "IN_PROGRESS": "IN BEARBEITUNG",
    "RESOLVED": "BEHOBEN",

    // --- Category badges (uppercase enum values) ---
    "ATTACK PATH": "ANGRIFFSPFAD",
    "ATTACK_PATH": "ANGRIFFSPFAD",
    "CODE": "CODE",
    "CONFIGURATION": "KONFIGURATION",
    "DATA": "DATEN",
    "IDENTITY": "IDENTITÄT",
    "POSTURE": "SICHERHEITSLAGE",
    "VULNERABILITY": "SCHWACHSTELLE",
  },

  patterns: [],

  skip: [
    // Per-finding message containing a file path (fully dynamic).
    /found in \//,
  ],
};
