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

const dictionaryCompliance = {
  exact: {
    // --- Compliance > Standards Catalog screen ---
    "Standards Catalog": "Standardkatalog",
    "Create Standard": "Standard erstellen",
    "Create New Standard": "Neuen Standard erstellen",
    "Assign Controls": "Kontrollen zuweisen",
    "Select Controls": "Kontrollen auswählen",
    "Create New Control": "Neue Kontrolle erstellen",
    "Control name": "Kontrollname",
    "Sub category": "Unterkategorie",
    "Select custom standards": "Benutzerdefinierte Standards auswählen",
    "Delete custom standard?": "Benutzerdefinierten Standard löschen?",
    "Delete Custom Control": "Benutzerdefinierte Kontrolle löschen",

    // --- Compliance > Assessment Profiles screen ---
    "Assessment Profiles": "Bewertungsprofile",
    "Asset Group Name": "Name der Asset-Gruppe",
    "Create New Assessment": "Neue Bewertung erstellen",
    "Enabled": "Aktiviert",
    "Report Frequency (UTC)": "Berichtshäufigkeit (UTC)",
    "Report Targets": "Berichtsempfänger",
    "Standard Name": "Name des Standards",
    "Yes": "Ja",
    "New Assessment Profile": "Neues Bewertungsprofil",
    "Standards and Asset Group": "Standards und Asset-Gruppe",
    "Configure the profile name and report settings.": "Konfigurieren Sie den Profilnamen und die Berichtseinstellungen.",
    "Generate a scheduled report": "Geplanten Bericht erstellen",
    "Report Types": "Berichtstypen",
    "Add profile name": "Profilnamen hinzufügen",
    "Select a compliance standard and asset group.": "Wählen Sie einen Compliance-Standard und eine Asset-Gruppe aus.",
    "Select standard": "Standard auswählen",
    "Review your assessment profile configuration.": "Überprüfen Sie die Konfiguration Ihres Bewertungsprofils.",
    "Assessment Profile ID": "Bewertungsprofil-ID",

    // --- Assessment Profiles grid row actions ---
    "View Asset Group": "Asset-Gruppe anzeigen",
    "View Assessment Results": "Bewertungsergebnisse anzeigen",
    "Export to PDF": "Als PDF exportieren",
    "Export to CSV": "Als CSV exportieren",
    "Delete Report": "Bericht löschen",
  },

  patterns: [
    { re: /^at (\d{1,2}:\d{2}) every day$/, tpl: "täglich um $1" },
    // The body text of the custom standard/control delete-confirmation dialog. The name
    // (an identifier) is left untranslated.
    { re: /^You are about to delete "(.+)"$/, tpl: "Sie sind dabei, \"$1\" zu löschen" },
    // The original text has a typo, "want do delete" instead of "want to delete", but is kept
    // verbatim here to exact-match what's actually displayed.
    { re: /^Are you sure you want do delete "(.+)"\?$/, tpl: "Möchten Sie \"$1\" wirklich löschen?" },
    { re: /^This will disable assessment profile "(.+)"$/, tpl: "Dadurch wird das Bewertungsprofil \"$1\" deaktiviert" },
    { re: /^This will delete profile "(.+)" permanently$/, tpl: "Dadurch wird das Profil \"$1\" endgültig gelöscht" },
  ],

  skip: [],
};
