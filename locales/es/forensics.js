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

const dictionaryForensics = {
  exact: {
    // --- Forensics (investigation & evidence collection) screen ---
    "Forensic Investigations": "Investigaciones forenses",
    "Investigation": "Investigación",
    "Evidence Collections": "Recopilaciones de evidencias",
    "New Issues": "Incidencias nuevas",
    "New Investigation": "Nueva investigación",
    "Create New Investigation": "Crear nueva investigación",
    "investigation Name": "Nombre de la investigación",
    "Your investigation Name": "Nombre de su investigación",
    "Save & Start A Collection": "Guardar e iniciar una recopilación",
    "Available to adopt": "Disponible para adoptar",
    "Override Report mode?": "¿Anular el modo Report?",
    "Allow agents to block file hashes even when the Malware Profile is set to Report":
      "Permitir que los agentes bloqueen hashes de archivos incluso cuando el perfil de malware esté configurado en Report",
    "Override": "Anular",
    "Endpoint name or IP": "Nombre o IP del endpoint",
    "TOTAL ITEMS": "TOTAL DE ELEMENTOS",
    "NEW ISSUES": "INCIDENCIAS NUEVAS",
    "LAST RECEIVED": "ÚLTIMA RECEPCIÓN",

    // --- Command history / search-results grid columns ---
    "Command History": "Historial de comandos",
    "Collection ID": "ID de recopilación",
    "Command": "Comando",
    "File Created": "Archivo creado",
    "File Modified": "Archivo modificado",
    "Generated Time": "Hora de generación",
    "Investigation ID": "ID de investigación",
    "Line": "Línea",
    "Result ID": "ID de resultado",
    "Row UUID": "UUID de fila",
    "Search ID": "ID de búsqueda",
    "User SID": "SID de usuario",

    "Legacy Forensics": "Análisis forense heredado",
    "Legacy Artifact Collections - Windows": "Recopilaciones de artefactos heredadas - Windows",
    "Timezone and Timestamp": "Zona horaria y marca de tiempo",
    "*This is a global application change, you can review in":
      "*Este es un cambio global de la aplicación; puede revisarlo en",
    "Example:": "Ejemplo:",
    "Archive History": "Historial de archivo",

    // --- Remote access tool logs / artifact screen ---
    "Remote Access": "Acceso remoto",
    "Connection ID": "ID de conexión",
    "Connection Type": "Tipo de conexión",
    "Message": "Mensaje",
    "Source Host": "Host de origen",
    "Source Row UUID": "UUID de fila de origen",
    "Alias": "Alias",
    "AnyDesk Id": "AnyDesk ID",
    "Log Accessed": "Acceso al registro",
    "Log Created": "Creación del registro",
    "Log File": "Archivo de registro",
    "Log Modified": "Modificación del registro",
    // Sidebar list of evidence types (LogMeIn/TeamViewer are left untranslated as brand names;
    // AnyDesk ~ / User Access Logging are translated since they are descriptive names).
    "AnyDesk Connection Logs": "Registros de conexión de AnyDesk",
    "AnyDesk Trace Logs": "Registros de seguimiento de AnyDesk",
    "User Access Logging": "Registro de acceso de usuarios",

    // --- Artifact-detail common columns (deleted file/entry type) ---
    "Accessed": "Fecha de acceso",
    "Deleted": "Fecha de eliminación",
    "Entry Created": "Creación de la entrada",
    "Entry Modified": "Modificación de la entrada",
    "Original Path": "Ruta original",
    "Deleted Data": "Datos eliminados",
    "Entry": "Entrada",
    "Key Last Modified": "Última modificación de la clave",
    "MRU Order": "Orden MRU",
    "Value Path": "Ruta del valor",
    "Context": "Contexto",
    "Executable Name": "Nombre del ejecutable",
    "Executable Path": "Ruta del ejecutable",

    // --- "File Access" artifact sidebar (All/Jumplists/OpenSavePidlMRU/Recent Files/ShellBags/
    // TypedPaths). OpenSavePidlMRU, ShellBags, and TypedPaths are literal Windows registry key
    // names, and are referenced by these same English names even in Japanese forensics work,
    // so they are left untranslated.
    "File Access": "Acceso a archivos",
    "Jumplists": "Listas de accesos directos",
    "Recent Files": "Archivos recientes",

    // --- "Network Data" artifact sidebar ---
    "Network Data": "Datos de red",
    "Interface": "Interfaz",
    "ARP Cache": "Caché ARP",
    "DNS Cache": "Caché DNS",
    "Hosts File": "Archivo hosts",

    // --- "System Statistics" artifact sidebar, and the foreground/background usage-metric columns ---
    "System Statistics": "Estadísticas del sistema",
    "Application Resource Usage": "Uso de recursos de aplicaciones",
    "Network Connectivity Usage": "Uso de la conectividad de red",
    "Network Data Usage": "Uso de datos de red",
    "Background Bytes Read": "Bytes leídos en segundo plano",
    "Background Bytes Written": "Bytes escritos en segundo plano",
    "Background Context Switches": "Cambios de contexto en segundo plano",
    "Background Cycle Time": "Tiempo de ciclo en segundo plano",
    "Background Num Read Operations": "N.º de operaciones de lectura en segundo plano",
    "Background Num Write Operations": "N.º de operaciones de escritura en segundo plano",
    "Background Number Of Flushes": "Número de vaciados en segundo plano",
    "Face Time": "Tiempo en pantalla",
    "Foreground Bytes Read": "Bytes leídos en primer plano",
    "Foreground Bytes Written": "Bytes escritos en primer plano",
    "Foreground Context Switches": "Cambios de contexto en primer plano",
    "Foreground Cycle Time": "Tiempo de ciclo en primer plano",
    "Foreground Num Read Operations": "N.º de operaciones de lectura en primer plano",
    "Foreground Num Write Operations": "N.º de operaciones de escritura en primer plano",
    "Foreground Number Of Flushes": "Número de vaciados en primer plano",
    "User Searches": "Búsquedas del usuario",

    // --- "Execution history"-type artifact sidebar (All/Amcache/Background Activity Monitor/
    // CidSizeMRU/LastVisitedPidlMRU/Prefetch/Recentfilecache/Shimcache/UserAssist/Windows
    // Activities). Amcache, CidSizeMRU, LastVisitedPidlMRU, Prefetch, Recentfilecache, Shimcache,
    // and UserAssist are literal Windows registry key/feature names, referenced by these same
    // English names even in Japanese forensics work, so they are left untranslated. Background
    // Activity Monitor and Windows Activities are translated since they are descriptive names.
    "Background Activity Monitor": "Monitor de actividad en segundo plano",
    "Windows Activities": "Actividades de Windows",

    // --- "Network Indicators"/"Data Access" tabs, detail-panel column headers ---
    "Network Indicators": "Indicadores de red",
    "Data Access": "Acceso a datos",
    "Earliest Activity": "Primera actividad",
    "Latest Activity": "Actividad más reciente",
    "Log Search": "Búsqueda de registros",
    "Browser History": "Historial del navegador",

    // --- Collections (triage/hunt collection creation wizard) ---
    "Exports": "Exportaciones",
    "Export all": "Exportar todo",
    "Collections": "Recopilaciones",
    "New Collection": "Nueva recopilación",
    "New Triage Collection": "Nueva recopilación de triaje",
    "triage collection name": "nombre de la recopilación de triaje",
    "Add Collection Name": "Agregar nombre de la recopilación",
    "triage type": "tipo de triaje",
    "Select triage type": "Seleccionar tipo de triaje",
    "No endpoints. Please add triage type onlineif you would like to automate triage collections on specified endpoints.":
      "No hay endpoints. Agregue el tipo de triaje en línea si desea automatizar las recopilaciones de triaje en endpoints específicos.",
    "Please hit Next to continue": "Haga clic en \"Next\" para continuar",
    "Save Collection and Exit": "Guardar recopilación y salir",
    "Volatiles": "Datos volátiles",
    "File Collections": "Recopilaciones de archivos",
    "Custom File Collections": "Recopilaciones de archivos personalizadas",
    "Complete Configuration": "Completar configuración",
    "Save new preset": "Guardar nuevo ajuste preestablecido",
    "Select Presets (macOS)": "Seleccionar ajustes preestablecidos (macOS)",
    "Offline": "Sin conexión",
    "Online": "En línea",
    "Select Presets (Windows)": "Seleccionar ajustes preestablecidos (Windows)",
    "Select Presets (Linux)": "Seleccionar ajustes preestablecidos (Linux)",
    "No Collections Yet": "Aún no hay recopilaciones",
    "Start adding collections": "Empiece a agregar recopilaciones",
    "hunt collection name": "nombre de la recopilación de búsqueda proactiva",
    "New Hunt Collection": "Nueva recopilación de búsqueda proactiva",
    "maximum concurrent endpoints": "máximo de endpoints simultáneos",
    "One-Time Collection": "Recopilación única",
    "Repeat Collection Every": "Repetir la recopilación cada",
    "Valid range time must be at least 1 hr. Scheduled hunts are executed based on the time zone of the agent":
      "El intervalo de tiempo válido debe ser de al menos 1 hora. Las búsquedas proactivas programadas se ejecutan según la zona horaria del agente",

    // --- Investigation screen: automation/Playbook configuration, and
    // endpoint response-action result display ---
    "New Playbook": "Nuevo playbook",
    "Hide Script Helper": "Ocultar el asistente de scripts",
    "Upload a file": "Cargar un archivo",
    "Edit Automation Rule": "Editar regla de automatización",
    "To add rule conditions, select a field and its value using the filter or right-click on a table cell to select that field and value.":
      "Para agregar condiciones a la regla, seleccione un campo y su valor con el filtro, o haga clic con el botón derecho en una celda de la tabla para seleccionar ese campo y valor.",
    "Select Automation": "Seleccionar automatización",
    "Action Last Update": "Última actualización de la acción",
    "Scanning Complete": "Análisis completado",
    "Hash": "Hash",
    "FILE PATHS": "RUTAS DE ARCHIVO",
    "Download definitions file": "Descargar archivo de definiciones",
    // "investigation" is kept lowercase to match the actual displayed text (a casing
    // "Close User" (case-closing) terminology.
    "Edit investigation": "Editar investigación",
    "Close investigation": "Cerrar investigación",
    "Add Name": "Agregar nombre",
    // A time-unit dropdown option (e.g. "Hrs"/"Days") in a schedule input such as
    // "Repeat Collection Every".
    "Hrs": "Horas",
    "Invalid time range selected, Please enter a valid range, minimum 1 hour.":
      "Se seleccionó un intervalo de tiempo no válido. Introduzca un intervalo válido de al menos 1 hora.",

    // --- Investigation screen: the comment section, moving values to the
    // allow/block list, and the "Isolate endpoint" action ---
    "Add comment": "Agregar comentario",
    "Enter a comment": "Introduzca un comentario",
    "Edit comment": "Editar comentario",
    // "case" is kept lowercase to match the actual displayed text (a casing inconsistency
    // in the product). Edits the ID of the case associated with this investigation, shown in
    // the investigation's detail panel.
    "Edit case ID": "Editar ID del caso",
    // Moves a hash/indicator from within an investigation to the allow list. A different
    // action from xql-search.js's "Add to allow list", so added as a separate entry.
    "Move to allow list": "Mover a la lista de permitidos",
    // Same as above, but moving to the block list instead.
    "Move to block list": "Mover a la lista de bloqueados",
    "Value is already added to block list": "El valor ya se agregó a la lista de bloqueados",

    // --- The "Isolate endpoint" action from within an investigation ---
    "ISOLATE ENDPOINTS": "AISLAR ENDPOINTS",
    // Followed immediately by a separate element giving the target count (e.g. "1 endpoint",
    // handled in patterns below). Since the sentence is split across two elements, this part
    // alone doesn't form a fully self-contained translation, but reads naturally once the count
    // follows the colon in the actual UI.
    "You are about to isolate": "Está a punto de aislar",
    // Similar to endpoint-policy-management.js's "Isolation will block host network access,
    // except for traffic to Cortex XDR." but says "endpoint" instead of "host" and has no
    // trailing period (added as a separate entry to exact-match the actual displayed text).
    "Isolation will block endpoint network access, except for traffic to Cortex XDR":
      "El aislamiento bloqueará el acceso a la red del endpoint, excepto el tráfico hacia Cortex XDR",
    "Edit isolation comment": "Editar comentario de aislamiento",
    // The original text says "Cancel isolate?" rather than the more natural "Cancel
    // isolation?", but kept verbatim here to exact-match what's actually displayed.
    "Cancel isolate?": "¿Cancelar el aislamiento?",
    "Note: Cancellation is not guaranteed if the action is in progress by the time the request is processed.":
      "Nota: No se garantiza la cancelación si la acción está en curso en el momento en que se procesa la solicitud.",
    "Cancel action": "Cancelar acción",
    // Alongside the generic "Cancel action", there are per-action-type cancel buttons/confirm
    // dialogs. Like "Cancel isolate?" (for isolation), these are the file-retrieval-specific
    // cancel action (see "files retrieval" in general-settings.js's lowercase action-name list).
    "Cancel files retrieval": "Cancelar la recuperación de archivos",
    "Cancel files retrieval?": "¿Cancelar la recuperación de archivos?",
    // A separate label (no question mark), used on a button etc., distinct from the "Cancel
    // isolate?" confirmation-dialog text above.
    "Cancel isolation": "Cancelar aislamiento",
    // Updates the expiration of a pending action (isolation, file retrieval, etc.) — the same
    // concept as general-settings.js's "Action Center Expiration" (expiration can be set
    // within 1-30 days from creation; updating it only affects actions in "pending" status).
    "Update expiration": "Actualizar vencimiento",
  },

  patterns: [
    // The action-type name (variable) is managed separately from the lowercase action-name list
    // elsewhere (e.g. "resume endpoint protection" in general-settings.js), so it is left
    // untranslated here.
    { re: /^Detailed Results - (.+) \(ID (\d+)\)$/, tpl: "Resultados detallados - $1 (ID $2)" },
    // Target count in the "Isolate endpoint" / "Cancel action" dialogs (e.g. "1 endpoint",
    // "5 endpoints").
    { re: /^(\d+)\s+endpoints?$/, tpl: "$1 endpoints" },
    { re: /^This pending action will be canceled for\s+(\d+)\s+endpoints?\.$/,
      tpl: "Esta acción pendiente se cancelará para $1 endpoints." },
    // The endpoint name (an identifier) is left untranslated.
    { re: /^Changing isolation comment for\s+(.+)$/, tpl: "Cambiando el comentario de aislamiento de $1" },
  ],

  skip: [],
};
