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
    "Cloud Security Assessment": "Evaluación de seguridad en la nube",

    "Issues By Status": "Incidencias por estado",
    "Issues by status": "Incidencias por estado",
    "Open Issues By Severity": "Incidencias abiertas por gravedad",
    "Open Issues By Violation Type": "Incidencias abiertas por tipo de infracción",
    "Open Issues count": "Número de incidencias abiertas",
    "Open issues by severity": "Incidencias abiertas por gravedad",
    "Open issues by violation type": "Incidencias abiertas por tipo de infracción",
    "Top Open Issues by Rule": "Principales incidencias abiertas por regla",
    "issues": "incidencias",
    "rule": "regla",
    "severity": "gravedad",

    // --- Severity badges (uppercase enum values) ---
    "CRITICAL": "CRÍTICA",
    "HIGH": "ALTA",
    "MEDIUM": "MEDIA",
    "LOW": "BAJA",
    "NEW": "NUEVO",
    "IN_PROGRESS": "EN CURSO",
    "RESOLVED": "RESUELTO",

    // --- Category badges (uppercase enum values) ---
    "ATTACK PATH": "RUTA DE ATAQUE",
    "ATTACK_PATH": "RUTA DE ATAQUE",
    "CODE": "CÓDIGO",
    "CONFIGURATION": "CONFIGURACIÓN",
    "DATA": "DATOS",
    "IDENTITY": "IDENTIDAD",
    "POSTURE": "POSTURA",
    "VULNERABILITY": "VULNERABILIDAD",
  },

  patterns: [],

  skip: [
    // Per-finding message containing a file path (fully dynamic).
    /found in \//,
  ],
};
