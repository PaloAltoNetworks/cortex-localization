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
    "Deprecated packages": "Packages obsolètes",
    "Samples": "Échantillons",
    "Console URL": "URL de la console",
    "Public URL": "URL publique",
    "Report false positive": "Signaler un faux positif",
    "Layer IDs": "ID de couche",
    "Origin Package Name": "Nom du package d'origine",
    "Symbols": "Symboles",
    "PURL": "PURL",
    "Copy PURL": "Copier le PURL",
    "Risk:": "Risque :",
    "Source Package": "Package source",
    "Binaries": "Binaires",
    "High-risk packages": "Packages à haut risque",
    "Highlights": "Points clés",
    "Package Type": "Type de package",
    "Packages currently classified as high operational risk":
      "Packages actuellement classés à risque opérationnel élevé",
    "Packages highlights": "Points clés des packages",
    "Total used packages by development stage": "Total des packages utilisés par étape de développement",
    "Used In": "Utilisé dans",
  },

  patterns: [
    { re: /^(\d+)\s+Malicious packages$/, tpl: "$1 packages malveillants" },
    { re: /^(\d+)\s+Deprecated packages$/, tpl: "$1 packages obsolètes" },
    { re: /^(\d+)\s+Code,\s+(\d+)\s+Runtime,\s+(\d+)\s+Deploy$/, tpl: "$1 code, $2 exécution, $3 déploiement" },
  ],

  skip: [],
};
