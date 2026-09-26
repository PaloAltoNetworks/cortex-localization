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

const dictionaryAppsecPolicies = {
  exact: {
    "AppSec Policies": "Políticas de AppSec",

    "AI Recommendations": "Recomendaciones de IA",
    "New Policy": "Nueva política",
    "Policy Id": "ID de política",
    "Recommended": "Recomendado",
    "Scope": "Alcance",
    "Trigger": "Desencadenador",

    // --- Built-in policy names (fixed catalog) ---
    "Block Build and Pull Request on Valid secrets":
      "Bloquear compilación y pull request ante secretos válidos",
    "Block Build and Pull Request on Valid secrets in public repository":
      "Bloquear compilación y pull request ante secretos válidos en un repositorio público",
    "Block Build and Pull Request on strong Copyleft License":
      "Bloquear compilación y pull request ante licencias copyleft fuertes",
    "Block PR on Packages with a HIGH severity operational risk":
      "Bloquear PR en paquetes con riesgo operativo de gravedad HIGH",
    "Block Pull Request": "Bloquear pull request",
    "Block – CI Code Scan": "Bloquear – Análisis de código de CI",
    "CI Code Scan": "Análisis de código de CI",
    "CI Image Scan": "Análisis de imágenes de CI",
    "Comment on Pull Request": "Comentar en la pull request",
    "Create Issue – CI Image Scan": "Crear incidencia – Análisis de imágenes de CI",
    "Create Issue – Periodic Scan": "Crear incidencia – Análisis periódico",
    "Create issue on Secrets found in a GitHub/GitLab webhook URL":
      "Crear incidencia ante secretos encontrados en una URL de webhook de GitHub/GitLab",
    "Create issue on a Direct Poisoned Pipeline Execution":
      "Crear incidencia ante una Direct Poisoned Pipeline Execution",
    "Create issue on a Direct Poisoned Pipeline Execution by outside collaborators":
      "Crear incidencia ante una Direct Poisoned Pipeline Execution por colaboradores externos",
    "Create issues on HIGH and CRITICAL severity IaC misconfigurations":
      "Crear incidencias ante configuraciones incorrectas de IaC de gravedad HIGH y CRITICAL",
    "Create issues on HIGH and CRITICAL severity vulnerabilities":
      "Crear incidencias ante vulnerabilidades de gravedad HIGH y CRITICAL",
    "Create issues on Valid secrets": "Crear incidencias ante secretos válidos",
    "Create issues on Valid secrets in public repository":
      "Crear incidencias ante secretos válidos en un repositorio público",
    "PR Scan": "Análisis de PR",
    "Periodic Scan": "Análisis periódico",
    "Report – CI Code Scan": "Informe – Análisis de código de CI",
    "Secrets found in GitHub/GitLab webhook URL": "Secretos encontrados en una URL de webhook de GitHub/GitLab",

    // --- Condition-expression labels (fixed template) ---
    "AppSec Rule = Secrets found in webhook URL": "Regla de AppSec = Secretos encontrados en URL de webhook",
    "AppSec Rule = Direct Poisoned Pipeline Execution":
      "Regla de AppSec = Direct Poisoned Pipeline Execution",
    "AppSec Rule = Direct Poisoned Pipeline Execution by outside collaborators":
      "Regla de AppSec = Direct Poisoned Pipeline Execution por colaboradores externos",
    "AppSec Rule = Strong copyleft license found in code":
      "Regla de AppSec = Licencia copyleft fuerte encontrada en el código",
    "Finding Type = Iac Misconfigurations, Secrets, Vulnerability, Licenses, Operational Risk, Code Weaknesses, Malware":
      "Tipo de hallazgo = Configuraciones incorrectas de IaC, Secretos, Vulnerabilidad, Licencias, Riesgo operativo, Debilidades de código, Malware",
    "Finding Type = Iac Misconfigurations, Secrets, Vulnerability, Licenses, Operational Risk, Code Weaknesses, Malware, Malicious Packages":
      "Tipo de hallazgo = Configuraciones incorrectas de IaC, Secretos, Vulnerabilidad, Licencias, Riesgo operativo, Debilidades de código, Malware, Paquetes maliciosos",
    "Finding Type = CI/CD Risks": "Tipo de hallazgo = Riesgos de CI/CD",
    "Finding Type = Iac Misconfigurations": "Tipo de hallazgo = Configuraciones incorrectas de IaC",
    "Finding Type = Licenses": "Tipo de hallazgo = Licencias",
    "Finding Type = Operational Risk": "Tipo de hallazgo = Riesgo operativo",
    "Finding Type = Secrets": "Tipo de hallazgo = Secretos",
    "Finding Type = Vulnerability": "Tipo de hallazgo = Vulnerabilidad",
    "Is Public Repository = Yes": "Es repositorio público = Sí",
    "Secret Validity = Valid": "Validez del secreto = Válido",
    "Severity = Critical, High": "Gravedad = Crítica, Alta",
    "PR Scan, CI Code Scan": "Análisis de PR, Análisis de código de CI",
  },

  patterns: [],

  skip: [],
};
