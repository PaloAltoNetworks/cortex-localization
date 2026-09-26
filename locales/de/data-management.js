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

const dictionaryDataManagement = {
  exact: {
    // --- Dataset Management screen ---
    "Cold Range": "Cold-Zeitraum",
    "Dataset": "Datensatz",
    "Dataset Name": "Datensatzname",
    "Dataset Views": "Datensatzansichten",
    "Hot Range": "Hot-Zeitraum",
    "Hot Storage License": "Hot-Storage-Lizenz",
    "Log Update Type": "Protokollaktualisierungstyp",
    "Logs": "Protokolle",
    "Lookup": "Nachschlagetabelle",
    "Raw": "Raw",
    "System Audit": "Systemaudit",
    "Total Days Stored": "Gespeicherte Tage insgesamt",
    "Total Size Stored": "Gespeicherte Größe insgesamt",
    "Average Daily Size": "Durchschnittliche tägliche Größe",
    "Average Event Size": "Durchschnittliche Ereignisgröße",
    "Data tier": "Datenebene",
    "Default Query Target": "Standardabfrageziel",
    "Source Query": "Quellabfrage",
    "TTL": "TTL",
    "TTL(minutes)": "TTL (Minuten)",
    "Total Events": "Ereignisse insgesamt",
    "Is Valid": "Ist gültig",
    "Related Tables": "Verknüpfte Tabellen",
    "New Dataset View": "Neue Datensatzansicht",
    "Dataset View Name": "Name der Datensatzansicht",
    "Created At": "Erstellt am",
    "Add Lookup": "Nachschlagetabelle hinzufügen",
    "Upload a csv, tsv, or json file (max. 30MB) to be used as a dataset":
      "Laden Sie eine CSV-, TSV- oder JSON-Datei (max. 30 MB) hoch, die als Datensatz verwendet werden soll",
    "Drag and Drop a file here": "Datei hierher ziehen und ablegen",
    "browse": "durchsuchen Sie",
    "your files": "Ihre Dateien",
    "Define dataset name": "Datensatznamen festlegen",

    // --- Parsing Rules screen ---
    "User Defined": "Benutzerdefiniert",
    "Default Rules": "Standardregeln",
    "Both": "Beide",
    "Simulate": "Simulieren",
    "Event ID": "Ereignis-ID",
    "Input Logs": "Eingabeprotokolle",
    "Line number": "Zeilennummer",
    "Logs output": "Protokollausgabe",
    "No output logs": "Keine Ausgabeprotokolle",
    "Output Logs": "Ausgabeprotokolle",
    "Raw log": "Rohprotokoll",
    "Show more": "Mehr anzeigen",
    "Success": "Erfolgreich",
    "XQL Samples": "XQL-Beispiele",
    "Sample time": "Stichprobenzeit",
    "Layout": "Layout",
    "Filters": "Filteroptionen",
    "Restore default layout": "Standardlayout wiederherstellen",
    "APPEARANCE": "DARSTELLUNG",
    "LOG FORMAT": "PROTOKOLLFORMAT",
    "TREE": "BAUM",
    "Search column": "Spalte suchen",
    "Remove all": "Alle entfernen",
    "Add all": "Alle hinzufügen",
    "You can change your parsing rules and try again": "Sie können Ihre Parsing-Regeln ändern und es erneut versuchen",

    // --- Compute Units Usage screen ---
    "API Query": "API-Abfrage",
    "Agent and LLM consumption is currently shown for informational purposes only and does not impact your Compute Unit balance.":
      "Der Agent- und LLM-Verbrauch wird derzeit nur zu Informationszwecken angezeigt und wirkt sich nicht auf Ihr Compute-Unit-Guthaben aus.",
    "Agentic Assistant": "Agentischer Assistent",
    "Agents & LLM": "Agents und LLM",
    "Compute Unit Usage": "Compute-Unit-Nutzung",
    "Compute units": "Compute Units",
    "Consumption by category over time": "Verbrauch nach Kategorie im Zeitverlauf",
    "Daily limit": "Tageslimit",
    "LLM Task": "LLM-Aufgabe",
    "Notebook": "Notebook",
    "Queries": "Abfragen",
    "Set daily limit": "Tageslimit festlegen",
    "Set a daily limit to manage your compute unit consumption. This helps distribute your annual quota over time and prevent early depletion.":
      "Legen Sie ein Tageslimit fest, um Ihren Compute-Unit-Verbrauch zu steuern. So verteilen Sie Ihr Jahreskontingent über die Zeit und verhindern, dass es vorzeitig aufgebraucht wird.",
    "Queries limit": "Abfragelimit",
    "No limit": "Kein Limit",
    "This is your": "Dies ist Ihr",
    "Timestamp": "Zeitstempel",
    "Total annual usage": "Jährliche Gesamtnutzung",
    "Trigger Type": "Auslösertyp",
    "Unused": "Ungenutzt",
    "Usage by type": "Nutzung nach Typ",
    "XQL Queries": "XQL-Abfragen",
    "Billable": "Abrechenbar",
    "Trigger/PAPI Key ID": "Auslöser-/PAPI-Schlüssel-ID",
    "Query/Prompt": "Abfrage/Prompt",
  },

  patterns: [
    { re: /^Cortex GB hot retention:\s*(\d+)\s*days$/, tpl: "Cortex GB Hot-Aufbewahrung: $1 Tage" },
    { re: /^Cortex EP hot retention:\s*(\d+)\s*days$/, tpl: "Cortex EP Hot-Aufbewahrung: $1 Tage" },
    { re: /^Cortex EP issues and cases hot retention:\s*(\d+)\s*days$/, tpl: "Cortex EP Hot-Aufbewahrung für Probleme und Fälle: $1 Tage" },
    { re: /^Cortex GB issues and cases hot retention:\s*(\d+)\s*days$/, tpl: "Cortex GB Hot-Aufbewahrung für Probleme und Fälle: $1 Tage" },
    { re: /^IN VIEW\s+(\(\d+\))$/, tpl: "IN ANSICHT $1" },
    { re: /^ADD COLUMNS\s+(\(\d+\))$/, tpl: "SPALTEN HINZUFÜGEN $1" },
    // "Divide annual quota evenly" and "[55 per day]" render as separate text
    // nodes, so each is pattern-matched individually.
    { re: /^Divide annual quota evenly$/, tpl: "Jahreskontingent gleichmäßig verteilen" },
    { re: /^(\d+)% of annual quota$/, tpl: "$1 % des Jahreskontingents" },
    { re: /^\[(\d+) per day\]$/, tpl: "[$1 pro Tag]" },
  ],

  skip: [],
};
