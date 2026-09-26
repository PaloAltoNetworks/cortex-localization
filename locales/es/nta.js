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

const dictionaryNta = {
  exact: {
    "DNS Activity": "Actividad de DNS",
    "DNS Response Codes": "Códigos de respuesta de DNS",
    "Daily DNS Queries": "Consultas DNS diarias",
    "Daily Threats": "Amenazas diarias",
    "Dataset Unavailable": "Conjunto de datos no disponible",
    "FAILED TO RUN QUERY": "NO SE PUDO EJECUTAR LA CONSULTA",
    "From Zone": "Zona de origen",
    "GB Sent and Received": "GB enviados y recibidos",
    "Geo Locations": "Ubicaciones geográficas",
    "HTTP Activity": "Actividad HTTP",
    "HTTP Content Type": "Tipo de contenido HTTP",
    "HTTP Method": "Método HTTP",
    "HTTP Response Code": "Código de respuesta HTTP",
    "HTTP User Agent": "Agente de usuario HTTP",
    "Network Zones": "Zonas de red",
    "Overview": "Resumen",
    "Recent Threats": "Amenazas recientes",
    "The required dataset for this widget is not available.":
      "El conjunto de datos necesario para este widget no está disponible.",
    "Threat Category": "Categoría de amenaza",
    "Threat Severity": "Gravedad de la amenaza",
    "Threat Sources": "Orígenes de amenazas",
    "Threats": "Amenazas",
    "To Zone": "Zona de destino",
    "Top App-IDs": "Principales App-ID",
    "Top Geo Locations": "Principales ubicaciones geográficas",
    "Transport Protocols": "Protocolos de transporte",
    "URL Activity": "Actividad de URL",
    "URL Categories": "Categorías de URL",
    "URL Risk": "Riesgo de URL",
    "Volume": "Volumen",
    "Zones": "Zonas",
  },

  patterns: [
    { re: /^unknown field (\w+)\.$/, tpl: "Campo desconocido $1." },
    { re: /^\+\s*(\d+)\s+more$/, tpl: "$1 más" },
  ],

  skip: [],
};
