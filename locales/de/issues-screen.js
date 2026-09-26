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

const dictionaryIssuesScreen = {
  exact: {
    "All Issues": "Alle Probleme",
    "Backward Scan Status": "Status des rückwirkenden Scans",
    "Create Issue Exclusion Rule": "Ausschlussregel für Probleme erstellen",
    "Rule status": "Regelstatus",
    "Rule Conditions (from filter)": "Regelbedingungen (aus Filter)",
    "Your changes will be lost. Do you want to cancel and exit the wizard?": "Ihre Änderungen gehen verloren. Möchten Sie abbrechen und den Assistenten beenden?",
    "Filters are still in edit mode. Click anywhere on the page to apply your filters.": "Die Filter befinden sich noch im Bearbeitungsmodus. Klicken Sie auf eine beliebige Stelle der Seite, um Ihre Filter anzuwenden.",
    "Apply rule on existing issues": "Regel auf vorhandene Probleme anwenden",
    "Existing issues matching the rule’s conditions will also be excluded": "Vorhandene Probleme, die den Regelbedingungen entsprechen, werden ebenfalls ausgeschlossen",
    "Define conditions to automatically exclude issues": "Definieren Sie Bedingungen, um Probleme automatisch auszuschließen",
    "Search": "Suchen",
    "Value": "Wert",
    "All Issue Exception & Exclusion Rules": "Alle Ausnahme- und Ausschlussregeln für Probleme",
    "Do you want to create an Exception or an Exclusion?": "Möchten Sie eine Ausnahme oder einen Ausschluss erstellen?",
    "Create new exception": "Neue Ausnahme erstellen",
    "Exceptions grant Issues a time-limited grace period for a specific duration, pausing SLA timers.":
      "Ausnahmen gewähren Problemen eine zeitlich begrenzte Schonfrist für eine bestimmte Dauer, während der die SLA-Timer angehalten werden.",
    "Create new exclusion": "Neuen Ausschluss erstellen",
    "Exclusions permanently suppress Issues. No new Issues matching this criteria will be added to the Issue list view.":
      "Ausschlüsse unterdrücken Probleme dauerhaft. Neue Probleme, die diesen Kriterien entsprechen, werden nicht mehr zur Problemlistenansicht hinzugefügt.",
    "Requestor Name": "Name des Antragstellers",
    "Approver Name": "Name des Genehmigers",
    "Date Created": "Erstellungsdatum",
    "Decision Date": "Entscheidungsdatum",
    "Decision Justification": "Begründung der Entscheidung",
    "Requestor Email": "E-Mail-Adresse des Antragstellers",
    "Approver Email": "E-Mail-Adresse des Genehmigers",
    "Add Exception": "Ausnahme hinzufügen",
    "Disabled": "Deaktiviert",
    "Exception Rules": "Ausnahmeregeln",
    "Exclusion Rules": "Ausschlussregeln",
    "Impacted Issues": "Betroffene Probleme",
    "Justification Category": "Begründungskategorie",
    "Status": "Status",
    "There are no Issue Exception rules": "Es gibt keine Ausnahmeregeln für Probleme",
    "You are about to perform issue exclusion": "Sie sind dabei, einen Problemausschluss durchzuführen",
    "Create issue exception rule": "Ausnahmeregel für Probleme erstellen",
    "Scan types": "Scantypen",
    "Usage": "Nutzung",
    "Scanned Branch": "Gescannter Branch",
    "Scan Date": "Scandatum",
    "Scan Health": "Scan-Integrität",
    "Scan Category": "Scankategorie",
    "Pull Request ID": "Pull Request-ID",
    "Commit": "Commit",
    "Git User": "Git-Benutzer",
    "PR Status": "PR-Status",
    "Blocking Policies": "Blockierende Richtlinien",
    "Pull Request Title": "Pull Request-Titel",
    "Blocking Policies IDs": "IDs der blockierenden Richtlinien",
    "Blocking Policies Names": "Namen der blockierenden Richtlinien",
    "CI Status": "CI-Status",
    "Tool Id": "Tool-ID",
    "Risk Factors details": "Details zu Risikofaktoren",
    "Status modified by": "Status geändert von",
    "Status modified date": "Datum der Statusänderung",
    "Link": "Link",
    "Logo": "Logo",
    "In catalog": "Im Katalog",
    "Risk factors last update": "Letzte Aktualisierung der Risikofaktoren",
    "Last update": "Letzte Aktualisierung",
    "cves": "CVE",
    "Choose cases to link the issues to": "Wählen Sie die Fälle aus, mit denen die Probleme verknüpft werden sollen",
    "Urgent Issues Exceeding SLA": "Dringende Probleme mit SLA-Überschreitung",
    "Valid Secrets Detected": "Gültige Geheimnisse erkannt",
    "High Issues Exceeding SLA": "Hohe Probleme mit SLA-Überschreitung",
    "High Issues in Direct Dependencies": "Hohe Probleme in direkten Abhängigkeiten",
    "High Issues Involving Strong Copyleft Licenses": "Hohe Probleme mit starken Copyleft-Lizenzen",
    "Resolved - Known Issue": "Gelöst - Bekanntes Problem",
    "Resolved - Duplicate Issue": "Gelöst - Doppeltes Problem",
    "Resolved - False Positive": "Gelöst - Falsch positiv",
    "Resolved - Other": "Gelöst - Sonstiges",
    "Resolved - True Positive": "Gelöst - Richtig positiv",
    "Resolved - Security Testing": "Gelöst - Sicherheitstest",
    "Resolved - Dismissed": "Gelöst - Verworfen",
    "Resolved - Fixed": "Gelöst - Korrigiert",
    "Resolved - Risk Accepted": "Gelöst - Risiko akzeptiert",
    "IaC Drifts": "IaC-Drifts",
    "Severity Breakdown": "Aufschlüsselung nach Schweregrad",
    "Code IaC Resource": "Code-IaC-Ressource",
    "No data available to display in the chart": "Keine Daten zur Anzeige im Diagramm verfügbar",
    "Resolve Issue Id": "Problem-ID auflösen",
    "mark this issue as": "dieses Problem markieren als",
    "Enter comment...": "Kommentar eingeben...",
    "Select from list": "Aus Liste auswählen",
    "Urgency Details": "Details zur Dringlichkeit",
    "Create application": "Anwendung erstellen",
    "Application Criticality": "Kritikalität der Anwendung",
    "Missing code-to-cloud traceability.": "Code-to-Cloud-Rückverfolgbarkeit fehlt.",
    "Urgency may change once the full runtime path is established": "Die Dringlichkeit kann sich ändern, sobald der vollständige Laufzeitpfad ermittelt wurde",
    "Urgency not updated. We couldn't calculate urgency this time. We'll try again with the next periodic scan.":
      "Dringlichkeit nicht aktualisiert. Die Dringlichkeit konnte diesmal nicht berechnet werden. Wir versuchen es beim nächsten regelmäßigen Scan erneut.",
    "Backlog Status:": "Backlog-Status:",
    "Choose a reason": "Grund auswählen",
    "Create Exception Rule": "Ausnahmeregel erstellen",
    "Enter the date that the Exception will end and the SLA Timer will start to tick down again on.":
      "Geben Sie das Datum ein, an dem die Ausnahme endet und der SLA-Timer wieder herunterzuzählen beginnt.",
    "Form": "Formular",
    "None provided": "Keine Angabe",
    "Optionally for your reference, enter a ticket or a record number for any external exception tracking or auditing systems you use.":
      "Optional können Sie zu Referenzzwecken eine Ticket- oder Datensatznummer aus den von Ihnen verwendeten externen Systemen zur Ausnahmeverfolgung oder Prüfung eingeben.",
    "Provide a reason why there is a business need to defer fixing the security Issues that match this rule.":
      "Geben Sie einen geschäftlichen Grund an, warum die Behebung der Sicherheitsprobleme, die dieser Regel entsprechen, aufgeschoben werden muss.",
    "Use Exception Rules to suppress issues that cannot be resolved within SLA bounds due to valid business justifications.":
      "Verwenden Sie Ausnahmeregeln, um Probleme zu unterdrücken, die aufgrund berechtigter geschäftlicher Gründe nicht innerhalb der SLA-Fristen gelöst werden können.",
    "When an issue matches the rule criteria, its SLA timer pauses for the specified duration.":
      "Wenn ein Problem den Regelkriterien entspricht, wird sein SLA-Timer für die angegebene Dauer angehalten.",
    "internal id": "interne ID",
    "Approver": "Genehmiger",
    "Exception End Date": "Enddatum der Ausnahme",
    "Exception Period": "Ausnahmezeitraum",
    "Justification": "Begründung",
    "External Exception ID": "Externe Ausnahme-ID",
    "Reason Category": "Grundkategorie",
    "Match Criteria and Results": "Übereinstimmungskriterien und Ergebnisse",
    "Change Issue Assignee": "Zuständigen für Problem ändern",
    "Assign to me": "Mir zuweisen",
    "Select a user to assign": "Wählen Sie einen Benutzer für die Zuweisung aus",
    "Select the action you want to run when the rule conditions are met.": "Wählen Sie die Aktion aus, die ausgeführt werden soll, wenn die Regelbedingungen erfüllt sind.",
    "Everywhere": "Überall",
    "Select cases": "Fälle auswählen",
    "Uncheck cases to unlink them from the issue": "Deaktivieren Sie das Kontrollkästchen von Fällen, um deren Verknüpfung mit dem Problem aufzuheben",
    "View related case": "Zugehörigen Fall anzeigen",
    "Show workplan": "Arbeitsplan anzeigen",
    "Investigate": "Untersuchen",
    "Exclude issue": "Problem ausschließen",
    "Except issue": "Ausnahme für Problem erstellen",
    "Exclude issues": "Probleme ausschließen",
    "Except issues": "Ausnahme für Probleme erstellen",
    "Link to case": "Mit Fall verknüpfen",
    "Unlink from case": "Verknüpfung mit Fall aufheben",
    "Change status": "Status ändern",
    "Change severity": "Schweregrad ändern",
    "Change assignee": "Zuständigen ändern",
    "Investigate causality chain": "Kausalitätskette untersuchen",
    "Run automation": "Automatisierung ausführen",
    "Manage Issue": "Problem verwalten",
    "Open views": "Ansichten öffnen",
    "Create case": "Fall erstellen",
    "AppSec Issues": "AppSec-Probleme",
    "CSPM Scanner": "CSPM-Scanner",
    "Detection Method": "Erkennungsmethode",
    "Findings": "Befunde",
    "Issue Domain": "Problemdomäne",
    "Name": "Name",
    "Observation Time": "Beobachtungszeitpunkt",
    "Resolution Reason": "Lösungsgrund",

    // --- "Detection method"/"Issue domain" filter option list ---
    // XDR Analytics, XDR IOC, DLP, ASM, PAN NGFW, XDR Managed Threat
    // Hunting, Prisma Browser, Prisma Cloud, Prisma Cloud Compute
    // Brand names, specific product names, and abbreviations are left as-is (translating them
    // would not change their spelling, so they are not in the dictionary): AURL, XDR BIOC,
    // XDR Analytics BIOC, XDR Analytics, XDR IOC, DLP, ASM, PAN NGFW, XDR Managed Threat
    // Hunting, Prisma Browser, Prisma Cloud, Prisma Cloud Compute
    "Agentless Disk Scanner": "Agentloser Datenträger-Scanner",
    "AI Security Posture": "KI-Sicherheitslage",
    "API Posture Scanner": "API-Sicherheitslage-Scanner",
    "API Traffic Monitor": "API-Datenverkehrsmonitor",
    "AppSec Policy": "AppSec-Richtlinie",
    "CAS CVE Scanner": "CAS-CVE-Scanner",
    "CAS Drift Scanner": "CAS-Drift-Scanner",
    "IaC Scanner": "IaC-Scanner",
    "CAS License Scanner": "CAS-Lizenzscanner",
    "CAS Malicious Package Scanner": "CAS-Scanner für schädliche Pakete",
    "SAST Scanner": "SAST-Scanner",
    "CAS Secret Scanner": "CAS-Secret-Scanner",
    "CIEM Scanner": "CIEM-Scanner",
    "CLI Scanner": "CLI-Scanner",
    "Cloud Network Analyzer": "Cloud-Netzwerkanalyse",
    "Custom Issue": "Benutzerdefiniertes Problem",
    "Data Policy": "Datenrichtlinie",
    "SaaS Attachments": "SaaS-Anhänge",
    "Graph Engine": "Graph-Engine",
    "Health": "Integrität",
    "Indicator Matching": "Indikatorabgleich",
    "IoT Security": "IoT-Sicherheit",
    "Kubernetes Scanner": "Kubernetes-Scanner",
    "MIRRORING": "SPIEGELUNG",
    "Posture Policy": "Sicherheitslage-Richtlinie",
    "User Reported Phishing": "Von Benutzern gemeldetes Phishing",
    "Hunting": "Hunting",
    "Posture": "Sicherheitslage",

    "AWS EC2 instance not configured with Instance Metadata Service v2 (IMDSv2)":
      "AWS EC2-Instanz nicht mit Instance Metadata Service v2 (IMDSv2) konfiguriert",

    // --- Column-selection menu ---
    "Excluded": "Ausgeschlossen",
    "Case IDs": "Fall-IDs",
    "Insert Time": "Einfügezeitpunkt",
    "Resolution Status Modified": "Lösungsstatus geändert am",
    "Remediation": "Behebung",
    "Impact": "Auswirkung",
    "Extended Description": "Erweiterte Beschreibung",
    "Initial Evidence": "Erste Beweise",
    "Excepted": "Ausgenommen",
    "Remaining Exception Period": "Verbleibender Ausnahmezeitraum",
    "Agentic AI response status": "Status der agentischen KI-Reaktion",
    "Agentic AI response": "Agentische KI-Reaktion",
    "Recommendation": "Empfehlung",
    "Last Modified": "Zuletzt geändert",
    "Compliance Standard": "Compliance-Standard",
    "Compliance Category": "Compliance-Kategorie",
    "Compliance Control": "Compliance-Kontrolle",

    // --- Issue detail panel (Evidence/Causality tabs, etc.) ---
    // "Critical Vulnerabilities (CVSS)" is already registered in vulnerability-management.js
    // (all files' dictionaries are merged globally, so it is not duplicated here).
    "No associated standards or controls": "Keine zugehörigen Standards oder Kontrollen",
    "Automations browser": "Automation-Browser",
    "Type `:` to use Emojis": "Geben Sie `:` ein, um Emojis zu verwenden",
    "Focus on the CLI field using `ctrl+;`": "Mit `ctrl+;` das CLI-Feld fokussieren",
    "Navigate quickly with `ctrl+k` (default)": "Mit `ctrl+k` schnell navigieren (Standard)",
    "Toggle markdown box on CLI using `ctrl+m`": "Markdown-Feld in der CLI mit `ctrl+m` umschalten",
    "There are no Cases": "Es gibt keine Fälle",
    "Asset Risk": "Asset-Risiko",
    "The value of and risks posed to your organization by the compromise of this asset":
      "Der Wert dieses Assets und die Risiken, die eine Kompromittierung dieses Assets für Ihre Organisation darstellt",
    "Internet Reachable Asset": "Aus dem Internet erreichbares Asset",
    "This asset is publicly exposed to the internet.": "Dieses Asset ist öffentlich im Internet exponiert.",
    "Evidence graph is not supported for this detection rule type": "Der Beweisgraph wird für diesen Erkennungsregeltyp nicht unterstützt",
    "Enable prompt protection in the content filter": "Prompt-Schutz im Inhaltsfilter aktivieren",
    "Related Affected Assets": "Zugehörige betroffene Assets",
    "Enforce the Agent to Use Guardrails": "Verwendung von Guardrails durch den Agent erzwingen",
    "Number of hits": "Anzahl der Treffer",
    "Process Execution": "Prozessausführung",
    "Initiator Details": "Details zum Initiator",
    "Name (initiated by)": "Name (initiiert von)",
    "Path (initiator path)": "Pfad (Initiatorpfad)",
    "CMD (initiator CMD)": "CMD (Initiator-CMD)",
    "PID (initiator PID)": "PID (Initiator-PID)",
    "TID (initiator TID)": "TID (Initiator-TID)",
    "Signature": "Signatur",
    "Signature Unavailable": "Signatur nicht verfügbar",
    // MD5 and SHA256 are hash-format names, left as-is (not added to the dictionary).
    "Target Process": "Zielprozess",
    "Causality Group Owner Details": "Details zum Besitzer der Kausalitätsgruppe",
    "OS Parent": "Übergeordneter OS-Prozess",
    "Occurrence Count": "Anzahl der Vorkommen",

    "Snippet": "Snippet",
    "Objects Count": "Anzahl der Objekte",
    "Records Count": "Anzahl der Datensätze",
    "There are no Findings": "Es gibt keine Befunde",
    "Data Findings": "Datenbefunde",
    "Configuration Findings": "Konfigurationsbefunde",
    "Identity Findings": "Identitätsbefunde",
    "Posture Findings": "Befunde zur Sicherheitslage",
    "Malware Findings": "Malware-Befunde",
    "Additional Details": "Zusätzliche Details",
    "Showing a partial graph": "Teilgraph wird angezeigt",
    "Due to the high volume of results, only a portion of the data is shown.":
      "Aufgrund der großen Anzahl von Ergebnissen wird nur ein Teil der Daten angezeigt.",

    // --- Issue detail panel (AI Security/CAS-type issue overview tab) ---
    // A "trigger rule" link (shown in both its title attribute and its link text).
    "Identity Posture Rule": "Identitäts-Sicherheitslage-Regel",
    // already registered in another screen's dictionary, so only the technique name is added here).
    "Drive-by Compromise": "Drive-by-Kompromittierung",
    // A value in the "attack technique" column of an AI Security Posture (DSPM) issue's evidence
    // table (inside table-widget; the column heading itself is already translated).
    "Indirect Attack": "Indirekter Angriff",
    "Jailbreak": "Jailbreak",
    // The same issue's evidence-section heading (the description text itself is a fixed,
    // tenant-independent string, but it sits under pan-highlight-text, which the existing
    // RAW_IDENTIFIER_SELECTOR exclusion policy keeps out of the fixed dictionary — so only the
    // heading is added here).
    "Prompt Injection": "Prompt-Injection",
    // The issue's detection-rule name shown in the "Detection logic" field (a generic,
    // instance-independent name). The issue name itself (inside xdr-issue-focus-area-header h3
    // span[utitle]) is excluded by the existing policy, so only this generic name — shown in a
    // separate field — is added here.
    "AI deployment missing prompt attack protection": "KI-Bereitstellung ohne Schutz vor Prompt-Angriffen",
    // "Potential dependency confusion due to package name or scope ... available
    // "Potential dependency confusion due to package name or scope ... available in registry"
    // always has an actual package name (e.g. case-tracker) embedded in the text, so it never
    // matches exactly; it is instead handled by the regex entry under "patterns" below (not added
    // to the fixed "exact" dictionary).
    "Package Management": "Paketverwaltung",
    "Dependency Chains": "Abhängigkeitsketten",
    // Code-evidence (commit info) labels — the leading "| " is included in the same text node as
    // part of the separator.
    "| Commit Hash": "| Commit-Hash",
    "| Commit Time": "| Commit-Zeitpunkt",
  },

  patterns: [
    // Originally a fixed "Open in GitHub" entry, but the same phrasing turned out
    // to appear for other repository providers too (e.g. GitLab), so this was
    // changed to a pattern with the provider name as a variable.
    { re: /^Open in (.+)$/, tpl: "In $1 öffnen" },
    { re: /^Rules that affect over (\d+) issues cannot be created$/, tpl: "Regeln, die mehr als $1 Probleme betreffen, können nicht erstellt werden" },
    { re: /^Select an Automation to run on selected issue (\d+), "(.+)"$/, tpl: "Wählen Sie eine Automation aus, die für das ausgewählte Problem $1, \"$2\", ausgeführt werden soll" },
    // 'tyamasaki-test-rule-01(Network Exposure) was added to the case because it relates to the same asset'
    { re: /^(.+?)\((.+?)\) was added to the case because it relates to the same asset$/, tpl: "$1($2) wurde dem Fall hinzugefügt, da es sich auf dasselbe Asset bezieht" },
    // "The automation '7caa89a2-e4c5-4496-8653-cf1e2989f705' encountered an error."
    // (The automation's name/ID is embedded dynamically. The quote characters match the source
    // text, which uses typographic quotes U+2018/U+2019.)
    { re: /^The automation ‘(.+?)’ encountered an error\.$/, tpl: "Bei der Automatisierung \"$1\" ist ein Fehler aufgetreten." },
    // The detection-rule name for a Dependency Confusion-type issue, shown in the "Detection
    // logic" field. A package name (e.g. case-tracker) is embedded in the text.
    // "Potential dependency confusion due to package name or scope case-tracker available in registry"
    {
      re: /^Potential dependency confusion due to package name or scope (.+?) available in registry$/,
      tpl: "Mögliche Dependency Confusion, da der Paketname oder Geltungsbereich \"$1\" in der Registry verfügbar ist",
    },
    // A GitHub-related issue's "Fix" suggestion sentence (a user name, org name, or GitHub App
    // name is embedded dynamically). Rendered as a <u-label> element's text.
    // "Fix - User account sreerajnair95 in GitHub is missing 2FA"
    { re: /^Fix - User account (.+?) in GitHub is missing 2FA$/, tpl: "Korrektur - Für das Benutzerkonto \"$1\" in GitHub fehlt 2FA" },
    // "Fix - 2FA is not enforced in the tinystepstudio GitHub organization."
    { re: /^Fix - 2FA is not enforced in the (.+?) GitHub organization\.$/, tpl: "Korrektur - 2FA wird in der GitHub-Organisation \"$1\" nicht erzwungen." },
    // "Fix - Unrestricted usage of GitHub Actions allowed across the organization tinystepstudio."
    {
      re: /^Fix - Unrestricted usage of GitHub Actions allowed across the organization (.+?)\.$/,
      tpl: "Korrektur - Uneingeschränkte Nutzung von GitHub Actions in der gesamten Organisation \"$1\" zulässig.",
    },
    // "Fix - Excessive GitHub App cortex-appsec-eu permissions"
    { re: /^Fix - Excessive GitHub App (.+?) permissions$/, tpl: "Korrektur - Übermäßige Berechtigungen der GitHub App \"$1\"" },
    // "Fix - Deprecated package uuid used in NPM project in GitHub repository"
    // (Both the package name and the repository type — GitHub/GitLab/Bitbucket, etc. — are
    // embedded dynamically.)
    {
      re: /^Fix - Deprecated package (.+?) used in NPM project in (.+?) repository$/,
      tpl: "Korrektur - Veraltetes Paket \"$1\" wird im NPM-Projekt im Repository $2 verwendet",
    },
    // "Fix - Potential dependency confusion due to package name or scope case-tracker available in registry"
    // Dependency confusion as an Automation candidate name on the "Action plan" tab (it differs
    // from the generic name shown in the "Detection logic" field, see the pattern above, by the
    // leading "Fix - ").
    {
      re: /^Fix - Potential dependency confusion due to package name or scope (.+?) available in registry$/,
      tpl: "Korrektur - Mögliche Dependency Confusion, da der Paketname oder Geltungsbereich \"$1\" in der Registry verfügbar ist",
    },
    // "Fix - CVE-2019-18888 in symfony/http-foundation, version: 3.4.x-dev"
    // (The CVE number, package name, and version are all embedded dynamically. The first capture
    // group is not restricted to "CVE-" specifically, to also allow for other vulnerability-ID formats.)
    {
      re: /^Fix - (.+?) in (.+?), version: (.+)$/,
      tpl: "Korrektur - $1 in $2, Version: $3",
    },
  ],

  skip: [],
};
