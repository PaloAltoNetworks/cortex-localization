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

const dictionaryAiSecurityModule = {
  exact: {
    "AI Activity": "Activité IA",
    "Model Families": "Familles de modèles",
    "Use this widget to identify AI assets at risk due to critical-severity security posture issues in your environment.":
      "Utilisez ce widget pour identifier les actifs IA à risque en raison de problèmes de posture de sécurité de gravité critique dans votre environnement.",
    "Use this widget to identify AI datasets with a high number of sensitive records.":
      "Utilisez ce widget pour identifier les jeux de données IA contenant un nombre élevé d'enregistrements sensibles.",
    "Use this widget to identify Data Profiles and Data Patterns in your AI datasets.":
      "Utilisez ce widget pour identifier les profils de données et les modèles de données dans vos jeux de données IA.",
    "Use this widget to identify the most vulnerable AI software packages and most risky compute assets with AI software packages.":
      "Utilisez ce widget pour identifier les packages logiciels IA les plus vulnérables et les actifs de calcul les plus à risque contenant des packages logiciels IA.",
    "Use this widget to identify the most active models and identities in your AI ecosystem.":
      "Utilisez ce widget pour identifier les modèles et les identités les plus actifs dans votre écosystème IA.",
    "AI Inventory": "Inventaire IA",
    "AI Security Detection Rules": "Règles de détection de sécurité IA",
    "AI Security Issues": "Problèmes de sécurité IA",
    "Active Threats": "Menaces actives",
    "AWS Assets": "Actifs AWS",
    "Azure Assets": "Actifs Azure",
    "GCP Assets": "Actifs GCP",
    "Data Pattern": "Modèle de données",
    "Data Profile": "Profil de données",
    "Invocations": "Invocations",
    "Model": "Modèle",
    "Most Sensitive AI Datasets": "Jeux de données IA les plus sensibles",
    "No Assets with Issues": "Aucun actif avec des problèmes",
    "No Training Datasets Found": "Aucun jeu de données d'entraînement trouvé",
    "Posture Issues": "Problèmes de posture",
    "Remediate the most pressing issues to improve your AI security posture.":
      "Corrigez les problèmes les plus urgents pour améliorer la posture de sécurité de votre IA.",
    "Risk Trends": "Tendances des risques",
    "Risky Assets": "Actifs à risque",
    "Security issues discovered in your AI ecosystem": "Problèmes de sécurité détectés dans votre écosystème IA",
    "Sensitive Data Used by AI": "Données sensibles utilisées par l'IA",
    "Top AI Assets At Risk": "Principaux actifs IA à risque",
    "Top AI Threats and Posture Issues to Address": "Principales menaces IA et problèmes de posture à traiter",
    "Top Active Identities": "Principales identités actives",
    "Top Active Models": "Principaux modèles actifs",
    "Total Open Issues": "Total des problèmes ouverts",
    "Visualization of the AI ecosystem": "Visualisation de l'écosystème IA",
    "Vulnerable AI Software Packages": "Packages logiciels IA vulnérables",
    "Vulnerable Packages": "Packages vulnérables",
    "You're secure, no issues to show": "Vous êtes en sécurité, aucun problème à afficher",
  },

  patterns: [
    { re: /^(\d+)\s+Training Datasets$/, tpl: "$1 jeux de données d'entraînement" },
    { re: /^(\d+)\s+Inference Datasets$/, tpl: "$1 jeux de données d'inférence" },
    { re: /^(\d+)\s+Instances$/, tpl: "$1 instances" },
    { re: /^(\d+)\s+Model Families$/, tpl: "$1 familles de modèles" },
    { re: /^(\d+)\s+Model Families Found$/, tpl: "$1 familles de modèles trouvées" },
    { re: /^(\d+)\s+Model Endpoints$/, tpl: "$1 endpoints de modèle" },
    { re: /^(\d+)\s+Agents$/, tpl: "$1 agents" },
    { re: /^(\d+)\s+Models$/, tpl: "$1 modèles" },
    { re: /^Issues Created\s+(\(\d+\))$/, tpl: "Problèmes créés $1" },
    { re: /^Issues Resolved\s+(\(\d+\))$/, tpl: "Problèmes résolus $1" },
  ],

  skip: [
    // Per-finding detection-date text (fully dynamic).
    /^First Discovered on /,
  ],
};
