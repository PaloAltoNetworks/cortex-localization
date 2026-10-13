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

const dictionaryCommon = {
  exact: {
    "Score": "Puntuación",
    "CVSS": "CVSS",
    "EPSS": "EPSS",
    "Vulnerability": "Vulnerabilidad",
    "Assets": "Activos",
    "Publish Date": "Fecha de publicación",
    "Display": "Visualización",
    "Collapse": "Contraer",
    "Expand": "Expandir",
    "Added on": "Agregado el",
    "Add filters": "Agregar filtros",
    "Clear All": "Borrar todo",
    "Click to open list": "Haga clic para abrir la lista",
    "Click to filter": "Haga clic para filtrar",
    "Actions": "Acciones",
    "Critical": "Crítica",
    "High": "Alta",
    "Medium": "Media",
    "Low": "Baja",
    "Status": "Estado",
    "Category": "Categoría",
    "Severity": "Gravedad",
    "Refresh": "Actualizar",
    "Search": "Buscar",
    "Settings": "Configuración",
    "Help": "Ayuda",
    "Dashboard": "Panel",
    "Dashboards": "Paneles",
    "Dashboards & Reports": "Paneles e informes",
    "Dashboards Manager": "Administrador de paneles",
    "Cases": "Casos",
    "Cases & Issues": "Casos e incidencias",
    "Issue": "Incidencia",
    "Issues": "Incidencias",
    "Open": "Abierto",
    "Closed": "Cerrado",

    // --- Left navigation (common to all dashboards) ---
    "Action Center": "Centro de acciones",
    "Agentic Assistant Hub": "Centro de asistentes agénticos",
    "AI Prompts": "Prompts de IA",
    "AI Security": "Seguridad de IA",
    "All Assets": "Todos los activos",
    "All Endpoints": "Todos los endpoints",
    "Analytics Rules": "Reglas de análisis",
    "Application Security": "Seguridad de aplicaciones",
    "Attack Surface": "Superficie de ataque",
    "Attack Surface Issues": "Incidencias de superficie de ataque",
    "Automation": "Automatización",
    "Automation Rules": "Reglas de automatización",
    "Back to main": "Volver al inicio",
    "BIOC": "BIOC",
    "IOC": "IOC",
    "Case Configuration": "Configuración de casos",
    "Code to Cloud Coverage": "Cobertura Code to Cloud",
    "Compliance": "Cumplimiento",
    "Configurations": "Configuraciones",
    "Correlations": "Correlaciones",
    "Data Security": "Seguridad de datos",
    "Detection Rules": "Reglas de detección",
    "Device Control Violations": "Infracciones de control de dispositivos",
    "Disk Encryption Visibility": "Visibilidad del cifrado de disco",
    "Endpoints": "Endpoints",
    "File Integrity Monitoring": "Supervisión de integridad de archivos",
    "Forensics": "Análisis forense",
    "Graph Search": "Búsqueda en grafo",
    "Groups": "Grupos",
    "Host Firewall": "Firewall de host",
    "Host Insights": "Información de hosts",
    "Identity Security": "Seguridad de identidades",
    "Installations": "Instalaciones",
    "Inventory": "Inventario",
    "Investigation & Response": "Investigación y respuesta",
    "Kubernetes Security": "Seguridad de Kubernetes",
    "Live Terminal": "Terminal en vivo",
    "Modules": "Módulos",
    "Playbooks": "Playbook",
    "Playground": "Entorno de pruebas",
    "Policy Management": "Administración de políticas",
    "Posture Management": "Administración de la postura",
    "Query Center": "Centro de consultas",
    "Query Templates": "Plantillas de consulta",
    "Reports": "Informes",
    "Response": "Respuesta",
    "Risk Scores": "Puntuaciones de riesgo",
    "Rules & Policies": "Reglas y políticas",
    "Scheduled Queries": "Consultas programadas",
    "Scripts": "Scripts",
    "Supply Chain Security": "Seguridad de la cadena de suministro",
    "Tenant Navigator": "Navegador de tenants",
    "Threat Management": "Gestión de amenazas",
    "Vulnerability Management": "Gestión de vulnerabilidades",
    "XQL Search": "Búsqueda XQL",
    "Select": "Seleccionar",
    "Select..": "Seleccionar..",

    // --- Widget common empty/error states ---
    "Feature Unavailable": "Función no disponible",
    "Inadequate License": "Licencia insuficiente",
    "No Permissions": "Sin permisos",
    "No Results Found": "No se encontraron resultados",
    "No data": "Sin datos",
    "No data is available as the dataset configured for this widget doesn't exist.":
      "No hay datos disponibles porque el conjunto de datos configurado para este widget no existe.",
    "Private Widget": "Widget privado",
    "This asset is not associated with any groups": "Este activo no está asociado a ningún grupo",
    "This widget has been deleted.": "Este widget se ha eliminado.",
    "This widget is unavailable.": "Este widget no está disponible.",
    "Widget Deleted": "Widget eliminado",
    "You do not have permission to view this private widget":
      "No tiene permiso para ver este widget privado",
    "You don't have the license required to view this widget.":
      "No tiene la licencia necesaria para ver este widget.",
    "You don't have the permissions required to view this widget.":
      "No tiene los permisos necesarios para ver este widget.",

    // --- ag-Grid common UI ---
    "Drag here to set column labels": "Arrastre aquí para definir las etiquetas de columna",
    "Drag here to set row groups": "Arrastre aquí para definir los grupos de filas",
    "Pin Column": "Fijar columna",
    "Hide Column": "Ocultar columna",
    "Autosize column": "Ajustar tamaño de columna automáticamente",
    "Autosize all columns": "Ajustar tamaño de todas las columnas automáticamente",
    "Row Height": "Altura de fila",
    "Column Fit": "Ajuste de columnas",
    "Compact": "Compacto",
    "Specious": "Espacioso",
    "Fit Content": "Ajustar al contenido",
    "Distribute": "Distribuir",
    "Fill Content": "Rellenar contenido",
    "Details": "Detalles",
    "Discover Now": "Descubrir ahora",
    "Copy text to clipboard": "Copiar texto al portapapeles",
    "Copy entire row": "Copiar fila completa",
    "Show empty rows": "Mostrar filas vacías",
    "Hide empty rows": "Ocultar filas vacías",
    "Include empty values": "Incluir valores vacíos",
    "Open in VirusTotal": "Abrir en VirusTotal",
    "Open in Agentic Assistant": "Abrir en Agentic Assistant",
    "Open in Editor": "Abrir en el editor",
    "Duplicate": "Duplicar",
    "Share": "Compartir",
    "Change owner": "Cambiar propietario",
    "Revert": "Revertir",
    "View saved filters": "Ver filtros guardados",
    "Export filters": "Exportar filtros",
    "View Examples": "Ver ejemplos",
    "Edit": "Editar",
    "Save as New": "Guardar como nuevo",
    "(Clear Selection)": "(Borrar selección)",
    "Username": "Nombre de usuario",
    "Password": "Contraseña",
    "View": "Ver",
    "Cards view": "Vista de tarjetas",
    "Learn more": "Más información",
    "Export to file": "Exportar a archivo",
    "Type your search here": "Escriba aquí su búsqueda",
    "Search by name or description": "Buscar por nombre o descripción",
    "here": "aquí",
    "Please fill out this field.": "Complete este campo.",
    "Discard changes?": "¿Descartar los cambios?",
    "Unsaved Changes": "Cambios no guardados",
    "You have unsaved changes. Are you sure you want to leave? All unsaved data will be lost.":
      "Tiene cambios sin guardar. ¿Seguro que desea salir? Se perderán todos los datos no guardados.",
    "Unsaved changes will be lost.": "Se perderán los cambios no guardados.",
    "Discard": "Descartar",
    "Changes will not be saved.": "Los cambios no se guardarán.",
    "Discard changes": "Descartar cambios",
    "Changes were not saved, if you proceed you will lose your changes":
      "Los cambios no se guardaron; si continúa, perderá los cambios",
    "Press SPACE to select this row": "Pulse ESPACIO para seleccionar esta fila",
    "Press SPACE to deselect this row": "Pulse ESPACIO para anular la selección de esta fila",
    "You must enter name": "Debe introducir un nombre",
    "Enter Name": "Introducir nombre",
    "Enter Email": "Introducir correo electrónico",
    "Search in table...": "Buscar en la tabla...",
    // "Search...": the placeholder of generic search boxes. Most of them do a substring match against
    // mislead the user into thinking Japanese input works, so this entry is removed (left untranslated,
    // showing the original English).
    "Define a value here...": "Defina un valor aquí...",
    "Remove filters": "Quitar filtros",
    "Save filters": "Guardar filtros",
    "Save Filter": "Guardar filtro",
    "filter name": "nombre del filtro",
    "Share this filter": "Compartir este filtro",
    "Show filter panel": "Mostrar panel de filtros",
    "Hide filter panel": "Ocultar panel de filtros",
    "Group ID": "ID de grupo",
    "Installers": "Instaladores",
    "Command and Control": "Comando y control",
    "Credential Access": "Acceso a credenciales",
    "Defense Impairment": "Deterioro de las defensas",
    "Discovery": "Descubrimiento",
    "Execution": "Ejecución",
    "Exfiltration": "Exfiltración",
    "Initial Access": "Acceso inicial",
    "Lateral Movement": "Movimiento lateral",
    "Persistence": "Persistencia",
    "Privilege Escalation": "Escalada de privilegios",
    "Reconnaissance": "Reconocimiento",
    "Resource Development": "Desarrollo de recursos",
    "Add description here": "Agregue una descripción aquí",
    "Specify description": "Especifique una descripción",
    "Remove description": "Quitar descripción",
    "Enter description": "Introduzca una descripción",
    "Hide Widgets": "Ocultar widgets",
    "Show Widgets": "Mostrar widgets",

    // --- Warnings/links common to multiple dashboards ---
    "License Violation warning": "Advertencia de infracción de licencia",
    "See Data Ingestion": "Ver ingesta de datos",
    "Open Issues": "Incidencias abiertas",
    "Compliance Score": "Puntuación de cumplimiento",
    "Not Applicable": "No aplicable",
    "not applicable": "no aplicable",
    "Other": "Otros",
    "Workloads": "Cargas de trabajo",
    "cloud account": "cuenta de nube",
    "Cloud": "Nube",
    "Identity": "Identidad",
    "Network": "Red",
    "from last month": "desde el mes pasado",
    "MTTR": "MTTR",
    "Last 24H": "Últimas 24 h",
    "Last 30D": "Últimos 30 días",
    "Custom": "Personalizado",
    "Security Services": "Servicios de seguridad",
    "Notifications": "Notificaciones",
    "Cortex CLOUD License": "Licencia de Cortex CLOUD",
    "Cortex - Analytics": "Cortex - análisis",
    "Management Audit Logs": "Registros de auditoría de administración",
    "Agent Audit Logs": "Registros de auditoría de agentes",
    "XDR Collector Audit Logs": "Registros de auditoría del Recopilador XDR",
    "Health Issues": "Problemas de salud",
    "Issue Exception & Exclusion": "Excepción y exclusión de incidencias",
    "Data Sources & Integrations": "Orígenes de datos e integraciones",

    // --- Tooltip (shown on hover, inside ngb-popover-window) ---
    "Connecting a data source does not imply that all detectors in the same category will be relevant for that source. Rule applicability should be assessed based on the specific context.":
      "Conectar un origen de datos no implica que todos los detectores de la misma categoría sean relevantes para ese origen. La aplicabilidad de las reglas debe evaluarse según el contexto específico.",

    // --- "Select tactics and techniques" modal (the MITRE ATT&CK matrix, shared across screens) ---
    // The individual technique/sub-technique names (each cell's variable text) are instead made
    // eligible for AI (dynamic) translation on the content.js side.
    "Select tactics and techniques": "Seleccionar tácticas y técnicas",
    "sub-technique": "subtécnica",
    // Screen-reader-only labels for icons (not visible on screen).
    "mitre logo": "logotipo de MITRE",
    "free search": "búsqueda libre",
  },

  patterns: [
    // <u-file-upload-dropzone-hint> file-upload component; the format/extension part is left untranslated)
    { re: /^Supported format:\s*(.+)$/, tpl: "Formato admitido: $1" },

    { re: /^([\d,]+)\s+results$/, tpl: "$1 resultados" },

    { re: /^\+\s*(\d+)\s+[Mm]ore$/, tpl: "$1 más" },

    { re: /^(\d+)\s+selected$/i, tpl: "$1 seleccionados" },

    { re: /^selected out of\s+([\d,]+)$/i, tpl: "seleccionados de $1" },

    { re: /^(\d[\d,.]*[KkMm]?)\s+Impacted Assets$/, tpl: "$1 activos afectados" },

    { re: /^Notifications\s+(\(.+\))$/, tpl: "Notificaciones $1" },

    { re: /^(\d[\d,.]*)\s+days$/, tpl: "$1 días" },

    // Ingestion-quota-exceeded warning (the date/day-count parts are dynamic).
    {
      re: /^Based on a (\d+) day average calculation from (.+) to (.+), your daily default ingestion quota is exceeded\. Increase your license limit or reduce your daily ingestion; otherwise, you can expect data processing delays or data not being collected by the application$/,
      tpl: "Según un cálculo promedio de $1 días entre $2 y $3, se ha superado su cuota diaria predeterminada de ingesta. Aumente el límite de su licencia o reduzca la ingesta diaria; de lo contrario, puede haber retrasos en el procesamiento de datos o la aplicación podría no recopilar datos",
    },

    // ag-Grid's right-click menu: "Show rows with 'X'" / "Hide rows with 'X'".
    { re: /^Show rows with\s+(['"].*['"])$/, tpl: "Mostrar filas con $1" },
    { re: /^Hide rows with\s+(['"].*['"])$/, tpl: "Ocultar filas con $1" },
    // ag-Grid's date-column filter: "Show rows N days prior to 'X'" / "Show rows N days after 'X'".
    { re: /^Show rows\s+(\d+)\s+days prior to\s+(['"].*['"])$/, tpl: "Mostrar filas $1 días antes de $2" },
    { re: /^Show rows\s+(\d+)\s+days after\s+(['"].*['"])$/, tpl: "Mostrar filas $1 días después de $2" },
    // XIF editor heading: "User defined rules (Last updated on Jun 4th 2026)".
    { re: /^User defined rules\s*\(Last updated on\s+(.+)\)$/, tpl: "Reglas definidas por el usuario (última actualización: $1)" },
  ],

  skip: [
    // Excludes only a per-finding text combining a CVE number with an asset/host name
    // (e.g. "CVE-2022-1471 vulnerability in org.yaml_snakeyaml at rsam-mas-tl-jenkins-docker").
    // Skipping anything that merely starts with "CVE-" would also wrongly skip Supply Chain
    // Attacks' own descriptions (e.g. for MongoBleed, React2Shell, Log4Shell), which likewise
    // start with a CVE number, even though those already have a dictionary entry.
    /^CVE-\d{4}-\d+ vulnerability in/,
    // Malware-detection messages and other text too complex to templatize.
    /Malware was detected in/i,
    /during RUNTIME scanning/i,
    // Internal ag-Grid component/class names.
    /^AG-[A-Z-]+$/,
    // Dynamic "last updated" display that includes a time (a pattern-based rule may be worth
    // adding for this later).
    /^Last updated on(?!.* \(every \d+ min\)$)/,
    // SVG metadata left behind by the Sketch design tool.
    /^Created with Sketch\.$/,
    /^Generator: Sketch/,
    // Date/time timestamp text (fully dynamic).
    /^[A-Z][a-z]{2}\s+\d{1,2}(st|nd|rd|th)\s+\d{4}\s+\d{2}:\d{2}:\d{2}$/,
    // Date/time timestamp text (a different format), e.g. "August 28, 2026 at 11:02:33 AM UTC".
    /^[A-Z][a-z]+\s+\d{1,2},\s+\d{4}\s+at\s+\d{1,2}:\d{2}:\d{2}\s+[AP]M\s+UTC$/,
    // Cloud region codes (technical identifiers — not translated).
    /^[a-z]{2}-[a-z]+-\d+$/,
    /^global$/,
  ],
};
