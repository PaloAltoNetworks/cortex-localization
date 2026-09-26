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

const dictionaryIssuesScreen = {
  exact: {
    "All Issues": "Tous les problèmes",
    "Backward Scan Status": "Statut de l'analyse rétroactive",
    "Create Issue Exclusion Rule": "Créer une règle d'exclusion de problèmes",
    "Rule status": "Statut de la règle",
    "Rule Conditions (from filter)": "Conditions de la règle (depuis le filtre)",
    "Your changes will be lost. Do you want to cancel and exit the wizard?": "Vos modifications seront perdues. Voulez-vous annuler et quitter l'assistant ?",
    "Filters are still in edit mode. Click anywhere on the page to apply your filters.": "Les filtres sont toujours en mode édition. Cliquez n'importe où sur la page pour appliquer vos filtres.",
    "Apply rule on existing issues": "Appliquer la règle aux problèmes existants",
    "Existing issues matching the rule’s conditions will also be excluded": "Les problèmes existants correspondant aux conditions de la règle seront également exclus",
    "Define conditions to automatically exclude issues": "Définissez les conditions d'exclusion automatique des problèmes",
    "Search": "Rechercher",
    "Value": "Valeur",
    "All Issue Exception & Exclusion Rules": "Toutes les règles d'exception et d'exclusion de problèmes",
    "Do you want to create an Exception or an Exclusion?": "Voulez-vous créer une exception ou une exclusion ?",
    "Create new exception": "Créer une exception",
    "Exceptions grant Issues a time-limited grace period for a specific duration, pausing SLA timers.":
      "Les exceptions accordent aux problèmes un délai de grâce limité pour une durée donnée, en suspendant les minuteurs SLA.",
    "Create new exclusion": "Créer une exclusion",
    "Exclusions permanently suppress Issues. No new Issues matching this criteria will be added to the Issue list view.":
      "Les exclusions masquent définitivement les problèmes. Aucun nouveau problème correspondant à ces critères ne sera ajouté à la vue en liste des problèmes.",
    "Requestor Name": "Nom du demandeur",
    "Approver Name": "Nom de l'approbateur",
    "Date Created": "Date de création",
    "Decision Date": "Date de décision",
    "Decision Justification": "Justification de la décision",
    "Requestor Email": "E-mail du demandeur",
    "Approver Email": "E-mail de l'approbateur",
    "Add Exception": "Ajouter une exception",
    "Disabled": "Désactivé",
    "Exception Rules": "Règles d'exception",
    "Exclusion Rules": "Règles d'exclusion",
    "Impacted Issues": "Problèmes affectés",
    "Justification Category": "Catégorie de justification",
    "Status": "Statut",
    "There are no Issue Exception rules": "Aucune règle d'exception de problèmes",
    "You are about to perform issue exclusion": "Vous êtes sur le point d'exclure des problèmes",
    "Create issue exception rule": "Créer une règle d'exception de problèmes",
    "Scan types": "Types d'analyse",
    "Usage": "Utilisation",
    "Scanned Branch": "Branche analysée",
    "Scan Date": "Date d'analyse",
    "Scan Health": "Santé de l'analyse",
    "Scan Category": "Catégorie d'analyse",
    "Pull Request ID": "ID de la pull request",
    "Commit": "Commit",
    "Git User": "Utilisateur Git",
    "PR Status": "Statut de la PR",
    "Blocking Policies": "Politiques bloquantes",
    "Pull Request Title": "Titre de la pull request",
    "Blocking Policies IDs": "ID des politiques bloquantes",
    "Blocking Policies Names": "Noms des politiques bloquantes",
    "CI Status": "Statut CI",
    "Tool Id": "ID de l'outil",
    "Risk Factors details": "Détails des facteurs de risque",
    "Status modified by": "Statut modifié par",
    "Status modified date": "Date de modification du statut",
    "Link": "Lien",
    "Logo": "Logo",
    "In catalog": "Dans le catalogue",
    "Risk factors last update": "Dernière mise à jour des facteurs de risque",
    "Last update": "Dernière mise à jour",
    "cves": "CVE",
    "Choose cases to link the issues to": "Choisissez les cas auxquels lier les problèmes",
    "Urgent Issues Exceeding SLA": "Problèmes urgents dépassant le SLA",
    "Valid Secrets Detected": "Secrets valides détectés",
    "High Issues Exceeding SLA": "Problèmes de gravité élevée dépassant le SLA",
    "High Issues in Direct Dependencies": "Problèmes de gravité élevée dans les dépendances directes",
    "High Issues Involving Strong Copyleft Licenses": "Problèmes de gravité élevée impliquant des licences copyleft fortes",
    "Resolved - Known Issue": "Résolu - Problème connu",
    "Resolved - Duplicate Issue": "Résolu - Problème en double",
    "Resolved - False Positive": "Résolu - Faux positif",
    "Resolved - Other": "Résolu - Autre",
    "Resolved - True Positive": "Résolu - Vrai positif",
    "Resolved - Security Testing": "Résolu - Test de sécurité",
    "Resolved - Dismissed": "Résolu - Rejeté",
    "Resolved - Fixed": "Résolu - Corrigé",
    "Resolved - Risk Accepted": "Résolu - Risque accepté",
    "IaC Drifts": "Dérives IaC",
    "Severity Breakdown": "Répartition par gravité",
    "Code IaC Resource": "Ressource IaC du code",
    "No data available to display in the chart": "Aucune donnée à afficher dans le graphique",
    "Resolve Issue Id": "Résoudre l'ID du problème",
    "mark this issue as": "marquer ce problème comme",
    "Enter comment...": "Saisissez un commentaire...",
    "Select from list": "Sélectionner dans la liste",
    "Urgency Details": "Détails de l'urgence",
    "Create application": "Créer une application",
    "Application Criticality": "Criticité de l'application",
    "Missing code-to-cloud traceability.": "Traçabilité code-to-cloud manquante.",
    "Urgency may change once the full runtime path is established": "L'urgence peut changer une fois le chemin d'exécution complet établi",
    "Urgency not updated. We couldn't calculate urgency this time. We'll try again with the next periodic scan.":
      "Urgence non mise à jour. Nous n'avons pas pu calculer l'urgence cette fois-ci. Nous réessaierons lors de la prochaine analyse périodique.",
    "Backlog Status:": "Statut du backlog :",
    "Choose a reason": "Choisissez un motif",
    "Create Exception Rule": "Créer une règle d'exception",
    "Enter the date that the Exception will end and the SLA Timer will start to tick down again on.":
      "Saisissez la date à laquelle l'exception prendra fin et le minuteur SLA reprendra son décompte.",
    "Form": "Formulaire",
    "None provided": "Non renseigné",
    "Optionally for your reference, enter a ticket or a record number for any external exception tracking or auditing systems you use.":
      "Facultatif : à titre de référence, saisissez un numéro de ticket ou d'enregistrement provenant des systèmes externes de suivi des exceptions ou d'audit que vous utilisez.",
    "Provide a reason why there is a business need to defer fixing the security Issues that match this rule.":
      "Indiquez la raison métier justifiant le report de la correction des problèmes de sécurité correspondant à cette règle.",
    "Use Exception Rules to suppress issues that cannot be resolved within SLA bounds due to valid business justifications.":
      "Utilisez les règles d'exception pour masquer les problèmes qui ne peuvent pas être résolus dans les délais du SLA pour des raisons métier valables.",
    "When an issue matches the rule criteria, its SLA timer pauses for the specified duration.":
      "Lorsqu'un problème correspond aux critères de la règle, son minuteur SLA est suspendu pendant la durée spécifiée.",
    "internal id": "id interne",
    "Approver": "Approbateur",
    "Exception End Date": "Date de fin de l'exception",
    "Exception Period": "Période d'exception",
    "Justification": "Justification",
    "External Exception ID": "ID d'exception externe",
    "Reason Category": "Catégorie de motif",
    "Match Criteria and Results": "Critères de correspondance et résultats",
    "Change Issue Assignee": "Modifier l'assigné du problème",
    "Assign to me": "M'assigner",
    "Select a user to assign": "Sélectionnez un utilisateur à assigner",
    "Select the action you want to run when the rule conditions are met.": "Sélectionnez l'action à exécuter lorsque les conditions de la règle sont remplies.",
    "Everywhere": "Partout",
    "Select cases": "Sélectionner des cas",
    "Uncheck cases to unlink them from the issue": "Décochez des cas pour les dissocier du problème",
    "View related case": "Afficher le cas associé",
    "Show workplan": "Afficher le plan de travail",
    "Investigate": "Investiguer",
    "Exclude issue": "Exclure le problème",
    "Except issue": "Mettre le problème en exception",
    "Exclude issues": "Exclure les problèmes",
    "Except issues": "Mettre les problèmes en exception",
    "Link to case": "Lier à un cas",
    "Unlink from case": "Dissocier du cas",
    "Change status": "Modifier le statut",
    "Change severity": "Modifier la gravité",
    "Change assignee": "Modifier l'assigné",
    "Investigate causality chain": "Investiguer la chaîne de causalité",
    "Run automation": "Exécuter une automatisation",
    "Manage Issue": "Gérer le problème",
    "Open views": "Ouvrir des vues",
    "Create case": "Créer un cas",
    "AppSec Issues": "Problèmes AppSec",
    "CSPM Scanner": "Scanner CSPM",
    "Detection Method": "Méthode de détection",
    "Findings": "Constats",
    "Issue Domain": "Domaine du problème",
    "Name": "Nom",
    "Observation Time": "Heure d'observation",
    "Resolution Reason": "Motif de résolution",

    // --- "Detection method"/"Issue domain" filter option list ---
    // XDR Analytics, XDR IOC, DLP, ASM, PAN NGFW, XDR Managed Threat
    // Hunting, Prisma Browser, Prisma Cloud, Prisma Cloud Compute
    // Brand names, specific product names, and abbreviations are left as-is (translating them
    // would not change their spelling, so they are not in the dictionary): AURL, XDR BIOC,
    // XDR Analytics BIOC, XDR Analytics, XDR IOC, DLP, ASM, PAN NGFW, XDR Managed Threat
    // Hunting, Prisma Browser, Prisma Cloud, Prisma Cloud Compute
    "Agentless Disk Scanner": "Scanner de disque sans agent",
    "AI Security Posture": "Posture de sécurité de l'IA",
    "API Posture Scanner": "Scanner de posture API",
    "API Traffic Monitor": "Moniteur de trafic API",
    "AppSec Policy": "Politique AppSec",
    "CAS CVE Scanner": "Scanner CVE CAS",
    "CAS Drift Scanner": "Scanner de dérive CAS",
    "IaC Scanner": "Scanner IaC",
    "CAS License Scanner": "Scanner de licences CAS",
    "CAS Malicious Package Scanner": "Scanner de packages malveillants CAS",
    "SAST Scanner": "Scanner SAST",
    "CAS Secret Scanner": "Scanner de secrets CAS",
    "CIEM Scanner": "Scanner CIEM",
    "CLI Scanner": "Scanner CLI",
    "Cloud Network Analyzer": "Analyseur de réseau cloud",
    "Custom Issue": "Problème personnalisé",
    "Data Policy": "Politique de données",
    "SaaS Attachments": "Pièces jointes SaaS",
    "Graph Engine": "Moteur de graphe",
    "Health": "Santé",
    "Indicator Matching": "Correspondance d'indicateurs",
    "IoT Security": "Sécurité IoT",
    "Kubernetes Scanner": "Scanner Kubernetes",
    "MIRRORING": "MISE EN MIROIR",
    "Posture Policy": "Politique de posture",
    "User Reported Phishing": "Hameçonnage signalé par l'utilisateur",
    "Hunting": "Chasse aux menaces",
    "Posture": "Posture",

    "AWS EC2 instance not configured with Instance Metadata Service v2 (IMDSv2)":
      "Instance AWS EC2 non configurée avec Instance Metadata Service v2 (IMDSv2)",

    // --- Column-selection menu ---
    "Excluded": "Exclu",
    "Case IDs": "ID des cas",
    "Insert Time": "Heure d'insertion",
    "Resolution Status Modified": "Modification du statut de résolution",
    "Remediation": "Correction",
    "Impact": "Impact",
    "Extended Description": "Description détaillée",
    "Initial Evidence": "Preuves initiales",
    "Excepted": "En exception",
    "Remaining Exception Period": "Période d'exception restante",
    "Agentic AI response status": "Statut de la réponse de l'IA agentique",
    "Agentic AI response": "Réponse de l'IA agentique",
    "Recommendation": "Recommandation",
    "Last Modified": "Dernière modification",
    "Compliance Standard": "Norme de conformité",
    "Compliance Category": "Catégorie de conformité",
    "Compliance Control": "Contrôle de conformité",

    // --- Issue detail panel (Evidence/Causality tabs, etc.) ---
    // "Critical Vulnerabilities (CVSS)" is already registered in vulnerability-management.js
    // (all files' dictionaries are merged globally, so it is not duplicated here).
    "No associated standards or controls": "Aucune norme ni aucun contrôle associé",
    "Automations browser": "Navigateur Automation",
    "Type `:` to use Emojis": "Tapez `:` pour utiliser les emojis",
    "Focus on the CLI field using `ctrl+;`": "Placez le focus sur le champ CLI avec `ctrl+;`",
    "Navigate quickly with `ctrl+k` (default)": "Naviguez rapidement avec `ctrl+k` (par défaut)",
    "Toggle markdown box on CLI using `ctrl+m`": "Affichez ou masquez la zone Markdown de la CLI avec `ctrl+m`",
    "There are no Cases": "Aucun cas",
    "Asset Risk": "Risque de l'actif",
    "The value of and risks posed to your organization by the compromise of this asset":
      "La valeur de cet actif et les risques que sa compromission ferait peser sur votre organisation",
    "Internet Reachable Asset": "Actif accessible depuis Internet",
    "This asset is publicly exposed to the internet.": "Cet actif est exposé publiquement sur Internet.",
    "Evidence graph is not supported for this detection rule type": "Le graphe des preuves n'est pas pris en charge pour ce type de règle de détection",
    "Enable prompt protection in the content filter": "Activer la protection des prompts dans le filtre de contenu",
    "Related Affected Assets": "Actifs affectés associés",
    "Enforce the Agent to Use Guardrails": "Obliger l'agent à utiliser des garde-fous",
    "Number of hits": "Nombre de correspondances",
    "Process Execution": "Exécution de processus",
    "Initiator Details": "Détails de l'initiateur",
    "Name (initiated by)": "Nom (initié par)",
    "Path (initiator path)": "Chemin (chemin de l'initiateur)",
    "CMD (initiator CMD)": "CMD (CMD de l'initiateur)",
    "PID (initiator PID)": "PID (PID de l'initiateur)",
    "TID (initiator TID)": "TID (TID de l'initiateur)",
    "Signature": "Signature",
    "Signature Unavailable": "Signature non disponible",
    // MD5 and SHA256 are hash-format names, left as-is (not added to the dictionary).
    "Target Process": "Processus cible",
    "Causality Group Owner Details": "Détails du propriétaire du groupe de causalité",
    "OS Parent": "Parent OS",
    "Occurrence Count": "Nombre d'occurrences",

    "Snippet": "Extrait",
    "Objects Count": "Nombre d'objets",
    "Records Count": "Nombre d'enregistrements",
    "There are no Findings": "Aucun constat",
    "Data Findings": "Constats sur les données",
    "Configuration Findings": "Constats de configuration",
    "Identity Findings": "Constats d'identité",
    "Posture Findings": "Constats de posture",
    "Malware Findings": "Constats de logiciels malveillants",
    "Additional Details": "Détails supplémentaires",
    "Showing a partial graph": "Affichage d'un graphe partiel",
    "Due to the high volume of results, only a portion of the data is shown.":
      "En raison du volume élevé de résultats, seule une partie des données est affichée.",

    // --- Issue detail panel (AI Security/CAS-type issue overview tab) ---
    // A "trigger rule" link (shown in both its title attribute and its link text).
    "Identity Posture Rule": "Règle de posture d'identité",
    // already registered in another screen's dictionary, so only the technique name is added here).
    "Drive-by Compromise": "Compromission par téléchargement furtif (drive-by)",
    // A value in the "attack technique" column of an AI Security Posture (DSPM) issue's evidence
    // table (inside table-widget; the column heading itself is already translated).
    "Indirect Attack": "Attaque indirecte",
    "Jailbreak": "Jailbreak",
    // The same issue's evidence-section heading (the description text itself is a fixed,
    // tenant-independent string, but it sits under pan-highlight-text, which the existing
    // RAW_IDENTIFIER_SELECTOR exclusion policy keeps out of the fixed dictionary — so only the
    // heading is added here).
    "Prompt Injection": "Injection de prompt",
    // The issue's detection-rule name shown in the "Detection logic" field (a generic,
    // instance-independent name). The issue name itself (inside xdr-issue-focus-area-header h3
    // span[utitle]) is excluded by the existing policy, so only this generic name — shown in a
    // separate field — is added here.
    "AI deployment missing prompt attack protection": "Déploiement d'IA sans protection contre les attaques par prompt",
    // "Potential dependency confusion due to package name or scope ... available
    // "Potential dependency confusion due to package name or scope ... available in registry"
    // always has an actual package name (e.g. case-tracker) embedded in the text, so it never
    // matches exactly; it is instead handled by the regex entry under "patterns" below (not added
    // to the fixed "exact" dictionary).
    "Package Management": "Gestion des packages",
    "Dependency Chains": "Chaînes de dépendances",
    // Code-evidence (commit info) labels — the leading "| " is included in the same text node as
    // part of the separator.
    "| Commit Hash": "| Hash du commit",
    "| Commit Time": "| Heure du commit",
  },

  patterns: [
    // Originally a fixed "Open in GitHub" entry, but the same phrasing turned out
    // to appear for other repository providers too (e.g. GitLab), so this was
    // changed to a pattern with the provider name as a variable.
    { re: /^Open in (.+)$/, tpl: "Ouvrir dans $1" },
    { re: /^Rules that affect over (\d+) issues cannot be created$/, tpl: "Impossible de créer des règles qui affectent plus de $1 problèmes" },
    { re: /^Select an Automation to run on selected issue (\d+), "(.+)"$/, tpl: "Sélectionnez une Automation à exécuter sur le problème sélectionné $1, \"$2\"" },
    // 'tyamasaki-test-rule-01(Network Exposure) was added to the case because it relates to the same asset'
    { re: /^(.+?)\((.+?)\) was added to the case because it relates to the same asset$/, tpl: "$1($2) a été ajouté au cas, car il est lié au même actif" },
    // "The automation '7caa89a2-e4c5-4496-8653-cf1e2989f705' encountered an error."
    // (The automation's name/ID is embedded dynamically. The quote characters match the source
    // text, which uses typographic quotes U+2018/U+2019.)
    { re: /^The automation ‘(.+?)’ encountered an error\.$/, tpl: "L'automatisation \"$1\" a rencontré une erreur." },
    // The detection-rule name for a Dependency Confusion-type issue, shown in the "Detection
    // logic" field. A package name (e.g. case-tracker) is embedded in the text.
    // "Potential dependency confusion due to package name or scope case-tracker available in registry"
    {
      re: /^Potential dependency confusion due to package name or scope (.+?) available in registry$/,
      tpl: "Confusion de dépendances potentielle, car le nom ou la portée de package \"$1\" est disponible dans le registre",
    },
    // A GitHub-related issue's "Fix" suggestion sentence (a user name, org name, or GitHub App
    // name is embedded dynamically). Rendered as a <u-label> element's text.
    // "Fix - User account sreerajnair95 in GitHub is missing 2FA"
    { re: /^Fix - User account (.+?) in GitHub is missing 2FA$/, tpl: "Correctif - La 2FA n'est pas configurée pour le compte utilisateur \"$1\" dans GitHub" },
    // "Fix - 2FA is not enforced in the tinystepstudio GitHub organization."
    { re: /^Fix - 2FA is not enforced in the (.+?) GitHub organization\.$/, tpl: "Correctif - La 2FA n'est pas imposée dans l'organisation GitHub \"$1\"." },
    // "Fix - Unrestricted usage of GitHub Actions allowed across the organization tinystepstudio."
    {
      re: /^Fix - Unrestricted usage of GitHub Actions allowed across the organization (.+?)\.$/,
      tpl: "Correctif - Utilisation illimitée de GitHub Actions autorisée dans toute l'organisation \"$1\".",
    },
    // "Fix - Excessive GitHub App cortex-appsec-eu permissions"
    { re: /^Fix - Excessive GitHub App (.+?) permissions$/, tpl: "Correctif - Autorisations excessives de la GitHub App \"$1\"" },
    // "Fix - Deprecated package uuid used in NPM project in GitHub repository"
    // (Both the package name and the repository type — GitHub/GitLab/Bitbucket, etc. — are
    // embedded dynamically.)
    {
      re: /^Fix - Deprecated package (.+?) used in NPM project in (.+?) repository$/,
      tpl: "Correctif - Package obsolète \"$1\" utilisé dans un projet NPM du dépôt $2",
    },
    // "Fix - Potential dependency confusion due to package name or scope case-tracker available in registry"
    // Dependency confusion as an Automation candidate name on the "Action plan" tab (it differs
    // from the generic name shown in the "Detection logic" field, see the pattern above, by the
    // leading "Fix - ").
    {
      re: /^Fix - Potential dependency confusion due to package name or scope (.+?) available in registry$/,
      tpl: "Correctif - Confusion de dépendances potentielle, car le nom ou la portée de package \"$1\" est disponible dans le registre",
    },
    // "Fix - CVE-2019-18888 in symfony/http-foundation, version: 3.4.x-dev"
    // (The CVE number, package name, and version are all embedded dynamically. The first capture
    // group is not restricted to "CVE-" specifically, to also allow for other vulnerability-ID formats.)
    {
      re: /^Fix - (.+?) in (.+?), version: (.+)$/,
      tpl: "Correctif - $1 dans $2, version : $3",
    },
  ],

  skip: [],
};
