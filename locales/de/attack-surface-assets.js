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

const dictionaryAttackSurfaceAssets = {
  exact: {
    "Affected Page": "Betroffene Seite",
    "Appears on Page": "Erscheint auf Seite",
    "HSTS": "HSTS",
    "Login": "Anmeldung",
    "No": "Nein",
    "Purpose": "Zweck",
    "Required": "Erforderlich",
    "Submit Action URL": "Aktions-URL für Übermittlung",
    "Unknown": "Unbekannt",
    "Data Type": "Datentyp",
    "ID": "ID",
    "Name": "Name",
    "Other": "Sonstiges",
    "Result": "Ergebnis",
    "Script": "Skript",
    "Secure": "Sicher",
    "Status": "Status",
    "Tags": "Tags",
    "Technologies": "Technologien",
    "Type": "Typ",
    "Version": "Version",
    "Web": "Web",
    "Asset Category": "Asset-Kategorie",
    "Asset Groups": "Asset-Gruppen",
    "Asset ID": "Asset-ID",
    "Asset Id": "Asset-ID",
    "Categories": "Kategorien",
    "Compliance": "Compliance",
    "Configurations": "Konfigurationen",
    "Configured Host": "Konfigurierter Host",
    "Contains": "Enthält",
    "Detected On": "Erkannt am",
    "Externally Detected Provider": "Extern erkannter Anbieter",
    "Exploitable": "Ausnutzbar",
    "Fail": "Nicht bestanden",
    "First Observed": "Zuerst beobachtet",
    "Geo Region for IP": "Geografische Region der IP",
    "HTML Analysis": "HTML-Analyse",
    "Hosting Services": "Hosting-Dienste",
    "Has Issue": "Hat Problem",
    "Load balancers": "Lastverteiler",
    "Most Recent Screenshot": "Neuester Screenshot",
    "Open Site in New Tab": "Website in neuem Tab öffnen",
    "Other Websites": "Weitere Websites",
    "Other Websites Owned by Your Organization Hosted on the Same IP in the Last 30 Days":
      "Weitere Websites Ihrer Organisation, die in den letzten 30 Tagen auf derselben IP gehostet wurden",
    "PaaS": "PaaS",
    "Pass": "Bestanden",
    "Port": "Port",
    "Properties": "Eigenschaften",
    "Protocol Downgrade": "Protokoll-Downgrade",
    "Redirects never downgrade from HTTPS to HTTP.": "Weiterleitungen führen nie ein Downgrade von HTTPS auf HTTP durch.",
    "Root Page HTTP Status Code": "HTTP-Statuscode der Stammseite",
    "Security Best Practice Analysis": "Analyse der Sicherheits-Best-Practice",
    "Security Best Practices Analysis": "Analyse der Sicherheits-Best-Practices",
    "Security Practice": "Sicherheitspraxis",
    "Service Name": "Dienstname",
    "Services Hosting this Website": "Dienste, die diese Website hosten",
    "Sets valid Referrer-Policy Header": "Setzt gültigen Referrer-Policy-Header",
    "Technologies Detected in the Last 10 Days": "In den letzten 10 Tagen erkannte Technologien",
    "Third Party Resources Detected in the Last 10 days": "In den letzten 10 Tagen erkannte Drittanbieterressourcen",
    "Third Party URLs": "Drittanbieter-URLs",
    "This website uses HTTPS which encrypts data in transit between browser and server.":
      "Diese Website verwendet HTTPS, wodurch Daten bei der Übertragung zwischen Browser und Server verschlüsselt werden.",
    "Website": "Website",
    "Website Details": "Website-Details",
  },

  patterns: [
    { re: /^Captured (.+) from$/, tpl: "Erfasst $1 von" },
  ],

  skip: [],
};
