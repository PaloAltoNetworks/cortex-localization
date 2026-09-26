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
    "Explore Cortex Agentic Assistant": "Découvrir Cortex Agentic Assistant",
    "Fully executed plans": "Plans entièrement exécutés",
    "Incomplete plans": "Plans incomplets",
    "No plans recorded": "Aucun plan enregistré",
    "Plans": "Plans",
    "User Prompts": "Prompts utilisateur",
    "Automation rules": "Règles d'automatisation",
    "Last 7D": "7 derniers jours",

    // --- Agent creation/edit wizard ---
    "Agent Name": "Nom de l'agent",
    "Specify Agent Name": "Indiquer le nom de l'agent",
    "Select color": "Sélectionner une couleur",
    "Write a short explanation on what is the common context of the selected actions":
      "Rédigez une brève explication du contexte commun des actions sélectionnées",
    "Specific Instructions": "Instructions spécifiques",
    "More information": "Plus d'informations",
    "Type here...": "Saisissez ici...",
    "Add the rules this agent must follow—tone, decision bounds, safety checks, and output format. Keep it less than 3k characters.":
      "Ajoutez les règles que cet agent doit suivre : ton, limites de décision, contrôles de sécurité et format de sortie. Ne dépassez pas 3 000 caractères.",
    "Who has access to Agent": "Qui a accès à l'agent",
    "Only me": "Moi uniquement",
    "Public Agent": "Agent public",
    "Conversation Starters": "Amorces de conversation",
    "up to 4 items": "jusqu'à 4 éléments",
    "Add conversation starter": "Ajouter une amorce de conversation",
    "Create agent": "Créer un agent",
    "Build a New Agent": "Créer un nouvel agent",
    "Agent Details": "Détails de l'agent",
    "Access Control": "Contrôle d'accès",
    // In the actual DOM, the two sentences above live in a single text node (separated by a
    // newline, white-space: pre), so — given that matching normalizes newlines to a single
    // space — they're registered as one combined key (registering them as two separate entries
    // would leave both as partial matches that never match).
    "Define which roles and actions the agent has access to. Selecting a role auto-selects its actions. Deselecting an action clears the role.":
      "Définissez les rôles et les actions auxquels l'agent a accès.\nLa sélection d'un rôle sélectionne automatiquement ses actions. La désélection d'une action désélectionne le rôle.",
    "Selected Roles": "Rôles sélectionnés",
    "Selected Actions": "Actions sélectionnées",
    "New Action": "Nouvelle action",
    "What the AI agent is supposed to be or act as. Defines its identity and primary function. Example: \"SOC Tier 1 Analyst: as a Tier 1 analyst you are responsible for triage alerts and conclude if an alert is a true or false positive\" or \"Incident Response Analyst: as an incident response Analyst you are responsible for investigating and conduct forensics of relevant artifacts related to an incident and provide conclusions about the incident and TTP's used by the threat actor.\"":
      "Ce que l'agent IA est censé être ou incarner. Définit son identité et sa fonction principale. Exemple : \"Analyste SOC Tier 1 : en tant qu'analyste Tier 1, vous êtes chargé de trier les alertes et de déterminer si une alerte est un vrai ou un faux positif\" ou \"Analyste de réponse aux incidents : en tant qu'analyste de réponse aux incidents, vous êtes chargé d'enquêter et de mener l'analyse forensique des artefacts liés à un incident, et de fournir des conclusions sur l'incident et les TTP utilisées par l'acteur de la menace.\"",
    "The specific rules and behavioral guidelines that tell the agent how to operate and respond. Example: \"Follow the NIST framework, provide clear and concise recommendations. used critical thinking when conducting analysis\"":
      "Règles spécifiques et consignes de comportement qui indiquent à l'agent comment fonctionner et répondre. Exemple : \"Suivre le framework NIST, fournir des recommandations claires et concises. Faire preuve d'esprit critique lors de l'analyse\"",
    "Output Structure": "Structure de sortie",
    "How the agent should format and organize its responses. Example: \"Json, Markdown, Array, enum\"":
      "Manière dont l'agent doit formater et organiser ses réponses. Exemple : \"Json, Markdown, Array, enum\"",
    "Delete Agent": "Supprimer l'agent",

    // --- Action registration wizard (Register Action) ---
    "Start chat": "Démarrer une conversation",
    "Register action": "Enregistrer une action",
    "Action Details": "Détails de l'action",
    "Structuring your content as an Action lets the agent select and execute the intended item based on context, standardizing behavior and ensuring accuracy.":
      "Structurer votre contenu sous forme d'action permet à l'agent de sélectionner et d'exécuter l'élément voulu en fonction du contexte, ce qui standardise le comportement et garantit la précision.",
    "Type of content:": "Type de contenu :",
    "AI Prompt": "Prompt IA",
    "Select Content:": "Sélectionner le contenu :",
    "Select the Script you want to register as an action": "Sélectionnez le script à enregistrer en tant qu'action",
    "Select the Command you want to register as an action": "Sélectionnez la commande à enregistrer en tant qu'action",
    "Select the AI Prompt you want to register as an action": "Sélectionnez le prompt IA à enregistrer en tant qu'action",
    "Provide a title": "Indiquer un titre",
    "Provide a concise title that shows what the Action does": "Indiquez un titre concis qui décrit ce que fait l'action",
    "Goal:": "Objectif :",
    "describe how the outcome is achieved": "décrivez comment le résultat est obtenu",
    "Mark Action as sensitive to require user approval": "Marquez l'action comme sensible pour exiger l'approbation de l'utilisateur",
    "Few-shot examples:": "Exemples few-shot :",
    "Include examples that illustrate how and when the Action is invoked": "Incluez des exemples illustrant comment et quand l'action est invoquée",
    "Add Example": "Ajouter un exemple",
    "Provide clear descriptions for each argument to guide Agentix in correctly mapping inputs and outputs. This ensures the action is executed as intended.":
      "Fournissez une description claire de chaque argument pour aider Agentix à mapper correctement les entrées et les sorties. L'action sera ainsi exécutée comme prévu.",
    "The selected item has no parameters to define": "L'élément sélectionné n'a aucun paramètre à définir",
    "Mark as non-sensitive": "Marquer comme non sensible",
    "Mark as sensitive": "Marquer comme sensible",
    "Delete Action": "Supprimer l'action",
  },

  patterns: [
    // "Are you sure you want to delete auenoyama-test?" (delete-confirmation dialog; the agent name varies)
    { re: /^Are you sure you want to delete (.+)\?$/, tpl: "Voulez-vous vraiment supprimer $1 ?" },
    // "Arguments (1)" / "Outputs (1)" (headings in the Register Action wizard; the count varies)
    { re: /^Arguments \((\d+)\)$/, tpl: "Arguments ($1)" },
    { re: /^Outputs \((\d+)\)$/, tpl: "Sorties ($1)" },
  ],

  skip: [],
};
