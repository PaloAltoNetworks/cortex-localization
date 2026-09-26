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

const dictionaryLicense = {
  exact: {
    "License Details": "Détails de la licence",
    "Sync license details": "Synchroniser les détails de la licence",
    "A single Compute Unit add-on for Cortex CLOUD": "Module complémentaire Compute Unit unique pour Cortex CLOUD",
    "Advanced identity threat detection and response capabilities": "Fonctionnalités avancées de détection et de réponse aux menaces liées à l'identité",
    "Application Security add-on for CLOUD, including IAC, SCA and Secrets Security":
      "Module complémentaire Application Security pour CLOUD, incluant IAC, SCA et Secrets Security",
    "Cloud Runtime Workloads": "Charges de travail cloud à l'exécution",
    "Extended Compute Units": "Compute Units étendues",
    "Forensics Module": "Module d'analyse forensique",
    "Forensics add-on for Cortex CLOUD": "Module complémentaire d'analyse forensique pour Cortex CLOUD",
    "Free trial": "Essai gratuit",
    "Host Insights Module": "Module Host Insights",
    "Host Insights add-on for Cortex CLOUD": "Module complémentaire Host Insights pour Cortex CLOUD",
    "ITDR Module": "Module ITDR",
    "Runtime Security": "Sécurité à l'exécution",
  },

  patterns: [
    { re: /^Addons \((\d+)\)$/, tpl: "Modules complémentaires ($1)" },
    { re: /^(\d[\d,]*)\s+agents$/, tpl: "$1 agents" },
    { re: /^Expires (.+)$/, tpl: "Expire le $1" },
    { re: /^Expires on (.+)$/, tpl: "Expire le : $1" },
    { re: /^Trial Expires on (.+)$/, tpl: "Fin de l'essai le : $1" },
    { re: /^Usage: (.+)$/, tpl: "Utilisation : $1" },
    { re: /^([\d.,]+)\s+additional daily on average \(([\d.,]+)\s+annually\)$/, tpl: "$1 supplémentaires par jour en moyenne ($2 par an)" },
  ],

  skip: [],
};
