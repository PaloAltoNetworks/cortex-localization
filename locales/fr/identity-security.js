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

const dictionaryIdentitySecurity = {
  exact: {
    "Administrative": "Administratif",
    "Identity Overview": "Vue d'ensemble des identités",
    "Identity Asset Inventory": "Inventaire des actifs d'identité",
    "Cloud Unified Human Identities": "Identités humaines unifiées cloud",
    "Empty Groups": "Groupes vides",
    "Cloud Groups": "Groupes cloud",
    "SaaS Groups": "Groupes SaaS",
    "On-Premises Groups": "Groupes sur site",
    "On premises Unified Human Identities": "Identités humaines unifiées sur site",
    "Secrets": "Secrets",
    "MFA Disabled": "MFA désactivée",
    "SaaS Unified Human Identities": "Identités humaines unifiées SaaS",
    "SaaS Human Identities": "Identités humaines SaaS",
    "On-premises Human Identities": "Identités humaines sur site",
    "Weak Passwords": "Mots de passe faibles",
    "Team Membership": "Appartenance à l'équipe",
    "Who does it grant access to?": "À qui accorde-t-il l'accès ?",
    "Last Commit": "Dernier commit",
    "This widget show the riskiest identities with the highest score combination of risks. Fixing such identity will improve the overall score.":
      "Ce widget affiche les identités les plus à risque, dont la combinaison de risques obtient le score le plus élevé. La correction de ces identités améliorera le score global.",
    "In this widget, you can find information about your Admin Identities. We identify identity as admin if it meets the following criteria:":
      "Ce widget fournit des informations sur vos identités administrateur. Une identité est considérée comme administrateur si elle répond aux critères suivants :",
    "• Has one of the Built-in Admin policies": "• Elle dispose de l'une des politiques d'administrateur intégrées",
    "• Has custom policies with administrative permissions": "• Elle dispose de politiques personnalisées avec des autorisations d'administration",
    "In addition to the access, we take into consideration the level on which this access was granted for the identity":
      "Outre l'accès lui-même, nous tenons compte du niveau auquel cet accès a été accordé à l'identité",
    "This widget provides an overview of your assets at risk and enables you to quickly and easily identify the riskiest identity asset categories, helping you prioritize and address the most critical security vulnerabilities first.":
      "Ce widget fournit une vue d'ensemble de vos actifs à risque et vous permet d'identifier rapidement et facilement les catégories d'actifs d'identité les plus à risque, pour vous aider à hiérarchiser et à traiter en priorité les vulnérabilités de sécurité les plus critiques.",
    "Admins Only": "Administrateurs uniquement",
    "Admins Summary": "Récapitulatif des administrateurs",
    "AWS IAM Role": "Rôle AWS IAM",
    "AWS IAM Role has role chaining permissions to admin":
      "Le rôle AWS IAM dispose d'autorisations de chaînage de rôles vers un administrateur",
    "Config": "Config",
    "Got even more time?": "Vous avez encore du temps ?",
    "Human Identities": "Identités humaines",
    "IAM Identity Asset Inventory": "Inventaire des actifs d'identité IAM",
    "Identities with excessive policies": "Identités avec des politiques excessives",
    "Identities with unused permissions": "Identités avec des autorisations inutilisées",
    "Identity Security Findings": "Constats de sécurité des identités",
    "Inactive identities": "Identités inactives",
    "List": "Liste",
    "Management Group": "Groupe d'administration",
    "Non-Human Identities": "Identités non humaines",
    "Number of admins from total number of Identities": "Nombre d'administrateurs par rapport au nombre total d'identités",
    "Policies": "Politiques",
    "Read": "Lecture",
    "Resource": "Ressource",
    "Resource Group": "Groupe de ressources",
    "Risk Assessments": "Évaluations des risques",
    "Show all issues >": "Afficher tous les problèmes >",
    "Subscription": "Abonnement",
    "Top Critical Issues to Address": "Principaux problèmes critiques à traiter",
    "Top Identities at Risk": "Identités les plus à risque",
    "Top Issues to improve your Identity Security": "Principaux problèmes pour améliorer la sécurité de vos identités",
    "Unified Human Identities": "Identités humaines unifiées",
    "View policies": "Afficher les politiques",
    "We’ve identified the most pressing vulnerabilities to help secure your identity.":
      "Nous avons identifié les vulnérabilités les plus urgentes pour vous aider à sécuriser votre identité.",
    "Write": "Écriture",
  },

  patterns: [
    { re: /^([\d,]+)\s+Empty Groups$/, tpl: "$1 groupes vides" },
    { re: /^([\d,]+)\s+MFA Disabled$/, tpl: "$1 MFA désactivée" },
    { re: /^([\d,]+)\s+Weak Passwords$/, tpl: "$1 mots de passe faibles" },
    { re: /^([\d,]+)\s+Service Accounts$/, tpl: "$1 comptes de service" },
    { re: /^([\d,]+)\s+Secrets$/, tpl: "$1 secrets" },
    { re: /^([\d,]+)\s+Admin$/, tpl: "$1 administrateurs" },
    { re: /^([\d,]+)\s+Sensitive Access$/, tpl: "$1 accès sensibles" },
    { re: /^([\d,]+)\s+Inactive$/, tpl: "$1 inactifs" },
    { re: /^Where can this (.+) access\?$/, tpl: "À quoi ce $1 peut-il accéder ?" },
    { re: /^This identity has access to (\d+) assets?$/, tpl: "Cette identité a accès à $1 actif(s)" },
    { re: /^(\d+)\s+Tactics?$/, tpl: "$1 tactique(s)" },
    { re: /^(\d+)\s+Techniques?$/, tpl: "$1 technique(s)" },
    { re: /^(\d[\d,]*)\s+issues$/, tpl: "$1 problèmes" },
    { re: /^(\d[\d,]*)\s+admins at risk$/, tpl: "$1 administrateurs à risque" },
  ],

  skip: [
    // Chart-library attribution text.
    /^Created with Highcharts/,
  ],
};
