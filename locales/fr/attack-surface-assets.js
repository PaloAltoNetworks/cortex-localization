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

const dictionaryAttackSurfaceAssets = {
  exact: {
    "Affected Page": "Page affectée",
    "Appears on Page": "Apparaît sur la page",
    "HSTS": "HSTS",
    "Login": "Connexion",
    "No": "Non",
    "Purpose": "Objectif",
    "Required": "Obligatoire",
    "Submit Action URL": "URL de l'action de soumission",
    "Unknown": "Inconnu",
    "Data Type": "Type de données",
    "ID": "ID",
    "Name": "Nom",
    "Other": "Autre",
    "Result": "Résultat",
    "Script": "Script",
    "Secure": "Sécurisé",
    "Status": "Statut",
    "Tags": "Tags",
    "Technologies": "Technologies",
    "Type": "Type",
    "Version": "Version",
    "Web": "Web",
    "Asset Category": "Catégorie d'actif",
    "Asset Groups": "Groupes d'actifs",
    "Asset ID": "ID de l'actif",
    "Asset Id": "ID d'actif",
    "Categories": "Catégories",
    "Compliance": "Conformité",
    "Configurations": "Configurations",
    "Configured Host": "Hôte configuré",
    "Contains": "Contient",
    "Detected On": "Détecté le",
    "Externally Detected Provider": "Fournisseur détecté en externe",
    "Exploitable": "Exploitable",
    "Fail": "Échec",
    "First Observed": "Première observation",
    "Geo Region for IP": "Région géographique de l'IP",
    "HTML Analysis": "Analyse HTML",
    "Hosting Services": "Services d'hébergement",
    "Has Issue": "Présence de problèmes",
    "Load balancers": "Équilibreurs de charge",
    "Most Recent Screenshot": "Capture d'écran la plus récente",
    "Open Site in New Tab": "Ouvrir le site dans un nouvel onglet",
    "Other Websites": "Autres sites web",
    "Other Websites Owned by Your Organization Hosted on the Same IP in the Last 30 Days":
      "Autres sites web appartenant à votre organisation hébergés sur la même IP au cours des 30 derniers jours",
    "PaaS": "PaaS",
    "Pass": "Réussite",
    "Port": "Port",
    "Properties": "Propriétés",
    "Protocol Downgrade": "Rétrogradation de protocole",
    "Redirects never downgrade from HTTPS to HTTP.": "Les redirections ne rétrogradent jamais de HTTPS vers HTTP.",
    "Root Page HTTP Status Code": "Code de statut HTTP de la page racine",
    "Security Best Practice Analysis": "Analyse des bonnes pratiques de sécurité",
    "Security Best Practices Analysis": "Analyse des meilleures pratiques de sécurité",
    "Security Practice": "Pratique de sécurité",
    "Service Name": "Nom du service",
    "Services Hosting this Website": "Services hébergeant ce site web",
    "Sets valid Referrer-Policy Header": "Définit un en-tête Referrer-Policy valide",
    "Technologies Detected in the Last 10 Days": "Technologies détectées au cours des 10 derniers jours",
    "Third Party Resources Detected in the Last 10 days": "Ressources tierces détectées au cours des 10 derniers jours",
    "Third Party URLs": "URL tierces",
    "This website uses HTTPS which encrypts data in transit between browser and server.":
      "Ce site web utilise HTTPS, qui chiffre les données en transit entre le navigateur et le serveur.",
    "Website": "Site web",
    "Website Details": "Détails du site web",
  },

  patterns: [
    { re: /^Captured (.+) from$/, tpl: "Capturé le $1 depuis" },
  ],

  skip: [],
};
