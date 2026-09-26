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

const dictionaryMitreAttackFrameworkCoverage = {
  exact: {
    "MITRE ATT&CK Framework Coverage": "Cobertura del marco MITRE ATT&CK",

    "Active": "Activo",
    "Contributing Data Sources": "Orígenes de datos que contribuyen",
    "Data Source Type:": "Tipo de origen de datos:",
    "Detection Type:": "Tipo de detección:",
    "Download Support File": "Descargar archivo de soporte",
    "Inactive": "Inactivo",
    "Number of Detection Rules Per Tactic": "Número de reglas de detección por táctica",
    "Please try again in a few minutes.": "Vuelva a intentarlo en unos minutos.",
    "Show only Covered Methods": "Mostrar solo los métodos cubiertos",
    "We are experiencing a problem, data may not be up to date.":
      "Estamos experimentando un problema; es posible que los datos no estén actualizados.",
  },

  patterns: [
    { re: /^(\d+)\s+items selected$/, tpl: "$1 elementos seleccionados" },
  ],

  skip: [],
};
