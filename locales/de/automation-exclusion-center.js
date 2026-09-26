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
    "Exclude": "Ausschließen",
    "List:": "Liste:",
    "Allow Override Policy": "Überschreibungsrichtlinie zulassen",
    "Domain Blocking": "Domänenblockierung",
    "EndPoint Isolation": "Endpoint-Isolierung",
    "IP Blocking": "IP-Blockierung",
    "Quarantine File": "Datei in Quarantäne verschieben",
    "User Hard Remediation": "Harte Benutzerbehebung",
    "User Soft Remediation": "Weiche Benutzerbehebung",
    "Excludes trusted or critical IPs and networks from automated IP blocking. Supports both full IPs and CIDR ranges.":
      "Schließt vertrauenswürdige oder kritische IPs und Netzwerke von der automatisierten IP-Blockierung aus. Unterstützt sowohl vollständige IPs als auch CIDR-Bereiche.",
    "Excludes trusted or critical domains from automated domain blockage.":
      "Schließt vertrauenswürdige oder kritische Domänen von der automatisierten Domänenblockierung aus.",
    "Excludes trusted or critical files from automated file quarantine actions. Specify full path and hash for accuracy.":
      "Schließt vertrauenswürdige oder kritische Dateien von automatisierten Quarantäneaktionen aus. Geben Sie für eine genaue Zuordnung den vollständigen Pfad und Hash an.",
    "Excludes trusted or critical machines from automated endpoint isolation.":
      "Schließt vertrauenswürdige oder kritische Rechner von der automatisierten Endpoint-Isolierung aus.",
    "Excludes trusted or critical users from being blocked through hard remediation. Hard remediation requires an admin to restore user access.":
      "Schließt vertrauenswürdige oder kritische Benutzer von der Blockierung durch harte Behebung aus. Bei harter Behebung muss ein Administrator den Benutzerzugriff wiederherstellen.",
    "Excludes trusted or critical users from being blocked through soft remediation. Soft remediation allows users to regain access through steps such as two factor authentication.":
      "Schließt vertrauenswürdige oder kritische Benutzer von der Blockierung durch weiche Behebung aus. Bei weicher Behebung können Benutzer den Zugriff über Schritte wie die Zwei-Faktor-Authentifizierung wiedererlangen.",
  },

  patterns: [],

  skip: [],
};
