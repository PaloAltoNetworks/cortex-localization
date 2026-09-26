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
    "Vulnerability": "Schwachstelle",
    "Assets": "Assets",
    "Publish Date": "Veröffentlichungsdatum",
    "Display": "Anzeige",
    "Collapse": "Reduzieren",
    "Expand": "Erweitern",
    "Added on": "Hinzugefügt am",
    "Add filters": "Filter hinzufügen",
    "Clear All": "Alle löschen",
    "Click to open list": "Klicken, um Liste zu öffnen",
    "Click to filter": "Klicken, um zu filtern",
    "Actions": "Aktionen",
    "Critical": "Kritisch",
    "High": "Hoch",
    "Medium": "Mittel",
    "Low": "Niedrig",
    "Status": "Status",
    "Category": "Kategorie",
    "Severity": "Schweregrad",
    "Refresh": "Aktualisieren",
    "Search": "Suchen",
    "Settings": "Einstellungen",
    "Help": "Hilfe",
    "Dashboard": "Dashboard",
    "Dashboards": "Dashboards",
    "Dashboards & Reports": "Dashboards und Berichte",
    "Dashboards Manager": "Dashboard-Manager",
    "Cases": "Fälle",
    "Cases & Issues": "Fälle und Probleme",
    "Issue": "Problem",
    "Issues": "Probleme",
    "Open": "Offen",
    "Closed": "Geschlossen",

    // --- Left navigation (common to all dashboards) ---
    "Action Center": "Aktionscenter",
    "Agentic Assistant Hub": "Agentic Assistant Hub",
    "AI Prompts": "KI-Prompts",
    "AI Security": "KI-Sicherheit",
    "All Assets": "Alle Assets",
    "All Endpoints": "Alle Endpoints",
    "Analytics Rules": "Analyseregeln",
    "Application Security": "Anwendungssicherheit",
    "Attack Surface": "Angriffsfläche",
    "Attack Surface Issues": "Probleme der Angriffsfläche",
    "Automation": "Automatisierung",
    "Automation Rules": "Automatisierungsregeln",
    "Back to main": "Zurück zur Hauptseite",
    "BIOC": "BIOC",
    "IOC": "IOC",
    "Case Configuration": "Fallkonfiguration",
    "Code to Cloud Coverage": "Code-to-Cloud-Abdeckung",
    "Compliance": "Compliance",
    "Configurations": "Konfigurationen",
    "Correlations": "Korrelationen",
    "Data Security": "Datensicherheit",
    "Detection Rules": "Erkennungsregeln",
    "Device Control Violations": "Verstöße gegen die Gerätesteuerung",
    "Disk Encryption Visibility": "Transparenz der Festplattenverschlüsselung",
    "Endpoints": "Endpoints",
    "File Integrity Monitoring": "Dateiintegritätsüberwachung",
    "Forensics": "Forensik",
    "Graph Search": "Graphsuche",
    "Groups": "Gruppen",
    "Host Firewall": "Host-Firewall",
    "Host Insights": "Host-Einblicke",
    "Identity Security": "Identitätssicherheit",
    "Installations": "Installationen",
    "Inventory": "Inventar",
    "Investigation & Response": "Untersuchung und Reaktion",
    "Kubernetes Security": "Kubernetes-Sicherheit",
    "Live Terminal": "Live-Terminal",
    "Modules": "Modulübersicht",
    "Playbooks": "Playbook",
    "Playground": "Playground",
    "Policy Management": "Richtlinienverwaltung",
    "Posture Management": "Verwaltung der Sicherheitslage",
    "Query Center": "Abfragecenter",
    "Query Templates": "Abfragevorlagen",
    "Reports": "Berichte",
    "Response": "Reaktion",
    "Risk Scores": "Risikobewertungen",
    "Rules & Policies": "Regeln und Richtlinien",
    "Scheduled Queries": "Geplante Abfragen",
    "Scripts": "Skripte",
    "Supply Chain Security": "Lieferkettensicherheit",
    "Tenant Navigator": "Tenant-Navigator",
    "Threat Management": "Bedrohungsmanagement",
    "Vulnerability Management": "Schwachstellenmanagement",
    "XQL Search": "XQL-Suche",
    "Select": "Auswählen",
    "Select..": "Auswählen..",

    // --- Widget common empty/error states ---
    "Feature Unavailable": "Funktion nicht verfügbar",
    "Inadequate License": "Unzureichende Lizenz",
    "No Permissions": "Keine Berechtigungen",
    "No Results Found": "Keine Ergebnisse gefunden",
    "No data": "Keine Daten",
    "No data is available as the dataset configured for this widget doesn't exist.":
      "Keine Daten verfügbar, da der für dieses Widget konfigurierte Datensatz nicht existiert.",
    "Private Widget": "Privates Widget",
    "This asset is not associated with any groups": "Dieses Asset ist keiner Gruppe zugeordnet",
    "This widget has been deleted.": "Dieses Widget wurde gelöscht.",
    "This widget is unavailable.": "Dieses Widget ist nicht verfügbar.",
    "Widget Deleted": "Widget gelöscht",
    "You do not have permission to view this private widget":
      "Sie haben keine Berechtigung, dieses private Widget anzuzeigen",
    "You don't have the license required to view this widget.":
      "Sie haben nicht die erforderliche Lizenz, um dieses Widget anzuzeigen.",
    "You don't have the permissions required to view this widget.":
      "Sie haben nicht die erforderlichen Berechtigungen, um dieses Widget anzuzeigen.",

    // --- ag-Grid common UI ---
    "Drag here to set column labels": "Hierher ziehen, um Spaltenbeschriftungen festzulegen",
    "Drag here to set row groups": "Hierher ziehen, um Zeilengruppen festzulegen",
    "Pin Column": "Spalte fixieren",
    "Hide Column": "Spalte ausblenden",
    "Autosize column": "Spaltenbreite automatisch anpassen",
    "Autosize all columns": "Alle Spaltenbreiten automatisch anpassen",
    "Row Height": "Zeilenhöhe",
    "Column Fit": "Spaltenanpassung",
    "Compact": "Kompakt",
    "Specious": "Großzügig",
    "Fit Content": "An Inhalt anpassen",
    "Distribute": "Gleichmäßig verteilen",
    "Fill Content": "Mit Inhalt füllen",
    "Details": "Details",
    "Discover Now": "Jetzt erkennen",
    "Copy text to clipboard": "Text in die Zwischenablage kopieren",
    "Copy entire row": "Gesamte Zeile kopieren",
    "Show empty rows": "Leere Zeilen anzeigen",
    "Hide empty rows": "Leere Zeilen ausblenden",
    "Include empty values": "Leere Werte einbeziehen",
    "Open in VirusTotal": "In VirusTotal öffnen",
    "Open in Agentic Assistant": "In Agentic Assistant öffnen",
    "Open in Editor": "Im Editor öffnen",
    "Duplicate": "Duplizieren",
    "Share": "Teilen",
    "Change owner": "Besitzer ändern",
    "Revert": "Zurücksetzen",
    "View saved filters": "Gespeicherte Filter anzeigen",
    "Export filters": "Filter exportieren",
    "View Examples": "Beispiele anzeigen",
    "Edit": "Bearbeiten",
    "Save as New": "Als neu speichern",
    "(Clear Selection)": "(Auswahl aufheben)",
    "Username": "Benutzername",
    "Password": "Passwort",
    "View": "Anzeigen",
    "Cards view": "Kartenansicht",
    "Learn more": "Weitere Informationen",
    "Export to file": "In Datei exportieren",
    "Type your search here": "Geben Sie hier Ihren Suchbegriff ein",
    "Search by name or description": "Nach Name oder Beschreibung suchen",
    "here": "hier",
    "Please fill out this field.": "Bitte füllen Sie dieses Feld aus.",
    "Discard changes?": "Änderungen verwerfen?",
    "Unsaved Changes": "Nicht gespeicherte Änderungen",
    "You have unsaved changes. Are you sure you want to leave? All unsaved data will be lost.":
      "Sie haben nicht gespeicherte Änderungen. Möchten Sie die Seite wirklich verlassen? Alle nicht gespeicherten Daten gehen verloren.",
    "Unsaved changes will be lost.": "Nicht gespeicherte Änderungen gehen verloren.",
    "Discard": "Verwerfen",
    "Changes will not be saved.": "Änderungen werden nicht gespeichert.",
    "Discard changes": "Änderungen verwerfen",
    "Changes were not saved, if you proceed you will lose your changes":
      "Änderungen wurden nicht gespeichert. Wenn Sie fortfahren, gehen Ihre Änderungen verloren",
    "Press SPACE to select this row": "Drücken Sie die LEERTASTE, um diese Zeile auszuwählen",
    "Press SPACE to deselect this row": "Drücken Sie die LEERTASTE, um die Auswahl dieser Zeile aufzuheben",
    "You must enter name": "Sie müssen einen Namen eingeben",
    "Enter Name": "Namen eingeben",
    "Enter Email": "E-Mail-Adresse eingeben",
    "Search in table...": "In Tabelle suchen...",
    // "Search...": the placeholder of generic search boxes. Most of them do a substring match against
    // mislead the user into thinking Japanese input works, so this entry is removed (left untranslated,
    // showing the original English).
    "Define a value here...": "Geben Sie hier einen Wert ein...",
    "Remove filters": "Filter entfernen",
    "Save filters": "Filter speichern",
    "Save Filter": "Filter speichern",
    "filter name": "Filtername",
    "Share this filter": "Diesen Filter teilen",
    "Show filter panel": "Filterbereich anzeigen",
    "Hide filter panel": "Filterbereich ausblenden",
    "Group ID": "Gruppen-ID",
    "Installers": "Installationsprogramme",
    "Command and Control": "Command and Control",
    "Credential Access": "Zugriff auf Anmeldeinformationen",
    "Defense Impairment": "Beeinträchtigung der Abwehr",
    "Discovery": "Erkundung",
    "Execution": "Ausführung",
    "Exfiltration": "Exfiltration",
    "Initial Access": "Erstzugriff",
    "Lateral Movement": "Laterale Bewegung",
    "Persistence": "Persistenz",
    "Privilege Escalation": "Rechteausweitung",
    "Reconnaissance": "Aufklärung",
    "Resource Development": "Ressourcenentwicklung",
    "Add description here": "Beschreibung hier hinzufügen",
    "Specify description": "Beschreibung angeben",
    "Remove description": "Beschreibung entfernen",
    "Enter description": "Beschreibung eingeben",
    "Hide Widgets": "Widgets ausblenden",
    "Show Widgets": "Widgets anzeigen",

    // --- Warnings/links common to multiple dashboards ---
    "License Violation warning": "Warnung zu Lizenzverstoß",
    "See Data Ingestion": "Datenaufnahme anzeigen",
    "Open Issues": "Offene Probleme",
    "Compliance Score": "Compliance-Bewertung",
    "Not Applicable": "Nicht zutreffend",
    "not applicable": "nicht zutreffend",
    "Other": "Sonstiges",
    "Workloads": "Workloads",
    "cloud account": "Cloud-Konto",
    "Cloud": "Cloud",
    "Identity": "Identität",
    "Network": "Netzwerk",
    "from last month": "seit letztem Monat",
    "MTTR": "MTTR",
    "Last 24H": "Letzte 24 Std.",
    "Last 30D": "Letzte 30 Tage",
    "Custom": "Benutzerdefiniert",
    "Security Services": "Sicherheitsdienste",
    "Notifications": "Benachrichtigungen",
    "Cortex CLOUD License": "Cortex CLOUD-Lizenz",
    "Cortex - Analytics": "Cortex - Analysen",
    "Management Audit Logs": "Verwaltungs-Audit-Logs",
    "Agent Audit Logs": "Agent-Audit-Logs",
    "XDR Collector Audit Logs": "XDR Collector-Audit-Logs",
    "Health Issues": "Integritätsprobleme",
    "Issue Exception & Exclusion": "Ausnahmen und Ausschlüsse für Probleme",
    "Data Sources & Integrations": "Datenquellen und Integrationen",

    // --- Tooltip (shown on hover, inside ngb-popover-window) ---
    "Connecting a data source does not imply that all detectors in the same category will be relevant for that source. Rule applicability should be assessed based on the specific context.":
      "Das Verbinden einer Datenquelle bedeutet nicht, dass alle Detektoren derselben Kategorie für diese Quelle relevant sind. Die Anwendbarkeit von Regeln sollte anhand des jeweiligen Kontexts beurteilt werden.",

    // --- "Select tactics and techniques" modal (the MITRE ATT&CK matrix, shared across screens) ---
    // The individual technique/sub-technique names (each cell's variable text) are instead made
    // eligible for AI (dynamic) translation on the content.js side.
    "Select tactics and techniques": "Taktiken und Techniken auswählen",
    "sub-technique": "Untertechnik",
    // Screen-reader-only labels for icons (not visible on screen).
    "mitre logo": "MITRE-Logo",
    "free search": "Freitextsuche",
  },

  patterns: [
    // <u-file-upload-dropzone-hint> file-upload component; the format/extension part is left untranslated)
    { re: /^Supported format:\s*(.+)$/, tpl: "Unterstütztes Format: $1" },

    { re: /^([\d,]+)\s+results$/, tpl: "$1 Ergebnisse" },

    { re: /^\+\s*(\d+)\s+[Mm]ore$/, tpl: "+ $1 weitere" },

    { re: /^(\d+)\s+selected$/i, tpl: "$1 ausgewählt" },

    { re: /^selected out of\s+([\d,]+)$/i, tpl: "ausgewählt (von insgesamt $1)" },

    { re: /^(\d[\d,.]*[KkMm]?)\s+Impacted Assets$/, tpl: "$1 betroffene Assets" },

    { re: /^Notifications\s+(\(.+\))$/, tpl: "Benachrichtigungen $1" },

    { re: /^(\d[\d,.]*)\s+days$/, tpl: "$1 Tage" },

    // Ingestion-quota-exceeded warning (the date/day-count parts are dynamic).
    {
      re: /^Based on a (\d+) day average calculation from (.+) to (.+), your daily default ingestion quota is exceeded\. Increase your license limit or reduce your daily ingestion; otherwise, you can expect data processing delays or data not being collected by the application$/,
      tpl: "Basierend auf einer Durchschnittsberechnung über $1 Tage ($2 bis $3) wird Ihr tägliches Standardkontingent für die Datenaufnahme überschritten. Erhöhen Sie Ihr Lizenzlimit oder reduzieren Sie Ihre tägliche Datenaufnahme; andernfalls kann es zu Verzögerungen bei der Datenverarbeitung kommen oder Daten werden von der Anwendung nicht erfasst",
    },

    // ag-Grid's right-click menu: "Show rows with 'X'" / "Hide rows with 'X'".
    { re: /^Show rows with\s+(['"].*['"])$/, tpl: "Zeilen mit $1 anzeigen" },
    { re: /^Hide rows with\s+(['"].*['"])$/, tpl: "Zeilen mit $1 ausblenden" },
    // ag-Grid's date-column filter: "Show rows N days prior to 'X'" / "Show rows N days after 'X'".
    { re: /^Show rows\s+(\d+)\s+days prior to\s+(['"].*['"])$/, tpl: "Zeilen bis $1 Tage vor $2 anzeigen" },
    { re: /^Show rows\s+(\d+)\s+days after\s+(['"].*['"])$/, tpl: "Zeilen bis $1 Tage nach $2 anzeigen" },
    // XIF editor heading: "User defined rules (Last updated on Jun 4th 2026)".
    { re: /^User defined rules\s*\(Last updated on\s+(.+)\)$/, tpl: "Benutzerdefinierte Regeln (zuletzt aktualisiert am $1)" },
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
