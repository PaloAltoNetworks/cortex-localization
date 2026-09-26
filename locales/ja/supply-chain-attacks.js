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
    "Supply Chain Attacks": "サプライチェーン攻撃",
    "Threat Center": "脅威センター",

    "Attack Source": "攻撃元",
    "Compromised": "侵害済み",
    "Compromised assets": "侵害された資産",
    "Compromised packages": "侵害されたパッケージ",
    "Compromised tools": "侵害されたツール",
    "Issues resolved": "解決済みのイシュー",
    "Malicious Package": "悪意のあるパッケージ",
    "Malicious Tool": "悪意のあるツール",
    "No compromise detected": "侵害は検出されませんでした",
    "Open Blog Post": "ブログ記事を開く",
    "Package Explorer": "パッケージエクスプローラー",
    "Vulnerable Package": "脆弱なパッケージ",

    // --- 詳細画面の共通UI ---
    // --- Detail-screen common UI ---
    "Security breach": "セキュリティ侵害",
    "First Detected:": "最初に検出:",
    "Updated on:": "更新日:",
    "No impact detected in your organization": "組織への影響は検出されていません",
    "No compromised packages detected": "侵害されたパッケージは検出されていません",
    "Impacted assets": "影響を受けた資産",
    "No impacted assets detected": "影響を受けた資産は検出されていません",
    "Your applications, pipelines, and repositories are not affected by this breach.":
      "この侵害によってアプリケーション、パイプライン、リポジトリは影響を受けていません。",
    "Impacted Packages Outside Your Org": "組織外の影響を受けたパッケージ",

    // ============================================================
    // 攻撃ごとの詳細(固定カタログ)
    // ============================================================

    // --- ChainDrop (keyv / cacheable) ---
    "An ongoing npm supply chain worm targeting the keyv/cacheable ecosystem (keyv@6.0.0) utilizes compromised maintainer accounts to infect over 400 packages with a self-propagating \"Shai-Hulud\" malware variant. It harvests cloud, AI-agent, crypto, and infrastructure credentials while leveraging Ethereum smart contracts for dynamic C2 resolution and maintaining persistence via Claude Code hooks and VS Code tasks.":
      "keyv/cacheableエコシステム(keyv@6.0.0)を標的とした進行中のnpmサプライチェーンワームで、侵害されたメンテナーアカウントを悪用し、自己増殖する「Shai-Hulud」亜種マルウェアで400以上のパッケージに感染しています。クラウド、AIエージェント、暗号資産、インフラの認証情報を窃取し、動的なC2解決にEthereumスマートコントラクトを利用し、Claude Codeのフックおよび VS Codeのタスクを通じて永続化しています。",

    // --- Joyfill ---
    "Compromised beta versions of two @joyfill npm packages deliver a DEV#POPPER Remote Access Trojan (RAT) via an import-time JavaScript implant. The payload executes automatically whenever the package is loaded (import/require), compromising developer workstations, CI/CD pipelines, automated scanners, and production builds without requiring specific function calls or installation scripts.":
      "侵害された@joyfill npmパッケージ2つのベータ版が、インポート時に実行されるJavaScriptインプラントを通じてDEV#POPPERリモートアクセス型トロイの木馬(RAT)を配布します。このペイロードはパッケージが読み込まれる(import/require)たびに自動実行され、特定の関数呼び出しやインストールスクリプトを必要とせずに、開発者のワークステーション、CI/CDパイプライン、自動スキャナー、本番ビルドを侵害します。",

    // --- AsyncAPI (M-Red-Team) ---
    "A major supply chain attack compromised the @asyncapi npm ecosystem (impacting packages with over 3 million weekly downloads) by exploiting a GitHub Actions pull_request_target vulnerability to exfiltrate a bot service-account token. The attacker used the stolen token to publish 5 malicious package versions containing an import-triggered payload that fetches a massive, modular malware framework (\"M-RED-TEAM v6.4\") from IPFS to harvest credentials, establish systemd persistence, and maintain multi-channel C2 fallback networks.":
      "大規模なサプライチェーン攻撃により@asyncapi npmエコシステム(週間ダウンロード数300万件以上のパッケージに影響)が侵害されました。GitHub Actionsのpull_request_target脆弱性を悪用し、ボットのサービスアカウントトークンを窃取。攻撃者はこのトークンを使い5件の悪意あるパッケージバージョンを公開し、インポート時にIPFSから大規模でモジュール式のマルウェアフレームワーク(「M-RED-TEAM v6.4」)を取得するペイロードを仕込みました。これにより認証情報を窃取し、systemdによる永続化を確立し、複数チャネルのC2フォールバックネットワークを維持します。",

    // --- Leo Platform ---
    "An automated supply chain attack compromised 20 npm packages in the Leo Platform ecosystem within a 3-second window, impacting ~13,600 weekly downloads. Attributed to the \"Miasma\" threat actor, this targeted campaign utilizes a scriptless binding.gyp install hook (\"Phantom Gyp\") to execute obfuscated malware. The payload scrapes process memory for log-masked CI secrets, sweeps multi-cloud credentials, exfiltrates data stealthily via GitHub GraphQL commits, and automatically self-propagates across accessible npm packages.":
      "自動化されたサプライチェーン攻撃により、Leo Platformエコシステムの20個のnpmパッケージがわずか3秒の間に侵害され、週間ダウンロード数約13,600件に影響しました。「Miasma」という脅威アクターによるものとされるこの標的型キャンペーンは、スクリプトを使わないbinding.gypインストールフック(「Phantom Gyp」)を利用して難読化されたマルウェアを実行します。ペイロードはプロセスメモリからログにマスクされたCIシークレットを収集し、マルチクラウドの認証情報を収集し、GitHub GraphQLのコミットを通じてひそかにデータを窃取し、アクセス可能なnpmパッケージ間で自動的に自己増殖します。",

    // --- easy-day-js (Mastra AI) ---
    "On June 17, 2026, the @mastra npm organization was compromised via account takeover (ehindero). Rather than injecting code directly, the attacker swapped the dayjs dependency for an attacker-controlled typosquat, easy-day-js, across 144 @mastra packages (est. ~8M weekly / ~29M monthly downloads). The clean bait easy-day-js@1.11.21 was pinned as ^1.11.21, so npm auto-resolved to the malicious easy-day-js@1.11.22, whose obfuscated postinstall dropper (setup.cjs) disabled TLS verification, fetched a stage-2 payload from 23.254.164.92:8000, spawned it as a detached process pointing at C2 23.254.164.123:443 (credential and crypto-wallet theft), and self-deleted to destroy forensic evidence.":
      "2026年6月17日、@mastra npm組織がアカウント乗っ取り(ehindero)により侵害されました。攻撃者はコードを直接注入する代わりに、144個の@mastraパッケージ(推定週間800万/月間2900万ダウンロード)にわたって、dayjs依存関係を攻撃者が管理するタイポスクワット版「easy-day-js」に置き換えました。無害なおとりであるeasy-day-js@1.11.21は^1.11.21として固定されていたため、npmは悪意のあるeasy-day-js@1.11.22に自動解決しました。この難読化されたpostinstallドロッパー(setup.cjs)はTLS検証を無効化し、23.254.164.92:8000からステージ2のペイロードを取得、C2サーバー23.254.164.123:443(認証情報・暗号資産ウォレットの窃取)を指すデタッチプロセスとして実行し、証跡を消すために自己削除しました。",

    // --- Laravel-Lang ---
    "A threat actor compromised four popular Laravel-Lang Composer packages by rewriting every existing git tag to point to a new malicious commit, ensuring no version remained safe. This commit altered Composer's autoload configuration, causing the payload to execute automatically the moment an application starts up. Once triggered, the payload drops a hidden binary to massively exfiltrate sensitive data—including cloud credentials, environment variables, and security tokens—before deleting itself to evade forensic analysis.":
      "脅威アクターが、人気のLaravel-Lang Composerパッケージ4件を侵害し、既存のすべてのgitタグを新しい悪意あるコミットを指すよう書き換えることで、安全なバージョンが残らないようにしました。このコミットはComposerのオートロード設定を変更し、アプリケーション起動時にペイロードが自動実行されるようにしました。発動すると、ペイロードは隠しバイナリを展開し、クラウド認証情報、環境変数、セキュリティトークンなどの機密データを大量に窃取した後、フォレンジック分析を回避するために自己削除します。",

    // --- Node-IPC Attack ---
    "Malicious versions of the node-ipc npm package were published, containing an obfuscated payload designed to steal cloud credentials, SSH keys, and CI/CD secrets. The attack exploited a compromised or rogue maintainer account to push malicious releases under the legitimate package name, reaching downstream consumers via direct and transitive dependencies.":
      "node-ipc npmパッケージの悪意あるバージョンが公開され、クラウド認証情報、SSHキー、CI/CDシークレットを窃取するよう設計された難読化ペイロードが含まれていました。この攻撃は侵害された、または不正なメンテナーアカウントを悪用し、正規のパッケージ名で悪意あるリリースを公開することで、直接・間接的な依存関係を通じて下流の利用者に到達しました。",

    // --- Mini Shai-Hulud (TanStack) ---
    "Coordinated supply chain attack against npm and PyPI ecosystems, compromising packages across multiple namespaces (notably TanStack, Mistral AI, Guardrails AI, and UiPath). Attackers exploited GitHub Actions workflow vulnerabilities to publish malicious package versions without needing to steal npm credentials. The payload acts as a credential stealer and self-propagating worm, abusing CI/CD trust to spread laterally across maintainer accounts and dependent repositories.":
      "npmおよびPyPIエコシステムを標的とした連携型サプライチェーン攻撃で、複数の名前空間(特にTanStack、Mistral AI、Guardrails AI、UiPath)にわたるパッケージが侵害されました。攻撃者はGitHub Actionsワークフローの脆弱性を悪用し、npmの認証情報を窃取することなく悪意あるパッケージバージョンを公開しました。ペイロードは認証情報窃取ツール兼自己増殖ワームとして動作し、CI/CDの信頼関係を悪用してメンテナーアカウントや依存リポジトリ間に横展開します。",

    // --- Axios NPM ---
    "Attacker hijacked npm account of axios maintainer jasonsaayman and published axios@1.14.1 and axios@0.30.4 with injected dependency plain-crypto-js@4.2.1 (MAL-2026-2306) containing a cross-platform RAT dropper.":
      "攻撃者はaxiosのメンテナーjasonsaaymanのnpmアカウントを乗っ取り、クロスプラットフォームRATドロッパーを含む依存関係plain-crypto-js@4.2.1(MAL-2026-2306)を注入したaxios@1.14.1およびaxios@0.30.4を公開しました。",
    "On March 30-31, 2026, an unknown threat actor compromised the npm account of `jasonsaayman`, the primary maintainer of the axios HTTP client library — the most popular JavaScript HTTP client with over 100 million weekly downloads. The attacker published two malicious versions (axios@1.14.1 and axios@0.30.4) that injected a hidden dependency (plain-crypto-js@4.2.1) containing a cross-platform Remote Access Trojan (RAT) dropper.":
      "2026年3月30日から31日にかけて、身元不明の脅威アクターが、週間ダウンロード数1億件を超える最も人気の高いJavaScript HTTPクライアントであるaxiosの主要メンテナー「jasonsaayman」のnpmアカウントを侵害しました。攻撃者はクロスプラットフォームのリモートアクセス型トロイの木馬(RAT)ドロッパーを含む隠し依存関係(plain-crypto-js@4.2.1)を注入した悪意あるバージョン2件(axios@1.14.1およびaxios@0.30.4)を公開しました。",

    // --- Axios NPM ---
    "Attacker hijacked npm account of axios maintainer jasonsaayman and published axios@1.14.1 and axios@0.30.4 with injected dependency plain-crypto-js@4.2.1 (MAL-2026-2306) containing a cross-platform RAT dropper. On March 30-31, 2026, an unknown threat actor compromised the npm account of `jasonsaayman`, the primary maintainer of the axios HTTP client library — the most popular JavaScript HTTP client with over 100 million weekly downloads. The attacker published two malicious versions (axios@1.14.1 and axios@0.30.4) that injected a hidden dependency (plain-crypto-js@4.2.1) containing a cross-platform Remote Access Trojan (RAT) dropper.":
      "攻撃者はaxiosのメンテナーjasonsaaymanのnpmアカウントを乗っ取り、クロスプラットフォームRATドロッパーを含む依存関係plain-crypto-js@4.2.1(MAL-2026-2306)を注入したaxios@1.14.1およびaxios@0.30.4を公開しました。2026年3月30日から31日にかけて、身元不明の脅威アクターが、週間ダウンロード数1億件を超える最も人気の高いJavaScript HTTPクライアントであるaxiosの主要メンテナー「jasonsaayman」のnpmアカウントを侵害しました。攻撃者はクロスプラットフォームのリモートアクセス型トロイの木馬(RAT)ドロッパーを含む隠し依存関係(plain-crypto-js@4.2.1)を注入した悪意あるバージョン2件(axios@1.14.1およびaxios@0.30.4)を公開しました。",

    // --- Telnyx ---
    "TeamPCP hijacked PyPI credentials (from Trivy compromise) and published telnyx@4.87.1/4.87.2 (MAL-2026-2254) with WAV steganography payloads. Attackers published backdoored Python SDK versions (4.87.1/2) containing a malicious payload hidden in a WAV file. The attack aimed to exfiltrate SSH keys and Kubernetes tokens to gain persistent cloud infrastructure access. It was a downstream effect of the LiteLLM breach earlier that week.":
      "TeamPCPはTrivyの侵害により得たPyPI認証情報を乗っ取り、WAVステガノグラフィーペイロードを含むtelnyx@4.87.1/4.87.2(MAL-2026-2254)を公開しました。攻撃者はWAVファイルに悪意あるペイロードを隠したバックドア入りのPython SDKバージョン(4.87.1/2)を公開しました。この攻撃はSSHキーとKubernetesトークンを窃取し、クラウドインフラへの永続的なアクセスを得ることを目的としていました。これは同週初めに発生したLiteLLM侵害の波及効果でした。",

    // --- LiteLLM ---
    "TeamPCP used stolen PyPI tokens to upload litellm@1.82.7/1.82.8 with .pth file that auto-executes on every Python process to harvest LLM API keys. Malicious versions (1.82.7/8) were uploaded to PyPI using stolen maintainer tokens to inject code via .pth files. The goal was to harvest API keys for major LLM providers (OpenAI, Anthropic) and cloud provider secrets. This attack effectively targeted the \"brain\" of many AI-integrated applications.":
      "TeamPCPは窃取したPyPIトークンを使用し、あらゆるPythonプロセスで自動実行される.pthファイルを含むlitellm@1.82.7/1.82.8をアップロードし、LLMのAPIキーを収集しました。窃取したメンテナートークンを使用し、.pthファイル経由でコードを注入する悪意あるバージョン(1.82.7/8)がPyPIにアップロードされました。目的は主要LLMプロバイダー(OpenAI、Anthropic)のAPIキーとクラウドプロバイダーのシークレットを収集することでした。この攻撃は、多くのAI統合アプリケーションの「頭脳」を事実上の標的としていました。",

    // --- Checkmarx KICS ---
    "TeamPCP used stolen GitHub PATs to force-push to all 35 tags of Checkmarx/kics-github-action and poisoned ast-github-action@v2.3.28. Threat actor TeamPCP hijacked GitHub Action tags to inject credential-stealing scripts into CI/CD pipelines. The objective was to intercept GitHub PATs and cloud environment variables as they were processed during security scans. This allowed the attackers to move laterally into other high-value developer tools.":
      "TeamPCPは窃取したGitHub PATを使用し、Checkmarx/kics-github-actionの全35タグに強制プッシュし、ast-github-action@v2.3.28を汚染しました。脅威アクターTeamPCPはGitHub Actionのタグを乗っ取り、CI/CDパイプラインに認証情報窃取スクリプトを注入しました。目的はセキュリティスキャン処理中のGitHub PATおよびクラウド環境変数を傍受することでした。これにより攻撃者は他の価値の高い開発者ツールへ横展開することが可能になりました。",

    // --- Trivy ---
    "TeamPCP exploited incomplete credential rotation to force-push kamikaze.sh to 76/77 tags in aquasecurity/trivy-action. The core of the \"March Madness\" campaign, where attackers force-pushed malicious commits to 76 of 77 version tags of trivy-action. The malware scraped runner memory for secrets and exfiltrated them to a typosquatted domain (scan.aquasecurtiy[.]org). This compromise provided the \"master keys\" that TeamPCP used to unlock the subsequent attacks on KICS and LiteLLM.":
      "TeamPCPは不完全な認証情報のローテーションを悪用し、aquasecurity/trivy-actionの77タグ中76タグにkamikaze.shを強制プッシュしました。「March Madness」キャンペーンの中核であり、攻撃者はtrivy-actionの77個中76個のバージョンタグに悪意あるコミットを強制プッシュしました。このマルウェアはランナーメモリからシークレットを収集し、タイポスクワットドメイン(scan.aquasecurtiy[.]org)へ窃取しました。この侵害により、TeamPCPが後続のKICSおよびLiteLLMへの攻撃を実行するための「マスターキー」が得られました。",

    // --- MongoBleed ---
    "CVE-2025-14847 (CVSS 8.7) unauthenticated memory disclosure in MongoDB Server zlib handling affecting versions 4.4.0-8.2.2. MongoBleed is a supply chain attack involving malicious npm packages designed to exfiltrate MongoDB credentials and sensitive runtime data once deployed. The affected packages appeared benign but executed malicious logic during application runtime.":
      "CVE-2025-14847(CVSS 8.7)は、MongoDB Serverのzlib処理における未認証のメモリ開示の脆弱性で、バージョン4.4.0〜8.2.2に影響します。MongoBleedは、デプロイ後にMongoDBの認証情報や機密のランタイムデータを窃取するよう設計された悪意あるnpmパッケージを伴うサプライチェーン攻撃です。影響を受けたパッケージは一見無害に見えましたが、アプリケーションの実行時に悪意あるロジックを実行しました。",

    // --- React2Shell ---
    "CVE-2025-55182 (CVSS 10.0) insecure deserialization in React Server Components Flight protocol in react-server-dom-webpack/parcel/turbopack 19.0.0-19.2.0. React2Shell is a class of application-layer exploit patterns where unsafe React server-side rendering (SSR) or dynamic rendering logic enables remote code execution. While not tied to a single package compromise, it represents a recurring attack vector that expands the application attack surface through frontend frameworks used in backend contexts.":
      "CVE-2025-55182(CVSS 10.0)は、react-server-dom-webpack/parcel/turbopack 19.0.0〜19.2.0におけるReact Server Components Flightプロトコルの安全でないデシリアライズの脆弱性です。React2Shellは、安全でないReactのサーバーサイドレンダリング(SSR)や動的レンダリングロジックによってリモートコード実行が可能になる、アプリケーション層のエクスプロイトパターンの一種です。特定のパッケージの侵害に限定されるものではなく、バックエンドの文脈で使用されるフロントエンドフレームワークを通じてアプリケーションのアタックサーフェスを拡大する、繰り返し発生する攻撃ベクトルを表しています。",

    // --- qix ---
    "Compromised qix maintainer account injected credential-stealing into 24+ packages: chalk@5.6.1 (MAL-2025-46969) debug@4.4.2 (MAL-2025-46974) and 15+ more. The qix supply chain attack stemmed from a compromised maintainer account that injected credential-stealing logic into trusted npm packages. The malicious versions propagated quickly through automated dependency updates.":
      "侵害されたqixメンテナーアカウントにより、chalk@5.6.1(MAL-2025-46969)、debug@4.4.2(MAL-2025-46974)を含む24以上のパッケージに認証情報窃取コードが注入されました。qixサプライチェーン攻撃は、侵害されたメンテナーアカウントに起因し、信頼されたnpmパッケージに認証情報窃取ロジックが注入されました。悪意あるバージョンは自動依存関係更新を通じて急速に拡散しました。",

    // --- Shai-Hulud v1 & v2 ---
    "npm phishing campaign led to self-replicating worm via post-install scripts spreading to hundreds of packages including @ctrl/tinycolor (MAL-2025-47141). Shai-Hulud is a multi-stage supply chain attack campaign targeting open-source ecosystems through malicious packages, dependency confusion, and trusted distribution channels. Multiple waves have been observed, with expanding scope and evolving techniques across package registries and tooling.":
      "npmを狙ったフィッシングキャンペーンにより、post-installスクリプトを介して自己複製するワームが発生し、@ctrl/tinycolor(MAL-2025-47141)を含む数百のパッケージに拡散しました。Shai-Huludは、悪意あるパッケージ、依存関係の混同、信頼された配布チャネルを通じてオープンソースエコシステムを標的とする多段階のサプライチェーン攻撃キャンペーンです。パッケージレジストリやツール全体にわたって範囲を拡大し、手法を進化させながら、複数の波が観測されています。",

    // --- nx (s1ngularity) ---
    "Compromised npm account published malicious @nx 20.9.0-21.8.0 and @nx/devkit (MAL-2025-41436) with credential-stealing code. The nx (s1ngularity) incident involved the introduction of malicious code into a package within the Nx tooling ecosystem, enabling unauthorized behavior during installation or execution phases of the build process.":
      "侵害されたnpmアカウントにより、認証情報窃取コードを含む悪意ある@nx 20.9.0〜21.8.0および@nx/devkit(MAL-2025-41436)が公開されました。nx(s1ngularity)インシデントでは、Nxツールエコシステム内のパッケージに悪意あるコードが持ち込まれ、ビルドプロセスのインストールまたは実行フェーズで不正な動作が可能になりました。",

    // --- TJ-Actions ---
    "Multi-stage: spotbugs/sonar-findbugs pull_request_target exploit leaked PAT chained through reviewdog to tj-actions/changed-files (CVE-2025-30066) compromising 23000+ repos. The TJ-Actions breach involved the compromise of a widely used GitHub Actions workflow, creating risk of secret exposure and pipeline manipulation in CI/CD environments. Impact depended on workflow configuration, token scope, and pinning practices.":
      "多段階攻撃: spotbugs/sonar-findbugsのpull_request_target脆弱性の悪用によりPATが漏洩し、reviewdogを経由してtj-actions/changed-files(CVE-2025-30066)へと連鎖し、23,000以上のリポジトリが侵害されました。TJ-Actionsの侵害は、広く使用されているGitHub Actionsワークフローの侵害を伴い、CI/CD環境においてシークレットの露出やパイプライン操作のリスクを生じさせました。影響の程度はワークフローの設定、トークンのスコープ、およびピン留めの慣行に依存します。",

    // --- Log4Shell (Log4j) ---
    // 注: 実際の表示では説明文の末尾に、セキュリティ内容とは無関係な
    // 社内テスト用と思われるメモ([PubSub E2E test bump ...] 等)が
    // 付加されている。翻訳を効かせるため、その文字列を含めた形で
    // 登録している(メモ部分は原文のまま)。
    // Note: the actual display appends notes unrelated to the security content, apparently
    // left over from internal testing (e.g. "[PubSub E2E test bump ...]"). To make translation
    // still apply, the dictionary key includes that text verbatim (the note itself stays untranslated).
    "CVE-2021-44228 (CVSS 10.0) JNDI injection in Apache Log4j 2 (log4j-core 2.0-beta9 to 2.14.1) allowing unauthenticated RCE via ${jndi:ldap://} in log messages. Log4Shell is a critical remote code execution vulnerability in the widely used Log4j logging library that allows attackers to execute arbitrary code by injecting specially crafted log messages. Due to Log4j's deep presence across application stacks, the vulnerability enabled widespread, internet-scale exploitation shortly after disclosure. [PubSub E2E test bump v5 - 2026-05-26] [v10: BQ stats verification bump 2026-06-04] [v11: Ed25519-sha256 streaming test 2026-06-11]":
      "CVE-2021-44228(CVSS 10.0)は、Apache Log4j 2(log4j-core 2.0-beta9〜2.14.1)におけるJNDIインジェクションの脆弱性で、ログメッセージ内の${jndi:ldap://}により未認証のRCEを許してしまいます。Log4Shellは、広く使用されているLog4jロギングライブラリにおける重大なリモートコード実行の脆弱性で、特別に細工したログメッセージを注入することで攻撃者が任意のコードを実行できるようにします。Log4jが多くのアプリケーションスタックに深く組み込まれていることから、この脆弱性は公開直後にインターネット規模で広範囲に悪用されました。 [PubSub E2E test bump v5 - 2026-05-26] [v10: BQ stats verification bump 2026-06-04] [v11: Ed25519-sha256 streaming test 2026-06-11]",

    // --- XZ Utils ---
    "Jia Tan (state-sponsored) social-engineered maintainer trust over 2+ years then backdoored xz-utils 5.6.0/5.6.1 (CVE-2024-3094) build system to compromise liblzma for SSH access.":
      "Jia Tan(国家支援とされる)は2年以上かけてメンテナーの信頼をソーシャルエンジニアリングで獲得した後、xz-utils 5.6.0/5.6.1(CVE-2024-3094)のビルドシステムにバックドアを仕込み、SSHアクセスのためにliblzmaを侵害しました。",

    // --- Shai-Hulud npm Resurgence (AntV Payload Reactivation) ---
    "The Shai-Hulud npm worm payload from the May 19, 2026 @antv compromise resurfaced 111 days later—the longest dormancy-to-reactivation gap observed for this payload. On September 7, 2026 a single npm account published four packages carrying the identical malicious file hash (e37e3ddeeaaa9e0c4fdbcb829b4895a6521031c80053fc436625b61e6ee5b1a6) already fingerprinted months earlier. The payload behaves as before: a self-propagating worm that steals CI/CD and cloud credentials and republishes itself to additional packages.":
      "2026年5月19日の@antv侵害に由来するShai-Hulud npmワームのペイロードが、111日後に再出現しました。これはこのペイロードで観測された休眠から再活性化までの最長の期間です。2026年9月7日、単一のnpmアカウントが、数ヶ月前に既に特定されていたものと同一の悪意あるファイルハッシュ(e37e3ddeeaaa9e0c4fdbcb829b4895a6521031c80053fc436625b61e6ee5b1a6)を持つ4件のパッケージを公開しました。ペイロードの挙動は以前と同様で、CI/CDおよびクラウドの認証情報を窃取し、さらに他のパッケージへ自己増殖するワームです。",

    // --- Shai-Hulud – Trinitite ---
    "Shai-Hulud malware variant \"Trinitite\" compromised @7nohe/openapi-react-query-codegen, a TanStack query generator package with 128k weekly downloads. Eight malicious versions were published across four major release lines during August 28-29, 2026. Stolen credentials are exfiltrated encrypted to attacker-controlled GitHub repositories. The first-stage payload uses Function() instead of eval() for code execution and XOR instead of ROT13 for deobfuscation, with new public encryption keys making attribution harder. The malware uses Bun 1.4.0 and contains logic to download a C2 payload from a remote server.":
      "Shai-Hulud亜種マルウェア「Trinitite」が、週間ダウンロード数128,000件のTanStackクエリジェネレーターパッケージ@7nohe/openapi-react-query-codegenを侵害しました。2026年8月28日から29日にかけて、4つの主要リリースラインにわたり8件の悪意あるバージョンが公開されました。窃取された認証情報は暗号化され、攻撃者が管理するGitHubリポジトリへ送信されます。第一段階のペイロードはコード実行にeval()の代わりにFunction()を使用し、難読化解除にはROT13の代わりにXORを使用しており、新しい公開暗号鍵により帰属特定が困難になっています。このマルウェアはBun 1.4.0を利用し、リモートサーバーからC2ペイロードをダウンロードするロジックを含んでいます。",

    // --- Rust Arrayref, Internment, and Append-only-vec ---
    "Rust crates.io supply chain attack: a compromised maintainer account poisoned three widely-used crates from the same owner within 23 minutes (arrayref@0.3.10, internment@0.8.7, append-only-vec@0.1.9). The malicious arrayref@0.3.10 (a utility with ~245M all-time downloads sitting under tiny-skia, winit, blake3, and Solana/Ethereum tooling) injected a first-ever dependency on proc-macro1@1.0.107, a typosquat of proc-macro2 published minutes earlier by an account impersonating David Tolnay. The dropper's build.rs runs at compile time: it downloads a second-stage binary over TLS with certificate validation disabled, writes it to a temp directory, and executes it with a C2 address argument, so simply building any project during the 07:11-09:25 UTC exposure window could yield silent remote code execution. The attacker also yanked all other modern arrayref releases (0.3.5-0.3.9) to steer developers toward the single non-yanked malicious version 0.3.10.":
      "Rust crates.ioのサプライチェーン攻撃: 侵害されたメンテナーアカウントが、同一オーナーの広く使われている3つのクレート(arrayref@0.3.10、internment@0.8.7、append-only-vec@0.1.9)を23分以内に汚染しました。悪意あるarrayref@0.3.10(累計ダウンロード数約2億4,500万件で、tiny-skia、winit、blake3、Solana/Ethereum関連ツールの配下にあるユーティリティ)は、David Tolnayを騙るアカウントが数分前に公開したproc-macro2のタイポスクワット版であるproc-macro1@1.0.107への依存関係を初めて注入しました。このドロッパーのbuild.rsはコンパイル時に実行され、証明書検証を無効化したTLS経由で第2段階のバイナリをダウンロードし、一時ディレクトリに書き込んでC2アドレスを引数として実行するため、07:11-09:25 UTCの露出期間中にプロジェクトをビルドするだけでリモートコード実行が発生する可能性がありました。攻撃者はまた、他の最新のarrayrefリリース(0.3.5-0.3.9)を全て取り下げ、唯一取り下げられていない悪意あるバージョン0.3.10へ開発者を誘導しました。",

    // --- AntV npm Compromise (Mini Shai-Hulud Wave 5) ---
    "Compromised npm account \"atool\" poisoned 637 versions across 317 packages—279 in the @antv data visualization ecosystem plus timeago.js, echarts-for-react, size-sensor and others (collectively ~16M weekly downloads). Attributed to threat group TeamPCP as Wave 5 of the \"Mini Shai-Hulud\" campaign, the malicious versions were published in two waves on May 19, 2026 between 01:39 and 02:06 UTC. Each package carries a 498KB obfuscated JavaScript payload (SHA256 a68dd1e6a6e35ec3771e1f94fe796f55dfe65a2b94560516ff4ac189390dfa1c) delivered via an npm preinstall hook that executes through the Bun runtime, reads GitHub Actions runner memory via /proc/[pid]/mem to steal CI/CD secrets, and harvests credentials from 130+ file paths (AWS, GCP, Azure, GitHub PATs, npm tokens, Kubernetes and Vault credentials, SSH keys, and password-manager vaults). Stolen data is exfiltrated to the antvis/G2 GitHub repo and to t.m-kosche.com.":
      "侵害されたnpmアカウント「atool」が、317パッケージにわたる637バージョンを汚染しました。うち279件は@antvデータ可視化エコシステムで、timeago.js、echarts-for-react、size-sensorなども含まれます(合計で週間ダウンロード数約1,600万件)。脅威アクターグループTeamPCPによる「Mini Shai-Hulud」キャンペーンの第5波とされ、悪意あるバージョンは2026年5月19日01:39-02:06 UTCの間に2回に分けて公開されました。各パッケージには498KBの難読化されたJavaScriptペイロード(SHA256: a68dd1e6a6e35ec3771e1f94fe796f55dfe65a2b94560516ff4ac189390dfa1c)が含まれており、npmのpreinstallフックを介してBunランタイム上で実行され、/proc/[pid]/mem経由でGitHub Actionsランナーのメモリを読み取ってCI/CDシークレットを窃取し、130以上のファイルパス(AWS、GCP、Azure、GitHub PAT、npmトークン、Kubernetes・Vaultの認証情報、SSHキー、パスワード管理ツールのvault)から認証情報を収集します。収集したデータはantvis/G2のGitHubリポジトリおよびt.m-kosche.comへ送信されます。",

    // --- 詳細画面の追加ラベル ---
    // --- Detail-screen additional labels ---
    "CVE:": "CVE:",
    "Malicious Packages:": "悪意のあるパッケージ:",
  },

  patterns: [
    // "0 compromised packages found in your org" -> "組織内で0件の侵害されたパッケージが見つかりました"
    { re: /^(\d+)\s+compromised packages found in your org$/, tpl: "組織内で$1件の侵害されたパッケージが見つかりました" },
  ],

  skip: [
    // 検出・更新日時の表記(完全に動的)
    // Detected/updated timestamp text (fully dynamic).
    /^Detected: .+\|\s*Updated: /,
  ],
};
