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

const dictionaryPackageExplorer = {
  exact: {
    "Deprecated packages": "Paquetes obsoletos",
    "Samples": "Muestras",
    "Console URL": "URL de la consola",
    "Public URL": "URL pública",
    "Report false positive": "Notificar falso positivo",
    "Layer IDs": "ID de capas",
    "Origin Package Name": "Nombre del paquete de origen",
    "Symbols": "Símbolos",
    "PURL": "PURL",
    "Copy PURL": "Copiar PURL",
    "Risk:": "Riesgo:",
    "Source Package": "Paquete fuente",
    "Binaries": "Binarios",
    "High-risk packages": "Paquetes de alto riesgo",
    "Highlights": "Aspectos destacados",
    "Package Type": "Tipo de paquete",
    "Packages currently classified as high operational risk":
      "Paquetes clasificados actualmente con alto riesgo operativo",
    "Packages highlights": "Aspectos destacados de los paquetes",
    "Total used packages by development stage": "Total de paquetes usados por etapa de desarrollo",
    "Used In": "Se usa en",
  },

  patterns: [
    { re: /^(\d+)\s+Malicious packages$/, tpl: "$1 paquetes maliciosos" },
    { re: /^(\d+)\s+Deprecated packages$/, tpl: "$1 paquetes obsoletos" },
    { re: /^(\d+)\s+Code,\s+(\d+)\s+Runtime,\s+(\d+)\s+Deploy$/, tpl: "Código: $1, tiempo de ejecución: $2, implementación: $3" },
  ],

  skip: [],
};
