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

const dictionaryDataManagement = {
  exact: {
    // --- Dataset Management screen ---
    "Cold Range": "Rango frío",
    "Dataset": "Conjunto de datos",
    "Dataset Name": "Nombre del conjunto de datos",
    "Dataset Views": "Vistas de conjuntos de datos",
    "Hot Range": "Rango caliente",
    "Hot Storage License": "Licencia de almacenamiento caliente",
    "Log Update Type": "Tipo de actualización de logs",
    "Logs": "Logs",
    "Lookup": "Lookup",
    "Raw": "Raw",
    "System Audit": "Auditoría del sistema",
    "Total Days Stored": "Total de días almacenados",
    "Total Size Stored": "Tamaño total almacenado",
    "Average Daily Size": "Tamaño diario promedio",
    "Average Event Size": "Tamaño promedio de evento",
    "Data tier": "Nivel de datos",
    "Default Query Target": "Destino de consulta predeterminado",
    "Source Query": "Consulta de origen",
    "TTL": "TTL",
    "TTL(minutes)": "TTL (minutos)",
    "Total Events": "Total de eventos",
    "Is Valid": "Es válido",
    "Related Tables": "Tablas relacionadas",
    "New Dataset View": "Nueva vista de conjunto de datos",
    "Dataset View Name": "Nombre de la vista de conjunto de datos",
    "Created At": "Fecha de creación",
    "Add Lookup": "Agregar lookup",
    "Upload a csv, tsv, or json file (max. 30MB) to be used as a dataset":
      "Cargue un archivo csv, tsv o json (máx. 30 MB) para usarlo como conjunto de datos",
    "Drag and Drop a file here": "Arrastre y suelte un archivo aquí",
    "browse": "busque",
    "your files": "sus archivos",
    "Define dataset name": "Definir nombre del conjunto de datos",

    // --- Parsing Rules screen ---
    "User Defined": "Definido por el usuario",
    "Default Rules": "Reglas predeterminadas",
    "Both": "Ambos",
    "Simulate": "Simular",
    "Event ID": "ID de evento",
    "Input Logs": "Logs de entrada",
    "Line number": "Número de línea",
    "Logs output": "Salida de logs",
    "No output logs": "No hay logs de salida",
    "Output Logs": "Logs de salida",
    "Raw log": "Log sin procesar",
    "Show more": "Mostrar más",
    "Success": "Correcto",
    "XQL Samples": "Ejemplos de XQL",
    "Sample time": "Hora de la muestra",
    "Layout": "Diseño",
    "Filters": "Filtros",
    "Restore default layout": "Restaurar diseño predeterminado",
    "APPEARANCE": "APARIENCIA",
    "LOG FORMAT": "FORMATO DE LOG",
    "TREE": "ÁRBOL",
    "Search column": "Buscar columna",
    "Remove all": "Quitar todo",
    "Add all": "Agregar todo",
    "You can change your parsing rules and try again": "Puede cambiar sus reglas de análisis y volver a intentarlo",

    // --- Compute Units Usage screen ---
    "API Query": "Consulta de API",
    "Agent and LLM consumption is currently shown for informational purposes only and does not impact your Compute Unit balance.":
      "El consumo de agentes y LLM se muestra actualmente solo con fines informativos y no afecta a su saldo de unidades de cómputo.",
    "Agentic Assistant": "Asistente agéntico",
    "Agents & LLM": "Agentes y LLM",
    "Compute Unit Usage": "Uso de unidades de cómputo",
    "Compute units": "Unidades de cómputo",
    "Consumption by category over time": "Consumo por categoría a lo largo del tiempo",
    "Daily limit": "Límite diario",
    "LLM Task": "Tarea de LLM",
    "Notebook": "Cuaderno",
    "Queries": "Consultas",
    "Set daily limit": "Establecer límite diario",
    "Set a daily limit to manage your compute unit consumption. This helps distribute your annual quota over time and prevent early depletion.":
      "Establezca un límite diario para administrar el consumo de unidades de cómputo. Esto ayuda a distribuir su cuota anual a lo largo del tiempo y evitar que se agote antes de tiempo.",
    "Queries limit": "Límite de consultas",
    "No limit": "Sin límite",
    "This is your": "Este es su",
    "Timestamp": "Marca de tiempo",
    "Total annual usage": "Uso anual total",
    "Trigger Type": "Tipo de desencadenador",
    "Unused": "Sin usar",
    "Usage by type": "Uso por tipo",
    "XQL Queries": "Consultas XQL",
    "Billable": "Facturable",
    "Trigger/PAPI Key ID": "ID de desencadenador/clave PAPI",
    "Query/Prompt": "Consulta/prompt",
  },

  patterns: [
    { re: /^Cortex GB hot retention:\s*(\d+)\s*days$/, tpl: "Retención en caliente de Cortex GB: $1 días" },
    { re: /^Cortex EP hot retention:\s*(\d+)\s*days$/, tpl: "Retención en caliente de Cortex EP: $1 días" },
    { re: /^Cortex EP issues and cases hot retention:\s*(\d+)\s*days$/, tpl: "Retención en caliente de incidencias y casos de Cortex EP: $1 días" },
    { re: /^Cortex GB issues and cases hot retention:\s*(\d+)\s*days$/, tpl: "Retención en caliente de incidencias y casos de Cortex GB: $1 días" },
    { re: /^IN VIEW\s+(\(\d+\))$/, tpl: "EN VISTA $1" },
    { re: /^ADD COLUMNS\s+(\(\d+\))$/, tpl: "AGREGAR COLUMNAS $1" },
    // "Divide annual quota evenly" and "[55 per day]" render as separate text
    // nodes, so each is pattern-matched individually.
    { re: /^Divide annual quota evenly$/, tpl: "Dividir la cuota anual de forma equitativa" },
    { re: /^(\d+)% of annual quota$/, tpl: "$1% de la cuota anual" },
    { re: /^\[(\d+) per day\]$/, tpl: "[$1 por día]" },
  ],

  skip: [],
};
