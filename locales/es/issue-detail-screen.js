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

const dictionaryIssueDetailScreen = {
  exact: {
    "Affected Assets": "Activos afectados",
    "Action:": "Acción:",
    "Assignee:": "Asignado a:",
    "Cloud Configuration Issue Rule": "Regla de incidencias de configuración en la nube",
    "Cloud Configuration Layout": "Diseño de configuración en la nube",
    "Compute Policy": "Política de cómputo",
    "Copy issue URL": "Copiar URL de la incidencia",
    "Created:": "Creado:",
    "Detected (Scanned)": "Detectado (analizado)",
    "Detection Logic": "Lógica de detección",
    "Evidence": "Evidencias",
    "Issue Layout:": "Diseño de la incidencia:",
    "Linked Cases": "Casos vinculados",
    "No Changes": "Sin cambios",
    "Open in new tab": "Abrir en una pestaña nueva",
    "Press SPACE to select this row": "Pulse ESPACIO para seleccionar esta fila",
    "Resolution": "Resolución",
    "Status:": "Estado:",
    "Triggered by rule:": "Activado por la regla:",
    "Updated:": "Actualizado:",
    "War Room": "War Room",
    "Work Plan": "Plan de trabajo",

    // --- Built-in rule names (fixed catalog) ---
    "Auditd unmonitored file permission changes found":
      "Se encontraron cambios de permisos de archivos no supervisados por Auditd",
    "Auditd unmonitored kernel module loading and unloading found":
      "Se encontraron cargas y descargas de módulos del kernel no supervisadas por Auditd",
    "Auditd unmonitored network configuration changes found":
      "Se encontraron cambios de configuración de red no supervisados por Auditd",
    "Linux host with ICMP packet redirect enabled found":
      "Se encontró un host Linux con la redirección de paquetes ICMP habilitada",
    "Linux host with unrestricted default user umask found":
      "Se encontró un host Linux con un umask de usuario predeterminado sin restricciones",
    "Linux host without AIDE service found": "Se encontró un host Linux sin el servicio AIDE",
    "Minimum days between password changes is misconfigured":
      "El número mínimo de días entre cambios de contraseña está mal configurado",
  },

  patterns: [
    { re: /^Open for (\d+)\s+minutes?$/, tpl: "Abierta durante $1 minutos" },
    { re: /^Open for (\d+)\s+hours?$/, tpl: "Abierta durante $1 horas" },
    { re: /^Open for (\d+)\s+days?$/, tpl: "Abierta durante $1 días" },
  ],

  skip: [],
};
