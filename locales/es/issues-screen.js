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

const dictionaryIssuesScreen = {
  exact: {
    "All Issues": "Todas las incidencias",
    "Backward Scan Status": "Estado del análisis retroactivo",
    "Create Issue Exclusion Rule": "Crear regla de exclusión de incidencias",
    "Rule status": "Estado de la regla",
    "Rule Conditions (from filter)": "Condiciones de la regla (del filtro)",
    "Your changes will be lost. Do you want to cancel and exit the wizard?": "Se perderán los cambios. ¿Desea cancelar y salir del asistente?",
    "Filters are still in edit mode. Click anywhere on the page to apply your filters.": "Los filtros siguen en modo de edición. Haga clic en cualquier lugar de la página para aplicar los filtros.",
    "Apply rule on existing issues": "Aplicar la regla a las incidencias existentes",
    "Existing issues matching the rule’s conditions will also be excluded": "Las incidencias existentes que coincidan con las condiciones de la regla también se excluirán",
    "Define conditions to automatically exclude issues": "Defina condiciones para excluir incidencias automáticamente",
    "Search": "Buscar",
    "Value": "Valor",
    "All Issue Exception & Exclusion Rules": "Todas las reglas de excepción y exclusión de incidencias",
    "Do you want to create an Exception or an Exclusion?": "¿Desea crear una excepción o una exclusión?",
    "Create new exception": "Crear nueva excepción",
    "Exceptions grant Issues a time-limited grace period for a specific duration, pausing SLA timers.":
      "Las excepciones conceden a las incidencias un período de gracia limitado durante un tiempo específico y pausan los temporizadores de SLA.",
    "Create new exclusion": "Crear nueva exclusión",
    "Exclusions permanently suppress Issues. No new Issues matching this criteria will be added to the Issue list view.":
      "Las exclusiones suprimen las incidencias de forma permanente. No se agregarán nuevas incidencias que coincidan con estos criterios a la vista de lista de incidencias.",
    "Requestor Name": "Nombre del solicitante",
    "Approver Name": "Nombre del aprobador",
    "Date Created": "Fecha de creación",
    "Decision Date": "Fecha de decisión",
    "Decision Justification": "Justificación de la decisión",
    "Requestor Email": "Correo electrónico del solicitante",
    "Approver Email": "Correo electrónico del aprobador",
    "Add Exception": "Agregar excepción",
    "Disabled": "Deshabilitado",
    "Exception Rules": "Reglas de excepción",
    "Exclusion Rules": "Reglas de exclusión",
    "Impacted Issues": "Incidencias afectadas",
    "Justification Category": "Categoría de justificación",
    "Status": "Estado",
    "There are no Issue Exception rules": "No hay reglas de excepción de incidencias",
    "You are about to perform issue exclusion": "Está a punto de realizar una exclusión de incidencias",
    "Create issue exception rule": "Crear regla de excepción de incidencias",
    "Scan types": "Tipos de análisis",
    "Usage": "Uso",
    "Scanned Branch": "Rama analizada",
    "Scan Date": "Fecha del análisis",
    "Scan Health": "Salud del análisis",
    "Scan Category": "Categoría del análisis",
    "Pull Request ID": "ID de pull request",
    "Commit": "Commit",
    "Git User": "Usuario de Git",
    "PR Status": "Estado del PR",
    "Blocking Policies": "Políticas de bloqueo",
    "Pull Request Title": "Título del pull request",
    "Blocking Policies IDs": "ID de políticas de bloqueo",
    "Blocking Policies Names": "Nombres de políticas de bloqueo",
    "CI Status": "Estado de CI",
    "Tool Id": "ID de herramienta",
    "Risk Factors details": "Detalles de los factores de riesgo",
    "Status modified by": "Estado modificado por",
    "Status modified date": "Fecha de modificación del estado",
    "Link": "Enlace",
    "Logo": "Logotipo",
    "In catalog": "En el catálogo",
    "Risk factors last update": "Última actualización de los factores de riesgo",
    "Last update": "Última actualización",
    "cves": "CVE",
    "Choose cases to link the issues to": "Elija los casos a los que vincular las incidencias",
    "Urgent Issues Exceeding SLA": "Incidencias urgentes que superan el SLA",
    "Valid Secrets Detected": "Secretos válidos detectados",
    "High Issues Exceeding SLA": "Incidencias altas que superan el SLA",
    "High Issues in Direct Dependencies": "Incidencias altas en dependencias directas",
    "High Issues Involving Strong Copyleft Licenses": "Incidencias altas relacionadas con licencias copyleft fuertes",
    "Resolved - Known Issue": "Resuelto - Incidencia conocida",
    "Resolved - Duplicate Issue": "Resuelto - Incidencia duplicada",
    "Resolved - False Positive": "Resuelto - Falso positivo",
    "Resolved - Other": "Resuelto - Otro",
    "Resolved - True Positive": "Resuelto - Verdadero positivo",
    "Resolved - Security Testing": "Resuelto - Pruebas de seguridad",
    "Resolved - Dismissed": "Resuelto - Descartado",
    "Resolved - Fixed": "Resuelto - Corregido",
    "Resolved - Risk Accepted": "Resuelto - Riesgo aceptado",
    "IaC Drifts": "Desviaciones de IaC",
    "Severity Breakdown": "Desglose por gravedad",
    "Code IaC Resource": "Recurso de IaC en código",
    "No data available to display in the chart": "No hay datos disponibles para mostrar en el gráfico",
    "Resolve Issue Id": "Resolver ID de incidencia",
    "mark this issue as": "marcar esta incidencia como",
    "Enter comment...": "Introduzca un comentario...",
    "Select from list": "Seleccionar de la lista",
    "Urgency Details": "Detalles de urgencia",
    "Create application": "Crear aplicación",
    "Application Criticality": "Criticidad de la aplicación",
    "Missing code-to-cloud traceability.": "Falta la trazabilidad de código a nube.",
    "Urgency may change once the full runtime path is established": "La urgencia puede cambiar una vez que se establezca la ruta completa del tiempo de ejecución",
    "Urgency not updated. We couldn't calculate urgency this time. We'll try again with the next periodic scan.":
      "No se actualizó la urgencia. Esta vez no pudimos calcular la urgencia. Lo intentaremos de nuevo en el próximo análisis periódico.",
    "Backlog Status:": "Estado del backlog:",
    "Choose a reason": "Elija un motivo",
    "Create Exception Rule": "Crear regla de excepción",
    "Enter the date that the Exception will end and the SLA Timer will start to tick down again on.":
      "Introduzca la fecha en la que finalizará la excepción y el temporizador de SLA volverá a iniciar la cuenta regresiva.",
    "Form": "Formulario",
    "None provided": "No se proporcionó",
    "Optionally for your reference, enter a ticket or a record number for any external exception tracking or auditing systems you use.":
      "De forma opcional y como referencia, introduzca un número de ticket o de registro de cualquier sistema externo de seguimiento o auditoría de excepciones que utilice.",
    "Provide a reason why there is a business need to defer fixing the security Issues that match this rule.":
      "Indique el motivo por el que existe una necesidad empresarial de aplazar la corrección de las incidencias de seguridad que coinciden con esta regla.",
    "Use Exception Rules to suppress issues that cannot be resolved within SLA bounds due to valid business justifications.":
      "Use reglas de excepción para suprimir incidencias que no se pueden resolver dentro de los límites del SLA por justificaciones empresariales válidas.",
    "When an issue matches the rule criteria, its SLA timer pauses for the specified duration.":
      "Cuando una incidencia coincide con los criterios de la regla, su temporizador de SLA se pausa durante el tiempo especificado.",
    "internal id": "id interno",
    "Approver": "Aprobador",
    "Exception End Date": "Fecha de finalización de la excepción",
    "Exception Period": "Período de excepción",
    "Justification": "Justificación",
    "External Exception ID": "ID de excepción externa",
    "Reason Category": "Categoría del motivo",
    "Match Criteria and Results": "Criterios de coincidencia y resultados",
    "Change Issue Assignee": "Cambiar asignado de la incidencia",
    "Assign to me": "Asignarme",
    "Select a user to assign": "Seleccione un usuario para asignar",
    "Select the action you want to run when the rule conditions are met.": "Seleccione la acción que desea ejecutar cuando se cumplan las condiciones de la regla.",
    "Everywhere": "En todas partes",
    "Select cases": "Seleccionar casos",
    "Uncheck cases to unlink them from the issue": "Desmarque los casos para desvincularlos de la incidencia",
    "View related case": "Ver caso relacionado",
    "Show workplan": "Mostrar plan de trabajo",
    "Investigate": "Investigar",
    "Exclude issue": "Excluir incidencia",
    "Except issue": "Exceptuar incidencia",
    "Exclude issues": "Excluir incidencias",
    "Except issues": "Exceptuar incidencias",
    "Link to case": "Vincular a caso",
    "Unlink from case": "Desvincular del caso",
    "Change status": "Cambiar estado",
    "Change severity": "Cambiar gravedad",
    "Change assignee": "Cambiar asignado",
    "Investigate causality chain": "Investigar cadena de causalidad",
    "Run automation": "Ejecutar automatización",
    "Manage Issue": "Administrar incidencia",
    "Open views": "Abrir vistas",
    "Create case": "Crear caso",
    "AppSec Issues": "Incidencias de AppSec",
    "CSPM Scanner": "Escáner de CSPM",
    "Detection Method": "Método de detección",
    "Findings": "Hallazgos",
    "Issue Domain": "Dominio de la incidencia",
    "Name": "Nombre",
    "Observation Time": "Hora de observación",
    "Resolution Reason": "Motivo de resolución",

    // --- "Detection method"/"Issue domain" filter option list ---
    // XDR Analytics, XDR IOC, DLP, ASM, PAN NGFW, XDR Managed Threat
    // Hunting, Prisma Browser, Prisma Cloud, Prisma Cloud Compute
    // Brand names, specific product names, and abbreviations are left as-is (translating them
    // would not change their spelling, so they are not in the dictionary): AURL, XDR BIOC,
    // XDR Analytics BIOC, XDR Analytics, XDR IOC, DLP, ASM, PAN NGFW, XDR Managed Threat
    // Hunting, Prisma Browser, Prisma Cloud, Prisma Cloud Compute
    "Agentless Disk Scanner": "Escáner de discos sin agente",
    "AI Security Posture": "Postura de seguridad de IA",
    "API Posture Scanner": "Escáner de postura de API",
    "API Traffic Monitor": "Monitor de tráfico de API",
    "AppSec Policy": "Política de AppSec",
    "CAS CVE Scanner": "Escáner de CVE de CAS",
    "CAS Drift Scanner": "Escáner de desviaciones de CAS",
    "IaC Scanner": "Escáner de IaC",
    "CAS License Scanner": "Escáner de licencias de CAS",
    "CAS Malicious Package Scanner": "Escáner de paquetes maliciosos de CAS",
    "SAST Scanner": "Escáner de SAST",
    "CAS Secret Scanner": "Escáner de secretos de CAS",
    "CIEM Scanner": "Escáner de CIEM",
    "CLI Scanner": "Escáner de CLI",
    "Cloud Network Analyzer": "Analizador de redes en la nube",
    "Custom Issue": "Incidencia personalizada",
    "Data Policy": "Política de datos",
    "SaaS Attachments": "Archivos adjuntos de SaaS",
    "Graph Engine": "Motor de grafos",
    "Health": "Salud",
    "Indicator Matching": "Coincidencia de indicadores",
    "IoT Security": "Seguridad de IoT",
    "Kubernetes Scanner": "Escáner de Kubernetes",
    "MIRRORING": "DUPLICACIÓN",
    "Posture Policy": "Política de postura",
    "User Reported Phishing": "Phishing notificado por usuarios",
    "Hunting": "Búsqueda de amenazas",
    "Posture": "Postura",

    "AWS EC2 instance not configured with Instance Metadata Service v2 (IMDSv2)":
      "Instancia de AWS EC2 no configurada con Instance Metadata Service v2 (IMDSv2)",

    // --- Column-selection menu ---
    "Excluded": "Excluido",
    "Case IDs": "ID de casos",
    "Insert Time": "Hora de inserción",
    "Resolution Status Modified": "Modificación del estado de resolución",
    "Remediation": "Corrección",
    "Impact": "Impacto",
    "Extended Description": "Descripción ampliada",
    "Initial Evidence": "Evidencia inicial",
    "Excepted": "Exceptuado",
    "Remaining Exception Period": "Período de excepción restante",
    "Agentic AI response status": "Estado de la respuesta de IA agéntica",
    "Agentic AI response": "Respuesta de IA agéntica",
    "Recommendation": "Recomendación",
    "Last Modified": "Última modificación",
    "Compliance Standard": "Estándar de cumplimiento",
    "Compliance Category": "Categoría de cumplimiento",
    "Compliance Control": "Control de cumplimiento",

    // --- Issue detail panel (Evidence/Causality tabs, etc.) ---
    // "Critical Vulnerabilities (CVSS)" is already registered in vulnerability-management.js
    // (all files' dictionaries are merged globally, so it is not duplicated here).
    "No associated standards or controls": "No hay estándares ni controles asociados",
    "Automations browser": "Explorador de Automation",
    "Type `:` to use Emojis": "Escriba `:` para usar emojis",
    "Focus on the CLI field using `ctrl+;`": "Coloque el foco en el campo de CLI con `ctrl+;`",
    "Navigate quickly with `ctrl+k` (default)": "Navegue rápidamente con `ctrl+k` (predeterminado)",
    "Toggle markdown box on CLI using `ctrl+m`": "Active o desactive el cuadro de Markdown en la CLI con `ctrl+m`",
    "There are no Cases": "No hay casos",
    "Asset Risk": "Riesgo del activo",
    "The value of and risks posed to your organization by the compromise of this asset":
      "El valor de este activo y los riesgos que supondría para su organización que se viera comprometido",
    "Internet Reachable Asset": "Activo accesible desde Internet",
    "This asset is publicly exposed to the internet.": "Este activo está expuesto públicamente a Internet.",
    "Evidence graph is not supported for this detection rule type": "El gráfico de evidencias no es compatible con este tipo de regla de detección",
    "Enable prompt protection in the content filter": "Habilitar la protección de prompts en el filtro de contenido",
    "Related Affected Assets": "Activos afectados relacionados",
    "Enforce the Agent to Use Guardrails": "Obligar al agente a usar barreras de protección",
    "Number of hits": "Número de coincidencias",
    "Process Execution": "Ejecución de procesos",
    "Initiator Details": "Detalles del iniciador",
    "Name (initiated by)": "Nombre (iniciado por)",
    "Path (initiator path)": "Ruta (ruta del iniciador)",
    "CMD (initiator CMD)": "CMD (CMD del iniciador)",
    "PID (initiator PID)": "PID (PID del iniciador)",
    "TID (initiator TID)": "TID (TID del iniciador)",
    "Signature": "Firma",
    "Signature Unavailable": "Firma no disponible",
    // MD5 and SHA256 are hash-format names, left as-is (not added to the dictionary).
    "Target Process": "Proceso de destino",
    "Causality Group Owner Details": "Detalles del propietario del grupo de causalidad",
    "OS Parent": "Proceso primario del sistema operativo",
    "Occurrence Count": "Número de apariciones",

    "Snippet": "Fragmento",
    "Objects Count": "Número de objetos",
    "Records Count": "Número de registros",
    "There are no Findings": "No hay hallazgos",
    "Data Findings": "Hallazgos de datos",
    "Configuration Findings": "Hallazgos de configuración",
    "Identity Findings": "Hallazgos de identidad",
    "Posture Findings": "Hallazgos de postura",
    "Malware Findings": "Hallazgos de malware",
    "Additional Details": "Detalles adicionales",
    "Showing a partial graph": "Se muestra un gráfico parcial",
    "Due to the high volume of results, only a portion of the data is shown.":
      "Debido al gran volumen de resultados, solo se muestra una parte de los datos.",

    // --- Issue detail panel (AI Security/CAS-type issue overview tab) ---
    // A "trigger rule" link (shown in both its title attribute and its link text).
    "Identity Posture Rule": "Regla de postura de identidad",
    // already registered in another screen's dictionary, so only the technique name is added here).
    "Drive-by Compromise": "Compromiso por descarga oculta (drive-by)",
    // A value in the "attack technique" column of an AI Security Posture (DSPM) issue's evidence
    // table (inside table-widget; the column heading itself is already translated).
    "Indirect Attack": "Ataque indirecto",
    "Jailbreak": "Jailbreak",
    // The same issue's evidence-section heading (the description text itself is a fixed,
    // tenant-independent string, but it sits under pan-highlight-text, which the existing
    // RAW_IDENTIFIER_SELECTOR exclusion policy keeps out of the fixed dictionary — so only the
    // heading is added here).
    "Prompt Injection": "Inyección de prompts",
    // The issue's detection-rule name shown in the "Detection logic" field (a generic,
    // instance-independent name). The issue name itself (inside xdr-issue-focus-area-header h3
    // span[utitle]) is excluded by the existing policy, so only this generic name — shown in a
    // separate field — is added here.
    "AI deployment missing prompt attack protection": "Implementación de IA sin protección contra ataques de prompts",
    // "Potential dependency confusion due to package name or scope ... available
    // "Potential dependency confusion due to package name or scope ... available in registry"
    // always has an actual package name (e.g. case-tracker) embedded in the text, so it never
    // matches exactly; it is instead handled by the regex entry under "patterns" below (not added
    // to the fixed "exact" dictionary).
    "Package Management": "Administración de paquetes",
    "Dependency Chains": "Cadenas de dependencias",
    // Code-evidence (commit info) labels — the leading "| " is included in the same text node as
    // part of the separator.
    "| Commit Hash": "| Hash del commit",
    "| Commit Time": "| Hora del commit",
  },

  patterns: [
    // Originally a fixed "Open in GitHub" entry, but the same phrasing turned out
    // to appear for other repository providers too (e.g. GitLab), so this was
    // changed to a pattern with the provider name as a variable.
    { re: /^Open in (.+)$/, tpl: "Abrir en $1" },
    { re: /^Rules that affect over (\d+) issues cannot be created$/, tpl: "No se pueden crear reglas que afecten a más de $1 incidencias" },
    { re: /^Select an Automation to run on selected issue (\d+), "(.+)"$/, tpl: "Seleccione una Automation para ejecutar en la incidencia seleccionada $1, \"$2\"" },
    // 'tyamasaki-test-rule-01(Network Exposure) was added to the case because it relates to the same asset'
    { re: /^(.+?)\((.+?)\) was added to the case because it relates to the same asset$/, tpl: "$1 ($2) se agregó al caso porque está relacionado con el mismo activo" },
    // "The automation '7caa89a2-e4c5-4496-8653-cf1e2989f705' encountered an error."
    // (The automation's name/ID is embedded dynamically. The quote characters match the source
    // text, which uses typographic quotes U+2018/U+2019.)
    { re: /^The automation ‘(.+?)’ encountered an error\.$/, tpl: "La automatización \"$1\" encontró un error." },
    // The detection-rule name for a Dependency Confusion-type issue, shown in the "Detection
    // logic" field. A package name (e.g. case-tracker) is embedded in the text.
    // "Potential dependency confusion due to package name or scope case-tracker available in registry"
    {
      re: /^Potential dependency confusion due to package name or scope (.+?) available in registry$/,
      tpl: "Posible confusión de dependencias debido a que el nombre o el alcance del paquete \"$1\" está disponible en el registro",
    },
    // A GitHub-related issue's "Fix" suggestion sentence (a user name, org name, or GitHub App
    // name is embedded dynamically). Rendered as a <u-label> element's text.
    // "Fix - User account sreerajnair95 in GitHub is missing 2FA"
    { re: /^Fix - User account (.+?) in GitHub is missing 2FA$/, tpl: "Corrección - A la cuenta de usuario \"$1\" en GitHub le falta 2FA" },
    // "Fix - 2FA is not enforced in the tinystepstudio GitHub organization."
    { re: /^Fix - 2FA is not enforced in the (.+?) GitHub organization\.$/, tpl: "Corrección - 2FA no es obligatoria en la organización de GitHub \"$1\"." },
    // "Fix - Unrestricted usage of GitHub Actions allowed across the organization tinystepstudio."
    {
      re: /^Fix - Unrestricted usage of GitHub Actions allowed across the organization (.+?)\.$/,
      tpl: "Corrección - Se permite el uso sin restricciones de GitHub Actions en toda la organización \"$1\".",
    },
    // "Fix - Excessive GitHub App cortex-appsec-eu permissions"
    { re: /^Fix - Excessive GitHub App (.+?) permissions$/, tpl: "Corrección - Permisos excesivos de la GitHub App \"$1\"" },
    // "Fix - Deprecated package uuid used in NPM project in GitHub repository"
    // (Both the package name and the repository type — GitHub/GitLab/Bitbucket, etc. — are
    // embedded dynamically.)
    {
      re: /^Fix - Deprecated package (.+?) used in NPM project in (.+?) repository$/,
      tpl: "Corrección - Paquete obsoleto \"$1\" usado en un proyecto NPM del repositorio $2",
    },
    // "Fix - Potential dependency confusion due to package name or scope case-tracker available in registry"
    // Dependency confusion as an Automation candidate name on the "Action plan" tab (it differs
    // from the generic name shown in the "Detection logic" field, see the pattern above, by the
    // leading "Fix - ").
    {
      re: /^Fix - Potential dependency confusion due to package name or scope (.+?) available in registry$/,
      tpl: "Corrección - Posible confusión de dependencias debido a que el nombre o el alcance del paquete \"$1\" está disponible en el registro",
    },
    // "Fix - CVE-2019-18888 in symfony/http-foundation, version: 3.4.x-dev"
    // (The CVE number, package name, and version are all embedded dynamically. The first capture
    // group is not restricted to "CVE-" specifically, to also allow for other vulnerability-ID formats.)
    {
      re: /^Fix - (.+?) in (.+?), version: (.+)$/,
      tpl: "Corrección - $1 en $2, versión: $3",
    },
  ],

  skip: [],
};
