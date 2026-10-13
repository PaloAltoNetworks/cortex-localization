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

const dictionaryIdentitySecurity = {
  exact: {
    "Administrative": "Administrativ",
    "Identity Overview": "Identitätsübersicht",
    "Identity Asset Inventory": "Identitäts-Asset-Inventar",
    "Cloud Unified Human Identities": "Vereinheitlichte menschliche Cloud-Identitäten",
    "Empty Groups": "Leere Gruppen",
    "Cloud Groups": "Cloud-Gruppen",
    "SaaS Groups": "SaaS-Gruppen",
    "On-Premises Groups": "On-Premises-Gruppen",
    "On premises Unified Human Identities": "Vereinheitlichte menschliche On-Premises-Identitäten",
    "Secrets": "Secrets",
    "MFA Disabled": "MFA deaktiviert",
    "SaaS Unified Human Identities": "Vereinheitlichte menschliche SaaS-Identitäten",
    "SaaS Human Identities": "Menschliche SaaS-Identitäten",
    "On-premises Human Identities": "Menschliche On-Premises-Identitäten",
    "Weak Passwords": "Schwache Kennwörter",
    "Team Membership": "Teammitgliedschaft",
    "Who does it grant access to?": "Wem gewährt sie Zugriff?",
    "Last Commit": "Letzter Commit",
    "This widget show the riskiest identities with the highest score combination of risks. Fixing such identity will improve the overall score.":
      "Dieses Widget zeigt die riskantesten Identitäten mit der höchsten kombinierten Risikobewertung. Durch die Korrektur dieser Identitäten verbessert sich die Gesamtbewertung.",
    "In this widget, you can find information about your Admin Identities. We identify identity as admin if it meets the following criteria:":
      "In diesem Widget finden Sie Informationen zu Ihren Administratoridentitäten. Eine Identität wird als Administrator eingestuft, wenn sie die folgenden Kriterien erfüllt:",
    "• Has one of the Built-in Admin policies": "• Verfügt über eine der integrierten Administratorrichtlinien",
    "• Has custom policies with administrative permissions": "• Verfügt über benutzerdefinierte Richtlinien mit Administratorberechtigungen",
    "In addition to the access, we take into consideration the level on which this access was granted for the identity":
      "Zusätzlich zum Zugriff berücksichtigen wir, auf welcher Ebene dieser Zugriff der Identität gewährt wurde",
    "This widget provides an overview of your assets at risk and enables you to quickly and easily identify the riskiest identity asset categories, helping you prioritize and address the most critical security vulnerabilities first.":
      "Dieses Widget bietet einen Überblick über Ihre gefährdeten Assets und ermöglicht es Ihnen, die riskantesten Identitäts-Asset-Kategorien schnell und einfach zu identifizieren. So können Sie die kritischsten Sicherheitsschwachstellen priorisieren und zuerst beheben.",
    "Admins Only": "Nur Administratoren",
    "Admins Summary": "Administratorübersicht",
    "AWS IAM Role": "AWS IAM-Rolle",
    "AWS IAM Role has role chaining permissions to admin":
      "AWS IAM-Rolle verfügt über Rollenverkettungsberechtigungen zum Administrator",
    "Config": "Konfig.",
    "Got even more time?": "Haben Sie noch mehr Zeit?",
    "Human Identities": "Menschliche Identitäten",
    "IAM Identity Asset Inventory": "IAM-Identitäts-Asset-Inventar",
    "Identities with excessive policies": "Identitäten mit übermäßigen Richtlinien",
    "Identities with unused permissions": "Identitäten mit ungenutzten Berechtigungen",
    "Identity Security Findings": "Befunde zur Identitätssicherheit",
    "Inactive identities": "Inaktive Identitäten",
    "List": "Liste",
    "Management Group": "Verwaltungsgruppe",
    "Non-Human Identities": "Nicht-menschliche Identitäten",
    "Number of admins from total number of Identities": "Anzahl der Administratoren an der Gesamtzahl der Identitäten",
    "Policies": "Richtlinien",
    "Read": "Lesen",
    "Resource": "Ressource",
    "Resource Group": "Ressourcengruppe",
    "Risk Assessments": "Risikobewertungen",
    "Show all issues >": "Alle Probleme anzeigen >",
    "Subscription": "Abonnement",
    "Top Critical Issues to Address": "Wichtigste zu behebende kritische Probleme",
    "Top Identities at Risk": "Am stärksten gefährdete Identitäten",
    "Top Issues to improve your Identity Security": "Wichtigste Probleme zur Verbesserung Ihrer Identitätssicherheit",
    "Unified Human Identities": "Vereinheitlichte menschliche Identitäten",
    "View policies": "Richtlinien anzeigen",
    "We’ve identified the most pressing vulnerabilities to help secure your identity.":
      "Wir haben die dringendsten Schwachstellen identifiziert, um Ihre Identität besser abzusichern.",
    "Write": "Schreiben",
      // Widgets on the identity/user detail drill-down page.
    "Case Breakdown": "Fallaufschlüsselung",
    "Total open cases within the selected timeframe": "Gesamtzahl offener Fälle im ausgewählten Zeitraum",
    "Risk Score Trend": "Trend der Risikobewertung",
    "There is no data to display at this time.": "Derzeit sind keine Daten zum Anzeigen vorhanden.",
    "Points Added": "Hinzugefügte Punkte",
    "View User Details": "Benutzerdetails anzeigen",
    "View in XQL": "In XQL anzeigen",
    "Authentication Attempts": "Authentifizierungsversuche",
    "Failed Logins": "Fehlgeschlagene Anmeldungen",
    "Risk Assessment": "Risikobewertung",
    "Common User Locations": "Gängige Benutzerstandorte",
    "Common Operating Systems": "Gängige Betriebssysteme",
    "Activity Timeline": "Aktivitätszeitachse",
    "Issues & Insights Heatmap": "Heatmap für Probleme und Erkenntnisse",
    "SaaS Logs": "SaaS-Protokolle",
  },
  patterns: [
    { re: /^([\d,]+)\s+Empty Groups$/, tpl: "$1 leere Gruppen" },
    { re: /^([\d,]+)\s+MFA Disabled$/, tpl: "MFA deaktiviert: $1" },
    { re: /^([\d,]+)\s+Weak Passwords$/, tpl: "$1 schwache Kennwörter" },
    { re: /^([\d,]+)\s+Service Accounts$/, tpl: "$1 Dienstkonten" },
    { re: /^([\d,]+)\s+Secrets$/, tpl: "$1 Geheimnisse" },
    { re: /^([\d,]+)\s+Admin$/, tpl: "$1 Administratoren" },
    { re: /^([\d,]+)\s+Sensitive Access$/, tpl: "$1 sensible Zugriffe" },
    { re: /^([\d,]+)\s+Inactive$/, tpl: "$1 inaktiv" },
    { re: /^Where can this (.+) access\?$/, tpl: "Worauf kann diese(r) $1 zugreifen?" },
    { re: /^This identity has access to (\d+) assets?$/, tpl: "Diese Identität hat Zugriff auf $1 Asset(s)" },
    { re: /^(\d+)\s+Tactics?$/, tpl: "$1 Taktik(en)" },
    { re: /^(\d+)\s+Techniques?$/, tpl: "$1 Technik(en)" },
    { re: /^(\d[\d,]*)\s+issues$/, tpl: "$1 Probleme" },
    { re: /^(\d[\d,]*)\s+admins at risk$/, tpl: "$1 gefährdete Administratoren" },
  ],

  skip: [
    // Chart-library attribution text.
    /^Created with Highcharts/,
  ],
};
