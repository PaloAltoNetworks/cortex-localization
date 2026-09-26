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

const dictionaryForensics = {
  exact: {
    // --- Forensics (investigation & evidence collection) screen ---
    "Forensic Investigations": "Investigations forensiques",
    "Investigation": "Investigation",
    "Evidence Collections": "Collectes de preuves",
    "New Issues": "Nouveaux problèmes",
    "New Investigation": "Nouvelle investigation",
    "Create New Investigation": "Créer une nouvelle investigation",
    "investigation Name": "nom de l'investigation",
    "Your investigation Name": "Nom de votre investigation",
    "Save & Start A Collection": "Enregistrer et démarrer une collecte",
    "Available to adopt": "Disponible pour adoption",
    "Override Report mode?": "Remplacer le mode Report ?",
    "Allow agents to block file hashes even when the Malware Profile is set to Report":
      "Autoriser les agents à bloquer les hachages de fichiers même lorsque le profil anti-malware est défini sur Report",
    "Override": "Remplacer",
    "Endpoint name or IP": "Nom ou IP de l'endpoint",
    "TOTAL ITEMS": "TOTAL DES ÉLÉMENTS",
    "NEW ISSUES": "NOUVEAUX PROBLÈMES",
    "LAST RECEIVED": "DERNIÈRE RÉCEPTION",

    // --- Command history / search-results grid columns ---
    "Command History": "Historique des commandes",
    "Collection ID": "ID de la collecte",
    "Command": "Commande",
    "File Created": "Fichier créé le",
    "File Modified": "Fichier modifié le",
    "Generated Time": "Date de génération",
    "Investigation ID": "ID de l'investigation",
    "Line": "Ligne",
    "Result ID": "ID du résultat",
    "Row UUID": "UUID de la ligne",
    "Search ID": "ID de la recherche",
    "User SID": "SID de l'utilisateur",

    "Legacy Forensics": "Analyse forensique héritée",
    "Legacy Artifact Collections - Windows": "Collectes d'artefacts héritées - Windows",
    "Timezone and Timestamp": "Fuseau horaire et horodatage",
    "*This is a global application change, you can review in":
      "*Il s'agit d'une modification globale de l'application, vous pouvez la consulter dans",
    "Example:": "Exemple :",
    "Archive History": "Historique des archives",

    // --- Remote access tool logs / artifact screen ---
    "Remote Access": "Accès à distance",
    "Connection ID": "ID de connexion",
    "Connection Type": "Type de connexion",
    "Message": "Message",
    "Source Host": "Hôte source",
    "Source Row UUID": "UUID de la ligne source",
    "Alias": "Alias",
    "AnyDesk Id": "AnyDesk ID",
    "Log Accessed": "Journal consulté le",
    "Log Created": "Journal créé le",
    "Log File": "Fichier journal",
    "Log Modified": "Journal modifié le",
    // Sidebar list of evidence types (LogMeIn/TeamViewer are left untranslated as brand names;
    // AnyDesk ~ / User Access Logging are translated since they are descriptive names).
    "AnyDesk Connection Logs": "Journaux de connexion AnyDesk",
    "AnyDesk Trace Logs": "Journaux de trace AnyDesk",
    "User Access Logging": "Journalisation des accès utilisateur",

    // --- Artifact-detail common columns (deleted file/entry type) ---
    "Accessed": "Date d'accès",
    "Deleted": "Date de suppression",
    "Entry Created": "Entrée créée le",
    "Entry Modified": "Entrée modifiée le",
    "Original Path": "Chemin d'origine",
    "Deleted Data": "Données supprimées",
    "Entry": "Entrée",
    "Key Last Modified": "Dernière modification de la clé",
    "MRU Order": "Ordre MRU",
    "Value Path": "Chemin de la valeur",
    "Context": "Contexte",
    "Executable Name": "Nom de l'exécutable",
    "Executable Path": "Chemin de l'exécutable",

    // --- "File Access" artifact sidebar (All/Jumplists/OpenSavePidlMRU/Recent Files/ShellBags/
    // TypedPaths). OpenSavePidlMRU, ShellBags, and TypedPaths are literal Windows registry key
    // names, and are referenced by these same English names even in Japanese forensics work,
    // so they are left untranslated.
    "File Access": "Accès aux fichiers",
    "Jumplists": "Listes de raccourcis",
    "Recent Files": "Fichiers récents",

    // --- "Network Data" artifact sidebar ---
    "Network Data": "Données réseau",
    "Interface": "Interface",
    "ARP Cache": "Cache ARP",
    "DNS Cache": "Cache DNS",
    "Hosts File": "Fichier hosts",

    // --- "System Statistics" artifact sidebar, and the foreground/background usage-metric columns ---
    "System Statistics": "Statistiques système",
    "Application Resource Usage": "Utilisation des ressources par les applications",
    "Network Connectivity Usage": "Utilisation de la connectivité réseau",
    "Network Data Usage": "Utilisation des données réseau",
    "Background Bytes Read": "Octets lus en arrière-plan",
    "Background Bytes Written": "Octets écrits en arrière-plan",
    "Background Context Switches": "Changements de contexte en arrière-plan",
    "Background Cycle Time": "Temps de cycle en arrière-plan",
    "Background Num Read Operations": "Nb d'opérations de lecture en arrière-plan",
    "Background Num Write Operations": "Nb d'opérations d'écriture en arrière-plan",
    "Background Number Of Flushes": "Nb de vidages en arrière-plan",
    "Face Time": "Temps au premier plan",
    "Foreground Bytes Read": "Octets lus au premier plan",
    "Foreground Bytes Written": "Octets écrits au premier plan",
    "Foreground Context Switches": "Changements de contexte au premier plan",
    "Foreground Cycle Time": "Temps de cycle au premier plan",
    "Foreground Num Read Operations": "Nb d'opérations de lecture au premier plan",
    "Foreground Num Write Operations": "Nb d'opérations d'écriture au premier plan",
    "Foreground Number Of Flushes": "Nb de vidages au premier plan",
    "User Searches": "Recherches de l'utilisateur",

    // --- "Execution history"-type artifact sidebar (All/Amcache/Background Activity Monitor/
    // CidSizeMRU/LastVisitedPidlMRU/Prefetch/Recentfilecache/Shimcache/UserAssist/Windows
    // Activities). Amcache, CidSizeMRU, LastVisitedPidlMRU, Prefetch, Recentfilecache, Shimcache,
    // and UserAssist are literal Windows registry key/feature names, referenced by these same
    // English names even in Japanese forensics work, so they are left untranslated. Background
    // Activity Monitor and Windows Activities are translated since they are descriptive names.
    "Background Activity Monitor": "Moniteur d'activité en arrière-plan",
    "Windows Activities": "Activités Windows",

    // --- "Network Indicators"/"Data Access" tabs, detail-panel column headers ---
    "Network Indicators": "Indicateurs réseau",
    "Data Access": "Accès aux données",
    "Earliest Activity": "Première activité",
    "Latest Activity": "Dernière activité",
    "Log Search": "Recherche dans les journaux",
    "Browser History": "Historique du navigateur",

    // --- Collections (triage/hunt collection creation wizard) ---
    "Exports": "Exportations",
    "Export all": "Tout exporter",
    "Collections": "Collectes",
    "New Collection": "Nouvelle collecte",
    "New Triage Collection": "Nouvelle collecte de triage",
    "triage collection name": "nom de la collecte de triage",
    "Add Collection Name": "Ajouter un nom de collecte",
    "triage type": "type de triage",
    "Select triage type": "Sélectionner le type de triage",
    "No endpoints. Please add triage type onlineif you would like to automate triage collections on specified endpoints.":
      "Aucun endpoint. Ajoutez un type de triage en ligne si vous souhaitez automatiser les collectes de triage sur des endpoints spécifiques.",
    "Please hit Next to continue": "Cliquez sur \"Next\" pour continuer",
    "Save Collection and Exit": "Enregistrer la collecte et quitter",
    "Volatiles": "Données volatiles",
    "File Collections": "Collectes de fichiers",
    "Custom File Collections": "Collectes de fichiers personnalisées",
    "Complete Configuration": "Terminer la configuration",
    "Save new preset": "Enregistrer un nouveau préréglage",
    "Select Presets (macOS)": "Sélectionner des préréglages (macOS)",
    "Offline": "Hors ligne",
    "Online": "En ligne",
    "Select Presets (Windows)": "Sélectionner des préréglages (Windows)",
    "Select Presets (Linux)": "Sélectionner des préréglages (Linux)",
    "No Collections Yet": "Aucune collecte pour le moment",
    "Start adding collections": "Commencer à ajouter des collectes",
    "hunt collection name": "nom de la collecte de chasse",
    "New Hunt Collection": "Nouvelle collecte de chasse",
    "maximum concurrent endpoints": "nombre maximal d'endpoints simultanés",
    "One-Time Collection": "Collecte ponctuelle",
    "Repeat Collection Every": "Répéter la collecte toutes les",
    "Valid range time must be at least 1 hr. Scheduled hunts are executed based on the time zone of the agent":
      "La plage de temps valide doit être d'au moins 1 h. Les chasses planifiées sont exécutées selon le fuseau horaire de l'agent",

    // --- Investigation screen: automation/Playbook configuration, and
    // endpoint response-action result display ---
    "New Playbook": "Nouveau Playbook",
    "Hide Script Helper": "Masquer l'assistant de script",
    "Upload a file": "Charger un fichier",
    "Edit Automation Rule": "Modifier la règle d'automatisation",
    "To add rule conditions, select a field and its value using the filter or right-click on a table cell to select that field and value.":
      "Pour ajouter des conditions de règle, sélectionnez un champ et sa valeur à l'aide du filtre, ou cliquez avec le bouton droit sur une cellule du tableau pour sélectionner ce champ et cette valeur.",
    "Select Automation": "Sélectionner une automatisation",
    "Action Last Update": "Dernière mise à jour de l'action",
    "Scanning Complete": "Analyse terminée",
    "Hash": "Hachage",
    "FILE PATHS": "CHEMINS DE FICHIERS",
    "Download definitions file": "Télécharger le fichier de définitions",
    // "investigation" is kept lowercase to match the actual displayed text (a casing
    // "Close User" (case-closing) terminology.
    "Edit investigation": "Modifier l'investigation",
    "Close investigation": "Clôturer l'investigation",
    "Add Name": "Ajouter un nom",
    // A time-unit dropdown option (e.g. "Hrs"/"Days") in a schedule input such as
    // "Repeat Collection Every".
    "Hrs": "h",
    "Invalid time range selected, Please enter a valid range, minimum 1 hour.":
      "Plage de temps sélectionnée non valide. Saisissez une plage valide d'au moins 1 heure.",

    // --- Investigation screen: the comment section, moving values to the
    // allow/block list, and the "Isolate endpoint" action ---
    "Add comment": "Ajouter un commentaire",
    "Enter a comment": "Saisissez un commentaire",
    "Edit comment": "Modifier le commentaire",
    // "case" is kept lowercase to match the actual displayed text (a casing inconsistency
    // in the product). Edits the ID of the case associated with this investigation, shown in
    // the investigation's detail panel.
    "Edit case ID": "Modifier l'ID du cas",
    // Moves a hash/indicator from within an investigation to the allow list. A different
    // action from xql-search.js's "Add to allow list", so added as a separate entry.
    "Move to allow list": "Déplacer vers la liste d'autorisation",
    // Same as above, but moving to the block list instead.
    "Move to block list": "Déplacer vers la liste de blocage",
    "Value is already added to block list": "La valeur est déjà ajoutée à la liste de blocage",

    // --- The "Isolate endpoint" action from within an investigation ---
    "ISOLATE ENDPOINTS": "ISOLER LES ENDPOINTS",
    // Followed immediately by a separate element giving the target count (e.g. "1 endpoint",
    // handled in patterns below). Since the sentence is split across two elements, this part
    // alone doesn't form a fully self-contained translation, but reads naturally once the count
    // follows the colon in the actual UI.
    "You are about to isolate": "Vous êtes sur le point d'isoler",
    // Similar to endpoint-policy-management.js's "Isolation will block host network access,
    // except for traffic to Cortex XDR." but says "endpoint" instead of "host" and has no
    // trailing period (added as a separate entry to exact-match the actual displayed text).
    "Isolation will block endpoint network access, except for traffic to Cortex XDR":
      "L'isolement bloquera l'accès réseau de l'endpoint, à l'exception du trafic vers Cortex XDR",
    "Edit isolation comment": "Modifier le commentaire d'isolement",
    // The original text says "Cancel isolate?" rather than the more natural "Cancel
    // isolation?", but kept verbatim here to exact-match what's actually displayed.
    "Cancel isolate?": "Annuler l'isolement ?",
    "Note: Cancellation is not guaranteed if the action is in progress by the time the request is processed.":
      "Remarque : l'annulation n'est pas garantie si l'action est en cours au moment où la demande est traitée.",
    "Cancel action": "Annuler l'action",
    // Alongside the generic "Cancel action", there are per-action-type cancel buttons/confirm
    // dialogs. Like "Cancel isolate?" (for isolation), these are the file-retrieval-specific
    // cancel action (see "files retrieval" in general-settings.js's lowercase action-name list).
    "Cancel files retrieval": "Annuler la récupération des fichiers",
    "Cancel files retrieval?": "Annuler la récupération des fichiers ?",
    // A separate label (no question mark), used on a button etc., distinct from the "Cancel
    // isolate?" confirmation-dialog text above.
    "Cancel isolation": "Annuler l'isolement",
    // Updates the expiration of a pending action (isolation, file retrieval, etc.) — the same
    // concept as general-settings.js's "Action Center Expiration" (expiration can be set
    // within 1-30 days from creation; updating it only affects actions in "pending" status).
    "Update expiration": "Mettre à jour l'expiration",
  },

  patterns: [
    // The action-type name (variable) is managed separately from the lowercase action-name list
    // elsewhere (e.g. "resume endpoint protection" in general-settings.js), so it is left
    // untranslated here.
    { re: /^Detailed Results - (.+) \(ID (\d+)\)$/, tpl: "Résultats détaillés - $1 (ID $2)" },
    // Target count in the "Isolate endpoint" / "Cancel action" dialogs (e.g. "1 endpoint",
    // "5 endpoints").
    { re: /^(\d+)\s+endpoints?$/, tpl: "$1 endpoint(s)" },
    { re: /^This pending action will be canceled for\s+(\d+)\s+endpoints?\.$/,
      tpl: "Cette action en attente sera annulée pour $1 endpoint(s)." },
    // The endpoint name (an identifier) is left untranslated.
    { re: /^Changing isolation comment for\s+(.+)$/, tpl: "Modification du commentaire d'isolement pour $1" },
  ],

  skip: [],
};
