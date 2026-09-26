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
    "AppSec Policies": "AppSec-Richtlinien",

    "AI Recommendations": "KI-Empfehlungen",
    "New Policy": "Neue Richtlinie",
    "Policy Id": "Richtlinien-ID",
    "Recommended": "Empfohlen",
    "Scope": "Geltungsbereich",
    "Trigger": "Auslöser",

    // --- Built-in policy names (fixed catalog) ---
    "Block Build and Pull Request on Valid secrets":
      "Build und Pull Request bei gültigen Secrets blockieren",
    "Block Build and Pull Request on Valid secrets in public repository":
      "Build und Pull Request bei gültigen Secrets in öffentlichem Repository blockieren",
    "Block Build and Pull Request on strong Copyleft License":
      "Build und Pull Request bei starker Copyleft-Lizenz blockieren",
    "Block PR on Packages with a HIGH severity operational risk":
      "PR bei Paketen mit betrieblichem Risiko vom Schweregrad HIGH blockieren",
    "Block Pull Request": "Pull Request blockieren",
    "Block – CI Code Scan": "Blockieren – CI-Code-Scan",
    "CI Code Scan": "CI-Code-Scan",
    "CI Image Scan": "CI-Image-Scan",
    "Comment on Pull Request": "Pull Request kommentieren",
    "Create Issue – CI Image Scan": "Problem erstellen – CI-Image-Scan",
    "Create Issue – Periodic Scan": "Problem erstellen – Periodischer Scan",
    "Create issue on Secrets found in a GitHub/GitLab webhook URL":
      "Problem bei Secrets in einer GitHub/GitLab-Webhook-URL erstellen",
    "Create issue on a Direct Poisoned Pipeline Execution":
      "Problem bei Direct Poisoned Pipeline Execution erstellen",
    "Create issue on a Direct Poisoned Pipeline Execution by outside collaborators":
      "Problem bei Direct Poisoned Pipeline Execution durch externe Mitwirkende erstellen",
    "Create issues on HIGH and CRITICAL severity IaC misconfigurations":
      "Probleme bei IaC-Fehlkonfigurationen vom Schweregrad HIGH und CRITICAL erstellen",
    "Create issues on HIGH and CRITICAL severity vulnerabilities":
      "Probleme bei Schwachstellen vom Schweregrad HIGH und CRITICAL erstellen",
    "Create issues on Valid secrets": "Probleme bei gültigen Secrets erstellen",
    "Create issues on Valid secrets in public repository":
      "Probleme bei gültigen Secrets in öffentlichem Repository erstellen",
    "PR Scan": "PR-Scan",
    "Periodic Scan": "Periodischer Scan",
    "Report – CI Code Scan": "Bericht – CI-Code-Scan",
    "Secrets found in GitHub/GitLab webhook URL": "In GitHub/GitLab-Webhook-URL gefundene Secrets",

    // --- Condition-expression labels (fixed template) ---
    "AppSec Rule = Secrets found in webhook URL": "AppSec-Regel = In Webhook-URL gefundene Secrets",
    "AppSec Rule = Direct Poisoned Pipeline Execution":
      "AppSec-Regel = Direct Poisoned Pipeline Execution",
    "AppSec Rule = Direct Poisoned Pipeline Execution by outside collaborators":
      "AppSec-Regel = Direct Poisoned Pipeline Execution durch externe Mitwirkende",
    "AppSec Rule = Strong copyleft license found in code":
      "AppSec-Regel = Starke Copyleft-Lizenz im Code gefunden",
    "Finding Type = Iac Misconfigurations, Secrets, Vulnerability, Licenses, Operational Risk, Code Weaknesses, Malware":
      "Befundtyp = IaC-Fehlkonfigurationen, Secrets, Schwachstelle, Lizenzen, Betriebliches Risiko, Code-Schwächen, Malware",
    "Finding Type = Iac Misconfigurations, Secrets, Vulnerability, Licenses, Operational Risk, Code Weaknesses, Malware, Malicious Packages":
      "Befundtyp = IaC-Fehlkonfigurationen, Secrets, Schwachstelle, Lizenzen, Betriebliches Risiko, Code-Schwächen, Malware, Schädliche Pakete",
    "Finding Type = CI/CD Risks": "Befundtyp = CI/CD-Risiken",
    "Finding Type = Iac Misconfigurations": "Befundtyp = IaC-Fehlkonfigurationen",
    "Finding Type = Licenses": "Befundtyp = Lizenzen",
    "Finding Type = Operational Risk": "Befundtyp = Betriebliches Risiko",
    "Finding Type = Secrets": "Befundtyp = Secrets",
    "Finding Type = Vulnerability": "Befundtyp = Schwachstelle",
    "Is Public Repository = Yes": "Öffentliches Repository = Ja",
    "Secret Validity = Valid": "Gültigkeit des Secrets = Gültig",
    "Severity = Critical, High": "Schweregrad = Kritisch, Hoch",
    "PR Scan, CI Code Scan": "PR-Scan, CI-Code-Scan",
  },

  patterns: [],

  skip: [],
};
