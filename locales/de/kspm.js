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
    "Node selector": "Knotenselektor",
    "Type node": "Knoten eingeben",
    "Add tag...": "Tag hinzufügen...",
    "Cases opened on your K8S environment": "In Ihrer K8S-Umgebung eröffnete Fälle",
    "Cloud account": "Cloud-Konto",
    "Cluster name": "Clustername",
    "Clusters": "Cluster (gesamt)",
    "Clusters Protection Coverage": "Schutzabdeckung der Cluster",
    "Clusters with detected malware in one or more of their resources": "Cluster, in deren Ressourcen Malware erkannt wurde",
    "Clusters with the highest number of high-severity vulnerabilities ranked by CVSS score": "Cluster mit den meisten Schwachstellen mit hohem Schweregrad, sortiert nach CVSS-Score",
    "Deploy": "Bereitstellen",
    "Fully Protected": "Vollständig geschützt",
    "Kubernetes Assets Overview": "Übersicht der Kubernetes-Assets",
    "Kubernetes Issues and Cases": "Kubernetes-Probleme und -Fälle",
    "Malware Detected": "Malware erkannt",
    "Max CVSS": "Max. CVSS",
    "Namespaces": "Namespaces",
    "No malware detected in the last scan": "Beim letzten Scan wurde keine Malware erkannt",
    "Nodes": "Knoten",
    "Open Graph": "Graph öffnen",
    "Private Encryption Key": "Privater Verschlüsselungsschlüssel",
    "Real-time Protection": "Echtzeitschutz",
    "Secrets detected in Clusters": "In Clustern erkannte Secrets",
    "Select...": "Auswählen...",
    "Top Clusters by vulnerabilities": "Top-Cluster nach Schwachstellen",
    "Unprotected": "Ungeschützt",
    "Unprotected clusters": "Ungeschützte Cluster",
    "Vulnerabilities": "Schwachstellen",
    "Apply": "Anwenden",
    "Monitors workloads in real time to detect and block malicious activity, instantly preventing attacks as they happen.":
      "Überwacht Workloads in Echtzeit, um bösartige Aktivitäten zu erkennen und zu blockieren, und verhindert Angriffe sofort, während sie stattfinden.",
    "Protect your Kubernetes estate with a lightweight posture management solution for continuous discovery, policy enforcement, and proactive scanning of vulnerabilities, secrets, malware, compliance, and misconfigurations.":
      "Schützen Sie Ihre gesamte Kubernetes-Umgebung mit einer schlanken Lösung zur Verwaltung der Sicherheitslage für kontinuierliche Erkennung, Richtliniendurchsetzung und proaktives Scannen auf Schwachstellen, Secrets, Malware, Compliance und Fehlkonfigurationen.",
    "Edit Posture management": "Verwaltung der Sicherheitslage bearbeiten",
    "Enable failure policies to be configured and applied at runtime by the Kubernetes admission controller, ensuring API requests are blocked when the admission fails.":
      "Ermöglicht die Konfiguration von Fehlerrichtlinien, die vom Kubernetes Admission Controller zur Laufzeit angewendet werden, sodass API-Anfragen blockiert werden, wenn die Zulassung fehlschlägt.",
    "Enforce policies for the Kubernetes admission controller to ensure compliant resources enter the cluster.":
      "Richtlinien für den Kubernetes Admission Controller durchsetzen, damit nur konforme Ressourcen in den Cluster gelangen.",
    "Every": "Alle",
    "Fail": "Fehlschlagen",
    "Failure policy": "Fehlerrichtlinie",
    "Ignore": "Ignorieren",
    "Policy enforcement by the admission controller": "Richtliniendurchsetzung durch den Admission Controller",
    "Registry scanning (OpenShift only)": "Registry-Scan (nur OpenShift)",
    "Scan cadence": "Scan-Intervall",
    "Scan container registry images stored in the OpenShift Container Platform registry for vulnerabilities, malware and secrets":
      "Container-Registry-Images in der OpenShift Container Platform-Registry auf Schwachstellen, Malware und Secrets scannen",

    // --- Kubernetes assets inventory / Resource Explorer ---
    "Dive deeper into your environment": "Tauchen Sie tiefer in Ihre Umgebung ein",
    "Select a cloud provider to enter your Kubernetes assets and their relationships, all the way down to workloads, images, and hosts.":
      "Wählen Sie einen Cloud-Anbieter aus, um Ihre Kubernetes-Assets und deren Beziehungen bis hinunter zu Workloads, Images und Hosts zu erkunden.",
    "Scan Method": "Scan-Methode",
    "Connectivity Status": "Verbindungsstatus",
    "K8s Distribution": "K8s-Distribution",
    "There’s nothing here, yet": "Hier ist noch nichts vorhanden",
    "Posture management capability is not deployed yet, resulting in limited inventory visibility":
      "Die Funktion zur Verwaltung der Sicherheitslage ist noch nicht bereitgestellt, daher ist die Sichtbarkeit des Inventars eingeschränkt",
    "K8s Connector Not Active": "K8s-Connector nicht aktiv",
    "The Kubernetes Connector is not active in this cluster. Please, verify if the connector is deployed and running.":
      "Der Kubernetes Connector ist in diesem Cluster nicht aktiv. Bitte überprüfen Sie, ob der Connector bereitgestellt ist und ausgeführt wird.",
    "Last Communicated": "Letzte Kommunikation",
    "K8s Category": "K8s-Kategorie",
    "Assets per Namespace": "Assets pro Namespace",
    "Assets per K8S Category": "Assets pro K8S-Kategorie",
    "Resource Explorer": "Ressourcen-Explorer",
    "Container Image Vulnerability Findings": "Schwachstellenbefunde für Container-Images",
    "Kubernetes Nodes Vulnerability Findings": "Schwachstellenbefunde für Kubernetes-Knoten",
    "Total Number of Vulnerability Findings": "Gesamtzahl der Schwachstellenbefunde",
    "Number of Scanned Images": "Anzahl gescannter Images",
    "Top 3 Most Vulnerable Images": "Top 3 der anfälligsten Images",
    "No Data Available": "Keine Daten verfügbar",
    "Number of Scanned Nodes": "Anzahl gescannter Knoten",
    "Top 3 Most Vulnerable Nodes": "Top 3 der anfälligsten Knoten",
    "Node Name": "Knotenname",
    "Node Type": "Knotentyp",
    "Kubernetes clusters distribution": "Verteilung der Kubernetes-Cluster",
    "Kubernetes version distribution": "Verteilung der Kubernetes-Versionen",
    "Healthy": "Fehlerfrei",
    "Need update": "Aktualisierung erforderlich",
    "Deploy connector": "Connector bereitstellen",

    // --- Lowercase column headers ---
    "clusters": "Kubernetes-Cluster",
  },

  patterns: [
    { re: /^Secrets were found in (\d+)\s+Clusters$/, tpl: "In $1 Clustern wurden Secrets gefunden" },
    { re: /^(\d[\d,]*)\s+Clusters$/, tpl: "$1 Cluster" },
    // "3 Healthy" / "3 Need update" (connector-health count stat tiles)
    { re: /^(\d[\d,]*)\s+Healthy$/, tpl: "$1 fehlerfrei" },
    { re: /^(\d[\d,]*)\s+Need update$/, tpl: "$1 mit Aktualisierungsbedarf" },
  ],

  skip: [],
};
