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

const dictionaryMarketplace = {
  exact: {
    "Installed Content Packs": "Packs de contenu installés",
    "Show": "Afficher",
    "All Packs": "Tous les packs",
    "Notifications active": "Notifications actives",
    "Update to 1.1.6": "Mettre à jour vers 1.1.6",
    "Content": "Contenu",
    "Dependencies": "Dépendances",
    "Version History": "Historique des versions",
    "Show Deprecated Content": "Afficher le contenu obsolète",
    "INFO": "INFOS",
    "Last installed": "Dernière installation",
    "Installed version": "Version installée",
    "Certification": "Certification",
    "Certified": "Certifié",
    "Supported by": "Pris en charge par",
    "Go to": "Accéder à",
    "Content Pack support site": "site d'assistance du pack de contenu",
    "First Created": "Première création",
    "Last Release": "Dernière version publiée",
    "Free Enricher": "Enrichisseur gratuit",
    "WORKS WITH THE FOLLOWING INTEGRATIONS:": "FONCTIONNE AVEC LES INTÉGRATIONS SUIVANTES :",
    "DISCLAIMER": "AVERTISSEMENT",
    "Content packs are licensed by the Publisher identified above and subject to the Publisher’s own":
      "Les packs de contenu sont concédés sous licence par l'éditeur identifié ci-dessus et soumis aux propres",
    "licensing terms": "conditions de licence de l'éditeur",
    "Marketplace documentation": "documentation de la Marketplace",
    "Cart": "Panier",
    "Your cart is empty": "Votre panier est vide",
    "Go shopping": "Parcourir le catalogue",
    "Categories": "Catégories",
    "Filter by:": "Filtrer par :",
    "Search in": "Rechercher dans",
    "Sort by": "Trier par",
    "See all": "Tout afficher",
    "See more": "Voir plus",
    "Show installed": "Afficher les éléments installés",
    "Content Pack includes": "Le pack de contenu comprend",
    "Content Packs": "Packs de contenu",
    "Getting Started": "Prise en main",
    "Partner Spotlight": "Partenaires à la une",
    "Partners": "Partenaires",
    "Published By": "Publié par",
    "Types": "Types",
    "Use Cases": "Cas d'usage",
    "Alerts": "Alertes",
    "Analytics & SIEM": "Analytique et SIEM",
    "Asset Management": "Gestion des actifs",
    "Attack": "Attaque",
    "Breach": "Violation",
    "Breach Notification": "Notification de violation",
    "Classifiers": "Classificateurs",
    "Code Repositories": "Dépôts de code",
    "Collection": "Collecte",
    "Dark Web": "Dark Web",
    "Data Model Rules": "Règles de modèle de données",
    "Identity And Access Management": "Gestion des identités et des accès",
    "Incident Response": "Réponse aux incidents",
    "Extracts text from images.": "Extrait le texte des images.",
    "Show Commands": "Afficher les commandes",
    "The following packs have updates:": "Les packs suivants ont des mises à jour :",
  },

  patterns: [
    { re: /^Content Packs Library\s+(\(\d+\))$/, tpl: "Bibliothèque de packs de contenu $1" },
    { re: /^(\d+)\s+Scripts?$/, tpl: "$1 script(s)" },
    { re: /^(\d+)\s+Integrations?$/, tpl: "$1 intégration(s)" },
    { re: /^(\d+)\s+updates?\s+available$/, tpl: "$1 mise(s) à jour disponible(s)" },
  ],

  skip: [],
};
