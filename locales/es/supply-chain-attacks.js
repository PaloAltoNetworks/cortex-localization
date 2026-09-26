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
    "Supply Chain Attacks": "Ataques a la cadena de suministro",
    "Threat Center": "Centro de amenazas",

    "Attack Source": "Origen del ataque",
    "Compromised": "Comprometido",
    "Compromised assets": "Activos comprometidos",
    "Compromised packages": "Paquetes comprometidos",
    "Compromised tools": "Herramientas comprometidas",
    "Issues resolved": "Incidencias resueltas",
    "Malicious Package": "Paquete malicioso",
    "Malicious Tool": "Herramienta maliciosa",
    "No compromise detected": "No se detectó ningún compromiso",
    "Open Blog Post": "Abrir entrada del blog",
    "Package Explorer": "Explorador de paquetes",
    "Vulnerable Package": "Paquete vulnerable",

    // --- Detail-screen common UI ---
    "Security breach": "Brecha de seguridad",
    "First Detected:": "Detectado por primera vez:",
    "Updated on:": "Actualizado el:",
    "No impact detected in your organization": "No se detectó ningún impacto en su organización",
    "No compromised packages detected": "No se detectaron paquetes comprometidos",
    "Impacted assets": "Activos afectados",
    "No impacted assets detected": "No se detectaron activos afectados",
    "Your applications, pipelines, and repositories are not affected by this breach.":
      "Sus aplicaciones, pipelines y repositorios no se ven afectados por esta brecha.",
    "Impacted Packages Outside Your Org": "Paquetes afectados fuera de su organización",

    // ============================================================
    // ============================================================

    // --- ChainDrop (keyv / cacheable) ---
    "An ongoing npm supply chain worm targeting the keyv/cacheable ecosystem (keyv@6.0.0) utilizes compromised maintainer accounts to infect over 400 packages with a self-propagating \"Shai-Hulud\" malware variant. It harvests cloud, AI-agent, crypto, and infrastructure credentials while leveraging Ethereum smart contracts for dynamic C2 resolution and maintaining persistence via Claude Code hooks and VS Code tasks.":
      "Un gusano de cadena de suministro de npm en curso dirigido al ecosistema keyv/cacheable (keyv@6.0.0) utiliza cuentas de mantenedores comprometidas para infectar más de 400 paquetes con una variante autopropagable del malware \"Shai-Hulud\". Recopila credenciales de nube, agentes de IA, criptomonedas e infraestructura, a la vez que aprovecha contratos inteligentes de Ethereum para la resolución dinámica de C2 y mantiene la persistencia mediante hooks de Claude Code y tareas de VS Code.",

    // --- Joyfill ---
    "Compromised beta versions of two @joyfill npm packages deliver a DEV#POPPER Remote Access Trojan (RAT) via an import-time JavaScript implant. The payload executes automatically whenever the package is loaded (import/require), compromising developer workstations, CI/CD pipelines, automated scanners, and production builds without requiring specific function calls or installation scripts.":
      "Las versiones beta comprometidas de dos paquetes npm de @joyfill distribuyen un troyano de acceso remoto (RAT) DEV#POPPER mediante un implante de JavaScript que se ejecuta al importar. La carga útil se ejecuta automáticamente cada vez que se carga el paquete (import/require), lo que compromete estaciones de trabajo de desarrolladores, pipelines de CI/CD, escáneres automatizados y compilaciones de producción sin necesidad de llamadas a funciones específicas ni scripts de instalación.",

    // --- AsyncAPI (M-Red-Team) ---
    "A major supply chain attack compromised the @asyncapi npm ecosystem (impacting packages with over 3 million weekly downloads) by exploiting a GitHub Actions pull_request_target vulnerability to exfiltrate a bot service-account token. The attacker used the stolen token to publish 5 malicious package versions containing an import-triggered payload that fetches a massive, modular malware framework (\"M-RED-TEAM v6.4\") from IPFS to harvest credentials, establish systemd persistence, and maintain multi-channel C2 fallback networks.":
      "Un importante ataque a la cadena de suministro comprometió el ecosistema npm de @asyncapi (que afecta a paquetes con más de 3 millones de descargas semanales) al explotar una vulnerabilidad de pull_request_target de GitHub Actions para exfiltrar un token de cuenta de servicio de un bot. El atacante usó el token robado para publicar 5 versiones de paquetes maliciosas que contenían una carga útil activada al importar, la cual descarga desde IPFS un enorme framework de malware modular (\"M-RED-TEAM v6.4\") para recopilar credenciales, establecer persistencia con systemd y mantener redes de respaldo de C2 multicanal.",

    // --- Leo Platform ---
    "An automated supply chain attack compromised 20 npm packages in the Leo Platform ecosystem within a 3-second window, impacting ~13,600 weekly downloads. Attributed to the \"Miasma\" threat actor, this targeted campaign utilizes a scriptless binding.gyp install hook (\"Phantom Gyp\") to execute obfuscated malware. The payload scrapes process memory for log-masked CI secrets, sweeps multi-cloud credentials, exfiltrates data stealthily via GitHub GraphQL commits, and automatically self-propagates across accessible npm packages.":
      "Un ataque automatizado a la cadena de suministro comprometió 20 paquetes npm del ecosistema Leo Platform en un intervalo de 3 segundos, lo que afectó a unas 13.600 descargas semanales. Atribuida al actor de amenazas \"Miasma\", esta campaña dirigida utiliza un hook de instalación binding.gyp sin scripts (\"Phantom Gyp\") para ejecutar malware ofuscado. La carga útil extrae de la memoria de los procesos secretos de CI enmascarados en los registros, recopila credenciales de múltiples nubes, exfiltra datos de forma sigilosa mediante commits de GitHub GraphQL y se autopropaga automáticamente a los paquetes npm accesibles.",

    // --- easy-day-js (Mastra AI) ---
    "On June 17, 2026, the @mastra npm organization was compromised via account takeover (ehindero). Rather than injecting code directly, the attacker swapped the dayjs dependency for an attacker-controlled typosquat, easy-day-js, across 144 @mastra packages (est. ~8M weekly / ~29M monthly downloads). The clean bait easy-day-js@1.11.21 was pinned as ^1.11.21, so npm auto-resolved to the malicious easy-day-js@1.11.22, whose obfuscated postinstall dropper (setup.cjs) disabled TLS verification, fetched a stage-2 payload from 23.254.164.92:8000, spawned it as a detached process pointing at C2 23.254.164.123:443 (credential and crypto-wallet theft), and self-deleted to destroy forensic evidence.":
      "El 17 de junio de 2026, la organización npm @mastra se vio comprometida mediante la apropiación de una cuenta (ehindero). En lugar de inyectar código directamente, el atacante sustituyó la dependencia dayjs por un typosquat controlado por él, easy-day-js, en 144 paquetes de @mastra (aprox. 8 M de descargas semanales / 29 M mensuales, estimadas). El señuelo limpio easy-day-js@1.11.21 estaba fijado como ^1.11.21, por lo que npm resolvió automáticamente la versión maliciosa easy-day-js@1.11.22, cuyo dropper postinstall ofuscado (setup.cjs) deshabilitaba la verificación TLS, descargaba una carga útil de segunda etapa desde 23.254.164.92:8000, la lanzaba como proceso separado que apuntaba al C2 23.254.164.123:443 (robo de credenciales y monederos de criptomonedas) y se autoeliminaba para destruir las pruebas forenses.",

    // --- Laravel-Lang ---
    "A threat actor compromised four popular Laravel-Lang Composer packages by rewriting every existing git tag to point to a new malicious commit, ensuring no version remained safe. This commit altered Composer's autoload configuration, causing the payload to execute automatically the moment an application starts up. Once triggered, the payload drops a hidden binary to massively exfiltrate sensitive data—including cloud credentials, environment variables, and security tokens—before deleting itself to evade forensic analysis.":
      "Un actor de amenazas comprometió cuatro populares paquetes de Composer de Laravel-Lang reescribiendo todas las etiquetas de git existentes para que apuntaran a un nuevo commit malicioso, de modo que ninguna versión quedara segura. Este commit modificó la configuración de autoload de Composer, lo que hacía que la carga útil se ejecutara automáticamente en el momento en que se iniciaba una aplicación. Una vez activada, la carga útil deja un binario oculto para exfiltrar de forma masiva datos confidenciales, incluidas credenciales de nube, variables de entorno y tokens de seguridad, antes de autoeliminarse para evadir el análisis forense.",

    // --- Node-IPC Attack ---
    "Malicious versions of the node-ipc npm package were published, containing an obfuscated payload designed to steal cloud credentials, SSH keys, and CI/CD secrets. The attack exploited a compromised or rogue maintainer account to push malicious releases under the legitimate package name, reaching downstream consumers via direct and transitive dependencies.":
      "Se publicaron versiones maliciosas del paquete npm node-ipc que contenían una carga útil ofuscada diseñada para robar credenciales de nube, claves SSH y secretos de CI/CD. El ataque aprovechó una cuenta de mantenedor comprometida o malintencionada para publicar versiones maliciosas bajo el nombre legítimo del paquete, llegando a los consumidores posteriores a través de dependencias directas y transitivas.",

    // --- Mini Shai-Hulud (TanStack) ---
    "Coordinated supply chain attack against npm and PyPI ecosystems, compromising packages across multiple namespaces (notably TanStack, Mistral AI, Guardrails AI, and UiPath). Attackers exploited GitHub Actions workflow vulnerabilities to publish malicious package versions without needing to steal npm credentials. The payload acts as a credential stealer and self-propagating worm, abusing CI/CD trust to spread laterally across maintainer accounts and dependent repositories.":
      "Ataque coordinado a la cadena de suministro contra los ecosistemas npm y PyPI que comprometió paquetes de varios espacios de nombres (en particular TanStack, Mistral AI, Guardrails AI y UiPath). Los atacantes explotaron vulnerabilidades en flujos de trabajo de GitHub Actions para publicar versiones maliciosas de paquetes sin necesidad de robar credenciales de npm. La carga útil actúa como ladrón de credenciales y gusano autopropagable, y abusa de la confianza de CI/CD para propagarse lateralmente entre cuentas de mantenedores y repositorios dependientes.",

    // --- Axios NPM ---
    "Attacker hijacked npm account of axios maintainer jasonsaayman and published axios@1.14.1 and axios@0.30.4 with injected dependency plain-crypto-js@4.2.1 (MAL-2026-2306) containing a cross-platform RAT dropper.":
      "Un atacante secuestró la cuenta de npm del mantenedor de axios jasonsaayman y publicó axios@1.14.1 y axios@0.30.4 con la dependencia inyectada plain-crypto-js@4.2.1 (MAL-2026-2306), que contiene un dropper de RAT multiplataforma.",
    "On March 30-31, 2026, an unknown threat actor compromised the npm account of `jasonsaayman`, the primary maintainer of the axios HTTP client library — the most popular JavaScript HTTP client with over 100 million weekly downloads. The attacker published two malicious versions (axios@1.14.1 and axios@0.30.4) that injected a hidden dependency (plain-crypto-js@4.2.1) containing a cross-platform Remote Access Trojan (RAT) dropper.":
      "Entre el 30 y el 31 de marzo de 2026, un actor de amenazas desconocido comprometió la cuenta de npm de `jasonsaayman`, el principal mantenedor de la biblioteca de cliente HTTP axios, el cliente HTTP de JavaScript más popular, con más de 100 millones de descargas semanales. El atacante publicó dos versiones maliciosas (axios@1.14.1 y axios@0.30.4) que inyectaban una dependencia oculta (plain-crypto-js@4.2.1) que contiene un dropper de troyano de acceso remoto (RAT) multiplataforma.",

    // --- Axios NPM ---
    "Attacker hijacked npm account of axios maintainer jasonsaayman and published axios@1.14.1 and axios@0.30.4 with injected dependency plain-crypto-js@4.2.1 (MAL-2026-2306) containing a cross-platform RAT dropper. On March 30-31, 2026, an unknown threat actor compromised the npm account of `jasonsaayman`, the primary maintainer of the axios HTTP client library — the most popular JavaScript HTTP client with over 100 million weekly downloads. The attacker published two malicious versions (axios@1.14.1 and axios@0.30.4) that injected a hidden dependency (plain-crypto-js@4.2.1) containing a cross-platform Remote Access Trojan (RAT) dropper.":
      "Un atacante secuestró la cuenta de npm del mantenedor de axios jasonsaayman y publicó axios@1.14.1 y axios@0.30.4 con la dependencia inyectada plain-crypto-js@4.2.1 (MAL-2026-2306), que contiene un dropper de RAT multiplataforma. Entre el 30 y el 31 de marzo de 2026, un actor de amenazas desconocido comprometió la cuenta de npm de `jasonsaayman`, el principal mantenedor de la biblioteca de cliente HTTP axios, el cliente HTTP de JavaScript más popular, con más de 100 millones de descargas semanales. El atacante publicó dos versiones maliciosas (axios@1.14.1 y axios@0.30.4) que inyectaban una dependencia oculta (plain-crypto-js@4.2.1) que contiene un dropper de troyano de acceso remoto (RAT) multiplataforma.",

    // --- Telnyx ---
    "TeamPCP hijacked PyPI credentials (from Trivy compromise) and published telnyx@4.87.1/4.87.2 (MAL-2026-2254) with WAV steganography payloads. Attackers published backdoored Python SDK versions (4.87.1/2) containing a malicious payload hidden in a WAV file. The attack aimed to exfiltrate SSH keys and Kubernetes tokens to gain persistent cloud infrastructure access. It was a downstream effect of the LiteLLM breach earlier that week.":
      "TeamPCP secuestró credenciales de PyPI (procedentes del compromiso de Trivy) y publicó telnyx@4.87.1/4.87.2 (MAL-2026-2254) con cargas útiles de esteganografía en WAV. Los atacantes publicaron versiones del SDK de Python con puerta trasera (4.87.1/2) que contenían una carga útil maliciosa oculta en un archivo WAV. El ataque tenía como objetivo exfiltrar claves SSH y tokens de Kubernetes para obtener acceso persistente a la infraestructura en la nube. Fue un efecto secundario de la brecha de LiteLLM ocurrida a principios de esa semana.",

    // --- LiteLLM ---
    "TeamPCP used stolen PyPI tokens to upload litellm@1.82.7/1.82.8 with .pth file that auto-executes on every Python process to harvest LLM API keys. Malicious versions (1.82.7/8) were uploaded to PyPI using stolen maintainer tokens to inject code via .pth files. The goal was to harvest API keys for major LLM providers (OpenAI, Anthropic) and cloud provider secrets. This attack effectively targeted the \"brain\" of many AI-integrated applications.":
      "TeamPCP usó tokens de PyPI robados para cargar litellm@1.82.7/1.82.8 con un archivo .pth que se ejecuta automáticamente en cada proceso de Python para recopilar claves de API de LLM. Se cargaron en PyPI versiones maliciosas (1.82.7/8) con tokens de mantenedor robados para inyectar código mediante archivos .pth. El objetivo era recopilar claves de API de los principales proveedores de LLM (OpenAI, Anthropic) y secretos de proveedores de nube. Este ataque tuvo como objetivo, en la práctica, el \"cerebro\" de muchas aplicaciones con IA integrada.",

    // --- Checkmarx KICS ---
    "TeamPCP used stolen GitHub PATs to force-push to all 35 tags of Checkmarx/kics-github-action and poisoned ast-github-action@v2.3.28. Threat actor TeamPCP hijacked GitHub Action tags to inject credential-stealing scripts into CI/CD pipelines. The objective was to intercept GitHub PATs and cloud environment variables as they were processed during security scans. This allowed the attackers to move laterally into other high-value developer tools.":
      "TeamPCP usó PAT de GitHub robados para hacer force-push a las 35 etiquetas de Checkmarx/kics-github-action y envenenó ast-github-action@v2.3.28. El actor de amenazas TeamPCP secuestró etiquetas de GitHub Action para inyectar scripts de robo de credenciales en pipelines de CI/CD. El objetivo era interceptar PAT de GitHub y variables de entorno de la nube mientras se procesaban durante los análisis de seguridad. Esto permitió a los atacantes desplazarse lateralmente hacia otras herramientas de desarrollo de alto valor.",

    // --- Trivy ---
    "TeamPCP exploited incomplete credential rotation to force-push kamikaze.sh to 76/77 tags in aquasecurity/trivy-action. The core of the \"March Madness\" campaign, where attackers force-pushed malicious commits to 76 of 77 version tags of trivy-action. The malware scraped runner memory for secrets and exfiltrated them to a typosquatted domain (scan.aquasecurtiy[.]org). This compromise provided the \"master keys\" that TeamPCP used to unlock the subsequent attacks on KICS and LiteLLM.":
      "TeamPCP aprovechó una rotación de credenciales incompleta para hacer force-push de kamikaze.sh a 76 de las 77 etiquetas de aquasecurity/trivy-action. Es el núcleo de la campaña \"March Madness\", en la que los atacantes hicieron force-push de commits maliciosos a 76 de las 77 etiquetas de versión de trivy-action. El malware extraía secretos de la memoria del runner y los exfiltraba a un dominio de typosquatting (scan.aquasecurtiy[.]org). Este compromiso proporcionó las \"llaves maestras\" que TeamPCP usó para desbloquear los ataques posteriores contra KICS y LiteLLM.",

    // --- MongoBleed ---
    "CVE-2025-14847 (CVSS 8.7) unauthenticated memory disclosure in MongoDB Server zlib handling affecting versions 4.4.0-8.2.2. MongoBleed is a supply chain attack involving malicious npm packages designed to exfiltrate MongoDB credentials and sensitive runtime data once deployed. The affected packages appeared benign but executed malicious logic during application runtime.":
      "CVE-2025-14847 (CVSS 8.7): divulgación de memoria sin autenticación en el manejo de zlib de MongoDB Server que afecta a las versiones 4.4.0-8.2.2. MongoBleed es un ataque a la cadena de suministro que implica paquetes npm maliciosos diseñados para exfiltrar credenciales de MongoDB y datos confidenciales en tiempo de ejecución una vez implementados. Los paquetes afectados parecían inofensivos, pero ejecutaban lógica maliciosa durante el tiempo de ejecución de la aplicación.",

    // --- React2Shell ---
    "CVE-2025-55182 (CVSS 10.0) insecure deserialization in React Server Components Flight protocol in react-server-dom-webpack/parcel/turbopack 19.0.0-19.2.0. React2Shell is a class of application-layer exploit patterns where unsafe React server-side rendering (SSR) or dynamic rendering logic enables remote code execution. While not tied to a single package compromise, it represents a recurring attack vector that expands the application attack surface through frontend frameworks used in backend contexts.":
      "CVE-2025-55182 (CVSS 10.0): deserialización insegura en el protocolo Flight de React Server Components en react-server-dom-webpack/parcel/turbopack 19.0.0-19.2.0. React2Shell es una clase de patrones de exploit en la capa de aplicación en los que una lógica insegura de renderizado del lado del servidor (SSR) o de renderizado dinámico de React permite la ejecución remota de código. Aunque no está vinculado al compromiso de un único paquete, representa un vector de ataque recurrente que amplía la superficie de ataque de las aplicaciones a través de frameworks de frontend usados en contextos de backend.",

    // --- qix ---
    "Compromised qix maintainer account injected credential-stealing into 24+ packages: chalk@5.6.1 (MAL-2025-46969) debug@4.4.2 (MAL-2025-46974) and 15+ more. The qix supply chain attack stemmed from a compromised maintainer account that injected credential-stealing logic into trusted npm packages. The malicious versions propagated quickly through automated dependency updates.":
      "Una cuenta de mantenedor de qix comprometida inyectó código de robo de credenciales en más de 24 paquetes: chalk@5.6.1 (MAL-2025-46969), debug@4.4.2 (MAL-2025-46974) y más de 15 más. El ataque a la cadena de suministro de qix se originó en una cuenta de mantenedor comprometida que inyectó lógica de robo de credenciales en paquetes npm de confianza. Las versiones maliciosas se propagaron rápidamente a través de las actualizaciones automáticas de dependencias.",

    // --- Shai-Hulud v1 & v2 ---
    "npm phishing campaign led to self-replicating worm via post-install scripts spreading to hundreds of packages including @ctrl/tinycolor (MAL-2025-47141). Shai-Hulud is a multi-stage supply chain attack campaign targeting open-source ecosystems through malicious packages, dependency confusion, and trusted distribution channels. Multiple waves have been observed, with expanding scope and evolving techniques across package registries and tooling.":
      "Una campaña de phishing contra npm dio lugar a un gusano autorreplicante que, mediante scripts post-install, se propagó a cientos de paquetes, incluido @ctrl/tinycolor (MAL-2025-47141). Shai-Hulud es una campaña de ataque a la cadena de suministro en varias etapas dirigida a ecosistemas de código abierto mediante paquetes maliciosos, confusión de dependencias y canales de distribución de confianza. Se han observado múltiples oleadas, con un alcance cada vez mayor y técnicas en evolución en registros de paquetes y herramientas.",

    // --- nx (s1ngularity) ---
    "Compromised npm account published malicious @nx 20.9.0-21.8.0 and @nx/devkit (MAL-2025-41436) with credential-stealing code. The nx (s1ngularity) incident involved the introduction of malicious code into a package within the Nx tooling ecosystem, enabling unauthorized behavior during installation or execution phases of the build process.":
      "Una cuenta de npm comprometida publicó versiones maliciosas de @nx 20.9.0-21.8.0 y @nx/devkit (MAL-2025-41436) con código de robo de credenciales. El incidente de nx (s1ngularity) implicó la introducción de código malicioso en un paquete del ecosistema de herramientas Nx, lo que permitía un comportamiento no autorizado durante las fases de instalación o ejecución del proceso de compilación.",

    // --- TJ-Actions ---
    "Multi-stage: spotbugs/sonar-findbugs pull_request_target exploit leaked PAT chained through reviewdog to tj-actions/changed-files (CVE-2025-30066) compromising 23000+ repos. The TJ-Actions breach involved the compromise of a widely used GitHub Actions workflow, creating risk of secret exposure and pipeline manipulation in CI/CD environments. Impact depended on workflow configuration, token scope, and pinning practices.":
      "Varias etapas: un exploit de pull_request_target en spotbugs/sonar-findbugs filtró un PAT que se encadenó a través de reviewdog hasta tj-actions/changed-files (CVE-2025-30066), lo que comprometió más de 23.000 repositorios. La brecha de TJ-Actions implicó el compromiso de un flujo de trabajo de GitHub Actions ampliamente utilizado, lo que generó riesgo de exposición de secretos y manipulación de pipelines en entornos de CI/CD. El impacto dependía de la configuración del flujo de trabajo, el alcance del token y las prácticas de fijación de versiones.",

    // --- Log4Shell (Log4j) ---
    // Note: the actual display appends notes unrelated to the security content, apparently
    // left over from internal testing (e.g. "[PubSub E2E test bump ...]"). To make translation
    // still apply, the dictionary key includes that text verbatim (the note itself stays untranslated).
    "CVE-2021-44228 (CVSS 10.0) JNDI injection in Apache Log4j 2 (log4j-core 2.0-beta9 to 2.14.1) allowing unauthenticated RCE via ${jndi:ldap://} in log messages. Log4Shell is a critical remote code execution vulnerability in the widely used Log4j logging library that allows attackers to execute arbitrary code by injecting specially crafted log messages. Due to Log4j's deep presence across application stacks, the vulnerability enabled widespread, internet-scale exploitation shortly after disclosure. [PubSub E2E test bump v5 - 2026-05-26] [v10: BQ stats verification bump 2026-06-04] [v11: Ed25519-sha256 streaming test 2026-06-11]":
      "CVE-2021-44228 (CVSS 10.0): inyección JNDI en Apache Log4j 2 (log4j-core 2.0-beta9 a 2.14.1) que permite RCE sin autenticación mediante ${jndi:ldap://} en los mensajes de registro. Log4Shell es una vulnerabilidad crítica de ejecución remota de código en la biblioteca de registro Log4j, ampliamente utilizada, que permite a los atacantes ejecutar código arbitrario inyectando mensajes de registro especialmente diseñados. Debido a la profunda presencia de Log4j en las pilas de aplicaciones, la vulnerabilidad permitió una explotación generalizada a escala de Internet poco después de su divulgación. [PubSub E2E test bump v5 - 2026-05-26] [v10: BQ stats verification bump 2026-06-04] [v11: Ed25519-sha256 streaming test 2026-06-11]",

    // --- XZ Utils ---
    "Jia Tan (state-sponsored) social-engineered maintainer trust over 2+ years then backdoored xz-utils 5.6.0/5.6.1 (CVE-2024-3094) build system to compromise liblzma for SSH access.":
      "Jia Tan (patrocinado por un estado) se ganó mediante ingeniería social la confianza de los mantenedores durante más de 2 años y luego introdujo una puerta trasera en el sistema de compilación de xz-utils 5.6.0/5.6.1 (CVE-2024-3094) para comprometer liblzma y obtener acceso SSH.",

    // --- Shai-Hulud npm Resurgence (AntV Payload Reactivation) ---
    "The Shai-Hulud npm worm payload from the May 19, 2026 @antv compromise resurfaced 111 days later—the longest dormancy-to-reactivation gap observed for this payload. On September 7, 2026 a single npm account published four packages carrying the identical malicious file hash (e37e3ddeeaaa9e0c4fdbcb829b4895a6521031c80053fc436625b61e6ee5b1a6) already fingerprinted months earlier. The payload behaves as before: a self-propagating worm that steals CI/CD and cloud credentials and republishes itself to additional packages.":
      "La carga útil del gusano npm Shai-Hulud procedente del compromiso de @antv del 19 de mayo de 2026 resurgió 111 días después, el mayor intervalo entre inactividad y reactivación observado para esta carga útil. El 7 de septiembre de 2026, una única cuenta de npm publicó cuatro paquetes con el mismo hash de archivo malicioso (e37e3ddeeaaa9e0c4fdbcb829b4895a6521031c80053fc436625b61e6ee5b1a6) ya identificado meses antes. La carga útil se comporta como antes: un gusano autopropagable que roba credenciales de CI/CD y de nube y se vuelve a publicar en otros paquetes.",

    // --- Shai-Hulud – Trinitite ---
    "Shai-Hulud malware variant \"Trinitite\" compromised @7nohe/openapi-react-query-codegen, a TanStack query generator package with 128k weekly downloads. Eight malicious versions were published across four major release lines during August 28-29, 2026. Stolen credentials are exfiltrated encrypted to attacker-controlled GitHub repositories. The first-stage payload uses Function() instead of eval() for code execution and XOR instead of ROT13 for deobfuscation, with new public encryption keys making attribution harder. The malware uses Bun 1.4.0 and contains logic to download a C2 payload from a remote server.":
      "La variante del malware Shai-Hulud \"Trinitite\" comprometió @7nohe/openapi-react-query-codegen, un paquete generador de consultas de TanStack con 128.000 descargas semanales. Se publicaron ocho versiones maliciosas en cuatro líneas de versión principales entre el 28 y el 29 de agosto de 2026. Las credenciales robadas se exfiltran cifradas a repositorios de GitHub controlados por el atacante. La carga útil de la primera etapa usa Function() en lugar de eval() para ejecutar código y XOR en lugar de ROT13 para la desofuscación, con nuevas claves públicas de cifrado que dificultan la atribución. El malware usa Bun 1.4.0 y contiene lógica para descargar una carga útil de C2 desde un servidor remoto.",

    // --- Rust Arrayref, Internment, and Append-only-vec ---
    "Rust crates.io supply chain attack: a compromised maintainer account poisoned three widely-used crates from the same owner within 23 minutes (arrayref@0.3.10, internment@0.8.7, append-only-vec@0.1.9). The malicious arrayref@0.3.10 (a utility with ~245M all-time downloads sitting under tiny-skia, winit, blake3, and Solana/Ethereum tooling) injected a first-ever dependency on proc-macro1@1.0.107, a typosquat of proc-macro2 published minutes earlier by an account impersonating David Tolnay. The dropper's build.rs runs at compile time: it downloads a second-stage binary over TLS with certificate validation disabled, writes it to a temp directory, and executes it with a C2 address argument, so simply building any project during the 07:11-09:25 UTC exposure window could yield silent remote code execution. The attacker also yanked all other modern arrayref releases (0.3.5-0.3.9) to steer developers toward the single non-yanked malicious version 0.3.10.":
      "Ataque a la cadena de suministro de Rust crates.io: una cuenta de mantenedor comprometida envenenó tres crates muy utilizados del mismo propietario en 23 minutos (arrayref@0.3.10, internment@0.8.7, append-only-vec@0.1.9). El arrayref@0.3.10 malicioso (una utilidad con unos 245 millones de descargas totales que se encuentra bajo tiny-skia, winit, blake3 y herramientas de Solana/Ethereum) inyectó por primera vez una dependencia de proc-macro1@1.0.107, un typosquat de proc-macro2 publicado minutos antes por una cuenta que suplantaba a David Tolnay. El build.rs del dropper se ejecuta en tiempo de compilación: descarga un binario de segunda etapa por TLS con la validación de certificados deshabilitada, lo escribe en un directorio temporal y lo ejecuta con una dirección de C2 como argumento, por lo que simplemente compilar cualquier proyecto durante la ventana de exposición de 07:11-09:25 UTC podía provocar una ejecución remota de código silenciosa. El atacante también retiró (yank) todas las demás versiones modernas de arrayref (0.3.5-0.3.9) para dirigir a los desarrolladores hacia la única versión no retirada, la maliciosa 0.3.10.",

    // --- AntV npm Compromise (Mini Shai-Hulud Wave 5) ---
    "Compromised npm account \"atool\" poisoned 637 versions across 317 packages—279 in the @antv data visualization ecosystem plus timeago.js, echarts-for-react, size-sensor and others (collectively ~16M weekly downloads). Attributed to threat group TeamPCP as Wave 5 of the \"Mini Shai-Hulud\" campaign, the malicious versions were published in two waves on May 19, 2026 between 01:39 and 02:06 UTC. Each package carries a 498KB obfuscated JavaScript payload (SHA256 a68dd1e6a6e35ec3771e1f94fe796f55dfe65a2b94560516ff4ac189390dfa1c) delivered via an npm preinstall hook that executes through the Bun runtime, reads GitHub Actions runner memory via /proc/[pid]/mem to steal CI/CD secrets, and harvests credentials from 130+ file paths (AWS, GCP, Azure, GitHub PATs, npm tokens, Kubernetes and Vault credentials, SSH keys, and password-manager vaults). Stolen data is exfiltrated to the antvis/G2 GitHub repo and to t.m-kosche.com.":
      "La cuenta de npm comprometida \"atool\" envenenó 637 versiones de 317 paquetes: 279 del ecosistema de visualización de datos @antv, además de timeago.js, echarts-for-react, size-sensor y otros (en conjunto, unos 16 millones de descargas semanales). Atribuidas al grupo de amenazas TeamPCP como la oleada 5 de la campaña \"Mini Shai-Hulud\", las versiones maliciosas se publicaron en dos oleadas el 19 de mayo de 2026 entre las 01:39 y las 02:06 UTC. Cada paquete contiene una carga útil de JavaScript ofuscada de 498 KB (SHA256 a68dd1e6a6e35ec3771e1f94fe796f55dfe65a2b94560516ff4ac189390dfa1c) distribuida mediante un hook preinstall de npm que se ejecuta a través del runtime Bun, lee la memoria del runner de GitHub Actions mediante /proc/[pid]/mem para robar secretos de CI/CD y recopila credenciales de más de 130 rutas de archivo (AWS, GCP, Azure, PAT de GitHub, tokens de npm, credenciales de Kubernetes y Vault, claves SSH y almacenes de gestores de contraseñas). Los datos robados se exfiltran al repositorio de GitHub antvis/G2 y a t.m-kosche.com.",

    // --- Detail-screen additional labels ---
    "CVE:": "CVE:",
    "Malicious Packages:": "Paquetes maliciosos:",
  },

  patterns: [
    { re: /^(\d+)\s+compromised packages found in your org$/, tpl: "Se encontraron $1 paquetes comprometidos en su organización" },
  ],

  skip: [
    // Detected/updated timestamp text (fully dynamic).
    /^Detected: .+\|\s*Updated: /,
  ],
};
