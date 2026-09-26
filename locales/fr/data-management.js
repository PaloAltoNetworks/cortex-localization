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

const dictionaryDataManagement = {
  exact: {
    // --- Dataset Management screen ---
    "Cold Range": "Plage froide",
    "Dataset": "Jeu de données",
    "Dataset Name": "Nom du jeu de données",
    "Dataset Views": "Vues de jeux de données",
    "Hot Range": "Plage chaude",
    "Hot Storage License": "Licence de stockage chaud",
    "Log Update Type": "Type de mise à jour des journaux",
    "Logs": "Journaux",
    "Lookup": "Lookup",
    "Raw": "Raw",
    "System Audit": "Audit système",
    "Total Days Stored": "Nombre total de jours stockés",
    "Total Size Stored": "Taille totale stockée",
    "Average Daily Size": "Taille quotidienne moyenne",
    "Average Event Size": "Taille moyenne des événements",
    "Data tier": "Niveau de données",
    "Default Query Target": "Cible de requête par défaut",
    "Source Query": "Requête source",
    "TTL": "TTL",
    "TTL(minutes)": "TTL (minutes)",
    "Total Events": "Nombre total d'événements",
    "Is Valid": "Est valide",
    "Related Tables": "Tables associées",
    "New Dataset View": "Nouvelle vue de jeu de données",
    "Dataset View Name": "Nom de la vue de jeu de données",
    "Created At": "Date de création",
    "Add Lookup": "Ajouter un lookup",
    "Upload a csv, tsv, or json file (max. 30MB) to be used as a dataset":
      "Chargez un fichier csv, tsv ou json (30 Mo max.) à utiliser comme jeu de données",
    "Drag and Drop a file here": "Glissez-déposez un fichier ici",
    "browse": "parcourez",
    "your files": "vos fichiers",
    "Define dataset name": "Définir le nom du jeu de données",

    // --- Parsing Rules screen ---
    "User Defined": "Défini par l'utilisateur",
    "Default Rules": "Règles par défaut",
    "Both": "Les deux",
    "Simulate": "Simuler",
    "Event ID": "ID d'événement",
    "Input Logs": "Journaux d'entrée",
    "Line number": "Numéro de ligne",
    "Logs output": "Sortie des journaux",
    "No output logs": "Aucun journal de sortie",
    "Output Logs": "Journaux de sortie",
    "Raw log": "Journal brut",
    "Show more": "Afficher plus",
    "Success": "Réussite",
    "XQL Samples": "Exemples XQL",
    "Sample time": "Heure de l'échantillon",
    "Layout": "Disposition",
    "Filters": "Filtres",
    "Restore default layout": "Restaurer la disposition par défaut",
    "APPEARANCE": "APPARENCE",
    "LOG FORMAT": "FORMAT DU JOURNAL",
    "TREE": "ARBORESCENCE",
    "Search column": "Rechercher une colonne",
    "Remove all": "Tout supprimer",
    "Add all": "Tout ajouter",
    "You can change your parsing rules and try again": "Vous pouvez modifier vos règles d'analyse syntaxique et réessayer",

    // --- Compute Units Usage screen ---
    "API Query": "Requête API",
    "Agent and LLM consumption is currently shown for informational purposes only and does not impact your Compute Unit balance.":
      "La consommation des agents et des LLM est actuellement affichée à titre informatif uniquement et n'affecte pas votre solde d'unités de calcul.",
    "Agentic Assistant": "Assistant agentique",
    "Agents & LLM": "Agents et LLM",
    "Compute Unit Usage": "Utilisation des unités de calcul",
    "Compute units": "Unités de calcul",
    "Consumption by category over time": "Consommation par catégorie au fil du temps",
    "Daily limit": "Limite quotidienne",
    "LLM Task": "Tâche LLM",
    "Notebook": "Bloc-notes",
    "Queries": "Requêtes",
    "Set daily limit": "Définir une limite quotidienne",
    "Set a daily limit to manage your compute unit consumption. This helps distribute your annual quota over time and prevent early depletion.":
      "Définissez une limite quotidienne pour gérer votre consommation d'unités de calcul. Cela permet de répartir votre quota annuel dans le temps et d'éviter un épuisement prématuré.",
    "Queries limit": "Limite de requêtes",
    "No limit": "Aucune limite",
    "This is your": "Ceci est votre",
    "Timestamp": "Horodatage",
    "Total annual usage": "Utilisation annuelle totale",
    "Trigger Type": "Type de déclencheur",
    "Unused": "Inutilisé",
    "Usage by type": "Utilisation par type",
    "XQL Queries": "Requêtes XQL",
    "Billable": "Facturable",
    "Trigger/PAPI Key ID": "ID de déclencheur/clé PAPI",
    "Query/Prompt": "Requête/prompt",
  },

  patterns: [
    { re: /^Cortex GB hot retention:\s*(\d+)\s*days$/, tpl: "Rétention chaude Cortex GB : $1 jours" },
    { re: /^Cortex EP hot retention:\s*(\d+)\s*days$/, tpl: "Rétention chaude Cortex EP : $1 jours" },
    { re: /^Cortex EP issues and cases hot retention:\s*(\d+)\s*days$/, tpl: "Rétention chaude des problèmes et cas Cortex EP : $1 jours" },
    { re: /^Cortex GB issues and cases hot retention:\s*(\d+)\s*days$/, tpl: "Rétention chaude des problèmes et cas Cortex GB : $1 jours" },
    { re: /^IN VIEW\s+(\(\d+\))$/, tpl: "DANS LA VUE $1" },
    { re: /^ADD COLUMNS\s+(\(\d+\))$/, tpl: "AJOUTER DES COLONNES $1" },
    // "Divide annual quota evenly" and "[55 per day]" render as separate text
    // nodes, so each is pattern-matched individually.
    { re: /^Divide annual quota evenly$/, tpl: "Répartir le quota annuel de manière égale" },
    { re: /^(\d+)% of annual quota$/, tpl: "$1 % du quota annuel" },
    { re: /^\[(\d+) per day\]$/, tpl: "[$1 par jour]" },
  ],

  skip: [],
};
