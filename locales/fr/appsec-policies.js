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
    "AppSec Policies": "Politiques AppSec",

    "AI Recommendations": "Recommandations IA",
    "New Policy": "Nouvelle politique",
    "Policy Id": "ID de la politique",
    "Recommended": "Recommandé",
    "Scope": "Portée",
    "Trigger": "Déclencheur",

    // --- Built-in policy names (fixed catalog) ---
    "Block Build and Pull Request on Valid secrets":
      "Bloquer le build et la pull request en cas de secrets valides",
    "Block Build and Pull Request on Valid secrets in public repository":
      "Bloquer le build et la pull request en cas de secrets valides dans un dépôt public",
    "Block Build and Pull Request on strong Copyleft License":
      "Bloquer le build et la pull request en cas de licence copyleft forte",
    "Block PR on Packages with a HIGH severity operational risk":
      "Bloquer la PR sur les packages présentant un risque opérationnel de gravité HIGH",
    "Block Pull Request": "Bloquer la pull request",
    "Block – CI Code Scan": "Bloquer – Analyse du code CI",
    "CI Code Scan": "Analyse du code CI",
    "CI Image Scan": "Analyse d'image CI",
    "Comment on Pull Request": "Commenter la pull request",
    "Create Issue – CI Image Scan": "Créer un problème – Analyse d'image CI",
    "Create Issue – Periodic Scan": "Créer un problème – Analyse périodique",
    "Create issue on Secrets found in a GitHub/GitLab webhook URL":
      "Créer un problème pour les secrets trouvés dans une URL de webhook GitHub/GitLab",
    "Create issue on a Direct Poisoned Pipeline Execution":
      "Créer un problème en cas de Direct Poisoned Pipeline Execution",
    "Create issue on a Direct Poisoned Pipeline Execution by outside collaborators":
      "Créer un problème en cas de Direct Poisoned Pipeline Execution par des collaborateurs externes",
    "Create issues on HIGH and CRITICAL severity IaC misconfigurations":
      "Créer des problèmes pour les mauvaises configurations IaC de gravité HIGH et CRITICAL",
    "Create issues on HIGH and CRITICAL severity vulnerabilities":
      "Créer des problèmes pour les vulnérabilités de gravité HIGH et CRITICAL",
    "Create issues on Valid secrets": "Créer des problèmes pour les secrets valides",
    "Create issues on Valid secrets in public repository":
      "Créer des problèmes pour les secrets valides dans un dépôt public",
    "PR Scan": "Analyse de PR",
    "Periodic Scan": "Analyse périodique",
    "Report – CI Code Scan": "Rapport – Analyse du code CI",
    "Secrets found in GitHub/GitLab webhook URL": "Secrets trouvés dans une URL de webhook GitHub/GitLab",

    // --- Condition-expression labels (fixed template) ---
    "AppSec Rule = Secrets found in webhook URL": "Règle AppSec = Secrets trouvés dans une URL de webhook",
    "AppSec Rule = Direct Poisoned Pipeline Execution":
      "Règle AppSec = Direct Poisoned Pipeline Execution",
    "AppSec Rule = Direct Poisoned Pipeline Execution by outside collaborators":
      "Règle AppSec = Direct Poisoned Pipeline Execution par des collaborateurs externes",
    "AppSec Rule = Strong copyleft license found in code":
      "Règle AppSec = Licence copyleft forte trouvée dans le code",
    "Finding Type = Iac Misconfigurations, Secrets, Vulnerability, Licenses, Operational Risk, Code Weaknesses, Malware":
      "Type de constat = Mauvaises configurations IaC, secrets, vulnérabilité, licences, risque opérationnel, faiblesses du code, logiciels malveillants",
    "Finding Type = Iac Misconfigurations, Secrets, Vulnerability, Licenses, Operational Risk, Code Weaknesses, Malware, Malicious Packages":
      "Type de constat = Mauvaises configurations IaC, secrets, vulnérabilité, licences, risque opérationnel, faiblesses du code, logiciels malveillants, packages malveillants",
    "Finding Type = CI/CD Risks": "Type de constat = Risques CI/CD",
    "Finding Type = Iac Misconfigurations": "Type de constat = Mauvaises configurations IaC",
    "Finding Type = Licenses": "Type de constat = Licences",
    "Finding Type = Operational Risk": "Type de constat = Risque opérationnel",
    "Finding Type = Secrets": "Type de constat = Secrets",
    "Finding Type = Vulnerability": "Type de constat = Vulnérabilité",
    "Is Public Repository = Yes": "Dépôt public = Oui",
    "Secret Validity = Valid": "Validité du secret = Valide",
    "Severity = Critical, High": "Gravité = Critique, Élevée",
    "PR Scan, CI Code Scan": "Analyse de PR, analyse du code CI",
  },

  patterns: [],

  skip: [],
};
