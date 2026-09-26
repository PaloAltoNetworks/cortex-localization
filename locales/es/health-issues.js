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

const dictionaryHealthIssues = {
  exact: {
    "Integration Instance - Command": "Instancia de integración - Comando",
    "Legacy health issues": "Problemas de salud heredados",
    "Data Ingestion Health": "Salud de la ingesta de datos",
    "There are no Ingestion Health issues": "No hay problemas de salud de la ingesta",
    "Observation Time": "Hora de observación",
    "Note: The table data will reload automatically when you close this panel.": "Nota: Los datos de la tabla se volverán a cargar automáticamente al cerrar este panel.",
  },

  patterns: [
    { re: /^Detected\s+(\d+)\s+out of$/, tpl: "Detectados $1 de " },
    // "Warning: Integration command 'setIssueSeverity' on integration 'Builtin' instance 'Builtin' ran for 16 minutes as part of investigation '5808252', exceeding the recommended threshold of 15 minutes. Performance may be affected."
    { re: /^Warning: Integration command '(.+)' on integration '(.+)' instance '(.+)' ran for (\d+) minutes? as part of investigation '(.+)', exceeding the recommended threshold of (\d+) minutes?\. Performance may be affected\.$/,
      tpl: "Advertencia: El comando de integración \"$1\" de la instancia \"$3\" de la integración \"$2\" se ejecutó durante $4 minutos como parte de la investigación \"$5\", superando el umbral recomendado de $6 minutos. El rendimiento podría verse afectado." },
  ],

  skip: [],
};
