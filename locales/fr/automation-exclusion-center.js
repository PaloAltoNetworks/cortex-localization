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
    "Exclude": "Exclure",
    "List:": "Liste :",
    "Allow Override Policy": "Autoriser la politique de remplacement",
    "Domain Blocking": "Blocage de domaines",
    "EndPoint Isolation": "Isolement de l'endpoint",
    "IP Blocking": "Blocage d'IP",
    "Quarantine File": "Mettre le fichier en quarantaine",
    "User Hard Remediation": "Correction stricte de l'utilisateur",
    "User Soft Remediation": "Correction souple de l'utilisateur",
    "Excludes trusted or critical IPs and networks from automated IP blocking. Supports both full IPs and CIDR ranges.":
      "Exclut les IP et réseaux de confiance ou critiques du blocage automatisé des IP. Prend en charge les adresses IP complètes et les plages CIDR.",
    "Excludes trusted or critical domains from automated domain blockage.":
      "Exclut les domaines de confiance ou critiques du blocage automatisé des domaines.",
    "Excludes trusted or critical files from automated file quarantine actions. Specify full path and hash for accuracy.":
      "Exclut les fichiers de confiance ou critiques des actions automatisées de mise en quarantaine de fichiers. Indiquez le chemin complet et le hachage pour plus de précision.",
    "Excludes trusted or critical machines from automated endpoint isolation.":
      "Exclut les machines de confiance ou critiques de l'isolement automatisé des endpoints.",
    "Excludes trusted or critical users from being blocked through hard remediation. Hard remediation requires an admin to restore user access.":
      "Exclut les utilisateurs de confiance ou critiques du blocage par correction stricte. La correction stricte nécessite l'intervention d'un administrateur pour rétablir l'accès de l'utilisateur.",
    "Excludes trusted or critical users from being blocked through soft remediation. Soft remediation allows users to regain access through steps such as two factor authentication.":
      "Exclut les utilisateurs de confiance ou critiques du blocage par correction souple. La correction souple permet aux utilisateurs de récupérer leur accès via des étapes telles que l'authentification à deux facteurs.",
  },

  patterns: [],

  skip: [],
};
