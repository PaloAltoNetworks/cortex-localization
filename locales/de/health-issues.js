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
    "Integration Instance - Command": "Integrationsinstanz - Befehl",
    "Legacy health issues": "Legacy-Integritätsprobleme",
    "Data Ingestion Health": "Integrität der Datenaufnahme",
    "There are no Ingestion Health issues": "Es gibt keine Probleme mit der Integrität der Datenaufnahme",
    "Observation Time": "Beobachtungszeitpunkt",
    "Note: The table data will reload automatically when you close this panel.": "Hinweis: Die Tabellendaten werden automatisch neu geladen, wenn Sie dieses Panel schließen.",
  },

  patterns: [
    { re: /^Detected\s+(\d+)\s+out of$/, tpl: "Erkannt: $1 von " },
    // "Warning: Integration command 'setIssueSeverity' on integration 'Builtin' instance 'Builtin' ran for 16 minutes as part of investigation '5808252', exceeding the recommended threshold of 15 minutes. Performance may be affected."
    { re: /^Warning: Integration command '(.+)' on integration '(.+)' instance '(.+)' ran for (\d+) minutes? as part of investigation '(.+)', exceeding the recommended threshold of (\d+) minutes?\. Performance may be affected\.$/,
      tpl: "Warnung: Der Integrationsbefehl \"$1\" in der Instanz \"$3\" der Integration \"$2\" wurde im Rahmen der Untersuchung \"$5\" $4 Minuten lang ausgeführt und hat den empfohlenen Schwellenwert von $6 Minuten überschritten. Die Leistung kann beeinträchtigt sein." },
  ],

  skip: [],
};
