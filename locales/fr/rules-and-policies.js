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

const dictionaryRulesAndPolicies = {
  exact: {
    "Auto resolve": "Résolution automatique",
    "AI and Machine Learning": "IA et apprentissage automatique",
    "Validate Code": "Valider le code",
    "Cloud Type:": "Type de cloud :",
    "Issues Count:": "Nombre de problèmes :",
    "Findings Count:": "Nombre de constats :",
    "Cases Count:": "Nombre de cas :",
    "Asset Types:": "Types d'actifs :",
    "Mode:": "Mode :",
    "Remove the krbtgt service from the account's msDS-AllowedToDelegateTo attribute immediately. In Active Directory Users and Computers, open the account properties, go to the Delegation tab, and remove any entries referencing the krbtgt service. There is no legitimate reason for an account to have constrained delegation to krbtgt. Investigate whether this configuration was set maliciously as it could indicate a persistence mechanism.":
      "Supprimez immédiatement le service krbtgt de l'attribut msDS-AllowedToDelegateTo du compte. Dans Utilisateurs et ordinateurs Active Directory, ouvrez les propriétés du compte, accédez à l'onglet Délégation et supprimez toutes les entrées faisant référence au service krbtgt. Aucune raison légitime ne justifie qu'un compte dispose d'une délégation contrainte vers krbtgt. Déterminez si cette configuration a été définie de manière malveillante, car elle pourrait indiquer un mécanisme de persistance.",
    "No Compliance Controls Assigned": "Aucun contrôle de conformité attribué",
    "This rule currently has no assigned compliance controls. To assign controls, edit the rule and add the required compliance controls.":
      "Aucun contrôle de conformité n'est actuellement attribué à cette règle. Pour attribuer des contrôles, modifiez la règle et ajoutez les contrôles de conformité requis.",
    "Certain dynamic filter conditions such as asset fields, are calculated at runtime and not displayed as a part of the policy preview.":
      "Certaines conditions de filtre dynamiques, comme les champs d'actif, sont calculées à l'exécution et ne sont pas affichées dans l'aperçu de la politique.",
    "Enter CVE or vulnerability IDs here...": "Saisissez des CVE ou des ID de vulnérabilité ici...",
    "Enter an Asset Group name here...": "Saisissez un nom de groupe d'actifs ici...",
    "Enter an asset name or Asset ID here...": "Saisissez un nom d'actif ou un ID d'actif ici...",
    "Start typing to search...": "Commencez à saisir pour rechercher...",
    "Ignored CVEs and Assets": "CVE et actifs ignorés",
    "Ignored Items": "Éléments ignorés",
    "Ignored Vulnerabilities": "Vulnérabilités ignorées",
    "Ignored Asset Groups": "Groupes d'actifs ignorés",
    "Ignored Assets": "Actifs ignorés",
    "Preview": "Aperçu",
    "Select CVEs, Asset Groups, and Assets to ignore from vulnerability policy evaluation.":
      "Sélectionnez les CVE, groupes d'actifs et actifs à exclure de l'évaluation des politiques de vulnérabilité.",
    "No Issues will be generated for the following CVEs and vulnerabilities. Findings for these CVEs and vulnerabilities will still appear in the Vulnerability Findings view and will still be counted in dashboards based on Findings data.":
      "Aucun problème ne sera généré pour les CVE et vulnérabilités suivantes. Les constats relatifs à ces CVE et vulnérabilités continueront d'apparaître dans la vue Vulnerability Findings et d'être comptabilisés dans les tableaux de bord basés sur les données des constats.",
    "Vulnerability IDs": "ID de vulnérabilité",
    "No Issues will be generated for the following Asset Groups. Findings for these Asset Groups will still appear in the Vulnerability Findings view and will still be counted in dashboards based on Findings data.":
      "Aucun problème ne sera généré pour les groupes d'actifs suivants. Les constats relatifs à ces groupes d'actifs continueront d'apparaître dans la vue Vulnerability Findings et d'être comptabilisés dans les tableaux de bord basés sur les données des constats.",
    "No Issues will be generated for the following Assets. Findings for these Assets will still appear in the Vulnerability Findings view and will still be counted in dashboards based on Findings data.":
      "Aucun problème ne sera généré pour les actifs suivants. Les constats relatifs à ces actifs continueront d'apparaître dans la vue Vulnerability Findings et d'être comptabilisés dans les tableaux de bord basés sur les données des constats.",
    "Vulnerability Policies - Prevention": "Vulnerability Policies - Prévention",
    "Kubernetes Runtime Protection": "Protection de l'exécution Kubernetes",
    "These actions are available for Findings on Kubernetes clusters with Kubernetes Admission Controller activated.":
      "Ces actions sont disponibles pour les constats sur les clusters Kubernetes où Kubernetes Admission Controller est activé.",
    "Learn how to increase coverage.": "Découvrez comment augmenter la couverture.",
    "Kubernetes Pod Actions": "Actions sur les pods Kubernetes",
    "Do nothing": "Ne rien faire",
    "Prevent new deployment requests": "Empêcher les nouvelles demandes de déploiement",
    "Is Malicious": "Est malveillant",
    "Used In Code": "Utilisé dans le code",
    "Used In Deploy": "Utilisé dans le déploiement",
    "Used In Runtime": "Utilisé à l'exécution",
    "Package Subtype": "Sous-type de package",
    "Organization impact": "Impact sur l'organisation",
    "Show alternatives": "Afficher les alternatives",
    "Assets by software development stage": "Actifs par étape du développement logiciel",
    "Image Size": "Taille de l'image",
    "Runtime Function": "Fonction d'exécution",
    "Trust Score": "Score de confiance",
    "Package Symbols": "Symboles du package",
    "Package Author": "Auteur du package",
    "Finding First Observed": "Première observation du constat",
    "Framework/Language": "Framework/langage",
    "Policies Count": "Nombre de politiques",
    "Mapped Cloud Security Rule": "Règle de sécurité cloud mappée",
    "Created Date": "Date de création",
    "Suppressions": "Masquages",
    "Resource Types": "Types de ressources",
    "Is Enabled": "Est activé",
    "Rule Impact": "Impact de la règle",
    "Select Category": "Sélectionner une catégorie",
    "Add Rule Name": "Ajouter un nom de règle",
    "Mapped Runtime Rule": "Règle d'exécution mappée",
    "Add label...": "Ajouter une étiquette...",
    "Select framework": "Sélectionner un framework",
    "Select subcategory": "Sélectionner une sous-catégorie",
    "Set the general details for this rule": "Définissez les informations générales de cette règle",
    "Use Enter to apply a label": "Appuyez sur Entrée pour appliquer une étiquette",
    "Enter a name for this rule": "Saisissez un nom pour cette règle",
    "Give this rule a brief description": "Saisissez une brève description de cette règle",
    "Enter a remediation": "Saisissez une correction",
    "Name is required": "Le nom est obligatoire",
    "Description is required": "La description est obligatoire",
    "Define the logic for your rule": "Définissez la logique de votre règle",
    "Back": "Retour",
    "Generate Previerw": "Générer l'aperçu",
    "No Preview": "Aucun aperçu",
    "To see potential matches, enter your query and click \"Generate Preview\".":
      "Pour voir les correspondances potentielles, saisissez votre requête et cliquez sur \"Generate Preview\".",
    "Create Issue": "Créer un problème",
    "Generate Preview": "Générer l'aperçu",
    "Rule name is required": "Le nom de la règle est obligatoire",
    "Give this Rule a brief description...": "Saisissez une brève description de cette règle...",
    "Select issue severity": "Sélectionner la gravité du problème",
    "Enable Remediation": "Activer la correction",
    "(Optional)": "(Facultatif)",
    "Assign a Configuration Rule To Custom Compliance Controls": "Attribuer une règle de configuration à des contrôles de conformité personnalisés",
    "You can assign a configuration rule to one or more custom compliance controls to tailor compliance checks to your organization's needs.":
      "Vous pouvez attribuer une règle de configuration à un ou plusieurs contrôles de conformité personnalisés afin d'adapter les vérifications de conformité aux besoins de votre organisation.",
    "Add actions to take once a rule has been violated.": "Ajoutez les actions à exécuter en cas de violation d'une règle.",
    "Compliance Controls (": "Contrôles de conformité (",
    "Be Advised": "Attention",
    "Switching modes will remove any unsaved edits. Continue?": "Le changement de mode supprimera toutes les modifications non enregistrées. Continuer ?",
    "Rule Logic": "Logique de la règle",
    "Define logic for your rule": "Définir la logique de votre règle",
    "Define the logic for your rule.": "Définissez la logique de votre règle.",
    "Simple Mode": "Mode simple",
    "Advanced Mode": "Mode avancé",
    "instructions": "instructions",
    "Define your rule's query. Be sure to follow the": "Définissez la requête de votre règle. Veillez à suivre les",
    "Run query to populate values": "Exécutez la requête pour renseigner les valeurs",
    "Query validation failed.": "Échec de la validation de la requête.",
    "Query validated successfully.": "Requête validée avec succès.",
    "Affected Asset Type:": "Type d'actif affecté :",
    "The rule must end with a 'fields' stage.": "La règle doit se terminer par une étape 'fields'.",
    "Add details for this Config Rule": "Ajouter les détails de cette Config Rule",
    "Add details for this Data Rule": "Ajouter les détails de cette Data Rule",
    "Create Data Rule": "Créer une Data Rule",
    "Add details for this Identity Rule": "Ajouter les détails de cette Identity Rule",
    "Create Identity Rule": "Créer une Identity Rule",
    "Create Network Exposure Rule": "Créer une Network Exposure Rule",
    "Add details for this Network Exposure Rule": "Ajouter les détails de cette Network Exposure Rule",
    "Add details for this AI Rule": "Ajouter les détails de cette AI Rule",
    "Create AI Rule": "Créer une AI Rule",
    "Create Attack Path (Legacy) Rule": "Créer une Attack Path (Legacy) Rule",
    "Add details for this Attack Path (Legacy) Rule": "Ajouter les détails de cette Attack Path (Legacy) Rule",
    "Enter a name for this Rule...": "Saisissez un nom pour cette règle...",
    "Base Images Rules": "Règles d'images de base",
    "Create rules to automatically identify your base images": "Créez des règles pour identifier automatiquement vos images de base",
    "Match Count": "Nombre de correspondances",
    "No base image rules yet": "Aucune règle d'image de base pour le moment",
    "Create Base Image Rule": "Créer une règle d'image de base",
    "Edit Base Image Rule": "Modifier la règle d'image de base",
    // Verbatim from the product ("Operation system" — likely a typo for "Operating system" — kept as-is
    // to match the real DOM text).
    "Operation system": "Système d'exploitation",
    "Define actions for when this rule is violated": "Définissez les actions à exécuter en cas de violation de cette règle",
    "Disable Rule": "Désactiver la règle",
    "Disabling rule will resolve the open issues matching the rule.":
      "La désactivation de la règle résoudra les problèmes ouverts correspondant à cette règle.",
    "Delete Rule": "Supprimer la règle",
    "The selected rule will be deleted. However, any issues previously generated by these rules will remain open until resolved.":
      "La règle sélectionnée sera supprimée. Toutefois, les problèmes précédemment générés par ces règles resteront ouverts jusqu'à leur résolution.",
    "Run preview": "Exécuter l'aperçu",
    "Preview your results": "Prévisualiser vos résultats",
    "Generate preview to see matches": "Générez un aperçu pour voir les correspondances",
    "This rule will automatically apply to all current and future matches": "Cette règle s'appliquera automatiquement à toutes les correspondances actuelles et futures",
    "Enter registry": "Saisissez le registre",
    "Registry is required": "Le registre est obligatoire",
    "Enter repository": "Saisissez le dépôt",
    "Repository is required": "Le dépôt est obligatoire",
    "Delete Rule?": "Supprimer la règle ?",
    "The selected rule will be deleted. Are you sure you want to proceed?": "La règle sélectionnée sera supprimée. Voulez-vous vraiment continuer ?",
    "Based on your query results, the suggested asset-identifying fields appear here. Generated issues will be linked to asset identified by the selected field":
      "Les champs d'identification d'actif suggérés d'après les résultats de votre requête apparaissent ici. Les problèmes générés seront liés à l'actif identifié par le champ sélectionné",
    "The final 'fields' stage is missing the required 'asset_id' (or 'xdm.asset.id') field.":
      "L'étape finale 'fields' ne contient pas le champ obligatoire 'asset_id' (ou 'xdm.asset.id').",
    "The final 'fields' stage is missing the required 'asset_type_id' (or 'xdm.asset.type.id') field.":
      "L'étape finale 'fields' ne contient pas le champ obligatoire 'asset_type_id' (ou 'xdm.asset.type.id').",
    "Filter stage with xdm.asset.type.id is required": "Une étape filter avec xdm.asset.type.id est obligatoire",
    "Last evaluated": "Dernière évaluation",
    "Detection Rules IDs": "ID des règles de détection",
    "Action Taken On Missing Information": "Action exécutée en cas d'informations manquantes",
    "Policy name is required.": "Le nom de la politique est obligatoire.",
    "Add Policy name": "Ajouter un nom de politique",
    "This policy name already exists.": "Ce nom de politique existe déjà.",
    "No rules selected yet": "Aucune règle sélectionnée pour le moment",
    "Add rules": "Ajouter des règles",
    "Rule Remediation": "Correction de la règle",
    "User Rule Remediation": "Correction de la règle utilisateur",
    "Add rules to policy": "Ajouter des règles à la politique",
    "Learn about the Prevent action's power, behavior, and prerequisites": "Découvrez la puissance, le comportement et les prérequis de l'action Prevent",
    "Applicable assets": "Actifs concernés",
    "Available actions": "Actions disponibles",
    "Scope Selection Method": "Méthode de sélection de la portée",
    "Default Asset Scopes": "Portées d'actifs par défaut",
    "Assets Scope": "Portée des actifs",
    "All Cloud Workload Hosts (VM Instances)": "Tous les hôtes de charges de travail cloud (instances de VM)",
    "Open Asset Inventory": "Ouvrir l'inventaire des actifs",
    "Asset types not listed above will not be evaluated.": "Les types d'actifs non répertoriés ci-dessus ne seront pas évalués.",
    "This selection applies the policy and its detection rules to": "Cette sélection applique la politique et ses règles de détection aux",
    "asset types available at": "types d'actifs disponibles à l'étape",
    "SDLC Stage.": "du SDLC.",
    "When Asset Groups are selected, this policy applies only to": "Lorsque des groupes d'actifs sont sélectionnés, cette politique s'applique uniquement aux",
    "Cloud Workload Container Images, Container Instances, Hosts (VM Instances), Serverless Functions or Kubernetes Workloads":
      "images de conteneur, instances de conteneur, hôtes (instances de VM), fonctions serverless ou charges de travail Kubernetes des charges de travail cloud",
    "asset types in those groups that are available at the": "types d'actifs de ces groupes disponibles à l'étape",
    "Other asset types in the Asset Groups are not evaluated.": "Les autres types d'actifs des groupes d'actifs ne sont pas évalués.",
    "Select an Action": "Sélectionner une action",
    "Issue Severity": "Gravité du problème",
    "Add remediation guidance": "Ajouter des recommandations de correction",
    "Issues are automatically resolved when the finding is no longer applicable to the asset or when the affected asset is removed from the inventory.":
      "Les problèmes sont résolus automatiquement lorsque le constat ne s'applique plus à l'actif ou lorsque l'actif affecté est retiré de l'inventaire.",
    "Preview Selection": "Prévisualiser la sélection",
    "Selected Asset Preview": "Aperçu des actifs sélectionnés",
    "Add labels...": "Ajouter des étiquettes...",
    "Maximum of 50 labels": "50 étiquettes maximum",
    "Start Timestamp": "Horodatage de début",
    "End Timestamp": "Horodatage de fin",
    "Last Modified By": "Dernière modification par",
    "Findings Count": "Nombre de constats",
    "Issues Count": "Nombre de problèmes",
    "Cases Count": "Nombre de cas",
    "Compliance Standards": "Normes de conformité",
    "Last Execution Time": "Heure de la dernière exécution",
    "SaaS Pillar": "Pilier SaaS",
    "All Matching Filter Criteria": "Tous les éléments correspondant aux critères de filtre",
    "From Rules List": "À partir de la liste des règles",
    "Select rules for this Policy": "Sélectionner les règles de cette politique",
    "Select which rules to be alerted on by using the options available below": "Sélectionnez les règles devant générer des alertes à l'aide des options ci-dessous",
    "Add details for this Policy": "Ajouter les détails de cette politique",
    "View selected": "Afficher la sélection",
    "Making this selection will likely create a large volume of issues. For a more relevant and high fidelity issues, use a filtered selection.":
      "Cette sélection risque de générer un grand volume de problèmes. Pour obtenir des problèmes plus pertinents et plus fiables, utilisez une sélection filtrée.",
    "Select which scope to be alerted on by using the options available below": "Sélectionnez la portée devant générer des alertes à l'aide des options ci-dessous",
    "From Asset Groups": "À partir des groupes d'actifs",
    "Create a Policy for Issue creation": "Créer une politique de création de problèmes",
    "Create a Policy for Prevention": "Créer une politique de prévention",
    "From Cloud Accounts": "À partir des comptes cloud",
    "Define the detection rule by specifying the criteria to match relevant Malware findings. You can also add exclusion criteria to filter out any Malware findings that meet specific conditions you want to exclude from this policy.":
      "Définissez la règle de détection en spécifiant les critères correspondant aux constats de logiciels malveillants pertinents. Vous pouvez également ajouter des critères d'exclusion pour écarter les constats de logiciels malveillants répondant à des conditions spécifiques que vous souhaitez exclure de cette politique.",
    "Set a name and description for the policy.": "Définissez un nom et une description pour la politique.",
    "Enter a name for your policy": "Saisissez un nom pour votre politique",
    "Enter a description": "Saisissez une description",
    "CVE Publish Date": "Date de publication CVE",
    "CVE Description": "Description de la CVE",
    "Package PURL": "PURL du package",
    "Package File Creation Time": "Date de création du fichier du package",
    "Package Licenses": "Licences du package",
    "Layer ID": "ID de la couche",
    "Image": "Image",
    "Is derived": "Est dérivé",
    "Image Name": "Nom de l'image",
    "Volume Asset IDs": "ID des actifs de volume",
    "Volume Path": "Chemin du volume",
    "Platform ID": "ID de la plateforme",
    "Vulnerability Source Asset ID": "ID de l'actif source de la vulnérabilité",
    "Vulnerability Source Asset": "Actif source de la vulnérabilité",
    "Kubernetes Cluster Name": "Nom du cluster Kubernetes",
    "Kubernetes Namespace Name": "Nom de l'espace de noms Kubernetes",
    "AST Intrusion Level": "Niveau d'intrusion AST",
    "Affected Services": "Services affectés",
    "Affected Service Versions": "Versions des services affectés",
    "Authentication Status": "Statut d'authentification",
    "AST Vulnerability Status": "Statut de la vulnérabilité AST",
    "Create a query to select the Findings to take an action on": "Créez une requête pour sélectionner les constats sur lesquels agir",
    "Create a query to select the Findings to take an action on.": "Créez une requête pour sélectionner les constats sur lesquels agir.",
    "Limit the assets the policy applies to by setting a scope.": "Limitez les actifs auxquels la politique s'applique en définissant une portée.",
    "Scope to Asset Groups": "Limiter la portée à des groupes d'actifs",
    "Choose one or more Asset Groups if you want to limit this Policy to Findings from those specific Assets.":
      "Choisissez un ou plusieurs groupes d'actifs si vous souhaitez limiter cette politique aux constats de ces actifs spécifiques.",
    "Create new Asset Group": "Créer un nouveau groupe d'actifs",
    "The selected actions will be executed automatically when a finding matches a policy.": "Les actions sélectionnées seront exécutées automatiquement lorsqu'un constat correspond à une politique.",
    "Global Actions": "Actions globales",
    "These actions are available for all Findings.": "Ces actions sont disponibles pour tous les constats.",
    "Set Issue Severity": "Définir la gravité du problème",
    "Create an Issue for each matching Finding.": "Créer un problème pour chaque constat correspondant.",
    "Ignore matching Findings, do not create Issues": "Ignorer les constats correspondants, ne pas créer de problèmes",
    "Use Default CVE Severity": "Utiliser la gravité CVE par défaut",
    "Last Triggered": "Dernier déclenchement",
    "Related Detection Rules": "Règles de détection associées",
    "Is Custom": "Est personnalisé",
    "Asset Group IDs": "ID des groupes d'actifs",
    "Override Issue Severity": "Remplacer la gravité du problème",
    "Is Editable": "Est modifiable",
    "Is Cloneable": "Est clonable",
    "Suggestion ID": "ID de la suggestion",
    "Triggers & Actions": "Déclencheurs et actions",
    "Application Security policies define how to respond to code, image, and misconfiguration findings. You can either block the risk (prevent) or create an issue for remediation (detect). Use them to enforce consistent, automated responses to risks before they reach production":
      "Les politiques Application Security définissent la manière de répondre aux constats liés au code, aux images et aux mauvaises configurations. Vous pouvez soit bloquer le risque (prévention), soit créer un problème pour sa correction (détection). Utilisez-les pour appliquer des réponses cohérentes et automatisées aux risques avant qu'ils n'atteignent la production",
    "Code & Image scanners": "Scanners de code et d'images",
    "Scans your code and images for security issues throughout the development lifecycle.":
      "Analyse votre code et vos images pour détecter les problèmes de sécurité tout au long du cycle de développement.",
    "CI/CD configuration scanner": "Scanner de configuration CI/CD",
    "Scans your CI/CD and Version Control System (VCS) environments for insecure configurations.":
      "Analyse vos environnements CI/CD et de système de contrôle de version (VCS) pour détecter les configurations non sécurisées.",
    "Drift detection scanner": "Scanner de détection des dérives",
    "Specify the conditions define this policy. When you select multiple finding types, only common filters are available. To apply specific filters for each finding type, use the \"OR\" operator to create separate conditions groups.":
      "Spécifiez les conditions qui définissent cette politique. Lorsque vous sélectionnez plusieurs types de constats, seuls les filtres communs sont disponibles. Pour appliquer des filtres spécifiques à chaque type de constat, utilisez l'opérateur \"OR\" afin de créer des groupes de conditions distincts.",
    "Finding Type": "Type de constat",
    "Add filter": "Ajouter un filtre",
    "Add condition group": "Ajouter un groupe de conditions",
    "Shared": "Partagé",
    "Shared filters": "Filtres partagés",
    "Finding Category": "Catégorie de constat",
    "The category of detected security findings. A category can include multiple finding types.":
      "Catégorie des constats de sécurité détectés. Une catégorie peut inclure plusieurs types de constats.",
    "Code filters": "Filtres de code",
    "Indicates whether a finding is part of the security technical debt or newly introduced. Backlog: Findings that existed before the Cortex scanner was first enabled or before a third-party scanner was first ingested for the repository. New: Findings detected afterward.":
      "Indique si un constat fait partie de la dette technique de sécurité ou s'il est nouvellement introduit. Backlog : constats existant avant la première activation du scanner Cortex ou avant la première ingestion d'un scanner tiers pour le dépôt. New : constats détectés par la suite.",
    "Filters findings by their assigned risk impact level to (e.g., Critical, High, Medium, or Low).":
      "Filtre les constats selon le niveau d'impact de risque qui leur est attribué (par exemple, Critique, Élevée, Moyenne ou Faible).",
    "Respect Developer Suppression": "Respecter le masquage par les développeurs",
    "AppSec Rule": "Règle AppSec",
    "AppSec Rule Label": "Étiquette de règle AppSec",
    "AppSec Rule Category": "Catégorie de règle AppSec",
    "Has An Automated Fix": "Correctif automatisé disponible",
    "Iac Tag": "Balise IaC",
    "Compliance Controls": "Contrôles de conformité",
    "Specific security controls related to the finding within a compliance standard (e.g., \"Encryption at Rest\"":
      "Contrôles de sécurité spécifiques liés au constat dans une norme de conformité (par exemple, \"Encryption at Rest\"",
    "Filters findings based on specific regulatory frameworks like PCI-DSS, SOC2, or HIPAA.":
      "Filtre les constats selon des cadres réglementaires spécifiques tels que PCI-DSS, SOC2 ou HIPAA.",
    "Filters Infrastructure-as-Code (IaC) resources based on metadata tags (e.g., Environment: Production, Owner: DevOps).":
      "Filtre les ressources Infrastructure-as-Code (IaC) selon des balises de métadonnées (par exemple, Environment: Production, Owner: DevOps).",
    "Identifies findings that can be resolved automatically via a generated Pull Request or an automated patch.":
      "Identifie les constats pouvant être résolus automatiquement via une pull request générée ou un correctif automatisé.",
    "Secret Validity": "Validité du secret",
    "Filters based on whether the detected secret is still active and usable by an attacker (e.g., Valid, Invalid, No Validation, or Unavailable).":
      "Filtre selon que le secret détecté est toujours actif et utilisable par un attaquant (par exemple, Valid, Invalid, No Validation ou Unavailable).",
    "Repository File Path": "Chemin du fichier dans le dépôt",
    "Filters based on the specific location of a file within your source code repository.":
      "Filtre selon l'emplacement précis d'un fichier dans votre dépôt de code source.",
    "Image filters": "Filtres d'image",
    "Secret Type": "Type de secret",
    "Filters findings by the category of the exposed secret or the service it belongs to (e.g., AWS Access Key, Stripe API Token, SSH Private Key, or Password).":
      "Filtre les constats selon la catégorie du secret exposé ou le service auquel il appartient (par exemple, AWS Access Key, Stripe API Token, SSH Private Key ou Password).",
    "Targets specific files or directories located within a container image filesystem.":
      "Cible des fichiers ou répertoires spécifiques situés dans le système de fichiers d'une image de conteneur.",
    "Filters by the specific name of a file discovered in a scan (e.g., id_rsa, passwd, or config.yaml).":
      "Filtre selon le nom précis d'un fichier découvert lors d'une analyse (par exemple, id_rsa, passwd ou config.yaml).",
    "File Size": "Taille du fichier",
    "Filters based on the total data size of the file (e.g., files larger than 100MB or exactly 0KB).":
      "Filtre selon la taille totale des données du fichier (par exemple, fichiers de plus de 100 Mo ou d'exactement 0 Ko).",
    "File Line": "Ligne du fichier",
    "Identifies the specific line number within a file where the finding was detected (e.g., line 42).":
      "Identifie le numéro de ligne précis du fichier où le constat a été détecté (par exemple, ligne 42).",
    "File Owner Name": "Nom du propriétaire du fichier",
    "Filters by the username of the account that owns the file on the system (e.g., root, admin, or www-data).":
      "Filtre selon le nom d'utilisateur du compte propriétaire du fichier sur le système (par exemple, root, admin ou www-data).",
    "File Group Name": "Nom du groupe du fichier",
    "Filters by the name of the primary group assigned to the file (e.g., sudo, docker, or users).":
      "Filtre selon le nom du groupe principal attribué au fichier (par exemple, sudo, docker ou users).",
    "File Group ID": "ID du groupe du fichier",
    "Filters by the numeric Group ID (GID) assigned to the file (e.g., GID 1001).":
      "Filtre selon l'ID de groupe numérique (GID) attribué au fichier (par exemple, GID 1001).",
    "File Permissions - owner": "Autorisations du fichier - propriétaire",
    "Filters by the specific access rights granted to the file's owner (e.g., rwx, rw, or r).":
      "Filtre selon les droits d'accès spécifiques accordés au propriétaire du fichier (par exemple, rwx, rw ou r).",
    "File Permissions - group": "Autorisations du fichier - groupe",
    "Filters by the access rights granted to members of the file's assigned group (e.g., r, rw or rwx).":
      "Filtre selon les droits d'accès accordés aux membres du groupe attribué au fichier (par exemple, r, rw ou rwx).",
    "File Permissions - others": "Autorisations du fichier - autres",
    "Filters by \"World\" permissions—access granted to any user on the system (e.g., checking for rw to find publicly writable files).":
      "Filtre selon les autorisations \"World\", c'est-à-dire l'accès accordé à tout utilisateur du système (par exemple, vérifier rw pour trouver les fichiers accessibles en écriture publiquement).",
    "File Owner ID": "ID du propriétaire du fichier",
    "Filters by the numeric User ID (UID) of the file owner (e.g., UID 0 for root).":
      "Filtre selon l'identifiant utilisateur numérique (UID) du propriétaire du fichier (p. ex. UID 0 pour root).",
    "Filters for vulnerabilities with known, documented exploits available in the wild (e.g., CISA KEV list).":
      "Filtre les vulnérabilités pour lesquelles des exploits connus et documentés circulent dans la nature (p. ex. liste CISA KEV).",
    "CVE ID": "CVE ID",
    "Filters by the unique Common Vulnerabilities and Exposures identifier associated with the finding (e.g., CVE-2021-44228).":
      "Filtre selon l'identifiant Common Vulnerabilities and Exposures unique associé au constat (p. ex. CVE-2021-44228).",
    "Filters by the Common Vulnerability Scoring System impact level, often derived from a numerical score (e.g., Critical, High, Medium, or Low).":
      "Filtre selon le niveau d'impact Common Vulnerability Scoring System, souvent dérivé d'un score numérique (p. ex. Critical, High, Medium ou Low).",
    "Filters findings based on their numerical CVSS score, typically ranging from 0.0 to 10.0 (e.g., values greater than or equal to 7.5).":
      "Filtre les constats selon leur score CVSS numérique, généralement compris entre 0.0 et 10.0 (p. ex. valeurs supérieures ou égales à 7.5).",
    "Filters based on the Exploit Prediction Scoring System probability score, which estimates the likelihood of a vulnerability being exploited in the next 30 days (e.g., scores higher than 0.1).":
      "Filtre selon le score de probabilité Exploit Prediction Scoring System, qui estime la probabilité qu'une vulnérabilité soit exploitée dans les 30 prochains jours (p. ex. scores supérieurs à 0.1).",
    "Has A Fix": "Correctif disponible",
    "Filter findings with a documented resolution or patch available.": "Filtrez les constats pour lesquels une résolution ou un correctif documenté est disponible.",
    "Is Kev": "Est KEV",
    "Filters for vulnerabilities listed in the CISA Known Exploited Vulnerabilities catalog, which are confirmed to be actively exploited in the wild.":
      "Filtre les vulnérabilités répertoriées dans le catalogue CISA Known Exploited Vulnerabilities, dont l'exploitation active dans la nature est confirmée.",
    "CVE Fix Available Date": "Date de disponibilité du correctif CVE",
    "Filters based on the date a fix or patch was first released for the vulnerability (e.g., fixes released within the last 30 days).":
      "Filtre selon la date de première publication d'un correctif ou d'un patch pour la vulnérabilité (p. ex. correctifs publiés au cours des 30 derniers jours).",
    "Package Version": "Version du package",
    "Targets specific versions or ranges of a software package (e.g., 1.2.3 or <2.0.0).":
      "Cible des versions ou des plages de versions spécifiques d'un package logiciel (p. ex. 1.2.3 ou <2.0.0).",
    "Filters by the name of the specific library or software component (e.g., openssl, lodash, or log4j-core).":
      "Filtre selon le nom de la bibliothèque ou du composant logiciel (p. ex. openssl, lodash ou log4j-core).",
    "Filters based on the date the vulnerability was officially added to the CVE registry.":
      "Filtre selon la date à laquelle la vulnérabilité a été officiellement ajoutée au registre CVE.",
    "Targets specific characteristics of a vulnerability's impact or ease of use (e.g., Remote Execution, DoS - High, or Attack Complexity: Low).":
      "Cible des caractéristiques spécifiques de l'impact d'une vulnérabilité ou de sa facilité d'exploitation (p. ex. Remote Execution, DoS - High ou Attack Complexity: Low).",
    "Filters findings by searching for specific keywords or technical details within the official vulnerability summary (e.g., searching for \"buffer overflow,\" \"zero-day,\" or \"unauthenticated access\").":
      "Filtre les constats en recherchant des mots-clés ou des détails techniques spécifiques dans le résumé officiel de la vulnérabilité (p. ex. en recherchant \"buffer overflow\", \"zero-day\" ou \"unauthenticated access\").",
    "Identifies the specific version(s) of a package or software where the vulnerability has been patched (e.g., 1.2.4, 2.0.1).":
      "Identifie la ou les versions spécifiques d'un package ou d'un logiciel dans lesquelles la vulnérabilité a été corrigée (p. ex. 1.2.4, 2.0.1).",
    "Grace Period": "Délai de grâce",
    "The number of days a finding is allowed to exist before it begins blocking PRs or builds. This is calculated from the Fix Date (for fixable issues) or the Publish Date (if no fix is available).":
      "Nombre de jours pendant lesquels un constat peut exister avant de commencer à bloquer les PR ou les builds. Ce délai est calculé à partir de la date du correctif (pour les problèmes corrigibles) ou de la date de publication (si aucun correctif n'est disponible).",
    "Package Popularity": "Popularité du package",
    "Identifies packages based on their adoption metrics (e.g., GitHub stars, download counts). Low popularity can often signal higher supply chain risk.":
      "Identifie les packages selon leurs indicateurs d'adoption (p. ex. étoiles GitHub, nombre de téléchargements). Une faible popularité peut souvent signaler un risque plus élevé pour la chaîne d'approvisionnement.",
    "Package Deprecated": "Package obsolète",
    "Filters for packages that have been officially marked as \"deprecated\" or \"end-of-life\" by their maintainers":
      "Filtre les packages officiellement marqués comme \"deprecated\" (obsolètes) ou \"end-of-life\" (fin de vie) par leurs mainteneurs",
    "Package Maintained": "Package maintenu",
    "Filters based on the activity level of the package's repository, such as the frequency of recent commits or bug fixes":
      "Filtre selon le niveau d'activité du dépôt du package, comme la fréquence des commits ou des corrections de bugs récents",
    "Evaluates the long-term viability of a package based on community health, update frequency, and maintenance history":
      "Évalue la viabilité à long terme d'un package selon la santé de sa communauté, la fréquence de ses mises à jour et son historique de maintenance",
    "Package Dependency": "Dépendance du package",
    "Allows you to filter by the specific relationship of a package—whether it is a direct dependency or a transitive (indirect) one":
      "Permet de filtrer selon la relation spécifique d'un package, qu'il s'agisse d'une dépendance directe ou transitive (indirecte)",
    "Is AI/ML": "Est IA/ML",
    "Identifies libraries and frameworks specifically associated with Artificial Intelligence and Machine Learning (e.g., PyTorch, TensorFlow).":
      "Identifie les bibliothèques et frameworks spécifiquement liés à l'intelligence artificielle et au machine learning (p. ex. PyTorch, TensorFlow).",
    "Affected Software": "Logiciel affecté",
    "Filters findings based on the specific software components, applications, or libraries impacted by a vulnerability (e.g., OpenSSL)":
      "Filtre les constats selon les composants logiciels, applications ou bibliothèques spécifiques affectés par une vulnérabilité (p. ex. OpenSSL)",
    "A boolean (True/False) indicator that identifies whether a vulnerability was inherited from the base image or introduced by the application layers (e.g., True means the flaw exists in the parent image, such as node:alpine or ubuntu:latest).":
      "Indicateur booléen (True/False) qui détermine si une vulnérabilité a été héritée de l'image de base ou introduite par les couches applicatives (p. ex. True signifie que la faille existe dans l'image parente, comme node:alpine ou ubuntu:latest).",
    "Filters findings based on the specific filesystem layer of a container image, identified by its unique SHA-256 hash.":
      "Filtre les constats selon la couche spécifique du système de fichiers d'une image de conteneur, identifiée par son hachage SHA-256 unique.",
    "The broad name of the OS (e.g., Linux, Windows).": "Nom générique de l'OS (p. ex. Linux, Windows).",
    "The specific flavor of the OS (e.g., Ubuntu, RedHat, Debian).": "Variante spécifique de l'OS (p. ex. Ubuntu, RedHat, Debian).",
    "The specific version or \"point release\" of the distribution (e.g., 22.04 or 8.5).":
      "Version spécifique ou \"point release\" de la distribution (p. ex. 22.04 ou 8.5).",
    "Filters based on when the package file was first generated or built.": "Filtre selon la date à laquelle le fichier du package a été généré ou compilé pour la première fois.",
    "Groups OS versions by their common ancestry (e.g., Debian-based, RHEL-based).":
      "Regroupe les versions d'OS selon leur ascendance commune (p. ex. basées sur Debian, basées sur RHEL).",
    "Filters by the specific legal license assigned to a package (e.g., MIT, Apache 2.0).":
      "Filtre selon la licence juridique spécifique attribuée à un package (p. ex. MIT, Apache 2.0).",
    "Filters by the Package URL (PURL), a standardized way to identify packages across different ecosystems (e.g., pkg:npm/lodash@4.17.21).":
      "Filtre selon la Package URL (PURL), une méthode standardisée d'identification des packages dans différents écosystèmes (p. ex. pkg:npm/lodash@4.17.21).",
    "The ecosystem the package belongs to (e.g., npm, PyPI, Maven, Go, or OS-level packages).":
      "Écosystème auquel appartient le package (p. ex. npm, PyPI, Maven, Go ou packages de niveau OS).",
    "Filters by the specific underlying hardware or cloud architecture (e.g., x86_64, arm64).":
      "Filtre selon l'architecture matérielle ou cloud sous-jacente (p. ex. x86_64, arm64).",
    "Image Provider": "Fournisseur d'images",
    "Identifies the source or registry where the package was retrieved (e.g., Docker Hub, JFrog Artifactory, or AWS ECR).":
      "Identifie la source ou le registre d'où provient le package (p. ex. Docker Hub, JFrog Artifactory ou AWS ECR).",
    "Filters by the action required to resolve a vulnerability": "Filtre selon l'action requise pour résoudre une vulnérabilité",
    "Filters by the unique identifier for a specific category of finding (finding type id)":
      "Filtre selon l'identifiant unique d'une catégorie spécifique de constat (finding type id)",
    "License Type": "Type de licence",
    "Filters by the specific name of the legal license assigned to a package (e.g., MPL-2.0, MS-RL, or Sendmail-8.23).":
      "Filtre selon le nom spécifique de la licence juridique attribuée à un package (p. ex. MPL-2.0, MS-RL ou Sendmail-8.23).",
    "License Category": "Catégorie de licence",
    "Groups packages by their legal risk or permission category (e.g., Non permissive, Strong copyleft, Weak copyleft).":
      "Regroupe les packages selon leur catégorie de risque juridique ou d'autorisation (p. ex. Non permissive, Strong copyleft, Weak copyleft).",
    "Maintained": "Maintenu",
    "Popularity": "Popularité",
    "Filters by the specific Common Weakness Enumeration identifier assigned to a software flaw (e.g., CWE-79 for Cross-Site Scripting or CWE-89 for SQL Injection).":
      "Filtre selon l'identifiant Common Weakness Enumeration spécifique attribué à une faille logicielle (p. ex. CWE-79 pour le Cross-Site Scripting ou CWE-89 pour l'injection SQL).",
    "Language": "Langue",
    "Filters findings based on the programming language of the source code where the issue was detected (e.g., Java, Python, Go, or JavaScript).":
      "Filtre les constats selon le langage de programmation du code source dans lequel le problème a été détecté (p. ex. Java, Python, Go ou JavaScript).",
    "OWASP Category": "Catégorie OWASP",
    "Maps findings to the \"Top 10\" web application security risks defined by the Open Web Application Security Project (e.g., A01:2021-Broken Access Control).":
      "Associe les constats aux risques de sécurité des applications web du \"Top 10\" définis par l'Open Web Application Security Project (p. ex. A01:2021-Broken Access Control).",
    "Identifies the origin of the data or the specific tool that reported the finding (e.g., semgrep, checkmarx or other specific third-party security integration).":
      "Identifie l'origine des données ou l'outil spécifique qui a signalé le constat (p. ex. semgrep, checkmarx ou une autre intégration de sécurité tierce).",
    "Filters findings based on the specific scanning engine or technique used to identify them":
      "Filtre les constats selon le moteur ou la technique d'analyse utilisés pour les identifier",
    "File SHA256": "SHA256 du fichier",
    "Create asset groups": "Créer des groupes d'actifs",
    "Build images do not support application-related filters.": "Les images de build ne prennent pas en charge les filtres liés aux applications.",
    "Select either a predefined asset group or apply dynamic filters to target relevant assets. If no selection is made, all assets within your granted scope are included. The policy scope is determined by your SBAC permissions at the time the policy is saved (creation or update). Changes to your SBAC do not automatically modify existing policies.":
      "Sélectionnez un groupe d'actifs prédéfini ou appliquez des filtres dynamiques pour cibler les actifs pertinents. Si aucune sélection n'est effectuée, tous les actifs de la portée qui vous est accordée sont inclus. La portée de la politique est déterminée par vos autorisations SBAC au moment où la politique est enregistrée (création ou mise à jour). Les modifications apportées à vos SBAC ne modifient pas automatiquement les politiques existantes.",
    "Application Business Criticality": "Criticité métier de l'application",
    "Application Business Owner": "Responsable métier de l'application",
    "Image Names": "Noms des images",
    "Source Branch": "Branche source",
    "Repository Id": "ID du dépôt",
    "Is Public Repository": "Est un dépôt public",
    "Has Deployed Assets": "Possède des actifs déployés",
    "Has Internet-exposed deployed assets": "Possède des actifs déployés exposés à Internet",
    "Has deployed assets with Access to sensitive data": "Possède des actifs déployés ayant accès à des données sensibles",
    "Has deployed assets with privileged capabilities": "Possède des actifs déployés dotés de capacités privilégiées",
    "Image Architecture": "Architecture de l'image",
    "Organization URL": "URL de l'organisation",
    "Automated security scanning that runs every 12 hours or on manual request, according to the repository scan configuration.":
      "Analyse de sécurité automatisée exécutée toutes les 12 heures ou sur demande manuelle, selon la configuration d'analyse du dépôt.",
    "Block CI": "Bloquer la CI",
    "Block PR": "Bloquer la PR",
    "PR Comment": "Commentaire de PR",
    "Registry Image Scan": "Analyse des images de registre",
    "Report CI": "Signaler dans la CI",
    "Security scanning of container images in the registry.": "Analyse de sécurité des images de conteneur dans le registre.",
    "Security scans triggered during the CI pipeline after a container image is built from code.":
      "Analyses de sécurité déclenchées pendant le pipeline CI après la compilation d'une image de conteneur à partir du code.",
    "Security scans triggered during the CI pipeline to evaluate source code.":
      "Analyses de sécurité déclenchées pendant le pipeline CI pour évaluer le code source.",
    "Security scans triggered when a pull request or merge request is created or updated in your version control system.":
      "Analyses de sécurité déclenchées lorsqu'une pull request ou une merge request est créée ou mise à jour dans votre système de gestion de versions.",
    "Select the triggers that enforce this policy. For each trigger, select at least one action to take when the conditions and scope are met.":
      "Sélectionnez les déclencheurs qui appliquent cette politique. Pour chaque déclencheur, sélectionnez au moins une action à effectuer lorsque les conditions et la portée sont remplies.",
    "Your policy is ready. Review the details and click Done to enable it.": "Votre politique est prête. Vérifiez les détails et cliquez sur Terminé pour l'activer.",
    "Application Security Policy": "Politique Application Security",
    "Code & Image Scanner policy": "Politique Code & Image Scanner",
    "Important": "Important",
    "Override severity": "Remplacer la gravité",
    "Keep finding's severity": "Conserver la gravité du constat",
    "every 12 hours": "toutes les 12 heures",
    "Based on your coverage and findings, we recommend the following prevention policies. You can apply them as suggested, review and edit them using View details, or dismiss a recommendation. If dismissed, a new recommendation may appear.":
      "En fonction de votre couverture et de vos constats, nous vous recommandons les politiques de prévention suivantes. Vous pouvez les appliquer telles que suggérées, les vérifier et les modifier via Afficher les détails, ou ignorer une recommandation. Si vous l'ignorez, une nouvelle recommandation peut apparaître.",
    "Dismiss": "Ignorer",
    "View Assets >": "Afficher les actifs >",
    // The body text AND title of each recommendation card (previously registered here — titles like
    // "Block KEV vulnerabilities", and the body as fixed exact-match/pattern entries) have been removed
    // from this dictionary file: content.js now excludes both
    // cas-recommendations-panel p[ucardcontent] and cas-recommendations-panel u-card-title from the
    // fixed dictionary and makes them eligible for AI (dynamic) translation instead, so a title without
    // a fixed-dictionary entry doesn't stay in English while the body is translated.
    "Select severity": "Sélectionner la gravité",
    "Show rule definition": "Afficher la définition de la règle",
    "Rule definition": "Définition de la règle",
    "Rule settings": "Paramètres de la règle",
    "Select scanner": "Sélectionner le scanner",
    "Agentless disk-scan": "Analyse de disque sans agent",
    "Scan storage snapshots for risks without requiring a resident agent": "Analysez les snapshots de stockage à la recherche de risques sans nécessiter d'agent résident",
    "Scan cluster resources and configurations for compliance and security risks via the Kubernetes API":
      "Analysez les ressources et configurations des clusters à la recherche de risques de conformité et de sécurité via l'API Kubernetes",
    "XDR agent": "Agent XDR",
    "Offering a tailored approach to compliance validation by executing user-defined Python scripts":
      "Approche sur mesure de la validation de la conformité par l'exécution de scripts Python définis par l'utilisateur",
    "Refresh Needed": "Actualisation requise",
    "The page might be outdated or the session is expired": "La page est peut-être obsolète ou la session a expiré",
    "Select the scanner type to execute the custom detection rule and its associated script":
      "Sélectionnez le type de scanner qui exécutera la règle de détection personnalisée et son script associé",
    "Select operating system": "Sélectionner le système d'exploitation",
    "Input file(s) path": "Chemin du ou des fichiers d'entrée",
    "Input file(s) path is required": "Le chemin du ou des fichiers d'entrée est obligatoire",
    "Add remediation steps here": "Ajoutez ici les étapes de correction",
    "Severity is required": "La gravité est obligatoire",
    "Kubernetes Resources is required": "Les ressources Kubernetes sont obligatoires",
    "Select Kubernetes Resources": "Sélectionner les ressources Kubernetes",
    "Review custom code execution agreement": "Consulter l'accord d'exécution de code personnalisé",
    "You understand and agree that the Python scripts you provided for this \"Custom Code Execution\" capability will be executed in your cloud environment(s). By clicking \"I agree\", you acknowledge and agree to the following terms and conditions:":
      "Vous comprenez et acceptez que les scripts Python que vous avez fournis pour cette fonctionnalité \"Custom Code Execution\" seront exécutés dans votre ou vos environnements cloud. En cliquant sur \"I agree\", vous reconnaissez et acceptez les conditions générales suivantes :",
    "This capability is solely for the purpose of enabling you to define the compliance check rules for your cloud environment(s). Any other purposes are expressly prohibited.":
      "Cette fonctionnalité a pour seul objectif de vous permettre de définir les règles de vérification de conformité de votre ou vos environnements cloud. Toute autre utilisation est expressément interdite.",
    "Any actions involving": "Toute action impliquant des opérations",
    "WRITE, MODIFY": "WRITE, MODIFY",
    ", or": ", ou",
    "operations of your cloud environment(s) are strictly prohibited. It is your responsibility to ensure that your custom Python scripts only perform read-only operations of your cloud environment(s) explicitly for compliance check purposes.":
      "sur votre ou vos environnements cloud est strictement interdite. Il vous incombe de vous assurer que vos scripts Python personnalisés n'effectuent que des opérations en lecture seule sur votre ou vos environnements cloud, exclusivement à des fins de vérification de conformité.",
    "You are solely responsible for the quality, content, use, and execution results of your Python script. You assume all risks and liabilities arising from executing your Python script(s), including any potential errors, damages, or consequences resulting from its use.":
      "Vous êtes seul responsable de la qualité, du contenu, de l'utilisation et des résultats d'exécution de votre script Python. Vous assumez tous les risques et toutes les responsabilités découlant de l'exécution de votre ou vos scripts Python, y compris les éventuelles erreurs, dommages ou conséquences résultant de leur utilisation.",
    "I agree": "J'accepte",
    "Custom code execution approved": "Exécution de code personnalisé approuvée",
    "View agreement": "Afficher l'accord",
    "Attack Path is now powered by the Graph engine.": "Attack Path repose désormais sur le moteur Graph.",
    "Same concept, more powerful. Existing": "Même concept, plus puissant. Les règles",
    "rules continue to work and can still be created.": "existantes continuent de fonctionner et peuvent toujours être créées.",
    "Graph rules leverage graph queries to monitor your environment for complex attack paths and potential breach paths":
      "Les règles Graph s'appuient sur des requêtes de graphe pour surveiller votre environnement à la recherche de chemins d'attaque complexes et de chemins de compromission potentiels",
    "Configuration rules monitor your resource configurations for potential policy violations":
      "Les règles Configuration surveillent les configurations de vos ressources à la recherche de violations potentielles des politiques",
    "Data rules protect against malware and enable data classification": "Les règles Data protègent contre les logiciels malveillants et permettent la classification des données",
    "Identity rules monitor the identities in your cloud environment for excess-or-unused permissions":
      "Les règles Identity surveillent les identités de votre environnement cloud à la recherche d'autorisations excessives ou inutilisées",
    "Network exposure rules detect assets exposed to the Internet": "Les règles Network exposure détectent les actifs exposés à Internet",
    "AI rules monitor your AI ecosystem for risks and misconfigurations": "Les règles IA surveillent votre écosystème d'IA à la recherche de risques et de mauvaises configurations",
    "Attack path detection using the previous rule engine. We recommend Graph for new rules":
      "Détection des chemins d'attaque à l'aide de l'ancien moteur de règles. Nous recommandons Graph pour les nouvelles règles",
    "Define the rule (Rego)": "Définir la règle (Rego)",
    "For more information about the syntax": "Pour en savoir plus sur la syntaxe",
    "read here": "lisez ceci",
    "Assign compliance controls": "Attribuer des contrôles de conformité",
    "You can assign a rule to one or more custom compliance controls to tailor compliance checks to your organization's needs.":
      "Vous pouvez attribuer une règle à un ou plusieurs contrôles de conformité personnalisés afin d'adapter les vérifications de conformité aux besoins de votre organisation.",
    "Add controls": "Ajouter des contrôles",
    "Rule settings → Assign controls": "Paramètres de la règle → Attribuer des contrôles",
    "Apply selection": "Appliquer la sélection",
    "Critical severity": "Gravité critique",
    "High severity": "Gravité élevée",
    "Medium severity": "Gravité moyenne",
    "Low severity": "Gravité faible",
    "(Critical severity)": "(Gravité critique)",
    "(High severity)": "(Gravité élevée)",
    "(Medium severity)": "(Gravité moyenne)",
    "(Low severity)": "(Gravité faible)",
    "(Keep finding's severity)": "(Conserver la gravité du constat)",
    "(every 12 hours)": "(toutes les 12 heures)",
    "Use default severity": "Utiliser la gravité par défaut",
    "Third-party scanners can create issues only. They cannot perform blocking actions.":
      "Les scanners tiers peuvent uniquement créer des problèmes. Ils ne peuvent pas effectuer d'actions de blocage.",
    "Filters findings by the file's unique cryptographic hash (e.g., searching for a specific infected binary or verifying file integrity across images).":
      "Filtre les constats selon le hachage cryptographique unique du fichier (p. ex. pour rechercher un binaire infecté spécifique ou vérifier l'intégrité d'un fichier entre plusieurs images).",
    "Malware Verdict": "Verdict de logiciel malveillant",
    "Malware Verdict indicates whether detected software is confirmed malicious (Malware) or potentially unwanted and risky (Grayware).":
      "Le verdict de logiciel malveillant indique si le logiciel détecté est confirmé comme malveillant (Malware) ou potentiellement indésirable et risqué (Grayware).",
    "Filters by a specific, unique finding identifier": "Filtre selon un identifiant de constat spécifique et unique",
    "Determines whether findings suppressed by developers are considered during policy evaluation. Yes: Suppressed findings are excluded from policy evaluation. No: All findings are evaluated by the policy, including developer-suppressed ones.":
      "Détermine si les constats masqués par les développeurs sont pris en compte lors de l'évaluation de la politique. Oui : les constats masqués sont exclus de l'évaluation de la politique. Non : tous les constats sont évalués par la politique, y compris ceux masqués par les développeurs.",
    "Filters findings generated by a specific AppSec detection rule.": "Filtre les constats générés par une règle de détection AppSec spécifique.",
    "Could not parse detection rule": "Impossible d'analyser la règle de détection",
    "Filters findings based on labels attached to the matched AppSec rules, allowing you to filter and select multiple rules at once.":
      "Filtre les constats selon les étiquettes associées aux règles AppSec correspondantes, ce qui vous permet de filtrer et de sélectionner plusieurs règles à la fois.",
    "Filters based on the category of findings generated by the rule.": "Filtre selon la catégorie des constats générés par la règle.",
    "Scans your cloud environments to detect configuration drift between deployed resources and their IaC definitions.":
      "Analyse vos environnements cloud pour détecter les dérives de configuration entre les ressources déployées et leurs définitions IaC.",
    "Exclude any items that match this query:": "Exclure tous les éléments correspondant à cette requête :",
    "Add filters": "Ajouter des filtres",
    "Results Preview": "Aperçu des résultats",
    "Back to Policies": "Retour aux politiques",
    "Vulnerability Issue Policies": "Politiques de problèmes de vulnérabilité",
    "Vulnerability Policy": "Politique de vulnérabilité",
    "Vulnerability Policies": "Politiques de vulnérabilité",
    "Choose Actions": "Choisir les actions",

    // --- Vulnerability Policies - Issue Creation screen ---
    "Vulnerability Policies - Issue Creation": "Politiques de vulnérabilité - Création de problèmes",
    "Add Policy": "Ajouter une politique",
    "Exclusions": "Exclusions",
    "Globally Ignored CVEs, Assets, and Asset Groups": "CVE, actifs et groupes d'actifs ignorés globalement",
    "Issue Creation": "Création de problèmes",
    "Match Criteria": "Critères de correspondance",
    "Prevention": "Prévention",
    "disabled": "désactivé",
    "CVE Default": "CVE par défaut",
    "CVEs Confirmed Vulnerable Externally": "CVE dont la vulnérabilité est confirmée en externe",
    "CVEs with 80%+ EPSS Scores": "CVE avec un score EPSS de 80 % ou plus",
    "CVEs with CVSS Critical Severity": "CVE de gravité CVSS critique",
    "CVEs with CVSS High Severity": "CVE de gravité CVSS élevée",
    "CVEs with CVSS Medium Severity": "CVE de gravité CVSS moyenne",
    "CVSS Severity = Critical": "Gravité CVSS = Critique",
    "CVSS Severity = High": "Gravité CVSS = Élevée",
    "CVSS Severity = Medium": "Gravité CVSS = Moyenne",
    "EPSS Score >= 80%": "Score EPSS >= 80 %",
    "Finding Sources Contains Cortex Attack Surface Testing":
      "Les sources du constat contiennent Cortex Attack Surface Testing",
    "Package In Use = Yes": "Package utilisé = Oui",

    // --- Rules and Policies screen ---
    "Create dynamic groups by applying asset filters, or build static groups by selecting assets manually.":
      "Créez des groupes dynamiques en appliquant des filtres d'actifs, ou créez des groupes statiques en sélectionnant manuellement des actifs.",
    "The selected policy will be deleted.": "La politique sélectionnée sera supprimée.",
    "The following text will be displayed as part of the issue remediation guidance":
      "Le texte suivant sera affiché dans les instructions de correction du problème",
    "Delete Policy": "Supprimer la politique",
    "Disable Policy": "Désactiver la politique",
    "Disabling policy will resolve the open issues matching the policy.":
      "La désactivation de la politique résoudra les problèmes ouverts correspondant à cette politique.",
    "Deleting policy will resolve the open issues in this policy scope.":
      "La suppression de la politique résoudra les problèmes ouverts dans la portée de cette politique.",
    "Grace Period (Deployment)": "Délai de grâce (déploiement)",
    "Number of days to allow before blocking": "Nombre de jours autorisés avant le blocage",
    "The selected policies will be disabled. Are you sure you want to proceed?":
      "Les politiques sélectionnées seront désactivées. Voulez-vous vraiment continuer ?",
    "The policy will no longer evaluate against findings": "La politique ne sera plus évaluée par rapport aux constats",
    "The selected policies will be deleted. Are you sure you want to proceed?":
      "Les politiques sélectionnées seront supprimées. Voulez-vous vraiment continuer ?",
    // Kept verbatim (the sentence ends abruptly at "try adjusting your search to find.").
    // This is a distinct variant from the similar string in asset-inventory-screen.js
    // ("...to find what you're looking for.") with a different ending, so it is
    // registered as its own entry.
    "We couldn’t find what you’re looking for, try adjusting your search to find.":
      "Nous n'avons pas trouvé ce que vous cherchez. Essayez d'ajuster votre recherche.",
    "Created by:": "Créé par :",
    "Modified by:": "Modifié par :",
    "Created on:": "Créé le :",
    "Modified on:": "Modifié le :",
    "Total": "Total",
    "Edit policy": "Modifier la politique",
    "Duplicate policy": "Dupliquer la politique",
    "View Policy Details": "Afficher les détails de la politique",
    "Export policy": "Exporter la politique",
    "You are about to delete 1 policy": "Vous êtes sur le point de supprimer 1 politique",
    "* Choosing delete you will also save other unsaved changes in the policy screen":
      "* En choisissant de supprimer, vous enregistrerez également les autres modifications non enregistrées de l'écran de la politique",
    "Delete and Save": "Supprimer et enregistrer",
    "Delete Custom Detection Rule": "Supprimer la règle de détection personnalisée",
    "Data types": "Types de données",
    "Severity for Compliance": "Gravité pour la conformité",
    "Rule Details": "Détails de la règle",
    "Rule Definition (Rego)": "Définition de la règle (Rego)",
    "Rule Definition (Python)": "Définition de la règle (Python)",
    "Inputs": "Entrées",
  },

  patterns: [
    { re: /^Based on the categorization, finding type will be "(.+)"$/, tpl: "D'après la catégorisation, le type de constat sera \"$1\"" },
    { re: /^The (\[.*\]) dataset is not supported for the '(.+)' rule type\.$/, tpl: "Le jeu de données $1 n'est pas pris en charge pour le type de règle \"$2\"." },
    { re: /^Provided xdm\.asset\.type\.id (\[.*\]) is invalid\.$/, tpl: "Le xdm.asset.type.id $1 fourni n'est pas valide." },
    { re: /^Maximum of 50 labels \((\d+)\/50\)$/, tpl: "50 étiquettes maximum ($1/50)" },
    { re: /^Step (\d+)\/(\d+)$/, tpl: "Étape $1/$2" },
    { re: /^Condition Group\s+(\d+)$/, tpl: "Groupe de conditions $1" },
    // (Removed: a pattern for "We found the application "X" with no critical/high vulnerabilities.
    // ..." used to live here. See the comment in the exact block above — this text now goes through AI
    // translation via content.js's cas-recommendations-panel p[ucardcontent] exclusion instead.)
    { re: /^(\d+)\s+selected asset groups$/, tpl: "$1 groupes d'actifs sélectionnés" },
    { re: /^(\d+)\s+Selected rules$/, tpl: "$1 règles sélectionnées" },
    { re: /^Total\s+([\d,]+)\s+rules selected$/, tpl: "Total de $1 règles sélectionnées" },
    { re: /^(\d+)\s+selected predefined asset scopes$/, tpl: "$1 portées d'actifs prédéfinies sélectionnées" },
    { re: /^There are currently ([\d,]+) Issues generated from these policies\.$/,
      tpl: "Il y a actuellement $1 problèmes générés par ces politiques." },
    // "There are currently 0 Issues generated from these policies. No new Issues will be generated from these policies after disabling."
    { re: /^There are currently ([\d,]+) Issues generated from these policies\. No new Issues will be generated from these policies after disabling\.$/,
      tpl: "Il y a actuellement $1 problèmes générés par ces politiques. Après la désactivation, aucun nouveau problème ne sera généré par ces politiques." },
    // The rule name (an identifier) is left untranslated.
    { re: /^The selected rule, (.+), will be disabled\.$/, tpl: "La règle sélectionnée, $1, sera désactivée." },
    // "The selected rule, MCP Server, will be enabled. As a result, 0 estimated issues will be generated."
    { re: /^The selected rule, (.+), will be enabled\. As a result, ([\d,]+) estimated issues will be generated\.$/,
      tpl: "La règle sélectionnée, $1, sera activée. En conséquence, environ $2 problèmes seront générés." },
    { re: /^You are about to delete ([\d,]+) polic(?:y|ies)$/, tpl: "Vous êtes sur le point de supprimer $1 politique(s)" },
    { re: /^([\d,]+) Polic(?:y|ies) will be disabled$/, tpl: "$1 politique(s) seront désactivées" },
    { re: /^([\d,]+) Polic(?:y|ies) will be enabled$/, tpl: "$1 politique(s) seront activées" },
    // The policy name (an identifier) is left untranslated.
    { re: /^Policy (.+) will be deleted$/, tpl: "La politique $1 sera supprimée" },
    { re: /^Are you sure you want to delete the rule (.+)\?$/, tpl: "Voulez-vous vraiment supprimer la règle $1 ?" },
    // The rule name (an identifier) is left untranslated.
    { re: /^Rule (.+) will be deleted$/, tpl: "La règle $1 sera supprimée" },
    { re: /^([\d,]+) Rules? will be disabled$/, tpl: "$1 règle(s) seront désactivées" },
    { re: /^([\d,]+) Rules? will be enabled$/, tpl: "$1 règle(s) seront activées" },
    // "This is a Python-based rule. The Logic cannot be edited but can be viewed for Terraform"
    // The target type (e.g. Terraform — the language/resource kind the rule applies to) is variable.
    { re: /^This is a Python-based rule\. The Logic cannot be edited but can be viewed for (.+)$/,
      tpl: "Il s'agit d'une règle basée sur Python. La logique ne peut pas être modifiée, mais peut être consultée pour $1" },
    { re: /^Executables \((\d+)\)$/, tpl: "Exécutables ($1)" },
  ],

  skip: [],
};
