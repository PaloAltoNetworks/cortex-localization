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
    "Forensic Investigations": "Forensische Untersuchungen",
    "Investigation": "Untersuchung",
    "Evidence Collections": "Beweissammlungen",
    "New Issues": "Neue Probleme",
    "New Investigation": "Neue Untersuchung",
    "Create New Investigation": "Neue Untersuchung erstellen",
    "investigation Name": "Name der Untersuchung",
    "Your investigation Name": "Name Ihrer Untersuchung",
    "Save & Start A Collection": "Speichern und Sammlung starten",
    "Available to adopt": "Zur Übernahme verfügbar",
    "Override Report mode?": "Report-Modus überschreiben?",
    "Allow agents to block file hashes even when the Malware Profile is set to Report":
      "Agents erlauben, Datei-Hashes zu sperren, auch wenn das Malware-Profil auf Report eingestellt ist",
    "Override": "Überschreiben",
    "Endpoint name or IP": "Endpoint-Name oder IP",
    "TOTAL ITEMS": "ELEMENTE GESAMT",
    "NEW ISSUES": "NEUE PROBLEME",
    "LAST RECEIVED": "ZULETZT EMPFANGEN",

    // --- Command history / search-results grid columns ---
    "Command History": "Befehlsverlauf",
    "Collection ID": "Sammlungs-ID",
    "Command": "Befehl",
    "File Created": "Datei erstellt",
    "File Modified": "Datei geändert",
    "Generated Time": "Generierungszeit",
    "Investigation ID": "Untersuchungs-ID",
    "Line": "Zeile",
    "Result ID": "Ergebnis-ID",
    "Row UUID": "Zeilen-UUID",
    "Search ID": "Such-ID",
    "User SID": "Benutzer-SID",

    "Legacy Forensics": "Legacy-Forensik",
    "Legacy Artifact Collections - Windows": "Legacy-Artefaktsammlungen - Windows",
    "Timezone and Timestamp": "Zeitzone und Zeitstempel",
    "*This is a global application change, you can review in":
      "*Dies ist eine anwendungsweite Änderung. Sie können sie überprüfen unter",
    "Example:": "Beispiel:",
    "Archive History": "Archivverlauf",

    // --- Remote access tool logs / artifact screen ---
    "Remote Access": "Remotezugriff",
    "Connection ID": "Verbindungs-ID",
    "Connection Type": "Verbindungstyp",
    "Message": "Nachricht",
    "Source Host": "Quellhost",
    "Source Row UUID": "Quellzeilen-UUID",
    "Alias": "Alias",
    "AnyDesk Id": "AnyDesk ID",
    "Log Accessed": "Protokoll aufgerufen",
    "Log Created": "Protokoll erstellt",
    "Log File": "Protokolldatei",
    "Log Modified": "Protokoll geändert",
    // Sidebar list of evidence types (LogMeIn/TeamViewer are left untranslated as brand names;
    // AnyDesk ~ / User Access Logging are translated since they are descriptive names).
    "AnyDesk Connection Logs": "AnyDesk-Verbindungsprotokolle",
    "AnyDesk Trace Logs": "AnyDesk-Ablaufprotokolle",
    "User Access Logging": "Protokollierung des Benutzerzugriffs",

    // --- Artifact-detail common columns (deleted file/entry type) ---
    "Accessed": "Aufgerufen",
    "Deleted": "Gelöscht",
    "Entry Created": "Eintrag erstellt",
    "Entry Modified": "Eintrag geändert",
    "Original Path": "Ursprünglicher Pfad",
    "Deleted Data": "Gelöschte Daten",
    "Entry": "Eintrag",
    "Key Last Modified": "Schlüssel zuletzt geändert",
    "MRU Order": "MRU-Reihenfolge",
    "Value Path": "Wertpfad",
    "Context": "Kontext",
    "Executable Name": "Name der ausführbaren Datei",
    "Executable Path": "Pfad der ausführbaren Datei",

    // --- "File Access" artifact sidebar (All/Jumplists/OpenSavePidlMRU/Recent Files/ShellBags/
    // TypedPaths). OpenSavePidlMRU, ShellBags, and TypedPaths are literal Windows registry key
    // names, and are referenced by these same English names even in Japanese forensics work,
    // so they are left untranslated.
    "File Access": "Dateizugriff",
    "Jumplists": "Sprunglisten",
    "Recent Files": "Zuletzt verwendete Dateien",

    // --- "Network Data" artifact sidebar ---
    "Network Data": "Netzwerkdaten",
    "Interface": "Schnittstelle",
    "ARP Cache": "ARP-Cache",
    "DNS Cache": "DNS-Cache",
    "Hosts File": "Hosts-Datei",

    // --- "System Statistics" artifact sidebar, and the foreground/background usage-metric columns ---
    "System Statistics": "Systemstatistiken",
    "Application Resource Usage": "Ressourcennutzung der Anwendung",
    "Network Connectivity Usage": "Nutzung der Netzwerkkonnektivität",
    "Network Data Usage": "Netzwerkdatennutzung",
    "Background Bytes Read": "Gelesene Bytes im Hintergrund",
    "Background Bytes Written": "Geschriebene Bytes im Hintergrund",
    "Background Context Switches": "Kontextwechsel im Hintergrund",
    "Background Cycle Time": "Zykluszeit im Hintergrund",
    "Background Num Read Operations": "Anzahl Lesevorgänge im Hintergrund",
    "Background Num Write Operations": "Anzahl Schreibvorgänge im Hintergrund",
    "Background Number Of Flushes": "Anzahl Flushes im Hintergrund",
    "Face Time": "Face Time",
    "Foreground Bytes Read": "Gelesene Bytes im Vordergrund",
    "Foreground Bytes Written": "Geschriebene Bytes im Vordergrund",
    "Foreground Context Switches": "Kontextwechsel im Vordergrund",
    "Foreground Cycle Time": "Zykluszeit im Vordergrund",
    "Foreground Num Read Operations": "Anzahl Lesevorgänge im Vordergrund",
    "Foreground Num Write Operations": "Anzahl Schreibvorgänge im Vordergrund",
    "Foreground Number Of Flushes": "Anzahl Flushes im Vordergrund",
    "User Searches": "Benutzersuchen",

    // --- "Execution history"-type artifact sidebar (All/Amcache/Background Activity Monitor/
    // CidSizeMRU/LastVisitedPidlMRU/Prefetch/Recentfilecache/Shimcache/UserAssist/Windows
    // Activities). Amcache, CidSizeMRU, LastVisitedPidlMRU, Prefetch, Recentfilecache, Shimcache,
    // and UserAssist are literal Windows registry key/feature names, referenced by these same
    // English names even in Japanese forensics work, so they are left untranslated. Background
    // Activity Monitor and Windows Activities are translated since they are descriptive names.
    "Background Activity Monitor": "Background Activity Monitor",
    "Windows Activities": "Windows-Aktivitäten",

    // --- "Network Indicators"/"Data Access" tabs, detail-panel column headers ---
    "Network Indicators": "Netzwerkindikatoren",
    "Data Access": "Datenzugriff",
    "Earliest Activity": "Früheste Aktivität",
    "Latest Activity": "Neueste Aktivität",
    "Log Search": "Protokollsuche",
    "Browser History": "Browserverlauf",

    // --- Collections (triage/hunt collection creation wizard) ---
    "Exports": "Exporte",
    "Export all": "Alle exportieren",
    "Collections": "Sammlungen",
    "New Collection": "Neue Sammlung",
    "New Triage Collection": "Neue Triage-Sammlung",
    "triage collection name": "Name der Triage-Sammlung",
    "Add Collection Name": "Sammlungsnamen hinzufügen",
    "triage type": "Triage-Typ",
    "Select triage type": "Triage-Typ auswählen",
    "No endpoints. Please add triage type onlineif you would like to automate triage collections on specified endpoints.":
      "Keine Endpoints. Fügen Sie den Triage-Typ \"Online\" hinzu, wenn Sie Triage-Sammlungen auf bestimmten Endpoints automatisieren möchten.",
    "Please hit Next to continue": "Klicken Sie auf \"Next\", um fortzufahren",
    "Save Collection and Exit": "Sammlung speichern und beenden",
    "Volatiles": "Flüchtige Daten",
    "File Collections": "Dateisammlungen",
    "Custom File Collections": "Benutzerdefinierte Dateisammlungen",
    "Complete Configuration": "Konfiguration abschließen",
    "Save new preset": "Neue Voreinstellung speichern",
    "Select Presets (macOS)": "Voreinstellungen auswählen (macOS)",
    "Offline": "Offline",
    "Online": "Online",
    "Select Presets (Windows)": "Voreinstellungen auswählen (Windows)",
    "Select Presets (Linux)": "Voreinstellungen auswählen (Linux)",
    "No Collections Yet": "Noch keine Sammlungen",
    "Start adding collections": "Mit dem Hinzufügen von Sammlungen beginnen",
    "hunt collection name": "Name der Hunt-Sammlung",
    "New Hunt Collection": "Neue Hunt-Sammlung",
    "maximum concurrent endpoints": "Maximale Anzahl gleichzeitiger Endpoints",
    "One-Time Collection": "Einmalige Sammlung",
    "Repeat Collection Every": "Sammlung wiederholen alle",
    "Valid range time must be at least 1 hr. Scheduled hunts are executed based on the time zone of the agent":
      "Der gültige Zeitraum muss mindestens 1 Std. betragen. Geplante Hunts werden basierend auf der Zeitzone des Agents ausgeführt",

    // --- Investigation screen: automation/Playbook configuration, and
    // endpoint response-action result display ---
    "New Playbook": "Neues Playbook",
    "Hide Script Helper": "Skripthilfe ausblenden",
    "Upload a file": "Eine Datei hochladen",
    "Edit Automation Rule": "Automatisierungsregel bearbeiten",
    "To add rule conditions, select a field and its value using the filter or right-click on a table cell to select that field and value.":
      "Um Regelbedingungen hinzuzufügen, wählen Sie über den Filter ein Feld und dessen Wert aus oder klicken Sie mit der rechten Maustaste auf eine Tabellenzelle, um dieses Feld und diesen Wert auszuwählen.",
    "Select Automation": "Automatisierung auswählen",
    "Action Last Update": "Letzte Aktualisierung der Aktion",
    "Scanning Complete": "Scan abgeschlossen",
    "Hash": "Hash",
    "FILE PATHS": "DATEIPFADE",
    "Download definitions file": "Definitionsdatei herunterladen",
    // "investigation" is kept lowercase to match the actual displayed text (a casing
    // "Close User" (case-closing) terminology.
    "Edit investigation": "Untersuchung bearbeiten",
    "Close investigation": "Untersuchung schließen",
    "Add Name": "Namen hinzufügen",
    // A time-unit dropdown option (e.g. "Hrs"/"Days") in a schedule input such as
    // "Repeat Collection Every".
    "Hrs": "Std.",
    "Invalid time range selected, Please enter a valid range, minimum 1 hour.":
      "Ungültiger Zeitraum ausgewählt. Geben Sie einen gültigen Zeitraum von mindestens 1 Stunde ein.",

    // --- Investigation screen: the comment section, moving values to the
    // allow/block list, and the "Isolate endpoint" action ---
    "Add comment": "Kommentar hinzufügen",
    "Enter a comment": "Geben Sie einen Kommentar ein",
    "Edit comment": "Kommentar bearbeiten",
    // "case" is kept lowercase to match the actual displayed text (a casing inconsistency
    // in the product). Edits the ID of the case associated with this investigation, shown in
    // the investigation's detail panel.
    "Edit case ID": "Fall-ID bearbeiten",
    // Moves a hash/indicator from within an investigation to the allow list. A different
    // action from xql-search.js's "Add to allow list", so added as a separate entry.
    "Move to allow list": "In Zulassungsliste verschieben",
    // Same as above, but moving to the block list instead.
    "Move to block list": "In Sperrliste verschieben",
    "Value is already added to block list": "Der Wert wurde bereits zur Sperrliste hinzugefügt",

    // --- The "Isolate endpoint" action from within an investigation ---
    "ISOLATE ENDPOINTS": "ENDPOINTS ISOLIEREN",
    // Followed immediately by a separate element giving the target count (e.g. "1 endpoint",
    // handled in patterns below). Since the sentence is split across two elements, this part
    // alone doesn't form a fully self-contained translation, but reads naturally once the count
    // follows the colon in the actual UI.
    "You are about to isolate": "Sie sind im Begriff zu isolieren:",
    // Similar to endpoint-policy-management.js's "Isolation will block host network access,
    // except for traffic to Cortex XDR." but says "endpoint" instead of "host" and has no
    // trailing period (added as a separate entry to exact-match the actual displayed text).
    "Isolation will block endpoint network access, except for traffic to Cortex XDR":
      "Durch die Isolierung wird der Netzwerkzugriff des Endpoints blockiert, mit Ausnahme des Datenverkehrs zu Cortex XDR",
    "Edit isolation comment": "Isolierungskommentar bearbeiten",
    // The original text says "Cancel isolate?" rather than the more natural "Cancel
    // isolation?", but kept verbatim here to exact-match what's actually displayed.
    "Cancel isolate?": "Isolierung abbrechen?",
    "Note: Cancellation is not guaranteed if the action is in progress by the time the request is processed.":
      "Hinweis: Der Abbruch ist nicht garantiert, wenn die Aktion zum Zeitpunkt der Verarbeitung der Anfrage bereits ausgeführt wird.",
    "Cancel action": "Aktion abbrechen",
    // Alongside the generic "Cancel action", there are per-action-type cancel buttons/confirm
    // dialogs. Like "Cancel isolate?" (for isolation), these are the file-retrieval-specific
    // cancel action (see "files retrieval" in general-settings.js's lowercase action-name list).
    "Cancel files retrieval": "Dateiabruf abbrechen",
    "Cancel files retrieval?": "Dateiabruf abbrechen?",
    // A separate label (no question mark), used on a button etc., distinct from the "Cancel
    // isolate?" confirmation-dialog text above.
    "Cancel isolation": "Isolierung abbrechen",
    // Updates the expiration of a pending action (isolation, file retrieval, etc.) — the same
    // concept as general-settings.js's "Action Center Expiration" (expiration can be set
    // within 1-30 days from creation; updating it only affects actions in "pending" status).
    "Update expiration": "Ablauf aktualisieren",
  },

  patterns: [
    // The action-type name (variable) is managed separately from the lowercase action-name list
    // elsewhere (e.g. "resume endpoint protection" in general-settings.js), so it is left
    // untranslated here.
    { re: /^Detailed Results - (.+) \(ID (\d+)\)$/, tpl: "Detaillierte Ergebnisse - $1 (ID $2)" },
    // Target count in the "Isolate endpoint" / "Cancel action" dialogs (e.g. "1 endpoint",
    // "5 endpoints").
    { re: /^(\d+)\s+endpoints?$/, tpl: "$1 Endpoints" },
    { re: /^This pending action will be canceled for\s+(\d+)\s+endpoints?\.$/,
      tpl: "Diese ausstehende Aktion wird für $1 Endpoints abgebrochen." },
    // The endpoint name (an identifier) is left untranslated.
    { re: /^Changing isolation comment for\s+(.+)$/, tpl: "Isolierungskommentar für $1 wird geändert" },
  ],

  skip: [],
};
