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
    "Supply Chain Attacks": "공급망 공격",
    "Threat Center": "위협 센터",

    "Attack Source": "공격 소스",
    "Compromised": "침해됨",
    "Compromised assets": "침해된 자산",
    "Compromised packages": "침해된 패키지",
    "Compromised tools": "침해된 도구",
    "Issues resolved": "해결된 이슈",
    "Malicious Package": "악성 패키지",
    "Malicious Tool": "악성 도구",
    "No compromise detected": "탐지된 침해 없음",
    "Open Blog Post": "블로그 게시물 열기",
    "Package Explorer": "패키지 탐색기",
    "Vulnerable Package": "취약한 패키지",

    // --- Detail-screen common UI ---
    "Security breach": "보안 침해",
    "First Detected:": "최초 탐지:",
    "Updated on:": "업데이트 날짜:",
    "No impact detected in your organization": "조직에서 탐지된 영향 없음",
    "No compromised packages detected": "탐지된 침해 패키지 없음",
    "Impacted assets": "영향받는 자산",
    "No impacted assets detected": "탐지된 영향받는 자산 없음",
    "Your applications, pipelines, and repositories are not affected by this breach.":
      "애플리케이션, 파이프라인 및 리포지토리가 이 침해의 영향을 받지 않습니다.",
    "Impacted Packages Outside Your Org": "조직 외부의 영향받는 패키지",

    // ============================================================
    // ============================================================

    // --- ChainDrop (keyv / cacheable) ---
    "An ongoing npm supply chain worm targeting the keyv/cacheable ecosystem (keyv@6.0.0) utilizes compromised maintainer accounts to infect over 400 packages with a self-propagating \"Shai-Hulud\" malware variant. It harvests cloud, AI-agent, crypto, and infrastructure credentials while leveraging Ethereum smart contracts for dynamic C2 resolution and maintaining persistence via Claude Code hooks and VS Code tasks.":
      "keyv/cacheable 에코시스템(keyv@6.0.0)을 표적으로 하는 진행 중인 npm 공급망 웜으로, 침해된 메인테이너 계정을 이용해 자가 전파하는 \"Shai-Hulud\" 멀웨어 변종으로 400개 이상의 패키지를 감염시킵니다. 클라우드, AI 에이전트, 암호화폐 및 인프라 자격 증명을 수집하고, 동적 C2 확인에 Ethereum 스마트 계약을 활용하며, Claude Code 후크와 VS Code 작업을 통해 지속성을 유지합니다.",

    // --- Joyfill ---
    "Compromised beta versions of two @joyfill npm packages deliver a DEV#POPPER Remote Access Trojan (RAT) via an import-time JavaScript implant. The payload executes automatically whenever the package is loaded (import/require), compromising developer workstations, CI/CD pipelines, automated scanners, and production builds without requiring specific function calls or installation scripts.":
      "두 개의 @joyfill npm 패키지의 침해된 베타 버전이 가져오기 시점에 실행되는 JavaScript 임플란트를 통해 DEV#POPPER 원격 액세스 트로이 목마(RAT)를 배포합니다. 페이로드는 패키지가 로드될 때마다(import/require) 자동으로 실행되며, 특정 함수 호출이나 설치 스크립트 없이도 개발자 워크스테이션, CI/CD 파이프라인, 자동화된 스캐너 및 프로덕션 빌드를 침해합니다.",

    // --- AsyncAPI (M-Red-Team) ---
    "A major supply chain attack compromised the @asyncapi npm ecosystem (impacting packages with over 3 million weekly downloads) by exploiting a GitHub Actions pull_request_target vulnerability to exfiltrate a bot service-account token. The attacker used the stolen token to publish 5 malicious package versions containing an import-triggered payload that fetches a massive, modular malware framework (\"M-RED-TEAM v6.4\") from IPFS to harvest credentials, establish systemd persistence, and maintain multi-channel C2 fallback networks.":
      "대규모 공급망 공격으로 @asyncapi npm 에코시스템(주간 다운로드 300만 건 이상의 패키지에 영향)이 침해되었습니다. 공격자는 GitHub Actions pull_request_target 취약점을 악용하여 봇 서비스 계정 토큰을 유출했습니다. 탈취한 토큰으로 악성 패키지 버전 5개를 게시했으며, 여기에는 가져오기 시 IPFS에서 대규모 모듈식 멀웨어 프레임워크(\"M-RED-TEAM v6.4\")를 가져와 자격 증명을 수집하고, systemd 지속성을 확보하며, 다중 채널 C2 대체 네트워크를 유지하는 페이로드가 포함되어 있습니다.",

    // --- Leo Platform ---
    "An automated supply chain attack compromised 20 npm packages in the Leo Platform ecosystem within a 3-second window, impacting ~13,600 weekly downloads. Attributed to the \"Miasma\" threat actor, this targeted campaign utilizes a scriptless binding.gyp install hook (\"Phantom Gyp\") to execute obfuscated malware. The payload scrapes process memory for log-masked CI secrets, sweeps multi-cloud credentials, exfiltrates data stealthily via GitHub GraphQL commits, and automatically self-propagates across accessible npm packages.":
      "자동화된 공급망 공격으로 Leo Platform 에코시스템의 npm 패키지 20개가 3초 만에 침해되어 주간 다운로드 약 13,600건에 영향을 미쳤습니다. \"Miasma\" 위협 행위자의 소행으로 알려진 이 표적 캠페인은 스크립트가 없는 binding.gyp 설치 후크(\"Phantom Gyp\")를 이용해 난독화된 멀웨어를 실행합니다. 페이로드는 프로세스 메모리에서 로그 마스킹된 CI 시크릿을 수집하고, 멀티 클라우드 자격 증명을 긁어모으며, GitHub GraphQL 커밋을 통해 은밀하게 데이터를 유출하고, 액세스 가능한 npm 패키지 전반으로 자동 자가 전파합니다.",

    // --- easy-day-js (Mastra AI) ---
    "On June 17, 2026, the @mastra npm organization was compromised via account takeover (ehindero). Rather than injecting code directly, the attacker swapped the dayjs dependency for an attacker-controlled typosquat, easy-day-js, across 144 @mastra packages (est. ~8M weekly / ~29M monthly downloads). The clean bait easy-day-js@1.11.21 was pinned as ^1.11.21, so npm auto-resolved to the malicious easy-day-js@1.11.22, whose obfuscated postinstall dropper (setup.cjs) disabled TLS verification, fetched a stage-2 payload from 23.254.164.92:8000, spawned it as a detached process pointing at C2 23.254.164.123:443 (credential and crypto-wallet theft), and self-deleted to destroy forensic evidence.":
      "2026년 6월 17일, @mastra npm 조직이 계정 탈취(ehindero)를 통해 침해되었습니다. 공격자는 코드를 직접 삽입하는 대신 144개의 @mastra 패키지(추정 주간 약 800만/월간 약 2,900만 다운로드)에서 dayjs 종속성을 공격자가 제어하는 타이포스쿼팅 패키지 easy-day-js로 바꿨습니다. 정상적인 미끼 버전 easy-day-js@1.11.21이 ^1.11.21로 고정되어 있었기 때문에 npm은 악성 easy-day-js@1.11.22로 자동 확인되었습니다. 이 버전의 난독화된 postinstall 드로퍼(setup.cjs)는 TLS 검증을 비활성화하고, 23.254.164.92:8000에서 2단계 페이로드를 가져와 C2 23.254.164.123:443(자격 증명 및 암호화폐 지갑 탈취)을 가리키는 분리된 프로세스로 실행한 뒤, 포렌식 증거를 없애기 위해 스스로 삭제했습니다.",

    // --- Laravel-Lang ---
    "A threat actor compromised four popular Laravel-Lang Composer packages by rewriting every existing git tag to point to a new malicious commit, ensuring no version remained safe. This commit altered Composer's autoload configuration, causing the payload to execute automatically the moment an application starts up. Once triggered, the payload drops a hidden binary to massively exfiltrate sensitive data—including cloud credentials, environment variables, and security tokens—before deleting itself to evade forensic analysis.":
      "위협 행위자가 인기 있는 Laravel-Lang Composer 패키지 4개를 침해하여 기존의 모든 git 태그가 새 악성 커밋을 가리키도록 재작성함으로써 안전한 버전이 하나도 남지 않게 했습니다. 이 커밋은 Composer의 autoload 구성을 변경하여 애플리케이션이 시작되는 즉시 페이로드가 자동으로 실행되도록 했습니다. 실행되면 페이로드는 숨겨진 바이너리를 드롭하여 클라우드 자격 증명, 환경 변수, 보안 토큰 등 민감한 데이터를 대량으로 유출한 후, 포렌식 분석을 회피하기 위해 스스로 삭제합니다.",

    // --- Node-IPC Attack ---
    "Malicious versions of the node-ipc npm package were published, containing an obfuscated payload designed to steal cloud credentials, SSH keys, and CI/CD secrets. The attack exploited a compromised or rogue maintainer account to push malicious releases under the legitimate package name, reaching downstream consumers via direct and transitive dependencies.":
      "node-ipc npm 패키지의 악성 버전이 게시되었으며, 클라우드 자격 증명, SSH 키 및 CI/CD 시크릿을 탈취하도록 설계된 난독화된 페이로드가 포함되어 있었습니다. 이 공격은 침해되었거나 악의적인 메인테이너 계정을 악용하여 정상 패키지 이름으로 악성 릴리스를 배포했으며, 직접 및 전이 종속성을 통해 다운스트림 사용자에게 도달했습니다.",

    // --- Mini Shai-Hulud (TanStack) ---
    "Coordinated supply chain attack against npm and PyPI ecosystems, compromising packages across multiple namespaces (notably TanStack, Mistral AI, Guardrails AI, and UiPath). Attackers exploited GitHub Actions workflow vulnerabilities to publish malicious package versions without needing to steal npm credentials. The payload acts as a credential stealer and self-propagating worm, abusing CI/CD trust to spread laterally across maintainer accounts and dependent repositories.":
      "npm 및 PyPI 에코시스템을 대상으로 한 조직적인 공급망 공격으로, 여러 네임스페이스(특히 TanStack, Mistral AI, Guardrails AI, UiPath)의 패키지가 침해되었습니다. 공격자는 GitHub Actions 워크플로 취약점을 악용하여 npm 자격 증명을 탈취하지 않고도 악성 패키지 버전을 게시했습니다. 페이로드는 자격 증명 탈취 도구이자 자가 전파 웜으로 동작하며, CI/CD 신뢰 관계를 악용해 메인테이너 계정과 종속 리포지토리 전반으로 측면 이동합니다.",

    // --- Axios NPM ---
    "Attacker hijacked npm account of axios maintainer jasonsaayman and published axios@1.14.1 and axios@0.30.4 with injected dependency plain-crypto-js@4.2.1 (MAL-2026-2306) containing a cross-platform RAT dropper.":
      "공격자가 axios 메인테이너 jasonsaayman의 npm 계정을 탈취하여, 크로스 플랫폼 RAT 드로퍼가 포함된 종속성 plain-crypto-js@4.2.1(MAL-2026-2306)을 삽입한 axios@1.14.1 및 axios@0.30.4를 게시했습니다.",
    "On March 30-31, 2026, an unknown threat actor compromised the npm account of `jasonsaayman`, the primary maintainer of the axios HTTP client library — the most popular JavaScript HTTP client with over 100 million weekly downloads. The attacker published two malicious versions (axios@1.14.1 and axios@0.30.4) that injected a hidden dependency (plain-crypto-js@4.2.1) containing a cross-platform Remote Access Trojan (RAT) dropper.":
      "2026년 3월 30~31일, 신원 미상의 위협 행위자가 주간 다운로드 1억 건 이상으로 가장 인기 있는 JavaScript HTTP 클라이언트인 axios HTTP 클라이언트 라이브러리의 주요 메인테이너 `jasonsaayman`의 npm 계정을 침해했습니다. 공격자는 크로스 플랫폼 원격 액세스 트로이 목마(RAT) 드로퍼가 포함된 숨겨진 종속성(plain-crypto-js@4.2.1)을 삽입한 악성 버전 2개(axios@1.14.1 및 axios@0.30.4)를 게시했습니다.",

    // --- Axios NPM ---
    "Attacker hijacked npm account of axios maintainer jasonsaayman and published axios@1.14.1 and axios@0.30.4 with injected dependency plain-crypto-js@4.2.1 (MAL-2026-2306) containing a cross-platform RAT dropper. On March 30-31, 2026, an unknown threat actor compromised the npm account of `jasonsaayman`, the primary maintainer of the axios HTTP client library — the most popular JavaScript HTTP client with over 100 million weekly downloads. The attacker published two malicious versions (axios@1.14.1 and axios@0.30.4) that injected a hidden dependency (plain-crypto-js@4.2.1) containing a cross-platform Remote Access Trojan (RAT) dropper.":
      "공격자가 axios 메인테이너 jasonsaayman의 npm 계정을 탈취하여, 크로스 플랫폼 RAT 드로퍼가 포함된 종속성 plain-crypto-js@4.2.1(MAL-2026-2306)을 삽입한 axios@1.14.1 및 axios@0.30.4를 게시했습니다. 2026년 3월 30~31일, 신원 미상의 위협 행위자가 주간 다운로드 1억 건 이상으로 가장 인기 있는 JavaScript HTTP 클라이언트인 axios HTTP 클라이언트 라이브러리의 주요 메인테이너 `jasonsaayman`의 npm 계정을 침해했습니다. 공격자는 크로스 플랫폼 원격 액세스 트로이 목마(RAT) 드로퍼가 포함된 숨겨진 종속성(plain-crypto-js@4.2.1)을 삽입한 악성 버전 2개(axios@1.14.1 및 axios@0.30.4)를 게시했습니다.",

    // --- Telnyx ---
    "TeamPCP hijacked PyPI credentials (from Trivy compromise) and published telnyx@4.87.1/4.87.2 (MAL-2026-2254) with WAV steganography payloads. Attackers published backdoored Python SDK versions (4.87.1/2) containing a malicious payload hidden in a WAV file. The attack aimed to exfiltrate SSH keys and Kubernetes tokens to gain persistent cloud infrastructure access. It was a downstream effect of the LiteLLM breach earlier that week.":
      "TeamPCP는 (Trivy 침해에서 얻은) PyPI 자격 증명을 탈취하여 WAV 스테가노그래피 페이로드가 포함된 telnyx@4.87.1/4.87.2(MAL-2026-2254)를 게시했습니다. 공격자는 WAV 파일에 악성 페이로드를 숨긴 백도어 Python SDK 버전(4.87.1/2)을 게시했습니다. 이 공격은 SSH 키와 Kubernetes 토큰을 유출하여 클라우드 인프라에 대한 지속적인 액세스 권한을 얻는 것을 목표로 했습니다. 이는 같은 주 초에 발생한 LiteLLM 침해의 여파였습니다.",

    // --- LiteLLM ---
    "TeamPCP used stolen PyPI tokens to upload litellm@1.82.7/1.82.8 with .pth file that auto-executes on every Python process to harvest LLM API keys. Malicious versions (1.82.7/8) were uploaded to PyPI using stolen maintainer tokens to inject code via .pth files. The goal was to harvest API keys for major LLM providers (OpenAI, Anthropic) and cloud provider secrets. This attack effectively targeted the \"brain\" of many AI-integrated applications.":
      "TeamPCP는 탈취한 PyPI 토큰을 사용하여 모든 Python 프로세스에서 자동 실행되는 .pth 파일이 포함된 litellm@1.82.7/1.82.8을 업로드하고 LLM API 키를 수집했습니다. 탈취한 메인테이너 토큰으로 .pth 파일을 통해 코드를 삽입한 악성 버전(1.82.7/8)이 PyPI에 업로드되었습니다. 목표는 주요 LLM 공급자(OpenAI, Anthropic)의 API 키와 클라우드 공급자 시크릿을 수집하는 것이었습니다. 이 공격은 사실상 많은 AI 통합 애플리케이션의 \"두뇌\"를 표적으로 삼았습니다.",

    // --- Checkmarx KICS ---
    "TeamPCP used stolen GitHub PATs to force-push to all 35 tags of Checkmarx/kics-github-action and poisoned ast-github-action@v2.3.28. Threat actor TeamPCP hijacked GitHub Action tags to inject credential-stealing scripts into CI/CD pipelines. The objective was to intercept GitHub PATs and cloud environment variables as they were processed during security scans. This allowed the attackers to move laterally into other high-value developer tools.":
      "TeamPCP는 탈취한 GitHub PAT를 사용하여 Checkmarx/kics-github-action의 35개 태그 전체에 강제 푸시하고 ast-github-action@v2.3.28을 오염시켰습니다. 위협 행위자 TeamPCP는 GitHub Action 태그를 탈취하여 CI/CD 파이프라인에 자격 증명 탈취 스크립트를 삽입했습니다. 목적은 보안 스캔 중 처리되는 GitHub PAT와 클라우드 환경 변수를 가로채는 것이었습니다. 이를 통해 공격자는 가치가 높은 다른 개발자 도구로 측면 이동할 수 있었습니다.",

    // --- Trivy ---
    "TeamPCP exploited incomplete credential rotation to force-push kamikaze.sh to 76/77 tags in aquasecurity/trivy-action. The core of the \"March Madness\" campaign, where attackers force-pushed malicious commits to 76 of 77 version tags of trivy-action. The malware scraped runner memory for secrets and exfiltrated them to a typosquatted domain (scan.aquasecurtiy[.]org). This compromise provided the \"master keys\" that TeamPCP used to unlock the subsequent attacks on KICS and LiteLLM.":
      "TeamPCP는 불완전한 자격 증명 교체를 악용하여 aquasecurity/trivy-action의 태그 77개 중 76개에 kamikaze.sh를 강제 푸시했습니다. \"March Madness\" 캠페인의 핵심으로, 공격자는 trivy-action의 버전 태그 77개 중 76개에 악성 커밋을 강제 푸시했습니다. 멀웨어는 러너 메모리에서 시크릿을 수집하여 타이포스쿼팅 도메인(scan.aquasecurtiy[.]org)으로 유출했습니다. 이 침해로 TeamPCP는 이후 KICS 및 LiteLLM 공격에 사용한 \"마스터 키\"를 확보했습니다.",

    // --- MongoBleed ---
    "CVE-2025-14847 (CVSS 8.7) unauthenticated memory disclosure in MongoDB Server zlib handling affecting versions 4.4.0-8.2.2. MongoBleed is a supply chain attack involving malicious npm packages designed to exfiltrate MongoDB credentials and sensitive runtime data once deployed. The affected packages appeared benign but executed malicious logic during application runtime.":
      "CVE-2025-14847(CVSS 8.7)은 MongoDB Server의 zlib 처리에서 발생하는 인증되지 않은 메모리 노출 취약점으로, 버전 4.4.0~8.2.2에 영향을 미칩니다. MongoBleed는 배포 후 MongoDB 자격 증명과 민감한 런타임 데이터를 유출하도록 설계된 악성 npm 패키지와 관련된 공급망 공격입니다. 영향받는 패키지는 무해해 보였지만 애플리케이션 런타임 중에 악성 로직을 실행했습니다.",

    // --- React2Shell ---
    "CVE-2025-55182 (CVSS 10.0) insecure deserialization in React Server Components Flight protocol in react-server-dom-webpack/parcel/turbopack 19.0.0-19.2.0. React2Shell is a class of application-layer exploit patterns where unsafe React server-side rendering (SSR) or dynamic rendering logic enables remote code execution. While not tied to a single package compromise, it represents a recurring attack vector that expands the application attack surface through frontend frameworks used in backend contexts.":
      "CVE-2025-55182(CVSS 10.0)는 react-server-dom-webpack/parcel/turbopack 19.0.0~19.2.0의 React Server Components Flight 프로토콜에서 발생하는 안전하지 않은 역직렬화 취약점입니다. React2Shell은 안전하지 않은 React 서버 측 렌더링(SSR) 또는 동적 렌더링 로직으로 인해 원격 코드 실행이 가능해지는 애플리케이션 계층 익스플로잇 패턴의 한 유형입니다. 단일 패키지 침해와 관련된 것은 아니지만, 백엔드 환경에서 사용되는 프런트엔드 프레임워크를 통해 애플리케이션 공격 표면을 확장하는 반복적인 공격 벡터입니다.",

    // --- qix ---
    "Compromised qix maintainer account injected credential-stealing into 24+ packages: chalk@5.6.1 (MAL-2025-46969) debug@4.4.2 (MAL-2025-46974) and 15+ more. The qix supply chain attack stemmed from a compromised maintainer account that injected credential-stealing logic into trusted npm packages. The malicious versions propagated quickly through automated dependency updates.":
      "침해된 qix 메인테이너 계정이 chalk@5.6.1(MAL-2025-46969), debug@4.4.2(MAL-2025-46974) 등 24개 이상의 패키지에 자격 증명 탈취 코드를 삽입했습니다. qix 공급망 공격은 침해된 메인테이너 계정에서 비롯되었으며, 신뢰할 수 있는 npm 패키지에 자격 증명 탈취 로직을 삽입했습니다. 악성 버전은 자동화된 종속성 업데이트를 통해 빠르게 확산되었습니다.",

    // --- Shai-Hulud v1 & v2 ---
    "npm phishing campaign led to self-replicating worm via post-install scripts spreading to hundreds of packages including @ctrl/tinycolor (MAL-2025-47141). Shai-Hulud is a multi-stage supply chain attack campaign targeting open-source ecosystems through malicious packages, dependency confusion, and trusted distribution channels. Multiple waves have been observed, with expanding scope and evolving techniques across package registries and tooling.":
      "npm 피싱 캠페인으로 인해 post-install 스크립트를 통해 자가 복제하는 웜이 발생하여 @ctrl/tinycolor(MAL-2025-47141)를 포함한 수백 개의 패키지로 확산되었습니다. Shai-Hulud는 악성 패키지, 종속성 혼동 및 신뢰할 수 있는 배포 채널을 통해 오픈 소스 에코시스템을 표적으로 하는 다단계 공급망 공격 캠페인입니다. 패키지 레지스트리와 도구 전반에 걸쳐 범위가 확대되고 기법이 진화하면서 여러 차례의 공격 물결이 관찰되었습니다.",

    // --- nx (s1ngularity) ---
    "Compromised npm account published malicious @nx 20.9.0-21.8.0 and @nx/devkit (MAL-2025-41436) with credential-stealing code. The nx (s1ngularity) incident involved the introduction of malicious code into a package within the Nx tooling ecosystem, enabling unauthorized behavior during installation or execution phases of the build process.":
      "침해된 npm 계정이 자격 증명 탈취 코드가 포함된 악성 @nx 20.9.0~21.8.0 및 @nx/devkit(MAL-2025-41436)을 게시했습니다. nx(s1ngularity) 인시던트는 Nx 도구 에코시스템 내 패키지에 악성 코드가 삽입된 사건으로, 빌드 프로세스의 설치 또는 실행 단계에서 무단 동작이 가능해졌습니다.",

    // --- TJ-Actions ---
    "Multi-stage: spotbugs/sonar-findbugs pull_request_target exploit leaked PAT chained through reviewdog to tj-actions/changed-files (CVE-2025-30066) compromising 23000+ repos. The TJ-Actions breach involved the compromise of a widely used GitHub Actions workflow, creating risk of secret exposure and pipeline manipulation in CI/CD environments. Impact depended on workflow configuration, token scope, and pinning practices.":
      "다단계: spotbugs/sonar-findbugs pull_request_target 익스플로잇으로 유출된 PAT가 reviewdog을 거쳐 tj-actions/changed-files(CVE-2025-30066)로 연쇄되어 23,000개 이상의 리포지토리가 침해되었습니다. TJ-Actions 침해는 널리 사용되는 GitHub Actions 워크플로가 침해된 사건으로, CI/CD 환경에서 시크릿 노출 및 파이프라인 조작 위험을 초래했습니다. 영향은 워크플로 구성, 토큰 범위 및 고정(pinning) 관행에 따라 달라졌습니다.",

    // --- Log4Shell (Log4j) ---
    // Note: the actual display appends notes unrelated to the security content, apparently
    // left over from internal testing (e.g. "[PubSub E2E test bump ...]"). To make translation
    // still apply, the dictionary key includes that text verbatim (the note itself stays untranslated).
    "CVE-2021-44228 (CVSS 10.0) JNDI injection in Apache Log4j 2 (log4j-core 2.0-beta9 to 2.14.1) allowing unauthenticated RCE via ${jndi:ldap://} in log messages. Log4Shell is a critical remote code execution vulnerability in the widely used Log4j logging library that allows attackers to execute arbitrary code by injecting specially crafted log messages. Due to Log4j's deep presence across application stacks, the vulnerability enabled widespread, internet-scale exploitation shortly after disclosure. [PubSub E2E test bump v5 - 2026-05-26] [v10: BQ stats verification bump 2026-06-04] [v11: Ed25519-sha256 streaming test 2026-06-11]":
      "CVE-2021-44228(CVSS 10.0)은 Apache Log4j 2(log4j-core 2.0-beta9~2.14.1)의 JNDI 인젝션 취약점으로, 로그 메시지의 ${jndi:ldap://}를 통해 인증되지 않은 RCE를 허용합니다. Log4Shell은 널리 사용되는 Log4j 로깅 라이브러리의 심각한 원격 코드 실행 취약점으로, 공격자가 특수하게 조작된 로그 메시지를 삽입하여 임의의 코드를 실행할 수 있게 합니다. Log4j가 애플리케이션 스택 전반에 깊숙이 존재하기 때문에 이 취약점은 공개 직후 인터넷 규모의 광범위한 악용으로 이어졌습니다. [PubSub E2E test bump v5 - 2026-05-26] [v10: BQ stats verification bump 2026-06-04] [v11: Ed25519-sha256 streaming test 2026-06-11]",

    // --- XZ Utils ---
    "Jia Tan (state-sponsored) social-engineered maintainer trust over 2+ years then backdoored xz-utils 5.6.0/5.6.1 (CVE-2024-3094) build system to compromise liblzma for SSH access.":
      "Jia Tan(국가 지원 행위자)은 2년 이상에 걸쳐 사회 공학적으로 메인테이너의 신뢰를 얻은 뒤, xz-utils 5.6.0/5.6.1(CVE-2024-3094)의 빌드 시스템에 백도어를 심어 SSH 액세스를 위해 liblzma를 침해했습니다.",

    // --- Shai-Hulud npm Resurgence (AntV Payload Reactivation) ---
    "The Shai-Hulud npm worm payload from the May 19, 2026 @antv compromise resurfaced 111 days later—the longest dormancy-to-reactivation gap observed for this payload. On September 7, 2026 a single npm account published four packages carrying the identical malicious file hash (e37e3ddeeaaa9e0c4fdbcb829b4895a6521031c80053fc436625b61e6ee5b1a6) already fingerprinted months earlier. The payload behaves as before: a self-propagating worm that steals CI/CD and cloud credentials and republishes itself to additional packages.":
      "2026년 5월 19일 @antv 침해에서 사용된 Shai-Hulud npm 웜 페이로드가 111일 만에 다시 나타났습니다. 이는 이 페이로드에서 관찰된 휴면 후 재활성화까지의 가장 긴 간격입니다. 2026년 9월 7일, 단일 npm 계정이 몇 달 전에 이미 식별된 것과 동일한 악성 파일 해시(e37e3ddeeaaa9e0c4fdbcb829b4895a6521031c80053fc436625b61e6ee5b1a6)를 가진 패키지 4개를 게시했습니다. 페이로드는 이전과 동일하게 동작하며, CI/CD 및 클라우드 자격 증명을 탈취하고 추가 패키지에 자신을 다시 게시하는 자가 전파 웜입니다.",

    // --- Shai-Hulud – Trinitite ---
    "Shai-Hulud malware variant \"Trinitite\" compromised @7nohe/openapi-react-query-codegen, a TanStack query generator package with 128k weekly downloads. Eight malicious versions were published across four major release lines during August 28-29, 2026. Stolen credentials are exfiltrated encrypted to attacker-controlled GitHub repositories. The first-stage payload uses Function() instead of eval() for code execution and XOR instead of ROT13 for deobfuscation, with new public encryption keys making attribution harder. The malware uses Bun 1.4.0 and contains logic to download a C2 payload from a remote server.":
      "Shai-Hulud 멀웨어 변종 \"Trinitite\"가 주간 다운로드 128,000건의 TanStack 쿼리 생성기 패키지인 @7nohe/openapi-react-query-codegen을 침해했습니다. 2026년 8월 28~29일에 4개의 주요 릴리스 라인에 걸쳐 악성 버전 8개가 게시되었습니다. 탈취된 자격 증명은 암호화되어 공격자가 제어하는 GitHub 리포지토리로 유출됩니다. 1단계 페이로드는 코드 실행에 eval() 대신 Function()을, 난독화 해제에 ROT13 대신 XOR을 사용하며, 새로운 공개 암호화 키로 인해 공격 주체 규명이 더 어려워졌습니다. 이 멀웨어는 Bun 1.4.0을 사용하며 원격 서버에서 C2 페이로드를 다운로드하는 로직을 포함합니다.",

    // --- Rust Arrayref, Internment, and Append-only-vec ---
    "Rust crates.io supply chain attack: a compromised maintainer account poisoned three widely-used crates from the same owner within 23 minutes (arrayref@0.3.10, internment@0.8.7, append-only-vec@0.1.9). The malicious arrayref@0.3.10 (a utility with ~245M all-time downloads sitting under tiny-skia, winit, blake3, and Solana/Ethereum tooling) injected a first-ever dependency on proc-macro1@1.0.107, a typosquat of proc-macro2 published minutes earlier by an account impersonating David Tolnay. The dropper's build.rs runs at compile time: it downloads a second-stage binary over TLS with certificate validation disabled, writes it to a temp directory, and executes it with a C2 address argument, so simply building any project during the 07:11-09:25 UTC exposure window could yield silent remote code execution. The attacker also yanked all other modern arrayref releases (0.3.5-0.3.9) to steer developers toward the single non-yanked malicious version 0.3.10.":
      "Rust crates.io 공급망 공격: 침해된 메인테이너 계정이 동일 소유자의 널리 사용되는 크레이트 3개(arrayref@0.3.10, internment@0.8.7, append-only-vec@0.1.9)를 23분 이내에 오염시켰습니다. 악성 arrayref@0.3.10(누적 다운로드 약 2억 4,500만 건으로 tiny-skia, winit, blake3 및 Solana/Ethereum 도구의 하위에 있는 유틸리티)은 David Tolnay를 사칭한 계정이 몇 분 전에 게시한 proc-macro2의 타이포스쿼팅 패키지 proc-macro1@1.0.107에 대한 종속성을 처음으로 삽입했습니다. 드로퍼의 build.rs는 컴파일 시점에 실행되어 인증서 검증이 비활성화된 TLS를 통해 2단계 바이너리를 다운로드하고 임시 디렉터리에 기록한 뒤 C2 주소를 인수로 실행하므로, 07:11~09:25 UTC 노출 기간 동안 프로젝트를 빌드하기만 해도 은밀한 원격 코드 실행이 발생할 수 있었습니다. 공격자는 또한 다른 최신 arrayref 릴리스(0.3.5~0.3.9)를 모두 철회(yank)하여 개발자가 철회되지 않은 유일한 악성 버전 0.3.10을 사용하도록 유도했습니다.",

    // --- AntV npm Compromise (Mini Shai-Hulud Wave 5) ---
    "Compromised npm account \"atool\" poisoned 637 versions across 317 packages—279 in the @antv data visualization ecosystem plus timeago.js, echarts-for-react, size-sensor and others (collectively ~16M weekly downloads). Attributed to threat group TeamPCP as Wave 5 of the \"Mini Shai-Hulud\" campaign, the malicious versions were published in two waves on May 19, 2026 between 01:39 and 02:06 UTC. Each package carries a 498KB obfuscated JavaScript payload (SHA256 a68dd1e6a6e35ec3771e1f94fe796f55dfe65a2b94560516ff4ac189390dfa1c) delivered via an npm preinstall hook that executes through the Bun runtime, reads GitHub Actions runner memory via /proc/[pid]/mem to steal CI/CD secrets, and harvests credentials from 130+ file paths (AWS, GCP, Azure, GitHub PATs, npm tokens, Kubernetes and Vault credentials, SSH keys, and password-manager vaults). Stolen data is exfiltrated to the antvis/G2 GitHub repo and to t.m-kosche.com.":
      "침해된 npm 계정 \"atool\"이 317개 패키지에 걸쳐 637개 버전을 오염시켰습니다. 여기에는 @antv 데이터 시각화 에코시스템의 패키지 279개와 timeago.js, echarts-for-react, size-sensor 등이 포함됩니다(총 주간 다운로드 약 1,600만 건). 위협 그룹 TeamPCP의 \"Mini Shai-Hulud\" 캠페인 5차 공격으로 알려져 있으며, 악성 버전은 2026년 5월 19일 01:39~02:06 UTC 사이에 두 차례에 걸쳐 게시되었습니다. 각 패키지에는 498KB 크기의 난독화된 JavaScript 페이로드(SHA256 a68dd1e6a6e35ec3771e1f94fe796f55dfe65a2b94560516ff4ac189390dfa1c)가 포함되어 있으며, 이 페이로드는 Bun 런타임을 통해 실행되는 npm preinstall 후크로 전달되어 /proc/[pid]/mem을 통해 GitHub Actions 러너 메모리를 읽어 CI/CD 시크릿을 탈취하고, 130개 이상의 파일 경로(AWS, GCP, Azure, GitHub PAT, npm 토큰, Kubernetes 및 Vault 자격 증명, SSH 키, 비밀번호 관리자 보관소)에서 자격 증명을 수집합니다. 탈취된 데이터는 antvis/G2 GitHub 리포지토리와 t.m-kosche.com으로 유출됩니다.",

    // --- Detail-screen additional labels ---
    "CVE:": "CVE:",
    "Malicious Packages:": "악성 패키지:",
  },

  patterns: [
    { re: /^(\d+)\s+compromised packages found in your org$/, tpl: "조직에서 침해된 패키지 $1개가 발견되었습니다" },
  ],

  skip: [
    // Detected/updated timestamp text (fully dynamic).
    /^Detected: .+\|\s*Updated: /,
  ],
};
