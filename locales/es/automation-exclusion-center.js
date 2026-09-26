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

const dictionaryAutomationExclusionCenter = {
  exact: {
    "Exclude": "Excluir",
    "List:": "Lista:",
    "Allow Override Policy": "Permitir política de anulación",
    "Domain Blocking": "Bloqueo de dominios",
    "EndPoint Isolation": "Aislamiento de endpoints",
    "IP Blocking": "Bloqueo de IP",
    "Quarantine File": "Poner archivo en cuarentena",
    "User Hard Remediation": "Corrección estricta de usuarios",
    "User Soft Remediation": "Corrección flexible de usuarios",
    "Excludes trusted or critical IPs and networks from automated IP blocking. Supports both full IPs and CIDR ranges.":
      "Excluye las IP y redes de confianza o críticas del bloqueo automatizado de IP. Admite tanto IP completas como rangos CIDR.",
    "Excludes trusted or critical domains from automated domain blockage.":
      "Excluye los dominios de confianza o críticos del bloqueo automatizado de dominios.",
    "Excludes trusted or critical files from automated file quarantine actions. Specify full path and hash for accuracy.":
      "Excluye los archivos de confianza o críticos de las acciones automatizadas de cuarentena de archivos. Especifique la ruta completa y el hash para mayor precisión.",
    "Excludes trusted or critical machines from automated endpoint isolation.":
      "Excluye los equipos de confianza o críticos del aislamiento automatizado de endpoints.",
    "Excludes trusted or critical users from being blocked through hard remediation. Hard remediation requires an admin to restore user access.":
      "Evita que los usuarios de confianza o críticos se bloqueen mediante la corrección estricta. La corrección estricta requiere que un administrador restaure el acceso del usuario.",
    "Excludes trusted or critical users from being blocked through soft remediation. Soft remediation allows users to regain access through steps such as two factor authentication.":
      "Evita que los usuarios de confianza o críticos se bloqueen mediante la corrección flexible. La corrección flexible permite a los usuarios recuperar el acceso mediante pasos como la autenticación de dos factores.",
  },

  patterns: [],

  skip: [],
};
