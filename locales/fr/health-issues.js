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

const dictionaryHealthIssues = {
  exact: {
    "Integration Instance - Command": "Instance d'intégration - Commande",
    "Legacy health issues": "Problèmes de santé hérités",
    "Data Ingestion Health": "Santé de l'ingestion des données",
    "There are no Ingestion Health issues": "Aucun problème de santé de l'ingestion",
    "Observation Time": "Heure d'observation",
    "Note: The table data will reload automatically when you close this panel.": "Remarque : les données du tableau seront rechargées automatiquement à la fermeture de ce panneau.",
  },

  patterns: [
    { re: /^Detected\s+(\d+)\s+out of$/, tpl: "Détectés : $1 sur " },
    // "Warning: Integration command 'setIssueSeverity' on integration 'Builtin' instance 'Builtin' ran for 16 minutes as part of investigation '5808252', exceeding the recommended threshold of 15 minutes. Performance may be affected."
    { re: /^Warning: Integration command '(.+)' on integration '(.+)' instance '(.+)' ran for (\d+) minutes? as part of investigation '(.+)', exceeding the recommended threshold of (\d+) minutes?\. Performance may be affected\.$/,
      tpl: "Avertissement : la commande d'intégration \"$1\" sur l'instance \"$3\" de l'intégration \"$2\" s'est exécutée pendant $4 minute(s) dans le cadre de l'investigation \"$5\", dépassant le seuil recommandé de $6 minute(s). Les performances peuvent être affectées." },
  ],

  skip: [],
};
