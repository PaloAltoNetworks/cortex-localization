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

const dictionaryCloudCommandCenter = {
  exact: {
    "Cortex Cloud Command Center": "Centre de commande Cortex Cloud",
    "Cloud Command Center": "Centre de commande cloud",

    "Connect Data Source": "Connecter une source de données",
    "Showing results from all providers": "Affichage des résultats de tous les fournisseurs",
    "Total Assets at Risk": "Total des actifs à risque",

    "Active Threat Cases": "Cas de menaces actives",
    "Posture Cases": "Cas de posture",
    "Created": "Créé",
    "Resolved": "Résolu",
    "Actions Available": "Actions disponibles",
    "Automation Available": "Automatisation disponible",
    "Remediation Available": "Correction disponible",

    "Top Active Threats to Address": "Principales menaces actives à traiter",
    "Investigate and resolve top threats to prevent breach":
      "Examinez et résolvez les principales menaces pour prévenir les compromissions",
    "View Active Threats": "Afficher les menaces actives",

    "Top Posture Cases to Address": "Principaux cas de posture à traiter",
    "Remediate the cases below to improve your organizational security posture":
      "Corrigez les cas ci-dessous pour améliorer la posture de sécurité de votre organisation",
    "All Classes": "Toutes les classes",
    "View Posture Cases": "Afficher les cas de posture",

    "Vulnerability Summary": "Synthèse des vulnérabilités",
    "Manage Vulnerabilities": "Gérer les vulnérabilités",
    "Unique Risky Vulnerabilities Issues": "Problèmes de vulnérabilités à risque uniques",
    "Critical & High": "Critique et élevée",
    "Weaponized Exploit": "Exploit armé",
    "Fix Available": "Correctif disponible",
    "Top Risky Vulnerabilities": "Principales vulnérabilités à risque",

    "Compliance Summary": "Synthèse de conformité",
    "View Compliance Center": "Afficher le centre de conformité",
    "Compliance Standard by Score": "Normes de conformité par score",
    "Standards Status": "Statut des normes",
    "Controls Assessed": "Contrôles évalués",

    // --- Dashboard: data-source connection / scan status / asset explorer ---
    "Connect account": "Connecter un compte",
    "Scanning health": "Santé de l'analyse",
    "Explore AI Assets": "Explorer les actifs IA",
    "Explore API Assets": "Explorer les actifs API",
    "Explore Compute Assets": "Explorer les actifs de calcul",
    "Explore Data Assets": "Explorer les actifs de données",
    "Explore Identity Assets": "Explorer les actifs d'identité",
    "Explore Other Assets": "Explorer les autres actifs",
    "Explore Network Assets": "Explorer les actifs réseau",
  },

  patterns: [
    { re: /^(\d[\d,.]*[KkMm]?)\s+Controls Assessed$/, tpl: "$1 contrôles évalués" },
    { re: /^(\d[\d,.]*[KkMm]?)\s+AWS Accounts$/, tpl: "$1 comptes AWS" },
    { re: /^(\d[\d,.]*[KkMm]?)\s+GCP Accounts$/, tpl: "$1 comptes GCP" },
    { re: /^(\d[\d,.]*[KkMm]?)\s+Azure Accounts$/, tpl: "$1 comptes Azure" },
    { re: /^(\d[\d,.]*[KkMm]?)\s+OCI Accounts$/, tpl: "$1 comptes OCI" },
    { re: /^(\d[\d,.]*[KkMm]?)\s+Snowflake Accounts$/, tpl: "$1 comptes Snowflake" },
    { re: /^(\d+)%\s+Health$/, tpl: "Santé : $1%" },
  ],

  skip: [],
};
