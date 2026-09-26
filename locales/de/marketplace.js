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

const dictionaryMarketplace = {
  exact: {
    "Installed Content Packs": "Installierte Content Packs",
    "Show": "Anzeigen",
    "All Packs": "Alle Packs",
    "Notifications active": "Benachrichtigungen aktiv",
    "Update to 1.1.6": "Auf 1.1.6 aktualisieren",
    "Content": "Inhalt",
    "Dependencies": "Abhängigkeiten",
    "Version History": "Versionsverlauf",
    "Show Deprecated Content": "Veraltete Inhalte anzeigen",
    "INFO": "INFO",
    "Last installed": "Zuletzt installiert",
    "Installed version": "Installierte Version",
    "Certification": "Zertifizierung",
    "Certified": "Zertifiziert",
    "Supported by": "Unterstützt von",
    "Go to": "Gehe zu",
    "Content Pack support site": "Supportseite des Content Packs",
    "First Created": "Erstmals erstellt",
    "Last Release": "Letzte Veröffentlichung",
    "Free Enricher": "Kostenloser Enricher",
    "WORKS WITH THE FOLLOWING INTEGRATIONS:": "FUNKTIONIERT MIT DEN FOLGENDEN INTEGRATIONEN:",
    "DISCLAIMER": "HAFTUNGSAUSSCHLUSS",
    "Content packs are licensed by the Publisher identified above and subject to the Publisher’s own":
      "Content Packs werden vom oben genannten Herausgeber lizenziert und unterliegen dessen eigenen",
    "licensing terms": "Lizenzbedingungen",
    "Marketplace documentation": "Marketplace-Dokumentation",
    "Cart": "Warenkorb",
    "Your cart is empty": "Ihr Warenkorb ist leer",
    "Go shopping": "Weiter einkaufen",
    "Categories": "Kategorien",
    "Filter by:": "Filtern nach:",
    "Search in": "Suchen in",
    "Sort by": "Sortieren nach",
    "See all": "Alle anzeigen",
    "See more": "Mehr anzeigen",
    "Show installed": "Installierte anzeigen",
    "Content Pack includes": "Das Content Pack enthält",
    "Content Packs": "Content Packs",
    "Getting Started": "Erste Schritte",
    "Partner Spotlight": "Partner im Fokus",
    "Partners": "Partner",
    "Published By": "Veröffentlicht von",
    "Types": "Typen",
    "Use Cases": "Anwendungsfälle",
    "Alerts": "Warnungen",
    "Analytics & SIEM": "Analysen und SIEM",
    "Asset Management": "Asset-Verwaltung",
    "Attack": "Angriff",
    "Breach": "Sicherheitsverletzung",
    "Breach Notification": "Benachrichtigung über Sicherheitsverletzungen",
    "Classifiers": "Klassifizierer",
    "Code Repositories": "Code-Repositorys",
    "Collection": "Sammlung",
    "Dark Web": "Dark Web",
    "Data Model Rules": "Datenmodellregeln",
    "Identity And Access Management": "Identitäts- und Zugriffsverwaltung",
    "Incident Response": "Reaktion auf Vorfälle",
    "Extracts text from images.": "Extrahiert Text aus Bildern.",
    "Show Commands": "Befehle anzeigen",
    "The following packs have updates:": "Für die folgenden Packs sind Updates verfügbar:",
  },

  patterns: [
    { re: /^Content Packs Library\s+(\(\d+\))$/, tpl: "Content Pack-Bibliothek $1" },
    { re: /^(\d+)\s+Scripts?$/, tpl: "$1 Skripte" },
    { re: /^(\d+)\s+Integrations?$/, tpl: "$1 Integrationen" },
    { re: /^(\d+)\s+updates?\s+available$/, tpl: "$1 Updates verfügbar" },
  ],

  skip: [],
};
