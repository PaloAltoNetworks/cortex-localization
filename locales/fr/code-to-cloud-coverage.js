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

const dictionaryCodeToCloudCoverage = {
  exact: {
    // --- Code to Cloud coverage screen ---
    "Artifact type": "Type d'artefact",
    "Artifacts traced from runtime": "Artefacts tracés depuis l'exécution",
    "Infrastructure": "Infrastructure",
    "Cloud assets traced from runtime": "Actifs cloud tracés depuis l'exécution",
    "Cloud assets fully traced cloud-to-code": "Actifs cloud entièrement tracés du cloud au code",
    "Cloud assets lack YOR tags; manual tagging needed": "Les actifs cloud n'ont pas de balises YOR ; un balisage manuel est nécessaire",
    "Tagging Needed": "Balisage nécessaire",
    "View Cloud assets without YOR tag": "Afficher les actifs cloud sans balise YOR",
    "Cloud assets without YOR TAG": "Actifs cloud sans balise YOR",
    "Calculate to": "Calculer jusqu'à",
    "Artifacts traced from source": "Artefacts tracés depuis la source",
    "VCS Repos lack connected pipelines to trace to build": "Les dépôts VCS n'ont pas de pipelines connectés pour le traçage jusqu'au build",
    "View repositories": "Afficher les dépôts",
    "Repos with no traced pipelines": "Dépôts sans pipeline tracé",
    "VCS Repos lack registry connection for trace to deploy": "Les dépôts VCS n'ont pas de connexion à un registre pour le traçage jusqu'au déploiement",
    "Repos with no traced artifact registries": "Dépôts sans registre d'artefacts tracé",
    "Build": "Build",
    "Calculate from": "Calculer à partir de",
    "Cloud → Code": "Cloud → Code",
    "Code → Cloud": "Code → Cloud",
    "Container Images not traced beyond Deploy": "Images de conteneur non tracées au-delà du déploiement",
    "Container images lack VCS repos to trace to Code": "Les images de conteneur n'ont pas de dépôts VCS pour le traçage jusqu'au code",
    "Container images lack pipelines to trace to Build": "Les images de conteneur n'ont pas de pipelines pour le traçage jusqu'au build",
    "Deployment": "Déploiement",
    "Flow Direction": "Sens du flux",
    "Onboard CI/CD instances": "Intégrer des instances CI/CD",
    "Onboard Container Registries": "Intégrer des registres de conteneurs",
    "Onboard VCS Organization/repo": "Intégrer une organisation/un dépôt VCS",
    "Onboarding suggested": "Intégration suggérée",
    "Recommended Next Steps": "Prochaines étapes recommandées",
    "Runtime Images not traced": "Images d'exécution non tracées",
    "Runtime Images not traced beyond pipeline": "Images d'exécution non tracées au-delà du pipeline",
    "Runtime artifacts": "Artefacts d'exécution",
    "Runtime artifacts fully traced cloud-to-code": "Artefacts d'exécution entièrement tracés du cloud au code",
    "Runtime images lack registries to trace to Deploy": "Les images d'exécution n'ont pas de registres pour le traçage jusqu'au déploiement",
    "Steps required to improve traceability": "Étapes nécessaires pour améliorer la traçabilité",
    "VM instances lack pipelines to trace to Build": "Les instances de VM n'ont pas de pipelines pour le traçage jusqu'au build",
    "VM instances not traced beyond Runtime": "Instances de VM non tracées au-delà de l'exécution",
    "View Runtime Images traced only to pipeline": "Afficher les images d'exécution tracées uniquement jusqu'au pipeline",
    "View Untraced Container Images": "Afficher les images de conteneur non tracées",
    "View Untraced VM Instances": "Afficher les instances de VM non tracées",
    "What is being traced": "Éléments tracés",
    "Untraced": "Non tracé",
    "No repositories detected": "Aucun dépôt détecté",
    // Kept verbatim ("not transferred"). Other items use "not traced", but this one uses a
    // different word; kept as-is to exact-match the actual displayed text.
    "Cloud Assets not transferred": "Actifs cloud non transférés",
    "IaC resource traced from code": "Ressource IaC tracée depuis le code",
    "No runtime detected": "Aucune exécution détectée",
    "No pipelines detected": "Aucun pipeline détecté",
    "No deployment detected": "Aucun déploiement détecté",
    "Artifacts transferred": "Artefacts transférés",
    "Artifacts not transferred": "Artefacts non transférés",
    "Repositories not transferred": "Dépôts non transférés",
    "IaC resources not transferred": "Ressources IaC non transférées",
    "Repositories transferred": "Dépôts transférés",
    "Cloud Assets transferred": "Actifs cloud transférés",
    "IaC resources transferred": "Ressources IaC transférées",
    "IaC resources lack YOR tags to trace to runtime": "Les ressources IaC n'ont pas de balises YOR pour le traçage jusqu'à l'exécution",
    "Tagged IaC resources lack cloud accounts for Runtime trace": "Les ressources IaC balisées n'ont pas de comptes cloud pour le traçage de l'exécution",
    "View IaC resources without YOR tag": "Afficher les ressources IaC sans balise YOR",
    "View untraced tagged IaC resources": "Afficher les ressources IaC balisées non tracées",
    "Onboard Cloud Accounts": "Intégrer des comptes cloud",
    // In the actual DOM, the count (e.g. "829") sits in its own highlight span,
    // and the "/ 1244" part and the label are further split into separate text
    // nodes by an Angular comment node (<!---->) in between. So this label
    // reaches the dictionary as its own isolated text node — register it as
    // an exact match rather than a fraction pattern.
    // "wo" is shorthand for "without" as displayed in the product; translated by meaning.
    "IaC resources wo YOR": "Ressources IaC sans YOR",
    "IaC resources with YOR but not traced": "Ressources IaC avec YOR mais non tracées",
  },

  patterns: [
    // The leading fraction (count) part is variable and left untranslated.
    { re: /^([\d,.]+\s*\/\s*[\d,.]+[A-Za-z]*)\s+Cloud assets fully traced cloud-to-code$/,
      tpl: "$1 actifs cloud entièrement tracés du cloud au code" },
    { re: /^([\d,.]+\s*\/\s*[\d,.]+[A-Za-z]*)\s+IaC resources fully traced code-to-cloud$/,
      tpl: "$1 ressources IaC entièrement tracées du code au cloud" },
    // The numerator is rendered in a separate sibling element; this text node only
    // contains the "/ 94" part, which is variable and left untranslated.
    { re: /^(\/\s*[\d,.]+[A-Za-z]*)\s+Repositories fully traced code-to-cloud$/,
      tpl: "$1 dépôts entièrement tracés du code au cloud" },
    { re: /^(\/\s*[\d,.]+[A-Za-z]*)\s+Runtime artifacts fully traced cloud-to-code$/,
      tpl: "$1 artefacts d'exécution entièrement tracés du cloud au code" },
    { re: /^(\/\s*[\d,.]+[A-Za-z]*)\s+IaC resources fully traced code-to-cloud$/,
      tpl: "$1 ressources IaC entièrement tracées du code au cloud" },
    { re: /^(\/\s*[\d,.]+[A-Za-z]*)\s+Cloud assets fully traced cloud-to-code$/,
      tpl: "$1 actifs cloud entièrement tracés du cloud au code" },
  ],

  skip: [],
};
