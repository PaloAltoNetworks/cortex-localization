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
    "Add": "Hinzufügen",
    "Add Broker": "Broker hinzufügen",
    "Add Cluster": "Cluster hinzufügen",
    "Apps": "Apps",
    "Brokers": "Broker",
    "Configuration Status": "Konfigurationsstatus",
    "Device Name": "Gerätename",
    "Device ID": "Geräte-ID",
    "All interfaces": "Alle Schnittstellen",
    "External Interface": "Externe Schnittstelle",
    "Download": "Herunterladen",
    "Generate Token": "Token generieren",
    "Local Agent Settings": "Lokale Agent-Einstellungen",
    "Network Mapper": "Netzwerk-Mapper",
    "Registry Scanner": "Registry-Scanner",
    "Up to date": "Auf dem neuesten Stand",
    "must be rebooted to finish installing important updates":
      "muss neu gestartet werden, um die Installation wichtiger Updates abzuschließen",
    "CPU Usage": "CPU-Auslastung",
    "Disk Usage": "Datenträgerauslastung",
    "Memory Usage": "Speicherauslastung",
    "Please change the date or filters to view results.": "Ändern Sie das Datum oder die Filter, um Ergebnisse anzuzeigen.",
    "Done": "Fertig",
    "Generating Token...": "Token wird generiert...",
    "Notice! This token will not be accessible once you close this window":
      "Achtung! Auf dieses Token kann nach dem Schließen dieses Fensters nicht mehr zugegriffen werden",
    "VM token": "VM-Token",

    // --- Add Cluster screen ---
    "Cluster Configurations": "Cluster-Konfigurationen",
    "Configure the cluster automatic upgrade settings": "Einstellungen für automatische Cluster-Upgrades konfigurieren",
    "Define listening port and protocol for the Load Balancer Health-Check":
      "Definieren Sie Überwachungsport und Protokoll für die Integritätsprüfung des Load Balancers",
    "Define the Load Balancer FQDN": "Definieren Sie den FQDN des Load Balancers",
    "Define the cluster name": "Definieren Sie den Clusternamen",
    "Load Balancer FQDN": "FQDN des Load Balancers",
    "Load Balancer Health-Check": "Integritätsprüfung des Load Balancers",
    "Port": "Port",
    "Specific": "Spezifisch",
    "Use Default (Enabled)": "Standard verwenden (aktiviert)",
    "Auto Upgrade": "Automatisches Upgrade",
    "auto upgrade": "Automatisches Upgrade",
    "protocol": "Protokoll",
    "schedule": "Zeitplan",
    "days in week": "Wochentage",

    // --- Engines tab ---
    "Create New Engine": "Neue Engine erstellen",
    "No Results": "Keine Ergebnisse",
    "Allow running multiple engines on the same machine": "Ausführung mehrerer Engines auf demselben Computer zulassen",
    "Engine name": "Engine-Name",
    "Installer Type": "Installationsprogrammtyp",
    "JSON formatted configuration": "Konfiguration im JSON-Format",
    "Name is required and must be unique": "Der Name ist erforderlich und muss eindeutig sein",
    "Shell": "Shell",
  },

  patterns: [
    { re: /^(\d+)\s+brokers?$/, tpl: "$1 Broker" },
    { re: /^(\d+)\s+days? selected$/, tpl: "$1 Tag(e) ausgewählt" },
  ],

  skip: [],
};
