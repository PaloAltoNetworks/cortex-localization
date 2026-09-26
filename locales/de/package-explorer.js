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

const dictionaryPackageExplorer = {
  exact: {
    "Deprecated packages": "Veraltete Pakete",
    "Samples": "Beispiele",
    "Console URL": "Konsolen-URL",
    "Public URL": "Öffentliche URL",
    "Report false positive": "Falsch positiv melden",
    "Layer IDs": "Layer-IDs",
    "Origin Package Name": "Name des Ursprungspakets",
    "Symbols": "Symbole",
    "PURL": "PURL",
    "Copy PURL": "PURL kopieren",
    "Risk:": "Risiko:",
    "Source Package": "Quellpaket",
    "Binaries": "Binärdateien",
    "High-risk packages": "Pakete mit hohem Risiko",
    "Highlights": "Highlights",
    "Package Type": "Pakettyp",
    "Packages currently classified as high operational risk":
      "Pakete, die derzeit mit hohem betrieblichem Risiko eingestuft sind",
    "Packages highlights": "Paket-Highlights",
    "Total used packages by development stage": "Verwendete Pakete gesamt nach Entwicklungsphase",
    "Used In": "Verwendet in",
  },

  patterns: [
    { re: /^(\d+)\s+Malicious packages$/, tpl: "$1 schädliche Pakete" },
    { re: /^(\d+)\s+Deprecated packages$/, tpl: "$1 veraltete Pakete" },
    { re: /^(\d+)\s+Code,\s+(\d+)\s+Runtime,\s+(\d+)\s+Deploy$/, tpl: "Code: $1, Laufzeit: $2, Bereitstellung: $3" },
  ],

  skip: [],
};
