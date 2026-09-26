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

const dictionaryIssueDetailScreen = {
  exact: {
    "Affected Assets": "Actifs affectés",
    "Action:": "Action :",
    "Assignee:": "Assigné à :",
    "Cloud Configuration Issue Rule": "Règle de problème de configuration cloud",
    "Cloud Configuration Layout": "Disposition de configuration cloud",
    "Compute Policy": "Politique de calcul",
    "Copy issue URL": "Copier l'URL du problème",
    "Created:": "Date de création :",
    "Detected (Scanned)": "Détecté (analysé)",
    "Detection Logic": "Logique de détection",
    "Evidence": "Preuves",
    "Issue Layout:": "Disposition du problème :",
    "Linked Cases": "Cas liés",
    "No Changes": "Aucune modification",
    "Open in new tab": "Ouvrir dans un nouvel onglet",
    "Press SPACE to select this row": "Appuyez sur ESPACE pour sélectionner cette ligne",
    "Resolution": "Résolution",
    "Status:": "Statut :",
    "Triggered by rule:": "Déclenché par la règle :",
    "Updated:": "Mis à jour :",
    "War Room": "War Room",
    "Work Plan": "Plan de travail",

    // --- Built-in rule names (fixed catalog) ---
    "Auditd unmonitored file permission changes found":
      "Modifications des autorisations de fichiers non surveillées par Auditd détectées",
    "Auditd unmonitored kernel module loading and unloading found":
      "Chargement et déchargement de modules du noyau non surveillés par Auditd détectés",
    "Auditd unmonitored network configuration changes found":
      "Modifications de la configuration réseau non surveillées par Auditd détectées",
    "Linux host with ICMP packet redirect enabled found":
      "Hôte Linux avec redirection de paquets ICMP activée détecté",
    "Linux host with unrestricted default user umask found":
      "Hôte Linux avec umask utilisateur par défaut non restreint détecté",
    "Linux host without AIDE service found": "Hôte Linux sans service AIDE détecté",
    "Minimum days between password changes is misconfigured":
      "Le nombre minimal de jours entre les changements de mot de passe est mal configuré",
  },

  patterns: [
    { re: /^Open for (\d+)\s+minutes?$/, tpl: "Ouvert depuis $1 minute(s)" },
    { re: /^Open for (\d+)\s+hours?$/, tpl: "Ouvert depuis $1 heure(s)" },
    { re: /^Open for (\d+)\s+days?$/, tpl: "Ouvert depuis $1 jour(s)" },
  ],

  skip: [],
};
