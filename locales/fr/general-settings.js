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

const dictionaryGeneralSettings = {
  exact: {
    "Server Settings": "Paramètres du serveur",
    "Issue Management": "Gestion des problèmes",
    "Result": "Résultat",
    "Source IP": "IP source",
    "Subtype": "Sous-type",
    "Update Issue": "Mettre à jour le problème",
    "User Roles": "Rôles utilisateur",

    "Default User Notifications": "Notifications utilisateur par défaut",
    "Case assigned": "Cas assigné",
    "Case resolved": "Cas résolu",
    "Issue assigned": "Problème assigné",
    "Issue resolved": "Problème résolu",
    "Notifications exclude actions performed by the user.": "Les notifications excluent les actions effectuées par l'utilisateur.",
    "Create New Forwarding Configuration": "Créer une configuration de transfert",
    "Add Forwarding Configuration": "Ajouter une configuration de transfert",
    "Define": "Définir",
    "Forward Destination": "Destination du transfert",
    "Review and Create": "Vérifier et créer",
    "log type": "type de journal",
    "Define the forwarding scope by using the filter or right-click on a table cell to select the fields and values.":
      "Définissez la portée du transfert à l'aide du filtre ou en cliquant avec le bouton droit sur une cellule du tableau pour sélectionner les champs et les valeurs.",
    "Add Application": "Ajouter une application",
    "Alert": "Alerte",
    "Connected Integrations": "Intégrations connectées",
    "Minutes": "Minutes",
    "Select name": "Sélectionner un nom",
    "Use Auto Generated Subject": "Utiliser l'objet généré automatiquement",
    "channel name": "nom du canal",
    "distribution list": "liste de distribution",
    "format": "format",
    "grouping timeframe": "période de regroupement",
    "instance name": "nom de l'instance",
    "notification timezone": "fuseau horaire des notifications",
    "subject": "objet",
    "Configuration Scope": "Portée de la configuration",
    "Destination Type": "Type de destination",
    "Forward Type": "Type de transfert",
    "excluded": "exclu",
    "Enforce query privacy": "Imposer la confidentialité des requêtes",
    "Enforce query privacy for non-admins": "Imposer la confidentialité des requêtes pour les non-administrateurs",
    "Limit non-admin users and API keys to viewing and managing their own query activity.":
      "Limitez les utilisateurs non administrateurs et les clés API à la consultation et à la gestion de leur propre activité de requête.",
    "Query Limits": "Limites de requêtes",
    "Unlimited": "Illimité",
    "<Max>": "<Max>",
    "Query limits govern user-initiated queries, excluding those from playbooks and correlations, to enhance query performance and efficiency. These limits are tenant-wide, unless specific roles and groups are excluded.":
      "Les limites de requêtes s'appliquent aux requêtes lancées par les utilisateurs, à l'exclusion de celles provenant des playbooks et des corrélations, afin d'améliorer les performances et l'efficacité des requêtes. Ces limites s'appliquent à l'ensemble du tenant, sauf si des rôles et groupes spécifiques sont exclus.",
    "Excluded User Groups or Roles": "Groupes d'utilisateurs ou rôles exclus",
    "Select Group": "Sélectionner un groupe",
    "concurrent queries per user": "requêtes simultanées par utilisateur",
    "query timeout (minutes)": "délai d'expiration des requêtes (minutes)",
    "Administration": "Administration",
    "General": "Général",
    "Global Settings": "Paramètres globaux",
    "Access Management": "Gestion des accès",
    "Access Management.": "Gestion des accès.",
    "Roles": "Rôles",
    "User Groups": "Groupes d'utilisateurs",
    "Authentication Settings": "Paramètres d'authentification",
    "API Keys": "Clés API",
    "API Keys.": "Clés API.",
    "Security Settings": "Paramètres de sécurité",
    "Exception Management": "Gestion des exceptions",
    "Automation Exclusion Center": "Centre d'exclusions d'automatisation",
    "Data Management": "Gestion des données",
    "Data Collection": "Collecte de données",
    "Data Broker": "Data Broker",
    "Broker VMs": "Broker VM",
    "Dataset Management": "Gestion des jeux de données",
    "Query Management": "Gestion des requêtes",
    "Parsing Rules": "Règles d'analyse syntaxique",
    "Lists": "Listes",
    "IP Labels": "Libellés IP",
    "External Dynamic List Integration": "Intégration de listes dynamiques externes",
    "Integrations": "Intégrations",
    "External Applications": "Applications externes",
    "Marketplace": "Marketplace",
    "Credentials": "Identifiants",
    "Cloud Identity Engine": "Cloud Identity Engine",
    "Identity Configuration": "Configuration des identités",
    "Impersonation Role": "Rôle d'emprunt d'identité",
    "Agent Configurations": "Configurations de l'agent",
    "Agents & LLM Experience": "Agents et expérience LLM",
    "AI Configuration": "Configuration de l'IA",
    "AI Case Summarization": "Résumé des cas par IA",
    "Enable AI case summarization capabilities": "Activer les fonctionnalités de résumé des cas par IA",
    "Application Configuration": "Configuration de l'application",
    "AppSec Issues Configuration": "Configuration des problèmes AppSec",
    "Artifact and Asset Views": "Vues des artefacts et des actifs",
    "Automation Email Appearance": "Apparence des e-mails d'automatisation",
    "Case display modes": "Modes d'affichage des cas",
    "Case Sensitivity (case_sensitive)": "Sensibilité à la casse (case_sensitive)",
    "Caching": "Mise en cache",
    "Enable Cases Caching": "Activer la mise en cache des cas",
    "Enable Issues Caching": "Activer la mise en cache des problèmes",
    "Improve performance on the Cases page by enabling a temporary cache.":
      "Améliorez les performances de la page Cas en activant un cache temporaire.",
    "Improve performance on the Issues page by enabling a temporary cache.":
      "Améliorez les performances de la page Problèmes en activant un cache temporaire.",
    "Compute Unit Consumption": "Consommation d'unités de calcul",
    "Email Contacts": "Contacts e-mail",
    "Define the list of contact emails for Cortex communication":
      "Définissez la liste des adresses e-mail de contact pour les communications de Cortex",
    "Endpoint Scoping Mode": "Mode de portée des endpoints",
    "Engines": "Moteurs",
    "Exceptions Require Approval": "Les exceptions nécessitent une approbation",
    "Approval Required": "Approbation requise",
    "This setting allows for checks and balances across your organization. If you turn this off, exception requests will be activated immediately, no approval needed.":
      "Ce paramètre permet d'assurer des contrôles croisés au sein de votre organisation. Si vous le désactivez, les demandes d'exception seront activées immédiatement, sans approbation.",
    "Add New Approver": "Ajouter un approbateur",
    "List of Approvers": "Liste des approbateurs",
    "New Approver Email": "E-mail du nouvel approbateur",
    "New Approver Name": "Nom du nouvel approbateur",
    "External Issue Mapping": "Mappage des problèmes externes",
    "Full-size logo": "Logo en taille réelle",
    "Replace the default logo in communication task emails with a custom logo to match your organization branding.":
      "Remplacez le logo par défaut des e-mails de tâches de communication par un logo personnalisé correspondant à l'image de marque de votre organisation.",
    "Recommended dimensions: 50px by 50px. Max file size 100 KB.":
      "Dimensions recommandées : 50 px sur 50 px. Taille de fichier maximale : 100 Ko.",
    "Google Maps Key": "Clé Google Maps",
    "Issue SLA Rules": "Règles SLA des problèmes",
    "AppSec Critical Issues Time to Resolve SLA": "SLA de délai de résolution des problèmes AppSec critiques",
    "AppSec High Issues Time to Resolve SLA": "SLA de délai de résolution des problèmes AppSec de gravité élevée",
    "AppSec Low Issues Time to Resolve SLA": "SLA de délai de résolution des problèmes AppSec de gravité faible",
    "AppSec Medium Issues Time to Resolve SLA": "SLA de délai de résolution des problèmes AppSec de gravité moyenne",
    "Create SLA Rule": "Créer une règle SLA",
    "Finding Sources = Cortex AppSec and Severity = Critical": "Sources du constat = Cortex AppSec et Gravité = Critique",
    "Finding Sources = Cortex AppSec and Severity = High": "Sources du constat = Cortex AppSec et Gravité = Élevée",
    "Finding Sources = Cortex AppSec and Severity = Low": "Sources du constat = Cortex AppSec et Gravité = Faible",
    "Finding Sources = Cortex AppSec and Severity = Medium": "Sources du constat = Cortex AppSec et Gravité = Moyenne",
    "Last Modified Date": "Date de dernière modification",
    "SLA Goal": "Objectif SLA",
    "Create a query to select the issues affected by this rule:": "Créez une requête pour sélectionner les problèmes concernés par cette règle :",
    "Criteria": "Critères",
    "New SLA Rule": "Nouvelle règle SLA",
    "Preview the Results": "Prévisualiser les résultats",
    "SLA Rules": "Règles SLA",
    "Set the Conditions for the SLA Rule": "Définir les conditions de la règle SLA",
    "Matching Issues": "Problèmes correspondants",
    "SLA Rules automatically set the starting countdown value for issues that match the rule’s query criteria. Use them to define the time goals or deadlines that tasks or milestones need to be completed by. For more detailed information read the":
      "Les règles SLA définissent automatiquement la valeur de départ du compte à rebours pour les problèmes qui correspondent aux critères de requête de la règle. Utilisez-les pour définir les objectifs de temps ou les échéances auxquels les tâches ou les jalons doivent être terminés. Pour plus d'informations, consultez la",
    "SLA Fields documentation": "documentation des champs SLA",
    "SLA Rule Name": "Nom de la règle SLA",
    "Enter a name for your SLA rule": "Saisissez un nom pour votre règle SLA",
    "Describe the purpose of this SLA rule": "Décrivez l'objectif de cette règle SLA",
    "Enter 0 or greater": "Saisissez 0 ou plus",
    "Enter 0 to 23": "Saisissez une valeur de 0 à 23",
    "Enter 0 to 59": "Saisissez une valeur de 0 à 59",
    "days": "jours",
    "hours": "heures",
    "Define the cases target MTTR per case severity": "Définissez le MTTR cible des cas par gravité de cas",
    "Keyboard Shortcuts": "Raccourcis clavier",
    "Select shortcut to open Cortex Assistant.": "Sélectionnez le raccourci pour ouvrir Cortex Assistant.",
    "Select shortcut to open artifact and asset views of hash or IP address values.":
      "Sélectionnez le raccourci pour ouvrir les vues d'artefact et d'actif des valeurs de hachage ou d'adresse IP.",
    "Object Setup": "Configuration des objets",
    "Outposts": "Outposts",
    "Password Protection (for downloaded files)": "Protection par mot de passe (pour les fichiers téléchargés)",
    "Note: Scroll down to the Define Password Protection for Download Files topic.":
      "Remarque : faites défiler jusqu'à la rubrique \"Définir la protection par mot de passe des fichiers téléchargés\".",
    "Profiles": "Profils",
    "Sync Profiles": "Profils de synchronisation",
    "Enable Scope Based Access Control": "Activer le contrôle d'accès basé sur la portée",
    "Scope-Based Access Control (SBAC)": "Contrôle d'accès basé sur la portée (SBAC)",
    "Scope-Based Access Control (SBAC) enforces access restrictions on users. Before enabling this setting, ensure that User Group and Users are granted the required access by assigning their scopes in Settings > Configurations >":
      "Le contrôle d'accès basé sur la portée (SBAC) applique des restrictions d'accès aux utilisateurs. Avant d'activer ce paramètre, assurez-vous que les groupes d'utilisateurs et les utilisateurs disposent des accès requis en leur attribuant des portées dans Paramètres > Configurations >",
    ". For API Keys, assign scopes in Settings > Configurations > Integrations >":
      ". Pour les clés API, attribuez des portées dans Paramètres > Configurations > Intégrations >",
    "Threat Intelligence": "Renseignements sur les menaces",
    "Timestamp Format": "Format d'horodatage",
    "Select a timestamp format that will be displayed in data tables":
      "Sélectionnez le format d'horodatage à afficher dans les tableaux de données",
    "Timezone": "Fuseau horaire",
    "Select in which time zone to display your Cortex CLOUD data":
      "Sélectionnez le fuseau horaire dans lequel afficher vos données Cortex CLOUD",
    "Upgrade Helper": "Assistant de mise à niveau",
    "XDR Collectors": "Collecteurs XDR",
    "XQL Configuration": "Configuration XQL",
    "These settings control your XQL queries in the system.": "Ces paramètres contrôlent vos requêtes XQL dans le système.",
    "This change will impact the default behavior of all your XQL configurations except for BIOCs.":
      "Cette modification aura un impact sur le comportement par défaut de toutes vos configurations XQL, à l'exception des BIOC.",
    "Allow users to switch to legacy mode. When disabled, only default mode is available.":
      "Autorisez les utilisateurs à passer en mode hérité. Lorsque cette option est désactivée, seul le mode par défaut est disponible.",
    "Enable legacy mode": "Activer le mode hérité",
    "Enable Agentic Assistant and natural-language capabilities (LLM).":
      "Activez l'assistant agentique et les fonctionnalités en langage naturel (LLM).",
    "While Agentic Assistant experience is currently free, we will notify you before any fees are applied, giving you the opportunity to opt out.":
      "L'expérience de l'assistant agentique est actuellement gratuite ; nous vous informerons avant l'application de tout frais, afin de vous permettre de vous désinscrire.",
    "When enabled, cases use an AI-generated name and summary. When disabled, the system or user name and description are displayed.":
      "Lorsque cette option est activée, les cas utilisent un nom et un résumé générés par l'IA. Lorsqu'elle est désactivée, le nom et la description du système ou de l'utilisateur sont affichés.",
    "Will only affect newly retrieved files by Cortex XDR agent v. 8.1 and higher.":
      "Affecte uniquement les fichiers nouvellement récupérés par l'agent Cortex XDR v. 8.1 et versions ultérieures.",
    "Read-only": "Lecture seule",
    "Restrictive": "Restrictif",
    "Save": "Enregistrer",
    "For more information, see": "Pour plus d'informations, consultez",
    "You can also": "Vous pouvez également",
    "7 Days": "7 jours",
    "Allowed Domains": "Domaines autorisés",
    "Allowed Sessions": "Sessions autorisées",
    "Approved IP Ranges": "Plages d'adresses IP approuvées",
    "Approved User Email Domains (user@domain.com)": "Domaines d'e-mail utilisateur approuvés (user@domain.com)",
    "As user login expiration (8 hours)": "Identique à l'expiration de la connexion utilisateur (8 heures)",
    "user login expiration": "expiration de la connexion utilisateur",
    "dashboard expiration": "expiration du tableau de bord",
    "deactivate inactive user": "désactiver les utilisateurs inactifs",
    "+Add": "+Ajouter",
    "The value selected, controls how frequently the Cortex tenant will refresh the Cortex Access Token from the CSP. To increase the frequency users have to re-authenticate, the CSP session duration should be reduced.":
      "La valeur sélectionnée contrôle la fréquence à laquelle le tenant Cortex actualise le jeton d'accès Cortex auprès du CSP. Pour augmenter la fréquence à laquelle les utilisateurs doivent se réauthentifier, réduisez la durée de session du CSP.",
    "When setting Approved Domains in parallel to Approved IP Ranges, only users that belong to one of the approved domains and using one of the approved IP ranges, will be able to access the Cortex XDR server":
      "Lorsque des domaines approuvés sont définis en parallèle de plages d'adresses IP approuvées, seuls les utilisateurs appartenant à l'un des domaines approuvés et utilisant l'une des plages d'adresses IP approuvées pourront accéder au serveur Cortex XDR",
    "Set Uninstall Password": "Définir le mot de passe de désinstallation",
    "Broker VM": "Broker VM",
    "Cancel": "Annuler",
    "Configure expiration time period": "Configurer la période d'expiration",
    "permission reset timeframe": "délai de réinitialisation des autorisations",
    "Control Cortex tenant Same-Site Cookie Policy. Lax allows the cookie to be sent on some cross-site requests,":
      "Contrôlez la politique de cookies Same-Site du tenant Cortex. Lax permet l'envoi du cookie dans certaines requêtes intersites,",
    "Disable access for users that haven't logged in for a long period of time":
      "Désactiver l'accès des utilisateurs qui ne se sont pas connectés depuis longtemps",
    "Disabled (Default)": "Désactivé (par défaut)",
    "Enable Auto Logout": "Activer la déconnexion automatique",
    "Same-Site Cookie Policy": "Politique de cookies Same-Site",
    "Session Expiration": "Expiration de la session",
    "Strict": "Strict",
    "Strict does not allow the cookie to be sent on a cross-site request.":
      "Strict n'autorise pas l'envoi du cookie dans une requête intersite.",
    "The following domains and external IPs and ranges are allowed to access the server":
      "Les domaines, adresses IP externes et plages suivants sont autorisés à accéder au serveur",
    "User Expiration": "Expiration de l'utilisateur",
    "Action Center Expiration": "Expiration du Centre d'actions",
    "Expiration can be set within 1-30 days from the creation time Updating the expiration will impact actions in \u201cpending\u201d status only":
      "L'expiration peut être définie entre 1 et 30 jours à compter de la création. La mise à jour de l'expiration n'affectera que les actions au statut “en attente”",
    "Enabling this feature will remove any duplicate entries based on the defined parameters, leaving only one entry - the last endpoint reporting to the server. The deleted endpoint data is retained for 90 days since its last connection. If a deleted endpoint reconnects it will recover its existing data.":
      "L'activation de cette fonctionnalité supprimera toutes les entrées en double selon les paramètres définis, pour ne conserver qu'une seule entrée : le dernier endpoint ayant communiqué avec le serveur. Les données de l'endpoint supprimé sont conservées pendant 90 jours après sa dernière connexion. Si un endpoint supprimé se reconnecte, il récupère ses données existantes.",
    "Custom Mail Subject": "Objet d'e-mail personnalisé",
    "Email Grouping Time Frame (Minutes)": "Période de regroupement des e-mails (minutes)",
    "Forward issues as soon as possible": "Transférer les problèmes dès que possible",
    "Log Forward Type": "Type de transfert des journaux",
    "Output Method": "Méthode de sortie",
    "Time Zone": "Fuseau horaire",
    "abort malware scan": "abandonner l'analyse des logiciels malveillants",
    "agent database cleanup": "nettoyage de la base de données des agents",
    "agent uninstall": "désinstallation de l'agent",
    "cancel endpoint isolation": "annuler l'isolement de l'endpoint",
    "change managing server": "changer de serveur de gestion",
    "collect detailed host firewall logs": "collecter les journaux détaillés du pare-feu de l'hôte",
    "delete quarantined file": "supprimer le fichier en quarantaine",
    "destroy files": "détruire les fichiers",
    "endpoint script execution": "exécution de script sur l'endpoint",
    "file search": "recherche de fichiers",
    "files retrieval": "récupération de fichiers",
    "isolate": "isoler",
    "malware scan": "analyse des logiciels malveillants",
    "memory collection": "collecte de la mémoire",
    "pause endpoint protection": "suspendre la protection de l'endpoint",
    "quarantine": "mettre en quarantaine",
    "registry search": "recherche dans le registre",
    "remediation": "correction",
    "restart agent": "redémarrer l'agent",
    "restore quarantine": "restaurer depuis la quarantaine",
    "resume endpoint protection": "reprendre la protection de l'endpoint",
    "retrieve alert data": "récupérer les données d'alerte",
    "set temporary token": "définir un jeton temporaire",
    "support file retrieval": "récupération du fichier de support",
    "terminate causality (cgo)": "terminer la causalité (cgo)",
    "terminate process": "terminer le processus",
    "unblock ip address": "débloquer l'adresse IP",
    "xdr collector support file retrieval": "récupération du fichier de support du collecteur XDR",
    "xdr collector uninstall": "désinstallation du collecteur XDR",
    "xdr collector upgrade": "mise à niveau du collecteur XDR",
    "Advanced Analysis": "Analyse avancée",
    "Agent Status": "Statut de l'agent",
    "Agent upgrade": "Mise à niveau de l'agent",
    "Content Management": "Gestion du contenu",
    "Cortex XDR Log Collection": "Collecte des journaux Cortex XDR",
    "Critical Environment Versions": "Versions pour environnements critiques",
    "Endpoint Administration Cleanup": "Nettoyage de l'administration des endpoints",
    "Global uninstall password": "Mot de passe de désinstallation global",
    "Informative BTP Issues": "Problèmes BTP informatifs",
    "Learn More": "En savoir plus",
    "Make reason field mandatory": "Rendre le champ Motif obligatoire",
    "Number of Agents": "Nombre d'agents",
    "One-time cleanup": "Nettoyage ponctuel",
    "Password Strength": "Robustesse du mot de passe",
    "Periodic duplicate cleanup": "Nettoyage périodique des doublons",
    "Require Reason for Live Terminal": "Exiger un motif pour le Live Terminal",
    "Restore default": "Restaurer les valeurs par défaut",
    "Time Interval": "Intervalle de temps",
    "WildFire Analysis for Benign Verdict": "Analyse WildFire pour les verdicts bénins",
    "XDR Calculator for Recommended Bandwidth": "Calculateur XDR de la bande passante recommandée",
    "XDR Collector": "Collecteur XDR",
    "Mbps (Megabits per second)": "Mbps (mégabits par seconde)",
    "Host IP (IPv4 only)": "IP de l'hôte (IPv4 uniquement)",
    "Mac Address": "Adresse MAC",
    "Enable WildFire analysis scoring for files with Benign verdicts.":
      "Activer le score d'analyse WildFire pour les fichiers ayant un verdict bénin.",
    "Enable bandwidth control": "Activer le contrôle de la bande passante",
    "Enable minor content version updates": "Activer les mises à jour mineures de la version du contenu",
    "Enable Critical Environment Versions to be Created and Installed in the Tenant":
      "Autoriser la création et l'installation de versions pour environnements critiques dans le tenant",
    "Configure Cortex XDR to collect logs to maintain stability":
      "Configurer Cortex XDR pour collecter des journaux afin de maintenir la stabilité",
    "Configure Cortex to automatically upload issue data and apply Advanced Analysis exceptions":
      "Configurer Cortex pour charger automatiquement les données des problèmes et appliquer les exceptions de l'analyse avancée",
    "Configure the Cortex XDR Agent Versions Used in the tenant":
      "Configurer les versions de l'agent Cortex XDR utilisées dans le tenant",
    "Configure the Cortex XDR Agent license revocation and deletion period":
      "Configurer la période de révocation de licence et de suppression de l'agent Cortex XDR",
    "Configure the Cortex XDR agent upgrade scheduler and number of parallel upgrades":
      "Configurer le planificateur de mise à niveau de l'agent Cortex XDR et le nombre de mises à niveau parallèles",
    "Configure the Endpoint Administration periodic cleanup settings":
      "Configurer les paramètres de nettoyage périodique de l'administration des endpoints",
    "Configure the Palo Alto Networks content update cadence and bandwidth allocation within your organization":
      "Configurer la fréquence des mises à jour de contenu Palo Alto Networks et l'allocation de bande passante au sein de votre organisation",
    "Disabling this capability takes immediate effect on new hashes, fresh agent installations, and existing security policies.":
      "La désactivation de cette fonctionnalité prend effet immédiatement pour les nouveaux hachages, les nouvelles installations d'agents et les politiques de sécurité existantes.",
    "Enable Cortex XDR agents to collect logs necessary to maintain the stability of your Cortex XDR agent and improve performance -":
      "Autoriser les agents Cortex XDR à collecter les journaux nécessaires pour maintenir la stabilité de votre agent Cortex XDR et améliorer les performances -",
    "Note that it could take up to a week to take effect on existing agents in your environment pending agent caching.":
      "Notez que la prise d'effet sur les agents existants de votre environnement peut prendre jusqu'à une semaine, en raison de la mise en cache des agents.",
    "Note: this configuration affects only standard endpoints and does not impact the VDI or Temporary Session agent status.":
      "Remarque : cette configuration affecte uniquement les endpoints standard et n'a pas d'impact sur le statut des agents VDI ou de session temporaire.",
    "Otherwise, the content updates in your network occur only on major releases.":
      "Sinon, les mises à jour de contenu dans votre réseau n'ont lieu que lors des versions majeures.",
    "This calculation is based on connected agents and includes an overhead for large content update. For additional information":
      "Ce calcul est basé sur les agents connectés et inclut une marge pour les mises à jour de contenu volumineuses. Pour plus d'informations",
    "This setting controls whether the reason field for starting a Live Terminal session is mandatory or optional.":
      "Ce paramètre détermine si le champ Motif est obligatoire ou facultatif lors du démarrage d'une session Live Terminal.",
    "To enforce immediate protection against the latest threats, enable minor content updates.":
      "Pour appliquer une protection immédiate contre les menaces les plus récentes, activez les mises à jour mineures du contenu.",
    "we recommend you to allocate the minimum of 20 Mbps.": "nous vous recommandons d'allouer au minimum 20 Mbps.",
    "1 lower-case letter": "1 lettre minuscule",
    "1 number": "1 chiffre",
    "1 of the following special characters: !@#%": "1 des caractères spéciaux suivants : !@#%",
    "1 upper-case letter": "1 lettre majuscule",
    "The password must be 8 to 32 characters and must contain at least:":
      "Le mot de passe doit comporter entre 8 et 32 caractères et contenir au moins :",
    "All actions should be editable between 1-30 days": "Toutes les actions doivent être modifiables entre 1 et 30 jours",
    "*When selecting more than one parameter, duplications will be removed only if containing all selected parameters":
      "*Lorsque plusieurs paramètres sont sélectionnés, les doublons ne sont supprimés que s'ils contiennent tous les paramètres sélectionnés",
    "Set the default uninstall password for all agents in the system":
      "Définir le mot de passe de désinstallation par défaut pour tous les agents du système",
    "agent deletion (days)": "suppression de l'agent (jours)",
    "amount of parallel upgrades": "nombre de mises à niveau parallèles",
    "confirm password": "confirmer le mot de passe",
    "connection lost (days)": "connexion perdue (jours)",
    "define password": "définir le mot de passe",
    "security content updates": "mises à jour du contenu de sécurité",
    "Palo Alto Networks - Cortex support": "Palo Alto Networks - Support Cortex",
    "During the first week of a new Cortex XDR agent release rollout, only a single batch of agents is upgraded. After that, auto-upgrades continue to be deployed across your network with the number of parallel upgrades as configured. Consider network bandwidth when determining the number of parallel upgrades in your environment.":
      "Pendant la première semaine du déploiement d'une nouvelle version de l'agent Cortex XDR, un seul lot d'agents est mis à niveau. Ensuite, les mises à niveau automatiques continuent d'être déployées sur votre réseau selon le nombre de mises à niveau parallèles configuré. Tenez compte de la bande passante réseau pour déterminer le nombre de mises à niveau parallèles dans votre environnement.",
    "Note! Critical Environment Versions are designed for sensitive and highly regulated environments and do not contain all updates and content existing in standard versions. It is recommended to restrict the use of these versions to the required minimum.":
      "Remarque ! Les versions pour environnements critiques sont conçues pour les environnements sensibles et fortement réglementés et ne contiennent pas toutes les mises à jour et tout le contenu des versions standard. Il est recommandé de limiter l'utilisation de ces versions au strict minimum nécessaire.",
    "Enable Cortex to automatically upload defined issue data files for advanced analysis. Advanced Analysis increases the Cortex exploit protection module accuracy":
      "Autorisez Cortex à charger automatiquement les fichiers de données de problèmes définis pour une analyse avancée. L'analyse avancée améliore la précision du module de protection contre les exploits de Cortex",
    "Automatically apply Advanced Analysis exceptions to your Global Exceptions list. This will apply all Advanced Analysis exceptions suggested by Cortex, regardless of the issue data file source":
      "Appliquez automatiquement les exceptions de l'analyse avancée à votre liste d'exceptions globales. Toutes les exceptions de l'analyse avancée suggérées par Cortex seront appliquées, quelle que soit la source du fichier de données du problème",
    "For optimized performance and reduced bandwidth consumption, ensure you install new agents with the distribution package available for Windows Cortex XDR agents 7.3 and later. Otherwise, if you distribute the agent installer via SCCM, it is recommended to configure the bandwidth you allocate in your organization for the Palo Alto Network":
      "Pour optimiser les performances et réduire la consommation de bande passante, veillez à installer les nouveaux agents avec le package de distribution disponible pour les agents Cortex XDR Windows 7.3 et versions ultérieures. Sinon, si vous distribuez le programme d'installation de l'agent via SCCM, il est recommandé de configurer la bande passante allouée dans votre organisation pour Palo Alto Network",
    "When enabled, Cortex displays unique and informative BTP rule names and descriptions. While multiple issue names have been completely revised, the issue descriptions will include both the new descriptions and the previous descriptions that existed previously to better support the transition.":
      "Lorsque cette option est activée, Cortex affiche des noms et descriptions de règles BTP uniques et informatifs. Bien que plusieurs noms de problèmes aient été entièrement revus, les descriptions des problèmes incluront à la fois les nouvelles descriptions et les descriptions antérieures, afin de faciliter la transition.",
    "Note: If you have any Cortex filters, starring policies, exclusion policies, scoring rules, log forwarding queries, or automations rules configured for XSOAR / 3rd party SIEM, we advise you update those to support the changes before activating the feature (for example, change the query to include the previous description that is still available in the new description, instead of looking for an exact match).":
      "Remarque : si vous avez configuré des filtres Cortex, des politiques de marquage, des politiques d'exclusion, des règles de score, des requêtes de transfert de journaux ou des règles d'automatisation pour XSOAR ou un SIEM tiers, nous vous conseillons de les mettre à jour pour prendre en charge les modifications avant d'activer la fonctionnalité (par exemple, modifiez la requête pour inclure la description antérieure, toujours présente dans la nouvelle description, au lieu de rechercher une correspondance exacte).",
  },

  patterns: [
    { re: /^Distribution list\s+(\(\d+\))$/, tpl: "Liste de distribution $1" },
    { re: /^(\d+)\s+hours?$/, tpl: "$1 heure(s)" },
    { re: /^Use configured timezone\s+(\(.+\))$/, tpl: "Utiliser le fuseau horaire configuré $1" },
    { re: /^(\d+)\s+minutes?$/, tpl: "$1 minute(s)" },
    { re: /^Results Preview - Matched\s+([\d,]+)\s+out of\s+([\d,]+)\s+Issues$/, tpl: "Aperçu des résultats - $1 problèmes correspondants sur $2" },
    { re: /^domain name\s+(\(\d+\))$/, tpl: "nom de domaine $1" },
    { re: /^(\d+)\s+days?$/, tpl: "$1 jour(s)" },
    { re: /^(\d+)\s+Items?$/, tpl: "$1 élément(s)" },
  ],

  skip: [
    // SLA rule condition summary (e.g. "Matches all issues."). Excluded from translation by
    // request, since the text differs per rule.
    /^Matches .+\.$/,
    // The SLA Rules screen's "Description" column (e.g. "Default Critical Issues Time to
    // Resolve SLA") is likewise excluded from translation by request (its exact-dictionary
    // entry has been removed).
  ],
};
