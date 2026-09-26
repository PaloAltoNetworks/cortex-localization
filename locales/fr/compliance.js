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
    "Standards Catalog": "Catalogue des normes",
    "Create Standard": "Créer une norme",
    "Create New Standard": "Créer une nouvelle norme",
    "Assign Controls": "Attribuer des contrôles",
    "Select Controls": "Sélectionner des contrôles",
    "Create New Control": "Créer un nouveau contrôle",
    "Control name": "Nom du contrôle",
    "Sub category": "Sous-catégorie",
    "Select custom standards": "Sélectionner des normes personnalisées",
    "Delete custom standard?": "Supprimer la norme personnalisée ?",
    "Delete Custom Control": "Supprimer le contrôle personnalisé",

    // --- Compliance > Assessment Profiles screen ---
    "Assessment Profiles": "Profils d'évaluation",
    "Asset Group Name": "Nom du groupe d'actifs",
    "Create New Assessment": "Créer une nouvelle évaluation",
    "Enabled": "Activé",
    "Report Frequency (UTC)": "Fréquence des rapports (UTC)",
    "Report Targets": "Destinataires des rapports",
    "Standard Name": "Nom de la norme",
    "Yes": "Oui",
    "New Assessment Profile": "Nouveau profil d'évaluation",
    "Standards and Asset Group": "Normes et groupe d'actifs",
    "Configure the profile name and report settings.": "Configurez le nom du profil et les paramètres de rapport.",
    "Generate a scheduled report": "Générer un rapport planifié",
    "Report Types": "Types de rapports",
    "Add profile name": "Ajouter un nom de profil",
    "Select a compliance standard and asset group.": "Sélectionnez une norme de conformité et un groupe d'actifs.",
    "Select standard": "Sélectionner une norme",
    "Review your assessment profile configuration.": "Vérifiez la configuration de votre profil d'évaluation.",
    "Assessment Profile ID": "ID du profil d'évaluation",

    // --- Assessment Profiles grid row actions ---
    "View Asset Group": "Afficher le groupe d'actifs",
    "View Assessment Results": "Afficher les résultats de l'évaluation",
    "Export to PDF": "Exporter en PDF",
    "Export to CSV": "Exporter en CSV",
    "Delete Report": "Supprimer le rapport",
  },

  patterns: [
    { re: /^at (\d{1,2}:\d{2}) every day$/, tpl: "tous les jours à $1" },
    // The body text of the custom standard/control delete-confirmation dialog. The name
    // (an identifier) is left untranslated.
    { re: /^You are about to delete "(.+)"$/, tpl: "Vous êtes sur le point de supprimer \"$1\"" },
    // The original text has a typo, "want do delete" instead of "want to delete", but is kept
    // verbatim here to exact-match what's actually displayed.
    { re: /^Are you sure you want do delete "(.+)"\?$/, tpl: "Voulez-vous vraiment supprimer \"$1\" ?" },
    { re: /^This will disable assessment profile "(.+)"$/, tpl: "Le profil d'évaluation \"$1\" sera désactivé" },
    { re: /^This will delete profile "(.+)" permanently$/, tpl: "Le profil \"$1\" sera définitivement supprimé" },
  ],

  skip: [],
};
