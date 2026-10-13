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
    "Add New": "Neu hinzufügen",
    "Enter client ID": "Client-ID eingeben",
    "Enter password": "Kennwort eingeben",
    "Choose Outpost": "Outpost auswählen",
    "Organization ID": "Organisations-ID",
    "Include": "Einschließen",
    "Enter OU IDs to exclude from scan": "Vom Scan auszuschließende OU-IDs eingeben",
    "Specify OUs": "OUs angeben",
    "Specify Accounts": "Konten angeben",
    "Enter account IDs to exclude from scan": "Vom Scan auszuschließende Konto-IDs eingeben",
    "Specify Folders": "Ordner angeben",
    "Specify Projects": "Projekte angeben",
    "Enter folder IDs to exclude from scan": "Vom Scan auszuschließende Ordner-IDs eingeben",
    "Enter project IDs to exclude from scan": "Vom Scan auszuschließende Projekt-IDs eingeben",
    "Enter Customer IDs for discovery enhancements": "Kunden-IDs für erweiterte Erkennung eingeben",
    "Specify Management Groups": "Verwaltungsgruppen angeben",
    "Enter management group IDs to exclude from scan": "Vom Scan auszuschließende Verwaltungsgruppen-IDs eingeben",
    "Specify Subscriptions": "Abonnements angeben",
    "Enter subscription IDs to exclude from scan": "Vom Scan auszuschließende Abonnement-IDs eingeben",
    "To complete setup, provide these details during template execution in the Azure Portal:":
      "Geben Sie zum Abschließen der Einrichtung bei der Ausführung der Vorlage im Azure Portal folgende Details an:",
    "Event Hub namespace": "Event Hub-Namespace",
    "Must belong to the onboarded subscription": "Muss zum Abonnement gehören, für das das Onboarding durchgeführt wurde",
    "Create an outpost for this tenant": "Outpost für diesen Tenant erstellen",
    "Allow connection to private registries": "Verbindung zu privaten Registrys zulassen",
    "Allow connection to private serverless functions": "Verbindung zu privaten serverlosen Funktionen zulassen",
    "Enabling this feature requires additional permissions. Download and run the Terraform template to apply.":
      "Für die Aktivierung dieser Funktion sind zusätzliche Berechtigungen erforderlich. Laden Sie die Terraform-Vorlage herunter und führen Sie sie aus, um sie anzuwenden.",
    "Requires additional cloud service provider permissions": "Erfordert zusätzliche Berechtigungen des Cloud-Service-Anbieters",
    "Choose an outpost to use for this instance. Only outposts connected to above tenant ID will be presented. To create a new outpost click":
      "Wählen Sie einen Outpost für diese Instanz aus. Es werden nur Outposts angezeigt, die mit der oben angegebenen Tenant-ID verbunden sind. Um einen neuen Outpost zu erstellen, klicken Sie auf:",
    "Tenant ID is required to approve Cortex as an enterprise application in the Azure tenant":
      "Die Tenant-ID ist erforderlich, um Cortex als Unternehmensanwendung im Azure-Tenant zu genehmigen",
    "Select this option to onboard only Microsoft Entra ID data for identity security without full tenant onboarding. Scan mode and scope modifications will not be available.":
      "Wählen Sie diese Option, um nur Microsoft Entra ID-Daten für die Identitätssicherheit ohne vollständiges Tenant-Onboarding zu übernehmen. Änderungen am Scanmodus und Geltungsbereich sind dann nicht möglich.",
    "Event Hub name": "Event Hub-Name",
    "After onboarding, these values will be available as read-only in the instance settings.":
      "Nach dem Onboarding sind diese Werte in den Instanzeinstellungen schreibgeschützt verfügbar.",
    "Importing replaces the current list.": "Beim Importieren wird die aktuelle Liste ersetzt.",
    "Additional security capabilities can be enabled in addition to the below built in capabilities:":
      "Zusätzlich zu den folgenden integrierten Funktionen können weitere Sicherheitsfunktionen aktiviert werden:",
    "Cloud security posture management": "Verwaltung der Cloud-Sicherheitslage",
    "AI security posture management": "Verwaltung der KI-Sicherheitslage",
    "Discover, classify and protect sensitive data in your cloud environment": "Sensible Daten in Ihrer Cloud-Umgebung erkennen, klassifizieren und schützen",
    "Requires additional cloud provider permissions": "Erfordert zusätzliche Berechtigungen des Cloud-Anbieters",
    "Scan Serverless functions for vulnerabilities": "Serverlose Funktionen auf Schwachstellen scannen",
    "Automate response to issues using playbooks and Quick Actions": "Reaktion auf Probleme mit Playbooks und Quick Actions automatisieren",
    "Enable or disable Agentless Disk Scanning.": "Agentloses Scannen von Datenträgern aktivieren oder deaktivieren.",
    "Existing and newly discovered clusters are continuously scanned agentlessly for deep Kubernetes inventory context alongside security insights (e.g. compliance & misconfigurations)":
      "Vorhandene und neu erkannte Cluster werden kontinuierlich agentlos gescannt, um detaillierten Kubernetes-Inventarkontext sowie Sicherheitserkenntnisse (z. B. Compliance und Fehlkonfigurationen) zu liefern",
    "Select outpost account": "Outpost-Konto auswählen",
    "When enabled, Cortex sends unknown files to WildFire for analysis. The file types sent for analysis depend on the platform type. WildFire accepts files up to 300MB in size.":
      "Wenn diese Option aktiviert ist, sendet Cortex unbekannte Dateien zur Analyse an WildFire. Welche Dateitypen zur Analyse gesendet werden, hängt vom Plattformtyp ab. WildFire akzeptiert Dateien bis zu einer Größe von 300 MB.",
    "Hide Preferences": "Einstellungen ausblenden",
    "Enable automation to streamline incident response. this may required additional cloud service provider permissions.":
      "Aktivieren Sie die Automatisierung, um die Reaktion auf Vorfälle zu optimieren. Hierfür sind möglicherweise zusätzliche Berechtigungen des Cloud-Service-Anbieters erforderlich.",
    "Scan container registry images for vulnerabilities, malware and secrets": "Container-Registry-Images auf Schwachstellen, Malware und Geheimnisse scannen",
    "This feature requires data egress, which incurs standard data transfer fees.": "Diese Funktion erfordert ausgehenden Datenverkehr (Egress), für den die üblichen Datenübertragungsgebühren anfallen.",
    "Publisher": "Herausgeber",
    "Choose and configure capabilities to fit your needs": "Wählen und konfigurieren Sie Funktionen nach Ihren Anforderungen",
    "Edit, add or remove capabilities to fit your needs": "Bearbeiten, ergänzen oder entfernen Sie Funktionen nach Ihren Anforderungen",
    "Deployment removal": "Entfernen der Bereitstellung",
    "Default settings": "Standardeinstellungen",
    "Edit profile": "Profil bearbeiten",
    "Kubernetes connect": "Kubernetes verbinden",
    "Connector Status": "Connector-Status",
    "Collectors": "Collectors",
    "Count Received (Last 24h)": "Empfangene Anzahl (letzte 24 Std.)",
    "Last Communication": "Letzte Kommunikation",
    "Connector Version": "Connector-Version",
    "Data source": "Datenquelle",
    "K8s Platform": "K8s-Plattform",
    "Last Scan": "Letzter Scan",
    "Serverless": "Serverlos",
    "Update": "Aktualisieren",
    "Cluster resource identifier": "Cluster-Ressourcenkennung",
    "Enter cluster resource identifier": "Cluster-Ressourcenkennung eingeben",
    "The resource identifier must be specified for GKE or EKS clusters with metadata service disabled, for AKS clusters with non-default nodes managed resource group and for Fargate clusters":
      "Die Ressourcenkennung muss für GKE- oder EKS-Cluster mit deaktiviertem Metadatendienst, für AKS-Cluster mit nicht standardmäßiger verwalteter Knotenressourcengruppe und für Fargate-Cluster angegeben werden",
    "Basic authentication is only supported for posture management.": "Die Standardauthentifizierung wird nur für die Verwaltung der Sicherheitslage unterstützt.",
    "Notice! Assigning tags may impact scoped permissions in the system.":
      "Achtung! Das Zuweisen von Tags kann sich auf bereichsbezogene Berechtigungen im System auswirken.",
    "Initial scanning configuration": "Anfängliche Scankonfiguration",
    "Configure the initial preference for scanning your registry. Any newly discovered registry, repository or image in the account will be scanned by default.":
      "Konfigurieren Sie die anfängliche Einstellung für das Scannen Ihrer Registry. Alle neu im Konto erkannten Registrys, Repositorys oder Images werden standardmäßig gescannt.",
    "Latest tag": "Neuester Tag",
    "Days modified": "Tage seit Änderung",
    "Tags created/updated in last": "Tags erstellt/aktualisiert in den letzten",
    "Onboard your OCI tenancy to Cortex Cloud. Security scanning is performed in the Cortex Cloud environment.":
      "Führen Sie das Onboarding Ihrer OCI-Tenancy in Cortex Cloud durch. Sicherheitsscans werden in der Cortex Cloud-Umgebung ausgeführt.",
    "Enter an instance name or leave it empty to be auto populated": "Geben Sie einen Instanznamen ein oder lassen Sie das Feld leer, damit er automatisch ausgefüllt wird",
    "Define scope of scans by including/excluding compartments or regions": "Definieren Sie den Scanbereich durch Ein- oder Ausschließen von Compartments oder Regionen",
    "Modify Scope by Compartments": "Geltungsbereich nach Compartments ändern",
    "Scope modification will impact the compartments and their sub-compartments": "Die Änderung des Geltungsbereichs wirkt sich auf die Compartments und deren untergeordnete Compartments aus",
    "OCI region": "OCI-Region",
    "Choose region": "Region auswählen",
    "Bucket Name": "Bucket-Name",
    "Enter bucket name": "Bucket-Namen eingeben",
    "Compartment OCID": "Compartment-OCID",
    "Enable Amazon S3 Log Collection": "Amazon S3-Protokollerfassung aktivieren",
    "Enable Azure Network Watcher Log Collection": "Azure Network Watcher-Protokollerfassung aktivieren",
    "Enable GCP Pub/Sub Log Collection": "GCP Pub/Sub-Protokollerfassung aktivieren",
    "Enter the full GCP Pub/Sub subscription name": "Geben Sie den vollständigen Namen des GCP Pub/Sub-Abonnements ein",
    "Upload the JSON file containing your service account key": "Laden Sie die JSON-Datei mit Ihrem Dienstkontoschlüssel hoch",
    "Enhanced Cloud Protection": "Erweiterter Cloud-Schutz",
    "Use flow logs in analytics": "Flow-Protokolle in Analysen verwenden",
    "Save & Generate Token": "Speichern und Token generieren",
    "subscription name": "Abonnementname",
    "Define the following parameters": "Definieren Sie die folgenden Parameter",
    ", see": ", siehe",
    "Applies to these capabilities": "Gilt für diese Funktionen",
    "Automation and Remediation": "Automatisierung und Behebung",
    "Connection": "Verbindung",
    "Drag & Drop or Browse file to upload": "Datei per Drag & Drop ablegen oder zum Hochladen durchsuchen",
    "Engine": "Engine",
    "Engine Group": "Engine-Gruppe",
    "Enter the credentials to securely authorize the connection": "Geben Sie die Anmeldeinformationen ein, um die Verbindung sicher zu autorisieren",
    "Google Workspace Admin Email": "Admin-E-Mail-Adresse für Google Workspace",
    "Identity Posture": "Identitätssicherheitslage",
    "Manage and monitor Google Workspace directory resources including users, groups, organizational units, domains, and roles via the Admin SDK Directory API":
      "Google Workspace-Verzeichnisressourcen wie Benutzer, Gruppen, Organisationseinheiten, Domänen und Rollen über die Admin SDK Directory API verwalten und überwachen",
    "No engine": "Keine Engine",
    "OAuth with customer created service principal": "OAuth mit vom Kunden erstelltem Dienstprinzipal",
    "Run automation and remediation actions against Google Drive": "Automatisierungs- und Behebungsaktionen für Google Drive ausführen",
    "Scan and protect Google Workspace data across Drive, Gmail, and shared resources": "Google Workspace-Daten in Drive, Gmail und freigegebenen Ressourcen scannen und schützen",
    "Select capabilities": "Funktionen auswählen",
    "Server-to-server authentication using JWT Bearer assertion with a service account credentials file":
      "Server-zu-Server-Authentifizierung mit JWT Bearer Assertion und einer Anmeldeinformationsdatei für das Dienstkonto",
    "Set your preferred authentication setup": "Legen Sie die gewünschte Authentifizierungskonfiguration fest",
    "The Google Workspace admin email used for domain-wide delegation. This account must have super admin privileges.":
      "Die Admin-E-Mail-Adresse für Google Workspace, die für die domänenweite Delegierung verwendet wird. Dieses Konto muss über Super-Admin-Berechtigungen verfügen.",
    "Trust any certificate (not secure)": "Jedem Zertifikat vertrauen (nicht sicher)",
    "Use system proxy settings": "Proxyeinstellungen des Systems verwenden",
    "This field cannot be changed after it is added. To change it, exit the wizard and start again":
      "Dieses Feld kann nach dem Hinzufügen nicht mehr geändert werden. Um es zu ändern, beenden Sie den Assistenten und beginnen Sie von vorn",
    "Workload Federated Identity": "Workload-Identitätsföderation",
    "Access Key": "Zugriffsschlüssel",
    "STS AssumeRole": "STS AssumeRole",
    "SQS URL": "SQS URL",
    "Enter SQS URL": "SQS-URL eingeben",
    "Role ARN": "Rollen-ARN",
    "Enter role ARN": "Rollen-ARN eingeben",
    "AWS Client ID": "AWS-Client-ID",
    "AWS Client Secret": "AWS-Clientgeheimnis",
    "External ID": "Externe ID",
    "Audience": "Zielgruppe",
    "Enter audience": "Zielgruppe eingeben",
    "Select log type": "Protokolltyp auswählen",
    "Copy service account identifier": "Dienstkontokennung kopieren",
    "Identifier": "Kennung",
    "Enable": "Aktivieren",
    "Enter a compartment's OCID": "OCID eines Compartments eingeben",
    "Delayed": "Verzögert",
    "Edit Profile settings": "Profileinstellungen bearbeiten",
    "Enable auto upgrade to ensure the installed set of capabilities is upgraded as new versions are available.":
      "Aktivieren Sie das automatische Upgrade, damit die installierten Funktionen aktualisiert werden, sobald neue Versionen verfügbar sind.",
    "Explore and tailor Kubernetes security capabilities to simplify deployment and ensure seamless integration with your infrastructure. Easily strengthen and optimize your Kubernetes environment's security":
      "Kubernetes-Sicherheitsfunktionen erkunden und anpassen, um die Bereitstellung zu vereinfachen und eine nahtlose Integration in Ihre Infrastruktur sicherzustellen. Stärken und optimieren Sie die Sicherheit Ihrer Kubernetes-Umgebung ganz einfach",
    "HTTP proxy IP": "HTTP-Proxy-IP",
    "If network traffic must route through a proxy gateway, configure the required settings here, including the proxy URL, authentication method, and other relevant parameters.":
      "Wenn der Netzwerkverkehr über ein Proxy-Gateway geleitet werden muss, konfigurieren Sie hier die erforderlichen Einstellungen, einschließlich Proxy-URL, Authentifizierungsmethode und weiterer relevanter Parameter.",
    "Immediate": "Sofort",
    "Latest available version (GA)": "Neueste verfügbare Version (GA)",
    "Namespace": "Namespace",
    "Supported Kubernetes distributions": "Unterstützte Kubernetes-Distributionen",
    "To see the list of supported versions,": "Die Liste der unterstützten Versionen finden Sie",
    "Upgrade rollout": "Upgrade-Rollout",
    "Upgrade strategy": "Upgrade-Strategie",
    "What time?": "Zu welcher Uhrzeit?",
    "Which days?": "An welchen Tagen?",
    "Latest available version (GA) / Immediate / On any day (At any time)":
      "Neueste verfügbare Version (GA) / Sofort / An jedem Tag (zu jeder Zeit)",
    "Profile settings": "Profileinstellungen",
    "Read more": "Weitere Informationen",
    "Realtime protection": "Echtzeitschutz",
    "Capabilities": "Funktionen",
    "Cloud Services": "Cloud-Dienste",
    "Count (Last 24h)": "Anzahl (letzte 24 Std.)",
    "Data Enrichment & Threat Intelligence": "Datenanreicherung und Threat Intelligence",
    "Deprecated": "Veraltet",
    "Forensics & Malware Analysis": "Forensik und Malware-Analyse",
    "Image OCR": "Bild-OCR",
    "Indicators detection": "Erkennung von Indikatoren",
    "Instances Status": "Instanzstatus",
    "Mail Sender": "E-Mail-Versand",
    "Messaging": "Messaging",
    "Messaging and Conferencing": "Messaging und Konferenzen",
    "Open Source": "Open Source",
    "Pack Version": "Pack-Version",
    "Rasterize": "Rastern",
    "Update Available": "Update verfügbar",
    "Utilities": "Dienstprogramme",
    "Add Another Instance": "Weitere Instanz hinzufügen",
    "Add Data Sources or Integrations": "Datenquellen oder Integrationen hinzufügen",
    "Create Integration": "Integration erstellen",
    "More Details": "Weitere Details",
    "Account": "Konto",
    "Add Instance": "Instanz hinzufügen",
    "Additional Security Capabilities": "Zusätzliche Sicherheitsfunktionen",
    "Authentication Method": "Authentifizierungsmethode",
    "Cloud Scan": "Cloud-Scan",
    "Cloud Service Provider": "Cloud-Service-Anbieter",
    "Cloud Tags": "Cloud-Tags",
    "Contains": "Enthält",
    "Error": "Fehler",
    "Instance ID": "Instanz-ID",
    "Outpost": "Outpost",
    "Outpost ID": "Outpost-ID",
    "Pending": "Ausstehend",
    "Scan Mode": "Scanmodus",
    "Update Status": "Aktualisierungsstatus",
    "Warning": "Warnhinweis",
    "Account Name": "Kontoname",
    "Account Type": "Kontotyp",
    "Agentless Disk Scanning": "Agentloses Scannen von Datenträgern",
    "All granted": "Alle erteilt",
    "Audit Logs": "Audit-Protokolle",
    "Cloud Instances": "Cloud-Instanzen",
    "Coverage": "Abdeckung",
    "Scan Coverage": "Scanabdeckung",
    "Data Security Scanning": "Scannen der Datensicherheit",
    "Data Sources": "Datenquellen",
    "Discovery Engine": "Discovery-Engine",
    "Environment": "Umgebung",
    "High Coverage": "Hohe Abdeckung",
    "Permissions": "Berechtigungen",
    "Registry Scanning": "Registry-Scans",
    "Resources Tags": "Ressourcen-Tags",
    "Security Capabilities": "Sicherheitsfunktionen",
    "Serverless Scanning": "Serverless-Scans",
    "Scan With Outpost": "Mit Outpost scannen",
    "Scanning is done in the Cortex cloud environment.": "Der Scan erfolgt in der Cortex Cloud-Umgebung.",
    "Scanning is done on infrastructure deployed to a cloud account owned by you. This mode require additional cloud provider permissions and may incur additional cloud costs.":
      "Der Scan erfolgt auf einer Infrastruktur, die in einem Cloud-Konto in Ihrem Besitz bereitgestellt wird. Dieser Modus erfordert zusätzliche Berechtigungen des Cloud-Anbieters und kann zusätzliche Cloud-Kosten verursachen.",
    "Show advanced settings": "Erweiterte Einstellungen anzeigen",
    "View required permissions": "Erforderliche Berechtigungen anzeigen",
    "Organizational Unit": "Organisationseinheit",
    "Add Tag": "Tag hinzufügen",
    "After onboarding, view these values in the cloud instance settings.":
      "Nach dem Onboarding können Sie diese Werte in den Einstellungen der Cloud-Instanz einsehen.",
    "Automatically provisions all required cloud resources and permissions via IaC template.":
      "Stellt alle erforderlichen Cloud-Ressourcen und Berechtigungen automatisch über eine IaC-Vorlage bereit.",
    "Choose logs to collect. To benefit from all security capabilities all log types should be collected -":
      "Wählen Sie die zu erfassenden Protokolle aus. Um alle Sicherheitsfunktionen nutzen zu können, sollten alle Protokolltypen erfasst werden -",
    "CloudTrail Bucket Name:": "Name des CloudTrail-Buckets:",
    "Collect Audit Logs": "Audit-Protokolle erfassen",
    "Data security posture management": "Verwaltung der Datensicherheitslage",
    "Define scope of scans by including/excluding OUs, Accounts or Regions":
      "Definieren Sie den Scanbereich durch Ein- oder Ausschließen von OUs, Konten oder Regionen",
    "Deployment Guide": "Bereitstellungsleitfaden",
    "Deployment Method": "Bereitstellungsmethode",
    "Edit Preferences": "Einstellungen bearbeiten",
    "Enable additional security add-ons. This may require additional cloud provider permissions":
      "Aktivieren Sie zusätzliche Sicherheits-Add-ons. Hierfür sind möglicherweise zusätzliche Berechtigungen des Cloud-Anbieters erforderlich",
    "For full control over the onboarding process, follow our":
      "Für die vollständige Kontrolle über den Onboarding-Prozess folgen Sie unserem",
    "Hide advanced settings": "Erweiterte Einstellungen ausblenden",
    "KMS Key ARN (Optional):": "KMS-Schlüssel-ARN (optional):",
    "Log Collection Configuration": "Konfiguration der Protokollerfassung",
    "Modify Scope by Regions": "Geltungsbereich nach Regionen ändern",
    "Modify by OU/Account": "Nach OU/Konto ändern",
    "Must reside within the account you are onboarding": "Muss sich in dem Konto befinden, für das Sie das Onboarding durchführen",
    "Note": "Hinweis",
    "Collect data events (currently support lambda & S3)": "Datenereignisse erfassen (derzeit werden Lambda und S3 unterstützt)",
    "Automated collection creates new, dedicated AWS resources (CloudTrail, S3 bucket, and notification services). This can lead to significant infrastructure costs in high-volume environments.":
      "Bei der automatisierten Erfassung werden neue, dedizierte AWS-Ressourcen (CloudTrail, S3-Bucket und Benachrichtigungsdienste) erstellt. In Umgebungen mit hohem Datenvolumen kann dies zu erheblichen Infrastrukturkosten führen.",
    "Region must match the deployment region": "Die Region muss mit der Bereitstellungsregion übereinstimmen",
    "SNS Topic ARN:": "SNS-Themen-ARN:",
    "Scope Modifications": "Änderungen am Geltungsbereich",
    "Send samples to detonation in WildFire. Supported in: Registry Scanning.":
      "Stichproben zur Detonation an WildFire senden. Unterstützt in: Registry-Scans.",
    "Serverless functions scanning": "Scannen serverloser Funktionen",
    "The following labels are added to any new resource created by Cortex in the cloud environment":
      "Die folgenden Labels werden jeder neuen Ressource hinzugefügt, die Cortex in der Cloud-Umgebung erstellt",
    "To complete setup, enter these resource details during template execution in the AWS Console":
      "Geben Sie zum Abschließen der Einrichtung bei der Ausführung der Vorlage in der AWS-Konsole diese Ressourcendetails ein",
    "Upload unknown files to WildFire": "Unbekannte Dateien an WildFire hochladen",
    "(Keeping this enabled is strongly recommended)": "(Es wird dringend empfohlen, diese Option aktiviert zu lassen)",
    ". This may require additional cloud provider permissions.":
      ". Hierfür sind möglicherweise zusätzliche Berechtigungen des Cloud-Anbieters erforderlich.",
    "for provisioning all required resources yourself.": ", um alle erforderlichen Ressourcen selbst bereitzustellen.",
    "Close": "Schließen",
    "Connect to AWS to execute the template.": "Stellen Sie eine Verbindung zu AWS her, um die Vorlage auszuführen.",
    "Cortex has created your instance in pending state and your authentication template is available.":
      "Cortex hat Ihre Instanz im Status \"Ausstehend\" erstellt, und Ihre Authentifizierungsvorlage ist verfügbar.",
    "Download CloudFormation": "CloudFormation herunterladen",
    "Download the template and execute it in your cloud service provider.":
      "Laden Sie die Vorlage herunter und führen Sie sie bei Ihrem Cloud-Service-Anbieter aus.",
    "Execute in AWS": "In AWS ausführen",
    "For more information,": "Weitere Informationen",
    "Generate Template": "Vorlage generieren",
    "Template Delete": "Vorlage löschen",
    "Template has been deleted.": "Die Vorlage wurde gelöscht.",
    "DON'T FORGET": "NICHT VERGESSEN",
    "To finalize the process, you will need to choose a connection method.":
      "Um den Vorgang abzuschließen, müssen Sie eine Verbindungsmethode auswählen.",
    "Next steps": "Nächste Schritte",
    "Note: If you select": "Hinweis: Wenn Sie",
    "To complete the process, execute the template in AWS using one of the following methods.":
      "Um den Vorgang abzuschließen, führen Sie die Vorlage in AWS mit einer der folgenden Methoden aus.",
    "To complete the process, execute the template in AWS": "Um den Vorgang abzuschließen, führen Sie die Vorlage in AWS aus",
    "To configure flow or DNS log ingestion use": "Um die Erfassung von Flow- oder DNS-Protokollen zu konfigurieren, verwenden Sie",
    "View all data sources and their instances in": "Alle Datenquellen und ihre Instanzen anzeigen in",
    "When the discovery scan is complete, view cloud assets in": "Wenn der Discovery-Scan abgeschlossen ist, können Sie Cloud-Assets anzeigen in",
    "When you're done": "Wenn Sie fertig sind",
    ", you must already be logged in to AWS.": ", müssen Sie bereits bei AWS angemeldet sein.",
    "view documentation": "Dokumentation anzeigen",
    "read more in documentation": "Weitere Informationen in der Dokumentation",
    "tag key": "Tag-Schlüssel",
    "tag value": "Tag-Wert",
    "ARE YOU SURE?": "SIND SIE SICHER?",
    "Clear": "Leeren",
    "Cloud Labels": "Cloud-Labels",
    "Collect Audit Logs (GCP Pub/Sub)": "Audit-Protokolle erfassen (GCP Pub/Sub)",
    "Connect to GCP workspace": "Mit GCP-Workspace verbinden",
    "Define scope of scans by including/excluding Folders, Projects or Regions":
      "Definieren Sie den Scanbereich durch Ein- oder Ausschließen von Ordnern, Projekten oder Regionen",
    "Discovery Enhancements": "Discovery-Erweiterungen",
    "Download Terraform": "Terraform herunterladen",
    "GCP Pub/Sub connector": "GCP Pub/Sub-Connector",
    "To complete the process, execute the template in GCP": "Um den Vorgang abzuschließen, führen Sie die Vorlage in GCP aus",
    "To configure flow and DNS log ingestion use": "Um die Erfassung von Flow- und DNS-Protokollen zu konfigurieren, verwenden Sie",
    ". Download this setup file and run it on your cloud service provider account.":
      ". Laden Sie diese Setup-Datei herunter und führen Sie sie in Ihrem Konto beim Cloud-Service-Anbieter aus.",
    "Modify by Folder/Project": "Nach Ordner/Projekt ändern",
    "Project Id": "Projekt-ID",
    "Project Name": "Projektname",
    "Project Type": "Projekttyp",
    "Update and Resolve": "Aktualisieren und auflösen",
    "Manually connect an instance": "Instanz manuell verbinden",
    "View Details": "Details anzeigen",
    "Re-download Connection Template": "Verbindungsvorlage erneut herunterladen",
    "1. To create the service principal, you must have the Entra ID Cloud Application Administrator role (or higher) in the Azure tenant you are onboarding.":
      "1. Zum Erstellen des Dienstprinzipals benötigen Sie im Azure-Tenant, für den Sie das Onboarding durchführen, die Entra ID-Rolle Cloud Application Administrator (oder höher).",
    "2. Open Azure Cloud Shell in the tenant you are onboarding, or open a local terminal with the Azure CLI installed, and log in to the target tenant before executing the command below.":
      "2. Öffnen Sie Azure Cloud Shell im Tenant, für den Sie das Onboarding durchführen, oder öffnen Sie ein lokales Terminal mit installierter Azure CLI, und melden Sie sich beim Ziel-Tenant an, bevor Sie den folgenden Befehl ausführen.",
    "3. Run the following command:": "3. Führen Sie den folgenden Befehl aus:",
    "4. Verify the service principal was created": "4. Überprüfen Sie, ob der Dienstprinzipal erstellt wurde",
    "Collect Audit Logs (Event Hub)": "Audit-Protokolle erfassen (Event Hub)",
    "Create Cortex service principal": "Cortex-Dienstprinzipal erstellen",
    "This service principal is Cortex's primary runtime identity in your tenant. Cortex uses it to read your Azure resources and to perform actions for the capabilities you enable. When you enter your Azure tenant ID, Cortex checks if the service principal already exists. If it is not found, follow the steps below.":
      "Dieser Dienstprinzipal ist die primäre Laufzeitidentität von Cortex in Ihrem Tenant. Cortex verwendet ihn, um Ihre Azure-Ressourcen zu lesen und Aktionen für die von Ihnen aktivierten Funktionen auszuführen. Wenn Sie Ihre Azure-Tenant-ID eingeben, prüft Cortex, ob der Dienstprinzipal bereits vorhanden ist. Falls er nicht gefunden wird, führen Sie die folgenden Schritte aus.",
    "Define scope of scans by including/excluding Management Groups, Subscriptions or Regions":
      "Definieren Sie den Scanbereich durch Ein- oder Ausschließen von Verwaltungsgruppen, Abonnements oder Regionen",
    "Documentation": "Dokumentation",
    "For more information, see the": "Weitere Informationen finden Sie unter:",
    "To complete the process, execute the template in Azure": "Um den Vorgang abzuschließen, führen Sie die Vorlage in Azure aus",
    "To configure flow log ingestion use": "Um die Erfassung von Flow-Protokollen zu konfigurieren, verwenden Sie",
    "Modify by Management Group/Subscription": "Nach Verwaltungsgruppe/Abonnement ändern",
    "Onboard Microsoft Entra ID only": "Onboarding nur für Microsoft Entra ID durchführen",
    "Tenant": "Tenant",
    "Tenant ID": "Tenant-ID",
    "All Outposts": "Alle Outposts",
    "New Outpost": "Neuer Outpost",
    "Outpost Account ID": "Outpost-Konto-ID",
    "Outpost Account Name": "Outpost-Kontoname",
    "Create AWS Outpost": "AWS-Outpost erstellen",
    "Custom Outpost": "Benutzerdefinierter Outpost",
    "Keep control of your network architecture. You provide the VPC and Subnets, and we’ll use Terraform to deploy the IAM roles, storage, and compute resources directly into your existing infrastructure.":
      "Behalten Sie die Kontrolle über Ihre Netzwerkarchitektur. Sie stellen die VPC und Subnetze bereit, und wir stellen mit Terraform die IAM-Rollen, den Speicher und die Rechenressourcen direkt in Ihrer vorhandenen Infrastruktur bereit.",
    "Use a predefined script to deploy all roles and resources, as well as configurations, to a dedicated account owned by you.":
      "Verwenden Sie ein vordefiniertes Skript, um alle Rollen und Ressourcen sowie Konfigurationen in einem dedizierten Konto in Ihrem Besitz bereitzustellen.",
    "We are preparing your Amazon Web Services outpost account. Your next step is to create the connection to Amazon Web Services.":
      "Wir bereiten Ihr Amazon Web Services-Outpost-Konto vor. Im nächsten Schritt erstellen Sie die Verbindung zu Amazon Web Services.",
    "Create GCP Outpost": "GCP-Outpost erstellen",
    "Create Azure Outpost": "Azure-Outpost erstellen",
    "We are preparing your Google Cloud Platform outpost account. Your next step is to create the connection to Google Cloud Platform.":
      "Wir bereiten Ihr Google Cloud Platform-Outpost-Konto vor. Im nächsten Schritt erstellen Sie die Verbindung zu Google Cloud Platform.",
    "We are preparing your Microsoft Azure outpost account. Your next step is to create the connection to Microsoft Azure.":
      "Wir bereiten Ihr Microsoft Azure-Outpost-Konto vor. Im nächsten Schritt erstellen Sie die Verbindung zu Microsoft Azure.",
    "Recommended": "Empfohlen",
    "Number of instances": "Anzahl der Instanzen",
    "Partition": "Partition",
    "Features": "Features",
    "Select a dedicated account for the outpost (free from other resources)":
      "Wählen Sie ein dediziertes Konto für den Outpost aus (ohne andere Ressourcen)",
    "Onboard only one outpost for each account": "Führen Sie das Onboarding nur für einen Outpost pro Konto durch",
    "The tenant ID format is valid, but we couldn't connect to the account because the required configuration is missing.":
      "Das Format der Tenant-ID ist gültig, aber die Verbindung zum Konto konnte nicht hergestellt werden, da die erforderliche Konfiguration fehlt.",
    "To maximize security coverage, include collection of audit logs (Event Hub). This may require additional cloud service provider permissions.":
      "Um die Sicherheitsabdeckung zu maximieren, schließen Sie die Erfassung von Audit-Protokollen (Event Hub) ein. Hierfür sind möglicherweise zusätzliche Berechtigungen des Cloud-Service-Anbieters erforderlich.",
    "Verify": "Überprüfen",
    "Read more in documentation.": "Weitere Informationen finden Sie in der Dokumentation.",
    "Select additional coverage. This may require additional actions in the respected cloud provider destination to establish trust.":
      "Wählen Sie zusätzliche Abdeckung aus. Möglicherweise sind zusätzliche Aktionen beim jeweiligen Cloud-Anbieter erforderlich, um eine Vertrauensstellung herzustellen.",
    "Send samples to detonation in WildFire. Supported in Registry Scanning.":
      "Stichproben zur Detonation an WildFire senden. Unterstützt in Registry-Scans.",
    "To maximize security coverage, include collection of audit logs (GCP Pub/Sub). This may require additional cloud service provider permissions.":
      "Um die Sicherheitsabdeckung zu maximieren, schließen Sie die Erfassung von Audit-Protokollen (GCP Pub/Sub) ein. Hierfür sind möglicherweise zusätzliche Berechtigungen des Cloud-Service-Anbieters erforderlich.",
    "Delete": "Löschen",
    "If you delete it, running authentication templates of this pending instance will not create a valid instance, and will result in unused permissions.":
      "Wenn Sie sie löschen, erstellen laufende Authentifizierungsvorlagen dieser ausstehenden Instanz keine gültige Instanz, und es bleiben ungenutzte Berechtigungen zurück.",
    "confirm": "bestätigen",

    // --- External Issues Mapping screen (vendor/product names are proper nouns, left in English) ---
    "Filter Rule": "Filterregel",
    "Mapping Statistics": "Zuordnungsstatistik",
    "Rule Origin": "Regelursprung",
    "Vendor Product": "Herstellerprodukt",
    "( Mapping is disabled )": "( Zuordnung ist deaktiviert )",

    // --- Assistent zur Verbindung von Datenquellen (Google Workspace / Office 365 / Cloud-Anbieter-Beschreibungen / 3rd Party AppSec Collector / ANY.RUN) ---
    "About": "Info",
    "Google Workspace productivity and collaboration suite integration for data security, identity monitoring, and compliance":
      "Integration der Google Workspace-Produktivitäts- und Kollaborationssuite für Datensicherheit, Identitätsüberwachung und Compliance",
    "Name and configure the instance capabilities": "Benennen und konfigurieren Sie die Funktionen der Instanz",
    "Enter a unique name for this instance": "Geben Sie einen eindeutigen Namen für diese Instanz ein",
    "Select Recommended to use the suggested authentication method for all selected capabilities. Select Advanced to configure your preferred authentication methods separately for each capability":
      "Wählen Sie Empfohlen, um die vorgeschlagene Authentifizierungsmethode für alle ausgewählten Funktionen zu verwenden. Wählen Sie Erweitert, um Ihre bevorzugten Authentifizierungsmethoden für jede Funktion separat zu konfigurieren",
    "Enable Office 365 Log Collection": "Office 365-Protokollerfassung aktivieren",
    "tenant domain": "Mandantendomäne",
    "Enter domain name": "Geben Sie den Domänennamen ein",
    "application client id": "Anwendungs-Client-ID",
    "Enter the application client ID": "Geben Sie die Anwendungs-Client-ID ein",
    "Enter client secret": "Geben Sie das Client-Secret ein",
    "Scan and protect Salesforce data including files, attachments, and records":
      "Scannen und schützen Sie Salesforce-Daten, einschließlich Dateien, Anhängen und Datensätzen",
    "Automate identity lifecycle management including user provisioning, updates, and access control":
      "Automatisieren Sie das Identitätslebenszyklusmanagement, einschließlich Benutzerbereitstellung, Aktualisierungen und Zugriffskontrolle",
    "Maintain visibility and control over SaaS-based identities, including users, groups, roles, and granular permissions.":
      "Behalten Sie Transparenz und Kontrolle über SaaS-basierte Identitäten, einschließlich Benutzer, Gruppen, Rollen und granularer Berechtigungen.",
    "Find your domain: Copy the URL from your browser's address bar while logged into Salesforce.":
      "So finden Sie Ihre Domäne: Kopieren Sie die URL aus der Adressleiste Ihres Browsers, während Sie bei Salesforce angemeldet sind.",
    "Domain URL": "Domänen-URL",
    "Exiting now will discard all changes. This action cannot be undone.":
      "Wenn Sie jetzt beenden, werden alle Änderungen verworfen. Diese Aktion kann nicht rückgängig gemacht werden.",
    "Exit": "Beenden",
    "Collect logs and data from Alibaba Cloud, a leading cloud computing platform.":
      "Erfassen Sie Protokolle und Daten von Alibaba Cloud, einer führenden Cloud-Computing-Plattform.",
    "Collect logs and data from Amazon Web Services (AWS).": "Erfassen Sie Protokolle und Daten von Amazon Web Services (AWS).",
    "Collect logs and data from Google Cloud Platform (GCP).": "Erfassen Sie Protokolle und Daten von Google Cloud Platform (GCP).",
    "Kubernetes automates deployment, scaling, and management of containerized apps. Connect your clusters by deploying Cortex connectors.":
      "Kubernetes automatisiert die Bereitstellung, Skalierung und Verwaltung containerisierter Anwendungen. Verbinden Sie Ihre Cluster, indem Sie Cortex-Connectors bereitstellen.",
    "Collect logs and data from Azure, Microsoft’s cloud computing platform.":
      "Erfassen Sie Protokolle und Daten von Azure, der Cloud-Computing-Plattform von Microsoft.",
    "Collects logs and data from Office 365 Management Activity API and Microsoft Graph API.":
      "Erfasst Protokolle und Daten über die Office 365 Management Activity API und die Microsoft Graph API.",
    "Collect logs and data from OCI, Oracle’s cloud infrastructure platform.":
      "Erfassen Sie Protokolle und Daten von OCI, der Cloud-Infrastrukturplattform von Oracle.",
    "Salesforce CRM services for data security, identity management, automation, remediation and SaaS Posture Security":
      "Salesforce-CRM-Dienste für Datensicherheit, Identitätsmanagement, Automatisierung, Behebung und SaaS-Sicherheitsstatus",
    "3rd Party AppSec Collector": "Externer AppSec-Collector",
    "Name your collector": "Benennen Sie Ihren Collector",
    "Test file (optional)": "Testdatei (optional)",
    "Create your 3rd Party AppSec Collector": "Erstellen Sie Ihren externen AppSec-Collector",
    "Ingest SARIF output third-party AppSec tools and unify all scan in one central view (applicable for SAST findings)":
      "Erfassen Sie SARIF-Ausgaben von AppSec-Tools von Drittanbietern und fassen Sie alle Scans in einer zentralen Ansicht zusammen (gilt für SAST-Ergebnisse)",
    "What do you need to do": "Was Sie tun müssen",
    "Name your collector instance.": "Benennen Sie Ihre Collector-Instanz.",
    "Generate an API key and integrate the provided API key and URL into your chosen process.":
      "Generieren Sie einen API-Schlüssel und integrieren Sie den bereitgestellten API-Schlüssel und die URL in den von Ihnen gewählten Prozess.",
    "(Optional) Test your SARIF file.": "(Optional) Testen Sie Ihre SARIF-Datei.",
    "Use a clear, descriptive name to identify this collector easily.":
      "Verwenden Sie einen klaren, aussagekräftigen Namen, um diesen Collector leicht zu identifizieren.",
    "Generate Your Secure Ingestion API Key": "Generieren Sie Ihren sicheren Erfassungs-API-Schlüssel",
    "Generate an API key to securely send SARIF results to your collector.":
      "Generieren Sie einen API-Schlüssel, um SARIF-Ergebnisse sicher an Ihren Collector zu senden.",
    "Deprecated. Use ANY.RUN TI Feeds, ANY.RUN TI Lookup, ANY.RUN Cloud Sandbox instead.":
      "Veraltet. Verwenden Sie stattdessen ANY.RUN TI Feeds, ANY.RUN TI Lookup oder ANY.RUN Cloud Sandbox.",
    "Server URL": "Server-URL",
    "Partner Contributed Integration": "Von einem Partner bereitgestellte Integration",
    "Support and maintenance for this integration are provided by the author. Please use the following contact details:":
      "Support und Wartung für diese Integration werden vom Autor bereitgestellt. Verwenden Sie bitte die folgenden Kontaktdaten:",
    "How to configure": "Konfiguration",
    // NOTE: The 5 "How to configure" steps below render each UI term (Settings, Integrations, Add instance,
    // Username, Password, Test) as its own <strong> element, splitting each step's sentence into several text
    // nodes. A single flat-sentence dictionary entry can never match that (translateText() only ever sees one
    // leaf text node at a time), so each step is instead translated fragment-by-fragment here, relying on the
    // already-existing standalone translations of those bolded terms to fill in the bolded parts. The
    // resulting sentences are necessarily a bit more literal than a hand-written translation (DOM order can't
    // be rearranged to match natural word order), but they are fully localized with no English left over.
    "Navigate to": "Navigieren Sie zu",
    // NOTE: the vendor's actual name includes the period ("ANY.RUN"), confirmed from the live page's DOM — a
    // version of this key without the period ("ANYRUN") was tried first based on a hand-copied description and
    // never matched.
    "Search for ANY.RUN.": "Suchen Sie nach ANY.RUN.",
    "to create and configure a new integration instance.": ", um eine neue Integrationsinstanz zu erstellen und zu konfigurieren.",
    "If using API Key authentication method, insert the text": "Wenn Sie die API-Schlüssel-Authentifizierungsmethode verwenden, fügen Sie den Text",
    "into the": "in das Feld",
    "parameter and the API key you have into the": "und den API-Schlüssel, den Sie besitzen, in das Feld",
    "to validate the URLs, token, and connection.": ", um URLs, Token und Verbindung zu überprüfen.",
    // ANY.RUN's actual steps 4-5 ("Insert ANY.RUN API-KEY into the <strong>Password</strong> parameter." /
    // "Please use "ANY.RUN" as username.") turned out to be simpler than the generic Username+Password
    // instructions above — those apply to some other connector's wizard, not this one. Step 5 has no bolded
    // term, so it's a normal flat-sentence entry; step 4 still needs the fragment treatment since "Password" is
    // bolded.
    "Insert ANY.RUN API-KEY into the": "Fügen Sie den ANY.RUN-API-Schlüssel in das Feld",
    // Generic/short fragment, paired specifically with "Insert ANY.RUN API-KEY into the" above (German
    // separable verb "einfügen" — the "ein" particle lands at the end). If a future addition elsewhere needs
    // "parameter." with different phrasing, split this out to a more specific key.
    "parameter.": "ein.",
    "Please use “ANY.RUN” as username.": "Verwenden Sie „ANY.RUN“ als Benutzernamen.",
    "View Integration Documentation": "Integrationsdokumentation anzeigen",
    "Select Content": "Inhalt auswählen",
    "The selected items will automatically be set up. You can add or edit these items later on.":
      "Die ausgewählten Elemente werden automatisch eingerichtet. Sie können diese Elemente später hinzufügen oder bearbeiten.",
    "Customize": "Anpassen",
    "Connecting this data source will automatically install and update any required dependencies.":
      "Durch das Verbinden dieser Datenquelle werden alle erforderlichen Abhängigkeiten automatisch installiert und aktualisiert.",
    "Required Dependencies:": "Erforderliche Abhängigkeiten:",

    // --- Additional wording for the ANY.RUN / Generic AppSec collector wizard pages ---
    "Generic AppSec collector to ingest code scan data": "Generischer AppSec-Collector zum Erfassen von Code-Scan-Daten",
    "ANY.RUN Sandbox is an online interactive sandbox for malware analysis, a tool for detection, monitoring, and research of cyber threats in real time.":
      "ANY.RUN Sandbox ist eine interaktive Online-Sandbox für die Malware-Analyse, ein Tool zur Erkennung, Überwachung und Untersuchung von Cyberbedrohungen in Echtzeit.",
    "New Data Source": "Neue Datenquelle",
    "Root URL": "Stamm-URL",
    "This section explains how to configure the instance of ANY.RUN Cloud Sandbox in Cortex.":
      "In diesem Abschnitt wird erläutert, wie die Instanz von ANY.RUN Cloud Sandbox in Cortex konfiguriert wird.",
    "API-KEY from your ANY.RUN account is required.": "Der API-Schlüssel Ihres ANY.RUN-Kontos ist erforderlich.",

    // --- ARIA Packet Intelligence (partner-contributed integration) instance setup page ---
    "The ARIA Cybesecurity Solutions Software-Defined Security (SDS) platform integrates with Cortex to add robustness when responding to incidents. The combination of ARIA hardware, in the form of a Secure Intelligent Adapter (SIA), and software, specifically Packet Intelligence and SDS orchestrator (SDSo), provides the elements required to react instantly when an incident is detected. When integrated with the ARIA solution, you can create playbooks that instruct one or more SIAs to add, modify, or delete rules automatically. These rule changes, which take effect immediately, can block conversations, redirect packets to a recorder or VLAN, or perform a variety of other actions.":
      "Die Software-Defined-Security-Plattform (SDS) von ARIA Cybersecurity Solutions lässt sich in Cortex integrieren und erhöht die Robustheit bei der Reaktion auf Vorfälle. Die Kombination aus ARIA-Hardware in Form eines Secure Intelligent Adapter (SIA) und Software, insbesondere Packet Intelligence und dem SDS-Orchestrator (SDSo), liefert die Elemente, die erforderlich sind, um bei der Erkennung eines Vorfalls sofort zu reagieren. Bei der Integration mit der ARIA-Lösung können Sie Playbooks erstellen, die einen oder mehrere SIAs anweisen, Regeln automatisch hinzuzufügen, zu ändern oder zu löschen. Diese Regeländerungen, die sofort wirksam werden, können Konversationen blockieren, Pakete an einen Recorder oder ein VLAN umleiten oder eine Vielzahl anderer Aktionen ausführen.",
    "Name should be unique, this name is taken":
      "Der Name muss eindeutig sein; dieser Name ist bereits vergeben",
    "SDSo Base URL (e.g. http://<IP address or FQDN of SDSo Node>:7443)":
      "SDSo-Basis-URL (z. B. http://<IP address or FQDN of SDSo Node>:7443)",
    "Single engine:":
      "Einzelne Engine:",
    "Users should install SDSo onto a server according to the instructions in Software-Defined Security Installation Guide. During the installation process you can determine the IP address or FQDN of your SDSo instance which is used in the SDSo Base URL. You should also install an SIA according to the Secure Intelligent Adapter Installation Guide. For more information on connecting an SDSo and SIA see the Software-Defined Security Orchestrator User Guide. In addition, you must deploy the PI security service to your SIA, see the Packet Intelligence User Guide for more information.":
      "Benutzer sollten SDSo gemäß den Anweisungen im Software-Defined Security Installation Guide auf einem Server installieren. Während der Installation können Sie die IP-Adresse oder den FQDN Ihrer SDSo-Instanz ermitteln, die in der SDSo-Basis-URL verwendet wird. Außerdem sollten Sie einen SIA gemäß dem Secure Intelligent Adapter Installation Guide installieren. Weitere Informationen zum Verbinden von SDSo und SIA finden Sie im Software-Defined Security Orchestrator User Guide. Zusätzlich müssen Sie den PI-Sicherheitsdienst auf Ihrem SIA bereitstellen; weitere Informationen finden Sie im Packet Intelligence User Guide.",
    "No recommendations are available":
      "Keine Empfehlungen verfügbar",

    // --- AWS - EC2 integration instance setup page ---
    // NOTE: the trailing link text "AWS Integrations - Authentication" is a doc title and is intentionally left in English.
    "Amazon Web Services Elastic Compute Cloud (EC2).":
      "Amazon Web Services Elastic Compute Cloud (EC2).",
    "Switch to credentials":
      "Zu Anmeldedaten wechseln",
    "Secret Key":
      "Geheimer Schlüssel",
    "AWS STS Regional Endpoints":
      "Regionale AWS-STS-Endpunkte",
    "Before you can use AWS EC2, you need to perform several configuration steps in your AWS environment.":
      "Bevor Sie AWS EC2 verwenden können, müssen Sie in Ihrer AWS-Umgebung mehrere Konfigurationsschritte durchführen.",
    "Prerequisites":
      "Voraussetzungen",
    "Attach an instance profile with the required permissions to the Cortex server or engine that is running on your AWS environment.":
      "Hängen Sie ein Instanzprofil mit den erforderlichen Berechtigungen an den Cortex-Server oder die Cortex-Engine an, der bzw. die in Ihrer AWS-Umgebung ausgeführt wird.",
    "Instance profile requires minimum permission: sts:AssumeRole.":
      "Das Instanzprofil erfordert als Mindestberechtigung: sts:AssumeRole.",
    "Instance profile requires permission to assume the roles needed by the AWS integrations.":
      "Das Instanzprofil erfordert die Berechtigung, die von den AWS-Integrationen benötigten Rollen zu übernehmen.",
    "Configure AWS Settings":
      "AWS-Einstellungen konfigurieren",
    "Create an IAM Role for the Instance Profile.":
      "Erstellen Sie eine IAM-Rolle für das Instanzprofil.",
    "Attach a Role to the Instance Profile.":
      "Weisen Sie dem Instanzprofil eine Rolle zu.",
    "Configure the Necessary IAM Roles that the AWS Integration Can Assume.":
      "Konfigurieren Sie die erforderlichen IAM-Rollen, die die AWS-Integration übernehmen kann.",
    "For detailed instructions, see the":
      "Detaillierte Anweisungen finden Sie unter",

    // --- AWS - IAM (user lifecycle management) integration instance setup page ---
    "Integrate with AWS's services to execute CRUD and Group operations for employee lifecycle processes.":
      "Integriert sich in AWS-Dienste, um CRUD- und Gruppenoperationen für Prozesse im Mitarbeiter-Lebenszyklus auszuführen.",
    "Base URL":
      "Basis-URL",
    "Authentication Token":
      "Authentifizierungstoken",
    "Allow creating users":
      "Erstellen von Benutzern zulassen",
    "Allow updating users":
      "Aktualisieren von Benutzern zulassen",
    "Allow enabling users":
      "Aktivieren von Benutzern zulassen",
    "Allow disabling users":
      "Deaktivieren von Benutzern zulassen",
    "Automatically create user if not found in update command":
      "Benutzer automatisch erstellen, wenn er im Aktualisierungsbefehl nicht gefunden wird",
    "Incoming Mapper":
      "Eingehender Mapper",

    // --- AWS - Identity and Access Management integration instance setup page ---
    "Amazon Web Services Identity and Access Management (IAM).":
      "Amazon Web Services Identity and Access Management (IAM).",
    "Role Session Name":
      "Rollensitzungsname",

    // --- AWS CodeBuild data-source wizard (Step 1: Add Environment Variables) ---
    "Add Environment Variables":
      "Umgebungsvariablen hinzufügen",
    "Configure Subscription":
      "Abonnement konfigurieren",
    "Before you begin, you'll need to add your API key and API ID to your AWS Secrets Manager. Please copy and use the secret names suggested below as the secret keys. If needed, you can generate a new token using the link below, copy and use the generated values as your secrets values.":
      "Bevor Sie beginnen, müssen Sie Ihren API-Schlüssel und Ihre API-ID zu Ihrem AWS Secrets Manager hinzufügen. Kopieren Sie die unten vorgeschlagenen Secret-Namen und verwenden Sie sie als Secret-Schlüssel. Bei Bedarf können Sie über den unten stehenden Link ein neues Token generieren und die generierten Werte als Ihre Secret-Werte kopieren und verwenden.",
    "Create the following secrets on your AWS Secrets Manager. Ensure that the IAM service role associated with your CodeBuild project has the necessary permissions to read the Cortex API key and key ID from AWS Secrets Manager.":
      "Erstellen Sie die folgenden Secrets in Ihrem AWS Secrets Manager. Stellen Sie sicher, dass die mit Ihrem CodeBuild-Projekt verknüpfte IAM-Servicerolle über die erforderlichen Berechtigungen verfügt, den Cortex-API-Schlüssel und die Schlüssel-ID aus dem AWS Secrets Manager zu lesen.",
    "Choose the architecture your CI tool runs on:":
      "Wählen Sie die Architektur aus, auf der Ihr CI-Tool ausgeführt wird:",
    "Select architecture":
      "Architektur auswählen",

    // --- AWS CodeCommit data-source wizard ---
    // NOTE: the steps below are split by <b>/<button> into several text nodes, so each sentence is translated
    // fragment-by-fragment (DOM order is fixed). AWS console labels / CloudFormation parameter names inside the
    // bold elements (e.g. "CloudFormation > Stacks", "Resource Name Prefix:", "Select Repositories") are left in English.
    "This integration enables you to effectively detect, analyze and remediate security issues.":
      "Mit dieser Integration können Sie Sicherheitsprobleme effektiv erkennen, analysieren und beheben.",
    "Download the":
      "Laden Sie die",
    "CloudFormation template":
      "CloudFormation-Vorlage",
    ", alternatively, copy the link and send it to your administrator for the next steps.":
      " herunter, oder kopieren Sie den Link und senden Sie ihn für die nächsten Schritte an Ihren Administrator.",
    "In your AWS console, navigate to":
      "Navigieren Sie in Ihrer AWS-Konsole zu",
    "Click on":
      "und klicken Sie dann auf",
    ". Upload the template file and hit next. Provide the stack name. Note that the following parameters will be pre populated:":
      ". Laden Sie die Vorlagendatei hoch und klicken Sie auf Next. Geben Sie den Stacknamen an. Beachten Sie, dass die folgenden Parameter vorausgefüllt sind:",
    "You can modify the default value.":
      "Sie können den Standardwert ändern.",
    "DO NOT change this ID.":
      "Ändern Sie diese ID NICHT.",
    "After the stack is created, navigate to":
      "Navigieren Sie nach dem Erstellen des Stacks zu",
    ", and verify that the integration is displayed.":
      ", und überprüfen Sie, ob die Integration angezeigt wird.",
    "Select Repositories: In the":
      "Repositories auswählen: Wählen Sie im Menü",
    "menu choose":
      "die Option",
    "to complete the integration.":
      "aus, um die Integration abzuschließen.",

    // --- AbuseIPDB integration instance setup page ---
    // NOTE: the "A+ ... F" source-reliability scale is the standard option list of the "Source Reliability" dropdown shared by many integrations.
    "Central repository to report and identify IP addresses that have been associated with malicious activity online. Check the Detailed Information section for more information on how to configure the integration.":
      "Zentrales Repository zum Melden und Identifizieren von IP-Adressen, die mit bösartigen Online-Aktivitäten in Verbindung gebracht wurden. Weitere Informationen zur Konfiguration der Integration finden Sie im Abschnitt „Detailinformationen“.",
    "AbuseIP server URL":
      "AbuseIP-Server-URL",
    "API Key (v2)":
      "API-Schlüssel (v2)",
    "Abuse.ch Hunting API URL":
      "Abuse.ch-Hunting-API-URL",
    "Abuse.ch Hunting API Key":
      "Abuse.ch-Hunting-API-Schlüssel",
    "Collect":
      "Erfassen",
    "Source Reliability":
      "Quellenzuverlässigkeit",
    "A+ - 3rd party enrichment":
      "A+ - Anreicherung durch Drittanbieter",
    "A - Completely reliable":
      "A - Vollständig zuverlässig",
    "B - Usually reliable":
      "B - Normalerweise zuverlässig",
    "C - Fairly reliable":
      "C - Ziemlich zuverlässig",
    "D - Not usually reliable":
      "D - Normalerweise nicht zuverlässig",
    "E - Unreliable":
      "E - Unzuverlässig",
    "F - Reliability cannot be judged":
      "F - Zuverlässigkeit kann nicht beurteilt werden",
    "Disable reputation lookups for private IP addresses":
      "Reputationsabfragen für private IP-Adressen deaktivieren",
    "Minimum score threshold":
      "Minimaler Schwellenwert für den Score",
    "Minimum score from AbuseIPDB for the IP to be considered malicious. (Must be above 20).":
      "Minimaler Score von AbuseIPDB, ab dem die IP als bösartig gilt. (Muss über 20 liegen).",
    "Searching an entire subnet far back in time (e.g. Days=365) will likely cause a server timeout, and you will receive a 500 Internal Server Error response from AbuseIPDB server.":
      "Die Suche in einem gesamten Subnetz weit in der Vergangenheit (z. B. Days=365) führt wahrscheinlich zu einem Server-Timeout, und Sie erhalten vom AbuseIPDB-Server eine 500 Internal Server Error-Antwort.",
    "Report Categories":
      "Meldekategorien",
    "Selected items were set up on first connection. You can change these items via the original pages.":
      "Die ausgewählten Elemente wurden bei der ersten Verbindung eingerichtet. Sie können diese Elemente über die ursprünglichen Seiten ändern.",

    // --- Active Directory Query (deprecated) integration instance setup page ---
    "Deprecated. Use the Active Directory Query v2 integration instead.":
      "Veraltet. Verwenden Sie stattdessen die Integration Active Directory Query v2.",
    "Server IP (e.g. 192.168.0.1)":
      "Server-IP (z. B. 192.168.0.1)",
    "Base DN (e.g. DC=domain,DC=com)":
      "Basis-DN (z. B. DC=domain,DC=com)",
    "Security Type (none/ssl/tls)":
      "Sicherheitstyp (none/ssl/tls)",
    "Page Size":
      "Seitengröße",
    "Do not validate server certificate (insecure)":
      "Serverzertifikat nicht validieren (unsicher)",
    "Full path for CA certificate of Active Directory server (type pem)":
      "Vollständiger Pfad des CA-Zertifikats des Active-Directory-Servers (Typ pem)",
    "There are no additional instructions for this integration.":
      "Für diese Integration gibt es keine zusätzlichen Anweisungen.",

    // --- Active Directory Query v2 integration instance setup page ---
    "The Active Directory Query integration enables you to access and manage Active Directory objects (users, contacts, and computers).":
      "Mit der Active-Directory-Query-Integration können Sie auf Active-Directory-Objekte (Benutzer, Kontakte und Computer) zugreifen und diese verwalten.",
    "Server IP address (for example, 192.168.0.1)":
      "Server-IP-Adresse (z. B. 192.168.0.1)",
    "Base DN (for example \"dc=company,dc=com\")":
      "Basis-DN (z. B. „dc=company,dc=com“)",
    "Secure Connection":
      "Sichere Verbindung",
    "Outgoing Mapper":
      "Ausgehender Mapper",
    "Group CN for terminated employees":
      "Gruppen-CN für ausgeschiedene Mitarbeiter",
    "Active Directory search uses paging. You set the page size by specifying the ‘page size’ parameter in the instance settings.":
      "Die Active-Directory-Suche verwendet Paging. Die Seitengröße legen Sie fest, indem Sie in den Instanzeinstellungen den Parameter „Seitengröße“ angeben.",

    // --- Agari Phishing Defense (Partner Contribution) integration instance setup page ---
    // NOTE: the docs sentences are split by inline links into several text nodes, so they are translated
    // fragment-by-fragment ("Quick Start", "this", "page." etc. are link texts / sentence tails).
    "Agari Phishing Defense stops phishing, BEC, and other identity deception attacks that trick employees into harming your business.":
      "Agari Phishing Defense stoppt Phishing, BEC und andere Identitätstäuschungsangriffe, die Mitarbeiter dazu verleiten, Ihrem Unternehmen zu schaden.",
    "URL to connect to Agari":
      "URL für die Verbindung zu Agari",
    "API Key":
      "API-Schlüssel",
    "Fetches issues":
      "Ruft Probleme ab",
    "Maximum number of incidents to fetch every time":
      "Maximale Anzahl der Vorfälle, die jedes Mal abgerufen werden",
    "First fetch time interval":
      "Zeitintervall für den ersten Abruf",
    "Policy action taken":
      "Durchgeführte Richtlinienaktion",
    "Exclude alerts":
      "Warnungen ausschließen",
    "System Alert":
      "Systemwarnung",
    "Fetches policy events as per the filter to limit the amount of data. Can be applied to specific fields.":
      "Ruft Richtlinienereignisse gemäß dem Filter ab, um die Datenmenge zu begrenzen. Kann auf bestimmte Felder angewendet werden.",
    "To use this integration, simply follow the":
      "Um diese Integration zu verwenden, befolgen Sie einfach die Schritte im Abschnitt",
    "Quick Start":
      "Schnellstart",
    "steps to enable API access.":
      "zur Aktivierung des API-Zugriffs.",
    "Contact us":
      "Kontaktieren Sie uns",
    "if you don’t have an Agari account.":
      "(falls Sie kein Agari-Konto haben).",
    "Syntax to filter policy events":
      "Syntax zum Filtern von Richtlinienereignissen",
    "To filter by applying the valid syntax you can refer to":
      "Zum Filtern mit gültiger Syntax können Sie auf",
    "this":
      "diese",
    "page.":
      "Seite verweisen.",

    // --- Akamai WAF integration instance setup page ---
    // NOTE: the link text "Akamai Control Panel" (product console name) is intentionally left in English.
    "Use the Akamai WAF integration to manage common sets of lists used by various Akamai security products and features. This is the modified version where a new command \"akamai-update-network-list-elements\" was added by the SA.":
      "Verwenden Sie die Akamai-WAF-Integration, um gemeinsame Listensätze zu verwalten, die von verschiedenen Akamai-Sicherheitsprodukten und -Funktionen verwendet werden. Dies ist die modifizierte Version, in der der SA einen neuen Befehl „akamai-update-network-list-elements“ hinzugefügt hat.",
    "Server URL (e.g., https://example.net)":
      "Server-URL (z. B. https://example.net)",
    "Client token":
      "Client-Token",
    "Access token":
      "Zugriffstoken",
    "Client secret":
      "Client-Secret",
    "The Network Lists API enables you to manage a common set of lists for use in various Akamai security products such as Kona Site Defender, Web App Protector, and Bot Manager. Network lists are shared sets of IP addresses, CIDR blocks, or broad geographic areas. In addition to managing your own lists, you can also access read-only lists that Akamai dynamically updates for you.":
      "Mit der Network Lists API können Sie einen gemeinsamen Satz von Listen für die Verwendung in verschiedenen Akamai-Sicherheitsprodukten wie Kona Site Defender, Web App Protector und Bot Manager verwalten. Netzwerklisten sind gemeinsam genutzte Sätze von IP-Adressen, CIDR-Blöcken oder großen geografischen Gebieten. Neben der Verwaltung Ihrer eigenen Listen können Sie auch auf schreibgeschützte Listen zugreifen, die Akamai dynamisch für Sie aktualisiert.",
    "To generate API keys go to the":
      "Zum Generieren von API-Schlüsseln gehen Sie zu",
    ". For detailed instructions, see the integration documention.":
      ". Detaillierte Anweisungen finden Sie in der Integrationsdokumentation.",

    // --- Analyst1 (Partner Contribution) integration instance setup page ---
    // NOTE: the docs lists/sentences are split by <b>/<code> into several text nodes, so they are translated
    // fragment-by-fragment. The lone connectors "and" / "or" / "to" between bold items are intentionally NOT registered
    // (too generic: they would also hit AND/OR/To labels elsewhere via the case-insensitive fallback) and stay in English.
    "This integration utilizes Analyst1's system to enrich XSOAR indicators with data provided by the Analyst1 REST API, such as actor and malware information, activity and reported dates, evidence and hit counts, and more.":
      "Diese Integration nutzt das System von Analyst1, um XSOAR-Indikatoren mit Daten der Analyst1-REST-API anzureichern, z. B. Informationen zu Akteuren und Malware, Aktivitäts- und Meldedaten, Nachweise und Trefferzahlen und mehr.",
    "Basic Authentication":
      "Standardauthentifizierung",
    "Client ID/Username":
      "Client-ID/Benutzername",
    "Client Secret/Password":
      "Client-Secret/Passwort",
    "Domain of Analyst1 server to use":
      "Zu verwendende Domäne des Analyst1-Servers",
    "Log Level:":
      "Protokollebene:",
    "Off":
      "Aus",
    "Do not use in CLI by default":
      "Standardmäßig nicht in der CLI verwenden",
    "Risk Score Mapping: Lowest":
      "Risikobewertungszuordnung: Niedrigste",
    "Benign":
      "Harmlos",
    "Risk Score Mapping: Low":
      "Risikobewertungszuordnung: Niedrig",
    "Risk Score Mapping: Moderate":
      "Risikobewertungszuordnung: Mittel",
    "Suspicious":
      "Verdächtig",
    "Risk Score Mapping: High":
      "Risikobewertungszuordnung: Hoch",
    "Risk Score Mapping: Critical":
      "Risikobewertungszuordnung: Kritisch",
    "Risk Score Mapping: Unknown":
      "Risikobewertungszuordnung: Unbekannt",
    "Apply Analyst1 entity-type tags to indicators":
      "Analyst1-Entitätstyp-Tags auf Indikatoren anwenden",
    "Indicator Expiration Method":
      "Ablaufmethode für Indikatoren",
    "Indicator Type":
      "Indikatortyp",
    "Analyst1 Integration Configuration":
      "Analyst1-Integrationskonfiguration",
    "This integration connects XSOAR to the Analyst1 threat intelligence platform to enrich indicators and manage sensor taskings.":
      "Diese Integration verbindet XSOAR mit der Analyst1-Threat-Intelligence-Plattform, um Indikatoren anzureichern und Sensoraufgaben zu verwalten.",
    "Configuration Parameters":
      "Konfigurationsparameter",
    "Server Configuration":
      "Serverkonfiguration",
    "Domain of Analyst1 server":
      "Domäne des Analyst1-Servers",
    ": Enter your Analyst1 server domain in the format":
      ": Geben Sie die Domäne Ihres Analyst1-Servers im folgenden Format ein:",
    "Do not include":
      "Nicht einschließen:",
    "This integration supports two authentication methods. Select one via the":
      "Diese Integration unterstützt zwei Authentifizierungsmethoden. Wählen Sie eine über das Feld",
    "dropdown.":
      "(Dropdown-Liste) aus.",
    "Basic Authentication (default)":
      "Standardauthentifizierung (Standard)",
    "Enter the":
      "Geben Sie",
    "for an Analyst1 account that has the REST role assigned.":
      "für ein Analyst1-Konto ein, dem die REST-Rolle zugewiesen ist.",
    "In Analyst1, create (or open) an API Key.":
      "Erstellen (oder öffnen) Sie in Analyst1 einen API-Schlüssel.",
    "Copy the":
      "Kopieren Sie",
    "Client ID":
      "Client-ID",
    "from the API Key.":
      "aus dem API-Schlüssel.",
    "In XSOAR, set":
      "Legen Sie in XSOAR die Option",
    "Enter the Client ID in the":
      "Geben Sie die Client-ID in das Feld",
    "field and the Client Secret in the":
      "und das Client-Secret in das Feld",
    "field.":
      "ein.",
    "Risk Score Mapping (Optional)":
      "Risikobewertungszuordnung (optional)",
    "The integration includes configurable risk score mapping parameters that control how Analyst1 risk scores map to XSOAR verdicts:":
      "Die Integration enthält konfigurierbare Parameter zur Zuordnung von Risikobewertungen, die steuern, wie Analyst1-Risikobewertungen XSOAR-Verdicts zugeordnet werden:",
    "Lowest":
      "Niedrigste",
    ": Default mapping is Benign":
      ": Standardzuordnung ist Harmlos",
    ": Default mapping is Unknown":
      ": Standardzuordnung ist Unbekannt",
    "Moderate":
      "Mäßig",
    ": Default mapping is Suspicious":
      ": Standardzuordnung ist Verdächtig",
    ": Default mapping is Malicious":
      ": Standardzuordnung ist Bösartig",
    "These can be customized based on your organization’s risk tolerance and threat response procedures.":
      "Diese können an die Risikotoleranz und die Verfahren zur Bedrohungsabwehr Ihrer Organisation angepasst werden.",
    "Entity Type Tags (Optional)":
      "Entitätstyp-Tags (optional)",
    "Enable “Apply Analyst1 entity-type tags to indicators” to automatically tag indicators with Analyst1 entity classifications such as:":
      "Aktivieren Sie „Analyst1-Entitätstyp-Tags auf Indikatoren anwenden“, um Indikatoren automatisch mit Analyst1-Entitätsklassifizierungen zu versehen, wie zum Beispiel:",
    "For assistance with this integration, contact Analyst1 support:":
      "Für Unterstützung bei dieser Integration wenden Sie sich an den Analyst1-Support:",

    // --- Anomali Security Analytics Alerts (Partner Contribution) integration instance setup page ---
    // NOTE: the product title, support email and URL are intentionally left in English.
    "The Anomali Security Analytics pack allows users to manage security alerts by interacting directly with the Anomali Security Analytics platform. It supports creating search jobs, monitoring their status, retrieving results, and updating alert statuses or comments, streamlining integration with Palo Alto XSOAR.":
      "Das Anomali-Security-Analytics-Paket ermöglicht es Benutzern, Sicherheitswarnungen durch direkte Interaktion mit der Anomali-Security-Analytics-Plattform zu verwalten. Es unterstützt das Erstellen von Suchaufträgen, die Überwachung ihres Status, den Abruf von Ergebnissen sowie die Aktualisierung von Warnungsstatus oder Kommentaren und vereinfacht so die Integration mit Palo Alto XSOAR.",
    "Switch to username and password":
      "Zu Benutzername und Passwort wechseln",
    "(Username, API Key)":
      "(Benutzername, API-Schlüssel)",
    "No credentials":
      "Keine Anmeldedaten",
    "Fetch query":
      "Abfrage für den Abruf",
    "Maximum incidents to fetch.":
      "Maximale Anzahl der abzurufenden Incidents.",
    "First fetch time":
      "Zeitpunkt des ersten Abrufs",
    "Incidents Fetch Interval":
      "Abrufintervall für Incidents",
    "To access Anomali Security Analysis Alerts using the API, you must obtain an API key from your Anomali Security Analytics account. Please refer to the Anomali documentation or contact your administrator to get the API credentials. Once obtained, configure the integration by entering the API key in the integration setup page.":
      "Um über die API auf Anomali Security Analysis Alerts zuzugreifen, müssen Sie einen API-Schlüssel aus Ihrem Anomali-Security-Analytics-Konto beziehen. Informationen zum Erhalt der API-Anmeldedaten finden Sie in der Anomali-Dokumentation, oder wenden Sie sich an Ihren Administrator. Nach dem Erhalt konfigurieren Sie die Integration, indem Sie den API-Schlüssel auf der Einrichtungsseite der Integration eingeben.",

    // --- Anomali ThreatStream (Deprecated) integration instance setup page ---
    // NOTE: the product title is intentionally left in English.
    "Deprecated. Use Anomali ThreatStream v3 instead. Use Anomali ThreatStream to query and submit threats":
      "Veraltet. Verwenden Sie stattdessen Anomali ThreatStream v3. Verwenden Sie Anomali ThreatStream, um Bedrohungen abzufragen und zu übermitteln",
    "Server URL (e.g. https://192.168.0.1)":
      "Server-URL (z. B. https://192.168.0.1)",

    // --- Anomali ThreatStream Feed integration instance setup page ---
    // NOTE: the product title and the doc URL are intentionally left in English. The last key is the text node before the
    // <a> link ("register at <link>."), so its translation has no trailing punctuation (the "." after the link is a separate node).
    "Use the Anomali ThreatStream Feed Integration to fetch indicators from the Anomali ThreatStream.":
      "Verwenden Sie die Integration Anomali ThreatStream Feed, um Indikatoren aus Anomali ThreatStream abzurufen.",
    "Server URL (e.g., https://www.test.com)":
      "Server-URL (z. B. https://www.test.com)",
    "Fetches indicators":
      "Ruft Indikatoren ab",
    "Classifier":
      "Klassifizierer",
    "Mapper (incoming)":
      "Mapper (eingehend)",
    "Fetch by":
      "Abrufen nach",
    "Modified Time":
      "Änderungszeit",
    "Feed Fetch Interval":
      "Abrufintervall für den Feed",
    "Anomali ThreatStream Feed Integration Help":
      "Hilfe zur Integration Anomali ThreatStream Feed",
    "Anomali ThreatStream is a leading threat intelligence platform designed to help organizations collect, analyze, and act on vast amounts of threat data. This integration allows you to automatically fetch Indicators of Compromise (IOCs) such as IPs, domains, URLs, and file hashes directly into your security operations platform, enhancing your ability to detect and respond to cyber threats.":
      "Anomali ThreatStream ist eine führende Threat-Intelligence-Plattform, die Organisationen dabei unterstützt, große Mengen an Bedrohungsdaten zu sammeln, zu analysieren und darauf zu reagieren. Mit dieser Integration können Sie Indicators of Compromise (IOCs) wie IPs, Domänen, URLs und Datei-Hashes automatisch direkt in Ihre Security-Operations-Plattform abrufen und so Ihre Fähigkeit verbessern, Cyberbedrohungen zu erkennen und darauf zu reagieren.",
    "How to Configure Your Integration":
      "So konfigurieren Sie Ihre Integration",
    "API Key: Paste the API key you retrieved from your Anomali ThreatStream account into this field. To access ThreatStream using the API, you need a user ID and API key. To get these credentials, register at":
      "API-Schlüssel: Fügen Sie den API-Schlüssel, den Sie von Ihrem Anomali-ThreatStream-Konto abgerufen haben, in dieses Feld ein. Um über die API auf ThreatStream zuzugreifen, benötigen Sie eine Benutzer-ID und einen API-Schlüssel. Um diese Anmeldedaten zu erhalten, registrieren Sie sich unter",

    // --- Anomali ThreatStream Feed: additions (per-sentence halves of the two docs paragraphs, in case the paragraph is split
    // into separate text nodes at the line break; plus title/data-tooltip attribute strings: tooltips, "Go to ..." button, clear icon) ---
    "Anomali ThreatStream is a leading threat intelligence platform designed to help organizations collect, analyze, and act on vast amounts of threat data.":
      "Anomali ThreatStream ist eine führende Threat-Intelligence-Plattform, die Organisationen dabei unterstützt, große Mengen an Bedrohungsdaten zu sammeln, zu analysieren und darauf zu reagieren.",
    "This integration allows you to automatically fetch Indicators of Compromise (IOCs) such as IPs, domains, URLs, and file hashes directly into your security operations platform, enhancing your ability to detect and respond to cyber threats.":
      "Mit dieser Integration können Sie Indicators of Compromise (IOCs) wie IPs, Domänen, URLs und Datei-Hashes automatisch direkt in Ihre Security-Operations-Plattform abrufen und so Ihre Fähigkeit verbessern, Cyberbedrohungen zu erkennen und darauf zu reagieren.",
    "API Key: Paste the API key you retrieved from your Anomali ThreatStream account into this field.":
      "API-Schlüssel: Fügen Sie den API-Schlüssel, den Sie von Ihrem Anomali-ThreatStream-Konto abgerufen haben, in dieses Feld ein.",
    "To access ThreatStream using the API, you need a user ID and API key. To get these credentials, register at":
      "Um über die API auf ThreatStream zuzugreifen, benötigen Sie eine Benutzer-ID und einen API-Schlüssel. Um diese Anmeldedaten zu erhalten, registrieren Sie sich unter",
    "Classifier determines the type of issue that is created for events ingested from this integration instance.":
      "Der Klassifizierer bestimmt den Typ des Problems, das für Ereignisse erstellt wird, die von dieser Integrationsinstanz aufgenommen werden.",
    "Mapping determines how event fields are mapped to the Cortex CLOUD issue's fields.":
      "Das Mapping legt fest, wie Ereignisfelder den Feldern des Cortex-CLOUD-Problems zugeordnet werden.",
    "Go to Classification & Mapping page":
      "Zur Seite „Klassifizierung und Mapping“ wechseln",
    "Cancel Selection":
      "Auswahl abbrechen",

    // --- Anomali ThreatStream v2 (Deprecated) integration instance setup page ---
    // NOTE: the product title is intentionally left in English. The docs paragraph is already registered (ThreatStream Feed page).
    "Deprecated. Use Anomali ThreatStream v3 integration instead.":
      "Veraltet. Verwenden Sie stattdessen die Integration Anomali ThreatStream v3.",
    "Threshold of the indicator.":
      "Schwellenwert des Indikators.",

    // --- Anomali ThreatStream v3 integration instance setup page ---
    // NOTE: product title / doc h1 / URL are intentionally left in English. The docs paragraph is split by inline <span>s and by line
    // breaks, so it is registered line-by-line and fragment-by-fragment ("If the indicator" + "confidence" + "...").
    // "confidence" is a generic one-word key: the case-insensitive fallback will also translate a standalone "Confidence" elsewhere.
    "Use Anomali ThreatStream to query and submit threats.":
      "Verwenden Sie Anomali ThreatStream, um Bedrohungen abzufragen und zu übermitteln.",
    "Default DBOT score for indicators with low confidence":
      "Standard-DBOT-Score für Indikatoren mit geringer Konfidenz",
    "Remote API":
      "Remote-API",
    "URL threshold":
      "URL-Schwellenwert",
    "IP threshold":
      "IP-Schwellenwert",
    "Domain threshold":
      "Domänen-Schwellenwert",
    "File threshold":
      "Datei-Schwellenwert",
    "Email threshold":
      "E-Mail-Schwellenwert",
    "Include inactive results":
      "Inaktive Ergebnisse einbeziehen",
    "Create relationships":
      "Beziehungen erstellen",
    "Configure Indicator Threshold Parameters":
      "Schwellenwertparameter für Indikatoren konfigurieren",
    "Each indicator has a threshold parameter that impacts the indicator’s DBotScore calculation.":
      "Jeder Indikator hat einen Schwellenwertparameter, der die DBotScore-Berechnung des Indikators beeinflusst.",
    "The indicator DBotScore is calculated based on the threshold parameter as follows:":
      "Der DBotScore des Indikators wird anhand des Schwellenwertparameters wie folgt berechnet:",
    "If the indicator":
      "Wenn der Wert für",
    "confidence":
      "Konfidenz",
    "value is above the threshold parameter value, the Score is set to 3 (Malicious)":
      "des Indikators über dem Wert des Schwellenwertparameters liegt, wird der Score auf 3 (bösartig) gesetzt",
    "Otherwise the DBotScore is set to 1 (Good).":
      "Andernfalls wird der DBotScore auf 1 (gut) gesetzt.",
    "If the threshold parameter value is not specified, the DBotScore is calculated as follows:":
      "Wenn der Wert des Schwellenwertparameters nicht angegeben ist, wird der DBotScore wie folgt berechnet:",
    "> 65, the DBotScore value is set to 3 (Malicious).":
      "größer als 65 ist, wird der DBotScore-Wert auf 3 (bösartig) gesetzt.",
    "is between 25 and 65, the DBotScore value is set to 2 (Suspicious).":
      "zwischen 25 und 65 liegt, wird der DBotScore-Wert auf 2 (verdächtig) gesetzt.",
    "< 25, the DBotScore value is set to 1 (Good).":
      "kleiner als 25 ist, wird der DBotScore-Wert auf 1 (gut) gesetzt.",

    // --- Batch: strings reported as still untranslated (user list) + Apollo.io SSPM connector wizard ---
    // NOTE: multi-line doc paragraphs (AbuseIPDB / Akamai) are registered LINE-BY-LINE here in addition to the joined forms above,
    // because the live DOM exposes them as separate lines/text nodes; each line translation concatenates naturally.
    // "Previous" is a generic one-word key (also reached through the case-insensitive fallback).
    "TI Lookup is a searchable database of IOCs, IOAs, IOBs, and events for threat hunting and a service for browsing malicious files by their content.":
      "TI Lookup ist eine durchsuchbare Datenbank mit IOCs, IOAs, IOBs und Ereignissen für die Bedrohungssuche sowie ein Dienst zum Durchsuchen bösartiger Dateien anhand ihres Inhalts.",
    "You have unsaved changes.":
      "Sie haben nicht gespeicherte Änderungen.",
    "Are you sure you want to leave?":
      "Möchten Sie die Seite wirklich verlassen?",
    "Previous":
      "Zurück",
    "Use the following sample as a reference for buildspec.yaml configuration:":
      "Verwenden Sie das folgende Beispiel als Referenz für die buildspec.yaml-Konfiguration:",
    "Integrate Application Security with your AWS CodeBuild to gain comprehensive visibility into your CodeBuild platform.":
      "Integrieren Sie Application Security in Ihr AWS CodeBuild, um umfassende Transparenz über Ihre CodeBuild-Plattform zu erhalten.",
    "Integrate Application Security with your AWS CodeCommit to gain comprehensive visibility into your CodeCommit platform.":
      "Integrieren Sie Application Security in Ihr AWS CodeCommit, um umfassende Transparenz über Ihre CodeCommit-Plattform zu erhalten.",
    "Searching an entire subnet far back in time (e.g. Days=365) will likely cause a server timeout,":
      "Die Suche in einem gesamten Subnetz weit in der Vergangenheit (z. B. Days=365) führt wahrscheinlich zu einem Server-Timeout,",
    "and you will receive a 500 Internal Server Error response from AbuseIPDB server.":
      "und Sie erhalten vom AbuseIPDB-Server eine Antwort 500 Internal Server Error.",
    "The Network Lists API enables you to manage a common set of lists for use in various Akamai security products such as":
      "Die Network Lists API ermöglicht es Ihnen, eine gemeinsame Gruppe von Listen für die Verwendung in verschiedenen Akamai-Sicherheitsprodukten wie",
    "Kona Site Defender, Web App Protector, and Bot Manager.":
      "Kona Site Defender, Web App Protector und Bot Manager zu verwalten.",
    "Network lists are shared sets of IP addresses, CIDR blocks, or broad geographic areas. In addition to managing your":
      "Netzwerklisten sind gemeinsam genutzte Gruppen von IP-Adressen, CIDR-Blöcken oder großen geografischen Bereichen. Zusätzlich zur Verwaltung Ihrer",
    "own lists, you can also access read-only lists that Akamai dynamically updates for you.":
      "eigenen Listen können Sie auch auf schreibgeschützte Listen zugreifen, die Akamai dynamisch für Sie aktualisiert.",
    "Collects generic data from Amazon Simple Storage Service (Amazon S3).":
      "Sammelt generische Daten aus Amazon Simple Storage Service (Amazon S3).",
    "There are some unsaved changes":
      "Es gibt nicht gespeicherte Änderungen",
    "Are you sure you want to close this window?":
      "Möchten Sie dieses Fenster wirklich schließen?",
    "No, take me back":
      "Nein, zurück",
    "Yes, I am sure":
      "Ja, ich bin sicher",
    "To access ThreatStream using the API, you need a user ID and API key. To get these credentials, register at http://ui.threatstream.com.":
      "Um über die API auf ThreatStream zuzugreifen, benötigen Sie eine Benutzer-ID und einen API-Schlüssel. Um diese Anmeldedaten zu erhalten, registrieren Sie sich unter http://ui.threatstream.com.",
    "Confidence Threshold":
      "Konfidenzschwellenwert",
    "Detect, monitor and alert on settings of your SaaS application.":
      "Erkennen, überwachen und alarmieren Sie bei Einstellungen Ihrer SaaS-Anwendung.",
    "Instance URL":
      "Instanz-URL",
    "Security Posture":
      "Sicherheitslage",
    "The Apollo.io API base URL. This is typically https://api.apollo.io for all accounts.":
      "Die Basis-URL der Apollo.io-API. Dies ist für alle Konten in der Regel https://api.apollo.io.",
    "Your Apollo.io API key. Navigate to Settings → Integrations → API in your Apollo.io account to generate one. SSPM requires this key to authenticate to the Apollo.io API.":
      "Ihr Apollo.io-API-Schlüssel. Navigieren Sie in Ihrem Apollo.io-Konto zu Einstellungen → Integrationen → API, um einen zu generieren. SSPM benötigt diesen Schlüssel zur Authentifizierung bei der Apollo.io-API.",

    // --- Batch: strings from the Collector export (Jira / Asimily Insight docs, marketplace card descriptions, SVG icon titles) ---
    // Fragments (", found on ...", ": Enable to ...", "Leave the" etc.) are registered as-is because the live DOM splits sentences at inline elements.
    // Jira terminology follows Jira own localisation (ja 課題 / es incidencias / fr tickets / de Vorgänge); Cortex "incident" keeps the Cortex term.
    "- Enter the API token. To generate an API token, see":
      "- Geben Sie das API-Token ein. Informationen zum Erstellen eines API-Tokens finden Sie unter",
    "- Enter your user email.":
      "- Geben Sie Ihre Benutzer-E-Mail-Adresse ein.",
    "– Represents anomaly alerts.":
      "– Steht für Anomaliewarnungen.",
    "– Represents vulnerabilities.":
      "– Steht für Schwachstellen.",
    ", found on the left side menu.":
      ", das Sie im linken Seitenmenü finden.",
    ", which are required in the configuration screen. Copy these values and paste them into the respective fields in the configuration screen.":
      ", die auf dem Konfigurationsbildschirm erforderlich sind. Kopieren Sie diese Werte und fügen Sie sie in die entsprechenden Felder auf dem Konfigurationsbildschirm ein.",
    ", which will be used to integrate Cortex with Jira:":
      ", der zur Integration von Cortex mit Jira verwendet wird:",
    ": Asimily API user credentials. To create a new user, go to":
      ": Anmeldedaten des Asimily-API-Benutzers. Um einen neuen Benutzer zu erstellen, gehen Sie zu",
    ": Base URL of the Asimily Insight portal. Format:":
      ": Basis-URL des Asimily-Insight-Portals. Format:",
    ": Choose a log level from the dropdown.":
      ": Wählen Sie im Dropdown-Menü eine Protokollebene aus.",
    ": Default Classifier and Mapper provided as":
      ": Standard-Klassifizierer und -Mapper, bereitgestellt als",
    ": Enable to fetch anomaly alerts.":
      ": Aktivieren, um Anomaliewarnungen abzurufen.",
    ": Enable to fetch device vulnerability incidents.":
      ": Aktivieren, um Incidents zu Gerätesicherheitslücken abzurufen.",
    ": Enable to fetch incidents from Asimily Insight into Cortex.":
      ": Aktivieren, um Incidents aus Asimily Insight in Cortex abzurufen.",
    ": Filter to only fetch anomalies of the selected criticality.":
      ": Filtert, sodass nur Anomalien mit der ausgewählten Kritikalität abgerufen werden.",
    ": Filter to only fetch CVEs above the specified score threshold.":
      ": Filtert, sodass nur CVEs oberhalb des angegebenen Schwellenwerts abgerufen werden.",
    ": Only fetch incidents for devices with specified tags.":
      ": Ruft nur Incidents für Geräte mit den angegebenen Tags ab.",
    ": Only fetch incidents for specified device families.":
      ": Ruft nur Incidents für die angegebenen Gerätefamilien ab.",
    ": Set how often incidents should be fetched (e.g.,":
      ": Legt fest, wie oft Incidents abgerufen werden (z. B.,",
    ". The OProxy URL is a client side web page that provides an easy interface to copy the authorization code from the response to the integration configuration during the authorization flow. Optionally, if you don’t want to use the OProxy URL, you can use a localhost URL on an unused local port, for example:":
      ". Die OProxy-URL ist eine clientseitige Webseite, die während des Autorisierungsablaufs eine einfache Oberfläche zum Kopieren des Autorisierungscodes aus der Antwort in die Integrationskonfiguration bereitstellt. Wenn Sie die OProxy-URL nicht verwenden möchten, können Sie optional eine localhost-URL an einem nicht verwendeten lokalen Port verwenden, zum Beispiel:",
    ". You will then need to copy the code from the URL address bar in the response.":
      ". Anschließend müssen Sie den Code aus der URL-Adressleiste in der Antwort kopieren.",
    "(Client ID, Client Secret)":
      "(Client-ID, Client-Secret)",
    "(Personal Access Token)":
      "(persönliches Zugriffstoken)",
    ") that will drop incoming incidents if it is a duplicate. It will search all past incidents with all status. The script can be used for configuring Pre-Process Rules to avoid duplication.":
      "), das eingehende Incidents verwirft, wenn sie Duplikate sind. Es durchsucht alle früheren Incidents mit allen Status. Das Skript kann zum Konfigurieren von Vorverarbeitungsregeln verwendet werden, um Duplikate zu vermeiden.",
    "), this means there may be new devices included to fetch incidents or there will be new incidents included for existing devices. It is strongly recommended to":
      "), bedeutet dies, dass möglicherweise neue Geräte für den Incident-Abruf hinzugekommen sind oder neue Incidents für vorhandene Geräte enthalten sein werden. Es wird dringend empfohlen,",
    "1. Basic Authentication:":
      "1. Standardauthentifizierung:",
    "3. Private Access Token":
      "3. Privates Zugriffstoken",
    "a. Click":
      "a. Klicken Sie auf",
    "b. Click":
      "b. Klicken Sie auf",
    "Add comments":
      "Kommentare hinzufügen",
    "Add User":
      "Benutzer hinzufügen",
    "Admin page":
      "Admin-Seite",
    "and follow the steps.":
      "und folgen Sie den Schritten.",
    "API token (Deprecated)":
      "API-Token (veraltet)",
    "API token (Recommended)":
      "API-Token (empfohlen)",
    "API User Name":
      "API-Benutzername",
    "API Username":
      "API-Benutzername",
    "Application link":
      "Anwendungslink",
    "Application links":
      "Anwendungslinks",
    "As of June 2019, Basic authentication with passwords for Jira is no longer supported, please use basic authentication using API Token or use OAuth 1.0. To use basic authentication, follow":
      "Seit Juni 2019 wird die Standardauthentifizierung mit Passwörtern für Jira nicht mehr unterstützt. Verwenden Sie bitte die Standardauthentifizierung mit einem API-Token oder OAuth 1.0. Um die Standardauthentifizierung zu verwenden, folgen Sie",
    "Asimily Insight Integration":
      "Asimily-Insight-Integration",
    "Asimily Portal URL":
      "Asimily-Portal-URL",
    "Authentication Methods":
      "Authentifizierungsmethoden",
    "Authorization code":
      "Autorisierungscode",
    "AutoFocus documentation":
      "AutoFocus-Dokumentation",
    "Azure Resource Graph integration is designed to allow for executing Azure Resource Graph commands, like querying resource data.":
      "Die Azure-Resource-Graph-Integration ist dafür ausgelegt, die Ausführung von Azure-Resource-Graph-Befehlen zu ermöglichen, etwa zum Abfragen von Ressourcendaten.",
    "Azure Risky Users provides access to all at-risk users and risk detections in the Azure AD environment.":
      "Azure Risky Users bietet Zugriff auf alle gefährdeten Benutzer und Risikoerkennungen in der Azure-AD-Umgebung.",
    "back icon":
      "Zurück-Symbol",
    "cases and issues icon":
      "Symbol für Fälle und Probleme",
    "dashboards reports icon":
      "Symbol für Dashboards und Berichte",
    "favorites icon":
      "Favoriten-Symbol",
    "help icon":
      "Hilfe-Symbol",
    "inventory icon":
      "Inventarsymbol",
    "investigation response icon":
      "Symbol für Untersuchung und Reaktion",
    "lock filled icon":
      "Symbol für gefülltes Schloss",
    "modules icon":
      "Modulsymbol",
    "notification bell icon":
      "Symbol für Benachrichtigungsglocke",
    "posture management icon":
      "Symbol für Sicherheitslagenverwaltung",
    "resize handle icon":
      "Symbol für Größenänderungsziehpunkt",
    "settings icon":
      "Einstellungssymbol",
    "tenent navigator icon":
      "Symbol für Tenant-Navigator",
    "threat management icon":
      "Symbol für Bedrohungsverwaltung",
    "Basic Authentication permissions":
      "Berechtigungen für die Standardauthentifizierung",
    "Brandefense is a Cyber Intelligence Platform that responds directly and effectively to today's complex cyber threats.":
      "Brandefense ist eine Cyber-Intelligence-Plattform, die direkt und wirksam auf die komplexen Cyberbedrohungen von heute reagiert.",
    "Browse projects":
      "Projekte durchsuchen",
    "By default, the key expires one week from today. If you’d like to change the expiration date, pick a new date under Expires on. You’re unable to select a date longer than a year from the date of creation.":
      "Standardmäßig läuft der Schlüssel eine Woche ab heute ab. Wenn Sie das Ablaufdatum ändern möchten, wählen Sie unter Expires on ein neues Datum aus. Es kann kein Datum gewählt werden, das mehr als ein Jahr nach dem Erstellungsdatum liegt.",
    "Bypass exclusion list":
      "Ausschlussliste umgehen",
    "Callback URL":
      "Callback-URL",
    "Classic Scopes":
      "Klassische Scopes",
    "Classifier and Mapper":
      "Klassifizierer und Mapper",
    "Classifiers & Mappers":
      "Klassifizierer und Mapper",
    "Click Create API key in the top right.":
      "Klicken Sie oben rechts auf Create API key.",
    "Click Create to save the API key.":
      "Klicken Sie auf Create, um den API-Schlüssel zu speichern.",
    "Click Done and you’ll see the key in your list of API keys.":
      "Klicken Sie auf Done, und der Schlüssel wird in Ihrer Liste der API-Schlüssel angezeigt.",
    "Click the Jira Administration tab (the gear icon found in the top right corner) and click":
      "Klicken Sie auf die Registerkarte Jira Administration (das Zahnradsymbol in der oberen rechten Ecke) und klicken Sie auf",
    "Client ID, Client Secret":
      "Client-ID, Client-Secret",
    "Cloud authentication":
      "Cloud-Authentifizierung",
    "Cloud ID of your Jira instance (See below)":
      "Cloud-ID Ihrer Jira-Instanz (siehe unten)",
    "Cloud Scopes":
      "Cloud-Scopes",
    "Collects logs from Microsoft Azure Event Hub.":
      "Erfasst Protokolle aus Microsoft Azure Event Hub.",
    "Comment entry tag":
      "Tag für Kommentareinträge",
    "Configure Pre-Process Rules":
      "Vorverarbeitungsregeln konfigurieren",
    "Configure the integration":
      "Integration konfigurieren",
    "Configure your Jira instance based on the type of your deployment:":
      "Konfigurieren Sie Ihre Jira-Instanz entsprechend Ihrem Bereitstellungstyp:",
    "Consumer key (OAuth 1.0)":
      "Consumer-Schlüssel (OAuth 1.0)",
    "Copy the generated Authorization code into the integration instance and save the integration instance.":
      "Kopieren Sie den generierten Autorisierungscode in die Integrationsinstanz und speichern Sie die Integrationsinstanz.",
    "Copy the values for your Organization ID and API key. You’ll need those to access your organization later.":
      "Kopieren Sie die Werte für Ihre Organisations-ID und Ihren API-Schlüssel. Sie benötigen diese, um später auf Ihre Organisation zuzugreifen.",
    "Create and Manage Azure Virtual Machines.":
      "Erstellen und verwalten Sie virtuelle Azure-Computer.",
    "Create attachments":
      "Anhänge erstellen",
    "Create issues":
      "Vorgänge erstellen",
    "Delete issues":
      "Vorgänge löschen",
    "Deprecated. No available replacement.":
      "Veraltet. Es ist kein Ersatz verfügbar.",
    "Deprecated. Use the Atlassian Jira v3 integration instead":
      "Veraltet. Verwenden Sie stattdessen die Integration Atlassian Jira v3",
    "Deprecated. Use the Check Point Firewall v2 integration instead. Manage Check Point firewall via API":
      "Veraltet. Verwenden Sie stattdessen die Integration Check Point Firewall v2. Verwalten Sie die Check-Point-Firewall über die API",
    "Deprecated. Use the VMware Carbon Black App Control v2 integration instead.":
      "Veraltet. Verwenden Sie stattdessen die Integration VMware Carbon Black App Control v2.",
    "Deprecated. Use the VMware Carbon Black EDR integration instead.":
      "Veraltet. Verwenden Sie stattdessen die Integration VMware Carbon Black EDR.",
    "Deprecated. Use Unit 42 Feed integration instead.":
      "Veraltet. Verwenden Sie stattdessen die Integration Unit 42 Feed.",
    "Deprecated. Use Unit 42 Intel Objects Feed instead. Use the AutoFocus Tags Feed integration to fetch indicators from AutoFocus Tags.":
      "Veraltet. Verwenden Sie stattdessen Unit 42 Intel Objects Feed. Verwenden Sie die Integration AutoFocus Tags Feed, um Indikatoren aus AutoFocus Tags abzurufen.",
    "Developer console":
      "Entwicklerkonsole",
    "Device Family Filter":
      "Gerätefamilienfilter",
    "Device Family Filter for Fetch Operation":
      "Gerätefamilienfilter für den Abrufvorgang",
    "Device Tags Filter":
      "Gerätetag-Filter",
    "Device Tags Filter for Fetch Operation":
      "Gerätetag-Filter für den Abrufvorgang",
    "Directory ID":
      "Verzeichnis-ID",
    "Edit issues":
      "Vorgänge bearbeiten",
    "Enable/Disable CRUD Commands":
      "CRUD-Befehle aktivieren/deaktivieren",
    "Ensure that you possess the necessary permissions by navigating to":
      "Stellen Sie sicher, dass Sie über die erforderlichen Berechtigungen verfügen, indem Sie zu folgender Stelle navigieren:",
    "Enter a name that you’ll remember to identify the API key.":
      "Geben Sie einen Namen ein, den Sie sich merken können, um den API-Schlüssel zu identifizieren.",
    "External application":
      "Externe Anwendung",
    "Fetch Anomaly Alerts":
      "Anomaliewarnungen abrufen",
    "Fetch Anomaly Criticality":
      "Abzurufende Anomalie-Kritikalität",
    "Fetch attachments":
      "Anhänge abrufen",
    "Fetch comments":
      "Kommentare abrufen",
    "Fetch CVE Score":
      "Abzurufender CVE-Score",
    "Fetch Device CVEs":
      "Geräte-CVEs abrufen",
    "Fetch incidents":
      "Incidents abrufen",
    "Fetching incidents by creation time (using the Created field), instead of using IDs, is done by checking the “Use created field to fetch incidents” checkbox.":
      "Das Abrufen von Incidents nach Erstellungszeit (über das Feld Created) anstelle von IDs erfolgt, indem Sie das Kontrollkästchen „Erstellungsfeld zum Abrufen von Incidents verwenden“ aktivieren.",
    "fields empty and fill in the following fields:":
      "leer und füllen Sie die folgenden Felder aus:",
    "File entry tag":
      "Tag für Dateieinträge",
    "Fill in the required details as explained in the page, by inserting a":
      "Füllen Sie die erforderlichen Details wie auf der Seite beschrieben aus, indem Sie Folgendes einfügen:",
    "Fill in the required fields:":
      "Füllen Sie die Pflichtfelder aus:",
    "For both instances (Cloud ID & OnPrem), use the":
      "Verwenden Sie für beide Instanzen (Cloud-ID und OnPrem) Folgendes:",
    "For fetching incidents, please update the query param according to":
      "Aktualisieren Sie zum Abrufen von Incidents den Abfrageparameter gemäß",
    "For more information see the":
      "Weitere Informationen finden Sie unter",
    "from the Playground and follow its instructions.":
      "im Playground aus und folgen Sie den Anweisungen.",
    "from the Playground to verify that everything is configured correctly.":
      "im Playground aus, um zu überprüfen, ob alles korrekt konfiguriert ist.",
    "From your organization at admin.atlassian.com:":
      "Von Ihrer Organisation unter admin.atlassian.com:",
    "Gets Daily Threat Feed from AutoFocus.":
      "Ruft den täglichen Bedrohungs-Feed von AutoFocus ab.",
    "Go to the integration instance configuration.":
      "Wechseln Sie zur Konfiguration der Integrationsinstanz.",
    "Granular Scopes":
      "Granulare Scopes",
    "High Only":
      "Nur hoch",
    "If you modify any of the fetch filters (":
      "Wenn Sie einen der Abruffilter ändern (",
    "If you wish the first run to start from a specific time, use “Issue index to start fetching incidents from” param.":
      "Wenn die erste Ausführung zu einem bestimmten Zeitpunkt beginnen soll, verwenden Sie den Parameter „Vorgangsindex, ab dem Incidents abgerufen werden“.",
    "Incident Fetch Interval":
      "Abrufintervall für Incidents",
    "Incident Types":
      "Incident-Typen",
    "Incoming":
      "Eingehend",
    "Indicator Reputation":
      "Indikator-Reputation",
    "Insert the generated token in the":
      "Fügen Sie das generierte Token ein in",
    "Integrate Asimily Insight to ingest security anomalies, CVEs, and leverage detailed asset data for streamlined incident investigation.":
      "Integrieren Sie Asimily Insight, um Sicherheitsanomalien und CVEs aufzunehmen und detaillierte Asset-Daten für eine effizientere Incident-Untersuchung zu nutzen.",
    "Integrate Checkmarx to gain a unified overview of your application security posture.":
      "Integrieren Sie Checkmarx, um einen einheitlichen Überblick über die Sicherheitslage Ihrer Anwendungen zu erhalten.",
    "Integrate with Atlassian's services to execute CRUD operations for employee lifecycle processes.":
      "Integrieren Sie die Dienste von Atlassian, um CRUD-Vorgänge für Lebenszyklusprozesse von Mitarbeitern auszuführen.",
    "Issue Field to fetch by":
      "Vorgangsfeld für den Abruf",
    "Issue index to start fetching incidents from":
      "Vorgangsindex, ab dem Incidents abgerufen werden",
    "Jira URL, for example: https://demisto.atlassian.net/":
      "Jira-URL, zum Beispiel: https://demisto.atlassian.net/",
    "JQL documentation":
      "JQL-Dokumentation",
    "Leave empty":
      "Leer lassen",
    "Leave the":
      "Lassen Sie die Felder",
    "Link issues":
      "Vorgänge verknüpfen",
    "Locate permissions for the tasks listed below:":
      "Suchen Sie die Berechtigungen für die unten aufgeführten Aufgaben:",
    "Log Analytics is a service that helps you collect and analyze data generated by resources in your cloud and on-premises environments.":
      "Log Analytics ist ein Dienst, der Sie beim Erfassen und Analysieren von Daten unterstützt, die von Ressourcen in Ihren Cloud- und lokalen Umgebungen generiert werden.",
    "Log in to Jira as a user with":
      "Melden Sie sich bei Jira als Benutzer an, der über Folgendes verfügt:",
    "Log Level":
      "Protokollebene",
    "Manage Binalyze AIR forensic acquisition, endpoint isolation, triage, cases, tasks, assets, repositories, and evidence artifacts from Cortex.":
      "Verwalten Sie von Cortex aus die forensische Erfassung, Endpunktisolierung, Triage, Fälle, Aufgaben, Assets, Repositories und Beweisartefakte von Binalyze AIR.",
    "Max incidents per fetch":
      "Maximale Anzahl an Incidents pro Abruf",
    "Mirror incoming incidents":
      "Eingehende Incidents spiegeln",
    "Mirror outgoing incidents":
      "Ausgehende Incidents spiegeln",
    "Notifies you if login credentials to your company are being sold on the dark web.":
      "Benachrichtigt Sie, wenn Anmeldedaten Ihres Unternehmens im Darknet verkauft werden.",
    "OAuth 2.0 integration":
      "OAuth-2.0-Integration",
    "on the Asimily Insight portal.":
      "(im Asimily-Insight-Portal).",
    "on the left side bar. Your Cloud ID will appear in the URL:":
      "in der linken Seitenleiste. Ihre Cloud-ID wird in der URL angezeigt:",
    "Once the link is created, you will be able to see":
      "Sobald die Verknüpfung erstellt wurde, können Sie Folgendes sehen:",
    "Onboard your Azure DevOps SaaS to the Cortex Application Security module to gain comprehensive visibility into your Azure DevOps platform assets and scan your repositories’ code, configurations, and CI/CD pipelines for security issues.":
      "Binden Sie Ihr Azure DevOps SaaS in das Modul Cortex Application Security ein, um umfassende Transparenz über die Assets Ihrer Azure-DevOps-Plattform zu erhalten und den Code, die Konfigurationen und die CI/CD-Pipelines Ihrer Repositories auf Sicherheitsprobleme zu prüfen.",
    "Onboard your Bitbucket Data Center on-prem to the Cortex Application Security module to gain comprehensive visibility into your Bitbucket Data Center platform assets and scan your repositories’ code for security issues.":
      "Binden Sie Ihr lokales Bitbucket Data Center in das Modul Cortex Application Security ein, um umfassende Transparenz über die Assets Ihrer Bitbucket-Data-Center-Plattform zu erhalten und den Code Ihrer Repositories auf Sicherheitsprobleme zu prüfen.",
    "Onboard your Bitbucket SaaS to the Cortex Application Security module to gain comprehensive visibility into your Bitbucket platform assets and scan your repositories’ code for security issues.":
      "Binden Sie Ihr Bitbucket SaaS in das Modul Cortex Application Security ein, um umfassende Transparenz über die Assets Ihrer Bitbucket-Plattform zu erhalten und den Code Ihrer Repositories auf Sicherheitsprobleme zu prüfen.",
    "OnPrem authentication":
      "OnPrem-Authentifizierung",
    "OnPrem Scopes":
      "OnPrem-Scopes",
    "page, and choose the App you want to integrate with your instance. It must be of type OAuth 2.0. For creating a new app with type OAuth 2.0, click":
      "Seite und wählen Sie die App aus, die Sie in Ihre Instanz integrieren möchten. Sie muss vom Typ OAuth 2.0 sein. Um eine neue App vom Typ OAuth 2.0 zu erstellen, klicken Sie auf",
    "Password (Deprecated - Use API token)":
      "Passwort (veraltet – API-Token verwenden)",
    "Personal Access Token":
      "Persönliches Zugriffstoken",
    "Private key (PKCS8 format)":
      "Privater Schlüssel (PKCS8-Format)",
    "Project Settings":
      "Projekteinstellungen",
    "Query (in JQL) for fetching incidents":
      "Abfrage (in JQL) zum Abrufen von Incidents",
    "Query (in JQL) for fetching incidents.":
      "Abfrage (in JQL) zum Abrufen von Incidents.",
    "Receives network flow logs from Microsoft Azure Network Watcher.":
      "Empfängt Netzwerkflussprotokolle von Microsoft Azure Network Watcher.",
    "Reset Now":
      "Jetzt zurücksetzen",
    "Reset the “last run” timestamp":
      "Zeitstempel der „letzten Ausführung“ zurücksetzen",
    "Resetting the “Last Run” Timestamp":
      "Zurücksetzen des Zeitstempels der „letzten Ausführung“",
    "Run the integration command":
      "Integrationsbefehl ausführen",
    "SaaS Posture Security":
      "SaaS-Sicherheitslage",
    "Save & Exit":
      "Speichern und beenden",
    "Save the integration instance.":
      "Speichern Sie die Integrationsinstanz.",
    "scope, in order to retrieve refresh tokens.":
      "Scope, damit Aktualisierungstoken abgerufen werden können.",
    "Select Settings and then API keys.":
      "Wählen Sie Settings und anschließend API keys aus.",
    "The integration can fetch the following incident types:":
      "Die Integration kann die folgenden Incident-Typen abrufen:",
    "The integration includes a preprocessing script (":
      "Die Integration enthält ein Vorverarbeitungsskript (",
    "The integration retrieves asset information, anomaly alerts, and CVEs from Asimily Insight—either through scheduled updates or on-demand queries—making it necessary to define a preprocessing rule that discards incoming incidents if they are duplicates.":
      "Die Integration ruft Asset-Informationen, Anomaliewarnungen und CVEs aus Asimily Insight ab – entweder über geplante Aktualisierungen oder bei Bedarf über Abfragen. Daher muss eine Vorverarbeitungsregel definiert werden, die eingehende Incidents verwirft, wenn sie Duplikate sind.",
    "The Traffic Light Protocol (TLP) designation to apply to indicators fetched from the feed":
      "Die Traffic-Light-Protocol-(TLP-)Einstufung, die auf aus dem Feed abgerufene Indikatoren angewendet werden soll",
    "There are 2 authentication methods:":
      "Es gibt 2 Authentifizierungsmethoden:",
    "This ensures that incidents related to newly included devices and updated filters are correctly fetched.":
      "Dadurch wird sichergestellt, dass Incidents zu neu hinzugekommenen Geräten und aktualisierten Filtern korrekt abgerufen werden.",
    "this tutorial":
      "dieses Tutorial",
    "This will fetch all tickets in your system (including past tickets) that are in Open status and in project soc. After the first run, it will create incidents only for new tickets.":
      "Dadurch werden alle Tickets in Ihrem System (einschließlich früherer Tickets) abgerufen, die den Status Open haben und zum Projekt soc gehören. Nach der ersten Ausführung werden nur noch für neue Tickets Incidents erstellt.",
    "Time range for initial data fetch":
      "Zeitraum für den ersten Datenabruf",
    "to get the Access Token. Authorizing using OAuth1.0, requires Access Token, Private Key, and Consumer Key.":
      "um das Zugriffstoken abzurufen. Für die Autorisierung mit OAuth1.0 sind Zugriffstoken, privater Schlüssel und Consumer-Schlüssel erforderlich.",
    "to get the API token.":
      "um das API-Token abzurufen.",
    "To obtain the Authorization code, follow these steps:":
      "Gehen Sie wie folgt vor, um den Autorisierungscode abzurufen:",
    "to obtain your Access Tokens. Authorizing using a PAT requires the Access Token only.":
      "um Ihre Zugriffstoken abzurufen. Für die Autorisierung mit einem PAT ist nur das Zugriffstoken erforderlich.",
    "To reset:":
      "So setzen Sie zurück:",
    "To use a Private Access Token, please follow":
      "Um ein privates Zugriffstoken zu verwenden, folgen Sie",
    "To use OAuth1.0 follow":
      "Um OAuth1.0 zu verwenden, folgen Sie",
    "Traffic Light Protocol Color":
      "Traffic-Light-Protocol-Farbe",
    "Transition issues":
      "Vorgänge überführen",
    "Update the project you want to fetch from, using:":
      "Aktualisieren Sie das Projekt, aus dem Sie abrufen möchten, mit:",
    "Use created field to fetch incidents":
      "Erstellungsfeld zum Abrufen von Incidents verwenden",
    "Use the Azure Key Vault integration to safeguard and manage cryptographic keys and secrets used by cloud applications and services.":
      "Verwenden Sie die Azure-Key-Vault-Integration, um kryptografische Schlüssel und Geheimnisse zu schützen und zu verwalten, die von Cloud-Anwendungen und -Diensten verwendet werden.",
    "Use the Jira integration to manage issues, create Cortex incidents from Jira projects, and mirror issues to existing issue incidents in Cortex. The integration now supports both OnPrem, and Cloud instances.":
      "Verwenden Sie die Jira-Integration, um Vorgänge zu verwalten, Cortex-Incidents aus Jira-Projekten zu erstellen und Vorgänge in vorhandene Vorgangs-Incidents in Cortex zu spiegeln. Die Integration unterstützt jetzt sowohl OnPrem- als auch Cloud-Instanzen.",
    "Use this integration to connect securely with an Atlassian Cloud Model Context Protocol (MCP) server and access its tools in real time.":
      "Verwenden Sie diese Integration, um sich sicher mit einem Atlassian Cloud Model Context Protocol (MCP)-Server zu verbinden und in Echtzeit auf dessen Tools zuzugreifen.",
    "Use this integration to read information and send commands to the Check Point Firewall server.":
      "Verwenden Sie diese Integration, um Informationen zu lesen und Befehle an den Check-Point-Firewall-Server zu senden.",
    "Username (Basic Authentication)":
      "Benutzername (Standardauthentifizierung)",
    "When creating Jira issues through XSOAR, using the mirroring function, make sure that you exclude those issues when fetching incidents. To exclude these issues, tag the relevant issues with a dedicated label and exclude that label from the JQL query (Labels!=).":
      "Wenn Sie über XSOAR mithilfe der Spiegelungsfunktion Jira-Vorgänge erstellen, stellen Sie sicher, dass Sie diese Vorgänge beim Abrufen von Incidents ausschließen. Um diese Vorgänge auszuschließen, versehen Sie die entsprechenden Vorgänge mit einem eigenen Label und schließen Sie dieses Label aus der JQL-Abfrage (Labels!=) aus.",
    "You can authenticate using one of the following methods:":
      "Sie können sich mit einer der folgenden Methoden authentifizieren:",
    "You can enable and filter these incidents with the following options:":
      "Sie können diese Incidents mit den folgenden Optionen aktivieren und filtern:",
    "You can select which CRUD commands are enabled in the integration instance configuration settings. By default, all commands are enabled.":
      "Sie können in den Konfigurationseinstellungen der Integrationsinstanz auswählen, welche CRUD-Befehle aktiviert sind. Standardmäßig sind alle Befehle aktiviert.",
    "Your Jira server URL":
      "URL Ihres Jira-Servers",

    // --- Batch: strings from the Collector export #2 (AutoFocus Feed docs, marketplace card descriptions, feed tooltips) ---
    // Fragments such as "and", "or", "The", "Click the", "Go to the", "From the" are intentionally NOT registered.
    "Activate the API":
      "API aktivieren",
    "Activating AutoFocus Licenses":
      "AutoFocus-Lizenzen aktivieren",
    "Add your authorization code":
      "Autorisierungscode hinzufügen",
    "AutoFocus documentation - Get Tag Details":
      "AutoFocus-Dokumentation – Tag-Details abrufen",
    "AutoFocus documentation - Get Tags":
      "AutoFocus-Dokumentation – Tags abrufen",
    "AutoFocus Endpoint URL":
      "AutoFocus-Endpunkt-URL",
    "Custom Feed info:":
      "Informationen zum benutzerdefinierten Feed:",
    "Samples Feed info:":
      "Informationen zum Beispiel-Feed:",
    "Enter the authorization code.":
      "Geben Sie den Autorisierungscode ein.",
    "Enter this API key when configuring the AutoFocus integration in Cortex.":
      "Geben Sie diesen API-Schlüssel ein, wenn Sie die AutoFocus-Integration in Cortex konfigurieren.",
    "For more info on activating the license, see":
      "Weitere Informationen zum Aktivieren der Lizenz finden Sie unter",
    "For more information about generating URL and adding filter options for custom feeds, please read":
      "Weitere Informationen zum Generieren der URL und zum Hinzufügen von Filteroptionen für benutzerdefinierte Feeds finden Sie unter",
    "From the left-side navigation menu, select":
      "Wählen Sie im linken Navigationsmenü Folgendes aus:",
    "Get Your API Key":
      "API-Schlüssel abrufen",
    "Gets Custom and Sample feeds from AutoFocus.":
      "Ruft benutzerdefinierte Feeds und Beispiel-Feeds von AutoFocus ab.",
    "Indicator Feed":
      "Indikator-Feed",
    "Onboard your CircleCI SaaS service for comprehensive Application Security: Integrate Cortex CLI scans for your code, and secure your CI/CD pipelines.":
      "Binden Sie Ihren CircleCI-SaaS-Dienst für umfassende Application Security ein: Integrieren Sie Cortex-CLI-Scans für Ihren Code und sichern Sie Ihre CI/CD-Pipelines.",
    "Only necessary in case a Custom Feed is fetched. Can also support a CSV of Custom feed URLs.":
      "Nur erforderlich, wenn ein benutzerdefinierter Feed abgerufen wird. Unterstützt auch eine CSV-Datei mit URLs benutzerdefinierter Feeds.",
    "Palo Alto Networks support site":
      "Palo-Alto-Networks-Support-Website",
    "Protect your cloud assets and private network.":
      "Schützen Sie Ihre Cloud-Assets und Ihr privates Netzwerk.",
    "Query - A JSON styled AutoFocus query. For example:":
      "Query: Eine AutoFocus-Abfrage im JSON-Format. Beispiel:",
    "Query and upload samples to Cisco threat grid.":
      "Fragen Sie Beispiele ab und laden Sie sie in Cisco Threat Grid hoch.",
    "Reliability of the source providing the intelligence data":
      "Zuverlässigkeit der Quelle, die die Intelligence-Daten bereitstellt",
    "Samples Feed Query":
      "Beispiel-Feed-Abfrage",
    "Samples Feed Scope Type":
      "Scope-Typ des Beispiel-Feeds",
    "Scalable visibility and security analytics.":
      "Skalierbare Transparenz und Sicherheitsanalysen.",
    "Scope Type - Either":
      "Scope-Typ – entweder",
    "Secure Malware Analytics (formerly Threat Grid) combines advanced sandboxing with threat intelligence into one unified solution to protect organizations from malware.":
      "Secure Malware Analytics (früher Threat Grid) kombiniert fortschrittliches Sandboxing mit Threat Intelligence in einer einheitlichen Lösung, um Organisationen vor Malware zu schützen.",
    "Select the API Key link.":
      "Wählen Sie den Link API Key aus.",
    "Select values":
      "Werte auswählen",
    "The Custom Feed URL should be in this form:":
      "Die URL des benutzerdefinierten Feeds sollte folgendes Format haben:",
    "The Security Management Appliance (SMA) is used to centralize services from Email Security Appliances (ESAs) and Web Security Appliances (WSAs).":
      "Die Security Management Appliance (SMA) dient zur Zentralisierung der Dienste von Email Security Appliances (ESAs) und Web Security Appliances (WSAs).",
    "The URL for the custom feed to fetch":
      "Die URL des abzurufenden benutzerdefinierten Feeds",
    "To connect a custom AutoFocus feed you need to provide the Custom Feed URL.":
      "Um einen benutzerdefinierten AutoFocus-Feed zu verbinden, müssen Sie die URL des benutzerdefinierten Feeds angeben.",
    "To connect to a sample AutoFocus feed you need to provide the following parameters:":
      "Um eine Verbindung zu einem Beispiel-AutoFocus-Feed herzustellen, müssen Sie die folgenden Parameter angeben:",
    "To get your API key, you need to add an authorization code, and then activate the API.":
      "Um Ihren API-Schlüssel abzurufen, müssen Sie einen Autorisierungscode hinzufügen und anschließend die API aktivieren.",
    "Use system proxy settings is enabled only when an engine is selected":
      "„Proxyeinstellungen des Systems verwenden“ ist nur aktiviert, wenn eine Engine ausgewählt ist",
    "Use the AutoFocus Tags Feed integration to fetch indicators from AutoFocus Tags.":
      "Verwenden Sie die Integration AutoFocus Tags Feed, um Indikatoren aus AutoFocus Tags abzurufen.",
    "Use the Cisco Adaptive Security Appliance Software integration to manage interfaces, rules, and network objects.":
      "Verwenden Sie die Integration Cisco Adaptive Security Appliance Software, um Schnittstellen, Regeln und Netzwerkobjekte zu verwalten.",
    "Use the Cisco Firepower integration for unified management of firewalls, application control, intrusion prevention, URL filtering, and advanced malware protection.":
      "Verwenden Sie die Integration Cisco Firepower für die einheitliche Verwaltung von Firewalls, Anwendungssteuerung, Intrusion Prevention, URL-Filterung und erweitertem Malware-Schutz.",
    "When removed from the feed":
      "Wenn aus dem Feed entfernt",
    "When selected, the exclusion list is ignored for indicators from this feed. This means that if an indicator from this feed is on the exclusion list, the indicator might still be added to the system.":
      "Wenn ausgewählt, wird die Ausschlussliste für Indikatoren aus diesem Feed ignoriert. Das bedeutet: Wenn ein Indikator aus diesem Feed auf der Ausschlussliste steht, kann er dennoch dem System hinzugefügt werden.",

    // --- Batch: strings from the Collector export #4 (Azure Log Analytics / Microsoft self-deployed auth docs, marketplace card descriptions) ---
    // Fragments such as "and", "or the", "Follow the", "Go to the", "Run the", "Select the", "To get the", "To use the" are intentionally NOT registered.
    ": These credentials are valid for a single instance only.":
      ": Diese Anmeldedaten gelten nur für eine einzelne Instanz.",
    "(Certificate Thumbprint)":
      "(Zertifikatfingerabdruck)",
    "(Client Secret)":
      "(Client-Secret)",
    "After authorizing the Cortex app, you will get an ID, Token, and Key which should be inserted in the integration instance settings fields.":
      "Nachdem Sie die Cortex-App autorisiert haben, erhalten Sie eine ID, ein Token und einen Schlüssel, die in die Felder der Integrationsinstanzeinstellungen eingegeben werden müssen.",
    "and allow Cortex access to Azure Log Analytics, an administrator has to approve our app using an admin consent flow by clicking this":
      "und Cortex den Zugriff auf Azure Log Analytics zu erlauben, muss ein Administrator unsere App über einen Administratoreinwilligungsablauf genehmigen, indem er auf diesen klickt",
    "Anthropic Claude AI integration for data security scanning and content analysis":
      "Anthropic-Claude-AI-Integration für Datensicherheitsscans und Inhaltsanalyse",
    "Application redirect URI (for self-deployed mode)":
      "Umleitungs-URI der Anwendung (für den Modus „Selbst bereitgestellt“)",
    "Authorization Code flow":
      "Authorization-Code-Flow",
    "Client Credentials flow":
      "Client-Credentials-Flow",
    "Client Credentials Flow":
      "Client-Credentials-Flow",
    "Azure Resource Graph is an Azure service designed to extend Azure Resource Management by providing efficient and performant resource exploration with the ability to query at scale across a given set of resources.":
      "Azure Resource Graph ist ein Azure-Dienst, der Azure Resource Management erweitert und eine effiziente und leistungsstarke Ressourcenerkundung ermöglicht, einschließlich Abfragen im großen Maßstab über eine bestimmte Gruppe von Ressourcen.",
    "Azure Service Management - permission":
      "Azure Service Management – Berechtigung",
    "Log Analytics API - permission":
      "Log Analytics API – Berechtigung",
    "of type":
      "vom Typ",
    "Check when authenticating using the Authorization Code flow.":
      "Aktivieren Sie diese Option, wenn Sie sich mit dem Authorization-Code-Flow authentifizieren.",
    "Check when authenticating using the Client Credentials flow.":
      "Aktivieren Sie diese Option, wenn Sie sich mit dem Client-Credentials-Flow authentifizieren.",

    // --- Batch: strings from the user-reported screenshot (Azure auth type description) ---
    // Fragments such as "and", "or the", "Follow the", "Go to the", "Run the", "Select the", "To get the", "To use the" are intentionally NOT registered.
    "Type of authentication - could be Client Credentials Authorization Flow (recommended) or Device Code Flow.":
      "Authentifizierungstyp: Client-Credentials-Autorisierungsfluss (empfohlen) oder Device-Code-Fluss.",

    // --- Batch: strings from the Collector export #5 (v0.1.1: tooltips, Brandefense/Binalyze/Bitbucket docs, marketplace card descriptions, data-source table) ---
    // Fragments such as "and", "or the", "Follow the", "Go to the", "Run the", "Select the", "To get the", "To use the" are intentionally NOT registered.
    "— For asset-related commands":
      "— Für Asset-bezogene Befehle",
    "— For creating incidents":
      "— Zum Erstellen von Incidents",
    "— For CTI threat search capability":
      "— Für die CTI-Bedrohungssuche",
    "— For incident fetching and queries":
      "— Zum Abrufen und Abfragen von Incidents",
    "— For indicator retrieval":
      "— Zum Abrufen von Indikatoren",
    "— For intelligence reports":
      "— Für Intelligence-Berichte",
    "— For IoC and threat intelligence data":
      "— Für IoC- und Threat-Intelligence-Daten",
    "— For phishing monitoring":
      "— Für die Phishing-Überwachung",
    "(API Key)":
      "(API-Schlüssel)",
    "A Brandefense account with API access enabled.":
      "Ein Brandefense-Konto mit aktiviertem API-Zugriff.",
    "An API Bearer Token generated from the Brandefense platform.":
      "Ein auf der Brandefense-Plattform generiertes API-Bearer-Token.",
    "Add":
      "Hinzufügen",
    "Binalyze AIR Server URL":
      "Binalyze-AIR-Server-URL",
    "Bitbucket Data Center (On-Prem)":
      "Bitbucket Data Center (On-Premises)",
    "Choose from repository list":
      "Aus Repository-Liste auswählen",
    "Community Contributed Integration":
      "Von der Community bereitgestellte Integration",
    "Comprehensive integration with Databricks workspace APIs for managing clusters, jobs, SQL, pipelines, Unity Catalog, MLflow, IAM, and more.":
      "Umfassende Integration mit den Databricks-Workspace-APIs zur Verwaltung von Clustern, Jobs, SQL, Pipelines, Unity Catalog, MLflow, IAM und mehr.",
    "Configure Domain":
      "Domain konfigurieren",
    "Connect Docker Hub Container Registry with Cortex Cloud to scan and secure your container images, ensuring comprehensive security and compliance.":
      "Verbinden Sie die Docker Hub Container Registry mit Cortex Cloud, um Ihre Container-Images zu scannen und abzusichern und umfassende Sicherheit und Compliance zu gewährleisten.",
    "Connector name":
      "Konnektorname",
    "Copy the generated token and paste it into the":
      "Kopieren Sie das generierte Token und fügen Sie es in das Feld",
    "field in the integration configuration.":
      "der Integrationskonfiguration ein.",
    "Copy the token.":
      "Kopieren Sie das Token.",
    "Create a Personal Access Token":
      "Persönliches Zugriffstoken erstellen",
    "Create a new API token with the minimum required permissions.":
      "Erstellen Sie ein neues API-Token mit den mindestens erforderlichen Berechtigungen.",
    "Cribl Search allows you to query, retrieve, and manage search jobs, datasets, and saved searches across your Cribl Cloud deployment.":
      "Mit Cribl Search können Sie Suchaufträge, Datasets und gespeicherte Suchen in Ihrer Cribl-Cloud-Bereitstellung abfragen, abrufen und verwalten.",
    "Delete instance":
      "Instanz löschen",
    "Edit instance":
      "Instanz bearbeiten",
    "e.g acme.atlassian.com":
      "z. B. acme.atlassian.com",
    "Enable unified image, code, and API security scanning, analysis and remediation from your command line":
      "Aktivieren Sie das einheitliche Sicherheits-Scanning, die Analyse und die Behebung für Images, Code und APIs über Ihre Befehlszeile",
    "Endpoint detection and response to manage and query malops, connections and processes.":
      "Endpoint Detection and Response zum Verwalten und Abfragen von Malops, Verbindungen und Prozessen.",
    "Enter the Binalyze AIR Server URL and API Key.":
      "Geben Sie die Binalyze-AIR-Server-URL und den API-Schlüssel ein.",
    "Fetching Issue Types":
      "Abruf der Vorgangstypen",
    "File threat intelligence":
      "Threat Intelligence für Dateien",
    "First time fetching":
      "Erster Abruf",
    "Go to the API token or integrations section.":
      "Wechseln Sie zum Abschnitt für API-Token oder Integrationen.",
    "In Cortex, create a Binalyze AIR Extended integration instance.":
      "Erstellen Sie in Cortex eine Binalyze-AIR-Extended-Integrationsinstanz.",
    "In order to complete the onboarding, the domain path should be approved in the Platform Egress. A request was send on your behalf and once approved you will be able to onboard again":
      "Um das Onboarding abzuschließen, muss der Domainpfad in Platform Egress genehmigt werden. In Ihrem Namen wurde eine Anfrage gesendet. Nach der Genehmigung können Sie das Onboarding erneut durchführen.",
    "Incident":
      "Incident",
    "Incident Category":
      "Incident-Kategorie",
    "Incident Module":
      "Incident-Modul",
    "Incident Rules":
      "Incident-Regeln",
    "Incident Status":
      "Incident-Status",
    "Integration with DFIRe (Digital Forensics and Incident Response) platform for case management and IOC indicator tracking.":
      "Integration mit der Plattform DFIRe (Digital Forensics and Incident Response) für die Fallverwaltung und die Verfolgung von IOC-Indikatoren.",
    "Intelligence":
      "Intelligence",
    "Intelligence Category":
      "Intelligence-Kategorie",
    "Intelligence Search":
      "Intelligence-Suche",
    "Locking mechanism that prevents concurrent execution of different tasks.":
      "Sperrmechanismus, der die gleichzeitige Ausführung verschiedener Aufgaben verhindert.",
    "Log in to Binalyze AIR.":
      "Melden Sie sich bei Binalyze AIR an.",
    "Log in to your Brandefense account at":
      "Melden Sie sich unter folgender Adresse bei Ihrem Brandefense-Konto an:",
    "Malware dynamic analysis sandboxing.":
      "Sandboxing für die dynamische Malware-Analyse.",
    "Manage Endpoints using Cylance protect.":
      "Verwalten Sie Endpoints mit Cylance Protect.",
    "Max Results":
      "Maximale Ergebnisse",
    "Maximum incidents per fetch":
      "Maximale Anzahl an Incidents pro Abruf",
    "Maximum number of incidents to fetch per cycle.":
      "Maximale Anzahl an Incidents, die pro Zyklus abgerufen werden.",
    "No support or maintenance is provided by the author. Customers are encouraged to engage with the user community for questions and guidance at the":
      "Der Autor bietet keinen Support und keine Wartung an. Kunden werden gebeten, Fragen und Hilfestellung in der Benutzercommunity zu suchen:",
    "Ownership Type":
      "Eigentumstyp",
    "Pack also helps with integration with Cortex and provides pre-made playbooks/templates to ease integration use.":
      "Das Pack unterstützt außerdem die Integration mit Cortex und enthält vorgefertigte Playbooks/Vorlagen, die die Nutzung der Integration erleichtern.",
    "Paste your Bitbucket Server / Data Center repository URL into the 'Base URL' field below. Project Admin permissions are required.":
      "Fügen Sie die Repository-URL von Bitbucket Server / Data Center in das Feld „Basis-URL“ unten ein. Project-Admin-Berechtigungen sind erforderlich.",
    "Reliability of the source providing the intelligence data.":
      "Zuverlässigkeit der Quelle, die die Intelligence-Daten bereitstellt.",
    "Repositories were last updated on":
      "Repositories zuletzt aktualisiert am:",
    "Review the requested permissions, and select":
      "Prüfen Sie die angeforderten Berechtigungen und wählen Sie",
    "to connect Prisma Cloud to Bitbucket.":
      "aus, um Prisma Cloud mit Bitbucket zu verbinden.",
    "selected":
      "ausgewählt",
    "Selected":
      "Ausgewählt",
    "Selection Options":
      "Auswahloptionen",
    "Server URL (e.g. https://api.brandefense.io)":
      "Server-URL (z. B. https://api.brandefense.io)",
    "Setup":
      "Einrichtung",
    "Stay ahead of cyber threats with Darkmon TIP - real-time threat intelligence from the Clear, Deep, and Dark Web tailored to your assets.":
      "Bleiben Sie Cyberbedrohungen mit Darkmon TIP einen Schritt voraus: Threat Intelligence in Echtzeit aus Clear Web, Deep Web und Dark Web, zugeschnitten auf Ihre Assets.",
    "Stay ahead of cyber threats with Darkmon TIP - real-time threat intelligence from the Clear, Deep, and Dark Web tailored to your assets. Pack also helps with integration with Cortex and provides pre-made playbooks/templates to ease integration use.":
      "Bleiben Sie Cyberbedrohungen mit Darkmon TIP einen Schritt voraus: Threat Intelligence in Echtzeit aus Clear Web, Deep Web und Dark Web, zugeschnitten auf Ihre Assets. Das Pack unterstützt außerdem die Integration mit Cortex und enthält vorgefertigte Playbooks/Vorlagen, die die Nutzung der Integration erleichtern.",
    "Steps":
      "Schritte",
    "Sync Now":
      "Jetzt synchronisieren",
    "Table data is being updated":
      "Die Tabellendaten werden aktualisiert",
    "The Binalyze AIR Server URL, for example https://air.example.com.":
      "Die URL des Binalyze-AIR-Servers, zum Beispiel https://air.example.com.",
    "The CrowdStrike Falcon OAuth 2 API (formerly the Falcon Firehose API), enables fetching and resolving detections, searching devices, getting behaviors by ID, containing hosts, and lifting host containment.":
      "Die CrowdStrike-Falcon-OAuth-2-API (früher die Falcon Firehose API) ermöglicht das Abrufen und Beheben von Erkennungen, das Suchen von Geräten, das Abrufen von Verhalten anhand der ID, das Eindämmen von Hosts und das Aufheben der Hosteindämmung.",
    "The Databricks Data Intelligence Platform":
      "Databricks Data Intelligence Platform",
    "This integration uses the Cortex API to access all the core services and capabilities of the Cortex platform.":
      "Diese Integration verwendet die Cortex-API, um auf alle zentralen Dienste und Funktionen der Cortex-Plattform zuzugreifen.",
    "This parameter allows you to filter fetching by issue type.":
      "Mit diesem Parameter können Sie den Abruf nach Vorgangstyp filtern.",
    "This parameter allows you to filter intelligence values by categories.":
      "Mit diesem Parameter können Sie Intelligence-Werte nach Kategorien filtern.",
    "This parameter allows you to filter intelligence values with keyword search.":
      "Mit diesem Parameter können Sie Intelligence-Werte per Stichwortsuche filtern.",
    "This parameter will request and show the incident's related module category.":
      "Dieser Parameter fordert die Kategorie des zugehörigen Moduls des Incidents an und zeigt sie an.",
    "This parameter will request and show the incident's related module.":
      "Dieser Parameter fordert das zugehörige Modul des Incidents an und zeigt es an.",
    "This parameter will request and show the incident's related template. Don't select any to get all alerts.":
      "Dieser Parameter fordert die zugehörige Vorlage des Incidents an und zeigt sie an. Wählen Sie keine aus, um alle Alerts abzurufen.",
    "This parameter will request incident's by status.":
      "Dieser Parameter fordert Incidents nach Status an.",
    "Use the CyberArk EPM integration to activate and deactivate CyberArk EPM risk plans for specific endpoints.":
      "Verwenden Sie die CyberArk-EPM-Integration, um CyberArk-EPM-Risikopläne für bestimmte Endpoints zu aktivieren und zu deaktivieren.",
    "Use this integration to connect Cortex to Binalyze AIR for endpoint forensic acquisition, triage, case, task, repository, and isolation operations.":
      "Verwenden Sie diese Integration, um Cortex mit Binalyze AIR zu verbinden und Endpoint-Forensik-Erfassung, Triage sowie Fall-, Aufgaben-, Repository- und Isolationsvorgänge durchzuführen.",

    // --- Batch: strings from the Collector export #6 (Cisco/CircleCI/Doppel/EWS/Entra ID docs, tooltips, marketplace card descriptions) ---
    // Fragments such as "and", "or the", "Follow the", "Go to the", "Run the", "Select the", "To get the", "To use the" are intentionally NOT registered.
    ": There is no need to enter a value in the":
      ": Es ist nicht erforderlich, in das Feld",
    "field. It can be left blank. (Visible only on 6.0.2 and lower versions).":
      "einen Wert einzugeben. Es kann leer bleiben. (Nur in den Versionen 6.0.2 und niedriger sichtbar).",
    "(API token)":
      "(API-Token)",
    "(Stealthwatch Cloud API key. Should be in the form of \"ApiKey <username>:<apikey>\")":
      "(API-Schlüssel für Stealthwatch Cloud. Muss im Format „ApiKey <username>:<apikey>“ vorliegen)",
    "Stealthwatch Cloud API key. Should be in the form of \"ApiKey <username>:<apikey>\"":
      "API-Schlüssel für Stealthwatch Cloud. Muss im Format „ApiKey <username>:<apikey>“ vorliegen",
    "Access to Cisco SMA":
      "Zugriff auf Cisco SMA",
    "Access your Cisco Umbrella account dashboard.":
      "Rufen Sie das Dashboard Ihres Cisco-Umbrella-Kontos auf.",
    "Add the following environment variables:":
      "Fügen Sie die folgenden Umgebungsvariablen hinzu:",
    "API Secret":
      "API-Secret",
    "API token":
      "API-Token",
    "API Token":
      "API-Token",
    "API Version(Support values: v1, v2, v3)":
      "API-Version (unterstützte Werte: v1, v2, v3)",
    "Authentication from a REST API Client":
      "Authentifizierung über einen REST-API-Client",
    "Base URL, e.g., https://XXX.eu.iphmx.com":
      "Basis-URL, z. B. https://XXX.eu.iphmx.com",
    "Before you begin, you'll need to create a new context in CircleCI named \"cortex-secrets\" and add your API key and API ID as environment variables.":
      "Bevor Sie beginnen, müssen Sie in CircleCI einen neuen Kontext mit dem Namen „cortex-secrets“ erstellen und Ihren API-Schlüssel und Ihre API-ID als Umgebungsvariablen hinzufügen.",
    "Please copy and use the variable names suggested below.":
      "Kopieren Sie die unten vorgeschlagenen Variablennamen und verwenden Sie sie.",
    "If needed, you can generate a new token using the link below, copy and use the generated values as your secrets values.":
      "Bei Bedarf können Sie über den unten stehenden Link ein neues Token generieren, die generierten Werte kopieren und als Werte Ihrer Secrets verwenden.",
    "Before you begin, you'll need to create a new context in CircleCI named \"cortex-secrets\" and add your API key and API ID as environment variables. Please copy and use the variable names suggested below. If needed, you can generate a new token using the link below, copy and use the generated values as your secrets values.":
      "Bevor Sie beginnen, müssen Sie in CircleCI einen neuen Kontext mit dem Namen „cortex-secrets“ erstellen und Ihren API-Schlüssel und Ihre API-ID als Umgebungsvariablen hinzufügen. Kopieren Sie die unten vorgeschlagenen Variablennamen und verwenden Sie sie. Bei Bedarf können Sie über den unten stehenden Link ein neues Token generieren, die generierten Werte kopieren und als Werte Ihrer Secrets verwenden.",
    "By clicking Authorize, you authorize Palo Alto Networks to: (i) ingest data and perform actions such as suppression on your behalf and (ii) process this data to deliver services to you. You confirm that you have the right to provide this authorization.":
      "Indem Sie auf „Autorisieren“ klicken, autorisieren Sie Palo Alto Networks, (i) in Ihrem Namen Daten aufzunehmen und Aktionen wie Unterdrückung auszuführen und (ii) diese Daten zu verarbeiten, um Ihnen Dienste bereitzustellen. Sie bestätigen, dass Sie berechtigt sind, diese Autorisierung zu erteilen.",
    "c. Provide a":
      "c. Geben Sie einen",
    "for your token (e.g., “Cortex Integration”).":
      "für Ihr Token an (z. B. „Cortex Integration“).",
    "CI/CD System Scan":
      "CI/CD-Systemscan",
    "Code Scan":
      "Code-Scan",
    "Enable CI/CD system scanning":
      "CI/CD-Systemscan aktivieren",
    "System scanning":
      "Systemscan",
    "Configure Job":
      "Job konfigurieren",
    "Map repositories":
      "Repositories zuordnen",
    "Connect Checkmarx One":
      "Checkmarx One verbinden",
    "Sign in to Checkmarx One":
      "Bei Checkmarx One anmelden",
    "CircleCI personal API token":
      "Persönliches CircleCI-API-Token",
    "Personal API token":
      "Persönliches API-Token",
    "Copy the personal API token to clipboard and paste it here.":
      "Kopieren Sie das persönliche API-Token in die Zwischenablage und fügen Sie es hier ein.",
    "Create a personal API token in CircleCI.":
      "Erstellen Sie in CircleCI ein persönliches API-Token.",
    "Create a dedicated user in the organization’s VCS to integrate CircleCI with Cortex, to prevent the integration breaking if the user leaves the organization":
      "Erstellen Sie im VCS der Organisation einen dedizierten Benutzer, um CircleCI mit Cortex zu integrieren, damit die Integration nicht ausfällt, wenn der Benutzer die Organisation verlässt",
    "Ensure that the dedicated user follows all the organization’s projects in CircleCI":
      "Stellen Sie sicher, dass der dedizierte Benutzer in CircleCI allen Projekten der Organisation folgt",
    "Login to CircleCI with your version control system (VCS) user credentials.":
      "Melden Sie sich mit den Benutzeranmeldedaten Ihres Versionskontrollsystems (VCS) bei CircleCI an.",
    "To enable Cortex Application Security visibility across all CircleCI projects, you must log in to CircleCI using your VCS credentials Note: the CircleCI user base is integrated with the VCS, which means that CircleCI users inherit the permissions granted to VCS users.":
      "Um die Sichtbarkeit von Cortex Application Security für alle CircleCI-Projekte zu aktivieren, müssen Sie sich mit Ihren VCS-Anmeldedaten bei CircleCI anmelden. Hinweis: Die CircleCI-Benutzerbasis ist in das VCS integriert, d. h. CircleCI-Benutzer erben die Berechtigungen, die VCS-Benutzern erteilt wurden.",
    "Cisco recommends that you use different accounts for interfacing with the API and the Firepower User Interface. Credentials cannot be used for both interfaces simultaneously, and will be logged out without warning if used for both.":
      "Cisco empfiehlt, für die API und die Firepower-Benutzeroberfläche unterschiedliche Konten zu verwenden. Die Anmeldedaten können nicht gleichzeitig für beide Oberflächen verwendet werden und werden ohne Warnung abgemeldet, wenn sie für beide verwendet werden.",
    "Collect logs and data from Dropbox.":
      "Erfassen Sie Protokolle und Daten aus Dropbox.",
    "Configuring Cisco ASA":
      "Cisco ASA konfigurieren",
    "Connect to Cisco Umbrella:":
      "Verbindung mit Cisco Umbrella herstellen:",
    "DBot Score Suspicious Threshold (-100 to 100)":
      "Schwellenwert „verdächtig“ für den DBot-Score (-100 bis 100)",
    "Score Malicious Threshold (-100 to 100)":
      "Schwellenwert „bösartig“ für den Score (-100 bis 100)",
    "Default is 50. Maximum is 100.":
      "Der Standardwert ist 50. Der Maximalwert ist 100.",
    "Make sure the malicious threshold is less than the suspicious threshold.":
      "Stellen Sie sicher, dass der Schwellenwert „bösartig“ kleiner als der Schwellenwert „verdächtig“ ist.",
    "Make sure the suspicious threshold is greater than the malicious threshold.":
      "Stellen Sie sicher, dass der Schwellenwert „verdächtig“ größer als der Schwellenwert „bösartig“ ist.",
    "Deprecated. Use ***EWS Extension Online Powershell v3*** instead.":
      "Veraltet. Verwenden Sie stattdessen ***EWS Extension Online Powershell v3***.",
    "Deprecated. Use the Elasticsearch v2 integration instead.":
      "Veraltet. Verwenden Sie stattdessen die Elasticsearch-v2-Integration.",
    "Doppel is a Modern Digital Risk Protection Solution, that detects the phishing and brand cyber attacks on the emerging channels. Doppel scans millions of channels online which includes, social media, domains, paid ads, dark web, emerging channels, etc. Doppel can identify the malicious content and cyber threats, and enables their customers to take down the digital risks proactively.":
      "Doppel ist eine moderne Lösung zum Schutz vor digitalen Risiken, die Phishing- und Cyberangriffe auf die Marke über neue Kanäle erkennt. Doppel durchsucht Millionen von Online-Kanälen, darunter Social Media, Domains, bezahlte Anzeigen, das Dark Web und neue Kanäle. Doppel kann schädliche Inhalte und Cyberbedrohungen identifizieren und ermöglicht seinen Kunden, digitale Risiken proaktiv zu beseitigen.",
    "The Cortex pack for Doppel mirrors the alerts created by Doppel as Cortex incidents. The pack also contains the commands to perform different operations on Doppel alerts.":
      "Das Cortex-Pack für Doppel spiegelt die von Doppel erstellten Alerts als Cortex-Incidents. Das Pack enthält außerdem die Befehle für verschiedene Vorgänge mit Doppel-Alerts.",
    "Doppel is a Modern Digital Risk Protection Solution, that detects the phishing and brand cyber attacks on the emerging channels. Doppel scans millions of channels online which includes, social media, domains, paid ads, dark web, emerging channels, etc. Doppel can identify the malicious content and cyber threats, and enables their customers to take down the digital risks proactively. The Cortex pack for Doppel mirrors the alerts created by Doppel as Cortex incidents. The pack also contains the commands to perform different operations on Doppel alerts.":
      "Doppel ist eine moderne Lösung zum Schutz vor digitalen Risiken, die Phishing- und Cyberangriffe auf die Marke über neue Kanäle erkennt. Doppel durchsucht Millionen von Online-Kanälen, darunter Social Media, Domains, bezahlte Anzeigen, das Dark Web und neue Kanäle. Doppel kann schädliche Inhalte und Cyberbedrohungen identifizieren und ermöglicht seinen Kunden, digitale Risiken proaktiv zu beseitigen. Das Cortex-Pack für Doppel spiegelt die von Doppel erstellten Alerts als Cortex-Incidents. Das Pack enthält außerdem die Befehle für verschiedene Vorgänge mit Doppel-Alerts.",
    "e.g., 2022-01-01T00:00:00.000Z, 12 hours, 7 days, 3 months, now.":
      "z. B. 2022-01-01T00:00:00.000Z, 12 hours, 7 days, 3 months, now.",
    "Timestamp in ISO format or <number> <time unit>,":
      "Zeitstempel im ISO-Format oder „<number> <time unit>“,",
    "Timestamp in ISO format or <number> <time unit>, e.g., 2022-01-01T00:00:00.000Z, 12 hours, 7 days, 3 months, now.":
      "Zeitstempel im ISO-Format oder „<number> <time unit>“ (z. B. 2022-01-01T00:00:00.000Z, 12 hours, 7 days, 3 months, now).",
    "First fetch":
      "Erster Abruf",
    "First fetch timestamp (<number> <time unit>, e.g., 12 hours, 7 days).":
      "Zeitstempel des ersten Abrufs (<number> <time unit>, z. B. 12 hours, 7 days).",
    "Enable sftp on your server CheckPoint guide to walk you through: https://supportcenter.checkpoint.com/supportcenter/portal?eventSubmit_doGoviewsolutiondetails=&solutionid=sk82281":
      "Aktivieren Sie sftp auf Ihrem Server. Eine Schritt-für-Schritt-Anleitung finden Sie im CheckPoint-Leitfaden: https://supportcenter.checkpoint.com/supportcenter/portal?eventSubmit_doGoviewsolutiondetails=&solutionid=sk82281",
    "Enter instance display name here":
      "Geben Sie hier den Anzeigenamen der Instanz ein",
    "Example: Tenant name":
      "Beispiel: Tenant-Name",
    "Tenant name":
      "Tenant-Name",
    "The unique string generated in the IAM portal":
      "Die im IAM-Portal generierte eindeutige Zeichenfolge",
    "Entra ID Groups integration (formely Azure Active Directory Groups) enables you to create and manage different types of groups and group functionality according to your requirements.":
      "Mit der Entra-ID-Groups-Integration (früher Azure Active Directory Groups) können Sie je nach Anforderungen verschiedene Arten von Gruppen und Gruppenfunktionen erstellen und verwalten.",
    "The Entra ID Users integration (formerly Azure Active Directory Users) is a Unified gateway to security insights - all from a unified Microsoft Graph User API.":
      "Die Entra-ID-Users-Integration (früher Azure Active Directory Users) ist ein einheitliches Gateway zu Sicherheitserkenntnissen – alles über eine einheitliche Microsoft-Graph-User-API.",
    "Use the Entra ID Applications integration (formerly Azure Active Directory Applications) to manage authorized applications.":
      "Verwenden Sie die Entra-ID-Applications-Integration (früher Azure Active Directory Applications), um autorisierte Anwendungen zu verwalten.",
    "Use the Entra ID Identity And Access integration to manage roles and members (formerly Azure Active Directory Identity And Access).":
      "Verwenden Sie die Entra-ID-Identity-And-Access-Integration, um Rollen und Mitglieder zu verwalten (früher Azure Active Directory Identity And Access).",
    "Exchange Web Services and Office 365 (mail).":
      "Exchange Web Services und Office 365 (E-Mail).",
    "Exchange Web Services mail sender. Note: this integration supports Office 365 basic authentication only. If you are using Office 365, we recommend using the EWS O365 Integration instead, which supports modern authentication (oauth2). Deprecated. Use EWS v2 instead":
      "E-Mail-Absender für Exchange Web Services. Hinweis: Diese Integration unterstützt nur die Standardauthentifizierung von Office 365. Wenn Sie Office 365 verwenden, empfehlen wir stattdessen die Verwendung der EWS-O365-Integration, die moderne Authentifizierung (oauth2) unterstützt. Veraltet. Verwenden Sie stattdessen EWS v2",
    "The new EWS O365 integration uses OAuth 2.0 protocol and can be used with Exchange Online and Office 365 (mail).":
      "Die neue EWS-O365-Integration verwendet das OAuth-2.0-Protokoll und kann mit Exchange Online und Office 365 (E-Mail) verwendet werden.",
    "Use the EWS Extension Online Powershell v3 integration to get information about mailboxes and users in your organization. This integration can also retrieve and modify Tenant Allow/Block Lists.":
      "Verwenden Sie die Integration EWS Extension Online Powershell v3, um Informationen zu Postfächern und Benutzern in Ihrer Organisation abzurufen. Diese Integration kann auch die Tenant-Zulassungs-/Sperrlisten abrufen und ändern.",
    "Feed Name":
      "Feed-Name",
    "Filter by":
      "Filtern nach",
    "Filter operator":
      "Filteroperator",
    "Filter value":
      "Filterwert",
    "Recipient filter operator":
      "Empfängerfilteroperator",
    "Recipient filter value":
      "Empfängerfilterwert",
    "Message field by which to filter the results.":
      "Nachrichtenfeld, nach dem die Ergebnisse gefiltert werden.",
    "Operator on the message field.":
      "Operator für das Nachrichtenfeld.",
    "Recipient filter value to fetch by message field.":
      "Empfängerfilterwert, der nach Nachrichtenfeld abgerufen wird.",
    "Recipient operator filter.":
      "Empfängeroperatorfilter.",
    "The value to search for.":
      "Der Wert, nach dem gesucht wird.",
    "The date or number of days from when to start fetching indicators.":
      "Das Datum oder die Anzahl der Tage, ab denen mit dem Abrufen von Indikatoren begonnen wird.",
    "The Traffic Light Protocol (TLP) designation to apply to indicators fetched from the feed.":
      "Die Traffic-Light-Protocol-Kennzeichnung (TLP), die auf aus dem Feed abgerufene Indikatoren angewendet wird.",
    "HTTP requests timeout in seconds. The default is 60 seconds.":
      "Timeout für HTTP-Anfragen in Sekunden. Der Standardwert beträgt 60 Sekunden.",
    "Server URL for Cisco Stealthwatch console e.g.: https://ip:port/.":
      "Server-URL der Cisco-Stealthwatch-Konsole, z. B.: https://ip:port/.",
    "Getting Credentials":
      "Anmeldedaten abrufen",
    "How to configure the integration:":
      "So konfigurieren Sie die Integration:",
    "Step 1: Obtain Cisco Umbrella Investigate API Key & Secret":
      "Schritt 1: API-Schlüssel und Secret von Cisco Umbrella Investigate abrufen",
    "Step 2: Configure Cortex Credentials":
      "Schritt 2: Cortex-Anmeldedaten konfigurieren",
    "Navigate to API Keys:":
      "Wechseln Sie zu API Keys:",
    "If you are using ASAv (Cisco Adaptive Security Virtual Appliance) don’t forget to check the ASAv box.":
      "Wenn Sie ASAv (Cisco Adaptive Security Virtual Appliance) verwenden, vergessen Sie nicht, das Kontrollkästchen „ASAv“ zu aktivieren.",
    "Is ASAv":
      "Ist ASAv",
    "In the Smart Console, enable the web api: Management & Setting → Blades → Management API, Advanced Setting → All IP address":
      "Aktivieren Sie in der Smart Console die Web-API: Management & Setting → Blades → Management API, Advanced Setting → All IP address",
    "In time zone configuration settings, set the following:":
      "Legen Sie in den Zeitzoneneinstellungen Folgendes fest:",
    "In your threat grid instance, click your user name at the right top corner.":
      "Klicken Sie in Ihrer Threat-Grid-Instanz oben rechts auf Ihren Benutzernamen.",
    "The time zone should be configured to GMT +00:00.":
      "Die Zeitzone muss auf GMT +00:00 eingestellt sein.",
    "Require users to enter additional password":
      "Benutzer zur Eingabe eines zusätzlichen Kennworts auffordern",
    "Select my account.":
      "Wählen Sie mein Konto aus.",
    "Select region":
      "Region auswählen",
    "Server Port (e.g. 4434)":
      "Server-Port (z. B. 4434)",
    "Server URL (e.g. example.net or 8.8.8.8)":
      "Server-URL (z. B. example.net oder 8.8.8.8)",
    "Server URL (e.g., https://192.168.0.1)":
      "Server-URL (z. B. https://192.168.0.1)",
    "Stealthwatch's server URL":
      "Server-URL von Stealthwatch",
    "Supports FMC 6.2.3 and above":
      "Unterstützt FMC 6.2.3 und höher",
    "Search for and analyze data in real time.":
      "Durchsuchen und analysieren Sie Daten in Echtzeit.",
    "Search for and analyze data in real time. Supports version 6 and later.":
      "Durchsuchen und analysieren Sie Daten in Echtzeit. Unterstützt Version 6 und höher.",
    "Supports version 6 and later.":
      "Unterstützt Version 6 und höher.",
    "The first time you connect to the REST API you may receive an error that the connection is not secure due to an invalid certificate. Add an exception in your browser to use the certificate and accept the connection.":
      "Beim ersten Herstellen einer Verbindung mit der REST-API wird möglicherweise ein Fehler angezeigt, dass die Verbindung aufgrund eines ungültigen Zertifikats nicht sicher ist. Fügen Sie in Ihrem Browser eine Ausnahme hinzu, um das Zertifikat zu verwenden und die Verbindung zu akzeptieren.",
    "The user role should have access privilages to the following:":
      "Die Benutzerrolle muss Zugriffsberechtigungen für Folgendes besitzen:",
    "The username and password credentials are used to authenticate with the Cisco SMA API for the provided instance URL.":
      "Die Anmeldedaten (Benutzername und Kennwort) werden zur Authentifizierung bei der Cisco-SMA-API für die angegebene Instanz-URL verwendet.",
    "The username and password required by this integration are the same as the credentials used to login into the Cisco Stelathwatch console.":
      "Der für diese Integration erforderliche Benutzername und das Kennwort entsprechen den Anmeldedaten für die Anmeldung an der Cisco-Stealthwatch-Konsole.",
    "Under the API Key section in the left you will see your API.":
      "Im Abschnitt „API Key“ auf der linken Seite sehen Sie Ihre API.",
    "Use Docker V2 connector in Cortex Cloud to scan and secure container images from any container registry that supports the Docker V2 protocol, ensuring comprehensive security and compliance.":
      "Verwenden Sie den Docker-V2-Konnektor in Cortex Cloud, um Container-Images aus jeder Container-Registry zu scannen und abzusichern, die das Docker-V2-Protokoll unterstützt, und umfassende Sicherheit und Compliance zu gewährleisten.",
    "User Credentials":
      "Benutzeranmeldedaten",
    "When using Cortex credentials, insert your API key as the credential username and your API secret as the password.":
      "Wenn Sie Cortex-Anmeldedaten verwenden, geben Sie Ihren API-Schlüssel als Benutzernamen der Anmeldedaten und Ihr API-Secret als Kennwort ein.",
    "With Token Based Authentication you obtain a token by providing your username and password. You use this token to access an HTTP service for a limited time period without the need for the username and password with every request. In other words, to eliminate the need for authenticating with your username and password with each request.":
      "Bei der tokenbasierten Authentifizierung erhalten Sie ein Token, indem Sie Ihren Benutzernamen und Ihr Kennwort angeben. Mit diesem Token greifen Sie für einen begrenzten Zeitraum auf einen HTTP-Dienst zu, ohne bei jeder Anfrage Benutzernamen und Kennwort angeben zu müssen. Mit anderen Worten: Sie müssen sich nicht bei jeder Anfrage mit Benutzernamen und Kennwort authentifizieren.",
    "OAuth Client":
      "OAuth-Client",
    "Use the generated API key as the":
      "Verwenden Sie den generierten API-Schlüssel als",
    "Use the generated API secret as the":
      "Verwenden Sie das generierte API-Secret als",

    // --- Batch: strings from the Collector export #7 (Code42/Contentful/Claude/Cortex CLI wizard, parameter labels and tooltips) ---
    // Fragments such as "and", "or the", "Follow the", "Go to the", "Run the", "Select the", "To get the", "To use the" are intentionally NOT registered.
    "(API Key ID, API Key)":
      "(API-Schlüssel-ID, API-Schlüssel)",
    "Adjust and refine your configuration settings":
      "Passen Sie Ihre Konfigurationseinstellungen an und verfeinern Sie sie",
    "After this API Client is set up, use the API Client ID and Secret (in the “password” field) to configure the Code42 integration.":
      "Nachdem dieser API-Client eingerichtet wurde, verwenden Sie die API-Client-ID und das Secret (im Feld „password“), um die Code42-Integration zu konfigurieren.",
    "Alert severities to fetch when fetching incidents":
      "Schweregrade von Alerts, die beim Abrufen von Incidents abgerufen werden",
    "Alerts to fetch per run; note that increasing this value may result in slow performance if too many results are returned at once":
      "Alerts, die pro Ausführung abgerufen werden; beachten Sie, dass eine Erhöhung dieses Werts zu Leistungseinbußen führen kann, wenn zu viele Ergebnisse auf einmal zurückgegeben werden",
    "Anthropic Claude (Standard Connector)":
      "Anthropic Claude (Standardkonnektor)",
    "API Client ID":
      "API-Client-ID",
    "API Client Secret":
      "API-Client-Secret",
    "API Gateway URL for your Code42 environment":
      "API-Gateway-URL für Ihre Code42-Umgebung",
    "API Key ID":
      "API-Schlüssel-ID",
    "Authenticate":
      "Authentifizieren",
    "Authenticate using an Anthropic Claude Compliance Access Key (sk-ant-api01-...)":
      "Authentifizieren Sie sich mit einem Anthropic-Claude-Compliance-Zugriffsschlüssel (sk-ant-api01-...)",
    "Base marketplace url":
      "Basis-URL des Marketplace",
    "Capabilities status":
      "Funktionsstatus",
    "Cisco Umbrella Investigate base URL.":
      "Basis-URL von Cisco Umbrella Investigate.",
    "Code42 provides simple, fast detection and response to everyday data loss from insider threats by focusing on customer data on endpoints and the cloud.":
      "Code42 bietet eine einfache und schnelle Erkennung und Reaktion auf alltäglichen Datenverlust durch Insider-Bedrohungen, indem es sich auf Kundendaten auf Endpoints und in der Cloud konzentriert.",
    "Compliance Access Key":
      "Compliance-Zugriffsschlüssel",
    "Configure":
      "Konfigurieren",
    "Contentful Access Token":
      "Contentful-Zugriffstoken",
    "Copy":
      "Kopieren",
    "Copy and paste the key.":
      "Kopieren Sie den Schlüssel und fügen Sie ihn ein.",
    "Copy the command and paste it into your terminal or download it.":
      "Kopieren Sie den Befehl und fügen Sie ihn in Ihr Terminal ein, oder laden Sie ihn herunter.",
    "Core Server URL":
      "Core-Server-URL",
    "Cortex integrates with CI/CD pipelines, helping organizations shift-left. Use the Cortex CLI command line tool to scan container images for vulnerabilities, malware, and secrets. To run and authenticate Cortex CLI, follow the steps below.":
      "Cortex lässt sich in CI/CD-Pipelines integrieren und unterstützt Organisationen beim Shift-Left. Verwenden Sie das Befehlszeilentool Cortex CLI, um Container-Images auf Schwachstellen, Malware und Secrets zu scannen. Um Cortex CLI auszuführen und zu authentifizieren, befolgen Sie die nachstehenden Schritte.",
    "create an API Client":
      "einen API-Client erstellen",
    "Create instance":
      "Instanz erstellen",
    "Default timeout (seconds) for wait on locks to be released":
      "Standard-Timeout (Sekunden) für das Warten auf die Freigabe von Sperren",
    "First fetch time range (<number> <time unit>, e.g., 1 hour, 30 minutes)":
      "Zeitraum des ersten Abrufs (<number> <time unit>, z. B. 1 hour, 30 minutes)",
    "For Cortex or Cortex XSIAM, use the Copy API URL button on the API Keys page. For Cortex, use the server URL.":
      "Verwenden Sie für Cortex oder Cortex XSIAM die Schaltfläche „Copy API URL“ auf der Seite „API Keys“. Verwenden Sie für Cortex die Server-URL.",
    "From the ID column, copy the Key ID.":
      "Kopieren Sie aus der Spalte „ID“ die Schlüssel-ID.",
    "Generate an API Key and API Key ID":
      "API-Schlüssel und API-Schlüssel-ID generieren",
    "Go to Settings -> Configurations -> API Keys.":
      "Wechseln Sie zu Settings -> Configurations -> API Keys.",
    "Include the list of files in returned incidents.":
      "Die Liste der Dateien in den zurückgegebenen Incidents einschließen.",
    "Instance configuration completed":
      "Instanzkonfiguration abgeschlossen",
    "Latest version":
      "Neueste Version",
    "Make sure your API key has the proper permissions. For more information, please refer to the":
      "Stellen Sie sicher, dass Ihr API-Schlüssel über die richtigen Berechtigungen verfügt. Weitere Informationen finden Sie unter:",
    "Marketplace content packs":
      "Marketplace-Content-Packs",
    "Please follow the documentation below for step by step guide on how to onboard your Contentful instance":
      "Folgen Sie der nachstehenden Dokumentation, um eine Schritt-für-Schritt-Anleitung zum Onboarding Ihrer Contentful-Instanz zu erhalten",
    "Review your instance configuration":
      "Überprüfen Sie Ihre Instanzkonfiguration",
    "Run automated actions and remediation commands against the connected service.":
      "Führen Sie automatisierte Aktionen und Behebungsbefehle für den verbundenen Dienst aus.",
    "SaaS Posture Configuration Monitoring":
      "Überwachung der SaaS-Posture-Konfiguration",
    "Scan and protect data across the Claude service":
      "Scannen und schützen Sie Daten im gesamten Claude-Dienst",
    "Select OS":
      "Betriebssystem auswählen",
    "Start typing..":
      "Beginnen Sie mit der Eingabe..",
    "Sub capabilities":
      "Unterfunktionen",
    "Sync integration cache":
      "Integrationscache synchronisieren",
    "The access token is used to authenticate requests to the Contentful Management API. It must have the required permissions to access your organization's configuration.":
      "Das Zugriffstoken wird zur Authentifizierung von Anfragen an die Contentful Management API verwendet. Es muss über die erforderlichen Berechtigungen für den Zugriff auf die Konfiguration Ihrer Organisation verfügen.",
    "The Core Locking integration allows prevention of concurrent execution of scripts or commands, using a wait-lock-release flow (mutex).":
      "Die Integration „Core Locking“ verhindert die gleichzeitige Ausführung von Skripts oder Befehlen mithilfe eines Warten-Sperren-Freigeben-Ablaufs (Mutex).",
    "To authenticate with Cortex CLI, grant it executable permissions and then copy the API key and API key ID below and substitute it with $[CORTEX_API_KEY] and $[CORTEX_API_KEY_ID].":
      "Um sich bei Cortex CLI zu authentifizieren, erteilen Sie ihr Ausführungsberechtigungen, kopieren Sie anschließend den API-Schlüssel und die API-Schlüssel-ID unten und ersetzen Sie damit $[CORTEX_API_KEY] und $[CORTEX_API_KEY_ID].",
    "To configure this integration, you will need to":
      "Um diese Integration zu konfigurieren, müssen Sie",
    "within the Code42 console with the following permissions:":
      "in der Code42-Konsole mit den folgenden Berechtigungen:",
    "Use tenant":
      "Tenant verwenden",
    "Use the lock name argument to support multiple locks in different flows.":
      "Verwenden Sie das Argument „lock name“, um mehrere Sperren in verschiedenen Abläufen zu unterstützen.",
    "Verification pending":
      "Überprüfung ausstehend",
    "Verification Pending":
      "Überprüfung ausstehend",
    "Whether API calls should be made to the current tenant instead of the main tenant.":
      "Legt fest, ob API-Aufrufe an den aktuellen Tenant statt an den Haupt-Tenant gesendet werden sollen.",
    "Whether authentication should be using \"Standard\" API key or \"Advanced\" API key. For XSOAR version < 8.0.0, choose \"Standard\".":
      "Legt fest, ob für die Authentifizierung ein „Standard“-API-Schlüssel oder ein „Advanced“-API-Schlüssel verwendet werden soll. Wählen Sie für XSOAR-Versionen vor 8.0.0 „Standard“.",
    "Whether to sync the integration cache with the database (Available from Cortex).":
      "Legt fest, ob der Integrationscache mit der Datenbank synchronisiert werden soll (verfügbar ab Cortex).",
    "With upload results permissions":
      "Mit Berechtigungen zum Hochladen von Ergebnissen",

    // --- Batch: strings from the Collector export #8 (CrowdStrike/CyberArk EPM/Cybereason/Cribl parameter labels, tooltips and integration card descriptions) ---
    // Fragments such as "and", "The", "In the", "by searching for", "Do not enable", "To get an API client ID and secret, contact" are intentionally NOT registered.
    "(Application ID, Application Secret)":
      "(Anwendungs-ID, Anwendungsgeheimnis)",
    "(Client ID, Secret)":
      "(Client-ID, Secret)",
    "(Credentials, Password)":
      "(Anmeldedaten, Passwort)",
    "(Tenant API Key)":
      "(Tenant-API-Schlüssel)",
    "(Deprecated) Required for local(EPM) authentication only. This parameter is deprecated and no longer used.":
      "(Veraltet) Nur für die lokale (EPM) Authentifizierung erforderlich. Dieser Parameter ist veraltet und wird nicht mehr verwendet.",
    "Advanced threat protection with added local management controls.":
      "Erweiterter Bedrohungsschutz mit zusätzlichen lokalen Verwaltungskontrollen.",
    "Advanced: Time in minutes to look back when fetching events and detections":
      "Erweitert: Zeitspanne in Minuten, die beim Abrufen von Ereignissen und Erkennungen zurückgeblickt wird",
    "Advanced: Time in minutes to look back when fetching incidents and detections":
      "Erweitert: Zeitspanne in Minuten, die beim Abrufen von Incidents und Erkennungen zurückgeblickt wird",
    "An Identity and Access Management integration template.":
      "Eine Integrationsvorlage für Identity and Access Management.",
    "Application Secret":
      "Anwendungsgeheimnis",
    "Asset types to fetch":
      "Abzurufende Asset-Typen",
    "Assets are collected and stored in datasets.":
      "Assets werden erfasst und in Datasets gespeichert.",
    "Assets Fetch Interval":
      "Abrufintervall für Assets",
    "Authenticate with an API token":
      "Mit einem API-Token authentifizieren",
    "Check this box to Enable Polling for Cybereason EPP Malops.":
      "Aktivieren Sie dieses Kontrollkästchen, um das Polling für Cybereason-EPP-Malops zu aktivieren.",
    "Choose what event types to fetch - You can choose any combination. Note: Records from the detection endpoint of the CrowdStrike Falcon UI could be of types: 'Endpoint Detection' and 'OFP Detection'.":
      "Wählen Sie die abzurufenden Ereignistypen aus. Sie können beliebige Kombinationen wählen. Hinweis: Datensätze vom Erkennungs-Endpunkt der CrowdStrike-Falcon-Oberfläche können vom Typ 'Endpoint Detection' und 'OFP Detection' sein.",
    "Choose what incident types to fetch - You can choose any combination. Note:":
      "Wählen Sie die abzurufenden Incident-Typen aus. Sie können beliebige Kombinationen wählen. Hinweis:",
    "Choose what incident types to fetch - You can choose any combination. Note: Records from the detection endpoint of the CrowdStrike Falcon UI could be of types: 'Endpoint Detection' and 'OFP Detection'.":
      "Wählen Sie die abzurufenden Incident-Typen aus. Sie können beliebige Kombinationen wählen. Hinweis: Datensätze vom Erkennungs-Endpunkt der CrowdStrike-Falcon-Oberfläche können vom Typ 'Endpoint Detection' und 'OFP Detection' sein.",
    "Records from the detection endpoint of the CrowdStrike Falcon UI could be of types: 'Endpoint Detection' and 'OFP Detection'.":
      "Datensätze vom Erkennungs-Endpunkt der CrowdStrike-Falcon-Oberfläche können vom Typ 'Endpoint Detection' und 'OFP Detection' sein.",
    "client_id: Service username (configured as OAuth confidential client).":
      "client_id: Dienstbenutzername (als vertraulicher OAuth-Client konfiguriert).",
    "client_secret: Service user password for OAuth2 authentication.":
      "client_secret: Passwort des Dienstbenutzers für die OAuth2-Authentifizierung.",
    "Collect logs and data from Google Workspace.":
      "Erfassen Sie Protokolle und Daten aus Google Workspace.",
    "Collects logs and data from a Google Cloud Platform (GCP) Pub/Sub.":
      "Erfasst Protokolle und Daten aus einem Google Cloud Platform (GCP) Pub/Sub.",
    "Connect GitLab Container Registry with Cortex Cloud to scan and secure your container images, ensuring comprehensive security and compliance.":
      "Verbinden Sie die GitLab Container Registry mit Cortex Cloud, um Ihre Container-Images zu scannen und zu schützen und umfassende Sicherheit und Compliance zu gewährleisten.",
    "Connect Harbor Container Registry with Cortex Cloud to scan and secure your container images, ensuring comprehensive security and compliance.":
      "Verbinden Sie die Harbor Container Registry mit Cortex Cloud, um Ihre Container-Images zu scannen und zu schützen und umfassende Sicherheit und Compliance zu gewährleisten.",
    "Detections from On-Demand Scans filter query":
      "Filterabfrage für Erkennungen aus On-Demand-Scans",
    "Deprecated - We recommend using GSuite Admin instead. Google apps Admin API, or GSuite":
      "Veraltet. Wir empfehlen stattdessen die Verwendung von GSuite Admin. Google apps Admin API oder GSuite",
    "Deprecated. Use FireEyeHX v2 instead.":
      "Veraltet. Verwenden Sie stattdessen FireEyeHX v2.",
    "Deprecated. Use IBM QRadar v2 or IBM QRadar v3 instead.":
      "Veraltet. Verwenden Sie stattdessen IBM QRadar v2 oder IBM QRadar v3.",
    "Deprecated. Use the IBM QRadar v3 integration instead. Fetch offenses from QRadar using Cortex. Supports API versions until 10.0. You can fetch the offenses with their related events and assets by creating a comma-separated list of event fields.":
      "Veraltet. Verwenden Sie stattdessen die Integration IBM QRadar v3. Ruft Offenses aus QRadar mithilfe von Cortex ab. Unterstützt API-Versionen bis 10.0. Sie können die Offenses mit den zugehörigen Ereignissen und Assets abrufen, indem Sie eine durch Kommas getrennte Liste von Ereignisfeldern erstellen.",
    "Endpoint detection and response to manage and query Cybereason Malops, Connections , Processes and many more.":
      "Endpoint Detection and Response zum Verwalten und Abfragen von Cybereason-Malops, Verbindungen, Prozessen und vielem mehr.",
    "Endpoint Detections filter query":
      "Filterabfrage für Endpoint-Erkennungen",
    "Endpoint Information":
      "Endpoint-Informationen",
    "EPM Region-based tenant URL":
      "Regionsbasierte EPM-Tenant-URL",
    "Event Fetch types":
      "Ereignisabruftypen",
    "Events Fetch Interval":
      "Abrufintervall für Ereignisse",
    "ExtraHop Reveal(x) for Cortex is a network detection and response solution that provides complete visibility of network communications at enterprise scale, real-time threat detections backed by machine learning, and guided investigation workflows that simplify response.":
      "ExtraHop Reveal(x) for Cortex ist eine Lösung für Network Detection and Response, die vollständige Transparenz der Netzwerkkommunikation im Unternehmensmaßstab, Echtzeit-Bedrohungserkennung auf Basis von maschinellem Lernen und geführte Untersuchungs-Workflows zur Vereinfachung der Reaktion bietet.",
    "F5 Silverline Threat Intelligence is a cloud-based service incorporating external IP reputation and reducing threat-based communications. By identifying IP addresses and security categories associated with malicious activity, this managed service integrates dynamic lists of threatening IP addresses with the Silverline cloud-based platform, adding context-based security to policy decisions.":
      "F5 Silverline Threat Intelligence ist ein Cloud-basierter Dienst, der externe IP-Reputation einbezieht und bedrohungsbasierte Kommunikation reduziert. Durch die Identifizierung von IP-Adressen und Sicherheitskategorien, die mit bösartigen Aktivitäten in Verbindung stehen, integriert dieser Managed Service dynamische Listen bedrohlicher IP-Adressen in die Cloud-basierte Silverline-Plattform und ergänzt Richtlinienentscheidungen um kontextbasierte Sicherheit.",
    "Fetch Asset types":
      "Asset-Typen abrufen",
    "Fetch assets":
      "Assets abrufen",
    "Fetch Assets":
      "Assets abrufen",
    "Fetch assets and vulnerabilities":
      "Assets und Schwachstellen abrufen",
    "Fetch by \"MALOP UPDATE TIME\" (Fetching by Malop creation time is no longer supported)":
      "Nach \"MALOP UPDATE TIME\" abrufen (Der Abruf nach Malop-Erstellungszeit wird nicht mehr unterstützt)",
    "Fetch events":
      "Ereignisse abrufen",
    "FireEye Email Security (EX) series protects against breaches caused by advanced email attacks.":
      "Die FireEye Email Security (EX)-Serie schützt vor Sicherheitsverletzungen durch fortgeschrittene E-Mail-Angriffe.",
    "FireEye Endpoint Security is an integrated solution that detects and protects endpoints against known and unknown threats. This integration provides access to information about endpoints, acquisitions, alerts, indicators, and containment. You can extract critical data and effectively operate the security operations automated playbook.":
      "FireEye Endpoint Security ist eine integrierte Lösung, die Endpunkte vor bekannten und unbekannten Bedrohungen erkennt und schützt. Diese Integration bietet Zugriff auf Informationen zu Endpunkten, Erfassungen, Alerts, Indikatoren und Eindämmung. Sie können kritische Daten extrahieren und das automatisierte Playbook für Sicherheitsoperationen effektiv betreiben.",
    "First fetch timestamp (<number> <time unit>, e.g., 12 hours, 7 days, 3 months, 1 year)":
      "Zeitstempel des ersten Abrufs (<Zahl> <Zeiteinheit>, z. B. 12 hours, 7 days, 3 months, 1 year)",
    "First fetch timestamp (<number> <time unit>, e.g., 12 hours, 7 days)":
      "Zeitstempel des ersten Abrufs (<Zahl> <Zeiteinheit>, z. B. 12 hours, 7 days)",
    "Flashpoint Vulnerability Feed Integration allows importing vulnerability intelligence from the Flashpoint platform, empowering teams to reduce exposure windows by identifying high-risk vulnerabilities weeks before public sources. This includes independent research, zero-day disclosures, analyst recommendations, affected and non-affected versions, and over 105,000 vulnerabilities not found in the public NVD/CVE feeds database.":
      "Flashpoint Vulnerability Feed Integration ermöglicht den Import von Schwachstellen-Intelligence von der Flashpoint-Plattform und hilft Teams, Expositionszeiträume zu verkürzen, indem Schwachstellen mit hohem Risiko Wochen vor öffentlichen Quellen identifiziert werden. Dazu gehören unabhängige Recherchen, Zero-Day-Offenlegungen, Analystenempfehlungen, betroffene und nicht betroffene Versionen sowie über 105.000 Schwachstellen, die nicht in der öffentlichen NVD/CVE-Feed-Datenbank enthalten sind.",
    "FortiGate provides flawless convergence that can scale to any location: remote office, branch, campus, data center, and cloud. FortiGate always delivered on the concept of hybrid mesh firewalls with FortiManager for unified management and consistent security across complex hybrid environments. The Fortinet FortiOS operating system provides deep visibility and security across a variety of form factors.":
      "FortiGate bietet eine makellose Konvergenz, die an jeden Standort skaliert werden kann: Remote-Büro, Zweigstelle, Campus, Rechenzentrum und Cloud. FortiGate hat das Konzept von Hybrid-Mesh-Firewalls stets mit FortiManager für einheitliche Verwaltung und konsistente Sicherheit in komplexen Hybridumgebungen umgesetzt. Das Betriebssystem Fortinet FortiOS bietet tiefe Transparenz und Sicherheit über eine Vielzahl von Formfaktoren hinweg.",
    "Freshservice is a service management solution that allows customers to manage service requests, incidents, change requests tasks, and problem investigation.":
      "Freshservice ist eine Service-Management-Lösung, mit der Kunden Serviceanfragen, Incidents, Aufgaben für Änderungsanfragen und Problemuntersuchungen verwalten können.",
    "G Suite or Google Workspace Admin is an integration to perform an action on IT infrastructure, create users, update settings, and more administrative tasks.":
      "G Suite oder Google Workspace Admin ist eine Integration zum Ausführen von Aktionen an der IT-Infrastruktur, zum Erstellen von Benutzern, zum Aktualisieren von Einstellungen und für weitere administrative Aufgaben.",
    "Gmail API and user management (This integration replaces the Gmail functionality in the GoogleApps API and G Suite integration).":
      "Gmail-API und Benutzerverwaltung (Diese Integration ersetzt die Gmail-Funktionalität in der GoogleApps-API und der G-Suite-Integration).",
    "Gmail API using OAuth 2.0.":
      "Gmail-API mit OAuth 2.0.",
    "Google Compute Engine delivers virtual machines running in Google's innovative data centers and worldwide fiber network. Compute Engine's tooling and workflow support enable scaling from single instances to global, load-balanced cloud computing.":
      "Google Compute Engine stellt virtuelle Maschinen bereit, die in den innovativen Rechenzentren und im weltweiten Glasfasernetz von Google laufen. Die Tools und die Workflow-Unterstützung von Compute Engine ermöglichen die Skalierung von einzelnen Instanzen bis hin zu globalem Cloud Computing mit Lastverteilung.",
    "Google Sheets is a spreadsheet program that is part of the free web-based Google applications to create and format spreadsheets. Use this integration to create and modify spreadsheets.":
      "Google Sheets ist ein Tabellenkalkulationsprogramm, das Teil der kostenlosen webbasierten Google-Anwendungen zum Erstellen und Formatieren von Tabellen ist. Verwenden Sie diese Integration, um Tabellen zu erstellen und zu ändern.",
    "HTTP Timeout":
      "HTTP-Timeout",
    "IBM QRadar SIEM helps security teams accurately detect and prioritize threats across the enterprise, supports API versions 10.1 and above. Provides intelligent insights that enable teams to respond quickly to reduce the impact of incidents.":
      "IBM QRadar SIEM hilft Sicherheitsteams, Bedrohungen im gesamten Unternehmen präzise zu erkennen und zu priorisieren, und unterstützt API-Versionen ab 10.1. Es liefert intelligente Erkenntnisse, mit denen Teams schnell reagieren können, um die Auswirkungen von Incidents zu verringern.",
    "Identity URL":
      "Identitäts-URL",
    "IDP Detections filter query":
      "Filterabfrage für IDP-Erkennungen",
    "In new Cuckoo installations, a random API token is automatically generated for you, and located in the cuckoo.conf file. In order to authenticate with an API token, insert ‘__token’ in the “Username” textbox, and the token itself in the “Password” textbox.":
      "Bei neuen Cuckoo-Installationen wird automatisch ein zufälliges API-Token generiert, das sich in der Datei cuckoo.conf befindet. Um sich mit einem API-Token zu authentifizieren, geben Sie '__token' in das Textfeld \"Username\" und das Token selbst in das Textfeld \"Password\" ein.",
    "In order to use the CrowdStrike Falcon integration, the API client and secret must have the following scopes and permissions:":
      "Um die CrowdStrike-Falcon-Integration zu verwenden, müssen der API-Client und das Secret über die folgenden Bereiche und Berechtigungen verfügen:",
    "Incident Fetch types":
      "Incident-Abruftypen",
    "Integrate Application Security with your HCP Terraform organization to gain visibility into your Terraform runs.":
      "Integrieren Sie Application Security in Ihre HCP-Terraform-Organisation, um Transparenz über Ihre Terraform-Ausführungen zu erhalten.",
    "Integrate with Envoy Identity Access Management services to execute CRUD operations to employee lifecycle processes.":
      "Integrieren Sie die Envoy-Identity-Access-Management-Dienste, um CRUD-Operationen für Mitarbeiter-Lifecycle-Prozesse auszuführen.",
    "Integrate with Exceed LMS Identity Access Management services to execute CRUD operations to employee lifecycle processes.":
      "Integrieren Sie die Exceed-LMS-Identity-Access-Management-Dienste, um CRUD-Operationen für Mitarbeiter-Lifecycle-Prozesse auszuführen.",
    "Integrate with GitHub services to perform Identity Lifecycle Management operations.":
      "Integrieren Sie GitHub-Dienste, um Identity-Lifecycle-Management-Operationen durchzuführen.",
    "Integration to GitHub API.":
      "Integration mit der GitHub-API.",
    "Integration version of the httpv2 automation used to send HTTP requests for API calls to endpoints not associated with an existing XSOAR integration.":
      "Integrationsversion der httpv2-Automatisierung, die zum Senden von HTTP-Anfragen für API-Aufrufe an Endpunkte verwendet wird, die keiner vorhandenen XSOAR-Integration zugeordnet sind.",
    "IOA filter query":
      "IOA-Filterabfrage",
    "IOM filter query":
      "IOM-Filterabfrage",
    "Log events are collected and stored in datasets.":
      "Protokollereignisse werden erfasst und in Datasets gespeichert.",
    "Long running instance":
      "Langlaufende Instanz",
    "Long running instance for Spotlight vulnerabilities":
      "Langlaufende Instanz für Spotlight-Schwachstellen",
    "Manage identity and access control for Google Cloud Platform resources.":
      "Verwalten Sie Identität und Zugriffssteuerung für Google-Cloud-Platform-Ressourcen.",
    "Mobile Detections filter query":
      "Filterabfrage für mobile Erkennungen",
    "NGSIEM automated leads fetch query":
      "Abrufabfrage für automatisierte NGSIEM-Leads",
    "NGSIEM cases fetch query":
      "Abrufabfrage für NGSIEM-Cases",
    "NGSIEM Detection fetch query":
      "Abrufabfrage für NGSIEM-Erkennungen",
    "NGSIEM incidents fetch query":
      "Abrufabfrage für NGSIEM-Incidents",
    "OFP Detections filter query":
      "Filterabfrage für OFP-Erkennungen",
    "Onboard your GitHub Enterprise on-prem to the Cortex Application Security module to gain comprehensive visibility into your GitHub Enterprise platform assets and scan your repositories’ code, configurations, and CI/CD pipelines for security issues.":
      "Binden Sie Ihr lokales GitHub Enterprise in das Cortex-Application-Security-Modul ein, um umfassende Transparenz über die Assets Ihrer GitHub-Enterprise-Plattform zu erhalten und den Code, die Konfigurationen und die CI/CD-Pipelines Ihrer Repositories auf Sicherheitsprobleme zu scannen.",
    "Onboard your GitHub SaaS to the Cortex Application Security module to gain comprehensive visibility into your GitHub platform assets and scan your repositories’ code, configurations, and CI/CD pipelines for security issues.":
      "Binden Sie Ihr GitHub SaaS in das Cortex-Application-Security-Modul ein, um umfassende Transparenz über die Assets Ihrer GitHub-Plattform zu erhalten und den Code, die Konfigurationen und die CI/CD-Pipelines Ihrer Repositories auf Sicherheitsprobleme zu scannen.",
    "Onboard your GitLab SaaS to the Cortex Application Security module to gain comprehensive visibility into your GitLab platform assets and scan your repositories’ code, configurations, and CI/CD pipelines for security issues.":
      "Binden Sie Ihr GitLab SaaS in das Cortex-Application-Security-Modul ein, um umfassende Transparenz über die Assets Ihrer GitLab-Plattform zu erhalten und den Code, die Konfigurationen und die CI/CD-Pipelines Ihrer Repositories auf Sicherheitsprobleme zu scannen.",
    "Onboard your GitLab Self Managed on-prem to the Cortex Application Security module to gain comprehensive visibility into your GitLab Self Managed platform assets and scan your repositories’ code, configurations, and CI/CD pipelines for security issues.":
      "Binden Sie Ihr lokales GitLab Self Managed in das Cortex-Application-Security-Modul ein, um umfassende Transparenz über die Assets Ihrer GitLab-Self-Managed-Plattform zu erhalten und den Code, die Konfigurationen und die CI/CD-Pipelines Ihrer Repositories auf Sicherheitsprobleme zu scannen.",
    "Only one collection mode per instance.":
      "Nur ein Erfassungsmodus pro Instanz.",
    "Organization Permissions":
      "Organisationsberechtigungen",
    "Perform malware dynamic analysis.":
      "Führen Sie eine dynamische Malware-Analyse durch.",
    "Prerequisites for OAuth 2.0 Authentication":
      "Voraussetzungen für die OAuth-2.0-Authentifizierung",
    "Recon filter query":
      "Recon-Filterabfrage",
    "Reliability of the source providing the intelligence data. Currently used for “CVE” reputation command.":
      "Zuverlässigkeit der Quelle, die die Intelligence-Daten bereitstellt. Wird derzeit für den Reputationsbefehl „CVE“ verwendet.",
    "Required API client scopes":
      "Erforderliche API-Client-Bereiche",
    "Send push notifications to mobile app":
      "Senden Sie Push-Benachrichtigungen an die mobile App",
    "Server URL (e.g., https://api.crowdstrike.com)":
      "Server-URL (z. B. https://api.crowdstrike.com)",
    "Service username (configured as OAuth confidential client).":
      "Dienstbenutzername (als vertraulicher OAuth-Client konfiguriert).",
    "Spotlight asset and vulnerability collection retrieves only vulnerabilities updated within the last 100 days, keeping each collection focused on recent data.":
      "Die Erfassung von Spotlight-Assets und -Schwachstellen ruft nur Schwachstellen ab, die in den letzten 100 Tagen aktualisiert wurden, sodass jede Erfassung auf aktuelle Daten fokussiert bleibt.",
    "Spotlight vulnerabilities only.":
      "Nur Spotlight-Schwachstellen.",
    "Submit a high volume of samples to run in a sandbox and view reports.":
      "Übermitteln Sie ein großes Volumen an Samples zur Ausführung in einer Sandbox und zeigen Sie Berichte an.",
    "Supported asset types include:":
      "Zu den unterstützten Asset-Typen gehören:",
    "Supported in Cortex and Cortex Platform.":
      "Wird in Cortex und Cortex Platform unterstützt.",
    "Supported in Cortex and Cortex Platform. Input a value between 1-500. Default is 15.":
      "Wird in Cortex und Cortex Platform unterstützt. Geben Sie einen Wert zwischen 1 und 500 ein. Der Standardwert ist 15.",
    "Tenant API Key":
      "Tenant-API-Schlüssel",
    "tenant_url: The tenant URL for EPM region (e.g., https://api-na.epm.cyberark.cloud)":
      "tenant_url: Die Tenant-URL für die EPM-Region (z. B. https://api-na.epm.cyberark.cloud)",
    "The Application ID of the OAuth2 Server web app configured in Identity Administration.":
      "Die Anwendungs-ID der OAuth2-Server-Web-App, die in Identity Administration konfiguriert ist.",
    "The asset sources to ingest into the Cortex Unified Asset Inventory.":
      "Die Asset-Quellen, die in das Cortex Unified Asset Inventory aufgenommen werden sollen.",
    "The base URL assigned to your organization: https://${workspaceName}-${organizationId}.cribl.cloud":
      "Die Ihrer Organisation zugewiesene Basis-URL: https://${workspaceName}-${organizationId}.cribl.cloud",
    "The Cortex Core - IOCs integration uses the Cortex API for detection and response, by natively integrating network, endpoint, and cloud data to stop sophisticated attacks.":
      "Die Integration Cortex Core - IOCs verwendet die Cortex-API für Erkennung und Reaktion und integriert Netzwerk-, Endpunkt- und Cloud-Daten nativ, um ausgeklügelte Angriffe zu stoppen.",
    "The CyberArk Identity FQDN for OAuth2 authentication (e.g., https://abc1234.id.cyberark.cloud).":
      "Der CyberArk-Identity-FQDN für die OAuth2-Authentifizierung (z. B. https://abc1234.id.cyberark.cloud).",
    "The fetch interval for assets and vulnerabilities. It is recommended to set it to 1 hour.":
      "Das Abrufintervall für Assets und Schwachstellen. Es wird empfohlen, es auf 1 Stunde festzulegen.",
    "The Illusive Attack Management API allows customers to retrieve detected incidents with a forensics timeline, attack surface insights, collect forensics on-demand, and manage a variety of operations with regard to deceptive entities, deception policies, and more.":
      "Die Illusive Attack Management API ermöglicht es Kunden, erkannte Incidents mit einer forensischen Zeitleiste abzurufen, Einblicke in die Angriffsfläche zu erhalten, Forensikdaten bei Bedarf zu erfassen und eine Vielzahl von Vorgängen im Zusammenhang mit Täuschungsentitäten, Täuschungsrichtlinien und mehr zu verwalten.",
    "The Indicator of Attack (IOA) fetch query. This is an FQL filter that is combined with the time-range filter using AND. For example: cloud_provider:'aws'. For more information, see the Falcon Query Language (FQL) documentation at: https://www.falconpy.io/Usage/Falcon-Query-Language.html.":
      "Die Abrufabfrage für Indicator of Attack (IOA). Dies ist ein FQL-Filter, der mit AND mit dem Zeitbereichsfilter kombiniert wird. Beispiel: cloud_provider:'aws'. Weitere Informationen finden Sie in der Dokumentation zu Falcon Query Language (FQL) unter: https://www.falconpy.io/Usage/Falcon-Query-Language.html.",
    "The tenant URL for EPM region (e.g., https://api-na.epm.cyberark.cloud).":
      "Die Tenant-URL für die EPM-Region (z. B. https://api-na.epm.cyberark.cloud).",
    "The timeout of the HTTP requests sent to Cortex API (in seconds).":
      "Das Timeout der an die Cortex-API gesendeten HTTP-Anfragen (in Sekunden).",
    "THF Polygon is a Malware Detonation & Research platform designed for deep dynamic analysis and enhanced indicators extraction. THF Polygon analyzes submitted files and urls and extracts deep IOCs that appear when malicious code is triggered and executed. Polygon could be used either for application-level tasks (like smtp-based mail filtering) and analytical purposes (files/urls analysis for verdict, report and indicators).":
      "THF Polygon ist eine Plattform für Malware-Detonation und -Forschung, die für tiefgehende dynamische Analysen und eine erweiterte Extraktion von Indikatoren entwickelt wurde. THF Polygon analysiert übermittelte Dateien und URLs und extrahiert detaillierte IOCs, die beim Auslösen und Ausführen von Schadcode auftreten. Polygon kann sowohl für Aufgaben auf Anwendungsebene (wie SMTP-basierte E-Mail-Filterung) als auch für Analysezwecke (Datei-/URL-Analyse für Verdikt, Bericht und Indikatoren) verwendet werden.",
    "Third Party Detection fetch query":
      "Abrufabfrage für Drittanbieter-Erkennungen",
    "This integration is enabled by default for the new CrowdStrike Raptor version.":
      "Diese Integration ist für die neue CrowdStrike-Raptor-Version standardmäßig aktiviert.",
    "This integration was integrated and tested with version 23.2.1 of Cybereason Server":
      "Diese Integration wurde mit Version 23.2.1 von Cybereason Server integriert und getestet",
    "To authenticate to EPM with OAuth2, provide the following:":
      "Um sich mit OAuth2 bei EPM zu authentifizieren, geben Sie Folgendes an:",
    "To specify an endpoint, use the following command arguments:":
      "Um einen Endpunkt anzugeben, verwenden Sie die folgenden Befehlsargumente:",
    "token_url: The CyberArk Identity FQDN for OAuth2 authentication (e.g., https://abc1234.id.cyberark.cloud)":
      "token_url: Der CyberArk-Identity-FQDN für die OAuth2-Authentifizierung (z. B. https://abc1234.id.cyberark.cloud)",
    "Troubleshooting":
      "Fehlerbehebung",
    "Use Falcon Query Language (FQL) to filter results. For more information, see the [FQL Syntax Documentation](https://www.falconpy.io/Usage/Falcon-Query-Language.html).":
      "Verwenden Sie Falcon Query Language (FQL), um Ergebnisse zu filtern. Weitere Informationen finden Sie in der [FQL Syntax Documentation](https://www.falconpy.io/Usage/Falcon-Query-Language.html).",
    "Use the Cortex Github Action to integrate with your GitHub Workflows and gain visibility into your workflows.":
      "Verwenden Sie die Cortex Github Action, um sich in Ihre GitHub-Workflows zu integrieren und Transparenz über Ihre Workflows zu erhalten.",
    "Use the Falcon Query Language to refine the data collected. For more information, refer to the FQL syntax documentation: https://www.falconpy.io/Usage/Falcon-Query-Language.html":
      "Verwenden Sie Falcon Query Language, um die erfassten Daten zu verfeinern. Weitere Informationen finden Sie in der Dokumentation zur FQL-Syntax: https://www.falconpy.io/Usage/Falcon-Query-Language.html",
    "Use the Generic Export Indicators Service integration to provide an endpoint with a list of indicators as a service for the system indicators.":
      "Verwenden Sie die Integration Generic Export Indicators Service, um einem Endpunkt eine Liste von Indikatoren als Dienst für die Systemindikatoren bereitzustellen.",
    "Use the Generic SQL integration to run SQL queries on the following databases: MySQL, PostgreSQL, Microsoft SQL Server, Oracle, Teradata and Trino.":
      "Verwenden Sie die Integration Generic SQL, um SQL-Abfragen für die folgenden Datenbanken auszuführen: MySQL, PostgreSQL, Microsoft SQL Server, Oracle, Teradata und Trino.",
    "Use the Google Maps API.":
      "Verwenden Sie die Google-Maps-API.",
    "Use this integration to connect securely with a GitHub Model Context Protocol (MCP) server and access its tools in real time.":
      "Verwenden Sie diese Integration, um sich sicher mit einem GitHub-Model-Context-Protocol-(MCP-)Server zu verbinden und in Echtzeit auf dessen Tools zuzugreifen.",
    "Use this integration to connect to an MCP server and automatically discover its available tools.":
      "Verwenden Sie diese Integration, um sich mit einem MCP-Server zu verbinden und dessen verfügbare Tools automatisch zu ermitteln.",
    "Use this parameter to determine the look-back period for searching for events that were created before the last run time and did not match the query when they were created.":
      "Verwenden Sie diesen Parameter, um den Rückblickzeitraum für die Suche nach Ereignissen festzulegen, die vor der letzten Ausführungszeit erstellt wurden und bei ihrer Erstellung nicht zur Abfrage passten.",
    "Use this parameter to determine the look-back period for searching for incidents that were created before the last run time and did not match the query when they were created.":
      "Verwenden Sie diesen Parameter, um den Rückblickzeitraum für die Suche nach Incidents festzulegen, die vor der letzten Ausführungszeit erstellt wurden und bei ihrer Erstellung nicht zur Abfrage passten.",
    "Username (Only if your cuckoo service requires HTTP auth)":
      "Benutzername (nur wenn Ihr Cuckoo-Dienst HTTP-Authentifizierung erfordert)",
    "Web App ID":
      "Web-App-ID",
    "web_app_id: The Application ID of the OAuth2 Server web app configured in Identity Administration.":
      "web_app_id: Die Anwendungs-ID der OAuth2-Server-Web-App, die in Identity Administration konfiguriert ist.",
    "When using this parameter, note that:":
      "Beachten Sie bei Verwendung dieses Parameters Folgendes:",

    // --- Batch: strings from the Collector export #9 (integration card descriptions, error/maintenance messages, dashboard widget titles) ---
    // Fragments such as "and", "The", "In the", "by searching for", "Do not enable", "To get an API client ID and secret, contact" are intentionally NOT registered.
    "A utility for testing incident fetching with mock JSON data.":
      "Ein Hilfsprogramm zum Testen des Incident-Abrufs mit simulierten JSON-Daten.",
    "Access the full set of possibilities the JoeSandbox Cloud provides via the RESTful Web API v2.":
      "Greifen Sie über die RESTful Web API v2 auf alle Möglichkeiten von JoeSandbox Cloud zu.",
    "Agent Content Version Breakdown (Top 5)":
      "Aufschlüsselung der Agent-Content-Versionen (Top 5)",
    "Agent Version Breakdown (Top 5)":
      "Aufschlüsselung der Agent-Versionen (Top 5)",
    "Top Hosts (Top 10 | Last 30 days)":
      "Top-Hosts (Top 10 | Letzte 30 Tage)",
    "Collect and assess security posture of the Snowflake data cloud.":
      "Erfassen und bewerten Sie die Sicherheitslage der Snowflake Data Cloud.",
    "Collect logs and data from Salesforce.":
      "Erfassen Sie Protokolle und Daten aus Salesforce.",
    "Collects logs and data from Okta identity and access management service.":
      "Erfasst Protokolle und Daten aus dem Okta-Dienst für Identitäts- und Zugriffsverwaltung.",
    "Connect JFrog Container Registry with Cortex Cloud to scan and secure your container images, ensuring robust artifact management and enhanced security.":
      "Verbinden Sie die JFrog Container Registry mit Cortex Cloud, um Ihre Container-Images zu scannen und zu schützen und ein robustes Artefaktmanagement sowie erhöhte Sicherheit zu gewährleisten.",
    "Connect OpenShift Internal Registry with Cortex Cloud using the Kubernetes datasource to scan and secure your container images, ensuring comprehensive security and compliance.":
      "Verbinden Sie die OpenShift Internal Registry über die Kubernetes-Datenquelle mit Cortex Cloud, um Ihre Container-Images zu scannen und zu schützen und umfassende Sicherheit und Compliance zu gewährleisten.",
    "Connect Sonatype Nexus Registry with Cortex Cloud to scan and secure your container images, ensuring comprehensive security and compliance.":
      "Verbinden Sie die Sonatype Nexus Registry mit Cortex Cloud, um Ihre Container-Images zu scannen und zu schützen und umfassende Sicherheit und Compliance zu gewährleisten.",
    "Deprecated. Use Joe Security v2 instead.":
      "Veraltet. Verwenden Sie stattdessen Joe Security v2.",
    "Enterprise Mobility Management (EMM) for Apple devices (Mac, iPhone, Apple TV, iPad). Can be used to control various configurations via different policies, install and uninstall applications, lock devices, smart groups searches, and more.":
      "Enterprise Mobility Management (EMM) für Apple-Geräte (Mac, iPhone, Apple TV, iPad). Kann verwendet werden, um verschiedene Konfigurationen über unterschiedliche Richtlinien zu steuern, Anwendungen zu installieren und zu deinstallieren, Geräte zu sperren, Smart-Group-Suchen durchzuführen und vieles mehr.",
    "Error Occurred":
      "Fehler aufgetreten",
    "Failed getting content pack recommended":
      "Empfohlenes Content Pack konnte nicht abgerufen werden",
    "failed to get content items status":
      "Status der Inhaltselemente konnte nicht abgerufen werden",
    "Failed to retrieve data source":
      "Datenquelle konnte nicht abgerufen werden",
    "Integrate Application Security with your Terraform Enterprise organization to gain visibility into your Terraform runs.":
      "Integrieren Sie Application Security in Ihre Terraform-Enterprise-Organisation, um Transparenz über Ihre Terraform-Ausführungen zu erhalten.",
    "Integrate Semgrep to gain a unified overview of your application security posture.":
      "Integrieren Sie Semgrep, um einen einheitlichen Überblick über Ihre Anwendungssicherheitslage zu erhalten.",
    "Integrate Snyk to gain a unified overview of your application security posture.":
      "Integrieren Sie Snyk, um einen einheitlichen Überblick über Ihre Anwendungssicherheitslage zu erhalten.",
    "Integrate SonarQube to gain a unified overview of your application security posture.":
      "Integrieren Sie SonarQube, um einen einheitlichen Überblick über Ihre Anwendungssicherheitslage zu erhalten.",
    "Integrate Veracode to gain a unified overview of your application security posture.":
      "Integrieren Sie Veracode, um einen einheitlichen Überblick über Ihre Anwendungssicherheitslage zu erhalten.",
    "Microsoft Entra ID (formerly Azure AD) integration for identity & access posture monitoring":
      "Integration von Microsoft Entra ID (früher Azure AD) zur Überwachung der Identitäts- und Zugriffslage",
    "MongoDB Atlas cloud database platform":
      "MongoDB-Atlas-Cloud-Datenbankplattform",
    "Multi-service security integration for Microsoft 365 including OneDrive, SharePoint, Teams, and Entra ID.":
      "Multi-Service-Sicherheitsintegration für Microsoft 365, einschließlich OneDrive, SharePoint, Teams und Entra ID.",
    "New data is being collected":
      "Neue Daten werden erfasst",
    "Onboard your Jenkins server for comprehensive Application Security: Integrate Cortex CLI scans for your code, and secure your CI/CD pipelines.":
      "Binden Sie Ihren Jenkins-Server für umfassende Application Security ein: Integrieren Sie Cortex-CLI-Scans für Ihren Code und sichern Sie Ihre CI/CD-Pipelines.",
    "Please try again later":
      "Bitte versuchen Sie es später erneut",
    "Select dashboard":
      "Dashboard auswählen",
    "Show Less":
      "Weniger anzeigen",
    "Something went wrong...":
      "Etwas ist schiefgelaufen...",
    "Sorry, something went wrong...":
      "Entschuldigung, etwas ist schiefgelaufen...",
    "The Cortex Core IR integration uses the Cortex API for detection and response, by natively integrating network, endpoint, and cloud data to stop sophisticated attacks.":
      "Die Integration Cortex Core IR verwendet die Cortex-API für Erkennung und Reaktion und integriert Netzwerk-, Endpunkt- und Cloud-Daten nativ, um ausgeklügelte Angriffe zu stoppen.",
    "Under Maintenance":
      "In Wartung",

    // --- Batch: strings from the Collector export #10 (dashboard picker/empty-state strings, Cylance deprecation notice) ---
    // Fragments such as "and", "The", "In the", "by searching for", "Do not enable", "To get an API client ID and secret, contact" are intentionally NOT registered.
    "+ Create new dashboard":
      "+ Neues Dashboard erstellen",
    "Command Centers":
      "Command Center",
    "Common Dashboards":
      "Allgemeine Dashboards",
    "Troubleshooting Instances":
      "Fehlerbehebung für Instanzen",
    "Troubleshooting Playbooks":
      "Fehlerbehebung für Playbooks",
    "Automation Insights":
      "Automatisierungs-Insights",
    "Connect Data Sources":
      "Datenquellen verbinden",
    "Get started with Cortex Cloud by connecting your cloud environment as data sources.":
      "Beginnen Sie mit Cortex Cloud, indem Sie Ihre Cloud-Umgebung als Datenquellen verbinden.",
    "Ready to Secure Your Cloud?":
      "Bereit, Ihre Cloud zu schützen?",
    "Scanning in Progress...":
      "Scan läuft...",
    "Your top priority vulnerabilities will be here shortly":
      "Ihre Schwachstellen mit höchster Priorität werden in Kürze hier angezeigt",
    "Deprecated. This service has been discontinued for external users by Cylance. No available replacement.":
      "Veraltet. Dieser Dienst wurde von Cylance für externe Benutzer eingestellt. Es ist kein Ersatz verfügbar.",

    // --- Batch: strings from the Collector export #11 (Databricks/Doppel integration docs and parameters, Databricks posture wizard, Bitbucket cards) ---
    // Fragments such as "and", "The", "In the", "by searching for", "Do not enable", "To get an API client ID and secret, contact" are intentionally NOT registered.
    "“403 Forbidden” errors on specific commands:":
      "„403 Forbidden“-Fehler bei bestimmten Befehlen:",
    "“Test failed” when configuring the integration:":
      "„Test failed“ beim Konfigurieren der Integration:",
    "(API Key (V1))":
      "(API-Schlüssel (V1))",
    "(Client ID (V2), Client Secret (V2))":
      "(Client-ID (V2), Client-Secret (V2))",
    "(User API Key (V1))":
      "(Benutzer-API-Schlüssel (V1))",
    "API Key (V1)":
      "API-Schlüssel (V1)",
    "User API Key (V1)":
      "Benutzer-API-Schlüssel (V1)",
    "Client ID (V2)":
      "Client-ID (V2)",
    "Client Secret (V2)":
      "Client-Secret (V2)",
    "Organization Code (V1)":
      "Organisationscode (V1)",
    "Doppel Tenant URL":
      "Doppel-Tenant-URL",
    "Attach alert screenshots to incidents":
      "Alert-Screenshots an Incidents anhängen",
    "Check “First fetch time” — a very short window may miss older events":
      "Prüfen Sie „First fetch time“ – ein sehr kurzes Zeitfenster kann ältere Ereignisse übersehen",
    "Check that the token has permission to access SQL Warehouses (used for connectivity test)":
      "Prüfen Sie, ob das Token die Berechtigung für den Zugriff auf SQL Warehouses hat (wird für den Verbindungstest verwendet)",
    "Confirm “Fetch types” is set to at least one of: SQL Alerts, Failed Jobs":
      "Stellen Sie sicher, dass „Fetch types“ auf mindestens einen der folgenden Werte festgelegt ist: SQL Alerts, Failed Jobs",
    "Copy the token immediately — it will not be shown again":
      "Kopieren Sie das Token sofort – es wird nicht erneut angezeigt",
    "Databricks Free Edition does not support all APIs (e.g., SCIM, cluster creation). Commands targeting unsupported features will return 403":
      "Databricks Free Edition unterstützt nicht alle APIs (z. B. SCIM, Cluster-Erstellung). Befehle für nicht unterstützte Funktionen geben 403 zurück",
    "Ensure the Personal Access Token is valid and has not expired":
      "Stellen Sie sicher, dass das Personal Access Token gültig und nicht abgelaufen ist",
    "For SQL Alerts, verify alerts exist and have been triggered in your workspace":
      "Prüfen Sie bei SQL Alerts, ob Alerts vorhanden sind und in Ihrem Workspace ausgelöst wurden",
    "Increase the HTTP timeout in the integration instance advanced settings if needed":
      "Erhöhen Sie bei Bedarf das HTTP-Timeout in den erweiterten Einstellungen der Integrationsinstanz",
    "Log in to your Databricks workspace":
      "Melden Sie sich bei Ihrem Databricks-Workspace an",
    "Some APIs require admin-level permissions. Verify your token’s user has the required role":
      "Einige APIs erfordern Berechtigungen auf Administratorebene. Prüfen Sie, ob der Benutzer des Tokens über die erforderliche Rolle verfügt",
    "How to Generate a Personal Access Token":
      "So generieren Sie ein Personal Access Token",
    "Test Configuration":
      "Konfiguration testen",
    "Databricks Workspace URL":
      "Databricks-Workspace-URL",
    "Fetch incidents returns no results:":
      "Der Abruf von Incidents liefert keine Ergebnisse:",
    "Timeout errors on large queries:":
      "Timeout-Fehler bei großen Abfragen:",
    "Fetch incidents timeout":
      "Timeout für den Incident-Abruf",
    "Fetch types":
      "Abruftypen",
    "Number of incidents for each fetch.":
      "Anzahl der Incidents pro Abruf.",
    "Polling interval":
      "Polling-Intervall",
    "Issue type (if classifier doesn't exist)":
      "Problemtyp (falls kein Klassifizierer vorhanden ist)",
    "No issue type":
      "Kein Problemtyp",
    "Issue type will be set by this field if a Classifier does not exist. If a classifier is selected, it will take precedence.":
      "Der Problemtyp wird über dieses Feld festgelegt, wenn kein Klassifizierer vorhanden ist. Wenn ein Klassifizierer ausgewählt ist, hat dieser Vorrang.",
    "Default polling interval value for `demisto-lock-get`, can be overridden by the \"polling_interval\" argument.":
      "Standardwert für das Polling-Intervall von `demisto-lock-get`; kann mit dem Argument \"polling_interval\" überschrieben werden.",
    "Due to API limitations, the maximum is 100.":
      "Aufgrund von API-Einschränkungen beträgt der Maximalwert 100.",
    "e.g., 3 days, 1 week":
      "z. B. 3 days, 1 week",
    "The Doppel API version to use. V1 authenticates with a static API Key; V2 authenticates with OAuth 2.0 client credentials (Client ID and Client Secret). New Doppel API capabilities are added to V2 only, so V2 is recommended.":
      "Die zu verwendende Doppel-API-Version. V1 authentifiert sich mit einem statischen API-Schlüssel; V2 authentifiziert sich mit OAuth-2.0-Client-Anmeldedaten (Client-ID und Client-Secret). Neue Doppel-API-Funktionen werden nur zu V2 hinzugefügt, daher wird V2 empfohlen.",
    "The Doppel server URL that will be used for calling the APIs.":
      "Die Doppel-Server-URL, die für API-Aufrufe verwendet wird.",
    "The interval specifies the cadence with which the Doppel alerts be fetched.":
      "Das Intervall legt fest, in welchem Takt die Doppel-Alerts abgerufen werden.",
    "The Organization Code to use for connection with Doppel. Applies to API Version V1 only; V2 scopes requests to your organization automatically.":
      "Der Organisationscode für die Verbindung mit Doppel. Gilt nur für API-Version V1; V2 beschränkt Anfragen automatisch auf Ihre Organisation.",
    "The time limit in seconds for fetch incidents to run. Leave this empty to cancel the timeout limit.":
      "Das Zeitlimit in Sekunden für die Ausführung des Incident-Abrufs. Lassen Sie das Feld leer, um das Zeitlimit aufzuheben.",
    "Types of events to fetch as incidents.":
      "Ereignistypen, die als Incidents abgerufen werden.",
    "Whether incoming mirroring downloads the alert screenshot and attaches it to the incident as a War Room file entry whenever the screenshot version changes. Screenshots are stored in your Cortex instance. The doppel-get-alert-screenshot command works regardless of this setting.":
      "Legt fest, ob beim eingehenden Spiegeln der Alert-Screenshot heruntergeladen und bei jeder Änderung der Screenshot-Version als War-Room-Dateieintrag an den Incident angehängt wird. Screenshots werden in Ihrer Cortex-Instanz gespeichert. Der Befehl doppel-get-alert-screenshot funktioniert unabhängig von dieser Einstellung.",
    "Details for Doppel workflow":
      "Details zum Doppel-Workflow",
    "Credentials for the API Version you select (see below).":
      "Anmeldedaten für die ausgewählte API-Version (siehe unten).",
    "Reach out to Doppel to get access to the above information.":
      "Wenden Sie sich an Doppel, um Zugriff auf die oben genannten Informationen zu erhalten.",
    "Name of the instance.":
      "Name der Instanz.",
    "Doppel is a Modern Digital Risk Protection Solution, that detects the phishing and brand cyber attacks on the emerging channels. Doppel scans millions of channels online which includes, social media, domains, paid ads, dark web, emerging channels, etc. Doppel can identify the malicious content and cyber threats, and enables their customers to take down the digital risks proactively. The Cortex pack for Doppel provides mirrors the alerts created by Doppel as Cortex incidents. The pack also contains the commands to perform different operations on Doppel alerts.":
      "Doppel ist eine moderne Lösung zum Schutz vor digitalen Risiken, die Phishing- und Marken-Cyberangriffe auf neuen Kanälen erkennt. Doppel scannt Millionen von Online-Kanälen, darunter soziale Medien, Domains, bezahlte Anzeigen, das Dark Web und neu entstehende Kanäle. Doppel kann bösartige Inhalte und Cyberbedrohungen identifizieren und ermöglicht es Kunden, digitale Risiken proaktiv zu beseitigen. Das Cortex-Pack für Doppel spiegelt die von Doppel erstellten Alerts als Cortex-Incidents. Das Pack enthält außerdem die Befehle zum Ausführen verschiedener Operationen für Doppel-Alerts.",
    "The Demisto Locking integration allows prevention of concurrent execution of scripts or commands, using a wait-lock-release flow (mutex).":
      "Die Integration Demisto Locking verhindert die gleichzeitige Ausführung von Skripten oder Befehlen mithilfe eines Warten-Sperren-Freigeben-Ablaufs (Mutex).",
    "Allow access by IP's":
      "Zugriff nach IP zulassen",
    "Applicable Broker VMs":
      "Anwendbare Broker-VMs",
    "Both cloud and region will be used for scanning and can incur cost and compliance if selected incorrectly.":
      "Sowohl Cloud als auch Region werden für das Scannen verwendet und können bei falscher Auswahl Kosten und Compliance-Probleme verursachen.",
    "Choose regions":
      "Regionen auswählen",
    "Databricks Account ID":
      "Databricks-Konto-ID",
    "Databricks Instance":
      "Databricks-Instanz",
    "Define static IPs and cloud regions for the connector if required by your security settings.":
      "Definieren Sie statische IPs und Cloud-Regionen für den Connector, falls dies in Ihren Sicherheitseinstellungen erforderlich ist.",
    "Enter instance name":
      "Instanznamen eingeben",
    "Establish Connection":
      "Verbindung herstellen",
    "For Container Registries with network policies, it is required to allow access from the following IP addresses:":
      "Für Container-Registries mit Netzwerkrichtlinien muss der Zugriff von den folgenden IP-Adressen zugelassen werden:",
    "Insert Account ID":
      "Konto-ID eingeben",
    "Insert Application id":
      "Anwendungs-ID eingeben",
    "Integrate Cloud Security with your Databricks Account to gain comprehensive visibility into any data and posture risk existing in your Databricks environment.This integration enables automated scanning of all assets in Databricks,including data classification and risk assessment.":
      "Integrieren Sie Cloud Security in Ihr Databricks-Konto, um umfassende Transparenz über alle Daten und Sicherheitsrisiken in Ihrer Databricks-Umgebung zu erhalten. Diese Integration ermöglicht das automatisierte Scannen aller Assets in Databricks, einschließlich Datenklassifizierung und Risikobewertung.",
    "Invalid account ID":
      "Ungültige Konto-ID",
    "My Databricks account protected by network policies":
      "Mein durch Netzwerkrichtlinien geschütztes Databricks-Konto",
    "Scan with Broker VM":
      "Mit Broker-VM scannen",
    "Scanning in private networks is done using broker VM infrastructure":
      "Das Scannen in privaten Netzwerken erfolgt über die Broker-VM-Infrastruktur",
    "Scanning is done on infrastructure deployed to a cloud account owned by you. This mode requires additional cloud provider permissions and may incur additional cloud costs.":
      "Das Scannen erfolgt auf einer Infrastruktur, die in einem Cloud-Konto bereitgestellt wird, das Ihnen gehört. Dieser Modus erfordert zusätzliche Berechtigungen des Cloud-Anbieters und kann zusätzliche Cloud-Kosten verursachen.",
    "Select a cloud provider and region in order to retrieve an IP address.":
      "Wählen Sie einen Cloud-Anbieter und eine Region aus, um eine IP-Adresse abzurufen.",
    "Select Cloud provider":
      "Cloud-Anbieter auswählen",
    "Select Cluster":
      "Cluster auswählen",
    "Verify Connection":
      "Verbindung überprüfen",

    // --- Batch: fragment strings for the Databricks integration doc page (fragments whose neighbouring nodes are known; registered as a set so the sentence reads correctly) ---
    // Fragments such as "and", "The", "In the", "by searching for", "Do not enable", "To get an API client ID and secret, contact" are intentionally NOT registered.
    "A Databricks workspace with a valid URL (e.g.,":
      "Ein Databricks-Workspace mit einer gültigen URL (z. B.",
    "A Personal Access Token (PAT) with at minimum":
      "Ein Personal Access Token (PAT) mit mindestens dem",
    "access. Admin-level permissions are required for IAM (SCIM), IP access lists, and global init script commands":
      "Zugriff. Für IAM (SCIM), IP-Zugriffslisten und globale Init-Skriptbefehle sind Berechtigungen auf Administratorebene erforderlich",
    "Click your username in the top-right corner and select":
      "Klicken Sie oben rechts auf Ihren Benutzernamen und wählen Sie",
    "Enter a description and optional lifetime, then click":
      "Geben Sie eine Beschreibung und optional eine Gültigkeitsdauer ein und klicken Sie dann auf",
    "Verify the Workspace URL is correct (no trailing slash, includes":
      "Prüfen Sie, ob die Workspace-URL korrekt ist (kein abschließender Schrägstrich, enthält",
    ": Your workspace URL (e.g.,":
      ": Ihre Workspace-URL (z. B.",
    ": The PAT generated above":
      ": Das oben generierte PAT",
    ": Enable to pull SQL alerts and failed job runs as incidents":
      ": Aktivieren, um SQL-Alerts und fehlgeschlagene Job-Ausführungen als Incidents abzurufen",
    "SQL Statement Execute may time out for long-running queries. Use":
      "SQL Statement Execute kann bei lang laufenden Abfragen ein Timeout auslösen. Verwenden Sie",
    "to poll for results":
      "um die Ergebnisse abzufragen",

    // --- Batch: EWS O365 / Exchange Online / Dropbox / Elasticsearch integration doc page (Collector export 2026-10-11 09:38) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    "Action Required":
      "Aktion erforderlich",
    "App authentication":
      "App-Authentifizierung",
    "Important note: Retirement of RBAC Application Impersonation":
      "Wichtiger Hinweis: Einstellung von RBAC Application Impersonation",
    "Microsoft EWS Retirement and EwsAllowedAppIds":
      "Einstellung von Microsoft EWS und EwsAllowedAppIds",
    "Permissions Needed":
      "Erforderliche Berechtigungen",
    "Set up the Third Party System":
      "Drittanbietersystem einrichten",
    "Verify that the admin account has sufficient Exchange Online permissions":
      "Prüfen Sie, ob das Administratorkonto über ausreichende Exchange-Online-Berechtigungen verfügt",
    "For customers using a Self-Deployed Application":
      "Für Kunden, die eine selbst bereitgestellte Anwendung verwenden",
    "For customers using the Cortex Application authentication method":
      "Für Kunden, die die Authentifizierungsmethode Cortex Application verwenden",
    "(For full details, complete timelines, and PowerShell scripts for safely appending to an existing allow list, refer to the official Microsoft documentation:":
      "(Vollständige Details, Zeitpläne und PowerShell-Skripte zum sicheren Ergänzen einer vorhandenen Zulassungsliste finden Sie in der offiziellen Microsoft-Dokumentation:",
    "After authorizing the Demisto app, you will get an ID, Token, and Key, which needs to be added to the integration instance configuration’s corresponding fields.":
      "Nachdem Sie die Demisto-App autorisiert haben, erhalten Sie eine ID, ein Token und einen Schlüssel, die den entsprechenden Feldern der Konfiguration der Integrationsinstanz hinzugefügt werden müssen.",
    "As of February 2025, the Impersonation access type of the integration is deprecated by Microsoft, read about it":
      "Seit Februar 2025 ist der Zugriffstyp Impersonation der Integration von Microsoft als veraltet eingestuft. Weitere Informationen finden Sie",
    "As part of this transition, Microsoft is moving away from unrestricted EWS access and has introduced a new tenant-level allow list called":
      "Im Rahmen dieser Umstellung rückt Microsoft vom uneingeschränkten EWS-Zugriff ab und hat eine neue Zulassungsliste auf Tenant-Ebene eingeführt. Sie heißt",
    "Assign Azure AD roles to the application.":
      "Weisen Sie der Anwendung Azure-AD-Rollen zu.",
    "Assign custom role groups to the application using service principals.":
      "Weisen Sie der Anwendung mithilfe von Dienstprinzipalen benutzerdefinierte Rollengruppen zu.",
    "Attach the .cer file to your Azure app.":
      "Hängen Sie die .cer-Datei an Ihre Azure-App an.",
    "Attach the .cer file to your Azure App.":
      "Hängen Sie die .cer-Datei an Ihre Azure-App an.",
    "Authentication Type (NTLM, Basic, or Digest). For Office 365 use Basic.":
      "Authentifizierungstyp (NTLM, Basic oder Digest). Verwenden Sie für Office 365 Basic.",
    "Authentication: Email address (for Office 365) or DOMAIN\\USERNAME (e.g. DEMISTO.INT\\admin)":
      "Authentifizierung: E-Mail-Adresse (für Office 365) oder DOMAIN\\USERNAME (z. B. DEMISTO.INT\\admin)",
    "Connect to Exchange Online PowerShell and add the Application ID.":
      "Stellen Sie eine Verbindung mit Exchange Online PowerShell her und fügen Sie die Anwendungs-ID hinzu.",
    "Copy the contents of the .txt file and paste it in the Certificate parameter of the integration’s instance.":
      "Kopieren Sie den Inhalt der .txt-Datei und fügen Sie ihn in den Parameter Certificate der Integrationsinstanz ein.",
    "Create the application:":
      "Erstellen Sie die Anwendung:",
    "Create the certificate in Cortex XSOAR/XSIAM.":
      "Erstellen Sie das Zertifikat in Cortex XSOAR/XSIAM.",
    "Default is to filter by received-time, which works well if the folder is an \"Inbox\". But for a folder emails are dragged into for attention, if we filter by received-time, out-of-order processing of emails means some are ignored. Filtering by modified-time works better for such a scenario. This works best if any modifications (such as tagging) happens before moving the email into the folder, such that the move into the folder is the last modification, and triggers Cortex to fetch it as an incident.":
      "Standardmäßig wird nach Empfangszeit gefiltert, was gut funktioniert, wenn der Ordner ein „Posteingang“ ist. Bei einem Ordner, in den E-Mails zur Bearbeitung gezogen werden, führt das Filtern nach Empfangszeit jedoch zu einer ungeordneten Verarbeitung, sodass einige E-Mails ignoriert werden. Das Filtern nach Änderungszeit funktioniert in diesem Szenario besser. Dies funktioniert am besten, wenn Änderungen (z. B. Tagging) vor dem Verschieben der E-Mail in den Ordner erfolgen, sodass das Verschieben in den Ordner die letzte Änderung ist und Cortex veranlasst, sie als Incident abzurufen.",
    "Default version is used when accessing the EWS API to determine the API version.":
      "Beim Zugriff auf die EWS-API wird die Standardversion verwendet, um die API-Version zu bestimmen.",
    "Directory and metadata:":
      "Verzeichnis und Metadaten:",
    "Log collection:":
      "Protokollerfassung:",
    "Inventory data snapshots are collected every 10 minutes.":
      "Inventardaten-Snapshots werden alle 10 Minuten erfasst.",
    "Download the certificateBase34.txt file.":
      "Laden Sie die Datei certificateBase34.txt herunter.",
    "Email address from which to fetch incidents":
      "E-Mail-Adresse, von der Incidents abgerufen werden",
    "Enable Dropbox Log Collection":
      "Dropbox-Protokollerfassung aktivieren",
    "Enter a unique name for this DropBox instance":
      "Geben Sie einen eindeutigen Namen für diese DropBox-Instanz ein",
    "Enter DropBox Access Code for authenticating requests":
      "Geben Sie den DropBox-Zugriffscode zur Authentifizierung von Anfragen ein",
    "Enter DropBox app key for authenticating requests":
      "Geben Sie den DropBox-App-Schlüssel zur Authentifizierung von Anfragen ein",
    "Enter DropBox App Secret for authenticating requests":
      "Geben Sie das DropBox-App-Secret zur Authentifizierung von Anfragen ein",
    "access code":
      "Zugriffscode",
    "app key":
      "App-Schlüssel",
    "app secret":
      "App-Secret",
    "Ensure EWS is enabled for your tenant.":
      "Stellen Sie sicher, dass EWS für Ihren Tenant aktiviert ist.",
    "Elastic version 2.* or 5.*":
      "Elastic-Version 2.* oder 5.*",
    "Exchange Online URL":
      "Exchange-Online-URL",
    "Exchange URL or Server IP address":
      "Exchange-URL oder Server-IP-Adresse",
    "ID / Application ID":
      "ID / Anwendungs-ID",
    "ID can be received from the admin consent procedure - see Detailed Instructions.":
      "Die ID kann über das Administratoreinwilligungsverfahren bezogen werden – siehe Detaillierte Anweisungen.",
    "Token can be received from the admin consent procedure - see Detailed Instructions.":
      "Das Token kann über das Administratoreinwilligungsverfahren bezogen werden – siehe Detaillierte Anweisungen.",
    "Follow your preferred method’s guide on how to use the admin consent flow in order to receive your authentication information:":
      "Folgen Sie der Anleitung Ihrer bevorzugten Methode zur Verwendung des Administratoreinwilligungsflusses, um Ihre Authentifizierungsinformationen zu erhalten:",
    "For Office 365, use https://outlook.office365.com/EWS/Exchange.asmx (default) as the Server URL.":
      "Verwenden Sie für Office 365 https://outlook.office365.com/EWS/Exchange.asmx (Standard) als Server-URL.",
    "For the integration to work, the Azure AD application’s service principal must have the correct permissions assigned in the Exchange Online role groups.":
      "Damit die Integration funktioniert, müssen dem Dienstprinzipal der Azure-AD-Anwendung die richtigen Berechtigungen in den Exchange-Online-Rollengruppen zugewiesen sein.",
    "Has impersonation rights":
      "Hat Impersonation-Rechte",
    "Mark fetched emails as read":
      "Abgerufene E-Mails als gelesen markieren",
    "Skip unparsable emails during fetch incidents":
      "Nicht analysierbare E-Mails beim Incident-Abruf überspringen",
    "Trust server certificate":
      "Serverzertifikat vertrauen",
    "Use a self deployed Azure Application":
      "Selbst bereitgestellte Azure-Anwendung verwenden",
    "Use legacy attachment name":
      "Legacy-Anhangsnamen verwenden",
    "If this is the only application you are allowing, run the following command (replace":
      "Wenn dies die einzige Anwendung ist, die Sie zulassen, führen Sie den folgenden Befehl aus (ersetzen Sie",
    "with your actual Application Client ID):":
      "durch Ihre tatsächliche Application-Client-ID):",
    "In Azure, go to Entra ID (Overview blade) and copy the":
      "Wechseln Sie in Azure zu Entra ID (Blade „Übersicht“) und kopieren Sie den Wert von",
    "In Cortex XSOAR/XSIAM, in the integration instance configuration, enter your saved password in the":
      "Geben Sie in Cortex XSOAR/XSIAM in der Konfiguration der Integrationsinstanz Ihr gespeichertes Passwort ein in",
    "In Cortex XSOAR/XSIAM, in the integration instance configuration, paste the application ID in":
      "Fügen Sie in Cortex XSOAR/XSIAM in der Konfiguration der Integrationsinstanz die Anwendungs-ID ein in",
    "In Cortex XSOAR/XSIAM, in the integration instance configuration, paste the Domain name in":
      "Fügen Sie in Cortex XSOAR/XSIAM in der Konfiguration der Integrationsinstanz den Domänennamen ein in",
    "In order to function as expected, set the following permissions:":
      "Damit die Integration wie erwartet funktioniert, legen Sie die folgenden Berechtigungen fest:",
    "In the Add assignments flyout that opens, find and select the app that you created in Step 1.":
      "Suchen Sie im geöffneten Flyout „Add assignments“ die in Schritt 1 erstellte App und wählen Sie sie aus.",
    "In the Certificates tab, upload the publickey.cer file.":
      "Laden Sie auf der Registerkarte „Certificates“ die Datei publickey.cer hoch.",
    "In the Cortex XSOAR/XSIAM Playground, download the publickey.cer file":
      "Laden Sie im Cortex-XSOAR/XSIAM-Playground die Datei publickey.cer herunter",
    "In the integration instance configuration, paste the text in the":
      "Fügen Sie in der Konfiguration der Integrationsinstanz den Text ein in",
    "In the left menu of the newly created application, click":
      "Klicken Sie im linken Menü der neu erstellten Anwendung auf",
    "In the Azure app, navigate to":
      "Navigieren Sie in der Azure-App zu",
    "In the Azure application, in the left menu, click":
      "Klicken Sie in der Azure-Anwendung im linken Menü auf",
    "In the Request API permissions page, click":
      "Klicken Sie auf der Seite „Request API permissions“ auf",
    "In the left sidebar, select:":
      "Wählen Sie in der linken Seitenleiste Folgendes aus:",
    "In the top bar, select:":
      "Wählen Sie in der oberen Leiste Folgendes aus:",
    "Index time field, used to sort and limit data":
      "Indexzeitfeld, das zum Sortieren und Begrenzen von Daten verwendet wird",
    "Index/indexes to fetch incidents from (comma separated)":
      "Index, aus denen Incidents abgerufen werden (durch Kommas getrennt)",
    "Key / Application Secret":
      "Schlüssel / Anwendungsgeheimnis",
    "Log in using an admin account that can manage role assignments for the Azure AD application (for example, a Global Administrator or Privileged Role Administrator).":
      "Melden Sie sich mit einem Administratorkonto an, das Rollenzuweisungen für die Azure-AD-Anwendung verwalten kann (z. B. ein globaler Administrator oder ein Administrator für privilegierte Rollen).",
    "Mailbox to run commands on and to fetch incidents from.":
      "Postfach, in dem Befehle ausgeführt und aus dem Incidents abgerufen werden.",
    "Mailbox to run commands on and to fetch incidents from. To use this functionality, your account must have delegation for the account specified. For more information, see https://xsoar.pan.dev/docs/reference/integrations/ewso365#additional-information":
      "Postfach, in dem Befehle ausgeführt und aus dem Incidents abgerufen werden. Zur Nutzung dieser Funktion muss Ihr Konto über eine Stellvertretung für das angegebene Konto verfügen. Weitere Informationen finden Sie unter https://xsoar.pan.dev/docs/reference/integrations/ewso365#additional-information",
    "Maximum number of incidents per fetch (up to 200). Performance might be affected by a value higher than 50.":
      "Maximale Anzahl von Incidents pro Abruf (bis zu 200). Ein Wert über 50 kann die Leistung beeinträchtigen.",
    "Member Devices":
      "Mitgliedsgeräte",
    "Name of the folder from which to fetch incidents":
      "Name des Ordners, aus dem Incidents abgerufen werden",
    "Name of the folder from which to fetch incidents (supports Exchange Folder ID and sub-folders e.g. Inbox/Phishing)":
      "Name des Ordners, aus dem Incidents abgerufen werden (unterstützt Exchange-Ordner-ID und Unterordner, z. B. Inbox/Phishing)",
    "Supports Exchange Folder ID and sub-folders e.g. Inbox/Phishing.":
      "Unterstützt Exchange-Ordner-ID und Unterordner, z. B. Inbox/Phishing.",
    "Note - for more information go to the official":
      "Hinweis: Weitere Informationen finden Sie auf der offiziellen Seite von",
    "Note: Remember your password since you will need it to create your integration instance.":
      "Hinweis: Merken Sie sich Ihr Passwort, da Sie es zum Erstellen Ihrer Integrationsinstanz benötigen.",
    "Note: The information in the Playground is sensitive information. You should delete the information by running the following command:":
      "Hinweis: Die Informationen im Playground sind vertraulich. Löschen Sie die Informationen, indem Sie den folgenden Befehl ausführen:",
    "Open the downloaded txt file and copy the text.":
      "Öffnen Sie die heruntergeladene txt-Datei und kopieren Sie den Text.",
    "Open the Microsoft Purview Portal: https://purview.microsoft.com/":
      "Öffnen Sie das Microsoft-Purview-Portal: https://purview.microsoft.com/",
    "Palo Alto Networks is making the necessary updates to align our shared Application ID with Microsoft’s new requirements, so you do not need to run the steps above. However, because this change is enforced and controlled entirely by Microsoft, we cannot validate the changes in advance or guarantee uninterrupted functionality. Palo Alto Networks is not responsible for any disruptions resulting from this rollout. We recommend verifying that your integration continues to function as expected once the October 2026 enforcement takes effect.":
      "Palo Alto Networks nimmt die erforderlichen Aktualisierungen vor, um unsere gemeinsame Anwendungs-ID an die neuen Anforderungen von Microsoft anzupassen, sodass Sie die obigen Schritte nicht ausführen müssen. Da diese Änderung jedoch vollständig von Microsoft durchgesetzt und kontrolliert wird, können wir die Änderungen nicht im Voraus validieren oder einen unterbrechungsfreien Betrieb garantieren. Palo Alto Networks ist nicht für Unterbrechungen verantwortlich, die sich aus diesem Rollout ergeben. Wir empfehlen, nach Inkrafttreten der Durchsetzung im Oktober 2026 zu prüfen, ob Ihre Integration weiterhin wie erwartet funktioniert.",
    "You are responsible for updating your tenant configuration before the October 2026 enforcement takes effect. To ensure this integration continues to function without disruption, you must add the Entra Application (Client) ID used by this integration to your Exchange Online tenant’s allow list.":
      "Sie sind dafür verantwortlich, Ihre Tenant-Konfiguration zu aktualisieren, bevor die Durchsetzung im Oktober 2026 in Kraft tritt. Damit diese Integration ohne Unterbrechung weiter funktioniert, müssen Sie die von dieser Integration verwendete Entra-Anwendungs-(Client-)ID zur Zulassungsliste Ihres Exchange-Online-Tenants hinzufügen.",
    "Query to fetch incidents by (Lucene style)":
      "Abfrage zum Abrufen von Incidents (Lucene-Stil)",
    "Sender Mailbox":
      "Absenderpostfach",
    "Server URL (e.g. http://192.168.0.1:9200)":
      "Server-URL (z. B. http://192.168.0.1:9200)",
    "Server Version (2007, 2010, 2010_SP2, 2013, or 2016)":
      "Serverversion (2007, 2010, 2010_SP2, 2013 oder 2016)",
    "The application ID from the Azure portal":
      "Die Anwendungs-ID aus dem Azure-Portal",
    "The organization used in app-only authentication":
      "Die bei der reinen App-Authentifizierung verwendete Organisation",
    "The organization used in app-only authentication.":
      "Die bei der reinen App-Authentifizierung verwendete Organisation.",
    "There are two application authentication methods available.":
      "Es stehen zwei Anwendungsauthentifizierungsmethoden zur Verfügung.",
    "This command replaces the entire allow list. If you already have other approved EWS applications, first read the current list and append the new ID so that you don’t overwrite existing entries.":
      "Dieser Befehl ersetzt die gesamte Zulassungsliste. Wenn Sie bereits andere genehmigte EWS-Anwendungen haben, lesen Sie zuerst die aktuelle Liste und hängen Sie die neue ID an, damit vorhandene Einträge nicht überschrieben werden.",
    "Time format as kept in ElasticSearch, leave empty to use default":
      "Zeitformat, wie es in ElasticSearch gespeichert ist; leer lassen, um den Standard zu verwenden",
    "Time format is goland style format. For more details, look at:":
      "Das Zeitformat ist im Goland-Stil. Weitere Informationen finden Sie unter:",
    "To allow access to EWS O365, an administrator has to approve the Demisto app using an admin consent flow, by clicking on the following":
      "Um den Zugriff auf EWS O365 zu erlauben, muss ein Administrator die Demisto-App über einen Administratoreinwilligungsfluss genehmigen, indem er auf den folgenden Link klickt:",
    "To avoid disruptions, it is imperative that administrators begin transitioning their applications immediately.":
      "Um Unterbrechungen zu vermeiden, müssen Administratoren unbedingt sofort mit der Umstellung ihrer Anwendungen beginnen.",
    "To create the application, follow the instructions in this":
      "Um die Anwendung zu erstellen, befolgen Sie die Anweisungen in diesem",
    "To identify accounts using the ApplicationImpersonation role use the Exchange Online PowerShell command:":
      "Um Konten zu identifizieren, die die Rolle ApplicationImpersonation verwenden, verwenden Sie den folgenden Exchange-Online-PowerShell-Befehl:",
    "To obtain the access code, click":
      "Um den Zugriffscode zu erhalten, klicken Sie auf",
    "and sign in with your Dropbox Business account credentials.":
      "und melden Sie sich mit den Anmeldedaten Ihres Dropbox-Business-Kontos an.",
    "To use this integration, you need to connect an application with a certificate.":
      "Um diese Integration zu verwenden, müssen Sie eine Anwendung mit einem Zertifikat verbinden.",
    "Under Exchange, click the":
      "Klicken Sie unter Exchange auf",
    "We highly recommend using the":
      "Für Postfachoperationen empfehlen wir dringend die Verwendung der",
    "integration for mailbox operations such as reading, searching, and managing emails and attachments, as Microsoft itself recommends transitioning from EWS to Graph-based APIs.":
      "Integration (z. B. zum Lesen, Durchsuchen und Verwalten von E-Mails und Anhängen), da Microsoft selbst den Wechsel von EWS zu Graph-basierten APIs empfiehlt.",
    "What time field should we filter incidents by?":
      "Nach welchem Zeitfeld sollen Incidents gefiltert werden?",
    "When 'Mark fetched emails as read' is enabled and emails are fetched by modification time, emails will be re-fetched in the next cycle after being marked as read (due to metadata changes). This is expected behavior.":
      "Wenn 'Mark fetched emails as read' aktiviert ist und E-Mails nach Änderungszeit abgerufen werden, werden E-Mails nach dem Markieren als gelesen im nächsten Zyklus erneut abgerufen (aufgrund von Metadatenänderungen). Dies ist das erwartete Verhalten.",
    "You have two options:":
      "Sie haben zwei Optionen:",
    "Search for the following role groups:":
      "Suchen Sie nach den folgenden Rollengruppen:",
    "If not listed, click":
      "Falls nicht aufgeführt, klicken Sie auf",
    "On the Assignments page that opens, select":
      "Wählen Sie auf der geöffneten Seite „Assignments“ Folgendes aus:",
    "On the Roles and administrators page that opens, find and select one of the supported roles by clicking on the":
      "Suchen Sie auf der geöffneten Seite „Roles and administrators“ eine der unterstützten Rollen und wählen Sie sie aus, indem Sie auf Folgendes klicken:",
    "Microsoft has announced the final phase of Exchange Web Services (EWS) retirement in Exchange Online, with phased disablement beginning in October 2026.":
      "Microsoft hat die letzte Phase der Einstellung von Exchange Web Services (EWS) in Exchange Online angekündigt, wobei die schrittweise Deaktivierung im Oktober 2026 beginnt.",
    "application used for authentication":
      "für die Authentifizierung verwendete Anwendung",

    // --- Batch: follow-up for the 09:38 export: items missed in the previous batch (EWS Extension Online PowerShell doc, Elasticsearch DQ label) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    "Use DQ syntax to map elastic JSON struct to incident fields, use :: as mapping seperator":
      "Verwenden Sie die DQ-Syntax, um die Elastic-JSON-Struktur den Incident-Feldern zuzuordnen, und verwenden Sie :: als Zuordnungstrennzeichen",
    ". Starting in October 2026, Microsoft will block all EWS traffic by default. Applications will only be able to access EWS if their specific Application (Client) ID is explicitly added to this allow list by the tenant administrator.":
      ". Ab Oktober 2026 blockiert Microsoft standardmäßig den gesamten EWS-Datenverkehr. Anwendungen können nur dann auf EWS zugreifen, wenn ihre spezifische Anwendungs-(Client-)ID vom Tenant-Administrator ausdrücklich zu dieser Zulassungsliste hinzugefügt wurde.",
    "Deprecated. Use EWS v2 instead.":
      "Veraltet. Verwenden Sie stattdessen EWS v2.",
    "Deprecated. Use EWS Extension Online Powershell v3 instead.":
      "Veraltet. Verwenden Sie stattdessen EWS Extension Online Powershell v3.",
    "Deprecated. Use":
      "Veraltet. Verwenden Sie",
    "instead.":
      "stattdessen.",
    "- Client Credential Flow.":
      "- Client-Credential-Flow.",
    "– a highly privileged security role that also provides full access.":
      "– eine hochprivilegierte Sicherheitsrolle, die ebenfalls vollen Zugriff bietet.",
    "– the most privileged role and fully supported for this integration.":
      "– die privilegierteste Rolle, die für diese Integration vollständig unterstützt wird.",
    ". Assign the following API permission to the application:":
      ". Weisen Sie der Anwendung die folgende API-Berechtigung zu:",
    "Run the":
      "Führen Sie den Befehl",
    "command in Cortex to acquire the certificate.":
      "in Cortex aus, um das Zertifikat zu erhalten.",
    "command in the Playground to acquire the certificate.":
      "im Playground aus, um das Zertifikat zu erhalten.",
    "Open the role and verify that the":
      "Öffnen Sie die Rolle und prüfen Sie, ob der",
    "service principal of the Azure AD application used by the integration":
      "Dienstprinzipal der von der Integration verwendeten Azure-AD-Anwendung",
    "is listed.":
      "aufgeführt ist.",
    "The role":
      "Die Rolle",
    "is eligible for this integration.":
      "ist für diese Integration geeignet.",
    "Search for":
      "Suchen Sie",
    "in the Search box.":
      "im Suchfeld.",
    ", give the application a name (for example:":
      ", geben Sie der Anwendung einen Namen (zum Beispiel:",
    ") and click":
      ") und klicken Sie auf",
    ", search for":
      ", suchen Sie nach",
    "and assign the required roles.":
      "und weisen Sie die erforderlichen Rollen zu.",
    "and copy the Application (client) ID.":
      "und kopieren Sie die Anwendungs-(Client-)ID.",
    "Fore more information check the":
      "Weitere Informationen finden Sie in der",
    "Microsoft Documentation.":
      "Microsoft-Dokumentation.",
    "guide":
      "Leitfaden",
    "Azure AD portal":
      "Azure-AD-Portal",

    // --- Batch: Elasticsearch v2 / Kibana / Microsoft Graph (Entra ID) integration doc page (Collector export 2026-10-12 07:23) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    "- API Key Auth: Enter the API Key ID and API Key.":
      "- API Key Auth: Geben Sie die API-Schlüssel-ID und den API-Schlüssel ein.",
    "- Basic Auth: Enter Username and Password.":
      "- Basic Auth: Geben Sie Benutzername und Passwort ein.",
    "- Bearer Auth: Enter Username and Password.":
      "- Bearer Auth: Geben Sie Benutzername und Passwort ein.",
    "- Index":
      "- Index",
    "- Index time field":
      "- Indexzeitfeld",
    "- Query String or Raw Query":
      "- Abfragezeichenfolge oder Raw Query",
    "— Bulk-update the status of security detection alerts (open, acknowledged, closed).":
      "— Aktualisieren Sie den Status von Sicherheitserkennungswarnungen (offen, bestätigt, geschlossen) per Massenaktualisierung.",
    "— Create, update, delete, and import/export value lists used in detection rules.":
      "— Erstellen, aktualisieren, löschen und importieren/exportieren Sie Wertelisten, die in Erkennungsregeln verwendet werden.",
    "— Create, update, delete, and list Kibana cases; add comments, attach files, and link alerts to cases.":
      "— Erstellen, aktualisieren, löschen und listen Sie Kibana-Fälle auf; fügen Sie Kommentare hinzu, hängen Sie Dateien an und verknüpfen Sie Warnungen mit Fällen.",
    "— List rule types, retrieve rules, enable/disable rules, mute/unmute alerts.":
      "— Listen Sie Regeltypen auf, rufen Sie Regeln ab, aktivieren/deaktivieren Sie Regeln und schalten Sie Warnungen stumm bzw. wieder laut.",
    "— Manage Kibana exception lists and their items, including Elastic Endpoint exceptions.":
      "— Verwalten Sie Kibana-Ausnahmelisten und deren Elemente, einschließlich Elastic-Endpoint-Ausnahmen.",
    ", the required privilege is also scoped to the feature that owns the object:":
      ", die erforderliche Berechtigung ist außerdem auf das Feature beschränkt, dem das Objekt gehört:",
    ". The level required depends on the operation:":
      ". Die erforderliche Stufe hängt von der Operation ab:",
    "Objects owned by":
      "Objekte, die gehören zu",
    "(e.g. SIEM detection rules, Security cases) require the":
      "(z. B. SIEM-Erkennungsregeln, Security-Fälle) erfordern das",
    "(e.g. Stack Rules) require the":
      "(z. B. Stack Rules) erfordern das",
    "require the":
      "erfordern das",
    "feature privilege.":
      "Feature-Berechtigung.",
    "feature privileges":
      "Feature-Berechtigungen",
    "(for example,":
      "(zum Beispiel:",
    "). Kibana is usually hosted separately from Elasticsearch, so this URL cannot be derived from the Elasticsearch":
      "). Kibana wird in der Regel getrennt von Elasticsearch gehostet, daher kann diese URL nicht aus der folgenden Elasticsearch-Einstellung abgeleitet werden:",
    "<number> <time unit>, e.g., 12 hours, 7 days":
      "<number> <time unit> (z. B. 12 hours, 7 days)",
    "3 formats supported:":
      "3 Formate werden unterstützt:",
    "A detailed explanation on how to register an app can be found":
      "Eine ausführliche Erklärung zur Registrierung einer App finden Sie",
    "Additional Configuration Parameters Details":
      "Details zu zusätzlichen Konfigurationsparametern",
    "After authorizing the Cortex XSAOR app, you will get an ID, Token, and Key which needs to be added to the integration instance configuration’s corresponding fields.":
      "Nachdem Sie die Cortex-XSOAR-App autorisiert haben, erhalten Sie eine ID, ein Token und einen Schlüssel, die den entsprechenden Feldern der Konfiguration der Integrationsinstanz hinzugefügt werden müssen.",
    "Alerts to Fetch":
      "Abzurufende Warnungen",
    "Allow secret generators commands execution":
      "Ausführung von Befehlen zur Secret-Generierung zulassen",
    "Allows raw DSL queries. For more information about Query DSL see":
      "Erlaubt rohe DSL-Abfragen. Weitere Informationen zu Query DSL finden Sie unter",
    "API Client ID created in the User management UI.":
      "Im User-management-UI erstellte API-Client-ID.",
    "API Client Secret created in the User management UI.":
      "Im User-management-UI erstelltes API-Client-Secret.",
    "API Key Authentication":
      "API-Schlüssel-Authentifizierung",
    "Application ID (Client ID for Client credentials mode)":
      "Anwendungs-ID (Client-ID für den Modus Client credentials)",
    "Application redirect URI (for Authorization Code flow mode)":
      "Umleitungs-URI der Anwendung (für den Modus Authorization Code Flow)",
    "Application redirect URI (for Self Deployed - Authorization Code Flow)":
      "Umleitungs-URI der Anwendung (für selbst bereitgestellt - Authorization Code Flow)",
    "Apply the filter to fetch policy events having actions such as \"deliver\", \"mark-spam\", \"move\", \"inbox\", \"delete\", \"none\". Fetches all types of actions by default.":
      "Wenden Sie den Filter an, um Richtlinienereignisse mit Aktionen wie \"deliver\", \"mark-spam\", \"move\", \"inbox\", \"delete\", \"none\" abzurufen. Standardmäßig werden alle Aktionstypen abgerufen.",
    "Authentication Based on Azure Managed Identities":
      "Authentifizierung auf Basis verwalteter Azure-Identitäten",
    "Authentication based on Entra ID applications":
      "Authentifizierung auf Basis von Entra-ID-Anwendungen",
    "Authorization code (for Authorization Code flow mode - received from the authorization step. see Detailed Instructions)":
      "Autorisierungscode (für den Modus Authorization Code Flow – wird im Autorisierungsschritt empfangen; siehe Detaillierte Anweisungen)",
    "Authorization code (for Self Deployed - Authorization Code Flow)":
      "Autorisierungscode (für selbst bereitgestellt - Authorization Code Flow)",
    "Authorization type":
      "Autorisierungstyp",
    "Azure AD endpoint":
      "Azure-AD-Endpunkt",
    "Azure AD endpoint associated with a national cloud.":
      "Azure-AD-Endpunkt, der einer nationalen Cloud zugeordnet ist.",
    "Bearer Authentication":
      "Bearer-Authentifizierung",
    "Click the":
      "Klicken Sie auf die Schaltfläche",
    "button and you will be prompted to grant Cortex permissions for your Entra ID Users.":
      ". Anschließend werden Sie aufgefordert, Cortex Berechtigungen für Ihre Entra-ID-Benutzer zu erteilen.",
    "button and you will receive your ID, token, and key. You will need to enter these when you configure the Entra ID Users integration instance in Cortex.":
      ". Sie erhalten Ihre ID, Ihr Token und Ihren Schlüssel. Diese müssen Sie bei der Konfiguration der Integrationsinstanz Entra ID Users in Cortex eingeben.",
    "By default, Microsoft Entra ID Protection risk level is used as Cortex XSOAR/XSIAM issue severity. Select this option to override original risk level reported by Microsoft Entra ID Protection.":
      "Standardmäßig wird die Risikostufe von Microsoft Entra ID Protection als Schweregrad des Cortex-XSOAR/XSIAM-Problems verwendet. Wählen Sie diese Option, um die von Microsoft Entra ID Protection gemeldete ursprüngliche Risikostufe zu überschreiben.",
    "Checking this box will allow running commands that generate and print secrets. Make sure to add restrictions to the related commands. For more information please refer to the following guide - <MFA guide>":
      "Wenn Sie dieses Kontrollkästchen aktivieren, können Befehle ausgeführt werden, die Secrets generieren und ausgeben. Fügen Sie unbedingt Einschränkungen für die zugehörigen Befehle hinzu. Weitere Informationen finden Sie in der folgenden Anleitung: <MFA guide>",
    "Client Credentials Flow (Recommended)":
      "Client-Credentials-Flow (empfohlen)",
    "Client Secret (required for Client Credentials mode)":
      "Client-Secret (erforderlich für den Modus Client Credentials)",
    "Close Mirrored Elasticsearch Incident":
      "Gespiegelten Elasticsearch-Incident schließen",
    "Close Mirrored XSOAR Incident":
      "Gespiegelten XSOAR-Incident schließen",
    "Comma-separated list of fields to fetch (the `_source` field is always included).":
      "Durch Kommas getrennte Liste der abzurufenden Felder (das Feld `_source` ist immer enthalten).",
    "Detection Alerts":
      "Erkennungswarnungen",
    "Device Code Flow":
      "Device-Code-Flow",
    "Elastic Cloud deployments:":
      "Elastic-Cloud-Bereitstellungen:",
    "Example: created_at.after(2020-11-11T09:16:44Z) or id.eq(537557694)":
      "Beispiel: created_at.after(2020-11-11T09:16:44Z) oder id.eq(537557694)",
    "Syntax: field.operator(operand) {and/or field.operator(operand)}":
      "Syntax: field.operator(operand) {and/or field.operator(operand)}",
    "Syntax: field.operator(operand) {and/or field.operator(operand)} Example: created_at.after(2020-11-11T09:16:44Z) or id.eq(537557694)":
      "Syntax: field.operator(operand) {and/or field.operator(operand)} Beispiel: created_at.after(2020-11-11T09:16:44Z) oder id.eq(537557694)",
    "Exception Lists & Items":
      "Ausnahmelisten und Elemente",
    "Exclude alerts while fetching policy events of type 'Message Alert' or 'System Alert'.":
      "Schließen Sie Warnungen beim Abrufen von Richtlinienereignissen vom Typ 'Message Alert' oder 'System Alert' aus.",
    "Fetch alerts for case":
      "Warnungen für Fall abrufen",
    "Fetch Cases":
      "Fälle abrufen",
    "Fetch cases by Severity":
      "Fälle nach Schweregrad abrufen",
    "Fetch cases by Status":
      "Fälle nach Status abrufen",
    "Fetch incident types":
      "Abzurufende Incident-Typen",
    "Fetch Security Alerts":
      "Sicherheitswarnungen abrufen",
    "Fetching security alerts requires:":
      "Zum Abrufen von Sicherheitswarnungen ist Folgendes erforderlich:",
    "field (DSL query). The index must follow one of these patterns:":
      "-Feld (DSL-Abfrage). Der Index muss einem dieser Muster entsprechen:",
    "Fields to Fetch":
      "Abzurufende Felder",
    "First fetch timestamp":
      "Zeitstempel des ersten Abrufs",
    "For further information about type mapping, see":
      "Weitere Informationen zur Typzuordnung finden Sie unter",
    "For information, see":
      "Informationen finden Sie unter",
    "For more info about API Key management see":
      "Weitere Informationen zur Verwaltung von API-Schlüsseln finden Sie unter",
    "For more info see":
      "Weitere Informationen finden Sie unter",
    "For more information about the Lucene syntax, see the link in the help section.":
      "Weitere Informationen zur Lucene-Syntax finden Sie über den Link im Hilfebereich.",
    "For more information see the link in the help section.":
      "Weitere Informationen finden Sie über den Link im Hilfebereich.",
    "ID or Client ID":
      "ID oder Client-ID",
    "Key or Client Secret":
      "Schlüssel oder Client-Secret",
    "Token or Tenant ID":
      "Token oder Tenant-ID",
    "Incident Mirroring Direction":
      "Spiegelungsrichtung von Incidents",
    "Index time field":
      "Indexzeitfeld",
    "Index to fetch incidents from":
      "Index, aus dem Incidents abgerufen werden",
    "Kibana Integration":
      "Kibana-Integration",
    "Kibana Server URL":
      "Kibana-Server-URL",
    "Kibana Spaces":
      "Kibana-Spaces",
    "Kibana Spaces (optional)":
      "Kibana-Spaces (optional)",
    "Map JSON fields into labels":
      "JSON-Felder Labels zuordnen",
    "Max Fetch Incidents Returned":
      "Maximale Anzahl zurückgegebener abgerufener Incidents",
    "Microsoft integrations (Graph and Azure) in Cortex use Entra ID applications to authenticate with Microsoft APIs. These integrations use OAuth 2.0 and OpenID Connect standard compliant authentication services, which use an application to sign in or delegate authentication. For more information, see the Microsoft identity platform overview.":
      "Microsoft-Integrationen (Graph und Azure) in Cortex verwenden Entra-ID-Anwendungen, um sich bei Microsoft-APIs zu authentifizieren. Diese Integrationen nutzen Authentifizierungsdienste, die den Standards OAuth 2.0 und OpenID Connect entsprechen und eine Anwendung zur Anmeldung oder zur Delegierung der Authentifizierung verwenden. Weitere Informationen finden Sie unter Microsoft identity platform overview.",
    "Mirroring is only available for Elasticsearch Security Alerts and Cases.":
      "Die Spiegelung ist nur für Elasticsearch Security Alerts und Cases verfügbar.",
    "Not all fields can be used for sorting in Elasticsearch. Sorting is only supported for fields of the following types:":
      "In Elasticsearch können nicht alle Felder zum Sortieren verwendet werden. Das Sortieren wird nur für Felder der folgenden Typen unterstützt:",
    "Note: Depending on the authentication method that you use, the integration parameters might change.":
      "Hinweis: Je nach verwendeter Authentifizierungsmethode können sich die Integrationsparameter ändern.",
    "On-premises (self-managed) deployments:":
      "On-Premises-Bereitstellungen (selbstverwaltet):",
    "Operations covered":
      "Abgedeckte Operationen",
    "Override Microsoft Entra ID Protection risk level":
      "Risikostufe von Microsoft Entra ID Protection überschreiben",
    "POST / PUT / PATCH / DELETE — create, update, delete, and change-state commands":
      "POST / PUT / PATCH / DELETE – Befehle zum Erstellen, Aktualisieren, Löschen und Ändern des Status",
    "Privilege level":
      "Berechtigungsstufe",
    "Query String":
      "Abfragezeichenfolge",
    "Query String is queried using the Lucene syntax. For more information about the Lucene syntax see":
      "Die Abfragezeichenfolge wird mit der Lucene-Syntax abgefragt. Weitere Informationen zur Lucene-Syntax finden Sie unter",
    "Query string uses the Lucene syntax.":
      "Die Abfragezeichenfolge verwendet die Lucene-Syntax.",
    "Query string uses the Lucene syntax. For more information about the Lucene syntax, see the link in the help section. The query will be used when fetching incidents. Index time field will be used as a filter in the query. The integration test button doesn't fully test the fetch incidents validity. To verify that the instance is set up correctly for fetching incidents, run the '!es-integration-health-check' command.":
      "Die Abfragezeichenfolge verwendet die Lucene-Syntax. Weitere Informationen zur Lucene-Syntax finden Sie über den Link im Hilfebereich. Die Abfrage wird beim Abrufen von Incidents verwendet. Das Indexzeitfeld wird als Filter in der Abfrage verwendet. Die Schaltfläche zum Testen der Integration testet die Gültigkeit des Incident-Abrufs nicht vollständig. Um zu überprüfen, ob die Instanz korrekt für den Incident-Abruf eingerichtet ist, führen Sie den Befehl '!es-integration-health-check' aus.",
    "Raw Query allows raw DSL queries and will override the 'Query String' Lucene syntax string.":
      "Raw Query ermöglicht rohe DSL-Abfragen und überschreibt die Lucene-Syntaxzeichenfolge von 'Query String'.",
    "Raw Query allows raw DSL queries and will override the 'Query String' Lucene syntax string. Results will not be filtered or sorted. Use additional parameters in the raw query for these purposes. For more information see the link in the help section. The integration test button doesn't fully test the fetch incidents validity. To verify that the instance is set up correctly for fetching incidents, run the '!es-integration-health-check' command.":
      "Raw Query ermöglicht rohe DSL-Abfragen und überschreibt die Lucene-Syntaxzeichenfolge von 'Query String'. Die Ergebnisse werden weder gefiltert noch sortiert. Verwenden Sie hierfür zusätzliche Parameter in der rohen Abfrage. Weitere Informationen finden Sie über den Link im Hilfebereich. Die Schaltfläche zum Testen der Integration testet die Gültigkeit des Incident-Abrufs nicht vollständig. Um zu überprüfen, ob die Instanz korrekt für den Incident-Abruf eingerichtet ist, führen Sie den Befehl '!es-integration-health-check' aus.",
    "Results will not be filtered or sorted. Use additional parameters in the raw query for these purposes.":
      "Die Ergebnisse werden weder gefiltert noch sortiert. Verwenden Sie hierfür zusätzliche Parameter in der rohen Abfrage.",
    "The integration test button doesn't fully test the fetch incidents validity. To verify that the instance is set up correctly for fetching incidents, run the '!es-integration-health-check' command.":
      "Die Schaltfläche zum Testen der Integration testet die Gültigkeit des Incident-Abrufs nicht vollständig. Um zu überprüfen, ob die Instanz korrekt für den Incident-Abruf eingerichtet ist, führen Sie den Befehl '!es-integration-health-check' aus.",
    "The query will be used when fetching incidents. Index time field will be used as a filter in the query.":
      "Die Abfrage wird beim Abrufen von Incidents verwendet. Das Indexzeitfeld wird als Filter in der Abfrage verwendet.",
    "Relevant only if the integration is running on Azure VM. If selected, authenticates based on the value provided for the Azure Managed Identities Client ID field. If no value is provided for the Azure Managed Identities Client ID field, authenticates based on the System Assigned Managed Identity. For additional information, see the Help tab.":
      "Nur relevant, wenn die Integration auf einer Azure-VM ausgeführt wird. Wenn ausgewählt, erfolgt die Authentifizierung anhand des Werts im Feld Azure Managed Identities Client ID. Wenn im Feld Azure Managed Identities Client ID kein Wert angegeben ist, erfolgt die Authentifizierung anhand der systemseitig zugewiesenen verwalteten Identität. Weitere Informationen finden Sie auf der Registerkarte Help.",
    "Required Kibana Privileges":
      "Erforderliche Kibana-Berechtigungen",
    "Select the authentication type and enter the appropriate credentials:":
      "Wählen Sie den Authentifizierungstyp aus und geben Sie die entsprechenden Anmeldedaten ein:",
    "Select the authentication type and enter the appropriate credentials: - Basic Auth: Enter Username and Password. - Bearer Auth: Enter Username and Password. - API Key Auth: Enter the API Key ID and API Key.":
      "Wählen Sie den Authentifizierungstyp aus und geben Sie die entsprechenden Anmeldedaten ein: - Basic Auth: Geben Sie Benutzername und Passwort ein. - Bearer Auth: Geben Sie Benutzername und Passwort ein. - API Key Auth: Geben Sie die API-Schlüssel-ID und den API-Schlüssel ein.",
    "Select what type of Identity alert from MSGraph you want to ingest.":
      "Wählen Sie aus, welche Art von Identity-Warnung aus MSGraph Sie erfassen möchten.",
    "Server URL (e.g., https://graph.microsoft.com)":
      "Server-URL (z. B. https://graph.microsoft.com)",
    "Severity of the Cortex XSOAR/XSIAM issue to be created if Microsoft Entra ID Protection risk level override has been selected. Severity will be the same for all Microsoft Entra ID Protection alerts.":
      "Schweregrad des Cortex-XSOAR/XSIAM-Problems, das erstellt wird, wenn das Überschreiben der Risikostufe von Microsoft Entra ID Protection ausgewählt wurde. Der Schweregrad ist für alle Microsoft-Entra-ID-Protection-Warnungen identisch.",
    "Simple-Date - A plain date string. You must specify the format in which the date is stored. For more information about time formatting, see":
      "Simple-Date – eine einfache Datumszeichenfolge. Sie müssen das Format angeben, in dem das Datum gespeichert ist. Weitere Informationen zur Zeitformatierung finden Sie unter",
    "Suppress Errors for Non Found Groups":
      "Fehler für nicht gefundene Gruppen unterdrücken",
    "Suppress Errors for Non Found Users":
      "Fehler für nicht gefundene Benutzer unterdrücken",
    "Tenant ID (required for Client Credentials mode)":
      "Tenant-ID (erforderlich für den Modus Client Credentials)",
    "This integration includes a set of":
      "Diese Integration enthält eine Reihe von",
    "that let you interact with Kibana directly from Cortex — no separate Kibana integration required.":
      ", mit denen Sie direkt von Cortex aus mit Kibana interagieren können – eine separate Kibana-Integration ist nicht erforderlich.",
    "The “Test” button does not fully validate the fetch incidents functionality. To ensure the instance is correctly fetching incidents, run the":
      "Die Schaltfläche [Test] validiert die Funktion zum Abrufen von Incidents nicht vollständig. Um sicherzustellen, dass die Instanz Incidents korrekt abruft, führen Sie den Befehl",
    "The case severities to fetch. If none is chosen, all severity levels will be returned. Relevant only for incident type Elasticsearch Case.":
      "Die abzurufenden Schweregrade der Fälle. Wenn keiner ausgewählt ist, werden alle Schweregrade zurückgegeben. Nur relevant für den Incident-Typ Elasticsearch Case.",
    "The case statuses to fetch. If none is chosen, in-progress and open will be returned. Relevant only for incident type Elasticsearch Case.":
      "Die abzurufenden Status der Fälle. Wenn keiner ausgewählt ist, werden in-progress und open zurückgegeben. Nur relevant für den Incident-Typ Elasticsearch Case.",
    "The Elasticsearch server to which the integration connects. Ensure that the URL includes the correct Elasticsearch port. The default port for Elasticsearch v7 and below is 9200. Use the Server URL for on-premises deployments.":
      "Der Elasticsearch-Server, mit dem sich die Integration verbindet. Stellen Sie sicher, dass die URL den richtigen Elasticsearch-Port enthält. Der Standardport für Elasticsearch v7 und früher ist 9200. Verwenden Sie für On-Premises-Bereitstellungen die Server URL.",
    "The Elasticsearch v2 integration supports Elasticsearch 6.0.0 and later.":
      "Die Integration Elasticsearch v2 unterstützt Elasticsearch 6.0.0 und höher.",
    "The maximum number of incidents per request from Entra ID. Default is 50.":
      "Die maximale Anzahl von Incidents pro Anfrage von Entra ID. Standardwert ist 50.",
    "The maximum number of results per fetch":
      "Die maximale Anzahl von Ergebnissen pro Abruf",
    "The mirroring direction. Mirroring works only for incident types Elasticsearch Security Alert and Elasticsearch Case.":
      "Die Spiegelungsrichtung. Die Spiegelung funktioniert nur für die Incident-Typen Elasticsearch Security Alert und Elasticsearch Case.",
    "The time field used for sorting and limiting results. If using a nested field, separate field names with dot notation.":
      "Das Zeitfeld, das zum Sortieren und Begrenzen von Ergebnissen verwendet wird. Verwenden Sie bei einem verschachtelten Feld die Punktnotation, um die Feldnamen zu trennen.",
    "The time range to consider for the initial data fetch in the format <number> <unit>. For example, 1 hour, 2 hours, 6 hours, 12 hours, 24 hours, 48 hours, etc.":
      "Der Zeitbereich, der für den ersten Datenabruf berücksichtigt wird, im Format <number> <unit>. Zum Beispiel 1 hour, 2 hours, 6 hours, 12 hours, 24 hours, 48 hours usw.",
    "The time range to consider for the initial data fetch. (<number> <unit>, e.g., 2 minutes, 2 hours, 2 days, 2 months, 2 years). Default is 3 days.":
      "Der Zeitbereich, der für den ersten Datenabruf berücksichtigt wird. (<number> <unit>, z. B. 2 minutes, 2 hours, 2 days, 2 months, 2 years). Standardwert ist 3 days.",
    "The type of incident to fetch from Elasticsearch (Security Alert, Case, or other entity).":
      "Der Typ des Incidents, der aus Elasticsearch abgerufen wird (Security Alert, Case oder andere Entität).",
    "There are two application authentication methods available:":
      "Es stehen zwei Anwendungsauthentifizierungsmethoden zur Verfügung:",
    "There are two different authentication methods for self-deployed configuration:":
      "Für die selbst bereitgestellte Konfiguration gibt es zwei verschiedene Authentifizierungsmethoden:",
    "This integration was integrated and tested with versions 6.6.2, 7.3, 8.4.1 of Elasticsearch.":
      "Diese Integration wurde mit den Elasticsearch-Versionen 6.6.2, 7.3 und 8.4.1 integriert und getestet.",
    "Time field type":
      "Zeitfeldtyp",
    "Timestamp-Milliseconds - A numeric value representing the number of milliseconds since the Unix epoch. Example: ‘1572164838123’":
      "Timestamp-Milliseconds – ein numerischer Wert, der die Anzahl der Millisekunden seit der Unix-Epoche darstellt. Beispiel: ‘1572164838123’",
    "Timestamp-Second - A numeric value representing the number of seconds since the Unix epoch (00:00:00 UTC on 1 January 1970). Example: ‘1572164838’":
      "Timestamp-Second – ein numerischer Wert, der die Anzahl der Sekunden seit der Unix-Epoche (00:00:00 UTC am 1. Januar 1970) darstellt. Beispiel: ‘1572164838’",
    "To allow access to Entra ID Groups, an administrator has to approve the Cortex app using an admin consent flow, by clicking this":
      "Um den Zugriff auf Entra-ID-Gruppen zu erlauben, muss ein Administrator die Cortex-App über einen Administratoreinwilligungsfluss genehmigen, indem er auf diesen Link klickt:",
    "To connect to Microsoft Graph Identity & Access using either Cortex Graph app or the Self-Deployed Graph app:":
      "So stellen Sie mit der Cortex-Graph-App oder der selbst bereitgestellten Graph-App eine Verbindung zu Microsoft Graph Identity & Access her:",
    "To connect to Microsoft Graph Services using either the Cortex Azure app or the self-deployed Azure app:":
      "So stellen Sie mit der Cortex-Azure-App oder der selbst bereitgestellten Azure-App eine Verbindung zu Microsoft Graph Services her:",
    "To use a self-configured Azure application, you need to add a new Azure app registration in the Azure portal. To add the registration, see this":
      "Um eine selbst konfigurierte Azure-Anwendung zu verwenden, müssen Sie im Azure-Portal eine neue Azure-App-Registrierung hinzufügen. Informationen zum Hinzufügen der Registrierung finden Sie in diesem",
    "To use a self-configured Azure application, you need to add a new Azure App Registration in the Azure Portal. To add the registration.":
      "Um eine selbst konfigurierte Azure-Anwendung zu verwenden, müssen Sie im Azure-Portal eine neue Azure-App-Registrierung hinzufügen. Informationen zum Hinzufügen der Registrierung finden Sie in diesem",
    "To use Microsoft Graph Services, you need to configure authentication. There are three authentication methods available:":
      "Um Microsoft Graph Services zu verwenden, müssen Sie die Authentifizierung konfigurieren. Es stehen drei Authentifizierungsmethoden zur Verfügung:",
    "To use the Cortex Azure application, use the default application ID (597c0375-766f-4e6d-ad2a-f48117044ac5).":
      "Um die Cortex-Azure-Anwendung zu verwenden, verwenden Sie die Standard-Anwendungs-ID (597c0375-766f-4e6d-ad2a-f48117044ac5).",
    "To use the Cortex Azure application, use the default application ID (6b071e63-f701-454b-9e54-ede4c96483e6).":
      "Um die Cortex-Azure-Anwendung zu verwenden, verwenden Sie die Standard-Anwendungs-ID (6b071e63-f701-454b-9e54-ede4c96483e6).",
    "To use this integration, you need to configure authentication. There are three authentication methods available:":
      "Um diese Integration zu verwenden, müssen Sie die Authentifizierung konfigurieren. Es stehen drei Authentifizierungsmethoden zur Verfügung:",
    "Type of authentication - could be Client Credentials Authorization Flow (recommended) or Device Flow":
      "Authentifizierungstyp – kann Client Credentials Authorization Flow (empfohlen) oder Device Flow sein",
    "Use a self-deployed Azure application and authenticate using the Client Credentials flow.":
      "Verwenden Sie eine selbst bereitgestellte Azure-Anwendung und authentifizieren Sie sich mit dem Client-Credentials-Flow.",
    "Use Client Credentials Authorization Flow":
      "Client Credentials Authorization Flow verwenden",
    "Use this option when required to customize the URL to the Microsoft Graph User endpoint. More information can be found here - https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud":
      "Verwenden Sie diese Option, wenn die URL des Microsoft-Graph-User-Endpunkts angepasst werden muss. Weitere Informationen finden Sie hier: https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud",
    "Value Lists":
      "Wertelisten",
    "We recommend using the Client Credentials flow.":
      "Wir empfehlen die Verwendung des Client-Credentials-Flows.",
    "What you can do with Kibana commands":
      "Was Sie mit Kibana-Befehlen tun können",
    "When selecting the Custom option, the Server URL parameter must be filled. More information about National clouds can be found here - https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud":
      "Wenn die Option Custom ausgewählt wird, muss der Parameter Server URL ausgefüllt werden. Weitere Informationen zu nationalen Clouds finden Sie hier: https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud",
    "When using the Authorization Code flow, make sure the user you authenticate with has the relevant roles in Azure AD in order to execute the operation.":
      "Stellen Sie bei Verwendung des Authorization-Code-Flows sicher, dass der Benutzer, mit dem Sie sich authentifizieren, in Azure AD über die erforderlichen Rollen zum Ausführen der Operation verfügt.",
    "Whether closing the Cortex incident is mirrored in Elasticsearch.":
      "Gibt an, ob das Schließen des Cortex-Incidents in Elasticsearch gespiegelt wird.",
    "Whether closing the Elasticsearch alert or case is mirrored in Cortex.":
      "Gibt an, ob das Schließen der Elasticsearch-Warnung oder des Elasticsearch-Falls in Cortex gespiegelt wird.",
    "Whether to fetch alerts associated with each Elasticsearch Case. You must have read privileges for the Cases feature in the Management, Observability, or Security section of the Kibana feature privileges.":
      "Gibt an, ob mit jedem Elasticsearch Case verknüpfte Warnungen abgerufen werden sollen. Sie benötigen Leseberechtigungen für das Feature Cases im Abschnitt Management, Observability oder Security der Kibana-Feature-Berechtigungen.",
    "You can authenticate either by Entra ID applications or by Azure Managed Identities.":
      "Sie können sich entweder über Entra-ID-Anwendungen oder über verwaltete Azure-Identitäten authentifizieren.",
    "You need to grant Cortex authorization to access Entra ID Users.":
      "Sie müssen Cortex die Berechtigung zum Zugriff auf Entra-ID-Benutzer erteilen.",

    // --- Batch: Elasticsearch v2 / Kibana URL setup list: fragments with a known neighbouring structure (follow-up to the 07:23 export) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    "Kibana URL":
      "Kibana-URL",
    "parameter to the address of your Kibana server, including the port if it is not the default (e.g.":
      "auf die Adresse Ihres Kibana-Servers, einschließlich des Ports, falls dieser nicht der Standardport ist (z. B.",
    "You can leave":
      "Sie können den Parameter",
    "empty. The URL is then derived automatically from the":
      "leer lassen. Die URL wird dann automatisch abgeleitet aus",
    ", by replacing the":
      ", wobei das Segment",
    "segment of the hostname with":
      "des Hostnamens ersetzt wird durch",
    "becomes":
      "wird zu",
    "When":
      "Wenn der Parameter",
    "is set, it always takes precedence over the derivation from the":
      "festgelegt ist, hat er immer Vorrang vor der Ableitung aus",

    // --- Batch: Microsoft Graph / Azure Managed Identity setup steps: fragments with a known neighbouring structure (follow-up to the 07:23 export) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    "In order to use the":
      "Um den Befehl",
    "command, you must use with the Authorization Code flow.":
      "zu verwenden, müssen Sie den Authorization-Code-Flow verwenden.",
    "Select the":
      "Aktivieren Sie das Kontrollkästchen",
    "checkbox and leave the":
      "und lassen Sie das Feld",
    "field empty.":
      "leer.",

    // --- Batch: ExtraHop Reveal(x) / Flashpoint Ignite / F5 Silverline / FireEye HX / Kenna / McAfee / Envoy / Microsoft integration docs and parameter tooltips (07:55 export) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    ". Each API call fetches a maximum of 200 detection events.":
      ". Jeder API-Aufruf ruft maximal 200 Erkennungsereignisse ab.",
    "Advanced Filter":
      "Erweiterter Filter",
    "api_admin role.":
      "Rolle api_admin.",
    "api_analyst role.":
      "Rolle api_analyst.",
    "Applies a filter to the list of detections based on a JSON-specific query.":
      "Wendet einen Filter auf die Liste der Erkennungen an, basierend auf einer JSON-spezifischen Abfrage.",
    "Applies a filter to the list of detections based on a JSON-specific query. Example for detections: { \"categories\": [\"sec.attack\"], \"risk_score_min\": 51 } If the categories and category are not specified, then categories will be set to [\"sec.attack\"]. The category field is deprecated by the API, so please use the categories field instead. For a complete reference to the Extrahop detections filter fields, please refer to the ExtraHop REST API documentation at https://docs.extrahop.com/current/rest-api-guide/":
      "Wendet einen Filter auf die Liste der Erkennungen an, basierend auf einer JSON-spezifischen Abfrage. Beispiel für Erkennungen: { \"categories\": [\"sec.attack\"], \"risk_score_min\": 51 } Wenn categories und category nicht angegeben sind, wird categories auf [\"sec.attack\"] gesetzt. Das Feld category ist in der API veraltet; verwenden Sie stattdessen das Feld categories. Eine vollständige Referenz der ExtraHop-Erkennungsfilterfelder finden Sie in der ExtraHop-REST-API-Dokumentation unter https://docs.extrahop.com/current/rest-api-guide/",
    "Applies a filter to the list of detections or metrics based on a JSON-specific query.":
      "Wendet einen Filter auf die Liste der Erkennungen oder Metriken an, basierend auf einer JSON-spezifischen Abfrage.",
    "As the F5 Silverline API does not support fetch incidents for now, we retrieve alerts via a log collector.":
      "Da die F5-Silverline-API das Abrufen von Incidents derzeit nicht unterstützt, rufen wir Warnungen über einen Protokollkollektor ab.",
    "Attack Types":
      "Angriffstypen",
    "Backfill vulnerabilities by providing date or relative timestamp.":
      "Füllen Sie Schwachstellen nachträglich auf, indem Sie ein Datum oder einen relativen Zeitstempel angeben.",
    "Backfill vulnerabilities by providing date or relative timestamp. Formats accepted: 2 minutes, 2 hours, 2 days, 2 weeks, 2 months, 2 years, yyyy-mm-dd, yyyy-mm-ddTHH:MM:SSZ. Default: 3 days.":
      "Füllen Sie Schwachstellen nachträglich auf, indem Sie ein Datum oder einen relativen Zeitstempel angeben. Akzeptierte Formate: 2 minutes, 2 hours, 2 days, 2 weeks, 2 months, 2 years, yyyy-mm-dd, yyyy-mm-ddTHH:MM:SSZ. Standard: 3 days.",
    "Formats accepted: 2 minutes, 2 hours, 2 days, 2 weeks, 2 months, 2 years, yyyy-mm-dd, yyyy-mm-ddTHH:MM:SSZ.":
      "Akzeptierte Formate: 2 minutes, 2 hours, 2 days, 2 weeks, 2 months, 2 years, yyyy-mm-dd, yyyy-mm-ddTHH:MM:SSZ.",
    "Default: 3 days.":
      "Standard: 3 days.",
    "Click on the":
      "Klicken Sie auf die Schaltfläche",
    "button and paste it into the “API Key” parameter. Then, click on the":
      "und fügen Sie es in den Parameter „API Key“ ein. Klicken Sie anschließend auf die Schaltfläche",
    "button to save the generated token and close the token generation page.":
      ", um das generierte Token zu speichern und die Seite zur Token-Generierung zu schließen.",
    "Click on your profile icon on the top right and select the":
      "Klicken Sie oben rechts auf Ihr Profilsymbol und wählen Sie die Option",
    "option from the dropdown. Alternatively, click on":
      "aus der Dropdown-Liste aus. Alternativ klicken Sie auf",
    "to be taken directly to the Generate Token page.":
      ", um direkt zur Seite Generate Token zu gelangen.",
    "Enter the required details (i.e., Token Name, Ignite Username) and click on":
      "Geben Sie die erforderlichen Details ein (d. h. Token Name, Ignite Username) und klicken Sie auf",
    "If you already have an API key you can find it there.":
      "Wenn Sie bereits einen API-Schlüssel haben, finden Sie ihn dort.",
    "If you do not have an API Key, generate one by clicking":
      "Wenn Sie keinen API-Schlüssel haben, generieren Sie einen, indem Sie auf Folgendes klicken:",
    "Login/Register at":
      "Melden Sie sich an oder registrieren Sie sich unter",
    "Configure an API account on Flashpoint Ignite":
      "API-Konto in Flashpoint Ignite konfigurieren",
    "Configure an instance for ExtraHop Reveal(x)":
      "Instanz für ExtraHop Reveal(x) konfigurieren",
    "Due to a known limitation, clicking the":
      "Aufgrund einer bekannten Einschränkung kann ein mehrfaches schnelles Klicken auf die Schaltfläche",
    "button several times in quick succession may result in an “Unauthorized” error, even after a successful result was initially returned. It is enough to receive one success message to verify that the configuration is correct. “Unauthorized” error messages received from repeated clicking of the instance configuration":
      "zu einem Fehler „Unauthorized“ führen, selbst wenn zunächst ein erfolgreiches Ergebnis zurückgegeben wurde. Es genügt, eine Erfolgsmeldung zu erhalten, um zu überprüfen, dass die Konfiguration korrekt ist. „Unauthorized“-Fehlermeldungen, die durch wiederholtes Klicken auf die Schaltfläche der Instanzkonfiguration",
    "button do not affect the validity of the instance if the initial response was successful.":
      "entstehen, beeinträchtigen die Gültigkeit der Instanz nicht, wenn die erste Antwort erfolgreich war.",
    "Complete the following configuration options:":
      "Füllen Sie die folgenden Konfigurationsoptionen aus:",
    "Connect to McAfee TIE using the McAfee DXL client.":
      "Stellen Sie über den McAfee-DXL-Client eine Verbindung zu McAfee TIE her.",
    "Create relationships between indicators as part of Enrichment.":
      "Erstellen Sie im Rahmen der Anreicherung Beziehungen zwischen Indikatoren.",
    "CWE IDs":
      "CWE-IDs",
    "Deprecated. Use McAfee ePO v2 instead.":
      "Veraltet. Verwenden Sie stattdessen McAfee ePO v2.",
    "Deprecated. Use McAfee Threat Intelligence Exchange V2 integration instead.":
      "Veraltet. Verwenden Sie stattdessen die Integration McAfee Threat Intelligence Exchange V2.",
    "Deprecated. Use the Kafka v2 integration instead.":
      "Veraltet. Verwenden Sie stattdessen die Integration Kafka v2.",
    "Deprecated. Use the Mattermost v2 integration instead.":
      "Veraltet. Verwenden Sie stattdessen die Integration Mattermost v2.",
    "Deprecated. Use the McAfee ESM v2 integration instead.":
      "Veraltet. Verwenden Sie stattdessen die Integration McAfee ESM v2.",
    "Enter a unique":
      "Geben Sie einen eindeutigen",
    "for the instance.":
      "für die Instanz ein.",
    "Envoy Integration consists of a set of API endpoints that allow customers to automate provisioning of users.":
      "Die Envoy-Integration besteht aus einer Reihe von API-Endpunkten, mit denen Kunden die Bereitstellung von Benutzern automatisieren können.",
    "Example for detections:":
      "Beispiel für Erkennungen:",
    "Fetch limit":
      "Abruflimit",
    "Fetching F5 Silverline Alerts":
      "Abrufen von F5-Silverline-Warnungen",
    "Filter by associated product names (case-insensitive).":
      "Nach zugehörigen Produktnamen filtern (Groß-/Kleinschreibung wird nicht beachtet).",
    "Filter by associated vendor names (case-insensitive).":
      "Nach zugehörigen Anbieternamen filtern (Groß-/Kleinschreibung wird nicht beachtet).",
    "Filter by Attack type classification.":
      "Nach Klassifizierung des Angriffstyps filtern.",
    "Filter by CWE IDs assigned by Mitre.":
      "Nach von Mitre vergebenen CWE-IDs filtern.",
    "Filter by location type classification.":
      "Nach Klassifizierung des Standorttyps filtern.",
    "Filter by lower limit of the CVSS v2 score. Prioritizes Flashpoint generated scores when possible. Example value 7.0":
      "Nach der unteren Grenze des CVSS-v2-Scores filtern. Priorisiert nach Möglichkeit von Flashpoint generierte Scores. Beispielwert: 7.0",
    "Filter by lower limit of the CVSS v2 score. Prioritizes Flashpoint generated scores when possible. Example value 7.0 Note: Value must be a float between 0 and 10.":
      "Nach der unteren Grenze des CVSS-v2-Scores filtern. Priorisiert nach Möglichkeit von Flashpoint generierte Scores. Beispielwert: 7.0 Hinweis: Der Wert muss eine Gleitkommazahl zwischen 0 und 10 sein.",
    "Filter by lower limit of the CVSS v3 score. Prioritizes Flashpoint generated scores when possible. Example value 7.0":
      "Nach der unteren Grenze des CVSS-v3-Scores filtern. Priorisiert nach Möglichkeit von Flashpoint generierte Scores. Beispielwert: 7.0",
    "Filter by lower limit of the CVSS v3 score. Prioritizes Flashpoint generated scores when possible. Example value 7.0 Note: Value must be a float between 0 and 10.":
      "Nach der unteren Grenze des CVSS-v3-Scores filtern. Priorisiert nach Möglichkeit von Flashpoint generierte Scores. Beispielwert: 7.0 Hinweis: Der Wert muss eine Gleitkommazahl zwischen 0 und 10 sein.",
    "Filter by lower limit of the CVSS v4 score. Prioritizes Flashpoint generated scores when possible. Example value 7.0":
      "Nach der unteren Grenze des CVSS-v4-Scores filtern. Priorisiert nach Möglichkeit von Flashpoint generierte Scores. Beispielwert: 7.0",
    "Filter by lower limit of the CVSS v4 score. Prioritizes Flashpoint generated scores when possible. Example value 7.0 Note: Value must be a float between 0 and 10.":
      "Nach der unteren Grenze des CVSS-v4-Scores filtern. Priorisiert nach Möglichkeit von Flashpoint generierte Scores. Beispielwert: 7.0 Hinweis: Der Wert muss eine Gleitkommazahl zwischen 0 und 10 sein.",
    "Filter by upper limit of the CVSS v2 score. Prioritizes Flashpoint generated scores when possible. Example value 10.0":
      "Nach der oberen Grenze des CVSS-v2-Scores filtern. Priorisiert nach Möglichkeit von Flashpoint generierte Scores. Beispielwert: 10.0",
    "Filter by upper limit of the CVSS v2 score. Prioritizes Flashpoint generated scores when possible. Example value 10.0 Note: Value must be a float between 0 and 10.":
      "Nach der oberen Grenze des CVSS-v2-Scores filtern. Priorisiert nach Möglichkeit von Flashpoint generierte Scores. Beispielwert: 10.0 Hinweis: Der Wert muss eine Gleitkommazahl zwischen 0 und 10 sein.",
    "Filter by upper limit of the CVSS v3 score. Prioritizes Flashpoint generated scores when possible. Example value 10.0":
      "Nach der oberen Grenze des CVSS-v3-Scores filtern. Priorisiert nach Möglichkeit von Flashpoint generierte Scores. Beispielwert: 10.0",
    "Filter by upper limit of the CVSS v3 score. Prioritizes Flashpoint generated scores when possible. Example value 10.0 Note: Value must be a float between 0 and 10.":
      "Nach der oberen Grenze des CVSS-v3-Scores filtern. Priorisiert nach Möglichkeit von Flashpoint generierte Scores. Beispielwert: 10.0 Hinweis: Der Wert muss eine Gleitkommazahl zwischen 0 und 10 sein.",
    "Filter by upper limit of the CVSS v4 score. Prioritizes Flashpoint generated scores when possible. Example value 10.0":
      "Nach der oberen Grenze des CVSS-v4-Scores filtern. Priorisiert nach Möglichkeit von Flashpoint generierte Scores. Beispielwert: 10.0",
    "Filter by upper limit of the CVSS v4 score. Prioritizes Flashpoint generated scores when possible. Example value 10.0 Note: Value must be a float between 0 and 10.":
      "Nach der oberen Grenze des CVSS-v4-Scores filtern. Priorisiert nach Möglichkeit von Flashpoint generierte Scores. Beispielwert: 10.0 Hinweis: Der Wert muss eine Gleitkommazahl zwischen 0 und 10 sein.",
    "Filter by lower limit of the EPSS v3 score. Example value 0.5":
      "Nach der unteren Grenze des EPSS-v3-Scores filtern. Beispielwert: 0.5",
    "Filter by lower limit of the EPSS v3 score. Example value 0.5 Note: Value must be a float between 0 and 1.":
      "Nach der unteren Grenze des EPSS-v3-Scores filtern. Beispielwert: 0.5 Hinweis: Der Wert muss eine Gleitkommazahl zwischen 0 und 1 sein.",
    "Filter by upper limit of the EPSS v3 score. Example value 1.0":
      "Nach der oberen Grenze des EPSS-v3-Scores filtern. Beispielwert: 1.0",
    "Filter by upper limit of the EPSS v3 score. Example value 1.0 Note: Value must be a float between 0 and 1.":
      "Nach der oberen Grenze des EPSS-v3-Scores filtern. Beispielwert: 1.0 Hinweis: Der Wert muss eine Gleitkommazahl zwischen 0 und 1 sein.",
    "Note: Value must be a float between 0 and 1.":
      "Hinweis: Der Wert muss eine Gleitkommazahl zwischen 0 und 1 sein.",
    "Note: Value must be a float between 0 and 10.":
      "Hinweis: Der Wert muss eine Gleitkommazahl zwischen 0 und 10 sein.",
    "Filter by Ransomware score.":
      "Nach Ransomware-Score filtern.",
    "Filter by reference types.":
      "Nach Referenztypen filtern.",
    "Filter by reference values. Use with Reference Types to filter by specific reference type.":
      "Nach Referenzwerten filtern. Verwenden Sie diese Option zusammen mit Reference Types, um nach einem bestimmten Referenztyp zu filtern.",
    "Filter by severity, which is calculated based on CVSS values.":
      "Nach Schweregrad filtern, der anhand der CVSS-Werte berechnet wird.",
    "Filter by Tags":
      "Nach Tags filtern",
    "Filter vulnerabilities by tags.":
      "Schwachstellen nach Tags filtern.",
    "FireEye Endpoint Security is an integrated solution that detects what others miss and protects endpoints against known and unknown threats. The HX Cortex integration provides access to information about endpoints, acquisitions, alerts, indicators, and containment. Customers can extract critical data and effectively operate a security operations automated playbook":
      "FireEye Endpoint Security ist eine integrierte Lösung, die erkennt, was andere übersehen, und Endpunkte vor bekannten und unbekannten Bedrohungen schützt. Die HX-Cortex-Integration bietet Zugriff auf Informationen zu Endpunkten, Erfassungen, Warnungen, Indikatoren und Eindämmung. Kunden können kritische Daten extrahieren und ein automatisiertes Playbook für Sicherheitsoperationen effektiv betreiben",
    "First fetch timestamp (<number> <time unit>, e.g., 12 hours, 3 days)":
      "Zeitstempel des ersten Abrufs (<number> <time unit>, z. B. 12 hours, 3 days)",
    "For a complete reference to the Extrahop detections filter fields, please refer to the ExtraHop REST API documentation at":
      "Eine vollständige Referenz der ExtraHop-Erkennungsfilterfelder finden Sie in der ExtraHop-REST-API-Dokumentation unter",
    "For example: 10 minutes, 5 hours, 8 days, 2 weeks, 8 months, 2021-12-31, 01 Mar 2021, 01 Feb 2021 04:45:33, 2022-04-17T14:05:44Z":
      "Zum Beispiel: 10 minutes, 5 hours, 8 days, 2 weeks, 8 months, 2021-12-31, 01 Mar 2021, 01 Feb 2021 04:45:33, 2022-04-17T14:05:44Z",
    "If configuring an instance for ExtraHop Reveal(x) 360, select":
      "Wenn Sie eine Instanz für ExtraHop Reveal(x) 360 konfigurieren, wählen Sie",
    "If configuring an instance for ExtraHop Reveal(x) Enterprise, unselect":
      "Wenn Sie eine Instanz für ExtraHop Reveal(x) Enterprise konfigurieren, deaktivieren Sie",
    "If the categories and category are not specified, then categories will be set to [\"sec.attack\"]. The category field is deprecated by the API, so please use the categories field instead.":
      "Wenn categories und category nicht angegeben sind, wird categories auf [\"sec.attack\"] gesetzt. Das Feld category ist in der API veraltet; verwenden Sie stattdessen das Feld categories.",
    "In F5 Silverline portal, go to":
      "Wechseln Sie im F5-Silverline-Portal zu",
    "In order to fetch alerts, follow the instructions":
      "Um Warnungen abzurufen, befolgen Sie die Anweisungen",
    "Indicates whether to allow connections without verifying SSL certificate's validity.":
      "Gibt an, ob Verbindungen ohne Überprüfung der Gültigkeit des SSL-Zertifikats zugelassen werden.",
    "Indicates whether to use XSOAR's system proxy settings to connect to the API.":
      "Gibt an, ob die System-Proxy-Einstellungen von XSOAR für die Verbindung mit der API verwendet werden.",
    "Info level for fetched alerts":
      "Informationsstufe für abgerufene Warnungen",
    "Integrated advanced threat detection: Enhancing protection from network edge to endpoint.":
      "Integrierte erweiterte Bedrohungserkennung: verbesserter Schutz vom Netzwerkrand bis zum Endpunkt.",
    "Integration instance settings":
      "Einstellungen der Integrationsinstanz",
    "Specifies the type of incident to be created for detection events ingested by this instance if a":
      "Gibt den Incident-Typ an, der für von dieser Instanz erfasste Erkennungsereignisse erstellt wird (wenn kein",
    "is not specified.":
      "angegeben ist).",
    "Known Limitations":
      "Bekannte Einschränkungen",
    "KOI is an endpoint security platform that provides visibility and control over browser extensions, SaaS applications, and web-based threats.":
      "KOI ist eine Endpunkt-Sicherheitsplattform, die Transparenz und Kontrolle über Browsererweiterungen, SaaS-Anwendungen und webbasierte Bedrohungen bietet.",
    "Locations":
      "Standorte",
    "Magnet Automate is an orchestration and automation platform that accelerates your digital forensics investigations by automating workflows and integrating with various forensic tools.":
      "Magnet Automate ist eine Orchestrierungs- und Automatisierungsplattform, die Ihre digitalen forensischen Untersuchungen durch Automatisierung von Workflows und Integration verschiedener forensischer Tools beschleunigt.",
    "Max incidents to fetch":
      "Maximale Anzahl abzurufender Incidents",
    "Maximum CVSS v2 Score":
      "Maximaler CVSS-v2-Score",
    "Maximum CVSS v3 Score":
      "Maximaler CVSS-v3-Score",
    "Maximum CVSS v4 Score":
      "Maximaler CVSS-v4-Score",
    "Maximum EPSS v3 Score":
      "Maximaler EPSS-v3-Score",
    "Minimum CVSS v2 Score":
      "Minimaler CVSS-v2-Score",
    "Minimum CVSS v3 Score":
      "Minimaler CVSS-v3-Score",
    "Minimum CVSS v4 Score":
      "Minimaler CVSS-v4-Score",
    "Minimum EPSS v3 Score":
      "Minimaler EPSS-v3-Score",
    "Microsoft 365 Defender is a unified pre- and post-breach enterprise defense suite that natively coordinates detection, prevention, investigation, and response across endpoints, identities, email, and applications to provide integrated protection against sophisticated attacks.":
      "Microsoft 365 Defender ist eine einheitliche Unternehmensabwehr-Suite für die Phasen vor und nach einer Kompromittierung, die Erkennung, Prävention, Untersuchung und Reaktion über Endpunkte, Identitäten, E-Mail und Anwendungen hinweg nativ koordiniert, um integrierten Schutz vor ausgeklügelten Angriffen zu bieten.",
    "Microsoft Defender for Endpoint (previously Microsoft Defender Advanced Threat Protection (ATP)) is a unified platform for preventative protection, post-breach detection, automated investigation, and response.":
      "Microsoft Defender for Endpoint (zuvor Microsoft Defender Advanced Threat Protection (ATP)) ist eine einheitliche Plattform für präventiven Schutz, Erkennung nach einer Kompromittierung, automatisierte Untersuchung und Reaktion.",
    "Microsoft Graph grants Cortex authorized access to a user's Microsoft Outlook mail data in a personal account or organization account.":
      "Microsoft Graph gewährt Cortex autorisierten Zugriff auf die Microsoft-Outlook-E-Mail-Daten eines Benutzers in einem persönlichen Konto oder einem Organisationskonto.",
    "Microsoft Intune is a Microsoft cloud-based management solution that provides for mobile device and operating system management.":
      "Microsoft Intune ist eine cloudbasierte Verwaltungslösung von Microsoft für die Verwaltung von Mobilgeräten und Betriebssystemen.",
    "On Cloud":
      "In der Cloud",
    "Product Names":
      "Produktnamen",
    "Vendor Names":
      "Anbieternamen",
    "Ransomware Score":
      "Ransomware-Score",
    "Reference Types":
      "Referenztypen",
    "Reference Values":
      "Referenzwerte",
    "Provides the tags to be added to the indicators. Supports CSV values.":
      "Gibt die Tags an, die den Indikatoren hinzugefügt werden. Unterstützt CSV-Werte.",
    "Select if the instance connects to an ExtraHop Reveal(x) 360 system. Leave unselected if connecting to ExtraHop Reveal(x) Enterprise. Default value is false.":
      "Wählen Sie diese Option, wenn sich die Instanz mit einem ExtraHop-Reveal(x)-360-System verbindet. Lassen Sie sie deaktiviert, wenn die Verbindung zu ExtraHop Reveal(x) Enterprise besteht. Der Standardwert ist false.",
    "Select to disable running commands through the Cortex CLI on this instance of the integration.":
      "Wählen Sie diese Option, um die Ausführung von Befehlen über die Cortex CLI für diese Instanz der Integration zu deaktivieren.",
    "Select to enable this instance to fetch detection events. Otherwise, select":
      "Wählen Sie diese Option, damit diese Instanz Erkennungsereignisse abruft. Wählen Sie andernfalls",
    "Send email notifications to users":
      "E-Mail-Benachrichtigungen an Benutzer senden",
    "Send emails implemented in Python with embedded image support.":
      "In Python implementierter E-Mail-Versand mit Unterstützung für eingebettete Bilder.",
    "Send messages and notifications to your team members.":
      "Senden Sie Nachrichten und Benachrichtigungen an Ihre Teammitglieder.",
    "Server URL (e.g. https://192.168.0.1:3000)":
      "Server-URL (z. B. https://192.168.0.1:3000)",
    "Server URL (e.g., https://192.168.0.1:3000)":
      "Server-URL (z. B. https://192.168.0.1:3000)",
    "Server URL to connect to Flashpoint Ignite.":
      "Server-URL für die Verbindung mit Flashpoint Ignite.",
    "Specifies how detection events ingested by this instance are mapped to Cortex incident fields.":
      "Gibt an, wie von dieser Instanz erfasste Erkennungsereignisse den Cortex-Incident-Feldern zugeordnet werden.",
    "Specifies how often the instance fetches detection events. Because each API call fetches a maximum of 200 detection events, we recommend specifying one minute intervals to fetch all detection events.":
      "Gibt an, wie oft die Instanz Erkennungsereignisse abruft. Da jeder API-Aufruf maximal 200 Erkennungsereignisse abruft, empfehlen wir, Intervalle von einer Minute anzugeben, um alle Erkennungsereignisse abzurufen.",
    "Specifies the beginning timestamp from which to start fetching detection events.":
      "Gibt den Anfangszeitstempel an, ab dem Erkennungsereignisse abgerufen werden.",
    "Specifies the level of logging to enable for this instance of the integration.":
      "Gibt die Protokollierungsstufe an, die für diese Instanz der Integration aktiviert wird.",
    "Specifies the type of incident to be created for detection events ingested by this instance.":
      "Gibt den Incident-Typ an, der für von dieser Instanz erfasste Erkennungsereignisse erstellt wird.",
    "Specifies whether to allow connections without verifying SSL certificate’s validity.":
      "Gibt an, ob Verbindungen ohne Überprüfung der Gültigkeit des SSL-Zertifikats zugelassen werden.",
    "Specifies whether to run the instance of the integration on a single engine.":
      "Gibt an, ob die Instanz der Integration auf einer einzelnen Engine ausgeführt wird.",
    "Specifies whether to use XSOAR system proxy settings to connect to the API.":
      "Gibt an, ob die System-Proxy-Einstellungen von XSOAR für die Verbindung mit der API verwendet werden.",
    "Supported formats: N minutes, N hours, N days, N weeks, N months, N years, yyyy-mm-dd, yyyy-mm-ddTHH:MM:SSZ":
      "Unterstützte Formate: N minutes, N hours, N days, N weeks, N months, N years, yyyy-mm-dd, yyyy-mm-ddTHH:MM:SSZ",
    "The API key required for authentication if connecting to ExtraHop Reveal(x) Enterprise.":
      "Der für die Authentifizierung erforderliche API-Schlüssel bei Verbindung mit ExtraHop Reveal(x) Enterprise.",
    "The API key to use for the connection.":
      "Der für die Verbindung zu verwendende API-Schlüssel.",
    "The client ID generated on your ExtraHop system that is required for authentication if connecting to ExtraHop Reveal(x) 360.":
      "Die in Ihrem ExtraHop-System generierte Client-ID, die für die Authentifizierung bei Verbindung mit ExtraHop Reveal(x) 360 erforderlich ist.",
    "The client secret generated on your ExtraHop system that is required for authentication if connecting to ExtraHop Reveal(x) 360.":
      "Das in Ihrem ExtraHop-System generierte Client-Secret, das für die Authentifizierung bei Verbindung mit ExtraHop Reveal(x) 360 erforderlich ist.",
    "The Microsoft Management Activity API integration enables you to subscribe or unsubscribe to different audits, receive their content, and fetch new content as incidents.":
      "Mit der Integration Microsoft Management Activity API können Sie verschiedene Audits abonnieren oder deren Abonnement kündigen, deren Inhalte empfangen und neue Inhalte als Incidents abrufen.",
    "The URL of the ExtraHop system this instance will connect to.":
      "Die URL des ExtraHop-Systems, mit dem sich diese Instanz verbindet.",
    "The URL of your FireEye account.":
      "Die URL Ihres FireEye-Kontos.",
    "The UTC date or relative timestamp from where to start fetching incidents.":
      "Das UTC-Datum oder der relative Zeitstempel, ab dem Incidents abgerufen werden.",
    "The UTC date or relative timestamp from where to start fetching incidents. Supported formats: N minutes, N hours, N days, N weeks, N months, N years, yyyy-mm-dd, yyyy-mm-ddTHH:MM:SSZ For example: 10 minutes, 5 hours, 8 days, 2 weeks, 8 months, 2021-12-31, 01 Mar 2021, 01 Feb 2021 04:45:33, 2022-04-17T14:05:44Z":
      "Das UTC-Datum oder der relative Zeitstempel, ab dem Incidents abgerufen werden. Unterstützte Formate: N minutes, N hours, N days, N weeks, N months, N years, yyyy-mm-dd, yyyy-mm-ddTHH:MM:SSZ Zum Beispiel: 10 minutes, 5 hours, 8 days, 2 weeks, 8 months, 2021-12-31, 01 Mar 2021, 01 Feb 2021 04:45:33, 2022-04-17T14:05:44Z",
    "There are two types of permissions":
      "Es gibt zwei Arten von Berechtigungen",
    "This integration enables using Elastic Security for SIEM for security operations management and searching Elastic logs. This pack is to be used in combination with the Elasticsearch v2 integration.":
      "Diese Integration ermöglicht die Verwendung von Elastic Security for SIEM für die Verwaltung von Sicherheitsoperationen und die Suche in Elastic-Protokollen. Dieses Paket ist in Kombination mit der Integration Elasticsearch v2 zu verwenden.",
    "To configure an instance of F5 Silverline, you need to obtain the following information.":
      "Um eine Instanz von F5 Silverline zu konfigurieren, benötigen Sie die folgenden Informationen.",
    "To configure the integration, enter your credentials in the following fields:":
      "Um die Integration zu konfigurieren, geben Sie Ihre Anmeldedaten in die folgenden Felder ein:",
    "To set up an instance, you need to add the following:":
      "Um eine Instanz einzurichten, müssen Sie Folgendes hinzufügen:",
    "Unified gateway to security insights - all from a unified Microsoft Graph Security API.":
      "Einheitliches Gateway zu Sicherheitserkenntnissen – alles über eine einheitliche Microsoft-Graph-Security-API.",
    "Use the integration to get logs from the O365 service.":
      "Verwenden Sie die Integration, um Protokolle vom O365-Dienst abzurufen.",
    "Use the Kenna v2 integration to search and update vulnerabilities, schedule a run connector, and manage tags and attributes.":
      "Verwenden Sie die Integration Kenna v2, um Schwachstellen zu suchen und zu aktualisieren, die Ausführung eines Connectors zu planen und Tags und Attribute zu verwalten.",
    "Use the Lastline v2 integration to provide threat analysts and incident response teams with the advanced malware isolation and inspection environment needed to safely execute advanced malware samples, and understand their behavior.":
      "Verwenden Sie die Integration Lastline v2, um Bedrohungsanalysten und Incident-Response-Teams die erweiterte Umgebung zur Isolierung und Untersuchung von Malware bereitzustellen, die erforderlich ist, um fortgeschrittene Malware-Samples sicher auszuführen und ihr Verhalten zu verstehen.",
    "Use the Microsoft Graph API integration to interact with Microsoft APIs that do not have dedicated integrations in Cortex, for example, Mail Single-User, etc.":
      "Verwenden Sie die Integration Microsoft Graph API, um mit Microsoft-APIs zu interagieren, für die es in Cortex keine eigenen Integrationen gibt, z. B. Mail Single-User usw.",
    "Use the Microsoft Search API in Microsoft Graph to search content stored in OneDrive or SharePoint: files, folders, lists, list items, or sites.":
      "Verwenden Sie die Microsoft Search API in Microsoft Graph, um in OneDrive oder SharePoint gespeicherte Inhalte zu durchsuchen: Dateien, Ordner, Listen, Listenelemente oder Sites.",
    "Use the MITRE ATT&CK® feed to fetch MITRE’s Adversarial Tactics, Techniques, and Common Knowledge (ATT&CK®) content. MITRE ATT&CK is a globally-accessible knowledge base of adversary tactics and techniques based on real-world observations. The ATT&CK knowledge base is used as a foundation for the development of specific threat models and methodologies in the private sector, in government, and in the cybersecurity product and service community.":
      "Verwenden Sie den MITRE-ATT&CK®-Feed, um den Inhalt von MITRE Adversarial Tactics, Techniques, and Common Knowledge (ATT&CK®) abzurufen. MITRE ATT&CK ist eine weltweit zugängliche Wissensdatenbank über Taktiken und Techniken von Angreifern, die auf realen Beobachtungen basiert. Die ATT&CK-Wissensdatenbank dient als Grundlage für die Entwicklung spezifischer Bedrohungsmodelle und Methoden im privaten Sektor, in Regierungen und in der Community für Cybersicherheitsprodukte und -dienste.",
    "User Name and Password":
      "Benutzername und Passwort",
    "When you have api_analyst permissions, you cannot approve a containment for the host.":
      "Mit api_analyst-Berechtigungen können Sie keine Eindämmung für den Host genehmigen.",
    "You can use with fireeye-hx-host-containment command for sending a containment request.":
      "Sie können es mit dem Befehl fireeye-hx-host-containment verwenden, um eine Eindämmungsanfrage zu senden.",
    "Your F5 Silverline server URL":
      "Ihre F5-Silverline-Server-URL",
    "Your server URL":
      "Ihre Server-URL",
    "Your username and password when logging in to your FireEye account.":
      "Ihr Benutzername und Passwort bei der Anmeldung bei Ihrem FireEye-Konto.",

    // --- Batch: GCP service account setup / Freshservice / Forcepoint / FortiGate / Glean integration docs and parameters (08:29 export) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    ", add the users or groups that are allowed to use and manage the service account.":
      ", fügen Sie die Benutzer oder Gruppen hinzu, die das Dienstkonto verwenden und verwalten dürfen.",
    ", select the IAM roles to grant to the service account.":
      ", wählen Sie die IAM-Rollen aus, die dem Dienstkonto zugewiesen werden sollen.",
    ", then click":
      ", und klicken Sie dann auf",
    ". Note that you must have permission to add members to the organization or project for the":
      ". Beachten Sie, dass Sie die Berechtigung zum Hinzufügen von Mitgliedern zur Organisation oder zum Projekt benötigen für",
    "(Account username, Password)":
      "(Kontobenutzername, Passwort)",
    "A list of the required permissions for every command can be found below.":
      "Eine Liste der für jeden Befehl erforderlichen Berechtigungen finden Sie unten.",
    "A new API key will be generated for you. Copy the generated API key and keep it secure.":
      "Es wird ein neuer API-Schlüssel für Sie generiert. Kopieren Sie den generierten API-Schlüssel und bewahren Sie ihn sicher auf.",
    "Account username":
      "Kontobenutzername",
    "Add a member and roles to a project or organization. In the":
      "Fügen Sie einem Projekt oder einer Organisation ein Mitglied und Rollen hinzu.",
    "Add a title, description, and ID and ensure the role is marked for General Availability.":
      "Fügen Sie einen Titel, eine Beschreibung und eine ID hinzu und stellen Sie sicher, dass die Rolle als General Availability markiert ist.",
    "Add the required permissions by clicking":
      "Fügen Sie die erforderlichen Berechtigungen hinzu, indem Sie auf Folgendes klicken:",
    "After choosing an authentication method, click":
      "Klicken Sie nach der Auswahl einer Authentifizierungsmethode auf",
    "At the top-left, click the navigation menu >":
      "Klicken Sie oben links auf das Navigationsmenü >",
    "Check the Version 8.5.5 or later flag to switch to use these newer api endpoints.":
      "Aktivieren Sie das Kennzeichen Version 8.5.5 or later, um zu diesen neueren API-Endpunkten zu wechseln.",
    "Click on your profile icon in the top-right corner and select “Profile settings” from the dropdown menu.":
      "Klicken Sie oben rechts auf Ihr Profilsymbol und wählen Sie im Dropdown-Menü „Profile settings“ aus.",
    "Click the down arrow in the top menu bar for the project.":
      "Klicken Sie in der oberen Menüleiste für das Projekt auf den Pfeil nach unten.",
    "Click the email address for the service account you created.":
      "Klicken Sie auf die E-Mail-Adresse des von Ihnen erstellten Dienstkontos.",
    "Click the navigation menu and select":
      "Klicken Sie auf das Navigationsmenü und wählen Sie",
    "Command Name":
      "Befehlsname",
    "Command Required Permissions":
      "Für den Befehl erforderliche Berechtigungen",
    "Could not authorize":
      "Autorisierung nicht möglich",
    "Create a Custom Role":
      "Benutzerdefinierte Rolle erstellen",
    "Create a Project":
      "Projekt erstellen",
    "Create a Service Account":
      "Dienstkonto erstellen",
    "Create a Service Account & Service Account Key":
      "Dienstkonto und Dienstkontoschlüssel erstellen",
    "Create a Service Account Key":
      "Dienstkontoschlüssel erstellen",
    "Credentials and Password":
      "Anmeldedaten und Passwort",
    "drop-down list, select":
      "Dropdown-Liste die Option",
    "drop-down list, select an organization that contains the GCP project(s) that you want the integration to monitor.":
      "Dropdown-Liste eine Organisation aus, die die GCP-Projekte enthält, die die Integration überwachen soll.",
    "drop-down list, select the required roles.":
      "Dropdown-Liste die erforderlichen Rollen aus.",
    "Enable Google Workspace APIs":
      "Google-Workspace-APIs aktivieren",
    "Enter an API token and your Server URL.":
      "Geben Sie ein API-Token und Ihre Server-URL ein.",
    "Enter your Server URL -":
      "Geben Sie Ihre Server-URL ein –",
    "Fetch tasks for each ticket type and consider them in the mirroring (requires an additional API request per ticket).":
      "Ruft die Aufgaben für jeden Ticket-Typ ab und berücksichtigt sie bei der Spiegelung (erfordert eine zusätzliche API-Anfrage pro Ticket).",
    "Fetch tickets tasks":
      "Ticket-Aufgaben abrufen",
    "field, paste the email address of the created service account.":
      "fügen Sie die E-Mail-Adresse des erstellten Dienstkontos ein.",
    "First alert created date to fetch. e.g., \"1 min ago\",\"2 weeks ago\",\"3 months ago\"":
      "Erstellungsdatum der ersten abzurufenden Warnung. Zum Beispiel: \"1 min ago\",\"2 weeks ago\",\"3 months ago\"",
    "Follow these instructions to retrieve the API token.":
      "Befolgen Sie diese Anweisungen, um das API-Token abzurufen.",
    "Follow these instructions to successfully instantiate an instance of the Freshservice integration.":
      "Befolgen Sie diese Anweisungen, um erfolgreich eine Instanz der Freshservice-Integration zu erstellen.",
    "Forcepoint version 8.5.5 or later":
      "Forcepoint Version 8.5.5 oder höher",
    "Forcepoint’s API calls to delete URLs/IPs from a category and to delete the category itself have changed. See":
      "Die API-Aufrufe von Forcepoint zum Löschen von URLs/IPs aus einer Kategorie und zum Löschen der Kategorie selbst haben sich geändert. Siehe",
    "Forcepoint’s documentation":
      "Forcepoint-Dokumentation",
    "FortiGate always delivered on the concept of hybrid mesh firewalls with FortiManager for unified management and consistent security across complex hybrid environments.":
      "FortiGate hat immer das Konzept hybrider Mesh-Firewalls mit FortiManager für einheitliche Verwaltung und konsistente Sicherheit in komplexen Hybridumgebungen umgesetzt.",
    "FortiGate provides flawless convergence that can scale to any location: remote office, branch, campus, data center, and cloud.":
      "FortiGate bietet eine einwandfreie Konvergenz, die sich auf jeden Standort skalieren lässt: Remote-Büro, Zweigstelle, Campus, Rechenzentrum und Cloud.",
    "Freshservice URL (make sure your URL includes your unique environment name).":
      "Freshservice-URL (stellen Sie sicher, dass Ihre URL Ihren eindeutigen Umgebungsnamen enthält).",
    "Glean Configure Connection":
      "Glean-Verbindung konfigurieren",
    "Grant Permissions":
      "Berechtigungen erteilen",
    "Grant Role Access to Service Account":
      "Dienstkonto Rollenzugriff gewähren",
    "How to Achieve Authentication":
      "So erreichen Sie die Authentifizierung",
    "If prompted, select a project, or create a new one.":
      "Wenn Sie dazu aufgefordert werden, wählen Sie ein Projekt aus oder erstellen Sie ein neues.",
    "If the Freshworks Freshservice name for your company is, for example, ‘taltal’, then the Server URL configuration parameter you would enter would be ‘https://taltal.freshservice.com’.":
      "Wenn der Freshworks-Freshservice-Name Ihres Unternehmens beispielsweise ‘taltal’ lautet, wäre der einzugebende Konfigurationsparameter Server-URL ‘https://taltal.freshservice.com’.",
    "Important Updates for Version 8.5.5 and Later":
      "Wichtige Updates für Version 8.5.5 und höher",
    "In order to use the integration capabilities, you need to enable Google Workspace APIs.":
      "Um die Funktionen der Integration zu nutzen, müssen Sie die Google-Workspace-APIs aktivieren.",
    "In order to use the integration, in the first stage, you need to create a project.":
      "Um die Integration zu verwenden, müssen Sie zunächst ein Projekt erstellen.",
    "In the left sidebar, click on “API Key”.":
      "Klicken Sie in der linken Seitenleiste auf „API Key“.",
    "In the list of search results, click the API you want to enable.":
      "Klicken Sie in der Liste der Suchergebnisse auf die API, die Sie aktivieren möchten.",
    "In the search field, enter the name of the API you want to enable and press":
      "Geben Sie im Suchfeld den Namen der API ein, die Sie aktivieren möchten, und drücken Sie",
    "Incident impacts to fetch. The default is All. You can choose multiple impacts.":
      "Abzurufende Incident-Auswirkungen. Standard ist All. Sie können mehrere Auswirkungen auswählen.",
    "Incident priorities to fetch. The default is All. You can choose multiple priorities.":
      "Abzurufende Incident-Prioritäten. Standard ist All. Sie können mehrere Prioritäten auswählen.",
    "Information about how to create project can be found":
      "Informationen zum Erstellen eines Projekts finden Sie",
    "Instance Setup":
      "Instanz einrichten",
    "Integrate Cloud Security with your Glean Account to gain comprehensive visibility into any data and posture risk existing in your Glean environment. This integration enables automated scanning of all assets in Glean, including data classification and risk assessment.":
      "Integrieren Sie Cloud Security in Ihr Glean-Konto, um umfassende Transparenz über alle in Ihrer Glean-Umgebung vorhandenen Daten- und Posture-Risiken zu erhalten. Diese Integration ermöglicht das automatisierte Scannen aller Assets in Glean, einschließlich Datenklassifizierung und Risikobewertung.",
    "Keep this window open for the duration of the onboarding.":
      "Lassen Sie dieses Fenster während des gesamten Onboardings geöffnet.",
    "Log in to your Freshservice account as an administrator.":
      "Melden Sie sich als Administrator bei Ihrem Freshservice-Konto an.",
    "Maximum number of incidents per fetch. Default is 100.":
      "Maximale Anzahl von Incidents pro Abruf. Standard ist 100.",
    "More information about creating the required resources can be found here:":
      "Weitere Informationen zum Erstellen der erforderlichen Ressourcen finden Sie hier:",
    "Note that the API key is generated with different permissions. For using the ‘Test’ button to validate the credentials, your API token will need at least the view tickets permission.":
      "Beachten Sie, dass der API-Schlüssel mit unterschiedlichen Berechtigungen generiert wird. Um die Schaltfläche ‘Test’ zur Validierung der Anmeldedaten zu verwenden, benötigt Ihr API-Token mindestens die Berechtigung zum Anzeigen von Tickets.",
    "Note: You must provide at least one of these authentication methods (username/password or API key), but not both simultaneously.":
      "Hinweis: Sie müssen mindestens eine dieser Authentifizierungsmethoden (Benutzername/Passwort oder API-Schlüssel) angeben, jedoch nicht beide gleichzeitig.",
    "On the API Key page, click on the “Generate Key” button.":
      "Klicken Sie auf der Seite API Key auf die Schaltfläche „Generate Key“.",
    "Please enable the following APIs:":
      "Aktivieren Sie die folgenden APIs:",
    "Please provide the downloaded file content in the integration":
      "Geben Sie den Inhalt der heruntergeladenen Datei im Instanzparameter",
    "instance parameter.":
      "der Integration an.",
    "Required grant ‘Service Account Key Admin’ role permission":
      "Erforderliche Erteilung der Berechtigung der Rolle ‘Service Account Key Admin’",
    "Service Account Private Key file content (JSON)":
      "Inhalt der privaten Dienstkontoschlüssel-Datei (JSON)",
    "Service Account Private Key file content (JSON).":
      "Inhalt der privaten Dienstkontoschlüssel-Datei (JSON).",
    "The Fortinet FortiOS operating system provides deep visibility and security across a variety of form factors.":
      "Das Betriebssystem Fortinet FortiOS bietet tiefgehende Transparenz und Sicherheit für eine Vielzahl von Formfaktoren.",
    "The Glean account is not recognized.":
      "Das Glean-Konto wird nicht erkannt.",
    "The risk of the tickets to fetch. Available only for the 'Change Request' ticket type.":
      "Das Risiko der abzurufenden Tickets. Nur für den Ticket-Typ 'Change Request' verfügbar.",
    "The status of the tickets to fetch. Since each ticket type has its own unique set of statuses, select only statuses that match the selected ticket type(s).":
      "Der Status der abzurufenden Tickets. Da jeder Ticket-Typ eigene Status hat, wählen Sie nur Status aus, die zu den ausgewählten Ticket-Typen passen.",
    "The urgency of the tickets to fetch. Available only for the 'Incident/Service Request' ticket type. The default is All. You can choose multiple urgencies.":
      "Die Dringlichkeit der abzurufenden Tickets. Nur für den Ticket-Typ 'Incident/Service Request' verfügbar. Standard ist All. Sie können mehrere Dringlichkeiten auswählen.",
    "The URL of your Forcepoint instance, without the port number.":
      "Die URL Ihrer Forcepoint-Instanz ohne Portnummer.",
    "There are no permissions required for making this API call.":
      "Für diesen API-Aufruf sind keine Berechtigungen erforderlich.",
    "Ticket Impact":
      "Ticket-Auswirkung",
    "Ticket Priority":
      "Ticket-Priorität",
    "Ticket Risk":
      "Ticket-Risiko",
    "Ticket Status":
      "Ticket-Status",
    "Ticket type to fetch as incidents.":
      "Als Incidents abzurufender Ticket-Typ.",
    "Ticket Urgency":
      "Ticket-Dringlichkeit",
    "To authenticate with FortiGate, you can use one of two methods:":
      "Zur Authentifizierung bei FortiGate können Sie eine von zwei Methoden verwenden:",
    "To configure an instance of the integration in Cortex, you need to supply the Service Account Private Key file content.":
      "Um eine Instanz der Integration in Cortex zu konfigurieren, müssen Sie den Inhalt der privaten Dienstkontoschlüssel-Datei angeben.",
    "To set up an instance, add the following.":
      "Um eine Instanz einzurichten, fügen Sie Folgendes hinzu.",
    "To successfully onboard the account, try again or contact support.":
      "Um das Konto erfolgreich einzubinden, versuchen Sie es erneut oder wenden Sie sich an den Support.",
    "Under Service account details, type a name, ID, and description for the service account, then click":
      "Geben Sie unter Service account details einen Namen, eine ID und eine Beschreibung für das Dienstkonto ein und klicken Sie dann auf",
    "Username/Password Authentication":
      "Authentifizierung mit Benutzername/Passwort",
    "Verifying connection...":
      "Verbindung wird überprüft...",
    "You can grant the permissions by predefined roles or by creating a custom role.":
      "Sie können die Berechtigungen über vordefinierte Rollen oder durch Erstellen einer benutzerdefinierten Rolle erteilen.",
    "You have to grant the required permissions to the created Service Account in order to use in the integration command.":
      "Sie müssen dem erstellten Dienstkonto die erforderlichen Berechtigungen erteilen, um es im Integrationsbefehl zu verwenden.",
    "Your credentials (username) and password for logging in to your Forcepoint instance.":
      "Ihre Anmeldedaten (Benutzername) und Ihr Passwort für die Anmeldung bei Ihrer Forcepoint-Instanz.",
    "Your new public/private key pair is generated and downloaded to your machine; it serves as the only copy of the private key. You are responsible for storing it securely. If you lose this key pair, you will need to generate a new one.":
      "Ihr neues öffentliches/privates Schlüsselpaar wird generiert und auf Ihren Computer heruntergeladen; es ist die einzige Kopie des privaten Schlüssels. Sie sind für die sichere Aufbewahrung verantwortlich. Wenn Sie dieses Schlüsselpaar verlieren, müssen Sie ein neues generieren.",

    // --- Batch: Generic Export Indicators Service / Generic SQL / MCP authentication docs and integration card descriptions (08:43 export) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    "- Bypass SSL certificate verification (Default:":
      "- SSL-Zertifikatsprüfung umgehen (Standard:",
    "- Check this box if API calls to this endpoint require authentication (":
      "- Aktivieren Sie dieses Kontrollkästchen, wenn API-Aufrufe an diesen Endpunkt eine Authentifizierung erfordern (",
    "- Check this box if API key or authentication credentials are provided as part of the HTTP header (":
      "- Aktivieren Sie dieses Kontrollkästchen, wenn der API-Schlüssel oder die Anmeldedaten als Teil des HTTP-Headers bereitgestellt werden (",
    "- For a header-based call, this would appear in the header as 'X-PAN-KEY': KEY_HERE":
      "- Bei einem Header-basierten Aufruf würde dies im Header als 'X-PAN-KEY': KEY_HERE erscheinen",
    "- For a parameterized call, this would be appended to the URL as &X-PAN-KEY=KEY_HERE -":
      "- Bei einem parametrisierten Aufruf würde dies als &X-PAN-KEY=KEY_HERE an die URL angehängt -",
    "- Integration instance name":
      "- Name der Integrationsinstanz",
    "- Leave blank when using an API key":
      "- Bei Verwendung eines API-Schlüssels leer lassen",
    "- Leverage the proxy settings configured on the XSOAR server":
      "- Verwendet die auf dem XSOAR-Server konfigurierten Proxy-Einstellungen",
    "- The base server URL for the API endpoint without the trailing slash (":
      "- Die Basis-Server-URL für den API-Endpunkt ohne abschließenden Schrägstrich (",
    "- The password (when using HTTP basic authentication) or API key to use for API calls with this integration instance":
      "- Das Passwort (bei HTTP-Basisauthentifizierung) oder der API-Schlüssel für API-Aufrufe mit dieser Integrationsinstanz",
    "- The value to use to identify the API key field as part of the HTTP header or API Key parameter in the URL":
      "- Der Wert, mit dem das API-Schlüsselfeld als Teil des HTTP-Headers oder API-Schlüsselparameters in der URL identifiziert wird",
    "- Username for HTTP basic authentication.":
      "- Benutzername für die HTTP-Basisauthentifizierung.",
    "- When fetching by either ID or timestamp.":
      "- Beim Abrufen entweder nach ID oder nach Zeitstempel.",
    "- When the ID is unique but not necessarily ascending and timestamp is not unique.":
      "- Wenn die ID eindeutig, aber nicht unbedingt aufsteigend ist und der Zeitstempel nicht eindeutig ist.",
    ": Add custom headers to be sent with each API request. Enter each header on a new line in the format:":
      ": Fügen Sie benutzerdefinierte Header hinzu, die mit jeder API-Anfrage gesendet werden. Geben Sie jeden Header in einer neuen Zeile im Format ein:",
    ": If you are running the integration via an on-prem engine you must set the username and password fields in the integration instance. Otherwise, for normal usage, if you have set a default password in your tenant, you do not have to set a username and password in the integration instance":
      ": Wenn Sie die Integration über eine lokale Engine ausführen, müssen Sie die Felder für Benutzername und Passwort in der Integrationsinstanz festlegen. Andernfalls müssen Sie bei normaler Verwendung keinen Benutzernamen und kein Passwort in der Integrationsinstanz festlegen, wenn Sie in Ihrem Tenant ein Standardpasswort festgelegt haben",
    ": No authentication is used.":
      ": Es wird keine Authentifizierung verwendet.",
    ": Provide the API Key to access the service REST API.":
      ": Geben Sie den API-Schlüssel für den Zugriff auf die REST-API des Dienstes an.",
    ": Provide the API Token or API Key to access the service REST API.":
      ": Geben Sie das API-Token oder den API-Schlüssel für den Zugriff auf die REST-API des Dienstes an.",
    ": Provide the Bearer Token to access the service REST API.":
      ": Geben Sie das Bearer-Token für den Zugriff auf die REST-API des Dienstes an.",
    ": Provide the raw token to access the service REST API.":
      ": Geben Sie das Raw-Token für den Zugriff auf die REST-API des Dienstes an.",
    ": Provide the username and password for basic authentication.":
      ": Geben Sie Benutzername und Passwort für die Basisauthentifizierung an.",
    ": Required to obtain the access token. To get this code, run the":
      ": Erforderlich, um das Zugriffstoken abzurufen. Um diesen Code abzurufen, führen Sie Folgendes aus:",
    ": Select the authentication method to use for connecting to the MCP server.":
      ": Wählen Sie die Authentifizierungsmethode für die Verbindung mit dem MCP-Server aus.",
    ": Select this option to trust any certificate. This is not recommended for production environments.":
      ": Wählen Sie diese Option, um jedem Zertifikat zu vertrauen. Dies wird für Produktionsumgebungen nicht empfohlen.",
    ": Space-separated permission identifiers requested from the authorization server.":
      ": Durch Leerzeichen getrennte Berechtigungskennungen, die vom Autorisierungsserver angefordert werden.",
    ": The base URL of the MCP server. This is a required parameter for all authentication types.":
      ": Die Basis-URL des MCP-Servers. Dies ist ein erforderlicher Parameter für alle Authentifizierungstypen.",
    ": The Client ID for your application.":
      ": Die Client-ID Ihrer Anwendung.",
    ": The Client Secret for your application.":
      ": Das Client-Secret Ihrer Anwendung.",
    ": The External Dynamic List is not accessible via web browsers and you will receive an unauthorized error if accessing the External Dynamic List via a browser.":
      ": Auf die External Dynamic List kann nicht über Webbrowser zugegriffen werden; beim Zugriff über einen Browser erhalten Sie einen Fehler „Nicht autorisiert“.",
    ": The URI to which the authorization server redirects the user-agent after granting authorization. This is typically used in OAuth 2.0 Authorization Code flow. Default:":
      ": Der URI, an den der Autorisierungsserver den User-Agent nach der Autorisierung weiterleitet. Wird normalerweise im OAuth-2.0-Authorization-Code-Flow verwendet. Standard:",
    ": The URL for the OAuth 2.0 authorization endpoint. If not provided, the default will be the origin of the":
      ": Die URL des OAuth-2.0-Autorisierungsendpunkts. Wenn nicht angegeben, ist der Standard der Ursprung von",
    ": The URL for the OAuth 2.0 token endpoint. If not provided, the default will be the origin of the":
      ": Die URL des OAuth-2.0-Token-Endpunkts. Wenn nicht angegeben, ist der Standard der Ursprung von",
    ": Uses a Bearer token for authentication.":
      ": Verwendet ein Bearer-Token zur Authentifizierung.",
    ": Uses a raw token for authentication.":
      ": Verwendet ein Raw-Token zur Authentifizierung.",
    ": Uses a single API token or key for authentication.":
      ": Verwendet ein einzelnes API-Token oder einen einzelnen Schlüssel zur Authentifizierung.",
    ": Uses a username and password for authentication.":
      ": Verwendet Benutzername und Passwort zur Authentifizierung.",
    ": Uses an API key for authentication.":
      ": Verwendet einen API-Schlüssel zur Authentifizierung.",
    ": Uses OAuth 2.0 Dynamic Client Registration.":
      ": Verwendet OAuth 2.0 Dynamic Client Registration.",
    ": Uses the OAuth 2.0 Authorization Code flow for authentication.":
      ": Verwendet den OAuth-2.0-Authorization-Code-Flow zur Authentifizierung.",
    ": Uses the OAuth 2.0 Client Credentials flow for authentication.":
      ": Verwendet den OAuth-2.0-Client-Credentials-Flow zur Authentifizierung.",
    "\"No known finding\" from any command means nothing was flagged in the sources":
      "„No known finding“ bei einem Befehl bedeutet, dass in den Quellen nichts markiert wurde",
    "(Optional) limit :limit (It’s possible if the database supports it)":
      "(Optional) limit :limit (möglich, wenn die Datenbank dies unterstützt)",
    "* 0 - Do not collapse.":
      "* 0 - Nicht zusammenfassen.",
    "* 1 - Collapse to ranges.":
      "* 1 - In Bereiche zusammenfassen.",
    "* 2 - Collapse to CIDRs.":
      "* 2 - In CIDRs zusammenfassen.",
    "A search engine used for searching Internet-connected devices.":
      "Eine Suchmaschine zur Suche nach mit dem Internet verbundenen Geräten.",
    "Access the Generic Export Indicators Service by Instance Name (HTTPS)":
      "Zugriff auf Generic Export Indicators Service über den Instanznamen (HTTPS)",
    "Add comment to empty list":
      "Kommentar zur leeren Liste hinzufügen",
    "Add custom headers to be sent with each API request.":
      "Fügen Sie benutzerdefinierte Header hinzu, die mit jeder API-Anfrage gesendet werden.",
    "Add custom headers to be sent with each API request. Enter each header on a new line in the format: HeaderName: HeaderValue.":
      "Fügen Sie benutzerdefinierte Header hinzu, die mit jeder API-Anfrage gesendet werden. Geben Sie jeden Header in einer neuen Zeile im Format ein: HeaderName: HeaderValue.",
    "Add HSTS header":
      "HSTS-Header hinzufügen",
    "Advanced Parameters":
      "Erweiterte Parameter",
    "Advanced: Use Legacy Queries":
      "Erweitert: Legacy-Abfragen verwenden",
    "Agentless, Workload-Deep, Context-Aware Security and Compliance for AWS, Azure, and GCP.":
      "Agentenlose, workload-tiefe, kontextbezogene Sicherheit und Compliance für AWS, Azure und GCP.",
    "Alert and notify users using PagerDuty.":
      "Benachrichtigen und alarmieren Sie Benutzer mit PagerDuty.",
    "Analyse retro hunts, read live hunt notifications and download files from VirusTotal.":
      "Analysieren Sie Retro Hunts, lesen Sie Live-Hunt-Benachrichtigungen und laden Sie Dateien von VirusTotal herunter.",
    "Analyzes suspicious hashes, URLs, domains, and IP addresses.":
      "Analysiert verdächtige Hashes, URLs, Domains und IP-Adressen.",
    "API call is authenticated":
      "API-Aufruf wird authentifiziert",
    "API call is authenticated (Default: False)":
      "API-Aufruf wird authentifiziert (Standard: False)",
    "API key supplied in header":
      "API-Schlüssel im Header angegeben",
    "API Key supplied in header":
      "API-Schlüssel im Header angegeben",
    "API Token / API Key":
      "API-Token / API-Schlüssel",
    "Append string to list":
      "Zeichenfolge an die Liste anhängen",
    "argument":
      "Argument",
    "Authentication Header":
      "Authentifizierungs-Header",
    "Authorization Endpoint":
      "Autorisierungsendpunkt",
    "Base API Endpoint URL (https:// with no trailing slash)":
      "Basis-API-Endpunkt-URL (https:// ohne abschließenden Schrägstrich)",
    "Base Server URL":
      "Basis-Server-URL",
    "Bind Variables":
      "Bind-Variablen",
    "By default, the integration does not pool database connections. Thus, a connection is created and closed for each command run by the integration. When connection pooling is enabled, each Docker container will maintain a single connection open for the time specified in the the":
      "Standardmäßig bündelt die Integration keine Datenbankverbindungen. Daher wird für jeden von der Integration ausgeführten Befehl eine Verbindung erstellt und geschlossen. Wenn das Verbindungspooling aktiviert ist, hält jeder Docker-Container eine einzelne Verbindung für die Zeit offen, die in folgender Einstellung angegeben ist:",
    "CIDRs with a lower network prefix bits number are not included. For example - if the number is 8, then 0.0.0.0/2 is excluded from the list.":
      "CIDRs mit einer niedrigeren Anzahl von Netzwerkpräfix-Bits werden nicht aufgenommen. Beispiel: Ist die Zahl 8, wird 0.0.0.0/2 aus der Liste ausgeschlossen.",
    "Close an issue":
      "Einen Vorgang schließen",
    "Cloud based Security Network DVR.":
      "Cloudbasierter Sicherheits-Netzwerk-DVR.",
    "Cloud-based service for logs & metrics management.":
      "Cloudbasierter Dienst für die Verwaltung von Protokollen und Metriken.",
    "Collect information and take action on remote endpoints in real time with VMware Carbon Black EDR (Live Response API) (formerly known as Carbon Black Enterprise Live Response).":
      "Erfassen Sie Informationen und ergreifen Sie Maßnahmen auf Remote-Endpunkten in Echtzeit mit VMware Carbon Black EDR (Live Response API) (früher Carbon Black Enterprise Live Response).",
    "command and follow its instructions.":
      "Befehl aus und befolgen Sie die Anweisungen.",
    "command for the first time to initialize the export process.":
      "Befehl zum ersten Mal aus, um den Exportvorgang zu initialisieren.",
    "Connection Arguments":
      "Verbindungsargumente",
    "Connection Arguments (ex: arg1=val1&arg2=val2)":
      "Verbindungsargumente (z. B.: arg1=val1&arg2=val2)",
    "Connection Pool Time to Live":
      "Lebensdauer des Verbindungspools",
    "Connection Pool Time to Live (seconds)":
      "Lebensdauer des Verbindungspools (Sekunden)",
    "Connection Pooling":
      "Verbindungspooling",
    "Converts URLs, PDF files, and emails to an image file or PDF file.":
      "Konvertiert URLs, PDF-Dateien und E-Mails in eine Bild- oder PDF-Datei.",
    "Custom headers":
      "Benutzerdefinierte Header",
    "Database host":
      "Datenbank-Host",
    "Default it set to false (key is provided as a parameter). Unchecking this will pass the API key as a call header":
      "Standardmäßig ist false festgelegt (der Schlüssel wird als Parameter übergeben). Wenn deaktiviert, wird der API-Schlüssel als Aufruf-Header übergeben",
    "Default ports":
      "Standardports",
    "Deprecated - We recommend using the Remote Access v2 integration instead.":
      "Veraltet. Wir empfehlen, stattdessen die Integration Remote Access v2 zu verwenden.",
    "Deprecated. Use Analyst1 integration instead.":
      "Veraltet. Verwenden Sie stattdessen die Integration Analyst1.",
    "Deprecated. Use Jamf v2 instead. Jamf device management. Please note, this integration is currently only compatible with the Jamf V1 API.":
      "Veraltet. Verwenden Sie stattdessen Jamf v2. Jamf-Geräteverwaltung. Beachten Sie, dass diese Integration derzeit nur mit der Jamf-V1-API kompatibel ist.",
    "Deprecated. Use O365 Defender SafeLinks instead. Enables URL scanning, rewriting inbound email messages in the mail flow, time-of-click URL verification, and links in email messages and other locations.":
      "Veraltet. Verwenden Sie stattdessen O365 Defender SafeLinks. Ermöglicht URL-Scans, das Umschreiben eingehender E-Mail-Nachrichten im Mailfluss, die URL-Überprüfung beim Klicken sowie den Schutz von Links in E-Mail-Nachrichten und an anderen Orten.",
    "Deprecated. Use Proofpoint Protection Server V2 instead.":
      "Veraltet. Verwenden Sie stattdessen Proofpoint Protection Server V2.",
    "Deprecated. Use SlackV3 instead.":
      "Veraltet. Verwenden Sie stattdessen SlackV3.",
    "Deprecated. Use The Generic SQL integration instead.":
      "Veraltet. Verwenden Sie stattdessen die Integration The Generic SQL.",
    "Deprecated. Use the Microsoft Graph Security integration instead. This integration allows you to manage and interact with Microsoft security and compliance content search.":
      "Veraltet. Verwenden Sie stattdessen die Integration Microsoft Graph Security. Mit dieser Integration können Sie die Inhaltssuche für Microsoft-Sicherheit und -Compliance verwalten und mit ihr interagieren.",
    "Deprecated. Use the Okta v2 integration instead.":
      "Veraltet. Verwenden Sie stattdessen die Integration Okta v2.",
    "Deprecated. Use the PagerDuty v2 integration instead.":
      "Veraltet. Verwenden Sie stattdessen die Integration PagerDuty v2.",
    "Deprecated. Use the Palo Alto Networks AutoFocus v2 integration instead. Palo Alto Networks AutoFocus enables you to distinguish the most important threats from everyday commodity attacks.":
      "Veraltet. Verwenden Sie stattdessen die Integration Palo Alto Networks AutoFocus v2. Mit Palo Alto Networks AutoFocus können Sie die wichtigsten Bedrohungen von alltäglichen Standardangriffen unterscheiden.",
    "Deprecated. Use the Prisma Cloud v2 integration instead.":
      "Veraltet. Verwenden Sie stattdessen die Integration Prisma Cloud v2.",
    "Deprecated. Use the Rapid7 Nexpose integration instead.":
      "Veraltet. Verwenden Sie stattdessen die Integration Rapid7 Nexpose.",
    "Deprecated. Use the Server Message Block (SMB) v2 integration instead.":
      "Veraltet. Verwenden Sie stattdessen die Integration Server Message Block (SMB) v2.",
    "Deprecated. Use the ServiceNow v2 integration instead.":
      "Veraltet. Verwenden Sie stattdessen die Integration ServiceNow v2.",
    "Deprecated. Use the Slack v2 integration instead.":
      "Veraltet. Verwenden Sie stattdessen die Integration Slack v2.",
    "Deprecated. Use the Unit 42 Intelligence integration instead.":
      "Veraltet. Verwenden Sie stattdessen die Integration Unit 42 Intelligence.",
    "Deprecated. Use the Zendesk v2 integration instead.":
      "Veraltet. Verwenden Sie stattdessen die Integration Zendesk v2.",
    "Deprecated. Use VirusTotalV3 integration instead.":
      "Veraltet. Verwenden Sie stattdessen die Integration VirusTotalV3.",
    "Deprecated. Use VMware Carbon Black EDR v2 instead.":
      "Veraltet. Verwenden Sie stattdessen VMware Carbon Black EDR v2.",
    "Discover and remediate AI application vulnerabilities with Palo Alto Networks Prisma AIRS AI Red Teaming: targets, adapters, scans, attack reports, prompt sets, and custom attacks.":
      "Entdecken und beheben Sie Schwachstellen in KI-Anwendungen mit Palo Alto Networks Prisma AIRS AI Red Teaming: Ziele, Adapter, Scans, Angriffsberichte, Prompt-Sets und benutzerdefinierte Angriffe.",
    "Does this API call require authentication (Basic, API key, etc.)?":
      "Erfordert dieser API-Aufruf eine Authentifizierung (Basic, API-Schlüssel usw.)?",
    "Dynamically retrieve and add to allow list IPs Prisma Access uses to egress traffic to the internet and SaaS apps.":
      "Rufen Sie die IPs, die Prisma Access für ausgehenden Datenverkehr ins Internet und zu SaaS-Apps verwendet, dynamisch ab und fügen Sie sie einer Zulassungsliste hinzu.",
    "e.g., X-PAN-KEY: API_KEY_HERE (X-PAN-KEY is the value specified in this field)":
      "z. B. X-PAN-KEY: API_KEY_HERE (X-PAN-KEY ist der in diesem Feld angegebene Wert)",
    "Enabling this prevents automatic list refresh.":
      "Wenn dies aktiviert ist, wird die automatische Aktualisierung der Liste verhindert.",
    "Enforce ASCII only":
      "Nur ASCII erzwingen",
    "Enrich indicators with Unit 42 threat intelligence context including verdicts, threat object associations, and relationships.":
      "Reichern Sie Indikatoren mit dem Threat-Intelligence-Kontext von Unit 42 an, einschließlich Verdikten, Zuordnungen von Bedrohungsobjekten und Beziehungen.",
    "Enter each header on a new line in the format: HeaderName: HeaderValue.":
      "Geben Sie jeden Header in einer neuen Zeile im Format ein: HeaderName: HeaderValue.",
    "Enter the exact column's incident name (if empty - it's the Fetch Column).":
      "Der genaue Name der Spalte für den Incident-Namen (falls leer, wird die Abrufspalte verwendet).",
    "Enter the exact column's name to fetch (ID column or timestamp column).":
      "Der genaue Name der abzurufenden Spalte (ID-Spalte oder Zeitstempelspalte).",
    "Example":
      "Beispiel",
    "Exclude top level domainGlobs":
      "Top-Level-domainGlobs ausschließen",
    "Exported Fields":
      "Exportierte Felder",
    "Failover time should be about 1 minute plus the container startup time.":
      "Die Failover-Zeit sollte etwa 1 Minute plus die Startzeit des Containers betragen.",
    "Fetch Column":
      "Abrufspalte",
    "Fetch events query":
      "Abfrage zum Abrufen von Ereignissen",
    "Fetch Incidents query Notes":
      "Hinweise zur Abfrage zum Abrufen von Incidents",
    "Fetch Limit (Default / Max - 50, Recommended less than 50)":
      "Abruflimit (Standard/Maximum – 50, weniger als 50 empfohlen)",
    "Fetch parameters, ts (timestamp) or id and l (limit), will be added by the fetch mechanism.":
      "Die Abrufparameter ts (Zeitstempel) oder id und l (Limit) werden vom Abrufmechanismus hinzugefügt.",
    "Fetch parameters, ts (timestamp) or ID and l (limit), will be added by the fetch mechanism.":
      "Die Abrufparameter ts (Zeitstempel) oder ID und l (Limit) werden vom Abrufmechanismus hinzugefügt.",
    "Fetches and manages incidents from iZOOlogic, enabling automated ingestion, incident creation, and advanced filtering for brand protection and threat management.":
      "Ruft Incidents von iZOOlogic ab und verwaltet sie; ermöglicht automatisierte Erfassung, Incident-Erstellung und erweiterte Filterung für Markenschutz und Bedrohungsmanagement.",
    "Files and Directories management with an SMB server. Supports SMB2 and SMB3 protocols.":
      "Verwaltung von Dateien und Verzeichnissen mit einem SMB-Server. Unterstützt die Protokolle SMB2 und SMB3.",
    "Fill in ‘Fetch Column’ with your exact timestamp column name, and fill in the ‘ID column name’ with your exact ID column name.":
      "Tragen Sie in ‘Fetch Column’ den genauen Namen der Zeitstempelspalte und in ‘ID column name’ den genauen Namen der ID-Spalte ein.",
    "Fill only the ‘Fetch Column’ with the exact column name to fetch (ID column or timestamp column).":
      "Füllen Sie nur ‘Fetch Column’ mit dem genauen Namen der abzurufenden Spalte aus (ID-Spalte oder Zeitstempelspalte).",
    "First fetch interval (in days)":
      "Intervall des ersten Abrufs (in Tagen)",
    "First fetch timestamp or First fetch ID":
      "Zeitstempel des ersten Abrufs oder ID des ersten Abrufs",
    "For example to test via curl with an instance with instance name:":
      "Beispiel für einen Test per curl mit einer Instanz mit Instanznamen:",
    "For example, if `Server URL` is `https://example.com/mcp`, the default `Authorization Endpoint` will be `https://example.com/oauth2/authorize`.":
      "Wenn `Server URL` beispielsweise `https://example.com/mcp` lautet, ist der Standardwert für `Authorization Endpoint` `https://example.com/oauth2/authorize`.",
    "For example, if `Server URL` is `https://example.com/mcp`, the default `Token Endpoint` will be `https://example.com/oauth2/token`.":
      "Wenn `Server URL` beispielsweise `https://example.com/mcp` lautet, ist der Standardwert für `Token Endpoint` `https://example.com/oauth2/token`.",
    "For use with JSON and CSV formats - select specific XSOAR fields to export (comma separated list). If given the value 'all' - all XSOAR fields are exported (in large quantities this can cause a performance issue). If left empty - only value and type are exported.":
      "Zur Verwendung mit den Formaten JSON und CSV: Wählen Sie bestimmte XSOAR-Felder für den Export aus (kommagetrennte Liste). Beim Wert 'all' werden alle XSOAR-Felder exportiert (bei großen Mengen kann dies zu Leistungsproblemen führen). Wenn leer, werden nur Wert und Typ exportiert.",
    "For use with McAfee Web Gateway format - set the indicator list type.":
      "Zur Verwendung mit dem Format McAfee Web Gateway: Legen Sie den Typ der Indikatorliste fest.",
    "For use with PAN-OS (text) format - collapse method for IPs (none, range, CIDR).":
      "Zur Verwendung mit dem Format PAN-OS (Text): Methode zum Zusammenfassen von IPs (none, range, CIDR).",
    "For use with PAN-OS (text) format - if selected, any URL entry that is not compliant with PAN-OS URL format is dropped instead of rewritten.":
      "Zur Verwendung mit dem Format PAN-OS (Text): Wenn ausgewählt, wird jeder URL-Eintrag, der nicht dem PAN-OS-URL-Format entspricht, verworfen, statt umgeschrieben zu werden.",
    "For use with PAN-OS (text) format - String to add to beginning of published list. Supports newline characters (\\n).":
      "Zur Verwendung mit dem Format PAN-OS (Text): Zeichenfolge, die am Anfang der veröffentlichten Liste hinzugefügt wird. Unterstützt Zeilenumbruchzeichen (\\n).",
    "For use with PAN-OS (text) format - String to add to end of published list. Supports newline characters (\\n).":
      "Zur Verwendung mit dem Format PAN-OS (Text): Zeichenfolge, die am Ende der veröffentlichten Liste hinzugefügt wird. Unterstützt Zeilenumbruchzeichen (\\n).",
    "For use with Symantec ProxySG format - set the categories that should be listed in the output (comma separated list). If not set, lists all existing categories.":
      "Zur Verwendung mit dem Format Symantec ProxySG: Legen Sie die Kategorien fest, die in der Ausgabe aufgeführt werden sollen (kommagetrennte Liste). Wenn nicht festgelegt, werden alle vorhandenen Kategorien aufgeführt.",
    "For use with Symantec ProxySG format - set the default category for the output.":
      "Zur Verwendung mit dem Format Symantec ProxySG: Legen Sie die Standardkategorie für die Ausgabe fest.",
    "format. If set, will ignore URLs which are not compliant with PAN-OS URL format instead of being re-written.":
      "Format. Wenn festgelegt, werden URLs ignoriert, die nicht dem PAN-OS-URL-Format entsprechen, statt umgeschrieben zu werden.",
    "format. The categories which will be exported. Indicators not in these categories will be classified as the default category.":
      "Format. Die Kategorien, die exportiert werden. Indikatoren, die nicht in diesen Kategorien enthalten sind, werden der Standardkategorie zugeordnet.",
    "format. The default category for the exported indicators.":
      "Format. Die Standardkategorie der exportierten Indikatoren.",
    "format. The type indicated on the top of the exported list. Supports: string, applcontrol, dimension, category, ip, mediatype, number and regex.":
      "Format. Der Typ, der oben in der exportierten Liste angegeben wird. Unterstützt: string, applcontrol, dimension, category, ip, mediatype, number und regex.",
    "format. Whether to collapse IPs.":
      "Format. Gibt an, ob IPs zusammengefasst werden.",
    "Forward requests to long-running integrations":
      "Anfragen an langlaufende Integrationen weiterleiten",
    "Fully automated malware dynamic analysis sandboxing.":
      "Vollautomatisches Sandboxing für die dynamische Malware-Analyse.",
    "Generates a Palo Alto Networks WildFire PDF report. For internal use with the TIM Sample Analysis feature.":
      "Erzeugt einen Palo Alto Networks WildFire PDF-Bericht. Für die interne Verwendung mit dem Feature TIM Sample Analysis.",
    "Generic MCP Integration Description":
      "Beschreibung der Generic-MCP-Integration",
    "GenericAPICall Integration":
      "GenericAPICall-Integration",
    "Get actionable threat analysis and intelligence from HPE’s cloud-based, standards-compliant sharing platform":
      "Erhalten Sie umsetzbare Bedrohungsanalysen und Threat Intelligence von der cloudbasierten, standardkonformen Sharing-Plattform von HPE",
    "Get the download count for each release in a repository":
      "Download-Anzahl für jedes Release in einem Repository abrufen",
    "GitHub app installation ID":
      "GitHub-App-Installations-ID",
    "GitHub app integration ID":
      "GitHub-App-Integrations-ID",
    "Header example":
      "Header-Beispiel",
    "How often to refresh the list (e.g., less than 1 minute, 5 minutes, 12 hours, 7 days, 3 months, 1 year). For performance reasons, we do not recommend setting this value at less than 1 minute.":
      "Wie oft die Liste aktualisiert wird (z. B. weniger als 1 Minute, 5 minutes, 12 hours, 7 days, 3 months, 1 year). Aus Leistungsgründen empfehlen wir, diesen Wert nicht auf weniger als 1 Minute zu setzen.",
    "ID Column name - in case of fetching by 'ID and timestamp'":
      "Name der ID-Spalte – beim Abrufen nach 'ID and timestamp'",
    "If selected, CSV format appears in a textual webpage instead of initiating a file download.":
      "Wenn ausgewählt, wird das CSV-Format auf einer Textwebseite angezeigt, statt einen Dateidownload zu starten.",
    "If selected, it will force the list to contain only ASCII chars (non-ASCII URLs will be dropped).":
      "Wenn ausgewählt, enthält die Liste nur ASCII-Zeichen (Nicht-ASCII-URLs werden verworfen).",
    "If selected, ports in URLs are removed. For example, 'www.example.com:9999/path' becomes 'www.example.com/path'.":
      "Wenn ausgewählt, werden Ports aus URLs entfernt. Beispiel: 'www.example.com:9999/path' wird zu 'www.example.com/path'.",
    "If selected, strips the protocol from URLs (http/https).":
      "Wenn ausgewählt, wird das Protokoll (http/https) aus URLs entfernt.",
    "If selected, the comment \"# Empty list\" is added to an empty list.":
      "Wenn ausgewählt, wird einer leeren Liste der Kommentar \"# Empty list\" hinzugefügt.",
    "If selected, URLs are truncated to no more than 254 characters.":
      "Wenn ausgewählt, werden URLs auf maximal 254 Zeichen gekürzt.",
    "If set, will strip protocols off URLs.":
      "Wenn festgelegt, werden Protokolle aus URLs entfernt.",
    "If set. will strip ports off URLs, otherwise will ignore URLs with ports.":
      "Wenn festgelegt, werden Ports aus URLs entfernt; andernfalls werden URLs mit Ports ignoriert.",
    "If the app server running the container fails, the container should restart on a different app server.":
      "Fällt der App-Server aus, auf dem der Container läuft, wird der Container auf einem anderen App-Server neu gestartet.",
    "If the port value is empty, a default port will be selected according to the database type.":
      "Wenn der Portwert leer ist, wird je nach Datenbanktyp ein Standardport ausgewählt.",
    "If you have several Generic Export Indicators Service integration instances, make sure to use":
      "Wenn Sie mehrere Instanzen der Integration Generic Export Indicators Service haben, verwenden Sie unbedingt",
    "Important Notes:":
      "Wichtige Hinweise:",
    "In “route” listen mode, a request received by any of the app servers will be redirected to the one currently running the NGINX container.":
      "Im Listen-Modus „route“ wird eine Anfrage, die bei einem beliebigen App-Server eingeht, an den Server weitergeleitet, auf dem derzeit der NGINX-Container läuft.",
    "Incident Name":
      "Incident-Name",
    "Indicator Query":
      "Indikatorabfrage",
    "inline argument, the number of exported indicators is limited to 100,000 for performance reasons. To export more than 100,000 indicators, create a new integration instance with the desired Indicator Query and List Size.":
      "Beim Inline-Argument ist die Anzahl der exportierten Indikatoren aus Leistungsgründen auf 100.000 begrenzt. Um mehr als 100.000 Indikatoren zu exportieren, erstellen Sie eine neue Integrationsinstanz mit der gewünschten Indicator Query und List Size.",
    "inline argument, use separate EDL instances (one per query) and set a default query for each to improve performance.":
      "Verwenden Sie beim Inline-Argument separate EDL-Instanzen (eine pro Abfrage) und legen Sie für jede eine Standardabfrage fest, um die Leistung zu verbessern.",
    "Integrate with Okta's Identity Access Management service to execute CRUD operations to employee lifecycle processes.":
      "Integriert sich in den Identity-Access-Management-Dienst von Okta, um CRUD-Operationen für Mitarbeiter-Lebenszyklusprozesse auszuführen.",
    "Integrate with Oracle's services to execute CRUD and Group operations for employee lifecycle processes.":
      "Integriert sich in die Dienste von Oracle, um CRUD- und Gruppenoperationen für Mitarbeiter-Lebenszyklusprozesse auszuführen.",
    "Integrate with Palo Alto Networks Prisma AIRS for AI security capabilities including runtime scanning, red teaming, AI supply chain security, and DLP configuration.":
      "Integriert sich in Palo Alto Networks Prisma AIRS für KI-Sicherheitsfunktionen wie Laufzeit-Scans, Red Teaming, Sicherheit der KI-Lieferkette und DLP-Konfiguration.",
    "Integrate with Prisma Access to monitor the status of the Service, alert and take actions.":
      "Integriert sich in Prisma Access, um den Status des Dienstes zu überwachen, Warnungen auszulösen und Maßnahmen zu ergreifen.",
    "Integrate with Salesforce Fusion Identity Access Management service to execute CRUD (create, read, update, and delete) operations for employee lifecycle processes.":
      "Integriert sich in den Dienst Salesforce Fusion Identity Access Management, um CRUD-Operationen (Erstellen, Lesen, Aktualisieren und Löschen) für Mitarbeiter-Lebenszyklusprozesse auszuführen.",
    "Integrate with SAP's services to execute CRUD operations for employee lifecycle processes.":
      "Integriert sich in die Dienste von SAP, um CRUD-Operationen für Mitarbeiter-Lebenszyklusprozesse auszuführen.",
    "Integrate with ServiceNow's services to execute CRUD operations for employee lifecycle processes.":
      "Integriert sich in die Dienste von ServiceNow, um CRUD-Operationen für Mitarbeiter-Lebenszyklusprozesse auszuführen.",
    "Integrate with Slack's services to execute CRUD operations for employee lifecycle processes.":
      "Integriert sich in die Dienste von Slack, um CRUD-Operationen für Mitarbeiter-Lebenszyklusprozesse auszuführen.",
    "Integrates with the PingOne Management API to unlock, create, delete and update users.":
      "Integriert sich in die PingOne Management API, um Benutzer zu entsperren, zu erstellen, zu löschen und zu aktualisieren.",
    "Integration for sending notifications to a Microsoft Teams channel via a workflow of type `Post to a channel when a webhook request is received`.":
      "Integration zum Senden von Benachrichtigungen an einen Microsoft-Teams-Kanal über einen Workflow vom Typ `Post to a channel when a webhook request is received`.",
    "Integration with Okta's cloud-based identity management service.":
      "Integration mit dem cloudbasierten Identitätsverwaltungsdienst von Okta.",
    "Integration with Threatmon for vulnerability threat intelligence.":
      "Integration mit Threatmon für Threat Intelligence zu Schwachstellen.",
    "Internal page size used when querying Cortex for the indicators. Value can be up to 10,000 due to performance limitations.":
      "Interne Seitengröße für Abfragen von Indikatoren in Cortex. Der Wert kann aus Leistungsgründen bis zu 10.000 betragen.",
    "IP Collapsing":
      "IP-Zusammenfassung",
    "Is the API key used for each call provided in the header or as a parameter?":
      "Wird der für jeden Aufruf verwendete API-Schlüssel im Header oder als Parameter übergeben?",
    "Is the API key used for each call provided in the header or as a parameter? Default it set to false (key is provided as a parameter). Unchecking this will pass the API key as a call header":
      "Wird der für jeden Aufruf verwendete API-Schlüssel im Header oder als Parameter übergeben? Standardmäßig ist false festgelegt (der Schlüssel wird als Parameter übergeben). Wenn deaktiviert, wird der API-Schlüssel als Aufruf-Header übergeben",
    "IT service management.":
      "IT-Service-Management.",
    "List all issues":
      "Alle Vorgänge auflisten",
    "List Size":
      "Listengröße",
    "Listen Port":
      "Listen-Port",
    "Lists all of the security vulnerabilities for various products (OS,Applications) etc).":
      "Listet alle Sicherheitsschwachstellen verschiedener Produkte (Betriebssysteme, Anwendungen) usw. auf.",
    "Make sure to add as parameters the fetch parameter and the limit.":
      "Fügen Sie unbedingt den Abrufparameter und das Limit als Parameter hinzu.",
    "Make sure to add as parameters the fetch parameter.":
      "Fügen Sie unbedingt den Abrufparameter als Parameter hinzu.",
    "Make sure you run the":
      "Führen Sie unbedingt den Befehl",
    "Malware analysis sandboxing.":
      "Sandboxing für die Malware-Analyse.",
    "Manage Palo Alto Networks Firewall and Panorama. Use this pack to manage Prisma Access through Panorama. For more information, see the Panorama documentation.":
      "Verwalten Sie Palo Alto Networks Firewall und Panorama. Verwenden Sie dieses Paket, um Prisma Access über Panorama zu verwalten. Weitere Informationen finden Sie in der Panorama-Dokumentation.",
    "Manage teams and members in Microsoft Teams.":
      "Verwalten Sie Teams und Mitglieder in Microsoft Teams.",
    "Maximum number of items in the list.":
      "Maximale Anzahl von Elementen in der Liste.",
    "Maximum Size of CIDR Block (by mask bit)":
      "Maximale Größe des CIDR-Blocks (nach Masken-Bit)",
    "McAfee Gateway: Indicator List Type":
      "McAfee Gateway: Typ der Indikatorliste",
    "Microsoft Graph lets your app get authorized access to a user's Outlook mail data in a personal or organization account.":
      "Mit Microsoft Graph erhält Ihre App autorisierten Zugriff auf die Outlook-E-Mail-Daten eines Benutzers in einem persönlichen Konto oder einem Organisationskonto.",
    "Microsoft Graph lets your app get authorized access to a user's Teams app in a personal or organization account.":
      "Mit Microsoft Graph erhält Ihre App autorisierten Zugriff auf die Teams-App eines Benutzers in einem persönlichen Konto oder einem Organisationskonto.",
    "Modify Request Parameters Through the URL":
      "Anfrageparameter über die URL ändern",
    "Netcraft takedown, submission and screenshot management.":
      "Verwaltung von Netcraft-Takedowns, -Einreichungen und -Screenshots.",
    "No Authorization":
      "Keine Autorisierung",
    "Note: Other SQL databases are currently not supported by the fetch incidents.":
      "Hinweis: Andere SQL-Datenbanken werden beim Abrufen von Incidents derzeit nicht unterstützt.",
    "O365 Outlook Calendar enables you to create and manage different calendars and events according to your requirements.":
      "Mit O365 Outlook Calendar können Sie je nach Anforderungen verschiedene Kalender und Termine erstellen und verwalten.",
    "On-premise firewall by Sophos enables you to manage your firewall, respond to threats, and monitor what’s happening on your network.":
      "Mit der lokalen Firewall von Sophos können Sie Ihre Firewall verwalten, auf Bedrohungen reagieren und überwachen, was in Ihrem Netzwerk geschieht.",
    "Option to remove top level domainGlobs from the list. For example - *.com.":
      "Option zum Entfernen von Top-Level-domainGlobs aus der Liste. Zum Beispiel: *.com.",
    "Outbound Format":
      "Ausgabeformat",
    "Palo Alto Networks Best Practice Assessment (BPA) analyzes NGFW and Panorama configurations and compares them to the best practices.":
      "Palo Alto Networks Best Practice Assessment (BPA) analysiert NGFW- und Panorama-Konfigurationen und vergleicht sie mit den Best Practices.",
    "Palo Alto Networks Enterprise DLP discovers and protects company data across every data channel and repository. Integrated Enterprise DLP enables data protection and compliance everywhere without complexity.":
      "Palo Alto Networks Enterprise DLP erkennt und schützt Unternehmensdaten über alle Datenkanäle und Repositories hinweg. Das integrierte Enterprise DLP ermöglicht Datenschutz und Compliance überall – ohne Komplexität.",
    "PAN-OS: drop invalid URL entries":
      "PAN-OS: Ungültige URL-Einträge verwerfen",
    "parameter (default: 600 seconds). After the time to live expires, and upon execution of a new command, the database connection will close and a new connection will be created.":
      "Parameter (Standard: 600 Sekunden). Nach Ablauf der Lebensdauer wird beim Ausführen eines neuen Befehls die Datenbankverbindung geschlossen und eine neue Verbindung erstellt.",
    "parameter configured in the instance configuration.":
      "In der Instanzkonfiguration festgelegter Parameter.",
    "Parameterized example":
      "Parametrisiertes Beispiel",
    "Password/API Key":
      "Passwort/API-Schlüssel",
    "Prepend string to list":
      "Zeichenfolge der Liste voranstellen",
    "Prisma Cloud secures infrastructure, workloads and applications, across the entire cloud-native technology stack.":
      "Prisma Cloud schützt Infrastruktur, Workloads und Anwendungen über den gesamten Cloud-nativen Technologie-Stack hinweg.",
    "Proofpoint email security appliance.":
      "Proofpoint-E-Mail-Sicherheitsappliance.",
    "Protect your web application using Signal Sciences.":
      "Schützen Sie Ihre Webanwendung mit Signal Sciences.",
    "Provides commands for interaction with Prisma SASE API.":
      "Stellt Befehle für die Interaktion mit der Prisma-SASE-API bereit.",
    "Provides URL scanning and rewriting of inbound email messages in mail flow, and time-of-click verification of URLs and links in email messages and other locations.":
      "Bietet URL-Scans und das Umschreiben eingehender E-Mail-Nachrichten im Mailfluss sowie die Überprüfung von URLs und Links in E-Mail-Nachrichten und an anderen Orten beim Klicken.",
    "Queries examples":
      "Beispielabfragen",
    "Refresh Rate":
      "Aktualisierungsrate",
    "RelayShield real-time identity-compromise and agent-security threat intelligence.":
      "Echtzeit-Threat-Intelligence von RelayShield zu Identitätskompromittierung und Agentensicherheit.",
    "RelayShield real-time identity-compromise and agent-security threat intelligence. Implements the generic `domain`/`ip`/`email` reputation commands (auto-invoked by existing enrichment playbooks) plus RelayShield-specific commands for MCP server registry risk, certificate expiry, and supply-chain vendor risk. \"No known finding\" from any command means nothing was flagged in the sources RelayShield actually queried. It is deliberately never mapped to a \"Good\" DBotScore, since that would claim more certainty than the data supports. See the README's DBotScore section for the exact mapping.":
      "Echtzeit-Threat-Intelligence von RelayShield zu Identitätskompromittierung und Agentensicherheit. Implementiert die generischen Reputationsbefehle `domain`/`ip`/`email` (automatisch von vorhandenen Anreicherungs-Playbooks aufgerufen) sowie RelayShield-spezifische Befehle für das Risiko der MCP-Server-Registry, den Ablauf von Zertifikaten und das Risiko von Lieferkettenanbietern. „No known finding“ bei einem Befehl bedeutet, dass in den tatsächlich von RelayShield abgefragten Quellen nichts markiert wurde. Es wird bewusst nie einem DBotScore „Good“ zugeordnet, da dies mehr Gewissheit suggerieren würde, als die Daten hergeben. Die genaue Zuordnung finden Sie im Abschnitt DBotScore der README.",
    "Retrieve and monitor internal security findings for your organization, and critical findings across your supplier (third-party) portfolio, from the Panorays platform to automate incident response within Cortex.":
      "Rufen Sie interne Sicherheitsbefunde Ihrer Organisation und kritische Befunde Ihres Lieferanten-(Drittanbieter-)Portfolios von der Panorays-Plattform ab und überwachen Sie sie, um die Incident Response in Cortex zu automatisieren.",
    "RiskSense is a cloud-based platform that provides vulnerability management and prioritization to measure and control cybersecurity risk.":
      "RiskSense ist eine cloudbasierte Plattform für Schwachstellenmanagement und Priorisierung zur Messung und Kontrolle von Cybersicherheitsrisiken.",
    "Run queries on Splunk and fetch Notable Events (Splunk ES versions up to 8.2).":
      "Führen Sie Abfragen in Splunk aus und rufen Sie Notable Events ab (Splunk-ES-Versionen bis 8.2).",
    "Run queries on Splunk and fetch Splunk ES Findings and Investigations (Splunk ES 8.2+).":
      "Führen Sie Abfragen in Splunk aus und rufen Sie Splunk ES Findings und Investigations ab (Splunk ES 8.2 und höher).",
    "SaaS Security API is a cloud-based service that you can connect directly to your sanctioned SaaS applications using the cloud app’s API to provide data classification, sharing and permission visibility, and threat detection. This Content Pack provides insights into risks posed by data exposure and policy violations and enables you to use Cortex to effectively manage the incidents discovered by SaaS Security API.":
      "SaaS Security API ist ein cloudbasierter Dienst, den Sie über die API der Cloud-App direkt mit Ihren genehmigten SaaS-Anwendungen verbinden können, um Datenklassifizierung, Transparenz bei Freigaben und Berechtigungen sowie Bedrohungserkennung zu erhalten. Dieses Content Pack bietet Einblicke in Risiken durch Datenexposition und Richtlinienverstöße und ermöglicht es Ihnen, mit Cortex die von SaaS Security API erkannten Incidents effektiv zu verwalten.",
    "SailPoint IdentityIQ context pack enables XSOAR customers to utilize the deep, enriched contextual data in the SailPoint predictive identity platform to better drive identity-aware security practices.":
      "Das Kontextpaket SailPoint IdentityIQ ermöglicht XSOAR-Kunden, die detaillierten, angereicherten Kontextdaten der prädiktiven Identitätsplattform von SailPoint zu nutzen, um identitätsbewusste Sicherheitspraktiken besser voranzutreiben.",
    "Scan and govern AI models with Palo Alto Networks Prisma AIRS AI Supply Chain Security: model scans, evaluations, violations, labels, model groups, and security rules.":
      "Scannen und steuern Sie KI-Modelle mit Palo Alto Networks Prisma AIRS AI Supply Chain Security: Modell-Scans, Bewertungen, Verstöße, Labels, Modellgruppen und Sicherheitsregeln.",
    "Search for specific issues":
      "Nach bestimmten Vorgängen suchen",
    "Select an Issue or Pull requests to Fetch":
      "Wählen Sie einen Vorgang oder Pull Requests zum Abrufen aus",
    "Send messages and notifications to your Slack team.":
      "Senden Sie Nachrichten und Benachrichtigungen an Ihr Slack-Team.",
    "Separate pairs using":
      "Trennen Sie Paare mit",
    "Server Name":
      "Servername",
    "ServiceNow CMDB is a service‑centric foundation that proactively analyzes service‑impacting changes, identifies issues, and eliminates outages.":
      "ServiceNow CMDB ist eine serviceorientierte Grundlage, die serviceverändernde Änderungen proaktiv analysiert, Probleme identifiziert und Ausfälle beseitigt.",
    "Show CSV format as Text":
      "CSV-Format als Text anzeigen",
    "SIGNL4 offers critical alerting, incident response and service dispatching for operating critical infrastructure. It alerts you persistently via app push, SMS text, voice calls, and email including tracking, escalation, on-call duty scheduling and collaboration.":
      "SIGNL4 bietet kritische Alarmierung, Incident Response und Serviceeinsatzsteuerung für den Betrieb kritischer Infrastrukturen. Es alarmiert Sie hartnäckig per App-Push, SMS, Sprachanruf und E-Mail, einschließlich Nachverfolgung, Eskalation, Bereitschaftsplanung und Zusammenarbeit.",
    "Space-separated permission identifiers.":
      "Durch Leerzeichen getrennte Berechtigungskennungen.",
    "Specify arguments for the configuration of an instance name-value pairs, for example:":
      "Geben Sie Argumente für die Konfiguration einer Instanz als Name-Wert-Paare an, zum Beispiel:",
    "Specify the value to use when passing the API key as a header or parameter value.":
      "Geben Sie den Wert an, der beim Übergeben des API-Schlüssels als Header oder Parameterwert verwendet wird.",
    "Specify the value to use when passing the API key as a header or parameter value. e.g., X-PAN-KEY: API_KEY_HERE (X-PAN-KEY is the value specified in this field) - For a parameterized call, this would be appended to the URL as &X-PAN-KEY=KEY_HERE - - For a header-based call, this would appear in the header as 'X-PAN-KEY': KEY_HERE":
      "Geben Sie den Wert an, der beim Übergeben des API-Schlüssels als Header oder Parameterwert verwendet wird. z. B. X-PAN-KEY: API_KEY_HERE (X-PAN-KEY ist der in diesem Feld angegebene Wert) - Bei einem parametrisierten Aufruf würde dies als &X-PAN-KEY=KEY_HERE an die URL angehängt - - Bei einem Header-basierten Aufruf würde dies im Header als 'X-PAN-KEY': KEY_HERE erscheinen",
    "SQL DB":
      "SQL-Datenbank",
    "Strip ports from URLs":
      "Ports aus URLs entfernen",
    "Strip protocols from URLs":
      "Protokolle aus URLs entfernen",
    "Symantec Messaging Gateway protects against spam, malware, targeted attacks and provides advanced content filtering, data loss prevention, and email encryption.":
      "Symantec Messaging Gateway schützt vor Spam, Malware und gezielten Angriffen und bietet erweiterte Inhaltsfilterung, Verhinderung von Datenverlust und E-Mail-Verschlüsselung.",
    "Symantec ProxySG: Default Category":
      "Symantec ProxySG: Standardkategorie",
    "Symantec ProxySG: Listed Categories":
      "Symantec ProxySG: Aufgeführte Kategorien",
    "Tavily is a web service that provides real-time web search and retrieval capabilities through an API, enabling developers to fetch and extract relevant information from the internet in structured formats like JSON.":
      "Tavily ist ein Webdienst, der über eine API Websuche und Abruf in Echtzeit bereitstellt und es Entwicklern ermöglicht, relevante Informationen aus dem Internet in strukturierten Formaten wie JSON abzurufen und zu extrahieren.",
    "The fetch parameter should be the same as the column name, the limit is handled outside the query.":
      "Der Abrufparameter sollte mit dem Spaltennamen übereinstimmen; das Limit wird außerhalb der Abfrage behandelt.",
    "The following are procedure examples for different SQL databases:":
      "Im Folgenden finden Sie Beispielprozeduren für verschiedene SQL-Datenbanken:",
    "The format of the exported list.":
      "Das Format der exportierten Liste.",
    "The Generic Export Indicators Service is a long-running integration. For more information about long-running integrations, check out the":
      "Der Generic Export Indicators Service ist eine langlaufende Integration. Weitere Informationen zu langlaufenden Integrationen finden Sie unter",
    "The Generic SQL query or procedure to fetch according to.":
      "Die Generic-SQL-Abfrage oder -Prozedur, nach der abgerufen wird.",
    "The Generic SQL query/procedure.":
      "Die Generic-SQL-Abfrage/-Prozedur.",
    "The integration supports the following workflows:":
      "Die Integration unterstützt die folgenden Workflows:",
    "The maximum number of entries in the output. If no value is provided, will use the value specified in the":
      "Die maximale Anzahl von Einträgen in der Ausgabe. Wenn kein Wert angegeben ist, wird der Wert verwendet, der angegeben ist in",
    "The name of the requested repository":
      "Der Name des angeforderten Repositorys",
    "The name to use for the server in tool names. If not provided, the default name returned by the server will be used.":
      "Der Name, der für den Server in Tool-Namen verwendet wird. Wenn nicht angegeben, wird der vom Server zurückgegebene Standardname verwendet.",
    "The output format. Supports":
      "Das Ausgabeformat. Unterstützt",
    "The Prisma Cloud IAM API consists of a set of API endpoints that allow customers to perform CRUD operation on their user profiles.":
      "Die Prisma Cloud IAM API besteht aus einer Reihe von API-Endpunkten, mit denen Kunden CRUD-Operationen für ihre Benutzerprofile ausführen können.",
    "The procedure should contain conditions on the fetch parameter: (In the example provided, ‘timestamp’ is a fetch parameter)":
      "Die Prozedur sollte Bedingungen für den Abrufparameter enthalten (im angegebenen Beispiel ist ‘timestamp’ ein Abrufparameter)",
    "The procedure should contain conditions on the fetch parameter: (In the example provided, ‘ts’ is a fetch timestamp parameter)":
      "Die Prozedur sollte Bedingungen für den Abrufparameter enthalten (im angegebenen Beispiel ist ‘ts’ ein Abruf-Zeitstempelparameter)",
    "The query to run to update the indicators list. To view expected results, run the following command from the Cortex CLI `!findIndicators query=<your query>`. An empty value may load unwanted indicators. See integration docs for troubleshooting information.":
      "Die Abfrage, die zum Aktualisieren der Indikatorliste ausgeführt wird. Um die erwarteten Ergebnisse anzuzeigen, führen Sie in der Cortex CLI den folgenden Befehl aus: `!findIndicators query=<your query>`. Ein leerer Wert kann unerwünschte Indikatoren laden. Informationen zur Fehlerbehebung finden Sie in der Integrationsdokumentation.",
    "The query used to retrieve indicators from the system. If you are using this argument, no more than 100,000 can be exported through the EDL.":
      "Die Abfrage, mit der Indikatoren aus dem System abgerufen werden. Bei Verwendung dieses Arguments können über die EDL maximal 100.000 exportiert werden.",
    "The REST API URL":
      "Die REST-API-URL",
    "The SailPoint Identity Security platform can be configured either on-prem/single tenant SaaS, or multi-tenant. This package is intended to be used with the SaaS, multi-tenant solution, IdentityNow.":
      "Die SailPoint-Identity-Security-Plattform kann entweder lokal bzw. als SaaS mit einem einzelnen Tenant oder mandantenfähig (Multi-Tenant) konfiguriert werden. Dieses Paket ist für die Verwendung mit der SaaS-Multi-Tenant-Lösung IdentityNow vorgesehen.",
    "The starting entry index from which to export the indicators when index 0 is the first position.":
      "Der Index des Starteintrags, ab dem die Indikatoren exportiert werden, wobei Index 0 die erste Position ist.",
    "The ThreatX integration allows automated enforcement and intel gathering actions.":
      "Die ThreatX-Integration ermöglicht automatisierte Durchsetzungs- und Informationsgewinnungsaktionen.",
    "The URL for the OAuth 2.0 authorization endpoint. If not provided, the default will be the origin of the `Server URL` followed by `/oauth2/authorize`.":
      "Die URL des OAuth-2.0-Autorisierungsendpunkts. Wenn nicht angegeben, ist der Standard der Ursprung von `Server URL` gefolgt von `/oauth2/authorize`.",
    "The URL for the OAuth 2.0 authorization endpoint. If not provided, the default will be the origin of the `Server URL` followed by `/oauth2/authorize`. For example, if `Server URL` is `https://example.com/mcp`, the default `Authorization Endpoint` will be `https://example.com/oauth2/authorize`.":
      "Die URL des OAuth-2.0-Autorisierungsendpunkts. Wenn nicht angegeben, ist der Standard der Ursprung von `Server URL` gefolgt von `/oauth2/authorize`. Wenn `Server URL` beispielsweise `https://example.com/mcp` lautet, ist der Standardwert für `Authorization Endpoint` `https://example.com/oauth2/authorize`.",
    "The URL for the OAuth 2.0 token endpoint. If not provided, the default will be the origin of the `Server URL` followed by `/oauth2/token`.":
      "Die URL des OAuth-2.0-Token-Endpunkts. Wenn nicht angegeben, ist der Standard der Ursprung von `Server URL` gefolgt von `/oauth2/token`.",
    "The URL for the OAuth 2.0 token endpoint. If not provided, the default will be the origin of the `Server URL` followed by `/oauth2/token`. For example, if `Server URL` is `https://example.com/mcp`, the default `Token Endpoint` will be `https://example.com/oauth2/token`.":
      "Die URL des OAuth-2.0-Token-Endpunkts. Wenn nicht angegeben, ist der Standard der Ursprung von `Server URL` gefolgt von `/oauth2/token`. Wenn `Server URL` beispielsweise `https://example.com/mcp` lautet, ist der Standardwert für `Token Endpoint` `https://example.com/oauth2/token`.",
    "There are two options to fetch incidents, determined by the ‘Fetch by’ configuration:":
      "Es gibt zwei Möglichkeiten zum Abrufen von Incidents, abhängig von der Konfiguration ‘Fetch by’:",
    "There are two options to use to bind variables:":
      "Es gibt zwei Möglichkeiten, Variablen zu binden:",
    "This does not happen in “port” listen mode, that’s why “route” mode should be used.":
      "Dies tritt im Listen-Modus „port“ nicht auf, weshalb der Modus „route“ verwendet werden sollte.",
    "This integration allows the security operations center to create and manage incidents based on Vectra Events Detections.":
      "Diese Integration ermöglicht es dem Security Operations Center, Incidents auf Grundlage von Vectra Events Detections zu erstellen und zu verwalten.",
    "This integration allows you to connect securely with any MCP server and access its tools in real time.":
      "Mit dieser Integration können Sie sich sicher mit jedem MCP-Server verbinden und in Echtzeit auf dessen Tools zugreifen.",
    "This integration allows you to manage and interact with Microsoft security and compliance content search.":
      "Mit dieser Integration können Sie die Inhaltssuche für Microsoft-Sicherheit und -Compliance verwalten und mit ihr interagieren.",
    "This integration is configured automatically as part of the Okta Standard Connector. Do not configure this integration directly — set it up from the connector page instead.":
      "Diese Integration wird automatisch als Teil des Okta Standard Connector konfiguriert. Konfigurieren Sie diese Integration nicht direkt, sondern richten Sie sie auf der Connector-Seite ein.",
    "This integration provides a method for executing HTTP API calls to specific API endpoints used in one-off scenarios not covered by other XSOAR integrations. This integration supports unauthenticated and authenticated API calls over HTTPS, using API key and basic HTTP authentication methods.":
      "Diese Integration bietet eine Möglichkeit, HTTP-API-Aufrufe an bestimmte API-Endpunkte auszuführen, die in einmaligen Szenarien verwendet werden, die von anderen XSOAR-Integrationen nicht abgedeckt werden. Sie unterstützt nicht authentifizierte und authentifizierte API-Aufrufe über HTTPS mit API-Schlüssel und HTTP-Basisauthentifizierung.",
    "This integration transfers files between Cortex and a remote machine and executes commands on the remote machine.":
      "Diese Integration überträgt Dateien zwischen Cortex und einem Remotecomputer und führt Befehle auf dem Remotecomputer aus.",
    "This is a feed integration for extracting indicators from ServiceNow.":
      "Dies ist eine Feed-Integration zum Extrahieren von Indikatoren aus ServiceNow.",
    "This is the Orion Malware integration. Analyzes hash and files with static and dynamic analysis.":
      "Dies ist die Integration Orion Malware. Sie analysiert Hashes und Dateien mit statischer und dynamischer Analyse.",
    "To generate your personal access token, visit:":
      "Um Ihr persönliches Zugriffstoken zu generieren, rufen Sie Folgendes auf:",
    "TrendAI™ Apex One central automation to manage agents and User-Defined Suspicious Objects.":
      "Zentrale Automatisierung von TrendAI™ Apex One zur Verwaltung von Agenten und benutzerdefinierten verdächtigen Objekten.",
    "Troubleshoot":
      "Fehlerbehebung",
    "Truncate URL length":
      "URL-Länge kürzen",
    "Unit 42 Feed integration provides threat intelligence from Palo Alto Networks Unit 42 research team.":
      "Die Integration Unit 42 Feed liefert Threat Intelligence vom Unit-42-Forschungsteam von Palo Alto Networks.",
    "Update an issue":
      "Einen Vorgang aktualisieren",
    "Update list on demand only":
      "Liste nur bei Bedarf aktualisieren",
    "Use an SSL connection":
      "SSL-Verbindung verwenden",
    "Use both bind variable names and values, for example:":
      "Verwenden Sie sowohl Namen als auch Werte der Bind-Variablen, zum Beispiel:",
    "Use Connection Pooling":
      "Verbindungspooling verwenden",
    "Use LDAP (Teradata only)":
      "LDAP verwenden (nur Teradata)",
    "Use only bind variable values, for example:":
      "Verwenden Sie nur Werte der Bind-Variablen, zum Beispiel:",
    "Use the following arguments in the URL to change the request:":
      "Verwenden Sie die folgenden Argumente in der URL, um die Anfrage zu ändern:",
    "Use the Mimecast integration to manage email security, continuity, and archiving services.":
      "Verwenden Sie die Mimecast-Integration, um E-Mail-Sicherheit, -Kontinuität und -Archivierungsdienste zu verwalten.",
    "Use the O365 File Management (Onedrive/Sharepoint/Teams) integration to enable your app to get authorized access to files in OneDrive, SharePoint, and MS Teams across your entire organization. This integration requires admin consent.":
      "Verwenden Sie die Integration O365 File Management (OneDrive/SharePoint/Teams), damit Ihre App autorisierten Zugriff auf Dateien in OneDrive, SharePoint und MS Teams in Ihrer gesamten Organisation erhält. Diese Integration erfordert die Zustimmung eines Administrators.",
    "Use the Proofpoint Threat Response integration to orchestrate and automate incident response.":
      "Verwenden Sie die Integration Proofpoint Threat Response, um die Incident Response zu orchestrieren und zu automatisieren.",
    "Use The ServiceNow IT Service Management (ITSM) solution to modernize the way you manage and deliver services to your users.":
      "Verwenden Sie die Lösung ServiceNow IT Service Management (ITSM), um die Verwaltung und Bereitstellung von Services für Ihre Benutzer zu modernisieren.",
    "Use the SpecterOpsBloodHoundEnterprise integration to retrieve attack path findings from BloodHound Enterprise to streamline incident creation and investigation.":
      "Verwenden Sie die Integration SpecterOpsBloodHoundEnterprise, um Befunde zu Angriffspfaden aus BloodHound Enterprise abzurufen und die Incident-Erstellung und -Untersuchung zu optimieren.",
    "Use the Workday IAM Integration as part of the IAM premium pack.":
      "Verwenden Sie die Integration Workday IAM als Teil des IAM-Premium-Pakets.",
    "Use the Zoom integration to manage your Zoom users and meetings.":
      "Verwenden Sie die Zoom-Integration, um Ihre Zoom-Benutzer und -Meetings zu verwalten.",
    "Use this feed integration to fetch VirusTotal Livehunt notifications as indicators.":
      "Verwenden Sie diese Feed-Integration, um VirusTotal-Livehunt-Benachrichtigungen als Indikatoren abzurufen.",
    "Use this feed integration to fetch VirusTotal Retrohunt matches.":
      "Verwenden Sie diese Feed-Integration, um VirusTotal-Retrohunt-Treffer abzurufen.",
    "Use this integration to connect securely with a ServiceNow Model Context Protocol (MCP) server and access its tools in real time.":
      "Verwenden Sie diese Integration, um sich sicher mit einem ServiceNow-Model-Context-Protocol-(MCP-)Server zu verbinden und in Echtzeit auf dessen Tools zuzugreifen.",
    "Use TypeSafe Jev typed judgments and calibrated probabilities in Cortex XSIAM and XSOAR playbooks.":
      "Verwenden Sie die typisierten Beurteilungen und kalibrierten Wahrscheinlichkeiten von TypeSafe Jev in Cortex-XSIAM- und XSOAR-Playbooks.",
    "Username (Blank when using API key)":
      "Benutzername (leer lassen bei Verwendung eines API-Schlüssels)",
    "Username & Password":
      "Benutzername und Passwort",
    "Username of the repository owner, for example: github.com/repos/{_owner_}/{repo}/issues":
      "Benutzername des Repository-Eigentümers, zum Beispiel: github.com/repos/{_owner_}/{repo}/issues",
    "Uses the Sysdig agent to respond to malicious activity by triggering different actions at the host or container level, such as killing a container, quarantining a file, or performing a system capture.":
      "Verwendet den Sysdig-Agenten, um auf bösartige Aktivitäten zu reagieren, indem verschiedene Aktionen auf Host- oder Container-Ebene ausgelöst werden, z. B. das Beenden eines Containers, die Quarantäne einer Datei oder die Durchführung einer Systemerfassung.",
    "Validate Cortex ASM-discovered exposures with Tenzai's agentic penetration testing. Create a scan for an exposure, poll it to completion, and fetch the verdict and evidence back into the Cortex issue.":
      "Validieren Sie von Cortex ASM erkannte Expositionen mit den agentenbasierten Penetrationstests von Tenzai. Erstellen Sie einen Scan für eine Exposition, fragen Sie ihn bis zum Abschluss ab und rufen Sie das Verdikt und die Nachweise in das Cortex-Problem zurück.",
    "VMware Carbon Black App Control (formerly known as Carbon Black Enterprise Protection) is a next-generation endpoint threat prevention solution to deliver a portfolio of protection policies, real-time visibility across environments, and comprehensive compliance rule sets in a single platform. This integration only supports Carbon Black on-premise APIs.":
      "VMware Carbon Black App Control (früher Carbon Black Enterprise Protection) ist eine Endpunkt-Bedrohungsabwehrlösung der nächsten Generation, die ein Portfolio an Schutzrichtlinien, Echtzeit-Transparenz über alle Umgebungen hinweg und umfassende Compliance-Regelsätze in einer einzigen Plattform bietet. Diese Integration unterstützt nur lokale Carbon-Black-APIs.",
    "VMware Carbon Black EDR (formerly known as Carbon Black Response).":
      "VMware Carbon Black EDR (früher Carbon Black Response).",
    "Vulnerability management solution to help reduce threat exposure.":
      "Lösung für das Schwachstellenmanagement zur Verringerung der Bedrohungsexposition.",
    "When ‘Fetch by’ is ‘ID and timestamp’, handling the ID occurs internally and has no reference in the query.":
      "Wenn ‘Fetch by’ auf ‘ID and timestamp’ gesetzt ist, erfolgt die Behandlung der ID intern und wird in der Abfrage nicht referenziert.",
    "When ‘Fetch by’ is ‘Unique ascending ID’ or ‘Unique timestamp’, make sure to create the procedure with ‘>’ and not ‘>=’ in the condition on the timestamp/id field.":
      "Wenn ‘Fetch by’ auf ‘Unique ascending ID’ oder ‘Unique timestamp’ gesetzt ist, erstellen Sie die Prozedur unbedingt mit ‘>’ und nicht mit ‘>=’ in der Bedingung für das Zeitstempel-/ID-Feld.",
    "When enabled, the integration queries the server using full queries (overwrites the \"Exported Fields\" parameter). Advanced configuration to be used only if instructed by Cortex Support, or you have encountered log errors in the form of: msgpack: invalid code.":
      "Wenn aktiviert, fragt die Integration den Server mit vollständigen Abfragen ab (überschreibt den Parameter \"Exported Fields\"). Erweiterte Konfiguration, die nur auf Anweisung des Cortex-Supports oder bei Protokollfehlern der Form msgpack: invalid code. verwendet werden sollte.",
    "When Running in On-Demand Mode":
      "Bei Ausführung im On-Demand-Modus",
    "When set to true and the certificate and private key are provided, the HSTS header is added to all requests.":
      "Wenn auf true gesetzt und Zertifikat und privater Schlüssel angegeben sind, wird der HSTS-Header allen Anfragen hinzugefügt.",
    "When using more than one server in High Availability (HA) mode, the External Dynamic List (EDL) should be configured to listen on a route, not on a port.":
      "Bei Verwendung mehrerer Server im Hochverfügbarkeitsmodus (HA) sollte die External Dynamic List (EDL) so konfiguriert werden, dass sie auf einer Route und nicht auf einem Port lauscht.",
    "When using queries, there are two requirements, and the third one depends on the database.":
      "Bei der Verwendung von Abfragen gibt es zwei Anforderungen; eine dritte hängt von der Datenbank ab.",
    "Workday offers enterprise-level software solutions for financial management, human resources, and planning.":
      "Workday bietet Software-Lösungen auf Unternehmensebene für Finanzmanagement, Personalwesen und Planung.",
    "XQL Query Engine enables you to run XQL queries on your data sources.":
      "Mit der XQL Query Engine können Sie XQL-Abfragen für Ihre Datenquellen ausführen.",
    "XSOAR Indicator Page Size":
      "XSOAR-Indikator-Seitengröße",
    "You can access the External Dynamic List at the following url:":
      "Sie können auf die External Dynamic List unter der folgenden URL zugreifen:",
    "Zscaler Internet Access via ZIdentity OAuth 2.0. Provides URL/IP/domain classification, denylist and allowlist management, URL category management, sandbox reporting, user and group management, and IP destination group management using OAuth 2.0 client credentials authentication through ZIdentity.":
      "Zscaler Internet Access über ZIdentity OAuth 2.0. Bietet URL-/IP-/Domain-Klassifizierung, Verwaltung von Sperr- und Zulassungslisten, Verwaltung von URL-Kategorien, Sandbox-Berichte, Benutzer- und Gruppenverwaltung sowie die Verwaltung von IP-Zielgruppen mit OAuth-2.0-Client-Credentials-Authentifizierung über ZIdentity.",
    "Zscaler is a cloud security solution built for performance and flexible scalability. This integration enables you to manage URL and IP address allow lists and block lists, manage and update categories, get Sandbox reports, create, manage, and update IP destination groups and manually log in, log out, and activate changes in a Zscaler session.":
      "Zscaler ist eine Cloud-Sicherheitslösung, die auf Leistung und flexible Skalierbarkeit ausgelegt ist. Mit dieser Integration können Sie Zulassungs- und Sperrlisten für URLs und IP-Adressen verwalten, Kategorien verwalten und aktualisieren, Sandbox-Berichte abrufen, IP-Zielgruppen erstellen, verwalten und aktualisieren sowie sich in einer Zscaler-Sitzung manuell an- und abmelden und Änderungen aktivieren.",

    // --- Batch: Google Workspace / GitHub / GitLab / Terraform / Polygon integration docs and parameters (09:14 export) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    "A maximum of 200 emails per fetch (even if a higher number is configured). Default is 50.":
      "Maximal 200 E-Mails pro Abruf (auch wenn eine höhere Zahl konfiguriert ist). Der Standardwert ist 50.",
    "A maximum of 200 emails per fetch (even if a higher number is configured). The default is 50.":
      "Maximal 200 E-Mails pro Abruf (auch wenn eine höhere Zahl konfiguriert ist). Der Standardwert ist 50.",
    "A unique identifier of the customer's Google account.":
      "Eine eindeutige Kennung des Google-Kontos des Kunden.",
    "Add the following variables to the GitHub actions credential store:":
      "Fügen Sie dem GitHub-Actions-Anmeldeinformationsspeicher die folgenden Variablen hinzu:",
    "Admin Email":
      "Admin-E-Mail",
    "Advanced Configuration Parameters":
      "Erweiterte Konfigurationsparameter",
    "Allows you to specify the e-mail address from which to send e-mails from.":
      "Ermöglicht die Angabe der E-Mail-Adresse, von der aus E-Mails gesendet werden.",
    "API Key was generated in 2.":
      "Der API-Schlüssel wurde in 2 generiert.",
    "API to Authorize":
      "Zu autorisierende API",
    "Application Authorization Flow":
      "Anwendungs-Autorisierungsablauf",
    "Auth Code (run the !gmail-auth-link command to start the auth flow - see Help section)":
      "Authentifizierungscode (führen Sie den Befehl !gmail-auth-link aus, um den Authentifizierungsablauf zu starten – siehe Abschnitt „Hilfe“)",
    "Auth Redirect URI":
      "Authentifizierungs-Weiterleitungs-URI",
    "Authorize Application Security to access your GitHub (SaaS) account.":
      "Autorisieren Sie Application Security, auf Ihr GitHub-Konto (SaaS) zuzugreifen.",
    "Authorize Cortex GitHub App":
      "Cortex GitHub App autorisieren",
    "Automatically create user if not found in update and enable commands":
      "Benutzer automatisch erstellen, wenn er in den Befehlen „update“ und „enable“ nicht gefunden wird",
    "Before you begin, you'll need to add your API key and API ID to the GitHub Actions secrets.":
      "Bevor Sie beginnen, müssen Sie Ihren API-Schlüssel und Ihre API-ID zu den GitHub-Actions-Secrets hinzufügen.",
    "Before you begin, you'll need to add your API key and API ID to the GitHub Actions secrets. Please copy and use the variable names suggested below. If needed, you can generate a new token using the link below, copy and use the generated values as your secrets values.":
      "Bevor Sie beginnen, müssen Sie Ihren API-Schlüssel und Ihre API-ID zu den GitHub-Actions-Secrets hinzufügen. Kopieren Sie die unten vorgeschlagenen Variablennamen und verwenden Sie sie. Bei Bedarf können Sie über den untenstehenden Link ein neues Token generieren und die generierten Werte als Werte Ihrer Secrets kopieren und verwenden.",
    "Choose GitHub App Type":
      "GitHub-App-Typ auswählen",
    "Click the role you want to assign (the appropriate role).":
      "Klicken Sie auf die Rolle, die Sie zuweisen möchten (die entsprechende Rolle).",
    "Commands and its scopes":
      "Befehle und ihre Bereiche",
    "Configure a service account and retrieve its key in JSON format by following the steps mentioned here:":
      "Konfigurieren Sie ein Dienstkonto und rufen Sie dessen Schlüssel im JSON-Format ab, indem Sie die hier beschriebenen Schritte befolgen:",
    "Configure a service account for Google Sheets - (per project)":
      "Dienstkonto für Google Sheets konfigurieren – (pro Projekt)",
    "Configure an API account on G Suite Admin":
      "API-Konto in der G Suite-Administration konfigurieren",
    "create a Service Account file with a Private Key and authorize the API":
      "eine Dienstkontodatei mit einem privaten Schlüssel erstellen und die API autorisieren",
    "Create a Fine-grained Personal Access Token":
      "Fine-grained Personal Access Token erstellen",
    "Create an API token":
      "API-Token erstellen",
    "Customer ID":
      "Kunden-ID",
    "Cxxxxxxxx is your Immutable Google Apps ID (customerId).":
      "Cxxxxxxxx ist Ihre unveränderliche Google-Apps-ID (customerId).",
    "Default reports language":
      "Standardsprache für Berichte",
    "Default Search Scope":
      "Standard-Suchbereich",
    "Default to US (app.terraform.io)":
      "Standardmäßig US (app.terraform.io)",
    "Email - Associate to Google Drive":
      "E-Mail – Google Drive zuordnen",
    "Email of user":
      "E-Mail des Benutzers",
    "Email of user with admin capabilities":
      "E-Mail des Benutzers mit Administratorfunktionen",
    "Email of user with admin privileges":
      "E-Mail des Benutzers mit Administratorrechten",
    "Emails":
      "E-Mails",
    "Enable Google Workspace Log Collection":
      "Google-Workspace-Protokollerfassung aktivieren",
    "Enable Read-Only Tools":
      "Schreibgeschützte Tools aktivieren",
    "Enabled Toolsets":
      "Aktivierte Toolsets",
    "Events query (e.g. \"from:Demisto\")":
      "Ereignisabfrage (z. B. \"from:Demisto\")",
    "Events query (e.g., \"from:example@demisto.com\")":
      "Ereignisabfrage (z. B. \"from:example@demisto.com\")",
    "Events search query":
      "Ereignissuchabfrage",
    "Events user key":
      "Benutzerschlüssel für Ereignisse",
    "Events user key (e.g. example@demisto.com)":
      "Benutzerschlüssel für Ereignisse (z. B. example@demisto.com)",
    "Existing Customer Owned GitHub App":
      "Vorhandene kundeneigene GitHub-App",
    "First fetch timestamp, in days.":
      "Zeitstempel des ersten Abrufs in Tagen.",
    "Follow the steps here to create such a private key and authorize the API for usage:":
      "Befolgen Sie diese Schritte, um einen solchen privaten Schlüssel zu erstellen und die API für die Verwendung zu autorisieren:",
    "For detailed documentation on available toolsets, refer to:":
      "Ausführliche Dokumentation zu den verfügbaren Toolsets finden Sie unter:",
    "For the email user param, please choose a user with admin permissions and make sure that you follow the steps to perform Google Apps Domain-Wide Delegation of Authority.":
      "Wählen Sie für den Parameter „E-Mail-Benutzer“ einen Benutzer mit Administratorberechtigungen aus und stellen Sie sicher, dass Sie die Schritte zur Google Apps Domain-Wide Delegation of Authority durchführen.",
    "For the email user parameter, select a user with admin permissions and make sure that you follow the steps to perform Google Apps Domain-Wide Delegation of Authority.":
      "Wählen Sie für den Parameter „E-Mail-Benutzer“ einen Benutzer mit Administratorberechtigungen aus und stellen Sie sicher, dass Sie die Schritte zur Google Apps Domain-Wide Delegation of Authority durchführen.",
    "Function":
      "Funktion",
    "Go to Admin roles.":
      "Rufen Sie Admin roles auf.",
    "Google documentation":
      "Google-Dokumentation",
    "Google Sheets Integration":
      "Google-Sheets-Integration",
    "Google Sheets is a spreadsheet program that is part of the free cloud-based Google Docs Editors suite offered by Google.":
      "Google Sheets ist ein Tabellenkalkulationsprogramm, das Teil der kostenlosen cloudbasierten Suite Google Docs Editors von Google ist.",
    "Google’s API Documentation":
      "Google-API-Dokumentation",
    "Grant the Compute Admin permission to the Service Account to enable the Service Account to perform certain Google Cloud API commands.":
      "Erteilen Sie dem Dienstkonto die Berechtigung Compute Admin, damit es bestimmte Google-Cloud-API-Befehle ausführen kann.",
    "If a non-admin user is the user for the integration’s parameter, the test button will fail on a 403 error.":
      "Wenn der Benutzer im Parameter der Integration kein Administrator ist, schlägt die Schaltfläche „Test“ mit einem 403-Fehler fehl.",
    "If no toolsets are selected, GitHub's default toolsets 'context', 'repos', 'issues', 'pull_requests', and 'users' will be enabled.":
      "Wenn keine Toolsets ausgewählt sind, werden die Standard-Toolsets von GitHub 'context', 'repos', 'issues', 'pull_requests' und 'users' aktiviert.",
    "Immutable Google Apps ID":
      "Unveränderliche Google-Apps-ID",
    "In Cortex, configure an instance of the Google Cloud Compute integration. For the Service Account Private Key parameter, add the Service Account Private Key file contents (JSON).":
      "Konfigurieren Sie in Cortex eine Instanz der Integration Google Cloud Compute. Fügen Sie für den Parameter Service Account Private Key den Inhalt (JSON) der privaten Schlüsseldatei des Dienstkontos hinzu.",
    "In order to fetch user roles, please authrize this api too:":
      "Um Benutzerrollen abzurufen, autorisieren Sie bitte auch diese API:",
    "In order to revoke user roles, please authrize this api too:":
      "Um Benutzerrollen zu widerrufen, autorisieren Sie bitte auch diese API:",
    "In order to revoke/fetch user role, you will need the Immutable Google Apps ID param.":
      "Zum Widerrufen oder Abrufen von Benutzerrollen benötigen Sie den Parameter Immutable Google Apps ID.",
    "In order to search user mailboxes, please authrize this api too:":
      "Um Benutzerpostfächer zu durchsuchen, autorisieren Sie bitte auch diese API:",
    "In order to to fetch mobile info, please authrize this api too:":
      "Um Mobilgeräteinformationen abzurufen, autorisieren Sie bitte auch diese API:",
    "In order to to fetch user security tokens, please authrize this api too:":
      "Um Sicherheitstoken von Benutzern abzurufen, autorisieren Sie bitte auch diese API:",
    "In order to to preform actions on chorme devices, please authrize this api too:":
      "Um Aktionen auf Chrome-Geräten auszuführen, autorisieren Sie bitte auch diese API:",
    "In order to to preform actions on mobile devices, please authrize this api too:":
      "Um Aktionen auf Mobilgeräten auszuführen, autorisieren Sie bitte auch diese API:",
    "It is necessary to authrize the next API’s for that service account:":
      "Für dieses Dienstkonto müssen die folgenden APIs autorisiert werden:",
    "Mailbox actions do not require admin previleges.":
      "Postfachaktionen erfordern keine Administratorrechte.",
    "Maximum number of emails to pull per fetch":
      "Maximale Anzahl der pro Abruf zu übernehmenden E-Mails",
    "Must be a valid URL":
      "Muss eine gültige URL sein",
    "Navigate to Profile and click Generate auth token.":
      "Rufen Sie Profile auf und klicken Sie auf Generate auth token.",
    "Open THF Huntbox web interface. (It may be like https://huntbox.group-ib.com)":
      "Öffnen Sie die THF-Huntbox-Weboberfläche (sie kann z. B. https://huntbox.group-ib.com lauten).",
    "Organization domain URL":
      "URL der Organisationsdomäne",
    "Please follow the documentation below for step by step guide on how to onboard your GitLab instance":
      "Eine Schritt-für-Schritt-Anleitung zum Onboarding Ihrer GitLab-Instanz finden Sie in der folgenden Dokumentation",
    "Precedence of this will be admin_email in the command argument > admin email in the integration configuration > admin role provided to the service account.":
      "Die Rangfolge lautet: admin_email im Befehlsargument > Admin-E-Mail in der Integrationskonfiguration > dem Dienstkonto zugewiesene Administratorrolle.",
    "Provide at least one of the scopes mentioned for each command.":
      "Geben Sie für jeden Befehl mindestens einen der genannten Bereiche an.",
    "Raise error an empty result":
      "Fehler bei leerem Ergebnis auslösen",
    "Register":
      "Registrieren",
    "Review the requested permissions and select repository access for Application Security:":
      "Prüfen Sie die angeforderten Berechtigungen und wählen Sie den Repository-Zugriff für Application Security aus:",
    "Revoke/Fetch User Roles":
      "Benutzerrollen widerrufen/abrufen",
    "See the Help tab for details on the Immutable Google Apps ID.":
      "Details zur Immutable Google Apps ID finden Sie auf der Registerkarte „Hilfe“.",
    "Select a GitHub organization where you want to install Application Security.":
      "Wählen Sie eine GitHub-Organisation aus, in der Sie Application Security installieren möchten.",
    "Select Organization":
      "Organisation auswählen",
    "Select Workspaces":
      "Workspaces auswählen",
    "Send as":
      "Senden als",
    "Server URL (e.g., https://huntbox.group-ib.com)":
      "Server-URL (z. B. https://huntbox.group-ib.com)",
    "Service Account Key":
      "Dienstkontoschlüssel",
    "Service account private key file contents (JSON)":
      "Inhalt der privaten Schlüsseldatei des Dienstkontos (JSON)",
    "Service Account Private Key file contents (JSON)":
      "Inhalt der privaten Schlüsseldatei des Dienstkontos (JSON)",
    "Terraform Region":
      "Terraform-Region",
    "the Integration Documentation":
      "Integrationsdokumentation",
    "The Personal Access Token is used to authenticate requests to the GitLab REST API. It must have the required permissions to access your organization's configuration.":
      "Das Personal Access Token wird zur Authentifizierung von Anfragen an die GitLab-REST-API verwendet. Es muss über die erforderlichen Berechtigungen für den Zugriff auf die Konfiguration Ihrer Organisation verfügen.",
    "The required admin permissions are only used for user actions (i.e., creating users, getting user informations, deleting users):":
      "Die erforderlichen Administratorberechtigungen werden nur für Benutzeraktionen verwendet (d. h. Benutzer erstellen, Benutzerinformationen abrufen, Benutzer löschen):",
    "The scope for this API":
      "Der Bereich für diese API",
    "There you will see URLs in the format:":
      "Dort sehen Sie URLs im folgenden Format:",
    "This section explains how to configure the instance of Polygon in Cortex.":
      "In diesem Abschnitt wird erläutert, wie Sie die Instanz von Polygon in Cortex konfigurieren.",
    "To allow Cortex to access Gmail, you will need to create an OAuth2 App and approve the authorization flow. Please see the full documentation at:":
      "Damit Cortex auf Gmail zugreifen kann, müssen Sie eine OAuth2-App erstellen und den Autorisierungsablauf genehmigen. Die vollständige Dokumentation finden Sie unter:",
    "To create a new token:":
      "So erstellen Sie ein neues Token:",
    "To get an Immutable Google Apps ID (or customerId):":
      "So erhalten Sie eine Immutable Google Apps ID (oder customerId):",
    "Token":
      "Token",
    "Transporter Connection":
      "Transporter-Verbindung",
    "Use the Google Maps Geocoding API.":
      "Verwendet die Google Maps Geocoding API.",
    "Use this integration to create, get, modify, and format spreadsheets.":
      "Verwenden Sie diese Integration, um Tabellen zu erstellen, abzurufen, zu ändern und zu formatieren.",
    "Use this to specify the email account to search for messages with the search query. By default, the integration uses the email address specified in the credentials.":
      "Geben Sie hiermit das E-Mail-Konto an, in dem mit der Suchabfrage nach Nachrichten gesucht wird. Standardmäßig verwendet die Integration die in den Anmeldeinformationen angegebene E-Mail-Adresse.",
    "Used for searching emails in the inbox. The query language follows the Gmail query specification. For example, \"from:example@demisto.com is:unread\".":
      "Wird zum Durchsuchen von E-Mails im Posteingang verwendet. Die Abfragesprache folgt der Gmail-Abfragespezifikation. Zum Beispiel \"from:example@demisto.com is:unread\".",
    "User or Team Token":
      "Benutzer- oder Team-Token",
    "user settings":
      "Benutzereinstellungen",
    "User's Service Account JSON":
      "JSON des Dienstkontos des Benutzers",
    "When enabled, limits tools to read-only operations preventing any write/modification actions.":
      "Wenn aktiviert, werden Tools auf schreibgeschützte Vorgänge beschränkt, sodass keine Schreib- oder Änderungsaktionen möglich sind.",
    "You must be signed in as a super administrator for this task.":
      "Für diese Aufgabe müssen Sie als Super-Administrator angemeldet sein.",
    "You will see there URLs in the format:":
      "Dort sehen Sie URLs im folgenden Format:",
    "Your private GitLab instance URL. For example, https://gitlab.example.com.":
      "Die URL Ihrer privaten GitLab-Instanz. Zum Beispiel https://gitlab.example.com.",
    "Your server URL is the same as your Huntbox web interface URL.":
      "Ihre Server-URL ist mit der URL Ihrer Huntbox-Weboberfläche identisch.",

    // --- Batch: Integration docs, parameter labels and tooltips for many integrations (12:04 export) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    "(default) — Auto-detect based on the platform.":
      "(Standard) — Automatische Erkennung basierend auf der Plattform.",
    "(e.g., https://192.168.0.1)":
      "(z. B. https://192.168.0.1)",
    "(For Cortex) For use with HTTPS - the certificate that the service should use. (For Cortex and Cortex XSIAM) Custom certificates are supported only using engine.":
      "(Für Cortex) Zur Verwendung mit HTTPS – das Zertifikat, das der Dienst verwenden soll. (Für Cortex und Cortex XSIAM) Benutzerdefinierte Zertifikate werden nur über eine Engine unterstützt.",
    "(For Cortex) For use with HTTPS - the private key that the service should use. (For Cortex and Cortex XSIAM) When using an engine, configure a private API key. Not supported on the Cortex or Cortex XSIAM server.":
      "(Für Cortex) Zur Verwendung mit HTTPS – der private Schlüssel, den der Dienst verwenden soll. (Für Cortex und Cortex XSIAM) Konfigurieren Sie bei Verwendung einer Engine einen privaten API-Schlüssel. Wird auf dem Cortex- oder Cortex XSIAM-Server nicht unterstützt.",
    "(for runtime scanning operations only)":
      "(nur für Runtime-Scan-Vorgänge)",
    "(if not already enabled)":
      "(falls noch nicht aktiviert)",
    "(OAuth2 credentials for the management API)":
      "(OAuth2-Anmeldedaten für die Management-API)",
    "(optional) Configure a classifier and a mapper":
      "(optional) Konfigurieren Sie einen Klassifizierer und einen Mapper",
    "(Optional) Create custom fields.":
      "(Optional) Erstellen Sie benutzerdefinierte Felder.",
    "2FA Token":
      "2FA-Token",
    "A comma-separated list of Application IDs. Run the ***saas-security-get-apps*** command to return the **Application ID**, **Name**, and **Type** for all applications.":
      "Eine durch Kommas getrennte Liste von Anwendungs-IDs. Führen Sie den Befehl ***saas-security-get-apps*** aus, um **Application ID**, **Name** und **Type** für alle Anwendungen zurückzugeben.",
    "A comma-separated list of ciphers to use. If none of the specified ciphers are agreed to by the server, an error message specifying the supported ciphers is returned.":
      "Eine durch Kommas getrennte Liste der zu verwendenden Chiffren. Wenn der Server keine der angegebenen Chiffren akzeptiert, wird eine Fehlermeldung mit den unterstützten Chiffren zurückgegeben.",
    "A comma-separated list of data profile names to request an exemption. Use \"*\" to allow everything.":
      "Eine durch Kommas getrennte Liste von Datenprofilnamen, für die eine Ausnahme beantragt werden soll. Verwenden Sie „*“, um alles zuzulassen.",
    "A comma-separated list of incident types to fetch from iZOOlogic.":
      "Eine durch Kommas getrennte Liste der Incident-Typen, die von iZOOlogic abgerufen werden sollen.",
    "A comma-separated list of key algorithms to use. If none of the specified key algorithms are agreed to by the server, an error message specifying the supported key algorithms is returned.":
      "Eine durch Kommas getrennte Liste der zu verwendenden Schlüsselalgorithmen. Wenn der Server keinen der angegebenen Schlüsselalgorithmen akzeptiert, wird eine Fehlermeldung mit den unterstützten Schlüsselalgorithmen zurückgegeben.",
    "A comma-separated list of Splunk status labels to mirror as closed Cortex incident (Example: Resolved,False-Positive).":
      "Eine durch Kommas getrennte Liste von Splunk-Statuslabels, die als geschlossener Cortex-Incident gespiegelt werden sollen (Beispiel: Resolved,False-Positive).",
    "A command fails with a quota or payment error.":
      "Ein Befehl schlägt mit einem Kontingent- oder Zahlungsfehler fehl.",
    "A command returns “no known finding” for an indicator you expect to be flagged.":
      "Ein Befehl gibt „no known finding“ für einen Indikator zurück, bei dem eine Markierung zu erwarten ist.",
    "A CSV list of broker URLs in the format: [ssl://]<hostname>[:port]) Get the hostname and port from the `brokerlist.properties` file (in instructions). The broker should be reachable from Demisto server.":
      "Eine CSV-Liste von Broker-URLs im Format: [ssl://]<hostname>[:port]). Ermitteln Sie Hostname und Port aus der Datei `brokerlist.properties` (in den Anweisungen). Der Broker muss vom Demisto-Server aus erreichbar sein.",
    "A CSV of language codes of the language to use for OCR (leave empty to use defaults).":
      "CSV der Sprachcodes für die OCR-Sprache (leer lassen, um die Standardwerte zu verwenden).",
    "A space-separated list of scopes that you want to consent to.":
      "Eine durch Leerzeichen getrennte Liste der Scopes, denen Sie zustimmen möchten.",
    "A Tenzai license is required to use this integration.":
      "Zur Verwendung dieser Integration ist eine Tenzai-Lizenz erforderlich.",
    "A valid Magnet Automate instance.":
      "Eine gültige Magnet Automate-Instanz.",
    "About team member product roles and access":
      "Informationen zu Produktrollen und Zugriff von Teammitgliedern",
    "Access ID - can be created in Sumo Logic under \"Settings\"":
      "Zugriffs-ID – kann in Sumo Logic unter „Settings“ erstellt werden",
    "Access key - can be created in Sumo Logic under \"Settings\"":
      "Zugriffsschlüssel – kann in Sumo Logic unter „Settings“ erstellt werden",
    "Access the Panorama UI.":
      "Rufen Sie die Panorama-Benutzeroberfläche auf.",
    "Access to Threatmon’s external API endpoints.":
      "Zugriff auf die externen API-Endpunkte von Threatmon.",
    "Access tokens are cached in the integration context and automatically refreshed when they expire.":
      "Zugriffstoken werden im Integrationskontext zwischengespeichert und beim Ablauf automatisch aktualisiert.",
    "Access Your API Key":
      "Zugriff auf Ihren API-Schlüssel",
    "Access Your Kenna API Key":
      "Zugriff auf Ihren Kenna-API-Schlüssel",
    "Access your VMRay environment.":
      "Rufen Sie Ihre VMRay-Umgebung auf.",
    "Account ID (OAuth)":
      "Konto-ID (OAuth)",
    "Account identifier":
      "Konto-Kennung",
    "Add a incident name to be used for the created incident (if a mapper is not used)":
      "Fügen Sie einen Incident-Namen hinzu, der für den erstellten Incident verwendet wird (wenn kein Mapper verwendet wird)",
    "Add an instance of the integration and add the Workflow URL for the Teams channel.":
      "Fügen Sie eine Instanz der Integration hinzu und geben Sie die Workflow-URL für den Teams-Kanal an.",
    "Add and map the custom field to the necessary mapper(s).":
      "Fügen Sie das benutzerdefinierte Feld hinzu und ordnen Sie es den erforderlichen Mappern zu.",
    "Add Custom Indicator Fields":
      "Benutzerdefinierte Indikatorfelder hinzufügen",
    "Add or create a service account with the proper privileges.":
      "Fügen Sie ein Dienstkonto mit den entsprechenden Berechtigungen hinzu oder erstellen Sie eines.",
    "Add or remove Chrome options used to rasterize. Use for advanced troubleshooting. See Help.":
      "Fügen Sie Chrome-Optionen für die Rasterisierung hinzu oder entfernen Sie sie. Verwenden Sie dies für die erweiterte Fehlerbehebung. Siehe Hilfe.",
    "Add relevant scopes.":
      "Fügen Sie die relevanten Scopes hinzu.",
    "Add the Demisto Bot to a Team":
      "Fügen Sie den Demisto Bot zu einem Team hinzu",
    "Add the integration instance in Cortex":
      "Fügen Sie die Integrationsinstanz in Cortex hinzu",
    "Add this tag to an entry to mirror it as a comment from Splunk.":
      "Fügen Sie diesen Tag zu einem Eintrag hinzu, um ihn als Kommentar von Splunk zu spiegeln.",
    "Add this tag to an entry to mirror it as a comment to Splunk.":
      "Fügen Sie diesen Tag zu einem Eintrag hinzu, um ihn als Kommentar nach Splunk zu spiegeln.",
    "Additional connection parameters":
      "Zusätzliche Verbindungsparameter",
    "Additional malicious verdicts":
      "Zusätzliche Malicious-Urteile",
    "Additional Password":
      "Zusätzliches Passwort",
    "Additional Resources":
      "Weitere Ressourcen",
    "Additional Splunk status labels to close on mirror (Incoming Mirroring)":
      "Zusätzliche Splunk-Statuslabels, die beim Spiegeln geschlossen werden (eingehende Spiegelung)",
    "Address Type":
      "Adresstyp",
    "After adding the Cortex app, you will get an Access Token and Bot Token, which should be inserted in the integration instance configuration’s corresponding fields.":
      "Nachdem Sie die Cortex-App hinzugefügt haben, erhalten Sie ein Zugriffstoken und ein Bot-Token, die in die entsprechenden Felder der Konfiguration der Integrationsinstanz eingetragen werden müssen.",
    "After authorizing the Cortex app, you will get an ID, Token, and Key which need to be added to the relevant integration instance settings fields.":
      "Nachdem Sie die Cortex-App autorisiert haben, erhalten Sie eine ID, ein Token und einen Schlüssel, die in die entsprechenden Felder der Integrationsinstanz-Einstellungen eingetragen werden müssen.",
    "After authorizing the Cortex app, you will get an ID, Token, and Key which should be inserted in the relevant integration instance settings fields.":
      "Nachdem Sie die Cortex-App autorisiert haben, erhalten Sie eine ID, ein Token und einen Schlüssel, die in die entsprechenden Felder der Integrationsinstanz-Einstellungen eingetragen werden müssen.",
    "After you configure an integration instance, the first fetch will sychronize all Workday users (employees) in XSOAR by creating a User Profile indicator for each employee. The User Profile indicators store all employee profiles data, such as the employee’s name, street address, phone number, email address, etc.":
      "Nachdem Sie eine Integrationsinstanz konfiguriert haben, synchronisiert der erste Abruf alle Workday-Benutzer (Mitarbeiter) in XSOAR, indem für jeden Mitarbeiter ein User Profile-Indikator erstellt wird. Die User Profile-Indikatoren speichern alle Mitarbeiterprofildaten, z. B. Name, Straßenadresse, Telefonnummer, E-Mail-Adresse usw.",
    "After you successfully execute a command, a DBot message appears in the War Room with the command details.":
      "Nachdem Sie einen Befehl erfolgreich ausgeführt haben, wird in der War Room eine DBot-Nachricht mit den Befehlsdetails angezeigt.",
    "AIOps integration":
      "AIOps-Integration",
    "Algorithm to sign generated JWT tokens with. Doesn't affect integration's functionality. Required and used if OAuth 2.0 is used for authentication. See detailed instructions on the 'Help' tab.":
      "Algorithmus zum Signieren der generierten JWT-Token. Beeinflusst die Funktionalität der Integration nicht. Erforderlich und wird verwendet, wenn OAuth 2.0 für die Authentifizierung verwendet wird. Detaillierte Anweisungen finden Sie auf der Registerkarte 'Help'.",
    "An administrator must have a role that includes access to a specific REST API.":
      "Ein Administrator muss über eine Rolle verfügen, die Zugriff auf eine bestimmte REST-API umfasst.",
    "An API key generated from the Magnet Automate interface.":
      "Ein über die Magnet Automate-Oberfläche generierter API-Schlüssel.",
    "Analyze files and URLs using the SecneurX Analysis for accurate threat intelligence and high-quality IOCs.":
      "Analysieren Sie Dateien und URLs mit SecneurX Analysis, um präzise Bedrohungsinformationen und hochwertige IOCs zu erhalten.",
    "Analyze retro hunts, read live hunt notification,s and download files from VirusTotal.":
      "Analysieren Sie Retro Hunts, lesen Sie Live-Hunt-Benachrichtigungen und laden Sie Dateien von VirusTotal herunter.",
    "Another point to note is that Splunk’s searches are based on the occurrence time behind the scenes. Meaning, Splunk itself uses occurrence time as its determining factor for bucket division and search.":
      "Ein weiterer zu beachtender Punkt: Die Suchen von Splunk basieren im Hintergrund auf der Eintrittszeit. Das bedeutet, dass Splunk selbst die Eintrittszeit als maßgeblichen Faktor für die Bucket-Aufteilung und die Suche verwendet.",
    "Any tags removed from the Vectra entity will not be removed in the XSOAR incident, as XSOAR doesn’t allow the removal of the tags field via the backend. However, tags removed from the XSOAR incident UI will be removed from the Vectra entity.":
      "Tags, die aus der Vectra-Entität entfernt werden, werden nicht aus dem XSOAR-Incident entfernt, da XSOAR das Entfernen des Tags-Felds über das Backend nicht zulässt. Tags, die über die XSOAR-Incident-Benutzeroberfläche entfernt werden, werden jedoch aus der Vectra-Entität entfernt.",
    "API 1.0 Authentication":
      "API-1.0-Authentifizierung",
    "API 2.0 Authentication":
      "API-2.0-Authentifizierung",
    "API Access":
      "API-Zugriff",
    "API Client ID and API Client Secret":
      "API-Client-ID und API-Client-Secret",
    "API connection":
      "API-Verbindung",
    "API Host":
      "API-Host",
    "API Key (CB Defense)":
      "API-Schlüssel (CB Defense)",
    "API Key (Deprecated)":
      "API-Schlüssel (veraltet)",
    "API Key (JWT-Deprecated)":
      "API-Schlüssel (JWT-veraltet)",
    "API Key (Recommended)":
      "API-Schlüssel (empfohlen)",
    "API key and API token are generate by Lastline and given at the subscription time.":
      "API-Schlüssel und API-Token werden von Lastline generiert und beim Abschluss des Abonnements bereitgestellt.",
    "API Key Auth":
      "API-Schlüssel-Authentifizierung",
    "API Key Auth (http_api_key)":
      "API-Schlüssel-Authentifizierung (http_api_key)",
    "API Key for accessing Lastline APIs":
      "API-Schlüssel für den Zugriff auf die Lastline-APIs",
    "API Key Secret":
      "API-Schlüssel-Secret",
    "API Key Type":
      "API-Schlüsseltyp",
    "API Permissions in Microsoft Graph":
      "API-Berechtigungen in Microsoft Graph",
    "API Port":
      "API-Port",
    "API Port (e.g 443)":
      "API-Port (z. B. 443)",
    "API Secret (JWT-Deprecated)":
      "API-Secret (JWT-veraltet)",
    "API Token (CB Response)":
      "API-Token (CB Response)",
    "API Token (see detailed instructions)":
      "API-Token (siehe detaillierte Anweisungen)",
    "API Token (see Detailed Instructions)":
      "API-Token (siehe detaillierte Anweisungen)",
    "API Token for accessing Lastline APIs":
      "API-Token für den Zugriff auf die Lastline-APIs",
    "API tokens have the same permissions as the user who creates them, and if the permissions of a user change, so do the permissions of the API token.":
      "API-Token haben dieselben Berechtigungen wie der Benutzer, der sie erstellt. Wenn sich die Berechtigungen eines Benutzers ändern, ändern sich auch die Berechtigungen des API-Tokens.",
    "API version of QRadar (e.g., '12.0'). Minimum API version is 10.1. Since QRadar API v19, The timestamp fields should be provided as milliseconds epoch format instead of seconds.":
      "API-Version von QRadar (z. B. '12.0'). Die Mindest-API-Version ist 10.1. Seit QRadar API v19 müssen die Zeitstempelfelder im Epoch-Format in Millisekunden statt in Sekunden angegeben werden.",
    "App ID":
      "App-ID",
    "App Token":
      "App-Token",
    "App-only authentication":
      "Nur-App-Authentifizierung",
    "Application ID / Client ID":
      "Anwendungs-ID / Client-ID",
    "Application ID or Client ID":
      "Anwendungs-ID oder Client-ID",
    "Application redirect URI":
      "Umleitungs-URI der Anwendung",
    "Application Redirect URI":
      "Umleitungs-URI der Anwendung",
    "Application redirect URI (for authorization code mode)":
      "Umleitungs-URI der Anwendung (für den Autorisierungscode-Modus)",
    "Application redirect URI (for Authorization Code mode)":
      "Umleitungs-URI der Anwendung (für den Autorisierungscode-Modus)",
    "Application redirect URI (required for self-deployed Azure app)":
      "Umleitungs-URI der Anwendung (erforderlich für selbst bereitgestellte Azure-App)",
    "Application Secret (Required for using Self Deployed Azure app)":
      "Anwendungs-Secret (erforderlich für die Verwendung einer selbst bereitgestellten Azure-App)",
    "Argument Name":
      "Argumentname",
    "As an alternative to Okta API tokens, you can interact with Okta APIs using scoped OAuth 2.0 access tokens for a number of Okta endpoints.":
      "Als Alternative zu Okta-API-Token können Sie über OAuth-2.0-Zugriffstoken mit definiertem Scope mit den Okta-APIs für eine Reihe von Okta-Endpunkten interagieren.",
    "As soon as the instance is set-up, the first pull will get the alarms generated in the last 10 minutes. After that, new alarms will be fetched every other minute, starting the last pull index.":
      "Sobald die Instanz eingerichtet ist, ruft der erste Pull die in den letzten 10 Minuten generierten Alarme ab. Danach werden alle zwei Minuten neue Alarme abgerufen, beginnend beim letzten Pull-Index.",
    "As the enrichment process is asynchronous, fetching enriched incidents takes longer. The integration was tested with 20+ notables simultaneously that were fetched and enriched after approximately ~4min.":
      "Da der Anreicherungsprozess asynchron ist, dauert das Abrufen angereicherter Incidents länger. Die Integration wurde mit mehr als 20 gleichzeitig abgerufenen und angereicherten Notables getestet, was etwa 4 Minuten dauerte.",
    "Asset enrichment lookup tables":
      "Lookup-Tabellen zur Asset-Anreicherung",
    "Asset search enrichment":
      "Asset-Suchanreicherung",
    "Assign Prisma AIRS AI Red Teaming API permissions":
      "Weisen Sie die Berechtigungen für die Prisma AIRS AI Red Teaming API zu",
    "Assign Prisma AIRS AI Runtime Security API permissions":
      "Weisen Sie die Berechtigungen für die Prisma AIRS AI Runtime Security API zu",
    "Assign Prisma AIRS AI Supply Chain Security API permissions":
      "Weisen Sie die Berechtigungen für die Prisma AIRS AI Supply Chain Security API zu",
    "Audit log type filter":
      "Filter für Auditprotokolltyp",
    "Authenticate using an API-Key":
      "Authentifizierung mit einem API-Schlüssel",
    "Authentication Configuration":
      "Authentifizierungskonfiguration",
    "Authentication Flow":
      "Authentifizierungsablauf",
    "Authentication URL":
      "Authentifizierungs-URL",
    "Authentication using API Token":
      "Authentifizierung mit einem API-Token",
    "Authentication using Azure Managed Identities":
      "Authentifizierung mit verwalteten Azure-Identitäten",
    "Authentication using OAuth 2.0 Authentication":
      "Authentifizierung mit OAuth-2.0-Authentifizierung",
    "Authentication Using the Authorization Code Flow (Delegated Permissions)":
      "Authentifizierung mit dem Autorisierungscode-Ablauf (delegierte Berechtigungen)",
    "Authentication Using the Client Credentials Flow (Application Permissions)":
      "Authentifizierung mit dem Clientanmeldedaten-Ablauf (Anwendungsberechtigungen)",
    "Authentication Using the User - Authorization Code Flow":
      "Authentifizierung mit dem Benutzer – Autorisierungscode-Ablauf",
    "Authorization code (for self-deployed mode)":
      "Autorisierungscode (für den selbst bereitgestellten Modus)",
    "Authorization code (required for self-deployed Azure app)":
      "Autorisierungscode (erforderlich für selbst bereitgestellte Azure-App)",
    "Authorization code (run msgraph-generate-login-url command)":
      "Autorisierungscode (Befehl msgraph-generate-login-url ausführen)",
    "Authorization Code flow (Delegated Permissions)":
      "Autorisierungscode-Ablauf (delegierte Berechtigungen)",
    "Authorization code on behalf of a user, used with self deployed Azure Applications.":
      "Autorisierungscode im Namen eines Benutzers, der mit selbst bereitgestellten Azure-Anwendungen verwendet wird.",
    "Authorize Cortex for Entra ID Users (Self deployed Azure App)":
      "Cortex für Entra-ID-Benutzer autorisieren (selbst bereitgestellte Azure-App)",
    "Auto Activate Changes":
      "Änderungen automatisch aktivieren",
    "Auto Logout":
      "Automatische Abmeldung",
    "Automatically fetch and ingest Threatmon alarms as XSOAR incidents.":
      "Rufen Sie Threatmon-Alarme automatisch ab und nehmen Sie sie als XSOAR-Incidents auf.",
    "Available integrations":
      "Verfügbare Integrationen",
    "Base Command":
      "Basisbefehl",
    "Base url to Shodan API":
      "Basis-URL der Shodan-API",
    "Based on what data needs to be pulled in through the integration, update the Domain Security Policy Permissions as well as Business Process Security Policy Permissions.":
      "Aktualisieren Sie je nach den Daten, die über die Integration abgerufen werden sollen, die Berechtigungen der Domänensicherheitsrichtlinie sowie die Berechtigungen der Geschäftsprozess-Sicherheitsrichtlinie.",
    "Basic Auth":
      "Standardauthentifizierung",
    "Basic Auth (http)":
      "Standardauthentifizierung (http)",
    "Basic authentication - Fill in the email and password.":
      "Standardauthentifizierung – Geben Sie die E-Mail-Adresse und das Passwort ein.",
    "Basic authentication - Fill in the Email and password.":
      "Standardauthentifizierung – Geben Sie die E-Mail-Adresse und das Passwort ein.",
    "Basic authentication - Fill in the User Principal Name (UPN) and password.":
      "Standardauthentifizierung – Geben Sie den Benutzerprinzipalnamen (UPN) und das Passwort ein.",
    "Basic authorization using username and password.":
      "Standardautorisierung mit Benutzername und Passwort.",
    "Bearer Auth":
      "Bearer-Authentifizierung",
    "Bearer Auth (http)":
      "Bearer-Authentifizierung (http)",
    "Before creating an API client, ensure that you create an API role with all the required privileges as mentioned in the integration documentation. Then, associate the API client with that role.":
      "Bevor Sie einen API-Client erstellen, stellen Sie sicher, dass Sie eine API-Rolle mit allen erforderlichen Berechtigungen gemäß der Integrationsdokumentation erstellen. Ordnen Sie den API-Client anschließend dieser Rolle zu.",
    "Before you configure the integration, retrieve the API key from your Joe Security environment.":
      "Bevor Sie die Integration konfigurieren, rufen Sie den API-Schlüssel aus Ihrer Joe-Security-Umgebung ab.",
    "BloodHound Enterprise Domain":
      "BloodHound-Enterprise-Domäne",
    "BloodHound Enterprise Domain (for example, https://example.bloodhoundenterprise.io)":
      "BloodHound-Enterprise-Domäne (z. B. https://example.bloodhoundenterprise.io)",
    "BloodHound Enterprise Domain URL":
      "URL der BloodHound-Enterprise-Domäne",
    "BloodHound Enterprise reduces risk in Active Directory and Microsoft Azure environments by continuously identifying and quantifying attack paths that attackers use to escalate privileges. The SpecterOps BloodHound Enterprise integration enables automated retrieval of attack path findings from BloodHound into Cortex, streamlining incident creation and investigation.":
      "BloodHound Enterprise reduziert das Risiko in Active-Directory- und Microsoft-Azure-Umgebungen, indem es kontinuierlich die Angriffspfade identifiziert und quantifiziert, die Angreifer zur Rechteausweitung nutzen. Die SpecterOps-BloodHound-Enterprise-Integration ermöglicht den automatisierten Abruf von Angriffspfad-Ergebnissen aus BloodHound in Cortex und vereinfacht so die Erstellung und Untersuchung von Incidents.",
    "Bot Client ID":
      "Bot-Client-ID",
    "Bot Client ID ((Team Chat App))":
      "Bot-Client-ID ((Team Chat App))",
    "Bot Client Secret (Team Chat App)":
      "Bot-Client-Secret (Team Chat App)",
    "Bot display name in Slack":
      "Anzeigename des Bots in Slack",
    "Bot display name in Slack (Cortex by default)":
      "Anzeigename des Bots in Slack (standardmäßig Cortex)",
    "Bot icon in Slack - Image URL (Cortex icon by default)":
      "Bot-Symbol in Slack – Bild-URL (standardmäßig das Cortex-Symbol)",
    "Bot ID":
      "Bot-ID",
    "Bot Message":
      "Bot-Nachricht",
    "Bot Password":
      "Bot-Kennwort",
    "Bot Secret ID":
      "Bot-Secret-ID",
    "Bot Token":
      "Bot-Token",
    "Build a playbook and assign it as the default for this incident type.":
      "Erstellen Sie ein Playbook und weisen Sie es als Standard für diesen Incident-Typ zu.",
    "Build a query to return relevant alerts.":
      "Erstellen Sie eine Abfrage, um relevante Alerts zurückzugeben.",
    "By clicking \"Authorize\", you hereby authorize Palo Alto Networks to (i) ingest data and perform actions such as suppression on behalf of you to and from Semgrep's public API, and (ii) further process such data to deliver our services to you. You confirm that you have the right to provide such authorization.":
      "Indem Sie auf „Autorisieren“ klicken, autorisieren Sie Palo Alto Networks hiermit, (i) in Ihrem Namen Daten aus der öffentlichen API von Semgrep zu erfassen und Aktionen wie Unterdrückung in dieser API auszuführen und (ii) diese Daten weiterzuverarbeiten, um Ihnen unsere Services bereitzustellen. Sie bestätigen, dass Sie berechtigt sind, diese Autorisierung zu erteilen.",
    "By clicking \"Authorize\", you hereby authorize Palo Alto Networks to (i) ingest data and perform actions such as suppression on behalf of you to and from Snyk's public API, and (ii) further process such data to deliver our services to you. You confirm that you have the right to provide such authorization.":
      "Indem Sie auf „Autorisieren“ klicken, autorisieren Sie Palo Alto Networks hiermit, (i) in Ihrem Namen Daten aus der öffentlichen API von Snyk zu erfassen und Aktionen wie Unterdrückung in dieser API auszuführen und (ii) diese Daten weiterzuverarbeiten, um Ihnen unsere Services bereitzustellen. Sie bestätigen, dass Sie berechtigt sind, diese Autorisierung zu erteilen.",
    "By clicking \"Authorize\", you hereby authorize Palo Alto Networks to (i) ingest data and perform actions such as suppression on behalf of you to and from SonarQube's public API, and (ii) further process such data to deliver our services to you. You confirm that you have the right to provide such authorization.":
      "Indem Sie auf „Autorisieren“ klicken, autorisieren Sie Palo Alto Networks hiermit, (i) in Ihrem Namen Daten aus der öffentlichen API von SonarQube zu erfassen und Aktionen wie Unterdrückung in dieser API auszuführen und (ii) diese Daten weiterzuverarbeiten, um Ihnen unsere Services bereitzustellen. Sie bestätigen, dass Sie berechtigt sind, diese Autorisierung zu erteilen.",
    "By clicking \"Authorize\", you hereby authorize Palo Alto Networks to (i) ingest data and perform actions such as suppression on behalf of you to and from Veracode's public API, and (ii) further process such data to deliver our services to you. You confirm that you have the right to provide such authorization.":
      "Indem Sie auf „Autorisieren“ klicken, autorisieren Sie Palo Alto Networks hiermit, (i) in Ihrem Namen Daten aus der öffentlichen API von Veracode zu erfassen und Aktionen wie Unterdrückung in dieser API auszuführen und (ii) diese Daten weiterzuverarbeiten, um Ihnen unsere Services bereitzustellen. Sie bestätigen, dass Sie berechtigt sind, diese Autorisierung zu erteilen.",
    "By default, SSL verification is enabled. If selected, the connection isn’t secure and all requests return an SSL error because the certificate cannot be verified.":
      "Standardmäßig ist die SSL-Überprüfung aktiviert. Wenn diese Option ausgewählt ist, ist die Verbindung nicht sicher und alle Anfragen geben einen SSL-Fehler zurück, da das Zertifikat nicht überprüft werden kann.",
    "By default, the integration fetches incidents in an open state.":
      "Standardmäßig ruft die Integration Incidents im Status „Offen“ ab.",
    "By default, the Kafka instance uses a non SSL connection. Turnning on the insecure flag, or providing any certificate will switch to SSL connection.":
      "Standardmäßig verwendet die Kafka-Instanz eine Verbindung ohne SSL. Wenn Sie das Flag insecure aktivieren oder ein beliebiges Zertifikat angeben, wird auf eine SSL-Verbindung umgeschaltet.",
    "CA certificate of Kafka server (type pem)":
      "CA-Zertifikat des Kafka-Servers (Typ pem)",
    "Certificate (Required for HTTPS)":
      "Zertifikat (erforderlich für HTTPS)",
    "Certificate Password":
      "Zertifikatskennwort",
    "Certificate Thumbprint (can be used instead of Client Secret)":
      "Zertifikatfingerabdruck (kann anstelle von Client Secret verwendet werden)",
    "Certificate Thumbprint (optional for self-deployed Azure app)":
      "Zertifikatfingerabdruck (optional für selbst bereitgestellte Azure-Apps)",
    "Chat and channel monitoring, data security scanning, and security posture for Teams":
      "Chat- und Kanalüberwachung, Datensicherheitsscans und Sicherheitsstatus für Teams",
    "Check “Fetches-incidents” radio button":
      "Wählen Sie die Optionsschaltfläche „Fetches-incidents“ aus",
    "Check this box to use OAuth 2.0 authentication. See (?) for more information.":
      "Aktivieren Sie dieses Kontrollkästchen, um die OAuth-2.0-Authentifizierung zu verwenden. Weitere Informationen finden Sie unter (?).",
    "Check Trust any certificate (not secure) checkbox":
      "Aktivieren Sie das Kontrollkästchen Jedem Zertifikat vertrauen (nicht sicher)",
    "Choose a device group name.":
      "Wählen Sie einen Gerätegruppennamen aus.",
    "Choose if to check “Fetch Existing Alerts” and/or “Also Fetch Informational Alerts” checkboxes":
      "Wählen Sie aus, ob die Kontrollkästchen „Fetch Existing Alerts“ und/oder „Also Fetch Informational Alerts“ aktiviert werden sollen",
    "Choose max fetch (up to 200)":
      "Wählen Sie die maximale Abrufanzahl aus (bis zu 200)",
    "Choose Orca Alert - Classification as your classifier":
      "Wählen Sie Orca Alert - Classification als Klassifizierer aus",
    "Choose Orca Mapper as your mapper":
      "Wählen Sie Orca Mapper als Mapper aus",
    "Choose which Microsoft 365 services to connect. Each service maps to specific Microsoft Graph API permissions.":
      "Wählen Sie die Microsoft-365-Services aus, die verbunden werden sollen. Jeder Service ist bestimmten Microsoft-Graph-API-Berechtigungen zugeordnet.",
    "Choose your API version":
      "Wählen Sie Ihre API-Version aus",
    "Chrome options (Advanced. See [?])":
      "Chrome-Optionen (erweitert; siehe [?])",
    "Classification description (only human readable)":
      "Beschreibung der Klassifizierung (nur für Menschen lesbar)",
    "Classification long name":
      "Langer Name der Klassifizierung",
    "Classifiers and Mappers":
      "Klassifizierer und Mapper",
    "Clear the “Query only application events configured in IAM Configuration” checkbox to use a custom fetch query filter expression. The expression must be in SCIM syntax, and include the add and remove event types, as well as the application ID.":
      "Deaktivieren Sie das Kontrollkästchen „Query only application events configured in IAM Configuration“, um einen benutzerdefinierten Filterausdruck für die Abfrage zu verwenden. Der Ausdruck muss in SCIM-Syntax vorliegen und die Ereignistypen für Hinzufügen und Entfernen sowie die Anwendungs-ID enthalten.",
    "Click “Test” button to make sure Api Key is valid and then click the “Done” button":
      "Klicken Sie auf die Schaltfläche „Test“, um sicherzustellen, dass der API-Schlüssel gültig ist, und klicken Sie dann auf die Schaltfläche „Done“",
    "Click “Test” to validate the connection.":
      "Klicken Sie auf „Test“, um die Verbindung zu validieren.",
    "Click the data from the Splunk fields to map it to Cortex.":
      "Klicken Sie auf die Daten aus den Splunk-Feldern, um sie Cortex zuzuordnen.",
    "Click the fetched data.":
      "Klicken Sie auf die abgerufenen Daten.",
    "Click the username in the upper-right corner.":
      "Klicken Sie oben rechts auf den Benutzernamen.",
    "Click your classifier.":
      "Klicken Sie auf Ihren Klassifizierer.",
    "Click your mapper.":
      "Klicken Sie auf Ihren Mapper.",
    "Client authentication":
      "Clientauthentifizierung",
    "Client certificate (‘client.crt’ file)":
      "Clientzertifikat (Datei 'client.crt')",
    "Client certificate (type pem)":
      "Clientzertifikat (Typ pem)",
    "Client certificate key (type pem)":
      "Schlüssel des Clientzertifikats (Typ pem)",
    "Client certificates":
      "Clientzertifikate",
    "Client certificates content (see `client.crt` in Integration Tips)":
      "Inhalt der Clientzertifikate (siehe `client.crt` unter Tipps zur Integration)",
    "Client credentials":
      "Client-Anmeldedaten",
    "Client Credentials":
      "Client-Anmeldedaten",
    "Client GUID":
      "Client-GUID",
    "Client Id (for OAuth 2.0)":
      "Client-ID (für OAuth 2.0)",
    "Client ID (OAuth)":
      "Client-ID (OAuth)",
    "Client ID and Client Secret":
      "Client-ID und Client-Secret",
    "Client Id for OAuth 2.0":
      "Client-ID für OAuth 2.0",
    "Client ID/JWT Audience (aud)":
      "Client-ID/JWT-Zielgruppe (aud)",
    "Client Name":
      "Clientname",
    "Client private key":
      "Privater Clientschlüssel",
    "Client private key (‘client.key’ file)":
      "Privater Clientschlüssel (Datei 'client.key')",
    "Client private key content (e.g. `client.key`)":
      "Inhalt des privaten Clientschlüssels (z. B. `client.key`)",
    "Client Secret (for OAuth 2.0)":
      "Client-Secret (für OAuth 2.0)",
    "Client Secret (OAuth)":
      "Client-Secret (OAuth)",
    "Client Secret for OAuth 2.0":
      "Client-Secret für OAuth 2.0",
    "Client Secret Key":
      "Client-Secret-Schlüssel",
    "Client type":
      "Clienttyp",
    "Close Detection on Incident Closure":
      "Erkennung beim Schließen des Incidents schließen",
    "Close Mirrored Cortex Incidents (Incoming Mirroring)":
      "Gespiegelte Cortex-Incidents schließen (eingehende Spiegelung)",
    "Close Mirrored Prisma Cloud Alert":
      "Gespiegelten Prisma-Cloud-Alert schließen",
    "Close Mirrored Splunk ES Events (Outgoing Mirroring)":
      "Gespiegelte Splunk-ES-Ereignisse schließen (ausgehende Spiegelung)",
    "Close Mirrored Splunk Notable Event":
      "Gespiegeltes Splunk Notable Event schließen",
    "Cloud Name (i.e., <https://zsapi.zscalertwo.net>)":
      "Cloud-Name (z. B. <https://zsapi.zscalertwo.net>)",
    "Collect Configuration":
      "Konfiguration erfassen",
    "Collect Logs":
      "Protokolle erfassen",
    "Comma-separated configuration for advanced parameters values. e.g. EVENTS_INTERVAL_SECS=20,FETCH_SLEEP=5":
      "Kommagetrennte Konfiguration für Werte erweiterter Parameter. Z. B. EVENTS_INTERVAL_SECS=20,FETCH_SLEEP=5",
    "Comma-separated finding statuses to fetch. Known values are OPEN, REOPENED, and DONE. The default excludes DONE so that remediated findings do not create incidents, while still covering findings that were reopened. Only applies when Findings scope is \"Supplier Findings\". Leave empty to fetch all statuses.":
      "Kommagetrennte Status der abzurufenden Befunde. Bekannte Werte sind OPEN, REOPENED und DONE. Standardmäßig wird DONE ausgeschlossen, sodass behobene Befunde keine Incidents erzeugen, während wieder geöffnete Befunde weiterhin erfasst werden. Gilt nur, wenn Findings scope auf „Supplier Findings“ gesetzt ist. Lassen Sie das Feld leer, um alle Status abzurufen.",
    "Command Example":
      "Befehlsbeispiel",
    "Comment tag from Splunk":
      "Kommentar-Tag von Splunk",
    "Comment tag to Splunk":
      "Kommentar-Tag für Splunk",
    "Commercial Region (https://analysiscenter.veracode.com/)":
      "Kommerzielle Region (https://analysiscenter.veracode.com/)",
    "Common parameters":
      "Allgemeine Parameter",
    "Configuration Steps":
      "Konfigurationsschritte",
    "Configure a JWT signing key by accessing: All→System OAuth→JWT Keys using the keystore from above and keep the Key ID as it will be used as kid integration parameter.":
      "Konfigurieren Sie einen JWT-Signaturschlüssel, indem Sie zu All→System OAuth→JWT Keys navigieren und den obigen Schlüsselspeicher verwenden. Notieren Sie die Key ID, da sie als Integrationsparameter `kid` verwendet wird.",
    "Configure additional integration instances, adding the workflow URL for each Team. You can then send notifications to multiple teams at once, or select the integration instance to use via the playbook task editor.":
      "Konfigurieren Sie weitere Integrationsinstanzen und fügen Sie für jedes Team die Workflow-URL hinzu. Anschließend können Sie Benachrichtigungen an mehrere Teams gleichzeitig senden oder die zu verwendende Integrationsinstanz im Playbook-Task-Editor auswählen.",
    "Configure Integration":
      "Integration konfigurieren",
    "Configure Microsoft Teams on Cortex or Cortex XSIAM":
      "Konfigurieren Sie Microsoft Teams in Cortex oder Cortex XSIAM",
    "Configure the classification. Make sure that your non ES incident fields are associated with your custom incident type.":
      "Konfigurieren Sie die Klassifizierung. Stellen Sie sicher, dass Ihre Incident-Felder, die nicht zu ES gehören, Ihrem benutzerdefinierten Incident-Typ zugeordnet sind.",
    "Configure the default threshold for each indicator type in the instance settings.":
      "Konfigurieren Sie in den Instanzeinstellungen den Standardschwellenwert für jeden Indikatortyp.",
    "Configure the instance":
      "Instanz konfigurieren",
    "Configure the Instance to Fetch Attack Paths from BloodHound Enterprise":
      "Instanz für den Abruf von Angriffspfaden aus BloodHound Enterprise konfigurieren",
    "Configure the integration instance in Cortex":
      "Integrationsinstanz in Cortex konfigurieren",
    "Configure the integration to fetch incidents (see the Integration documentation for details).":
      "Konfigurieren Sie die Integration so, dass Incidents abgerufen werden (Details finden Sie in der Integrationsdokumentation).",
    "Configure the mapping. Make sure to map your non ES fields accordingly and make sure that these incident fields are associated with their custom incident type.":
      "Konfigurieren Sie die Zuordnung. Ordnen Sie Ihre Nicht-ES-Felder entsprechend zu und stellen Sie sicher, dass diese Incident-Felder dem jeweiligen benutzerdefinierten Incident-Typ zugeordnet sind.",
    "Configure VulnDB on Cortex":
      "VulnDB in Cortex konfigurieren",
    "Configure Your MongoDB Atlas Instance":
      "MongoDB-Atlas-Instanz konfigurieren",
    "Connect SonarQube":
      "SonarQube verbinden",
    "Connect Veracode":
      "Veracode verbinden",
    "Connection Method":
      "Verbindungsmethode",
    "Connection Security":
      "Verbindungssicherheit",
    "Connection URI":
      "Verbindungs-URI",
    "Connector ID (CB Defense)":
      "Connector-ID (CB Defense)",
    "Content types to fetch":
      "Abzurufende Inhaltstypen",
    "Context Output":
      "Kontextausgabe",
    "Copy the Access Token to the “Personal Access Token” field":
      "Kopieren Sie das Zugriffstoken in das Feld „Personal Access Token“",
    "Copy the API key.":
      "Kopieren Sie den API-Schlüssel.",
    "Copy the Client ID and Client Secret":
      "Kopieren Sie die Client-ID und das Client-Secret",
    "Copy the Client ID and Client Secret Key to a safe place.":
      "Kopieren Sie die Client-ID und den Client-Secret-Schlüssel an einen sicheren Ort.",
    "Copy the generated API token. This would be required to be configured while adding the RiskSense instance on Cortex.":
      "Kopieren Sie das generierte API-Token. Es wird für die Konfiguration beim Hinzufügen der RiskSense-Instanz in Cortex benötigt.",
    "Copy the Runtime API Key for scanner operations":
      "Kopieren Sie den Runtime-API-Schlüssel für Scanner-Vorgänge",
    "Copy your API key.":
      "Kopieren Sie Ihren API-Schlüssel.",
    "Copy your Terraform Enterprise server domain":
      "Kopieren Sie die Domäne Ihres Terraform-Enterprise-Servers",
    "Corporation Name (should match the pattern [0-9a-z_.-]+)":
      "Name der Organisation (muss dem Muster [0-9a-z_.-]+ entsprechen)",
    "Cortex Severity":
      "Cortex-Schweregrad",
    "Cortex Tenant":
      "Cortex-Tenant",
    "Cortex uses the Workday integration to fetch reports and create XSOAR incidents that correspond to the CRUD operation(s) in the report. For example, if you run a full report that includes 5 new employees, 3 terminated employees, and 10 employee profiles that were updated, 18 unique incidents would be created in XSOAR.":
      "Cortex verwendet die Workday-Integration, um Berichte abzurufen und XSOAR-Incidents zu erstellen, die den CRUD-Vorgängen im Bericht entsprechen. Wenn Sie beispielsweise einen vollständigen Bericht ausführen, der 5 neue Mitarbeitende, 3 ausgeschiedene Mitarbeitende und 10 aktualisierte Mitarbeiterprofile enthält, werden in XSOAR 18 eindeutige Incidents erstellt.",
    "Create a JWT provider with a JWT signing key by accessing: All→System OAuth→JWT providers. Claim Name sub in Standard Claims has to be existing non-admin servicenow user with all necessary roles.":
      "Erstellen Sie einen JWT-Provider mit einem JWT-Signaturschlüssel, indem Sie zu All→System OAuth→JWT providers navigieren. Der Claim Name `sub` unter Standard Claims muss ein vorhandener ServiceNow-Benutzer ohne Administratorrechte sein, der über alle erforderlichen Rollen verfügt.",
    "Create a local user with a sufficient role.":
      "Erstellen Sie einen lokalen Benutzer mit einer ausreichenden Rolle.",
    "Create a new instance":
      "Neue Instanz erstellen",
    "Create a new Mattermost user (to act as the Mattermost Bot)":
      "Erstellen Sie einen neuen Mattermost-Benutzer (der als Mattermost-Bot fungiert)",
    "Create a new service account or OAuth2 client":
      "Erstellen Sie ein neues Dienstkonto oder einen neuen OAuth2-Client",
    "Create a workflow in Microsoft Teams.":
      "Erstellen Sie einen Workflow in Microsoft Teams.",
    "Create an image or PDF file from a URL or HTML body.":
      "Erstellen Sie eine Bild- oder PDF-Datei aus einer URL oder einem HTML-Body.",
    "Create an Integration System Security Group (Unconstrained) using the ‘Create Security Group’ task":
      "Erstellen Sie mit dem Task 'Create Security Group' eine Integration System Security Group (Unconstrained)",
    "Create an JWT app.":
      "Erstellen Sie eine JWT-App.",
    "Create an Server-to-Server OAuth app.":
      "Erstellen Sie eine Server-to-Server-OAuth-App.",
    "Create API Access Policy or add Authentication profile to existing Policy by accessing: All→System Web Services→API Access Policies→Rest API Access Policies":
      "Erstellen Sie eine API Access Policy oder fügen Sie einer vorhandenen Richtlinie ein Authentication profile hinzu, indem Sie zu All→System Web Services→API Access Policies→Rest API Access Policies navigieren",
    "Create Incidents for Escalated Detections":
      "Incidents für eskalierte Erkennungen erstellen",
    "Create Incidents for Prioritized Detections":
      "Incidents für priorisierte Erkennungen erstellen",
    "Create Indicators from Relationships":
      "Indikatoren aus Beziehungen erstellen",
    "Create OAuth2 Client in Strata Cloud Manager":
      "Erstellen Sie einen OAuth2-Client in Strata Cloud Manager",
    "Create the Demisto Bot in Microsoft Teams":
      "Erstellen Sie den Demisto Bot in Microsoft Teams",
    "Creating an API Key":
      "Erstellen eines API-Schlüssels",
    "Creating or updating the encryption master key of Palo Alto Networks Firewall or Panorama invalidates the current API key and requires obtaining a new one. All subsequent commands will raise an “Invalid Credential” error until a new API key is obtained and the integration instance is updated accordingly.":
      "Das Erstellen oder Aktualisieren des Master-Verschlüsselungsschlüssels von Palo Alto Networks Firewall oder Panorama macht den aktuellen API-Schlüssel ungültig, sodass ein neuer Schlüssel angefordert werden muss. Alle nachfolgenden Befehle lösen den Fehler „Invalid Credential“ aus, bis ein neuer API-Schlüssel abgerufen und die Integrationsinstanz entsprechend aktualisiert wurde.",
    "Crowdsourced Yara Rules Threshold":
      "Schwellenwert für Crowdsourced-Yara-Regeln",
    "CSV of the Splunk lookup tables from which to take the Asset enrichment data.":
      "CSV der Splunk-Lookup-Tabellen, aus denen die Anreicherungsdaten für Assets übernommen werden.",
    "CSV of the Splunk lookup tables from which to take the Identity enrichment data.":
      "CSV der Splunk-Lookup-Tabellen, aus denen die Anreicherungsdaten für Identitäten übernommen werden.",
    "Currently, OpenSSH keys are not supported. Only RSA keys (.PEM files) are supported.":
      "Derzeit werden OpenSSH-Schlüssel nicht unterstützt. Es werden nur RSA-Schlüssel (.PEM-Dateien) unterstützt.",
    "Custom New Incident Welcome Message":
      "Benutzerdefinierte Willkommensnachricht für neue Incidents",
    "Customer name":
      "Kundenname",
    "Customer Name":
      "Kundenname",
    "CVE- is a constant string":
      "`CVE-` ist eine konstante Zeichenfolge",
    "Data profiles to allow exemption":
      "Datenprofile, für die eine Ausnahme zugelassen wird",
    "Date Format in Workday Report":
      "Datumsformat im Workday-Bericht",
    "Date or relative timestamp to start fetching incidents from, in the format of <number> <time unit>. For example, 2 minutes, 12 hours, 6 days, 2 weeks, 3 months, 1 year, ISO timestamp. Default is 3 days.":
      "Datum oder relativer Zeitstempel, ab dem Incidents abgerufen werden, im Format <number> <time unit>. Zum Beispiel 2 minutes, 12 hours, 6 days, 2 weeks, 3 months, 1 year, ISO-Zeitstempel. Standard ist 3 days.",
    "Date YYYY-MM-dd finishing date (latest)":
      "Enddatum YYYY-MM-dd (spätestes)",
    "Date YYYY-MM-dd starting date (earliest)":
      "Startdatum YYYY-MM-dd (frühestes)",
    "DBotScore mapping":
      "DBotScore-Zuordnung",
    "Deactivation date field":
      "Feld für Deaktivierungsdatum",
    "Deactive User URL":
      "URL zum Deaktivieren von Benutzern",
    "Dedicated Slack channel to receive notifications":
      "Dedizierter Slack-Kanal für den Empfang von Benachrichtigungen",
    "Default ‘wait-time’ is 20 seconds.":
      "Der Standardwert für 'wait-time' beträgt 20 Sekunden.",
    "Default Behavior":
      "Standardverhalten",
    "Default Hostname or IP Address":
      "Standard-Hostname oder -IP-Adresse",
    "Default max total wait for results (in milliseconds)":
      "Standardmäßige maximale Gesamtwartezeit für Ergebnisse (in Millisekunden)",
    "Default maximum number of records to retrieve":
      "Standardmäßige maximale Anzahl abzurufender Datensätze",
    "Default requestor ID for adding people to incidents":
      "Standard-Anforderer-ID zum Hinzufügen von Personen zu Incidents",
    "Default team":
      "Standardteam",
    "Default Tenant Services Group ID to use for API calls. Example: 1234567890.":
      "Standard-ID der Tenant Services Group für API-Aufrufe. Beispiel: 1234567890.",
    "Default ticket type for running ticket commands and fetching incidents":
      "Standard-Ticket-Typ für die Ausführung von Ticket-Befehlen und den Abruf von Incidents",
    "Default user":
      "Standardbenutzer",
    "Define a query to determine which offenses to fetch. e.g. status=OPEN. See ? for more details.":
      "Definieren Sie eine Abfrage, um zu bestimmen, welche Offenses abgerufen werden. Z. B. status=OPEN. Weitere Details finden Sie unter ?.",
    "Defining a broad rule-set will cause the integration to create multiple redundant incidents.":
      "Wenn Sie einen weit gefassten Regelsatz definieren, erstellt die Integration mehrere redundante Incidents.",
    "Delegated user authentication":
      "Authentifizierung delegierter Benutzer",
    "Dependencies (Python packages)":
      "Abhängigkeiten (Python-Pakete)",
    "Depending on the authentication method you use, the integration parameters might change.":
      "Je nach verwendeter Authentifizierungsmethode können sich die Integrationsparameter ändern.",
    "Depending on the selected authentication method, you may need to create a dedicated application or use a dedicated user account for the integration. Each method requires specific permissions and configuration steps to ensure Security & Compliance commands can be executed successfully.":
      "Je nach ausgewählter Authentifizierungsmethode müssen Sie möglicherweise eine dedizierte Anwendung erstellen oder ein dediziertes Benutzerkonto für die Integration verwenden. Jede Methode erfordert bestimmte Berechtigungen und Konfigurationsschritte, damit die Security-&-Compliance-Befehle erfolgreich ausgeführt werden können.",
    "Depending on the system load, the initial fetch might take a long time.":
      "Abhängig von der Systemlast kann der erste Abruf lange dauern.",
    "Deprecated starting from version 10.35.0 of Jamf.":
      "Veraltet ab Version 10.35.0 von Jamf.",
    "Deprecated. Use O365 - Security And Compliance - Content Search v2 instead.":
      "Veraltet. Verwenden Sie stattdessen O365 - Security And Compliance - Content Search v2.",
    "Deprecated. Use the Slack v3 integration instead.":
      "Veraltet. Verwenden Sie stattdessen die Slack-v3-Integration.",
    "Detailed Instructions…":
      "Detaillierte Anweisungen…",
    "Details for Silent Push workflow":
      "Details zum Silent-Push-Workflow",
    "Detection Close Reason for Incident Closure":
      "Schließungsgrund der Erkennung beim Schließen des Incidents",
    "Detection close reason to set in Vectra when closing incidents in XSOAR. Default value is 'Remediated'.":
      "Schließungsgrund der Erkennung, der in Vectra festgelegt wird, wenn Incidents in XSOAR geschlossen werden. Der Standardwert ist 'Remediated'.",
    "Detection close reason to set in Vectra when closing incidents in XSOAR. Default value is 'Remediated'. Note: This parameter is only used when close detection on incident closer is 'checked' and the mirroring direction is set to 'Outgoing' or 'Incoming And Outgoing'.":
      "Schließungsgrund der Erkennung, der in Vectra festgelegt wird, wenn Incidents in XSOAR geschlossen werden. Der Standardwert ist 'Remediated'. Hinweis: Dieser Parameter wird nur verwendet, wenn close detection on incident closer 'checked' ist und die Spiegelungsrichtung auf 'Outgoing' oder 'Incoming And Outgoing' festgelegt ist.",
    "Detection Status for Incident Reopen":
      "Status der Erkennung beim Wiedereröffnen des Incidents",
    "Detection status to set in Vectra when incident is reopened in XSOAR. Default value is 'Escalated'.":
      "Status der Erkennung, der in Vectra festgelegt wird, wenn der Incident in XSOAR wieder geöffnet wird. Der Standardwert ist 'Escalated'.",
    "Detection status to set in Vectra when incident is reopened in XSOAR. Default value is 'Escalated'. Note: This parameter is only used when open detection on incident reopen is 'checked' and the mirroring direction is set to 'Outgoing' or 'Incoming And Outgoing'.":
      "Status der Erkennung, der in Vectra festgelegt wird, wenn der Incident in XSOAR wieder geöffnet wird. Der Standardwert ist 'Escalated'. Hinweis: Dieser Parameter wird nur verwendet, wenn open detection on incident reopen 'checked' ist und die Spiegelungsrichtung auf 'Outgoing' oder 'Incoming And Outgoing' festgelegt ist.",
    "Determines when employees are synced from Workday, i.e., when are the User Profile in XSOAR, and the users in the applications, created. Set to 0 to sync hires on their hire date. Leave empty to sync the hires immediately.":
      "Legt fest, wann Mitarbeiter aus Workday synchronisiert werden, d. h. wann das Benutzerprofil in XSOAR und die Benutzer in den Anwendungen erstellt werden. Legen Sie 0 fest, um Neueinstellungen an ihrem Einstellungsdatum zu synchronisieren. Lassen Sie das Feld leer, um Neueinstellungen sofort zu synchronisieren.",
    "Determines when to enable the Active Directory accounts of employees. Set to 0 to enable the Active Directory accounts on their hire date. Leave empty to enable the accounts immediately. Note that this is effective only when the employees are already synced to XSOAR, so you should set a number lower, or equal to, the value in the *Number of days before hire date to sync hires* parameter.":
      "Legt fest, wann die Active-Directory-Konten der Mitarbeiter aktiviert werden. Legen Sie 0 fest, um die Active-Directory-Konten an ihrem Einstellungsdatum zu aktivieren. Lassen Sie das Feld leer, um die Konten sofort zu aktivieren. Beachten Sie, dass dies nur wirksam ist, wenn die Mitarbeiter bereits mit XSOAR synchronisiert sind. Legen Sie daher eine Zahl fest, die kleiner oder gleich dem Wert des Parameters *Number of days before hire date to sync hires* ist.",
    "Determines whether to return all results, which can number in the thousands. If “true”, returns all results and overrides the _fullResponse_, _long_ arguments (if set to “false”) in a command. If “false”, the _fullResponse_, _long_ arguments in the command determines how results are returned.":
      "Legt fest, ob alle Ergebnisse zurückgegeben werden, deren Anzahl in die Tausende gehen kann. Bei „true“ werden alle Ergebnisse zurückgegeben und die Argumente _fullResponse_ und _long_ (falls auf „false“ gesetzt) in einem Befehl überschrieben. Bei „false“ bestimmen die Argumente _fullResponse_ und _long_ des Befehls, wie die Ergebnisse zurückgegeben werden.",
    "Disable Automatic Notifications":
      "Automatische Benachrichtigungen deaktivieren",
    "DLP API Base URL":
      "DLP-API-Basis-URL",
    "DLP API base URL for DLP management operations (dictionaries, patterns, filtering profiles). Default is the global DLP endpoint. Change only if using a regional or custom DLP endpoint.":
      "Basis-URL der DLP-API für DLP-Verwaltungsvorgänge (Wörterbücher, Muster, Filterprofile). Standardmäßig ist dies der globale DLP-Endpunkt. Ändern Sie sie nur, wenn Sie einen regionalen oder benutzerdefinierten DLP-Endpunkt verwenden.",
    "DLP Regions":
      "DLP-Regionen",
    "Do not check for Cortex version 8":
      "Nicht auf Cortex-Version 8 prüfen",
    "Domain Controller":
      "Domänencontroller",
    "Domain Malicious Threshold. Minimum number of positive results from VT scanners to consider the Domain malicious.":
      "Schwellenwert für bösartige Domains. Mindestanzahl positiver Ergebnisse von VT-Scannern, ab der die Domain als bösartig gilt.",
    "Domain of illuminate server to use (format - server.that_you_use.com - No http/https)":
      "Domäne des zu verwendenden illuminate-Servers (Format - server.that_you_use.com - ohne http/https)",
    "Domain Popularity Ranking Threshold":
      "Schwellenwert für das Domain-Beliebtheitsranking",
    "Domain Relationships":
      "Domain-Beziehungen",
    "Domain Suspicious Threshold. Minimum number of positive and suspicious results from VT scanners to consider the Domain suspicious.":
      "Schwellenwert für verdächtige Domains. Mindestanzahl positiver und verdächtiger Ergebnisse von VT-Scannern, ab der die Domain als verdächtig gilt.",
    "Domain Threshold. Minimum number of positive results from VT scanners to consider the domain malicious.":
      "Schwellenwert für Domains. Mindestanzahl positiver Ergebnisse von VT-Scannern, ab der die Domain als bösartig gilt.",
    "Drag the value to the appropriate incident type.":
      "Ziehen Sie den Wert auf den entsprechenden Incident-Typ.",
    "DXL documentation":
      "DXL-Dokumentation",
    "Each access token enables the bearer to perform specific actions on specific Okta endpoints, with that ability controlled by which scopes the access token contains.":
      "Jedes Zugriffstoken ermöglicht dem Inhaber, bestimmte Aktionen auf bestimmten Okta-Endpunkten auszuführen. Diese Berechtigung wird durch die im Zugriffstoken enthaltenen Bereiche (Scopes) gesteuert.",
    "Each log type has its own query field in the instance configuration.":
      "Jeder Protokolltyp hat in der Instanzkonfiguration ein eigenes Abfragefeld.",
    "Each report has a unique URL, which you enter as one of the integration instance parameters. If you want to fetch multiple reports, each report will require its own integration instance.":
      "Jeder Bericht hat eine eindeutige URL, die Sie als einen der Parameter der Integrationsinstanz eingeben. Wenn Sie mehrere Berichte abrufen möchten, benötigt jeder Bericht eine eigene Integrationsinstanz.",
    "Elastic API Port":
      "Elastic-API-Port",
    "Email (Password for basic authentication only)":
      "E-Mail (Passwort nur für die Standardauthentifizierung)",
    "Email / User Principal Name (Required)":
      "E-Mail / Benutzerprinzipalname (erforderlich)",
    "Email address of the XSOAR delegated Teams user (e.g. \"example@demisto.com\")":
      "E-Mail-Adresse des delegierten Teams-Benutzers von XSOAR (z. B. „example@demisto.com“)",
    "Email address to associate for this integration.":
      "E-Mail-Adresse, die dieser Integration zugeordnet werden soll.",
    "Enable Cortex Assistant AI integration in Slack. When enabled, users can mention the bot to interact with AI agents for security analysis, threat intelligence, and automated responses.":
      "Aktiviert die Cortex-Assistant-AI-Integration in Slack. Wenn sie aktiviert ist, können Benutzer den Bot erwähnen, um mit KI-Agenten für Sicherheitsanalysen, Threat Intelligence und automatisierte Reaktionen zu interagieren.",
    "Enable Incident Mirroring":
      "Incident-Spiegelung aktivieren",
    "Enable Okta Authentication Log and Configuration Collection":
      "Erfassung von Okta-Authentifizierungsprotokollen und -Konfiguration aktivieren",
    "Enable Outbound File Mirroring":
      "Spiegelung ausgehender Dateien aktivieren",
    "Enable permissions.":
      "Aktivieren Sie die Berechtigungen.",
    "Enable score analyzing by Crowdsourced Yara Rules, Sigma, and IDS":
      "Bewertungsanalyse durch Crowdsourced Yara Rules, Sigma und IDS aktivieren",
    "Enable Splunk statuses marked as “End Status” to close on mirror (Incoming Mirroring)":
      "Als „End Status“ markierte Splunk-Status beim Spiegeln schließen (eingehende Spiegelung)",
    "Enable this to fetch assets that correlate to the fetched offenses.":
      "Aktivieren Sie diese Option, um Assets abzurufen, die mit den abgerufenen Offenses korrelieren.",
    "Enable TLS on the HTTP interface of your Elasticsearch cluster (required for the token service).":
      "Aktivieren Sie TLS auf der HTTP-Schnittstelle Ihres Elasticsearch-Clusters (für den Token-Dienst erforderlich).",
    "Enable Token Authentication":
      "Token-Authentifizierung aktivieren",
    "Enabled AI assistant":
      "KI-Assistent aktiviert",
    "Enabling this checkbox closes the detection in Vectra when the incident is closed in XSOAR.":
      "Wenn Sie dieses Kontrollkästchen aktivieren, wird die Erkennung in Vectra geschlossen, sobald der Incident in XSOAR geschlossen wird.",
    "Enabling this checkbox closes the detection in Vectra when the incident is closed in XSOAR. Note: This parameter is only used when the mirroring direction is set to 'Outgoing' or 'Incoming And Outgoing'.":
      "Wenn Sie dieses Kontrollkästchen aktivieren, wird die Erkennung in Vectra geschlossen, sobald der Incident in XSOAR geschlossen wird. Hinweis: Dieser Parameter wird nur verwendet, wenn die Spiegelungsrichtung auf 'Outgoing' oder 'Incoming And Outgoing' festgelegt ist.",
    "Enabling this checkbox generates incidents for escalated events detections. If not selected, incidents are created for all events detections.":
      "Wenn Sie dieses Kontrollkästchen aktivieren, werden Incidents für eskalierte Ereigniserkennungen generiert. Ist es nicht aktiviert, werden Incidents für alle Ereigniserkennungen erstellt.",
    "Enabling this checkbox generates incidents for prioritized events detections. If not selected, incidents are created for all events detections.":
      "Wenn Sie dieses Kontrollkästchen aktivieren, werden Incidents für priorisierte Ereigniserkennungen generiert. Ist es nicht aktiviert, werden Incidents für alle Ereigniserkennungen erstellt.",
    "Enabling this checkbox opens the detection in Vectra when the incident is reopened in XSOAR.":
      "Wenn Sie dieses Kontrollkästchen aktivieren, wird die Erkennung in Vectra geöffnet, sobald der Incident in XSOAR wieder geöffnet wird.",
    "Enabling this checkbox opens the detection in Vectra when the incident is reopened in XSOAR. Note: This parameter is only used when the mirroring direction is set to 'Outgoing' or 'Incoming And Outgoing'.":
      "Wenn Sie dieses Kontrollkästchen aktivieren, wird die Erkennung in Vectra geöffnet, sobald der Incident in XSOAR wieder geöffnet wird. Hinweis: Dieser Parameter wird nur verwendet, wenn die Spiegelungsrichtung auf 'Outgoing' oder 'Incoming And Outgoing' festgelegt ist.",
    "Endpoint URI":
      "Endpunkt-URI",
    "Enrichment Timeout (Minutes)":
      "Anreicherungs-Timeout (Minuten)",
    "Enrichment types":
      "Anreicherungstypen",
    "Enrichment Types":
      "Anreicherungstypen",
    "Ensure Appropriate Role":
      "Angemessene Rolle sicherstellen",
    "Enter a meaningful name and a description for the API, and click Create Key.":
      "Geben Sie einen aussagekräftigen Namen und eine Beschreibung für die API ein und klicken Sie auf Create Key.",
    "Enter a name for the API key and configure the desired settings.":
      "Geben Sie einen Namen für den API-Schlüssel ein und konfigurieren Sie die gewünschten Einstellungen.",
    "Enter a value for the UPN parameter in the integration configuration.":
      "Geben Sie in der Integrationskonfiguration einen Wert für den Parameter UPN ein.",
    "Enter connection parameters. (Server URL, Client ID & Client Secret Key)":
      "Geben Sie die Verbindungsparameter ein. (Server URL, Client ID und Client Secret Key)",
    "Enter the email address the key should be issued to and submit the signup form.":
      "Geben Sie die E-Mail-Adresse ein, für die der Schlüssel ausgestellt werden soll, und senden Sie das Anmeldeformular ab.",
    "Enter the relevant tag name for mirror notes.":
      "Geben Sie den entsprechenden Tag-Namen für Spiegelungsnotizen ein.",
    "Enter your Customer Name and API Key provided by the ThreatX SOC. You can request your Customer Name and API Key by opening a support ticket via support@threatx.com.":
      "Geben Sie Ihren Customer Name und Ihren API Key ein, die vom ThreatX SOC bereitgestellt wurden. Sie können Ihren Customer Name und Ihren API Key anfordern, indem Sie über support@threatx.com ein Support-Ticket öffnen.",
    "Entity Types":
      "Entitätstypen",
    "Environment ID":
      "Umgebungs-ID",
    "Environment ID is available under the PingOne Dashboard->Environment Properties.":
      "Die Umgebungs-ID finden Sie unter PingOne Dashboard->Environment Properties.",
    "Escape URLs":
      "URLs maskieren",
    "Even if the password is incorrect, the integration will attempt to authenticate using it.":
      "Selbst wenn das Passwort falsch ist, versucht die Integration, sich damit zu authentifizieren.",
    "Event fields to return from the events query (CAUTION this parameter is correlated to the incoming mapper, and changing the values may adversely affect mapping)":
      "Ereignisfelder, die von der Ereignisabfrage zurückgegeben werden (VORSICHT: Dieser Parameter ist mit dem eingehenden Mapper korreliert, und das Ändern der Werte kann sich negativ auf die Zuordnung auswirken)",
    "Event types to fetch":
      "Abzurufende Ereignistypen",
    "Events will be fetched only for User Profiles with a Source Priority value less than or equal to the value of this parameter.":
      "Ereignisse werden nur für Benutzerprofile abgerufen, deren Source-Priority-Wert kleiner oder gleich dem Wert dieses Parameters ist.",
    "Exact name of the rule or ruleset you want to filter on. Leave empty to receive all.":
      "Exakter Name der Regel oder des Regelsatzes, nach dem Sie filtern möchten. Lassen Sie das Feld leer, um alle zu erhalten.",
    "Existing users":
      "Vorhandene Benutzer",
    "Exploit publish date":
      "Veröffentlichungsdatum des Exploits",
    "Extensive Logging":
      "Erweiterte Protokollierung",
    "Feed Types":
      "Feed-Typen",
    "Fetch":
      "Abruf",
    "Fetch aggregate records (instead of messages)":
      "Aggregierte Datensätze abrufen (anstelle von Nachrichten)",
    "Fetch Alert Severity Threshold Higher Than":
      "Schwellenwert für den Schweregrad abzurufender Warnungen (höher als)",
    "Fetch Alerts":
      "Warnungen abrufen",
    "Fetch backwards window - the time overlap for each fetch to account for the gap between event creation and indexing on Splunk. This helps prevent data gaps caused by ingestion lag.":
      "Rückwärtsfenster für den Abruf: die zeitliche Überlappung bei jedem Abruf, um die Lücke zwischen der Ereigniserstellung und der Indizierung in Splunk zu berücksichtigen. Dadurch werden Datenlücken aufgrund von Aufnahmeverzögerungen vermieden.",
    "Fetch backwards window - this backward window is for cases where there is a gap between the event occurrence time and the event index time on the server.":
      "Rückwärtsfenster für den Abruf: Dieses Rückwärtsfenster ist für Fälle gedacht, in denen zwischen dem Zeitpunkt des Ereignisses und dem Indizierungszeitpunkt des Ereignisses auf dem Server eine Lücke besteht.",
    "Fetch delta - The delta time in each batch. e.g. 1 hour, 3 minutes.":
      "Abruf-Delta: das Zeitdelta in jedem Batch. z. B. 1 hour, 3 minutes.",
    "Fetch emails in HTML format":
      "E-Mails im HTML-Format abrufen",
    "Fetch event types":
      "Abzurufende Ereignistypen",
    "Fetch events (logs) from Splunk into Cortex":
      "Ruft Ereignisse (Protokolle) aus Splunk in Cortex ab",
    "Fetch incident query":
      "Abfrage zum Abrufen von Incidents",
    "Fetch incident with specific states.":
      "Ruft Incidents mit bestimmten Status ab.",
    "Fetch Incidents Filtering":
      "Filterung beim Abrufen von Incidents",
    "Fetch incidents type":
      "Typ der abzurufenden Incidents",
    "Fetch incidents using a manual query filter expression":
      "Incidents mithilfe eines manuellen Abfragefilterausdrucks abrufen",
    "Fetch incidents using an “IAM - Configuration” incident":
      "Incidents mithilfe eines „IAM - Configuration“-Incidents abrufen",
    "Fetch Interval (minutes)":
      "Abrufintervall (Minuten)",
    "Fetch limit - maximum number of incidents per fetch":
      "Abruflimit: maximale Anzahl von Incidents pro Abruf",
    "Fetch Limit (Max.- 200, Recommended less than 50)":
      "Abruflimit (max. 200, weniger als 50 empfohlen)",
    "Fetch Limit (Recommended less than 200)":
      "Abruflimit (weniger als 200 empfohlen)",
    "Fetch limit (recommended value is less than 200)":
      "Abruflimit (empfohlener Wert ist kleiner als 200)",
    "Fetch limit per type":
      "Abruflimit pro Typ",
    "Fetch mode":
      "Abrufmodus",
    "Fetch Only Escalated Detections":
      "Nur eskalierte Erkennungen abrufen",
    "Fetch only incidents with forensics":
      "Nur Incidents mit forensischen Daten abrufen",
    "Fetch only incidents with matching Application IDs":
      "Nur Incidents mit übereinstimmenden Anwendungs-IDs abrufen",
    "Fetch only incidents with matching severity":
      "Nur Incidents mit übereinstimmendem Schweregrad abrufen",
    "Fetch only incidents with matching state":
      "Nur Incidents mit übereinstimmendem Status abrufen",
    "Fetch only incidents with matching status":
      "Nur Incidents mit übereinstimmendem Status abrufen",
    "Fetch Only Prioritized Detections":
      "Nur priorisierte Erkennungen abrufen",
    "Fetch Prioritized and Escalated Detections":
      "Priorisierte und eskalierte Erkennungen abrufen",
    "Fetch Samples":
      "Beispiele abrufen",
    "Fetch specific incident types. Default value is \"All\".":
      "Ruft bestimmte Incident-Typen ab. Der Standardwert ist „All“.",
    "Fetch Splunk Enterprise Security Findings and Investigations into Cortex.":
      "Ruft Splunk Enterprise Security Findings und Investigations in Cortex ab.",
    "Fetch Threatmon alarms into Cortex.":
      "Ruft Threatmon-Alarme in Cortex ab.",
    "Fetched Incidents Data":
      "Daten abgerufener Incidents",
    "Fetches assets":
      "Ruft Assets ab",
    "Fetches incidents":
      "Ruft Incidents ab",
    "Fetches only incidents with matching **All**, **Closed**, or **Open** state. If nothing is selected, **All** states will be used.":
      "Ruft nur Incidents ab, deren Status mit **All**, **Closed** oder **Open** übereinstimmt. Wenn nichts ausgewählt ist, werden die Status **All** verwendet.",
    "Fetching events":
      "Abrufen von Ereignissen",
    "File hashes":
      "Datei-Hashes",
    "File Malicious Threshold. Minimum number of positive results from VT scanners to consider the file malicious.":
      "Schwellenwert für bösartige Dateien. Mindestanzahl positiver Ergebnisse von VT-Scannern, ab der die Datei als bösartig gilt.",
    "File Relationships":
      "Datei-Beziehungen",
    "File security scanning, DLP policy enforcement, and sensitive content detection for OneDrive":
      "Dateisicherheitsscans, Durchsetzung von DLP-Richtlinien und Erkennung vertraulicher Inhalte für OneDrive",
    "File Suspicious Threshold. Minimum number of positive and suspicious results from VT scanners to consider the file suspicious.":
      "Schwellenwert für verdächtige Dateien. Mindestanzahl positiver und verdächtiger Ergebnisse von VT-Scannern, ab der die Datei als verdächtig gilt.",
    "File Threshold. Minimum number of positive results from VT scanners to consider the file malicious.":
      "Schwellenwert für Dateien. Mindestanzahl positiver Ergebnisse von VT-Scannern, ab der die Datei als bösartig gilt.",
    "File transfer and execute commands via ssh, on remote machines":
      "Dateiübertragung und Befehlsausführung über SSH auf Remote-Rechnern",
    "Fill anything in the “Username” fill box. Use you API key in the password fill box.":
      "Geben Sie im Feld „Username“ einen beliebigen Wert ein. Verwenden Sie im Passwortfeld Ihren API-Schlüssel.",
    "Fill in the ‘UPN Password’ parameter - the user’s Microsoft 365 password (the regular sign-in password for that UPN).":
      "Füllen Sie den Parameter ‘UPN Password’ mit dem Microsoft-365-Passwort des Benutzers aus (dem regulären Anmeldepasswort für diesen UPN).",
    "Fill in the ‘UPN’ parameter in the integration configuration.":
      "Füllen Sie den Parameter ‘UPN’ in der Integrationskonfiguration aus.",
    "Fill in the UPN parameter in the integration configuration.":
      "Füllen Sie den Parameter UPN in der Integrationskonfiguration aus.",
    "Fill in the UPN, App ID, and Tenant ID parameters in the integration configuration.":
      "Füllen Sie die Parameter UPN, App ID und Tenant ID in der Integrationskonfiguration aus.",
    "Filter audit logs by type(s). If not specified, all audit log types will be fetched.":
      "Filtert Audit-Protokolle nach Typ. Wenn nichts angegeben ist, werden alle Audit-Protokolltypen abgerufen.",
    "Filter by entity type. If not selected, it will fetch all events detections.":
      "Filtert nach Entitätstyp. Wenn nichts ausgewählt ist, werden alle Ereigniserkennungen abgerufen.",
    "Filter by killchain stage":
      "Nach Kill-Chain-Phase filtern",
    "Filter by threat category":
      "Nach Bedrohungskategorie filtern",
    "Filter by threat level (LOW, MEDIUM, or HIGH)":
      "Nach Bedrohungsstufe filtern (LOW, MEDIUM oder HIGH)",
    "Filter the Detections by the “Entity Type”(Account and Host).":
      "Filtern Sie die Erkennungen nach „Entity Type“ (Account und Host).",
    "Firewall: Configure the vsys":
      "Firewall: vsys konfigurieren",
    "First fetch time range":
      "Zeitbereich des ersten Abrufs",
    "First fetch timestamp (<number> <time unit>, e.g., 12 hours, 7 days) or a date or epoch timestamp.":
      "Zeitstempel des ersten Abrufs (<number> <time unit>, z. B. 12 hours, 7 days) oder ein Datum bzw. Epoch-Zeitstempel.",
    "First fetch timestamp (<number> <time unit>. For example, 12 hours, 7 days)":
      "Zeitstempel des ersten Abrufs (<number> <time unit>. Zum Beispiel 12 hours, 7 days)",
    "First fetch timestamp (e.g., 7 days)":
      "Zeitstempel des ersten Abrufs (z. B. 7 days)",
    "First fetch timestamp (Investigations)":
      "Zeitstempel des ersten Abrufs (Investigations)",
    "Follow these instructions to find an API key that corresponds to a particular Carbon Black user account.":
      "Befolgen Sie diese Anweisungen, um den API-Schlüssel zu finden, der einem bestimmten Carbon-Black-Benutzerkonto entspricht.",
    "Follow these steps to add custom fields to the User Profile indicator.":
      "Führen Sie diese Schritte aus, um dem Indikator User Profile benutzerdefinierte Felder hinzuzufügen.",
    "Following link describes the process of how one can obtain a Personal Access Token in IdentityNow.":
      "Der folgende Link beschreibt, wie ein persönliches Zugriffstoken in IdentityNow abgerufen werden kann.",
    "For an API key, go to your user profile at your ThreatCentral account, and press Manage API Keys, where you can generate a new API key.":
      "Um einen API-Schlüssel zu erhalten, rufen Sie Ihr Benutzerprofil in Ihrem ThreatCentral-Konto auf und klicken Sie auf Manage API Keys, wo Sie einen neuen API-Schlüssel generieren können.",
    "For API 1.0":
      "Für API 1.0",
    "For API 2.0":
      "Für API 2.0",
    "For data removal: the authenticated company must have remaining Black Market Data Removal credits.":
      "Für die Datenentfernung: Das authentifizierte Unternehmen muss über verbleibende Black Market Data Removal-Guthaben verfügen.",
    "For detailed documentation, see the integration README.":
      "Ausführliche Dokumentation finden Sie in der README der Integration.",
    "For example, \"example@mail.com\"":
      "Zum Beispiel „example@mail.com“",
    "For example, using the “malicious_executables” will fetch only notifications caught by malicious_executables ruleset.":
      "Wenn Sie beispielsweise „malicious_executables“ verwenden, werden nur Benachrichtigungen abgerufen, die vom Regelsatz malicious_executables erfasst wurden.",
    "For example: 01 Oct 2025, 01 Mar 2021 04:45:33, 2025-12-17T14:05:44Z.":
      "Zum Beispiel: 01 Oct 2025, 01 Mar 2021 04:45:33, 2025-12-17T14:05:44Z.",
    "For information on getting your Okta API token, see the Okta documentation.":
      "Informationen zum Abrufen Ihres Okta-API-Tokens finden Sie in der Okta-Dokumentation.",
    "For more information about the service activation, visit the following link: https://docs.paloaltonetworks.com/ngfw/aiops/about/activate-aiops-for-ngfw#activate-aiops-for-ngfw_section_xjs_p55_fyb":
      "Weitere Informationen zur Aktivierung des Dienstes finden Sie unter folgendem Link: https://docs.paloaltonetworks.com/ngfw/aiops/about/activate-aiops-for-ngfw#activate-aiops-for-ngfw_section_xjs_p55_fyb",
    "For more information regarding the JSON objects, please see Proofpoint TRAP documentation under “JSON Alert Source 2.0”.":
      "Weitere Informationen zu den JSON-Objekten finden Sie in der Proofpoint-TRAP-Dokumentation unter „JSON Alert Source 2.0“.",
    "For Recorded Future Sandbox, the token is provided by going to the Recorded Future Portal -> Tools -> Malware Analysis -> API Keys":
      "Für Recorded Future Sandbox erhalten Sie das Token unter Recorded Future Portal -> Tools -> Malware Analysis -> API Keys",
    "For secure access to Prisma Cloud API, you need a Prisma Cloud API access key. An access key includes an Access Key ID and a Secret Key.":
      "Für den sicheren Zugriff auf die Prisma-Cloud-API benötigen Sie einen Prisma-Cloud-API-Zugriffsschlüssel. Ein Zugriffsschlüssel besteht aus einer Access Key ID und einem Secret Key.",
    "For sending messages using the ChatBot app and mirroring":
      "Zum Senden von Nachrichten über die ChatBot-App und zur Spiegelung",
    "For the configuration, you should configure the server details and credentials either as parameters or as command arguments.":
      "Für die Konfiguration müssen Sie die Serverdetails und Anmeldedaten entweder als Parameter oder als Befehlsargumente konfigurieren.",
    "For the configuration, you should either configure server details as parameters, or as command inputs.":
      "Für die Konfiguration müssen Sie die Serverdetails entweder als Parameter oder als Befehlseingaben konfigurieren.",
    "For the JWT method (deprecated)":
      "Für die JWT-Methode (veraltet)",
    "For XSOAR users below 6.0.0 version, using ‘Pull from instance’ option when creating a new mapper is not supported.":
      "Für XSOAR-Benutzer mit einer Version unter 6.0.0 wird die Option ‘Pull from instance’ beim Erstellen eines neuen Mappers nicht unterstützt.",
    "Force Encryption":
      "Verschlüsselung erzwingen",
    "Force encryption on the connection, requires SMBv3 or newer on the remote server. Default is \"false\".":
      "Erzwingt die Verschlüsselung der Verbindung; erfordert SMBv3 oder neuer auf dem Remote-Server. Der Standardwert ist „false“.",
    "Format: `https://{hostName}:{port}`":
      "Format: `https://{hostName}:{port}`",
    "From `brokercerts.crt` file.":
      "Aus der Datei `brokercerts.crt`.",
    "From `client.crt` file.":
      "Aus der Datei `client.crt`.",
    "From `client.key` file. Make sure that the type of the field is not `encrypted` when filling it out.":
      "Aus der Datei `client.key`. Stellen Sie beim Ausfüllen sicher, dass der Feldtyp nicht `encrypted` ist.",
    "Full Incident Enrichment":
      "Vollständige Incident-Anreicherung",
    "Full Incident Enrichment - Clear this checkbox to disable QRadar offense enrichment performed in fetch-incidents. This might help if you encounter a timeout while fetching new incidents.":
      "Vollständige Incident-Anreicherung: Deaktivieren Sie dieses Kontrollkästchen, um die in fetch-incidents durchgeführte Anreicherung von QRadar-Offenses zu deaktivieren. Dies kann hilfreich sein, wenn beim Abrufen neuer Incidents ein Timeout auftritt.",
    "Fully Qualified Domain Name (FQDN) - used in EHLO":
      "Vollqualifizierter Domänenname (FQDN): wird in EHLO verwendet",
    "Generate a RiskSense API Token":
      "RiskSense-API-Token generieren",
    "Generate a self-signed certificate":
      "Selbstsigniertes Zertifikat generieren",
    "Generate an API key, copy it, and then paste it in the integration configuration.":
      "Generieren Sie einen API-Schlüssel, kopieren Sie ihn und fügen Sie ihn in die Integrationskonfiguration ein.",
    "Get a VirusTotal API Key":
      "VirusTotal-API-Schlüssel erhalten",
    "Get incident attachments":
      "Incident-Anhänge abrufen",
    "Get the BloodHound Enterprise API Token ID and Token Key":
      "API-Token-ID und Token-Schlüssel von BloodHound Enterprise erhalten",
    "Get token API documentation":
      "Dokumentation zur Token-API abrufen",
    "Get Your Okta API Token":
      "Okta-API-Token erhalten",
    "Get Your Slack API Token":
      "Slack-API-Token erhalten",
    "Get your Tenzai API key":
      "Tenzai-API-Schlüssel erhalten",
    "Getting Access":
      "Zugriff erhalten",
    "Go to the Okta IAM integration instance and in the mapper textbox, replace the name of the default mapper with the custom mapper you created.":
      "Wechseln Sie zur Okta-IAM-Integrationsinstanz und ersetzen Sie im Textfeld für den Mapper den Namen des Standard-Mappers durch den von Ihnen erstellten benutzerdefinierten Mapper.",
    "Go to the ServiceNow IAM integration instance and in the mapper textbox, replace the name of the default mapper with the custom mapper you created.":
      "Wechseln Sie zur ServiceNow-IAM-Integrationsinstanz und ersetzen Sie im Textfeld für den Mapper den Namen des Standard-Mappers durch den von Ihnen erstellten benutzerdefinierten Mapper.",
    "Grant the Demisto Bot Permissions in Microsoft Graph":
      "Erteilen Sie dem Demisto Bot Berechtigungen in Microsoft Graph",
    "Granting JWT to admin is not allowed.":
      "Das Gewähren von JWT an Administratoren ist nicht zulässig.",
    "Host name that should appear in certificate":
      "Hostname, der im Zertifikat erscheinen soll",
    "Host URL":
      "Host-URL",
    "Hostname, IP address, or server URL":
      "Hostname, IP-Adresse oder Server-URL",
    "Hours before first fetch to retrieve incidents":
      "Stunden vor dem ersten Abruf, für die Incidents abgerufen werden",
    "How many hours ago":
      "Wie viele Stunden zurück",
    "How many incidents to fetch each time":
      "Anzahl der Incidents, die jedes Mal abgerufen werden",
    "How to Build a Query":
      "So erstellen Sie eine Abfrage",
    "How to Create a Splunk Authentication Token":
      "So erstellen Sie ein Splunk-Authentifizierungstoken",
    "How to fetch assets and vulnerabilities":
      "So rufen Sie Assets und Schwachstellen ab",
    "How to get your Panorays API Key":
      "So erhalten Sie Ihren Panorays-API-Schlüssel",
    "How to get your Vectra Client ID and Client Secret Key":
      "So erhalten Sie Ihre Vectra-Client-ID und den Client-Secret-Key",
    "How To get your VMRay API Key":
      "So erhalten Sie Ihren VMRay-API-Schlüssel",
    "How to retrieve a Palo Alto Networks WildFire Reports API key":
      "So rufen Sie einen API-Schlüssel für Palo Alto Networks WildFire-Berichte ab",
    "How to retrieve a WildFire API key":
      "So rufen Sie einen WildFire-API-Schlüssel ab",
    "However, there is a trade-off: the larger the window, the longer fetch queries will take to complete.":
      "Dabei gibt es jedoch einen Kompromiss: Je größer das Fenster, desto länger dauert der Abschluss von Abrufabfragen.",
    "However, there is obviously a price - the larger the window, the longer it will take for fetch queries to complete.":
      "Allerdings gibt es offensichtlich einen Preis: Je größer das Fenster, desto länger dauert der Abschluss von Abrufabfragen.",
    "However, they may not suffice for viewing records in some tables.":
      "Sie reichen jedoch möglicherweise nicht aus, um Datensätze in einigen Tabellen anzuzeigen.",
    "HR use Workday to manage CRUD operations for employees in the organization. It is standard practice for HR to generate reports for these CRUD operations. For example, running a weekly report that captures all new employees and terminated employees, or a daily report that captures updates to existing employee profiles (e.g., new mailing address or phone number).":
      "Die Personalabteilung verwendet Workday, um CRUD-Vorgänge für Mitarbeitende in der Organisation zu verwalten. Es ist übliche Praxis, dass die Personalabteilung Berichte für diese CRUD-Vorgänge erstellt. Beispiele sind ein wöchentlicher Bericht, der alle neuen und ausgeschiedenen Mitarbeitenden erfasst, oder ein täglicher Bericht, der Aktualisierungen bestehender Mitarbeiterprofile erfasst (z. B. neue Postanschrift oder Telefonnummer).",
    "HTTP request timeout (seconds)":
      "Zeitüberschreitung für HTTP-Anfragen (Sekunden)",
    "HTTP Request Timeout (Specify the time interval in seconds. All the RiskSense API calls would timeout if the response is not returned within the configured time interval).":
      "Zeitüberschreitung für HTTP-Anfragen (Geben Sie das Zeitintervall in Sekunden an. Alle RiskSense-API-Aufrufe laufen ab, wenn die Antwort nicht innerhalb des konfigurierten Zeitintervalls zurückgegeben wird).",
    "Human Readable Output":
      "Menschenlesbare Ausgabe",
    "IAM Configuration":
      "IAM-Konfiguration",
    "ID (received from the admin consent - see Detailed Instructions (?)":
      "ID (vom Administratorkonsens erhalten - siehe detaillierte Anweisungen (?)",
    "Identify the fields list from the Splunk query and save it to a local file.":
      "Ermitteln Sie die Feldliste aus der Splunk-Abfrage und speichern Sie sie in einer lokalen Datei.",
    "Identity enrichment lookup tables":
      "Lookup-Tabellen zur Identitätsanreicherung",
    "Identity posture management, directory sync, and security posture monitoring for Entra ID":
      "Identitäts-Posture-Management, Verzeichnissynchronisierung und Überwachung der Sicherheitslage für Entra ID",
    "Identity search enrichment":
      "Anreicherung der Identitätssuche",
    "IdentityIQ Server URL (e.g. https://identityiq-server.com/identityiq)":
      "IdentityIQ-Server-URL (z. B. https://identityiq-server.com/identityiq)",
    "IdentityNow Server URL (e.g. https://org.api.identitynow.com)":
      "IdentityNow-Server-URL (z. B. https://org.api.identitynow.com)",
    "If both body and htmlBody are provided, we will create an alternative envelope":
      "Wenn sowohl body als auch htmlBody angegeben werden, wird ein alternativer Umschlag erstellt",
    "If checked, the fetch incidents command will sample (at most) five incidents. Use only to sample incidents for classification & mapping.":
      "Wenn aktiviert, entnimmt der Befehl zum Abrufen von Incidents (höchstens) fünf Incidents als Stichprobe. Verwenden Sie diese Option nur, um Incidents für Klassifizierung und Mapping als Stichprobe zu entnehmen.",
    "If enabled, the integration will activate the command changes after each execution. If disabled, use the 'zia-activate-changes' command to activate Zscaler command changes.":
      "Wenn aktiviert, aktiviert die Integration die Befehlsänderungen nach jeder Ausführung. Wenn deaktiviert, verwenden Sie den Befehl 'zia-activate-changes', um Zscaler-Befehlsänderungen zu aktivieren.",
    "If enabled, the integration will activate the command changes after each execution. If disabled, use the 'zscaler-activate-changes' command to activate Zscaler command changes.":
      "Wenn aktiviert, aktiviert die Integration die Befehlsänderungen nach jeder Ausführung. Wenn deaktiviert, verwenden Sie den Befehl 'zscaler-activate-changes', um Zscaler-Befehlsänderungen zu aktivieren.",
    "If enabled, the integration will log out after executing each command.":
      "Wenn aktiviert, meldet sich die Integration nach der Ausführung jedes Befehls ab.",
    "If Fetch incidents is checked, make sure to enter at least one search field.":
      "Wenn Incidents abrufen aktiviert ist, geben Sie mindestens ein Suchfeld ein.",
    "If not provided, \"host\" or \"system\" should be provided in the command's arguments.":
      "Wenn nicht angegeben, muss „host“ oder „system“ in den Argumenten des Befehls angegeben werden.",
    "If not set, Client ID will be used.":
      "Wenn nicht festgelegt, wird die Client-ID verwendet.",
    "If nothing is selected, **All** severities will be used.":
      "Wenn nichts ausgewählt ist, werden **alle** Schweregrade verwendet.",
    "If nothing is selected, **All** statuses will be used.":
      "Wenn nichts ausgewählt ist, werden **alle** Status verwendet.",
    "If the Detection Status is updated in the Vectra Detection, it will be reflected in the XSOAR incident, or vice versa.":
      "Wenn der Detection Status in der Vectra Detection aktualisiert wird, wird er im XSOAR-Incident widergespiegelt oder umgekehrt.",
    "If the integration was already set with look back > 0, and the look-back is not being increased at any point of time, then those incident duplications would not occur.":
      "Wenn die Integration bereits mit einem Lookback > 0 eingerichtet wurde und der Lookback zu keinem Zeitpunkt erhöht wird, treten diese Incident-Duplikate nicht auf.",
    "If the second method is used, the system will automatically attempt to generate a token. If this attempt fails, it will then revert to using the first method.":
      "Wenn die zweite Methode verwendet wird, versucht das System automatisch, ein Token zu generieren. Schlägt dieser Versuch fehl, wird auf die erste Methode zurückgegriffen.",
    "If the server details were configured both as parameters and as command arguments, the commands argument will be used to set the connection.":
      "Wenn die Serverdetails sowohl als Parameter als auch als Befehlsargumente konfiguriert wurden, wird das Befehlsargument zum Herstellen der Verbindung verwendet.",
    "If true, will not raise an error if the image is corrupt and could not be processed.":
      "Bei true wird kein Fehler ausgelöst, wenn das Bild beschädigt ist und nicht verarbeitet werden konnte.",
    "If you are a multi-tenant user and the body parameters of your login call include a user name and password instead of an access key ID and secret key, then you will also need to provide the Customer name":
      "Wenn Sie ein Multi-Tenant-Benutzer sind und die Body-Parameter Ihres Anmeldeaufrufs anstelle einer Zugriffsschlüssel-ID und eines geheimen Schlüssels einen Benutzernamen und ein Kennwort enthalten, müssen Sie zusätzlich den Customer name angeben",
    "If you are a multi-tenant user you will also need to provide the customerName.":
      "Wenn Sie ein Multi-Tenant-Benutzer sind, müssen Sie zusätzlich customerName angeben.",
    "If you previously had an API V1 configured based on the credentials obtained from this method, refer to the link above to gain new credentials with the relevant permissions.":
      "Wenn Sie zuvor eine API V1 auf Grundlage der mit dieser Methode erhaltenen Anmeldedaten konfiguriert hatten, finden Sie über den obigen Link Informationen zum Erhalt neuer Anmeldedaten mit den entsprechenden Berechtigungen.",
    "If you want to close a detection in Vectra when the incident is closed in XSOAR, check the “Close Detection on Incident Closure” option. This option is only used when the mirroring direction is set to ‘Outgoing’ or ‘Incoming And Outgoing’.":
      "Wenn Sie eine Detection in Vectra schließen möchten, wenn der Incident in XSOAR geschlossen wird, aktivieren Sie die Option „Close Detection on Incident Closure“. Diese Option wird nur verwendet, wenn die Spiegelungsrichtung auf ‚Outgoing‘ oder ‚Incoming And Outgoing‘ festgelegt ist.",
    "If you want to reopen a detection in Vectra when the incident is reopened in XSOAR, check the “Open Detection on Incident Reopen” option. This option is only used when the mirroring direction is set to ‘Outgoing’ or ‘Incoming And Outgoing’.":
      "Wenn Sie eine Detection in Vectra wieder öffnen möchten, wenn der Incident in XSOAR wieder geöffnet wird, aktivieren Sie die Option „Open Detection on Incident Reopen“. Diese Option wird nur verwendet, wenn die Spiegelungsrichtung auf ‚Outgoing‘ oder ‚Incoming And Outgoing‘ festgelegt ist.",
    "If you want to set the language to en-US, use en-GB instead.":
      "Wenn Sie die Sprache auf en-US festlegen möchten, verwenden Sie stattdessen en-GB.",
    "If you want to use the mirror mechanism and you’re using custom mappers, then the incoming mapper must contain the following fields: dbotMirrorDirection, dbotMirrorId, dbotMirrorInstance, and dbotMirrorTags.":
      "Wenn Sie den Spiegelungsmechanismus verwenden möchten und benutzerdefinierte Mapper einsetzen, muss der eingehende Mapper die folgenden Felder enthalten: dbotMirrorDirection, dbotMirrorId, dbotMirrorInstance und dbotMirrorTags.",
    "If you wish to configure a mapper, wait for the integration to perform the first fetch successfully. This is to make the fetch mechanism logic stable.":
      "Wenn Sie einen Mapper konfigurieren möchten, warten Sie, bis die Integration den ersten Abruf erfolgreich durchgeführt hat. Dadurch wird die Logik des Abrufmechanismus stabil.",
    "Image scanning":
      "Image-Scan",
    "Implement OAuth for Okta":
      "OAuth für Okta implementieren",
    "Implemented in Python to support extensions.":
      "In Python implementiert, um Erweiterungen zu unterstützen.",
    "Import from offset":
      "Ab Offset importieren",
    "Import from partition":
      "Aus Partition importieren",
    "Import from topic":
      "Aus Thema importieren",
    "Important note: resetting the integration cache removes all data about teams, channels, members saved in the integration context. Performing this step requires removing the bot from all teams it was added to.":
      "Wichtiger Hinweis: Durch das Zurücksetzen des Integrationscache werden alle im Integrationskontext gespeicherten Daten zu Teams, Kanälen und Mitgliedern entfernt. Für diesen Schritt muss der Bot aus allen Teams entfernt werden, zu denen er hinzugefügt wurde.",
    "Important Notes":
      "Wichtige Hinweise",
    "Important: If you want to use the mirror mechanism, the incoming mapper must contain the following fields: dbotMirrorDirection, dbotMirrorId, dbotMirrorInstance":
      "Wichtig: Wenn Sie den Spiegelungsmechanismus verwenden möchten, muss der eingehende Mapper die folgenden Felder enthalten: dbotMirrorDirection, dbotMirrorId, dbotMirrorInstance",
    "Important: The limit value can range from 10 to 200 and must be in multiples of 10.":
      "Wichtig: Der Wert für limit kann zwischen 10 und 200 liegen und muss ein Vielfaches von 10 sein.",
    "In case access is required to an instance in the cloud, use the PEM file provided by the cloud provider.":
      "Wenn Zugriff auf eine Instanz in der Cloud erforderlich ist, verwenden Sie die vom Cloud-Anbieter bereitgestellte PEM-Datei.",
    "In order to add a rule name, use the filter name “alertRule.name”. In order to add a policy name, use the filter name “policy.name”.":
      "Um einen Regelnamen hinzuzufügen, verwenden Sie den Filternamen „alertRule.name“. Um einen Richtliniennamen hinzuzufügen, verwenden Sie den Filternamen „policy.name“.",
    "In order to configure the SIGNL4 pack in Cortex you just need the SIGNL4 team or integration secret (Password). You can find the same in your SIGNL4 web portal under Teams or under Integrations -> Installed -> Inbound Webhook. It is the last part of your webhook URL.":
      "Um das SIGNL4-Paket in Cortex zu konfigurieren, benötigen Sie nur das Team- oder Integrationsgeheimnis von SIGNL4 (Kennwort). Sie finden es in Ihrem SIGNL4-Webportal unter Teams oder unter Integrations -> Installed -> Inbound Webhook. Es ist der letzte Teil Ihrer Webhook-URL.",
    "In order to ensure the mirroring works as expected, mappers are required, both for incoming and outgoing, to map the expected fields in Cortex and Splunk.":
      "Damit die Spiegelung wie erwartet funktioniert, sind sowohl für eingehende als auch für ausgehende Daten Mapper erforderlich, die die erwarteten Felder in Cortex und Splunk zuordnen.",
    "In order to use the Cortex application, use the default application ID.":
      "Um die Cortex-Anwendung zu verwenden, verwenden Sie die Standard-Anwendungs-ID.",
    "In order to use the Cortex Azure application, use the default application ID (3307a0ab-612c-47af-b3b5-8208247562db).":
      "Um die Cortex-Azure-Anwendung zu verwenden, verwenden Sie die Standard-Anwendungs-ID (3307a0ab-612c-47af-b3b5-8208247562db).",
    "In order to use the rest of the commands, you are required to provide: App ID, App Key, Access Key & Secret Key.":
      "Um die übrigen Befehle zu verwenden, müssen Sie Folgendes angeben: App ID, App Key, Access Key & Secret Key.",
    "In order to use this integration, you need to enter your Zoom credentials in the relevant integration instance parameters.":
      "Um diese Integration zu verwenden, müssen Sie Ihre Zoom-Anmeldedaten in die entsprechenden Parameter der Integrationsinstanz eingeben.",
    "In PEM format. Required and used if OAuth 2.0 is used for authentication. See detailed instructions on the 'Help' tab.":
      "Im PEM-Format. Erforderlich und verwendet, wenn OAuth 2.0 zur Authentifizierung verwendet wird. Weitere Informationen finden Sie in den detaillierten Anweisungen auf der Registerkarte 'Help'.",
    "In some hosted ElasticSearch environments, the standard ElasticSearch client is not supported. If you encounter any related client issues, please consider using the OpenSearch client type.":
      "In einigen gehosteten ElasticSearch-Umgebungen wird der standardmäßige ElasticSearch-Client nicht unterstützt. Wenn Sie damit zusammenhängende Client-Probleme feststellen, sollten Sie den Clienttyp OpenSearch verwenden.",
    "In Splunk, there is often a delay between the time an incident is created (the event’s “occurrence time”) and the time it is actually searchable in Splunk and visible in the index (the event’s “index time”).":
      "In Splunk gibt es oft eine Verzögerung zwischen dem Zeitpunkt, zu dem ein Incident erstellt wird (der „occurrence time“ des Ereignisses), und dem Zeitpunkt, zu dem er in Splunk tatsächlich durchsuchbar und im Index sichtbar ist (der „index time“ des Ereignisses).",
    "In Strata Cloud Manager, navigate to AI Security > API Applications":
      "Navigieren Sie in Strata Cloud Manager zu AI Security > API Applications",
    "In the Silent Push Profile menu, click Organisation, and go to the API tab.":
      "Klicken Sie im Silent-Push-Menü Profile auf Organisation und wechseln Sie zur Registerkarte API.",
    "In the Summary indexing section, select the summary index, and enter the {key:value} pair for Cortex classification.":
      "Wählen Sie im Abschnitt Summary indexing den Summary-Index aus und geben Sie das Paar {key:value} für die Cortex-Klassifizierung ein.",
    "In this case, all connections to Microsoft Security and Compliance PowerShell will use interactive delegated authentication.":
      "In diesem Fall verwenden alle Verbindungen zu Microsoft Security and Compliance PowerShell die interaktive delegierte Authentifizierung.",
    "Incident Asset Enrichment":
      "Anreicherung von Incident-Assets",
    "Incident Asset Enrichment - When enabled, fetched offenses will also contain correlated assets.":
      "Anreicherung von Incident-Assets - Wenn aktiviert, enthalten abgerufene Offenses auch korrelierte Assets.",
    "Incident Enrichment (Asset) - When enabled, fetched offenses will also contain correlated assets.":
      "Incident-Anreicherung (Assets) - Wenn aktiviert, enthalten abgerufene Offenses auch korrelierte Assets.",
    "Incident Enrichment (IP) - When enabled, fetched incidents IP values (local source addresses and local destination addresses) will be fetched from QRadar instead of their ID values.":
      "Incident-Anreicherung (IP) - Wenn aktiviert, werden die IP-Werte abgerufener Incidents (lokale Quelladressen und lokale Zieladressen) anstelle ihrer ID-Werte aus QRadar abgerufen.",
    "Incident IP Enrichment":
      "Anreicherung der Incident-IP",
    "Incident IP Enrichment - When enabled, fetched incidents IP values (local source addresses and local destination addresses) will be fetched from QRadar instead of their ID values.":
      "Anreicherung der Incident-IP - Wenn aktiviert, werden die IP-Werte abgerufener Incidents (lokale Quelladressen und lokale Zieladressen) anstelle ihrer ID-Werte aus QRadar abgerufen.",
    "Incident management — Retrieve and change the incident status.":
      "Incident-Verwaltung — Rufen Sie den Incident-Status ab und ändern Sie ihn.",
    "Incident Mirroring":
      "Incident-Spiegelung",
    "Incident statuses to fetch":
      "Abzurufende Incident-Status",
    "Incident Type":
      "Incident-Typ",
    "Incidents":
      "Incidents",
    "Incidents channel":
      "Incident-Kanal",
    "Incidents Filter":
      "Incident-Filter",
    "Incoming - Any changes in Splunk findings (finding’s status, status_label, urgency, comments, and owner) will be reflected in Cortex incidents.":
      "Eingehend - Alle Änderungen an Splunk-Findings (status, status_label, urgency, comments und owner des Findings) werden in Cortex-Incidents widergespiegelt.",
    "Incoming - Any changes in Splunk notables (notable’s status, status_label, urgency, comments, and owner) will be reflected in Cortex incidents.":
      "Eingehend - Alle Änderungen an Splunk-Notables (status, status_label, urgency, comments und owner des Notables) werden in Cortex-Incidents widergespiegelt.",
    "Incoming - Mirrors changes from the Vectra RUX Detection into the Cortex incident.":
      "Eingehend - Spiegelt Änderungen aus Vectra RUX Detection in den Cortex-Incident.",
    "Incoming and Outgoing":
      "Eingehend und ausgehend",
    "Incoming And Outgoing - Changes in Cortex incidents and Splunk findings will be reflected in both directions.":
      "Eingehend und ausgehend - Änderungen an Cortex-Incidents und Splunk-Findings werden in beide Richtungen widergespiegelt.",
    "Incoming And Outgoing - Changes in Cortex incidents and Splunk notables will be reflected in both directions.":
      "Eingehend und ausgehend - Änderungen an Cortex-Incidents und Splunk-Notables werden in beide Richtungen widergespiegelt.",
    "Incoming And Outgoing - Mirrors changes both Incoming and Outgoing directions on incidents.":
      "Eingehend und ausgehend - Spiegelt Änderungen von Incidents in eingehender und ausgehender Richtung.",
    "Indicator Field":
      "Indikatorfeld",
    "Indicator Thresholds":
      "Schwellenwerte für Indikatoren",
    "Indicator Types":
      "Indikatortypen",
    "Indicators with positive results equal to or higher than half of the threshold value, and lower than the threshold, will be considered suspicious.":
      "Indikatoren mit positiven Ergebnissen, die mindestens die Hälfte des Schwellenwerts erreichen, aber unter dem Schwellenwert liegen, werden als verdächtig eingestuft.",
    "Indicators with positive results equal to or higher than the threshold will be considered malicious.":
      "Indikatoren mit positiven Ergebnissen, die dem Schwellenwert entsprechen oder ihn überschreiten, werden als bösartig eingestuft.",
    "Ingest Incidents from a SIEM Using Splunk article":
      "Artikel zum Erfassen von Incidents aus einem SIEM mit Splunk",
    "Ingests Vectra AI detections as Cortex incidents enriched with entity-level risk prioritization from Attack Signal Intelligence. Priority is persistent and updates as threats evolve - high-risk detections stay surfaced until resolved. Bidirectional synchronization keeps incident state aligned across both platforms in real time.":
      "Erfasst Vectra-AI-Detections als Cortex-Incidents, angereichert mit der Risikopriorisierung auf Entitätsebene von Attack Signal Intelligence. Die Priorität ist persistent und wird bei sich entwickelnden Bedrohungen aktualisiert - Detections mit hohem Risiko bleiben bis zur Behebung sichtbar. Die bidirektionale Synchronisierung hält den Incident-Status auf beiden Plattformen in Echtzeit abgeglichen.",
    "Initial Fetch":
      "Erster Abruf",
    "Initial Fetch Interval (In minutes, used only for first fetch or after Reset last run)":
      "Intervall für den ersten Abruf (in Minuten, wird nur für den ersten Abruf oder nach Reset last run verwendet)",
    "Initial fetching history (in minutes)":
      "Verlauf des ersten Abrufs (in Minuten)",
    "Input the API key to access the sandbox.":
      "Geben Sie den API-Schlüssel für den Zugriff auf die Sandbox ein.",
    "Input the url of SecneurX Analysis server.":
      "Geben Sie die URL des SecneurX-Analysis-Servers ein.",
    "Install the Workflows app in Microsoft Teams":
      "Workflows-App in Microsoft Teams installieren",
    "Instance Configuration":
      "Instanzkonfiguration",
    "Instance Date Format":
      "Datumsformat der Instanz",
    "Integrate Cloud Security with your MongoDB Atlas Account to gain comprehensive visibility into any data and posture risk existing in your MongoDB Atlas environment. This integration enables automated scanning of all assets in MongoDB Atlas, including data classification and risk assessment.":
      "Integrieren Sie Cloud Security mit Ihrem MongoDB-Atlas-Konto, um umfassende Transparenz über alle Daten- und Posture-Risiken in Ihrer MongoDB-Atlas-Umgebung zu erhalten. Diese Integration ermöglicht das automatisierte Scannen aller Assets in MongoDB Atlas, einschließlich Datenklassifizierung und Risikobewertung.",
    "Integrate Cloud Security with your Snowflake Account to gain comprehensive visibility into any data and posture risk existing in your Snowflake environment.This integration enables automated scanning of all assets in Snowflake,including data classification and risk assessment.":
      "Integrieren Sie Cloud Security mit Ihrem Snowflake-Konto, um umfassende Transparenz über alle Daten- und Posture-Risiken in Ihrer Snowflake-Umgebung zu erhalten. Diese Integration ermöglicht das automatisierte Scannen aller Assets in Snowflake, einschließlich Datenklassifizierung und Risikobewertung.",
    "Integration documentation":
      "Integrationsdokumentation",
    "Integration flow":
      "Integrationsablauf",
    "Integration with Intel Security’s ePolicy Orchestrator using the official API.":
      "Integration mit ePolicy Orchestrator von Intel Security über die offizielle API.",
    "Interactive terminal mode":
      "Interaktiver Terminalmodus",
    "Investigations fetch query":
      "Abfrage zum Abrufen von Untersuchungen",
    "IP Malicious Threshold. Minimum number of positive results from VT scanners to consider the IP malicious.":
      "Schwellenwert für bösartige IPs. Mindestanzahl positiver Ergebnisse von VT-Scannern, um die IP als bösartig einzustufen.",
    "IP Relationships":
      "IP-Beziehungen",
    "IP Suspicious Threshold. Minimum number of positive and suspicious results from VT scanners to consider the IP suspicious.":
      "Schwellenwert für verdächtige IPs. Mindestanzahl positiver und verdächtiger Ergebnisse von VT-Scannern, um die IP als verdächtig einzustufen.",
    "IP Threshold. Minimum number of positive results from VT scanners to consider the IP malicious.":
      "IP-Schwellenwert. Mindestanzahl positiver Ergebnisse von VT-Scannern, um die IP als bösartig einzustufen.",
    "IP Threshold. Minimum risk score from ThreatX to consider the IP malicious.":
      "IP-Schwellenwert. Minimaler Risikowert von ThreatX, ab dem die IP als bösartig eingestuft wird.",
    "JWT Authentication":
      "JWT-Authentifizierung",
    "JWT Authentication.":
      "JWT-Authentifizierung.",
    "JWT Signing Algorithm":
      "JWT-Signaturalgorithmus",
    "Keep the defaults for fetch limit, first fetch timestamp, earliest time to fetch, and latest time to fetch.":
      "Behalten Sie die Standardwerte für das Abruflimit, den Zeitstempel des ersten Abrufs, den frühesten Abrufzeitpunkt und den spätesten Abrufzeitpunkt bei.",
    "Keep the Get notable events EQ query as is, as we use the Notable macro when ingesting events. You can create a more granular search by specifying specific conditions such as specific security domain, event ID, etc.":
      "Belassen Sie die Abfrage Get notable events EQ unverändert, da wir beim Erfassen von Ereignissen das Notable-Makro verwenden. Sie können eine detailliertere Suche erstellen, indem Sie bestimmte Bedingungen angeben, z. B. eine bestimmte Sicherheitsdomäne, eine Ereignis-ID usw.",
    "Kenna API key":
      "Kenna-API-Schlüssel",
    "Key (received from the admin consent - see Detailed Instructions (?)":
      "Schlüssel (vom Administratorkonsens erhalten - siehe detaillierte Anweisungen (?)",
    "Key Algorithms":
      "Schlüsselalgorithmen",
    "Key Features":
      "Hauptfunktionen",
    "Key ID":
      "Schlüssel-ID",
    "Key or Client Secret (can be used instead of Certificate Thumbprint and Private Key)":
      "Schlüssel oder Client-Secret (kann anstelle von Zertifikatsfingerabdruck und privatem Schlüssel verwendet werden)",
    "Kibana API Port":
      "Kibana-API-Port",
    "Languages":
      "Sprachen",
    "Last Incident ID (for initial fetch)":
      "ID des letzten Incidents (für den ersten Abruf)",
    "Last Run":
      "Letzte Ausführung",
    "Lastly, copy the API key.":
      "Kopieren Sie abschließend den API-Schlüssel.",
    "Limit of indicators to fetch from livehunt notification. Max 40.":
      "Limit der Indikatoren, die aus der Livehunt-Benachrichtigung abgerufen werden. Maximal 40.",
    "Limit of indicators to fetch from retrohunt job results.":
      "Limit der Indikatoren, die aus den Ergebnissen des Retrohunt-Jobs abgerufen werden.",
    "Limitations":
      "Einschränkungen",
    "Limitions":
      "Einschränkungen",
    "List of domains to block":
      "Liste der zu blockierenden Domänen",
    "Lists all of the security vulnerabilities for various products (OS,Applications) etc)":
      "Listet alle Sicherheitslücken verschiedener Produkte auf (Betriebssystem, Anwendungen usw.)",
    "Located in the Firewall URL; by default of PAN-OS it is vsys1":
      "Befindet sich in der Firewall-URL; standardmäßig ist es in PAN-OS vsys1",
    "Located in the Panorama UI. Go to Panorama, Device Groups and select the desired Device Group":
      "Befindet sich in der Panorama-Benutzeroberfläche. Wechseln Sie zu Panorama, Device Groups und wählen Sie die gewünschte Device Group aus",
    "Log access — Access log files. You can either provide the client log access API or add a syslog receiver.":
      "Protokollzugriff — Zugriff auf Protokolldateien. Sie können entweder die Client-API für den Protokollzugriff angeben oder einen Syslog-Empfänger hinzufügen.",
    "Log in to Kibana.":
      "Melden Sie sich bei Kibana an.",
    "Log in to the Carbon Black console as the user for which you want to get the API key.":
      "Melden Sie sich bei der Carbon-Black-Konsole als der Benutzer an, für den Sie den API-Schlüssel abrufen möchten.",
    "Log in to the Vectra UI as this local user.":
      "Melden Sie sich als dieser lokale Benutzer bei der Vectra-Benutzeroberfläche an.",
    "Log in to your (Kenna account)[https://app.kennasecurity.com].":
      "Melden Sie sich bei Ihrem (Kenna-Konto)[https://app.kennasecurity.com] an.",
    "Log in to your BloodHound Enterprise (BHE) tenant.":
      "Melden Sie sich bei Ihrem BloodHound-Enterprise-Tenant (BHE) an.",
    "Log in to your Magnet Automate interface.":
      "Melden Sie sich bei Ihrer Magnet-Automate-Oberfläche an.",
    "Log in to your Panorays platform.":
      "Melden Sie sich bei Ihrer Panorays-Plattform an.",
    "Log in to your Splunk instance as an administrator":
      "Melden Sie sich als Administrator bei Ihrer Splunk-Instanz an",
    "Log in to your VirusTotal console.":
      "Melden Sie sich bei Ihrer VirusTotal-Konsole an.",
    "Log Type Query":
      "Abfrage nach Protokolltyp",
    "Log Type Query Examples":
      "Beispiele für Abfragen nach Protokolltyp",
    "Log Type Query.":
      "Abfrage nach Protokolltyp.",
    "Login to the RiskSense platform.":
      "Melden Sie sich bei der RiskSense-Plattform an.",
    "Long running instance enabled":
      "Langlaufende Instanz aktiviert",
    "Lookback Parameter Notes":
      "Hinweise zum Lookback-Parameter",
    "Mail server hostname or IP address":
      "Hostname oder IP-Adresse des Mailservers",
    "Maintain a consistent incident lifecycle between Threatmon and XSOAR.":
      "Halten Sie einen konsistenten Incident-Lebenszyklus zwischen Threatmon und XSOAR aufrecht.",
    "Make sure the toggle at the bottom is switched on.":
      "Stellen Sie sicher, dass der Schalter unten eingeschaltet ist.",
    "Manage PingOne users and their authentication settings through the PingOne Management API.":
      "Verwalten Sie PingOne-Benutzer und deren Authentifizierungseinstellungen über die PingOne Management API.",
    "Map the severity of each indicator that will be synced to Cortex.":
      "Ordnen Sie den Schweregrad jedes Indikators zu, der mit Cortex synchronisiert wird.",
    "Mapping limitations for XSOAR users below 6.0.0":
      "Mapping-Einschränkungen für XSOAR-Benutzer unter 6.0.0",
    "Mattermost server address (e.g. https://1.2.3.4:8065)":
      "Mattermost-Serveradresse (z. B. https://1.2.3.4:8065)",
    "Max fetch":
      "Maximaler Abruf",
    "Max Fetch":
      "Maximaler Abruf",
    "Max incidents per fetch (for each selected Log Type Query)":
      "Maximale Anzahl von Incidents pro Abruf (für jede ausgewählte Abfrage nach Protokolltyp)",
    "Max number of events per incident":
      "Maximale Anzahl von Ereignissen pro Incident",
    "Maximum API requests per minute":
      "Maximale Anzahl von API-Anfragen pro Minute",
    "Maximum events to fetch per fetch":
      "Maximale Anzahl der Ereignisse pro Abruf",
    "Maximum incidents per fetch per type":
      "Maximale Anzahl der Incidents pro Abruf und Typ",
    "Maximum investigations per fetch":
      "Maximale Anzahl der Untersuchungen pro Abruf",
    "Maximum is limited to 200.":
      "Das Maximum ist auf 200 begrenzt.",
    "Maximum number of assets to fetch":
      "Maximale Anzahl der abzurufenden Assets",
    "Maximum number of entries returned from the query, to avoid slow response.":
      "Maximale Anzahl der von der Abfrage zurückgegebenen Einträge, um langsame Antworten zu vermeiden.",
    "Maximum number of events per fetch":
      "Maximale Anzahl der Ereignisse pro Abruf",
    "Maximum number of events to fetch per type per fetch cycle (default: 5000).":
      "Maximale Anzahl der Ereignisse, die pro Typ und Abrufzyklus abgerufen werden (Standard: 5000).",
    "Maximum number of incidents per fetch":
      "Maximale Anzahl der Incidents pro Abruf",
    "Maximum number of incidents to fetch":
      "Maximale Anzahl der abzurufenden Incidents",
    "Maximum Number Of Incidents To Fetch":
      "Maximale Anzahl der abzurufenden Incidents",
    "Maximum number of incidents to fetch per run":
      "Maximale Anzahl der Incidents, die pro Ausführung abgerufen werden",
    "Maximum time to wait for a page to load (in seconds)":
      "Maximale Wartezeit für das Laden einer Seite (in Sekunden)",
    "Maximum time to wait for a rate limiting call in seconds":
      "Maximale Wartezeit für einen Aufruf mit Ratenbegrenzung in Sekunden",
    "McAfee ePO Server URI":
      "URI des McAfee-ePO-Servers",
    "MCP Server Name":
      "MCP-Servername",
    "Methods to Authenticate Microsoft Defender XDR":
      "Methoden zur Authentifizierung von Microsoft Defender XDR",
    "MFA can be used both when using basic authorization and when using OAuth 2.0 authorization, however we strongly recommend using OAuth 2.0 when using MFA.":
      "MFA kann sowohl bei der Basisautorisierung als auch bei der OAuth-2.0-Autorisierung verwendet werden; wir empfehlen jedoch dringend, bei Verwendung von MFA OAuth 2.0 zu nutzen.",
    "MFA can be used both when using basic authorization and when using OAuth 2.0 authorization, however, we strongly recommend using OAuth 2.0 when using MFA.":
      "MFA kann sowohl bei der Basisautorisierung als auch bei der OAuth-2.0-Autorisierung verwendet werden; wir empfehlen jedoch dringend, bei Verwendung von MFA OAuth 2.0 zu nutzen.",
    "Microsoft 365 Defender context":
      "Microsoft-365-Defender-Kontext",
    "Microsoft documentation":
      "Microsoft-Dokumentation",
    "Microsoft integrations (Graph and Azure) in Cortex use Entra ID applications to authenticate with Microsoft APIs. These integrations use OAuth 2.0 and OpenID Connect standard-compliant authentication services, which use an application to sign in or delegate authentication. For more information, see the Microsoft identity platform overview.":
      "Die Microsoft-Integrationen (Graph und Azure) in Cortex verwenden Entra-ID-Anwendungen, um sich bei den Microsoft-APIs zu authentifizieren. Diese Integrationen verwenden Authentifizierungsdienste, die den Standards OAuth 2.0 und OpenID Connect entsprechen und eine Anwendung zur Anmeldung oder zur Delegierung der Authentifizierung nutzen. Weitere Informationen finden Sie unter Microsoft identity platform overview.",
    "Microsoft integrations (Graph and Azure) in Cortex use Entra ID applications to authenticate with Microsoft APIs. These integrations use OAuth 2.0 and OpenID Connect standard-compliant authentication services, which use an Application to sign in or delegate authentication. For more information, see the Microsoft identity platform overview.":
      "Die Microsoft-Integrationen (Graph und Azure) in Cortex verwenden Entra-ID-Anwendungen, um sich bei den Microsoft-APIs zu authentifizieren. Diese Integrationen verwenden Authentifizierungsdienste, die den Standards OAuth 2.0 und OpenID Connect entsprechen und eine Anwendung zur Anmeldung oder zur Delegierung der Authentifizierung nutzen. Weitere Informationen finden Sie unter Microsoft identity platform overview.",
    "Microsoft Management Activity API (O365/Azure Events) should be used to retrieve content records from the various Microsoft Management Activity content types.":
      "Die Microsoft Management Activity API (O365/Azure-Ereignisse) sollte verwendet werden, um Inhaltsdatensätze aus den verschiedenen Microsoft-Management-Activity-Inhaltstypen abzurufen.",
    "Microsoft Teams Documentation":
      "Microsoft-Teams-Dokumentation",
    "Microsoft workflow URL":
      "URL des Microsoft-Workflows",
    "Microsoft’s technical blog":
      "Technischer Blog von Microsoft",
    "Might have to slightly change the existing logic for some of their custom entities configured for Splunk (Playbooks, Mappers, Pre-Processing Rules, Scripts, Classifiers, etc.) in order for them to work with the modified structure of the fetched events.":
      "Möglicherweise muss die vorhandene Logik einiger ihrer für Splunk konfigurierten benutzerdefinierten Entitäten (Playbooks, Mapper, Vorverarbeitungsregeln, Skripte, Klassifikatoren usw.) leicht angepasst werden, damit sie mit der geänderten Struktur der abgerufenen Ereignisse funktionieren.",
    "Mimecast Documentation":
      "Mimecast-Dokumentation",
    "Mimecast uses quotas per period of time (i.e. rate limits) that apply to every API function, per registered App. A typical quota is a number of API calls per unit of time (but could also be expressed as the size of data returned, etc.). When the quota has been exhausted, further requests will fail until the new time period restarts the count of API calls. The rate limit reset value is the length of time in milliseconds before a minimum of 1 API will be permitted.":
      "Mimecast verwendet Kontingente pro Zeitraum (d. h. Ratenbegrenzungen), die für jede API-Funktion pro registrierter App gelten. Ein typisches Kontingent ist eine Anzahl von API-Aufrufen pro Zeiteinheit (kann aber auch als Größe der zurückgegebenen Daten usw. ausgedrückt werden). Ist das Kontingent erschöpft, schlagen weitere Anfragen fehl, bis der neue Zeitraum die Zählung der API-Aufrufe neu beginnt. Der Wert für das Zurücksetzen der Ratenbegrenzung ist die Zeitspanne in Millisekunden, bis mindestens 1 API-Aufruf zulässig ist.",
    "Mimecast uses quotas per period of time (i.e., rate limits) that apply to every API function, per registered app. A typical quota is a number of API calls per unit of time (but could also be expressed as the size of data returned, etc.). When the quota has been exhausted, further requests will fail until the new time period restarts the count of API calls. The rate limit reset value is the length of time in milliseconds before a minimum of one API will be permitted.":
      "Mimecast verwendet Kontingente pro Zeitraum (d. h. Ratenbegrenzungen), die für jede API-Funktion pro registrierter App gelten. Ein typisches Kontingent ist eine Anzahl von API-Aufrufen pro Zeiteinheit (kann aber auch als Größe der zurückgegebenen Daten usw. ausgedrückt werden). Ist das Kontingent erschöpft, schlagen weitere Anfragen fehl, bis der neue Zeitraum die Zählung der API-Aufrufe neu beginnt. Der Wert für das Zurücksetzen der Ratenbegrenzung ist die Zeitspanne in Millisekunden, bis mindestens 1 API-Aufruf zulässig ist.",
    "Min severity [1-4] 1=low":
      "Mindestschweregrad [1-4] 1=niedrig",
    "Mirror Offense and Events":
      "Offenses und Ereignisse spiegeln",
    "Mirror tag for notes":
      "Spiegelungs-Tag für Notizen",
    "Mirroring Direction":
      "Spiegelungsrichtung",
    "Mirroring offenses with events":
      "Spiegelung von Offenses mit Ereignissen",
    "Mirroring Options":
      "Spiegelungsoptionen",
    "Model (optional free text override)":
      "Modell (optionale Überschreibung per Freitext)",
    "MongoDB Atlas (Posture) Instance":
      "MongoDB-Atlas-Instanz (Posture)",
    "MongoDB Atlas Organization ID":
      "MongoDB-Atlas-Organisations-ID",
    "More information can be found on https://cortex.marketplace.pan.dev/marketplace/details/MicrosoftDefenderAdvancedThreatProtection/":
      "Weitere Informationen finden Sie unter https://cortex.marketplace.pan.dev/marketplace/details/MicrosoftDefenderAdvancedThreatProtection/",
    "Most fields are optional and we allow empty subject and empty body":
      "Die meisten Felder sind optional, und Betreff und Text dürfen leer sein",
    "My API Key":
      "Mein API-Schlüssel",
    "My MongoDB Atlas account is protected by network policies":
      "Mein MongoDB-Atlas-Konto ist durch Netzwerkrichtlinien geschützt",
    "My Snowflake account is protected by network policies":
      "Mein Snowflake-Konto ist durch Netzwerkrichtlinien geschützt",
    "Name of the folder from which to fetch incidents (supports Folder ID and sub-folders e.g., Inbox/Phishing)":
      "Name des Ordners, aus dem Incidents abgerufen werden (unterstützt Ordner-ID und Unterordner, z. B. Inbox/Phishing)",
    "Name of the folder or sub-folder from which to fetch incidents":
      "Name des Ordners oder Unterordners, aus dem Incidents abgerufen werden",
    "Name of the instance":
      "Name der Instanz",
    "New notes from the Vectra Detection will be created as notes in the XSOAR incident. Updates to existing notes in the Vectra Detection will create new notes in the XSOAR incident.":
      "Neue Notizen aus der Vectra Detection werden als Notizen im XSOAR-Incident erstellt. Aktualisierungen vorhandener Notizen in der Vectra Detection erstellen neue Notizen im XSOAR-Incident.",
    "New notes from the XSOAR incident will be created as notes in the Vectra Detection. Updates to existing notes in the XSOAR incident will not be reflected in the Vectra Detection.":
      "Neue Notizen aus dem XSOAR-Incident werden als Notizen in der Vectra Detection erstellt. Aktualisierungen vorhandener Notizen im XSOAR-Incident werden in der Vectra Detection nicht berücksichtigt.",
    "Newly fetched incidents will be mirrored in the chosen direction.":
      "Neu abgerufene Incidents werden in die gewählte Richtung gespiegelt.",
    "None - Turns off incident mirroring.":
      "Keine - Deaktiviert die Spiegelung von Incidents.",
    "Note for the autofocus-sample-analysis Command":
      "Hinweis zum Befehl autofocus-sample-analysis",
    "Note that the default query values has some example text in it, make sure to enter a valid query.":
      "Beachten Sie, dass die Standardabfragewerte Beispieltext enthalten. Geben Sie unbedingt eine gültige Abfrage ein.",
    "Note: Cortex recommends you use the Query only application events configured in IAM Configuration option to generate the fetch-incidents query filter. The following following method should be used primarily for debugging purposes.":
      "Hinweis: Cortex empfiehlt, die Option „Query only application events configured in IAM Configuration“ zu verwenden, um den fetch-incidents-Abfragefilter zu generieren. Die folgende Methode sollte hauptsächlich zu Debugging-Zwecken verwendet werden.",
    "Note: If you are using a custom incident type, you also need to create custom corresponding incoming and outgoing mappers.":
      "Hinweis: Wenn Sie einen benutzerdefinierten Incident-Typ verwenden, müssen Sie auch entsprechende benutzerdefinierte eingehende und ausgehende Mapper erstellen.",
    "Note: If you have a TIM license that is up-to-date, you do not need to set up an API key.":
      "Hinweis: Wenn Sie über eine aktuelle TIM-Lizenz verfügen, müssen Sie keinen API-Schlüssel einrichten.",
    "Note: In the example, Splunk Generic is a custom incident type.":
      "Hinweis: Im Beispiel ist Splunk Generic ein benutzerdefinierter Incident-Typ.",
    "Note: JWT authentication method was deprecated by Zoom from June 2023 and not available anymore.":
      "Hinweis: Die JWT-Authentifizierungsmethode wurde von Zoom ab Juni 2023 als veraltet eingestuft und ist nicht mehr verfügbar.",
    "NOTE: The enrichment and mirroring mechanisms use a new default fetch query.":
      "Hinweis: Die Mechanismen für Anreicherung und Spiegelung verwenden eine neue Standardabfrage für den Abruf.",
    "Note: The integration is supported in Cortex and Cortex XSIAM without using an engine.":
      "Hinweis: Die Integration wird in Cortex und Cortex XSIAM ohne Verwendung einer Engine unterstützt.",
    "Note: This is a beta Integration, which lets you implement and test pre-release software. Since the integration is beta, it might contain bugs. Updates to the integration during the beta phase might include non-backward compatible features. We appreciate your feedback on the quality and usability of the integration to help us identify issues, fix them, and continually improve.":
      "Hinweis: Dies ist eine Beta-Integration, mit der Sie Software vor der Veröffentlichung implementieren und testen können. Da die Integration sich in der Beta-Phase befindet, kann sie Fehler enthalten. Aktualisierungen der Integration während der Beta-Phase können nicht abwärtskompatible Funktionen enthalten. Wir freuen uns über Ihr Feedback zur Qualität und Benutzerfreundlichkeit der Integration, damit wir Probleme erkennen, beheben und uns kontinuierlich verbessern können.",
    "Note: This parameter is only used when close detection on incident closer is 'checked' and the mirroring direction is set to 'Outgoing' or 'Incoming And Outgoing'.":
      "Hinweis: Dieser Parameter wird nur verwendet, wenn close detection on incident closer auf ‚checked‘ gesetzt ist und die Spiegelungsrichtung auf ‚Outgoing‘ oder ‚Incoming And Outgoing‘ eingestellt ist.",
    "Note: This parameter is only used when open detection on incident reopen is 'checked' and the mirroring direction is set to 'Outgoing' or 'Incoming And Outgoing'.":
      "Hinweis: Dieser Parameter wird nur verwendet, wenn open detection on incident reopen auf ‚checked‘ gesetzt ist und die Spiegelungsrichtung auf ‚Outgoing‘ oder ‚Incoming And Outgoing‘ eingestellt ist.",
    "Note: This parameter is only used when the mirroring direction is set to 'Outgoing' or 'Incoming And Outgoing'.":
      "Hinweis: Dieser Parameter wird nur verwendet, wenn die Spiegelungsrichtung auf ‚Outgoing‘ oder ‚Incoming And Outgoing‘ eingestellt ist.",
    "Note: This will not affect existing incidents.":
      "Hinweis: Dies hat keine Auswirkungen auf vorhandene Incidents.",
    "Note: When upgrading from v1 (MITRE IDs Feed) to v2 (MITRE ATT&CK) - disabling the MITRE IDs Feed indicator type, and instance are important for the smooth flow of the upgrade.":
      "Hinweis: Beim Upgrade von v1 (MITRE IDs Feed) auf v2 (MITRE ATT&CK) ist es wichtig, den Indikatortyp und die Instanz von MITRE IDs Feed zu deaktivieren, damit das Upgrade reibungslos verläuft.",
    "Notice: Submitting indicators using the following commands of this integration might make the indicator data publicly available.":
      "Hinweis: Das Übermitteln von Indikatoren mit den folgenden Befehlen dieser Integration kann dazu führen, dass die Indikatordaten öffentlich zugänglich werden.",
    "Notifications channel":
      "Benachrichtigungskanal",
    "Notifications channel (You will need to invite the Demisto Bot user to this channel)":
      "Benachrichtigungskanal (Sie müssen den Benutzer Demisto Bot in diesen Kanal einladen)",
    "Number of addresses to enrich per API call":
      "Anzahl der Adressen, die pro API-Aufruf angereichert werden",
    "Number of connection error retries":
      "Anzahl der Wiederholungsversuche bei Verbindungsfehlern",
    "Number of days before hire date to enable Active Directory account":
      "Anzahl der Tage vor dem Einstellungsdatum, an denen das Active-Directory-Konto aktiviert wird",
    "Number of days before hire date to sync hires":
      "Anzahl der Tage vor dem Einstellungsdatum, an denen neue Mitarbeitende synchronisiert werden",
    "Number of Events Per Enrichment Type":
      "Anzahl der Ereignisse pro Anreicherungstyp",
    "Number of incidents per fetch.":
      "Anzahl der Incidents pro Abruf.",
    "Number of maximum Chrome instances to keep running simultaneously.":
      "Maximale Anzahl von Chrome-Instanzen, die gleichzeitig ausgeführt werden.",
    "Number of maximum tabs each Chrome will be allowed to open.":
      "Maximale Anzahl von Tabs, die jeder Chrome öffnen darf.",
    "Number of offenses to pull per API call":
      "Anzahl der Offenses, die pro API-Aufruf abgerufen werden",
    "Number of offenses to pull per API call (max 50)":
      "Anzahl der Offenses, die pro API-Aufruf abgerufen werden (max. 50)",
    "OAuth 2.0 Authorization":
      "OAuth-2.0-Autorisierung",
    "OAuth 2.0 authorization.":
      "OAuth-2.0-Autorisierung.",
    "OAuth2 Credentials":
      "OAuth2-Anmeldeinformationen",
    "Obtain the API Key":
      "API-Schlüssel beschaffen",
    "Obtaining API Credentials":
      "API-Anmeldeinformationen beschaffen",
    "OCR engine.":
      "OCR-Engine.",
    "Offense Enrichment":
      "Offense-Anreicherung",
    "Offenses":
      "Offenses",
    "Okta API Scopes":
      "Okta-API-Bereiche",
    "Okta API tokens are used to authenticate requests to Okta APIs.":
      "Okta-API-Tokens werden zur Authentifizierung von Anfragen an die Okta-APIs verwendet.",
    "Okta documentation":
      "Okta-Dokumentation",
    "Okta URL (https://<domain>.okta.com)":
      "Okta-URL (https://<domain>.okta.com)",
    "Only applies when Findings scope is \"Supplier Findings\". Only findings with these severities create incidents.":
      "Gilt nur, wenn Findings scope auf „Supplier Findings“ gesetzt ist. Nur Findings mit diesen Schweregraden erstellen Incidents.",
    "Only fetch events with this text in the name":
      "Nur Ereignisse abrufen, deren Name diesen Text enthält",
    "Only use Features that are available in On-Premise installations":
      "Nur Funktionen verwenden, die in On-Premise-Installationen verfügbar sind",
    "Open Detection on Incident Reopen":
      "Erkennung beim Wiedereröffnen des Incidents öffnen",
    "Open the Google Authenticator application on your mobile device and make note of the number. The number refreshes every 30 seconds.":
      "Öffnen Sie die Google Authenticator-App auf Ihrem Mobilgerät und notieren Sie sich die Zahl. Die Zahl wird alle 30 Sekunden aktualisiert.",
    "Open the Illusive Management console, navigate to Settings > General, and locate the API KEYS section. Generate a new API key with all permissions and copy the token at the end of the process.":
      "Öffnen Sie die Illusive Management Console, navigieren Sie zu Settings > General und suchen Sie den Abschnitt API KEYS. Generieren Sie einen neuen API-Schlüssel mit allen Berechtigungen und kopieren Sie das Token am Ende des Vorgangs.",
    "OpenDXL documentation":
      "OpenDXL-Dokumentation",
    "Optional":
      "Optional",
    "Optional - Welcome message when creating new incidents using the bot. If left empty (default option) the current default welcome message will be used, i.e., \"Successfully created incident <incident_name>. View it on: <incident_link>\". If the parameter is set to \"no_welcome_message\" value, no message will be displayed. Any non-empty string value set will be used as the custom new incident welcome message.":
      "Optional - Willkommensnachricht beim Erstellen neuer Incidents mit dem Bot. Wenn das Feld leer bleibt (Standardoption), wird die aktuelle Standard-Willkommensnachricht verwendet, d. h. „Successfully created incident <incident_name>. View it on: <incident_link>“. Wenn der Parameter auf den Wert „no_welcome_message“ gesetzt ist, wird keine Nachricht angezeigt. Jeder gesetzte nicht leere Zeichenfolgenwert wird als benutzerdefinierte Willkommensnachricht für neue Incidents verwendet.",
    "Other Sources of WildFire API keys":
      "Weitere Quellen für WildFire-API-Schlüssel",
    "Outgoing - Any changes in Cortex incidents (finding’s status (not status_label), urgency, comments, and owner) will be reflected in Splunk findings.":
      "Outgoing - Alle Änderungen an Cortex-Incidents (Status des Findings (nicht status_label), Dringlichkeit, Kommentare und Besitzer) werden in den Splunk-Findings widergespiegelt.",
    "Outgoing - Any changes in Cortex incidents (notable’s status (not status_label), urgency, comments, and owner) will be reflected in Splunk notables.":
      "Outgoing - Alle Änderungen an Cortex-Incidents (Status des Notable (nicht status_label), Dringlichkeit, Kommentare und Besitzer) werden in den Splunk-Notables widergespiegelt.",
    "Outgoing - Mirrors changes from the Cortex incident to the Vectra RUX Detection.":
      "Outgoing - Spiegelt Änderungen vom Cortex-Incident in die Vectra RUX Detection.",
    "Output results of V1 commands to the context data in the old format":
      "Ergebnisse von V1-Befehlen im alten Format in die Kontextdaten ausgeben",
    "Override Agent":
      "Agent überschreiben",
    "Override the agent header sent with WildFire API requests. auto = auto-detect based on platform (XSOAR/XSIAM), xdr = Cortex XSIAM, xsoartim = XSOAR TIM, pcc = Prisma Cloud Compute, prismaaccessapi = Prisma Access, other = NGFW":
      "Überschreibt den mit WildFire-API-Anfragen gesendeten Agent-Header. auto = automatische Erkennung anhand der Plattform (XSOAR/XSIAM), xdr = Cortex XSIAM, xsoartim = XSOAR TIM, pcc = Prisma Cloud Compute, prismaaccessapi = Prisma Access, other = NGFW",
    "Package resolution for code scanning":
      "Paketauflösung für Code-Scans",
    "Palo Alto Networks documentation":
      "Dokumentation zu Palo Alto Networks",
    "Palo Alto recommends that you configure Splunk to produce basic alerts that the SplunkPy integration can ingest, by creating a summary index in which alerts are stored. The SplunkPy integration can then query that index for incident ingestion. It is not recommended to use the Cortex application with Splunk for routine event consumption because this method is not able to be monitored and is not scalable.":
      "Palo Alto empfiehlt, Splunk so zu konfigurieren, dass einfache Alerts erzeugt werden, die die SplunkPy-Integration aufnehmen kann, indem ein Summary-Index erstellt wird, in dem die Alerts gespeichert werden. Die SplunkPy-Integration kann diesen Index dann für die Incident-Aufnahme abfragen. Es wird nicht empfohlen, die Cortex-Anwendung mit Splunk für die routinemäßige Ereignisverarbeitung zu verwenden, da diese Methode nicht überwacht werden kann und nicht skalierbar ist.",
    "Palo Alto recommends that you configure Splunk to produce basic alerts that the SplunkPy v2 integration can ingest, by creating a summary index in which alerts are stored. The SplunkPy v2 integration can then query that index for incident ingestion. It is not recommended to use the Cortex application with Splunk for routine event consumption because this method is not able to be monitored and is not scalable.":
      "Palo Alto empfiehlt, Splunk so zu konfigurieren, dass einfache Alerts erzeugt werden, die die SplunkPy-v2-Integration aufnehmen kann, indem ein Summary-Index erstellt wird, in dem die Alerts gespeichert werden. Die SplunkPy-v2-Integration kann diesen Index dann für die Incident-Aufnahme abfragen. Es wird nicht empfohlen, die Cortex-Anwendung mit Splunk für die routinemäßige Ereignisverarbeitung zu verwenden, da diese Methode nicht überwacht werden kann und nicht skalierbar ist.",
    "PAN support":
      "PAN-Support",
    "Pan-OS/Panorama API Key":
      "Pan-OS/Panorama-API-Schlüssel",
    "Pan-OS/Panorama Server URL":
      "Pan-OS/Panorama-Server-URL",
    "Panorays PAPI base URL":
      "Basis-URL der Panorays PAPI",
    "Parameter":
      "Parameter",
    "Password - Used to generate the certificate":
      "Passwort - Wird zur Generierung des Zertifikats verwendet",
    "Password (Required for Basic authentication only)":
      "Passwort (nur für die Basisauthentifizierung erforderlich)",
    "Password / Access Key Secret":
      "Passwort / Secret des Zugriffsschlüssels",
    "Password / Client Secret":
      "Passwort / Client-Secret",
    "Paste the Api Token copied from Orca":
      "Fügen Sie das aus Orca kopierte API-Token ein",
    "Paste your Terraform Enterprise token and domain name in the fields below":
      "Fügen Sie Ihr Terraform-Enterprise-Token und den Domänennamen in die folgenden Felder ein",
    "PingOne has 3 regions, US, EU and Asia.":
      "PingOne hat 3 Regionen: US, EU und Asia.",
    "PingOne Region":
      "PingOne-Region",
    "Please make sure you have the correct role so you have permissions to work with the relevant table.":
      "Stellen Sie sicher, dass Sie die richtige Rolle haben, damit Sie über die Berechtigungen zum Arbeiten mit der entsprechenden Tabelle verfügen.",
    "Please refer to the documentation for a list of known endpoints.":
      "Eine Liste der bekannten Endpunkte finden Sie in der Dokumentation.",
    "Port (e.g 443)":
      "Port (z. B. 443)",
    "Preferred Vendor Threshold. The minimum number of highly trusted vendors required to consider a domain, IP address, URL, or file as malicious.":
      "Schwellenwert für bevorzugte Anbieter. Mindestanzahl hochvertrauenswürdiger Anbieter, die erforderlich ist, um eine Domäne, IP-Adresse, URL oder Datei als bösartig einzustufen.",
    "Preferred Vendors List. CSV list of vendors which are considered more trustworthy.":
      "Liste bevorzugter Anbieter. CSV-Liste von Anbietern, die als vertrauenswürdiger gelten.",
    "Preferred Vendors List. CSV list of vendors who are considered more trustworthy.":
      "Liste bevorzugter Anbieter. CSV-Liste von Anbietern, die als vertrauenswürdiger gelten.",
    "Premium Subscription":
      "Premium-Abonnement",
    "Premium Subscription Only: Relationship Malicious Files Threshold":
      "Nur Premium-Abonnement: Schwellenwert für bösartige Dateien der Beziehung",
    "Premium Subscription Only: Relationship Suspicious Files Threshold":
      "Nur Premium-Abonnement: Schwellenwert für verdächtige Dateien der Beziehung",
    "Prerequisite":
      "Voraussetzung",
    "Prerequisite - Connect to McAfee Threat Intelligence Exchange (TIE) using the DXL TIE Client":
      "Voraussetzung - Verbindung mit McAfee Threat Intelligence Exchange (TIE) über DXL TIE Client herstellen",
    "Prerequisites in order to support JWT":
      "Voraussetzungen zur Unterstützung von JWT",
    "Prisma Access & NGFW Configuration":
      "Prisma-Access- und NGFW-Konfiguration",
    "Prisma Access API Key from Panorama":
      "Prisma-Access-API-Schlüssel von Panorama",
    "Prisma Cloud service tenant admin console URL. The URL for the Prisma Cloud service varies depending on the cluster on which your tenant is deployed. For more information see: https://pan.dev/prisma-cloud/api/cspm/api-urls/.":
      "Admin-Konsolen-URL des Prisma-Cloud-Service-Tenants. Die URL des Prisma-Cloud-Service hängt vom Cluster ab, auf dem Ihr Tenant bereitgestellt wird. Weitere Informationen finden Sie unter: https://pan.dev/prisma-cloud/api/cspm/api-urls/.",
    "Private Key (Required for HTTPS)":
      "Privater Schlüssel (für HTTPS erforderlich)",
    "Private url is https://private.tria.ge/api/v0/":
      "Die private URL lautet https://private.tria.ge/api/v0/",
    "Proofpoint on Demand (PoD) administrators must file a support ticket to Proofpoint support to obtain a role with access to an API.":
      "Administratoren von Proofpoint on Demand (PoD) müssen ein Support-Ticket beim Proofpoint-Support einreichen, um eine Rolle mit API-Zugriff zu erhalten.",
    "Proofpoint Protection Server Version (e.g., 8.14.2)":
      "Version von Proofpoint Protection Server (z. B. 8.14.2)",
    "Provide a Client Name and Role, then click “Generate Credentials”.":
      "Geben Sie einen Client Name und eine Role an und klicken Sie anschließend auf „Generate Credentials“.",
    "Provide a name for the token and set an expiration time (optional)":
      "Geben Sie einen Namen für das Token an und legen Sie eine Ablaufzeit fest (optional)",
    "Provide server URL and API Token.":
      "Geben Sie die Server-URL und das API-Token an.",
    "Provide server URL, ‘Live Response’ API key and connector.":
      "Geben Sie die Server-URL, den API-Schlüssel für ‚Live Response‘ und den Konnektor an.",
    "Provides a list of versions by product name or id":
      "Stellt eine Liste von Versionen nach Produktname oder ID bereit",
    "Provides all or specific vendor details to include vendor name and id":
      "Stellt Details zu allen oder zu bestimmten Anbietern bereit, einschließlich Anbietername und ID",
    "Provides full details about a specific vulnerability by id":
      "Stellt vollständige Details zu einer bestimmten Schwachstelle nach ID bereit",
    "Provides full details about a specific vulnerability by vendor and product id":
      "Stellt vollständige Details zu einer bestimmten Schwachstelle nach Anbieter- und Produkt-ID bereit",
    "Provides full details about a specific vulnerability by vendor and product name":
      "Stellt vollständige Details zu einer bestimmten Schwachstelle nach Anbieter- und Produktname bereit",
    "Provides full details about vulnerabilities by cve id":
      "Stellt vollständige Details zu Schwachstellen nach CVE-ID bereit",
    "Provides full details about vulnerabilities by product id":
      "Stellt vollständige Details zu Schwachstellen nach Produkt-ID bereit",
    "Provides full details about vulnerabilities by vendor id":
      "Stellt vollständige Details zu Schwachstellen nach Anbieter-ID bereit",
    "Provides the recent vulnerabilities by dates or hours":
      "Stellt die neuesten Schwachstellen nach Datum oder Stunden bereit",
    "Provides the versions for the specified product by product name or id":
      "Stellt die Versionen des angegebenen Produkts nach Produktname oder ID bereit",
    "Proxy URL":
      "Proxy-URL",
    "Proxy URL password":
      "Passwort der Proxy-URL",
    "Proxy URL Password":
      "Passwort der Proxy-URL",
    "Proxy URL to use in Slack API calls":
      "Proxy-URL für Slack-API-Aufrufe",
    "Proxy URL username":
      "Benutzername der Proxy-URL",
    "Proxy URL Username":
      "Benutzername der Proxy-URL",
    "Public key / Private key":
      "Öffentlicher Schlüssel / privater Schlüssel",
    "PUBLIC KEYS":
      "ÖFFENTLICHE SCHLÜSSEL",
    "Push events from Cortex to Splunk":
      "Ereignisse von Cortex an Splunk senden",
    "QRadar API Version":
      "QRadar-API-Version",
    "QRadar API versions page":
      "Seite mit den QRadar-API-Versionen",
    "QRadar filter documentation":
      "QRadar-Filterdokumentation",
    "QRadar Filter Syntax Documentation":
      "QRadar-Filtersyntax-Dokumentation",
    "QRadar offense documentation":
      "QRadar-Offense-Dokumentation",
    "QRadar Offense Documentation":
      "QRadar-Offense-Dokumentation",
    "Quarantine management — Quarantine assets and restore quarantined assets.":
      "Quarantäneverwaltung – Stellen Sie Assets unter Quarantäne und stellen Sie unter Quarantäne gestellte Assets wieder her.",
    "Query all CVEs monitored by ThreatMon, including CVSS v2, v3, v3.1, and v4 scores.":
      "Fragen Sie alle von ThreatMon überwachten CVEs ab, einschließlich der CVSS-Bewertungen v2, v3, v3.1 und v4.",
    "Query and response with Carbon Black endpoint detection and response.":
      "Abfrage und Reaktion mit der Endpoint Detection and Response von Carbon Black.",
    "Query CVEs affecting products the company is subscribed to.":
      "Fragen Sie CVEs ab, die Produkte betreffen, die das Unternehmen abonniert hat.",
    "Query Example":
      "Beispielabfrage",
    "Query to fetch offenses":
      "Abfrage zum Abrufen von Offenses",
    "Query URL":
      "Abfrage-URL",
    "Rasterize Mode":
      "Rasterisierungsmodus",
    "Rate Limiting":
      "Ratenbegrenzung",
    "Rate Limits":
      "Ratenlimits",
    "Recommended for private/on-prem.":
      "Empfohlen für private/On-Premises-Umgebungen.",
    "Red Teaming operations require accepting the End User License Agreement.":
      "Für Red-Teaming-Vorgänge muss die Endbenutzer-Lizenzvereinbarung akzeptiert werden.",
    "Redirect URL":
      "Umleitungs-URL",
    "Refresh Token":
      "Aktualisierungstoken",
    "Reliability of the source providing intelligence data":
      "Zuverlässigkeit der Quelle, die die Intelligence-Daten bereitstellt",
    "Request data removal for Black Market Monitoring findings directly from XSOAR playbooks.":
      "Fordern Sie die Datenlöschung für Black-Market-Monitoring-Ergebnisse direkt aus XSOAR-Playbooks an.",
    "Request timeout":
      "Timeout der Anfrage",
    "Request Timeout":
      "Timeout der Anfrage",
    "Request timeout (in seconds)":
      "Timeout der Anfrage (in Sekunden)",
    "Request timeout (in seconds).":
      "Timeout der Anfrage (in Sekunden).",
    "Require Demonstrating Proof of Possession (DPoP) header in token requests":
      "DPoP-Header (Demonstrating Proof of Possession) in Token-Anforderungen erforderlich machen",
    "Required and used if more than one key is used for signing JWT tokens.":
      "Erforderlich und wird verwendet, wenn mehr als ein Schlüssel zum Signieren von JWT-Token verwendet wird.",
    "Required and used if OAuth 2.0 is used for authentication. See detailed instructions on the 'Help' tab.":
      "Erforderlich und wird verwendet, wenn OAuth 2.0 für die Authentifizierung verwendet wird. Ausführliche Anweisungen finden Sie auf der Registerkarte „Hilfe“.",
    "Required Scopes":
      "Erforderliche Scopes",
    "Required when choosing an external engine. You must enable Long running instance to run the web server on this port from within Cortex. Requires a unique port for each long-running integration instance. Do not use the same port for multiple instances.":
      "Erforderlich bei der Auswahl einer externen Engine. Sie müssen die langlaufende Instanz aktivieren, um den Webserver auf diesem Port aus Cortex heraus auszuführen. Für jede langlaufende Integrationsinstanz ist ein eindeutiger Port erforderlich. Verwenden Sie nicht denselben Port für mehrere Instanzen.",
    "Requirements":
      "Voraussetzungen",
    "Requires a server URL, and an API key":
      "Erfordert eine Server-URL und einen API-Schlüssel",
    "Reset the “last run”":
      "„last run“ zurücksetzen",
    "Resetting the enriching fetch mechanism":
      "Zurücksetzen des anreichernden Abrufmechanismus",
    "Retrieve Your API Key":
      "API-Schlüssel abrufen",
    "Retry requests when API is rate limited":
      "Anfragen wiederholen, wenn die API ratenbegrenzt ist",
    "Return Errors":
      "Fehler zurückgeben",
    "Return Errors: If this checkbox is not selected, a warning will be returned instead of an error entry.":
      "Fehler zurückgeben: Wenn dieses Kontrollkästchen nicht aktiviert ist, wird anstelle eines Fehlereintrags eine Warnung zurückgegeben.",
    "Run the command":
      "Führen Sie den Befehl aus",
    "Run this query to fetch new events as incidents":
      "Führen Sie diese Abfrage aus, um neue Ereignisse als Incidents abzurufen",
    "Runtime API Key":
      "Runtime-API-Schlüssel",
    "Save changes":
      "Änderungen speichern",
    "Save intrusion sets as threat actor indicator types":
      "Intrusion Sets als Indikatortypen für Bedrohungsakteure speichern",
    "Scanner API Base URL":
      "Basis-URL der Scanner-API",
    "Scanner API base URL for runtime scanning operations. Default is US region. For other regions: EU: https://service-de.api.aisecurity.paloaltonetworks.com, IN: https://service-in.api.aisecurity.paloaltonetworks.com, SG: https://service-sg.api.aisecurity.paloaltonetworks.com. This must match the region selected during deployment profile creation.":
      "Basis-URL der Scanner-API für Runtime-Scanvorgänge. Standard ist die US-Region. Für andere Regionen: EU: https://service-de.api.aisecurity.paloaltonetworks.com, IN: https://service-in.api.aisecurity.paloaltonetworks.com, SG: https://service-sg.api.aisecurity.paloaltonetworks.com. Sie muss mit der Region übereinstimmen, die beim Erstellen des Bereitstellungsprofils ausgewählt wurde.",
    "Scope (Required for using Cortex Azure app)":
      "Scope (erforderlich für die Verwendung der Cortex-Azure-App)",
    "Search and Compliance URL":
      "URL für Suche und Compliance",
    "Search for SplunkPy and select your integration instance.":
      "Suchen Sie nach SplunkPy und wählen Sie Ihre Integrationsinstanz aus.",
    "Search for SplunkPy v2 and select your integration instance.":
      "Suchen Sie nach SplunkPy v2 und wählen Sie Ihre Integrationsinstanz aus.",
    "Search for VulnDB.":
      "Suchen Sie nach VulnDB.",
    "Seconds to sleep between checking for results":
      "Wartezeit in Sekunden zwischen den Ergebnisprüfungen",
    "Secret token":
      "Secret-Token",
    "Secret Token":
      "Secret-Token",
    "Secret Token(Team Chat App)":
      "Secret-Token (Team Chat App)",
    "See detailed instructions on the 'Help' tab.":
      "Ausführliche Anweisungen finden Sie auf der Registerkarte „Hilfe“.",
    "See the vendor’s documentation for more details.":
      "Weitere Informationen finden Sie in der Dokumentation des Anbieters.",
    "Select Scan Type":
      "Scantyp auswählen",
    "Select SSL certificate validation and Proxy if required.":
      "Wählen Sie bei Bedarf die SSL-Zertifikatsvalidierung und den Proxy aus.",
    "Select the “Detection Close Reason for Incident Closure” option if you want to set the detection close reason in Vectra when the incident is closed in XSOAR. Default value is ‘Remediated’. This option is only used when the “Close Detection on Incident Closure” option is checked and the mirroring direction is set to ‘Outgoing’ or ‘Incoming And Outgoing’.":
      "Wählen Sie die Option „Detection Close Reason for Incident Closure“ aus, wenn Sie den Grund für das Schließen der Erkennung in Vectra festlegen möchten, sobald der Incident in XSOAR geschlossen wird. Der Standardwert ist ‚Remediated‘. Diese Option wird nur verwendet, wenn die Option „Close Detection on Incident Closure“ aktiviert und die Spiegelungsrichtung auf ‚Outgoing‘ oder ‚Incoming And Outgoing‘ festgelegt ist.",
    "Select the “Detection Status for Incident Reopen” option if you want to set the detection status in Vectra when the incident is reopened in XSOAR. Default value is ‘Escalated’. This option is only used when the “Open Detection on Incident Reopen” option is checked and the mirroring direction is set to ‘Outgoing’ or ‘Incoming And Outgoing’.":
      "Wählen Sie die Option „Detection Status for Incident Reopen“ aus, wenn Sie den Status der Erkennung in Vectra festlegen möchten, sobald der Incident in XSOAR erneut geöffnet wird. Der Standardwert ist ‚Escalated‘. Diese Option wird nur verwendet, wenn die Option „Open Detection on Incident Reopen“ aktiviert und die Spiegelungsrichtung auf ‚Outgoing‘ oder ‚Incoming And Outgoing‘ festgelegt ist.",
    "Select the date format of your ServiceNow instance. Mandatory when using the `Use Display Value` option. More details under the troubleshooting section in the documentation of the integration. The integration supports the ServiceNow default time format (full form) `HH:mm:ss` with support to `a` notation for AM/PM.":
      "Wählen Sie das Datumsformat Ihrer ServiceNow-Instanz aus. Erforderlich, wenn die Option `Use Display Value` verwendet wird. Weitere Details finden Sie im Abschnitt zur Fehlerbehebung in der Dokumentation der Integration. Die Integration unterstützt das Standardzeitformat von ServiceNow (Langform) `HH:mm:ss` mit Unterstützung der Notation `a` für AM/PM.",
    "Select the field that determines when to trigger a termination incident for deactivated employees.":
      "Wählen Sie das Feld aus, das bestimmt, wann ein Incident zur Beendigung des Arbeitsverhältnisses für deaktivierte Mitarbeiter ausgelöst wird.",
    "Select the list of relationships to retrieve from the API. Note that relationships that are signed with * key are available only for the VirusTotal premium API key.":
      "Wählen Sie die Liste der Beziehungen aus, die von der API abgerufen werden sollen. Beachten Sie, dass mit * gekennzeichnete Beziehungen nur mit dem Premium-API-Schlüssel von VirusTotal verfügbar sind.",
    "Select this checkbox if to use OAuth 2.0 authentication. See (?) for more information.":
      "Aktivieren Sie dieses Kontrollkästchen, um die OAuth-2.0-Authentifizierung zu verwenden. Weitere Informationen finden Sie unter (?).",
    "Select this checkbox to retrieve comments and work notes without accessing the `sys_field_journal` table.":
      "Aktivieren Sie dieses Kontrollkästchen, um Kommentare und Arbeitsnotizen abzurufen, ohne auf die Tabelle `sys_field_journal` zuzugreifen.",
    "Select this checkbox to retrieve the body of an email in HTML format. If this checkbox is not selected, a psuedo-text representation of HTML emails will be returned and some functionality in other packs (e.g., email previews in the Email Communication pack) may not provide their full capabilities.":
      "Aktivieren Sie dieses Kontrollkästchen, um den Text einer E-Mail im HTML-Format abzurufen. Wenn dieses Kontrollkästchen nicht aktiviert ist, wird eine Pseudotext-Darstellung von HTML-E-Mails zurückgegeben, und einige Funktionen in anderen Paketen (z. B. E-Mail-Vorschauen im Paket Email Communication) bieten möglicherweise nicht ihren vollen Funktionsumfang.",
    "Select this checkbox to use JWT authentication. See (?) for more information.":
      "Aktivieren Sie dieses Kontrollkästchen, um die JWT-Authentifizierung zu verwenden. Weitere Informationen finden Sie unter (?).",
    "Select this option if the bot was originally created as multi-tenant and later converted to single-tenant. The system will detect the bot type automatically in all other standard cases.":
      "Wählen Sie diese Option aus, wenn der Bot ursprünglich als Multi-Tenant erstellt und später in Single-Tenant konvertiert wurde. In allen anderen Standardfällen erkennt das System den Bottyp automatisch.",
    "Select which domains you would like to pull indicators from. Additionally, each domain has a subset of “concepts”. Most of the domains have all of the concepts, with the exception of the “PRE-ATT&CK” domain. There are only a small subset of “concepts” within this domain. Any concept that does not exist will be skipped.":
      "Wählen Sie die Domänen aus, aus denen Sie Indikatoren abrufen möchten. Außerdem verfügt jede Domäne über eine Teilmenge von „Konzepten“. Die meisten Domänen enthalten alle Konzepte, mit Ausnahme der Domäne „PRE-ATT&CK“. In dieser Domäne gibt es nur eine kleine Teilmenge von „Konzepten“. Nicht vorhandene Konzepte werden übersprungen.",
    "Select which event types to fetch from KOI.":
      "Wählen Sie die Ereignistypen aus, die von KOI abgerufen werden sollen.",
    "Select which log types to fetch.":
      "Wählen Sie die abzurufenden Protokolltypen aus.",
    "Select which log types to fetch. Selecting 'All' will use all the log type queries in the fetch. To choose a specific set of queries, select their log types from the dropdown (make sure the 'All' option is unselected).":
      "Wählen Sie die abzurufenden Protokolltypen aus. Wenn Sie 'All' auswählen, werden beim Abruf alle Protokolltyp-Abfragen verwendet. Um einen bestimmten Satz von Abfragen auszuwählen, wählen Sie die entsprechenden Protokolltypen aus der Dropdown-Liste aus (stellen Sie sicher, dass die Option 'All' nicht ausgewählt ist).",
    "Select which record types to fetch. You can select Alerts, Incidents, or both.":
      "Wählen Sie die abzurufenden Datensatztypen aus. Sie können Alerts, Incidents oder beides auswählen.",
    "Select your instance.":
      "Wählen Sie Ihre Instanz aus.",
    "Selecting 'All' will use all the log type queries in the fetch.":
      "Wenn Sie 'All' auswählen, werden beim Abruf alle Protokolltyp-Abfragen verwendet.",
    "Selecting “All” will use all the log type queries in the fetch.":
      "Wenn Sie „All“ auswählen, werden beim Abruf alle Protokolltyp-Abfragen verwendet.",
    "Self-serve pay-as-you-go keys are entitled to all six by default.":
      "Self-Service-Pay-as-you-go-Schlüssel berechtigen standardmäßig zu allen sechs.",
    "Send emails including support for rich emails with HTML and embedded files.":
      "Senden Sie E-Mails, einschließlich Unterstützung für Rich-E-Mails mit HTML und eingebetteten Dateien.",
    "Send notifications about incidents to the dedicated channel":
      "Benachrichtigungen zu Incidents an den dedizierten Kanal senden",
    "Sender address":
      "Absenderadresse",
    "Sender address can be specified as 'user@host.com' or 'Full Name <user@host.com>'":
      "Die Absenderadresse kann als 'user@host.com' oder 'Full Name <user@host.com>' angegeben werden",
    "Server Address":
      "Serveradresse",
    "Server base URL":
      "Basis-URL des Servers",
    "Server base URL (e.g., https://192.168.0.1/publicapi)":
      "Basis-URL des Servers (z. B. https://192.168.0.1/publicapi)",
    "Server Host or IP":
      "Server-Host oder -IP",
    "Server Host or IP (e.g., 10.1.1.9 or panorama.my.domain)":
      "Server-Host oder -IP (z. B. 10.1.1.9 oder panorama.my.domain)",
    "Server IP / Hostname (e.g. 1.2.3.4)":
      "Server-IP / Hostname (z. B. 1.2.3.4)",
    "Server NetBIOS (AD) Name":
      "NetBIOS-Name (AD) des Servers",
    "Server Port":
      "Server-Port",
    "Server URL (e.g. 'https://api.zoom.us/v2/')":
      "Server-URL (z. B. 'https://api.zoom.us/v2/')",
    "Server URL (e.g. https://192.168.0.1:20013)":
      "Server-URL (z. B. https://192.168.0.1:20013)",
    "Server URL (e.g. https://analysis.lastline.com)":
      "Server-URL (z. B. https://analysis.lastline.com)",
    "Server URL (e.g. https://api.kennasecurity.com)":
      "Server-URL (z. B. https://api.kennasecurity.com)",
    "Server URL (e.g. https://example.net)":
      "Server-URL (z. B. https://example.net)",
    "Server URL (e.g. https://vxsuz5.manage.trendmicro.com)":
      "Server-URL (z. B. https://vxsuz5.manage.trendmicro.com)",
    "Server URL (e.g., 'https://api.zoom.us/v2/')":
      "Server-URL (z. B. 'https://api.zoom.us/v2/')",
    "Server URL (e.g., https://192.0.2.0:8080)":
      "Server-URL (z. B. https://192.0.2.0:8080)",
    "Server URL (e.g., https://192.168.0.1:10000)":
      "Server-URL (z. B. https://192.168.0.1:10000)",
    "Server URL (e.g., https://api.securitycenter.microsoft.com)":
      "Server-URL (z. B. https://api.securitycenter.microsoft.com)",
    "Server URL (e.g., https://cloud.vmray.com)":
      "Server-URL (z. B. https://cloud.vmray.com)",
    "Server URL (e.g., https://demisto.zendesk.com)":
      "Server-URL (z. B. https://demisto.zendesk.com)",
    "Server URL (e.g., https://xxxxxxxx.pphosted.com:10000)":
      "Server-URL (z. B. https://xxxxxxxx.pphosted.com:10000)",
    "Server URL used to enter the Sophos XG Firewall web console. e.g., https://ip:port/":
      "Server-URL für den Zugriff auf die Webkonsole der Sophos XG Firewall. Z. B. https://ip:port/",
    "Service Key (for triggering events only)":
      "Dienstschlüssel (nur zum Auslösen von Ereignissen)",
    "Service Key (for triggering, acknowledging and resolving events only)":
      "Dienstschlüssel (nur zum Auslösen, Bestätigen und Auflösen von Ereignissen)",
    "ServiceNow API Version (e.g. 'v1')":
      "ServiceNow-API-Version (z. B. 'v1')",
    "ServiceNow API Version (e.g. 'v1'). Specify this value to use an endpoint version other than the latest.":
      "ServiceNow-API-Version (z. B. 'v1'). Geben Sie diesen Wert an, um eine andere Endpunktversion als die neueste zu verwenden.",
    "ServiceNow docs":
      "ServiceNow-Dokumentation",
    "ServiceNow Instance":
      "ServiceNow-Instanz",
    "ServiceNow Instance URL":
      "URL der ServiceNow-Instanz",
    "ServiceNow ticket column to be set as the incident name. Default is the incident number":
      "Spalte des ServiceNow-Tickets, die als Incident-Name festgelegt werden soll. Standard ist die Incident-Nummer",
    "ServiceNow URL (https://<domain>.service-now.com)":
      "ServiceNow-URL (https://<domain>.service-now.com)",
    "ServiceNow URL, in the format https://company.service-now.com/":
      "ServiceNow-URL im Format https://company.service-now.com/",
    "ServiceNowGenericFeed fetches records from a ServiceNow CMDB API endpoint and ingests them as indicators into Cortex TIM with user desired tags.":
      "ServiceNowGenericFeed ruft Datensätze von einem ServiceNow-CMDB-API-Endpunkt ab und nimmt sie mit benutzerdefinierten Tags als Indikatoren in Cortex TIM auf.",
    "Set the “Detection Close Reason for Incident Closure” option to set the detection close reason in Vectra when the incident is closed in XSOAR. Default value is ‘Benign’. This option is only used when the “Close Detection on Incident Closure” option is checked and the mirroring direction is set to ‘Outgoing’ or ‘Incoming And Outgoing’.":
      "Legen Sie die Option „Detection Close Reason for Incident Closure“ fest, um den Grund für das Schließen der Erkennung in Vectra festzulegen, sobald der Incident in XSOAR geschlossen wird. Der Standardwert ist ‚Benign‘. Diese Option wird nur verwendet, wenn die Option „Close Detection on Incident Closure“ aktiviert und die Spiegelungsrichtung auf ‚Outgoing‘ oder ‚Incoming And Outgoing‘ festgelegt ist.",
    "Set the “Detection Status for Incident Reopen” option to set the detection status in Vectra when the incident is reopened in XSOAR. Default value is ‘Escalated’. This option is only used when the “Open Detection on Incident Reopen” option is checked and the mirroring direction is set to ‘Outgoing’ or ‘Incoming And Outgoing’.":
      "Legen Sie die Option „Detection Status for Incident Reopen“ fest, um den Status der Erkennung in Vectra festzulegen, sobald der Incident in XSOAR erneut geöffnet wird. Der Standardwert ist ‚Escalated‘. Diese Option wird nur verwendet, wenn die Option „Open Detection on Incident Reopen“ aktiviert und die Spiegelungsrichtung auf ‚Outgoing‘ oder ‚Incoming And Outgoing‘ festgelegt ist.",
    "Set the DBot Score Threshold to a number between 1 and 100 (default is 70). Any IP addresses associated with an Entity queried with a ThreatX score greater than or equal to the DBot Score Threshold will be assigned a DBot Score of 3 (Malicious).":
      "Legen Sie den DBot Score Threshold auf eine Zahl zwischen 1 und 100 fest (Standard ist 70). Allen IP-Adressen, die mit einer Entität verknüpft sind, die mit einer ThreatX-Bewertung abgefragt wurde, die größer oder gleich dem DBot Score Threshold ist, wird ein DBot Score von 3 (Malicious) zugewiesen.",
    "Set the fetch interval and enable fetching":
      "Legen Sie das Abrufintervall fest und aktivieren Sie den Abruf",
    "Set the Incidents Fetch Interval to a maximum of 15 minutes if the number of incidents is expected to exceed the specified max fetch limit in each fetch cycle.":
      "Legen Sie das Incidents Fetch Interval auf maximal 15 Minuten fest, wenn zu erwarten ist, dass die Anzahl der Incidents in jedem Abrufzyklus das angegebene maximale Abruflimit überschreitet.",
    "Set up a SpecterOps BloodHound Enterprise integration instance":
      "Eine SpecterOps-BloodHound-Enterprise-Integrationsinstanz einrichten",
    "Sets the AWS_STS_REGIONAL_ENDPOINTS environment variable to specify the AWS STS endpoint resolution logic. By default, this option is set to “legacy” in AWS. Leave empty if the environment variable is already set using server configuration.":
      "Legt die Umgebungsvariable AWS_STS_REGIONAL_ENDPOINTS fest, um die Auflösungslogik für AWS-STS-Endpunkte anzugeben. Standardmäßig ist diese Option in AWS auf „legacy“ festgelegt. Lassen Sie das Feld leer, wenn die Umgebungsvariable bereits über die Serverkonfiguration festgelegt wurde.",
    "Setting the lookback parameter will fetch duplicated incidents in the event that incidents that fall out during the given look-back time were already fetched.":
      "Wenn der Parameter lookback festgelegt wird, werden doppelte Incidents abgerufen, falls Incidents, die während des angegebenen Rückblickzeitraums herausfallen, bereits abgerufen wurden.",
    "Setup Instructions":
      "Einrichtungsanleitung",
    "Setup Steps":
      "Einrichtungsschritte",
    "Sever URLs":
      "Server-URLs",
    "Shodan is a search engine for Internet-connected devices. Unlike traditional search engines that index websites, Shodan indexes information about the devices connected to the internet, such as servers, routers, webcams, and other IoT devices.":
      "Shodan ist eine Suchmaschine für mit dem Internet verbundene Geräte. Im Gegensatz zu herkömmlichen Suchmaschinen, die Websites indizieren, indiziert Shodan Informationen über mit dem Internet verbundene Geräte wie Server, Router, Webcams und andere IoT-Geräte.",
    "Should anyone be allowed to create incidents by DM":
      "Allen erlauben, Incidents per Direktnachricht zu erstellen",
    "Sigma and Intrusion Detection Rules Threshold":
      "Schwellenwert für Sigma- und Intrusion-Detection-Regeln",
    "Sign in to Okta Admin Console.":
      "Melden Sie sich bei der Okta Admin Console an.",
    "Sign in to the Tenzai application.":
      "Melden Sie sich bei der Tenzai-Anwendung an.",
    "Site security monitoring, external sharing controls, and document compliance for SharePoint":
      "Überwachung der Websitesicherheit, Steuerung der externen Freigabe und Dokumentenkonformität für SharePoint",
    "Skip on corrupted images":
      "Beschädigte Bilder überspringen",
    "Slack (Deprecated)":
      "Slack (veraltet)",
    "Slack API access token":
      "Slack-API-Zugriffstoken",
    "Slack API bot token":
      "Slack-API-Bot-Token",
    "Slack API Token for channel creation":
      "Slack-API-Token für die Kanalerstellung",
    "Slack Bot API token":
      "Slack-Bot-API-Token",
    "Slack Documentation":
      "Slack-Dokumentation",
    "Slack v2 (Deprecated)":
      "Slack v2 (veraltet)",
    "Slack V3 utilizes “Socket Mode” to enable the integration to communicate directly with Slack for mirroring.":
      "Slack V3 verwendet „Socket Mode“, damit die Integration für die Spiegelung direkt mit Slack kommunizieren kann.",
    "SMTP Port":
      "SMTP-Port",
    "SMTP Sender":
      "SMTP-Absender",
    "Snow documentation":
      "Snow-Dokumentation",
    "Source Priority Level":
      "Prioritätsstufe der Quelle",
    "Specify a unique name for the API client.":
      "Geben Sie einen eindeutigen Namen für den API-Client an.",
    "Splunk Token":
      "Splunk-Token",
    "Splunk token-based authentication":
      "Tokenbasierte Splunk-Authentifizierung",
    "SSH Certificate":
      "SSH-Zertifikat",
    "SSH connection":
      "SSH-Verbindung",
    "SSH Credentials for CLI":
      "SSH-Anmeldedaten für die CLI",
    "SSH credentials should be your username and password for the PAN-OS CLI - they can be tested using a standalone SSH client to verify that you are able to connect to the CLI on the SSH port.":
      "Die SSH-Anmeldedaten sollten Ihr Benutzername und Ihr Kennwort für die PAN-OS-CLI sein. Sie können mit einem eigenständigen SSH-Client getestet werden, um zu überprüfen, ob Sie über den SSH-Port eine Verbindung zur CLI herstellen können.",
    "SSH Port":
      "SSH-Port",
    "Step 1: Login and add your authorization code":
      "Schritt 1: Melden Sie sich an und fügen Sie Ihren Autorisierungscode hinzu",
    "Step 2: Activate the API.":
      "Schritt 2: Aktivieren Sie die API.",
    "Steps to follow":
      "Auszuführende Schritte",
    "Subdomain":
      "Subdomain",
    "Submission Server URL":
      "Server-URL für Einreichungen",
    "Submit Black Market Monitoring data removal requests — checks company credit rights and returns an appropriate error if the quota is exceeded.":
      "Senden Sie Anfragen zur Entfernung von Black-Market-Monitoring-Daten: Es werden die Guthabenrechte des Unternehmens geprüft, und bei Überschreitung des Kontingents wird ein entsprechender Fehler zurückgegeben.",
    "Submit takedown requests for eligible findings (Phishing Domains, Rogue Mobile Apps, Fake Social Media Accounts).":
      "Senden Sie Takedown-Anfragen für berechtigte Feststellungen (Phishing-Domains, betrügerische mobile Apps, gefälschte Social-Media-Konten).",
    "Submit takedown requests for eligible threat findings.":
      "Senden Sie Takedown-Anfragen für berechtigte Bedrohungsfeststellungen.",
    "Sumo Logic URL (region specific), for example: https://api.us2.sumologic.com/api/":
      "Sumo-Logic-URL (regionsspezifisch), zum Beispiel: https://api.us2.sumologic.com/api/",
    "Supplier finding severities":
      "Schweregrade der Lieferantenfeststellungen",
    "Supplier finding statuses":
      "Status der Lieferantenfeststellungen",
    "Supplier Findings":
      "Lieferantenfeststellungen",
    "Support for Multiple Teams":
      "Unterstützung für mehrere Teams",
    "Support for template replacement variables using {var} syntax":
      "Unterstützung für Variablen zur Vorlagenersetzung mit der Syntax {var}",
    "Supported Authentication Methods":
      "Unterstützte Authentifizierungsmethoden",
    "Supported formats: 2 minutes, 2 hours, 2 days, 2 weeks, 2 months, 2 years, yyyy-mm-dd, yyyy-mm-ddTHH:MM:SSZ.":
      "Unterstützte Formate: 2 minutes, 2 hours, 2 days, 2 weeks, 2 months, 2 years, yyyy-mm-dd, yyyy-mm-ddTHH:MM:SSZ.",
    "Supported Indicators":
      "Unterstützte Indikatoren",
    "Supported REST API versions":
      "Unterstützte REST-API-Versionen",
    "Supports automated playbooks for streamlined response.":
      "Unterstützt automatisierte Playbooks für eine optimierte Reaktion.",
    "Supports folder ID and sub-folders, for example Inbox/Phishing.":
      "Unterstützt Ordner-ID und Unterordner, zum Beispiel Inbox/Phishing.",
    "Suppress errors for non found indicators":
      "Fehler für nicht gefundene Indikatoren unterdrücken",
    "Sync Query":
      "Synchronisierungsabfrage",
    "Sync user profiles on first run":
      "Benutzerprofile beim ersten Lauf synchronisieren",
    "Sysdig Configuration":
      "Sysdig-Konfiguration",
    "Tag: The ruleset's name or the identifier for the YARA rule matching the file to fetch its notifications. Leave blank to fetch all.":
      "Tag: Name des Regelsatzes oder Kennung der YARA-Regel, die der Datei entspricht, deren Benachrichtigungen abgerufen werden sollen. Lassen Sie das Feld leer, um alle abzurufen.",
    "Takedown Server URL":
      "Takedown-Server-URL",
    "Team name (e.g. my-team-name)":
      "Teamname (z. B. my-team-name)",
    "Template - Panorama instances only":
      "Vorlage – nur Panorama-Instanzen",
    "Tenant ID (Required for using Self Deployed Azure app)":
      "Tenant-ID (erforderlich für die Verwendung einer selbst bereitgestellten Azure-App)",
    "Tenant Services Group ID":
      "Tenant-Servicegruppen-ID",
    "Tenzai App URL (e.g., https://app.tenzai.io)":
      "Tenzai-App-URL (z. B. https://app.tenzai.io)",
    "Tenzai Server URL":
      "Tenzai-Server-URL",
    "Tenzai Server URL (e.g., https://api.tenzai.io)":
      "Tenzai-Server-URL (z. B. https://api.tenzai.io)",
    "Terminal Type":
      "Terminaltyp",
    "Terms and Conditions":
      "Allgemeine Geschäftsbedingungen",
    "Test fails with a connection or timeout error.":
      "Der Test schlägt mit einem Verbindungs- oder Timeout-Fehler fehl.",
    "Test fails with an authorization error.":
      "Der Test schlägt mit einem Autorisierungsfehler fehl.",
    "Test the connection":
      "Testen Sie die Verbindung",
    "Test the integration. If successful, you’ll see a test message in the channel.":
      "Testen Sie die Integration. Bei Erfolg wird im Kanal eine Testnachricht angezeigt.",
    "The “Test” button does not fully validate all command functionality. To ensure the commands are working correctly, run each one and validate that API permissions are sufficient.":
      "Die Schaltfläche „Testen“ validiert nicht alle Befehlsfunktionen vollständig. Um sicherzustellen, dass die Befehle korrekt funktionieren, führen Sie jeden Befehl aus und prüfen Sie, ob die API-Berechtigungen ausreichen.",
    "The amount of time to go back when performing the first fetch, or when creating a mapping using the Select Schema option.":
      "Zeitraum, der beim ersten Abruf oder beim Erstellen eines Mappings mit der Option „Select Schema“ zurückgegangen wird.",
    "The API key can be found by going to your Hatching UI, clicking your account name in the top right, and the API key will be listed in the left hand side under “API Key”":
      "Den API-Schlüssel finden Sie in der Hatching-Benutzeroberfläche: Klicken Sie oben rechts auf Ihren Kontonamen, dann wird der API-Schlüssel links unter „API Key“ angezeigt",
    "The API key for authenticating with the KOI API. See the help section for instructions on creating an API key.":
      "Der API-Schlüssel für die Authentifizierung bei der KOI-API. Anweisungen zum Erstellen eines API-Schlüssels finden Sie im Hilfebereich.",
    "The API Key to use for the connection":
      "Der für die Verbindung zu verwendende API-Schlüssel",
    "The API route of the requested information in ServiceNow":
      "Die API-Route der angeforderten Informationen in ServiceNow",
    "The authentication type and credentials to use: Basic Auth (Username and Password), Bearer Auth (Username and Password), or API Key Auth (API Key ID and API Key).":
      "Der zu verwendende Authentifizierungstyp und die Anmeldedaten: Basic Auth (Benutzername und Passwort), Bearer Auth (Benutzername und Passwort) oder API Key Auth (API-Schlüssel-ID und API-Schlüssel).",
    "The backwards window is a way for you to configure the longest delay you would like to support.":
      "Mit dem Rückwärtsfenster können Sie die längste Verzögerung konfigurieren, die Sie unterstützen möchten.",
    "The base URL of the Tenzai API.":
      "Die Basis-URL der Tenzai-API.",
    "The base URL of the Tenzai web app, used to build a deep link (referenceUrl) to the scan results. Leave empty to derive it from the Tenzai Server URL (the API and web-app hosts mirror each other); set it only to override that.":
      "Die Basis-URL der Tenzai-Web-App, die zum Erstellen eines Deep-Links (referenceUrl) zu den Scanergebnissen verwendet wird. Lassen Sie das Feld leer, um sie aus der Tenzai-Server-URL abzuleiten (die Hosts von API und Web-App entsprechen einander); legen Sie sie nur fest, um diesen Wert zu überschreiben.",
    "The best value to set depends on the delays that you see in your system (consult with your Splunk expert / master), the number of events in your system, and other network properties.":
      "Der beste Wert hängt von den Verzögerungen in Ihrem System (wenden Sie sich an Ihren Splunk-Experten bzw. Master), der Anzahl der Ereignisse in Ihrem System und anderen Netzwerkeigenschaften ab.",
    "The category of attack paths to fetch. Default is all.":
      "Die Kategorie der abzurufenden Angriffspfade. Standard ist alle.",
    "The client machine name to identify the client to the server on a new connection.":
      "Der Name des Client-Rechners, mit dem sich der Client bei einer neuen Verbindung gegenüber dem Server identifiziert.",
    "The connection security. The `SSL/TLS` first establishes a secure `SSL/TLS` connection and conducts SMTP over that connection, and STARTTLS starts with unencrypted SMTP and then switches to SSL/TLS to ensure security.":
      "Die Verbindungssicherheit. `SSL/TLS` stellt zuerst eine sichere `SSL/TLS`-Verbindung her und führt SMTP über diese Verbindung aus, während STARTTLS mit unverschlüsseltem SMTP beginnt und dann zur Sicherheit auf SSL/TLS umschaltet.",
    "The date or relative timestamp from which to begin fetching events detections.":
      "Das Datum oder der relative Zeitstempel, ab dem Ereigniserkennungen abgerufen werden.",
    "The date or relative timestamp from which to begin fetching events detections. Supported formats: 2 minutes, 2 hours, 2 days, 2 weeks, 2 months, 2 years, yyyy-mm-dd, yyyy-mm-ddTHH:MM:SSZ. For example: 01 Oct 2025, 01 Mar 2021 04:45:33, 2025-12-17T14:05:44Z.":
      "Das Datum oder der relative Zeitstempel, ab dem Ereigniserkennungen abgerufen werden. Unterstützte Formate: 2 minutes, 2 hours, 2 days, 2 weeks, 2 months, 2 years, yyyy-mm-dd, yyyy-mm-ddTHH:MM:SSZ. Zum Beispiel: 01 Oct 2025, 01 Mar 2021 04:45:33, 2025-12-17T14:05:44Z.",
    "The default Jev model. Use a pinned version when playbook thresholds have been validated against that version.":
      "Das Standardmodell Jev. Verwenden Sie eine festgelegte Version, wenn die Playbook-Schwellenwerte anhand dieser Version validiert wurden.",
    "The default region to use with the takedown Service.":
      "Die Standardregion für den Takedown-Service.",
    "The default timeout (in seconds) for API calls. Default is 15 seconds.":
      "Das Standard-Timeout (in Sekunden) für API-Aufrufe. Standard sind 15 Sekunden.",
    "The domain controller hostname. This is useful for environments with DFS servers as it is used to identify the DFS domain information automatically.":
      "Der Hostname des Domänencontrollers. Dies ist in Umgebungen mit DFS-Servern hilfreich, da er zur automatischen Identifizierung der DFS-Domänendaten verwendet wird.",
    "The eDiscovery APIs in Microsoft Graph only work with eDiscovery (Premium) cases.":
      "Die eDiscovery-APIs in Microsoft Graph funktionieren nur mit eDiscovery-(Premium-)Fällen.",
    "The environment from which to fetch attack paths. Default is all.":
      "Die Umgebung, aus der Angriffspfade abgerufen werden. Standard ist alle.",
    "The fetched data may take up to 10 minutes to be ingested into the tenant after each fetch cycle.":
      "Die abgerufenen Daten können nach jedem Abrufzyklus bis zu 10 Minuten benötigen, bis sie im Tenant aufgenommen werden.",
    "The field needed from the ServiceNow response which contains the indicator value":
      "Das benötigte Feld aus der ServiceNow-Antwort, das den Indikatorwert enthält",
    "The filtering works the same way as in the Prisma Cloud UI. When providing several values for the same filter it gets only alerts that have one of these values, and when providing different values, it gets only alerts that have all the stated field values.":
      "Die Filterung funktioniert genauso wie in der Prisma-Cloud-Benutzeroberfläche. Wenn Sie mehrere Werte für denselben Filter angeben, werden nur Warnungen abgerufen, die einen dieser Werte haben; wenn Sie Werte für verschiedene Filter angeben, werden nur Warnungen abgerufen, die alle angegebenen Feldwerte haben.",
    "The following features are not supported in non-ES (Enterprise Security) Splunk.":
      "Die folgenden Funktionen werden in Splunk ohne ES (Enterprise Security) nicht unterstützt.",
    "The format should be https://company.service-now.com/":
      "Das Format muss https://company.service-now.com/ lauten",
    "The format should be: [ssl://]<hostname>[:port]. Get the hostname and port from the `brokerlist.properties` file. The broker should be reachable from the Cortex server.":
      "Das Format muss [ssl://]<hostname>[:port] lauten. Ermitteln Sie Hostname und Port aus der Datei `brokerlist.properties`. Der Broker muss vom Cortex-Server aus erreichbar sein.",
    "The FQDN/IP of the IdentityIQ server to connect":
      "Der FQDN/die IP des IdentityIQ-Servers, mit dem eine Verbindung hergestellt werden soll",
    "The FQDN/IP of the IdentityNow server to connect":
      "Der FQDN/die IP des IdentityNow-Servers, mit dem eine Verbindung hergestellt werden soll",
    "The generated incidents are notifications from vt-private-livehunt-notifications-list.":
      "Die generierten Incidents sind Benachrichtigungen aus vt-private-livehunt-notifications-list.",
    "The header of an external form hyperlink.":
      "Die Kopfzeile eines Hyperlinks zu einem externen Formular.",
    "The host URL. When using this parameter, select the Custom option for the Azure Cloud. More information about National clouds can be found here - https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud":
      "Die Host-URL. Wenn Sie diesen Parameter verwenden, wählen Sie für Azure Cloud die Option Custom aus. Weitere Informationen zu National Clouds finden Sie hier: https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud",
    "The HTTP request timeout in seconds.":
      "Das Timeout der HTTP-Anfrage in Sekunden.",
    "The incident name to give to the created incident":
      "Der Incident-Name, der dem erstellten Incident zugewiesen wird",
    "The initial time to fetch from":
      "Der Anfangszeitpunkt für den Abruf",
    "The instance configuration URL based on the server location: <br/>US: https://api.aperture.paloaltonetworks.com<br/> EU: https://api.aperture-eu.paloaltonetworks.com<br/> APAC: https://api.aperture-apac.paloaltonetworks.com":
      "Die Instanzkonfigurations-URL je nach Serverstandort: <br/>US: https://api.aperture.paloaltonetworks.com<br/> EU: https://api.aperture-eu.paloaltonetworks.com<br/> APAC: https://api.aperture-apac.paloaltonetworks.com",
    "The integration pulls the Mcafee SIEM triggered alarms that are unacknowledged.":
      "Die Integration ruft die von McAfee SIEM ausgelösten Alarme ab, die noch nicht bestätigt wurden.",
    "The integration uses both the Panorama XML API and SSH into the PAN-OS CLI.":
      "Die Integration verwendet sowohl die Panorama-XML-API als auch SSH in die PAN-OS-CLI.",
    "The integration uses the Panorama XML API.":
      "Die Integration verwendet die Panorama-XML-API.",
    "The interval for fetching attack paths.":
      "Das Intervall für den Abruf von Angriffspfaden.",
    "The iZOOlogic API server URL.":
      "Die URL des iZOOlogic-API-Servers.",
    "The Kafka brokers to connect to, as a comma separated list, in the form: ip:port,ip2:port2":
      "Die Kafka-Broker, mit denen eine Verbindung hergestellt werden soll, als kommagetrennte Liste im Format: ip:port,ip2:port2",
    "The KOI API server URL.":
      "Die URL des KOI-API-Servers.",
    "The max incidents per fetch parameter specifies the maximum number of incidents to fetch":
      "Der Parameter für die maximale Anzahl an Incidents pro Abruf gibt die maximale Anzahl der abzurufenden Incidents an",
    "The maximum number of events detections to fetch each time. If the value is greater than 200, it will be considered as 200. The maximum is 200.":
      "Die maximale Anzahl der Ereigniserkennungen, die jedes Mal abgerufen werden. Ist der Wert größer als 200, wird er als 200 gewertet. Das Maximum ist 200.",
    "The maximum number of incidents per fetch":
      "Maximale Anzahl an Incidents pro Abruf",
    "The maximum number of incidents to fetch per Log Type Query. To ensure optimal efficiency, it is strongly advised to keep the limit as low as possible. The maximum is 5,000.":
      "Die maximale Anzahl an Incidents, die pro Protokolltyp-Abfrage abgerufen werden. Um eine optimale Effizienz zu gewährleisten, wird dringend empfohlen, das Limit so niedrig wie möglich zu halten. Das Maximum beträgt 5.000.",
    "The maximum number of incidents to fetch per type per fetch cycle.":
      "Die maximale Anzahl an Incidents, die pro Typ und Abrufzyklus abgerufen werden.",
    "The maximum number of incidents to retrieve per fetch cycle. Hard upper limit is 200. Increase if your environment ingests more PagerDuty incidents per fetch interval than the configured default.":
      "Die maximale Anzahl an Incidents, die pro Abrufzyklus abgerufen werden. Die feste Obergrenze beträgt 200. Erhöhen Sie den Wert, wenn Ihre Umgebung pro Abrufintervall mehr PagerDuty-Incidents aufnimmt als der konfigurierte Standardwert.",
    "The maximum number of items to fetch per type. Applies to both alerts and incidents. Note that when fetching incidents, no more than 50 can be fetched per cycle, due to a Microsoft limitation.":
      "Die maximale Anzahl an Elementen, die pro Typ abgerufen werden. Gilt sowohl für Warnungen als auch für Incidents. Beachten Sie, dass beim Abrufen von Incidents aufgrund einer Microsoft-Beschränkung nicht mehr als 50 pro Zyklus abgerufen werden können.",
    "The message to send to the user to ask for feedback.":
      "Die Nachricht, die an den Benutzer gesendet wird, um Feedback anzufordern.",
    "The mirroring direction in which to mirror the detections. You can mirror 'Incoming' (from Vectra to XSOAR), 'Outgoing' (from XSOAR to Vectra), or in both directions.":
      "Die Spiegelungsrichtung für die Erkennungen. Sie können 'Incoming' (von Vectra zu XSOAR), 'Outgoing' (von XSOAR zu Vectra) oder in beide Richtungen spiegeln.",
    "The mirroring is strictly tied to Incident type “Vectra RUX Events Detection” & Incoming mapper “Vectra RUX - Incoming Mapper” If you want to change or use your custom incident type/mapper then make sure changes related to these are present.":
      "Die Spiegelung ist strikt an den Incident-Typ „Vectra RUX Events Detection“ und den eingehenden Mapper „Vectra RUX - Incoming Mapper“ gebunden. Wenn Sie Ihren eigenen Incident-Typ bzw. Mapper ändern oder verwenden möchten, stellen Sie sicher, dass die damit verbundenen Änderungen vorhanden sind.",
    "The mirroring settings apply only for incidents that are fetched after applying the settings.":
      "Die Spiegelungseinstellungen gelten nur für Incidents, die nach dem Anwenden der Einstellungen abgerufen werden.",
    "The name of the lookup column containing the Cortex username.":
      "Der Name der Lookup-Spalte, die den Cortex-Benutzernamen enthält.",
    "The name of the lookup table containing the Splunk username.":
      "Der Name der Lookup-Tabelle, die den Splunk-Benutzernamen enthält.",
    "The name of the lookup table in Splunk, containing the username's mapping data.":
      "Der Name der Lookup-Tabelle in Splunk, die die Zuordnungsdaten der Benutzernamen enthält.",
    "The name of the MCP server on the ServiceNow instance. Use `sn_mcp_server_default` for the preconfigured Quickstart Server.":
      "Der Name des MCP-Servers auf der ServiceNow-Instanz. Verwenden Sie `sn_mcp_server_default` für den vorkonfigurierten Quickstart Server.",
    "The number of objects to process. Maximum value is 500":
      "Die Anzahl der zu verarbeitenden Objekte. Der Maximalwert beträgt 500",
    "The number of times to try and re-create connections with rapid7 instance when there are temporary connection errors":
      "Die Anzahl der Versuche, Verbindungen zur rapid7-Instanz neu aufzubauen, wenn vorübergehende Verbindungsfehler auftreten",
    "The OAuth 2.0 client ID from ZIdentity.":
      "Die OAuth-2.0-Client-ID von ZIdentity.",
    "The OAuth 2.0 client secret from ZIdentity.":
      "Das OAuth-2.0-Client-Secret von ZIdentity.",
    "The operations are accessed through port 10000.":
      "Der Zugriff auf die Vorgänge erfolgt über Port 10000.",
    "The optional model name that overrides the selected model.":
      "Der optionale Modellname, der das ausgewählte Modell überschreibt.",
    "The Palo Alto Networks Best Practice Assessment (BPA) measures your usage of our Next-Generation Firewall (NGFW) and Panorama™ security management capabilities across your deployment, enabling you to make adjustments that maximize your return on investment and strengthen security.":
      "Die Palo Alto Networks Best Practice Assessment (BPA) misst Ihre Nutzung unserer Next-Generation Firewall (NGFW) und der Sicherheitsverwaltungsfunktionen von Panorama™ in Ihrer gesamten Bereitstellung und ermöglicht Ihnen Anpassungen, die Ihren Return on Investment maximieren und die Sicherheit stärken.",
    "The Panorama integration now supports fetch incidents.":
      "Die Panorama-Integration unterstützt jetzt das Abrufen von Incidents.",
    "The Panorays API permits 150 requests per minute and blocks the caller for one hour when that is exceeded. Keep this below 150.":
      "Die Panorays-API erlaubt 150 Anfragen pro Minute und sperrt den Aufrufer für eine Stunde, wenn dieser Wert überschritten wird. Halten Sie den Wert unter 150.",
    "The parameter uses the AQL SELECT syntax. For more info see: https://www.ibm.com/support/knowledgecenter/en/SS42VS_7.3.3/com.ibm.qradar.doc/c_aql_intro.html":
      "Der Parameter verwendet die AQL-SELECT-Syntax. Weitere Informationen finden Sie unter: https://www.ibm.com/support/knowledgecenter/en/SS42VS_7.3.3/com.ibm.qradar.doc/c_aql_intro.html",
    "The per-request timeout for calls to the Tenzai API. Kept low so a stalled or unreachable host fails fast and the validation poll automation can reschedule instead of exceeding its execution timeout.":
      "Das Timeout pro Anfrage für Aufrufe der Tenzai-API. Es wird niedrig gehalten, damit ein hängender oder nicht erreichbarer Host schnell fehlschlägt und die Automatisierung für die Validierungsabfrage neu geplant werden kann, anstatt ihr Ausführungs-Timeout zu überschreiten.",
    "The port for the Elastic API.":
      "Der Port für die Elastic-API.",
    "The port for the Kibana API.":
      "Der Port für die Kibana-API.",
    "The port in Splunk server which is open to the REST API calls.":
      "Der Port auf dem Splunk-Server, der für REST-API-Aufrufe geöffnet ist.",
    "The possible values for severities can be found under “policy.severity” entry. In order to add a severity, use the filter name “policy.severity”":
      "Die möglichen Werte für Schweregrade finden Sie im Eintrag „policy.severity“. Um einen Schweregrad hinzuzufügen, verwenden Sie den Filternamen „policy.severity“",
    "The queries that will be included during the fetch are decided according to the “Log Type” parameter (Multiple select dropdown).":
      "Die beim Abruf einbezogenen Abfragen werden anhand des Parameters „Log Type“ (Dropdown mit Mehrfachauswahl) bestimmt.",
    "The query to use when fetching incidents":
      "Die Abfrage, die beim Abrufen von Incidents verwendet wird",
    "The query used to collect indicators to sync from Cortex.":
      "Die Abfrage, mit der die aus Cortex zu synchronisierenden Indikatoren erfasst werden.",
    "The raw JSON string to use as the sample data":
      "Der JSON-Rohstring, der als Beispieldaten verwendet wird",
    "The redirect URI registered in the ServiceNow OAuth Inbound Integration. Must match the URI configured on the ServiceNow side.":
      "Der in der ServiceNow OAuth Inbound Integration registrierte Redirect-URI. Er muss mit dem auf der ServiceNow-Seite konfigurierten URI übereinstimmen.",
    "The required information is automatically retrieved from your Cortex TIM license.":
      "Die erforderlichen Informationen werden automatisch aus Ihrer Cortex-TIM-Lizenz abgerufen.",
    "The scope of the rule-set should be narrowed to catch only indicators that you want to analyze by a playbook.":
      "Der Umfang des Regelsatzes sollte so eingegrenzt werden, dass nur Indikatoren erfasst werden, die Sie mit einem Playbook analysieren möchten.",
    "The Server URL assigned to your organization. For example, www.acme.zslogin.net.":
      "Die Ihrer Organisation zugewiesene Server-URL. Zum Beispiel www.acme.zslogin.net.",
    "The server URL of your Magnet Automate instance.":
      "Die Server-URL Ihrer Magnet-Automate-Instanz.",
    "The ServiceNow instance URL (e.g., `https://dev12345.service-now.com`).":
      "Die URL der ServiceNow-Instanz (z. B. `https://dev12345.service-now.com`).",
    "The Silent Push platform focuses on proactive threat intelligence and threat hunting. It offers a comprehensive view of global internet-facing infrastructure, helping organizations detect and counteract cyber threats before they manifest.":
      "Die Silent-Push-Plattform konzentriert sich auf proaktive Bedrohungsinformationen und Threat Hunting. Sie bietet einen umfassenden Überblick über die weltweite internetexponierte Infrastruktur und hilft Organisationen, Cyberbedrohungen zu erkennen und abzuwehren, bevor sie sich auswirken.",
    "The simplest way to acquire this token is for an Org Owner to create a new Slack app, add the admin OAuth scope, install the app, and use the generated token.":
      "Der einfachste Weg, dieses Token zu erhalten, besteht darin, dass ein Org Owner eine neue Slack-App erstellt, den OAuth-Scope admin hinzufügt, die App installiert und das generierte Token verwendet.",
    "The single mailbox this integration operates against. During authentication, ensure you are logged in to this email address. This mailbox is used by fetch-incidents and by all mail commands. Because this integration uses delegated permissions, it can only access this signed-in user's mailbox.":
      "Das einzelne Postfach, auf dem diese Integration arbeitet. Stellen Sie bei der Authentifizierung sicher, dass Sie mit dieser E-Mail-Adresse angemeldet sind. Dieses Postfach wird von fetch-incidents und von allen E-Mail-Befehlen verwendet. Da diese Integration delegierte Berechtigungen verwendet, kann sie nur auf das Postfach des angemeldeten Benutzers zugreifen.",
    "The Splunk search query by which to fetch events. The default query fetches ES finding events. You can edit this query to fetch other types of events. Note, that to fetch ES finding events, make sure to include the \\`notable\\` macro in your query.":
      "Die Splunk-Suchabfrage, mit der Ereignisse abgerufen werden. Die Standardabfrage ruft ES-finding-Ereignisse ab. Sie können diese Abfrage bearbeiten, um andere Ereignistypen abzurufen. Beachten Sie, dass Sie das Makro `notable` in Ihre Abfrage aufnehmen müssen, um ES-finding-Ereignisse abzurufen.",
    "The Splunk search query by which to fetch events. The default query fetches ES notable events. You can edit this query to fetch other types of events. Note, that to fetch ES notable events, make sure to include the \\`notable\\` macro in your query.":
      "Die Splunk-Suchabfrage, mit der Ereignisse abgerufen werden. Die Standardabfrage ruft ES-notable-Ereignisse ab. Sie können diese Abfrage bearbeiten, um andere Ereignistypen abzurufen. Beachten Sie, dass Sie das Makro `notable` in Ihre Abfrage aufnehmen müssen, um ES-notable-Ereignisse abzurufen.",
    "The Splunk server URL. Port 8089 (Splunk's default REST API port) is used automatically. Only include the port in the URL if using a non-default port. Examples: 'https://splunk.example.com' (uses default port 8089) or 'https://splunk.example.com:8090' (uses custom port 8090).":
      "Die Splunk-Server-URL. Port 8089 (der Standard-REST-API-Port von Splunk) wird automatisch verwendet. Geben Sie den Port in der URL nur an, wenn Sie einen anderen als den Standardport verwenden. Beispiele: 'https://splunk.example.com' (verwendet den Standardport 8089) oder 'https://splunk.example.com:8090' (verwendet den benutzerdefinierten Port 8090).",
    "The Standard Authentication Profile of type Oauth should be already present in ServiceNow and has to be added to the Policy.":
      "Das Standard-Authentifizierungsprofil vom Typ OAuth muss bereits in ServiceNow vorhanden sein und der Richtlinie hinzugefügt werden.",
    "The statuses of PagerDuty incidents to ingest. Include \"resolved\" to capture short-lived incidents that move to resolved between fetch cycles.":
      "Die Status der PagerDuty-Incidents, die aufgenommen werden sollen. Nehmen Sie „resolved“ auf, um kurzlebige Incidents zu erfassen, die zwischen Abrufzyklen auf „resolved“ wechseln.",
    "The tag value should be used to mirror the detection note by adding the same tag in the notes.":
      "Der Tag-Wert muss verwendet werden, um die Erkennungsnotiz zu spiegeln, indem derselbe Tag in den Notizen hinzugefügt wird.",
    "The Tennant Service Group must contain an active “AIOps for NGFW (Free)” application.":
      "Die Tenant-Servicegruppe muss eine aktive Anwendung „AIOps for NGFW (Free)“ enthalten.",
    "The Tennant Service Group must contain an active “AIOps for NGFW (Free)” application. For more information about the service activation, visit the following link: https://docs.paloaltonetworks.com/ngfw/aiops/about/activate-aiops-for-ngfw#activate-aiops-for-ngfw_section_xjs_p55_fyb":
      "Die Tenant-Servicegruppe muss eine aktive Anwendung „AIOps for NGFW (Free)“ enthalten. Weitere Informationen zur Dienstaktivierung finden Sie unter folgendem Link: https://docs.paloaltonetworks.com/ngfw/aiops/about/activate-aiops-for-ngfw#activate-aiops-for-ngfw_section_xjs_p55_fyb",
    "The Test button does not ensure sufficient permissions for all integration commands.":
      "Die Schaltfläche „Testen“ stellt nicht sicher, dass die Berechtigungen für alle Integrationsbefehle ausreichen.",
    "The Threatmon integration allows Cortex to connect with the Threatmon platform to automatically retrieve and update incident data. This integration is designed to help security teams streamline incident management workflows by synchronizing Threatmon alarms and their status directly into XSOAR.":
      "Die Threatmon-Integration ermöglicht es Cortex, sich mit der Threatmon-Plattform zu verbinden, um Incident-Daten automatisch abzurufen und zu aktualisieren. Diese Integration soll Sicherheitsteams helfen, ihre Incident-Management-Workflows zu optimieren, indem Threatmon-Alarme und deren Status direkt mit XSOAR synchronisiert werden.",
    "The ticket type can be: incident, problem, change_request, sc_request, sc_task or sc_req_item.":
      "Der Ticket-Typ kann sein: incident, problem, change_request, sc_request, sc_task oder sc_req_item.",
    "The time range between create_after and created_before that is sent to the API when fetching older incidents. If timeout errors occur, consider changing this value.":
      "Der Zeitbereich zwischen create_after und created_before, der beim Abrufen älterer Incidents an die API gesendet wird. Wenn Timeout-Fehler auftreten, sollten Sie diesen Wert ändern.",
    "The time range for the initial data fetch. If timeout errors occur, consider changing this value.":
      "Der Zeitbereich für den ersten Datenabruf. Wenn Timeout-Fehler auftreten, sollten Sie diesen Wert ändern.",
    "The timeout for HTTP(S) requests (in seconds) to the Proofpoint server.":
      "Das Timeout für HTTP(S)-Anfragen an den Proofpoint-Server (in Sekunden).",
    "The timeout of the HTTP requests sent to Cortex (in seconds).":
      "Das Timeout der an Cortex gesendeten HTTP-Anfragen (in Sekunden).",
    "The timeout of the HTTP requests sent to McAfee ePO API (in seconds), the max timeout allowed is 300s.":
      "Das Timeout der an die McAfee-ePO-API gesendeten HTTP-Anfragen (in Sekunden); das maximal zulässige Timeout beträgt 300 s.",
    "The timeout of the HTTP requests sent to Microsoft Graph API (in seconds).":
      "Das Timeout der an die Microsoft-Graph-API gesendeten HTTP-Anfragen (in Sekunden).",
    "The URL to use for the Submission Service.":
      "Die URL, die für den Submission Service verwendet wird.",
    "The URL to use for the Takedown Service.":
      "Die URL, die für den Takedown Service verwendet wird.",
    "The user must also have the “Allow Multiple Logins” capability.":
      "Der Benutzer muss außerdem über die Berechtigung „Allow Multiple Logins“ verfügen.",
    "The value can be updated if necessary.":
      "Der Wert kann bei Bedarf aktualisiert werden.",
    "The value of kid in JWT Verifier Maps has to be the same as Key Id in JWT signing key.":
      "Der Wert von kid in JWT Verifier Maps muss mit der Key Id im JWT signing key übereinstimmen.",
    "The vsys is located in the Firewall URL; e.g., https://<server>#device::<vsys>::device/setup":
      "Das vsys befindet sich in der Firewall-URL, z. B. https://<server>#device::<vsys>::device/setup",
    "The webhook URL in the Teams channel.":
      "Die Webhook-URL im Teams-Kanal.",
    "There are 2 methods to authenticate.":
      "Es gibt 2 Methoden zur Authentifizierung.",
    "There are two main use cases for the SplunkPy integration.":
      "Es gibt zwei Hauptanwendungsfälle für die SplunkPy-Integration.",
    "There are two main use cases for the SplunkPy v2 integration.":
      "Es gibt zwei Hauptanwendungsfälle für die SplunkPy-v2-Integration.",
    "There is a limit to 1000 API calls per day with the free dev API key.":
      "Mit dem kostenlosen Entwickler-API-Schlüssel sind nur 1000 API-Aufrufe pro Tag möglich.",
    "Therefore, we can’t use index time as our primary search key without making the searches inefficient.":
      "Daher können wir die Indexzeit nicht als primären Suchschlüssel verwenden, ohne die Suchen ineffizient zu machen.",
    "These roles are required to make API calls.":
      "Diese Rollen sind erforderlich, um API-Aufrufe durchzuführen.",
    "This article will help you configure your Splunk integration, set up a basic flow, and start ingesting incidents from Splunk to Cortex.":
      "Dieser Artikel hilft Ihnen, Ihre Splunk-Integration zu konfigurieren, einen einfachen Ablauf einzurichten und mit der Aufnahme von Incidents von Splunk in Cortex zu beginnen.",
    "This delay can be caused by an inefficient Splunk architecture, causing higher event indexing latency. However, it can also be “by design”, e.g., if some endpoints / machines that generate Splunk events are usually offline.":
      "Diese Verzögerung kann durch eine ineffiziente Splunk-Architektur verursacht werden, die zu einer höheren Latenz bei der Ereignisindizierung führt. Sie kann aber auch „gewollt“ sein, z. B. wenn einige Endpunkte bzw. Rechner, die Splunk-Ereignisse erzeugen, normalerweise offline sind.",
    "This delay can be caused by an inefficient Splunk architecture, causing higher event indexing latency. However, it can also be “by design”, e.g., if some endpoints or machines that generate Splunk events are frequently offline.":
      "Diese Verzögerung kann durch eine ineffiziente Splunk-Architektur verursacht werden, die zu einer höheren Latenz bei der Ereignisindizierung führt. Sie kann aber auch „gewollt“ sein, z. B. wenn einige Endpunkte bzw. Rechner, die Splunk-Ereignisse erzeugen, häufig offline sind.",
    "This enrichment provides additional information about assets, drilldown, and identities that are related to the finding events you ingest.":
      "Diese Anreicherung liefert zusätzliche Informationen zu Assets, Drilldown und Identitäten, die mit den aufgenommenen finding-Ereignissen in Zusammenhang stehen.",
    "This feature is available from Cortex version 6.0.0.":
      "Diese Funktion ist ab Cortex-Version 6.0.0 verfügbar.",
    "This feature is compliant with XSOAR version 6.0 and above.":
      "Diese Funktion ist mit XSOAR ab Version 6.0 kompatibel.",
    "This feature is supported by Splunk Enterprise Security only.":
      "Diese Funktion wird nur von Splunk Enterprise Security unterstützt.",
    "This field determines from which instance the XSOAR incident was created. It is a required field for XSOAR to enable mirroring support.":
      "Dieses Feld legt fest, aus welcher Instanz der XSOAR-Incident erstellt wurde. Es ist ein Pflichtfeld, damit XSOAR die Spiegelung unterstützen kann.",
    "This field determines the mirroring direction for the incident. It is a required field for XSOAR to enable mirroring support.":
      "Dieses Feld legt die Spiegelungsrichtung für den Incident fest. Es ist ein Pflichtfeld, damit XSOAR die Spiegelung unterstützen kann.",
    "This field determines what would be the tag needed to mirror the XSOAR entry out to Vectra RUX. It is a required field for XSOAR to enable mirroring support.":
      "Dieses Feld legt fest, welcher Tag erforderlich ist, um den XSOAR-Eintrag nach Vectra RUX zu spiegeln. Es ist ein Pflichtfeld, damit XSOAR die Spiegelung unterstützen kann.",
    "This field is require when running as ‘long running instance’ - please set the max amount of events to fetch.":
      "Dieses Feld ist erforderlich, wenn die Ausführung als ‘long running instance’ erfolgt. Legen Sie bitte die maximale Anzahl der abzurufenden Ereignisse fest.",
    "This implies that new fetched events might have a slightly different structure than old events fetched so far.":
      "Dies bedeutet, dass neu abgerufene Ereignisse eine etwas andere Struktur haben können als die bisher abgerufenen älteren Ereignisse.",
    "This integration allows 3 types of enrichments for fetched findings: Drilldown, Asset, and Identity.":
      "Diese Integration ermöglicht 3 Arten der Anreicherung für abgerufene Findings: Drilldown, Asset und Identity.",
    "This integration allows 3 types of enrichments for fetched notables: Drilldown, Asset, and Identity.":
      "Diese Integration ermöglicht 3 Arten der Anreicherung für abgerufene Notables: Drilldown, Asset und Identity.",
    "This integration can be used to pull indicators from ServiceNow with a given user query and add them to the Threat Intelligence Module.":
      "Mit dieser Integration können Indikatoren mit einer vorgegebenen Benutzerabfrage aus ServiceNow abgerufen und dem Threat Intelligence Module hinzugefügt werden.",
    "This integration connects securely with a ServiceNow Model Context Protocol (MCP) server, allowing you to access its tools in real time.":
      "Diese Integration stellt eine sichere Verbindung zu einem ServiceNow-Model-Context-Protocol-(MCP-)Server her und ermöglicht Ihnen den Zugriff auf dessen Tools in Echtzeit.",
    "This integration currently supports fetching DLP incidents from “NGFW” and “Prisma Access” channels only.":
      "Diese Integration unterstützt derzeit nur das Abrufen von DLP-Incidents aus den Kanälen „NGFW“ und „Prisma Access“.",
    "This integration enables Cortex to access and run commands on a terminal in a remote location (via SSH).":
      "Diese Integration ermöglicht es Cortex, auf ein Terminal an einem entfernten Standort zuzugreifen (über SSH) und dort Befehle auszuführen.",
    "This integration enables executing commands with different permission levels.":
      "Diese Integration ermöglicht die Ausführung von Befehlen mit unterschiedlichen Berechtigungsstufen.",
    "This integration enables you to manage the features that are available in the Security & Compliance Center from Cortex XSOAR/XSIAM.":
      "Mit dieser Integration können Sie die im Security & Compliance Center verfügbaren Funktionen über Cortex XSOAR/XSIAM verwalten.",
    "This integration enables you to manage the features that are available in the Security & Compliance Center from XSOAR.":
      "Mit dieser Integration können Sie die im Security & Compliance Center verfügbaren Funktionen über XSOAR verwalten.",
    "This integration enables you to programmatically generate BPA data for both the free and premium instances of AIOps for NGFW.":
      "Mit dieser Integration können Sie BPA-Daten programmgesteuert sowohl für die kostenlosen als auch für die Premium-Instanzen von AIOps for NGFW generieren.",
    "This integration enables you to run message traces and manage junk mail rules in Microsoft O365 - Exchange Online.":
      "Mit dieser Integration können Sie Nachrichtenverfolgungen ausführen und Junk-E-Mail-Regeln in Microsoft O365 - Exchange Online verwalten.",
    "This integration is for uploading and downloading files from an SMB server.":
      "Diese Integration dient zum Hoch- und Herunterladen von Dateien von einem SMB-Server.",
    "This integration is set up by default on Cortex with the Threat Intel Module (TIM). It is designed for internal use with the TIM Sample Analysis feature. To run ad hoc CLI commands to generate WildFire reports, use the Palo Alto Networks WildFire v2 integration instead.":
      "Diese Integration ist in Cortex standardmäßig mit dem Threat Intel Module (TIM) eingerichtet. Sie ist für die interne Verwendung mit der Funktion TIM Sample Analysis vorgesehen. Um Ad-hoc-CLI-Befehle zur Erstellung von WildFire-Berichten auszuführen, verwenden Sie stattdessen die Integration Palo Alto Networks WildFire v2.",
    "This integration only supports Carbon Black Cloud on-premise APIs.":
      "Diese Integration unterstützt nur die On-Premise-APIs von Carbon Black Cloud.",
    "This integration requires a Cortex Threat Intelligence Management (TIM) license.":
      "Diese Integration erfordert eine Cortex-Threat-Intelligence-Management-(TIM-)Lizenz.",
    "This integration requires a Threat Intelligence Management (TIM) license.":
      "Diese Integration erfordert eine Threat-Intelligence-Management-(TIM-)Lizenz.",
    "This integration searches the unified audit log to view user and administrator activity in your organization.":
      "Diese Integration durchsucht das einheitliche Überwachungsprotokoll, um die Aktivitäten von Benutzern und Administratoren in Ihrer Organisation anzuzeigen.",
    "This integration supports a default Classifier (Panorama Classifier) and Mapper (Panorama Mapper) that handles incidents returned from the API.":
      "Diese Integration unterstützt einen Standard-Classifier (Panorama Classifier) und einen Mapper (Panorama Mapper), die die von der API zurückgegebenen Incidents verarbeiten.",
    "This integration was integrated and tested with McAfee ePO v5.3.2 and v5.10.0 .":
      "Diese Integration wurde mit McAfee ePO v5.3.2 und v5.10.0 integriert und getestet.",
    "This integration was integrated and tested with version 1.0 of Prisma SASE API.":
      "Diese Integration wurde mit Version 1.0 der Prisma-SASE-API integriert und getestet.",
    "This integration was integrated and tested with version 3.5 of Vectra API.":
      "Diese Integration wurde mit Version 3.5 der Vectra-API integriert und getestet.",
    "This integration was integrated and tested with version 8.11.12 of Proofpoint Protection Server.":
      "Diese Integration wurde mit Version 8.11.12 von Proofpoint Protection Server integriert und getestet.",
    "This integration was integrated and tested with version xx of VulnDB":
      "Diese Integration wurde mit Version xx von VulnDB integriert und getestet",
    "This is how the filter is applied to the query: “ORDERBYopened_at^opened_at>[Last Run]. To prevent duplicate incidents, this field is mandatory for fetching incidents.":
      "So wird der Filter auf die Abfrage angewendet: “ORDERBYopened_at^opened_at>[Last Run]. Um doppelte Incidents zu vermeiden, ist dieses Feld für den Abruf von Incidents obligatorisch.",
    "This method applies to Jamf versions 10.35.0 and above.":
      "Diese Methode gilt für Jamf ab Version 10.35.0.",
    "This method applies to Jamf versions 10.49.0 and above.":
      "Diese Methode gilt für Jamf ab Version 10.49.0.",
    "This parameter determines the size of the occurrence time “sliding window” we will support in our queries. For example, if set for 2 hours, we will always search for events that occurred up to 2 hours ago (and will of course ignore duplicates).":
      "Dieser Parameter legt die Größe des „gleitenden Fensters“ für die Auftrittszeit fest, das wir in unseren Abfragen unterstützen. Ist er beispielsweise auf 2 Stunden festgelegt, suchen wir immer nach Ereignissen, die bis zu 2 Stunden zurückliegen (und ignorieren selbstverständlich Duplikate).",
    "This parameter will write additional data to the logs and should only be used when you are directed to by XSOAR support.":
      "Dieser Parameter schreibt zusätzliche Daten in die Protokolle und sollte nur verwendet werden, wenn der XSOAR-Support Sie dazu auffordert.",
    "This section explains how to configure the instance of Hello IAM World in Cortex.":
      "In diesem Abschnitt wird erläutert, wie Sie die Instanz von Hello IAM World in Cortex konfigurieren.",
    "This section explains how to fully configure the instance of Orca Security in Cortex.":
      "In diesem Abschnitt wird erläutert, wie Sie die Instanz von Orca Security in Cortex vollständig konfigurieren.",
    "This section will help you configure your Splunk v2 integration, set up a basic flow, and start ingesting events from Splunk to Cortex XSIAM.":
      "Dieser Abschnitt hilft Ihnen, Ihre Splunk-v2-Integration zu konfigurieren, einen einfachen Ablauf einzurichten und mit der Aufnahme von Ereignissen von Splunk in Cortex XSIAM zu beginnen.",
    "This value is mapped to the dbotMirrorTags incident field in Cortex, which defines how Cortex handles notes when you tag them in the War Room. This is required for mirroring notes from Cortex to Vectra RUX.":
      "Dieser Wert wird dem Incident-Feld dbotMirrorTags in Cortex zugeordnet und legt fest, wie Cortex Notizen behandelt, wenn Sie sie im War Room taggen. Er ist erforderlich, um Notizen von Cortex nach Vectra RUX zu spiegeln.",
    "Threatmon API credentials (API key).":
      "Threatmon-API-Anmeldedaten (API-Schlüssel).",
    "Threatmon Integration":
      "Threatmon-Integration",
    "Threatmon is a threat intelligence and monitoring platform that provides actionable alerts to security teams. Integrating Threatmon with XSOAR enables more efficient triage, faster response times, and better visibility into your security operations.":
      "Threatmon ist eine Plattform für Bedrohungsinformationen und Überwachung, die Sicherheitsteams umsetzbare Warnungen liefert. Die Integration von Threatmon in XSOAR ermöglicht eine effizientere Triage, schnellere Reaktionszeiten und eine bessere Transparenz Ihrer Sicherheitsabläufe.",
    "ThreatX Server URL (e.g., https://provision.threatx.io)":
      "ThreatX-Server-URL (z. B. https://provision.threatx.io)",
    "Threshold":
      "Schwellenwert",
    "Through the integration you can subscribe to new content types or stop your subscription, list the available content of each content type, and most importantly - fetch new content records from content types of your choice as Cortex incidents.":
      "Mit der Integration können Sie neue Inhaltstypen abonnieren oder Ihr Abonnement beenden, die verfügbaren Inhalte der einzelnen Inhaltstypen auflisten und – vor allem – neue Inhaltsdatensätze aus Inhaltstypen Ihrer Wahl als Cortex-Incidents abrufen.",
    "Time between fetches (in seconds). The actual time will be the maximum between the selected value and the server configuration.":
      "Zeit zwischen Abrufen (in Sekunden). Die tatsächliche Zeit entspricht dem Maximum aus dem ausgewählten Wert und der Serverkonfiguration.",
    "Time to wait before taking a screenshot (in seconds)":
      "Wartezeit vor der Erstellung eines Screenshots (in Sekunden)",
    "Time zone of the collector to fetch from (see detailed description)":
      "Zeitzone des Collectors, von dem abgerufen wird (siehe ausführliche Beschreibung)",
    "Timeframe for first fetch (in seconds)":
      "Zeitraum für den ersten Abruf (in Sekunden)",
    "Timeout (in seconds) for HTTP requests to Zscaler":
      "Timeout (in Sekunden) für HTTP-Anfragen an Zscaler",
    "Timestamp field to filter by (e.g., `opened_at`)":
      "Zeitstempelfeld, nach dem gefiltert wird (z. B. `opened_at`)",
    "Timestamp field to filter by (e.g., `opened_at`) This is how the filter is applied to the query: “ORDERBYopened_at^opened_at>[Last Run]. To prevent duplicate incidents, this field is mandatory for fetching incidents.":
      "Zeitstempelfeld, nach dem gefiltert wird (z. B. `opened_at`). So wird der Filter auf die Abfrage angewendet: „ORDERBYopened_at^opened_at>[Last Run]. Um doppelte Incidents zu vermeiden, ist dieses Feld zum Abrufen von Incidents obligatorisch.",
    "Timestamp field to filter by (e.g., `opened_at`) This is how the filter is applied to the query: \"ORDERBYopened_at^opened_at>[Last Run]\".":
      "Zeitstempelfeld, nach dem gefiltert wird (z. B. `opened_at`). So wird der Filter auf die Abfrage angewendet: „ORDERBYopened_at^opened_at>[Last Run]“.",
    "Timestamp field to filter by (e.g., `opened_at`) This is how the filter is applied to the query: \"ORDERBYopened_at^opened_at>[Last Run]\". To prevent duplicate incidents, this field is mandatory for fetching incidents.":
      "Zeitstempelfeld, nach dem gefiltert wird (z. B. `opened_at`). So wird der Filter auf die Abfrage angewendet: „ORDERBYopened_at^opened_at>[Last Run]“. Um doppelte Incidents zu vermeiden, ist dieses Feld zum Abrufen von Incidents obligatorisch.",
    "Timezone of Nitro ESM server in minutes e.g. for gmt +3 set +180 (set only if different than Cortex XSOAR server)":
      "Zeitzone des Nitro-ESM-Servers in Minuten; z. B. für GMT+3 den Wert +180 festlegen (nur festlegen, wenn sie sich vom Cortex-XSOAR-Server unterscheidet)",
    "Tip":
      "Tipp",
    "To choose a specific set of queries, select their log types from the dropdown (make sure “All” option is unselected).":
      "Um eine bestimmte Gruppe von Abfragen auszuwählen, wählen Sie ihre Protokolltypen aus der Dropdown-Liste aus (stellen Sie sicher, dass die Option „All“ nicht ausgewählt ist).",
    "To choose a specific set of queries, select their log types from the dropdown (make sure the 'All' option is unselected).":
      "Um eine bestimmte Gruppe von Abfragen auszuwählen, wählen Sie ihre Protokolltypen aus der Dropdown-Liste aus (stellen Sie sicher, dass die Option 'All' nicht ausgewählt ist).",
    "To configure this integration you can either use Email and Password, or the API token.":
      "Zur Konfiguration dieser Integration können Sie entweder E-Mail-Adresse und Passwort oder das API-Token verwenden.",
    "To generate the new token, press the “Generate” button under the API Tokens section and fill the required details.":
      "Um das neue Token zu generieren, klicken Sie im Abschnitt „API Tokens“ auf die Schaltfläche „Generate“ und geben Sie die erforderlichen Details ein.",
    "To prevent duplicate incidents, this field is mandatory for fetching incidents.":
      "Um doppelte Incidents zu vermeiden, ist dieses Feld zum Abrufen von Incidents obligatorisch.",
    "To reduce the number of lookups made to the VT API, this option can be selected to gracefully skip enrichment of any IP addresses allocated for private networks.":
      "Um die Anzahl der Abfragen an die VT-API zu reduzieren, können Sie diese Option auswählen, um die Anreicherung von IP-Adressen privater Netzwerke problemlos zu überspringen.",
    "To use a custom mapper, you must first duplicate the mapper and update the fields in the copy of the mapper. (Refer to the “Create a custom mapper consisting of the default Vectra RUX mapper” section for more information.)":
      "Um einen benutzerdefinierten Mapper zu verwenden, müssen Sie zuerst den Mapper duplizieren und die Felder in der Kopie aktualisieren. (Weitere Informationen finden Sie im Abschnitt „Create a custom mapper consisting of the default Vectra RUX mapper“.)",
    "To use ServiceNow on Cortex, ensure your user account has the rest_api_explorer and web_service_admin roles.":
      "Um ServiceNow in Cortex zu verwenden, stellen Sie sicher, dass Ihrem Benutzerkonto die Rollen rest_api_explorer und web_service_admin zugewiesen sind.",
    "To use this integration, you need a VirusTotal API key.":
      "Zur Verwendung dieser Integration benötigen Sie einen VirusTotal-API-Schlüssel.",
    "To use this integration, you need to add a new Azure App Registration in the Azure Portal.":
      "Zur Verwendung dieser Integration müssen Sie im Azure-Portal eine neue Azure-App-Registrierung hinzufügen.",
    "To use this integration, you will need to add a new Azure App Registration in the Azure Portal.":
      "Zur Verwendung dieser Integration müssen Sie im Azure-Portal eine neue Azure-App-Registrierung hinzufügen.",
    "Token (received from the admin consent - see Detailed Instructions (?)":
      "Token (vom Administratorkonsens erhalten - siehe ausführliche Anweisungen (?)",
    "Token Exchange":
      "Token-Austausch",
    "Token Format":
      "Token-Format",
    "Token ID":
      "Token-ID",
    "Token ID and Token Key (credentials field)":
      "Token-ID und Token-Schlüssel (Anmeldedatenfeld)",
    "Token Key":
      "Token-Schlüssel",
    "Troubleshooting enrichment status":
      "Fehlerbehebung beim Anreicherungsstatus",
    "Trust any certificate (not secure). Make sure to mark this parameter if you want the SlackBlockBuilder script to send a response back to the incident context.":
      "Jedem Zertifikat vertrauen (nicht sicher). Aktivieren Sie diesen Parameter, wenn das Skript SlackBlockBuilder eine Antwort an den Incident-Kontext zurücksenden soll.",
    "Two-factor authentication (2FA) must be enabled on the console and configured for the account accessing the API.":
      "Die Zwei-Faktor-Authentifizierung (2FA) muss in der Konsole aktiviert und für das Konto konfiguriert sein, das auf die API zugreift.",
    "Type of authentication - either Authorization Code (recommended) or Client Credentials.":
      "Authentifizierungstyp: entweder Authorization Code (empfohlen) oder Client Credentials.",
    "Type the Host -ip, username, password, and Port.":
      "Geben Sie die Host-IP, den Benutzernamen, das Passwort und den Port ein.",
    "Uncheck the “Close Detection on Incident Closure” option if you don’t want to close the detection in Vectra when the incident is closed in XSOAR. This option is only used when the mirroring direction is set to ‘Outgoing’ or ‘Incoming And Outgoing’.":
      "Deaktivieren Sie die Option „Close Detection on Incident Closure“, wenn die Erkennung in Vectra nicht geschlossen werden soll, sobald der Incident in XSOAR geschlossen wird. Diese Option wird nur verwendet, wenn die Spiegelungsrichtung auf 'Outgoing' oder 'Incoming And Outgoing' festgelegt ist.",
    "Uncheck the “Open Detection on Incident Reopen” option if you don’t want to open the detection in Vectra when the incident is reopened in XSOAR. This option is only used when the mirroring direction is set to ‘Outgoing’ or ‘Incoming And Outgoing’.":
      "Deaktivieren Sie die Option „Open Detection on Incident Reopen“, wenn die Erkennung in Vectra nicht geöffnet werden soll, sobald der Incident in XSOAR erneut geöffnet wird. Diese Option wird nur verwendet, wenn die Spiegelungsrichtung auf 'Outgoing' oder 'Incoming And Outgoing' festgelegt ist.",
    "Under Classifier, select “N/A”.":
      "Wählen Sie unter Classifier „N/A“ aus.",
    "Under Classifier, select N/A.":
      "Wählen Sie unter Classifier N/A aus.",
    "Under Incident type, select “Vectra RUX Events Detection”.":
      "Wählen Sie unter Incident type „Vectra RUX Events Detection“ aus.",
    "Under Mapper (incoming), select “Vectra RUX - Incoming Mapper” for default mapping.":
      "Wählen Sie unter Mapper (incoming) „Vectra RUX - Incoming Mapper“ für das Standard-Mapping aus.",
    "Update “Max Fetch” & “First Fetch Time” based on your requirements.":
      "Aktualisieren Sie „Max Fetch“ und „First Fetch Time“ entsprechend Ihren Anforderungen.",
    "Update the status of existing Threatmon incidents (e.g., Open, In Progress, Resolved).":
      "Aktualisieren Sie den Status vorhandener Threatmon-Incidents (z. B. Open, In Progress, Resolved).",
    "Update the status of Threatmon incidents from within XSOAR.":
      "Aktualisieren Sie den Status von Threatmon-Incidents direkt in XSOAR.",
    "UPN Password":
      "UPN-Passwort",
    "URL and Port":
      "URL und Port",
    "URL Malicious Threshold. Minimum number of positive results from VT scanners to consider the URL malicious.":
      "Schwellenwert für bösartige URLs. Mindestanzahl positiver Ergebnisse von VT-Scannern, ab der die URL als bösartig eingestuft wird.",
    "URL of the Vectra AI platform.":
      "URL der Vectra-AI-Plattform.",
    "URL Relationships":
      "URL-Beziehungen",
    "URL Suspicious Threshold. Minimum number of positive and suspicious results from VT scanners to consider the URL suspicious.":
      "Schwellenwert für verdächtige URLs. Mindestanzahl positiver und verdächtiger Ergebnisse von VT-Scannern, ab der die URL als verdächtig eingestuft wird.",
    "URL Threshold. Minimum number of positive results from VT scanners to consider the URL malicious.":
      "URL-Schwellenwert. Mindestanzahl positiver Ergebnisse von VT-Scannern, ab der die URL als bösartig eingestuft wird.",
    "Use “Tag” to filter which notification tag to get.":
      "Verwenden Sie „Tag“, um zu filtern, welches Benachrichtigungs-Tag abgerufen werden soll.",
    "Use API token instead of Username and Password":
      "API-Token anstelle von Benutzername und Passwort verwenden",
    "Use both values to configure the integration instance.":
      "Verwenden Sie beide Werte, um die Integrationsinstanz zu konfigurieren.",
    "Use Display Value":
      "Anzeigewert verwenden",
    "Use Enterprise DLP API":
      "Enterprise-DLP-API verwenden",
    "Use JWT Authentication":
      "JWT-Authentifizierung verwenden",
    "Use Live Response for VMware Carbon Black Endpoint Standard or VMware Carbon Black EDR (previously known as Carbon Black Defense and Carbon Black Response respectively).":
      "Verwenden Sie Live Response für VMware Carbon Black Endpoint Standard oder VMware Carbon Black EDR (früher bekannt als Carbon Black Defense bzw. Carbon Black Response).",
    "Use OAuth 2.0 Authentication":
      "OAuth-2.0-Authentifizierung verwenden",
    "Use OAuth Login":
      "OAuth-Anmeldung verwenden",
    "Use secure requests protocol (HTTPS).":
      "Sicheres Anfrageprotokoll (HTTPS) verwenden",
    "Use system proxy settings checkbox":
      "Kontrollkästchen „Proxyeinstellungen des Systems verwenden“",
    "Use system proxy settings: Select this checkbox to use the system’s proxy settings.":
      "Proxyeinstellungen des Systems verwenden: Aktivieren Sie dieses Kontrollkästchen, um die Proxyeinstellungen des Systems zu verwenden.",
    "Use the \"API Key (Recommended)\" parameter instead.":
      "Verwenden Sie stattdessen den Parameter „API Key (Recommended)“.",
    "Use the Client ID and Client Secret Key directly in this integration, or store them in the Cortex credentials store. In that case, the Client ID should be stored in the “username” field and the Client Secret Key should be stored in the “password” field.":
      "Verwenden Sie die Client ID und den Client Secret Key direkt in dieser Integration oder speichern Sie sie im Anmeldedatenspeicher von Cortex. In diesem Fall sollte die Client ID im Feld „username“ und der Client Secret Key im Feld „password“ gespeichert werden.",
    "Use the following naming convention: (demisto_fields_{type}).":
      "Verwenden Sie die folgende Namenskonvention: (demisto_fields_{type}).",
    "Use the Microsoft Teams integration to send messages and notifications to your team members and create meetings.":
      "Verwenden Sie die Microsoft-Teams-Integration, um Nachrichten und Benachrichtigungen an Ihre Teammitglieder zu senden und Besprechungen zu erstellen.",
    "Use the Microsoft Teams Webhook integration to send messages and notifications to Teams configured with an incoming webhook or a workflow. When using an adaptive card, the message will always include a link back to the investigation from which it was sent.":
      "Verwenden Sie die Microsoft-Teams-Webhook-Integration, um Nachrichten und Benachrichtigungen an Teams zu senden, das mit einem eingehenden Webhook oder einem Workflow konfiguriert ist. Bei Verwendung einer Adaptive Card enthält die Nachricht immer einen Link zurück zur Untersuchung, aus der sie gesendet wurde.",
    "Use the Prisma Cloud integration to manage alerts from Microsoft Azure, Google Cloud Platform, and AWS.":
      "Verwenden Sie die Prisma-Cloud-Integration, um Warnungen von Microsoft Azure, Google Cloud Platform und AWS zu verwalten.",
    "Use the SplunkPy integration to fetch incidents from Splunk ES, and query results by SID.":
      "Verwenden Sie die SplunkPy-Integration, um Incidents aus Splunk ES abzurufen und Abfrageergebnisse nach SID abzufragen.",
    "Use the system proxy settings to reach with the Vectra RUX API.":
      "Verwendet die Proxyeinstellungen des Systems, um die Vectra-RUX-API zu erreichen.",
    "Use the Workday IAM integration to fetch Workday reports and create corresponding incidents in Cortex. This integration is meant to be used as part of the IAM premium pack.":
      "Verwenden Sie die Workday-IAM-Integration, um Workday-Berichte abzurufen und entsprechende Incidents in Cortex zu erstellen. Diese Integration ist für die Verwendung als Teil des IAM-Premium-Packs vorgesehen.",
    "Use the Zendesk V2 integration to perform operations related to users, tickets, attachments, and more.":
      "Verwenden Sie die Zendesk-V2-Integration, um Vorgänge im Zusammenhang mit Benutzern, Tickets, Anhängen und mehr auszuführen.",
    "Use these client_id, client_secret, tsg_id to authenticate to your AIOps instance.":
      "Verwenden Sie diese client_id, client_secret und tsg_id, um sich bei Ihrer AIOps-Instanz zu authentifizieren.",
    "Use this option when required to customize the URL to the Azure management endpoint. More information can be found here - https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud":
      "Verwenden Sie diese Option, wenn die URL des Azure-Verwaltungsendpunkts angepasst werden muss. Weitere Informationen finden Sie hier: https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud",
    "Use this option when required to customize the URL to the Entra ID endpoint. More information can be found here - https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud":
      "Verwenden Sie diese Option, wenn die URL des Entra-ID-Endpunkts angepasst werden muss. Weitere Informationen finden Sie hier: https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud",
    "Use this parameter with careful consideration.":
      "Verwenden Sie diesen Parameter mit Bedacht.",
    "Use TLS for connection":
      "TLS für die Verbindung verwenden",
    "Use to query SQL Server, using a remote (TCP) connection to the DB.":
      "Wird verwendet, um SQL Server über eine Remoteverbindung (TCP) zur Datenbank abzufragen.",
    "Use when SonarQube is publicly accessible.":
      "Verwenden Sie diese Option, wenn SonarQube öffentlich zugänglich ist.",
    "Use your server URL, username and password in order to get your API-key.":
      "Verwenden Sie Ihre Server-URL, Ihren Benutzernamen und Ihr Passwort, um Ihren API-Schlüssel abzurufen.",
    "Used for certificate authentication. As appears in the \"Certificates & secrets\" page of the app.":
      "Wird für die Zertifikatauthentifizierung verwendet. Wie auf der Seite „Certificates & secrets“ der App angezeigt.",
    "User Email Address (Use for auto token refresh)":
      "E-Mail-Adresse des Benutzers (für die automatische Token-Aktualisierung)",
    "User Token":
      "Benutzer-Token",
    "Username (email address)":
      "Benutzername (E-Mail-Adresse)",
    "Username (or '<username>/token' when using API key).":
      "Benutzername (oder '<username>/token' bei Verwendung eines API-Schlüssels).",
    "Username / Access Key ID":
      "Benutzername / Zugriffsschlüssel-ID",
    "Username / API Key":
      "Benutzername / API-Schlüssel",
    "Username / API Key (see '?')":
      "Benutzername / API-Schlüssel (siehe '?')",
    "Users and Authentication":
      "Benutzer und Authentifizierung",
    "Users Lookup table name":
      "Name der Benutzer-Lookup-Tabelle",
    "Users must be assigned to the admin role to use this integration.":
      "Zur Verwendung dieser Integration muss Benutzern die Rolle admin zugewiesen sein.",
    "Uses the system proxy server to communicate with the integration. If not selected, the integration will not use the system proxy server.":
      "Verwendet den Proxyserver des Systems, um mit der Integration zu kommunizieren. Ist diese Option nicht ausgewählt, verwendet die Integration den Proxyserver des Systems nicht.",
    "Using API Token authentication":
      "Verwendung der API-Token-Authentifizierung",
    "Using Multi Factor Authentication (MFA)":
      "Verwendung der Multifaktor-Authentifizierung (MFA)",
    "Using Multi-Factor Authentication (MFA)":
      "Verwendung der Multifaktor-Authentifizierung (MFA)",
    "Using National Cloud":
      "Verwendung von National Clouds",
    "Using the task ‘Create Integration system user’ create an account with username and password":
      "Erstellen Sie mit der Aufgabe 'Create Integration system user' ein Konto mit Benutzername und Passwort",
    "Validate the negotiation info when connecting to a share. More information can be found on https://docs.microsoft.com/en-us/archive/blogs/openspecification/smb3-secure-dialect-negotiation":
      "Validiert die Aushandlungsinformationen beim Herstellen einer Verbindung zu einer Freigabe. Weitere Informationen finden Sie unter https://docs.microsoft.com/en-us/archive/blogs/openspecification/smb3-secure-dialect-negotiation",
    "Verbose (show log in case of error)":
      "Ausführlich (Protokoll bei Fehlern anzeigen)",
    "Verification Token(Team Chat App)":
      "Verifizierungs-Token (Team Chat App)",
    "Verify SSL":
      "SSL überprüfen",
    "VirusTotal has been updated to VirusTotal (API v3). Please use the updated version instead.":
      "VirusTotal wurde auf VirusTotal (API v3) aktualisiert. Verwenden Sie stattdessen die aktualisierte Version.",
    "Vsys - Firewall instances only":
      "Vsys - nur Firewall-Instanzen",
    "When checked, no SSL certificates check will be done when interacting with the Vectra RUX API. It's insecure. (Default - unchecked)":
      "Wenn aktiviert, werden bei der Interaktion mit der Vectra-RUX-API keine SSL-Zertifikate geprüft. Dies ist unsicher. (Standard: deaktiviert)",
    "When ciphers are specified, the SSH connection will be established with the first cipher of the specified ciphers that the given host supports.":
      "Wenn Chiffren angegeben sind, wird die SSH-Verbindung mit der ersten der angegebenen Chiffren hergestellt, die der angegebene Host unterstützt.",
    "When fetch is enable you must provide this argument. Possible values are: new, open, assigned, closed or ignored.":
      "Wenn der Abruf aktiviert ist, müssen Sie dieses Argument angeben. Mögliche Werte: new, open, assigned, closed oder ignored.",
    "When fetching supplier findings, a run that reaches this limit part-way through a supplier resumes on that same supplier next run, so the limit is honored without skipping findings.":
      "Wenn Lieferantenbefunde abgerufen werden und ein Lauf dieses Limit mitten in der Verarbeitung eines Lieferanten erreicht, wird beim nächsten Lauf mit demselben Lieferanten fortgefahren, sodass das Limit eingehalten wird, ohne Befunde zu überspringen.",
    "When key algorithms are specified, the SSH connection will be established with the first key algorithm of the specified key algorithms that the given host supports.":
      "Wenn Schlüsselalgorithmen angegeben sind, wird die SSH-Verbindung mit dem ersten der angegebenen Schlüsselalgorithmen hergestellt, den der angegebene Host unterstützt.",
    "When mirroring incidents, you can make changes in Vectra that will be reflected in Cortex, or vice versa.":
      "Beim Spiegeln von Incidents können Sie Änderungen in Vectra vornehmen, die in Cortex übernommen werden, oder umgekehrt.",
    "When running Live Response commands (e.g. ‘cb-process-kill’), it is possible to pass ‘wait-timeout’ argument to determine the number of seconds to wait for the command to be executed on Live Response side. Once the command has been executed or wait-time has expired - the command information will be returned to the war room.":
      "Beim Ausführen von Live-Response-Befehlen (z. B. 'cb-process-kill') kann das Argument 'wait-timeout' übergeben werden, um die Anzahl der Sekunden festzulegen, die auf die Ausführung des Befehls auf Live-Response-Seite gewartet wird. Sobald der Befehl ausgeführt wurde oder die Wartezeit abgelaufen ist, werden die Befehlsinformationen an den War Room zurückgegeben.",
    "When selected, closing and re-opening the Cortex incident is mirrored in Prisma Cloud.":
      "Wenn aktiviert, werden das Schließen und das erneute Öffnen des Cortex-Incidents in Prisma Cloud gespiegelt.",
    "When selected, the hunting query result is also saved to the Microsoft 365 Defender context path. Relevant only for the msg-advanced-hunting command.":
      "Wenn aktiviert, wird das Ergebnis der Hunting-Abfrage auch im Kontextpfad von Microsoft 365 Defender gespeichert. Nur relevant für den Befehl msg-advanced-hunting.",
    "When selecting the Custom option, the Azure AD endpoint parameter must be filled. More information about National clouds can be found here - https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud":
      "Wenn die Option Custom ausgewählt wird, muss der Parameter Azure AD endpoint ausgefüllt werden. Weitere Informationen zu National Clouds finden Sie hier: https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud",
    "When selecting the Custom option, the Host URL parameter must be filled. More information about National clouds can be found here - https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud":
      "Wenn die Option Custom ausgewählt wird, muss der Parameter Host URL ausgefüllt werden. Weitere Informationen zu National Clouds finden Sie hier: https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud",
    "When selecting the Custom option, the Server URL parameter must be filled. More information can be found on the integration page - https://xsoar.pan.dev/docs/reference/integrations/microsoft-defender-advanced-threat-protection":
      "Wenn die Option Custom ausgewählt wird, muss der Parameter Server URL ausgefüllt werden. Weitere Informationen finden Sie auf der Integrationsseite: https://xsoar.pan.dev/docs/reference/integrations/microsoft-defender-advanced-threat-protection",
    "When switching from the 'Authorization Code Flow' to the 'Client Credentials Flow', test the validity of the instance by clicking the 'Test' button.":
      "Beim Wechsel von 'Authorization Code Flow' zu 'Client Credentials Flow' testen Sie die Gültigkeit der Instanz, indem Sie auf die Schaltfläche 'Test' klicken.",
    "When switching from the 'Client Credentials Flow' to the 'Authorization Code Flow' do as follow: Save the instance, run the 'microsoft-teams-generate-login-url' command and follow the instructions mentioned there. Once done, test the validity of your instance by running the 'microsoft-teams-auth-test' command.":
      "Beim Wechsel von 'Client Credentials Flow' zu 'Authorization Code Flow' gehen Sie wie folgt vor: Speichern Sie die Instanz, führen Sie den Befehl 'microsoft-teams-generate-login-url' aus und befolgen Sie die dort genannten Anweisungen. Testen Sie anschließend die Gültigkeit Ihrer Instanz, indem Sie den Befehl 'microsoft-teams-auth-test' ausführen.",
    "When switching from the 'Client Credentials Flow' to the 'Authorization Code Flow' do as follow: Save the instance, run the 'microsoft-teams-generate-login-url' command and follow the instructions mentioned there. Once done, test the validity of your instance by running the 'microsoft-teams-auth-test' command. When switching from the 'Authorization Code Flow' to the 'Client Credentials Flow', test the validity of the instance by clicking the 'Test' button.":
      "Beim Wechsel von 'Client Credentials Flow' zu 'Authorization Code Flow' gehen Sie wie folgt vor: Speichern Sie die Instanz, führen Sie den Befehl 'microsoft-teams-generate-login-url' aus und befolgen Sie die dort genannten Anweisungen. Testen Sie anschließend die Gültigkeit Ihrer Instanz, indem Sie den Befehl 'microsoft-teams-auth-test' ausführen. Beim Wechsel von 'Authorization Code Flow' zu 'Client Credentials Flow' testen Sie die Gültigkeit der Instanz, indem Sie auf die Schaltfläche 'Test' klicken.",
    "When using basic authorization, you will have to update your password with the current OTP every time the current code expires (30 seconds), hence we recommend using OAuth 2.0 authorization.":
      "Bei Verwendung der Basisautorisierung müssen Sie Ihr Passwort jedes Mal mit dem aktuellen OTP aktualisieren, wenn der aktuelle Code abläuft (30 Sekunden). Daher empfehlen wir die Verwendung der OAuth-2.0-Autorisierung.",
    "When using basic authorization, you will have to update your password with the current OTP every time the current code expires (30 seconds), therefore we recommend using OAuth 2.0 authorization.":
      "Bei Verwendung der Basisautorisierung müssen Sie Ihr Passwort jedes Mal mit dem aktuellen OTP aktualisieren, wenn der aktuelle Code abläuft (30 Sekunden). Deshalb empfehlen wir die Verwendung der OAuth-2.0-Autorisierung.",
    "Whether this instance fetches your own organization's findings or findings across your supplier portfolio. Configure a separate instance for each scope.":
      "Legt fest, ob diese Instanz die Befunde Ihrer eigenen Organisation oder die Befunde Ihres gesamten Lieferantenportfolios abruft. Konfigurieren Sie für jeden Bereich eine eigene Instanz.",
    "Whether to add escaping before `=` chars in URLs. For further information, see the pack README":
      "Legt fest, ob vor `=`-Zeichen in URLs ein Escape-Zeichen hinzugefügt werden soll. Weitere Informationen finden Sie in der README des Packs",
    "Whether to disable automatic notifications to the configured notifications channel.":
      "Legt fest, ob automatische Benachrichtigungen an den konfigurierten Benachrichtigungskanal deaktiviert werden sollen.",
    "Whether to enable mirroring only from xsoar to slack, mark it if file mirroring is required in investigations.":
      "Legt fest, ob die Spiegelung nur von XSOAR zu Slack aktiviert werden soll; aktivieren Sie diese Option, wenn in Untersuchungen eine Dateispiegelung erforderlich ist.",
    "Whether to trust any certificate (not secure).":
      "Legt fest, ob jedem Zertifikat vertraut werden soll (nicht sicher).",
    "Whether to use the system proxy settings.":
      "Legt fest, ob die Proxyeinstellungen des Systems verwendet werden sollen.",
    "WildFire Server URLs":
      "WildFire-Server-URLs",
    "Workday Report URL":
      "Workday-Bericht-URL",
    "Workday Reports":
      "Workday-Berichte",
    "XSOAR API Key":
      "XSOAR-API-Schlüssel",
    "XSOAR user key":
      "XSOAR-Benutzerschlüssel",
    "XSOAR will query for Orca Alerts/ Alert updates every 1 minute":
      "XSOAR fragt alle 1 Minute Orca-Warnungen und Warnungsaktualisierungen ab",
    "You can also specify the threshold as an argument when running relevant commands.":
      "Sie können den Schwellenwert beim Ausführen der entsprechenden Befehle auch als Argument angeben.",
    "You can enable incident mirroring between Cortex incidents and Splunk findings.":
      "Sie können die Incident-Spiegelung zwischen Cortex-Incidents und Splunk-Befunden aktivieren.",
    "You can enable incident mirroring between Cortex incidents and Splunk notables.":
      "Sie können die Incident-Spiegelung zwischen Cortex-Incidents und Splunk-Notables aktivieren.",
    "You can execute these commands from the Cortex CLI, as part of an automation, or in a playbook.":
      "Sie können diese Befehle über die Cortex-CLI, als Teil einer Automatisierung oder in einem Playbook ausführen.",
    "You can store the additional workflow in a Cortex list, and use a transformer on the task in a playbook to send to a specific team.":
      "Sie können den zusätzlichen Workflow in einer Cortex-Liste speichern und in einem Playbook einen Transformer für die Aufgabe verwenden, um ihn an ein bestimmtes Team zu senden.",
    "You can use Prisma Cloud UI to generate this required access key.":
      "Sie können die Prisma-Cloud-Benutzeroberfläche verwenden, um diesen erforderlichen Zugriffsschlüssel zu generieren.",
    "You can use the following methods to authenticate Microsoft Defender XDR.":
      "Sie können die folgenden Methoden verwenden, um Microsoft Defender XDR zu authentifizieren.",
    "You do not need to specify the classifier as all Splunk incidents are ingested as Splunk Notable Generic. As you become more familiar with Cortex, you can create custom incident types as needed instead of using the Splunk Notable Generic incident type.":
      "Sie müssen den Classifier nicht angeben, da alle Splunk-Incidents als Splunk Notable Generic aufgenommen werden. Sobald Sie mit Cortex besser vertraut sind, können Sie bei Bedarf benutzerdefinierte Incident-Typen erstellen, anstatt den Incident-Typ Splunk Notable Generic zu verwenden.",
    "You don’t need to install the packages, they are included in the Docker image.":
      "Sie müssen die Pakete nicht installieren, da sie im Docker-Image enthalten sind.",
    "You may also use the advanced search in Okta’s System Logs to generate the filter expression.":
      "Sie können auch die erweiterte Suche in den Systemprotokollen von Okta verwenden, um den Filterausdruck zu generieren.",
    "You most enable or run mirror-investigation.":
      "Sie müssen mirror-investigation aktivieren oder ausführen.",
    "You must have an API subscription.":
      "Sie müssen über ein API-Abonnement verfügen.",
    "You must have your client applications registered on your authorization server with the required scope and configured appropriately.":
      "Ihre Client-Anwendungen müssen auf Ihrem Autorisierungsserver mit dem erforderlichen Scope registriert und entsprechend konfiguriert sein.",
    "You need to create a separate integration instance for Palo Alto Networks Firewall and Palo Alto Networks. Unless specified otherwise, all commands are valid for both Firewall and Panorama.":
      "Sie müssen jeweils eine separate Integrationsinstanz für Palo Alto Networks Firewall und Palo Alto Networks erstellen. Sofern nicht anders angegeben, gelten alle Befehle sowohl für Firewall als auch für Panorama.",
    "You should have a non-admin user with all necessary roles (only non-admin roles) in addition to the existing role snc_platform_rest_api_access that is required to make API calls.":
      "Sie sollten über einen Nicht-Administrator-Benutzer mit allen erforderlichen Rollen (nur Nicht-Administrator-Rollen) verfügen, zusätzlich zur vorhandenen Rolle snc_platform_rest_api_access, die für API-Aufrufe erforderlich ist.",
    "Your API key can be found in your Orion Malware account user menu.":
      "Ihren API-Schlüssel finden Sie im Benutzermenü Ihres Orion-Malware-Kontos.",
    "Your API key can be found in your VirusTotal account user menu.":
      "Ihren API-Schlüssel finden Sie im Benutzermenü Ihres VirusTotal-Kontos.",
    "Your API key carries all your privileges, so keep it secure and don’t share it with anyone.":
      "Ihr API-Schlüssel enthält alle Ihre Berechtigungen. Bewahren Sie ihn daher sicher auf und geben Sie ihn nicht an andere weiter.",
    "Your PingOne Environment ID":
      "Ihre PingOne-Umgebungs-ID",
    "Your server URL (e.g., https://yourdomain.jamfcloud.com)":
      "Ihre Server-URL (z. B. https://yourdomain.jamfcloud.com)",
    "Zendesk address (e.g. https://demisto.zendesk.com)":
      "Zendesk-Adresse (z. B. https://demisto.zendesk.com)",
    "Zendesk integration requires the API key and a username.":
      "Die Zendesk-Integration erfordert den API-Schlüssel und einen Benutzernamen.",
    "ZIdentity returns a Bearer access token.":
      "ZIdentity gibt ein Bearer-Zugriffstoken zurück.",

    // --- Batch: Splunk/ServiceNow/Mimecast/RelayShield/Panorays/TypeSafe etc. integration docs as joined sentences (16:09 export, Collector 0.2.0) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    "(Investigation only) If {0} is selected in step 8, configure the following Investigation-specific parameters:":
      "(Nur Untersuchungen) Wenn {0} in Schritt 8 ausgewählt ist, konfigurieren Sie die folgenden untersuchungsspezifischen Parameter:",
    "(Optional) Test the created instance by running the {0} command.":
      "(Optional) Testen Sie die erstellte Instanz, indem Sie den Befehl {0} ausführen.",
    "(Recommended) Enter the ServiceNow account {0} and {1} in the integration instance configuration. When provided, the integration automatically performs the initial OAuth login on first use. It also automatically renews the refresh token when it expires.":
      "(Empfohlen) Geben Sie in der Instanzkonfiguration der Integration den {0} und das {1} des ServiceNow-Kontos ein. Wenn diese angegeben sind, führt die Integration bei der ersten Verwendung automatisch die erste OAuth-Anmeldung durch. Außerdem erneuert sie das Aktualisierungstoken automatisch, wenn es abläuft.",
    "{0} Check the balance and entitlements on your account at {1}.":
      "{0} Prüfen Sie das Guthaben und die Berechtigungen Ihres Kontos unter {1}.",
    "{0} Confirm the key was copied in full and begins with {1}. Keys are deactivated when the underlying subscription is cancelled.":
      "{0} Vergewissern Sie sich, dass der Schlüssel vollständig kopiert wurde und mit {1} beginnt. Schlüssel werden deaktiviert, wenn das zugrunde liegende Abonnement gekündigt wird.",
    "{0} This is a clean result, not an error. RelayShield reports only on sources it queried; see the DBotScore mapping above.":
      "{0} Dies ist ein unauffälliges Ergebnis, kein Fehler. RelayShield meldet nur Quellen, die es abgefragt hat; siehe die obige DBotScore-Zuordnung.",
    "{0}: Fetches the drilldown searches configured by the user in the rule name that triggered the finding event and performs this search. The results are stored in the context of the incident under the {1} field as follows: [{‘query_name’:<query_name>, ‘query_search’: <query_search>, ‘query_results’: [{result1}, {result2}, {result3}], ‘enrichment_status’: <enrichment_status>}].":
      "{0}: Ruft die vom Benutzer im Regelnamen konfigurierten Drilldown-Suchen ab, die das Finding-Ereignis ausgelöst haben, und führt diese Suche aus. Die Ergebnisse werden im Kontext des Incidents im Feld {1} im folgenden Format gespeichert: [{‘query_name’:<query_name>, ‘query_search’: <query_search>, ‘query_results’: [{result1}, {result2}, {result3}], ‘enrichment_status’: <enrichment_status>}].",
    "{0}: Keep the SPL query as-is unless you need to filter further. The query must include the {1} token. Do not modify or remove this token. To add custom filters, append extra URL parameters such as {2} after the placeholder.":
      "{0}: Behalten Sie die SPL-Abfrage unverändert bei, sofern Sie nicht weiter filtern müssen. Die Abfrage muss das Token {1} enthalten. Ändern oder entfernen Sie dieses Token nicht. Um benutzerdefinierte Filter hinzuzufügen, hängen Sie nach dem Platzhalter zusätzliche URL-Parameter wie {2} an.",
    "{0}: Select the enrichment types you want to enrich each fetched finding with. If none are selected, the integration will fetch findings as usual (without enrichment).":
      "{0}: Wählen Sie die Anreicherungstypen aus, mit denen jedes abgerufene Finding angereichert werden soll. Wenn keine ausgewählt sind, ruft die Integration die Findings wie gewohnt ohne Anreicherung ab.",
    "{0}: Select the enrichment types you want to enrich each fetched notable with. If none are selected, the integration will fetch notables as usual (without enrichment).":
      "{0}: Wählen Sie die Anreicherungstypen aus, mit denen jedes abgerufene Notable angereichert werden soll. Wenn keine ausgewählt sind, ruft die Integration die Notables wie gewohnt ohne Anreicherung ab.",
    "{0}: The maximal amount of events to fetch per enrichment type (Drilldown, Asset, and Identity). In a case of multiple drilldown enrichments the limit will apply for each drilldown search query. (default to 20).":
      "{0}: Die maximale Anzahl von Ereignissen, die pro Anreicherungstyp (Drilldown, Asset und Identity) abgerufen werden. Bei mehreren Drilldown-Anreicherungen gilt das Limit für jede Drilldown-Suchabfrage. (Standardwert ist 20).",
    "{0}: The maximum number of investigations to fetch per cycle. Limited to 100 by the Splunk investigations endpoint.":
      "{0}: Die maximale Anzahl der pro Zyklus abzurufenden Untersuchungen. Vom Splunk-Untersuchungsendpunkt auf 100 begrenzt.",
    "{0}: The query for the finding events enrichment (defined by default). If you decide to edit this, make sure to provide a query that uses the `notable` macro. See the default query as an example.":
      "{0}: Die Abfrage für die Anreicherung von Finding-Ereignissen (standardmäßig definiert). Wenn Sie sie bearbeiten, stellen Sie sicher, dass die Abfrage das Makro `notable` verwendet. Siehe die Standardabfrage als Beispiel.",
    "{0}: The query for the notable events enrichment (defined by default). If you decide to edit this, make sure to provide a query that uses the `notable` macro. See the default query as an example.":
      "{0}: Die Abfrage für die Anreicherung von Notable-Ereignissen (standardmäßig definiert). Wenn Sie sie bearbeiten, stellen Sie sicher, dass die Abfrage das Makro `notable` verwendet. Siehe die Standardabfrage als Beispiel.",
    "{0}: The relative time interval to look back during the initial investigation fetch (for example, {1}).":
      "{0}: Das relative Zeitintervall, das beim ersten Abruf von Untersuchungen zurückgeblickt wird (z. B. {1}).",
    "{0}: The timeout for each enrichment (default is 5min). When the selected timeout was reached, finding events that were not enriched will be saved without the enrichment.":
      "{0}: Das Timeout für jede Anreicherung (Standard ist 5 Min.). Wenn das ausgewählte Timeout erreicht ist, werden nicht angereicherte Finding-Ereignisse ohne Anreicherung gespeichert.",
    "{0}: The timeout for each enrichment (default is 5min). When the selected timeout was reached, notable events that were not enriched will be saved without the enrichment.":
      "{0}: Das Timeout für jede Anreicherung (Standard ist 5 Min.). Wenn das ausgewählte Timeout erreicht ist, werden nicht angereicherte Notable-Ereignisse ohne Anreicherung gespeichert.",
    "{0}: whether the asset enrichment was successful.":
      "{0}: Gibt an, ob die Asset-Anreicherung erfolgreich war.",
    "{0}: whether the drilldown enrichment was successful. In a case of multiple drilldown enrichments, the status is successful if at least one drilldown search enrichment was successful.":
      "{0}: Gibt an, ob die Drilldown-Anreicherung erfolgreich war. Bei mehreren Drilldown-Anreicherungen ist der Status erfolgreich, wenn mindestens eine Drilldown-Suchanreicherung erfolgreich war.",
    "{0}: whether the identity enrichment was successful.":
      "{0}: Gibt an, ob die Identitätsanreicherung erfolgreich war.",
    "A clean result (“no known finding”) is mapped to DBotScore {0}, never {1}. “No known finding” means nothing was flagged in the sources RelayShield actually queried. It is not a verified-safe guarantee, and treating it as “Good” would claim more certainty than the underlying data supports. CRITICAL/HIGH findings map to {2}, MEDIUM/LOW findings map to {3}.":
      "Ein unauffälliges Ergebnis („no known finding“) wird dem DBotScore {0} zugeordnet, nie {1}. „No known finding“ bedeutet, dass in den tatsächlich von RelayShield abgefragten Quellen nichts markiert wurde. Es ist keine Garantie für nachgewiesene Sicherheit, und es als „Good“ zu behandeln, würde mehr Gewissheit suggerieren, als die zugrunde liegenden Daten hergeben. CRITICAL/HIGH-Befunde werden {2} zugeordnet, MEDIUM/LOW-Befunde {3}.",
    "Build a query by selecting fields operators and relevant values. You can always add an additional condition by selecting the {0} button on the right. For more information on how to use the search editor see {1}.":
      "Erstellen Sie eine Abfrage, indem Sie Felder, Operatoren und relevante Werte auswählen. Sie können jederzeit eine weitere Bedingung hinzufügen, indem Sie rechts auf die Schaltfläche {0} klicken. Weitere Informationen zur Verwendung des Suchneditors finden Sie unter {1}.",
    "By default, the {0} parameter is set to 70. This means that for every file with a severity of over 70 the Dbot score will be set to {1}. This parameter is configurable.":
      "Standardmäßig ist der Parameter {0} auf 70 gesetzt. Das bedeutet, dass für jede Datei mit einem Schweregrad über 70 der Dbot-Score auf {1} gesetzt wird. Dieser Parameter ist konfigurierbar.",
    "Content in the Splunk content pack (such as mappers, layout, playbooks, incident fields, and the incident type). Therefore, you will need to create your own content. See the {0} for information.":
      "Inhalte des Splunk-Content-Packs (z. B. Mapper, Layouts, Playbooks, Incident-Felder und der Incident-Typ). Daher müssen Sie eigene Inhalte erstellen. Weitere Informationen finden Sie unter {0}.",
    "Copy the API key from the confirmation page. It begins with {0}. The key is also emailed to the address you entered.":
      "Kopieren Sie den API-Schlüssel von der Bestätigungsseite. Er beginnt mit {0}. Der Schlüssel wird außerdem per E-Mail an die von Ihnen eingegebene Adresse gesendet.",
    "Copy the query value and paste it as the value for the {0} argument for both search commands. For example:":
      "Kopieren Sie den Abfragewert und fügen Sie ihn als Wert des Arguments {0} für beide Suchbefehle ein. Zum Beispiel:",
    "Create a Java Key Store and upload it to the instance by accessing from the upper menu: {0} > {1} > {2}. The private key will be used as an integration parameter.":
      "Erstellen Sie einen Java Key Store und laden Sie ihn in die Instanz hoch, indem Sie im oberen Menü {0} > {1} > {2} aufrufen. Der private Schlüssel wird als Integrationsparameter verwendet.",
    "Create a summary index in Splunk. For more information, click {0}.":
      "Erstellen Sie in Splunk einen Zusammenfassungsindex. Weitere Informationen erhalten Sie, wenn Sie {0} klicken.",
    "Enter your username and password, and append the One Time Password (OTP) that you currently see on your mobile device to your password without any extra spaces. For example, if your password is {0} and the current OTP code is {1}, enter {2}.":
      "Geben Sie Ihren Benutzernamen und Ihr Passwort ein und hängen Sie das Einmalpasswort (OTP), das Sie aktuell auf Ihrem Mobilgerät sehen, ohne zusätzliche Leerzeichen an Ihr Passwort an. Wenn Ihr Passwort beispielsweise {0} und der aktuelle OTP-Code {1} lautet, geben Sie {2} ein.",
    "For anything else, contact {0}.":
      "Bei allen anderen Anliegen wenden Sie sich an {0}.",
    "For assistance, contact Panorays support at {0}.":
      "Wenden Sie sich für Unterstützung an den Panorays-Support unter {0}.",
    "For full instructions, see the {0}.":
      "Vollständige Anleitungen finden Sie in {0}.",
    "For mirroring the {0} field, the usernames need to be transformed to the corresponding names in Cortex and Splunk.":
      "Für die Spiegelung des Felds {0} müssen die Benutzernamen in die entsprechenden Namen in Cortex und Splunk umgewandelt werden.",
    "For more information about creating an OAuth app click {0}.":
      "Weitere Informationen zum Erstellen einer OAuth-App erhalten Sie, wenn Sie {0} klicken.",
    "For using OAuth 2.0 see the above instructions. The OTP code should be appended to the password parameter in the {0} command.":
      "Informationen zur Verwendung von OAuth 2.0 finden Sie in den obigen Anleitungen. Der OTP-Code muss an den Passwortparameter im Befehl {0} angehängt werden.",
    "From the {0} page, click {1}.":
      "Klicken Sie auf der Seite {0} auf {1}.",
    "From the left-side navigation menu, click {0}.":
      "Klicken Sie im linken Navigationsmenü auf {0}.",
    "From the top navigation bar, click {0}.":
      "Klicken Sie in der oberen Navigationsleiste auf {0}.",
    "Go to the {0}.":
      "Rufen Sie {0} auf.",
    "If the {0} and {1} fields are configured, the integration will automatically perform the initial login and renew the refresh token when it expires — no manual commands are needed. Otherwise, you will have to run the {2} command for the initial login and again each time the refresh token expires.":
      "Wenn die Felder {0} und {1} konfiguriert sind, führt die Integration die erste Anmeldung automatisch durch und erneuert das Aktualisierungstoken bei Ablauf; manuelle Befehle sind nicht erforderlich. Andernfalls müssen Sie den Befehl {2} für die erste Anmeldung und danach jedes Mal ausführen, wenn das Aktualisierungstoken abläuft.",
    "If you did note provide {0} and {1} in step 3, run the {2} command from the Cortex CLI and fill in the username and password of the ServiceNow integration instance. This step generates an access token to the ServiceNow instance and is required only the first time after configuring a new integration instance in Cortex. If you provided {3} and {4}, this step is handled automatically.":
      "Wenn Sie in Schritt 3 {0} und {1} nicht angegeben haben, führen Sie den Befehl {2} in der Cortex CLI aus und geben Sie Benutzernamen und Passwort der ServiceNow-Integrationsinstanz ein. Dieser Schritt generiert ein Zugriffstoken für die ServiceNow-Instanz und ist nur beim ersten Mal nach der Konfiguration einer neuen Integrationsinstanz in Cortex erforderlich. Wenn Sie {3} und {4} angegeben haben, wird dieser Schritt automatisch ausgeführt.",
    "In case of inconsistent authentication issues when using username & password, try to use {0} as the username. this will set the integration to use basic authentication when connecting to the Splunk server. For example: TestUser@_basic":
      "Wenn bei der Verwendung von Benutzername und Passwort uneinheitliche Authentifizierungsprobleme auftreten, versuchen Sie, {0} als Benutzernamen zu verwenden. Dadurch verwendet die Integration beim Verbinden mit dem Splunk-Server die Basisauthentifizierung. Zum Beispiel: TestUser@_basic",
    "In order for the mirroring to work, the {0} parameter needs to be set before the incident is fetched.":
      "Damit die Spiegelung funktioniert, muss der Parameter {0} festgelegt werden, bevor der Incident abgerufen wird.",
    "In order to activate them check the {0} checkbox, and then check the relevant boxes for each fetch type you want.":
      "Um sie zu aktivieren, aktivieren Sie das Kontrollkästchen {0} und anschließend die entsprechenden Kontrollkästchen für jeden gewünschten Abruftyp.",
    "In order to refresh token / discover auth types of the account / create new access & secret keys, you are required to provide: App ID, Account email address & password, and BaseUrl is set to {0}, based on your {1}. These parameters support the following integration commands: mimecast-login -> fetches new access key & secret key mimecast-discover -> lists supported auth types of user mimecast-refresh-token -> refreshes the validity duration of access key & secret key (3 days)":
      "Um das Token zu aktualisieren, die Authentifizierungstypen des Kontos zu ermitteln und neue Zugriffs- und geheime Schlüssel zu erstellen, müssen Sie Folgendes angeben: App ID, E-Mail-Adresse und Passwort des Kontos; BaseUrl wird auf {0} gesetzt (entsprechend Ihrer {1}). Diese Parameter unterstützen die folgenden Integrationsbefehle: mimecast-login -> ruft einen neuen Zugriffsschlüssel und geheimen Schlüssel ab mimecast-discover -> listet die unterstützten Authentifizierungstypen des Benutzers auf mimecast-refresh-token -> verlängert die Gültigkeitsdauer von Zugriffsschlüssel und geheimem Schlüssel (3 Tage)",
    "In the {0} parameter, select which Splunk event types to ingest. Default is {1}. Add {2} to also fetch Splunk investigations (select both to fetch them together).":
      "Wählen Sie im Parameter {0} aus, welche Splunk-Ereignistypen aufgenommen werden sollen. Standard ist {1}. Fügen Sie {2} hinzu, um auch Splunk-Untersuchungen abzurufen (wählen Sie beide aus, um sie gemeinsam abzurufen).",
    "In the Enrichment Types field, select {0}, {1} and {2}. This enrichment provides additional information about assets, drilldown, and identities that are related to the notable events you ingest. Multiple drilldown searches enrichment is supported from Enterprise Security v7.2.0. For more information, see {3}.":
      "Wählen Sie im Feld Enrichment Types {0}, {1} und {2} aus. Diese Anreicherung liefert zusätzliche Informationen zu Assets, Drilldown und Identitäten, die mit den aufgenommenen Notable-Ereignissen zusammenhängen. Die Anreicherung mit mehreren Drilldown-Suchen wird ab Enterprise Security v7.2.0 unterstützt. Weitere Informationen finden Sie unter {3}.",
    "Keep the {0} as-is, since we use the `notable` macro when ingesting Finding events. You can create a more granular search by specifying specific conditions, for example specific security domain or event ID.":
      "Behalten Sie {0} unverändert bei, da beim Aufnehmen von Finding-Ereignissen das Makro `notable` verwendet wird. Sie können eine detailliertere Suche erstellen, indem Sie bestimmte Bedingungen angeben, z. B. eine bestimmte Sicherheitsdomäne oder Ereignis-ID.",
    "Keep the default values for the Finding {0} and {1}.":
      "Behalten Sie für Finding die Standardwerte von {0} und {1} bei.",
    "Leave {0} at {1} unless you have been given a dedicated endpoint.":
      "Belassen Sie {0} bei {1}, sofern Ihnen kein dedizierter Endpunkt zugewiesen wurde.",
    "Locate the Mimecast API 2.0 tile and select {0}.":
      "Suchen Sie die Kachel Mimecast API 2.0 und wählen Sie {0} aus.",
    "Log in to your ServiceNow instance and create an endpoint for Cortex to access your instance (see {0} for more information).":
      "Melden Sie sich bei Ihrer ServiceNow-Instanz an und erstellen Sie einen Endpunkt, über den Cortex auf Ihre Instanz zugreifen kann (weitere Informationen siehe {0}).",
    "Make sure you have provided the Client ID and Client Secret, and that the BaseUrl is set to {0}.":
      "Stellen Sie sicher, dass Sie die Client ID und das Client Secret angegeben haben und dass BaseUrl auf {0} gesetzt ist.",
    "Notice: Submitting indicators using the {0} command of this integration might make the indicator data publicly available. See the vendor’s documentation for more details.":
      "Hinweis: Das Übermitteln von Indikatoren mit dem Befehl {0} dieser Integration kann dazu führen, dass die Indikatordaten öffentlich zugänglich werden. Weitere Informationen finden Sie in der Dokumentation des Anbieters.",
    "Optional: Check the {0} integration parameter to close the Cortex incident when the corresponding finding is closed on the Splunk side. By default, only Findings closed with a “Closed” label will be mirrored. You can specify specific statuses (comma-separated) in the {1}, and enable the {2} option to add statuses marked as “End Status” in Splunk, and to add additional statuses to the mirroring process.":
      "Optional: Aktivieren Sie den Integrationsparameter {0}, um den Cortex-Incident zu schließen, wenn das entsprechende Finding auf der Splunk-Seite geschlossen wird. Standardmäßig werden nur Findings gespiegelt, die mit der Bezeichnung \"Closed\" geschlossen wurden. Sie können in {1} bestimmte Status (durch Kommas getrennt) angeben und die Option {2} aktivieren, um in Splunk als \"End Status\" markierte Status sowie zusätzliche Status zum Spiegelungsprozess hinzuzufügen.",
    "Optional: Check the {0} integration parameter to close the Cortex incident when the corresponding notable is closed on the Splunk side. By default, only Notables closed with a “Closed” label will be mirrored. You can specify specific statuses (comma-separated) in the {1}, and enable the {2} option to add statuses marked as “End Status” in Splunk, and to add additional statuses to the mirroring process.":
      "Optional: Aktivieren Sie den Integrationsparameter {0}, um den Cortex-Incident zu schließen, wenn das entsprechende Notable auf der Splunk-Seite geschlossen wird. Standardmäßig werden nur Notables gespiegelt, die mit der Bezeichnung \"Closed\" geschlossen wurden. Sie können in {1} bestimmte Status (durch Kommas getrennt) angeben und die Option {2} aktivieren, um in Splunk als \"End Status\" markierte Status sowie zusätzliche Status zum Spiegelungsprozess hinzuzufügen.",
    "Optional: Check the {0} integration parameter to close the Splunk finding when the corresponding Cortex incident is closed. {1}":
      "Optional: Aktivieren Sie den Integrationsparameter {0}, um das Splunk-Finding zu schließen, wenn der entsprechende Cortex-Incident geschlossen wird. {1}",
    "Optional: Check the {0} integration parameter to close the Splunk notable when the corresponding Cortex incident is closed.":
      "Optional: Aktivieren Sie den Integrationsparameter {0}, um das Splunk-Notable zu schließen, wenn der entsprechende Cortex-Incident geschlossen wird.",
    "The drilldown search does not support Splunk’s advanced syntax. For example: Splunk filters ({0}, {1}, etc.)":
      "Die Drilldown-Suche unterstützt die erweiterte Syntax von Splunk nicht. Zum Beispiel: Splunk-Filter ({0}, {1} usw.)",
    "The grant type used to get an access token is {0}. See the {1} for more information.":
      "Der zum Abrufen eines Zugriffstokens verwendete Grant-Typ ist {0}. Weitere Informationen finden Sie unter {1}.",
    "The integration allows for fetching Splunk {0} and {1} events using default queries. The queries can be changed and modified to support different Splunk use cases.":
      "Die Integration ermöglicht das Abrufen von Splunk-{0}- und -{1}-Ereignissen mithilfe von Standardabfragen. Die Abfragen können geändert und angepasst werden, um unterschiedliche Splunk-Anwendungsfälle zu unterstützen.",
    "The integration sends data to TypeSafe’s hosted API. Review your organization’s data-handling requirements before including incident evidence, personal data, credentials, or other sensitive content in {0}.":
      "Die Integration sendet Daten an die gehostete API von TypeSafe. Prüfen Sie die Datenverarbeitungsanforderungen Ihrer Organisation, bevor Sie Incident-Nachweise, personenbezogene Daten, Anmeldeinformationen oder andere sensible Inhalte in {0} aufnehmen.",
    "These instructions explain how to build a query, which you can use as the value for the {0} argument. You can use this argument in the {1} and {2} commands.":
      "Diese Anleitung erklärt, wie Sie eine Abfrage erstellen, die Sie als Wert des Arguments {0} verwenden können. Sie können dieses Argument in den Befehlen {1} und {2} verwenden.",
    "This integration only reads data (company findings, supplier findings, and the supplier list) - it never creates, updates, or deletes anything in Panorays. The read-only {0} role is sufficient for both {1} and {2} scopes, including reading across your entire supplier portfolio.":
      "Diese Integration liest nur Daten (Unternehmensbefunde, Lieferantenbefunde und die Lieferantenliste); sie erstellt, aktualisiert oder löscht in Panorays nie etwas. Die schreibgeschützte Rolle {0} reicht für die Bereiche {1} und {2} aus, einschließlich des Lesens Ihres gesamten Lieferantenportfolios.",
    "This integration uses {0}.":
      "Diese Integration verwendet {0}.",
    "To export the query, click the {0} button.":
      "Um die Abfrage zu exportieren, klicken Sie auf die Schaltfläche {0}.",
    "To use API 2.0, you need to generate a {0} and {1} from the Mimecast admin console:":
      "Um API 2.0 zu verwenden, müssen Sie in der Mimecast-Verwaltungskonsole eine {0} und ein {1} generieren:",
    "To use this integration you need a RelayShield API key. RelayShield authenticates every request with a single API key sent in the {0} header. There are no OAuth flows, tenant IDs, or additional permissions to grant.":
      "Zur Verwendung dieser Integration benötigen Sie einen RelayShield-API-Schlüssel. RelayShield authentifiziert jede Anfrage mit einem einzelnen API-Schlüssel, der im Header {0} gesendet wird. Es gibt keine OAuth-Abläufe, Tenant-IDs oder zusätzlichen Berechtigungen, die erteilt werden müssen.",
    "Type the {0} and {1}.":
      "Geben Sie {0} und {1} ein.",
    "Under Classifier, select {0}. The classifier routes Finding events to the {1} incident type and Investigation events to the {2} incident type.":
      "Wählen Sie unter Classifier {0} aus. Der Klassifikator leitet Finding-Ereignisse an den Incident-Typ {1} und Investigation-Ereignisse an den Incident-Typ {2} weiter.",
    "Under Mapper (incoming), select {0}.":
      "Wählen Sie unter Mapper (incoming) {0} aus.",
    "Under Mapper (outgoing), select {0}.":
      "Wählen Sie unter Mapper (outgoing) {0} aus.",
    "Visit {0}.":
      "Besuchen Sie {0}.",
    "When running the {0} command, a refresh token is generated and will be used to produce new access tokens after the current access token has expired.":
      "Wenn Sie den Befehl {0} ausführen, wird ein Aktualisierungstoken generiert, das verwendet wird, um neue Zugriffstoken zu erzeugen, nachdem das aktuelle Zugriffstoken abgelaufen ist.",
    "Will need to change the {0} integration parameter to the following query (or a fetch query of their own that uses the `notable` macro):":
      "Der Integrationsparameter {0} muss auf die folgende Abfrage (oder eine eigene Abrufabfrage, die das Makro `notable` verwendet) geändert werden:",
    "You can go to the {0} parameter and select the query to fetch the findings from Splunk. Make sure to provide a query which uses the `notable` macro, See the default query as an example.":
      "Sie können zum Parameter {0} wechseln und die Abfrage zum Abrufen der Findings aus Splunk auswählen. Stellen Sie sicher, dass die Abfrage das Makro `notable` verwendet. Siehe die Standardabfrage als Beispiel.",
    "You can go to the {0} parameter and select the query to fetch the notables from Splunk. Make sure to provide a query which uses the `notable` macro, See the default query as an example.":
      "Sie können zum Parameter {0} wechseln und die Abfrage zum Abrufen der Notables aus Splunk auswählen. Stellen Sie sicher, dass die Abfrage das Makro `notable` verwendet. Siehe die Standardabfrage als Beispiel.",
    "API Access Policy should be configured as global in order to cover all available resources and not just now/table":
      "Die API-Zugriffsrichtlinie sollte als global konfiguriert werden, um alle verfügbaren Ressourcen abzudecken und nicht nur now/table",
    "Findings scope":
      "Finding-Bereich",
    "Select Add Site License.":
      "Wählen Sie Add Site License aus.",
    "Select the Assets > Site Licenses tab.":
      "Wählen Sie die Registerkarte Assets > Site Licenses aus.",
    "Select the Enable action in Site Licenses.":
      "Wählen Sie unter Site Licenses die Aktion Enable aus.",
    "The BotJID in the Chat subscription section on the Features page of your App Dashboard.":
      "Die BotJID im Abschnitt Chat subscription auf der Seite Features Ihres App Dashboard.",
    "Zoom Integration":
      "Zoom-Integration",

    // --- Batch: Integration docs, parameter labels, tooltips and table descriptions (06:04 export, Collector 0.2.0 full re-collection) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    "Manual Mode":
      "Manueller Modus",
    "(For Cortex) For use with HTTPS - the certificate that the service should use. (For Cortex and Cortex XSIAM) Custom certificates are not supported.":
      "(Für Cortex) Zur Verwendung mit HTTPS: das Zertifikat, das der Dienst verwenden soll. (Für Cortex und Cortex XSIAM) Benutzerdefinierte Zertifikate werden nicht unterstützt.",
    "(For Cortex) For use with HTTPS - the private key that the service should use. <br> (For Cortex and Cortex XSIAM) When using an engine, configure a private API key. Not supported on the Cortex 8 or Cortex XSIAM server.":
      "(Für Cortex) Zur Verwendung mit HTTPS: der private Schlüssel, den der Dienst verwenden soll. <br> (Für Cortex und Cortex XSIAM) Konfigurieren Sie bei Verwendung einer Engine einen privaten API-Schlüssel. Wird auf dem Cortex 8- oder Cortex XSIAM-Server nicht unterstützt.",
    "(Optional: Add additional request headers in the field “Additional request headers” as key:value pairs, one request header per line)":
      "(Optional: Fügen Sie im Feld „Additional request headers“ zusätzliche Anforderungsheader als Schlüssel:Wert-Paare hinzu, einen Anforderungsheader pro Zeile)",
    "(Optional: If you want incidents to be created automatically out of the retrieved data, activate the checkbox “Fetches issues” in the “Collect” section of the setup)":
      "(Optional: Wenn Incidents automatisch aus den abgerufenen Daten erstellt werden sollen, aktivieren Sie das Kontrollkästchen „Fetches issues“ im Abschnitt „Collect“ der Einrichtung)",
    "A comma-separated list of AWS Organization accounts to use when running EC2 commands. A role name for cross-organization account access must be provided to use this feature.":
      "Eine durch Kommas getrennte Liste von AWS-Organization-Konten, die beim Ausführen von EC2-Befehlen verwendet werden. Für die Verwendung dieser Funktion muss ein Rollenname für den organisationsübergreifenden Kontozugriff angegeben werden.",
    "A successful API call returns status=“success” along with the API key within the key element:":
      "Ein erfolgreicher API-Aufruf gibt status=„success“ zusammen mit dem API-Schlüssel im Element key zurück:",
    "Access Type (Impersonation is deprecated as of February 2025)":
      "Zugriffstyp (Impersonation ist seit Februar 2025 veraltet)",
    "Additional request headers":
      "Zusätzliche Anforderungsheader",
    "After providing the mandatory details, click Test* to test the configuration.":
      "Klicken Sie nach Eingabe der Pflichtangaben auf Test*, um die Konfiguration zu testen.",
    "After this time the connection pool will be refreshed":
      "Nach Ablauf dieser Zeit wird der Verbindungspool aktualisiert",
    "AIOps Authentication:":
      "AIOps-Authentifizierung:",
    "And one of the following:":
      "Und eines der folgenden:",
    "ANY.RUN API-KEY without prefix":
      "ANY.RUN API-KEY ohne Präfix",
    "API Base URL":
      "API-Basis-URL",
    "API URL":
      "API-URL",
    "Authentication method available:":
      "Verfügbare Authentifizierungsmethode:",
    "Authentication methods configuration:":
      "Konfiguration der Authentifizierungsmethoden:",
    "Authorize the API client for the required scopes. You use these scopes in the POST request to the /oauth/token endpoint. The Required Scopes are:":
      "Autorisieren Sie den API-Client für die erforderlichen Bereiche. Diese Bereiche verwenden Sie in der POST-Anforderung an den Endpunkt /oauth/token. Die erforderlichen Bereiche sind:",
    "Available options:":
      "Verfügbare Optionen:",
    "AWS Default Region":
      "Standardregion von AWS",
    "AWS organization accounts":
      "AWS-Organization-Konten",
    "Base domain for the ANY.RUN connection. By default, the domain is any.run.":
      "Basisdomäne für die ANY.RUN-Verbindung. Standardmäßig lautet die Domäne any.run.",
    "Base domain for the ANY.RUN connection. Enter only the domain (e.g. any.run), without a scheme or trailing slash.":
      "Basisdomäne für die ANY.RUN-Verbindung. Geben Sie nur die Domäne ein (z. B. any.run), ohne Schema und ohne abschließenden Schrägstrich.",
    "Before configuring this integration, you need:":
      "Bevor Sie diese Integration konfigurieren, benötigen Sie Folgendes:",
    "Bot Type Converted to Single-Tenant":
      "In Single-Tenant konvertierter Bot-Typ",
    "Broker CA certificates":
      "Broker-CA-Zertifikate",
    "Broker CA certificates (‘brokercerts.crt’ file)":
      "Broker-CA-Zertifikate (Datei ‚brokercerts.crt‘)",
    "Broker CA certificates content (see `brokercerts.crt` in Integration Tips)":
      "Inhalt der Broker-CA-Zertifikate (siehe `brokercerts.crt` unter Integrationstipps)",
    "Broker list properties file (‘brokerlist.properties’ file)":
      "Broker-Listeneigenschaftendatei (Datei ‚brokerlist.properties‘)",
    "Broker URLs":
      "Broker-URLs",
    "Cache 404 TTL":
      "Cache-TTL für 404",
    "Cache Default TTL":
      "Standard-Cache-TTL",
    "Caps the number of Darkmon records ingested as incidents per fetch cycle to protect the war room from sudden backlogs.":
      "Begrenzt die Anzahl der Darkmon-Datensätze, die pro Abrufzyklus als Incidents erfasst werden, um den Warroom vor plötzlichen Rückständen zu schützen.",
    "Choose the instance configuration base URL based on the server location:":
      "Wählen Sie die Basis-URL der Instanzkonfiguration anhand des Serverstandorts aus:",
    "Choose the tag to add to an entry to mirror it as a comment in Jira.":
      "Wählen Sie das Tag aus, das einem Eintrag hinzugefügt wird, um ihn als Kommentar in Jira zu spiegeln.",
    "Choose the tag to add to an entry to mirror it as an attachment in Jira.":
      "Wählen Sie das Tag aus, das einem Eintrag hinzugefügt wird, um ihn als Anhang in Jira zu spiegeln.",
    "Ciphers":
      "Verschlüsselungen (Ciphers)",
    "Clear, Deep, and Dark Web - tailored to your assets.":
      "Clear Web, Deep Web und Dark Web – auf Ihre Assets zugeschnitten.",
    "Click “Add API Client”.":
      "Klicken Sie auf „Add API Client“.",
    "Click “Save”.":
      "Klicken Sie auf „Save“.",
    "Click on “CONNECT CORTEX XSOAR”":
      "Klicken Sie auf „CONNECT CORTEX XSOAR“",
    "Configure a SpecterOps BloodHound Enterprise integration instance by providing the following mandatory details:":
      "Konfigurieren Sie eine SpecterOps-BloodHound-Enterprise-Integrationsinstanz, indem Sie die folgenden Pflichtangaben machen:",
    "Configure the instance by providing following mandatory details:":
      "Konfigurieren Sie die Instanz, indem Sie die folgenden Pflichtangaben machen:",
    "Confirm that the pre-filled URL matches the correct API endpoint for your Anomali ThreatStream instance.":
      "Vergewissern Sie sich, dass die vorausgefüllte URL dem richtigen API-Endpunkt Ihrer Anomali-ThreatStream-Instanz entspricht.",
    "Connect to an OAuth provider and create an OAuth application registry by accessing All→System OAuth→Application Registry:":
      "Stellen Sie eine Verbindung zu einem OAuth-Anbieter her und erstellen Sie eine OAuth-Anwendungsregistrierung, indem Sie auf All→System OAuth→Application Registry zugreifen:",
    "Content metadata":
      "Inhaltsmetadaten",
    "Cortex version 6.0.0 and below:":
      "Cortex-Version 6.0.0 und früher:",
    "Create an account in Prisma SASE UI:":
      "Erstellen Sie ein Konto in der Prisma SASE UI:",
    "Create user if does not exist":
      "Benutzer erstellen, falls nicht vorhanden",
    "Darkmon incident types to fetch":
      "Abzurufende Darkmon-Incident-Typen",
    "Deprecation Note:":
      "Hinweis zur Veraltung:",
    "Developer Contributed Integration":
      "Von einem Entwickler bereitgestellte Integration",
    "Device group - Panorama instances only (write shared for Shared location)":
      "Gerätegruppe – nur Panorama-Instanzen (shared für den freigegebenen Speicherort eingeben)",
    "Domain (used in Multi Domain Server)":
      "Domäne (wird in Multi Domain Server verwendet)",
    "DOMAIN\\USERNAME (e.g. DEMISTO.INT\\admin)":
      "DOMAIN\\USERNAME (z. B. DEMISTO.INT\\admin)",
    "Each enriched incident contains the following fields in the incident context:":
      "Jeder angereicherte Incident enthält die folgenden Felder im Incident-Kontext:",
    "Enable the “Allow Multiple Logins” checkbox for the relevant user.":
      "Aktivieren Sie das Kontrollkästchen „Allow Multiple Logins“ für den entsprechenden Benutzer.",
    "Enable to automatically tag indicators with Analyst1 entity type classifications (e.g., \"Analyst1: Indicator\", \"Analyst1: Asset\", \"Analyst1: In Private Range\"). Tags help identify how Analyst1 classifies each indicator.":
      "Aktivieren Sie diese Option, um Indikatoren automatisch mit den Entitätstyp-Klassifizierungen von Analyst1 zu taggen (z. B. „Analyst1: Indicator“, „Analyst1: Asset“, „Analyst1: In Private Range“). Die Tags helfen dabei zu erkennen, wie Analyst1 die einzelnen Indikatoren klassifiziert.",
    "Exchange Server Hostname or IP address":
      "Hostname oder IP-Adresse des Exchange-Servers",
    "Exchange Server Version (On-Premise only. Supported versions: 2007, 2010, 2010_SP2, 2013, 2013_SP1, 2016, and 2019)":
      "Exchange-Server-Version (nur lokal. Unterstützte Versionen: 2007, 2010, 2010_SP2, 2013, 2013_SP1, 2016 und 2019)",
    "Fetch attachments for a Jira ticket.":
      "Ruft die Anhänge eines Jira-Tickets ab.",
    "Fetch comments for a Jira ticket.":
      "Ruft die Kommentare eines Jira-Tickets ab.",
    "Fetch incidents only for devices with the device families selected":
      "Ruft Incidents nur für Geräte mit den ausgewählten Gerätefamilien ab",
    "Fetch incidents only for devices with the tags selected":
      "Ruft Incidents nur für Geräte mit den ausgewählten Tags ab",
    "Fetch incidents:":
      "Incidents abrufen:",
    "Fetch Incidents:":
      "Incidents abrufen:",
    "Filter the Detections by “Create Incidents for Prioritized Detections”, “Create Incidents for Escalated Detections”:":
      "Filtern Sie die Erkennungen nach „Create Incidents for Prioritized Detections“ und „Create Incidents for Escalated Detections“:",
    "Finding Environment":
      "Umgebung der Feststellung",
    "First fetch query time range when starting from a clean state. Accepts ISO timestamps or relative durations (e.g. \"3 days\", \"12 hours\").":
      "Zeitraum der Abfrage für den ersten Abruf beim Start aus einem sauberen Zustand. Akzeptiert ISO-Zeitstempel oder relative Zeitspannen (z. B. „3 days“, „12 hours“).",
    "Following new fields are introduced in the response of the incident to enable the mirroring:":
      "Die folgenden neuen Felder wurden in der Antwort des Incidents eingeführt, um die Spiegelung zu aktivieren:",
    "For detailed instructions, refer to the official Splunk documentation:":
      "Ausführliche Anweisungen finden Sie in der offiziellen Splunk-Dokumentation:",
    "For example:":
      "Beispiel:",
    "For the OAuth method:":
      "Für die OAuth-Methode:",
    "For the URL argument, take a look here:":
      "Informationen zum Argument URL finden Sie hier:",
    "For VMware Carbon Black EDR:":
      "Für VMware Carbon Black EDR:",
    "For VMware Carbon Black Endpoint Standard:":
      "Für VMware Carbon Black Endpoint Standard:",
    "Format: server.analyst1.com (do not include http:// or https://)":
      "Format: server.analyst1.com (ohne http:// oder https://)",
    "Gather additional information about the threat model from remote APIs.":
      "Sammelt zusätzliche Informationen zum Bedrohungsmodell von Remote-APIs.",
    "Generate API token":
      "API-Token generieren",
    "Get an API key":
      "API-Schlüssel abrufen",
    "Go to classifier":
      "Zum Klassifizierer wechseln",
    "Go to incoming mapper":
      "Zum eingehenden Mapper wechseln",
    "If MFA is enabled for your user, follow the next steps:":
      "Wenn MFA für Ihren Benutzer aktiviert ist, führen Sie die folgenden Schritte aus:",
    "If MFA is enabled for your user, perform the following steps:":
      "Wenn MFA für Ihren Benutzer aktiviert ist, führen Sie die folgenden Schritte aus:",
    "If set to false, iam-create-user command will be skipped, and user will not be created.":
      "Wenn der Wert false festgelegt ist, wird der Befehl iam-create-user übersprungen und der Benutzer nicht erstellt.",
    "If the connection test was successful, click “Save & Exit”":
      "Wenn der Verbindungstest erfolgreich war, klicken Sie auf „Speichern und beenden“",
    "If this parameter is given, the commands will run with the UPN mailbox instead of the default target mailbox.":
      "Wenn dieser Parameter angegeben wird, werden die Befehle mit dem UPN-Postfach anstelle des standardmäßigen Zielpostfachs ausgeführt.",
    "If true, the user is created if the user profile doesn't exist in AD. Used in IAM commands only.":
      "Wenn true festgelegt ist, wird der Benutzer erstellt, falls das Benutzerprofil in AD nicht vorhanden ist. Wird nur in IAM-Befehlen verwendet.",
    "In order to connect to Microsoft Graph Services using either Cortex Azure App or the Self-Deployed Azure App:":
      "So stellen Sie mit Cortex Azure App oder Self-Deployed Azure App eine Verbindung zu Microsoft Graph Services her:",
    "In order to create an instance of the Microsoft Teams Webhook in Cortex, complete the following:":
      "Gehen Sie wie folgt vor, um in Cortex eine Instanz von Microsoft Teams Webhook zu erstellen:",
    "In order to create the API Key go to:":
      "Wechseln Sie zum Erstellen des API-Schlüssels zu:",
    "In order to use multiple values for the same filter and get alerts that have one of the values, state them several time, for example:":
      "Um mehrere Werte für denselben Filter zu verwenden und Warnungen zu erhalten, die einen der Werte enthalten, geben Sie diese mehrfach an, zum Beispiel:",
    "In Terraform Enterprise:":
      "In Terraform Enterprise:",
    "In the Azure Application you created give the following application permission:":
      "Erteilen Sie in der von Ihnen erstellten Azure-Anwendung die folgende Anwendungsberechtigung:",
    "In the Cortex Xsoar configuration window:":
      "Im Konfigurationsfenster von Cortex Xsoar:",
    "In the Silent Push Profile menu, click Organization, and go to the API tab.":
      "Klicken Sie im Silent-Push-Menü Profile auf Organization und wechseln Sie zur Registerkarte API.",
    "Joe Security Url":
      "Joe-Security-URL",
    "Log in to your Zoom admin user account, and follow these steps:":
      "Melden Sie sich bei Ihrem Zoom-Administratorkonto an und führen Sie die folgenden Schritte aus:",
    "Make sure you have the following parameters:":
      "Stellen Sie sicher, dass Sie über die folgenden Parameter verfügen:",
    "Max concurrent command calls":
      "Maximale Anzahl gleichzeitiger Befehlsaufrufe",
    "Max. Polling Time (in seconds):":
      "Max. Abfragezeit (in Sekunden):",
    "Maximum number of incidents per fetch. The default value is 200.":
      "Maximale Anzahl von Incidents pro Abruf. Der Standardwert ist 200.",
    "More information about National clouds can be found here - https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud":
      "Weitere Informationen zu National Clouds finden Sie hier: https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud",
    "Navigate to one of the following:":
      "Wechseln Sie zu einer der folgenden Optionen:",
    "Navigate to User Settings. (Vertical ellipsis available on the top right corner).":
      "Wechseln Sie zu User Settings (die vertikalen Auslassungspunkte befinden sich in der oberen rechten Ecke).",
    "Next, you need to extract the private.key. You can do this using the following commands:":
      "Als Nächstes müssen Sie private.key extrahieren. Dies ist mit den folgenden Befehlen möglich:",
    "NGINX Global Directives":
      "Globale NGINX-Direktiven",
    "NGINX global directives to be passed on the command line using the -g option. Each directive should end with `;`. For example: `worker_processes 4; timer_resolution 100ms;`. Advanced configuration to be used only if instructed by Cortex Support.":
      "Globale NGINX-Direktiven, die über die Option -g in der Befehlszeile übergeben werden. Jede Direktive muss mit `;` enden. Beispiel: `worker_processes 4; timer_resolution 100ms;`. Erweiterte Konfiguration, die nur auf Anweisung des Cortex-Supports verwendet werden sollte.",
    "NGINX Read Timeout":
      "NGINX-Lese-Timeout",
    "NGINX Server Conf":
      "NGINX-Serverkonfiguration",
    "NGINX server configuration to be used instead of the default NGINX_SERVER_CONF used in the integration code. Advanced configuration to be used only if instructed by Cortex Support.":
      "NGINX-Serverkonfiguration, die anstelle der im Integrationscode verwendeten Standardkonfiguration NGINX_SERVER_CONF verwendet wird. Erweiterte Konfiguration, die nur auf Anweisung des Cortex-Supports verwendet werden sollte.",
    "NGNIX read timeout in seconds.":
      "NGINX-Lese-Timeout in Sekunden.",
    "NTLM authentication":
      "NTLM-Authentifizierung",
    "OAuth2 Client Credentials":
      "OAuth2-Clientanmeldeinformationen",
    "Override Authentication Type (NTLM, Basic, or Digest).":
      "Authentifizierungstyp überschreiben (NTLM, Basic oder Digest).",
    "Override the Darkmon TIP API base URL only if your tenant points at a non-default endpoint. The default value already targets the production Darkmon TIP service (https://api.darkmon.com/tip/2025.1). Leave blank to use the default.":
      "Überschreiben Sie die Basis-URL der Darkmon-TIP-API nur, wenn Ihr Tenant auf einen nicht standardmäßigen Endpunkt verweist. Der Standardwert zielt bereits auf den Darkmon-TIP-Produktionsdienst (https://api.darkmon.com/tip/2025.1). Lassen Sie das Feld leer, um den Standardwert zu verwenden.",
    "Panorama / Pan-OS Authentication:":
      "Panorama-/Pan-OS-Authentifizierung:",
    "Panorama: Configure a device group":
      "Panorama: Gerätegruppe konfigurieren",
    "Paste the API key into the settings of this integration in the field “API Key”":
      "Fügen Sie den API-Schlüssel in den Einstellungen dieser Integration im Feld „API Key“ ein.",
    "Port is optional (e.g https://sonar.example.com:9000)":
      "Der Port ist optional (z. B. https://sonar.example.com:9000)",
    "Post to a channel when a webhook request is received":
      "In einem Kanal posten, wenn eine Webhook-Anfrage empfangen wird",
    "PrivateLink service URL.":
      "URL des PrivateLink-Dienstes.",
    "Product version id":
      "Produktversions-ID",
    "Product versions name":
      "Name der Produktversionen",
    "Production vs development":
      "Produktion im Vergleich zur Entwicklung",
    "Products id":
      "Produkt-ID",
    "Products name":
      "Produktnamen",
    "Public Folder":
      "Öffentlicher Ordner",
    "Redact secrets in War Room output":
      "Geheimnisse in der War-Room-Ausgabe schwärzen",
    "Required Permissions:":
      "Erforderliche Berechtigungen:",
    "Requited. Not relevant for deprecated GSuite Apps setup - see Help section":
      "Erforderlich. Nicht relevant für die veraltete GSuite-Apps-Einrichtung – siehe Abschnitt „Hilfe“.",
    "Result name":
      "Ergebnisname",
    "Result short name":
      "Kurzname des Ergebnisses",
    "Result vendor url (only human readable)":
      "Hersteller-URL des Ergebnisses (nur menschenlesbar)",
    "Retries":
      "Wiederholungen",
    "Role name for cross-organization account access":
      "Rollenname für organisationsübergreifenden Kontozugriff",
    "Role Session Duration":
      "Dauer der Rollensitzung",
    "Run as a separate process (protects against memory depletion)":
      "Als separaten Prozess ausführen (schützt vor Speichererschöpfung)",
    "Search query for fetching alerts. The default fetch query is \"alert\".":
      "Suchabfrage zum Abrufen von Alerts. Die Standardabrufabfrage lautet „alert“.",
    "Select Fetches incidents.":
      "Wählen Sie Fetches incidents aus.",
    "Select how to authenticate with the Analyst1 API. Basic Authentication uses username/password. OAuth2 uses client_id/client_secret from an API Key.":
      "Wählen Sie aus, wie die Authentifizierung bei der Analyst1-API erfolgen soll. Die Basisauthentifizierung verwendet Benutzername und Kennwort. OAuth2 verwendet client_id/client_secret aus einem API-Schlüssel.",
    "Select the authentication method.":
      "Wählen Sie die Authentifizierungsmethode aus.",
    "Select the Incident Mirroring Direction:":
      "Wählen Sie die Richtung der Incident-Spiegelung aus:",
    "Select this checkbox if you are using a US Government cloud account.":
      "Aktivieren Sie dieses Kontrollkästchen, wenn Sie ein Cloud-Konto der US-Regierung verwenden.",
    "Server port. If not specified, the default port is 389 for LDAP, 636 for LDAPS, or 3268 for global catalog servers.":
      "Serverport. Wenn nicht angegeben, ist der Standardport 389 für LDAP, 636 für LDAPS oder 3268 für Global-Catalog-Server.",
    "SSL Version":
      "SSL-Version",
    "Start fetching incidents from the specified time.":
      "Beginnen Sie das Abrufen von Incidents ab dem angegebenen Zeitpunkt.",
    "STS PrivateLink URL.":
      "STS-PrivateLink-URL.",
    "STS Region":
      "STS-Region",
    "Supported authentication methods:":
      "Unterstützte Authentifizierungsmethoden:",
    "The account identifier can be found using the user blade at the bottom left. Hover over the account you wish to onboard and select the copy option at the top right.":
      "Die Konto-ID finden Sie im Benutzerbereich unten links. Zeigen Sie mit der Maus auf das Konto, das Sie onboarden möchten, und wählen Sie oben rechts die Option „Kopieren“ aus.",
    "The account identifier is usually of the format: [organization].[account]":
      "Die Konto-ID hat üblicherweise das Format [organization].[account].",
    "The API key must be entitled to the endpoints backing the commands you intend to run:":
      "Der API-Schlüssel muss für die Endpunkte berechtigt sein, auf denen die auszuführenden Befehle basieren:",
    "The AWS region used to create the STS client. Set this explicitly when STS calls must target a fixed region regardless of the command's target region.":
      "Die AWS-Region, die zum Erstellen des STS-Clients verwendet wird. Legen Sie sie explizit fest, wenn STS-Aufrufe unabhängig von der Zielregion des Befehls auf eine feste Region ausgerichtet sein müssen.",
    "The base URL. For a cloud instance, use the default URL as configured. For an OnPrem instance, use your respective domain.":
      "Die Basis-URL. Verwenden Sie für eine Cloud-Instanz die konfigurierte Standard-URL. Verwenden Sie für eine OnPrem-Instanz Ihre jeweilige Domain.",
    "The default Kibana space ID to use for es-kibana-* commands. Used to derive the Kibana base URL from the Server URL. If a space_id argument is provided to a command, it overrides this value. See https://www.elastic.co/docs/deploy-manage/manage-spaces for more information.":
      "Die Standard-Kibana-Space-ID für die es-kibana-*-Befehle. Sie dient zur Ableitung der Kibana-Basis-URL aus der Server-URL. Wenn einem Befehl ein Argument space_id übergeben wird, überschreibt es diesen Wert. Weitere Informationen finden Sie unter https://www.elastic.co/docs/deploy-manage/manage-spaces.",
    "The default TTL for responses in the cache.":
      "Der Standard-TTL für Antworten im Cache.",
    "The field selected in the \"Issue Field to fetch by\" can't be used in the query.":
      "Das in „Issue Field to fetch by“ ausgewählte Feld kann in der Abfrage nicht verwendet werden.",
    "The following are the required managed modules for this integration:":
      "Die folgenden verwalteten Module sind für diese Integration erforderlich:",
    "The following commands require the API access to be configured:":
      "Für die folgenden Befehle muss der API-Zugriff konfiguriert sein:",
    "The following commands require the SSH access to be configured:":
      "Für die folgenden Befehle muss der SSH-Zugriff konfiguriert sein:",
    "The following scopes are required for the Okta v2 integration to work properly:":
      "Die folgenden Bereiche (Scopes) sind erforderlich, damit die Okta-v2-Integration ordnungsgemäß funktioniert:",
    "The incidents are fetched according to a number of different optional log type queries. The log types are:":
      "Incidents werden anhand mehrerer optionaler Protokolltyp-Abfragen abgerufen. Die Protokolltypen sind:",
    "The integration supports three types of authorization:":
      "Die Integration unterstützt drei Autorisierungstypen:",
    "The integration supports two types of authorization:":
      "Die Integration unterstützt zwei Autorisierungstypen:",
    "The integration uses the supplied username and password to obtain a bearer token from Elasticsearch via the Get token API. Before using Bearer Authentication, ensure the token service is enabled on your Elasticsearch cluster:":
      "Die Integration verwendet den angegebenen Benutzernamen und das Kennwort, um über die Get-token-API ein Bearer-Token von Elasticsearch abzurufen. Stellen Sie vor der Verwendung der Bearer-Authentifizierung sicher, dass der Token-Dienst in Ihrem Elasticsearch-Cluster aktiviert ist:",
    "The Kibana server used by the es-kibana-* commands and by fetching and mirroring security alerts and cases. Required for on-premises (self-managed) deployments, where Kibana is usually hosted separately from Elasticsearch (for example, https://kibana.example.com:5601). If left empty, the Kibana URL is derived from the Server URL, which is supported only for Elastic Cloud deployments whose hostname contains \".es.\" (the segment is replaced with \".kb.\").":
      "Der Kibana-Server, der von den es-kibana-*-Befehlen sowie beim Abrufen und Spiegeln von Sicherheitsalarmen und -fällen verwendet wird. Erforderlich für lokale (selbstverwaltete) Bereitstellungen, bei denen Kibana normalerweise getrennt von Elasticsearch gehostet wird (z. B. https://kibana.example.com:5601). Wenn das Feld leer bleibt, wird die Kibana-URL aus der Server-URL abgeleitet. Dies wird nur für Elastic-Cloud-Bereitstellungen unterstützt, deren Hostname „.es.“ enthält (das Segment wird durch „.kb.“ ersetzt).",
    "The maximum allowed value is dictated by the Jira property 'jira.search.views.default.max'. If you specify a value that is higher than this number, your search results will be truncated. Default value is 50":
      "Der maximal zulässige Wert wird durch die Jira-Eigenschaft 'jira.search.views.default.max' vorgegeben. Wenn Sie einen höheren Wert angeben, werden Ihre Suchergebnisse abgeschnitten. Der Standardwert ist 50.",
    "The maximum number of concurrent calls to allow when running a command on all accounts provided in \"AWS Organization accounts to access\".":
      "Die maximale Anzahl gleichzeitiger Aufrufe, die zulässig sind, wenn ein Befehl auf allen unter „AWS Organization accounts to access“ angegebenen Konten ausgeführt wird.",
    "The maximum number of retry attempts when connection or throttling errors are encountered. Set to 0 to disable retries. The default value is 5 and the limit is 10. Note: Increasing the number of retries will increase the execution time.":
      "Die maximale Anzahl von Wiederholungsversuchen bei Verbindungs- oder Drosselungsfehlern. Legen Sie 0 fest, um Wiederholungen zu deaktivieren. Der Standardwert ist 5 und das Limit ist 10. Hinweis: Eine höhere Anzahl von Wiederholungen verlängert die Ausführungszeit.",
    "The parameter can be saved as 000-000 and added as an argument to each command, but Test button will fail.":
      "Der Parameter kann als 000-000 gespeichert und jedem Befehl als Argument hinzugefügt werden, die Schaltfläche „Test“ schlägt jedoch fehl.",
    "The parameter can be saved as 000-000 and added as an argument to each command.":
      "Der Parameter kann als 000-000 gespeichert und jedem Befehl als Argument hinzugefügt werden.",
    "The role name used to access accounts in the organization. This role name must exist in the accounts provided in \"AWS Organization accounts\" and be assumable with the credentials provided.":
      "Der Rollenname, der für den Zugriff auf Konten in der Organisation verwendet wird. Dieser Rollenname muss in den unter „AWS Organization accounts“ angegebenen Konten vorhanden sein und mit den angegebenen Anmeldedaten übernommen werden können.",
    "The SSL\\TLS version to use in SSL or Start TLS connections types. Default is None. It is recommended to select the TLS_CLIENT option, which auto-negotiate the highest protocol version that both the client and server support, and configure the context client-side connections.":
      "Die SSL\\TLS-Version, die bei den Verbindungstypen SSL oder Start TLS verwendet wird. Der Standardwert ist None. Es wird empfohlen, die Option TLS_CLIENT auszuwählen, die automatisch die höchste Protokollversion aushandelt, die sowohl vom Client als auch vom Server unterstützt wird, und den Kontext für clientseitige Verbindungen konfiguriert.",
    "The time in seconds till a timeout exception is reached. You can specify just the read timeout (for example 60) or also the connect timeout followed after a comma (for example 60,10). If a connect timeout is not specified, a default of 10 second will be used.":
      "Die Zeit in Sekunden, bis eine Timeout-Ausnahme ausgelöst wird. Sie können nur das Lese-Timeout (z. B. 60) oder zusätzlich das Verbindungs-Timeout nach einem Komma (z. B. 60,10) angeben. Wenn kein Verbindungs-Timeout angegeben wird, gilt der Standardwert von 10 Sekunden.",
    "The time range to consider for the initial data fetch in format: <number> <unit>. This parameter is only relevant when selecting to fetch by created time, or updated time. Default is 3 days. For example: 2 minutes, 2 hours, 2 days, 2 months, 2 years":
      "Der Zeitbereich, der für den ersten Datenabruf berücksichtigt wird, im Format: <number> <unit>. Dieser Parameter ist nur relevant, wenn der Abruf nach Erstellungs- oder Aktualisierungszeit gewählt wird. Der Standardwert ist 3 Tage. Zum Beispiel: 2 minutes, 2 hours, 2 days, 2 months, 2 years",
    "The TTL for 404 responses in the cache.":
      "Die TTL für 404-Antworten im Cache.",
    "There are three ways to authenticate to the Microsoft Graph Services:":
      "Es gibt drei Möglichkeiten, sich bei den Microsoft Graph Services zu authentifizieren:",
    "There is only one application authentication method available:":
      "Es ist nur eine Anwendungsauthentifizierungsmethode verfügbar:",
    "These parameters support the following integration commands:":
      "Diese Parameter unterstützen die folgenden Integrationsbefehle:",
    "This field is ignored if other required fields are not provided (for example both the access token and the private key).":
      "Dieses Feld wird ignoriert, wenn andere erforderliche Felder nicht angegeben sind (z. B. sowohl das Zugriffstoken als auch der private Schlüssel).",
    "This field is used to configure the Jira Cloud.":
      "Dieses Feld dient zur Konfiguration von Jira Cloud.",
    "This integration supports sending messages to additional Teams via a workflow. There are 2 methods for this:":
      "Diese Integration unterstützt das Senden von Nachrichten an zusätzliche Teams über einen Workflow. Dafür gibt es 2 Methoden:",
    "This integration supports three authentication methods:":
      "Diese Integration unterstützt drei Authentifizierungsmethoden:",
    "This integration supports two authentication methods:":
      "Diese Integration unterstützt zwei Authentifizierungsmethoden:",
    "This is how the field (e.g, created date) is applied to the query: created >= {created date in last run} ORDER BY created ASC":
      "So wird das Feld (z. B. Erstellungsdatum) auf die Abfrage angewendet: created >= {created date in last run} ORDER BY created ASC",
    "This parameter is dismissed if \"id\" is not chosen in \"Issue Field to Fetch by\". This will only fetch Jira issues that are part of the same project as the issue that is configured in this parameter. If this value is 0, then the fetch mechanism will automatically start the fetch from the smallest ID with respect to the fetch query.":
      "Dieser Parameter wird ignoriert, wenn unter „Issue Field to Fetch by“ nicht „id“ ausgewählt ist. Es werden nur Jira-Vorgänge abgerufen, die zum selben Projekt gehören wie der in diesem Parameter konfigurierte Vorgang. Wenn dieser Wert 0 ist, beginnt der Abrufmechanismus automatisch mit der kleinsten ID gemäß der Abfrage.",
    "This parameter is dismissed while \"Use created field to fetch incidents\" is checked.":
      "Dieser Parameter wird ignoriert, solange „Use created field to fetch incidents“ aktiviert ist.",
    "This section explains how to configure the instance of ANY.RUN TI Lookup in Cortex.":
      "In diesem Abschnitt wird erläutert, wie Sie die Instanz von ANY.RUN TI Lookup in Cortex konfigurieren.",
    "This token is used for both OAuth 1.0 and personal access token authentication methods.":
      "Dieses Token wird sowohl für OAuth 1.0 als auch für die Authentifizierungsmethoden mit persönlichem Zugriffstoken verwendet.",
    "This will be in the following format: https://customer-portal.asimily.com.":
      "Das Format lautet wie folgt: https://customer-portal.asimily.com.",
    "TIM customers that upgraded to version 6.2 or above, can have this value pre-configured in their main account so no additional input is needed. To use this feature, upgrade your license so it includes the license key.":
      "TIM-Kunden, die auf Version 6.2 oder höher aktualisiert haben, können diesen Wert in ihrem Hauptkonto vorkonfiguriert haben, sodass keine zusätzliche Eingabe erforderlich ist. Um diese Funktion zu nutzen, aktualisieren Sie Ihre Lizenz so, dass sie den Lizenzschlüssel enthält.",
    "Timeout (in seconds) for HTTP requests to Exchange Server":
      "Timeout (in Sekunden) für HTTP-Anfragen an Exchange Server",
    "To configure the integration, you’ll need:":
      "Zum Konfigurieren der Integration benötigen Sie:",
    "To configure the integration:":
      "So konfigurieren Sie die Integration:",
    "To configure this integration, you will need:":
      "Zum Konfigurieren dieser Integration benötigen Sie:",
    "To connect to the Microsoft Defender XDR:":
      "So stellen Sie eine Verbindung zu Microsoft Defender XDR her:",
    "To create an API key in Kibana:":
      "So erstellen Sie einen API-Schlüssel in Kibana:",
    "To create an instance of the Microsoft Teams integration in Cortex, complete the following:":
      "Führen Sie Folgendes aus, um in Cortex eine Instanz der Microsoft Teams-Integration zu erstellen:",
    "To enable asset fetching:":
      "So aktivieren Sie den Abruf von Assets:",
    "To fetch Vectra RUX Events Detections follow the next steps:":
      "Gehen Sie wie folgt vor, um Vectra RUX Events Detections abzurufen:",
    "To generate an API key, make a POST request to the firewall’s hostname or IP addresses using the administrative credentials and type=keygen:":
      "Um einen API-Schlüssel zu generieren, senden Sie mit den Administratoranmeldeinformationen und type=keygen eine POST-Anfrage an den Hostnamen oder die IP-Adressen der Firewall:",
    "To generate the files needed for SSL, you will need to create a Kafka client keystore. You can use the script at:":
      "Um die für SSL erforderlichen Dateien zu generieren, müssen Sie einen Kafka-Client-Keystore erstellen. Sie können dafür das Skript unter folgendem Pfad verwenden:",
    "To get your Vectra Client ID and Client Secret Key, follow these steps:":
      "Gehen Sie wie folgt vor, um Ihre Vectra-Client-ID und Ihren geheimen Client-Schlüssel zu erhalten:",
    "To learn more about Zendesk roles refer to:":
      "Weitere Informationen zu Zendesk-Rollen finden Sie unter:",
    "To obtain an API key, run the following CURL command and copy the key:":
      "Um einen API-Schlüssel zu erhalten, führen Sie den folgenden CURL-Befehl aus und kopieren Sie den Schlüssel:",
    "To reduce the number of lookups made to the AbuseIPDB API, this option can be selected to gracefully skip enrichment of any IP addresses allocated for private networks.":
      "Um die Anzahl der Abfragen an die AbuseIPDB-API zu reduzieren, kann diese Option ausgewählt werden, um die Anreicherung von IP-Adressen, die privaten Netzwerken zugewiesen sind, problemlos zu überspringen.",
    "To set up mirroring:":
      "So richten Sie die Spiegelung ein:",
    "To use OAuth 2.0 authorization follow the next steps:":
      "Gehen Sie wie folgt vor, um die OAuth 2.0-Autorisierung zu verwenden:",
    "To use OAuth 2.0 authorization perform the following steps:":
      "Führen Sie die folgenden Schritte aus, um die OAuth 2.0-Autorisierung zu verwenden:",
    "To use Splunk token authentication, enter the text:":
      "Um die Splunk-Token-Authentifizierung zu verwenden, geben Sie den folgenden Text ein:",
    "To use the mattermost integration:":
      "So verwenden Sie die mattermost-Integration:",
    "Troubleshooting: Override Agent (Advanced)":
      "Fehlerbehebung: Override Agent (erweitert)",
    "Two application authentication methods are available:":
      "Es stehen zwei Anwendungsauthentifizierungsmethoden zur Verfügung:",
    "URL of the Hatching service will be either:":
      "Die URL des Hatching-Dienstes lautet entweder:",
    "Use the \"API Token (Recommended)\" parameter instead.":
      "Verwenden Sie stattdessen den Parameter „API Token (Recommended)“.",
    "Use the Akamai WAF integration to manage common sets of lists used by various Akamai security products and features.":
      "Verwenden Sie die Akamai WAF-Integration, um allgemeine Listensätze zu verwalten, die von verschiedenen Akamai-Sicherheitsprodukten und -funktionen verwendet werden.",
    "Use the following account credentials to get an access token:":
      "Verwenden Sie die folgenden Kontoanmeldeinformationen, um ein Zugriffstoken abzurufen:",
    "Use the SplunkPy v2 integration to:":
      "Verwenden Sie die SplunkPy v2-Integration, um:",
    "Used in the IAM commands.":
      "Wird in den IAM-Befehlen verwendet.",
    "Used to impersonate a Google workspace user, so the spreadsheets is created in the associated Google Drive and is easily accessible from a UI. This parameter is used during the authentication process.":
      "Wird verwendet, um einen Google-Workspace-Benutzer zu imitieren, sodass die Tabellenkalkulationen im zugehörigen Google Drive erstellt werden und über die Benutzeroberfläche leicht zugänglich sind. Dieser Parameter wird während des Authentifizierungsvorgangs verwendet.",
    "Users who wish to enrich or mirror fetched notables and have already used the integration in the past:":
      "Benutzer, die abgerufene Notables anreichern oder spiegeln möchten und die Integration bereits zuvor verwendet haben:",
    "Verify base DN on every command":
      "Basis-DN bei jedem Befehl überprüfen",
    "Version id":
      "Versions-ID",
    "Version name":
      "Versionsname",
    "Vulnerability description (only human readable)":
      "Beschreibung der Schwachstelle (nur menschenlesbar)",
    "Vulnerability discovery date":
      "Entdeckungsdatum der Schwachstelle",
    "Vulnerability keywords":
      "Schlüsselwörter der Schwachstelle",
    "Vulnerability published date":
      "Veröffentlichungsdatum der Schwachstelle",
    "Vulnerability solution (only human readable)":
      "Lösung der Schwachstelle (nur menschenlesbar)",
    "Vulnerability solution date":
      "Datum der Lösung der Schwachstelle",
    "Vulnerability title (only human readable)":
      "Titel der Schwachstelle (nur menschenlesbar)",
    "What is the top level object to search in (usually a project or organization in format of organization/XX).":
      "Das Objekt der obersten Ebene, in dem gesucht werden soll (normalerweise ein Projekt oder eine Organisation im Format organization/XX).",
    "What you get":
      "Was Sie erhalten",
    "When enabled, replaces password/card-number values in markdown table output with '***'. Raw values remain in rawJSON for playbook automation. Disable only in non-production debugging contexts.":
      "Wenn aktiviert, werden Passwort-/Kartennummernwerte in der Markdown-Tabellenausgabe durch '***' ersetzt. Die Rohwerte verbleiben in rawJSON für die Playbook-Automatisierung. Deaktivieren Sie diese Option nur in Debugging-Kontexten außerhalb der Produktion.",
    "Which Darkmon record kinds the integration ingests as XSOAR incidents. Defaults to the high-signal trio. Lower-signal kinds (e.g. Ransomware Mention) are typically better handled via the monitoring playbooks rather than native fetch.":
      "Welche Darkmon-Datensatzarten die Integration als XSOAR-Incidents aufnimmt. Standardmäßig sind dies die drei Arten mit hohem Signalwert. Arten mit geringerem Signalwert (z. B. Ransomware Mention) werden in der Regel besser über die Überwachungs-Playbooks als über den nativen Abruf behandelt.",
    "XSOAR Verdict to set when Analyst1 Risk Score is \"Critical\".":
      "XSOAR-Verdict, der festgelegt wird, wenn Analyst1 Risk Score „Critical“ ist.",
    "XSOAR Verdict to set when Analyst1 Risk Score is \"High\".":
      "XSOAR-Verdict, der festgelegt wird, wenn Analyst1 Risk Score „High“ ist.",
    "XSOAR Verdict to set when Analyst1 Risk Score is \"Low\".":
      "XSOAR-Verdict, der festgelegt wird, wenn Analyst1 Risk Score „Low“ ist.",
    "XSOAR Verdict to set when Analyst1 Risk Score is \"Lowest\".":
      "XSOAR-Verdict, der festgelegt wird, wenn Analyst1 Risk Score „Lowest“ ist.",
    "XSOAR Verdict to set when Analyst1 Risk Score is \"Moderate\".":
      "XSOAR-Verdict, der festgelegt wird, wenn Analyst1 Risk Score „Moderate“ ist.",
    "XSOAR Verdict to set when Analyst1 Risk Score is \"Unknown\" or not present.":
      "XSOAR-Verdict, der festgelegt wird, wenn Analyst1 Risk Score „Unknown“ ist oder nicht vorhanden ist.",
    "BaseUrl - API url":
      "BaseUrl - API-URL",
    "SPLUNK user key":
      "Splunk-Benutzerschlüssel",
    "IP values related to the offense are returned from the API as ID values. Enable this parameter the IDs to IP values.":
      "Die IP-Werte zur Offense werden von der API als ID-Werte zurückgegeben. Aktivieren Sie diesen Parameter, um die IDs in IP-Werte umzuwandeln.",

    // --- Batch: Integration docs as joined sentences (06:04 export, Collector 0.2.0 full re-collection) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    "(Optional) Add a {0}.":
      "(Optional) Fügen Sie {0} hinzu.",
    "(Optional) If no API token is displayed, click the {0} button to create a new one.":
      "(Optional) Wenn kein API-Token angezeigt wird, klicken Sie auf die Schaltfläche {0}, um ein neues zu erstellen.",
    "(Optional) Test the created integration instance by running the {0} command.":
      "(Optional) Testen Sie die erstellte Integrationsinstanz, indem Sie den Befehl {0} ausführen.",
    "(Recommended) Enter the ServiceNow account {0} and {1} in the integration instance configuration. The integration will then automatically perform the initial OAuth login on first use and will automatically renew the refresh token when it expires.":
      "(Empfohlen) Geben Sie {0} und {1} des ServiceNow-Kontos in der Konfiguration der Integrationsinstanz ein. Die Integration führt dann bei der ersten Verwendung automatisch die erste OAuth-Anmeldung durch und erneuert das Aktualisierungstoken automatisch, wenn es abläuft.",
    "{0} - Available under PingOne Dashboard → Environment Properties.":
      "{0} - Verfügbar unter PingOne Dashboard → Environment Properties.",
    "{0} - Each Microsoft Graph Security alert is fetched individually.":
      "{0} - Jede Microsoft Graph Security-Warnung wird einzeln abgerufen.",
    "{0} - Each Microsoft Graph Security incident is fetched individually, with all associated alerts embedded within it and stored as raw JSON. This provides a single grouped incident containing its underlying alerts, rather than multiple separate alerts.":
      "{0} - Jeder Microsoft Graph Security-Incident wird einzeln abgerufen, wobei alle zugehörigen Warnungen darin eingebettet und als rohes JSON gespeichert werden. Dadurch erhalten Sie einen einzelnen gruppierten Incident mit den zugrunde liegenden Warnungen anstelle mehrerer separater Warnungen.",
    "{0} - fully dynamic over every Darkmon data type, future-proof for new feature types added to the platform.":
      "{0} - vollständig dynamisch über alle Darkmon-Datentypen und zukunftssicher für neue Funktionstypen, die der Plattform hinzugefügt werden.",
    "{0} - list protected emails and pull every leak associated with each.":
      "{0} - listet geschützte E-Mail-Adressen auf und ruft alle zugehörigen Leaks für jede Adresse ab.",
    "{0} - OAuth credentials for API access.":
      "{0} - OAuth-Anmeldedaten für den API-Zugriff.",
    "{0} - Select your PingOne region (US, EU, or Asia).":
      "{0} - Wählen Sie Ihre PingOne-Region (US, EU oder Asia).",
    "{0} — NGFW or WildFire API.":
      "{0} — NGFW- oder WildFire-API.",
    "{0} — Retrieve a paginated list of all CVEs monitored by ThreatMon.":
      "{0} — Ruft eine paginierte Liste aller von ThreatMon überwachten CVEs ab.",
    "{0} — Retrieve CVEs affecting products the company is subscribed to.":
      "{0} — Ruft CVEs ab, die Produkte betreffen, für die das Unternehmen ein Abonnement hat.",
    "{0} — Submit a Black Market Monitoring data removal request for a specific finding.":
      "{0} — Sendet eine Anfrage zur Datenentfernung von Black Market Monitoring für ein bestimmtes Ergebnis.",
    "{0} — Submit a takedown request for an eligible Threatmon finding.":
      "{0} — Sendet eine Takedown-Anfrage für ein berechtigtes Threatmon-Ergebnis.",
    "{0} — the base URL of the Tenzai API (e.g. {1}).":
      "{0} — die Basis-URL der Tenzai-API (z. B. {1}).",
    "{0} — the Tenzai partner API key from the step above.":
      "{0} — der Tenzai-Partner-API-Schlüssel aus dem vorherigen Schritt.",
    "{0} — Update the status of a specific Threatmon incident using its unique ID.":
      "{0} — Aktualisiert den Status eines bestimmten Threatmon-Incidents anhand seiner eindeutigen ID.",
    "{0} — XSOAR TIM API Key.":
      "{0} — XSOAR-TIM-API-Schlüssel.",
    "{0} (articles + company-specific mentions).":
      "{0} (Artikel und unternehmensspezifische Erwähnungen).",
    "{0} (CVE feed with CVSS, exploitation status, source identifier).":
      "{0} (CVE-Feed mit CVSS, Ausnutzungsstatus und Quellenkennung).",
    "{0} (Recommended).":
      "{0} (empfohlen).",
    "{0} always uses {1}. If {2} is configured. The integration will authenticate using {3} when the command is called. This should have no effect on other commands.":
      "{0} verwendet immer {1}. Wenn {2} konfiguriert ist. Die Integration authentifiziert sich mit {3}, wenn der Befehl aufgerufen wird. Dies sollte keine Auswirkungen auf andere Befehle haben.",
    "{0} and {1}":
      "{0} und {1}",
    "{0} and {1}.":
      "{0} und {1}.",
    "{0} and follow the instructions to create an OAuth client":
      "{0} und folgen Sie den Anweisungen, um einen OAuth-Client zu erstellen",
    "{0} and replace the {1} in the URL with {2}.":
      "{0} und ersetzen Sie {1} in der URL durch {2}.",
    "{0} Choose the {1} for fetching attack paths (Default is 10 mins).":
      "{0} Wählen Sie {1} zum Abrufen von Angriffspfaden (Standard: 10 Min.).",
    "{0} discovery (leaked accounts, bank cards, combo lists, public breaches, compromised employee accounts).":
      "Erkennung von {0} (durchgesickerte Konten, Bankkarten, Combo-Listen, öffentliche Datenschutzverletzungen, kompromittierte Mitarbeiterkonten).",
    "{0} Do not enable {1} on the same instance. Configure one instance for the long-running Spotlight fetch, and a separate instance for the regular assets fetch.":
      "{0} Aktivieren Sie {1} nicht in derselben Instanz. Konfigurieren Sie eine Instanz für den lang laufenden Spotlight-Abruf und eine separate Instanz für den regulären Asset-Abruf.",
    "{0} for IPs, domains, URLs, file hashes, and emails, with first-class {1} + {2} outputs.":
      "{0} für IPs, Domains, URLs, Datei-Hashes und E-Mails mit erstklassigen {1} + {2}-Ausgaben.",
    "{0} For support, please contact the Threatmon team at: {1}":
      "{0} Wenden Sie sich für Support an das Threatmon-Team unter: {1}",
    "{0} If you are using the integration to rasterize un-trusted URLs or HTML content, such as those obtained via external emails, we recommend following the instructions at the {1} or {2} or {3} under the Block Internal Network Access section.":
      "{0} Wenn Sie die Integration verwenden, um nicht vertrauenswürdige URLs oder HTML-Inhalte zu rastern, wie sie beispielsweise über externe E-Mails eingehen, empfehlen wir, die Anweisungen in {1}, {2} oder {3} im Abschnitt Block Internal Network Access zu befolgen.",
    "{0} ingestion into Cortex Threat Intel Management.":
      "Aufnahme von {0} in Cortex Threat Intel Management.",
    "{0} is deprecated. Use the {1}integration instead.":
      "{0} ist veraltet. Verwenden Sie stattdessen die Integration {1}.",
    "{0} Optionally, you can choose {1} type and use the {2} and {3} fields to enter the API key ID and API key.":
      "{0} Optional können Sie den Typ {1} auswählen und die Felder {2} und {3} verwenden, um die API-Schlüssel-ID und den API-Schlüssel einzugeben.",
    "{0} supports {1} only when retrieving messages from a channel. Retrieving messages from a chat requires {2}.":
      "{0} unterstützt {1} nur beim Abrufen von Nachrichten aus einem Kanal. Zum Abrufen von Nachrichten aus einem Chat ist {2} erforderlich.",
    "{0} The {1} option is deprecated. No available replacement.":
      "{0} Die Option {1} ist veraltet. Es ist kein Ersatz verfügbar.",
    "{0} The {1} selection is ignored in this mode, and CNAPP Alerts are not collected. To collect CNAPP Alerts, use a separate instance with the regular assets fetch.":
      "{0} In diesem Modus wird die Auswahl von {1} ignoriert, und CNAPP-Warnungen werden nicht erfasst. Verwenden Sie zum Erfassen von CNAPP-Warnungen eine separate Instanz mit dem regulären Asset-Abruf.",
    "{0} This is a beta Integration that has been deprecated. The Integration uses an unsupported scraping API. We do not recommend using this integration in production environments. Some commands may not work as expected. Use the {1} Integration instead.":
      "{0} Dies ist eine veraltete Beta-Integration. Die Integration verwendet eine nicht unterstützte Scraping-API. Wir empfehlen nicht, diese Integration in Produktionsumgebungen zu verwenden. Einige Befehle funktionieren möglicherweise nicht wie erwartet. Verwenden Sie stattdessen die Integration {1}.",
    "{0} to the service account - Deprecated. {1} permissions to the Exchange Server. {2} to the {3}.":
      "{0} für das Dienstkonto - Veraltet. {1}-Berechtigungen für den Exchange Server. {2} für {3}.",
    "{0}, {1}, {2} and {3}":
      "{0}, {1}, {2} und {3}",
    "{0}: a textual name for the integration instance.":
      "{0}: ein Textname für die Integrationsinstanz.",
    "{0}: Access the Settings page from the top navigation bar.":
      "{0}: Rufen Sie die Einstellungsseite über die obere Navigationsleiste auf.",
    "{0}: Active Prisma SASE account with Strata Cloud Manager access":
      "{0}: aktives Prisma-SASE-Konto mit Zugriff auf Strata Cloud Manager",
    "{0}: By default, the integration retrieves all event detections across all entity types (Account and Host) and all detection statuses (Open, Acknowledged, Escalated, Paused). This includes both prioritized and non-prioritized detections.":
      "{0}: Standardmäßig ruft die Integration alle Ereigniserkennungen für alle Entitätstypen (Account und Host) und alle Erkennungsstatus (Open, Acknowledged, Escalated, Paused) ab. Dies umfasst sowohl priorisierte als auch nicht priorisierte Erkennungen.",
    "{0}: Choose specific indicator types to collect (IP, Domain, URL, File)":
      "{0}: Wählen Sie die zu erfassenden Indikatortypen aus (IP, Domain, URL, File)",
    "{0}: Click the {1} button.":
      "{0}: Klicken Sie auf die Schaltfläche {1}.",
    "{0}: Configure the reliability level for feed context (default: A++ - Reputation script)":
      "{0}: Konfigurieren Sie die Zuverlässigkeitsstufe für den Feed-Kontext (Standard: A++ - Reputation script)",
    "{0}: Configure the reliability level for threat intelligence context (default: A++ - Reputation script)":
      "{0}: Konfigurieren Sie die Zuverlässigkeitsstufe für den Threat-Intelligence-Kontext (Standard: A++ - Reputation script)",
    "{0}: Create an OAuth2 client in Strata Cloud Manager with Prisma AIRS AI Red Teaming API permissions":
      "{0}: Erstellen Sie in Strata Cloud Manager einen OAuth2-Client mit Berechtigungen für die Prisma AIRS AI Red Teaming API",
    "{0}: Create an OAuth2 client in Strata Cloud Manager with Prisma AIRS AI Runtime Security API permissions":
      "{0}: Erstellen Sie in Strata Cloud Manager einen OAuth2-Client mit Berechtigungen für die Prisma AIRS AI Runtime Security API",
    "{0}: Create an OAuth2 client in Strata Cloud Manager with Prisma AIRS AI Supply Chain Security API permissions":
      "{0}: Erstellen Sie in Strata Cloud Manager einen OAuth2-Client mit Berechtigungen für die Prisma AIRS AI Supply Chain Security API",
    "{0}: Enable “Create Incidents for Escalated Detections” to retrieve all escalated detections, regardless of their priority level.":
      "{0}: Aktivieren Sie „Create Incidents for Escalated Detections“, um alle eskalierten Erkennungen unabhängig von ihrer Prioritätsstufe abzurufen.",
    "{0}: Enable “Create Incidents for Prioritized Detections” to filter out non-prioritized detections. Incidents will be created only for prioritized event detections.":
      "{0}: Aktivieren Sie „Create Incidents for Prioritized Detections“, um nicht priorisierte Erkennungen herauszufiltern. Incidents werden nur für priorisierte Ereigniserkennungen erstellt.",
    "{0}: Enable automatic creation of indicators from relationships":
      "{0}: Aktivieren Sie die automatische Erstellung von Indikatoren aus Beziehungen",
    "{0}: Enable automatic creation of relationships between indicators and threat objects based on returned associations":
      "{0}: Aktivieren Sie die automatische Erstellung von Beziehungen zwischen Indikatoren und Bedrohungsobjekten auf Grundlage der zurückgegebenen Zuordnungen",
    "{0}: Enable both “Create Incidents for Prioritized Detections” and “Create Incidents for Escalated Detections”. This configuration retrieves detections that are either prioritized or escalated.":
      "{0}: Aktivieren Sie sowohl „Create Incidents for Prioritized Detections“ als auch „Create Incidents for Escalated Detections“. Diese Konfiguration ruft Erkennungen ab, die entweder priorisiert oder eskaliert sind.",
    "{0}: Fill in the {1} and {2} fields. An organization admin can create these from the {3} tab on the {4} page in Doppel Vision. V2 is recommended: new Doppel API capabilities are added to V2 only.":
      "{0}: Füllen Sie die Felder {1} und {2} aus. Ein Organisationsadministrator kann diese in Doppel Vision auf der Registerkarte {3} der Seite {4} erstellen. V2 wird empfohlen: Neue Doppel-API-Funktionen werden nur zu V2 hinzugefügt.",
    "{0}: Generate an {1} through {2} -> {3} -> {4} -> {5}.":
      "{0}: Generieren Sie {1} über {2} -> {3} -> {4} -> {5}.",
    "{0}: In the Settings page, select the {1} tab.":
      "{0}: Wählen Sie auf der Einstellungsseite die Registerkarte {1} aus.",
    "{0}: Record your API client secret somewhere safe. For security purposes, it’s only shown when you create or reset the API client. If you lose your secret, you must reset it, which removes access for any integrations that still use the previous secret. 6. Add the {1} and {2} to Cortex. Note: For more information see the {3}":
      "{0}: Bewahren Sie Ihr API-Client-Secret an einem sicheren Ort auf. Aus Sicherheitsgründen wird es nur angezeigt, wenn Sie den API-Client erstellen oder zurücksetzen. Wenn Sie Ihr Secret verlieren, müssen Sie es zurücksetzen, wodurch der Zugriff für alle Integrationen entfernt wird, die noch das vorherige Secret verwenden. 6. Fügen Sie {1} und {2} zu Cortex hinzu. Hinweis: Weitere Informationen finden Sie in {3}",
    "{0}: Select {1}.":
      "{0}: Wählen Sie {1} aus.",
    "{0}: Select which types of objects to fetch (Indicators, Threat Objects, or both)":
      "{0}: Wählen Sie aus, welche Objekttypen abgerufen werden sollen (Indikatoren, Bedrohungsobjekte oder beides)",
    "{0}: Since QRadar API v19, The timestamp fields should be provided as milliseconds epoch format instead of seconds.":
      "{0}: Seit QRadar API v19 müssen die Zeitstempelfelder im Epoch-Format in Millisekunden statt in Sekunden angegeben werden.",
    "{0}: the “Test” button is not supported for this integration. To verify that authentication was configured correctly, run the {1} command.":
      "{0}: Die Schaltfläche „Testen“ wird für diese Integration nicht unterstützt. Um zu überprüfen, ob die Authentifizierung korrekt konfiguriert wurde, führen Sie den Befehl {1} aus.",
    "{0}: The Server URL ({1}) is a global endpoint and does not require regional configuration.":
      "{0}: Die Server-URL ({1}) ist ein globaler Endpunkt und erfordert keine regionale Konfiguration.",
    "{0}: The Server URL ({1}) is a global endpoint and does not require regional configuration. Only the Scanner API base URL is region-specific.":
      "{0}: Die Server-URL ({1}) ist ein globaler Endpunkt und erfordert keine regionale Konfiguration. Nur die Basis-URL der Scanner-API ist regionsspezifisch.",
    "{0}: these are the actual certificates, not request certificates.":
      "{0}: Dies sind die tatsächlichen Zertifikate, keine Anforderungszertifikate.",
    "{0}: These are the actual certificates, not request certificates.":
      "{0}: Dies sind die tatsächlichen Zertifikate, keine Anforderungszertifikate.",
    "{0}: This is different from the OAuth2 Client ID/Secret used for management operations":
      "{0}: Dies unterscheidet sich von der OAuth2-Client-ID bzw. dem Client-Secret, die für Verwaltungsvorgänge verwendet werden",
    "{0}: This option is relevant only if the integration is running on Azure VM.":
      "{0}: Diese Option ist nur relevant, wenn die Integration auf einer Azure-VM ausgeführt wird.",
    "{0}: To create an API key, you must have the {1} role.":
      "{0}: Zum Erstellen eines API-Schlüssels benötigen Sie die Rolle {1}.",
    "{0}: Use the same {1} and {2} that you would use to log into FortiGate itself.":
      "{0}: Verwenden Sie dieselben {1} und {2}, mit denen Sie sich bei FortiGate selbst anmelden würden.",
    "{0}: When authenticating with the Cortex application, sign in with the same user you want to integrate with. Since this user must grant consent for the app’s permissions, they must be an {1}. To let a non-admin user use the app instead, after an admin has consented to the application once, go to the {2} > {3}, find the app, and set {4} to {5}. This way, other users can obtain the Cortex application credentials without needing to sign in or consent themselves. Alternatively, you can use a {6}.":
      "{0}: Melden Sie sich bei der Authentifizierung mit der Cortex-Anwendung mit demselben Benutzer an, den Sie integrieren möchten. Da dieser Benutzer die Berechtigungen der App genehmigen muss, muss er {1} sein. Damit stattdessen ein Nicht-Administrator die App verwenden kann, rufen Sie, nachdem ein Administrator der Anwendung einmal zugestimmt hat, {2} > {3} auf, suchen Sie die App und setzen Sie {4} auf {5}. So können andere Benutzer die Anmeldedaten der Cortex-Anwendung abrufen, ohne sich selbst anmelden oder zustimmen zu müssen. Alternativ können Sie {6} verwenden.",
    "{0}: When enabled, the integration will only use read-only tools, preventing any write operations to GitHub.":
      "{0}: Wenn aktiviert, verwendet die Integration nur schreibgeschützte Tools und verhindert so jegliche Schreibvorgänge in GitHub.",
    "{0}: When pooling is enabled, the number of active open database connections will equal the number of active running {1} Docker containers.":
      "{0}: Wenn Pooling aktiviert ist, entspricht die Anzahl der aktiven offenen Datenbankverbindungen der Anzahl der aktiven, laufenden {1}-Docker-Container.",
    "{0}: When using the Authorization Code flow, make sure the user you authenticate with has the required role permissions. See {1} as an example.":
      "{0}: Stellen Sie bei Verwendung des Authorization-Code-Flows sicher, dass der Benutzer, mit dem Sie sich authentifizieren, über die erforderlichen Rollenberechtigungen verfügt. Ein Beispiel finden Sie unter {1}.",
    "{0}: Within a few seconds, a new API key will appear in the table. Click the {1} button next to the key to copy it securely.":
      "{0}: Innerhalb weniger Sekunden erscheint ein neuer API-Schlüssel in der Tabelle. Klicken Sie auf die Schaltfläche {1} neben dem Schlüssel, um ihn sicher zu kopieren.",
    "{0}: Your Prisma SASE TSG ID (found in Strata Cloud Manager settings)":
      "{0}: Ihre Prisma SASE TSG-ID (zu finden in den Einstellungen von Strata Cloud Manager)",
    "Access the {0}.":
      "Rufen Sie {0} auf.",
    "Active subscription at {0}":
      "Aktives Abonnement bei {0}",
    "Add a string of JSON to the integration parameter denoted {0}":
      "Fügen Sie dem mit {0} gekennzeichneten Integrationsparameter eine JSON-Zeichenfolge hinzu",
    "AdvancedHunting.Read.All - Application - See section 4 in {0}":
      "AdvancedHunting.Read.All - Anwendung - Siehe Abschnitt 4 in {0}",
    "After creating the procedure, fill in ‘Fetch events query’ the value: ‘call {0}’ with your procedure name.":
      "Tragen Sie nach dem Erstellen der Prozedur in ‚Fetch events query‘ den Wert ‚call {0}‘ mit dem Namen Ihrer Prozedur ein.",
    "After creating the procedure, fill in ‘Fetch events query’ the value: ‘EXEC {0}’ with your procedure name.":
      "Tragen Sie nach dem Erstellen der Prozedur in ‚Fetch events query‘ den Wert ‚EXEC {0}‘ mit dem Namen Ihrer Prozedur ein.",
    "After providing the mandatory details, click {0} to test the configuration.":
      "Klicken Sie nach Eingabe der Pflichtangaben auf {0}, um die Konfiguration zu testen.",
    "All API plans are subject to a rate limit of 1 request per second - {0}":
      "Für alle API-Pläne gilt ein Ratenlimit von 1 Anfrage pro Sekunde - {0}",
    "All ZIA API calls use {0}.":
      "Alle ZIA-API-Aufrufe verwenden {0}.",
    "Alternatively, create an API key via the {0}.":
      "Alternativ können Sie einen API-Schlüssel über {0} erstellen.",
    "API reference: {0}":
      "API-Referenz: {0}",
    "Append the email ID of the service account created and click {0} to save.":
      "Fügen Sie die E-Mail-ID des erstellten Dienstkontos hinzu und klicken Sie zum Speichern auf {0}.",
    "Attach the .cer file to your Azure App. See the following {0} for an example.":
      "Hängen Sie die .cer-Datei an Ihre Azure-App an. Ein Beispiel finden Sie in {0} unten.",
    "By default, secrets such as passwords and card numbers are redacted from War Room markdown output. Raw values remain available to playbooks via context for automation. Disable {0} only when troubleshooting in non-production environments.":
      "Standardmäßig werden Geheimnisse wie Kennwörter und Kartennummern in der Markdown-Ausgabe des War Room maskiert. Die Rohwerte stehen Playbooks für die Automatisierung weiterhin über den Kontext zur Verfügung. Deaktivieren Sie {0} nur bei der Fehlersuche in Nicht-Produktionsumgebungen.",
    "Choose one of the API versions listed under {0} column in the line corresponding to your QRadar version.":
      "Wählen Sie eine der API-Versionen aus, die in der Spalte {0} in der Zeile für Ihre QRadar-Version aufgeführt sind.",
    "Choose the {0} tab, and click the {1} checkbox.":
      "Wählen Sie die Registerkarte {0} und klicken Sie auf das Kontrollkästchen {1}.",
    "Choose the {0} type from the {1} dropdown list.":
      "Wählen Sie den Typ {0} aus der Dropdown-Liste {1} aus.",
    "Click the button in the top-right corner and select {0}.":
      "Klicken Sie auf die Schaltfläche in der oberen rechten Ecke und wählen Sie {0} aus.",
    "Click your {0} in the top navigation bar.":
      "Klicken Sie in der oberen Navigationsleiste auf Ihr {0}.",
    "Click your username, and select {0}.":
      "Klicken Sie auf Ihren Benutzernamen und wählen Sie {0} aus.",
    "Comma-separated list of URL categories to treat as suspicious. Default: {0}.":
      "Kommagetrennte Liste der URL-Kategorien, die als verdächtig behandelt werden sollen. Standard: {0}.",
    "Confirm that {0} is set to {1} in your Elasticsearch configuration (this is the default when TLS is enabled).":
      "Vergewissern Sie sich, dass {0} in Ihrer Elasticsearch-Konfiguration auf {1} gesetzt ist (dies ist der Standard, wenn TLS aktiviert ist).",
    "Connect Cortex to {0} for real-time intelligence from the Clear, Deep, and Dark Web - tailored to your assets.":
      "Verbinden Sie Cortex mit {0}, um Echtzeit-Informationen aus dem Clear, Deep und Dark Web zu erhalten - zugeschnitten auf Ihre Assets.",
    "Copy the Client ID and Client Secret into the {0} and {1} integration parameter fields.":
      "Kopieren Sie die Client ID und das Client Secret in die Integrationsparameterfelder {0} und {1}.",
    "Copy the generated {0} into the integration instance and save.":
      "Kopieren Sie den generierten {0} in die Integrationsinstanz und speichern Sie.",
    "Copy the key when it is shown — it is displayed only once. You paste it into the {0} field of this integration instance, where it is stored encrypted.":
      "Kopieren Sie den Schlüssel, wenn er angezeigt wird - er wird nur einmal angezeigt. Fügen Sie ihn in das Feld {0} dieser Integrationsinstanz ein, wo er verschlüsselt gespeichert wird.",
    "Create a Personal Access Token for the new account ({0})":
      "Erstellen Sie ein Personal Access Token für das neue Konto ({0})",
    "Create API credentials such as Client ID and Client Secret. For more information, see the {0}.":
      "Erstellen Sie API-Anmeldeinformationen wie Client ID und Client Secret. Weitere Informationen finden Sie unter {0}.",
    "Doppel Tenant URL that you can use for calling the {0}. e.g. ,{1}":
      "Doppel-Tenant-URL, die Sie für den Aufruf von {0} verwenden können. z. B.: {1}",
    "Duplicate the {0} mapper and/or the {1} mapper.":
      "Duplizieren Sie den Mapper {0} und/oder den Mapper {1}.",
    "Enter a {0}.":
      "Geben Sie {0} ein.",
    "Enter a descriptive name for the token and click {0}.":
      "Geben Sie einen aussagekräftigen Namen für das Token ein und klicken Sie auf {0}.",
    "Enter the desired name for the created app (e.g., “Cortex”), and click {0}.":
      "Geben Sie den gewünschten Namen für die erstellte App ein (z. B. „Cortex“) und klicken Sie auf {0}.",
    "Enter your {0} URL (e.g., {1}).":
      "Geben Sie die URL Ihrer {0} ein (z. B. {1}).",
    "Example: “CREATE PROCEDURE {0} @timestamp DATETIME AS SELECT * FROM TABLE_NAME WHERE timestamp >= @timestamp order by timestamp”":
      "Beispiel: “CREATE PROCEDURE {0} @timestamp DATETIME AS SELECT * FROM TABLE_NAME WHERE timestamp >= @timestamp order by timestamp”",
    "Example: “CREATE PROCEDURE {0}(IN ts DATETIME, IN l INT) BEGIN SELECT * FROM TABLE_NAME WHERE timestamp >= ts order by timestamp asc limit l; END”":
      "Beispiel: “CREATE PROCEDURE {0}(IN ts DATETIME, IN l INT) BEGIN SELECT * FROM TABLE_NAME WHERE timestamp >= ts order by timestamp asc limit l; END”",
    "Finally, you need to extract the CA certificate: {0}":
      "Zum Schluss müssen Sie das CA-Zertifikat extrahieren: {0}",
    "First, navigate to your {0}.":
      "Navigieren Sie zunächst zu Ihrem {0}.",
    "Follow the instructions in this {0} to create your own client_id, client_secret, tsg_id.":
      "Befolgen Sie die Anweisungen in diesem {0}, um Ihre eigenen client_id, client_secret und tsg_id zu erstellen.",
    "Follow these steps for {0} configuration:":
      "Führen Sie die folgenden Schritte für die Konfiguration von {0} aus:",
    "Follow this guide to generate access keys: {0}. For the URL argument, take a look here: {1} For a list of possible values for the {2} parameter, refer to the {3} column in this {4} article.":
      "Befolgen Sie diese Anleitung, um Zugriffsschlüssel zu generieren: {0}. Informationen zum Argument URL finden Sie hier: {1} Eine Liste möglicher Werte für den Parameter {2} finden Sie in der Spalte {3} (in diesem {4}-Artikel).",
    "For {0} {1} enter: {2}":
      "Geben Sie für {0} {1} Folgendes ein: {2}",
    "For information about Google’s API Key requirements and pricing, see {0}.":
      "Informationen zu den Anforderungen und Preisen für Google-API-Schlüssel finden Sie unter {0}.",
    "For more information about creating an JWT app click {0}.":
      "Weitere Informationen zum Erstellen einer JWT-App erhalten Sie, wenn Sie auf {0} klicken.",
    "For more information about registering a calling bot see the {0}.":
      "Weitere Informationen zum Registrieren eines Anrufbots finden Sie unter {0}.",
    "For more information about this integration, visit {0}.":
      "Weitere Informationen zu dieser Integration finden Sie unter {0}.",
    "For more information about Threatmon, visit: {0}":
      "Weitere Informationen zu Threatmon finden Sie unter: {0}",
    "For more information about Zendesk V2 integration, see the {0}":
      "Weitere Informationen zur Zendesk-V2-Integration finden Sie unter {0}",
    "For more information on getting your Slack access token, see the {0}":
      "Informationen zum Abrufen Ihres Slack-Zugriffstokens finden Sie unter {0}",
    "For more information on how to create the above credentials, see {0}.":
      "Weitere Informationen zum Erstellen der oben genannten Anmeldeinformationen finden Sie unter {0}.",
    "For more information, see the ‘{0}’ official documentation article.":
      "Weitere Informationen finden Sie im offiziellen Dokumentationsartikel ‚{0}‘.",
    "For more information, visit the {0}.":
      "Weitere Informationen finden Sie unter {0}.",
    "For on-premise WildFire appliances, use the appliance IP or hostname with the {0} path (e.g., {1}).":
      "Verwenden Sie bei lokalen WildFire-Appliances die IP-Adresse oder den Hostnamen der Appliance mit dem Pfad {0} (z. B. {1}).",
    "For testing completion of authorization process run the {0} command.":
      "Um den Abschluss des Autorisierungsprozesses zu testen, führen Sie den Befehl {0} aus.",
    "For the {0} field refer to the {1} on how to retrieve it":
      "Wie Sie das Feld {0} abrufen, finden Sie in {1}",
    "For the {0} parameter use your Sysdig SaaS url, refer to the {1} for a list of them based on the region.":
      "Verwenden Sie für den Parameter {0} die URL Ihres Sysdig SaaS; eine Liste der URLs nach Region finden Sie in {1}.",
    "For using OAuth 2.0 see the instructions above. The OTP code should be appended to the password parameter in the {0} command.":
      "Informationen zur Verwendung von OAuth 2.0 finden Sie in den obigen Anweisungen. Der OTP-Code muss im Befehl {0} an den Parameter password angehängt werden.",
    "From the left sidebar, navigate to {0}.":
      "Navigieren Sie in der linken Seitenleiste zu {0}.",
    "Generate a {0} in ZIdentity when creating the API client.":
      "Generieren Sie {0} in ZIdentity, wenn Sie den API-Client erstellen.",
    "Generate a key of type {0}.":
      "Generieren Sie einen Schlüssel vom Typ {0}.",
    "Go to the {0} -> {1}":
      "Navigieren Sie zu {0} -> {1}",
    "Go to the {0} and follow the procedure in the Creating a Service Account section. After you create a service account, a Service Account Private Key file is downloaded. You will need this file when configuring an instance of the integration.":
      "Rufen Sie {0} auf und befolgen Sie das Verfahren im Abschnitt Creating a Service Account. Nach dem Erstellen eines Dienstkontos wird eine Datei mit dem privaten Schlüssel des Dienstkontos heruntergeladen. Sie benötigen diese Datei beim Konfigurieren einer Instanz der Integration.",
    "Go to the {0} tab, and click {1} on the authorization with type of OAuth 2.0 (3LO).":
      "Wechseln Sie zur Registerkarte {0} und klicken Sie bei der Autorisierung vom Typ OAuth 2.0 (3LO) auf {1}.",
    "Go to the {0} tab.":
      "Wechseln Sie zur Registerkarte {0}.",
    "Go to your {0}.":
      "Rufen Sie Ihre {0} auf.",
    "Go to your Carbon Black console. This should be the URL in {0}.":
      "Rufen Sie Ihre Carbon-Black-Konsole auf. Dies sollte die URL in {0} sein.",
    "If enabled, the integration will automatically activate configuration changes after each write command. If disabled, use the {0} command manually.":
      "Wenn aktiviert, aktiviert die Integration Konfigurationsänderungen nach jedem Schreibbefehl automatisch. Wenn deaktiviert, verwenden Sie den Befehl {0} manuell.",
    "If the {0} and {1} fields are configured, the integration will automatically perform the initial login and renew the refresh token when it expires. Otherwise, you have to run the {2} command for the initial login and again each time the refresh token expires.":
      "Wenn die Felder {0} und {1} konfiguriert sind, führt die Integration die erste Anmeldung automatisch durch und erneuert das Aktualisierungstoken, wenn es abläuft. Andernfalls müssen Sie den Befehl {2} für die erste Anmeldung und danach jedes Mal ausführen, wenn das Aktualisierungstoken abläuft.",
    "If there is no API token displayed, click the {0} button to create a new one.":
      "Wird kein API-Token angezeigt, klicken Sie auf die Schaltfläche {0}, um ein neues zu erstellen.",
    "If you use {0} to separate your data, set the {1} parameter in the instance configuration. All {2} commands will then operate within that space by default. You can also override the space per-command using the {3} argument.":
      "Wenn Sie {0} verwenden, um Ihre Daten zu trennen, legen Sie den Parameter {1} in der Instanzkonfiguration fest. Alle {2}-Befehle werden dann standardmäßig in diesem Space ausgeführt. Sie können den Space außerdem pro Befehl mit dem Argument {3} überschreiben.",
    "Import Living off the land binaries from {0} into the Threat Intelligence Management(TIM) module for security investigations and threat hunting activities.":
      "Importieren Sie Living off the land binaries aus {0} in das Modul Threat Intelligence Management (TIM) für Sicherheitsuntersuchungen und Threat-Hunting-Aktivitäten.",
    "In addition, provide a pre-defined risk plan (for example, {0}).":
      "Geben Sie außerdem einen vordefinierten Risikoplan an (z. B. {0}).",
    "In both options below, the {0} is used.":
      "In beiden der folgenden Optionen wird {0} verwendet.",
    "In GitHub, click your {0} (upper-right), then {1}.":
      "Klicken Sie in GitHub auf Ihr {0} (oben rechts) und dann auf {1}.",
    "In order to connect to Microsoft Risky User using either {0} or the {1}:":
      "Um mithilfe von {0} oder {1} eine Verbindung zu Microsoft Risky User herzustellen:",
    "In order to use the following commands, you must use the {0}:":
      "Um die folgenden Befehle zu verwenden, müssen Sie {0} verwenden:",
    "In order to use this integration, you need to enter your Okta API token in the {0} integration instance parameter. For information on getting your Okta API token, see the {1}.":
      "Um diese Integration zu verwenden, müssen Sie Ihr Okta-API-Token im Integrationsinstanzparameter {0} eingeben. Informationen zum Abrufen Ihres Okta-API-Tokens finden Sie in {1}.",
    "In the {0} dialog box, click {1}. Make sure to copy the generated private key (in PEM format) to somewhere safe, and click {2}.":
      "Klicken Sie im Dialogfeld {0} auf {1}. Kopieren Sie den generierten privaten Schlüssel (im PEM-Format) unbedingt an einen sicheren Ort, und klicken Sie auf {2}.",
    "In the {0} drop-down menu, select a permission to apply for the credential tokens. Define the desired permissions. To use the API credential to grant read-only access on individual {1} resources, select either the User or Editor permission on {2}.":
      "Wählen Sie im Dropdown-Menü {0} eine Berechtigung aus, die auf die Anmeldeinformations-Token angewendet werden soll. Definieren Sie die gewünschten Berechtigungen. Um die API-Anmeldeinformationen zum Gewähren von schreibgeschütztem Zugriff auf einzelne {1}-Ressourcen zu verwenden, wählen Sie die Berechtigung User oder Editor für {2} aus.",
    "In the {0} field, enter the application (client) ID.":
      "Geben Sie im Feld {0} die Anwendungs-ID (Client-ID) ein.",
    "In the {0} field, enter the application redirect URI.":
      "Geben Sie im Feld {0} den Umleitungs-URI der Anwendung ein.",
    "In the {0} field, enter the client secret.":
      "Geben Sie im Feld {0} das Clientgeheimnis ein.",
    "In the {0} field, enter the directory (tenant) ID.":
      "Geben Sie im Feld {0} die Verzeichnis-ID (Tenant-ID) ein.",
    "In the {0} field, select the {1} option.":
      "Wählen Sie im Feld {0} die Option {1} aus.",
    "In the {0} field, type {1}.":
      "Geben Sie im Feld {0} {1} ein.",
    "In the {0} field, type your API token.":
      "Geben Sie im Feld {0} Ihr API-Token ein.",
    "In the Admin Console, go to {0} > {1}.":
      "Wechseln Sie in der Admin Console zu {0} > {1}.",
    "In the Admin Console, select {0} > {1} from the menu, and then select the {2} tab.":
      "Wählen Sie in der Admin Console im Menü {0} > {1} und anschließend die Registerkarte {2} aus.",
    "In the app configuration page, under the {0} tab and the {1} section, select {2} for the {3} option.":
      "Wählen Sie auf der Seite zur App-Konfiguration auf der Registerkarte {0} im Abschnitt {1} {2} für die Option {3} aus.",
    "In the console, go to {0} > {1} .":
      "Wechseln Sie in der Konsole zu {0} > {1}.",
    "In the dropdown list under “Role”, select {0}.":
      "Wählen Sie in der Dropdown-Liste unter „Role“ die Option {0} aus.",
    "In the instance configuration, under the {0} field select the {1} option.":
      "Wählen Sie in der Instanzkonfiguration im Feld {0} die Option {1} aus.",
    "In the integration settings pane in your tenant, check the {0} checkbox.":
      "Aktivieren Sie im Bereich mit den Integrationseinstellungen in Ihrem Tenant das Kontrollkästchen {0}.",
    "In the left sidebar, click {0}.":
      "Klicken Sie in der linken Seitenleiste auf {0}.",
    "In the management interface, create a role of type API. Select the APIs under {0} for the role and assign an administrator that role.":
      "Erstellen Sie in der Verwaltungsoberfläche eine Rolle vom Typ API. Wählen Sie für die Rolle die APIs unter {0} aus und weisen Sie einem Administrator diese Rolle zu.",
    "In this method, the {0} is used.":
      "Bei dieser Methode wird {0} verwendet.",
    "In XSOAR, create the custom indicator and incident field, for example, {0}.":
      "Erstellen Sie in XSOAR das benutzerdefinierte Indikator- und Incident-Feld, z. B. {0}.",
    "In your ServiceNow instance, navigate to {0} and ensure an MCP server is configured (or use the preconfigured {1}).":
      "Navigieren Sie in Ihrer ServiceNow-Instanz zu {0} und stellen Sie sicher, dass ein MCP-Server konfiguriert ist (oder verwenden Sie den vorkonfigurierten {1}).",
    "Incident.Read.All - Application - See section 4 in {0}":
      "Incident.Read.All - Application - Siehe Abschnitt 4 in {0}",
    "Incident.ReadWrite.All - Application - See section 4 in {0}":
      "Incident.ReadWrite.All - Application - Siehe Abschnitt 4 in {0}",
    "Insert a {0}.":
      "Fügen Sie {0} ein.",
    "Log in to the {0} with an account that has {1}.":
      "Melden Sie sich bei {0} mit einem Konto an, das über {1} verfügt.",
    "Log in to your {0} account.":
      "Melden Sie sich bei Ihrem {0}-Konto an.",
    "Log in to your ServiceNow instance and create an endpoint for Cortex to access your instance. (See {0} for more information).":
      "Melden Sie sich bei Ihrer ServiceNow-Instanz an und erstellen Sie einen Endpunkt, über den Cortex auf Ihre Instanz zugreifen kann. (Weitere Informationen finden Sie unter {0}.)",
    "Make a note of the {0} and {1}. These will be used to configure the integration.":
      "Notieren Sie sich {0} und {1}. Diese werden zum Konfigurieren der Integration verwendet.",
    "Make sure you have your SecneurX API-Key. You can obtain the API-Key by sending an email to {0}.":
      "Stellen Sie sicher, dass Sie Ihren SecneurX-API-Schlüssel haben. Sie erhalten ihn, indem Sie eine E-Mail an {0} senden.",
    "McAfee ePO has a highly flexible and powerful permissions system. The permissions required for the user that uses this integration depend on which operations they need to perform. The API user should have the same permissions a regular user would have in order to access the data via the UI. It is possible to view the exact permissions needed for a specific command by running the {0} command. The {1} command’s output will include help information for the specific command including required permissions. More info about McAfee ePO’s permissions model is available {2}.":
      "McAfee ePO verfügt über ein äußerst flexibles und leistungsstarkes Berechtigungssystem. Die für den Benutzer dieser Integration erforderlichen Berechtigungen hängen davon ab, welche Vorgänge er ausführen muss. Der API-Benutzer sollte dieselben Berechtigungen haben wie ein regulärer Benutzer, um über die Benutzeroberfläche auf die Daten zuzugreifen. Die genau erforderlichen Berechtigungen für einen bestimmten Befehl können Sie anzeigen, indem Sie den Befehl {0} ausführen. Die Ausgabe des Befehls {1} enthält Hilfeinformationen zum jeweiligen Befehl, einschließlich der erforderlichen Berechtigungen. Weitere Informationen zum Berechtigungsmodell von McAfee ePO finden Sie {2}.",
    "Microsoft 365 Germany Endpoint: {0}":
      "Microsoft 365 Germany-Endpunkt: {0}",
    "Microsoft integrations (Graph and Azure) in Cortex use Entra ID applications to authenticate with Microsoft APIs. These integrations use OAuth 2.0 and OpenID Connect standard-compliant authentication services, which use an Application to sign-in or delegate authentication. For more information, see the {0}.":
      "Microsoft-Integrationen (Graph und Azure) in Cortex verwenden Entra-ID-Anwendungen, um sich bei Microsoft-APIs zu authentifizieren. Diese Integrationen nutzen standardkonforme Authentifizierungsdienste nach OAuth 2.0 und OpenID Connect, die eine Anwendung für die Anmeldung oder die Delegierung der Authentifizierung verwenden. Weitere Informationen finden Sie unter {0}.",
    "Microsoft Operated by 21Vianet Endpoint: {0}":
      "Microsoft Operated by 21Vianet-Endpunkt: {0}",
    "More information can be found on {0}.":
      "Weitere Informationen finden Sie unter {0}.",
    "Name your token and click {0}.":
      "Benennen Sie Ihr Token und klicken Sie auf {0}.",
    "Navigate to the {0} or {1} section (refer to your Magnet Automate version documentation for the exact location).":
      "Navigieren Sie zum Abschnitt {0} oder {1} (den genauen Speicherort finden Sie in der Dokumentation zu Ihrer Magnet-Automate-Version).",
    "Navigate to your {0}.":
      "Navigieren Sie zu Ihrem {0}.",
    "Next to the {0} label, make sure the {1} option is selected, and that the {2} option is not selected.":
      "Stellen Sie neben der Bezeichnung {0} sicher, dass die Option {1} ausgewählt und die Option {2} nicht ausgewählt ist.",
    "Next to the {0} label, uncheck the {1} option if it’s selected.":
      "Deaktivieren Sie neben der Bezeichnung {0} die Option {1}, falls sie ausgewählt ist.",
    "Next, log in to your {0} account.":
      "Melden Sie sich anschließend bei Ihrem {0}-Konto an.",
    "Note your {0} (e.g., {1} if your login URL is {2}).":
      "Notieren Sie sich Ihre {0} (z. B. {1}, wenn Ihre Anmelde-URL {2} lautet).",
    "Note: If you’re uncertain which API version to use, it is recommended to use the latest API version listed in the {0} column in the line corresponding to your QRadar version.":
      "Hinweis: Wenn Sie nicht sicher sind, welche API-Version Sie verwenden sollen, wird empfohlen, die neueste API-Version zu verwenden, die in der Spalte {0} in der Zeile Ihrer QRadar-Version aufgeführt ist.",
    "Note: SaaS Security API currently allows you to mirror out only closed incidents, and only their {0} and {1} fields.":
      "Hinweis: SaaS Security API ermöglicht derzeit nur das ausgehende Spiegeln geschlossener Incidents, und zwar nur deren Felder {0} und {1}.",
    "Notice: Submitting indicators using the {0} command of this integration might make the indicator data publicly available. See the vendor’s documentation for more details":
      "Hinweis: Das Senden von Indikatoren mit dem Befehl {0} dieser Integration kann dazu führen, dass die Indikatordaten öffentlich verfügbar sind. Weitere Informationen finden Sie in der Dokumentation des Anbieters",
    "On large tenants a full Spotlight collection can take many hours - longer than the maximum execution time allowed for a single assets fetch. In such cases, the fetch is terminated before it completes. Enable the {0} parameter (under the {1} section, {2}) to run the Spotlight fetch in a long-running container instead, which is not bound by that execution time limit and lets a cycle run to completion. A new cycle starts every 24 hours, or immediately after the previous one ends if it ran longer.":
      "Bei großen Tenants kann eine vollständige Spotlight-Erfassung viele Stunden dauern – länger als die maximal zulässige Ausführungszeit für einen einzelnen Asset-Abruf. In diesem Fall wird der Abruf vor Abschluss beendet. Aktivieren Sie den Parameter {0} (im Abschnitt {1}, {2}), um den Spotlight-Abruf stattdessen in einem langlaufenden Container auszuführen, der nicht an dieses Ausführungszeitlimit gebunden ist und einen Zyklus bis zum Ende laufen lässt. Ein neuer Zyklus startet alle 24 Stunden oder sofort nach dem Ende des vorherigen, falls dieser länger gedauert hat.",
    "On premise administrators: Edit the {0} file and set the following key to true: com.proofpoint.admin.apigui.enable=t":
      "On-Premise-Administratoren: Bearbeiten Sie die Datei {0} und setzen Sie den folgenden Schlüssel auf true: com.proofpoint.admin.apigui.enable=t",
    "On the opened page, click {0}.":
      "Klicken Sie auf der geöffneten Seite auf {0}.",
    "Open the {0}.":
      "Öffnen Sie {0}.",
    "Open the main menu and go to {0} > {1}.":
      "Öffnen Sie das Hauptmenü und wechseln Sie zu {0} > {1}.",
    "Open your Google Admin console (at {0}).":
      "Öffnen Sie Ihre Google Admin-Konsole (unter {0}).",
    "Optional: To revoke all currently valid API keys, follow this {0}":
      "Optional: Um alle derzeit gültigen API-Schlüssel zu widerrufen, folgen Sie diesem {0}",
    "Optionally set the {0} (must match your deployment profile region) and {1}":
      "Legen Sie optional {0} (muss mit der Region Ihres Bereitstellungsprofils übereinstimmen) und {1} fest",
    "Please note the default timeout for queries is 30 seconds. To increase the timeout set the following parameter in the {0} field: {1} (notice the space in the name of the parameter) with the desired timeout in seconds. For example to set a timeout of 120 seconds use: {2}.":
      "Beachten Sie, dass das Standard-Timeout für Abfragen 30 Sekunden beträgt. Um das Timeout zu erhöhen, legen Sie im Feld {0} den folgenden Parameter fest: {1} (beachten Sie das Leerzeichen im Namen des Parameters) mit dem gewünschten Timeout in Sekunden. Um beispielsweise ein Timeout von 120 Sekunden festzulegen, verwenden Sie: {2}.",
    "Preconfigured template attachments can be supported by using {0}":
      "Vorkonfigurierte Vorlagenanhänge können durch Verwendung von {0} unterstützt werden",
    "Provide your {0} (TSG ID)":
      "Geben Sie Ihre {0} (TSG ID) an",
    "Providing additional filters should be done in the following format: {0}. For example: {1}.":
      "Zusätzliche Filter müssen im folgenden Format angegeben werden: {0}. Beispiel: {1}.",
    "Rasterize Mode: It is possible to rasterize either via Chrome WebDriver or Chrome Headless CLI. WebDriver supports more options than Headless CLI. Such as support for the {0} option in the {1} command. There are some urls that do not rasterize well with WebDriver and may succeed with Headless CLI. Thus, it is recommended to use the {2} mode, which will use WebDriver as a start and fallback to Headless CLI if it fails.":
      "Rasterisierungsmodus: Die Rasterisierung ist entweder über Chrome WebDriver oder Chrome Headless CLI möglich. WebDriver unterstützt mehr Optionen als Headless CLI, z. B. die Unterstützung der Option {0} im Befehl {1}. Einige URLs lassen sich mit WebDriver nicht gut rasterisieren, funktionieren aber möglicherweise mit Headless CLI. Daher wird empfohlen, den Modus {2} zu verwenden, der zunächst WebDriver verwendet und bei einem Fehler auf Headless CLI zurückgreift.",
    "Review the requested permissions on GitLab, and click {0}.":
      "Prüfen Sie die in GitLab angeforderten Berechtigungen und klicken Sie auf {0}.",
    "Save the integration and note the {0} and {1}.":
      "Speichern Sie die Integration und notieren Sie sich {0} und {1}.",
    "See {0} for more information.":
      "Weitere Informationen finden Sie unter {0}.",
    "See {0} regarding this requirement.":
      "Informationen zu dieser Anforderung finden Sie in {0}.",
    "Select a {0}.":
      "Wählen Sie {0} aus.",
    "Select an {0} for the token.":
      "Wählen Sie {0} für das Token aus.",
    "Select an {0}, then fill in only that version’s fields. Fields labeled with the other version are ignored.":
      "Wählen Sie {0} aus und füllen Sie dann nur die Felder dieser Version aus. Felder, die mit der anderen Version gekennzeichnet sind, werden ignoriert.",
    "Select your User Assigned Managed Identity -> copy the Client ID -> put it in the {0} filed in the instance configuration.":
      "Wählen Sie Ihre User Assigned Managed Identity -> kopieren Sie die Client ID -> fügen Sie sie im Feld {0} in der Instanzkonfiguration ein.",
    "Sends a POST request to {0} with {1}, {2}, and {3}.":
      "Sendet eine POST-Anfrage an {0} mit {1}, {2} und {3}.",
    "Set up ZIdentity, link your service tenants, and create API Clients with the right roles and resources — {0}.":
      "Richten Sie ZIdentity ein, verknüpfen Sie Ihre Service-Tenants und erstellen Sie API-Clients mit den richtigen Rollen und Ressourcen — {0}.",
    "Sign in to your Darkmon tenant, go to {0}, and create a key with the scopes your XSOAR instance needs. Paste it into the {1} field below.":
      "Melden Sie sich bei Ihrem Darkmon-Tenant an, wechseln Sie zu {0} und erstellen Sie einen Schlüssel mit den Bereichen, die Ihre XSOAR-Instanz benötigt. Fügen Sie ihn unten in das Feld {1} ein.",
    "Sign in to your Okta organization as a user {0}.":
      "Melden Sie sich als Benutzer {0} bei Ihrer Okta-Organisation an.",
    "The {0} advanced parameter is available for cases where the automatic agent detection fails (e.g., API requests return errors or the {1} button fails due to an incorrect agent header). By default, the integration auto-detects the correct agent based on the platform. Only change this setting if instructed to do so by support or if auto-detection is not working correctly.":
      "Der erweiterte Parameter {0} ist für Fälle verfügbar, in denen die automatische Agent-Erkennung fehlschlägt (z. B. wenn API-Anfragen Fehler zurückgeben oder die Schaltfläche {1} aufgrund eines falschen Agent-Headers fehlschlägt). Standardmäßig erkennt die Integration den richtigen Agent automatisch anhand der Plattform. Ändern Sie diese Einstellung nur, wenn der Support Sie dazu auffordert oder wenn die automatische Erkennung nicht korrekt funktioniert.",
    "The {0} and {1} commands are only supported when using the {2} with {3} permission type.":
      "Die Befehle {0} und {1} werden nur unterstützt, wenn {2} mit dem Berechtigungstyp {3} verwendet wird.",
    "The {0} and the {1} integration parameters should be left blank.":
      "Die Integrationsparameter {0} und {1} sollten leer bleiben.",
    "The {0} command requires some JSON format arguments. Please make sure the inputed JSONs have uniqe characters (such as {1}) escaped before entering them (e.g. {2}).":
      "Der Befehl {0} erfordert einige Argumente im JSON-Format. Stellen Sie sicher, dass in den eingegebenen JSON-Daten Sonderzeichen (wie {1}) maskiert sind, bevor Sie sie eingeben (z. B. {2}).",
    "The {0} corresponds to the {1} in the integration credentials field.":
      "{0} entspricht {1} im Anmeldeinformationsfeld der Integration.",
    "The {0} integration parameter should be set according to the requested OAuth2 permissions types to grant access to in Microsoft identity platform, for more details see the {1}.":
      "Der Integrationsparameter {0} sollte entsprechend den angeforderten OAuth2-Berechtigungstypen festgelegt werden, für die in Microsoft identity platform Zugriff gewährt werden soll. Weitere Informationen finden Sie unter {1}.",
    "The {0} integration parameter should be set to {1} (the Cortex Azure app ID).":
      "Der Integrationsparameter {0} sollte auf {1} (die Cortex-Azure-App-ID) festgelegt werden.",
    "The {0} parameter is required by both.":
      "Der Parameter {0} wird von beiden benötigt.",
    "The {0} parameter specifies if a new user should be created when the User Profile passed was not found in the 3rd-party integration.":
      "Der Parameter {0} gibt an, ob ein neuer Benutzer erstellt werden soll, wenn das übergebene Benutzerprofil in der Drittanbieter-Integration nicht gefunden wurde.",
    "The API connection requires the {0} and {1} parameters as well as a {2} or {3}.":
      "Die API-Verbindung erfordert die Parameter {0} und {1} sowie {2} oder {3}.",
    "The default language used for OCR is English. To configure additional languages, in the {0} parameter specify a CSV list of language codes. For example, to set the integration for English and French, set this value: {1}. To see all supported language codes,run the following command:":
      "Die für OCR verwendete Standardsprache ist Englisch. Um zusätzliche Sprachen zu konfigurieren, geben Sie im Parameter {0} eine CSV-Liste mit Sprachcodes an. Um die Integration beispielsweise für Englisch und Französisch einzurichten, legen Sie diesen Wert fest: {1}. Führen Sie den folgenden Befehl aus, um alle unterstützten Sprachcodes anzuzeigen:",
    "The integration uses the OAuth 2.0 {0} grant type:":
      "Die Integration verwendet den OAuth 2.0-Grant-Typ {0}:",
    "The legacy content search solution is {0}. Content searches are now performed within the context of an eDiscovery case.":
      "Die Legacy-Lösung für die Inhaltssuche ist {0}. Inhaltssuchen werden jetzt im Kontext eines eDiscovery-Falls durchgeführt.",
    "The pack ships pointing at the production endpoint. To target your dev or staging environment, set {0} to your dev URL on this instance only.":
      "Das Paket verweist standardmäßig auf den Produktionsendpunkt. Um Ihre Entwicklungs- oder Staging-Umgebung anzusprechen, setzen Sie {0} nur in dieser Instanz auf Ihre Entwicklungs-URL.",
    "The Server URL assigned to your organization. For example, {0}.":
      "Die Ihrer Organisation zugewiesene Server-URL. Beispiel: {0}.",
    "The SSH connection requires the {0}, {1} and {2} are provided.":
      "Für die SSH-Verbindung müssen {0}, {1} und {2} angegeben werden.",
    "The vsys is located in the Firewall URL; e.g, {0}":
      "Das vsys befindet sich in der Firewall-URL, z. B. {0}",
    "There are 3 different authentication {0}":
      "Es gibt 3 verschiedene {0} zur Authentifizierung",
    "There are 3 different authentication {0}.":
      "Es gibt 3 verschiedene {0} zur Authentifizierung.",
    "There are two different authentication methods for {0}:":
      "Für {0} gibt es zwei verschiedene Authentifizierungsmethoden:",
    "This API enables you to use the Google Admin API. In order to enable the API, you need to create an account service private key JSON file and copy its content as the value for the {0} parameter field.":
      "Mit dieser API können Sie die Google Admin API verwenden. Um die API zu aktivieren, müssen Sie eine JSON-Datei mit dem privaten Schlüssel des Dienstkontos erstellen und deren Inhalt als Wert in das Parameterfeld {0} kopieren.",
    "This integration connects to the Zscaler Internet Access (ZIA) API using {0} authentication via ZIdentity, replacing the legacy session-based authentication.":
      "Diese Integration stellt über ZIdentity mithilfe der {0}-Authentifizierung eine Verbindung zur Zscaler Internet Access (ZIA) API her und ersetzt die bisherige sitzungsbasierte Authentifizierung.",
    "This integration is deprecated. Use the Microsoft Graph Security integration for supported replacement functionality. For a list of command replacements, see the {0}.":
      "Diese Integration ist veraltet. Verwenden Sie die Integration Microsoft Graph Security für die unterstützte Ersatzfunktionalität. Eine Liste der Befehlsersetzungen finden Sie in {0}.",
    "This integration uses the {0} mechanism to periodically collect assets and vulnerabilities from Rapid7 InsightVM.":
      "Diese Integration verwendet den Mechanismus {0}, um regelmäßig Assets und Schwachstellen von Rapid7 InsightVM zu erfassen.",
    "This is a long-running integration. For more information about long-running integrations, check out the {0} article.":
      "Dies ist eine Integration mit langer Laufzeit. Weitere Informationen zu Integrationen mit langer Laufzeit finden Sie im Artikel {0}.",
    "To access the {0} by instance name, set up the {1} and {2} values in the {3} page ({4} > {5} > {6} > {7}).":
      "Um über den Instanznamen auf {0} zuzugreifen, legen Sie die Werte {1} und {2} auf der Seite {3} ({4} > {5} > {6} > {7}) fest.",
    "To add mirroring in both environments, in the Incident Mirroring Direction field, select {0}. Outgoing mirroring is recommended for Cortex version 6.2 and above. If you enable mirroring, you need to add the timezone of the Splunk server (in minutes). For example, if using GMT and the timezone is GMT {1}180. For UTC, set the timezone to 0. Set this only if the Splunk server is different than the Cortex server. This is relevant only for fetching notable events.":
      "Um die Spiegelung in beiden Umgebungen hinzuzufügen, wählen Sie im Feld Spiegelungsrichtung von Incidents {0} aus. Die ausgehende Spiegelung wird für Cortex ab Version 6.2 empfohlen. Wenn Sie die Spiegelung aktivieren, müssen Sie die Zeitzone des Splunk-Servers (in Minuten) hinzufügen. Wenn Sie beispielsweise GMT verwenden und die Zeitzone GMT {1}180 ist. Für UTC legen Sie die Zeitzone auf 0 fest. Legen Sie dies nur fest, wenn sich der Splunk-Server vom Cortex-Server unterscheidet. Dies ist nur für das Abrufen von Notable-Ereignissen relevant.",
    "To allow access to Microsoft Defender Advanced Threat Protection, an admin has to approve our app using an admin consent flow, by clicking on the following {0}. After authorizing the Cortex app, you will get an {1}, {2}, and {3}, which you then need to insert in the integration instance settings corresponding fields.":
      "Um den Zugriff auf Microsoft Defender Advanced Threat Protection zu erlauben, muss ein Administrator unsere App über einen Admin-Zustimmungsfluss genehmigen, indem er auf den folgenden {0} klickt. Nach der Autorisierung der Cortex-App erhalten Sie die folgenden Werte: {1}, {2} und {3}, die Sie anschließend in die entsprechenden Felder der Integrationsinstanz-Einstellungen eintragen müssen.",
    "To configure this integration, you need an {0} and a {1} from the iZOOlogic platform.":
      "Zum Konfigurieren dieser Integration benötigen Sie {0} und {1} von der iZOOlogic-Plattform.",
    "To connect the McAfee TIE using the DXL TIE client, you need to create certificates and configure DXL. For more information, see the {0}. After you complete this configuration, you will have the following files.":
      "Um McAfee TIE mit dem DXL-TIE-Client zu verbinden, müssen Sie Zertifikate erstellen und DXL konfigurieren. Weitere Informationen finden Sie unter {0}. Nach Abschluss dieser Konfiguration verfügen Sie über die folgenden Dateien.",
    "To create, modify, and delete Safe Links policies, you need to be a member of the {0} or {1} role groups.":
      "Um Safe-Links-Richtlinien zu erstellen, zu ändern und zu löschen, müssen Sie Mitglied der Rollengruppen {0} oder {1} sein.",
    "To enable the Shodan integration you need to have an API key, which you can get for free by creating a Shodan account {0} Once you have an API key you insert it into the {1} field and click the {2} button.":
      "Um die Shodan-Integration zu aktivieren, benötigen Sie einen API-Schlüssel, den Sie kostenlos erhalten, indem Sie ein Shodan-Konto erstellen ({0}). Sobald Sie einen API-Schlüssel haben, tragen Sie ihn in das Feld {1} ein und klicken Sie auf die Schaltfläche {2}.",
    "To execute the command either provide the value of the Admin email in the integration configuration or provide the value of the {0} argument for the command or provide the admin role to the created service account’s email by performing the following steps:":
      "Um den Befehl auszuführen, geben Sie entweder den Wert der Admin-E-Mail in der Integrationskonfiguration an, geben Sie den Wert des Arguments {0} für den Befehl an oder weisen Sie der E-Mail-Adresse des erstellten Dienstkontos die Administratorrolle zu, indem Sie die folgenden Schritte ausführen:",
    "To generate an API key, login to Netcraft and go to the {0}":
      "Um einen API-Schlüssel zu generieren, melden Sie sich bei Netcraft an und rufen Sie {0} auf",
    "To generate tokens, browse to {0} and follow the instructions":
      "Um Token zu generieren, rufen Sie {0} auf und folgen Sie den Anweisungen",
    "To get an API client ID and secret, contact {0}.":
      "Um eine API-Client-ID und ein Secret zu erhalten, wenden Sie sich an {0}.",
    "To get the {0}, {1}, {2} and {3} parameters, in the Azure Portal, go to {4} and click the {5} tab.":
      "Um die Parameter {0}, {1}, {2} und {3} abzurufen, rufen Sie im Azure-Portal {4} auf und klicken Sie auf die Registerkarte {5}.",
    "To get your API key, here is a {0} to Tavily UI.":
      "Um Ihren API-Schlüssel zu erhalten, finden Sie hier einen {0} zur Tavily-Benutzeroberfläche.",
    "To manage permissions in the Microsoft Defender XDR portal, go to {0} or https://security.microsoft.com/securitypermissions. You need to be a global administrator or a member of the Organization Management role group in the Microsoft Defender XDR portal. Specifically, the Role Management role allows users to view, create, and modify role groups in the Microsoft Defender XDR portal, and by default, that role is assigned only to the Organization Management role group.":
      "Um Berechtigungen im Microsoft Defender XDR-Portal zu verwalten, rufen Sie {0} oder https://security.microsoft.com/securitypermissions auf. Sie müssen globaler Administrator oder Mitglied der Rollengruppe Organization Management im Microsoft Defender XDR-Portal sein. Insbesondere ermöglicht die Rolle Role Management Benutzern, Rollengruppen im Microsoft Defender XDR-Portal anzuzeigen, zu erstellen und zu ändern. Standardmäßig ist diese Rolle nur der Rollengruppe Organization Management zugewiesen.",
    "To mirror offenses with events, enable the {0} parameter and set {1} to {2}.":
      "Um Offenses mit Ereignissen zu spiegeln, aktivieren Sie den Parameter {0} und setzen Sie {1} auf {2}.",
    "To obtain an API Key, run the following REST command and copy the key: {0}":
      "Um einen API-Schlüssel zu erhalten, führen Sie den folgenden REST-Befehl aus und kopieren Sie den Schlüssel: {0}",
    "To reset fetch incidents, run {0} - this will reset the fetch to its initial state (will try to fetch first available offense).":
      "Um das Abrufen von Incidents zurückzusetzen, führen Sie {0} aus – dadurch wird der Abruf auf seinen Anfangszustand zurückgesetzt (es wird versucht, die erste verfügbare Offense abzurufen).",
    "To reset fetch incidents, run the {0} command - This will reset the fetch to its initial state. (Will try to fetch the first available offense).":
      "Um das Abrufen von Incidents zurückzusetzen, führen Sie den Befehl {0} aus – dadurch wird der Abruf auf seinen Anfangszustand zurückgesetzt. (Es wird versucht, die erste verfügbare Offense abzurufen).",
    "To retrieve the Egress API key from Panorama - Click “Generate API Key” under {0}":
      "Um den Egress-API-Schlüssel aus Panorama abzurufen, klicken Sie unter {0} auf „Generate API Key“",
    "To start fetching incidents, enable the parameter {0} - this will start a long running process that’ll fetch incidents periodically. Depending on the system load, {1}.":
      "Um mit dem Abrufen von Incidents zu beginnen, aktivieren Sie den Parameter {0} – dadurch wird ein langlaufender Prozess gestartet, der Incidents regelmäßig abruft. Je nach Systemlast gilt: {1}.",
    "To use {0}:":
      "So verwenden Sie {0}:",
    "To use a {0} , you need to add a {1}.":
      "Um {0} zu verwenden, müssen Sie {1} hinzufügen.",
    "To use a self-configured Azure application, you need to add a new Azure App Registration in the Azure Portal. For more details, follow {0}.":
      "Um eine selbst konfigurierte Azure-Anwendung zu verwenden, müssen Sie im Azure-Portal eine neue Azure App Registration hinzufügen. Weitere Details finden Sie, wenn Sie {0} folgen.",
    "To use a self-configured Azure application, you need to add a new Azure App Registration in the Azure Portal. To add an app registration, refer to steps 1-6 under the {0} section of the integration documentation {1}.":
      "Um eine selbst konfigurierte Azure-Anwendung zu verwenden, müssen Sie im Azure-Portal eine neue Azure App Registration hinzufügen. Informationen zum Hinzufügen einer App-Registrierung finden Sie in den Schritten 1–6 im Abschnitt {0} der Integrationsdokumentation {1}.",
    "To use ServiceNow in XSOAR, ensure your user account has the {0}, {1} roles or any other role required to permit working with the {2} table. These roles are required in order to make API calls. However, they may not suffice for viewing records in some tables.":
      "Um ServiceNow in XSOAR zu verwenden, stellen Sie sicher, dass Ihr Benutzerkonto über die Rollen {0}, {1} oder jede andere Rolle verfügt, die für die Arbeit mit der Tabelle {2} erforderlich ist. Diese Rollen sind erforderlich, um API-Aufrufe auszuführen. Sie reichen jedoch möglicherweise nicht aus, um Datensätze in einigen Tabellen anzuzeigen.",
    "To use the {0} command, ensure the {1} has one of the following roles assigned:":
      "Um den Befehl {0} zu verwenden, stellen Sie sicher, dass {1} eine der folgenden Rollen zugewiesen ist:",
    "To use the {0} command, you need to authorize the client (Cortex) to run the command. Follow the {1} to do so. In step 4, instead of selecting {2}, select {3}.":
      "Um den Befehl {0} zu verwenden, müssen Sie den Client (Cortex) zur Ausführung des Befehls autorisieren. Folgen Sie dazu {1}. Wählen Sie in Schritt 4 anstelle von {2} die Option {3} aus.",
    "To use the {0} command, you need to authorize the client (Demisto) to run the command. Follow the instructions in the {1}. In step #4, instead of selecting {2}, select {3}.":
      "Um den Befehl {0} zu verwenden, müssen Sie den Client (Demisto) zur Ausführung des Befehls autorisieren. Folgen Sie den Anweisungen in {1}. Wählen Sie in Schritt 4 anstelle von {2} die Option {3} aus.",
    "To use the full capabilities of this integration, make sure your user has the following permissions: {0}, {1}, {2}.":
      "Um den vollen Funktionsumfang dieser Integration zu nutzen, stellen Sie sicher, dass Ihr Benutzer über die folgenden Berechtigungen verfügt: {0}, {1}, {2}.",
    "To use the integration commands, ensure the {0} has one of the following roles assigned:":
      "Um die Integrationsbefehle zu verwenden, stellen Sie sicher, dass {0} eine der folgenden Rollen zugewiesen ist:",
    "To use the integration with an API token, you first need to change the {0} field to {1}. Following this step, you can now enter the API Token into the {2} field - this value will be used as an API key.":
      "Um die Integration mit einem API-Token zu verwenden, müssen Sie zunächst das Feld {0} in {1} ändern. Anschließend können Sie das API-Token in das Feld {2} eingeben – dieser Wert wird als API-Schlüssel verwendet.",
    "To view and run Office 365 unified audit log searches, admins or users must be assigned the {0} or {1} role in {2}.":
      "Um die einheitlichen Überwachungsprotokollsuchen von Office 365 anzuzeigen und auszuführen, muss Administratoren oder Benutzern die Rolle {0} oder {1} in {2} zugewiesen sein.",
    "To view logs concerning the creation of the indicator list and its current status add the {0} suffix to the list URL.":
      "Um Protokolle zur Erstellung der Indikatorliste und zu deren aktuellem Status anzuzeigen, fügen Sie der Listen-URL das Suffix {0} hinzu.",
    "Under {0}, click {1}.":
      "Klicken Sie unter {0} auf {1}.",
    "Under {0}, select the necessary permissions. Choose minimal permissions.":
      "Wählen Sie unter {0} die erforderlichen Berechtigungen aus. Wählen Sie minimale Berechtigungen.",
    "Under {0}, select which repositories the token can access. Choose minimal access.":
      "Wählen Sie unter {0} aus, auf welche Repositorys das Token zugreifen kann. Wählen Sie minimalen Zugriff.",
    "Under the {0} tab, grant the required scopes mentioned above for the app.":
      "Erteilen Sie auf der Registerkarte {0} der App die oben genannten erforderlichen Bereiche.",
    "Under the newly added {0} section, click {1}.":
      "Klicken Sie im neu hinzugefügten Abschnitt {0} auf {1}.",
    "US Government Department of Defence (DoD) Endpoint: {0}":
      "Endpunkt des US-Verteidigungsministeriums (DoD): {0}",
    "US Government GCC-High Endpoint: {0}":
      "GCC-High-Endpunkt der US-Regierung: {0}",
    "Use {0} to check acceptance, {1} to review it, and {2} to accept.":
      "Verwenden Sie {0}, um die Zustimmung zu prüfen, {1}, um sie zu überprüfen, und {2}, um sie zu akzeptieren.",
    "Use Cortex’s credentials store with a {0} and {1} as the {2} and {3} in case you are using Enterprise DLP through a SASE platform.":
      "Wenn Sie Enterprise DLP über eine SASE-Plattform verwenden, nutzen Sie den Anmeldeinformationsspeicher von Cortex mit {0} und {1} als {2} und {3}.",
    "Use the {0} integration to enrich indicators with threat intelligence context from Palo Alto Networks Unit 42’s research team.":
      "Verwenden Sie die Integration {0}, um Indikatoren mit Threat-Intelligence-Kontext vom Unit-42-Forschungsteam von Palo Alto Networks anzureichern.",
    "Use the {0} integration to fetch indicators and threat objects from Palo Alto Networks Unit 42’s comprehensive threat feed. This integration provides continuous access to high-quality indicators of compromise (IOCs) and contextual threat intelligence.":
      "Verwenden Sie die Integration {0}, um Indikatoren und Bedrohungsobjekte aus dem umfassenden Threat-Feed von Unit 42 von Palo Alto Networks abzurufen. Diese Integration bietet kontinuierlichen Zugriff auf hochwertige Indikatoren für Kompromittierung (IOCs) und kontextbezogene Threat Intelligence.",
    "Use the {0} parameter to control what this integration ingests. You can select {1}, {2}, or both:":
      "Verwenden Sie den Parameter {0}, um zu steuern, was diese Integration erfasst. Sie können {1}, {2} oder beides auswählen:",
    "Use the {0} parameter to filter cases by the required severity and the {1} parameter to filter cases by the required status.":
      "Verwenden Sie den Parameter {0}, um Fälle nach dem erforderlichen Schweregrad zu filtern, und den Parameter {1}, um Fälle nach dem erforderlichen Status zu filtern.",
    "Use the {0} to link Microsoft Defender XDR with Cortex.":
      "Verwenden Sie {0}, um Microsoft Defender XDR mit Cortex zu verknüpfen.",
    "Use the {0} to link Microsoft Graph Services with Cortex.":
      "Verwenden Sie {0}, um Microsoft Graph Services mit Cortex zu verknüpfen.",
    "Use the appropriate server URL in the {0} parameter based on your region or cloud environment:":
      "Verwenden Sie je nach Region oder Cloud-Umgebung die passende Server-URL im Parameter {0}:",
    "Use this {0} to log in to the Joe Security platform.":
      "Verwenden Sie diesen {0}, um sich bei der Joe-Security-Plattform anzumelden.",
    "Using a national cloud endpoint is supported by setting the {0} parameter to one of the following options:":
      "Die Verwendung eines nationalen Cloud-Endpunkts wird unterstützt, indem der Parameter {0} auf eine der folgenden Optionen festgelegt wird:",
    "Visit {0} for a list of all possible fields to be used in the filter.":
      "Eine Liste aller im Filter verwendbaren Felder finden Sie unter {0}.",
    "Visit {0} for explanation about filter syntax.":
      "Eine Erläuterung der Filtersyntax finden Sie unter {0}.",
    "Visit the {0} for a full list of available API versions according to the QRadar version.":
      "Eine vollständige Liste der verfügbaren API-Versionen je nach QRadar-Version finden Sie unter {0}.",
    "When encountering connectivity or authorization errors, it is necessary to include the IP addresses corresponding to the relevant region in the CrowdStrike Falcon allow list. These IP addresses can be found in the {0} by searching for {1}.":
      "Bei Verbindungs- oder Autorisierungsfehlern müssen die IP-Adressen der betreffenden Region in die Zulassungsliste von CrowdStrike Falcon aufgenommen werden. Diese IP-Adressen finden Sie in {0}, indem Sie nach {1} suchen.",
    "When encountering HTTP 429 response error code from CrowdStrike Falcon, use an engine as explained in this {0}.":
      "Wenn Sie von CrowdStrike Falcon den HTTP-Antwortfehlercode 429 erhalten, verwenden Sie eine Engine wie in diesem {0} beschrieben.",
    "When mirroring offenses with events it is advised to set the {0} to a small value.":
      "Beim Spiegeln von Offenses mit Ereignissen wird empfohlen, {0} auf einen kleinen Wert zu setzen.",
    "When switching from the {0} to the {1} do as follow: Save the instance, run the {2} command and follow the instructions mentioned there. Once done, test the validity of your instance by running the {3} command. When switching from the {4} to the {5}, test the validity of the instance by clicking the ‘Test’ button.":
      "Gehen Sie beim Wechsel von {0} zu {1} wie folgt vor: Speichern Sie die Instanz, führen Sie den Befehl {2} aus und befolgen Sie die dort genannten Anweisungen. Testen Sie anschließend die Gültigkeit Ihrer Instanz, indem Sie den Befehl {3} ausführen. Klicken Sie beim Wechsel von {4} zu {5} zum Testen der Gültigkeit der Instanz auf die Schaltfläche ‚Testen‘.",
    "When using {0}, the connection should be tested using the {1} command.":
      "Bei Verwendung von {0} sollte die Verbindung mit dem Befehl {1} getestet werden.",
    "When using the {0} for this integration, you should log in as an administrator or a user with administrative privileges ({1} or {2}) after running the {3} command and the login window appears. For more information, see {4}.":
      "Wenn Sie {0} für diese Integration verwenden, sollten Sie sich als Administrator oder als Benutzer mit Administratorrechten ({1} oder {2}) anmelden, nachdem Sie den Befehl {3} ausgeführt haben und das Anmeldefenster erscheint. Weitere Informationen finden Sie unter {4}.",
    "When using the {0}, make sure the user you authenticate with has the relevant roles in Azure AD in order to execute the operation. To verify that authentication was configured correctly, run the {1} command.":
      "Wenn Sie {0} verwenden, stellen Sie sicher, dass der Benutzer, mit dem Sie sich authentifizieren, in Azure AD über die entsprechenden Rollen verfügt, um den Vorgang auszuführen. Um zu überprüfen, ob die Authentifizierung korrekt konfiguriert wurde, führen Sie den Befehl {1} aus.",
    "Whether to output {0} formats as textual web pages.":
      "Gibt an, ob {0}-Formate als textbasierte Webseiten ausgegeben werden sollen.",
    "You can apply additional (optional) filters for the fetch-incident query using the {0} integration parameter. For more information on how to use the filter syntax, see the {1} and {2}.":
      "Sie können mit dem Integrationsparameter {0} zusätzliche (optionale) Filter für die Abfrage zum Abrufen von Incidents anwenden. Weitere Informationen zur Verwendung der Filtersyntax finden Sie unter {1} und {2}.",
    "You can apply additional (optional) filters for the fetch-incident query using the {0} integration parameter. For more information on how to use the filter syntax:":
      "Sie können mit dem Integrationsparameter {0} zusätzliche (optionale) Filter für die Abfrage zum Abrufen von Incidents anwenden. Weitere Informationen zur Verwendung der Filtersyntax:",
    "You can narrow what is fetched using the {0} and {1} parameters. These accept an OData {2} expression, for example {3}. For the supported syntax and operators, see {4}.":
      "Mit den Parametern {0} und {1} können Sie einschränken, was abgerufen wird. Diese akzeptieren einen OData-{2}-Ausdruck, zum Beispiel {3}. Informationen zu unterstützter Syntax und Operatoren finden Sie unter {4}.",
    "You can use an existing Terraform user or team token, or create a new one (organization tokens are not supported). Ensure the user or team has {0} and {1} permissions for the HCP Terraform organization and workspaces to integrate.":
      "Sie können ein vorhandenes Terraform-Benutzer- oder Team-Token verwenden oder ein neues erstellen (Organisations-Token werden nicht unterstützt). Stellen Sie sicher, dass der Benutzer oder das Team über die Berechtigungen {0} und {1} für die zu integrierende HCP-Terraform-Organisation und die Workspaces verfügt.",
    "You can use an existing Terraform user or team token, or create a new one (organization tokens are not supported). Ensure the user or team has {0} and {1} permissions for the Terraform Enterprise organization and workspaces to integrate.":
      "Sie können ein vorhandenes Terraform-Benutzer- oder Team-Token verwenden oder ein neues erstellen (Organisations-Token werden nicht unterstützt). Stellen Sie sicher, dass der Benutzer oder das Team über die Berechtigungen {0} und {1} für die zu integrierende Terraform-Enterprise-Organisation und die Workspaces verfügt.",
    "You find more information about SIGNL4 at {0}.":
      "Weitere Informationen zu SIGNL4 finden Sie unter {0}.",
    "You must have the {0} configured in the ZIA Admin Portal.":
      "Sie müssen {0} im ZIA Admin Portal konfiguriert haben.",

    // --- Batch: Missed items reported by user (tooltips and standalone Deprecated.) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    "This value will only be used when no arguments were given to the ad-get-user command.":
      "Dieser Wert wird nur verwendet, wenn dem Befehl ad-get-user keine Argumente übergeben wurden.",
    "if no offenses are found within the range of first fetch, will be set to fetch the earliest offense.":
      "Wenn im Bereich des ersten Abrufs keine Offenses gefunden werden, wird festgelegt, dass die älteste Offense abgerufen wird.",
    "Source of WildFire API Key - other = NGFW, WildFire API - pcc = Prisma Cloud Compute - prismaaccessapi = Prisma Access - xsoartim = XSOAR TIM API Key":
      "Quelle des WildFire-API-Schlüssels - other = NGFW, WildFire API - pcc = Prisma Cloud Compute - prismaaccessapi = Prisma Access - xsoartim = XSOAR-TIM-API-Schlüssel",
    "Deprecated.":
      "Veraltet.",

    // --- Batch: Login page strings (08:49 export) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    "By signing in, you agree to our Terms and acknowledge our Privacy Statement.":
      "Mit der Anmeldung stimmen Sie unseren Nutzungsbedingungen zu und bestätigen die Kenntnisnahme unserer Datenschutzerklärung.",
    "Sign-in with CSP":
      "Mit CSP anmelden",
    "Sign-in with SSO":
      "Mit SSO anmelden",
    "Welcome to Cortex":
      "Willkommen bei Cortex",
    "You’re backed by the world’s most trusted security platform.":
      "Sie werden von der weltweit vertrauenswürdigsten Sicherheitsplattform unterstützt.",

    // --- Batch: Slack access token sentence (single and two-sentence block variants) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    "In order to use this integration, you need to enter your Slack access token in the {0} integration instance parameter.":
      "Um diese Integration zu verwenden, müssen Sie Ihr Slack-Zugriffstoken im Integrationsinstanzparameter {0} eingeben.",
    "In order to use this integration, you need to enter your Slack access token in the {0} integration instance parameter. The simplest way to acquire this token is for an Org Owner to create a new Slack app, add the admin OAuth scope, install the app, and use the generated token.":
      "Um diese Integration zu verwenden, müssen Sie Ihr Slack-Zugriffstoken im Integrationsinstanzparameter {0} eingeben. Der einfachste Weg, dieses Token zu erhalten, besteht darin, dass ein Org Owner eine neue Slack-App erstellt, den OAuth-Scope admin hinzufügt, die App installiert und das generierte Token verwendet.",
    "Set the":
      "Setzen Sie den Parameter",
    "Cisco Umbrella Investigate enables you to research domains, IPs, and URLs observed by the Umbrella resolvers.":
      "Mit Cisco Umbrella Investigate können Sie Domänen, IPs und URLs untersuchen, die von den Umbrella-Resolvern beobachtet wurden.",
    "command in the War Room and follow the instruction.":
      "Befehl im War Room aus und folgen Sie den Anweisungen.",
    "command to test the connection and the authorization process.":
      "Befehl aus, um die Verbindung und den Autorisierungsprozess zu testen.",
    "Default Workspace ID (the UUID of the workspace, e.g. 123e4567-e89b-12d3-a456-426614174000)":
      "Standard-Workspace-ID (die UUID des Workspace, z. B. 123e4567-e89b-12d3-a456-426614174000)",
    "Default Workspace Name":
      "Standard-Workspace-Name",
    "Deprecated. Use Cisco Secure Malware Analytics (Threat Grid) v2 instead.":
      "Veraltet. Verwenden Sie stattdessen Cisco Secure Malware Analytics (Threat Grid) v2.",
    "Enter your Client ID in the":
      "Geben Sie Ihre Client ID in das Feld",
    "Enter your redirect URI in the":
      "Geben Sie Ihren Umleitungs-URI in das Feld",
    "Follow these steps for client-credentials configuration.":
      "Führen Sie diese Schritte für die Konfiguration der Clientanmeldeinformationen aus.",
    "For more details about the authentication used in this integration, see":
      "Weitere Informationen zur Authentifizierung in dieser Integration finden Sie unter",
    "Full documentation for this integration is available in the":
      "Die vollständige Dokumentation zu dieser Integration finden Sie unter",
    "Get the Additional Instance Parameters":
      "Zusätzliche Instanzparameter abrufen",
    "IAM integration for Clarizen. Handles user account auto-provisioning to Clarizen.":
      "IAM-Integration für Clarizen. Verarbeitet die automatische Bereitstellung von Benutzerkonten in Clarizen.",
    "ID / Client ID":
      "ID / Client-ID",
    "Key / Client Secret":
      "Schlüssel / Client-Secret",
    "Token / Tenant ID":
      "Token / Tenant-ID",
    "In the instance configuration, select the":
      "Wählen Sie in der Instanzkonfiguration die Option",
    "In the self-deployed mode, you can authenticate by using one of the following flows:":
      "Im selbst bereitgestellten Modus können Sie sich mit einem der folgenden Abläufe authentifizieren:",
    "Locking mechanism that prevents concurrent execution of different tasks":
      "Sperrmechanismus, der die gleichzeitige Ausführung verschiedener Aufgaben verhindert",
    "Microsoft Integrations - Authentication":
      "Microsoft-Integrationen – Authentifizierung",
    "page of the app.":
      "der App.",
    "Redirect URI":
      "Umleitungs-URI",
    "reference docs":
      "Referenzdokumentation",
    "Save the integration settings.":
      "Speichern Sie die Integrationseinstellungen.",
    "Self-Deployed Application Authentication guide":
      "Leitfaden zur Authentifizierung für selbst bereitgestellte Anwendungen",
    "Server URL (e.g., https://management.azure.com)":
      "Server-URL (z. B. https://management.azure.com)",
    "Subscription ID":
      "Abonnement-ID",
    "The Certificate Thumbprint is used for certificate authentication as it appears on the":
      "Der Zertifikatfingerabdruck wird für die Zertifikatauthentifizierung verwendet, wie er auf der Seite",
    "The private key of the registered certificate, used for certificate authentication.":
      "Der private Schlüssel des registrierten Zertifikats, der für die Zertifikatauthentifizierung verwendet wird.",
    "Used for certificate authentication. The private key of the registered certificate.":
      "Wird für die Zertifikatauthentifizierung verwendet. Der private Schlüssel des registrierten Zertifikats.",
    "There are two authentication methods available:":
      "Es stehen zwei Authentifizierungsmethoden zur Verfügung:",
    "to configure and enable authentication.":
      "um die Authentifizierung zu konfigurieren und zu aktivieren.",
    "To use a self-configured Azure application, you need to add a new Azure App Registration in the Azure Portal. To add the registration, go to the":
      "Um eine selbst konfigurierte Azure-Anwendung zu verwenden, müssen Sie im Azure-Portal eine neue Azure-App-Registrierung hinzufügen. Wechseln Sie dazu zu",
    "Use a self-deployed Azure application - Authorization Code flow":
      "Selbst bereitgestellte Azure-Anwendung verwenden – Authorization-Code-Flow",
    "Use a self-deployed Azure application - Client Credentials Authorization Flow":
      "Selbst bereitgestellte Azure-Anwendung verwenden – Client-Credentials-Autorisierungsflow",
    "Use a self-deployed Azure application - Client Credentials Flow":
      "Selbst bereitgestellte Azure-Anwendung verwenden – Client-Credentials-Flow",
    "Use Core REST APIs.":
      "Verwenden Sie die Core-REST-APIs.",
    "Use Gov Account Settings":
      "Einstellungen für Behördenkonten verwenden",
    "Use the Code42 integration to identify potential data exfiltration from insider threats while speeding investigation and response by providing fast access to file events and metadata across physical and cloud environments.":
      "Verwenden Sie die Code42-Integration, um potenziellen Datenabfluss durch Insider-Bedrohungen zu erkennen und Untersuchung und Reaktion zu beschleunigen, indem Sie schnellen Zugriff auf Dateiereignisse und Metadaten in physischen und Cloud-Umgebungen erhalten.",
    "Workspace ID":
      "Workspace-ID",
    "Workspace Name":
      "Workspace-Name",
    "Workspace Settings":
      "Workspace-Einstellungen",

    // --- Batch: strings from the Collector export #3 (Azure Key Vault / Azure Compute / Azure Risky Users docs, Azure Event Hub & Azure DevOps wizards) ---
    // Fragments such as "and", "or", "The", "Set", "In the", "Run the", "Go to the", "Select the" are intentionally NOT registered.
    ": In Azure, go to Organization Settings → Security → Policies → toggle \"Third-party application access via OAuth\" ON. (":
      ": Wechseln Sie in Azure zu Organization Settings → Security → Policies → aktivieren Sie \"Third-party application access via OAuth\". (",
    "(Client ID)":
      "(Client-ID)",
    "(Client Secret (for Client Credentials mode))":
      "(Client-Secret (für den Modus „Clientanmeldeinformationen“))",
    "Add consumer group":
      "Consumergruppe hinzufügen",
    "After authorizing the Demisto app, you will receive an ID, Token, and Key, which needs to be added to the integration instance configuration’s corresponding fields. After giving consent, the application must have a role assigned, so it can access the relevant resources per subscription.":
      "Nachdem Sie die Demisto-App autorisiert haben, erhalten Sie eine ID, ein Token und einen Schlüssel, die den entsprechenden Feldern der Konfiguration der Integrationsinstanz hinzugefügt werden müssen. Nach der Zustimmung muss der Anwendung eine Rolle zugewiesen werden, damit sie pro Abonnement auf die relevanten Ressourcen zugreifen kann.",
    "After saving the client secret, the value of the client secret is displayed.":
      "Nach dem Speichern des Client-Secrets wird dessen Wert angezeigt.",
    "After the Azure Key Vault integration instance is created, the credentials will be fetched":
      "Nach dem Erstellen der Integrationsinstanz für Azure Key Vault werden die Anmeldedaten abgerufen und",
    "to the Cortex credentials store in the following format:":
      "im Anmeldedatenspeicher von Cortex im folgenden Format gespeichert:",
    "At the end of the process you’ll see a message that you’ve logged in successfully.":
      "Am Ende des Vorgangs wird eine Meldung angezeigt, dass die Anmeldung erfolgreich war.",
    "Authenticate with your personal Microsoft account. Simple setup via OAuth redirect.":
      "Authentifizieren Sie sich mit Ihrem persönlichen Microsoft-Konto. Einfache Einrichtung über OAuth-Weiterleitung.",
    "Authentication Type":
      "Authentifizierungstyp",
    "Authentication Type.":
      "Authentifizierungstyp.",
    "Authentication Using the Client Credentials Flow (recommended)":
      "Authentifizierung über den Client-Credentials-Flow (empfohlen)",
    "Authentication Using the Device Flow":
      "Authentifizierung über den Device-Flow",
    "Authorization":
      "Autorisierung",
    "Authorize":
      "Autorisieren",
    "Authorize Cortex for Azure Key Vault":
      "Cortex für Azure Key Vault autorisieren",
    "Application ID":
      "Anwendungs-ID",
    "Azure app registration article":
      "Artikel zur Azure-App-Registrierung",
    "Azure Cloud":
      "Azure Cloud",
    "Azure DevOps auth with Entra ID Prerequisites:":
      "Voraussetzungen für die Azure-DevOps-Authentifizierung mit Entra ID:",
    "Azure Key Vault - permission user_impersonation of type Delegated":
      "Azure Key Vault – Berechtigung user_impersonation vom Typ Delegated",
    "Azure Managed Identities":
      "Verwaltete Azure-Identitäten",
    "Azure Managed Identities Authentication":
      "Authentifizierung mit verwalteten Azure-Identitäten",
    "Azure Managed Identities client ID":
      "Client-ID der verwalteten Azure-Identitäten",
    "Azure Managed Identities Client ID":
      "Client-ID der verwalteten Azure-Identitäten",
    "Azure Portal":
      "Azure-Portal",
    "Azure Service Management - permission user_impersonation of type Delegated":
      "Azure Service Management – Berechtigung user_impersonation vom Typ Delegated",
    "Check Fetches credentials parameter.":
      "Aktivieren Sie den Parameter „Anmeldedaten abrufen“.",
    "Choose Authentication Method":
      "Authentifizierungsmethode auswählen",
    "Client Secret (for Client Credentials mode)":
      "Client-Secret (für den Modus „Clientanmeldeinformationen“)",
    "command - a ‘Success’ message should be printed to the war-room.":
      "Befehl – im War Room sollte die Meldung „Success“ ausgegeben werden.",
    "Configure Account":
      "Konto konfigurieren",
    "Configure Azure Risky Users on Cortex Navigate to":
      "Konfigurieren Sie Azure Risky Users in Cortex. Navigieren Sie zu",
    "Confirm your Azure DevOps organization is connected to Microsoft Entra ID. (":
      "Stellen Sie sicher, dass Ihre Azure-DevOps-Organisation mit Microsoft Entra ID verbunden ist. (",
    "consumer group":
      "Consumergruppe",
    "Copy the Application ID and store it in the Client ID parameter.":
      "Kopieren Sie die Anwendungs-ID und speichern Sie sie im Parameter Client ID.",
    "Copy the Directory (tenant) ID and enter it in the Tenant ID parameter.":
      "Kopieren Sie die Directory (tenant) ID und geben Sie sie im Parameter Tenant ID ein.",
    "Copy the Subscription ID and enter it in the Subscription ID parameter.":
      "Kopieren Sie die Subscription ID und geben Sie sie im Parameter Subscription ID ein.",
    "Copy this value and enter it in the Client Secret parameter.":
      "Kopieren Sie diesen Wert und geben Sie ihn im Parameter Client Secret ein.",
    "Copy your resource group name and enter it in the Resource Group Name parameter.":
      "Kopieren Sie den Namen Ihrer Ressourcengruppe und geben Sie ihn im Parameter Resource Group Name ein.",
    "Cortex App":
      "Cortex-App",
    "Cortex Azure App":
      "Cortex-Azure-App",
    "Cortex XSOAR Application":
      "Cortex-XSOAR-Anwendung",
    "Credential Name: KEY_VAULT_NAME/SECRET_NAME":
      "Name der Anmeldedaten: KEY_VAULT_NAME/SECRET_NAME",
    "Credentials Fetch Mode":
      "Modus für den Abruf von Anmeldedaten",
    "Debug/Verbose logging is recommended only during troubleshooting. Logging can affect the performance of the integration. Recommended usage is to turn logging on during setup and troubleshooting, and then turn it off in production.":
      "Die Debug-/Verbose-Protokollierung wird nur während der Fehlerbehebung empfohlen. Die Protokollierung kann die Leistung der Integration beeinträchtigen. Es wird empfohlen, die Protokollierung während der Einrichtung und Fehlerbehebung zu aktivieren und in der Produktion wieder zu deaktivieren.",
    "Debug/Verbose logging is recommended only during troubleshooting. Logging can affect the performance of the integration. Recommended usage is to turn logging on during setup and troubleshooting, and then turn it off in production. These settings only affect the integration log. The server log is not affected.":
      "Die Debug-/Verbose-Protokollierung wird nur während der Fehlerbehebung empfohlen. Die Protokollierung kann die Leistung der Integration beeinträchtigen. Es wird empfohlen, die Protokollierung während der Einrichtung und Fehlerbehebung zu aktivieren und in der Produktion wieder zu deaktivieren. Diese Einstellungen wirken sich nur auf das Integrationsprotokoll aus. Das Serverprotokoll ist davon nicht betroffen.",
    "These settings only affect the integration log. The server log is not affected.":
      "Diese Einstellungen wirken sich nur auf das Integrationsprotokoll aus. Das Serverprotokoll ist davon nicht betroffen.",
    "Default Resource Group Name":
      "Name der Standardressourcengruppe",
    "Default Subscription ID":
      "Standard-Abonnement-ID",
    "Depending on the authentication method that you use, the integration parameters might change.":
      "Abhängig von der verwendeten Authentifizierungsmethode können sich die Integrationsparameter ändern.",
    "device authorization grant flow":
      "Device-Authorization-Grant-Flow",
    "Device authorization grant flow":
      "Device-Authorization-Grant-Flow",
    "Device Code":
      "Gerätecode",
    "Enable Azure Event Hub Log Collection":
      "Azure-Event-Hub-Protokollerfassung aktivieren",
    "Enter account connection string":
      "Verbindungszeichenfolge des Kontos eingeben",
    "Enter event hub connection string":
      "Verbindungszeichenfolge des Event Hubs eingeben",
    "Enter Product":
      "Produkt eingeben",
    "Enter Vendor":
      "Anbieter eingeben",
    "Enter your Client Secret in the":
      "Geben Sie Ihr Client-Secret in das Feld",
    "Enter your Client/Application ID in the":
      "Geben Sie Ihre Client-/Anwendungs-ID in das Feld",
    "Enter your Tenant ID in the":
      "Geben Sie Ihre Tenant-ID in das Feld",
    "field in the instance configuration.":
      "der Instanzkonfiguration ein.",
    "field in the instance settings.":
      "der Instanzeinstellungen ein.",
    "Entra ID — Choose Identity Type":
      "Entra ID – Identitätstyp auswählen",
    "event hub connection string":
      "Verbindungszeichenfolge des Event Hubs",
    "External Credentials Vault (on-demand)":
      "Externer Anmeldedatentresor (bei Bedarf)",
    "Fetch credentials from Azure Key Vault":
      "Anmeldedaten aus Azure Key Vault abrufen",
    "Fetches credentials":
      "Anmeldedaten abrufen",
    "Fill in the required parameters.":
      "Füllen Sie die erforderlichen Parameter aus.",
    "Fill Key Vault names to fetch secrets from.":
      "Geben Sie die Namen der Key Vaults ein, aus denen Secrets abgerufen werden sollen.",
    "Fill secret names to fetch.":
      "Geben Sie die Namen der abzurufenden Secrets ein.",
    "Follow one of these steps for authentication based on Azure Managed Identities:":
      "Führen Sie für die Authentifizierung auf Basis verwalteter Azure-Identitäten einen der folgenden Schritte aus:",
    "Follow the instructions that appear.":
      "Folgen Sie den angezeigten Anweisungen.",
    "Follow these steps for a":
      "Führen Sie diese Schritte für eine",
    "Follow these steps for a self-deployed configuration:":
      "Führen Sie diese Schritte für eine selbst bereitgestellte Konfiguration aus:",
    "self-deployed configuration":
      "selbst bereitgestellte Konfiguration",
    "For information about Azure Managed Identities see":
      "Informationen zu verwalteten Azure-Identitäten finden Sie unter",
    "For more information, see the integration documentation.":
      "Weitere Informationen finden Sie in der Dokumentation zur Integration.",
    "From App registrations in Azure AD, select your application.":
      "Wählen Sie unter App registrations in Azure AD Ihre Anwendung aus.",
    "Get client ID and tenant ID values":
      "Client-ID und Tenant-ID abrufen",
    "Get client secret value":
      "Wert des Client-Secrets abrufen",
    "Get Subscription ID and the Resource Group values":
      "Abonnement-ID und Ressourcengruppe abrufen",
    "Host URL (e.g. https://management.azure.com)":
      "Host-URL (z. B. https://management.azure.com)",
    "if your security policy does not allow secrets to be stored inside the Cortex credentials store. In this mode, the credentials picker in other integrations will list the configured secrets by name (KEY_VAULT_NAME/SECRET_NAME), but no secret values are pulled from Azure Key Vault. When a playbook or command actually executes an integration that uses one of those credentials, the secret value is fetched live from Azure Key Vault and is passed in memory only. Nothing is persisted in Cortex.":
      "wenn Ihre Sicherheitsrichtlinie nicht zulässt, dass Secrets im Anmeldedatenspeicher von Cortex gespeichert werden. In diesem Modus listet die Anmeldedatenauswahl in anderen Integrationen die konfigurierten Secrets nach Namen (KEY_VAULT_NAME/SECRET_NAME) auf, es werden jedoch keine Secret-Werte aus Azure Key Vault abgerufen. Wenn ein Playbook oder Befehl eine Integration ausführt, die eine dieser Anmeldedaten verwendet, wird der Secret-Wert live aus Azure Key Vault abgerufen und nur im Arbeitsspeicher weitergegeben. In Cortex wird nichts gespeichert.",
    "In order to fetch credentials to the Cortex credentials store,you should follow the next steps:":
      "Um Anmeldedaten in den Anmeldedatenspeicher von Cortex abzurufen, führen Sie die folgenden Schritte aus:",
    "In order to use the Cortex Azure application,":
      "Um die Cortex-Azure-Anwendung zu verwenden,",
    "In the Azure portal, select Entra ID.":
      "Wählen Sie im Azure-Portal Entra ID aus.",
    "In the Azure portal, select Resource groups.":
      "Wählen Sie im Azure-Portal Resource groups aus.",
    "The default mode":
      "Der Standardmodus",
    "keeps the existing behavior: The secret values are fetched and stored in the Cortex credentials store.":
      "behält das bestehende Verhalten bei: Die Secret-Werte werden abgerufen und im Anmeldedatenspeicher von Cortex gespeichert.",
    "Key Vault names - a comma separated list of Key Vaults to fetch secrets from.":
      "Key-Vault-Namen – eine durch Kommas getrennte Liste der Key Vaults, aus denen Secrets abgerufen werden sollen.",
    "Learn how":
      "Weitere Informationen",
    "link new tab icon":
      "Symbol für Link in neuem Tab",
    "Make sure the following permissions are granted for the app registration:":
      "Stellen Sie sicher, dass der App-Registrierung die folgenden Berechtigungen erteilt wurden:",
    "Make sure to provide the following permissions for the app to work with Azure Risky Users:":
      "Erteilen Sie die folgenden Berechtigungen, damit die App mit Azure Risky Users funktioniert:",
    "Manage policies":
      "Richtlinien verwalten",
    "Managed Identities":
      "Verwaltete Identitäten",
    "Managed identities for Azure resources":
      "Verwaltete Identitäten für Azure-Ressourcen",
    "Microsoft article":
      "Microsoft-Artikel",
    "Microsoft Entra ID authentication":
      "Microsoft-Entra-ID-Authentifizierung",
    "Microsoft integrations (Graph and Azure) in Cortex use Entra ID applications to authenticate with Microsoft APIs. These integrations use OAuth 2.0 and OpenID Connect standard-compliant authentication services, which use an Application to sign-in or delegate authentication. For more information, see the Microsoft identity platform overview.":
      "Die Microsoft-Integrationen (Graph und Azure) in Cortex verwenden Entra-ID-Anwendungen, um sich bei Microsoft-APIs zu authentifizieren. Diese Integrationen nutzen Authentifizierungsdienste, die den Standards OAuth 2.0 und OpenID Connect entsprechen und eine Anwendung zur Anmeldung oder zur Delegierung der Authentifizierung verwenden. Weitere Informationen finden Sie in der Übersicht über die Microsoft Identity Platform.",
    "Note: This option is relevant only if the integration is running on Azure VM.":
      "Hinweis: Diese Option ist nur relevant, wenn die Integration auf einer Azure-VM ausgeführt wird.",
    "Only necessary in case a Samples Feed is fetched.":
      "Nur erforderlich, wenn ein Beispiel-Feed abgerufen wird.",
    "Password: SECRET_VALUE":
      "Passwort: SECRET_VALUE",
    "Username: SECRET_NAME":
      "Benutzername: SECRET_NAME",
    "Provide a description of the secret, and a duration. When done, select Add.":
      "Geben Sie eine Beschreibung des Secrets und eine Laufzeit an. Wählen Sie anschließend Add aus.",
    "Relevant only for sample feeds. JSON styled AutoFocus query, an example can be found in the description (?) section. mandatory for Samples Feed.":
      "Nur für Beispiel-Feeds relevant. AutoFocus-Abfrage im JSON-Format; ein Beispiel finden Sie im Abschnitt „Beschreibung“ (?). Für den Beispiel-Feed erforderlich.",
    "Required Permissions":
      "Erforderliche Berechtigungen",
    "Save the instance.":
      "Speichern Sie die Instanz.",
    "Search for AzureRiskyUsers.":
      "Suchen Sie nach AzureRiskyUsers.",
    "Secret names - a comma separated list of secrets to fetch.":
      "Secret-Namen – eine durch Kommas getrennte Liste der abzurufenden Secrets.",
    "See documentation":
      "Dokumentation anzeigen",
    "Select Certificates & secrets.":
      "Wählen Sie Certificates & secrets aus.",
    "Select Client secrets -> New client secret.":
      "Wählen Sie Client secrets -> New client secret aus.",
    "Select Repositories":
      "Repositories auswählen",
    "Select this checkbox if you are using a self-deployed Azure application.":
      "Aktivieren Sie dieses Kontrollkästchen, wenn Sie eine selbst bereitgestellte Azure-Anwendung verwenden.",
    "Select your resource group name.":
      "Wählen Sie den Namen Ihrer Ressourcengruppe aus.",
    "Select your User Assigned Managed Identity -> copy the Client ID -> paste it in the":
      "Wählen Sie Ihre benutzerzugewiesene verwaltete Identität aus -> kopieren Sie die Client-ID -> fügen Sie sie in das Feld",
    "Self-Deployed App":
      "Selbst bereitgestellte App",
    "Self-Deployed Application":
      "Selbst bereitgestellte Anwendung",
    "Self-Deployed Authentication":
      "Authentifizierung für selbst bereitgestellte Anwendungen",
    "Self-Deployed Azure App":
      "Selbst bereitgestellte Azure-App",
    "Service Principal":
      "Dienstprinzipal",
    "storage account connection string":
      "Verbindungszeichenfolge des Speicherkontos",
    "Store in Cortex":
      "In Cortex speichern",
    "Support for MSA users through Microsoft Entra OAuth is still in progress on Microsoft's side. (":
      "Die Unterstützung für MSA-Benutzer über Microsoft Entra OAuth wird von Microsoft noch entwickelt. (",
    "Supports CSV values.":
      "Unterstützt CSV-Werte.",
    "Tenant ID (for Client Credentials mode)":
      "Tenant-ID (für den Modus „Clientanmeldeinformationen“)",
    "The mode for fetching credentials. Set to \"External Credentials Vault (on-demand)\" if your security policy does not allow secrets to be stored inside the Cortex credentials store. In this mode, the credentials picker in other integrations lists the configured secrets by name (KEY_VAULT_NAME/SECRET_NAME), but no secret values are pulled from Azure Key Vault. When a playbook or command executes an integration that uses one of those credentials, the secret value is fetched live from Azure Key Vault and is passed in memory only.":
      "Der Modus für den Abruf von Anmeldedaten. Legen Sie \"External Credentials Vault (on-demand)\" fest, wenn Ihre Sicherheitsrichtlinie nicht zulässt, dass Secrets im Anmeldedatenspeicher von Cortex gespeichert werden. In diesem Modus listet die Anmeldedatenauswahl in anderen Integrationen die konfigurierten Secrets nach Namen (KEY_VAULT_NAME/SECRET_NAME) auf, es werden jedoch keine Secret-Werte aus Azure Key Vault abgerufen. Wenn ein Playbook oder Befehl eine Integration ausführt, die eine dieser Anmeldedaten verwendet, wird der Secret-Wert live aus Azure Key Vault abgerufen und nur im Arbeitsspeicher weitergegeben.",
    "There are 2 application authentication methods available:":
      "Es stehen 2 Authentifizierungsmethoden für Anwendungen zur Verfügung:",
    "This parameter can be overridden by the resource_group argument in any command.":
      "Dieser Parameter kann in jedem Befehl durch das Argument resource_group überschrieben werden.",
    "To allow us access to Azure Compute, an administrator has to approve the Demisto app using an admin consent flow, by clicking":
      "Damit wir auf Azure Compute zugreifen können, muss ein Administrator die Demisto-App über einen Administratoreinwilligungsablauf genehmigen, indem er auf Folgendes klickt:",
    "To use a self-configured Azure application, add a new Azure App Registration in the Azure Portal. To add the registration, see the":
      "Um eine selbst konfigurierte Azure-Anwendung zu verwenden, fügen Sie im Azure-Portal eine neue Azure-App-Registrierung hinzu. Informationen zum Hinzufügen der Registrierung finden Sie unter",
    "To use a self-configured Azure application, you need to add a new Azure App Registration in the Azure Portal, with mobile and desktop flows enabled.":
      "Um eine selbst konfigurierte Azure-Anwendung zu verwenden, müssen Sie im Azure-Portal eine neue Azure-App-Registrierung mit aktivierten Mobil- und Desktop-Abläufen hinzufügen.",
    "To use a self-configured Azure application, you need to add a new Azure App Registration in the Azure Portal. To add the registration, refer to the following":
      "Um eine selbst konfigurierte Azure-Anwendung zu verwenden, müssen Sie im Azure-Portal eine neue Azure-App-Registrierung hinzufügen. Informationen zum Hinzufügen der Registrierung finden Sie hier:",
    "To use System Assigned Managed Identity":
      "So verwenden Sie die systemzugewiesene verwaltete Identität",
    "To use User Assigned Managed Identity":
      "So verwenden Sie die benutzerzugewiesene verwaltete Identität",
    "Token (received from the admin consent - see Detailed Instructions (?) section)":
      "Token (aus der Administratoreinwilligung erhalten – siehe Abschnitt „Detaillierte Anweisungen“ (?))",
    "Use a self-deployed Azure Application":
      "Selbst bereitgestellte Azure-Anwendung verwenden",
    "Use an application identity (not tied to a person). Requires Entra ID admin to grant consent.":
      "Verwenden Sie eine Anwendungsidentität (nicht an eine Person gebunden). Erfordert die Einwilligung eines Entra-ID-Administrators.",
    "Use Azure Managed Identities":
      "Verwaltete Azure-Identitäten verwenden",
    "use the Client ID - (application_id) (":
      "verwenden Sie die Client ID - (application_id) (",
    "User Authentication":
      "Benutzerauthentifizierung",
    "Worldwide":
      "Weltweit",
  },

  patterns: [
    { re: /^(\d+)\s+Instances? Configured$/, tpl: "$1 Instanz(en) konfiguriert" },
    { re: /^(\d+\/\d+)\s+connected$/, tpl: "$1 verbunden" },
    { re: /^([\d,]+)\s+selected out of\s+([\d,]+)$/, tpl: "$1 von $2 ausgewählt" },
    { re: /^(\d+)\s+Warnings,?$/, tpl: "$1 Warnhinweise," },
    { re: /^Found (\d+) deployed connectors\. For all clusters go to$/, tpl: "$1 bereitgestellte Connectors gefunden. Alle Cluster finden Sie unter:" },
    { re: /^(\d+)\s+Errors$/, tpl: "$1 Fehler" },
    { re: /^(\d+)\s+result$/, tpl: "$1 Ergebnis" },
    { re: /^\(\s*(\d+)\s+Mapped\s*\)$/, tpl: "( $1 zugeordnet )" },
    { re: /^Integration Author:\s*(.+)$/, tpl: "Integrationsautor: $1" },
  ],

  skip: [],
};
