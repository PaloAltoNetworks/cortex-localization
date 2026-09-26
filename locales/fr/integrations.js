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

const dictionaryIntegrations = {
  exact: {
    "API Keys for external threat intel": "Clés API pour la Threat Intelligence externe",
    "SERVICE NAME": "NOM DU SERVICE",
    "license key": "clé de licence",
    "Search credential...": "Rechercher des identifiants...",
    "Enter the connection details and click Verify to confirm that the S3 URI path is authorized in the gateway.":
      "Saisissez les informations de connexion et cliquez sur Vérifier pour confirmer que le chemin de l'URI S3 est autorisé dans la passerelle.",
    "Enter the connection details and click Verify to confirm that the Queue URL path is authorized in the gateway.":
      "Saisissez les informations de connexion et cliquez sur Vérifier pour confirmer que le chemin de l'URL de la file d'attente est autorisé dans la passerelle.",
    "Enter the connection details and click Verify to confirm that the Splunk HTTP event collector URL path is authorized in the gateway.":
      "Saisissez les informations de connexion et cliquez sur Vérifier pour confirmer que le chemin de l'URL du collecteur d'événements HTTP Splunk est autorisé dans la passerelle.",
    "Enter the connection details and click Verify to confirm that the Webhook URL path is authorized in the gateway.":
      "Saisissez les informations de connexion et cliquez sur Vérifier pour confirmer que le chemin de l'URL du webhook est autorisé dans la passerelle.",
    "Connect": "Connecter",
    "Connect syslog server": "Connecter un serveur syslog",
    "Ignore certificate errors": "Ignorer les erreurs de certificat",
    "destination": "destination",
    "facility": "facility",
    "DOMAIN NAMES EDL URL:": "URL EDL DES NOMS DE DOMAINE :",
    "Enable External Dynamic List": "Activer la liste dynamique externe",
    "Enabling External Dynamic Lists (EDL) allows integration of your defined external Domain Names and IP Addresses lists with your firewall.":
      "L'activation des listes dynamiques externes (EDL) permet d'intégrer à votre pare-feu les listes externes de noms de domaine et d'adresses IP que vous avez définies.",
    "External Dynamic List - PAN-OS": "Liste dynamique externe - PAN-OS",
    "External Dynamic List Credentials": "Identifiants de la liste dynamique externe",
    "For more information on how EDL integrates with Palo Alto firewalls, see":
      "Pour plus d'informations sur l'intégration des EDL aux pare-feu Palo Alto, consultez",
    "IP ADDRESSES EDL URL:": "URL EDL DES ADRESSES IP :",
    "Using an External Dynamic List in Policy": "Utilisation d'une liste dynamique externe dans une politique",
    "Copy API URL": "Copier l'URL de l'API",
    "New Key": "Nouvelle clé",
    "User Email": "E-mail de l'utilisateur",
    "API key can be used as-is (suitable for curl).": "La clé API peut être utilisée telle quelle (adaptée à curl).",
    "API key must be hashed with a random arbitrary number and a timestamp (this option is suitable for proprietary scripts and intended to prevent replay attacks).":
      "La clé API doit être hachée avec un nombre aléatoire arbitraire et un horodatage (cette option convient aux scripts propriétaires et vise à empêcher les attaques par rejeu).",
    "Advanced": "Avancé",
    "CLI Tools": "Outils CLI",
    "Components": "Composants",
    "Enable Expiration Date": "Activer la date d'expiration",
    "Exceptions Configuration": "Configuration des exceptions",
    "Generate": "Générer",
    "Generate API Key": "Générer une clé API",
    "Notice!": "Attention !",
    "This key will not be accessible once you close this window": "Cette clé ne sera plus accessible une fois cette fenêtre fermée",
    "Learn more.": "En savoir plus.",
    "No assets": "Aucun actif",
    "No domains": "Aucun domaine",
    "No endpoints": "Aucun endpoint",
    "Provide access to Domains to view their related Cases and Issues. Users can only view cases or issues referencing assets and endpoints within their scope.":
      "Donnez accès aux domaines pour afficher les cas et problèmes associés. Les utilisateurs ne peuvent afficher que les cas ou problèmes faisant référence à des actifs et endpoints compris dans leur portée.",
    "Scope Definition": "Définition de la portée",
    "Scope is applied to selected features in the system. For features where scoping is not applicable, role-based access control (RBAC) is used and can be configured under Settings > Configurations > Access Management":
      "La portée s'applique aux fonctionnalités sélectionnées du système. Pour les fonctionnalités auxquelles la portée ne s'applique pas, le contrôle d'accès basé sur les rôles (RBAC) est utilisé et peut être configuré sous Paramètres > Configurations > Gestion des accès",
    "Select Role": "Sélectionner un rôle",
    "Select date and time": "Sélectionner la date et l'heure",
    "After downloading the MCP file, generate a new API key": "Après avoir téléchargé le fichier MCP, générez une nouvelle clé API",
    "Download checksum file": "Télécharger le fichier de somme de contrôle",
    "Download the file below to set up your Cortex MCP Server.": "Téléchargez le fichier ci-dessous pour configurer votre Cortex MCP Server.",
    "MCP File": "Fichier MCP",
    "To fully set up the Cortex MCP Server, please review and follow the instructions in the":
      "Pour configurer entièrement le Cortex MCP Server, consultez et suivez les instructions de la",
    "directory service": "service d'annuaire",
    "Click": "Cliquez sur",
    "to add directory sync tenant": "pour ajouter un tenant de synchronisation d'annuaire",
    "Create one.": "Créez-en un.",
    "New Credential": "Nouveaux identifiants",
    "There are no Credential Sets to show here.": "Aucun ensemble d'identifiants à afficher ici.",
    "Credential Name": "Nom des identifiants",
    "Name must be unique, not empty, and must not contain ()": "Le nom doit être unique, non vide et ne doit pas contenir ()",
    "Workgroup": "Groupe de travail",
  },

  patterns: [
    { re: /^Showing\s+(\d+\/\d+)\s+Instances$/, tpl: "Affichage de $1 instances" },
    { re: /^(\d+)\s+Connected$/, tpl: "$1 connectés" },
    { re: /^(\d+)\s+Errors?$/, tpl: "$1 erreur(s)" },
  ],

  skip: [],
};
