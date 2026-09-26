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
    "BETA": "BÊTA",
    "Node selector": "Sélecteur de nœuds",
    "Type node": "Saisir le nœud",
    "Add tag...": "Ajouter une étiquette...",
    "Cases opened on your K8S environment": "Cas ouverts dans votre environnement K8S",
    "Cloud account": "Compte cloud",
    "Cluster name": "Nom du cluster",
    "Clusters": "Clusters",
    "Clusters Protection Coverage": "Couverture de protection des clusters",
    "Clusters with detected malware in one or more of their resources": "Clusters dont une ou plusieurs ressources contiennent des logiciels malveillants détectés",
    "Clusters with the highest number of high-severity vulnerabilities ranked by CVSS score": "Clusters présentant le plus grand nombre de vulnérabilités de gravité élevée, classés par score CVSS",
    "Deploy": "Déployer",
    "Fully Protected": "Entièrement protégé",
    "Kubernetes Assets Overview": "Vue d'ensemble des actifs Kubernetes",
    "Kubernetes Issues and Cases": "Problèmes et cas Kubernetes",
    "Malware Detected": "Logiciel malveillant détecté",
    "Max CVSS": "CVSS max.",
    "Namespaces": "Espaces de noms",
    "No malware detected in the last scan": "Aucun logiciel malveillant détecté lors de la dernière analyse",
    "Nodes": "Nœuds",
    "Open Graph": "Ouvrir le graphe",
    "Private Encryption Key": "Clé de chiffrement privée",
    "Real-time Protection": "Protection en temps réel",
    "Secrets detected in Clusters": "Secrets détectés dans les clusters",
    "Select...": "Sélectionner...",
    "Top Clusters by vulnerabilities": "Principaux clusters par vulnérabilités",
    "Unprotected": "Non protégé",
    "Unprotected clusters": "Clusters non protégés",
    "Vulnerabilities": "Vulnérabilités",
    "Apply": "Appliquer",
    "Monitors workloads in real time to detect and block malicious activity, instantly preventing attacks as they happen.":
      "Surveille les charges de travail en temps réel pour détecter et bloquer les activités malveillantes, en empêchant instantanément les attaques au moment où elles se produisent.",
    "Protect your Kubernetes estate with a lightweight posture management solution for continuous discovery, policy enforcement, and proactive scanning of vulnerabilities, secrets, malware, compliance, and misconfigurations.":
      "Protégez votre parc Kubernetes grâce à une solution légère de gestion de la posture offrant la découverte continue, l'application des politiques et l'analyse proactive des vulnérabilités, secrets, logiciels malveillants, problèmes de conformité et mauvaises configurations.",
    "Edit Posture management": "Modifier la gestion de la posture",
    "Enable failure policies to be configured and applied at runtime by the Kubernetes admission controller, ensuring API requests are blocked when the admission fails.":
      "Permet de configurer des politiques d'échec et de les appliquer à l'exécution par le contrôleur d'admission Kubernetes, afin que les requêtes API soient bloquées en cas d'échec de l'admission.",
    "Enforce policies for the Kubernetes admission controller to ensure compliant resources enter the cluster.":
      "Appliquez des politiques au contrôleur d'admission Kubernetes afin que seules des ressources conformes entrent dans le cluster.",
    "Every": "Toutes les",
    "Fail": "Échouer",
    "Failure policy": "Politique d'échec",
    "Ignore": "Ignorer",
    "Policy enforcement by the admission controller": "Application des politiques par le contrôleur d'admission",
    "Registry scanning (OpenShift only)": "Analyse de registre (OpenShift uniquement)",
    "Scan cadence": "Fréquence d'analyse",
    "Scan container registry images stored in the OpenShift Container Platform registry for vulnerabilities, malware and secrets":
      "Analysez les images stockées dans le registre OpenShift Container Platform à la recherche de vulnérabilités, de logiciels malveillants et de secrets",

    // --- Kubernetes assets inventory / Resource Explorer ---
    "Dive deeper into your environment": "Explorez votre environnement en profondeur",
    "Select a cloud provider to enter your Kubernetes assets and their relationships, all the way down to workloads, images, and hosts.":
      "Sélectionnez un fournisseur cloud pour explorer vos actifs Kubernetes et leurs relations, jusqu'aux charges de travail, images et hôtes.",
    "Scan Method": "Méthode d'analyse",
    "Connectivity Status": "Statut de connectivité",
    "K8s Distribution": "Distribution K8s",
    "There’s nothing here, yet": "Il n'y a rien ici pour le moment",
    "Posture management capability is not deployed yet, resulting in limited inventory visibility":
      "La fonctionnalité de gestion de la posture n'est pas encore déployée, ce qui limite la visibilité de l'inventaire",
    "K8s Connector Not Active": "Connecteur K8s inactif",
    "The Kubernetes Connector is not active in this cluster. Please, verify if the connector is deployed and running.":
      "Le connecteur Kubernetes n'est pas actif dans ce cluster. Vérifiez que le connecteur est déployé et en cours d'exécution.",
    "Last Communicated": "Dernière communication",
    "K8s Category": "Catégorie K8s",
    "Assets per Namespace": "Actifs par espace de noms",
    "Assets per K8S Category": "Actifs par catégorie K8S",
    "Resource Explorer": "Explorateur de ressources",
    "Container Image Vulnerability Findings": "Constats de vulnérabilités des images de conteneur",
    "Kubernetes Nodes Vulnerability Findings": "Constats de vulnérabilités des nœuds Kubernetes",
    "Total Number of Vulnerability Findings": "Nombre total de constats de vulnérabilités",
    "Number of Scanned Images": "Nombre d'images analysées",
    "Top 3 Most Vulnerable Images": "Top 3 des images les plus vulnérables",
    "No Data Available": "Aucune donnée disponible",
    "Number of Scanned Nodes": "Nombre de nœuds analysés",
    "Top 3 Most Vulnerable Nodes": "Top 3 des nœuds les plus vulnérables",
    "Node Name": "Nom du nœud",
    "Node Type": "Type de nœud",
    "Kubernetes clusters distribution": "Répartition des clusters Kubernetes",
    "Kubernetes version distribution": "Répartition des versions de Kubernetes",
    "Healthy": "Sain",
    "Need update": "Mise à jour requise",
    "Deploy connector": "Déployer le connecteur",

    // --- Lowercase column headers ---
    "clusters": "clusters",
  },

  patterns: [
    { re: /^Secrets were found in (\d+)\s+Clusters$/, tpl: "Des secrets ont été trouvés dans $1 clusters" },
    { re: /^(\d[\d,]*)\s+Clusters$/, tpl: "$1 clusters" },
    // "3 Healthy" / "3 Need update" (connector-health count stat tiles)
    { re: /^(\d[\d,]*)\s+Healthy$/, tpl: "$1 sains" },
    { re: /^(\d[\d,]*)\s+Need update$/, tpl: "$1 à mettre à jour" },
  ],

  skip: [],
};
