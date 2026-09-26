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

const dictionaryIntegrations = {
  exact: {
    "API Keys for external threat intel": "Claves de API para inteligencia de amenazas externa",
    "SERVICE NAME": "NOMBRE DEL SERVICIO",
    "license key": "clave de licencia",
    "Search credential...": "Buscar credencial...",
    "Enter the connection details and click Verify to confirm that the S3 URI path is authorized in the gateway.":
      "Introduzca los detalles de conexión y haga clic en \"Verificar\" para confirmar que la ruta del URI de S3 está autorizada en la puerta de enlace.",
    "Enter the connection details and click Verify to confirm that the Queue URL path is authorized in the gateway.":
      "Introduzca los detalles de conexión y haga clic en \"Verificar\" para confirmar que la ruta de la URL de la cola está autorizada en la puerta de enlace.",
    "Enter the connection details and click Verify to confirm that the Splunk HTTP event collector URL path is authorized in the gateway.":
      "Introduzca los detalles de conexión y haga clic en \"Verificar\" para confirmar que la ruta de la URL del recopilador de eventos HTTP de Splunk está autorizada en la puerta de enlace.",
    "Enter the connection details and click Verify to confirm that the Webhook URL path is authorized in the gateway.":
      "Introduzca los detalles de conexión y haga clic en \"Verificar\" para confirmar que la ruta de la URL del webhook está autorizada en la puerta de enlace.",
    "Connect": "Conectar",
    "Connect syslog server": "Conectar servidor syslog",
    "Ignore certificate errors": "Ignorar errores de certificado",
    "destination": "destino",
    "facility": "facility",
    "DOMAIN NAMES EDL URL:": "URL DE EDL DE NOMBRES DE DOMINIO:",
    "Enable External Dynamic List": "Habilitar lista dinámica externa",
    "Enabling External Dynamic Lists (EDL) allows integration of your defined external Domain Names and IP Addresses lists with your firewall.":
      "Habilitar las listas dinámicas externas (EDL) permite integrar con su firewall las listas externas de nombres de dominio y direcciones IP que haya definido.",
    "External Dynamic List - PAN-OS": "Lista dinámica externa - PAN-OS",
    "External Dynamic List Credentials": "Credenciales de la lista dinámica externa",
    "For more information on how EDL integrates with Palo Alto firewalls, see":
      "Para obtener más información sobre cómo se integra EDL con los firewalls de Palo Alto, consulte",
    "IP ADDRESSES EDL URL:": "URL DE EDL DE DIRECCIONES IP:",
    "Using an External Dynamic List in Policy": "Uso de una lista dinámica externa en una política",
    "Copy API URL": "Copiar URL de la API",
    "New Key": "Nueva clave",
    "User Email": "Correo electrónico del usuario",
    "API key can be used as-is (suitable for curl).": "La clave de API se puede usar tal cual (adecuado para curl).",
    "API key must be hashed with a random arbitrary number and a timestamp (this option is suitable for proprietary scripts and intended to prevent replay attacks).":
      "La clave de API debe cifrarse con hash junto con un número aleatorio arbitrario y una marca de tiempo (esta opción es adecuada para scripts propios y está pensada para evitar ataques de repetición).",
    "Advanced": "Avanzado",
    "CLI Tools": "Herramientas de CLI",
    "Components": "Componentes",
    "Enable Expiration Date": "Habilitar fecha de caducidad",
    "Exceptions Configuration": "Configuración de excepciones",
    "Generate": "Generar",
    "Generate API Key": "Generar clave de API",
    "Notice!": "¡Atención!",
    "This key will not be accessible once you close this window": "No podrá acceder a esta clave una vez que cierre esta ventana",
    "Learn more.": "Más información.",
    "No assets": "No hay activos",
    "No domains": "No hay dominios",
    "No endpoints": "No hay endpoints",
    "Provide access to Domains to view their related Cases and Issues. Users can only view cases or issues referencing assets and endpoints within their scope.":
      "Proporcione acceso a los dominios para ver sus casos e incidencias relacionados. Los usuarios solo pueden ver los casos o incidencias que hacen referencia a activos y endpoints dentro de su alcance.",
    "Scope Definition": "Definición del alcance",
    "Scope is applied to selected features in the system. For features where scoping is not applicable, role-based access control (RBAC) is used and can be configured under Settings > Configurations > Access Management":
      "El alcance se aplica a las funciones seleccionadas del sistema. Para las funciones en las que no se aplica el alcance, se utiliza el control de acceso basado en roles (RBAC), que se puede configurar en Configuración > Configuraciones > Administración de acceso",
    "Select Role": "Seleccionar rol",
    "Select date and time": "Seleccionar fecha y hora",
    "After downloading the MCP file, generate a new API key": "Después de descargar el archivo MCP, genere una nueva clave de API",
    "Download checksum file": "Descargar archivo de suma de comprobación",
    "Download the file below to set up your Cortex MCP Server.": "Descargue el archivo siguiente para configurar su Cortex MCP Server.",
    "MCP File": "Archivo MCP",
    "To fully set up the Cortex MCP Server, please review and follow the instructions in the":
      "Para configurar completamente Cortex MCP Server, revise y siga las instrucciones de",
    "directory service": "servicio de directorio",
    "Click": "Haga clic en",
    "to add directory sync tenant": "para agregar un tenant de sincronización de directorio",
    "Create one.": "Cree uno.",
    "New Credential": "Nueva credencial",
    "There are no Credential Sets to show here.": "No hay conjuntos de credenciales que mostrar aquí.",
    "Credential Name": "Nombre de la credencial",
    "Name must be unique, not empty, and must not contain ()": "El nombre debe ser único, no puede estar vacío y no debe contener ()",
    "Workgroup": "Grupo de trabajo",
  },

  patterns: [
    { re: /^Showing\s+(\d+\/\d+)\s+Instances$/, tpl: "Mostrando $1 instancias" },
    { re: /^(\d+)\s+Connected$/, tpl: "$1 conectados" },
    { re: /^(\d+)\s+Errors?$/, tpl: "$1 errores" },
  ],

  skip: [],
};
