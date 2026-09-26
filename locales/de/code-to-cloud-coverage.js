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
    "Artifact type": "Artefakttyp",
    "Artifacts traced from runtime": "Von der Laufzeit aus verfolgte Artefakte",
    "Infrastructure": "Infrastruktur",
    "Cloud assets traced from runtime": "Von der Laufzeit aus verfolgte Cloud-Assets",
    "Cloud assets fully traced cloud-to-code": "Vollständig von der Cloud bis zum Code verfolgte Cloud-Assets",
    "Cloud assets lack YOR tags; manual tagging needed": "Cloud-Assets ohne YOR-Tags; manuelles Tagging erforderlich",
    "Tagging Needed": "Tagging erforderlich",
    "View Cloud assets without YOR tag": "Cloud-Assets ohne YOR-Tag anzeigen",
    "Cloud assets without YOR TAG": "Cloud-Assets ohne YOR-Tag",
    "Calculate to": "Berechnen bis",
    "Artifacts traced from source": "Von der Quelle aus verfolgte Artefakte",
    "VCS Repos lack connected pipelines to trace to build": "VCS-Repositorys ohne verbundene Pipelines zur Verfolgung bis zum Build",
    "View repositories": "Repositorys anzeigen",
    "Repos with no traced pipelines": "Repositorys ohne verfolgte Pipelines",
    "VCS Repos lack registry connection for trace to deploy": "VCS-Repositorys ohne Registry-Verbindung zur Verfolgung bis zur Bereitstellung",
    "Repos with no traced artifact registries": "Repositorys ohne verfolgte Artefakt-Registrys",
    "Build": "Build",
    "Calculate from": "Berechnen ab",
    "Cloud → Code": "Cloud → Code",
    "Code → Cloud": "Code → Cloud",
    "Container Images not traced beyond Deploy": "Container-Images nicht über die Bereitstellung hinaus verfolgt",
    "Container images lack VCS repos to trace to Code": "Container-Images ohne VCS-Repositorys zur Verfolgung bis zum Code",
    "Container images lack pipelines to trace to Build": "Container-Images ohne Pipelines zur Verfolgung bis zum Build",
    "Deployment": "Bereitstellung",
    "Flow Direction": "Flussrichtung",
    "Onboard CI/CD instances": "Onboarding für CI/CD-Instanzen durchführen",
    "Onboard Container Registries": "Onboarding für Container-Registrys durchführen",
    "Onboard VCS Organization/repo": "Onboarding für VCS-Organisation/-Repository durchführen",
    "Onboarding suggested": "Onboarding empfohlen",
    "Recommended Next Steps": "Empfohlene nächste Schritte",
    "Runtime Images not traced": "Nicht verfolgte Laufzeit-Images",
    "Runtime Images not traced beyond pipeline": "Laufzeit-Images nicht über die Pipeline hinaus verfolgt",
    "Runtime artifacts": "Laufzeitartefakte",
    "Runtime artifacts fully traced cloud-to-code": "Vollständig von der Cloud bis zum Code verfolgte Laufzeitartefakte",
    "Runtime images lack registries to trace to Deploy": "Laufzeit-Images ohne Registrys zur Verfolgung bis zur Bereitstellung",
    "Steps required to improve traceability": "Erforderliche Schritte zur Verbesserung der Rückverfolgbarkeit",
    "VM instances lack pipelines to trace to Build": "VM-Instanzen ohne Pipelines zur Verfolgung bis zum Build",
    "VM instances not traced beyond Runtime": "VM-Instanzen nicht über die Laufzeit hinaus verfolgt",
    "View Runtime Images traced only to pipeline": "Nur bis zur Pipeline verfolgte Laufzeit-Images anzeigen",
    "View Untraced Container Images": "Nicht verfolgte Container-Images anzeigen",
    "View Untraced VM Instances": "Nicht verfolgte VM-Instanzen anzeigen",
    "What is being traced": "Was wird verfolgt",
    "Untraced": "Nicht verfolgt",
    "No repositories detected": "Keine Repositorys erkannt",
    // Kept verbatim ("not transferred"). Other items use "not traced", but this one uses a
    // different word; kept as-is to exact-match the actual displayed text.
    "Cloud Assets not transferred": "Nicht übertragene Cloud-Assets",
    "IaC resource traced from code": "Vom Code aus verfolgte IaC-Ressource",
    "No runtime detected": "Keine Laufzeit erkannt",
    "No pipelines detected": "Keine Pipelines erkannt",
    "No deployment detected": "Keine Bereitstellung erkannt",
    "Artifacts transferred": "Übertragene Artefakte",
    "Artifacts not transferred": "Nicht übertragene Artefakte",
    "Repositories not transferred": "Nicht übertragene Repositorys",
    "IaC resources not transferred": "Nicht übertragene IaC-Ressourcen",
    "Repositories transferred": "Übertragene Repositorys",
    "Cloud Assets transferred": "Übertragene Cloud-Assets",
    "IaC resources transferred": "Übertragene IaC-Ressourcen",
    "IaC resources lack YOR tags to trace to runtime": "IaC-Ressourcen ohne YOR-Tags zur Verfolgung bis zur Laufzeit",
    "Tagged IaC resources lack cloud accounts for Runtime trace": "Getaggte IaC-Ressourcen ohne Cloud-Konten zur Laufzeitverfolgung",
    "View IaC resources without YOR tag": "IaC-Ressourcen ohne YOR-Tag anzeigen",
    "View untraced tagged IaC resources": "Nicht verfolgte getaggte IaC-Ressourcen anzeigen",
    "Onboard Cloud Accounts": "Onboarding für Cloud-Konten durchführen",
    // In the actual DOM, the count (e.g. "829") sits in its own highlight span,
    // and the "/ 1244" part and the label are further split into separate text
    // nodes by an Angular comment node (<!---->) in between. So this label
    // reaches the dictionary as its own isolated text node — register it as
    // an exact match rather than a fraction pattern.
    // "wo" is shorthand for "without" as displayed in the product; translated by meaning.
    "IaC resources wo YOR": "IaC-Ressourcen ohne YOR",
    "IaC resources with YOR but not traced": "IaC-Ressourcen mit YOR, aber nicht verfolgt",
  },

  patterns: [
    // The leading fraction (count) part is variable and left untranslated.
    { re: /^([\d,.]+\s*\/\s*[\d,.]+[A-Za-z]*)\s+Cloud assets fully traced cloud-to-code$/,
      tpl: "$1 Cloud-Assets vollständig von der Cloud bis zum Code verfolgt" },
    { re: /^([\d,.]+\s*\/\s*[\d,.]+[A-Za-z]*)\s+IaC resources fully traced code-to-cloud$/,
      tpl: "$1 IaC-Ressourcen vollständig vom Code bis zur Cloud verfolgt" },
    // The numerator is rendered in a separate sibling element; this text node only
    // contains the "/ 94" part, which is variable and left untranslated.
    { re: /^(\/\s*[\d,.]+[A-Za-z]*)\s+Repositories fully traced code-to-cloud$/,
      tpl: "$1 Repositorys vollständig vom Code bis zur Cloud verfolgt" },
    { re: /^(\/\s*[\d,.]+[A-Za-z]*)\s+Runtime artifacts fully traced cloud-to-code$/,
      tpl: "$1 Laufzeitartefakte vollständig von der Cloud bis zum Code verfolgt" },
    { re: /^(\/\s*[\d,.]+[A-Za-z]*)\s+IaC resources fully traced code-to-cloud$/,
      tpl: "$1 IaC-Ressourcen vollständig vom Code bis zur Cloud verfolgt" },
    { re: /^(\/\s*[\d,.]+[A-Za-z]*)\s+Cloud assets fully traced cloud-to-code$/,
      tpl: "$1 Cloud-Assets vollständig von der Cloud bis zum Code verfolgt" },
  ],

  skip: [],
};
