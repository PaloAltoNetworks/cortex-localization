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

const dictionaryKspm = {
  exact: {
    "BETA": "BETA",
    "Node selector": "Selector de nodos",
    "Type node": "Escriba el nodo",
    "Add tag...": "Agregar etiqueta...",
    "Cases opened on your K8S environment": "Casos abiertos en su entorno de K8S",
    "Cloud account": "Cuenta de nube",
    "Cluster name": "Nombre del clúster",
    "Clusters": "Clústeres",
    "Clusters Protection Coverage": "Cobertura de protección de clústeres",
    "Clusters with detected malware in one or more of their resources": "Clústeres con malware detectado en uno o más de sus recursos",
    "Clusters with the highest number of high-severity vulnerabilities ranked by CVSS score": "Clústeres con el mayor número de vulnerabilidades de gravedad alta, clasificados por puntuación CVSS",
    "Deploy": "Implementar",
    "Fully Protected": "Totalmente protegido",
    "Kubernetes Assets Overview": "Resumen de activos de Kubernetes",
    "Kubernetes Issues and Cases": "Incidencias y casos de Kubernetes",
    "Malware Detected": "Malware detectado",
    "Max CVSS": "CVSS máximo",
    "Namespaces": "Espacios de nombres",
    "No malware detected in the last scan": "No se detectó malware en el último análisis",
    "Nodes": "Nodos",
    "Open Graph": "Abrir grafo",
    "Private Encryption Key": "Clave de cifrado privada",
    "Real-time Protection": "Protección en tiempo real",
    "Secrets detected in Clusters": "Secretos detectados en clústeres",
    "Select...": "Seleccionar...",
    "Top Clusters by vulnerabilities": "Principales clústeres por vulnerabilidades",
    "Unprotected": "Sin protección",
    "Unprotected clusters": "Clústeres sin protección",
    "Vulnerabilities": "Vulnerabilidades",
    "Apply": "Aplicar",
    "Monitors workloads in real time to detect and block malicious activity, instantly preventing attacks as they happen.":
      "Supervisa las cargas de trabajo en tiempo real para detectar y bloquear la actividad maliciosa, lo que previene los ataques al instante en el momento en que se producen.",
    "Protect your Kubernetes estate with a lightweight posture management solution for continuous discovery, policy enforcement, and proactive scanning of vulnerabilities, secrets, malware, compliance, and misconfigurations.":
      "Proteja todo su entorno de Kubernetes con una solución ligera de gestión de la postura que ofrece detección continua, aplicación de políticas y análisis proactivo de vulnerabilidades, secretos, malware, cumplimiento y configuraciones incorrectas.",
    "Edit Posture management": "Editar gestión de la postura",
    "Enable failure policies to be configured and applied at runtime by the Kubernetes admission controller, ensuring API requests are blocked when the admission fails.":
      "Permita que el controlador de admisión de Kubernetes configure y aplique políticas de error en tiempo de ejecución, de modo que las solicitudes de API se bloqueen cuando falle la admisión.",
    "Enforce policies for the Kubernetes admission controller to ensure compliant resources enter the cluster.":
      "Aplique políticas para el controlador de admisión de Kubernetes a fin de garantizar que solo entren en el clúster recursos que cumplan las normas.",
    "Every": "Cada",
    "Fail": "Fallar",
    "Failure policy": "Política de error",
    "Ignore": "Ignorar",
    "Policy enforcement by the admission controller": "Aplicación de políticas por el controlador de admisión",
    "Registry scanning (OpenShift only)": "Análisis del registro (solo OpenShift)",
    "Scan cadence": "Frecuencia de análisis",
    "Scan container registry images stored in the OpenShift Container Platform registry for vulnerabilities, malware and secrets":
      "Analice las imágenes del registro de contenedores almacenadas en el registro de OpenShift Container Platform en busca de vulnerabilidades, malware y secretos",

    // --- Kubernetes assets inventory / Resource Explorer ---
    "Dive deeper into your environment": "Profundice en su entorno",
    "Select a cloud provider to enter your Kubernetes assets and their relationships, all the way down to workloads, images, and hosts.":
      "Seleccione un proveedor de nube para acceder a sus activos de Kubernetes y sus relaciones, hasta el nivel de cargas de trabajo, imágenes y hosts.",
    "Scan Method": "Método de análisis",
    "Connectivity Status": "Estado de conectividad",
    "K8s Distribution": "Distribución de K8s",
    "There’s nothing here, yet": "Aún no hay nada aquí",
    "Posture management capability is not deployed yet, resulting in limited inventory visibility":
      "La capacidad de gestión de la postura aún no se ha implementado, lo que limita la visibilidad del inventario",
    "K8s Connector Not Active": "Conector de K8s inactivo",
    "The Kubernetes Connector is not active in this cluster. Please, verify if the connector is deployed and running.":
      "El conector de Kubernetes no está activo en este clúster. Verifique si el conector está implementado y en ejecución.",
    "Last Communicated": "Última comunicación",
    "K8s Category": "Categoría de K8s",
    "Assets per Namespace": "Activos por espacio de nombres",
    "Assets per K8S Category": "Activos por categoría de K8s",
    "Resource Explorer": "Explorador de recursos",
    "Container Image Vulnerability Findings": "Hallazgos de vulnerabilidades en imágenes de contenedor",
    "Kubernetes Nodes Vulnerability Findings": "Hallazgos de vulnerabilidades en nodos de Kubernetes",
    "Total Number of Vulnerability Findings": "Número total de hallazgos de vulnerabilidades",
    "Number of Scanned Images": "Número de imágenes analizadas",
    "Top 3 Most Vulnerable Images": "Las 3 imágenes más vulnerables",
    "No Data Available": "No hay datos disponibles",
    "Number of Scanned Nodes": "Número de nodos analizados",
    "Top 3 Most Vulnerable Nodes": "Los 3 nodos más vulnerables",
    "Node Name": "Nombre del nodo",
    "Node Type": "Tipo de nodo",
    "Kubernetes clusters distribution": "Distribución de clústeres de Kubernetes",
    "Kubernetes version distribution": "Distribución de versiones de Kubernetes",
    "Healthy": "En buen estado",
    "Need update": "Requiere actualización",
    "Deploy connector": "Implementar conector",

    // --- Lowercase column headers ---
    "clusters": "clústeres",
  },

  patterns: [
    { re: /^Secrets were found in (\d+)\s+Clusters$/, tpl: "Se encontraron secretos en $1 clústeres" },
    { re: /^(\d[\d,]*)\s+Clusters$/, tpl: "$1 clústeres" },
    // "3 Healthy" / "3 Need update" (connector-health count stat tiles)
    { re: /^(\d[\d,]*)\s+Healthy$/, tpl: "$1 en buen estado" },
    { re: /^(\d[\d,]*)\s+Need update$/, tpl: "$1 requieren actualización" },
  ],

  skip: [],
};
