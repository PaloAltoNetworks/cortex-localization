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

const dictionarySupplyChainAttacks = {
  exact: {
    "Supply Chain Attacks": "Attaques de la chaîne d'approvisionnement",
    "Threat Center": "Centre des menaces",

    "Attack Source": "Source de l'attaque",
    "Compromised": "Compromis",
    "Compromised assets": "Actifs compromis",
    "Compromised packages": "Packages compromis",
    "Compromised tools": "Outils compromis",
    "Issues resolved": "Problèmes résolus",
    "Malicious Package": "Package malveillant",
    "Malicious Tool": "Outil malveillant",
    "No compromise detected": "Aucune compromission détectée",
    "Open Blog Post": "Ouvrir l'article de blog",
    "Package Explorer": "Explorateur de packages",
    "Vulnerable Package": "Package vulnérable",

    // --- Detail-screen common UI ---
    "Security breach": "Violation de sécurité",
    "First Detected:": "Première détection :",
    "Updated on:": "Mis à jour le :",
    "No impact detected in your organization": "Aucun impact détecté dans votre organisation",
    "No compromised packages detected": "Aucun package compromis détecté",
    "Impacted assets": "Actifs affectés",
    "No impacted assets detected": "Aucun actif affecté détecté",
    "Your applications, pipelines, and repositories are not affected by this breach.":
      "Vos applications, pipelines et dépôts ne sont pas affectés par cette violation.",
    "Impacted Packages Outside Your Org": "Packages affectés en dehors de votre organisation",

    // ============================================================
    // ============================================================

    // --- ChainDrop (keyv / cacheable) ---
    "An ongoing npm supply chain worm targeting the keyv/cacheable ecosystem (keyv@6.0.0) utilizes compromised maintainer accounts to infect over 400 packages with a self-propagating \"Shai-Hulud\" malware variant. It harvests cloud, AI-agent, crypto, and infrastructure credentials while leveraging Ethereum smart contracts for dynamic C2 resolution and maintaining persistence via Claude Code hooks and VS Code tasks.":
      "Un ver de chaîne d'approvisionnement npm en cours, ciblant l'écosystème keyv/cacheable (keyv@6.0.0), utilise des comptes de mainteneurs compromis pour infecter plus de 400 packages avec une variante auto-propagatrice du logiciel malveillant \"Shai-Hulud\". Il collecte des identifiants cloud, d'agents IA, crypto et d'infrastructure, tout en exploitant des smart contracts Ethereum pour la résolution dynamique du C2 et en maintenant sa persistance via des hooks Claude Code et des tâches VS Code.",

    // --- Joyfill ---
    "Compromised beta versions of two @joyfill npm packages deliver a DEV#POPPER Remote Access Trojan (RAT) via an import-time JavaScript implant. The payload executes automatically whenever the package is loaded (import/require), compromising developer workstations, CI/CD pipelines, automated scanners, and production builds without requiring specific function calls or installation scripts.":
      "Des versions bêta compromises de deux packages npm @joyfill diffusent un cheval de Troie d'accès à distance (RAT) DEV#POPPER via un implant JavaScript exécuté à l'importation. La charge utile s'exécute automatiquement chaque fois que le package est chargé (import/require), compromettant les postes de travail des développeurs, les pipelines CI/CD, les scanners automatisés et les builds de production sans nécessiter d'appel de fonction spécifique ni de script d'installation.",

    // --- AsyncAPI (M-Red-Team) ---
    "A major supply chain attack compromised the @asyncapi npm ecosystem (impacting packages with over 3 million weekly downloads) by exploiting a GitHub Actions pull_request_target vulnerability to exfiltrate a bot service-account token. The attacker used the stolen token to publish 5 malicious package versions containing an import-triggered payload that fetches a massive, modular malware framework (\"M-RED-TEAM v6.4\") from IPFS to harvest credentials, establish systemd persistence, and maintain multi-channel C2 fallback networks.":
      "Une attaque majeure de la chaîne d'approvisionnement a compromis l'écosystème npm @asyncapi (touchant des packages totalisant plus de 3 millions de téléchargements hebdomadaires) en exploitant une vulnérabilité pull_request_target de GitHub Actions pour exfiltrer le jeton d'un compte de service de bot. L'attaquant a utilisé le jeton volé pour publier 5 versions de packages malveillantes contenant une charge utile déclenchée à l'importation, qui récupère depuis IPFS un framework malveillant modulaire massif (\"M-RED-TEAM v6.4\") afin de collecter des identifiants, d'établir une persistance systemd et de maintenir des réseaux C2 de secours multicanaux.",

    // --- Leo Platform ---
    "An automated supply chain attack compromised 20 npm packages in the Leo Platform ecosystem within a 3-second window, impacting ~13,600 weekly downloads. Attributed to the \"Miasma\" threat actor, this targeted campaign utilizes a scriptless binding.gyp install hook (\"Phantom Gyp\") to execute obfuscated malware. The payload scrapes process memory for log-masked CI secrets, sweeps multi-cloud credentials, exfiltrates data stealthily via GitHub GraphQL commits, and automatically self-propagates across accessible npm packages.":
      "Une attaque automatisée de la chaîne d'approvisionnement a compromis 20 packages npm de l'écosystème Leo Platform en l'espace de 3 secondes, affectant environ 13 600 téléchargements hebdomadaires. Attribuée à l'acteur malveillant \"Miasma\", cette campagne ciblée utilise un hook d'installation binding.gyp sans script (\"Phantom Gyp\") pour exécuter un logiciel malveillant obfusqué. La charge utile analyse la mémoire des processus à la recherche de secrets CI masqués dans les journaux, rafle les identifiants multicloud, exfiltre discrètement les données via des commits GitHub GraphQL et se propage automatiquement aux packages npm accessibles.",

    // --- easy-day-js (Mastra AI) ---
    "On June 17, 2026, the @mastra npm organization was compromised via account takeover (ehindero). Rather than injecting code directly, the attacker swapped the dayjs dependency for an attacker-controlled typosquat, easy-day-js, across 144 @mastra packages (est. ~8M weekly / ~29M monthly downloads). The clean bait easy-day-js@1.11.21 was pinned as ^1.11.21, so npm auto-resolved to the malicious easy-day-js@1.11.22, whose obfuscated postinstall dropper (setup.cjs) disabled TLS verification, fetched a stage-2 payload from 23.254.164.92:8000, spawned it as a detached process pointing at C2 23.254.164.123:443 (credential and crypto-wallet theft), and self-deleted to destroy forensic evidence.":
      "Le 17 juin 2026, l'organisation npm @mastra a été compromise par une prise de contrôle de compte (ehindero). Plutôt que d'injecter du code directement, l'attaquant a remplacé la dépendance dayjs par un typosquat qu'il contrôlait, easy-day-js, dans 144 packages @mastra (environ 8 M de téléchargements hebdomadaires / 29 M mensuels estimés). L'appât sain easy-day-js@1.11.21 étant épinglé en ^1.11.21, npm a résolu automatiquement vers la version malveillante easy-day-js@1.11.22, dont le dropper postinstall obfusqué (setup.cjs) désactivait la vérification TLS, récupérait une charge utile de deuxième étape depuis 23.254.164.92:8000, la lançait comme processus détaché pointant vers le C2 23.254.164.123:443 (vol d'identifiants et de portefeuilles crypto), puis s'autosupprimait pour détruire les preuves forensiques.",

    // --- Laravel-Lang ---
    "A threat actor compromised four popular Laravel-Lang Composer packages by rewriting every existing git tag to point to a new malicious commit, ensuring no version remained safe. This commit altered Composer's autoload configuration, causing the payload to execute automatically the moment an application starts up. Once triggered, the payload drops a hidden binary to massively exfiltrate sensitive data—including cloud credentials, environment variables, and security tokens—before deleting itself to evade forensic analysis.":
      "Un acteur malveillant a compromis quatre packages Composer Laravel-Lang populaires en réécrivant chaque tag git existant pour le faire pointer vers un nouveau commit malveillant, de sorte qu'aucune version ne reste sûre. Ce commit modifiait la configuration d'autoload de Composer, provoquant l'exécution automatique de la charge utile dès le démarrage d'une application. Une fois déclenchée, la charge utile dépose un binaire caché pour exfiltrer massivement des données sensibles, notamment des identifiants cloud, des variables d'environnement et des jetons de sécurité, avant de s'autosupprimer pour échapper à l'analyse forensique.",

    // --- Node-IPC Attack ---
    "Malicious versions of the node-ipc npm package were published, containing an obfuscated payload designed to steal cloud credentials, SSH keys, and CI/CD secrets. The attack exploited a compromised or rogue maintainer account to push malicious releases under the legitimate package name, reaching downstream consumers via direct and transitive dependencies.":
      "Des versions malveillantes du package npm node-ipc ont été publiées, contenant une charge utile obfusquée conçue pour voler des identifiants cloud, des clés SSH et des secrets CI/CD. L'attaque a exploité un compte de mainteneur compromis ou malveillant pour publier des versions malveillantes sous le nom légitime du package, atteignant les consommateurs en aval via des dépendances directes et transitives.",

    // --- Mini Shai-Hulud (TanStack) ---
    "Coordinated supply chain attack against npm and PyPI ecosystems, compromising packages across multiple namespaces (notably TanStack, Mistral AI, Guardrails AI, and UiPath). Attackers exploited GitHub Actions workflow vulnerabilities to publish malicious package versions without needing to steal npm credentials. The payload acts as a credential stealer and self-propagating worm, abusing CI/CD trust to spread laterally across maintainer accounts and dependent repositories.":
      "Attaque coordonnée de la chaîne d'approvisionnement contre les écosystèmes npm et PyPI, compromettant des packages dans plusieurs espaces de noms (notamment TanStack, Mistral AI, Guardrails AI et UiPath). Les attaquants ont exploité des vulnérabilités de workflows GitHub Actions pour publier des versions de packages malveillantes sans avoir besoin de voler des identifiants npm. La charge utile agit comme un voleur d'identifiants et un ver auto-propagateur, abusant de la confiance CI/CD pour se propager latéralement entre les comptes de mainteneurs et les dépôts dépendants.",

    // --- Axios NPM ---
    "Attacker hijacked npm account of axios maintainer jasonsaayman and published axios@1.14.1 and axios@0.30.4 with injected dependency plain-crypto-js@4.2.1 (MAL-2026-2306) containing a cross-platform RAT dropper.":
      "L'attaquant a détourné le compte npm du mainteneur d'axios jasonsaayman et publié axios@1.14.1 et axios@0.30.4 avec une dépendance injectée plain-crypto-js@4.2.1 (MAL-2026-2306) contenant un dropper RAT multiplateforme.",
    "On March 30-31, 2026, an unknown threat actor compromised the npm account of `jasonsaayman`, the primary maintainer of the axios HTTP client library — the most popular JavaScript HTTP client with over 100 million weekly downloads. The attacker published two malicious versions (axios@1.14.1 and axios@0.30.4) that injected a hidden dependency (plain-crypto-js@4.2.1) containing a cross-platform Remote Access Trojan (RAT) dropper.":
      "Les 30 et 31 mars 2026, un acteur malveillant inconnu a compromis le compte npm de `jasonsaayman`, principal mainteneur de la bibliothèque client HTTP axios, le client HTTP JavaScript le plus populaire avec plus de 100 millions de téléchargements hebdomadaires. L'attaquant a publié deux versions malveillantes (axios@1.14.1 et axios@0.30.4) injectant une dépendance cachée (plain-crypto-js@4.2.1) contenant un dropper de cheval de Troie d'accès à distance (RAT) multiplateforme.",

    // --- Axios NPM ---
    "Attacker hijacked npm account of axios maintainer jasonsaayman and published axios@1.14.1 and axios@0.30.4 with injected dependency plain-crypto-js@4.2.1 (MAL-2026-2306) containing a cross-platform RAT dropper. On March 30-31, 2026, an unknown threat actor compromised the npm account of `jasonsaayman`, the primary maintainer of the axios HTTP client library — the most popular JavaScript HTTP client with over 100 million weekly downloads. The attacker published two malicious versions (axios@1.14.1 and axios@0.30.4) that injected a hidden dependency (plain-crypto-js@4.2.1) containing a cross-platform Remote Access Trojan (RAT) dropper.":
      "L'attaquant a détourné le compte npm du mainteneur d'axios jasonsaayman et publié axios@1.14.1 et axios@0.30.4 avec une dépendance injectée plain-crypto-js@4.2.1 (MAL-2026-2306) contenant un dropper RAT multiplateforme. Les 30 et 31 mars 2026, un acteur malveillant inconnu a compromis le compte npm de `jasonsaayman`, principal mainteneur de la bibliothèque client HTTP axios, le client HTTP JavaScript le plus populaire avec plus de 100 millions de téléchargements hebdomadaires. L'attaquant a publié deux versions malveillantes (axios@1.14.1 et axios@0.30.4) injectant une dépendance cachée (plain-crypto-js@4.2.1) contenant un dropper de cheval de Troie d'accès à distance (RAT) multiplateforme.",

    // --- Telnyx ---
    "TeamPCP hijacked PyPI credentials (from Trivy compromise) and published telnyx@4.87.1/4.87.2 (MAL-2026-2254) with WAV steganography payloads. Attackers published backdoored Python SDK versions (4.87.1/2) containing a malicious payload hidden in a WAV file. The attack aimed to exfiltrate SSH keys and Kubernetes tokens to gain persistent cloud infrastructure access. It was a downstream effect of the LiteLLM breach earlier that week.":
      "TeamPCP a détourné des identifiants PyPI (issus de la compromission de Trivy) et publié telnyx@4.87.1/4.87.2 (MAL-2026-2254) avec des charges utiles par stéganographie WAV. Les attaquants ont publié des versions piégées du SDK Python (4.87.1/2) contenant une charge utile malveillante cachée dans un fichier WAV. L'attaque visait à exfiltrer des clés SSH et des jetons Kubernetes afin d'obtenir un accès persistant à l'infrastructure cloud. Il s'agissait d'un effet en aval de la violation de LiteLLM survenue plus tôt dans la semaine.",

    // --- LiteLLM ---
    "TeamPCP used stolen PyPI tokens to upload litellm@1.82.7/1.82.8 with .pth file that auto-executes on every Python process to harvest LLM API keys. Malicious versions (1.82.7/8) were uploaded to PyPI using stolen maintainer tokens to inject code via .pth files. The goal was to harvest API keys for major LLM providers (OpenAI, Anthropic) and cloud provider secrets. This attack effectively targeted the \"brain\" of many AI-integrated applications.":
      "TeamPCP a utilisé des jetons PyPI volés pour charger litellm@1.82.7/1.82.8 avec un fichier .pth qui s'exécute automatiquement dans chaque processus Python afin de collecter des clés API de LLM. Les versions malveillantes (1.82.7/8) ont été chargées sur PyPI à l'aide de jetons de mainteneur volés pour injecter du code via des fichiers .pth. L'objectif était de collecter les clés API des principaux fournisseurs de LLM (OpenAI, Anthropic) ainsi que les secrets des fournisseurs cloud. Cette attaque ciblait de fait le \"cerveau\" de nombreuses applications intégrant l'IA.",

    // --- Checkmarx KICS ---
    "TeamPCP used stolen GitHub PATs to force-push to all 35 tags of Checkmarx/kics-github-action and poisoned ast-github-action@v2.3.28. Threat actor TeamPCP hijacked GitHub Action tags to inject credential-stealing scripts into CI/CD pipelines. The objective was to intercept GitHub PATs and cloud environment variables as they were processed during security scans. This allowed the attackers to move laterally into other high-value developer tools.":
      "TeamPCP a utilisé des PAT GitHub volés pour effectuer un force-push sur les 35 tags de Checkmarx/kics-github-action et a empoisonné ast-github-action@v2.3.28. L'acteur malveillant TeamPCP a détourné des tags GitHub Action pour injecter des scripts de vol d'identifiants dans les pipelines CI/CD. L'objectif était d'intercepter les PAT GitHub et les variables d'environnement cloud lors de leur traitement pendant les analyses de sécurité. Cela a permis aux attaquants de se déplacer latéralement vers d'autres outils de développement à forte valeur.",

    // --- Trivy ---
    "TeamPCP exploited incomplete credential rotation to force-push kamikaze.sh to 76/77 tags in aquasecurity/trivy-action. The core of the \"March Madness\" campaign, where attackers force-pushed malicious commits to 76 of 77 version tags of trivy-action. The malware scraped runner memory for secrets and exfiltrated them to a typosquatted domain (scan.aquasecurtiy[.]org). This compromise provided the \"master keys\" that TeamPCP used to unlock the subsequent attacks on KICS and LiteLLM.":
      "TeamPCP a exploité une rotation incomplète des identifiants pour effectuer un force-push de kamikaze.sh sur 76 des 77 tags d'aquasecurity/trivy-action. Il s'agit du cœur de la campagne \"March Madness\", au cours de laquelle les attaquants ont effectué un force-push de commits malveillants sur 76 des 77 tags de version de trivy-action. Le logiciel malveillant a fouillé la mémoire du runner à la recherche de secrets et les a exfiltrés vers un domaine typosquatté (scan.aquasecurtiy[.]org). Cette compromission a fourni les \"clés maîtresses\" que TeamPCP a utilisées pour mener les attaques suivantes contre KICS et LiteLLM.",

    // --- MongoBleed ---
    "CVE-2025-14847 (CVSS 8.7) unauthenticated memory disclosure in MongoDB Server zlib handling affecting versions 4.4.0-8.2.2. MongoBleed is a supply chain attack involving malicious npm packages designed to exfiltrate MongoDB credentials and sensitive runtime data once deployed. The affected packages appeared benign but executed malicious logic during application runtime.":
      "CVE-2025-14847 (CVSS 8.7) : divulgation de mémoire sans authentification dans le traitement zlib de MongoDB Server, affectant les versions 4.4.0 à 8.2.2. MongoBleed est une attaque de la chaîne d'approvisionnement impliquant des packages npm malveillants conçus pour exfiltrer des identifiants MongoDB et des données d'exécution sensibles une fois déployés. Les packages affectés semblaient inoffensifs mais exécutaient une logique malveillante pendant l'exécution de l'application.",

    // --- React2Shell ---
    "CVE-2025-55182 (CVSS 10.0) insecure deserialization in React Server Components Flight protocol in react-server-dom-webpack/parcel/turbopack 19.0.0-19.2.0. React2Shell is a class of application-layer exploit patterns where unsafe React server-side rendering (SSR) or dynamic rendering logic enables remote code execution. While not tied to a single package compromise, it represents a recurring attack vector that expands the application attack surface through frontend frameworks used in backend contexts.":
      "CVE-2025-55182 (CVSS 10.0) : désérialisation non sécurisée dans le protocole Flight de React Server Components dans react-server-dom-webpack/parcel/turbopack 19.0.0 à 19.2.0. React2Shell est une classe de schémas d'exploitation de la couche applicative dans lesquels une logique de rendu côté serveur (SSR) ou de rendu dynamique React non sécurisée permet l'exécution de code à distance. Bien qu'il ne soit pas lié à la compromission d'un seul package, il représente un vecteur d'attaque récurrent qui étend la surface d'attaque des applications via des frameworks frontend utilisés dans des contextes backend.",

    // --- qix ---
    "Compromised qix maintainer account injected credential-stealing into 24+ packages: chalk@5.6.1 (MAL-2025-46969) debug@4.4.2 (MAL-2025-46974) and 15+ more. The qix supply chain attack stemmed from a compromised maintainer account that injected credential-stealing logic into trusted npm packages. The malicious versions propagated quickly through automated dependency updates.":
      "Un compte de mainteneur qix compromis a injecté du code de vol d'identifiants dans plus de 24 packages : chalk@5.6.1 (MAL-2025-46969), debug@4.4.2 (MAL-2025-46974) et plus de 15 autres. L'attaque de la chaîne d'approvisionnement qix provenait d'un compte de mainteneur compromis qui a injecté une logique de vol d'identifiants dans des packages npm de confiance. Les versions malveillantes se sont rapidement propagées via les mises à jour automatisées des dépendances.",

    // --- Shai-Hulud v1 & v2 ---
    "npm phishing campaign led to self-replicating worm via post-install scripts spreading to hundreds of packages including @ctrl/tinycolor (MAL-2025-47141). Shai-Hulud is a multi-stage supply chain attack campaign targeting open-source ecosystems through malicious packages, dependency confusion, and trusted distribution channels. Multiple waves have been observed, with expanding scope and evolving techniques across package registries and tooling.":
      "Une campagne de phishing npm a donné naissance à un ver auto-répliquant qui s'est propagé via des scripts post-install à des centaines de packages, dont @ctrl/tinycolor (MAL-2025-47141). Shai-Hulud est une campagne d'attaque de la chaîne d'approvisionnement en plusieurs étapes ciblant les écosystèmes open source par le biais de packages malveillants, de la confusion de dépendances et de canaux de distribution de confiance. Plusieurs vagues ont été observées, avec une portée croissante et des techniques évolutives sur les registres de packages et les outils.",

    // --- nx (s1ngularity) ---
    "Compromised npm account published malicious @nx 20.9.0-21.8.0 and @nx/devkit (MAL-2025-41436) with credential-stealing code. The nx (s1ngularity) incident involved the introduction of malicious code into a package within the Nx tooling ecosystem, enabling unauthorized behavior during installation or execution phases of the build process.":
      "Un compte npm compromis a publié des versions malveillantes de @nx 20.9.0 à 21.8.0 et de @nx/devkit (MAL-2025-41436) contenant du code de vol d'identifiants. L'incident nx (s1ngularity) a consisté à introduire du code malveillant dans un package de l'écosystème d'outils Nx, permettant un comportement non autorisé lors des phases d'installation ou d'exécution du processus de build.",

    // --- TJ-Actions ---
    "Multi-stage: spotbugs/sonar-findbugs pull_request_target exploit leaked PAT chained through reviewdog to tj-actions/changed-files (CVE-2025-30066) compromising 23000+ repos. The TJ-Actions breach involved the compromise of a widely used GitHub Actions workflow, creating risk of secret exposure and pipeline manipulation in CI/CD environments. Impact depended on workflow configuration, token scope, and pinning practices.":
      "Attaque en plusieurs étapes : l'exploitation de pull_request_target dans spotbugs/sonar-findbugs a fait fuiter un PAT, enchaîné via reviewdog jusqu'à tj-actions/changed-files (CVE-2025-30066), compromettant plus de 23 000 dépôts. La violation TJ-Actions a impliqué la compromission d'un workflow GitHub Actions largement utilisé, créant un risque d'exposition de secrets et de manipulation des pipelines dans les environnements CI/CD. L'impact dépendait de la configuration des workflows, de la portée des jetons et des pratiques d'épinglage.",

    // --- Log4Shell (Log4j) ---
    // Note: the actual display appends notes unrelated to the security content, apparently
    // left over from internal testing (e.g. "[PubSub E2E test bump ...]"). To make translation
    // still apply, the dictionary key includes that text verbatim (the note itself stays untranslated).
    "CVE-2021-44228 (CVSS 10.0) JNDI injection in Apache Log4j 2 (log4j-core 2.0-beta9 to 2.14.1) allowing unauthenticated RCE via ${jndi:ldap://} in log messages. Log4Shell is a critical remote code execution vulnerability in the widely used Log4j logging library that allows attackers to execute arbitrary code by injecting specially crafted log messages. Due to Log4j's deep presence across application stacks, the vulnerability enabled widespread, internet-scale exploitation shortly after disclosure. [PubSub E2E test bump v5 - 2026-05-26] [v10: BQ stats verification bump 2026-06-04] [v11: Ed25519-sha256 streaming test 2026-06-11]":
      "CVE-2021-44228 (CVSS 10.0) : injection JNDI dans Apache Log4j 2 (log4j-core 2.0-beta9 à 2.14.1) permettant une RCE sans authentification via ${jndi:ldap://} dans les messages de journal. Log4Shell est une vulnérabilité critique d'exécution de code à distance dans la bibliothèque de journalisation Log4j, largement utilisée, qui permet aux attaquants d'exécuter du code arbitraire en injectant des messages de journal spécialement conçus. En raison de la présence profonde de Log4j dans les piles applicatives, la vulnérabilité a permis une exploitation généralisée à l'échelle d'Internet peu après sa divulgation. [PubSub E2E test bump v5 - 2026-05-26] [v10: BQ stats verification bump 2026-06-04] [v11: Ed25519-sha256 streaming test 2026-06-11]",

    // --- XZ Utils ---
    "Jia Tan (state-sponsored) social-engineered maintainer trust over 2+ years then backdoored xz-utils 5.6.0/5.6.1 (CVE-2024-3094) build system to compromise liblzma for SSH access.":
      "Jia Tan (soutenu par un État) a gagné par ingénierie sociale la confiance des mainteneurs pendant plus de 2 ans, puis a installé une porte dérobée dans le système de build de xz-utils 5.6.0/5.6.1 (CVE-2024-3094) afin de compromettre liblzma pour obtenir un accès SSH.",

    // --- Shai-Hulud npm Resurgence (AntV Payload Reactivation) ---
    "The Shai-Hulud npm worm payload from the May 19, 2026 @antv compromise resurfaced 111 days later—the longest dormancy-to-reactivation gap observed for this payload. On September 7, 2026 a single npm account published four packages carrying the identical malicious file hash (e37e3ddeeaaa9e0c4fdbcb829b4895a6521031c80053fc436625b61e6ee5b1a6) already fingerprinted months earlier. The payload behaves as before: a self-propagating worm that steals CI/CD and cloud credentials and republishes itself to additional packages.":
      "La charge utile du ver npm Shai-Hulud issue de la compromission @antv du 19 mai 2026 a refait surface 111 jours plus tard, soit le plus long intervalle entre dormance et réactivation observé pour cette charge utile. Le 7 septembre 2026, un seul compte npm a publié quatre packages portant le même hachage de fichier malveillant (e37e3ddeeaaa9e0c4fdbcb829b4895a6521031c80053fc436625b61e6ee5b1a6), déjà identifié plusieurs mois auparavant. La charge utile se comporte comme avant : un ver auto-propagateur qui vole des identifiants CI/CD et cloud et se republie dans d'autres packages.",

    // --- Shai-Hulud – Trinitite ---
    "Shai-Hulud malware variant \"Trinitite\" compromised @7nohe/openapi-react-query-codegen, a TanStack query generator package with 128k weekly downloads. Eight malicious versions were published across four major release lines during August 28-29, 2026. Stolen credentials are exfiltrated encrypted to attacker-controlled GitHub repositories. The first-stage payload uses Function() instead of eval() for code execution and XOR instead of ROT13 for deobfuscation, with new public encryption keys making attribution harder. The malware uses Bun 1.4.0 and contains logic to download a C2 payload from a remote server.":
      "La variante \"Trinitite\" du logiciel malveillant Shai-Hulud a compromis @7nohe/openapi-react-query-codegen, un package générateur de requêtes TanStack comptant 128 000 téléchargements hebdomadaires. Huit versions malveillantes ont été publiées sur quatre lignes de versions majeures les 28 et 29 août 2026. Les identifiants volés sont exfiltrés sous forme chiffrée vers des dépôts GitHub contrôlés par l'attaquant. La charge utile de première étape utilise Function() au lieu d'eval() pour l'exécution de code et XOR au lieu de ROT13 pour la désobfuscation, avec de nouvelles clés de chiffrement publiques qui compliquent l'attribution. Le logiciel malveillant utilise Bun 1.4.0 et contient une logique permettant de télécharger une charge utile C2 depuis un serveur distant.",

    // --- Rust Arrayref, Internment, and Append-only-vec ---
    "Rust crates.io supply chain attack: a compromised maintainer account poisoned three widely-used crates from the same owner within 23 minutes (arrayref@0.3.10, internment@0.8.7, append-only-vec@0.1.9). The malicious arrayref@0.3.10 (a utility with ~245M all-time downloads sitting under tiny-skia, winit, blake3, and Solana/Ethereum tooling) injected a first-ever dependency on proc-macro1@1.0.107, a typosquat of proc-macro2 published minutes earlier by an account impersonating David Tolnay. The dropper's build.rs runs at compile time: it downloads a second-stage binary over TLS with certificate validation disabled, writes it to a temp directory, and executes it with a C2 address argument, so simply building any project during the 07:11-09:25 UTC exposure window could yield silent remote code execution. The attacker also yanked all other modern arrayref releases (0.3.5-0.3.9) to steer developers toward the single non-yanked malicious version 0.3.10.":
      "Attaque de la chaîne d'approvisionnement Rust crates.io : un compte de mainteneur compromis a empoisonné en 23 minutes trois crates largement utilisées du même propriétaire (arrayref@0.3.10, internment@0.8.7, append-only-vec@0.1.9). La version malveillante arrayref@0.3.10 (un utilitaire totalisant environ 245 M de téléchargements, utilisé par tiny-skia, winit, blake3 et des outils Solana/Ethereum) a injecté pour la première fois une dépendance à proc-macro1@1.0.107, un typosquat de proc-macro2 publié quelques minutes plus tôt par un compte usurpant l'identité de David Tolnay. Le fichier build.rs du dropper s'exécute à la compilation : il télécharge un binaire de deuxième étape via TLS avec la validation des certificats désactivée, l'écrit dans un répertoire temporaire et l'exécute avec une adresse C2 en argument ; ainsi, la simple compilation d'un projet pendant la fenêtre d'exposition de 07:11 à 09:25 UTC pouvait entraîner une exécution de code à distance silencieuse. L'attaquant a également retiré (yank) toutes les autres versions récentes d'arrayref (0.3.5 à 0.3.9) pour orienter les développeurs vers la seule version malveillante non retirée, 0.3.10.",

    // --- AntV npm Compromise (Mini Shai-Hulud Wave 5) ---
    "Compromised npm account \"atool\" poisoned 637 versions across 317 packages—279 in the @antv data visualization ecosystem plus timeago.js, echarts-for-react, size-sensor and others (collectively ~16M weekly downloads). Attributed to threat group TeamPCP as Wave 5 of the \"Mini Shai-Hulud\" campaign, the malicious versions were published in two waves on May 19, 2026 between 01:39 and 02:06 UTC. Each package carries a 498KB obfuscated JavaScript payload (SHA256 a68dd1e6a6e35ec3771e1f94fe796f55dfe65a2b94560516ff4ac189390dfa1c) delivered via an npm preinstall hook that executes through the Bun runtime, reads GitHub Actions runner memory via /proc/[pid]/mem to steal CI/CD secrets, and harvests credentials from 130+ file paths (AWS, GCP, Azure, GitHub PATs, npm tokens, Kubernetes and Vault credentials, SSH keys, and password-manager vaults). Stolen data is exfiltrated to the antvis/G2 GitHub repo and to t.m-kosche.com.":
      "Le compte npm compromis \"atool\" a empoisonné 637 versions dans 317 packages : 279 dans l'écosystème de visualisation de données @antv, ainsi que timeago.js, echarts-for-react, size-sensor et d'autres (environ 16 M de téléchargements hebdomadaires au total). Attribuées au groupe malveillant TeamPCP comme vague 5 de la campagne \"Mini Shai-Hulud\", les versions malveillantes ont été publiées en deux vagues le 19 mai 2026 entre 01:39 et 02:06 UTC. Chaque package contient une charge utile JavaScript obfusquée de 498 Ko (SHA256 a68dd1e6a6e35ec3771e1f94fe796f55dfe65a2b94560516ff4ac189390dfa1c) livrée via un hook npm preinstall qui s'exécute par le runtime Bun, lit la mémoire du runner GitHub Actions via /proc/[pid]/mem pour voler les secrets CI/CD et collecte des identifiants dans plus de 130 chemins de fichiers (AWS, GCP, Azure, PAT GitHub, jetons npm, identifiants Kubernetes et Vault, clés SSH et coffres de gestionnaires de mots de passe). Les données volées sont exfiltrées vers le dépôt GitHub antvis/G2 et vers t.m-kosche.com.",

    // --- Detail-screen additional labels ---
    "CVE:": "CVE:",
    "Malicious Packages:": "Packages malveillants :",
  },

  patterns: [
    { re: /^(\d+)\s+compromised packages found in your org$/, tpl: "$1 packages compromis trouvés dans votre organisation" },
  ],

  skip: [
    // Detected/updated timestamp text (fully dynamic).
    /^Detected: .+\|\s*Updated: /,
  ],
};
