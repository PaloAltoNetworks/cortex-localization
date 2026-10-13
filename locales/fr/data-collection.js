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

const dictionaryDataCollection = {
  exact: {
    "Add New": "Ajouter nouveau",
    "Enter client ID": "Saisissez l'ID client",
    "Enter password": "Saisissez le mot de passe",
    "Choose Outpost": "Choisir un Outpost",
    "Organization ID": "ID d'organisation",
    "Include": "Inclure",
    "Enter OU IDs to exclude from scan": "Saisissez les ID d'OU à exclure de l'analyse",
    "Specify OUs": "Spécifier des OU",
    "Specify Accounts": "Spécifier des comptes",
    "Enter account IDs to exclude from scan": "Saisissez les ID de compte à exclure de l'analyse",
    "Specify Folders": "Spécifier des dossiers",
    "Specify Projects": "Spécifier des projets",
    "Enter folder IDs to exclude from scan": "Saisissez les ID de dossier à exclure de l'analyse",
    "Enter project IDs to exclude from scan": "Saisissez les ID de projet à exclure de l'analyse",
    "Enter Customer IDs for discovery enhancements": "Saisissez les ID client pour améliorer la découverte",
    "Specify Management Groups": "Spécifier des groupes d'administration",
    "Enter management group IDs to exclude from scan": "Saisissez les ID de groupe d'administration à exclure de l'analyse",
    "Specify Subscriptions": "Spécifier des abonnements",
    "Enter subscription IDs to exclude from scan": "Saisissez les ID d'abonnement à exclure de l'analyse",
    "To complete setup, provide these details during template execution in the Azure Portal:":
      "Pour terminer la configuration, fournissez ces informations lors de l'exécution du modèle dans le portail Azure :",
    "Event Hub namespace": "Espace de noms Event Hub",
    "Must belong to the onboarded subscription": "Doit appartenir à l'abonnement intégré",
    "Create an outpost for this tenant": "Créer un Outpost pour ce tenant",
    "Allow connection to private registries": "Autoriser la connexion aux registres privés",
    "Allow connection to private serverless functions": "Autoriser la connexion aux fonctions serverless privées",
    "Enabling this feature requires additional permissions. Download and run the Terraform template to apply.":
      "L'activation de cette fonctionnalité nécessite des autorisations supplémentaires. Téléchargez et exécutez le modèle Terraform pour l'appliquer.",
    "Requires additional cloud service provider permissions": "Nécessite des autorisations supplémentaires du fournisseur de services cloud",
    "Choose an outpost to use for this instance. Only outposts connected to above tenant ID will be presented. To create a new outpost click":
      "Choisissez un Outpost à utiliser pour cette instance. Seuls les Outposts connectés à l'ID de tenant ci-dessus sont affichés. Pour créer un Outpost, cliquez sur",
    "Tenant ID is required to approve Cortex as an enterprise application in the Azure tenant":
      "L'ID de tenant est requis pour approuver Cortex en tant qu'application d'entreprise dans le tenant Azure",
    "Select this option to onboard only Microsoft Entra ID data for identity security without full tenant onboarding. Scan mode and scope modifications will not be available.":
      "Sélectionnez cette option pour intégrer uniquement les données Microsoft Entra ID pour la sécurité des identités, sans intégration complète du tenant. Le mode d'analyse et la modification de la portée ne seront pas disponibles.",
    "Event Hub name": "Nom de l'Event Hub",
    "After onboarding, these values will be available as read-only in the instance settings.":
      "Après l'intégration, ces valeurs seront disponibles en lecture seule dans les paramètres de l'instance.",
    "Importing replaces the current list.": "L'importation remplace la liste actuelle.",
    "Additional security capabilities can be enabled in addition to the below built in capabilities:":
      "Des fonctionnalités de sécurité supplémentaires peuvent être activées en plus des fonctionnalités intégrées ci-dessous :",
    "Cloud security posture management": "Gestion de la posture de sécurité du cloud",
    "AI security posture management": "Gestion de la posture de sécurité de l'IA",
    "Discover, classify and protect sensitive data in your cloud environment": "Découvrez, classez et protégez les données sensibles de votre environnement cloud",
    "Requires additional cloud provider permissions": "Nécessite des autorisations supplémentaires du fournisseur cloud",
    "Scan Serverless functions for vulnerabilities": "Analyser les fonctions serverless à la recherche de vulnérabilités",
    "Automate response to issues using playbooks and Quick Actions": "Automatisez la réponse aux problèmes à l'aide de playbooks et de Quick Actions",
    "Enable or disable Agentless Disk Scanning.": "Activez ou désactivez l'analyse de disque sans agent.",
    "Existing and newly discovered clusters are continuously scanned agentlessly for deep Kubernetes inventory context alongside security insights (e.g. compliance & misconfigurations)":
      "Les clusters existants et nouvellement découverts sont analysés en continu sans agent afin d'obtenir un contexte d'inventaire Kubernetes approfondi ainsi que des informations de sécurité (par ex. conformité et mauvaises configurations)",
    "Select outpost account": "Sélectionner le compte Outpost",
    "When enabled, Cortex sends unknown files to WildFire for analysis. The file types sent for analysis depend on the platform type. WildFire accepts files up to 300MB in size.":
      "Lorsque cette option est activée, Cortex envoie les fichiers inconnus à WildFire pour analyse. Les types de fichiers envoyés dépendent du type de plateforme. WildFire accepte les fichiers d'une taille maximale de 300 Mo.",
    "Hide Preferences": "Masquer les préférences",
    "Enable automation to streamline incident response. this may required additional cloud service provider permissions.":
      "Activez l'automatisation pour rationaliser la réponse aux incidents. Cela peut nécessiter des autorisations supplémentaires du fournisseur de services cloud.",
    "Scan container registry images for vulnerabilities, malware and secrets": "Analyser les images des registres de conteneurs à la recherche de vulnérabilités, de logiciels malveillants et de secrets",
    "This feature requires data egress, which incurs standard data transfer fees.": "Cette fonctionnalité nécessite une sortie de données (egress), qui entraîne des frais de transfert de données standard.",
    "Publisher": "Éditeur",
    "Choose and configure capabilities to fit your needs": "Choisissez et configurez les fonctionnalités selon vos besoins",
    "Edit, add or remove capabilities to fit your needs": "Modifiez, ajoutez ou supprimez des fonctionnalités selon vos besoins",
    "Deployment removal": "Suppression du déploiement",
    "Default settings": "Paramètres par défaut",
    "Edit profile": "Modifier le profil",
    "Kubernetes connect": "Connexion Kubernetes",
    "Connector Status": "Statut du connecteur",
    "Collectors": "Collecteurs",
    "Count Received (Last 24h)": "Nombre reçu (dernières 24 h)",
    "Last Communication": "Dernière communication",
    "Connector Version": "Version du connecteur",
    "Data source": "Source de données",
    "K8s Platform": "Plateforme K8s",
    "Last Scan": "Dernière analyse",
    "Serverless": "Sans serveur",
    "Update": "Mettre à jour",
    "Cluster resource identifier": "Identifiant de ressource du cluster",
    "Enter cluster resource identifier": "Saisissez l'identifiant de ressource du cluster",
    "The resource identifier must be specified for GKE or EKS clusters with metadata service disabled, for AKS clusters with non-default nodes managed resource group and for Fargate clusters":
      "L'identifiant de ressource doit être spécifié pour les clusters GKE ou EKS dont le service de métadonnées est désactivé, pour les clusters AKS dont le groupe de ressources géré des nœuds n'est pas celui par défaut, et pour les clusters Fargate",
    "Basic authentication is only supported for posture management.": "L'authentification de base n'est prise en charge que pour la gestion de la posture.",
    "Notice! Assigning tags may impact scoped permissions in the system.":
      "Attention ! L'attribution de tags peut affecter les autorisations limitées à une portée dans le système.",
    "Initial scanning configuration": "Configuration initiale de l'analyse",
    "Configure the initial preference for scanning your registry. Any newly discovered registry, repository or image in the account will be scanned by default.":
      "Configurez la préférence initiale d'analyse de votre registre. Tout registre, dépôt ou image nouvellement découvert dans le compte sera analysé par défaut.",
    "Latest tag": "Dernier tag",
    "Days modified": "Jours depuis la modification",
    "Tags created/updated in last": "Tags créés/mis à jour au cours des derniers",
    "Onboard your OCI tenancy to Cortex Cloud. Security scanning is performed in the Cortex Cloud environment.":
      "Intégrez votre tenancy OCI à Cortex Cloud. L'analyse de sécurité est effectuée dans l'environnement Cortex Cloud.",
    "Enter an instance name or leave it empty to be auto populated": "Saisissez un nom d'instance ou laissez vide pour qu'il soit renseigné automatiquement",
    "Define scope of scans by including/excluding compartments or regions": "Définissez la portée des analyses en incluant/excluant des compartiments ou des régions",
    "Modify Scope by Compartments": "Modifier la portée par compartiments",
    "Scope modification will impact the compartments and their sub-compartments": "La modification de la portée affectera les compartiments et leurs sous-compartiments",
    "OCI region": "Région OCI",
    "Choose region": "Choisir une région",
    "Bucket Name": "Nom du bucket",
    "Enter bucket name": "Saisissez le nom du bucket",
    "Compartment OCID": "OCID du compartiment",
    "Enable Amazon S3 Log Collection": "Activer la collecte de journaux Amazon S3",
    "Enable Azure Network Watcher Log Collection": "Activer la collecte de journaux Azure Network Watcher",
    "Enable GCP Pub/Sub Log Collection": "Activer la collecte de journaux GCP Pub/Sub",
    "Enter the full GCP Pub/Sub subscription name": "Saisissez le nom complet de l'abonnement GCP Pub/Sub",
    "Upload the JSON file containing your service account key": "Chargez le fichier JSON contenant la clé de votre compte de service",
    "Enhanced Cloud Protection": "Protection cloud renforcée",
    "Use flow logs in analytics": "Utiliser les journaux de flux dans l'analytique",
    "Save & Generate Token": "Enregistrer et générer un jeton",
    "subscription name": "nom de l'abonnement",
    "Define the following parameters": "Définissez les paramètres suivants",
    ", see": ", voir",
    "Applies to these capabilities": "S'applique à ces fonctionnalités",
    "Automation and Remediation": "Automatisation et correction",
    "Connection": "Connexion",
    "Drag & Drop or Browse file to upload": "Glissez-déposez ou parcourez pour charger un fichier",
    "Engine": "Moteur",
    "Engine Group": "Groupe de moteurs",
    "Enter the credentials to securely authorize the connection": "Saisissez les identifiants pour autoriser la connexion de manière sécurisée",
    "Google Workspace Admin Email": "E-mail de l'administrateur Google Workspace",
    "Identity Posture": "Posture des identités",
    "Manage and monitor Google Workspace directory resources including users, groups, organizational units, domains, and roles via the Admin SDK Directory API":
      "Gérez et surveillez les ressources d'annuaire Google Workspace, notamment les utilisateurs, groupes, unités d'organisation, domaines et rôles, via l'API Admin SDK Directory",
    "No engine": "Aucun moteur",
    "OAuth with customer created service principal": "OAuth avec un principal de service créé par le client",
    "Run automation and remediation actions against Google Drive": "Exécuter des actions d'automatisation et de correction sur Google Drive",
    "Scan and protect Google Workspace data across Drive, Gmail, and shared resources": "Analysez et protégez les données Google Workspace dans Drive, Gmail et les ressources partagées",
    "Select capabilities": "Sélectionner des fonctionnalités",
    "Server-to-server authentication using JWT Bearer assertion with a service account credentials file":
      "Authentification de serveur à serveur à l'aide d'une assertion JWT Bearer avec un fichier d'identifiants de compte de service",
    "Set your preferred authentication setup": "Définissez votre configuration d'authentification préférée",
    "The Google Workspace admin email used for domain-wide delegation. This account must have super admin privileges.":
      "E-mail de l'administrateur Google Workspace utilisé pour la délégation au niveau du domaine. Ce compte doit disposer des privilèges de super administrateur.",
    "Trust any certificate (not secure)": "Faire confiance à tous les certificats (non sécurisé)",
    "Use system proxy settings": "Utiliser les paramètres proxy du système",
    "This field cannot be changed after it is added. To change it, exit the wizard and start again":
      "Ce champ ne peut plus être modifié une fois ajouté. Pour le modifier, quittez l'assistant et recommencez",
    "Workload Federated Identity": "Identité fédérée de charge de travail",
    "Access Key": "Clé d'accès",
    "STS AssumeRole": "STS AssumeRole",
    "SQS URL": "SQS URL",
    "Enter SQS URL": "Saisissez l'URL SQS",
    "Role ARN": "ARN du rôle",
    "Enter role ARN": "Saisissez l'ARN du rôle",
    "AWS Client ID": "ID client AWS",
    "AWS Client Secret": "Secret client AWS",
    "External ID": "ID externe",
    "Audience": "Audience",
    "Enter audience": "Saisissez l'audience",
    "Select log type": "Sélectionner le type de journal",
    "Copy service account identifier": "Copier l'identifiant du compte de service",
    "Identifier": "Identifiant",
    "Enable": "Activer",
    "Enter a compartment's OCID": "Saisissez l'OCID d'un compartiment",
    "Delayed": "Différé",
    "Edit Profile settings": "Modifier les paramètres du profil",
    "Enable auto upgrade to ensure the installed set of capabilities is upgraded as new versions are available.":
      "Activez la mise à niveau automatique pour que l'ensemble des fonctionnalités installées soit mis à niveau dès que de nouvelles versions sont disponibles.",
    "Explore and tailor Kubernetes security capabilities to simplify deployment and ensure seamless integration with your infrastructure. Easily strengthen and optimize your Kubernetes environment's security":
      "Explorez et adaptez les fonctionnalités de sécurité Kubernetes pour simplifier le déploiement et assurer une intégration transparente avec votre infrastructure. Renforcez et optimisez facilement la sécurité de votre environnement Kubernetes",
    "HTTP proxy IP": "IP du proxy HTTP",
    "If network traffic must route through a proxy gateway, configure the required settings here, including the proxy URL, authentication method, and other relevant parameters.":
      "Si le trafic réseau doit passer par une passerelle proxy, configurez ici les paramètres requis, notamment l'URL du proxy, la méthode d'authentification et les autres paramètres pertinents.",
    "Immediate": "Immédiat",
    "Latest available version (GA)": "Dernière version disponible (GA)",
    "Namespace": "Espace de noms",
    "Supported Kubernetes distributions": "Distributions Kubernetes prises en charge",
    "To see the list of supported versions,": "Pour afficher la liste des versions prises en charge,",
    "Upgrade rollout": "Déploiement de la mise à niveau",
    "Upgrade strategy": "Stratégie de mise à niveau",
    "What time?": "À quelle heure ?",
    "Which days?": "Quels jours ?",
    "Latest available version (GA) / Immediate / On any day (At any time)":
      "Dernière version disponible (GA) / Immédiat / N'importe quel jour (à tout moment)",
    "Profile settings": "Paramètres du profil",
    "Read more": "En savoir plus",
    "Realtime protection": "Protection en temps réel",
    "Capabilities": "Fonctionnalités",
    "Cloud Services": "Services cloud",
    "Count (Last 24h)": "Nombre (dernières 24 h)",
    "Data Enrichment & Threat Intelligence": "Enrichissement des données et Threat Intelligence",
    "Deprecated": "Obsolète",
    "Forensics & Malware Analysis": "Analyse forensique et analyse des logiciels malveillants",
    "Image OCR": "OCR d'images",
    "Indicators detection": "Détection d'indicateurs",
    "Instances Status": "Statut des instances",
    "Mail Sender": "Expéditeur d'e-mails",
    "Messaging": "Messagerie",
    "Messaging and Conferencing": "Messagerie et conférence",
    "Open Source": "Open source",
    "Pack Version": "Version du pack",
    "Rasterize": "Rastériser",
    "Update Available": "Mise à jour disponible",
    "Utilities": "Utilitaires",
    "Add Another Instance": "Ajouter une autre instance",
    "Add Data Sources or Integrations": "Ajouter des sources de données ou des intégrations",
    "Create Integration": "Créer une intégration",
    "More Details": "Plus de détails",
    "Account": "Compte",
    "Add Instance": "Ajouter une instance",
    "Additional Security Capabilities": "Fonctionnalités de sécurité supplémentaires",
    "Authentication Method": "Méthode d'authentification",
    "Cloud Scan": "Analyse cloud",
    "Cloud Service Provider": "Fournisseur de services cloud",
    "Cloud Tags": "Tags cloud",
    "Contains": "Contient",
    "Error": "Erreur",
    "Instance ID": "ID d'instance",
    "Outpost": "Outpost",
    "Outpost ID": "ID d'Outpost",
    "Pending": "En attente",
    "Scan Mode": "Mode d'analyse",
    "Update Status": "Statut de la mise à jour",
    "Warning": "Avertissement",
    "Account Name": "Nom du compte",
    "Account Type": "Type de compte",
    "Agentless Disk Scanning": "Analyse de disque sans agent",
    "All granted": "Toutes accordées",
    "Audit Logs": "Journaux d'audit",
    "Cloud Instances": "Instances cloud",
    "Coverage": "Couverture",
    "Scan Coverage": "Couverture de l'analyse",
    "Data Security Scanning": "Analyse de la sécurité des données",
    "Data Sources": "Sources de données",
    "Discovery Engine": "Moteur de découverte",
    "Environment": "Environnement",
    "High Coverage": "Couverture élevée",
    "Permissions": "Autorisations",
    "Registry Scanning": "Analyse des registres",
    "Resources Tags": "Tags des ressources",
    "Security Capabilities": "Fonctionnalités de sécurité",
    "Serverless Scanning": "Analyse serverless",
    "Scan With Outpost": "Analyser avec un Outpost",
    "Scanning is done in the Cortex cloud environment.": "L'analyse est effectuée dans l'environnement cloud Cortex.",
    "Scanning is done on infrastructure deployed to a cloud account owned by you. This mode require additional cloud provider permissions and may incur additional cloud costs.":
      "L'analyse est effectuée sur une infrastructure déployée dans un compte cloud qui vous appartient. Ce mode nécessite des autorisations supplémentaires du fournisseur cloud et peut entraîner des coûts cloud supplémentaires.",
    "Show advanced settings": "Afficher les paramètres avancés",
    "View required permissions": "Afficher les autorisations requises",
    "Organizational Unit": "Unité d'organisation",
    "Add Tag": "Ajouter un tag",
    "After onboarding, view these values in the cloud instance settings.":
      "Après l'intégration, consultez ces valeurs dans les paramètres de l'instance cloud.",
    "Automatically provisions all required cloud resources and permissions via IaC template.":
      "Provisionne automatiquement toutes les ressources cloud et autorisations requises via un modèle IaC.",
    "Choose logs to collect. To benefit from all security capabilities all log types should be collected -":
      "Choisissez les journaux à collecter. Pour bénéficier de toutes les fonctionnalités de sécurité, tous les types de journaux doivent être collectés -",
    "CloudTrail Bucket Name:": "Nom du bucket CloudTrail :",
    "Collect Audit Logs": "Collecter les journaux d'audit",
    "Data security posture management": "Gestion de la posture de sécurité des données",
    "Define scope of scans by including/excluding OUs, Accounts or Regions":
      "Définissez la portée des analyses en incluant/excluant des OU, des comptes ou des régions",
    "Deployment Guide": "Guide de déploiement",
    "Deployment Method": "Méthode de déploiement",
    "Edit Preferences": "Modifier les préférences",
    "Enable additional security add-ons. This may require additional cloud provider permissions":
      "Activez des modules complémentaires de sécurité supplémentaires. Cela peut nécessiter des autorisations supplémentaires du fournisseur cloud",
    "For full control over the onboarding process, follow our":
      "Pour un contrôle total du processus d'intégration, suivez notre",
    "Hide advanced settings": "Masquer les paramètres avancés",
    "KMS Key ARN (Optional):": "ARN de la clé KMS (facultatif) :",
    "Log Collection Configuration": "Configuration de la collecte de journaux",
    "Modify Scope by Regions": "Modifier la portée par régions",
    "Modify by OU/Account": "Modifier par OU/compte",
    "Must reside within the account you are onboarding": "Doit se trouver dans le compte que vous intégrez",
    "Note": "Remarque",
    "Collect data events (currently support lambda & S3)": "Collecter les événements de données (prend actuellement en charge lambda et S3)",
    "Automated collection creates new, dedicated AWS resources (CloudTrail, S3 bucket, and notification services). This can lead to significant infrastructure costs in high-volume environments.":
      "La collecte automatisée crée de nouvelles ressources AWS dédiées (CloudTrail, bucket S3 et services de notification). Cela peut entraîner des coûts d'infrastructure importants dans les environnements à fort volume.",
    "Region must match the deployment region": "La région doit correspondre à la région de déploiement",
    "SNS Topic ARN:": "ARN de la rubrique SNS :",
    "Scope Modifications": "Modifications de la portée",
    "Send samples to detonation in WildFire. Supported in: Registry Scanning.":
      "Envoyer des échantillons pour détonation dans WildFire. Pris en charge dans : Analyse des registres.",
    "Serverless functions scanning": "Analyse des fonctions serverless",
    "The following labels are added to any new resource created by Cortex in the cloud environment":
      "Les libellés suivants sont ajoutés à toute nouvelle ressource créée par Cortex dans l'environnement cloud",
    "To complete setup, enter these resource details during template execution in the AWS Console":
      "Pour terminer la configuration, saisissez ces informations de ressource lors de l'exécution du modèle dans la console AWS",
    "Upload unknown files to WildFire": "Charger les fichiers inconnus dans WildFire",
    "(Keeping this enabled is strongly recommended)": "(Il est fortement recommandé de laisser cette option activée)",
    ". This may require additional cloud provider permissions.":
      ". Cela peut nécessiter des autorisations supplémentaires du fournisseur cloud.",
    "for provisioning all required resources yourself.": "pour provisionner vous-même toutes les ressources requises.",
    "Close": "Fermer",
    "Connect to AWS to execute the template.": "Connectez-vous à AWS pour exécuter le modèle.",
    "Cortex has created your instance in pending state and your authentication template is available.":
      "Cortex a créé votre instance à l'état en attente et votre modèle d'authentification est disponible.",
    "Download CloudFormation": "Télécharger CloudFormation",
    "Download the template and execute it in your cloud service provider.":
      "Téléchargez le modèle et exécutez-le chez votre fournisseur de services cloud.",
    "Execute in AWS": "Exécuter dans AWS",
    "For more information,": "Pour plus d'informations,",
    "Generate Template": "Générer le modèle",
    "Template Delete": "Suppression du modèle",
    "Template has been deleted.": "Le modèle a été supprimé.",
    "DON'T FORGET": "À NE PAS OUBLIER",
    "To finalize the process, you will need to choose a connection method.":
      "Pour finaliser le processus, vous devrez choisir une méthode de connexion.",
    "Next steps": "Étapes suivantes",
    "Note: If you select": "Remarque : si vous sélectionnez",
    "To complete the process, execute the template in AWS using one of the following methods.":
      "Pour terminer le processus, exécutez le modèle dans AWS à l'aide de l'une des méthodes suivantes.",
    "To complete the process, execute the template in AWS": "Pour terminer le processus, exécutez le modèle dans AWS",
    "To configure flow or DNS log ingestion use": "Pour configurer l'ingestion des journaux de flux ou DNS, utilisez",
    "View all data sources and their instances in": "Affichez toutes les sources de données et leurs instances dans",
    "When the discovery scan is complete, view cloud assets in": "Une fois l'analyse de découverte terminée, affichez les actifs cloud dans",
    "When you're done": "Lorsque vous avez terminé",
    ", you must already be logged in to AWS.": ", vous devez déjà être connecté à AWS.",
    "view documentation": "afficher la documentation",
    "read more in documentation": "en savoir plus dans la documentation",
    "tag key": "clé du tag",
    "tag value": "valeur du tag",
    "ARE YOU SURE?": "ÊTES-VOUS SÛR ?",
    "Clear": "Effacer",
    "Cloud Labels": "Libellés cloud",
    "Collect Audit Logs (GCP Pub/Sub)": "Collecter les journaux d'audit (GCP Pub/Sub)",
    "Connect to GCP workspace": "Se connecter à l'espace de travail GCP",
    "Define scope of scans by including/excluding Folders, Projects or Regions":
      "Définissez la portée des analyses en incluant/excluant des dossiers, des projets ou des régions",
    "Discovery Enhancements": "Améliorations de la découverte",
    "Download Terraform": "Télécharger Terraform",
    "GCP Pub/Sub connector": "Connecteur GCP Pub/Sub",
    "To complete the process, execute the template in GCP": "Pour terminer le processus, exécutez le modèle dans GCP",
    "To configure flow and DNS log ingestion use": "Pour configurer l'ingestion des journaux de flux et DNS, utilisez",
    ". Download this setup file and run it on your cloud service provider account.":
      ". Téléchargez ce fichier de configuration et exécutez-le dans le compte de votre fournisseur de services cloud.",
    "Modify by Folder/Project": "Modifier par dossier/projet",
    "Project Id": "ID du projet",
    "Project Name": "Nom du projet",
    "Project Type": "Type de projet",
    "Update and Resolve": "Mettre à jour et résoudre",
    "Manually connect an instance": "Connecter manuellement une instance",
    "View Details": "Afficher les détails",
    "Re-download Connection Template": "Retélécharger le modèle de connexion",
    "1. To create the service principal, you must have the Entra ID Cloud Application Administrator role (or higher) in the Azure tenant you are onboarding.":
      "1. Pour créer le principal de service, vous devez disposer du rôle Entra ID Cloud Application Administrator (ou supérieur) dans le tenant Azure que vous intégrez.",
    "2. Open Azure Cloud Shell in the tenant you are onboarding, or open a local terminal with the Azure CLI installed, and log in to the target tenant before executing the command below.":
      "2. Ouvrez Azure Cloud Shell dans le tenant que vous intégrez, ou ouvrez un terminal local sur lequel Azure CLI est installé, et connectez-vous au tenant cible avant d'exécuter la commande ci-dessous.",
    "3. Run the following command:": "3. Exécutez la commande suivante :",
    "4. Verify the service principal was created": "4. Vérifiez que le principal de service a été créé",
    "Collect Audit Logs (Event Hub)": "Collecter les journaux d'audit (Event Hub)",
    "Create Cortex service principal": "Créer le principal de service Cortex",
    "This service principal is Cortex's primary runtime identity in your tenant. Cortex uses it to read your Azure resources and to perform actions for the capabilities you enable. When you enter your Azure tenant ID, Cortex checks if the service principal already exists. If it is not found, follow the steps below.":
      "Ce principal de service est l'identité d'exécution principale de Cortex dans votre tenant. Cortex l'utilise pour lire vos ressources Azure et effectuer des actions pour les fonctionnalités que vous activez. Lorsque vous saisissez l'ID de votre tenant Azure, Cortex vérifie si le principal de service existe déjà. S'il est introuvable, suivez les étapes ci-dessous.",
    "Define scope of scans by including/excluding Management Groups, Subscriptions or Regions":
      "Définissez la portée des analyses en incluant/excluant des groupes d'administration, des abonnements ou des régions",
    "Documentation": "Documentation",
    "For more information, see the": "Pour plus d'informations, consultez la",
    "To complete the process, execute the template in Azure": "Pour terminer le processus, exécutez le modèle dans Azure",
    "To configure flow log ingestion use": "Pour configurer l'ingestion des journaux de flux, utilisez",
    "Modify by Management Group/Subscription": "Modifier par groupe d'administration/abonnement",
    "Onboard Microsoft Entra ID only": "Intégrer uniquement Microsoft Entra ID",
    "Tenant": "Tenant",
    "Tenant ID": "ID du tenant",
    "All Outposts": "Tous les Outposts",
    "New Outpost": "Nouvel Outpost",
    "Outpost Account ID": "ID du compte Outpost",
    "Outpost Account Name": "Nom du compte Outpost",
    "Create AWS Outpost": "Créer un Outpost AWS",
    "Custom Outpost": "Outpost personnalisé",
    "Keep control of your network architecture. You provide the VPC and Subnets, and we’ll use Terraform to deploy the IAM roles, storage, and compute resources directly into your existing infrastructure.":
      "Gardez le contrôle de votre architecture réseau. Vous fournissez le VPC et les sous-réseaux, et nous utilisons Terraform pour déployer les rôles IAM, le stockage et les ressources de calcul directement dans votre infrastructure existante.",
    "Use a predefined script to deploy all roles and resources, as well as configurations, to a dedicated account owned by you.":
      "Utilisez un script prédéfini pour déployer tous les rôles et ressources, ainsi que les configurations, dans un compte dédié qui vous appartient.",
    "We are preparing your Amazon Web Services outpost account. Your next step is to create the connection to Amazon Web Services.":
      "Nous préparons votre compte Outpost Amazon Web Services. L'étape suivante consiste à créer la connexion à Amazon Web Services.",
    "Create GCP Outpost": "Créer un Outpost GCP",
    "Create Azure Outpost": "Créer un Outpost Azure",
    "We are preparing your Google Cloud Platform outpost account. Your next step is to create the connection to Google Cloud Platform.":
      "Nous préparons votre compte Outpost Google Cloud Platform. L'étape suivante consiste à créer la connexion à Google Cloud Platform.",
    "We are preparing your Microsoft Azure outpost account. Your next step is to create the connection to Microsoft Azure.":
      "Nous préparons votre compte Outpost Microsoft Azure. L'étape suivante consiste à créer la connexion à Microsoft Azure.",
    "Recommended": "Recommandé",
    "Number of instances": "Nombre d'instances",
    "Partition": "Partition",
    "Features": "Fonctionnalités",
    "Select a dedicated account for the outpost (free from other resources)":
      "Sélectionnez un compte dédié pour l'Outpost (sans autres ressources)",
    "Onboard only one outpost for each account": "N'intégrez qu'un seul Outpost par compte",
    "The tenant ID format is valid, but we couldn't connect to the account because the required configuration is missing.":
      "Le format de l'ID de tenant est valide, mais nous n'avons pas pu nous connecter au compte, car la configuration requise est manquante.",
    "To maximize security coverage, include collection of audit logs (Event Hub). This may require additional cloud service provider permissions.":
      "Pour maximiser la couverture de sécurité, incluez la collecte des journaux d'audit (Event Hub). Cela peut nécessiter des autorisations supplémentaires du fournisseur de services cloud.",
    "Verify": "Vérifier",
    "Read more in documentation.": "En savoir plus dans la documentation.",
    "Select additional coverage. This may require additional actions in the respected cloud provider destination to establish trust.":
      "Sélectionnez une couverture supplémentaire. Des actions supplémentaires peuvent être nécessaires chez le fournisseur cloud de destination concerné pour établir la relation de confiance.",
    "Send samples to detonation in WildFire. Supported in Registry Scanning.":
      "Envoyer des échantillons pour détonation dans WildFire. Pris en charge dans l'analyse des registres.",
    "To maximize security coverage, include collection of audit logs (GCP Pub/Sub). This may require additional cloud service provider permissions.":
      "Pour maximiser la couverture de sécurité, incluez la collecte des journaux d'audit (GCP Pub/Sub). Cela peut nécessiter des autorisations supplémentaires du fournisseur de services cloud.",
    "Delete": "Supprimer",
    "If you delete it, running authentication templates of this pending instance will not create a valid instance, and will result in unused permissions.":
      "Si vous la supprimez, l'exécution des modèles d'authentification de cette instance en attente ne créera pas d'instance valide et laissera des autorisations inutilisées.",
    "confirm": "confirmer",

    // --- External Issues Mapping screen (vendor/product names are proper nouns, left in English) ---
    "Filter Rule": "Règle de filtrage",
    "Mapping Statistics": "Statistiques de mappage",
    "Rule Origin": "Origine de la règle",
    "Vendor Product": "Produit de l'éditeur",
    "( Mapping is disabled )": "( Le mappage est désactivé )",

    // --- Assistant de connexion de source de donnees (Google Workspace / Office 365 / descriptions des fournisseurs cloud / 3rd Party AppSec Collector / ANY.RUN) ---
    "About": "À propos",
    "Google Workspace productivity and collaboration suite integration for data security, identity monitoring, and compliance":
      "Intégration de la suite de productivité et de collaboration Google Workspace pour la sécurité des données, la surveillance des identités et la conformité",
    "Name and configure the instance capabilities": "Nommez et configurez les fonctionnalités de l'instance",
    "Enter a unique name for this instance": "Saisissez un nom unique pour cette instance",
    "Select Recommended to use the suggested authentication method for all selected capabilities. Select Advanced to configure your preferred authentication methods separately for each capability":
      "Sélectionnez Recommandé pour utiliser la méthode d'authentification suggérée pour toutes les fonctionnalités sélectionnées. Sélectionnez Avancé pour configurer vos méthodes d'authentification préférées séparément pour chaque fonctionnalité",
    "Enable Office 365 Log Collection": "Activer la collecte des journaux Office 365",
    "tenant domain": "domaine du tenant",
    "Enter domain name": "Saisissez le nom de domaine",
    "application client id": "ID client de l'application",
    "Enter the application client ID": "Saisissez l'ID client de l'application",
    "Enter client secret": "Saisissez le secret client",
    "Scan and protect Salesforce data including files, attachments, and records":
      "Analysez et protégez les données Salesforce, y compris les fichiers, les pièces jointes et les enregistrements",
    "Automate identity lifecycle management including user provisioning, updates, and access control":
      "Automatisez la gestion du cycle de vie des identités, y compris le provisionnement des utilisateurs, les mises à jour et le contrôle d'accès",
    "Maintain visibility and control over SaaS-based identities, including users, groups, roles, and granular permissions.":
      "Conservez une visibilité et un contrôle sur les identités basées sur le SaaS, y compris les utilisateurs, les groupes, les rôles et les autorisations détaillées.",
    "Find your domain: Copy the URL from your browser's address bar while logged into Salesforce.":
      "Trouver votre domaine : copiez l'URL depuis la barre d'adresse de votre navigateur pendant que vous êtes connecté à Salesforce.",
    "Domain URL": "URL du domaine",
    "Exiting now will discard all changes. This action cannot be undone.":
      "Si vous quittez maintenant, toutes les modifications seront annulées. Cette action est irréversible.",
    "Exit": "Quitter",
    "Collect logs and data from Alibaba Cloud, a leading cloud computing platform.":
      "Collectez les journaux et les données d'Alibaba Cloud, une plateforme de cloud computing de premier plan.",
    "Collect logs and data from Amazon Web Services (AWS).": "Collectez les journaux et les données d'Amazon Web Services (AWS).",
    "Collect logs and data from Google Cloud Platform (GCP).": "Collectez les journaux et les données de Google Cloud Platform (GCP).",
    "Kubernetes automates deployment, scaling, and management of containerized apps. Connect your clusters by deploying Cortex connectors.":
      "Kubernetes automatise le déploiement, la mise à l'échelle et la gestion des applications conteneurisées. Connectez vos clusters en déployant des connecteurs Cortex.",
    "Collect logs and data from Azure, Microsoft’s cloud computing platform.":
      "Collectez les journaux et les données d'Azure, la plateforme de cloud computing de Microsoft.",
    "Collects logs and data from Office 365 Management Activity API and Microsoft Graph API.":
      "Collecte les journaux et les données via l'API Office 365 Management Activity et l'API Microsoft Graph.",
    "Collect logs and data from OCI, Oracle’s cloud infrastructure platform.":
      "Collectez les journaux et les données d'OCI, la plateforme d'infrastructure cloud d'Oracle.",
    "Salesforce CRM services for data security, identity management, automation, remediation and SaaS Posture Security":
      "Services CRM Salesforce pour la sécurité des données, la gestion des identités, l'automatisation, la remédiation et la sécurité de la posture SaaS",
    "3rd Party AppSec Collector": "Collecteur AppSec tiers",
    "Name your collector": "Nommez votre collecteur",
    "Test file (optional)": "Fichier de test (facultatif)",
    "Create your 3rd Party AppSec Collector": "Créez votre collecteur AppSec tiers",
    "Ingest SARIF output third-party AppSec tools and unify all scan in one central view (applicable for SAST findings)":
      "Ingérez la sortie SARIF d'outils AppSec tiers et unifiez toutes les analyses dans une vue centrale (applicable aux résultats SAST)",
    "What do you need to do": "Ce que vous devez faire",
    "Name your collector instance.": "Nommez l'instance de votre collecteur.",
    "Generate an API key and integrate the provided API key and URL into your chosen process.":
      "Générez une clé API et intégrez la clé API et l'URL fournies dans le processus de votre choix.",
    "(Optional) Test your SARIF file.": "(Facultatif) Testez votre fichier SARIF.",
    "Use a clear, descriptive name to identify this collector easily.":
      "Utilisez un nom clair et descriptif pour identifier facilement ce collecteur.",
    "Generate Your Secure Ingestion API Key": "Générez votre clé API d'ingestion sécurisée",
    "Generate an API key to securely send SARIF results to your collector.":
      "Générez une clé API pour envoyer en toute sécurité les résultats SARIF à votre collecteur.",
    "Deprecated. Use ANY.RUN TI Feeds, ANY.RUN TI Lookup, ANY.RUN Cloud Sandbox instead.":
      "Obsolète. Utilisez à la place ANY.RUN TI Feeds, ANY.RUN TI Lookup ou ANY.RUN Cloud Sandbox.",
    "Server URL": "URL du serveur",
    "Partner Contributed Integration": "Intégration fournie par un partenaire",
    "Support and maintenance for this integration are provided by the author. Please use the following contact details:":
      "Le support et la maintenance de cette intégration sont assurés par l'auteur. Veuillez utiliser les coordonnées suivantes :",
    "How to configure": "Comment configurer",
    // NOTE: The 5 "How to configure" steps below render each UI term (Settings, Integrations, Add instance,
    // Username, Password, Test) as its own <strong> element, splitting each step's sentence into several text
    // nodes. A single flat-sentence dictionary entry can never match that (translateText() only ever sees one
    // leaf text node at a time), so each step is instead translated fragment-by-fragment here, relying on the
    // already-existing standalone translations of those bolded terms to fill in the bolded parts. The
    // resulting sentences are necessarily a bit more literal than a hand-written translation (DOM order can't
    // be rearranged to match natural word order), but they are fully localized with no English left over.
    "Navigate to": "Accédez à",
    // NOTE: the vendor's actual name includes the period ("ANY.RUN"), confirmed from the live page's DOM — a
    // version of this key without the period ("ANYRUN") was tried first based on a hand-copied description and
    // never matched.
    "Search for ANY.RUN.": "Recherchez ANY.RUN.",
    "to create and configure a new integration instance.": "pour créer et configurer une nouvelle instance d'intégration.",
    "If using API Key authentication method, insert the text": "Si vous utilisez la méthode d'authentification par clé API, insérez le texte",
    "into the": "dans le",
    "parameter and the API key you have into the": "paramètre, et la clé API que vous possédez dans le",
    "to validate the URLs, token, and connection.": "pour valider les URL, le token et la connexion.",
    // ANY.RUN's actual steps 4-5 ("Insert ANY.RUN API-KEY into the <strong>Password</strong> parameter." /
    // "Please use "ANY.RUN" as username.") turned out to be simpler than the generic Username+Password
    // instructions above — those apply to some other connector's wizard, not this one. Step 5 has no bolded
    // term, so it's a normal flat-sentence entry; step 4 still needs the fragment treatment since "Password" is
    // bolded.
    "Insert ANY.RUN API-KEY into the": "Insérez la clé API ANY.RUN dans le",
    // Generic/short fragment, paired specifically with "Insert ANY.RUN API-KEY into the" above. If a future
    // addition elsewhere needs "parameter." with different phrasing, split this out to a more specific key.
    "parameter.": "paramètre.",
    "Please use “ANY.RUN” as username.": "Veuillez utiliser « ANY.RUN » comme nom d'utilisateur.",
    "View Integration Documentation": "Afficher la documentation de l'intégration",
    "Select Content": "Sélectionner le contenu",
    "The selected items will automatically be set up. You can add or edit these items later on.":
      "Les éléments sélectionnés seront configurés automatiquement. Vous pourrez les ajouter ou les modifier ultérieurement.",
    "Customize": "Personnaliser",
    "Connecting this data source will automatically install and update any required dependencies.":
      "La connexion de cette source de données installera et mettra à jour automatiquement toutes les dépendances requises.",
    "Required Dependencies:": "Dépendances requises :",

    // --- Additional wording for the ANY.RUN / Generic AppSec collector wizard pages ---
    "Generic AppSec collector to ingest code scan data": "Collecteur AppSec générique pour ingérer les données d'analyse de code",
    "ANY.RUN Sandbox is an online interactive sandbox for malware analysis, a tool for detection, monitoring, and research of cyber threats in real time.":
      "ANY.RUN Sandbox est une sandbox interactive en ligne pour l'analyse de malwares, un outil de détection, de surveillance et de recherche des cybermenaces en temps réel.",
    "New Data Source": "Nouvelle source de données",
    "Root URL": "URL racine",
    "This section explains how to configure the instance of ANY.RUN Cloud Sandbox in Cortex.":
      "Cette section explique comment configurer l'instance d'ANY.RUN Cloud Sandbox dans Cortex.",
    "API-KEY from your ANY.RUN account is required.": "La clé API de votre compte ANY.RUN est requise.",

    // --- ARIA Packet Intelligence (partner-contributed integration) instance setup page ---
    "The ARIA Cybesecurity Solutions Software-Defined Security (SDS) platform integrates with Cortex to add robustness when responding to incidents. The combination of ARIA hardware, in the form of a Secure Intelligent Adapter (SIA), and software, specifically Packet Intelligence and SDS orchestrator (SDSo), provides the elements required to react instantly when an incident is detected. When integrated with the ARIA solution, you can create playbooks that instruct one or more SIAs to add, modify, or delete rules automatically. These rule changes, which take effect immediately, can block conversations, redirect packets to a recorder or VLAN, or perform a variety of other actions.":
      "La plateforme Software-Defined Security (SDS) d'ARIA Cybersecurity Solutions s'intègre à Cortex pour renforcer la robustesse de la réponse aux incidents. L'association du matériel ARIA, sous la forme d'un Secure Intelligent Adapter (SIA), et du logiciel, en particulier Packet Intelligence et l'orchestrateur SDS (SDSo), fournit les éléments nécessaires pour réagir instantanément lorsqu'un incident est détecté. Une fois intégrée à la solution ARIA, vous pouvez créer des Playbooks qui demandent à un ou plusieurs SIA d'ajouter, de modifier ou de supprimer automatiquement des règles. Ces modifications de règles, qui prennent effet immédiatement, peuvent bloquer des conversations, rediriger des paquets vers un enregistreur ou un VLAN, ou effectuer diverses autres actions.",
    "Name should be unique, this name is taken":
      "Le nom doit être unique, ce nom est déjà utilisé",
    "SDSo Base URL (e.g. http://<IP address or FQDN of SDSo Node>:7443)":
      "URL de base SDSo (p. ex. http://<IP address or FQDN of SDSo Node>:7443)",
    "Single engine:":
      "Moteur unique :",
    "Users should install SDSo onto a server according to the instructions in Software-Defined Security Installation Guide. During the installation process you can determine the IP address or FQDN of your SDSo instance which is used in the SDSo Base URL. You should also install an SIA according to the Secure Intelligent Adapter Installation Guide. For more information on connecting an SDSo and SIA see the Software-Defined Security Orchestrator User Guide. In addition, you must deploy the PI security service to your SIA, see the Packet Intelligence User Guide for more information.":
      "Les utilisateurs doivent installer SDSo sur un serveur en suivant les instructions du Software-Defined Security Installation Guide. Pendant l'installation, vous pouvez déterminer l'adresse IP ou le FQDN de votre instance SDSo, qui est utilisé dans l'URL de base SDSo. Vous devez également installer un SIA en suivant le Secure Intelligent Adapter Installation Guide. Pour plus d'informations sur la connexion d'un SDSo et d'un SIA, consultez le Software-Defined Security Orchestrator User Guide. Vous devez en outre déployer le service de sécurité PI sur votre SIA ; consultez le Packet Intelligence User Guide pour plus d'informations.",
    "No recommendations are available":
      "Aucune recommandation disponible",

    // --- AWS - EC2 integration instance setup page ---
    // NOTE: the trailing link text "AWS Integrations - Authentication" is a doc title and is intentionally left in English.
    "Amazon Web Services Elastic Compute Cloud (EC2).":
      "Amazon Web Services Elastic Compute Cloud (EC2).",
    "Switch to credentials":
      "Passer aux identifiants",
    "Secret Key":
      "Clé secrète",
    "AWS STS Regional Endpoints":
      "Points de terminaison régionaux AWS STS",
    "Before you can use AWS EC2, you need to perform several configuration steps in your AWS environment.":
      "Avant de pouvoir utiliser AWS EC2, vous devez effectuer plusieurs étapes de configuration dans votre environnement AWS.",
    "Prerequisites":
      "Prérequis",
    "Attach an instance profile with the required permissions to the Cortex server or engine that is running on your AWS environment.":
      "Associez un profil d'instance disposant des autorisations requises au serveur ou au moteur Cortex exécuté dans votre environnement AWS.",
    "Instance profile requires minimum permission: sts:AssumeRole.":
      "Le profil d'instance nécessite l'autorisation minimale : sts:AssumeRole.",
    "Instance profile requires permission to assume the roles needed by the AWS integrations.":
      "Le profil d'instance nécessite l'autorisation d'assumer les rôles requis par les intégrations AWS.",
    "Configure AWS Settings":
      "Configurer les paramètres AWS",
    "Create an IAM Role for the Instance Profile.":
      "Créez un rôle IAM pour le profil d'instance.",
    "Attach a Role to the Instance Profile.":
      "Associez un rôle au profil d'instance.",
    "Configure the Necessary IAM Roles that the AWS Integration Can Assume.":
      "Configurez les rôles IAM nécessaires que l'intégration AWS peut assumer.",
    "For detailed instructions, see the":
      "Pour des instructions détaillées, consultez",

    // --- AWS - IAM (user lifecycle management) integration instance setup page ---
    "Integrate with AWS's services to execute CRUD and Group operations for employee lifecycle processes.":
      "S'intègre aux services AWS pour exécuter des opérations CRUD et de groupe dans les processus de cycle de vie des employés.",
    "Base URL":
      "URL de base",
    "Authentication Token":
      "Jeton d'authentification",
    "Allow creating users":
      "Autoriser la création d'utilisateurs",
    "Allow updating users":
      "Autoriser la mise à jour des utilisateurs",
    "Allow enabling users":
      "Autoriser l'activation des utilisateurs",
    "Allow disabling users":
      "Autoriser la désactivation des utilisateurs",
    "Automatically create user if not found in update command":
      "Créer automatiquement l'utilisateur s'il est introuvable dans la commande de mise à jour",
    "Incoming Mapper":
      "Mappeur entrant",

    // --- AWS - Identity and Access Management integration instance setup page ---
    "Amazon Web Services Identity and Access Management (IAM).":
      "Amazon Web Services Identity and Access Management (IAM).",
    "Role Session Name":
      "Nom de session du rôle",

    // --- AWS CodeBuild data-source wizard (Step 1: Add Environment Variables) ---
    "Add Environment Variables":
      "Ajouter des variables d'environnement",
    "Configure Subscription":
      "Configurer l'abonnement",
    "Before you begin, you'll need to add your API key and API ID to your AWS Secrets Manager. Please copy and use the secret names suggested below as the secret keys. If needed, you can generate a new token using the link below, copy and use the generated values as your secrets values.":
      "Avant de commencer, vous devez ajouter votre clé API et votre ID d'API à AWS Secrets Manager. Copiez et utilisez les noms de secrets suggérés ci-dessous comme clés de secrets. Si nécessaire, vous pouvez générer un nouveau jeton à l'aide du lien ci-dessous, puis copier et utiliser les valeurs générées comme valeurs de vos secrets.",
    "Create the following secrets on your AWS Secrets Manager. Ensure that the IAM service role associated with your CodeBuild project has the necessary permissions to read the Cortex API key and key ID from AWS Secrets Manager.":
      "Créez les secrets suivants dans AWS Secrets Manager. Assurez-vous que le rôle de service IAM associé à votre projet CodeBuild dispose des autorisations nécessaires pour lire la clé API Cortex et l'ID de clé depuis AWS Secrets Manager.",
    "Choose the architecture your CI tool runs on:":
      "Choisissez l'architecture sur laquelle s'exécute votre outil de CI :",
    "Select architecture":
      "Sélectionner l'architecture",

    // --- AWS CodeCommit data-source wizard ---
    // NOTE: the steps below are split by <b>/<button> into several text nodes, so each sentence is translated
    // fragment-by-fragment (DOM order is fixed). AWS console labels / CloudFormation parameter names inside the
    // bold elements (e.g. "CloudFormation > Stacks", "Resource Name Prefix:", "Select Repositories") are left in English.
    "This integration enables you to effectively detect, analyze and remediate security issues.":
      "Cette intégration vous permet de détecter, d'analyser et de corriger efficacement les problèmes de sécurité.",
    "Download the":
      "Téléchargez le",
    "CloudFormation template":
      "modèle CloudFormation",
    ", alternatively, copy the link and send it to your administrator for the next steps.":
      ", ou copiez le lien et envoyez-le à votre administrateur pour les étapes suivantes.",
    "In your AWS console, navigate to":
      "Dans votre console AWS, accédez à",
    "Click on":
      "puis cliquez sur",
    ". Upload the template file and hit next. Provide the stack name. Note that the following parameters will be pre populated:":
      ". Importez le fichier de modèle et cliquez sur Next. Indiquez le nom de la pile. Notez que les paramètres suivants seront préremplis :",
    "You can modify the default value.":
      "Vous pouvez modifier la valeur par défaut.",
    "DO NOT change this ID.":
      "NE modifiez PAS cet ID.",
    "After the stack is created, navigate to":
      "Une fois la pile créée, accédez à",
    ", and verify that the integration is displayed.":
      ", et vérifiez que l'intégration s'affiche.",
    "Select Repositories: In the":
      "Sélectionner les dépôts : dans le menu",
    "menu choose":
      "puis choisissez",
    "to complete the integration.":
      "pour terminer l'intégration.",

    // --- AbuseIPDB integration instance setup page ---
    // NOTE: the "A+ ... F" source-reliability scale is the standard option list of the "Source Reliability" dropdown shared by many integrations.
    "Central repository to report and identify IP addresses that have been associated with malicious activity online. Check the Detailed Information section for more information on how to configure the integration.":
      "Référentiel central permettant de signaler et d'identifier les adresses IP associées à une activité malveillante en ligne. Consultez la section Informations détaillées pour plus d'informations sur la configuration de l'intégration.",
    "AbuseIP server URL":
      "URL du serveur AbuseIP",
    "API Key (v2)":
      "Clé API (v2)",
    "Abuse.ch Hunting API URL":
      "URL de l'API Hunting d'Abuse.ch",
    "Abuse.ch Hunting API Key":
      "Clé de l'API Hunting d'Abuse.ch",
    "Collect":
      "Collecter",
    "Source Reliability":
      "Fiabilité de la source",
    "A+ - 3rd party enrichment":
      "A+ - Enrichissement par un tiers",
    "A - Completely reliable":
      "A - Totalement fiable",
    "B - Usually reliable":
      "B - Généralement fiable",
    "C - Fairly reliable":
      "C - Assez fiable",
    "D - Not usually reliable":
      "D - Généralement peu fiable",
    "E - Unreliable":
      "E - Non fiable",
    "F - Reliability cannot be judged":
      "F - Fiabilité impossible à évaluer",
    "Disable reputation lookups for private IP addresses":
      "Désactiver les recherches de réputation pour les adresses IP privées",
    "Minimum score threshold":
      "Seuil de score minimal",
    "Minimum score from AbuseIPDB for the IP to be considered malicious. (Must be above 20).":
      "Score minimal d'AbuseIPDB pour que l'IP soit considérée comme malveillante. (Doit être supérieur à 20).",
    "Searching an entire subnet far back in time (e.g. Days=365) will likely cause a server timeout, and you will receive a 500 Internal Server Error response from AbuseIPDB server.":
      "La recherche sur un sous-réseau entier très loin dans le passé (par ex. Days=365) provoquera probablement un délai d'attente du serveur, et vous recevrez une réponse 500 Internal Server Error du serveur AbuseIPDB.",
    "Report Categories":
      "Catégories de signalement",
    "Selected items were set up on first connection. You can change these items via the original pages.":
      "Les éléments sélectionnés ont été configurés lors de la première connexion. Vous pouvez modifier ces éléments depuis les pages d'origine.",

    // --- Active Directory Query (deprecated) integration instance setup page ---
    "Deprecated. Use the Active Directory Query v2 integration instead.":
      "Obsolète. Utilisez plutôt l'intégration Active Directory Query v2.",
    "Server IP (e.g. 192.168.0.1)":
      "IP du serveur (par ex. 192.168.0.1)",
    "Base DN (e.g. DC=domain,DC=com)":
      "DN de base (par ex. DC=domain,DC=com)",
    "Security Type (none/ssl/tls)":
      "Type de sécurité (none/ssl/tls)",
    "Page Size":
      "Taille de page",
    "Do not validate server certificate (insecure)":
      "Ne pas valider le certificat du serveur (non sécurisé)",
    "Full path for CA certificate of Active Directory server (type pem)":
      "Chemin complet du certificat d'autorité de certification du serveur Active Directory (type pem)",
    "There are no additional instructions for this integration.":
      "Aucune instruction supplémentaire pour cette intégration.",

    // --- Active Directory Query v2 integration instance setup page ---
    "The Active Directory Query integration enables you to access and manage Active Directory objects (users, contacts, and computers).":
      "L'intégration Active Directory Query vous permet d'accéder aux objets Active Directory (utilisateurs, contacts et ordinateurs) et de les gérer.",
    "Server IP address (for example, 192.168.0.1)":
      "Adresse IP du serveur (par exemple, 192.168.0.1)",
    "Base DN (for example \"dc=company,dc=com\")":
      "DN de base (par exemple « dc=company,dc=com »)",
    "Secure Connection":
      "Connexion sécurisée",
    "Outgoing Mapper":
      "Mappeur sortant",
    "Group CN for terminated employees":
      "CN du groupe pour les employés partis",
    "Active Directory search uses paging. You set the page size by specifying the ‘page size’ parameter in the instance settings.":
      "La recherche Active Directory utilise la pagination. Vous définissez la taille de page en spécifiant le paramètre « Taille de page » dans les paramètres de l'instance.",

    // --- Agari Phishing Defense (Partner Contribution) integration instance setup page ---
    // NOTE: the docs sentences are split by inline links into several text nodes, so they are translated
    // fragment-by-fragment ("Quick Start", "this", "page." etc. are link texts / sentence tails).
    "Agari Phishing Defense stops phishing, BEC, and other identity deception attacks that trick employees into harming your business.":
      "Agari Phishing Defense bloque le phishing, la compromission de messagerie professionnelle (BEC) et les autres attaques d'usurpation d'identité qui incitent les employés à nuire à votre entreprise.",
    "URL to connect to Agari":
      "URL de connexion à Agari",
    "API Key":
      "Clé API",
    "Fetches issues":
      "Récupère les problèmes",
    "Maximum number of incidents to fetch every time":
      "Nombre maximal d'incidents à récupérer à chaque fois",
    "First fetch time interval":
      "Intervalle de temps de la première récupération",
    "Policy action taken":
      "Action de politique effectuée",
    "Exclude alerts":
      "Exclure les alertes",
    "System Alert":
      "Alerte système",
    "Fetches policy events as per the filter to limit the amount of data. Can be applied to specific fields.":
      "Récupère les événements de politique selon le filtre afin de limiter la quantité de données. Peut être appliqué à des champs spécifiques.",
    "To use this integration, simply follow the":
      "Pour utiliser cette intégration, suivez simplement les étapes de",
    "Quick Start":
      "démarrage rapide",
    "steps to enable API access.":
      "pour activer l'accès à l'API.",
    "Contact us":
      "Contactez-nous",
    "if you don’t have an Agari account.":
      "si vous n'avez pas de compte Agari.",
    "Syntax to filter policy events":
      "Syntaxe pour filtrer les événements de politique",
    "To filter by applying the valid syntax you can refer to":
      "Pour filtrer en appliquant la syntaxe valide, vous pouvez consulter",
    "this":
      "cette",
    "page.":
      "page.",

    // --- Akamai WAF integration instance setup page ---
    // NOTE: the link text "Akamai Control Panel" (product console name) is intentionally left in English.
    "Use the Akamai WAF integration to manage common sets of lists used by various Akamai security products and features. This is the modified version where a new command \"akamai-update-network-list-elements\" was added by the SA.":
      "Utilisez l'intégration Akamai WAF pour gérer des ensembles communs de listes utilisés par divers produits et fonctionnalités de sécurité Akamai. Il s'agit de la version modifiée dans laquelle une nouvelle commande « akamai-update-network-list-elements » a été ajoutée par le SA.",
    "Server URL (e.g., https://example.net)":
      "URL du serveur (par ex. https://example.net)",
    "Client token":
      "Jeton client",
    "Access token":
      "Jeton d'accès",
    "Client secret":
      "Secret client",
    "The Network Lists API enables you to manage a common set of lists for use in various Akamai security products such as Kona Site Defender, Web App Protector, and Bot Manager. Network lists are shared sets of IP addresses, CIDR blocks, or broad geographic areas. In addition to managing your own lists, you can also access read-only lists that Akamai dynamically updates for you.":
      "L'API Network Lists vous permet de gérer un ensemble commun de listes destinées à être utilisées dans divers produits de sécurité Akamai tels que Kona Site Defender, Web App Protector et Bot Manager. Les listes réseau sont des ensembles partagés d'adresses IP, de blocs CIDR ou de vastes zones géographiques. En plus de gérer vos propres listes, vous pouvez également accéder à des listes en lecture seule qu'Akamai met à jour dynamiquement pour vous.",
    "To generate API keys go to the":
      "Pour générer des clés API, accédez à",
    ". For detailed instructions, see the integration documention.":
      ". Pour des instructions détaillées, consultez la documentation de l'intégration.",

    // --- Analyst1 (Partner Contribution) integration instance setup page ---
    // NOTE: the docs lists/sentences are split by <b>/<code> into several text nodes, so they are translated
    // fragment-by-fragment. The lone connectors "and" / "or" / "to" between bold items are intentionally NOT registered
    // (too generic: they would also hit AND/OR/To labels elsewhere via the case-insensitive fallback) and stay in English.
    "This integration utilizes Analyst1's system to enrich XSOAR indicators with data provided by the Analyst1 REST API, such as actor and malware information, activity and reported dates, evidence and hit counts, and more.":
      "Cette intégration utilise le système d'Analyst1 pour enrichir les indicateurs XSOAR avec les données fournies par l'API REST d'Analyst1, telles que les informations sur les acteurs et les malwares, les dates d'activité et de signalement, les preuves et le nombre de détections, et bien plus encore.",
    "Basic Authentication":
      "Authentification de base",
    "Client ID/Username":
      "ID client/Nom d'utilisateur",
    "Client Secret/Password":
      "Secret client/Mot de passe",
    "Domain of Analyst1 server to use":
      "Domaine du serveur Analyst1 à utiliser",
    "Log Level:":
      "Niveau de journalisation :",
    "Off":
      "Désactivé",
    "Do not use in CLI by default":
      "Ne pas utiliser dans la CLI par défaut",
    "Risk Score Mapping: Lowest":
      "Mappage du score de risque : Le plus bas",
    "Benign":
      "Bénin",
    "Risk Score Mapping: Low":
      "Mappage du score de risque : Faible",
    "Risk Score Mapping: Moderate":
      "Mappage du score de risque : Moyen",
    "Suspicious":
      "Suspect",
    "Risk Score Mapping: High":
      "Mappage du score de risque : Élevé",
    "Risk Score Mapping: Critical":
      "Mappage du score de risque : Critique",
    "Risk Score Mapping: Unknown":
      "Mappage du score de risque : Inconnu",
    "Apply Analyst1 entity-type tags to indicators":
      "Appliquer les étiquettes de type d'entité Analyst1 aux indicateurs",
    "Indicator Expiration Method":
      "Méthode d'expiration des indicateurs",
    "Indicator Type":
      "Type d'indicateur",
    "Analyst1 Integration Configuration":
      "Configuration de l'intégration Analyst1",
    "This integration connects XSOAR to the Analyst1 threat intelligence platform to enrich indicators and manage sensor taskings.":
      "Cette intégration connecte XSOAR à la plateforme de renseignement sur les menaces Analyst1 pour enrichir les indicateurs et gérer les tâches de capteurs.",
    "Configuration Parameters":
      "Paramètres de configuration",
    "Server Configuration":
      "Configuration du serveur",
    "Domain of Analyst1 server":
      "Domaine du serveur Analyst1",
    ": Enter your Analyst1 server domain in the format":
      ": saisissez le domaine de votre serveur Analyst1 au format",
    "Do not include":
      "N'incluez pas",
    "This integration supports two authentication methods. Select one via the":
      "Cette intégration prend en charge deux méthodes d'authentification. Sélectionnez-en une via le champ",
    "dropdown.":
      "(liste déroulante).",
    "Basic Authentication (default)":
      "Authentification de base (par défaut)",
    "Enter the":
      "Saisissez",
    "for an Analyst1 account that has the REST role assigned.":
      "d'un compte Analyst1 auquel le rôle REST est attribué.",
    "In Analyst1, create (or open) an API Key.":
      "Dans Analyst1, créez (ou ouvrez) une clé API.",
    "Copy the":
      "Copiez",
    "Client ID":
      "ID client",
    "from the API Key.":
      "depuis la clé API.",
    "In XSOAR, set":
      "Dans XSOAR, définissez",
    "Enter the Client ID in the":
      "Saisissez l'ID client dans",
    "field and the Client Secret in the":
      "et le secret client dans",
    "field.":
      "(champs).",
    "Risk Score Mapping (Optional)":
      "Mappage du score de risque (facultatif)",
    "The integration includes configurable risk score mapping parameters that control how Analyst1 risk scores map to XSOAR verdicts:":
      "L'intégration inclut des paramètres configurables de mappage du score de risque qui déterminent la façon dont les scores de risque Analyst1 sont mappés aux verdicts XSOAR :",
    "Lowest":
      "Le plus bas",
    ": Default mapping is Benign":
      ": Le mappage par défaut est Bénin",
    ": Default mapping is Unknown":
      ": Le mappage par défaut est Inconnu",
    "Moderate":
      "Modéré",
    ": Default mapping is Suspicious":
      ": Le mappage par défaut est Suspect",
    ": Default mapping is Malicious":
      ": Le mappage par défaut est Malveillant",
    "These can be customized based on your organization’s risk tolerance and threat response procedures.":
      "Ces paramètres peuvent être personnalisés en fonction de la tolérance au risque de votre organisation et de ses procédures de réponse aux menaces.",
    "Entity Type Tags (Optional)":
      "Étiquettes de type d'entité (facultatif)",
    "Enable “Apply Analyst1 entity-type tags to indicators” to automatically tag indicators with Analyst1 entity classifications such as:":
      "Activez « Appliquer les étiquettes de type d'entité Analyst1 aux indicateurs » pour étiqueter automatiquement les indicateurs avec des classifications d'entités Analyst1 telles que :",
    "For assistance with this integration, contact Analyst1 support:":
      "Pour obtenir de l'aide concernant cette intégration, contactez le support Analyst1 :",

    // --- Anomali Security Analytics Alerts (Partner Contribution) integration instance setup page ---
    // NOTE: the product title, support email and URL are intentionally left in English.
    "The Anomali Security Analytics pack allows users to manage security alerts by interacting directly with the Anomali Security Analytics platform. It supports creating search jobs, monitoring their status, retrieving results, and updating alert statuses or comments, streamlining integration with Palo Alto XSOAR.":
      "Le pack Anomali Security Analytics permet aux utilisateurs de gérer les alertes de sécurité en interagissant directement avec la plateforme Anomali Security Analytics. Il prend en charge la création de tâches de recherche, la surveillance de leur statut, la récupération des résultats et la mise à jour des statuts ou des commentaires des alertes, ce qui simplifie l'intégration avec Palo Alto XSOAR.",
    "Switch to username and password":
      "Passer au nom d'utilisateur et au mot de passe",
    "(Username, API Key)":
      "(Nom d'utilisateur, clé API)",
    "No credentials":
      "Aucun identifiant",
    "Fetch query":
      "Requête de récupération",
    "Maximum incidents to fetch.":
      "Nombre maximal d'incidents à récupérer.",
    "First fetch time":
      "Heure de la première récupération",
    "Incidents Fetch Interval":
      "Intervalle de récupération des incidents",
    "To access Anomali Security Analysis Alerts using the API, you must obtain an API key from your Anomali Security Analytics account. Please refer to the Anomali documentation or contact your administrator to get the API credentials. Once obtained, configure the integration by entering the API key in the integration setup page.":
      "Pour accéder à Anomali Security Analysis Alerts via l'API, vous devez obtenir une clé API depuis votre compte Anomali Security Analytics. Consultez la documentation d'Anomali ou contactez votre administrateur pour obtenir les identifiants d'API. Une fois la clé obtenue, configurez l'intégration en saisissant la clé API dans la page de configuration de l'intégration.",

    // --- Anomali ThreatStream (Deprecated) integration instance setup page ---
    // NOTE: the product title is intentionally left in English.
    "Deprecated. Use Anomali ThreatStream v3 instead. Use Anomali ThreatStream to query and submit threats":
      "Obsolète. Utilisez plutôt Anomali ThreatStream v3. Utilisez Anomali ThreatStream pour interroger et soumettre des menaces",
    "Server URL (e.g. https://192.168.0.1)":
      "URL du serveur (par ex. https://192.168.0.1)",

    // --- Anomali ThreatStream Feed integration instance setup page ---
    // NOTE: the product title and the doc URL are intentionally left in English. The last key is the text node before the
    // <a> link ("register at <link>."), so its translation has no trailing punctuation (the "." after the link is a separate node).
    "Use the Anomali ThreatStream Feed Integration to fetch indicators from the Anomali ThreatStream.":
      "Utilisez l'intégration Anomali ThreatStream Feed pour récupérer des indicateurs depuis Anomali ThreatStream.",
    "Server URL (e.g., https://www.test.com)":
      "URL du serveur (par ex., https://www.test.com)",
    "Fetches indicators":
      "Récupère les indicateurs",
    "Classifier":
      "Classificateur",
    "Mapper (incoming)":
      "Mappeur (entrant)",
    "Fetch by":
      "Récupérer par",
    "Modified Time":
      "Heure de modification",
    "Feed Fetch Interval":
      "Intervalle de récupération du flux",
    "Anomali ThreatStream Feed Integration Help":
      "Aide de l'intégration Anomali ThreatStream Feed",
    "Anomali ThreatStream is a leading threat intelligence platform designed to help organizations collect, analyze, and act on vast amounts of threat data. This integration allows you to automatically fetch Indicators of Compromise (IOCs) such as IPs, domains, URLs, and file hashes directly into your security operations platform, enhancing your ability to detect and respond to cyber threats.":
      "Anomali ThreatStream est une plateforme de renseignement sur les menaces de premier plan, conçue pour aider les organisations à collecter, analyser et exploiter de vastes volumes de données sur les menaces. Cette intégration vous permet de récupérer automatiquement des indicateurs de compromission (IOC) tels que des adresses IP, des domaines, des URL et des hachages de fichiers directement dans votre plateforme d'opérations de sécurité, ce qui améliore votre capacité à détecter les cybermenaces et à y répondre.",
    "How to Configure Your Integration":
      "Comment configurer votre intégration",
    "API Key: Paste the API key you retrieved from your Anomali ThreatStream account into this field. To access ThreatStream using the API, you need a user ID and API key. To get these credentials, register at":
      "Clé API : collez dans ce champ la clé API que vous avez obtenue depuis votre compte Anomali ThreatStream. Pour accéder à ThreatStream via l'API, vous avez besoin d'un ID utilisateur et d'une clé API. Pour obtenir ces identifiants, inscrivez-vous sur",

    // --- Anomali ThreatStream Feed: additions (per-sentence halves of the two docs paragraphs, in case the paragraph is split
    // into separate text nodes at the line break; plus title/data-tooltip attribute strings: tooltips, "Go to ..." button, clear icon) ---
    "Anomali ThreatStream is a leading threat intelligence platform designed to help organizations collect, analyze, and act on vast amounts of threat data.":
      "Anomali ThreatStream est une plateforme de renseignement sur les menaces de premier plan, conçue pour aider les organisations à collecter, analyser et exploiter de vastes volumes de données sur les menaces.",
    "This integration allows you to automatically fetch Indicators of Compromise (IOCs) such as IPs, domains, URLs, and file hashes directly into your security operations platform, enhancing your ability to detect and respond to cyber threats.":
      "Cette intégration vous permet de récupérer automatiquement des indicateurs de compromission (IOC) tels que des adresses IP, des domaines, des URL et des hachages de fichiers directement dans votre plateforme d'opérations de sécurité, ce qui améliore votre capacité à détecter les cybermenaces et à y répondre.",
    "API Key: Paste the API key you retrieved from your Anomali ThreatStream account into this field.":
      "Clé API : collez dans ce champ la clé API que vous avez obtenue depuis votre compte Anomali ThreatStream.",
    "To access ThreatStream using the API, you need a user ID and API key. To get these credentials, register at":
      "Pour accéder à ThreatStream via l'API, vous avez besoin d'un ID utilisateur et d'une clé API. Pour obtenir ces identifiants, inscrivez-vous sur",
    "Classifier determines the type of issue that is created for events ingested from this integration instance.":
      "Le classificateur détermine le type de problème créé pour les événements ingérés depuis cette instance d'intégration.",
    "Mapping determines how event fields are mapped to the Cortex CLOUD issue's fields.":
      "Le mappage détermine la manière dont les champs d'événement sont mappés aux champs du problème Cortex CLOUD.",
    "Go to Classification & Mapping page":
      "Accéder à la page Classification et mappage",
    "Cancel Selection":
      "Annuler la sélection",

    // --- Anomali ThreatStream v2 (Deprecated) integration instance setup page ---
    // NOTE: the product title is intentionally left in English. The docs paragraph is already registered (ThreatStream Feed page).
    "Deprecated. Use Anomali ThreatStream v3 integration instead.":
      "Obsolète. Utilisez plutôt l'intégration Anomali ThreatStream v3.",
    "Threshold of the indicator.":
      "Seuil de l'indicateur.",

    // --- Anomali ThreatStream v3 integration instance setup page ---
    // NOTE: product title / doc h1 / URL are intentionally left in English. The docs paragraph is split by inline <span>s and by line
    // breaks, so it is registered line-by-line and fragment-by-fragment ("If the indicator" + "confidence" + "...").
    // "confidence" is a generic one-word key: the case-insensitive fallback will also translate a standalone "Confidence" elsewhere.
    "Use Anomali ThreatStream to query and submit threats.":
      "Utilisez Anomali ThreatStream pour interroger et soumettre des menaces.",
    "Default DBOT score for indicators with low confidence":
      "Score DBOT par défaut pour les indicateurs à faible confiance",
    "Remote API":
      "API distante",
    "URL threshold":
      "Seuil d'URL",
    "IP threshold":
      "Seuil d'IP",
    "Domain threshold":
      "Seuil de domaine",
    "File threshold":
      "Seuil de fichier",
    "Email threshold":
      "Seuil d'e-mail",
    "Include inactive results":
      "Inclure les résultats inactifs",
    "Create relationships":
      "Créer des relations",
    "Configure Indicator Threshold Parameters":
      "Configurer les paramètres de seuil des indicateurs",
    "Each indicator has a threshold parameter that impacts the indicator’s DBotScore calculation.":
      "Chaque indicateur possède un paramètre de seuil qui influe sur le calcul du DBotScore de l'indicateur.",
    "The indicator DBotScore is calculated based on the threshold parameter as follows:":
      "Le DBotScore de l'indicateur est calculé à partir du paramètre de seuil comme suit :",
    "If the indicator":
      "Si la valeur de",
    "confidence":
      "confiance",
    "value is above the threshold parameter value, the Score is set to 3 (Malicious)":
      "de l'indicateur est supérieure à la valeur du paramètre de seuil, le score est défini sur 3 (malveillant)",
    "Otherwise the DBotScore is set to 1 (Good).":
      "Sinon, le DBotScore est défini sur 1 (bon).",
    "If the threshold parameter value is not specified, the DBotScore is calculated as follows:":
      "Si la valeur du paramètre de seuil n'est pas spécifiée, le DBotScore est calculé comme suit :",
    "> 65, the DBotScore value is set to 3 (Malicious).":
      "est supérieure à 65, la valeur du DBotScore est définie sur 3 (malveillant).",
    "is between 25 and 65, the DBotScore value is set to 2 (Suspicious).":
      "est comprise entre 25 et 65, la valeur du DBotScore est définie sur 2 (suspect).",
    "< 25, the DBotScore value is set to 1 (Good).":
      "est inférieure à 25, la valeur du DBotScore est définie sur 1 (bon).",

    // --- Batch: strings reported as still untranslated (user list) + Apollo.io SSPM connector wizard ---
    // NOTE: multi-line doc paragraphs (AbuseIPDB / Akamai) are registered LINE-BY-LINE here in addition to the joined forms above,
    // because the live DOM exposes them as separate lines/text nodes; each line translation concatenates naturally.
    // "Previous" is a generic one-word key (also reached through the case-insensitive fallback).
    "TI Lookup is a searchable database of IOCs, IOAs, IOBs, and events for threat hunting and a service for browsing malicious files by their content.":
      "TI Lookup est une base de données consultable d'IOC, d'IOA, d'IOB et d'événements pour la chasse aux menaces, ainsi qu'un service permettant de parcourir les fichiers malveillants selon leur contenu.",
    "You have unsaved changes.":
      "Vous avez des modifications non enregistrées.",
    "Are you sure you want to leave?":
      "Voulez-vous vraiment quitter cette page ?",
    "Previous":
      "Précédent",
    "Use the following sample as a reference for buildspec.yaml configuration:":
      "Utilisez l'exemple suivant comme référence pour la configuration de buildspec.yaml :",
    "Integrate Application Security with your AWS CodeBuild to gain comprehensive visibility into your CodeBuild platform.":
      "Intégrez Application Security à votre AWS CodeBuild pour obtenir une visibilité complète sur votre plateforme CodeBuild.",
    "Integrate Application Security with your AWS CodeCommit to gain comprehensive visibility into your CodeCommit platform.":
      "Intégrez Application Security à votre AWS CodeCommit pour obtenir une visibilité complète sur votre plateforme CodeCommit.",
    "Searching an entire subnet far back in time (e.g. Days=365) will likely cause a server timeout,":
      "Rechercher un sous-réseau entier très loin dans le passé (par ex. Days=365) provoquera probablement un délai d'expiration du serveur,",
    "and you will receive a 500 Internal Server Error response from AbuseIPDB server.":
      "et vous recevrez une réponse 500 Internal Server Error du serveur AbuseIPDB.",
    "The Network Lists API enables you to manage a common set of lists for use in various Akamai security products such as":
      "L'API Network Lists vous permet de gérer un ensemble commun de listes utilisées dans divers produits de sécurité Akamai, tels que",
    "Kona Site Defender, Web App Protector, and Bot Manager.":
      "Kona Site Defender, Web App Protector et Bot Manager.",
    "Network lists are shared sets of IP addresses, CIDR blocks, or broad geographic areas. In addition to managing your":
      "Les listes réseau sont des ensembles partagés d'adresses IP, de blocs CIDR ou de vastes zones géographiques. En plus de gérer vos",
    "own lists, you can also access read-only lists that Akamai dynamically updates for you.":
      "propres listes, vous pouvez également accéder à des listes en lecture seule qu'Akamai met à jour dynamiquement pour vous.",
    "Collects generic data from Amazon Simple Storage Service (Amazon S3).":
      "Collecte des données génériques depuis Amazon Simple Storage Service (Amazon S3).",
    "There are some unsaved changes":
      "Certaines modifications n'ont pas été enregistrées",
    "Are you sure you want to close this window?":
      "Voulez-vous vraiment fermer cette fenêtre ?",
    "No, take me back":
      "Non, revenir en arrière",
    "Yes, I am sure":
      "Oui, j'en suis sûr",
    "To access ThreatStream using the API, you need a user ID and API key. To get these credentials, register at http://ui.threatstream.com.":
      "Pour accéder à ThreatStream via l'API, vous avez besoin d'un ID utilisateur et d'une clé API. Pour obtenir ces identifiants, inscrivez-vous sur http://ui.threatstream.com.",
    "Confidence Threshold":
      "Seuil de confiance",
    "Detect, monitor and alert on settings of your SaaS application.":
      "Détectez, surveillez et recevez des alertes sur les paramètres de votre application SaaS.",
    "Instance URL":
      "URL de l'instance",
    "Security Posture":
      "Posture de sécurité",
    "The Apollo.io API base URL. This is typically https://api.apollo.io for all accounts.":
      "L'URL de base de l'API Apollo.io. Il s'agit généralement de https://api.apollo.io pour tous les comptes.",
    "Your Apollo.io API key. Navigate to Settings → Integrations → API in your Apollo.io account to generate one. SSPM requires this key to authenticate to the Apollo.io API.":
      "Votre clé API Apollo.io. Accédez à Paramètres → Intégrations → API dans votre compte Apollo.io pour en générer une. SSPM a besoin de cette clé pour s'authentifier auprès de l'API Apollo.io.",

    // --- Batch: strings from the Collector export (Jira / Asimily Insight docs, marketplace card descriptions, SVG icon titles) ---
    // Fragments (", found on ...", ": Enable to ...", "Leave the" etc.) are registered as-is because the live DOM splits sentences at inline elements.
    // Jira terminology follows Jira own localisation (ja 課題 / es incidencias / fr tickets / de Vorgänge); Cortex "incident" keeps the Cortex term.
    "- Enter the API token. To generate an API token, see":
      "- Saisissez le jeton API. Pour générer un jeton API, consultez",
    "- Enter your user email.":
      "- Saisissez votre adresse e-mail d'utilisateur.",
    "– Represents anomaly alerts.":
      "– Représente les alertes d'anomalie.",
    "– Represents vulnerabilities.":
      "– Représente les vulnérabilités.",
    ", found on the left side menu.":
      ", que vous trouverez dans le menu de gauche.",
    ", which are required in the configuration screen. Copy these values and paste them into the respective fields in the configuration screen.":
      ", qui sont requis dans l'écran de configuration. Copiez ces valeurs et collez-les dans les champs correspondants de l'écran de configuration.",
    ", which will be used to integrate Cortex with Jira:":
      ", qui sera utilisé pour intégrer Cortex à Jira :",
    ": Asimily API user credentials. To create a new user, go to":
      ": Identifiants de l'utilisateur de l'API Asimily. Pour créer un utilisateur, accédez à",
    ": Base URL of the Asimily Insight portal. Format:":
      ": URL de base du portail Asimily Insight. Format :",
    ": Choose a log level from the dropdown.":
      ": Choisissez un niveau de journalisation dans la liste déroulante.",
    ": Default Classifier and Mapper provided as":
      ": Classificateur et mappeur par défaut fournis sous la forme de",
    ": Enable to fetch anomaly alerts.":
      ": Activez cette option pour récupérer les alertes d'anomalie.",
    ": Enable to fetch device vulnerability incidents.":
      ": Activez cette option pour récupérer les incidents de vulnérabilité des appareils.",
    ": Enable to fetch incidents from Asimily Insight into Cortex.":
      ": Activez cette option pour récupérer les incidents d'Asimily Insight dans Cortex.",
    ": Filter to only fetch anomalies of the selected criticality.":
      ": Filtre pour ne récupérer que les anomalies de la criticité sélectionnée.",
    ": Filter to only fetch CVEs above the specified score threshold.":
      ": Filtre pour ne récupérer que les CVE au-dessus du seuil de score spécifié.",
    ": Only fetch incidents for devices with specified tags.":
      ": Ne récupère que les incidents des appareils portant les balises spécifiées.",
    ": Only fetch incidents for specified device families.":
      ": Ne récupère que les incidents des familles d'appareils spécifiées.",
    ": Set how often incidents should be fetched (e.g.,":
      ": Définit la fréquence de récupération des incidents (par ex.,",
    ". The OProxy URL is a client side web page that provides an easy interface to copy the authorization code from the response to the integration configuration during the authorization flow. Optionally, if you don’t want to use the OProxy URL, you can use a localhost URL on an unused local port, for example:":
      ". L'URL OProxy est une page Web côté client qui fournit une interface simple pour copier le code d'autorisation de la réponse vers la configuration de l'intégration pendant le flux d'autorisation. Vous pouvez également, si vous ne souhaitez pas utiliser l'URL OProxy, utiliser une URL localhost sur un port local inutilisé, par exemple :",
    ". You will then need to copy the code from the URL address bar in the response.":
      ". Vous devrez ensuite copier le code depuis la barre d'adresse de l'URL dans la réponse.",
    "(Client ID, Client Secret)":
      "(ID client, secret client)",
    "(Personal Access Token)":
      "(jeton d'accès personnel)",
    ") that will drop incoming incidents if it is a duplicate. It will search all past incidents with all status. The script can be used for configuring Pre-Process Rules to avoid duplication.":
      ") qui supprimera les incidents entrants en cas de doublon. Il recherchera tous les incidents passés, quel que soit leur statut. Le script peut être utilisé pour configurer des règles de prétraitement afin d'éviter les doublons.",
    "), this means there may be new devices included to fetch incidents or there will be new incidents included for existing devices. It is strongly recommended to":
      "), cela signifie que de nouveaux appareils peuvent être inclus pour la récupération d'incidents ou que de nouveaux incidents seront inclus pour les appareils existants. Il est fortement recommandé de",
    "1. Basic Authentication:":
      "1. Authentification de base :",
    "3. Private Access Token":
      "3. Jeton d'accès privé",
    "a. Click":
      "a. Cliquez sur",
    "b. Click":
      "b. Cliquez sur",
    "Add comments":
      "Ajouter des commentaires",
    "Add User":
      "Ajouter un utilisateur",
    "Admin page":
      "Page d'administration",
    "and follow the steps.":
      "et suivez les étapes.",
    "API token (Deprecated)":
      "Jeton API (obsolète)",
    "API token (Recommended)":
      "Jeton API (recommandé)",
    "API User Name":
      "Nom d'utilisateur de l'API",
    "API Username":
      "Nom d'utilisateur de l'API",
    "Application link":
      "Lien d'application",
    "Application links":
      "Liens d'application",
    "As of June 2019, Basic authentication with passwords for Jira is no longer supported, please use basic authentication using API Token or use OAuth 1.0. To use basic authentication, follow":
      "Depuis juin 2019, l'authentification de base avec mot de passe n'est plus prise en charge pour Jira ; veuillez utiliser l'authentification de base avec un jeton API ou OAuth 1.0. Pour utiliser l'authentification de base, suivez",
    "Asimily Insight Integration":
      "Intégration Asimily Insight",
    "Asimily Portal URL":
      "URL du portail Asimily",
    "Authentication Methods":
      "Méthodes d'authentification",
    "Authorization code":
      "Code d'autorisation",
    "AutoFocus documentation":
      "Documentation AutoFocus",
    "Azure Resource Graph integration is designed to allow for executing Azure Resource Graph commands, like querying resource data.":
      "L'intégration Azure Resource Graph est conçue pour permettre l'exécution de commandes Azure Resource Graph, comme l'interrogation des données de ressources.",
    "Azure Risky Users provides access to all at-risk users and risk detections in the Azure AD environment.":
      "Azure Risky Users donne accès à tous les utilisateurs à risque et aux détections de risque dans l'environnement Azure AD.",
    "back icon":
      "Icône de retour",
    "cases and issues icon":
      "Icône des cas et problèmes",
    "dashboards reports icon":
      "Icône des tableaux de bord et rapports",
    "favorites icon":
      "Icône des favoris",
    "help icon":
      "Icône d'aide",
    "inventory icon":
      "Icône d'inventaire",
    "investigation response icon":
      "Icône d'investigation et de réponse",
    "lock filled icon":
      "Icône de cadenas plein",
    "modules icon":
      "Icône des modules",
    "notification bell icon":
      "Icône de cloche de notification",
    "posture management icon":
      "Icône de gestion de la posture",
    "resize handle icon":
      "Icône de poignée de redimensionnement",
    "settings icon":
      "Icône des paramètres",
    "tenent navigator icon":
      "Icône du navigateur de tenant",
    "threat management icon":
      "Icône de gestion des menaces",
    "Basic Authentication permissions":
      "Autorisations d'authentification de base",
    "Brandefense is a Cyber Intelligence Platform that responds directly and effectively to today's complex cyber threats.":
      "Brandefense est une plateforme de cyber-renseignement qui répond de manière directe et efficace aux menaces cybernétiques complexes d'aujourd'hui.",
    "Browse projects":
      "Parcourir les projets",
    "By default, the key expires one week from today. If you’d like to change the expiration date, pick a new date under Expires on. You’re unable to select a date longer than a year from the date of creation.":
      "Par défaut, la clé expire une semaine après aujourd'hui. Si vous souhaitez modifier la date d'expiration, choisissez une nouvelle date sous Expires on. Vous ne pouvez pas sélectionner une date postérieure à un an après la date de création.",
    "Bypass exclusion list":
      "Contourner la liste d'exclusion",
    "Callback URL":
      "URL de rappel",
    "Classic Scopes":
      "Portées classiques",
    "Classifier and Mapper":
      "Classificateur et mappeur",
    "Classifiers & Mappers":
      "Classificateurs et mappeurs",
    "Click Create API key in the top right.":
      "Cliquez sur Create API key en haut à droite.",
    "Click Create to save the API key.":
      "Cliquez sur Create pour enregistrer la clé API.",
    "Click Done and you’ll see the key in your list of API keys.":
      "Cliquez sur Done et vous verrez la clé dans votre liste de clés API.",
    "Click the Jira Administration tab (the gear icon found in the top right corner) and click":
      "Cliquez sur l'onglet Jira Administration (l'icône d'engrenage située dans le coin supérieur droit), puis cliquez sur",
    "Client ID, Client Secret":
      "ID client, secret client",
    "Cloud authentication":
      "Authentification cloud",
    "Cloud ID of your Jira instance (See below)":
      "Cloud ID de votre instance Jira (voir ci-dessous)",
    "Cloud Scopes":
      "Portées cloud",
    "Collects logs from Microsoft Azure Event Hub.":
      "Collecte les journaux de Microsoft Azure Event Hub.",
    "Comment entry tag":
      "Balise d'entrée de commentaire",
    "Configure Pre-Process Rules":
      "Configurer les règles de prétraitement",
    "Configure the integration":
      "Configurer l'intégration",
    "Configure your Jira instance based on the type of your deployment:":
      "Configurez votre instance Jira en fonction du type de déploiement :",
    "Consumer key (OAuth 1.0)":
      "Clé client (OAuth 1.0)",
    "Copy the generated Authorization code into the integration instance and save the integration instance.":
      "Copiez le code d'autorisation généré dans l'instance d'intégration et enregistrez l'instance d'intégration.",
    "Copy the values for your Organization ID and API key. You’ll need those to access your organization later.":
      "Copiez les valeurs de votre ID d'organisation et de votre clé API. Vous en aurez besoin pour accéder ultérieurement à votre organisation.",
    "Create and Manage Azure Virtual Machines.":
      "Créez et gérez des machines virtuelles Azure.",
    "Create attachments":
      "Créer des pièces jointes",
    "Create issues":
      "Créer des tickets",
    "Delete issues":
      "Supprimer des tickets",
    "Deprecated. No available replacement.":
      "Obsolète. Aucun remplacement disponible.",
    "Deprecated. Use the Atlassian Jira v3 integration instead":
      "Obsolète. Utilisez plutôt l'intégration Atlassian Jira v3",
    "Deprecated. Use the Check Point Firewall v2 integration instead. Manage Check Point firewall via API":
      "Obsolète. Utilisez plutôt l'intégration Check Point Firewall v2. Gérez le pare-feu Check Point via l'API",
    "Deprecated. Use the VMware Carbon Black App Control v2 integration instead.":
      "Obsolète. Utilisez plutôt l'intégration VMware Carbon Black App Control v2.",
    "Deprecated. Use the VMware Carbon Black EDR integration instead.":
      "Obsolète. Utilisez plutôt l'intégration VMware Carbon Black EDR.",
    "Deprecated. Use Unit 42 Feed integration instead.":
      "Obsolète. Utilisez plutôt l'intégration Unit 42 Feed.",
    "Deprecated. Use Unit 42 Intel Objects Feed instead. Use the AutoFocus Tags Feed integration to fetch indicators from AutoFocus Tags.":
      "Obsolète. Utilisez plutôt Unit 42 Intel Objects Feed. Utilisez l'intégration AutoFocus Tags Feed pour récupérer des indicateurs depuis AutoFocus Tags.",
    "Developer console":
      "Console développeur",
    "Device Family Filter":
      "Filtre de famille d'appareils",
    "Device Family Filter for Fetch Operation":
      "Filtre de famille d'appareils pour l'opération de récupération",
    "Device Tags Filter":
      "Filtre de balises d'appareil",
    "Device Tags Filter for Fetch Operation":
      "Filtre de balises d'appareil pour l'opération de récupération",
    "Directory ID":
      "ID de l'annuaire",
    "Edit issues":
      "Modifier des tickets",
    "Enable/Disable CRUD Commands":
      "Activer/désactiver les commandes CRUD",
    "Ensure that you possess the necessary permissions by navigating to":
      "Assurez-vous de disposer des autorisations nécessaires en accédant à",
    "Enter a name that you’ll remember to identify the API key.":
      "Saisissez un nom dont vous vous souviendrez pour identifier la clé API.",
    "External application":
      "Application externe",
    "Fetch Anomaly Alerts":
      "Récupérer les alertes d'anomalie",
    "Fetch Anomaly Criticality":
      "Criticité des anomalies à récupérer",
    "Fetch attachments":
      "Récupérer les pièces jointes",
    "Fetch comments":
      "Récupérer les commentaires",
    "Fetch CVE Score":
      "Score CVE à récupérer",
    "Fetch Device CVEs":
      "Récupérer les CVE des appareils",
    "Fetch incidents":
      "Récupérer les incidents",
    "Fetching incidents by creation time (using the Created field), instead of using IDs, is done by checking the “Use created field to fetch incidents” checkbox.":
      "La récupération des incidents par date de création (à l'aide du champ Created), au lieu d'utiliser les ID, s'effectue en cochant la case « Utiliser le champ de création pour récupérer les incidents ».",
    "fields empty and fill in the following fields:":
      "vides et renseignez les champs suivants :",
    "File entry tag":
      "Balise d'entrée de fichier",
    "Fill in the required details as explained in the page, by inserting a":
      "Renseignez les détails requis comme expliqué dans la page, en insérant ce qui suit :",
    "Fill in the required fields:":
      "Renseignez les champs obligatoires :",
    "For both instances (Cloud ID & OnPrem), use the":
      "Pour les deux instances (Cloud ID et OnPrem), utilisez ce qui suit :",
    "For fetching incidents, please update the query param according to":
      "Pour récupérer des incidents, veuillez mettre à jour le paramètre de requête conformément à",
    "For more information see the":
      "Pour plus d'informations, consultez",
    "from the Playground and follow its instructions.":
      "depuis le Playground et suivez ses instructions.",
    "from the Playground to verify that everything is configured correctly.":
      "depuis le Playground pour vérifier que tout est correctement configuré.",
    "From your organization at admin.atlassian.com:":
      "Depuis votre organisation sur admin.atlassian.com :",
    "Gets Daily Threat Feed from AutoFocus.":
      "Obtient le flux quotidien de menaces d'AutoFocus.",
    "Go to the integration instance configuration.":
      "Accédez à la configuration de l'instance d'intégration.",
    "Granular Scopes":
      "Portées granulaires",
    "High Only":
      "Élevée uniquement",
    "If you modify any of the fetch filters (":
      "Si vous modifiez l'un des filtres de récupération (",
    "If you wish the first run to start from a specific time, use “Issue index to start fetching incidents from” param.":
      "Si vous souhaitez que la première exécution démarre à une heure précise, utilisez le paramètre « Index du ticket à partir duquel démarrer la récupération des incidents ».",
    "Incident Fetch Interval":
      "Intervalle de récupération des incidents",
    "Incident Types":
      "Types d'incident",
    "Incoming":
      "Entrant",
    "Indicator Reputation":
      "Réputation de l'indicateur",
    "Insert the generated token in the":
      "Insérez le jeton généré dans",
    "Integrate Asimily Insight to ingest security anomalies, CVEs, and leverage detailed asset data for streamlined incident investigation.":
      "Intégrez Asimily Insight pour ingérer les anomalies de sécurité et les CVE, et exploitez des données détaillées sur les actifs afin de rationaliser l'investigation des incidents.",
    "Integrate Checkmarx to gain a unified overview of your application security posture.":
      "Intégrez Checkmarx pour obtenir une vue d'ensemble unifiée de la posture de sécurité de vos applications.",
    "Integrate with Atlassian's services to execute CRUD operations for employee lifecycle processes.":
      "Intégrez les services d'Atlassian pour exécuter des opérations CRUD pour les processus de cycle de vie des employés.",
    "Issue Field to fetch by":
      "Champ de ticket pour la récupération",
    "Issue index to start fetching incidents from":
      "Index du ticket à partir duquel démarrer la récupération des incidents",
    "Jira URL, for example: https://demisto.atlassian.net/":
      "URL Jira, par exemple : https://demisto.atlassian.net/",
    "JQL documentation":
      "Documentation JQL",
    "Leave empty":
      "Laisser vide",
    "Leave the":
      "Laissez les champs",
    "Link issues":
      "Lier des tickets",
    "Locate permissions for the tasks listed below:":
      "Recherchez les autorisations correspondant aux tâches répertoriées ci-dessous :",
    "Log Analytics is a service that helps you collect and analyze data generated by resources in your cloud and on-premises environments.":
      "Log Analytics est un service qui vous aide à collecter et à analyser les données générées par les ressources de vos environnements cloud et sur site.",
    "Log in to Jira as a user with":
      "Connectez-vous à Jira en tant qu'utilisateur disposant de",
    "Log Level":
      "Niveau de journalisation",
    "Manage Binalyze AIR forensic acquisition, endpoint isolation, triage, cases, tasks, assets, repositories, and evidence artifacts from Cortex.":
      "Gérez depuis Cortex l'acquisition forensique, l'isolement des endpoints, le triage, les cas, les tâches, les actifs, les référentiels et les artefacts de preuve de Binalyze AIR.",
    "Max incidents per fetch":
      "Nombre maximal d'incidents par récupération",
    "Mirror incoming incidents":
      "Mettre en miroir les incidents entrants",
    "Mirror outgoing incidents":
      "Mettre en miroir les incidents sortants",
    "Notifies you if login credentials to your company are being sold on the dark web.":
      "Vous avertit si les identifiants de connexion de votre entreprise sont vendus sur le dark web.",
    "OAuth 2.0 integration":
      "Intégration OAuth 2.0",
    "on the Asimily Insight portal.":
      "(sur le portail Asimily Insight).",
    "on the left side bar. Your Cloud ID will appear in the URL:":
      "dans la barre latérale gauche. Votre Cloud ID apparaîtra dans l'URL :",
    "Once the link is created, you will be able to see":
      "Une fois le lien créé, vous pourrez voir",
    "Onboard your Azure DevOps SaaS to the Cortex Application Security module to gain comprehensive visibility into your Azure DevOps platform assets and scan your repositories’ code, configurations, and CI/CD pipelines for security issues.":
      "Intégrez votre Azure DevOps SaaS au module Cortex Application Security pour bénéficier d'une visibilité complète sur les actifs de votre plateforme Azure DevOps et analyser le code, les configurations et les pipelines CI/CD de vos référentiels à la recherche de problèmes de sécurité.",
    "Onboard your Bitbucket Data Center on-prem to the Cortex Application Security module to gain comprehensive visibility into your Bitbucket Data Center platform assets and scan your repositories’ code for security issues.":
      "Intégrez votre Bitbucket Data Center sur site au module Cortex Application Security pour bénéficier d'une visibilité complète sur les actifs de votre plateforme Bitbucket Data Center et analyser le code de vos référentiels à la recherche de problèmes de sécurité.",
    "Onboard your Bitbucket SaaS to the Cortex Application Security module to gain comprehensive visibility into your Bitbucket platform assets and scan your repositories’ code for security issues.":
      "Intégrez votre Bitbucket SaaS au module Cortex Application Security pour bénéficier d'une visibilité complète sur les actifs de votre plateforme Bitbucket et analyser le code de vos référentiels à la recherche de problèmes de sécurité.",
    "OnPrem authentication":
      "Authentification OnPrem",
    "OnPrem Scopes":
      "Portées OnPrem",
    "page, and choose the App you want to integrate with your instance. It must be of type OAuth 2.0. For creating a new app with type OAuth 2.0, click":
      "page, puis choisissez l'application que vous souhaitez intégrer à votre instance. Elle doit être de type OAuth 2.0. Pour créer une application de type OAuth 2.0, cliquez sur",
    "Password (Deprecated - Use API token)":
      "Mot de passe (obsolète – utilisez le jeton API)",
    "Personal Access Token":
      "Jeton d'accès personnel",
    "Private key (PKCS8 format)":
      "Clé privée (format PKCS8)",
    "Project Settings":
      "Paramètres du projet",
    "Query (in JQL) for fetching incidents":
      "Requête (en JQL) pour la récupération des incidents",
    "Query (in JQL) for fetching incidents.":
      "Requête (en JQL) pour la récupération des incidents.",
    "Receives network flow logs from Microsoft Azure Network Watcher.":
      "Reçoit les journaux de flux réseau de Microsoft Azure Network Watcher.",
    "Reset Now":
      "Réinitialiser maintenant",
    "Reset the “last run” timestamp":
      "Réinitialiser l'horodatage de la « dernière exécution »",
    "Resetting the “Last Run” Timestamp":
      "Réinitialisation de l'horodatage de la « dernière exécution »",
    "Run the integration command":
      "Exécuter la commande d'intégration",
    "SaaS Posture Security":
      "Sécurité de la posture SaaS",
    "Save & Exit":
      "Enregistrer et quitter",
    "Save the integration instance.":
      "Enregistrez l'instance d'intégration.",
    "scope, in order to retrieve refresh tokens.":
      "portée, afin de récupérer les jetons d'actualisation.",
    "Select Settings and then API keys.":
      "Sélectionnez Settings, puis API keys.",
    "The integration can fetch the following incident types:":
      "L'intégration peut récupérer les types d'incident suivants :",
    "The integration includes a preprocessing script (":
      "L'intégration inclut un script de prétraitement (",
    "The integration retrieves asset information, anomaly alerts, and CVEs from Asimily Insight—either through scheduled updates or on-demand queries—making it necessary to define a preprocessing rule that discards incoming incidents if they are duplicates.":
      "L'intégration récupère les informations sur les actifs, les alertes d'anomalie et les CVE depuis Asimily Insight, soit par des mises à jour planifiées, soit par des requêtes à la demande ; il est donc nécessaire de définir une règle de prétraitement qui supprime les incidents entrants en cas de doublon.",
    "The Traffic Light Protocol (TLP) designation to apply to indicators fetched from the feed":
      "La désignation du Traffic Light Protocol (TLP) à appliquer aux indicateurs récupérés depuis le flux",
    "There are 2 authentication methods:":
      "Il existe 2 méthodes d'authentification :",
    "This ensures that incidents related to newly included devices and updated filters are correctly fetched.":
      "Cela garantit que les incidents liés aux appareils nouvellement inclus et aux filtres mis à jour sont correctement récupérés.",
    "this tutorial":
      "ce tutoriel",
    "This will fetch all tickets in your system (including past tickets) that are in Open status and in project soc. After the first run, it will create incidents only for new tickets.":
      "Cela récupérera tous les tickets de votre système (y compris les anciens tickets) qui ont le statut Open et appartiennent au projet soc. Après la première exécution, seuls les nouveaux tickets donneront lieu à la création d'incidents.",
    "Time range for initial data fetch":
      "Plage de temps pour la récupération initiale des données",
    "to get the Access Token. Authorizing using OAuth1.0, requires Access Token, Private Key, and Consumer Key.":
      "pour obtenir le jeton d'accès. L'autorisation avec OAuth1.0 nécessite le jeton d'accès, la clé privée et la clé client.",
    "to get the API token.":
      "pour obtenir le jeton API.",
    "To obtain the Authorization code, follow these steps:":
      "Pour obtenir le code d'autorisation, procédez comme suit :",
    "to obtain your Access Tokens. Authorizing using a PAT requires the Access Token only.":
      "pour obtenir vos jetons d'accès. L'autorisation avec un PAT ne nécessite que le jeton d'accès.",
    "To reset:":
      "Pour réinitialiser :",
    "To use a Private Access Token, please follow":
      "Pour utiliser un jeton d'accès privé, suivez",
    "To use OAuth1.0 follow":
      "Pour utiliser OAuth1.0, suivez",
    "Traffic Light Protocol Color":
      "Couleur du Traffic Light Protocol",
    "Transition issues":
      "Effectuer la transition des tickets",
    "Update the project you want to fetch from, using:":
      "Mettez à jour le projet à partir duquel vous souhaitez récupérer, à l'aide de :",
    "Use created field to fetch incidents":
      "Utiliser le champ de création pour récupérer les incidents",
    "Use the Azure Key Vault integration to safeguard and manage cryptographic keys and secrets used by cloud applications and services.":
      "Utilisez l'intégration Azure Key Vault pour protéger et gérer les clés cryptographiques et les secrets utilisés par les applications et services cloud.",
    "Use the Jira integration to manage issues, create Cortex incidents from Jira projects, and mirror issues to existing issue incidents in Cortex. The integration now supports both OnPrem, and Cloud instances.":
      "Utilisez l'intégration Jira pour gérer les tickets, créer des incidents Cortex à partir de projets Jira et mettre en miroir les tickets vers des incidents de ticket existants dans Cortex. L'intégration prend désormais en charge les instances OnPrem et cloud.",
    "Use this integration to connect securely with an Atlassian Cloud Model Context Protocol (MCP) server and access its tools in real time.":
      "Utilisez cette intégration pour vous connecter en toute sécurité à un serveur Model Context Protocol (MCP) d'Atlassian Cloud et accéder à ses outils en temps réel.",
    "Use this integration to read information and send commands to the Check Point Firewall server.":
      "Utilisez cette intégration pour lire des informations et envoyer des commandes au serveur Check Point Firewall.",
    "Username (Basic Authentication)":
      "Nom d'utilisateur (authentification de base)",
    "When creating Jira issues through XSOAR, using the mirroring function, make sure that you exclude those issues when fetching incidents. To exclude these issues, tag the relevant issues with a dedicated label and exclude that label from the JQL query (Labels!=).":
      "Lorsque vous créez des tickets Jira via XSOAR à l'aide de la fonction de mise en miroir, veillez à les exclure lors de la récupération des incidents. Pour les exclure, ajoutez aux tickets concernés une étiquette dédiée et excluez cette étiquette de la requête JQL (Labels!=).",
    "You can authenticate using one of the following methods:":
      "Vous pouvez vous authentifier à l'aide de l'une des méthodes suivantes :",
    "You can enable and filter these incidents with the following options:":
      "Vous pouvez activer et filtrer ces incidents à l'aide des options suivantes :",
    "You can select which CRUD commands are enabled in the integration instance configuration settings. By default, all commands are enabled.":
      "Vous pouvez sélectionner les commandes CRUD activées dans les paramètres de configuration de l'instance d'intégration. Par défaut, toutes les commandes sont activées.",
    "Your Jira server URL":
      "URL de votre serveur Jira",

    // --- Batch: strings from the Collector export #2 (AutoFocus Feed docs, marketplace card descriptions, feed tooltips) ---
    // Fragments such as "and", "or", "The", "Click the", "Go to the", "From the" are intentionally NOT registered.
    "Activate the API":
      "Activer l'API",
    "Activating AutoFocus Licenses":
      "Activation des licences AutoFocus",
    "Add your authorization code":
      "Ajouter votre code d'autorisation",
    "AutoFocus documentation - Get Tag Details":
      "Documentation AutoFocus – Obtenir les détails d'une balise",
    "AutoFocus documentation - Get Tags":
      "Documentation AutoFocus – Obtenir les balises",
    "AutoFocus Endpoint URL":
      "URL de l'endpoint AutoFocus",
    "Custom Feed info:":
      "Informations sur le flux personnalisé :",
    "Samples Feed info:":
      "Informations sur le flux d'échantillons :",
    "Enter the authorization code.":
      "Saisissez le code d'autorisation.",
    "Enter this API key when configuring the AutoFocus integration in Cortex.":
      "Saisissez cette clé API lors de la configuration de l'intégration AutoFocus dans Cortex.",
    "For more info on activating the license, see":
      "Pour plus d'informations sur l'activation de la licence, consultez",
    "For more information about generating URL and adding filter options for custom feeds, please read":
      "Pour plus d'informations sur la génération de l'URL et l'ajout d'options de filtrage pour les flux personnalisés, consultez",
    "From the left-side navigation menu, select":
      "Dans le menu de navigation de gauche, sélectionnez",
    "Get Your API Key":
      "Obtenir votre clé API",
    "Gets Custom and Sample feeds from AutoFocus.":
      "Récupère les flux personnalisés et d'échantillons depuis AutoFocus.",
    "Indicator Feed":
      "Flux d'indicateurs",
    "Onboard your CircleCI SaaS service for comprehensive Application Security: Integrate Cortex CLI scans for your code, and secure your CI/CD pipelines.":
      "Intégrez votre service CircleCI SaaS pour une Application Security complète : intégrez les analyses Cortex CLI de votre code et sécurisez vos pipelines CI/CD.",
    "Only necessary in case a Custom Feed is fetched. Can also support a CSV of Custom feed URLs.":
      "Nécessaire uniquement lorsqu'un flux personnalisé est récupéré. Peut également prendre en charge un fichier CSV d'URL de flux personnalisés.",
    "Palo Alto Networks support site":
      "site d'assistance Palo Alto Networks",
    "Protect your cloud assets and private network.":
      "Protégez vos actifs cloud et votre réseau privé.",
    "Query - A JSON styled AutoFocus query. For example:":
      "Query : requête AutoFocus au format JSON. Par exemple :",
    "Query and upload samples to Cisco threat grid.":
      "Interrogez et téléversez des échantillons vers Cisco Threat Grid.",
    "Reliability of the source providing the intelligence data":
      "Fiabilité de la source fournissant les données de renseignement",
    "Samples Feed Query":
      "Requête du flux d'échantillons",
    "Samples Feed Scope Type":
      "Type de portée du flux d'échantillons",
    "Scalable visibility and security analytics.":
      "Visibilité et analyses de sécurité évolutives.",
    "Scope Type - Either":
      "Type de portée : l'un des",
    "Secure Malware Analytics (formerly Threat Grid) combines advanced sandboxing with threat intelligence into one unified solution to protect organizations from malware.":
      "Secure Malware Analytics (anciennement Threat Grid) associe un sandboxing avancé et le renseignement sur les menaces dans une solution unifiée pour protéger les organisations contre les malwares.",
    "Select the API Key link.":
      "Sélectionnez le lien API Key.",
    "Select values":
      "Sélectionner des valeurs",
    "The Custom Feed URL should be in this form:":
      "L'URL du flux personnalisé doit avoir la forme suivante :",
    "The Security Management Appliance (SMA) is used to centralize services from Email Security Appliances (ESAs) and Web Security Appliances (WSAs).":
      "Le Security Management Appliance (SMA) sert à centraliser les services des Email Security Appliances (ESA) et des Web Security Appliances (WSA).",
    "The URL for the custom feed to fetch":
      "L'URL du flux personnalisé à récupérer",
    "To connect a custom AutoFocus feed you need to provide the Custom Feed URL.":
      "Pour vous connecter à un flux AutoFocus personnalisé, vous devez fournir l'URL du flux personnalisé.",
    "To connect to a sample AutoFocus feed you need to provide the following parameters:":
      "Pour vous connecter à un flux AutoFocus d'échantillons, vous devez fournir les paramètres suivants :",
    "To get your API key, you need to add an authorization code, and then activate the API.":
      "Pour obtenir votre clé API, vous devez ajouter un code d'autorisation, puis activer l'API.",
    "Use system proxy settings is enabled only when an engine is selected":
      "L'option « Utiliser les paramètres de proxy système » n'est activée que lorsqu'un moteur est sélectionné",
    "Use the AutoFocus Tags Feed integration to fetch indicators from AutoFocus Tags.":
      "Utilisez l'intégration AutoFocus Tags Feed pour récupérer des indicateurs depuis AutoFocus Tags.",
    "Use the Cisco Adaptive Security Appliance Software integration to manage interfaces, rules, and network objects.":
      "Utilisez l'intégration Cisco Adaptive Security Appliance Software pour gérer les interfaces, les règles et les objets réseau.",
    "Use the Cisco Firepower integration for unified management of firewalls, application control, intrusion prevention, URL filtering, and advanced malware protection.":
      "Utilisez l'intégration Cisco Firepower pour la gestion unifiée des pare-feu, du contrôle des applications, de la prévention des intrusions, du filtrage d'URL et de la protection avancée contre les malwares.",
    "When removed from the feed":
      "Lorsqu'il est supprimé du flux",
    "When selected, the exclusion list is ignored for indicators from this feed. This means that if an indicator from this feed is on the exclusion list, the indicator might still be added to the system.":
      "Lorsque cette option est sélectionnée, la liste d'exclusion est ignorée pour les indicateurs de ce flux. Cela signifie que si un indicateur de ce flux figure dans la liste d'exclusion, il peut tout de même être ajouté au système.",

    // --- Batch: strings from the Collector export #4 (Azure Log Analytics / Microsoft self-deployed auth docs, marketplace card descriptions) ---
    // Fragments such as "and", "or the", "Follow the", "Go to the", "Run the", "Select the", "To get the", "To use the" are intentionally NOT registered.
    ": These credentials are valid for a single instance only.":
      ": Ces identifiants ne sont valables que pour une seule instance.",
    "(Certificate Thumbprint)":
      "(empreinte du certificat)",
    "(Client Secret)":
      "(secret client)",
    "After authorizing the Cortex app, you will get an ID, Token, and Key which should be inserted in the integration instance settings fields.":
      "Après avoir autorisé l'application Cortex, vous obtiendrez un ID, un jeton et une clé à saisir dans les champs des paramètres de l'instance d'intégration.",
    "and allow Cortex access to Azure Log Analytics, an administrator has to approve our app using an admin consent flow by clicking this":
      "et autoriser Cortex à accéder à Azure Log Analytics, un administrateur doit approuver notre application via un flux de consentement administrateur en cliquant sur ce",
    "Anthropic Claude AI integration for data security scanning and content analysis":
      "Intégration d'Anthropic Claude AI pour l'analyse de la sécurité des données et du contenu",
    "Application redirect URI (for self-deployed mode)":
      "URI de redirection de l'application (pour le mode auto-déployé)",
    "Authorization Code flow":
      "flux de code d'autorisation",
    "Client Credentials flow":
      "flux d'informations d'identification du client",
    "Client Credentials Flow":
      "Flux d'informations d'identification du client",
    "Azure Resource Graph is an Azure service designed to extend Azure Resource Management by providing efficient and performant resource exploration with the ability to query at scale across a given set of resources.":
      "Azure Resource Graph est un service Azure conçu pour étendre Azure Resource Management en offrant une exploration des ressources efficace et performante, avec la possibilité d'interroger à grande échelle un ensemble donné de ressources.",
    "Azure Service Management - permission":
      "Azure Service Management : autorisation",
    "Log Analytics API - permission":
      "Log Analytics API : autorisation",
    "of type":
      "de type",
    "Check when authenticating using the Authorization Code flow.":
      "Cochez cette option lors de l'authentification avec le flux de code d'autorisation.",
    "Check when authenticating using the Client Credentials flow.":
      "Cochez cette option lors de l'authentification avec le flux d'informations d'identification du client.",

    // --- Batch: strings from the user-reported screenshot (Azure auth type description) ---
    // Fragments such as "and", "or the", "Follow the", "Go to the", "Run the", "Select the", "To get the", "To use the" are intentionally NOT registered.
    "Type of authentication - could be Client Credentials Authorization Flow (recommended) or Device Code Flow.":
      "Type d'authentification : flux d'autorisation par identifiants client (recommandé) ou flux de code d'appareil.",

    // --- Batch: strings from the Collector export #5 (v0.1.1: tooltips, Brandefense/Binalyze/Bitbucket docs, marketplace card descriptions, data-source table) ---
    // Fragments such as "and", "or the", "Follow the", "Go to the", "Run the", "Select the", "To get the", "To use the" are intentionally NOT registered.
    "— For asset-related commands":
      "— Pour les commandes liées aux actifs",
    "— For creating incidents":
      "— Pour la création d'incidents",
    "— For CTI threat search capability":
      "— Pour la fonctionnalité de recherche de menaces CTI",
    "— For incident fetching and queries":
      "— Pour la récupération et les requêtes d'incidents",
    "— For indicator retrieval":
      "— Pour la récupération des indicateurs",
    "— For intelligence reports":
      "— Pour les rapports de renseignement",
    "— For IoC and threat intelligence data":
      "— Pour les IoC et les données de renseignement sur les menaces",
    "— For phishing monitoring":
      "— Pour la surveillance du phishing",
    "(API Key)":
      "(clé API)",
    "A Brandefense account with API access enabled.":
      "Un compte Brandefense avec l'accès à l'API activé.",
    "An API Bearer Token generated from the Brandefense platform.":
      "Un jeton Bearer d'API généré depuis la plateforme Brandefense.",
    "Add":
      "Ajouter",
    "Binalyze AIR Server URL":
      "URL du serveur Binalyze AIR",
    "Bitbucket Data Center (On-Prem)":
      "Bitbucket Data Center (sur site)",
    "Choose from repository list":
      "Choisir dans la liste des dépôts",
    "Community Contributed Integration":
      "Intégration fournie par la communauté",
    "Comprehensive integration with Databricks workspace APIs for managing clusters, jobs, SQL, pipelines, Unity Catalog, MLflow, IAM, and more.":
      "Intégration complète avec les API de l'espace de travail Databricks pour gérer les clusters, les tâches, SQL, les pipelines, Unity Catalog, MLflow, IAM, etc.",
    "Configure Domain":
      "Configurer le domaine",
    "Connect Docker Hub Container Registry with Cortex Cloud to scan and secure your container images, ensuring comprehensive security and compliance.":
      "Connectez Docker Hub Container Registry à Cortex Cloud pour analyser et sécuriser vos images de conteneur, et garantir une sécurité et une conformité complètes.",
    "Connector name":
      "Nom du connecteur",
    "Copy the generated token and paste it into the":
      "Copiez le jeton généré et collez-le dans le champ",
    "field in the integration configuration.":
      "de la configuration de l'intégration.",
    "Copy the token.":
      "Copiez le jeton.",
    "Create a Personal Access Token":
      "Créer un jeton d'accès personnel",
    "Create a new API token with the minimum required permissions.":
      "Créez un nouveau jeton d'API avec les autorisations minimales requises.",
    "Cribl Search allows you to query, retrieve, and manage search jobs, datasets, and saved searches across your Cribl Cloud deployment.":
      "Cribl Search vous permet d'interroger, de récupérer et de gérer les tâches de recherche, les jeux de données et les recherches enregistrées dans votre déploiement Cribl Cloud.",
    "Delete instance":
      "Supprimer l'instance",
    "Edit instance":
      "Modifier l'instance",
    "e.g acme.atlassian.com":
      "p. ex., acme.atlassian.com",
    "Enable unified image, code, and API security scanning, analysis and remediation from your command line":
      "Activez l'analyse, l'examen et la correction unifiés de la sécurité des images, du code et des API depuis votre ligne de commande",
    "Endpoint detection and response to manage and query malops, connections and processes.":
      "Détection et réponse sur les endpoints pour gérer et interroger les malops, les connexions et les processus.",
    "Enter the Binalyze AIR Server URL and API Key.":
      "Saisissez l'URL du serveur Binalyze AIR et la clé API.",
    "Fetching Issue Types":
      "Récupération des types de ticket",
    "File threat intelligence":
      "Renseignement sur les menaces liées aux fichiers",
    "First time fetching":
      "Première récupération",
    "Go to the API token or integrations section.":
      "Accédez à la section des jetons d'API ou des intégrations.",
    "In Cortex, create a Binalyze AIR Extended integration instance.":
      "Dans Cortex, créez une instance d'intégration Binalyze AIR Extended.",
    "In order to complete the onboarding, the domain path should be approved in the Platform Egress. A request was send on your behalf and once approved you will be able to onboard again":
      "Pour terminer l'intégration, le chemin du domaine doit être approuvé dans Platform Egress. Une demande a été envoyée en votre nom et, une fois approuvée, vous pourrez de nouveau effectuer l'intégration.",
    "Incident":
      "Incident",
    "Incident Category":
      "Catégorie d'incident",
    "Incident Module":
      "Module d'incident",
    "Incident Rules":
      "Règles d'incident",
    "Incident Status":
      "Statut de l'incident",
    "Integration with DFIRe (Digital Forensics and Incident Response) platform for case management and IOC indicator tracking.":
      "Intégration avec la plateforme DFIRe (Digital Forensics and Incident Response) pour la gestion des cas et le suivi des indicateurs IOC.",
    "Intelligence":
      "Renseignement",
    "Intelligence Category":
      "Catégorie de renseignement",
    "Intelligence Search":
      "Recherche de renseignement",
    "Locking mechanism that prevents concurrent execution of different tasks.":
      "Mécanisme de verrouillage qui empêche l'exécution simultanée de différentes tâches.",
    "Log in to Binalyze AIR.":
      "Connectez-vous à Binalyze AIR.",
    "Log in to your Brandefense account at":
      "Connectez-vous à votre compte Brandefense à l'adresse :",
    "Malware dynamic analysis sandboxing.":
      "Sandboxing pour l'analyse dynamique des malwares.",
    "Manage Endpoints using Cylance protect.":
      "Gérez les endpoints avec Cylance Protect.",
    "Max Results":
      "Nombre maximal de résultats",
    "Maximum incidents per fetch":
      "Nombre maximal d'incidents par récupération",
    "Maximum number of incidents to fetch per cycle.":
      "Nombre maximal d'incidents à récupérer par cycle.",
    "No support or maintenance is provided by the author. Customers are encouraged to engage with the user community for questions and guidance at the":
      "L'auteur ne fournit aucun support ni aucune maintenance. Nous encourageons les clients à poser leurs questions et à demander conseil auprès de la communauté d'utilisateurs :",
    "Ownership Type":
      "Type de propriété",
    "Pack also helps with integration with Cortex and provides pre-made playbooks/templates to ease integration use.":
      "Le pack facilite également l'intégration avec Cortex et fournit des playbooks/modèles prédéfinis pour simplifier l'utilisation de l'intégration.",
    "Paste your Bitbucket Server / Data Center repository URL into the 'Base URL' field below. Project Admin permissions are required.":
      "Collez l'URL du dépôt Bitbucket Server / Data Center dans le champ « URL de base » ci-dessous. Les autorisations Project Admin sont requises.",
    "Reliability of the source providing the intelligence data.":
      "Fiabilité de la source fournissant les données de renseignement.",
    "Repositories were last updated on":
      "Dernière mise à jour des dépôts :",
    "Review the requested permissions, and select":
      "Vérifiez les autorisations demandées, puis sélectionnez",
    "to connect Prisma Cloud to Bitbucket.":
      "pour connecter Prisma Cloud à Bitbucket.",
    "selected":
      "sélectionnés",
    "Selected":
      "Sélectionné",
    "Selection Options":
      "Options de sélection",
    "Server URL (e.g. https://api.brandefense.io)":
      "URL du serveur (p. ex., https://api.brandefense.io)",
    "Setup":
      "Configuration",
    "Stay ahead of cyber threats with Darkmon TIP - real-time threat intelligence from the Clear, Deep, and Dark Web tailored to your assets.":
      "Gardez une longueur d'avance sur les cybermenaces avec Darkmon TIP : des renseignements sur les menaces en temps réel issus du Web clair, profond et sombre, adaptés à vos actifs.",
    "Stay ahead of cyber threats with Darkmon TIP - real-time threat intelligence from the Clear, Deep, and Dark Web tailored to your assets. Pack also helps with integration with Cortex and provides pre-made playbooks/templates to ease integration use.":
      "Gardez une longueur d'avance sur les cybermenaces avec Darkmon TIP : des renseignements sur les menaces en temps réel issus du Web clair, profond et sombre, adaptés à vos actifs. Le pack facilite également l'intégration avec Cortex et fournit des playbooks/modèles prédéfinis pour simplifier l'utilisation de l'intégration.",
    "Steps":
      "Étapes",
    "Sync Now":
      "Synchroniser maintenant",
    "Table data is being updated":
      "Les données du tableau sont en cours de mise à jour",
    "The Binalyze AIR Server URL, for example https://air.example.com.":
      "L'URL du serveur Binalyze AIR, par exemple https://air.example.com.",
    "The CrowdStrike Falcon OAuth 2 API (formerly the Falcon Firehose API), enables fetching and resolving detections, searching devices, getting behaviors by ID, containing hosts, and lifting host containment.":
      "L'API OAuth 2 de CrowdStrike Falcon (anciennement l'API Falcon Firehose) permet de récupérer et de résoudre des détections, de rechercher des appareils, d'obtenir des comportements par ID, d'isoler des hôtes et de lever l'isolement d'hôtes.",
    "The Databricks Data Intelligence Platform":
      "Databricks Data Intelligence Platform",
    "This integration uses the Cortex API to access all the core services and capabilities of the Cortex platform.":
      "Cette intégration utilise l'API Cortex pour accéder à tous les services et fonctionnalités principaux de la plateforme Cortex.",
    "This parameter allows you to filter fetching by issue type.":
      "Ce paramètre vous permet de filtrer la récupération par type de ticket.",
    "This parameter allows you to filter intelligence values by categories.":
      "Ce paramètre vous permet de filtrer les valeurs de renseignement par catégories.",
    "This parameter allows you to filter intelligence values with keyword search.":
      "Ce paramètre vous permet de filtrer les valeurs de renseignement par recherche de mots-clés.",
    "This parameter will request and show the incident's related module category.":
      "Ce paramètre demandera et affichera la catégorie du module associé à l'incident.",
    "This parameter will request and show the incident's related module.":
      "Ce paramètre demandera et affichera le module associé à l'incident.",
    "This parameter will request and show the incident's related template. Don't select any to get all alerts.":
      "Ce paramètre demandera et affichera le modèle associé à l'incident. N'en sélectionnez aucun pour obtenir toutes les alertes.",
    "This parameter will request incident's by status.":
      "Ce paramètre demandera les incidents par statut.",
    "Use the CyberArk EPM integration to activate and deactivate CyberArk EPM risk plans for specific endpoints.":
      "Utilisez l'intégration CyberArk EPM pour activer et désactiver les plans de risque CyberArk EPM pour des endpoints spécifiques.",
    "Use this integration to connect Cortex to Binalyze AIR for endpoint forensic acquisition, triage, case, task, repository, and isolation operations.":
      "Utilisez cette intégration pour connecter Cortex à Binalyze AIR afin d'effectuer des opérations d'acquisition forensique des endpoints, de triage, de gestion des cas, des tâches, des dépôts et d'isolement.",

    // --- Batch: strings from the Collector export #6 (Cisco/CircleCI/Doppel/EWS/Entra ID docs, tooltips, marketplace card descriptions) ---
    // Fragments such as "and", "or the", "Follow the", "Go to the", "Run the", "Select the", "To get the", "To use the" are intentionally NOT registered.
    ": There is no need to enter a value in the":
      ": Il n'est pas nécessaire de saisir une valeur dans le champ",
    "field. It can be left blank. (Visible only on 6.0.2 and lower versions).":
      ". Il peut rester vide. (Visible uniquement dans les versions 6.0.2 et antérieures).",
    "(API token)":
      "(jeton d'API)",
    "(Stealthwatch Cloud API key. Should be in the form of \"ApiKey <username>:<apikey>\")":
      "(Clé API de Stealthwatch Cloud. Doit avoir le format « ApiKey <username>:<apikey> »)",
    "Stealthwatch Cloud API key. Should be in the form of \"ApiKey <username>:<apikey>\"":
      "Clé API de Stealthwatch Cloud. Doit avoir le format « ApiKey <username>:<apikey> »",
    "Access to Cisco SMA":
      "Accès à Cisco SMA",
    "Access your Cisco Umbrella account dashboard.":
      "Accédez au tableau de bord de votre compte Cisco Umbrella.",
    "Add the following environment variables:":
      "Ajoutez les variables d'environnement suivantes :",
    "API Secret":
      "Secret API",
    "API token":
      "Jeton d'API",
    "API Token":
      "Jeton d'API",
    "API Version(Support values: v1, v2, v3)":
      "Version de l'API (valeurs prises en charge : v1, v2, v3)",
    "Authentication from a REST API Client":
      "Authentification depuis un client d'API REST",
    "Base URL, e.g., https://XXX.eu.iphmx.com":
      "URL de base, p. ex., https://XXX.eu.iphmx.com",
    "Before you begin, you'll need to create a new context in CircleCI named \"cortex-secrets\" and add your API key and API ID as environment variables.":
      "Avant de commencer, vous devez créer un nouveau contexte dans CircleCI nommé « cortex-secrets » et y ajouter votre clé API et votre ID d'API en tant que variables d'environnement.",
    "Please copy and use the variable names suggested below.":
      "Copiez et utilisez les noms de variables suggérés ci-dessous.",
    "If needed, you can generate a new token using the link below, copy and use the generated values as your secrets values.":
      "Si nécessaire, vous pouvez générer un nouveau jeton à l'aide du lien ci-dessous, puis copier et utiliser les valeurs générées comme valeurs de vos secrets.",
    "Before you begin, you'll need to create a new context in CircleCI named \"cortex-secrets\" and add your API key and API ID as environment variables. Please copy and use the variable names suggested below. If needed, you can generate a new token using the link below, copy and use the generated values as your secrets values.":
      "Avant de commencer, vous devez créer un nouveau contexte dans CircleCI nommé « cortex-secrets » et y ajouter votre clé API et votre ID d'API en tant que variables d'environnement. Copiez et utilisez les noms de variables suggérés ci-dessous. Si nécessaire, vous pouvez générer un nouveau jeton à l'aide du lien ci-dessous, puis copier et utiliser les valeurs générées comme valeurs de vos secrets.",
    "By clicking Authorize, you authorize Palo Alto Networks to: (i) ingest data and perform actions such as suppression on your behalf and (ii) process this data to deliver services to you. You confirm that you have the right to provide this authorization.":
      "En cliquant sur « Autoriser », vous autorisez Palo Alto Networks à : (i) ingérer des données et effectuer des actions, telles que la suppression, en votre nom et (ii) traiter ces données afin de vous fournir des services. Vous confirmez avoir le droit de donner cette autorisation.",
    "c. Provide a":
      "c. Indiquez un",
    "for your token (e.g., “Cortex Integration”).":
      "pour votre jeton (p. ex., « Cortex Integration »).",
    "CI/CD System Scan":
      "Analyse du système CI/CD",
    "Code Scan":
      "Analyse du code",
    "Enable CI/CD system scanning":
      "Activer l'analyse du système CI/CD",
    "System scanning":
      "Analyse du système",
    "Configure Job":
      "Configurer la tâche",
    "Map repositories":
      "Mapper les dépôts",
    "Connect Checkmarx One":
      "Connecter Checkmarx One",
    "Sign in to Checkmarx One":
      "Se connecter à Checkmarx One",
    "CircleCI personal API token":
      "Jeton d'API personnel CircleCI",
    "Personal API token":
      "Jeton d'API personnel",
    "Copy the personal API token to clipboard and paste it here.":
      "Copiez le jeton d'API personnel dans le presse-papiers et collez-le ici.",
    "Create a personal API token in CircleCI.":
      "Créez un jeton d'API personnel dans CircleCI.",
    "Create a dedicated user in the organization’s VCS to integrate CircleCI with Cortex, to prevent the integration breaking if the user leaves the organization":
      "Créez un utilisateur dédié dans le VCS de l'organisation pour intégrer CircleCI à Cortex, afin d'éviter que l'intégration ne cesse de fonctionner si l'utilisateur quitte l'organisation",
    "Ensure that the dedicated user follows all the organization’s projects in CircleCI":
      "Assurez-vous que l'utilisateur dédié suit tous les projets de l'organisation dans CircleCI",
    "Login to CircleCI with your version control system (VCS) user credentials.":
      "Connectez-vous à CircleCI avec les identifiants utilisateur de votre système de contrôle de version (VCS).",
    "To enable Cortex Application Security visibility across all CircleCI projects, you must log in to CircleCI using your VCS credentials Note: the CircleCI user base is integrated with the VCS, which means that CircleCI users inherit the permissions granted to VCS users.":
      "Pour activer la visibilité de Cortex Application Security sur tous les projets CircleCI, vous devez vous connecter à CircleCI avec vos identifiants VCS. Remarque : la base d'utilisateurs de CircleCI est intégrée au VCS, ce qui signifie que les utilisateurs de CircleCI héritent des autorisations accordées aux utilisateurs du VCS.",
    "Cisco recommends that you use different accounts for interfacing with the API and the Firepower User Interface. Credentials cannot be used for both interfaces simultaneously, and will be logged out without warning if used for both.":
      "Cisco recommande d'utiliser des comptes différents pour l'API et pour l'interface utilisateur de Firepower. Les identifiants ne peuvent pas être utilisés simultanément pour les deux interfaces et seront déconnectés sans avertissement s'ils sont utilisés pour les deux.",
    "Collect logs and data from Dropbox.":
      "Collectez les journaux et les données depuis Dropbox.",
    "Configuring Cisco ASA":
      "Configuration de Cisco ASA",
    "Connect to Cisco Umbrella:":
      "Se connecter à Cisco Umbrella :",
    "DBot Score Suspicious Threshold (-100 to 100)":
      "Seuil suspect du score DBot (de -100 à 100)",
    "Score Malicious Threshold (-100 to 100)":
      "Seuil malveillant du score (de -100 à 100)",
    "Default is 50. Maximum is 100.":
      "La valeur par défaut est 50. Le maximum est 100.",
    "Make sure the malicious threshold is less than the suspicious threshold.":
      "Assurez-vous que le seuil malveillant est inférieur au seuil suspect.",
    "Make sure the suspicious threshold is greater than the malicious threshold.":
      "Assurez-vous que le seuil suspect est supérieur au seuil malveillant.",
    "Deprecated. Use ***EWS Extension Online Powershell v3*** instead.":
      "Obsolète. Utilisez ***EWS Extension Online Powershell v3*** à la place.",
    "Deprecated. Use the Elasticsearch v2 integration instead.":
      "Obsolète. Utilisez l'intégration Elasticsearch v2 à la place.",
    "Doppel is a Modern Digital Risk Protection Solution, that detects the phishing and brand cyber attacks on the emerging channels. Doppel scans millions of channels online which includes, social media, domains, paid ads, dark web, emerging channels, etc. Doppel can identify the malicious content and cyber threats, and enables their customers to take down the digital risks proactively.":
      "Doppel est une solution moderne de protection contre les risques numériques qui détecte les attaques de phishing et les cyberattaques contre la marque sur les canaux émergents. Doppel analyse des millions de canaux en ligne, notamment les réseaux sociaux, les domaines, les publicités payantes, le dark web et les canaux émergents. Doppel peut identifier les contenus malveillants et les cybermenaces, et permet à ses clients de supprimer de manière proactive les risques numériques.",
    "The Cortex pack for Doppel mirrors the alerts created by Doppel as Cortex incidents. The pack also contains the commands to perform different operations on Doppel alerts.":
      "Le pack Cortex pour Doppel réplique les alertes créées par Doppel sous forme d'incidents Cortex. Le pack contient également les commandes permettant d'effectuer différentes opérations sur les alertes Doppel.",
    "Doppel is a Modern Digital Risk Protection Solution, that detects the phishing and brand cyber attacks on the emerging channels. Doppel scans millions of channels online which includes, social media, domains, paid ads, dark web, emerging channels, etc. Doppel can identify the malicious content and cyber threats, and enables their customers to take down the digital risks proactively. The Cortex pack for Doppel mirrors the alerts created by Doppel as Cortex incidents. The pack also contains the commands to perform different operations on Doppel alerts.":
      "Doppel est une solution moderne de protection contre les risques numériques qui détecte les attaques de phishing et les cyberattaques contre la marque sur les canaux émergents. Doppel analyse des millions de canaux en ligne, notamment les réseaux sociaux, les domaines, les publicités payantes, le dark web et les canaux émergents. Doppel peut identifier les contenus malveillants et les cybermenaces, et permet à ses clients de supprimer de manière proactive les risques numériques. Le pack Cortex pour Doppel réplique les alertes créées par Doppel sous forme d'incidents Cortex. Le pack contient également les commandes permettant d'effectuer différentes opérations sur les alertes Doppel.",
    "e.g., 2022-01-01T00:00:00.000Z, 12 hours, 7 days, 3 months, now.":
      "p. ex., 2022-01-01T00:00:00.000Z, 12 hours, 7 days, 3 months, now.",
    "Timestamp in ISO format or <number> <time unit>,":
      "Horodatage au format ISO ou « <number> <time unit> »,",
    "Timestamp in ISO format or <number> <time unit>, e.g., 2022-01-01T00:00:00.000Z, 12 hours, 7 days, 3 months, now.":
      "Horodatage au format ISO ou « <number> <time unit> » (p. ex., 2022-01-01T00:00:00.000Z, 12 hours, 7 days, 3 months, now).",
    "First fetch":
      "Première récupération",
    "First fetch timestamp (<number> <time unit>, e.g., 12 hours, 7 days).":
      "Horodatage de la première récupération (<number> <time unit>, p. ex., 12 hours, 7 days).",
    "Enable sftp on your server CheckPoint guide to walk you through: https://supportcenter.checkpoint.com/supportcenter/portal?eventSubmit_doGoviewsolutiondetails=&solutionid=sk82281":
      "Activez sftp sur votre serveur. Consultez le guide CheckPoint pour obtenir de l'aide pas à pas : https://supportcenter.checkpoint.com/supportcenter/portal?eventSubmit_doGoviewsolutiondetails=&solutionid=sk82281",
    "Enter instance display name here":
      "Saisissez ici le nom d'affichage de l'instance",
    "Example: Tenant name":
      "Exemple : nom du tenant",
    "Tenant name":
      "Nom du tenant",
    "The unique string generated in the IAM portal":
      "La chaîne unique générée dans le portail IAM",
    "Entra ID Groups integration (formely Azure Active Directory Groups) enables you to create and manage different types of groups and group functionality according to your requirements.":
      "L'intégration Entra ID Groups (anciennement Azure Active Directory Groups) vous permet de créer et de gérer différents types de groupes et fonctionnalités de groupe selon vos besoins.",
    "The Entra ID Users integration (formerly Azure Active Directory Users) is a Unified gateway to security insights - all from a unified Microsoft Graph User API.":
      "L'intégration Entra ID Users (anciennement Azure Active Directory Users) est une passerelle unifiée vers les informations de sécurité, le tout via une API utilisateur Microsoft Graph unifiée.",
    "Use the Entra ID Applications integration (formerly Azure Active Directory Applications) to manage authorized applications.":
      "Utilisez l'intégration Entra ID Applications (anciennement Azure Active Directory Applications) pour gérer les applications autorisées.",
    "Use the Entra ID Identity And Access integration to manage roles and members (formerly Azure Active Directory Identity And Access).":
      "Utilisez l'intégration Entra ID Identity And Access pour gérer les rôles et les membres (anciennement Azure Active Directory Identity And Access).",
    "Exchange Web Services and Office 365 (mail).":
      "Exchange Web Services et Office 365 (messagerie).",
    "Exchange Web Services mail sender. Note: this integration supports Office 365 basic authentication only. If you are using Office 365, we recommend using the EWS O365 Integration instead, which supports modern authentication (oauth2). Deprecated. Use EWS v2 instead":
      "Expéditeur de messages Exchange Web Services. Remarque : cette intégration prend uniquement en charge l'authentification de base d'Office 365. Si vous utilisez Office 365, nous vous recommandons d'utiliser plutôt l'intégration EWS O365, qui prend en charge l'authentification moderne (oauth2). Obsolète. Utilisez EWS v2 à la place",
    "The new EWS O365 integration uses OAuth 2.0 protocol and can be used with Exchange Online and Office 365 (mail).":
      "La nouvelle intégration EWS O365 utilise le protocole OAuth 2.0 et peut être utilisée avec Exchange Online et Office 365 (messagerie).",
    "Use the EWS Extension Online Powershell v3 integration to get information about mailboxes and users in your organization. This integration can also retrieve and modify Tenant Allow/Block Lists.":
      "Utilisez l'intégration EWS Extension Online Powershell v3 pour obtenir des informations sur les boîtes aux lettres et les utilisateurs de votre organisation. Cette intégration peut également récupérer et modifier les listes d'autorisation/de blocage du tenant.",
    "Feed Name":
      "Nom du flux",
    "Filter by":
      "Filtrer par",
    "Filter operator":
      "Opérateur de filtre",
    "Filter value":
      "Valeur du filtre",
    "Recipient filter operator":
      "Opérateur de filtre de destinataire",
    "Recipient filter value":
      "Valeur du filtre de destinataire",
    "Message field by which to filter the results.":
      "Champ de message selon lequel filtrer les résultats.",
    "Operator on the message field.":
      "Opérateur du champ de message.",
    "Recipient filter value to fetch by message field.":
      "Valeur du filtre de destinataire à récupérer par champ de message.",
    "Recipient operator filter.":
      "Filtre d'opérateur de destinataire.",
    "The value to search for.":
      "La valeur à rechercher.",
    "The date or number of days from when to start fetching indicators.":
      "La date ou le nombre de jours à partir desquels commencer à récupérer les indicateurs.",
    "The Traffic Light Protocol (TLP) designation to apply to indicators fetched from the feed.":
      "La désignation Traffic Light Protocol (TLP) à appliquer aux indicateurs récupérés depuis le flux.",
    "HTTP requests timeout in seconds. The default is 60 seconds.":
      "Délai d'expiration des requêtes HTTP en secondes. La valeur par défaut est de 60 secondes.",
    "Server URL for Cisco Stealthwatch console e.g.: https://ip:port/.":
      "URL du serveur de la console Cisco Stealthwatch, p. ex. : https://ip:port/.",
    "Getting Credentials":
      "Obtention des identifiants",
    "How to configure the integration:":
      "Comment configurer l'intégration :",
    "Step 1: Obtain Cisco Umbrella Investigate API Key & Secret":
      "Étape 1 : Obtenir la clé API et le secret de Cisco Umbrella Investigate",
    "Step 2: Configure Cortex Credentials":
      "Étape 2 : Configurer les identifiants Cortex",
    "Navigate to API Keys:":
      "Accédez à API Keys :",
    "If you are using ASAv (Cisco Adaptive Security Virtual Appliance) don’t forget to check the ASAv box.":
      "Si vous utilisez ASAv (Cisco Adaptive Security Virtual Appliance), n'oubliez pas de cocher la case ASAv.",
    "Is ASAv":
      "ASAv",
    "In the Smart Console, enable the web api: Management & Setting → Blades → Management API, Advanced Setting → All IP address":
      "Dans Smart Console, activez l'API web : Management & Setting → Blades → Management API, Advanced Setting → All IP address",
    "In time zone configuration settings, set the following:":
      "Dans les paramètres de configuration du fuseau horaire, définissez les éléments suivants :",
    "In your threat grid instance, click your user name at the right top corner.":
      "Dans votre instance Threat Grid, cliquez sur votre nom d'utilisateur dans le coin supérieur droit.",
    "The time zone should be configured to GMT +00:00.":
      "Le fuseau horaire doit être configuré sur GMT +00:00.",
    "Require users to enter additional password":
      "Exiger des utilisateurs qu'ils saisissent un mot de passe supplémentaire",
    "Select my account.":
      "Sélectionnez mon compte.",
    "Select region":
      "Sélectionner la région",
    "Server Port (e.g. 4434)":
      "Port du serveur (p. ex., 4434)",
    "Server URL (e.g. example.net or 8.8.8.8)":
      "URL du serveur (p. ex., example.net ou 8.8.8.8)",
    "Server URL (e.g., https://192.168.0.1)":
      "URL du serveur (p. ex., https://192.168.0.1)",
    "Stealthwatch's server URL":
      "URL du serveur Stealthwatch",
    "Supports FMC 6.2.3 and above":
      "Prend en charge FMC 6.2.3 et versions ultérieures",
    "Search for and analyze data in real time.":
      "Recherchez et analysez des données en temps réel.",
    "Search for and analyze data in real time. Supports version 6 and later.":
      "Recherchez et analysez des données en temps réel. Prend en charge la version 6 et les versions ultérieures.",
    "Supports version 6 and later.":
      "Prend en charge la version 6 et les versions ultérieures.",
    "The first time you connect to the REST API you may receive an error that the connection is not secure due to an invalid certificate. Add an exception in your browser to use the certificate and accept the connection.":
      "La première fois que vous vous connectez à l'API REST, vous pouvez recevoir une erreur indiquant que la connexion n'est pas sécurisée en raison d'un certificat non valide. Ajoutez une exception dans votre navigateur pour utiliser le certificat et accepter la connexion.",
    "The user role should have access privilages to the following:":
      "Le rôle utilisateur doit disposer des privilèges d'accès aux éléments suivants :",
    "The username and password credentials are used to authenticate with the Cisco SMA API for the provided instance URL.":
      "Les identifiants (nom d'utilisateur et mot de passe) servent à s'authentifier auprès de l'API Cisco SMA pour l'URL d'instance fournie.",
    "The username and password required by this integration are the same as the credentials used to login into the Cisco Stelathwatch console.":
      "Le nom d'utilisateur et le mot de passe requis par cette intégration sont identiques aux identifiants utilisés pour se connecter à la console Cisco Stealthwatch.",
    "Under the API Key section in the left you will see your API.":
      "Dans la section API Key à gauche, vous verrez votre API.",
    "Use Docker V2 connector in Cortex Cloud to scan and secure container images from any container registry that supports the Docker V2 protocol, ensuring comprehensive security and compliance.":
      "Utilisez le connecteur Docker V2 dans Cortex Cloud pour analyser et sécuriser les images de conteneur de tout registre de conteneurs prenant en charge le protocole Docker V2, et garantir une sécurité et une conformité complètes.",
    "User Credentials":
      "Identifiants utilisateur",
    "When using Cortex credentials, insert your API key as the credential username and your API secret as the password.":
      "Si vous utilisez des identifiants Cortex, saisissez votre clé API comme nom d'utilisateur de l'identifiant et votre secret API comme mot de passe.",
    "With Token Based Authentication you obtain a token by providing your username and password. You use this token to access an HTTP service for a limited time period without the need for the username and password with every request. In other words, to eliminate the need for authenticating with your username and password with each request.":
      "Avec l'authentification par jeton, vous obtenez un jeton en fournissant votre nom d'utilisateur et votre mot de passe. Vous utilisez ce jeton pour accéder à un service HTTP pendant une durée limitée, sans avoir à fournir le nom d'utilisateur et le mot de passe à chaque requête. En d'autres termes, il n'est plus nécessaire de vous authentifier avec votre nom d'utilisateur et votre mot de passe à chaque requête.",
    "OAuth Client":
      "Client OAuth",
    "Use the generated API key as the":
      "Utilisez la clé API générée comme",
    "Use the generated API secret as the":
      "Utilisez le secret API généré comme",

    // --- Batch: strings from the Collector export #7 (Code42/Contentful/Claude/Cortex CLI wizard, parameter labels and tooltips) ---
    // Fragments such as "and", "or the", "Follow the", "Go to the", "Run the", "Select the", "To get the", "To use the" are intentionally NOT registered.
    "(API Key ID, API Key)":
      "(ID de clé API, clé API)",
    "Adjust and refine your configuration settings":
      "Ajustez et affinez vos paramètres de configuration",
    "After this API Client is set up, use the API Client ID and Secret (in the “password” field) to configure the Code42 integration.":
      "Une fois ce client API configuré, utilisez l'ID et le secret du client API (dans le champ « password ») pour configurer l'intégration Code42.",
    "Alert severities to fetch when fetching incidents":
      "Gravités des alertes à récupérer lors de la récupération des incidents",
    "Alerts to fetch per run; note that increasing this value may result in slow performance if too many results are returned at once":
      "Alertes à récupérer par exécution ; notez qu'augmenter cette valeur peut ralentir les performances si trop de résultats sont renvoyés en une seule fois",
    "Anthropic Claude (Standard Connector)":
      "Anthropic Claude (connecteur standard)",
    "API Client ID":
      "ID de client API",
    "API Client Secret":
      "Secret du client API",
    "API Gateway URL for your Code42 environment":
      "URL de la passerelle d'API de votre environnement Code42",
    "API Key ID":
      "ID de clé API",
    "Authenticate":
      "Authentifier",
    "Authenticate using an Anthropic Claude Compliance Access Key (sk-ant-api01-...)":
      "Authentifiez-vous avec une clé d'accès de conformité Anthropic Claude (sk-ant-api01-...)",
    "Base marketplace url":
      "URL de base du marketplace",
    "Capabilities status":
      "Statut des fonctionnalités",
    "Cisco Umbrella Investigate base URL.":
      "URL de base de Cisco Umbrella Investigate.",
    "Code42 provides simple, fast detection and response to everyday data loss from insider threats by focusing on customer data on endpoints and the cloud.":
      "Code42 offre une détection et une réponse simples et rapides face aux pertes de données quotidiennes causées par les menaces internes, en se concentrant sur les données des clients sur les endpoints et dans le cloud.",
    "Compliance Access Key":
      "Clé d'accès de conformité",
    "Configure":
      "Configurer",
    "Contentful Access Token":
      "Jeton d'accès Contentful",
    "Copy":
      "Copier",
    "Copy and paste the key.":
      "Copiez et collez la clé.",
    "Copy the command and paste it into your terminal or download it.":
      "Copiez la commande et collez-la dans votre terminal, ou téléchargez-la.",
    "Core Server URL":
      "URL du serveur Core",
    "Cortex integrates with CI/CD pipelines, helping organizations shift-left. Use the Cortex CLI command line tool to scan container images for vulnerabilities, malware, and secrets. To run and authenticate Cortex CLI, follow the steps below.":
      "Cortex s'intègre aux pipelines CI/CD et aide les organisations à adopter l'approche shift-left. Utilisez l'outil en ligne de commande Cortex CLI pour analyser les images de conteneur à la recherche de vulnérabilités, de malwares et de secrets. Pour exécuter et authentifier Cortex CLI, suivez les étapes ci-dessous.",
    "create an API Client":
      "créer un client API",
    "Create instance":
      "Créer l'instance",
    "Default timeout (seconds) for wait on locks to be released":
      "Délai d'expiration par défaut (secondes) pour l'attente de la libération des verrous",
    "First fetch time range (<number> <time unit>, e.g., 1 hour, 30 minutes)":
      "Plage de temps de la première récupération (<number> <time unit>, p. ex., 1 hour, 30 minutes)",
    "For Cortex or Cortex XSIAM, use the Copy API URL button on the API Keys page. For Cortex, use the server URL.":
      "Pour Cortex ou Cortex XSIAM, utilisez le bouton Copy API URL de la page API Keys. Pour Cortex, utilisez l'URL du serveur.",
    "From the ID column, copy the Key ID.":
      "Dans la colonne ID, copiez l'ID de la clé.",
    "Generate an API Key and API Key ID":
      "Générer une clé API et un ID de clé API",
    "Go to Settings -> Configurations -> API Keys.":
      "Accédez à Settings -> Configurations -> API Keys.",
    "Include the list of files in returned incidents.":
      "Inclure la liste des fichiers dans les incidents renvoyés.",
    "Instance configuration completed":
      "Configuration de l'instance terminée",
    "Latest version":
      "Dernière version",
    "Make sure your API key has the proper permissions. For more information, please refer to the":
      "Assurez-vous que votre clé API dispose des autorisations appropriées. Pour plus d'informations, consultez :",
    "Marketplace content packs":
      "Packs de contenu du marketplace",
    "Please follow the documentation below for step by step guide on how to onboard your Contentful instance":
      "Suivez la documentation ci-dessous pour obtenir un guide pas à pas sur l'intégration de votre instance Contentful",
    "Review your instance configuration":
      "Vérifiez la configuration de votre instance",
    "Run automated actions and remediation commands against the connected service.":
      "Exécutez des actions automatisées et des commandes de correction sur le service connecté.",
    "SaaS Posture Configuration Monitoring":
      "Surveillance de la configuration de la posture SaaS",
    "Scan and protect data across the Claude service":
      "Analysez et protégez les données sur l'ensemble du service Claude",
    "Select OS":
      "Sélectionner le système d'exploitation",
    "Start typing..":
      "Commencez à saisir..",
    "Sub capabilities":
      "Sous-fonctionnalités",
    "Sync integration cache":
      "Synchroniser le cache de l'intégration",
    "The access token is used to authenticate requests to the Contentful Management API. It must have the required permissions to access your organization's configuration.":
      "Le jeton d'accès sert à authentifier les requêtes envoyées à l'API de gestion Contentful. Il doit disposer des autorisations nécessaires pour accéder à la configuration de votre organisation.",
    "The Core Locking integration allows prevention of concurrent execution of scripts or commands, using a wait-lock-release flow (mutex).":
      "L'intégration Core Locking permet d'empêcher l'exécution simultanée de scripts ou de commandes grâce à un flux d'attente, de verrouillage et de libération (mutex).",
    "To authenticate with Cortex CLI, grant it executable permissions and then copy the API key and API key ID below and substitute it with $[CORTEX_API_KEY] and $[CORTEX_API_KEY_ID].":
      "Pour vous authentifier avec Cortex CLI, accordez-lui les droits d'exécution, puis copiez la clé API et l'ID de clé API ci-dessous et remplacez-en $[CORTEX_API_KEY] et $[CORTEX_API_KEY_ID].",
    "To configure this integration, you will need to":
      "Pour configurer cette intégration, vous devez",
    "within the Code42 console with the following permissions:":
      "dans la console Code42 avec les autorisations suivantes :",
    "Use tenant":
      "Utiliser le tenant",
    "Use the lock name argument to support multiple locks in different flows.":
      "Utilisez l'argument lock name pour prendre en charge plusieurs verrous dans différents flux.",
    "Verification pending":
      "Vérification en attente",
    "Verification Pending":
      "Vérification en attente",
    "Whether API calls should be made to the current tenant instead of the main tenant.":
      "Indique si les appels d'API doivent être effectués vers le tenant actuel plutôt que vers le tenant principal.",
    "Whether authentication should be using \"Standard\" API key or \"Advanced\" API key. For XSOAR version < 8.0.0, choose \"Standard\".":
      "Indique si l'authentification doit utiliser une clé API « Standard » ou « Advanced ». Pour les versions de XSOAR antérieures à 8.0.0, choisissez « Standard ».",
    "Whether to sync the integration cache with the database (Available from Cortex).":
      "Indique s'il faut synchroniser le cache de l'intégration avec la base de données (disponible à partir de Cortex).",
    "With upload results permissions":
      "Avec les autorisations de téléversement des résultats",

    // --- Batch: strings from the Collector export #8 (CrowdStrike/CyberArk EPM/Cybereason/Cribl parameter labels, tooltips and integration card descriptions) ---
    // Fragments such as "and", "The", "In the", "by searching for", "Do not enable", "To get an API client ID and secret, contact" are intentionally NOT registered.
    "(Application ID, Application Secret)":
      "(ID d'application, secret d'application)",
    "(Client ID, Secret)":
      "(ID client, secret)",
    "(Credentials, Password)":
      "(identifiants, mot de passe)",
    "(Tenant API Key)":
      "(clé API du tenant)",
    "(Deprecated) Required for local(EPM) authentication only. This parameter is deprecated and no longer used.":
      "(Obsolète) Requis uniquement pour l'authentification locale (EPM). Ce paramètre est obsolète et n'est plus utilisé.",
    "Advanced threat protection with added local management controls.":
      "Protection avancée contre les menaces avec contrôles de gestion locale supplémentaires.",
    "Advanced: Time in minutes to look back when fetching events and detections":
      "Avancé : durée en minutes de la période rétroactive lors de la récupération des événements et des détections",
    "Advanced: Time in minutes to look back when fetching incidents and detections":
      "Avancé : durée en minutes de la période rétroactive lors de la récupération des incidents et des détections",
    "An Identity and Access Management integration template.":
      "Un modèle d'intégration de gestion des identités et des accès.",
    "Application Secret":
      "Secret d'application",
    "Asset types to fetch":
      "Types d'actifs à récupérer",
    "Assets are collected and stored in datasets.":
      "Les actifs sont collectés et stockés dans des jeux de données.",
    "Assets Fetch Interval":
      "Intervalle de récupération des actifs",
    "Authenticate with an API token":
      "S'authentifier avec un jeton API",
    "Check this box to Enable Polling for Cybereason EPP Malops.":
      "Cochez cette case pour activer l'interrogation des Malops de Cybereason EPP.",
    "Choose what event types to fetch - You can choose any combination. Note: Records from the detection endpoint of the CrowdStrike Falcon UI could be of types: 'Endpoint Detection' and 'OFP Detection'.":
      "Choisissez les types d'événements à récupérer. Vous pouvez choisir n'importe quelle combinaison. Remarque : les enregistrements du point de terminaison de détection de l'interface CrowdStrike Falcon peuvent être des types « Endpoint Detection » et « OFP Detection ».",
    "Choose what incident types to fetch - You can choose any combination. Note:":
      "Choisissez les types d'incidents à récupérer. Vous pouvez choisir n'importe quelle combinaison. Remarque :",
    "Choose what incident types to fetch - You can choose any combination. Note: Records from the detection endpoint of the CrowdStrike Falcon UI could be of types: 'Endpoint Detection' and 'OFP Detection'.":
      "Choisissez les types d'incidents à récupérer. Vous pouvez choisir n'importe quelle combinaison. Remarque : les enregistrements du point de terminaison de détection de l'interface CrowdStrike Falcon peuvent être des types « Endpoint Detection » et « OFP Detection ».",
    "Records from the detection endpoint of the CrowdStrike Falcon UI could be of types: 'Endpoint Detection' and 'OFP Detection'.":
      "Les enregistrements du point de terminaison de détection de l'interface CrowdStrike Falcon peuvent être des types « Endpoint Detection » et « OFP Detection ».",
    "client_id: Service username (configured as OAuth confidential client).":
      "client_id : nom d'utilisateur du service (configuré en tant que client confidentiel OAuth).",
    "client_secret: Service user password for OAuth2 authentication.":
      "client_secret : mot de passe de l'utilisateur du service pour l'authentification OAuth2.",
    "Collect logs and data from Google Workspace.":
      "Collectez les journaux et les données de Google Workspace.",
    "Collects logs and data from a Google Cloud Platform (GCP) Pub/Sub.":
      "Collecte les journaux et les données d'un Pub/Sub Google Cloud Platform (GCP).",
    "Connect GitLab Container Registry with Cortex Cloud to scan and secure your container images, ensuring comprehensive security and compliance.":
      "Connectez GitLab Container Registry à Cortex Cloud pour analyser et sécuriser vos images de conteneur, et garantir une sécurité et une conformité complètes.",
    "Connect Harbor Container Registry with Cortex Cloud to scan and secure your container images, ensuring comprehensive security and compliance.":
      "Connectez Harbor Container Registry à Cortex Cloud pour analyser et sécuriser vos images de conteneur, et garantir une sécurité et une conformité complètes.",
    "Detections from On-Demand Scans filter query":
      "Requête de filtre des détections issues des analyses à la demande",
    "Deprecated - We recommend using GSuite Admin instead. Google apps Admin API, or GSuite":
      "Obsolète. Nous recommandons d'utiliser GSuite Admin à la place. Google apps Admin API ou GSuite",
    "Deprecated. Use FireEyeHX v2 instead.":
      "Obsolète. Utilisez FireEyeHX v2 à la place.",
    "Deprecated. Use IBM QRadar v2 or IBM QRadar v3 instead.":
      "Obsolète. Utilisez IBM QRadar v2 ou IBM QRadar v3 à la place.",
    "Deprecated. Use the IBM QRadar v3 integration instead. Fetch offenses from QRadar using Cortex. Supports API versions until 10.0. You can fetch the offenses with their related events and assets by creating a comma-separated list of event fields.":
      "Obsolète. Utilisez plutôt l'intégration IBM QRadar v3. Récupère les infractions depuis QRadar à l'aide de Cortex. Prend en charge les versions d'API jusqu'à 10.0. Vous pouvez récupérer les infractions avec leurs événements et actifs associés en créant une liste de champs d'événement séparés par des virgules.",
    "Endpoint detection and response to manage and query Cybereason Malops, Connections , Processes and many more.":
      "Détection et réponse sur les terminaux pour gérer et interroger les Malops, connexions, processus et bien plus de Cybereason.",
    "Endpoint Detections filter query":
      "Requête de filtre des détections de terminaux",
    "Endpoint Information":
      "Informations sur le terminal",
    "EPM Region-based tenant URL":
      "URL du tenant basée sur la région EPM",
    "Event Fetch types":
      "Types de récupération des événements",
    "Events Fetch Interval":
      "Intervalle de récupération des événements",
    "ExtraHop Reveal(x) for Cortex is a network detection and response solution that provides complete visibility of network communications at enterprise scale, real-time threat detections backed by machine learning, and guided investigation workflows that simplify response.":
      "ExtraHop Reveal(x) for Cortex est une solution de détection et de réponse réseau qui offre une visibilité complète sur les communications réseau à l'échelle de l'entreprise, des détections de menaces en temps réel basées sur le machine learning et des workflows d'investigation guidés qui simplifient la réponse.",
    "F5 Silverline Threat Intelligence is a cloud-based service incorporating external IP reputation and reducing threat-based communications. By identifying IP addresses and security categories associated with malicious activity, this managed service integrates dynamic lists of threatening IP addresses with the Silverline cloud-based platform, adding context-based security to policy decisions.":
      "F5 Silverline Threat Intelligence est un service cloud qui intègre la réputation IP externe et réduit les communications liées aux menaces. En identifiant les adresses IP et les catégories de sécurité associées à une activité malveillante, ce service managé intègre des listes dynamiques d'adresses IP malveillantes à la plateforme cloud Silverline, ajoutant une sécurité contextuelle aux décisions de politique.",
    "Fetch Asset types":
      "Récupérer les types d'actifs",
    "Fetch assets":
      "Récupérer les actifs",
    "Fetch Assets":
      "Récupérer les actifs",
    "Fetch assets and vulnerabilities":
      "Récupérer les actifs et les vulnérabilités",
    "Fetch by \"MALOP UPDATE TIME\" (Fetching by Malop creation time is no longer supported)":
      "Récupérer par « MALOP UPDATE TIME » (la récupération par heure de création du Malop n'est plus prise en charge)",
    "Fetch events":
      "Récupérer les événements",
    "FireEye Email Security (EX) series protects against breaches caused by advanced email attacks.":
      "La gamme FireEye Email Security (EX) protège contre les violations causées par les attaques avancées par e-mail.",
    "FireEye Endpoint Security is an integrated solution that detects and protects endpoints against known and unknown threats. This integration provides access to information about endpoints, acquisitions, alerts, indicators, and containment. You can extract critical data and effectively operate the security operations automated playbook.":
      "FireEye Endpoint Security est une solution intégrée qui détecte et protège les terminaux contre les menaces connues et inconnues. Cette intégration donne accès aux informations sur les terminaux, les acquisitions, les alertes, les indicateurs et le confinement. Vous pouvez extraire des données critiques et exploiter efficacement le playbook automatisé des opérations de sécurité.",
    "First fetch timestamp (<number> <time unit>, e.g., 12 hours, 7 days, 3 months, 1 year)":
      "Horodatage de la première récupération (<nombre> <unité de temps>, par exemple 12 hours, 7 days, 3 months, 1 year)",
    "First fetch timestamp (<number> <time unit>, e.g., 12 hours, 7 days)":
      "Horodatage de la première récupération (<nombre> <unité de temps>, par exemple 12 hours, 7 days)",
    "Flashpoint Vulnerability Feed Integration allows importing vulnerability intelligence from the Flashpoint platform, empowering teams to reduce exposure windows by identifying high-risk vulnerabilities weeks before public sources. This includes independent research, zero-day disclosures, analyst recommendations, affected and non-affected versions, and over 105,000 vulnerabilities not found in the public NVD/CVE feeds database.":
      "Flashpoint Vulnerability Feed Integration permet d'importer des renseignements sur les vulnérabilités depuis la plateforme Flashpoint, aidant les équipes à réduire les fenêtres d'exposition en identifiant les vulnérabilités à haut risque des semaines avant les sources publiques. Cela inclut des recherches indépendantes, des divulgations de vulnérabilités zero-day, des recommandations d'analystes, les versions affectées et non affectées, ainsi que plus de 105 000 vulnérabilités absentes de la base de données publique des flux NVD/CVE.",
    "FortiGate provides flawless convergence that can scale to any location: remote office, branch, campus, data center, and cloud. FortiGate always delivered on the concept of hybrid mesh firewalls with FortiManager for unified management and consistent security across complex hybrid environments. The Fortinet FortiOS operating system provides deep visibility and security across a variety of form factors.":
      "FortiGate offre une convergence sans faille qui peut évoluer vers n'importe quel site : bureau distant, succursale, campus, centre de données et cloud. FortiGate a toujours concrétisé le concept de pare-feu à maillage hybride avec FortiManager pour une gestion unifiée et une sécurité cohérente dans des environnements hybrides complexes. Le système d'exploitation Fortinet FortiOS offre une visibilité et une sécurité approfondies sur une variété de formats.",
    "Freshservice is a service management solution that allows customers to manage service requests, incidents, change requests tasks, and problem investigation.":
      "Freshservice est une solution de gestion des services qui permet aux clients de gérer les demandes de service, les incidents, les tâches de demandes de changement et l'investigation des problèmes.",
    "G Suite or Google Workspace Admin is an integration to perform an action on IT infrastructure, create users, update settings, and more administrative tasks.":
      "G Suite ou Google Workspace Admin est une intégration permettant d'effectuer une action sur l'infrastructure informatique, de créer des utilisateurs, de mettre à jour les paramètres et d'autres tâches administratives.",
    "Gmail API and user management (This integration replaces the Gmail functionality in the GoogleApps API and G Suite integration).":
      "API Gmail et gestion des utilisateurs (cette intégration remplace la fonctionnalité Gmail de l'API GoogleApps et de l'intégration G Suite).",
    "Gmail API using OAuth 2.0.":
      "API Gmail utilisant OAuth 2.0.",
    "Google Compute Engine delivers virtual machines running in Google's innovative data centers and worldwide fiber network. Compute Engine's tooling and workflow support enable scaling from single instances to global, load-balanced cloud computing.":
      "Google Compute Engine fournit des machines virtuelles fonctionnant dans les centres de données innovants de Google et son réseau mondial de fibre. Les outils et la prise en charge des workflows de Compute Engine permettent de passer d'instances uniques à un cloud computing mondial avec équilibrage de charge.",
    "Google Sheets is a spreadsheet program that is part of the free web-based Google applications to create and format spreadsheets. Use this integration to create and modify spreadsheets.":
      "Google Sheets est un tableur faisant partie des applications Google gratuites en ligne permettant de créer et de mettre en forme des feuilles de calcul. Utilisez cette intégration pour créer et modifier des feuilles de calcul.",
    "HTTP Timeout":
      "Délai d'expiration HTTP",
    "IBM QRadar SIEM helps security teams accurately detect and prioritize threats across the enterprise, supports API versions 10.1 and above. Provides intelligent insights that enable teams to respond quickly to reduce the impact of incidents.":
      "IBM QRadar SIEM aide les équipes de sécurité à détecter et à prioriser avec précision les menaces dans toute l'entreprise, et prend en charge les versions d'API 10.1 et ultérieures. Il fournit des informations intelligentes qui permettent aux équipes de réagir rapidement afin de réduire l'impact des incidents.",
    "Identity URL":
      "URL d'identité",
    "IDP Detections filter query":
      "Requête de filtre des détections IDP",
    "In new Cuckoo installations, a random API token is automatically generated for you, and located in the cuckoo.conf file. In order to authenticate with an API token, insert ‘__token’ in the “Username” textbox, and the token itself in the “Password” textbox.":
      "Dans les nouvelles installations de Cuckoo, un jeton API aléatoire est généré automatiquement et se trouve dans le fichier cuckoo.conf. Pour vous authentifier avec un jeton API, saisissez « __token » dans la zone de texte « Username » et le jeton lui-même dans la zone de texte « Password ».",
    "In order to use the CrowdStrike Falcon integration, the API client and secret must have the following scopes and permissions:":
      "Pour utiliser l'intégration CrowdStrike Falcon, le client API et le secret doivent disposer des portées et autorisations suivantes :",
    "Incident Fetch types":
      "Types de récupération des incidents",
    "Integrate Application Security with your HCP Terraform organization to gain visibility into your Terraform runs.":
      "Intégrez Application Security à votre organisation HCP Terraform pour obtenir de la visibilité sur vos exécutions Terraform.",
    "Integrate with Envoy Identity Access Management services to execute CRUD operations to employee lifecycle processes.":
      "Intégrez les services Envoy Identity Access Management pour exécuter des opérations CRUD sur les processus du cycle de vie des employés.",
    "Integrate with Exceed LMS Identity Access Management services to execute CRUD operations to employee lifecycle processes.":
      "Intégrez les services Exceed LMS Identity Access Management pour exécuter des opérations CRUD sur les processus du cycle de vie des employés.",
    "Integrate with GitHub services to perform Identity Lifecycle Management operations.":
      "Intégrez les services GitHub pour effectuer des opérations de gestion du cycle de vie des identités.",
    "Integration to GitHub API.":
      "Intégration avec l'API GitHub.",
    "Integration version of the httpv2 automation used to send HTTP requests for API calls to endpoints not associated with an existing XSOAR integration.":
      "Version d'intégration de l'automatisation httpv2 utilisée pour envoyer des requêtes HTTP pour des appels d'API vers des points de terminaison non associés à une intégration XSOAR existante.",
    "IOA filter query":
      "Requête de filtre IOA",
    "IOM filter query":
      "Requête de filtre IOM",
    "Log events are collected and stored in datasets.":
      "Les événements de journal sont collectés et stockés dans des jeux de données.",
    "Long running instance":
      "Instance de longue durée",
    "Long running instance for Spotlight vulnerabilities":
      "Instance de longue durée pour les vulnérabilités Spotlight",
    "Manage identity and access control for Google Cloud Platform resources.":
      "Gérez l'identité et le contrôle d'accès des ressources Google Cloud Platform.",
    "Mobile Detections filter query":
      "Requête de filtre des détections mobiles",
    "NGSIEM automated leads fetch query":
      "Requête de récupération des pistes automatisées NGSIEM",
    "NGSIEM cases fetch query":
      "Requête de récupération des cas NGSIEM",
    "NGSIEM Detection fetch query":
      "Requête de récupération des détections NGSIEM",
    "NGSIEM incidents fetch query":
      "Requête de récupération des incidents NGSIEM",
    "OFP Detections filter query":
      "Requête de filtre des détections OFP",
    "Onboard your GitHub Enterprise on-prem to the Cortex Application Security module to gain comprehensive visibility into your GitHub Enterprise platform assets and scan your repositories’ code, configurations, and CI/CD pipelines for security issues.":
      "Intégrez votre GitHub Enterprise sur site au module Cortex Application Security pour obtenir une visibilité complète sur les actifs de votre plateforme GitHub Enterprise et analyser le code, les configurations et les pipelines CI/CD de vos dépôts à la recherche de problèmes de sécurité.",
    "Onboard your GitHub SaaS to the Cortex Application Security module to gain comprehensive visibility into your GitHub platform assets and scan your repositories’ code, configurations, and CI/CD pipelines for security issues.":
      "Intégrez votre GitHub SaaS au module Cortex Application Security pour obtenir une visibilité complète sur les actifs de votre plateforme GitHub et analyser le code, les configurations et les pipelines CI/CD de vos dépôts à la recherche de problèmes de sécurité.",
    "Onboard your GitLab SaaS to the Cortex Application Security module to gain comprehensive visibility into your GitLab platform assets and scan your repositories’ code, configurations, and CI/CD pipelines for security issues.":
      "Intégrez votre GitLab SaaS au module Cortex Application Security pour obtenir une visibilité complète sur les actifs de votre plateforme GitLab et analyser le code, les configurations et les pipelines CI/CD de vos dépôts à la recherche de problèmes de sécurité.",
    "Onboard your GitLab Self Managed on-prem to the Cortex Application Security module to gain comprehensive visibility into your GitLab Self Managed platform assets and scan your repositories’ code, configurations, and CI/CD pipelines for security issues.":
      "Intégrez votre GitLab Self Managed sur site au module Cortex Application Security pour obtenir une visibilité complète sur les actifs de votre plateforme GitLab Self Managed et analyser le code, les configurations et les pipelines CI/CD de vos dépôts à la recherche de problèmes de sécurité.",
    "Only one collection mode per instance.":
      "Un seul mode de collecte par instance.",
    "Organization Permissions":
      "Autorisations de l'organisation",
    "Perform malware dynamic analysis.":
      "Effectuez une analyse dynamique des logiciels malveillants.",
    "Prerequisites for OAuth 2.0 Authentication":
      "Prérequis pour l'authentification OAuth 2.0",
    "Recon filter query":
      "Requête de filtre Recon",
    "Reliability of the source providing the intelligence data. Currently used for “CVE” reputation command.":
      "Fiabilité de la source fournissant les données de renseignement. Actuellement utilisée pour la commande de réputation « CVE ».",
    "Required API client scopes":
      "Portées de client API requises",
    "Send push notifications to mobile app":
      "Envoyez des notifications push à l'application mobile",
    "Server URL (e.g., https://api.crowdstrike.com)":
      "URL du serveur (par exemple https://api.crowdstrike.com)",
    "Service username (configured as OAuth confidential client).":
      "Nom d'utilisateur du service (configuré en tant que client confidentiel OAuth).",
    "Spotlight asset and vulnerability collection retrieves only vulnerabilities updated within the last 100 days, keeping each collection focused on recent data.":
      "La collecte des actifs et des vulnérabilités Spotlight ne récupère que les vulnérabilités mises à jour au cours des 100 derniers jours, ce qui maintient chaque collecte centrée sur les données récentes.",
    "Spotlight vulnerabilities only.":
      "Uniquement les vulnérabilités Spotlight.",
    "Submit a high volume of samples to run in a sandbox and view reports.":
      "Soumettez un grand volume d'échantillons à exécuter dans un sandbox et consultez les rapports.",
    "Supported asset types include:":
      "Les types d'actifs pris en charge comprennent :",
    "Supported in Cortex and Cortex Platform.":
      "Pris en charge dans Cortex et Cortex Platform.",
    "Supported in Cortex and Cortex Platform. Input a value between 1-500. Default is 15.":
      "Pris en charge dans Cortex et Cortex Platform. Saisissez une valeur comprise entre 1 et 500. La valeur par défaut est 15.",
    "Tenant API Key":
      "Clé API du tenant",
    "tenant_url: The tenant URL for EPM region (e.g., https://api-na.epm.cyberark.cloud)":
      "tenant_url : l'URL du tenant de la région EPM (par exemple https://api-na.epm.cyberark.cloud)",
    "The Application ID of the OAuth2 Server web app configured in Identity Administration.":
      "L'ID d'application de l'application web OAuth2 Server configurée dans Identity Administration.",
    "The asset sources to ingest into the Cortex Unified Asset Inventory.":
      "Les sources d'actifs à ingérer dans le Cortex Unified Asset Inventory.",
    "The base URL assigned to your organization: https://${workspaceName}-${organizationId}.cribl.cloud":
      "L'URL de base attribuée à votre organisation : https://${workspaceName}-${organizationId}.cribl.cloud",
    "The Cortex Core - IOCs integration uses the Cortex API for detection and response, by natively integrating network, endpoint, and cloud data to stop sophisticated attacks.":
      "L'intégration Cortex Core - IOCs utilise l'API Cortex pour la détection et la réponse, en intégrant nativement les données réseau, terminaux et cloud afin d'arrêter les attaques sophistiquées.",
    "The CyberArk Identity FQDN for OAuth2 authentication (e.g., https://abc1234.id.cyberark.cloud).":
      "Le FQDN de CyberArk Identity pour l'authentification OAuth2 (par exemple https://abc1234.id.cyberark.cloud).",
    "The fetch interval for assets and vulnerabilities. It is recommended to set it to 1 hour.":
      "L'intervalle de récupération des actifs et des vulnérabilités. Il est recommandé de le définir sur 1 heure.",
    "The Illusive Attack Management API allows customers to retrieve detected incidents with a forensics timeline, attack surface insights, collect forensics on-demand, and manage a variety of operations with regard to deceptive entities, deception policies, and more.":
      "L'API Illusive Attack Management permet aux clients de récupérer les incidents détectés avec une chronologie forensique, d'obtenir des informations sur la surface d'attaque, de collecter des données forensiques à la demande et de gérer diverses opérations relatives aux entités de leurre, aux politiques de leurre, etc.",
    "The Indicator of Attack (IOA) fetch query. This is an FQL filter that is combined with the time-range filter using AND. For example: cloud_provider:'aws'. For more information, see the Falcon Query Language (FQL) documentation at: https://www.falconpy.io/Usage/Falcon-Query-Language.html.":
      "La requête de récupération Indicator of Attack (IOA). Il s'agit d'un filtre FQL combiné au filtre de plage de temps à l'aide de AND. Par exemple : cloud_provider:'aws'. Pour plus d'informations, consultez la documentation Falcon Query Language (FQL) à l'adresse : https://www.falconpy.io/Usage/Falcon-Query-Language.html.",
    "The tenant URL for EPM region (e.g., https://api-na.epm.cyberark.cloud).":
      "L'URL du tenant de la région EPM (par exemple https://api-na.epm.cyberark.cloud).",
    "The timeout of the HTTP requests sent to Cortex API (in seconds).":
      "Le délai d'expiration des requêtes HTTP envoyées à l'API Cortex (en secondes).",
    "THF Polygon is a Malware Detonation & Research platform designed for deep dynamic analysis and enhanced indicators extraction. THF Polygon analyzes submitted files and urls and extracts deep IOCs that appear when malicious code is triggered and executed. Polygon could be used either for application-level tasks (like smtp-based mail filtering) and analytical purposes (files/urls analysis for verdict, report and indicators).":
      "THF Polygon est une plateforme de détonation et de recherche de logiciels malveillants conçue pour l'analyse dynamique approfondie et l'extraction améliorée d'indicateurs. THF Polygon analyse les fichiers et URL soumis et extrait des IOC détaillés qui apparaissent lorsque le code malveillant est déclenché et exécuté. Polygon peut être utilisé aussi bien pour des tâches au niveau applicatif (comme le filtrage de courrier basé sur SMTP) que pour des besoins d'analyse (analyse de fichiers/URL pour obtenir un verdict, un rapport et des indicateurs).",
    "Third Party Detection fetch query":
      "Requête de récupération des détections tierces",
    "This integration is enabled by default for the new CrowdStrike Raptor version.":
      "Cette intégration est activée par défaut pour la nouvelle version CrowdStrike Raptor.",
    "This integration was integrated and tested with version 23.2.1 of Cybereason Server":
      "Cette intégration a été intégrée et testée avec la version 23.2.1 de Cybereason Server",
    "To authenticate to EPM with OAuth2, provide the following:":
      "Pour vous authentifier auprès d'EPM avec OAuth2, fournissez les éléments suivants :",
    "To specify an endpoint, use the following command arguments:":
      "Pour spécifier un point de terminaison, utilisez les arguments de commande suivants :",
    "token_url: The CyberArk Identity FQDN for OAuth2 authentication (e.g., https://abc1234.id.cyberark.cloud)":
      "token_url : le FQDN de CyberArk Identity pour l'authentification OAuth2 (par exemple https://abc1234.id.cyberark.cloud)",
    "Troubleshooting":
      "Dépannage",
    "Use Falcon Query Language (FQL) to filter results. For more information, see the [FQL Syntax Documentation](https://www.falconpy.io/Usage/Falcon-Query-Language.html).":
      "Utilisez Falcon Query Language (FQL) pour filtrer les résultats. Pour plus d'informations, consultez la [FQL Syntax Documentation](https://www.falconpy.io/Usage/Falcon-Query-Language.html).",
    "Use the Cortex Github Action to integrate with your GitHub Workflows and gain visibility into your workflows.":
      "Utilisez Cortex Github Action pour vous intégrer à vos workflows GitHub et obtenir de la visibilité sur vos workflows.",
    "Use the Falcon Query Language to refine the data collected. For more information, refer to the FQL syntax documentation: https://www.falconpy.io/Usage/Falcon-Query-Language.html":
      "Utilisez Falcon Query Language pour affiner les données collectées. Pour plus d'informations, consultez la documentation sur la syntaxe FQL : https://www.falconpy.io/Usage/Falcon-Query-Language.html",
    "Use the Generic Export Indicators Service integration to provide an endpoint with a list of indicators as a service for the system indicators.":
      "Utilisez l'intégration Generic Export Indicators Service pour fournir à un point de terminaison une liste d'indicateurs en tant que service pour les indicateurs système.",
    "Use the Generic SQL integration to run SQL queries on the following databases: MySQL, PostgreSQL, Microsoft SQL Server, Oracle, Teradata and Trino.":
      "Utilisez l'intégration Generic SQL pour exécuter des requêtes SQL sur les bases de données suivantes : MySQL, PostgreSQL, Microsoft SQL Server, Oracle, Teradata et Trino.",
    "Use the Google Maps API.":
      "Utilisez l'API Google Maps.",
    "Use this integration to connect securely with a GitHub Model Context Protocol (MCP) server and access its tools in real time.":
      "Utilisez cette intégration pour vous connecter en toute sécurité à un serveur GitHub Model Context Protocol (MCP) et accéder à ses outils en temps réel.",
    "Use this integration to connect to an MCP server and automatically discover its available tools.":
      "Utilisez cette intégration pour vous connecter à un serveur MCP et découvrir automatiquement ses outils disponibles.",
    "Use this parameter to determine the look-back period for searching for events that were created before the last run time and did not match the query when they were created.":
      "Utilisez ce paramètre pour déterminer la période rétroactive de recherche des événements créés avant l'heure de la dernière exécution et qui ne correspondaient pas à la requête lors de leur création.",
    "Use this parameter to determine the look-back period for searching for incidents that were created before the last run time and did not match the query when they were created.":
      "Utilisez ce paramètre pour déterminer la période rétroactive de recherche des incidents créés avant l'heure de la dernière exécution et qui ne correspondaient pas à la requête lors de leur création.",
    "Username (Only if your cuckoo service requires HTTP auth)":
      "Nom d'utilisateur (uniquement si votre service cuckoo nécessite une authentification HTTP)",
    "Web App ID":
      "ID d'application web",
    "web_app_id: The Application ID of the OAuth2 Server web app configured in Identity Administration.":
      "web_app_id : l'ID d'application de l'application web OAuth2 Server configurée dans Identity Administration.",
    "When using this parameter, note that:":
      "Lorsque vous utilisez ce paramètre, notez que :",

    // --- Batch: strings from the Collector export #9 (integration card descriptions, error/maintenance messages, dashboard widget titles) ---
    // Fragments such as "and", "The", "In the", "by searching for", "Do not enable", "To get an API client ID and secret, contact" are intentionally NOT registered.
    "A utility for testing incident fetching with mock JSON data.":
      "Un utilitaire pour tester la récupération d'incidents avec des données JSON fictives.",
    "Access the full set of possibilities the JoeSandbox Cloud provides via the RESTful Web API v2.":
      "Accédez à toutes les possibilités offertes par JoeSandbox Cloud via la RESTful Web API v2.",
    "Agent Content Version Breakdown (Top 5)":
      "Répartition des versions de contenu de l'agent (5 premières)",
    "Agent Version Breakdown (Top 5)":
      "Répartition des versions de l'agent (5 premières)",
    "Top Hosts (Top 10 | Last 30 days)":
      "Principaux hôtes (10 premiers | 30 derniers jours)",
    "Collect and assess security posture of the Snowflake data cloud.":
      "Collectez et évaluez la posture de sécurité du cloud de données Snowflake.",
    "Collect logs and data from Salesforce.":
      "Collectez les journaux et les données de Salesforce.",
    "Collects logs and data from Okta identity and access management service.":
      "Collecte les journaux et les données du service de gestion des identités et des accès Okta.",
    "Connect JFrog Container Registry with Cortex Cloud to scan and secure your container images, ensuring robust artifact management and enhanced security.":
      "Connectez JFrog Container Registry à Cortex Cloud pour analyser et sécuriser vos images de conteneur, et garantir une gestion robuste des artefacts et une sécurité renforcée.",
    "Connect OpenShift Internal Registry with Cortex Cloud using the Kubernetes datasource to scan and secure your container images, ensuring comprehensive security and compliance.":
      "Connectez OpenShift Internal Registry à Cortex Cloud à l'aide de la source de données Kubernetes pour analyser et sécuriser vos images de conteneur, et garantir une sécurité et une conformité complètes.",
    "Connect Sonatype Nexus Registry with Cortex Cloud to scan and secure your container images, ensuring comprehensive security and compliance.":
      "Connectez Sonatype Nexus Registry à Cortex Cloud pour analyser et sécuriser vos images de conteneur, et garantir une sécurité et une conformité complètes.",
    "Deprecated. Use Joe Security v2 instead.":
      "Obsolète. Utilisez Joe Security v2 à la place.",
    "Enterprise Mobility Management (EMM) for Apple devices (Mac, iPhone, Apple TV, iPad). Can be used to control various configurations via different policies, install and uninstall applications, lock devices, smart groups searches, and more.":
      "Enterprise Mobility Management (EMM) pour les appareils Apple (Mac, iPhone, Apple TV, iPad). Peut être utilisé pour contrôler diverses configurations via différentes politiques, installer et désinstaller des applications, verrouiller des appareils, effectuer des recherches de groupes intelligents, et plus encore.",
    "Error Occurred":
      "Une erreur s'est produite",
    "Failed getting content pack recommended":
      "Échec de la récupération du pack de contenu recommandé",
    "failed to get content items status":
      "échec de la récupération du statut des éléments de contenu",
    "Failed to retrieve data source":
      "Échec de la récupération de la source de données",
    "Integrate Application Security with your Terraform Enterprise organization to gain visibility into your Terraform runs.":
      "Intégrez Application Security à votre organisation Terraform Enterprise pour obtenir de la visibilité sur vos exécutions Terraform.",
    "Integrate Semgrep to gain a unified overview of your application security posture.":
      "Intégrez Semgrep pour obtenir une vue d'ensemble unifiée de la posture de sécurité de vos applications.",
    "Integrate Snyk to gain a unified overview of your application security posture.":
      "Intégrez Snyk pour obtenir une vue d'ensemble unifiée de la posture de sécurité de vos applications.",
    "Integrate SonarQube to gain a unified overview of your application security posture.":
      "Intégrez SonarQube pour obtenir une vue d'ensemble unifiée de la posture de sécurité de vos applications.",
    "Integrate Veracode to gain a unified overview of your application security posture.":
      "Intégrez Veracode pour obtenir une vue d'ensemble unifiée de la posture de sécurité de vos applications.",
    "Microsoft Entra ID (formerly Azure AD) integration for identity & access posture monitoring":
      "Intégration de Microsoft Entra ID (anciennement Azure AD) pour la surveillance de la posture des identités et des accès",
    "MongoDB Atlas cloud database platform":
      "Plateforme de base de données cloud MongoDB Atlas",
    "Multi-service security integration for Microsoft 365 including OneDrive, SharePoint, Teams, and Entra ID.":
      "Intégration de sécurité multiservice pour Microsoft 365, comprenant OneDrive, SharePoint, Teams et Entra ID.",
    "New data is being collected":
      "De nouvelles données sont en cours de collecte",
    "Onboard your Jenkins server for comprehensive Application Security: Integrate Cortex CLI scans for your code, and secure your CI/CD pipelines.":
      "Intégrez votre serveur Jenkins pour une Application Security complète : intégrez les analyses Cortex CLI pour votre code et sécurisez vos pipelines CI/CD.",
    "Please try again later":
      "Veuillez réessayer plus tard",
    "Select dashboard":
      "Sélectionner un tableau de bord",
    "Show Less":
      "Afficher moins",
    "Something went wrong...":
      "Une erreur s'est produite...",
    "Sorry, something went wrong...":
      "Désolé, une erreur s'est produite...",
    "The Cortex Core IR integration uses the Cortex API for detection and response, by natively integrating network, endpoint, and cloud data to stop sophisticated attacks.":
      "L'intégration Cortex Core IR utilise l'API Cortex pour la détection et la réponse, en intégrant nativement les données réseau, terminaux et cloud afin d'arrêter les attaques sophistiquées.",
    "Under Maintenance":
      "En maintenance",

    // --- Batch: strings from the Collector export #10 (dashboard picker/empty-state strings, Cylance deprecation notice) ---
    // Fragments such as "and", "The", "In the", "by searching for", "Do not enable", "To get an API client ID and secret, contact" are intentionally NOT registered.
    "+ Create new dashboard":
      "+ Créer un nouveau tableau de bord",
    "Command Centers":
      "Centres de commande",
    "Common Dashboards":
      "Tableaux de bord communs",
    "Troubleshooting Instances":
      "Dépannage des instances",
    "Troubleshooting Playbooks":
      "Dépannage des playbooks",
    "Automation Insights":
      "Insights d'automatisation",
    "Connect Data Sources":
      "Connecter des sources de données",
    "Get started with Cortex Cloud by connecting your cloud environment as data sources.":
      "Commencez à utiliser Cortex Cloud en connectant votre environnement cloud en tant que sources de données.",
    "Ready to Secure Your Cloud?":
      "Prêt à sécuriser votre cloud ?",
    "Scanning in Progress...":
      "Analyse en cours...",
    "Your top priority vulnerabilities will be here shortly":
      "Vos vulnérabilités les plus prioritaires s'afficheront ici sous peu",
    "Deprecated. This service has been discontinued for external users by Cylance. No available replacement.":
      "Obsolète. Ce service a été abandonné par Cylance pour les utilisateurs externes. Aucun remplacement n'est disponible.",

    // --- Batch: strings from the Collector export #11 (Databricks/Doppel integration docs and parameters, Databricks posture wizard, Bitbucket cards) ---
    // Fragments such as "and", "The", "In the", "by searching for", "Do not enable", "To get an API client ID and secret, contact" are intentionally NOT registered.
    "“403 Forbidden” errors on specific commands:":
      "Erreurs « 403 Forbidden » sur des commandes spécifiques :",
    "“Test failed” when configuring the integration:":
      "« Test failed » lors de la configuration de l'intégration :",
    "(API Key (V1))":
      "(clé API (V1))",
    "(Client ID (V2), Client Secret (V2))":
      "(ID client (V2), secret client (V2))",
    "(User API Key (V1))":
      "(clé API utilisateur (V1))",
    "API Key (V1)":
      "Clé API (V1)",
    "User API Key (V1)":
      "Clé API utilisateur (V1)",
    "Client ID (V2)":
      "ID client (V2)",
    "Client Secret (V2)":
      "Secret client (V2)",
    "Organization Code (V1)":
      "Code d'organisation (V1)",
    "Doppel Tenant URL":
      "URL du tenant Doppel",
    "Attach alert screenshots to incidents":
      "Joindre les captures d'écran des alertes aux incidents",
    "Check “First fetch time” — a very short window may miss older events":
      "Vérifiez « First fetch time » : une fenêtre trop courte peut manquer des événements plus anciens",
    "Check that the token has permission to access SQL Warehouses (used for connectivity test)":
      "Vérifiez que le jeton dispose de l'autorisation d'accéder aux SQL Warehouses (utilisé pour le test de connectivité)",
    "Confirm “Fetch types” is set to at least one of: SQL Alerts, Failed Jobs":
      "Vérifiez que « Fetch types » est défini sur au moins l'une des valeurs suivantes : SQL Alerts, Failed Jobs",
    "Copy the token immediately — it will not be shown again":
      "Copiez immédiatement le jeton : il ne sera plus affiché",
    "Databricks Free Edition does not support all APIs (e.g., SCIM, cluster creation). Commands targeting unsupported features will return 403":
      "Databricks Free Edition ne prend pas en charge toutes les API (par exemple SCIM, création de clusters). Les commandes ciblant des fonctionnalités non prises en charge renverront 403",
    "Ensure the Personal Access Token is valid and has not expired":
      "Assurez-vous que le jeton d'accès personnel est valide et n'a pas expiré",
    "For SQL Alerts, verify alerts exist and have been triggered in your workspace":
      "Pour SQL Alerts, vérifiez que des alertes existent et ont été déclenchées dans votre espace de travail",
    "Increase the HTTP timeout in the integration instance advanced settings if needed":
      "Augmentez le délai d'expiration HTTP dans les paramètres avancés de l'instance d'intégration si nécessaire",
    "Log in to your Databricks workspace":
      "Connectez-vous à votre espace de travail Databricks",
    "Some APIs require admin-level permissions. Verify your token’s user has the required role":
      "Certaines API nécessitent des autorisations de niveau administrateur. Vérifiez que l'utilisateur du jeton dispose du rôle requis",
    "How to Generate a Personal Access Token":
      "Comment générer un jeton d'accès personnel",
    "Test Configuration":
      "Tester la configuration",
    "Databricks Workspace URL":
      "URL de l'espace de travail Databricks",
    "Fetch incidents returns no results:":
      "La récupération des incidents ne renvoie aucun résultat :",
    "Timeout errors on large queries:":
      "Erreurs de délai d'expiration sur les requêtes volumineuses :",
    "Fetch incidents timeout":
      "Délai d'expiration de la récupération des incidents",
    "Fetch types":
      "Types de récupération",
    "Number of incidents for each fetch.":
      "Nombre d'incidents pour chaque récupération.",
    "Polling interval":
      "Intervalle d'interrogation",
    "Issue type (if classifier doesn't exist)":
      "Type de problème (si le classificateur n'existe pas)",
    "No issue type":
      "Aucun type de problème",
    "Issue type will be set by this field if a Classifier does not exist. If a classifier is selected, it will take precedence.":
      "Si aucun classificateur n'existe, ce champ définit le type de problème. Si un classificateur est sélectionné, il est prioritaire.",
    "Default polling interval value for `demisto-lock-get`, can be overridden by the \"polling_interval\" argument.":
      "Valeur par défaut de l'intervalle d'interrogation pour `demisto-lock-get`, peut être remplacée par l'argument \"polling_interval\".",
    "Due to API limitations, the maximum is 100.":
      "En raison des limitations de l'API, le maximum est de 100.",
    "e.g., 3 days, 1 week":
      "par exemple 3 days, 1 week",
    "The Doppel API version to use. V1 authenticates with a static API Key; V2 authenticates with OAuth 2.0 client credentials (Client ID and Client Secret). New Doppel API capabilities are added to V2 only, so V2 is recommended.":
      "La version de l'API Doppel à utiliser. V1 s'authentifie avec une clé API statique ; V2 s'authentifie avec les identifiants client OAuth 2.0 (ID client et secret client). Les nouvelles fonctionnalités de l'API Doppel sont ajoutées uniquement à V2, qui est donc recommandée.",
    "The Doppel server URL that will be used for calling the APIs.":
      "L'URL du serveur Doppel utilisée pour appeler les API.",
    "The interval specifies the cadence with which the Doppel alerts be fetched.":
      "L'intervalle spécifie la fréquence de récupération des alertes Doppel.",
    "The Organization Code to use for connection with Doppel. Applies to API Version V1 only; V2 scopes requests to your organization automatically.":
      "Le code d'organisation à utiliser pour la connexion à Doppel. S'applique uniquement à la version V1 de l'API ; V2 limite automatiquement les requêtes à votre organisation.",
    "The time limit in seconds for fetch incidents to run. Leave this empty to cancel the timeout limit.":
      "Le délai en secondes accordé à l'exécution de la récupération des incidents. Laissez ce champ vide pour supprimer la limite.",
    "Types of events to fetch as incidents.":
      "Types d'événements à récupérer en tant qu'incidents.",
    "Whether incoming mirroring downloads the alert screenshot and attaches it to the incident as a War Room file entry whenever the screenshot version changes. Screenshots are stored in your Cortex instance. The doppel-get-alert-screenshot command works regardless of this setting.":
      "Indique si la réplication entrante télécharge la capture d'écran de l'alerte et la joint à l'incident en tant qu'entrée de fichier War Room chaque fois que la version de la capture change. Les captures d'écran sont stockées dans votre instance Cortex. La commande doppel-get-alert-screenshot fonctionne quel que soit ce paramètre.",
    "Details for Doppel workflow":
      "Détails du workflow Doppel",
    "Credentials for the API Version you select (see below).":
      "Identifiants pour la version de l'API que vous sélectionnez (voir ci-dessous).",
    "Reach out to Doppel to get access to the above information.":
      "Contactez Doppel pour obtenir l'accès aux informations ci-dessus.",
    "Name of the instance.":
      "Nom de l'instance.",
    "Doppel is a Modern Digital Risk Protection Solution, that detects the phishing and brand cyber attacks on the emerging channels. Doppel scans millions of channels online which includes, social media, domains, paid ads, dark web, emerging channels, etc. Doppel can identify the malicious content and cyber threats, and enables their customers to take down the digital risks proactively. The Cortex pack for Doppel provides mirrors the alerts created by Doppel as Cortex incidents. The pack also contains the commands to perform different operations on Doppel alerts.":
      "Doppel est une solution moderne de protection contre les risques numériques qui détecte les attaques de phishing et les cyberattaques visant les marques sur les canaux émergents. Doppel analyse des millions de canaux en ligne, notamment les réseaux sociaux, les domaines, les publicités payantes, le dark web et les canaux émergents. Doppel peut identifier les contenus malveillants et les cybermenaces, et permet à ses clients d'éliminer de manière proactive les risques numériques. Le pack Cortex pour Doppel réplique les alertes créées par Doppel sous forme d'incidents Cortex. Le pack contient également les commandes permettant d'effectuer différentes opérations sur les alertes Doppel.",
    "The Demisto Locking integration allows prevention of concurrent execution of scripts or commands, using a wait-lock-release flow (mutex).":
      "L'intégration Demisto Locking permet d'empêcher l'exécution simultanée de scripts ou de commandes grâce à un flux attente-verrouillage-libération (mutex).",
    "Allow access by IP's":
      "Autoriser l'accès par IP",
    "Applicable Broker VMs":
      "Broker VM applicables",
    "Both cloud and region will be used for scanning and can incur cost and compliance if selected incorrectly.":
      "Le cloud et la région seront tous deux utilisés pour l'analyse et, en cas de sélection incorrecte, peuvent entraîner des coûts et des problèmes de conformité.",
    "Choose regions":
      "Choisir les régions",
    "Databricks Account ID":
      "ID de compte Databricks",
    "Databricks Instance":
      "Instance Databricks",
    "Define static IPs and cloud regions for the connector if required by your security settings.":
      "Définissez des adresses IP statiques et des régions cloud pour le connecteur si vos paramètres de sécurité l'exigent.",
    "Enter instance name":
      "Saisissez le nom de l'instance",
    "Establish Connection":
      "Établir la connexion",
    "For Container Registries with network policies, it is required to allow access from the following IP addresses:":
      "Pour les registres de conteneurs avec des politiques réseau, il est nécessaire d'autoriser l'accès depuis les adresses IP suivantes :",
    "Insert Account ID":
      "Saisissez l'ID de compte",
    "Insert Application id":
      "Saisissez l'ID d'application",
    "Integrate Cloud Security with your Databricks Account to gain comprehensive visibility into any data and posture risk existing in your Databricks environment.This integration enables automated scanning of all assets in Databricks,including data classification and risk assessment.":
      "Intégrez Cloud Security à votre compte Databricks pour obtenir une visibilité complète sur les données et les risques de posture présents dans votre environnement Databricks. Cette intégration permet l'analyse automatisée de tous les actifs de Databricks, y compris la classification des données et l'évaluation des risques.",
    "Invalid account ID":
      "ID de compte non valide",
    "My Databricks account protected by network policies":
      "Mon compte Databricks protégé par des politiques réseau",
    "Scan with Broker VM":
      "Analyser avec Broker VM",
    "Scanning in private networks is done using broker VM infrastructure":
      "L'analyse dans les réseaux privés s'effectue à l'aide de l'infrastructure Broker VM",
    "Scanning is done on infrastructure deployed to a cloud account owned by you. This mode requires additional cloud provider permissions and may incur additional cloud costs.":
      "L'analyse est effectuée sur une infrastructure déployée dans un compte cloud dont vous êtes propriétaire. Ce mode nécessite des autorisations supplémentaires du fournisseur cloud et peut entraîner des coûts cloud supplémentaires.",
    "Select a cloud provider and region in order to retrieve an IP address.":
      "Sélectionnez un fournisseur cloud et une région pour récupérer une adresse IP.",
    "Select Cloud provider":
      "Sélectionner un fournisseur cloud",
    "Select Cluster":
      "Sélectionner un cluster",
    "Verify Connection":
      "Vérifier la connexion",

    // --- Batch: fragment strings for the Databricks integration doc page (fragments whose neighbouring nodes are known; registered as a set so the sentence reads correctly) ---
    // Fragments such as "and", "The", "In the", "by searching for", "Do not enable", "To get an API client ID and secret, contact" are intentionally NOT registered.
    "A Databricks workspace with a valid URL (e.g.,":
      "Un espace de travail Databricks avec une URL valide (par exemple",
    "A Personal Access Token (PAT) with at minimum":
      "Un jeton d'accès personnel (PAT) avec l'accès",
    "access. Admin-level permissions are required for IAM (SCIM), IP access lists, and global init script commands":
      "au minimum. Des autorisations de niveau administrateur sont requises pour IAM (SCIM), les listes d'accès IP et les commandes de scripts d'initialisation globaux",
    "Click your username in the top-right corner and select":
      "Cliquez sur votre nom d'utilisateur en haut à droite et sélectionnez",
    "Enter a description and optional lifetime, then click":
      "Saisissez une description et une durée de vie facultative, puis cliquez sur",
    "Verify the Workspace URL is correct (no trailing slash, includes":
      "Vérifiez que l'URL de l'espace de travail est correcte (sans barre oblique finale, inclut",
    ": Your workspace URL (e.g.,":
      ": L'URL de votre espace de travail (par exemple",
    ": The PAT generated above":
      ": Le PAT généré ci-dessus",
    ": Enable to pull SQL alerts and failed job runs as incidents":
      ": Activez pour récupérer les alertes SQL et les exécutions de tâches en échec en tant qu'incidents",
    "SQL Statement Execute may time out for long-running queries. Use":
      "SQL Statement Execute peut expirer pour les requêtes de longue durée. Utilisez",
    "to poll for results":
      "pour interroger les résultats",

    // --- Batch: EWS O365 / Exchange Online / Dropbox / Elasticsearch integration doc page (Collector export 2026-10-11 09:38) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    "Action Required":
      "Action requise",
    "App authentication":
      "Authentification d'application",
    "Important note: Retirement of RBAC Application Impersonation":
      "Remarque importante : abandon de RBAC Application Impersonation",
    "Microsoft EWS Retirement and EwsAllowedAppIds":
      "Abandon de Microsoft EWS et EwsAllowedAppIds",
    "Permissions Needed":
      "Autorisations requises",
    "Set up the Third Party System":
      "Configurer le système tiers",
    "Verify that the admin account has sufficient Exchange Online permissions":
      "Vérifiez que le compte administrateur dispose des autorisations Exchange Online suffisantes",
    "For customers using a Self-Deployed Application":
      "Pour les clients utilisant une application auto-déployée",
    "For customers using the Cortex Application authentication method":
      "Pour les clients utilisant la méthode d'authentification Cortex Application",
    "(For full details, complete timelines, and PowerShell scripts for safely appending to an existing allow list, refer to the official Microsoft documentation:":
      "(Pour plus de détails, les calendriers complets et les scripts PowerShell permettant d'ajouter des entrées en toute sécurité à une liste d'autorisation existante, consultez la documentation officielle de Microsoft :",
    "After authorizing the Demisto app, you will get an ID, Token, and Key, which needs to be added to the integration instance configuration’s corresponding fields.":
      "Après avoir autorisé l'application Demisto, vous obtiendrez un ID, un jeton et une clé, qui doivent être ajoutés aux champs correspondants de la configuration de l'instance d'intégration.",
    "As of February 2025, the Impersonation access type of the integration is deprecated by Microsoft, read about it":
      "Depuis février 2025, le type d'accès Impersonation de l'intégration est obsolète chez Microsoft ; pour en savoir plus,",
    "As part of this transition, Microsoft is moving away from unrestricted EWS access and has introduced a new tenant-level allow list called":
      "Dans le cadre de cette transition, Microsoft abandonne l'accès illimité à EWS et a introduit une nouvelle liste d'autorisation au niveau du tenant, appelée",
    "Assign Azure AD roles to the application.":
      "Attribuez des rôles Azure AD à l'application.",
    "Assign custom role groups to the application using service principals.":
      "Attribuez des groupes de rôles personnalisés à l'application à l'aide de principaux de service.",
    "Attach the .cer file to your Azure app.":
      "Joignez le fichier .cer à votre application Azure.",
    "Attach the .cer file to your Azure App.":
      "Joignez le fichier .cer à votre application Azure.",
    "Authentication Type (NTLM, Basic, or Digest). For Office 365 use Basic.":
      "Type d'authentification (NTLM, Basic ou Digest). Pour Office 365, utilisez Basic.",
    "Authentication: Email address (for Office 365) or DOMAIN\\USERNAME (e.g. DEMISTO.INT\\admin)":
      "Authentification : adresse e-mail (pour Office 365) ou DOMAIN\\USERNAME (par exemple DEMISTO.INT\\admin)",
    "Connect to Exchange Online PowerShell and add the Application ID.":
      "Connectez-vous à Exchange Online PowerShell et ajoutez l'ID d'application.",
    "Copy the contents of the .txt file and paste it in the Certificate parameter of the integration’s instance.":
      "Copiez le contenu du fichier .txt et collez-le dans le paramètre Certificate de l'instance de l'intégration.",
    "Create the application:":
      "Créez l'application :",
    "Create the certificate in Cortex XSOAR/XSIAM.":
      "Créez le certificat dans Cortex XSOAR/XSIAM.",
    "Default is to filter by received-time, which works well if the folder is an \"Inbox\". But for a folder emails are dragged into for attention, if we filter by received-time, out-of-order processing of emails means some are ignored. Filtering by modified-time works better for such a scenario. This works best if any modifications (such as tagging) happens before moving the email into the folder, such that the move into the folder is the last modification, and triggers Cortex to fetch it as an incident.":
      "Par défaut, le filtrage s'effectue selon l'heure de réception, ce qui fonctionne bien si le dossier est une « Boîte de réception ». Mais pour un dossier dans lequel les e-mails sont glissés pour traitement, le filtrage selon l'heure de réception entraîne un traitement désordonné des e-mails et certains sont ignorés. Le filtrage selon l'heure de modification fonctionne mieux dans ce scénario. Cela fonctionne au mieux si les modifications (comme le balisage) sont effectuées avant de déplacer l'e-mail dans le dossier, de sorte que le déplacement dans le dossier soit la dernière modification et déclenche la récupération de l'e-mail par Cortex en tant qu'incident.",
    "Default version is used when accessing the EWS API to determine the API version.":
      "La version par défaut est utilisée lors de l'accès à l'API EWS pour déterminer la version de l'API.",
    "Directory and metadata:":
      "Annuaire et métadonnées :",
    "Log collection:":
      "Collecte des journaux :",
    "Inventory data snapshots are collected every 10 minutes.":
      "Les instantanés des données d'inventaire sont collectés toutes les 10 minutes.",
    "Download the certificateBase34.txt file.":
      "Téléchargez le fichier certificateBase34.txt.",
    "Email address from which to fetch incidents":
      "Adresse e-mail à partir de laquelle récupérer les incidents",
    "Enable Dropbox Log Collection":
      "Activer la collecte des journaux Dropbox",
    "Enter a unique name for this DropBox instance":
      "Saisissez un nom unique pour cette instance DropBox",
    "Enter DropBox Access Code for authenticating requests":
      "Saisissez le code d'accès DropBox pour authentifier les requêtes",
    "Enter DropBox app key for authenticating requests":
      "Saisissez la clé d'application DropBox pour authentifier les requêtes",
    "Enter DropBox App Secret for authenticating requests":
      "Saisissez le secret d'application DropBox pour authentifier les requêtes",
    "access code":
      "code d'accès",
    "app key":
      "clé d'application",
    "app secret":
      "secret d'application",
    "Ensure EWS is enabled for your tenant.":
      "Assurez-vous qu'EWS est activé pour votre tenant.",
    "Elastic version 2.* or 5.*":
      "Elastic version 2.* ou 5.*",
    "Exchange Online URL":
      "URL d'Exchange Online",
    "Exchange URL or Server IP address":
      "URL Exchange ou adresse IP du serveur",
    "ID / Application ID":
      "ID / ID d'application",
    "ID can be received from the admin consent procedure - see Detailed Instructions.":
      "L'ID peut être obtenu à partir de la procédure de consentement de l'administrateur ; consultez les instructions détaillées.",
    "Token can be received from the admin consent procedure - see Detailed Instructions.":
      "Le jeton peut être obtenu à partir de la procédure de consentement de l'administrateur ; consultez les instructions détaillées.",
    "Follow your preferred method’s guide on how to use the admin consent flow in order to receive your authentication information:":
      "Suivez le guide de la méthode de votre choix pour utiliser le flux de consentement de l'administrateur afin d'obtenir vos informations d'authentification :",
    "For Office 365, use https://outlook.office365.com/EWS/Exchange.asmx (default) as the Server URL.":
      "Pour Office 365, utilisez https://outlook.office365.com/EWS/Exchange.asmx (par défaut) comme URL du serveur.",
    "For the integration to work, the Azure AD application’s service principal must have the correct permissions assigned in the Exchange Online role groups.":
      "Pour que l'intégration fonctionne, le principal de service de l'application Azure AD doit disposer des autorisations correctes dans les groupes de rôles Exchange Online.",
    "Has impersonation rights":
      "Dispose des droits d'emprunt d'identité",
    "Mark fetched emails as read":
      "Marquer les e-mails récupérés comme lus",
    "Skip unparsable emails during fetch incidents":
      "Ignorer les e-mails non analysables lors de la récupération des incidents",
    "Trust server certificate":
      "Faire confiance au certificat du serveur",
    "Use a self deployed Azure Application":
      "Utiliser une application Azure auto-déployée",
    "Use legacy attachment name":
      "Utiliser l'ancien nom de pièce jointe",
    "If this is the only application you are allowing, run the following command (replace":
      "S'il s'agit de la seule application que vous autorisez, exécutez la commande suivante (remplacez",
    "with your actual Application Client ID):":
      "par votre ID client d'application réel) :",
    "In Azure, go to Entra ID (Overview blade) and copy the":
      "Dans Azure, accédez à Entra ID (panneau Vue d'ensemble) et copiez la valeur de",
    "In Cortex XSOAR/XSIAM, in the integration instance configuration, enter your saved password in the":
      "Dans Cortex XSOAR/XSIAM, dans la configuration de l'instance d'intégration, saisissez votre mot de passe enregistré dans",
    "In Cortex XSOAR/XSIAM, in the integration instance configuration, paste the application ID in":
      "Dans Cortex XSOAR/XSIAM, dans la configuration de l'instance d'intégration, collez l'ID d'application dans",
    "In Cortex XSOAR/XSIAM, in the integration instance configuration, paste the Domain name in":
      "Dans Cortex XSOAR/XSIAM, dans la configuration de l'instance d'intégration, collez le nom de domaine dans",
    "In order to function as expected, set the following permissions:":
      "Pour fonctionner comme prévu, définissez les autorisations suivantes :",
    "In the Add assignments flyout that opens, find and select the app that you created in Step 1.":
      "Dans le volet Add assignments qui s'ouvre, recherchez et sélectionnez l'application que vous avez créée à l'étape 1.",
    "In the Certificates tab, upload the publickey.cer file.":
      "Dans l'onglet Certificates, téléversez le fichier publickey.cer.",
    "In the Cortex XSOAR/XSIAM Playground, download the publickey.cer file":
      "Dans le Playground de Cortex XSOAR/XSIAM, téléchargez le fichier publickey.cer",
    "In the integration instance configuration, paste the text in the":
      "Dans la configuration de l'instance d'intégration, collez le texte dans",
    "In the left menu of the newly created application, click":
      "Dans le menu de gauche de l'application nouvellement créée, cliquez sur",
    "In the Azure app, navigate to":
      "Dans l'application Azure, accédez à",
    "In the Azure application, in the left menu, click":
      "Dans l'application Azure, dans le menu de gauche, cliquez sur",
    "In the Request API permissions page, click":
      "Dans la page Request API permissions, cliquez sur",
    "In the left sidebar, select:":
      "Dans la barre latérale gauche, sélectionnez :",
    "In the top bar, select:":
      "Dans la barre supérieure, sélectionnez :",
    "Index time field, used to sort and limit data":
      "Champ d'heure d'index, utilisé pour trier et limiter les données",
    "Index/indexes to fetch incidents from (comma separated)":
      "Index à partir desquels récupérer les incidents (séparés par des virgules)",
    "Key / Application Secret":
      "Clé / Secret d'application",
    "Log in using an admin account that can manage role assignments for the Azure AD application (for example, a Global Administrator or Privileged Role Administrator).":
      "Connectez-vous avec un compte administrateur capable de gérer les attributions de rôles de l'application Azure AD (par exemple, un administrateur général ou un administrateur de rôles privilégiés).",
    "Mailbox to run commands on and to fetch incidents from.":
      "Boîte aux lettres sur laquelle exécuter les commandes et à partir de laquelle récupérer les incidents.",
    "Mailbox to run commands on and to fetch incidents from. To use this functionality, your account must have delegation for the account specified. For more information, see https://xsoar.pan.dev/docs/reference/integrations/ewso365#additional-information":
      "Boîte aux lettres sur laquelle exécuter les commandes et à partir de laquelle récupérer les incidents. Pour utiliser cette fonctionnalité, votre compte doit disposer d'une délégation pour le compte spécifié. Pour plus d'informations, consultez https://xsoar.pan.dev/docs/reference/integrations/ewso365#additional-information",
    "Maximum number of incidents per fetch (up to 200). Performance might be affected by a value higher than 50.":
      "Nombre maximal d'incidents par récupération (jusqu'à 200). Une valeur supérieure à 50 peut affecter les performances.",
    "Member Devices":
      "Appareils membres",
    "Name of the folder from which to fetch incidents":
      "Nom du dossier à partir duquel récupérer les incidents",
    "Name of the folder from which to fetch incidents (supports Exchange Folder ID and sub-folders e.g. Inbox/Phishing)":
      "Nom du dossier à partir duquel récupérer les incidents (prend en charge l'ID de dossier Exchange et les sous-dossiers, par exemple Inbox/Phishing)",
    "Supports Exchange Folder ID and sub-folders e.g. Inbox/Phishing.":
      "Prend en charge l'ID de dossier Exchange et les sous-dossiers, par exemple Inbox/Phishing.",
    "Note - for more information go to the official":
      "Remarque : pour plus d'informations, consultez le site officiel de",
    "Note: Remember your password since you will need it to create your integration instance.":
      "Remarque : mémorisez votre mot de passe, car vous en aurez besoin pour créer votre instance d'intégration.",
    "Note: The information in the Playground is sensitive information. You should delete the information by running the following command:":
      "Remarque : les informations du Playground sont des informations sensibles. Vous devez les supprimer en exécutant la commande suivante :",
    "Open the downloaded txt file and copy the text.":
      "Ouvrez le fichier txt téléchargé et copiez le texte.",
    "Open the Microsoft Purview Portal: https://purview.microsoft.com/":
      "Ouvrez le portail Microsoft Purview : https://purview.microsoft.com/",
    "Palo Alto Networks is making the necessary updates to align our shared Application ID with Microsoft’s new requirements, so you do not need to run the steps above. However, because this change is enforced and controlled entirely by Microsoft, we cannot validate the changes in advance or guarantee uninterrupted functionality. Palo Alto Networks is not responsible for any disruptions resulting from this rollout. We recommend verifying that your integration continues to function as expected once the October 2026 enforcement takes effect.":
      "Palo Alto Networks effectue les mises à jour nécessaires pour aligner notre ID d'application partagé sur les nouvelles exigences de Microsoft ; vous n'avez donc pas besoin d'exécuter les étapes ci-dessus. Cependant, comme ce changement est entièrement imposé et contrôlé par Microsoft, nous ne pouvons pas valider les modifications à l'avance ni garantir un fonctionnement ininterrompu. Palo Alto Networks n'est pas responsable des interruptions résultant de ce déploiement. Nous vous recommandons de vérifier que votre intégration continue de fonctionner comme prévu une fois l'application obligatoire d'octobre 2026 entrée en vigueur.",
    "You are responsible for updating your tenant configuration before the October 2026 enforcement takes effect. To ensure this integration continues to function without disruption, you must add the Entra Application (Client) ID used by this integration to your Exchange Online tenant’s allow list.":
      "Il vous incombe de mettre à jour la configuration de votre tenant avant l'entrée en vigueur de l'application obligatoire d'octobre 2026. Pour que cette intégration continue de fonctionner sans interruption, vous devez ajouter l'ID d'application (client) Entra utilisé par cette intégration à la liste d'autorisation de votre tenant Exchange Online.",
    "Query to fetch incidents by (Lucene style)":
      "Requête pour récupérer les incidents (style Lucene)",
    "Sender Mailbox":
      "Boîte aux lettres de l'expéditeur",
    "Server URL (e.g. http://192.168.0.1:9200)":
      "URL du serveur (par exemple http://192.168.0.1:9200)",
    "Server Version (2007, 2010, 2010_SP2, 2013, or 2016)":
      "Version du serveur (2007, 2010, 2010_SP2, 2013 ou 2016)",
    "The application ID from the Azure portal":
      "L'ID d'application du portail Azure",
    "The organization used in app-only authentication":
      "L'organisation utilisée pour l'authentification d'application uniquement",
    "The organization used in app-only authentication.":
      "L'organisation utilisée pour l'authentification d'application uniquement.",
    "There are two application authentication methods available.":
      "Deux méthodes d'authentification d'application sont disponibles.",
    "This command replaces the entire allow list. If you already have other approved EWS applications, first read the current list and append the new ID so that you don’t overwrite existing entries.":
      "Cette commande remplace l'intégralité de la liste d'autorisation. Si vous avez déjà d'autres applications EWS approuvées, lisez d'abord la liste actuelle et ajoutez le nouvel ID afin de ne pas écraser les entrées existantes.",
    "Time format as kept in ElasticSearch, leave empty to use default":
      "Format d'heure tel que conservé dans ElasticSearch ; laissez vide pour utiliser la valeur par défaut",
    "Time format is goland style format. For more details, look at:":
      "Le format d'heure est de style Goland. Pour plus de détails, consultez :",
    "To allow access to EWS O365, an administrator has to approve the Demisto app using an admin consent flow, by clicking on the following":
      "Pour autoriser l'accès à EWS O365, un administrateur doit approuver l'application Demisto via un flux de consentement de l'administrateur, en cliquant sur le lien suivant :",
    "To avoid disruptions, it is imperative that administrators begin transitioning their applications immediately.":
      "Pour éviter toute interruption, il est impératif que les administrateurs commencent immédiatement à migrer leurs applications.",
    "To create the application, follow the instructions in this":
      "Pour créer l'application, suivez les instructions de ce",
    "To identify accounts using the ApplicationImpersonation role use the Exchange Online PowerShell command:":
      "Pour identifier les comptes utilisant le rôle ApplicationImpersonation, utilisez la commande Exchange Online PowerShell suivante :",
    "To obtain the access code, click":
      "Pour obtenir le code d'accès, cliquez sur",
    "and sign in with your Dropbox Business account credentials.":
      "et connectez-vous avec les identifiants de votre compte Dropbox Business.",
    "To use this integration, you need to connect an application with a certificate.":
      "Pour utiliser cette intégration, vous devez connecter une application avec un certificat.",
    "Under Exchange, click the":
      "Sous Exchange, cliquez sur",
    "We highly recommend using the":
      "Pour les opérations sur les boîtes aux lettres, nous recommandons vivement d'utiliser l'",
    "integration for mailbox operations such as reading, searching, and managing emails and attachments, as Microsoft itself recommends transitioning from EWS to Graph-based APIs.":
      "intégration (notamment pour lire, rechercher et gérer les e-mails et les pièces jointes), car Microsoft lui-même recommande de passer d'EWS aux API basées sur Graph.",
    "What time field should we filter incidents by?":
      "Selon quel champ d'heure les incidents doivent-ils être filtrés ?",
    "When 'Mark fetched emails as read' is enabled and emails are fetched by modification time, emails will be re-fetched in the next cycle after being marked as read (due to metadata changes). This is expected behavior.":
      "Lorsque 'Mark fetched emails as read' est activé et que les e-mails sont récupérés selon l'heure de modification, ils sont de nouveau récupérés au cycle suivant après avoir été marqués comme lus (en raison de modifications des métadonnées). Il s'agit du comportement attendu.",
    "You have two options:":
      "Vous disposez de deux options :",
    "Search for the following role groups:":
      "Recherchez les groupes de rôles suivants :",
    "If not listed, click":
      "S'il ne figure pas dans la liste, cliquez sur",
    "On the Assignments page that opens, select":
      "Sur la page Assignments qui s'ouvre, sélectionnez",
    "On the Roles and administrators page that opens, find and select one of the supported roles by clicking on the":
      "Sur la page Roles and administrators qui s'ouvre, recherchez et sélectionnez l'un des rôles pris en charge en cliquant sur",
    "Microsoft has announced the final phase of Exchange Web Services (EWS) retirement in Exchange Online, with phased disablement beginning in October 2026.":
      "Microsoft a annoncé la phase finale de l'abandon d'Exchange Web Services (EWS) dans Exchange Online, avec une désactivation progressive à partir d'octobre 2026.",
    "application used for authentication":
      "application utilisée pour l'authentification",

    // --- Batch: follow-up for the 09:38 export: items missed in the previous batch (EWS Extension Online PowerShell doc, Elasticsearch DQ label) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    "Use DQ syntax to map elastic JSON struct to incident fields, use :: as mapping seperator":
      "Utilisez la syntaxe DQ pour mapper la structure JSON d'Elastic aux champs d'incident et utilisez :: comme séparateur de mappage",
    ". Starting in October 2026, Microsoft will block all EWS traffic by default. Applications will only be able to access EWS if their specific Application (Client) ID is explicitly added to this allow list by the tenant administrator.":
      ". À partir d'octobre 2026, Microsoft bloquera par défaut tout le trafic EWS. Les applications ne pourront accéder à EWS que si leur ID d'application (client) spécifique a été explicitement ajouté à cette liste d'autorisation par l'administrateur du tenant.",
    "Deprecated. Use EWS v2 instead.":
      "Obsolète. Utilisez plutôt EWS v2.",
    "Deprecated. Use EWS Extension Online Powershell v3 instead.":
      "Obsolète. Utilisez plutôt EWS Extension Online Powershell v3.",
    "Deprecated. Use":
      "Obsolète. Utilisez",
    "instead.":
      "à la place.",
    "- Client Credential Flow.":
      "- Flux d'informations d'identification du client.",
    "– a highly privileged security role that also provides full access.":
      "– un rôle de sécurité hautement privilégié qui fournit également un accès complet.",
    "– the most privileged role and fully supported for this integration.":
      "– le rôle le plus privilégié et entièrement pris en charge pour cette intégration.",
    ". Assign the following API permission to the application:":
      ". Attribuez l'autorisation d'API suivante à l'application :",
    "Run the":
      "Exécutez la commande",
    "command in Cortex to acquire the certificate.":
      "dans Cortex pour obtenir le certificat.",
    "command in the Playground to acquire the certificate.":
      "dans le Playground pour obtenir le certificat.",
    "Open the role and verify that the":
      "Ouvrez le rôle et vérifiez que le",
    "service principal of the Azure AD application used by the integration":
      "principal de service de l'application Azure AD utilisée par l'intégration",
    "is listed.":
      "figure dans la liste.",
    "The role":
      "Le rôle",
    "is eligible for this integration.":
      "est éligible pour cette intégration.",
    "Search for":
      "Recherchez",
    "in the Search box.":
      "dans la zone de recherche.",
    ", give the application a name (for example:":
      ", donnez un nom à l'application (par exemple :",
    ") and click":
      ") et cliquez sur",
    ", search for":
      ", recherchez",
    "and assign the required roles.":
      "et attribuez les rôles nécessaires.",
    "and copy the Application (client) ID.":
      "et copiez l'ID d'application (client).",
    "Fore more information check the":
      "Pour plus d'informations, consultez la",
    "Microsoft Documentation.":
      "Documentation Microsoft.",
    "guide":
      "guide",
    "Azure AD portal":
      "portail Azure AD",

    // --- Batch: Elasticsearch v2 / Kibana / Microsoft Graph (Entra ID) integration doc page (Collector export 2026-10-12 07:23) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    "- API Key Auth: Enter the API Key ID and API Key.":
      "- API Key Auth : saisissez l'ID de la clé API et la clé API.",
    "- Basic Auth: Enter Username and Password.":
      "- Basic Auth : saisissez le nom d'utilisateur et le mot de passe.",
    "- Bearer Auth: Enter Username and Password.":
      "- Bearer Auth : saisissez le nom d'utilisateur et le mot de passe.",
    "- Index":
      "- Index",
    "- Index time field":
      "- Champ d'heure d'index",
    "- Query String or Raw Query":
      "- Chaîne de requête ou Raw Query",
    "— Bulk-update the status of security detection alerts (open, acknowledged, closed).":
      "— Mettez à jour en masse le statut des alertes de détection de sécurité (ouvertes, acquittées, fermées).",
    "— Create, update, delete, and import/export value lists used in detection rules.":
      "— Créez, mettez à jour, supprimez et importez/exportez les listes de valeurs utilisées dans les règles de détection.",
    "— Create, update, delete, and list Kibana cases; add comments, attach files, and link alerts to cases.":
      "— Créez, mettez à jour, supprimez et répertoriez les cas Kibana ; ajoutez des commentaires, joignez des fichiers et associez des alertes aux cas.",
    "— List rule types, retrieve rules, enable/disable rules, mute/unmute alerts.":
      "— Répertoriez les types de règles, récupérez des règles, activez/désactivez des règles et mettez en sourdine/réactivez des alertes.",
    "— Manage Kibana exception lists and their items, including Elastic Endpoint exceptions.":
      "— Gérez les listes d'exceptions Kibana et leurs éléments, y compris les exceptions Elastic Endpoint.",
    ", the required privilege is also scoped to the feature that owns the object:":
      ", le privilège requis est également limité à la fonctionnalité propriétaire de l'objet :",
    ". The level required depends on the operation:":
      ". Le niveau requis dépend de l'opération :",
    "Objects owned by":
      "Les objets appartenant à",
    "(e.g. SIEM detection rules, Security cases) require the":
      "(par exemple, règles de détection SIEM, cas Security) nécessitent le",
    "(e.g. Stack Rules) require the":
      "(par exemple, Stack Rules) nécessitent le",
    "require the":
      "nécessitent le",
    "feature privilege.":
      "privilège de fonctionnalité.",
    "feature privileges":
      "privilèges de fonctionnalité",
    "(for example,":
      "(par exemple :",
    "). Kibana is usually hosted separately from Elasticsearch, so this URL cannot be derived from the Elasticsearch":
      "). Kibana est généralement hébergé séparément d'Elasticsearch ; cette URL ne peut donc pas être déduite du paramètre Elasticsearch suivant :",
    "<number> <time unit>, e.g., 12 hours, 7 days":
      "<number> <time unit> (par exemple, 12 hours, 7 days)",
    "3 formats supported:":
      "3 formats sont pris en charge :",
    "A detailed explanation on how to register an app can be found":
      "Vous trouverez une explication détaillée sur la façon d'enregistrer une application",
    "Additional Configuration Parameters Details":
      "Détails des paramètres de configuration supplémentaires",
    "After authorizing the Cortex XSAOR app, you will get an ID, Token, and Key which needs to be added to the integration instance configuration’s corresponding fields.":
      "Après avoir autorisé l'application Cortex XSOAR, vous obtiendrez un ID, un jeton et une clé, qui doivent être ajoutés aux champs correspondants de la configuration de l'instance d'intégration.",
    "Alerts to Fetch":
      "Alertes à récupérer",
    "Allow secret generators commands execution":
      "Autoriser l'exécution des commandes de génération de secrets",
    "Allows raw DSL queries. For more information about Query DSL see":
      "Autorise les requêtes DSL brutes. Pour plus d'informations sur Query DSL, consultez",
    "API Client ID created in the User management UI.":
      "API Client ID créé dans l'interface User management.",
    "API Client Secret created in the User management UI.":
      "API Client Secret créé dans l'interface User management.",
    "API Key Authentication":
      "Authentification par clé API",
    "Application ID (Client ID for Client credentials mode)":
      "ID d'application (ID client pour le mode Client credentials)",
    "Application redirect URI (for Authorization Code flow mode)":
      "URI de redirection de l'application (pour le mode de flux Authorization Code)",
    "Application redirect URI (for Self Deployed - Authorization Code Flow)":
      "URI de redirection de l'application (pour auto-déployée - flux Authorization Code)",
    "Apply the filter to fetch policy events having actions such as \"deliver\", \"mark-spam\", \"move\", \"inbox\", \"delete\", \"none\". Fetches all types of actions by default.":
      "Appliquez le filtre pour récupérer les événements de politique ayant des actions telles que « deliver », « mark-spam », « move », « inbox », « delete », « none ». Par défaut, tous les types d'actions sont récupérés.",
    "Authentication Based on Azure Managed Identities":
      "Authentification basée sur les identités managées Azure",
    "Authentication based on Entra ID applications":
      "Authentification basée sur les applications Entra ID",
    "Authorization code (for Authorization Code flow mode - received from the authorization step. see Detailed Instructions)":
      "Code d'autorisation (pour le mode de flux Authorization Code ; reçu lors de l'étape d'autorisation ; consultez les instructions détaillées)",
    "Authorization code (for Self Deployed - Authorization Code Flow)":
      "Code d'autorisation (pour auto-déployée - flux Authorization Code)",
    "Authorization type":
      "Type d'autorisation",
    "Azure AD endpoint":
      "Point de terminaison Azure AD",
    "Azure AD endpoint associated with a national cloud.":
      "Point de terminaison Azure AD associé à un cloud national.",
    "Bearer Authentication":
      "Authentification Bearer",
    "Click the":
      "Cliquez sur le bouton",
    "button and you will be prompted to grant Cortex permissions for your Entra ID Users.":
      ". Vous serez alors invité à accorder à Cortex des autorisations pour vos utilisateurs Entra ID.",
    "button and you will receive your ID, token, and key. You will need to enter these when you configure the Entra ID Users integration instance in Cortex.":
      ". Vous recevrez votre ID, votre jeton et votre clé. Vous devrez les saisir lors de la configuration de l'instance d'intégration Entra ID Users dans Cortex.",
    "By default, Microsoft Entra ID Protection risk level is used as Cortex XSOAR/XSIAM issue severity. Select this option to override original risk level reported by Microsoft Entra ID Protection.":
      "Par défaut, le niveau de risque de Microsoft Entra ID Protection est utilisé comme gravité du problème Cortex XSOAR/XSIAM. Sélectionnez cette option pour remplacer le niveau de risque d'origine signalé par Microsoft Entra ID Protection.",
    "Checking this box will allow running commands that generate and print secrets. Make sure to add restrictions to the related commands. For more information please refer to the following guide - <MFA guide>":
      "Cocher cette case autorise l'exécution de commandes qui génèrent et affichent des secrets. Veillez à ajouter des restrictions aux commandes associées. Pour plus d'informations, consultez le guide suivant : <MFA guide>",
    "Client Credentials Flow (Recommended)":
      "Flux Client Credentials (recommandé)",
    "Client Secret (required for Client Credentials mode)":
      "Secret client (obligatoire pour le mode Client Credentials)",
    "Close Mirrored Elasticsearch Incident":
      "Fermer l'incident Elasticsearch mis en miroir",
    "Close Mirrored XSOAR Incident":
      "Fermer l'incident XSOAR mis en miroir",
    "Comma-separated list of fields to fetch (the `_source` field is always included).":
      "Liste des champs à récupérer, séparés par des virgules (le champ `_source` est toujours inclus).",
    "Detection Alerts":
      "Alertes de détection",
    "Device Code Flow":
      "Flux Device Code",
    "Elastic Cloud deployments:":
      "Déploiements Elastic Cloud :",
    "Example: created_at.after(2020-11-11T09:16:44Z) or id.eq(537557694)":
      "Exemple : created_at.after(2020-11-11T09:16:44Z) ou id.eq(537557694)",
    "Syntax: field.operator(operand) {and/or field.operator(operand)}":
      "Syntaxe : field.operator(operand) {and/or field.operator(operand)}",
    "Syntax: field.operator(operand) {and/or field.operator(operand)} Example: created_at.after(2020-11-11T09:16:44Z) or id.eq(537557694)":
      "Syntaxe : field.operator(operand) {and/or field.operator(operand)} Exemple : created_at.after(2020-11-11T09:16:44Z) ou id.eq(537557694)",
    "Exception Lists & Items":
      "Listes d'exceptions et éléments",
    "Exclude alerts while fetching policy events of type 'Message Alert' or 'System Alert'.":
      "Excluez les alertes lors de la récupération des événements de politique de type 'Message Alert' ou 'System Alert'.",
    "Fetch alerts for case":
      "Récupérer les alertes du cas",
    "Fetch Cases":
      "Récupérer les cas",
    "Fetch cases by Severity":
      "Récupérer les cas par gravité",
    "Fetch cases by Status":
      "Récupérer les cas par statut",
    "Fetch incident types":
      "Types d'incidents à récupérer",
    "Fetch Security Alerts":
      "Récupérer les alertes de sécurité",
    "Fetching security alerts requires:":
      "La récupération des alertes de sécurité nécessite :",
    "field (DSL query). The index must follow one of these patterns:":
      "(requête DSL). L'index doit suivre l'un de ces modèles :",
    "Fields to Fetch":
      "Champs à récupérer",
    "First fetch timestamp":
      "Horodatage de la première récupération",
    "For further information about type mapping, see":
      "Pour plus d'informations sur le mappage des types, consultez",
    "For information, see":
      "Pour plus d'informations, consultez",
    "For more info about API Key management see":
      "Pour plus d'informations sur la gestion des clés API, consultez",
    "For more info see":
      "Pour plus d'informations, consultez",
    "For more information about the Lucene syntax, see the link in the help section.":
      "Pour plus d'informations sur la syntaxe Lucene, consultez le lien dans la section d'aide.",
    "For more information see the link in the help section.":
      "Pour plus d'informations, consultez le lien dans la section d'aide.",
    "ID or Client ID":
      "ID ou ID client",
    "Key or Client Secret":
      "Clé ou secret client",
    "Token or Tenant ID":
      "Jeton ou ID de tenant",
    "Incident Mirroring Direction":
      "Sens de mise en miroir des incidents",
    "Index time field":
      "Champ d'heure d'index",
    "Index to fetch incidents from":
      "Index à partir duquel récupérer les incidents",
    "Kibana Integration":
      "Intégration Kibana",
    "Kibana Server URL":
      "URL du serveur Kibana",
    "Kibana Spaces":
      "Espaces Kibana",
    "Kibana Spaces (optional)":
      "Espaces Kibana (facultatif)",
    "Map JSON fields into labels":
      "Mapper les champs JSON en étiquettes",
    "Max Fetch Incidents Returned":
      "Nombre maximal d'incidents récupérés renvoyés",
    "Microsoft integrations (Graph and Azure) in Cortex use Entra ID applications to authenticate with Microsoft APIs. These integrations use OAuth 2.0 and OpenID Connect standard compliant authentication services, which use an application to sign in or delegate authentication. For more information, see the Microsoft identity platform overview.":
      "Les intégrations Microsoft (Graph et Azure) dans Cortex utilisent des applications Entra ID pour s'authentifier auprès des API Microsoft. Ces intégrations utilisent des services d'authentification conformes aux normes OAuth 2.0 et OpenID Connect, qui s'appuient sur une application pour se connecter ou déléguer l'authentification. Pour plus d'informations, consultez Microsoft identity platform overview.",
    "Mirroring is only available for Elasticsearch Security Alerts and Cases.":
      "La mise en miroir n'est disponible que pour Elasticsearch Security Alerts et Cases.",
    "Not all fields can be used for sorting in Elasticsearch. Sorting is only supported for fields of the following types:":
      "Dans Elasticsearch, tous les champs ne peuvent pas être utilisés pour le tri. Le tri n'est pris en charge que pour les champs des types suivants :",
    "Note: Depending on the authentication method that you use, the integration parameters might change.":
      "Remarque : selon la méthode d'authentification que vous utilisez, les paramètres de l'intégration peuvent changer.",
    "On-premises (self-managed) deployments:":
      "Déploiements sur site (autogérés) :",
    "Operations covered":
      "Opérations couvertes",
    "Override Microsoft Entra ID Protection risk level":
      "Remplacer le niveau de risque de Microsoft Entra ID Protection",
    "POST / PUT / PATCH / DELETE — create, update, delete, and change-state commands":
      "POST / PUT / PATCH / DELETE : commandes de création, de mise à jour, de suppression et de changement d'état",
    "Privilege level":
      "Niveau de privilège",
    "Query String":
      "Chaîne de requête",
    "Query String is queried using the Lucene syntax. For more information about the Lucene syntax see":
      "La chaîne de requête est interrogée à l'aide de la syntaxe Lucene. Pour plus d'informations sur la syntaxe Lucene, consultez",
    "Query string uses the Lucene syntax.":
      "La chaîne de requête utilise la syntaxe Lucene.",
    "Query string uses the Lucene syntax. For more information about the Lucene syntax, see the link in the help section. The query will be used when fetching incidents. Index time field will be used as a filter in the query. The integration test button doesn't fully test the fetch incidents validity. To verify that the instance is set up correctly for fetching incidents, run the '!es-integration-health-check' command.":
      "La chaîne de requête utilise la syntaxe Lucene. Pour plus d'informations sur la syntaxe Lucene, consultez le lien dans la section d'aide. La requête sera utilisée lors de la récupération des incidents. Le champ d'heure d'index sera utilisé comme filtre dans la requête. Le bouton de test de l'intégration ne teste pas entièrement la validité de la récupération des incidents. Pour vérifier que l'instance est correctement configurée pour récupérer des incidents, exécutez la commande '!es-integration-health-check'.",
    "Raw Query allows raw DSL queries and will override the 'Query String' Lucene syntax string.":
      "Raw Query permet d'utiliser des requêtes DSL brutes et remplace la chaîne de syntaxe Lucene de 'Query String'.",
    "Raw Query allows raw DSL queries and will override the 'Query String' Lucene syntax string. Results will not be filtered or sorted. Use additional parameters in the raw query for these purposes. For more information see the link in the help section. The integration test button doesn't fully test the fetch incidents validity. To verify that the instance is set up correctly for fetching incidents, run the '!es-integration-health-check' command.":
      "Raw Query permet d'utiliser des requêtes DSL brutes et remplace la chaîne de syntaxe Lucene de 'Query String'. Les résultats ne seront ni filtrés ni triés. Utilisez des paramètres supplémentaires dans la requête brute à cet effet. Pour plus d'informations, consultez le lien dans la section d'aide. Le bouton de test de l'intégration ne teste pas entièrement la validité de la récupération des incidents. Pour vérifier que l'instance est correctement configurée pour récupérer des incidents, exécutez la commande '!es-integration-health-check'.",
    "Results will not be filtered or sorted. Use additional parameters in the raw query for these purposes.":
      "Les résultats ne seront ni filtrés ni triés. Utilisez des paramètres supplémentaires dans la requête brute à cet effet.",
    "The integration test button doesn't fully test the fetch incidents validity. To verify that the instance is set up correctly for fetching incidents, run the '!es-integration-health-check' command.":
      "Le bouton de test de l'intégration ne teste pas entièrement la validité de la récupération des incidents. Pour vérifier que l'instance est correctement configurée pour récupérer des incidents, exécutez la commande '!es-integration-health-check'.",
    "The query will be used when fetching incidents. Index time field will be used as a filter in the query.":
      "La requête sera utilisée lors de la récupération des incidents. Le champ d'heure d'index sera utilisé comme filtre dans la requête.",
    "Relevant only if the integration is running on Azure VM. If selected, authenticates based on the value provided for the Azure Managed Identities Client ID field. If no value is provided for the Azure Managed Identities Client ID field, authenticates based on the System Assigned Managed Identity. For additional information, see the Help tab.":
      "Pertinent uniquement si l'intégration s'exécute sur une machine virtuelle Azure. Si cette option est sélectionnée, l'authentification est basée sur la valeur fournie dans le champ Azure Managed Identities Client ID. Si aucune valeur n'est fournie dans le champ Azure Managed Identities Client ID, l'authentification est basée sur l'identité managée affectée par le système. Pour plus d'informations, consultez l'onglet Help.",
    "Required Kibana Privileges":
      "Privilèges Kibana requis",
    "Select the authentication type and enter the appropriate credentials:":
      "Sélectionnez le type d'authentification et saisissez les identifiants appropriés :",
    "Select the authentication type and enter the appropriate credentials: - Basic Auth: Enter Username and Password. - Bearer Auth: Enter Username and Password. - API Key Auth: Enter the API Key ID and API Key.":
      "Sélectionnez le type d'authentification et saisissez les identifiants appropriés : - Basic Auth : saisissez le nom d'utilisateur et le mot de passe. - Bearer Auth : saisissez le nom d'utilisateur et le mot de passe. - API Key Auth : saisissez l'ID de la clé API et la clé API.",
    "Select what type of Identity alert from MSGraph you want to ingest.":
      "Sélectionnez le type d'alerte Identity de MSGraph que vous souhaitez ingérer.",
    "Server URL (e.g., https://graph.microsoft.com)":
      "URL du serveur (par exemple, https://graph.microsoft.com)",
    "Severity of the Cortex XSOAR/XSIAM issue to be created if Microsoft Entra ID Protection risk level override has been selected. Severity will be the same for all Microsoft Entra ID Protection alerts.":
      "Gravité du problème Cortex XSOAR/XSIAM à créer si le remplacement du niveau de risque de Microsoft Entra ID Protection a été sélectionné. La gravité sera la même pour toutes les alertes Microsoft Entra ID Protection.",
    "Simple-Date - A plain date string. You must specify the format in which the date is stored. For more information about time formatting, see":
      "Simple-Date : une chaîne de date simple. Vous devez spécifier le format dans lequel la date est stockée. Pour plus d'informations sur le format de l'heure, consultez",
    "Suppress Errors for Non Found Groups":
      "Supprimer les erreurs pour les groupes introuvables",
    "Suppress Errors for Non Found Users":
      "Supprimer les erreurs pour les utilisateurs introuvables",
    "Tenant ID (required for Client Credentials mode)":
      "ID de tenant (obligatoire pour le mode Client Credentials)",
    "This integration includes a set of":
      "Cette intégration comprend un ensemble de",
    "that let you interact with Kibana directly from Cortex — no separate Kibana integration required.":
      "qui vous permettent d'interagir avec Kibana directement depuis Cortex, sans intégration Kibana distincte.",
    "The “Test” button does not fully validate the fetch incidents functionality. To ensure the instance is correctly fetching incidents, run the":
      "Le bouton [Test] ne valide pas entièrement la fonctionnalité de récupération des incidents. Pour vous assurer que l'instance récupère correctement les incidents, exécutez la commande",
    "The case severities to fetch. If none is chosen, all severity levels will be returned. Relevant only for incident type Elasticsearch Case.":
      "Les gravités des cas à récupérer. Si aucune n'est choisie, tous les niveaux de gravité seront renvoyés. Pertinent uniquement pour le type d'incident Elasticsearch Case.",
    "The case statuses to fetch. If none is chosen, in-progress and open will be returned. Relevant only for incident type Elasticsearch Case.":
      "Les statuts des cas à récupérer. Si aucun n'est choisi, in-progress et open seront renvoyés. Pertinent uniquement pour le type d'incident Elasticsearch Case.",
    "The Elasticsearch server to which the integration connects. Ensure that the URL includes the correct Elasticsearch port. The default port for Elasticsearch v7 and below is 9200. Use the Server URL for on-premises deployments.":
      "Le serveur Elasticsearch auquel l'intégration se connecte. Assurez-vous que l'URL inclut le bon port Elasticsearch. Le port par défaut d'Elasticsearch v7 et versions antérieures est 9200. Utilisez le Server URL pour les déploiements sur site.",
    "The Elasticsearch v2 integration supports Elasticsearch 6.0.0 and later.":
      "L'intégration Elasticsearch v2 prend en charge Elasticsearch 6.0.0 et versions ultérieures.",
    "The maximum number of incidents per request from Entra ID. Default is 50.":
      "Le nombre maximal d'incidents par requête depuis Entra ID. La valeur par défaut est 50.",
    "The maximum number of results per fetch":
      "Le nombre maximal de résultats par récupération",
    "The mirroring direction. Mirroring works only for incident types Elasticsearch Security Alert and Elasticsearch Case.":
      "Le sens de la mise en miroir. La mise en miroir ne fonctionne que pour les types d'incidents Elasticsearch Security Alert et Elasticsearch Case.",
    "The time field used for sorting and limiting results. If using a nested field, separate field names with dot notation.":
      "Le champ d'heure utilisé pour trier et limiter les résultats. Si vous utilisez un champ imbriqué, séparez les noms de champs avec la notation par points.",
    "The time range to consider for the initial data fetch in the format <number> <unit>. For example, 1 hour, 2 hours, 6 hours, 12 hours, 24 hours, 48 hours, etc.":
      "La plage de temps à prendre en compte pour la récupération initiale des données, au format <number> <unit>. Par exemple, 1 hour, 2 hours, 6 hours, 12 hours, 24 hours, 48 hours, etc.",
    "The time range to consider for the initial data fetch. (<number> <unit>, e.g., 2 minutes, 2 hours, 2 days, 2 months, 2 years). Default is 3 days.":
      "La plage de temps à prendre en compte pour la récupération initiale des données. (<number> <unit>, par exemple 2 minutes, 2 hours, 2 days, 2 months, 2 years). La valeur par défaut est 3 days.",
    "The type of incident to fetch from Elasticsearch (Security Alert, Case, or other entity).":
      "Le type d'incident à récupérer depuis Elasticsearch (Security Alert, Case ou autre entité).",
    "There are two application authentication methods available:":
      "Deux méthodes d'authentification d'application sont disponibles :",
    "There are two different authentication methods for self-deployed configuration:":
      "Il existe deux méthodes d'authentification différentes pour la configuration auto-déployée :",
    "This integration was integrated and tested with versions 6.6.2, 7.3, 8.4.1 of Elasticsearch.":
      "Cette intégration a été intégrée et testée avec les versions 6.6.2, 7.3 et 8.4.1 d'Elasticsearch.",
    "Time field type":
      "Type de champ d'heure",
    "Timestamp-Milliseconds - A numeric value representing the number of milliseconds since the Unix epoch. Example: ‘1572164838123’":
      "Timestamp-Milliseconds : une valeur numérique représentant le nombre de millisecondes écoulées depuis l'époque Unix. Exemple : ‘1572164838123’",
    "Timestamp-Second - A numeric value representing the number of seconds since the Unix epoch (00:00:00 UTC on 1 January 1970). Example: ‘1572164838’":
      "Timestamp-Second : une valeur numérique représentant le nombre de secondes écoulées depuis l'époque Unix (00:00:00 UTC le 1er janvier 1970). Exemple : ‘1572164838’",
    "To allow access to Entra ID Groups, an administrator has to approve the Cortex app using an admin consent flow, by clicking this":
      "Pour autoriser l'accès aux groupes Entra ID, un administrateur doit approuver l'application Cortex via un flux de consentement de l'administrateur, en cliquant sur ce lien :",
    "To connect to Microsoft Graph Identity & Access using either Cortex Graph app or the Self-Deployed Graph app:":
      "Pour vous connecter à Microsoft Graph Identity & Access à l'aide de l'application Cortex Graph ou de l'application Graph auto-déployée :",
    "To connect to Microsoft Graph Services using either the Cortex Azure app or the self-deployed Azure app:":
      "Pour vous connecter à Microsoft Graph Services à l'aide de l'application Cortex Azure ou de l'application Azure auto-déployée :",
    "To use a self-configured Azure application, you need to add a new Azure app registration in the Azure portal. To add the registration, see this":
      "Pour utiliser une application Azure que vous avez configurée vous-même, vous devez ajouter un nouvel enregistrement d'application Azure dans le portail Azure. Pour ajouter l'enregistrement, consultez ce",
    "To use a self-configured Azure application, you need to add a new Azure App Registration in the Azure Portal. To add the registration.":
      "Pour utiliser une application Azure que vous avez configurée vous-même, vous devez ajouter un nouvel enregistrement d'application Azure dans le portail Azure. Pour ajouter l'enregistrement, consultez ce",
    "To use Microsoft Graph Services, you need to configure authentication. There are three authentication methods available:":
      "Pour utiliser Microsoft Graph Services, vous devez configurer l'authentification. Trois méthodes d'authentification sont disponibles :",
    "To use the Cortex Azure application, use the default application ID (597c0375-766f-4e6d-ad2a-f48117044ac5).":
      "Pour utiliser l'application Cortex Azure, utilisez l'ID d'application par défaut (597c0375-766f-4e6d-ad2a-f48117044ac5).",
    "To use the Cortex Azure application, use the default application ID (6b071e63-f701-454b-9e54-ede4c96483e6).":
      "Pour utiliser l'application Cortex Azure, utilisez l'ID d'application par défaut (6b071e63-f701-454b-9e54-ede4c96483e6).",
    "To use this integration, you need to configure authentication. There are three authentication methods available:":
      "Pour utiliser cette intégration, vous devez configurer l'authentification. Trois méthodes d'authentification sont disponibles :",
    "Type of authentication - could be Client Credentials Authorization Flow (recommended) or Device Flow":
      "Type d'authentification : Client Credentials Authorization Flow (recommandé) ou Device Flow",
    "Use a self-deployed Azure application and authenticate using the Client Credentials flow.":
      "Utilisez une application Azure auto-déployée et authentifiez-vous à l'aide du flux Client Credentials.",
    "Use Client Credentials Authorization Flow":
      "Utiliser Client Credentials Authorization Flow",
    "Use this option when required to customize the URL to the Microsoft Graph User endpoint. More information can be found here - https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud":
      "Utilisez cette option lorsque vous devez personnaliser l'URL du point de terminaison Microsoft Graph User. Vous trouverez plus d'informations ici : https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud",
    "Value Lists":
      "Listes de valeurs",
    "We recommend using the Client Credentials flow.":
      "Nous recommandons d'utiliser le flux Client Credentials.",
    "What you can do with Kibana commands":
      "Ce que vous pouvez faire avec les commandes Kibana",
    "When selecting the Custom option, the Server URL parameter must be filled. More information about National clouds can be found here - https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud":
      "Lorsque vous sélectionnez l'option Custom, le paramètre Server URL doit être renseigné. Vous trouverez plus d'informations sur les clouds nationaux ici : https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud",
    "When using the Authorization Code flow, make sure the user you authenticate with has the relevant roles in Azure AD in order to execute the operation.":
      "Lorsque vous utilisez le flux Authorization Code, assurez-vous que l'utilisateur avec lequel vous vous authentifiez dispose des rôles appropriés dans Azure AD pour exécuter l'opération.",
    "Whether closing the Cortex incident is mirrored in Elasticsearch.":
      "Indique si la fermeture de l'incident Cortex est mise en miroir dans Elasticsearch.",
    "Whether closing the Elasticsearch alert or case is mirrored in Cortex.":
      "Indique si la fermeture de l'alerte ou du cas Elasticsearch est mise en miroir dans Cortex.",
    "Whether to fetch alerts associated with each Elasticsearch Case. You must have read privileges for the Cases feature in the Management, Observability, or Security section of the Kibana feature privileges.":
      "Indique s'il faut récupérer les alertes associées à chaque Elasticsearch Case. Vous devez disposer des privilèges de lecture pour la fonctionnalité Cases dans la section Management, Observability ou Security des privilèges de fonctionnalité Kibana.",
    "You can authenticate either by Entra ID applications or by Azure Managed Identities.":
      "Vous pouvez vous authentifier au moyen d'applications Entra ID ou d'identités managées Azure.",
    "You need to grant Cortex authorization to access Entra ID Users.":
      "Vous devez accorder à Cortex l'autorisation d'accéder aux utilisateurs Entra ID.",

    // --- Batch: Elasticsearch v2 / Kibana URL setup list: fragments with a known neighbouring structure (follow-up to the 07:23 export) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    "Kibana URL":
      "URL Kibana",
    "parameter to the address of your Kibana server, including the port if it is not the default (e.g.":
      "sur l'adresse de votre serveur Kibana, en incluant le port s'il n'est pas celui par défaut (par exemple :",
    "You can leave":
      "Vous pouvez laisser vide le paramètre",
    "empty. The URL is then derived automatically from the":
      ". L'URL est alors déduite automatiquement du paramètre",
    ", by replacing the":
      ", en remplaçant le",
    "segment of the hostname with":
      "segment du nom d'hôte par",
    "becomes":
      "devient",
    "When":
      "Lorsque le paramètre",
    "is set, it always takes precedence over the derivation from the":
      "est défini, il est toujours prioritaire sur la déduction à partir du paramètre",

    // --- Batch: Microsoft Graph / Azure Managed Identity setup steps: fragments with a known neighbouring structure (follow-up to the 07:23 export) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    "In order to use the":
      "Pour utiliser la commande",
    "command, you must use with the Authorization Code flow.":
      ", vous devez utiliser le flux Authorization Code.",
    "Select the":
      "Cochez la case",
    "checkbox and leave the":
      "et laissez le champ",
    "field empty.":
      "vide.",

    // --- Batch: ExtraHop Reveal(x) / Flashpoint Ignite / F5 Silverline / FireEye HX / Kenna / McAfee / Envoy / Microsoft integration docs and parameter tooltips (07:55 export) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    ". Each API call fetches a maximum of 200 detection events.":
      ". Chaque appel d'API récupère un maximum de 200 événements de détection.",
    "Advanced Filter":
      "Filtre avancé",
    "api_admin role.":
      "rôle api_admin.",
    "api_analyst role.":
      "rôle api_analyst.",
    "Applies a filter to the list of detections based on a JSON-specific query.":
      "Applique un filtre à la liste des détections à l'aide d'une requête spécifique JSON.",
    "Applies a filter to the list of detections based on a JSON-specific query. Example for detections: { \"categories\": [\"sec.attack\"], \"risk_score_min\": 51 } If the categories and category are not specified, then categories will be set to [\"sec.attack\"]. The category field is deprecated by the API, so please use the categories field instead. For a complete reference to the Extrahop detections filter fields, please refer to the ExtraHop REST API documentation at https://docs.extrahop.com/current/rest-api-guide/":
      "Applique un filtre à la liste des détections à l'aide d'une requête spécifique JSON. Exemple pour les détections : { \"categories\": [\"sec.attack\"], \"risk_score_min\": 51 } Si categories et category ne sont pas spécifiés, categories sera défini sur [\"sec.attack\"]. Le champ category est obsolète dans l'API ; utilisez donc le champ categories. Pour une référence complète des champs de filtre des détections ExtraHop, consultez la documentation de l'API REST ExtraHop à l'adresse https://docs.extrahop.com/current/rest-api-guide/",
    "Applies a filter to the list of detections or metrics based on a JSON-specific query.":
      "Applique un filtre à la liste des détections ou des métriques à l'aide d'une requête spécifique JSON.",
    "As the F5 Silverline API does not support fetch incidents for now, we retrieve alerts via a log collector.":
      "L'API F5 Silverline ne prenant pas en charge la récupération des incidents pour le moment, nous récupérons les alertes via un collecteur de journaux.",
    "Attack Types":
      "Types d'attaque",
    "Backfill vulnerabilities by providing date or relative timestamp.":
      "Renseignez rétroactivement les vulnérabilités en fournissant une date ou un horodatage relatif.",
    "Backfill vulnerabilities by providing date or relative timestamp. Formats accepted: 2 minutes, 2 hours, 2 days, 2 weeks, 2 months, 2 years, yyyy-mm-dd, yyyy-mm-ddTHH:MM:SSZ. Default: 3 days.":
      "Renseignez rétroactivement les vulnérabilités en fournissant une date ou un horodatage relatif. Formats acceptés : 2 minutes, 2 hours, 2 days, 2 weeks, 2 months, 2 years, yyyy-mm-dd, yyyy-mm-ddTHH:MM:SSZ. Valeur par défaut : 3 days.",
    "Formats accepted: 2 minutes, 2 hours, 2 days, 2 weeks, 2 months, 2 years, yyyy-mm-dd, yyyy-mm-ddTHH:MM:SSZ.":
      "Formats acceptés : 2 minutes, 2 hours, 2 days, 2 weeks, 2 months, 2 years, yyyy-mm-dd, yyyy-mm-ddTHH:MM:SSZ.",
    "Default: 3 days.":
      "Valeur par défaut : 3 days.",
    "Click on the":
      "Cliquez sur le bouton",
    "button and paste it into the “API Key” parameter. Then, click on the":
      "et collez-le dans le paramètre « API Key ». Cliquez ensuite sur le bouton",
    "button to save the generated token and close the token generation page.":
      "pour enregistrer le jeton généré et fermer la page de génération de jetons.",
    "Click on your profile icon on the top right and select the":
      "Cliquez sur votre icône de profil en haut à droite et sélectionnez l'option",
    "option from the dropdown. Alternatively, click on":
      "dans le menu déroulant. Vous pouvez également cliquer sur",
    "to be taken directly to the Generate Token page.":
      "pour accéder directement à la page Generate Token.",
    "Enter the required details (i.e., Token Name, Ignite Username) and click on":
      "Saisissez les informations requises (c'est-à-dire Token Name, Ignite Username) et cliquez sur",
    "If you already have an API key you can find it there.":
      "Si vous disposez déjà d'une clé API, vous pouvez la trouver à cet endroit.",
    "If you do not have an API Key, generate one by clicking":
      "Si vous n'avez pas de clé API, générez-en une en cliquant sur",
    "Login/Register at":
      "Connectez-vous ou inscrivez-vous sur",
    "Configure an API account on Flashpoint Ignite":
      "Configurer un compte API sur Flashpoint Ignite",
    "Configure an instance for ExtraHop Reveal(x)":
      "Configurer une instance pour ExtraHop Reveal(x)",
    "Due to a known limitation, clicking the":
      "En raison d'une limitation connue, un clic répété sur le bouton",
    "button several times in quick succession may result in an “Unauthorized” error, even after a successful result was initially returned. It is enough to receive one success message to verify that the configuration is correct. “Unauthorized” error messages received from repeated clicking of the instance configuration":
      "en succession rapide peut provoquer une erreur « Unauthorized », même après qu'un résultat positif a été initialement renvoyé. Il suffit de recevoir un message de réussite pour vérifier que la configuration est correcte. Les messages d'erreur « Unauthorized » reçus après des clics répétés sur le bouton de configuration de l'instance",
    "button do not affect the validity of the instance if the initial response was successful.":
      "n'affectent pas la validité de l'instance si la réponse initiale a réussi.",
    "Complete the following configuration options:":
      "Renseignez les options de configuration suivantes :",
    "Connect to McAfee TIE using the McAfee DXL client.":
      "Connectez-vous à McAfee TIE à l'aide du client McAfee DXL.",
    "Create relationships between indicators as part of Enrichment.":
      "Créez des relations entre les indicateurs dans le cadre de l'enrichissement.",
    "CWE IDs":
      "ID CWE",
    "Deprecated. Use McAfee ePO v2 instead.":
      "Obsolète. Utilisez plutôt McAfee ePO v2.",
    "Deprecated. Use McAfee Threat Intelligence Exchange V2 integration instead.":
      "Obsolète. Utilisez plutôt l'intégration McAfee Threat Intelligence Exchange V2.",
    "Deprecated. Use the Kafka v2 integration instead.":
      "Obsolète. Utilisez plutôt l'intégration Kafka v2.",
    "Deprecated. Use the Mattermost v2 integration instead.":
      "Obsolète. Utilisez plutôt l'intégration Mattermost v2.",
    "Deprecated. Use the McAfee ESM v2 integration instead.":
      "Obsolète. Utilisez plutôt l'intégration McAfee ESM v2.",
    "Enter a unique":
      "Saisissez un",
    "for the instance.":
      "unique pour l'instance.",
    "Envoy Integration consists of a set of API endpoints that allow customers to automate provisioning of users.":
      "L'intégration Envoy se compose d'un ensemble de points de terminaison d'API qui permettent aux clients d'automatiser le provisionnement des utilisateurs.",
    "Example for detections:":
      "Exemple pour les détections :",
    "Fetch limit":
      "Limite de récupération",
    "Fetching F5 Silverline Alerts":
      "Récupération des alertes F5 Silverline",
    "Filter by associated product names (case-insensitive).":
      "Filtrer par noms de produits associés (insensible à la casse).",
    "Filter by associated vendor names (case-insensitive).":
      "Filtrer par noms de fournisseurs associés (insensible à la casse).",
    "Filter by Attack type classification.":
      "Filtrer par classification du type d'attaque.",
    "Filter by CWE IDs assigned by Mitre.":
      "Filtrer par ID CWE attribués par Mitre.",
    "Filter by location type classification.":
      "Filtrer par classification du type d'emplacement.",
    "Filter by lower limit of the CVSS v2 score. Prioritizes Flashpoint generated scores when possible. Example value 7.0":
      "Filtrer selon la limite inférieure du score CVSS v2. Donne la priorité aux scores générés par Flashpoint lorsque c'est possible. Exemple de valeur : 7.0",
    "Filter by lower limit of the CVSS v2 score. Prioritizes Flashpoint generated scores when possible. Example value 7.0 Note: Value must be a float between 0 and 10.":
      "Filtrer selon la limite inférieure du score CVSS v2. Donne la priorité aux scores générés par Flashpoint lorsque c'est possible. Exemple de valeur : 7.0 Remarque : la valeur doit être un nombre à virgule flottante compris entre 0 et 10.",
    "Filter by lower limit of the CVSS v3 score. Prioritizes Flashpoint generated scores when possible. Example value 7.0":
      "Filtrer selon la limite inférieure du score CVSS v3. Donne la priorité aux scores générés par Flashpoint lorsque c'est possible. Exemple de valeur : 7.0",
    "Filter by lower limit of the CVSS v3 score. Prioritizes Flashpoint generated scores when possible. Example value 7.0 Note: Value must be a float between 0 and 10.":
      "Filtrer selon la limite inférieure du score CVSS v3. Donne la priorité aux scores générés par Flashpoint lorsque c'est possible. Exemple de valeur : 7.0 Remarque : la valeur doit être un nombre à virgule flottante compris entre 0 et 10.",
    "Filter by lower limit of the CVSS v4 score. Prioritizes Flashpoint generated scores when possible. Example value 7.0":
      "Filtrer selon la limite inférieure du score CVSS v4. Donne la priorité aux scores générés par Flashpoint lorsque c'est possible. Exemple de valeur : 7.0",
    "Filter by lower limit of the CVSS v4 score. Prioritizes Flashpoint generated scores when possible. Example value 7.0 Note: Value must be a float between 0 and 10.":
      "Filtrer selon la limite inférieure du score CVSS v4. Donne la priorité aux scores générés par Flashpoint lorsque c'est possible. Exemple de valeur : 7.0 Remarque : la valeur doit être un nombre à virgule flottante compris entre 0 et 10.",
    "Filter by upper limit of the CVSS v2 score. Prioritizes Flashpoint generated scores when possible. Example value 10.0":
      "Filtrer selon la limite supérieure du score CVSS v2. Donne la priorité aux scores générés par Flashpoint lorsque c'est possible. Exemple de valeur : 10.0",
    "Filter by upper limit of the CVSS v2 score. Prioritizes Flashpoint generated scores when possible. Example value 10.0 Note: Value must be a float between 0 and 10.":
      "Filtrer selon la limite supérieure du score CVSS v2. Donne la priorité aux scores générés par Flashpoint lorsque c'est possible. Exemple de valeur : 10.0 Remarque : la valeur doit être un nombre à virgule flottante compris entre 0 et 10.",
    "Filter by upper limit of the CVSS v3 score. Prioritizes Flashpoint generated scores when possible. Example value 10.0":
      "Filtrer selon la limite supérieure du score CVSS v3. Donne la priorité aux scores générés par Flashpoint lorsque c'est possible. Exemple de valeur : 10.0",
    "Filter by upper limit of the CVSS v3 score. Prioritizes Flashpoint generated scores when possible. Example value 10.0 Note: Value must be a float between 0 and 10.":
      "Filtrer selon la limite supérieure du score CVSS v3. Donne la priorité aux scores générés par Flashpoint lorsque c'est possible. Exemple de valeur : 10.0 Remarque : la valeur doit être un nombre à virgule flottante compris entre 0 et 10.",
    "Filter by upper limit of the CVSS v4 score. Prioritizes Flashpoint generated scores when possible. Example value 10.0":
      "Filtrer selon la limite supérieure du score CVSS v4. Donne la priorité aux scores générés par Flashpoint lorsque c'est possible. Exemple de valeur : 10.0",
    "Filter by upper limit of the CVSS v4 score. Prioritizes Flashpoint generated scores when possible. Example value 10.0 Note: Value must be a float between 0 and 10.":
      "Filtrer selon la limite supérieure du score CVSS v4. Donne la priorité aux scores générés par Flashpoint lorsque c'est possible. Exemple de valeur : 10.0 Remarque : la valeur doit être un nombre à virgule flottante compris entre 0 et 10.",
    "Filter by lower limit of the EPSS v3 score. Example value 0.5":
      "Filtrer selon la limite inférieure du score EPSS v3. Exemple de valeur : 0.5",
    "Filter by lower limit of the EPSS v3 score. Example value 0.5 Note: Value must be a float between 0 and 1.":
      "Filtrer selon la limite inférieure du score EPSS v3. Exemple de valeur : 0.5 Remarque : la valeur doit être un nombre à virgule flottante compris entre 0 et 1.",
    "Filter by upper limit of the EPSS v3 score. Example value 1.0":
      "Filtrer selon la limite supérieure du score EPSS v3. Exemple de valeur : 1.0",
    "Filter by upper limit of the EPSS v3 score. Example value 1.0 Note: Value must be a float between 0 and 1.":
      "Filtrer selon la limite supérieure du score EPSS v3. Exemple de valeur : 1.0 Remarque : la valeur doit être un nombre à virgule flottante compris entre 0 et 1.",
    "Note: Value must be a float between 0 and 1.":
      "Remarque : la valeur doit être un nombre à virgule flottante compris entre 0 et 1.",
    "Note: Value must be a float between 0 and 10.":
      "Remarque : la valeur doit être un nombre à virgule flottante compris entre 0 et 10.",
    "Filter by Ransomware score.":
      "Filtrer par score de ransomware.",
    "Filter by reference types.":
      "Filtrer par types de référence.",
    "Filter by reference values. Use with Reference Types to filter by specific reference type.":
      "Filtrer par valeurs de référence. Utilisez-le avec Reference Types pour filtrer par type de référence spécifique.",
    "Filter by severity, which is calculated based on CVSS values.":
      "Filtrer par gravité, calculée à partir des valeurs CVSS.",
    "Filter by Tags":
      "Filtrer par balises",
    "Filter vulnerabilities by tags.":
      "Filtrer les vulnérabilités par balises.",
    "FireEye Endpoint Security is an integrated solution that detects what others miss and protects endpoints against known and unknown threats. The HX Cortex integration provides access to information about endpoints, acquisitions, alerts, indicators, and containment. Customers can extract critical data and effectively operate a security operations automated playbook":
      "FireEye Endpoint Security est une solution intégrée qui détecte ce que les autres manquent et protège les endpoints contre les menaces connues et inconnues. L'intégration HX Cortex donne accès aux informations sur les endpoints, les acquisitions, les alertes, les indicateurs et le confinement. Les clients peuvent extraire des données critiques et exploiter efficacement un playbook automatisé d'opérations de sécurité",
    "First fetch timestamp (<number> <time unit>, e.g., 12 hours, 3 days)":
      "Horodatage de la première récupération (<number> <time unit>, par exemple 12 hours, 3 days)",
    "For a complete reference to the Extrahop detections filter fields, please refer to the ExtraHop REST API documentation at":
      "Pour une référence complète des champs de filtre des détections ExtraHop, consultez la documentation de l'API REST ExtraHop à l'adresse",
    "For example: 10 minutes, 5 hours, 8 days, 2 weeks, 8 months, 2021-12-31, 01 Mar 2021, 01 Feb 2021 04:45:33, 2022-04-17T14:05:44Z":
      "Par exemple : 10 minutes, 5 hours, 8 days, 2 weeks, 8 months, 2021-12-31, 01 Mar 2021, 01 Feb 2021 04:45:33, 2022-04-17T14:05:44Z",
    "If configuring an instance for ExtraHop Reveal(x) 360, select":
      "Si vous configurez une instance pour ExtraHop Reveal(x) 360, sélectionnez",
    "If configuring an instance for ExtraHop Reveal(x) Enterprise, unselect":
      "Si vous configurez une instance pour ExtraHop Reveal(x) Enterprise, désélectionnez",
    "If the categories and category are not specified, then categories will be set to [\"sec.attack\"]. The category field is deprecated by the API, so please use the categories field instead.":
      "Si categories et category ne sont pas spécifiés, categories sera défini sur [\"sec.attack\"]. Le champ category est obsolète dans l'API ; utilisez donc le champ categories.",
    "In F5 Silverline portal, go to":
      "Dans le portail F5 Silverline, accédez à",
    "In order to fetch alerts, follow the instructions":
      "Pour récupérer les alertes, suivez les instructions",
    "Indicates whether to allow connections without verifying SSL certificate's validity.":
      "Indique s'il faut autoriser les connexions sans vérifier la validité du certificat SSL.",
    "Indicates whether to use XSOAR's system proxy settings to connect to the API.":
      "Indique s'il faut utiliser les paramètres de proxy système de XSOAR pour se connecter à l'API.",
    "Info level for fetched alerts":
      "Niveau d'information des alertes récupérées",
    "Integrated advanced threat detection: Enhancing protection from network edge to endpoint.":
      "Détection avancée des menaces intégrée : renforce la protection du périmètre réseau jusqu'à l'endpoint.",
    "Integration instance settings":
      "Paramètres de l'instance d'intégration",
    "Specifies the type of incident to be created for detection events ingested by this instance if a":
      "Spécifie le type d'incident à créer pour les événements de détection ingérés par cette instance (si un",
    "is not specified.":
      "n'est pas spécifié).",
    "Known Limitations":
      "Limitations connues",
    "KOI is an endpoint security platform that provides visibility and control over browser extensions, SaaS applications, and web-based threats.":
      "KOI est une plateforme de sécurité des endpoints qui offre visibilité et contrôle sur les extensions de navigateur, les applications SaaS et les menaces web.",
    "Locations":
      "Emplacements",
    "Magnet Automate is an orchestration and automation platform that accelerates your digital forensics investigations by automating workflows and integrating with various forensic tools.":
      "Magnet Automate est une plateforme d'orchestration et d'automatisation qui accélère vos investigations forensiques numériques en automatisant les workflows et en s'intégrant à divers outils forensiques.",
    "Max incidents to fetch":
      "Nombre maximal d'incidents à récupérer",
    "Maximum CVSS v2 Score":
      "Score CVSS v2 maximal",
    "Maximum CVSS v3 Score":
      "Score CVSS v3 maximal",
    "Maximum CVSS v4 Score":
      "Score CVSS v4 maximal",
    "Maximum EPSS v3 Score":
      "Score EPSS v3 maximal",
    "Minimum CVSS v2 Score":
      "Score CVSS v2 minimal",
    "Minimum CVSS v3 Score":
      "Score CVSS v3 minimal",
    "Minimum CVSS v4 Score":
      "Score CVSS v4 minimal",
    "Minimum EPSS v3 Score":
      "Score EPSS v3 minimal",
    "Microsoft 365 Defender is a unified pre- and post-breach enterprise defense suite that natively coordinates detection, prevention, investigation, and response across endpoints, identities, email, and applications to provide integrated protection against sophisticated attacks.":
      "Microsoft 365 Defender est une suite de défense d'entreprise unifiée, couvrant l'avant et l'après-compromission, qui coordonne en natif la détection, la prévention, l'investigation et la réponse sur les endpoints, les identités, la messagerie et les applications afin d'offrir une protection intégrée contre les attaques sophistiquées.",
    "Microsoft Defender for Endpoint (previously Microsoft Defender Advanced Threat Protection (ATP)) is a unified platform for preventative protection, post-breach detection, automated investigation, and response.":
      "Microsoft Defender for Endpoint (anciennement Microsoft Defender Advanced Threat Protection (ATP)) est une plateforme unifiée de protection préventive, de détection post-compromission, d'investigation automatisée et de réponse.",
    "Microsoft Graph grants Cortex authorized access to a user's Microsoft Outlook mail data in a personal account or organization account.":
      "Microsoft Graph accorde à Cortex un accès autorisé aux données de messagerie Microsoft Outlook d'un utilisateur, dans un compte personnel ou un compte professionnel.",
    "Microsoft Intune is a Microsoft cloud-based management solution that provides for mobile device and operating system management.":
      "Microsoft Intune est une solution de gestion cloud de Microsoft qui permet de gérer les appareils mobiles et les systèmes d'exploitation.",
    "On Cloud":
      "Sur le cloud",
    "Product Names":
      "Noms de produits",
    "Vendor Names":
      "Noms de fournisseurs",
    "Ransomware Score":
      "Score de ransomware",
    "Reference Types":
      "Types de référence",
    "Reference Values":
      "Valeurs de référence",
    "Provides the tags to be added to the indicators. Supports CSV values.":
      "Fournit les balises à ajouter aux indicateurs. Prend en charge les valeurs CSV.",
    "Select if the instance connects to an ExtraHop Reveal(x) 360 system. Leave unselected if connecting to ExtraHop Reveal(x) Enterprise. Default value is false.":
      "Sélectionnez cette option si l'instance se connecte à un système ExtraHop Reveal(x) 360. Laissez-la désélectionnée si la connexion se fait à ExtraHop Reveal(x) Enterprise. La valeur par défaut est false.",
    "Select to disable running commands through the Cortex CLI on this instance of the integration.":
      "Sélectionnez cette option pour désactiver l'exécution de commandes via Cortex CLI sur cette instance de l'intégration.",
    "Select to enable this instance to fetch detection events. Otherwise, select":
      "Sélectionnez cette option pour permettre à cette instance de récupérer les événements de détection. Sinon, sélectionnez",
    "Send email notifications to users":
      "Envoyer des notifications par e-mail aux utilisateurs",
    "Send emails implemented in Python with embedded image support.":
      "Envoi d'e-mails implémenté en Python avec prise en charge des images intégrées.",
    "Send messages and notifications to your team members.":
      "Envoyez des messages et des notifications aux membres de votre équipe.",
    "Server URL (e.g. https://192.168.0.1:3000)":
      "URL du serveur (par exemple, https://192.168.0.1:3000)",
    "Server URL (e.g., https://192.168.0.1:3000)":
      "URL du serveur (par exemple, https://192.168.0.1:3000)",
    "Server URL to connect to Flashpoint Ignite.":
      "URL du serveur pour se connecter à Flashpoint Ignite.",
    "Specifies how detection events ingested by this instance are mapped to Cortex incident fields.":
      "Spécifie comment les événements de détection ingérés par cette instance sont mappés aux champs d'incident Cortex.",
    "Specifies how often the instance fetches detection events. Because each API call fetches a maximum of 200 detection events, we recommend specifying one minute intervals to fetch all detection events.":
      "Spécifie la fréquence à laquelle l'instance récupère les événements de détection. Chaque appel d'API récupérant un maximum de 200 événements de détection, nous recommandons de spécifier des intervalles d'une minute pour récupérer tous les événements de détection.",
    "Specifies the beginning timestamp from which to start fetching detection events.":
      "Spécifie l'horodatage de début à partir duquel commencer à récupérer les événements de détection.",
    "Specifies the level of logging to enable for this instance of the integration.":
      "Spécifie le niveau de journalisation à activer pour cette instance de l'intégration.",
    "Specifies the type of incident to be created for detection events ingested by this instance.":
      "Spécifie le type d'incident à créer pour les événements de détection ingérés par cette instance.",
    "Specifies whether to allow connections without verifying SSL certificate’s validity.":
      "Spécifie s'il faut autoriser les connexions sans vérifier la validité du certificat SSL.",
    "Specifies whether to run the instance of the integration on a single engine.":
      "Spécifie s'il faut exécuter l'instance de l'intégration sur un seul moteur.",
    "Specifies whether to use XSOAR system proxy settings to connect to the API.":
      "Spécifie s'il faut utiliser les paramètres de proxy système de XSOAR pour se connecter à l'API.",
    "Supported formats: N minutes, N hours, N days, N weeks, N months, N years, yyyy-mm-dd, yyyy-mm-ddTHH:MM:SSZ":
      "Formats pris en charge : N minutes, N hours, N days, N weeks, N months, N years, yyyy-mm-dd, yyyy-mm-ddTHH:MM:SSZ",
    "The API key required for authentication if connecting to ExtraHop Reveal(x) Enterprise.":
      "La clé API requise pour l'authentification en cas de connexion à ExtraHop Reveal(x) Enterprise.",
    "The API key to use for the connection.":
      "La clé API à utiliser pour la connexion.",
    "The client ID generated on your ExtraHop system that is required for authentication if connecting to ExtraHop Reveal(x) 360.":
      "L'ID client généré sur votre système ExtraHop, requis pour l'authentification en cas de connexion à ExtraHop Reveal(x) 360.",
    "The client secret generated on your ExtraHop system that is required for authentication if connecting to ExtraHop Reveal(x) 360.":
      "Le secret client généré sur votre système ExtraHop, requis pour l'authentification en cas de connexion à ExtraHop Reveal(x) 360.",
    "The Microsoft Management Activity API integration enables you to subscribe or unsubscribe to different audits, receive their content, and fetch new content as incidents.":
      "L'intégration Microsoft Management Activity API vous permet de vous abonner à différents audits ou de vous en désabonner, de recevoir leur contenu et de récupérer le nouveau contenu sous forme d'incidents.",
    "The URL of the ExtraHop system this instance will connect to.":
      "L'URL du système ExtraHop auquel cette instance se connectera.",
    "The URL of your FireEye account.":
      "L'URL de votre compte FireEye.",
    "The UTC date or relative timestamp from where to start fetching incidents.":
      "La date UTC ou l'horodatage relatif à partir duquel commencer à récupérer les incidents.",
    "The UTC date or relative timestamp from where to start fetching incidents. Supported formats: N minutes, N hours, N days, N weeks, N months, N years, yyyy-mm-dd, yyyy-mm-ddTHH:MM:SSZ For example: 10 minutes, 5 hours, 8 days, 2 weeks, 8 months, 2021-12-31, 01 Mar 2021, 01 Feb 2021 04:45:33, 2022-04-17T14:05:44Z":
      "La date UTC ou l'horodatage relatif à partir duquel commencer à récupérer les incidents. Formats pris en charge : N minutes, N hours, N days, N weeks, N months, N years, yyyy-mm-dd, yyyy-mm-ddTHH:MM:SSZ Par exemple : 10 minutes, 5 hours, 8 days, 2 weeks, 8 months, 2021-12-31, 01 Mar 2021, 01 Feb 2021 04:45:33, 2022-04-17T14:05:44Z",
    "There are two types of permissions":
      "Il existe deux types d'autorisations",
    "This integration enables using Elastic Security for SIEM for security operations management and searching Elastic logs. This pack is to be used in combination with the Elasticsearch v2 integration.":
      "Cette intégration permet d'utiliser Elastic Security for SIEM pour la gestion des opérations de sécurité et la recherche dans les journaux Elastic. Ce pack doit être utilisé en combinaison avec l'intégration Elasticsearch v2.",
    "To configure an instance of F5 Silverline, you need to obtain the following information.":
      "Pour configurer une instance de F5 Silverline, vous devez obtenir les informations suivantes.",
    "To configure the integration, enter your credentials in the following fields:":
      "Pour configurer l'intégration, saisissez vos identifiants dans les champs suivants :",
    "To set up an instance, you need to add the following:":
      "Pour configurer une instance, vous devez ajouter les éléments suivants :",
    "Unified gateway to security insights - all from a unified Microsoft Graph Security API.":
      "Passerelle unifiée vers les informations de sécurité, le tout depuis une API Microsoft Graph Security unifiée.",
    "Use the integration to get logs from the O365 service.":
      "Utilisez l'intégration pour obtenir les journaux du service O365.",
    "Use the Kenna v2 integration to search and update vulnerabilities, schedule a run connector, and manage tags and attributes.":
      "Utilisez l'intégration Kenna v2 pour rechercher et mettre à jour des vulnérabilités, planifier l'exécution d'un connecteur et gérer les balises et les attributs.",
    "Use the Lastline v2 integration to provide threat analysts and incident response teams with the advanced malware isolation and inspection environment needed to safely execute advanced malware samples, and understand their behavior.":
      "Utilisez l'intégration Lastline v2 pour fournir aux analystes de menaces et aux équipes de réponse aux incidents l'environnement avancé d'isolation et d'inspection des malwares nécessaire pour exécuter en toute sécurité des échantillons de malwares avancés et comprendre leur comportement.",
    "Use the Microsoft Graph API integration to interact with Microsoft APIs that do not have dedicated integrations in Cortex, for example, Mail Single-User, etc.":
      "Utilisez l'intégration Microsoft Graph API pour interagir avec les API Microsoft qui n'ont pas d'intégration dédiée dans Cortex, par exemple Mail Single-User, etc.",
    "Use the Microsoft Search API in Microsoft Graph to search content stored in OneDrive or SharePoint: files, folders, lists, list items, or sites.":
      "Utilisez Microsoft Search API dans Microsoft Graph pour rechercher du contenu stocké dans OneDrive ou SharePoint : fichiers, dossiers, listes, éléments de liste ou sites.",
    "Use the MITRE ATT&CK® feed to fetch MITRE’s Adversarial Tactics, Techniques, and Common Knowledge (ATT&CK®) content. MITRE ATT&CK is a globally-accessible knowledge base of adversary tactics and techniques based on real-world observations. The ATT&CK knowledge base is used as a foundation for the development of specific threat models and methodologies in the private sector, in government, and in the cybersecurity product and service community.":
      "Utilisez le flux MITRE ATT&CK® pour récupérer le contenu Adversarial Tactics, Techniques, and Common Knowledge (ATT&CK®) de MITRE. MITRE ATT&CK est une base de connaissances accessible dans le monde entier sur les tactiques et techniques des adversaires, fondée sur des observations du monde réel. La base de connaissances ATT&CK sert de fondement au développement de modèles et de méthodologies de menaces spécifiques dans le secteur privé, au sein des gouvernements et dans la communauté des produits et services de cybersécurité.",
    "User Name and Password":
      "Nom d'utilisateur et mot de passe",
    "When you have api_analyst permissions, you cannot approve a containment for the host.":
      "Lorsque vous disposez des autorisations api_analyst, vous ne pouvez pas approuver le confinement d'un hôte.",
    "You can use with fireeye-hx-host-containment command for sending a containment request.":
      "Vous pouvez l'utiliser avec la commande fireeye-hx-host-containment pour envoyer une demande de confinement.",
    "Your F5 Silverline server URL":
      "URL de votre serveur F5 Silverline",
    "Your server URL":
      "URL de votre serveur",
    "Your username and password when logging in to your FireEye account.":
      "Votre nom d'utilisateur et votre mot de passe lors de la connexion à votre compte FireEye.",

    // --- Batch: GCP service account setup / Freshservice / Forcepoint / FortiGate / Glean integration docs and parameters (08:29 export) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    ", add the users or groups that are allowed to use and manage the service account.":
      ", ajoutez les utilisateurs ou groupes autorisés à utiliser et à gérer le compte de service.",
    ", select the IAM roles to grant to the service account.":
      ", sélectionnez les rôles IAM à accorder au compte de service.",
    ", then click":
      ", puis cliquez sur",
    ". Note that you must have permission to add members to the organization or project for the":
      ". Notez que vous devez disposer de l'autorisation d'ajouter des membres à l'organisation ou au projet pour",
    "(Account username, Password)":
      "(nom d'utilisateur du compte, mot de passe)",
    "A list of the required permissions for every command can be found below.":
      "La liste des autorisations requises pour chaque commande figure ci-dessous.",
    "A new API key will be generated for you. Copy the generated API key and keep it secure.":
      "Une nouvelle clé API sera générée pour vous. Copiez la clé API générée et conservez-la en lieu sûr.",
    "Account username":
      "Nom d'utilisateur du compte",
    "Add a member and roles to a project or organization. In the":
      "Ajoutez un membre et des rôles à un projet ou à une organisation.",
    "Add a title, description, and ID and ensure the role is marked for General Availability.":
      "Ajoutez un titre, une description et un ID, et assurez-vous que le rôle est marqué General Availability.",
    "Add the required permissions by clicking":
      "Ajoutez les autorisations requises en cliquant sur",
    "After choosing an authentication method, click":
      "Après avoir choisi une méthode d'authentification, cliquez sur",
    "At the top-left, click the navigation menu >":
      "En haut à gauche, cliquez sur le menu de navigation >",
    "Check the Version 8.5.5 or later flag to switch to use these newer api endpoints.":
      "Cochez l'option Version 8.5.5 or later pour passer à ces nouveaux points de terminaison d'API.",
    "Click on your profile icon in the top-right corner and select “Profile settings” from the dropdown menu.":
      "Cliquez sur votre icône de profil dans le coin supérieur droit et sélectionnez « Profile settings » dans le menu déroulant.",
    "Click the down arrow in the top menu bar for the project.":
      "Cliquez sur la flèche vers le bas dans la barre de menus supérieure du projet.",
    "Click the email address for the service account you created.":
      "Cliquez sur l'adresse e-mail du compte de service que vous avez créé.",
    "Click the navigation menu and select":
      "Cliquez sur le menu de navigation et sélectionnez",
    "Command Name":
      "Nom de la commande",
    "Command Required Permissions":
      "Autorisations requises pour la commande",
    "Could not authorize":
      "Échec de l'autorisation",
    "Create a Custom Role":
      "Créer un rôle personnalisé",
    "Create a Project":
      "Créer un projet",
    "Create a Service Account":
      "Créer un compte de service",
    "Create a Service Account & Service Account Key":
      "Créer un compte de service et une clé de compte de service",
    "Create a Service Account Key":
      "Créer une clé de compte de service",
    "Credentials and Password":
      "Identifiants et mot de passe",
    "drop-down list, select":
      "liste déroulante, sélectionnez",
    "drop-down list, select an organization that contains the GCP project(s) that you want the integration to monitor.":
      "liste déroulante, sélectionnez une organisation contenant les projets GCP que vous souhaitez que l'intégration surveille.",
    "drop-down list, select the required roles.":
      "liste déroulante, sélectionnez les rôles requis.",
    "Enable Google Workspace APIs":
      "Activer les API Google Workspace",
    "Enter an API token and your Server URL.":
      "Saisissez un jeton d'API et l'URL de votre serveur.",
    "Enter your Server URL -":
      "Saisissez l'URL de votre serveur :",
    "Fetch tasks for each ticket type and consider them in the mirroring (requires an additional API request per ticket).":
      "Récupère les tâches de chaque type de ticket et les prend en compte dans la mise en miroir (nécessite une requête API supplémentaire par ticket).",
    "Fetch tickets tasks":
      "Récupérer les tâches des tickets",
    "field, paste the email address of the created service account.":
      "collez l'adresse e-mail du compte de service créé.",
    "First alert created date to fetch. e.g., \"1 min ago\",\"2 weeks ago\",\"3 months ago\"":
      "Date de création de la première alerte à récupérer. Par exemple : \"1 min ago\",\"2 weeks ago\",\"3 months ago\"",
    "Follow these instructions to retrieve the API token.":
      "Suivez ces instructions pour récupérer le jeton d'API.",
    "Follow these instructions to successfully instantiate an instance of the Freshservice integration.":
      "Suivez ces instructions pour instancier correctement une instance de l'intégration Freshservice.",
    "Forcepoint version 8.5.5 or later":
      "Forcepoint version 8.5.5 ou ultérieure",
    "Forcepoint’s API calls to delete URLs/IPs from a category and to delete the category itself have changed. See":
      "Les appels d'API de Forcepoint permettant de supprimer des URL/IP d'une catégorie et de supprimer la catégorie elle-même ont changé. Consultez",
    "Forcepoint’s documentation":
      "documentation de Forcepoint",
    "FortiGate always delivered on the concept of hybrid mesh firewalls with FortiManager for unified management and consistent security across complex hybrid environments.":
      "FortiGate a toujours proposé le concept de pare-feu hybrides maillés avec FortiManager pour une gestion unifiée et une sécurité cohérente dans des environnements hybrides complexes.",
    "FortiGate provides flawless convergence that can scale to any location: remote office, branch, campus, data center, and cloud.":
      "FortiGate offre une convergence parfaite qui s'adapte à n'importe quel site : bureau distant, succursale, campus, centre de données et cloud.",
    "Freshservice URL (make sure your URL includes your unique environment name).":
      "URL de Freshservice (assurez-vous que votre URL inclut le nom unique de votre environnement).",
    "Glean Configure Connection":
      "Configurer la connexion Glean",
    "Grant Permissions":
      "Accorder des autorisations",
    "Grant Role Access to Service Account":
      "Accorder l'accès au rôle au compte de service",
    "How to Achieve Authentication":
      "Comment réaliser l'authentification",
    "If prompted, select a project, or create a new one.":
      "Si vous y êtes invité, sélectionnez un projet ou créez-en un nouveau.",
    "If the Freshworks Freshservice name for your company is, for example, ‘taltal’, then the Server URL configuration parameter you would enter would be ‘https://taltal.freshservice.com’.":
      "Par exemple, si le nom Freshworks Freshservice de votre entreprise est ‘taltal’, le paramètre de configuration URL du serveur à saisir serait ‘https://taltal.freshservice.com’.",
    "Important Updates for Version 8.5.5 and Later":
      "Mises à jour importantes pour la version 8.5.5 et ultérieures",
    "In order to use the integration capabilities, you need to enable Google Workspace APIs.":
      "Pour utiliser les fonctionnalités de l'intégration, vous devez activer les API Google Workspace.",
    "In order to use the integration, in the first stage, you need to create a project.":
      "Pour utiliser l'intégration, vous devez d'abord créer un projet.",
    "In the left sidebar, click on “API Key”.":
      "Dans la barre latérale gauche, cliquez sur « API Key ».",
    "In the list of search results, click the API you want to enable.":
      "Dans la liste des résultats de recherche, cliquez sur l'API que vous souhaitez activer.",
    "In the search field, enter the name of the API you want to enable and press":
      "Dans le champ de recherche, saisissez le nom de l'API que vous souhaitez activer et appuyez sur",
    "Incident impacts to fetch. The default is All. You can choose multiple impacts.":
      "Impacts d'incident à récupérer. La valeur par défaut est All. Vous pouvez choisir plusieurs impacts.",
    "Incident priorities to fetch. The default is All. You can choose multiple priorities.":
      "Priorités d'incident à récupérer. La valeur par défaut est All. Vous pouvez choisir plusieurs priorités.",
    "Information about how to create project can be found":
      "Vous trouverez des informations sur la création d'un projet",
    "Instance Setup":
      "Configuration de l'instance",
    "Integrate Cloud Security with your Glean Account to gain comprehensive visibility into any data and posture risk existing in your Glean environment. This integration enables automated scanning of all assets in Glean, including data classification and risk assessment.":
      "Intégrez Cloud Security à votre compte Glean pour obtenir une visibilité complète sur toutes les données et tous les risques de posture présents dans votre environnement Glean. Cette intégration permet l'analyse automatisée de tous les actifs de Glean, y compris la classification des données et l'évaluation des risques.",
    "Keep this window open for the duration of the onboarding.":
      "Gardez cette fenêtre ouverte pendant toute la durée de l'intégration.",
    "Log in to your Freshservice account as an administrator.":
      "Connectez-vous à votre compte Freshservice en tant qu'administrateur.",
    "Maximum number of incidents per fetch. Default is 100.":
      "Nombre maximal d'incidents par récupération. La valeur par défaut est 100.",
    "More information about creating the required resources can be found here:":
      "Vous trouverez plus d'informations sur la création des ressources requises ici :",
    "Note that the API key is generated with different permissions. For using the ‘Test’ button to validate the credentials, your API token will need at least the view tickets permission.":
      "Notez que la clé API est générée avec des autorisations différentes. Pour utiliser le bouton ‘Test’ afin de valider les identifiants, votre jeton d'API doit disposer au minimum de l'autorisation d'afficher les tickets.",
    "Note: You must provide at least one of these authentication methods (username/password or API key), but not both simultaneously.":
      "Remarque : vous devez fournir au moins l'une de ces méthodes d'authentification (nom d'utilisateur/mot de passe ou clé API), mais pas les deux simultanément.",
    "On the API Key page, click on the “Generate Key” button.":
      "Sur la page API Key, cliquez sur le bouton « Generate Key ».",
    "Please enable the following APIs:":
      "Veuillez activer les API suivantes :",
    "Please provide the downloaded file content in the integration":
      "Fournissez le contenu du fichier téléchargé dans le paramètre d'instance",
    "instance parameter.":
      "de l'intégration.",
    "Required grant ‘Service Account Key Admin’ role permission":
      "Il est nécessaire d'accorder l'autorisation du rôle ‘Service Account Key Admin’",
    "Service Account Private Key file content (JSON)":
      "Contenu du fichier de clé privée du compte de service (JSON)",
    "Service Account Private Key file content (JSON).":
      "Contenu du fichier de clé privée du compte de service (JSON).",
    "The Fortinet FortiOS operating system provides deep visibility and security across a variety of form factors.":
      "Le système d'exploitation Fortinet FortiOS offre une visibilité et une sécurité approfondies sur une grande variété de formats.",
    "The Glean account is not recognized.":
      "Le compte Glean n'est pas reconnu.",
    "The risk of the tickets to fetch. Available only for the 'Change Request' ticket type.":
      "Le risque des tickets à récupérer. Disponible uniquement pour le type de ticket 'Change Request'.",
    "The status of the tickets to fetch. Since each ticket type has its own unique set of statuses, select only statuses that match the selected ticket type(s).":
      "Le statut des tickets à récupérer. Chaque type de ticket ayant son propre ensemble de statuts, sélectionnez uniquement les statuts correspondant aux types de ticket sélectionnés.",
    "The urgency of the tickets to fetch. Available only for the 'Incident/Service Request' ticket type. The default is All. You can choose multiple urgencies.":
      "L'urgence des tickets à récupérer. Disponible uniquement pour le type de ticket 'Incident/Service Request'. La valeur par défaut est All. Vous pouvez choisir plusieurs urgences.",
    "The URL of your Forcepoint instance, without the port number.":
      "L'URL de votre instance Forcepoint, sans le numéro de port.",
    "There are no permissions required for making this API call.":
      "Aucune autorisation n'est requise pour effectuer cet appel d'API.",
    "Ticket Impact":
      "Impact du ticket",
    "Ticket Priority":
      "Priorité du ticket",
    "Ticket Risk":
      "Risque du ticket",
    "Ticket Status":
      "Statut du ticket",
    "Ticket type to fetch as incidents.":
      "Type de ticket à récupérer en tant qu'incidents.",
    "Ticket Urgency":
      "Urgence du ticket",
    "To authenticate with FortiGate, you can use one of two methods:":
      "Pour vous authentifier auprès de FortiGate, vous pouvez utiliser l'une des deux méthodes suivantes :",
    "To configure an instance of the integration in Cortex, you need to supply the Service Account Private Key file content.":
      "Pour configurer une instance de l'intégration dans Cortex, vous devez fournir le contenu du fichier de clé privée du compte de service.",
    "To set up an instance, add the following.":
      "Pour configurer une instance, ajoutez les éléments suivants.",
    "To successfully onboard the account, try again or contact support.":
      "Pour intégrer correctement le compte, réessayez ou contactez l'assistance.",
    "Under Service account details, type a name, ID, and description for the service account, then click":
      "Sous Service account details, saisissez un nom, un ID et une description pour le compte de service, puis cliquez sur",
    "Username/Password Authentication":
      "Authentification par nom d'utilisateur et mot de passe",
    "Verifying connection...":
      "Vérification de la connexion...",
    "You can grant the permissions by predefined roles or by creating a custom role.":
      "Vous pouvez accorder les autorisations à l'aide de rôles prédéfinis ou en créant un rôle personnalisé.",
    "You have to grant the required permissions to the created Service Account in order to use in the integration command.":
      "Vous devez accorder les autorisations requises au compte de service créé pour pouvoir l'utiliser dans la commande d'intégration.",
    "Your credentials (username) and password for logging in to your Forcepoint instance.":
      "Vos identifiants (nom d'utilisateur) et mot de passe pour vous connecter à votre instance Forcepoint.",
    "Your new public/private key pair is generated and downloaded to your machine; it serves as the only copy of the private key. You are responsible for storing it securely. If you lose this key pair, you will need to generate a new one.":
      "Votre nouvelle paire de clés publique/privée est générée et téléchargée sur votre machine ; elle constitue l'unique copie de la clé privée. Vous êtes responsable de son stockage sécurisé. Si vous perdez cette paire de clés, vous devrez en générer une nouvelle.",

    // --- Batch: Generic Export Indicators Service / Generic SQL / MCP authentication docs and integration card descriptions (08:43 export) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    "- Bypass SSL certificate verification (Default:":
      "- Ignorer la vérification du certificat SSL (valeur par défaut :",
    "- Check this box if API calls to this endpoint require authentication (":
      "- Cochez cette case si les appels d'API vers ce point de terminaison nécessitent une authentification (",
    "- Check this box if API key or authentication credentials are provided as part of the HTTP header (":
      "- Cochez cette case si la clé API ou les identifiants d'authentification sont fournis dans l'en-tête HTTP (",
    "- For a header-based call, this would appear in the header as 'X-PAN-KEY': KEY_HERE":
      "- Pour un appel basé sur l'en-tête, cela apparaîtrait dans l'en-tête sous la forme 'X-PAN-KEY': KEY_HERE",
    "- For a parameterized call, this would be appended to the URL as &X-PAN-KEY=KEY_HERE -":
      "- Pour un appel paramétré, cela serait ajouté à l'URL sous la forme &X-PAN-KEY=KEY_HERE -",
    "- Integration instance name":
      "- Nom de l'instance d'intégration",
    "- Leave blank when using an API key":
      "- Laissez vide lorsque vous utilisez une clé API",
    "- Leverage the proxy settings configured on the XSOAR server":
      "- Utilise les paramètres de proxy configurés sur le serveur XSOAR",
    "- The base server URL for the API endpoint without the trailing slash (":
      "- L'URL de base du serveur pour le point de terminaison de l'API, sans barre oblique finale (",
    "- The password (when using HTTP basic authentication) or API key to use for API calls with this integration instance":
      "- Le mot de passe (en cas d'authentification HTTP de base) ou la clé API à utiliser pour les appels d'API avec cette instance d'intégration",
    "- The value to use to identify the API key field as part of the HTTP header or API Key parameter in the URL":
      "- La valeur utilisée pour identifier le champ de clé API dans l'en-tête HTTP ou le paramètre de clé API dans l'URL",
    "- Username for HTTP basic authentication.":
      "- Nom d'utilisateur pour l'authentification HTTP de base.",
    "- When fetching by either ID or timestamp.":
      "- Lors de la récupération par ID ou par horodatage.",
    "- When the ID is unique but not necessarily ascending and timestamp is not unique.":
      "- Lorsque l'ID est unique mais pas nécessairement croissant et que l'horodatage n'est pas unique.",
    ": Add custom headers to be sent with each API request. Enter each header on a new line in the format:":
      ": Ajoutez des en-têtes personnalisés à envoyer avec chaque requête API. Saisissez chaque en-tête sur une nouvelle ligne au format :",
    ": If you are running the integration via an on-prem engine you must set the username and password fields in the integration instance. Otherwise, for normal usage, if you have set a default password in your tenant, you do not have to set a username and password in the integration instance":
      ": Si vous exécutez l'intégration via un moteur sur site, vous devez renseigner les champs nom d'utilisateur et mot de passe dans l'instance d'intégration. Sinon, pour une utilisation normale, si vous avez défini un mot de passe par défaut dans votre tenant, il n'est pas nécessaire de définir un nom d'utilisateur et un mot de passe dans l'instance d'intégration",
    ": No authentication is used.":
      ": Aucune authentification n'est utilisée.",
    ": Provide the API Key to access the service REST API.":
      ": Fournissez la clé API pour accéder à l'API REST du service.",
    ": Provide the API Token or API Key to access the service REST API.":
      ": Fournissez le jeton d'API ou la clé API pour accéder à l'API REST du service.",
    ": Provide the Bearer Token to access the service REST API.":
      ": Fournissez le jeton Bearer pour accéder à l'API REST du service.",
    ": Provide the raw token to access the service REST API.":
      ": Fournissez le jeton brut (raw) pour accéder à l'API REST du service.",
    ": Provide the username and password for basic authentication.":
      ": Fournissez le nom d'utilisateur et le mot de passe pour l'authentification de base.",
    ": Required to obtain the access token. To get this code, run the":
      ": Requis pour obtenir le jeton d'accès. Pour obtenir ce code, exécutez",
    ": Select the authentication method to use for connecting to the MCP server.":
      ": Sélectionnez la méthode d'authentification à utiliser pour la connexion au serveur MCP.",
    ": Select this option to trust any certificate. This is not recommended for production environments.":
      ": Sélectionnez cette option pour approuver n'importe quel certificat. Ce n'est pas recommandé dans les environnements de production.",
    ": Space-separated permission identifiers requested from the authorization server.":
      ": Identifiants d'autorisations, séparés par des espaces, demandés au serveur d'autorisation.",
    ": The base URL of the MCP server. This is a required parameter for all authentication types.":
      ": L'URL de base du serveur MCP. Il s'agit d'un paramètre obligatoire pour tous les types d'authentification.",
    ": The Client ID for your application.":
      ": L'ID client de votre application.",
    ": The Client Secret for your application.":
      ": Le secret client de votre application.",
    ": The External Dynamic List is not accessible via web browsers and you will receive an unauthorized error if accessing the External Dynamic List via a browser.":
      ": External Dynamic List n'est pas accessible via les navigateurs web et vous recevrez une erreur d'accès non autorisé si vous y accédez via un navigateur.",
    ": The URI to which the authorization server redirects the user-agent after granting authorization. This is typically used in OAuth 2.0 Authorization Code flow. Default:":
      ": L'URI vers lequel le serveur d'autorisation redirige l'agent utilisateur après l'octroi de l'autorisation. Il est généralement utilisé dans le flux Authorization Code d'OAuth 2.0. Valeur par défaut :",
    ": The URL for the OAuth 2.0 authorization endpoint. If not provided, the default will be the origin of the":
      ": L'URL du point de terminaison d'autorisation OAuth 2.0. Si elle n'est pas fournie, la valeur par défaut sera l'origine de",
    ": The URL for the OAuth 2.0 token endpoint. If not provided, the default will be the origin of the":
      ": L'URL du point de terminaison de jeton OAuth 2.0. Si elle n'est pas fournie, la valeur par défaut sera l'origine de",
    ": Uses a Bearer token for authentication.":
      ": Utilise un jeton Bearer pour l'authentification.",
    ": Uses a raw token for authentication.":
      ": Utilise un jeton brut (raw) pour l'authentification.",
    ": Uses a single API token or key for authentication.":
      ": Utilise un seul jeton ou une seule clé API pour l'authentification.",
    ": Uses a username and password for authentication.":
      ": Utilise un nom d'utilisateur et un mot de passe pour l'authentification.",
    ": Uses an API key for authentication.":
      ": Utilise une clé API pour l'authentification.",
    ": Uses OAuth 2.0 Dynamic Client Registration.":
      ": Utilise OAuth 2.0 Dynamic Client Registration.",
    ": Uses the OAuth 2.0 Authorization Code flow for authentication.":
      ": Utilise le flux Authorization Code d'OAuth 2.0 pour l'authentification.",
    ": Uses the OAuth 2.0 Client Credentials flow for authentication.":
      ": Utilise le flux Client Credentials d'OAuth 2.0 pour l'authentification.",
    "\"No known finding\" from any command means nothing was flagged in the sources":
      "« No known finding » renvoyé par une commande signifie que rien n'a été signalé dans les sources",
    "(Optional) limit :limit (It’s possible if the database supports it)":
      "(Facultatif) limit :limit (possible si la base de données le prend en charge)",
    "* 0 - Do not collapse.":
      "* 0 - Ne pas regrouper.",
    "* 1 - Collapse to ranges.":
      "* 1 - Regrouper en plages.",
    "* 2 - Collapse to CIDRs.":
      "* 2 - Regrouper en CIDR.",
    "A search engine used for searching Internet-connected devices.":
      "Un moteur de recherche utilisé pour rechercher des appareils connectés à Internet.",
    "Access the Generic Export Indicators Service by Instance Name (HTTPS)":
      "Accéder à Generic Export Indicators Service par nom d'instance (HTTPS)",
    "Add comment to empty list":
      "Ajouter un commentaire à la liste vide",
    "Add custom headers to be sent with each API request.":
      "Ajoutez des en-têtes personnalisés à envoyer avec chaque requête API.",
    "Add custom headers to be sent with each API request. Enter each header on a new line in the format: HeaderName: HeaderValue.":
      "Ajoutez des en-têtes personnalisés à envoyer avec chaque requête API. Saisissez chaque en-tête sur une nouvelle ligne au format : HeaderName: HeaderValue.",
    "Add HSTS header":
      "Ajouter l'en-tête HSTS",
    "Advanced Parameters":
      "Paramètres avancés",
    "Advanced: Use Legacy Queries":
      "Avancé : utiliser les requêtes héritées",
    "Agentless, Workload-Deep, Context-Aware Security and Compliance for AWS, Azure, and GCP.":
      "Sécurité et conformité sans agent, approfondies au niveau des workloads et sensibles au contexte, pour AWS, Azure et GCP.",
    "Alert and notify users using PagerDuty.":
      "Alertez et notifiez les utilisateurs à l'aide de PagerDuty.",
    "Analyse retro hunts, read live hunt notifications and download files from VirusTotal.":
      "Analysez les retro hunts, lisez les notifications de live hunt et téléchargez des fichiers depuis VirusTotal.",
    "Analyzes suspicious hashes, URLs, domains, and IP addresses.":
      "Analyse les hachages, URL, domaines et adresses IP suspects.",
    "API call is authenticated":
      "L'appel d'API est authentifié",
    "API call is authenticated (Default: False)":
      "L'appel d'API est authentifié (par défaut : False)",
    "API key supplied in header":
      "Clé API fournie dans l'en-tête",
    "API Key supplied in header":
      "Clé API fournie dans l'en-tête",
    "API Token / API Key":
      "Jeton d'API / Clé API",
    "Append string to list":
      "Ajouter une chaîne à la fin de la liste",
    "argument":
      "argument",
    "Authentication Header":
      "En-tête d'authentification",
    "Authorization Endpoint":
      "Point de terminaison d'autorisation",
    "Base API Endpoint URL (https:// with no trailing slash)":
      "URL de base du point de terminaison de l'API (https:// sans barre oblique finale)",
    "Base Server URL":
      "URL de base du serveur",
    "Bind Variables":
      "Variables de liaison",
    "By default, the integration does not pool database connections. Thus, a connection is created and closed for each command run by the integration. When connection pooling is enabled, each Docker container will maintain a single connection open for the time specified in the the":
      "Par défaut, l'intégration ne met pas les connexions à la base de données en pool. Une connexion est donc créée puis fermée pour chaque commande exécutée par l'intégration. Lorsque la mise en pool des connexions est activée, chaque conteneur Docker conserve une seule connexion ouverte pendant la durée spécifiée dans",
    "CIDRs with a lower network prefix bits number are not included. For example - if the number is 8, then 0.0.0.0/2 is excluded from the list.":
      "Les CIDR dont le nombre de bits du préfixe réseau est inférieur ne sont pas inclus. Par exemple, si le nombre est 8, 0.0.0.0/2 est exclu de la liste.",
    "Close an issue":
      "Fermer un ticket",
    "Cloud based Security Network DVR.":
      "DVR réseau de sécurité basé sur le cloud.",
    "Cloud-based service for logs & metrics management.":
      "Service cloud de gestion des journaux et des métriques.",
    "Collect information and take action on remote endpoints in real time with VMware Carbon Black EDR (Live Response API) (formerly known as Carbon Black Enterprise Live Response).":
      "Collectez des informations et agissez sur des endpoints distants en temps réel avec VMware Carbon Black EDR (Live Response API) (anciennement Carbon Black Enterprise Live Response).",
    "command and follow its instructions.":
      "commande et suivez ses instructions.",
    "command for the first time to initialize the export process.":
      "commande pour la première fois afin d'initialiser le processus d'exportation.",
    "Connection Arguments":
      "Arguments de connexion",
    "Connection Arguments (ex: arg1=val1&arg2=val2)":
      "Arguments de connexion (ex. : arg1=val1&arg2=val2)",
    "Connection Pool Time to Live":
      "Durée de vie du pool de connexions",
    "Connection Pool Time to Live (seconds)":
      "Durée de vie du pool de connexions (secondes)",
    "Connection Pooling":
      "Mise en pool des connexions",
    "Converts URLs, PDF files, and emails to an image file or PDF file.":
      "Convertit des URL, des fichiers PDF et des e-mails en fichier image ou PDF.",
    "Custom headers":
      "En-têtes personnalisés",
    "Database host":
      "Hôte de la base de données",
    "Default it set to false (key is provided as a parameter). Unchecking this will pass the API key as a call header":
      "La valeur par défaut est false (la clé est fournie en tant que paramètre). Si cette case est décochée, la clé API sera transmise dans l'en-tête de l'appel",
    "Default ports":
      "Ports par défaut",
    "Deprecated - We recommend using the Remote Access v2 integration instead.":
      "Obsolète. Nous recommandons d'utiliser plutôt l'intégration Remote Access v2.",
    "Deprecated. Use Analyst1 integration instead.":
      "Obsolète. Utilisez plutôt l'intégration Analyst1.",
    "Deprecated. Use Jamf v2 instead. Jamf device management. Please note, this integration is currently only compatible with the Jamf V1 API.":
      "Obsolète. Utilisez plutôt Jamf v2. Gestion des appareils Jamf. Notez que cette intégration n'est actuellement compatible qu'avec l'API Jamf V1.",
    "Deprecated. Use O365 Defender SafeLinks instead. Enables URL scanning, rewriting inbound email messages in the mail flow, time-of-click URL verification, and links in email messages and other locations.":
      "Obsolète. Utilisez plutôt O365 Defender SafeLinks. Permet l'analyse des URL, la réécriture des messages entrants dans le flux de messagerie, la vérification des URL au moment du clic et la protection des liens dans les messages et autres emplacements.",
    "Deprecated. Use Proofpoint Protection Server V2 instead.":
      "Obsolète. Utilisez plutôt Proofpoint Protection Server V2.",
    "Deprecated. Use SlackV3 instead.":
      "Obsolète. Utilisez plutôt SlackV3.",
    "Deprecated. Use The Generic SQL integration instead.":
      "Obsolète. Utilisez plutôt l'intégration The Generic SQL.",
    "Deprecated. Use the Microsoft Graph Security integration instead. This integration allows you to manage and interact with Microsoft security and compliance content search.":
      "Obsolète. Utilisez plutôt l'intégration Microsoft Graph Security. Cette intégration permet de gérer et d'utiliser la recherche de contenu de sécurité et de conformité de Microsoft.",
    "Deprecated. Use the Okta v2 integration instead.":
      "Obsolète. Utilisez plutôt l'intégration Okta v2.",
    "Deprecated. Use the PagerDuty v2 integration instead.":
      "Obsolète. Utilisez plutôt l'intégration PagerDuty v2.",
    "Deprecated. Use the Palo Alto Networks AutoFocus v2 integration instead. Palo Alto Networks AutoFocus enables you to distinguish the most important threats from everyday commodity attacks.":
      "Obsolète. Utilisez plutôt l'intégration Palo Alto Networks AutoFocus v2. Palo Alto Networks AutoFocus vous permet de distinguer les menaces les plus importantes des attaques génériques courantes.",
    "Deprecated. Use the Prisma Cloud v2 integration instead.":
      "Obsolète. Utilisez plutôt l'intégration Prisma Cloud v2.",
    "Deprecated. Use the Rapid7 Nexpose integration instead.":
      "Obsolète. Utilisez plutôt l'intégration Rapid7 Nexpose.",
    "Deprecated. Use the Server Message Block (SMB) v2 integration instead.":
      "Obsolète. Utilisez plutôt l'intégration Server Message Block (SMB) v2.",
    "Deprecated. Use the ServiceNow v2 integration instead.":
      "Obsolète. Utilisez plutôt l'intégration ServiceNow v2.",
    "Deprecated. Use the Slack v2 integration instead.":
      "Obsolète. Utilisez plutôt l'intégration Slack v2.",
    "Deprecated. Use the Unit 42 Intelligence integration instead.":
      "Obsolète. Utilisez plutôt l'intégration Unit 42 Intelligence.",
    "Deprecated. Use the Zendesk v2 integration instead.":
      "Obsolète. Utilisez plutôt l'intégration Zendesk v2.",
    "Deprecated. Use VirusTotalV3 integration instead.":
      "Obsolète. Utilisez plutôt l'intégration VirusTotalV3.",
    "Deprecated. Use VMware Carbon Black EDR v2 instead.":
      "Obsolète. Utilisez plutôt VMware Carbon Black EDR v2.",
    "Discover and remediate AI application vulnerabilities with Palo Alto Networks Prisma AIRS AI Red Teaming: targets, adapters, scans, attack reports, prompt sets, and custom attacks.":
      "Détectez et corrigez les vulnérabilités des applications d'IA avec Palo Alto Networks Prisma AIRS AI Red Teaming : cibles, adaptateurs, analyses, rapports d'attaque, ensembles de prompts et attaques personnalisées.",
    "Does this API call require authentication (Basic, API key, etc.)?":
      "Cet appel d'API nécessite-t-il une authentification (de base, clé API, etc.) ?",
    "Dynamically retrieve and add to allow list IPs Prisma Access uses to egress traffic to the internet and SaaS apps.":
      "Récupérez et ajoutez dynamiquement à la liste d'autorisation les adresses IP utilisées par Prisma Access pour la sortie du trafic vers Internet et les applications SaaS.",
    "e.g., X-PAN-KEY: API_KEY_HERE (X-PAN-KEY is the value specified in this field)":
      "par exemple : X-PAN-KEY: API_KEY_HERE (X-PAN-KEY est la valeur spécifiée dans ce champ)",
    "Enabling this prevents automatic list refresh.":
      "L'activation de cette option empêche l'actualisation automatique de la liste.",
    "Enforce ASCII only":
      "Imposer ASCII uniquement",
    "Enrich indicators with Unit 42 threat intelligence context including verdicts, threat object associations, and relationships.":
      "Enrichissez les indicateurs avec le contexte de threat intelligence d'Unit 42, notamment les verdicts, les associations d'objets de menace et les relations.",
    "Enter each header on a new line in the format: HeaderName: HeaderValue.":
      "Saisissez chaque en-tête sur une nouvelle ligne au format : HeaderName: HeaderValue.",
    "Enter the exact column's incident name (if empty - it's the Fetch Column).":
      "Le nom exact de la colonne du nom d'incident (si vide, il s'agit de la colonne de récupération).",
    "Enter the exact column's name to fetch (ID column or timestamp column).":
      "Le nom exact de la colonne à récupérer (colonne ID ou colonne d'horodatage).",
    "Example":
      "Exemple",
    "Exclude top level domainGlobs":
      "Exclure les domainGlobs de premier niveau",
    "Exported Fields":
      "Champs exportés",
    "Failover time should be about 1 minute plus the container startup time.":
      "Le temps de basculement devrait être d'environ 1 minute plus le temps de démarrage du conteneur.",
    "Fetch Column":
      "Colonne de récupération",
    "Fetch events query":
      "Requête de récupération d'événements",
    "Fetch Incidents query Notes":
      "Remarques sur la requête de récupération d'incidents",
    "Fetch Limit (Default / Max - 50, Recommended less than 50)":
      "Limite de récupération (par défaut / max. : 50, moins de 50 recommandé)",
    "Fetch parameters, ts (timestamp) or id and l (limit), will be added by the fetch mechanism.":
      "Les paramètres de récupération ts (horodatage) ou id et l (limite) seront ajoutés par le mécanisme de récupération.",
    "Fetch parameters, ts (timestamp) or ID and l (limit), will be added by the fetch mechanism.":
      "Les paramètres de récupération ts (horodatage) ou ID et l (limite) seront ajoutés par le mécanisme de récupération.",
    "Fetches and manages incidents from iZOOlogic, enabling automated ingestion, incident creation, and advanced filtering for brand protection and threat management.":
      "Récupère et gère les incidents d'iZOOlogic, ce qui permet l'ingestion automatisée, la création d'incidents et le filtrage avancé pour la protection de la marque et la gestion des menaces.",
    "Files and Directories management with an SMB server. Supports SMB2 and SMB3 protocols.":
      "Gestion des fichiers et des répertoires avec un serveur SMB. Prend en charge les protocoles SMB2 et SMB3.",
    "Fill in ‘Fetch Column’ with your exact timestamp column name, and fill in the ‘ID column name’ with your exact ID column name.":
      "Renseignez ‘Fetch Column’ avec le nom exact de la colonne d'horodatage et ‘ID column name’ avec le nom exact de la colonne d'ID.",
    "Fill only the ‘Fetch Column’ with the exact column name to fetch (ID column or timestamp column).":
      "Renseignez uniquement ‘Fetch Column’ avec le nom exact de la colonne à récupérer (colonne ID ou colonne d'horodatage).",
    "First fetch interval (in days)":
      "Intervalle de la première récupération (en jours)",
    "First fetch timestamp or First fetch ID":
      "Horodatage de la première récupération ou ID de la première récupération",
    "For example to test via curl with an instance with instance name:":
      "Par exemple, pour tester via curl une instance avec un nom d'instance :",
    "For example, if `Server URL` is `https://example.com/mcp`, the default `Authorization Endpoint` will be `https://example.com/oauth2/authorize`.":
      "Par exemple, si `Server URL` est `https://example.com/mcp`, la valeur par défaut de `Authorization Endpoint` sera `https://example.com/oauth2/authorize`.",
    "For example, if `Server URL` is `https://example.com/mcp`, the default `Token Endpoint` will be `https://example.com/oauth2/token`.":
      "Par exemple, si `Server URL` est `https://example.com/mcp`, la valeur par défaut de `Token Endpoint` sera `https://example.com/oauth2/token`.",
    "For use with JSON and CSV formats - select specific XSOAR fields to export (comma separated list). If given the value 'all' - all XSOAR fields are exported (in large quantities this can cause a performance issue). If left empty - only value and type are exported.":
      "À utiliser avec les formats JSON et CSV : sélectionnez les champs XSOAR spécifiques à exporter (liste séparée par des virgules). Avec la valeur 'all', tous les champs XSOAR sont exportés (en grande quantité, cela peut entraîner des problèmes de performances). Si le champ est vide, seuls la valeur et le type sont exportés.",
    "For use with McAfee Web Gateway format - set the indicator list type.":
      "À utiliser avec le format McAfee Web Gateway : définissez le type de liste d'indicateurs.",
    "For use with PAN-OS (text) format - collapse method for IPs (none, range, CIDR).":
      "À utiliser avec le format PAN-OS (texte) : méthode de regroupement des adresses IP (none, range, CIDR).",
    "For use with PAN-OS (text) format - if selected, any URL entry that is not compliant with PAN-OS URL format is dropped instead of rewritten.":
      "À utiliser avec le format PAN-OS (texte) : si cette option est sélectionnée, toute entrée d'URL non conforme au format d'URL PAN-OS est supprimée au lieu d'être réécrite.",
    "For use with PAN-OS (text) format - String to add to beginning of published list. Supports newline characters (\\n).":
      "À utiliser avec le format PAN-OS (texte) : chaîne à ajouter au début de la liste publiée. Prend en charge les caractères de saut de ligne (\\n).",
    "For use with PAN-OS (text) format - String to add to end of published list. Supports newline characters (\\n).":
      "À utiliser avec le format PAN-OS (texte) : chaîne à ajouter à la fin de la liste publiée. Prend en charge les caractères de saut de ligne (\\n).",
    "For use with Symantec ProxySG format - set the categories that should be listed in the output (comma separated list). If not set, lists all existing categories.":
      "À utiliser avec le format Symantec ProxySG : définissez les catégories à lister dans la sortie (liste séparée par des virgules). Si elles ne sont pas définies, toutes les catégories existantes sont listées.",
    "For use with Symantec ProxySG format - set the default category for the output.":
      "À utiliser avec le format Symantec ProxySG : définissez la catégorie par défaut de la sortie.",
    "format. If set, will ignore URLs which are not compliant with PAN-OS URL format instead of being re-written.":
      "format. Si cette option est définie, les URL non conformes au format d'URL PAN-OS sont ignorées au lieu d'être réécrites.",
    "format. The categories which will be exported. Indicators not in these categories will be classified as the default category.":
      "format. Les catégories qui seront exportées. Les indicateurs ne figurant pas dans ces catégories seront classés dans la catégorie par défaut.",
    "format. The default category for the exported indicators.":
      "format. La catégorie par défaut des indicateurs exportés.",
    "format. The type indicated on the top of the exported list. Supports: string, applcontrol, dimension, category, ip, mediatype, number and regex.":
      "format. Le type indiqué en haut de la liste exportée. Valeurs prises en charge : string, applcontrol, dimension, category, ip, mediatype, number et regex.",
    "format. Whether to collapse IPs.":
      "format. Indique s'il faut regrouper les adresses IP.",
    "Forward requests to long-running integrations":
      "Transférer les requêtes vers les intégrations de longue durée",
    "Fully automated malware dynamic analysis sandboxing.":
      "Sandboxing d'analyse dynamique de malwares entièrement automatisé.",
    "Generates a Palo Alto Networks WildFire PDF report. For internal use with the TIM Sample Analysis feature.":
      "Génère un rapport PDF Palo Alto Networks WildFire. Destiné à un usage interne avec la fonctionnalité TIM Sample Analysis.",
    "Generic MCP Integration Description":
      "Description de l'intégration Generic MCP",
    "GenericAPICall Integration":
      "Intégration GenericAPICall",
    "Get actionable threat analysis and intelligence from HPE’s cloud-based, standards-compliant sharing platform":
      "Obtenez des analyses de menaces et du renseignement exploitables à partir de la plateforme de partage cloud et conforme aux standards de HPE",
    "Get the download count for each release in a repository":
      "Obtenir le nombre de téléchargements de chaque version d'un dépôt",
    "GitHub app installation ID":
      "ID d'installation de l'application GitHub",
    "GitHub app integration ID":
      "ID d'intégration de l'application GitHub",
    "Header example":
      "Exemple d'en-tête",
    "How often to refresh the list (e.g., less than 1 minute, 5 minutes, 12 hours, 7 days, 3 months, 1 year). For performance reasons, we do not recommend setting this value at less than 1 minute.":
      "Fréquence d'actualisation de la liste (par exemple, moins de 1 minute, 5 minutes, 12 hours, 7 days, 3 months, 1 year). Pour des raisons de performances, nous déconseillons de définir cette valeur à moins de 1 minute.",
    "ID Column name - in case of fetching by 'ID and timestamp'":
      "Nom de la colonne ID - en cas de récupération par 'ID and timestamp'",
    "If selected, CSV format appears in a textual webpage instead of initiating a file download.":
      "Si cette option est sélectionnée, le format CSV s'affiche dans une page web textuelle au lieu de lancer le téléchargement d'un fichier.",
    "If selected, it will force the list to contain only ASCII chars (non-ASCII URLs will be dropped).":
      "Si cette option est sélectionnée, la liste ne contiendra que des caractères ASCII (les URL non ASCII seront supprimées).",
    "If selected, ports in URLs are removed. For example, 'www.example.com:9999/path' becomes 'www.example.com/path'.":
      "Si cette option est sélectionnée, les ports sont supprimés des URL. Par exemple, 'www.example.com:9999/path' devient 'www.example.com/path'.",
    "If selected, strips the protocol from URLs (http/https).":
      "Si cette option est sélectionnée, le protocole (http/https) est supprimé des URL.",
    "If selected, the comment \"# Empty list\" is added to an empty list.":
      "Si cette option est sélectionnée, le commentaire \"# Empty list\" est ajouté à une liste vide.",
    "If selected, URLs are truncated to no more than 254 characters.":
      "Si cette option est sélectionnée, les URL sont tronquées à 254 caractères maximum.",
    "If set, will strip protocols off URLs.":
      "Si cette option est définie, les protocoles sont supprimés des URL.",
    "If set. will strip ports off URLs, otherwise will ignore URLs with ports.":
      "Si cette option est définie, les ports sont supprimés des URL ; sinon, les URL contenant des ports sont ignorées.",
    "If the app server running the container fails, the container should restart on a different app server.":
      "Si le serveur d'applications qui exécute le conteneur tombe en panne, le conteneur redémarre sur un autre serveur d'applications.",
    "If the port value is empty, a default port will be selected according to the database type.":
      "Si la valeur du port est vide, un port par défaut est sélectionné en fonction du type de base de données.",
    "If you have several Generic Export Indicators Service integration instances, make sure to use":
      "Si vous avez plusieurs instances de l'intégration Generic Export Indicators Service, veillez à utiliser",
    "Important Notes:":
      "Remarques importantes :",
    "In “route” listen mode, a request received by any of the app servers will be redirected to the one currently running the NGINX container.":
      "En mode d'écoute « route », une requête reçue par n'importe quel serveur d'applications est redirigée vers celui qui exécute actuellement le conteneur NGINX.",
    "Incident Name":
      "Nom de l'incident",
    "Indicator Query":
      "Requête d'indicateurs",
    "inline argument, the number of exported indicators is limited to 100,000 for performance reasons. To export more than 100,000 indicators, create a new integration instance with the desired Indicator Query and List Size.":
      "Dans l'argument en ligne, le nombre d'indicateurs exportés est limité à 100 000 pour des raisons de performances. Pour exporter plus de 100 000 indicateurs, créez une instance d'intégration avec les valeurs Indicator Query et List Size souhaitées.",
    "inline argument, use separate EDL instances (one per query) and set a default query for each to improve performance.":
      "Dans l'argument en ligne, utilisez des instances EDL distinctes (une par requête) et définissez une requête par défaut pour chacune afin d'améliorer les performances.",
    "Integrate with Okta's Identity Access Management service to execute CRUD operations to employee lifecycle processes.":
      "S'intègre au service Identity Access Management d'Okta pour exécuter des opérations CRUD dans les processus de cycle de vie des employés.",
    "Integrate with Oracle's services to execute CRUD and Group operations for employee lifecycle processes.":
      "S'intègre aux services d'Oracle pour exécuter des opérations CRUD et de groupe dans les processus de cycle de vie des employés.",
    "Integrate with Palo Alto Networks Prisma AIRS for AI security capabilities including runtime scanning, red teaming, AI supply chain security, and DLP configuration.":
      "S'intègre à Palo Alto Networks Prisma AIRS pour bénéficier de fonctionnalités de sécurité de l'IA, notamment l'analyse en cours d'exécution, le red teaming, la sécurité de la chaîne d'approvisionnement de l'IA et la configuration DLP.",
    "Integrate with Prisma Access to monitor the status of the Service, alert and take actions.":
      "S'intègre à Prisma Access pour surveiller l'état du service, émettre des alertes et prendre des mesures.",
    "Integrate with Salesforce Fusion Identity Access Management service to execute CRUD (create, read, update, and delete) operations for employee lifecycle processes.":
      "S'intègre au service Salesforce Fusion Identity Access Management pour exécuter des opérations CRUD (création, lecture, mise à jour et suppression) dans les processus de cycle de vie des employés.",
    "Integrate with SAP's services to execute CRUD operations for employee lifecycle processes.":
      "S'intègre aux services de SAP pour exécuter des opérations CRUD dans les processus de cycle de vie des employés.",
    "Integrate with ServiceNow's services to execute CRUD operations for employee lifecycle processes.":
      "S'intègre aux services de ServiceNow pour exécuter des opérations CRUD dans les processus de cycle de vie des employés.",
    "Integrate with Slack's services to execute CRUD operations for employee lifecycle processes.":
      "S'intègre aux services de Slack pour exécuter des opérations CRUD dans les processus de cycle de vie des employés.",
    "Integrates with the PingOne Management API to unlock, create, delete and update users.":
      "S'intègre à l'API PingOne Management pour déverrouiller, créer, supprimer et mettre à jour des utilisateurs.",
    "Integration for sending notifications to a Microsoft Teams channel via a workflow of type `Post to a channel when a webhook request is received`.":
      "Intégration permettant d'envoyer des notifications vers un canal Microsoft Teams via un workflow de type `Post to a channel when a webhook request is received`.",
    "Integration with Okta's cloud-based identity management service.":
      "Intégration avec le service de gestion des identités cloud d'Okta.",
    "Integration with Threatmon for vulnerability threat intelligence.":
      "Intégration avec Threatmon pour le renseignement sur les menaces liées aux vulnérabilités.",
    "Internal page size used when querying Cortex for the indicators. Value can be up to 10,000 due to performance limitations.":
      "Taille de page interne utilisée lors de l'interrogation de Cortex pour les indicateurs. La valeur peut aller jusqu'à 10 000 en raison de limitations de performances.",
    "IP Collapsing":
      "Regroupement d'adresses IP",
    "Is the API key used for each call provided in the header or as a parameter?":
      "La clé API utilisée pour chaque appel est-elle fournie dans l'en-tête ou en tant que paramètre ?",
    "Is the API key used for each call provided in the header or as a parameter? Default it set to false (key is provided as a parameter). Unchecking this will pass the API key as a call header":
      "La clé API utilisée pour chaque appel est-elle fournie dans l'en-tête ou en tant que paramètre ? La valeur par défaut est false (la clé est fournie en tant que paramètre). Si cette case est décochée, la clé API sera transmise dans l'en-tête de l'appel",
    "IT service management.":
      "Gestion des services informatiques.",
    "List all issues":
      "Lister tous les tickets",
    "List Size":
      "Taille de la liste",
    "Listen Port":
      "Port d'écoute",
    "Lists all of the security vulnerabilities for various products (OS,Applications) etc).":
      "Liste toutes les vulnérabilités de sécurité de divers produits (OS, applications), etc.",
    "Make sure to add as parameters the fetch parameter and the limit.":
      "Veillez à ajouter comme paramètres le paramètre de récupération et la limite.",
    "Make sure to add as parameters the fetch parameter.":
      "Veillez à ajouter comme paramètre le paramètre de récupération.",
    "Make sure you run the":
      "Veillez à exécuter la commande",
    "Malware analysis sandboxing.":
      "Sandboxing pour l'analyse des malwares.",
    "Manage Palo Alto Networks Firewall and Panorama. Use this pack to manage Prisma Access through Panorama. For more information, see the Panorama documentation.":
      "Gérez Palo Alto Networks Firewall et Panorama. Utilisez ce pack pour gérer Prisma Access via Panorama. Pour plus d'informations, consultez la documentation de Panorama.",
    "Manage teams and members in Microsoft Teams.":
      "Gérez les équipes et les membres dans Microsoft Teams.",
    "Maximum number of items in the list.":
      "Nombre maximal d'éléments dans la liste.",
    "Maximum Size of CIDR Block (by mask bit)":
      "Taille maximale du bloc CIDR (par bit de masque)",
    "McAfee Gateway: Indicator List Type":
      "McAfee Gateway : type de liste d'indicateurs",
    "Microsoft Graph lets your app get authorized access to a user's Outlook mail data in a personal or organization account.":
      "Microsoft Graph permet à votre application d'obtenir un accès autorisé aux données de messagerie Outlook d'un utilisateur, dans un compte personnel ou professionnel.",
    "Microsoft Graph lets your app get authorized access to a user's Teams app in a personal or organization account.":
      "Microsoft Graph permet à votre application d'obtenir un accès autorisé à l'application Teams d'un utilisateur, dans un compte personnel ou professionnel.",
    "Modify Request Parameters Through the URL":
      "Modifier les paramètres de la requête via l'URL",
    "Netcraft takedown, submission and screenshot management.":
      "Gestion des retraits (takedown), des soumissions et des captures d'écran Netcraft.",
    "No Authorization":
      "Aucune autorisation",
    "Note: Other SQL databases are currently not supported by the fetch incidents.":
      "Remarque : les autres bases de données SQL ne sont actuellement pas prises en charge par la récupération d'incidents.",
    "O365 Outlook Calendar enables you to create and manage different calendars and events according to your requirements.":
      "O365 Outlook Calendar vous permet de créer et de gérer différents calendriers et événements selon vos besoins.",
    "On-premise firewall by Sophos enables you to manage your firewall, respond to threats, and monitor what’s happening on your network.":
      "Le pare-feu sur site de Sophos vous permet de gérer votre pare-feu, de répondre aux menaces et de surveiller ce qui se passe sur votre réseau.",
    "Option to remove top level domainGlobs from the list. For example - *.com.":
      "Option permettant de supprimer de la liste les domainGlobs de premier niveau. Par exemple : *.com.",
    "Outbound Format":
      "Format de sortie",
    "Palo Alto Networks Best Practice Assessment (BPA) analyzes NGFW and Panorama configurations and compares them to the best practices.":
      "Palo Alto Networks Best Practice Assessment (BPA) analyse les configurations NGFW et Panorama et les compare aux bonnes pratiques.",
    "Palo Alto Networks Enterprise DLP discovers and protects company data across every data channel and repository. Integrated Enterprise DLP enables data protection and compliance everywhere without complexity.":
      "Palo Alto Networks Enterprise DLP découvre et protège les données de l'entreprise sur tous les canaux et référentiels de données. Enterprise DLP intégré permet la protection des données et la conformité partout, sans complexité.",
    "PAN-OS: drop invalid URL entries":
      "PAN-OS : supprimer les entrées d'URL non valides",
    "parameter (default: 600 seconds). After the time to live expires, and upon execution of a new command, the database connection will close and a new connection will be created.":
      "paramètre (par défaut : 600 secondes). Une fois la durée de vie expirée, lors de l'exécution d'une nouvelle commande, la connexion à la base de données se ferme et une nouvelle connexion est créée.",
    "parameter configured in the instance configuration.":
      "paramètre configuré dans la configuration de l'instance.",
    "Parameterized example":
      "Exemple paramétré",
    "Password/API Key":
      "Mot de passe/Clé API",
    "Prepend string to list":
      "Ajouter une chaîne au début de la liste",
    "Prisma Cloud secures infrastructure, workloads and applications, across the entire cloud-native technology stack.":
      "Prisma Cloud sécurise l'infrastructure, les workloads et les applications sur l'ensemble de la pile technologique cloud-native.",
    "Proofpoint email security appliance.":
      "Appliance de sécurité de la messagerie Proofpoint.",
    "Protect your web application using Signal Sciences.":
      "Protégez votre application web avec Signal Sciences.",
    "Provides commands for interaction with Prisma SASE API.":
      "Fournit des commandes pour interagir avec l'API Prisma SASE.",
    "Provides URL scanning and rewriting of inbound email messages in mail flow, and time-of-click verification of URLs and links in email messages and other locations.":
      "Fournit l'analyse et la réécriture des URL des messages entrants dans le flux de messagerie, ainsi que la vérification au moment du clic des URL et des liens dans les messages et autres emplacements.",
    "Queries examples":
      "Exemples de requêtes",
    "Refresh Rate":
      "Fréquence d'actualisation",
    "RelayShield real-time identity-compromise and agent-security threat intelligence.":
      "Renseignement en temps réel de RelayShield sur la compromission d'identités et la sécurité des agents.",
    "RelayShield real-time identity-compromise and agent-security threat intelligence. Implements the generic `domain`/`ip`/`email` reputation commands (auto-invoked by existing enrichment playbooks) plus RelayShield-specific commands for MCP server registry risk, certificate expiry, and supply-chain vendor risk. \"No known finding\" from any command means nothing was flagged in the sources RelayShield actually queried. It is deliberately never mapped to a \"Good\" DBotScore, since that would claim more certainty than the data supports. See the README's DBotScore section for the exact mapping.":
      "Renseignement en temps réel de RelayShield sur la compromission d'identités et la sécurité des agents. Implémente les commandes génériques de réputation `domain`/`ip`/`email` (appelées automatiquement par les playbooks d'enrichissement existants) ainsi que des commandes propres à RelayShield pour le risque du registre de serveurs MCP, l'expiration des certificats et le risque des fournisseurs de la chaîne d'approvisionnement. \"No known finding\" renvoyé par une commande signifie que rien n'a été signalé dans les sources réellement interrogées par RelayShield. Il n'est volontairement jamais associé à un DBotScore \"Good\", car cela revendiquerait plus de certitude que ce que les données justifient. Consultez la section DBotScore du README pour le mappage exact.",
    "Retrieve and monitor internal security findings for your organization, and critical findings across your supplier (third-party) portfolio, from the Panorays platform to automate incident response within Cortex.":
      "Récupérez et surveillez les constats de sécurité internes de votre organisation et les constats critiques de votre portefeuille de fournisseurs (tiers) depuis la plateforme Panorays afin d'automatiser la réponse aux incidents dans Cortex.",
    "RiskSense is a cloud-based platform that provides vulnerability management and prioritization to measure and control cybersecurity risk.":
      "RiskSense est une plateforme cloud qui assure la gestion et la priorisation des vulnérabilités afin de mesurer et de maîtriser le risque de cybersécurité.",
    "Run queries on Splunk and fetch Notable Events (Splunk ES versions up to 8.2).":
      "Exécutez des requêtes sur Splunk et récupérez des Notable Events (versions de Splunk ES jusqu'à 8.2).",
    "Run queries on Splunk and fetch Splunk ES Findings and Investigations (Splunk ES 8.2+).":
      "Exécutez des requêtes sur Splunk et récupérez des Splunk ES Findings et Investigations (Splunk ES 8.2 et ultérieures).",
    "SaaS Security API is a cloud-based service that you can connect directly to your sanctioned SaaS applications using the cloud app’s API to provide data classification, sharing and permission visibility, and threat detection. This Content Pack provides insights into risks posed by data exposure and policy violations and enables you to use Cortex to effectively manage the incidents discovered by SaaS Security API.":
      "SaaS Security API est un service cloud que vous pouvez connecter directement à vos applications SaaS approuvées à l'aide de l'API de l'application cloud pour assurer la classification des données, la visibilité du partage et des autorisations, et la détection des menaces. Ce pack de contenu fournit des informations sur les risques liés à l'exposition des données et aux violations de politique, et vous permet d'utiliser Cortex pour gérer efficacement les incidents détectés par SaaS Security API.",
    "SailPoint IdentityIQ context pack enables XSOAR customers to utilize the deep, enriched contextual data in the SailPoint predictive identity platform to better drive identity-aware security practices.":
      "Le pack de contexte SailPoint IdentityIQ permet aux clients XSOAR d'exploiter les données contextuelles riches et approfondies de la plateforme d'identité prédictive de SailPoint pour mieux orienter les pratiques de sécurité axées sur l'identité.",
    "Scan and govern AI models with Palo Alto Networks Prisma AIRS AI Supply Chain Security: model scans, evaluations, violations, labels, model groups, and security rules.":
      "Analysez et gouvernez les modèles d'IA avec Palo Alto Networks Prisma AIRS AI Supply Chain Security : analyses de modèles, évaluations, violations, étiquettes, groupes de modèles et règles de sécurité.",
    "Search for specific issues":
      "Rechercher des tickets spécifiques",
    "Select an Issue or Pull requests to Fetch":
      "Sélectionnez un ticket ou des pull requests à récupérer",
    "Send messages and notifications to your Slack team.":
      "Envoyez des messages et des notifications à votre équipe Slack.",
    "Separate pairs using":
      "Séparez les paires avec",
    "Server Name":
      "Nom du serveur",
    "ServiceNow CMDB is a service‑centric foundation that proactively analyzes service‑impacting changes, identifies issues, and eliminates outages.":
      "ServiceNow CMDB est une base centrée sur le service qui analyse de manière proactive les changements ayant un impact sur les services, identifie les problèmes et élimine les interruptions.",
    "Show CSV format as Text":
      "Afficher le format CSV sous forme de texte",
    "SIGNL4 offers critical alerting, incident response and service dispatching for operating critical infrastructure. It alerts you persistently via app push, SMS text, voice calls, and email including tracking, escalation, on-call duty scheduling and collaboration.":
      "SIGNL4 offre des alertes critiques, la réponse aux incidents et la répartition des services pour l'exploitation d'infrastructures critiques. Il vous alerte de manière persistante par notification push, SMS, appel vocal et e-mail, avec suivi, escalade, planification des astreintes et collaboration.",
    "Space-separated permission identifiers.":
      "Identifiants d'autorisations séparés par des espaces.",
    "Specify arguments for the configuration of an instance name-value pairs, for example:":
      "Spécifiez des arguments pour la configuration d'une instance sous forme de paires nom-valeur, par exemple :",
    "Specify the value to use when passing the API key as a header or parameter value.":
      "Spécifiez la valeur à utiliser lors du passage de la clé API en tant qu'en-tête ou valeur de paramètre.",
    "Specify the value to use when passing the API key as a header or parameter value. e.g., X-PAN-KEY: API_KEY_HERE (X-PAN-KEY is the value specified in this field) - For a parameterized call, this would be appended to the URL as &X-PAN-KEY=KEY_HERE - - For a header-based call, this would appear in the header as 'X-PAN-KEY': KEY_HERE":
      "Spécifiez la valeur à utiliser lors du passage de la clé API en tant qu'en-tête ou valeur de paramètre. par exemple : X-PAN-KEY: API_KEY_HERE (X-PAN-KEY est la valeur spécifiée dans ce champ) - Pour un appel paramétré, cela serait ajouté à l'URL sous la forme &X-PAN-KEY=KEY_HERE - - Pour un appel basé sur l'en-tête, cela apparaîtrait dans l'en-tête sous la forme 'X-PAN-KEY': KEY_HERE",
    "SQL DB":
      "Base de données SQL",
    "Strip ports from URLs":
      "Supprimer les ports des URL",
    "Strip protocols from URLs":
      "Supprimer les protocoles des URL",
    "Symantec Messaging Gateway protects against spam, malware, targeted attacks and provides advanced content filtering, data loss prevention, and email encryption.":
      "Symantec Messaging Gateway protège contre le spam, les malwares et les attaques ciblées, et offre un filtrage avancé du contenu, la prévention des pertes de données et le chiffrement des e-mails.",
    "Symantec ProxySG: Default Category":
      "Symantec ProxySG : catégorie par défaut",
    "Symantec ProxySG: Listed Categories":
      "Symantec ProxySG : catégories listées",
    "Tavily is a web service that provides real-time web search and retrieval capabilities through an API, enabling developers to fetch and extract relevant information from the internet in structured formats like JSON.":
      "Tavily est un service web qui offre des capacités de recherche et de récupération web en temps réel via une API, permettant aux développeurs de récupérer et d'extraire des informations pertinentes d'Internet dans des formats structurés tels que JSON.",
    "The fetch parameter should be the same as the column name, the limit is handled outside the query.":
      "Le paramètre de récupération doit être identique au nom de la colonne ; la limite est gérée en dehors de la requête.",
    "The following are procedure examples for different SQL databases:":
      "Voici des exemples de procédures pour différentes bases de données SQL :",
    "The format of the exported list.":
      "Le format de la liste exportée.",
    "The Generic Export Indicators Service is a long-running integration. For more information about long-running integrations, check out the":
      "Generic Export Indicators Service est une intégration de longue durée. Pour plus d'informations sur les intégrations de longue durée, consultez",
    "The Generic SQL query or procedure to fetch according to.":
      "La requête ou la procédure Generic SQL selon laquelle effectuer la récupération.",
    "The Generic SQL query/procedure.":
      "La requête/procédure Generic SQL.",
    "The integration supports the following workflows:":
      "L'intégration prend en charge les workflows suivants :",
    "The maximum number of entries in the output. If no value is provided, will use the value specified in the":
      "Le nombre maximal d'entrées en sortie. Si aucune valeur n'est fournie, la valeur spécifiée dans",
    "The name of the requested repository":
      "Le nom du dépôt demandé",
    "The name to use for the server in tool names. If not provided, the default name returned by the server will be used.":
      "Le nom à utiliser pour le serveur dans les noms d'outils. S'il n'est pas fourni, le nom par défaut renvoyé par le serveur sera utilisé.",
    "The output format. Supports":
      "Le format de sortie. Prend en charge",
    "The Prisma Cloud IAM API consists of a set of API endpoints that allow customers to perform CRUD operation on their user profiles.":
      "L'API IAM de Prisma Cloud se compose d'un ensemble de points de terminaison d'API qui permettent aux clients d'effectuer des opérations CRUD sur leurs profils utilisateur.",
    "The procedure should contain conditions on the fetch parameter: (In the example provided, ‘timestamp’ is a fetch parameter)":
      "La procédure doit contenir des conditions sur le paramètre de récupération (dans l'exemple fourni, ‘timestamp’ est un paramètre de récupération)",
    "The procedure should contain conditions on the fetch parameter: (In the example provided, ‘ts’ is a fetch timestamp parameter)":
      "La procédure doit contenir des conditions sur le paramètre de récupération (dans l'exemple fourni, ‘ts’ est un paramètre d'horodatage de récupération)",
    "The query to run to update the indicators list. To view expected results, run the following command from the Cortex CLI `!findIndicators query=<your query>`. An empty value may load unwanted indicators. See integration docs for troubleshooting information.":
      "La requête à exécuter pour mettre à jour la liste d'indicateurs. Pour afficher les résultats attendus, exécutez la commande suivante depuis la CLI Cortex : `!findIndicators query=<your query>`. Une valeur vide peut charger des indicateurs indésirables. Consultez la documentation de l'intégration pour obtenir des informations de dépannage.",
    "The query used to retrieve indicators from the system. If you are using this argument, no more than 100,000 can be exported through the EDL.":
      "La requête utilisée pour récupérer les indicateurs du système. Si vous utilisez cet argument, 100 000 indicateurs au maximum peuvent être exportés via l'EDL.",
    "The REST API URL":
      "L'URL de l'API REST",
    "The SailPoint Identity Security platform can be configured either on-prem/single tenant SaaS, or multi-tenant. This package is intended to be used with the SaaS, multi-tenant solution, IdentityNow.":
      "La plateforme SailPoint Identity Security peut être configurée sur site, en SaaS mono-tenant ou en multi-tenant. Ce package est destiné à être utilisé avec la solution SaaS multi-tenant IdentityNow.",
    "The starting entry index from which to export the indicators when index 0 is the first position.":
      "L'index de l'entrée de départ à partir de laquelle exporter les indicateurs, l'index 0 correspondant à la première position.",
    "The ThreatX integration allows automated enforcement and intel gathering actions.":
      "L'intégration ThreatX permet des actions automatisées d'application de mesures et de collecte de renseignements.",
    "The URL for the OAuth 2.0 authorization endpoint. If not provided, the default will be the origin of the `Server URL` followed by `/oauth2/authorize`.":
      "L'URL du point de terminaison d'autorisation OAuth 2.0. Si elle n'est pas fournie, la valeur par défaut sera l'origine de `Server URL` suivie de `/oauth2/authorize`.",
    "The URL for the OAuth 2.0 authorization endpoint. If not provided, the default will be the origin of the `Server URL` followed by `/oauth2/authorize`. For example, if `Server URL` is `https://example.com/mcp`, the default `Authorization Endpoint` will be `https://example.com/oauth2/authorize`.":
      "L'URL du point de terminaison d'autorisation OAuth 2.0. Si elle n'est pas fournie, la valeur par défaut sera l'origine de `Server URL` suivie de `/oauth2/authorize`. Par exemple, si `Server URL` est `https://example.com/mcp`, la valeur par défaut de `Authorization Endpoint` sera `https://example.com/oauth2/authorize`.",
    "The URL for the OAuth 2.0 token endpoint. If not provided, the default will be the origin of the `Server URL` followed by `/oauth2/token`.":
      "L'URL du point de terminaison de jeton OAuth 2.0. Si elle n'est pas fournie, la valeur par défaut sera l'origine de `Server URL` suivie de `/oauth2/token`.",
    "The URL for the OAuth 2.0 token endpoint. If not provided, the default will be the origin of the `Server URL` followed by `/oauth2/token`. For example, if `Server URL` is `https://example.com/mcp`, the default `Token Endpoint` will be `https://example.com/oauth2/token`.":
      "L'URL du point de terminaison de jeton OAuth 2.0. Si elle n'est pas fournie, la valeur par défaut sera l'origine de `Server URL` suivie de `/oauth2/token`. Par exemple, si `Server URL` est `https://example.com/mcp`, la valeur par défaut de `Token Endpoint` sera `https://example.com/oauth2/token`.",
    "There are two options to fetch incidents, determined by the ‘Fetch by’ configuration:":
      "Il existe deux options pour récupérer les incidents, déterminées par la configuration ‘Fetch by’ :",
    "There are two options to use to bind variables:":
      "Il existe deux options pour lier des variables :",
    "This does not happen in “port” listen mode, that’s why “route” mode should be used.":
      "Cela ne se produit pas en mode d'écoute « port », c'est pourquoi le mode « route » doit être utilisé.",
    "This integration allows the security operations center to create and manage incidents based on Vectra Events Detections.":
      "Cette intégration permet au centre d'opérations de sécurité de créer et de gérer des incidents basés sur Vectra Events Detections.",
    "This integration allows you to connect securely with any MCP server and access its tools in real time.":
      "Cette intégration vous permet de vous connecter en toute sécurité à n'importe quel serveur MCP et d'accéder à ses outils en temps réel.",
    "This integration allows you to manage and interact with Microsoft security and compliance content search.":
      "Cette intégration permet de gérer et d'utiliser la recherche de contenu de sécurité et de conformité de Microsoft.",
    "This integration is configured automatically as part of the Okta Standard Connector. Do not configure this integration directly — set it up from the connector page instead.":
      "Cette intégration est configurée automatiquement dans le cadre d'Okta Standard Connector. Ne configurez pas cette intégration directement ; configurez-la plutôt depuis la page du connecteur.",
    "This integration provides a method for executing HTTP API calls to specific API endpoints used in one-off scenarios not covered by other XSOAR integrations. This integration supports unauthenticated and authenticated API calls over HTTPS, using API key and basic HTTP authentication methods.":
      "Cette intégration fournit une méthode pour exécuter des appels d'API HTTP vers des points de terminaison d'API spécifiques utilisés dans des scénarios ponctuels non couverts par d'autres intégrations XSOAR. Elle prend en charge les appels d'API non authentifiés et authentifiés via HTTPS, à l'aide de clés API et de méthodes d'authentification HTTP de base.",
    "This integration transfers files between Cortex and a remote machine and executes commands on the remote machine.":
      "Cette intégration transfère des fichiers entre Cortex et une machine distante et exécute des commandes sur la machine distante.",
    "This is a feed integration for extracting indicators from ServiceNow.":
      "Il s'agit d'une intégration de flux pour extraire des indicateurs de ServiceNow.",
    "This is the Orion Malware integration. Analyzes hash and files with static and dynamic analysis.":
      "Il s'agit de l'intégration Orion Malware. Elle analyse les hachages et les fichiers par analyse statique et dynamique.",
    "To generate your personal access token, visit:":
      "Pour générer votre jeton d'accès personnel, rendez-vous sur :",
    "TrendAI™ Apex One central automation to manage agents and User-Defined Suspicious Objects.":
      "Automatisation centralisée TrendAI™ Apex One pour gérer les agents et les objets suspects définis par l'utilisateur.",
    "Troubleshoot":
      "Dépannage",
    "Truncate URL length":
      "Tronquer la longueur des URL",
    "Unit 42 Feed integration provides threat intelligence from Palo Alto Networks Unit 42 research team.":
      "L'intégration Unit 42 Feed fournit du renseignement sur les menaces issu de l'équipe de recherche Unit 42 de Palo Alto Networks.",
    "Update an issue":
      "Mettre à jour un ticket",
    "Update list on demand only":
      "Mettre à jour la liste à la demande uniquement",
    "Use an SSL connection":
      "Utiliser une connexion SSL",
    "Use both bind variable names and values, for example:":
      "Utilisez à la fois les noms et les valeurs des variables de liaison, par exemple :",
    "Use Connection Pooling":
      "Utiliser la mise en pool des connexions",
    "Use LDAP (Teradata only)":
      "Utiliser LDAP (Teradata uniquement)",
    "Use only bind variable values, for example:":
      "Utilisez uniquement les valeurs des variables de liaison, par exemple :",
    "Use the following arguments in the URL to change the request:":
      "Utilisez les arguments suivants dans l'URL pour modifier la requête :",
    "Use the Mimecast integration to manage email security, continuity, and archiving services.":
      "Utilisez l'intégration Mimecast pour gérer les services de sécurité, de continuité et d'archivage de la messagerie.",
    "Use the O365 File Management (Onedrive/Sharepoint/Teams) integration to enable your app to get authorized access to files in OneDrive, SharePoint, and MS Teams across your entire organization. This integration requires admin consent.":
      "Utilisez l'intégration O365 File Management (OneDrive/SharePoint/Teams) pour permettre à votre application d'obtenir un accès autorisé aux fichiers dans OneDrive, SharePoint et MS Teams au sein de toute votre organisation. Cette intégration nécessite le consentement de l'administrateur.",
    "Use the Proofpoint Threat Response integration to orchestrate and automate incident response.":
      "Utilisez l'intégration Proofpoint Threat Response pour orchestrer et automatiser la réponse aux incidents.",
    "Use The ServiceNow IT Service Management (ITSM) solution to modernize the way you manage and deliver services to your users.":
      "Utilisez la solution ServiceNow IT Service Management (ITSM) pour moderniser la manière de gérer et de fournir des services à vos utilisateurs.",
    "Use the SpecterOpsBloodHoundEnterprise integration to retrieve attack path findings from BloodHound Enterprise to streamline incident creation and investigation.":
      "Utilisez l'intégration SpecterOpsBloodHoundEnterprise pour récupérer les constats de chemins d'attaque de BloodHound Enterprise afin de simplifier la création et l'investigation des incidents.",
    "Use the Workday IAM Integration as part of the IAM premium pack.":
      "Utilisez l'intégration Workday IAM dans le cadre du pack premium IAM.",
    "Use the Zoom integration to manage your Zoom users and meetings.":
      "Utilisez l'intégration Zoom pour gérer vos utilisateurs et vos réunions Zoom.",
    "Use this feed integration to fetch VirusTotal Livehunt notifications as indicators.":
      "Utilisez cette intégration de flux pour récupérer les notifications VirusTotal Livehunt sous forme d'indicateurs.",
    "Use this feed integration to fetch VirusTotal Retrohunt matches.":
      "Utilisez cette intégration de flux pour récupérer les correspondances VirusTotal Retrohunt.",
    "Use this integration to connect securely with a ServiceNow Model Context Protocol (MCP) server and access its tools in real time.":
      "Utilisez cette intégration pour vous connecter en toute sécurité à un serveur Model Context Protocol (MCP) de ServiceNow et accéder à ses outils en temps réel.",
    "Use TypeSafe Jev typed judgments and calibrated probabilities in Cortex XSIAM and XSOAR playbooks.":
      "Utilisez les jugements typés et les probabilités calibrées de TypeSafe Jev dans les playbooks Cortex XSIAM et XSOAR.",
    "Username (Blank when using API key)":
      "Nom d'utilisateur (vide en cas d'utilisation d'une clé API)",
    "Username & Password":
      "Nom d'utilisateur et mot de passe",
    "Username of the repository owner, for example: github.com/repos/{_owner_}/{repo}/issues":
      "Nom d'utilisateur du propriétaire du dépôt, par exemple : github.com/repos/{_owner_}/{repo}/issues",
    "Uses the Sysdig agent to respond to malicious activity by triggering different actions at the host or container level, such as killing a container, quarantining a file, or performing a system capture.":
      "Utilise l'agent Sysdig pour répondre aux activités malveillantes en déclenchant diverses actions au niveau de l'hôte ou du conteneur, comme l'arrêt d'un conteneur, la mise en quarantaine d'un fichier ou la réalisation d'une capture système.",
    "Validate Cortex ASM-discovered exposures with Tenzai's agentic penetration testing. Create a scan for an exposure, poll it to completion, and fetch the verdict and evidence back into the Cortex issue.":
      "Validez les expositions découvertes par Cortex ASM grâce aux tests d'intrusion agentiques de Tenzai. Créez une analyse pour une exposition, interrogez-la jusqu'à son terme, puis récupérez le verdict et les preuves dans le problème Cortex.",
    "VMware Carbon Black App Control (formerly known as Carbon Black Enterprise Protection) is a next-generation endpoint threat prevention solution to deliver a portfolio of protection policies, real-time visibility across environments, and comprehensive compliance rule sets in a single platform. This integration only supports Carbon Black on-premise APIs.":
      "VMware Carbon Black App Control (anciennement Carbon Black Enterprise Protection) est une solution de prévention des menaces pour endpoints de nouvelle génération qui fournit un ensemble de politiques de protection, une visibilité en temps réel sur tous les environnements et des jeux de règles de conformité complets au sein d'une seule plateforme. Cette intégration ne prend en charge que les API sur site de Carbon Black.",
    "VMware Carbon Black EDR (formerly known as Carbon Black Response).":
      "VMware Carbon Black EDR (anciennement Carbon Black Response).",
    "Vulnerability management solution to help reduce threat exposure.":
      "Solution de gestion des vulnérabilités qui aide à réduire l'exposition aux menaces.",
    "When ‘Fetch by’ is ‘ID and timestamp’, handling the ID occurs internally and has no reference in the query.":
      "Lorsque ‘Fetch by’ est défini sur ‘ID and timestamp’, la gestion de l'ID s'effectue en interne et n'est pas référencée dans la requête.",
    "When ‘Fetch by’ is ‘Unique ascending ID’ or ‘Unique timestamp’, make sure to create the procedure with ‘>’ and not ‘>=’ in the condition on the timestamp/id field.":
      "Lorsque ‘Fetch by’ est défini sur ‘Unique ascending ID’ ou ‘Unique timestamp’, veillez à créer la procédure avec ‘>’ et non ‘>=’ dans la condition sur le champ d'horodatage/ID.",
    "When enabled, the integration queries the server using full queries (overwrites the \"Exported Fields\" parameter). Advanced configuration to be used only if instructed by Cortex Support, or you have encountered log errors in the form of: msgpack: invalid code.":
      "Lorsque cette option est activée, l'intégration interroge le serveur à l'aide de requêtes complètes (remplace le paramètre \"Exported Fields\"). Configuration avancée à utiliser uniquement sur instruction du support Cortex ou si vous avez rencontré des erreurs de journal de la forme : msgpack: invalid code.",
    "When Running in On-Demand Mode":
      "Lors de l'exécution en mode à la demande",
    "When set to true and the certificate and private key are provided, the HSTS header is added to all requests.":
      "Lorsque cette option est définie sur true et que le certificat et la clé privée sont fournis, l'en-tête HSTS est ajouté à toutes les requêtes.",
    "When using more than one server in High Availability (HA) mode, the External Dynamic List (EDL) should be configured to listen on a route, not on a port.":
      "Lorsque plusieurs serveurs sont utilisés en mode haute disponibilité (HA), External Dynamic List (EDL) doit être configurée pour écouter sur une route et non sur un port.",
    "When using queries, there are two requirements, and the third one depends on the database.":
      "Lors de l'utilisation de requêtes, il y a deux exigences, et une troisième qui dépend de la base de données.",
    "Workday offers enterprise-level software solutions for financial management, human resources, and planning.":
      "Workday propose des solutions logicielles de niveau entreprise pour la gestion financière, les ressources humaines et la planification.",
    "XQL Query Engine enables you to run XQL queries on your data sources.":
      "XQL Query Engine vous permet d'exécuter des requêtes XQL sur vos sources de données.",
    "XSOAR Indicator Page Size":
      "Taille de page des indicateurs XSOAR",
    "You can access the External Dynamic List at the following url:":
      "Vous pouvez accéder à External Dynamic List à l'URL suivante :",
    "Zscaler Internet Access via ZIdentity OAuth 2.0. Provides URL/IP/domain classification, denylist and allowlist management, URL category management, sandbox reporting, user and group management, and IP destination group management using OAuth 2.0 client credentials authentication through ZIdentity.":
      "Zscaler Internet Access via ZIdentity OAuth 2.0. Fournit la classification des URL/IP/domaines, la gestion des listes de blocage et d'autorisation, la gestion des catégories d'URL, les rapports de sandbox, la gestion des utilisateurs et des groupes, ainsi que la gestion des groupes de destinations IP à l'aide de l'authentification par identifiants client OAuth 2.0 via ZIdentity.",
    "Zscaler is a cloud security solution built for performance and flexible scalability. This integration enables you to manage URL and IP address allow lists and block lists, manage and update categories, get Sandbox reports, create, manage, and update IP destination groups and manually log in, log out, and activate changes in a Zscaler session.":
      "Zscaler est une solution de sécurité cloud conçue pour offrir performances et évolutivité flexible. Cette intégration vous permet de gérer les listes d'autorisation et de blocage d'URL et d'adresses IP, de gérer et de mettre à jour les catégories, d'obtenir des rapports de sandbox, de créer, gérer et mettre à jour des groupes de destinations IP, et de vous connecter, vous déconnecter et activer des modifications manuellement dans une session Zscaler.",

    // --- Batch: Google Workspace / GitHub / GitLab / Terraform / Polygon integration docs and parameters (09:14 export) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    "A maximum of 200 emails per fetch (even if a higher number is configured). Default is 50.":
      "Un maximum de 200 e-mails par récupération (même si un nombre supérieur est configuré). La valeur par défaut est 50.",
    "A maximum of 200 emails per fetch (even if a higher number is configured). The default is 50.":
      "Un maximum de 200 e-mails par récupération (même si un nombre supérieur est configuré). La valeur par défaut est 50.",
    "A unique identifier of the customer's Google account.":
      "Un identifiant unique du compte Google du client.",
    "Add the following variables to the GitHub actions credential store:":
      "Ajoutez les variables suivantes au magasin d'identifiants GitHub Actions :",
    "Admin Email":
      "E-mail de l'administrateur",
    "Advanced Configuration Parameters":
      "Paramètres de configuration avancée",
    "Allows you to specify the e-mail address from which to send e-mails from.":
      "Permet de spécifier l'adresse e-mail à partir de laquelle les e-mails sont envoyés.",
    "API Key was generated in 2.":
      "La clé API a été générée à l'étape 2.",
    "API to Authorize":
      "API à autoriser",
    "Application Authorization Flow":
      "Flux d'autorisation de l'application",
    "Auth Code (run the !gmail-auth-link command to start the auth flow - see Help section)":
      "Code d'authentification (exécutez la commande !gmail-auth-link pour démarrer le flux d'authentification - voir la section Aide)",
    "Auth Redirect URI":
      "URI de redirection d'authentification",
    "Authorize Application Security to access your GitHub (SaaS) account.":
      "Autorisez Application Security à accéder à votre compte GitHub (SaaS).",
    "Authorize Cortex GitHub App":
      "Autoriser Cortex GitHub App",
    "Automatically create user if not found in update and enable commands":
      "Créer automatiquement l'utilisateur s'il est introuvable dans les commandes de mise à jour et d'activation",
    "Before you begin, you'll need to add your API key and API ID to the GitHub Actions secrets.":
      "Avant de commencer, vous devez ajouter votre clé API et votre ID API aux secrets GitHub Actions.",
    "Before you begin, you'll need to add your API key and API ID to the GitHub Actions secrets. Please copy and use the variable names suggested below. If needed, you can generate a new token using the link below, copy and use the generated values as your secrets values.":
      "Avant de commencer, vous devez ajouter votre clé API et votre ID API aux secrets GitHub Actions. Copiez et utilisez les noms de variables suggérés ci-dessous. Si nécessaire, vous pouvez générer un nouveau jeton à l'aide du lien ci-dessous, puis copier et utiliser les valeurs générées comme valeurs de vos secrets.",
    "Choose GitHub App Type":
      "Choisir le type de GitHub App",
    "Click the role you want to assign (the appropriate role).":
      "Cliquez sur le rôle que vous souhaitez attribuer (le rôle approprié).",
    "Commands and its scopes":
      "Commandes et leurs portées",
    "Configure a service account and retrieve its key in JSON format by following the steps mentioned here:":
      "Configurez un compte de service et récupérez sa clé au format JSON en suivant les étapes indiquées ici :",
    "Configure a service account for Google Sheets - (per project)":
      "Configurer un compte de service pour Google Sheets - (par projet)",
    "Configure an API account on G Suite Admin":
      "Configurer un compte d'API dans G Suite Admin",
    "create a Service Account file with a Private Key and authorize the API":
      "créer un fichier de compte de service avec une clé privée et autoriser l'API",
    "Create a Fine-grained Personal Access Token":
      "Créer un Fine-grained Personal Access Token",
    "Create an API token":
      "Créer un jeton API",
    "Customer ID":
      "ID client",
    "Cxxxxxxxx is your Immutable Google Apps ID (customerId).":
      "Cxxxxxxxx est votre ID Google Apps immuable (customerId).",
    "Default reports language":
      "Langue par défaut des rapports",
    "Default Search Scope":
      "Portée de recherche par défaut",
    "Default to US (app.terraform.io)":
      "US par défaut (app.terraform.io)",
    "Email - Associate to Google Drive":
      "E-mail - Associer à Google Drive",
    "Email of user":
      "E-mail de l'utilisateur",
    "Email of user with admin capabilities":
      "E-mail de l'utilisateur disposant de capacités d'administrateur",
    "Email of user with admin privileges":
      "E-mail de l'utilisateur disposant de privilèges d'administrateur",
    "Emails":
      "E-mails",
    "Enable Google Workspace Log Collection":
      "Activer la collecte des journaux Google Workspace",
    "Enable Read-Only Tools":
      "Activer les outils en lecture seule",
    "Enabled Toolsets":
      "Jeux d'outils activés",
    "Events query (e.g. \"from:Demisto\")":
      "Requête d'événements (par exemple : \"from:Demisto\")",
    "Events query (e.g., \"from:example@demisto.com\")":
      "Requête d'événements (par exemple : \"from:example@demisto.com\")",
    "Events search query":
      "Requête de recherche d'événements",
    "Events user key":
      "Clé utilisateur des événements",
    "Events user key (e.g. example@demisto.com)":
      "Clé utilisateur des événements (par exemple : example@demisto.com)",
    "Existing Customer Owned GitHub App":
      "GitHub App existante appartenant au client",
    "First fetch timestamp, in days.":
      "Horodatage de la première récupération, en jours.",
    "Follow the steps here to create such a private key and authorize the API for usage:":
      "Suivez ces étapes pour créer une telle clé privée et autoriser l'API à l'utiliser :",
    "For detailed documentation on available toolsets, refer to:":
      "Pour obtenir une documentation détaillée sur les jeux d'outils disponibles, consultez :",
    "For the email user param, please choose a user with admin permissions and make sure that you follow the steps to perform Google Apps Domain-Wide Delegation of Authority.":
      "Pour le paramètre d'utilisateur e-mail, choisissez un utilisateur disposant d'autorisations d'administrateur et assurez-vous de suivre les étapes pour effectuer la Google Apps Domain-Wide Delegation of Authority.",
    "For the email user parameter, select a user with admin permissions and make sure that you follow the steps to perform Google Apps Domain-Wide Delegation of Authority.":
      "Pour le paramètre d'utilisateur e-mail, sélectionnez un utilisateur disposant d'autorisations d'administrateur et assurez-vous de suivre les étapes pour effectuer la Google Apps Domain-Wide Delegation of Authority.",
    "Function":
      "Fonction",
    "Go to Admin roles.":
      "Accédez à Admin roles.",
    "Google documentation":
      "documentation Google",
    "Google Sheets Integration":
      "Intégration Google Sheets",
    "Google Sheets is a spreadsheet program that is part of the free cloud-based Google Docs Editors suite offered by Google.":
      "Google Sheets est un tableur qui fait partie de la suite gratuite basée sur le cloud Google Docs Editors, proposée par Google.",
    "Google’s API Documentation":
      "Documentation de l'API Google",
    "Grant the Compute Admin permission to the Service Account to enable the Service Account to perform certain Google Cloud API commands.":
      "Accordez l'autorisation Compute Admin au compte de service afin qu'il puisse exécuter certaines commandes de l'API Google Cloud.",
    "If a non-admin user is the user for the integration’s parameter, the test button will fail on a 403 error.":
      "Si l'utilisateur du paramètre de l'intégration n'est pas administrateur, le bouton de test échouera avec une erreur 403.",
    "If no toolsets are selected, GitHub's default toolsets 'context', 'repos', 'issues', 'pull_requests', and 'users' will be enabled.":
      "Si aucun jeu d'outils n'est sélectionné, les jeux d'outils par défaut de GitHub 'context', 'repos', 'issues', 'pull_requests' et 'users' seront activés.",
    "Immutable Google Apps ID":
      "ID Google Apps immuable",
    "In Cortex, configure an instance of the Google Cloud Compute integration. For the Service Account Private Key parameter, add the Service Account Private Key file contents (JSON).":
      "Dans Cortex, configurez une instance de l'intégration Google Cloud Compute. Pour le paramètre Service Account Private Key, ajoutez le contenu (JSON) du fichier de clé privée du compte de service.",
    "In order to fetch user roles, please authrize this api too:":
      "Pour récupérer les rôles des utilisateurs, autorisez également cette API :",
    "In order to revoke user roles, please authrize this api too:":
      "Pour révoquer les rôles des utilisateurs, autorisez également cette API :",
    "In order to revoke/fetch user role, you will need the Immutable Google Apps ID param.":
      "Pour révoquer ou récupérer les rôles des utilisateurs, vous aurez besoin du paramètre Immutable Google Apps ID.",
    "In order to search user mailboxes, please authrize this api too:":
      "Pour rechercher dans les boîtes aux lettres des utilisateurs, autorisez également cette API :",
    "In order to to fetch mobile info, please authrize this api too:":
      "Pour récupérer les informations sur les appareils mobiles, autorisez également cette API :",
    "In order to to fetch user security tokens, please authrize this api too:":
      "Pour récupérer les jetons de sécurité des utilisateurs, autorisez également cette API :",
    "In order to to preform actions on chorme devices, please authrize this api too:":
      "Pour effectuer des actions sur les appareils Chrome, autorisez également cette API :",
    "In order to to preform actions on mobile devices, please authrize this api too:":
      "Pour effectuer des actions sur les appareils mobiles, autorisez également cette API :",
    "It is necessary to authrize the next API’s for that service account:":
      "Il est nécessaire d'autoriser les API suivantes pour ce compte de service :",
    "Mailbox actions do not require admin previleges.":
      "Les actions sur les boîtes aux lettres ne nécessitent pas de privilèges d'administrateur.",
    "Maximum number of emails to pull per fetch":
      "Nombre maximal d'e-mails à extraire par récupération",
    "Must be a valid URL":
      "Doit être une URL valide",
    "Navigate to Profile and click Generate auth token.":
      "Accédez à Profile et cliquez sur Generate auth token.",
    "Open THF Huntbox web interface. (It may be like https://huntbox.group-ib.com)":
      "Ouvrez l'interface web de THF Huntbox (elle peut ressembler à https://huntbox.group-ib.com).",
    "Organization domain URL":
      "URL du domaine de l'organisation",
    "Please follow the documentation below for step by step guide on how to onboard your GitLab instance":
      "Suivez la documentation ci-dessous pour obtenir un guide pas à pas sur l'intégration de votre instance GitLab",
    "Precedence of this will be admin_email in the command argument > admin email in the integration configuration > admin role provided to the service account.":
      "L'ordre de priorité est le suivant : admin_email dans l'argument de la commande > e-mail de l'administrateur dans la configuration de l'intégration > rôle d'administrateur attribué au compte de service.",
    "Provide at least one of the scopes mentioned for each command.":
      "Fournissez au moins une des portées mentionnées pour chaque commande.",
    "Raise error an empty result":
      "Générer une erreur en cas de résultat vide",
    "Register":
      "Enregistrer",
    "Review the requested permissions and select repository access for Application Security:":
      "Passez en revue les autorisations demandées et sélectionnez l'accès aux dépôts pour Application Security :",
    "Revoke/Fetch User Roles":
      "Révoquer/récupérer les rôles des utilisateurs",
    "See the Help tab for details on the Immutable Google Apps ID.":
      "Consultez l'onglet Aide pour plus de détails sur l'Immutable Google Apps ID.",
    "Select a GitHub organization where you want to install Application Security.":
      "Sélectionnez une organisation GitHub dans laquelle vous souhaitez installer Application Security.",
    "Select Organization":
      "Sélectionner l'organisation",
    "Select Workspaces":
      "Sélectionner les espaces de travail",
    "Send as":
      "Envoyer en tant que",
    "Server URL (e.g., https://huntbox.group-ib.com)":
      "URL du serveur (par exemple : https://huntbox.group-ib.com)",
    "Service Account Key":
      "Clé du compte de service",
    "Service account private key file contents (JSON)":
      "Contenu du fichier de clé privée du compte de service (JSON)",
    "Service Account Private Key file contents (JSON)":
      "Contenu du fichier de clé privée du compte de service (JSON)",
    "Terraform Region":
      "Région Terraform",
    "the Integration Documentation":
      "documentation de l'intégration",
    "The Personal Access Token is used to authenticate requests to the GitLab REST API. It must have the required permissions to access your organization's configuration.":
      "Le Personal Access Token est utilisé pour authentifier les requêtes adressées à l'API REST de GitLab. Il doit disposer des autorisations nécessaires pour accéder à la configuration de votre organisation.",
    "The required admin permissions are only used for user actions (i.e., creating users, getting user informations, deleting users):":
      "Les autorisations d'administrateur requises ne sont utilisées que pour les actions sur les utilisateurs (c'est-à-dire créer des utilisateurs, obtenir des informations sur les utilisateurs et supprimer des utilisateurs) :",
    "The scope for this API":
      "La portée de cette API",
    "There you will see URLs in the format:":
      "Vous y verrez des URL au format suivant :",
    "This section explains how to configure the instance of Polygon in Cortex.":
      "Cette section explique comment configurer l'instance de Polygon dans Cortex.",
    "To allow Cortex to access Gmail, you will need to create an OAuth2 App and approve the authorization flow. Please see the full documentation at:":
      "Pour autoriser Cortex à accéder à Gmail, vous devez créer une application OAuth2 et approuver le flux d'autorisation. Consultez la documentation complète à l'adresse suivante :",
    "To create a new token:":
      "Pour créer un nouveau jeton :",
    "To get an Immutable Google Apps ID (or customerId):":
      "Pour obtenir un Immutable Google Apps ID (ou customerId) :",
    "Token":
      "Jeton",
    "Transporter Connection":
      "Connexion du transporteur",
    "Use the Google Maps Geocoding API.":
      "Utilise l'API Google Maps Geocoding.",
    "Use this integration to create, get, modify, and format spreadsheets.":
      "Utilisez cette intégration pour créer, obtenir, modifier et mettre en forme des feuilles de calcul.",
    "Use this to specify the email account to search for messages with the search query. By default, the integration uses the email address specified in the credentials.":
      "Utilisez ceci pour spécifier le compte e-mail dans lequel rechercher des messages avec la requête de recherche. Par défaut, l'intégration utilise l'adresse e-mail indiquée dans les identifiants.",
    "Used for searching emails in the inbox. The query language follows the Gmail query specification. For example, \"from:example@demisto.com is:unread\".":
      "Utilisé pour rechercher des e-mails dans la boîte de réception. Le langage de requête suit la spécification des requêtes Gmail. Par exemple, \"from:example@demisto.com is:unread\".",
    "User or Team Token":
      "Jeton utilisateur ou d'équipe",
    "user settings":
      "paramètres utilisateur",
    "User's Service Account JSON":
      "JSON du compte de service de l'utilisateur",
    "When enabled, limits tools to read-only operations preventing any write/modification actions.":
      "Lorsque cette option est activée, les outils sont limités aux opérations en lecture seule, ce qui empêche toute action d'écriture ou de modification.",
    "You must be signed in as a super administrator for this task.":
      "Vous devez être connecté en tant que super-administrateur pour cette tâche.",
    "You will see there URLs in the format:":
      "Vous y verrez des URL au format suivant :",
    "Your private GitLab instance URL. For example, https://gitlab.example.com.":
      "L'URL de votre instance GitLab privée. Par exemple, https://gitlab.example.com.",
    "Your server URL is the same as your Huntbox web interface URL.":
      "L'URL de votre serveur est identique à l'URL de l'interface web de Huntbox.",

    // --- Batch: Integration docs, parameter labels and tooltips for many integrations (12:04 export) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    "(default) — Auto-detect based on the platform.":
      "(par défaut) — Détection automatique selon la plateforme.",
    "(e.g., https://192.168.0.1)":
      "(par exemple, https://192.168.0.1)",
    "(For Cortex) For use with HTTPS - the certificate that the service should use. (For Cortex and Cortex XSIAM) Custom certificates are supported only using engine.":
      "(Pour Cortex) À utiliser avec HTTPS : le certificat que le service doit utiliser. (Pour Cortex et Cortex XSIAM) Les certificats personnalisés ne sont pris en charge qu'avec un moteur.",
    "(For Cortex) For use with HTTPS - the private key that the service should use. (For Cortex and Cortex XSIAM) When using an engine, configure a private API key. Not supported on the Cortex or Cortex XSIAM server.":
      "(Pour Cortex) À utiliser avec HTTPS : la clé privée que le service doit utiliser. (Pour Cortex et Cortex XSIAM) Si vous utilisez un moteur, configurez une clé API privée. Non pris en charge sur le serveur Cortex ou Cortex XSIAM.",
    "(for runtime scanning operations only)":
      "(uniquement pour les opérations d'analyse d'exécution)",
    "(if not already enabled)":
      "(si ce n'est pas déjà activé)",
    "(OAuth2 credentials for the management API)":
      "(identifiants OAuth2 pour l'API de gestion)",
    "(optional) Configure a classifier and a mapper":
      "(facultatif) Configurez un classificateur et un mappeur",
    "(Optional) Create custom fields.":
      "(Facultatif) Créez des champs personnalisés.",
    "2FA Token":
      "Jeton 2FA",
    "A comma-separated list of Application IDs. Run the ***saas-security-get-apps*** command to return the **Application ID**, **Name**, and **Type** for all applications.":
      "Liste d'ID d'application séparés par des virgules. Exécutez la commande ***saas-security-get-apps*** pour obtenir l'**Application ID**, le **Name** et le **Type** de toutes les applications.",
    "A comma-separated list of ciphers to use. If none of the specified ciphers are agreed to by the server, an error message specifying the supported ciphers is returned.":
      "Liste de chiffrements à utiliser, séparés par des virgules. Si le serveur n'accepte aucun des chiffrements spécifiés, un message d'erreur indiquant les chiffrements pris en charge est renvoyé.",
    "A comma-separated list of data profile names to request an exemption. Use \"*\" to allow everything.":
      "Liste de noms de profils de données, séparés par des virgules, pour lesquels demander une exemption. Utilisez \"*\" pour tout autoriser.",
    "A comma-separated list of incident types to fetch from iZOOlogic.":
      "Liste de types d'incidents, séparés par des virgules, à récupérer depuis iZOOlogic.",
    "A comma-separated list of key algorithms to use. If none of the specified key algorithms are agreed to by the server, an error message specifying the supported key algorithms is returned.":
      "Liste d'algorithmes de clé à utiliser, séparés par des virgules. Si le serveur n'accepte aucun des algorithmes de clé spécifiés, un message d'erreur indiquant les algorithmes de clé pris en charge est renvoyé.",
    "A comma-separated list of Splunk status labels to mirror as closed Cortex incident (Example: Resolved,False-Positive).":
      "Liste d'étiquettes d'état Splunk, séparées par des virgules, à mettre en miroir comme incident Cortex fermé (exemple : Resolved,False-Positive).",
    "A command fails with a quota or payment error.":
      "Une commande échoue avec une erreur de quota ou de paiement.",
    "A command returns “no known finding” for an indicator you expect to be flagged.":
      "Une commande renvoie « no known finding » pour un indicateur qui devrait être signalé.",
    "A CSV list of broker URLs in the format: [ssl://]<hostname>[:port]) Get the hostname and port from the `brokerlist.properties` file (in instructions). The broker should be reachable from Demisto server.":
      "Liste CSV d'URL de brokers au format : [ssl://]<hostname>[:port]). Obtenez le nom d'hôte et le port à partir du fichier `brokerlist.properties` (dans les instructions). Le broker doit être joignable depuis le serveur Demisto.",
    "A CSV of language codes of the language to use for OCR (leave empty to use defaults).":
      "CSV de codes de langue à utiliser pour l'OCR (laissez vide pour utiliser les valeurs par défaut).",
    "A space-separated list of scopes that you want to consent to.":
      "Liste de périmètres (scopes), séparés par des espaces, que vous souhaitez accepter.",
    "A Tenzai license is required to use this integration.":
      "Une licence Tenzai est requise pour utiliser cette intégration.",
    "A valid Magnet Automate instance.":
      "Une instance Magnet Automate valide.",
    "About team member product roles and access":
      "À propos des rôles produit et de l'accès des membres de l'équipe",
    "Access ID - can be created in Sumo Logic under \"Settings\"":
      "ID d'accès : peut être créé dans Sumo Logic sous \"Settings\"",
    "Access key - can be created in Sumo Logic under \"Settings\"":
      "Clé d'accès : peut être créée dans Sumo Logic sous \"Settings\"",
    "Access the Panorama UI.":
      "Accédez à l'interface utilisateur de Panorama.",
    "Access to Threatmon’s external API endpoints.":
      "Accès aux points de terminaison d'API externes de Threatmon.",
    "Access tokens are cached in the integration context and automatically refreshed when they expire.":
      "Les jetons d'accès sont mis en cache dans le contexte de l'intégration et sont automatiquement actualisés à leur expiration.",
    "Access Your API Key":
      "Accès à votre clé API",
    "Access Your Kenna API Key":
      "Accès à votre clé API Kenna",
    "Access your VMRay environment.":
      "Accédez à votre environnement VMRay.",
    "Account ID (OAuth)":
      "ID de compte (OAuth)",
    "Account identifier":
      "Identifiant de compte",
    "Add a incident name to be used for the created incident (if a mapper is not used)":
      "Ajoutez un nom d'incident à utiliser pour l'incident créé (si un mappeur n'est pas utilisé)",
    "Add an instance of the integration and add the Workflow URL for the Teams channel.":
      "Ajoutez une instance de l'intégration et ajoutez l'URL Workflow du canal Teams.",
    "Add and map the custom field to the necessary mapper(s).":
      "Ajoutez le champ personnalisé et mappez-le aux mappeurs nécessaires.",
    "Add Custom Indicator Fields":
      "Ajouter des champs d'indicateur personnalisés",
    "Add or create a service account with the proper privileges.":
      "Ajoutez ou créez un compte de service disposant des privilèges appropriés.",
    "Add or remove Chrome options used to rasterize. Use for advanced troubleshooting. See Help.":
      "Ajoutez ou supprimez les options Chrome utilisées pour la rastérisation. À utiliser pour le dépannage avancé. Consultez l'aide.",
    "Add relevant scopes.":
      "Ajoutez les périmètres (scopes) pertinents.",
    "Add the Demisto Bot to a Team":
      "Ajoutez le Demisto Bot à une équipe",
    "Add the integration instance in Cortex":
      "Ajoutez l'instance d'intégration dans Cortex",
    "Add this tag to an entry to mirror it as a comment from Splunk.":
      "Ajoutez cette balise à une entrée pour la mettre en miroir en tant que commentaire depuis Splunk.",
    "Add this tag to an entry to mirror it as a comment to Splunk.":
      "Ajoutez cette balise à une entrée pour la mettre en miroir en tant que commentaire vers Splunk.",
    "Additional connection parameters":
      "Paramètres de connexion supplémentaires",
    "Additional malicious verdicts":
      "Verdicts malveillants supplémentaires",
    "Additional Password":
      "Mot de passe supplémentaire",
    "Additional Resources":
      "Ressources supplémentaires",
    "Additional Splunk status labels to close on mirror (Incoming Mirroring)":
      "Étiquettes d'état Splunk supplémentaires à fermer lors de la mise en miroir (mise en miroir entrante)",
    "Address Type":
      "Type d'adresse",
    "After adding the Cortex app, you will get an Access Token and Bot Token, which should be inserted in the integration instance configuration’s corresponding fields.":
      "Après avoir ajouté l'application Cortex, vous obtiendrez un jeton d'accès et un jeton de bot, à saisir dans les champs correspondants de la configuration de l'instance d'intégration.",
    "After authorizing the Cortex app, you will get an ID, Token, and Key which need to be added to the relevant integration instance settings fields.":
      "Après avoir autorisé l'application Cortex, vous obtiendrez un ID, un jeton et une clé à ajouter dans les champs correspondants des paramètres de l'instance d'intégration.",
    "After authorizing the Cortex app, you will get an ID, Token, and Key which should be inserted in the relevant integration instance settings fields.":
      "Après avoir autorisé l'application Cortex, vous obtiendrez un ID, un jeton et une clé à saisir dans les champs correspondants des paramètres de l'instance d'intégration.",
    "After you configure an integration instance, the first fetch will sychronize all Workday users (employees) in XSOAR by creating a User Profile indicator for each employee. The User Profile indicators store all employee profiles data, such as the employee’s name, street address, phone number, email address, etc.":
      "Après la configuration d'une instance d'intégration, la première récupération synchronisera tous les utilisateurs (employés) Workday dans XSOAR en créant un indicateur User Profile pour chaque employé. Les indicateurs User Profile stockent toutes les données de profil de l'employé, telles que son nom, son adresse postale, son numéro de téléphone, son adresse e-mail, etc.",
    "After you successfully execute a command, a DBot message appears in the War Room with the command details.":
      "Après l'exécution réussie d'une commande, un message DBot apparaît dans la War Room avec les détails de la commande.",
    "AIOps integration":
      "Intégration AIOps",
    "Algorithm to sign generated JWT tokens with. Doesn't affect integration's functionality. Required and used if OAuth 2.0 is used for authentication. See detailed instructions on the 'Help' tab.":
      "Algorithme avec lequel signer les jetons JWT générés. N'affecte pas le fonctionnement de l'intégration. Obligatoire et utilisé si OAuth 2.0 est employé pour l'authentification. Consultez les instructions détaillées dans l'onglet 'Help'.",
    "An administrator must have a role that includes access to a specific REST API.":
      "Un administrateur doit disposer d'un rôle incluant l'accès à une API REST spécifique.",
    "An API key generated from the Magnet Automate interface.":
      "Une clé API générée depuis l'interface Magnet Automate.",
    "Analyze files and URLs using the SecneurX Analysis for accurate threat intelligence and high-quality IOCs.":
      "Analysez des fichiers et des URL avec SecneurX Analysis pour obtenir des renseignements précis sur les menaces et des IOC de haute qualité.",
    "Analyze retro hunts, read live hunt notification,s and download files from VirusTotal.":
      "Analysez les retro hunts, lisez les notifications de live hunt et téléchargez des fichiers depuis VirusTotal.",
    "Another point to note is that Splunk’s searches are based on the occurrence time behind the scenes. Meaning, Splunk itself uses occurrence time as its determining factor for bucket division and search.":
      "Autre point à noter : les recherches de Splunk reposent en interne sur l'heure d'occurrence. Autrement dit, Splunk utilise lui-même l'heure d'occurrence comme facteur déterminant pour la division en buckets et la recherche.",
    "Any tags removed from the Vectra entity will not be removed in the XSOAR incident, as XSOAR doesn’t allow the removal of the tags field via the backend. However, tags removed from the XSOAR incident UI will be removed from the Vectra entity.":
      "Les balises supprimées de l'entité Vectra ne seront pas supprimées de l'incident XSOAR, car XSOAR n'autorise pas la suppression du champ des balises via le backend. En revanche, les balises supprimées depuis l'interface de l'incident XSOAR seront supprimées de l'entité Vectra.",
    "API 1.0 Authentication":
      "Authentification API 1.0",
    "API 2.0 Authentication":
      "Authentification API 2.0",
    "API Access":
      "Accès à l'API",
    "API Client ID and API Client Secret":
      "ID client API et secret client API",
    "API connection":
      "Connexion API",
    "API Host":
      "Hôte API",
    "API Key (CB Defense)":
      "Clé API (CB Defense)",
    "API Key (Deprecated)":
      "Clé API (obsolète)",
    "API Key (JWT-Deprecated)":
      "Clé API (JWT-obsolète)",
    "API Key (Recommended)":
      "Clé API (recommandée)",
    "API key and API token are generate by Lastline and given at the subscription time.":
      "La clé API et le jeton API sont générés par Lastline et fournis au moment de l'abonnement.",
    "API Key Auth":
      "Authentification par clé API",
    "API Key Auth (http_api_key)":
      "Authentification par clé API (http_api_key)",
    "API Key for accessing Lastline APIs":
      "Clé API pour accéder aux API Lastline",
    "API Key Secret":
      "Secret de la clé API",
    "API Key Type":
      "Type de clé API",
    "API Permissions in Microsoft Graph":
      "Autorisations d'API dans Microsoft Graph",
    "API Port":
      "Port API",
    "API Port (e.g 443)":
      "Port API (par exemple, 443)",
    "API Secret (JWT-Deprecated)":
      "Secret API (JWT-obsolète)",
    "API Token (CB Response)":
      "Jeton API (CB Response)",
    "API Token (see detailed instructions)":
      "Jeton API (consultez les instructions détaillées)",
    "API Token (see Detailed Instructions)":
      "Jeton API (consultez les instructions détaillées)",
    "API Token for accessing Lastline APIs":
      "Jeton API pour accéder aux API Lastline",
    "API tokens have the same permissions as the user who creates them, and if the permissions of a user change, so do the permissions of the API token.":
      "Les jetons API disposent des mêmes autorisations que l'utilisateur qui les crée ; si les autorisations d'un utilisateur changent, celles du jeton API changent également.",
    "API version of QRadar (e.g., '12.0'). Minimum API version is 10.1. Since QRadar API v19, The timestamp fields should be provided as milliseconds epoch format instead of seconds.":
      "Version de l'API de QRadar (par exemple, '12.0'). La version minimale de l'API est 10.1. Depuis l'API v19 de QRadar, les champs d'horodatage doivent être fournis au format epoch en millisecondes plutôt qu'en secondes.",
    "App ID":
      "ID de l'application",
    "App Token":
      "Jeton d'application",
    "App-only authentication":
      "Authentification d'application uniquement",
    "Application ID / Client ID":
      "ID d'application / ID client",
    "Application ID or Client ID":
      "ID d'application ou ID client",
    "Application redirect URI":
      "URI de redirection de l'application",
    "Application Redirect URI":
      "URI de redirection de l'application",
    "Application redirect URI (for authorization code mode)":
      "URI de redirection de l'application (pour le mode code d'autorisation)",
    "Application redirect URI (for Authorization Code mode)":
      "URI de redirection de l'application (pour le mode code d'autorisation)",
    "Application redirect URI (required for self-deployed Azure app)":
      "URI de redirection de l'application (obligatoire pour une application Azure auto-déployée)",
    "Application Secret (Required for using Self Deployed Azure app)":
      "Secret de l'application (obligatoire pour utiliser une application Azure auto-déployée)",
    "Argument Name":
      "Nom de l'argument",
    "As an alternative to Okta API tokens, you can interact with Okta APIs using scoped OAuth 2.0 access tokens for a number of Okta endpoints.":
      "Au lieu des jetons API Okta, vous pouvez interagir avec les API Okta à l'aide de jetons d'accès OAuth 2.0 limités à un périmètre pour plusieurs points de terminaison Okta.",
    "As soon as the instance is set-up, the first pull will get the alarms generated in the last 10 minutes. After that, new alarms will be fetched every other minute, starting the last pull index.":
      "Dès que l'instance est configurée, la première extraction récupère les alarmes générées au cours des 10 dernières minutes. Ensuite, les nouvelles alarmes sont récupérées toutes les deux minutes, à partir du dernier index d'extraction.",
    "As the enrichment process is asynchronous, fetching enriched incidents takes longer. The integration was tested with 20+ notables simultaneously that were fetched and enriched after approximately ~4min.":
      "Le processus d'enrichissement étant asynchrone, la récupération des incidents enrichis prend plus de temps. L'intégration a été testée avec plus de 20 notables récupérés et enrichis simultanément, ce qui a pris environ 4 minutes.",
    "Asset enrichment lookup tables":
      "Tables de correspondance d'enrichissement des actifs",
    "Asset search enrichment":
      "Enrichissement de la recherche d'actifs",
    "Assign Prisma AIRS AI Red Teaming API permissions":
      "Attribuez les autorisations de l'API Prisma AIRS AI Red Teaming",
    "Assign Prisma AIRS AI Runtime Security API permissions":
      "Attribuez les autorisations de l'API Prisma AIRS AI Runtime Security",
    "Assign Prisma AIRS AI Supply Chain Security API permissions":
      "Attribuez les autorisations de l'API Prisma AIRS AI Supply Chain Security",
    "Audit log type filter":
      "Filtre de type de journal d'audit",
    "Authenticate using an API-Key":
      "Authentification à l'aide d'une clé API",
    "Authentication Configuration":
      "Configuration de l'authentification",
    "Authentication Flow":
      "Flux d'authentification",
    "Authentication URL":
      "URL d'authentification",
    "Authentication using API Token":
      "Authentification à l'aide d'un jeton API",
    "Authentication using Azure Managed Identities":
      "Authentification à l'aide des identités managées Azure",
    "Authentication using OAuth 2.0 Authentication":
      "Authentification à l'aide de l'authentification OAuth 2.0",
    "Authentication Using the Authorization Code Flow (Delegated Permissions)":
      "Authentification à l'aide du flux de code d'autorisation (autorisations déléguées)",
    "Authentication Using the Client Credentials Flow (Application Permissions)":
      "Authentification à l'aide du flux d'informations d'identification du client (autorisations d'application)",
    "Authentication Using the User - Authorization Code Flow":
      "Authentification à l'aide de l'utilisateur : flux de code d'autorisation",
    "Authorization code (for self-deployed mode)":
      "Code d'autorisation (pour le mode auto-déployé)",
    "Authorization code (required for self-deployed Azure app)":
      "Code d'autorisation (obligatoire pour une application Azure auto-déployée)",
    "Authorization code (run msgraph-generate-login-url command)":
      "Code d'autorisation (exécutez la commande msgraph-generate-login-url)",
    "Authorization Code flow (Delegated Permissions)":
      "Flux de code d'autorisation (autorisations déléguées)",
    "Authorization code on behalf of a user, used with self deployed Azure Applications.":
      "Code d'autorisation au nom d'un utilisateur, utilisé avec les applications Azure auto-déployées.",
    "Authorize Cortex for Entra ID Users (Self deployed Azure App)":
      "Autoriser Cortex pour les utilisateurs Entra ID (application Azure auto-déployée)",
    "Auto Activate Changes":
      "Activer automatiquement les modifications",
    "Auto Logout":
      "Déconnexion automatique",
    "Automatically fetch and ingest Threatmon alarms as XSOAR incidents.":
      "Récupérez et ingérez automatiquement les alarmes Threatmon en tant qu'incidents XSOAR.",
    "Available integrations":
      "Intégrations disponibles",
    "Base Command":
      "Commande de base",
    "Base url to Shodan API":
      "URL de base de l'API Shodan",
    "Based on what data needs to be pulled in through the integration, update the Domain Security Policy Permissions as well as Business Process Security Policy Permissions.":
      "Selon les données à extraire via l'intégration, mettez à jour les autorisations de la politique de sécurité de domaine ainsi que celles de la politique de sécurité des processus métier.",
    "Basic Auth":
      "Authentification de base",
    "Basic Auth (http)":
      "Authentification de base (http)",
    "Basic authentication - Fill in the email and password.":
      "Authentification de base : renseignez l'adresse e-mail et le mot de passe.",
    "Basic authentication - Fill in the Email and password.":
      "Authentification de base : renseignez l'adresse e-mail et le mot de passe.",
    "Basic authentication - Fill in the User Principal Name (UPN) and password.":
      "Authentification de base : renseignez le nom d'utilisateur principal (UPN) et le mot de passe.",
    "Basic authorization using username and password.":
      "Autorisation de base à l'aide d'un nom d'utilisateur et d'un mot de passe.",
    "Bearer Auth":
      "Authentification Bearer",
    "Bearer Auth (http)":
      "Authentification Bearer (http)",
    "Before creating an API client, ensure that you create an API role with all the required privileges as mentioned in the integration documentation. Then, associate the API client with that role.":
      "Avant de créer un client API, veillez à créer un rôle API disposant de tous les privilèges requis mentionnés dans la documentation de l'intégration. Associez ensuite le client API à ce rôle.",
    "Before you configure the integration, retrieve the API key from your Joe Security environment.":
      "Avant de configurer l'intégration, récupérez la clé API depuis votre environnement Joe Security.",
    "BloodHound Enterprise Domain":
      "Domaine BloodHound Enterprise",
    "BloodHound Enterprise Domain (for example, https://example.bloodhoundenterprise.io)":
      "Domaine BloodHound Enterprise (par exemple, https://example.bloodhoundenterprise.io)",
    "BloodHound Enterprise Domain URL":
      "URL du domaine BloodHound Enterprise",
    "BloodHound Enterprise reduces risk in Active Directory and Microsoft Azure environments by continuously identifying and quantifying attack paths that attackers use to escalate privileges. The SpecterOps BloodHound Enterprise integration enables automated retrieval of attack path findings from BloodHound into Cortex, streamlining incident creation and investigation.":
      "BloodHound Enterprise réduit les risques dans les environnements Active Directory et Microsoft Azure en identifiant et en quantifiant en continu les chemins d'attaque que les attaquants utilisent pour élever leurs privilèges. L'intégration SpecterOps BloodHound Enterprise permet de récupérer automatiquement les résultats de chemins d'attaque depuis BloodHound dans Cortex, ce qui simplifie la création et l'investigation des incidents.",
    "Bot Client ID":
      "ID client du bot",
    "Bot Client ID ((Team Chat App))":
      "ID client du bot ((Team Chat App))",
    "Bot Client Secret (Team Chat App)":
      "Secret client du bot (Team Chat App)",
    "Bot display name in Slack":
      "Nom d'affichage du bot dans Slack",
    "Bot display name in Slack (Cortex by default)":
      "Nom d'affichage du bot dans Slack (Cortex par défaut)",
    "Bot icon in Slack - Image URL (Cortex icon by default)":
      "Icône du bot dans Slack - URL de l'image (icône Cortex par défaut)",
    "Bot ID":
      "ID du bot",
    "Bot Message":
      "Message du bot",
    "Bot Password":
      "Mot de passe du bot",
    "Bot Secret ID":
      "ID secret du bot",
    "Bot Token":
      "Jeton du bot",
    "Build a playbook and assign it as the default for this incident type.":
      "Créez un playbook et affectez-le comme playbook par défaut pour ce type d'incident.",
    "Build a query to return relevant alerts.":
      "Créez une requête pour renvoyer les alertes pertinentes.",
    "By clicking \"Authorize\", you hereby authorize Palo Alto Networks to (i) ingest data and perform actions such as suppression on behalf of you to and from Semgrep's public API, and (ii) further process such data to deliver our services to you. You confirm that you have the right to provide such authorization.":
      "En cliquant sur « Autoriser », vous autorisez par la présente Palo Alto Networks à (i) ingérer des données et effectuer des actions, telles que la suppression, en votre nom vers et depuis l'API publique de Semgrep, et (ii) traiter ensuite ces données afin de vous fournir nos services. Vous confirmez que vous avez le droit de donner cette autorisation.",
    "By clicking \"Authorize\", you hereby authorize Palo Alto Networks to (i) ingest data and perform actions such as suppression on behalf of you to and from Snyk's public API, and (ii) further process such data to deliver our services to you. You confirm that you have the right to provide such authorization.":
      "En cliquant sur « Autoriser », vous autorisez par la présente Palo Alto Networks à (i) ingérer des données et effectuer des actions, telles que la suppression, en votre nom vers et depuis l'API publique de Snyk, et (ii) traiter ensuite ces données afin de vous fournir nos services. Vous confirmez que vous avez le droit de donner cette autorisation.",
    "By clicking \"Authorize\", you hereby authorize Palo Alto Networks to (i) ingest data and perform actions such as suppression on behalf of you to and from SonarQube's public API, and (ii) further process such data to deliver our services to you. You confirm that you have the right to provide such authorization.":
      "En cliquant sur « Autoriser », vous autorisez par la présente Palo Alto Networks à (i) ingérer des données et effectuer des actions, telles que la suppression, en votre nom vers et depuis l'API publique de SonarQube, et (ii) traiter ensuite ces données afin de vous fournir nos services. Vous confirmez que vous avez le droit de donner cette autorisation.",
    "By clicking \"Authorize\", you hereby authorize Palo Alto Networks to (i) ingest data and perform actions such as suppression on behalf of you to and from Veracode's public API, and (ii) further process such data to deliver our services to you. You confirm that you have the right to provide such authorization.":
      "En cliquant sur « Autoriser », vous autorisez par la présente Palo Alto Networks à (i) ingérer des données et effectuer des actions, telles que la suppression, en votre nom vers et depuis l'API publique de Veracode, et (ii) traiter ensuite ces données afin de vous fournir nos services. Vous confirmez que vous avez le droit de donner cette autorisation.",
    "By default, SSL verification is enabled. If selected, the connection isn’t secure and all requests return an SSL error because the certificate cannot be verified.":
      "Par défaut, la vérification SSL est activée. Si cette option est sélectionnée, la connexion n'est pas sécurisée et toutes les requêtes renvoient une erreur SSL, car le certificat ne peut pas être vérifié.",
    "By default, the integration fetches incidents in an open state.":
      "Par défaut, l'intégration récupère les incidents à l'état ouvert.",
    "By default, the Kafka instance uses a non SSL connection. Turnning on the insecure flag, or providing any certificate will switch to SSL connection.":
      "Par défaut, l'instance Kafka utilise une connexion non SSL. L'activation de l'indicateur insecure ou la fourniture d'un certificat quelconque bascule vers une connexion SSL.",
    "CA certificate of Kafka server (type pem)":
      "Certificat d'autorité de certification du serveur Kafka (type pem)",
    "Certificate (Required for HTTPS)":
      "Certificat (obligatoire pour HTTPS)",
    "Certificate Password":
      "Mot de passe du certificat",
    "Certificate Thumbprint (can be used instead of Client Secret)":
      "Empreinte du certificat (peut être utilisée à la place de Client Secret)",
    "Certificate Thumbprint (optional for self-deployed Azure app)":
      "Empreinte du certificat (facultative pour une application Azure auto-déployée)",
    "Chat and channel monitoring, data security scanning, and security posture for Teams":
      "Surveillance des chats et des canaux, analyse de la sécurité des données et posture de sécurité pour Teams",
    "Check “Fetches-incidents” radio button":
      "Sélectionnez le bouton radio « Fetches-incidents »",
    "Check this box to use OAuth 2.0 authentication. See (?) for more information.":
      "Cochez cette case pour utiliser l'authentification OAuth 2.0. Pour plus d'informations, reportez-vous à (?).",
    "Check Trust any certificate (not secure) checkbox":
      "Cochez la case Faire confiance à tous les certificats (non sécurisé)",
    "Choose a device group name.":
      "Choisissez un nom de groupe d'appareils.",
    "Choose if to check “Fetch Existing Alerts” and/or “Also Fetch Informational Alerts” checkboxes":
      "Choisissez de cocher ou non les cases « Fetch Existing Alerts » et/ou « Also Fetch Informational Alerts »",
    "Choose max fetch (up to 200)":
      "Choisissez le nombre maximal de récupérations (jusqu'à 200)",
    "Choose Orca Alert - Classification as your classifier":
      "Choisissez Orca Alert - Classification comme classificateur",
    "Choose Orca Mapper as your mapper":
      "Choisissez Orca Mapper comme mappeur",
    "Choose which Microsoft 365 services to connect. Each service maps to specific Microsoft Graph API permissions.":
      "Choisissez les services Microsoft 365 à connecter. Chaque service correspond à des autorisations Microsoft Graph API spécifiques.",
    "Choose your API version":
      "Choisissez votre version d'API",
    "Chrome options (Advanced. See [?])":
      "Options de Chrome (avancé ; voir [?])",
    "Classification description (only human readable)":
      "Description de la classification (lisible par l'humain uniquement)",
    "Classification long name":
      "Nom long de la classification",
    "Classifiers and Mappers":
      "Classificateurs et mappeurs",
    "Clear the “Query only application events configured in IAM Configuration” checkbox to use a custom fetch query filter expression. The expression must be in SCIM syntax, and include the add and remove event types, as well as the application ID.":
      "Décochez la case « Query only application events configured in IAM Configuration » pour utiliser une expression de filtre de requête de récupération personnalisée. L'expression doit être en syntaxe SCIM et inclure les types d'événements d'ajout et de suppression, ainsi que l'ID de l'application.",
    "Click “Test” button to make sure Api Key is valid and then click the “Done” button":
      "Cliquez sur le bouton « Test » pour vérifier que la clé API est valide, puis cliquez sur le bouton « Done »",
    "Click “Test” to validate the connection.":
      "Cliquez sur « Test » pour valider la connexion.",
    "Click the data from the Splunk fields to map it to Cortex.":
      "Cliquez sur les données des champs Splunk pour les mapper à Cortex.",
    "Click the fetched data.":
      "Cliquez sur les données récupérées.",
    "Click the username in the upper-right corner.":
      "Cliquez sur le nom d'utilisateur dans le coin supérieur droit.",
    "Click your classifier.":
      "Cliquez sur votre classificateur.",
    "Click your mapper.":
      "Cliquez sur votre mappeur.",
    "Client authentication":
      "Authentification du client",
    "Client certificate (‘client.crt’ file)":
      "Certificat client (fichier 'client.crt')",
    "Client certificate (type pem)":
      "Certificat client (type pem)",
    "Client certificate key (type pem)":
      "Clé du certificat client (type pem)",
    "Client certificates":
      "Certificats client",
    "Client certificates content (see `client.crt` in Integration Tips)":
      "Contenu des certificats client (voir `client.crt` dans Conseils sur l'intégration)",
    "Client credentials":
      "Informations d'identification du client",
    "Client Credentials":
      "Informations d'identification du client",
    "Client GUID":
      "GUID du client",
    "Client Id (for OAuth 2.0)":
      "ID client (pour OAuth 2.0)",
    "Client ID (OAuth)":
      "ID client (OAuth)",
    "Client ID and Client Secret":
      "ID client et secret client",
    "Client Id for OAuth 2.0":
      "ID client pour OAuth 2.0",
    "Client ID/JWT Audience (aud)":
      "ID client/audience JWT (aud)",
    "Client Name":
      "Nom du client",
    "Client private key":
      "Clé privée du client",
    "Client private key (‘client.key’ file)":
      "Clé privée du client (fichier 'client.key')",
    "Client private key content (e.g. `client.key`)":
      "Contenu de la clé privée du client (par exemple, `client.key`)",
    "Client Secret (for OAuth 2.0)":
      "Secret client (pour OAuth 2.0)",
    "Client Secret (OAuth)":
      "Secret client (OAuth)",
    "Client Secret for OAuth 2.0":
      "Secret client pour OAuth 2.0",
    "Client Secret Key":
      "Clé secrète client",
    "Client type":
      "Type de client",
    "Close Detection on Incident Closure":
      "Fermer la détection à la fermeture de l'incident",
    "Close Mirrored Cortex Incidents (Incoming Mirroring)":
      "Fermer les incidents Cortex mis en miroir (mise en miroir entrante)",
    "Close Mirrored Prisma Cloud Alert":
      "Fermer l'alerte Prisma Cloud mise en miroir",
    "Close Mirrored Splunk ES Events (Outgoing Mirroring)":
      "Fermer les événements Splunk ES mis en miroir (mise en miroir sortante)",
    "Close Mirrored Splunk Notable Event":
      "Fermer le Notable Event Splunk mis en miroir",
    "Cloud Name (i.e., <https://zsapi.zscalertwo.net>)":
      "Nom du cloud (par exemple, <https://zsapi.zscalertwo.net>)",
    "Collect Configuration":
      "Collecter la configuration",
    "Collect Logs":
      "Collecter les journaux",
    "Comma-separated configuration for advanced parameters values. e.g. EVENTS_INTERVAL_SECS=20,FETCH_SLEEP=5":
      "Configuration séparée par des virgules pour les valeurs des paramètres avancés. Par exemple, EVENTS_INTERVAL_SECS=20,FETCH_SLEEP=5",
    "Comma-separated finding statuses to fetch. Known values are OPEN, REOPENED, and DONE. The default excludes DONE so that remediated findings do not create incidents, while still covering findings that were reopened. Only applies when Findings scope is \"Supplier Findings\". Leave empty to fetch all statuses.":
      "Statuts des résultats à récupérer, séparés par des virgules. Les valeurs connues sont OPEN, REOPENED et DONE. Par défaut, DONE est exclu afin que les résultats corrigés ne créent pas d'incidents, tout en couvrant les résultats qui ont été rouverts. S'applique uniquement lorsque Findings scope est « Supplier Findings ». Laissez ce champ vide pour récupérer tous les statuts.",
    "Command Example":
      "Exemple de commande",
    "Comment tag from Splunk":
      "Balise de commentaire de Splunk",
    "Comment tag to Splunk":
      "Balise de commentaire vers Splunk",
    "Commercial Region (https://analysiscenter.veracode.com/)":
      "Région commerciale (https://analysiscenter.veracode.com/)",
    "Common parameters":
      "Paramètres communs",
    "Configuration Steps":
      "Étapes de configuration",
    "Configure a JWT signing key by accessing: All→System OAuth→JWT Keys using the keystore from above and keep the Key ID as it will be used as kid integration parameter.":
      "Configurez une clé de signature JWT en accédant à : All→System OAuth→JWT Keys, en utilisant le magasin de clés ci-dessus, et conservez le Key ID, car il sera utilisé comme paramètre d'intégration `kid`.",
    "Configure additional integration instances, adding the workflow URL for each Team. You can then send notifications to multiple teams at once, or select the integration instance to use via the playbook task editor.":
      "Configurez des instances d'intégration supplémentaires en ajoutant l'URL du workflow pour chaque équipe. Vous pouvez ensuite envoyer des notifications à plusieurs équipes à la fois ou sélectionner l'instance d'intégration à utiliser via l'éditeur de tâches du playbook.",
    "Configure Integration":
      "Configurer l'intégration",
    "Configure Microsoft Teams on Cortex or Cortex XSIAM":
      "Configurez Microsoft Teams dans Cortex ou Cortex XSIAM",
    "Configure the classification. Make sure that your non ES incident fields are associated with your custom incident type.":
      "Configurez la classification. Assurez-vous que vos champs d'incident non ES sont associés à votre type d'incident personnalisé.",
    "Configure the default threshold for each indicator type in the instance settings.":
      "Configurez le seuil par défaut pour chaque type d'indicateur dans les paramètres de l'instance.",
    "Configure the instance":
      "Configurer l'instance",
    "Configure the Instance to Fetch Attack Paths from BloodHound Enterprise":
      "Configurer l'instance pour récupérer les chemins d'attaque depuis BloodHound Enterprise",
    "Configure the integration instance in Cortex":
      "Configurer l'instance d'intégration dans Cortex",
    "Configure the integration to fetch incidents (see the Integration documentation for details).":
      "Configurez l'intégration pour récupérer les incidents (consultez la documentation de l'intégration pour plus de détails).",
    "Configure the mapping. Make sure to map your non ES fields accordingly and make sure that these incident fields are associated with their custom incident type.":
      "Configurez le mappage. Assurez-vous de mapper correctement vos champs non ES et de vérifier que ces champs d'incident sont associés à leur type d'incident personnalisé.",
    "Configure VulnDB on Cortex":
      "Configurer VulnDB dans Cortex",
    "Configure Your MongoDB Atlas Instance":
      "Configurer votre instance MongoDB Atlas",
    "Connect SonarQube":
      "Connecter SonarQube",
    "Connect Veracode":
      "Connecter Veracode",
    "Connection Method":
      "Méthode de connexion",
    "Connection Security":
      "Sécurité de la connexion",
    "Connection URI":
      "URI de connexion",
    "Connector ID (CB Defense)":
      "ID du connecteur (CB Defense)",
    "Content types to fetch":
      "Types de contenu à récupérer",
    "Context Output":
      "Sortie de contexte",
    "Copy the Access Token to the “Personal Access Token” field":
      "Copiez le jeton d'accès dans le champ « Personal Access Token »",
    "Copy the API key.":
      "Copiez la clé API.",
    "Copy the Client ID and Client Secret":
      "Copiez l'ID client et le secret client",
    "Copy the Client ID and Client Secret Key to a safe place.":
      "Copiez l'ID client et la clé secrète client dans un endroit sûr.",
    "Copy the generated API token. This would be required to be configured while adding the RiskSense instance on Cortex.":
      "Copiez le jeton d'API généré. Il sera nécessaire lors de l'ajout de l'instance RiskSense dans Cortex.",
    "Copy the Runtime API Key for scanner operations":
      "Copiez la clé API Runtime pour les opérations du scanner",
    "Copy your API key.":
      "Copiez votre clé API.",
    "Copy your Terraform Enterprise server domain":
      "Copiez le domaine de votre serveur Terraform Enterprise",
    "Corporation Name (should match the pattern [0-9a-z_.-]+)":
      "Nom de la société (doit correspondre au modèle [0-9a-z_.-]+)",
    "Cortex Severity":
      "Gravité Cortex",
    "Cortex Tenant":
      "Tenant Cortex",
    "Cortex uses the Workday integration to fetch reports and create XSOAR incidents that correspond to the CRUD operation(s) in the report. For example, if you run a full report that includes 5 new employees, 3 terminated employees, and 10 employee profiles that were updated, 18 unique incidents would be created in XSOAR.":
      "Cortex utilise l'intégration Workday pour récupérer des rapports et créer des incidents XSOAR correspondant aux opérations CRUD du rapport. Par exemple, si vous exécutez un rapport complet incluant 5 nouveaux employés, 3 employés partis et 10 profils d'employés mis à jour, 18 incidents uniques seront créés dans XSOAR.",
    "Create a JWT provider with a JWT signing key by accessing: All→System OAuth→JWT providers. Claim Name sub in Standard Claims has to be existing non-admin servicenow user with all necessary roles.":
      "Créez un fournisseur JWT avec une clé de signature JWT en accédant à : All→System OAuth→JWT providers. Le Claim Name `sub` dans Standard Claims doit être un utilisateur ServiceNow existant, non administrateur, disposant de tous les rôles nécessaires.",
    "Create a local user with a sufficient role.":
      "Créez un utilisateur local disposant d'un rôle suffisant.",
    "Create a new instance":
      "Créer une nouvelle instance",
    "Create a new Mattermost user (to act as the Mattermost Bot)":
      "Créez un nouvel utilisateur Mattermost (pour qu'il agisse en tant que bot Mattermost)",
    "Create a new service account or OAuth2 client":
      "Créez un nouveau compte de service ou client OAuth2",
    "Create a workflow in Microsoft Teams.":
      "Créez un workflow dans Microsoft Teams.",
    "Create an image or PDF file from a URL or HTML body.":
      "Créez un fichier image ou PDF à partir d'une URL ou d'un corps HTML.",
    "Create an Integration System Security Group (Unconstrained) using the ‘Create Security Group’ task":
      "Créez un Integration System Security Group (Unconstrained) à l'aide de la tâche 'Create Security Group'",
    "Create an JWT app.":
      "Créez une application JWT.",
    "Create an Server-to-Server OAuth app.":
      "Créez une application OAuth de serveur à serveur.",
    "Create API Access Policy or add Authentication profile to existing Policy by accessing: All→System Web Services→API Access Policies→Rest API Access Policies":
      "Créez une API Access Policy ou ajoutez un Authentication profile à une politique existante en accédant à : All→System Web Services→API Access Policies→Rest API Access Policies",
    "Create Incidents for Escalated Detections":
      "Créer des incidents pour les détections escaladées",
    "Create Incidents for Prioritized Detections":
      "Créer des incidents pour les détections priorisées",
    "Create Indicators from Relationships":
      "Créer des indicateurs à partir des relations",
    "Create OAuth2 Client in Strata Cloud Manager":
      "Créez un client OAuth2 dans Strata Cloud Manager",
    "Create the Demisto Bot in Microsoft Teams":
      "Créez le Demisto Bot dans Microsoft Teams",
    "Creating an API Key":
      "Création d'une clé API",
    "Creating or updating the encryption master key of Palo Alto Networks Firewall or Panorama invalidates the current API key and requires obtaining a new one. All subsequent commands will raise an “Invalid Credential” error until a new API key is obtained and the integration instance is updated accordingly.":
      "La création ou la mise à jour de la clé principale de chiffrement de Palo Alto Networks Firewall ou de Panorama invalide la clé API actuelle et nécessite d'en obtenir une nouvelle. Toutes les commandes suivantes généreront une erreur « Invalid Credential » tant qu'une nouvelle clé API n'aura pas été obtenue et que l'instance d'intégration n'aura pas été mise à jour en conséquence.",
    "Crowdsourced Yara Rules Threshold":
      "Seuil des règles Yara issues du crowdsourcing",
    "CSV of the Splunk lookup tables from which to take the Asset enrichment data.":
      "CSV des tables de recherche Splunk à partir desquelles extraire les données d'enrichissement des actifs.",
    "CSV of the Splunk lookup tables from which to take the Identity enrichment data.":
      "CSV des tables de recherche Splunk à partir desquelles extraire les données d'enrichissement des identités.",
    "Currently, OpenSSH keys are not supported. Only RSA keys (.PEM files) are supported.":
      "Actuellement, les clés OpenSSH ne sont pas prises en charge. Seules les clés RSA (fichiers .PEM) sont prises en charge.",
    "Custom New Incident Welcome Message":
      "Message de bienvenue personnalisé pour les nouveaux incidents",
    "Customer name":
      "Nom du client",
    "Customer Name":
      "Nom du client",
    "CVE- is a constant string":
      "`CVE-` est une chaîne constante",
    "Data profiles to allow exemption":
      "Profils de données autorisés à bénéficier d'une exemption",
    "Date Format in Workday Report":
      "Format de date dans le rapport Workday",
    "Date or relative timestamp to start fetching incidents from, in the format of <number> <time unit>. For example, 2 minutes, 12 hours, 6 days, 2 weeks, 3 months, 1 year, ISO timestamp. Default is 3 days.":
      "Date ou horodatage relatif à partir duquel commencer à récupérer les incidents, au format <number> <time unit>. Par exemple, 2 minutes, 12 hours, 6 days, 2 weeks, 3 months, 1 year, horodatage ISO. La valeur par défaut est 3 days.",
    "Date YYYY-MM-dd finishing date (latest)":
      "Date de fin YYYY-MM-dd (la plus récente)",
    "Date YYYY-MM-dd starting date (earliest)":
      "Date de début YYYY-MM-dd (la plus ancienne)",
    "DBotScore mapping":
      "Mappage DBotScore",
    "Deactivation date field":
      "Champ de date de désactivation",
    "Deactive User URL":
      "URL de désactivation de l'utilisateur",
    "Dedicated Slack channel to receive notifications":
      "Canal Slack dédié à la réception des notifications",
    "Default ‘wait-time’ is 20 seconds.":
      "La valeur par défaut de 'wait-time' est de 20 secondes.",
    "Default Behavior":
      "Comportement par défaut",
    "Default Hostname or IP Address":
      "Nom d'hôte ou adresse IP par défaut",
    "Default max total wait for results (in milliseconds)":
      "Attente totale maximale par défaut pour les résultats (en millisecondes)",
    "Default maximum number of records to retrieve":
      "Nombre maximal d'enregistrements à récupérer par défaut",
    "Default requestor ID for adding people to incidents":
      "ID de demandeur par défaut pour l'ajout de personnes aux incidents",
    "Default team":
      "Équipe par défaut",
    "Default Tenant Services Group ID to use for API calls. Example: 1234567890.":
      "ID du Tenant Services Group par défaut à utiliser pour les appels d'API. Exemple : 1234567890.",
    "Default ticket type for running ticket commands and fetching incidents":
      "Type de ticket par défaut pour l'exécution des commandes de ticket et la récupération des incidents",
    "Default user":
      "Utilisateur par défaut",
    "Define a query to determine which offenses to fetch. e.g. status=OPEN. See ? for more details.":
      "Définissez une requête pour déterminer les infractions à récupérer. Par exemple, status=OPEN. Pour plus de détails, consultez ?.",
    "Defining a broad rule-set will cause the integration to create multiple redundant incidents.":
      "La définition d'un ensemble de règles trop large entraînera la création de plusieurs incidents redondants par l'intégration.",
    "Delegated user authentication":
      "Authentification d'utilisateur délégué",
    "Dependencies (Python packages)":
      "Dépendances (packages Python)",
    "Depending on the authentication method you use, the integration parameters might change.":
      "Selon la méthode d'authentification que vous utilisez, les paramètres de l'intégration peuvent changer.",
    "Depending on the selected authentication method, you may need to create a dedicated application or use a dedicated user account for the integration. Each method requires specific permissions and configuration steps to ensure Security & Compliance commands can be executed successfully.":
      "Selon la méthode d'authentification sélectionnée, vous devrez peut-être créer une application dédiée ou utiliser un compte utilisateur dédié pour l'intégration. Chaque méthode nécessite des autorisations et des étapes de configuration spécifiques pour garantir la bonne exécution des commandes Security & Compliance.",
    "Depending on the system load, the initial fetch might take a long time.":
      "Selon la charge du système, la première récupération peut prendre beaucoup de temps.",
    "Deprecated starting from version 10.35.0 of Jamf.":
      "Obsolète à partir de la version 10.35.0 de Jamf.",
    "Deprecated. Use O365 - Security And Compliance - Content Search v2 instead.":
      "Obsolète. Utilisez plutôt O365 - Security And Compliance - Content Search v2.",
    "Deprecated. Use the Slack v3 integration instead.":
      "Obsolète. Utilisez plutôt l'intégration Slack v3.",
    "Detailed Instructions…":
      "Instructions détaillées…",
    "Details for Silent Push workflow":
      "Détails du workflow Silent Push",
    "Detection Close Reason for Incident Closure":
      "Motif de clôture de la détection lors de la clôture de l'incident",
    "Detection close reason to set in Vectra when closing incidents in XSOAR. Default value is 'Remediated'.":
      "Motif de clôture de la détection à définir dans Vectra lors de la clôture d'incidents dans XSOAR. La valeur par défaut est 'Remediated'.",
    "Detection close reason to set in Vectra when closing incidents in XSOAR. Default value is 'Remediated'. Note: This parameter is only used when close detection on incident closer is 'checked' and the mirroring direction is set to 'Outgoing' or 'Incoming And Outgoing'.":
      "Motif de clôture de la détection à définir dans Vectra lors de la clôture d'incidents dans XSOAR. La valeur par défaut est 'Remediated'. Remarque : ce paramètre n'est utilisé que si close detection on incident closer est 'checked' et que la direction de mise en miroir est définie sur 'Outgoing' ou 'Incoming And Outgoing'.",
    "Detection Status for Incident Reopen":
      "Statut de la détection lors de la réouverture de l'incident",
    "Detection status to set in Vectra when incident is reopened in XSOAR. Default value is 'Escalated'.":
      "Statut de la détection à définir dans Vectra lors de la réouverture de l'incident dans XSOAR. La valeur par défaut est 'Escalated'.",
    "Detection status to set in Vectra when incident is reopened in XSOAR. Default value is 'Escalated'. Note: This parameter is only used when open detection on incident reopen is 'checked' and the mirroring direction is set to 'Outgoing' or 'Incoming And Outgoing'.":
      "Statut de la détection à définir dans Vectra lors de la réouverture de l'incident dans XSOAR. La valeur par défaut est 'Escalated'. Remarque : ce paramètre n'est utilisé que si open detection on incident reopen est 'checked' et que la direction de mise en miroir est définie sur 'Outgoing' ou 'Incoming And Outgoing'.",
    "Determines when employees are synced from Workday, i.e., when are the User Profile in XSOAR, and the users in the applications, created. Set to 0 to sync hires on their hire date. Leave empty to sync the hires immediately.":
      "Détermine quand les employés sont synchronisés depuis Workday, c'est-à-dire quand le profil utilisateur dans XSOAR et les utilisateurs dans les applications sont créés. Définissez la valeur sur 0 pour synchroniser les recrues à leur date d'embauche. Laissez vide pour synchroniser les recrues immédiatement.",
    "Determines when to enable the Active Directory accounts of employees. Set to 0 to enable the Active Directory accounts on their hire date. Leave empty to enable the accounts immediately. Note that this is effective only when the employees are already synced to XSOAR, so you should set a number lower, or equal to, the value in the *Number of days before hire date to sync hires* parameter.":
      "Détermine quand les comptes Active Directory des employés sont activés. Définissez la valeur sur 0 pour activer les comptes Active Directory à la date d'embauche. Laissez vide pour activer les comptes immédiatement. Notez que cela n'est effectif que si les employés sont déjà synchronisés avec XSOAR ; vous devez donc définir un nombre inférieur ou égal à la valeur du paramètre *Number of days before hire date to sync hires*.",
    "Determines whether to return all results, which can number in the thousands. If “true”, returns all results and overrides the _fullResponse_, _long_ arguments (if set to “false”) in a command. If “false”, the _fullResponse_, _long_ arguments in the command determines how results are returned.":
      "Détermine si tous les résultats, qui peuvent se compter par milliers, sont renvoyés. Si la valeur est “true”, tous les résultats sont renvoyés et les arguments _fullResponse_ et _long_ (s'ils sont définis sur “false”) d'une commande sont remplacés. Si la valeur est “false”, ce sont les arguments _fullResponse_ et _long_ de la commande qui déterminent la manière dont les résultats sont renvoyés.",
    "Disable Automatic Notifications":
      "Désactiver les notifications automatiques",
    "DLP API Base URL":
      "URL de base de l'API DLP",
    "DLP API base URL for DLP management operations (dictionaries, patterns, filtering profiles). Default is the global DLP endpoint. Change only if using a regional or custom DLP endpoint.":
      "URL de base de l'API DLP pour les opérations de gestion DLP (dictionnaires, modèles, profils de filtrage). Par défaut, il s'agit du point de terminaison DLP global. Ne le modifiez que si vous utilisez un point de terminaison DLP régional ou personnalisé.",
    "DLP Regions":
      "Régions DLP",
    "Do not check for Cortex version 8":
      "Ne pas vérifier la version 8 de Cortex",
    "Domain Controller":
      "Contrôleur de domaine",
    "Domain Malicious Threshold. Minimum number of positive results from VT scanners to consider the Domain malicious.":
      "Seuil de domaine malveillant. Nombre minimal de résultats positifs des scanners VT pour considérer le domaine comme malveillant.",
    "Domain of illuminate server to use (format - server.that_you_use.com - No http/https)":
      "Domaine du serveur illuminate à utiliser (format - server.that_you_use.com - sans http/https)",
    "Domain Popularity Ranking Threshold":
      "Seuil de classement de popularité du domaine",
    "Domain Relationships":
      "Relations du domaine",
    "Domain Suspicious Threshold. Minimum number of positive and suspicious results from VT scanners to consider the Domain suspicious.":
      "Seuil de domaine suspect. Nombre minimal de résultats positifs et suspects des scanners VT pour considérer le domaine comme suspect.",
    "Domain Threshold. Minimum number of positive results from VT scanners to consider the domain malicious.":
      "Seuil du domaine. Nombre minimal de résultats positifs des scanners VT pour considérer le domaine comme malveillant.",
    "Drag the value to the appropriate incident type.":
      "Faites glisser la valeur vers le type d'incident approprié.",
    "DXL documentation":
      "Documentation DXL",
    "Each access token enables the bearer to perform specific actions on specific Okta endpoints, with that ability controlled by which scopes the access token contains.":
      "Chaque jeton d'accès permet à son porteur d'effectuer des actions spécifiques sur des points de terminaison Okta spécifiques, cette capacité étant contrôlée par les portées que contient le jeton d'accès.",
    "Each log type has its own query field in the instance configuration.":
      "Chaque type de journal dispose de son propre champ de requête dans la configuration de l'instance.",
    "Each report has a unique URL, which you enter as one of the integration instance parameters. If you want to fetch multiple reports, each report will require its own integration instance.":
      "Chaque rapport possède une URL unique, que vous saisissez comme l'un des paramètres de l'instance d'intégration. Si vous souhaitez récupérer plusieurs rapports, chaque rapport nécessitera sa propre instance d'intégration.",
    "Elastic API Port":
      "Port de l'API Elastic",
    "Email (Password for basic authentication only)":
      "E-mail (mot de passe pour l'authentification de base uniquement)",
    "Email / User Principal Name (Required)":
      "E-mail / Nom d'utilisateur principal (obligatoire)",
    "Email address of the XSOAR delegated Teams user (e.g. \"example@demisto.com\")":
      "Adresse e-mail de l'utilisateur Teams délégué de XSOAR (par exemple, \"example@demisto.com\")",
    "Email address to associate for this integration.":
      "Adresse e-mail à associer à cette intégration.",
    "Enable Cortex Assistant AI integration in Slack. When enabled, users can mention the bot to interact with AI agents for security analysis, threat intelligence, and automated responses.":
      "Active l'intégration Cortex Assistant AI dans Slack. Lorsqu'elle est activée, les utilisateurs peuvent mentionner le bot pour interagir avec des agents d'IA pour l'analyse de sécurité, la threat intelligence et les réponses automatisées.",
    "Enable Incident Mirroring":
      "Activer la mise en miroir des incidents",
    "Enable Okta Authentication Log and Configuration Collection":
      "Activer la collecte des journaux d'authentification et de configuration Okta",
    "Enable Outbound File Mirroring":
      "Activer la mise en miroir des fichiers sortants",
    "Enable permissions.":
      "Activez les autorisations.",
    "Enable score analyzing by Crowdsourced Yara Rules, Sigma, and IDS":
      "Activer l'analyse du score via Crowdsourced Yara Rules, Sigma et IDS",
    "Enable Splunk statuses marked as “End Status” to close on mirror (Incoming Mirroring)":
      "Activer la clôture lors de la mise en miroir des statuts Splunk marqués comme “End Status” (mise en miroir entrante)",
    "Enable this to fetch assets that correlate to the fetched offenses.":
      "Activez cette option pour récupérer les actifs corrélés aux infractions récupérées.",
    "Enable TLS on the HTTP interface of your Elasticsearch cluster (required for the token service).":
      "Activez TLS sur l'interface HTTP de votre cluster Elasticsearch (requis pour le service de jetons).",
    "Enable Token Authentication":
      "Activer l'authentification par jeton",
    "Enabled AI assistant":
      "Assistant IA activé",
    "Enabling this checkbox closes the detection in Vectra when the incident is closed in XSOAR.":
      "Si vous cochez cette case, la détection est clôturée dans Vectra lorsque l'incident est clôturé dans XSOAR.",
    "Enabling this checkbox closes the detection in Vectra when the incident is closed in XSOAR. Note: This parameter is only used when the mirroring direction is set to 'Outgoing' or 'Incoming And Outgoing'.":
      "Si vous cochez cette case, la détection est clôturée dans Vectra lorsque l'incident est clôturé dans XSOAR. Remarque : ce paramètre n'est utilisé que si la direction de mise en miroir est définie sur 'Outgoing' ou 'Incoming And Outgoing'.",
    "Enabling this checkbox generates incidents for escalated events detections. If not selected, incidents are created for all events detections.":
      "Si vous cochez cette case, des incidents sont générés pour les détections d'événements escaladées. Si elle n'est pas cochée, des incidents sont créés pour toutes les détections d'événements.",
    "Enabling this checkbox generates incidents for prioritized events detections. If not selected, incidents are created for all events detections.":
      "Si vous cochez cette case, des incidents sont générés pour les détections d'événements prioritaires. Si elle n'est pas cochée, des incidents sont créés pour toutes les détections d'événements.",
    "Enabling this checkbox opens the detection in Vectra when the incident is reopened in XSOAR.":
      "Si vous cochez cette case, la détection est ouverte dans Vectra lorsque l'incident est rouvert dans XSOAR.",
    "Enabling this checkbox opens the detection in Vectra when the incident is reopened in XSOAR. Note: This parameter is only used when the mirroring direction is set to 'Outgoing' or 'Incoming And Outgoing'.":
      "Si vous cochez cette case, la détection est ouverte dans Vectra lorsque l'incident est rouvert dans XSOAR. Remarque : ce paramètre n'est utilisé que si la direction de mise en miroir est définie sur 'Outgoing' ou 'Incoming And Outgoing'.",
    "Endpoint URI":
      "URI du point de terminaison",
    "Enrichment Timeout (Minutes)":
      "Délai d'expiration de l'enrichissement (minutes)",
    "Enrichment types":
      "Types d'enrichissement",
    "Enrichment Types":
      "Types d'enrichissement",
    "Ensure Appropriate Role":
      "Vérifier le rôle approprié",
    "Enter a meaningful name and a description for the API, and click Create Key.":
      "Saisissez un nom explicite et une description pour l'API, puis cliquez sur Create Key.",
    "Enter a name for the API key and configure the desired settings.":
      "Saisissez un nom pour la clé API et configurez les paramètres souhaités.",
    "Enter a value for the UPN parameter in the integration configuration.":
      "Saisissez une valeur pour le paramètre UPN dans la configuration de l'intégration.",
    "Enter connection parameters. (Server URL, Client ID & Client Secret Key)":
      "Saisissez les paramètres de connexion. (Server URL, Client ID et Client Secret Key)",
    "Enter the email address the key should be issued to and submit the signup form.":
      "Saisissez l'adresse e-mail à laquelle la clé doit être délivrée et envoyez le formulaire d'inscription.",
    "Enter the relevant tag name for mirror notes.":
      "Saisissez le nom de la balise appropriée pour les notes de mise en miroir.",
    "Enter your Customer Name and API Key provided by the ThreatX SOC. You can request your Customer Name and API Key by opening a support ticket via support@threatx.com.":
      "Saisissez votre Customer Name et votre API Key fournis par le SOC ThreatX. Vous pouvez demander votre Customer Name et votre API Key en ouvrant un ticket d'assistance via support@threatx.com.",
    "Entity Types":
      "Types d'entité",
    "Environment ID":
      "ID d'environnement",
    "Environment ID is available under the PingOne Dashboard->Environment Properties.":
      "L'ID d'environnement est disponible sous PingOne Dashboard->Environment Properties.",
    "Escape URLs":
      "Échapper les URL",
    "Even if the password is incorrect, the integration will attempt to authenticate using it.":
      "Même si le mot de passe est incorrect, l'intégration tentera de s'authentifier avec celui-ci.",
    "Event fields to return from the events query (CAUTION this parameter is correlated to the incoming mapper, and changing the values may adversely affect mapping)":
      "Champs d'événement à renvoyer par la requête d'événements (ATTENTION : ce paramètre est corrélé au mappeur entrant et la modification des valeurs peut avoir un impact négatif sur le mappage)",
    "Event types to fetch":
      "Types d'événements à récupérer",
    "Events will be fetched only for User Profiles with a Source Priority value less than or equal to the value of this parameter.":
      "Les événements ne seront récupérés que pour les profils utilisateur dont la valeur Source Priority est inférieure ou égale à la valeur de ce paramètre.",
    "Exact name of the rule or ruleset you want to filter on. Leave empty to receive all.":
      "Nom exact de la règle ou de l'ensemble de règles sur lequel vous souhaitez filtrer. Laissez vide pour tout recevoir.",
    "Existing users":
      "Utilisateurs existants",
    "Exploit publish date":
      "Date de publication de l'exploit",
    "Extensive Logging":
      "Journalisation détaillée",
    "Feed Types":
      "Types de flux",
    "Fetch":
      "Récupération",
    "Fetch aggregate records (instead of messages)":
      "Récupérer les enregistrements agrégés (au lieu des messages)",
    "Fetch Alert Severity Threshold Higher Than":
      "Seuil de gravité des alertes à récupérer (supérieure à)",
    "Fetch Alerts":
      "Récupérer les alertes",
    "Fetch backwards window - the time overlap for each fetch to account for the gap between event creation and indexing on Splunk. This helps prevent data gaps caused by ingestion lag.":
      "Fenêtre de récupération rétroactive : chevauchement temporel de chaque récupération pour tenir compte du décalage entre la création de l'événement et son indexation dans Splunk. Cela permet d'éviter les lacunes de données causées par le retard d'ingestion.",
    "Fetch backwards window - this backward window is for cases where there is a gap between the event occurrence time and the event index time on the server.":
      "Fenêtre de récupération rétroactive : cette fenêtre rétroactive est destinée aux cas où il existe un décalage entre l'heure de survenue de l'événement et l'heure d'indexation de l'événement sur le serveur.",
    "Fetch delta - The delta time in each batch. e.g. 1 hour, 3 minutes.":
      "Delta de récupération : l'intervalle de temps de chaque lot. Par exemple, 1 hour, 3 minutes.",
    "Fetch emails in HTML format":
      "Récupérer les e-mails au format HTML",
    "Fetch event types":
      "Types d'événements à récupérer",
    "Fetch events (logs) from Splunk into Cortex":
      "Récupère les événements (journaux) de Splunk dans Cortex",
    "Fetch incident query":
      "Requête de récupération des incidents",
    "Fetch incident with specific states.":
      "Récupère les incidents ayant des états spécifiques.",
    "Fetch Incidents Filtering":
      "Filtrage de la récupération des incidents",
    "Fetch incidents type":
      "Type d'incidents à récupérer",
    "Fetch incidents using a manual query filter expression":
      "Récupération des incidents à l'aide d'une expression de filtre de requête manuelle",
    "Fetch incidents using an “IAM - Configuration” incident":
      "Récupération des incidents à l'aide d'un incident “IAM - Configuration”",
    "Fetch Interval (minutes)":
      "Intervalle de récupération (minutes)",
    "Fetch limit - maximum number of incidents per fetch":
      "Limite de récupération : nombre maximal d'incidents par récupération",
    "Fetch Limit (Max.- 200, Recommended less than 50)":
      "Limite de récupération (max. 200, moins de 50 recommandé)",
    "Fetch Limit (Recommended less than 200)":
      "Limite de récupération (moins de 200 recommandé)",
    "Fetch limit (recommended value is less than 200)":
      "Limite de récupération (la valeur recommandée est inférieure à 200)",
    "Fetch limit per type":
      "Limite de récupération par type",
    "Fetch mode":
      "Mode de récupération",
    "Fetch Only Escalated Detections":
      "Récupérer uniquement les détections escaladées",
    "Fetch only incidents with forensics":
      "Récupérer uniquement les incidents avec données forensiques",
    "Fetch only incidents with matching Application IDs":
      "Récupérer uniquement les incidents avec des ID d'application correspondants",
    "Fetch only incidents with matching severity":
      "Récupérer uniquement les incidents avec une gravité correspondante",
    "Fetch only incidents with matching state":
      "Récupérer uniquement les incidents avec un état correspondant",
    "Fetch only incidents with matching status":
      "Récupérer uniquement les incidents avec un statut correspondant",
    "Fetch Only Prioritized Detections":
      "Récupérer uniquement les détections prioritaires",
    "Fetch Prioritized and Escalated Detections":
      "Récupérer les détections prioritaires et escaladées",
    "Fetch Samples":
      "Récupérer les échantillons",
    "Fetch specific incident types. Default value is \"All\".":
      "Récupère des types d'incidents spécifiques. La valeur par défaut est « All ».",
    "Fetch Splunk Enterprise Security Findings and Investigations into Cortex.":
      "Récupère les Findings et les Investigations de Splunk Enterprise Security dans Cortex.",
    "Fetch Threatmon alarms into Cortex.":
      "Récupère les alarmes Threatmon dans Cortex.",
    "Fetched Incidents Data":
      "Données des incidents récupérés",
    "Fetches assets":
      "Récupère les actifs",
    "Fetches incidents":
      "Récupère les incidents",
    "Fetches only incidents with matching **All**, **Closed**, or **Open** state. If nothing is selected, **All** states will be used.":
      "Récupère uniquement les incidents dont l'état correspond à **All**, **Closed** ou **Open**. Si rien n'est sélectionné, tous les états (**All**) sont utilisés.",
    "Fetching events":
      "Récupération des événements",
    "File hashes":
      "Hachages de fichiers",
    "File Malicious Threshold. Minimum number of positive results from VT scanners to consider the file malicious.":
      "Seuil de fichier malveillant. Nombre minimal de résultats positifs des scanners VT pour considérer le fichier comme malveillant.",
    "File Relationships":
      "Relations du fichier",
    "File security scanning, DLP policy enforcement, and sensitive content detection for OneDrive":
      "Analyse de sécurité des fichiers, application des politiques DLP et détection de contenu sensible pour OneDrive",
    "File Suspicious Threshold. Minimum number of positive and suspicious results from VT scanners to consider the file suspicious.":
      "Seuil de fichier suspect. Nombre minimal de résultats positifs et suspects des scanners VT pour considérer le fichier comme suspect.",
    "File Threshold. Minimum number of positive results from VT scanners to consider the file malicious.":
      "Seuil du fichier. Nombre minimal de résultats positifs des scanners VT pour considérer le fichier comme malveillant.",
    "File transfer and execute commands via ssh, on remote machines":
      "Transfert de fichiers et exécution de commandes via SSH sur des machines distantes",
    "Fill anything in the “Username” fill box. Use you API key in the password fill box.":
      "Saisissez n'importe quelle valeur dans le champ “Username”. Utilisez votre clé API dans le champ du mot de passe.",
    "Fill in the ‘UPN Password’ parameter - the user’s Microsoft 365 password (the regular sign-in password for that UPN).":
      "Renseignez le paramètre ‘UPN Password’ avec le mot de passe Microsoft 365 de l'utilisateur (le mot de passe de connexion habituel pour cet UPN).",
    "Fill in the ‘UPN’ parameter in the integration configuration.":
      "Renseignez le paramètre ‘UPN’ dans la configuration de l'intégration.",
    "Fill in the UPN parameter in the integration configuration.":
      "Renseignez le paramètre UPN dans la configuration de l'intégration.",
    "Fill in the UPN, App ID, and Tenant ID parameters in the integration configuration.":
      "Renseignez les paramètres UPN, App ID et Tenant ID dans la configuration de l'intégration.",
    "Filter audit logs by type(s). If not specified, all audit log types will be fetched.":
      "Filtre les journaux d'audit par type. Si aucun type n'est spécifié, tous les types de journaux d'audit seront récupérés.",
    "Filter by entity type. If not selected, it will fetch all events detections.":
      "Filtre par type d'entité. Si aucun type n'est sélectionné, toutes les détections d'événements seront récupérées.",
    "Filter by killchain stage":
      "Filtrer par étape de la kill chain",
    "Filter by threat category":
      "Filtrer par catégorie de menace",
    "Filter by threat level (LOW, MEDIUM, or HIGH)":
      "Filtrer par niveau de menace (LOW, MEDIUM ou HIGH)",
    "Filter the Detections by the “Entity Type”(Account and Host).":
      "Filtrez les détections par “Entity Type” (Account et Host).",
    "Firewall: Configure the vsys":
      "Pare-feu : configurer le vsys",
    "First fetch time range":
      "Plage de temps de la première récupération",
    "First fetch timestamp (<number> <time unit>, e.g., 12 hours, 7 days) or a date or epoch timestamp.":
      "Horodatage de la première récupération (<number> <time unit>, par exemple, 12 hours, 7 days) ou date ou horodatage epoch.",
    "First fetch timestamp (<number> <time unit>. For example, 12 hours, 7 days)":
      "Horodatage de la première récupération (<number> <time unit>. Par exemple, 12 hours, 7 days)",
    "First fetch timestamp (e.g., 7 days)":
      "Horodatage de la première récupération (par exemple, 7 days)",
    "First fetch timestamp (Investigations)":
      "Horodatage de la première récupération (Investigations)",
    "Follow these instructions to find an API key that corresponds to a particular Carbon Black user account.":
      "Suivez ces instructions pour trouver la clé API correspondant à un compte utilisateur Carbon Black particulier.",
    "Follow these steps to add custom fields to the User Profile indicator.":
      "Suivez ces étapes pour ajouter des champs personnalisés à l'indicateur User Profile.",
    "Following link describes the process of how one can obtain a Personal Access Token in IdentityNow.":
      "Le lien suivant décrit la procédure d'obtention d'un jeton d'accès personnel dans IdentityNow.",
    "For an API key, go to your user profile at your ThreatCentral account, and press Manage API Keys, where you can generate a new API key.":
      "Pour obtenir une clé API, accédez à votre profil utilisateur dans votre compte ThreatCentral et appuyez sur Manage API Keys, où vous pouvez générer une nouvelle clé API.",
    "For API 1.0":
      "Pour l'API 1.0",
    "For API 2.0":
      "Pour l'API 2.0",
    "For data removal: the authenticated company must have remaining Black Market Data Removal credits.":
      "Pour la suppression de données : l'entreprise authentifiée doit disposer de crédits Black Market Data Removal restants.",
    "For detailed documentation, see the integration README.":
      "Pour une documentation détaillée, consultez le fichier README de l'intégration.",
    "For example, \"example@mail.com\"":
      "Par exemple, \"example@mail.com\"",
    "For example, using the “malicious_executables” will fetch only notifications caught by malicious_executables ruleset.":
      "Par exemple, l'utilisation de “malicious_executables” ne récupérera que les notifications détectées par l'ensemble de règles malicious_executables.",
    "For example: 01 Oct 2025, 01 Mar 2021 04:45:33, 2025-12-17T14:05:44Z.":
      "Par exemple : 01 Oct 2025, 01 Mar 2021 04:45:33, 2025-12-17T14:05:44Z.",
    "For information on getting your Okta API token, see the Okta documentation.":
      "Pour savoir comment obtenir votre jeton d'API Okta, consultez la documentation Okta.",
    "For more information about the service activation, visit the following link: https://docs.paloaltonetworks.com/ngfw/aiops/about/activate-aiops-for-ngfw#activate-aiops-for-ngfw_section_xjs_p55_fyb":
      "Pour plus d'informations sur l'activation du service, consultez le lien suivant : https://docs.paloaltonetworks.com/ngfw/aiops/about/activate-aiops-for-ngfw#activate-aiops-for-ngfw_section_xjs_p55_fyb",
    "For more information regarding the JSON objects, please see Proofpoint TRAP documentation under “JSON Alert Source 2.0”.":
      "Pour plus d'informations sur les objets JSON, consultez la documentation de Proofpoint TRAP sous “JSON Alert Source 2.0”.",
    "For Recorded Future Sandbox, the token is provided by going to the Recorded Future Portal -> Tools -> Malware Analysis -> API Keys":
      "Pour Recorded Future Sandbox, le jeton est fourni dans Recorded Future Portal -> Tools -> Malware Analysis -> API Keys",
    "For secure access to Prisma Cloud API, you need a Prisma Cloud API access key. An access key includes an Access Key ID and a Secret Key.":
      "Pour accéder de manière sécurisée à l'API Prisma Cloud, vous avez besoin d'une clé d'accès à l'API Prisma Cloud. Une clé d'accès comprend un Access Key ID et une Secret Key.",
    "For sending messages using the ChatBot app and mirroring":
      "Pour l'envoi de messages avec l'application ChatBot et la mise en miroir",
    "For the configuration, you should configure the server details and credentials either as parameters or as command arguments.":
      "Pour la configuration, vous devez configurer les détails du serveur et les identifiants soit comme paramètres, soit comme arguments de commande.",
    "For the configuration, you should either configure server details as parameters, or as command inputs.":
      "Pour la configuration, vous devez configurer les détails du serveur soit comme paramètres, soit comme entrées de commande.",
    "For the JWT method (deprecated)":
      "Pour la méthode JWT (obsolète)",
    "For XSOAR users below 6.0.0 version, using ‘Pull from instance’ option when creating a new mapper is not supported.":
      "Pour les utilisateurs de XSOAR dont la version est antérieure à 6.0.0, l'option ‘Pull from instance’ n'est pas prise en charge lors de la création d'un nouveau mappeur.",
    "Force Encryption":
      "Forcer le chiffrement",
    "Force encryption on the connection, requires SMBv3 or newer on the remote server. Default is \"false\".":
      "Force le chiffrement de la connexion ; nécessite SMBv3 ou une version ultérieure sur le serveur distant. La valeur par défaut est « false ».",
    "Format: `https://{hostName}:{port}`":
      "Format : `https://{hostName}:{port}`",
    "From `brokercerts.crt` file.":
      "À partir du fichier `brokercerts.crt`.",
    "From `client.crt` file.":
      "À partir du fichier `client.crt`.",
    "From `client.key` file. Make sure that the type of the field is not `encrypted` when filling it out.":
      "À partir du fichier `client.key`. Lors de la saisie, assurez-vous que le type du champ n'est pas `encrypted`.",
    "Full Incident Enrichment":
      "Enrichissement complet des incidents",
    "Full Incident Enrichment - Clear this checkbox to disable QRadar offense enrichment performed in fetch-incidents. This might help if you encounter a timeout while fetching new incidents.":
      "Enrichissement complet des incidents : décochez cette case pour désactiver l'enrichissement des infractions QRadar effectué dans fetch-incidents. Cela peut aider si vous rencontrez un délai d'expiration lors de la récupération de nouveaux incidents.",
    "Fully Qualified Domain Name (FQDN) - used in EHLO":
      "Nom de domaine complet (FQDN) : utilisé dans EHLO",
    "Generate a RiskSense API Token":
      "Générer un jeton d'API RiskSense",
    "Generate a self-signed certificate":
      "Générer un certificat auto-signé",
    "Generate an API key, copy it, and then paste it in the integration configuration.":
      "Générez une clé API, copiez-la, puis collez-la dans la configuration de l'intégration.",
    "Get a VirusTotal API Key":
      "Obtenir une clé API VirusTotal",
    "Get incident attachments":
      "Obtenir les pièces jointes de l'incident",
    "Get the BloodHound Enterprise API Token ID and Token Key":
      "Obtenir l'ID de jeton API et la clé de jeton de BloodHound Enterprise",
    "Get token API documentation":
      "Obtenir la documentation de l'API de jeton",
    "Get Your Okta API Token":
      "Obtenir votre jeton API Okta",
    "Get Your Slack API Token":
      "Obtenir votre jeton API Slack",
    "Get your Tenzai API key":
      "Obtenir votre clé API Tenzai",
    "Getting Access":
      "Obtenir l'accès",
    "Go to the Okta IAM integration instance and in the mapper textbox, replace the name of the default mapper with the custom mapper you created.":
      "Accédez à l'instance d'intégration Okta IAM et, dans la zone de texte du mappeur, remplacez le nom du mappeur par défaut par le mappeur personnalisé que vous avez créé.",
    "Go to the ServiceNow IAM integration instance and in the mapper textbox, replace the name of the default mapper with the custom mapper you created.":
      "Accédez à l'instance d'intégration ServiceNow IAM et, dans la zone de texte du mappeur, remplacez le nom du mappeur par défaut par le mappeur personnalisé que vous avez créé.",
    "Grant the Demisto Bot Permissions in Microsoft Graph":
      "Accordez les autorisations au Demisto Bot dans Microsoft Graph",
    "Granting JWT to admin is not allowed.":
      "L'octroi de JWT à un administrateur n'est pas autorisé.",
    "Host name that should appear in certificate":
      "Nom d'hôte devant figurer dans le certificat",
    "Host URL":
      "URL de l'hôte",
    "Hostname, IP address, or server URL":
      "Nom d'hôte, adresse IP ou URL du serveur",
    "Hours before first fetch to retrieve incidents":
      "Heures précédant la première récupération pour récupérer les incidents",
    "How many hours ago":
      "Il y a combien d'heures",
    "How many incidents to fetch each time":
      "Nombre d'incidents à récupérer à chaque fois",
    "How to Build a Query":
      "Comment créer une requête",
    "How to Create a Splunk Authentication Token":
      "Comment créer un jeton d'authentification Splunk",
    "How to fetch assets and vulnerabilities":
      "Comment récupérer les actifs et les vulnérabilités",
    "How to get your Panorays API Key":
      "Comment obtenir votre clé API Panorays",
    "How to get your Vectra Client ID and Client Secret Key":
      "Comment obtenir votre ID client et votre clé secrète client Vectra",
    "How To get your VMRay API Key":
      "Comment obtenir votre clé API VMRay",
    "How to retrieve a Palo Alto Networks WildFire Reports API key":
      "Comment récupérer une clé API de rapports Palo Alto Networks WildFire",
    "How to retrieve a WildFire API key":
      "Comment récupérer une clé API WildFire",
    "However, there is a trade-off: the larger the window, the longer fetch queries will take to complete.":
      "Cependant, il y a un compromis : plus la fenêtre est grande, plus les requêtes de récupération mettent de temps à se terminer.",
    "However, there is obviously a price - the larger the window, the longer it will take for fetch queries to complete.":
      "Cependant, il y a évidemment un prix à payer : plus la fenêtre est grande, plus les requêtes de récupération mettent de temps à se terminer.",
    "However, they may not suffice for viewing records in some tables.":
      "Cependant, ils peuvent ne pas suffire pour afficher les enregistrements de certaines tables.",
    "HR use Workday to manage CRUD operations for employees in the organization. It is standard practice for HR to generate reports for these CRUD operations. For example, running a weekly report that captures all new employees and terminated employees, or a daily report that captures updates to existing employee profiles (e.g., new mailing address or phone number).":
      "Les RH utilisent Workday pour gérer les opérations CRUD des employés de l'organisation. Il est courant que les RH génèrent des rapports sur ces opérations CRUD. Par exemple, l'exécution d'un rapport hebdomadaire qui recense tous les nouveaux employés et les employés sortants, ou d'un rapport quotidien qui recense les mises à jour des profils d'employés existants (par exemple, une nouvelle adresse postale ou un nouveau numéro de téléphone).",
    "HTTP request timeout (seconds)":
      "Délai d'expiration de la requête HTTP (secondes)",
    "HTTP Request Timeout (Specify the time interval in seconds. All the RiskSense API calls would timeout if the response is not returned within the configured time interval).":
      "Délai d'expiration de la requête HTTP (indiquez l'intervalle de temps en secondes. Tous les appels d'API RiskSense expireront si la réponse n'est pas renvoyée dans l'intervalle de temps configuré).",
    "Human Readable Output":
      "Sortie lisible",
    "IAM Configuration":
      "Configuration IAM",
    "ID (received from the admin consent - see Detailed Instructions (?)":
      "ID (reçu lors du consentement de l'administrateur - voir les instructions détaillées (?)",
    "Identify the fields list from the Splunk query and save it to a local file.":
      "Identifiez la liste des champs à partir de la requête Splunk et enregistrez-la dans un fichier local.",
    "Identity enrichment lookup tables":
      "Tables de correspondance pour l'enrichissement des identités",
    "Identity posture management, directory sync, and security posture monitoring for Entra ID":
      "Gestion de la posture des identités, synchronisation d'annuaire et surveillance de la posture de sécurité pour Entra ID",
    "Identity search enrichment":
      "Enrichissement de la recherche d'identités",
    "IdentityIQ Server URL (e.g. https://identityiq-server.com/identityiq)":
      "URL du serveur IdentityIQ (par ex. https://identityiq-server.com/identityiq)",
    "IdentityNow Server URL (e.g. https://org.api.identitynow.com)":
      "URL du serveur IdentityNow (par ex. https://org.api.identitynow.com)",
    "If both body and htmlBody are provided, we will create an alternative envelope":
      "Si body et htmlBody sont tous deux fournis, une enveloppe alternative sera créée",
    "If checked, the fetch incidents command will sample (at most) five incidents. Use only to sample incidents for classification & mapping.":
      "Si cette case est cochée, la commande de récupération des incidents échantillonnera (au maximum) cinq incidents. Utilisez-la uniquement pour échantillonner des incidents à des fins de classification et de mappage.",
    "If enabled, the integration will activate the command changes after each execution. If disabled, use the 'zia-activate-changes' command to activate Zscaler command changes.":
      "Si cette option est activée, l'intégration activera les modifications de commande après chaque exécution. Si elle est désactivée, utilisez la commande 'zia-activate-changes' pour activer les modifications de commande Zscaler.",
    "If enabled, the integration will activate the command changes after each execution. If disabled, use the 'zscaler-activate-changes' command to activate Zscaler command changes.":
      "Si cette option est activée, l'intégration activera les modifications de commande après chaque exécution. Si elle est désactivée, utilisez la commande 'zscaler-activate-changes' pour activer les modifications de commande Zscaler.",
    "If enabled, the integration will log out after executing each command.":
      "Si cette option est activée, l'intégration se déconnectera après l'exécution de chaque commande.",
    "If Fetch incidents is checked, make sure to enter at least one search field.":
      "Si l'option Récupérer les incidents est cochée, veillez à saisir au moins un champ de recherche.",
    "If not provided, \"host\" or \"system\" should be provided in the command's arguments.":
      "S'il n'est pas fourni, \"host\" ou \"system\" doit être indiqué dans les arguments de la commande.",
    "If not set, Client ID will be used.":
      "S'il n'est pas défini, l'ID client sera utilisé.",
    "If nothing is selected, **All** severities will be used.":
      "Si rien n'est sélectionné, **toutes** les gravités seront utilisées.",
    "If nothing is selected, **All** statuses will be used.":
      "Si rien n'est sélectionné, **tous** les statuts seront utilisés.",
    "If the Detection Status is updated in the Vectra Detection, it will be reflected in the XSOAR incident, or vice versa.":
      "Si Detection Status est mis à jour dans Vectra Detection, la modification sera répercutée dans l'incident XSOAR, ou inversement.",
    "If the integration was already set with look back > 0, and the look-back is not being increased at any point of time, then those incident duplications would not occur.":
      "Si l'intégration était déjà configurée avec un lookback > 0 et que celui-ci n'est augmenté à aucun moment, ces doublons d'incidents ne se produiront pas.",
    "If the second method is used, the system will automatically attempt to generate a token. If this attempt fails, it will then revert to using the first method.":
      "Si la seconde méthode est utilisée, le système tentera automatiquement de générer un jeton. Si cette tentative échoue, il reviendra alors à la première méthode.",
    "If the server details were configured both as parameters and as command arguments, the commands argument will be used to set the connection.":
      "Si les détails du serveur ont été configurés à la fois comme paramètres et comme arguments de commande, l'argument de la commande sera utilisé pour établir la connexion.",
    "If true, will not raise an error if the image is corrupt and could not be processed.":
      "Si la valeur est true, aucune erreur ne sera générée si l'image est corrompue et n'a pas pu être traitée.",
    "If you are a multi-tenant user and the body parameters of your login call include a user name and password instead of an access key ID and secret key, then you will also need to provide the Customer name":
      "Si vous êtes un utilisateur multi-tenant et que les paramètres du corps de votre appel de connexion incluent un nom d'utilisateur et un mot de passe au lieu d'un ID de clé d'accès et d'une clé secrète, vous devrez également fournir le Customer name",
    "If you are a multi-tenant user you will also need to provide the customerName.":
      "Si vous êtes un utilisateur multi-tenant, vous devrez également fournir customerName.",
    "If you previously had an API V1 configured based on the credentials obtained from this method, refer to the link above to gain new credentials with the relevant permissions.":
      "Si vous aviez précédemment configuré une API V1 à partir des identifiants obtenus avec cette méthode, consultez le lien ci-dessus pour obtenir de nouveaux identifiants disposant des autorisations appropriées.",
    "If you want to close a detection in Vectra when the incident is closed in XSOAR, check the “Close Detection on Incident Closure” option. This option is only used when the mirroring direction is set to ‘Outgoing’ or ‘Incoming And Outgoing’.":
      "Si vous souhaitez fermer une détection dans Vectra lorsque l'incident est fermé dans XSOAR, cochez l'option “Close Detection on Incident Closure”. Cette option n'est utilisée que lorsque le sens de mise en miroir est défini sur ‘Outgoing’ ou ‘Incoming And Outgoing’.",
    "If you want to reopen a detection in Vectra when the incident is reopened in XSOAR, check the “Open Detection on Incident Reopen” option. This option is only used when the mirroring direction is set to ‘Outgoing’ or ‘Incoming And Outgoing’.":
      "Si vous souhaitez rouvrir une détection dans Vectra lorsque l'incident est rouvert dans XSOAR, cochez l'option “Open Detection on Incident Reopen”. Cette option n'est utilisée que lorsque le sens de mise en miroir est défini sur ‘Outgoing’ ou ‘Incoming And Outgoing’.",
    "If you want to set the language to en-US, use en-GB instead.":
      "Si vous souhaitez définir la langue sur en-US, utilisez plutôt en-GB.",
    "If you want to use the mirror mechanism and you’re using custom mappers, then the incoming mapper must contain the following fields: dbotMirrorDirection, dbotMirrorId, dbotMirrorInstance, and dbotMirrorTags.":
      "Si vous souhaitez utiliser le mécanisme de mise en miroir et que vous utilisez des mappeurs personnalisés, le mappeur entrant doit contenir les champs suivants : dbotMirrorDirection, dbotMirrorId, dbotMirrorInstance et dbotMirrorTags.",
    "If you wish to configure a mapper, wait for the integration to perform the first fetch successfully. This is to make the fetch mechanism logic stable.":
      "Si vous souhaitez configurer un mappeur, attendez que l'intégration effectue correctement la première récupération. Cela permet de stabiliser la logique du mécanisme de récupération.",
    "Image scanning":
      "Analyse des images",
    "Implement OAuth for Okta":
      "Implémenter OAuth pour Okta",
    "Implemented in Python to support extensions.":
      "Implémenté en Python pour prendre en charge les extensions.",
    "Import from offset":
      "Importer depuis l'offset",
    "Import from partition":
      "Importer depuis la partition",
    "Import from topic":
      "Importer depuis le sujet",
    "Important note: resetting the integration cache removes all data about teams, channels, members saved in the integration context. Performing this step requires removing the bot from all teams it was added to.":
      "Remarque importante : la réinitialisation du cache de l'intégration supprime toutes les données sur les équipes, les canaux et les membres enregistrées dans le contexte de l'intégration. Cette étape nécessite de retirer le bot de toutes les équipes auxquelles il a été ajouté.",
    "Important Notes":
      "Remarques importantes",
    "Important: If you want to use the mirror mechanism, the incoming mapper must contain the following fields: dbotMirrorDirection, dbotMirrorId, dbotMirrorInstance":
      "Important : si vous souhaitez utiliser le mécanisme de mise en miroir, le mappeur entrant doit contenir les champs suivants : dbotMirrorDirection, dbotMirrorId, dbotMirrorInstance",
    "Important: The limit value can range from 10 to 200 and must be in multiples of 10.":
      "Important : la valeur de limit peut être comprise entre 10 et 200 et doit être un multiple de 10.",
    "In case access is required to an instance in the cloud, use the PEM file provided by the cloud provider.":
      "Si l'accès à une instance dans le cloud est requis, utilisez le fichier PEM fourni par le fournisseur de cloud.",
    "In order to add a rule name, use the filter name “alertRule.name”. In order to add a policy name, use the filter name “policy.name”.":
      "Pour ajouter un nom de règle, utilisez le nom de filtre “alertRule.name”. Pour ajouter un nom de politique, utilisez le nom de filtre “policy.name”.",
    "In order to configure the SIGNL4 pack in Cortex you just need the SIGNL4 team or integration secret (Password). You can find the same in your SIGNL4 web portal under Teams or under Integrations -> Installed -> Inbound Webhook. It is the last part of your webhook URL.":
      "Pour configurer le pack SIGNL4 dans Cortex, vous avez seulement besoin du secret de l'équipe ou de l'intégration SIGNL4 (mot de passe). Vous le trouverez dans votre portail web SIGNL4, sous Teams ou sous Integrations -> Installed -> Inbound Webhook. Il s'agit de la dernière partie de l'URL de votre webhook.",
    "In order to ensure the mirroring works as expected, mappers are required, both for incoming and outgoing, to map the expected fields in Cortex and Splunk.":
      "Pour garantir le bon fonctionnement de la mise en miroir, des mappeurs sont nécessaires, à la fois entrants et sortants, afin de mapper les champs attendus dans Cortex et Splunk.",
    "In order to use the Cortex application, use the default application ID.":
      "Pour utiliser l'application Cortex, utilisez l'ID d'application par défaut.",
    "In order to use the Cortex Azure application, use the default application ID (3307a0ab-612c-47af-b3b5-8208247562db).":
      "Pour utiliser l'application Cortex Azure, utilisez l'ID d'application par défaut (3307a0ab-612c-47af-b3b5-8208247562db).",
    "In order to use the rest of the commands, you are required to provide: App ID, App Key, Access Key & Secret Key.":
      "Pour utiliser les autres commandes, vous devez fournir : App ID, App Key, Access Key & Secret Key.",
    "In order to use this integration, you need to enter your Zoom credentials in the relevant integration instance parameters.":
      "Pour utiliser cette intégration, vous devez saisir vos identifiants Zoom dans les paramètres correspondants de l'instance d'intégration.",
    "In PEM format. Required and used if OAuth 2.0 is used for authentication. See detailed instructions on the 'Help' tab.":
      "Au format PEM. Obligatoire et utilisé si OAuth 2.0 est utilisé pour l'authentification. Consultez les instructions détaillées dans l'onglet 'Help'.",
    "In some hosted ElasticSearch environments, the standard ElasticSearch client is not supported. If you encounter any related client issues, please consider using the OpenSearch client type.":
      "Dans certains environnements ElasticSearch hébergés, le client ElasticSearch standard n'est pas pris en charge. Si vous rencontrez des problèmes liés au client, envisagez d'utiliser le type de client OpenSearch.",
    "In Splunk, there is often a delay between the time an incident is created (the event’s “occurrence time”) and the time it is actually searchable in Splunk and visible in the index (the event’s “index time”).":
      "Dans Splunk, il existe souvent un délai entre le moment où un incident est créé (la “occurrence time” de l'événement) et le moment où il devient réellement consultable dans Splunk et visible dans l'index (la “index time” de l'événement).",
    "In Strata Cloud Manager, navigate to AI Security > API Applications":
      "Dans Strata Cloud Manager, accédez à AI Security > API Applications",
    "In the Silent Push Profile menu, click Organisation, and go to the API tab.":
      "Dans le menu Profile de Silent Push, cliquez sur Organisation, puis accédez à l'onglet API.",
    "In the Summary indexing section, select the summary index, and enter the {key:value} pair for Cortex classification.":
      "Dans la section Summary indexing, sélectionnez l'index récapitulatif et saisissez la paire {key:value} pour la classification Cortex.",
    "In this case, all connections to Microsoft Security and Compliance PowerShell will use interactive delegated authentication.":
      "Dans ce cas, toutes les connexions à Microsoft Security and Compliance PowerShell utiliseront l'authentification déléguée interactive.",
    "Incident Asset Enrichment":
      "Enrichissement des actifs de l'incident",
    "Incident Asset Enrichment - When enabled, fetched offenses will also contain correlated assets.":
      "Enrichissement des actifs de l'incident - Lorsque cette option est activée, les infractions récupérées contiennent également les actifs corrélés.",
    "Incident Enrichment (Asset) - When enabled, fetched offenses will also contain correlated assets.":
      "Enrichissement des incidents (actifs) - Lorsque cette option est activée, les infractions récupérées contiennent également les actifs corrélés.",
    "Incident Enrichment (IP) - When enabled, fetched incidents IP values (local source addresses and local destination addresses) will be fetched from QRadar instead of their ID values.":
      "Enrichissement des incidents (IP) - Lorsque cette option est activée, les valeurs IP des incidents récupérés (adresses sources locales et adresses de destination locales) sont récupérées depuis QRadar au lieu de leurs valeurs d'ID.",
    "Incident IP Enrichment":
      "Enrichissement IP de l'incident",
    "Incident IP Enrichment - When enabled, fetched incidents IP values (local source addresses and local destination addresses) will be fetched from QRadar instead of their ID values.":
      "Enrichissement IP de l'incident - Lorsque cette option est activée, les valeurs IP des incidents récupérés (adresses sources locales et adresses de destination locales) sont récupérées depuis QRadar au lieu de leurs valeurs d'ID.",
    "Incident management — Retrieve and change the incident status.":
      "Gestion des incidents — Récupérez et modifiez le statut de l'incident.",
    "Incident Mirroring":
      "Mise en miroir des incidents",
    "Incident statuses to fetch":
      "Statuts des incidents à récupérer",
    "Incident Type":
      "Type d'incident",
    "Incidents":
      "Incidents",
    "Incidents channel":
      "Canal des incidents",
    "Incidents Filter":
      "Filtre des incidents",
    "Incoming - Any changes in Splunk findings (finding’s status, status_label, urgency, comments, and owner) will be reflected in Cortex incidents.":
      "Entrant - Toutes les modifications apportées aux findings Splunk (status, status_label, urgency, comments et owner du finding) seront répercutées dans les incidents Cortex.",
    "Incoming - Any changes in Splunk notables (notable’s status, status_label, urgency, comments, and owner) will be reflected in Cortex incidents.":
      "Entrant - Toutes les modifications apportées aux notables Splunk (status, status_label, urgency, comments et owner du notable) seront répercutées dans les incidents Cortex.",
    "Incoming - Mirrors changes from the Vectra RUX Detection into the Cortex incident.":
      "Entrant - Met en miroir les modifications de Vectra RUX Detection dans l'incident Cortex.",
    "Incoming and Outgoing":
      "Entrant et sortant",
    "Incoming And Outgoing - Changes in Cortex incidents and Splunk findings will be reflected in both directions.":
      "Entrant et sortant - Les modifications apportées aux incidents Cortex et aux findings Splunk seront répercutées dans les deux sens.",
    "Incoming And Outgoing - Changes in Cortex incidents and Splunk notables will be reflected in both directions.":
      "Entrant et sortant - Les modifications apportées aux incidents Cortex et aux notables Splunk seront répercutées dans les deux sens.",
    "Incoming And Outgoing - Mirrors changes both Incoming and Outgoing directions on incidents.":
      "Entrant et sortant - Met en miroir les modifications dans les sens entrant et sortant sur les incidents.",
    "Indicator Field":
      "Champ d'indicateur",
    "Indicator Thresholds":
      "Seuils des indicateurs",
    "Indicator Types":
      "Types d'indicateur",
    "Indicators with positive results equal to or higher than half of the threshold value, and lower than the threshold, will be considered suspicious.":
      "Les indicateurs dont les résultats positifs sont supérieurs ou égaux à la moitié de la valeur du seuil et inférieurs au seuil seront considérés comme suspects.",
    "Indicators with positive results equal to or higher than the threshold will be considered malicious.":
      "Les indicateurs dont les résultats positifs sont supérieurs ou égaux au seuil seront considérés comme malveillants.",
    "Ingest Incidents from a SIEM Using Splunk article":
      "Article sur l'ingestion d'incidents depuis un SIEM avec Splunk",
    "Ingests Vectra AI detections as Cortex incidents enriched with entity-level risk prioritization from Attack Signal Intelligence. Priority is persistent and updates as threats evolve - high-risk detections stay surfaced until resolved. Bidirectional synchronization keeps incident state aligned across both platforms in real time.":
      "Ingère les détections Vectra AI sous forme d'incidents Cortex enrichis par la priorisation des risques au niveau des entités d'Attack Signal Intelligence. La priorité est persistante et évolue avec les menaces : les détections à haut risque restent affichées jusqu'à leur résolution. La synchronisation bidirectionnelle maintient l'état des incidents aligné sur les deux plateformes en temps réel.",
    "Initial Fetch":
      "Récupération initiale",
    "Initial Fetch Interval (In minutes, used only for first fetch or after Reset last run)":
      "Intervalle de récupération initiale (en minutes, utilisé uniquement pour la première récupération ou après Reset last run)",
    "Initial fetching history (in minutes)":
      "Historique de récupération initiale (en minutes)",
    "Input the API key to access the sandbox.":
      "Saisissez la clé API pour accéder au sandbox.",
    "Input the url of SecneurX Analysis server.":
      "Saisissez l'URL du serveur SecneurX Analysis.",
    "Install the Workflows app in Microsoft Teams":
      "Installer l'application Workflows dans Microsoft Teams",
    "Instance Configuration":
      "Configuration de l'instance",
    "Instance Date Format":
      "Format de date de l'instance",
    "Integrate Cloud Security with your MongoDB Atlas Account to gain comprehensive visibility into any data and posture risk existing in your MongoDB Atlas environment. This integration enables automated scanning of all assets in MongoDB Atlas, including data classification and risk assessment.":
      "Intégrez Cloud Security à votre compte MongoDB Atlas pour obtenir une visibilité complète sur tous les risques liés aux données et à la posture présents dans votre environnement MongoDB Atlas. Cette intégration permet l'analyse automatisée de tous les actifs de MongoDB Atlas, y compris la classification des données et l'évaluation des risques.",
    "Integrate Cloud Security with your Snowflake Account to gain comprehensive visibility into any data and posture risk existing in your Snowflake environment.This integration enables automated scanning of all assets in Snowflake,including data classification and risk assessment.":
      "Intégrez Cloud Security à votre compte Snowflake pour obtenir une visibilité complète sur tous les risques liés aux données et à la posture présents dans votre environnement Snowflake. Cette intégration permet l'analyse automatisée de tous les actifs de Snowflake, y compris la classification des données et l'évaluation des risques.",
    "Integration documentation":
      "Documentation de l'intégration",
    "Integration flow":
      "Flux de l'intégration",
    "Integration with Intel Security’s ePolicy Orchestrator using the official API.":
      "Intégration avec ePolicy Orchestrator d'Intel Security à l'aide de l'API officielle.",
    "Interactive terminal mode":
      "Mode terminal interactif",
    "Investigations fetch query":
      "Requête de récupération des investigations",
    "IP Malicious Threshold. Minimum number of positive results from VT scanners to consider the IP malicious.":
      "Seuil d'IP malveillante. Nombre minimum de résultats positifs des scanners VT pour considérer l'IP comme malveillante.",
    "IP Relationships":
      "Relations IP",
    "IP Suspicious Threshold. Minimum number of positive and suspicious results from VT scanners to consider the IP suspicious.":
      "Seuil d'IP suspecte. Nombre minimum de résultats positifs et suspects des scanners VT pour considérer l'IP comme suspecte.",
    "IP Threshold. Minimum number of positive results from VT scanners to consider the IP malicious.":
      "Seuil d'IP. Nombre minimum de résultats positifs des scanners VT pour considérer l'IP comme malveillante.",
    "IP Threshold. Minimum risk score from ThreatX to consider the IP malicious.":
      "Seuil d'IP. Score de risque minimum de ThreatX pour considérer l'IP comme malveillante.",
    "JWT Authentication":
      "Authentification JWT",
    "JWT Authentication.":
      "Authentification JWT.",
    "JWT Signing Algorithm":
      "Algorithme de signature JWT",
    "Keep the defaults for fetch limit, first fetch timestamp, earliest time to fetch, and latest time to fetch.":
      "Conservez les valeurs par défaut pour la limite de récupération, l'horodatage de la première récupération, l'heure de début de récupération et l'heure de fin de récupération.",
    "Keep the Get notable events EQ query as is, as we use the Notable macro when ingesting events. You can create a more granular search by specifying specific conditions such as specific security domain, event ID, etc.":
      "Conservez la requête Get notable events EQ telle quelle, car nous utilisons la macro Notable lors de l'ingestion des événements. Vous pouvez créer une recherche plus granulaire en spécifiant des conditions précises, telles qu'un domaine de sécurité ou un ID d'événement spécifique, etc.",
    "Kenna API key":
      "Clé API Kenna",
    "Key (received from the admin consent - see Detailed Instructions (?)":
      "Clé (reçue lors du consentement de l'administrateur - voir les instructions détaillées (?)",
    "Key Algorithms":
      "Algorithmes de clé",
    "Key Features":
      "Fonctionnalités clés",
    "Key ID":
      "ID de clé",
    "Key or Client Secret (can be used instead of Certificate Thumbprint and Private Key)":
      "Clé ou secret client (peut être utilisé à la place de l'empreinte du certificat et de la clé privée)",
    "Kibana API Port":
      "Port de l'API Kibana",
    "Languages":
      "Langues",
    "Last Incident ID (for initial fetch)":
      "ID du dernier incident (pour la récupération initiale)",
    "Last Run":
      "Dernière exécution",
    "Lastly, copy the API key.":
      "Enfin, copiez la clé API.",
    "Limit of indicators to fetch from livehunt notification. Max 40.":
      "Limite d'indicateurs à récupérer à partir de la notification livehunt. Maximum 40.",
    "Limit of indicators to fetch from retrohunt job results.":
      "Limite d'indicateurs à récupérer à partir des résultats du job retrohunt.",
    "Limitations":
      "Limitations",
    "Limitions":
      "Limitations",
    "List of domains to block":
      "Liste des domaines à bloquer",
    "Lists all of the security vulnerabilities for various products (OS,Applications) etc)":
      "Répertorie toutes les failles de sécurité de divers produits (SE, applications, etc.)",
    "Located in the Firewall URL; by default of PAN-OS it is vsys1":
      "Se trouve dans l'URL du pare-feu ; par défaut dans PAN-OS, il s'agit de vsys1",
    "Located in the Panorama UI. Go to Panorama, Device Groups and select the desired Device Group":
      "Se trouve dans l'interface Panorama. Accédez à Panorama, Device Groups et sélectionnez le Device Group souhaité",
    "Log access — Access log files. You can either provide the client log access API or add a syslog receiver.":
      "Accès aux journaux — Accédez aux fichiers journaux. Vous pouvez fournir l'API d'accès aux journaux du client ou ajouter un récepteur syslog.",
    "Log in to Kibana.":
      "Connectez-vous à Kibana.",
    "Log in to the Carbon Black console as the user for which you want to get the API key.":
      "Connectez-vous à la console Carbon Black en tant qu'utilisateur pour lequel vous souhaitez obtenir la clé API.",
    "Log in to the Vectra UI as this local user.":
      "Connectez-vous à l'interface Vectra en tant que cet utilisateur local.",
    "Log in to your (Kenna account)[https://app.kennasecurity.com].":
      "Connectez-vous à votre (compte Kenna)[https://app.kennasecurity.com].",
    "Log in to your BloodHound Enterprise (BHE) tenant.":
      "Connectez-vous à votre tenant BloodHound Enterprise (BHE).",
    "Log in to your Magnet Automate interface.":
      "Connectez-vous à votre interface Magnet Automate.",
    "Log in to your Panorays platform.":
      "Connectez-vous à votre plateforme Panorays.",
    "Log in to your Splunk instance as an administrator":
      "Connectez-vous à votre instance Splunk en tant qu'administrateur",
    "Log in to your VirusTotal console.":
      "Connectez-vous à votre console VirusTotal.",
    "Log Type Query":
      "Requête de type de journal",
    "Log Type Query Examples":
      "Exemples de requêtes de type de journal",
    "Log Type Query.":
      "Requête de type de journal.",
    "Login to the RiskSense platform.":
      "Connectez-vous à la plateforme RiskSense.",
    "Long running instance enabled":
      "Instance de longue durée activée",
    "Lookback Parameter Notes":
      "Remarques sur le paramètre lookback",
    "Mail server hostname or IP address":
      "Nom d'hôte ou adresse IP du serveur de messagerie",
    "Maintain a consistent incident lifecycle between Threatmon and XSOAR.":
      "Maintenez un cycle de vie des incidents cohérent entre Threatmon et XSOAR.",
    "Make sure the toggle at the bottom is switched on.":
      "Assurez-vous que le bouton bascule en bas est activé.",
    "Manage PingOne users and their authentication settings through the PingOne Management API.":
      "Gérez les utilisateurs PingOne et leurs paramètres d'authentification via l'API PingOne Management.",
    "Map the severity of each indicator that will be synced to Cortex.":
      "Mappez la gravité de chaque indicateur qui sera synchronisé avec Cortex.",
    "Mapping limitations for XSOAR users below 6.0.0":
      "Limitations du mappage pour les utilisateurs de XSOAR antérieurs à la version 6.0.0",
    "Mattermost server address (e.g. https://1.2.3.4:8065)":
      "Adresse du serveur Mattermost (par ex. https://1.2.3.4:8065)",
    "Max fetch":
      "Récupération maximale",
    "Max Fetch":
      "Récupération maximale",
    "Max incidents per fetch (for each selected Log Type Query)":
      "Nombre maximal d'incidents par récupération (pour chaque requête de type de journal sélectionnée)",
    "Max number of events per incident":
      "Nombre maximal d'événements par incident",
    "Maximum API requests per minute":
      "Nombre maximal de requêtes d'API par minute",
    "Maximum events to fetch per fetch":
      "Nombre maximal d'événements à récupérer par récupération",
    "Maximum incidents per fetch per type":
      "Nombre maximal d'incidents par récupération et par type",
    "Maximum investigations per fetch":
      "Nombre maximal d'investigations par récupération",
    "Maximum is limited to 200.":
      "Le maximum est limité à 200.",
    "Maximum number of assets to fetch":
      "Nombre maximal d'actifs à récupérer",
    "Maximum number of entries returned from the query, to avoid slow response.":
      "Nombre maximal d'entrées renvoyées par la requête, afin d'éviter des réponses lentes.",
    "Maximum number of events per fetch":
      "Nombre maximal d'événements par récupération",
    "Maximum number of events to fetch per type per fetch cycle (default: 5000).":
      "Nombre maximal d'événements à récupérer par type et par cycle de récupération (par défaut : 5000).",
    "Maximum number of incidents per fetch":
      "Nombre maximal d'incidents par récupération",
    "Maximum number of incidents to fetch":
      "Nombre maximal d'incidents à récupérer",
    "Maximum Number Of Incidents To Fetch":
      "Nombre maximal d'incidents à récupérer",
    "Maximum number of incidents to fetch per run":
      "Nombre maximal d'incidents à récupérer par exécution",
    "Maximum time to wait for a page to load (in seconds)":
      "Délai maximal d'attente du chargement d'une page (en secondes)",
    "Maximum time to wait for a rate limiting call in seconds":
      "Délai maximal d'attente d'un appel soumis à une limitation de débit, en secondes",
    "McAfee ePO Server URI":
      "URI du serveur McAfee ePO",
    "MCP Server Name":
      "Nom du serveur MCP",
    "Methods to Authenticate Microsoft Defender XDR":
      "Méthodes d'authentification de Microsoft Defender XDR",
    "MFA can be used both when using basic authorization and when using OAuth 2.0 authorization, however we strongly recommend using OAuth 2.0 when using MFA.":
      "L'authentification multifacteur (MFA) peut être utilisée aussi bien avec l'autorisation de base qu'avec l'autorisation OAuth 2.0 ; nous vous recommandons toutefois vivement d'utiliser OAuth 2.0 avec la MFA.",
    "MFA can be used both when using basic authorization and when using OAuth 2.0 authorization, however, we strongly recommend using OAuth 2.0 when using MFA.":
      "L'authentification multifacteur (MFA) peut être utilisée aussi bien avec l'autorisation de base qu'avec l'autorisation OAuth 2.0 ; nous vous recommandons toutefois vivement d'utiliser OAuth 2.0 avec la MFA.",
    "Microsoft 365 Defender context":
      "Contexte Microsoft 365 Defender",
    "Microsoft documentation":
      "Documentation Microsoft",
    "Microsoft integrations (Graph and Azure) in Cortex use Entra ID applications to authenticate with Microsoft APIs. These integrations use OAuth 2.0 and OpenID Connect standard-compliant authentication services, which use an application to sign in or delegate authentication. For more information, see the Microsoft identity platform overview.":
      "Les intégrations Microsoft (Graph et Azure) dans Cortex utilisent des applications Entra ID pour s'authentifier auprès des API Microsoft. Ces intégrations utilisent des services d'authentification conformes aux normes OAuth 2.0 et OpenID Connect, qui font appel à une application pour se connecter ou déléguer l'authentification. Pour plus d'informations, consultez Microsoft identity platform overview.",
    "Microsoft integrations (Graph and Azure) in Cortex use Entra ID applications to authenticate with Microsoft APIs. These integrations use OAuth 2.0 and OpenID Connect standard-compliant authentication services, which use an Application to sign in or delegate authentication. For more information, see the Microsoft identity platform overview.":
      "Les intégrations Microsoft (Graph et Azure) dans Cortex utilisent des applications Entra ID pour s'authentifier auprès des API Microsoft. Ces intégrations utilisent des services d'authentification conformes aux normes OAuth 2.0 et OpenID Connect, qui font appel à une application pour se connecter ou déléguer l'authentification. Pour plus d'informations, consultez Microsoft identity platform overview.",
    "Microsoft Management Activity API (O365/Azure Events) should be used to retrieve content records from the various Microsoft Management Activity content types.":
      "Microsoft Management Activity API (événements O365/Azure) doit être utilisée pour récupérer les enregistrements de contenu des différents types de contenu Microsoft Management Activity.",
    "Microsoft Teams Documentation":
      "Documentation Microsoft Teams",
    "Microsoft workflow URL":
      "URL du workflow Microsoft",
    "Microsoft’s technical blog":
      "Blog technique de Microsoft",
    "Might have to slightly change the existing logic for some of their custom entities configured for Splunk (Playbooks, Mappers, Pre-Processing Rules, Scripts, Classifiers, etc.) in order for them to work with the modified structure of the fetched events.":
      "Il peut être nécessaire de modifier légèrement la logique existante de certaines de leurs entités personnalisées configurées pour Splunk (Playbooks, mappeurs, règles de prétraitement, scripts, classificateurs, etc.) afin qu'elles fonctionnent avec la structure modifiée des événements récupérés.",
    "Mimecast Documentation":
      "Documentation Mimecast",
    "Mimecast uses quotas per period of time (i.e. rate limits) that apply to every API function, per registered App. A typical quota is a number of API calls per unit of time (but could also be expressed as the size of data returned, etc.). When the quota has been exhausted, further requests will fail until the new time period restarts the count of API calls. The rate limit reset value is the length of time in milliseconds before a minimum of 1 API will be permitted.":
      "Mimecast utilise des quotas par période (c'est-à-dire des limites de débit) qui s'appliquent à chaque fonction d'API, par application enregistrée. Un quota type correspond à un nombre d'appels d'API par unité de temps (mais il peut aussi être exprimé en taille des données renvoyées, etc.). Lorsque le quota est épuisé, les requêtes suivantes échouent jusqu'à ce que la nouvelle période redémarre le décompte des appels d'API. La valeur de réinitialisation de la limite de débit correspond à la durée, en millisecondes, avant qu'au moins 1 appel d'API soit autorisé.",
    "Mimecast uses quotas per period of time (i.e., rate limits) that apply to every API function, per registered app. A typical quota is a number of API calls per unit of time (but could also be expressed as the size of data returned, etc.). When the quota has been exhausted, further requests will fail until the new time period restarts the count of API calls. The rate limit reset value is the length of time in milliseconds before a minimum of one API will be permitted.":
      "Mimecast utilise des quotas par période (c'est-à-dire des limites de débit) qui s'appliquent à chaque fonction d'API, par application enregistrée. Un quota type correspond à un nombre d'appels d'API par unité de temps (mais il peut aussi être exprimé en taille des données renvoyées, etc.). Lorsque le quota est épuisé, les requêtes suivantes échouent jusqu'à ce que la nouvelle période redémarre le décompte des appels d'API. La valeur de réinitialisation de la limite de débit correspond à la durée, en millisecondes, avant qu'au moins 1 appel d'API soit autorisé.",
    "Min severity [1-4] 1=low":
      "Gravité minimale [1-4] 1=faible",
    "Mirror Offense and Events":
      "Mettre en miroir les infractions et les événements",
    "Mirror tag for notes":
      "Balise de mise en miroir pour les notes",
    "Mirroring Direction":
      "Sens de la mise en miroir",
    "Mirroring offenses with events":
      "Mise en miroir des infractions avec les événements",
    "Mirroring Options":
      "Options de mise en miroir",
    "Model (optional free text override)":
      "Modèle (remplacement facultatif en texte libre)",
    "MongoDB Atlas (Posture) Instance":
      "Instance MongoDB Atlas (Posture)",
    "MongoDB Atlas Organization ID":
      "ID de l'organisation MongoDB Atlas",
    "More information can be found on https://cortex.marketplace.pan.dev/marketplace/details/MicrosoftDefenderAdvancedThreatProtection/":
      "Vous trouverez plus d'informations sur https://cortex.marketplace.pan.dev/marketplace/details/MicrosoftDefenderAdvancedThreatProtection/",
    "Most fields are optional and we allow empty subject and empty body":
      "La plupart des champs sont facultatifs et l'objet et le corps peuvent être vides",
    "My API Key":
      "Ma clé API",
    "My MongoDB Atlas account is protected by network policies":
      "Mon compte MongoDB Atlas est protégé par des stratégies réseau",
    "My Snowflake account is protected by network policies":
      "Mon compte Snowflake est protégé par des stratégies réseau",
    "Name of the folder from which to fetch incidents (supports Folder ID and sub-folders e.g., Inbox/Phishing)":
      "Nom du dossier à partir duquel récupérer les incidents (prend en charge l'ID de dossier et les sous-dossiers, par exemple Inbox/Phishing)",
    "Name of the folder or sub-folder from which to fetch incidents":
      "Nom du dossier ou du sous-dossier à partir duquel récupérer les incidents",
    "Name of the instance":
      "Nom de l'instance",
    "New notes from the Vectra Detection will be created as notes in the XSOAR incident. Updates to existing notes in the Vectra Detection will create new notes in the XSOAR incident.":
      "Les nouvelles notes de Vectra Detection seront créées en tant que notes dans l'incident XSOAR. Les mises à jour des notes existantes dans Vectra Detection créeront de nouvelles notes dans l'incident XSOAR.",
    "New notes from the XSOAR incident will be created as notes in the Vectra Detection. Updates to existing notes in the XSOAR incident will not be reflected in the Vectra Detection.":
      "Les nouvelles notes de l'incident XSOAR seront créées en tant que notes dans Vectra Detection. Les mises à jour des notes existantes dans l'incident XSOAR ne seront pas répercutées dans Vectra Detection.",
    "Newly fetched incidents will be mirrored in the chosen direction.":
      "Les incidents nouvellement récupérés seront mis en miroir dans le sens choisi.",
    "None - Turns off incident mirroring.":
      "Aucun - Désactive la mise en miroir des incidents.",
    "Note for the autofocus-sample-analysis Command":
      "Remarque concernant la commande autofocus-sample-analysis",
    "Note that the default query values has some example text in it, make sure to enter a valid query.":
      "Notez que les valeurs de requête par défaut contiennent du texte d'exemple ; veillez à saisir une requête valide.",
    "Note: Cortex recommends you use the Query only application events configured in IAM Configuration option to generate the fetch-incidents query filter. The following following method should be used primarily for debugging purposes.":
      "Remarque : Cortex recommande d'utiliser l'option « Query only application events configured in IAM Configuration » pour générer le filtre de requête fetch-incidents. La méthode suivante doit être utilisée principalement à des fins de débogage.",
    "Note: If you are using a custom incident type, you also need to create custom corresponding incoming and outgoing mappers.":
      "Remarque : si vous utilisez un type d'incident personnalisé, vous devez également créer les mappeurs entrant et sortant personnalisés correspondants.",
    "Note: If you have a TIM license that is up-to-date, you do not need to set up an API key.":
      "Remarque : si vous disposez d'une licence TIM à jour, vous n'avez pas besoin de configurer de clé API.",
    "Note: In the example, Splunk Generic is a custom incident type.":
      "Remarque : dans l'exemple, Splunk Generic est un type d'incident personnalisé.",
    "Note: JWT authentication method was deprecated by Zoom from June 2023 and not available anymore.":
      "Remarque : la méthode d'authentification JWT est obsolète chez Zoom depuis juin 2023 et n'est plus disponible.",
    "NOTE: The enrichment and mirroring mechanisms use a new default fetch query.":
      "Remarque : les mécanismes d'enrichissement et de mise en miroir utilisent une nouvelle requête de récupération par défaut.",
    "Note: The integration is supported in Cortex and Cortex XSIAM without using an engine.":
      "Remarque : l'intégration est prise en charge dans Cortex et Cortex XSIAM sans utiliser de moteur.",
    "Note: This is a beta Integration, which lets you implement and test pre-release software. Since the integration is beta, it might contain bugs. Updates to the integration during the beta phase might include non-backward compatible features. We appreciate your feedback on the quality and usability of the integration to help us identify issues, fix them, and continually improve.":
      "Remarque : il s'agit d'une intégration bêta, qui vous permet de mettre en œuvre et de tester des logiciels en préversion. Comme l'intégration est en version bêta, elle peut contenir des bogues. Les mises à jour de l'intégration pendant la phase bêta peuvent inclure des fonctionnalités non rétrocompatibles. Nous apprécions vos commentaires sur la qualité et la facilité d'utilisation de l'intégration, qui nous aident à identifier les problèmes, à les corriger et à nous améliorer en continu.",
    "Note: This parameter is only used when close detection on incident closer is 'checked' and the mirroring direction is set to 'Outgoing' or 'Incoming And Outgoing'.":
      "Remarque : ce paramètre n'est utilisé que lorsque close detection on incident closer est 'checked' et que le sens de la mise en miroir est défini sur 'Outgoing' ou 'Incoming And Outgoing'.",
    "Note: This parameter is only used when open detection on incident reopen is 'checked' and the mirroring direction is set to 'Outgoing' or 'Incoming And Outgoing'.":
      "Remarque : ce paramètre n'est utilisé que lorsque open detection on incident reopen est 'checked' et que le sens de la mise en miroir est défini sur 'Outgoing' ou 'Incoming And Outgoing'.",
    "Note: This parameter is only used when the mirroring direction is set to 'Outgoing' or 'Incoming And Outgoing'.":
      "Remarque : ce paramètre n'est utilisé que lorsque le sens de la mise en miroir est défini sur 'Outgoing' ou 'Incoming And Outgoing'.",
    "Note: This will not affect existing incidents.":
      "Remarque : cela n'affectera pas les incidents existants.",
    "Note: When upgrading from v1 (MITRE IDs Feed) to v2 (MITRE ATT&CK) - disabling the MITRE IDs Feed indicator type, and instance are important for the smooth flow of the upgrade.":
      "Remarque : lors de la mise à niveau de la v1 (MITRE IDs Feed) vers la v2 (MITRE ATT&CK), il est important de désactiver le type d'indicateur et l'instance MITRE IDs Feed pour que la mise à niveau se déroule sans problème.",
    "Notice: Submitting indicators using the following commands of this integration might make the indicator data publicly available.":
      "Avis : l'envoi d'indicateurs à l'aide des commandes suivantes de cette intégration peut rendre les données des indicateurs accessibles publiquement.",
    "Notifications channel":
      "Canal de notifications",
    "Notifications channel (You will need to invite the Demisto Bot user to this channel)":
      "Canal de notifications (vous devrez inviter l'utilisateur Demisto Bot sur ce canal)",
    "Number of addresses to enrich per API call":
      "Nombre d'adresses à enrichir par appel d'API",
    "Number of connection error retries":
      "Nombre de nouvelles tentatives en cas d'erreur de connexion",
    "Number of days before hire date to enable Active Directory account":
      "Nombre de jours avant la date d'embauche pour activer le compte Active Directory",
    "Number of days before hire date to sync hires":
      "Nombre de jours avant la date d'embauche pour synchroniser les recrues",
    "Number of Events Per Enrichment Type":
      "Nombre d'événements par type d'enrichissement",
    "Number of incidents per fetch.":
      "Nombre d'incidents par récupération.",
    "Number of maximum Chrome instances to keep running simultaneously.":
      "Nombre maximal d'instances Chrome à conserver en cours d'exécution simultanément.",
    "Number of maximum tabs each Chrome will be allowed to open.":
      "Nombre maximal d'onglets que chaque Chrome est autorisé à ouvrir.",
    "Number of offenses to pull per API call":
      "Nombre d'infractions à extraire par appel d'API",
    "Number of offenses to pull per API call (max 50)":
      "Nombre d'infractions à extraire par appel d'API (max. 50)",
    "OAuth 2.0 Authorization":
      "Autorisation OAuth 2.0",
    "OAuth 2.0 authorization.":
      "Autorisation OAuth 2.0.",
    "OAuth2 Credentials":
      "Identifiants OAuth2",
    "Obtain the API Key":
      "Obtention de la clé API",
    "Obtaining API Credentials":
      "Obtention des identifiants API",
    "OCR engine.":
      "Moteur OCR.",
    "Offense Enrichment":
      "Enrichissement des infractions",
    "Offenses":
      "Infractions",
    "Okta API Scopes":
      "Étendues de l'API Okta",
    "Okta API tokens are used to authenticate requests to Okta APIs.":
      "Les jetons d'API Okta sont utilisés pour authentifier les requêtes adressées aux API Okta.",
    "Okta documentation":
      "Documentation Okta",
    "Okta URL (https://<domain>.okta.com)":
      "URL Okta (https://<domain>.okta.com)",
    "Only applies when Findings scope is \"Supplier Findings\". Only findings with these severities create incidents.":
      "S'applique uniquement lorsque Findings scope est « Supplier Findings ». Seuls les résultats présentant ces niveaux de gravité créent des incidents.",
    "Only fetch events with this text in the name":
      "Récupérer uniquement les événements dont le nom contient ce texte",
    "Only use Features that are available in On-Premise installations":
      "Utiliser uniquement les fonctionnalités disponibles dans les installations sur site",
    "Open Detection on Incident Reopen":
      "Ouvrir la détection à la réouverture de l'incident",
    "Open the Google Authenticator application on your mobile device and make note of the number. The number refreshes every 30 seconds.":
      "Ouvrez l'application Google Authenticator sur votre appareil mobile et notez le numéro. Le numéro est actualisé toutes les 30 secondes.",
    "Open the Illusive Management console, navigate to Settings > General, and locate the API KEYS section. Generate a new API key with all permissions and copy the token at the end of the process.":
      "Ouvrez la console Illusive Management, accédez à Settings > General et repérez la section API KEYS. Générez une nouvelle clé API avec toutes les autorisations et copiez le jeton à la fin du processus.",
    "OpenDXL documentation":
      "Documentation OpenDXL",
    "Optional":
      "Facultatif",
    "Optional - Welcome message when creating new incidents using the bot. If left empty (default option) the current default welcome message will be used, i.e., \"Successfully created incident <incident_name>. View it on: <incident_link>\". If the parameter is set to \"no_welcome_message\" value, no message will be displayed. Any non-empty string value set will be used as the custom new incident welcome message.":
      "Facultatif - Message de bienvenue lors de la création de nouveaux incidents à l'aide du bot. Si ce champ est laissé vide (option par défaut), le message de bienvenue par défaut actuel sera utilisé, à savoir « Successfully created incident <incident_name>. View it on: <incident_link> ». Si le paramètre est défini sur la valeur « no_welcome_message », aucun message ne sera affiché. Toute valeur de chaîne non vide définie sera utilisée comme message de bienvenue personnalisé pour les nouveaux incidents.",
    "Other Sources of WildFire API keys":
      "Autres sources de clés API WildFire",
    "Outgoing - Any changes in Cortex incidents (finding’s status (not status_label), urgency, comments, and owner) will be reflected in Splunk findings.":
      "Outgoing - Toute modification apportée aux incidents Cortex (statut du résultat (et non status_label), urgence, commentaires et propriétaire) sera répercutée dans les résultats Splunk.",
    "Outgoing - Any changes in Cortex incidents (notable’s status (not status_label), urgency, comments, and owner) will be reflected in Splunk notables.":
      "Outgoing - Toute modification apportée aux incidents Cortex (statut du notable (et non status_label), urgence, commentaires et propriétaire) sera répercutée dans les notables Splunk.",
    "Outgoing - Mirrors changes from the Cortex incident to the Vectra RUX Detection.":
      "Outgoing - Met en miroir les modifications de l'incident Cortex vers Vectra RUX Detection.",
    "Output results of V1 commands to the context data in the old format":
      "Envoyer les résultats des commandes V1 vers les données de contexte dans l'ancien format",
    "Override Agent":
      "Remplacer l'agent",
    "Override the agent header sent with WildFire API requests. auto = auto-detect based on platform (XSOAR/XSIAM), xdr = Cortex XSIAM, xsoartim = XSOAR TIM, pcc = Prisma Cloud Compute, prismaaccessapi = Prisma Access, other = NGFW":
      "Remplace l'en-tête d'agent envoyé avec les requêtes de l'API WildFire. auto = détection automatique selon la plateforme (XSOAR/XSIAM), xdr = Cortex XSIAM, xsoartim = XSOAR TIM, pcc = Prisma Cloud Compute, prismaaccessapi = Prisma Access, other = NGFW",
    "Package resolution for code scanning":
      "Résolution des packages pour l'analyse du code",
    "Palo Alto Networks documentation":
      "Documentation Palo Alto Networks",
    "Palo Alto recommends that you configure Splunk to produce basic alerts that the SplunkPy integration can ingest, by creating a summary index in which alerts are stored. The SplunkPy integration can then query that index for incident ingestion. It is not recommended to use the Cortex application with Splunk for routine event consumption because this method is not able to be monitored and is not scalable.":
      "Palo Alto recommande de configurer Splunk pour qu'il génère des alertes de base que l'intégration SplunkPy peut ingérer, en créant un index récapitulatif dans lequel les alertes sont stockées. L'intégration SplunkPy peut ensuite interroger cet index pour l'ingestion des incidents. Il n'est pas recommandé d'utiliser l'application Cortex avec Splunk pour la consommation courante d'événements, car cette méthode ne peut pas être surveillée et n'est pas évolutive.",
    "Palo Alto recommends that you configure Splunk to produce basic alerts that the SplunkPy v2 integration can ingest, by creating a summary index in which alerts are stored. The SplunkPy v2 integration can then query that index for incident ingestion. It is not recommended to use the Cortex application with Splunk for routine event consumption because this method is not able to be monitored and is not scalable.":
      "Palo Alto recommande de configurer Splunk pour qu'il génère des alertes de base que l'intégration SplunkPy v2 peut ingérer, en créant un index récapitulatif dans lequel les alertes sont stockées. L'intégration SplunkPy v2 peut ensuite interroger cet index pour l'ingestion des incidents. Il n'est pas recommandé d'utiliser l'application Cortex avec Splunk pour la consommation courante d'événements, car cette méthode ne peut pas être surveillée et n'est pas évolutive.",
    "PAN support":
      "Assistance PAN",
    "Pan-OS/Panorama API Key":
      "Clé API Pan-OS/Panorama",
    "Pan-OS/Panorama Server URL":
      "URL du serveur Pan-OS/Panorama",
    "Panorays PAPI base URL":
      "URL de base de PAPI de Panorays",
    "Parameter":
      "Paramètre",
    "Password - Used to generate the certificate":
      "Mot de passe - Utilisé pour générer le certificat",
    "Password (Required for Basic authentication only)":
      "Mot de passe (obligatoire uniquement pour l'authentification de base)",
    "Password / Access Key Secret":
      "Mot de passe / Secret de la clé d'accès",
    "Password / Client Secret":
      "Mot de passe / Secret client",
    "Paste the Api Token copied from Orca":
      "Collez le jeton d'API copié depuis Orca",
    "Paste your Terraform Enterprise token and domain name in the fields below":
      "Collez votre jeton Terraform Enterprise et votre nom de domaine dans les champs ci-dessous",
    "PingOne has 3 regions, US, EU and Asia.":
      "PingOne comporte 3 régions : US, EU et Asia.",
    "PingOne Region":
      "Région PingOne",
    "Please make sure you have the correct role so you have permissions to work with the relevant table.":
      "Assurez-vous de disposer du rôle approprié afin d'avoir les autorisations nécessaires pour travailler avec la table concernée.",
    "Please refer to the documentation for a list of known endpoints.":
      "Consultez la documentation pour obtenir la liste des points de terminaison connus.",
    "Port (e.g 443)":
      "Port (par exemple 443)",
    "Preferred Vendor Threshold. The minimum number of highly trusted vendors required to consider a domain, IP address, URL, or file as malicious.":
      "Seuil de fournisseurs privilégiés. Nombre minimal de fournisseurs hautement fiables requis pour considérer un domaine, une adresse IP, une URL ou un fichier comme malveillant.",
    "Preferred Vendors List. CSV list of vendors which are considered more trustworthy.":
      "Liste des fournisseurs privilégiés. Liste CSV des fournisseurs considérés comme plus fiables.",
    "Preferred Vendors List. CSV list of vendors who are considered more trustworthy.":
      "Liste des fournisseurs privilégiés. Liste CSV des fournisseurs considérés comme plus fiables.",
    "Premium Subscription":
      "Abonnement Premium",
    "Premium Subscription Only: Relationship Malicious Files Threshold":
      "Abonnement Premium uniquement : seuil de fichiers malveillants de la relation",
    "Premium Subscription Only: Relationship Suspicious Files Threshold":
      "Abonnement Premium uniquement : seuil de fichiers suspects de la relation",
    "Prerequisite":
      "Prérequis",
    "Prerequisite - Connect to McAfee Threat Intelligence Exchange (TIE) using the DXL TIE Client":
      "Prérequis - Se connecter à McAfee Threat Intelligence Exchange (TIE) à l'aide de DXL TIE Client",
    "Prerequisites in order to support JWT":
      "Prérequis pour la prise en charge de JWT",
    "Prisma Access & NGFW Configuration":
      "Configuration de Prisma Access et du NGFW",
    "Prisma Access API Key from Panorama":
      "Clé API Prisma Access de Panorama",
    "Prisma Cloud service tenant admin console URL. The URL for the Prisma Cloud service varies depending on the cluster on which your tenant is deployed. For more information see: https://pan.dev/prisma-cloud/api/cspm/api-urls/.":
      "URL de la console d'administration du tenant du service Prisma Cloud. L'URL du service Prisma Cloud varie selon le cluster sur lequel votre tenant est déployé. Pour plus d'informations, consultez : https://pan.dev/prisma-cloud/api/cspm/api-urls/.",
    "Private Key (Required for HTTPS)":
      "Clé privée (obligatoire pour HTTPS)",
    "Private url is https://private.tria.ge/api/v0/":
      "L'URL privée est https://private.tria.ge/api/v0/",
    "Proofpoint on Demand (PoD) administrators must file a support ticket to Proofpoint support to obtain a role with access to an API.":
      "Les administrateurs de Proofpoint on Demand (PoD) doivent soumettre un ticket d'assistance au support Proofpoint afin d'obtenir un rôle avec accès à une API.",
    "Proofpoint Protection Server Version (e.g., 8.14.2)":
      "Version de Proofpoint Protection Server (par exemple 8.14.2)",
    "Provide a Client Name and Role, then click “Generate Credentials”.":
      "Indiquez un Client Name et un Role, puis cliquez sur « Generate Credentials ».",
    "Provide a name for the token and set an expiration time (optional)":
      "Indiquez un nom pour le jeton et définissez une durée d'expiration (facultatif)",
    "Provide server URL and API Token.":
      "Indiquez l'URL du serveur et le jeton d'API.",
    "Provide server URL, ‘Live Response’ API key and connector.":
      "Indiquez l'URL du serveur, la clé API « Live Response » et le connecteur.",
    "Provides a list of versions by product name or id":
      "Fournit une liste de versions par nom ou ID de produit",
    "Provides all or specific vendor details to include vendor name and id":
      "Fournit les détails de tous les fournisseurs ou d'un fournisseur spécifique, notamment le nom et l'ID du fournisseur",
    "Provides full details about a specific vulnerability by id":
      "Fournit tous les détails d'une vulnérabilité spécifique par ID",
    "Provides full details about a specific vulnerability by vendor and product id":
      "Fournit tous les détails d'une vulnérabilité spécifique par ID de fournisseur et de produit",
    "Provides full details about a specific vulnerability by vendor and product name":
      "Fournit tous les détails d'une vulnérabilité spécifique par nom de fournisseur et de produit",
    "Provides full details about vulnerabilities by cve id":
      "Fournit tous les détails des vulnérabilités par ID CVE",
    "Provides full details about vulnerabilities by product id":
      "Fournit tous les détails des vulnérabilités par ID de produit",
    "Provides full details about vulnerabilities by vendor id":
      "Fournit tous les détails des vulnérabilités par ID de fournisseur",
    "Provides the recent vulnerabilities by dates or hours":
      "Fournit les vulnérabilités récentes par dates ou heures",
    "Provides the versions for the specified product by product name or id":
      "Fournit les versions du produit spécifié par nom ou ID de produit",
    "Proxy URL":
      "URL du proxy",
    "Proxy URL password":
      "Mot de passe de l'URL du proxy",
    "Proxy URL Password":
      "Mot de passe de l'URL du proxy",
    "Proxy URL to use in Slack API calls":
      "URL du proxy à utiliser dans les appels à l'API Slack",
    "Proxy URL username":
      "Nom d'utilisateur de l'URL du proxy",
    "Proxy URL Username":
      "Nom d'utilisateur de l'URL du proxy",
    "Public key / Private key":
      "Clé publique / clé privée",
    "PUBLIC KEYS":
      "CLÉS PUBLIQUES",
    "Push events from Cortex to Splunk":
      "Envoyer les événements de Cortex vers Splunk",
    "QRadar API Version":
      "Version de l'API QRadar",
    "QRadar API versions page":
      "Page des versions de l'API QRadar",
    "QRadar filter documentation":
      "Documentation sur les filtres QRadar",
    "QRadar Filter Syntax Documentation":
      "Documentation sur la syntaxe des filtres QRadar",
    "QRadar offense documentation":
      "Documentation sur les infractions QRadar",
    "QRadar Offense Documentation":
      "Documentation sur les infractions QRadar",
    "Quarantine management — Quarantine assets and restore quarantined assets.":
      "Gestion de la quarantaine : mettez des actifs en quarantaine et restaurez les actifs en quarantaine.",
    "Query all CVEs monitored by ThreatMon, including CVSS v2, v3, v3.1, and v4 scores.":
      "Interrogez tous les CVE surveillés par ThreatMon, y compris les scores CVSS v2, v3, v3.1 et v4.",
    "Query and response with Carbon Black endpoint detection and response.":
      "Interrogation et réponse avec la détection et la réponse sur les endpoints de Carbon Black.",
    "Query CVEs affecting products the company is subscribed to.":
      "Interrogez les CVE affectant les produits auxquels l'entreprise est abonnée.",
    "Query Example":
      "Exemple de requête",
    "Query to fetch offenses":
      "Requête pour récupérer les infractions",
    "Query URL":
      "URL de la requête",
    "Rasterize Mode":
      "Mode de rastérisation",
    "Rate Limiting":
      "Limitation de débit",
    "Rate Limits":
      "Limites de débit",
    "Recommended for private/on-prem.":
      "Recommandé pour les environnements privés/sur site.",
    "Red Teaming operations require accepting the End User License Agreement.":
      "Les opérations de Red Teaming nécessitent d'accepter le Contrat de licence utilisateur final.",
    "Redirect URL":
      "URL de redirection",
    "Refresh Token":
      "Jeton d'actualisation",
    "Reliability of the source providing intelligence data":
      "Fiabilité de la source fournissant les données de renseignement",
    "Request data removal for Black Market Monitoring findings directly from XSOAR playbooks.":
      "Demandez la suppression des données pour les résultats de Black Market Monitoring directement depuis les Playbooks XSOAR.",
    "Request timeout":
      "Délai d'expiration de la requête",
    "Request Timeout":
      "Délai d'expiration de la requête",
    "Request timeout (in seconds)":
      "Délai d'expiration de la requête (en secondes)",
    "Request timeout (in seconds).":
      "Délai d'expiration de la requête (en secondes).",
    "Require Demonstrating Proof of Possession (DPoP) header in token requests":
      "Exiger l'en-tête Demonstrating Proof of Possession (DPoP) dans les demandes de jeton",
    "Required and used if more than one key is used for signing JWT tokens.":
      "Obligatoire et utilisé si plusieurs clés servent à signer les jetons JWT.",
    "Required and used if OAuth 2.0 is used for authentication. See detailed instructions on the 'Help' tab.":
      "Obligatoire et utilisé si OAuth 2.0 sert à l'authentification. Consultez les instructions détaillées dans l'onglet 'Aide'.",
    "Required Scopes":
      "Scopes requis",
    "Required when choosing an external engine. You must enable Long running instance to run the web server on this port from within Cortex. Requires a unique port for each long-running integration instance. Do not use the same port for multiple instances.":
      "Obligatoire lors du choix d'un moteur externe. Vous devez activer l'instance de longue durée pour exécuter le serveur web sur ce port depuis Cortex. Un port unique est requis pour chaque instance d'intégration de longue durée. N'utilisez pas le même port pour plusieurs instances.",
    "Requirements":
      "Prérequis",
    "Requires a server URL, and an API key":
      "Nécessite une URL de serveur et une clé API",
    "Reset the “last run”":
      "Réinitialiser le « last run »",
    "Resetting the enriching fetch mechanism":
      "Réinitialisation du mécanisme de récupération d'enrichissement",
    "Retrieve Your API Key":
      "Récupérer votre clé API",
    "Retry requests when API is rate limited":
      "Réessayer les requêtes lorsque l'API est soumise à une limitation de débit",
    "Return Errors":
      "Renvoyer les erreurs",
    "Return Errors: If this checkbox is not selected, a warning will be returned instead of an error entry.":
      "Renvoyer les erreurs : si cette case n'est pas cochée, un avertissement sera renvoyé à la place d'une entrée d'erreur.",
    "Run the command":
      "Exécutez la commande",
    "Run this query to fetch new events as incidents":
      "Exécutez cette requête pour récupérer les nouveaux événements en tant qu'incidents",
    "Runtime API Key":
      "Clé API d'exécution",
    "Save changes":
      "Enregistrer les modifications",
    "Save intrusion sets as threat actor indicator types":
      "Enregistrer les ensembles d'intrusion en tant que types d'indicateur d'acteur de la menace",
    "Scanner API Base URL":
      "URL de base de l'API du scanner",
    "Scanner API base URL for runtime scanning operations. Default is US region. For other regions: EU: https://service-de.api.aisecurity.paloaltonetworks.com, IN: https://service-in.api.aisecurity.paloaltonetworks.com, SG: https://service-sg.api.aisecurity.paloaltonetworks.com. This must match the region selected during deployment profile creation.":
      "URL de base de l'API du scanner pour les opérations d'analyse à l'exécution. La valeur par défaut correspond à la région des États-Unis. Pour les autres régions : EU : https://service-de.api.aisecurity.paloaltonetworks.com, IN : https://service-in.api.aisecurity.paloaltonetworks.com, SG : https://service-sg.api.aisecurity.paloaltonetworks.com. Elle doit correspondre à la région sélectionnée lors de la création du profil de déploiement.",
    "Scope (Required for using Cortex Azure app)":
      "Scope (obligatoire pour utiliser l'application Cortex Azure)",
    "Search and Compliance URL":
      "URL de recherche et de conformité",
    "Search for SplunkPy and select your integration instance.":
      "Recherchez SplunkPy et sélectionnez votre instance d'intégration.",
    "Search for SplunkPy v2 and select your integration instance.":
      "Recherchez SplunkPy v2 et sélectionnez votre instance d'intégration.",
    "Search for VulnDB.":
      "Recherchez VulnDB.",
    "Seconds to sleep between checking for results":
      "Nombre de secondes d'attente entre deux vérifications des résultats",
    "Secret token":
      "Jeton secret",
    "Secret Token":
      "Jeton secret",
    "Secret Token(Team Chat App)":
      "Jeton secret (Team Chat App)",
    "See detailed instructions on the 'Help' tab.":
      "Consultez les instructions détaillées dans l'onglet 'Aide'.",
    "See the vendor’s documentation for more details.":
      "Pour plus de détails, consultez la documentation du fournisseur.",
    "Select Scan Type":
      "Sélectionner le type d'analyse",
    "Select SSL certificate validation and Proxy if required.":
      "Sélectionnez la validation du certificat SSL et le proxy si nécessaire.",
    "Select the “Detection Close Reason for Incident Closure” option if you want to set the detection close reason in Vectra when the incident is closed in XSOAR. Default value is ‘Remediated’. This option is only used when the “Close Detection on Incident Closure” option is checked and the mirroring direction is set to ‘Outgoing’ or ‘Incoming And Outgoing’.":
      "Sélectionnez l'option « Detection Close Reason for Incident Closure » si vous souhaitez définir le motif de fermeture de la détection dans Vectra lorsque l'incident est fermé dans XSOAR. La valeur par défaut est ‘Remediated’. Cette option n'est utilisée que lorsque l'option « Close Detection on Incident Closure » est cochée et que le sens de mise en miroir est défini sur ‘Outgoing’ ou ‘Incoming And Outgoing’.",
    "Select the “Detection Status for Incident Reopen” option if you want to set the detection status in Vectra when the incident is reopened in XSOAR. Default value is ‘Escalated’. This option is only used when the “Open Detection on Incident Reopen” option is checked and the mirroring direction is set to ‘Outgoing’ or ‘Incoming And Outgoing’.":
      "Sélectionnez l'option « Detection Status for Incident Reopen » si vous souhaitez définir le statut de la détection dans Vectra lorsque l'incident est rouvert dans XSOAR. La valeur par défaut est ‘Escalated’. Cette option n'est utilisée que lorsque l'option « Open Detection on Incident Reopen » est cochée et que le sens de mise en miroir est défini sur ‘Outgoing’ ou ‘Incoming And Outgoing’.",
    "Select the date format of your ServiceNow instance. Mandatory when using the `Use Display Value` option. More details under the troubleshooting section in the documentation of the integration. The integration supports the ServiceNow default time format (full form) `HH:mm:ss` with support to `a` notation for AM/PM.":
      "Sélectionnez le format de date de votre instance ServiceNow. Obligatoire lorsque vous utilisez l'option `Use Display Value`. Vous trouverez plus de détails dans la section de dépannage de la documentation de l'intégration. L'intégration prend en charge le format d'heure par défaut de ServiceNow (forme complète) `HH:mm:ss`, avec la notation `a` pour AM/PM.",
    "Select the field that determines when to trigger a termination incident for deactivated employees.":
      "Sélectionnez le champ qui détermine quand déclencher un incident de départ pour les employés désactivés.",
    "Select the list of relationships to retrieve from the API. Note that relationships that are signed with * key are available only for the VirusTotal premium API key.":
      "Sélectionnez la liste des relations à récupérer depuis l'API. Notez que les relations marquées d'un * ne sont disponibles qu'avec la clé API premium de VirusTotal.",
    "Select this checkbox if to use OAuth 2.0 authentication. See (?) for more information.":
      "Cochez cette case pour utiliser l'authentification OAuth 2.0. Consultez (?) pour plus d'informations.",
    "Select this checkbox to retrieve comments and work notes without accessing the `sys_field_journal` table.":
      "Cochez cette case pour récupérer les commentaires et les notes de travail sans accéder à la table `sys_field_journal`.",
    "Select this checkbox to retrieve the body of an email in HTML format. If this checkbox is not selected, a psuedo-text representation of HTML emails will be returned and some functionality in other packs (e.g., email previews in the Email Communication pack) may not provide their full capabilities.":
      "Cochez cette case pour récupérer le corps d'un e-mail au format HTML. Si cette case n'est pas cochée, une représentation en pseudo-texte des e-mails HTML sera renvoyée et certaines fonctionnalités d'autres packs (p. ex., les aperçus d'e-mail du pack Email Communication) risquent de ne pas offrir toutes leurs capacités.",
    "Select this checkbox to use JWT authentication. See (?) for more information.":
      "Cochez cette case pour utiliser l'authentification JWT. Consultez (?) pour plus d'informations.",
    "Select this option if the bot was originally created as multi-tenant and later converted to single-tenant. The system will detect the bot type automatically in all other standard cases.":
      "Sélectionnez cette option si le bot a été créé à l'origine en multi-tenant puis converti en single-tenant. Le système détecte automatiquement le type de bot dans tous les autres cas standard.",
    "Select which domains you would like to pull indicators from. Additionally, each domain has a subset of “concepts”. Most of the domains have all of the concepts, with the exception of the “PRE-ATT&CK” domain. There are only a small subset of “concepts” within this domain. Any concept that does not exist will be skipped.":
      "Sélectionnez les domaines à partir desquels vous souhaitez extraire des indicateurs. De plus, chaque domaine comporte un sous-ensemble de « concepts ». La plupart des domaines contiennent tous les concepts, à l'exception du domaine « PRE-ATT&CK ». Ce domaine ne contient qu'un petit sous-ensemble de « concepts ». Tout concept inexistant sera ignoré.",
    "Select which event types to fetch from KOI.":
      "Sélectionnez les types d'événements à récupérer depuis KOI.",
    "Select which log types to fetch.":
      "Sélectionnez les types de journaux à récupérer.",
    "Select which log types to fetch. Selecting 'All' will use all the log type queries in the fetch. To choose a specific set of queries, select their log types from the dropdown (make sure the 'All' option is unselected).":
      "Sélectionnez les types de journaux à récupérer. Si vous sélectionnez 'All', toutes les requêtes de types de journaux seront utilisées lors de la récupération. Pour choisir un ensemble spécifique de requêtes, sélectionnez leurs types de journaux dans la liste déroulante (assurez-vous que l'option 'All' n'est pas sélectionnée).",
    "Select which record types to fetch. You can select Alerts, Incidents, or both.":
      "Sélectionnez les types d'enregistrements à récupérer. Vous pouvez sélectionner des alertes, des incidents ou les deux.",
    "Select your instance.":
      "Sélectionnez votre instance.",
    "Selecting 'All' will use all the log type queries in the fetch.":
      "Si vous sélectionnez 'All', toutes les requêtes de types de journaux seront utilisées lors de la récupération.",
    "Selecting “All” will use all the log type queries in the fetch.":
      "Si vous sélectionnez « All », toutes les requêtes de types de journaux seront utilisées lors de la récupération.",
    "Self-serve pay-as-you-go keys are entitled to all six by default.":
      "Les clés en libre-service avec paiement à l'usage donnent droit aux six par défaut.",
    "Send emails including support for rich emails with HTML and embedded files.":
      "Envoyez des e-mails, avec prise en charge des e-mails enrichis contenant du HTML et des fichiers intégrés.",
    "Send notifications about incidents to the dedicated channel":
      "Envoyer des notifications sur les incidents au canal dédié",
    "Sender address":
      "Adresse de l'expéditeur",
    "Sender address can be specified as 'user@host.com' or 'Full Name <user@host.com>'":
      "L'adresse de l'expéditeur peut être spécifiée sous la forme 'user@host.com' ou 'Full Name <user@host.com>'",
    "Server Address":
      "Adresse du serveur",
    "Server base URL":
      "URL de base du serveur",
    "Server base URL (e.g., https://192.168.0.1/publicapi)":
      "URL de base du serveur (p. ex., https://192.168.0.1/publicapi)",
    "Server Host or IP":
      "Hôte ou IP du serveur",
    "Server Host or IP (e.g., 10.1.1.9 or panorama.my.domain)":
      "Hôte ou IP du serveur (p. ex., 10.1.1.9 ou panorama.my.domain)",
    "Server IP / Hostname (e.g. 1.2.3.4)":
      "IP / nom d'hôte du serveur (p. ex., 1.2.3.4)",
    "Server NetBIOS (AD) Name":
      "Nom NetBIOS (AD) du serveur",
    "Server Port":
      "Port du serveur",
    "Server URL (e.g. 'https://api.zoom.us/v2/')":
      "URL du serveur (p. ex., 'https://api.zoom.us/v2/')",
    "Server URL (e.g. https://192.168.0.1:20013)":
      "URL du serveur (p. ex., https://192.168.0.1:20013)",
    "Server URL (e.g. https://analysis.lastline.com)":
      "URL du serveur (p. ex., https://analysis.lastline.com)",
    "Server URL (e.g. https://api.kennasecurity.com)":
      "URL du serveur (p. ex., https://api.kennasecurity.com)",
    "Server URL (e.g. https://example.net)":
      "URL du serveur (p. ex., https://example.net)",
    "Server URL (e.g. https://vxsuz5.manage.trendmicro.com)":
      "URL du serveur (p. ex., https://vxsuz5.manage.trendmicro.com)",
    "Server URL (e.g., 'https://api.zoom.us/v2/')":
      "URL du serveur (p. ex., 'https://api.zoom.us/v2/')",
    "Server URL (e.g., https://192.0.2.0:8080)":
      "URL du serveur (p. ex., https://192.0.2.0:8080)",
    "Server URL (e.g., https://192.168.0.1:10000)":
      "URL du serveur (p. ex., https://192.168.0.1:10000)",
    "Server URL (e.g., https://api.securitycenter.microsoft.com)":
      "URL du serveur (p. ex., https://api.securitycenter.microsoft.com)",
    "Server URL (e.g., https://cloud.vmray.com)":
      "URL du serveur (p. ex., https://cloud.vmray.com)",
    "Server URL (e.g., https://demisto.zendesk.com)":
      "URL du serveur (p. ex., https://demisto.zendesk.com)",
    "Server URL (e.g., https://xxxxxxxx.pphosted.com:10000)":
      "URL du serveur (p. ex., https://xxxxxxxx.pphosted.com:10000)",
    "Server URL used to enter the Sophos XG Firewall web console. e.g., https://ip:port/":
      "URL du serveur utilisée pour accéder à la console web de Sophos XG Firewall. Par exemple, https://ip:port/",
    "Service Key (for triggering events only)":
      "Clé de service (pour le déclenchement d'événements uniquement)",
    "Service Key (for triggering, acknowledging and resolving events only)":
      "Clé de service (pour le déclenchement, l'acquittement et la résolution d'événements uniquement)",
    "ServiceNow API Version (e.g. 'v1')":
      "Version de l'API ServiceNow (p. ex., 'v1')",
    "ServiceNow API Version (e.g. 'v1'). Specify this value to use an endpoint version other than the latest.":
      "Version de l'API ServiceNow (p. ex., 'v1'). Spécifiez cette valeur pour utiliser une version de endpoint autre que la plus récente.",
    "ServiceNow docs":
      "Documentation ServiceNow",
    "ServiceNow Instance":
      "Instance ServiceNow",
    "ServiceNow Instance URL":
      "URL de l'instance ServiceNow",
    "ServiceNow ticket column to be set as the incident name. Default is the incident number":
      "Colonne du ticket ServiceNow à définir comme nom de l'incident. La valeur par défaut est le numéro de l'incident",
    "ServiceNow URL (https://<domain>.service-now.com)":
      "URL ServiceNow (https://<domain>.service-now.com)",
    "ServiceNow URL, in the format https://company.service-now.com/":
      "URL ServiceNow, au format https://company.service-now.com/",
    "ServiceNowGenericFeed fetches records from a ServiceNow CMDB API endpoint and ingests them as indicators into Cortex TIM with user desired tags.":
      "ServiceNowGenericFeed récupère des enregistrements depuis un endpoint de l'API ServiceNow CMDB et les ingère sous forme d'indicateurs dans Cortex TIM avec les tags souhaités par l'utilisateur.",
    "Set the “Detection Close Reason for Incident Closure” option to set the detection close reason in Vectra when the incident is closed in XSOAR. Default value is ‘Benign’. This option is only used when the “Close Detection on Incident Closure” option is checked and the mirroring direction is set to ‘Outgoing’ or ‘Incoming And Outgoing’.":
      "Configurez l'option « Detection Close Reason for Incident Closure » pour définir le motif de fermeture de la détection dans Vectra lorsque l'incident est fermé dans XSOAR. La valeur par défaut est ‘Benign’. Cette option n'est utilisée que lorsque l'option « Close Detection on Incident Closure » est cochée et que le sens de mise en miroir est défini sur ‘Outgoing’ ou ‘Incoming And Outgoing’.",
    "Set the “Detection Status for Incident Reopen” option to set the detection status in Vectra when the incident is reopened in XSOAR. Default value is ‘Escalated’. This option is only used when the “Open Detection on Incident Reopen” option is checked and the mirroring direction is set to ‘Outgoing’ or ‘Incoming And Outgoing’.":
      "Configurez l'option « Detection Status for Incident Reopen » pour définir le statut de la détection dans Vectra lorsque l'incident est rouvert dans XSOAR. La valeur par défaut est ‘Escalated’. Cette option n'est utilisée que lorsque l'option « Open Detection on Incident Reopen » est cochée et que le sens de mise en miroir est défini sur ‘Outgoing’ ou ‘Incoming And Outgoing’.",
    "Set the DBot Score Threshold to a number between 1 and 100 (default is 70). Any IP addresses associated with an Entity queried with a ThreatX score greater than or equal to the DBot Score Threshold will be assigned a DBot Score of 3 (Malicious).":
      "Définissez le DBot Score Threshold sur un nombre compris entre 1 et 100 (la valeur par défaut est 70). Toutes les adresses IP associées à une entité interrogée avec un score ThreatX supérieur ou égal au DBot Score Threshold se verront attribuer un DBot Score de 3 (Malicious).",
    "Set the fetch interval and enable fetching":
      "Définissez l'intervalle de récupération et activez la récupération",
    "Set the Incidents Fetch Interval to a maximum of 15 minutes if the number of incidents is expected to exceed the specified max fetch limit in each fetch cycle.":
      "Définissez l'Incidents Fetch Interval sur 15 minutes maximum si le nombre d'incidents devrait dépasser la limite maximale de récupération spécifiée à chaque cycle de récupération.",
    "Set up a SpecterOps BloodHound Enterprise integration instance":
      "Configurer une instance d'intégration SpecterOps BloodHound Enterprise",
    "Sets the AWS_STS_REGIONAL_ENDPOINTS environment variable to specify the AWS STS endpoint resolution logic. By default, this option is set to “legacy” in AWS. Leave empty if the environment variable is already set using server configuration.":
      "Définit la variable d'environnement AWS_STS_REGIONAL_ENDPOINTS pour spécifier la logique de résolution des endpoints AWS STS. Par défaut, cette option est définie sur « legacy » dans AWS. Laissez ce champ vide si la variable d'environnement est déjà définie via la configuration du serveur.",
    "Setting the lookback parameter will fetch duplicated incidents in the event that incidents that fall out during the given look-back time were already fetched.":
      "La définition du paramètre lookback entraîne la récupération d'incidents en double si les incidents qui sortent de la période de rétrospection indiquée ont déjà été récupérés.",
    "Setup Instructions":
      "Instructions de configuration",
    "Setup Steps":
      "Étapes de configuration",
    "Sever URLs":
      "URL des serveurs",
    "Shodan is a search engine for Internet-connected devices. Unlike traditional search engines that index websites, Shodan indexes information about the devices connected to the internet, such as servers, routers, webcams, and other IoT devices.":
      "Shodan est un moteur de recherche pour les appareils connectés à Internet. Contrairement aux moteurs de recherche traditionnels qui indexent les sites web, Shodan indexe des informations sur les appareils connectés à Internet, tels que les serveurs, les routeurs, les webcams et d'autres appareils IoT.",
    "Should anyone be allowed to create incidents by DM":
      "Autoriser n'importe qui à créer des incidents par message privé",
    "Sigma and Intrusion Detection Rules Threshold":
      "Seuil des règles Sigma et de détection d'intrusion",
    "Sign in to Okta Admin Console.":
      "Connectez-vous à Okta Admin Console.",
    "Sign in to the Tenzai application.":
      "Connectez-vous à l'application Tenzai.",
    "Site security monitoring, external sharing controls, and document compliance for SharePoint":
      "Surveillance de la sécurité des sites, contrôles du partage externe et conformité des documents pour SharePoint",
    "Skip on corrupted images":
      "Ignorer les images corrompues",
    "Slack (Deprecated)":
      "Slack (obsolète)",
    "Slack API access token":
      "Jeton d'accès à l'API Slack",
    "Slack API bot token":
      "Jeton de bot de l'API Slack",
    "Slack API Token for channel creation":
      "Jeton de l'API Slack pour la création de canaux",
    "Slack Bot API token":
      "Jeton d'API du bot Slack",
    "Slack Documentation":
      "Documentation Slack",
    "Slack v2 (Deprecated)":
      "Slack v2 (obsolète)",
    "Slack V3 utilizes “Socket Mode” to enable the integration to communicate directly with Slack for mirroring.":
      "Slack V3 utilise « Socket Mode » pour permettre à l'intégration de communiquer directement avec Slack pour la mise en miroir.",
    "SMTP Port":
      "Port SMTP",
    "SMTP Sender":
      "Expéditeur SMTP",
    "Snow documentation":
      "Documentation Snow",
    "Source Priority Level":
      "Niveau de priorité de la source",
    "Specify a unique name for the API client.":
      "Spécifiez un nom unique pour le client API.",
    "Splunk Token":
      "Jeton Splunk",
    "Splunk token-based authentication":
      "Authentification Splunk basée sur des jetons",
    "SSH Certificate":
      "Certificat SSH",
    "SSH connection":
      "Connexion SSH",
    "SSH Credentials for CLI":
      "Identifiants SSH pour la CLI",
    "SSH credentials should be your username and password for the PAN-OS CLI - they can be tested using a standalone SSH client to verify that you are able to connect to the CLI on the SSH port.":
      "Les identifiants SSH doivent être votre nom d'utilisateur et votre mot de passe pour la CLI PAN-OS. Vous pouvez les tester avec un client SSH autonome afin de vérifier que vous pouvez vous connecter à la CLI sur le port SSH.",
    "SSH Port":
      "Port SSH",
    "Step 1: Login and add your authorization code":
      "Étape 1 : connectez-vous et ajoutez votre code d'autorisation",
    "Step 2: Activate the API.":
      "Étape 2 : activez l'API.",
    "Steps to follow":
      "Étapes à suivre",
    "Subdomain":
      "Sous-domaine",
    "Submission Server URL":
      "URL du serveur de soumission",
    "Submit Black Market Monitoring data removal requests — checks company credit rights and returns an appropriate error if the quota is exceeded.":
      "Envoyez des demandes de suppression de données Black Market Monitoring : vérifie les droits de crédit de l'entreprise et renvoie une erreur appropriée si le quota est dépassé.",
    "Submit takedown requests for eligible findings (Phishing Domains, Rogue Mobile Apps, Fake Social Media Accounts).":
      "Envoyez des demandes de retrait pour les résultats éligibles (domaines de phishing, applications mobiles malveillantes, faux comptes de réseaux sociaux).",
    "Submit takedown requests for eligible threat findings.":
      "Envoyez des demandes de retrait pour les résultats de menaces éligibles.",
    "Sumo Logic URL (region specific), for example: https://api.us2.sumologic.com/api/":
      "URL de Sumo Logic (spécifique à la région), par exemple : https://api.us2.sumologic.com/api/",
    "Supplier finding severities":
      "Gravités des résultats du fournisseur",
    "Supplier finding statuses":
      "Statuts des résultats du fournisseur",
    "Supplier Findings":
      "Résultats du fournisseur",
    "Support for Multiple Teams":
      "Prise en charge de plusieurs équipes",
    "Support for template replacement variables using {var} syntax":
      "Prise en charge des variables de remplacement de modèle avec la syntaxe {var}",
    "Supported Authentication Methods":
      "Méthodes d'authentification prises en charge",
    "Supported formats: 2 minutes, 2 hours, 2 days, 2 weeks, 2 months, 2 years, yyyy-mm-dd, yyyy-mm-ddTHH:MM:SSZ.":
      "Formats pris en charge : 2 minutes, 2 hours, 2 days, 2 weeks, 2 months, 2 years, yyyy-mm-dd, yyyy-mm-ddTHH:MM:SSZ.",
    "Supported Indicators":
      "Indicateurs pris en charge",
    "Supported REST API versions":
      "Versions de l'API REST prises en charge",
    "Supports automated playbooks for streamlined response.":
      "Prend en charge les Playbooks automatisés pour une réponse simplifiée.",
    "Supports folder ID and sub-folders, for example Inbox/Phishing.":
      "Prend en charge l'ID de dossier et les sous-dossiers, par exemple Inbox/Phishing.",
    "Suppress errors for non found indicators":
      "Supprimer les erreurs pour les indicateurs introuvables",
    "Sync Query":
      "Requête de synchronisation",
    "Sync user profiles on first run":
      "Synchroniser les profils utilisateur lors de la première exécution",
    "Sysdig Configuration":
      "Configuration de Sysdig",
    "Tag: The ruleset's name or the identifier for the YARA rule matching the file to fetch its notifications. Leave blank to fetch all.":
      "Tag : nom du jeu de règles ou identifiant de la règle YARA correspondant au fichier dont il faut récupérer les notifications. Laissez vide pour tout récupérer.",
    "Takedown Server URL":
      "URL du serveur de retrait",
    "Team name (e.g. my-team-name)":
      "Nom de l'équipe (par exemple, my-team-name)",
    "Template - Panorama instances only":
      "Modèle : instances Panorama uniquement",
    "Tenant ID (Required for using Self Deployed Azure app)":
      "ID du tenant (obligatoire pour utiliser une application Azure auto-déployée)",
    "Tenant Services Group ID":
      "ID du groupe de services du tenant",
    "Tenzai App URL (e.g., https://app.tenzai.io)":
      "URL de l'application Tenzai (par exemple, https://app.tenzai.io)",
    "Tenzai Server URL":
      "URL du serveur Tenzai",
    "Tenzai Server URL (e.g., https://api.tenzai.io)":
      "URL du serveur Tenzai (par exemple, https://api.tenzai.io)",
    "Terminal Type":
      "Type de terminal",
    "Terms and Conditions":
      "Conditions générales",
    "Test fails with a connection or timeout error.":
      "Le test échoue avec une erreur de connexion ou de délai d'attente.",
    "Test fails with an authorization error.":
      "Le test échoue avec une erreur d'autorisation.",
    "Test the connection":
      "Testez la connexion",
    "Test the integration. If successful, you’ll see a test message in the channel.":
      "Testez l'intégration. Si le test réussit, un message de test s'affiche dans le canal.",
    "The “Test” button does not fully validate all command functionality. To ensure the commands are working correctly, run each one and validate that API permissions are sufficient.":
      "Le bouton « Tester » ne valide pas entièrement toutes les fonctionnalités des commandes. Pour vous assurer que les commandes fonctionnent correctement, exécutez-les une par une et vérifiez que les autorisations de l'API sont suffisantes.",
    "The amount of time to go back when performing the first fetch, or when creating a mapping using the Select Schema option.":
      "Durée à remonter lors de la première récupération ou lors de la création d'un mappage avec l'option Select Schema.",
    "The API key can be found by going to your Hatching UI, clicking your account name in the top right, and the API key will be listed in the left hand side under “API Key”":
      "La clé API se trouve dans l'interface Hatching : cliquez sur le nom de votre compte en haut à droite, et la clé API s'affiche sur le côté gauche sous « API Key »",
    "The API key for authenticating with the KOI API. See the help section for instructions on creating an API key.":
      "La clé API pour l'authentification auprès de l'API KOI. Consultez la section d'aide pour savoir comment créer une clé API.",
    "The API Key to use for the connection":
      "La clé API à utiliser pour la connexion",
    "The API route of the requested information in ServiceNow":
      "La route d'API des informations demandées dans ServiceNow",
    "The authentication type and credentials to use: Basic Auth (Username and Password), Bearer Auth (Username and Password), or API Key Auth (API Key ID and API Key).":
      "Le type d'authentification et les identifiants à utiliser : Basic Auth (nom d'utilisateur et mot de passe), Bearer Auth (nom d'utilisateur et mot de passe) ou API Key Auth (ID de clé API et clé API).",
    "The backwards window is a way for you to configure the longest delay you would like to support.":
      "La fenêtre rétrospective vous permet de configurer le délai maximal que vous souhaitez prendre en charge.",
    "The base URL of the Tenzai API.":
      "L'URL de base de l'API Tenzai.",
    "The base URL of the Tenzai web app, used to build a deep link (referenceUrl) to the scan results. Leave empty to derive it from the Tenzai Server URL (the API and web-app hosts mirror each other); set it only to override that.":
      "L'URL de base de l'application web Tenzai, utilisée pour créer un lien direct (referenceUrl) vers les résultats d'analyse. Laissez vide pour la déduire de l'URL du serveur Tenzai (les hôtes de l'API et de l'application web se correspondent) ; ne la définissez que pour remplacer cette valeur.",
    "The best value to set depends on the delays that you see in your system (consult with your Splunk expert / master), the number of events in your system, and other network properties.":
      "La meilleure valeur à définir dépend des délais constatés dans votre système (consultez votre expert ou administrateur Splunk), du nombre d'événements dans votre système et d'autres propriétés réseau.",
    "The category of attack paths to fetch. Default is all.":
      "La catégorie de chemins d'attaque à récupérer. La valeur par défaut est toutes.",
    "The client machine name to identify the client to the server on a new connection.":
      "Le nom de la machine cliente permettant d'identifier le client auprès du serveur lors d'une nouvelle connexion.",
    "The connection security. The `SSL/TLS` first establishes a secure `SSL/TLS` connection and conducts SMTP over that connection, and STARTTLS starts with unencrypted SMTP and then switches to SSL/TLS to ensure security.":
      "La sécurité de la connexion. `SSL/TLS` établit d'abord une connexion `SSL/TLS` sécurisée et exécute SMTP sur cette connexion, tandis que STARTTLS commence par du SMTP non chiffré, puis bascule vers SSL/TLS pour garantir la sécurité.",
    "The date or relative timestamp from which to begin fetching events detections.":
      "La date ou l'horodatage relatif à partir duquel commencer à récupérer les détections d'événements.",
    "The date or relative timestamp from which to begin fetching events detections. Supported formats: 2 minutes, 2 hours, 2 days, 2 weeks, 2 months, 2 years, yyyy-mm-dd, yyyy-mm-ddTHH:MM:SSZ. For example: 01 Oct 2025, 01 Mar 2021 04:45:33, 2025-12-17T14:05:44Z.":
      "La date ou l'horodatage relatif à partir duquel commencer à récupérer les détections d'événements. Formats pris en charge : 2 minutes, 2 hours, 2 days, 2 weeks, 2 months, 2 years, yyyy-mm-dd, yyyy-mm-ddTHH:MM:SSZ. Par exemple : 01 Oct 2025, 01 Mar 2021 04:45:33, 2025-12-17T14:05:44Z.",
    "The default Jev model. Use a pinned version when playbook thresholds have been validated against that version.":
      "Le modèle Jev par défaut. Utilisez une version épinglée lorsque les seuils des Playbooks ont été validés pour cette version.",
    "The default region to use with the takedown Service.":
      "La région par défaut à utiliser avec le service de retrait.",
    "The default timeout (in seconds) for API calls. Default is 15 seconds.":
      "Le délai d'attente par défaut (en secondes) pour les appels d'API. La valeur par défaut est 15 secondes.",
    "The domain controller hostname. This is useful for environments with DFS servers as it is used to identify the DFS domain information automatically.":
      "Le nom d'hôte du contrôleur de domaine. Utile dans les environnements avec des serveurs DFS, car il sert à identifier automatiquement les informations du domaine DFS.",
    "The eDiscovery APIs in Microsoft Graph only work with eDiscovery (Premium) cases.":
      "Les API eDiscovery de Microsoft Graph ne fonctionnent qu'avec les cas eDiscovery (Premium).",
    "The environment from which to fetch attack paths. Default is all.":
      "L'environnement à partir duquel récupérer les chemins d'attaque. La valeur par défaut est tous.",
    "The fetched data may take up to 10 minutes to be ingested into the tenant after each fetch cycle.":
      "Les données récupérées peuvent mettre jusqu'à 10 minutes à être ingérées dans le tenant après chaque cycle de récupération.",
    "The field needed from the ServiceNow response which contains the indicator value":
      "Le champ requis de la réponse ServiceNow qui contient la valeur de l'indicateur",
    "The filtering works the same way as in the Prisma Cloud UI. When providing several values for the same filter it gets only alerts that have one of these values, and when providing different values, it gets only alerts that have all the stated field values.":
      "Le filtrage fonctionne de la même manière que dans l'interface de Prisma Cloud. Lorsque vous fournissez plusieurs valeurs pour le même filtre, seules les alertes ayant l'une de ces valeurs sont récupérées ; lorsque vous fournissez des valeurs pour des filtres différents, seules les alertes ayant toutes les valeurs de champ indiquées sont récupérées.",
    "The following features are not supported in non-ES (Enterprise Security) Splunk.":
      "Les fonctionnalités suivantes ne sont pas prises en charge dans Splunk hors ES (Enterprise Security).",
    "The format should be https://company.service-now.com/":
      "Le format doit être https://company.service-now.com/",
    "The format should be: [ssl://]<hostname>[:port]. Get the hostname and port from the `brokerlist.properties` file. The broker should be reachable from the Cortex server.":
      "Le format doit être [ssl://]<hostname>[:port]. Obtenez le nom d'hôte et le port à partir du fichier `brokerlist.properties`. Le broker doit être joignable depuis le serveur Cortex.",
    "The FQDN/IP of the IdentityIQ server to connect":
      "Le nom FQDN/l'adresse IP du serveur IdentityIQ auquel se connecter",
    "The FQDN/IP of the IdentityNow server to connect":
      "Le nom FQDN/l'adresse IP du serveur IdentityNow auquel se connecter",
    "The generated incidents are notifications from vt-private-livehunt-notifications-list.":
      "Les incidents générés sont des notifications de vt-private-livehunt-notifications-list.",
    "The header of an external form hyperlink.":
      "L'en-tête d'un lien hypertexte de formulaire externe.",
    "The host URL. When using this parameter, select the Custom option for the Azure Cloud. More information about National clouds can be found here - https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud":
      "L'URL de l'hôte. Lorsque vous utilisez ce paramètre, sélectionnez l'option Custom pour Azure Cloud. Vous trouverez plus d'informations sur les clouds nationaux ici : https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud",
    "The HTTP request timeout in seconds.":
      "Le délai d'attente de la requête HTTP en secondes.",
    "The incident name to give to the created incident":
      "Le nom d'incident à donner à l'incident créé",
    "The initial time to fetch from":
      "L'heure initiale à partir de laquelle récupérer",
    "The instance configuration URL based on the server location: <br/>US: https://api.aperture.paloaltonetworks.com<br/> EU: https://api.aperture-eu.paloaltonetworks.com<br/> APAC: https://api.aperture-apac.paloaltonetworks.com":
      "L'URL de configuration de l'instance selon l'emplacement du serveur : <br/>US: https://api.aperture.paloaltonetworks.com<br/> EU: https://api.aperture-eu.paloaltonetworks.com<br/> APAC: https://api.aperture-apac.paloaltonetworks.com",
    "The integration pulls the Mcafee SIEM triggered alarms that are unacknowledged.":
      "L'intégration récupère les alarmes déclenchées de McAfee SIEM qui n'ont pas été acquittées.",
    "The integration uses both the Panorama XML API and SSH into the PAN-OS CLI.":
      "L'intégration utilise à la fois l'API XML de Panorama et SSH vers la CLI de PAN-OS.",
    "The integration uses the Panorama XML API.":
      "L'intégration utilise l'API XML de Panorama.",
    "The interval for fetching attack paths.":
      "L'intervalle de récupération des chemins d'attaque.",
    "The iZOOlogic API server URL.":
      "L'URL du serveur de l'API iZOOlogic.",
    "The Kafka brokers to connect to, as a comma separated list, in the form: ip:port,ip2:port2":
      "Les brokers Kafka auxquels se connecter, sous forme de liste séparée par des virgules, au format : ip:port,ip2:port2",
    "The KOI API server URL.":
      "L'URL du serveur de l'API KOI.",
    "The max incidents per fetch parameter specifies the maximum number of incidents to fetch":
      "Le paramètre du nombre maximal d'incidents par récupération spécifie le nombre maximal d'incidents à récupérer",
    "The maximum number of events detections to fetch each time. If the value is greater than 200, it will be considered as 200. The maximum is 200.":
      "Le nombre maximal de détections d'événements à récupérer à chaque fois. Si la valeur est supérieure à 200, elle sera considérée comme égale à 200. Le maximum est 200.",
    "The maximum number of incidents per fetch":
      "Nombre maximal d'incidents par récupération",
    "The maximum number of incidents to fetch per Log Type Query. To ensure optimal efficiency, it is strongly advised to keep the limit as low as possible. The maximum is 5,000.":
      "Le nombre maximal d'incidents à récupérer par requête de type de journal. Pour garantir une efficacité optimale, il est fortement recommandé de maintenir la limite aussi basse que possible. Le maximum est 5 000.",
    "The maximum number of incidents to fetch per type per fetch cycle.":
      "Le nombre maximal d'incidents à récupérer par type et par cycle de récupération.",
    "The maximum number of incidents to retrieve per fetch cycle. Hard upper limit is 200. Increase if your environment ingests more PagerDuty incidents per fetch interval than the configured default.":
      "Le nombre maximal d'incidents à récupérer par cycle de récupération. La limite supérieure stricte est de 200. Augmentez cette valeur si votre environnement ingère plus d'incidents PagerDuty par intervalle de récupération que la valeur par défaut configurée.",
    "The maximum number of items to fetch per type. Applies to both alerts and incidents. Note that when fetching incidents, no more than 50 can be fetched per cycle, due to a Microsoft limitation.":
      "Le nombre maximal d'éléments à récupérer par type. S'applique à la fois aux alertes et aux incidents. Notez que lors de la récupération des incidents, il n'est pas possible d'en récupérer plus de 50 par cycle, en raison d'une limitation de Microsoft.",
    "The message to send to the user to ask for feedback.":
      "Le message à envoyer à l'utilisateur pour demander un retour.",
    "The mirroring direction in which to mirror the detections. You can mirror 'Incoming' (from Vectra to XSOAR), 'Outgoing' (from XSOAR to Vectra), or in both directions.":
      "Le sens de mise en miroir des détections. Vous pouvez mettre en miroir 'Incoming' (de Vectra vers XSOAR), 'Outgoing' (de XSOAR vers Vectra) ou dans les deux sens.",
    "The mirroring is strictly tied to Incident type “Vectra RUX Events Detection” & Incoming mapper “Vectra RUX - Incoming Mapper” If you want to change or use your custom incident type/mapper then make sure changes related to these are present.":
      "La mise en miroir est strictement liée au type d'incident « Vectra RUX Events Detection » et au mappeur entrant « Vectra RUX - Incoming Mapper ». Si vous souhaitez modifier ou utiliser votre propre type d'incident ou mappeur, assurez-vous que les modifications associées sont présentes.",
    "The mirroring settings apply only for incidents that are fetched after applying the settings.":
      "Les paramètres de mise en miroir ne s'appliquent qu'aux incidents récupérés après l'application des paramètres.",
    "The name of the lookup column containing the Cortex username.":
      "Le nom de la colonne de recherche contenant le nom d'utilisateur Cortex.",
    "The name of the lookup table containing the Splunk username.":
      "Le nom de la table de recherche contenant le nom d'utilisateur Splunk.",
    "The name of the lookup table in Splunk, containing the username's mapping data.":
      "Le nom de la table de recherche dans Splunk contenant les données de mappage des noms d'utilisateur.",
    "The name of the MCP server on the ServiceNow instance. Use `sn_mcp_server_default` for the preconfigured Quickstart Server.":
      "Le nom du serveur MCP sur l'instance ServiceNow. Utilisez `sn_mcp_server_default` pour le Quickstart Server préconfiguré.",
    "The number of objects to process. Maximum value is 500":
      "Le nombre d'objets à traiter. La valeur maximale est 500",
    "The number of times to try and re-create connections with rapid7 instance when there are temporary connection errors":
      "Le nombre de tentatives de recréation des connexions avec l'instance rapid7 en cas d'erreurs de connexion temporaires",
    "The OAuth 2.0 client ID from ZIdentity.":
      "L'ID client OAuth 2.0 de ZIdentity.",
    "The OAuth 2.0 client secret from ZIdentity.":
      "Le secret client OAuth 2.0 de ZIdentity.",
    "The operations are accessed through port 10000.":
      "Les opérations sont accessibles via le port 10000.",
    "The optional model name that overrides the selected model.":
      "Le nom de modèle facultatif qui remplace le modèle sélectionné.",
    "The Palo Alto Networks Best Practice Assessment (BPA) measures your usage of our Next-Generation Firewall (NGFW) and Panorama™ security management capabilities across your deployment, enabling you to make adjustments that maximize your return on investment and strengthen security.":
      "La Palo Alto Networks Best Practice Assessment (BPA) mesure votre utilisation de notre pare-feu de nouvelle génération (NGFW) et des fonctionnalités de gestion de la sécurité de Panorama™ dans l'ensemble de votre déploiement, ce qui vous permet d'effectuer des ajustements qui maximisent votre retour sur investissement et renforcent la sécurité.",
    "The Panorama integration now supports fetch incidents.":
      "L'intégration Panorama prend désormais en charge la récupération des incidents.",
    "The Panorays API permits 150 requests per minute and blocks the caller for one hour when that is exceeded. Keep this below 150.":
      "L'API Panorays autorise 150 requêtes par minute et bloque l'appelant pendant une heure en cas de dépassement. Maintenez cette valeur en dessous de 150.",
    "The parameter uses the AQL SELECT syntax. For more info see: https://www.ibm.com/support/knowledgecenter/en/SS42VS_7.3.3/com.ibm.qradar.doc/c_aql_intro.html":
      "Le paramètre utilise la syntaxe AQL SELECT. Pour plus d'informations, consultez : https://www.ibm.com/support/knowledgecenter/en/SS42VS_7.3.3/com.ibm.qradar.doc/c_aql_intro.html",
    "The per-request timeout for calls to the Tenzai API. Kept low so a stalled or unreachable host fails fast and the validation poll automation can reschedule instead of exceeding its execution timeout.":
      "Le délai d'attente par requête pour les appels à l'API Tenzai. Il est maintenu bas afin qu'un hôte bloqué ou injoignable échoue rapidement et que l'automatisation d'interrogation de validation puisse se reprogrammer au lieu de dépasser son délai d'exécution.",
    "The port for the Elastic API.":
      "Le port de l'API Elastic.",
    "The port for the Kibana API.":
      "Le port de l'API Kibana.",
    "The port in Splunk server which is open to the REST API calls.":
      "Le port du serveur Splunk ouvert aux appels de l'API REST.",
    "The possible values for severities can be found under “policy.severity” entry. In order to add a severity, use the filter name “policy.severity”":
      "Les valeurs possibles pour les gravités se trouvent dans l'entrée « policy.severity ». Pour ajouter une gravité, utilisez le nom de filtre « policy.severity »",
    "The queries that will be included during the fetch are decided according to the “Log Type” parameter (Multiple select dropdown).":
      "Les requêtes incluses lors de la récupération sont déterminées par le paramètre « Log Type » (liste déroulante à sélection multiple).",
    "The query to use when fetching incidents":
      "La requête à utiliser lors de la récupération des incidents",
    "The query used to collect indicators to sync from Cortex.":
      "La requête utilisée pour collecter les indicateurs à synchroniser depuis Cortex.",
    "The raw JSON string to use as the sample data":
      "La chaîne JSON brute à utiliser comme données d'exemple",
    "The redirect URI registered in the ServiceNow OAuth Inbound Integration. Must match the URI configured on the ServiceNow side.":
      "L'URI de redirection enregistré dans l'OAuth Inbound Integration de ServiceNow. Il doit correspondre à l'URI configuré côté ServiceNow.",
    "The required information is automatically retrieved from your Cortex TIM license.":
      "Les informations requises sont récupérées automatiquement à partir de votre licence Cortex TIM.",
    "The scope of the rule-set should be narrowed to catch only indicators that you want to analyze by a playbook.":
      "La portée du jeu de règles doit être restreinte afin de ne cibler que les indicateurs que vous souhaitez analyser avec un Playbook.",
    "The Server URL assigned to your organization. For example, www.acme.zslogin.net.":
      "L'URL du serveur attribuée à votre organisation. Par exemple, www.acme.zslogin.net.",
    "The server URL of your Magnet Automate instance.":
      "L'URL du serveur de votre instance Magnet Automate.",
    "The ServiceNow instance URL (e.g., `https://dev12345.service-now.com`).":
      "L'URL de l'instance ServiceNow (par exemple, `https://dev12345.service-now.com`).",
    "The Silent Push platform focuses on proactive threat intelligence and threat hunting. It offers a comprehensive view of global internet-facing infrastructure, helping organizations detect and counteract cyber threats before they manifest.":
      "La plateforme Silent Push se concentre sur le renseignement proactif sur les menaces et la chasse aux menaces. Elle offre une vue complète de l'infrastructure mondiale exposée à Internet, aidant les organisations à détecter et à contrer les cybermenaces avant qu'elles ne se concrétisent.",
    "The simplest way to acquire this token is for an Org Owner to create a new Slack app, add the admin OAuth scope, install the app, and use the generated token.":
      "Le moyen le plus simple d'obtenir ce jeton est qu'un Org Owner crée une nouvelle application Slack, ajoute la portée OAuth admin, installe l'application et utilise le jeton généré.",
    "The single mailbox this integration operates against. During authentication, ensure you are logged in to this email address. This mailbox is used by fetch-incidents and by all mail commands. Because this integration uses delegated permissions, it can only access this signed-in user's mailbox.":
      "La boîte aux lettres unique sur laquelle cette intégration opère. Lors de l'authentification, assurez-vous d'être connecté avec cette adresse e-mail. Cette boîte aux lettres est utilisée par fetch-incidents et par toutes les commandes de messagerie. Comme cette intégration utilise des autorisations déléguées, elle ne peut accéder qu'à la boîte aux lettres de l'utilisateur connecté.",
    "The Splunk search query by which to fetch events. The default query fetches ES finding events. You can edit this query to fetch other types of events. Note, that to fetch ES finding events, make sure to include the \\`notable\\` macro in your query.":
      "La requête de recherche Splunk utilisée pour récupérer les événements. La requête par défaut récupère les événements finding d'ES. Vous pouvez modifier cette requête pour récupérer d'autres types d'événements. Notez que pour récupérer les événements finding d'ES, vous devez inclure la macro `notable` dans votre requête.",
    "The Splunk search query by which to fetch events. The default query fetches ES notable events. You can edit this query to fetch other types of events. Note, that to fetch ES notable events, make sure to include the \\`notable\\` macro in your query.":
      "La requête de recherche Splunk utilisée pour récupérer les événements. La requête par défaut récupère les événements notable d'ES. Vous pouvez modifier cette requête pour récupérer d'autres types d'événements. Notez que pour récupérer les événements notable d'ES, vous devez inclure la macro `notable` dans votre requête.",
    "The Splunk server URL. Port 8089 (Splunk's default REST API port) is used automatically. Only include the port in the URL if using a non-default port. Examples: 'https://splunk.example.com' (uses default port 8089) or 'https://splunk.example.com:8090' (uses custom port 8090).":
      "L'URL du serveur Splunk. Le port 8089 (le port d'API REST par défaut de Splunk) est utilisé automatiquement. N'incluez le port dans l'URL que si vous utilisez un port autre que celui par défaut. Exemples : 'https://splunk.example.com' (utilise le port par défaut 8089) ou 'https://splunk.example.com:8090' (utilise le port personnalisé 8090).",
    "The Standard Authentication Profile of type Oauth should be already present in ServiceNow and has to be added to the Policy.":
      "Le profil d'authentification standard de type OAuth doit déjà exister dans ServiceNow et doit être ajouté à la politique.",
    "The statuses of PagerDuty incidents to ingest. Include \"resolved\" to capture short-lived incidents that move to resolved between fetch cycles.":
      "Les statuts des incidents PagerDuty à ingérer. Incluez « resolved » pour capturer les incidents de courte durée qui passent à l'état résolu entre deux cycles de récupération.",
    "The tag value should be used to mirror the detection note by adding the same tag in the notes.":
      "La valeur du tag doit être utilisée pour mettre en miroir la note de la détection en ajoutant le même tag dans les notes.",
    "The Tennant Service Group must contain an active “AIOps for NGFW (Free)” application.":
      "Le groupe de services du tenant doit contenir une application « AIOps for NGFW (Free) » active.",
    "The Tennant Service Group must contain an active “AIOps for NGFW (Free)” application. For more information about the service activation, visit the following link: https://docs.paloaltonetworks.com/ngfw/aiops/about/activate-aiops-for-ngfw#activate-aiops-for-ngfw_section_xjs_p55_fyb":
      "Le groupe de services du tenant doit contenir une application « AIOps for NGFW (Free) » active. Pour plus d'informations sur l'activation du service, consultez le lien suivant : https://docs.paloaltonetworks.com/ngfw/aiops/about/activate-aiops-for-ngfw#activate-aiops-for-ngfw_section_xjs_p55_fyb",
    "The Test button does not ensure sufficient permissions for all integration commands.":
      "Le bouton Tester ne garantit pas des autorisations suffisantes pour toutes les commandes de l'intégration.",
    "The Threatmon integration allows Cortex to connect with the Threatmon platform to automatically retrieve and update incident data. This integration is designed to help security teams streamline incident management workflows by synchronizing Threatmon alarms and their status directly into XSOAR.":
      "L'intégration Threatmon permet à Cortex de se connecter à la plateforme Threatmon pour récupérer et mettre à jour automatiquement les données d'incident. Cette intégration est conçue pour aider les équipes de sécurité à rationaliser leurs workflows de gestion des incidents en synchronisant les alarmes Threatmon et leur statut directement dans XSOAR.",
    "The ticket type can be: incident, problem, change_request, sc_request, sc_task or sc_req_item.":
      "Le type de ticket peut être : incident, problem, change_request, sc_request, sc_task ou sc_req_item.",
    "The time range between create_after and created_before that is sent to the API when fetching older incidents. If timeout errors occur, consider changing this value.":
      "La plage de temps entre create_after et created_before envoyée à l'API lors de la récupération d'anciens incidents. En cas d'erreurs de délai d'attente, envisagez de modifier cette valeur.",
    "The time range for the initial data fetch. If timeout errors occur, consider changing this value.":
      "La plage de temps de la récupération initiale des données. En cas d'erreurs de délai d'attente, envisagez de modifier cette valeur.",
    "The timeout for HTTP(S) requests (in seconds) to the Proofpoint server.":
      "Le délai d'attente des requêtes HTTP(S) vers le serveur Proofpoint (en secondes).",
    "The timeout of the HTTP requests sent to Cortex (in seconds).":
      "Le délai d'attente des requêtes HTTP envoyées à Cortex (en secondes).",
    "The timeout of the HTTP requests sent to McAfee ePO API (in seconds), the max timeout allowed is 300s.":
      "Le délai d'attente des requêtes HTTP envoyées à l'API McAfee ePO (en secondes) ; le délai maximal autorisé est de 300 s.",
    "The timeout of the HTTP requests sent to Microsoft Graph API (in seconds).":
      "Le délai d'attente des requêtes HTTP envoyées à l'API Microsoft Graph (en secondes).",
    "The URL to use for the Submission Service.":
      "L'URL à utiliser pour le Submission Service.",
    "The URL to use for the Takedown Service.":
      "L'URL à utiliser pour le Takedown Service.",
    "The user must also have the “Allow Multiple Logins” capability.":
      "L'utilisateur doit également disposer de la capacité « Allow Multiple Logins ».",
    "The value can be updated if necessary.":
      "La valeur peut être mise à jour si nécessaire.",
    "The value of kid in JWT Verifier Maps has to be the same as Key Id in JWT signing key.":
      "La valeur de kid dans JWT Verifier Maps doit être identique au Key Id de la JWT signing key.",
    "The vsys is located in the Firewall URL; e.g., https://<server>#device::<vsys>::device/setup":
      "Le vsys se trouve dans l'URL du pare-feu ; par exemple, https://<server>#device::<vsys>::device/setup",
    "The webhook URL in the Teams channel.":
      "L'URL du webhook dans le canal Teams.",
    "There are 2 methods to authenticate.":
      "Il existe 2 méthodes d'authentification.",
    "There are two main use cases for the SplunkPy integration.":
      "Il existe deux cas d'usage principaux pour l'intégration SplunkPy.",
    "There are two main use cases for the SplunkPy v2 integration.":
      "Il existe deux cas d'usage principaux pour l'intégration SplunkPy v2.",
    "There is a limit to 1000 API calls per day with the free dev API key.":
      "La clé API de développement gratuite est limitée à 1000 appels d'API par jour.",
    "Therefore, we can’t use index time as our primary search key without making the searches inefficient.":
      "Par conséquent, nous ne pouvons pas utiliser l'heure d'indexation comme clé de recherche principale sans rendre les recherches inefficaces.",
    "These roles are required to make API calls.":
      "Ces rôles sont nécessaires pour effectuer des appels d'API.",
    "This article will help you configure your Splunk integration, set up a basic flow, and start ingesting incidents from Splunk to Cortex.":
      "Cet article vous aidera à configurer votre intégration Splunk, à mettre en place un flux de base et à commencer à ingérer des incidents de Splunk vers Cortex.",
    "This delay can be caused by an inefficient Splunk architecture, causing higher event indexing latency. However, it can also be “by design”, e.g., if some endpoints / machines that generate Splunk events are usually offline.":
      "Ce délai peut être dû à une architecture Splunk inefficace, entraînant une latence d'indexation des événements plus élevée. Cependant, il peut également être « voulu », par exemple si certains endpoints ou machines qui génèrent des événements Splunk sont généralement hors ligne.",
    "This delay can be caused by an inefficient Splunk architecture, causing higher event indexing latency. However, it can also be “by design”, e.g., if some endpoints or machines that generate Splunk events are frequently offline.":
      "Ce délai peut être dû à une architecture Splunk inefficace, entraînant une latence d'indexation des événements plus élevée. Cependant, il peut également être « voulu », par exemple si certains endpoints ou machines qui génèrent des événements Splunk sont fréquemment hors ligne.",
    "This enrichment provides additional information about assets, drilldown, and identities that are related to the finding events you ingest.":
      "Cet enrichissement fournit des informations supplémentaires sur les actifs, le drilldown et les identités liés aux événements finding que vous ingérez.",
    "This feature is available from Cortex version 6.0.0.":
      "Cette fonctionnalité est disponible à partir de la version 6.0.0 de Cortex.",
    "This feature is compliant with XSOAR version 6.0 and above.":
      "Cette fonctionnalité est compatible avec XSOAR version 6.0 et ultérieure.",
    "This feature is supported by Splunk Enterprise Security only.":
      "Cette fonctionnalité n'est prise en charge que par Splunk Enterprise Security.",
    "This field determines from which instance the XSOAR incident was created. It is a required field for XSOAR to enable mirroring support.":
      "Ce champ détermine à partir de quelle instance l'incident XSOAR a été créé. Il est obligatoire pour que XSOAR active la prise en charge de la mise en miroir.",
    "This field determines the mirroring direction for the incident. It is a required field for XSOAR to enable mirroring support.":
      "Ce champ détermine le sens de mise en miroir de l'incident. Il est obligatoire pour que XSOAR active la prise en charge de la mise en miroir.",
    "This field determines what would be the tag needed to mirror the XSOAR entry out to Vectra RUX. It is a required field for XSOAR to enable mirroring support.":
      "Ce champ détermine le tag nécessaire pour mettre en miroir l'entrée XSOAR vers Vectra RUX. Il est obligatoire pour que XSOAR active la prise en charge de la mise en miroir.",
    "This field is require when running as ‘long running instance’ - please set the max amount of events to fetch.":
      "Ce champ est obligatoire lors d'une exécution en tant que ‘long running instance’. Veuillez définir le nombre maximal d'événements à récupérer.",
    "This implies that new fetched events might have a slightly different structure than old events fetched so far.":
      "Cela implique que les nouveaux événements récupérés peuvent avoir une structure légèrement différente de celle des anciens événements récupérés jusqu'à présent.",
    "This integration allows 3 types of enrichments for fetched findings: Drilldown, Asset, and Identity.":
      "Cette intégration permet 3 types d'enrichissement pour les findings récupérés : Drilldown, Asset et Identity.",
    "This integration allows 3 types of enrichments for fetched notables: Drilldown, Asset, and Identity.":
      "Cette intégration permet 3 types d'enrichissement pour les notables récupérés : Drilldown, Asset et Identity.",
    "This integration can be used to pull indicators from ServiceNow with a given user query and add them to the Threat Intelligence Module.":
      "Cette intégration permet d'extraire des indicateurs de ServiceNow à l'aide d'une requête utilisateur donnée et de les ajouter au Threat Intelligence Module.",
    "This integration connects securely with a ServiceNow Model Context Protocol (MCP) server, allowing you to access its tools in real time.":
      "Cette intégration se connecte de manière sécurisée à un serveur Model Context Protocol (MCP) ServiceNow, ce qui vous permet d'accéder à ses outils en temps réel.",
    "This integration currently supports fetching DLP incidents from “NGFW” and “Prisma Access” channels only.":
      "Actuellement, cette intégration ne prend en charge que la récupération des incidents DLP à partir des canaux « NGFW » et « Prisma Access ».",
    "This integration enables Cortex to access and run commands on a terminal in a remote location (via SSH).":
      "Cette intégration permet à Cortex d'accéder à un terminal situé à distance (via SSH) et d'y exécuter des commandes.",
    "This integration enables executing commands with different permission levels.":
      "Cette intégration permet d'exécuter des commandes avec différents niveaux d'autorisation.",
    "This integration enables you to manage the features that are available in the Security & Compliance Center from Cortex XSOAR/XSIAM.":
      "Cette intégration vous permet de gérer, depuis Cortex XSOAR/XSIAM, les fonctionnalités disponibles dans le Security & Compliance Center.",
    "This integration enables you to manage the features that are available in the Security & Compliance Center from XSOAR.":
      "Cette intégration vous permet de gérer, depuis XSOAR, les fonctionnalités disponibles dans le Security & Compliance Center.",
    "This integration enables you to programmatically generate BPA data for both the free and premium instances of AIOps for NGFW.":
      "Cette intégration vous permet de générer par programmation des données BPA pour les instances gratuites et premium d'AIOps for NGFW.",
    "This integration enables you to run message traces and manage junk mail rules in Microsoft O365 - Exchange Online.":
      "Cette intégration vous permet d'exécuter des suivis de messages et de gérer les règles de courrier indésirable dans Microsoft O365 - Exchange Online.",
    "This integration is for uploading and downloading files from an SMB server.":
      "Cette intégration sert à téléverser et télécharger des fichiers depuis un serveur SMB.",
    "This integration is set up by default on Cortex with the Threat Intel Module (TIM). It is designed for internal use with the TIM Sample Analysis feature. To run ad hoc CLI commands to generate WildFire reports, use the Palo Alto Networks WildFire v2 integration instead.":
      "Cette intégration est configurée par défaut sur Cortex avec le Threat Intel Module (TIM). Elle est conçue pour un usage interne avec la fonctionnalité TIM Sample Analysis. Pour exécuter des commandes CLI ad hoc afin de générer des rapports WildFire, utilisez plutôt l'intégration Palo Alto Networks WildFire v2.",
    "This integration only supports Carbon Black Cloud on-premise APIs.":
      "Cette intégration ne prend en charge que les API on-premise de Carbon Black Cloud.",
    "This integration requires a Cortex Threat Intelligence Management (TIM) license.":
      "Cette intégration nécessite une licence Cortex Threat Intelligence Management (TIM).",
    "This integration requires a Threat Intelligence Management (TIM) license.":
      "Cette intégration nécessite une licence Threat Intelligence Management (TIM).",
    "This integration searches the unified audit log to view user and administrator activity in your organization.":
      "Cette intégration effectue une recherche dans le journal d'audit unifié pour afficher l'activité des utilisateurs et des administrateurs de votre organisation.",
    "This integration supports a default Classifier (Panorama Classifier) and Mapper (Panorama Mapper) that handles incidents returned from the API.":
      "Cette intégration prend en charge un Classifier par défaut (Panorama Classifier) et un Mapper (Panorama Mapper) qui traitent les incidents renvoyés par l'API.",
    "This integration was integrated and tested with McAfee ePO v5.3.2 and v5.10.0 .":
      "Cette intégration a été intégrée et testée avec McAfee ePO v5.3.2 et v5.10.0.",
    "This integration was integrated and tested with version 1.0 of Prisma SASE API.":
      "Cette intégration a été intégrée et testée avec la version 1.0 de l'API Prisma SASE.",
    "This integration was integrated and tested with version 3.5 of Vectra API.":
      "Cette intégration a été intégrée et testée avec la version 3.5 de l'API Vectra.",
    "This integration was integrated and tested with version 8.11.12 of Proofpoint Protection Server.":
      "Cette intégration a été intégrée et testée avec la version 8.11.12 de Proofpoint Protection Server.",
    "This integration was integrated and tested with version xx of VulnDB":
      "Cette intégration a été intégrée et testée avec la version xx de VulnDB",
    "This is how the filter is applied to the query: “ORDERBYopened_at^opened_at>[Last Run]. To prevent duplicate incidents, this field is mandatory for fetching incidents.":
      "Voici comment le filtre est appliqué à la requête : “ORDERBYopened_at^opened_at>[Last Run]. Pour éviter les incidents en double, ce champ est obligatoire pour récupérer des incidents.",
    "This method applies to Jamf versions 10.35.0 and above.":
      "Cette méthode s'applique aux versions de Jamf 10.35.0 et ultérieures.",
    "This method applies to Jamf versions 10.49.0 and above.":
      "Cette méthode s'applique aux versions de Jamf 10.49.0 et ultérieures.",
    "This parameter determines the size of the occurrence time “sliding window” we will support in our queries. For example, if set for 2 hours, we will always search for events that occurred up to 2 hours ago (and will of course ignore duplicates).":
      "Ce paramètre détermine la taille de la « fenêtre glissante » d'heure de survenue que nous prendrons en charge dans nos requêtes. Par exemple, s'il est défini sur 2 heures, nous recherchons toujours les événements survenus jusqu'à 2 heures auparavant (en ignorant bien sûr les doublons).",
    "This parameter will write additional data to the logs and should only be used when you are directed to by XSOAR support.":
      "Ce paramètre écrit des données supplémentaires dans les journaux et ne doit être utilisé que sur instruction du support XSOAR.",
    "This section explains how to configure the instance of Hello IAM World in Cortex.":
      "Cette section explique comment configurer l'instance de Hello IAM World dans Cortex.",
    "This section explains how to fully configure the instance of Orca Security in Cortex.":
      "Cette section explique comment configurer complètement l'instance d'Orca Security dans Cortex.",
    "This section will help you configure your Splunk v2 integration, set up a basic flow, and start ingesting events from Splunk to Cortex XSIAM.":
      "Cette section vous aidera à configurer votre intégration Splunk v2, à mettre en place un flux de base et à commencer à ingérer des événements de Splunk vers Cortex XSIAM.",
    "This value is mapped to the dbotMirrorTags incident field in Cortex, which defines how Cortex handles notes when you tag them in the War Room. This is required for mirroring notes from Cortex to Vectra RUX.":
      "Cette valeur est mappée au champ d'incident dbotMirrorTags dans Cortex, qui définit la manière dont Cortex traite les notes lorsque vous les taguez dans le War Room. Elle est requise pour la mise en miroir des notes de Cortex vers Vectra RUX.",
    "Threatmon API credentials (API key).":
      "Identifiants de l'API Threatmon (clé API).",
    "Threatmon Integration":
      "Intégration Threatmon",
    "Threatmon is a threat intelligence and monitoring platform that provides actionable alerts to security teams. Integrating Threatmon with XSOAR enables more efficient triage, faster response times, and better visibility into your security operations.":
      "Threatmon est une plateforme de renseignement sur les menaces et de surveillance qui fournit des alertes exploitables aux équipes de sécurité. L'intégration de Threatmon à XSOAR permet un tri plus efficace, des temps de réponse plus rapides et une meilleure visibilité sur vos opérations de sécurité.",
    "ThreatX Server URL (e.g., https://provision.threatx.io)":
      "URL du serveur ThreatX (par exemple, https://provision.threatx.io)",
    "Threshold":
      "Seuil",
    "Through the integration you can subscribe to new content types or stop your subscription, list the available content of each content type, and most importantly - fetch new content records from content types of your choice as Cortex incidents.":
      "Grâce à l'intégration, vous pouvez vous abonner à de nouveaux types de contenu ou résilier votre abonnement, lister le contenu disponible pour chaque type et, surtout, récupérer de nouveaux enregistrements de contenu des types de contenu de votre choix sous forme d'incidents Cortex.",
    "Time between fetches (in seconds). The actual time will be the maximum between the selected value and the server configuration.":
      "Délai entre les récupérations (en secondes). Le délai réel correspond à la valeur maximale entre la valeur sélectionnée et la configuration du serveur.",
    "Time to wait before taking a screenshot (in seconds)":
      "Délai d'attente avant la capture d'écran (en secondes)",
    "Time zone of the collector to fetch from (see detailed description)":
      "Fuseau horaire du collecteur à partir duquel récupérer les données (voir la description détaillée)",
    "Timeframe for first fetch (in seconds)":
      "Période pour la première récupération (en secondes)",
    "Timeout (in seconds) for HTTP requests to Zscaler":
      "Délai d'expiration (en secondes) des requêtes HTTP vers Zscaler",
    "Timestamp field to filter by (e.g., `opened_at`)":
      "Champ d'horodatage à utiliser pour le filtrage (par exemple, `opened_at`)",
    "Timestamp field to filter by (e.g., `opened_at`) This is how the filter is applied to the query: “ORDERBYopened_at^opened_at>[Last Run]. To prevent duplicate incidents, this field is mandatory for fetching incidents.":
      "Champ d'horodatage à utiliser pour le filtrage (par exemple, `opened_at`). Voici comment le filtre est appliqué à la requête : “ORDERBYopened_at^opened_at>[Last Run]. Pour éviter les incidents en double, ce champ est obligatoire pour récupérer des incidents.",
    "Timestamp field to filter by (e.g., `opened_at`) This is how the filter is applied to the query: \"ORDERBYopened_at^opened_at>[Last Run]\".":
      "Champ d'horodatage à utiliser pour le filtrage (par exemple, `opened_at`). Voici comment le filtre est appliqué à la requête : « ORDERBYopened_at^opened_at>[Last Run] ».",
    "Timestamp field to filter by (e.g., `opened_at`) This is how the filter is applied to the query: \"ORDERBYopened_at^opened_at>[Last Run]\". To prevent duplicate incidents, this field is mandatory for fetching incidents.":
      "Champ d'horodatage à utiliser pour le filtrage (par exemple, `opened_at`). Voici comment le filtre est appliqué à la requête : « ORDERBYopened_at^opened_at>[Last Run] ». Pour éviter les incidents en double, ce champ est obligatoire pour récupérer des incidents.",
    "Timezone of Nitro ESM server in minutes e.g. for gmt +3 set +180 (set only if different than Cortex XSOAR server)":
      "Fuseau horaire du serveur Nitro ESM en minutes ; par exemple, pour GMT+3, définissez +180 (à définir uniquement s'il diffère de celui du serveur Cortex XSOAR)",
    "Tip":
      "Astuce",
    "To choose a specific set of queries, select their log types from the dropdown (make sure “All” option is unselected).":
      "Pour choisir un ensemble spécifique de requêtes, sélectionnez leurs types de journaux dans la liste déroulante (assurez-vous que l'option « All » n'est pas sélectionnée).",
    "To choose a specific set of queries, select their log types from the dropdown (make sure the 'All' option is unselected).":
      "Pour choisir un ensemble spécifique de requêtes, sélectionnez leurs types de journaux dans la liste déroulante (assurez-vous que l'option 'All' n'est pas sélectionnée).",
    "To configure this integration you can either use Email and Password, or the API token.":
      "Pour configurer cette intégration, vous pouvez utiliser soit l'adresse e-mail et le mot de passe, soit le jeton d'API.",
    "To generate the new token, press the “Generate” button under the API Tokens section and fill the required details.":
      "Pour générer le nouveau jeton, cliquez sur le bouton « Generate » dans la section API Tokens et renseignez les informations requises.",
    "To prevent duplicate incidents, this field is mandatory for fetching incidents.":
      "Pour éviter les incidents en double, ce champ est obligatoire pour récupérer des incidents.",
    "To reduce the number of lookups made to the VT API, this option can be selected to gracefully skip enrichment of any IP addresses allocated for private networks.":
      "Pour réduire le nombre de requêtes envoyées à l'API VT, vous pouvez sélectionner cette option afin d'ignorer proprement l'enrichissement des adresses IP attribuées à des réseaux privés.",
    "To use a custom mapper, you must first duplicate the mapper and update the fields in the copy of the mapper. (Refer to the “Create a custom mapper consisting of the default Vectra RUX mapper” section for more information.)":
      "Pour utiliser un mappeur personnalisé, vous devez d'abord dupliquer le mappeur et mettre à jour les champs de la copie. (Pour plus d'informations, reportez-vous à la section « Create a custom mapper consisting of the default Vectra RUX mapper ».)",
    "To use ServiceNow on Cortex, ensure your user account has the rest_api_explorer and web_service_admin roles.":
      "Pour utiliser ServiceNow dans Cortex, assurez-vous que votre compte utilisateur dispose des rôles rest_api_explorer et web_service_admin.",
    "To use this integration, you need a VirusTotal API key.":
      "Pour utiliser cette intégration, vous avez besoin d'une clé API VirusTotal.",
    "To use this integration, you need to add a new Azure App Registration in the Azure Portal.":
      "Pour utiliser cette intégration, vous devez ajouter un nouvel enregistrement d'application Azure dans le portail Azure.",
    "To use this integration, you will need to add a new Azure App Registration in the Azure Portal.":
      "Pour utiliser cette intégration, vous devrez ajouter un nouvel enregistrement d'application Azure dans le portail Azure.",
    "Token (received from the admin consent - see Detailed Instructions (?)":
      "Jeton (reçu lors du consentement de l'administrateur - voir les instructions détaillées (?)",
    "Token Exchange":
      "Échange de jetons",
    "Token Format":
      "Format du jeton",
    "Token ID":
      "ID du jeton",
    "Token ID and Token Key (credentials field)":
      "ID du jeton et clé du jeton (champ des informations d'identification)",
    "Token Key":
      "Clé du jeton",
    "Troubleshooting enrichment status":
      "Dépannage de l'état d'enrichissement",
    "Trust any certificate (not secure). Make sure to mark this parameter if you want the SlackBlockBuilder script to send a response back to the incident context.":
      "Faire confiance à tous les certificats (non sécurisé). Cochez ce paramètre si vous souhaitez que le script SlackBlockBuilder renvoie une réponse dans le contexte de l'incident.",
    "Two-factor authentication (2FA) must be enabled on the console and configured for the account accessing the API.":
      "L'authentification à deux facteurs (2FA) doit être activée sur la console et configurée pour le compte qui accède à l'API.",
    "Type of authentication - either Authorization Code (recommended) or Client Credentials.":
      "Type d'authentification : Authorization Code (recommandé) ou Client Credentials.",
    "Type the Host -ip, username, password, and Port.":
      "Saisissez l'adresse IP de l'hôte, le nom d'utilisateur, le mot de passe et le port.",
    "Uncheck the “Close Detection on Incident Closure” option if you don’t want to close the detection in Vectra when the incident is closed in XSOAR. This option is only used when the mirroring direction is set to ‘Outgoing’ or ‘Incoming And Outgoing’.":
      "Décochez l'option « Close Detection on Incident Closure » si vous ne souhaitez pas fermer la détection dans Vectra lorsque l'incident est fermé dans XSOAR. Cette option n'est utilisée que lorsque le sens de mise en miroir est défini sur 'Outgoing' ou 'Incoming And Outgoing'.",
    "Uncheck the “Open Detection on Incident Reopen” option if you don’t want to open the detection in Vectra when the incident is reopened in XSOAR. This option is only used when the mirroring direction is set to ‘Outgoing’ or ‘Incoming And Outgoing’.":
      "Décochez l'option « Open Detection on Incident Reopen » si vous ne souhaitez pas ouvrir la détection dans Vectra lorsque l'incident est rouvert dans XSOAR. Cette option n'est utilisée que lorsque le sens de mise en miroir est défini sur 'Outgoing' ou 'Incoming And Outgoing'.",
    "Under Classifier, select “N/A”.":
      "Sous Classifier, sélectionnez « N/A ».",
    "Under Classifier, select N/A.":
      "Sous Classifier, sélectionnez N/A.",
    "Under Incident type, select “Vectra RUX Events Detection”.":
      "Sous Incident type, sélectionnez « Vectra RUX Events Detection ».",
    "Under Mapper (incoming), select “Vectra RUX - Incoming Mapper” for default mapping.":
      "Sous Mapper (incoming), sélectionnez « Vectra RUX - Incoming Mapper » pour le mappage par défaut.",
    "Update “Max Fetch” & “First Fetch Time” based on your requirements.":
      "Mettez à jour « Max Fetch » et « First Fetch Time » en fonction de vos besoins.",
    "Update the status of existing Threatmon incidents (e.g., Open, In Progress, Resolved).":
      "Mettez à jour l'état des incidents Threatmon existants (par exemple, Open, In Progress, Resolved).",
    "Update the status of Threatmon incidents from within XSOAR.":
      "Mettez à jour l'état des incidents Threatmon depuis XSOAR.",
    "UPN Password":
      "Mot de passe UPN",
    "URL and Port":
      "URL et port",
    "URL Malicious Threshold. Minimum number of positive results from VT scanners to consider the URL malicious.":
      "Seuil de malveillance de l'URL. Nombre minimal de résultats positifs des scanners VT pour considérer l'URL comme malveillante.",
    "URL of the Vectra AI platform.":
      "URL de la plateforme Vectra AI.",
    "URL Relationships":
      "Relations de l'URL",
    "URL Suspicious Threshold. Minimum number of positive and suspicious results from VT scanners to consider the URL suspicious.":
      "Seuil de suspicion de l'URL. Nombre minimal de résultats positifs et suspects des scanners VT pour considérer l'URL comme suspecte.",
    "URL Threshold. Minimum number of positive results from VT scanners to consider the URL malicious.":
      "Seuil de l'URL. Nombre minimal de résultats positifs des scanners VT pour considérer l'URL comme malveillante.",
    "Use “Tag” to filter which notification tag to get.":
      "Utilisez « Tag » pour filtrer la balise de notification à récupérer.",
    "Use API token instead of Username and Password":
      "Utiliser le jeton d'API à la place du nom d'utilisateur et du mot de passe",
    "Use both values to configure the integration instance.":
      "Utilisez les deux valeurs pour configurer l'instance d'intégration.",
    "Use Display Value":
      "Utiliser la valeur d'affichage",
    "Use Enterprise DLP API":
      "Utiliser l'API Enterprise DLP",
    "Use JWT Authentication":
      "Utiliser l'authentification JWT",
    "Use Live Response for VMware Carbon Black Endpoint Standard or VMware Carbon Black EDR (previously known as Carbon Black Defense and Carbon Black Response respectively).":
      "Utilisez Live Response pour VMware Carbon Black Endpoint Standard ou VMware Carbon Black EDR (anciennement Carbon Black Defense et Carbon Black Response, respectivement).",
    "Use OAuth 2.0 Authentication":
      "Utiliser l'authentification OAuth 2.0",
    "Use OAuth Login":
      "Utiliser la connexion OAuth",
    "Use secure requests protocol (HTTPS).":
      "Utiliser le protocole de requêtes sécurisé (HTTPS)",
    "Use system proxy settings checkbox":
      "Case à cocher Utiliser les paramètres proxy du système",
    "Use system proxy settings: Select this checkbox to use the system’s proxy settings.":
      "Utiliser les paramètres proxy du système : cochez cette case pour utiliser les paramètres proxy du système.",
    "Use the \"API Key (Recommended)\" parameter instead.":
      "Utilisez plutôt le paramètre « API Key (Recommended) ».",
    "Use the Client ID and Client Secret Key directly in this integration, or store them in the Cortex credentials store. In that case, the Client ID should be stored in the “username” field and the Client Secret Key should be stored in the “password” field.":
      "Utilisez le Client ID et le Client Secret Key directement dans cette intégration, ou stockez-les dans le magasin d'informations d'identification de Cortex. Dans ce cas, le Client ID doit être stocké dans le champ « username » et le Client Secret Key dans le champ « password ».",
    "Use the following naming convention: (demisto_fields_{type}).":
      "Utilisez la convention de nommage suivante : (demisto_fields_{type}).",
    "Use the Microsoft Teams integration to send messages and notifications to your team members and create meetings.":
      "Utilisez l'intégration Microsoft Teams pour envoyer des messages et des notifications aux membres de votre équipe et créer des réunions.",
    "Use the Microsoft Teams Webhook integration to send messages and notifications to Teams configured with an incoming webhook or a workflow. When using an adaptive card, the message will always include a link back to the investigation from which it was sent.":
      "Utilisez l'intégration Microsoft Teams Webhook pour envoyer des messages et des notifications à Teams configuré avec un webhook entrant ou un workflow. Lorsqu'une carte adaptative est utilisée, le message inclut toujours un lien vers l'investigation à partir de laquelle il a été envoyé.",
    "Use the Prisma Cloud integration to manage alerts from Microsoft Azure, Google Cloud Platform, and AWS.":
      "Utilisez l'intégration Prisma Cloud pour gérer les alertes de Microsoft Azure, Google Cloud Platform et AWS.",
    "Use the SplunkPy integration to fetch incidents from Splunk ES, and query results by SID.":
      "Utilisez l'intégration SplunkPy pour récupérer des incidents depuis Splunk ES et interroger les résultats par SID.",
    "Use the system proxy settings to reach with the Vectra RUX API.":
      "Utilise les paramètres proxy du système pour accéder à l'API Vectra RUX.",
    "Use the Workday IAM integration to fetch Workday reports and create corresponding incidents in Cortex. This integration is meant to be used as part of the IAM premium pack.":
      "Utilisez l'intégration Workday IAM pour récupérer des rapports Workday et créer les incidents correspondants dans Cortex. Cette intégration est destinée à être utilisée dans le cadre du pack premium IAM.",
    "Use the Zendesk V2 integration to perform operations related to users, tickets, attachments, and more.":
      "Utilisez l'intégration Zendesk V2 pour effectuer des opérations liées aux utilisateurs, aux tickets, aux pièces jointes, etc.",
    "Use these client_id, client_secret, tsg_id to authenticate to your AIOps instance.":
      "Utilisez ces client_id, client_secret et tsg_id pour vous authentifier auprès de votre instance AIOps.",
    "Use this option when required to customize the URL to the Azure management endpoint. More information can be found here - https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud":
      "Utilisez cette option lorsque vous devez personnaliser l'URL du point de terminaison de gestion Azure. Vous trouverez plus d'informations ici : https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud",
    "Use this option when required to customize the URL to the Entra ID endpoint. More information can be found here - https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud":
      "Utilisez cette option lorsque vous devez personnaliser l'URL du point de terminaison Entra ID. Vous trouverez plus d'informations ici : https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud",
    "Use this parameter with careful consideration.":
      "Utilisez ce paramètre avec prudence.",
    "Use TLS for connection":
      "Utiliser TLS pour la connexion",
    "Use to query SQL Server, using a remote (TCP) connection to the DB.":
      "Permet d'interroger SQL Server à l'aide d'une connexion distante (TCP) à la base de données.",
    "Use when SonarQube is publicly accessible.":
      "À utiliser lorsque SonarQube est accessible publiquement.",
    "Use your server URL, username and password in order to get your API-key.":
      "Utilisez l'URL du serveur, le nom d'utilisateur et le mot de passe pour obtenir votre clé API.",
    "Used for certificate authentication. As appears in the \"Certificates & secrets\" page of the app.":
      "Utilisé pour l'authentification par certificat. Tel qu'il apparaît dans la page « Certificates & secrets » de l'application.",
    "User Email Address (Use for auto token refresh)":
      "Adresse e-mail de l'utilisateur (utilisée pour l'actualisation automatique du jeton)",
    "User Token":
      "Jeton utilisateur",
    "Username (email address)":
      "Nom d'utilisateur (adresse e-mail)",
    "Username (or '<username>/token' when using API key).":
      "Nom d'utilisateur (ou '<username>/token' lors de l'utilisation d'une clé API).",
    "Username / Access Key ID":
      "Nom d'utilisateur / ID de clé d'accès",
    "Username / API Key":
      "Nom d'utilisateur / clé API",
    "Username / API Key (see '?')":
      "Nom d'utilisateur / clé API (voir '?')",
    "Users and Authentication":
      "Utilisateurs et authentification",
    "Users Lookup table name":
      "Nom de la table de recherche des utilisateurs",
    "Users must be assigned to the admin role to use this integration.":
      "Pour utiliser cette intégration, les utilisateurs doivent se voir attribuer le rôle admin.",
    "Uses the system proxy server to communicate with the integration. If not selected, the integration will not use the system proxy server.":
      "Utilise le serveur proxy du système pour communiquer avec l'intégration. Si cette option n'est pas sélectionnée, l'intégration n'utilise pas le serveur proxy du système.",
    "Using API Token authentication":
      "Utilisation de l'authentification par jeton d'API",
    "Using Multi Factor Authentication (MFA)":
      "Utilisation de l'authentification multifacteur (MFA)",
    "Using Multi-Factor Authentication (MFA)":
      "Utilisation de l'authentification multifacteur (MFA)",
    "Using National Cloud":
      "Utilisation des clouds nationaux",
    "Using the task ‘Create Integration system user’ create an account with username and password":
      "À l'aide de la tâche 'Create Integration system user', créez un compte avec un nom d'utilisateur et un mot de passe",
    "Validate the negotiation info when connecting to a share. More information can be found on https://docs.microsoft.com/en-us/archive/blogs/openspecification/smb3-secure-dialect-negotiation":
      "Valide les informations de négociation lors de la connexion à un partage. Vous trouverez plus d'informations sur https://docs.microsoft.com/en-us/archive/blogs/openspecification/smb3-secure-dialect-negotiation",
    "Verbose (show log in case of error)":
      "Détaillé (afficher le journal en cas d'erreur)",
    "Verification Token(Team Chat App)":
      "Jeton de vérification (Team Chat App)",
    "Verify SSL":
      "Vérifier SSL",
    "VirusTotal has been updated to VirusTotal (API v3). Please use the updated version instead.":
      "VirusTotal a été mis à jour vers VirusTotal (API v3). Veuillez utiliser plutôt la version mise à jour.",
    "Vsys - Firewall instances only":
      "Vsys - instances de pare-feu uniquement",
    "When checked, no SSL certificates check will be done when interacting with the Vectra RUX API. It's insecure. (Default - unchecked)":
      "Si cette option est cochée, aucune vérification des certificats SSL n'est effectuée lors des interactions avec l'API Vectra RUX. Ce n'est pas sécurisé. (Par défaut : décochée)",
    "When ciphers are specified, the SSH connection will be established with the first cipher of the specified ciphers that the given host supports.":
      "Lorsque des chiffrements sont spécifiés, la connexion SSH est établie avec le premier des chiffrements spécifiés que l'hôte donné prend en charge.",
    "When fetch is enable you must provide this argument. Possible values are: new, open, assigned, closed or ignored.":
      "Lorsque la récupération est activée, vous devez fournir cet argument. Les valeurs possibles sont : new, open, assigned, closed ou ignored.",
    "When fetching supplier findings, a run that reaches this limit part-way through a supplier resumes on that same supplier next run, so the limit is honored without skipping findings.":
      "Lors de la récupération des résultats des fournisseurs, une exécution qui atteint cette limite en cours de traitement d'un fournisseur reprend avec ce même fournisseur lors de l'exécution suivante, de sorte que la limite est respectée sans omettre de résultats.",
    "When key algorithms are specified, the SSH connection will be established with the first key algorithm of the specified key algorithms that the given host supports.":
      "Lorsque des algorithmes de clé sont spécifiés, la connexion SSH est établie avec le premier des algorithmes de clé spécifiés que l'hôte donné prend en charge.",
    "When mirroring incidents, you can make changes in Vectra that will be reflected in Cortex, or vice versa.":
      "Lors de la mise en miroir des incidents, vous pouvez effectuer des modifications dans Vectra qui seront répercutées dans Cortex, ou inversement.",
    "When running Live Response commands (e.g. ‘cb-process-kill’), it is possible to pass ‘wait-timeout’ argument to determine the number of seconds to wait for the command to be executed on Live Response side. Once the command has been executed or wait-time has expired - the command information will be returned to the war room.":
      "Lors de l'exécution de commandes Live Response (par exemple, 'cb-process-kill'), il est possible de transmettre l'argument 'wait-timeout' pour déterminer le nombre de secondes d'attente de l'exécution de la commande côté Live Response. Une fois la commande exécutée ou le délai d'attente écoulé, les informations de la commande sont renvoyées au war room.",
    "When selected, closing and re-opening the Cortex incident is mirrored in Prisma Cloud.":
      "Si cette option est sélectionnée, la fermeture et la réouverture de l'incident Cortex sont répercutées dans Prisma Cloud.",
    "When selected, the hunting query result is also saved to the Microsoft 365 Defender context path. Relevant only for the msg-advanced-hunting command.":
      "Si cette option est sélectionnée, le résultat de la requête de recherche est également enregistré dans le chemin de contexte Microsoft 365 Defender. Pertinent uniquement pour la commande msg-advanced-hunting.",
    "When selecting the Custom option, the Azure AD endpoint parameter must be filled. More information about National clouds can be found here - https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud":
      "Lorsque l'option Custom est sélectionnée, le paramètre Azure AD endpoint doit être renseigné. Vous trouverez plus d'informations sur les clouds nationaux ici : https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud",
    "When selecting the Custom option, the Host URL parameter must be filled. More information about National clouds can be found here - https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud":
      "Lorsque l'option Custom est sélectionnée, le paramètre Host URL doit être renseigné. Vous trouverez plus d'informations sur les clouds nationaux ici : https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud",
    "When selecting the Custom option, the Server URL parameter must be filled. More information can be found on the integration page - https://xsoar.pan.dev/docs/reference/integrations/microsoft-defender-advanced-threat-protection":
      "Lorsque l'option Custom est sélectionnée, le paramètre Server URL doit être renseigné. Vous trouverez plus d'informations sur la page de l'intégration : https://xsoar.pan.dev/docs/reference/integrations/microsoft-defender-advanced-threat-protection",
    "When switching from the 'Authorization Code Flow' to the 'Client Credentials Flow', test the validity of the instance by clicking the 'Test' button.":
      "Lors du passage de 'Authorization Code Flow' à 'Client Credentials Flow', testez la validité de l'instance en cliquant sur le bouton 'Test'.",
    "When switching from the 'Client Credentials Flow' to the 'Authorization Code Flow' do as follow: Save the instance, run the 'microsoft-teams-generate-login-url' command and follow the instructions mentioned there. Once done, test the validity of your instance by running the 'microsoft-teams-auth-test' command.":
      "Lors du passage de 'Client Credentials Flow' à 'Authorization Code Flow', procédez comme suit : enregistrez l'instance, exécutez la commande 'microsoft-teams-generate-login-url' et suivez les instructions indiquées. Une fois cela fait, testez la validité de votre instance en exécutant la commande 'microsoft-teams-auth-test'.",
    "When switching from the 'Client Credentials Flow' to the 'Authorization Code Flow' do as follow: Save the instance, run the 'microsoft-teams-generate-login-url' command and follow the instructions mentioned there. Once done, test the validity of your instance by running the 'microsoft-teams-auth-test' command. When switching from the 'Authorization Code Flow' to the 'Client Credentials Flow', test the validity of the instance by clicking the 'Test' button.":
      "Lors du passage de 'Client Credentials Flow' à 'Authorization Code Flow', procédez comme suit : enregistrez l'instance, exécutez la commande 'microsoft-teams-generate-login-url' et suivez les instructions indiquées. Une fois cela fait, testez la validité de votre instance en exécutant la commande 'microsoft-teams-auth-test'. Lors du passage de 'Authorization Code Flow' à 'Client Credentials Flow', testez la validité de l'instance en cliquant sur le bouton 'Test'.",
    "When using basic authorization, you will have to update your password with the current OTP every time the current code expires (30 seconds), hence we recommend using OAuth 2.0 authorization.":
      "Lorsque vous utilisez l'autorisation de base, vous devrez mettre à jour votre mot de passe avec l'OTP actuel chaque fois que le code actuel expire (30 secondes) ; nous vous recommandons donc d'utiliser l'autorisation OAuth 2.0.",
    "When using basic authorization, you will have to update your password with the current OTP every time the current code expires (30 seconds), therefore we recommend using OAuth 2.0 authorization.":
      "Lorsque vous utilisez l'autorisation de base, vous devrez mettre à jour votre mot de passe avec l'OTP actuel chaque fois que le code actuel expire (30 secondes) ; par conséquent, nous vous recommandons d'utiliser l'autorisation OAuth 2.0.",
    "Whether this instance fetches your own organization's findings or findings across your supplier portfolio. Configure a separate instance for each scope.":
      "Indique si cette instance récupère les résultats de votre propre organisation ou ceux de l'ensemble de votre portefeuille de fournisseurs. Configurez une instance distincte pour chaque périmètre.",
    "Whether to add escaping before `=` chars in URLs. For further information, see the pack README":
      "Indique s'il faut ajouter un échappement avant les caractères `=` dans les URL. Pour plus d'informations, consultez le fichier README du pack",
    "Whether to disable automatic notifications to the configured notifications channel.":
      "Indique s'il faut désactiver les notifications automatiques vers le canal de notification configuré.",
    "Whether to enable mirroring only from xsoar to slack, mark it if file mirroring is required in investigations.":
      "Indique s'il faut activer la mise en miroir uniquement de XSOAR vers Slack ; cochez cette option si la mise en miroir des fichiers est requise dans les investigations.",
    "Whether to trust any certificate (not secure).":
      "Indique s'il faut faire confiance à tous les certificats (non sécurisé).",
    "Whether to use the system proxy settings.":
      "Indique s'il faut utiliser les paramètres proxy du système.",
    "WildFire Server URLs":
      "URL des serveurs WildFire",
    "Workday Report URL":
      "URL du rapport Workday",
    "Workday Reports":
      "Rapports Workday",
    "XSOAR API Key":
      "Clé API XSOAR",
    "XSOAR user key":
      "Clé utilisateur XSOAR",
    "XSOAR will query for Orca Alerts/ Alert updates every 1 minute":
      "XSOAR interroge les alertes Orca et leurs mises à jour toutes les minutes",
    "You can also specify the threshold as an argument when running relevant commands.":
      "Vous pouvez également spécifier le seuil en tant qu'argument lors de l'exécution des commandes concernées.",
    "You can enable incident mirroring between Cortex incidents and Splunk findings.":
      "Vous pouvez activer la mise en miroir des incidents entre les incidents Cortex et les résultats Splunk.",
    "You can enable incident mirroring between Cortex incidents and Splunk notables.":
      "Vous pouvez activer la mise en miroir des incidents entre les incidents Cortex et les événements notables Splunk.",
    "You can execute these commands from the Cortex CLI, as part of an automation, or in a playbook.":
      "Vous pouvez exécuter ces commandes depuis la CLI Cortex, dans le cadre d'une automatisation ou dans un playbook.",
    "You can store the additional workflow in a Cortex list, and use a transformer on the task in a playbook to send to a specific team.":
      "Vous pouvez stocker le workflow supplémentaire dans une liste Cortex et utiliser un transformateur sur la tâche dans un playbook pour l'envoyer à une équipe spécifique.",
    "You can use Prisma Cloud UI to generate this required access key.":
      "Vous pouvez utiliser l'interface utilisateur de Prisma Cloud pour générer cette clé d'accès requise.",
    "You can use the following methods to authenticate Microsoft Defender XDR.":
      "Vous pouvez utiliser les méthodes suivantes pour authentifier Microsoft Defender XDR.",
    "You do not need to specify the classifier as all Splunk incidents are ingested as Splunk Notable Generic. As you become more familiar with Cortex, you can create custom incident types as needed instead of using the Splunk Notable Generic incident type.":
      "Vous n'avez pas besoin de spécifier le classificateur, car tous les incidents Splunk sont ingérés en tant que Splunk Notable Generic. À mesure que vous vous familiariserez avec Cortex, vous pourrez créer des types d'incident personnalisés selon vos besoins au lieu d'utiliser le type d'incident Splunk Notable Generic.",
    "You don’t need to install the packages, they are included in the Docker image.":
      "Vous n'avez pas besoin d'installer les paquets, car ils sont inclus dans l'image Docker.",
    "You may also use the advanced search in Okta’s System Logs to generate the filter expression.":
      "Vous pouvez également utiliser la recherche avancée dans les journaux système d'Okta pour générer l'expression de filtre.",
    "You most enable or run mirror-investigation.":
      "Vous devez activer ou exécuter mirror-investigation.",
    "You must have an API subscription.":
      "Vous devez disposer d'un abonnement à l'API.",
    "You must have your client applications registered on your authorization server with the required scope and configured appropriately.":
      "Vous devez avoir enregistré vos applications clientes sur votre serveur d'autorisation avec le périmètre requis et les avoir configurées correctement.",
    "You need to create a separate integration instance for Palo Alto Networks Firewall and Palo Alto Networks. Unless specified otherwise, all commands are valid for both Firewall and Panorama.":
      "Vous devez créer une instance d'intégration distincte pour Palo Alto Networks Firewall et pour Palo Alto Networks. Sauf indication contraire, toutes les commandes sont valides à la fois pour Firewall et pour Panorama.",
    "You should have a non-admin user with all necessary roles (only non-admin roles) in addition to the existing role snc_platform_rest_api_access that is required to make API calls.":
      "Vous devez disposer d'un utilisateur non administrateur ayant tous les rôles nécessaires (uniquement des rôles non administrateur), en plus du rôle existant snc_platform_rest_api_access, requis pour effectuer des appels d'API.",
    "Your API key can be found in your Orion Malware account user menu.":
      "Votre clé API se trouve dans le menu utilisateur de votre compte Orion Malware.",
    "Your API key can be found in your VirusTotal account user menu.":
      "Votre clé API se trouve dans le menu utilisateur de votre compte VirusTotal.",
    "Your API key carries all your privileges, so keep it secure and don’t share it with anyone.":
      "Votre clé API comporte tous vos privilèges ; conservez-la donc en lieu sûr et ne la partagez avec personne.",
    "Your PingOne Environment ID":
      "Votre ID d'environnement PingOne",
    "Your server URL (e.g., https://yourdomain.jamfcloud.com)":
      "URL de votre serveur (par exemple, https://yourdomain.jamfcloud.com)",
    "Zendesk address (e.g. https://demisto.zendesk.com)":
      "Adresse Zendesk (par exemple, https://demisto.zendesk.com)",
    "Zendesk integration requires the API key and a username.":
      "L'intégration Zendesk nécessite la clé API et un nom d'utilisateur.",
    "ZIdentity returns a Bearer access token.":
      "ZIdentity renvoie un jeton d'accès Bearer.",

    // --- Batch: Splunk/ServiceNow/Mimecast/RelayShield/Panorays/TypeSafe etc. integration docs as joined sentences (16:09 export, Collector 0.2.0) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    "(Investigation only) If {0} is selected in step 8, configure the following Investigation-specific parameters:":
      "(Investigations uniquement) Si {0} est sélectionné à l'étape 8, configurez les paramètres suivants propres aux investigations :",
    "(Optional) Test the created instance by running the {0} command.":
      "(Facultatif) Testez l'instance créée en exécutant la commande {0}.",
    "(Recommended) Enter the ServiceNow account {0} and {1} in the integration instance configuration. When provided, the integration automatically performs the initial OAuth login on first use. It also automatically renews the refresh token when it expires.":
      "(Recommandé) Saisissez le {0} et le {1} du compte ServiceNow dans la configuration de l'instance de l'intégration. Lorsqu'ils sont fournis, l'intégration effectue automatiquement la connexion OAuth initiale lors de la première utilisation. Elle renouvelle également automatiquement le jeton d'actualisation à son expiration.",
    "{0} Check the balance and entitlements on your account at {1}.":
      "{0} Vérifiez le solde et les droits de votre compte sur {1}.",
    "{0} Confirm the key was copied in full and begins with {1}. Keys are deactivated when the underlying subscription is cancelled.":
      "{0} Vérifiez que la clé a été copiée en entier et qu'elle commence par {1}. Les clés sont désactivées lorsque l'abonnement sous-jacent est annulé.",
    "{0} This is a clean result, not an error. RelayShield reports only on sources it queried; see the DBotScore mapping above.":
      "{0} Il s'agit d'un résultat sain, et non d'une erreur. RelayShield ne rend compte que des sources qu'il a interrogées ; consultez le mappage DBotScore ci-dessus.",
    "{0}: Fetches the drilldown searches configured by the user in the rule name that triggered the finding event and performs this search. The results are stored in the context of the incident under the {1} field as follows: [{‘query_name’:<query_name>, ‘query_search’: <query_search>, ‘query_results’: [{result1}, {result2}, {result3}], ‘enrichment_status’: <enrichment_status>}].":
      "{0} : récupère les recherches drilldown configurées par l'utilisateur dans le nom de la règle qui a déclenché l'événement de type finding et exécute cette recherche. Les résultats sont stockés dans le contexte de l'incident, dans le champ {1}, au format suivant : [{‘query_name’:<query_name>, ‘query_search’: <query_search>, ‘query_results’: [{result1}, {result2}, {result3}], ‘enrichment_status’: <enrichment_status>}].",
    "{0}: Keep the SPL query as-is unless you need to filter further. The query must include the {1} token. Do not modify or remove this token. To add custom filters, append extra URL parameters such as {2} after the placeholder.":
      "{0} : conservez la requête SPL telle quelle, sauf si vous devez filtrer davantage. La requête doit inclure le jeton {1}. Ne modifiez pas et ne supprimez pas ce jeton. Pour ajouter des filtres personnalisés, ajoutez des paramètres d'URL supplémentaires, tels que {2}, après l'espace réservé.",
    "{0}: Select the enrichment types you want to enrich each fetched finding with. If none are selected, the integration will fetch findings as usual (without enrichment).":
      "{0} : sélectionnez les types d'enrichissement avec lesquels vous souhaitez enrichir chaque finding récupéré. Si aucun n'est sélectionné, l'intégration récupérera les findings comme d'habitude (sans enrichissement).",
    "{0}: Select the enrichment types you want to enrich each fetched notable with. If none are selected, the integration will fetch notables as usual (without enrichment).":
      "{0} : sélectionnez les types d'enrichissement avec lesquels vous souhaitez enrichir chaque notable récupéré. Si aucun n'est sélectionné, l'intégration récupérera les notables comme d'habitude (sans enrichissement).",
    "{0}: The maximal amount of events to fetch per enrichment type (Drilldown, Asset, and Identity). In a case of multiple drilldown enrichments the limit will apply for each drilldown search query. (default to 20).":
      "{0} : nombre maximal d'événements à récupérer par type d'enrichissement (Drilldown, Asset et Identity). En cas d'enrichissements drilldown multiples, la limite s'applique à chaque requête de recherche drilldown. (La valeur par défaut est 20).",
    "{0}: The maximum number of investigations to fetch per cycle. Limited to 100 by the Splunk investigations endpoint.":
      "{0} : nombre maximal d'investigations à récupérer par cycle. Limité à 100 par le point de terminaison des investigations Splunk.",
    "{0}: The query for the finding events enrichment (defined by default). If you decide to edit this, make sure to provide a query that uses the `notable` macro. See the default query as an example.":
      "{0} : la requête pour l'enrichissement des événements de type finding (définie par défaut). Si vous décidez de la modifier, veillez à fournir une requête qui utilise la macro `notable`. Consultez la requête par défaut à titre d'exemple.",
    "{0}: The query for the notable events enrichment (defined by default). If you decide to edit this, make sure to provide a query that uses the `notable` macro. See the default query as an example.":
      "{0} : la requête pour l'enrichissement des événements notable (définie par défaut). Si vous décidez de la modifier, veillez à fournir une requête qui utilise la macro `notable`. Consultez la requête par défaut à titre d'exemple.",
    "{0}: The relative time interval to look back during the initial investigation fetch (for example, {1}).":
      "{0} : l'intervalle de temps relatif sur lequel remonter lors de la première récupération des investigations (par exemple, {1}).",
    "{0}: The timeout for each enrichment (default is 5min). When the selected timeout was reached, finding events that were not enriched will be saved without the enrichment.":
      "{0} : le délai d'expiration de chaque enrichissement (5 min par défaut). Lorsque le délai sélectionné est atteint, les événements de type finding non enrichis sont enregistrés sans enrichissement.",
    "{0}: The timeout for each enrichment (default is 5min). When the selected timeout was reached, notable events that were not enriched will be saved without the enrichment.":
      "{0} : le délai d'expiration de chaque enrichissement (5 min par défaut). Lorsque le délai sélectionné est atteint, les événements notable non enrichis sont enregistrés sans enrichissement.",
    "{0}: whether the asset enrichment was successful.":
      "{0} : indique si l'enrichissement des assets a réussi.",
    "{0}: whether the drilldown enrichment was successful. In a case of multiple drilldown enrichments, the status is successful if at least one drilldown search enrichment was successful.":
      "{0} : indique si l'enrichissement drilldown a réussi. En cas d'enrichissements drilldown multiples, le statut est réussi si au moins un enrichissement de recherche drilldown a réussi.",
    "{0}: whether the identity enrichment was successful.":
      "{0} : indique si l'enrichissement des identités a réussi.",
    "A clean result (“no known finding”) is mapped to DBotScore {0}, never {1}. “No known finding” means nothing was flagged in the sources RelayShield actually queried. It is not a verified-safe guarantee, and treating it as “Good” would claim more certainty than the underlying data supports. CRITICAL/HIGH findings map to {2}, MEDIUM/LOW findings map to {3}.":
      "Un résultat sain (\"no known finding\") est associé au DBotScore {0}, jamais à {1}. \"No known finding\" signifie que rien n'a été signalé dans les sources réellement interrogées par RelayShield. Ce n'est pas une garantie de sécurité vérifiée, et le traiter comme \"Good\" revendiquerait plus de certitude que ce que les données sous-jacentes justifient. Les constats CRITICAL/HIGH sont associés à {2}, et les constats MEDIUM/LOW à {3}.",
    "Build a query by selecting fields operators and relevant values. You can always add an additional condition by selecting the {0} button on the right. For more information on how to use the search editor see {1}.":
      "Créez une requête en sélectionnant des champs, des opérateurs et des valeurs pertinentes. Vous pouvez toujours ajouter une condition supplémentaire en sélectionnant le bouton {0} à droite. Pour plus d'informations sur l'utilisation de l'éditeur de recherche, consultez {1}.",
    "By default, the {0} parameter is set to 70. This means that for every file with a severity of over 70 the Dbot score will be set to {1}. This parameter is configurable.":
      "Par défaut, le paramètre {0} est défini sur 70. Cela signifie que, pour tout fichier dont la gravité est supérieure à 70, le score Dbot sera défini sur {1}. Ce paramètre est configurable.",
    "Content in the Splunk content pack (such as mappers, layout, playbooks, incident fields, and the incident type). Therefore, you will need to create your own content. See the {0} for information.":
      "Contenu du pack de contenu Splunk (tel que les mappeurs, les dispositions, les playbooks, les champs d'incident et le type d'incident). Vous devrez donc créer votre propre contenu. Consultez {0} pour plus d'informations.",
    "Copy the API key from the confirmation page. It begins with {0}. The key is also emailed to the address you entered.":
      "Copiez la clé API depuis la page de confirmation. Elle commence par {0}. La clé est également envoyée par e-mail à l'adresse que vous avez saisie.",
    "Copy the query value and paste it as the value for the {0} argument for both search commands. For example:":
      "Copiez la valeur de la requête et collez-la comme valeur de l'argument {0} pour les deux commandes de recherche. Par exemple :",
    "Create a Java Key Store and upload it to the instance by accessing from the upper menu: {0} > {1} > {2}. The private key will be used as an integration parameter.":
      "Créez un Java Key Store et importez-le dans l'instance en accédant au menu supérieur : {0} > {1} > {2}. La clé privée sera utilisée comme paramètre de l'intégration.",
    "Create a summary index in Splunk. For more information, click {0}.":
      "Créez un index récapitulatif dans Splunk. Pour plus d'informations, cliquez {0}.",
    "Enter your username and password, and append the One Time Password (OTP) that you currently see on your mobile device to your password without any extra spaces. For example, if your password is {0} and the current OTP code is {1}, enter {2}.":
      "Saisissez votre nom d'utilisateur et votre mot de passe, puis ajoutez à la fin du mot de passe, sans espace supplémentaire, le mot de passe à usage unique (OTP) actuellement affiché sur votre appareil mobile. Par exemple, si votre mot de passe est {0} et que le code OTP actuel est {1}, saisissez {2}.",
    "For anything else, contact {0}.":
      "Pour toute autre question, contactez {0}.",
    "For assistance, contact Panorays support at {0}.":
      "Pour obtenir de l'aide, contactez l'assistance Panorays à l'adresse {0}.",
    "For full instructions, see the {0}.":
      "Pour obtenir des instructions complètes, consultez {0}.",
    "For mirroring the {0} field, the usernames need to be transformed to the corresponding names in Cortex and Splunk.":
      "Pour la mise en miroir du champ {0}, les noms d'utilisateur doivent être transformés en noms correspondants dans Cortex et Splunk.",
    "For more information about creating an OAuth app click {0}.":
      "Pour plus d'informations sur la création d'une application OAuth, cliquez {0}.",
    "For using OAuth 2.0 see the above instructions. The OTP code should be appended to the password parameter in the {0} command.":
      "Pour utiliser OAuth 2.0, consultez les instructions ci-dessus. Le code OTP doit être ajouté à la fin du paramètre de mot de passe dans la commande {0}.",
    "From the {0} page, click {1}.":
      "Sur la page {0}, cliquez sur {1}.",
    "From the left-side navigation menu, click {0}.":
      "Dans le menu de navigation de gauche, cliquez sur {0}.",
    "From the top navigation bar, click {0}.":
      "Dans la barre de navigation supérieure, cliquez sur {0}.",
    "Go to the {0}.":
      "Accédez à {0}.",
    "If the {0} and {1} fields are configured, the integration will automatically perform the initial login and renew the refresh token when it expires — no manual commands are needed. Otherwise, you will have to run the {2} command for the initial login and again each time the refresh token expires.":
      "Si les champs {0} et {1} sont configurés, l'intégration effectue automatiquement la connexion initiale et renouvelle le jeton d'actualisation à son expiration ; aucune commande manuelle n'est nécessaire. Sinon, vous devrez exécuter la commande {2} pour la connexion initiale, puis de nouveau chaque fois que le jeton d'actualisation expire.",
    "If you did note provide {0} and {1} in step 3, run the {2} command from the Cortex CLI and fill in the username and password of the ServiceNow integration instance. This step generates an access token to the ServiceNow instance and is required only the first time after configuring a new integration instance in Cortex. If you provided {3} and {4}, this step is handled automatically.":
      "Si vous n'avez pas fourni {0} et {1} à l'étape 3, exécutez la commande {2} depuis la CLI Cortex et saisissez le nom d'utilisateur et le mot de passe de l'instance d'intégration ServiceNow. Cette étape génère un jeton d'accès à l'instance ServiceNow et n'est requise que la première fois, après la configuration d'une nouvelle instance d'intégration dans Cortex. Si vous avez fourni {3} et {4}, cette étape est gérée automatiquement.",
    "In case of inconsistent authentication issues when using username & password, try to use {0} as the username. this will set the integration to use basic authentication when connecting to the Splunk server. For example: TestUser@_basic":
      "En cas de problèmes d'authentification irréguliers avec un nom d'utilisateur et un mot de passe, essayez d'utiliser {0} comme nom d'utilisateur. L'intégration utilisera alors l'authentification de base pour se connecter au serveur Splunk. Par exemple : TestUser@_basic",
    "In order for the mirroring to work, the {0} parameter needs to be set before the incident is fetched.":
      "Pour que la mise en miroir fonctionne, le paramètre {0} doit être défini avant la récupération de l'incident.",
    "In order to activate them check the {0} checkbox, and then check the relevant boxes for each fetch type you want.":
      "Pour les activer, cochez la case {0}, puis cochez les cases correspondant à chaque type de récupération souhaité.",
    "In order to refresh token / discover auth types of the account / create new access & secret keys, you are required to provide: App ID, Account email address & password, and BaseUrl is set to {0}, based on your {1}. These parameters support the following integration commands: mimecast-login -> fetches new access key & secret key mimecast-discover -> lists supported auth types of user mimecast-refresh-token -> refreshes the validity duration of access key & secret key (3 days)":
      "Pour actualiser le jeton, découvrir les types d'authentification du compte et créer de nouvelles clés d'accès et secrètes, vous devez fournir : App ID, adresse e-mail et mot de passe du compte, et BaseUrl doit être défini sur {0}, selon votre {1}. Ces paramètres prennent en charge les commandes d'intégration suivantes : mimecast-login -> récupère une nouvelle clé d'accès et une nouvelle clé secrète mimecast-discover -> liste les types d'authentification pris en charge par l'utilisateur mimecast-refresh-token -> renouvelle la durée de validité de la clé d'accès et de la clé secrète (3 jours)",
    "In the {0} parameter, select which Splunk event types to ingest. Default is {1}. Add {2} to also fetch Splunk investigations (select both to fetch them together).":
      "Dans le paramètre {0}, sélectionnez les types d'événements Splunk à ingérer. La valeur par défaut est {1}. Ajoutez {2} pour récupérer également les investigations Splunk (sélectionnez les deux pour les récupérer ensemble).",
    "In the Enrichment Types field, select {0}, {1} and {2}. This enrichment provides additional information about assets, drilldown, and identities that are related to the notable events you ingest. Multiple drilldown searches enrichment is supported from Enterprise Security v7.2.0. For more information, see {3}.":
      "Dans le champ Enrichment Types, sélectionnez {0}, {1} et {2}. Cet enrichissement fournit des informations supplémentaires sur les assets, le drilldown et les identités liés aux événements notable que vous ingérez. L'enrichissement par recherches drilldown multiples est pris en charge à partir d'Enterprise Security v7.2.0. Pour plus d'informations, consultez {3}.",
    "Keep the {0} as-is, since we use the `notable` macro when ingesting Finding events. You can create a more granular search by specifying specific conditions, for example specific security domain or event ID.":
      "Conservez {0} tel quel, car la macro `notable` est utilisée lors de l'ingestion des événements de type finding. Vous pouvez créer une recherche plus précise en spécifiant des conditions particulières, par exemple un domaine de sécurité ou un ID d'événement spécifique.",
    "Keep the default values for the Finding {0} and {1}.":
      "Conservez les valeurs par défaut de {0} et {1} pour Finding.",
    "Leave {0} at {1} unless you have been given a dedicated endpoint.":
      "Laissez {0} sur {1}, sauf si l'on vous a fourni un point de terminaison dédié.",
    "Locate the Mimecast API 2.0 tile and select {0}.":
      "Repérez la vignette Mimecast API 2.0 et sélectionnez {0}.",
    "Log in to your ServiceNow instance and create an endpoint for Cortex to access your instance (see {0} for more information).":
      "Connectez-vous à votre instance ServiceNow et créez un point de terminaison permettant à Cortex d'accéder à votre instance (voir {0} pour plus d'informations).",
    "Make sure you have provided the Client ID and Client Secret, and that the BaseUrl is set to {0}.":
      "Assurez-vous d'avoir fourni le Client ID et le Client Secret, et que BaseUrl est défini sur {0}.",
    "Notice: Submitting indicators using the {0} command of this integration might make the indicator data publicly available. See the vendor’s documentation for more details.":
      "Avis : l'envoi d'indicateurs à l'aide de la commande {0} de cette intégration peut rendre les données des indicateurs accessibles publiquement. Consultez la documentation du fournisseur pour plus d'informations.",
    "Optional: Check the {0} integration parameter to close the Cortex incident when the corresponding finding is closed on the Splunk side. By default, only Findings closed with a “Closed” label will be mirrored. You can specify specific statuses (comma-separated) in the {1}, and enable the {2} option to add statuses marked as “End Status” in Splunk, and to add additional statuses to the mirroring process.":
      "Facultatif : cochez le paramètre d'intégration {0} pour fermer l'incident Cortex lorsque le finding correspondant est fermé côté Splunk. Par défaut, seuls les Findings fermés avec l'étiquette \"Closed\" sont mis en miroir. Vous pouvez spécifier des statuts particuliers (séparés par des virgules) dans {1} et activer l'option {2} pour ajouter les statuts marqués \"End Status\" dans Splunk et pour ajouter des statuts supplémentaires au processus de mise en miroir.",
    "Optional: Check the {0} integration parameter to close the Cortex incident when the corresponding notable is closed on the Splunk side. By default, only Notables closed with a “Closed” label will be mirrored. You can specify specific statuses (comma-separated) in the {1}, and enable the {2} option to add statuses marked as “End Status” in Splunk, and to add additional statuses to the mirroring process.":
      "Facultatif : cochez le paramètre d'intégration {0} pour fermer l'incident Cortex lorsque le notable correspondant est fermé côté Splunk. Par défaut, seuls les Notables fermés avec l'étiquette \"Closed\" sont mis en miroir. Vous pouvez spécifier des statuts particuliers (séparés par des virgules) dans {1} et activer l'option {2} pour ajouter les statuts marqués \"End Status\" dans Splunk et pour ajouter des statuts supplémentaires au processus de mise en miroir.",
    "Optional: Check the {0} integration parameter to close the Splunk finding when the corresponding Cortex incident is closed. {1}":
      "Facultatif : cochez le paramètre d'intégration {0} pour fermer le finding Splunk lorsque l'incident Cortex correspondant est fermé. {1}",
    "Optional: Check the {0} integration parameter to close the Splunk notable when the corresponding Cortex incident is closed.":
      "Facultatif : cochez le paramètre d'intégration {0} pour fermer le notable Splunk lorsque l'incident Cortex correspondant est fermé.",
    "The drilldown search does not support Splunk’s advanced syntax. For example: Splunk filters ({0}, {1}, etc.)":
      "La recherche drilldown ne prend pas en charge la syntaxe avancée de Splunk. Par exemple : filtres Splunk ({0}, {1}, etc.)",
    "The grant type used to get an access token is {0}. See the {1} for more information.":
      "Le type d'octroi utilisé pour obtenir un jeton d'accès est {0}. Consultez {1} pour plus d'informations.",
    "The integration allows for fetching Splunk {0} and {1} events using default queries. The queries can be changed and modified to support different Splunk use cases.":
      "L'intégration permet de récupérer les événements {0} et {1} de Splunk à l'aide de requêtes par défaut. Les requêtes peuvent être modifiées pour prendre en charge différents cas d'usage de Splunk.",
    "The integration sends data to TypeSafe’s hosted API. Review your organization’s data-handling requirements before including incident evidence, personal data, credentials, or other sensitive content in {0}.":
      "L'intégration envoie des données à l'API hébergée de TypeSafe. Passez en revue les exigences de traitement des données de votre organisation avant d'inclure des preuves d'incident, des données personnelles, des identifiants ou tout autre contenu sensible dans {0}.",
    "These instructions explain how to build a query, which you can use as the value for the {0} argument. You can use this argument in the {1} and {2} commands.":
      "Ces instructions expliquent comment créer une requête que vous pouvez utiliser comme valeur de l'argument {0}. Vous pouvez utiliser cet argument dans les commandes {1} et {2}.",
    "This integration only reads data (company findings, supplier findings, and the supplier list) - it never creates, updates, or deletes anything in Panorays. The read-only {0} role is sufficient for both {1} and {2} scopes, including reading across your entire supplier portfolio.":
      "Cette intégration lit uniquement les données (constats de l'entreprise, constats des fournisseurs et liste des fournisseurs) ; elle ne crée, ne met à jour et ne supprime jamais rien dans Panorays. Le rôle en lecture seule {0} suffit pour les portées {1} et {2}, y compris la lecture de l'ensemble de votre portefeuille de fournisseurs.",
    "This integration uses {0}.":
      "Cette intégration utilise {0}.",
    "To export the query, click the {0} button.":
      "Pour exporter la requête, cliquez sur le bouton {0}.",
    "To use API 2.0, you need to generate a {0} and {1} from the Mimecast admin console:":
      "Pour utiliser API 2.0, vous devez générer un {0} et un {1} depuis la console d'administration Mimecast :",
    "To use this integration you need a RelayShield API key. RelayShield authenticates every request with a single API key sent in the {0} header. There are no OAuth flows, tenant IDs, or additional permissions to grant.":
      "Pour utiliser cette intégration, vous avez besoin d'une clé API RelayShield. RelayShield authentifie chaque requête à l'aide d'une seule clé API envoyée dans l'en-tête {0}. Il n'y a ni flux OAuth, ni ID de tenant, ni autorisations supplémentaires à accorder.",
    "Type the {0} and {1}.":
      "Saisissez {0} et {1}.",
    "Under Classifier, select {0}. The classifier routes Finding events to the {1} incident type and Investigation events to the {2} incident type.":
      "Sous Classifier, sélectionnez {0}. Le classificateur achemine les événements Finding vers le type d'incident {1} et les événements Investigation vers le type d'incident {2}.",
    "Under Mapper (incoming), select {0}.":
      "Sous Mapper (incoming), sélectionnez {0}.",
    "Under Mapper (outgoing), select {0}.":
      "Sous Mapper (outgoing), sélectionnez {0}.",
    "Visit {0}.":
      "Rendez-vous sur {0}.",
    "When running the {0} command, a refresh token is generated and will be used to produce new access tokens after the current access token has expired.":
      "Lors de l'exécution de la commande {0}, un jeton d'actualisation est généré et sera utilisé pour produire de nouveaux jetons d'accès après l'expiration du jeton d'accès actuel.",
    "Will need to change the {0} integration parameter to the following query (or a fetch query of their own that uses the `notable` macro):":
      "Il sera nécessaire de remplacer le paramètre d'intégration {0} par la requête suivante (ou par une requête de récupération personnalisée qui utilise la macro `notable`) :",
    "You can go to the {0} parameter and select the query to fetch the findings from Splunk. Make sure to provide a query which uses the `notable` macro, See the default query as an example.":
      "Vous pouvez accéder au paramètre {0} et sélectionner la requête permettant de récupérer les findings depuis Splunk. Veillez à fournir une requête qui utilise la macro `notable`. Consultez la requête par défaut à titre d'exemple.",
    "You can go to the {0} parameter and select the query to fetch the notables from Splunk. Make sure to provide a query which uses the `notable` macro, See the default query as an example.":
      "Vous pouvez accéder au paramètre {0} et sélectionner la requête permettant de récupérer les notables depuis Splunk. Veillez à fournir une requête qui utilise la macro `notable`. Consultez la requête par défaut à titre d'exemple.",
    "API Access Policy should be configured as global in order to cover all available resources and not just now/table":
      "La politique d'accès à l'API doit être configurée comme globale afin de couvrir toutes les ressources disponibles et pas seulement now/table",
    "Findings scope":
      "Portée des Findings",
    "Select Add Site License.":
      "Sélectionnez Add Site License.",
    "Select the Assets > Site Licenses tab.":
      "Sélectionnez l'onglet Assets > Site Licenses.",
    "Select the Enable action in Site Licenses.":
      "Sélectionnez l'action Enable dans Site Licenses.",
    "The BotJID in the Chat subscription section on the Features page of your App Dashboard.":
      "Le BotJID figurant dans la section Chat subscription de la page Features de votre App Dashboard.",
    "Zoom Integration":
      "Intégration Zoom",

    // --- Batch: Integration docs, parameter labels, tooltips and table descriptions (06:04 export, Collector 0.2.0 full re-collection) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    "Manual Mode":
      "Mode manuel",
    "(For Cortex) For use with HTTPS - the certificate that the service should use. (For Cortex and Cortex XSIAM) Custom certificates are not supported.":
      "(Pour Cortex) À utiliser avec HTTPS : le certificat que le service doit utiliser. (Pour Cortex et Cortex XSIAM) Les certificats personnalisés ne sont pas pris en charge.",
    "(For Cortex) For use with HTTPS - the private key that the service should use. <br> (For Cortex and Cortex XSIAM) When using an engine, configure a private API key. Not supported on the Cortex 8 or Cortex XSIAM server.":
      "(Pour Cortex) À utiliser avec HTTPS : la clé privée que le service doit utiliser. <br> (Pour Cortex et Cortex XSIAM) Lorsque vous utilisez un moteur, configurez une clé API privée. Non pris en charge sur le serveur Cortex 8 ou Cortex XSIAM.",
    "(Optional: Add additional request headers in the field “Additional request headers” as key:value pairs, one request header per line)":
      "(Facultatif : ajoutez des en-têtes de requête supplémentaires dans le champ « Additional request headers » sous forme de paires clé:valeur, un en-tête de requête par ligne)",
    "(Optional: If you want incidents to be created automatically out of the retrieved data, activate the checkbox “Fetches issues” in the “Collect” section of the setup)":
      "(Facultatif : si vous souhaitez que des incidents soient créés automatiquement à partir des données récupérées, activez la case à cocher « Fetches issues » dans la section « Collect » de la configuration)",
    "A comma-separated list of AWS Organization accounts to use when running EC2 commands. A role name for cross-organization account access must be provided to use this feature.":
      "Liste séparée par des virgules de comptes AWS Organization à utiliser lors de l'exécution de commandes EC2. Un nom de rôle pour l'accès aux comptes entre organisations doit être fourni pour utiliser cette fonctionnalité.",
    "A successful API call returns status=“success” along with the API key within the key element:":
      "Un appel d'API réussi renvoie status=« success » ainsi que la clé API dans l'élément key :",
    "Access Type (Impersonation is deprecated as of February 2025)":
      "Type d'accès (Impersonation est obsolète depuis février 2025)",
    "Additional request headers":
      "En-têtes de requête supplémentaires",
    "After providing the mandatory details, click Test* to test the configuration.":
      "Après avoir renseigné les détails obligatoires, cliquez sur Test* pour tester la configuration.",
    "After this time the connection pool will be refreshed":
      "Passé ce délai, le pool de connexions sera actualisé",
    "AIOps Authentication:":
      "Authentification AIOps :",
    "And one of the following:":
      "Et l'un des éléments suivants :",
    "ANY.RUN API-KEY without prefix":
      "API-KEY ANY.RUN sans préfixe",
    "API Base URL":
      "URL de base de l'API",
    "API URL":
      "URL de l'API",
    "Authentication method available:":
      "Méthode d'authentification disponible :",
    "Authentication methods configuration:":
      "Configuration des méthodes d'authentification :",
    "Authorize the API client for the required scopes. You use these scopes in the POST request to the /oauth/token endpoint. The Required Scopes are:":
      "Autorisez le client API pour les portées requises. Vous utilisez ces portées dans la requête POST envoyée au point de terminaison /oauth/token. Les portées requises sont :",
    "Available options:":
      "Options disponibles :",
    "AWS Default Region":
      "Région AWS par défaut",
    "AWS organization accounts":
      "Comptes AWS Organization",
    "Base domain for the ANY.RUN connection. By default, the domain is any.run.":
      "Domaine de base pour la connexion ANY.RUN. Par défaut, le domaine est any.run.",
    "Base domain for the ANY.RUN connection. Enter only the domain (e.g. any.run), without a scheme or trailing slash.":
      "Domaine de base pour la connexion ANY.RUN. Saisissez uniquement le domaine (par exemple, any.run), sans schéma ni barre oblique finale.",
    "Before configuring this integration, you need:":
      "Avant de configurer cette intégration, vous avez besoin de :",
    "Bot Type Converted to Single-Tenant":
      "Type de bot converti en tenant unique",
    "Broker CA certificates":
      "Certificats CA du Broker",
    "Broker CA certificates (‘brokercerts.crt’ file)":
      "Certificats CA du Broker (fichier ‘brokercerts.crt’)",
    "Broker CA certificates content (see `brokercerts.crt` in Integration Tips)":
      "Contenu des certificats CA du Broker (voir `brokercerts.crt` dans Conseils sur l'intégration)",
    "Broker list properties file (‘brokerlist.properties’ file)":
      "Fichier de propriétés de la liste des Broker (fichier ‘brokerlist.properties’)",
    "Broker URLs":
      "URL du Broker",
    "Cache 404 TTL":
      "TTL du cache 404",
    "Cache Default TTL":
      "TTL du cache par défaut",
    "Caps the number of Darkmon records ingested as incidents per fetch cycle to protect the war room from sudden backlogs.":
      "Plafonne le nombre d'enregistrements Darkmon ingérés en tant qu'incidents par cycle de récupération afin de protéger le Warroom contre les arriérés soudains.",
    "Choose the instance configuration base URL based on the server location:":
      "Choisissez l'URL de base de configuration de l'instance en fonction de l'emplacement du serveur :",
    "Choose the tag to add to an entry to mirror it as a comment in Jira.":
      "Choisissez l'étiquette à ajouter à une entrée pour la mettre en miroir en tant que commentaire dans Jira.",
    "Choose the tag to add to an entry to mirror it as an attachment in Jira.":
      "Choisissez l'étiquette à ajouter à une entrée pour la mettre en miroir en tant que pièce jointe dans Jira.",
    "Ciphers":
      "Chiffrements",
    "Clear, Deep, and Dark Web - tailored to your assets.":
      "Web clair, profond et sombre, adaptés à vos actifs.",
    "Click “Add API Client”.":
      "Cliquez sur « Add API Client ».",
    "Click “Save”.":
      "Cliquez sur « Save ».",
    "Click on “CONNECT CORTEX XSOAR”":
      "Cliquez sur « CONNECT CORTEX XSOAR »",
    "Configure a SpecterOps BloodHound Enterprise integration instance by providing the following mandatory details:":
      "Configurez une instance d'intégration SpecterOps BloodHound Enterprise en renseignant les détails obligatoires suivants :",
    "Configure the instance by providing following mandatory details:":
      "Configurez l'instance en renseignant les détails obligatoires suivants :",
    "Confirm that the pre-filled URL matches the correct API endpoint for your Anomali ThreatStream instance.":
      "Vérifiez que l'URL préremplie correspond au point de terminaison d'API correct de votre instance Anomali ThreatStream.",
    "Connect to an OAuth provider and create an OAuth application registry by accessing All→System OAuth→Application Registry:":
      "Connectez-vous à un fournisseur OAuth et créez un registre d'applications OAuth en accédant à All→System OAuth→Application Registry :",
    "Content metadata":
      "Métadonnées de contenu",
    "Cortex version 6.0.0 and below:":
      "Cortex version 6.0.0 et antérieures :",
    "Create an account in Prisma SASE UI:":
      "Créez un compte dans l'interface Prisma SASE :",
    "Create user if does not exist":
      "Créer l'utilisateur s'il n'existe pas",
    "Darkmon incident types to fetch":
      "Types d'incidents Darkmon à récupérer",
    "Deprecation Note:":
      "Remarque sur l'obsolescence :",
    "Developer Contributed Integration":
      "Intégration fournie par un développeur",
    "Device group - Panorama instances only (write shared for Shared location)":
      "Groupe de périphériques - instances Panorama uniquement (saisissez shared pour l'emplacement partagé)",
    "Domain (used in Multi Domain Server)":
      "Domaine (utilisé dans Multi Domain Server)",
    "DOMAIN\\USERNAME (e.g. DEMISTO.INT\\admin)":
      "DOMAIN\\USERNAME (par exemple : DEMISTO.INT\\admin)",
    "Each enriched incident contains the following fields in the incident context:":
      "Chaque incident enrichi contient les champs suivants dans le contexte de l'incident :",
    "Enable the “Allow Multiple Logins” checkbox for the relevant user.":
      "Activez la case « Allow Multiple Logins » pour l'utilisateur concerné.",
    "Enable to automatically tag indicators with Analyst1 entity type classifications (e.g., \"Analyst1: Indicator\", \"Analyst1: Asset\", \"Analyst1: In Private Range\"). Tags help identify how Analyst1 classifies each indicator.":
      "Activez cette option pour étiqueter automatiquement les indicateurs avec les classifications de type d'entité d'Analyst1 (par exemple : \"Analyst1: Indicator\", \"Analyst1: Asset\", \"Analyst1: In Private Range\"). Les étiquettes permettent d'identifier la façon dont Analyst1 classe chaque indicateur.",
    "Exchange Server Hostname or IP address":
      "Nom d'hôte ou adresse IP du serveur Exchange",
    "Exchange Server Version (On-Premise only. Supported versions: 2007, 2010, 2010_SP2, 2013, 2013_SP1, 2016, and 2019)":
      "Version d'Exchange Server (sur site uniquement. Versions prises en charge : 2007, 2010, 2010_SP2, 2013, 2013_SP1, 2016 et 2019)",
    "Fetch attachments for a Jira ticket.":
      "Récupère les pièces jointes d'un ticket Jira.",
    "Fetch comments for a Jira ticket.":
      "Récupère les commentaires d'un ticket Jira.",
    "Fetch incidents only for devices with the device families selected":
      "Récupère les incidents uniquement pour les appareils appartenant aux familles d'appareils sélectionnées",
    "Fetch incidents only for devices with the tags selected":
      "Récupère les incidents uniquement pour les appareils portant les étiquettes sélectionnées",
    "Fetch incidents:":
      "Récupération des incidents :",
    "Fetch Incidents:":
      "Récupération des incidents :",
    "Filter the Detections by “Create Incidents for Prioritized Detections”, “Create Incidents for Escalated Detections”:":
      "Filtrez les détections par « Create Incidents for Prioritized Detections » et « Create Incidents for Escalated Detections » :",
    "Finding Environment":
      "Environnement de la détection",
    "First fetch query time range when starting from a clean state. Accepts ISO timestamps or relative durations (e.g. \"3 days\", \"12 hours\").":
      "Plage de temps de la requête de la première récupération lors d'un démarrage à partir d'un état vierge. Accepte les horodatages ISO ou les durées relatives (par exemple : \"3 days\", \"12 hours\").",
    "Following new fields are introduced in the response of the incident to enable the mirroring:":
      "Les nouveaux champs suivants ont été introduits dans la réponse de l'incident afin d'activer la mise en miroir :",
    "For detailed instructions, refer to the official Splunk documentation:":
      "Pour obtenir des instructions détaillées, consultez la documentation officielle de Splunk :",
    "For example:":
      "Par exemple :",
    "For the OAuth method:":
      "Pour la méthode OAuth :",
    "For the URL argument, take a look here:":
      "Pour l'argument URL, consultez ceci :",
    "For VMware Carbon Black EDR:":
      "Pour VMware Carbon Black EDR :",
    "For VMware Carbon Black Endpoint Standard:":
      "Pour VMware Carbon Black Endpoint Standard :",
    "Format: server.analyst1.com (do not include http:// or https://)":
      "Format : server.analyst1.com (n'incluez pas http:// ni https://)",
    "Gather additional information about the threat model from remote APIs.":
      "Collectez des informations supplémentaires sur le modèle de menaces à partir d'API distantes.",
    "Generate API token":
      "Générer un jeton API",
    "Get an API key":
      "Obtenir une clé API",
    "Go to classifier":
      "Accéder au classificateur",
    "Go to incoming mapper":
      "Accéder au mappeur entrant",
    "If MFA is enabled for your user, follow the next steps:":
      "Si l'authentification multifacteur est activée pour votre utilisateur, procédez comme suit :",
    "If MFA is enabled for your user, perform the following steps:":
      "Si l'authentification multifacteur est activée pour votre utilisateur, effectuez les étapes suivantes :",
    "If set to false, iam-create-user command will be skipped, and user will not be created.":
      "Si la valeur est false, la commande iam-create-user sera ignorée et l'utilisateur ne sera pas créé.",
    "If the connection test was successful, click “Save & Exit”":
      "Si le test de connexion a réussi, cliquez sur « Enregistrer et quitter »",
    "If this parameter is given, the commands will run with the UPN mailbox instead of the default target mailbox.":
      "Si ce paramètre est fourni, les commandes s'exécuteront avec la boîte aux lettres UPN au lieu de la boîte aux lettres cible par défaut.",
    "If true, the user is created if the user profile doesn't exist in AD. Used in IAM commands only.":
      "Si la valeur est true, l'utilisateur est créé si le profil utilisateur n'existe pas dans AD. Utilisé uniquement dans les commandes IAM.",
    "In order to connect to Microsoft Graph Services using either Cortex Azure App or the Self-Deployed Azure App:":
      "Pour vous connecter à Microsoft Graph Services à l'aide de Cortex Azure App ou de Self-Deployed Azure App :",
    "In order to create an instance of the Microsoft Teams Webhook in Cortex, complete the following:":
      "Pour créer une instance de Microsoft Teams Webhook dans Cortex, procédez comme suit :",
    "In order to create the API Key go to:":
      "Pour créer la clé API, accédez à :",
    "In order to use multiple values for the same filter and get alerts that have one of the values, state them several time, for example:":
      "Pour utiliser plusieurs valeurs pour un même filtre et obtenir les alertes correspondant à l'une de ces valeurs, indiquez-les plusieurs fois, par exemple :",
    "In Terraform Enterprise:":
      "Dans Terraform Enterprise :",
    "In the Azure Application you created give the following application permission:":
      "Dans l'application Azure que vous avez créée, accordez l'autorisation d'application suivante :",
    "In the Cortex Xsoar configuration window:":
      "Dans la fenêtre de configuration de Cortex Xsoar :",
    "In the Silent Push Profile menu, click Organization, and go to the API tab.":
      "Dans le menu Profile de Silent Push, cliquez sur Organization, puis accédez à l'onglet API.",
    "Joe Security Url":
      "URL de Joe Security",
    "Log in to your Zoom admin user account, and follow these steps:":
      "Connectez-vous à votre compte d'utilisateur administrateur Zoom et suivez ces étapes :",
    "Make sure you have the following parameters:":
      "Assurez-vous de disposer des paramètres suivants :",
    "Max concurrent command calls":
      "Nombre maximal d'appels de commande simultanés",
    "Max. Polling Time (in seconds):":
      "Durée maximale d'interrogation (en secondes) :",
    "Maximum number of incidents per fetch. The default value is 200.":
      "Nombre maximal d'incidents par récupération. La valeur par défaut est 200.",
    "More information about National clouds can be found here - https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud":
      "Vous trouverez plus d'informations sur les clouds nationaux ici : https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud",
    "Navigate to one of the following:":
      "Accédez à l'une des options suivantes :",
    "Navigate to User Settings. (Vertical ellipsis available on the top right corner).":
      "Accédez à User Settings (les points de suspension verticaux sont disponibles dans le coin supérieur droit).",
    "Next, you need to extract the private.key. You can do this using the following commands:":
      "Ensuite, vous devez extraire private.key. Vous pouvez le faire à l'aide des commandes suivantes :",
    "NGINX Global Directives":
      "Directives globales NGINX",
    "NGINX global directives to be passed on the command line using the -g option. Each directive should end with `;`. For example: `worker_processes 4; timer_resolution 100ms;`. Advanced configuration to be used only if instructed by Cortex Support.":
      "Directives globales NGINX à transmettre sur la ligne de commande à l'aide de l'option -g. Chaque directive doit se terminer par `;`. Par exemple : `worker_processes 4; timer_resolution 100ms;`. Configuration avancée à utiliser uniquement sur instruction du support Cortex.",
    "NGINX Read Timeout":
      "Délai d'expiration de lecture NGINX",
    "NGINX Server Conf":
      "Configuration du serveur NGINX",
    "NGINX server configuration to be used instead of the default NGINX_SERVER_CONF used in the integration code. Advanced configuration to be used only if instructed by Cortex Support.":
      "Configuration du serveur NGINX à utiliser à la place de NGINX_SERVER_CONF, utilisée par défaut dans le code de l'intégration. Configuration avancée à utiliser uniquement sur instruction du support Cortex.",
    "NGNIX read timeout in seconds.":
      "Délai d'expiration de lecture NGINX en secondes.",
    "NTLM authentication":
      "Authentification NTLM",
    "OAuth2 Client Credentials":
      "Informations d'identification du client OAuth2",
    "Override Authentication Type (NTLM, Basic, or Digest).":
      "Remplacez le type d'authentification (NTLM, Basic ou Digest).",
    "Override the Darkmon TIP API base URL only if your tenant points at a non-default endpoint. The default value already targets the production Darkmon TIP service (https://api.darkmon.com/tip/2025.1). Leave blank to use the default.":
      "Remplacez l'URL de base de l'API Darkmon TIP uniquement si votre tenant pointe vers un endpoint autre que celui par défaut. La valeur par défaut cible déjà le service Darkmon TIP de production (https://api.darkmon.com/tip/2025.1). Laissez ce champ vide pour utiliser la valeur par défaut.",
    "Panorama / Pan-OS Authentication:":
      "Authentification Panorama / Pan-OS :",
    "Panorama: Configure a device group":
      "Panorama : configurer un groupe de périphériques",
    "Paste the API key into the settings of this integration in the field “API Key”":
      "Collez la clé API dans les paramètres de cette intégration, dans le champ « API Key ».",
    "Port is optional (e.g https://sonar.example.com:9000)":
      "Le port est facultatif (par exemple https://sonar.example.com:9000)",
    "Post to a channel when a webhook request is received":
      "Publier dans un canal lorsqu'une requête webhook est reçue",
    "PrivateLink service URL.":
      "URL du service PrivateLink.",
    "Product version id":
      "ID de la version du produit",
    "Product versions name":
      "Nom des versions du produit",
    "Production vs development":
      "Production et développement",
    "Products id":
      "ID des produits",
    "Products name":
      "Nom des produits",
    "Public Folder":
      "Dossier public",
    "Redact secrets in War Room output":
      "Masquer les secrets dans la sortie de la War Room",
    "Required Permissions:":
      "Autorisations requises :",
    "Requited. Not relevant for deprecated GSuite Apps setup - see Help section":
      "Obligatoire. Non pertinent pour la configuration obsolète de GSuite Apps ; consultez la section d'aide.",
    "Result name":
      "Nom du résultat",
    "Result short name":
      "Nom court du résultat",
    "Result vendor url (only human readable)":
      "URL du fournisseur du résultat (lisible par l'humain uniquement)",
    "Retries":
      "Nouvelles tentatives",
    "Role name for cross-organization account access":
      "Nom du rôle pour l'accès aux comptes entre organisations",
    "Role Session Duration":
      "Durée de la session du rôle",
    "Run as a separate process (protects against memory depletion)":
      "Exécuter en tant que processus distinct (protège contre l'épuisement de la mémoire)",
    "Search query for fetching alerts. The default fetch query is \"alert\".":
      "Requête de recherche pour récupérer les alertes. La requête de récupération par défaut est « alert ».",
    "Select Fetches incidents.":
      "Sélectionnez Fetches incidents.",
    "Select how to authenticate with the Analyst1 API. Basic Authentication uses username/password. OAuth2 uses client_id/client_secret from an API Key.":
      "Sélectionnez la méthode d'authentification auprès de l'API Analyst1. L'authentification de base utilise un nom d'utilisateur et un mot de passe. OAuth2 utilise client_id/client_secret d'une clé API.",
    "Select the authentication method.":
      "Sélectionnez la méthode d'authentification.",
    "Select the Incident Mirroring Direction:":
      "Sélectionnez le sens de mise en miroir des incidents :",
    "Select this checkbox if you are using a US Government cloud account.":
      "Cochez cette case si vous utilisez un compte cloud du gouvernement américain.",
    "Server port. If not specified, the default port is 389 for LDAP, 636 for LDAPS, or 3268 for global catalog servers.":
      "Port du serveur. S'il n'est pas spécifié, le port par défaut est 389 pour LDAP, 636 pour LDAPS ou 3268 pour les serveurs de catalogue global.",
    "SSL Version":
      "Version SSL",
    "Start fetching incidents from the specified time.":
      "Commencez à récupérer les incidents à partir de l'heure spécifiée.",
    "STS PrivateLink URL.":
      "URL PrivateLink STS.",
    "STS Region":
      "Région STS",
    "Supported authentication methods:":
      "Méthodes d'authentification prises en charge :",
    "The account identifier can be found using the user blade at the bottom left. Hover over the account you wish to onboard and select the copy option at the top right.":
      "L'identifiant du compte se trouve dans le panneau utilisateur en bas à gauche. Survolez le compte que vous souhaitez intégrer et sélectionnez l'option de copie en haut à droite.",
    "The account identifier is usually of the format: [organization].[account]":
      "L'identifiant du compte est généralement au format [organization].[account].",
    "The API key must be entitled to the endpoints backing the commands you intend to run:":
      "La clé API doit disposer des droits d'accès aux endpoints sur lesquels reposent les commandes que vous prévoyez d'exécuter :",
    "The AWS region used to create the STS client. Set this explicitly when STS calls must target a fixed region regardless of the command's target region.":
      "La région AWS utilisée pour créer le client STS. Définissez-la explicitement lorsque les appels STS doivent cibler une région fixe, quelle que soit la région cible de la commande.",
    "The base URL. For a cloud instance, use the default URL as configured. For an OnPrem instance, use your respective domain.":
      "L'URL de base. Pour une instance cloud, utilisez l'URL par défaut configurée. Pour une instance OnPrem, utilisez votre domaine respectif.",
    "The default Kibana space ID to use for es-kibana-* commands. Used to derive the Kibana base URL from the Server URL. If a space_id argument is provided to a command, it overrides this value. See https://www.elastic.co/docs/deploy-manage/manage-spaces for more information.":
      "L'ID d'espace Kibana par défaut à utiliser pour les commandes es-kibana-*. Il sert à déduire l'URL de base de Kibana à partir de l'URL du serveur. Si un argument space_id est fourni à une commande, il remplace cette valeur. Consultez https://www.elastic.co/docs/deploy-manage/manage-spaces pour plus d'informations.",
    "The default TTL for responses in the cache.":
      "Le TTL par défaut des réponses dans le cache.",
    "The field selected in the \"Issue Field to fetch by\" can't be used in the query.":
      "Le champ sélectionné dans « Issue Field to fetch by » ne peut pas être utilisé dans la requête.",
    "The following are the required managed modules for this integration:":
      "Voici les modules gérés requis pour cette intégration :",
    "The following commands require the API access to be configured:":
      "Les commandes suivantes nécessitent la configuration de l'accès à l'API :",
    "The following commands require the SSH access to be configured:":
      "Les commandes suivantes nécessitent la configuration de l'accès SSH :",
    "The following scopes are required for the Okta v2 integration to work properly:":
      "Les portées suivantes sont requises pour le bon fonctionnement de l'intégration Okta v2 :",
    "The incidents are fetched according to a number of different optional log type queries. The log types are:":
      "Les incidents sont récupérés selon plusieurs requêtes facultatives par type de journal. Les types de journaux sont :",
    "The integration supports three types of authorization:":
      "L'intégration prend en charge trois types d'autorisation :",
    "The integration supports two types of authorization:":
      "L'intégration prend en charge deux types d'autorisation :",
    "The integration uses the supplied username and password to obtain a bearer token from Elasticsearch via the Get token API. Before using Bearer Authentication, ensure the token service is enabled on your Elasticsearch cluster:":
      "L'intégration utilise le nom d'utilisateur et le mot de passe fournis pour obtenir un jeton porteur auprès d'Elasticsearch via l'API Get token. Avant d'utiliser l'authentification Bearer, assurez-vous que le service de jetons est activé sur votre cluster Elasticsearch :",
    "The Kibana server used by the es-kibana-* commands and by fetching and mirroring security alerts and cases. Required for on-premises (self-managed) deployments, where Kibana is usually hosted separately from Elasticsearch (for example, https://kibana.example.com:5601). If left empty, the Kibana URL is derived from the Server URL, which is supported only for Elastic Cloud deployments whose hostname contains \".es.\" (the segment is replaced with \".kb.\").":
      "Le serveur Kibana utilisé par les commandes es-kibana-* ainsi que pour la récupération et la mise en miroir des alertes et des cas de sécurité. Obligatoire pour les déploiements sur site (autogérés), où Kibana est généralement hébergé séparément d'Elasticsearch (par exemple, https://kibana.example.com:5601). S'il est laissé vide, l'URL de Kibana est déduite de l'URL du serveur, ce qui n'est pris en charge que pour les déploiements Elastic Cloud dont le nom d'hôte contient « .es. » (le segment est remplacé par « .kb. »).",
    "The maximum allowed value is dictated by the Jira property 'jira.search.views.default.max'. If you specify a value that is higher than this number, your search results will be truncated. Default value is 50":
      "La valeur maximale autorisée est dictée par la propriété Jira 'jira.search.views.default.max'. Si vous indiquez une valeur supérieure à ce nombre, les résultats de la recherche seront tronqués. La valeur par défaut est 50.",
    "The maximum number of concurrent calls to allow when running a command on all accounts provided in \"AWS Organization accounts to access\".":
      "Le nombre maximal d'appels simultanés autorisés lors de l'exécution d'une commande sur tous les comptes indiqués dans « AWS Organization accounts to access ».",
    "The maximum number of retry attempts when connection or throttling errors are encountered. Set to 0 to disable retries. The default value is 5 and the limit is 10. Note: Increasing the number of retries will increase the execution time.":
      "Le nombre maximal de nouvelles tentatives en cas d'erreurs de connexion ou de limitation. Définissez 0 pour désactiver les nouvelles tentatives. La valeur par défaut est 5 et la limite est 10. Remarque : l'augmentation du nombre de nouvelles tentatives allongera le temps d'exécution.",
    "The parameter can be saved as 000-000 and added as an argument to each command, but Test button will fail.":
      "Le paramètre peut être enregistré sous la forme 000-000 et ajouté comme argument à chaque commande, mais le bouton Test échouera.",
    "The parameter can be saved as 000-000 and added as an argument to each command.":
      "Le paramètre peut être enregistré sous la forme 000-000 et ajouté comme argument à chaque commande.",
    "The role name used to access accounts in the organization. This role name must exist in the accounts provided in \"AWS Organization accounts\" and be assumable with the credentials provided.":
      "Le nom du rôle utilisé pour accéder aux comptes de l'organisation. Ce nom de rôle doit exister dans les comptes indiqués dans « AWS Organization accounts » et pouvoir être endossé avec les identifiants fournis.",
    "The SSL\\TLS version to use in SSL or Start TLS connections types. Default is None. It is recommended to select the TLS_CLIENT option, which auto-negotiate the highest protocol version that both the client and server support, and configure the context client-side connections.":
      "La version SSL\\TLS à utiliser pour les types de connexion SSL ou Start TLS. La valeur par défaut est None. Il est recommandé de sélectionner l'option TLS_CLIENT, qui négocie automatiquement la version de protocole la plus élevée prise en charge à la fois par le client et le serveur, et configure le contexte des connexions côté client.",
    "The time in seconds till a timeout exception is reached. You can specify just the read timeout (for example 60) or also the connect timeout followed after a comma (for example 60,10). If a connect timeout is not specified, a default of 10 second will be used.":
      "Le délai en secondes avant qu'une exception de délai d'attente ne soit levée. Vous pouvez spécifier uniquement le délai de lecture (par exemple 60) ou également le délai de connexion, séparé par une virgule (par exemple 60,10). Si aucun délai de connexion n'est spécifié, la valeur par défaut de 10 secondes est utilisée.",
    "The time range to consider for the initial data fetch in format: <number> <unit>. This parameter is only relevant when selecting to fetch by created time, or updated time. Default is 3 days. For example: 2 minutes, 2 hours, 2 days, 2 months, 2 years":
      "La plage de temps à prendre en compte pour la récupération initiale des données, au format : <number> <unit>. Ce paramètre n'est pertinent que si vous choisissez de récupérer par heure de création ou de mise à jour. La valeur par défaut est de 3 jours. Par exemple : 2 minutes, 2 hours, 2 days, 2 months, 2 years",
    "The TTL for 404 responses in the cache.":
      "Le TTL des réponses 404 dans le cache.",
    "There are three ways to authenticate to the Microsoft Graph Services:":
      "Il existe trois façons de s'authentifier auprès des services Microsoft Graph :",
    "There is only one application authentication method available:":
      "Une seule méthode d'authentification d'application est disponible :",
    "These parameters support the following integration commands:":
      "Ces paramètres prennent en charge les commandes d'intégration suivantes :",
    "This field is ignored if other required fields are not provided (for example both the access token and the private key).":
      "Ce champ est ignoré si les autres champs obligatoires ne sont pas renseignés (par exemple, à la fois le jeton d'accès et la clé privée).",
    "This field is used to configure the Jira Cloud.":
      "Ce champ est utilisé pour configurer Jira Cloud.",
    "This integration supports sending messages to additional Teams via a workflow. There are 2 methods for this:":
      "Cette intégration permet d'envoyer des messages à d'autres équipes Teams via un workflow. Il existe 2 méthodes :",
    "This integration supports three authentication methods:":
      "Cette intégration prend en charge trois méthodes d'authentification :",
    "This integration supports two authentication methods:":
      "Cette intégration prend en charge deux méthodes d'authentification :",
    "This is how the field (e.g, created date) is applied to the query: created >= {created date in last run} ORDER BY created ASC":
      "Voici comment le champ (par exemple, la date de création) est appliqué à la requête : created >= {created date in last run} ORDER BY created ASC",
    "This parameter is dismissed if \"id\" is not chosen in \"Issue Field to Fetch by\". This will only fetch Jira issues that are part of the same project as the issue that is configured in this parameter. If this value is 0, then the fetch mechanism will automatically start the fetch from the smallest ID with respect to the fetch query.":
      "Ce paramètre est ignoré si \"id\" n'est pas sélectionné dans \"Issue Field to Fetch by\". Il ne récupérera que les tickets Jira appartenant au même projet que le ticket configuré dans ce paramètre. Si cette valeur est 0, le mécanisme de récupération démarrera automatiquement à partir de l'ID le plus petit selon la requête de récupération.",
    "This parameter is dismissed while \"Use created field to fetch incidents\" is checked.":
      "Ce paramètre est ignoré tant que \"Use created field to fetch incidents\" est coché.",
    "This section explains how to configure the instance of ANY.RUN TI Lookup in Cortex.":
      "Cette section explique comment configurer l'instance d'ANY.RUN TI Lookup dans Cortex.",
    "This token is used for both OAuth 1.0 and personal access token authentication methods.":
      "Ce jeton est utilisé à la fois pour OAuth 1.0 et pour les méthodes d'authentification par jeton d'accès personnel.",
    "This will be in the following format: https://customer-portal.asimily.com.":
      "Le format sera le suivant : https://customer-portal.asimily.com.",
    "TIM customers that upgraded to version 6.2 or above, can have this value pre-configured in their main account so no additional input is needed. To use this feature, upgrade your license so it includes the license key.":
      "Les clients TIM ayant effectué une mise à niveau vers la version 6.2 ou ultérieure peuvent avoir cette valeur préconfigurée dans leur compte principal ; aucune saisie supplémentaire n'est donc nécessaire. Pour utiliser cette fonctionnalité, mettez à niveau votre licence afin qu'elle inclue la clé de licence.",
    "Timeout (in seconds) for HTTP requests to Exchange Server":
      "Délai d'expiration (en secondes) des requêtes HTTP vers Exchange Server",
    "To configure the integration, you’ll need:":
      "Pour configurer l'intégration, vous aurez besoin de :",
    "To configure the integration:":
      "Pour configurer l'intégration :",
    "To configure this integration, you will need:":
      "Pour configurer cette intégration, vous aurez besoin de :",
    "To connect to the Microsoft Defender XDR:":
      "Pour vous connecter à Microsoft Defender XDR :",
    "To create an API key in Kibana:":
      "Pour créer une clé API dans Kibana :",
    "To create an instance of the Microsoft Teams integration in Cortex, complete the following:":
      "Pour créer une instance de l'intégration Microsoft Teams dans Cortex, procédez comme suit :",
    "To enable asset fetching:":
      "Pour activer la récupération des actifs :",
    "To fetch Vectra RUX Events Detections follow the next steps:":
      "Pour récupérer Vectra RUX Events Detections, procédez comme suit :",
    "To generate an API key, make a POST request to the firewall’s hostname or IP addresses using the administrative credentials and type=keygen:":
      "Pour générer une clé API, envoyez une requête POST au nom d'hôte ou aux adresses IP du pare-feu en utilisant les identifiants d'administrateur et type=keygen :",
    "To generate the files needed for SSL, you will need to create a Kafka client keystore. You can use the script at:":
      "Pour générer les fichiers nécessaires à SSL, vous devrez créer un keystore client Kafka. Vous pouvez utiliser le script disponible à l'adresse suivante :",
    "To get your Vectra Client ID and Client Secret Key, follow these steps:":
      "Pour obtenir votre ID client et votre clé secrète client Vectra, procédez comme suit :",
    "To learn more about Zendesk roles refer to:":
      "Pour en savoir plus sur les rôles Zendesk, consultez :",
    "To obtain an API key, run the following CURL command and copy the key:":
      "Pour obtenir une clé API, exécutez la commande CURL suivante et copiez la clé :",
    "To reduce the number of lookups made to the AbuseIPDB API, this option can be selected to gracefully skip enrichment of any IP addresses allocated for private networks.":
      "Pour réduire le nombre de recherches effectuées auprès de l'API AbuseIPDB, cette option peut être sélectionnée afin d'ignorer proprement l'enrichissement des adresses IP attribuées à des réseaux privés.",
    "To set up mirroring:":
      "Pour configurer la mise en miroir :",
    "To use OAuth 2.0 authorization follow the next steps:":
      "Pour utiliser l'autorisation OAuth 2.0, procédez comme suit :",
    "To use OAuth 2.0 authorization perform the following steps:":
      "Pour utiliser l'autorisation OAuth 2.0, effectuez les étapes suivantes :",
    "To use Splunk token authentication, enter the text:":
      "Pour utiliser l'authentification par jeton Splunk, saisissez le texte :",
    "To use the mattermost integration:":
      "Pour utiliser l'intégration mattermost :",
    "Troubleshooting: Override Agent (Advanced)":
      "Dépannage : Override Agent (avancé)",
    "Two application authentication methods are available:":
      "Deux méthodes d'authentification d'application sont disponibles :",
    "URL of the Hatching service will be either:":
      "L'URL du service Hatching sera l'une des suivantes :",
    "Use the \"API Token (Recommended)\" parameter instead.":
      "Utilisez plutôt le paramètre \"API Token (Recommended)\".",
    "Use the Akamai WAF integration to manage common sets of lists used by various Akamai security products and features.":
      "Utilisez l'intégration Akamai WAF pour gérer les ensembles de listes courants utilisés par divers produits et fonctionnalités de sécurité Akamai.",
    "Use the following account credentials to get an access token:":
      "Utilisez les identifiants de compte suivants pour obtenir un jeton d'accès :",
    "Use the SplunkPy v2 integration to:":
      "Utilisez l'intégration SplunkPy v2 pour :",
    "Used in the IAM commands.":
      "Utilisé dans les commandes IAM.",
    "Used to impersonate a Google workspace user, so the spreadsheets is created in the associated Google Drive and is easily accessible from a UI. This parameter is used during the authentication process.":
      "Utilisé pour usurper l'identité d'un utilisateur Google Workspace, afin que les feuilles de calcul soient créées dans le Google Drive associé et soient facilement accessibles depuis l'interface utilisateur. Ce paramètre est utilisé pendant le processus d'authentification.",
    "Users who wish to enrich or mirror fetched notables and have already used the integration in the past:":
      "Utilisateurs qui souhaitent enrichir ou mettre en miroir les notables récupérés et qui ont déjà utilisé l'intégration par le passé :",
    "Verify base DN on every command":
      "Vérifier le DN de base à chaque commande",
    "Version id":
      "ID de version",
    "Version name":
      "Nom de la version",
    "Vulnerability description (only human readable)":
      "Description de la vulnérabilité (lisible par l'humain uniquement)",
    "Vulnerability discovery date":
      "Date de découverte de la vulnérabilité",
    "Vulnerability keywords":
      "Mots-clés de la vulnérabilité",
    "Vulnerability published date":
      "Date de publication de la vulnérabilité",
    "Vulnerability solution (only human readable)":
      "Solution de la vulnérabilité (lisible par l'humain uniquement)",
    "Vulnerability solution date":
      "Date de la solution de la vulnérabilité",
    "Vulnerability title (only human readable)":
      "Titre de la vulnérabilité (lisible par l'humain uniquement)",
    "What is the top level object to search in (usually a project or organization in format of organization/XX).":
      "L'objet de niveau supérieur dans lequel effectuer la recherche (généralement un projet ou une organisation au format organization/XX).",
    "What you get":
      "Ce que vous obtenez",
    "When enabled, replaces password/card-number values in markdown table output with '***'. Raw values remain in rawJSON for playbook automation. Disable only in non-production debugging contexts.":
      "Lorsque cette option est activée, elle remplace les valeurs de mot de passe/numéro de carte dans la sortie de tableau markdown par '***'. Les valeurs brutes restent dans rawJSON pour l'automatisation des playbooks. Ne la désactivez que dans des contextes de débogage hors production.",
    "Which Darkmon record kinds the integration ingests as XSOAR incidents. Defaults to the high-signal trio. Lower-signal kinds (e.g. Ransomware Mention) are typically better handled via the monitoring playbooks rather than native fetch.":
      "Les types d'enregistrements Darkmon que l'intégration ingère en tant qu'incidents XSOAR. Par défaut, il s'agit du trio à signal élevé. Les types à signal plus faible (par exemple, Ransomware Mention) sont généralement mieux traités par les playbooks de surveillance que par la récupération native.",
    "XSOAR Verdict to set when Analyst1 Risk Score is \"Critical\".":
      "Verdict XSOAR à définir lorsque Analyst1 Risk Score est \"Critical\".",
    "XSOAR Verdict to set when Analyst1 Risk Score is \"High\".":
      "Verdict XSOAR à définir lorsque Analyst1 Risk Score est \"High\".",
    "XSOAR Verdict to set when Analyst1 Risk Score is \"Low\".":
      "Verdict XSOAR à définir lorsque Analyst1 Risk Score est \"Low\".",
    "XSOAR Verdict to set when Analyst1 Risk Score is \"Lowest\".":
      "Verdict XSOAR à définir lorsque Analyst1 Risk Score est \"Lowest\".",
    "XSOAR Verdict to set when Analyst1 Risk Score is \"Moderate\".":
      "Verdict XSOAR à définir lorsque Analyst1 Risk Score est \"Moderate\".",
    "XSOAR Verdict to set when Analyst1 Risk Score is \"Unknown\" or not present.":
      "Verdict XSOAR à définir lorsque Analyst1 Risk Score est \"Unknown\" ou absent.",
    "BaseUrl - API url":
      "BaseUrl - URL de l'API",
    "SPLUNK user key":
      "Clé utilisateur Splunk",
    "IP values related to the offense are returned from the API as ID values. Enable this parameter the IDs to IP values.":
      "Les valeurs IP associées à l'infraction sont renvoyées par l'API sous forme de valeurs d'ID. Activez ce paramètre pour convertir les ID en valeurs IP.",

    // --- Batch: Integration docs as joined sentences (06:04 export, Collector 0.2.0 full re-collection) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    "(Optional) Add a {0}.":
      "(Facultatif) Ajoutez {0}.",
    "(Optional) If no API token is displayed, click the {0} button to create a new one.":
      "(Facultatif) Si aucun jeton d'API n'est affiché, cliquez sur le bouton {0} pour en créer un nouveau.",
    "(Optional) Test the created integration instance by running the {0} command.":
      "(Facultatif) Testez l'instance d'intégration créée en exécutant la commande {0}.",
    "(Recommended) Enter the ServiceNow account {0} and {1} in the integration instance configuration. The integration will then automatically perform the initial OAuth login on first use and will automatically renew the refresh token when it expires.":
      "(Recommandé) Saisissez {0} et {1} du compte ServiceNow dans la configuration de l'instance d'intégration. L'intégration effectuera alors automatiquement la connexion OAuth initiale lors de la première utilisation et renouvellera automatiquement le jeton d'actualisation à son expiration.",
    "{0} - Available under PingOne Dashboard → Environment Properties.":
      "{0} - Disponible dans PingOne Dashboard → Environment Properties.",
    "{0} - Each Microsoft Graph Security alert is fetched individually.":
      "{0} - Chaque alerte Microsoft Graph Security est récupérée individuellement.",
    "{0} - Each Microsoft Graph Security incident is fetched individually, with all associated alerts embedded within it and stored as raw JSON. This provides a single grouped incident containing its underlying alerts, rather than multiple separate alerts.":
      "{0} - Chaque incident Microsoft Graph Security est récupéré individuellement, avec toutes les alertes associées intégrées, et stocké sous forme de JSON brut. Vous obtenez ainsi un seul incident regroupé contenant ses alertes sous-jacentes, plutôt que plusieurs alertes distinctes.",
    "{0} - fully dynamic over every Darkmon data type, future-proof for new feature types added to the platform.":
      "{0} - entièrement dynamique sur tous les types de données Darkmon et pérenne pour les nouveaux types de fonctionnalités ajoutés à la plateforme.",
    "{0} - list protected emails and pull every leak associated with each.":
      "{0} - répertorie les e-mails protégés et récupère chaque fuite associée à chacun.",
    "{0} - OAuth credentials for API access.":
      "{0} - Identifiants OAuth pour l'accès à l'API.",
    "{0} - Select your PingOne region (US, EU, or Asia).":
      "{0} - Sélectionnez votre région PingOne (US, EU ou Asia).",
    "{0} — NGFW or WildFire API.":
      "{0} — API NGFW ou WildFire.",
    "{0} — Retrieve a paginated list of all CVEs monitored by ThreatMon.":
      "{0} — Récupère une liste paginée de tous les CVE surveillés par ThreatMon.",
    "{0} — Retrieve CVEs affecting products the company is subscribed to.":
      "{0} — Récupère les CVE affectant les produits auxquels l'entreprise est abonnée.",
    "{0} — Submit a Black Market Monitoring data removal request for a specific finding.":
      "{0} — Soumet une demande de suppression de données Black Market Monitoring pour un résultat précis.",
    "{0} — Submit a takedown request for an eligible Threatmon finding.":
      "{0} — Soumet une demande de retrait pour un résultat Threatmon éligible.",
    "{0} — the base URL of the Tenzai API (e.g. {1}).":
      "{0} — l'URL de base de l'API Tenzai (par exemple {1}).",
    "{0} — the Tenzai partner API key from the step above.":
      "{0} — la clé API partenaire Tenzai obtenue à l'étape précédente.",
    "{0} — Update the status of a specific Threatmon incident using its unique ID.":
      "{0} — Met à jour le statut d'un incident Threatmon spécifique à l'aide de son ID unique.",
    "{0} — XSOAR TIM API Key.":
      "{0} — Clé API XSOAR TIM.",
    "{0} (articles + company-specific mentions).":
      "{0} (articles et mentions propres à l'entreprise).",
    "{0} (CVE feed with CVSS, exploitation status, source identifier).":
      "{0} (flux de CVE avec CVSS, statut d'exploitation et identifiant de la source).",
    "{0} (Recommended).":
      "{0} (recommandé).",
    "{0} always uses {1}. If {2} is configured. The integration will authenticate using {3} when the command is called. This should have no effect on other commands.":
      "{0} utilise toujours {1}. Si {2} est configuré. L'intégration s'authentifiera à l'aide de {3} lors de l'appel de la commande. Cela ne devrait avoir aucun effet sur les autres commandes.",
    "{0} and {1}":
      "{0} et {1}",
    "{0} and {1}.":
      "{0} et {1}.",
    "{0} and follow the instructions to create an OAuth client":
      "{0} et suivez les instructions pour créer un client OAuth",
    "{0} and replace the {1} in the URL with {2}.":
      "{0} et remplacez {1} dans l'URL par {2}.",
    "{0} Choose the {1} for fetching attack paths (Default is 10 mins).":
      "{0} Choisissez {1} pour récupérer les chemins d'attaque (10 min par défaut).",
    "{0} discovery (leaked accounts, bank cards, combo lists, public breaches, compromised employee accounts).":
      "Découverte de {0} (comptes divulgués, cartes bancaires, listes combo, violations publiques, comptes d'employés compromis).",
    "{0} Do not enable {1} on the same instance. Configure one instance for the long-running Spotlight fetch, and a separate instance for the regular assets fetch.":
      "{0} N'activez pas {1} sur la même instance. Configurez une instance pour la récupération Spotlight de longue durée et une instance distincte pour la récupération régulière des actifs.",
    "{0} for IPs, domains, URLs, file hashes, and emails, with first-class {1} + {2} outputs.":
      "{0} pour les IP, domaines, URL, hachages de fichiers et e-mails, avec des sorties {1} + {2} de premier ordre.",
    "{0} For support, please contact the Threatmon team at: {1}":
      "{0} Pour obtenir de l'assistance, veuillez contacter l'équipe Threatmon à l'adresse suivante : {1}",
    "{0} If you are using the integration to rasterize un-trusted URLs or HTML content, such as those obtained via external emails, we recommend following the instructions at the {1} or {2} or {3} under the Block Internal Network Access section.":
      "{0} Si vous utilisez l'intégration pour rastériser des URL ou du contenu HTML non fiables, tels que ceux obtenus via des e-mails externes, nous vous recommandons de suivre les instructions de {1}, {2} ou {3} dans la section Block Internal Network Access.",
    "{0} ingestion into Cortex Threat Intel Management.":
      "Ingestion de {0} dans Cortex Threat Intel Management.",
    "{0} is deprecated. Use the {1}integration instead.":
      "{0} est obsolète. Utilisez plutôt l'intégration {1}.",
    "{0} Optionally, you can choose {1} type and use the {2} and {3} fields to enter the API key ID and API key.":
      "{0} Vous pouvez éventuellement choisir le type {1} et utiliser les champs {2} et {3} pour saisir l'ID de clé API et la clé API.",
    "{0} supports {1} only when retrieving messages from a channel. Retrieving messages from a chat requires {2}.":
      "{0} ne prend en charge {1} que pour la récupération de messages depuis un canal. La récupération de messages depuis une discussion nécessite {2}.",
    "{0} The {1} option is deprecated. No available replacement.":
      "{0} L'option {1} est obsolète. Aucun remplacement n'est disponible.",
    "{0} The {1} selection is ignored in this mode, and CNAPP Alerts are not collected. To collect CNAPP Alerts, use a separate instance with the regular assets fetch.":
      "{0} La sélection de {1} est ignorée dans ce mode et les alertes CNAPP ne sont pas collectées. Pour collecter les alertes CNAPP, utilisez une instance distincte avec la récupération régulière des actifs.",
    "{0} This is a beta Integration that has been deprecated. The Integration uses an unsupported scraping API. We do not recommend using this integration in production environments. Some commands may not work as expected. Use the {1} Integration instead.":
      "{0} Il s'agit d'une intégration bêta qui est obsolète. L'intégration utilise une API de scraping non prise en charge. Nous déconseillons d'utiliser cette intégration dans des environnements de production. Certaines commandes peuvent ne pas fonctionner comme prévu. Utilisez plutôt l'intégration {1}.",
    "{0} to the service account - Deprecated. {1} permissions to the Exchange Server. {2} to the {3}.":
      "{0} pour le compte de service - Obsolète. Autorisations {1} pour Exchange Server. {2} pour {3}.",
    "{0}, {1}, {2} and {3}":
      "{0}, {1}, {2} et {3}",
    "{0}: a textual name for the integration instance.":
      "{0} : nom textuel de l'instance d'intégration.",
    "{0}: Access the Settings page from the top navigation bar.":
      "{0} : accédez à la page Paramètres depuis la barre de navigation supérieure.",
    "{0}: Active Prisma SASE account with Strata Cloud Manager access":
      "{0} : compte Prisma SASE actif avec accès à Strata Cloud Manager",
    "{0}: By default, the integration retrieves all event detections across all entity types (Account and Host) and all detection statuses (Open, Acknowledged, Escalated, Paused). This includes both prioritized and non-prioritized detections.":
      "{0} : par défaut, l'intégration récupère toutes les détections d'événements pour tous les types d'entités (Account et Host) et tous les statuts de détection (Open, Acknowledged, Escalated, Paused). Cela inclut les détections priorisées et non priorisées.",
    "{0}: Choose specific indicator types to collect (IP, Domain, URL, File)":
      "{0} : choisissez les types d'indicateurs spécifiques à collecter (IP, Domain, URL, File)",
    "{0}: Click the {1} button.":
      "{0} : cliquez sur le bouton {1}.",
    "{0}: Configure the reliability level for feed context (default: A++ - Reputation script)":
      "{0} : configurez le niveau de fiabilité du contexte du flux (par défaut : A++ - Reputation script)",
    "{0}: Configure the reliability level for threat intelligence context (default: A++ - Reputation script)":
      "{0} : configurez le niveau de fiabilité du contexte de renseignement sur les menaces (par défaut : A++ - Reputation script)",
    "{0}: Create an OAuth2 client in Strata Cloud Manager with Prisma AIRS AI Red Teaming API permissions":
      "{0} : créez un client OAuth2 dans Strata Cloud Manager avec les autorisations de l'API Prisma AIRS AI Red Teaming",
    "{0}: Create an OAuth2 client in Strata Cloud Manager with Prisma AIRS AI Runtime Security API permissions":
      "{0} : créez un client OAuth2 dans Strata Cloud Manager avec les autorisations de l'API Prisma AIRS AI Runtime Security",
    "{0}: Create an OAuth2 client in Strata Cloud Manager with Prisma AIRS AI Supply Chain Security API permissions":
      "{0} : créez un client OAuth2 dans Strata Cloud Manager avec les autorisations de l'API Prisma AIRS AI Supply Chain Security",
    "{0}: Enable “Create Incidents for Escalated Detections” to retrieve all escalated detections, regardless of their priority level.":
      "{0} : activez « Create Incidents for Escalated Detections » pour récupérer toutes les détections escaladées, quel que soit leur niveau de priorité.",
    "{0}: Enable “Create Incidents for Prioritized Detections” to filter out non-prioritized detections. Incidents will be created only for prioritized event detections.":
      "{0} : activez « Create Incidents for Prioritized Detections » pour filtrer les détections non priorisées. Des incidents ne seront créés que pour les détections d'événements priorisées.",
    "{0}: Enable automatic creation of indicators from relationships":
      "{0} : activez la création automatique d'indicateurs à partir des relations",
    "{0}: Enable automatic creation of relationships between indicators and threat objects based on returned associations":
      "{0} : activez la création automatique de relations entre les indicateurs et les objets de menace en fonction des associations renvoyées",
    "{0}: Enable both “Create Incidents for Prioritized Detections” and “Create Incidents for Escalated Detections”. This configuration retrieves detections that are either prioritized or escalated.":
      "{0} : activez à la fois « Create Incidents for Prioritized Detections » et « Create Incidents for Escalated Detections ». Cette configuration récupère les détections qui sont priorisées ou escaladées.",
    "{0}: Fill in the {1} and {2} fields. An organization admin can create these from the {3} tab on the {4} page in Doppel Vision. V2 is recommended: new Doppel API capabilities are added to V2 only.":
      "{0} : renseignez les champs {1} et {2}. Un administrateur de l'organisation peut les créer depuis l'onglet {3} de la page {4} dans Doppel Vision. V2 est recommandé : les nouvelles fonctionnalités de l'API Doppel sont ajoutées uniquement à V2.",
    "{0}: Generate an {1} through {2} -> {3} -> {4} -> {5}.":
      "{0} : générez {1} via {2} -> {3} -> {4} -> {5}.",
    "{0}: In the Settings page, select the {1} tab.":
      "{0} : dans la page Paramètres, sélectionnez l'onglet {1}.",
    "{0}: Record your API client secret somewhere safe. For security purposes, it’s only shown when you create or reset the API client. If you lose your secret, you must reset it, which removes access for any integrations that still use the previous secret. 6. Add the {1} and {2} to Cortex. Note: For more information see the {3}":
      "{0} : conservez le secret client de l'API en lieu sûr. Pour des raisons de sécurité, il n'est affiché que lors de la création ou de la réinitialisation du client d'API. Si vous perdez votre secret, vous devez le réinitialiser, ce qui supprime l'accès de toutes les intégrations qui utilisent encore l'ancien secret. 6. Ajoutez {1} et {2} à Cortex. Remarque : pour plus d'informations, consultez {3}",
    "{0}: Select {1}.":
      "{0} : sélectionnez {1}.",
    "{0}: Select which types of objects to fetch (Indicators, Threat Objects, or both)":
      "{0} : sélectionnez les types d'objets à récupérer (indicateurs, objets de menace ou les deux)",
    "{0}: Since QRadar API v19, The timestamp fields should be provided as milliseconds epoch format instead of seconds.":
      "{0} : depuis l'API QRadar v19, les champs d'horodatage doivent être fournis au format epoch en millisecondes plutôt qu'en secondes.",
    "{0}: the “Test” button is not supported for this integration. To verify that authentication was configured correctly, run the {1} command.":
      "{0} : le bouton « Tester » n'est pas pris en charge pour cette intégration. Pour vérifier que l'authentification a été configurée correctement, exécutez la commande {1}.",
    "{0}: The Server URL ({1}) is a global endpoint and does not require regional configuration.":
      "{0} : l'URL du serveur ({1}) est un endpoint global et ne nécessite pas de configuration régionale.",
    "{0}: The Server URL ({1}) is a global endpoint and does not require regional configuration. Only the Scanner API base URL is region-specific.":
      "{0} : l'URL du serveur ({1}) est un endpoint global et ne nécessite pas de configuration régionale. Seule l'URL de base de l'API Scanner est propre à la région.",
    "{0}: these are the actual certificates, not request certificates.":
      "{0} : il s'agit des certificats réels, et non des certificats de demande.",
    "{0}: These are the actual certificates, not request certificates.":
      "{0} : Il s'agit des certificats réels, et non des certificats de demande.",
    "{0}: This is different from the OAuth2 Client ID/Secret used for management operations":
      "{0} : Ceci est différent de l'ID client/secret OAuth2 utilisé pour les opérations de gestion",
    "{0}: This option is relevant only if the integration is running on Azure VM.":
      "{0} : Cette option n'est pertinente que si l'intégration s'exécute sur une VM Azure.",
    "{0}: To create an API key, you must have the {1} role.":
      "{0} : pour créer une clé API, vous devez disposer du rôle {1}.",
    "{0}: Use the same {1} and {2} that you would use to log into FortiGate itself.":
      "{0} : utilisez les mêmes {1} et {2} que ceux que vous utiliseriez pour vous connecter à FortiGate lui-même.",
    "{0}: When authenticating with the Cortex application, sign in with the same user you want to integrate with. Since this user must grant consent for the app’s permissions, they must be an {1}. To let a non-admin user use the app instead, after an admin has consented to the application once, go to the {2} > {3}, find the app, and set {4} to {5}. This way, other users can obtain the Cortex application credentials without needing to sign in or consent themselves. Alternatively, you can use a {6}.":
      "{0} : lors de l'authentification avec l'application Cortex, connectez-vous avec le même utilisateur que celui avec lequel vous souhaitez effectuer l'intégration. Cet utilisateur devant accorder son consentement aux autorisations de l'application, il doit être {1}. Pour permettre à un utilisateur non administrateur d'utiliser l'application, une fois qu'un administrateur a donné son consentement à l'application, accédez à {2} > {3}, recherchez l'application et définissez {4} sur {5}. Ainsi, les autres utilisateurs peuvent obtenir les identifiants de l'application Cortex sans avoir à se connecter ni à donner leur consentement. Vous pouvez également utiliser {6}.",
    "{0}: When enabled, the integration will only use read-only tools, preventing any write operations to GitHub.":
      "{0} : lorsque cette option est activée, l'intégration n'utilise que des outils en lecture seule, ce qui empêche toute opération d'écriture dans GitHub.",
    "{0}: When pooling is enabled, the number of active open database connections will equal the number of active running {1} Docker containers.":
      "{0} : lorsque le pooling est activé, le nombre de connexions de base de données ouvertes actives sera égal au nombre de conteneurs Docker {1} actifs en cours d'exécution.",
    "{0}: When using the Authorization Code flow, make sure the user you authenticate with has the required role permissions. See {1} as an example.":
      "{0} : Lorsque vous utilisez le flux Authorization Code, assurez-vous que l'utilisateur avec lequel vous vous authentifiez dispose des autorisations de rôle requises. Consultez {1} à titre d'exemple.",
    "{0}: Within a few seconds, a new API key will appear in the table. Click the {1} button next to the key to copy it securely.":
      "{0} : En quelques secondes, une nouvelle clé API apparaît dans le tableau. Cliquez sur le bouton {1} à côté de la clé pour la copier en toute sécurité.",
    "{0}: Your Prisma SASE TSG ID (found in Strata Cloud Manager settings)":
      "{0} : Votre ID TSG Prisma SASE (disponible dans les paramètres de Strata Cloud Manager)",
    "Access the {0}.":
      "Accédez à {0}.",
    "Active subscription at {0}":
      "Abonnement actif sur {0}",
    "Add a string of JSON to the integration parameter denoted {0}":
      "Ajoutez une chaîne JSON au paramètre d'intégration indiqué par {0}",
    "AdvancedHunting.Read.All - Application - See section 4 in {0}":
      "AdvancedHunting.Read.All - Application - Consultez la section 4 dans {0}",
    "After creating the procedure, fill in ‘Fetch events query’ the value: ‘call {0}’ with your procedure name.":
      "Après avoir créé la procédure, saisissez dans ‘Fetch events query’ la valeur ‘call {0}’ avec le nom de votre procédure.",
    "After creating the procedure, fill in ‘Fetch events query’ the value: ‘EXEC {0}’ with your procedure name.":
      "Après avoir créé la procédure, saisissez dans ‘Fetch events query’ la valeur ‘EXEC {0}’ avec le nom de votre procédure.",
    "After providing the mandatory details, click {0} to test the configuration.":
      "Après avoir fourni les informations obligatoires, cliquez sur {0} pour tester la configuration.",
    "All API plans are subject to a rate limit of 1 request per second - {0}":
      "Tous les forfaits d'API sont soumis à une limite de débit de 1 requête par seconde - {0}",
    "All ZIA API calls use {0}.":
      "Tous les appels à l'API ZIA utilisent {0}.",
    "Alternatively, create an API key via the {0}.":
      "Vous pouvez également créer une clé API via {0}.",
    "API reference: {0}":
      "Référence de l'API : {0}",
    "Append the email ID of the service account created and click {0} to save.":
      "Ajoutez l'ID e-mail du compte de service créé, puis cliquez sur {0} pour enregistrer.",
    "Attach the .cer file to your Azure App. See the following {0} for an example.":
      "Joignez le fichier .cer à votre application Azure. Consultez {0} ci-dessous pour un exemple.",
    "By default, secrets such as passwords and card numbers are redacted from War Room markdown output. Raw values remain available to playbooks via context for automation. Disable {0} only when troubleshooting in non-production environments.":
      "Par défaut, les secrets, tels que les mots de passe et les numéros de carte, sont masqués dans la sortie markdown de War Room. Les valeurs brutes restent accessibles aux Playbooks via le contexte à des fins d'automatisation. Ne désactivez {0} que pour le dépannage dans des environnements hors production.",
    "Choose one of the API versions listed under {0} column in the line corresponding to your QRadar version.":
      "Choisissez l'une des versions d'API répertoriées dans la colonne {0} sur la ligne correspondant à votre version de QRadar.",
    "Choose the {0} tab, and click the {1} checkbox.":
      "Choisissez l'onglet {0}, puis cliquez sur la case {1}.",
    "Choose the {0} type from the {1} dropdown list.":
      "Choisissez le type {0} dans la liste déroulante {1}.",
    "Click the button in the top-right corner and select {0}.":
      "Cliquez sur le bouton dans le coin supérieur droit et sélectionnez {0}.",
    "Click your {0} in the top navigation bar.":
      "Cliquez sur votre {0} dans la barre de navigation supérieure.",
    "Click your username, and select {0}.":
      "Cliquez sur votre nom d'utilisateur et sélectionnez {0}.",
    "Comma-separated list of URL categories to treat as suspicious. Default: {0}.":
      "Liste de catégories d'URL séparées par des virgules à considérer comme suspectes. Valeur par défaut : {0}.",
    "Confirm that {0} is set to {1} in your Elasticsearch configuration (this is the default when TLS is enabled).":
      "Vérifiez que {0} est défini sur {1} dans votre configuration Elasticsearch (il s'agit de la valeur par défaut lorsque TLS est activé).",
    "Connect Cortex to {0} for real-time intelligence from the Clear, Deep, and Dark Web - tailored to your assets.":
      "Connectez Cortex à {0} pour obtenir des renseignements en temps réel issus du Clear, du Deep et du Dark Web, adaptés à vos actifs.",
    "Copy the Client ID and Client Secret into the {0} and {1} integration parameter fields.":
      "Copiez le Client ID et le Client Secret dans les champs de paramètres d'intégration {0} et {1}.",
    "Copy the generated {0} into the integration instance and save.":
      "Copiez le {0} généré dans l'instance d'intégration et enregistrez.",
    "Copy the key when it is shown — it is displayed only once. You paste it into the {0} field of this integration instance, where it is stored encrypted.":
      "Copiez la clé lorsqu'elle s'affiche : elle n'est affichée qu'une seule fois. Collez-la dans le champ {0} de cette instance d'intégration, où elle est stockée de manière chiffrée.",
    "Create a Personal Access Token for the new account ({0})":
      "Créez un Personal Access Token pour le nouveau compte ({0})",
    "Create API credentials such as Client ID and Client Secret. For more information, see the {0}.":
      "Créez des identifiants d'API, tels que Client ID et Client Secret. Pour plus d'informations, consultez {0}.",
    "Doppel Tenant URL that you can use for calling the {0}. e.g. ,{1}":
      "URL du tenant Doppel que vous pouvez utiliser pour appeler {0}. par exemple : {1}",
    "Duplicate the {0} mapper and/or the {1} mapper.":
      "Dupliquez le mappeur {0} et/ou le mappeur {1}.",
    "Enter a {0}.":
      "Saisissez {0}.",
    "Enter a descriptive name for the token and click {0}.":
      "Saisissez un nom descriptif pour le jeton, puis cliquez sur {0}.",
    "Enter the desired name for the created app (e.g., “Cortex”), and click {0}.":
      "Saisissez le nom souhaité pour l'application créée (par exemple, “Cortex”), puis cliquez sur {0}.",
    "Enter your {0} URL (e.g., {1}).":
      "Saisissez l'URL de votre {0} (par exemple, {1}).",
    "Example: “CREATE PROCEDURE {0} @timestamp DATETIME AS SELECT * FROM TABLE_NAME WHERE timestamp >= @timestamp order by timestamp”":
      "Exemple : “CREATE PROCEDURE {0} @timestamp DATETIME AS SELECT * FROM TABLE_NAME WHERE timestamp >= @timestamp order by timestamp”",
    "Example: “CREATE PROCEDURE {0}(IN ts DATETIME, IN l INT) BEGIN SELECT * FROM TABLE_NAME WHERE timestamp >= ts order by timestamp asc limit l; END”":
      "Exemple : “CREATE PROCEDURE {0}(IN ts DATETIME, IN l INT) BEGIN SELECT * FROM TABLE_NAME WHERE timestamp >= ts order by timestamp asc limit l; END”",
    "Finally, you need to extract the CA certificate: {0}":
      "Enfin, vous devez extraire le certificat d'AC : {0}",
    "First, navigate to your {0}.":
      "Commencez par accéder à votre {0}.",
    "Follow the instructions in this {0} to create your own client_id, client_secret, tsg_id.":
      "Suivez les instructions de ce {0} pour créer vos propres client_id, client_secret et tsg_id.",
    "Follow these steps for {0} configuration:":
      "Suivez ces étapes pour la configuration de {0} :",
    "Follow this guide to generate access keys: {0}. For the URL argument, take a look here: {1} For a list of possible values for the {2} parameter, refer to the {3} column in this {4} article.":
      "Suivez ce guide pour générer des clés d'accès : {0}. Pour l'argument URL, consultez ceci : {1} Pour obtenir la liste des valeurs possibles du paramètre {2}, reportez-vous à la colonne {3} (dans cet article de {4}).",
    "For {0} {1} enter: {2}":
      "Pour {0} {1}, saisissez : {2}",
    "For information about Google’s API Key requirements and pricing, see {0}.":
      "Pour plus d'informations sur les exigences et la tarification des clés API de Google, consultez {0}.",
    "For more information about creating an JWT app click {0}.":
      "Pour plus d'informations sur la création d'une application JWT, cliquez sur {0}.",
    "For more information about registering a calling bot see the {0}.":
      "Pour plus d'informations sur l'enregistrement d'un bot d'appel, consultez {0}.",
    "For more information about this integration, visit {0}.":
      "Pour plus d'informations sur cette intégration, consultez {0}.",
    "For more information about Threatmon, visit: {0}":
      "Pour plus d'informations sur Threatmon, consultez : {0}",
    "For more information about Zendesk V2 integration, see the {0}":
      "Pour plus d'informations sur l'intégration Zendesk V2, consultez {0}",
    "For more information on getting your Slack access token, see the {0}":
      "Pour savoir comment obtenir votre jeton d'accès Slack, consultez {0}",
    "For more information on how to create the above credentials, see {0}.":
      "Pour plus d'informations sur la création des identifiants ci-dessus, consultez {0}.",
    "For more information, see the ‘{0}’ official documentation article.":
      "Pour plus d'informations, consultez l'article de documentation officielle ‘{0}’.",
    "For more information, visit the {0}.":
      "Pour plus d'informations, consultez {0}.",
    "For on-premise WildFire appliances, use the appliance IP or hostname with the {0} path (e.g., {1}).":
      "Pour les appliances WildFire sur site, utilisez l'adresse IP ou le nom d'hôte de l'appliance avec le chemin {0} (par exemple, {1}).",
    "For testing completion of authorization process run the {0} command.":
      "Pour tester l'achèvement du processus d'autorisation, exécutez la commande {0}.",
    "For the {0} field refer to the {1} on how to retrieve it":
      "Pour le champ {0}, consultez {1} afin de savoir comment l'obtenir",
    "For the {0} parameter use your Sysdig SaaS url, refer to the {1} for a list of them based on the region.":
      "Pour le paramètre {0}, utilisez l'URL de votre Sysdig SaaS ; consultez {1} pour obtenir la liste des URL selon la région.",
    "For using OAuth 2.0 see the instructions above. The OTP code should be appended to the password parameter in the {0} command.":
      "Pour utiliser OAuth 2.0, consultez les instructions ci-dessus. Le code OTP doit être ajouté au paramètre password dans la commande {0}.",
    "From the left sidebar, navigate to {0}.":
      "Dans la barre latérale gauche, accédez à {0}.",
    "Generate a {0} in ZIdentity when creating the API client.":
      "Générez {0} dans ZIdentity lors de la création du client API.",
    "Generate a key of type {0}.":
      "Générez une clé de type {0}.",
    "Go to the {0} -> {1}":
      "Accédez à {0} -> {1}",
    "Go to the {0} and follow the procedure in the Creating a Service Account section. After you create a service account, a Service Account Private Key file is downloaded. You will need this file when configuring an instance of the integration.":
      "Accédez à {0} et suivez la procédure décrite dans la section Creating a Service Account. Après avoir créé un compte de service, un fichier de clé privée du compte de service est téléchargé. Vous aurez besoin de ce fichier lors de la configuration d'une instance de l'intégration.",
    "Go to the {0} tab, and click {1} on the authorization with type of OAuth 2.0 (3LO).":
      "Accédez à l'onglet {0}, puis cliquez sur {1} pour l'autorisation de type OAuth 2.0 (3LO).",
    "Go to the {0} tab.":
      "Accédez à l'onglet {0}.",
    "Go to your {0}.":
      "Accédez à votre {0}.",
    "Go to your Carbon Black console. This should be the URL in {0}.":
      "Accédez à votre console Carbon Black. Il doit s'agir de l'URL figurant dans {0}.",
    "If enabled, the integration will automatically activate configuration changes after each write command. If disabled, use the {0} command manually.":
      "Si cette option est activée, l'intégration active automatiquement les modifications de configuration après chaque commande d'écriture. Si elle est désactivée, utilisez manuellement la commande {0}.",
    "If the {0} and {1} fields are configured, the integration will automatically perform the initial login and renew the refresh token when it expires. Otherwise, you have to run the {2} command for the initial login and again each time the refresh token expires.":
      "Si les champs {0} et {1} sont configurés, l'intégration effectue automatiquement la connexion initiale et renouvelle le jeton d'actualisation à son expiration. Sinon, vous devez exécuter la commande {2} pour la connexion initiale, puis de nouveau chaque fois que le jeton d'actualisation expire.",
    "If there is no API token displayed, click the {0} button to create a new one.":
      "Si aucun jeton d'API n'est affiché, cliquez sur le bouton {0} pour en créer un nouveau.",
    "If you use {0} to separate your data, set the {1} parameter in the instance configuration. All {2} commands will then operate within that space by default. You can also override the space per-command using the {3} argument.":
      "Si vous utilisez {0} pour séparer vos données, définissez le paramètre {1} dans la configuration de l'instance. Toutes les commandes {2} fonctionneront alors par défaut dans cet espace. Vous pouvez également remplacer l'espace pour chaque commande à l'aide de l'argument {3}.",
    "Import Living off the land binaries from {0} into the Threat Intelligence Management(TIM) module for security investigations and threat hunting activities.":
      "Importez les Living off the land binaries depuis {0} dans le module Threat Intelligence Management (TIM) pour les investigations de sécurité et les activités de chasse aux menaces.",
    "In addition, provide a pre-defined risk plan (for example, {0}).":
      "Indiquez en outre un plan de risque prédéfini (par exemple, {0}).",
    "In both options below, the {0} is used.":
      "Dans les deux options ci-dessous, {0} est utilisé.",
    "In GitHub, click your {0} (upper-right), then {1}.":
      "Dans GitHub, cliquez sur votre {0} (en haut à droite), puis sur {1}.",
    "In order to connect to Microsoft Risky User using either {0} or the {1}:":
      "Pour vous connecter à Microsoft Risky User à l'aide de {0} ou de {1} :",
    "In order to use the following commands, you must use the {0}:":
      "Pour utiliser les commandes suivantes, vous devez utiliser {0} :",
    "In order to use this integration, you need to enter your Okta API token in the {0} integration instance parameter. For information on getting your Okta API token, see the {1}.":
      "Pour utiliser cette intégration, vous devez saisir votre jeton d'API Okta dans le paramètre d'instance d'intégration {0}. Pour savoir comment obtenir votre jeton d'API Okta, consultez {1}.",
    "In the {0} dialog box, click {1}. Make sure to copy the generated private key (in PEM format) to somewhere safe, and click {2}.":
      "Dans la boîte de dialogue {0}, cliquez sur {1}. Veillez à copier la clé privée générée (au format PEM) dans un endroit sûr, puis cliquez sur {2}.",
    "In the {0} drop-down menu, select a permission to apply for the credential tokens. Define the desired permissions. To use the API credential to grant read-only access on individual {1} resources, select either the User or Editor permission on {2}.":
      "Dans le menu déroulant {0}, sélectionnez une autorisation à appliquer aux jetons d'identification. Définissez les autorisations souhaitées. Pour utiliser l'identifiant d'API afin d'accorder un accès en lecture seule à des ressources {1} individuelles, sélectionnez l'autorisation User ou Editor sur {2}.",
    "In the {0} field, enter the application (client) ID.":
      "Dans le champ {0}, saisissez l'ID de l'application (client).",
    "In the {0} field, enter the application redirect URI.":
      "Dans le champ {0}, saisissez l'URI de redirection de l'application.",
    "In the {0} field, enter the client secret.":
      "Dans le champ {0}, saisissez le secret client.",
    "In the {0} field, enter the directory (tenant) ID.":
      "Dans le champ {0}, saisissez l'ID du répertoire (tenant).",
    "In the {0} field, select the {1} option.":
      "Dans le champ {0}, sélectionnez l'option {1}.",
    "In the {0} field, type {1}.":
      "Dans le champ {0}, saisissez {1}.",
    "In the {0} field, type your API token.":
      "Dans le champ {0}, saisissez votre jeton d'API.",
    "In the Admin Console, go to {0} > {1}.":
      "Dans Admin Console, accédez à {0} > {1}.",
    "In the Admin Console, select {0} > {1} from the menu, and then select the {2} tab.":
      "Dans Admin Console, sélectionnez {0} > {1} dans le menu, puis sélectionnez l'onglet {2}.",
    "In the app configuration page, under the {0} tab and the {1} section, select {2} for the {3} option.":
      "Dans la page de configuration de l'application, sous l'onglet {0} et la section {1}, sélectionnez {2} pour l'option {3}.",
    "In the console, go to {0} > {1} .":
      "Dans la console, accédez à {0} > {1}.",
    "In the dropdown list under “Role”, select {0}.":
      "Dans la liste déroulante « Role », sélectionnez {0}.",
    "In the instance configuration, under the {0} field select the {1} option.":
      "Dans la configuration de l'instance, sous le champ {0}, sélectionnez l'option {1}.",
    "In the integration settings pane in your tenant, check the {0} checkbox.":
      "Dans le volet des paramètres de l'intégration de votre tenant, cochez la case {0}.",
    "In the left sidebar, click {0}.":
      "Dans la barre latérale gauche, cliquez sur {0}.",
    "In the management interface, create a role of type API. Select the APIs under {0} for the role and assign an administrator that role.":
      "Dans l'interface de gestion, créez un rôle de type API. Sélectionnez les API sous {0} pour le rôle, puis attribuez ce rôle à un administrateur.",
    "In this method, the {0} is used.":
      "Cette méthode utilise {0}.",
    "In XSOAR, create the custom indicator and incident field, for example, {0}.":
      "Dans XSOAR, créez les champs personnalisés d'indicateur et d'incident, par exemple {0}.",
    "In your ServiceNow instance, navigate to {0} and ensure an MCP server is configured (or use the preconfigured {1}).":
      "Dans votre instance ServiceNow, accédez à {0} et vérifiez qu'un serveur MCP est configuré (ou utilisez le {1} préconfiguré).",
    "Incident.Read.All - Application - See section 4 in {0}":
      "Incident.Read.All - Application - Voir la section 4 dans {0}",
    "Incident.ReadWrite.All - Application - See section 4 in {0}":
      "Incident.ReadWrite.All - Application - Voir la section 4 dans {0}",
    "Insert a {0}.":
      "Insérez {0}.",
    "Log in to the {0} with an account that has {1}.":
      "Connectez-vous à {0} avec un compte disposant de {1}.",
    "Log in to your {0} account.":
      "Connectez-vous à votre compte {0}.",
    "Log in to your ServiceNow instance and create an endpoint for Cortex to access your instance. (See {0} for more information).":
      "Connectez-vous à votre instance ServiceNow et créez un point de terminaison afin que Cortex puisse accéder à votre instance. (Pour plus d'informations, consultez {0}.)",
    "Make a note of the {0} and {1}. These will be used to configure the integration.":
      "Notez {0} et {1}. Ces valeurs seront utilisées pour configurer l'intégration.",
    "Make sure you have your SecneurX API-Key. You can obtain the API-Key by sending an email to {0}.":
      "Assurez-vous de disposer de votre clé API SecneurX. Vous pouvez l'obtenir en envoyant un e-mail à {0}.",
    "McAfee ePO has a highly flexible and powerful permissions system. The permissions required for the user that uses this integration depend on which operations they need to perform. The API user should have the same permissions a regular user would have in order to access the data via the UI. It is possible to view the exact permissions needed for a specific command by running the {0} command. The {1} command’s output will include help information for the specific command including required permissions. More info about McAfee ePO’s permissions model is available {2}.":
      "McAfee ePO dispose d'un système d'autorisations très flexible et puissant. Les autorisations requises pour l'utilisateur de cette intégration dépendent des opérations qu'il doit effectuer. L'utilisateur d'API doit disposer des mêmes autorisations qu'un utilisateur standard pour accéder aux données via l'interface utilisateur. Il est possible d'afficher les autorisations exactes requises pour une commande spécifique en exécutant la commande {0}. La sortie de la commande {1} inclut des informations d'aide sur la commande concernée, y compris les autorisations requises. Plus d'informations sur le modèle d'autorisations de McAfee ePO sont disponibles {2}.",
    "Microsoft 365 Germany Endpoint: {0}":
      "Point de terminaison Microsoft 365 Germany : {0}",
    "Microsoft integrations (Graph and Azure) in Cortex use Entra ID applications to authenticate with Microsoft APIs. These integrations use OAuth 2.0 and OpenID Connect standard-compliant authentication services, which use an Application to sign-in or delegate authentication. For more information, see the {0}.":
      "Les intégrations Microsoft (Graph et Azure) dans Cortex utilisent des applications Entra ID pour s'authentifier auprès des API Microsoft. Ces intégrations utilisent des services d'authentification conformes aux normes OAuth 2.0 et OpenID Connect, qui s'appuient sur une application pour la connexion ou la délégation de l'authentification. Pour plus d'informations, consultez {0}.",
    "Microsoft Operated by 21Vianet Endpoint: {0}":
      "Point de terminaison Microsoft Operated by 21Vianet : {0}",
    "More information can be found on {0}.":
      "Vous trouverez plus d'informations sur {0}.",
    "Name your token and click {0}.":
      "Nommez votre jeton et cliquez sur {0}.",
    "Navigate to the {0} or {1} section (refer to your Magnet Automate version documentation for the exact location).":
      "Accédez à la section {0} ou {1} (reportez-vous à la documentation de votre version de Magnet Automate pour connaître l'emplacement exact).",
    "Navigate to your {0}.":
      "Accédez à votre {0}.",
    "Next to the {0} label, make sure the {1} option is selected, and that the {2} option is not selected.":
      "À côté de l'étiquette {0}, vérifiez que l'option {1} est sélectionnée et que l'option {2} ne l'est pas.",
    "Next to the {0} label, uncheck the {1} option if it’s selected.":
      "À côté de l'étiquette {0}, décochez l'option {1} si elle est sélectionnée.",
    "Next, log in to your {0} account.":
      "Connectez-vous ensuite à votre compte {0}.",
    "Note your {0} (e.g., {1} if your login URL is {2}).":
      "Notez votre {0} (par exemple {1}, si votre URL de connexion est {2}).",
    "Note: If you’re uncertain which API version to use, it is recommended to use the latest API version listed in the {0} column in the line corresponding to your QRadar version.":
      "Remarque : si vous ne savez pas quelle version d'API utiliser, il est recommandé d'utiliser la dernière version d'API répertoriée dans la colonne {0} de la ligne correspondant à votre version de QRadar.",
    "Note: SaaS Security API currently allows you to mirror out only closed incidents, and only their {0} and {1} fields.":
      "Remarque : SaaS Security API permet actuellement de mettre en miroir (sortant) uniquement les incidents fermés, et uniquement leurs champs {0} et {1}.",
    "Notice: Submitting indicators using the {0} command of this integration might make the indicator data publicly available. See the vendor’s documentation for more details":
      "Avis : l'envoi d'indicateurs à l'aide de la commande {0} de cette intégration peut rendre les données de l'indicateur publiques. Consultez la documentation du fournisseur pour plus de détails",
    "On large tenants a full Spotlight collection can take many hours - longer than the maximum execution time allowed for a single assets fetch. In such cases, the fetch is terminated before it completes. Enable the {0} parameter (under the {1} section, {2}) to run the Spotlight fetch in a long-running container instead, which is not bound by that execution time limit and lets a cycle run to completion. A new cycle starts every 24 hours, or immediately after the previous one ends if it ran longer.":
      "Sur les grands tenants, une collecte Spotlight complète peut prendre plusieurs heures, soit plus que la durée d'exécution maximale autorisée pour une seule récupération d'actifs. Dans ce cas, la récupération est interrompue avant d'être terminée. Activez le paramètre {0} (dans la section {1}, {2}) pour exécuter la récupération Spotlight dans un conteneur de longue durée, qui n'est pas soumis à cette limite de durée d'exécution et permet à un cycle de se dérouler jusqu'à son terme. Un nouveau cycle démarre toutes les 24 heures, ou immédiatement après la fin du précédent s'il a duré plus longtemps.",
    "On premise administrators: Edit the {0} file and set the following key to true: com.proofpoint.admin.apigui.enable=t":
      "Administrateurs sur site : modifiez le fichier {0} et définissez la clé suivante sur true : com.proofpoint.admin.apigui.enable=t",
    "On the opened page, click {0}.":
      "Sur la page qui s'ouvre, cliquez sur {0}.",
    "Open the {0}.":
      "Ouvrez {0}.",
    "Open the main menu and go to {0} > {1}.":
      "Ouvrez le menu principal et accédez à {0} > {1}.",
    "Open your Google Admin console (at {0}).":
      "Ouvrez votre console Google Admin (à l'adresse {0}).",
    "Optional: To revoke all currently valid API keys, follow this {0}":
      "Facultatif : pour révoquer toutes les clés API actuellement valides, suivez ce {0}",
    "Optionally set the {0} (must match your deployment profile region) and {1}":
      "Si vous le souhaitez, définissez {0} (doit correspondre à la région de votre profil de déploiement) et {1}",
    "Please note the default timeout for queries is 30 seconds. To increase the timeout set the following parameter in the {0} field: {1} (notice the space in the name of the parameter) with the desired timeout in seconds. For example to set a timeout of 120 seconds use: {2}.":
      "Notez que le délai d'expiration par défaut des requêtes est de 30 secondes. Pour l'augmenter, définissez le paramètre suivant dans le champ {0} : {1} (notez l'espace dans le nom du paramètre) avec le délai souhaité en secondes. Par exemple, pour définir un délai de 120 secondes, utilisez : {2}.",
    "Preconfigured template attachments can be supported by using {0}":
      "Les pièces jointes de modèle préconfigurées peuvent être prises en charge à l'aide de {0}",
    "Provide your {0} (TSG ID)":
      "Indiquez votre {0} (TSG ID)",
    "Providing additional filters should be done in the following format: {0}. For example: {1}.":
      "Les filtres supplémentaires doivent être fournis au format suivant : {0}. Par exemple : {1}.",
    "Rasterize Mode: It is possible to rasterize either via Chrome WebDriver or Chrome Headless CLI. WebDriver supports more options than Headless CLI. Such as support for the {0} option in the {1} command. There are some urls that do not rasterize well with WebDriver and may succeed with Headless CLI. Thus, it is recommended to use the {2} mode, which will use WebDriver as a start and fallback to Headless CLI if it fails.":
      "Mode de rasterisation : il est possible de rasteriser via Chrome WebDriver ou Chrome Headless CLI. WebDriver prend en charge plus d'options que Headless CLI, comme la prise en charge de l'option {0} dans la commande {1}. Certaines URL ne sont pas bien rasterisées avec WebDriver et peuvent fonctionner avec Headless CLI. Il est donc recommandé d'utiliser le mode {2}, qui utilise d'abord WebDriver puis bascule vers Headless CLI en cas d'échec.",
    "Review the requested permissions on GitLab, and click {0}.":
      "Vérifiez les autorisations demandées sur GitLab, puis cliquez sur {0}.",
    "Save the integration and note the {0} and {1}.":
      "Enregistrez l'intégration et notez {0} et {1}.",
    "See {0} for more information.":
      "Pour plus d'informations, consultez {0}.",
    "See {0} regarding this requirement.":
      "Consultez {0} concernant cette exigence.",
    "Select a {0}.":
      "Sélectionnez {0}.",
    "Select an {0} for the token.":
      "Sélectionnez {0} pour le jeton.",
    "Select an {0}, then fill in only that version’s fields. Fields labeled with the other version are ignored.":
      "Sélectionnez {0}, puis renseignez uniquement les champs de cette version. Les champs étiquetés avec l'autre version sont ignorés.",
    "Select your User Assigned Managed Identity -> copy the Client ID -> put it in the {0} filed in the instance configuration.":
      "Sélectionnez votre User Assigned Managed Identity -> copiez le Client ID -> collez-le dans le champ {0} de la configuration de l'instance.",
    "Sends a POST request to {0} with {1}, {2}, and {3}.":
      "Envoie une requête POST à {0} avec {1}, {2} et {3}.",
    "Set up ZIdentity, link your service tenants, and create API Clients with the right roles and resources — {0}.":
      "Configurez ZIdentity, associez vos tenants de service et créez des clients API avec les rôles et ressources appropriés — {0}.",
    "Sign in to your Darkmon tenant, go to {0}, and create a key with the scopes your XSOAR instance needs. Paste it into the {1} field below.":
      "Connectez-vous à votre tenant Darkmon, accédez à {0} et créez une clé avec les étendues dont votre instance XSOAR a besoin. Collez-la dans le champ {1} ci-dessous.",
    "Sign in to your Okta organization as a user {0}.":
      "Connectez-vous à votre organisation Okta en tant qu'utilisateur {0}.",
    "The {0} advanced parameter is available for cases where the automatic agent detection fails (e.g., API requests return errors or the {1} button fails due to an incorrect agent header). By default, the integration auto-detects the correct agent based on the platform. Only change this setting if instructed to do so by support or if auto-detection is not working correctly.":
      "Le paramètre avancé {0} est disponible pour les cas où la détection automatique de l'agent échoue (par exemple, les requêtes d'API renvoient des erreurs ou le bouton {1} échoue en raison d'un en-tête d'agent incorrect). Par défaut, l'intégration détecte automatiquement l'agent approprié en fonction de la plateforme. Ne modifiez ce paramètre que si le support vous le demande ou si la détection automatique ne fonctionne pas correctement.",
    "The {0} and {1} commands are only supported when using the {2} with {3} permission type.":
      "Les commandes {0} et {1} ne sont prises en charge que lors de l'utilisation de {2} avec le type d'autorisation {3}.",
    "The {0} and the {1} integration parameters should be left blank.":
      "Les paramètres d'intégration {0} et {1} doivent rester vides.",
    "The {0} command requires some JSON format arguments. Please make sure the inputed JSONs have uniqe characters (such as {1}) escaped before entering them (e.g. {2}).":
      "La commande {0} nécessite certains arguments au format JSON. Veillez à ce que les caractères spéciaux (tels que {1}) des JSON saisis soient échappés avant leur saisie (par exemple {2}).",
    "The {0} corresponds to the {1} in the integration credentials field.":
      "{0} correspond à {1} dans le champ d'identifiants de l'intégration.",
    "The {0} integration parameter should be set according to the requested OAuth2 permissions types to grant access to in Microsoft identity platform, for more details see the {1}.":
      "Le paramètre d'intégration {0} doit être défini en fonction des types d'autorisations OAuth2 demandés pour accorder l'accès dans Microsoft identity platform. Pour plus de détails, consultez {1}.",
    "The {0} integration parameter should be set to {1} (the Cortex Azure app ID).":
      "Le paramètre d'intégration {0} doit être défini sur {1} (l'ID de l'application Azure de Cortex).",
    "The {0} parameter is required by both.":
      "Le paramètre {0} est requis par les deux.",
    "The {0} parameter specifies if a new user should be created when the User Profile passed was not found in the 3rd-party integration.":
      "Le paramètre {0} indique si un nouvel utilisateur doit être créé lorsque le profil utilisateur transmis est introuvable dans l'intégration tierce.",
    "The API connection requires the {0} and {1} parameters as well as a {2} or {3}.":
      "La connexion à l'API requiert les paramètres {0} et {1}, ainsi que {2} ou {3}.",
    "The default language used for OCR is English. To configure additional languages, in the {0} parameter specify a CSV list of language codes. For example, to set the integration for English and French, set this value: {1}. To see all supported language codes,run the following command:":
      "La langue par défaut utilisée pour l'OCR est l'anglais. Pour configurer des langues supplémentaires, spécifiez dans le paramètre {0} une liste CSV de codes de langue. Par exemple, pour configurer l'intégration pour l'anglais et le français, définissez cette valeur : {1}. Pour afficher tous les codes de langue pris en charge, exécutez la commande suivante :",
    "The integration uses the OAuth 2.0 {0} grant type:":
      "L'intégration utilise le type d'octroi {0} d'OAuth 2.0 :",
    "The legacy content search solution is {0}. Content searches are now performed within the context of an eDiscovery case.":
      "La solution héritée de recherche de contenu est {0}. Les recherches de contenu sont désormais effectuées dans le contexte d'une affaire eDiscovery.",
    "The pack ships pointing at the production endpoint. To target your dev or staging environment, set {0} to your dev URL on this instance only.":
      "Le pack est livré avec le point de terminaison de production par défaut. Pour cibler votre environnement de développement ou de préproduction, définissez {0} sur votre URL de développement uniquement sur cette instance.",
    "The Server URL assigned to your organization. For example, {0}.":
      "L'URL du serveur attribuée à votre organisation. Par exemple, {0}.",
    "The SSH connection requires the {0}, {1} and {2} are provided.":
      "La connexion SSH nécessite que {0}, {1} et {2} soient fournis.",
    "The vsys is located in the Firewall URL; e.g, {0}":
      "Le vsys se trouve dans l'URL du pare-feu ; par exemple, {0}",
    "There are 3 different authentication {0}":
      "Il existe 3 {0} d'authentification différents",
    "There are 3 different authentication {0}.":
      "Il existe 3 {0} d'authentification différents.",
    "There are two different authentication methods for {0}:":
      "Il existe deux méthodes d'authentification différentes pour {0} :",
    "This API enables you to use the Google Admin API. In order to enable the API, you need to create an account service private key JSON file and copy its content as the value for the {0} parameter field.":
      "Cette API vous permet d'utiliser l'API Google Admin. Pour activer l'API, vous devez créer un fichier JSON contenant la clé privée du compte de service et copier son contenu comme valeur du champ de paramètre {0}.",
    "This integration connects to the Zscaler Internet Access (ZIA) API using {0} authentication via ZIdentity, replacing the legacy session-based authentication.":
      "Cette intégration se connecte à l'API Zscaler Internet Access (ZIA) à l'aide de l'authentification {0} via ZIdentity, en remplacement de l'ancienne authentification basée sur la session.",
    "This integration is deprecated. Use the Microsoft Graph Security integration for supported replacement functionality. For a list of command replacements, see the {0}.":
      "Cette intégration est obsolète. Utilisez l'intégration Microsoft Graph Security pour bénéficier des fonctionnalités de remplacement prises en charge. Pour obtenir la liste des commandes de remplacement, consultez {0}.",
    "This integration uses the {0} mechanism to periodically collect assets and vulnerabilities from Rapid7 InsightVM.":
      "Cette intégration utilise le mécanisme {0} pour collecter périodiquement les actifs et les vulnérabilités de Rapid7 InsightVM.",
    "This is a long-running integration. For more information about long-running integrations, check out the {0} article.":
      "Il s'agit d'une intégration de longue durée. Pour plus d'informations sur les intégrations de longue durée, consultez l'article {0}.",
    "To access the {0} by instance name, set up the {1} and {2} values in the {3} page ({4} > {5} > {6} > {7}).":
      "Pour accéder à {0} par nom d'instance, configurez les valeurs {1} et {2} dans la page {3} ({4} > {5} > {6} > {7}).",
    "To add mirroring in both environments, in the Incident Mirroring Direction field, select {0}. Outgoing mirroring is recommended for Cortex version 6.2 and above. If you enable mirroring, you need to add the timezone of the Splunk server (in minutes). For example, if using GMT and the timezone is GMT {1}180. For UTC, set the timezone to 0. Set this only if the Splunk server is different than the Cortex server. This is relevant only for fetching notable events.":
      "Pour ajouter la mise en miroir dans les deux environnements, dans le champ Sens de mise en miroir des incidents, sélectionnez {0}. La mise en miroir sortante est recommandée pour Cortex version 6.2 et ultérieure. Si vous activez la mise en miroir, vous devez ajouter le fuseau horaire du serveur Splunk (en minutes). Par exemple, si vous utilisez GMT et que le fuseau horaire est GMT {1}180. Pour UTC, définissez le fuseau horaire sur 0. Ne définissez cette valeur que si le serveur Splunk est différent du serveur Cortex. Cela ne concerne que la récupération des événements notable.",
    "To allow access to Microsoft Defender Advanced Threat Protection, an admin has to approve our app using an admin consent flow, by clicking on the following {0}. After authorizing the Cortex app, you will get an {1}, {2}, and {3}, which you then need to insert in the integration instance settings corresponding fields.":
      "Pour autoriser l'accès à Microsoft Defender Advanced Threat Protection, un administrateur doit approuver notre application à l'aide d'un flux de consentement administrateur, en cliquant sur le {0} suivant. Après avoir autorisé l'application Cortex, vous obtiendrez les valeurs suivantes : {1}, {2} et {3}, que vous devrez ensuite saisir dans les champs correspondants des paramètres de l'instance d'intégration.",
    "To configure this integration, you need an {0} and a {1} from the iZOOlogic platform.":
      "Pour configurer cette intégration, vous avez besoin de {0} et de {1} de la plateforme iZOOlogic.",
    "To connect the McAfee TIE using the DXL TIE client, you need to create certificates and configure DXL. For more information, see the {0}. After you complete this configuration, you will have the following files.":
      "Pour connecter McAfee TIE à l'aide du client DXL TIE, vous devez créer des certificats et configurer DXL. Pour plus d'informations, consultez {0}. Une fois cette configuration terminée, vous disposerez des fichiers suivants.",
    "To create, modify, and delete Safe Links policies, you need to be a member of the {0} or {1} role groups.":
      "Pour créer, modifier et supprimer des stratégies Safe Links, vous devez être membre des groupes de rôles {0} ou {1}.",
    "To enable the Shodan integration you need to have an API key, which you can get for free by creating a Shodan account {0} Once you have an API key you insert it into the {1} field and click the {2} button.":
      "Pour activer l'intégration Shodan, vous avez besoin d'une clé API, que vous pouvez obtenir gratuitement en créant un compte Shodan ({0}). Une fois que vous avez une clé API, saisissez-la dans le champ {1} et cliquez sur le bouton {2}.",
    "To execute the command either provide the value of the Admin email in the integration configuration or provide the value of the {0} argument for the command or provide the admin role to the created service account’s email by performing the following steps:":
      "Pour exécuter la commande, indiquez la valeur de l'adresse e-mail de l'administrateur dans la configuration de l'intégration, indiquez la valeur de l'argument {0} de la commande ou attribuez le rôle d'administrateur à l'adresse e-mail du compte de service créé en suivant les étapes suivantes :",
    "To generate an API key, login to Netcraft and go to the {0}":
      "Pour générer une clé API, connectez-vous à Netcraft et accédez à {0}",
    "To generate tokens, browse to {0} and follow the instructions":
      "Pour générer des jetons, accédez à {0} et suivez les instructions",
    "To get an API client ID and secret, contact {0}.":
      "Pour obtenir un ID client et un secret d'API, contactez {0}.",
    "To get the {0}, {1}, {2} and {3} parameters, in the Azure Portal, go to {4} and click the {5} tab.":
      "Pour obtenir les paramètres {0}, {1}, {2} et {3}, dans le portail Azure, accédez à {4} et cliquez sur l'onglet {5}.",
    "To get your API key, here is a {0} to Tavily UI.":
      "Pour obtenir votre clé API, voici un {0} vers l'interface utilisateur de Tavily.",
    "To manage permissions in the Microsoft Defender XDR portal, go to {0} or https://security.microsoft.com/securitypermissions. You need to be a global administrator or a member of the Organization Management role group in the Microsoft Defender XDR portal. Specifically, the Role Management role allows users to view, create, and modify role groups in the Microsoft Defender XDR portal, and by default, that role is assigned only to the Organization Management role group.":
      "Pour gérer les autorisations dans le portail Microsoft Defender XDR, accédez à {0} ou à https://security.microsoft.com/securitypermissions. Vous devez être administrateur général ou membre du groupe de rôles Organization Management dans le portail Microsoft Defender XDR. Plus précisément, le rôle Role Management permet aux utilisateurs d'afficher, de créer et de modifier des groupes de rôles dans le portail Microsoft Defender XDR et, par défaut, ce rôle n'est attribué qu'au groupe de rôles Organization Management.",
    "To mirror offenses with events, enable the {0} parameter and set {1} to {2}.":
      "Pour mettre en miroir les infractions avec leurs événements, activez le paramètre {0} et définissez {1} sur {2}.",
    "To obtain an API Key, run the following REST command and copy the key: {0}":
      "Pour obtenir une clé API, exécutez la commande REST suivante et copiez la clé : {0}",
    "To reset fetch incidents, run {0} - this will reset the fetch to its initial state (will try to fetch first available offense).":
      "Pour réinitialiser la récupération des incidents, exécutez {0} : cela réinitialisera la récupération à son état initial (tentera de récupérer la première infraction disponible).",
    "To reset fetch incidents, run the {0} command - This will reset the fetch to its initial state. (Will try to fetch the first available offense).":
      "Pour réinitialiser la récupération des incidents, exécutez la commande {0} : cela réinitialisera la récupération à son état initial. (Tentera de récupérer la première infraction disponible).",
    "To retrieve the Egress API key from Panorama - Click “Generate API Key” under {0}":
      "Pour récupérer la clé API Egress depuis Panorama, cliquez sur « Generate API Key » sous {0}",
    "To start fetching incidents, enable the parameter {0} - this will start a long running process that’ll fetch incidents periodically. Depending on the system load, {1}.":
      "Pour commencer à récupérer des incidents, activez le paramètre {0} : cela lancera un processus de longue durée qui récupérera périodiquement les incidents. Selon la charge du système, {1}.",
    "To use {0}:":
      "Pour utiliser {0} :",
    "To use a {0} , you need to add a {1}.":
      "Pour utiliser {0}, vous devez ajouter {1}.",
    "To use a self-configured Azure application, you need to add a new Azure App Registration in the Azure Portal. For more details, follow {0}.":
      "Pour utiliser une application Azure que vous avez configurée vous-même, vous devez ajouter un nouvel Azure App Registration dans le portail Azure. Pour plus de détails, suivez {0}.",
    "To use a self-configured Azure application, you need to add a new Azure App Registration in the Azure Portal. To add an app registration, refer to steps 1-6 under the {0} section of the integration documentation {1}.":
      "Pour utiliser une application Azure que vous avez configurée vous-même, vous devez ajouter un nouvel Azure App Registration dans le portail Azure. Pour ajouter un enregistrement d'application, reportez-vous aux étapes 1 à 6 de la section {0} de la documentation de l'intégration {1}.",
    "To use ServiceNow in XSOAR, ensure your user account has the {0}, {1} roles or any other role required to permit working with the {2} table. These roles are required in order to make API calls. However, they may not suffice for viewing records in some tables.":
      "Pour utiliser ServiceNow dans XSOAR, assurez-vous que votre compte utilisateur dispose des rôles {0}, {1} ou de tout autre rôle nécessaire pour permettre de travailler avec la table {2}. Ces rôles sont requis pour effectuer des appels d'API. Toutefois, ils peuvent ne pas suffire pour afficher les enregistrements de certaines tables.",
    "To use the {0} command, ensure the {1} has one of the following roles assigned:":
      "Pour utiliser la commande {0}, assurez-vous que {1} dispose de l'un des rôles suivants :",
    "To use the {0} command, you need to authorize the client (Cortex) to run the command. Follow the {1} to do so. In step 4, instead of selecting {2}, select {3}.":
      "Pour utiliser la commande {0}, vous devez autoriser le client (Cortex) à exécuter la commande. Suivez {1} pour ce faire. À l'étape 4, au lieu de sélectionner {2}, sélectionnez {3}.",
    "To use the {0} command, you need to authorize the client (Demisto) to run the command. Follow the instructions in the {1}. In step #4, instead of selecting {2}, select {3}.":
      "Pour utiliser la commande {0}, vous devez autoriser le client (Demisto) à exécuter la commande. Suivez les instructions de {1}. À l'étape 4, au lieu de sélectionner {2}, sélectionnez {3}.",
    "To use the full capabilities of this integration, make sure your user has the following permissions: {0}, {1}, {2}.":
      "Pour utiliser toutes les fonctionnalités de cette intégration, assurez-vous que votre utilisateur dispose des autorisations suivantes : {0}, {1}, {2}.",
    "To use the integration commands, ensure the {0} has one of the following roles assigned:":
      "Pour utiliser les commandes de l'intégration, assurez-vous que {0} dispose de l'un des rôles suivants :",
    "To use the integration with an API token, you first need to change the {0} field to {1}. Following this step, you can now enter the API Token into the {2} field - this value will be used as an API key.":
      "Pour utiliser l'intégration avec un jeton d'API, vous devez d'abord remplacer le champ {0} par {1}. Ensuite, vous pouvez saisir le jeton d'API dans le champ {2} : cette valeur sera utilisée comme clé API.",
    "To view and run Office 365 unified audit log searches, admins or users must be assigned the {0} or {1} role in {2}.":
      "Pour afficher et exécuter des recherches dans le journal d'audit unifié d'Office 365, les administrateurs ou utilisateurs doivent se voir attribuer le rôle {0} ou {1} dans {2}.",
    "To view logs concerning the creation of the indicator list and its current status add the {0} suffix to the list URL.":
      "Pour afficher les journaux concernant la création de la liste d'indicateurs et son état actuel, ajoutez le suffixe {0} à l'URL de la liste.",
    "Under {0}, click {1}.":
      "Sous {0}, cliquez sur {1}.",
    "Under {0}, select the necessary permissions. Choose minimal permissions.":
      "Sous {0}, sélectionnez les autorisations nécessaires. Choisissez des autorisations minimales.",
    "Under {0}, select which repositories the token can access. Choose minimal access.":
      "Sous {0}, sélectionnez les dépôts auxquels le jeton peut accéder. Choisissez un accès minimal.",
    "Under the {0} tab, grant the required scopes mentioned above for the app.":
      "Dans l'onglet {0}, accordez à l'application les portées requises mentionnées ci-dessus.",
    "Under the newly added {0} section, click {1}.":
      "Dans la section {0} nouvellement ajoutée, cliquez sur {1}.",
    "US Government Department of Defence (DoD) Endpoint: {0}":
      "Point de terminaison du Département de la Défense (DoD) du gouvernement américain : {0}",
    "US Government GCC-High Endpoint: {0}":
      "Point de terminaison GCC-High du gouvernement américain : {0}",
    "Use {0} to check acceptance, {1} to review it, and {2} to accept.":
      "Utilisez {0} pour vérifier l'acceptation, {1} pour la consulter et {2} pour l'accepter.",
    "Use Cortex’s credentials store with a {0} and {1} as the {2} and {3} in case you are using Enterprise DLP through a SASE platform.":
      "Si vous utilisez Enterprise DLP via une plateforme SASE, utilisez le magasin d'informations d'identification de Cortex avec {0} et {1} comme {2} et {3}.",
    "Use the {0} integration to enrich indicators with threat intelligence context from Palo Alto Networks Unit 42’s research team.":
      "Utilisez l'intégration {0} pour enrichir les indicateurs avec le contexte de renseignement sur les menaces de l'équipe de recherche Unit 42 de Palo Alto Networks.",
    "Use the {0} integration to fetch indicators and threat objects from Palo Alto Networks Unit 42’s comprehensive threat feed. This integration provides continuous access to high-quality indicators of compromise (IOCs) and contextual threat intelligence.":
      "Utilisez l'intégration {0} pour récupérer les indicateurs et les objets de menace du flux de menaces complet de Unit 42 de Palo Alto Networks. Cette intégration offre un accès continu à des indicateurs de compromission (IOC) de haute qualité et à des renseignements contextuels sur les menaces.",
    "Use the {0} parameter to control what this integration ingests. You can select {1}, {2}, or both:":
      "Utilisez le paramètre {0} pour contrôler ce que cette intégration ingère. Vous pouvez sélectionner {1}, {2} ou les deux :",
    "Use the {0} parameter to filter cases by the required severity and the {1} parameter to filter cases by the required status.":
      "Utilisez le paramètre {0} pour filtrer les cas selon la gravité requise et le paramètre {1} pour les filtrer selon le statut requis.",
    "Use the {0} to link Microsoft Defender XDR with Cortex.":
      "Utilisez {0} pour associer Microsoft Defender XDR à Cortex.",
    "Use the {0} to link Microsoft Graph Services with Cortex.":
      "Utilisez {0} pour associer Microsoft Graph Services à Cortex.",
    "Use the appropriate server URL in the {0} parameter based on your region or cloud environment:":
      "Utilisez l'URL de serveur appropriée dans le paramètre {0} en fonction de votre région ou de votre environnement cloud :",
    "Use this {0} to log in to the Joe Security platform.":
      "Utilisez ce {0} pour vous connecter à la plateforme Joe Security.",
    "Using a national cloud endpoint is supported by setting the {0} parameter to one of the following options:":
      "L'utilisation d'un point de terminaison de cloud national est prise en charge en définissant le paramètre {0} sur l'une des options suivantes :",
    "Visit {0} for a list of all possible fields to be used in the filter.":
      "Consultez {0} pour obtenir la liste de tous les champs utilisables dans le filtre.",
    "Visit {0} for explanation about filter syntax.":
      "Consultez {0} pour obtenir une explication sur la syntaxe des filtres.",
    "Visit the {0} for a full list of available API versions according to the QRadar version.":
      "Consultez {0} pour obtenir la liste complète des versions d'API disponibles selon la version de QRadar.",
    "When encountering connectivity or authorization errors, it is necessary to include the IP addresses corresponding to the relevant region in the CrowdStrike Falcon allow list. These IP addresses can be found in the {0} by searching for {1}.":
      "En cas d'erreurs de connectivité ou d'autorisation, il est nécessaire d'inclure les adresses IP correspondant à la région concernée dans la liste d'autorisation de CrowdStrike Falcon. Ces adresses IP se trouvent dans {0} en recherchant {1}.",
    "When encountering HTTP 429 response error code from CrowdStrike Falcon, use an engine as explained in this {0}.":
      "Lorsque vous rencontrez le code d'erreur de réponse HTTP 429 de CrowdStrike Falcon, utilisez un moteur comme expliqué dans ce {0}.",
    "When mirroring offenses with events it is advised to set the {0} to a small value.":
      "Lors de la mise en miroir des infractions avec leurs événements, il est recommandé de définir {0} sur une valeur faible.",
    "When switching from the {0} to the {1} do as follow: Save the instance, run the {2} command and follow the instructions mentioned there. Once done, test the validity of your instance by running the {3} command. When switching from the {4} to the {5}, test the validity of the instance by clicking the ‘Test’ button.":
      "Lors du passage de {0} à {1}, procédez comme suit : enregistrez l'instance, exécutez la commande {2} et suivez les instructions indiquées. Une fois cela fait, testez la validité de votre instance en exécutant la commande {3}. Lors du passage de {4} à {5}, testez la validité de l'instance en cliquant sur le bouton ‘Tester’.",
    "When using {0}, the connection should be tested using the {1} command.":
      "Lorsque vous utilisez {0}, la connexion doit être testée à l'aide de la commande {1}.",
    "When using the {0} for this integration, you should log in as an administrator or a user with administrative privileges ({1} or {2}) after running the {3} command and the login window appears. For more information, see {4}.":
      "Lorsque vous utilisez {0} pour cette intégration, vous devez vous connecter en tant qu'administrateur ou utilisateur disposant de privilèges administratifs ({1} ou {2}) après avoir exécuté la commande {3} et lorsque la fenêtre de connexion apparaît. Pour plus d'informations, consultez {4}.",
    "When using the {0}, make sure the user you authenticate with has the relevant roles in Azure AD in order to execute the operation. To verify that authentication was configured correctly, run the {1} command.":
      "Lorsque vous utilisez {0}, assurez-vous que l'utilisateur avec lequel vous vous authentifiez dispose des rôles appropriés dans Azure AD pour exécuter l'opération. Pour vérifier que l'authentification est correctement configurée, exécutez la commande {1}.",
    "Whether to output {0} formats as textual web pages.":
      "Indique s'il faut afficher les formats {0} sous forme de pages web textuelles.",
    "You can apply additional (optional) filters for the fetch-incident query using the {0} integration parameter. For more information on how to use the filter syntax, see the {1} and {2}.":
      "Vous pouvez appliquer des filtres supplémentaires (facultatifs) à la requête de récupération des incidents à l'aide du paramètre d'intégration {0}. Pour plus d'informations sur l'utilisation de la syntaxe des filtres, consultez {1} et {2}.",
    "You can apply additional (optional) filters for the fetch-incident query using the {0} integration parameter. For more information on how to use the filter syntax:":
      "Vous pouvez appliquer des filtres supplémentaires (facultatifs) à la requête de récupération des incidents à l'aide du paramètre d'intégration {0}. Pour plus d'informations sur l'utilisation de la syntaxe des filtres :",
    "You can narrow what is fetched using the {0} and {1} parameters. These accept an OData {2} expression, for example {3}. For the supported syntax and operators, see {4}.":
      "Vous pouvez affiner ce qui est récupéré à l'aide des paramètres {0} et {1}. Ils acceptent une expression OData {2}, par exemple {3}. Pour connaître la syntaxe et les opérateurs pris en charge, consultez {4}.",
    "You can use an existing Terraform user or team token, or create a new one (organization tokens are not supported). Ensure the user or team has {0} and {1} permissions for the HCP Terraform organization and workspaces to integrate.":
      "Vous pouvez utiliser un jeton utilisateur ou d'équipe Terraform existant, ou en créer un nouveau (les jetons d'organisation ne sont pas pris en charge). Assurez-vous que l'utilisateur ou l'équipe dispose des autorisations {0} et {1} sur l'organisation et les espaces de travail HCP Terraform à intégrer.",
    "You can use an existing Terraform user or team token, or create a new one (organization tokens are not supported). Ensure the user or team has {0} and {1} permissions for the Terraform Enterprise organization and workspaces to integrate.":
      "Vous pouvez utiliser un jeton utilisateur ou d'équipe Terraform existant, ou en créer un nouveau (les jetons d'organisation ne sont pas pris en charge). Assurez-vous que l'utilisateur ou l'équipe dispose des autorisations {0} et {1} sur l'organisation et les espaces de travail Terraform Enterprise à intégrer.",
    "You find more information about SIGNL4 at {0}.":
      "Vous trouverez plus d'informations sur SIGNL4 sur {0}.",
    "You must have the {0} configured in the ZIA Admin Portal.":
      "Vous devez avoir configuré {0} dans le ZIA Admin Portal.",

    // --- Batch: Missed items reported by user (tooltips and standalone Deprecated.) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    "This value will only be used when no arguments were given to the ad-get-user command.":
      "Cette valeur n'est utilisée que lorsqu'aucun argument n'a été fourni à la commande ad-get-user.",
    "if no offenses are found within the range of first fetch, will be set to fetch the earliest offense.":
      "Si aucune infraction n'est trouvée dans la plage de la première récupération, la valeur est définie de façon à récupérer l'infraction la plus ancienne.",
    "Source of WildFire API Key - other = NGFW, WildFire API - pcc = Prisma Cloud Compute - prismaaccessapi = Prisma Access - xsoartim = XSOAR TIM API Key":
      "Source de la clé API WildFire - other = NGFW, WildFire API - pcc = Prisma Cloud Compute - prismaaccessapi = Prisma Access - xsoartim = clé API XSOAR TIM",
    "Deprecated.":
      "Obsolète.",

    // --- Batch: Login page strings (08:49 export) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    "By signing in, you agree to our Terms and acknowledge our Privacy Statement.":
      "En vous connectant, vous acceptez nos Conditions et reconnaissez avoir pris connaissance de notre Déclaration de confidentialité.",
    "Sign-in with CSP":
      "Se connecter avec CSP",
    "Sign-in with SSO":
      "Se connecter avec SSO",
    "Welcome to Cortex":
      "Bienvenue dans Cortex",
    "You’re backed by the world’s most trusted security platform.":
      "Vous bénéficiez du soutien de la plateforme de sécurité la plus fiable au monde.",

    // --- Batch: Slack access token sentence (single and two-sentence block variants) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    "In order to use this integration, you need to enter your Slack access token in the {0} integration instance parameter.":
      "Pour utiliser cette intégration, vous devez saisir votre jeton d'accès Slack dans le paramètre d'instance d'intégration {0}.",
    "In order to use this integration, you need to enter your Slack access token in the {0} integration instance parameter. The simplest way to acquire this token is for an Org Owner to create a new Slack app, add the admin OAuth scope, install the app, and use the generated token.":
      "Pour utiliser cette intégration, vous devez saisir votre jeton d'accès Slack dans le paramètre d'instance d'intégration {0}. Le moyen le plus simple d'obtenir ce jeton est qu'un Org Owner crée une nouvelle application Slack, ajoute la portée OAuth admin, installe l'application et utilise le jeton généré.",
    "Set the":
      "Définissez le paramètre",
    "Cisco Umbrella Investigate enables you to research domains, IPs, and URLs observed by the Umbrella resolvers.":
      "Cisco Umbrella Investigate vous permet d'analyser les domaines, les adresses IP et les URL observés par les résolveurs Umbrella.",
    "command in the War Room and follow the instruction.":
      "commande dans la War Room et suivez les instructions.",
    "command to test the connection and the authorization process.":
      "commande pour tester la connexion et le processus d'autorisation.",
    "Default Workspace ID (the UUID of the workspace, e.g. 123e4567-e89b-12d3-a456-426614174000)":
      "ID de l'espace de travail par défaut (l'UUID de l'espace de travail, par ex. 123e4567-e89b-12d3-a456-426614174000)",
    "Default Workspace Name":
      "Nom de l'espace de travail par défaut",
    "Deprecated. Use Cisco Secure Malware Analytics (Threat Grid) v2 instead.":
      "Obsolète. Utilisez plutôt Cisco Secure Malware Analytics (Threat Grid) v2.",
    "Enter your Client ID in the":
      "Saisissez votre Client ID dans le champ",
    "Enter your redirect URI in the":
      "Saisissez votre URI de redirection dans le champ",
    "Follow these steps for client-credentials configuration.":
      "Suivez ces étapes pour la configuration des informations d'identification du client.",
    "For more details about the authentication used in this integration, see":
      "Pour plus de détails sur l'authentification utilisée dans cette intégration, consultez",
    "Full documentation for this integration is available in the":
      "La documentation complète de cette intégration est disponible dans",
    "Get the Additional Instance Parameters":
      "Obtenir les paramètres d'instance supplémentaires",
    "IAM integration for Clarizen. Handles user account auto-provisioning to Clarizen.":
      "Intégration IAM pour Clarizen. Gère le provisionnement automatique des comptes utilisateur dans Clarizen.",
    "ID / Client ID":
      "ID / ID client",
    "Key / Client Secret":
      "Clé / Secret client",
    "Token / Tenant ID":
      "Jeton / ID du tenant",
    "In the instance configuration, select the":
      "Dans la configuration de l'instance, sélectionnez l'option",
    "In the self-deployed mode, you can authenticate by using one of the following flows:":
      "En mode auto-déployé, vous pouvez vous authentifier à l'aide de l'un des flux suivants :",
    "Locking mechanism that prevents concurrent execution of different tasks":
      "Mécanisme de verrouillage qui empêche l'exécution simultanée de différentes tâches",
    "Microsoft Integrations - Authentication":
      "Intégrations Microsoft – Authentification",
    "page of the app.":
      "de l'application.",
    "Redirect URI":
      "URI de redirection",
    "reference docs":
      "documentation de référence",
    "Save the integration settings.":
      "Enregistrez les paramètres de l'intégration.",
    "Self-Deployed Application Authentication guide":
      "guide d'authentification des applications auto-déployées",
    "Server URL (e.g., https://management.azure.com)":
      "URL du serveur (par ex. https://management.azure.com)",
    "Subscription ID":
      "ID d'abonnement",
    "The Certificate Thumbprint is used for certificate authentication as it appears on the":
      "L'empreinte du certificat est utilisée pour l'authentification par certificat, telle qu'elle apparaît sur la page",
    "The private key of the registered certificate, used for certificate authentication.":
      "La clé privée du certificat enregistré, utilisée pour l'authentification par certificat.",
    "Used for certificate authentication. The private key of the registered certificate.":
      "Utilisée pour l'authentification par certificat. La clé privée du certificat enregistré.",
    "There are two authentication methods available:":
      "Deux méthodes d'authentification sont disponibles :",
    "to configure and enable authentication.":
      "pour configurer et activer l'authentification.",
    "To use a self-configured Azure application, you need to add a new Azure App Registration in the Azure Portal. To add the registration, go to the":
      "Pour utiliser une application Azure configurée par vos soins, vous devez ajouter une nouvelle inscription d'application Azure dans le portail Azure. Pour ajouter l'inscription, accédez à",
    "Use a self-deployed Azure application - Authorization Code flow":
      "Utiliser une application Azure auto-déployée – Flux de code d'autorisation",
    "Use a self-deployed Azure application - Client Credentials Authorization Flow":
      "Utiliser une application Azure auto-déployée – Flux d'autorisation par informations d'identification du client",
    "Use a self-deployed Azure application - Client Credentials Flow":
      "Utiliser une application Azure auto-déployée – Flux d'informations d'identification du client",
    "Use Core REST APIs.":
      "Utilisez les API REST de Core.",
    "Use Gov Account Settings":
      "Utiliser les paramètres de compte gouvernemental",
    "Use the Code42 integration to identify potential data exfiltration from insider threats while speeding investigation and response by providing fast access to file events and metadata across physical and cloud environments.":
      "Utilisez l'intégration Code42 pour identifier les risques d'exfiltration de données liés aux menaces internes et accélérer l'investigation et la réponse grâce à un accès rapide aux événements de fichiers et aux métadonnées dans les environnements physiques et cloud.",
    "Workspace ID":
      "ID de l'espace de travail",
    "Workspace Name":
      "Nom de l'espace de travail",
    "Workspace Settings":
      "Paramètres de l'espace de travail",

    // --- Batch: strings from the Collector export #3 (Azure Key Vault / Azure Compute / Azure Risky Users docs, Azure Event Hub & Azure DevOps wizards) ---
    // Fragments such as "and", "or", "The", "Set", "In the", "Run the", "Go to the", "Select the" are intentionally NOT registered.
    ": In Azure, go to Organization Settings → Security → Policies → toggle \"Third-party application access via OAuth\" ON. (":
      ": Dans Azure, accédez à Organization Settings → Security → Policies → activez « Third-party application access via OAuth ». (",
    "(Client ID)":
      "(ID client)",
    "(Client Secret (for Client Credentials mode))":
      "(Secret client (pour le mode d'informations d'identification du client))",
    "Add consumer group":
      "Ajouter un groupe de consommateurs",
    "After authorizing the Demisto app, you will receive an ID, Token, and Key, which needs to be added to the integration instance configuration’s corresponding fields. After giving consent, the application must have a role assigned, so it can access the relevant resources per subscription.":
      "Après avoir autorisé l'application Demisto, vous recevrez un ID, un jeton et une clé, qui doivent être ajoutés aux champs correspondants de la configuration de l'instance d'intégration. Une fois le consentement accordé, un rôle doit être attribué à l'application afin qu'elle puisse accéder aux ressources concernées pour chaque abonnement.",
    "After saving the client secret, the value of the client secret is displayed.":
      "Après l'enregistrement du secret client, la valeur du secret client s'affiche.",
    "After the Azure Key Vault integration instance is created, the credentials will be fetched":
      "Une fois l'instance d'intégration Azure Key Vault créée, les identifiants seront récupérés et enregistrés",
    "to the Cortex credentials store in the following format:":
      "dans le magasin d'identifiants de Cortex au format suivant :",
    "At the end of the process you’ll see a message that you’ve logged in successfully.":
      "À la fin du processus, un message vous indiquera que vous êtes connecté.",
    "Authenticate with your personal Microsoft account. Simple setup via OAuth redirect.":
      "Authentifiez-vous avec votre compte Microsoft personnel. Configuration simple via une redirection OAuth.",
    "Authentication Type":
      "Type d'authentification",
    "Authentication Type.":
      "Type d'authentification.",
    "Authentication Using the Client Credentials Flow (recommended)":
      "Authentification à l'aide du flux d'informations d'identification du client (recommandé)",
    "Authentication Using the Device Flow":
      "Authentification à l'aide du flux d'appareil",
    "Authorization":
      "Autorisation",
    "Authorize":
      "Autoriser",
    "Authorize Cortex for Azure Key Vault":
      "Autoriser Cortex pour Azure Key Vault",
    "Application ID":
      "ID de l'application",
    "Azure app registration article":
      "article sur l'inscription d'applications Azure",
    "Azure Cloud":
      "Cloud Azure",
    "Azure DevOps auth with Entra ID Prerequisites:":
      "Prérequis pour l'authentification Azure DevOps avec Entra ID :",
    "Azure Key Vault - permission user_impersonation of type Delegated":
      "Azure Key Vault : autorisation user_impersonation de type Delegated",
    "Azure Managed Identities":
      "Identités managées Azure",
    "Azure Managed Identities Authentication":
      "Authentification par identités managées Azure",
    "Azure Managed Identities client ID":
      "ID client des identités managées Azure",
    "Azure Managed Identities Client ID":
      "ID client des identités managées Azure",
    "Azure Portal":
      "Portail Azure",
    "Azure Service Management - permission user_impersonation of type Delegated":
      "Azure Service Management : autorisation user_impersonation de type Delegated",
    "Check Fetches credentials parameter.":
      "Cochez le paramètre « Récupérer les identifiants ».",
    "Choose Authentication Method":
      "Choisir la méthode d'authentification",
    "Client Secret (for Client Credentials mode)":
      "Secret client (pour le mode d'informations d'identification du client)",
    "command - a ‘Success’ message should be printed to the war-room.":
      "commande : un message « Success » doit s'afficher dans la war-room.",
    "Configure Account":
      "Configurer le compte",
    "Configure Azure Risky Users on Cortex Navigate to":
      "Configurez Azure Risky Users dans Cortex. Accédez à",
    "Confirm your Azure DevOps organization is connected to Microsoft Entra ID. (":
      "Vérifiez que votre organisation Azure DevOps est connectée à Microsoft Entra ID. (",
    "consumer group":
      "groupe de consommateurs",
    "Copy the Application ID and store it in the Client ID parameter.":
      "Copiez l'ID de l'application et enregistrez-le dans le paramètre Client ID.",
    "Copy the Directory (tenant) ID and enter it in the Tenant ID parameter.":
      "Copiez le Directory (tenant) ID et saisissez-le dans le paramètre Tenant ID.",
    "Copy the Subscription ID and enter it in the Subscription ID parameter.":
      "Copiez le Subscription ID et saisissez-le dans le paramètre Subscription ID.",
    "Copy this value and enter it in the Client Secret parameter.":
      "Copiez cette valeur et saisissez-la dans le paramètre Client Secret.",
    "Copy your resource group name and enter it in the Resource Group Name parameter.":
      "Copiez le nom de votre groupe de ressources et saisissez-le dans le paramètre Resource Group Name.",
    "Cortex App":
      "Application Cortex",
    "Cortex Azure App":
      "Application Azure de Cortex",
    "Cortex XSOAR Application":
      "application Cortex XSOAR",
    "Credential Name: KEY_VAULT_NAME/SECRET_NAME":
      "Nom de l'identifiant : KEY_VAULT_NAME/SECRET_NAME",
    "Credentials Fetch Mode":
      "Mode de récupération des identifiants",
    "Debug/Verbose logging is recommended only during troubleshooting. Logging can affect the performance of the integration. Recommended usage is to turn logging on during setup and troubleshooting, and then turn it off in production.":
      "La journalisation de débogage/détaillée n'est recommandée que pendant le dépannage. La journalisation peut affecter les performances de l'intégration. Il est recommandé de l'activer pendant la configuration et le dépannage, puis de la désactiver en production.",
    "Debug/Verbose logging is recommended only during troubleshooting. Logging can affect the performance of the integration. Recommended usage is to turn logging on during setup and troubleshooting, and then turn it off in production. These settings only affect the integration log. The server log is not affected.":
      "La journalisation de débogage/détaillée n'est recommandée que pendant le dépannage. La journalisation peut affecter les performances de l'intégration. Il est recommandé de l'activer pendant la configuration et le dépannage, puis de la désactiver en production. Ces paramètres n'affectent que le journal de l'intégration. Le journal du serveur n'est pas affecté.",
    "These settings only affect the integration log. The server log is not affected.":
      "Ces paramètres n'affectent que le journal de l'intégration. Le journal du serveur n'est pas affecté.",
    "Default Resource Group Name":
      "Nom du groupe de ressources par défaut",
    "Default Subscription ID":
      "ID d'abonnement par défaut",
    "Depending on the authentication method that you use, the integration parameters might change.":
      "Selon la méthode d'authentification utilisée, les paramètres de l'intégration peuvent changer.",
    "device authorization grant flow":
      "flux d'octroi d'autorisation d'appareil",
    "Device authorization grant flow":
      "Flux d'octroi d'autorisation d'appareil",
    "Device Code":
      "Code d'appareil",
    "Enable Azure Event Hub Log Collection":
      "Activer la collecte des journaux Azure Event Hub",
    "Enter account connection string":
      "Saisissez la chaîne de connexion du compte",
    "Enter event hub connection string":
      "Saisissez la chaîne de connexion du hub d'événements",
    "Enter Product":
      "Saisissez le produit",
    "Enter Vendor":
      "Saisissez le fournisseur",
    "Enter your Client Secret in the":
      "Saisissez votre secret client dans le champ",
    "Enter your Client/Application ID in the":
      "Saisissez votre ID client/application dans le champ",
    "Enter your Tenant ID in the":
      "Saisissez votre ID de tenant dans le champ",
    "field in the instance configuration.":
      "de la configuration de l'instance.",
    "field in the instance settings.":
      "des paramètres de l'instance.",
    "Entra ID — Choose Identity Type":
      "Entra ID : choisir le type d'identité",
    "event hub connection string":
      "chaîne de connexion du hub d'événements",
    "External Credentials Vault (on-demand)":
      "Coffre d'identifiants externe (à la demande)",
    "Fetch credentials from Azure Key Vault":
      "Récupérer les identifiants depuis Azure Key Vault",
    "Fetches credentials":
      "Récupérer les identifiants",
    "Fill in the required parameters.":
      "Renseignez les paramètres obligatoires.",
    "Fill Key Vault names to fetch secrets from.":
      "Renseignez les noms des Key Vault à partir desquels récupérer les secrets.",
    "Fill secret names to fetch.":
      "Renseignez les noms des secrets à récupérer.",
    "Follow one of these steps for authentication based on Azure Managed Identities:":
      "Suivez l'une de ces étapes pour l'authentification basée sur les identités managées Azure :",
    "Follow the instructions that appear.":
      "Suivez les instructions qui s'affichent.",
    "Follow these steps for a":
      "Suivez ces étapes pour une",
    "Follow these steps for a self-deployed configuration:":
      "Suivez ces étapes pour une configuration auto-déployée :",
    "self-deployed configuration":
      "configuration auto-déployée",
    "For information about Azure Managed Identities see":
      "Pour plus d'informations sur les identités managées Azure, consultez",
    "For more information, see the integration documentation.":
      "Pour plus d'informations, consultez la documentation de l'intégration.",
    "From App registrations in Azure AD, select your application.":
      "Dans App registrations d'Azure AD, sélectionnez votre application.",
    "Get client ID and tenant ID values":
      "Obtenir les valeurs de l'ID client et de l'ID du tenant",
    "Get client secret value":
      "Obtenir la valeur du secret client",
    "Get Subscription ID and the Resource Group values":
      "Obtenir les valeurs de l'ID d'abonnement et du groupe de ressources",
    "Host URL (e.g. https://management.azure.com)":
      "URL de l'hôte (par ex. https://management.azure.com)",
    "if your security policy does not allow secrets to be stored inside the Cortex credentials store. In this mode, the credentials picker in other integrations will list the configured secrets by name (KEY_VAULT_NAME/SECRET_NAME), but no secret values are pulled from Azure Key Vault. When a playbook or command actually executes an integration that uses one of those credentials, the secret value is fetched live from Azure Key Vault and is passed in memory only. Nothing is persisted in Cortex.":
      "si votre politique de sécurité n'autorise pas le stockage des secrets dans le magasin d'identifiants de Cortex. Dans ce mode, le sélecteur d'identifiants des autres intégrations répertorie les secrets configurés par nom (KEY_VAULT_NAME/SECRET_NAME), mais aucune valeur de secret n'est extraite d'Azure Key Vault. Lorsqu'un playbook ou une commande exécute réellement une intégration qui utilise l'un de ces identifiants, la valeur du secret est récupérée en direct depuis Azure Key Vault et transmise uniquement en mémoire. Rien n'est conservé dans Cortex.",
    "In order to fetch credentials to the Cortex credentials store,you should follow the next steps:":
      "Pour récupérer des identifiants dans le magasin d'identifiants de Cortex, suivez les étapes ci-dessous :",
    "In order to use the Cortex Azure application,":
      "Pour utiliser l'application Azure de Cortex,",
    "In the Azure portal, select Entra ID.":
      "Dans le portail Azure, sélectionnez Entra ID.",
    "In the Azure portal, select Resource groups.":
      "Dans le portail Azure, sélectionnez Resource groups.",
    "The default mode":
      "Le mode par défaut",
    "keeps the existing behavior: The secret values are fetched and stored in the Cortex credentials store.":
      "conserve le comportement existant : les valeurs des secrets sont récupérées et stockées dans le magasin d'identifiants de Cortex.",
    "Key Vault names - a comma separated list of Key Vaults to fetch secrets from.":
      "Noms des Key Vault : liste, séparée par des virgules, des Key Vault à partir desquels récupérer les secrets.",
    "Learn how":
      "Découvrir comment",
    "link new tab icon":
      "Icône de lien vers un nouvel onglet",
    "Make sure the following permissions are granted for the app registration:":
      "Assurez-vous que les autorisations suivantes sont accordées pour l'inscription de l'application :",
    "Make sure to provide the following permissions for the app to work with Azure Risky Users:":
      "Veillez à accorder les autorisations suivantes pour que l'application fonctionne avec Azure Risky Users :",
    "Manage policies":
      "Gérer les politiques",
    "Managed Identities":
      "Identités managées",
    "Managed identities for Azure resources":
      "Identités managées pour les ressources Azure",
    "Microsoft article":
      "article Microsoft",
    "Microsoft Entra ID authentication":
      "Authentification Microsoft Entra ID",
    "Microsoft integrations (Graph and Azure) in Cortex use Entra ID applications to authenticate with Microsoft APIs. These integrations use OAuth 2.0 and OpenID Connect standard-compliant authentication services, which use an Application to sign-in or delegate authentication. For more information, see the Microsoft identity platform overview.":
      "Les intégrations Microsoft (Graph et Azure) de Cortex utilisent des applications Entra ID pour s'authentifier auprès des API Microsoft. Ces intégrations s'appuient sur des services d'authentification conformes aux normes OAuth 2.0 et OpenID Connect, qui utilisent une application pour se connecter ou déléguer l'authentification. Pour plus d'informations, consultez la présentation de la plateforme d'identité Microsoft.",
    "Note: This option is relevant only if the integration is running on Azure VM.":
      "Remarque : cette option n'est pertinente que si l'intégration s'exécute sur une machine virtuelle Azure.",
    "Only necessary in case a Samples Feed is fetched.":
      "Nécessaire uniquement lorsqu'un flux d'échantillons est récupéré.",
    "Password: SECRET_VALUE":
      "Mot de passe : SECRET_VALUE",
    "Username: SECRET_NAME":
      "Nom d'utilisateur : SECRET_NAME",
    "Provide a description of the secret, and a duration. When done, select Add.":
      "Indiquez une description du secret et une durée. Une fois terminé, sélectionnez Add.",
    "Relevant only for sample feeds. JSON styled AutoFocus query, an example can be found in the description (?) section. mandatory for Samples Feed.":
      "Concerne uniquement les flux d'échantillons. Requête AutoFocus au format JSON ; un exemple figure dans la section de description (?). Obligatoire pour le flux d'échantillons.",
    "Required Permissions":
      "Autorisations requises",
    "Save the instance.":
      "Enregistrez l'instance.",
    "Search for AzureRiskyUsers.":
      "Recherchez AzureRiskyUsers.",
    "Secret names - a comma separated list of secrets to fetch.":
      "Noms des secrets : liste, séparée par des virgules, des secrets à récupérer.",
    "See documentation":
      "Voir la documentation",
    "Select Certificates & secrets.":
      "Sélectionnez Certificates & secrets.",
    "Select Client secrets -> New client secret.":
      "Sélectionnez Client secrets -> New client secret.",
    "Select Repositories":
      "Sélectionner des référentiels",
    "Select this checkbox if you are using a self-deployed Azure application.":
      "Cochez cette case si vous utilisez une application Azure auto-déployée.",
    "Select your resource group name.":
      "Sélectionnez le nom de votre groupe de ressources.",
    "Select your User Assigned Managed Identity -> copy the Client ID -> paste it in the":
      "Sélectionnez votre identité managée attribuée par l'utilisateur -> copiez l'ID client -> collez-le dans le champ",
    "Self-Deployed App":
      "Application auto-déployée",
    "Self-Deployed Application":
      "Application auto-déployée",
    "Self-Deployed Authentication":
      "Authentification auto-déployée",
    "Self-Deployed Azure App":
      "Application Azure auto-déployée",
    "Service Principal":
      "Principal du service",
    "storage account connection string":
      "chaîne de connexion du compte de stockage",
    "Store in Cortex":
      "Stocker dans Cortex",
    "Support for MSA users through Microsoft Entra OAuth is still in progress on Microsoft's side. (":
      "La prise en charge des utilisateurs MSA via Microsoft Entra OAuth est toujours en cours de développement côté Microsoft. (",
    "Supports CSV values.":
      "Prend en charge les valeurs CSV.",
    "Tenant ID (for Client Credentials mode)":
      "ID du tenant (pour le mode d'informations d'identification du client)",
    "The mode for fetching credentials. Set to \"External Credentials Vault (on-demand)\" if your security policy does not allow secrets to be stored inside the Cortex credentials store. In this mode, the credentials picker in other integrations lists the configured secrets by name (KEY_VAULT_NAME/SECRET_NAME), but no secret values are pulled from Azure Key Vault. When a playbook or command executes an integration that uses one of those credentials, the secret value is fetched live from Azure Key Vault and is passed in memory only.":
      "Le mode de récupération des identifiants. Définissez-le sur \"External Credentials Vault (on-demand)\" si votre politique de sécurité n'autorise pas le stockage des secrets dans le magasin d'identifiants de Cortex. Dans ce mode, le sélecteur d'identifiants des autres intégrations répertorie les secrets configurés par nom (KEY_VAULT_NAME/SECRET_NAME), mais aucune valeur de secret n'est extraite d'Azure Key Vault. Lorsqu'un playbook ou une commande exécute une intégration qui utilise l'un de ces identifiants, la valeur du secret est récupérée en direct depuis Azure Key Vault et transmise uniquement en mémoire.",
    "There are 2 application authentication methods available:":
      "Deux méthodes d'authentification d'application sont disponibles :",
    "This parameter can be overridden by the resource_group argument in any command.":
      "Ce paramètre peut être remplacé par l'argument resource_group dans n'importe quelle commande.",
    "To allow us access to Azure Compute, an administrator has to approve the Demisto app using an admin consent flow, by clicking":
      "Pour nous autoriser à accéder à Azure Compute, un administrateur doit approuver l'application Demisto via un flux de consentement administrateur, en cliquant sur",
    "To use a self-configured Azure application, add a new Azure App Registration in the Azure Portal. To add the registration, see the":
      "Pour utiliser une application Azure configurée par vos soins, ajoutez une nouvelle inscription d'application Azure dans le portail Azure. Pour ajouter l'inscription, consultez",
    "To use a self-configured Azure application, you need to add a new Azure App Registration in the Azure Portal, with mobile and desktop flows enabled.":
      "Pour utiliser une application Azure configurée par vos soins, vous devez ajouter une nouvelle inscription d'application Azure dans le portail Azure, avec les flux mobile et bureau activés.",
    "To use a self-configured Azure application, you need to add a new Azure App Registration in the Azure Portal. To add the registration, refer to the following":
      "Pour utiliser une application Azure configurée par vos soins, vous devez ajouter une nouvelle inscription d'application Azure dans le portail Azure. Pour ajouter l'inscription, reportez-vous à",
    "To use System Assigned Managed Identity":
      "Pour utiliser l'identité managée attribuée par le système",
    "To use User Assigned Managed Identity":
      "Pour utiliser l'identité managée attribuée par l'utilisateur",
    "Token (received from the admin consent - see Detailed Instructions (?) section)":
      "Jeton (reçu lors du consentement administrateur – voir la section Instructions détaillées (?))",
    "Use a self-deployed Azure Application":
      "Utiliser une application Azure auto-déployée",
    "Use an application identity (not tied to a person). Requires Entra ID admin to grant consent.":
      "Utilisez une identité d'application (non liée à une personne). Nécessite que l'administrateur Entra ID accorde son consentement.",
    "Use Azure Managed Identities":
      "Utiliser les identités managées Azure",
    "use the Client ID - (application_id) (":
      "utilisez le Client ID - (application_id) (",
    "User Authentication":
      "Authentification de l'utilisateur",
    "Worldwide":
      "Monde entier",
  },

  patterns: [
    { re: /^(\d+)\s+Instances? Configured$/, tpl: "$1 instance(s) configurée(s)" },
    { re: /^(\d+\/\d+)\s+connected$/, tpl: "$1 connecté(s)" },
    { re: /^([\d,]+)\s+selected out of\s+([\d,]+)$/, tpl: "$1 sélectionné(s) sur $2" },
    { re: /^(\d+)\s+Warnings,?$/, tpl: "$1 avertissements," },
    { re: /^Found (\d+) deployed connectors\. For all clusters go to$/, tpl: "$1 connecteurs déployés trouvés. Pour afficher tous les clusters, accédez à" },
    { re: /^(\d+)\s+Errors$/, tpl: "$1 erreurs" },
    { re: /^(\d+)\s+result$/, tpl: "$1 résultat" },
    { re: /^\(\s*(\d+)\s+Mapped\s*\)$/, tpl: "( $1 mappés )" },
    { re: /^Integration Author:\s*(.+)$/, tpl: "Auteur de l'intégration : $1" },
  ],

  skip: [],
};
