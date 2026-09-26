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

const dictionaryCortexAgenticAssistant = {
  exact: {
    "Explore Cortex Agentic Assistant": "Explorar Cortex Agentic Assistant",
    "Fully executed plans": "Planes ejecutados por completo",
    "Incomplete plans": "Planes incompletos",
    "No plans recorded": "No hay planes registrados",
    "Plans": "Planes",
    "User Prompts": "Prompts de usuario",
    "Automation rules": "Reglas de automatización",
    "Last 7D": "Últimos 7 días",

    // --- Agent creation/edit wizard ---
    "Agent Name": "Nombre del agente",
    "Specify Agent Name": "Especifique el nombre del agente",
    "Select color": "Seleccionar color",
    "Write a short explanation on what is the common context of the selected actions":
      "Escriba una breve explicación sobre el contexto común de las acciones seleccionadas",
    "Specific Instructions": "Instrucciones específicas",
    "More information": "Más información",
    "Type here...": "Escriba aquí...",
    "Add the rules this agent must follow—tone, decision bounds, safety checks, and output format. Keep it less than 3k characters.":
      "Agregue las reglas que debe seguir este agente: tono, límites de decisión, comprobaciones de seguridad y formato de salida. Use menos de 3000 caracteres.",
    "Who has access to Agent": "Quién tiene acceso al agente",
    "Only me": "Solo yo",
    "Public Agent": "Agente público",
    "Conversation Starters": "Iniciadores de conversación",
    "up to 4 items": "hasta 4 elementos",
    "Add conversation starter": "Agregar iniciador de conversación",
    "Create agent": "Crear agente",
    "Build a New Agent": "Crear un nuevo agente",
    "Agent Details": "Detalles del agente",
    "Access Control": "Control de acceso",
    // In the actual DOM, the two sentences above live in a single text node (separated by a
    // newline, white-space: pre), so — given that matching normalizes newlines to a single
    // space — they're registered as one combined key (registering them as two separate entries
    // would leave both as partial matches that never match).
    "Define which roles and actions the agent has access to. Selecting a role auto-selects its actions. Deselecting an action clears the role.":
      "Defina a qué roles y acciones tiene acceso el agente.\nAl seleccionar un rol, se seleccionan automáticamente sus acciones. Al anular la selección de una acción, se borra el rol.",
    "Selected Roles": "Roles seleccionados",
    "Selected Actions": "Acciones seleccionadas",
    "New Action": "Nueva acción",
    "What the AI agent is supposed to be or act as. Defines its identity and primary function. Example: \"SOC Tier 1 Analyst: as a Tier 1 analyst you are responsible for triage alerts and conclude if an alert is a true or false positive\" or \"Incident Response Analyst: as an incident response Analyst you are responsible for investigating and conduct forensics of relevant artifacts related to an incident and provide conclusions about the incident and TTP's used by the threat actor.\"":
      "Lo que el agente de IA debe ser o cómo debe actuar. Define su identidad y su función principal. Ejemplo: \"Analista SOC de nivel 1: como analista de nivel 1, usted es responsable de clasificar las alertas y determinar si una alerta es un verdadero positivo o un falso positivo\" o \"Analista de respuesta a incidentes: como analista de respuesta a incidentes, usted es responsable de investigar y realizar el análisis forense de los artefactos relevantes relacionados con un incidente, y de ofrecer conclusiones sobre el incidente y las TTP utilizadas por el actor de amenazas.\"",
    "The specific rules and behavioral guidelines that tell the agent how to operate and respond. Example: \"Follow the NIST framework, provide clear and concise recommendations. used critical thinking when conducting analysis\"":
      "Las reglas específicas y las pautas de comportamiento que indican al agente cómo operar y responder. Ejemplo: \"Siga el marco de NIST y proporcione recomendaciones claras y concisas. Aplique el pensamiento crítico al realizar análisis\"",
    "Output Structure": "Estructura de salida",
    "How the agent should format and organize its responses. Example: \"Json, Markdown, Array, enum\"":
      "Cómo debe el agente dar formato y organizar sus respuestas. Ejemplo: \"Json, Markdown, Array, enum\"",
    "Delete Agent": "Eliminar agente",

    // --- Action registration wizard (Register Action) ---
    "Start chat": "Iniciar chat",
    "Register action": "Registrar acción",
    "Action Details": "Detalles de la acción",
    "Structuring your content as an Action lets the agent select and execute the intended item based on context, standardizing behavior and ensuring accuracy.":
      "Estructurar el contenido como una acción permite al agente seleccionar y ejecutar el elemento previsto según el contexto, lo que estandariza el comportamiento y garantiza la precisión.",
    "Type of content:": "Tipo de contenido:",
    "AI Prompt": "Prompt de IA",
    "Select Content:": "Seleccionar contenido:",
    "Select the Script you want to register as an action": "Seleccione el script que desea registrar como acción",
    "Select the Command you want to register as an action": "Seleccione el comando que desea registrar como acción",
    "Select the AI Prompt you want to register as an action": "Seleccione el prompt de IA que desea registrar como acción",
    "Provide a title": "Proporcione un título",
    "Provide a concise title that shows what the Action does": "Proporcione un título conciso que indique lo que hace la acción",
    "Goal:": "Objetivo:",
    "describe how the outcome is achieved": "describa cómo se logra el resultado",
    "Mark Action as sensitive to require user approval": "Marque la acción como sensible para exigir la aprobación del usuario",
    "Few-shot examples:": "Ejemplos few-shot:",
    "Include examples that illustrate how and when the Action is invoked": "Incluya ejemplos que ilustren cómo y cuándo se invoca la acción",
    "Add Example": "Agregar ejemplo",
    "Provide clear descriptions for each argument to guide Agentix in correctly mapping inputs and outputs. This ensures the action is executed as intended.":
      "Proporcione descripciones claras para cada argumento a fin de que Agentix asigne correctamente las entradas y salidas. Esto garantiza que la acción se ejecute según lo previsto.",
    "The selected item has no parameters to define": "El elemento seleccionado no tiene parámetros que definir",
    "Mark as non-sensitive": "Marcar como no sensible",
    "Mark as sensitive": "Marcar como sensible",
    "Delete Action": "Eliminar acción",
  },

  patterns: [
    // "Are you sure you want to delete auenoyama-test?" (delete-confirmation dialog; the agent name varies)
    { re: /^Are you sure you want to delete (.+)\?$/, tpl: "¿Está seguro de que desea eliminar \"$1\"?" },
    // "Arguments (1)" / "Outputs (1)" (headings in the Register Action wizard; the count varies)
    { re: /^Arguments \((\d+)\)$/, tpl: "Argumentos ($1)" },
    { re: /^Outputs \((\d+)\)$/, tpl: "Salidas ($1)" },
  ],

  skip: [],
};
