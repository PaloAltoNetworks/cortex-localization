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
    "Server Settings": "Servereinstellungen",
    "Issue Management": "Problemverwaltung",
    "Result": "Ergebnis",
    "Source IP": "Quell-IP",
    "Subtype": "Untertyp",
    "Update Issue": "Problem aktualisieren",
    "User Roles": "Benutzerrollen",

    "Default User Notifications": "Standard-Benutzerbenachrichtigungen",
    "Case assigned": "Fall zugewiesen",
    "Case resolved": "Fall behoben",
    "Issue assigned": "Problem zugewiesen",
    "Issue resolved": "Problem behoben",
    "Notifications exclude actions performed by the user.": "Benachrichtigungen schließen Aktionen aus, die vom Benutzer selbst ausgeführt wurden.",
    "Create New Forwarding Configuration": "Neue Weiterleitungskonfiguration erstellen",
    "Add Forwarding Configuration": "Weiterleitungskonfiguration hinzufügen",
    "Define": "Definieren",
    "Forward Destination": "Weiterleitungsziel",
    "Review and Create": "Überprüfen und erstellen",
    "log type": "Protokolltyp",
    "Define the forwarding scope by using the filter or right-click on a table cell to select the fields and values.":
      "Definieren Sie den Weiterleitungsbereich, indem Sie den Filter verwenden oder mit der rechten Maustaste auf eine Tabellenzelle klicken, um Felder und Werte auszuwählen.",
    "Add Application": "Anwendung hinzufügen",
    "Alert": "Warnung",
    "Connected Integrations": "Verbundene Integrationen",
    "Minutes": "Minuten",
    "Select name": "Namen auswählen",
    "Use Auto Generated Subject": "Automatisch generierten Betreff verwenden",
    "channel name": "Kanalname",
    "distribution list": "Verteilerliste",
    "format": "Format",
    "grouping timeframe": "Zeitrahmen für Gruppierung",
    "instance name": "Instanzname",
    "notification timezone": "Zeitzone für Benachrichtigungen",
    "subject": "Betreff",
    "Configuration Scope": "Konfigurationsbereich",
    "Destination Type": "Zieltyp",
    "Forward Type": "Weiterleitungstyp",
    "excluded": "ausgeschlossen",
    "Enforce query privacy": "Abfrage-Datenschutz erzwingen",
    "Enforce query privacy for non-admins": "Abfrage-Datenschutz für Nicht-Administratoren erzwingen",
    "Limit non-admin users and API keys to viewing and managing their own query activity.":
      "Nicht-Administratoren und API-Schlüssel dürfen nur ihre eigenen Abfrageaktivitäten anzeigen und verwalten.",
    "Query Limits": "Abfragelimits",
    "Unlimited": "Unbegrenzt",
    "<Max>": "<Maximum>",
    "Query limits govern user-initiated queries, excluding those from playbooks and correlations, to enhance query performance and efficiency. These limits are tenant-wide, unless specific roles and groups are excluded.":
      "Abfragelimits gelten für von Benutzern initiierte Abfragen – ausgenommen Abfragen aus Playbooks und Korrelationen –, um Leistung und Effizienz von Abfragen zu verbessern. Diese Limits gelten für den gesamten Tenant, sofern bestimmte Rollen und Gruppen nicht ausgeschlossen sind.",
    "Excluded User Groups or Roles": "Ausgeschlossene Benutzergruppen oder Rollen",
    "Select Group": "Gruppe auswählen",
    "concurrent queries per user": "Gleichzeitige Abfragen pro Benutzer",
    "query timeout (minutes)": "Abfrage-Timeout (Minuten)",
    "Administration": "Verwaltung",
    "General": "Allgemein",
    "Global Settings": "Globale Einstellungen",
    "Access Management": "Zugriffsverwaltung",
    "Access Management.": "Zugriffsverwaltung.",
    "Roles": "Rollen",
    "User Groups": "Benutzergruppen",
    "Authentication Settings": "Authentifizierungseinstellungen",
    "API Keys": "API-Schlüssel",
    "API Keys.": "API-Schlüssel.",
    "Security Settings": "Sicherheitseinstellungen",
    "Exception Management": "Ausnahmeverwaltung",
    "Automation Exclusion Center": "Automation-Ausschlusscenter",
    "Data Management": "Datenverwaltung",
    "Data Collection": "Datenerfassung",
    "Data Broker": "Daten-Broker",
    "Broker VMs": "Broker VM",
    "Dataset Management": "Datensatzverwaltung",
    "Query Management": "Abfrageverwaltung",
    "Parsing Rules": "Parsing-Regeln",
    "Lists": "Listen",
    "IP Labels": "IP-Labels",
    "External Dynamic List Integration": "Integration externer dynamischer Listen",
    "Integrations": "Integrationen",
    "External Applications": "Externe Anwendungen",
    "Marketplace": "Marktplatz",
    "Credentials": "Anmeldeinformationen",
    "Cloud Identity Engine": "Cloud Identity Engine",
    "Identity Configuration": "Identitätskonfiguration",
    "Impersonation Role": "Rolle für Identitätswechsel",
    "Agent Configurations": "Agent-Konfigurationen",
    "Agents & LLM Experience": "Agents und LLM-Erfahrung",
    "AI Configuration": "KI-Konfiguration",
    "AI Case Summarization": "KI-Fallzusammenfassung",
    "Enable AI case summarization capabilities": "Funktionen zur KI-Fallzusammenfassung aktivieren",
    "Application Configuration": "Anwendungskonfiguration",
    "AppSec Issues Configuration": "Konfiguration von AppSec-Problemen",
    "Artifact and Asset Views": "Artefakt- und Asset-Ansichten",
    "Automation Email Appearance": "Erscheinungsbild von Automation-E-Mails",
    "Case display modes": "Anzeigemodi für Fälle",
    "Case Sensitivity (case_sensitive)": "Groß-/Kleinschreibung beachten (case_sensitive)",
    "Caching": "Caching",
    "Enable Cases Caching": "Caching für Fälle aktivieren",
    "Enable Issues Caching": "Caching für Probleme aktivieren",
    "Improve performance on the Cases page by enabling a temporary cache.":
      "Verbessern Sie die Leistung der Seite \"Fälle\", indem Sie einen temporären Cache aktivieren.",
    "Improve performance on the Issues page by enabling a temporary cache.":
      "Verbessern Sie die Leistung der Seite \"Probleme\", indem Sie einen temporären Cache aktivieren.",
    "Compute Unit Consumption": "Verbrauch von Compute-Einheiten",
    "Email Contacts": "E-Mail-Kontakte",
    "Define the list of contact emails for Cortex communication":
      "Definieren Sie die Liste der Kontakt-E-Mail-Adressen für die Kommunikation von Cortex",
    "Endpoint Scoping Mode": "Endpoint-Geltungsbereichsmodus",
    "Engines": "Engines",
    "Exceptions Require Approval": "Ausnahmen erfordern Genehmigung",
    "Approval Required": "Genehmigung erforderlich",
    "This setting allows for checks and balances across your organization. If you turn this off, exception requests will be activated immediately, no approval needed.":
      "Diese Einstellung ermöglicht Kontrollmechanismen in Ihrer gesamten Organisation. Wenn Sie sie deaktivieren, werden Ausnahmeanfragen sofort und ohne Genehmigung aktiviert.",
    "Add New Approver": "Neuen Genehmiger hinzufügen",
    "List of Approvers": "Liste der Genehmiger",
    "New Approver Email": "E-Mail-Adresse des neuen Genehmigers",
    "New Approver Name": "Name des neuen Genehmigers",
    "External Issue Mapping": "Zuordnung externer Probleme",
    "Full-size logo": "Logo in voller Größe",
    "Replace the default logo in communication task emails with a custom logo to match your organization branding.":
      "Ersetzen Sie das Standardlogo in E-Mails von Kommunikationsaufgaben durch ein benutzerdefiniertes Logo, das zum Branding Ihrer Organisation passt.",
    "Recommended dimensions: 50px by 50px. Max file size 100 KB.":
      "Empfohlene Abmessungen: 50 x 50 px. Maximale Dateigröße 100 KB.",
    "Google Maps Key": "Google Maps-Schlüssel",
    "Issue SLA Rules": "SLA-Regeln für Probleme",
    "AppSec Critical Issues Time to Resolve SLA": "SLA für Behebungszeit kritischer AppSec-Probleme",
    "AppSec High Issues Time to Resolve SLA": "SLA für Behebungszeit von AppSec-Problemen mit hohem Schweregrad",
    "AppSec Low Issues Time to Resolve SLA": "SLA für Behebungszeit von AppSec-Problemen mit niedrigem Schweregrad",
    "AppSec Medium Issues Time to Resolve SLA": "SLA für Behebungszeit von AppSec-Problemen mit mittlerem Schweregrad",
    "Create SLA Rule": "SLA-Regel erstellen",
    "Finding Sources = Cortex AppSec and Severity = Critical": "Befundquellen = Cortex AppSec und Schweregrad = Kritisch",
    "Finding Sources = Cortex AppSec and Severity = High": "Befundquellen = Cortex AppSec und Schweregrad = Hoch",
    "Finding Sources = Cortex AppSec and Severity = Low": "Befundquellen = Cortex AppSec und Schweregrad = Niedrig",
    "Finding Sources = Cortex AppSec and Severity = Medium": "Befundquellen = Cortex AppSec und Schweregrad = Mittel",
    "Last Modified Date": "Datum der letzten Änderung",
    "SLA Goal": "SLA-Ziel",
    "Create a query to select the issues affected by this rule:": "Erstellen Sie eine Abfrage, um die von dieser Regel betroffenen Probleme auszuwählen:",
    "Criteria": "Kriterien",
    "New SLA Rule": "Neue SLA-Regel",
    "Preview the Results": "Vorschau der Ergebnisse",
    "SLA Rules": "SLA-Regeln",
    "Set the Conditions for the SLA Rule": "Bedingungen für die SLA-Regel festlegen",
    "Matching Issues": "Übereinstimmende Probleme",
    "SLA Rules automatically set the starting countdown value for issues that match the rule’s query criteria. Use them to define the time goals or deadlines that tasks or milestones need to be completed by. For more detailed information read the":
      "SLA-Regeln legen automatisch den Startwert des Countdowns für Probleme fest, die den Abfragekriterien der Regel entsprechen. Verwenden Sie sie, um Zeitziele oder Fristen zu definieren, bis zu denen Aufgaben oder Meilensteine abgeschlossen sein müssen. Ausführlichere Informationen finden Sie hier:",
    "SLA Fields documentation": "Dokumentation zu SLA-Feldern",
    "SLA Rule Name": "Name der SLA-Regel",
    "Enter a name for your SLA rule": "Geben Sie einen Namen für Ihre SLA-Regel ein",
    "Describe the purpose of this SLA rule": "Beschreiben Sie den Zweck dieser SLA-Regel",
    "Enter 0 or greater": "Geben Sie 0 oder höher ein",
    "Enter 0 to 23": "Geben Sie 0 bis 23 ein",
    "Enter 0 to 59": "Geben Sie 0 bis 59 ein",
    "days": "Tage",
    "hours": "Stunden",
    "Define the cases target MTTR per case severity": "Definieren Sie die Ziel-MTTR für Fälle pro Schweregrad",
    "Keyboard Shortcuts": "Tastenkombinationen",
    "Select shortcut to open Cortex Assistant.": "Wählen Sie eine Tastenkombination zum Öffnen von Cortex Assistant aus.",
    "Select shortcut to open artifact and asset views of hash or IP address values.":
      "Wählen Sie eine Tastenkombination zum Öffnen der Artefakt- und Asset-Ansichten für Hash- oder IP-Adresswerte aus.",
    "Object Setup": "Objekteinrichtung",
    "Outposts": "Outposts",
    "Password Protection (for downloaded files)": "Kennwortschutz (für heruntergeladene Dateien)",
    "Note: Scroll down to the Define Password Protection for Download Files topic.":
      "Hinweis: Scrollen Sie nach unten zum Thema \"Kennwortschutz für heruntergeladene Dateien definieren\".",
    "Profiles": "Profilverwaltung",
    "Sync Profiles": "Synchronisierungsprofile",
    "Enable Scope Based Access Control": "Geltungsbereichsbasierte Zugriffskontrolle aktivieren",
    "Scope-Based Access Control (SBAC)": "Geltungsbereichsbasierte Zugriffskontrolle (SBAC)",
    "Scope-Based Access Control (SBAC) enforces access restrictions on users. Before enabling this setting, ensure that User Group and Users are granted the required access by assigning their scopes in Settings > Configurations >":
      "Die geltungsbereichsbasierte Zugriffskontrolle (SBAC) setzt Zugriffsbeschränkungen für Benutzer durch. Stellen Sie vor dem Aktivieren dieser Einstellung sicher, dass User Group und Users den erforderlichen Zugriff erhalten, indem Sie ihre Geltungsbereiche unter Einstellungen > Konfigurationen > zuweisen:",
    ". For API Keys, assign scopes in Settings > Configurations > Integrations >":
      ". Weisen Sie für API-Schlüssel die Geltungsbereiche unter Einstellungen > Konfigurationen > Integrationen > zu:",
    "Threat Intelligence": "Threat Intelligence",
    "Timestamp Format": "Zeitstempelformat",
    "Select a timestamp format that will be displayed in data tables":
      "Wählen Sie ein Zeitstempelformat aus, das in Datentabellen angezeigt wird",
    "Timezone": "Zeitzone",
    "Select in which time zone to display your Cortex CLOUD data":
      "Wählen Sie aus, in welcher Zeitzone Ihre Cortex CLOUD-Daten angezeigt werden",
    "Upgrade Helper": "Upgrade-Hilfe",
    "XDR Collectors": "XDR Collectors",
    "XQL Configuration": "XQL-Konfiguration",
    "These settings control your XQL queries in the system.": "Diese Einstellungen steuern Ihre XQL-Abfragen im System.",
    "This change will impact the default behavior of all your XQL configurations except for BIOCs.":
      "Diese Änderung wirkt sich auf das Standardverhalten aller Ihrer XQL-Konfigurationen mit Ausnahme von BIOCs aus.",
    "Allow users to switch to legacy mode. When disabled, only default mode is available.":
      "Benutzern den Wechsel in den Legacy-Modus erlauben. Wenn deaktiviert, ist nur der Standardmodus verfügbar.",
    "Enable legacy mode": "Legacy-Modus aktivieren",
    "Enable Agentic Assistant and natural-language capabilities (LLM).":
      "Agentischen Assistenten und Funktionen für natürliche Sprache (LLM) aktivieren.",
    "While Agentic Assistant experience is currently free, we will notify you before any fees are applied, giving you the opportunity to opt out.":
      "Der agentische Assistent ist derzeit kostenlos. Wir werden Sie jedoch benachrichtigen, bevor Gebühren anfallen, sodass Sie die Möglichkeit haben, sich abzumelden.",
    "When enabled, cases use an AI-generated name and summary. When disabled, the system or user name and description are displayed.":
      "Wenn aktiviert, verwenden Fälle einen KI-generierten Namen und eine KI-generierte Zusammenfassung. Wenn deaktiviert, werden der vom System oder Benutzer vergebene Name und die Beschreibung angezeigt.",
    "Will only affect newly retrieved files by Cortex XDR agent v. 8.1 and higher.":
      "Betrifft nur Dateien, die neu von Cortex XDR Agent v. 8.1 und höher abgerufen werden.",
    "Read-only": "Schreibgeschützt",
    "Restrictive": "Restriktiv",
    "Save": "Speichern",
    "For more information, see": "Weitere Informationen finden Sie unter",
    "You can also": "Sie können außerdem",
    "7 Days": "7 Tage",
    "Allowed Domains": "Zulässige Domänen",
    "Allowed Sessions": "Zulässige Sitzungen",
    "Approved IP Ranges": "Genehmigte IP-Bereiche",
    "Approved User Email Domains (user@domain.com)": "Genehmigte E-Mail-Domänen für Benutzer (user@domain.com)",
    "As user login expiration (8 hours)": "Wie Ablauf der Benutzeranmeldung (8 Stunden)",
    "user login expiration": "Ablauf der Benutzeranmeldung",
    "dashboard expiration": "Ablauf des Dashboards",
    "deactivate inactive user": "Inaktive Benutzer deaktivieren",
    "+Add": "+Hinzufügen",
    "The value selected, controls how frequently the Cortex tenant will refresh the Cortex Access Token from the CSP. To increase the frequency users have to re-authenticate, the CSP session duration should be reduced.":
      "Der ausgewählte Wert steuert, wie häufig der Cortex-Tenant das Cortex-Zugriffstoken vom CSP aktualisiert. Um die Häufigkeit zu erhöhen, mit der sich Benutzer erneut authentifizieren müssen, sollte die Sitzungsdauer beim CSP verkürzt werden.",
    "When setting Approved Domains in parallel to Approved IP Ranges, only users that belong to one of the approved domains and using one of the approved IP ranges, will be able to access the Cortex XDR server":
      "Wenn genehmigte Domänen zusätzlich zu genehmigten IP-Bereichen festgelegt werden, können nur Benutzer, die zu einer der genehmigten Domänen gehören und einen der genehmigten IP-Bereiche verwenden, auf den Cortex XDR-Server zugreifen",
    "Set Uninstall Password": "Deinstallationskennwort festlegen",
    "Broker VM": "Broker VM",
    "Cancel": "Abbrechen",
    "Configure expiration time period": "Ablaufzeitraum konfigurieren",
    "permission reset timeframe": "Zeitrahmen für das Zurücksetzen von Berechtigungen",
    "Control Cortex tenant Same-Site Cookie Policy. Lax allows the cookie to be sent on some cross-site requests,":
      "Steuert die Same-Site-Cookie-Richtlinie des Cortex-Tenants. Lax erlaubt das Senden des Cookies bei einigen websiteübergreifenden Anfragen,",
    "Disable access for users that haven't logged in for a long period of time":
      "Zugriff für Benutzer deaktivieren, die sich längere Zeit nicht angemeldet haben",
    "Disabled (Default)": "Deaktiviert (Standard)",
    "Enable Auto Logout": "Automatische Abmeldung aktivieren",
    "Same-Site Cookie Policy": "Same-Site-Cookie-Richtlinie",
    "Session Expiration": "Sitzungsablauf",
    "Strict": "Streng",
    "Strict does not allow the cookie to be sent on a cross-site request.":
      "Strict erlaubt das Senden des Cookies bei websiteübergreifenden Anfragen nicht.",
    "The following domains and external IPs and ranges are allowed to access the server":
      "Die folgenden Domänen sowie externen IPs und Bereiche dürfen auf den Server zugreifen",
    "User Expiration": "Benutzerablauf",
    "Action Center Expiration": "Ablauf im Aktionscenter",
    "Expiration can be set within 1-30 days from the creation time Updating the expiration will impact actions in \u201cpending\u201d status only":
      "Der Ablauf kann auf 1-30 Tage ab dem Erstellungszeitpunkt festgelegt werden. Eine Aktualisierung des Ablaufs wirkt sich nur auf Aktionen mit dem Status \"Ausstehend\" aus",
    "Enabling this feature will remove any duplicate entries based on the defined parameters, leaving only one entry - the last endpoint reporting to the server. The deleted endpoint data is retained for 90 days since its last connection. If a deleted endpoint reconnects it will recover its existing data.":
      "Wenn Sie diese Funktion aktivieren, werden doppelte Einträge anhand der definierten Parameter entfernt, sodass nur ein Eintrag übrig bleibt – der Endpoint, der sich zuletzt beim Server gemeldet hat. Die Daten des gelöschten Endpoints werden ab seiner letzten Verbindung 90 Tage lang aufbewahrt. Wenn ein gelöschter Endpoint erneut eine Verbindung herstellt, werden seine vorhandenen Daten wiederhergestellt.",
    "Custom Mail Subject": "Benutzerdefinierter E-Mail-Betreff",
    "Email Grouping Time Frame (Minutes)": "Zeitrahmen für E-Mail-Gruppierung (Minuten)",
    "Forward issues as soon as possible": "Probleme so schnell wie möglich weiterleiten",
    "Log Forward Type": "Typ der Protokollweiterleitung",
    "Output Method": "Ausgabemethode",
    "Time Zone": "Zeitzone",
    "abort malware scan": "Malware-Scan abbrechen",
    "agent database cleanup": "Bereinigung der Agent-Datenbank",
    "agent uninstall": "Deinstallation des Agents",
    "cancel endpoint isolation": "Endpoint-Isolierung aufheben",
    "change managing server": "Verwaltungsserver ändern",
    "collect detailed host firewall logs": "Detaillierte Host-Firewall-Protokolle erfassen",
    "delete quarantined file": "Quarantänedatei löschen",
    "destroy files": "Dateien vernichten",
    "endpoint script execution": "Skriptausführung auf Endpoint",
    "file search": "Dateisuche",
    "files retrieval": "Dateiabruf",
    "isolate": "Isolieren",
    "malware scan": "Malware-Scan",
    "memory collection": "Speichererfassung",
    "pause endpoint protection": "Endpoint-Schutz anhalten",
    "quarantine": "Quarantäne",
    "registry search": "Registrierungssuche",
    "remediation": "Behebung",
    "restart agent": "Agent neu starten",
    "restore quarantine": "Aus Quarantäne wiederherstellen",
    "resume endpoint protection": "Endpoint-Schutz fortsetzen",
    "retrieve alert data": "Warnungsdaten abrufen",
    "set temporary token": "Temporäres Token festlegen",
    "support file retrieval": "Abruf von Supportdateien",
    "terminate causality (cgo)": "Kausalität beenden (cgo)",
    "terminate process": "Prozess beenden",
    "unblock ip address": "IP-Adresse entsperren",
    "xdr collector support file retrieval": "Abruf von XDR Collector-Supportdateien",
    "xdr collector uninstall": "Deinstallation des XDR Collectors",
    "xdr collector upgrade": "Upgrade des XDR Collectors",
    "Advanced Analysis": "Erweiterte Analyse",
    "Agent Status": "Agent-Status",
    "Agent upgrade": "Agent-Upgrade",
    "Content Management": "Inhaltsverwaltung",
    "Cortex XDR Log Collection": "Cortex XDR-Protokollerfassung",
    "Critical Environment Versions": "Versionen für kritische Umgebungen",
    "Endpoint Administration Cleanup": "Bereinigung der Endpoint-Verwaltung",
    "Global uninstall password": "Globales Deinstallationskennwort",
    "Informative BTP Issues": "Informative BTP-Probleme",
    "Learn More": "Weitere Informationen",
    "Make reason field mandatory": "Feld \"Grund\" als Pflichtfeld festlegen",
    "Number of Agents": "Anzahl der Agents",
    "One-time cleanup": "Einmalige Bereinigung",
    "Password Strength": "Kennwortstärke",
    "Periodic duplicate cleanup": "Regelmäßige Bereinigung von Duplikaten",
    "Require Reason for Live Terminal": "Grund für Live Terminal erforderlich",
    "Restore default": "Standard wiederherstellen",
    "Time Interval": "Zeitintervall",
    "WildFire Analysis for Benign Verdict": "WildFire-Analyse bei gutartigem Urteil",
    "XDR Calculator for Recommended Bandwidth": "XDR-Rechner für empfohlene Bandbreite",
    "XDR Collector": "XDR Collector",
    "Mbps (Megabits per second)": "Mbit/s (Megabit pro Sekunde)",
    "Host IP (IPv4 only)": "Host-IP (nur IPv4)",
    "Mac Address": "MAC-Adresse",
    "Enable WildFire analysis scoring for files with Benign verdicts.":
      "WildFire-Analysebewertung für Dateien mit gutartigem Urteil aktivieren.",
    "Enable bandwidth control": "Bandbreitensteuerung aktivieren",
    "Enable minor content version updates": "Updates kleinerer Inhaltsversionen aktivieren",
    "Enable Critical Environment Versions to be Created and Installed in the Tenant":
      "Erstellung und Installation von Versionen für kritische Umgebungen im Tenant aktivieren",
    "Configure Cortex XDR to collect logs to maintain stability":
      "Cortex XDR für die Protokollerfassung zur Aufrechterhaltung der Stabilität konfigurieren",
    "Configure Cortex to automatically upload issue data and apply Advanced Analysis exceptions":
      "Cortex so konfigurieren, dass Problemdaten automatisch hochgeladen und Ausnahmen der erweiterten Analyse angewendet werden",
    "Configure the Cortex XDR Agent Versions Used in the tenant":
      "Im Tenant verwendete Cortex XDR Agent-Versionen konfigurieren",
    "Configure the Cortex XDR Agent license revocation and deletion period":
      "Zeitraum für Lizenzentzug und Löschung von Cortex XDR Agents konfigurieren",
    "Configure the Cortex XDR agent upgrade scheduler and number of parallel upgrades":
      "Upgrade-Planer und Anzahl paralleler Upgrades für Cortex XDR Agents konfigurieren",
    "Configure the Endpoint Administration periodic cleanup settings":
      "Einstellungen für die regelmäßige Bereinigung der Endpoint-Verwaltung konfigurieren",
    "Configure the Palo Alto Networks content update cadence and bandwidth allocation within your organization":
      "Häufigkeit der Inhaltsupdates von Palo Alto Networks und Bandbreitenzuweisung in Ihrer Organisation konfigurieren",
    "Disabling this capability takes immediate effect on new hashes, fresh agent installations, and existing security policies.":
      "Das Deaktivieren dieser Funktion wirkt sich sofort auf neue Hashes, neue Agent-Installationen und bestehende Sicherheitsrichtlinien aus.",
    "Enable Cortex XDR agents to collect logs necessary to maintain the stability of your Cortex XDR agent and improve performance -":
      "Cortex XDR Agents die Erfassung von Protokollen ermöglichen, die zur Aufrechterhaltung der Stabilität Ihres Cortex XDR Agents und zur Leistungsverbesserung erforderlich sind -",
    "Note that it could take up to a week to take effect on existing agents in your environment pending agent caching.":
      "Beachten Sie, dass es aufgrund des Agent-Cachings bis zu einer Woche dauern kann, bis die Änderung bei vorhandenen Agents in Ihrer Umgebung wirksam wird.",
    "Note: this configuration affects only standard endpoints and does not impact the VDI or Temporary Session agent status.":
      "Hinweis: Diese Konfiguration betrifft nur Standard-Endpoints und wirkt sich nicht auf den Agent-Status von VDI- oder temporären Sitzungen aus.",
    "Otherwise, the content updates in your network occur only on major releases.":
      "Andernfalls erfolgen Inhaltsupdates in Ihrem Netzwerk nur bei Hauptversionen.",
    "This calculation is based on connected agents and includes an overhead for large content update. For additional information":
      "Diese Berechnung basiert auf den verbundenen Agents und berücksichtigt einen Mehraufwand für große Inhaltsupdates. Weitere Informationen",
    "This setting controls whether the reason field for starting a Live Terminal session is mandatory or optional.":
      "Diese Einstellung legt fest, ob das Feld \"Grund\" beim Starten einer Live Terminal-Sitzung erforderlich oder optional ist.",
    "To enforce immediate protection against the latest threats, enable minor content updates.":
      "Aktivieren Sie Updates kleinerer Inhaltsversionen, um sofortigen Schutz vor den neuesten Bedrohungen durchzusetzen.",
    "we recommend you to allocate the minimum of 20 Mbps.": "Wir empfehlen, mindestens 20 Mbit/s zuzuweisen.",
    "1 lower-case letter": "1 Kleinbuchstabe",
    "1 number": "1 Ziffer",
    "1 of the following special characters: !@#%": "1 der folgenden Sonderzeichen: !@#%",
    "1 upper-case letter": "1 Großbuchstabe",
    "The password must be 8 to 32 characters and must contain at least:":
      "Das Kennwort muss 8 bis 32 Zeichen lang sein und mindestens Folgendes enthalten:",
    "All actions should be editable between 1-30 days": "Alle Aktionen sollten zwischen 1 und 30 Tagen bearbeitbar sein",
    "*When selecting more than one parameter, duplications will be removed only if containing all selected parameters":
      "*Wenn mehr als ein Parameter ausgewählt ist, werden Duplikate nur entfernt, wenn sie alle ausgewählten Parameter enthalten",
    "Set the default uninstall password for all agents in the system":
      "Legen Sie das Standard-Deinstallationskennwort für alle Agents im System fest",
    "agent deletion (days)": "Agent-Löschung (Tage)",
    "amount of parallel upgrades": "Anzahl paralleler Upgrades",
    "confirm password": "Kennwort bestätigen",
    "connection lost (days)": "Verbindung verloren (Tage)",
    "define password": "Kennwort festlegen",
    "security content updates": "Sicherheitsinhaltsupdates",
    "Palo Alto Networks - Cortex support": "Palo Alto Networks - Cortex-Support",
    "During the first week of a new Cortex XDR agent release rollout, only a single batch of agents is upgraded. After that, auto-upgrades continue to be deployed across your network with the number of parallel upgrades as configured. Consider network bandwidth when determining the number of parallel upgrades in your environment.":
      "In der ersten Woche des Rollouts einer neuen Cortex XDR Agent-Version wird nur ein einzelner Batch von Agents aktualisiert. Danach werden automatische Upgrades weiterhin mit der konfigurierten Anzahl paralleler Upgrades in Ihrem Netzwerk bereitgestellt. Berücksichtigen Sie die Netzwerkbandbreite, wenn Sie die Anzahl paralleler Upgrades in Ihrer Umgebung festlegen.",
    "Note! Critical Environment Versions are designed for sensitive and highly regulated environments and do not contain all updates and content existing in standard versions. It is recommended to restrict the use of these versions to the required minimum.":
      "Achtung! Versionen für kritische Umgebungen sind für sensible und stark regulierte Umgebungen konzipiert und enthalten nicht alle Updates und Inhalte der Standardversionen. Es wird empfohlen, die Verwendung dieser Versionen auf das erforderliche Minimum zu beschränken.",
    "Enable Cortex to automatically upload defined issue data files for advanced analysis. Advanced Analysis increases the Cortex exploit protection module accuracy":
      "Ermöglichen Sie Cortex, definierte Problemdatendateien automatisch zur erweiterten Analyse hochzuladen. Die erweiterte Analyse erhöht die Genauigkeit des Cortex-Exploit-Schutzmoduls",
    "Automatically apply Advanced Analysis exceptions to your Global Exceptions list. This will apply all Advanced Analysis exceptions suggested by Cortex, regardless of the issue data file source":
      "Ausnahmen der erweiterten Analyse automatisch auf Ihre Liste globaler Ausnahmen anwenden. Dadurch werden alle von Cortex vorgeschlagenen Ausnahmen der erweiterten Analyse unabhängig von der Quelle der Problemdatendatei angewendet",
    "For optimized performance and reduced bandwidth consumption, ensure you install new agents with the distribution package available for Windows Cortex XDR agents 7.3 and later. Otherwise, if you distribute the agent installer via SCCM, it is recommended to configure the bandwidth you allocate in your organization for the Palo Alto Network":
      "Stellen Sie für eine optimierte Leistung und einen geringeren Bandbreitenverbrauch sicher, dass Sie neue Agents mit dem Verteilungspaket installieren, das für Windows Cortex XDR Agents 7.3 und höher verfügbar ist. Wenn Sie das Agent-Installationsprogramm hingegen über SCCM verteilen, wird empfohlen, die Bandbreite zu konfigurieren, die Sie in Ihrer Organisation für Palo Alto Networks zuweisen",
    "When enabled, Cortex displays unique and informative BTP rule names and descriptions. While multiple issue names have been completely revised, the issue descriptions will include both the new descriptions and the previous descriptions that existed previously to better support the transition.":
      "Wenn aktiviert, zeigt Cortex eindeutige und aussagekräftige Namen und Beschreibungen für BTP-Regeln an. Während mehrere Problemnamen vollständig überarbeitet wurden, enthalten die Problembeschreibungen sowohl die neuen als auch die bisherigen Beschreibungen, um den Übergang besser zu unterstützen.",
    "Note: If you have any Cortex filters, starring policies, exclusion policies, scoring rules, log forwarding queries, or automations rules configured for XSOAR / 3rd party SIEM, we advise you update those to support the changes before activating the feature (for example, change the query to include the previous description that is still available in the new description, instead of looking for an exact match).":
      "Hinweis: Wenn Sie Cortex-Filter, Markierungsrichtlinien, Ausschlussrichtlinien, Bewertungsregeln, Abfragen zur Protokollweiterleitung oder Automatisierungsregeln für XSOAR / SIEM von Drittanbietern konfiguriert haben, empfehlen wir, diese vor dem Aktivieren der Funktion so zu aktualisieren, dass sie die Änderungen unterstützen (ändern Sie z. B. die Abfrage so, dass sie die bisherige Beschreibung einschließt, die weiterhin in der neuen Beschreibung enthalten ist, anstatt nach einer exakten Übereinstimmung zu suchen).",
  },

  patterns: [
    { re: /^Distribution list\s+(\(\d+\))$/, tpl: "Verteilerliste $1" },
    { re: /^(\d+)\s+hours?$/, tpl: "$1 Std." },
    { re: /^Use configured timezone\s+(\(.+\))$/, tpl: "Konfigurierte Zeitzone verwenden $1" },
    { re: /^(\d+)\s+minutes?$/, tpl: "$1 Min." },
    { re: /^Results Preview - Matched\s+([\d,]+)\s+out of\s+([\d,]+)\s+Issues$/, tpl: "Ergebnisvorschau - $1 von $2 Problemen stimmen überein" },
    { re: /^domain name\s+(\(\d+\))$/, tpl: "Domänenname $1" },
    { re: /^(\d+)\s+days?$/, tpl: "$1 Tag(e)" },
    { re: /^(\d+)\s+Items?$/, tpl: "$1 Element(e)" },
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
