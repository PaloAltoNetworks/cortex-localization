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

const dictionaryIdentitySecurity = {
  exact: {
    "Administrative": "Administrativo",
    "Identity Overview": "Resumen de identidades",
    "Identity Asset Inventory": "Inventario de activos de identidad",
    "Cloud Unified Human Identities": "Identidades humanas unificadas en la nube",
    "Empty Groups": "Grupos vacíos",
    "Cloud Groups": "Grupos de nube",
    "SaaS Groups": "Grupos de SaaS",
    "On-Premises Groups": "Grupos locales",
    "On premises Unified Human Identities": "Identidades humanas unificadas locales",
    "Secrets": "Secretos",
    "MFA Disabled": "MFA deshabilitada",
    "SaaS Unified Human Identities": "Identidades humanas unificadas de SaaS",
    "SaaS Human Identities": "Identidades humanas de SaaS",
    "On-premises Human Identities": "Identidades humanas locales",
    "Weak Passwords": "Contraseñas débiles",
    "Team Membership": "Pertenencia a equipos",
    "Who does it grant access to?": "¿A quién otorga acceso?",
    "Last Commit": "Último commit",
    "This widget show the riskiest identities with the highest score combination of risks. Fixing such identity will improve the overall score.":
      "Este widget muestra las identidades más riesgosas, con la mayor puntuación combinada de riesgos. Corregir dichas identidades mejorará la puntuación general.",
    "In this widget, you can find information about your Admin Identities. We identify identity as admin if it meets the following criteria:":
      "En este widget encontrará información sobre sus identidades de administrador. Identificamos una identidad como administrador si cumple los siguientes criterios:",
    "• Has one of the Built-in Admin policies": "• Tiene una de las políticas de administrador integradas",
    "• Has custom policies with administrative permissions": "• Tiene políticas personalizadas con permisos administrativos",
    "In addition to the access, we take into consideration the level on which this access was granted for the identity":
      "Además del acceso, tenemos en cuenta el nivel en el que se otorgó este acceso a la identidad",
    "This widget provides an overview of your assets at risk and enables you to quickly and easily identify the riskiest identity asset categories, helping you prioritize and address the most critical security vulnerabilities first.":
      "Este widget ofrece un resumen de sus activos en riesgo y le permite identificar de forma rápida y sencilla las categorías de activos de identidad más riesgosas, lo que le ayuda a priorizar y abordar primero las vulnerabilidades de seguridad más críticas.",
    "Admins Only": "Solo administradores",
    "Admins Summary": "Resumen de administradores",
    "AWS IAM Role": "Rol de AWS IAM",
    "AWS IAM Role has role chaining permissions to admin":
      "El rol de AWS IAM tiene permisos de encadenamiento de roles hacia administrador",
    "Config": "Configuración",
    "Got even more time?": "¿Tiene aún más tiempo?",
    "Human Identities": "Identidades humanas",
    "IAM Identity Asset Inventory": "Inventario de activos de identidad de IAM",
    "Identities with excessive policies": "Identidades con políticas excesivas",
    "Identities with unused permissions": "Identidades con permisos no utilizados",
    "Identity Security Findings": "Hallazgos de seguridad de identidades",
    "Inactive identities": "Identidades inactivas",
    "List": "Lista",
    "Management Group": "Grupo de administración",
    "Non-Human Identities": "Identidades no humanas",
    "Number of admins from total number of Identities": "Número de administradores sobre el total de identidades",
    "Policies": "Políticas",
    "Read": "Lectura",
    "Resource": "Recurso",
    "Resource Group": "Grupo de recursos",
    "Risk Assessments": "Evaluaciones de riesgos",
    "Show all issues >": "Mostrar todas las incidencias >",
    "Subscription": "Suscripción",
    "Top Critical Issues to Address": "Principales incidencias críticas que abordar",
    "Top Identities at Risk": "Principales identidades en riesgo",
    "Top Issues to improve your Identity Security": "Principales incidencias para mejorar la seguridad de sus identidades",
    "Unified Human Identities": "Identidades humanas unificadas",
    "View policies": "Ver políticas",
    "We’ve identified the most pressing vulnerabilities to help secure your identity.":
      "Hemos identificado las vulnerabilidades más urgentes para ayudarle a proteger su identidad.",
    "Write": "Escritura",
  },

  patterns: [
    { re: /^([\d,]+)\s+Empty Groups$/, tpl: "$1 grupos vacíos" },
    { re: /^([\d,]+)\s+MFA Disabled$/, tpl: "$1 con MFA deshabilitada" },
    { re: /^([\d,]+)\s+Weak Passwords$/, tpl: "$1 contraseñas débiles" },
    { re: /^([\d,]+)\s+Service Accounts$/, tpl: "$1 cuentas de servicio" },
    { re: /^([\d,]+)\s+Secrets$/, tpl: "$1 secretos" },
    { re: /^([\d,]+)\s+Admin$/, tpl: "$1 administradores" },
    { re: /^([\d,]+)\s+Sensitive Access$/, tpl: "$1 con acceso confidencial" },
    { re: /^([\d,]+)\s+Inactive$/, tpl: "$1 inactivos" },
    { re: /^Where can this (.+) access\?$/, tpl: "¿A qué puede acceder este $1?" },
    { re: /^This identity has access to (\d+) assets?$/, tpl: "Esta identidad tiene acceso a $1 activos" },
    { re: /^(\d+)\s+Tactics?$/, tpl: "$1 tácticas" },
    { re: /^(\d+)\s+Techniques?$/, tpl: "$1 técnicas" },
    { re: /^(\d[\d,]*)\s+issues$/, tpl: "$1 incidencias" },
    { re: /^(\d[\d,]*)\s+admins at risk$/, tpl: "$1 administradores en riesgo" },
  ],

  skip: [
    // Chart-library attribution text.
    /^Created with Highcharts/,
  ],
};
