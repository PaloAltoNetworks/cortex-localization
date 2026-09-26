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

const dictionaryCommon = {
  exact: {
    "Score": "Score",
    "CVSS": "CVSS",
    "EPSS": "EPSS",
    "Vulnerability": "Vulnérabilité",
    "Assets": "Actifs",
    "Publish Date": "Date de publication",
    "Display": "Affichage",
    "Collapse": "Réduire",
    "Expand": "Développer",
    "Added on": "Ajouté le",
    "Add filters": "Ajouter des filtres",
    "Clear All": "Tout effacer",
    "Click to open list": "Cliquez pour ouvrir la liste",
    "Click to filter": "Cliquez pour filtrer",
    "Actions": "Actions",
    "Critical": "Critique",
    "High": "Élevée",
    "Medium": "Moyenne",
    "Low": "Faible",
    "Status": "Statut",
    "Category": "Catégorie",
    "Severity": "Gravité",
    "Refresh": "Actualiser",
    "Search": "Rechercher",
    "Settings": "Paramètres",
    "Help": "Aide",
    "Dashboard": "Tableau de bord",
    "Dashboards": "Tableaux de bord",
    "Dashboards & Reports": "Tableaux de bord et rapports",
    "Dashboards Manager": "Gestionnaire de tableaux de bord",
    "Cases": "Cas",
    "Cases & Issues": "Cas et problèmes",
    "Issue": "Problème",
    "Issues": "Problèmes",
    "Open": "Ouvert",
    "Closed": "Fermé",

    // --- Left navigation (common to all dashboards) ---
    "Action Center": "Centre d'actions",
    "Agentic Assistant Hub": "Hub d'assistants agentiques",
    "AI Prompts": "Prompts IA",
    "AI Security": "Sécurité de l'IA",
    "All Assets": "Tous les actifs",
    "All Endpoints": "Tous les endpoints",
    "Analytics Rules": "Règles d'analyse",
    "Application Security": "Sécurité des applications",
    "Attack Surface": "Surface d'attaque",
    "Attack Surface Issues": "Problèmes de surface d'attaque",
    "Automation": "Automatisation",
    "Automation Rules": "Règles d'automatisation",
    "Back to main": "Retour à l'accueil",
    "BIOC": "BIOC",
    "IOC": "IOC",
    "Case Configuration": "Configuration des cas",
    "Code to Cloud Coverage": "Couverture Code to Cloud",
    "Compliance": "Conformité",
    "Configurations": "Configurations",
    "Correlations": "Corrélations",
    "Data Security": "Sécurité des données",
    "Detection Rules": "Règles de détection",
    "Device Control Violations": "Violations du contrôle des périphériques",
    "Disk Encryption Visibility": "Visibilité du chiffrement de disque",
    "Endpoints": "Endpoints",
    "File Integrity Monitoring": "Surveillance de l'intégrité des fichiers",
    "Forensics": "Analyse forensique",
    "Graph Search": "Recherche graphique",
    "Groups": "Groupes",
    "Host Firewall": "Pare-feu de l'hôte",
    "Host Insights": "Insights sur les hôtes",
    "Identity Security": "Sécurité des identités",
    "Installations": "Installations",
    "Inventory": "Inventaire",
    "Investigation & Response": "Investigation et réponse",
    "Kubernetes Security": "Sécurité Kubernetes",
    "Live Terminal": "Terminal en direct",
    "Modules": "Modules",
    "Playbooks": "Playbook",
    "Playground": "Bac à sable",
    "Policy Management": "Gestion des politiques",
    "Posture Management": "Gestion de la posture",
    "Query Center": "Centre de requêtes",
    "Query Templates": "Modèles de requêtes",
    "Reports": "Rapports",
    "Response": "Réponse",
    "Risk Scores": "Scores de risque",
    "Rules & Policies": "Règles et politiques",
    "Scheduled Queries": "Requêtes planifiées",
    "Scripts": "Scripts",
    "Supply Chain Security": "Sécurité de la chaîne d'approvisionnement",
    "Tenant Navigator": "Navigateur de tenants",
    "Threat Management": "Gestion des menaces",
    "Vulnerability Management": "Gestion des vulnérabilités",
    "XQL Search": "Recherche XQL",
    "Select": "Sélectionner",
    "Select..": "Sélectionner..",

    // --- Widget common empty/error states ---
    "Feature Unavailable": "Fonctionnalité indisponible",
    "Inadequate License": "Licence insuffisante",
    "No Permissions": "Aucune autorisation",
    "No Results Found": "Aucun résultat trouvé",
    "No data": "Aucune donnée",
    "No data is available as the dataset configured for this widget doesn't exist.":
      "Aucune donnée disponible, car le jeu de données configuré pour ce widget n'existe pas.",
    "Private Widget": "Widget privé",
    "This asset is not associated with any groups": "Cet actif n'est associé à aucun groupe",
    "This widget has been deleted.": "Ce widget a été supprimé.",
    "This widget is unavailable.": "Ce widget est indisponible.",
    "Widget Deleted": "Widget supprimé",
    "You do not have permission to view this private widget":
      "Vous n'êtes pas autorisé à afficher ce widget privé",
    "You don't have the license required to view this widget.":
      "Vous ne disposez pas de la licence requise pour afficher ce widget.",
    "You don't have the permissions required to view this widget.":
      "Vous ne disposez pas des autorisations requises pour afficher ce widget.",

    // --- ag-Grid common UI ---
    "Drag here to set column labels": "Faites glisser ici pour définir les libellés de colonne",
    "Drag here to set row groups": "Faites glisser ici pour définir les groupes de lignes",
    "Pin Column": "Épingler la colonne",
    "Hide Column": "Masquer la colonne",
    "Autosize column": "Ajuster automatiquement la colonne",
    "Autosize all columns": "Ajuster automatiquement toutes les colonnes",
    "Row Height": "Hauteur de ligne",
    "Column Fit": "Ajustement des colonnes",
    "Compact": "Compacte",
    "Specious": "Espacée",
    "Fit Content": "Ajuster au contenu",
    "Distribute": "Répartir",
    "Fill Content": "Remplir le contenu",
    "Details": "Détails",
    "Discover Now": "Découvrir maintenant",
    "Copy text to clipboard": "Copier le texte dans le presse-papiers",
    "Copy entire row": "Copier toute la ligne",
    "Show empty rows": "Afficher les lignes vides",
    "Hide empty rows": "Masquer les lignes vides",
    "Include empty values": "Inclure les valeurs vides",
    "Open in VirusTotal": "Ouvrir dans VirusTotal",
    "Open in Agentic Assistant": "Ouvrir dans Agentic Assistant",
    "Open in Editor": "Ouvrir dans l'éditeur",
    "Duplicate": "Dupliquer",
    "Share": "Partager",
    "Change owner": "Changer de propriétaire",
    "Revert": "Rétablir",
    "View saved filters": "Afficher les filtres enregistrés",
    "Export filters": "Exporter les filtres",
    "View Examples": "Afficher des exemples",
    "Edit": "Modifier",
    "Save as New": "Enregistrer comme nouveau",
    "(Clear Selection)": "(Effacer la sélection)",
    "Username": "Nom d'utilisateur",
    "Password": "Mot de passe",
    "View": "Afficher",
    "Cards view": "Vue en cartes",
    "Learn more": "En savoir plus",
    "Export to file": "Exporter vers un fichier",
    "Type your search here": "Saisissez votre recherche ici",
    "Search by name or description": "Rechercher par nom ou description",
    "here": "ici",
    "Please fill out this field.": "Veuillez renseigner ce champ.",
    "Discard changes?": "Abandonner les modifications ?",
    "Unsaved Changes": "Modifications non enregistrées",
    "You have unsaved changes. Are you sure you want to leave? All unsaved data will be lost.":
      "Vous avez des modifications non enregistrées. Voulez-vous vraiment quitter cette page ? Toutes les données non enregistrées seront perdues.",
    "Unsaved changes will be lost.": "Les modifications non enregistrées seront perdues.",
    "Discard": "Abandonner",
    "Changes will not be saved.": "Les modifications ne seront pas enregistrées.",
    "Discard changes": "Abandonner les modifications",
    "Changes were not saved, if you proceed you will lose your changes":
      "Les modifications n'ont pas été enregistrées. Si vous continuez, elles seront perdues",
    "Press SPACE to select this row": "Appuyez sur ESPACE pour sélectionner cette ligne",
    "Press SPACE to deselect this row": "Appuyez sur ESPACE pour désélectionner cette ligne",
    "You must enter name": "Vous devez saisir un nom",
    "Enter Name": "Saisir un nom",
    "Enter Email": "Saisir une adresse e-mail",
    "Search in table...": "Rechercher dans le tableau...",
    // "Search...": the placeholder of generic search boxes. Most of them do a substring match against
    // mislead the user into thinking Japanese input works, so this entry is removed (left untranslated,
    // showing the original English).
    "Define a value here...": "Définissez une valeur ici...",
    "Remove filters": "Retirer les filtres",
    "Save filters": "Enregistrer les filtres",
    "Save Filter": "Enregistrer le filtre",
    "filter name": "nom du filtre",
    "Share this filter": "Partager ce filtre",
    "Show filter panel": "Afficher le panneau de filtres",
    "Hide filter panel": "Masquer le panneau de filtres",
    "Group ID": "ID du groupe",
    "Installers": "Programmes d'installation",
    "Command and Control": "Commande et contrôle",
    "Credential Access": "Accès aux identifiants",
    "Defense Impairment": "Affaiblissement des défenses",
    "Discovery": "Découverte",
    "Execution": "Exécution",
    "Exfiltration": "Exfiltration",
    "Initial Access": "Accès initial",
    "Lateral Movement": "Mouvement latéral",
    "Persistence": "Persistance",
    "Privilege Escalation": "Élévation de privilèges",
    "Reconnaissance": "Reconnaissance",
    "Resource Development": "Développement de ressources",
    "Add description here": "Ajoutez une description ici",
    "Specify description": "Indiquez une description",
    "Remove description": "Retirer la description",
    "Enter description": "Saisissez une description",
    "Hide Widgets": "Masquer les widgets",
    "Show Widgets": "Afficher les widgets",

    // --- Warnings/links common to multiple dashboards ---
    "License Violation warning": "Avertissement de violation de licence",
    "See Data Ingestion": "Voir l'ingestion des données",
    "Open Issues": "Problèmes ouverts",
    "Compliance Score": "Score de conformité",
    "Not Applicable": "Non applicable",
    "not applicable": "non applicable",
    "Other": "Autre",
    "Workloads": "Charges de travail",
    "cloud account": "compte cloud",
    "Cloud": "Cloud",
    "Identity": "Identité",
    "Network": "Réseau",
    "from last month": "par rapport au mois dernier",
    "MTTR": "MTTR",
    "Last 24H": "Dernières 24 h",
    "Last 30D": "30 derniers jours",
    "Custom": "Personnalisé",
    "Security Services": "Services de sécurité",
    "Notifications": "Notifications",
    "Cortex CLOUD License": "Licence Cortex CLOUD",
    "Cortex - Analytics": "Cortex - analyses",
    "Management Audit Logs": "Journaux d'audit de gestion",
    "Agent Audit Logs": "Journaux d'audit des agents",
    "XDR Collector Audit Logs": "Journaux d'audit du collecteur XDR",
    "Health Issues": "Problèmes de santé",
    "Issue Exception & Exclusion": "Exceptions et exclusions de problèmes",
    "Data Sources & Integrations": "Sources de données et intégrations",

    // --- Tooltip (shown on hover, inside ngb-popover-window) ---
    "Connecting a data source does not imply that all detectors in the same category will be relevant for that source. Rule applicability should be assessed based on the specific context.":
      "La connexion d'une source de données ne signifie pas que tous les détecteurs de la même catégorie seront pertinents pour cette source. L'applicabilité des règles doit être évaluée en fonction du contexte spécifique.",

    // --- "Select tactics and techniques" modal (the MITRE ATT&CK matrix, shared across screens) ---
    // The individual technique/sub-technique names (each cell's variable text) are instead made
    // eligible for AI (dynamic) translation on the content.js side.
    "Select tactics and techniques": "Sélectionner des tactiques et techniques",
    "sub-technique": "sous-technique",
    // Screen-reader-only labels for icons (not visible on screen).
    "mitre logo": "logo MITRE",
    "free search": "recherche libre",
  },

  patterns: [
    // <u-file-upload-dropzone-hint> file-upload component; the format/extension part is left untranslated)
    { re: /^Supported format:\s*(.+)$/, tpl: "Format pris en charge : $1" },

    { re: /^([\d,]+)\s+results$/, tpl: "$1 résultats" },

    { re: /^\+\s*(\d+)\s+[Mm]ore$/, tpl: "+ $1 de plus" },

    { re: /^(\d+)\s+selected$/i, tpl: "$1 sélectionnés" },

    { re: /^selected out of\s+([\d,]+)$/i, tpl: "sélectionnés sur $1" },

    { re: /^(\d[\d,.]*[KkMm]?)\s+Impacted Assets$/, tpl: "$1 actifs affectés" },

    { re: /^Notifications\s+(\(.+\))$/, tpl: "Notifications $1" },

    { re: /^(\d[\d,.]*)\s+days$/, tpl: "$1 jours" },

    // Ingestion-quota-exceeded warning (the date/day-count parts are dynamic).
    {
      re: /^Based on a (\d+) day average calculation from (.+) to (.+), your daily default ingestion quota is exceeded\. Increase your license limit or reduce your daily ingestion; otherwise, you can expect data processing delays or data not being collected by the application$/,
      tpl: "D'après un calcul de moyenne sur $1 jours, du $2 au $3, votre quota d'ingestion quotidien par défaut est dépassé. Augmentez la limite de votre licence ou réduisez votre ingestion quotidienne ; sinon, vous risquez de constater des retards de traitement des données ou une absence de collecte de données par l'application",
    },

    // ag-Grid's right-click menu: "Show rows with 'X'" / "Hide rows with 'X'".
    { re: /^Show rows with\s+(['"].*['"])$/, tpl: "Afficher les lignes avec $1" },
    { re: /^Hide rows with\s+(['"].*['"])$/, tpl: "Masquer les lignes avec $1" },
    // ag-Grid's date-column filter: "Show rows N days prior to 'X'" / "Show rows N days after 'X'".
    { re: /^Show rows\s+(\d+)\s+days prior to\s+(['"].*['"])$/, tpl: "Afficher les lignes jusqu'à $1 jours avant $2" },
    { re: /^Show rows\s+(\d+)\s+days after\s+(['"].*['"])$/, tpl: "Afficher les lignes jusqu'à $1 jours après $2" },
    // XIF editor heading: "User defined rules (Last updated on Jun 4th 2026)".
    { re: /^User defined rules\s*\(Last updated on\s+(.+)\)$/, tpl: "Règles définies par l'utilisateur (dernière mise à jour : $1)" },
  ],

  skip: [
    // Excludes only a per-finding text combining a CVE number with an asset/host name
    // (e.g. "CVE-2022-1471 vulnerability in org.yaml_snakeyaml at rsam-mas-tl-jenkins-docker").
    // Skipping anything that merely starts with "CVE-" would also wrongly skip Supply Chain
    // Attacks' own descriptions (e.g. for MongoBleed, React2Shell, Log4Shell), which likewise
    // start with a CVE number, even though those already have a dictionary entry.
    /^CVE-\d{4}-\d+ vulnerability in/,
    // Malware-detection messages and other text too complex to templatize.
    /Malware was detected in/i,
    /during RUNTIME scanning/i,
    // Internal ag-Grid component/class names.
    /^AG-[A-Z-]+$/,
    // Dynamic "last updated" display that includes a time (a pattern-based rule may be worth
    // adding for this later).
    /^Last updated on/,
    // SVG metadata left behind by the Sketch design tool.
    /^Created with Sketch\.$/,
    /^Generator: Sketch/,
    // Date/time timestamp text (fully dynamic).
    /^[A-Z][a-z]{2}\s+\d{1,2}(st|nd|rd|th)\s+\d{4}\s+\d{2}:\d{2}:\d{2}$/,
    // Date/time timestamp text (a different format), e.g. "August 28, 2026 at 11:02:33 AM UTC".
    /^[A-Z][a-z]+\s+\d{1,2},\s+\d{4}\s+at\s+\d{1,2}:\d{2}:\d{2}\s+[AP]M\s+UTC$/,
    // Cloud region codes (technical identifiers — not translated).
    /^[a-z]{2}-[a-z]+-\d+$/,
    /^global$/,
  ],
};
