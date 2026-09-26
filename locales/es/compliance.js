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
    "Standards Catalog": "Catálogo de estándares",
    "Create Standard": "Crear estándar",
    "Create New Standard": "Crear nuevo estándar",
    "Assign Controls": "Asignar controles",
    "Select Controls": "Seleccionar controles",
    "Create New Control": "Crear nuevo control",
    "Control name": "Nombre del control",
    "Sub category": "Subcategoría",
    "Select custom standards": "Seleccionar estándares personalizados",
    "Delete custom standard?": "¿Eliminar el estándar personalizado?",
    "Delete Custom Control": "Eliminar control personalizado",

    // --- Compliance > Assessment Profiles screen ---
    "Assessment Profiles": "Perfiles de evaluación",
    "Asset Group Name": "Nombre del grupo de activos",
    "Create New Assessment": "Crear nueva evaluación",
    "Enabled": "Habilitado",
    "Report Frequency (UTC)": "Frecuencia del informe (UTC)",
    "Report Targets": "Destinatarios del informe",
    "Standard Name": "Nombre del estándar",
    "Yes": "Sí",
    "New Assessment Profile": "Nuevo perfil de evaluación",
    "Standards and Asset Group": "Estándares y grupo de activos",
    "Configure the profile name and report settings.": "Configure el nombre del perfil y los ajustes del informe.",
    "Generate a scheduled report": "Generar un informe programado",
    "Report Types": "Tipos de informe",
    "Add profile name": "Agregar nombre del perfil",
    "Select a compliance standard and asset group.": "Seleccione un estándar de cumplimiento y un grupo de activos.",
    "Select standard": "Seleccionar estándar",
    "Review your assessment profile configuration.": "Revise la configuración del perfil de evaluación.",
    "Assessment Profile ID": "ID del perfil de evaluación",

    // --- Assessment Profiles grid row actions ---
    "View Asset Group": "Ver grupo de activos",
    "View Assessment Results": "Ver resultados de la evaluación",
    "Export to PDF": "Exportar a PDF",
    "Export to CSV": "Exportar a CSV",
    "Delete Report": "Eliminar informe",
  },

  patterns: [
    { re: /^at (\d{1,2}:\d{2}) every day$/, tpl: "todos los días a las $1" },
    // The body text of the custom standard/control delete-confirmation dialog. The name
    // (an identifier) is left untranslated.
    { re: /^You are about to delete "(.+)"$/, tpl: "Está a punto de eliminar \"$1\"" },
    // The original text has a typo, "want do delete" instead of "want to delete", but is kept
    // verbatim here to exact-match what's actually displayed.
    { re: /^Are you sure you want do delete "(.+)"\?$/, tpl: "¿Seguro que desea eliminar \"$1\"?" },
    { re: /^This will disable assessment profile "(.+)"$/, tpl: "Se deshabilitará el perfil de evaluación \"$1\"" },
    { re: /^This will delete profile "(.+)" permanently$/, tpl: "Se eliminará permanentemente el perfil \"$1\"" },
  ],

  skip: [],
};
