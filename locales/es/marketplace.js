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

const dictionaryMarketplace = {
  exact: {
    "Installed Content Packs": "Paquetes de contenido instalados",
    "Show": "Mostrar",
    "All Packs": "Todos los paquetes",
    "Notifications active": "Notificaciones activas",
    "Update to 1.1.6": "Actualizar a 1.1.6",
    "Content": "Contenido",
    "Dependencies": "Dependencias",
    "Version History": "Historial de versiones",
    "Show Deprecated Content": "Mostrar contenido obsoleto",
    "INFO": "INFORMACIÓN",
    "Last installed": "Última instalación",
    "Installed version": "Versión instalada",
    "Certification": "Certificación",
    "Certified": "Certificado",
    "Supported by": "Con soporte de",
    "Go to": "Ir a",
    "Content Pack support site": "Sitio de soporte del paquete de contenido",
    "First Created": "Primera creación",
    "Last Release": "Última versión publicada",
    "Free Enricher": "Enriquecedor gratuito",
    "WORKS WITH THE FOLLOWING INTEGRATIONS:": "FUNCIONA CON LAS SIGUIENTES INTEGRACIONES:",
    "DISCLAIMER": "AVISO LEGAL",
    "Content packs are licensed by the Publisher identified above and subject to the Publisher’s own":
      "Los paquetes de contenido tienen licencia del editor identificado anteriormente y están sujetos a los",
    "licensing terms": "términos de licencia",
    "Marketplace documentation": "Documentación de Marketplace",
    "Cart": "Carrito",
    "Your cart is empty": "Su carrito está vacío",
    "Go shopping": "Ir de compras",
    "Categories": "Categorías",
    "Filter by:": "Filtrar por:",
    "Search in": "Buscar en",
    "Sort by": "Ordenar por",
    "See all": "Ver todo",
    "See more": "Ver más",
    "Show installed": "Mostrar instalados",
    "Content Pack includes": "El paquete de contenido incluye",
    "Content Packs": "Paquetes de contenido",
    "Getting Started": "Primeros pasos",
    "Partner Spotlight": "Socios destacados",
    "Partners": "Socios",
    "Published By": "Publicado por",
    "Types": "Tipos",
    "Use Cases": "Casos de uso",
    "Alerts": "Alertas",
    "Analytics & SIEM": "Análisis y SIEM",
    "Asset Management": "Gestión de activos",
    "Attack": "Ataque",
    "Breach": "Brecha",
    "Breach Notification": "Notificación de brechas",
    "Classifiers": "Clasificadores",
    "Code Repositories": "Repositorios de código",
    "Collection": "Recopilación",
    "Dark Web": "Dark web",
    "Data Model Rules": "Reglas del modelo de datos",
    "Identity And Access Management": "Gestión de identidades y accesos",
    "Incident Response": "Respuesta a incidentes",
    "Extracts text from images.": "Extrae texto de imágenes.",
    "Show Commands": "Mostrar comandos",
    "The following packs have updates:": "Los siguientes paquetes tienen actualizaciones:",
  },

  patterns: [
    { re: /^Content Packs Library\s+(\(\d+\))$/, tpl: "Biblioteca de paquetes de contenido $1" },
    { re: /^(\d+)\s+Scripts?$/, tpl: "$1 scripts" },
    { re: /^(\d+)\s+Integrations?$/, tpl: "$1 integraciones" },
    { re: /^(\d+)\s+updates?\s+available$/, tpl: "$1 actualizaciones disponibles" },
  ],

  skip: [],
};
