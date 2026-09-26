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

const dictionaryMitreAttackFrameworkCoverage = {
  exact: {
    "MITRE ATT&CK Framework Coverage": "Couverture du framework MITRE ATT&CK",

    "Active": "Actif",
    "Contributing Data Sources": "Sources de données contributrices",
    "Data Source Type:": "Type de source de données :",
    "Detection Type:": "Type de détection :",
    "Download Support File": "Télécharger le fichier de support",
    "Inactive": "Inactif",
    "Number of Detection Rules Per Tactic": "Nombre de règles de détection par tactique",
    "Please try again in a few minutes.": "Veuillez réessayer dans quelques minutes.",
    "Show only Covered Methods": "Afficher uniquement les méthodes couvertes",
    "We are experiencing a problem, data may not be up to date.":
      "Nous rencontrons un problème. Les données ne sont peut-être pas à jour.",
  },

  patterns: [
    { re: /^(\d+)\s+items selected$/, tpl: "$1 éléments sélectionnés" },
  ],

  skip: [],
};
