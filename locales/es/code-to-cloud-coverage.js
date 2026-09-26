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

const dictionaryCodeToCloudCoverage = {
  exact: {
    // --- Code to Cloud coverage screen ---
    "Artifact type": "Tipo de artefacto",
    "Artifacts traced from runtime": "Artefactos rastreados desde el tiempo de ejecución",
    "Infrastructure": "Infraestructura",
    "Cloud assets traced from runtime": "Activos de nube rastreados desde el tiempo de ejecución",
    "Cloud assets fully traced cloud-to-code": "Activos de nube totalmente rastreados de la nube al código",
    "Cloud assets lack YOR tags; manual tagging needed": "Los activos de nube no tienen etiquetas YOR; se requiere etiquetado manual",
    "Tagging Needed": "Se requiere etiquetado",
    "View Cloud assets without YOR tag": "Ver activos de nube sin etiqueta YOR",
    "Cloud assets without YOR TAG": "Activos de nube sin etiqueta YOR",
    "Calculate to": "Calcular hasta",
    "Artifacts traced from source": "Artefactos rastreados desde el origen",
    "VCS Repos lack connected pipelines to trace to build": "Los repositorios VCS no tienen pipelines conectados para rastrear hasta la compilación",
    "View repositories": "Ver repositorios",
    "Repos with no traced pipelines": "Repositorios sin pipelines rastreados",
    "VCS Repos lack registry connection for trace to deploy": "Los repositorios VCS no tienen conexión con un registro para rastrear hasta la implementación",
    "Repos with no traced artifact registries": "Repositorios sin registros de artefactos rastreados",
    "Build": "Compilación",
    "Calculate from": "Calcular desde",
    "Cloud → Code": "Cloud → Code",
    "Code → Cloud": "Code → Cloud",
    "Container Images not traced beyond Deploy": "Imágenes de contenedor no rastreadas más allá de la implementación",
    "Container images lack VCS repos to trace to Code": "Las imágenes de contenedor no tienen repositorios VCS para rastrear hasta el código",
    "Container images lack pipelines to trace to Build": "Las imágenes de contenedor no tienen pipelines para rastrear hasta la compilación",
    "Deployment": "Implementación",
    "Flow Direction": "Dirección del flujo",
    "Onboard CI/CD instances": "Incorporar instancias de CI/CD",
    "Onboard Container Registries": "Incorporar registros de contenedores",
    "Onboard VCS Organization/repo": "Incorporar organización/repositorio VCS",
    "Onboarding suggested": "Se recomienda la incorporación",
    "Recommended Next Steps": "Próximos pasos recomendados",
    "Runtime Images not traced": "Imágenes en tiempo de ejecución no rastreadas",
    "Runtime Images not traced beyond pipeline": "Imágenes en tiempo de ejecución no rastreadas más allá del pipeline",
    "Runtime artifacts": "Artefactos en tiempo de ejecución",
    "Runtime artifacts fully traced cloud-to-code": "Artefactos en tiempo de ejecución totalmente rastreados de la nube al código",
    "Runtime images lack registries to trace to Deploy": "Las imágenes en tiempo de ejecución no tienen registros para rastrear hasta la implementación",
    "Steps required to improve traceability": "Pasos necesarios para mejorar la trazabilidad",
    "VM instances lack pipelines to trace to Build": "Las instancias de VM no tienen pipelines para rastrear hasta la compilación",
    "VM instances not traced beyond Runtime": "Instancias de VM no rastreadas más allá del tiempo de ejecución",
    "View Runtime Images traced only to pipeline": "Ver imágenes en tiempo de ejecución rastreadas solo hasta el pipeline",
    "View Untraced Container Images": "Ver imágenes de contenedor no rastreadas",
    "View Untraced VM Instances": "Ver instancias de VM no rastreadas",
    "What is being traced": "Qué se está rastreando",
    "Untraced": "No rastreado",
    "No repositories detected": "No se detectaron repositorios",
    // Kept verbatim ("not transferred"). Other items use "not traced", but this one uses a
    // different word; kept as-is to exact-match the actual displayed text.
    "Cloud Assets not transferred": "Activos de nube no transferidos",
    "IaC resource traced from code": "Recurso de IaC rastreado desde el código",
    "No runtime detected": "No se detectó tiempo de ejecución",
    "No pipelines detected": "No se detectaron pipelines",
    "No deployment detected": "No se detectó ninguna implementación",
    "Artifacts transferred": "Artefactos transferidos",
    "Artifacts not transferred": "Artefactos no transferidos",
    "Repositories not transferred": "Repositorios no transferidos",
    "IaC resources not transferred": "Recursos de IaC no transferidos",
    "Repositories transferred": "Repositorios transferidos",
    "Cloud Assets transferred": "Activos de nube transferidos",
    "IaC resources transferred": "Recursos de IaC transferidos",
    "IaC resources lack YOR tags to trace to runtime": "Los recursos de IaC no tienen etiquetas YOR para rastrear hasta el tiempo de ejecución",
    "Tagged IaC resources lack cloud accounts for Runtime trace": "Los recursos de IaC etiquetados no tienen cuentas de nube para el rastreo en tiempo de ejecución",
    "View IaC resources without YOR tag": "Ver recursos de IaC sin etiqueta YOR",
    "View untraced tagged IaC resources": "Ver recursos de IaC etiquetados no rastreados",
    "Onboard Cloud Accounts": "Incorporar cuentas de nube",
    // In the actual DOM, the count (e.g. "829") sits in its own highlight span,
    // and the "/ 1244" part and the label are further split into separate text
    // nodes by an Angular comment node (<!---->) in between. So this label
    // reaches the dictionary as its own isolated text node — register it as
    // an exact match rather than a fraction pattern.
    // "wo" is shorthand for "without" as displayed in the product; translated by meaning.
    "IaC resources wo YOR": "Recursos de IaC sin YOR",
    "IaC resources with YOR but not traced": "Recursos de IaC con YOR pero no rastreados",
  },

  patterns: [
    // The leading fraction (count) part is variable and left untranslated.
    { re: /^([\d,.]+\s*\/\s*[\d,.]+[A-Za-z]*)\s+Cloud assets fully traced cloud-to-code$/,
      tpl: "$1 activos de nube totalmente rastreados de la nube al código" },
    { re: /^([\d,.]+\s*\/\s*[\d,.]+[A-Za-z]*)\s+IaC resources fully traced code-to-cloud$/,
      tpl: "$1 recursos de IaC totalmente rastreados del código a la nube" },
    // The numerator is rendered in a separate sibling element; this text node only
    // contains the "/ 94" part, which is variable and left untranslated.
    { re: /^(\/\s*[\d,.]+[A-Za-z]*)\s+Repositories fully traced code-to-cloud$/,
      tpl: "$1 repositorios totalmente rastreados del código a la nube" },
    { re: /^(\/\s*[\d,.]+[A-Za-z]*)\s+Runtime artifacts fully traced cloud-to-code$/,
      tpl: "$1 artefactos en tiempo de ejecución totalmente rastreados de la nube al código" },
    { re: /^(\/\s*[\d,.]+[A-Za-z]*)\s+IaC resources fully traced code-to-cloud$/,
      tpl: "$1 recursos de IaC totalmente rastreados del código a la nube" },
    { re: /^(\/\s*[\d,.]+[A-Za-z]*)\s+Cloud assets fully traced cloud-to-code$/,
      tpl: "$1 activos de nube totalmente rastreados de la nube al código" },
  ],

  skip: [],
};
