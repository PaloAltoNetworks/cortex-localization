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
    "Supply Chain Attacks": "Lieferkettenangriffe",
    "Threat Center": "Bedrohungscenter",

    "Attack Source": "Angriffsquelle",
    "Compromised": "Kompromittiert",
    "Compromised assets": "Kompromittierte Assets",
    "Compromised packages": "Kompromittierte Pakete",
    "Compromised tools": "Kompromittierte Tools",
    "Issues resolved": "Behobene Probleme",
    "Malicious Package": "Schädliches Paket",
    "Malicious Tool": "Schädliches Tool",
    "No compromise detected": "Keine Kompromittierung erkannt",
    "Open Blog Post": "Blogbeitrag öffnen",
    "Package Explorer": "Paket-Explorer",
    "Vulnerable Package": "Anfälliges Paket",

    // --- Detail-screen common UI ---
    "Security breach": "Sicherheitsverletzung",
    "First Detected:": "Zuerst erkannt:",
    "Updated on:": "Aktualisiert am:",
    "No impact detected in your organization": "Keine Auswirkungen in Ihrer Organisation erkannt",
    "No compromised packages detected": "Keine kompromittierten Pakete erkannt",
    "Impacted assets": "Betroffene Assets",
    "No impacted assets detected": "Keine betroffenen Assets erkannt",
    "Your applications, pipelines, and repositories are not affected by this breach.":
      "Ihre Anwendungen, Pipelines und Repositorys sind von dieser Sicherheitsverletzung nicht betroffen.",
    "Impacted Packages Outside Your Org": "Betroffene Pakete außerhalb Ihrer Organisation",

    // ============================================================
    // ============================================================

    // --- ChainDrop (keyv / cacheable) ---
    "An ongoing npm supply chain worm targeting the keyv/cacheable ecosystem (keyv@6.0.0) utilizes compromised maintainer accounts to infect over 400 packages with a self-propagating \"Shai-Hulud\" malware variant. It harvests cloud, AI-agent, crypto, and infrastructure credentials while leveraging Ethereum smart contracts for dynamic C2 resolution and maintaining persistence via Claude Code hooks and VS Code tasks.":
      "Ein laufender npm-Lieferketten-Wurm, der auf das keyv/cacheable-Ökosystem (keyv@6.0.0) abzielt, nutzt kompromittierte Maintainer-Konten, um über 400 Pakete mit einer sich selbst verbreitenden Variante der Malware \"Shai-Hulud\" zu infizieren. Er erbeutet Anmeldeinformationen für Cloud, KI-Agents, Krypto und Infrastruktur, nutzt Ethereum-Smart-Contracts zur dynamischen C2-Auflösung und sichert seine Persistenz über Claude Code-Hooks und VS Code-Tasks.",

    // --- Joyfill ---
    "Compromised beta versions of two @joyfill npm packages deliver a DEV#POPPER Remote Access Trojan (RAT) via an import-time JavaScript implant. The payload executes automatically whenever the package is loaded (import/require), compromising developer workstations, CI/CD pipelines, automated scanners, and production builds without requiring specific function calls or installation scripts.":
      "Kompromittierte Betaversionen von zwei @joyfill-npm-Paketen liefern über ein beim Import ausgeführtes JavaScript-Implantat einen DEV#POPPER-Remote-Access-Trojaner (RAT) aus. Die Payload wird automatisch ausgeführt, sobald das Paket geladen wird (import/require), und kompromittiert Entwickler-Workstations, CI/CD-Pipelines, automatisierte Scanner und Produktions-Builds, ohne dass bestimmte Funktionsaufrufe oder Installationsskripte erforderlich sind.",

    // --- AsyncAPI (M-Red-Team) ---
    "A major supply chain attack compromised the @asyncapi npm ecosystem (impacting packages with over 3 million weekly downloads) by exploiting a GitHub Actions pull_request_target vulnerability to exfiltrate a bot service-account token. The attacker used the stolen token to publish 5 malicious package versions containing an import-triggered payload that fetches a massive, modular malware framework (\"M-RED-TEAM v6.4\") from IPFS to harvest credentials, establish systemd persistence, and maintain multi-channel C2 fallback networks.":
      "Ein umfangreicher Lieferkettenangriff kompromittierte das @asyncapi-npm-Ökosystem (betroffen sind Pakete mit über 3 Millionen wöchentlichen Downloads), indem eine pull_request_target-Schwachstelle in GitHub Actions ausgenutzt wurde, um das Token eines Bot-Dienstkontos zu exfiltrieren. Der Angreifer nutzte das gestohlene Token, um 5 schädliche Paketversionen mit einer beim Import ausgelösten Payload zu veröffentlichen, die ein umfangreiches, modulares Malware-Framework (\"M-RED-TEAM v6.4\") von IPFS abruft, um Anmeldeinformationen zu erbeuten, Persistenz über systemd herzustellen und mehrkanalige C2-Fallback-Netzwerke aufrechtzuerhalten.",

    // --- Leo Platform ---
    "An automated supply chain attack compromised 20 npm packages in the Leo Platform ecosystem within a 3-second window, impacting ~13,600 weekly downloads. Attributed to the \"Miasma\" threat actor, this targeted campaign utilizes a scriptless binding.gyp install hook (\"Phantom Gyp\") to execute obfuscated malware. The payload scrapes process memory for log-masked CI secrets, sweeps multi-cloud credentials, exfiltrates data stealthily via GitHub GraphQL commits, and automatically self-propagates across accessible npm packages.":
      "Ein automatisierter Lieferkettenangriff kompromittierte innerhalb von 3 Sekunden 20 npm-Pakete im Leo Platform-Ökosystem und betraf rund 13.600 wöchentliche Downloads. Diese gezielte Kampagne, die dem Bedrohungsakteur \"Miasma\" zugeschrieben wird, nutzt einen skriptlosen binding.gyp-Installations-Hook (\"Phantom Gyp\"), um verschleierte Malware auszuführen. Die Payload durchsucht den Prozessspeicher nach in Logs maskierten CI-Secrets, sammelt Anmeldeinformationen für mehrere Clouds, exfiltriert Daten unauffällig über GitHub GraphQL-Commits und verbreitet sich automatisch über zugängliche npm-Pakete weiter.",

    // --- easy-day-js (Mastra AI) ---
    "On June 17, 2026, the @mastra npm organization was compromised via account takeover (ehindero). Rather than injecting code directly, the attacker swapped the dayjs dependency for an attacker-controlled typosquat, easy-day-js, across 144 @mastra packages (est. ~8M weekly / ~29M monthly downloads). The clean bait easy-day-js@1.11.21 was pinned as ^1.11.21, so npm auto-resolved to the malicious easy-day-js@1.11.22, whose obfuscated postinstall dropper (setup.cjs) disabled TLS verification, fetched a stage-2 payload from 23.254.164.92:8000, spawned it as a detached process pointing at C2 23.254.164.123:443 (credential and crypto-wallet theft), and self-deleted to destroy forensic evidence.":
      "Am 17. Juni 2026 wurde die npm-Organisation @mastra durch eine Kontoübernahme (ehindero) kompromittiert. Anstatt Code direkt einzuschleusen, ersetzte der Angreifer die Abhängigkeit dayjs in 144 @mastra-Paketen (geschätzt ca. 8 Mio. wöchentliche / ca. 29 Mio. monatliche Downloads) durch den von ihm kontrollierten Typosquat easy-day-js. Der unauffällige Köder easy-day-js@1.11.21 war als ^1.11.21 angegeben, sodass npm automatisch auf das schädliche easy-day-js@1.11.22 auflöste, dessen verschleierter postinstall-Dropper (setup.cjs) die TLS-Überprüfung deaktivierte, eine Stage-2-Payload von 23.254.164.92:8000 abrief, diese als losgelösten Prozess mit Verbindung zum C2 23.254.164.123:443 startete (Diebstahl von Anmeldeinformationen und Krypto-Wallets) und sich anschließend selbst löschte, um forensische Spuren zu vernichten.",

    // --- Laravel-Lang ---
    "A threat actor compromised four popular Laravel-Lang Composer packages by rewriting every existing git tag to point to a new malicious commit, ensuring no version remained safe. This commit altered Composer's autoload configuration, causing the payload to execute automatically the moment an application starts up. Once triggered, the payload drops a hidden binary to massively exfiltrate sensitive data—including cloud credentials, environment variables, and security tokens—before deleting itself to evade forensic analysis.":
      "Ein Bedrohungsakteur kompromittierte vier beliebte Laravel-Lang-Composer-Pakete, indem er jedes vorhandene Git-Tag so umschrieb, dass es auf einen neuen schädlichen Commit verweist, sodass keine Version mehr sicher war. Dieser Commit änderte die Autoload-Konfiguration von Composer, wodurch die Payload automatisch beim Start einer Anwendung ausgeführt wird. Nach dem Auslösen legt die Payload eine versteckte Binärdatei ab, um in großem Umfang sensible Daten zu exfiltrieren – darunter Cloud-Anmeldeinformationen, Umgebungsvariablen und Sicherheitstoken –, bevor sie sich selbst löscht, um einer forensischen Analyse zu entgehen.",

    // --- Node-IPC Attack ---
    "Malicious versions of the node-ipc npm package were published, containing an obfuscated payload designed to steal cloud credentials, SSH keys, and CI/CD secrets. The attack exploited a compromised or rogue maintainer account to push malicious releases under the legitimate package name, reaching downstream consumers via direct and transitive dependencies.":
      "Es wurden schädliche Versionen des npm-Pakets node-ipc veröffentlicht, die eine verschleierte Payload zum Diebstahl von Cloud-Anmeldeinformationen, SSH-Schlüsseln und CI/CD-Secrets enthielten. Der Angriff nutzte ein kompromittiertes oder bösartiges Maintainer-Konto, um schädliche Releases unter dem legitimen Paketnamen zu veröffentlichen, und erreichte nachgelagerte Nutzer über direkte und transitive Abhängigkeiten.",

    // --- Mini Shai-Hulud (TanStack) ---
    "Coordinated supply chain attack against npm and PyPI ecosystems, compromising packages across multiple namespaces (notably TanStack, Mistral AI, Guardrails AI, and UiPath). Attackers exploited GitHub Actions workflow vulnerabilities to publish malicious package versions without needing to steal npm credentials. The payload acts as a credential stealer and self-propagating worm, abusing CI/CD trust to spread laterally across maintainer accounts and dependent repositories.":
      "Koordinierter Lieferkettenangriff auf die npm- und PyPI-Ökosysteme, bei dem Pakete in mehreren Namespaces kompromittiert wurden (insbesondere TanStack, Mistral AI, Guardrails AI und UiPath). Die Angreifer nutzten Schwachstellen in GitHub Actions-Workflows aus, um schädliche Paketversionen zu veröffentlichen, ohne npm-Anmeldeinformationen stehlen zu müssen. Die Payload fungiert als Credential Stealer und sich selbst verbreitender Wurm und missbraucht das CI/CD-Vertrauen, um sich lateral über Maintainer-Konten und abhängige Repositorys auszubreiten.",

    // --- Axios NPM ---
    "Attacker hijacked npm account of axios maintainer jasonsaayman and published axios@1.14.1 and axios@0.30.4 with injected dependency plain-crypto-js@4.2.1 (MAL-2026-2306) containing a cross-platform RAT dropper.":
      "Ein Angreifer übernahm das npm-Konto des axios-Maintainers jasonsaayman und veröffentlichte axios@1.14.1 und axios@0.30.4 mit der eingeschleusten Abhängigkeit plain-crypto-js@4.2.1 (MAL-2026-2306), die einen plattformübergreifenden RAT-Dropper enthält.",
    "On March 30-31, 2026, an unknown threat actor compromised the npm account of `jasonsaayman`, the primary maintainer of the axios HTTP client library — the most popular JavaScript HTTP client with over 100 million weekly downloads. The attacker published two malicious versions (axios@1.14.1 and axios@0.30.4) that injected a hidden dependency (plain-crypto-js@4.2.1) containing a cross-platform Remote Access Trojan (RAT) dropper.":
      "Am 30. und 31. März 2026 kompromittierte ein unbekannter Bedrohungsakteur das npm-Konto von `jasonsaayman`, dem Haupt-Maintainer der HTTP-Client-Bibliothek axios – des beliebtesten JavaScript-HTTP-Clients mit über 100 Millionen wöchentlichen Downloads. Der Angreifer veröffentlichte zwei schädliche Versionen (axios@1.14.1 und axios@0.30.4), die eine versteckte Abhängigkeit (plain-crypto-js@4.2.1) mit einem plattformübergreifenden Remote-Access-Trojaner-Dropper (RAT) einschleusten.",

    // --- Axios NPM ---
    "Attacker hijacked npm account of axios maintainer jasonsaayman and published axios@1.14.1 and axios@0.30.4 with injected dependency plain-crypto-js@4.2.1 (MAL-2026-2306) containing a cross-platform RAT dropper. On March 30-31, 2026, an unknown threat actor compromised the npm account of `jasonsaayman`, the primary maintainer of the axios HTTP client library — the most popular JavaScript HTTP client with over 100 million weekly downloads. The attacker published two malicious versions (axios@1.14.1 and axios@0.30.4) that injected a hidden dependency (plain-crypto-js@4.2.1) containing a cross-platform Remote Access Trojan (RAT) dropper.":
      "Ein Angreifer übernahm das npm-Konto des axios-Maintainers jasonsaayman und veröffentlichte axios@1.14.1 und axios@0.30.4 mit der eingeschleusten Abhängigkeit plain-crypto-js@4.2.1 (MAL-2026-2306), die einen plattformübergreifenden RAT-Dropper enthält. Am 30. und 31. März 2026 kompromittierte ein unbekannter Bedrohungsakteur das npm-Konto von `jasonsaayman`, dem Haupt-Maintainer der HTTP-Client-Bibliothek axios – des beliebtesten JavaScript-HTTP-Clients mit über 100 Millionen wöchentlichen Downloads. Der Angreifer veröffentlichte zwei schädliche Versionen (axios@1.14.1 und axios@0.30.4), die eine versteckte Abhängigkeit (plain-crypto-js@4.2.1) mit einem plattformübergreifenden Remote-Access-Trojaner-Dropper (RAT) einschleusten.",

    // --- Telnyx ---
    "TeamPCP hijacked PyPI credentials (from Trivy compromise) and published telnyx@4.87.1/4.87.2 (MAL-2026-2254) with WAV steganography payloads. Attackers published backdoored Python SDK versions (4.87.1/2) containing a malicious payload hidden in a WAV file. The attack aimed to exfiltrate SSH keys and Kubernetes tokens to gain persistent cloud infrastructure access. It was a downstream effect of the LiteLLM breach earlier that week.":
      "TeamPCP übernahm PyPI-Anmeldeinformationen (aus der Trivy-Kompromittierung) und veröffentlichte telnyx@4.87.1/4.87.2 (MAL-2026-2254) mit WAV-Steganografie-Payloads. Die Angreifer veröffentlichten mit einer Hintertür versehene Python-SDK-Versionen (4.87.1/2), die eine in einer WAV-Datei versteckte schädliche Payload enthielten. Ziel des Angriffs war es, SSH-Schlüssel und Kubernetes-Token zu exfiltrieren, um dauerhaften Zugriff auf die Cloud-Infrastruktur zu erlangen. Es handelte sich um eine Folgewirkung der LiteLLM-Sicherheitsverletzung Anfang derselben Woche.",

    // --- LiteLLM ---
    "TeamPCP used stolen PyPI tokens to upload litellm@1.82.7/1.82.8 with .pth file that auto-executes on every Python process to harvest LLM API keys. Malicious versions (1.82.7/8) were uploaded to PyPI using stolen maintainer tokens to inject code via .pth files. The goal was to harvest API keys for major LLM providers (OpenAI, Anthropic) and cloud provider secrets. This attack effectively targeted the \"brain\" of many AI-integrated applications.":
      "TeamPCP nutzte gestohlene PyPI-Token, um litellm@1.82.7/1.82.8 mit einer .pth-Datei hochzuladen, die bei jedem Python-Prozess automatisch ausgeführt wird, um LLM-API-Schlüssel zu erbeuten. Die schädlichen Versionen (1.82.7/8) wurden mit gestohlenen Maintainer-Token auf PyPI hochgeladen, um Code über .pth-Dateien einzuschleusen. Ziel war es, API-Schlüssel großer LLM-Anbieter (OpenAI, Anthropic) sowie Secrets von Cloud-Anbietern zu erbeuten. Dieser Angriff zielte effektiv auf das \"Gehirn\" vieler KI-integrierter Anwendungen.",

    // --- Checkmarx KICS ---
    "TeamPCP used stolen GitHub PATs to force-push to all 35 tags of Checkmarx/kics-github-action and poisoned ast-github-action@v2.3.28. Threat actor TeamPCP hijacked GitHub Action tags to inject credential-stealing scripts into CI/CD pipelines. The objective was to intercept GitHub PATs and cloud environment variables as they were processed during security scans. This allowed the attackers to move laterally into other high-value developer tools.":
      "TeamPCP nutzte gestohlene GitHub-PATs, um per Force-Push alle 35 Tags von Checkmarx/kics-github-action zu überschreiben, und manipulierte ast-github-action@v2.3.28. Der Bedrohungsakteur TeamPCP kaperte GitHub Action-Tags, um Skripte zum Diebstahl von Anmeldeinformationen in CI/CD-Pipelines einzuschleusen. Ziel war es, GitHub-PATs und Cloud-Umgebungsvariablen abzufangen, während sie bei Sicherheitsscans verarbeitet wurden. Dadurch konnten sich die Angreifer lateral zu weiteren hochwertigen Entwicklertools bewegen.",

    // --- Trivy ---
    "TeamPCP exploited incomplete credential rotation to force-push kamikaze.sh to 76/77 tags in aquasecurity/trivy-action. The core of the \"March Madness\" campaign, where attackers force-pushed malicious commits to 76 of 77 version tags of trivy-action. The malware scraped runner memory for secrets and exfiltrated them to a typosquatted domain (scan.aquasecurtiy[.]org). This compromise provided the \"master keys\" that TeamPCP used to unlock the subsequent attacks on KICS and LiteLLM.":
      "TeamPCP nutzte eine unvollständige Rotation von Anmeldeinformationen aus, um kamikaze.sh per Force-Push auf 76 von 77 Tags in aquasecurity/trivy-action zu übertragen. Dies war der Kern der Kampagne \"March Madness\", bei der Angreifer schädliche Commits per Force-Push auf 76 von 77 Versions-Tags von trivy-action übertrugen. Die Malware durchsuchte den Runner-Speicher nach Secrets und exfiltrierte diese an eine per Typosquatting registrierte Domäne (scan.aquasecurtiy[.]org). Diese Kompromittierung lieferte die \"Generalschlüssel\", mit denen TeamPCP die nachfolgenden Angriffe auf KICS und LiteLLM ermöglichte.",

    // --- MongoBleed ---
    "CVE-2025-14847 (CVSS 8.7) unauthenticated memory disclosure in MongoDB Server zlib handling affecting versions 4.4.0-8.2.2. MongoBleed is a supply chain attack involving malicious npm packages designed to exfiltrate MongoDB credentials and sensitive runtime data once deployed. The affected packages appeared benign but executed malicious logic during application runtime.":
      "CVE-2025-14847 (CVSS 8.7): nicht authentifizierte Offenlegung von Speicherinhalten bei der zlib-Verarbeitung in MongoDB Server, betroffen sind die Versionen 4.4.0-8.2.2. MongoBleed ist ein Lieferkettenangriff mit schädlichen npm-Paketen, die darauf ausgelegt sind, nach der Bereitstellung MongoDB-Anmeldeinformationen und sensible Laufzeitdaten zu exfiltrieren. Die betroffenen Pakete wirkten harmlos, führten jedoch während der Laufzeit der Anwendung schädliche Logik aus.",

    // --- React2Shell ---
    "CVE-2025-55182 (CVSS 10.0) insecure deserialization in React Server Components Flight protocol in react-server-dom-webpack/parcel/turbopack 19.0.0-19.2.0. React2Shell is a class of application-layer exploit patterns where unsafe React server-side rendering (SSR) or dynamic rendering logic enables remote code execution. While not tied to a single package compromise, it represents a recurring attack vector that expands the application attack surface through frontend frameworks used in backend contexts.":
      "CVE-2025-55182 (CVSS 10.0): unsichere Deserialisierung im Flight-Protokoll von React Server Components in react-server-dom-webpack/parcel/turbopack 19.0.0-19.2.0. React2Shell bezeichnet eine Klasse von Exploit-Mustern auf Anwendungsebene, bei denen unsicheres serverseitiges Rendering (SSR) oder dynamische Rendering-Logik in React Remotecodeausführung ermöglicht. Obwohl nicht an die Kompromittierung eines einzelnen Pakets gebunden, stellt es einen wiederkehrenden Angriffsvektor dar, der die Angriffsfläche von Anwendungen durch in Backend-Kontexten eingesetzte Frontend-Frameworks vergrößert.",

    // --- qix ---
    "Compromised qix maintainer account injected credential-stealing into 24+ packages: chalk@5.6.1 (MAL-2025-46969) debug@4.4.2 (MAL-2025-46974) and 15+ more. The qix supply chain attack stemmed from a compromised maintainer account that injected credential-stealing logic into trusted npm packages. The malicious versions propagated quickly through automated dependency updates.":
      "Ein kompromittiertes qix-Maintainer-Konto schleuste Code zum Diebstahl von Anmeldeinformationen in über 24 Pakete ein: chalk@5.6.1 (MAL-2025-46969), debug@4.4.2 (MAL-2025-46974) und mehr als 15 weitere. Der qix-Lieferkettenangriff ging von einem kompromittierten Maintainer-Konto aus, das Logik zum Diebstahl von Anmeldeinformationen in vertrauenswürdige npm-Pakete einschleuste. Die schädlichen Versionen verbreiteten sich schnell über automatisierte Abhängigkeitsaktualisierungen.",

    // --- Shai-Hulud v1 & v2 ---
    "npm phishing campaign led to self-replicating worm via post-install scripts spreading to hundreds of packages including @ctrl/tinycolor (MAL-2025-47141). Shai-Hulud is a multi-stage supply chain attack campaign targeting open-source ecosystems through malicious packages, dependency confusion, and trusted distribution channels. Multiple waves have been observed, with expanding scope and evolving techniques across package registries and tooling.":
      "Eine npm-Phishing-Kampagne führte zu einem sich selbst replizierenden Wurm, der sich über post-install-Skripte auf Hunderte von Paketen ausbreitete, darunter @ctrl/tinycolor (MAL-2025-47141). Shai-Hulud ist eine mehrstufige Lieferketten-Angriffskampagne, die Open-Source-Ökosysteme über schädliche Pakete, Dependency Confusion und vertrauenswürdige Verteilungskanäle angreift. Es wurden mehrere Wellen mit wachsendem Umfang und sich weiterentwickelnden Techniken über Paket-Registrys und Tools hinweg beobachtet.",

    // --- nx (s1ngularity) ---
    "Compromised npm account published malicious @nx 20.9.0-21.8.0 and @nx/devkit (MAL-2025-41436) with credential-stealing code. The nx (s1ngularity) incident involved the introduction of malicious code into a package within the Nx tooling ecosystem, enabling unauthorized behavior during installation or execution phases of the build process.":
      "Über ein kompromittiertes npm-Konto wurden schädliche Versionen von @nx 20.9.0-21.8.0 und @nx/devkit (MAL-2025-41436) mit Code zum Diebstahl von Anmeldeinformationen veröffentlicht. Beim Vorfall nx (s1ngularity) wurde schädlicher Code in ein Paket des Nx-Tooling-Ökosystems eingeschleust, der während der Installations- oder Ausführungsphase des Build-Prozesses unautorisiertes Verhalten ermöglichte.",

    // --- TJ-Actions ---
    "Multi-stage: spotbugs/sonar-findbugs pull_request_target exploit leaked PAT chained through reviewdog to tj-actions/changed-files (CVE-2025-30066) compromising 23000+ repos. The TJ-Actions breach involved the compromise of a widely used GitHub Actions workflow, creating risk of secret exposure and pipeline manipulation in CI/CD environments. Impact depended on workflow configuration, token scope, and pinning practices.":
      "Mehrstufig: Ein pull_request_target-Exploit in spotbugs/sonar-findbugs ließ ein PAT durchsickern, das über reviewdog bis zu tj-actions/changed-files (CVE-2025-30066) weiterverkettet wurde und über 23.000 Repositorys kompromittierte. Bei der TJ-Actions-Sicherheitsverletzung wurde ein weit verbreiteter GitHub Actions-Workflow kompromittiert, wodurch in CI/CD-Umgebungen das Risiko der Offenlegung von Secrets und der Manipulation von Pipelines entstand. Die Auswirkungen hingen von Workflow-Konfiguration, Token-Geltungsbereich und Pinning-Praktiken ab.",

    // --- Log4Shell (Log4j) ---
    // Note: the actual display appends notes unrelated to the security content, apparently
    // left over from internal testing (e.g. "[PubSub E2E test bump ...]"). To make translation
    // still apply, the dictionary key includes that text verbatim (the note itself stays untranslated).
    "CVE-2021-44228 (CVSS 10.0) JNDI injection in Apache Log4j 2 (log4j-core 2.0-beta9 to 2.14.1) allowing unauthenticated RCE via ${jndi:ldap://} in log messages. Log4Shell is a critical remote code execution vulnerability in the widely used Log4j logging library that allows attackers to execute arbitrary code by injecting specially crafted log messages. Due to Log4j's deep presence across application stacks, the vulnerability enabled widespread, internet-scale exploitation shortly after disclosure. [PubSub E2E test bump v5 - 2026-05-26] [v10: BQ stats verification bump 2026-06-04] [v11: Ed25519-sha256 streaming test 2026-06-11]":
      "CVE-2021-44228 (CVSS 10.0): JNDI-Injection in Apache Log4j 2 (log4j-core 2.0-beta9 bis 2.14.1), die nicht authentifizierte RCE über ${jndi:ldap://} in Protokollnachrichten ermöglicht. Log4Shell ist eine kritische Schwachstelle zur Remotecodeausführung in der weit verbreiteten Protokollierungsbibliothek Log4j, mit der Angreifer durch Einschleusen speziell präparierter Protokollnachrichten beliebigen Code ausführen können. Aufgrund der tiefen Verankerung von Log4j in Anwendungs-Stacks ermöglichte die Schwachstelle kurz nach ihrer Offenlegung eine breite Ausnutzung im Internetmaßstab. [PubSub E2E test bump v5 - 2026-05-26] [v10: BQ stats verification bump 2026-06-04] [v11: Ed25519-sha256 streaming test 2026-06-11]",

    // --- XZ Utils ---
    "Jia Tan (state-sponsored) social-engineered maintainer trust over 2+ years then backdoored xz-utils 5.6.0/5.6.1 (CVE-2024-3094) build system to compromise liblzma for SSH access.":
      "Jia Tan (staatlich unterstützt) erschlich sich über mehr als 2 Jahre per Social Engineering das Vertrauen der Maintainer und versah dann das Build-System von xz-utils 5.6.0/5.6.1 (CVE-2024-3094) mit einer Hintertür, um liblzma für SSH-Zugriff zu kompromittieren.",

    // --- Shai-Hulud npm Resurgence (AntV Payload Reactivation) ---
    "The Shai-Hulud npm worm payload from the May 19, 2026 @antv compromise resurfaced 111 days later—the longest dormancy-to-reactivation gap observed for this payload. On September 7, 2026 a single npm account published four packages carrying the identical malicious file hash (e37e3ddeeaaa9e0c4fdbcb829b4895a6521031c80053fc436625b61e6ee5b1a6) already fingerprinted months earlier. The payload behaves as before: a self-propagating worm that steals CI/CD and cloud credentials and republishes itself to additional packages.":
      "Die Payload des npm-Wurms Shai-Hulud aus der @antv-Kompromittierung vom 19. Mai 2026 tauchte 111 Tage später wieder auf – die längste bei dieser Payload beobachtete Zeitspanne zwischen Ruhephase und Reaktivierung. Am 7. September 2026 veröffentlichte ein einzelnes npm-Konto vier Pakete mit dem identischen schädlichen Datei-Hash (e37e3ddeeaaa9e0c4fdbcb829b4895a6521031c80053fc436625b61e6ee5b1a6), der bereits Monate zuvor erfasst worden war. Die Payload verhält sich wie zuvor: ein sich selbst verbreitender Wurm, der CI/CD- und Cloud-Anmeldeinformationen stiehlt und sich in weiteren Paketen erneut veröffentlicht.",

    // --- Shai-Hulud – Trinitite ---
    "Shai-Hulud malware variant \"Trinitite\" compromised @7nohe/openapi-react-query-codegen, a TanStack query generator package with 128k weekly downloads. Eight malicious versions were published across four major release lines during August 28-29, 2026. Stolen credentials are exfiltrated encrypted to attacker-controlled GitHub repositories. The first-stage payload uses Function() instead of eval() for code execution and XOR instead of ROT13 for deobfuscation, with new public encryption keys making attribution harder. The malware uses Bun 1.4.0 and contains logic to download a C2 payload from a remote server.":
      "Die Shai-Hulud-Malware-Variante \"Trinitite\" kompromittierte @7nohe/openapi-react-query-codegen, ein TanStack-Query-Generator-Paket mit 128.000 wöchentlichen Downloads. Am 28. und 29. August 2026 wurden acht schädliche Versionen über vier Haupt-Release-Linien hinweg veröffentlicht. Gestohlene Anmeldeinformationen werden verschlüsselt an vom Angreifer kontrollierte GitHub-Repositorys exfiltriert. Die Payload der ersten Stufe verwendet Function() statt eval() zur Codeausführung und XOR statt ROT13 zur Entschleierung; neue öffentliche Verschlüsselungsschlüssel erschweren die Zuordnung. Die Malware verwendet Bun 1.4.0 und enthält Logik zum Herunterladen einer C2-Payload von einem Remote-Server.",

    // --- Rust Arrayref, Internment, and Append-only-vec ---
    "Rust crates.io supply chain attack: a compromised maintainer account poisoned three widely-used crates from the same owner within 23 minutes (arrayref@0.3.10, internment@0.8.7, append-only-vec@0.1.9). The malicious arrayref@0.3.10 (a utility with ~245M all-time downloads sitting under tiny-skia, winit, blake3, and Solana/Ethereum tooling) injected a first-ever dependency on proc-macro1@1.0.107, a typosquat of proc-macro2 published minutes earlier by an account impersonating David Tolnay. The dropper's build.rs runs at compile time: it downloads a second-stage binary over TLS with certificate validation disabled, writes it to a temp directory, and executes it with a C2 address argument, so simply building any project during the 07:11-09:25 UTC exposure window could yield silent remote code execution. The attacker also yanked all other modern arrayref releases (0.3.5-0.3.9) to steer developers toward the single non-yanked malicious version 0.3.10.":
      "Rust-Lieferkettenangriff auf crates.io: Ein kompromittiertes Maintainer-Konto manipulierte innerhalb von 23 Minuten drei weit verbreitete Crates desselben Besitzers (arrayref@0.3.10, internment@0.8.7, append-only-vec@0.1.9). Das schädliche arrayref@0.3.10 (ein Hilfsprogramm mit insgesamt ca. 245 Mio. Downloads, das unter tiny-skia, winit, blake3 sowie Solana/Ethereum-Tools liegt) fügte erstmals eine Abhängigkeit von proc-macro1@1.0.107 hinzu, einem Typosquat von proc-macro2, der wenige Minuten zuvor von einem Konto veröffentlicht wurde, das sich als David Tolnay ausgab. Die build.rs des Droppers wird beim Kompilieren ausgeführt: Sie lädt eine Binärdatei der zweiten Stufe über TLS mit deaktivierter Zertifikatsvalidierung herunter, schreibt sie in ein temporäres Verzeichnis und führt sie mit einer C2-Adresse als Argument aus. Daher konnte bereits das Erstellen eines beliebigen Projekts während des Expositionszeitraums von 07:11-09:25 UTC zu einer unbemerkten Remotecodeausführung führen. Der Angreifer zog außerdem alle anderen aktuellen arrayref-Releases (0.3.5-0.3.9) zurück (yank), um Entwickler auf die einzige nicht zurückgezogene schädliche Version 0.3.10 zu lenken.",

    // --- AntV npm Compromise (Mini Shai-Hulud Wave 5) ---
    "Compromised npm account \"atool\" poisoned 637 versions across 317 packages—279 in the @antv data visualization ecosystem plus timeago.js, echarts-for-react, size-sensor and others (collectively ~16M weekly downloads). Attributed to threat group TeamPCP as Wave 5 of the \"Mini Shai-Hulud\" campaign, the malicious versions were published in two waves on May 19, 2026 between 01:39 and 02:06 UTC. Each package carries a 498KB obfuscated JavaScript payload (SHA256 a68dd1e6a6e35ec3771e1f94fe796f55dfe65a2b94560516ff4ac189390dfa1c) delivered via an npm preinstall hook that executes through the Bun runtime, reads GitHub Actions runner memory via /proc/[pid]/mem to steal CI/CD secrets, and harvests credentials from 130+ file paths (AWS, GCP, Azure, GitHub PATs, npm tokens, Kubernetes and Vault credentials, SSH keys, and password-manager vaults). Stolen data is exfiltrated to the antvis/G2 GitHub repo and to t.m-kosche.com.":
      "Das kompromittierte npm-Konto \"atool\" manipulierte 637 Versionen in 317 Paketen – 279 davon im Datenvisualisierungs-Ökosystem @antv sowie timeago.js, echarts-for-react, size-sensor und weitere (zusammen ca. 16 Mio. wöchentliche Downloads). Die schädlichen Versionen, die der Bedrohungsgruppe TeamPCP als Welle 5 der Kampagne \"Mini Shai-Hulud\" zugeschrieben werden, wurden am 19. Mai 2026 zwischen 01:39 und 02:06 UTC in zwei Wellen veröffentlicht. Jedes Paket enthält eine 498 KB große, verschleierte JavaScript-Payload (SHA256 a68dd1e6a6e35ec3771e1f94fe796f55dfe65a2b94560516ff4ac189390dfa1c), die über einen npm-preinstall-Hook ausgeliefert wird, über die Bun-Runtime ausgeführt wird, den Speicher von GitHub Actions-Runnern über /proc/[pid]/mem ausliest, um CI/CD-Secrets zu stehlen, und Anmeldeinformationen aus über 130 Dateipfaden erbeutet (AWS, GCP, Azure, GitHub-PATs, npm-Token, Kubernetes- und Vault-Anmeldeinformationen, SSH-Schlüssel und Passwort-Manager-Tresore). Gestohlene Daten werden an das GitHub-Repository antvis/G2 und an t.m-kosche.com exfiltriert.",

    // --- Detail-screen additional labels ---
    "CVE:": "CVE:",
    "Malicious Packages:": "Schädliche Pakete:",
  },

  patterns: [
    { re: /^(\d+)\s+compromised packages found in your org$/, tpl: "$1 kompromittierte Pakete in Ihrer Organisation gefunden" },
  ],

  skip: [
    // Detected/updated timestamp text (fully dynamic).
    /^Detected: .+\|\s*Updated: /,
  ],
};
