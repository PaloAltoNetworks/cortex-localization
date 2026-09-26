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

const dictionaryAttackSurfaceAssets = {
  exact: {
    "Affected Page": "Página afectada",
    "Appears on Page": "Aparece en la página",
    "HSTS": "HSTS",
    "Login": "Inicio de sesión",
    "No": "No",
    "Purpose": "Finalidad",
    "Required": "Obligatorio",
    "Submit Action URL": "URL de acción de envío",
    "Unknown": "Desconocido",
    "Data Type": "Tipo de datos",
    "ID": "ID",
    "Name": "Nombre",
    "Other": "Otros",
    "Result": "Resultado",
    "Script": "Script",
    "Secure": "Seguro",
    "Status": "Estado",
    "Tags": "Etiquetas",
    "Technologies": "Tecnologías",
    "Type": "Tipo",
    "Version": "Versión",
    "Web": "Web",
    "Asset Category": "Categoría de activo",
    "Asset Groups": "Grupos de activos",
    "Asset ID": "ID del activo",
    "Asset Id": "ID de activo",
    "Categories": "Categorías",
    "Compliance": "Cumplimiento",
    "Configurations": "Configuraciones",
    "Configured Host": "Host configurado",
    "Contains": "Contiene",
    "Detected On": "Fecha de detección",
    "Externally Detected Provider": "Proveedor detectado externamente",
    "Exploitable": "Explotable",
    "Fail": "No superado",
    "First Observed": "Observado por primera vez",
    "Geo Region for IP": "Región geográfica de la IP",
    "HTML Analysis": "Análisis de HTML",
    "Hosting Services": "Servicios de hosting",
    "Has Issue": "Tiene incidencias",
    "Load balancers": "Equilibradores de carga",
    "Most Recent Screenshot": "Captura de pantalla más reciente",
    "Open Site in New Tab": "Abrir sitio en una pestaña nueva",
    "Other Websites": "Otros sitios web",
    "Other Websites Owned by Your Organization Hosted on the Same IP in the Last 30 Days":
      "Otros sitios web propiedad de su organización alojados en la misma IP en los últimos 30 días",
    "PaaS": "PaaS",
    "Pass": "Superado",
    "Port": "Puerto",
    "Properties": "Propiedades",
    "Protocol Downgrade": "Degradación de protocolo",
    "Redirects never downgrade from HTTPS to HTTP.": "Las redirecciones nunca degradan de HTTPS a HTTP.",
    "Root Page HTTP Status Code": "Código de estado HTTP de la página raíz",
    "Security Best Practice Analysis": "Análisis de prácticas recomendadas de seguridad",
    "Security Best Practices Analysis": "Análisis de las prácticas recomendadas de seguridad",
    "Security Practice": "Práctica de seguridad",
    "Service Name": "Nombre del servicio",
    "Services Hosting this Website": "Servicios que alojan este sitio web",
    "Sets valid Referrer-Policy Header": "Establece un encabezado Referrer-Policy válido",
    "Technologies Detected in the Last 10 Days": "Tecnologías detectadas en los últimos 10 días",
    "Third Party Resources Detected in the Last 10 days": "Recursos de terceros detectados en los últimos 10 días",
    "Third Party URLs": "URL de terceros",
    "This website uses HTTPS which encrypts data in transit between browser and server.":
      "Este sitio web usa HTTPS, que cifra los datos en tránsito entre el navegador y el servidor.",
    "Website": "Sitio web",
    "Website Details": "Detalles del sitio web",
  },

  patterns: [
    { re: /^Captured (.+) from$/, tpl: "Capturado $1 desde" },
  ],

  skip: [],
};
