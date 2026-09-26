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

const dictionaryGeneralSettings = {
  exact: {
    "Server Settings": "Configuración del servidor",
    "Issue Management": "Gestión de incidencias",
    "Result": "Resultado",
    "Source IP": "IP de origen",
    "Subtype": "Subtipo",
    "Update Issue": "Actualizar incidencia",
    "User Roles": "Roles de usuario",

    "Default User Notifications": "Notificaciones de usuario predeterminadas",
    "Case assigned": "Caso asignado",
    "Case resolved": "Caso resuelto",
    "Issue assigned": "Incidencia asignada",
    "Issue resolved": "Incidencia resuelta",
    "Notifications exclude actions performed by the user.": "Las notificaciones excluyen las acciones realizadas por el propio usuario.",
    "Create New Forwarding Configuration": "Crear nueva configuración de reenvío",
    "Add Forwarding Configuration": "Agregar configuración de reenvío",
    "Define": "Definir",
    "Forward Destination": "Destino de reenvío",
    "Review and Create": "Revisar y crear",
    "log type": "tipo de registro",
    "Define the forwarding scope by using the filter or right-click on a table cell to select the fields and values.":
      "Defina el alcance de reenvío mediante el filtro o haga clic con el botón derecho en una celda de la tabla para seleccionar los campos y valores.",
    "Add Application": "Agregar aplicación",
    "Alert": "Alerta",
    "Connected Integrations": "Integraciones conectadas",
    "Minutes": "Minutos",
    "Select name": "Seleccionar nombre",
    "Use Auto Generated Subject": "Usar asunto generado automáticamente",
    "channel name": "nombre del canal",
    "distribution list": "lista de distribución",
    "format": "formato",
    "grouping timeframe": "intervalo de agrupación",
    "instance name": "nombre de la instancia",
    "notification timezone": "zona horaria de las notificaciones",
    "subject": "asunto",
    "Configuration Scope": "Alcance de la configuración",
    "Destination Type": "Tipo de destino",
    "Forward Type": "Tipo de reenvío",
    "excluded": "excluido",
    "Enforce query privacy": "Aplicar privacidad de consultas",
    "Enforce query privacy for non-admins": "Aplicar privacidad de consultas para usuarios no administradores",
    "Limit non-admin users and API keys to viewing and managing their own query activity.":
      "Limita a los usuarios no administradores y las claves de API a ver y gestionar solo su propia actividad de consultas.",
    "Query Limits": "Límites de consultas",
    "Unlimited": "Ilimitado",
    "<Max>": "<Máx.>",
    "Query limits govern user-initiated queries, excluding those from playbooks and correlations, to enhance query performance and efficiency. These limits are tenant-wide, unless specific roles and groups are excluded.":
      "Los límites de consultas rigen las consultas iniciadas por los usuarios, excepto las de playbooks y correlaciones, para mejorar el rendimiento y la eficiencia de las consultas. Estos límites se aplican a todo el tenant, salvo que se excluyan roles y grupos específicos.",
    "Excluded User Groups or Roles": "Grupos de usuarios o roles excluidos",
    "Select Group": "Seleccionar grupo",
    "concurrent queries per user": "consultas simultáneas por usuario",
    "query timeout (minutes)": "tiempo de espera de consulta (minutos)",
    "Administration": "Administración",
    "General": "General",
    "Global Settings": "Configuración global",
    "Access Management": "Gestión de acceso",
    "Access Management.": "Gestión de acceso.",
    "Roles": "Roles",
    "User Groups": "Grupos de usuarios",
    "Authentication Settings": "Configuración de autenticación",
    "API Keys": "Claves de API",
    "API Keys.": "Claves de API.",
    "Security Settings": "Configuración de seguridad",
    "Exception Management": "Gestión de excepciones",
    "Automation Exclusion Center": "Centro de exclusiones de automatización",
    "Data Management": "Gestión de datos",
    "Data Collection": "Recopilación de datos",
    "Data Broker": "Data Broker",
    "Broker VMs": "Broker VM",
    "Dataset Management": "Gestión de conjuntos de datos",
    "Query Management": "Gestión de consultas",
    "Parsing Rules": "Reglas de análisis sintáctico",
    "Lists": "Listas",
    "IP Labels": "Etiquetas de IP",
    "External Dynamic List Integration": "Integración de listas dinámicas externas",
    "Integrations": "Integraciones",
    "External Applications": "Aplicaciones externas",
    "Marketplace": "Marketplace",
    "Credentials": "Credenciales",
    "Cloud Identity Engine": "Cloud Identity Engine",
    "Identity Configuration": "Configuración de identidades",
    "Impersonation Role": "Rol de suplantación",
    "Agent Configurations": "Configuraciones de agentes",
    "Agents & LLM Experience": "Experiencia de agentes y LLM",
    "AI Configuration": "Configuración de IA",
    "AI Case Summarization": "Resumen de casos con IA",
    "Enable AI case summarization capabilities": "Habilitar las funciones de resumen de casos con IA",
    "Application Configuration": "Configuración de aplicaciones",
    "AppSec Issues Configuration": "Configuración de incidencias de AppSec",
    "Artifact and Asset Views": "Vistas de artefactos y activos",
    "Automation Email Appearance": "Apariencia de los correos electrónicos de automatización",
    "Case display modes": "Modos de visualización de casos",
    "Case Sensitivity (case_sensitive)": "Distinción entre mayúsculas y minúsculas (case_sensitive)",
    "Caching": "Almacenamiento en caché",
    "Enable Cases Caching": "Habilitar caché de casos",
    "Enable Issues Caching": "Habilitar caché de incidencias",
    "Improve performance on the Cases page by enabling a temporary cache.":
      "Mejore el rendimiento de la página Casos habilitando una caché temporal.",
    "Improve performance on the Issues page by enabling a temporary cache.":
      "Mejore el rendimiento de la página Incidencias habilitando una caché temporal.",
    "Compute Unit Consumption": "Consumo de unidades de cómputo",
    "Email Contacts": "Contactos de correo electrónico",
    "Define the list of contact emails for Cortex communication":
      "Defina la lista de correos electrónicos de contacto para las comunicaciones de Cortex",
    "Endpoint Scoping Mode": "Modo de alcance de endpoints",
    "Engines": "Motores",
    "Exceptions Require Approval": "Las excepciones requieren aprobación",
    "Approval Required": "Aprobación requerida",
    "This setting allows for checks and balances across your organization. If you turn this off, exception requests will be activated immediately, no approval needed.":
      "Esta configuración permite establecer controles en toda la organización. Si la desactiva, las solicitudes de excepción se activarán de inmediato, sin necesidad de aprobación.",
    "Add New Approver": "Agregar nuevo aprobador",
    "List of Approvers": "Lista de aprobadores",
    "New Approver Email": "Correo electrónico del nuevo aprobador",
    "New Approver Name": "Nombre del nuevo aprobador",
    "External Issue Mapping": "Asignación de incidencias externas",
    "Full-size logo": "Logotipo de tamaño completo",
    "Replace the default logo in communication task emails with a custom logo to match your organization branding.":
      "Reemplace el logotipo predeterminado de los correos electrónicos de tareas de comunicación por un logotipo personalizado que coincida con la imagen de marca de su organización.",
    "Recommended dimensions: 50px by 50px. Max file size 100 KB.":
      "Dimensiones recomendadas: 50 px por 50 px. Tamaño máximo de archivo: 100 KB.",
    "Google Maps Key": "Clave de Google Maps",
    "Issue SLA Rules": "Reglas de SLA de incidencias",
    "AppSec Critical Issues Time to Resolve SLA": "SLA de tiempo de resolución de incidencias críticas de AppSec",
    "AppSec High Issues Time to Resolve SLA": "SLA de tiempo de resolución de incidencias altas de AppSec",
    "AppSec Low Issues Time to Resolve SLA": "SLA de tiempo de resolución de incidencias bajas de AppSec",
    "AppSec Medium Issues Time to Resolve SLA": "SLA de tiempo de resolución de incidencias medias de AppSec",
    "Create SLA Rule": "Crear regla de SLA",
    "Finding Sources = Cortex AppSec and Severity = Critical": "Orígenes de hallazgos = Cortex AppSec y Gravedad = Crítica",
    "Finding Sources = Cortex AppSec and Severity = High": "Orígenes de hallazgos = Cortex AppSec y Gravedad = Alta",
    "Finding Sources = Cortex AppSec and Severity = Low": "Orígenes de hallazgos = Cortex AppSec y Gravedad = Baja",
    "Finding Sources = Cortex AppSec and Severity = Medium": "Orígenes de hallazgos = Cortex AppSec y Gravedad = Media",
    "Last Modified Date": "Fecha de última modificación",
    "SLA Goal": "Objetivo de SLA",
    "Create a query to select the issues affected by this rule:": "Cree una consulta para seleccionar las incidencias afectadas por esta regla:",
    "Criteria": "Criterios",
    "New SLA Rule": "Nueva regla de SLA",
    "Preview the Results": "Vista previa de los resultados",
    "SLA Rules": "Reglas de SLA",
    "Set the Conditions for the SLA Rule": "Establecer las condiciones de la regla de SLA",
    "Matching Issues": "Incidencias coincidentes",
    "SLA Rules automatically set the starting countdown value for issues that match the rule’s query criteria. Use them to define the time goals or deadlines that tasks or milestones need to be completed by. For more detailed information read the":
      "Las reglas de SLA establecen automáticamente el valor inicial de la cuenta regresiva de las incidencias que coinciden con los criterios de consulta de la regla. Úselas para definir los objetivos de tiempo o los plazos en los que deben completarse las tareas o hitos. Para obtener información más detallada, consulte la",
    "SLA Fields documentation": "documentación de campos de SLA",
    "SLA Rule Name": "Nombre de la regla de SLA",
    "Enter a name for your SLA rule": "Introduzca un nombre para la regla de SLA",
    "Describe the purpose of this SLA rule": "Describa la finalidad de esta regla de SLA",
    "Enter 0 or greater": "Introduzca 0 o un valor mayor",
    "Enter 0 to 23": "Introduzca un valor de 0 a 23",
    "Enter 0 to 59": "Introduzca un valor de 0 a 59",
    "days": "días",
    "hours": "horas",
    "Define the cases target MTTR per case severity": "Defina el MTTR objetivo de los casos según la gravedad del caso",
    "Keyboard Shortcuts": "Atajos de teclado",
    "Select shortcut to open Cortex Assistant.": "Seleccione el atajo para abrir Cortex Assistant.",
    "Select shortcut to open artifact and asset views of hash or IP address values.":
      "Seleccione el atajo para abrir las vistas de artefactos y activos de valores de hash o dirección IP.",
    "Object Setup": "Configuración de objetos",
    "Outposts": "Outposts",
    "Password Protection (for downloaded files)": "Protección con contraseña (para archivos descargados)",
    "Note: Scroll down to the Define Password Protection for Download Files topic.":
      "Nota: Desplácese hacia abajo hasta el tema \"Definir la protección con contraseña para archivos descargados\".",
    "Profiles": "Perfiles",
    "Sync Profiles": "Perfiles de sincronización",
    "Enable Scope Based Access Control": "Habilitar control de acceso basado en alcances",
    "Scope-Based Access Control (SBAC)": "Control de acceso basado en alcances (SBAC)",
    "Scope-Based Access Control (SBAC) enforces access restrictions on users. Before enabling this setting, ensure that User Group and Users are granted the required access by assigning their scopes in Settings > Configurations >":
      "El control de acceso basado en alcances (SBAC) aplica restricciones de acceso a los usuarios. Antes de habilitar esta configuración, asegúrese de que los grupos de usuarios y los usuarios tengan el acceso necesario asignándoles sus alcances en Configuración > Configuraciones >",
    ". For API Keys, assign scopes in Settings > Configurations > Integrations >":
      ". Para las claves de API, asigne los alcances en Configuración > Configuraciones > Integraciones >",
    "Threat Intelligence": "Inteligencia de amenazas",
    "Timestamp Format": "Formato de marca de tiempo",
    "Select a timestamp format that will be displayed in data tables":
      "Seleccione el formato de marca de tiempo que se mostrará en las tablas de datos",
    "Timezone": "Zona horaria",
    "Select in which time zone to display your Cortex CLOUD data":
      "Seleccione la zona horaria en la que se mostrarán sus datos de Cortex CLOUD",
    "Upgrade Helper": "Asistente de actualización",
    "XDR Collectors": "Recopiladores XDR",
    "XQL Configuration": "Configuración de XQL",
    "These settings control your XQL queries in the system.": "Esta configuración controla las consultas XQL en el sistema.",
    "This change will impact the default behavior of all your XQL configurations except for BIOCs.":
      "Este cambio afectará al comportamiento predeterminado de todas sus configuraciones de XQL, excepto las BIOC.",
    "Allow users to switch to legacy mode. When disabled, only default mode is available.":
      "Permitir que los usuarios cambien al modo heredado. Si se deshabilita, solo estará disponible el modo predeterminado.",
    "Enable legacy mode": "Habilitar modo heredado",
    "Enable Agentic Assistant and natural-language capabilities (LLM).":
      "Habilite el asistente agéntico y las funciones de lenguaje natural (LLM).",
    "While Agentic Assistant experience is currently free, we will notify you before any fees are applied, giving you the opportunity to opt out.":
      "Aunque la experiencia del asistente agéntico es actualmente gratuita, le notificaremos antes de aplicar cualquier cargo, para que tenga la oportunidad de excluirse.",
    "When enabled, cases use an AI-generated name and summary. When disabled, the system or user name and description are displayed.":
      "Si se habilita, los casos usan un nombre y un resumen generados por IA. Si se deshabilita, se muestran el nombre y la descripción del sistema o del usuario.",
    "Will only affect newly retrieved files by Cortex XDR agent v. 8.1 and higher.":
      "Solo afectará a los archivos recuperados recientemente por el agente de Cortex XDR v. 8.1 y posteriores.",
    "Read-only": "Solo lectura",
    "Restrictive": "Restrictivo",
    "Save": "Guardar",
    "For more information, see": "Para obtener más información, consulte",
    "You can also": "También puede",
    "7 Days": "7 días",
    "Allowed Domains": "Dominios permitidos",
    "Allowed Sessions": "Sesiones permitidas",
    "Approved IP Ranges": "Rangos de IP aprobados",
    "Approved User Email Domains (user@domain.com)": "Dominios de correo electrónico de usuarios aprobados (user@domain.com)",
    "As user login expiration (8 hours)": "Igual que la expiración del inicio de sesión del usuario (8 horas)",
    "user login expiration": "expiración del inicio de sesión del usuario",
    "dashboard expiration": "expiración del panel",
    "deactivate inactive user": "desactivar usuario inactivo",
    "+Add": "+Agregar",
    "The value selected, controls how frequently the Cortex tenant will refresh the Cortex Access Token from the CSP. To increase the frequency users have to re-authenticate, the CSP session duration should be reduced.":
      "El valor seleccionado controla la frecuencia con la que el tenant de Cortex actualiza el token de acceso de Cortex desde el CSP. Para aumentar la frecuencia con la que los usuarios deben volver a autenticarse, reduzca la duración de la sesión del CSP.",
    "When setting Approved Domains in parallel to Approved IP Ranges, only users that belong to one of the approved domains and using one of the approved IP ranges, will be able to access the Cortex XDR server":
      "Si se configuran dominios aprobados junto con rangos de IP aprobados, solo los usuarios que pertenezcan a uno de los dominios aprobados y usen uno de los rangos de IP aprobados podrán acceder al servidor de Cortex XDR",
    "Set Uninstall Password": "Establecer contraseña de desinstalación",
    "Broker VM": "Broker VM",
    "Cancel": "Cancelar",
    "Configure expiration time period": "Configurar periodo de expiración",
    "permission reset timeframe": "periodo de restablecimiento de permisos",
    "Control Cortex tenant Same-Site Cookie Policy. Lax allows the cookie to be sent on some cross-site requests,":
      "Controle la política de cookies Same-Site del tenant de Cortex. Lax permite enviar la cookie en algunas solicitudes entre sitios,",
    "Disable access for users that haven't logged in for a long period of time":
      "Deshabilitar el acceso de los usuarios que no hayan iniciado sesión durante un periodo prolongado",
    "Disabled (Default)": "Deshabilitado (predeterminado)",
    "Enable Auto Logout": "Habilitar cierre de sesión automático",
    "Same-Site Cookie Policy": "Política de cookies Same-Site",
    "Session Expiration": "Expiración de la sesión",
    "Strict": "Estricto",
    "Strict does not allow the cookie to be sent on a cross-site request.":
      "Strict no permite enviar la cookie en una solicitud entre sitios.",
    "The following domains and external IPs and ranges are allowed to access the server":
      "Los siguientes dominios, IP externas y rangos tienen permitido el acceso al servidor",
    "User Expiration": "Expiración de usuarios",
    "Action Center Expiration": "Expiración del Centro de acciones",
    "Expiration can be set within 1-30 days from the creation time Updating the expiration will impact actions in \u201cpending\u201d status only":
      "La expiración se puede establecer entre 1 y 30 días desde la hora de creación. Actualizar la expiración solo afectará a las acciones en estado \"pendiente\"",
    "Enabling this feature will remove any duplicate entries based on the defined parameters, leaving only one entry - the last endpoint reporting to the server. The deleted endpoint data is retained for 90 days since its last connection. If a deleted endpoint reconnects it will recover its existing data.":
      "Al habilitar esta función, se eliminarán las entradas duplicadas según los parámetros definidos y solo quedará una entrada: el último endpoint que informó al servidor. Los datos del endpoint eliminado se conservan durante 90 días desde su última conexión. Si un endpoint eliminado se vuelve a conectar, recuperará sus datos existentes.",
    "Custom Mail Subject": "Asunto de correo personalizado",
    "Email Grouping Time Frame (Minutes)": "Intervalo de agrupación de correos electrónicos (minutos)",
    "Forward issues as soon as possible": "Reenviar incidencias lo antes posible",
    "Log Forward Type": "Tipo de reenvío de registros",
    "Output Method": "Método de salida",
    "Time Zone": "Zona horaria",
    "abort malware scan": "anular análisis de malware",
    "agent database cleanup": "limpieza de la base de datos del agente",
    "agent uninstall": "desinstalación del agente",
    "cancel endpoint isolation": "cancelar aislamiento del endpoint",
    "change managing server": "cambiar servidor de administración",
    "collect detailed host firewall logs": "recopilar registros detallados del firewall del host",
    "delete quarantined file": "eliminar archivo en cuarentena",
    "destroy files": "destruir archivos",
    "endpoint script execution": "ejecución de scripts en el endpoint",
    "file search": "búsqueda de archivos",
    "files retrieval": "recuperación de archivos",
    "isolate": "aislar",
    "malware scan": "análisis de malware",
    "memory collection": "recopilación de memoria",
    "pause endpoint protection": "pausar protección del endpoint",
    "quarantine": "poner en cuarentena",
    "registry search": "búsqueda en el registro",
    "remediation": "corrección",
    "restart agent": "reiniciar agente",
    "restore quarantine": "restaurar desde cuarentena",
    "resume endpoint protection": "reanudar protección del endpoint",
    "retrieve alert data": "recuperar datos de alertas",
    "set temporary token": "establecer token temporal",
    "support file retrieval": "recuperación de archivos de soporte",
    "terminate causality (cgo)": "terminar causalidad (cgo)",
    "terminate process": "terminar proceso",
    "unblock ip address": "desbloquear dirección IP",
    "xdr collector support file retrieval": "recuperación de archivos de soporte del recopilador XDR",
    "xdr collector uninstall": "desinstalación del recopilador XDR",
    "xdr collector upgrade": "actualización del recopilador XDR",
    "Advanced Analysis": "Análisis avanzado",
    "Agent Status": "Estado del agente",
    "Agent upgrade": "Actualización del agente",
    "Content Management": "Gestión de contenido",
    "Cortex XDR Log Collection": "Recopilación de registros de Cortex XDR",
    "Critical Environment Versions": "Versiones para entornos críticos",
    "Endpoint Administration Cleanup": "Limpieza de administración de endpoints",
    "Global uninstall password": "Contraseña de desinstalación global",
    "Informative BTP Issues": "Incidencias BTP informativas",
    "Learn More": "Más información",
    "Make reason field mandatory": "Hacer obligatorio el campo de motivo",
    "Number of Agents": "Número de agentes",
    "One-time cleanup": "Limpieza única",
    "Password Strength": "Seguridad de la contraseña",
    "Periodic duplicate cleanup": "Limpieza periódica de duplicados",
    "Require Reason for Live Terminal": "Exigir motivo para Live Terminal",
    "Restore default": "Restaurar valores predeterminados",
    "Time Interval": "Intervalo de tiempo",
    "WildFire Analysis for Benign Verdict": "Análisis de WildFire para veredicto benigno",
    "XDR Calculator for Recommended Bandwidth": "Calculadora XDR de ancho de banda recomendado",
    "XDR Collector": "Recopilador XDR",
    "Mbps (Megabits per second)": "Mbps (megabits por segundo)",
    "Host IP (IPv4 only)": "IP del host (solo IPv4)",
    "Mac Address": "Dirección MAC",
    "Enable WildFire analysis scoring for files with Benign verdicts.":
      "Habilite la puntuación del análisis de WildFire para los archivos con veredicto benigno.",
    "Enable bandwidth control": "Habilitar control de ancho de banda",
    "Enable minor content version updates": "Habilitar actualizaciones de versiones menores de contenido",
    "Enable Critical Environment Versions to be Created and Installed in the Tenant":
      "Permitir crear e instalar versiones para entornos críticos en el tenant",
    "Configure Cortex XDR to collect logs to maintain stability":
      "Configure Cortex XDR para recopilar registros a fin de mantener la estabilidad",
    "Configure Cortex to automatically upload issue data and apply Advanced Analysis exceptions":
      "Configure Cortex para cargar automáticamente los datos de incidencias y aplicar las excepciones de análisis avanzado",
    "Configure the Cortex XDR Agent Versions Used in the tenant":
      "Configure las versiones del agente de Cortex XDR que se usan en el tenant",
    "Configure the Cortex XDR Agent license revocation and deletion period":
      "Configure el periodo de revocación de licencias y eliminación del agente de Cortex XDR",
    "Configure the Cortex XDR agent upgrade scheduler and number of parallel upgrades":
      "Configure el programador de actualizaciones del agente de Cortex XDR y el número de actualizaciones en paralelo",
    "Configure the Endpoint Administration periodic cleanup settings":
      "Configure los ajustes de limpieza periódica de la administración de endpoints",
    "Configure the Palo Alto Networks content update cadence and bandwidth allocation within your organization":
      "Configure la frecuencia de actualización de contenido de Palo Alto Networks y la asignación de ancho de banda en su organización",
    "Disabling this capability takes immediate effect on new hashes, fresh agent installations, and existing security policies.":
      "La deshabilitación de esta función surte efecto inmediato en los hashes nuevos, las instalaciones nuevas de agentes y las políticas de seguridad existentes.",
    "Enable Cortex XDR agents to collect logs necessary to maintain the stability of your Cortex XDR agent and improve performance -":
      "Permita que los agentes de Cortex XDR recopilen los registros necesarios para mantener la estabilidad del agente de Cortex XDR y mejorar el rendimiento -",
    "Note that it could take up to a week to take effect on existing agents in your environment pending agent caching.":
      "Tenga en cuenta que puede tardar hasta una semana en surtir efecto en los agentes existentes de su entorno, a la espera del almacenamiento en caché de los agentes.",
    "Note: this configuration affects only standard endpoints and does not impact the VDI or Temporary Session agent status.":
      "Nota: esta configuración solo afecta a los endpoints estándar y no afecta al estado de los agentes de VDI o de sesión temporal.",
    "Otherwise, the content updates in your network occur only on major releases.":
      "De lo contrario, las actualizaciones de contenido en su red solo se producen en las versiones principales.",
    "This calculation is based on connected agents and includes an overhead for large content update. For additional information":
      "Este cálculo se basa en los agentes conectados e incluye una sobrecarga para las actualizaciones de contenido grandes. Para obtener información adicional",
    "This setting controls whether the reason field for starting a Live Terminal session is mandatory or optional.":
      "Esta configuración controla si el campo de motivo para iniciar una sesión de Live Terminal es obligatorio u opcional.",
    "To enforce immediate protection against the latest threats, enable minor content updates.":
      "Para aplicar una protección inmediata frente a las amenazas más recientes, habilite las actualizaciones menores de contenido.",
    "we recommend you to allocate the minimum of 20 Mbps.": "le recomendamos asignar un mínimo de 20 Mbps.",
    "1 lower-case letter": "1 letra minúscula",
    "1 number": "1 número",
    "1 of the following special characters: !@#%": "1 de los siguientes caracteres especiales: !@#%",
    "1 upper-case letter": "1 letra mayúscula",
    "The password must be 8 to 32 characters and must contain at least:":
      "La contraseña debe tener entre 8 y 32 caracteres y contener al menos:",
    "All actions should be editable between 1-30 days": "Todas las acciones deben poder editarse entre 1 y 30 días",
    "*When selecting more than one parameter, duplications will be removed only if containing all selected parameters":
      "*Al seleccionar más de un parámetro, los duplicados solo se eliminarán si contienen todos los parámetros seleccionados",
    "Set the default uninstall password for all agents in the system":
      "Establezca la contraseña de desinstalación predeterminada para todos los agentes del sistema",
    "agent deletion (days)": "eliminación del agente (días)",
    "amount of parallel upgrades": "cantidad de actualizaciones en paralelo",
    "confirm password": "confirmar contraseña",
    "connection lost (days)": "conexión perdida (días)",
    "define password": "definir contraseña",
    "security content updates": "actualizaciones de contenido de seguridad",
    "Palo Alto Networks - Cortex support": "Palo Alto Networks - Soporte de Cortex",
    "During the first week of a new Cortex XDR agent release rollout, only a single batch of agents is upgraded. After that, auto-upgrades continue to be deployed across your network with the number of parallel upgrades as configured. Consider network bandwidth when determining the number of parallel upgrades in your environment.":
      "Durante la primera semana de implementación de una nueva versión del agente de Cortex XDR, solo se actualiza un único lote de agentes. Después, las actualizaciones automáticas se siguen implementando en su red con el número de actualizaciones en paralelo configurado. Tenga en cuenta el ancho de banda de la red al determinar el número de actualizaciones en paralelo en su entorno.",
    "Note! Critical Environment Versions are designed for sensitive and highly regulated environments and do not contain all updates and content existing in standard versions. It is recommended to restrict the use of these versions to the required minimum.":
      "¡Atención! Las versiones para entornos críticos están diseñadas para entornos sensibles y muy regulados, y no contienen todas las actualizaciones y el contenido de las versiones estándar. Se recomienda restringir el uso de estas versiones al mínimo necesario.",
    "Enable Cortex to automatically upload defined issue data files for advanced analysis. Advanced Analysis increases the Cortex exploit protection module accuracy":
      "Permita que Cortex cargue automáticamente los archivos de datos de incidencias definidos para su análisis avanzado. El análisis avanzado aumenta la precisión del módulo de protección contra exploits de Cortex",
    "Automatically apply Advanced Analysis exceptions to your Global Exceptions list. This will apply all Advanced Analysis exceptions suggested by Cortex, regardless of the issue data file source":
      "Aplique automáticamente las excepciones de análisis avanzado a su lista de excepciones globales. Se aplicarán todas las excepciones de análisis avanzado sugeridas por Cortex, independientemente del origen del archivo de datos de la incidencia",
    "For optimized performance and reduced bandwidth consumption, ensure you install new agents with the distribution package available for Windows Cortex XDR agents 7.3 and later. Otherwise, if you distribute the agent installer via SCCM, it is recommended to configure the bandwidth you allocate in your organization for the Palo Alto Network":
      "Para optimizar el rendimiento y reducir el consumo de ancho de banda, instale los nuevos agentes con el paquete de distribución disponible para los agentes de Cortex XDR para Windows 7.3 y posteriores. De lo contrario, si distribuye el instalador del agente mediante SCCM, se recomienda configurar el ancho de banda que asigna en su organización para Palo Alto Network",
    "When enabled, Cortex displays unique and informative BTP rule names and descriptions. While multiple issue names have been completely revised, the issue descriptions will include both the new descriptions and the previous descriptions that existed previously to better support the transition.":
      "Si se habilita, Cortex muestra nombres y descripciones de reglas BTP únicos e informativos. Aunque se han revisado por completo varios nombres de incidencias, las descripciones de las incidencias incluirán tanto las descripciones nuevas como las que existían anteriormente, para facilitar la transición.",
    "Note: If you have any Cortex filters, starring policies, exclusion policies, scoring rules, log forwarding queries, or automations rules configured for XSOAR / 3rd party SIEM, we advise you update those to support the changes before activating the feature (for example, change the query to include the previous description that is still available in the new description, instead of looking for an exact match).":
      "Nota: Si tiene filtros de Cortex, políticas de destacados, políticas de exclusión, reglas de puntuación, consultas de reenvío de registros o reglas de automatización configuradas para XSOAR o SIEM de terceros, le recomendamos actualizarlos para admitir los cambios antes de activar la función (por ejemplo, cambie la consulta para incluir la descripción anterior, que sigue presente en la nueva descripción, en lugar de buscar una coincidencia exacta).",
  },

  patterns: [
    { re: /^Distribution list\s+(\(\d+\))$/, tpl: "Lista de distribución $1" },
    { re: /^(\d+)\s+hours?$/, tpl: "$1 horas" },
    { re: /^Use configured timezone\s+(\(.+\))$/, tpl: "Usar la zona horaria configurada $1" },
    { re: /^(\d+)\s+minutes?$/, tpl: "$1 minutos" },
    { re: /^Results Preview - Matched\s+([\d,]+)\s+out of\s+([\d,]+)\s+Issues$/, tpl: "Vista previa de resultados: $1 de $2 incidencias coinciden" },
    { re: /^domain name\s+(\(\d+\))$/, tpl: "nombre de dominio $1" },
    { re: /^(\d+)\s+days?$/, tpl: "$1 días" },
    { re: /^(\d+)\s+Items?$/, tpl: "$1 elementos" },
  ],

  skip: [
    // SLA rule condition summary (e.g. "Matches all issues."). Excluded from translation by
    // request, since the text differs per rule.
    /^Matches .+\.$/,
    // The SLA Rules screen's "Description" column (e.g. "Default Critical Issues Time to
    // Resolve SLA") is likewise excluded from translation by request (its exact-dictionary
    // entry has been removed).
  ],
};
