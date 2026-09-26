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

const dictionaryIssueDetailScreen = {
  exact: {
    "Affected Assets": "Betroffene Assets",
    "Action:": "Aktion:",
    "Assignee:": "Zugewiesen an:",
    "Cloud Configuration Issue Rule": "Problemregel für Cloud-Konfiguration",
    "Cloud Configuration Layout": "Layout für Cloud-Konfiguration",
    "Compute Policy": "Compute-Richtlinie",
    "Copy issue URL": "Problem-URL kopieren",
    "Created:": "Erstellt:",
    "Detected (Scanned)": "Erkannt (gescannt)",
    "Detection Logic": "Erkennungslogik",
    "Evidence": "Nachweise",
    "Issue Layout:": "Problem-Layout:",
    "Linked Cases": "Verknüpfte Fälle",
    "No Changes": "Keine Änderungen",
    "Open in new tab": "In neuem Tab öffnen",
    "Press SPACE to select this row": "Drücken Sie die LEERTASTE, um diese Zeile auszuwählen",
    "Resolution": "Lösung",
    "Status:": "Status:",
    "Triggered by rule:": "Ausgelöst durch Regel:",
    "Updated:": "Aktualisiert:",
    "War Room": "War Room",
    "Work Plan": "Arbeitsplan",

    // --- Built-in rule names (fixed catalog) ---
    "Auditd unmonitored file permission changes found":
      "Nicht von Auditd überwachte Änderungen an Dateiberechtigungen gefunden",
    "Auditd unmonitored kernel module loading and unloading found":
      "Nicht von Auditd überwachtes Laden und Entladen von Kernelmodulen gefunden",
    "Auditd unmonitored network configuration changes found":
      "Nicht von Auditd überwachte Änderungen der Netzwerkkonfiguration gefunden",
    "Linux host with ICMP packet redirect enabled found":
      "Linux-Host mit aktivierter ICMP-Paketumleitung gefunden",
    "Linux host with unrestricted default user umask found":
      "Linux-Host mit uneingeschränkter Standard-umask für Benutzer gefunden",
    "Linux host without AIDE service found": "Linux-Host ohne AIDE-Dienst gefunden",
    "Minimum days between password changes is misconfigured":
      "Mindestanzahl an Tagen zwischen Kennwortänderungen ist falsch konfiguriert",
  },

  patterns: [
    { re: /^Open for (\d+)\s+minutes?$/, tpl: "Offen seit $1 Min." },
    { re: /^Open for (\d+)\s+hours?$/, tpl: "Offen seit $1 Std." },
    { re: /^Open for (\d+)\s+days?$/, tpl: "Offen seit $1 Tag(en)" },
  ],

  skip: [],
};
