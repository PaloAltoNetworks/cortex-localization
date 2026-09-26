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

const dictionaryCortexAgenticAssistant = {
  exact: {
    "Explore Cortex Agentic Assistant": "Cortex Agentic Assistant entdecken",
    "Fully executed plans": "Vollständig ausgeführte Pläne",
    "Incomplete plans": "Unvollständige Pläne",
    "No plans recorded": "Keine Pläne aufgezeichnet",
    "Plans": "Pläne",
    "User Prompts": "Benutzer-Prompts",
    "Automation rules": "Automatisierungsregeln",
    "Last 7D": "Letzte 7 Tage",

    // --- Agent creation/edit wizard ---
    "Agent Name": "Agentname",
    "Specify Agent Name": "Agentnamen angeben",
    "Select color": "Farbe auswählen",
    "Write a short explanation on what is the common context of the selected actions":
      "Beschreiben Sie kurz den gemeinsamen Kontext der ausgewählten Aktionen",
    "Specific Instructions": "Spezifische Anweisungen",
    "More information": "Weitere Informationen",
    "Type here...": "Hier eingeben...",
    "Add the rules this agent must follow—tone, decision bounds, safety checks, and output format. Keep it less than 3k characters.":
      "Fügen Sie die Regeln hinzu, die dieser Agent befolgen muss – Tonfall, Entscheidungsgrenzen, Sicherheitsprüfungen und Ausgabeformat. Bleiben Sie unter 3.000 Zeichen.",
    "Who has access to Agent": "Wer Zugriff auf den Agent hat",
    "Only me": "Nur ich",
    "Public Agent": "Öffentlicher Agent",
    "Conversation Starters": "Gesprächseinstiege",
    "up to 4 items": "bis zu 4 Elemente",
    "Add conversation starter": "Gesprächseinstieg hinzufügen",
    "Create agent": "Agent erstellen",
    "Build a New Agent": "Neuen Agent erstellen",
    "Agent Details": "Agentdetails",
    "Access Control": "Zugriffssteuerung",
    // In the actual DOM, the two sentences above live in a single text node (separated by a
    // newline, white-space: pre), so — given that matching normalizes newlines to a single
    // space — they're registered as one combined key (registering them as two separate entries
    // would leave both as partial matches that never match).
    "Define which roles and actions the agent has access to. Selecting a role auto-selects its actions. Deselecting an action clears the role.":
      "Legen Sie fest, auf welche Rollen und Aktionen der Agent Zugriff hat.\nWenn Sie eine Rolle auswählen, werden ihre Aktionen automatisch ausgewählt. Wenn Sie die Auswahl einer Aktion aufheben, wird die Rolle abgewählt.",
    "Selected Roles": "Ausgewählte Rollen",
    "Selected Actions": "Ausgewählte Aktionen",
    "New Action": "Neue Aktion",
    "What the AI agent is supposed to be or act as. Defines its identity and primary function. Example: \"SOC Tier 1 Analyst: as a Tier 1 analyst you are responsible for triage alerts and conclude if an alert is a true or false positive\" or \"Incident Response Analyst: as an incident response Analyst you are responsible for investigating and conduct forensics of relevant artifacts related to an incident and provide conclusions about the incident and TTP's used by the threat actor.\"":
      "Was der KI-Agent sein oder als was er agieren soll. Definiert seine Identität und Hauptfunktion. Beispiel: \"SOC Tier 1 Analyst: Als Tier-1-Analyst sind Sie für die Triage von Warnungen verantwortlich und entscheiden, ob eine Warnung richtig positiv oder falsch positiv ist\" oder \"Incident Response Analyst: Als Incident Response Analyst sind Sie für die Untersuchung und forensische Analyse relevanter Artefakte eines Vorfalls verantwortlich und liefern Schlussfolgerungen zum Vorfall und zu den vom Bedrohungsakteur verwendeten TTPs.\"",
    "The specific rules and behavioral guidelines that tell the agent how to operate and respond. Example: \"Follow the NIST framework, provide clear and concise recommendations. used critical thinking when conducting analysis\"":
      "Die spezifischen Regeln und Verhaltensrichtlinien, die dem Agent vorgeben, wie er arbeiten und antworten soll. Beispiel: \"Folge dem NIST-Framework, gib klare und prägnante Empfehlungen. Setze bei Analysen kritisches Denken ein\"",
    "Output Structure": "Ausgabestruktur",
    "How the agent should format and organize its responses. Example: \"Json, Markdown, Array, enum\"":
      "Wie der Agent seine Antworten formatieren und strukturieren soll. Beispiel: \"Json, Markdown, Array, enum\"",
    "Delete Agent": "Agent löschen",

    // --- Action registration wizard (Register Action) ---
    "Start chat": "Chat starten",
    "Register action": "Aktion registrieren",
    "Action Details": "Aktionsdetails",
    "Structuring your content as an Action lets the agent select and execute the intended item based on context, standardizing behavior and ensuring accuracy.":
      "Wenn Sie Ihre Inhalte als Aktion strukturieren, kann der Agent anhand des Kontexts das gewünschte Element auswählen und ausführen. Das vereinheitlicht das Verhalten und sorgt für Genauigkeit.",
    "Type of content:": "Art des Inhalts:",
    "AI Prompt": "KI-Prompt",
    "Select Content:": "Inhalt auswählen:",
    "Select the Script you want to register as an action": "Wählen Sie das Skript aus, das Sie als Aktion registrieren möchten",
    "Select the Command you want to register as an action": "Wählen Sie den Befehl aus, den Sie als Aktion registrieren möchten",
    "Select the AI Prompt you want to register as an action": "Wählen Sie den KI-Prompt aus, den Sie als Aktion registrieren möchten",
    "Provide a title": "Titel angeben",
    "Provide a concise title that shows what the Action does": "Geben Sie einen prägnanten Titel an, der zeigt, was die Aktion bewirkt",
    "Goal:": "Ziel:",
    "describe how the outcome is achieved": "beschreiben Sie, wie das Ergebnis erreicht wird",
    "Mark Action as sensitive to require user approval": "Aktion als sensibel markieren, um eine Benutzergenehmigung zu erfordern",
    "Few-shot examples:": "Few-Shot-Beispiele:",
    "Include examples that illustrate how and when the Action is invoked": "Fügen Sie Beispiele hinzu, die zeigen, wie und wann die Aktion aufgerufen wird",
    "Add Example": "Beispiel hinzufügen",
    "Provide clear descriptions for each argument to guide Agentix in correctly mapping inputs and outputs. This ensures the action is executed as intended.":
      "Geben Sie für jedes Argument eine klare Beschreibung an, damit Agentix Eingaben und Ausgaben korrekt zuordnen kann. So wird sichergestellt, dass die Aktion wie vorgesehen ausgeführt wird.",
    "The selected item has no parameters to define": "Für das ausgewählte Element sind keine Parameter zu definieren",
    "Mark as non-sensitive": "Als nicht sensibel markieren",
    "Mark as sensitive": "Als sensibel markieren",
    "Delete Action": "Aktion löschen",
  },

  patterns: [
    // "Are you sure you want to delete auenoyama-test?" (delete-confirmation dialog; the agent name varies)
    { re: /^Are you sure you want to delete (.+)\?$/, tpl: "Möchten Sie \"$1\" wirklich löschen?" },
    // "Arguments (1)" / "Outputs (1)" (headings in the Register Action wizard; the count varies)
    { re: /^Arguments \((\d+)\)$/, tpl: "Argumente ($1)" },
    { re: /^Outputs \((\d+)\)$/, tpl: "Ausgaben ($1)" },
  ],

  skip: [],
};
