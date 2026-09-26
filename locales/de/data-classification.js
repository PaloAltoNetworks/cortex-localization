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

const dictionaryDataClassification = {
  exact: {
    // --- Data Patterns tab ---
    "Add Pattern": "Muster hinzufügen",
    "Data Pattern Name": "Name des Datenmusters",
    "Enter data pattern name": "Namen des Datenmusters eingeben",
    "Enter context words": "Kontextwörter eingeben",
    "Enter regex": "Regulären Ausdruck eingeben",
    "Enter test string here": "Testzeichenfolge hier eingeben",
    "Geo": "Geografie",
    "Select Geos": "Geografien auswählen",
    "Last Updated By": "Zuletzt aktualisiert von",
    "Add description": "Beschreibung hinzufügen",
    "Apply data patterns to the data profile:": "Datenmuster auf das Datenprofil anwenden:",
    "Built-in Data Pattern": "Integriertes Datenmuster",
    "Context Words": "Kontextwörter",
    "Create New Data Pattern": "Neues Datenmuster erstellen",
    "Custom patterns are added as OR statements to custom profiles only. You can edit it later from the data profile page.":
      "Benutzerdefinierte Muster werden nur benutzerdefinierten Profilen als OR-Bedingungen hinzugefügt. Sie können sie später auf der Seite des Datenprofils bearbeiten.",
    "Enter an integer from 10 to 150.": "Geben Sie eine ganze Zahl von 10 bis 150 ein.",
    "Enter your test string, and we will highlight any matches based on the regex you configure.":
      "Geben Sie Ihre Testzeichenfolge ein. Übereinstimmungen mit dem konfigurierten regulären Ausdruck werden hervorgehoben.",
    "Full Masking": "Vollständige Maskierung",
    "No results found.": "Keine Ergebnisse gefunden.",
    "Partial Masking": "Teilweise Maskierung",
    "Proximity": "Nähe",
    "Regular Expression (Regex)": "Regulärer Ausdruck (Regex)",
    "Show Advanced Options": "Erweiterte Optionen anzeigen",
    "Hide Advanced Options": "Erweiterte Optionen ausblenden",
    "Test": "Testen",
    "Test Data Pattern": "Datenmuster testen",
    "Test results appear here": "Testergebnisse werden hier angezeigt",
    "Uses the Rust regular expression syntax.": "Verwendet die Rust-Syntax für reguläre Ausdrücke.",
    "masking level": "Maskierungsstufe",

    // --- Data Topics tab (translated in full since there are few entries) ---
    "Topic Name": "Themenname",
    "Last Updated At": "Zuletzt aktualisiert am",
    "Business Continuity Plans": "Pläne zur Geschäftskontinuität",
    "CVs": "Lebensläufe",
    "Corporate Filings": "Unternehmensmeldungen",
    "Financial Transactions & Payroll": "Finanztransaktionen und Gehaltsabrechnung",
    "Legal Agreements": "Rechtliche Vereinbarungen",
    "Medical Certificates and Records": "Ärztliche Bescheinigungen und Unterlagen",
    "Tax Documents": "Steuerdokumente",
    "Business continuity and disaster recovery plans. These strategic documents outline procedures for maintaining operations during disruptions.":
      "Pläne zur Geschäftskontinuität und Notfallwiederherstellung. Diese strategischen Dokumente beschreiben Verfahren zur Aufrechterhaltung des Betriebs bei Störungen.",
    "Financial transaction records including invoices, receipts, and payment confirmations, as well as Employee compensation records including salary details, deductions, and payment history.":
      "Aufzeichnungen zu Finanztransaktionen einschließlich Rechnungen, Quittungen und Zahlungsbestätigungen sowie Vergütungsunterlagen von Mitarbeitern einschließlich Gehaltsangaben, Abzügen und Zahlungsverlauf.",
    "Formal contracts and service terms between parties. These files define legal obligations related to business operations.":
      "Formelle Verträge und Servicebedingungen zwischen Parteien. Diese Dateien legen rechtliche Verpflichtungen im Zusammenhang mit dem Geschäftsbetrieb fest.",
    "Official corporate registration documents, annual reports, and regulatory filings. These records are essential for legal compliance and corporate governance.":
      "Offizielle Handelsregisterunterlagen, Jahresberichte und behördliche Meldungen. Diese Unterlagen sind für die Einhaltung gesetzlicher Vorschriften und die Unternehmensführung unerlässlich.",
    "Private health information and clinical documentation for individuals. This sensitive data requires high-level protection to maintain patient confidentiality and regulatory compliance.":
      "Private Gesundheitsinformationen und klinische Dokumentation von Personen. Diese sensiblen Daten erfordern ein hohes Schutzniveau, um die Vertraulichkeit von Patientendaten und die Einhaltung von Vorschriften zu gewährleisten.",
    "Professional profiles detailing candidate work history and qualifications. These documents contain personal information and are subject to privacy regulations.":
      "Berufliche Profile mit Angaben zu Berufserfahrung und Qualifikationen von Bewerbern. Diese Dokumente enthalten personenbezogene Daten und unterliegen Datenschutzbestimmungen.",
    "Tax filings, returns, and related financial documents. These contain sensitive financial data subject to regulatory requirements.":
      "Steuermeldungen, Steuererklärungen und zugehörige Finanzdokumente. Diese enthalten sensible Finanzdaten, die regulatorischen Anforderungen unterliegen.",

    // --- Data Profiles tab (translated in full since there are few entries;
    // PCI/PHI/PII/GDPR/CCPA are left in English as industry-standard abbreviations) ---
    "Built-in Data Profile": "Integriertes Datenprofil",
    "Cloud, SaaS": "Cloud, SaaS",
    "Cloud, SaaS, Endpoints, APIs": "Cloud, SaaS, Endpoints, APIs",
    "Condition": "Bedingung",
    "Data Location": "Datenspeicherort",
    "Data Profile Name": "Name des Datenprofils",
    "View Condition": "Bedingung anzeigen",
    "Create New Data Profile": "Neues Datenprofil erstellen",
    "Select Data Location": "Datenspeicherort auswählen",
    "Set Conditions": "Bedingungen festlegen",
    "The displayed filters are based on your previous selections.": "Die angezeigten Filter basieren auf Ihrer vorherigen Auswahl.",
    "Your selection determines the available condition filters.": "Ihre Auswahl bestimmt die verfügbaren Bedingungsfilter.",
    "CCN (Credit Card Numbers)": "CCN (Kreditkartennummern)",
    "Intellectual Property - Code": "Geistiges Eigentum – Code",

    // --- Global Settings tab ---
    "Collect Masked Data Patterns": "Maskierte Datenmuster erfassen",
    "Collects samples of data patterns that are masked by the Classification Engine.":
      "Erfasst Stichproben von Datenmustern, die von der Classification Engine maskiert wurden.",
    "OCR (Optical Character Recognition)": "OCR (optische Zeichenerkennung)",
    "OCR extracts text from images. Disabling this option reduces overall scanning time.":
      "OCR extrahiert Text aus Bildern. Das Deaktivieren dieser Option verkürzt die gesamte Scandauer.",
  },

  patterns: [],

  skip: [
    // The Data Profiles screen's "Description" column (each profile's description text) is
    // excluded from translation by request (its exact-dictionary entry has been removed).
  ],
};
