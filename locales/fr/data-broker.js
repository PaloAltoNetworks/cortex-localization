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

const dictionaryDataBroker = {
  exact: {
    // --- Broker VMs / Clusters tab ---
    "Add": "Ajouter",
    "Add Broker": "Ajouter un broker",
    "Add Cluster": "Ajouter un cluster",
    "Apps": "Applis",
    "Brokers": "Brokers",
    "Configuration Status": "Statut de la configuration",
    "Device Name": "Nom de l'appareil",
    "Device ID": "ID de l'appareil",
    "All interfaces": "Toutes les interfaces",
    "External Interface": "Interface externe",
    "Download": "Télécharger",
    "Generate Token": "Générer un jeton",
    "Local Agent Settings": "Paramètres de l'agent local",
    "Network Mapper": "Cartographe réseau",
    "Registry Scanner": "Scanner de registre",
    "Up to date": "À jour",
    "must be rebooted to finish installing important updates":
      "doit être redémarré pour terminer l'installation de mises à jour importantes",
    "CPU Usage": "Utilisation du CPU",
    "Disk Usage": "Utilisation du disque",
    "Memory Usage": "Utilisation de la mémoire",
    "Please change the date or filters to view results.": "Modifiez la date ou les filtres pour afficher les résultats.",
    "Done": "Terminé",
    "Generating Token...": "Génération du jeton...",
    "Notice! This token will not be accessible once you close this window":
      "Attention ! Ce jeton ne sera plus accessible une fois cette fenêtre fermée",
    "VM token": "Jeton de VM",

    // --- Add Cluster screen ---
    "Cluster Configurations": "Configurations du cluster",
    "Configure the cluster automatic upgrade settings": "Configurer les paramètres de mise à niveau automatique du cluster",
    "Define listening port and protocol for the Load Balancer Health-Check":
      "Définissez le port d'écoute et le protocole du contrôle de santé de l'équilibreur de charge",
    "Define the Load Balancer FQDN": "Définissez le FQDN de l'équilibreur de charge",
    "Define the cluster name": "Définissez le nom du cluster",
    "Load Balancer FQDN": "FQDN de l'équilibreur de charge",
    "Load Balancer Health-Check": "Contrôle de santé de l'équilibreur de charge",
    "Port": "Port",
    "Specific": "Spécifique",
    "Use Default (Enabled)": "Utiliser la valeur par défaut (activé)",
    "Auto Upgrade": "Mise à niveau automatique",
    "auto upgrade": "mise à niveau automatique",
    "protocol": "protocole",
    "schedule": "planification",
    "days in week": "jours de la semaine",

    // --- Engines tab ---
    "Create New Engine": "Créer un moteur",
    "No Results": "Aucun résultat",
    "Allow running multiple engines on the same machine": "Autoriser l'exécution de plusieurs moteurs sur la même machine",
    "Engine name": "Nom du moteur",
    "Installer Type": "Type de programme d'installation",
    "JSON formatted configuration": "Configuration au format JSON",
    "Name is required and must be unique": "Le nom est obligatoire et doit être unique",
    "Shell": "Shell",
  },

  patterns: [
    { re: /^(\d+)\s+brokers?$/, tpl: "$1 broker(s)" },
    { re: /^(\d+)\s+days? selected$/, tpl: "$1 jour(s) sélectionné(s)" },
  ],

  skip: [],
};
