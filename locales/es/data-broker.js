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
    "Add": "Agregar",
    "Add Broker": "Agregar broker",
    "Add Cluster": "Agregar clúster",
    "Apps": "Aplicaciones",
    "Brokers": "Brokers",
    "Configuration Status": "Estado de la configuración",
    "Device Name": "Nombre del dispositivo",
    "Device ID": "ID del dispositivo",
    "All interfaces": "Todas las interfaces",
    "External Interface": "Interfaz externa",
    "Download": "Descargar",
    "Generate Token": "Generar token",
    "Local Agent Settings": "Configuración del agente local",
    "Network Mapper": "Asignador de red",
    "Registry Scanner": "Escáner de registros",
    "Up to date": "Actualizado",
    "must be rebooted to finish installing important updates":
      "debe reiniciarse para terminar de instalar actualizaciones importantes",
    "CPU Usage": "Uso de CPU",
    "Disk Usage": "Uso de disco",
    "Memory Usage": "Uso de memoria",
    "Please change the date or filters to view results.": "Cambie la fecha o los filtros para ver los resultados.",
    "Done": "Listo",
    "Generating Token...": "Generando token...",
    "Notice! This token will not be accessible once you close this window":
      "¡Atención! No podrá acceder a este token una vez que cierre esta ventana",
    "VM token": "Token de VM",

    // --- Add Cluster screen ---
    "Cluster Configurations": "Configuraciones del clúster",
    "Configure the cluster automatic upgrade settings": "Configure los ajustes de actualización automática del clúster",
    "Define listening port and protocol for the Load Balancer Health-Check":
      "Defina el puerto de escucha y el protocolo para la comprobación de estado del equilibrador de carga",
    "Define the Load Balancer FQDN": "Defina el FQDN del equilibrador de carga",
    "Define the cluster name": "Defina el nombre del clúster",
    "Load Balancer FQDN": "FQDN del equilibrador de carga",
    "Load Balancer Health-Check": "Comprobación de estado del equilibrador de carga",
    "Port": "Puerto",
    "Specific": "Específico",
    "Use Default (Enabled)": "Usar predeterminado (habilitado)",
    "Auto Upgrade": "Actualización automática",
    "auto upgrade": "actualización automática",
    "protocol": "protocolo",
    "schedule": "programación",
    "days in week": "días de la semana",

    // --- Engines tab ---
    "Create New Engine": "Crear nuevo motor",
    "No Results": "No hay resultados",
    "Allow running multiple engines on the same machine": "Permitir ejecutar varios motores en la misma máquina",
    "Engine name": "Nombre del motor",
    "Installer Type": "Tipo de instalador",
    "JSON formatted configuration": "Configuración en formato JSON",
    "Name is required and must be unique": "El nombre es obligatorio y debe ser único",
    "Shell": "Shell",
  },

  patterns: [
    { re: /^(\d+)\s+brokers?$/, tpl: "$1 brokers" },
    { re: /^(\d+)\s+days? selected$/, tpl: "$1 días seleccionados" },
  ],

  skip: [],
};
