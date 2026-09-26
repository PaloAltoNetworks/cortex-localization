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
    "Add Pattern": "Ajouter un modèle",
    "Data Pattern Name": "Nom du modèle de données",
    "Enter data pattern name": "Saisissez le nom du modèle de données",
    "Enter context words": "Saisissez des mots de contexte",
    "Enter regex": "Saisissez une expression régulière",
    "Enter test string here": "Saisissez une chaîne de test ici",
    "Geo": "Zone géographique",
    "Select Geos": "Sélectionner des zones géographiques",
    "Last Updated By": "Dernière mise à jour par",
    "Add description": "Ajouter une description",
    "Apply data patterns to the data profile:": "Appliquer des modèles de données au profil de données :",
    "Built-in Data Pattern": "Modèle de données intégré",
    "Context Words": "Mots de contexte",
    "Create New Data Pattern": "Créer un modèle de données",
    "Custom patterns are added as OR statements to custom profiles only. You can edit it later from the data profile page.":
      "Les modèles personnalisés sont ajoutés sous forme de conditions OR aux profils personnalisés uniquement. Vous pourrez les modifier ultérieurement depuis la page du profil de données.",
    "Enter an integer from 10 to 150.": "Saisissez un entier compris entre 10 et 150.",
    "Enter your test string, and we will highlight any matches based on the regex you configure.":
      "Saisissez votre chaîne de test : les correspondances avec l'expression régulière configurée seront mises en surbrillance.",
    "Full Masking": "Masquage complet",
    "No results found.": "Aucun résultat trouvé.",
    "Partial Masking": "Masquage partiel",
    "Proximity": "Proximité",
    "Regular Expression (Regex)": "Expression régulière (Regex)",
    "Show Advanced Options": "Afficher les options avancées",
    "Hide Advanced Options": "Masquer les options avancées",
    "Test": "Tester",
    "Test Data Pattern": "Tester le modèle de données",
    "Test results appear here": "Les résultats du test s'affichent ici",
    "Uses the Rust regular expression syntax.": "Utilise la syntaxe d'expression régulière de Rust.",
    "masking level": "niveau de masquage",

    // --- Data Topics tab (translated in full since there are few entries) ---
    "Topic Name": "Nom du sujet",
    "Last Updated At": "Date de dernière mise à jour",
    "Business Continuity Plans": "Plans de continuité d'activité",
    "CVs": "CV",
    "Corporate Filings": "Documents déposés par l'entreprise",
    "Financial Transactions & Payroll": "Transactions financières et paie",
    "Legal Agreements": "Accords juridiques",
    "Medical Certificates and Records": "Certificats et dossiers médicaux",
    "Tax Documents": "Documents fiscaux",
    "Business continuity and disaster recovery plans. These strategic documents outline procedures for maintaining operations during disruptions.":
      "Plans de continuité d'activité et de reprise après sinistre. Ces documents stratégiques décrivent les procédures permettant de maintenir les opérations en cas de perturbation.",
    "Financial transaction records including invoices, receipts, and payment confirmations, as well as Employee compensation records including salary details, deductions, and payment history.":
      "Registres de transactions financières, notamment factures, reçus et confirmations de paiement, ainsi que registres de rémunération des employés, notamment détails des salaires, retenues et historique des paiements.",
    "Formal contracts and service terms between parties. These files define legal obligations related to business operations.":
      "Contrats formels et conditions de service entre parties. Ces fichiers définissent les obligations juridiques liées aux activités de l'entreprise.",
    "Official corporate registration documents, annual reports, and regulatory filings. These records are essential for legal compliance and corporate governance.":
      "Documents officiels d'immatriculation de l'entreprise, rapports annuels et déclarations réglementaires. Ces registres sont essentiels à la conformité légale et à la gouvernance d'entreprise.",
    "Private health information and clinical documentation for individuals. This sensitive data requires high-level protection to maintain patient confidentiality and regulatory compliance.":
      "Informations de santé privées et documentation clinique concernant des personnes. Ces données sensibles nécessitent un niveau de protection élevé afin de préserver la confidentialité des patients et la conformité réglementaire.",
    "Professional profiles detailing candidate work history and qualifications. These documents contain personal information and are subject to privacy regulations.":
      "Profils professionnels détaillant le parcours et les qualifications des candidats. Ces documents contiennent des informations personnelles et sont soumis aux réglementations sur la confidentialité.",
    "Tax filings, returns, and related financial documents. These contain sensitive financial data subject to regulatory requirements.":
      "Déclarations fiscales, avis d'imposition et documents financiers associés. Ils contiennent des données financières sensibles soumises à des exigences réglementaires.",

    // --- Data Profiles tab (translated in full since there are few entries;
    // PCI/PHI/PII/GDPR/CCPA are left in English as industry-standard abbreviations) ---
    "Built-in Data Profile": "Profil de données intégré",
    "Cloud, SaaS": "Cloud, SaaS",
    "Cloud, SaaS, Endpoints, APIs": "Cloud, SaaS, endpoints, API",
    "Condition": "Condition",
    "Data Location": "Emplacement des données",
    "Data Profile Name": "Nom du profil de données",
    "View Condition": "Afficher la condition",
    "Create New Data Profile": "Créer un profil de données",
    "Select Data Location": "Sélectionner l'emplacement des données",
    "Set Conditions": "Définir les conditions",
    "The displayed filters are based on your previous selections.": "Les filtres affichés sont basés sur vos sélections précédentes.",
    "Your selection determines the available condition filters.": "Votre sélection détermine les filtres de condition disponibles.",
    "CCN (Credit Card Numbers)": "CCN (numéros de carte de crédit)",
    "Intellectual Property - Code": "Propriété intellectuelle - Code",

    // --- Global Settings tab ---
    "Collect Masked Data Patterns": "Collecter les modèles de données masqués",
    "Collects samples of data patterns that are masked by the Classification Engine.":
      "Collecte des échantillons de modèles de données masqués par le moteur de classification.",
    "OCR (Optical Character Recognition)": "OCR (reconnaissance optique de caractères)",
    "OCR extracts text from images. Disabling this option reduces overall scanning time.":
      "L'OCR extrait le texte des images. La désactivation de cette option réduit la durée globale de l'analyse.",
  },

  patterns: [],

  skip: [
    // The Data Profiles screen's "Description" column (each profile's description text) is
    // excluded from translation by request (its exact-dictionary entry has been removed).
  ],
};
