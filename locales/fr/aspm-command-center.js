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

const dictionaryAspmCommandCenter = {
  exact: {
    "ASPM Command Center": "Centre de commande ASPM",

    // --- Time-range filter ---
    "All time": "Toute la période",
    "30D": "30 j",
    "7D": "7 j",
    "90D": "90 j",

    // --- Supply Chain Security widget ---
    "Not detected in your organization": "Non détecté dans votre organisation",
    "View all attacks": "Afficher toutes les attaques",
    "Latest Supply Chain Attacks": "Dernières attaques de la chaîne d'approvisionnement",

    // --- Coverage widget (inside an SVG chart, via foreignObject) ---
    "Total Coverage": "Couverture totale",
    "Top Application at Risk": "Application la plus à risque",

    // --- Cloud account / application ---
    "Azure cloud accounts": "Comptes cloud Azure",
    "AWS cloud accounts": "Comptes cloud AWS",
    "Google cloud accounts": "Comptes Google Cloud",
    "Applications": "Applications",

    // --- Case / issue ---
    "Issues & Findings": "Problèmes et constats",
    "CASES": "CAS",
    "OPENED": "OUVERTS",
    "CLOSED": "FERMÉS",

    // --- AI Guardrails widget ---
    "AI Guardrails": "Garde-fous IA",
    "Uncover your tailored AI guardrail recommendations to prevent security risks":
      "Découvrez vos recommandations de garde-fous IA personnalisées pour prévenir les risques de sécurité",
  },

  patterns: [
    { re: /^All Applications\s+(\(\d+\))$/, tpl: "Toutes les applications $1" },
  ],

  skip: [],
};
