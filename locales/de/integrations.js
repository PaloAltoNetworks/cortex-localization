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

const dictionaryIntegrations = {
  exact: {
    "API Keys for external threat intel": "API-Schlüssel für externe Threat Intelligence",
    "SERVICE NAME": "DIENSTNAME",
    "license key": "Lizenzschlüssel",
    "Search credential...": "Anmeldeinformationen suchen...",
    "Enter the connection details and click Verify to confirm that the S3 URI path is authorized in the gateway.":
      "Geben Sie die Verbindungsdetails ein und klicken Sie auf \"Verify\", um zu bestätigen, dass der S3-URI-Pfad im Gateway autorisiert ist.",
    "Enter the connection details and click Verify to confirm that the Queue URL path is authorized in the gateway.":
      "Geben Sie die Verbindungsdetails ein und klicken Sie auf \"Verify\", um zu bestätigen, dass der Queue-URL-Pfad im Gateway autorisiert ist.",
    "Enter the connection details and click Verify to confirm that the Splunk HTTP event collector URL path is authorized in the gateway.":
      "Geben Sie die Verbindungsdetails ein und klicken Sie auf \"Verify\", um zu bestätigen, dass der URL-Pfad des Splunk HTTP Event Collectors im Gateway autorisiert ist.",
    "Enter the connection details and click Verify to confirm that the Webhook URL path is authorized in the gateway.":
      "Geben Sie die Verbindungsdetails ein und klicken Sie auf \"Verify\", um zu bestätigen, dass der Webhook-URL-Pfad im Gateway autorisiert ist.",
    "Connect": "Verbinden",
    "Connect syslog server": "Syslog-Server verbinden",
    "Ignore certificate errors": "Zertifikatfehler ignorieren",
    "destination": "Ziel",
    "facility": "Facility",
    "DOMAIN NAMES EDL URL:": "EDL-URL FÜR DOMÄNENNAMEN:",
    "Enable External Dynamic List": "Externe dynamische Liste aktivieren",
    "Enabling External Dynamic Lists (EDL) allows integration of your defined external Domain Names and IP Addresses lists with your firewall.":
      "Durch das Aktivieren externer dynamischer Listen (EDL) können Sie Ihre definierten externen Listen mit Domänennamen und IP-Adressen in Ihre Firewall integrieren.",
    "External Dynamic List - PAN-OS": "Externe dynamische Liste – PAN-OS",
    "External Dynamic List Credentials": "Anmeldeinformationen für externe dynamische Liste",
    "For more information on how EDL integrates with Palo Alto firewalls, see":
      "Weitere Informationen zur Integration von EDL in Palo Alto-Firewalls finden Sie unter",
    "IP ADDRESSES EDL URL:": "EDL-URL FÜR IP-ADRESSEN:",
    "Using an External Dynamic List in Policy": "Verwenden einer externen dynamischen Liste in einer Richtlinie",
    "Copy API URL": "API-URL kopieren",
    "New Key": "Neuer Schlüssel",
    "User Email": "E-Mail-Adresse des Benutzers",
    "API key can be used as-is (suitable for curl).": "Der API-Schlüssel kann unverändert verwendet werden (geeignet für curl).",
    "API key must be hashed with a random arbitrary number and a timestamp (this option is suitable for proprietary scripts and intended to prevent replay attacks).":
      "Der API-Schlüssel muss mit einer beliebigen Zufallszahl und einem Zeitstempel gehasht werden (diese Option eignet sich für proprietäre Skripte und soll Replay-Angriffe verhindern).",
    "Advanced": "Erweitert",
    "CLI Tools": "CLI-Tools",
    "Components": "Komponenten",
    "Enable Expiration Date": "Ablaufdatum aktivieren",
    "Exceptions Configuration": "Konfiguration der Ausnahmen",
    "Generate": "Generieren",
    "Generate API Key": "API-Schlüssel generieren",
    "Notice!": "Achtung!",
    "This key will not be accessible once you close this window": "Auf diesen Schlüssel kann nach dem Schließen dieses Fensters nicht mehr zugegriffen werden",
    "Learn more.": "Weitere Informationen.",
    "No assets": "Keine Assets",
    "No domains": "Keine Domänen",
    "No endpoints": "Keine Endpoints",
    "Provide access to Domains to view their related Cases and Issues. Users can only view cases or issues referencing assets and endpoints within their scope.":
      "Gewähren Sie Zugriff auf Domänen, damit die zugehörigen Fälle und Probleme angezeigt werden können. Benutzer können nur Fälle oder Probleme anzeigen, die auf Assets und Endpoints innerhalb ihres Geltungsbereichs verweisen.",
    "Scope Definition": "Definition des Geltungsbereichs",
    "Scope is applied to selected features in the system. For features where scoping is not applicable, role-based access control (RBAC) is used and can be configured under Settings > Configurations > Access Management":
      "Der Geltungsbereich wird auf ausgewählte Funktionen im System angewendet. Für Funktionen, bei denen kein Geltungsbereich gilt, wird die rollenbasierte Zugriffssteuerung (RBAC) verwendet, die unter Settings > Configurations > Access Management konfiguriert werden kann",
    "Select Role": "Rolle auswählen",
    "Select date and time": "Datum und Uhrzeit auswählen",
    "After downloading the MCP file, generate a new API key": "Generieren Sie nach dem Herunterladen der MCP-Datei einen neuen API-Schlüssel",
    "Download checksum file": "Prüfsummendatei herunterladen",
    "Download the file below to set up your Cortex MCP Server.": "Laden Sie die folgende Datei herunter, um Ihren Cortex MCP Server einzurichten.",
    "MCP File": "MCP-Datei",
    "To fully set up the Cortex MCP Server, please review and follow the instructions in the":
      "Um den Cortex MCP Server vollständig einzurichten, lesen und befolgen Sie die Anweisungen in:",
    "directory service": "Verzeichnisdienst",
    "Click": "Klicken Sie auf",
    "to add directory sync tenant": "um einen Tenant für die Verzeichnissynchronisierung hinzuzufügen",
    "Create one.": "Erstellen Sie einen.",
    "New Credential": "Neue Anmeldeinformationen",
    "There are no Credential Sets to show here.": "Hier sind keine Anmeldeinformationssätze vorhanden.",
    "Credential Name": "Name der Anmeldeinformationen",
    "Name must be unique, not empty, and must not contain ()": "Der Name muss eindeutig und nicht leer sein und darf keine () enthalten",
    "Workgroup": "Arbeitsgruppe",
  },

  patterns: [
    { re: /^Showing\s+(\d+\/\d+)\s+Instances$/, tpl: "$1 Instanzen werden angezeigt" },
    { re: /^(\d+)\s+Connected$/, tpl: "$1 verbunden" },
    { re: /^(\d+)\s+Errors?$/, tpl: "$1 Fehler" },
  ],

  skip: [],
};
