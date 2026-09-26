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
    "Auto resolve": "Automatisch lösen",
    "AI and Machine Learning": "KI und maschinelles Lernen",
    "Validate Code": "Code validieren",
    "Cloud Type:": "Cloud-Typ:",
    "Issues Count:": "Anzahl Probleme:",
    "Findings Count:": "Anzahl Befunde:",
    "Cases Count:": "Anzahl Fälle:",
    "Asset Types:": "Asset-Typen:",
    "Mode:": "Modus:",
    "Remove the krbtgt service from the account's msDS-AllowedToDelegateTo attribute immediately. In Active Directory Users and Computers, open the account properties, go to the Delegation tab, and remove any entries referencing the krbtgt service. There is no legitimate reason for an account to have constrained delegation to krbtgt. Investigate whether this configuration was set maliciously as it could indicate a persistence mechanism.":
      "Entfernen Sie den krbtgt-Dienst umgehend aus dem Attribut msDS-AllowedToDelegateTo des Kontos. Öffnen Sie in \"Active Directory-Benutzer und -Computer\" die Kontoeigenschaften, wechseln Sie zur Registerkarte \"Delegierung\" und entfernen Sie alle Einträge, die auf den krbtgt-Dienst verweisen. Es gibt keinen legitimen Grund dafür, dass ein Konto eine eingeschränkte Delegierung an krbtgt besitzt. Untersuchen Sie, ob diese Konfiguration böswillig vorgenommen wurde, da sie auf einen Persistenzmechanismus hindeuten kann.",
    "No Compliance Controls Assigned": "Keine Compliance-Kontrollen zugewiesen",
    "This rule currently has no assigned compliance controls. To assign controls, edit the rule and add the required compliance controls.":
      "Dieser Regel sind derzeit keine Compliance-Kontrollen zugewiesen. Um Kontrollen zuzuweisen, bearbeiten Sie die Regel und fügen Sie die erforderlichen Compliance-Kontrollen hinzu.",
    "Certain dynamic filter conditions such as asset fields, are calculated at runtime and not displayed as a part of the policy preview.":
      "Bestimmte dynamische Filterbedingungen, etwa Asset-Felder, werden zur Laufzeit berechnet und nicht in der Richtlinienvorschau angezeigt.",
    "Enter CVE or vulnerability IDs here...": "Geben Sie hier CVE- oder Schwachstellen-IDs ein...",
    "Enter an Asset Group name here...": "Geben Sie hier den Namen einer Asset-Gruppe ein...",
    "Enter an asset name or Asset ID here...": "Geben Sie hier einen Asset-Namen oder eine Asset-ID ein...",
    "Start typing to search...": "Beginnen Sie mit der Eingabe, um zu suchen...",
    "Ignored CVEs and Assets": "Ignorierte CVEs und Assets",
    "Ignored Items": "Ignorierte Elemente",
    "Ignored Vulnerabilities": "Ignorierte Schwachstellen",
    "Ignored Asset Groups": "Ignorierte Asset-Gruppen",
    "Ignored Assets": "Ignorierte Assets",
    "Preview": "Vorschau",
    "Select CVEs, Asset Groups, and Assets to ignore from vulnerability policy evaluation.":
      "Wählen Sie CVEs, Asset-Gruppen und Assets aus, die bei der Auswertung von Schwachstellenrichtlinien ignoriert werden sollen.",
    "No Issues will be generated for the following CVEs and vulnerabilities. Findings for these CVEs and vulnerabilities will still appear in the Vulnerability Findings view and will still be counted in dashboards based on Findings data.":
      "Für die folgenden CVEs und Schwachstellen werden keine Probleme generiert. Befunde zu diesen CVEs und Schwachstellen werden weiterhin in der Ansicht \"Vulnerability Findings\" angezeigt und in Dashboards auf Basis von Befunddaten weiterhin gezählt.",
    "Vulnerability IDs": "Schwachstellen-IDs",
    "No Issues will be generated for the following Asset Groups. Findings for these Asset Groups will still appear in the Vulnerability Findings view and will still be counted in dashboards based on Findings data.":
      "Für die folgenden Asset-Gruppen werden keine Probleme generiert. Befunde zu diesen Asset-Gruppen werden weiterhin in der Ansicht \"Vulnerability Findings\" angezeigt und in Dashboards auf Basis von Befunddaten weiterhin gezählt.",
    "No Issues will be generated for the following Assets. Findings for these Assets will still appear in the Vulnerability Findings view and will still be counted in dashboards based on Findings data.":
      "Für die folgenden Assets werden keine Probleme generiert. Befunde zu diesen Assets werden weiterhin in der Ansicht \"Vulnerability Findings\" angezeigt und in Dashboards auf Basis von Befunddaten weiterhin gezählt.",
    "Vulnerability Policies - Prevention": "Vulnerability Policies - Prävention",
    "Kubernetes Runtime Protection": "Kubernetes-Laufzeitschutz",
    "These actions are available for Findings on Kubernetes clusters with Kubernetes Admission Controller activated.":
      "Diese Aktionen sind für Befunde in Kubernetes-Clustern verfügbar, in denen der Kubernetes Admission Controller aktiviert ist.",
    "Learn how to increase coverage.": "Erfahren Sie, wie Sie die Abdeckung erhöhen.",
    "Kubernetes Pod Actions": "Kubernetes-Pod-Aktionen",
    "Do nothing": "Nichts tun",
    "Prevent new deployment requests": "Neue Bereitstellungsanforderungen verhindern",
    "Is Malicious": "Bösartig",
    "Used In Code": "Im Code verwendet",
    "Used In Deploy": "In Bereitstellung verwendet",
    "Used In Runtime": "Zur Laufzeit verwendet",
    "Package Subtype": "Paket-Subtyp",
    "Organization impact": "Auswirkung auf die Organisation",
    "Show alternatives": "Alternativen anzeigen",
    "Assets by software development stage": "Assets nach Phase der Softwareentwicklung",
    "Image Size": "Image-Größe",
    "Runtime Function": "Laufzeitfunktion",
    "Trust Score": "Vertrauensbewertung",
    "Package Symbols": "Paketsymbole",
    "Package Author": "Paketautor",
    "Finding First Observed": "Befund erstmals beobachtet",
    "Framework/Language": "Framework/Sprache",
    "Policies Count": "Anzahl Richtlinien",
    "Mapped Cloud Security Rule": "Zugeordnete Cloud-Sicherheitsregel",
    "Created Date": "Erstellungsdatum",
    "Suppressions": "Unterdrückungen",
    "Resource Types": "Ressourcentypen",
    "Is Enabled": "Ist aktiviert",
    "Rule Impact": "Auswirkung der Regel",
    "Select Category": "Kategorie auswählen",
    "Add Rule Name": "Regelnamen hinzufügen",
    "Mapped Runtime Rule": "Zugeordnete Laufzeitregel",
    "Add label...": "Label hinzufügen...",
    "Select framework": "Framework auswählen",
    "Select subcategory": "Unterkategorie auswählen",
    "Set the general details for this rule": "Legen Sie die allgemeinen Details für diese Regel fest",
    "Use Enter to apply a label": "Drücken Sie die Eingabetaste, um ein Label anzuwenden",
    "Enter a name for this rule": "Geben Sie einen Namen für diese Regel ein",
    "Give this rule a brief description": "Geben Sie eine kurze Beschreibung für diese Regel ein",
    "Enter a remediation": "Geben Sie eine Behebung ein",
    "Name is required": "Name ist erforderlich",
    "Description is required": "Beschreibung ist erforderlich",
    "Define the logic for your rule": "Definieren Sie die Logik für Ihre Regel",
    "Back": "Zurück",
    "Generate Previerw": "Vorschau generieren",
    "No Preview": "Keine Vorschau",
    "To see potential matches, enter your query and click \"Generate Preview\".":
      "Um mögliche Übereinstimmungen anzuzeigen, geben Sie Ihre Abfrage ein und klicken Sie auf \"Generate Preview\".",
    "Create Issue": "Problem erstellen",
    "Generate Preview": "Vorschau generieren",
    "Rule name is required": "Regelname ist erforderlich",
    "Give this Rule a brief description...": "Geben Sie eine kurze Beschreibung für diese Regel ein...",
    "Select issue severity": "Schweregrad des Problems auswählen",
    "Enable Remediation": "Behebung aktivieren",
    "(Optional)": "(Optional)",
    "Assign a Configuration Rule To Custom Compliance Controls": "Konfigurationsregel benutzerdefinierten Compliance-Kontrollen zuweisen",
    "You can assign a configuration rule to one or more custom compliance controls to tailor compliance checks to your organization's needs.":
      "Sie können eine Konfigurationsregel einer oder mehreren benutzerdefinierten Compliance-Kontrollen zuweisen, um Compliance-Prüfungen an die Anforderungen Ihrer Organisation anzupassen.",
    "Add actions to take once a rule has been violated.": "Fügen Sie Aktionen hinzu, die bei einem Regelverstoß ausgeführt werden.",
    "Compliance Controls (": "Compliance-Kontrollen (",
    "Be Advised": "Bitte beachten",
    "Switching modes will remove any unsaved edits. Continue?": "Beim Wechseln des Modus werden alle nicht gespeicherten Änderungen entfernt. Fortfahren?",
    "Rule Logic": "Regellogik",
    "Define logic for your rule": "Logik für Ihre Regel definieren",
    "Define the logic for your rule.": "Definieren Sie die Logik für Ihre Regel.",
    "Simple Mode": "Einfacher Modus",
    "Advanced Mode": "Erweiterter Modus",
    "instructions": "Anweisungen",
    "Define your rule's query. Be sure to follow the": "Definieren Sie die Abfrage Ihrer Regel. Befolgen Sie dabei unbedingt die",
    "Run query to populate values": "Abfrage ausführen, um Werte zu befüllen",
    "Query validation failed.": "Abfragevalidierung fehlgeschlagen.",
    "Query validated successfully.": "Abfrage erfolgreich validiert.",
    "Affected Asset Type:": "Betroffener Asset-Typ:",
    "The rule must end with a 'fields' stage.": "Die Regel muss mit einer 'fields'-Stage enden.",
    "Add details for this Config Rule": "Details für diese Config Rule hinzufügen",
    "Add details for this Data Rule": "Details für diese Data Rule hinzufügen",
    "Create Data Rule": "Data Rule erstellen",
    "Add details for this Identity Rule": "Details für diese Identity Rule hinzufügen",
    "Create Identity Rule": "Identity Rule erstellen",
    "Create Network Exposure Rule": "Network Exposure Rule erstellen",
    "Add details for this Network Exposure Rule": "Details für diese Network Exposure Rule hinzufügen",
    "Add details for this AI Rule": "Details für diese AI Rule hinzufügen",
    "Create AI Rule": "AI Rule erstellen",
    "Create Attack Path (Legacy) Rule": "Attack Path (Legacy) Rule erstellen",
    "Add details for this Attack Path (Legacy) Rule": "Details für diese Attack Path (Legacy) Rule hinzufügen",
    "Enter a name for this Rule...": "Geben Sie einen Namen für diese Regel ein...",
    "Base Images Rules": "Regeln für Basis-Images",
    "Create rules to automatically identify your base images": "Erstellen Sie Regeln, um Ihre Basis-Images automatisch zu identifizieren",
    "Match Count": "Anzahl Übereinstimmungen",
    "No base image rules yet": "Noch keine Regeln für Basis-Images",
    "Create Base Image Rule": "Regel für Basis-Image erstellen",
    "Edit Base Image Rule": "Regel für Basis-Image bearbeiten",
    // Verbatim from the product ("Operation system" — likely a typo for "Operating system" — kept as-is
    // to match the real DOM text).
    "Operation system": "Betriebssystem",
    "Define actions for when this rule is violated": "Definieren Sie Aktionen für den Fall eines Verstoßes gegen diese Regel",
    "Disable Rule": "Regel deaktivieren",
    "Disabling rule will resolve the open issues matching the rule.":
      "Durch das Deaktivieren der Regel werden die offenen Probleme gelöst, die der Regel entsprechen.",
    "Delete Rule": "Regel löschen",
    "The selected rule will be deleted. However, any issues previously generated by these rules will remain open until resolved.":
      "Die ausgewählte Regel wird gelöscht. Alle zuvor durch diese Regeln generierten Probleme bleiben jedoch offen, bis sie gelöst werden.",
    "Run preview": "Vorschau ausführen",
    "Preview your results": "Vorschau Ihrer Ergebnisse",
    "Generate preview to see matches": "Vorschau generieren, um Übereinstimmungen anzuzeigen",
    "This rule will automatically apply to all current and future matches": "Diese Regel wird automatisch auf alle aktuellen und künftigen Übereinstimmungen angewendet",
    "Enter registry": "Registry eingeben",
    "Registry is required": "Registry ist erforderlich",
    "Enter repository": "Repository eingeben",
    "Repository is required": "Repository ist erforderlich",
    "Delete Rule?": "Regel löschen?",
    "The selected rule will be deleted. Are you sure you want to proceed?": "Die ausgewählte Regel wird gelöscht. Möchten Sie wirklich fortfahren?",
    "Based on your query results, the suggested asset-identifying fields appear here. Generated issues will be linked to asset identified by the selected field":
      "Basierend auf Ihren Abfrageergebnissen werden hier die vorgeschlagenen Felder zur Asset-Identifizierung angezeigt. Generierte Probleme werden mit dem Asset verknüpft, das durch das ausgewählte Feld identifiziert wird",
    "The final 'fields' stage is missing the required 'asset_id' (or 'xdm.asset.id') field.":
      "In der abschließenden 'fields'-Stage fehlt das erforderliche Feld 'asset_id' (oder 'xdm.asset.id').",
    "The final 'fields' stage is missing the required 'asset_type_id' (or 'xdm.asset.type.id') field.":
      "In der abschließenden 'fields'-Stage fehlt das erforderliche Feld 'asset_type_id' (oder 'xdm.asset.type.id').",
    "Filter stage with xdm.asset.type.id is required": "Eine filter-Stage mit xdm.asset.type.id ist erforderlich",
    "Last evaluated": "Zuletzt ausgewertet",
    "Detection Rules IDs": "IDs der Erkennungsregeln",
    "Action Taken On Missing Information": "Aktion bei fehlenden Informationen",
    "Policy name is required.": "Richtlinienname ist erforderlich.",
    "Add Policy name": "Richtliniennamen hinzufügen",
    "This policy name already exists.": "Dieser Richtlinienname ist bereits vorhanden.",
    "No rules selected yet": "Noch keine Regeln ausgewählt",
    "Add rules": "Regeln hinzufügen",
    "Rule Remediation": "Regelbehebung",
    "User Rule Remediation": "Behebung für Benutzerregel",
    "Add rules to policy": "Regeln zur Richtlinie hinzufügen",
    "Learn about the Prevent action's power, behavior, and prerequisites": "Erfahren Sie mehr über Wirkung, Verhalten und Voraussetzungen der Aktion \"Prevent\"",
    "Applicable assets": "Anwendbare Assets",
    "Available actions": "Verfügbare Aktionen",
    "Scope Selection Method": "Methode zur Auswahl des Geltungsbereichs",
    "Default Asset Scopes": "Standard-Asset-Geltungsbereiche",
    "Assets Scope": "Asset-Geltungsbereich",
    "All Cloud Workload Hosts (VM Instances)": "Alle Cloud-Workload-Hosts (VM-Instanzen)",
    "Open Asset Inventory": "Asset-Inventar öffnen",
    "Asset types not listed above will not be evaluated.": "Oben nicht aufgeführte Asset-Typen werden nicht ausgewertet.",
    "This selection applies the policy and its detection rules to": "Diese Auswahl wendet die Richtlinie und ihre Erkennungsregeln an auf",
    "asset types available at": "Asset-Typen, die verfügbar sind in der",
    "SDLC Stage.": "SDLC-Phase.",
    "When Asset Groups are selected, this policy applies only to": "Wenn Asset-Gruppen ausgewählt sind, gilt diese Richtlinie nur für",
    "Cloud Workload Container Images, Container Instances, Hosts (VM Instances), Serverless Functions or Kubernetes Workloads":
      "Cloud-Workload-Container-Images, Container-Instanzen, Hosts (VM-Instanzen), Serverless-Funktionen oder Kubernetes-Workloads",
    "asset types in those groups that are available at the": "Asset-Typen in diesen Gruppen, die verfügbar sind in der",
    "Other asset types in the Asset Groups are not evaluated.": "Andere Asset-Typen in den Asset-Gruppen werden nicht ausgewertet.",
    "Select an Action": "Aktion auswählen",
    "Issue Severity": "Schweregrad des Problems",
    "Add remediation guidance": "Behebungshinweise hinzufügen",
    "Issues are automatically resolved when the finding is no longer applicable to the asset or when the affected asset is removed from the inventory.":
      "Probleme werden automatisch gelöst, wenn der Befund nicht mehr auf das Asset zutrifft oder das betroffene Asset aus dem Inventar entfernt wird.",
    "Preview Selection": "Vorschau der Auswahl",
    "Selected Asset Preview": "Vorschau des ausgewählten Assets",
    "Add labels...": "Labels hinzufügen...",
    "Maximum of 50 labels": "Maximal 50 Labels",
    "Start Timestamp": "Startzeitstempel",
    "End Timestamp": "Endzeitstempel",
    "Last Modified By": "Zuletzt geändert von",
    "Findings Count": "Anzahl der Befunde",
    "Issues Count": "Anzahl der Probleme",
    "Cases Count": "Anzahl der Fälle",
    "Compliance Standards": "Compliance-Standards",
    "Last Execution Time": "Letzte Ausführungszeit",
    "SaaS Pillar": "SaaS-Säule",
    "All Matching Filter Criteria": "Alle, die den Filterkriterien entsprechen",
    "From Rules List": "Aus Regelliste",
    "Select rules for this Policy": "Regeln für diese Richtlinie auswählen",
    "Select which rules to be alerted on by using the options available below": "Wählen Sie mithilfe der folgenden Optionen aus, für welche Regeln Warnungen ausgegeben werden sollen",
    "Add details for this Policy": "Details für diese Richtlinie hinzufügen",
    "View selected": "Ausgewählte anzeigen",
    "Making this selection will likely create a large volume of issues. For a more relevant and high fidelity issues, use a filtered selection.":
      "Diese Auswahl führt wahrscheinlich zu einer großen Anzahl von Problemen. Verwenden Sie für relevantere und präzisere Probleme eine gefilterte Auswahl.",
    "Select which scope to be alerted on by using the options available below": "Wählen Sie mithilfe der folgenden Optionen aus, für welchen Geltungsbereich Warnungen ausgegeben werden sollen",
    "From Asset Groups": "Aus Asset-Gruppen",
    "Create a Policy for Issue creation": "Richtlinie zur Problemerstellung erstellen",
    "Create a Policy for Prevention": "Richtlinie zur Prävention erstellen",
    "From Cloud Accounts": "Aus Cloud-Konten",
    "Define the detection rule by specifying the criteria to match relevant Malware findings. You can also add exclusion criteria to filter out any Malware findings that meet specific conditions you want to exclude from this policy.":
      "Definieren Sie die Erkennungsregel, indem Sie Kriterien für passende Malware-Befunde angeben. Sie können auch Ausschlusskriterien hinzufügen, um Malware-Befunde herauszufiltern, die bestimmte Bedingungen erfüllen und von dieser Richtlinie ausgeschlossen werden sollen.",
    "Set a name and description for the policy.": "Legen Sie einen Namen und eine Beschreibung für die Richtlinie fest.",
    "Enter a name for your policy": "Geben Sie einen Namen für Ihre Richtlinie ein",
    "Enter a description": "Geben Sie eine Beschreibung ein",
    "CVE Publish Date": "CVE-Veröffentlichungsdatum",
    "CVE Description": "CVE-Beschreibung",
    "Package PURL": "Paket-PURL",
    "Package File Creation Time": "Erstellungszeit der Paketdatei",
    "Package Licenses": "Paketlizenzen",
    "Layer ID": "Layer-ID",
    "Image": "Image",
    "Is derived": "Ist abgeleitet",
    "Image Name": "Image-Name",
    "Volume Asset IDs": "Volume-Asset-IDs",
    "Volume Path": "Volume-Pfad",
    "Platform ID": "Plattform-ID",
    "Vulnerability Source Asset ID": "Asset-ID der Schwachstellenquelle",
    "Vulnerability Source Asset": "Asset der Schwachstellenquelle",
    "Kubernetes Cluster Name": "Name des Kubernetes-Clusters",
    "Kubernetes Namespace Name": "Name des Kubernetes-Namespace",
    "AST Intrusion Level": "AST-Eindringtiefe",
    "Affected Services": "Betroffene Dienste",
    "Affected Service Versions": "Betroffene Dienstversionen",
    "Authentication Status": "Authentifizierungsstatus",
    "AST Vulnerability Status": "AST-Schwachstellenstatus",
    "Create a query to select the Findings to take an action on": "Erstellen Sie eine Abfrage, um die Befunde auszuwählen, für die eine Aktion ausgeführt werden soll",
    "Create a query to select the Findings to take an action on.": "Erstellen Sie eine Abfrage, um die Befunde auszuwählen, für die eine Aktion ausgeführt werden soll.",
    "Limit the assets the policy applies to by setting a scope.": "Beschränken Sie die Assets, für die die Richtlinie gilt, indem Sie einen Geltungsbereich festlegen.",
    "Scope to Asset Groups": "Geltungsbereich auf Asset-Gruppen festlegen",
    "Choose one or more Asset Groups if you want to limit this Policy to Findings from those specific Assets.":
      "Wählen Sie eine oder mehrere Asset-Gruppen aus, wenn Sie diese Richtlinie auf Befunde dieser bestimmten Assets beschränken möchten.",
    "Create new Asset Group": "Neue Asset-Gruppe erstellen",
    "The selected actions will be executed automatically when a finding matches a policy.": "Die ausgewählten Aktionen werden automatisch ausgeführt, wenn ein Befund einer Richtlinie entspricht.",
    "Global Actions": "Globale Aktionen",
    "These actions are available for all Findings.": "Diese Aktionen sind für alle Befunde verfügbar.",
    "Set Issue Severity": "Schweregrad des Problems festlegen",
    "Create an Issue for each matching Finding.": "Für jeden passenden Befund ein Problem erstellen.",
    "Ignore matching Findings, do not create Issues": "Passende Befunde ignorieren, keine Probleme erstellen",
    "Use Default CVE Severity": "Standard-CVE-Schweregrad verwenden",
    "Last Triggered": "Zuletzt ausgelöst",
    "Related Detection Rules": "Zugehörige Erkennungsregeln",
    "Is Custom": "Ist benutzerdefiniert",
    "Asset Group IDs": "Asset-Gruppen-IDs",
    "Override Issue Severity": "Schweregrad des Problems überschreiben",
    "Is Editable": "Ist bearbeitbar",
    "Is Cloneable": "Ist klonbar",
    "Suggestion ID": "Vorschlags-ID",
    "Triggers & Actions": "Auslöser und Aktionen",
    "Application Security policies define how to respond to code, image, and misconfiguration findings. You can either block the risk (prevent) or create an issue for remediation (detect). Use them to enforce consistent, automated responses to risks before they reach production":
      "Application Security-Richtlinien legen fest, wie auf Befunde zu Code, Images und Fehlkonfigurationen reagiert wird. Sie können das Risiko entweder blockieren (Prävention) oder ein Problem zur Behebung erstellen (Erkennung). Nutzen Sie sie, um konsistente, automatisierte Reaktionen auf Risiken durchzusetzen, bevor diese die Produktion erreichen",
    "Code & Image scanners": "Code- und Image-Scanner",
    "Scans your code and images for security issues throughout the development lifecycle.":
      "Scannt Ihren Code und Ihre Images während des gesamten Entwicklungslebenszyklus auf Sicherheitsprobleme.",
    "CI/CD configuration scanner": "CI/CD-Konfigurationsscanner",
    "Scans your CI/CD and Version Control System (VCS) environments for insecure configurations.":
      "Scannt Ihre CI/CD- und Versionskontrollsystem-Umgebungen (VCS) auf unsichere Konfigurationen.",
    "Drift detection scanner": "Scanner zur Drift-Erkennung",
    "Specify the conditions define this policy. When you select multiple finding types, only common filters are available. To apply specific filters for each finding type, use the \"OR\" operator to create separate conditions groups.":
      "Geben Sie die Bedingungen an, die diese Richtlinie definieren. Wenn Sie mehrere Befundtypen auswählen, sind nur gemeinsame Filter verfügbar. Um für jeden Befundtyp spezifische Filter anzuwenden, verwenden Sie den Operator \"OR\", um separate Bedingungsgruppen zu erstellen.",
    "Finding Type": "Befundtyp",
    "Add filter": "Filter hinzufügen",
    "Add condition group": "Bedingungsgruppe hinzufügen",
    "Shared": "Geteilt",
    "Shared filters": "Geteilte Filter",
    "Finding Category": "Befundkategorie",
    "The category of detected security findings. A category can include multiple finding types.":
      "Die Kategorie erkannter Sicherheitsbefunde. Eine Kategorie kann mehrere Befundtypen umfassen.",
    "Code filters": "Code-Filter",
    "Indicates whether a finding is part of the security technical debt or newly introduced. Backlog: Findings that existed before the Cortex scanner was first enabled or before a third-party scanner was first ingested for the repository. New: Findings detected afterward.":
      "Gibt an, ob ein Befund Teil der technischen Sicherheitsschulden ist oder neu hinzugekommen ist. Backlog: Befunde, die bereits existierten, bevor der Cortex-Scanner erstmals aktiviert oder ein Drittanbieter-Scanner erstmals für das Repository aufgenommen wurde. New: Danach erkannte Befunde.",
    "Filters findings by their assigned risk impact level to (e.g., Critical, High, Medium, or Low).":
      "Filtert Befunde nach der ihnen zugewiesenen Risikoauswirkungsstufe (z. B. Kritisch, Hoch, Mittel oder Niedrig).",
    "Respect Developer Suppression": "Unterdrückung durch Entwickler berücksichtigen",
    "AppSec Rule": "AppSec-Regel",
    "AppSec Rule Label": "AppSec-Regel-Label",
    "AppSec Rule Category": "AppSec-Regelkategorie",
    "Has An Automated Fix": "Hat automatisierte Korrektur",
    "Iac Tag": "IaC-Tag",
    "Compliance Controls": "Compliance-Kontrollen",
    "Specific security controls related to the finding within a compliance standard (e.g., \"Encryption at Rest\"":
      "Bestimmte Sicherheitskontrollen innerhalb eines Compliance-Standards, die mit dem Befund zusammenhängen (z. B. \"Encryption at Rest\"",
    "Filters findings based on specific regulatory frameworks like PCI-DSS, SOC2, or HIPAA.":
      "Filtert Befunde anhand bestimmter regulatorischer Frameworks wie PCI-DSS, SOC2 oder HIPAA.",
    "Filters Infrastructure-as-Code (IaC) resources based on metadata tags (e.g., Environment: Production, Owner: DevOps).":
      "Filtert Infrastructure-as-Code-Ressourcen (IaC) anhand von Metadaten-Tags (z. B. Environment: Production, Owner: DevOps).",
    "Identifies findings that can be resolved automatically via a generated Pull Request or an automated patch.":
      "Identifiziert Befunde, die automatisch über einen generierten Pull Request oder einen automatisierten Patch behoben werden können.",
    "Secret Validity": "Gültigkeit des Geheimnisses",
    "Filters based on whether the detected secret is still active and usable by an attacker (e.g., Valid, Invalid, No Validation, or Unavailable).":
      "Filtert danach, ob das erkannte Geheimnis noch aktiv ist und von einem Angreifer verwendet werden kann (z. B. Valid, Invalid, No Validation oder Unavailable).",
    "Repository File Path": "Dateipfad im Repository",
    "Filters based on the specific location of a file within your source code repository.":
      "Filtert anhand des konkreten Speicherorts einer Datei in Ihrem Quellcode-Repository.",
    "Image filters": "Image-Filter",
    "Secret Type": "Geheimnistyp",
    "Filters findings by the category of the exposed secret or the service it belongs to (e.g., AWS Access Key, Stripe API Token, SSH Private Key, or Password).":
      "Filtert Befunde nach der Kategorie des offengelegten Geheimnisses oder dem Dienst, zu dem es gehört (z. B. AWS Access Key, Stripe API Token, SSH Private Key oder Password).",
    "Targets specific files or directories located within a container image filesystem.":
      "Zielt auf bestimmte Dateien oder Verzeichnisse im Dateisystem eines Container-Images ab.",
    "Filters by the specific name of a file discovered in a scan (e.g., id_rsa, passwd, or config.yaml).":
      "Filtert nach dem konkreten Namen einer bei einem Scan gefundenen Datei (z. B. id_rsa, passwd oder config.yaml).",
    "File Size": "Dateigröße",
    "Filters based on the total data size of the file (e.g., files larger than 100MB or exactly 0KB).":
      "Filtert anhand der gesamten Datengröße der Datei (z. B. Dateien größer als 100MB oder genau 0KB).",
    "File Line": "Dateizeile",
    "Identifies the specific line number within a file where the finding was detected (e.g., line 42).":
      "Gibt die konkrete Zeilennummer in einer Datei an, in der der Befund erkannt wurde (z. B. Zeile 42).",
    "File Owner Name": "Name des Dateibesitzers",
    "Filters by the username of the account that owns the file on the system (e.g., root, admin, or www-data).":
      "Filtert nach dem Benutzernamen des Kontos, dem die Datei auf dem System gehört (z. B. root, admin oder www-data).",
    "File Group Name": "Name der Dateigruppe",
    "Filters by the name of the primary group assigned to the file (e.g., sudo, docker, or users).":
      "Filtert nach dem Namen der primären Gruppe, die der Datei zugewiesen ist (z. B. sudo, docker oder users).",
    "File Group ID": "Dateigruppen-ID",
    "Filters by the numeric Group ID (GID) assigned to the file (e.g., GID 1001).":
      "Filtert nach der numerischen Gruppen-ID (GID), die der Datei zugewiesen ist (z. B. GID 1001).",
    "File Permissions - owner": "Dateiberechtigungen - Besitzer",
    "Filters by the specific access rights granted to the file's owner (e.g., rwx, rw, or r).":
      "Filtert nach den konkreten Zugriffsrechten, die dem Besitzer der Datei gewährt wurden (z. B. rwx, rw oder r).",
    "File Permissions - group": "Dateiberechtigungen - Gruppe",
    "Filters by the access rights granted to members of the file's assigned group (e.g., r, rw or rwx).":
      "Filtert nach den Zugriffsrechten, die Mitgliedern der zugewiesenen Gruppe der Datei gewährt wurden (z. B. r, rw oder rwx).",
    "File Permissions - others": "Dateiberechtigungen - Andere",
    "Filters by \"World\" permissions—access granted to any user on the system (e.g., checking for rw to find publicly writable files).":
      "Filtert nach \"World\"-Berechtigungen - Zugriff, der jedem Benutzer auf dem System gewährt wird (z. B. Prüfung auf rw, um öffentlich beschreibbare Dateien zu finden).",
    "File Owner ID": "Besitzer-ID der Datei",
    "Filters by the numeric User ID (UID) of the file owner (e.g., UID 0 for root).":
      "Filtert nach der numerischen Benutzer-ID (UID) des Dateibesitzers (z. B. UID 0 für root).",
    "Filters for vulnerabilities with known, documented exploits available in the wild (e.g., CISA KEV list).":
      "Filtert nach Schwachstellen mit bekannten, dokumentierten Exploits, die in freier Wildbahn verfügbar sind (z. B. CISA-KEV-Liste).",
    "CVE ID": "CVE ID",
    "Filters by the unique Common Vulnerabilities and Exposures identifier associated with the finding (e.g., CVE-2021-44228).":
      "Filtert nach der eindeutigen Common Vulnerabilities and Exposures-Kennung, die dem Befund zugeordnet ist (z. B. CVE-2021-44228).",
    "Filters by the Common Vulnerability Scoring System impact level, often derived from a numerical score (e.g., Critical, High, Medium, or Low).":
      "Filtert nach der Auswirkungsstufe gemäß Common Vulnerability Scoring System, die häufig aus einer numerischen Bewertung abgeleitet wird (z. B. Kritisch, Hoch, Mittel oder Niedrig).",
    "Filters findings based on their numerical CVSS score, typically ranging from 0.0 to 10.0 (e.g., values greater than or equal to 7.5).":
      "Filtert Befunde anhand ihres numerischen CVSS-Scores, der typischerweise zwischen 0.0 und 10.0 liegt (z. B. Werte größer oder gleich 7.5).",
    "Filters based on the Exploit Prediction Scoring System probability score, which estimates the likelihood of a vulnerability being exploited in the next 30 days (e.g., scores higher than 0.1).":
      "Filtert anhand des Wahrscheinlichkeitswerts des Exploit Prediction Scoring System, der die Wahrscheinlichkeit schätzt, dass eine Schwachstelle in den nächsten 30 Tagen ausgenutzt wird (z. B. Werte über 0.1).",
    "Has A Fix": "Korrektur vorhanden",
    "Filter findings with a documented resolution or patch available.": "Befunde filtern, für die eine dokumentierte Lösung oder ein Patch verfügbar ist.",
    "Is Kev": "Ist KEV",
    "Filters for vulnerabilities listed in the CISA Known Exploited Vulnerabilities catalog, which are confirmed to be actively exploited in the wild.":
      "Filtert nach Schwachstellen, die im CISA-Katalog Known Exploited Vulnerabilities aufgeführt sind und nachweislich aktiv in freier Wildbahn ausgenutzt werden.",
    "CVE Fix Available Date": "Verfügbarkeitsdatum der CVE-Korrektur",
    "Filters based on the date a fix or patch was first released for the vulnerability (e.g., fixes released within the last 30 days).":
      "Filtert anhand des Datums, an dem erstmals eine Korrektur oder ein Patch für die Schwachstelle veröffentlicht wurde (z. B. Korrekturen, die in den letzten 30 Tagen veröffentlicht wurden).",
    "Package Version": "Paketversion",
    "Targets specific versions or ranges of a software package (e.g., 1.2.3 or <2.0.0).":
      "Zielt auf bestimmte Versionen oder Versionsbereiche eines Softwarepakets ab (z. B. 1.2.3 oder <2.0.0).",
    "Filters by the name of the specific library or software component (e.g., openssl, lodash, or log4j-core).":
      "Filtert nach dem Namen der jeweiligen Bibliothek oder Softwarekomponente (z. B. openssl, lodash oder log4j-core).",
    "Filters based on the date the vulnerability was officially added to the CVE registry.":
      "Filtert anhand des Datums, an dem die Schwachstelle offiziell in das CVE-Verzeichnis aufgenommen wurde.",
    "Targets specific characteristics of a vulnerability's impact or ease of use (e.g., Remote Execution, DoS - High, or Attack Complexity: Low).":
      "Zielt auf bestimmte Merkmale der Auswirkung oder Ausnutzbarkeit einer Schwachstelle ab (z. B. Remote Execution, DoS - High oder Attack Complexity: Low).",
    "Filters findings by searching for specific keywords or technical details within the official vulnerability summary (e.g., searching for \"buffer overflow,\" \"zero-day,\" or \"unauthenticated access\").":
      "Filtert Befunde durch die Suche nach bestimmten Schlüsselwörtern oder technischen Details in der offiziellen Schwachstellenzusammenfassung (z. B. Suche nach \"buffer overflow\", \"zero-day\" oder \"unauthenticated access\").",
    "Identifies the specific version(s) of a package or software where the vulnerability has been patched (e.g., 1.2.4, 2.0.1).":
      "Gibt die Version(en) eines Pakets oder einer Software an, in der die Schwachstelle gepatcht wurde (z. B. 1.2.4, 2.0.1).",
    "Grace Period": "Karenzzeit",
    "The number of days a finding is allowed to exist before it begins blocking PRs or builds. This is calculated from the Fix Date (for fixable issues) or the Publish Date (if no fix is available).":
      "Die Anzahl der Tage, die ein Befund bestehen darf, bevor er PRs oder Builds blockiert. Sie wird ab dem Korrekturdatum (bei behebbaren Problemen) oder dem Veröffentlichungsdatum (wenn keine Korrektur verfügbar ist) berechnet.",
    "Package Popularity": "Paketbeliebtheit",
    "Identifies packages based on their adoption metrics (e.g., GitHub stars, download counts). Low popularity can often signal higher supply chain risk.":
      "Identifiziert Pakete anhand ihrer Verbreitungskennzahlen (z. B. GitHub-Sterne, Downloadzahlen). Eine geringe Beliebtheit kann häufig auf ein höheres Lieferkettenrisiko hinweisen.",
    "Package Deprecated": "Paket veraltet",
    "Filters for packages that have been officially marked as \"deprecated\" or \"end-of-life\" by their maintainers":
      "Filtert nach Paketen, die von ihren Maintainern offiziell als \"deprecated\" oder \"end-of-life\" gekennzeichnet wurden",
    "Package Maintained": "Paket gepflegt",
    "Filters based on the activity level of the package's repository, such as the frequency of recent commits or bug fixes":
      "Filtert anhand des Aktivitätsniveaus des Paket-Repositorys, z. B. der Häufigkeit aktueller Commits oder Fehlerbehebungen",
    "Evaluates the long-term viability of a package based on community health, update frequency, and maintenance history":
      "Bewertet die langfristige Zukunftsfähigkeit eines Pakets anhand von Community-Integrität, Aktualisierungshäufigkeit und Wartungsverlauf",
    "Package Dependency": "Paketabhängigkeit",
    "Allows you to filter by the specific relationship of a package—whether it is a direct dependency or a transitive (indirect) one":
      "Ermöglicht das Filtern nach der konkreten Beziehung eines Pakets – ob es sich um eine direkte oder eine transitive (indirekte) Abhängigkeit handelt",
    "Is AI/ML": "Ist KI/ML",
    "Identifies libraries and frameworks specifically associated with Artificial Intelligence and Machine Learning (e.g., PyTorch, TensorFlow).":
      "Identifiziert Bibliotheken und Frameworks, die speziell mit künstlicher Intelligenz und maschinellem Lernen verbunden sind (z. B. PyTorch, TensorFlow).",
    "Affected Software": "Betroffene Software",
    "Filters findings based on the specific software components, applications, or libraries impacted by a vulnerability (e.g., OpenSSL)":
      "Filtert Befunde anhand der konkreten Softwarekomponenten, Anwendungen oder Bibliotheken, die von einer Schwachstelle betroffen sind (z. B. OpenSSL)",
    "A boolean (True/False) indicator that identifies whether a vulnerability was inherited from the base image or introduced by the application layers (e.g., True means the flaw exists in the parent image, such as node:alpine or ubuntu:latest).":
      "Ein boolescher Indikator (True/False), der angibt, ob eine Schwachstelle vom Basis-Image geerbt oder durch die Anwendungsschichten eingeführt wurde (z. B. bedeutet True, dass der Fehler im übergeordneten Image wie node:alpine oder ubuntu:latest vorhanden ist).",
    "Filters findings based on the specific filesystem layer of a container image, identified by its unique SHA-256 hash.":
      "Filtert Befunde anhand der konkreten Dateisystemschicht eines Container-Images, die durch ihren eindeutigen SHA-256-Hash identifiziert wird.",
    "The broad name of the OS (e.g., Linux, Windows).": "Der allgemeine Name des Betriebssystems (z. B. Linux, Windows).",
    "The specific flavor of the OS (e.g., Ubuntu, RedHat, Debian).": "Die konkrete Variante des Betriebssystems (z. B. Ubuntu, RedHat, Debian).",
    "The specific version or \"point release\" of the distribution (e.g., 22.04 or 8.5).":
      "Die konkrete Version bzw. das \"Point Release\" der Distribution (z. B. 22.04 oder 8.5).",
    "Filters based on when the package file was first generated or built.": "Filtert danach, wann die Paketdatei erstmals generiert oder erstellt wurde.",
    "Groups OS versions by their common ancestry (e.g., Debian-based, RHEL-based).":
      "Gruppiert Betriebssystemversionen nach ihrer gemeinsamen Abstammung (z. B. Debian-basiert, RHEL-basiert).",
    "Filters by the specific legal license assigned to a package (e.g., MIT, Apache 2.0).":
      "Filtert nach der konkreten Lizenz, die einem Paket zugewiesen ist (z. B. MIT, Apache 2.0).",
    "Filters by the Package URL (PURL), a standardized way to identify packages across different ecosystems (e.g., pkg:npm/lodash@4.17.21).":
      "Filtert nach der Package URL (PURL), einer standardisierten Methode zur Identifizierung von Paketen über verschiedene Ökosysteme hinweg (z. B. pkg:npm/lodash@4.17.21).",
    "The ecosystem the package belongs to (e.g., npm, PyPI, Maven, Go, or OS-level packages).":
      "Das Ökosystem, zu dem das Paket gehört (z. B. npm, PyPI, Maven, Go oder Pakete auf Betriebssystemebene).",
    "Filters by the specific underlying hardware or cloud architecture (e.g., x86_64, arm64).":
      "Filtert nach der konkreten zugrunde liegenden Hardware- oder Cloud-Architektur (z. B. x86_64, arm64).",
    "Image Provider": "Image-Anbieter",
    "Identifies the source or registry where the package was retrieved (e.g., Docker Hub, JFrog Artifactory, or AWS ECR).":
      "Gibt die Quelle oder Registry an, aus der das Paket abgerufen wurde (z. B. Docker Hub, JFrog Artifactory oder AWS ECR).",
    "Filters by the action required to resolve a vulnerability": "Filtert nach der Aktion, die zur Behebung einer Schwachstelle erforderlich ist",
    "Filters by the unique identifier for a specific category of finding (finding type id)":
      "Filtert nach der eindeutigen Kennung einer bestimmten Befundkategorie (finding type id)",
    "License Type": "Lizenztyp",
    "Filters by the specific name of the legal license assigned to a package (e.g., MPL-2.0, MS-RL, or Sendmail-8.23).":
      "Filtert nach dem konkreten Namen der Lizenz, die einem Paket zugewiesen ist (z. B. MPL-2.0, MS-RL oder Sendmail-8.23).",
    "License Category": "Lizenzkategorie",
    "Groups packages by their legal risk or permission category (e.g., Non permissive, Strong copyleft, Weak copyleft).":
      "Gruppiert Pakete nach ihrem rechtlichen Risiko oder ihrer Berechtigungskategorie (z. B. Non permissive, Strong copyleft, Weak copyleft).",
    "Maintained": "Gepflegt",
    "Popularity": "Beliebtheit",
    "Filters by the specific Common Weakness Enumeration identifier assigned to a software flaw (e.g., CWE-79 for Cross-Site Scripting or CWE-89 for SQL Injection).":
      "Filtert nach der konkreten Common Weakness Enumeration-Kennung, die einem Softwarefehler zugewiesen ist (z. B. CWE-79 für Cross-Site Scripting oder CWE-89 für SQL Injection).",
    "Language": "Sprache",
    "Filters findings based on the programming language of the source code where the issue was detected (e.g., Java, Python, Go, or JavaScript).":
      "Filtert Befunde anhand der Programmiersprache des Quellcodes, in dem das Problem erkannt wurde (z. B. Java, Python, Go oder JavaScript).",
    "OWASP Category": "OWASP-Kategorie",
    "Maps findings to the \"Top 10\" web application security risks defined by the Open Web Application Security Project (e.g., A01:2021-Broken Access Control).":
      "Ordnet Befunde den \"Top 10\"-Sicherheitsrisiken für Webanwendungen zu, die vom Open Web Application Security Project definiert wurden (z. B. A01:2021-Broken Access Control).",
    "Identifies the origin of the data or the specific tool that reported the finding (e.g., semgrep, checkmarx or other specific third-party security integration).":
      "Gibt die Herkunft der Daten oder das konkrete Tool an, das den Befund gemeldet hat (z. B. semgrep, checkmarx oder eine andere Sicherheitsintegration eines Drittanbieters).",
    "Filters findings based on the specific scanning engine or technique used to identify them":
      "Filtert Befunde anhand der konkreten Scan-Engine oder Technik, mit der sie identifiziert wurden",
    "File SHA256": "Datei-SHA256",
    "Create asset groups": "Asset-Gruppen erstellen",
    "Build images do not support application-related filters.": "Build-Images unterstützen keine anwendungsbezogenen Filter.",
    "Select either a predefined asset group or apply dynamic filters to target relevant assets. If no selection is made, all assets within your granted scope are included. The policy scope is determined by your SBAC permissions at the time the policy is saved (creation or update). Changes to your SBAC do not automatically modify existing policies.":
      "Wählen Sie entweder eine vordefinierte Asset-Gruppe aus oder wenden Sie dynamische Filter an, um die relevanten Assets festzulegen. Wenn Sie keine Auswahl treffen, werden alle Assets in Ihrem gewährten Geltungsbereich einbezogen. Der Geltungsbereich der Richtlinie wird durch Ihre SBAC-Berechtigungen zum Zeitpunkt des Speicherns der Richtlinie (Erstellung oder Aktualisierung) bestimmt. Änderungen an Ihrer SBAC wirken sich nicht automatisch auf bestehende Richtlinien aus.",
    "Application Business Criticality": "Geschäftskritikalität der Anwendung",
    "Application Business Owner": "Geschäftlicher Besitzer der Anwendung",
    "Image Names": "Image-Namen",
    "Source Branch": "Quell-Branch",
    "Repository Id": "Repository-ID",
    "Is Public Repository": "Ist öffentliches Repository",
    "Has Deployed Assets": "Hat bereitgestellte Assets",
    "Has Internet-exposed deployed assets": "Hat mit dem Internet verbundene bereitgestellte Assets",
    "Has deployed assets with Access to sensitive data": "Hat bereitgestellte Assets mit Zugriff auf sensible Daten",
    "Has deployed assets with privileged capabilities": "Hat bereitgestellte Assets mit privilegierten Berechtigungen",
    "Image Architecture": "Image-Architektur",
    "Organization URL": "Organisations-URL",
    "Automated security scanning that runs every 12 hours or on manual request, according to the repository scan configuration.":
      "Automatisierter Sicherheitsscan, der gemäß der Scan-Konfiguration des Repositorys alle 12 Stunden oder auf manuelle Anforderung ausgeführt wird.",
    "Block CI": "CI blockieren",
    "Block PR": "PR blockieren",
    "PR Comment": "PR-Kommentar",
    "Registry Image Scan": "Registry-Image-Scan",
    "Report CI": "An CI melden",
    "Security scanning of container images in the registry.": "Sicherheitsscan von Container-Images in der Registry.",
    "Security scans triggered during the CI pipeline after a container image is built from code.":
      "Sicherheitsscans, die in der CI-Pipeline ausgelöst werden, nachdem ein Container-Image aus Code erstellt wurde.",
    "Security scans triggered during the CI pipeline to evaluate source code.":
      "Sicherheitsscans, die in der CI-Pipeline ausgelöst werden, um Quellcode zu bewerten.",
    "Security scans triggered when a pull request or merge request is created or updated in your version control system.":
      "Sicherheitsscans, die ausgelöst werden, wenn in Ihrem Versionskontrollsystem ein Pull Request oder Merge Request erstellt oder aktualisiert wird.",
    "Select the triggers that enforce this policy. For each trigger, select at least one action to take when the conditions and scope are met.":
      "Wählen Sie die Auslöser aus, die diese Richtlinie durchsetzen. Wählen Sie für jeden Auslöser mindestens eine Aktion aus, die ausgeführt werden soll, wenn die Bedingungen und der Geltungsbereich erfüllt sind.",
    "Your policy is ready. Review the details and click Done to enable it.": "Ihre Richtlinie ist bereit. Überprüfen Sie die Details und klicken Sie auf \"Fertig\", um sie zu aktivieren.",
    "Application Security Policy": "Application Security-Richtlinie",
    "Code & Image Scanner policy": "Richtlinie für Code- und Image-Scanner",
    "Important": "Wichtig",
    "Override severity": "Schweregrad überschreiben",
    "Keep finding's severity": "Schweregrad des Befunds beibehalten",
    "every 12 hours": "alle 12 Stunden",
    "Based on your coverage and findings, we recommend the following prevention policies. You can apply them as suggested, review and edit them using View details, or dismiss a recommendation. If dismissed, a new recommendation may appear.":
      "Basierend auf Ihrer Abdeckung und Ihren Befunden empfehlen wir die folgenden Präventionsrichtlinien. Sie können sie wie vorgeschlagen anwenden, sie über \"Details anzeigen\" überprüfen und bearbeiten oder eine Empfehlung verwerfen. Nach dem Verwerfen wird möglicherweise eine neue Empfehlung angezeigt.",
    "Dismiss": "Verwerfen",
    "View Assets >": "Assets anzeigen >",
    // The body text AND title of each recommendation card (previously registered here — titles like
    // "Block KEV vulnerabilities", and the body as fixed exact-match/pattern entries) have been removed
    // from this dictionary file: content.js now excludes both
    // cas-recommendations-panel p[ucardcontent] and cas-recommendations-panel u-card-title from the
    // fixed dictionary and makes them eligible for AI (dynamic) translation instead, so a title without
    // a fixed-dictionary entry doesn't stay in English while the body is translated.
    "Select severity": "Schweregrad auswählen",
    "Show rule definition": "Regeldefinition anzeigen",
    "Rule definition": "Regeldefinition",
    "Rule settings": "Regeleinstellungen",
    "Select scanner": "Scanner auswählen",
    "Agentless disk-scan": "Agentloser Datenträgerscan",
    "Scan storage snapshots for risks without requiring a resident agent": "Speicher-Snapshots ohne residenten Agent auf Risiken scannen",
    "Scan cluster resources and configurations for compliance and security risks via the Kubernetes API":
      "Cluster-Ressourcen und -Konfigurationen über die Kubernetes API auf Compliance- und Sicherheitsrisiken scannen",
    "XDR agent": "XDR-Agent",
    "Offering a tailored approach to compliance validation by executing user-defined Python scripts":
      "Bietet einen maßgeschneiderten Ansatz für die Compliance-Validierung durch Ausführung benutzerdefinierter Python-Skripte",
    "Refresh Needed": "Aktualisierung erforderlich",
    "The page might be outdated or the session is expired": "Die Seite ist möglicherweise veraltet oder die Sitzung ist abgelaufen",
    "Select the scanner type to execute the custom detection rule and its associated script":
      "Wählen Sie den Scannertyp aus, der die benutzerdefinierte Erkennungsregel und das zugehörige Skript ausführen soll",
    "Select operating system": "Betriebssystem auswählen",
    "Input file(s) path": "Pfad der Eingabedatei(en)",
    "Input file(s) path is required": "Der Pfad der Eingabedatei(en) ist erforderlich",
    "Add remediation steps here": "Behebungsschritte hier hinzufügen",
    "Severity is required": "Schweregrad ist erforderlich",
    "Kubernetes Resources is required": "Kubernetes-Ressourcen sind erforderlich",
    "Select Kubernetes Resources": "Kubernetes-Ressourcen auswählen",
    "Review custom code execution agreement": "Vereinbarung zur Ausführung von benutzerdefiniertem Code prüfen",
    "You understand and agree that the Python scripts you provided for this \"Custom Code Execution\" capability will be executed in your cloud environment(s). By clicking \"I agree\", you acknowledge and agree to the following terms and conditions:":
      "Sie verstehen und stimmen zu, dass die Python-Skripte, die Sie für diese Funktion \"Custom Code Execution\" bereitgestellt haben, in Ihren Cloud-Umgebungen ausgeführt werden. Durch Klicken auf \"I agree\" bestätigen Sie die folgenden Geschäftsbedingungen und stimmen ihnen zu:",
    "This capability is solely for the purpose of enabling you to define the compliance check rules for your cloud environment(s). Any other purposes are expressly prohibited.":
      "Diese Funktion dient ausschließlich dazu, Ihnen die Definition von Compliance-Prüfregeln für Ihre Cloud-Umgebungen zu ermöglichen. Jegliche anderen Zwecke sind ausdrücklich untersagt.",
    "Any actions involving": "Jegliche Aktionen mit",
    "WRITE, MODIFY": "WRITE, MODIFY",
    ", or": ", oder",
    "operations of your cloud environment(s) are strictly prohibited. It is your responsibility to ensure that your custom Python scripts only perform read-only operations of your cloud environment(s) explicitly for compliance check purposes.":
      "Vorgängen in Ihren Cloud-Umgebungen sind strengstens untersagt. Es liegt in Ihrer Verantwortung sicherzustellen, dass Ihre benutzerdefinierten Python-Skripte ausschließlich Lesevorgänge in Ihren Cloud-Umgebungen und nur zu Zwecken der Compliance-Prüfung ausführen.",
    "You are solely responsible for the quality, content, use, and execution results of your Python script. You assume all risks and liabilities arising from executing your Python script(s), including any potential errors, damages, or consequences resulting from its use.":
      "Sie tragen die alleinige Verantwortung für die Qualität, den Inhalt, die Verwendung und die Ausführungsergebnisse Ihres Python-Skripts. Sie übernehmen alle Risiken und Haftungen, die sich aus der Ausführung Ihrer Python-Skripte ergeben, einschließlich möglicher Fehler, Schäden oder Folgen aus deren Verwendung.",
    "I agree": "Ich stimme zu",
    "Custom code execution approved": "Ausführung von benutzerdefiniertem Code genehmigt",
    "View agreement": "Vereinbarung anzeigen",
    "Attack Path is now powered by the Graph engine.": "Attack Path basiert jetzt auf der Graph-Engine.",
    "Same concept, more powerful. Existing": "Gleiches Konzept, leistungsstärker. Bestehende",
    "rules continue to work and can still be created.": "Regeln funktionieren weiterhin und können auch weiterhin erstellt werden.",
    "Graph rules leverage graph queries to monitor your environment for complex attack paths and potential breach paths":
      "Graph-Regeln nutzen Graph-Abfragen, um Ihre Umgebung auf komplexe Angriffspfade und potenzielle Kompromittierungspfade zu überwachen",
    "Configuration rules monitor your resource configurations for potential policy violations":
      "Configuration-Regeln überwachen Ihre Ressourcenkonfigurationen auf mögliche Richtlinienverstöße",
    "Data rules protect against malware and enable data classification": "Data-Regeln schützen vor Malware und ermöglichen die Datenklassifizierung",
    "Identity rules monitor the identities in your cloud environment for excess-or-unused permissions":
      "Identity-Regeln überwachen die Identitäten in Ihrer Cloud-Umgebung auf übermäßige oder ungenutzte Berechtigungen",
    "Network exposure rules detect assets exposed to the Internet": "Network exposure-Regeln erkennen Assets, die dem Internet ausgesetzt sind",
    "AI rules monitor your AI ecosystem for risks and misconfigurations": "KI-Regeln überwachen Ihr KI-Ökosystem auf Risiken und Fehlkonfigurationen",
    "Attack path detection using the previous rule engine. We recommend Graph for new rules":
      "Angriffspfaderkennung mit der bisherigen Regel-Engine. Für neue Regeln empfehlen wir Graph",
    "Define the rule (Rego)": "Regel definieren (Rego)",
    "For more information about the syntax": "Weitere Informationen zur Syntax",
    "read here": "finden Sie hier",
    "Assign compliance controls": "Compliance-Kontrollen zuweisen",
    "You can assign a rule to one or more custom compliance controls to tailor compliance checks to your organization's needs.":
      "Sie können eine Regel einer oder mehreren benutzerdefinierten Compliance-Kontrollen zuweisen, um die Compliance-Prüfungen an die Anforderungen Ihrer Organisation anzupassen.",
    "Add controls": "Kontrollen hinzufügen",
    "Rule settings → Assign controls": "Regeleinstellungen → Kontrollen zuweisen",
    "Apply selection": "Auswahl anwenden",
    "Critical severity": "Schweregrad kritisch",
    "High severity": "Schweregrad hoch",
    "Medium severity": "Schweregrad mittel",
    "Low severity": "Schweregrad niedrig",
    "(Critical severity)": "(Schweregrad kritisch)",
    "(High severity)": "(Schweregrad hoch)",
    "(Medium severity)": "(Schweregrad mittel)",
    "(Low severity)": "(Schweregrad niedrig)",
    "(Keep finding's severity)": "(Schweregrad des Befunds beibehalten)",
    "(every 12 hours)": "(alle 12 Stunden)",
    "Use default severity": "Standard-Schweregrad verwenden",
    "Third-party scanners can create issues only. They cannot perform blocking actions.":
      "Scanner von Drittanbietern können nur Probleme erstellen. Sie können keine Blockierungsaktionen ausführen.",
    "Filters findings by the file's unique cryptographic hash (e.g., searching for a specific infected binary or verifying file integrity across images).":
      "Filtert Befunde nach dem eindeutigen kryptografischen Hash der Datei (z. B. um nach einer bestimmten infizierten Binärdatei zu suchen oder die Dateiintegrität über Images hinweg zu überprüfen).",
    "Malware Verdict": "Malware-Urteil",
    "Malware Verdict indicates whether detected software is confirmed malicious (Malware) or potentially unwanted and risky (Grayware).":
      "Das Malware-Urteil gibt an, ob erkannte Software nachweislich bösartig (Malware) oder potenziell unerwünscht und riskant (Grayware) ist.",
    "Filters by a specific, unique finding identifier": "Filtert nach einer bestimmten, eindeutigen Befundkennung",
    "Determines whether findings suppressed by developers are considered during policy evaluation. Yes: Suppressed findings are excluded from policy evaluation. No: All findings are evaluated by the policy, including developer-suppressed ones.":
      "Legt fest, ob von Entwicklern unterdrückte Befunde bei der Richtlinienauswertung berücksichtigt werden. Ja: Unterdrückte Befunde werden von der Richtlinienauswertung ausgeschlossen. Nein: Alle Befunde werden von der Richtlinie ausgewertet, einschließlich der von Entwicklern unterdrückten.",
    "Filters findings generated by a specific AppSec detection rule.": "Filtert Befunde, die von einer bestimmten AppSec-Erkennungsregel generiert wurden.",
    "Could not parse detection rule": "Erkennungsregel konnte nicht geparst werden",
    "Filters findings based on labels attached to the matched AppSec rules, allowing you to filter and select multiple rules at once.":
      "Filtert Befunde anhand der Labels der übereinstimmenden AppSec-Regeln, sodass Sie mehrere Regeln gleichzeitig filtern und auswählen können.",
    "Filters based on the category of findings generated by the rule.": "Filtert anhand der Kategorie der von der Regel generierten Befunde.",
    "Scans your cloud environments to detect configuration drift between deployed resources and their IaC definitions.":
      "Scannt Ihre Cloud-Umgebungen, um Konfigurationsabweichungen zwischen bereitgestellten Ressourcen und ihren IaC-Definitionen zu erkennen.",
    "Exclude any items that match this query:": "Alle Elemente ausschließen, die dieser Abfrage entsprechen:",
    "Add filters": "Filter hinzufügen",
    "Results Preview": "Ergebnisvorschau",
    "Back to Policies": "Zurück zu den Richtlinien",
    "Vulnerability Issue Policies": "Richtlinien für Schwachstellenprobleme",
    "Vulnerability Policy": "Schwachstellenrichtlinie",
    "Vulnerability Policies": "Schwachstellenrichtlinien",
    "Choose Actions": "Aktionen auswählen",

    // --- Vulnerability Policies - Issue Creation screen ---
    "Vulnerability Policies - Issue Creation": "Schwachstellenrichtlinien - Problemerstellung",
    "Add Policy": "Richtlinie hinzufügen",
    "Exclusions": "Ausschlüsse",
    "Globally Ignored CVEs, Assets, and Asset Groups": "Global ignorierte CVEs, Assets und Asset-Gruppen",
    "Issue Creation": "Problemerstellung",
    "Match Criteria": "Übereinstimmungskriterien",
    "Prevention": "Prävention",
    "disabled": "deaktiviert",
    "CVE Default": "CVE-Standard",
    "CVEs Confirmed Vulnerable Externally": "Extern als anfällig bestätigte CVEs",
    "CVEs with 80%+ EPSS Scores": "CVEs mit EPSS-Scores ab 80 %",
    "CVEs with CVSS Critical Severity": "CVEs mit CVSS-Schweregrad Kritisch",
    "CVEs with CVSS High Severity": "CVEs mit CVSS-Schweregrad Hoch",
    "CVEs with CVSS Medium Severity": "CVEs mit CVSS-Schweregrad Mittel",
    "CVSS Severity = Critical": "CVSS-Schweregrad = Kritisch",
    "CVSS Severity = High": "CVSS-Schweregrad = Hoch",
    "CVSS Severity = Medium": "CVSS-Schweregrad = Mittel",
    "EPSS Score >= 80%": "EPSS-Score >= 80%",
    "Finding Sources Contains Cortex Attack Surface Testing":
      "Befundquellen enthalten Cortex Attack Surface Testing",
    "Package In Use = Yes": "Paket in Verwendung = Ja",

    // --- Rules and Policies screen ---
    "Create dynamic groups by applying asset filters, or build static groups by selecting assets manually.":
      "Erstellen Sie dynamische Gruppen durch Anwenden von Asset-Filtern oder statische Gruppen durch manuelle Auswahl von Assets.",
    "The selected policy will be deleted.": "Die ausgewählte Richtlinie wird gelöscht.",
    "The following text will be displayed as part of the issue remediation guidance":
      "Der folgende Text wird als Teil der Anleitung zur Problembehebung angezeigt",
    "Delete Policy": "Richtlinie löschen",
    "Disable Policy": "Richtlinie deaktivieren",
    "Disabling policy will resolve the open issues matching the policy.":
      "Durch das Deaktivieren der Richtlinie werden die offenen Probleme behoben, die der Richtlinie entsprechen.",
    "Deleting policy will resolve the open issues in this policy scope.":
      "Durch das Löschen der Richtlinie werden die offenen Probleme im Geltungsbereich dieser Richtlinie behoben.",
    "Grace Period (Deployment)": "Karenzzeit (Bereitstellung)",
    "Number of days to allow before blocking": "Anzahl der zulässigen Tage bis zur Blockierung",
    "The selected policies will be disabled. Are you sure you want to proceed?":
      "Die ausgewählten Richtlinien werden deaktiviert. Möchten Sie wirklich fortfahren?",
    "The policy will no longer evaluate against findings": "Die Richtlinie wird nicht mehr auf Befunde angewendet",
    "The selected policies will be deleted. Are you sure you want to proceed?":
      "Die ausgewählten Richtlinien werden gelöscht. Möchten Sie wirklich fortfahren?",
    // Kept verbatim (the sentence ends abruptly at "try adjusting your search to find.").
    // This is a distinct variant from the similar string in asset-inventory-screen.js
    // ("...to find what you're looking for.") with a different ending, so it is
    // registered as its own entry.
    "We couldn’t find what you’re looking for, try adjusting your search to find.":
      "Wir konnten nicht finden, wonach Sie suchen. Passen Sie Ihre Suche an und versuchen Sie es erneut.",
    "Created by:": "Erstellt von:",
    "Modified by:": "Geändert von:",
    "Created on:": "Erstellt am:",
    "Modified on:": "Geändert am:",
    "Total": "Gesamt",
    "Edit policy": "Richtlinie bearbeiten",
    "Duplicate policy": "Richtlinie duplizieren",
    "View Policy Details": "Richtliniendetails anzeigen",
    "Export policy": "Richtlinie exportieren",
    "You are about to delete 1 policy": "Sie sind im Begriff, 1 Richtlinie zu löschen",
    "* Choosing delete you will also save other unsaved changes in the policy screen":
      "* Wenn Sie \"Löschen\" wählen, werden auch andere nicht gespeicherte Änderungen im Richtlinienbildschirm gespeichert",
    "Delete and Save": "Löschen und speichern",
    "Delete Custom Detection Rule": "Benutzerdefinierte Erkennungsregel löschen",
    "Data types": "Datentypen",
    "Severity for Compliance": "Schweregrad für Compliance",
    "Rule Details": "Regeldetails",
    "Rule Definition (Rego)": "Regeldefinition (Rego)",
    "Rule Definition (Python)": "Regeldefinition (Python)",
    "Inputs": "Eingaben",
  },

  patterns: [
    { re: /^Based on the categorization, finding type will be "(.+)"$/, tpl: "Basierend auf der Kategorisierung lautet der Befundtyp \"$1\"" },
    { re: /^The (\[.*\]) dataset is not supported for the '(.+)' rule type\.$/, tpl: "Der Datensatz $1 wird für den Regeltyp \"$2\" nicht unterstützt." },
    { re: /^Provided xdm\.asset\.type\.id (\[.*\]) is invalid\.$/, tpl: "Die angegebene xdm.asset.type.id $1 ist ungültig." },
    { re: /^Maximum of 50 labels \((\d+)\/50\)$/, tpl: "Maximal 50 Labels ($1/50)" },
    { re: /^Step (\d+)\/(\d+)$/, tpl: "Schritt $1/$2" },
    { re: /^Condition Group\s+(\d+)$/, tpl: "Bedingungsgruppe $1" },
    // (Removed: a pattern for "We found the application "X" with no critical/high vulnerabilities.
    // ..." used to live here. See the comment in the exact block above — this text now goes through AI
    // translation via content.js's cas-recommendations-panel p[ucardcontent] exclusion instead.)
    { re: /^(\d+)\s+selected asset groups$/, tpl: "$1 ausgewählte Asset-Gruppen" },
    { re: /^(\d+)\s+Selected rules$/, tpl: "$1 ausgewählte Regeln" },
    { re: /^Total\s+([\d,]+)\s+rules selected$/, tpl: "Insgesamt $1 Regeln ausgewählt" },
    { re: /^(\d+)\s+selected predefined asset scopes$/, tpl: "$1 ausgewählte vordefinierte Asset-Geltungsbereiche" },
    { re: /^There are currently ([\d,]+) Issues generated from these policies\.$/,
      tpl: "Derzeit gibt es $1 Probleme, die aus diesen Richtlinien generiert wurden." },
    // "There are currently 0 Issues generated from these policies. No new Issues will be generated from these policies after disabling."
    { re: /^There are currently ([\d,]+) Issues generated from these policies\. No new Issues will be generated from these policies after disabling\.$/,
      tpl: "Derzeit gibt es $1 Probleme, die aus diesen Richtlinien generiert wurden. Nach dem Deaktivieren werden aus diesen Richtlinien keine neuen Probleme mehr generiert." },
    // The rule name (an identifier) is left untranslated.
    { re: /^The selected rule, (.+), will be disabled\.$/, tpl: "Die ausgewählte Regel \"$1\" wird deaktiviert." },
    // "The selected rule, MCP Server, will be enabled. As a result, 0 estimated issues will be generated."
    { re: /^The selected rule, (.+), will be enabled\. As a result, ([\d,]+) estimated issues will be generated\.$/,
      tpl: "Die ausgewählte Regel \"$1\" wird aktiviert. Dadurch werden schätzungsweise $2 Probleme generiert." },
    { re: /^You are about to delete ([\d,]+) polic(?:y|ies)$/, tpl: "Sie sind im Begriff, $1 Richtlinie(n) zu löschen" },
    { re: /^([\d,]+) Polic(?:y|ies) will be disabled$/, tpl: "$1 Richtlinie(n) werden deaktiviert" },
    { re: /^([\d,]+) Polic(?:y|ies) will be enabled$/, tpl: "$1 Richtlinie(n) werden aktiviert" },
    // The policy name (an identifier) is left untranslated.
    { re: /^Policy (.+) will be deleted$/, tpl: "Richtlinie \"$1\" wird gelöscht" },
    { re: /^Are you sure you want to delete the rule (.+)\?$/, tpl: "Möchten Sie die Regel \"$1\" wirklich löschen?" },
    // The rule name (an identifier) is left untranslated.
    { re: /^Rule (.+) will be deleted$/, tpl: "Regel \"$1\" wird gelöscht" },
    { re: /^([\d,]+) Rules? will be disabled$/, tpl: "$1 Regel(n) werden deaktiviert" },
    { re: /^([\d,]+) Rules? will be enabled$/, tpl: "$1 Regel(n) werden aktiviert" },
    // "This is a Python-based rule. The Logic cannot be edited but can be viewed for Terraform"
    // The target type (e.g. Terraform — the language/resource kind the rule applies to) is variable.
    { re: /^This is a Python-based rule\. The Logic cannot be edited but can be viewed for (.+)$/,
      tpl: "Dies ist eine Python-basierte Regel. Die Logik kann nicht bearbeitet, aber für $1 angezeigt werden." },
    { re: /^Executables \((\d+)\)$/, tpl: "Ausführbare Dateien ($1)" },
  ],

  skip: [],
};
