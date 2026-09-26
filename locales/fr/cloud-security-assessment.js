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
    "Cloud Security Assessment": "Évaluation de la sécurité cloud",

    "Issues By Status": "Problèmes par statut",
    "Issues by status": "Problèmes par statut",
    "Open Issues By Severity": "Problèmes ouverts par gravité",
    "Open Issues By Violation Type": "Problèmes ouverts par type de violation",
    "Open Issues count": "Nombre de problèmes ouverts",
    "Open issues by severity": "Problèmes ouverts par gravité",
    "Open issues by violation type": "Problèmes ouverts par type de violation",
    "Top Open Issues by Rule": "Principaux problèmes ouverts par règle",
    "issues": "problèmes",
    "rule": "règle",
    "severity": "gravité",

    // --- Severity badges (uppercase enum values) ---
    "CRITICAL": "CRITIQUE",
    "HIGH": "ÉLEVÉE",
    "MEDIUM": "MOYENNE",
    "LOW": "FAIBLE",
    "NEW": "NOUVEAU",
    "IN_PROGRESS": "EN COURS",
    "RESOLVED": "RÉSOLU",

    // --- Category badges (uppercase enum values) ---
    "ATTACK PATH": "CHEMIN D'ATTAQUE",
    "ATTACK_PATH": "CHEMIN D'ATTAQUE",
    "CODE": "CODE",
    "CONFIGURATION": "CONFIGURATION",
    "DATA": "DONNÉES",
    "IDENTITY": "IDENTITÉ",
    "POSTURE": "POSTURE",
    "VULNERABILITY": "VULNÉRABILITÉ",
  },

  patterns: [],

  skip: [
    // Per-finding message containing a file path (fully dynamic).
    /found in \//,
  ],
};
