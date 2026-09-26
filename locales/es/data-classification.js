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
    "Add Pattern": "Agregar patrón",
    "Data Pattern Name": "Nombre del patrón de datos",
    "Enter data pattern name": "Introduzca el nombre del patrón de datos",
    "Enter context words": "Introduzca palabras de contexto",
    "Enter regex": "Introduzca una expresión regular",
    "Enter test string here": "Introduzca aquí una cadena de prueba",
    "Geo": "Geografía",
    "Select Geos": "Seleccionar geografías",
    "Last Updated By": "Última actualización por",
    "Add description": "Agregar descripción",
    "Apply data patterns to the data profile:": "Aplicar patrones de datos al perfil de datos:",
    "Built-in Data Pattern": "Patrón de datos integrado",
    "Context Words": "Palabras de contexto",
    "Create New Data Pattern": "Crear nuevo patrón de datos",
    "Custom patterns are added as OR statements to custom profiles only. You can edit it later from the data profile page.":
      "Los patrones personalizados se agregan como condiciones OR solo a los perfiles personalizados. Puede editarlos más adelante desde la página de perfiles de datos.",
    "Enter an integer from 10 to 150.": "Introduzca un número entero entre 10 y 150.",
    "Enter your test string, and we will highlight any matches based on the regex you configure.":
      "Introduzca su cadena de prueba y resaltaremos las coincidencias según la expresión regular que configure.",
    "Full Masking": "Enmascaramiento completo",
    "No results found.": "No se encontraron resultados.",
    "Partial Masking": "Enmascaramiento parcial",
    "Proximity": "Proximidad",
    "Regular Expression (Regex)": "Expresión regular (Regex)",
    "Show Advanced Options": "Mostrar opciones avanzadas",
    "Hide Advanced Options": "Ocultar opciones avanzadas",
    "Test": "Probar",
    "Test Data Pattern": "Probar patrón de datos",
    "Test results appear here": "Los resultados de la prueba aparecen aquí",
    "Uses the Rust regular expression syntax.": "Utiliza la sintaxis de expresiones regulares de Rust.",
    "masking level": "nivel de enmascaramiento",

    // --- Data Topics tab (translated in full since there are few entries) ---
    "Topic Name": "Nombre del tema",
    "Last Updated At": "Fecha de última actualización",
    "Business Continuity Plans": "Planes de continuidad del negocio",
    "CVs": "Currículums",
    "Corporate Filings": "Documentos registrales corporativos",
    "Financial Transactions & Payroll": "Transacciones financieras y nóminas",
    "Legal Agreements": "Acuerdos legales",
    "Medical Certificates and Records": "Certificados e historiales médicos",
    "Tax Documents": "Documentos fiscales",
    "Business continuity and disaster recovery plans. These strategic documents outline procedures for maintaining operations during disruptions.":
      "Planes de continuidad del negocio y de recuperación ante desastres. Estos documentos estratégicos describen los procedimientos para mantener las operaciones durante interrupciones.",
    "Financial transaction records including invoices, receipts, and payment confirmations, as well as Employee compensation records including salary details, deductions, and payment history.":
      "Registros de transacciones financieras, como facturas, recibos y confirmaciones de pago, así como registros de remuneración de empleados, como detalles salariales, deducciones e historial de pagos.",
    "Formal contracts and service terms between parties. These files define legal obligations related to business operations.":
      "Contratos formales y condiciones de servicio entre partes. Estos archivos definen obligaciones legales relacionadas con las operaciones comerciales.",
    "Official corporate registration documents, annual reports, and regulatory filings. These records are essential for legal compliance and corporate governance.":
      "Documentos oficiales de registro corporativo, informes anuales y presentaciones regulatorias. Estos registros son esenciales para el cumplimiento legal y el gobierno corporativo.",
    "Private health information and clinical documentation for individuals. This sensitive data requires high-level protection to maintain patient confidentiality and regulatory compliance.":
      "Información sanitaria privada y documentación clínica de personas. Estos datos confidenciales requieren un alto nivel de protección para mantener la confidencialidad del paciente y el cumplimiento normativo.",
    "Professional profiles detailing candidate work history and qualifications. These documents contain personal information and are subject to privacy regulations.":
      "Perfiles profesionales que detallan el historial laboral y las cualificaciones de los candidatos. Estos documentos contienen información personal y están sujetos a normativas de privacidad.",
    "Tax filings, returns, and related financial documents. These contain sensitive financial data subject to regulatory requirements.":
      "Declaraciones fiscales, liquidaciones y documentos financieros relacionados. Contienen datos financieros confidenciales sujetos a requisitos normativos.",

    // --- Data Profiles tab (translated in full since there are few entries;
    // PCI/PHI/PII/GDPR/CCPA are left in English as industry-standard abbreviations) ---
    "Built-in Data Profile": "Perfil de datos integrado",
    "Cloud, SaaS": "Nube, SaaS",
    "Cloud, SaaS, Endpoints, APIs": "Nube, SaaS, endpoints, API",
    "Condition": "Condición",
    "Data Location": "Ubicación de los datos",
    "Data Profile Name": "Nombre del perfil de datos",
    "View Condition": "Ver condición",
    "Create New Data Profile": "Crear nuevo perfil de datos",
    "Select Data Location": "Seleccionar ubicación de los datos",
    "Set Conditions": "Establecer condiciones",
    "The displayed filters are based on your previous selections.": "Los filtros mostrados se basan en sus selecciones anteriores.",
    "Your selection determines the available condition filters.": "Su selección determina los filtros de condición disponibles.",
    "CCN (Credit Card Numbers)": "CCN (números de tarjetas de crédito)",
    "Intellectual Property - Code": "Propiedad intelectual - Código",

    // --- Global Settings tab ---
    "Collect Masked Data Patterns": "Recopilar patrones de datos enmascarados",
    "Collects samples of data patterns that are masked by the Classification Engine.":
      "Recopila muestras de patrones de datos enmascarados por el motor de clasificación.",
    "OCR (Optical Character Recognition)": "OCR (reconocimiento óptico de caracteres)",
    "OCR extracts text from images. Disabling this option reduces overall scanning time.":
      "OCR extrae texto de las imágenes. Deshabilitar esta opción reduce el tiempo total de análisis.",
  },

  patterns: [],

  skip: [
    // The Data Profiles screen's "Description" column (each profile's description text) is
    // excluded from translation by request (its exact-dictionary entry has been removed).
  ],
};
