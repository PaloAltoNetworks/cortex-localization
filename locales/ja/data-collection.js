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

const dictionaryDataCollection = {
  exact: {
    "Add New": "新規追加",
    "Enter client ID": "クライアントIDを入力してください",
    "Enter password": "パスワードを入力してください",
    "Choose Outpost": "Outpostを選択",
    "Organization ID": "組織ID",
    "Include": "含める",
    "Enter OU IDs to exclude from scan": "スキャンから除外するOU IDを入力してください",
    "Specify OUs": "OUを指定",
    "Specify Accounts": "アカウントを指定",
    "Enter account IDs to exclude from scan": "スキャンから除外するアカウントIDを入力してください",
    "Specify Folders": "フォルダを指定",
    "Specify Projects": "プロジェクトを指定",
    "Enter folder IDs to exclude from scan": "スキャンから除外するフォルダIDを入力してください",
    "Enter project IDs to exclude from scan": "スキャンから除外するプロジェクトIDを入力してください",
    "Enter Customer IDs for discovery enhancements": "検出機能を強化するための顧客IDを入力してください",
    "Specify Management Groups": "管理グループを指定",
    "Enter management group IDs to exclude from scan": "スキャンから除外する管理グループIDを入力してください",
    "Specify Subscriptions": "サブスクリプションを指定",
    "Enter subscription IDs to exclude from scan": "スキャンから除外するサブスクリプションIDを入力してください",
    "To complete setup, provide these details during template execution in the Azure Portal:":
      "セットアップを完了するには、Azure Portalでのテンプレート実行時に以下の詳細を入力してください:",
    "Event Hub namespace": "Event Hubネームスペース",
    "Must belong to the onboarded subscription": "オンボード済みのサブスクリプションに属している必要があります",
    "Create an outpost for this tenant": "このテナント用のOutpostを作成",
    "Allow connection to private registries": "プライベートレジストリへの接続を許可",
    "Allow connection to private serverless functions": "プライベートサーバーレス関数への接続を許可",
    "Enabling this feature requires additional permissions. Download and run the Terraform template to apply.":
      "この機能を有効にするには追加の権限が必要です。適用するには、Terraformテンプレートをダウンロードして実行してください。",
    "Requires additional cloud service provider permissions": "追加のクラウドサービスプロバイダー権限が必要です",
    "Choose an outpost to use for this instance. Only outposts connected to above tenant ID will be presented. To create a new outpost click":
      "このインスタンスで使用するOutpostを選択してください。上記のテナントIDに接続されているOutpostのみが表示されます。新しいOutpostを作成するには、以下をクリックしてください:",
    "Tenant ID is required to approve Cortex as an enterprise application in the Azure tenant":
      "Cortexを、AzureテナントでエンタープライズアプリケーションとしてApproveするにはテナントIDが必要です",
    "Select this option to onboard only Microsoft Entra ID data for identity security without full tenant onboarding. Scan mode and scope modifications will not be available.":
      "テナント全体をオンボードせずに、アイデンティティセキュリティ用のMicrosoft Entra IDデータのみをオンボードするには、このオプションを選択してください。スキャンモードやスコープの変更はできなくなります。",
    "Event Hub name": "Event Hub名",
    "After onboarding, these values will be available as read-only in the instance settings.":
      "オンボード後、これらの値はインスタンス設定で読み取り専用として表示されます。",
    "Importing replaces the current list.": "インポートすると、現在のリストが置き換えられます。",
    "Additional security capabilities can be enabled in addition to the below built in capabilities:":
      "以下の組み込み機能に加えて、追加のセキュリティ機能を有効にできます:",
    "Cloud security posture management": "クラウドセキュリティポスチャー管理",
    "AI security posture management": "AIセキュリティポスチャー管理",
    "Discover, classify and protect sensitive data in your cloud environment": "クラウド環境内の機密データを検出、分類、保護します",
    "Requires additional cloud provider permissions": "追加のクラウドプロバイダー権限が必要です",
    "Scan Serverless functions for vulnerabilities": "サーバーレス関数の脆弱性をスキャンします",
    "Automate response to issues using playbooks and Quick Actions": "PlaybookとQuick Actionsを使用してイシューへの対応を自動化します",
    "Enable or disable Agentless Disk Scanning.": "エージェントレスディスクスキャンを有効または無効にします。",
    "Existing and newly discovered clusters are continuously scanned agentlessly for deep Kubernetes inventory context alongside security insights (e.g. compliance & misconfigurations)":
      "既存および新たに検出されたクラスターは、コンプライアンスや設定ミスなどのセキュリティインサイトとあわせて、詳細なKubernetesインベントリのコンテキストを得るために、エージェントレスで継続的にスキャンされます",
    "Select outpost account": "Outpostアカウントを選択",
    "When enabled, Cortex sends unknown files to WildFire for analysis. The file types sent for analysis depend on the platform type. WildFire accepts files up to 300MB in size.":
      "有効にすると、Cortexは未知のファイルを分析のためにWildFireに送信します。分析のために送信されるファイルの種類はプラットフォームタイプによって異なります。WildFireは最大300MBまでのファイルを受け付けます。",
    "Hide Preferences": "設定を非表示",
    "Enable automation to streamline incident response. this may required additional cloud service provider permissions.":
      "インシデント対応を効率化するために自動化を有効にしてください。追加のクラウドサービスプロバイダー権限が必要になる場合があります。",
    "Scan container registry images for vulnerabilities, malware and secrets": "コンテナレジストリのイメージを脆弱性、マルウェア、シークレットについてスキャンします",
    "This feature requires data egress, which incurs standard data transfer fees.": "この機能にはデータの送信(egress)が必要で、標準のデータ転送料金が発生します。",
    "Publisher": "発行元",
    "Choose and configure capabilities to fit your needs": "ニーズに合わせて機能を選択・設定してください",
    "Edit, add or remove capabilities to fit your needs": "ニーズに合わせて機能を編集・追加・削除してください",
    "Deployment removal": "デプロイの削除",
    "Default settings": "デフォルト設定",
    "Edit profile": "プロファイルを編集",
    "Kubernetes connect": "Kubernetesに接続",
    "Connector Status": "コネクタステータス",
    "Collectors": "コレクター",
    "Count Received (Last 24h)": "受信件数(過去24時間)",
    "Last Communication": "最終通信",
    "Connector Version": "コネクタバージョン",
    "Data source": "データソース",
    "K8s Platform": "K8sプラットフォーム",
    "Last Scan": "最終スキャン",
    "Serverless": "サーバーレス",
    "Update": "更新",
    "Cluster resource identifier": "クラスターリソース識別子",
    "Enter cluster resource identifier": "クラスターリソース識別子を入力してください",
    "The resource identifier must be specified for GKE or EKS clusters with metadata service disabled, for AKS clusters with non-default nodes managed resource group and for Fargate clusters":
      "メタデータサービスが無効なGKEまたはEKSクラスター、デフォルト以外のノードのマネージドリソースグループを使用するAKSクラスター、およびFargateクラスターでは、リソース識別子を指定する必要があります",
    "Basic authentication is only supported for posture management.": "ベーシック認証はポスチャー管理でのみサポートされています。",
    "Notice! Assigning tags may impact scoped permissions in the system.":
      "注意! タグを割り当てると、システム内のスコープ付き権限に影響する場合があります。",
    "Initial scanning configuration": "初期スキャン設定",
    "Configure the initial preference for scanning your registry. Any newly discovered registry, repository or image in the account will be scanned by default.":
      "レジストリのスキャンに関する初期設定を行います。アカウント内で新たに検出されたレジストリ、リポジトリ、イメージは、デフォルトでスキャンされます。",
    "Latest tag": "最新のタグ",
    "Days modified": "変更からの日数",
    "Tags created/updated in last": "以下の期間内に作成・更新されたタグ",
    "Onboard your OCI tenancy to Cortex Cloud. Security scanning is performed in the Cortex Cloud environment.":
      "OCIテナンシーをCortex Cloudにオンボードします。セキュリティスキャンはCortex Cloud環境内で実行されます。",
    "Enter an instance name or leave it empty to be auto populated": "インスタンス名を入力するか、空のままにすると自動的に生成されます",
    "Define scope of scans by including/excluding compartments or regions": "コンパートメントまたはリージョンを含める/除外することでスキャンの範囲を定義します",
    "Modify Scope by Compartments": "コンパートメントで範囲を変更",
    "Scope modification will impact the compartments and their sub-compartments": "範囲の変更は、コンパートメントおよびそのサブコンパートメントに影響します",
    "OCI region": "OCIリージョン",
    "Choose region": "リージョンを選択",
    "Bucket Name": "バケット名",
    "Enter bucket name": "バケット名を入力してください",
    "Compartment OCID": "コンパートメントOCID",
    "Enable Amazon S3 Log Collection": "Amazon S3ログ収集を有効にする",
    "Enable Azure Network Watcher Log Collection": "Azure Network Watcherログ収集を有効にする",
    "Enable GCP Pub/Sub Log Collection": "GCP Pub/Subログ収集を有効にする",
    "Enter the full GCP Pub/Sub subscription name": "GCP Pub/Subのサブスクリプション名を完全な形式で入力してください",
    "Upload the JSON file containing your service account key": "サービスアカウントキーを含むJSONファイルをアップロードしてください",
    "Enhanced Cloud Protection": "強化されたクラウド保護",
    "Use flow logs in analytics": "フローログを分析に使用する",
    "Save & Generate Token": "保存してトークンを生成",
    "subscription name": "サブスクリプション名",
    "Define the following parameters": "以下のパラメータを定義してください",
    ", see": "。詳細は以下の",
    "Applies to these capabilities": "以下の機能に適用されます",
    "Automation and Remediation": "自動化と修復",
    "Connection": "接続",
    "Drag & Drop or Browse file to upload": "ファイルをドラッグ&ドロップするか、参照してアップロード",
    "Engine": "エンジン",
    "Engine Group": "エンジングループ",
    "Enter the credentials to securely authorize the connection": "接続を安全に許可するための認証情報を入力してください",
    "Google Workspace Admin Email": "Google Workspace管理者のメールアドレス",
    "Identity Posture": "アイデンティティポスチャー",
    "Manage and monitor Google Workspace directory resources including users, groups, organizational units, domains, and roles via the Admin SDK Directory API":
      "Admin SDK Directory APIを介して、ユーザー、グループ、組織単位、ドメイン、ロールなどのGoogle Workspaceディレクトリリソースを管理・監視します",
    "No engine": "エンジンなし",
    "OAuth with customer created service principal": "顧客が作成したサービスプリンシパルによるOAuth",
    "Run automation and remediation actions against Google Drive": "Google Driveに対して自動化・修復アクションを実行します",
    "Scan and protect Google Workspace data across Drive, Gmail, and shared resources": "Drive、Gmail、共有リソース全体でGoogle Workspaceデータをスキャンして保護します",
    "Select capabilities": "機能を選択",
    "Server-to-server authentication using JWT Bearer assertion with a service account credentials file":
      "サービスアカウントの認証情報ファイルを使用したJWT Bearerアサーションによるサーバー間認証",
    "Set your preferred authentication setup": "希望する認証設定を選択してください",
    "The Google Workspace admin email used for domain-wide delegation. This account must have super admin privileges.":
      "ドメイン全体の委任に使用するGoogle Workspace管理者のメールアドレスです。このアカウントにはスーパー管理者権限が必要です。",
    "Trust any certificate (not secure)": "すべての証明書を信頼する(安全ではありません)",
    "Use system proxy settings": "システムのプロキシ設定を使用",
    "This field cannot be changed after it is added. To change it, exit the wizard and start again":
      "この項目は追加後に変更できません。変更するには、ウィザードを終了して最初からやり直してください",
    "Workload Federated Identity": "ワークロードフェデレーテッドID",
    "Access Key": "アクセスキー",
    "STS AssumeRole": "STS AssumeRole",
    "SQS URL": "SQS URL",
    "Enter SQS URL": "SQS URLを入力してください",
    "Role ARN": "ロールARN",
    "Enter role ARN": "ロールARNを入力してください",
    "AWS Client ID": "AWSクライアントID",
    "AWS Client Secret": "AWSクライアントシークレット",
    "External ID": "外部ID",
    "Audience": "オーディエンス",
    "Enter audience": "オーディエンスを入力してください",
    "Select log type": "ログタイプを選択",
    "Copy service account identifier": "サービスアカウント識別子をコピー",
    "Identifier": "識別子",
    "Enable": "有効にする",
    "Enter a compartment's OCID": "コンパートメントのOCIDを入力してください",
    "Delayed": "遅延",
    "Edit Profile settings": "プロファイル設定を編集",
    "Enable auto upgrade to ensure the installed set of capabilities is upgraded as new versions are available.":
      "自動アップグレードを有効にすると、新しいバージョンが利用可能になった際に、インストール済みの機能セットが自動的にアップグレードされます。",
    "Explore and tailor Kubernetes security capabilities to simplify deployment and ensure seamless integration with your infrastructure. Easily strengthen and optimize your Kubernetes environment's security":
      "Kubernetesセキュリティ機能を確認・調整することで、デプロイを簡素化し、インフラとのシームレスな連携を実現します。Kubernetes環境のセキュリティを簡単に強化・最適化できます",
    "HTTP proxy IP": "HTTPプロキシIP",
    "If network traffic must route through a proxy gateway, configure the required settings here, including the proxy URL, authentication method, and other relevant parameters.":
      "ネットワークトラフィックをプロキシゲートウェイ経由でルーティングする必要がある場合は、プロキシURL、認証方法、その他関連するパラメータなど、必要な設定をここで行ってください。",
    "Immediate": "即時",
    "Latest available version (GA)": "最新の利用可能バージョン(GA)",
    "Namespace": "ネームスペース",
    "Supported Kubernetes distributions": "対応しているKubernetesディストリビューション",
    "To see the list of supported versions,": "対応バージョンの一覧を見るには、",
    "Upgrade rollout": "アップグレードロールアウト",
    "Upgrade strategy": "アップグレード戦略",
    "What time?": "何時ですか?",
    "Which days?": "何曜日ですか?",
    "Latest available version (GA) / Immediate / On any day (At any time)":
      "最新の利用可能バージョン(GA) / 即時 / 毎日(いつでも)",
    "Profile settings": "プロファイル設定",
    "Read more": "詳細を見る",
    "Realtime protection": "リアルタイム保護",
    "Capabilities": "機能",
    "Cloud Services": "クラウドサービス",
    "Count (Last 24h)": "件数(過去24時間)",
    "Data Enrichment & Threat Intelligence": "データエンリッチメントと脅威インテリジェンス",
    "Deprecated": "非推奨",
    "Forensics & Malware Analysis": "フォレンジックとマルウェア分析",
    "Image OCR": "画像OCR",
    "Indicators detection": "指標検出",
    "Instances Status": "インスタンスステータス",
    "Mail Sender": "メール送信",
    "Messaging": "メッセージング",
    "Messaging and Conferencing": "メッセージングと会議",
    "Open Source": "オープンソース",
    "Pack Version": "パックバージョン",
    "Rasterize": "ラスタライズ",
    "Update Available": "更新あり",
    "Utilities": "ユーティリティ",
    "Add Another Instance": "別のインスタンスを追加",
    "Add Data Sources or Integrations": "データソース/統合を追加",
    "Create Integration": "統合を作成",
    "More Details": "詳細を表示",
    "Account": "アカウント",
    "Add Instance": "インスタンスを追加",
    "Additional Security Capabilities": "追加のセキュリティ機能",
    "Authentication Method": "認証方法",
    "Cloud Scan": "クラウドスキャン",
    "Cloud Service Provider": "クラウドサービスプロバイダー",
    "Cloud Tags": "クラウドタグ",
    "Contains": "含む",
    "Error": "エラー",
    "Instance ID": "インスタンスID",
    "Outpost": "アウトポスト",
    "Outpost ID": "アウトポストID",
    "Pending": "保留中",
    "Scan Mode": "スキャンモード",
    "Update Status": "更新ステータス",
    "Warning": "警告",
    "Account Name": "アカウント名",
    "Account Type": "アカウントタイプ",
    "Agentless Disk Scanning": "エージェントレスディスクスキャン",
    "All granted": "すべて付与済み",
    "Audit Logs": "監査ログ",
    "Cloud Instances": "クラウドインスタンス",
    "Coverage": "カバレッジ",
    "Scan Coverage": "スキャンカバレッジ",
    "Data Security Scanning": "データセキュリティスキャン",
    "Data Sources": "データソース",
    "Discovery Engine": "検出エンジン",
    "Environment": "環境",
    "High Coverage": "高カバレッジ",
    "Permissions": "権限",
    "Registry Scanning": "レジストリスキャン",
    "Resources Tags": "リソースタグ",
    "Security Capabilities": "セキュリティ機能",
    "Serverless Scanning": "サーバーレススキャン",
    "Scan With Outpost": "アウトポストでスキャン",
    "Scanning is done in the Cortex cloud environment.": "スキャンはCortexのクラウド環境内で実行されます。",
    "Scanning is done on infrastructure deployed to a cloud account owned by you. This mode require additional cloud provider permissions and may incur additional cloud costs.":
      "スキャンは、お客様が所有するクラウドアカウントにデプロイされたインフラストラクチャ上で実行されます。このモードでは追加のクラウドプロバイダー権限が必要で、追加のクラウド利用料金が発生する場合があります。",
    "Show advanced settings": "詳細設定を表示",
    "View required permissions": "必要な権限を表示",
    "Organizational Unit": "組織単位",
    "Add Tag": "タグを追加",
    "After onboarding, view these values in the cloud instance settings.":
      "オンボーディング後、これらの値はクラウドインスタンス設定で確認できます。",
    "Automatically provisions all required cloud resources and permissions via IaC template.":
      "IaCテンプレートを使用して、必要なクラウドリソースと権限をすべて自動でプロビジョニングします。",
    "Choose logs to collect. To benefit from all security capabilities all log types should be collected -":
      "収集するログを選択してください。すべてのセキュリティ機能を活用するには、すべてのログタイプを収集することを推奨します -",
    "CloudTrail Bucket Name:": "CloudTrailバケット名:",
    "Collect Audit Logs": "監査ログを収集",
    "Data security posture management": "データセキュリティポスチャー管理",
    "Define scope of scans by including/excluding OUs, Accounts or Regions":
      "OU、アカウント、またはリージョンを含める/除外することでスキャンの範囲を定義します",
    "Deployment Guide": "デプロイガイド",
    "Deployment Method": "デプロイ方法",
    "Edit Preferences": "設定を編集",
    "Enable additional security add-ons. This may require additional cloud provider permissions":
      "追加のセキュリティアドオンを有効にします。これには追加のクラウドプロバイダー権限が必要な場合があります",
    "For full control over the onboarding process, follow our":
      "オンボーディングプロセスを完全に制御したい場合は、以下をご覧ください",
    "Hide advanced settings": "詳細設定を非表示",
    "KMS Key ARN (Optional):": "KMSキーARN(任意):",
    "Log Collection Configuration": "ログ収集設定",
    "Modify Scope by Regions": "リージョンで範囲を変更",
    "Modify by OU/Account": "OU/アカウントで変更",
    "Must reside within the account you are onboarding": "オンボーディング対象のアカウント内に存在する必要があります",
    "Note": "注記",
    "Collect data events (currently support lambda & S3)": "データイベントを収集(現在lambdaとS3をサポート)",
    "Automated collection creates new, dedicated AWS resources (CloudTrail, S3 bucket, and notification services). This can lead to significant infrastructure costs in high-volume environments.":
      "自動収集を行うと、専用の新しいAWSリソース(CloudTrail、S3バケット、通知サービス)が作成されます。データ量の多い環境では、インフラコストが大きくなる場合があります。",
    "Region must match the deployment region": "リージョンはデプロイ先のリージョンと一致する必要があります",
    "SNS Topic ARN:": "SNSトピックARN:",
    "Scope Modifications": "範囲の変更",
    "Send samples to detonation in WildFire. Supported in: Registry Scanning.":
      "サンプルをWildFireでの検出(detonation)に送信します。対応: レジストリスキャン。",
    "Serverless functions scanning": "サーバーレス関数のスキャン",
    "The following labels are added to any new resource created by Cortex in the cloud environment":
      "クラウド環境内でCortexによって作成される新しいリソースには、以下のラベルが追加されます",
    "To complete setup, enter these resource details during template execution in the AWS Console":
      "セットアップを完了するには、AWSコンソールでのテンプレート実行時にこれらのリソース詳細を入力してください",
    "Upload unknown files to WildFire": "未知のファイルをWildFireにアップロード",
    "(Keeping this enabled is strongly recommended)": "(この設定は有効のままにすることを強く推奨します)",
    ". This may require additional cloud provider permissions.":
      "。これには追加のクラウドプロバイダー権限が必要な場合があります。",
    "for provisioning all required resources yourself.": "必要なリソースをすべて自分でプロビジョニングするための",
    "Close": "閉じる",
    "Connect to AWS to execute the template.": "テンプレートを実行するためAWSに接続してください。",
    "Cortex has created your instance in pending state and your authentication template is available.":
      "Cortexがインスタンスを保留状態で作成し、認証テンプレートが利用可能になりました。",
    "Download CloudFormation": "CloudFormationをダウンロード",
    "Download the template and execute it in your cloud service provider.":
      "テンプレートをダウンロードし、クラウドサービスプロバイダー上で実行してください。",
    "Execute in AWS": "AWSで実行",
    "For more information,": "詳細については、",
    "Generate Template": "テンプレートを生成",
    "Template Delete": "テンプレートの削除",
    "Template has been deleted.": "テンプレートが削除されました。",
    "DON'T FORGET": "お忘れなく",
    "To finalize the process, you will need to choose a connection method.":
      "プロセスを完了するには、接続方法を選択する必要があります。",
    "Next steps": "次のステップ",
    "Note: If you select": "注: 選択した場合",
    "To complete the process, execute the template in AWS using one of the following methods.":
      "処理を完了するには、以下のいずれかの方法でAWS内でテンプレートを実行してください。",
    "To complete the process, execute the template in AWS": "処理を完了するには、AWS内でテンプレートを実行してください",
    "To configure flow or DNS log ingestion use": "フローログまたはDNSログの取り込みを設定するには",
    "View all data sources and their instances in": "すべてのデータソースとそのインスタンスを表示するには",
    "When the discovery scan is complete, view cloud assets in": "検出スキャンが完了したら、クラウド資産を表示するには",
    "When you're done": "完了したら",
    ", you must already be logged in to AWS.": "、あらかじめAWSにログインしている必要があります。",
    "view documentation": "ドキュメントを表示",
    "read more in documentation": "ドキュメントで詳細を確認",
    "tag key": "タグキー",
    "tag value": "タグ値",
    "ARE YOU SURE?": "本当によろしいですか?",
    "Clear": "クリア",
    "Cloud Labels": "クラウドラベル",
    "Collect Audit Logs (GCP Pub/Sub)": "監査ログを収集(GCP Pub/Sub)",
    "Connect to GCP workspace": "GCPワークスペースに接続",
    "Define scope of scans by including/excluding Folders, Projects or Regions":
      "フォルダ、プロジェクト、またはリージョンを含める/除外することでスキャンの範囲を定義します",
    "Discovery Enhancements": "検出機能の強化",
    "Download Terraform": "Terraformをダウンロード",
    "GCP Pub/Sub connector": "GCP Pub/Subコネクタ",
    "To complete the process, execute the template in GCP": "処理を完了するには、GCP内でテンプレートを実行してください",
    "To configure flow and DNS log ingestion use": "フローログおよびDNSログの取り込みを設定するには",
    ". Download this setup file and run it on your cloud service provider account.":
      "。このセットアップファイルをダウンロードし、クラウドサービスプロバイダーのアカウント上で実行してください。",
    "Modify by Folder/Project": "フォルダ/プロジェクトで変更",
    "Project Id": "プロジェクトID",
    "Project Name": "プロジェクト名",
    "Project Type": "プロジェクトタイプ",
    "Update and Resolve": "更新して解決",
    "Manually connect an instance": "インスタンスを手動で接続",
    "View Details": "詳細を表示",
    "Re-download Connection Template": "接続テンプレートを再ダウンロード",
    "1. To create the service principal, you must have the Entra ID Cloud Application Administrator role (or higher) in the Azure tenant you are onboarding.":
      "1. サービスプリンシパルを作成するには、オンボーディング対象のAzureテナントでEntra ID Cloud Application Administratorロール(またはそれ以上)が必要です。",
    "2. Open Azure Cloud Shell in the tenant you are onboarding, or open a local terminal with the Azure CLI installed, and log in to the target tenant before executing the command below.":
      "2. オンボーディング対象のテナントでAzure Cloud Shellを開くか、Azure CLIをインストールしたローカルターミナルを開き、以下のコマンドを実行する前に対象テナントにログインしてください。",
    "3. Run the following command:": "3. 以下のコマンドを実行してください:",
    "4. Verify the service principal was created": "4. サービスプリンシパルが作成されたことを確認してください",
    "Collect Audit Logs (Event Hub)": "監査ログを収集(Event Hub)",
    "Create Cortex service principal": "Cortexサービスプリンシパルを作成",
    "This service principal is Cortex's primary runtime identity in your tenant. Cortex uses it to read your Azure resources and to perform actions for the capabilities you enable. When you enter your Azure tenant ID, Cortex checks if the service principal already exists. If it is not found, follow the steps below.":
      "このサービスプリンシパルは、お客様のテナントにおけるCortexの主要なランタイムIDです。Cortexはこれを使用してAzureリソースを読み取り、有効化した機能に応じたアクションを実行します。AzureテナントIDを入力すると、Cortexはサービスプリンシパルが既に存在するかどうかを確認します。見つからない場合は、以下の手順に従ってください。",
    "Define scope of scans by including/excluding Management Groups, Subscriptions or Regions":
      "管理グループ、サブスクリプション、またはリージョンを含める/除外することでスキャンの範囲を定義します",
    "Documentation": "ドキュメント",
    "For more information, see the": "詳細については、以下をご覧ください:",
    "To complete the process, execute the template in Azure": "処理を完了するには、Azure内でテンプレートを実行してください",
    "To configure flow log ingestion use": "フローログの取り込みを設定するには",
    "Modify by Management Group/Subscription": "管理グループ/サブスクリプションで変更",
    "Onboard Microsoft Entra ID only": "Microsoft Entra IDのみをオンボード",
    "Tenant": "テナント",
    "Tenant ID": "テナントID",
    "All Outposts": "すべてのアウトポスト",
    "New Outpost": "新しいアウトポスト",
    "Outpost Account ID": "アウトポストアカウントID",
    "Outpost Account Name": "アウトポストアカウント名",
    "Create AWS Outpost": "AWSアウトポストを作成",
    "Custom Outpost": "カスタムアウトポスト",
    "Keep control of your network architecture. You provide the VPC and Subnets, and we’ll use Terraform to deploy the IAM roles, storage, and compute resources directly into your existing infrastructure.":
      "ネットワークアーキテクチャの管理はお客様側で維持できます。VPCとサブネットをご用意いただければ、Terraformを使用してIAMロール、ストレージ、コンピュートリソースを既存のインフラストラクチャに直接デプロイします。",
    "Use a predefined script to deploy all roles and resources, as well as configurations, to a dedicated account owned by you.":
      "あらかじめ定義されたスクリプトを使用して、すべてのロール、リソース、設定を、お客様が所有する専用アカウントにデプロイします。",
    "We are preparing your Amazon Web Services outpost account. Your next step is to create the connection to Amazon Web Services.":
      "Amazon Web Servicesアウトポストアカウントを準備しています。次のステップとして、Amazon Web Servicesへの接続を作成してください。",
    "Create GCP Outpost": "GCPアウトポストを作成",
    "Create Azure Outpost": "Azureアウトポストを作成",
    "We are preparing your Google Cloud Platform outpost account. Your next step is to create the connection to Google Cloud Platform.":
      "Google Cloud Platformアウトポストアカウントを準備しています。次のステップとして、Google Cloud Platformへの接続を作成してください。",
    "We are preparing your Microsoft Azure outpost account. Your next step is to create the connection to Microsoft Azure.":
      "Microsoft Azureアウトポストアカウントを準備しています。次のステップとして、Microsoft Azureへの接続を作成してください。",
    "Recommended": "推奨",
    "Number of instances": "インスタンス数",
    "Partition": "パーティション",
    "Features": "機能",
    "Select a dedicated account for the outpost (free from other resources)":
      "アウトポスト専用のアカウントを選択してください(他のリソースが存在しないもの)",
    "Onboard only one outpost for each account": "各アカウントにつき、アウトポストは1つのみオンボードしてください",
    "The tenant ID format is valid, but we couldn't connect to the account because the required configuration is missing.":
      "テナントIDの形式は有効ですが、必要な設定が不足しているためアカウントに接続できませんでした。",
    "To maximize security coverage, include collection of audit logs (Event Hub). This may require additional cloud service provider permissions.":
      "セキュリティカバレッジを最大化するため、監査ログ(Event Hub)の収集を含めてください。これには追加のクラウドサービスプロバイダー権限が必要な場合があります。",
    "Verify": "確認",
    "Read more in documentation.": "ドキュメントで詳細を確認してください。",
    "Select additional coverage. This may require additional actions in the respected cloud provider destination to establish trust.":
      "追加のカバレッジを選択してください。信頼関係を確立するため、対象のクラウドプロバイダー側で追加の操作が必要になる場合があります。",
    "Send samples to detonation in WildFire. Supported in Registry Scanning.":
      "サンプルをWildFireでの検出(detonation)に送信します。対応: レジストリスキャン。",
    "To maximize security coverage, include collection of audit logs (GCP Pub/Sub). This may require additional cloud service provider permissions.":
      "セキュリティカバレッジを最大化するため、監査ログ(GCP Pub/Sub)の収集を含めてください。これには追加のクラウドサービスプロバイダー権限が必要な場合があります。",
    "Delete": "削除",
    "If you delete it, running authentication templates of this pending instance will not create a valid instance, and will result in unused permissions.":
      "削除すると、この保留中のインスタンスの実行中の認証テンプレートは有効なインスタンスを作成しなくなり、未使用の権限が残ることになります。",
    "confirm": "確認",

    // --- External Issues Mapping 画面(ベンダー/製品名は固有名詞のため英語のまま) ---
    // --- External Issues Mapping screen (vendor/product names are proper nouns, left in English) ---
    "Filter Rule": "フィルタールール",
    "Mapping Statistics": "マッピング統計",
    "Rule Origin": "ルールの由来",
    "Vendor Product": "ベンダー製品",
    "( Mapping is disabled )": "( マッピングは無効です )",

    // --- データソース接続ウィザード(Google Workspace / Office 365 / クラウドプロバイダー説明 / 3rd Party AppSec Collector / ANY.RUN) ---
    // --- Data-source connection wizard (Google Workspace / Office 365 / cloud-provider descriptions / 3rd Party AppSec Collector / ANY.RUN) ---
    "About": "概要",
    "Google Workspace productivity and collaboration suite integration for data security, identity monitoring, and compliance":
      "Google Workspaceの生産性・コラボレーションスイートと連携し、データセキュリティ、アイデンティティの監視、コンプライアンスを実現します",
    "Name and configure the instance capabilities": "インスタンスの機能に名前を付けて設定してください",
    "Enter a unique name for this instance": "このインスタンスの一意の名前を入力してください",
    "Select Recommended to use the suggested authentication method for all selected capabilities. Select Advanced to configure your preferred authentication methods separately for each capability":
      "選択したすべての機能に推奨される認証方法を使用するには「推奨」を選択してください。機能ごとに任意の認証方法を個別に設定するには「詳細設定」を選択してください",
    "Enable Office 365 Log Collection": "Office 365ログ収集を有効にする",
    "tenant domain": "テナントドメイン",
    "Enter domain name": "ドメイン名を入力してください",
    "application client id": "アプリケーションクライアントID",
    "Enter the application client ID": "アプリケーションクライアントIDを入力してください",
    "Enter client secret": "クライアントシークレットを入力してください",
    "Scan and protect Salesforce data including files, attachments, and records":
      "ファイル、添付ファイル、レコードを含むSalesforceデータをスキャンして保護します",
    "Automate identity lifecycle management including user provisioning, updates, and access control":
      "ユーザーのプロビジョニング、更新、アクセス制御を含むアイデンティティのライフサイクル管理を自動化します",
    "Maintain visibility and control over SaaS-based identities, including users, groups, roles, and granular permissions.":
      "ユーザー、グループ、ロール、詳細な権限を含むSaaSベースのアイデンティティに対する可視性と制御を維持します。",
    "Find your domain: Copy the URL from your browser's address bar while logged into Salesforce.":
      "ドメインの確認方法: Salesforceにログインした状態で、ブラウザのアドレスバーからURLをコピーしてください。",
    "Domain URL": "ドメインURL",
    "Exiting now will discard all changes. This action cannot be undone.":
      "今終了すると、すべての変更が破棄されます。この操作は元に戻せません。",
    "Exit": "終了",
    "Collect logs and data from Alibaba Cloud, a leading cloud computing platform.":
      "主要なクラウドコンピューティングプラットフォームであるAlibaba Cloudからログとデータを収集します。",
    "Collect logs and data from Amazon Web Services (AWS).": "Amazon Web Services(AWS)からログとデータを収集します。",
    "Collect logs and data from Google Cloud Platform (GCP).": "Google Cloud Platform(GCP)からログとデータを収集します。",
    "Kubernetes automates deployment, scaling, and management of containerized apps. Connect your clusters by deploying Cortex connectors.":
      "Kubernetesは、コンテナ化されたアプリのデプロイ、スケーリング、管理を自動化します。Cortexコネクタをデプロイして、クラスタを接続してください。",
    "Collect logs and data from Azure, Microsoft’s cloud computing platform.":
      "MicrosoftのクラウドコンピューティングプラットフォームであるAzureからログとデータを収集します。",
    "Collects logs and data from Office 365 Management Activity API and Microsoft Graph API.":
      "Office 365 Management Activity APIおよびMicrosoft Graph APIからログとデータを収集します。",
    "Collect logs and data from OCI, Oracle’s cloud infrastructure platform.":
      "OracleのクラウドインフラストラクチャプラットフォームであるOCIからログとデータを収集します。",
    "Salesforce CRM services for data security, identity management, automation, remediation and SaaS Posture Security":
      "データセキュリティ、アイデンティティ管理、自動化、修復、SaaSポスチャセキュリティのためのSalesforce CRMサービス",
    "3rd Party AppSec Collector": "サードパーティAppSecコレクタ",
    "Name your collector": "コレクタに名前を付けてください",
    "Test file (optional)": "テストファイル(オプション)",
    "Create your 3rd Party AppSec Collector": "サードパーティAppSecコレクタを作成",
    "Ingest SARIF output third-party AppSec tools and unify all scan in one central view (applicable for SAST findings)":
      "サードパーティのAppSecツールのSARIF出力を取り込み、すべてのスキャンを1つの中央ビューに統合します(SASTの検出結果に適用)",
    "What do you need to do": "必要な操作",
    "Name your collector instance.": "コレクタインスタンスに名前を付けてください。",
    "Generate an API key and integrate the provided API key and URL into your chosen process.":
      "APIキーを生成し、提供されたAPIキーとURLを任意のプロセスに統合してください。",
    "(Optional) Test your SARIF file.": "(オプション)SARIFファイルをテストしてください。",
    "Use a clear, descriptive name to identify this collector easily.":
      "このコレクタを簡単に識別できるよう、わかりやすい名前を付けてください。",
    "Generate Your Secure Ingestion API Key": "安全な取り込み用APIキーを生成",
    "Generate an API key to securely send SARIF results to your collector.":
      "SARIFの結果をコレクタへ安全に送信するためのAPIキーを生成します。",
    "Deprecated. Use ANY.RUN TI Feeds, ANY.RUN TI Lookup, ANY.RUN Cloud Sandbox instead.":
      "非推奨です。代わりにANY.RUN TI Feeds、ANY.RUN TI Lookup、ANY.RUN Cloud Sandboxを使用してください。",
    "Server URL": "サーバーURL",
    "Partner Contributed Integration": "パートナー提供の統合",
    "Support and maintenance for this integration are provided by the author. Please use the following contact details:":
      "この統合のサポートおよび保守は作成者によって提供されます。以下の連絡先をご利用ください:",
    "How to configure": "設定方法",
    // NOTE: The 5 "How to configure" steps below render each UI term (Settings, Integrations, Add instance,
    // Username, Password, Test) as its own <strong> element, splitting each step's sentence into several text
    // nodes. A single flat-sentence dictionary entry can never match that (translateText() only ever sees one
    // leaf text node at a time), so each step is instead translated fragment-by-fragment here, relying on the
    // already-existing standalone translations of those bolded terms ("Settings"→common.js, "Integrations"→
    // general-settings.js, "Add Instance"/"Username"/"Password"→common.js/data-collection.js, "Test"→
    // data-classification.js) to fill in the bolded parts. The resulting sentences are necessarily a bit more
    // literal than a hand-written translation (DOM order can't be rearranged to match natural Japanese word
    // order), but they are fully Japanese with no English left over.
    "Navigate to": "移動先:",
    // NOTE: the vendor's actual name includes the period ("ANY.RUN"), confirmed from the live page's DOM — a
    // version of this key without the period ("ANYRUN") was tried first based on a hand-copied description and
    // never matched.
    "Search for ANY.RUN.": "ANY.RUNを検索してください。",
    "to create and configure a new integration instance.": "して、新しい統合インスタンスを作成・設定します。",
    // "insert the text  _token  into the Username parameter and the API key you have into the Password."
    "If using API Key authentication method, insert the text": "APIキー認証方式を使用する場合は、テキスト",
    // Fragment between the "_token" code span and the "Username" <strong>. Short and generic-looking, so if a
    // future addition elsewhere ever needs a different translation for literal "into the" text, split this
    // dictionary entry out to a more specific key instead of changing this one.
    "into the": "を",
    "parameter and the API key you have into the": "パラメータに入力し、お持ちのAPIキーを",
    "to validate the URLs, token, and connection.": "して、URL、トークン、接続を検証します。",
    // ANY.RUN's actual steps 4-5 ("Insert ANY.RUN API-KEY into the <strong>Password</strong> parameter." /
    // "Please use "ANY.RUN" as username.") turned out to be simpler than the generic Username+Password
    // instructions above — those apply to some other connector's wizard, not this one. Step 5 has no bolded
    // term, so it's a normal flat-sentence entry; step 4 still needs the fragment treatment since "Password" is
    // bolded.
    "Insert ANY.RUN API-KEY into the": "ANY.RUN API-KEYを",
    // Generic/short fragment, paired specifically with "Insert ANY.RUN API-KEY into the" above (bakes in "入力
    // してください"). If a future addition elsewhere needs "parameter." with a different verb, split this out
    // to a more specific key instead of changing this one.
    "parameter.": "パラメータに入力してください。",
    "Please use “ANY.RUN” as username.": "ユーザー名には「ANY.RUN」を使用してください。",
    "View Integration Documentation": "統合のドキュメントを表示",
    "Select Content": "コンテンツを選択",
    "The selected items will automatically be set up. You can add or edit these items later on.":
      "選択した項目は自動的に設定されます。これらの項目は後から追加・編集できます。",
    "Customize": "カスタマイズ",
    "Connecting this data source will automatically install and update any required dependencies.":
      "このデータソースを接続すると、必要な依存関係が自動的にインストール・更新されます。",
    "Required Dependencies:": "必須の依存関係:",

    // --- ANY.RUN / Generic AppSec collector の追加文言 ---
    // --- Additional wording for the ANY.RUN / Generic AppSec collector wizard pages ---
    "Generic AppSec collector to ingest code scan data": "コードスキャンデータを取り込む汎用AppSecコレクタ",
    "ANY.RUN Sandbox is an online interactive sandbox for malware analysis, a tool for detection, monitoring, and research of cyber threats in real time.":
      "ANY.RUN Sandboxは、マルウェア分析のためのオンラインのインタラクティブなサンドボックスであり、サイバー脅威をリアルタイムで検出・監視・調査するためのツールです。",
    "New Data Source": "新しいデータソース",
    "Root URL": "ルートURL",
    "This section explains how to configure the instance of ANY.RUN Cloud Sandbox in Cortex.":
      "このセクションでは、CortexでANY.RUN Cloud Sandboxのインスタンスを設定する方法を説明します。",
    "API-KEY from your ANY.RUN account is required.": "ANY.RUNアカウントのAPIキーが必要です。",

    // --- ARIA Packet Intelligence(パートナー提供の統合)インスタンス設定ページ ---
    // --- ARIA Packet Intelligence (partner-contributed integration) instance setup page ---
    "The ARIA Cybesecurity Solutions Software-Defined Security (SDS) platform integrates with Cortex to add robustness when responding to incidents. The combination of ARIA hardware, in the form of a Secure Intelligent Adapter (SIA), and software, specifically Packet Intelligence and SDS orchestrator (SDSo), provides the elements required to react instantly when an incident is detected. When integrated with the ARIA solution, you can create playbooks that instruct one or more SIAs to add, modify, or delete rules automatically. These rule changes, which take effect immediately, can block conversations, redirect packets to a recorder or VLAN, or perform a variety of other actions.":
      "ARIA Cybersecurity SolutionsのSoftware-Defined Security(SDS)プラットフォームはCortexと連携し、インシデント対応時の堅牢性を高めます。ARIAのハードウェア(Secure Intelligent Adapter(SIA))と、ソフトウェア(具体的にはPacket IntelligenceおよびSDSオーケストレーター(SDSo))を組み合わせることで、インシデント検出時に即座に対応するために必要な要素が提供されます。ARIAソリューションと連携すると、1つ以上のSIAに対してルールの追加、変更、削除を自動的に指示するPlaybookを作成できます。これらのルール変更は即座に反映され、通信の遮断、パケットのレコーダーやVLANへのリダイレクト、その他さまざまなアクションを実行できます。",
    "Name should be unique, this name is taken":
      "名前は一意である必要があります。この名前は既に使用されています",
    "SDSo Base URL (e.g. http://<IP address or FQDN of SDSo Node>:7443)":
      "SDSoベースURL(例: http://<IP address or FQDN of SDSo Node>:7443)",
    "Single engine:":
      "単一エンジン:",
    "Users should install SDSo onto a server according to the instructions in Software-Defined Security Installation Guide. During the installation process you can determine the IP address or FQDN of your SDSo instance which is used in the SDSo Base URL. You should also install an SIA according to the Secure Intelligent Adapter Installation Guide. For more information on connecting an SDSo and SIA see the Software-Defined Security Orchestrator User Guide. In addition, you must deploy the PI security service to your SIA, see the Packet Intelligence User Guide for more information.":
      "ユーザーは、Software-Defined Security Installation Guideの手順に従って、サーバーにSDSoをインストールしてください。インストール中に、SDSoベースURLで使用するSDSoインスタンスのIPアドレスまたはFQDNを確認できます。また、Secure Intelligent Adapter Installation Guideに従ってSIAもインストールしてください。SDSoとSIAの接続の詳細については、Software-Defined Security Orchestrator User Guideを参照してください。さらに、PIセキュリティサービスをSIAにデプロイする必要があります。詳細については、Packet Intelligence User Guideを参照してください。",
    "No recommendations are available":
      "利用可能な推奨事項はありません",

    // --- AWS - EC2 integration instance setup page / AWS - EC2 統合インスタンス設定ページ ---
    // NOTE: the trailing link text "AWS Integrations - Authentication" is a doc title and is intentionally left in English.
    "Amazon Web Services Elastic Compute Cloud (EC2).":
      "Amazon Web Services Elastic Compute Cloud(EC2)。",
    "Switch to credentials":
      "認証情報に切り替え",
    "Secret Key":
      "シークレットキー",
    "AWS STS Regional Endpoints":
      "AWS STSリージョナルエンドポイント",
    "Before you can use AWS EC2, you need to perform several configuration steps in your AWS environment.":
      "AWS EC2を使用するには、AWS環境でいくつかの設定手順を実行する必要があります。",
    "Prerequisites":
      "前提条件",
    "Attach an instance profile with the required permissions to the Cortex server or engine that is running on your AWS environment.":
      "必要な権限を持つインスタンスプロファイルを、AWS環境で実行されているCortexサーバーまたはエンジンにアタッチします。",
    "Instance profile requires minimum permission: sts:AssumeRole.":
      "インスタンスプロファイルには、最小限の権限としてsts:AssumeRoleが必要です。",
    "Instance profile requires permission to assume the roles needed by the AWS integrations.":
      "インスタンスプロファイルには、AWS統合で必要なロールを引き受けるための権限が必要です。",
    "Configure AWS Settings":
      "AWS設定の構成",
    "Create an IAM Role for the Instance Profile.":
      "インスタンスプロファイル用のIAMロールを作成します。",
    "Attach a Role to the Instance Profile.":
      "インスタンスプロファイルにロールをアタッチします。",
    "Configure the Necessary IAM Roles that the AWS Integration Can Assume.":
      "AWS統合が引き受けることができる、必要なIAMロールを構成します。",
    "For detailed instructions, see the":
      "詳細な手順については、次を参照してください:",

    // --- AWS - IAM (user lifecycle management) integration instance setup page ---
    "Integrate with AWS's services to execute CRUD and Group operations for employee lifecycle processes.":
      "AWSのサービスと連携し、従業員ライフサイクルプロセス向けにCRUD操作およびグループ操作を実行します。",
    "Base URL":
      "ベースURL",
    "Authentication Token":
      "認証トークン",
    "Allow creating users":
      "ユーザーの作成を許可",
    "Allow updating users":
      "ユーザーの更新を許可",
    "Allow enabling users":
      "ユーザーの有効化を許可",
    "Allow disabling users":
      "ユーザーの無効化を許可",
    "Automatically create user if not found in update command":
      "更新コマンドでユーザーが見つからない場合、ユーザーを自動的に作成",
    "Incoming Mapper":
      "受信マッパー",

    // --- AWS - Identity and Access Management integration instance setup page ---
    "Amazon Web Services Identity and Access Management (IAM).":
      "Amazon Web Services Identity and Access Management(IAM)。",
    "Role Session Name":
      "ロールセッション名",

    // --- AWS CodeBuild data-source wizard (Step 1: Add Environment Variables) ---
    "Add Environment Variables":
      "環境変数を追加",
    "Configure Subscription":
      "サブスクリプションを設定",
    "Before you begin, you'll need to add your API key and API ID to your AWS Secrets Manager. Please copy and use the secret names suggested below as the secret keys. If needed, you can generate a new token using the link below, copy and use the generated values as your secrets values.":
      "開始する前に、APIキーとAPI IDをAWS Secrets Managerに追加する必要があります。以下に提示されているシークレット名を、シークレットキーとしてコピーして使用してください。必要に応じて、以下のリンクから新しいトークンを生成し、生成された値をシークレットの値としてコピーして使用できます。",
    "Create the following secrets on your AWS Secrets Manager. Ensure that the IAM service role associated with your CodeBuild project has the necessary permissions to read the Cortex API key and key ID from AWS Secrets Manager.":
      "AWS Secrets Manager上に次のシークレットを作成してください。CodeBuildプロジェクトに関連付けられたIAMサービスロールに、AWS Secrets ManagerからCortex APIキーとキーIDを読み取るために必要な権限があることを確認してください。",
    "Choose the architecture your CI tool runs on:":
      "CIツールが実行されるアーキテクチャを選択してください:",
    "Select architecture":
      "アーキテクチャを選択",

    // --- AWS CodeCommit data-source wizard ---
    // NOTE: the steps below are split by <b>/<button> into several text nodes, so each sentence is translated
    // fragment-by-fragment (DOM order is fixed). AWS console labels / CloudFormation parameter names inside the
    // bold elements (e.g. "CloudFormation > Stacks", "Resource Name Prefix:", "Select Repositories") are left in English.
    "This integration enables you to effectively detect, analyze and remediate security issues.":
      "この統合により、セキュリティ上の問題を効果的に検出、分析、修復できます。",
    "Download the":
      "次をダウンロード:",
    "CloudFormation template":
      "CloudFormationテンプレート",
    ", alternatively, copy the link and send it to your administrator for the next steps.":
      "。または、リンクをコピーして管理者に送り、次の手順を依頼してください。",
    "In your AWS console, navigate to":
      "AWSコンソールで、次の場所に移動します:",
    "Click on":
      "その後、次をクリックします:",
    ". Upload the template file and hit next. Provide the stack name. Note that the following parameters will be pre populated:":
      "。テンプレートファイルをアップロードし、Nextをクリックします。スタック名を入力します。次のパラメータは事前に入力されています:",
    "You can modify the default value.":
      "デフォルト値を変更できます。",
    "DO NOT change this ID.":
      "このIDは変更しないでください。",
    "After the stack is created, navigate to":
      "スタックの作成後、次の場所に移動します:",
    ", and verify that the integration is displayed.":
      "。統合が表示されていることを確認してください。",
    "Select Repositories: In the":
      "リポジトリを選択: 統合を完了するには、",
    "menu choose":
      "メニューで",
    "to complete the integration.":
      "を選択します。",

    // --- AbuseIPDB integration instance setup page ---
    // NOTE: the "A+ ... F" source-reliability scale is the standard option list of the "Source Reliability" dropdown shared by many integrations.
    "Central repository to report and identify IP addresses that have been associated with malicious activity online. Check the Detailed Information section for more information on how to configure the integration.":
      "オンライン上の悪意のあるアクティビティに関連付けられたIPアドレスを報告・特定するための中央リポジトリです。統合の設定方法の詳細については、「詳細情報」セクションを確認してください。",
    "AbuseIP server URL":
      "AbuseIPサーバーURL",
    "API Key (v2)":
      "APIキー(v2)",
    "Abuse.ch Hunting API URL":
      "Abuse.ch Hunting API URL",
    "Abuse.ch Hunting API Key":
      "Abuse.ch Hunting APIキー",
    "Collect":
      "収集",
    "Source Reliability":
      "ソースの信頼性",
    "A+ - 3rd party enrichment":
      "A+ - サードパーティによる補完",
    "A - Completely reliable":
      "A - 完全に信頼できる",
    "B - Usually reliable":
      "B - 通常は信頼できる",
    "C - Fairly reliable":
      "C - ある程度信頼できる",
    "D - Not usually reliable":
      "D - 通常は信頼できない",
    "E - Unreliable":
      "E - 信頼できない",
    "F - Reliability cannot be judged":
      "F - 信頼性を判断できない",
    "Disable reputation lookups for private IP addresses":
      "プライベートIPアドレスに対する評価の照会を無効にする",
    "Minimum score threshold":
      "最小スコアしきい値",
    "Minimum score from AbuseIPDB for the IP to be considered malicious. (Must be above 20).":
      "IPが悪意のあるものと見なされるための、AbuseIPDBの最小スコア。(20より大きい値にする必要があります)。",
    "Searching an entire subnet far back in time (e.g. Days=365) will likely cause a server timeout, and you will receive a 500 Internal Server Error response from AbuseIPDB server.":
      "サブネット全体を遠い過去まで遡って検索すると(例: Days=365)、サーバーのタイムアウトが発生する可能性が高く、AbuseIPDBサーバーから500 Internal Server Errorのレスポンスが返されます。",
    "Report Categories":
      "レポートカテゴリ",
    "Selected items were set up on first connection. You can change these items via the original pages.":
      "選択した項目は初回接続時に設定されました。これらの項目は元のページから変更できます。",

    // --- Active Directory Query (deprecated) integration instance setup page ---
    "Deprecated. Use the Active Directory Query v2 integration instead.":
      "非推奨です。代わりにActive Directory Query v2統合を使用してください。",
    "Server IP (e.g. 192.168.0.1)":
      "サーバーIP(例: 192.168.0.1)",
    "Base DN (e.g. DC=domain,DC=com)":
      "ベースDN(例: DC=domain,DC=com)",
    "Security Type (none/ssl/tls)":
      "セキュリティタイプ(none/ssl/tls)",
    "Page Size":
      "ページサイズ",
    "Do not validate server certificate (insecure)":
      "サーバー証明書を検証しない(安全ではありません)",
    "Full path for CA certificate of Active Directory server (type pem)":
      "Active DirectoryサーバーのCA証明書のフルパス(pem形式)",
    "There are no additional instructions for this integration.":
      "この統合に追加の手順はありません。",

    // --- Active Directory Query v2 integration instance setup page ---
    "The Active Directory Query integration enables you to access and manage Active Directory objects (users, contacts, and computers).":
      "Active Directory Query統合により、Active Directoryオブジェクト(ユーザー、連絡先、コンピューター)にアクセスして管理できます。",
    "Server IP address (for example, 192.168.0.1)":
      "サーバーIPアドレス(例: 192.168.0.1)",
    "Base DN (for example \"dc=company,dc=com\")":
      "ベースDN(例: \"dc=company,dc=com\")",
    "Secure Connection":
      "セキュア接続",
    "Outgoing Mapper":
      "送信マッパー",
    "Group CN for terminated employees":
      "退職した従業員のグループCN",
    "Active Directory search uses paging. You set the page size by specifying the ‘page size’ parameter in the instance settings.":
      "Active Directoryの検索ではページングが使用されます。インスタンス設定の「ページサイズ」パラメータを指定して、ページサイズを設定します。",

    // --- Agari Phishing Defense (Partner Contribution) integration instance setup page ---
    // NOTE: the docs sentences are split by inline links into several text nodes, so they are translated
    // fragment-by-fragment ("Quick Start", "this", "page." etc. are link texts / sentence tails).
    "Agari Phishing Defense stops phishing, BEC, and other identity deception attacks that trick employees into harming your business.":
      "Agari Phishing Defenseは、従業員をだまして事業に損害を与えるフィッシング、BEC(ビジネスメール詐欺)、その他のなりすまし攻撃を阻止します。",
    "URL to connect to Agari":
      "Agariに接続するためのURL",
    "API Key":
      "APIキー",
    "Fetches issues":
      "イシューを取得",
    "Maximum number of incidents to fetch every time":
      "毎回取得するインシデントの最大数",
    "First fetch time interval":
      "最初の取得時間間隔",
    "Policy action taken":
      "実行されたポリシーアクション",
    "Exclude alerts":
      "アラートを除外",
    "System Alert":
      "システムアラート",
    "Fetches policy events as per the filter to limit the amount of data. Can be applied to specific fields.":
      "データ量を制限するため、フィルターに従ってポリシーイベントを取得します。特定のフィールドに適用できます。",
    "To use this integration, simply follow the":
      "この統合を使用するには、",
    "Quick Start":
      "クイックスタート",
    "steps to enable API access.":
      "の手順に従ってAPIアクセスを有効にしてください。",
    "Contact us":
      "お問い合わせ",
    "if you don’t have an Agari account.":
      "(Agariアカウントをお持ちでない場合)。",
    "Syntax to filter policy events":
      "ポリシーイベントをフィルタリングするための構文",
    "To filter by applying the valid syntax you can refer to":
      "有効な構文を適用してフィルタリングするには、",
    "this":
      "こちら",
    "page.":
      "のページを参照してください。",

    // --- Akamai WAF integration instance setup page ---
    // NOTE: the link text "Akamai Control Panel" (product console name) is intentionally left in English.
    "Use the Akamai WAF integration to manage common sets of lists used by various Akamai security products and features. This is the modified version where a new command \"akamai-update-network-list-elements\" was added by the SA.":
      "Akamai WAF統合を使用して、さまざまなAkamaiセキュリティ製品や機能で使用される共通のリストセットを管理します。これは、SAによって新しいコマンド「akamai-update-network-list-elements」が追加された修正版です。",
    "Server URL (e.g., https://example.net)":
      "サーバーURL(例: https://example.net)",
    "Client token":
      "クライアントトークン",
    "Access token":
      "アクセストークン",
    "Client secret":
      "クライアントシークレット",
    "The Network Lists API enables you to manage a common set of lists for use in various Akamai security products such as Kona Site Defender, Web App Protector, and Bot Manager. Network lists are shared sets of IP addresses, CIDR blocks, or broad geographic areas. In addition to managing your own lists, you can also access read-only lists that Akamai dynamically updates for you.":
      "Network Lists APIを使用すると、Kona Site Defender、Web App Protector、Bot Managerなど、さまざまなAkamaiセキュリティ製品で使用する共通のリストセットを管理できます。ネットワークリストは、IPアドレス、CIDRブロック、または広範な地理的領域の共有セットです。独自のリストを管理するだけでなく、Akamaiが動的に更新する読み取り専用リストにもアクセスできます。",
    "To generate API keys go to the":
      "APIキーを生成するには、次に移動します:",
    ". For detailed instructions, see the integration documention.":
      "。詳細な手順については、統合のドキュメントを参照してください。",

    // --- Analyst1 (Partner Contribution) integration instance setup page ---
    // NOTE: the docs lists/sentences are split by <b>/<code> into several text nodes, so they are translated
    // fragment-by-fragment. The lone connectors "and" / "or" / "to" between bold items are intentionally NOT registered
    // (too generic: they would also hit AND/OR/To labels elsewhere via the case-insensitive fallback) and stay in English.
    "This integration utilizes Analyst1's system to enrich XSOAR indicators with data provided by the Analyst1 REST API, such as actor and malware information, activity and reported dates, evidence and hit counts, and more.":
      "この統合はAnalyst1のシステムを利用し、Analyst1 REST APIが提供するデータ(アクターやマルウェアの情報、アクティビティ日や報告日、証拠数やヒット数など)でXSOARのインジケーターを拡充します。",
    "Basic Authentication":
      "基本認証",
    "Client ID/Username":
      "クライアントID/ユーザー名",
    "Client Secret/Password":
      "クライアントシークレット/パスワード",
    "Domain of Analyst1 server to use":
      "使用するAnalyst1サーバーのドメイン",
    "Log Level:":
      "ログレベル:",
    "Off":
      "オフ",
    "Do not use in CLI by default":
      "デフォルトではCLIで使用しない",
    "Risk Score Mapping: Lowest":
      "リスクスコアマッピング: 最低",
    "Benign":
      "無害",
    "Risk Score Mapping: Low":
      "リスクスコアマッピング: 低",
    "Risk Score Mapping: Moderate":
      "リスクスコアマッピング: 中",
    "Suspicious":
      "疑わしい",
    "Risk Score Mapping: High":
      "リスクスコアマッピング: 高",
    "Risk Score Mapping: Critical":
      "リスクスコアマッピング: 重大",
    "Risk Score Mapping: Unknown":
      "リスクスコアマッピング: 不明",
    "Apply Analyst1 entity-type tags to indicators":
      "Analyst1のエンティティタイプタグをインジケーターに適用",
    "Indicator Expiration Method":
      "インジケーターの有効期限方式",
    "Indicator Type":
      "インジケータータイプ",
    "Analyst1 Integration Configuration":
      "Analyst1統合の設定",
    "This integration connects XSOAR to the Analyst1 threat intelligence platform to enrich indicators and manage sensor taskings.":
      "この統合は、XSOARをAnalyst1の脅威インテリジェンスプラットフォームに接続し、インジケーターの拡充とセンサータスクの管理を行います。",
    "Configuration Parameters":
      "設定パラメータ",
    "Server Configuration":
      "サーバー設定",
    "Domain of Analyst1 server":
      "Analyst1サーバーのドメイン",
    ": Enter your Analyst1 server domain in the format":
      ": 次の形式でAnalyst1サーバーのドメインを入力してください:",
    "Do not include":
      "次は含めないでください:",
    "This integration supports two authentication methods. Select one via the":
      "この統合は2つの認証方法をサポートしています。次の",
    "dropdown.":
      "ドロップダウンから選択してください。",
    "Basic Authentication (default)":
      "基本認証(デフォルト)",
    "Enter the":
      "次を入力してください:",
    "for an Analyst1 account that has the REST role assigned.":
      "(RESTロールが割り当てられたAnalyst1アカウントのもの)。",
    "In Analyst1, create (or open) an API Key.":
      "Analyst1でAPIキーを作成(または既存のキーを開く)します。",
    "Copy the":
      "次をコピーしてください:",
    "Client ID":
      "クライアントID",
    "from the API Key.":
      "(APIキーから)。",
    "In XSOAR, set":
      "XSOARで、次を設定してください:",
    "Enter the Client ID in the":
      "クライアントIDを次の",
    "field and the Client Secret in the":
      "フィールドに、クライアントシークレットを次の",
    "field.":
      "フィールドに入力します。",
    "Risk Score Mapping (Optional)":
      "リスクスコアマッピング(任意)",
    "The integration includes configurable risk score mapping parameters that control how Analyst1 risk scores map to XSOAR verdicts:":
      "この統合には、Analyst1のリスクスコアをXSOARの判定にどのようにマッピングするかを制御する、設定可能なリスクスコアマッピングパラメータが含まれています:",
    "Lowest":
      "最低",
    ": Default mapping is Benign":
      ": デフォルトのマッピングは「無害」",
    ": Default mapping is Unknown":
      ": デフォルトのマッピングは「不明」",
    "Moderate":
      "中",
    ": Default mapping is Suspicious":
      ": デフォルトのマッピングは「疑わしい」",
    ": Default mapping is Malicious":
      ": デフォルトのマッピングは「悪意のある」",
    "These can be customized based on your organization’s risk tolerance and threat response procedures.":
      "これらは、組織のリスク許容度や脅威対応手順に基づいてカスタマイズできます。",
    "Entity Type Tags (Optional)":
      "エンティティタイプタグ(任意)",
    "Enable “Apply Analyst1 entity-type tags to indicators” to automatically tag indicators with Analyst1 entity classifications such as:":
      "「Analyst1のエンティティタイプタグをインジケーターに適用」を有効にすると、次のようなAnalyst1のエンティティ分類でインジケーターに自動的にタグ付けされます:",
    "For assistance with this integration, contact Analyst1 support:":
      "この統合に関するサポートが必要な場合は、Analyst1サポートにお問い合わせください:",

    // --- Anomali Security Analytics Alerts (Partner Contribution) integration instance setup page ---
    // NOTE: the product title, support email and URL are intentionally left in English.
    "The Anomali Security Analytics pack allows users to manage security alerts by interacting directly with the Anomali Security Analytics platform. It supports creating search jobs, monitoring their status, retrieving results, and updating alert statuses or comments, streamlining integration with Palo Alto XSOAR.":
      "Anomali Security Analyticsパックを使用すると、Anomali Security Analyticsプラットフォームと直接やり取りしてセキュリティアラートを管理できます。検索ジョブの作成、ステータスの監視、結果の取得、アラートのステータスやコメントの更新をサポートし、Palo Alto XSOARとの統合を効率化します。",
    "Switch to username and password":
      "ユーザー名とパスワードに切り替え",
    "(Username, API Key)":
      "(ユーザー名、APIキー)",
    "No credentials":
      "認証情報なし",
    "Fetch query":
      "フェッチクエリ",
    "Maximum incidents to fetch.":
      "フェッチするインシデントの最大数。",
    "First fetch time":
      "最初のフェッチ時刻",
    "Incidents Fetch Interval":
      "インシデントのフェッチ間隔",
    "To access Anomali Security Analysis Alerts using the API, you must obtain an API key from your Anomali Security Analytics account. Please refer to the Anomali documentation or contact your administrator to get the API credentials. Once obtained, configure the integration by entering the API key in the integration setup page.":
      "API を使用して Anomali Security Analysis Alerts にアクセスするには、Anomali Security Analytics アカウントから API キーを取得する必要があります。API 認証情報の取得方法については、Anomali のドキュメントを参照するか、管理者にお問い合わせください。取得後、統合のセットアップページで API キーを入力して統合を構成します。",

    // --- Anomali ThreatStream (Deprecated) integration instance setup page ---
    // NOTE: the product title is intentionally left in English.
    "Deprecated. Use Anomali ThreatStream v3 instead. Use Anomali ThreatStream to query and submit threats":
      "非推奨です。代わりにAnomali ThreatStream v3を使用してください。Anomali ThreatStreamを使用して、脅威のクエリと送信を行います",
    "Server URL (e.g. https://192.168.0.1)":
      "サーバーURL(例: https://192.168.0.1)",

    // --- Anomali ThreatStream Feed integration instance setup page ---
    // NOTE: the product title and the doc URL are intentionally left in English. The last key is the text node before the
    // <a> link ("register at <link>."), so its translation has no trailing punctuation (the "." after the link is a separate node).
    "Use the Anomali ThreatStream Feed Integration to fetch indicators from the Anomali ThreatStream.":
      "Anomali ThreatStream Feed統合を使用して、Anomali ThreatStreamからインジケーターをフェッチします。",
    "Server URL (e.g., https://www.test.com)":
      "サーバーURL(例: https://www.test.com)",
    "Fetches indicators":
      "インジケーターをフェッチ",
    "Classifier":
      "分類子",
    "Mapper (incoming)":
      "マッパー(受信)",
    "Fetch by":
      "フェッチ基準",
    "Modified Time":
      "更新日時",
    "Feed Fetch Interval":
      "フィードのフェッチ間隔",
    "Anomali ThreatStream Feed Integration Help":
      "Anomali ThreatStream Feed統合のヘルプ",
    "Anomali ThreatStream is a leading threat intelligence platform designed to help organizations collect, analyze, and act on vast amounts of threat data. This integration allows you to automatically fetch Indicators of Compromise (IOCs) such as IPs, domains, URLs, and file hashes directly into your security operations platform, enhancing your ability to detect and respond to cyber threats.":
      "Anomali ThreatStreamは、組織が膨大な脅威データを収集、分析し、対応できるように設計された、主要な脅威インテリジェンスプラットフォームです。この統合により、IP、ドメイン、URL、ファイルハッシュなどの侵害指標(IOC)をセキュリティオペレーションプラットフォームに自動的にフェッチでき、サイバー脅威の検出と対応の能力が向上します。",
    "How to Configure Your Integration":
      "統合の設定方法",
    "API Key: Paste the API key you retrieved from your Anomali ThreatStream account into this field. To access ThreatStream using the API, you need a user ID and API key. To get these credentials, register at":
      "APIキー: Anomali ThreatStreamアカウントから取得したAPIキーをこのフィールドに貼り付けます。APIを使用してThreatStreamにアクセスするには、ユーザーIDとAPIキーが必要です。これらの認証情報を取得するには、次のURLで登録してください",

    // --- Anomali ThreatStream Feed: additions (per-sentence halves of the two docs paragraphs, in case the paragraph is split
    // into separate text nodes at the line break; plus title/data-tooltip attribute strings: tooltips, "Go to ..." button, clear icon) ---
    "Anomali ThreatStream is a leading threat intelligence platform designed to help organizations collect, analyze, and act on vast amounts of threat data.":
      "Anomali ThreatStreamは、組織が膨大な脅威データを収集、分析し、対応できるように設計された、主要な脅威インテリジェンスプラットフォームです。",
    "This integration allows you to automatically fetch Indicators of Compromise (IOCs) such as IPs, domains, URLs, and file hashes directly into your security operations platform, enhancing your ability to detect and respond to cyber threats.":
      "この統合により、IP、ドメイン、URL、ファイルハッシュなどの侵害指標(IOC)をセキュリティオペレーションプラットフォームに自動的にフェッチでき、サイバー脅威の検出と対応の能力が向上します。",
    "API Key: Paste the API key you retrieved from your Anomali ThreatStream account into this field.":
      "APIキー: Anomali ThreatStreamアカウントから取得したAPIキーをこのフィールドに貼り付けます。",
    "To access ThreatStream using the API, you need a user ID and API key. To get these credentials, register at":
      "APIを使用してThreatStreamにアクセスするには、ユーザーIDとAPIキーが必要です。これらの認証情報を取得するには、次のURLで登録してください",
    "Classifier determines the type of issue that is created for events ingested from this integration instance.":
      "分類子は、この統合インスタンスから取り込まれたイベントに対して作成されるイシューのタイプを決定します。",
    "Mapping determines how event fields are mapped to the Cortex CLOUD issue's fields.":
      "マッピングは、イベントのフィールドをCortex CLOUDのイシューのフィールドにどのようにマッピングするかを決定します。",
    "Go to Classification & Mapping page":
      "分類とマッピングのページに移動",
    "Cancel Selection":
      "選択をキャンセル",

    // --- Anomali ThreatStream v2 (Deprecated) integration instance setup page ---
    // NOTE: the product title is intentionally left in English. The docs paragraph is already registered (ThreatStream Feed page).
    "Deprecated. Use Anomali ThreatStream v3 integration instead.":
      "非推奨です。代わりにAnomali ThreatStream v3統合を使用してください。",
    "Threshold of the indicator.":
      "インジケーターのしきい値。",

    // --- Anomali ThreatStream v3 integration instance setup page ---
    // NOTE: product title / doc h1 / URL are intentionally left in English. The docs paragraph is split by inline <span>s and by line
    // breaks, so it is registered line-by-line and fragment-by-fragment ("If the indicator" + "confidence" + "...").
    // "confidence" is a generic one-word key: the case-insensitive fallback will also translate a standalone "Confidence" elsewhere.
    "Use Anomali ThreatStream to query and submit threats.":
      "Anomali ThreatStreamを使用して、脅威のクエリと送信を行います。",
    "Default DBOT score for indicators with low confidence":
      "信頼度が低いインジケーターのデフォルトDBOTスコア",
    "Remote API":
      "リモートAPI",
    "URL threshold":
      "URLのしきい値",
    "IP threshold":
      "IPのしきい値",
    "Domain threshold":
      "ドメインのしきい値",
    "File threshold":
      "ファイルのしきい値",
    "Email threshold":
      "メールのしきい値",
    "Include inactive results":
      "非アクティブな結果を含める",
    "Create relationships":
      "リレーションシップを作成",
    "Configure Indicator Threshold Parameters":
      "インジケーターのしきい値パラメーターの構成",
    "Each indicator has a threshold parameter that impacts the indicator’s DBotScore calculation.":
      "各インジケーターには、インジケーターのDBotScore計算に影響するしきい値パラメーターがあります。",
    "The indicator DBotScore is calculated based on the threshold parameter as follows:":
      "インジケーターのDBotScoreは、しきい値パラメーターに基づいて次のように計算されます:",
    "If the indicator":
      "インジケーターの",
    "confidence":
      "信頼度",
    "value is above the threshold parameter value, the Score is set to 3 (Malicious)":
      "の値がしきい値パラメーターの値を上回る場合、スコアは3(悪意のある)に設定されます",
    "Otherwise the DBotScore is set to 1 (Good).":
      "それ以外の場合、DBotScoreは1(無害)に設定されます。",
    "If the threshold parameter value is not specified, the DBotScore is calculated as follows:":
      "しきい値パラメーターの値が指定されていない場合、DBotScoreは次のように計算されます:",
    "> 65, the DBotScore value is set to 3 (Malicious).":
      "が65を超える場合、DBotScoreの値は3(悪意のある)に設定されます。",
    "is between 25 and 65, the DBotScore value is set to 2 (Suspicious).":
      "が25〜65の場合、DBotScoreの値は2(疑わしい)に設定されます。",
    "< 25, the DBotScore value is set to 1 (Good).":
      "が25未満の場合、DBotScoreの値は1(無害)に設定されます。",

    // --- Batch: strings reported as still untranslated (user list) + Apollo.io SSPM connector wizard ---
    // NOTE: multi-line doc paragraphs (AbuseIPDB / Akamai) are registered LINE-BY-LINE here in addition to the joined forms above,
    // because the live DOM exposes them as separate lines/text nodes; each line translation concatenates naturally.
    // "Previous" is a generic one-word key (also reached through the case-insensitive fallback).
    "TI Lookup is a searchable database of IOCs, IOAs, IOBs, and events for threat hunting and a service for browsing malicious files by their content.":
      "TI Lookupは、脅威ハンティング向けにIOC、IOA、IOB、イベントを検索できるデータベースであり、悪意のあるファイルをその内容で参照できるサービスです。",
    "You have unsaved changes.":
      "保存されていない変更があります。",
    "Are you sure you want to leave?":
      "このページを離れてもよろしいですか?",
    "Previous":
      "前へ",
    "Use the following sample as a reference for buildspec.yaml configuration:":
      "buildspec.yamlの構成の参考として、次のサンプルを使用してください:",
    "Integrate Application Security with your AWS CodeBuild to gain comprehensive visibility into your CodeBuild platform.":
      "Application SecurityをAWS CodeBuildと統合して、CodeBuildプラットフォームの包括的な可視性を確保します。",
    "Integrate Application Security with your AWS CodeCommit to gain comprehensive visibility into your CodeCommit platform.":
      "Application SecurityをAWS CodeCommitと統合して、CodeCommitプラットフォームの包括的な可視性を確保します。",
    "Searching an entire subnet far back in time (e.g. Days=365) will likely cause a server timeout,":
      "サブネット全体を遠い過去まで遡って検索すると(例: Days=365)、サーバーのタイムアウトが発生する可能性が高く、",
    "and you will receive a 500 Internal Server Error response from AbuseIPDB server.":
      "AbuseIPDBサーバーから500 Internal Server Errorのレスポンスが返されます。",
    "The Network Lists API enables you to manage a common set of lists for use in various Akamai security products such as":
      "Network Lists APIを使用すると、次のようなさまざまなAkamaiセキュリティ製品で使用する共通のリストセットを管理できます:",
    "Kona Site Defender, Web App Protector, and Bot Manager.":
      "Kona Site Defender、Web App Protector、Bot Manager。",
    "Network lists are shared sets of IP addresses, CIDR blocks, or broad geographic areas. In addition to managing your":
      "ネットワークリストは、IPアドレス、CIDRブロック、または広範な地理的領域の共有セットです。ご自身のリストを管理するだけでなく、",
    "own lists, you can also access read-only lists that Akamai dynamically updates for you.":
      "Akamaiが動的に更新する読み取り専用リストにもアクセスできます。",
    "Collects generic data from Amazon Simple Storage Service (Amazon S3).":
      "汎用データをAmazon Simple Storage Service(Amazon S3)から収集します。",
    "There are some unsaved changes":
      "保存されていない変更があります",
    "Are you sure you want to close this window?":
      "このウィンドウを閉じてもよろしいですか?",
    "No, take me back":
      "いいえ、戻ります",
    "Yes, I am sure":
      "はい、実行します",
    "To access ThreatStream using the API, you need a user ID and API key. To get these credentials, register at http://ui.threatstream.com.":
      "APIを使用してThreatStreamにアクセスするには、ユーザーIDとAPIキーが必要です。これらの認証情報を取得するには、次のURLで登録してください http://ui.threatstream.com。",
    "Confidence Threshold":
      "信頼度のしきい値",
    "Detect, monitor and alert on settings of your SaaS application.":
      "SaaSアプリケーションの設定を検出、監視し、アラートを発報します。",
    "Instance URL":
      "インスタンスURL",
    "Security Posture":
      "セキュリティポスチャー",
    "The Apollo.io API base URL. This is typically https://api.apollo.io for all accounts.":
      "Apollo.io APIのベースURLです。通常、すべてのアカウントで https://api.apollo.io です。",
    "Your Apollo.io API key. Navigate to Settings → Integrations → API in your Apollo.io account to generate one. SSPM requires this key to authenticate to the Apollo.io API.":
      "Apollo.ioのAPIキーです。Apollo.ioアカウントで「設定」→「統合」→「API」に移動して生成します。SSPMがApollo.io APIで認証するには、このキーが必要です。",

    // --- Batch: strings from the Collector export (Jira / Asimily Insight docs, marketplace card descriptions, SVG icon titles) ---
    // Fragments (", found on ...", ": Enable to ...", "Leave the" etc.) are registered as-is because the live DOM splits sentences at inline elements.
    // Jira terminology follows Jira own localisation (ja 課題 / es incidencias / fr tickets / de Vorgänge); Cortex "incident" keeps the Cortex term.
    "- Enter the API token. To generate an API token, see":
      "- APIトークンを入力します。APIトークンを生成するには、次を参照してください:",
    "- Enter your user email.":
      "- ユーザーのメールアドレスを入力します。",
    "– Represents anomaly alerts.":
      "– 異常アラートを表します。",
    "– Represents vulnerabilities.":
      "– 脆弱性を表します。",
    ", found on the left side menu.":
      "、左側のメニューにあります。",
    ", which are required in the configuration screen. Copy these values and paste them into the respective fields in the configuration screen.":
      "、構成画面で必要になります。これらの値をコピーして、構成画面の対応するフィールドに貼り付けます。",
    ", which will be used to integrate Cortex with Jira:":
      "、CortexとJiraを統合するために使用されます:",
    ": Asimily API user credentials. To create a new user, go to":
      ": AsimilyのAPIユーザー認証情報。新しいユーザーを作成するには、次に移動します:",
    ": Base URL of the Asimily Insight portal. Format:":
      ": Asimily Insightポータルのベース URL。形式:",
    ": Choose a log level from the dropdown.":
      ": ドロップダウンからログレベルを選択します。",
    ": Default Classifier and Mapper provided as":
      ": 次として提供されるデフォルトの分類子とマッパー:",
    ": Enable to fetch anomaly alerts.":
      ": 異常アラートをフェッチするには有効にします。",
    ": Enable to fetch device vulnerability incidents.":
      ": デバイスの脆弱性インシデントをフェッチするには有効にします。",
    ": Enable to fetch incidents from Asimily Insight into Cortex.":
      ": Asimily InsightからCortexにインシデントをフェッチするには有効にします。",
    ": Filter to only fetch anomalies of the selected criticality.":
      ": 選択した重大度の異常のみをフェッチするようにフィルターします。",
    ": Filter to only fetch CVEs above the specified score threshold.":
      ": 指定したスコアのしきい値を超えるCVEのみをフェッチするようにフィルターします。",
    ": Only fetch incidents for devices with specified tags.":
      ": 指定したタグを持つデバイスのインシデントのみをフェッチします。",
    ": Only fetch incidents for specified device families.":
      ": 指定したデバイスファミリーのインシデントのみをフェッチします。",
    ": Set how often incidents should be fetched (e.g.,":
      ": インシデントをフェッチする頻度を設定します(例:",
    ". The OProxy URL is a client side web page that provides an easy interface to copy the authorization code from the response to the integration configuration during the authorization flow. Optionally, if you don’t want to use the OProxy URL, you can use a localhost URL on an unused local port, for example:":
      ". OProxy URLは、認可フロー中に、応答から統合の構成へ認可コードをコピーするための簡単なインターフェースを提供するクライアント側のWebページです。OProxy URLを使用しない場合は、未使用のローカルポートのlocalhost URLを使用することもできます。例:",
    ". You will then need to copy the code from the URL address bar in the response.":
      ". その後、応答のURLアドレスバーからコードをコピーする必要があります。",
    "(Client ID, Client Secret)":
      "(クライアントID、クライアントシークレット)",
    "(Personal Access Token)":
      "(パーソナルアクセストークン)",
    ") that will drop incoming incidents if it is a duplicate. It will search all past incidents with all status. The script can be used for configuring Pre-Process Rules to avoid duplication.":
      ")が含まれています。このスクリプトは、受信インシデントが重複している場合にそれを破棄します。すべてのステータスの過去のインシデントをすべて検索します。前処理ルールの構成に使用して、重複を回避できます。",
    "), this means there may be new devices included to fetch incidents or there will be new incidents included for existing devices. It is strongly recommended to":
      ")、フェッチ対象に新しいデバイスが追加されたか、既存のデバイスに新しいインシデントが追加される可能性があることを意味します。次を実行することを強くお勧めします:",
    "1. Basic Authentication:":
      "1. 基本認証:",
    "3. Private Access Token":
      "3. プライベートアクセストークン",
    "a. Click":
      "a. 次をクリックします:",
    "b. Click":
      "b. 次をクリックします:",
    "Add comments":
      "コメントを追加",
    "Add User":
      "ユーザーを追加",
    "Admin page":
      "管理ページ",
    "and follow the steps.":
      "その後、手順に従います。",
    "API token (Deprecated)":
      "APIトークン(非推奨)",
    "API token (Recommended)":
      "APIトークン(推奨)",
    "API User Name":
      "APIユーザー名",
    "API Username":
      "APIユーザー名",
    "Application link":
      "アプリケーションリンク",
    "Application links":
      "アプリケーションリンク",
    "As of June 2019, Basic authentication with passwords for Jira is no longer supported, please use basic authentication using API Token or use OAuth 1.0. To use basic authentication, follow":
      "2019年6月以降、Jiraではパスワードによる基本認証がサポートされなくなりました。APIトークンを使用した基本認証を使用するか、OAuth 1.0を使用してください。基本認証を使用するには、次に従ってください:",
    "Asimily Insight Integration":
      "Asimily Insight統合",
    "Asimily Portal URL":
      "AsimilyポータルURL",
    "Authentication Methods":
      "認証方法",
    "Authorization code":
      "認可コード",
    "AutoFocus documentation":
      "AutoFocusのドキュメント",
    "Azure Resource Graph integration is designed to allow for executing Azure Resource Graph commands, like querying resource data.":
      "Azure Resource Graph統合は、リソースデータのクエリなど、Azure Resource Graphコマンドを実行できるように設計されています。",
    "Azure Risky Users provides access to all at-risk users and risk detections in the Azure AD environment.":
      "Azure Risky Usersは、Azure AD環境内のすべてのリスクのあるユーザーとリスク検出へのアクセスを提供します。",
    "back icon":
      "戻るアイコン",
    "cases and issues icon":
      "ケースとイシューのアイコン",
    "dashboards reports icon":
      "ダッシュボードとレポートのアイコン",
    "favorites icon":
      "お気に入りアイコン",
    "help icon":
      "ヘルプアイコン",
    "inventory icon":
      "インベントリアイコン",
    "investigation response icon":
      "調査と対応のアイコン",
    "lock filled icon":
      "ロック(塗りつぶし)アイコン",
    "modules icon":
      "モジュールアイコン",
    "notification bell icon":
      "通知ベルアイコン",
    "posture management icon":
      "ポスチャー管理アイコン",
    "resize handle icon":
      "サイズ変更ハンドルアイコン",
    "settings icon":
      "設定アイコン",
    "tenent navigator icon":
      "テナントナビゲーターアイコン",
    "threat management icon":
      "脅威管理アイコン",
    "Basic Authentication permissions":
      "基本認証の権限",
    "Brandefense is a Cyber Intelligence Platform that responds directly and effectively to today's complex cyber threats.":
      "Brandefenseは、今日の複雑なサイバー脅威に直接かつ効果的に対応するサイバーインテリジェンスプラットフォームです。",
    "Browse projects":
      "プロジェクトを参照",
    "By default, the key expires one week from today. If you’d like to change the expiration date, pick a new date under Expires on. You’re unable to select a date longer than a year from the date of creation.":
      "デフォルトでは、キーの有効期限は今日から1週間後です。有効期限を変更する場合は、Expires onで新しい日付を選択します。作成日から1年を超える日付は選択できません。",
    "Bypass exclusion list":
      "除外リストをバイパス",
    "Callback URL":
      "コールバックURL",
    "Classic Scopes":
      "クラシックスコープ",
    "Classifier and Mapper":
      "分類子とマッパー",
    "Classifiers & Mappers":
      "分類子とマッパー",
    "Click Create API key in the top right.":
      "右上のCreate API keyをクリックします。",
    "Click Create to save the API key.":
      "Createをクリックして、APIキーを保存します。",
    "Click Done and you’ll see the key in your list of API keys.":
      "Doneをクリックすると、APIキーの一覧にキーが表示されます。",
    "Click the Jira Administration tab (the gear icon found in the top right corner) and click":
      "Jira Administrationタブ(右上隅にある歯車アイコン)をクリックし、次をクリックします:",
    "Client ID, Client Secret":
      "クライアントID、クライアントシークレット",
    "Cloud authentication":
      "クラウド認証",
    "Cloud ID of your Jira instance (See below)":
      "JiraインスタンスのCloud ID(下記参照)",
    "Cloud Scopes":
      "クラウドスコープ",
    "Collects logs from Microsoft Azure Event Hub.":
      "Microsoft Azure Event Hubからログを収集します。",
    "Comment entry tag":
      "コメントエントリタグ",
    "Configure Pre-Process Rules":
      "前処理ルールを構成",
    "Configure the integration":
      "統合を構成",
    "Configure your Jira instance based on the type of your deployment:":
      "デプロイメントの種類に基づいてJiraインスタンスを構成します:",
    "Consumer key (OAuth 1.0)":
      "コンシューマーキー(OAuth 1.0)",
    "Copy the generated Authorization code into the integration instance and save the integration instance.":
      "生成された認可コードを統合インスタンスにコピーし、統合インスタンスを保存します。",
    "Copy the values for your Organization ID and API key. You’ll need those to access your organization later.":
      "組織IDとAPIキーの値をコピーします。後で組織にアクセスするために必要になります。",
    "Create and Manage Azure Virtual Machines.":
      "Azure仮想マシンを作成および管理します。",
    "Create attachments":
      "添付ファイルを作成",
    "Create issues":
      "課題を作成",
    "Delete issues":
      "課題を削除",
    "Deprecated. No available replacement.":
      "非推奨です。代替はありません。",
    "Deprecated. Use the Atlassian Jira v3 integration instead":
      "非推奨です。代わりにAtlassian Jira v3統合を使用してください",
    "Deprecated. Use the Check Point Firewall v2 integration instead. Manage Check Point firewall via API":
      "非推奨です。代わりにCheck Point Firewall v2統合を使用してください。APIを使用してCheck Pointファイアウォールを管理します",
    "Deprecated. Use the VMware Carbon Black App Control v2 integration instead.":
      "非推奨です。代わりにVMware Carbon Black App Control v2統合を使用してください。",
    "Deprecated. Use the VMware Carbon Black EDR integration instead.":
      "非推奨です。代わりにVMware Carbon Black EDR統合を使用してください。",
    "Deprecated. Use Unit 42 Feed integration instead.":
      "非推奨です。代わりにUnit 42 Feed統合を使用してください。",
    "Deprecated. Use Unit 42 Intel Objects Feed instead. Use the AutoFocus Tags Feed integration to fetch indicators from AutoFocus Tags.":
      "非推奨です。代わりにUnit 42 Intel Objects Feedを使用してください。AutoFocus Tags Feed統合を使用して、AutoFocus Tagsからインジケーターをフェッチします。",
    "Developer console":
      "デベロッパーコンソール",
    "Device Family Filter":
      "デバイスファミリーフィルター",
    "Device Family Filter for Fetch Operation":
      "フェッチ操作のデバイスファミリーフィルター",
    "Device Tags Filter":
      "デバイスタグフィルター",
    "Device Tags Filter for Fetch Operation":
      "フェッチ操作のデバイスタグフィルター",
    "Directory ID":
      "ディレクトリID",
    "Edit issues":
      "課題を編集",
    "Enable/Disable CRUD Commands":
      "CRUDコマンドの有効化/無効化",
    "Ensure that you possess the necessary permissions by navigating to":
      "次に移動して、必要な権限があることを確認します:",
    "Enter a name that you’ll remember to identify the API key.":
      "APIキーを識別するための、覚えやすい名前を入力します。",
    "External application":
      "外部アプリケーション",
    "Fetch Anomaly Alerts":
      "異常アラートをフェッチ",
    "Fetch Anomaly Criticality":
      "フェッチする異常の重大度",
    "Fetch attachments":
      "添付ファイルをフェッチ",
    "Fetch comments":
      "コメントをフェッチ",
    "Fetch CVE Score":
      "フェッチするCVEスコア",
    "Fetch Device CVEs":
      "デバイスのCVEをフェッチ",
    "Fetch incidents":
      "インシデントのフェッチ",
    "Fetching incidents by creation time (using the Created field), instead of using IDs, is done by checking the “Use created field to fetch incidents” checkbox.":
      "IDを使用する代わりに、「作成フィールドを使用してインシデントをフェッチ」チェックボックスをオンにすることで、作成時刻(Createdフィールド)でインシデントをフェッチできます。",
    "fields empty and fill in the following fields:":
      "フィールドを空のままにして、次のフィールドに入力します:",
    "File entry tag":
      "ファイルエントリタグ",
    "Fill in the required details as explained in the page, by inserting a":
      "ページの説明に従って、次を挿入して必要な詳細を入力します:",
    "Fill in the required fields:":
      "必須フィールドに入力します:",
    "For both instances (Cloud ID & OnPrem), use the":
      "両方のインスタンス(Cloud IDとOnPrem)では、次を使用します:",
    "For fetching incidents, please update the query param according to":
      "インシデントをフェッチするには、次に従ってクエリパラメーターを更新してください:",
    "For more information see the":
      "詳細については、次を参照してください:",
    "from the Playground and follow its instructions.":
      "プレイグラウンドから実行し、その指示に従います。",
    "from the Playground to verify that everything is configured correctly.":
      "プレイグラウンドから実行して、すべてが正しく構成されていることを確認します。",
    "From your organization at admin.atlassian.com:":
      "admin.atlassian.comの組織から:",
    "Gets Daily Threat Feed from AutoFocus.":
      "AutoFocusから日次の脅威フィードを取得します。",
    "Go to the integration instance configuration.":
      "統合インスタンスの構成に移動します。",
    "Granular Scopes":
      "きめ細かなスコープ",
    "High Only":
      "高のみ",
    "If you modify any of the fetch filters (":
      "いずれかのフェッチフィルターを変更した場合(",
    "If you wish the first run to start from a specific time, use “Issue index to start fetching incidents from” param.":
      "最初の実行を特定の時刻から開始する場合は、「インシデントのフェッチを開始する課題インデックス」パラメーターを使用します。",
    "Incident Fetch Interval":
      "インシデントのフェッチ間隔",
    "Incident Types":
      "インシデントタイプ",
    "Incoming":
      "受信",
    "Indicator Reputation":
      "インジケーターレピュテーション",
    "Insert the generated token in the":
      "生成されたトークンを次に挿入します:",
    "Integrate Asimily Insight to ingest security anomalies, CVEs, and leverage detailed asset data for streamlined incident investigation.":
      "Asimily Insightを統合して、セキュリティ上の異常とCVEを取り込み、詳細な資産データを活用してインシデント調査を効率化します。",
    "Integrate Checkmarx to gain a unified overview of your application security posture.":
      "Checkmarxを統合して、アプリケーションセキュリティポスチャーの統合ビューを取得します。",
    "Integrate with Atlassian's services to execute CRUD operations for employee lifecycle processes.":
      "Atlassianのサービスと統合して、従業員のライフサイクルプロセスに対するCRUD操作を実行します。",
    "Issue Field to fetch by":
      "フェッチ基準の課題フィールド",
    "Issue index to start fetching incidents from":
      "インシデントのフェッチを開始する課題インデックス",
    "Jira URL, for example: https://demisto.atlassian.net/":
      "JiraのURL(例: https://demisto.atlassian.net/)",
    "JQL documentation":
      "JQLのドキュメント",
    "Leave empty":
      "空のままにします",
    "Leave the":
      "対象の",
    "Link issues":
      "課題をリンク",
    "Locate permissions for the tasks listed below:":
      "以下に記載されているタスクの権限を見つけます:",
    "Log Analytics is a service that helps you collect and analyze data generated by resources in your cloud and on-premises environments.":
      "Log Analyticsは、クラウドおよびオンプレミス環境のリソースによって生成されたデータの収集と分析を支援するサービスです。",
    "Log in to Jira as a user with":
      "次の権限を持つユーザーとしてJiraにログインします:",
    "Log Level":
      "ログレベル",
    "Manage Binalyze AIR forensic acquisition, endpoint isolation, triage, cases, tasks, assets, repositories, and evidence artifacts from Cortex.":
      "CortexからBinalyze AIRのフォレンジック取得、エンドポイント隔離、トリアージ、ケース、タスク、アセット、リポジトリ、証拠アーティファクトを管理します。",
    "Max incidents per fetch":
      "フェッチあたりの最大インシデント数",
    "Mirror incoming incidents":
      "受信インシデントをミラーリング",
    "Mirror outgoing incidents":
      "送信インシデントをミラーリング",
    "Notifies you if login credentials to your company are being sold on the dark web.":
      "企業のログイン認証情報がダークウェブで販売されている場合に通知します。",
    "OAuth 2.0 integration":
      "OAuth 2.0統合",
    "on the Asimily Insight portal.":
      "(Asimily Insightポータル上)。",
    "on the left side bar. Your Cloud ID will appear in the URL:":
      "(左側のサイドバー上)。Cloud IDがURLに表示されます:",
    "Once the link is created, you will be able to see":
      "リンクが作成されると、次が表示されます:",
    "Onboard your Azure DevOps SaaS to the Cortex Application Security module to gain comprehensive visibility into your Azure DevOps platform assets and scan your repositories’ code, configurations, and CI/CD pipelines for security issues.":
      "Azure DevOps SaaSをCortex Application Securityモジュールにオンボードして、Azure DevOpsプラットフォームのアセットを包括的に可視化し、リポジトリのコード、構成、CI/CDパイプラインをスキャンしてセキュリティ上の問題を検出します。",
    "Onboard your Bitbucket Data Center on-prem to the Cortex Application Security module to gain comprehensive visibility into your Bitbucket Data Center platform assets and scan your repositories’ code for security issues.":
      "Bitbucket Data CenterオンプレミスをCortex Application Securityモジュールにオンボードして、Bitbucket Data Centerプラットフォームのアセットを包括的に可視化し、リポジトリのコードをスキャンしてセキュリティ上の問題を検出します。",
    "Onboard your Bitbucket SaaS to the Cortex Application Security module to gain comprehensive visibility into your Bitbucket platform assets and scan your repositories’ code for security issues.":
      "Bitbucket SaaSをCortex Application Securityモジュールにオンボードして、Bitbucketプラットフォームのアセットを包括的に可視化し、リポジトリのコードをスキャンしてセキュリティ上の問題を検出します。",
    "OnPrem authentication":
      "OnPrem認証",
    "OnPrem Scopes":
      "OnPremスコープ",
    "page, and choose the App you want to integrate with your instance. It must be of type OAuth 2.0. For creating a new app with type OAuth 2.0, click":
      "ページで、インスタンスと統合するアプリを選択します。アプリのタイプはOAuth 2.0である必要があります。タイプがOAuth 2.0の新しいアプリを作成するには、次をクリックします:",
    "Password (Deprecated - Use API token)":
      "パスワード(非推奨 - APIトークンを使用)",
    "Personal Access Token":
      "パーソナルアクセストークン",
    "Private key (PKCS8 format)":
      "秘密鍵(PKCS8形式)",
    "Project Settings":
      "プロジェクト設定",
    "Query (in JQL) for fetching incidents":
      "インシデントをフェッチするためのクエリ(JQL)",
    "Query (in JQL) for fetching incidents.":
      "インシデントをフェッチするためのクエリ(JQL)。",
    "Receives network flow logs from Microsoft Azure Network Watcher.":
      "Microsoft Azure Network Watcherからネットワークフローログを受信します。",
    "Reset Now":
      "今すぐリセット",
    "Reset the “last run” timestamp":
      "「前回の実行」タイムスタンプをリセット",
    "Resetting the “Last Run” Timestamp":
      "「前回の実行」タイムスタンプのリセット",
    "Run the integration command":
      "統合コマンドを実行",
    "SaaS Posture Security":
      "SaaSポスチャーセキュリティ",
    "Save & Exit":
      "保存して終了",
    "Save the integration instance.":
      "統合インスタンスを保存します。",
    "scope, in order to retrieve refresh tokens.":
      "スコープ(更新トークンを取得するため)。",
    "Select Settings and then API keys.":
      "Settings、API keysの順に選択します。",
    "The integration can fetch the following incident types:":
      "この統合では、次のインシデントタイプをフェッチできます:",
    "The integration includes a preprocessing script (":
      "この統合には、重複を避けるための前処理スクリプト(",
    "The integration retrieves asset information, anomaly alerts, and CVEs from Asimily Insight—either through scheduled updates or on-demand queries—making it necessary to define a preprocessing rule that discards incoming incidents if they are duplicates.":
      "この統合は、スケジュールされた更新またはオンデマンドのクエリを通じて、Asimily Insightからアセット情報、異常アラート、CVEを取得します。そのため、受信インシデントが重複している場合にそれを破棄する前処理ルールを定義する必要があります。",
    "The Traffic Light Protocol (TLP) designation to apply to indicators fetched from the feed":
      "フィードからフェッチされたインジケーターに適用するトラフィックライトプロトコル(TLP)の指定",
    "There are 2 authentication methods:":
      "認証方法は2つあります:",
    "This ensures that incidents related to newly included devices and updated filters are correctly fetched.":
      "これにより、新しく追加されたデバイスと更新されたフィルターに関連するインシデントが正しくフェッチされます。",
    "this tutorial":
      "このチュートリアル",
    "This will fetch all tickets in your system (including past tickets) that are in Open status and in project soc. After the first run, it will create incidents only for new tickets.":
      "これにより、システム内のOpenステータスでプロジェクトsocにあるすべてのチケット(過去のチケットを含む)がフェッチされます。最初の実行後は、新しいチケットに対してのみインシデントが作成されます。",
    "Time range for initial data fetch":
      "初回データフェッチの時間範囲",
    "to get the Access Token. Authorizing using OAuth1.0, requires Access Token, Private Key, and Consumer Key.":
      "アクセストークンを取得します。OAuth1.0を使用した認可には、アクセストークン、秘密鍵、コンシューマーキーが必要です。",
    "to get the API token.":
      "APIトークンを取得します。",
    "To obtain the Authorization code, follow these steps:":
      "認可コードを取得するには、次の手順に従います:",
    "to obtain your Access Tokens. Authorizing using a PAT requires the Access Token only.":
      "アクセストークンを取得します。PATを使用した認可には、アクセストークンのみが必要です。",
    "To reset:":
      "リセットするには:",
    "To use a Private Access Token, please follow":
      "プライベートアクセストークンを使用するには、次に従ってください:",
    "To use OAuth1.0 follow":
      "OAuth1.0を使用するには、次に従ってください:",
    "Traffic Light Protocol Color":
      "トラフィックライトプロトコルの色",
    "Transition issues":
      "課題を遷移",
    "Update the project you want to fetch from, using:":
      "フェッチ元のプロジェクトを次を使用して更新します:",
    "Use created field to fetch incidents":
      "作成フィールドを使用してインシデントをフェッチ",
    "Use the Azure Key Vault integration to safeguard and manage cryptographic keys and secrets used by cloud applications and services.":
      "Azure Key Vault統合を使用して、クラウドアプリケーションとサービスで使用される暗号鍵とシークレットを保護および管理します。",
    "Use the Jira integration to manage issues, create Cortex incidents from Jira projects, and mirror issues to existing issue incidents in Cortex. The integration now supports both OnPrem, and Cloud instances.":
      "Jira統合を使用して、課題の管理、JiraプロジェクトからのCortexインシデントの作成、Cortex内の既存の課題インシデントへの課題のミラーリングを行います。この統合は、OnPremインスタンスとクラウドインスタンスの両方をサポートするようになりました。",
    "Use this integration to connect securely with an Atlassian Cloud Model Context Protocol (MCP) server and access its tools in real time.":
      "この統合を使用して、Atlassian Cloud Model Context Protocol (MCP) サーバーに安全に接続し、そのツールにリアルタイムでアクセスします。",
    "Use this integration to read information and send commands to the Check Point Firewall server.":
      "この統合を使用して、Check Point Firewallサーバーから情報を読み取り、コマンドを送信します。",
    "Username (Basic Authentication)":
      "ユーザー名(基本認証)",
    "When creating Jira issues through XSOAR, using the mirroring function, make sure that you exclude those issues when fetching incidents. To exclude these issues, tag the relevant issues with a dedicated label and exclude that label from the JQL query (Labels!=).":
      "XSOARでミラーリング機能を使用してJira課題を作成する場合は、インシデントをフェッチするときにそれらの課題を除外してください。これらの課題を除外するには、該当する課題に専用のラベルを付け、そのラベルをJQLクエリ(Labels!=)から除外します。",
    "You can authenticate using one of the following methods:":
      "次のいずれかの方法で認証できます:",
    "You can enable and filter these incidents with the following options:":
      "次のオプションで、これらのインシデントを有効にしたりフィルターしたりできます:",
    "You can select which CRUD commands are enabled in the integration instance configuration settings. By default, all commands are enabled.":
      "統合インスタンスの構成設定で、有効にするCRUDコマンドを選択できます。デフォルトでは、すべてのコマンドが有効になっています。",
    "Your Jira server URL":
      "JiraサーバーのURL",

    // --- Batch: strings from the Collector export #2 (AutoFocus Feed docs, marketplace card descriptions, feed tooltips) ---
    // Fragments such as "and", "or", "The", "Click the", "Go to the", "From the" are intentionally NOT registered.
    "Activate the API":
      "APIをアクティブ化",
    "Activating AutoFocus Licenses":
      "AutoFocusライセンスのアクティブ化",
    "Add your authorization code":
      "認可コードの追加",
    "AutoFocus documentation - Get Tag Details":
      "AutoFocusのドキュメント - タグの詳細の取得",
    "AutoFocus documentation - Get Tags":
      "AutoFocusのドキュメント - タグの取得",
    "AutoFocus Endpoint URL":
      "AutoFocusエンドポイントURL",
    "Custom Feed info:":
      "カスタムフィード情報:",
    "Samples Feed info:":
      "サンプルフィード情報:",
    "Enter the authorization code.":
      "認可コードを入力します。",
    "Enter this API key when configuring the AutoFocus integration in Cortex.":
      "CortexでAutoFocus統合を構成するときに、このAPIキーを入力します。",
    "For more info on activating the license, see":
      "ライセンスのアクティブ化の詳細については、次を参照してください:",
    "For more information about generating URL and adding filter options for custom feeds, please read":
      "カスタムフィードのURL生成とフィルターオプションの追加の詳細については、次をお読みください:",
    "From the left-side navigation menu, select":
      "左側のナビゲーションメニューから、次を選択します:",
    "Get Your API Key":
      "APIキーの取得",
    "Gets Custom and Sample feeds from AutoFocus.":
      "AutoFocusからカスタムフィードとサンプルフィードを取得します。",
    "Indicator Feed":
      "インジケーターフィード",
    "Onboard your CircleCI SaaS service for comprehensive Application Security: Integrate Cortex CLI scans for your code, and secure your CI/CD pipelines.":
      "包括的なApplication Securityのために、CircleCI SaaSサービスをオンボードします。コードのCortex CLIスキャンを統合し、CI/CDパイプラインを保護します。",
    "Only necessary in case a Custom Feed is fetched. Can also support a CSV of Custom feed URLs.":
      "カスタムフィードをフェッチする場合にのみ必要です。カスタムフィードURLのCSVにも対応できます。",
    "Palo Alto Networks support site":
      "Palo Alto Networksサポートサイト",
    "Protect your cloud assets and private network.":
      "クラウドアセットとプライベートネットワークを保護します。",
    "Query - A JSON styled AutoFocus query. For example:":
      "Query - JSON形式のAutoFocusクエリ。例:",
    "Query and upload samples to Cisco threat grid.":
      "サンプルをクエリし、Cisco Threat Gridにアップロードします。",
    "Reliability of the source providing the intelligence data":
      "インテリジェンスデータを提供するソースの信頼性",
    "Samples Feed Query":
      "サンプルフィードのクエリ",
    "Samples Feed Scope Type":
      "サンプルフィードのスコープタイプ",
    "Scalable visibility and security analytics.":
      "スケーラブルな可視化とセキュリティ分析。",
    "Scope Type - Either":
      "スコープタイプ - どちらか",
    "Secure Malware Analytics (formerly Threat Grid) combines advanced sandboxing with threat intelligence into one unified solution to protect organizations from malware.":
      "Secure Malware Analytics(旧Threat Grid)は、高度なサンドボックスと脅威インテリジェンスを1つの統合ソリューションに統合し、マルウェアから組織を保護します。",
    "Select the API Key link.":
      "API Keyリンクを選択します。",
    "Select values":
      "値を選択",
    "The Custom Feed URL should be in this form:":
      "カスタムフィードのURLは次の形式にする必要があります:",
    "The Security Management Appliance (SMA) is used to centralize services from Email Security Appliances (ESAs) and Web Security Appliances (WSAs).":
      "Security Management Appliance (SMA) は、Email Security Appliance (ESA) とWeb Security Appliance (WSA) のサービスを一元化するために使用されます。",
    "The URL for the custom feed to fetch":
      "フェッチするカスタムフィードのURL",
    "To connect a custom AutoFocus feed you need to provide the Custom Feed URL.":
      "カスタムAutoFocusフィードに接続するには、カスタムフィードのURLを指定する必要があります。",
    "To connect to a sample AutoFocus feed you need to provide the following parameters:":
      "サンプルAutoFocusフィードに接続するには、次のパラメーターを指定する必要があります:",
    "To get your API key, you need to add an authorization code, and then activate the API.":
      "APIキーを取得するには、認可コードを追加してから、APIをアクティブ化する必要があります。",
    "Use system proxy settings is enabled only when an engine is selected":
      "「システムプロキシ設定を使用」は、エンジンを選択した場合にのみ有効になります",
    "Use the AutoFocus Tags Feed integration to fetch indicators from AutoFocus Tags.":
      "AutoFocus Tags Feed統合を使用して、AutoFocus Tagsからインジケーターをフェッチします。",
    "Use the Cisco Adaptive Security Appliance Software integration to manage interfaces, rules, and network objects.":
      "Cisco Adaptive Security Appliance Software統合を使用して、インターフェース、ルール、ネットワークオブジェクトを管理します。",
    "Use the Cisco Firepower integration for unified management of firewalls, application control, intrusion prevention, URL filtering, and advanced malware protection.":
      "Cisco Firepower統合を使用して、ファイアウォール、アプリケーション制御、侵入防止、URLフィルタリング、高度なマルウェア対策を統合管理します。",
    "When removed from the feed":
      "フィードから削除されたとき",
    "When selected, the exclusion list is ignored for indicators from this feed. This means that if an indicator from this feed is on the exclusion list, the indicator might still be added to the system.":
      "選択すると、このフィードのインジケーターでは除外リストが無視されます。つまり、このフィードのインジケーターが除外リストに含まれていても、そのインジケーターがシステムに追加される場合があります。",

    // --- Batch: strings from the Collector export #4 (Azure Log Analytics / Microsoft self-deployed auth docs, marketplace card descriptions) ---
    // Fragments such as "and", "or the", "Follow the", "Go to the", "Run the", "Select the", "To get the", "To use the" are intentionally NOT registered.
    ": These credentials are valid for a single instance only.":
      ": これらの認証情報は、1つのインスタンスでのみ有効です。",
    "(Certificate Thumbprint)":
      "(証明書のサムプリント)",
    "(Client Secret)":
      "(クライアントシークレット)",
    "After authorizing the Cortex app, you will get an ID, Token, and Key which should be inserted in the integration instance settings fields.":
      "Cortexアプリを認可すると、ID、トークン、キーが発行されます。これらを統合インスタンス設定の各フィールドに入力してください。",
    "and allow Cortex access to Azure Log Analytics, an administrator has to approve our app using an admin consent flow by clicking this":
      "CortexからAzure Log Analyticsへのアクセスを許可するには、管理者が管理者の同意フローを使用してアプリを承認する必要があります。次をクリックします:",
    "Anthropic Claude AI integration for data security scanning and content analysis":
      "データセキュリティスキャンとコンテンツ分析のためのAnthropic Claude AI統合",
    "Application redirect URI (for self-deployed mode)":
      "アプリケーションのリダイレクトURI(セルフデプロイモード用)",
    "Authorization Code flow":
      "認可コードフロー",
    "Client Credentials flow":
      "クライアント資格情報フロー",
    "Client Credentials Flow":
      "クライアント資格情報フロー",
    "Azure Resource Graph is an Azure service designed to extend Azure Resource Management by providing efficient and performant resource exploration with the ability to query at scale across a given set of resources.":
      "Azure Resource Graphは、Azure Resource Managementを拡張するために設計されたAzureサービスで、効率的かつ高性能なリソース探索と、指定したリソースセット全体に対する大規模なクエリを可能にします。",
    "Azure Service Management - permission":
      "Azure Service Management - 権限",
    "Log Analytics API - permission":
      "Log Analytics API - 権限",
    "of type":
      "タイプ:",
    "Check when authenticating using the Authorization Code flow.":
      "認可コードフローで認証する場合にオンにします。",
    "Check when authenticating using the Client Credentials flow.":
      "クライアント資格情報フローで認証する場合にオンにします。",

    // --- Batch: strings from the user-reported screenshot (Azure auth type description) ---
    // Fragments such as "and", "or the", "Follow the", "Go to the", "Run the", "Select the", "To get the", "To use the" are intentionally NOT registered.
    "Type of authentication - could be Client Credentials Authorization Flow (recommended) or Device Code Flow.":
      "認証の種類 - クライアント資格情報による認可フロー(推奨)またはデバイスコードフローを指定できます。",

    // --- Batch: strings from the Collector export #5 (v0.1.1: tooltips, Brandefense/Binalyze/Bitbucket docs, marketplace card descriptions, data-source table) ---
    // Fragments such as "and", "or the", "Follow the", "Go to the", "Run the", "Select the", "To get the", "To use the" are intentionally NOT registered.
    "— For asset-related commands":
      "— アセット関連のコマンド用",
    "— For creating incidents":
      "— インシデント作成用",
    "— For CTI threat search capability":
      "— CTI脅威検索機能用",
    "— For incident fetching and queries":
      "— インシデントのフェッチとクエリ用",
    "— For indicator retrieval":
      "— インジケーターの取得用",
    "— For intelligence reports":
      "— インテリジェンスレポート用",
    "— For IoC and threat intelligence data":
      "— IoCと脅威インテリジェンスデータ用",
    "— For phishing monitoring":
      "— フィッシング監視用",
    "(API Key)":
      "(APIキー)",
    "A Brandefense account with API access enabled.":
      "APIアクセスが有効になっているBrandefenseアカウント。",
    "An API Bearer Token generated from the Brandefense platform.":
      "Brandefenseプラットフォームで生成されたAPI Bearerトークン。",
    "Add":
      "追加",
    "Binalyze AIR Server URL":
      "Binalyze AIRサーバーURL",
    "Bitbucket Data Center (On-Prem)":
      "Bitbucket Data Center(オンプレミス)",
    "Choose from repository list":
      "リポジトリリストから選択",
    "Community Contributed Integration":
      "コミュニティ提供の統合",
    "Comprehensive integration with Databricks workspace APIs for managing clusters, jobs, SQL, pipelines, Unity Catalog, MLflow, IAM, and more.":
      "クラスター、ジョブ、SQL、パイプライン、Unity Catalog、MLflow、IAMなどを管理するための、DatabricksワークスペースAPIとの包括的な統合です。",
    "Configure Domain":
      "ドメインを設定",
    "Connect Docker Hub Container Registry with Cortex Cloud to scan and secure your container images, ensuring comprehensive security and compliance.":
      "Docker HubコンテナレジストリをCortex Cloudに接続して、コンテナイメージをスキャン・保護し、包括的なセキュリティとコンプライアンスを確保します。",
    "Connector name":
      "コネクター名",
    "Copy the generated token and paste it into the":
      "生成されたトークンをコピーし、統合設定の",
    "field in the integration configuration.":
      "フィールドに貼り付けます。",
    "Copy the token.":
      "トークンをコピーします。",
    "Create a Personal Access Token":
      "パーソナルアクセストークンを作成",
    "Create a new API token with the minimum required permissions.":
      "必要最小限の権限を持つ新しいAPIトークンを作成します。",
    "Cribl Search allows you to query, retrieve, and manage search jobs, datasets, and saved searches across your Cribl Cloud deployment.":
      "Cribl Searchを使用すると、Cribl Cloud環境全体の検索ジョブ、データセット、保存済み検索をクエリ、取得、管理できます。",
    "Delete instance":
      "インスタンスを削除",
    "Edit instance":
      "インスタンスを編集",
    "e.g acme.atlassian.com":
      "例: acme.atlassian.com",
    "Enable unified image, code, and API security scanning, analysis and remediation from your command line":
      "コマンドラインから、イメージ、コード、APIのセキュリティスキャン、分析、修復を統合的に実行できるようにします",
    "Endpoint detection and response to manage and query malops, connections and processes.":
      "Malop、接続、プロセスを管理およびクエリするためのエンドポイント検出と対応です。",
    "Enter the Binalyze AIR Server URL and API Key.":
      "Binalyze AIRサーバーURLとAPIキーを入力します。",
    "Fetching Issue Types":
      "課題タイプのフェッチ",
    "File threat intelligence":
      "ファイルの脅威インテリジェンス",
    "First time fetching":
      "初回のフェッチ",
    "Go to the API token or integrations section.":
      "APIトークンまたは統合のセクションに移動します。",
    "In Cortex, create a Binalyze AIR Extended integration instance.":
      "Cortexで、Binalyze AIR Extended統合インスタンスを作成します。",
    "In order to complete the onboarding, the domain path should be approved in the Platform Egress. A request was send on your behalf and once approved you will be able to onboard again":
      "オンボードを完了するには、ドメインパスをPlatform Egressで承認する必要があります。お客様に代わってリクエストが送信されました。承認されると、再度オンボードできるようになります。",
    "Incident":
      "インシデント",
    "Incident Category":
      "インシデントカテゴリ",
    "Incident Module":
      "インシデントモジュール",
    "Incident Rules":
      "インシデントルール",
    "Incident Status":
      "インシデントステータス",
    "Integration with DFIRe (Digital Forensics and Incident Response) platform for case management and IOC indicator tracking.":
      "ケース管理とIOCインジケーターの追跡のための、DFIRe(Digital Forensics and Incident Response)プラットフォームとの統合です。",
    "Intelligence":
      "インテリジェンス",
    "Intelligence Category":
      "インテリジェンスカテゴリ",
    "Intelligence Search":
      "インテリジェンス検索",
    "Locking mechanism that prevents concurrent execution of different tasks.":
      "異なるタスクの同時実行を防ぐロック機構です。",
    "Log in to Binalyze AIR.":
      "Binalyze AIRにログインします。",
    "Log in to your Brandefense account at":
      "次のURLでBrandefenseアカウントにログインします:",
    "Malware dynamic analysis sandboxing.":
      "マルウェアの動的解析サンドボックスです。",
    "Manage Endpoints using Cylance protect.":
      "Cylance Protectを使用してエンドポイントを管理します。",
    "Max Results":
      "最大結果数",
    "Maximum incidents per fetch":
      "フェッチあたりの最大インシデント数",
    "Maximum number of incidents to fetch per cycle.":
      "サイクルごとにフェッチするインシデントの最大数です。",
    "No support or maintenance is provided by the author. Customers are encouraged to engage with the user community for questions and guidance at the":
      "作成者によるサポートやメンテナンスは提供されません。ご質問やガイダンスが必要な場合は、次のユーザーコミュニティをご利用ください:",
    "Ownership Type":
      "所有タイプ",
    "Pack also helps with integration with Cortex and provides pre-made playbooks/templates to ease integration use.":
      "このパックはCortexとの統合にも役立ち、統合の利用を容易にする既成のプレイブック/テンプレートを提供します。",
    "Paste your Bitbucket Server / Data Center repository URL into the 'Base URL' field below. Project Admin permissions are required.":
      "Bitbucket Server / Data CenterのリポジトリURLを、下の「ベースURL」フィールドに貼り付けてください。Project Adminの権限が必要です。",
    "Reliability of the source providing the intelligence data.":
      "インテリジェンスデータを提供するソースの信頼性です。",
    "Repositories were last updated on":
      "リポジトリの最終更新日:",
    "Review the requested permissions, and select":
      "要求された権限を確認し、",
    "to connect Prisma Cloud to Bitbucket.":
      "を選択して、Prisma CloudをBitbucketに接続します。",
    "selected":
      "選択済み",
    "Selected":
      "選択済み",
    "Selection Options":
      "選択オプション",
    "Server URL (e.g. https://api.brandefense.io)":
      "サーバーURL(例: https://api.brandefense.io)",
    "Setup":
      "セットアップ",
    "Stay ahead of cyber threats with Darkmon TIP - real-time threat intelligence from the Clear, Deep, and Dark Web tailored to your assets.":
      "Darkmon TIPでサイバー脅威の先を行きましょう。クリアウェブ、ディープウェブ、ダークウェブからのリアルタイムの脅威インテリジェンスを、お客様のアセットに合わせて提供します。",
    "Stay ahead of cyber threats with Darkmon TIP - real-time threat intelligence from the Clear, Deep, and Dark Web tailored to your assets. Pack also helps with integration with Cortex and provides pre-made playbooks/templates to ease integration use.":
      "Darkmon TIPでサイバー脅威の先を行きましょう。クリアウェブ、ディープウェブ、ダークウェブからのリアルタイムの脅威インテリジェンスを、お客様のアセットに合わせて提供します。このパックはCortexとの統合にも役立ち、統合の利用を容易にする既成のプレイブック/テンプレートを提供します。",
    "Steps":
      "手順",
    "Sync Now":
      "今すぐ同期",
    "Table data is being updated":
      "テーブルデータを更新しています",
    "The Binalyze AIR Server URL, for example https://air.example.com.":
      "Binalyze AIRサーバーのURLです(例: https://air.example.com)。",
    "The CrowdStrike Falcon OAuth 2 API (formerly the Falcon Firehose API), enables fetching and resolving detections, searching devices, getting behaviors by ID, containing hosts, and lifting host containment.":
      "CrowdStrike Falcon OAuth 2 API(旧Falcon Firehose API)を使用すると、検出のフェッチと解決、デバイスの検索、IDによる挙動の取得、ホストの隔離、ホスト隔離の解除を行えます。",
    "The Databricks Data Intelligence Platform":
      "Databricks Data Intelligence Platform",
    "This integration uses the Cortex API to access all the core services and capabilities of the Cortex platform.":
      "この統合は、Cortex APIを使用して、Cortexプラットフォームのすべてのコアサービスと機能にアクセスします。",
    "This parameter allows you to filter fetching by issue type.":
      "このパラメーターを使用すると、課題タイプでフェッチをフィルターできます。",
    "This parameter allows you to filter intelligence values by categories.":
      "このパラメーターを使用すると、カテゴリでインテリジェンス値をフィルターできます。",
    "This parameter allows you to filter intelligence values with keyword search.":
      "このパラメーターを使用すると、キーワード検索でインテリジェンス値をフィルターできます。",
    "This parameter will request and show the incident's related module category.":
      "このパラメーターは、インシデントに関連するモジュールカテゴリを要求して表示します。",
    "This parameter will request and show the incident's related module.":
      "このパラメーターは、インシデントに関連するモジュールを要求して表示します。",
    "This parameter will request and show the incident's related template. Don't select any to get all alerts.":
      "このパラメーターは、インシデントに関連するテンプレートを要求して表示します。すべてのアラートを取得するには、何も選択しないでください。",
    "This parameter will request incident's by status.":
      "このパラメーターは、ステータスでインシデントを要求します。",
    "Use the CyberArk EPM integration to activate and deactivate CyberArk EPM risk plans for specific endpoints.":
      "CyberArk EPM統合を使用して、特定のエンドポイントに対するCyberArk EPMリスクプランを有効化または無効化します。",
    "Use this integration to connect Cortex to Binalyze AIR for endpoint forensic acquisition, triage, case, task, repository, and isolation operations.":
      "この統合を使用して、CortexをBinalyze AIRに接続し、エンドポイントのフォレンジック取得、トリアージ、ケース、タスク、リポジトリ、隔離の各操作を行います。",

    // --- Batch: strings from the Collector export #6 (Cisco/CircleCI/Doppel/EWS/Entra ID docs, tooltips, marketplace card descriptions) ---
    // Fragments such as "and", "or the", "Follow the", "Go to the", "Run the", "Select the", "To get the", "To use the" are intentionally NOT registered.
    ": There is no need to enter a value in the":
      ": 次の",
    "field. It can be left blank. (Visible only on 6.0.2 and lower versions).":
      "フィールドに値を入力する必要はありません。空白のままにできます。(6.0.2以前のバージョンでのみ表示されます)。",
    "(API token)":
      "(APIトークン)",
    "(Stealthwatch Cloud API key. Should be in the form of \"ApiKey <username>:<apikey>\")":
      "(Stealthwatch CloudのAPIキー。「ApiKey <username>:<apikey>」の形式で指定してください)",
    "Stealthwatch Cloud API key. Should be in the form of \"ApiKey <username>:<apikey>\"":
      "Stealthwatch CloudのAPIキー。「ApiKey <username>:<apikey>」の形式で指定してください",
    "Access to Cisco SMA":
      "Cisco SMAへのアクセス",
    "Access your Cisco Umbrella account dashboard.":
      "Cisco Umbrellaアカウントのダッシュボードにアクセスします。",
    "Add the following environment variables:":
      "次の環境変数を追加します:",
    "API Secret":
      "APIシークレット",
    "API token":
      "APIトークン",
    "API Token":
      "APIトークン",
    "API Version(Support values: v1, v2, v3)":
      "APIバージョン(サポートされる値: v1, v2, v3)",
    "Authentication from a REST API Client":
      "REST APIクライアントからの認証",
    "Base URL, e.g., https://XXX.eu.iphmx.com":
      "ベースURL(例: https://XXX.eu.iphmx.com)",
    "Before you begin, you'll need to create a new context in CircleCI named \"cortex-secrets\" and add your API key and API ID as environment variables.":
      "開始する前に、CircleCIで「cortex-secrets」という名前の新しいコンテキストを作成し、APIキーとAPI IDを環境変数として追加する必要があります。",
    "Please copy and use the variable names suggested below.":
      "以下に示す変数名をコピーして使用してください。",
    "If needed, you can generate a new token using the link below, copy and use the generated values as your secrets values.":
      "必要に応じて、以下のリンクを使用して新しいトークンを生成し、生成された値をコピーして、シークレットの値として使用できます。",
    "Before you begin, you'll need to create a new context in CircleCI named \"cortex-secrets\" and add your API key and API ID as environment variables. Please copy and use the variable names suggested below. If needed, you can generate a new token using the link below, copy and use the generated values as your secrets values.":
      "開始する前に、CircleCIで「cortex-secrets」という名前の新しいコンテキストを作成し、APIキーとAPI IDを環境変数として追加する必要があります。以下に示す変数名をコピーして使用してください。必要に応じて、以下のリンクを使用して新しいトークンを生成し、生成された値をコピーして、シークレットの値として使用できます。",
    "By clicking Authorize, you authorize Palo Alto Networks to: (i) ingest data and perform actions such as suppression on your behalf and (ii) process this data to deliver services to you. You confirm that you have the right to provide this authorization.":
      "「認可」をクリックすると、お客様はPalo Alto Networksに対して、(i) お客様に代わってデータを取り込み、抑制などのアクションを実行すること、および (ii) このデータを処理してお客様にサービスを提供することを許可したものとみなされます。お客様は、この許可を与える権利を有していることを確認するものとします。",
    "c. Provide a":
      "c. トークンの",
    "for your token (e.g., “Cortex Integration”).":
      "を指定します(例: 「Cortex Integration」)。",
    "CI/CD System Scan":
      "CI/CDシステムスキャン",
    "Code Scan":
      "コードスキャン",
    "Enable CI/CD system scanning":
      "CI/CDシステムのスキャンを有効化",
    "System scanning":
      "システムスキャン",
    "Configure Job":
      "ジョブを設定",
    "Map repositories":
      "リポジトリをマッピング",
    "Connect Checkmarx One":
      "Checkmarx Oneに接続",
    "Sign in to Checkmarx One":
      "Checkmarx Oneにサインイン",
    "CircleCI personal API token":
      "CircleCIの個人用APIトークン",
    "Personal API token":
      "個人用APIトークン",
    "Copy the personal API token to clipboard and paste it here.":
      "個人用APIトークンをクリップボードにコピーして、ここに貼り付けます。",
    "Create a personal API token in CircleCI.":
      "CircleCIで個人用APIトークンを作成します。",
    "Create a dedicated user in the organization’s VCS to integrate CircleCI with Cortex, to prevent the integration breaking if the user leaves the organization":
      "ユーザーが組織を離れた場合に統合が機能しなくなるのを防ぐため、組織のVCSに専用ユーザーを作成して、CircleCIとCortexを統合します",
    "Ensure that the dedicated user follows all the organization’s projects in CircleCI":
      "専用ユーザーがCircleCIで組織のすべてのプロジェクトをフォローしていることを確認します",
    "Login to CircleCI with your version control system (VCS) user credentials.":
      "バージョン管理システム(VCS)のユーザー認証情報でCircleCIにログインします。",
    "To enable Cortex Application Security visibility across all CircleCI projects, you must log in to CircleCI using your VCS credentials Note: the CircleCI user base is integrated with the VCS, which means that CircleCI users inherit the permissions granted to VCS users.":
      "すべてのCircleCIプロジェクトでCortex Application Securityの可視性を有効にするには、VCSの認証情報を使用してCircleCIにログインする必要があります。注記: CircleCIのユーザーベースはVCSと統合されているため、CircleCIユーザーにはVCSユーザーに付与された権限が継承されます。",
    "Cisco recommends that you use different accounts for interfacing with the API and the Firepower User Interface. Credentials cannot be used for both interfaces simultaneously, and will be logged out without warning if used for both.":
      "Ciscoでは、APIとFirepowerユーザーインターフェースの操作に別々のアカウントを使用することを推奨しています。認証情報を両方のインターフェースで同時に使用することはできず、両方で使用した場合は警告なしにログアウトされます。",
    "Collect logs and data from Dropbox.":
      "Dropboxからログとデータを収集します。",
    "Configuring Cisco ASA":
      "Cisco ASAの設定",
    "Connect to Cisco Umbrella:":
      "Cisco Umbrellaに接続:",
    "DBot Score Suspicious Threshold (-100 to 100)":
      "DBotスコアの疑わしいしきい値(-100~100)",
    "Score Malicious Threshold (-100 to 100)":
      "悪意のあるスコアのしきい値(-100~100)",
    "Default is 50. Maximum is 100.":
      "デフォルトは50です。最大値は100です。",
    "Make sure the malicious threshold is less than the suspicious threshold.":
      "悪意のあるしきい値が、疑わしいしきい値より小さいことを確認してください。",
    "Make sure the suspicious threshold is greater than the malicious threshold.":
      "疑わしいしきい値が、悪意のあるしきい値より大きいことを確認してください。",
    "Deprecated. Use ***EWS Extension Online Powershell v3*** instead.":
      "非推奨です。代わりに***EWS Extension Online Powershell v3***を使用してください。",
    "Deprecated. Use the Elasticsearch v2 integration instead.":
      "非推奨です。代わりにElasticsearch v2統合を使用してください。",
    "Doppel is a Modern Digital Risk Protection Solution, that detects the phishing and brand cyber attacks on the emerging channels. Doppel scans millions of channels online which includes, social media, domains, paid ads, dark web, emerging channels, etc. Doppel can identify the malicious content and cyber threats, and enables their customers to take down the digital risks proactively.":
      "Doppelは、新興チャネル上のフィッシングやブランドへのサイバー攻撃を検出する、最新のデジタルリスク保護ソリューションです。Doppelは、ソーシャルメディア、ドメイン、有料広告、ダークウェブ、新興チャネルなど、オンライン上の数百万のチャネルをスキャンします。Doppelは悪意のあるコンテンツやサイバー脅威を特定し、お客様がデジタルリスクをプロアクティブに排除できるようにします。",
    "The Cortex pack for Doppel mirrors the alerts created by Doppel as Cortex incidents. The pack also contains the commands to perform different operations on Doppel alerts.":
      "DoppelのCortexパックは、Doppelが作成したアラートをCortexインシデントとしてミラーリングします。このパックには、Doppelアラートに対してさまざまな操作を実行するためのコマンドも含まれています。",
    "Doppel is a Modern Digital Risk Protection Solution, that detects the phishing and brand cyber attacks on the emerging channels. Doppel scans millions of channels online which includes, social media, domains, paid ads, dark web, emerging channels, etc. Doppel can identify the malicious content and cyber threats, and enables their customers to take down the digital risks proactively. The Cortex pack for Doppel mirrors the alerts created by Doppel as Cortex incidents. The pack also contains the commands to perform different operations on Doppel alerts.":
      "Doppelは、新興チャネル上のフィッシングやブランドへのサイバー攻撃を検出する、最新のデジタルリスク保護ソリューションです。Doppelは、ソーシャルメディア、ドメイン、有料広告、ダークウェブ、新興チャネルなど、オンライン上の数百万のチャネルをスキャンします。Doppelは悪意のあるコンテンツやサイバー脅威を特定し、お客様がデジタルリスクをプロアクティブに排除できるようにします。DoppelのCortexパックは、Doppelが作成したアラートをCortexインシデントとしてミラーリングします。このパックには、Doppelアラートに対してさまざまな操作を実行するためのコマンドも含まれています。",
    "e.g., 2022-01-01T00:00:00.000Z, 12 hours, 7 days, 3 months, now.":
      "例: 2022-01-01T00:00:00.000Z、12 hours、7 days、3 months、now。",
    "Timestamp in ISO format or <number> <time unit>,":
      "ISO形式のタイムスタンプ、または「<number> <time unit>」形式、",
    "Timestamp in ISO format or <number> <time unit>, e.g., 2022-01-01T00:00:00.000Z, 12 hours, 7 days, 3 months, now.":
      "ISO形式のタイムスタンプ、または「<number> <time unit>」形式(例: 2022-01-01T00:00:00.000Z、12 hours、7 days、3 months、now)。",
    "First fetch":
      "最初のフェッチ",
    "First fetch timestamp (<number> <time unit>, e.g., 12 hours, 7 days).":
      "最初のフェッチのタイムスタンプ(<number> <time unit>、例: 12 hours、7 days)。",
    "Enable sftp on your server CheckPoint guide to walk you through: https://supportcenter.checkpoint.com/supportcenter/portal?eventSubmit_doGoviewsolutiondetails=&solutionid=sk82281":
      "サーバーでsftpを有効にします。手順についてはCheckPointのガイドを参照してください: https://supportcenter.checkpoint.com/supportcenter/portal?eventSubmit_doGoviewsolutiondetails=&solutionid=sk82281",
    "Enter instance display name here":
      "インスタンスの表示名をここに入力",
    "Example: Tenant name":
      "例: テナント名",
    "Tenant name":
      "テナント名",
    "The unique string generated in the IAM portal":
      "IAMポータルで生成された一意の文字列",
    "Entra ID Groups integration (formely Azure Active Directory Groups) enables you to create and manage different types of groups and group functionality according to your requirements.":
      "Entra IDグループ統合(旧Azure Active Directory Groups)を使用すると、要件に応じて、さまざまな種類のグループとグループ機能を作成および管理できます。",
    "The Entra ID Users integration (formerly Azure Active Directory Users) is a Unified gateway to security insights - all from a unified Microsoft Graph User API.":
      "Entra ID Users統合(旧Azure Active Directory Users)は、統合されたMicrosoft Graph User APIを通じてセキュリティに関するインサイトにアクセスできる統合ゲートウェイです。",
    "Use the Entra ID Applications integration (formerly Azure Active Directory Applications) to manage authorized applications.":
      "Entra ID Applications統合(旧Azure Active Directory Applications)を使用して、認可されたアプリケーションを管理します。",
    "Use the Entra ID Identity And Access integration to manage roles and members (formerly Azure Active Directory Identity And Access).":
      "Entra ID Identity And Access統合を使用して、ロールとメンバーを管理します(旧Azure Active Directory Identity And Access)。",
    "Exchange Web Services and Office 365 (mail).":
      "Exchange Web ServicesおよびOffice 365(メール)。",
    "Exchange Web Services mail sender. Note: this integration supports Office 365 basic authentication only. If you are using Office 365, we recommend using the EWS O365 Integration instead, which supports modern authentication (oauth2). Deprecated. Use EWS v2 instead":
      "Exchange Web Servicesのメール送信機能です。注記: この統合はOffice 365の基本認証のみをサポートしています。Office 365を使用している場合は、代わりに、先進認証(oauth2)をサポートするEWS O365統合の使用を推奨します。非推奨です。代わりにEWS v2を使用してください",
    "The new EWS O365 integration uses OAuth 2.0 protocol and can be used with Exchange Online and Office 365 (mail).":
      "新しいEWS O365統合はOAuth 2.0プロトコルを使用し、Exchange OnlineおよびOffice 365(メール)で使用できます。",
    "Use the EWS Extension Online Powershell v3 integration to get information about mailboxes and users in your organization. This integration can also retrieve and modify Tenant Allow/Block Lists.":
      "EWS Extension Online Powershell v3統合を使用して、組織内のメールボックスとユーザーに関する情報を取得します。この統合では、テナントの許可/ブロックリストの取得と変更も行えます。",
    "Feed Name":
      "フィード名",
    "Filter by":
      "フィルター条件",
    "Filter operator":
      "フィルター演算子",
    "Filter value":
      "フィルター値",
    "Recipient filter operator":
      "受信者フィルター演算子",
    "Recipient filter value":
      "受信者フィルター値",
    "Message field by which to filter the results.":
      "結果をフィルターするメッセージフィールドです。",
    "Operator on the message field.":
      "メッセージフィールドに対する演算子です。",
    "Recipient filter value to fetch by message field.":
      "メッセージフィールドでフェッチする受信者フィルター値です。",
    "Recipient operator filter.":
      "受信者の演算子フィルターです。",
    "The value to search for.":
      "検索する値です。",
    "The date or number of days from when to start fetching indicators.":
      "インジケーターのフェッチを開始する日付または日数です。",
    "The Traffic Light Protocol (TLP) designation to apply to indicators fetched from the feed.":
      "フィードからフェッチされたインジケーターに適用するTraffic Light Protocol(TLP)の指定です。",
    "HTTP requests timeout in seconds. The default is 60 seconds.":
      "HTTPリクエストのタイムアウト(秒)です。デフォルトは60秒です。",
    "Server URL for Cisco Stealthwatch console e.g.: https://ip:port/.":
      "Cisco StealthwatchコンソールのサーバーURLです(例: https://ip:port/)。",
    "Getting Credentials":
      "認証情報の取得",
    "How to configure the integration:":
      "統合の設定方法:",
    "Step 1: Obtain Cisco Umbrella Investigate API Key & Secret":
      "ステップ1: Cisco Umbrella Investigate APIキーとシークレットを取得",
    "Step 2: Configure Cortex Credentials":
      "ステップ2: Cortex認証情報を設定",
    "Navigate to API Keys:":
      "APIキーに移動:",
    "If you are using ASAv (Cisco Adaptive Security Virtual Appliance) don’t forget to check the ASAv box.":
      "ASAv(Cisco Adaptive Security Virtual Appliance)を使用している場合は、必ずASAvのチェックボックスをオンにしてください。",
    "Is ASAv":
      "ASAvを使用",
    "In the Smart Console, enable the web api: Management & Setting → Blades → Management API, Advanced Setting → All IP address":
      "Smart Consoleで、Web APIを有効にします: Management & Setting → Blades → Management API、Advanced Setting → All IP address",
    "In time zone configuration settings, set the following:":
      "タイムゾーンの設定で、次のように設定します:",
    "In your threat grid instance, click your user name at the right top corner.":
      "Threat Gridインスタンスで、右上のユーザー名をクリックします。",
    "The time zone should be configured to GMT +00:00.":
      "タイムゾーンはGMT +00:00に設定する必要があります。",
    "Require users to enter additional password":
      "ユーザーに追加のパスワードの入力を要求する",
    "Select my account.":
      "自分のアカウントを選択します。",
    "Select region":
      "リージョンを選択",
    "Server Port (e.g. 4434)":
      "サーバーポート(例: 4434)",
    "Server URL (e.g. example.net or 8.8.8.8)":
      "サーバーURL(例: example.net または 8.8.8.8)",
    "Server URL (e.g., https://192.168.0.1)":
      "サーバーURL(例: https://192.168.0.1)",
    "Stealthwatch's server URL":
      "StealthwatchのサーバーURL",
    "Supports FMC 6.2.3 and above":
      "FMC 6.2.3以降をサポートしています",
    "Search for and analyze data in real time.":
      "データをリアルタイムで検索および分析します。",
    "Search for and analyze data in real time. Supports version 6 and later.":
      "データをリアルタイムで検索および分析します。バージョン6以降をサポートしています。",
    "Supports version 6 and later.":
      "バージョン6以降をサポートしています。",
    "The first time you connect to the REST API you may receive an error that the connection is not secure due to an invalid certificate. Add an exception in your browser to use the certificate and accept the connection.":
      "REST APIに初めて接続すると、証明書が無効であるために接続が安全ではないというエラーが表示される場合があります。その場合は、ブラウザーで例外を追加して、その証明書を使用し、接続を許可してください。",
    "The user role should have access privilages to the following:":
      "ユーザーロールには、次へのアクセス権限が必要です:",
    "The username and password credentials are used to authenticate with the Cisco SMA API for the provided instance URL.":
      "ユーザー名とパスワードの認証情報は、指定されたインスタンスURLのCisco SMA APIでの認証に使用されます。",
    "The username and password required by this integration are the same as the credentials used to login into the Cisco Stelathwatch console.":
      "この統合に必要なユーザー名とパスワードは、Cisco Stealthwatchコンソールへのログインに使用する認証情報と同じです。",
    "Under the API Key section in the left you will see your API.":
      "左側のAPIキーセクションに、お使いのAPIが表示されます。",
    "Use Docker V2 connector in Cortex Cloud to scan and secure container images from any container registry that supports the Docker V2 protocol, ensuring comprehensive security and compliance.":
      "Cortex CloudでDocker V2コネクターを使用して、Docker V2プロトコルをサポートする任意のコンテナレジストリのコンテナイメージをスキャン・保護し、包括的なセキュリティとコンプライアンスを確保します。",
    "User Credentials":
      "ユーザー認証情報",
    "When using Cortex credentials, insert your API key as the credential username and your API secret as the password.":
      "Cortex認証情報を使用する場合は、APIキーを認証情報のユーザー名として、APIシークレットをパスワードとして入力します。",
    "With Token Based Authentication you obtain a token by providing your username and password. You use this token to access an HTTP service for a limited time period without the need for the username and password with every request. In other words, to eliminate the need for authenticating with your username and password with each request.":
      "トークンベース認証では、ユーザー名とパスワードを指定してトークンを取得します。このトークンを使用すると、リクエストのたびにユーザー名とパスワードを指定することなく、一定期間HTTPサービスにアクセスできます。つまり、リクエストごとにユーザー名とパスワードで認証する必要がなくなります。",
    "OAuth Client":
      "OAuthクライアント",
    "Use the generated API key as the":
      "生成されたAPIキーを次の項目として使用します:",
    "Use the generated API secret as the":
      "生成されたAPIシークレットを次の項目として使用します:",

    // --- Batch: strings from the Collector export #7 (Code42/Contentful/Claude/Cortex CLI wizard, parameter labels and tooltips) ---
    // Fragments such as "and", "or the", "Follow the", "Go to the", "Run the", "Select the", "To get the", "To use the" are intentionally NOT registered.
    "(API Key ID, API Key)":
      "(APIキーID、APIキー)",
    "Adjust and refine your configuration settings":
      "設定を調整して細かく設定します",
    "After this API Client is set up, use the API Client ID and Secret (in the “password” field) to configure the Code42 integration.":
      "このAPIクライアントを設定したら、APIクライアントIDとシークレット(「password」フィールド)を使用してCode42統合を設定します。",
    "Alert severities to fetch when fetching incidents":
      "インシデントをフェッチする際にフェッチするアラートの重大度",
    "Alerts to fetch per run; note that increasing this value may result in slow performance if too many results are returned at once":
      "実行ごとにフェッチするアラート数。この値を増やすと、一度に返される結果が多すぎる場合にパフォーマンスが低下することがあります",
    "Anthropic Claude (Standard Connector)":
      "Anthropic Claude(標準コネクター)",
    "API Client ID":
      "APIクライアントID",
    "API Client Secret":
      "APIクライアントシークレット",
    "API Gateway URL for your Code42 environment":
      "Code42環境のAPIゲートウェイURL",
    "API Key ID":
      "APIキーID",
    "Authenticate":
      "認証",
    "Authenticate using an Anthropic Claude Compliance Access Key (sk-ant-api01-...)":
      "Anthropic Claudeコンプライアンスアクセスキー(sk-ant-api01-...)を使用して認証します",
    "Base marketplace url":
      "ベースマーケットプレイスURL",
    "Capabilities status":
      "機能のステータス",
    "Cisco Umbrella Investigate base URL.":
      "Cisco Umbrella InvestigateのベースURLです。",
    "Code42 provides simple, fast detection and response to everyday data loss from insider threats by focusing on customer data on endpoints and the cloud.":
      "Code42は、エンドポイントとクラウド上のお客様データに焦点を当てることで、内部脅威による日常的なデータ損失に対して、シンプルかつ迅速な検出と対応を提供します。",
    "Compliance Access Key":
      "コンプライアンスアクセスキー",
    "Configure":
      "設定",
    "Contentful Access Token":
      "Contentfulアクセストークン",
    "Copy":
      "コピー",
    "Copy and paste the key.":
      "キーをコピーして貼り付けます。",
    "Copy the command and paste it into your terminal or download it.":
      "コマンドをコピーしてターミナルに貼り付けるか、ダウンロードします。",
    "Core Server URL":
      "CoreサーバーURL",
    "Cortex integrates with CI/CD pipelines, helping organizations shift-left. Use the Cortex CLI command line tool to scan container images for vulnerabilities, malware, and secrets. To run and authenticate Cortex CLI, follow the steps below.":
      "CortexはCI/CDパイプラインと統合され、組織のシフトレフトを支援します。Cortex CLIコマンドラインツールを使用して、コンテナイメージの脆弱性、マルウェア、シークレットをスキャンします。Cortex CLIを実行して認証するには、以下の手順に従ってください。",
    "create an API Client":
      "APIクライアントを作成",
    "Create instance":
      "インスタンスを作成",
    "Default timeout (seconds) for wait on locks to be released":
      "ロックが解放されるまで待機するデフォルトのタイムアウト(秒)",
    "First fetch time range (<number> <time unit>, e.g., 1 hour, 30 minutes)":
      "最初のフェッチの時間範囲(<number> <time unit>、例: 1 hour、30 minutes)",
    "For Cortex or Cortex XSIAM, use the Copy API URL button on the API Keys page. For Cortex, use the server URL.":
      "CortexまたはCortex XSIAMの場合は、API KeysページのCopy API URLボタンを使用します。Cortexの場合は、サーバーURLを使用します。",
    "From the ID column, copy the Key ID.":
      "ID列から、キーIDをコピーします。",
    "Generate an API Key and API Key ID":
      "APIキーとAPIキーIDを生成",
    "Go to Settings -> Configurations -> API Keys.":
      "Settings -> Configurations -> API Keysに移動します。",
    "Include the list of files in returned incidents.":
      "返されるインシデントにファイルのリストを含めます。",
    "Instance configuration completed":
      "インスタンスの設定が完了しました",
    "Latest version":
      "最新バージョン",
    "Make sure your API key has the proper permissions. For more information, please refer to the":
      "APIキーに適切な権限があることを確認してください。詳細については、次を参照してください:",
    "Marketplace content packs":
      "マーケットプレイスのコンテンツパック",
    "Please follow the documentation below for step by step guide on how to onboard your Contentful instance":
      "Contentfulインスタンスをオンボードする手順については、以下のドキュメントに従ってください",
    "Review your instance configuration":
      "インスタンスの設定を確認してください",
    "Run automated actions and remediation commands against the connected service.":
      "接続されたサービスに対して、自動アクションと修復コマンドを実行します。",
    "SaaS Posture Configuration Monitoring":
      "SaaSポスチャー構成の監視",
    "Scan and protect data across the Claude service":
      "Claudeサービス全体のデータをスキャンして保護します",
    "Select OS":
      "OSを選択",
    "Start typing..":
      "入力を開始..",
    "Sub capabilities":
      "サブ機能",
    "Sync integration cache":
      "統合キャッシュを同期",
    "The access token is used to authenticate requests to the Contentful Management API. It must have the required permissions to access your organization's configuration.":
      "アクセストークンは、Contentful Management APIへのリクエストの認証に使用されます。組織の設定にアクセスするために必要な権限が付与されている必要があります。",
    "The Core Locking integration allows prevention of concurrent execution of scripts or commands, using a wait-lock-release flow (mutex).":
      "Core Locking統合では、待機・ロック・解放のフロー(ミューテックス)を使用して、スクリプトやコマンドの同時実行を防止できます。",
    "To authenticate with Cortex CLI, grant it executable permissions and then copy the API key and API key ID below and substitute it with $[CORTEX_API_KEY] and $[CORTEX_API_KEY_ID].":
      "Cortex CLIで認証するには、実行権限を付与してから、以下のAPIキーとAPIキーIDをコピーし、$[CORTEX_API_KEY]と$[CORTEX_API_KEY_ID]に置き換えます。",
    "To configure this integration, you will need to":
      "この統合を設定するには、",
    "within the Code42 console with the following permissions:":
      "する必要があります。Code42コンソールで、次の権限を付与してください:",
    "Use tenant":
      "テナントを使用",
    "Use the lock name argument to support multiple locks in different flows.":
      "lock name引数を使用すると、異なるフローで複数のロックをサポートできます。",
    "Verification pending":
      "検証待ち",
    "Verification Pending":
      "検証待ち",
    "Whether API calls should be made to the current tenant instead of the main tenant.":
      "メインテナントではなく現在のテナントに対してAPI呼び出しを行うかどうかを指定します。",
    "Whether authentication should be using \"Standard\" API key or \"Advanced\" API key. For XSOAR version < 8.0.0, choose \"Standard\".":
      "認証に「Standard」APIキーと「Advanced」APIキーのどちらを使用するかを指定します。XSOARバージョン8.0.0未満の場合は「Standard」を選択してください。",
    "Whether to sync the integration cache with the database (Available from Cortex).":
      "統合キャッシュをデータベースと同期するかどうかを指定します(Cortexから利用可能)。",
    "With upload results permissions":
      "アップロード結果の権限あり",

    // --- Batch: strings from the Collector export #8 (CrowdStrike/CyberArk EPM/Cybereason/Cribl parameter labels, tooltips and integration card descriptions) ---
    // Fragments such as "and", "The", "In the", "by searching for", "Do not enable", "To get an API client ID and secret, contact" are intentionally NOT registered.
    "(Application ID, Application Secret)":
      "(アプリケーションID、アプリケーションシークレット)",
    "(Client ID, Secret)":
      "(クライアントID、シークレット)",
    "(Credentials, Password)":
      "(認証情報、パスワード)",
    "(Tenant API Key)":
      "(テナントAPIキー)",
    "(Deprecated) Required for local(EPM) authentication only. This parameter is deprecated and no longer used.":
      "(非推奨)ローカル(EPM)認証にのみ必要です。このパラメーターは非推奨であり、使用されなくなりました。",
    "Advanced threat protection with added local management controls.":
      "ローカル管理コントロールを追加した高度な脅威防御です。",
    "Advanced: Time in minutes to look back when fetching events and detections":
      "詳細設定: イベントと検出をフェッチする際にさかのぼる時間(分)",
    "Advanced: Time in minutes to look back when fetching incidents and detections":
      "詳細設定: インシデントと検出をフェッチする際にさかのぼる時間(分)",
    "An Identity and Access Management integration template.":
      "ID・アクセス管理インテグレーションのテンプレートです。",
    "Application Secret":
      "アプリケーションシークレット",
    "Asset types to fetch":
      "フェッチするアセットタイプ",
    "Assets are collected and stored in datasets.":
      "アセットは収集され、データセットに保存されます。",
    "Assets Fetch Interval":
      "アセットのフェッチ間隔",
    "Authenticate with an API token":
      "APIトークンで認証する",
    "Check this box to Enable Polling for Cybereason EPP Malops.":
      "このボックスをオンにすると、Cybereason EPP Malopのポーリングが有効になります。",
    "Choose what event types to fetch - You can choose any combination. Note: Records from the detection endpoint of the CrowdStrike Falcon UI could be of types: 'Endpoint Detection' and 'OFP Detection'.":
      "フェッチするイベントタイプを選択します。任意の組み合わせを選択できます。注: CrowdStrike Falcon UIの検出エンドポイントのレコードのタイプは、'Endpoint Detection'と'OFP Detection'の場合があります。",
    "Choose what incident types to fetch - You can choose any combination. Note:":
      "フェッチするインシデントタイプを選択します。任意の組み合わせを選択できます。注:",
    "Choose what incident types to fetch - You can choose any combination. Note: Records from the detection endpoint of the CrowdStrike Falcon UI could be of types: 'Endpoint Detection' and 'OFP Detection'.":
      "フェッチするインシデントタイプを選択します。任意の組み合わせを選択できます。注: CrowdStrike Falcon UIの検出エンドポイントのレコードのタイプは、'Endpoint Detection'と'OFP Detection'の場合があります。",
    "Records from the detection endpoint of the CrowdStrike Falcon UI could be of types: 'Endpoint Detection' and 'OFP Detection'.":
      "CrowdStrike Falcon UIの検出エンドポイントのレコードのタイプは、'Endpoint Detection'と'OFP Detection'の場合があります。",
    "client_id: Service username (configured as OAuth confidential client).":
      "client_id: サービスユーザー名(OAuth機密クライアントとして構成)。",
    "client_secret: Service user password for OAuth2 authentication.":
      "client_secret: OAuth2認証用のサービスユーザーのパスワード。",
    "Collect logs and data from Google Workspace.":
      "Google Workspaceからログとデータを収集します。",
    "Collects logs and data from a Google Cloud Platform (GCP) Pub/Sub.":
      "Google Cloud Platform(GCP)のPub/Subからログとデータを収集します。",
    "Connect GitLab Container Registry with Cortex Cloud to scan and secure your container images, ensuring comprehensive security and compliance.":
      "GitLab Container RegistryをCortex Cloudに接続して、コンテナイメージをスキャンして保護し、包括的なセキュリティとコンプライアンスを確保します。",
    "Connect Harbor Container Registry with Cortex Cloud to scan and secure your container images, ensuring comprehensive security and compliance.":
      "Harbor Container RegistryをCortex Cloudに接続して、コンテナイメージをスキャンして保護し、包括的なセキュリティとコンプライアンスを確保します。",
    "Detections from On-Demand Scans filter query":
      "オンデマンドスキャンからの検出のフィルタークエリ",
    "Deprecated - We recommend using GSuite Admin instead. Google apps Admin API, or GSuite":
      "非推奨です。代わりにGSuite Adminの使用をお勧めします。Google apps Admin API、またはGSuite",
    "Deprecated. Use FireEyeHX v2 instead.":
      "非推奨です。代わりにFireEyeHX v2を使用してください。",
    "Deprecated. Use IBM QRadar v2 or IBM QRadar v3 instead.":
      "非推奨です。代わりにIBM QRadar v2またはIBM QRadar v3を使用してください。",
    "Deprecated. Use the IBM QRadar v3 integration instead. Fetch offenses from QRadar using Cortex. Supports API versions until 10.0. You can fetch the offenses with their related events and assets by creating a comma-separated list of event fields.":
      "非推奨です。代わりにIBM QRadar v3インテグレーションを使用してください。Cortexを使用してQRadarからオフェンスをフェッチします。10.0までのAPIバージョンをサポートします。イベントフィールドのカンマ区切りリストを作成することで、関連するイベントとアセットを含むオフェンスをフェッチできます。",
    "Endpoint detection and response to manage and query Cybereason Malops, Connections , Processes and many more.":
      "Cybereason Malop、接続、プロセスなどを管理およびクエリするためのエンドポイントの検出と対応です。",
    "Endpoint Detections filter query":
      "エンドポイント検出のフィルタークエリ",
    "Endpoint Information":
      "エンドポイント情報",
    "EPM Region-based tenant URL":
      "EPMリージョンベースのテナントURL",
    "Event Fetch types":
      "イベントのフェッチタイプ",
    "Events Fetch Interval":
      "イベントのフェッチ間隔",
    "ExtraHop Reveal(x) for Cortex is a network detection and response solution that provides complete visibility of network communications at enterprise scale, real-time threat detections backed by machine learning, and guided investigation workflows that simplify response.":
      "ExtraHop Reveal(x) for Cortexは、エンタープライズ規模でネットワーク通信を完全に可視化し、機械学習に基づくリアルタイムの脅威検出と、対応を簡素化するガイド付き調査ワークフローを提供する、ネットワークの検出と対応のソリューションです。",
    "F5 Silverline Threat Intelligence is a cloud-based service incorporating external IP reputation and reducing threat-based communications. By identifying IP addresses and security categories associated with malicious activity, this managed service integrates dynamic lists of threatening IP addresses with the Silverline cloud-based platform, adding context-based security to policy decisions.":
      "F5 Silverline Threat Intelligenceは、外部のIPレピュテーションを組み込み、脅威に基づく通信を削減するクラウドベースのサービスです。悪意のあるアクティビティに関連するIPアドレスとセキュリティカテゴリを特定することで、このマネージドサービスは脅威となるIPアドレスの動的リストをSilverlineクラウドベースプラットフォームと統合し、ポリシー決定にコンテキストベースのセキュリティを追加します。",
    "Fetch Asset types":
      "アセットタイプのフェッチ",
    "Fetch assets":
      "アセットをフェッチ",
    "Fetch Assets":
      "アセットのフェッチ",
    "Fetch assets and vulnerabilities":
      "アセットと脆弱性をフェッチ",
    "Fetch by \"MALOP UPDATE TIME\" (Fetching by Malop creation time is no longer supported)":
      "\"MALOP UPDATE TIME\"でフェッチ(Malopの作成時刻によるフェッチはサポートされなくなりました)",
    "Fetch events":
      "イベントをフェッチ",
    "FireEye Email Security (EX) series protects against breaches caused by advanced email attacks.":
      "FireEye Email Security(EX)シリーズは、高度なメール攻撃によって引き起こされる侵害から保護します。",
    "FireEye Endpoint Security is an integrated solution that detects and protects endpoints against known and unknown threats. This integration provides access to information about endpoints, acquisitions, alerts, indicators, and containment. You can extract critical data and effectively operate the security operations automated playbook.":
      "FireEye Endpoint Securityは、既知および未知の脅威からエンドポイントを検出して保護する統合ソリューションです。このインテグレーションにより、エンドポイント、取得、アラート、インジケーター、封じ込めに関する情報にアクセスできます。重要なデータを抽出し、セキュリティ運用の自動化プレイブックを効果的に運用できます。",
    "First fetch timestamp (<number> <time unit>, e.g., 12 hours, 7 days, 3 months, 1 year)":
      "最初のフェッチのタイムスタンプ(<数値> <時間単位>、例: 12 hours、7 days、3 months、1 year)",
    "First fetch timestamp (<number> <time unit>, e.g., 12 hours, 7 days)":
      "最初のフェッチのタイムスタンプ(<数値> <時間単位>、例: 12 hours、7 days)",
    "Flashpoint Vulnerability Feed Integration allows importing vulnerability intelligence from the Flashpoint platform, empowering teams to reduce exposure windows by identifying high-risk vulnerabilities weeks before public sources. This includes independent research, zero-day disclosures, analyst recommendations, affected and non-affected versions, and over 105,000 vulnerabilities not found in the public NVD/CVE feeds database.":
      "Flashpoint Vulnerability Feed Integrationを使用すると、Flashpointプラットフォームから脆弱性インテリジェンスをインポートでき、公開ソースより数週間早く高リスクの脆弱性を特定して、チームが露出期間を短縮できるようになります。これには、独自の調査、ゼロデイの開示、アナリストの推奨事項、影響を受けるバージョンと影響を受けないバージョン、公開のNVD/CVEフィードデータベースにない105,000件を超える脆弱性が含まれます。",
    "FortiGate provides flawless convergence that can scale to any location: remote office, branch, campus, data center, and cloud. FortiGate always delivered on the concept of hybrid mesh firewalls with FortiManager for unified management and consistent security across complex hybrid environments. The Fortinet FortiOS operating system provides deep visibility and security across a variety of form factors.":
      "FortiGateは、リモートオフィス、支社、キャンパス、データセンター、クラウドなど、あらゆる場所に拡張できる完璧なコンバージェンスを提供します。FortiGateは、複雑なハイブリッド環境全体で統合管理と一貫したセキュリティを実現するFortiManagerとともに、ハイブリッドメッシュファイアウォールのコンセプトを常に提供してきました。Fortinet FortiOSオペレーティングシステムは、さまざまなフォームファクターにわたって高度な可視性とセキュリティを提供します。",
    "Freshservice is a service management solution that allows customers to manage service requests, incidents, change requests tasks, and problem investigation.":
      "Freshserviceは、お客様がサービスリクエスト、インシデント、変更リクエストタスク、問題調査を管理できるサービス管理ソリューションです。",
    "G Suite or Google Workspace Admin is an integration to perform an action on IT infrastructure, create users, update settings, and more administrative tasks.":
      "G SuiteまたはGoogle Workspace Adminは、IT インフラストラクチャに対するアクションの実行、ユーザーの作成、設定の更新など、さまざまな管理タスクを行うためのインテグレーションです。",
    "Gmail API and user management (This integration replaces the Gmail functionality in the GoogleApps API and G Suite integration).":
      "Gmail APIとユーザー管理(このインテグレーションは、GoogleApps APIおよびG SuiteインテグレーションのGmail機能に代わるものです)。",
    "Gmail API using OAuth 2.0.":
      "OAuth 2.0を使用するGmail APIです。",
    "Google Compute Engine delivers virtual machines running in Google's innovative data centers and worldwide fiber network. Compute Engine's tooling and workflow support enable scaling from single instances to global, load-balanced cloud computing.":
      "Google Compute Engineは、Googleの革新的なデータセンターとグローバルなファイバーネットワークで稼働する仮想マシンを提供します。Compute Engineのツールとワークフローのサポートにより、単一のインスタンスからグローバルなロードバランシング対応のクラウドコンピューティングまで拡張できます。",
    "Google Sheets is a spreadsheet program that is part of the free web-based Google applications to create and format spreadsheets. Use this integration to create and modify spreadsheets.":
      "Google Sheetsは、スプレッドシートを作成して書式設定するための、無料のWebベースのGoogleアプリケーションの一部であるスプレッドシートプログラムです。このインテグレーションを使用して、スプレッドシートを作成および変更します。",
    "HTTP Timeout":
      "HTTPタイムアウト",
    "IBM QRadar SIEM helps security teams accurately detect and prioritize threats across the enterprise, supports API versions 10.1 and above. Provides intelligent insights that enable teams to respond quickly to reduce the impact of incidents.":
      "IBM QRadar SIEMは、セキュリティチームが企業全体の脅威を正確に検出して優先順位を付けるのを支援し、APIバージョン10.1以降をサポートします。チームが迅速に対応してインシデントの影響を軽減できるよう、インテリジェントなインサイトを提供します。",
    "Identity URL":
      "アイデンティティURL",
    "IDP Detections filter query":
      "IDP検出のフィルタークエリ",
    "In new Cuckoo installations, a random API token is automatically generated for you, and located in the cuckoo.conf file. In order to authenticate with an API token, insert ‘__token’ in the “Username” textbox, and the token itself in the “Password” textbox.":
      "新しいCuckooのインストールでは、ランダムなAPIトークンが自動的に生成され、cuckoo.confファイルに配置されます。APIトークンで認証するには、[Username]テキストボックスに「__token」を入力し、[Password]テキストボックスにトークン自体を入力します。",
    "In order to use the CrowdStrike Falcon integration, the API client and secret must have the following scopes and permissions:":
      "CrowdStrike Falconインテグレーションを使用するには、APIクライアントとシークレットに次のスコープと権限が必要です。",
    "Incident Fetch types":
      "インシデントのフェッチタイプ",
    "Integrate Application Security with your HCP Terraform organization to gain visibility into your Terraform runs.":
      "Application SecurityをHCP Terraform組織と統合して、Terraformの実行を可視化します。",
    "Integrate with Envoy Identity Access Management services to execute CRUD operations to employee lifecycle processes.":
      "Envoy Identity Access Managementサービスと統合して、従業員のライフサイクルプロセスに対するCRUD操作を実行します。",
    "Integrate with Exceed LMS Identity Access Management services to execute CRUD operations to employee lifecycle processes.":
      "Exceed LMS Identity Access Managementサービスと統合して、従業員のライフサイクルプロセスに対するCRUD操作を実行します。",
    "Integrate with GitHub services to perform Identity Lifecycle Management operations.":
      "GitHubサービスと統合して、IDライフサイクル管理操作を実行します。",
    "Integration to GitHub API.":
      "GitHub APIとのインテグレーションです。",
    "Integration version of the httpv2 automation used to send HTTP requests for API calls to endpoints not associated with an existing XSOAR integration.":
      "既存のXSOARインテグレーションに関連付けられていないエンドポイントへのAPI呼び出しのHTTPリクエストを送信するために使用される、httpv2オートメーションのインテグレーション版です。",
    "IOA filter query":
      "IOAのフィルタークエリ",
    "IOM filter query":
      "IOMのフィルタークエリ",
    "Log events are collected and stored in datasets.":
      "ログイベントは収集され、データセットに保存されます。",
    "Long running instance":
      "長時間実行インスタンス",
    "Long running instance for Spotlight vulnerabilities":
      "Spotlight脆弱性用の長時間実行インスタンス",
    "Manage identity and access control for Google Cloud Platform resources.":
      "Google Cloud Platformリソースのアイデンティティとアクセス制御を管理します。",
    "Mobile Detections filter query":
      "モバイル検出のフィルタークエリ",
    "NGSIEM automated leads fetch query":
      "NGSIEM自動リードのフェッチクエリ",
    "NGSIEM cases fetch query":
      "NGSIEMケースのフェッチクエリ",
    "NGSIEM Detection fetch query":
      "NGSIEM検出のフェッチクエリ",
    "NGSIEM incidents fetch query":
      "NGSIEMインシデントのフェッチクエリ",
    "OFP Detections filter query":
      "OFP検出のフィルタークエリ",
    "Onboard your GitHub Enterprise on-prem to the Cortex Application Security module to gain comprehensive visibility into your GitHub Enterprise platform assets and scan your repositories’ code, configurations, and CI/CD pipelines for security issues.":
      "オンプレミスのGitHub EnterpriseをCortex Application Securityモジュールにオンボードして、GitHub Enterpriseプラットフォームのアセットを包括的に可視化し、リポジトリのコード、構成、CI/CDパイプラインのセキュリティ問題をスキャンします。",
    "Onboard your GitHub SaaS to the Cortex Application Security module to gain comprehensive visibility into your GitHub platform assets and scan your repositories’ code, configurations, and CI/CD pipelines for security issues.":
      "GitHub SaaSをCortex Application Securityモジュールにオンボードして、GitHubプラットフォームのアセットを包括的に可視化し、リポジトリのコード、構成、CI/CDパイプラインのセキュリティ問題をスキャンします。",
    "Onboard your GitLab SaaS to the Cortex Application Security module to gain comprehensive visibility into your GitLab platform assets and scan your repositories’ code, configurations, and CI/CD pipelines for security issues.":
      "GitLab SaaSをCortex Application Securityモジュールにオンボードして、GitLabプラットフォームのアセットを包括的に可視化し、リポジトリのコード、構成、CI/CDパイプラインのセキュリティ問題をスキャンします。",
    "Onboard your GitLab Self Managed on-prem to the Cortex Application Security module to gain comprehensive visibility into your GitLab Self Managed platform assets and scan your repositories’ code, configurations, and CI/CD pipelines for security issues.":
      "オンプレミスのGitLab Self ManagedをCortex Application Securityモジュールにオンボードして、GitLab Self Managedプラットフォームのアセットを包括的に可視化し、リポジトリのコード、構成、CI/CDパイプラインのセキュリティ問題をスキャンします。",
    "Only one collection mode per instance.":
      "インスタンスごとに収集モードは1つだけです。",
    "Organization Permissions":
      "組織の権限",
    "Perform malware dynamic analysis.":
      "マルウェアの動的分析を実行します。",
    "Prerequisites for OAuth 2.0 Authentication":
      "OAuth 2.0認証の前提条件",
    "Recon filter query":
      "Reconのフィルタークエリ",
    "Reliability of the source providing the intelligence data. Currently used for “CVE” reputation command.":
      "インテリジェンスデータを提供するソースの信頼性です。現在、「CVE」レピュテーションコマンドに使用されています。",
    "Required API client scopes":
      "必要なAPIクライアントスコープ",
    "Send push notifications to mobile app":
      "モバイルアプリにプッシュ通知を送信します",
    "Server URL (e.g., https://api.crowdstrike.com)":
      "サーバーURL(例: https://api.crowdstrike.com)",
    "Service username (configured as OAuth confidential client).":
      "サービスユーザー名(OAuth機密クライアントとして構成)。",
    "Spotlight asset and vulnerability collection retrieves only vulnerabilities updated within the last 100 days, keeping each collection focused on recent data.":
      "Spotlightのアセットと脆弱性の収集では、過去100日以内に更新された脆弱性のみが取得され、各収集が最新のデータに集中します。",
    "Spotlight vulnerabilities only.":
      "Spotlightの脆弱性のみ。",
    "Submit a high volume of samples to run in a sandbox and view reports.":
      "大量のサンプルをサンドボックスで実行するために送信し、レポートを表示します。",
    "Supported asset types include:":
      "サポートされているアセットタイプには次のものがあります。",
    "Supported in Cortex and Cortex Platform.":
      "CortexおよびCortex Platformでサポートされています。",
    "Supported in Cortex and Cortex Platform. Input a value between 1-500. Default is 15.":
      "CortexおよびCortex Platformでサポートされています。1~500の値を入力します。デフォルトは15です。",
    "Tenant API Key":
      "テナントAPIキー",
    "tenant_url: The tenant URL for EPM region (e.g., https://api-na.epm.cyberark.cloud)":
      "tenant_url: EPMリージョンのテナントURL(例: https://api-na.epm.cyberark.cloud)",
    "The Application ID of the OAuth2 Server web app configured in Identity Administration.":
      "Identity Administrationで構成されたOAuth2 ServerのWebアプリのアプリケーションIDです。",
    "The asset sources to ingest into the Cortex Unified Asset Inventory.":
      "Cortex Unified Asset Inventoryに取り込むアセットソースです。",
    "The base URL assigned to your organization: https://${workspaceName}-${organizationId}.cribl.cloud":
      "組織に割り当てられたベースURL: https://${workspaceName}-${organizationId}.cribl.cloud",
    "The Cortex Core - IOCs integration uses the Cortex API for detection and response, by natively integrating network, endpoint, and cloud data to stop sophisticated attacks.":
      "Cortex Core - IOCsインテグレーションは、ネットワーク、エンドポイント、クラウドのデータをネイティブに統合して高度な攻撃を阻止し、検出と対応にCortex APIを使用します。",
    "The CyberArk Identity FQDN for OAuth2 authentication (e.g., https://abc1234.id.cyberark.cloud).":
      "OAuth2認証用のCyberArk Identity FQDNです(例: https://abc1234.id.cyberark.cloud)。",
    "The fetch interval for assets and vulnerabilities. It is recommended to set it to 1 hour.":
      "アセットと脆弱性のフェッチ間隔です。1時間に設定することをお勧めします。",
    "The Illusive Attack Management API allows customers to retrieve detected incidents with a forensics timeline, attack surface insights, collect forensics on-demand, and manage a variety of operations with regard to deceptive entities, deception policies, and more.":
      "Illusive Attack Management APIを使用すると、お客様はフォレンジックタイムライン付きの検出済みインシデントの取得、攻撃対象領域のインサイトの確認、オンデマンドでのフォレンジック収集、およびデセプションエンティティやデセプションポリシーなどに関するさまざまな操作の管理を行えます。",
    "The Indicator of Attack (IOA) fetch query. This is an FQL filter that is combined with the time-range filter using AND. For example: cloud_provider:'aws'. For more information, see the Falcon Query Language (FQL) documentation at: https://www.falconpy.io/Usage/Falcon-Query-Language.html.":
      "Indicator of Attack(IOA)のフェッチクエリです。これは、ANDを使用して時間範囲フィルターと組み合わせられるFQLフィルターです。例: cloud_provider:'aws'。詳細については、Falcon Query Language(FQL)のドキュメントを参照してください: https://www.falconpy.io/Usage/Falcon-Query-Language.html。",
    "The tenant URL for EPM region (e.g., https://api-na.epm.cyberark.cloud).":
      "EPMリージョンのテナントURLです(例: https://api-na.epm.cyberark.cloud)。",
    "The timeout of the HTTP requests sent to Cortex API (in seconds).":
      "Cortex APIに送信されるHTTPリクエストのタイムアウトです(秒単位)。",
    "THF Polygon is a Malware Detonation & Research platform designed for deep dynamic analysis and enhanced indicators extraction. THF Polygon analyzes submitted files and urls and extracts deep IOCs that appear when malicious code is triggered and executed. Polygon could be used either for application-level tasks (like smtp-based mail filtering) and analytical purposes (files/urls analysis for verdict, report and indicators).":
      "THF Polygonは、詳細な動的分析と強化されたインジケーター抽出のために設計された、マルウェアの起動および調査プラットフォームです。THF Polygonは、送信されたファイルとURLを分析し、悪意のあるコードがトリガーされて実行されたときに現れる詳細なIOCを抽出します。Polygonは、アプリケーションレベルのタスク(SMTPベースのメールフィルタリングなど)にも、分析目的(判定、レポート、インジケーターのためのファイル/URL分析)にも使用できます。",
    "Third Party Detection fetch query":
      "サードパーティ検出のフェッチクエリ",
    "This integration is enabled by default for the new CrowdStrike Raptor version.":
      "このインテグレーションは、新しいCrowdStrike Raptorバージョンでデフォルトで有効になっています。",
    "This integration was integrated and tested with version 23.2.1 of Cybereason Server":
      "このインテグレーションは、Cybereason Serverのバージョン23.2.1で統合およびテストされました",
    "To authenticate to EPM with OAuth2, provide the following:":
      "OAuth2でEPMに認証するには、次の情報を指定します。",
    "To specify an endpoint, use the following command arguments:":
      "エンドポイントを指定するには、次のコマンド引数を使用します。",
    "token_url: The CyberArk Identity FQDN for OAuth2 authentication (e.g., https://abc1234.id.cyberark.cloud)":
      "token_url: OAuth2認証用のCyberArk Identity FQDN(例: https://abc1234.id.cyberark.cloud)",
    "Troubleshooting":
      "トラブルシューティング",
    "Use Falcon Query Language (FQL) to filter results. For more information, see the [FQL Syntax Documentation](https://www.falconpy.io/Usage/Falcon-Query-Language.html).":
      "Falcon Query Language(FQL)を使用して結果をフィルターします。詳細については、[FQL Syntax Documentation](https://www.falconpy.io/Usage/Falcon-Query-Language.html)を参照してください。",
    "Use the Cortex Github Action to integrate with your GitHub Workflows and gain visibility into your workflows.":
      "Cortex Github Actionを使用して、GitHubワークフローと統合し、ワークフローを可視化します。",
    "Use the Falcon Query Language to refine the data collected. For more information, refer to the FQL syntax documentation: https://www.falconpy.io/Usage/Falcon-Query-Language.html":
      "Falcon Query Languageを使用して、収集されるデータを絞り込みます。詳細については、FQL構文のドキュメントを参照してください: https://www.falconpy.io/Usage/Falcon-Query-Language.html",
    "Use the Generic Export Indicators Service integration to provide an endpoint with a list of indicators as a service for the system indicators.":
      "Generic Export Indicators Serviceインテグレーションを使用して、システムインジケーターのサービスとしてインジケーターのリストをエンドポイントに提供します。",
    "Use the Generic SQL integration to run SQL queries on the following databases: MySQL, PostgreSQL, Microsoft SQL Server, Oracle, Teradata and Trino.":
      "Generic SQLインテグレーションを使用して、次のデータベースでSQLクエリを実行します: MySQL、PostgreSQL、Microsoft SQL Server、Oracle、Teradata、Trino。",
    "Use the Google Maps API.":
      "Google Maps APIを使用します。",
    "Use this integration to connect securely with a GitHub Model Context Protocol (MCP) server and access its tools in real time.":
      "このインテグレーションを使用して、GitHub Model Context Protocol(MCP)サーバーに安全に接続し、そのツールにリアルタイムでアクセスします。",
    "Use this integration to connect to an MCP server and automatically discover its available tools.":
      "このインテグレーションを使用して、MCPサーバーに接続し、利用可能なツールを自動的に検出します。",
    "Use this parameter to determine the look-back period for searching for events that were created before the last run time and did not match the query when they were created.":
      "このパラメーターを使用して、前回の実行時刻より前に作成され、作成時にクエリに一致しなかったイベントを検索するさかのぼり期間を指定します。",
    "Use this parameter to determine the look-back period for searching for incidents that were created before the last run time and did not match the query when they were created.":
      "このパラメーターを使用して、前回の実行時刻より前に作成され、作成時にクエリに一致しなかったインシデントを検索するさかのぼり期間を指定します。",
    "Username (Only if your cuckoo service requires HTTP auth)":
      "ユーザー名(cuckooサービスでHTTP認証が必要な場合のみ)",
    "Web App ID":
      "Webアプリケーション ID",
    "web_app_id: The Application ID of the OAuth2 Server web app configured in Identity Administration.":
      "web_app_id: Identity Administrationで構成されたOAuth2 ServerのWebアプリのアプリケーションID。",
    "When using this parameter, note that:":
      "このパラメーターを使用する際は、次の点に注意してください。",

    // --- Batch: strings from the Collector export #9 (integration card descriptions, error/maintenance messages, dashboard widget titles) ---
    // Fragments such as "and", "The", "In the", "by searching for", "Do not enable", "To get an API client ID and secret, contact" are intentionally NOT registered.
    "A utility for testing incident fetching with mock JSON data.":
      "モックJSONデータを使用してインシデントのフェッチをテストするためのユーティリティです。",
    "Access the full set of possibilities the JoeSandbox Cloud provides via the RESTful Web API v2.":
      "RESTful Web API v2を介して、JoeSandbox Cloudが提供するすべての機能にアクセスします。",
    "Agent Content Version Breakdown (Top 5)":
      "エージェントコンテンツバージョンの内訳(上位5件)",
    "Agent Version Breakdown (Top 5)":
      "エージェントバージョンの内訳(上位5件)",
    "Top Hosts (Top 10 | Last 30 days)":
      "上位ホスト(上位10件 | 過去30日間)",
    "Collect and assess security posture of the Snowflake data cloud.":
      "Snowflakeデータクラウドのセキュリティポスチャーを収集して評価します。",
    "Collect logs and data from Salesforce.":
      "Salesforceからログとデータを収集します。",
    "Collects logs and data from Okta identity and access management service.":
      "Oktaのアイデンティティおよびアクセス管理サービスからログとデータを収集します。",
    "Connect JFrog Container Registry with Cortex Cloud to scan and secure your container images, ensuring robust artifact management and enhanced security.":
      "JFrog Container RegistryをCortex Cloudに接続して、コンテナイメージをスキャンして保護し、堅牢なアーティファクト管理とセキュリティ強化を実現します。",
    "Connect OpenShift Internal Registry with Cortex Cloud using the Kubernetes datasource to scan and secure your container images, ensuring comprehensive security and compliance.":
      "Kubernetesデータソースを使用してOpenShift Internal RegistryをCortex Cloudに接続し、コンテナイメージをスキャンして保護し、包括的なセキュリティとコンプライアンスを確保します。",
    "Connect Sonatype Nexus Registry with Cortex Cloud to scan and secure your container images, ensuring comprehensive security and compliance.":
      "Sonatype Nexus RegistryをCortex Cloudに接続して、コンテナイメージをスキャンして保護し、包括的なセキュリティとコンプライアンスを確保します。",
    "Deprecated. Use Joe Security v2 instead.":
      "非推奨です。代わりにJoe Security v2を使用してください。",
    "Enterprise Mobility Management (EMM) for Apple devices (Mac, iPhone, Apple TV, iPad). Can be used to control various configurations via different policies, install and uninstall applications, lock devices, smart groups searches, and more.":
      "Appleデバイス(Mac、iPhone、Apple TV、iPad)向けのエンタープライズモビリティ管理(EMM)です。さまざまなポリシーによる各種構成の制御、アプリケーションのインストールとアンインストール、デバイスのロック、スマートグループの検索などに使用できます。",
    "Error Occurred":
      "エラーが発生しました",
    "Failed getting content pack recommended":
      "推奨コンテンツパックの取得に失敗しました",
    "failed to get content items status":
      "コンテンツアイテムのステータスの取得に失敗しました",
    "Failed to retrieve data source":
      "データソースの取得に失敗しました",
    "Integrate Application Security with your Terraform Enterprise organization to gain visibility into your Terraform runs.":
      "Application SecurityをTerraform Enterprise組織と統合して、Terraformの実行を可視化します。",
    "Integrate Semgrep to gain a unified overview of your application security posture.":
      "Semgrepを統合して、アプリケーションセキュリティポスチャーの統合的な概要を把握します。",
    "Integrate Snyk to gain a unified overview of your application security posture.":
      "Snykを統合して、アプリケーションセキュリティポスチャーの統合的な概要を把握します。",
    "Integrate SonarQube to gain a unified overview of your application security posture.":
      "SonarQubeを統合して、アプリケーションセキュリティポスチャーの統合的な概要を把握します。",
    "Integrate Veracode to gain a unified overview of your application security posture.":
      "Veracodeを統合して、アプリケーションセキュリティポスチャーの統合的な概要を把握します。",
    "Microsoft Entra ID (formerly Azure AD) integration for identity & access posture monitoring":
      "アイデンティティとアクセスのポスチャー監視のためのMicrosoft Entra ID(旧Azure AD)インテグレーション",
    "MongoDB Atlas cloud database platform":
      "MongoDB Atlasクラウドデータベースプラットフォーム",
    "Multi-service security integration for Microsoft 365 including OneDrive, SharePoint, Teams, and Entra ID.":
      "OneDrive、SharePoint、Teams、Entra IDを含むMicrosoft 365のマルチサービスセキュリティインテグレーションです。",
    "New data is being collected":
      "新しいデータを収集中です",
    "Onboard your Jenkins server for comprehensive Application Security: Integrate Cortex CLI scans for your code, and secure your CI/CD pipelines.":
      "Jenkinsサーバーをオンボードして、包括的なApplication Securityを実現します。コードのCortex CLIスキャンを統合し、CI/CDパイプラインを保護します。",
    "Please try again later":
      "しばらくしてからもう一度お試しください",
    "Select dashboard":
      "ダッシュボードを選択",
    "Show Less":
      "表示を減らす",
    "Something went wrong...":
      "問題が発生しました...",
    "Sorry, something went wrong...":
      "申し訳ありません。問題が発生しました...",
    "The Cortex Core IR integration uses the Cortex API for detection and response, by natively integrating network, endpoint, and cloud data to stop sophisticated attacks.":
      "Cortex Core IRインテグレーションは、ネットワーク、エンドポイント、クラウドのデータをネイティブに統合して高度な攻撃を阻止し、検出と対応にCortex APIを使用します。",
    "Under Maintenance":
      "メンテナンス中",

    // --- Batch: strings from the Collector export #10 (dashboard picker/empty-state strings, Cylance deprecation notice) ---
    // Fragments such as "and", "The", "In the", "by searching for", "Do not enable", "To get an API client ID and secret, contact" are intentionally NOT registered.
    "+ Create new dashboard":
      "+ 新しいダッシュボードを作成",
    "Command Centers":
      "コマンドセンター",
    "Common Dashboards":
      "共通ダッシュボード",
    "Troubleshooting Instances":
      "インスタンスのトラブルシューティング",
    "Troubleshooting Playbooks":
      "Playbookのトラブルシューティング",
    "Automation Insights":
      "オートメーションインサイト",
    "Connect Data Sources":
      "データソースを接続",
    "Get started with Cortex Cloud by connecting your cloud environment as data sources.":
      "クラウド環境をデータソースとして接続して、Cortex Cloudを使い始めましょう。",
    "Ready to Secure Your Cloud?":
      "クラウドを保護する準備はできましたか?",
    "Scanning in Progress...":
      "スキャン中...",
    "Your top priority vulnerabilities will be here shortly":
      "優先度の高い脆弱性がまもなくここに表示されます",
    "Deprecated. This service has been discontinued for external users by Cylance. No available replacement.":
      "非推奨です。このサービスはCylanceにより外部ユーザー向けの提供が終了しています。代替はありません。",

    // --- Batch: strings from the Collector export #11 (Databricks/Doppel integration docs and parameters, Databricks posture wizard, Bitbucket cards) ---
    // Fragments such as "and", "The", "In the", "by searching for", "Do not enable", "To get an API client ID and secret, contact" are intentionally NOT registered.
    "“403 Forbidden” errors on specific commands:":
      "特定のコマンドでの「403 Forbidden」エラー:",
    "“Test failed” when configuring the integration:":
      "インテグレーションの構成時に「Test failed」と表示される場合:",
    "(API Key (V1))":
      "(APIキー(V1))",
    "(Client ID (V2), Client Secret (V2))":
      "(クライアントID(V2)、クライアントシークレット(V2))",
    "(User API Key (V1))":
      "(ユーザーAPIキー(V1))",
    "API Key (V1)":
      "APIキー(V1)",
    "User API Key (V1)":
      "ユーザーAPIキー(V1)",
    "Client ID (V2)":
      "クライアントID(V2)",
    "Client Secret (V2)":
      "クライアントシークレット(V2)",
    "Organization Code (V1)":
      "組織コード(V1)",
    "Doppel Tenant URL":
      "DoppelテナントURL",
    "Attach alert screenshots to incidents":
      "アラートのスクリーンショットをインシデントに添付する",
    "Check “First fetch time” — a very short window may miss older events":
      "「First fetch time」を確認してください。期間が短すぎると、古いイベントを取得できない場合があります",
    "Check that the token has permission to access SQL Warehouses (used for connectivity test)":
      "トークンにSQL Warehousesへのアクセス権限があることを確認してください(接続テストで使用されます)",
    "Confirm “Fetch types” is set to at least one of: SQL Alerts, Failed Jobs":
      "「Fetch types」にSQL Alerts、Failed Jobsの少なくとも1つが設定されていることを確認してください",
    "Copy the token immediately — it will not be shown again":
      "トークンはすぐにコピーしてください。再表示されません",
    "Databricks Free Edition does not support all APIs (e.g., SCIM, cluster creation). Commands targeting unsupported features will return 403":
      "Databricks Free EditionはすべてのAPI(SCIM、クラスター作成など)をサポートしていません。サポートされていない機能を対象とするコマンドは403を返します",
    "Ensure the Personal Access Token is valid and has not expired":
      "パーソナルアクセストークンが有効で、期限切れでないことを確認してください",
    "For SQL Alerts, verify alerts exist and have been triggered in your workspace":
      "SQL Alertsについては、ワークスペースにアラートが存在し、トリガーされていることを確認してください",
    "Increase the HTTP timeout in the integration instance advanced settings if needed":
      "必要に応じて、インテグレーションインスタンスの詳細設定でHTTPタイムアウトを延長してください",
    "Log in to your Databricks workspace":
      "Databricksワークスペースにログインします",
    "Some APIs require admin-level permissions. Verify your token’s user has the required role":
      "一部のAPIには管理者レベルの権限が必要です。トークンのユーザーに必要なロールがあることを確認してください",
    "How to Generate a Personal Access Token":
      "パーソナルアクセストークンの生成方法",
    "Test Configuration":
      "構成のテスト",
    "Databricks Workspace URL":
      "DatabricksワークスペースURL",
    "Fetch incidents returns no results:":
      "インシデントのフェッチで結果が返されない場合:",
    "Timeout errors on large queries:":
      "大規模なクエリでのタイムアウトエラー:",
    "Fetch incidents timeout":
      "インシデントのフェッチのタイムアウト",
    "Fetch types":
      "フェッチタイプ",
    "Number of incidents for each fetch.":
      "フェッチごとのインシデント数。",
    "Polling interval":
      "ポーリング間隔",
    "Issue type (if classifier doesn't exist)":
      "イシュータイプ(分類子が存在しない場合)",
    "No issue type":
      "イシュータイプなし",
    "Issue type will be set by this field if a Classifier does not exist. If a classifier is selected, it will take precedence.":
      "分類子が存在しない場合は、このフィールドでイシュータイプが設定されます。分類子が選択されている場合は、そちらが優先されます。",
    "Default polling interval value for `demisto-lock-get`, can be overridden by the \"polling_interval\" argument.":
      "`demisto-lock-get`のデフォルトのポーリング間隔の値です。\"polling_interval\"引数で上書きできます。",
    "Due to API limitations, the maximum is 100.":
      "APIの制限により、最大値は100です。",
    "e.g., 3 days, 1 week":
      "例: 3 days、1 week",
    "The Doppel API version to use. V1 authenticates with a static API Key; V2 authenticates with OAuth 2.0 client credentials (Client ID and Client Secret). New Doppel API capabilities are added to V2 only, so V2 is recommended.":
      "使用するDoppel APIのバージョンです。V1は静的なAPIキーで認証し、V2はOAuth 2.0クライアント認証情報(クライアントIDとクライアントシークレット)で認証します。新しいDoppel APIの機能はV2にのみ追加されるため、V2を推奨します。",
    "The Doppel server URL that will be used for calling the APIs.":
      "APIの呼び出しに使用されるDoppelサーバーのURLです。",
    "The interval specifies the cadence with which the Doppel alerts be fetched.":
      "この間隔は、Doppelのアラートをフェッチする頻度を指定します。",
    "The Organization Code to use for connection with Doppel. Applies to API Version V1 only; V2 scopes requests to your organization automatically.":
      "Doppelへの接続に使用する組織コードです。APIバージョンV1にのみ適用されます。V2ではリクエストが自動的に組織にスコープされます。",
    "The time limit in seconds for fetch incidents to run. Leave this empty to cancel the timeout limit.":
      "インシデントのフェッチを実行できる制限時間(秒)です。空のままにすると、タイムアウト制限が解除されます。",
    "Types of events to fetch as incidents.":
      "インシデントとしてフェッチするイベントのタイプ。",
    "Whether incoming mirroring downloads the alert screenshot and attaches it to the incident as a War Room file entry whenever the screenshot version changes. Screenshots are stored in your Cortex instance. The doppel-get-alert-screenshot command works regardless of this setting.":
      "受信ミラーリングで、スクリーンショットのバージョンが変更されるたびに、アラートのスクリーンショットをダウンロードし、War Roomのファイルエントリとしてインシデントに添付するかどうかを指定します。スクリーンショットはCortexインスタンスに保存されます。doppel-get-alert-screenshotコマンドは、この設定に関係なく動作します。",
    "Details for Doppel workflow":
      "Doppelワークフローの詳細",
    "Credentials for the API Version you select (see below).":
      "選択したAPIバージョンの認証情報(下記参照)。",
    "Reach out to Doppel to get access to the above information.":
      "上記の情報へのアクセスについては、Doppelにお問い合わせください。",
    "Name of the instance.":
      "インスタンスの名前。",
    "Doppel is a Modern Digital Risk Protection Solution, that detects the phishing and brand cyber attacks on the emerging channels. Doppel scans millions of channels online which includes, social media, domains, paid ads, dark web, emerging channels, etc. Doppel can identify the malicious content and cyber threats, and enables their customers to take down the digital risks proactively. The Cortex pack for Doppel provides mirrors the alerts created by Doppel as Cortex incidents. The pack also contains the commands to perform different operations on Doppel alerts.":
      "Doppelは、新興チャネル上のフィッシングやブランドに対するサイバー攻撃を検出する、最新のデジタルリスク保護ソリューションです。Doppelは、ソーシャルメディア、ドメイン、有料広告、ダークウェブ、新興チャネルなど、オンライン上の数百万のチャネルをスキャンします。Doppelは悪意のあるコンテンツやサイバー脅威を特定し、お客様がデジタルリスクを事前に排除できるようにします。Doppel用のCortexパックは、Doppelで作成されたアラートをCortexインシデントとしてミラーリングします。このパックには、Doppelアラートに対してさまざまな操作を実行するためのコマンドも含まれています。",
    "The Demisto Locking integration allows prevention of concurrent execution of scripts or commands, using a wait-lock-release flow (mutex).":
      "Demisto Lockingインテグレーションを使用すると、待機-ロック-解放フロー(ミューテックス)により、スクリプトやコマンドの同時実行を防止できます。",
    "Allow access by IP's":
      "IPによるアクセスを許可",
    "Applicable Broker VMs":
      "対象のBroker VM",
    "Both cloud and region will be used for scanning and can incur cost and compliance if selected incorrectly.":
      "クラウドとリージョンの両方がスキャンに使用されます。誤って選択すると、コストやコンプライアンス上の問題が発生する可能性があります。",
    "Choose regions":
      "リージョンを選択",
    "Databricks Account ID":
      "DatabricksアカウントID",
    "Databricks Instance":
      "Databricksインスタンス",
    "Define static IPs and cloud regions for the connector if required by your security settings.":
      "セキュリティ設定で必要な場合は、コネクタの静的IPとクラウドリージョンを定義します。",
    "Enter instance name":
      "インスタンス名を入力",
    "Establish Connection":
      "接続を確立",
    "For Container Registries with network policies, it is required to allow access from the following IP addresses:":
      "ネットワークポリシーが設定されたコンテナレジストリでは、次のIPアドレスからのアクセスを許可する必要があります。",
    "Insert Account ID":
      "アカウントIDを入力",
    "Insert Application id":
      "アプリケーションIDを入力",
    "Integrate Cloud Security with your Databricks Account to gain comprehensive visibility into any data and posture risk existing in your Databricks environment.This integration enables automated scanning of all assets in Databricks,including data classification and risk assessment.":
      "Cloud SecurityをDatabricksアカウントと統合して、Databricks環境に存在するあらゆるデータとポスチャーリスクを包括的に可視化します。このインテグレーションにより、データ分類とリスク評価を含む、Databricks内のすべてのアセットの自動スキャンが可能になります。",
    "Invalid account ID":
      "無効なアカウントID",
    "My Databricks account protected by network policies":
      "ネットワークポリシーで保護されたDatabricksアカウント",
    "Scan with Broker VM":
      "Broker VMでスキャン",
    "Scanning in private networks is done using broker VM infrastructure":
      "プライベートネットワークでのスキャンは、ブローカーVMインフラストラクチャを使用して実行されます",
    "Scanning is done on infrastructure deployed to a cloud account owned by you. This mode requires additional cloud provider permissions and may incur additional cloud costs.":
      "スキャンは、お客様が所有するクラウドアカウントにデプロイされたインフラストラクチャ上で実行されます。このモードでは、クラウドプロバイダーの追加の権限が必要で、クラウドコストが追加で発生する場合があります。",
    "Select a cloud provider and region in order to retrieve an IP address.":
      "IPアドレスを取得するには、クラウドプロバイダーとリージョンを選択してください。",
    "Select Cloud provider":
      "クラウドプロバイダーを選択",
    "Select Cluster":
      "クラスターを選択",
    "Verify Connection":
      "接続を確認",

    // --- Batch: fragment strings for the Databricks integration doc page (fragments whose neighbouring nodes are known; registered as a set so the sentence reads correctly) ---
    // Fragments such as "and", "The", "In the", "by searching for", "Do not enable", "To get an API client ID and secret, contact" are intentionally NOT registered.
    "A Databricks workspace with a valid URL (e.g.,":
      "有効なURLを持つDatabricksワークスペース(例:",
    "A Personal Access Token (PAT) with at minimum":
      "最低限、次のアクセス権を持つパーソナルアクセストークン(PAT):",
    "access. Admin-level permissions are required for IAM (SCIM), IP access lists, and global init script commands":
      "アクセス。IAM(SCIM)、IPアクセスリスト、グローバルinitスクリプトのコマンドには管理者レベルの権限が必要です",
    "Click your username in the top-right corner and select":
      "右上のユーザー名をクリックして、次を選択します:",
    "Enter a description and optional lifetime, then click":
      "説明と有効期間(任意)を入力し、次をクリックします:",
    "Verify the Workspace URL is correct (no trailing slash, includes":
      "ワークスペースURLが正しいことを確認します(末尾のスラッシュなし、次を含む:",
    ": Your workspace URL (e.g.,":
      ": ワークスペースのURL(例:",
    ": The PAT generated above":
      ": 上記で生成したPAT",
    ": Enable to pull SQL alerts and failed job runs as incidents":
      ": 有効にすると、SQLアラートと失敗したジョブ実行をインシデントとして取得します",
    "SQL Statement Execute may time out for long-running queries. Use":
      "SQL Statement Executeは、長時間実行されるクエリでタイムアウトする場合があります。次を使用して",
    "to poll for results":
      "結果をポーリングします",

    // --- Batch: EWS O365 / Exchange Online / Dropbox / Elasticsearch integration doc page (Collector export 2026-10-11 09:38) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    "Action Required":
      "対応が必要です",
    "App authentication":
      "アプリ認証",
    "Important note: Retirement of RBAC Application Impersonation":
      "重要なお知らせ: RBAC Application Impersonationの廃止",
    "Microsoft EWS Retirement and EwsAllowedAppIds":
      "Microsoft EWSの廃止とEwsAllowedAppIds",
    "Permissions Needed":
      "必要な権限",
    "Set up the Third Party System":
      "サードパーティシステムのセットアップ",
    "Verify that the admin account has sufficient Exchange Online permissions":
      "管理者アカウントに十分なExchange Onlineの権限があることを確認する",
    "For customers using a Self-Deployed Application":
      "自己デプロイ型アプリケーションを使用しているお客様向け",
    "For customers using the Cortex Application authentication method":
      "Cortex Application認証方式を使用しているお客様向け",
    "(For full details, complete timelines, and PowerShell scripts for safely appending to an existing allow list, refer to the official Microsoft documentation:":
      "(詳細、完全なタイムライン、既存の許可リストに安全に追加するためのPowerShellスクリプトについては、Microsoft公式ドキュメントを参照してください:",
    "After authorizing the Demisto app, you will get an ID, Token, and Key, which needs to be added to the integration instance configuration’s corresponding fields.":
      "Demistoアプリを認可すると、ID、トークン、キーが発行されます。これらをインテグレーションインスタンス構成の対応するフィールドに追加する必要があります。",
    "As of February 2025, the Impersonation access type of the integration is deprecated by Microsoft, read about it":
      "2025年2月時点で、インテグレーションのImpersonationアクセスタイプはMicrosoftにより非推奨となっています。詳細は",
    "As part of this transition, Microsoft is moving away from unrestricted EWS access and has introduced a new tenant-level allow list called":
      "この移行の一環として、MicrosoftはEWSへの無制限アクセスを廃止し、新しいテナントレベルの許可リストを導入しました。名称:",
    "Assign Azure AD roles to the application.":
      "Azure ADロールをアプリケーションに割り当てます。",
    "Assign custom role groups to the application using service principals.":
      "サービスプリンシパルを使用して、カスタムロールグループをアプリケーションに割り当てます。",
    "Attach the .cer file to your Azure app.":
      ".cerファイルをAzureアプリに添付します。",
    "Attach the .cer file to your Azure App.":
      ".cerファイルをAzureアプリに添付します。",
    "Authentication Type (NTLM, Basic, or Digest). For Office 365 use Basic.":
      "認証タイプ(NTLM、Basic、またはDigest)。Office 365ではBasicを使用します。",
    "Authentication: Email address (for Office 365) or DOMAIN\\USERNAME (e.g. DEMISTO.INT\\admin)":
      "認証: メールアドレス(Office 365の場合)またはDOMAIN\\USERNAME(例: DEMISTO.INT\\admin)",
    "Connect to Exchange Online PowerShell and add the Application ID.":
      "Exchange Online PowerShellに接続し、アプリケーションIDを追加します。",
    "Copy the contents of the .txt file and paste it in the Certificate parameter of the integration’s instance.":
      ".txtファイルの内容をコピーして、インテグレーションのインスタンスのCertificateパラメーターに貼り付けます。",
    "Create the application:":
      "アプリケーションを作成します:",
    "Create the certificate in Cortex XSOAR/XSIAM.":
      "Cortex XSOAR/XSIAMで証明書を作成します。",
    "Default is to filter by received-time, which works well if the folder is an \"Inbox\". But for a folder emails are dragged into for attention, if we filter by received-time, out-of-order processing of emails means some are ignored. Filtering by modified-time works better for such a scenario. This works best if any modifications (such as tagging) happens before moving the email into the folder, such that the move into the folder is the last modification, and triggers Cortex to fetch it as an incident.":
      "デフォルトでは受信時刻でフィルターします。これは、フォルダーが「受信トレイ」である場合に適しています。しかし、注意が必要なメールをドラッグして入れるフォルダーでは、受信時刻でフィルターすると、メールが順不同で処理されるため、一部が無視されます。このようなシナリオでは、更新時刻でフィルターする方が適しています。この方法は、変更(タグ付けなど)をメールをフォルダーに移動する前に行い、フォルダーへの移動が最後の変更となってCortexがそれをインシデントとしてフェッチするようにすると、最も効果的です。",
    "Default version is used when accessing the EWS API to determine the API version.":
      "EWS APIにアクセスする際、APIバージョンを決定するためにデフォルトのバージョンが使用されます。",
    "Directory and metadata:":
      "ディレクトリとメタデータ:",
    "Log collection:":
      "ログ収集:",
    "Inventory data snapshots are collected every 10 minutes.":
      "インベントリデータのスナップショットは10分ごとに収集されます。",
    "Download the certificateBase34.txt file.":
      "certificateBase34.txtファイルをダウンロードします。",
    "Email address from which to fetch incidents":
      "インシデントをフェッチするメールアドレス",
    "Enable Dropbox Log Collection":
      "Dropboxログ収集を有効にする",
    "Enter a unique name for this DropBox instance":
      "このDropBoxインスタンスの一意の名前を入力",
    "Enter DropBox Access Code for authenticating requests":
      "リクエストの認証に使用するDropBoxアクセスコードを入力",
    "Enter DropBox app key for authenticating requests":
      "リクエストの認証に使用するDropBoxアプリキーを入力",
    "Enter DropBox App Secret for authenticating requests":
      "リクエストの認証に使用するDropBoxアプリシークレットを入力",
    "access code":
      "アクセスコード",
    "app key":
      "アプリキー",
    "app secret":
      "アプリシークレット",
    "Ensure EWS is enabled for your tenant.":
      "お使いのテナントでEWSが有効になっていることを確認してください。",
    "Elastic version 2.* or 5.*":
      "Elasticバージョン2.*または5.*",
    "Exchange Online URL":
      "Exchange Online URL",
    "Exchange URL or Server IP address":
      "Exchange URLまたはサーバーIPアドレス",
    "ID / Application ID":
      "ID / アプリケーションID",
    "ID can be received from the admin consent procedure - see Detailed Instructions.":
      "IDは管理者の同意手順から取得できます。詳細な手順を参照してください。",
    "Token can be received from the admin consent procedure - see Detailed Instructions.":
      "トークンは管理者の同意手順から取得できます。詳細な手順を参照してください。",
    "Follow your preferred method’s guide on how to use the admin consent flow in order to receive your authentication information:":
      "管理者の同意フローを使用して認証情報を取得する方法については、ご利用の方法のガイドに従ってください:",
    "For Office 365, use https://outlook.office365.com/EWS/Exchange.asmx (default) as the Server URL.":
      "Office 365では、サーバーURLとして https://outlook.office365.com/EWS/Exchange.asmx (デフォルト)を使用します。",
    "For the integration to work, the Azure AD application’s service principal must have the correct permissions assigned in the Exchange Online role groups.":
      "インテグレーションが機能するには、Azure ADアプリケーションのサービスプリンシパルに、Exchange Onlineのロールグループで正しい権限が割り当てられている必要があります。",
    "Has impersonation rights":
      "Impersonation権限あり",
    "Mark fetched emails as read":
      "フェッチしたメールを既読にする",
    "Skip unparsable emails during fetch incidents":
      "インシデントのフェッチ中に解析できないメールをスキップする",
    "Trust server certificate":
      "サーバー証明書を信頼する",
    "Use a self deployed Azure Application":
      "自己デプロイ型のAzureアプリケーションを使用する",
    "Use legacy attachment name":
      "従来の添付ファイル名を使用する",
    "If this is the only application you are allowing, run the following command (replace":
      "このアプリケーションのみを許可する場合は、次のコマンドを実行してください(",
    "with your actual Application Client ID):":
      "を実際のApplication Client IDに置き換えます):",
    "In Azure, go to Entra ID (Overview blade) and copy the":
      "Azureで、Entra ID(概要ブレード)に移動し、次をコピーします:",
    "In Cortex XSOAR/XSIAM, in the integration instance configuration, enter your saved password in the":
      "Cortex XSOAR/XSIAMのインテグレーションインスタンス構成で、保存したパスワードを次に入力します:",
    "In Cortex XSOAR/XSIAM, in the integration instance configuration, paste the application ID in":
      "Cortex XSOAR/XSIAMのインテグレーションインスタンス構成で、アプリケーションIDを次に貼り付けます:",
    "In Cortex XSOAR/XSIAM, in the integration instance configuration, paste the Domain name in":
      "Cortex XSOAR/XSIAMのインテグレーションインスタンス構成で、ドメイン名を次に貼り付けます:",
    "In order to function as expected, set the following permissions:":
      "期待どおりに機能させるには、次の権限を設定してください:",
    "In the Add assignments flyout that opens, find and select the app that you created in Step 1.":
      "開いた[Add assignments]フライアウトで、手順1で作成したアプリを検索して選択します。",
    "In the Certificates tab, upload the publickey.cer file.":
      "[Certificates]タブで、publickey.cerファイルをアップロードします。",
    "In the Cortex XSOAR/XSIAM Playground, download the publickey.cer file":
      "Cortex XSOAR/XSIAMのPlaygroundで、publickey.cerファイルをダウンロードします",
    "In the integration instance configuration, paste the text in the":
      "インテグレーションインスタンス構成で、テキストを次に貼り付けます:",
    "In the left menu of the newly created application, click":
      "新しく作成したアプリケーションの左側のメニューで、次をクリックします:",
    "In the Azure app, navigate to":
      "Azureアプリで、次に移動します:",
    "In the Azure application, in the left menu, click":
      "Azureアプリケーションの左側のメニューで、次をクリックします:",
    "In the Request API permissions page, click":
      "[Request API permissions]ページで、次をクリックします:",
    "In the left sidebar, select:":
      "左側のサイドバーで、次を選択します:",
    "In the top bar, select:":
      "上部のバーで、次を選択します:",
    "Index time field, used to sort and limit data":
      "データの並べ替えと制限に使用するインデックス時刻フィールド",
    "Index/indexes to fetch incidents from (comma separated)":
      "インシデントをフェッチするインデックス(カンマ区切り)",
    "Key / Application Secret":
      "キー / アプリケーションシークレット",
    "Log in using an admin account that can manage role assignments for the Azure AD application (for example, a Global Administrator or Privileged Role Administrator).":
      "Azure ADアプリケーションのロール割り当てを管理できる管理者アカウント(グローバル管理者や特権ロール管理者など)でログインします。",
    "Mailbox to run commands on and to fetch incidents from.":
      "コマンドを実行し、インシデントをフェッチするメールボックス。",
    "Mailbox to run commands on and to fetch incidents from. To use this functionality, your account must have delegation for the account specified. For more information, see https://xsoar.pan.dev/docs/reference/integrations/ewso365#additional-information":
      "コマンドを実行し、インシデントをフェッチするメールボックス。この機能を使用するには、お使いのアカウントに、指定したアカウントに対する委任が必要です。詳細については、https://xsoar.pan.dev/docs/reference/integrations/ewso365#additional-information を参照してください。",
    "Maximum number of incidents per fetch (up to 200). Performance might be affected by a value higher than 50.":
      "フェッチあたりのインシデントの最大数(最大200)。50を超える値を指定すると、パフォーマンスに影響する可能性があります。",
    "Member Devices":
      "メンバーデバイス",
    "Name of the folder from which to fetch incidents":
      "インシデントをフェッチするフォルダーの名前",
    "Name of the folder from which to fetch incidents (supports Exchange Folder ID and sub-folders e.g. Inbox/Phishing)":
      "インシデントをフェッチするフォルダーの名前(Exchange フォルダーIDとサブフォルダーをサポート。例: Inbox/Phishing)",
    "Supports Exchange Folder ID and sub-folders e.g. Inbox/Phishing.":
      "Exchange フォルダーIDとサブフォルダーをサポートします。例: Inbox/Phishing。",
    "Note - for more information go to the official":
      "注: 詳細については、公式の次のページを参照してください:",
    "Note: Remember your password since you will need it to create your integration instance.":
      "注: インテグレーションインスタンスの作成時に必要になるため、パスワードを忘れないようにしてください。",
    "Note: The information in the Playground is sensitive information. You should delete the information by running the following command:":
      "注: Playground内の情報は機密情報です。次のコマンドを実行して情報を削除してください:",
    "Open the downloaded txt file and copy the text.":
      "ダウンロードしたtxtファイルを開き、テキストをコピーします。",
    "Open the Microsoft Purview Portal: https://purview.microsoft.com/":
      "Microsoft Purviewポータルを開きます: https://purview.microsoft.com/",
    "Palo Alto Networks is making the necessary updates to align our shared Application ID with Microsoft’s new requirements, so you do not need to run the steps above. However, because this change is enforced and controlled entirely by Microsoft, we cannot validate the changes in advance or guarantee uninterrupted functionality. Palo Alto Networks is not responsible for any disruptions resulting from this rollout. We recommend verifying that your integration continues to function as expected once the October 2026 enforcement takes effect.":
      "Palo Alto Networksは、共有のApplication IDをMicrosoftの新しい要件に合わせるために必要な更新を行っているため、上記の手順を実行する必要はありません。ただし、この変更はMicrosoftによって完全に強制および管理されているため、事前に変更を検証したり、中断のない機能を保証したりすることはできません。Palo Alto Networksは、このロールアウトに起因する中断について責任を負いません。2026年10月の強制適用が開始された後も、インテグレーションが期待どおりに機能し続けることを確認することをお勧めします。",
    "You are responsible for updating your tenant configuration before the October 2026 enforcement takes effect. To ensure this integration continues to function without disruption, you must add the Entra Application (Client) ID used by this integration to your Exchange Online tenant’s allow list.":
      "2026年10月の強制適用が開始される前に、テナント構成を更新する責任はお客様にあります。このインテグレーションが中断なく機能し続けるようにするには、このインテグレーションで使用するEntra Application(クライアント)IDを、Exchange Onlineテナントの許可リストに追加する必要があります。",
    "Query to fetch incidents by (Lucene style)":
      "インシデントをフェッチするクエリ(Lucene形式)",
    "Sender Mailbox":
      "送信者メールボックス",
    "Server URL (e.g. http://192.168.0.1:9200)":
      "サーバーURL(例: http://192.168.0.1:9200)",
    "Server Version (2007, 2010, 2010_SP2, 2013, or 2016)":
      "サーバーバージョン(2007、2010、2010_SP2、2013、または2016)",
    "The application ID from the Azure portal":
      "AzureポータルのアプリケーションID",
    "The organization used in app-only authentication":
      "アプリ専用認証で使用する組織",
    "The organization used in app-only authentication.":
      "アプリ専用認証で使用する組織。",
    "There are two application authentication methods available.":
      "アプリケーション認証方式は2つあります。",
    "This command replaces the entire allow list. If you already have other approved EWS applications, first read the current list and append the new ID so that you don’t overwrite existing entries.":
      "このコマンドは許可リスト全体を置き換えます。すでに承認済みの他のEWSアプリケーションがある場合は、既存のエントリを上書きしないように、まず現在のリストを読み取り、新しいIDを追加してください。",
    "Time format as kept in ElasticSearch, leave empty to use default":
      "ElasticSearchで保持される時刻形式。デフォルトを使用する場合は空のままにします",
    "Time format is goland style format. For more details, look at:":
      "時刻形式はGoland形式です。詳細については、次を参照してください:",
    "To allow access to EWS O365, an administrator has to approve the Demisto app using an admin consent flow, by clicking on the following":
      "EWS O365へのアクセスを許可するには、管理者が管理者の同意フローを使用してDemistoアプリを承認する必要があります。次のリンクをクリックしてください:",
    "To avoid disruptions, it is imperative that administrators begin transitioning their applications immediately.":
      "中断を避けるため、管理者はただちにアプリケーションの移行を開始することが不可欠です。",
    "To create the application, follow the instructions in this":
      "アプリケーションを作成するには、次の手順に従ってください:",
    "To identify accounts using the ApplicationImpersonation role use the Exchange Online PowerShell command:":
      "ApplicationImpersonationロールを使用しているアカウントを特定するには、次のExchange Online PowerShellコマンドを使用します:",
    "To obtain the access code, click":
      "アクセスコードを取得するには、",
    "and sign in with your Dropbox Business account credentials.":
      "をクリックし、Dropbox Businessアカウントの認証情報でサインインします。",
    "To use this integration, you need to connect an application with a certificate.":
      "このインテグレーションを使用するには、証明書を使用してアプリケーションを接続する必要があります。",
    "Under Exchange, click the":
      "Exchangeで、次をクリックします:",
    "We highly recommend using the":
      "メールボックス操作には、次の使用を強くお勧めします:",
    "integration for mailbox operations such as reading, searching, and managing emails and attachments, as Microsoft itself recommends transitioning from EWS to Graph-based APIs.":
      "インテグレーション(メールの読み取り、検索、メールと添付ファイルの管理など)。Microsoft自身もEWSからGraphベースのAPIへの移行を推奨しているためです。",
    "What time field should we filter incidents by?":
      "インシデントのフィルター対象とする時刻フィールドはどれですか?",
    "When 'Mark fetched emails as read' is enabled and emails are fetched by modification time, emails will be re-fetched in the next cycle after being marked as read (due to metadata changes). This is expected behavior.":
      "「Mark fetched emails as read」が有効で、メールが更新時刻でフェッチされる場合、既読にしたメールは(メタデータの変更により)次のサイクルで再フェッチされます。これは想定された動作です。",
    "You have two options:":
      "2つのオプションがあります:",
    "Search for the following role groups:":
      "次のロールグループを検索します:",
    "If not listed, click":
      "一覧にない場合は、次をクリックします:",
    "On the Assignments page that opens, select":
      "開いた[Assignments]ページで、次を選択します:",
    "On the Roles and administrators page that opens, find and select one of the supported roles by clicking on the":
      "開いた[Roles and administrators]ページで、サポートされているロールのいずれかを検索し、次をクリックして選択します:",
    "Microsoft has announced the final phase of Exchange Web Services (EWS) retirement in Exchange Online, with phased disablement beginning in October 2026.":
      "Microsoftは、Exchange OnlineにおけるExchange Web Services(EWS)の廃止の最終フェーズを発表しました。2026年10月から段階的に無効化が始まります。",
    "application used for authentication":
      "認証に使用するアプリケーション",

    // --- Batch: follow-up for the 09:38 export: items missed in the previous batch (EWS Extension Online PowerShell doc, Elasticsearch DQ label) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    "Use DQ syntax to map elastic JSON struct to incident fields, use :: as mapping seperator":
      "ElasticのJSON構造をインシデントフィールドにマッピングするにはDQ構文を使用し、マッピングの区切り文字には::を使用します",
    ". Starting in October 2026, Microsoft will block all EWS traffic by default. Applications will only be able to access EWS if their specific Application (Client) ID is explicitly added to this allow list by the tenant administrator.":
      "。2026年10月以降、Microsoftはデフォルトですべての EWS トラフィックをブロックします。アプリケーションは、テナント管理者によって固有のApplication(クライアント)IDがこの許可リストに明示的に追加されている場合にのみ、EWSにアクセスできます。",
    "Deprecated. Use EWS v2 instead.":
      "非推奨です。代わりにEWS v2を使用してください。",
    "Deprecated. Use EWS Extension Online Powershell v3 instead.":
      "非推奨です。代わりにEWS Extension Online Powershell v3を使用してください。",
    "Deprecated. Use":
      "非推奨です。代わりに",
    "instead.":
      "を使用してください。",
    "- Client Credential Flow.":
      "- クライアント資格情報フロー。",
    "– a highly privileged security role that also provides full access.":
      "– 完全なアクセス権も提供する、高い権限を持つセキュリティロール。",
    "– the most privileged role and fully supported for this integration.":
      "– 最も高い権限を持つロールで、このインテグレーションで完全にサポートされています。",
    ". Assign the following API permission to the application:":
      "。次のAPI権限をアプリケーションに割り当てます:",
    "Run the":
      "次の",
    "command in Cortex to acquire the certificate.":
      "コマンドをCortexで実行して証明書を取得します。",
    "command in the Playground to acquire the certificate.":
      "コマンドをPlaygroundで実行して証明書を取得します。",
    "Open the role and verify that the":
      "ロールを開き、",
    "service principal of the Azure AD application used by the integration":
      "インテグレーションで使用されるAzure ADアプリケーションのサービスプリンシパル",
    "is listed.":
      "が一覧に表示されていることを確認します。",
    "The role":
      "ロール",
    "is eligible for this integration.":
      "は、このインテグレーションで使用できます。",
    "Search for":
      "検索ボックスで",
    "in the Search box.":
      "を検索します。",
    ", give the application a name (for example:":
      "、アプリケーションに名前を付けます(例:",
    ") and click":
      ")、次をクリックします:",
    ", search for":
      "、次を検索します:",
    "and assign the required roles.":
      "その後、必要なロールを割り当てます。",
    "and copy the Application (client) ID.":
      "その後、アプリケーション(クライアント)IDをコピーします。",
    "Fore more information check the":
      "詳細については、次を参照してください:",
    "Microsoft Documentation.":
      "Microsoftドキュメント。",
    "guide":
      "ガイド",
    "Azure AD portal":
      "Azure ADポータル",

    // --- Batch: Elasticsearch v2 / Kibana / Microsoft Graph (Entra ID) integration doc page (Collector export 2026-10-12 07:23) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    "- API Key Auth: Enter the API Key ID and API Key.":
      "- API Key Auth: API Key IDとAPI Keyを入力します。",
    "- Basic Auth: Enter Username and Password.":
      "- Basic Auth: ユーザー名とパスワードを入力します。",
    "- Bearer Auth: Enter Username and Password.":
      "- Bearer Auth: ユーザー名とパスワードを入力します。",
    "- Index":
      "- インデックス",
    "- Index time field":
      "- インデックス時刻フィールド",
    "- Query String or Raw Query":
      "- クエリ文字列またはRaw Query",
    "— Bulk-update the status of security detection alerts (open, acknowledged, closed).":
      "— セキュリティ検出アラートのステータスを一括更新します(オープン、確認済み、クローズ)。",
    "— Create, update, delete, and import/export value lists used in detection rules.":
      "— 検出ルールで使用される値リストの作成、更新、削除、インポート/エクスポートを行います。",
    "— Create, update, delete, and list Kibana cases; add comments, attach files, and link alerts to cases.":
      "— Kibanaケースの作成、更新、削除、一覧表示を行い、コメントの追加、ファイルの添付、アラートのケースへのリンクを行います。",
    "— List rule types, retrieve rules, enable/disable rules, mute/unmute alerts.":
      "— ルールタイプの一覧表示、ルールの取得、ルールの有効化/無効化、アラートのミュート/ミュート解除を行います。",
    "— Manage Kibana exception lists and their items, including Elastic Endpoint exceptions.":
      "— Elastic Endpointの例外を含む、Kibanaの例外リストとその項目を管理します。",
    ", the required privilege is also scoped to the feature that owns the object:":
      "、必要な権限は、そのオブジェクトを所有する機能にもスコープされます:",
    ". The level required depends on the operation:":
      "。必要なレベルは操作によって異なります:",
    "Objects owned by":
      "次が所有するオブジェクト:",
    "(e.g. SIEM detection rules, Security cases) require the":
      "(例: SIEM検出ルール、Securityケース)には次が必要です:",
    "(e.g. Stack Rules) require the":
      "(例: Stack Rules)には次が必要です:",
    "require the":
      "には次が必要です:",
    "feature privilege.":
      "機能権限。",
    "feature privileges":
      "機能権限",
    "(for example,":
      "(例:",
    "). Kibana is usually hosted separately from Elasticsearch, so this URL cannot be derived from the Elasticsearch":
      ")。Kibanaは通常Elasticsearchとは別にホストされるため、このURLは次のElasticsearch設定から導出できません:",
    "<number> <time unit>, e.g., 12 hours, 7 days":
      "<number> <time unit>(例: 12 hours、7 days)",
    "3 formats supported:":
      "3つの形式がサポートされています:",
    "A detailed explanation on how to register an app can be found":
      "アプリの登録方法の詳細な説明は、次を参照してください:",
    "Additional Configuration Parameters Details":
      "追加の構成パラメーターの詳細",
    "After authorizing the Cortex XSAOR app, you will get an ID, Token, and Key which needs to be added to the integration instance configuration’s corresponding fields.":
      "Cortex XSOARアプリを承認すると、ID、トークン、キーが発行されます。これらをインテグレーションインスタンス構成の対応するフィールドに追加する必要があります。",
    "Alerts to Fetch":
      "フェッチするアラート",
    "Allow secret generators commands execution":
      "シークレット生成コマンドの実行を許可する",
    "Allows raw DSL queries. For more information about Query DSL see":
      "未加工のDSLクエリを許可します。Query DSLの詳細については、次を参照してください:",
    "API Client ID created in the User management UI.":
      "User management UIで作成したAPI Client ID。",
    "API Client Secret created in the User management UI.":
      "User management UIで作成したAPI Client Secret。",
    "API Key Authentication":
      "APIキー認証",
    "Application ID (Client ID for Client credentials mode)":
      "アプリケーションID(Client credentialsモードのクライアントID)",
    "Application redirect URI (for Authorization Code flow mode)":
      "アプリケーションのリダイレクトURI(Authorization Codeフローモード用)",
    "Application redirect URI (for Self Deployed - Authorization Code Flow)":
      "アプリケーションのリダイレクトURI(自己デプロイ型 - Authorization Codeフロー用)",
    "Apply the filter to fetch policy events having actions such as \"deliver\", \"mark-spam\", \"move\", \"inbox\", \"delete\", \"none\". Fetches all types of actions by default.":
      "\"deliver\"、\"mark-spam\"、\"move\"、\"inbox\"、\"delete\"、\"none\"などのアクションを持つポリシーイベントをフェッチするようにフィルターを適用します。デフォルトでは、すべての種類のアクションをフェッチします。",
    "Authentication Based on Azure Managed Identities":
      "AzureマネージドIDに基づく認証",
    "Authentication based on Entra ID applications":
      "Entra IDアプリケーションに基づく認証",
    "Authorization code (for Authorization Code flow mode - received from the authorization step. see Detailed Instructions)":
      "認可コード(Authorization Codeフローモード用 - 認可ステップで受け取ります。詳細な手順を参照してください)",
    "Authorization code (for Self Deployed - Authorization Code Flow)":
      "認可コード(自己デプロイ型 - Authorization Codeフロー用)",
    "Authorization type":
      "認可タイプ",
    "Azure AD endpoint":
      "Azure ADエンドポイント",
    "Azure AD endpoint associated with a national cloud.":
      "ナショナルクラウドに関連付けられたAzure ADエンドポイント。",
    "Bearer Authentication":
      "ベアラー認証",
    "Click the":
      "次のボタンをクリックします:",
    "button and you will be prompted to grant Cortex permissions for your Entra ID Users.":
      "。その後、Entra IDユーザーに対するCortexの権限を付与するよう求められます。",
    "button and you will receive your ID, token, and key. You will need to enter these when you configure the Entra ID Users integration instance in Cortex.":
      "。ID、トークン、キーが発行されます。CortexでEntra ID Usersインテグレーションインスタンスを構成するときに、これらを入力する必要があります。",
    "By default, Microsoft Entra ID Protection risk level is used as Cortex XSOAR/XSIAM issue severity. Select this option to override original risk level reported by Microsoft Entra ID Protection.":
      "デフォルトでは、Microsoft Entra ID ProtectionのリスクレベルがCortex XSOAR/XSIAMのイシューの重大度として使用されます。このオプションを選択すると、Microsoft Entra ID Protectionが報告した元のリスクレベルを上書きします。",
    "Checking this box will allow running commands that generate and print secrets. Make sure to add restrictions to the related commands. For more information please refer to the following guide - <MFA guide>":
      "このチェックボックスをオンにすると、シークレットを生成して出力するコマンドの実行が許可されます。関連するコマンドに制限を追加してください。詳細については、次のガイドを参照してください - <MFA guide>",
    "Client Credentials Flow (Recommended)":
      "Client Credentialsフロー(推奨)",
    "Client Secret (required for Client Credentials mode)":
      "クライアントシークレット(Client Credentialsモードで必須)",
    "Close Mirrored Elasticsearch Incident":
      "ミラーリングされたElasticsearchインシデントをクローズする",
    "Close Mirrored XSOAR Incident":
      "ミラーリングされたXSOARインシデントをクローズする",
    "Comma-separated list of fields to fetch (the `_source` field is always included).":
      "フェッチするフィールドのカンマ区切りリスト(`_source`フィールドは常に含まれます)。",
    "Detection Alerts":
      "検出アラート",
    "Device Code Flow":
      "Device Codeフロー",
    "Elastic Cloud deployments:":
      "Elastic Cloudデプロイメント:",
    "Example: created_at.after(2020-11-11T09:16:44Z) or id.eq(537557694)":
      "例: created_at.after(2020-11-11T09:16:44Z) または id.eq(537557694)",
    "Syntax: field.operator(operand) {and/or field.operator(operand)}":
      "構文: field.operator(operand) {and/or field.operator(operand)}",
    "Syntax: field.operator(operand) {and/or field.operator(operand)} Example: created_at.after(2020-11-11T09:16:44Z) or id.eq(537557694)":
      "構文: field.operator(operand) {and/or field.operator(operand)} 例: created_at.after(2020-11-11T09:16:44Z) または id.eq(537557694)",
    "Exception Lists & Items":
      "例外リストと項目",
    "Exclude alerts while fetching policy events of type 'Message Alert' or 'System Alert'.":
      "タイプが 'Message Alert' または 'System Alert' のポリシーイベントのフェッチ時に、アラートを除外します。",
    "Fetch alerts for case":
      "ケースのアラートをフェッチする",
    "Fetch Cases":
      "ケースのフェッチ",
    "Fetch cases by Severity":
      "重大度でケースをフェッチ",
    "Fetch cases by Status":
      "ステータスでケースをフェッチ",
    "Fetch incident types":
      "フェッチするインシデントタイプ",
    "Fetch Security Alerts":
      "セキュリティアラートのフェッチ",
    "Fetching security alerts requires:":
      "セキュリティアラートのフェッチには次が必要です:",
    "field (DSL query). The index must follow one of these patterns:":
      "フィールド(DSLクエリ)。インデックスは次のいずれかのパターンに従う必要があります:",
    "Fields to Fetch":
      "フェッチするフィールド",
    "First fetch timestamp":
      "最初のフェッチのタイムスタンプ",
    "For further information about type mapping, see":
      "型マッピングの詳細については、次を参照してください:",
    "For information, see":
      "詳細については、次を参照してください:",
    "For more info about API Key management see":
      "APIキー管理の詳細については、次を参照してください:",
    "For more info see":
      "詳細については、次を参照してください:",
    "For more information about the Lucene syntax, see the link in the help section.":
      "Lucene構文の詳細については、ヘルプセクションのリンクを参照してください。",
    "For more information see the link in the help section.":
      "詳細については、ヘルプセクションのリンクを参照してください。",
    "ID or Client ID":
      "IDまたはクライアントID",
    "Key or Client Secret":
      "キーまたはクライアントシークレット",
    "Token or Tenant ID":
      "トークンまたはテナントID",
    "Incident Mirroring Direction":
      "インシデントのミラーリング方向",
    "Index time field":
      "インデックス時刻フィールド",
    "Index to fetch incidents from":
      "インシデントをフェッチするインデックス",
    "Kibana Integration":
      "Kibanaインテグレーション",
    "Kibana Server URL":
      "KibanaサーバーURL",
    "Kibana Spaces":
      "Kibanaスペース",
    "Kibana Spaces (optional)":
      "Kibanaスペース(オプション)",
    "Map JSON fields into labels":
      "JSONフィールドをラベルにマッピングする",
    "Max Fetch Incidents Returned":
      "返されるフェッチインシデントの最大数",
    "Microsoft integrations (Graph and Azure) in Cortex use Entra ID applications to authenticate with Microsoft APIs. These integrations use OAuth 2.0 and OpenID Connect standard compliant authentication services, which use an application to sign in or delegate authentication. For more information, see the Microsoft identity platform overview.":
      "CortexのMicrosoftインテグレーション(GraphおよびAzure)は、Entra IDアプリケーションを使用してMicrosoft APIで認証します。これらのインテグレーションは、OAuth 2.0およびOpenID Connectの標準に準拠した認証サービスを使用し、アプリケーションを使用してサインインまたは認証を委任します。詳細については、Microsoft identity platform overviewを参照してください。",
    "Mirroring is only available for Elasticsearch Security Alerts and Cases.":
      "ミラーリングは、Elasticsearch Security AlertとCaseでのみ利用できます。",
    "Not all fields can be used for sorting in Elasticsearch. Sorting is only supported for fields of the following types:":
      "Elasticsearchでは、すべてのフィールドを並べ替えに使用できるわけではありません。並べ替えは、次のタイプのフィールドでのみサポートされます:",
    "Note: Depending on the authentication method that you use, the integration parameters might change.":
      "注: 使用する認証方法によって、インテグレーションのパラメーターが変わる場合があります。",
    "On-premises (self-managed) deployments:":
      "オンプレミス(セルフマネージド)デプロイメント:",
    "Operations covered":
      "対象の操作",
    "Override Microsoft Entra ID Protection risk level":
      "Microsoft Entra ID Protectionのリスクレベルを上書きする",
    "POST / PUT / PATCH / DELETE — create, update, delete, and change-state commands":
      "POST / PUT / PATCH / DELETE — 作成、更新、削除、状態変更のコマンド",
    "Privilege level":
      "権限レベル",
    "Query String":
      "クエリ文字列",
    "Query String is queried using the Lucene syntax. For more information about the Lucene syntax see":
      "クエリ文字列はLucene構文を使用してクエリされます。Lucene構文の詳細については、次を参照してください:",
    "Query string uses the Lucene syntax.":
      "クエリ文字列はLucene構文を使用します。",
    "Query string uses the Lucene syntax. For more information about the Lucene syntax, see the link in the help section. The query will be used when fetching incidents. Index time field will be used as a filter in the query. The integration test button doesn't fully test the fetch incidents validity. To verify that the instance is set up correctly for fetching incidents, run the '!es-integration-health-check' command.":
      "クエリ文字列はLucene構文を使用します。Lucene構文の詳細については、ヘルプセクションのリンクを参照してください。クエリはインシデントのフェッチ時に使用されます。インデックス時刻フィールドは、クエリ内のフィルターとして使用されます。インテグレーションのテストボタンでは、インシデントのフェッチの有効性は完全にはテストされません。インスタンスがインシデントのフェッチ用に正しく設定されていることを確認するには、'!es-integration-health-check'コマンドを実行してください。",
    "Raw Query allows raw DSL queries and will override the 'Query String' Lucene syntax string.":
      "Raw Queryでは未加工のDSLクエリを使用でき、'Query String'のLucene構文文字列を上書きします。",
    "Raw Query allows raw DSL queries and will override the 'Query String' Lucene syntax string. Results will not be filtered or sorted. Use additional parameters in the raw query for these purposes. For more information see the link in the help section. The integration test button doesn't fully test the fetch incidents validity. To verify that the instance is set up correctly for fetching incidents, run the '!es-integration-health-check' command.":
      "Raw Queryでは未加工のDSLクエリを使用でき、'Query String'のLucene構文文字列を上書きします。結果はフィルターも並べ替えもされません。これらの目的には、未加工クエリで追加のパラメーターを使用してください。詳細については、ヘルプセクションのリンクを参照してください。インテグレーションのテストボタンでは、インシデントのフェッチの有効性は完全にはテストされません。インスタンスがインシデントのフェッチ用に正しく設定されていることを確認するには、'!es-integration-health-check'コマンドを実行してください。",
    "Results will not be filtered or sorted. Use additional parameters in the raw query for these purposes.":
      "結果はフィルターも並べ替えもされません。これらの目的には、未加工クエリで追加のパラメーターを使用してください。",
    "The integration test button doesn't fully test the fetch incidents validity. To verify that the instance is set up correctly for fetching incidents, run the '!es-integration-health-check' command.":
      "インテグレーションのテストボタンでは、インシデントのフェッチの有効性は完全にはテストされません。インスタンスがインシデントのフェッチ用に正しく設定されていることを確認するには、'!es-integration-health-check'コマンドを実行してください。",
    "The query will be used when fetching incidents. Index time field will be used as a filter in the query.":
      "クエリはインシデントのフェッチ時に使用されます。インデックス時刻フィールドは、クエリ内のフィルターとして使用されます。",
    "Relevant only if the integration is running on Azure VM. If selected, authenticates based on the value provided for the Azure Managed Identities Client ID field. If no value is provided for the Azure Managed Identities Client ID field, authenticates based on the System Assigned Managed Identity. For additional information, see the Help tab.":
      "Azure VM上でインテグレーションを実行している場合にのみ関連します。選択すると、Azure Managed Identities Client IDフィールドに指定された値に基づいて認証します。Azure Managed Identities Client IDフィールドに値が指定されていない場合は、システム割り当てマネージドIDに基づいて認証します。詳細については、ヘルプタブを参照してください。",
    "Required Kibana Privileges":
      "必要なKibana権限",
    "Select the authentication type and enter the appropriate credentials:":
      "認証タイプを選択し、適切な認証情報を入力します:",
    "Select the authentication type and enter the appropriate credentials: - Basic Auth: Enter Username and Password. - Bearer Auth: Enter Username and Password. - API Key Auth: Enter the API Key ID and API Key.":
      "認証タイプを選択し、適切な認証情報を入力します: - Basic Auth: ユーザー名とパスワードを入力します。 - Bearer Auth: ユーザー名とパスワードを入力します。 - API Key Auth: API Key IDとAPI Keyを入力します。",
    "Select what type of Identity alert from MSGraph you want to ingest.":
      "MSGraphから取り込むIDアラートのタイプを選択します。",
    "Server URL (e.g., https://graph.microsoft.com)":
      "サーバーURL(例: https://graph.microsoft.com)",
    "Severity of the Cortex XSOAR/XSIAM issue to be created if Microsoft Entra ID Protection risk level override has been selected. Severity will be the same for all Microsoft Entra ID Protection alerts.":
      "Microsoft Entra ID Protectionのリスクレベルの上書きが選択されている場合に作成されるCortex XSOAR/XSIAMイシューの重大度。重大度は、すべてのMicrosoft Entra ID Protectionアラートで同じになります。",
    "Simple-Date - A plain date string. You must specify the format in which the date is stored. For more information about time formatting, see":
      "Simple-Date - プレーンな日付文字列。日付が保存されている形式を指定する必要があります。時刻のフォーマットの詳細については、次を参照してください:",
    "Suppress Errors for Non Found Groups":
      "見つからないグループのエラーを抑制する",
    "Suppress Errors for Non Found Users":
      "見つからないユーザーのエラーを抑制する",
    "Tenant ID (required for Client Credentials mode)":
      "テナントID(Client Credentialsモードで必須)",
    "This integration includes a set of":
      "このインテグレーションには、一連の",
    "that let you interact with Kibana directly from Cortex — no separate Kibana integration required.":
      "が含まれており、Cortexから直接Kibanaを操作できます。別途Kibanaインテグレーションは不要です。",
    "The “Test” button does not fully validate the fetch incidents functionality. To ensure the instance is correctly fetching incidents, run the":
      "[Test]ボタンでは、インシデントのフェッチ機能は完全には検証されません。インスタンスがインシデントを正しくフェッチしていることを確認するには、次を実行してください:",
    "The case severities to fetch. If none is chosen, all severity levels will be returned. Relevant only for incident type Elasticsearch Case.":
      "フェッチするケースの重大度。何も選択しない場合は、すべての重大度レベルが返されます。インシデントタイプElasticsearch Caseにのみ関連します。",
    "The case statuses to fetch. If none is chosen, in-progress and open will be returned. Relevant only for incident type Elasticsearch Case.":
      "フェッチするケースのステータス。何も選択しない場合は、in-progressとopenが返されます。インシデントタイプElasticsearch Caseにのみ関連します。",
    "The Elasticsearch server to which the integration connects. Ensure that the URL includes the correct Elasticsearch port. The default port for Elasticsearch v7 and below is 9200. Use the Server URL for on-premises deployments.":
      "インテグレーションが接続するElasticsearchサーバー。URLに正しいElasticsearchのポートが含まれていることを確認してください。Elasticsearch v7以前のデフォルトポートは9200です。オンプレミスのデプロイメントではServer URLを使用します。",
    "The Elasticsearch v2 integration supports Elasticsearch 6.0.0 and later.":
      "Elasticsearch v2インテグレーションは、Elasticsearch 6.0.0以降をサポートしています。",
    "The maximum number of incidents per request from Entra ID. Default is 50.":
      "Entra IDからのリクエストあたりのインシデントの最大数。デフォルトは50です。",
    "The maximum number of results per fetch":
      "フェッチあたりの結果の最大数",
    "The mirroring direction. Mirroring works only for incident types Elasticsearch Security Alert and Elasticsearch Case.":
      "ミラーリングの方向。ミラーリングは、インシデントタイプElasticsearch Security AlertとElasticsearch Caseでのみ機能します。",
    "The time field used for sorting and limiting results. If using a nested field, separate field names with dot notation.":
      "結果の並べ替えと制限に使用される時刻フィールド。ネストされたフィールドを使用する場合は、フィールド名をドット表記で区切ります。",
    "The time range to consider for the initial data fetch in the format <number> <unit>. For example, 1 hour, 2 hours, 6 hours, 12 hours, 24 hours, 48 hours, etc.":
      "初回のデータフェッチで対象とする時間範囲。形式は <number> <unit> です。例: 1 hour、2 hours、6 hours、12 hours、24 hours、48 hoursなど。",
    "The time range to consider for the initial data fetch. (<number> <unit>, e.g., 2 minutes, 2 hours, 2 days, 2 months, 2 years). Default is 3 days.":
      "初回のデータフェッチで対象とする時間範囲。(<number> <unit>、例: 2 minutes、2 hours、2 days、2 months、2 years)。デフォルトは3 daysです。",
    "The type of incident to fetch from Elasticsearch (Security Alert, Case, or other entity).":
      "Elasticsearchからフェッチするインシデントのタイプ(Security Alert、Case、またはその他のエンティティ)。",
    "There are two application authentication methods available:":
      "アプリケーション認証方式は2つあります:",
    "There are two different authentication methods for self-deployed configuration:":
      "自己デプロイ型の構成には、2つの異なる認証方式があります:",
    "This integration was integrated and tested with versions 6.6.2, 7.3, 8.4.1 of Elasticsearch.":
      "このインテグレーションは、Elasticsearchのバージョン6.6.2、7.3、8.4.1で統合およびテストされています。",
    "Time field type":
      "時刻フィールドのタイプ",
    "Timestamp-Milliseconds - A numeric value representing the number of milliseconds since the Unix epoch. Example: ‘1572164838123’":
      "Timestamp-Milliseconds - Unixエポックからの経過ミリ秒数を表す数値。例: ‘1572164838123’",
    "Timestamp-Second - A numeric value representing the number of seconds since the Unix epoch (00:00:00 UTC on 1 January 1970). Example: ‘1572164838’":
      "Timestamp-Second - Unixエポック(1970年1月1日 00:00:00 UTC)からの経過秒数を表す数値。例: ‘1572164838’",
    "To allow access to Entra ID Groups, an administrator has to approve the Cortex app using an admin consent flow, by clicking this":
      "Entra IDグループへのアクセスを許可するには、管理者が管理者の同意フローを使用してCortexアプリを承認する必要があります。次のリンクをクリックしてください:",
    "To connect to Microsoft Graph Identity & Access using either Cortex Graph app or the Self-Deployed Graph app:":
      "Cortex Graphアプリまたは自己デプロイ型Graphアプリを使用してMicrosoft Graph Identity & Accessに接続するには:",
    "To connect to Microsoft Graph Services using either the Cortex Azure app or the self-deployed Azure app:":
      "Cortex Azureアプリまたは自己デプロイ型Azureアプリを使用してMicrosoft Graph Servicesに接続するには:",
    "To use a self-configured Azure application, you need to add a new Azure app registration in the Azure portal. To add the registration, see this":
      "自己構成のAzureアプリケーションを使用するには、Azureポータルで新しいAzureアプリ登録を追加する必要があります。登録を追加する方法については、次を参照してください:",
    "To use a self-configured Azure application, you need to add a new Azure App Registration in the Azure Portal. To add the registration.":
      "自己構成のAzureアプリケーションを使用するには、Azureポータルで新しいAzureアプリ登録を追加する必要があります。登録を追加する方法については、次を参照してください:",
    "To use Microsoft Graph Services, you need to configure authentication. There are three authentication methods available:":
      "Microsoft Graph Servicesを使用するには、認証を構成する必要があります。利用できる認証方式は3つあります:",
    "To use the Cortex Azure application, use the default application ID (597c0375-766f-4e6d-ad2a-f48117044ac5).":
      "Cortex Azureアプリケーションを使用するには、デフォルトのアプリケーションID(597c0375-766f-4e6d-ad2a-f48117044ac5)を使用します。",
    "To use the Cortex Azure application, use the default application ID (6b071e63-f701-454b-9e54-ede4c96483e6).":
      "Cortex Azureアプリケーションを使用するには、デフォルトのアプリケーションID(6b071e63-f701-454b-9e54-ede4c96483e6)を使用します。",
    "To use this integration, you need to configure authentication. There are three authentication methods available:":
      "このインテグレーションを使用するには、認証を構成する必要があります。利用できる認証方式は3つあります:",
    "Type of authentication - could be Client Credentials Authorization Flow (recommended) or Device Flow":
      "認証のタイプ - Client Credentials Authorization Flow(推奨)またはDevice Flowを指定できます",
    "Use a self-deployed Azure application and authenticate using the Client Credentials flow.":
      "自己デプロイ型のAzureアプリケーションを使用し、Client Credentialsフローで認証します。",
    "Use Client Credentials Authorization Flow":
      "Client Credentials Authorization Flowを使用する",
    "Use this option when required to customize the URL to the Microsoft Graph User endpoint. More information can be found here - https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud":
      "Microsoft Graph UserエンドポイントのURLをカスタマイズする必要がある場合に、このオプションを使用します。詳細については、こちらを参照してください - https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud",
    "Value Lists":
      "値リスト",
    "We recommend using the Client Credentials flow.":
      "Client Credentialsフローの使用を推奨します。",
    "What you can do with Kibana commands":
      "Kibanaコマンドでできること",
    "When selecting the Custom option, the Server URL parameter must be filled. More information about National clouds can be found here - https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud":
      "Customオプションを選択する場合は、Server URLパラメーターに入力する必要があります。ナショナルクラウドの詳細については、こちらを参照してください - https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud",
    "When using the Authorization Code flow, make sure the user you authenticate with has the relevant roles in Azure AD in order to execute the operation.":
      "Authorization Codeフローを使用する場合は、認証するユーザーが、操作を実行するためにAzure ADで関連するロールを持っていることを確認してください。",
    "Whether closing the Cortex incident is mirrored in Elasticsearch.":
      "CortexインシデントのクローズをElasticsearchにミラーリングするかどうか。",
    "Whether closing the Elasticsearch alert or case is mirrored in Cortex.":
      "ElasticsearchアラートまたはケースのクローズをCortexにミラーリングするかどうか。",
    "Whether to fetch alerts associated with each Elasticsearch Case. You must have read privileges for the Cases feature in the Management, Observability, or Security section of the Kibana feature privileges.":
      "各Elasticsearch Caseに関連付けられたアラートをフェッチするかどうか。Kibanaの機能権限のManagement、Observability、またはSecurityセクションにあるCases機能に対する読み取り権限が必要です。",
    "You can authenticate either by Entra ID applications or by Azure Managed Identities.":
      "Entra IDアプリケーション、またはAzureマネージドIDのいずれかで認証できます。",
    "You need to grant Cortex authorization to access Entra ID Users.":
      "Entra IDユーザーにアクセスするには、Cortexに認可を付与する必要があります。",

    // --- Batch: Elasticsearch v2 / Kibana URL setup list: fragments with a known neighbouring structure (follow-up to the 07:23 export) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    "Kibana URL":
      "KibanaのURL",
    "parameter to the address of your Kibana server, including the port if it is not the default (e.g.":
      "パラメーターには、Kibanaサーバーのアドレスを指定します。デフォルトのポートでない場合はポートも含めます(例:",
    "You can leave":
      "次のパラメーターは空のままにできます:",
    "empty. The URL is then derived automatically from the":
      "。この場合、URLは次から自動的に導出されます:",
    ", by replacing the":
      "。ホスト名の",
    "segment of the hostname with":
      "セグメントを次に置き換えます:",
    "becomes":
      "は次のようになります:",
    "When":
      "パラメーター",
    "is set, it always takes precedence over the derivation from the":
      "が設定されている場合、次からの導出よりも常に優先されます:",

    // --- Batch: Microsoft Graph / Azure Managed Identity setup steps: fragments with a known neighbouring structure (follow-up to the 07:23 export) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    "In order to use the":
      "次の",
    "command, you must use with the Authorization Code flow.":
      "コマンドを使用するには、Authorization Codeフローを使用する必要があります。",
    "Select the":
      "チェックボックス",
    "checkbox and leave the":
      "をオンにし、",
    "field empty.":
      "フィールドは空のままにします。",

    // --- Batch: ExtraHop Reveal(x) / Flashpoint Ignite / F5 Silverline / FireEye HX / Kenna / McAfee / Envoy / Microsoft integration docs and parameter tooltips (07:55 export) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    ". Each API call fetches a maximum of 200 detection events.":
      "。各API呼び出しでは、最大200件の検出イベントをフェッチします。",
    "Advanced Filter":
      "高度なフィルター",
    "api_admin role.":
      "api_adminロール。",
    "api_analyst role.":
      "api_analystロール。",
    "Applies a filter to the list of detections based on a JSON-specific query.":
      "JSON固有のクエリに基づいて、検出のリストにフィルターを適用します。",
    "Applies a filter to the list of detections based on a JSON-specific query. Example for detections: { \"categories\": [\"sec.attack\"], \"risk_score_min\": 51 } If the categories and category are not specified, then categories will be set to [\"sec.attack\"]. The category field is deprecated by the API, so please use the categories field instead. For a complete reference to the Extrahop detections filter fields, please refer to the ExtraHop REST API documentation at https://docs.extrahop.com/current/rest-api-guide/":
      "JSON固有のクエリに基づいて、検出のリストにフィルターを適用します。検出の例: { \"categories\": [\"sec.attack\"], \"risk_score_min\": 51 } categoriesとcategoryが指定されていない場合、categoriesは [\"sec.attack\"] に設定されます。categoryフィールドはAPIで非推奨となっているため、代わりにcategoriesフィールドを使用してください。ExtraHopの検出フィルターフィールドの完全なリファレンスについては、ExtraHop REST APIドキュメント(https://docs.extrahop.com/current/rest-api-guide/)を参照してください。",
    "Applies a filter to the list of detections or metrics based on a JSON-specific query.":
      "JSON固有のクエリに基づいて、検出またはメトリクスのリストにフィルターを適用します。",
    "As the F5 Silverline API does not support fetch incidents for now, we retrieve alerts via a log collector.":
      "F5 Silverline APIは現時点ではインシデントのフェッチをサポートしていないため、ログコレクター経由でアラートを取得します。",
    "Attack Types":
      "攻撃タイプ",
    "Backfill vulnerabilities by providing date or relative timestamp.":
      "日付または相対タイムスタンプを指定して、脆弱性をバックフィルします。",
    "Backfill vulnerabilities by providing date or relative timestamp. Formats accepted: 2 minutes, 2 hours, 2 days, 2 weeks, 2 months, 2 years, yyyy-mm-dd, yyyy-mm-ddTHH:MM:SSZ. Default: 3 days.":
      "日付または相対タイムスタンプを指定して、脆弱性をバックフィルします。受け付ける形式: 2 minutes、2 hours、2 days、2 weeks、2 months、2 years、yyyy-mm-dd、yyyy-mm-ddTHH:MM:SSZ。デフォルト: 3 days。",
    "Formats accepted: 2 minutes, 2 hours, 2 days, 2 weeks, 2 months, 2 years, yyyy-mm-dd, yyyy-mm-ddTHH:MM:SSZ.":
      "受け付ける形式: 2 minutes、2 hours、2 days、2 weeks、2 months、2 years、yyyy-mm-dd、yyyy-mm-ddTHH:MM:SSZ。",
    "Default: 3 days.":
      "デフォルト: 3 days。",
    "Click on the":
      "次の",
    "button and paste it into the “API Key” parameter. Then, click on the":
      "ボタンをクリックし、“API Key”パラメーターに貼り付けます。次に、次の",
    "button to save the generated token and close the token generation page.":
      "ボタンをクリックして、生成されたトークンを保存し、トークン生成ページを閉じます。",
    "Click on your profile icon on the top right and select the":
      "右上のプロフィールアイコンをクリックし、ドロップダウンから",
    "option from the dropdown. Alternatively, click on":
      "オプションを選択します。または、",
    "to be taken directly to the Generate Token page.":
      "をクリックして、Generate Tokenページに直接移動します。",
    "Enter the required details (i.e., Token Name, Ignite Username) and click on":
      "必要な詳細(Token Name、Ignite Usernameなど)を入力し、次をクリックします:",
    "If you already have an API key you can find it there.":
      "すでにAPIキーをお持ちの場合は、そこで確認できます。",
    "If you do not have an API Key, generate one by clicking":
      "APIキーをお持ちでない場合は、次をクリックして生成します:",
    "Login/Register at":
      "次でログイン/登録します:",
    "Configure an API account on Flashpoint Ignite":
      "Flashpoint IgniteでAPIアカウントを構成する",
    "Configure an instance for ExtraHop Reveal(x)":
      "ExtraHop Reveal(x)のインスタンスを構成する",
    "Due to a known limitation, clicking the":
      "既知の制限により、",
    "button several times in quick succession may result in an “Unauthorized” error, even after a successful result was initially returned. It is enough to receive one success message to verify that the configuration is correct. “Unauthorized” error messages received from repeated clicking of the instance configuration":
      "ボタンを短時間に何度もクリックすると、最初に成功した結果が返された後でも“Unauthorized”エラーが発生することがあります。構成が正しいことを確認するには、成功メッセージを1回受信すれば十分です。インスタンス構成の",
    "button do not affect the validity of the instance if the initial response was successful.":
      "ボタンを繰り返しクリックして受信した“Unauthorized”エラーメッセージは、最初の応答が成功していれば、インスタンスの有効性に影響しません。",
    "Complete the following configuration options:":
      "次の構成オプションを入力します:",
    "Connect to McAfee TIE using the McAfee DXL client.":
      "McAfee DXLクライアントを使用してMcAfee TIEに接続します。",
    "Create relationships between indicators as part of Enrichment.":
      "エンリッチメントの一環として、インジケーター間のリレーションシップを作成します。",
    "CWE IDs":
      "CWE ID",
    "Deprecated. Use McAfee ePO v2 instead.":
      "非推奨です。代わりにMcAfee ePO v2を使用してください。",
    "Deprecated. Use McAfee Threat Intelligence Exchange V2 integration instead.":
      "非推奨です。代わりにMcAfee Threat Intelligence Exchange V2統合を使用してください。",
    "Deprecated. Use the Kafka v2 integration instead.":
      "非推奨です。代わりにKafka v2統合を使用してください。",
    "Deprecated. Use the Mattermost v2 integration instead.":
      "非推奨です。代わりにMattermost v2統合を使用してください。",
    "Deprecated. Use the McAfee ESM v2 integration instead.":
      "非推奨です。代わりにMcAfee ESM v2統合を使用してください。",
    "Enter a unique":
      "インスタンスの一意の",
    "for the instance.":
      "を入力します。",
    "Envoy Integration consists of a set of API endpoints that allow customers to automate provisioning of users.":
      "Envoyインテグレーションは、ユーザーのプロビジョニングを自動化するための一連のAPIエンドポイントで構成されています。",
    "Example for detections:":
      "検出の例:",
    "Fetch limit":
      "フェッチの上限",
    "Fetching F5 Silverline Alerts":
      "F5 Silverlineアラートのフェッチ",
    "Filter by associated product names (case-insensitive).":
      "関連付けられた製品名でフィルターします(大文字と小文字は区別されません)。",
    "Filter by associated vendor names (case-insensitive).":
      "関連付けられたベンダー名でフィルターします(大文字と小文字は区別されません)。",
    "Filter by Attack type classification.":
      "攻撃タイプの分類でフィルターします。",
    "Filter by CWE IDs assigned by Mitre.":
      "Mitreが割り当てたCWE IDでフィルターします。",
    "Filter by location type classification.":
      "ロケーションタイプの分類でフィルターします。",
    "Filter by lower limit of the CVSS v2 score. Prioritizes Flashpoint generated scores when possible. Example value 7.0":
      "CVSS v2スコアの下限でフィルターします。可能な場合は、Flashpointが生成したスコアを優先します。値の例: 7.0",
    "Filter by lower limit of the CVSS v2 score. Prioritizes Flashpoint generated scores when possible. Example value 7.0 Note: Value must be a float between 0 and 10.":
      "CVSS v2スコアの下限でフィルターします。可能な場合は、Flashpointが生成したスコアを優先します。値の例: 7.0 注: 値は0〜10の浮動小数点数である必要があります。",
    "Filter by lower limit of the CVSS v3 score. Prioritizes Flashpoint generated scores when possible. Example value 7.0":
      "CVSS v3スコアの下限でフィルターします。可能な場合は、Flashpointが生成したスコアを優先します。値の例: 7.0",
    "Filter by lower limit of the CVSS v3 score. Prioritizes Flashpoint generated scores when possible. Example value 7.0 Note: Value must be a float between 0 and 10.":
      "CVSS v3スコアの下限でフィルターします。可能な場合は、Flashpointが生成したスコアを優先します。値の例: 7.0 注: 値は0〜10の浮動小数点数である必要があります。",
    "Filter by lower limit of the CVSS v4 score. Prioritizes Flashpoint generated scores when possible. Example value 7.0":
      "CVSS v4スコアの下限でフィルターします。可能な場合は、Flashpointが生成したスコアを優先します。値の例: 7.0",
    "Filter by lower limit of the CVSS v4 score. Prioritizes Flashpoint generated scores when possible. Example value 7.0 Note: Value must be a float between 0 and 10.":
      "CVSS v4スコアの下限でフィルターします。可能な場合は、Flashpointが生成したスコアを優先します。値の例: 7.0 注: 値は0〜10の浮動小数点数である必要があります。",
    "Filter by upper limit of the CVSS v2 score. Prioritizes Flashpoint generated scores when possible. Example value 10.0":
      "CVSS v2スコアの上限でフィルターします。可能な場合は、Flashpointが生成したスコアを優先します。値の例: 10.0",
    "Filter by upper limit of the CVSS v2 score. Prioritizes Flashpoint generated scores when possible. Example value 10.0 Note: Value must be a float between 0 and 10.":
      "CVSS v2スコアの上限でフィルターします。可能な場合は、Flashpointが生成したスコアを優先します。値の例: 10.0 注: 値は0〜10の浮動小数点数である必要があります。",
    "Filter by upper limit of the CVSS v3 score. Prioritizes Flashpoint generated scores when possible. Example value 10.0":
      "CVSS v3スコアの上限でフィルターします。可能な場合は、Flashpointが生成したスコアを優先します。値の例: 10.0",
    "Filter by upper limit of the CVSS v3 score. Prioritizes Flashpoint generated scores when possible. Example value 10.0 Note: Value must be a float between 0 and 10.":
      "CVSS v3スコアの上限でフィルターします。可能な場合は、Flashpointが生成したスコアを優先します。値の例: 10.0 注: 値は0〜10の浮動小数点数である必要があります。",
    "Filter by upper limit of the CVSS v4 score. Prioritizes Flashpoint generated scores when possible. Example value 10.0":
      "CVSS v4スコアの上限でフィルターします。可能な場合は、Flashpointが生成したスコアを優先します。値の例: 10.0",
    "Filter by upper limit of the CVSS v4 score. Prioritizes Flashpoint generated scores when possible. Example value 10.0 Note: Value must be a float between 0 and 10.":
      "CVSS v4スコアの上限でフィルターします。可能な場合は、Flashpointが生成したスコアを優先します。値の例: 10.0 注: 値は0〜10の浮動小数点数である必要があります。",
    "Filter by lower limit of the EPSS v3 score. Example value 0.5":
      "EPSS v3スコアの下限でフィルターします。値の例: 0.5",
    "Filter by lower limit of the EPSS v3 score. Example value 0.5 Note: Value must be a float between 0 and 1.":
      "EPSS v3スコアの下限でフィルターします。値の例: 0.5 注: 値は0〜1の浮動小数点数である必要があります。",
    "Filter by upper limit of the EPSS v3 score. Example value 1.0":
      "EPSS v3スコアの上限でフィルターします。値の例: 1.0",
    "Filter by upper limit of the EPSS v3 score. Example value 1.0 Note: Value must be a float between 0 and 1.":
      "EPSS v3スコアの上限でフィルターします。値の例: 1.0 注: 値は0〜1の浮動小数点数である必要があります。",
    "Note: Value must be a float between 0 and 1.":
      "注: 値は0〜1の浮動小数点数である必要があります。",
    "Note: Value must be a float between 0 and 10.":
      "注: 値は0〜10の浮動小数点数である必要があります。",
    "Filter by Ransomware score.":
      "ランサムウェアスコアでフィルターします。",
    "Filter by reference types.":
      "参照タイプでフィルターします。",
    "Filter by reference values. Use with Reference Types to filter by specific reference type.":
      "参照値でフィルターします。特定の参照タイプでフィルターするには、Reference Typesと併用します。",
    "Filter by severity, which is calculated based on CVSS values.":
      "CVSS値に基づいて計算された重大度でフィルターします。",
    "Filter by Tags":
      "タグでフィルター",
    "Filter vulnerabilities by tags.":
      "タグで脆弱性をフィルターします。",
    "FireEye Endpoint Security is an integrated solution that detects what others miss and protects endpoints against known and unknown threats. The HX Cortex integration provides access to information about endpoints, acquisitions, alerts, indicators, and containment. Customers can extract critical data and effectively operate a security operations automated playbook":
      "FireEye Endpoint Securityは、他では見逃される脅威を検出し、既知および未知の脅威からエンドポイントを保護する統合ソリューションです。HX Cortexインテグレーションは、エンドポイント、アクイジション、アラート、インジケーター、封じ込めに関する情報へのアクセスを提供します。お客様は重要なデータを抽出し、セキュリティオペレーションの自動化されたPlaybookを効果的に運用できます",
    "First fetch timestamp (<number> <time unit>, e.g., 12 hours, 3 days)":
      "最初のフェッチのタイムスタンプ(<number> <time unit>、例: 12 hours、3 days)",
    "For a complete reference to the Extrahop detections filter fields, please refer to the ExtraHop REST API documentation at":
      "ExtraHopの検出フィルターフィールドの完全なリファレンスについては、次のExtraHop REST APIドキュメントを参照してください:",
    "For example: 10 minutes, 5 hours, 8 days, 2 weeks, 8 months, 2021-12-31, 01 Mar 2021, 01 Feb 2021 04:45:33, 2022-04-17T14:05:44Z":
      "例: 10 minutes、5 hours、8 days、2 weeks、8 months、2021-12-31、01 Mar 2021、01 Feb 2021 04:45:33、2022-04-17T14:05:44Z",
    "If configuring an instance for ExtraHop Reveal(x) 360, select":
      "ExtraHop Reveal(x) 360のインスタンスを構成する場合は、次を選択します:",
    "If configuring an instance for ExtraHop Reveal(x) Enterprise, unselect":
      "ExtraHop Reveal(x) Enterpriseのインスタンスを構成する場合は、次の選択を解除します:",
    "If the categories and category are not specified, then categories will be set to [\"sec.attack\"]. The category field is deprecated by the API, so please use the categories field instead.":
      "categoriesとcategoryが指定されていない場合、categoriesは [\"sec.attack\"] に設定されます。categoryフィールドはAPIで非推奨となっているため、代わりにcategoriesフィールドを使用してください。",
    "In F5 Silverline portal, go to":
      "F5 Silverlineポータルで、次に移動します:",
    "In order to fetch alerts, follow the instructions":
      "アラートをフェッチするには、次の手順に従ってください:",
    "Indicates whether to allow connections without verifying SSL certificate's validity.":
      "SSL証明書の有効性を検証せずに接続を許可するかどうかを示します。",
    "Indicates whether to use XSOAR's system proxy settings to connect to the API.":
      "APIへの接続にXSOARのシステムプロキシ設定を使用するかどうかを示します。",
    "Info level for fetched alerts":
      "フェッチしたアラートの情報レベル",
    "Integrated advanced threat detection: Enhancing protection from network edge to endpoint.":
      "統合された高度な脅威検出: ネットワークエッジからエンドポイントまで保護を強化します。",
    "Integration instance settings":
      "インテグレーションインスタンスの設定",
    "Specifies the type of incident to be created for detection events ingested by this instance if a":
      "このインスタンスで取り込まれた検出イベントに対して作成されるインシデントのタイプを指定します(",
    "is not specified.":
      "が指定されていない場合)。",
    "Known Limitations":
      "既知の制限事項",
    "KOI is an endpoint security platform that provides visibility and control over browser extensions, SaaS applications, and web-based threats.":
      "KOIは、ブラウザー拡張機能、SaaSアプリケーション、Webベースの脅威の可視性と制御を提供するエンドポイントセキュリティプラットフォームです。",
    "Locations":
      "ロケーション",
    "Magnet Automate is an orchestration and automation platform that accelerates your digital forensics investigations by automating workflows and integrating with various forensic tools.":
      "Magnet Automateは、ワークフローを自動化し、さまざまなフォレンジックツールと連携することで、デジタルフォレンジック調査を加速するオーケストレーションおよび自動化プラットフォームです。",
    "Max incidents to fetch":
      "フェッチするインシデントの最大数",
    "Maximum CVSS v2 Score":
      "最大CVSS v2スコア",
    "Maximum CVSS v3 Score":
      "最大CVSS v3スコア",
    "Maximum CVSS v4 Score":
      "最大CVSS v4スコア",
    "Maximum EPSS v3 Score":
      "最大EPSS v3スコア",
    "Minimum CVSS v2 Score":
      "最小CVSS v2スコア",
    "Minimum CVSS v3 Score":
      "最小CVSS v3スコア",
    "Minimum CVSS v4 Score":
      "最小CVSS v4スコア",
    "Minimum EPSS v3 Score":
      "最小EPSS v3スコア",
    "Microsoft 365 Defender is a unified pre- and post-breach enterprise defense suite that natively coordinates detection, prevention, investigation, and response across endpoints, identities, email, and applications to provide integrated protection against sophisticated attacks.":
      "Microsoft 365 Defenderは、エンドポイント、ID、メール、アプリケーション全体で検出、防御、調査、対応をネイティブに連携させ、高度な攻撃に対する統合的な保護を提供する、侵害前後に対応した統合エンタープライズ防御スイートです。",
    "Microsoft Defender for Endpoint (previously Microsoft Defender Advanced Threat Protection (ATP)) is a unified platform for preventative protection, post-breach detection, automated investigation, and response.":
      "Microsoft Defender for Endpoint(旧Microsoft Defender Advanced Threat Protection (ATP))は、予防的な保護、侵害後の検出、自動調査、対応のための統合プラットフォームです。",
    "Microsoft Graph grants Cortex authorized access to a user's Microsoft Outlook mail data in a personal account or organization account.":
      "Microsoft Graphは、個人アカウントまたは組織アカウント内のユーザーのMicrosoft Outlookメールデータへの承認済みアクセスをCortexに付与します。",
    "Microsoft Intune is a Microsoft cloud-based management solution that provides for mobile device and operating system management.":
      "Microsoft Intuneは、モバイルデバイスとオペレーティングシステムの管理を提供する、Microsoftのクラウドベースの管理ソリューションです。",
    "On Cloud":
      "クラウド上",
    "Product Names":
      "製品名",
    "Vendor Names":
      "ベンダー名",
    "Ransomware Score":
      "ランサムウェアスコア",
    "Reference Types":
      "参照タイプ",
    "Reference Values":
      "参照値",
    "Provides the tags to be added to the indicators. Supports CSV values.":
      "インジケーターに追加するタグを指定します。CSV値をサポートしています。",
    "Select if the instance connects to an ExtraHop Reveal(x) 360 system. Leave unselected if connecting to ExtraHop Reveal(x) Enterprise. Default value is false.":
      "インスタンスがExtraHop Reveal(x) 360システムに接続する場合に選択します。ExtraHop Reveal(x) Enterpriseに接続する場合は、選択しないままにします。デフォルト値はfalseです。",
    "Select to disable running commands through the Cortex CLI on this instance of the integration.":
      "このインテグレーションのインスタンスで、Cortex CLI経由のコマンド実行を無効にするには選択します。",
    "Select to enable this instance to fetch detection events. Otherwise, select":
      "このインスタンスで検出イベントをフェッチできるようにするには選択します。それ以外の場合は、次を選択します:",
    "Send email notifications to users":
      "ユーザーにメール通知を送信します",
    "Send emails implemented in Python with embedded image support.":
      "埋め込み画像に対応した、Pythonで実装されたメール送信機能。",
    "Send messages and notifications to your team members.":
      "チームメンバーにメッセージと通知を送信します。",
    "Server URL (e.g. https://192.168.0.1:3000)":
      "サーバーURL(例: https://192.168.0.1:3000)",
    "Server URL (e.g., https://192.168.0.1:3000)":
      "サーバーURL(例: https://192.168.0.1:3000)",
    "Server URL to connect to Flashpoint Ignite.":
      "Flashpoint Igniteに接続するサーバーURL。",
    "Specifies how detection events ingested by this instance are mapped to Cortex incident fields.":
      "このインスタンスで取り込まれた検出イベントをCortexのインシデントフィールドにマッピングする方法を指定します。",
    "Specifies how often the instance fetches detection events. Because each API call fetches a maximum of 200 detection events, we recommend specifying one minute intervals to fetch all detection events.":
      "インスタンスが検出イベントをフェッチする頻度を指定します。各API呼び出しでは最大200件の検出イベントがフェッチされるため、すべての検出イベントをフェッチするには、1分間隔を指定することをお勧めします。",
    "Specifies the beginning timestamp from which to start fetching detection events.":
      "検出イベントのフェッチを開始する開始タイムスタンプを指定します。",
    "Specifies the level of logging to enable for this instance of the integration.":
      "このインテグレーションのインスタンスで有効にするログのレベルを指定します。",
    "Specifies the type of incident to be created for detection events ingested by this instance.":
      "このインスタンスで取り込まれた検出イベントに対して作成されるインシデントのタイプを指定します。",
    "Specifies whether to allow connections without verifying SSL certificate’s validity.":
      "SSL証明書の有効性を検証せずに接続を許可するかどうかを指定します。",
    "Specifies whether to run the instance of the integration on a single engine.":
      "インテグレーションのインスタンスを単一のエンジンで実行するかどうかを指定します。",
    "Specifies whether to use XSOAR system proxy settings to connect to the API.":
      "APIへの接続にXSOARのシステムプロキシ設定を使用するかどうかを指定します。",
    "Supported formats: N minutes, N hours, N days, N weeks, N months, N years, yyyy-mm-dd, yyyy-mm-ddTHH:MM:SSZ":
      "サポートされる形式: N minutes、N hours、N days、N weeks、N months、N years、yyyy-mm-dd、yyyy-mm-ddTHH:MM:SSZ",
    "The API key required for authentication if connecting to ExtraHop Reveal(x) Enterprise.":
      "ExtraHop Reveal(x) Enterpriseに接続する場合に認証に必要なAPIキー。",
    "The API key to use for the connection.":
      "接続に使用するAPIキー。",
    "The client ID generated on your ExtraHop system that is required for authentication if connecting to ExtraHop Reveal(x) 360.":
      "ExtraHop Reveal(x) 360に接続する場合に認証に必要な、ExtraHopシステムで生成されたクライアントID。",
    "The client secret generated on your ExtraHop system that is required for authentication if connecting to ExtraHop Reveal(x) 360.":
      "ExtraHop Reveal(x) 360に接続する場合に認証に必要な、ExtraHopシステムで生成されたクライアントシークレット。",
    "The Microsoft Management Activity API integration enables you to subscribe or unsubscribe to different audits, receive their content, and fetch new content as incidents.":
      "Microsoft Management Activity APIインテグレーションにより、さまざまな監査のサブスクライブまたはサブスクライブ解除、その内容の受信、新しいコンテンツのインシデントとしてのフェッチが可能になります。",
    "The URL of the ExtraHop system this instance will connect to.":
      "このインスタンスが接続するExtraHopシステムのURL。",
    "The URL of your FireEye account.":
      "FireEyeアカウントのURL。",
    "The UTC date or relative timestamp from where to start fetching incidents.":
      "インシデントのフェッチを開始するUTCの日付または相対タイムスタンプ。",
    "The UTC date or relative timestamp from where to start fetching incidents. Supported formats: N minutes, N hours, N days, N weeks, N months, N years, yyyy-mm-dd, yyyy-mm-ddTHH:MM:SSZ For example: 10 minutes, 5 hours, 8 days, 2 weeks, 8 months, 2021-12-31, 01 Mar 2021, 01 Feb 2021 04:45:33, 2022-04-17T14:05:44Z":
      "インシデントのフェッチを開始するUTCの日付または相対タイムスタンプ。サポートされる形式: N minutes、N hours、N days、N weeks、N months、N years、yyyy-mm-dd、yyyy-mm-ddTHH:MM:SSZ 例: 10 minutes、5 hours、8 days、2 weeks、8 months、2021-12-31、01 Mar 2021、01 Feb 2021 04:45:33、2022-04-17T14:05:44Z",
    "There are two types of permissions":
      "権限には2つのタイプがあります",
    "This integration enables using Elastic Security for SIEM for security operations management and searching Elastic logs. This pack is to be used in combination with the Elasticsearch v2 integration.":
      "このインテグレーションにより、セキュリティオペレーション管理とElasticログの検索にElastic Security for SIEMを使用できます。このパックは、Elasticsearch v2インテグレーションと組み合わせて使用します。",
    "To configure an instance of F5 Silverline, you need to obtain the following information.":
      "F5 Silverlineのインスタンスを構成するには、次の情報を取得する必要があります。",
    "To configure the integration, enter your credentials in the following fields:":
      "インテグレーションを構成するには、次のフィールドに認証情報を入力します:",
    "To set up an instance, you need to add the following:":
      "インスタンスをセットアップするには、次を追加する必要があります:",
    "Unified gateway to security insights - all from a unified Microsoft Graph Security API.":
      "セキュリティインサイトへの統合ゲートウェイ - すべて統合されたMicrosoft Graph Security APIから。",
    "Use the integration to get logs from the O365 service.":
      "このインテグレーションを使用して、O365サービスからログを取得します。",
    "Use the Kenna v2 integration to search and update vulnerabilities, schedule a run connector, and manage tags and attributes.":
      "Kenna v2インテグレーションを使用して、脆弱性の検索と更新、コネクターの実行のスケジュール、タグと属性の管理を行います。",
    "Use the Lastline v2 integration to provide threat analysts and incident response teams with the advanced malware isolation and inspection environment needed to safely execute advanced malware samples, and understand their behavior.":
      "Lastline v2インテグレーションを使用して、脅威アナリストやインシデント対応チームに、高度なマルウェアサンプルを安全に実行しその挙動を理解するために必要な、高度なマルウェアの隔離および検査環境を提供します。",
    "Use the Microsoft Graph API integration to interact with Microsoft APIs that do not have dedicated integrations in Cortex, for example, Mail Single-User, etc.":
      "Microsoft Graph APIインテグレーションを使用して、Cortexに専用のインテグレーションがないMicrosoft APIと連携します(例: Mail Single-Userなど)。",
    "Use the Microsoft Search API in Microsoft Graph to search content stored in OneDrive or SharePoint: files, folders, lists, list items, or sites.":
      "Microsoft GraphのMicrosoft Search APIを使用して、OneDriveまたはSharePointに保存されているコンテンツ(ファイル、フォルダー、リスト、リスト項目、サイト)を検索します。",
    "Use the MITRE ATT&CK® feed to fetch MITRE’s Adversarial Tactics, Techniques, and Common Knowledge (ATT&CK®) content. MITRE ATT&CK is a globally-accessible knowledge base of adversary tactics and techniques based on real-world observations. The ATT&CK knowledge base is used as a foundation for the development of specific threat models and methodologies in the private sector, in government, and in the cybersecurity product and service community.":
      "MITRE ATT&CK®フィードを使用して、MITREのAdversarial Tactics, Techniques, and Common Knowledge(ATT&CK®)コンテンツをフェッチします。MITRE ATT&CKは、実世界の観測に基づく攻撃者の戦術と技術の、世界中からアクセス可能なナレッジベースです。ATT&CKナレッジベースは、民間セクター、政府、サイバーセキュリティ製品およびサービスコミュニティにおいて、特定の脅威モデルと手法を開発するための基盤として使用されています。",
    "User Name and Password":
      "ユーザー名とパスワード",
    "When you have api_analyst permissions, you cannot approve a containment for the host.":
      "api_analyst権限を持っている場合、ホストの封じ込めを承認することはできません。",
    "You can use with fireeye-hx-host-containment command for sending a containment request.":
      "封じ込めリクエストを送信するために、fireeye-hx-host-containmentコマンドと併用できます。",
    "Your F5 Silverline server URL":
      "F5 SilverlineサーバーのURL",
    "Your server URL":
      "お使いのサーバーURL",
    "Your username and password when logging in to your FireEye account.":
      "FireEyeアカウントへのログイン時のユーザー名とパスワード。",

    // --- Batch: GCP service account setup / Freshservice / Forcepoint / FortiGate / Glean integration docs and parameters (08:29 export) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    ", add the users or groups that are allowed to use and manage the service account.":
      "、サービスアカウントを使用および管理できるユーザーまたはグループを追加します。",
    ", select the IAM roles to grant to the service account.":
      "、サービスアカウントに付与するIAMロールを選択します。",
    ", then click":
      "、次にクリックします:",
    ". Note that you must have permission to add members to the organization or project for the":
      "。次のメンバーを追加するには、組織またはプロジェクトに対するメンバー追加権限が必要です:",
    "(Account username, Password)":
      "(アカウントのユーザー名、パスワード)",
    "A list of the required permissions for every command can be found below.":
      "各コマンドに必要な権限の一覧を以下に示します。",
    "A new API key will be generated for you. Copy the generated API key and keep it secure.":
      "新しいAPIキーが生成されます。生成されたAPIキーをコピーし、安全に保管してください。",
    "Account username":
      "アカウントのユーザー名",
    "Add a member and roles to a project or organization. In the":
      "プロジェクトまたは組織にメンバーとロールを追加します。",
    "Add a title, description, and ID and ensure the role is marked for General Availability.":
      "タイトル、説明、IDを追加し、ロールが General Availability に設定されていることを確認します。",
    "Add the required permissions by clicking":
      "次をクリックして、必要な権限を追加します:",
    "After choosing an authentication method, click":
      "認証方法を選択したら、次をクリックします:",
    "At the top-left, click the navigation menu >":
      "左上のナビゲーションメニューをクリックし、次に移動します:",
    "Check the Version 8.5.5 or later flag to switch to use these newer api endpoints.":
      "これらの新しいAPIエンドポイントを使用するように切り替えるには、Version 8.5.5 or later フラグをオンにします。",
    "Click on your profile icon in the top-right corner and select “Profile settings” from the dropdown menu.":
      "右上隅のプロフィールアイコンをクリックし、ドロップダウンメニューから“Profile settings”を選択します。",
    "Click the down arrow in the top menu bar for the project.":
      "上部のメニューバーで、プロジェクトの下向き矢印をクリックします。",
    "Click the email address for the service account you created.":
      "作成したサービスアカウントのメールアドレスをクリックします。",
    "Click the navigation menu and select":
      "ナビゲーションメニューをクリックし、次を選択します:",
    "Command Name":
      "コマンド名",
    "Command Required Permissions":
      "コマンドに必要な権限",
    "Could not authorize":
      "認可できませんでした",
    "Create a Custom Role":
      "カスタムロールを作成する",
    "Create a Project":
      "プロジェクトを作成する",
    "Create a Service Account":
      "サービスアカウントを作成する",
    "Create a Service Account & Service Account Key":
      "サービスアカウントとサービスアカウントキーを作成する",
    "Create a Service Account Key":
      "サービスアカウントキーを作成する",
    "Credentials and Password":
      "認証情報とパスワード",
    "drop-down list, select":
      "ドロップダウンリストから、次を選択します:",
    "drop-down list, select an organization that contains the GCP project(s) that you want the integration to monitor.":
      "ドロップダウンリストから、インテグレーションで監視するGCPプロジェクトを含む組織を選択します。",
    "drop-down list, select the required roles.":
      "ドロップダウンリストから、必要なロールを選択します。",
    "Enable Google Workspace APIs":
      "Google Workspace APIを有効にする",
    "Enter an API token and your Server URL.":
      "APIトークンとサーバーURLを入力します。",
    "Enter your Server URL -":
      "サーバーURLを入力します -",
    "Fetch tasks for each ticket type and consider them in the mirroring (requires an additional API request per ticket).":
      "チケットタイプごとにタスクをフェッチし、ミラーリングで考慮します(チケットごとに追加のAPIリクエストが必要です)。",
    "Fetch tickets tasks":
      "チケットのタスクをフェッチ",
    "field, paste the email address of the created service account.":
      "フィールドに、作成したサービスアカウントのメールアドレスを貼り付けます。",
    "First alert created date to fetch. e.g., \"1 min ago\",\"2 weeks ago\",\"3 months ago\"":
      "フェッチする最初のアラートの作成日。例: \"1 min ago\"、\"2 weeks ago\"、\"3 months ago\"",
    "Follow these instructions to retrieve the API token.":
      "APIトークンを取得するには、次の手順に従ってください。",
    "Follow these instructions to successfully instantiate an instance of the Freshservice integration.":
      "Freshserviceインテグレーションのインスタンスを正常に作成するには、次の手順に従ってください。",
    "Forcepoint version 8.5.5 or later":
      "Forcepointバージョン8.5.5以降",
    "Forcepoint’s API calls to delete URLs/IPs from a category and to delete the category itself have changed. See":
      "カテゴリーからURL/IPを削除するForcepointのAPI呼び出しと、カテゴリー自体を削除するAPI呼び出しが変更されました。詳細は次を参照してください:",
    "Forcepoint’s documentation":
      "Forcepointのドキュメント",
    "FortiGate always delivered on the concept of hybrid mesh firewalls with FortiManager for unified management and consistent security across complex hybrid environments.":
      "FortiGateは、複雑なハイブリッド環境全体で統合管理と一貫したセキュリティを実現するため、FortiManagerと組み合わせたハイブリッドメッシュファイアウォールのコンセプトを一貫して提供してきました。",
    "FortiGate provides flawless convergence that can scale to any location: remote office, branch, campus, data center, and cloud.":
      "FortiGateは、リモートオフィス、支社、キャンパス、データセンター、クラウドなど、あらゆる拠点に拡張できる完璧な融合を実現します。",
    "Freshservice URL (make sure your URL includes your unique environment name).":
      "Freshservice URL(URLに一意の環境名が含まれていることを確認してください)。",
    "Glean Configure Connection":
      "Glean接続の構成",
    "Grant Permissions":
      "権限を付与する",
    "Grant Role Access to Service Account":
      "サービスアカウントにロールのアクセス権を付与する",
    "How to Achieve Authentication":
      "認証の方法",
    "If prompted, select a project, or create a new one.":
      "プロンプトが表示されたら、プロジェクトを選択するか、新しく作成します。",
    "If the Freshworks Freshservice name for your company is, for example, ‘taltal’, then the Server URL configuration parameter you would enter would be ‘https://taltal.freshservice.com’.":
      "たとえば、貴社のFreshworks Freshservice名が‘taltal’の場合、入力するサーバーURL構成パラメーターは‘https://taltal.freshservice.com’になります。",
    "Important Updates for Version 8.5.5 and Later":
      "バージョン8.5.5以降の重要な更新",
    "In order to use the integration capabilities, you need to enable Google Workspace APIs.":
      "インテグレーションの機能を使用するには、Google Workspace APIを有効にする必要があります。",
    "In order to use the integration, in the first stage, you need to create a project.":
      "インテグレーションを使用するには、まず最初の段階でプロジェクトを作成する必要があります。",
    "In the left sidebar, click on “API Key”.":
      "左側のサイドバーで、“API Key”をクリックします。",
    "In the list of search results, click the API you want to enable.":
      "検索結果のリストで、有効にするAPIをクリックします。",
    "In the search field, enter the name of the API you want to enable and press":
      "検索フィールドに、有効にするAPIの名前を入力し、次を押します:",
    "Incident impacts to fetch. The default is All. You can choose multiple impacts.":
      "フェッチするインシデントの影響。デフォルトはAllです。複数の影響を選択できます。",
    "Incident priorities to fetch. The default is All. You can choose multiple priorities.":
      "フェッチするインシデントの優先度。デフォルトはAllです。複数の優先度を選択できます。",
    "Information about how to create project can be found":
      "プロジェクトの作成方法に関する情報は、こちらで確認できます:",
    "Instance Setup":
      "インスタンスのセットアップ",
    "Integrate Cloud Security with your Glean Account to gain comprehensive visibility into any data and posture risk existing in your Glean environment. This integration enables automated scanning of all assets in Glean, including data classification and risk assessment.":
      "Cloud SecurityをGleanアカウントと統合して、Glean環境に存在するあらゆるデータおよびポスチャリスクを包括的に可視化します。このインテグレーションにより、データ分類やリスク評価を含む、Gleanのすべてのアセットの自動スキャンが可能になります。",
    "Keep this window open for the duration of the onboarding.":
      "オンボーディングが完了するまで、このウィンドウを開いたままにしてください。",
    "Log in to your Freshservice account as an administrator.":
      "管理者としてFreshserviceアカウントにログインします。",
    "Maximum number of incidents per fetch. Default is 100.":
      "1回のフェッチあたりのインシデントの最大数。デフォルトは100です。",
    "More information about creating the required resources can be found here:":
      "必要なリソースの作成に関する詳細は、こちらを参照してください:",
    "Note that the API key is generated with different permissions. For using the ‘Test’ button to validate the credentials, your API token will need at least the view tickets permission.":
      "APIキーは異なる権限で生成されることに注意してください。‘Test’ボタンを使用して認証情報を検証するには、APIトークンに少なくともチケットの表示権限が必要です。",
    "Note: You must provide at least one of these authentication methods (username/password or API key), but not both simultaneously.":
      "注: これらの認証方法(ユーザー名/パスワードまたはAPIキー)のうち少なくとも1つを指定する必要がありますが、両方を同時に指定することはできません。",
    "On the API Key page, click on the “Generate Key” button.":
      "API Keyページで、“Generate Key”ボタンをクリックします。",
    "Please enable the following APIs:":
      "次のAPIを有効にしてください:",
    "Please provide the downloaded file content in the integration":
      "ダウンロードしたファイルの内容を、インテグレーションの",
    "instance parameter.":
      "インスタンスパラメーターに指定してください。",
    "Required grant ‘Service Account Key Admin’ role permission":
      "‘Service Account Key Admin’ロールの権限の付与が必要です",
    "Service Account Private Key file content (JSON)":
      "サービスアカウントの秘密鍵ファイルの内容(JSON)",
    "Service Account Private Key file content (JSON).":
      "サービスアカウントの秘密鍵ファイルの内容(JSON)。",
    "The Fortinet FortiOS operating system provides deep visibility and security across a variety of form factors.":
      "Fortinet FortiOSオペレーティングシステムは、さまざまなフォームファクターにわたって、詳細な可視性とセキュリティを提供します。",
    "The Glean account is not recognized.":
      "Gleanアカウントが認識されません。",
    "The risk of the tickets to fetch. Available only for the 'Change Request' ticket type.":
      "フェッチするチケットのリスク。'Change Request'チケットタイプでのみ使用できます。",
    "The status of the tickets to fetch. Since each ticket type has its own unique set of statuses, select only statuses that match the selected ticket type(s).":
      "フェッチするチケットのステータス。各チケットタイプには固有のステータスセットがあるため、選択したチケットタイプに一致するステータスのみを選択してください。",
    "The urgency of the tickets to fetch. Available only for the 'Incident/Service Request' ticket type. The default is All. You can choose multiple urgencies.":
      "フェッチするチケットの緊急度。'Incident/Service Request'チケットタイプでのみ使用できます。デフォルトはAllです。複数の緊急度を選択できます。",
    "The URL of your Forcepoint instance, without the port number.":
      "ForcepointインスタンスのURL(ポート番号なし)。",
    "There are no permissions required for making this API call.":
      "このAPI呼び出しには、権限は必要ありません。",
    "Ticket Impact":
      "チケットの影響",
    "Ticket Priority":
      "チケットの優先度",
    "Ticket Risk":
      "チケットのリスク",
    "Ticket Status":
      "チケットのステータス",
    "Ticket type to fetch as incidents.":
      "インシデントとしてフェッチするチケットタイプ。",
    "Ticket Urgency":
      "チケットの緊急度",
    "To authenticate with FortiGate, you can use one of two methods:":
      "FortiGateで認証するには、次の2つの方法のいずれかを使用できます:",
    "To configure an instance of the integration in Cortex, you need to supply the Service Account Private Key file content.":
      "Cortexでインテグレーションのインスタンスを構成するには、サービスアカウントの秘密鍵ファイルの内容を指定する必要があります。",
    "To set up an instance, add the following.":
      "インスタンスをセットアップするには、次を追加します。",
    "To successfully onboard the account, try again or contact support.":
      "アカウントを正常にオンボーディングするには、もう一度お試しいただくか、サポートにお問い合わせください。",
    "Under Service account details, type a name, ID, and description for the service account, then click":
      "Service account details で、サービスアカウントの名前、ID、説明を入力し、次をクリックします:",
    "Username/Password Authentication":
      "ユーザー名/パスワード認証",
    "Verifying connection...":
      "接続を検証しています...",
    "You can grant the permissions by predefined roles or by creating a custom role.":
      "権限は、事前定義されたロールを使用するか、カスタムロールを作成して付与できます。",
    "You have to grant the required permissions to the created Service Account in order to use in the integration command.":
      "インテグレーションコマンドで使用するには、作成したサービスアカウントに必要な権限を付与する必要があります。",
    "Your credentials (username) and password for logging in to your Forcepoint instance.":
      "Forcepointインスタンスへのログインに使用する認証情報(ユーザー名)とパスワード。",
    "Your new public/private key pair is generated and downloaded to your machine; it serves as the only copy of the private key. You are responsible for storing it securely. If you lose this key pair, you will need to generate a new one.":
      "新しい公開鍵/秘密鍵のペアが生成され、お使いのマシンにダウンロードされます。これが秘密鍵の唯一のコピーとなります。安全に保管する責任はお客様にあります。このキーペアを紛失した場合は、新しく生成する必要があります。",

    // --- Batch: Generic Export Indicators Service / Generic SQL / MCP authentication docs and integration card descriptions (08:43 export) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    "- Bypass SSL certificate verification (Default:":
      "- SSL証明書の検証をバイパスします(デフォルト:",
    "- Check this box if API calls to this endpoint require authentication (":
      "- このエンドポイントへのAPI呼び出しに認証が必要な場合は、このチェックボックスをオンにします(",
    "- Check this box if API key or authentication credentials are provided as part of the HTTP header (":
      "- APIキーまたは認証情報がHTTPヘッダーの一部として提供される場合は、このチェックボックスをオンにします(",
    "- For a header-based call, this would appear in the header as 'X-PAN-KEY': KEY_HERE":
      "- ヘッダーベースの呼び出しの場合、ヘッダーに 'X-PAN-KEY': KEY_HERE として表示されます",
    "- For a parameterized call, this would be appended to the URL as &X-PAN-KEY=KEY_HERE -":
      "- パラメーター化された呼び出しの場合、URLに &X-PAN-KEY=KEY_HERE として追加されます -",
    "- Integration instance name":
      "- インテグレーションインスタンス名",
    "- Leave blank when using an API key":
      "- APIキーを使用する場合は空白のままにします",
    "- Leverage the proxy settings configured on the XSOAR server":
      "- XSOARサーバーで構成されたプロキシ設定を利用します",
    "- The base server URL for the API endpoint without the trailing slash (":
      "- 末尾にスラッシュを付けない、APIエンドポイントのベースサーバーURL(",
    "- The password (when using HTTP basic authentication) or API key to use for API calls with this integration instance":
      "- インテグレーションインスタンスでのAPI呼び出しに使用するパスワード(HTTPベーシック認証を使用する場合)またはAPIキー",
    "- The value to use to identify the API key field as part of the HTTP header or API Key parameter in the URL":
      "- APIキーフィールドをHTTPヘッダーまたはURL内のAPIキーパラメーターの一部として識別するために使用する値",
    "- Username for HTTP basic authentication.":
      "- HTTPベーシック認証のユーザー名。",
    "- When fetching by either ID or timestamp.":
      "- IDまたはタイムスタンプのいずれかでフェッチする場合。",
    "- When the ID is unique but not necessarily ascending and timestamp is not unique.":
      "- IDは一意だが昇順とは限らず、タイムスタンプが一意でない場合。",
    ": Add custom headers to be sent with each API request. Enter each header on a new line in the format:":
      ": 各APIリクエストと共に送信するカスタムヘッダーを追加します。各ヘッダーを次の形式で新しい行に入力します:",
    ": If you are running the integration via an on-prem engine you must set the username and password fields in the integration instance. Otherwise, for normal usage, if you have set a default password in your tenant, you do not have to set a username and password in the integration instance":
      ": オンプレミスエンジン経由でインテグレーションを実行している場合は、インテグレーションインスタンスでユーザー名とパスワードのフィールドを設定する必要があります。それ以外の通常の使用では、テナントにデフォルトのパスワードを設定している場合、インテグレーションインスタンスでユーザー名とパスワードを設定する必要はありません",
    ": No authentication is used.":
      ": 認証は使用されません。",
    ": Provide the API Key to access the service REST API.":
      ": サービスのREST APIにアクセスするためのAPIキーを指定します。",
    ": Provide the API Token or API Key to access the service REST API.":
      ": サービスのREST APIにアクセスするためのAPIトークンまたはAPIキーを指定します。",
    ": Provide the Bearer Token to access the service REST API.":
      ": サービスのREST APIにアクセスするためのBearerトークンを指定します。",
    ": Provide the raw token to access the service REST API.":
      ": サービスのREST APIにアクセスするためのrawトークンを指定します。",
    ": Provide the username and password for basic authentication.":
      ": ベーシック認証のユーザー名とパスワードを指定します。",
    ": Required to obtain the access token. To get this code, run the":
      ": アクセストークンの取得に必要です。このコードを取得するには、次を実行します:",
    ": Select the authentication method to use for connecting to the MCP server.":
      ": MCPサーバーへの接続に使用する認証方法を選択します。",
    ": Select this option to trust any certificate. This is not recommended for production environments.":
      ": このオプションを選択すると、すべての証明書を信頼します。本番環境では推奨されません。",
    ": Space-separated permission identifiers requested from the authorization server.":
      ": 認可サーバーに要求するアクセス許可の識別子(スペース区切り)。",
    ": The base URL of the MCP server. This is a required parameter for all authentication types.":
      ": MCPサーバーのベースURL。すべての認証タイプで必須のパラメーターです。",
    ": The Client ID for your application.":
      ": アプリケーションのクライアントID。",
    ": The Client Secret for your application.":
      ": アプリケーションのクライアントシークレット。",
    ": The External Dynamic List is not accessible via web browsers and you will receive an unauthorized error if accessing the External Dynamic List via a browser.":
      ": External Dynamic Listはウェブブラウザーからアクセスできません。ブラウザー経由でExternal Dynamic Listにアクセスすると、未承認エラーが表示されます。",
    ": The URI to which the authorization server redirects the user-agent after granting authorization. This is typically used in OAuth 2.0 Authorization Code flow. Default:":
      ": 認可の付与後に、認可サーバーがユーザーエージェントをリダイレクトするURI。通常、OAuth 2.0 Authorization Codeフローで使用されます。デフォルト:",
    ": The URL for the OAuth 2.0 authorization endpoint. If not provided, the default will be the origin of the":
      ": OAuth 2.0認可エンドポイントのURL。指定しない場合、デフォルトは次のオリジンになります:",
    ": The URL for the OAuth 2.0 token endpoint. If not provided, the default will be the origin of the":
      ": OAuth 2.0トークンエンドポイントのURL。指定しない場合、デフォルトは次のオリジンになります:",
    ": Uses a Bearer token for authentication.":
      ": 認証にBearerトークンを使用します。",
    ": Uses a raw token for authentication.":
      ": 認証にrawトークンを使用します。",
    ": Uses a single API token or key for authentication.":
      ": 認証に単一のAPIトークンまたはキーを使用します。",
    ": Uses a username and password for authentication.":
      ": 認証にユーザー名とパスワードを使用します。",
    ": Uses an API key for authentication.":
      ": 認証にAPIキーを使用します。",
    ": Uses OAuth 2.0 Dynamic Client Registration.":
      ": OAuth 2.0 Dynamic Client Registrationを使用します。",
    ": Uses the OAuth 2.0 Authorization Code flow for authentication.":
      ": 認証にOAuth 2.0 Authorization Codeフローを使用します。",
    ": Uses the OAuth 2.0 Client Credentials flow for authentication.":
      ": 認証にOAuth 2.0 Client Credentialsフローを使用します。",
    "\"No known finding\" from any command means nothing was flagged in the sources":
      "“No known finding”は、コマンドの結果として、確認されたソースで何も検出されなかったことを意味します",
    "(Optional) limit :limit (It’s possible if the database supports it)":
      "(オプション)limit :limit(データベースが対応している場合に可能です)",
    "* 0 - Do not collapse.":
      "* 0 - 折りたたみなし。",
    "* 1 - Collapse to ranges.":
      "* 1 - 範囲に折りたたみます。",
    "* 2 - Collapse to CIDRs.":
      "* 2 - CIDRに折りたたみます。",
    "A search engine used for searching Internet-connected devices.":
      "インターネットに接続されたデバイスを検索するための検索エンジン。",
    "Access the Generic Export Indicators Service by Instance Name (HTTPS)":
      "インスタンス名でGeneric Export Indicators Serviceにアクセスする(HTTPS)",
    "Add comment to empty list":
      "空のリストにコメントを追加",
    "Add custom headers to be sent with each API request.":
      "各APIリクエストと共に送信するカスタムヘッダーを追加します。",
    "Add custom headers to be sent with each API request. Enter each header on a new line in the format: HeaderName: HeaderValue.":
      "各APIリクエストと共に送信するカスタムヘッダーを追加します。各ヘッダーを、HeaderName: HeaderValue の形式で新しい行に入力します。",
    "Add HSTS header":
      "HSTSヘッダーを追加",
    "Advanced Parameters":
      "詳細パラメーター",
    "Advanced: Use Legacy Queries":
      "詳細設定: レガシークエリを使用",
    "Agentless, Workload-Deep, Context-Aware Security and Compliance for AWS, Azure, and GCP.":
      "AWS、Azure、GCPに対応した、エージェントレス、ワークロード詳細、コンテキスト対応のセキュリティとコンプライアンス。",
    "Alert and notify users using PagerDuty.":
      "PagerDutyを使用して、ユーザーにアラートと通知を送信します。",
    "Analyse retro hunts, read live hunt notifications and download files from VirusTotal.":
      "VirusTotalから、レトロハントの分析、ライブハント通知の読み取り、ファイルのダウンロードを行います。",
    "Analyzes suspicious hashes, URLs, domains, and IP addresses.":
      "不審なハッシュ、URL、ドメイン、IPアドレスを分析します。",
    "API call is authenticated":
      "API呼び出しが認証される",
    "API call is authenticated (Default: False)":
      "API呼び出しが認証される(デフォルト: False)",
    "API key supplied in header":
      "APIキーをヘッダーで指定",
    "API Key supplied in header":
      "APIキーをヘッダーで指定",
    "API Token / API Key":
      "APIトークン / APIキー",
    "Append string to list":
      "リストに文字列を追加(末尾)",
    "argument":
      "引数",
    "Authentication Header":
      "認証ヘッダー",
    "Authorization Endpoint":
      "認可エンドポイント",
    "Base API Endpoint URL (https:// with no trailing slash)":
      "ベースAPIエンドポイントURL(末尾のスラッシュなしの https://)",
    "Base Server URL":
      "ベースサーバーURL",
    "Bind Variables":
      "バインド変数",
    "By default, the integration does not pool database connections. Thus, a connection is created and closed for each command run by the integration. When connection pooling is enabled, each Docker container will maintain a single connection open for the time specified in the the":
      "デフォルトでは、インテグレーションはデータベース接続をプールしません。そのため、インテグレーションが実行するコマンドごとに接続が作成され、閉じられます。接続プールを有効にすると、各Dockerコンテナーは、次で指定された時間、1つの接続を開いたままにします:",
    "CIDRs with a lower network prefix bits number are not included. For example - if the number is 8, then 0.0.0.0/2 is excluded from the list.":
      "ネットワークプレフィックスのビット数が小さいCIDRは含まれません。たとえば、数値が8の場合、0.0.0.0/2はリストから除外されます。",
    "Close an issue":
      "課題をクローズする",
    "Cloud based Security Network DVR.":
      "クラウドベースのセキュリティネットワークDVR。",
    "Cloud-based service for logs & metrics management.":
      "ログとメトリクスを管理するクラウドベースのサービス。",
    "Collect information and take action on remote endpoints in real time with VMware Carbon Black EDR (Live Response API) (formerly known as Carbon Black Enterprise Live Response).":
      "VMware Carbon Black EDR(Live Response API)(旧称Carbon Black Enterprise Live Response)を使用して、リモートエンドポイントの情報をリアルタイムで収集し、アクションを実行します。",
    "command and follow its instructions.":
      "コマンドを実行し、その指示に従います。",
    "command for the first time to initialize the export process.":
      "コマンドを初めて実行して、エクスポートプロセスを初期化します。",
    "Connection Arguments":
      "接続引数",
    "Connection Arguments (ex: arg1=val1&arg2=val2)":
      "接続引数(例: arg1=val1&arg2=val2)",
    "Connection Pool Time to Live":
      "接続プールの有効期間",
    "Connection Pool Time to Live (seconds)":
      "接続プールの有効期間(秒)",
    "Connection Pooling":
      "接続プール",
    "Converts URLs, PDF files, and emails to an image file or PDF file.":
      "URL、PDFファイル、メールを画像ファイルまたはPDFファイルに変換します。",
    "Custom headers":
      "カスタムヘッダー",
    "Database host":
      "データベースホスト",
    "Default it set to false (key is provided as a parameter). Unchecking this will pass the API key as a call header":
      "デフォルトはfalseです(キーはパラメーターとして指定されます)。オフにすると、APIキーが呼び出しヘッダーとして渡されます",
    "Default ports":
      "デフォルトのポート",
    "Deprecated - We recommend using the Remote Access v2 integration instead.":
      "非推奨です。代わりにRemote Access v2統合を使用することをお勧めします。",
    "Deprecated. Use Analyst1 integration instead.":
      "非推奨です。代わりにAnalyst1統合を使用してください。",
    "Deprecated. Use Jamf v2 instead. Jamf device management. Please note, this integration is currently only compatible with the Jamf V1 API.":
      "非推奨です。代わりにJamf v2を使用してください。 Jamfによるデバイス管理。このインテグレーションは現在、Jamf V1 APIとのみ互換性があることに注意してください。",
    "Deprecated. Use O365 Defender SafeLinks instead. Enables URL scanning, rewriting inbound email messages in the mail flow, time-of-click URL verification, and links in email messages and other locations.":
      "非推奨です。代わりにO365 Defender SafeLinksを使用してください。 URLスキャン、メールフローにおける受信メッセージの書き換え、クリック時のURL検証、メールメッセージやその他の場所にあるリンクの保護を可能にします。",
    "Deprecated. Use Proofpoint Protection Server V2 instead.":
      "非推奨です。代わりにProofpoint Protection Server V2を使用してください。",
    "Deprecated. Use SlackV3 instead.":
      "非推奨です。代わりにSlackV3を使用してください。",
    "Deprecated. Use The Generic SQL integration instead.":
      "非推奨です。代わりにThe Generic SQL統合を使用してください。",
    "Deprecated. Use the Microsoft Graph Security integration instead. This integration allows you to manage and interact with Microsoft security and compliance content search.":
      "非推奨です。代わりにMicrosoft Graph Security統合を使用してください。 このインテグレーションにより、Microsoftのセキュリティおよびコンプライアンスのコンテンツ検索を管理し、操作できます。",
    "Deprecated. Use the Okta v2 integration instead.":
      "非推奨です。代わりにOkta v2統合を使用してください。",
    "Deprecated. Use the PagerDuty v2 integration instead.":
      "非推奨です。代わりにPagerDuty v2統合を使用してください。",
    "Deprecated. Use the Palo Alto Networks AutoFocus v2 integration instead. Palo Alto Networks AutoFocus enables you to distinguish the most important threats from everyday commodity attacks.":
      "非推奨です。代わりにPalo Alto Networks AutoFocus v2統合を使用してください。 Palo Alto Networks AutoFocusを使用すると、最も重要な脅威を日常的なコモディティ型攻撃から区別できます。",
    "Deprecated. Use the Prisma Cloud v2 integration instead.":
      "非推奨です。代わりにPrisma Cloud v2統合を使用してください。",
    "Deprecated. Use the Rapid7 Nexpose integration instead.":
      "非推奨です。代わりにRapid7 Nexpose統合を使用してください。",
    "Deprecated. Use the Server Message Block (SMB) v2 integration instead.":
      "非推奨です。代わりにServer Message Block (SMB) v2統合を使用してください。",
    "Deprecated. Use the ServiceNow v2 integration instead.":
      "非推奨です。代わりにServiceNow v2統合を使用してください。",
    "Deprecated. Use the Slack v2 integration instead.":
      "非推奨です。代わりにSlack v2統合を使用してください。",
    "Deprecated. Use the Unit 42 Intelligence integration instead.":
      "非推奨です。代わりにUnit 42 Intelligence統合を使用してください。",
    "Deprecated. Use the Zendesk v2 integration instead.":
      "非推奨です。代わりにZendesk v2統合を使用してください。",
    "Deprecated. Use VirusTotalV3 integration instead.":
      "非推奨です。代わりにVirusTotalV3統合を使用してください。",
    "Deprecated. Use VMware Carbon Black EDR v2 instead.":
      "非推奨です。代わりにVMware Carbon Black EDR v2を使用してください。",
    "Discover and remediate AI application vulnerabilities with Palo Alto Networks Prisma AIRS AI Red Teaming: targets, adapters, scans, attack reports, prompt sets, and custom attacks.":
      "Palo Alto Networks Prisma AIRS AI Red Teamingで、AIアプリケーションの脆弱性を検出して修復します: ターゲット、アダプター、スキャン、攻撃レポート、プロンプトセット、カスタム攻撃。",
    "Does this API call require authentication (Basic, API key, etc.)?":
      "この API 呼び出しには認証(ベーシック、APIキーなど)が必要ですか?",
    "Dynamically retrieve and add to allow list IPs Prisma Access uses to egress traffic to the internet and SaaS apps.":
      "Prisma AccessがインターネットおよびSaaSアプリへのトラフィックのエグレスに使用するIPを、動的に取得して許可リストに追加します。",
    "e.g., X-PAN-KEY: API_KEY_HERE (X-PAN-KEY is the value specified in this field)":
      "例: X-PAN-KEY: API_KEY_HERE(X-PAN-KEY はこのフィールドで指定された値です)",
    "Enabling this prevents automatic list refresh.":
      "これを有効にすると、リストの自動更新が行われなくなります。",
    "Enforce ASCII only":
      "ASCIIのみを強制",
    "Enrich indicators with Unit 42 threat intelligence context including verdicts, threat object associations, and relationships.":
      "判定、脅威オブジェクトの関連付け、リレーションシップなど、Unit 42の脅威インテリジェンスのコンテキストでインジケーターをエンリッチします。",
    "Enter each header on a new line in the format: HeaderName: HeaderValue.":
      "各ヘッダーを、HeaderName: HeaderValue の形式で新しい行に入力します。",
    "Enter the exact column's incident name (if empty - it's the Fetch Column).":
      "インシデント名に使用する列の正確な名前(空の場合は、フェッチ列が使用されます)。",
    "Enter the exact column's name to fetch (ID column or timestamp column).":
      "フェッチする列の正確な名前(ID列またはタイムスタンプ列)。",
    "Example":
      "例",
    "Exclude top level domainGlobs":
      "トップレベルドメインのGlobを除外",
    "Exported Fields":
      "エクスポートするフィールド",
    "Failover time should be about 1 minute plus the container startup time.":
      "フェイルオーバー時間は、約1分にコンテナーの起動時間を加えた時間になります。",
    "Fetch Column":
      "フェッチ列",
    "Fetch events query":
      "イベントをフェッチするクエリ",
    "Fetch Incidents query Notes":
      "インシデントをフェッチするクエリに関する注意事項",
    "Fetch Limit (Default / Max - 50, Recommended less than 50)":
      "フェッチの上限(デフォルト/最大 - 50、50未満を推奨)",
    "Fetch parameters, ts (timestamp) or id and l (limit), will be added by the fetch mechanism.":
      "フェッチパラメーターのts(タイムスタンプ)またはidとl(上限)は、フェッチの仕組みによって追加されます。",
    "Fetch parameters, ts (timestamp) or ID and l (limit), will be added by the fetch mechanism.":
      "フェッチパラメーターのts(タイムスタンプ)またはIDとl(上限)は、フェッチの仕組みによって追加されます。",
    "Fetches and manages incidents from iZOOlogic, enabling automated ingestion, incident creation, and advanced filtering for brand protection and threat management.":
      "iZOOlogicからインシデントをフェッチして管理し、ブランド保護と脅威管理のための自動取り込み、インシデント作成、高度なフィルタリングを実現します。",
    "Files and Directories management with an SMB server. Supports SMB2 and SMB3 protocols.":
      "SMBサーバーでのファイルとディレクトリの管理。SMB2およびSMB3プロトコルをサポートします。",
    "Fill in ‘Fetch Column’ with your exact timestamp column name, and fill in the ‘ID column name’ with your exact ID column name.":
      "‘Fetch Column’にタイムスタンプ列の正確な名前を、‘ID column name’にID列の正確な名前を入力します。",
    "Fill only the ‘Fetch Column’ with the exact column name to fetch (ID column or timestamp column).":
      "‘Fetch Column’のみに、フェッチする列の正確な名前(ID列またはタイムスタンプ列)を入力します。",
    "First fetch interval (in days)":
      "最初のフェッチの間隔(日数)",
    "First fetch timestamp or First fetch ID":
      "最初のフェッチのタイムスタンプまたは最初のフェッチのID",
    "For example to test via curl with an instance with instance name:":
      "curlでインスタンス名を指定したインスタンスをテストする例:",
    "For example, if `Server URL` is `https://example.com/mcp`, the default `Authorization Endpoint` will be `https://example.com/oauth2/authorize`.":
      "たとえば、`Server URL` が `https://example.com/mcp` の場合、デフォルトの `Authorization Endpoint` は `https://example.com/oauth2/authorize` になります。",
    "For example, if `Server URL` is `https://example.com/mcp`, the default `Token Endpoint` will be `https://example.com/oauth2/token`.":
      "たとえば、`Server URL` が `https://example.com/mcp` の場合、デフォルトの `Token Endpoint` は `https://example.com/oauth2/token` になります。",
    "For use with JSON and CSV formats - select specific XSOAR fields to export (comma separated list). If given the value 'all' - all XSOAR fields are exported (in large quantities this can cause a performance issue). If left empty - only value and type are exported.":
      "JSONおよびCSV形式で使用します。エクスポートする特定のXSOARフィールドを選択します(カンマ区切りのリスト)。値に 'all' を指定すると、すべてのXSOARフィールドがエクスポートされます(大量の場合、パフォーマンスの問題が発生する可能性があります)。空のままにすると、値とタイプのみがエクスポートされます。",
    "For use with McAfee Web Gateway format - set the indicator list type.":
      "McAfee Web Gatewayの形式で使用します。インジケーターリストのタイプを設定します。",
    "For use with PAN-OS (text) format - collapse method for IPs (none, range, CIDR).":
      "PAN-OS(テキスト)形式で使用します。IPの折りたたみ方法(none、range、CIDR)。",
    "For use with PAN-OS (text) format - if selected, any URL entry that is not compliant with PAN-OS URL format is dropped instead of rewritten.":
      "PAN-OS(テキスト)形式で使用します。選択すると、PAN-OSのURL形式に準拠していないURLエントリは、書き換えられずに破棄されます。",
    "For use with PAN-OS (text) format - String to add to beginning of published list. Supports newline characters (\\n).":
      "PAN-OS(テキスト)形式で使用します。公開されるリストの先頭に追加する文字列。改行文字(\\n)をサポートします。",
    "For use with PAN-OS (text) format - String to add to end of published list. Supports newline characters (\\n).":
      "PAN-OS(テキスト)形式で使用します。公開されるリストの末尾に追加する文字列。改行文字(\\n)をサポートします。",
    "For use with Symantec ProxySG format - set the categories that should be listed in the output (comma separated list). If not set, lists all existing categories.":
      "Symantec ProxySGの形式で使用します。出力に一覧表示するカテゴリーを設定します(カンマ区切りのリスト)。設定しない場合は、既存のすべてのカテゴリーが一覧表示されます。",
    "For use with Symantec ProxySG format - set the default category for the output.":
      "Symantec ProxySGの形式で使用します。出力のデフォルトカテゴリーを設定します。",
    "format. If set, will ignore URLs which are not compliant with PAN-OS URL format instead of being re-written.":
      "形式。設定すると、PAN-OSのURL形式に準拠していないURLを書き換えずに無視します。",
    "format. The categories which will be exported. Indicators not in these categories will be classified as the default category.":
      "形式。エクスポートするカテゴリー。これらのカテゴリーに含まれないインジケーターは、デフォルトカテゴリーに分類されます。",
    "format. The default category for the exported indicators.":
      "形式。エクスポートされるインジケーターのデフォルトカテゴリー。",
    "format. The type indicated on the top of the exported list. Supports: string, applcontrol, dimension, category, ip, mediatype, number and regex.":
      "形式。エクスポートされたリストの先頭に示すタイプ。サポート: string、applcontrol、dimension、category、ip、mediatype、number、regex。",
    "format. Whether to collapse IPs.":
      "形式。IPを折りたたむかどうか。",
    "Forward requests to long-running integrations":
      "長時間実行されるインテグレーションにリクエストを転送する",
    "Fully automated malware dynamic analysis sandboxing.":
      "完全自動化されたマルウェア動的分析サンドボックス。",
    "Generates a Palo Alto Networks WildFire PDF report. For internal use with the TIM Sample Analysis feature.":
      "Palo Alto Networks WildFireのPDFレポートを生成します。TIMサンプル分析機能での内部使用向けです。",
    "Generic MCP Integration Description":
      "Generic MCPインテグレーションの説明",
    "GenericAPICall Integration":
      "GenericAPICallインテグレーション",
    "Get actionable threat analysis and intelligence from HPE’s cloud-based, standards-compliant sharing platform":
      "HPEのクラウドベースで標準に準拠した共有プラットフォームから、実用的な脅威分析とインテリジェンスを入手します",
    "Get the download count for each release in a repository":
      "リポジトリ内の各リリースのダウンロード数を取得する",
    "GitHub app installation ID":
      "GitHubアプリのインストールID",
    "GitHub app integration ID":
      "GitHubアプリの統合ID",
    "Header example":
      "ヘッダーの例",
    "How often to refresh the list (e.g., less than 1 minute, 5 minutes, 12 hours, 7 days, 3 months, 1 year). For performance reasons, we do not recommend setting this value at less than 1 minute.":
      "リストを更新する頻度(例: 1分未満、5 minutes、12 hours、7 days、3 months、1 year)。パフォーマンス上の理由から、この値を1分未満に設定することはお勧めしません。",
    "ID Column name - in case of fetching by 'ID and timestamp'":
      "ID列名 - 'ID and timestamp' でフェッチする場合",
    "If selected, CSV format appears in a textual webpage instead of initiating a file download.":
      "選択すると、CSV形式がファイルのダウンロードではなく、テキストのWebページとして表示されます。",
    "If selected, it will force the list to contain only ASCII chars (non-ASCII URLs will be dropped).":
      "選択すると、リストにASCII文字のみが含まれるようになります(ASCII以外のURLは破棄されます)。",
    "If selected, ports in URLs are removed. For example, 'www.example.com:9999/path' becomes 'www.example.com/path'.":
      "選択すると、URLからポートが削除されます。たとえば、'www.example.com:9999/path' は 'www.example.com/path' になります。",
    "If selected, strips the protocol from URLs (http/https).":
      "選択すると、URLからプロトコル(http/https)が削除されます。",
    "If selected, the comment \"# Empty list\" is added to an empty list.":
      "選択すると、空のリストにコメント \"# Empty list\" が追加されます。",
    "If selected, URLs are truncated to no more than 254 characters.":
      "選択すると、URLは254文字以内に切り詰められます。",
    "If set, will strip protocols off URLs.":
      "設定すると、URLからプロトコルが削除されます。",
    "If set. will strip ports off URLs, otherwise will ignore URLs with ports.":
      "設定すると、URLからポートが削除されます。設定しない場合は、ポートを含むURLが無視されます。",
    "If the app server running the container fails, the container should restart on a different app server.":
      "コンテナーを実行しているアプリサーバーに障害が発生した場合、コンテナーは別のアプリサーバーで再起動されます。",
    "If the port value is empty, a default port will be selected according to the database type.":
      "ポートの値が空の場合は、データベースのタイプに応じたデフォルトのポートが選択されます。",
    "If you have several Generic Export Indicators Service integration instances, make sure to use":
      "Generic Export Indicators Serviceのインテグレーションインスタンスが複数ある場合は、必ず次を使用してください:",
    "Important Notes:":
      "重要な注意事項:",
    "In “route” listen mode, a request received by any of the app servers will be redirected to the one currently running the NGINX container.":
      "“route”リッスンモードでは、いずれかのアプリサーバーが受信したリクエストは、現在NGINXコンテナーを実行しているサーバーにリダイレクトされます。",
    "Incident Name":
      "インシデント名",
    "Indicator Query":
      "インジケータークエリ",
    "inline argument, the number of exported indicators is limited to 100,000 for performance reasons. To export more than 100,000 indicators, create a new integration instance with the desired Indicator Query and List Size.":
      "インライン引数では、エクスポートされるインジケーターの数は、パフォーマンス上の理由から100,000件に制限されます。100,000件を超えるインジケーターをエクスポートするには、目的のIndicator QueryとList Sizeを指定して新しいインテグレーションインスタンスを作成します。",
    "inline argument, use separate EDL instances (one per query) and set a default query for each to improve performance.":
      "インライン引数では、パフォーマンスを向上させるため、クエリごとに別々のEDLインスタンスを使用し、それぞれにデフォルトのクエリを設定します。",
    "Integrate with Okta's Identity Access Management service to execute CRUD operations to employee lifecycle processes.":
      "OktaのIdentity Access Managementサービスと連携し、従業員のライフサイクルプロセスに対するCRUD操作を実行します。",
    "Integrate with Oracle's services to execute CRUD and Group operations for employee lifecycle processes.":
      "Oracleのサービスと連携し、従業員のライフサイクルプロセスに対するCRUD操作とグループ操作を実行します。",
    "Integrate with Palo Alto Networks Prisma AIRS for AI security capabilities including runtime scanning, red teaming, AI supply chain security, and DLP configuration.":
      "Palo Alto Networks Prisma AIRSと連携し、ランタイムスキャン、レッドチーミング、AIサプライチェーンセキュリティ、DLP構成などのAIセキュリティ機能を利用します。",
    "Integrate with Prisma Access to monitor the status of the Service, alert and take actions.":
      "Prisma Accessと連携し、サービスのステータスを監視して、アラートの送信やアクションの実行を行います。",
    "Integrate with Salesforce Fusion Identity Access Management service to execute CRUD (create, read, update, and delete) operations for employee lifecycle processes.":
      "Salesforce Fusion Identity Access Managementサービスと連携し、従業員のライフサイクルプロセスに対するCRUD(作成、読み取り、更新、削除)操作を実行します。",
    "Integrate with SAP's services to execute CRUD operations for employee lifecycle processes.":
      "SAPのサービスと連携し、従業員のライフサイクルプロセスに対するCRUD操作を実行します。",
    "Integrate with ServiceNow's services to execute CRUD operations for employee lifecycle processes.":
      "ServiceNowのサービスと連携し、従業員のライフサイクルプロセスに対するCRUD操作を実行します。",
    "Integrate with Slack's services to execute CRUD operations for employee lifecycle processes.":
      "Slackのサービスと連携し、従業員のライフサイクルプロセスに対するCRUD操作を実行します。",
    "Integrates with the PingOne Management API to unlock, create, delete and update users.":
      "PingOne Management APIと連携し、ユーザーのロック解除、作成、削除、更新を行います。",
    "Integration for sending notifications to a Microsoft Teams channel via a workflow of type `Post to a channel when a webhook request is received`.":
      "`Post to a channel when a webhook request is received` タイプのワークフローを介して、Microsoft Teamsチャネルに通知を送信するためのインテグレーション。",
    "Integration with Okta's cloud-based identity management service.":
      "Oktaのクラウドベースのアイデンティティ管理サービスとの統合。",
    "Integration with Threatmon for vulnerability threat intelligence.":
      "脆弱性の脅威インテリジェンスのためのThreatmonとの統合。",
    "Internal page size used when querying Cortex for the indicators. Value can be up to 10,000 due to performance limitations.":
      "Cortexにインジケーターをクエリする際に使用する内部ページサイズ。パフォーマンス上の制限により、値は最大10,000です。",
    "IP Collapsing":
      "IPの折りたたみ",
    "Is the API key used for each call provided in the header or as a parameter?":
      "各呼び出しで使用するAPIキーは、ヘッダーとパラメーターのどちらで指定しますか?",
    "Is the API key used for each call provided in the header or as a parameter? Default it set to false (key is provided as a parameter). Unchecking this will pass the API key as a call header":
      "各呼び出しで使用するAPIキーは、ヘッダーとパラメーターのどちらで指定しますか?デフォルトはfalseです(キーはパラメーターとして指定されます)。オフにすると、APIキーが呼び出しヘッダーとして渡されます",
    "IT service management.":
      "ITサービス管理。",
    "List all issues":
      "すべての課題を一覧表示する",
    "List Size":
      "リストのサイズ",
    "Listen Port":
      "リッスンポート",
    "Lists all of the security vulnerabilities for various products (OS,Applications) etc).":
      "さまざまな製品(OS、アプリケーション)などのセキュリティ脆弱性をすべて一覧表示します。",
    "Make sure to add as parameters the fetch parameter and the limit.":
      "パラメーターとして、フェッチパラメーターと上限を必ず追加してください。",
    "Make sure to add as parameters the fetch parameter.":
      "パラメーターとして、フェッチパラメーターを必ず追加してください。",
    "Make sure you run the":
      "次のコマンドを必ず実行してください:",
    "Malware analysis sandboxing.":
      "マルウェア分析サンドボックス。",
    "Manage Palo Alto Networks Firewall and Panorama. Use this pack to manage Prisma Access through Panorama. For more information, see the Panorama documentation.":
      "Palo Alto Networks FirewallとPanoramaを管理します。このパックを使用して、Panorama経由でPrisma Accessを管理します。詳細については、Panoramaのドキュメントを参照してください。",
    "Manage teams and members in Microsoft Teams.":
      "Microsoft Teamsのチームとメンバーを管理します。",
    "Maximum number of items in the list.":
      "リスト内の項目の最大数。",
    "Maximum Size of CIDR Block (by mask bit)":
      "CIDRブロックの最大サイズ(マスクビット単位)",
    "McAfee Gateway: Indicator List Type":
      "McAfee Gateway: インジケーターリストのタイプ",
    "Microsoft Graph lets your app get authorized access to a user's Outlook mail data in a personal or organization account.":
      "Microsoft Graphを使用すると、アプリは個人アカウントまたは組織アカウント内のユーザーのOutlookメールデータへの承認済みアクセスを取得できます。",
    "Microsoft Graph lets your app get authorized access to a user's Teams app in a personal or organization account.":
      "Microsoft Graphを使用すると、アプリは個人アカウントまたは組織アカウント内のユーザーのTeamsアプリへの承認済みアクセスを取得できます。",
    "Modify Request Parameters Through the URL":
      "URLでリクエストパラメーターを変更する",
    "Netcraft takedown, submission and screenshot management.":
      "Netcraftによるテイクダウン、提出、スクリーンショットの管理。",
    "No Authorization":
      "認証なし",
    "Note: Other SQL databases are currently not supported by the fetch incidents.":
      "注: 他のSQLデータベースは、現在インシデントのフェッチでサポートされていません。",
    "O365 Outlook Calendar enables you to create and manage different calendars and events according to your requirements.":
      "O365 Outlook Calendarを使用すると、要件に応じてさまざまなカレンダーとイベントを作成および管理できます。",
    "On-premise firewall by Sophos enables you to manage your firewall, respond to threats, and monitor what’s happening on your network.":
      "Sophosのオンプレミスファイアウォールを使用すると、ファイアウォールの管理、脅威への対応、ネットワーク上の状況の監視を行えます。",
    "Option to remove top level domainGlobs from the list. For example - *.com.":
      "リストからトップレベルドメインのGlobを削除するオプション。例: *.com。",
    "Outbound Format":
      "アウトバウンド形式",
    "Palo Alto Networks Best Practice Assessment (BPA) analyzes NGFW and Panorama configurations and compares them to the best practices.":
      "Palo Alto Networks Best Practice Assessment(BPA)は、NGFWとPanoramaの構成を分析し、ベストプラクティスと比較します。",
    "Palo Alto Networks Enterprise DLP discovers and protects company data across every data channel and repository. Integrated Enterprise DLP enables data protection and compliance everywhere without complexity.":
      "Palo Alto Networks Enterprise DLPは、あらゆるデータチャネルとリポジトリにわたって企業データを検出して保護します。統合されたEnterprise DLPにより、複雑さを伴わずに、あらゆる場所でデータ保護とコンプライアンスを実現できます。",
    "PAN-OS: drop invalid URL entries":
      "PAN-OS: 無効なURLエントリを破棄",
    "parameter (default: 600 seconds). After the time to live expires, and upon execution of a new command, the database connection will close and a new connection will be created.":
      "パラメーター(デフォルト: 600秒)。有効期間が切れた後、新しいコマンドを実行すると、データベース接続が閉じられ、新しい接続が作成されます。",
    "parameter configured in the instance configuration.":
      "インスタンス構成で設定されたパラメーター。",
    "Parameterized example":
      "パラメーター化された例",
    "Password/API Key":
      "パスワード/APIキー",
    "Prepend string to list":
      "リストに文字列を追加(先頭)",
    "Prisma Cloud secures infrastructure, workloads and applications, across the entire cloud-native technology stack.":
      "Prisma Cloudは、クラウドネイティブ技術スタック全体にわたって、インフラストラクチャ、ワークロード、アプリケーションを保護します。",
    "Proofpoint email security appliance.":
      "Proofpointメールセキュリティアプライアンス。",
    "Protect your web application using Signal Sciences.":
      "Signal Sciencesを使用して、Webアプリケーションを保護します。",
    "Provides commands for interaction with Prisma SASE API.":
      "Prisma SASE APIと連携するためのコマンドを提供します。",
    "Provides URL scanning and rewriting of inbound email messages in mail flow, and time-of-click verification of URLs and links in email messages and other locations.":
      "メールフローにおける受信メッセージのURLスキャンと書き換え、およびメールメッセージやその他の場所にあるURLとリンクのクリック時の検証を提供します。",
    "Queries examples":
      "クエリの例",
    "Refresh Rate":
      "更新頻度",
    "RelayShield real-time identity-compromise and agent-security threat intelligence.":
      "RelayShieldのリアルタイムなアイデンティティ侵害およびエージェントセキュリティに関する脅威インテリジェンス。",
    "RelayShield real-time identity-compromise and agent-security threat intelligence. Implements the generic `domain`/`ip`/`email` reputation commands (auto-invoked by existing enrichment playbooks) plus RelayShield-specific commands for MCP server registry risk, certificate expiry, and supply-chain vendor risk. \"No known finding\" from any command means nothing was flagged in the sources RelayShield actually queried. It is deliberately never mapped to a \"Good\" DBotScore, since that would claim more certainty than the data supports. See the README's DBotScore section for the exact mapping.":
      "RelayShieldのリアルタイムなアイデンティティ侵害およびエージェントセキュリティに関する脅威インテリジェンス。汎用の `domain`/`ip`/`email` レピュテーションコマンド(既存のエンリッチメントPlaybookから自動的に呼び出されます)に加え、MCPサーバーレジストリのリスク、証明書の有効期限、サプライチェーンベンダーのリスクに関するRelayShield固有のコマンドを実装しています。コマンドの結果が \"No known finding\" の場合、RelayShieldが実際に照会したソースで何も検出されなかったことを意味します。データが裏付ける以上の確実性を示してしまうため、DBotScoreの \"Good\" には意図的にマッピングされません。正確なマッピングについては、READMEのDBotScoreセクションを参照してください。",
    "Retrieve and monitor internal security findings for your organization, and critical findings across your supplier (third-party) portfolio, from the Panorays platform to automate incident response within Cortex.":
      "Panoraysプラットフォームから、組織内のセキュリティ検出結果と、サプライヤー(サードパーティ)ポートフォリオ全体の重大な検出結果を取得して監視し、Cortex内でのインシデント対応を自動化します。",
    "RiskSense is a cloud-based platform that provides vulnerability management and prioritization to measure and control cybersecurity risk.":
      "RiskSenseは、サイバーセキュリティリスクを測定および制御するための脆弱性の管理と優先順位付けを提供する、クラウドベースのプラットフォームです。",
    "Run queries on Splunk and fetch Notable Events (Splunk ES versions up to 8.2).":
      "Splunkでクエリを実行し、Notable Eventsをフェッチします(Splunk ES 8.2までのバージョン)。",
    "Run queries on Splunk and fetch Splunk ES Findings and Investigations (Splunk ES 8.2+).":
      "Splunkでクエリを実行し、Splunk ESのFindingsとInvestigationsをフェッチします(Splunk ES 8.2以降)。",
    "SaaS Security API is a cloud-based service that you can connect directly to your sanctioned SaaS applications using the cloud app’s API to provide data classification, sharing and permission visibility, and threat detection. This Content Pack provides insights into risks posed by data exposure and policy violations and enables you to use Cortex to effectively manage the incidents discovered by SaaS Security API.":
      "SaaS Security APIは、クラウドアプリのAPIを使用して、承認済みのSaaSアプリケーションに直接接続できるクラウドベースのサービスで、データ分類、共有とアクセス許可の可視化、脅威検出を提供します。このコンテンツパックは、データ露出やポリシー違反によるリスクに関するインサイトを提供し、SaaS Security APIが検出したインシデントをCortexで効果的に管理できるようにします。",
    "SailPoint IdentityIQ context pack enables XSOAR customers to utilize the deep, enriched contextual data in the SailPoint predictive identity platform to better drive identity-aware security practices.":
      "SailPoint IdentityIQコンテキストパックにより、XSOARのお客様は、SailPointの予測型アイデンティティプラットフォームが持つ詳細で豊富なコンテキストデータを活用して、アイデンティティを意識したセキュリティ施策をさらに推進できます。",
    "Scan and govern AI models with Palo Alto Networks Prisma AIRS AI Supply Chain Security: model scans, evaluations, violations, labels, model groups, and security rules.":
      "Palo Alto Networks Prisma AIRS AI Supply Chain Securityで、AIモデルをスキャンして管理します: モデルスキャン、評価、違反、ラベル、モデルグループ、セキュリティルール。",
    "Search for specific issues":
      "特定の課題を検索する",
    "Select an Issue or Pull requests to Fetch":
      "フェッチする課題またはプルリクエストを選択",
    "Send messages and notifications to your Slack team.":
      "Slackチームにメッセージと通知を送信します。",
    "Separate pairs using":
      "ペアの区切りには次を使用します:",
    "Server Name":
      "サーバー名",
    "ServiceNow CMDB is a service‑centric foundation that proactively analyzes service‑impacting changes, identifies issues, and eliminates outages.":
      "ServiceNow CMDBは、サービス中心の基盤であり、サービスに影響する変更を事前に分析し、問題を特定して、停止を排除します。",
    "Show CSV format as Text":
      "CSV形式をテキストとして表示",
    "SIGNL4 offers critical alerting, incident response and service dispatching for operating critical infrastructure. It alerts you persistently via app push, SMS text, voice calls, and email including tracking, escalation, on-call duty scheduling and collaboration.":
      "SIGNL4は、重要インフラを運用するための重要なアラート通知、インシデント対応、サービスディスパッチを提供します。アプリのプッシュ通知、SMS、音声通話、メールで継続的に通知し、追跡、エスカレーション、オンコール当番のスケジュール、コラボレーションにも対応します。",
    "Space-separated permission identifiers.":
      "スペース区切りのアクセス許可識別子。",
    "Specify arguments for the configuration of an instance name-value pairs, for example:":
      "インスタンスの構成用に、名前と値のペアで引数を指定します。例:",
    "Specify the value to use when passing the API key as a header or parameter value.":
      "APIキーをヘッダーまたはパラメーター値として渡す際に使用する値を指定します。",
    "Specify the value to use when passing the API key as a header or parameter value. e.g., X-PAN-KEY: API_KEY_HERE (X-PAN-KEY is the value specified in this field) - For a parameterized call, this would be appended to the URL as &X-PAN-KEY=KEY_HERE - - For a header-based call, this would appear in the header as 'X-PAN-KEY': KEY_HERE":
      "APIキーをヘッダーまたはパラメーター値として渡す際に使用する値を指定します。例: X-PAN-KEY: API_KEY_HERE(X-PAN-KEY はこのフィールドで指定された値です) - パラメーター化された呼び出しの場合、URLに &X-PAN-KEY=KEY_HERE として追加されます - - ヘッダーベースの呼び出しの場合、ヘッダーに 'X-PAN-KEY': KEY_HERE として表示されます",
    "SQL DB":
      "SQL DB",
    "Strip ports from URLs":
      "URLからポートを削除",
    "Strip protocols from URLs":
      "URLからプロトコルを削除",
    "Symantec Messaging Gateway protects against spam, malware, targeted attacks and provides advanced content filtering, data loss prevention, and email encryption.":
      "Symantec Messaging Gatewayは、スパム、マルウェア、標的型攻撃から保護し、高度なコンテンツフィルタリング、データ損失防止、メール暗号化を提供します。",
    "Symantec ProxySG: Default Category":
      "Symantec ProxySG: デフォルトカテゴリー",
    "Symantec ProxySG: Listed Categories":
      "Symantec ProxySG: 一覧表示するカテゴリー",
    "Tavily is a web service that provides real-time web search and retrieval capabilities through an API, enabling developers to fetch and extract relevant information from the internet in structured formats like JSON.":
      "Tavilyは、APIを通じてリアルタイムのWeb検索と取得機能を提供するWebサービスで、開発者がインターネットから関連情報をJSONなどの構造化形式でフェッチして抽出できるようにします。",
    "The fetch parameter should be the same as the column name, the limit is handled outside the query.":
      "フェッチパラメーターは列名と同じにする必要があります。上限はクエリの外側で処理されます。",
    "The following are procedure examples for different SQL databases:":
      "次に、さまざまなSQLデータベースのプロシージャの例を示します:",
    "The format of the exported list.":
      "エクスポートされるリストの形式。",
    "The Generic Export Indicators Service is a long-running integration. For more information about long-running integrations, check out the":
      "Generic Export Indicators Serviceは、長時間実行されるインテグレーションです。長時間実行されるインテグレーションの詳細については、次を参照してください:",
    "The Generic SQL query or procedure to fetch according to.":
      "フェッチ対象のGeneric SQLクエリまたはプロシージャ。",
    "The Generic SQL query/procedure.":
      "Generic SQLクエリ/プロシージャ。",
    "The integration supports the following workflows:":
      "このインテグレーションは、次のワークフローをサポートします:",
    "The maximum number of entries in the output. If no value is provided, will use the value specified in the":
      "出力するエントリの最大数。値を指定しない場合は、次に指定された値が使用されます:",
    "The name of the requested repository":
      "リクエストされたリポジトリの名前",
    "The name to use for the server in tool names. If not provided, the default name returned by the server will be used.":
      "ツール名の中でサーバーに使用する名前。指定しない場合は、サーバーが返すデフォルトの名前が使用されます。",
    "The output format. Supports":
      "出力形式。サポート:",
    "The Prisma Cloud IAM API consists of a set of API endpoints that allow customers to perform CRUD operation on their user profiles.":
      "Prisma Cloud IAM APIは、お客様が自身のユーザープロファイルに対してCRUD操作を実行できるようにする、一連のAPIエンドポイントで構成されています。",
    "The procedure should contain conditions on the fetch parameter: (In the example provided, ‘timestamp’ is a fetch parameter)":
      "プロシージャには、フェッチパラメーターに対する条件を含める必要があります(例では、‘timestamp’ がフェッチパラメーターです)",
    "The procedure should contain conditions on the fetch parameter: (In the example provided, ‘ts’ is a fetch timestamp parameter)":
      "プロシージャには、フェッチパラメーターに対する条件を含める必要があります(例では、‘ts’ がフェッチのタイムスタンプパラメーターです)",
    "The query to run to update the indicators list. To view expected results, run the following command from the Cortex CLI `!findIndicators query=<your query>`. An empty value may load unwanted indicators. See integration docs for troubleshooting information.":
      "インジケーターリストを更新するために実行するクエリ。想定される結果を確認するには、Cortex CLIで次のコマンドを実行します: `!findIndicators query=<your query>`。空の値を指定すると、不要なインジケーターが読み込まれる可能性があります。トラブルシューティング情報については、インテグレーションのドキュメントを参照してください。",
    "The query used to retrieve indicators from the system. If you are using this argument, no more than 100,000 can be exported through the EDL.":
      "システムからインジケーターを取得するために使用するクエリ。この引数を使用する場合、EDL経由でエクスポートできるのは最大100,000件です。",
    "The REST API URL":
      "REST APIのURL",
    "The SailPoint Identity Security platform can be configured either on-prem/single tenant SaaS, or multi-tenant. This package is intended to be used with the SaaS, multi-tenant solution, IdentityNow.":
      "SailPoint Identity Securityプラットフォームは、オンプレミス/シングルテナントSaaS、またはマルチテナントのいずれかで構成できます。このパッケージは、SaaSのマルチテナントソリューションであるIdentityNowでの使用を想定しています。",
    "The starting entry index from which to export the indicators when index 0 is the first position.":
      "インデックス0を先頭位置としたときの、インジケーターのエクスポートを開始する先頭エントリのインデックス。",
    "The ThreatX integration allows automated enforcement and intel gathering actions.":
      "ThreatXインテグレーションにより、自動化された適用処理とインテリジェンス収集アクションが可能になります。",
    "The URL for the OAuth 2.0 authorization endpoint. If not provided, the default will be the origin of the `Server URL` followed by `/oauth2/authorize`.":
      "OAuth 2.0認可エンドポイントのURL。指定しない場合、デフォルトは `Server URL` のオリジンに `/oauth2/authorize` を付加したものになります。",
    "The URL for the OAuth 2.0 authorization endpoint. If not provided, the default will be the origin of the `Server URL` followed by `/oauth2/authorize`. For example, if `Server URL` is `https://example.com/mcp`, the default `Authorization Endpoint` will be `https://example.com/oauth2/authorize`.":
      "OAuth 2.0認可エンドポイントのURL。指定しない場合、デフォルトは `Server URL` のオリジンに `/oauth2/authorize` を付加したものになります。たとえば、`Server URL` が `https://example.com/mcp` の場合、デフォルトの `Authorization Endpoint` は `https://example.com/oauth2/authorize` になります。",
    "The URL for the OAuth 2.0 token endpoint. If not provided, the default will be the origin of the `Server URL` followed by `/oauth2/token`.":
      "OAuth 2.0トークンエンドポイントのURL。指定しない場合、デフォルトは `Server URL` のオリジンに `/oauth2/token` を付加したものになります。",
    "The URL for the OAuth 2.0 token endpoint. If not provided, the default will be the origin of the `Server URL` followed by `/oauth2/token`. For example, if `Server URL` is `https://example.com/mcp`, the default `Token Endpoint` will be `https://example.com/oauth2/token`.":
      "OAuth 2.0トークンエンドポイントのURL。指定しない場合、デフォルトは `Server URL` のオリジンに `/oauth2/token` を付加したものになります。たとえば、`Server URL` が `https://example.com/mcp` の場合、デフォルトの `Token Endpoint` は `https://example.com/oauth2/token` になります。",
    "There are two options to fetch incidents, determined by the ‘Fetch by’ configuration:":
      "インシデントをフェッチする方法は2つあり、‘Fetch by’ の構成によって決まります:",
    "There are two options to use to bind variables:":
      "変数をバインドするには、2つの方法があります:",
    "This does not happen in “port” listen mode, that’s why “route” mode should be used.":
      "“port”リッスンモードではこの問題は発生しないため、“route”モードを使用する必要があります。",
    "This integration allows the security operations center to create and manage incidents based on Vectra Events Detections.":
      "このインテグレーションにより、セキュリティオペレーションセンターは、Vectra Events Detectionsに基づいてインシデントを作成および管理できます。",
    "This integration allows you to connect securely with any MCP server and access its tools in real time.":
      "このインテグレーションにより、任意のMCPサーバーに安全に接続し、そのツールにリアルタイムでアクセスできます。",
    "This integration allows you to manage and interact with Microsoft security and compliance content search.":
      "このインテグレーションにより、Microsoftのセキュリティおよびコンプライアンスのコンテンツ検索を管理し、操作できます。",
    "This integration is configured automatically as part of the Okta Standard Connector. Do not configure this integration directly — set it up from the connector page instead.":
      "このインテグレーションは、Oktaスタンダードコネクタの一部として自動的に構成されます。このインテグレーションを直接構成しないでください。代わりに、コネクタのページから設定してください。",
    "This integration provides a method for executing HTTP API calls to specific API endpoints used in one-off scenarios not covered by other XSOAR integrations. This integration supports unauthenticated and authenticated API calls over HTTPS, using API key and basic HTTP authentication methods.":
      "このインテグレーションは、他のXSOARインテグレーションではカバーされない単発のシナリオで使用される特定のAPIエンドポイントに対して、HTTP API呼び出しを実行する方法を提供します。APIキーとHTTPベーシック認証方式を使用して、HTTPS経由の認証なしおよび認証ありのAPI呼び出しをサポートします。",
    "This integration transfers files between Cortex and a remote machine and executes commands on the remote machine.":
      "このインテグレーションは、Cortexとリモートマシンの間でファイルを転送し、リモートマシン上でコマンドを実行します。",
    "This is a feed integration for extracting indicators from ServiceNow.":
      "ServiceNowからインジケーターを抽出するためのフィードインテグレーションです。",
    "This is the Orion Malware integration. Analyzes hash and files with static and dynamic analysis.":
      "これはOrion Malwareインテグレーションです。静的および動的分析でハッシュとファイルを分析します。",
    "To generate your personal access token, visit:":
      "個人用アクセストークンを生成するには、次にアクセスします:",
    "TrendAI™ Apex One central automation to manage agents and User-Defined Suspicious Objects.":
      "TrendAI™ Apex Oneの中央自動化により、エージェントとユーザー定義の不審オブジェクトを管理します。",
    "Troubleshoot":
      "トラブルシューティング",
    "Truncate URL length":
      "URLの長さを切り詰める",
    "Unit 42 Feed integration provides threat intelligence from Palo Alto Networks Unit 42 research team.":
      "Unit 42 Feedインテグレーションは、Palo Alto NetworksのUnit 42リサーチチームによる脅威インテリジェンスを提供します。",
    "Update an issue":
      "課題を更新する",
    "Update list on demand only":
      "オンデマンドでのみリストを更新",
    "Use an SSL connection":
      "SSL接続を使用",
    "Use both bind variable names and values, for example:":
      "バインド変数の名前と値の両方を使用します。例:",
    "Use Connection Pooling":
      "接続プールを使用",
    "Use LDAP (Teradata only)":
      "LDAPを使用(Teradataのみ)",
    "Use only bind variable values, for example:":
      "バインド変数の値のみを使用します。例:",
    "Use the following arguments in the URL to change the request:":
      "リクエストを変更するには、URLで次の引数を使用します:",
    "Use the Mimecast integration to manage email security, continuity, and archiving services.":
      "Mimecastインテグレーションを使用して、メールセキュリティ、継続性、アーカイブサービスを管理します。",
    "Use the O365 File Management (Onedrive/Sharepoint/Teams) integration to enable your app to get authorized access to files in OneDrive, SharePoint, and MS Teams across your entire organization. This integration requires admin consent.":
      "O365 File Management(OneDrive/SharePoint/Teams)インテグレーションを使用して、組織全体のOneDrive、SharePoint、MS Teams内のファイルにアプリが承認済みアクセスできるようにします。このインテグレーションには管理者の同意が必要です。",
    "Use the Proofpoint Threat Response integration to orchestrate and automate incident response.":
      "Proofpoint Threat Responseインテグレーションを使用して、インシデント対応をオーケストレーションし、自動化します。",
    "Use The ServiceNow IT Service Management (ITSM) solution to modernize the way you manage and deliver services to your users.":
      "ServiceNow IT Service Management(ITSM)ソリューションを使用して、ユーザーへのサービスの管理と提供の方法を刷新します。",
    "Use the SpecterOpsBloodHoundEnterprise integration to retrieve attack path findings from BloodHound Enterprise to streamline incident creation and investigation.":
      "SpecterOpsBloodHoundEnterpriseインテグレーションを使用して、BloodHound Enterpriseからアタックパスの検出結果を取得し、インシデントの作成と調査を効率化します。",
    "Use the Workday IAM Integration as part of the IAM premium pack.":
      "IAMプレミアムパックの一部として、Workday IAMインテグレーションを使用します。",
    "Use the Zoom integration to manage your Zoom users and meetings.":
      "Zoomインテグレーションを使用して、Zoomのユーザーとミーティングを管理します。",
    "Use this feed integration to fetch VirusTotal Livehunt notifications as indicators.":
      "このフィードインテグレーションを使用して、VirusTotal Livehuntの通知をインジケーターとしてフェッチします。",
    "Use this feed integration to fetch VirusTotal Retrohunt matches.":
      "このフィードインテグレーションを使用して、VirusTotal Retrohuntの一致結果をフェッチします。",
    "Use this integration to connect securely with a ServiceNow Model Context Protocol (MCP) server and access its tools in real time.":
      "このインテグレーションを使用して、ServiceNow Model Context Protocol(MCP)サーバーに安全に接続し、そのツールにリアルタイムでアクセスします。",
    "Use TypeSafe Jev typed judgments and calibrated probabilities in Cortex XSIAM and XSOAR playbooks.":
      "Cortex XSIAMおよびXSOARのPlaybookで、TypeSafe Jevの型付き判定と較正済み確率を使用します。",
    "Username (Blank when using API key)":
      "ユーザー名(APIキーを使用する場合は空白)",
    "Username & Password":
      "ユーザー名とパスワード",
    "Username of the repository owner, for example: github.com/repos/{_owner_}/{repo}/issues":
      "リポジトリ所有者のユーザー名。例: github.com/repos/{_owner_}/{repo}/issues",
    "Uses the Sysdig agent to respond to malicious activity by triggering different actions at the host or container level, such as killing a container, quarantining a file, or performing a system capture.":
      "Sysdigエージェントを使用して、コンテナーの強制終了、ファイルの隔離、システムキャプチャの実行など、ホストまたはコンテナーレベルでさまざまなアクションをトリガーし、悪意のあるアクティビティに対応します。",
    "Validate Cortex ASM-discovered exposures with Tenzai's agentic penetration testing. Create a scan for an exposure, poll it to completion, and fetch the verdict and evidence back into the Cortex issue.":
      "Tenzaiのエージェント型ペネトレーションテストで、Cortex ASMが検出したエクスポージャーを検証します。エクスポージャーに対するスキャンを作成し、完了までポーリングして、判定結果とエビデンスをCortexのイシューにフェッチして戻します。",
    "VMware Carbon Black App Control (formerly known as Carbon Black Enterprise Protection) is a next-generation endpoint threat prevention solution to deliver a portfolio of protection policies, real-time visibility across environments, and comprehensive compliance rule sets in a single platform. This integration only supports Carbon Black on-premise APIs.":
      "VMware Carbon Black App Control(旧称Carbon Black Enterprise Protection)は、保護ポリシー、環境全体のリアルタイムの可視性、包括的なコンプライアンスルールセットを1つのプラットフォームで提供する、次世代のエンドポイント脅威防御ソリューションです。このインテグレーションは、Carbon Blackのオンプレミス版APIのみをサポートします。",
    "VMware Carbon Black EDR (formerly known as Carbon Black Response).":
      "VMware Carbon Black EDR(旧称Carbon Black Response)。",
    "Vulnerability management solution to help reduce threat exposure.":
      "脅威エクスポージャーの低減に役立つ脆弱性管理ソリューション。",
    "When ‘Fetch by’ is ‘ID and timestamp’, handling the ID occurs internally and has no reference in the query.":
      "‘Fetch by’ が ‘ID and timestamp’ の場合、IDの処理は内部で行われ、クエリ内では参照されません。",
    "When ‘Fetch by’ is ‘Unique ascending ID’ or ‘Unique timestamp’, make sure to create the procedure with ‘>’ and not ‘>=’ in the condition on the timestamp/id field.":
      "‘Fetch by’ が ‘Unique ascending ID’ または ‘Unique timestamp’ の場合は、タイムスタンプ/IDフィールドの条件で ‘>=’ ではなく ‘>’ を使用してプロシージャを作成してください。",
    "When enabled, the integration queries the server using full queries (overwrites the \"Exported Fields\" parameter). Advanced configuration to be used only if instructed by Cortex Support, or you have encountered log errors in the form of: msgpack: invalid code.":
      "有効にすると、インテグレーションは完全なクエリを使用してサーバーに問い合わせます(\"Exported Fields\" パラメーターを上書きします)。Cortexサポートから指示された場合、または msgpack: invalid code. という形式のログエラーが発生した場合にのみ使用する高度な構成です。",
    "When Running in On-Demand Mode":
      "オンデマンドモードで実行する場合",
    "When set to true and the certificate and private key are provided, the HSTS header is added to all requests.":
      "trueに設定し、証明書と秘密鍵が指定されている場合、HSTSヘッダーがすべてのリクエストに追加されます。",
    "When using more than one server in High Availability (HA) mode, the External Dynamic List (EDL) should be configured to listen on a route, not on a port.":
      "高可用性(HA)モードで複数のサーバーを使用する場合、External Dynamic List(EDL)は、ポートではなくルートでリッスンするように構成する必要があります。",
    "When using queries, there are two requirements, and the third one depends on the database.":
      "クエリを使用する場合、2つの要件があり、3つ目はデータベースによって異なります。",
    "Workday offers enterprise-level software solutions for financial management, human resources, and planning.":
      "Workdayは、財務管理、人事、計画のためのエンタープライズレベルのソフトウェアソリューションを提供します。",
    "XQL Query Engine enables you to run XQL queries on your data sources.":
      "XQL Query Engineを使用すると、データソースに対してXQLクエリを実行できます。",
    "XSOAR Indicator Page Size":
      "XSOARインジケーターのページサイズ",
    "You can access the External Dynamic List at the following url:":
      "External Dynamic Listには、次のURLでアクセスできます:",
    "Zscaler Internet Access via ZIdentity OAuth 2.0. Provides URL/IP/domain classification, denylist and allowlist management, URL category management, sandbox reporting, user and group management, and IP destination group management using OAuth 2.0 client credentials authentication through ZIdentity.":
      "ZIdentity OAuth 2.0経由のZscaler Internet Access。OAuth 2.0クライアント認証情報による認証をZIdentity経由で使用して、URL/IP/ドメインの分類、拒否リストと許可リストの管理、URLカテゴリーの管理、サンドボックスレポート、ユーザーとグループの管理、IP宛先グループの管理を提供します。",
    "Zscaler is a cloud security solution built for performance and flexible scalability. This integration enables you to manage URL and IP address allow lists and block lists, manage and update categories, get Sandbox reports, create, manage, and update IP destination groups and manually log in, log out, and activate changes in a Zscaler session.":
      "Zscalerは、パフォーマンスと柔軟な拡張性を重視して構築されたクラウドセキュリティソリューションです。このインテグレーションにより、URLとIPアドレスの許可リストとブロックリストの管理、カテゴリーの管理と更新、サンドボックスレポートの取得、IP宛先グループの作成・管理・更新、Zscalerセッションでの手動のログイン、ログアウト、変更のアクティブ化が可能になります。",

    // --- Batch: Google Workspace / GitHub / GitLab / Terraform / Polygon integration docs and parameters (09:14 export) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    "A maximum of 200 emails per fetch (even if a higher number is configured). Default is 50.":
      "フェッチ1回あたり最大200通のメールです(それより大きい数値が構成されていても同様です)。デフォルトは50です。",
    "A maximum of 200 emails per fetch (even if a higher number is configured). The default is 50.":
      "フェッチ1回あたり最大200通のメールです(それより大きい数値が構成されていても同様です)。デフォルトは50です。",
    "A unique identifier of the customer's Google account.":
      "お客様のGoogleアカウントの一意の識別子。",
    "Add the following variables to the GitHub actions credential store:":
      "GitHub Actionsの認証情報ストアに、次の変数を追加します:",
    "Admin Email":
      "管理者のメールアドレス",
    "Advanced Configuration Parameters":
      "詳細構成パラメーター",
    "Allows you to specify the e-mail address from which to send e-mails from.":
      "メールの送信元とするメールアドレスを指定できます。",
    "API Key was generated in 2.":
      "APIキーは2で生成されました。",
    "API to Authorize":
      "認可するAPI",
    "Application Authorization Flow":
      "アプリケーション認可フロー",
    "Auth Code (run the !gmail-auth-link command to start the auth flow - see Help section)":
      "認証コード(認証フローを開始するには !gmail-auth-link コマンドを実行します - ヘルプセクションを参照)",
    "Auth Redirect URI":
      "認証リダイレクトURI",
    "Authorize Application Security to access your GitHub (SaaS) account.":
      "Application SecurityにGitHub(SaaS)アカウントへのアクセスを許可します。",
    "Authorize Cortex GitHub App":
      "Cortex GitHub Appを承認する",
    "Automatically create user if not found in update and enable commands":
      "更新コマンドおよび有効化コマンドでユーザーが見つからない場合に、ユーザーを自動的に作成する",
    "Before you begin, you'll need to add your API key and API ID to the GitHub Actions secrets.":
      "開始する前に、APIキーとAPI IDをGitHub Actionsのシークレットに追加する必要があります。",
    "Before you begin, you'll need to add your API key and API ID to the GitHub Actions secrets. Please copy and use the variable names suggested below. If needed, you can generate a new token using the link below, copy and use the generated values as your secrets values.":
      "開始する前に、APIキーとAPI IDをGitHub Actionsのシークレットに追加する必要があります。以下に示す変数名をコピーして使用してください。必要に応じて、以下のリンクから新しいトークンを生成し、生成された値をシークレットの値としてコピーして使用できます。",
    "Choose GitHub App Type":
      "GitHub Appの種類を選択",
    "Click the role you want to assign (the appropriate role).":
      "割り当てるロール(適切なロール)をクリックします。",
    "Commands and its scopes":
      "コマンドとそのスコープ",
    "Configure a service account and retrieve its key in JSON format by following the steps mentioned here:":
      "サービスアカウントを構成し、ここに記載された手順に従って、そのキーをJSON形式で取得します:",
    "Configure a service account for Google Sheets - (per project)":
      "Google Sheets用のサービスアカウントを構成する - (プロジェクトごと)",
    "Configure an API account on G Suite Admin":
      "G Suite管理でAPIアカウントを構成する",
    "create a Service Account file with a Private Key and authorize the API":
      "秘密鍵を含むサービスアカウントファイルを作成し、APIを承認します",
    "Create a Fine-grained Personal Access Token":
      "Fine-grained Personal Access Tokenを作成する",
    "Create an API token":
      "APIトークンを作成する",
    "Customer ID":
      "カスタマーID",
    "Cxxxxxxxx is your Immutable Google Apps ID (customerId).":
      "Cxxxxxxxxは、不変のGoogle Apps ID(customerId)です。",
    "Default reports language":
      "デフォルトのレポート言語",
    "Default Search Scope":
      "デフォルトの検索スコープ",
    "Default to US (app.terraform.io)":
      "US(app.terraform.io)をデフォルトにする",
    "Email - Associate to Google Drive":
      "メール - Google Driveに関連付ける",
    "Email of user":
      "ユーザーのメールアドレス",
    "Email of user with admin capabilities":
      "管理者権限を持つユーザーのメールアドレス",
    "Email of user with admin privileges":
      "管理者権限を持つユーザーのメールアドレス",
    "Emails":
      "メール",
    "Enable Google Workspace Log Collection":
      "Google Workspaceログ収集を有効にする",
    "Enable Read-Only Tools":
      "読み取り専用ツールを有効にする",
    "Enabled Toolsets":
      "有効なツールセット",
    "Events query (e.g. \"from:Demisto\")":
      "イベントクエリ(例: \"from:Demisto\")",
    "Events query (e.g., \"from:example@demisto.com\")":
      "イベントクエリ(例: \"from:example@demisto.com\")",
    "Events search query":
      "イベント検索クエリ",
    "Events user key":
      "イベントのユーザーキー",
    "Events user key (e.g. example@demisto.com)":
      "イベントのユーザーキー(例: example@demisto.com)",
    "Existing Customer Owned GitHub App":
      "既存のお客様所有のGitHub App",
    "First fetch timestamp, in days.":
      "最初のフェッチ時のタイムスタンプ(日数)。",
    "Follow the steps here to create such a private key and authorize the API for usage:":
      "次の手順に従って、このような秘密鍵を作成し、APIの使用を承認します:",
    "For detailed documentation on available toolsets, refer to:":
      "利用可能なツールセットの詳細なドキュメントについては、次を参照してください:",
    "For the email user param, please choose a user with admin permissions and make sure that you follow the steps to perform Google Apps Domain-Wide Delegation of Authority.":
      "メールユーザーのパラメーターには、管理者権限を持つユーザーを選択し、Google Apps Domain-Wide Delegation of Authorityの手順を必ず実施してください。",
    "For the email user parameter, select a user with admin permissions and make sure that you follow the steps to perform Google Apps Domain-Wide Delegation of Authority.":
      "メールユーザーのパラメーターには、管理者権限を持つユーザーを選択し、Google Apps Domain-Wide Delegation of Authorityの手順を必ず実施してください。",
    "Function":
      "関数",
    "Go to Admin roles.":
      "Admin rolesに移動します。",
    "Google documentation":
      "Googleのドキュメント",
    "Google Sheets Integration":
      "Google Sheetsインテグレーション",
    "Google Sheets is a spreadsheet program that is part of the free cloud-based Google Docs Editors suite offered by Google.":
      "Google Sheetsは、Googleが提供する無料のクラウドベースのGoogle Docs Editorsスイートに含まれるスプレッドシートプログラムです。",
    "Google’s API Documentation":
      "GoogleのAPIドキュメント",
    "Grant the Compute Admin permission to the Service Account to enable the Service Account to perform certain Google Cloud API commands.":
      "Compute Adminの権限をサービスアカウントに付与して、サービスアカウントが特定のGoogle Cloud APIコマンドを実行できるようにします。",
    "If a non-admin user is the user for the integration’s parameter, the test button will fail on a 403 error.":
      "インテグレーションのパラメーターのユーザーが管理者ではない場合、テストボタンは403エラーで失敗します。",
    "If no toolsets are selected, GitHub's default toolsets 'context', 'repos', 'issues', 'pull_requests', and 'users' will be enabled.":
      "ツールセットが選択されていない場合、GitHubのデフォルトのツールセット 'context'、'repos'、'issues'、'pull_requests'、'users' が有効になります。",
    "Immutable Google Apps ID":
      "不変のGoogle Apps ID",
    "In Cortex, configure an instance of the Google Cloud Compute integration. For the Service Account Private Key parameter, add the Service Account Private Key file contents (JSON).":
      "Cortexで、Google Cloud Computeインテグレーションのインスタンスを構成します。Service Account Private Keyパラメーターには、サービスアカウントの秘密鍵ファイルの内容(JSON)を追加します。",
    "In order to fetch user roles, please authrize this api too:":
      "ユーザーロールをフェッチするには、このAPIも承認してください:",
    "In order to revoke user roles, please authrize this api too:":
      "ユーザーロールを取り消すには、このAPIも承認してください:",
    "In order to revoke/fetch user role, you will need the Immutable Google Apps ID param.":
      "ユーザーロールを取り消す/フェッチするには、Immutable Google Apps IDパラメーターが必要です。",
    "In order to search user mailboxes, please authrize this api too:":
      "ユーザーのメールボックスを検索するには、このAPIも承認してください:",
    "In order to to fetch mobile info, please authrize this api too:":
      "モバイル情報をフェッチするには、このAPIも承認してください:",
    "In order to to fetch user security tokens, please authrize this api too:":
      "ユーザーのセキュリティトークンをフェッチするには、このAPIも承認してください:",
    "In order to to preform actions on chorme devices, please authrize this api too:":
      "Chromeデバイスに対してアクションを実行するには、このAPIも承認してください:",
    "In order to to preform actions on mobile devices, please authrize this api too:":
      "モバイルデバイスに対してアクションを実行するには、このAPIも承認してください:",
    "It is necessary to authrize the next API’s for that service account:":
      "そのサービスアカウントに対して、次のAPIを承認する必要があります:",
    "Mailbox actions do not require admin previleges.":
      "メールボックスのアクションには、管理者権限は不要です。",
    "Maximum number of emails to pull per fetch":
      "フェッチ1回あたりに取得するメールの最大数",
    "Must be a valid URL":
      "有効なURLを入力してください",
    "Navigate to Profile and click Generate auth token.":
      "Profileに移動し、Generate auth tokenをクリックします。",
    "Open THF Huntbox web interface. (It may be like https://huntbox.group-ib.com)":
      "Huntbox Webインターフェースを開きます(https://huntbox.group-ib.com のようなURLの場合があります)。",
    "Organization domain URL":
      "組織ドメインURL",
    "Please follow the documentation below for step by step guide on how to onboard your GitLab instance":
      "GitLabインスタンスをオンボードする手順については、以下のドキュメントを参照してください",
    "Precedence of this will be admin_email in the command argument > admin email in the integration configuration > admin role provided to the service account.":
      "優先順位は、コマンド引数の admin_email > インテグレーション構成の管理者メールアドレス > サービスアカウントに付与された管理者ロール、の順です。",
    "Provide at least one of the scopes mentioned for each command.":
      "各コマンドについて、記載されているスコープのうち少なくとも1つを指定してください。",
    "Raise error an empty result":
      "結果が空の場合にエラーを発生させる",
    "Register":
      "登録",
    "Review the requested permissions and select repository access for Application Security:":
      "要求されたアクセス許可を確認し、Application Securityのリポジトリアクセスを選択します:",
    "Revoke/Fetch User Roles":
      "ユーザーロールの取り消し/フェッチ",
    "See the Help tab for details on the Immutable Google Apps ID.":
      "Immutable Google Apps IDの詳細については、ヘルプタブを参照してください。",
    "Select a GitHub organization where you want to install Application Security.":
      "Application SecurityをインストールするGitHub組織を選択します。",
    "Select Organization":
      "組織を選択",
    "Select Workspaces":
      "ワークスペースを選択",
    "Send as":
      "送信者として",
    "Server URL (e.g., https://huntbox.group-ib.com)":
      "サーバーURL(例: https://huntbox.group-ib.com)",
    "Service Account Key":
      "サービスアカウントキー",
    "Service account private key file contents (JSON)":
      "サービスアカウントの秘密鍵ファイルの内容(JSON)",
    "Service Account Private Key file contents (JSON)":
      "サービスアカウントの秘密鍵ファイルの内容(JSON)",
    "Terraform Region":
      "Terraformリージョン",
    "the Integration Documentation":
      "インテグレーションのドキュメント",
    "The Personal Access Token is used to authenticate requests to the GitLab REST API. It must have the required permissions to access your organization's configuration.":
      "個人用アクセストークン(Personal Access Token)は、GitLab REST APIへのリクエストの認証に使用されます。組織の構成にアクセスするために必要な権限が付与されている必要があります。",
    "The required admin permissions are only used for user actions (i.e., creating users, getting user informations, deleting users):":
      "必要な管理者権限は、ユーザーに対するアクション(ユーザーの作成、ユーザー情報の取得、ユーザーの削除など)にのみ使用されます:",
    "The scope for this API":
      "このAPIのスコープ",
    "There you will see URLs in the format:":
      "次の形式のURLが表示されます:",
    "This section explains how to configure the instance of Polygon in Cortex.":
      "このセクションでは、CortexでPolygonのインスタンスを構成する方法を説明します。",
    "To allow Cortex to access Gmail, you will need to create an OAuth2 App and approve the authorization flow. Please see the full documentation at:":
      "CortexからGmailにアクセスするには、OAuth2アプリを作成し、認可フローを承認する必要があります。詳細なドキュメントは次を参照してください:",
    "To create a new token:":
      "新しいトークンを作成するには:",
    "To get an Immutable Google Apps ID (or customerId):":
      "Immutable Google Apps ID(customerId)を取得するには:",
    "Token":
      "トークン",
    "Transporter Connection":
      "トランスポーター接続",
    "Use the Google Maps Geocoding API.":
      "Google Maps Geocoding APIを使用します。",
    "Use this integration to create, get, modify, and format spreadsheets.":
      "このインテグレーションを使用して、スプレッドシートの作成、取得、変更、書式設定を行います。",
    "Use this to specify the email account to search for messages with the search query. By default, the integration uses the email address specified in the credentials.":
      "検索クエリでメッセージを検索するメールアカウントを指定します。デフォルトでは、認証情報に指定されたメールアドレスが使用されます。",
    "Used for searching emails in the inbox. The query language follows the Gmail query specification. For example, \"from:example@demisto.com is:unread\".":
      "受信トレイ内のメールの検索に使用します。クエリ言語はGmailのクエリ仕様に従います。例: \"from:example@demisto.com is:unread\"。",
    "User or Team Token":
      "ユーザートークンまたはチームトークン",
    "user settings":
      "ユーザー設定",
    "User's Service Account JSON":
      "ユーザーのサービスアカウントJSON",
    "When enabled, limits tools to read-only operations preventing any write/modification actions.":
      "有効にすると、ツールを読み取り専用の操作に制限し、書き込みや変更のアクションを防止します。",
    "You must be signed in as a super administrator for this task.":
      "このタスクを実行するには、スーパー管理者としてサインインしている必要があります。",
    "You will see there URLs in the format:":
      "そこに次の形式のURLが表示されます:",
    "Your private GitLab instance URL. For example, https://gitlab.example.com.":
      "プライベートGitLabインスタンスのURL。例: https://gitlab.example.com。",
    "Your server URL is the same as your Huntbox web interface URL.":
      "サーバーURLは、HuntboxのWebインターフェースのURLと同じです。",

    // --- Batch: Integration docs, parameter labels and tooltips for many integrations (12:04 export) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    "(default) — Auto-detect based on the platform.":
      "(デフォルト) — プラットフォームに基づいて自動検出します。",
    "(e.g., https://192.168.0.1)":
      "(例: https://192.168.0.1)",
    "(For Cortex) For use with HTTPS - the certificate that the service should use. (For Cortex and Cortex XSIAM) Custom certificates are supported only using engine.":
      "(Cortexの場合) HTTPSで使用する、サービスが使用すべき証明書です。(CortexおよびCortex XSIAMの場合) カスタム証明書はエンジンを使用する場合にのみサポートされます。",
    "(For Cortex) For use with HTTPS - the private key that the service should use. (For Cortex and Cortex XSIAM) When using an engine, configure a private API key. Not supported on the Cortex or Cortex XSIAM server.":
      "(Cortexの場合) HTTPSで使用する、サービスが使用すべき秘密鍵です。(CortexおよびCortex XSIAMの場合) エンジンを使用する場合は、プライベートAPIキーを設定します。CortexまたはCortex XSIAMサーバーではサポートされません。",
    "(for runtime scanning operations only)":
      "(ランタイムスキャン操作のみ)",
    "(if not already enabled)":
      "(まだ有効になっていない場合)",
    "(OAuth2 credentials for the management API)":
      "(管理APIのOAuth2認証情報)",
    "(optional) Configure a classifier and a mapper":
      "(オプション)分類子とマッパーを設定します",
    "(Optional) Create custom fields.":
      "(オプション)カスタムフィールドを作成します。",
    "2FA Token":
      "2FAトークン",
    "A comma-separated list of Application IDs. Run the ***saas-security-get-apps*** command to return the **Application ID**, **Name**, and **Type** for all applications.":
      "アプリケーションIDのカンマ区切りリストです。***saas-security-get-apps***コマンドを実行すると、すべてのアプリケーションの**Application ID**、**Name**、**Type**が返されます。",
    "A comma-separated list of ciphers to use. If none of the specified ciphers are agreed to by the server, an error message specifying the supported ciphers is returned.":
      "使用する暗号スイートのカンマ区切りリストです。指定した暗号スイートがいずれもサーバーで受け入れられない場合は、サポートされている暗号スイートを示すエラーメッセージが返されます。",
    "A comma-separated list of data profile names to request an exemption. Use \"*\" to allow everything.":
      "免除を要求するデータプロファイル名のカンマ区切りリストです。すべてを許可するには「*」を使用します。",
    "A comma-separated list of incident types to fetch from iZOOlogic.":
      "iZOOlogicからフェッチするインシデントタイプのカンマ区切りリストです。",
    "A comma-separated list of key algorithms to use. If none of the specified key algorithms are agreed to by the server, an error message specifying the supported key algorithms is returned.":
      "使用するキーアルゴリズムのカンマ区切りリストです。指定したキーアルゴリズムがいずれもサーバーで受け入れられない場合は、サポートされているキーアルゴリズムを示すエラーメッセージが返されます。",
    "A comma-separated list of Splunk status labels to mirror as closed Cortex incident (Example: Resolved,False-Positive).":
      "クローズ済みのCortexインシデントとしてミラーリングするSplunkのステータスラベルのカンマ区切りリストです(例: Resolved,False-Positive)。",
    "A command fails with a quota or payment error.":
      "コマンドがクォータエラーまたは支払いエラーで失敗します。",
    "A command returns “no known finding” for an indicator you expect to be flagged.":
      "フラグが立つと想定しているインジケーターに対して、コマンドが“no known finding”を返します。",
    "A CSV list of broker URLs in the format: [ssl://]<hostname>[:port]) Get the hostname and port from the `brokerlist.properties` file (in instructions). The broker should be reachable from Demisto server.":
      "[ssl://]<hostname>[:port])形式のブローカーURLのCSVリストです。ホスト名とポートは`brokerlist.properties`ファイル(手順内)から取得します。ブローカーはDemistoサーバーから到達可能である必要があります。",
    "A CSV of language codes of the language to use for OCR (leave empty to use defaults).":
      "OCRに使用する言語の言語コードのCSVです(空のままにするとデフォルトが使用されます)。",
    "A space-separated list of scopes that you want to consent to.":
      "同意するスコープのスペース区切りリストです。",
    "A Tenzai license is required to use this integration.":
      "このインテグレーションを使用するには、Tenzaiライセンスが必要です。",
    "A valid Magnet Automate instance.":
      "有効なMagnet Automateインスタンス。",
    "About team member product roles and access":
      "チームメンバーの製品ロールとアクセスについて",
    "Access ID - can be created in Sumo Logic under \"Settings\"":
      "アクセスID - Sumo Logicの「Settings」で作成できます",
    "Access key - can be created in Sumo Logic under \"Settings\"":
      "アクセスキー - Sumo Logicの「Settings」で作成できます",
    "Access the Panorama UI.":
      "Panorama UIにアクセスします。",
    "Access to Threatmon’s external API endpoints.":
      "Threatmonの外部APIエンドポイントへのアクセス。",
    "Access tokens are cached in the integration context and automatically refreshed when they expire.":
      "アクセストークンはインテグレーションコンテキストにキャッシュされ、有効期限が切れると自動的に更新されます。",
    "Access Your API Key":
      "APIキーへのアクセス",
    "Access Your Kenna API Key":
      "Kenna APIキーへのアクセス",
    "Access your VMRay environment.":
      "VMRay環境にアクセスします。",
    "Account ID (OAuth)":
      "アカウントID(OAuth)",
    "Account identifier":
      "アカウント識別子",
    "Add a incident name to be used for the created incident (if a mapper is not used)":
      "作成されるインシデントに使用するインシデント名を追加します(マッパーを使用しない場合)",
    "Add an instance of the integration and add the Workflow URL for the Teams channel.":
      "インテグレーションのインスタンスを追加し、TeamsチャネルのWorkflow URLを追加します。",
    "Add and map the custom field to the necessary mapper(s).":
      "カスタムフィールドを追加し、必要なマッパーにマッピングします。",
    "Add Custom Indicator Fields":
      "カスタムインジケーターフィールドの追加",
    "Add or create a service account with the proper privileges.":
      "適切な権限を持つサービスアカウントを追加または作成します。",
    "Add or remove Chrome options used to rasterize. Use for advanced troubleshooting. See Help.":
      "ラスタライズに使用するChromeオプションを追加または削除します。高度なトラブルシューティングに使用します。ヘルプを参照してください。",
    "Add relevant scopes.":
      "関連するスコープを追加します。",
    "Add the Demisto Bot to a Team":
      "チームにDemisto Botを追加します",
    "Add the integration instance in Cortex":
      "Cortexでインテグレーションインスタンスを追加します",
    "Add this tag to an entry to mirror it as a comment from Splunk.":
      "このタグをエントリに追加すると、Splunkからのコメントとしてミラーリングされます。",
    "Add this tag to an entry to mirror it as a comment to Splunk.":
      "このタグをエントリに追加すると、Splunkへのコメントとしてミラーリングされます。",
    "Additional connection parameters":
      "追加の接続パラメーター",
    "Additional malicious verdicts":
      "追加の悪意あり判定",
    "Additional Password":
      "追加のパスワード",
    "Additional Resources":
      "その他のリソース",
    "Additional Splunk status labels to close on mirror (Incoming Mirroring)":
      "ミラーリング時にクローズする追加のSplunkステータスラベル(受信ミラーリング)",
    "Address Type":
      "アドレスタイプ",
    "After adding the Cortex app, you will get an Access Token and Bot Token, which should be inserted in the integration instance configuration’s corresponding fields.":
      "Cortexアプリを追加すると、アクセストークンとボットトークンが取得されます。これらをインテグレーションインスタンス設定の対応するフィールドに入力します。",
    "After authorizing the Cortex app, you will get an ID, Token, and Key which need to be added to the relevant integration instance settings fields.":
      "Cortexアプリを承認すると、ID、トークン、キーが取得されます。これらを該当するインテグレーションインスタンスの設定フィールドに追加する必要があります。",
    "After authorizing the Cortex app, you will get an ID, Token, and Key which should be inserted in the relevant integration instance settings fields.":
      "Cortexアプリを承認すると、ID、トークン、キーが取得されます。これらを該当するインテグレーションインスタンスの設定フィールドに入力します。",
    "After you configure an integration instance, the first fetch will sychronize all Workday users (employees) in XSOAR by creating a User Profile indicator for each employee. The User Profile indicators store all employee profiles data, such as the employee’s name, street address, phone number, email address, etc.":
      "インテグレーションインスタンスを設定すると、最初のフェッチで、各従業員のUser Profileインジケーターを作成することで、すべてのWorkdayユーザー(従業員)がXSOARに同期されます。User Profileインジケーターには、従業員の氏名、住所、電話番号、メールアドレスなど、従業員プロファイルのすべてのデータが保存されます。",
    "After you successfully execute a command, a DBot message appears in the War Room with the command details.":
      "コマンドが正常に実行されると、コマンドの詳細を含むDBotメッセージがウォールームに表示されます。",
    "AIOps integration":
      "AIOpsインテグレーション",
    "Algorithm to sign generated JWT tokens with. Doesn't affect integration's functionality. Required and used if OAuth 2.0 is used for authentication. See detailed instructions on the 'Help' tab.":
      "生成されるJWTトークンの署名に使用するアルゴリズムです。インテグレーションの機能には影響しません。認証にOAuth 2.0を使用する場合は必須であり、使用されます。詳細な手順は「Help」タブを参照してください。",
    "An administrator must have a role that includes access to a specific REST API.":
      "管理者には、特定のREST APIへのアクセスを含むロールが必要です。",
    "An API key generated from the Magnet Automate interface.":
      "Magnet Automateインターフェースで生成したAPIキー。",
    "Analyze files and URLs using the SecneurX Analysis for accurate threat intelligence and high-quality IOCs.":
      "SecneurX Analysisを使用してファイルとURLを分析し、正確な脅威インテリジェンスと高品質なIOCを取得します。",
    "Analyze retro hunts, read live hunt notification,s and download files from VirusTotal.":
      "VirusTotalからレトロハントを分析し、ライブハントの通知を読み取り、ファイルをダウンロードします。",
    "Another point to note is that Splunk’s searches are based on the occurrence time behind the scenes. Meaning, Splunk itself uses occurrence time as its determining factor for bucket division and search.":
      "もう1点、Splunkの検索は内部的に発生時刻に基づいている点に注意してください。つまり、Splunk自体がバケット分割と検索の判断基準として発生時刻を使用します。",
    "Any tags removed from the Vectra entity will not be removed in the XSOAR incident, as XSOAR doesn’t allow the removal of the tags field via the backend. However, tags removed from the XSOAR incident UI will be removed from the Vectra entity.":
      "Vectraエンティティから削除されたタグは、XSOARインシデントからは削除されません。XSOARでは、バックエンド経由でタグフィールドを削除できないためです。ただし、XSOARインシデントUIから削除されたタグは、Vectraエンティティから削除されます。",
    "API 1.0 Authentication":
      "API 1.0認証",
    "API 2.0 Authentication":
      "API 2.0認証",
    "API Access":
      "APIアクセス",
    "API Client ID and API Client Secret":
      "APIクライアントIDとAPIクライアントシークレット",
    "API connection":
      "API接続",
    "API Host":
      "APIホスト",
    "API Key (CB Defense)":
      "APIキー(CB Defense)",
    "API Key (Deprecated)":
      "APIキー(非推奨)",
    "API Key (JWT-Deprecated)":
      "APIキー(JWT-非推奨)",
    "API Key (Recommended)":
      "APIキー(推奨)",
    "API key and API token are generate by Lastline and given at the subscription time.":
      "APIキーとAPIトークンはLastlineによって生成され、サブスクリプション時に提供されます。",
    "API Key Auth":
      "APIキー認証",
    "API Key Auth (http_api_key)":
      "APIキー認証(http_api_key)",
    "API Key for accessing Lastline APIs":
      "Lastline APIにアクセスするためのAPIキー",
    "API Key Secret":
      "APIキーシークレット",
    "API Key Type":
      "APIキーのタイプ",
    "API Permissions in Microsoft Graph":
      "Microsoft GraphのAPI権限",
    "API Port":
      "APIポート",
    "API Port (e.g 443)":
      "APIポート(例: 443)",
    "API Secret (JWT-Deprecated)":
      "APIシークレット(JWT-非推奨)",
    "API Token (CB Response)":
      "APIトークン(CB Response)",
    "API Token (see detailed instructions)":
      "APIトークン(詳細な手順を参照)",
    "API Token (see Detailed Instructions)":
      "APIトークン(詳細な手順を参照)",
    "API Token for accessing Lastline APIs":
      "Lastline APIにアクセスするためのAPIトークン",
    "API tokens have the same permissions as the user who creates them, and if the permissions of a user change, so do the permissions of the API token.":
      "APIトークンは、作成したユーザーと同じ権限を持ちます。ユーザーの権限が変更されると、APIトークンの権限も変更されます。",
    "API version of QRadar (e.g., '12.0'). Minimum API version is 10.1. Since QRadar API v19, The timestamp fields should be provided as milliseconds epoch format instead of seconds.":
      "QRadarのAPIバージョンです(例: '12.0')。最小APIバージョンは10.1です。QRadar API v19以降、タイムスタンプフィールドは秒ではなくミリ秒のエポック形式で指定する必要があります。",
    "App ID":
      "アプリID",
    "App Token":
      "アプリトークン",
    "App-only authentication":
      "アプリ専用認証",
    "Application ID / Client ID":
      "アプリケーションID / クライアントID",
    "Application ID or Client ID":
      "アプリケーションIDまたはクライアントID",
    "Application redirect URI":
      "アプリケーションのリダイレクトURI",
    "Application Redirect URI":
      "アプリケーションのリダイレクトURI",
    "Application redirect URI (for authorization code mode)":
      "アプリケーションのリダイレクトURI(認可コードモード用)",
    "Application redirect URI (for Authorization Code mode)":
      "アプリケーションのリダイレクトURI(認可コードモード用)",
    "Application redirect URI (required for self-deployed Azure app)":
      "アプリケーションのリダイレクトURI(セルフデプロイAzureアプリには必須)",
    "Application Secret (Required for using Self Deployed Azure app)":
      "アプリケーションシークレット(セルフデプロイAzureアプリを使用する場合は必須)",
    "Argument Name":
      "引数名",
    "As an alternative to Okta API tokens, you can interact with Okta APIs using scoped OAuth 2.0 access tokens for a number of Okta endpoints.":
      "Oktaには、Okta APIトークンの代わりに、スコープ付きのOAuth 2.0アクセストークンを使用して、多数のOktaエンドポイントのOkta APIを操作する方法もあります。",
    "As soon as the instance is set-up, the first pull will get the alarms generated in the last 10 minutes. After that, new alarms will be fetched every other minute, starting the last pull index.":
      "インスタンスのセットアップが完了するとすぐに、最初のプルで過去10分間に生成されたアラームが取得されます。その後は、前回のプルのインデックスを起点として、2分ごとに新しいアラームがフェッチされます。",
    "As the enrichment process is asynchronous, fetching enriched incidents takes longer. The integration was tested with 20+ notables simultaneously that were fetched and enriched after approximately ~4min.":
      "エンリッチメントプロセスは非同期であるため、エンリッチ済みインシデントのフェッチには時間がかかります。このインテグレーションは、20件以上のnotableを同時にフェッチしてエンリッチする条件でテストされ、約4分かかりました。",
    "Asset enrichment lookup tables":
      "アセットエンリッチメントのルックアップテーブル",
    "Asset search enrichment":
      "アセット検索のエンリッチメント",
    "Assign Prisma AIRS AI Red Teaming API permissions":
      "Prisma AIRS AI Red Teaming APIの権限を割り当てます",
    "Assign Prisma AIRS AI Runtime Security API permissions":
      "Prisma AIRS AI Runtime Security APIの権限を割り当てます",
    "Assign Prisma AIRS AI Supply Chain Security API permissions":
      "Prisma AIRS AI Supply Chain Security APIの権限を割り当てます",
    "Audit log type filter":
      "監査ログタイプのフィルター",
    "Authenticate using an API-Key":
      "APIキーを使用した認証",
    "Authentication Configuration":
      "認証の設定",
    "Authentication Flow":
      "認証フロー",
    "Authentication URL":
      "認証URL",
    "Authentication using API Token":
      "APIトークンを使用した認証",
    "Authentication using Azure Managed Identities":
      "Azureマネージドアイデンティティを使用した認証",
    "Authentication using OAuth 2.0 Authentication":
      "OAuth 2.0認証を使用した認証",
    "Authentication Using the Authorization Code Flow (Delegated Permissions)":
      "認可コードフローを使用した認証(委任されたアクセス許可)",
    "Authentication Using the Client Credentials Flow (Application Permissions)":
      "クライアント資格情報フローを使用した認証(アプリケーションのアクセス許可)",
    "Authentication Using the User - Authorization Code Flow":
      "ユーザーを使用した認証 - 認可コードフロー",
    "Authorization code (for self-deployed mode)":
      "認可コード(セルフデプロイモード用)",
    "Authorization code (required for self-deployed Azure app)":
      "認可コード(セルフデプロイAzureアプリには必須)",
    "Authorization code (run msgraph-generate-login-url command)":
      "認可コード(msgraph-generate-login-urlコマンドを実行)",
    "Authorization Code flow (Delegated Permissions)":
      "認可コードフロー(委任されたアクセス許可)",
    "Authorization code on behalf of a user, used with self deployed Azure Applications.":
      "ユーザーに代わる認可コードです。セルフデプロイAzureアプリケーションで使用されます。",
    "Authorize Cortex for Entra ID Users (Self deployed Azure App)":
      "Entra IDユーザーに対するCortexの承認(セルフデプロイAzureアプリ)",
    "Auto Activate Changes":
      "変更を自動でアクティブ化",
    "Auto Logout":
      "自動ログアウト",
    "Automatically fetch and ingest Threatmon alarms as XSOAR incidents.":
      "Threatmonのアラームを自動的にフェッチし、XSOARインシデントとして取り込みます。",
    "Available integrations":
      "利用可能なインテグレーション",
    "Base Command":
      "ベースコマンド",
    "Base url to Shodan API":
      "Shodan APIのベースURL",
    "Based on what data needs to be pulled in through the integration, update the Domain Security Policy Permissions as well as Business Process Security Policy Permissions.":
      "インテグレーションで取得するデータに応じて、ドメインセキュリティポリシーの権限とビジネスプロセスセキュリティポリシーの権限を更新します。",
    "Basic Auth":
      "基本認証",
    "Basic Auth (http)":
      "基本認証(http)",
    "Basic authentication - Fill in the email and password.":
      "基本認証 - メールアドレスとパスワードを入力します。",
    "Basic authentication - Fill in the Email and password.":
      "基本認証 - メールアドレスとパスワードを入力します。",
    "Basic authentication - Fill in the User Principal Name (UPN) and password.":
      "基本認証 - ユーザープリンシパル名(UPN)とパスワードを入力します。",
    "Basic authorization using username and password.":
      "ユーザー名とパスワードによる基本認証。",
    "Bearer Auth":
      "Bearer認証",
    "Bearer Auth (http)":
      "Bearer認証(http)",
    "Before creating an API client, ensure that you create an API role with all the required privileges as mentioned in the integration documentation. Then, associate the API client with that role.":
      "APIクライアントを作成する前に、インテグレーションのドキュメントに記載されているすべての必須権限を持つAPIロールを作成してください。次に、そのロールにAPIクライアントを関連付けます。",
    "Before you configure the integration, retrieve the API key from your Joe Security environment.":
      "インテグレーションを設定する前に、Joe Security環境からAPIキーを取得してください。",
    "BloodHound Enterprise Domain":
      "BloodHound Enterpriseドメイン",
    "BloodHound Enterprise Domain (for example, https://example.bloodhoundenterprise.io)":
      "BloodHound Enterpriseドメイン(例: https://example.bloodhoundenterprise.io)",
    "BloodHound Enterprise Domain URL":
      "BloodHound EnterpriseドメインURL",
    "BloodHound Enterprise reduces risk in Active Directory and Microsoft Azure environments by continuously identifying and quantifying attack paths that attackers use to escalate privileges. The SpecterOps BloodHound Enterprise integration enables automated retrieval of attack path findings from BloodHound into Cortex, streamlining incident creation and investigation.":
      "BloodHound Enterpriseは、攻撃者が権限昇格に使用するアタックパスを継続的に特定して定量化することで、Active DirectoryおよびMicrosoft Azure環境のリスクを低減します。SpecterOps BloodHound Enterpriseインテグレーションにより、BloodHoundからアタックパスの検出結果を自動的に取得してCortexに取り込み、インシデントの作成と調査を効率化できます。",
    "Bot Client ID":
      "ボットクライアントID",
    "Bot Client ID ((Team Chat App))":
      "ボットクライアントID((Team Chat App))",
    "Bot Client Secret (Team Chat App)":
      "ボットクライアントシークレット(Team Chat App)",
    "Bot display name in Slack":
      "Slackでのボット表示名",
    "Bot display name in Slack (Cortex by default)":
      "Slackでのボット表示名(デフォルトはCortex)",
    "Bot icon in Slack - Image URL (Cortex icon by default)":
      "Slackのボットアイコン - 画像URL(デフォルトはCortexアイコン)",
    "Bot ID":
      "ボットID",
    "Bot Message":
      "ボットメッセージ",
    "Bot Password":
      "ボットパスワード",
    "Bot Secret ID":
      "ボットシークレットID",
    "Bot Token":
      "ボットトークン",
    "Build a playbook and assign it as the default for this incident type.":
      "Playbookを作成し、このインシデントタイプのデフォルトとして割り当てます。",
    "Build a query to return relevant alerts.":
      "関連するアラートを返すクエリを作成します。",
    "By clicking \"Authorize\", you hereby authorize Palo Alto Networks to (i) ingest data and perform actions such as suppression on behalf of you to and from Semgrep's public API, and (ii) further process such data to deliver our services to you. You confirm that you have the right to provide such authorization.":
      "「認可」をクリックすると、(i)お客様に代わってSemgrepのパブリックAPIとの間でデータを取り込み、抑制などのアクションを実行すること、および(ii)お客様にサービスを提供するためにそのデータをさらに処理することを、Palo Alto Networksに認可したことになります。お客様は、この認可を行う権利を有することを確認するものとします。",
    "By clicking \"Authorize\", you hereby authorize Palo Alto Networks to (i) ingest data and perform actions such as suppression on behalf of you to and from Snyk's public API, and (ii) further process such data to deliver our services to you. You confirm that you have the right to provide such authorization.":
      "「認可」をクリックすると、(i)お客様に代わってSnykのパブリックAPIとの間でデータを取り込み、抑制などのアクションを実行すること、および(ii)お客様にサービスを提供するためにそのデータをさらに処理することを、Palo Alto Networksに認可したことになります。お客様は、この認可を行う権利を有することを確認するものとします。",
    "By clicking \"Authorize\", you hereby authorize Palo Alto Networks to (i) ingest data and perform actions such as suppression on behalf of you to and from SonarQube's public API, and (ii) further process such data to deliver our services to you. You confirm that you have the right to provide such authorization.":
      "「認可」をクリックすると、(i)お客様に代わってSonarQubeのパブリックAPIとの間でデータを取り込み、抑制などのアクションを実行すること、および(ii)お客様にサービスを提供するためにそのデータをさらに処理することを、Palo Alto Networksに認可したことになります。お客様は、この認可を行う権利を有することを確認するものとします。",
    "By clicking \"Authorize\", you hereby authorize Palo Alto Networks to (i) ingest data and perform actions such as suppression on behalf of you to and from Veracode's public API, and (ii) further process such data to deliver our services to you. You confirm that you have the right to provide such authorization.":
      "「認可」をクリックすると、(i)お客様に代わってVeracodeのパブリックAPIとの間でデータを取り込み、抑制などのアクションを実行すること、および(ii)お客様にサービスを提供するためにそのデータをさらに処理することを、Palo Alto Networksに認可したことになります。お客様は、この認可を行う権利を有することを確認するものとします。",
    "By default, SSL verification is enabled. If selected, the connection isn’t secure and all requests return an SSL error because the certificate cannot be verified.":
      "デフォルトではSSL検証が有効です。選択すると、証明書を検証できないため、接続は安全ではなくなり、すべてのリクエストでSSLエラーが返されます。",
    "By default, the integration fetches incidents in an open state.":
      "デフォルトでは、インテグレーションはオープン状態のインシデントをフェッチします。",
    "By default, the Kafka instance uses a non SSL connection. Turnning on the insecure flag, or providing any certificate will switch to SSL connection.":
      "デフォルトでは、KafkaインスタンスはSSLを使用しない接続を使用します。insecureフラグを有効にするか、いずれかの証明書を指定すると、SSL接続に切り替わります。",
    "CA certificate of Kafka server (type pem)":
      "KafkaサーバーのCA証明書(pem形式)",
    "Certificate (Required for HTTPS)":
      "証明書(HTTPSに必須)",
    "Certificate Password":
      "証明書のパスワード",
    "Certificate Thumbprint (can be used instead of Client Secret)":
      "証明書サムプリント(Client Secretの代わりに使用可能)",
    "Certificate Thumbprint (optional for self-deployed Azure app)":
      "証明書サムプリント(セルフデプロイのAzureアプリでは任意)",
    "Chat and channel monitoring, data security scanning, and security posture for Teams":
      "Teams向けのチャットとチャネルの監視、データセキュリティスキャン、セキュリティポスチャ",
    "Check “Fetches-incidents” radio button":
      "「Fetches-incidents」ラジオボタンを選択します",
    "Check this box to use OAuth 2.0 authentication. See (?) for more information.":
      "このチェックボックスをオンにすると、OAuth 2.0認証を使用します。詳細については(?)を参照してください。",
    "Check Trust any certificate (not secure) checkbox":
      "「すべての証明書を信頼する(安全ではありません)」チェックボックスをオンにします",
    "Choose a device group name.":
      "デバイスグループ名を選択します。",
    "Choose if to check “Fetch Existing Alerts” and/or “Also Fetch Informational Alerts” checkboxes":
      "「Fetch Existing Alerts」または「Also Fetch Informational Alerts」(あるいはその両方)のチェックボックスをオンにするかどうかを選択します",
    "Choose max fetch (up to 200)":
      "最大フェッチ数を選択します(最大200)",
    "Choose Orca Alert - Classification as your classifier":
      "分類子として「Orca Alert - Classification」を選択します",
    "Choose Orca Mapper as your mapper":
      "マッパーとして「Orca Mapper」を選択します",
    "Choose which Microsoft 365 services to connect. Each service maps to specific Microsoft Graph API permissions.":
      "接続するMicrosoft 365サービスを選択します。各サービスは、特定のMicrosoft Graph APIアクセス許可に対応しています。",
    "Choose your API version":
      "APIバージョンを選択してください",
    "Chrome options (Advanced. See [?])":
      "Chromeオプション(詳細設定。[?]を参照)",
    "Classification description (only human readable)":
      "分類の説明(人間が読める形式のみ)",
    "Classification long name":
      "分類の長い名前",
    "Classifiers and Mappers":
      "分類子とマッパー",
    "Clear the “Query only application events configured in IAM Configuration” checkbox to use a custom fetch query filter expression. The expression must be in SCIM syntax, and include the add and remove event types, as well as the application ID.":
      "カスタムのフェッチクエリフィルター式を使用するには、「Query only application events configured in IAM Configuration」チェックボックスをオフにします。式はSCIM構文で記述し、アプリケーションIDだけでなく、追加と削除のイベントタイプも含める必要があります。",
    "Click “Test” button to make sure Api Key is valid and then click the “Done” button":
      "「Test」ボタンをクリックしてAPIキーが有効であることを確認し、「Done」ボタンをクリックします",
    "Click “Test” to validate the connection.":
      "「Test」をクリックして接続を検証します。",
    "Click the data from the Splunk fields to map it to Cortex.":
      "Splunkのフィールドのデータをクリックして、Cortexにマッピングします。",
    "Click the fetched data.":
      "フェッチされたデータをクリックします。",
    "Click the username in the upper-right corner.":
      "右上隅のユーザー名をクリックします。",
    "Click your classifier.":
      "分類子をクリックします。",
    "Click your mapper.":
      "マッパーをクリックします。",
    "Client authentication":
      "クライアント認証",
    "Client certificate (‘client.crt’ file)":
      "クライアント証明書('client.crt'ファイル)",
    "Client certificate (type pem)":
      "クライアント証明書(pem形式)",
    "Client certificate key (type pem)":
      "クライアント証明書キー(pem形式)",
    "Client certificates":
      "クライアント証明書",
    "Client certificates content (see `client.crt` in Integration Tips)":
      "クライアント証明書の内容(インテグレーションのヒントの`client.crt`を参照)",
    "Client credentials":
      "クライアント認証情報",
    "Client Credentials":
      "クライアント認証情報",
    "Client GUID":
      "クライアントGUID",
    "Client Id (for OAuth 2.0)":
      "クライアントID(OAuth 2.0用)",
    "Client ID (OAuth)":
      "クライアントID(OAuth)",
    "Client ID and Client Secret":
      "クライアントIDとクライアントシークレット",
    "Client Id for OAuth 2.0":
      "OAuth 2.0用のクライアントID",
    "Client ID/JWT Audience (aud)":
      "クライアントID/JWTオーディエンス(aud)",
    "Client Name":
      "クライアント名",
    "Client private key":
      "クライアント秘密鍵",
    "Client private key (‘client.key’ file)":
      "クライアント秘密鍵('client.key'ファイル)",
    "Client private key content (e.g. `client.key`)":
      "クライアント秘密鍵の内容(例: `client.key`)",
    "Client Secret (for OAuth 2.0)":
      "クライアントシークレット(OAuth 2.0用)",
    "Client Secret (OAuth)":
      "クライアントシークレット(OAuth)",
    "Client Secret for OAuth 2.0":
      "OAuth 2.0用のクライアントシークレット",
    "Client Secret Key":
      "クライアントシークレットキー",
    "Client type":
      "クライアントタイプ",
    "Close Detection on Incident Closure":
      "インシデントのクローズ時に検出をクローズ",
    "Close Mirrored Cortex Incidents (Incoming Mirroring)":
      "ミラーリングされたCortexインシデントをクローズ(受信ミラーリング)",
    "Close Mirrored Prisma Cloud Alert":
      "ミラーリングされたPrisma Cloudアラートをクローズ",
    "Close Mirrored Splunk ES Events (Outgoing Mirroring)":
      "ミラーリングされたSplunk ESイベントをクローズ(送信ミラーリング)",
    "Close Mirrored Splunk Notable Event":
      "ミラーリングされたSplunk Notable Eventをクローズ",
    "Cloud Name (i.e., <https://zsapi.zscalertwo.net>)":
      "クラウド名(例: <https://zsapi.zscalertwo.net>)",
    "Collect Configuration":
      "構成を収集",
    "Collect Logs":
      "ログを収集",
    "Comma-separated configuration for advanced parameters values. e.g. EVENTS_INTERVAL_SECS=20,FETCH_SLEEP=5":
      "詳細パラメーター値のカンマ区切りの設定です。例: EVENTS_INTERVAL_SECS=20,FETCH_SLEEP=5",
    "Comma-separated finding statuses to fetch. Known values are OPEN, REOPENED, and DONE. The default excludes DONE so that remediated findings do not create incidents, while still covering findings that were reopened. Only applies when Findings scope is \"Supplier Findings\". Leave empty to fetch all statuses.":
      "フェッチする検出結果のステータスをカンマ区切りで指定します。既知の値はOPEN、REOPENED、DONEです。デフォルトではDONEを除外するため、修復済みの検出結果ではインシデントは作成されませんが、再オープンされた検出結果は引き続き対象になります。Findings scopeが「Supplier Findings」の場合にのみ適用されます。すべてのステータスをフェッチするには、空のままにします。",
    "Command Example":
      "コマンドの例",
    "Comment tag from Splunk":
      "Splunkからのコメントタグ",
    "Comment tag to Splunk":
      "Splunkへのコメントタグ",
    "Commercial Region (https://analysiscenter.veracode.com/)":
      "商用リージョン(https://analysiscenter.veracode.com/)",
    "Common parameters":
      "共通パラメーター",
    "Configuration Steps":
      "構成手順",
    "Configure a JWT signing key by accessing: All→System OAuth→JWT Keys using the keystore from above and keep the Key ID as it will be used as kid integration parameter.":
      "次のパスにアクセスして、JWT署名キーを構成します: All→System OAuth→JWT Keys。前述のキーストアを使用し、Key IDは`kid`インテグレーションパラメーターとして使用するため控えておきます。",
    "Configure additional integration instances, adding the workflow URL for each Team. You can then send notifications to multiple teams at once, or select the integration instance to use via the playbook task editor.":
      "追加のインテグレーションインスタンスを構成し、各チームのワークフローURLを追加します。これにより、複数のチームに同時に通知を送信したり、Playbookタスクエディターで使用するインテグレーションインスタンスを選択したりできます。",
    "Configure Integration":
      "インテグレーションを構成",
    "Configure Microsoft Teams on Cortex or Cortex XSIAM":
      "CortexまたはCortex XSIAMでMicrosoft Teamsを構成します",
    "Configure the classification. Make sure that your non ES incident fields are associated with your custom incident type.":
      "分類を構成します。ES以外のインシデントフィールドが、カスタムインシデントタイプに関連付けられていることを確認します。",
    "Configure the default threshold for each indicator type in the instance settings.":
      "インスタンス設定で、インジケータータイプごとのデフォルトのしきい値を構成します。",
    "Configure the instance":
      "インスタンスを構成",
    "Configure the Instance to Fetch Attack Paths from BloodHound Enterprise":
      "BloodHound Enterpriseからアタックパスをフェッチするようにインスタンスを構成",
    "Configure the integration instance in Cortex":
      "Cortexでインテグレーションインスタンスを構成",
    "Configure the integration to fetch incidents (see the Integration documentation for details).":
      "インシデントをフェッチするようにインテグレーションを構成します(詳細については、インテグレーションのドキュメントを参照してください)。",
    "Configure the mapping. Make sure to map your non ES fields accordingly and make sure that these incident fields are associated with their custom incident type.":
      "マッピングを構成します。ES以外のフィールドを適切にマッピングし、これらのインシデントフィールドがカスタムインシデントタイプに関連付けられていることを確認します。",
    "Configure VulnDB on Cortex":
      "CortexでVulnDBを構成",
    "Configure Your MongoDB Atlas Instance":
      "MongoDB Atlasインスタンスを構成",
    "Connect SonarQube":
      "SonarQubeに接続",
    "Connect Veracode":
      "Veracodeに接続",
    "Connection Method":
      "接続方法",
    "Connection Security":
      "接続のセキュリティ",
    "Connection URI":
      "接続URI",
    "Connector ID (CB Defense)":
      "コネクターID(CB Defense)",
    "Content types to fetch":
      "フェッチするコンテンツタイプ",
    "Context Output":
      "コンテキスト出力",
    "Copy the Access Token to the “Personal Access Token” field":
      "アクセストークンを「Personal Access Token」フィールドにコピーします",
    "Copy the API key.":
      "APIキーをコピーします。",
    "Copy the Client ID and Client Secret":
      "クライアントIDとクライアントシークレットをコピーします",
    "Copy the Client ID and Client Secret Key to a safe place.":
      "クライアントIDとクライアントシークレットキーを安全な場所にコピーしておきます。",
    "Copy the generated API token. This would be required to be configured while adding the RiskSense instance on Cortex.":
      "生成されたAPIトークンをコピーします。このトークンは、CortexにRiskSenseインスタンスを追加する際の構成に必要です。",
    "Copy the Runtime API Key for scanner operations":
      "スキャナー操作用のRuntime APIキーをコピーします",
    "Copy your API key.":
      "APIキーをコピーします。",
    "Copy your Terraform Enterprise server domain":
      "Terraform Enterpriseサーバーのドメインをコピーします",
    "Corporation Name (should match the pattern [0-9a-z_.-]+)":
      "コーポレーション名([0-9a-z_.-]+のパターンに一致する必要があります)",
    "Cortex Severity":
      "Cortexの重要度",
    "Cortex Tenant":
      "Cortexテナント",
    "Cortex uses the Workday integration to fetch reports and create XSOAR incidents that correspond to the CRUD operation(s) in the report. For example, if you run a full report that includes 5 new employees, 3 terminated employees, and 10 employee profiles that were updated, 18 unique incidents would be created in XSOAR.":
      "CortexはWorkdayインテグレーションを使用してレポートをフェッチし、レポート内のCRUD操作に対応するXSOARインシデントを作成します。たとえば、新規従業員5名、退職従業員3名、更新された従業員プロファイル10件を含む完全なレポートを実行すると、18件の一意のインシデントがXSOARに作成されます。",
    "Create a JWT provider with a JWT signing key by accessing: All→System OAuth→JWT providers. Claim Name sub in Standard Claims has to be existing non-admin servicenow user with all necessary roles.":
      "次のパスにアクセスして、JWT署名キーを使用するJWTプロバイダーを作成します: All→System OAuth→JWT providers。Standard ClaimsのClaim Name `sub`には、必要なロールをすべて持つ、既存の管理者以外のServiceNowユーザーを指定する必要があります。",
    "Create a local user with a sufficient role.":
      "十分なロールを持つローカルユーザーを作成します。",
    "Create a new instance":
      "新しいインスタンスを作成",
    "Create a new Mattermost user (to act as the Mattermost Bot)":
      "新しいMattermostユーザーを作成します(Mattermostボットとして動作させるため)",
    "Create a new service account or OAuth2 client":
      "新しいサービスアカウントまたはOAuth2クライアントを作成します",
    "Create a workflow in Microsoft Teams.":
      "Microsoft Teamsでワークフローを作成します。",
    "Create an image or PDF file from a URL or HTML body.":
      "URLまたはHTML本文から画像ファイルまたはPDFファイルを作成します。",
    "Create an Integration System Security Group (Unconstrained) using the ‘Create Security Group’ task":
      "'Create Security Group'タスクを使用して、Integration System Security Group(Unconstrained)を作成します",
    "Create an JWT app.":
      "JWTアプリを作成します。",
    "Create an Server-to-Server OAuth app.":
      "Server-to-Server OAuthアプリを作成します。",
    "Create API Access Policy or add Authentication profile to existing Policy by accessing: All→System Web Services→API Access Policies→Rest API Access Policies":
      "次のパスにアクセスして、API Access Policyを作成するか、既存のポリシーにAuthentication profileを追加します: All→System Web Services→API Access Policies→Rest API Access Policies",
    "Create Incidents for Escalated Detections":
      "エスカレーションされた検出のインシデントを作成",
    "Create Incidents for Prioritized Detections":
      "優先度の高い検出のインシデントを作成",
    "Create Indicators from Relationships":
      "リレーションシップからインジケーターを作成",
    "Create OAuth2 Client in Strata Cloud Manager":
      "Strata Cloud ManagerでOAuth2クライアントを作成します",
    "Create the Demisto Bot in Microsoft Teams":
      "Microsoft TeamsでDemisto Botを作成します",
    "Creating an API Key":
      "APIキーの作成",
    "Creating or updating the encryption master key of Palo Alto Networks Firewall or Panorama invalidates the current API key and requires obtaining a new one. All subsequent commands will raise an “Invalid Credential” error until a new API key is obtained and the integration instance is updated accordingly.":
      "Palo Alto Networks FirewallまたはPanoramaの暗号化マスターキーを作成または更新すると、現在のAPIキーが無効になり、新しいキーの取得が必要になります。新しいAPIキーを取得してインテグレーションインスタンスを更新するまで、以降のすべてのコマンドで「Invalid Credential」エラーが発生します。",
    "Crowdsourced Yara Rules Threshold":
      "クラウドソースのYaraルールのしきい値",
    "CSV of the Splunk lookup tables from which to take the Asset enrichment data.":
      "アセットエンリッチメントデータの取得元となるSplunkルックアップテーブルのCSVです。",
    "CSV of the Splunk lookup tables from which to take the Identity enrichment data.":
      "アイデンティティエンリッチメントデータの取得元となるSplunkルックアップテーブルのCSVです。",
    "Currently, OpenSSH keys are not supported. Only RSA keys (.PEM files) are supported.":
      "現在、OpenSSHキーはサポートされていません。サポートされるのはRSAキー(.PEMファイル)のみです。",
    "Custom New Incident Welcome Message":
      "カスタムの新規インシデントのウェルカムメッセージ",
    "Customer name":
      "顧客名",
    "Customer Name":
      "顧客名",
    "CVE- is a constant string":
      "`CVE-`は固定の文字列です",
    "Data profiles to allow exemption":
      "除外を許可するデータプロファイル",
    "Date Format in Workday Report":
      "Workdayレポートの日付形式",
    "Date or relative timestamp to start fetching incidents from, in the format of <number> <time unit>. For example, 2 minutes, 12 hours, 6 days, 2 weeks, 3 months, 1 year, ISO timestamp. Default is 3 days.":
      "インシデントのフェッチを開始する日付または相対タイムスタンプです。形式は<number> <time unit>です。例: 2 minutes、12 hours、6 days、2 weeks、3 months、1 year、ISOタイムスタンプ。デフォルトは3 daysです。",
    "Date YYYY-MM-dd finishing date (latest)":
      "終了日 YYYY-MM-dd(最新)",
    "Date YYYY-MM-dd starting date (earliest)":
      "開始日 YYYY-MM-dd(最古)",
    "DBotScore mapping":
      "DBotScoreのマッピング",
    "Deactivation date field":
      "無効化日フィールド",
    "Deactive User URL":
      "ユーザー無効化URL",
    "Dedicated Slack channel to receive notifications":
      "通知を受信する専用のSlackチャネル",
    "Default ‘wait-time’ is 20 seconds.":
      "デフォルトの'wait-time'は20秒です。",
    "Default Behavior":
      "デフォルトの動作",
    "Default Hostname or IP Address":
      "デフォルトのホスト名またはIPアドレス",
    "Default max total wait for results (in milliseconds)":
      "結果を待機する合計時間のデフォルトの最大値(ミリ秒)",
    "Default maximum number of records to retrieve":
      "取得するレコード数のデフォルトの最大値",
    "Default requestor ID for adding people to incidents":
      "インシデントに担当者を追加する際のデフォルトのリクエスターID",
    "Default team":
      "デフォルトのチーム",
    "Default Tenant Services Group ID to use for API calls. Example: 1234567890.":
      "API呼び出しに使用するデフォルトのTenant Services GroupのIDです。例: 1234567890。",
    "Default ticket type for running ticket commands and fetching incidents":
      "チケットコマンドの実行およびインシデントのフェッチに使用するデフォルトのチケットタイプ",
    "Default user":
      "デフォルトのユーザー",
    "Define a query to determine which offenses to fetch. e.g. status=OPEN. See ? for more details.":
      "どのオフェンスをフェッチするかを決定するクエリを定義します。例: status=OPEN。詳細については?を参照してください。",
    "Defining a broad rule-set will cause the integration to create multiple redundant incidents.":
      "広範なルールセットを定義すると、インテグレーションが冗長なインシデントを複数作成します。",
    "Delegated user authentication":
      "委任ユーザー認証",
    "Dependencies (Python packages)":
      "依存関係(Pythonパッケージ)",
    "Depending on the authentication method you use, the integration parameters might change.":
      "使用する認証方法によって、インテグレーションのパラメーターが変わる場合があります。",
    "Depending on the selected authentication method, you may need to create a dedicated application or use a dedicated user account for the integration. Each method requires specific permissions and configuration steps to ensure Security & Compliance commands can be executed successfully.":
      "選択した認証方法によっては、インテグレーション専用のアプリケーションを作成するか、専用のユーザーアカウントを使用する必要がある場合があります。Security & Complianceコマンドを正常に実行できるように、各方法には特定の権限と構成手順が必要です。",
    "Depending on the system load, the initial fetch might take a long time.":
      "システムの負荷によっては、最初のフェッチに長い時間がかかる場合があります。",
    "Deprecated starting from version 10.35.0 of Jamf.":
      "Jamfのバージョン10.35.0以降は非推奨です。",
    "Deprecated. Use O365 - Security And Compliance - Content Search v2 instead.":
      "非推奨です。代わりにO365 - Security And Compliance - Content Search v2を使用してください。",
    "Deprecated. Use the Slack v3 integration instead.":
      "非推奨です。代わりにSlack v3インテグレーションを使用してください。",
    "Detailed Instructions…":
      "詳細な手順…",
    "Details for Silent Push workflow":
      "Silent Pushワークフローの詳細",
    "Detection Close Reason for Incident Closure":
      "インシデントクローズ時の検出のクローズ理由",
    "Detection close reason to set in Vectra when closing incidents in XSOAR. Default value is 'Remediated'.":
      "XSOARでインシデントをクローズするときにVectraに設定する検出のクローズ理由です。デフォルト値は'Remediated'です。",
    "Detection close reason to set in Vectra when closing incidents in XSOAR. Default value is 'Remediated'. Note: This parameter is only used when close detection on incident closer is 'checked' and the mirroring direction is set to 'Outgoing' or 'Incoming And Outgoing'.":
      "XSOARでインシデントをクローズするときにVectraに設定する検出のクローズ理由です。デフォルト値は'Remediated'です。注: このパラメーターは、「close detection on incident closer」が'checked'で、ミラーリング方向が'Outgoing'または'Incoming And Outgoing'に設定されている場合にのみ使用されます。",
    "Detection Status for Incident Reopen":
      "インシデント再オープン時の検出ステータス",
    "Detection status to set in Vectra when incident is reopened in XSOAR. Default value is 'Escalated'.":
      "XSOARでインシデントを再オープンするときにVectraに設定する検出のステータスです。デフォルト値は'Escalated'です。",
    "Detection status to set in Vectra when incident is reopened in XSOAR. Default value is 'Escalated'. Note: This parameter is only used when open detection on incident reopen is 'checked' and the mirroring direction is set to 'Outgoing' or 'Incoming And Outgoing'.":
      "XSOARでインシデントを再オープンするときにVectraに設定する検出のステータスです。デフォルト値は'Escalated'です。注: このパラメーターは、「open detection on incident reopen」が'checked'で、ミラーリング方向が'Outgoing'または'Incoming And Outgoing'に設定されている場合にのみ使用されます。",
    "Determines when employees are synced from Workday, i.e., when are the User Profile in XSOAR, and the users in the applications, created. Set to 0 to sync hires on their hire date. Leave empty to sync the hires immediately.":
      "Workdayから従業員を同期するタイミング、つまりXSOARのユーザープロファイルとアプリケーションのユーザーが作成されるタイミングを指定します。入社日に入社者を同期するには、0に設定します。入社者をすぐに同期するには、空のままにします。",
    "Determines when to enable the Active Directory accounts of employees. Set to 0 to enable the Active Directory accounts on their hire date. Leave empty to enable the accounts immediately. Note that this is effective only when the employees are already synced to XSOAR, so you should set a number lower, or equal to, the value in the *Number of days before hire date to sync hires* parameter.":
      "従業員のActive Directoryアカウントを有効にするタイミングを指定します。入社日にActive Directoryアカウントを有効にするには、0に設定します。アカウントをすぐに有効にするには、空のままにします。この設定が有効になるのは、従業員がすでにXSOARに同期されている場合のみです。そのため、*Number of days before hire date to sync hires*パラメーターの値以下の数値を設定してください。",
    "Determines whether to return all results, which can number in the thousands. If “true”, returns all results and overrides the _fullResponse_, _long_ arguments (if set to “false”) in a command. If “false”, the _fullResponse_, _long_ arguments in the command determines how results are returned.":
      "数千件に及ぶ可能性のあるすべての結果を返すかどうかを指定します。“true”の場合、すべての結果を返し、コマンドの_fullResponse_、_long_引数(“false”に設定されている場合)を上書きします。“false”の場合、結果の返し方はコマンドの_fullResponse_、_long_引数によって決まります。",
    "Disable Automatic Notifications":
      "自動通知を無効にする",
    "DLP API Base URL":
      "DLP APIベースURL",
    "DLP API base URL for DLP management operations (dictionaries, patterns, filtering profiles). Default is the global DLP endpoint. Change only if using a regional or custom DLP endpoint.":
      "DLP管理操作(辞書、パターン、フィルタリングプロファイル)用のDLP APIベースURLです。デフォルトはグローバルDLPエンドポイントです。リージョン固有またはカスタムのDLPエンドポイントを使用する場合にのみ変更してください。",
    "DLP Regions":
      "DLPリージョン",
    "Do not check for Cortex version 8":
      "Cortexバージョン8を確認しない",
    "Domain Controller":
      "ドメインコントローラー",
    "Domain Malicious Threshold. Minimum number of positive results from VT scanners to consider the Domain malicious.":
      "ドメインの悪意のあるしきい値。ドメインを悪意があると判定するために必要な、VTスキャナーからの陽性結果の最小数です。",
    "Domain of illuminate server to use (format - server.that_you_use.com - No http/https)":
      "使用するilluminateサーバーのドメイン(形式 - server.that_you_use.com - http/httpsなし)",
    "Domain Popularity Ranking Threshold":
      "ドメイン人気ランキングのしきい値",
    "Domain Relationships":
      "ドメインのリレーションシップ",
    "Domain Suspicious Threshold. Minimum number of positive and suspicious results from VT scanners to consider the Domain suspicious.":
      "ドメインの疑わしいしきい値。ドメインを疑わしいと判定するために必要な、VTスキャナーからの陽性および疑わしい結果の最小数です。",
    "Domain Threshold. Minimum number of positive results from VT scanners to consider the domain malicious.":
      "ドメインのしきい値。ドメインを悪意があると判定するために必要な、VTスキャナーからの陽性結果の最小数です。",
    "Drag the value to the appropriate incident type.":
      "値を適切なインシデントタイプにドラッグします。",
    "DXL documentation":
      "DXLドキュメント",
    "Each access token enables the bearer to perform specific actions on specific Okta endpoints, with that ability controlled by which scopes the access token contains.":
      "各アクセストークンにより、その所有者は特定のOktaエンドポイントに対して特定の操作を実行できます。この権限は、アクセストークンに含まれるスコープによって制御されます。",
    "Each log type has its own query field in the instance configuration.":
      "各ログタイプには、インスタンス構成内に専用のクエリフィールドがあります。",
    "Each report has a unique URL, which you enter as one of the integration instance parameters. If you want to fetch multiple reports, each report will require its own integration instance.":
      "各レポートには固有のURLがあり、インテグレーションインスタンスのパラメーターの1つとして入力します。複数のレポートをフェッチする場合は、レポートごとに個別のインテグレーションインスタンスが必要です。",
    "Elastic API Port":
      "Elastic APIポート",
    "Email (Password for basic authentication only)":
      "メール(基本認証の場合のみパスワード)",
    "Email / User Principal Name (Required)":
      "メール/ユーザープリンシパル名(必須)",
    "Email address of the XSOAR delegated Teams user (e.g. \"example@demisto.com\")":
      "XSOARの委任されたTeamsユーザーのメールアドレス(例: \"example@demisto.com\")",
    "Email address to associate for this integration.":
      "このインテグレーションに関連付けるメールアドレス。",
    "Enable Cortex Assistant AI integration in Slack. When enabled, users can mention the bot to interact with AI agents for security analysis, threat intelligence, and automated responses.":
      "SlackでCortex Assistant AIインテグレーションを有効にします。有効にすると、ユーザーはボットにメンションしてAIエージェントとやり取りし、セキュリティ分析、脅威インテリジェンス、自動化された対応を利用できます。",
    "Enable Incident Mirroring":
      "インシデントのミラーリングを有効にする",
    "Enable Okta Authentication Log and Configuration Collection":
      "Okta認証ログおよび構成の収集を有効にする",
    "Enable Outbound File Mirroring":
      "送信ファイルのミラーリングを有効にする",
    "Enable permissions.":
      "権限を有効にします。",
    "Enable score analyzing by Crowdsourced Yara Rules, Sigma, and IDS":
      "Crowdsourced Yara Rules、Sigma、IDSによるスコア分析を有効にする",
    "Enable Splunk statuses marked as “End Status” to close on mirror (Incoming Mirroring)":
      "Splunkで“End Status”とマークされたステータスを、ミラー時にクローズするよう有効にする(受信ミラーリング)",
    "Enable this to fetch assets that correlate to the fetched offenses.":
      "これを有効にすると、フェッチされたオフェンスに関連するアセットをフェッチします。",
    "Enable TLS on the HTTP interface of your Elasticsearch cluster (required for the token service).":
      "ElasticsearchクラスターのHTTPインターフェースでTLSを有効にします(トークンサービスに必要)。",
    "Enable Token Authentication":
      "トークン認証を有効にする",
    "Enabled AI assistant":
      "AIアシスタントを有効にしました",
    "Enabling this checkbox closes the detection in Vectra when the incident is closed in XSOAR.":
      "このチェックボックスをオンにすると、XSOARでインシデントがクローズされたときにVectraで検出がクローズされます。",
    "Enabling this checkbox closes the detection in Vectra when the incident is closed in XSOAR. Note: This parameter is only used when the mirroring direction is set to 'Outgoing' or 'Incoming And Outgoing'.":
      "このチェックボックスをオンにすると、XSOARでインシデントがクローズされたときにVectraで検出がクローズされます。注: このパラメーターは、ミラーリング方向が'Outgoing'または'Incoming And Outgoing'に設定されている場合にのみ使用されます。",
    "Enabling this checkbox generates incidents for escalated events detections. If not selected, incidents are created for all events detections.":
      "このチェックボックスをオンにすると、エスカレーションされたイベント検出に対してインシデントが生成されます。オフの場合は、すべてのイベント検出に対してインシデントが作成されます。",
    "Enabling this checkbox generates incidents for prioritized events detections. If not selected, incidents are created for all events detections.":
      "このチェックボックスをオンにすると、優先度の高いイベント検出に対してインシデントが生成されます。オフの場合は、すべてのイベント検出に対してインシデントが作成されます。",
    "Enabling this checkbox opens the detection in Vectra when the incident is reopened in XSOAR.":
      "このチェックボックスをオンにすると、XSOARでインシデントが再オープンされたときにVectraで検出がオープンされます。",
    "Enabling this checkbox opens the detection in Vectra when the incident is reopened in XSOAR. Note: This parameter is only used when the mirroring direction is set to 'Outgoing' or 'Incoming And Outgoing'.":
      "このチェックボックスをオンにすると、XSOARでインシデントが再オープンされたときにVectraで検出がオープンされます。注: このパラメーターは、ミラーリング方向が'Outgoing'または'Incoming And Outgoing'に設定されている場合にのみ使用されます。",
    "Endpoint URI":
      "エンドポイントURI",
    "Enrichment Timeout (Minutes)":
      "エンリッチメントのタイムアウト(分)",
    "Enrichment types":
      "エンリッチメントタイプ",
    "Enrichment Types":
      "エンリッチメントタイプ",
    "Ensure Appropriate Role":
      "適切なロールを確認する",
    "Enter a meaningful name and a description for the API, and click Create Key.":
      "APIのわかりやすい名前と説明を入力し、Create Keyをクリックします。",
    "Enter a name for the API key and configure the desired settings.":
      "APIキーの名前を入力し、必要な設定を構成します。",
    "Enter a value for the UPN parameter in the integration configuration.":
      "インテグレーション構成のUPNパラメーターに値を入力します。",
    "Enter connection parameters. (Server URL, Client ID & Client Secret Key)":
      "接続パラメーターを入力します。(Server URL、Client ID、Client Secret Key)",
    "Enter the email address the key should be issued to and submit the signup form.":
      "キーの発行先となるメールアドレスを入力し、サインアップフォームを送信します。",
    "Enter the relevant tag name for mirror notes.":
      "ミラーノート用の関連タグ名を入力します。",
    "Enter your Customer Name and API Key provided by the ThreatX SOC. You can request your Customer Name and API Key by opening a support ticket via support@threatx.com.":
      "ThreatX SOCから提供されたCustomer NameとAPI Keyを入力します。support@threatx.comでサポートチケットを開くと、Customer NameとAPI Keyをリクエストできます。",
    "Entity Types":
      "エンティティタイプ",
    "Environment ID":
      "環境ID",
    "Environment ID is available under the PingOne Dashboard->Environment Properties.":
      "環境IDは、PingOne Dashboard->Environment Propertiesで確認できます。",
    "Escape URLs":
      "URLをエスケープする",
    "Even if the password is incorrect, the integration will attempt to authenticate using it.":
      "パスワードが正しくない場合でも、インテグレーションはそのパスワードを使用して認証を試みます。",
    "Event fields to return from the events query (CAUTION this parameter is correlated to the incoming mapper, and changing the values may adversely affect mapping)":
      "イベントクエリから返すイベントフィールド(注意: このパラメーターは受信マッパーと関連しているため、値を変更するとマッピングに悪影響が出る可能性があります)",
    "Event types to fetch":
      "フェッチするイベントタイプ",
    "Events will be fetched only for User Profiles with a Source Priority value less than or equal to the value of this parameter.":
      "イベントは、Source Priorityの値がこのパラメーターの値以下のユーザープロファイルに対してのみフェッチされます。",
    "Exact name of the rule or ruleset you want to filter on. Leave empty to receive all.":
      "フィルターするルールまたはルールセットの正確な名前。すべてを受信するには、空のままにします。",
    "Existing users":
      "既存のユーザー",
    "Exploit publish date":
      "エクスプロイトの公開日",
    "Extensive Logging":
      "詳細ログ",
    "Feed Types":
      "フィードタイプ",
    "Fetch":
      "フェッチ",
    "Fetch aggregate records (instead of messages)":
      "集計レコードをフェッチする(メッセージの代わりに)",
    "Fetch Alert Severity Threshold Higher Than":
      "フェッチするアラートの重大度のしきい値(これより高いもの)",
    "Fetch Alerts":
      "アラートのフェッチ",
    "Fetch backwards window - the time overlap for each fetch to account for the gap between event creation and indexing on Splunk. This helps prevent data gaps caused by ingestion lag.":
      "フェッチの遡及ウィンドウ - Splunkでのイベント作成とインデックス作成の間のギャップを考慮するための、各フェッチの重複時間です。これにより、取り込み遅延によるデータの欠落を防ぎます。",
    "Fetch backwards window - this backward window is for cases where there is a gap between the event occurrence time and the event index time on the server.":
      "フェッチの遡及ウィンドウ - この遡及ウィンドウは、イベントの発生時刻とサーバー上のイベントのインデックス作成時刻の間にギャップがある場合に使用します。",
    "Fetch delta - The delta time in each batch. e.g. 1 hour, 3 minutes.":
      "フェッチのデルタ - 各バッチの時間差です。例: 1 hour、3 minutes。",
    "Fetch emails in HTML format":
      "HTML形式のメールをフェッチする",
    "Fetch event types":
      "フェッチするイベントタイプ",
    "Fetch events (logs) from Splunk into Cortex":
      "Splunkからイベント(ログ)をCortexにフェッチします",
    "Fetch incident query":
      "インシデントをフェッチするクエリ",
    "Fetch incident with specific states.":
      "特定の状態のインシデントをフェッチします。",
    "Fetch Incidents Filtering":
      "インシデントのフェッチのフィルタリング",
    "Fetch incidents type":
      "フェッチするインシデントのタイプ",
    "Fetch incidents using a manual query filter expression":
      "手動のクエリフィルター式を使用したインシデントのフェッチ",
    "Fetch incidents using an “IAM - Configuration” incident":
      "“IAM - Configuration”インシデントを使用したインシデントのフェッチ",
    "Fetch Interval (minutes)":
      "フェッチ間隔(分)",
    "Fetch limit - maximum number of incidents per fetch":
      "フェッチの上限 - 1回のフェッチあたりのインシデントの最大数",
    "Fetch Limit (Max.- 200, Recommended less than 50)":
      "フェッチの上限(最大200、50未満を推奨)",
    "Fetch Limit (Recommended less than 200)":
      "フェッチの上限(200未満を推奨)",
    "Fetch limit (recommended value is less than 200)":
      "フェッチの上限(推奨値は200未満)",
    "Fetch limit per type":
      "タイプごとのフェッチの上限",
    "Fetch mode":
      "フェッチモード",
    "Fetch Only Escalated Detections":
      "エスカレーションされた検出のみをフェッチする",
    "Fetch only incidents with forensics":
      "フォレンジックデータを含むインシデントのみをフェッチする",
    "Fetch only incidents with matching Application IDs":
      "一致するアプリケーションIDを持つインシデントのみをフェッチする",
    "Fetch only incidents with matching severity":
      "一致する重大度を持つインシデントのみをフェッチする",
    "Fetch only incidents with matching state":
      "一致する状態のインシデントのみをフェッチする",
    "Fetch only incidents with matching status":
      "一致するステータスのインシデントのみをフェッチする",
    "Fetch Only Prioritized Detections":
      "優先度の高い検出のみをフェッチする",
    "Fetch Prioritized and Escalated Detections":
      "優先度の高い検出とエスカレーションされた検出をフェッチする",
    "Fetch Samples":
      "サンプルをフェッチする",
    "Fetch specific incident types. Default value is \"All\".":
      "特定のインシデントタイプをフェッチします。デフォルト値は「All」です。",
    "Fetch Splunk Enterprise Security Findings and Investigations into Cortex.":
      "Splunk Enterprise SecurityのFindingsとInvestigationsをCortexにフェッチします。",
    "Fetch Threatmon alarms into Cortex.":
      "ThreatmonのアラームをCortexにフェッチします。",
    "Fetched Incidents Data":
      "フェッチされたインシデントのデータ",
    "Fetches assets":
      "アセットをフェッチします",
    "Fetches incidents":
      "インシデントをフェッチします",
    "Fetches only incidents with matching **All**, **Closed**, or **Open** state. If nothing is selected, **All** states will be used.":
      "**All**、**Closed**、**Open**のいずれかの状態に一致するインシデントのみをフェッチします。何も選択しない場合は、**All**の状態が使用されます。",
    "Fetching events":
      "イベントのフェッチ",
    "File hashes":
      "ファイルハッシュ",
    "File Malicious Threshold. Minimum number of positive results from VT scanners to consider the file malicious.":
      "ファイルの悪意のあるしきい値。ファイルを悪意があると判定するために必要な、VTスキャナーからの陽性結果の最小数です。",
    "File Relationships":
      "ファイルのリレーションシップ",
    "File security scanning, DLP policy enforcement, and sensitive content detection for OneDrive":
      "OneDriveのファイルセキュリティスキャン、DLPポリシーの適用、機密コンテンツの検出",
    "File Suspicious Threshold. Minimum number of positive and suspicious results from VT scanners to consider the file suspicious.":
      "ファイルの疑わしいしきい値。ファイルを疑わしいと判定するために必要な、VTスキャナーからの陽性および疑わしい結果の最小数です。",
    "File Threshold. Minimum number of positive results from VT scanners to consider the file malicious.":
      "ファイルのしきい値。ファイルを悪意があると判定するために必要な、VTスキャナーからの陽性結果の最小数です。",
    "File transfer and execute commands via ssh, on remote machines":
      "SSH経由でリモートマシンに対するファイル転送とコマンド実行を行います",
    "Fill anything in the “Username” fill box. Use you API key in the password fill box.":
      "“Username”の入力ボックスには任意の値を入力します。パスワードの入力ボックスには、APIキーを使用します。",
    "Fill in the ‘UPN Password’ parameter - the user’s Microsoft 365 password (the regular sign-in password for that UPN).":
      "‘UPN Password’パラメーターに、ユーザーのMicrosoft 365パスワード(そのUPNの通常のサインインパスワード)を入力します。",
    "Fill in the ‘UPN’ parameter in the integration configuration.":
      "インテグレーション構成の‘UPN’パラメーターに入力します。",
    "Fill in the UPN parameter in the integration configuration.":
      "インテグレーション構成のUPNパラメーターに入力します。",
    "Fill in the UPN, App ID, and Tenant ID parameters in the integration configuration.":
      "インテグレーション構成のUPN、App ID、Tenant IDパラメーターに入力します。",
    "Filter audit logs by type(s). If not specified, all audit log types will be fetched.":
      "種類で監査ログをフィルターします。指定しない場合は、すべての種類の監査ログがフェッチされます。",
    "Filter by entity type. If not selected, it will fetch all events detections.":
      "エンティティタイプでフィルターします。選択しない場合は、すべてのイベント検出をフェッチします。",
    "Filter by killchain stage":
      "キルチェーンステージでフィルター",
    "Filter by threat category":
      "脅威カテゴリーでフィルター",
    "Filter by threat level (LOW, MEDIUM, or HIGH)":
      "脅威レベルでフィルター(LOW、MEDIUM、HIGH)",
    "Filter the Detections by the “Entity Type”(Account and Host).":
      "“Entity Type”(AccountおよびHost)で検出をフィルターします。",
    "Firewall: Configure the vsys":
      "ファイアウォール: vsysを構成する",
    "First fetch time range":
      "最初のフェッチの時間範囲",
    "First fetch timestamp (<number> <time unit>, e.g., 12 hours, 7 days) or a date or epoch timestamp.":
      "最初のフェッチのタイムスタンプ(<number> <time unit>、例: 12 hours、7 days)、または日付もしくはエポックタイムスタンプ。",
    "First fetch timestamp (<number> <time unit>. For example, 12 hours, 7 days)":
      "最初のフェッチのタイムスタンプ(<number> <time unit>。例: 12 hours、7 days)",
    "First fetch timestamp (e.g., 7 days)":
      "最初のフェッチのタイムスタンプ(例: 7 days)",
    "First fetch timestamp (Investigations)":
      "最初のフェッチのタイムスタンプ(Investigations)",
    "Follow these instructions to find an API key that corresponds to a particular Carbon Black user account.":
      "特定のCarbon Blackユーザーアカウントに対応するAPIキーを確認するには、次の手順に従います。",
    "Follow these steps to add custom fields to the User Profile indicator.":
      "User Profileインジケーターにカスタムフィールドを追加するには、次の手順に従います。",
    "Following link describes the process of how one can obtain a Personal Access Token in IdentityNow.":
      "次のリンクでは、IdentityNowでパーソナルアクセストークンを取得する手順について説明しています。",
    "For an API key, go to your user profile at your ThreatCentral account, and press Manage API Keys, where you can generate a new API key.":
      "APIキーを取得するには、ThreatCentralアカウントのユーザープロファイルに移動して、Manage API Keysを押すと、新しいAPIキーを生成できます。",
    "For API 1.0":
      "API 1.0の場合",
    "For API 2.0":
      "API 2.0の場合",
    "For data removal: the authenticated company must have remaining Black Market Data Removal credits.":
      "データ削除の場合: 認証済みの企業に、Black Market Data Removalクレジットが残っている必要があります。",
    "For detailed documentation, see the integration README.":
      "詳細なドキュメントについては、インテグレーションのREADMEを参照してください。",
    "For example, \"example@mail.com\"":
      "例: \"example@mail.com\"",
    "For example, using the “malicious_executables” will fetch only notifications caught by malicious_executables ruleset.":
      "たとえば、“malicious_executables”を使用すると、malicious_executablesルールセットで検出された通知のみがフェッチされます。",
    "For example: 01 Oct 2025, 01 Mar 2021 04:45:33, 2025-12-17T14:05:44Z.":
      "例: 01 Oct 2025、01 Mar 2021 04:45:33、2025-12-17T14:05:44Z。",
    "For information on getting your Okta API token, see the Okta documentation.":
      "OktaのAPIトークンの取得方法については、Oktaのドキュメントを参照してください。",
    "For more information about the service activation, visit the following link: https://docs.paloaltonetworks.com/ngfw/aiops/about/activate-aiops-for-ngfw#activate-aiops-for-ngfw_section_xjs_p55_fyb":
      "サービスのアクティブ化の詳細については、次のリンクを参照してください: https://docs.paloaltonetworks.com/ngfw/aiops/about/activate-aiops-for-ngfw#activate-aiops-for-ngfw_section_xjs_p55_fyb",
    "For more information regarding the JSON objects, please see Proofpoint TRAP documentation under “JSON Alert Source 2.0”.":
      "JSONオブジェクトの詳細については、Proofpoint TRAPのドキュメントの“JSON Alert Source 2.0”を参照してください。",
    "For Recorded Future Sandbox, the token is provided by going to the Recorded Future Portal -> Tools -> Malware Analysis -> API Keys":
      "Recorded Future Sandboxの場合、トークンはRecorded Future Portal -> Tools -> Malware Analysis -> API Keysで取得できます",
    "For secure access to Prisma Cloud API, you need a Prisma Cloud API access key. An access key includes an Access Key ID and a Secret Key.":
      "Prisma Cloud APIに安全にアクセスするには、Prisma CloudのAPIアクセスキーが必要です。アクセスキーは、Access Key IDとSecret Keyで構成されます。",
    "For sending messages using the ChatBot app and mirroring":
      "ChatBotアプリを使用したメッセージの送信とミラーリングの場合",
    "For the configuration, you should configure the server details and credentials either as parameters or as command arguments.":
      "構成では、サーバーの詳細と認証情報を、パラメーターまたはコマンド引数のいずれかとして構成する必要があります。",
    "For the configuration, you should either configure server details as parameters, or as command inputs.":
      "構成では、サーバーの詳細をパラメーターとして構成するか、コマンド入力として構成する必要があります。",
    "For the JWT method (deprecated)":
      "JWT方式の場合(非推奨)",
    "For XSOAR users below 6.0.0 version, using ‘Pull from instance’ option when creating a new mapper is not supported.":
      "6.0.0より前のバージョンのXSOARユーザーの場合、新しいマッパーを作成するときの‘Pull from instance’オプションはサポートされていません。",
    "Force Encryption":
      "暗号化を強制する",
    "Force encryption on the connection, requires SMBv3 or newer on the remote server. Default is \"false\".":
      "接続で暗号化を強制します。リモートサーバーがSMBv3以降である必要があります。デフォルトは「false」です。",
    "Format: `https://{hostName}:{port}`":
      "形式: `https://{hostName}:{port}`",
    "From `brokercerts.crt` file.":
      "`brokercerts.crt`ファイルから取得します。",
    "From `client.crt` file.":
      "`client.crt`ファイルから取得します。",
    "From `client.key` file. Make sure that the type of the field is not `encrypted` when filling it out.":
      "`client.key`ファイルから取得します。入力する際は、フィールドのタイプが`encrypted`ではないことを確認してください。",
    "Full Incident Enrichment":
      "インシデントの完全なエンリッチメント",
    "Full Incident Enrichment - Clear this checkbox to disable QRadar offense enrichment performed in fetch-incidents. This might help if you encounter a timeout while fetching new incidents.":
      "インシデントの完全なエンリッチメント - このチェックボックスをオフにすると、fetch-incidentsで実行されるQRadarオフェンスのエンリッチメントが無効になります。新しいインシデントのフェッチ中にタイムアウトが発生する場合に有効なことがあります。",
    "Fully Qualified Domain Name (FQDN) - used in EHLO":
      "完全修飾ドメイン名(FQDN) - EHLOで使用されます",
    "Generate a RiskSense API Token":
      "RiskSense APIトークンを生成する",
    "Generate a self-signed certificate":
      "自己署名証明書を生成する",
    "Generate an API key, copy it, and then paste it in the integration configuration.":
      "APIキーを生成してコピーし、インテグレーション構成に貼り付けます。",
    "Get a VirusTotal API Key":
      "VirusTotal APIキーの取得",
    "Get incident attachments":
      "インシデントの添付ファイルを取得",
    "Get the BloodHound Enterprise API Token ID and Token Key":
      "BloodHound EnterpriseのAPIトークンIDとトークンキーの取得",
    "Get token API documentation":
      "トークンAPIドキュメントを取得",
    "Get Your Okta API Token":
      "OktaのAPIトークンの取得",
    "Get Your Slack API Token":
      "SlackのAPIトークンの取得",
    "Get your Tenzai API key":
      "Tenzai APIキーの取得",
    "Getting Access":
      "アクセスの取得",
    "Go to the Okta IAM integration instance and in the mapper textbox, replace the name of the default mapper with the custom mapper you created.":
      "Okta IAMインテグレーションインスタンスに移動し、マッパーのテキストボックスで、デフォルトのマッパーの名前を作成したカスタムマッパーに置き換えます。",
    "Go to the ServiceNow IAM integration instance and in the mapper textbox, replace the name of the default mapper with the custom mapper you created.":
      "ServiceNow IAMインテグレーションインスタンスに移動し、マッパーのテキストボックスで、デフォルトのマッパーの名前を作成したカスタムマッパーに置き換えます。",
    "Grant the Demisto Bot Permissions in Microsoft Graph":
      "Microsoft GraphでDemisto Botに権限を付与します",
    "Granting JWT to admin is not allowed.":
      "管理者へのJWTの付与は許可されていません。",
    "Host name that should appear in certificate":
      "証明書に表示されるホスト名",
    "Host URL":
      "ホストURL",
    "Hostname, IP address, or server URL":
      "ホスト名、IPアドレス、またはサーバーURL",
    "Hours before first fetch to retrieve incidents":
      "最初のフェッチ前にインシデントを取得する時間数",
    "How many hours ago":
      "何時間前か",
    "How many incidents to fetch each time":
      "毎回フェッチするインシデント数",
    "How to Build a Query":
      "クエリの作成方法",
    "How to Create a Splunk Authentication Token":
      "Splunk認証トークンの作成方法",
    "How to fetch assets and vulnerabilities":
      "アセットと脆弱性をフェッチする方法",
    "How to get your Panorays API Key":
      "Panorays APIキーの取得方法",
    "How to get your Vectra Client ID and Client Secret Key":
      "VectraのクライアントIDとクライアントシークレットキーの取得方法",
    "How To get your VMRay API Key":
      "VMRay APIキーの取得方法",
    "How to retrieve a Palo Alto Networks WildFire Reports API key":
      "Palo Alto Networks WildFireレポートAPIキーの取得方法",
    "How to retrieve a WildFire API key":
      "WildFire APIキーの取得方法",
    "However, there is a trade-off: the larger the window, the longer fetch queries will take to complete.":
      "ただし、トレードオフがあります。ウィンドウが大きいほど、フェッチクエリの完了に時間がかかります。",
    "However, there is obviously a price - the larger the window, the longer it will take for fetch queries to complete.":
      "ただし、当然ながら代償があります。ウィンドウが大きいほど、フェッチクエリの完了に時間がかかります。",
    "However, they may not suffice for viewing records in some tables.":
      "ただし、一部のテーブルのレコードを表示するには十分でない場合があります。",
    "HR use Workday to manage CRUD operations for employees in the organization. It is standard practice for HR to generate reports for these CRUD operations. For example, running a weekly report that captures all new employees and terminated employees, or a daily report that captures updates to existing employee profiles (e.g., new mailing address or phone number).":
      "HR部門はWorkdayを使用して、組織内の従業員に対するCRUD操作を管理します。HR部門がこれらのCRUD操作のレポートを生成するのは標準的な慣行です。たとえば、新規従業員と退職した従業員をすべて取得する週次レポートや、既存の従業員プロフィールの更新(例: 新しい郵送先住所や電話番号)を取得する日次レポートを実行します。",
    "HTTP request timeout (seconds)":
      "HTTPリクエストのタイムアウト(秒)",
    "HTTP Request Timeout (Specify the time interval in seconds. All the RiskSense API calls would timeout if the response is not returned within the configured time interval).":
      "HTTPリクエストのタイムアウト(時間間隔を秒単位で指定します。設定した時間間隔内に応答が返されない場合、すべてのRiskSense API呼び出しがタイムアウトします)。",
    "Human Readable Output":
      "人間が判読できる出力",
    "IAM Configuration":
      "IAM構成",
    "ID (received from the admin consent - see Detailed Instructions (?)":
      "ID(管理者の同意から受け取ったもの - 詳細な手順を参照してください(?)",
    "Identify the fields list from the Splunk query and save it to a local file.":
      "Splunkクエリからフィールドのリストを特定し、ローカルファイルに保存します。",
    "Identity enrichment lookup tables":
      "アイデンティティエンリッチメントのルックアップテーブル",
    "Identity posture management, directory sync, and security posture monitoring for Entra ID":
      "Entra IDのアイデンティティ態勢管理、ディレクトリ同期、セキュリティ態勢モニタリング",
    "Identity search enrichment":
      "アイデンティティ検索のエンリッチメント",
    "IdentityIQ Server URL (e.g. https://identityiq-server.com/identityiq)":
      "IdentityIQサーバーURL(例: https://identityiq-server.com/identityiq)",
    "IdentityNow Server URL (e.g. https://org.api.identitynow.com)":
      "IdentityNowサーバーURL(例: https://org.api.identitynow.com)",
    "If both body and htmlBody are provided, we will create an alternative envelope":
      "bodyとhtmlBodyの両方が指定されている場合、代替エンベロープを作成します",
    "If checked, the fetch incidents command will sample (at most) five incidents. Use only to sample incidents for classification & mapping.":
      "チェックすると、インシデントのフェッチコマンドは(最大)5件のインシデントをサンプリングします。分類とマッピング用にインシデントをサンプリングする場合にのみ使用してください。",
    "If enabled, the integration will activate the command changes after each execution. If disabled, use the 'zia-activate-changes' command to activate Zscaler command changes.":
      "有効にすると、インテグレーションは各実行後にコマンドの変更を有効化します。無効にした場合は、'zia-activate-changes'コマンドを使用してZscalerのコマンドの変更を有効化します。",
    "If enabled, the integration will activate the command changes after each execution. If disabled, use the 'zscaler-activate-changes' command to activate Zscaler command changes.":
      "有効にすると、インテグレーションは各実行後にコマンドの変更を有効化します。無効にした場合は、'zscaler-activate-changes'コマンドを使用してZscalerのコマンドの変更を有効化します。",
    "If enabled, the integration will log out after executing each command.":
      "有効にすると、インテグレーションは各コマンドの実行後にログアウトします。",
    "If Fetch incidents is checked, make sure to enter at least one search field.":
      "「インシデントのフェッチ」をオンにした場合は、少なくとも1つの検索フィールドを入力してください。",
    "If not provided, \"host\" or \"system\" should be provided in the command's arguments.":
      "指定しない場合は、コマンドの引数で\"host\"または\"system\"を指定する必要があります。",
    "If not set, Client ID will be used.":
      "設定しない場合は、クライアントIDが使用されます。",
    "If nothing is selected, **All** severities will be used.":
      "何も選択されていない場合は、**すべて**の重大度が使用されます。",
    "If nothing is selected, **All** statuses will be used.":
      "何も選択されていない場合は、**すべて**のステータスが使用されます。",
    "If the Detection Status is updated in the Vectra Detection, it will be reflected in the XSOAR incident, or vice versa.":
      "Vectra DetectionでDetection Statusが更新された場合、XSOARのインシデントに反映されます。その逆も同様です。",
    "If the integration was already set with look back > 0, and the look-back is not being increased at any point of time, then those incident duplications would not occur.":
      "インテグレーションがすでにルックバック > 0で設定されており、ルックバックがいずれの時点でも増やされない場合、これらのインシデントの重複は発生しません。",
    "If the second method is used, the system will automatically attempt to generate a token. If this attempt fails, it will then revert to using the first method.":
      "2番目の方法を使用する場合、システムは自動的にトークンの生成を試みます。この試行が失敗した場合は、1番目の方法の使用に戻ります。",
    "If the server details were configured both as parameters and as command arguments, the commands argument will be used to set the connection.":
      "サーバーの詳細がパラメーターとコマンド引数の両方で設定されている場合、コマンドの引数が接続の設定に使用されます。",
    "If true, will not raise an error if the image is corrupt and could not be processed.":
      "trueの場合、画像が破損していて処理できなくてもエラーは発生しません。",
    "If you are a multi-tenant user and the body parameters of your login call include a user name and password instead of an access key ID and secret key, then you will also need to provide the Customer name":
      "マルチテナントユーザーで、ログイン呼び出しのbodyパラメーターにアクセスキーIDとシークレットキーではなくユーザー名とパスワードが含まれている場合は、Customer nameも指定する必要があります",
    "If you are a multi-tenant user you will also need to provide the customerName.":
      "マルチテナントユーザーの場合は、customerNameも指定する必要があります。",
    "If you previously had an API V1 configured based on the credentials obtained from this method, refer to the link above to gain new credentials with the relevant permissions.":
      "以前にこの方法で取得した認証情報に基づいてAPI V1を設定していた場合は、上記のリンクを参照して、関連する権限を持つ新しい認証情報を取得してください。",
    "If you want to close a detection in Vectra when the incident is closed in XSOAR, check the “Close Detection on Incident Closure” option. This option is only used when the mirroring direction is set to ‘Outgoing’ or ‘Incoming And Outgoing’.":
      "XSOARでインシデントがクローズされたときにVectraで検出をクローズする場合は、“Close Detection on Incident Closure”オプションをオンにします。このオプションは、ミラーリング方向が‘Outgoing’または‘Incoming And Outgoing’に設定されている場合にのみ使用されます。",
    "If you want to reopen a detection in Vectra when the incident is reopened in XSOAR, check the “Open Detection on Incident Reopen” option. This option is only used when the mirroring direction is set to ‘Outgoing’ or ‘Incoming And Outgoing’.":
      "XSOARでインシデントが再オープンされたときにVectraで検出を再オープンする場合は、“Open Detection on Incident Reopen”オプションをオンにします。このオプションは、ミラーリング方向が‘Outgoing’または‘Incoming And Outgoing’に設定されている場合にのみ使用されます。",
    "If you want to set the language to en-US, use en-GB instead.":
      "言語をen-USに設定したい場合は、代わりにen-GBを使用してください。",
    "If you want to use the mirror mechanism and you’re using custom mappers, then the incoming mapper must contain the following fields: dbotMirrorDirection, dbotMirrorId, dbotMirrorInstance, and dbotMirrorTags.":
      "ミラーリング機構を使用し、カスタムマッパーを使用している場合、受信マッパーには次のフィールドを含める必要があります: dbotMirrorDirection、dbotMirrorId、dbotMirrorInstance、dbotMirrorTags。",
    "If you wish to configure a mapper, wait for the integration to perform the first fetch successfully. This is to make the fetch mechanism logic stable.":
      "マッパーを設定する場合は、インテグレーションが最初のフェッチを正常に実行するまで待ちます。これは、フェッチ機構のロジックを安定させるためです。",
    "Image scanning":
      "イメージスキャン",
    "Implement OAuth for Okta":
      "OktaのOAuthを実装する",
    "Implemented in Python to support extensions.":
      "拡張機能をサポートするためにPythonで実装されています。",
    "Import from offset":
      "オフセットからインポート",
    "Import from partition":
      "パーティションからインポート",
    "Import from topic":
      "トピックからインポート",
    "Important note: resetting the integration cache removes all data about teams, channels, members saved in the integration context. Performing this step requires removing the bot from all teams it was added to.":
      "重要な注意: インテグレーションのキャッシュをリセットすると、インテグレーションコンテキストに保存されているチーム、チャネル、メンバーに関するすべてのデータが削除されます。この手順を実行するには、ボットが追加されたすべてのチームからボットを削除する必要があります。",
    "Important Notes":
      "重要な注意事項",
    "Important: If you want to use the mirror mechanism, the incoming mapper must contain the following fields: dbotMirrorDirection, dbotMirrorId, dbotMirrorInstance":
      "重要: ミラーリング機構を使用する場合、受信マッパーには次のフィールドを含める必要があります: dbotMirrorDirection、dbotMirrorId、dbotMirrorInstance",
    "Important: The limit value can range from 10 to 200 and must be in multiples of 10.":
      "重要: limitの値は10~200の範囲で指定でき、10の倍数である必要があります。",
    "In case access is required to an instance in the cloud, use the PEM file provided by the cloud provider.":
      "クラウド上のインスタンスへのアクセスが必要な場合は、クラウドプロバイダーが提供するPEMファイルを使用します。",
    "In order to add a rule name, use the filter name “alertRule.name”. In order to add a policy name, use the filter name “policy.name”.":
      "ルール名を追加するには、フィルター名“alertRule.name”を使用します。ポリシー名を追加するには、フィルター名“policy.name”を使用します。",
    "In order to configure the SIGNL4 pack in Cortex you just need the SIGNL4 team or integration secret (Password). You can find the same in your SIGNL4 web portal under Teams or under Integrations -> Installed -> Inbound Webhook. It is the last part of your webhook URL.":
      "CortexでSIGNL4パックを構成するには、SIGNL4のチームまたはインテグレーションのシークレット(パスワード)だけが必要です。これはSIGNL4のWebポータルの「Teams」または「Integrations -> Installed -> Inbound Webhook」で確認できます。Webhook URLの最後の部分です。",
    "In order to ensure the mirroring works as expected, mappers are required, both for incoming and outgoing, to map the expected fields in Cortex and Splunk.":
      "ミラーリングが想定どおりに動作するよう、CortexとSplunkの想定されるフィールドをマッピングするために、受信用と送信用の両方のマッパーが必要です。",
    "In order to use the Cortex application, use the default application ID.":
      "Cortexアプリケーションを使用するには、デフォルトのアプリケーションIDを使用します。",
    "In order to use the Cortex Azure application, use the default application ID (3307a0ab-612c-47af-b3b5-8208247562db).":
      "Cortex Azureアプリケーションを使用するには、デフォルトのアプリケーションID(3307a0ab-612c-47af-b3b5-8208247562db)を使用します。",
    "In order to use the rest of the commands, you are required to provide: App ID, App Key, Access Key & Secret Key.":
      "その他のコマンドを使用するには、次の情報を指定する必要があります: App ID、App Key、Access Key & Secret Key。",
    "In order to use this integration, you need to enter your Zoom credentials in the relevant integration instance parameters.":
      "このインテグレーションを使用するには、関連するインテグレーションインスタンスのパラメーターにZoomの認証情報を入力する必要があります。",
    "In PEM format. Required and used if OAuth 2.0 is used for authentication. See detailed instructions on the 'Help' tab.":
      "PEM形式です。認証にOAuth 2.0を使用する場合に必須であり、使用されます。詳細な手順は'Help'タブを参照してください。",
    "In some hosted ElasticSearch environments, the standard ElasticSearch client is not supported. If you encounter any related client issues, please consider using the OpenSearch client type.":
      "一部のホスト型ElasticSearch環境では、標準のElasticSearchクライアントがサポートされていません。クライアントに関連する問題が発生した場合は、OpenSearchクライアントタイプの使用を検討してください。",
    "In Splunk, there is often a delay between the time an incident is created (the event’s “occurrence time”) and the time it is actually searchable in Splunk and visible in the index (the event’s “index time”).":
      "Splunkでは、インシデントが作成された時刻(イベントの“occurrence time”)と、実際にSplunkで検索可能になりインデックスで参照できるようになる時刻(イベントの“index time”)の間に、遅延が生じることがよくあります。",
    "In Strata Cloud Manager, navigate to AI Security > API Applications":
      "Strata Cloud Managerで、AI Security > API Applicationsに移動します",
    "In the Silent Push Profile menu, click Organisation, and go to the API tab.":
      "Silent PushのProfileメニューで「Organisation」をクリックし、「API」タブに移動します。",
    "In the Summary indexing section, select the summary index, and enter the {key:value} pair for Cortex classification.":
      "Summary indexingセクションで、サマリーインデックスを選択し、Cortexの分類用に{key:value}ペアを入力します。",
    "In this case, all connections to Microsoft Security and Compliance PowerShell will use interactive delegated authentication.":
      "この場合、Microsoft Security and Compliance PowerShellへのすべての接続で、対話型の委任認証が使用されます。",
    "Incident Asset Enrichment":
      "インシデントアセットのエンリッチメント",
    "Incident Asset Enrichment - When enabled, fetched offenses will also contain correlated assets.":
      "インシデントアセットのエンリッチメント - 有効にすると、フェッチされたオフェンスに、関連付けられたアセットも含まれます。",
    "Incident Enrichment (Asset) - When enabled, fetched offenses will also contain correlated assets.":
      "インシデントのエンリッチメント(アセット) - 有効にすると、フェッチされたオフェンスに、関連付けられたアセットも含まれます。",
    "Incident Enrichment (IP) - When enabled, fetched incidents IP values (local source addresses and local destination addresses) will be fetched from QRadar instead of their ID values.":
      "インシデントのエンリッチメント(IP) - 有効にすると、フェッチされたインシデントのIP値(ローカル送信元アドレスとローカル宛先アドレス)が、ID値ではなくQRadarからフェッチされます。",
    "Incident IP Enrichment":
      "インシデントIPのエンリッチメント",
    "Incident IP Enrichment - When enabled, fetched incidents IP values (local source addresses and local destination addresses) will be fetched from QRadar instead of their ID values.":
      "インシデントIPのエンリッチメント - 有効にすると、フェッチされたインシデントのIP値(ローカル送信元アドレスとローカル宛先アドレス)が、ID値ではなくQRadarからフェッチされます。",
    "Incident management — Retrieve and change the incident status.":
      "インシデント管理 — インシデントのステータスを取得および変更します。",
    "Incident Mirroring":
      "インシデントのミラーリング",
    "Incident statuses to fetch":
      "フェッチするインシデントのステータス",
    "Incident Type":
      "インシデントタイプ",
    "Incidents":
      "インシデント",
    "Incidents channel":
      "インシデントチャネル",
    "Incidents Filter":
      "インシデントフィルター",
    "Incoming - Any changes in Splunk findings (finding’s status, status_label, urgency, comments, and owner) will be reflected in Cortex incidents.":
      "受信 - Splunkのfindings(findingのstatus、status_label、urgency、comments、owner)の変更はすべてCortexのインシデントに反映されます。",
    "Incoming - Any changes in Splunk notables (notable’s status, status_label, urgency, comments, and owner) will be reflected in Cortex incidents.":
      "受信 - Splunkのnotables(notableのstatus、status_label、urgency、comments、owner)の変更はすべてCortexのインシデントに反映されます。",
    "Incoming - Mirrors changes from the Vectra RUX Detection into the Cortex incident.":
      "受信 - Vectra RUX Detectionからの変更をCortexのインシデントにミラーリングします。",
    "Incoming and Outgoing":
      "受信と送信",
    "Incoming And Outgoing - Changes in Cortex incidents and Splunk findings will be reflected in both directions.":
      "受信と送信 - Cortexのインシデントとsplunkのfindingsの変更が双方向に反映されます。",
    "Incoming And Outgoing - Changes in Cortex incidents and Splunk notables will be reflected in both directions.":
      "受信と送信 - CortexのインシデントとSplunkのnotablesの変更が双方向に反映されます。",
    "Incoming And Outgoing - Mirrors changes both Incoming and Outgoing directions on incidents.":
      "受信と送信 - インシデントの受信方向と送信方向の両方で変更をミラーリングします。",
    "Indicator Field":
      "インジケーターフィールド",
    "Indicator Thresholds":
      "インジケーターのしきい値",
    "Indicator Types":
      "インジケータータイプ",
    "Indicators with positive results equal to or higher than half of the threshold value, and lower than the threshold, will be considered suspicious.":
      "陽性結果の数がしきい値の半分以上で、かつしきい値未満のインジケーターは、疑わしいと見なされます。",
    "Indicators with positive results equal to or higher than the threshold will be considered malicious.":
      "陽性結果の数がしきい値以上のインジケーターは、悪意があると見なされます。",
    "Ingest Incidents from a SIEM Using Splunk article":
      "SplunkでSIEMからインシデントを取り込む記事",
    "Ingests Vectra AI detections as Cortex incidents enriched with entity-level risk prioritization from Attack Signal Intelligence. Priority is persistent and updates as threats evolve - high-risk detections stay surfaced until resolved. Bidirectional synchronization keeps incident state aligned across both platforms in real time.":
      "Vectra AIの検出結果を、Attack Signal Intelligenceによるエンティティレベルのリスク優先順位付けで強化したCortexのインシデントとして取り込みます。優先度は永続的で、脅威の進展に応じて更新されます。リスクの高い検出結果は解決されるまで表示され続けます。双方向の同期により、両方のプラットフォーム間でインシデントの状態がリアルタイムに一致した状態に保たれます。",
    "Initial Fetch":
      "初回フェッチ",
    "Initial Fetch Interval (In minutes, used only for first fetch or after Reset last run)":
      "初回フェッチ間隔(分単位。最初のフェッチ時、またはReset last runの後にのみ使用されます)",
    "Initial fetching history (in minutes)":
      "初回フェッチの履歴(分単位)",
    "Input the API key to access the sandbox.":
      "サンドボックスにアクセスするためのAPIキーを入力します。",
    "Input the url of SecneurX Analysis server.":
      "SecneurX AnalysisサーバーのURLを入力します。",
    "Install the Workflows app in Microsoft Teams":
      "Microsoft TeamsにWorkflowsアプリをインストールする",
    "Instance Configuration":
      "インスタンスの設定",
    "Instance Date Format":
      "インスタンスの日付形式",
    "Integrate Cloud Security with your MongoDB Atlas Account to gain comprehensive visibility into any data and posture risk existing in your MongoDB Atlas environment. This integration enables automated scanning of all assets in MongoDB Atlas, including data classification and risk assessment.":
      "Cloud SecurityをMongoDB Atlasアカウントと統合すると、MongoDB Atlas環境に存在するあらゆるデータおよび態勢リスクを包括的に可視化できます。このインテグレーションにより、データ分類やリスク評価を含む、MongoDB Atlas内のすべてのアセットを自動的にスキャンできます。",
    "Integrate Cloud Security with your Snowflake Account to gain comprehensive visibility into any data and posture risk existing in your Snowflake environment.This integration enables automated scanning of all assets in Snowflake,including data classification and risk assessment.":
      "Cloud SecurityをSnowflakeアカウントと統合すると、Snowflake環境に存在するあらゆるデータおよび態勢リスクを包括的に可視化できます。このインテグレーションにより、データ分類やリスク評価を含む、Snowflake内のすべてのアセットを自動的にスキャンできます。",
    "Integration documentation":
      "インテグレーションのドキュメント",
    "Integration flow":
      "インテグレーションフロー",
    "Integration with Intel Security’s ePolicy Orchestrator using the official API.":
      "公式APIを使用したIntel SecurityのePolicy Orchestratorとのインテグレーション。",
    "Interactive terminal mode":
      "対話型ターミナルモード",
    "Investigations fetch query":
      "調査のフェッチクエリ",
    "IP Malicious Threshold. Minimum number of positive results from VT scanners to consider the IP malicious.":
      "IP悪意しきい値。IPを悪意があるものと見なすために必要な、VTスキャナーからの陽性結果の最小数。",
    "IP Relationships":
      "IPのリレーションシップ",
    "IP Suspicious Threshold. Minimum number of positive and suspicious results from VT scanners to consider the IP suspicious.":
      "IP疑わしいしきい値。IPを疑わしいと見なすために必要な、VTスキャナーからの陽性結果および疑わしい結果の最小数。",
    "IP Threshold. Minimum number of positive results from VT scanners to consider the IP malicious.":
      "IPしきい値。IPを悪意があるものと見なすために必要な、VTスキャナーからの陽性結果の最小数。",
    "IP Threshold. Minimum risk score from ThreatX to consider the IP malicious.":
      "IPしきい値。IPを悪意があるものと見なすために必要な、ThreatXからの最小リスクスコア。",
    "JWT Authentication":
      "JWT認証",
    "JWT Authentication.":
      "JWT認証。",
    "JWT Signing Algorithm":
      "JWT署名アルゴリズム",
    "Keep the defaults for fetch limit, first fetch timestamp, earliest time to fetch, and latest time to fetch.":
      "フェッチの上限、最初のフェッチのタイムスタンプ、フェッチ対象の最も早い時刻、フェッチ対象の最も遅い時刻には、デフォルト値をそのまま使用します。",
    "Keep the Get notable events EQ query as is, as we use the Notable macro when ingesting events. You can create a more granular search by specifying specific conditions such as specific security domain, event ID, etc.":
      "イベントを取り込む際にNotableマクロを使用するため、Get notable events EQクエリはそのままにしてください。特定のセキュリティドメインやイベントIDなどの特定の条件を指定して、より細かい検索を作成できます。",
    "Kenna API key":
      "Kenna APIキー",
    "Key (received from the admin consent - see Detailed Instructions (?)":
      "キー(管理者の同意から受け取ったもの - 詳細な手順を参照してください(?)",
    "Key Algorithms":
      "キーアルゴリズム",
    "Key Features":
      "主な機能",
    "Key ID":
      "キーID",
    "Key or Client Secret (can be used instead of Certificate Thumbprint and Private Key)":
      "キーまたはクライアントシークレット(証明書の拇印と秘密鍵の代わりに使用できます)",
    "Kibana API Port":
      "Kibana APIポート",
    "Languages":
      "言語",
    "Last Incident ID (for initial fetch)":
      "最後のインシデントID(初回フェッチ用)",
    "Last Run":
      "前回の実行",
    "Lastly, copy the API key.":
      "最後に、APIキーをコピーします。",
    "Limit of indicators to fetch from livehunt notification. Max 40.":
      "livehuntの通知からフェッチするインジケーターの上限数。最大40。",
    "Limit of indicators to fetch from retrohunt job results.":
      "retrohuntジョブの結果からフェッチするインジケーターの上限数。",
    "Limitations":
      "制限事項",
    "Limitions":
      "制限事項",
    "List of domains to block":
      "ブロックするドメインのリスト",
    "Lists all of the security vulnerabilities for various products (OS,Applications) etc)":
      "さまざまな製品(OS、アプリケーションなど)のすべてのセキュリティ脆弱性を一覧表示します",
    "Located in the Firewall URL; by default of PAN-OS it is vsys1":
      "ファイアウォールのURLにあります。PAN-OSのデフォルトはvsys1です",
    "Located in the Panorama UI. Go to Panorama, Device Groups and select the desired Device Group":
      "Panorama UIにあります。Panorama、Device Groupsの順に移動し、目的のDevice Groupを選択します",
    "Log access — Access log files. You can either provide the client log access API or add a syslog receiver.":
      "ログアクセス — ログファイルにアクセスします。クライアントのログアクセスAPIを指定するか、syslogレシーバーを追加できます。",
    "Log in to Kibana.":
      "Kibanaにログインします。",
    "Log in to the Carbon Black console as the user for which you want to get the API key.":
      "APIキーを取得したいユーザーとしてCarbon Blackコンソールにログインします。",
    "Log in to the Vectra UI as this local user.":
      "このローカルユーザーとしてVectra UIにログインします。",
    "Log in to your (Kenna account)[https://app.kennasecurity.com].":
      "(Kennaアカウント)[https://app.kennasecurity.com]にログインします。",
    "Log in to your BloodHound Enterprise (BHE) tenant.":
      "BloodHound Enterprise(BHE)テナントにログインします。",
    "Log in to your Magnet Automate interface.":
      "Magnet Automateインターフェースにログインします。",
    "Log in to your Panorays platform.":
      "Panoraysプラットフォームにログインします。",
    "Log in to your Splunk instance as an administrator":
      "管理者としてSplunkインスタンスにログインします",
    "Log in to your VirusTotal console.":
      "VirusTotalコンソールにログインします。",
    "Log Type Query":
      "ログタイプクエリ",
    "Log Type Query Examples":
      "ログタイプクエリの例",
    "Log Type Query.":
      "ログタイプクエリ。",
    "Login to the RiskSense platform.":
      "RiskSenseプラットフォームにログインします。",
    "Long running instance enabled":
      "長時間実行インスタンスが有効",
    "Lookback Parameter Notes":
      "ルックバックパラメーターに関する注意事項",
    "Mail server hostname or IP address":
      "メールサーバーのホスト名またはIPアドレス",
    "Maintain a consistent incident lifecycle between Threatmon and XSOAR.":
      "ThreatmonとXSOARの間で一貫したインシデントのライフサイクルを維持します。",
    "Make sure the toggle at the bottom is switched on.":
      "下部のトグルがオンになっていることを確認します。",
    "Manage PingOne users and their authentication settings through the PingOne Management API.":
      "PingOne Management APIを使用して、PingOneユーザーとその認証設定を管理します。",
    "Map the severity of each indicator that will be synced to Cortex.":
      "Cortexに同期される各インジケーターの重大度をマッピングします。",
    "Mapping limitations for XSOAR users below 6.0.0":
      "6.0.0未満のXSOARユーザー向けのマッピングの制限事項",
    "Mattermost server address (e.g. https://1.2.3.4:8065)":
      "Mattermostサーバーのアドレス(例: https://1.2.3.4:8065)",
    "Max fetch":
      "最大フェッチ数",
    "Max Fetch":
      "最大フェッチ数",
    "Max incidents per fetch (for each selected Log Type Query)":
      "フェッチあたりの最大インシデント数(選択した各ログタイプクエリごと)",
    "Max number of events per incident":
      "インシデントあたりの最大イベント数",
    "Maximum API requests per minute":
      "1分あたりの最大APIリクエスト数",
    "Maximum events to fetch per fetch":
      "フェッチごとにフェッチするイベントの最大数",
    "Maximum incidents per fetch per type":
      "フェッチごと・タイプごとのインシデントの最大数",
    "Maximum investigations per fetch":
      "フェッチごとの調査の最大数",
    "Maximum is limited to 200.":
      "最大値は200に制限されています。",
    "Maximum number of assets to fetch":
      "フェッチするアセットの最大数",
    "Maximum number of entries returned from the query, to avoid slow response.":
      "応答の遅延を避けるため、クエリから返されるエントリの最大数です。",
    "Maximum number of events per fetch":
      "フェッチごとのイベントの最大数",
    "Maximum number of events to fetch per type per fetch cycle (default: 5000).":
      "フェッチサイクルごと・タイプごとにフェッチするイベントの最大数(デフォルト: 5000)。",
    "Maximum number of incidents per fetch":
      "フェッチごとのインシデントの最大数",
    "Maximum number of incidents to fetch":
      "フェッチするインシデントの最大数",
    "Maximum Number Of Incidents To Fetch":
      "フェッチするインシデントの最大数",
    "Maximum number of incidents to fetch per run":
      "実行ごとにフェッチするインシデントの最大数",
    "Maximum time to wait for a page to load (in seconds)":
      "ページの読み込みを待機する最大時間(秒)",
    "Maximum time to wait for a rate limiting call in seconds":
      "レート制限の呼び出しを待機する最大時間(秒)",
    "McAfee ePO Server URI":
      "McAfee ePOサーバーURI",
    "MCP Server Name":
      "MCPサーバー名",
    "Methods to Authenticate Microsoft Defender XDR":
      "Microsoft Defender XDRの認証方法",
    "MFA can be used both when using basic authorization and when using OAuth 2.0 authorization, however we strongly recommend using OAuth 2.0 when using MFA.":
      "MFAは基本認証とOAuth 2.0認可のどちらでも使用できますが、MFAを使用する場合はOAuth 2.0を強くお勧めします。",
    "MFA can be used both when using basic authorization and when using OAuth 2.0 authorization, however, we strongly recommend using OAuth 2.0 when using MFA.":
      "MFAは基本認証とOAuth 2.0認可のどちらでも使用できますが、MFAを使用する場合はOAuth 2.0を強くお勧めします。",
    "Microsoft 365 Defender context":
      "Microsoft 365 Defenderのコンテキスト",
    "Microsoft documentation":
      "Microsoftドキュメント",
    "Microsoft integrations (Graph and Azure) in Cortex use Entra ID applications to authenticate with Microsoft APIs. These integrations use OAuth 2.0 and OpenID Connect standard-compliant authentication services, which use an application to sign in or delegate authentication. For more information, see the Microsoft identity platform overview.":
      "CortexのMicrosoftインテグレーション(GraphおよびAzure)は、Entra IDアプリケーションを使用してMicrosoft APIで認証します。これらのインテグレーションは、OAuth 2.0およびOpenID Connectの標準に準拠した認証サービスを使用しており、アプリケーションを使用してサインインまたは認証を委任します。詳細については、Microsoft identity platform overviewを参照してください。",
    "Microsoft integrations (Graph and Azure) in Cortex use Entra ID applications to authenticate with Microsoft APIs. These integrations use OAuth 2.0 and OpenID Connect standard-compliant authentication services, which use an Application to sign in or delegate authentication. For more information, see the Microsoft identity platform overview.":
      "CortexのMicrosoftインテグレーション(GraphおよびAzure)は、Entra IDアプリケーションを使用してMicrosoft APIで認証します。これらのインテグレーションは、OAuth 2.0およびOpenID Connectの標準に準拠した認証サービスを使用しており、アプリケーションを使用してサインインまたは認証を委任します。詳細については、Microsoft identity platform overviewを参照してください。",
    "Microsoft Management Activity API (O365/Azure Events) should be used to retrieve content records from the various Microsoft Management Activity content types.":
      "Microsoft Management Activity API(O365/Azureイベント)は、さまざまなMicrosoft Management Activityコンテンツタイプからコンテンツレコードを取得するために使用します。",
    "Microsoft Teams Documentation":
      "Microsoft Teamsドキュメント",
    "Microsoft workflow URL":
      "MicrosoftワークフローURL",
    "Microsoft’s technical blog":
      "Microsoftの技術ブログ",
    "Might have to slightly change the existing logic for some of their custom entities configured for Splunk (Playbooks, Mappers, Pre-Processing Rules, Scripts, Classifiers, etc.) in order for them to work with the modified structure of the fetched events.":
      "Splunk用に構成されたカスタムエンティティ(Playbook、マッパー、前処理ルール、スクリプト、分類子など)の一部については、フェッチされたイベントの変更後の構造で動作するように、既存のロジックを少し変更する必要がある場合があります。",
    "Mimecast Documentation":
      "Mimecastドキュメント",
    "Mimecast uses quotas per period of time (i.e. rate limits) that apply to every API function, per registered App. A typical quota is a number of API calls per unit of time (but could also be expressed as the size of data returned, etc.). When the quota has been exhausted, further requests will fail until the new time period restarts the count of API calls. The rate limit reset value is the length of time in milliseconds before a minimum of 1 API will be permitted.":
      "Mimecastは、登録されたアプリごとに、すべてのAPI関数に適用される期間あたりのクォータ(つまりレート制限)を使用します。一般的なクォータは、単位時間あたりのAPI呼び出し回数です(ただし、返されるデータのサイズなどで表されることもあります)。クォータを使い切ると、新しい期間がAPI呼び出し回数のカウントを再開するまで、以降のリクエストは失敗します。レート制限のリセット値は、最低1回のAPI呼び出しが許可されるまでの時間(ミリ秒)です。",
    "Mimecast uses quotas per period of time (i.e., rate limits) that apply to every API function, per registered app. A typical quota is a number of API calls per unit of time (but could also be expressed as the size of data returned, etc.). When the quota has been exhausted, further requests will fail until the new time period restarts the count of API calls. The rate limit reset value is the length of time in milliseconds before a minimum of one API will be permitted.":
      "Mimecastは、登録されたアプリごとに、すべてのAPI関数に適用される期間あたりのクォータ(つまりレート制限)を使用します。一般的なクォータは、単位時間あたりのAPI呼び出し回数です(ただし、返されるデータのサイズなどで表されることもあります)。クォータを使い切ると、新しい期間がAPI呼び出し回数のカウントを再開するまで、以降のリクエストは失敗します。レート制限のリセット値は、最低1回のAPI呼び出しが許可されるまでの時間(ミリ秒)です。",
    "Min severity [1-4] 1=low":
      "最小重大度 [1-4] 1=低",
    "Mirror Offense and Events":
      "オフェンスとイベントのミラーリング",
    "Mirror tag for notes":
      "ノートのミラーリングタグ",
    "Mirroring Direction":
      "ミラーリング方向",
    "Mirroring offenses with events":
      "イベントを含むオフェンスのミラーリング",
    "Mirroring Options":
      "ミラーリングオプション",
    "Model (optional free text override)":
      "モデル(任意の自由テキストによるオーバーライド)",
    "MongoDB Atlas (Posture) Instance":
      "MongoDB Atlas(Posture)インスタンス",
    "MongoDB Atlas Organization ID":
      "MongoDB Atlas組織ID",
    "More information can be found on https://cortex.marketplace.pan.dev/marketplace/details/MicrosoftDefenderAdvancedThreatProtection/":
      "詳細情報はhttps://cortex.marketplace.pan.dev/marketplace/details/MicrosoftDefenderAdvancedThreatProtection/で確認できます",
    "Most fields are optional and we allow empty subject and empty body":
      "ほとんどのフィールドは任意であり、件名と本文を空にすることもできます",
    "My API Key":
      "マイAPIキー",
    "My MongoDB Atlas account is protected by network policies":
      "MongoDB Atlasアカウントはネットワークポリシーで保護されています",
    "My Snowflake account is protected by network policies":
      "Snowflakeアカウントはネットワークポリシーで保護されています",
    "Name of the folder from which to fetch incidents (supports Folder ID and sub-folders e.g., Inbox/Phishing)":
      "インシデントをフェッチするフォルダーの名前(フォルダーIDとサブフォルダーに対応。例: Inbox/Phishing)",
    "Name of the folder or sub-folder from which to fetch incidents":
      "インシデントをフェッチするフォルダーまたはサブフォルダーの名前",
    "Name of the instance":
      "インスタンスの名前",
    "New notes from the Vectra Detection will be created as notes in the XSOAR incident. Updates to existing notes in the Vectra Detection will create new notes in the XSOAR incident.":
      "Vectra Detectionの新しいノートは、XSOARインシデントにノートとして作成されます。Vectra Detectionの既存のノートへの更新は、XSOARインシデントに新しいノートを作成します。",
    "New notes from the XSOAR incident will be created as notes in the Vectra Detection. Updates to existing notes in the XSOAR incident will not be reflected in the Vectra Detection.":
      "XSOARインシデントの新しいノートは、Vectra Detectionにノートとして作成されます。XSOARインシデントの既存のノートへの更新は、Vectra Detectionには反映されません。",
    "Newly fetched incidents will be mirrored in the chosen direction.":
      "新しくフェッチされたインシデントは、選択した方向にミラーリングされます。",
    "None - Turns off incident mirroring.":
      "なし - インシデントのミラーリングをオフにします。",
    "Note for the autofocus-sample-analysis Command":
      "autofocus-sample-analysisコマンドに関する注意",
    "Note that the default query values has some example text in it, make sure to enter a valid query.":
      "デフォルトのクエリ値にはサンプルテキストが含まれているため、必ず有効なクエリを入力してください。",
    "Note: Cortex recommends you use the Query only application events configured in IAM Configuration option to generate the fetch-incidents query filter. The following following method should be used primarily for debugging purposes.":
      "注: fetch-incidentsクエリフィルターを生成するには、「Query only application events configured in IAM Configuration」オプションを使用することをCortexは推奨しています。以下の方法は、主にデバッグ目的で使用してください。",
    "Note: If you are using a custom incident type, you also need to create custom corresponding incoming and outgoing mappers.":
      "注: カスタムインシデントタイプを使用している場合は、対応するカスタムの受信マッパーと送信マッパーも作成する必要があります。",
    "Note: If you have a TIM license that is up-to-date, you do not need to set up an API key.":
      "注: 最新のTIMライセンスをお持ちの場合は、APIキーを設定する必要はありません。",
    "Note: In the example, Splunk Generic is a custom incident type.":
      "注: この例では、Splunk Genericはカスタムインシデントタイプです。",
    "Note: JWT authentication method was deprecated by Zoom from June 2023 and not available anymore.":
      "注: JWT認証方式は、2023年6月からZoomで非推奨となり、現在は利用できません。",
    "NOTE: The enrichment and mirroring mechanisms use a new default fetch query.":
      "注: エンリッチメントとミラーリングのメカニズムでは、新しいデフォルトのフェッチクエリを使用します。",
    "Note: The integration is supported in Cortex and Cortex XSIAM without using an engine.":
      "注: このインテグレーションは、エンジンを使用せずにCortexおよびCortex XSIAMでサポートされています。",
    "Note: This is a beta Integration, which lets you implement and test pre-release software. Since the integration is beta, it might contain bugs. Updates to the integration during the beta phase might include non-backward compatible features. We appreciate your feedback on the quality and usability of the integration to help us identify issues, fix them, and continually improve.":
      "注: これはベータ版のインテグレーションであり、リリース前のソフトウェアを導入してテストできます。ベータ版のため、バグが含まれている可能性があります。ベータ期間中のインテグレーションの更新には、下位互換性のない機能が含まれる場合があります。問題の特定と修正、および継続的な改善のため、インテグレーションの品質と使いやすさに関するフィードバックをお待ちしております。",
    "Note: This parameter is only used when close detection on incident closer is 'checked' and the mirroring direction is set to 'Outgoing' or 'Incoming And Outgoing'.":
      "注: このパラメーターは、close detection on incident closerが'checked'で、かつミラーリング方向が'Outgoing'または'Incoming And Outgoing'に設定されている場合にのみ使用されます。",
    "Note: This parameter is only used when open detection on incident reopen is 'checked' and the mirroring direction is set to 'Outgoing' or 'Incoming And Outgoing'.":
      "注: このパラメーターは、open detection on incident reopenが'checked'で、かつミラーリング方向が'Outgoing'または'Incoming And Outgoing'に設定されている場合にのみ使用されます。",
    "Note: This parameter is only used when the mirroring direction is set to 'Outgoing' or 'Incoming And Outgoing'.":
      "注: このパラメーターは、ミラーリング方向が'Outgoing'または'Incoming And Outgoing'に設定されている場合にのみ使用されます。",
    "Note: This will not affect existing incidents.":
      "注: これは既存のインシデントには影響しません。",
    "Note: When upgrading from v1 (MITRE IDs Feed) to v2 (MITRE ATT&CK) - disabling the MITRE IDs Feed indicator type, and instance are important for the smooth flow of the upgrade.":
      "注: v1(MITRE IDs Feed)からv2(MITRE ATT&CK)にアップグレードする場合、アップグレードを円滑に進めるには、MITRE IDs Feedのインジケータータイプとインスタンスを無効にすることが重要です。",
    "Notice: Submitting indicators using the following commands of this integration might make the indicator data publicly available.":
      "注意: このインテグレーションの以下のコマンドを使用してインジケーターを送信すると、インジケーターのデータが公開される可能性があります。",
    "Notifications channel":
      "通知チャネル",
    "Notifications channel (You will need to invite the Demisto Bot user to this channel)":
      "通知チャネル(このチャネルにDemisto Botユーザーを招待する必要があります)",
    "Number of addresses to enrich per API call":
      "API呼び出しごとにエンリッチするアドレスの数",
    "Number of connection error retries":
      "接続エラー時の再試行回数",
    "Number of days before hire date to enable Active Directory account":
      "入社日より何日前にActive Directoryアカウントを有効にするかの日数",
    "Number of days before hire date to sync hires":
      "入社日より何日前に新規採用者を同期するかの日数",
    "Number of Events Per Enrichment Type":
      "エンリッチメントタイプごとのイベント数",
    "Number of incidents per fetch.":
      "フェッチごとのインシデント数。",
    "Number of maximum Chrome instances to keep running simultaneously.":
      "同時に実行し続けるChromeインスタンスの最大数。",
    "Number of maximum tabs each Chrome will be allowed to open.":
      "各Chromeで開くことができるタブの最大数。",
    "Number of offenses to pull per API call":
      "API呼び出しごとに取得するオフェンスの数",
    "Number of offenses to pull per API call (max 50)":
      "API呼び出しごとに取得するオフェンスの数(最大50)",
    "OAuth 2.0 Authorization":
      "OAuth 2.0認可",
    "OAuth 2.0 authorization.":
      "OAuth 2.0認可。",
    "OAuth2 Credentials":
      "OAuth2認証情報",
    "Obtain the API Key":
      "APIキーの取得",
    "Obtaining API Credentials":
      "API認証情報の取得",
    "OCR engine.":
      "OCRエンジン。",
    "Offense Enrichment":
      "オフェンスのエンリッチメント",
    "Offenses":
      "オフェンス",
    "Okta API Scopes":
      "Okta APIスコープ",
    "Okta API tokens are used to authenticate requests to Okta APIs.":
      "Okta APIトークンは、Okta APIへのリクエストの認証に使用されます。",
    "Okta documentation":
      "Oktaドキュメント",
    "Okta URL (https://<domain>.okta.com)":
      "Okta URL(https://<domain>.okta.com)",
    "Only applies when Findings scope is \"Supplier Findings\". Only findings with these severities create incidents.":
      "Findings scopeが「Supplier Findings」の場合にのみ適用されます。これらの重大度のファインディングのみがインシデントを作成します。",
    "Only fetch events with this text in the name":
      "名前にこのテキストを含むイベントのみをフェッチ",
    "Only use Features that are available in On-Premise installations":
      "オンプレミスのインストールで利用可能な機能のみを使用",
    "Open Detection on Incident Reopen":
      "インシデントの再オープン時に検出をオープン",
    "Open the Google Authenticator application on your mobile device and make note of the number. The number refreshes every 30 seconds.":
      "モバイルデバイスでGoogle Authenticatorアプリケーションを開き、表示されている数字を書き留めます。数字は30秒ごとに更新されます。",
    "Open the Illusive Management console, navigate to Settings > General, and locate the API KEYS section. Generate a new API key with all permissions and copy the token at the end of the process.":
      "Illusive Management consoleを開き、Settings > Generalに移動して、API KEYSセクションを見つけます。すべての権限を持つ新しいAPIキーを生成し、プロセスの最後にトークンをコピーします。",
    "OpenDXL documentation":
      "OpenDXLドキュメント",
    "Optional":
      "任意",
    "Optional - Welcome message when creating new incidents using the bot. If left empty (default option) the current default welcome message will be used, i.e., \"Successfully created incident <incident_name>. View it on: <incident_link>\". If the parameter is set to \"no_welcome_message\" value, no message will be displayed. Any non-empty string value set will be used as the custom new incident welcome message.":
      "任意 - ボットを使用して新しいインシデントを作成するときのウェルカムメッセージです。空のままにした場合(デフォルトのオプション)は、現在のデフォルトのウェルカムメッセージが使用されます(例: \"Successfully created incident <incident_name>. View it on: <incident_link>\")。パラメーターに\"no_welcome_message\"という値を設定した場合、メッセージは表示されません。空でない文字列値を設定すると、その値がカスタムの新規インシデントウェルカムメッセージとして使用されます。",
    "Other Sources of WildFire API keys":
      "WildFire APIキーのその他の入手元",
    "Outgoing - Any changes in Cortex incidents (finding’s status (not status_label), urgency, comments, and owner) will be reflected in Splunk findings.":
      "Outgoing - Cortexインシデントの変更(ファインディングのステータス(status_labelを除く)、緊急度、コメント、オーナー)は、Splunkのファインディングに反映されます。",
    "Outgoing - Any changes in Cortex incidents (notable’s status (not status_label), urgency, comments, and owner) will be reflected in Splunk notables.":
      "Outgoing - Cortexインシデントの変更(notableのステータス(status_labelを除く)、緊急度、コメント、オーナー)は、Splunkのnotableに反映されます。",
    "Outgoing - Mirrors changes from the Cortex incident to the Vectra RUX Detection.":
      "Outgoing - Cortexインシデントの変更をVectra RUX Detectionにミラーリングします。",
    "Output results of V1 commands to the context data in the old format":
      "V1コマンドの結果を従来の形式でコンテキストデータに出力",
    "Override Agent":
      "エージェントのオーバーライド",
    "Override the agent header sent with WildFire API requests. auto = auto-detect based on platform (XSOAR/XSIAM), xdr = Cortex XSIAM, xsoartim = XSOAR TIM, pcc = Prisma Cloud Compute, prismaaccessapi = Prisma Access, other = NGFW":
      "WildFire APIリクエストとともに送信されるエージェントヘッダーをオーバーライドします。auto = プラットフォーム(XSOAR/XSIAM)に基づく自動検出、xdr = Cortex XSIAM、xsoartim = XSOAR TIM、pcc = Prisma Cloud Compute、prismaaccessapi = Prisma Access、other = NGFW",
    "Package resolution for code scanning":
      "コードスキャンのパッケージ解決",
    "Palo Alto Networks documentation":
      "Palo Alto Networksドキュメント",
    "Palo Alto recommends that you configure Splunk to produce basic alerts that the SplunkPy integration can ingest, by creating a summary index in which alerts are stored. The SplunkPy integration can then query that index for incident ingestion. It is not recommended to use the Cortex application with Splunk for routine event consumption because this method is not able to be monitored and is not scalable.":
      "Palo Altoでは、アラートを保存するサマリーインデックスを作成して、SplunkPyインテグレーションが取り込める基本的なアラートをSplunkで生成するように構成することを推奨しています。SplunkPyインテグレーションは、そのインデックスに対してクエリを実行してインシデントを取り込むことができます。この方法は監視できず、スケーラブルでもないため、通常のイベント取り込みにCortexアプリケーションとSplunkを使用することは推奨されません。",
    "Palo Alto recommends that you configure Splunk to produce basic alerts that the SplunkPy v2 integration can ingest, by creating a summary index in which alerts are stored. The SplunkPy v2 integration can then query that index for incident ingestion. It is not recommended to use the Cortex application with Splunk for routine event consumption because this method is not able to be monitored and is not scalable.":
      "Palo Altoでは、アラートを保存するサマリーインデックスを作成して、SplunkPy v2インテグレーションが取り込める基本的なアラートをSplunkで生成するように構成することを推奨しています。SplunkPy v2インテグレーションは、そのインデックスに対してクエリを実行してインシデントを取り込むことができます。この方法は監視できず、スケーラブルでもないため、通常のイベント取り込みにCortexアプリケーションとSplunkを使用することは推奨されません。",
    "PAN support":
      "PANサポート",
    "Pan-OS/Panorama API Key":
      "Pan-OS/Panorama APIキー",
    "Pan-OS/Panorama Server URL":
      "Pan-OS/PanoramaサーバーURL",
    "Panorays PAPI base URL":
      "Panorays PAPIのベースURL",
    "Parameter":
      "パラメーター",
    "Password - Used to generate the certificate":
      "パスワード - 証明書の生成に使用されます",
    "Password (Required for Basic authentication only)":
      "パスワード(基本認証でのみ必須)",
    "Password / Access Key Secret":
      "パスワード / アクセスキーシークレット",
    "Password / Client Secret":
      "パスワード / クライアントシークレット",
    "Paste the Api Token copied from Orca":
      "OrcaからコピーしたAPIトークンを貼り付けます",
    "Paste your Terraform Enterprise token and domain name in the fields below":
      "以下のフィールドにTerraform Enterpriseのトークンとドメイン名を貼り付けます",
    "PingOne has 3 regions, US, EU and Asia.":
      "PingOneには、US、EU、Asiaの3つのリージョンがあります。",
    "PingOne Region":
      "PingOneリージョン",
    "Please make sure you have the correct role so you have permissions to work with the relevant table.":
      "関連するテーブルを操作する権限を持つよう、適切なロールが割り当てられていることを確認してください。",
    "Please refer to the documentation for a list of known endpoints.":
      "既知のエンドポイントの一覧については、ドキュメントを参照してください。",
    "Port (e.g 443)":
      "ポート(例: 443)",
    "Preferred Vendor Threshold. The minimum number of highly trusted vendors required to consider a domain, IP address, URL, or file as malicious.":
      "優先ベンダーのしきい値。ドメイン、IPアドレス、URL、ファイルを悪意のあるものと見なすために必要な、信頼性の高いベンダーの最小数です。",
    "Preferred Vendors List. CSV list of vendors which are considered more trustworthy.":
      "優先ベンダーリスト。より信頼できると見なされるベンダーのCSVリストです。",
    "Preferred Vendors List. CSV list of vendors who are considered more trustworthy.":
      "優先ベンダーリスト。より信頼できると見なされるベンダーのCSVリストです。",
    "Premium Subscription":
      "プレミアムサブスクリプション",
    "Premium Subscription Only: Relationship Malicious Files Threshold":
      "プレミアムサブスクリプション限定: 関連する悪意のあるファイルのしきい値",
    "Premium Subscription Only: Relationship Suspicious Files Threshold":
      "プレミアムサブスクリプション限定: 関連する不審なファイルのしきい値",
    "Prerequisite":
      "前提条件",
    "Prerequisite - Connect to McAfee Threat Intelligence Exchange (TIE) using the DXL TIE Client":
      "前提条件 - DXL TIE Clientを使用してMcAfee Threat Intelligence Exchange(TIE)に接続する",
    "Prerequisites in order to support JWT":
      "JWTをサポートするための前提条件",
    "Prisma Access & NGFW Configuration":
      "Prisma AccessとNGFWの構成",
    "Prisma Access API Key from Panorama":
      "PanoramaのPrisma Access APIキー",
    "Prisma Cloud service tenant admin console URL. The URL for the Prisma Cloud service varies depending on the cluster on which your tenant is deployed. For more information see: https://pan.dev/prisma-cloud/api/cspm/api-urls/.":
      "Prisma Cloudサービステナントの管理コンソールURLです。Prisma CloudサービスのURLは、テナントがデプロイされているクラスターによって異なります。詳細については、次を参照してください: https://pan.dev/prisma-cloud/api/cspm/api-urls/.",
    "Private Key (Required for HTTPS)":
      "秘密鍵(HTTPSで必須)",
    "Private url is https://private.tria.ge/api/v0/":
      "プライベートURLはhttps://private.tria.ge/api/v0/です",
    "Proofpoint on Demand (PoD) administrators must file a support ticket to Proofpoint support to obtain a role with access to an API.":
      "Proofpoint on Demand(PoD)の管理者は、APIにアクセスできるロールを取得するために、Proofpointサポートにサポートチケットを提出する必要があります。",
    "Proofpoint Protection Server Version (e.g., 8.14.2)":
      "Proofpoint Protection Serverのバージョン(例: 8.14.2)",
    "Provide a Client Name and Role, then click “Generate Credentials”.":
      "Client NameとRoleを入力し、「Generate Credentials」をクリックします。",
    "Provide a name for the token and set an expiration time (optional)":
      "トークンの名前を入力し、有効期限を設定します(任意)",
    "Provide server URL and API Token.":
      "サーバーURLとAPIトークンを指定します。",
    "Provide server URL, ‘Live Response’ API key and connector.":
      "サーバーURL、'Live Response' APIキー、コネクターを指定します。",
    "Provides a list of versions by product name or id":
      "製品名またはIDでバージョンの一覧を提供します",
    "Provides all or specific vendor details to include vendor name and id":
      "ベンダー名とIDを含む、すべてまたは特定のベンダーの詳細を提供します",
    "Provides full details about a specific vulnerability by id":
      "IDで指定した特定の脆弱性に関する詳細情報をすべて提供します",
    "Provides full details about a specific vulnerability by vendor and product id":
      "ベンダーIDと製品IDで指定した特定の脆弱性に関する詳細情報をすべて提供します",
    "Provides full details about a specific vulnerability by vendor and product name":
      "ベンダー名と製品名で指定した特定の脆弱性に関する詳細情報をすべて提供します",
    "Provides full details about vulnerabilities by cve id":
      "CVE IDで指定した脆弱性に関する詳細情報をすべて提供します",
    "Provides full details about vulnerabilities by product id":
      "製品IDで指定した脆弱性に関する詳細情報をすべて提供します",
    "Provides full details about vulnerabilities by vendor id":
      "ベンダーIDで指定した脆弱性に関する詳細情報をすべて提供します",
    "Provides the recent vulnerabilities by dates or hours":
      "日付または時間で指定した最近の脆弱性を提供します",
    "Provides the versions for the specified product by product name or id":
      "指定した製品のバージョンを、製品名またはIDで提供します",
    "Proxy URL":
      "プロキシURL",
    "Proxy URL password":
      "プロキシURLのパスワード",
    "Proxy URL Password":
      "プロキシURLのパスワード",
    "Proxy URL to use in Slack API calls":
      "Slack API呼び出しで使用するプロキシURL",
    "Proxy URL username":
      "プロキシURLのユーザー名",
    "Proxy URL Username":
      "プロキシURLのユーザー名",
    "Public key / Private key":
      "公開鍵/秘密鍵",
    "PUBLIC KEYS":
      "公開鍵",
    "Push events from Cortex to Splunk":
      "CortexからSplunkへのイベントのプッシュ",
    "QRadar API Version":
      "QRadar APIバージョン",
    "QRadar API versions page":
      "QRadar APIバージョンのページ",
    "QRadar filter documentation":
      "QRadarフィルターのドキュメント",
    "QRadar Filter Syntax Documentation":
      "QRadarフィルター構文のドキュメント",
    "QRadar offense documentation":
      "QRadarオフェンスのドキュメント",
    "QRadar Offense Documentation":
      "QRadarオフェンスのドキュメント",
    "Quarantine management — Quarantine assets and restore quarantined assets.":
      "隔離管理 — アセットを隔離し、隔離されたアセットを復元します。",
    "Query all CVEs monitored by ThreatMon, including CVSS v2, v3, v3.1, and v4 scores.":
      "ThreatMonが監視しているすべてのCVEを、CVSS v2、v3、v3.1、v4のスコアを含めてクエリします。",
    "Query and response with Carbon Black endpoint detection and response.":
      "Carbon Blackのエンドポイント検出および対応によるクエリとレスポンス。",
    "Query CVEs affecting products the company is subscribed to.":
      "企業が登録している製品に影響するCVEをクエリします。",
    "Query Example":
      "クエリの例",
    "Query to fetch offenses":
      "オフェンスをフェッチするクエリ",
    "Query URL":
      "クエリURL",
    "Rasterize Mode":
      "ラスタライズモード",
    "Rate Limiting":
      "レート制限",
    "Rate Limits":
      "レート制限",
    "Recommended for private/on-prem.":
      "プライベート/オンプレミス環境で推奨されます。",
    "Red Teaming operations require accepting the End User License Agreement.":
      "Red Teamingの操作には、エンドユーザー使用許諾契約への同意が必要です。",
    "Redirect URL":
      "リダイレクトURL",
    "Refresh Token":
      "リフレッシュトークン",
    "Reliability of the source providing intelligence data":
      "インテリジェンスデータを提供するソースの信頼性",
    "Request data removal for Black Market Monitoring findings directly from XSOAR playbooks.":
      "XSOAR PlaybookからBlack Market Monitoringの検出結果に対するデータ削除を直接リクエストします。",
    "Request timeout":
      "リクエストのタイムアウト",
    "Request Timeout":
      "リクエストのタイムアウト",
    "Request timeout (in seconds)":
      "リクエストのタイムアウト(秒単位)",
    "Request timeout (in seconds).":
      "リクエストのタイムアウト(秒単位)。",
    "Require Demonstrating Proof of Possession (DPoP) header in token requests":
      "トークンリクエストでDPoP(Demonstrating Proof of Possession)ヘッダーを必須にする",
    "Required and used if more than one key is used for signing JWT tokens.":
      "JWTトークンの署名に複数のキーを使用する場合に必須で、使用されます。",
    "Required and used if OAuth 2.0 is used for authentication. See detailed instructions on the 'Help' tab.":
      "認証にOAuth 2.0を使用する場合に必須で、使用されます。詳細な手順については、「ヘルプ」タブを参照してください。",
    "Required Scopes":
      "必須スコープ",
    "Required when choosing an external engine. You must enable Long running instance to run the web server on this port from within Cortex. Requires a unique port for each long-running integration instance. Do not use the same port for multiple instances.":
      "外部エンジンを選択する場合に必須です。Cortex内からこのポートでWebサーバーを実行するには、長時間実行インスタンスを有効にする必要があります。長時間実行されるインテグレーションインスタンスごとに一意のポートが必要です。複数のインスタンスで同じポートを使用しないでください。",
    "Requirements":
      "要件",
    "Requires a server URL, and an API key":
      "サーバーURLとAPIキーが必要です",
    "Reset the “last run”":
      "“last run”をリセットする",
    "Resetting the enriching fetch mechanism":
      "エンリッチメントのフェッチメカニズムのリセット",
    "Retrieve Your API Key":
      "APIキーの取得",
    "Retry requests when API is rate limited":
      "APIのレート制限時にリクエストを再試行する",
    "Return Errors":
      "エラーを返す",
    "Return Errors: If this checkbox is not selected, a warning will be returned instead of an error entry.":
      "エラーを返す: このチェックボックスを選択しない場合、エラーエントリの代わりに警告が返されます。",
    "Run the command":
      "コマンドを実行します",
    "Run this query to fetch new events as incidents":
      "このクエリを実行して、新しいイベントをインシデントとしてフェッチします",
    "Runtime API Key":
      "ランタイムAPIキー",
    "Save changes":
      "変更を保存",
    "Save intrusion sets as threat actor indicator types":
      "侵入セットを脅威アクターのインジケータータイプとして保存する",
    "Scanner API Base URL":
      "スキャナーAPIのベースURL",
    "Scanner API base URL for runtime scanning operations. Default is US region. For other regions: EU: https://service-de.api.aisecurity.paloaltonetworks.com, IN: https://service-in.api.aisecurity.paloaltonetworks.com, SG: https://service-sg.api.aisecurity.paloaltonetworks.com. This must match the region selected during deployment profile creation.":
      "ランタイムスキャン操作用のスキャナーAPIのベースURLです。デフォルトは米国リージョンです。その他のリージョン: EU: https://service-de.api.aisecurity.paloaltonetworks.com、IN: https://service-in.api.aisecurity.paloaltonetworks.com、SG: https://service-sg.api.aisecurity.paloaltonetworks.com。これは、デプロイメントプロファイルの作成時に選択したリージョンと一致している必要があります。",
    "Scope (Required for using Cortex Azure app)":
      "スコープ(Cortex Azureアプリを使用する場合は必須)",
    "Search and Compliance URL":
      "検索とコンプライアンスのURL",
    "Search for SplunkPy and select your integration instance.":
      "SplunkPyを検索し、インテグレーションインスタンスを選択します。",
    "Search for SplunkPy v2 and select your integration instance.":
      "SplunkPy v2を検索し、インテグレーションインスタンスを選択します。",
    "Search for VulnDB.":
      "VulnDBを検索します。",
    "Seconds to sleep between checking for results":
      "結果を確認する間の待機時間(秒)",
    "Secret token":
      "シークレットトークン",
    "Secret Token":
      "シークレットトークン",
    "Secret Token(Team Chat App)":
      "シークレットトークン(Team Chat App)",
    "See detailed instructions on the 'Help' tab.":
      "詳細な手順については、「ヘルプ」タブを参照してください。",
    "See the vendor’s documentation for more details.":
      "詳細については、ベンダーのドキュメントを参照してください。",
    "Select Scan Type":
      "スキャンタイプを選択",
    "Select SSL certificate validation and Proxy if required.":
      "必要に応じて、SSL証明書の検証とプロキシを選択します。",
    "Select the “Detection Close Reason for Incident Closure” option if you want to set the detection close reason in Vectra when the incident is closed in XSOAR. Default value is ‘Remediated’. This option is only used when the “Close Detection on Incident Closure” option is checked and the mirroring direction is set to ‘Outgoing’ or ‘Incoming And Outgoing’.":
      "XSOARでインシデントがクローズされたときに、Vectraで検出のクローズ理由を設定する場合は、“Detection Close Reason for Incident Closure”オプションを選択します。デフォルト値は‘Remediated’です。このオプションは、“Close Detection on Incident Closure”オプションがオンで、ミラーリング方向が‘Outgoing’または‘Incoming And Outgoing’に設定されている場合にのみ使用されます。",
    "Select the “Detection Status for Incident Reopen” option if you want to set the detection status in Vectra when the incident is reopened in XSOAR. Default value is ‘Escalated’. This option is only used when the “Open Detection on Incident Reopen” option is checked and the mirroring direction is set to ‘Outgoing’ or ‘Incoming And Outgoing’.":
      "XSOARでインシデントが再オープンされたときに、Vectraで検出のステータスを設定する場合は、“Detection Status for Incident Reopen”オプションを選択します。デフォルト値は‘Escalated’です。このオプションは、“Open Detection on Incident Reopen”オプションがオンで、ミラーリング方向が‘Outgoing’または‘Incoming And Outgoing’に設定されている場合にのみ使用されます。",
    "Select the date format of your ServiceNow instance. Mandatory when using the `Use Display Value` option. More details under the troubleshooting section in the documentation of the integration. The integration supports the ServiceNow default time format (full form) `HH:mm:ss` with support to `a` notation for AM/PM.":
      "ServiceNowインスタンスの日付形式を選択します。`Use Display Value`オプションを使用する場合は必須です。詳細については、インテグレーションのドキュメントのトラブルシューティングのセクションを参照してください。このインテグレーションは、ServiceNowのデフォルトの時刻形式(完全形式)`HH:mm:ss`をサポートしており、AM/PMを示す`a`表記にも対応しています。",
    "Select the field that determines when to trigger a termination incident for deactivated employees.":
      "無効化された従業員に対する退職インシデントをトリガーするタイミングを決定するフィールドを選択します。",
    "Select the list of relationships to retrieve from the API. Note that relationships that are signed with * key are available only for the VirusTotal premium API key.":
      "APIから取得するリレーションシップのリストを選択します。*が付いたリレーションシップは、VirusTotalのプレミアムAPIキーでのみ利用できます。",
    "Select this checkbox if to use OAuth 2.0 authentication. See (?) for more information.":
      "OAuth 2.0認証を使用する場合は、このチェックボックスを選択します。詳細については、(?)を参照してください。",
    "Select this checkbox to retrieve comments and work notes without accessing the `sys_field_journal` table.":
      "このチェックボックスを選択すると、`sys_field_journal`テーブルにアクセスせずにコメントと作業メモを取得します。",
    "Select this checkbox to retrieve the body of an email in HTML format. If this checkbox is not selected, a psuedo-text representation of HTML emails will be returned and some functionality in other packs (e.g., email previews in the Email Communication pack) may not provide their full capabilities.":
      "このチェックボックスを選択すると、メールの本文をHTML形式で取得します。このチェックボックスを選択しない場合は、HTMLメールの擬似テキスト表現が返され、他のパックの一部の機能(例: Email Communicationパックのメールプレビュー)が完全には動作しない可能性があります。",
    "Select this checkbox to use JWT authentication. See (?) for more information.":
      "JWT認証を使用する場合は、このチェックボックスを選択します。詳細については、(?)を参照してください。",
    "Select this option if the bot was originally created as multi-tenant and later converted to single-tenant. The system will detect the bot type automatically in all other standard cases.":
      "ボットが当初マルチテナントとして作成され、その後シングルテナントに変換された場合は、このオプションを選択します。それ以外のすべての標準的なケースでは、システムがボットの種類を自動的に検出します。",
    "Select which domains you would like to pull indicators from. Additionally, each domain has a subset of “concepts”. Most of the domains have all of the concepts, with the exception of the “PRE-ATT&CK” domain. There are only a small subset of “concepts” within this domain. Any concept that does not exist will be skipped.":
      "インジケーターの取得元とするドメインを選択します。また、各ドメインには「コンセプト」のサブセットがあります。ほとんどのドメインにはすべてのコンセプトがありますが、“PRE-ATT&CK”ドメインは例外です。このドメインには、ごく一部の「コンセプト」しかありません。存在しないコンセプトはスキップされます。",
    "Select which event types to fetch from KOI.":
      "KOIからフェッチするイベントタイプを選択します。",
    "Select which log types to fetch.":
      "フェッチするログタイプを選択します。",
    "Select which log types to fetch. Selecting 'All' will use all the log type queries in the fetch. To choose a specific set of queries, select their log types from the dropdown (make sure the 'All' option is unselected).":
      "フェッチするログタイプを選択します。'All'を選択すると、フェッチですべてのログタイプのクエリが使用されます。特定のクエリセットを選択するには、ドロップダウンからログタイプを選択します('All'オプションが選択されていないことを確認してください)。",
    "Select which record types to fetch. You can select Alerts, Incidents, or both.":
      "フェッチするレコードタイプを選択します。アラート、インシデント、またはその両方を選択できます。",
    "Select your instance.":
      "インスタンスを選択します。",
    "Selecting 'All' will use all the log type queries in the fetch.":
      "'All'を選択すると、フェッチですべてのログタイプのクエリが使用されます。",
    "Selecting “All” will use all the log type queries in the fetch.":
      "“All”を選択すると、フェッチですべてのログタイプのクエリが使用されます。",
    "Self-serve pay-as-you-go keys are entitled to all six by default.":
      "セルフサービスの従量課金キーには、デフォルトで6つすべてが付与されます。",
    "Send emails including support for rich emails with HTML and embedded files.":
      "HTMLや埋め込みファイルを含むリッチメールのサポートを含め、メールを送信します。",
    "Send notifications about incidents to the dedicated channel":
      "インシデントに関する通知を専用チャンネルに送信する",
    "Sender address":
      "送信者アドレス",
    "Sender address can be specified as 'user@host.com' or 'Full Name <user@host.com>'":
      "送信者アドレスは、'user@host.com'または'Full Name <user@host.com>'の形式で指定できます",
    "Server Address":
      "サーバーアドレス",
    "Server base URL":
      "サーバーのベースURL",
    "Server base URL (e.g., https://192.168.0.1/publicapi)":
      "サーバーのベースURL(例: https://192.168.0.1/publicapi)",
    "Server Host or IP":
      "サーバーのホストまたはIP",
    "Server Host or IP (e.g., 10.1.1.9 or panorama.my.domain)":
      "サーバーのホストまたはIP(例: 10.1.1.9またはpanorama.my.domain)",
    "Server IP / Hostname (e.g. 1.2.3.4)":
      "サーバーIP/ホスト名(例: 1.2.3.4)",
    "Server NetBIOS (AD) Name":
      "サーバーのNetBIOS(AD)名",
    "Server Port":
      "サーバーポート",
    "Server URL (e.g. 'https://api.zoom.us/v2/')":
      "サーバーURL(例: 'https://api.zoom.us/v2/')",
    "Server URL (e.g. https://192.168.0.1:20013)":
      "サーバーURL(例: https://192.168.0.1:20013)",
    "Server URL (e.g. https://analysis.lastline.com)":
      "サーバーURL(例: https://analysis.lastline.com)",
    "Server URL (e.g. https://api.kennasecurity.com)":
      "サーバーURL(例: https://api.kennasecurity.com)",
    "Server URL (e.g. https://example.net)":
      "サーバーURL(例: https://example.net)",
    "Server URL (e.g. https://vxsuz5.manage.trendmicro.com)":
      "サーバーURL(例: https://vxsuz5.manage.trendmicro.com)",
    "Server URL (e.g., 'https://api.zoom.us/v2/')":
      "サーバーURL(例: 'https://api.zoom.us/v2/')",
    "Server URL (e.g., https://192.0.2.0:8080)":
      "サーバーURL(例: https://192.0.2.0:8080)",
    "Server URL (e.g., https://192.168.0.1:10000)":
      "サーバーURL(例: https://192.168.0.1:10000)",
    "Server URL (e.g., https://api.securitycenter.microsoft.com)":
      "サーバーURL(例: https://api.securitycenter.microsoft.com)",
    "Server URL (e.g., https://cloud.vmray.com)":
      "サーバーURL(例: https://cloud.vmray.com)",
    "Server URL (e.g., https://demisto.zendesk.com)":
      "サーバーURL(例: https://demisto.zendesk.com)",
    "Server URL (e.g., https://xxxxxxxx.pphosted.com:10000)":
      "サーバーURL(例: https://xxxxxxxx.pphosted.com:10000)",
    "Server URL used to enter the Sophos XG Firewall web console. e.g., https://ip:port/":
      "Sophos XG FirewallのWebコンソールへのアクセスに使用するサーバーURLです。例: https://ip:port/",
    "Service Key (for triggering events only)":
      "サービスキー(イベントのトリガー専用)",
    "Service Key (for triggering, acknowledging and resolving events only)":
      "サービスキー(イベントのトリガー、確認応答、解決専用)",
    "ServiceNow API Version (e.g. 'v1')":
      "ServiceNow APIバージョン(例: 'v1')",
    "ServiceNow API Version (e.g. 'v1'). Specify this value to use an endpoint version other than the latest.":
      "ServiceNow APIバージョン(例: 'v1')。最新以外のエンドポイントバージョンを使用する場合は、この値を指定します。",
    "ServiceNow docs":
      "ServiceNowのドキュメント",
    "ServiceNow Instance":
      "ServiceNowインスタンス",
    "ServiceNow Instance URL":
      "ServiceNowインスタンスのURL",
    "ServiceNow ticket column to be set as the incident name. Default is the incident number":
      "インシデント名として設定するServiceNowチケットの列。デフォルトはインシデント番号です",
    "ServiceNow URL (https://<domain>.service-now.com)":
      "ServiceNowのURL(https://<domain>.service-now.com)",
    "ServiceNow URL, in the format https://company.service-now.com/":
      "ServiceNowのURL。形式: https://company.service-now.com/",
    "ServiceNowGenericFeed fetches records from a ServiceNow CMDB API endpoint and ingests them as indicators into Cortex TIM with user desired tags.":
      "ServiceNowGenericFeedは、ServiceNow CMDB APIエンドポイントからレコードをフェッチし、ユーザーが指定したタグを付けてインジケーターとしてCortex TIMに取り込みます。",
    "Set the “Detection Close Reason for Incident Closure” option to set the detection close reason in Vectra when the incident is closed in XSOAR. Default value is ‘Benign’. This option is only used when the “Close Detection on Incident Closure” option is checked and the mirroring direction is set to ‘Outgoing’ or ‘Incoming And Outgoing’.":
      "XSOARでインシデントがクローズされたときに、Vectraで検出のクローズ理由を設定するには、“Detection Close Reason for Incident Closure”オプションを設定します。デフォルト値は‘Benign’です。このオプションは、“Close Detection on Incident Closure”オプションがオンで、ミラーリング方向が‘Outgoing’または‘Incoming And Outgoing’に設定されている場合にのみ使用されます。",
    "Set the “Detection Status for Incident Reopen” option to set the detection status in Vectra when the incident is reopened in XSOAR. Default value is ‘Escalated’. This option is only used when the “Open Detection on Incident Reopen” option is checked and the mirroring direction is set to ‘Outgoing’ or ‘Incoming And Outgoing’.":
      "XSOARでインシデントが再オープンされたときに、Vectraで検出のステータスを設定するには、“Detection Status for Incident Reopen”オプションを設定します。デフォルト値は‘Escalated’です。このオプションは、“Open Detection on Incident Reopen”オプションがオンで、ミラーリング方向が‘Outgoing’または‘Incoming And Outgoing’に設定されている場合にのみ使用されます。",
    "Set the DBot Score Threshold to a number between 1 and 100 (default is 70). Any IP addresses associated with an Entity queried with a ThreatX score greater than or equal to the DBot Score Threshold will be assigned a DBot Score of 3 (Malicious).":
      "DBot Score Thresholdを1~100の数値に設定します(デフォルトは70)。ThreatXスコアがDBot Score Threshold以上でクエリされたエンティティに関連付けられているすべてのIPアドレスには、DBot Score 3(Malicious)が割り当てられます。",
    "Set the fetch interval and enable fetching":
      "フェッチ間隔を設定し、フェッチを有効にします",
    "Set the Incidents Fetch Interval to a maximum of 15 minutes if the number of incidents is expected to exceed the specified max fetch limit in each fetch cycle.":
      "各フェッチサイクルでインシデント数が指定した最大フェッチ数の上限を超えると予想される場合は、Incidents Fetch Intervalを最大15分に設定します。",
    "Set up a SpecterOps BloodHound Enterprise integration instance":
      "SpecterOps BloodHound Enterpriseインテグレーションインスタンスをセットアップする",
    "Sets the AWS_STS_REGIONAL_ENDPOINTS environment variable to specify the AWS STS endpoint resolution logic. By default, this option is set to “legacy” in AWS. Leave empty if the environment variable is already set using server configuration.":
      "AWS_STS_REGIONAL_ENDPOINTS環境変数を設定して、AWS STSエンドポイントの解決ロジックを指定します。デフォルトでは、AWSでこのオプションは“legacy”に設定されています。環境変数がサーバー構成ですでに設定されている場合は、空のままにします。",
    "Setting the lookback parameter will fetch duplicated incidents in the event that incidents that fall out during the given look-back time were already fetched.":
      "lookbackパラメーターを設定すると、指定したルックバック時間内に対象外となったインシデントがすでにフェッチ済みだった場合、重複したインシデントがフェッチされます。",
    "Setup Instructions":
      "セットアップ手順",
    "Setup Steps":
      "セットアップのステップ",
    "Sever URLs":
      "サーバーURL",
    "Shodan is a search engine for Internet-connected devices. Unlike traditional search engines that index websites, Shodan indexes information about the devices connected to the internet, such as servers, routers, webcams, and other IoT devices.":
      "Shodanは、インターネットに接続されたデバイスのための検索エンジンです。Webサイトをインデックス化する従来の検索エンジンとは異なり、Shodanは、サーバー、ルーター、Webカメラ、その他のIoTデバイスなど、インターネットに接続されたデバイスに関する情報をインデックス化します。",
    "Should anyone be allowed to create incidents by DM":
      "誰でもDMでインシデントを作成できるようにする",
    "Sigma and Intrusion Detection Rules Threshold":
      "Sigmaおよび侵入検知ルールのしきい値",
    "Sign in to Okta Admin Console.":
      "Okta Admin Consoleにサインインします。",
    "Sign in to the Tenzai application.":
      "Tenzaiアプリケーションにサインインします。",
    "Site security monitoring, external sharing controls, and document compliance for SharePoint":
      "SharePointのサイトセキュリティの監視、外部共有の制御、ドキュメントコンプライアンス",
    "Skip on corrupted images":
      "破損した画像をスキップする",
    "Slack (Deprecated)":
      "Slack(非推奨)",
    "Slack API access token":
      "Slack APIアクセストークン",
    "Slack API bot token":
      "Slack APIボットトークン",
    "Slack API Token for channel creation":
      "チャンネル作成用のSlack APIトークン",
    "Slack Bot API token":
      "SlackボットAPIトークン",
    "Slack Documentation":
      "Slackのドキュメント",
    "Slack v2 (Deprecated)":
      "Slack v2(非推奨)",
    "Slack V3 utilizes “Socket Mode” to enable the integration to communicate directly with Slack for mirroring.":
      "Slack V3は“Socket Mode”を利用して、インテグレーションがミラーリングのためにSlackと直接通信できるようにします。",
    "SMTP Port":
      "SMTPポート",
    "SMTP Sender":
      "SMTP送信者",
    "Snow documentation":
      "Snowのドキュメント",
    "Source Priority Level":
      "ソースの優先度レベル",
    "Specify a unique name for the API client.":
      "APIクライアントの一意の名前を指定します。",
    "Splunk Token":
      "Splunkトークン",
    "Splunk token-based authentication":
      "Splunkのトークンベース認証",
    "SSH Certificate":
      "SSH証明書",
    "SSH connection":
      "SSH接続",
    "SSH Credentials for CLI":
      "CLI用のSSH認証情報",
    "SSH credentials should be your username and password for the PAN-OS CLI - they can be tested using a standalone SSH client to verify that you are able to connect to the CLI on the SSH port.":
      "SSH認証情報には、PAN-OS CLIのユーザー名とパスワードを指定します。スタンドアロンのSSHクライアントを使用してテストし、SSHポートでCLIに接続できることを確認できます。",
    "SSH Port":
      "SSHポート",
    "Step 1: Login and add your authorization code":
      "ステップ1: ログインして認可コードを追加します",
    "Step 2: Activate the API.":
      "ステップ2: APIを有効化します。",
    "Steps to follow":
      "実行する手順",
    "Subdomain":
      "サブドメイン",
    "Submission Server URL":
      "送信サーバーURL",
    "Submit Black Market Monitoring data removal requests — checks company credit rights and returns an appropriate error if the quota is exceeded.":
      "Black Market Monitoringデータの削除リクエストを送信します。会社のクレジット権限を確認し、クォータを超過している場合は適切なエラーを返します。",
    "Submit takedown requests for eligible findings (Phishing Domains, Rogue Mobile Apps, Fake Social Media Accounts).":
      "対象となる検出結果(フィッシングドメイン、不正なモバイルアプリ、偽のソーシャルメディアアカウント)のテイクダウンリクエストを送信します。",
    "Submit takedown requests for eligible threat findings.":
      "対象となる脅威の検出結果のテイクダウンリクエストを送信します。",
    "Sumo Logic URL (region specific), for example: https://api.us2.sumologic.com/api/":
      "Sumo Logic URL(リージョン固有)(例: https://api.us2.sumologic.com/api/)",
    "Supplier finding severities":
      "サプライヤーの検出結果の重大度",
    "Supplier finding statuses":
      "サプライヤーの検出結果のステータス",
    "Supplier Findings":
      "サプライヤーの検出結果",
    "Support for Multiple Teams":
      "複数チームのサポート",
    "Support for template replacement variables using {var} syntax":
      "{var}構文を使用したテンプレート置換変数をサポートします",
    "Supported Authentication Methods":
      "サポートされている認証方法",
    "Supported formats: 2 minutes, 2 hours, 2 days, 2 weeks, 2 months, 2 years, yyyy-mm-dd, yyyy-mm-ddTHH:MM:SSZ.":
      "サポートされている形式: 2 minutes、2 hours、2 days、2 weeks、2 months、2 years、yyyy-mm-dd、yyyy-mm-ddTHH:MM:SSZ。",
    "Supported Indicators":
      "サポートされているインジケーター",
    "Supported REST API versions":
      "サポートされているREST APIバージョン",
    "Supports automated playbooks for streamlined response.":
      "効率的な対応のための自動化されたPlaybookをサポートします。",
    "Supports folder ID and sub-folders, for example Inbox/Phishing.":
      "フォルダーIDとサブフォルダーをサポートします(例: Inbox/Phishing)。",
    "Suppress errors for non found indicators":
      "見つからないインジケーターに関するエラーを抑制する",
    "Sync Query":
      "同期クエリ",
    "Sync user profiles on first run":
      "初回実行時にユーザープロファイルを同期する",
    "Sysdig Configuration":
      "Sysdigの構成",
    "Tag: The ruleset's name or the identifier for the YARA rule matching the file to fetch its notifications. Leave blank to fetch all.":
      "Tag: YARAルールに一致するファイルの通知をフェッチするための、ルールセット名またはYARAルールの識別子。すべてフェッチする場合は空白のままにします。",
    "Takedown Server URL":
      "テイクダウンサーバーURL",
    "Team name (e.g. my-team-name)":
      "チーム名(例: my-team-name)",
    "Template - Panorama instances only":
      "テンプレート - Panoramaインスタンスのみ",
    "Tenant ID (Required for using Self Deployed Azure app)":
      "テナントID(セルフデプロイのAzureアプリを使用する場合は必須)",
    "Tenant Services Group ID":
      "テナントサービスグループID",
    "Tenzai App URL (e.g., https://app.tenzai.io)":
      "TenzaiアプリURL(例: https://app.tenzai.io)",
    "Tenzai Server URL":
      "TenzaiサーバーURL",
    "Tenzai Server URL (e.g., https://api.tenzai.io)":
      "TenzaiサーバーURL(例: https://api.tenzai.io)",
    "Terminal Type":
      "ターミナルの種類",
    "Terms and Conditions":
      "利用規約",
    "Test fails with a connection or timeout error.":
      "テストが接続エラーまたはタイムアウトエラーで失敗する。",
    "Test fails with an authorization error.":
      "テストが認可エラーで失敗する。",
    "Test the connection":
      "接続をテストします",
    "Test the integration. If successful, you’ll see a test message in the channel.":
      "インテグレーションをテストします。成功すると、チャンネルにテストメッセージが表示されます。",
    "The “Test” button does not fully validate all command functionality. To ensure the commands are working correctly, run each one and validate that API permissions are sufficient.":
      "「テスト」ボタンでは、すべてのコマンドの機能が完全に検証されるわけではありません。コマンドが正しく動作していることを確認するには、各コマンドを実行し、APIの権限が十分であることを検証してください。",
    "The amount of time to go back when performing the first fetch, or when creating a mapping using the Select Schema option.":
      "最初のフェッチを実行するとき、またはSelect Schemaオプションを使用してマッピングを作成するときに、さかのぼる期間。",
    "The API key can be found by going to your Hatching UI, clicking your account name in the top right, and the API key will be listed in the left hand side under “API Key”":
      "APIキーは、HatchingのUIで右上のアカウント名をクリックすると確認できます。APIキーは左側の「API Key」の下に表示されます",
    "The API key for authenticating with the KOI API. See the help section for instructions on creating an API key.":
      "KOI APIで認証するためのAPIキー。APIキーの作成手順については、ヘルプセクションを参照してください。",
    "The API Key to use for the connection":
      "接続に使用するAPIキー",
    "The API route of the requested information in ServiceNow":
      "ServiceNowで要求された情報のAPIルート",
    "The authentication type and credentials to use: Basic Auth (Username and Password), Bearer Auth (Username and Password), or API Key Auth (API Key ID and API Key).":
      "使用する認証タイプと認証情報: Basic Auth(ユーザー名とパスワード)、Bearer Auth(ユーザー名とパスワード)、またはAPI Key Auth(APIキーIDとAPIキー)。",
    "The backwards window is a way for you to configure the longest delay you would like to support.":
      "バックワードウィンドウでは、サポートする最長の遅延を設定できます。",
    "The base URL of the Tenzai API.":
      "Tenzai APIのベースURL。",
    "The base URL of the Tenzai web app, used to build a deep link (referenceUrl) to the scan results. Leave empty to derive it from the Tenzai Server URL (the API and web-app hosts mirror each other); set it only to override that.":
      "スキャン結果へのディープリンク(referenceUrl)の作成に使用する、Tenzai WebアプリのベースURL。空のままにすると、TenzaiサーバーURLから導出されます(APIとWebアプリのホストは対応しています)。上書きする場合にのみ設定してください。",
    "The best value to set depends on the delays that you see in your system (consult with your Splunk expert / master), the number of events in your system, and other network properties.":
      "設定に最適な値は、システムで発生している遅延(Splunkの専門家/マスターに相談してください)、システム内のイベント数、その他のネットワーク特性によって異なります。",
    "The category of attack paths to fetch. Default is all.":
      "フェッチするアタックパスのカテゴリ。デフォルトはすべてです。",
    "The client machine name to identify the client to the server on a new connection.":
      "新しい接続でクライアントをサーバーに識別させるためのクライアントマシン名。",
    "The connection security. The `SSL/TLS` first establishes a secure `SSL/TLS` connection and conducts SMTP over that connection, and STARTTLS starts with unencrypted SMTP and then switches to SSL/TLS to ensure security.":
      "接続のセキュリティ。`SSL/TLS`は、まず安全な`SSL/TLS`接続を確立してその接続上でSMTPを実行します。STARTTLSは、暗号化されていないSMTPで開始し、その後SSL/TLSに切り替えてセキュリティを確保します。",
    "The date or relative timestamp from which to begin fetching events detections.":
      "イベント検知のフェッチを開始する日付または相対タイムスタンプ。",
    "The date or relative timestamp from which to begin fetching events detections. Supported formats: 2 minutes, 2 hours, 2 days, 2 weeks, 2 months, 2 years, yyyy-mm-dd, yyyy-mm-ddTHH:MM:SSZ. For example: 01 Oct 2025, 01 Mar 2021 04:45:33, 2025-12-17T14:05:44Z.":
      "イベント検知のフェッチを開始する日付または相対タイムスタンプ。サポートされている形式: 2 minutes、2 hours、2 days、2 weeks、2 months、2 years、yyyy-mm-dd、yyyy-mm-ddTHH:MM:SSZ。例: 01 Oct 2025、01 Mar 2021 04:45:33、2025-12-17T14:05:44Z。",
    "The default Jev model. Use a pinned version when playbook thresholds have been validated against that version.":
      "デフォルトのJevモデル。Playbookのしきい値がそのバージョンに対して検証済みの場合は、固定バージョンを使用してください。",
    "The default region to use with the takedown Service.":
      "テイクダウンサービスで使用するデフォルトのリージョン。",
    "The default timeout (in seconds) for API calls. Default is 15 seconds.":
      "API呼び出しのデフォルトのタイムアウト(秒)。デフォルトは15秒です。",
    "The domain controller hostname. This is useful for environments with DFS servers as it is used to identify the DFS domain information automatically.":
      "ドメインコントローラーのホスト名。DFSドメイン情報を自動的に識別するために使用されるため、DFSサーバーがある環境で役立ちます。",
    "The eDiscovery APIs in Microsoft Graph only work with eDiscovery (Premium) cases.":
      "Microsoft GraphのeDiscovery APIは、eDiscovery (Premium)ケースでのみ動作します。",
    "The environment from which to fetch attack paths. Default is all.":
      "アタックパスをフェッチする環境。デフォルトはすべてです。",
    "The fetched data may take up to 10 minutes to be ingested into the tenant after each fetch cycle.":
      "フェッチされたデータは、各フェッチサイクルの後、テナントに取り込まれるまでに最大10分かかる場合があります。",
    "The field needed from the ServiceNow response which contains the indicator value":
      "インジケーター値を含む、ServiceNowのレスポンスから必要なフィールド",
    "The filtering works the same way as in the Prisma Cloud UI. When providing several values for the same filter it gets only alerts that have one of these values, and when providing different values, it gets only alerts that have all the stated field values.":
      "フィルタリングはPrisma CloudのUIと同じように動作します。同じフィルターに複数の値を指定すると、それらの値のいずれかを持つアラートのみが取得されます。異なるフィルターに値を指定すると、指定したすべてのフィールド値を持つアラートのみが取得されます。",
    "The following features are not supported in non-ES (Enterprise Security) Splunk.":
      "次の機能は、ES(Enterprise Security)以外のSplunkではサポートされていません。",
    "The format should be https://company.service-now.com/":
      "形式は https://company.service-now.com/ である必要があります",
    "The format should be: [ssl://]<hostname>[:port]. Get the hostname and port from the `brokerlist.properties` file. The broker should be reachable from the Cortex server.":
      "形式は [ssl://]<hostname>[:port] にする必要があります。ホスト名とポートは `brokerlist.properties` ファイルから取得します。ブローカーはCortexサーバーから到達可能である必要があります。",
    "The FQDN/IP of the IdentityIQ server to connect":
      "接続先のIdentityIQサーバーのFQDN/IP",
    "The FQDN/IP of the IdentityNow server to connect":
      "接続先のIdentityNowサーバーのFQDN/IP",
    "The generated incidents are notifications from vt-private-livehunt-notifications-list.":
      "生成されるインシデントは、vt-private-livehunt-notifications-listの通知です。",
    "The header of an external form hyperlink.":
      "外部フォームのハイパーリンクのヘッダー。",
    "The host URL. When using this parameter, select the Custom option for the Azure Cloud. More information about National clouds can be found here - https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud":
      "ホストURL。このパラメーターを使用する場合は、Azure CloudでCustomオプションを選択します。ナショナルクラウドの詳細については、こちらを参照してください - https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud",
    "The HTTP request timeout in seconds.":
      "HTTPリクエストのタイムアウト(秒)。",
    "The incident name to give to the created incident":
      "作成されるインシデントに付けるインシデント名",
    "The initial time to fetch from":
      "フェッチを開始する初期時刻",
    "The instance configuration URL based on the server location: <br/>US: https://api.aperture.paloaltonetworks.com<br/> EU: https://api.aperture-eu.paloaltonetworks.com<br/> APAC: https://api.aperture-apac.paloaltonetworks.com":
      "サーバーの場所に基づくインスタンス構成URL: <br/>US: https://api.aperture.paloaltonetworks.com<br/> EU: https://api.aperture-eu.paloaltonetworks.com<br/> APAC: https://api.aperture-apac.paloaltonetworks.com",
    "The integration pulls the Mcafee SIEM triggered alarms that are unacknowledged.":
      "このインテグレーションは、McAfee SIEMでトリガーされた未確認のアラームを取得します。",
    "The integration uses both the Panorama XML API and SSH into the PAN-OS CLI.":
      "このインテグレーションは、Panorama XML APIと、PAN-OS CLIへのSSHの両方を使用します。",
    "The integration uses the Panorama XML API.":
      "このインテグレーションは、Panorama XML APIを使用します。",
    "The interval for fetching attack paths.":
      "アタックパスをフェッチする間隔。",
    "The iZOOlogic API server URL.":
      "iZOOlogic APIサーバーのURL。",
    "The Kafka brokers to connect to, as a comma separated list, in the form: ip:port,ip2:port2":
      "接続先のKafkaブローカーを、ip:port,ip2:port2 の形式でカンマ区切りのリストとして指定します。",
    "The KOI API server URL.":
      "KOI APIサーバーのURL。",
    "The max incidents per fetch parameter specifies the maximum number of incidents to fetch":
      "フェッチあたりの最大インシデント数パラメーターは、フェッチするインシデントの最大数を指定します",
    "The maximum number of events detections to fetch each time. If the value is greater than 200, it will be considered as 200. The maximum is 200.":
      "1回ごとにフェッチするイベント検知の最大数。値が200を超える場合は200として扱われます。最大値は200です。",
    "The maximum number of incidents per fetch":
      "フェッチあたりのインシデントの最大数",
    "The maximum number of incidents to fetch per Log Type Query. To ensure optimal efficiency, it is strongly advised to keep the limit as low as possible. The maximum is 5,000.":
      "ログタイプクエリごとにフェッチするインシデントの最大数。最適な効率を確保するため、上限はできるだけ低く保つことを強く推奨します。最大値は5,000です。",
    "The maximum number of incidents to fetch per type per fetch cycle.":
      "フェッチサイクルごと、タイプごとにフェッチするインシデントの最大数。",
    "The maximum number of incidents to retrieve per fetch cycle. Hard upper limit is 200. Increase if your environment ingests more PagerDuty incidents per fetch interval than the configured default.":
      "フェッチサイクルごとに取得するインシデントの最大数。厳密な上限は200です。設定されているデフォルト値よりも、フェッチ間隔ごとに取り込まれるPagerDutyインシデントが多い環境では、値を増やしてください。",
    "The maximum number of items to fetch per type. Applies to both alerts and incidents. Note that when fetching incidents, no more than 50 can be fetched per cycle, due to a Microsoft limitation.":
      "タイプごとにフェッチするアイテムの最大数。アラートとインシデントの両方に適用されます。インシデントをフェッチする場合、Microsoftの制限により、1サイクルでフェッチできるのは50件までです。",
    "The message to send to the user to ask for feedback.":
      "フィードバックを求めるためにユーザーに送信するメッセージ。",
    "The mirroring direction in which to mirror the detections. You can mirror 'Incoming' (from Vectra to XSOAR), 'Outgoing' (from XSOAR to Vectra), or in both directions.":
      "検知をミラーリングする方向。'Incoming'(VectraからXSOARへ)、'Outgoing'(XSOARからVectraへ)、または両方向でミラーリングできます。",
    "The mirroring is strictly tied to Incident type “Vectra RUX Events Detection” & Incoming mapper “Vectra RUX - Incoming Mapper” If you want to change or use your custom incident type/mapper then make sure changes related to these are present.":
      "ミラーリングは、インシデントタイプ「Vectra RUX Events Detection」および受信マッパー「Vectra RUX - Incoming Mapper」に厳密に紐付いています。カスタムのインシデントタイプやマッパーを変更または使用する場合は、これらに関連する変更が含まれていることを確認してください。",
    "The mirroring settings apply only for incidents that are fetched after applying the settings.":
      "ミラーリング設定は、設定を適用した後にフェッチされたインシデントにのみ適用されます。",
    "The name of the lookup column containing the Cortex username.":
      "Cortexのユーザー名を含むルックアップ列の名前。",
    "The name of the lookup table containing the Splunk username.":
      "Splunkのユーザー名を含むルックアップテーブルの名前。",
    "The name of the lookup table in Splunk, containing the username's mapping data.":
      "ユーザー名のマッピングデータを含む、Splunk内のルックアップテーブルの名前。",
    "The name of the MCP server on the ServiceNow instance. Use `sn_mcp_server_default` for the preconfigured Quickstart Server.":
      "ServiceNowインスタンス上のMCPサーバーの名前。事前構成済みのQuickstart Serverには `sn_mcp_server_default` を使用します。",
    "The number of objects to process. Maximum value is 500":
      "処理するオブジェクトの数。最大値は500です",
    "The number of times to try and re-create connections with rapid7 instance when there are temporary connection errors":
      "一時的な接続エラーが発生した場合に、rapid7インスタンスとの接続の再作成を試行する回数",
    "The OAuth 2.0 client ID from ZIdentity.":
      "ZIdentityのOAuth 2.0クライアントID。",
    "The OAuth 2.0 client secret from ZIdentity.":
      "ZIdentityのOAuth 2.0クライアントシークレット。",
    "The operations are accessed through port 10000.":
      "操作にはポート10000を介してアクセスします。",
    "The optional model name that overrides the selected model.":
      "選択したモデルを上書きする、オプションのモデル名。",
    "The Palo Alto Networks Best Practice Assessment (BPA) measures your usage of our Next-Generation Firewall (NGFW) and Panorama™ security management capabilities across your deployment, enabling you to make adjustments that maximize your return on investment and strengthen security.":
      "Palo Alto Networks Best Practice Assessment(BPA)は、導入環境全体における次世代ファイアウォール(NGFW)とPanorama™セキュリティ管理機能の使用状況を測定し、投資対効果を最大化してセキュリティを強化するための調整を可能にします。",
    "The Panorama integration now supports fetch incidents.":
      "Panoramaインテグレーションで、インシデントのフェッチがサポートされるようになりました。",
    "The Panorays API permits 150 requests per minute and blocks the caller for one hour when that is exceeded. Keep this below 150.":
      "Panorays APIでは1分あたり150リクエストまで許可され、超過すると呼び出し元が1時間ブロックされます。150未満に保ってください。",
    "The parameter uses the AQL SELECT syntax. For more info see: https://www.ibm.com/support/knowledgecenter/en/SS42VS_7.3.3/com.ibm.qradar.doc/c_aql_intro.html":
      "このパラメーターはAQLのSELECT構文を使用します。詳細については、次を参照してください: https://www.ibm.com/support/knowledgecenter/en/SS42VS_7.3.3/com.ibm.qradar.doc/c_aql_intro.html",
    "The per-request timeout for calls to the Tenzai API. Kept low so a stalled or unreachable host fails fast and the validation poll automation can reschedule instead of exceeding its execution timeout.":
      "Tenzai APIへの呼び出しごとのタイムアウト。停止した、または到達不能なホストが素早く失敗し、検証ポーリングの自動化が実行タイムアウトを超えずに再スケジュールできるよう、低く設定されています。",
    "The port for the Elastic API.":
      "Elastic APIのポート。",
    "The port for the Kibana API.":
      "Kibana APIのポート。",
    "The port in Splunk server which is open to the REST API calls.":
      "REST API呼び出しに対して開放されている、Splunkサーバー上のポート。",
    "The possible values for severities can be found under “policy.severity” entry. In order to add a severity, use the filter name “policy.severity”":
      "重大度に指定可能な値は、「policy.severity」エントリで確認できます。重大度を追加するには、フィルター名「policy.severity」を使用します。",
    "The queries that will be included during the fetch are decided according to the “Log Type” parameter (Multiple select dropdown).":
      "フェッチ中に含まれるクエリは、「Log Type」パラメーター(複数選択ドロップダウン)に従って決定されます。",
    "The query to use when fetching incidents":
      "インシデントのフェッチ時に使用するクエリ",
    "The query used to collect indicators to sync from Cortex.":
      "Cortexから同期するインジケーターを収集するために使用するクエリ。",
    "The raw JSON string to use as the sample data":
      "サンプルデータとして使用する未加工のJSON文字列",
    "The redirect URI registered in the ServiceNow OAuth Inbound Integration. Must match the URI configured on the ServiceNow side.":
      "ServiceNowのOAuth Inbound Integrationに登録されているリダイレクトURI。ServiceNow側で構成されているURIと一致している必要があります。",
    "The required information is automatically retrieved from your Cortex TIM license.":
      "必要な情報は、Cortex TIMライセンスから自動的に取得されます。",
    "The scope of the rule-set should be narrowed to catch only indicators that you want to analyze by a playbook.":
      "ルールセットのスコープは、Playbookで分析したいインジケーターのみを対象とするように絞り込む必要があります。",
    "The Server URL assigned to your organization. For example, www.acme.zslogin.net.":
      "組織に割り当てられたサーバーURL。例: www.acme.zslogin.net。",
    "The server URL of your Magnet Automate instance.":
      "Magnet AutomateインスタンスのサーバーURL。",
    "The ServiceNow instance URL (e.g., `https://dev12345.service-now.com`).":
      "ServiceNowインスタンスのURL(例: `https://dev12345.service-now.com`)。",
    "The Silent Push platform focuses on proactive threat intelligence and threat hunting. It offers a comprehensive view of global internet-facing infrastructure, helping organizations detect and counteract cyber threats before they manifest.":
      "Silent Pushプラットフォームは、プロアクティブな脅威インテリジェンスとスレットハンティングに重点を置いています。インターネットに公開されているグローバルなインフラストラクチャを包括的に可視化し、組織がサイバー脅威が顕在化する前に検知し、対処できるよう支援します。",
    "The simplest way to acquire this token is for an Org Owner to create a new Slack app, add the admin OAuth scope, install the app, and use the generated token.":
      "このトークンを取得する最も簡単な方法は、Org Ownerが新しいSlackアプリを作成し、admin OAuthスコープを追加してアプリをインストールし、生成されたトークンを使用することです。",
    "The single mailbox this integration operates against. During authentication, ensure you are logged in to this email address. This mailbox is used by fetch-incidents and by all mail commands. Because this integration uses delegated permissions, it can only access this signed-in user's mailbox.":
      "このインテグレーションが操作対象とする単一のメールボックス。認証中は、このメールアドレスでログインしていることを確認してください。このメールボックスは、fetch-incidentsおよびすべてのメールコマンドで使用されます。このインテグレーションは委任されたアクセス許可を使用するため、サインインしているユーザーのメールボックスにのみアクセスできます。",
    "The Splunk search query by which to fetch events. The default query fetches ES finding events. You can edit this query to fetch other types of events. Note, that to fetch ES finding events, make sure to include the \\`notable\\` macro in your query.":
      "イベントのフェッチに使用するSplunk検索クエリ。デフォルトのクエリはESのfindingイベントをフェッチします。このクエリを編集して、他の種類のイベントをフェッチできます。ESのfindingイベントをフェッチするには、クエリに`notable`マクロを必ず含めてください。",
    "The Splunk search query by which to fetch events. The default query fetches ES notable events. You can edit this query to fetch other types of events. Note, that to fetch ES notable events, make sure to include the \\`notable\\` macro in your query.":
      "イベントのフェッチに使用するSplunk検索クエリ。デフォルトのクエリはESのnotableイベントをフェッチします。このクエリを編集して、他の種類のイベントをフェッチできます。ESのnotableイベントをフェッチするには、クエリに`notable`マクロを必ず含めてください。",
    "The Splunk server URL. Port 8089 (Splunk's default REST API port) is used automatically. Only include the port in the URL if using a non-default port. Examples: 'https://splunk.example.com' (uses default port 8089) or 'https://splunk.example.com:8090' (uses custom port 8090).":
      "SplunkサーバーのURL。ポート8089(SplunkのデフォルトのREST APIポート)が自動的に使用されます。デフォルト以外のポートを使用する場合にのみ、URLにポートを含めてください。例: 'https://splunk.example.com'(デフォルトのポート8089を使用)または 'https://splunk.example.com:8090'(カスタムポート8090を使用)。",
    "The Standard Authentication Profile of type Oauth should be already present in ServiceNow and has to be added to the Policy.":
      "OAuthタイプの標準認証プロファイルがServiceNowにすでに存在しており、ポリシーに追加されている必要があります。",
    "The statuses of PagerDuty incidents to ingest. Include \"resolved\" to capture short-lived incidents that move to resolved between fetch cycles.":
      "取り込むPagerDutyインシデントのステータス。フェッチサイクルの間に解決済みに移行する短命のインシデントを取り込むには、「resolved」を含めてください。",
    "The tag value should be used to mirror the detection note by adding the same tag in the notes.":
      "検知メモをミラーリングするには、メモに同じタグを追加して、そのタグ値を使用する必要があります。",
    "The Tennant Service Group must contain an active “AIOps for NGFW (Free)” application.":
      "テナントサービスグループには、アクティブな「AIOps for NGFW (Free)」アプリケーションが含まれている必要があります。",
    "The Tennant Service Group must contain an active “AIOps for NGFW (Free)” application. For more information about the service activation, visit the following link: https://docs.paloaltonetworks.com/ngfw/aiops/about/activate-aiops-for-ngfw#activate-aiops-for-ngfw_section_xjs_p55_fyb":
      "テナントサービスグループには、アクティブな「AIOps for NGFW (Free)」アプリケーションが含まれている必要があります。サービスのアクティブ化の詳細については、次のリンクを参照してください: https://docs.paloaltonetworks.com/ngfw/aiops/about/activate-aiops-for-ngfw#activate-aiops-for-ngfw_section_xjs_p55_fyb",
    "The Test button does not ensure sufficient permissions for all integration commands.":
      "「テスト」ボタンでは、すべてのインテグレーションコマンドに対して十分な権限があることは保証されません。",
    "The Threatmon integration allows Cortex to connect with the Threatmon platform to automatically retrieve and update incident data. This integration is designed to help security teams streamline incident management workflows by synchronizing Threatmon alarms and their status directly into XSOAR.":
      "Threatmonインテグレーションにより、CortexはThreatmonプラットフォームに接続し、インシデントデータを自動的に取得・更新できます。このインテグレーションは、Threatmonのアラームとそのステータスを直接XSOARに同期することで、セキュリティチームのインシデント管理ワークフローを効率化することを目的としています。",
    "The ticket type can be: incident, problem, change_request, sc_request, sc_task or sc_req_item.":
      "チケットタイプには、incident、problem、change_request、sc_request、sc_task、sc_req_itemのいずれかを指定できます。",
    "The time range between create_after and created_before that is sent to the API when fetching older incidents. If timeout errors occur, consider changing this value.":
      "古いインシデントをフェッチする際にAPIに送信される、create_afterとcreated_beforeの間の時間範囲。タイムアウトエラーが発生する場合は、この値の変更を検討してください。",
    "The time range for the initial data fetch. If timeout errors occur, consider changing this value.":
      "最初のデータフェッチの時間範囲。タイムアウトエラーが発生する場合は、この値の変更を検討してください。",
    "The timeout for HTTP(S) requests (in seconds) to the Proofpoint server.":
      "ProofpointサーバーへのHTTP(S)リクエストのタイムアウト(秒)。",
    "The timeout of the HTTP requests sent to Cortex (in seconds).":
      "Cortexに送信されるHTTPリクエストのタイムアウト(秒)。",
    "The timeout of the HTTP requests sent to McAfee ePO API (in seconds), the max timeout allowed is 300s.":
      "McAfee ePO APIに送信されるHTTPリクエストのタイムアウト(秒)。許可される最大タイムアウトは300秒です。",
    "The timeout of the HTTP requests sent to Microsoft Graph API (in seconds).":
      "Microsoft Graph APIに送信されるHTTPリクエストのタイムアウト(秒)。",
    "The URL to use for the Submission Service.":
      "Submission Serviceに使用するURL。",
    "The URL to use for the Takedown Service.":
      "Takedown Serviceに使用するURL。",
    "The user must also have the “Allow Multiple Logins” capability.":
      "ユーザーには「Allow Multiple Logins」権限も必要です。",
    "The value can be updated if necessary.":
      "必要に応じて、値を更新できます。",
    "The value of kid in JWT Verifier Maps has to be the same as Key Id in JWT signing key.":
      "JWT Verifier Mapsのkidの値は、JWT signing keyのKey Idと同じである必要があります。",
    "The vsys is located in the Firewall URL; e.g., https://<server>#device::<vsys>::device/setup":
      "vsysは、ファイアウォールのURLに含まれています(例: https://<server>#device::<vsys>::device/setup)",
    "The webhook URL in the Teams channel.":
      "TeamsチャンネルのWebhook URL。",
    "There are 2 methods to authenticate.":
      "認証方法は2つあります。",
    "There are two main use cases for the SplunkPy integration.":
      "SplunkPyインテグレーションの主なユースケースは2つあります。",
    "There are two main use cases for the SplunkPy v2 integration.":
      "SplunkPy v2インテグレーションの主なユースケースは2つあります。",
    "There is a limit to 1000 API calls per day with the free dev API key.":
      "無料の開発者向けAPIキーでは、1日あたり1000回のAPI呼び出しに制限されます。",
    "Therefore, we can’t use index time as our primary search key without making the searches inefficient.":
      "そのため、検索を非効率にすることなく、インデックス時刻を主要な検索キーとして使用することはできません。",
    "These roles are required to make API calls.":
      "これらのロールは、API呼び出しを行うために必要です。",
    "This article will help you configure your Splunk integration, set up a basic flow, and start ingesting incidents from Splunk to Cortex.":
      "この記事では、Splunkインテグレーションの構成、基本的なフローの設定、およびSplunkからCortexへのインシデントの取り込みの開始方法を説明します。",
    "This delay can be caused by an inefficient Splunk architecture, causing higher event indexing latency. However, it can also be “by design”, e.g., if some endpoints / machines that generate Splunk events are usually offline.":
      "この遅延は、非効率なSplunkアーキテクチャによってイベントのインデックス作成の待ち時間が長くなることが原因で発生する場合があります。ただし、たとえば、Splunkイベントを生成する一部のエンドポイントやマシンが通常オフラインである場合など、「仕様による」ものである可能性もあります。",
    "This delay can be caused by an inefficient Splunk architecture, causing higher event indexing latency. However, it can also be “by design”, e.g., if some endpoints or machines that generate Splunk events are frequently offline.":
      "この遅延は、非効率なSplunkアーキテクチャによってイベントのインデックス作成の待ち時間が長くなることが原因で発生する場合があります。ただし、たとえば、Splunkイベントを生成する一部のエンドポイントやマシンが頻繁にオフラインである場合など、「仕様による」ものである可能性もあります。",
    "This enrichment provides additional information about assets, drilldown, and identities that are related to the finding events you ingest.":
      "このエンリッチメントは、取り込んだfindingイベントに関連するアセット、ドリルダウン、ID情報の追加情報を提供します。",
    "This feature is available from Cortex version 6.0.0.":
      "この機能は、Cortexバージョン6.0.0以降で利用できます。",
    "This feature is compliant with XSOAR version 6.0 and above.":
      "この機能は、XSOARバージョン6.0以降と互換性があります。",
    "This feature is supported by Splunk Enterprise Security only.":
      "この機能は、Splunk Enterprise Securityでのみサポートされています。",
    "This field determines from which instance the XSOAR incident was created. It is a required field for XSOAR to enable mirroring support.":
      "このフィールドは、XSOARインシデントがどのインスタンスから作成されたかを判定します。XSOARでミラーリングサポートを有効にするには必須のフィールドです。",
    "This field determines the mirroring direction for the incident. It is a required field for XSOAR to enable mirroring support.":
      "このフィールドは、インシデントのミラーリング方向を決定します。XSOARでミラーリングサポートを有効にするには必須のフィールドです。",
    "This field determines what would be the tag needed to mirror the XSOAR entry out to Vectra RUX. It is a required field for XSOAR to enable mirroring support.":
      "このフィールドは、XSOARのエントリをVectra RUXにミラーリングするために必要なタグを決定します。XSOARでミラーリングサポートを有効にするには必須のフィールドです。",
    "This field is require when running as ‘long running instance’ - please set the max amount of events to fetch.":
      "このフィールドは、‘long running instance’として実行する場合に必須です。フェッチするイベントの最大数を設定してください。",
    "This implies that new fetched events might have a slightly different structure than old events fetched so far.":
      "これは、新しくフェッチされたイベントの構造が、これまでにフェッチされた古いイベントとわずかに異なる可能性があることを意味します。",
    "This integration allows 3 types of enrichments for fetched findings: Drilldown, Asset, and Identity.":
      "このインテグレーションでは、フェッチされたfindingに対して3種類のエンリッチメントが可能です: Drilldown、Asset、Identity。",
    "This integration allows 3 types of enrichments for fetched notables: Drilldown, Asset, and Identity.":
      "このインテグレーションでは、フェッチされたnotableに対して3種類のエンリッチメントが可能です: Drilldown、Asset、Identity。",
    "This integration can be used to pull indicators from ServiceNow with a given user query and add them to the Threat Intelligence Module.":
      "このインテグレーションを使用すると、指定したユーザークエリでServiceNowからインジケーターを取得し、Threat Intelligence Moduleに追加できます。",
    "This integration connects securely with a ServiceNow Model Context Protocol (MCP) server, allowing you to access its tools in real time.":
      "このインテグレーションは、ServiceNow Model Context Protocol(MCP)サーバーにセキュアに接続し、そのツールにリアルタイムでアクセスできるようにします。",
    "This integration currently supports fetching DLP incidents from “NGFW” and “Prisma Access” channels only.":
      "このインテグレーションは現在、「NGFW」および「Prisma Access」チャネルからのDLPインシデントのフェッチのみをサポートしています。",
    "This integration enables Cortex to access and run commands on a terminal in a remote location (via SSH).":
      "このインテグレーションにより、Cortexは(SSH経由で)リモートの場所にあるターミナルにアクセスし、コマンドを実行できます。",
    "This integration enables executing commands with different permission levels.":
      "このインテグレーションにより、異なる権限レベルでコマンドを実行できます。",
    "This integration enables you to manage the features that are available in the Security & Compliance Center from Cortex XSOAR/XSIAM.":
      "このインテグレーションを使用すると、Cortex XSOAR/XSIAMから、Security & Compliance Centerで利用できる機能を管理できます。",
    "This integration enables you to manage the features that are available in the Security & Compliance Center from XSOAR.":
      "このインテグレーションを使用すると、XSOARから、Security & Compliance Centerで利用できる機能を管理できます。",
    "This integration enables you to programmatically generate BPA data for both the free and premium instances of AIOps for NGFW.":
      "このインテグレーションを使用すると、AIOps for NGFWの無料インスタンスとプレミアムインスタンスの両方について、BPAデータをプログラムで生成できます。",
    "This integration enables you to run message traces and manage junk mail rules in Microsoft O365 - Exchange Online.":
      "このインテグレーションを使用すると、Microsoft O365 - Exchange Onlineでメッセージトレースを実行し、迷惑メールルールを管理できます。",
    "This integration is for uploading and downloading files from an SMB server.":
      "このインテグレーションは、SMBサーバーとの間でファイルをアップロードおよびダウンロードするためのものです。",
    "This integration is set up by default on Cortex with the Threat Intel Module (TIM). It is designed for internal use with the TIM Sample Analysis feature. To run ad hoc CLI commands to generate WildFire reports, use the Palo Alto Networks WildFire v2 integration instead.":
      "このインテグレーションは、Threat Intel Module(TIM)を備えたCortexでデフォルトで設定されています。TIMのSample Analysis機能での内部使用を目的として設計されています。アドホックなCLIコマンドを実行してWildFireレポートを生成するには、代わりにPalo Alto Networks WildFire v2インテグレーションを使用してください。",
    "This integration only supports Carbon Black Cloud on-premise APIs.":
      "このインテグレーションは、Carbon Black Cloudのオンプレミス版APIのみをサポートしています。",
    "This integration requires a Cortex Threat Intelligence Management (TIM) license.":
      "このインテグレーションには、Cortex Threat Intelligence Management(TIM)ライセンスが必要です。",
    "This integration requires a Threat Intelligence Management (TIM) license.":
      "このインテグレーションには、Threat Intelligence Management(TIM)ライセンスが必要です。",
    "This integration searches the unified audit log to view user and administrator activity in your organization.":
      "このインテグレーションは、統合監査ログを検索して、組織内のユーザーと管理者のアクティビティを表示します。",
    "This integration supports a default Classifier (Panorama Classifier) and Mapper (Panorama Mapper) that handles incidents returned from the API.":
      "このインテグレーションは、APIから返されるインシデントを処理する、デフォルトのClassifier(Panorama Classifier)とMapper(Panorama Mapper)をサポートしています。",
    "This integration was integrated and tested with McAfee ePO v5.3.2 and v5.10.0 .":
      "このインテグレーションは、McAfee ePO v5.3.2およびv5.10.0で統合およびテストされています。",
    "This integration was integrated and tested with version 1.0 of Prisma SASE API.":
      "このインテグレーションは、Prisma SASE APIのバージョン1.0で統合およびテストされています。",
    "This integration was integrated and tested with version 3.5 of Vectra API.":
      "このインテグレーションは、Vectra APIのバージョン3.5で統合およびテストされています。",
    "This integration was integrated and tested with version 8.11.12 of Proofpoint Protection Server.":
      "このインテグレーションは、Proofpoint Protection Serverのバージョン8.11.12で統合およびテストされています。",
    "This integration was integrated and tested with version xx of VulnDB":
      "このインテグレーションは、VulnDBのバージョンxxで統合およびテストされています",
    "This is how the filter is applied to the query: “ORDERBYopened_at^opened_at>[Last Run]. To prevent duplicate incidents, this field is mandatory for fetching incidents.":
      "クエリへのフィルターの適用方法は次のとおりです: “ORDERBYopened_at^opened_at>[Last Run]。重複したインシデントを防ぐため、インシデントをフェッチする場合、このフィールドは必須です。",
    "This method applies to Jamf versions 10.35.0 and above.":
      "このメソッドは、Jamfバージョン10.35.0以降に適用されます。",
    "This method applies to Jamf versions 10.49.0 and above.":
      "このメソッドは、Jamfバージョン10.49.0以降に適用されます。",
    "This parameter determines the size of the occurrence time “sliding window” we will support in our queries. For example, if set for 2 hours, we will always search for events that occurred up to 2 hours ago (and will of course ignore duplicates).":
      "このパラメーターは、クエリでサポートするイベント発生時刻の「スライディングウィンドウ」のサイズを決定します。たとえば2時間に設定した場合、最大2時間前までに発生したイベントを常に検索します(重複は当然無視されます)。",
    "This parameter will write additional data to the logs and should only be used when you are directed to by XSOAR support.":
      "このパラメーターは、追加のデータをログに書き込みます。XSOARサポートから指示があった場合にのみ使用してください。",
    "This section explains how to configure the instance of Hello IAM World in Cortex.":
      "このセクションでは、CortexでHello IAM Worldのインスタンスを構成する方法を説明します。",
    "This section explains how to fully configure the instance of Orca Security in Cortex.":
      "このセクションでは、CortexでOrca Securityのインスタンスを完全に構成する方法を説明します。",
    "This section will help you configure your Splunk v2 integration, set up a basic flow, and start ingesting events from Splunk to Cortex XSIAM.":
      "このセクションでは、Splunk v2インテグレーションの構成、基本的なフローの設定、およびSplunkからCortex XSIAMへのイベントの取り込みの開始方法を説明します。",
    "This value is mapped to the dbotMirrorTags incident field in Cortex, which defines how Cortex handles notes when you tag them in the War Room. This is required for mirroring notes from Cortex to Vectra RUX.":
      "この値はCortexのdbotMirrorTagsインシデントフィールドにマッピングされ、War Roomでメモにタグを付けたときにCortexがメモを処理する方法を定義します。CortexからVectra RUXへメモをミラーリングするには、この値が必要です。",
    "Threatmon API credentials (API key).":
      "Threatmon APIの認証情報(APIキー)。",
    "Threatmon Integration":
      "Threatmonインテグレーション",
    "Threatmon is a threat intelligence and monitoring platform that provides actionable alerts to security teams. Integrating Threatmon with XSOAR enables more efficient triage, faster response times, and better visibility into your security operations.":
      "Threatmonは、セキュリティチームに実用的なアラートを提供する脅威インテリジェンスおよびモニタリングプラットフォームです。ThreatmonをXSOARと統合することで、より効率的なトリアージ、より迅速な対応、セキュリティ運用の可視性の向上を実現できます。",
    "ThreatX Server URL (e.g., https://provision.threatx.io)":
      "ThreatXサーバーURL(例: https://provision.threatx.io)",
    "Threshold":
      "しきい値",
    "Through the integration you can subscribe to new content types or stop your subscription, list the available content of each content type, and most importantly - fetch new content records from content types of your choice as Cortex incidents.":
      "このインテグレーションを使用すると、新しいコンテンツタイプのサブスクリプションの登録や解除、各コンテンツタイプで利用可能なコンテンツの一覧表示、そして最も重要な、選択したコンテンツタイプからの新しいコンテンツレコードをCortexインシデントとしてフェッチすることができます。",
    "Time between fetches (in seconds). The actual time will be the maximum between the selected value and the server configuration.":
      "フェッチの間隔(秒単位)。実際の間隔は、選択した値とサーバー設定のうち大きい方になります。",
    "Time to wait before taking a screenshot (in seconds)":
      "スクリーンショットを取得するまでの待機時間(秒単位)",
    "Time zone of the collector to fetch from (see detailed description)":
      "フェッチ元のコレクターのタイムゾーン(詳細な説明を参照)",
    "Timeframe for first fetch (in seconds)":
      "最初のフェッチの期間(秒単位)",
    "Timeout (in seconds) for HTTP requests to Zscaler":
      "ZscalerへのHTTPリクエストのタイムアウト(秒単位)",
    "Timestamp field to filter by (e.g., `opened_at`)":
      "フィルター対象のタイムスタンプフィールド(例: `opened_at`)",
    "Timestamp field to filter by (e.g., `opened_at`) This is how the filter is applied to the query: “ORDERBYopened_at^opened_at>[Last Run]. To prevent duplicate incidents, this field is mandatory for fetching incidents.":
      "フィルター対象のタイムスタンプフィールド(例: `opened_at`)フィルターは次のようにクエリに適用されます: “ORDERBYopened_at^opened_at>[Last Run]。重複するインシデントを防ぐため、インシデントのフェッチではこのフィールドが必須です。",
    "Timestamp field to filter by (e.g., `opened_at`) This is how the filter is applied to the query: \"ORDERBYopened_at^opened_at>[Last Run]\".":
      "フィルター対象のタイムスタンプフィールド(例: `opened_at`)フィルターは次のようにクエリに適用されます: 「ORDERBYopened_at^opened_at>[Last Run]」。",
    "Timestamp field to filter by (e.g., `opened_at`) This is how the filter is applied to the query: \"ORDERBYopened_at^opened_at>[Last Run]\". To prevent duplicate incidents, this field is mandatory for fetching incidents.":
      "フィルター対象のタイムスタンプフィールド(例: `opened_at`)フィルターは次のようにクエリに適用されます: 「ORDERBYopened_at^opened_at>[Last Run]」。重複するインシデントを防ぐため、インシデントのフェッチではこのフィールドが必須です。",
    "Timezone of Nitro ESM server in minutes e.g. for gmt +3 set +180 (set only if different than Cortex XSOAR server)":
      "Nitro ESMサーバーのタイムゾーン(分単位)。たとえばGMT+3の場合は+180を設定します(Cortex XSOARサーバーと異なる場合にのみ設定してください)",
    "Tip":
      "ヒント",
    "To choose a specific set of queries, select their log types from the dropdown (make sure “All” option is unselected).":
      "特定のクエリセットを選択するには、ドロップダウンからログタイプを選択します(「All」オプションが選択されていないことを確認してください)。",
    "To choose a specific set of queries, select their log types from the dropdown (make sure the 'All' option is unselected).":
      "特定のクエリセットを選択するには、ドロップダウンからログタイプを選択します(「All」オプションが選択されていないことを確認してください)。",
    "To configure this integration you can either use Email and Password, or the API token.":
      "このインテグレーションを構成するには、メールアドレスとパスワード、またはAPIトークンのいずれかを使用できます。",
    "To generate the new token, press the “Generate” button under the API Tokens section and fill the required details.":
      "新しいトークンを生成するには、「API Tokens」セクションの「Generate」ボタンを押し、必要な詳細を入力します。",
    "To prevent duplicate incidents, this field is mandatory for fetching incidents.":
      "重複するインシデントを防ぐため、インシデントのフェッチではこのフィールドが必須です。",
    "To reduce the number of lookups made to the VT API, this option can be selected to gracefully skip enrichment of any IP addresses allocated for private networks.":
      "VT APIへのルックアップ回数を減らすため、このオプションを選択すると、プライベートネットワークに割り当てられたIPアドレスのエンリッチメントを問題なくスキップできます。",
    "To use a custom mapper, you must first duplicate the mapper and update the fields in the copy of the mapper. (Refer to the “Create a custom mapper consisting of the default Vectra RUX mapper” section for more information.)":
      "カスタムマッパーを使用するには、まずマッパーを複製し、複製したマッパーのフィールドを更新する必要があります。(詳細については、「Create a custom mapper consisting of the default Vectra RUX mapper」セクションを参照してください。)",
    "To use ServiceNow on Cortex, ensure your user account has the rest_api_explorer and web_service_admin roles.":
      "CortexでServiceNowを使用するには、ユーザーアカウントにrest_api_explorerロールとweb_service_adminロールが付与されていることを確認してください。",
    "To use this integration, you need a VirusTotal API key.":
      "このインテグレーションを使用するには、VirusTotal APIキーが必要です。",
    "To use this integration, you need to add a new Azure App Registration in the Azure Portal.":
      "このインテグレーションを使用するには、Azure Portalで新しいAzureアプリ登録を追加する必要があります。",
    "To use this integration, you will need to add a new Azure App Registration in the Azure Portal.":
      "このインテグレーションを使用するには、Azure Portalで新しいAzureアプリ登録を追加する必要があります。",
    "Token (received from the admin consent - see Detailed Instructions (?)":
      "トークン(管理者の同意から取得 - 詳細な手順(?)を参照",
    "Token Exchange":
      "トークン交換",
    "Token Format":
      "トークン形式",
    "Token ID":
      "トークンID",
    "Token ID and Token Key (credentials field)":
      "トークンIDとトークンキー(認証情報フィールド)",
    "Token Key":
      "トークンキー",
    "Troubleshooting enrichment status":
      "エンリッチメントステータスのトラブルシューティング",
    "Trust any certificate (not secure). Make sure to mark this parameter if you want the SlackBlockBuilder script to send a response back to the incident context.":
      "すべての証明書を信頼する(安全ではありません)。SlackBlockBuilderスクリプトからインシデントコンテキストに応答を返す場合は、このパラメーターを選択してください。",
    "Two-factor authentication (2FA) must be enabled on the console and configured for the account accessing the API.":
      "コンソールで二要素認証(2FA)を有効にし、APIにアクセスするアカウントに対して構成する必要があります。",
    "Type of authentication - either Authorization Code (recommended) or Client Credentials.":
      "認証のタイプ。Authorization Code(推奨)またはClient Credentialsのいずれかです。",
    "Type the Host -ip, username, password, and Port.":
      "ホストIP、ユーザー名、パスワード、ポートを入力します。",
    "Uncheck the “Close Detection on Incident Closure” option if you don’t want to close the detection in Vectra when the incident is closed in XSOAR. This option is only used when the mirroring direction is set to ‘Outgoing’ or ‘Incoming And Outgoing’.":
      "XSOARでインシデントがクローズされたときにVectraで検出をクローズしない場合は、「Close Detection on Incident Closure」オプションをオフにします。このオプションは、ミラーリング方向が「Outgoing」または「Incoming And Outgoing」に設定されている場合にのみ使用されます。",
    "Uncheck the “Open Detection on Incident Reopen” option if you don’t want to open the detection in Vectra when the incident is reopened in XSOAR. This option is only used when the mirroring direction is set to ‘Outgoing’ or ‘Incoming And Outgoing’.":
      "XSOARでインシデントが再オープンされたときにVectraで検出をオープンしない場合は、「Open Detection on Incident Reopen」オプションをオフにします。このオプションは、ミラーリング方向が「Outgoing」または「Incoming And Outgoing」に設定されている場合にのみ使用されます。",
    "Under Classifier, select “N/A”.":
      "「Classifier」で「N/A」を選択します。",
    "Under Classifier, select N/A.":
      "「Classifier」で「N/A」を選択します。",
    "Under Incident type, select “Vectra RUX Events Detection”.":
      "「Incident type」で「Vectra RUX Events Detection」を選択します。",
    "Under Mapper (incoming), select “Vectra RUX - Incoming Mapper” for default mapping.":
      "デフォルトのマッピングを使用するには、「Mapper (incoming)」で「Vectra RUX - Incoming Mapper」を選択します。",
    "Update “Max Fetch” & “First Fetch Time” based on your requirements.":
      "要件に応じて、「Max Fetch」と「First Fetch Time」を更新します。",
    "Update the status of existing Threatmon incidents (e.g., Open, In Progress, Resolved).":
      "既存のThreatmonインシデントのステータスを更新します(例: Open、In Progress、Resolved)。",
    "Update the status of Threatmon incidents from within XSOAR.":
      "XSOAR内からThreatmonインシデントのステータスを更新します。",
    "UPN Password":
      "UPNパスワード",
    "URL and Port":
      "URLとポート",
    "URL Malicious Threshold. Minimum number of positive results from VT scanners to consider the URL malicious.":
      "URL悪意しきい値。URLを悪意のあるものと見なすために必要な、VTスキャナーによる陽性結果の最小数です。",
    "URL of the Vectra AI platform.":
      "Vectra AIプラットフォームのURLです。",
    "URL Relationships":
      "URLリレーションシップ",
    "URL Suspicious Threshold. Minimum number of positive and suspicious results from VT scanners to consider the URL suspicious.":
      "URL疑わしいしきい値。URLを疑わしいものと見なすために必要な、VTスキャナーによる陽性および疑わしい結果の最小数です。",
    "URL Threshold. Minimum number of positive results from VT scanners to consider the URL malicious.":
      "URLしきい値。URLを悪意のあるものと見なすために必要な、VTスキャナーによる陽性結果の最小数です。",
    "Use “Tag” to filter which notification tag to get.":
      "取得する通知タグを絞り込むには、「Tag」を使用します。",
    "Use API token instead of Username and Password":
      "ユーザー名とパスワードの代わりにAPIトークンを使用する",
    "Use both values to configure the integration instance.":
      "インテグレーションインスタンスを構成するには、両方の値を使用します。",
    "Use Display Value":
      "表示値を使用",
    "Use Enterprise DLP API":
      "Enterprise DLP APIを使用",
    "Use JWT Authentication":
      "JWT認証を使用",
    "Use Live Response for VMware Carbon Black Endpoint Standard or VMware Carbon Black EDR (previously known as Carbon Black Defense and Carbon Black Response respectively).":
      "VMware Carbon Black Endpoint StandardまたはVMware Carbon Black EDR(それぞれ旧称Carbon Black DefenseおよびCarbon Black Response)でLive Responseを使用します。",
    "Use OAuth 2.0 Authentication":
      "OAuth 2.0認証を使用",
    "Use OAuth Login":
      "OAuthログインを使用",
    "Use secure requests protocol (HTTPS).":
      "セキュアなリクエストプロトコル(HTTPS)を使用",
    "Use system proxy settings checkbox":
      "システムのプロキシ設定を使用するチェックボックス",
    "Use system proxy settings: Select this checkbox to use the system’s proxy settings.":
      "システムのプロキシ設定を使用: システムのプロキシ設定を使用する場合は、このチェックボックスをオンにします。",
    "Use the \"API Key (Recommended)\" parameter instead.":
      "代わりに「API Key (Recommended)」パラメーターを使用してください。",
    "Use the Client ID and Client Secret Key directly in this integration, or store them in the Cortex credentials store. In that case, the Client ID should be stored in the “username” field and the Client Secret Key should be stored in the “password” field.":
      "このインテグレーションでClient IDとClient Secret Keyを直接使用するか、Cortexの認証情報ストアに保存します。その場合、Client IDは「username」フィールドに、Client Secret Keyは「password」フィールドに保存してください。",
    "Use the following naming convention: (demisto_fields_{type}).":
      "次の命名規則を使用します: (demisto_fields_{type})。",
    "Use the Microsoft Teams integration to send messages and notifications to your team members and create meetings.":
      "Microsoft Teamsインテグレーションを使用して、チームメンバーにメッセージや通知を送信したり、会議を作成したりします。",
    "Use the Microsoft Teams Webhook integration to send messages and notifications to Teams configured with an incoming webhook or a workflow. When using an adaptive card, the message will always include a link back to the investigation from which it was sent.":
      "Microsoft Teams Webhookインテグレーションを使用して、受信Webhookまたはワークフローで構成されたTeamsにメッセージや通知を送信します。アダプティブカードを使用する場合、メッセージには常に、送信元の調査へのリンクが含まれます。",
    "Use the Prisma Cloud integration to manage alerts from Microsoft Azure, Google Cloud Platform, and AWS.":
      "Prisma Cloudインテグレーションを使用して、Microsoft Azure、Google Cloud Platform、AWSのアラートを管理します。",
    "Use the SplunkPy integration to fetch incidents from Splunk ES, and query results by SID.":
      "SplunkPyインテグレーションを使用して、Splunk ESからインシデントをフェッチし、SIDでクエリ結果を取得します。",
    "Use the system proxy settings to reach with the Vectra RUX API.":
      "Vectra RUX APIにアクセスするためにシステムのプロキシ設定を使用します。",
    "Use the Workday IAM integration to fetch Workday reports and create corresponding incidents in Cortex. This integration is meant to be used as part of the IAM premium pack.":
      "Workday IAMインテグレーションを使用して、Workdayレポートをフェッチし、対応するインシデントをCortexに作成します。このインテグレーションは、IAMプレミアムパックの一部として使用することを想定しています。",
    "Use the Zendesk V2 integration to perform operations related to users, tickets, attachments, and more.":
      "Zendesk V2インテグレーションを使用して、ユーザー、チケット、添付ファイルなどに関する操作を実行します。",
    "Use these client_id, client_secret, tsg_id to authenticate to your AIOps instance.":
      "これらのclient_id、client_secret、tsg_idを使用して、AIOpsインスタンスに対して認証します。",
    "Use this option when required to customize the URL to the Azure management endpoint. More information can be found here - https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud":
      "Azure管理エンドポイントのURLをカスタマイズする必要がある場合に、このオプションを使用します。詳細については、こちらを参照してください - https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud",
    "Use this option when required to customize the URL to the Entra ID endpoint. More information can be found here - https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud":
      "Entra IDエンドポイントのURLをカスタマイズする必要がある場合に、このオプションを使用します。詳細については、こちらを参照してください - https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud",
    "Use this parameter with careful consideration.":
      "このパラメーターは慎重に検討したうえで使用してください。",
    "Use TLS for connection":
      "接続にTLSを使用",
    "Use to query SQL Server, using a remote (TCP) connection to the DB.":
      "DBへのリモート(TCP)接続を使用して、SQL Serverにクエリを実行する場合に使用します。",
    "Use when SonarQube is publicly accessible.":
      "SonarQubeが公開されている場合に使用します。",
    "Use your server URL, username and password in order to get your API-key.":
      "サーバーURL、ユーザー名、パスワードを使用して、APIキーを取得します。",
    "Used for certificate authentication. As appears in the \"Certificates & secrets\" page of the app.":
      "証明書認証に使用します。アプリの「Certificates & secrets」ページに表示されるとおりに入力します。",
    "User Email Address (Use for auto token refresh)":
      "ユーザーのメールアドレス(トークンの自動更新に使用)",
    "User Token":
      "ユーザートークン",
    "Username (email address)":
      "ユーザー名(メールアドレス)",
    "Username (or '<username>/token' when using API key).":
      "ユーザー名(APIキーを使用する場合は '<username>/token')。",
    "Username / Access Key ID":
      "ユーザー名 / アクセスキーID",
    "Username / API Key":
      "ユーザー名 / APIキー",
    "Username / API Key (see '?')":
      "ユーザー名 / APIキー('?' を参照)",
    "Users and Authentication":
      "ユーザーと認証",
    "Users Lookup table name":
      "ユーザールックアップテーブル名",
    "Users must be assigned to the admin role to use this integration.":
      "このインテグレーションを使用するには、ユーザーにadminロールを割り当てる必要があります。",
    "Uses the system proxy server to communicate with the integration. If not selected, the integration will not use the system proxy server.":
      "システムのプロキシサーバーを使用して、インテグレーションと通信します。選択しない場合、インテグレーションはシステムのプロキシサーバーを使用しません。",
    "Using API Token authentication":
      "APIトークン認証の使用",
    "Using Multi Factor Authentication (MFA)":
      "多要素認証(MFA)の使用",
    "Using Multi-Factor Authentication (MFA)":
      "多要素認証(MFA)の使用",
    "Using National Cloud":
      "ナショナルクラウドの使用",
    "Using the task ‘Create Integration system user’ create an account with username and password":
      "タスク「Create Integration system user」を使用して、ユーザー名とパスワードを持つアカウントを作成します",
    "Validate the negotiation info when connecting to a share. More information can be found on https://docs.microsoft.com/en-us/archive/blogs/openspecification/smb3-secure-dialect-negotiation":
      "共有に接続するときにネゴシエーション情報を検証します。詳細については、https://docs.microsoft.com/en-us/archive/blogs/openspecification/smb3-secure-dialect-negotiation を参照してください",
    "Verbose (show log in case of error)":
      "詳細ログ(エラー発生時にログを表示)",
    "Verification Token(Team Chat App)":
      "検証トークン(Team Chat App)",
    "Verify SSL":
      "SSLを検証",
    "VirusTotal has been updated to VirusTotal (API v3). Please use the updated version instead.":
      "VirusTotalはVirusTotal (API v3)に更新されました。代わりに更新後のバージョンを使用してください。",
    "Vsys - Firewall instances only":
      "Vsys - ファイアウォールインスタンスのみ",
    "When checked, no SSL certificates check will be done when interacting with the Vectra RUX API. It's insecure. (Default - unchecked)":
      "オンにすると、Vectra RUX APIとのやり取り時にSSL証明書のチェックが行われません。安全ではありません。(デフォルト: オフ)",
    "When ciphers are specified, the SSH connection will be established with the first cipher of the specified ciphers that the given host supports.":
      "暗号を指定すると、指定した暗号のうち、指定したホストがサポートする最初の暗号を使用してSSH接続が確立されます。",
    "When fetch is enable you must provide this argument. Possible values are: new, open, assigned, closed or ignored.":
      "フェッチを有効にする場合は、この引数を指定する必要があります。指定可能な値: new、open、assigned、closed、ignored。",
    "When fetching supplier findings, a run that reaches this limit part-way through a supplier resumes on that same supplier next run, so the limit is honored without skipping findings.":
      "サプライヤーの検出結果をフェッチする際、サプライヤーの処理途中でこの上限に達した場合、次回の実行では同じサプライヤーから再開されるため、検出結果をスキップすることなく上限が守られます。",
    "When key algorithms are specified, the SSH connection will be established with the first key algorithm of the specified key algorithms that the given host supports.":
      "キーアルゴリズムを指定すると、指定したキーアルゴリズムのうち、指定したホストがサポートする最初のキーアルゴリズムを使用してSSH接続が確立されます。",
    "When mirroring incidents, you can make changes in Vectra that will be reflected in Cortex, or vice versa.":
      "インシデントをミラーリングすると、Vectraで行った変更がCortexに反映されます。その逆も同様です。",
    "When running Live Response commands (e.g. ‘cb-process-kill’), it is possible to pass ‘wait-timeout’ argument to determine the number of seconds to wait for the command to be executed on Live Response side. Once the command has been executed or wait-time has expired - the command information will be returned to the war room.":
      "Live Responseコマンド(例: 'cb-process-kill')を実行する際に、'wait-timeout'引数を指定すると、Live Response側でコマンドが実行されるまで待機する秒数を指定できます。コマンドが実行されるか、待機時間が経過すると、コマンド情報がwar roomに返されます。",
    "When selected, closing and re-opening the Cortex incident is mirrored in Prisma Cloud.":
      "オンにすると、Cortexインシデントのクローズと再オープンがPrisma Cloudにミラーリングされます。",
    "When selected, the hunting query result is also saved to the Microsoft 365 Defender context path. Relevant only for the msg-advanced-hunting command.":
      "オンにすると、ハンティングクエリの結果がMicrosoft 365 Defenderのコンテキストパスにも保存されます。msg-advanced-hunting コマンドの場合にのみ関連します。",
    "When selecting the Custom option, the Azure AD endpoint parameter must be filled. More information about National clouds can be found here - https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud":
      "Customオプションを選択する場合は、Azure AD endpointパラメーターを入力する必要があります。ナショナルクラウドの詳細については、こちらを参照してください - https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud",
    "When selecting the Custom option, the Host URL parameter must be filled. More information about National clouds can be found here - https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud":
      "Customオプションを選択する場合は、Host URLパラメーターを入力する必要があります。ナショナルクラウドの詳細については、こちらを参照してください - https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud",
    "When selecting the Custom option, the Server URL parameter must be filled. More information can be found on the integration page - https://xsoar.pan.dev/docs/reference/integrations/microsoft-defender-advanced-threat-protection":
      "Customオプションを選択する場合は、Server URLパラメーターを入力する必要があります。詳細については、インテグレーションのページを参照してください - https://xsoar.pan.dev/docs/reference/integrations/microsoft-defender-advanced-threat-protection",
    "When switching from the 'Authorization Code Flow' to the 'Client Credentials Flow', test the validity of the instance by clicking the 'Test' button.":
      "'Authorization Code Flow'から'Client Credentials Flow'に切り替える場合は、'Test'ボタンをクリックしてインスタンスの有効性をテストします。",
    "When switching from the 'Client Credentials Flow' to the 'Authorization Code Flow' do as follow: Save the instance, run the 'microsoft-teams-generate-login-url' command and follow the instructions mentioned there. Once done, test the validity of your instance by running the 'microsoft-teams-auth-test' command.":
      "'Client Credentials Flow'から'Authorization Code Flow'に切り替える場合は、次の手順を実行します。インスタンスを保存し、'microsoft-teams-generate-login-url'コマンドを実行して、そこに記載されている手順に従います。完了したら、'microsoft-teams-auth-test'コマンドを実行して、インスタンスの有効性をテストします。",
    "When switching from the 'Client Credentials Flow' to the 'Authorization Code Flow' do as follow: Save the instance, run the 'microsoft-teams-generate-login-url' command and follow the instructions mentioned there. Once done, test the validity of your instance by running the 'microsoft-teams-auth-test' command. When switching from the 'Authorization Code Flow' to the 'Client Credentials Flow', test the validity of the instance by clicking the 'Test' button.":
      "'Client Credentials Flow'から'Authorization Code Flow'に切り替える場合は、次の手順を実行します。インスタンスを保存し、'microsoft-teams-generate-login-url'コマンドを実行して、そこに記載されている手順に従います。完了したら、'microsoft-teams-auth-test'コマンドを実行して、インスタンスの有効性をテストします。'Authorization Code Flow'から'Client Credentials Flow'に切り替える場合は、'Test'ボタンをクリックしてインスタンスの有効性をテストします。",
    "When using basic authorization, you will have to update your password with the current OTP every time the current code expires (30 seconds), hence we recommend using OAuth 2.0 authorization.":
      "基本認証を使用する場合、現在のコードが期限切れになるたび(30秒ごと)に、パスワードを現在のOTPで更新する必要があります。そのため、OAuth 2.0認可の使用を推奨します。",
    "When using basic authorization, you will have to update your password with the current OTP every time the current code expires (30 seconds), therefore we recommend using OAuth 2.0 authorization.":
      "基本認証を使用する場合、現在のコードが期限切れになるたび(30秒ごと)に、パスワードを現在のOTPで更新する必要があります。そのため、OAuth 2.0認可の使用を推奨します。",
    "Whether this instance fetches your own organization's findings or findings across your supplier portfolio. Configure a separate instance for each scope.":
      "このインスタンスが、自組織の検出結果とサプライヤーポートフォリオ全体の検出結果のどちらをフェッチするかを指定します。スコープごとに別々のインスタンスを構成してください。",
    "Whether to add escaping before `=` chars in URLs. For further information, see the pack README":
      "URL内の `=` 文字の前にエスケープを追加するかどうかを指定します。詳細については、パックのREADMEを参照してください",
    "Whether to disable automatic notifications to the configured notifications channel.":
      "設定された通知チャンネルへの自動通知を無効にするかどうかを指定します。",
    "Whether to enable mirroring only from xsoar to slack, mark it if file mirroring is required in investigations.":
      "XSOARからSlackへのミラーリングのみを有効にするかどうかを指定します。調査でファイルのミラーリングが必要な場合は、オンにします。",
    "Whether to trust any certificate (not secure).":
      "すべての証明書を信頼するかどうかを指定します(安全ではありません)。",
    "Whether to use the system proxy settings.":
      "システムのプロキシ設定を使用するかどうかを指定します。",
    "WildFire Server URLs":
      "WildFireサーバーURL",
    "Workday Report URL":
      "WorkdayレポートのURL",
    "Workday Reports":
      "Workdayレポート",
    "XSOAR API Key":
      "XSOAR APIキー",
    "XSOAR user key":
      "XSOARユーザーキー",
    "XSOAR will query for Orca Alerts/ Alert updates every 1 minute":
      "XSOARは1分ごとにOrcaのアラートとアラートの更新をクエリします",
    "You can also specify the threshold as an argument when running relevant commands.":
      "関連するコマンドの実行時に、しきい値を引数として指定することもできます。",
    "You can enable incident mirroring between Cortex incidents and Splunk findings.":
      "CortexインシデントとSplunkの検出結果の間でインシデントのミラーリングを有効にできます。",
    "You can enable incident mirroring between Cortex incidents and Splunk notables.":
      "CortexインシデントとSplunkのnotableの間でインシデントのミラーリングを有効にできます。",
    "You can execute these commands from the Cortex CLI, as part of an automation, or in a playbook.":
      "これらのコマンドは、Cortex CLIから、オートメーションの一部として、またはPlaybook内で実行できます。",
    "You can store the additional workflow in a Cortex list, and use a transformer on the task in a playbook to send to a specific team.":
      "追加のワークフローをCortexリストに保存し、Playbookのタスクでトランスフォーマーを使用して特定のチームに送信できます。",
    "You can use Prisma Cloud UI to generate this required access key.":
      "このアクセスキーの生成には、Prisma Cloud UIを使用できます。",
    "You can use the following methods to authenticate Microsoft Defender XDR.":
      "Microsoft Defender XDRの認証には、次の方法を使用できます。",
    "You do not need to specify the classifier as all Splunk incidents are ingested as Splunk Notable Generic. As you become more familiar with Cortex, you can create custom incident types as needed instead of using the Splunk Notable Generic incident type.":
      "すべてのSplunkインシデントはSplunk Notable Genericとして取り込まれるため、分類子を指定する必要はありません。Cortexに慣れてきたら、Splunk Notable Genericインシデントタイプを使用する代わりに、必要に応じてカスタムインシデントタイプを作成できます。",
    "You don’t need to install the packages, they are included in the Docker image.":
      "パッケージはDockerイメージに含まれているため、インストールする必要はありません。",
    "You may also use the advanced search in Okta’s System Logs to generate the filter expression.":
      "Oktaのシステムログの高度な検索を使用して、フィルター式を生成することもできます。",
    "You most enable or run mirror-investigation.":
      "mirror-investigationを有効にするか、実行する必要があります。",
    "You must have an API subscription.":
      "APIサブスクリプションが必要です。",
    "You must have your client applications registered on your authorization server with the required scope and configured appropriately.":
      "クライアントアプリケーションを、必要なスコープで認可サーバーに登録し、適切に構成しておく必要があります。",
    "You need to create a separate integration instance for Palo Alto Networks Firewall and Palo Alto Networks. Unless specified otherwise, all commands are valid for both Firewall and Panorama.":
      "Palo Alto Networks FirewallとPalo Alto Networksには、それぞれ別のインテグレーションインスタンスを作成する必要があります。特に指定がない限り、すべてのコマンドはFirewallとPanoramaの両方で有効です。",
    "You should have a non-admin user with all necessary roles (only non-admin roles) in addition to the existing role snc_platform_rest_api_access that is required to make API calls.":
      "API呼び出しに必要な既存のロールsnc_platform_rest_api_accessに加えて、必要なすべてのロール(管理者以外のロールのみ)を持つ非管理者ユーザーが必要です。",
    "Your API key can be found in your Orion Malware account user menu.":
      "APIキーは、Orion Malwareアカウントのユーザーメニューで確認できます。",
    "Your API key can be found in your VirusTotal account user menu.":
      "APIキーは、VirusTotalアカウントのユーザーメニューで確認できます。",
    "Your API key carries all your privileges, so keep it secure and don’t share it with anyone.":
      "APIキーにはすべての権限が付与されているため、安全に保管し、他の人と共有しないでください。",
    "Your PingOne Environment ID":
      "PingOne環境ID",
    "Your server URL (e.g., https://yourdomain.jamfcloud.com)":
      "サーバーURL(例: https://yourdomain.jamfcloud.com)",
    "Zendesk address (e.g. https://demisto.zendesk.com)":
      "Zendeskアドレス(例: https://demisto.zendesk.com)",
    "Zendesk integration requires the API key and a username.":
      "Zendeskインテグレーションには、APIキーとユーザー名が必要です。",
    "ZIdentity returns a Bearer access token.":
      "ZIdentityはBearerアクセストークンを返します。",

    // --- Batch: Splunk/ServiceNow/Mimecast/RelayShield/Panorays/TypeSafe etc. integration docs as joined sentences (16:09 export, Collector 0.2.0) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    "(Investigation only) If {0} is selected in step 8, configure the following Investigation-specific parameters:":
      "(調査のみ)手順8で{0}を選択した場合は、次の調査固有のパラメーターを構成します:",
    "(Optional) Test the created instance by running the {0} command.":
      "(オプション)作成したインスタンスをテストするには、{0}コマンドを実行します。",
    "(Recommended) Enter the ServiceNow account {0} and {1} in the integration instance configuration. When provided, the integration automatically performs the initial OAuth login on first use. It also automatically renews the refresh token when it expires.":
      "(推奨)インテグレーションのインスタンス構成にServiceNowアカウントの{0}と{1}を入力します。指定すると、インテグレーションは初回使用時に最初のOAuthログインを自動的に実行します。また、リフレッシュトークンの有効期限が切れると、自動的に更新します。",
    "{0} Check the balance and entitlements on your account at {1}.":
      "{0}アカウントの残高と利用権限は、{1}で確認してください。",
    "{0} Confirm the key was copied in full and begins with {1}. Keys are deactivated when the underlying subscription is cancelled.":
      "{0}キーが完全にコピーされ、{1}で始まっていることを確認してください。基盤となるサブスクリプションが解約されると、キーは無効化されます。",
    "{0} This is a clean result, not an error. RelayShield reports only on sources it queried; see the DBotScore mapping above.":
      "{0}これは正常な結果であり、エラーではありません。RelayShieldは、照会したソースのみを報告します。上記のDBotScoreのマッピングを参照してください。",
    "{0}: Fetches the drilldown searches configured by the user in the rule name that triggered the finding event and performs this search. The results are stored in the context of the incident under the {1} field as follows: [{‘query_name’:<query_name>, ‘query_search’: <query_search>, ‘query_results’: [{result1}, {result2}, {result3}], ‘enrichment_status’: <enrichment_status>}].":
      "{0}: ルール名にユーザーが設定したドリルダウン検索(finding eventをトリガーしたもの)をフェッチして実行します。結果は、インシデントのコンテキストの{1}フィールドに次の形式で保存されます: [{‘query_name’:<query_name>, ‘query_search’: <query_search>, ‘query_results’: [{result1}, {result2}, {result3}], ‘enrichment_status’: <enrichment_status>}]。",
    "{0}: Keep the SPL query as-is unless you need to filter further. The query must include the {1} token. Do not modify or remove this token. To add custom filters, append extra URL parameters such as {2} after the placeholder.":
      "{0}: さらにフィルタリングする必要がない限り、SPLクエリはそのままにしてください。クエリには {1} トークンを含める必要があります。このトークンは変更または削除しないでください。カスタムフィルターを追加するには、プレースホルダーの後に {2} などの追加のURLパラメーターを付加します。",
    "{0}: Select the enrichment types you want to enrich each fetched finding with. If none are selected, the integration will fetch findings as usual (without enrichment).":
      "{0}: フェッチした各findingをエンリッチするエンリッチメントタイプを選択します。何も選択しない場合、インテグレーションはエンリッチメントなしで通常どおりfindingをフェッチします。",
    "{0}: Select the enrichment types you want to enrich each fetched notable with. If none are selected, the integration will fetch notables as usual (without enrichment).":
      "{0}: フェッチした各notableをエンリッチするエンリッチメントタイプを選択します。何も選択しない場合、インテグレーションはエンリッチメントなしで通常どおりnotableをフェッチします。",
    "{0}: The maximal amount of events to fetch per enrichment type (Drilldown, Asset, and Identity). In a case of multiple drilldown enrichments the limit will apply for each drilldown search query. (default to 20).":
      "{0}: エンリッチメントタイプ(Drilldown、Asset、Identity)ごとにフェッチするイベントの最大数。複数のドリルダウンエンリッチメントがある場合、上限はドリルダウン検索クエリごとに適用されます。(デフォルトは20)。",
    "{0}: The maximum number of investigations to fetch per cycle. Limited to 100 by the Splunk investigations endpoint.":
      "{0}: 1サイクルあたりにフェッチする調査の最大数。Splunkの調査エンドポイントにより、100に制限されます。",
    "{0}: The query for the finding events enrichment (defined by default). If you decide to edit this, make sure to provide a query that uses the `notable` macro. See the default query as an example.":
      "{0}: finding eventのエンリッチメント用クエリ(デフォルトで定義済み)。編集する場合は、`notable` マクロを使用するクエリを指定してください。デフォルトのクエリを例として参照してください。",
    "{0}: The query for the notable events enrichment (defined by default). If you decide to edit this, make sure to provide a query that uses the `notable` macro. See the default query as an example.":
      "{0}: notable eventのエンリッチメント用クエリ(デフォルトで定義済み)。編集する場合は、`notable` マクロを使用するクエリを指定してください。デフォルトのクエリを例として参照してください。",
    "{0}: The relative time interval to look back during the initial investigation fetch (for example, {1}).":
      "{0}: 最初の調査フェッチ時にさかのぼる相対的な時間間隔(例: {1})。",
    "{0}: The timeout for each enrichment (default is 5min). When the selected timeout was reached, finding events that were not enriched will be saved without the enrichment.":
      "{0}: 各エンリッチメントのタイムアウト(デフォルトは5分)。選択したタイムアウトに達すると、エンリッチされなかったfinding eventはエンリッチメントなしで保存されます。",
    "{0}: The timeout for each enrichment (default is 5min). When the selected timeout was reached, notable events that were not enriched will be saved without the enrichment.":
      "{0}: 各エンリッチメントのタイムアウト(デフォルトは5分)。選択したタイムアウトに達すると、エンリッチされなかったnotable eventはエンリッチメントなしで保存されます。",
    "{0}: whether the asset enrichment was successful.":
      "{0}: アセットのエンリッチメントが成功したかどうか。",
    "{0}: whether the drilldown enrichment was successful. In a case of multiple drilldown enrichments, the status is successful if at least one drilldown search enrichment was successful.":
      "{0}: ドリルダウンのエンリッチメントが成功したかどうか。複数のドリルダウンエンリッチメントがある場合、少なくとも1つのドリルダウン検索エンリッチメントが成功していれば、ステータスは成功になります。",
    "{0}: whether the identity enrichment was successful.":
      "{0}: アイデンティティのエンリッチメントが成功したかどうか。",
    "A clean result (“no known finding”) is mapped to DBotScore {0}, never {1}. “No known finding” means nothing was flagged in the sources RelayShield actually queried. It is not a verified-safe guarantee, and treating it as “Good” would claim more certainty than the underlying data supports. CRITICAL/HIGH findings map to {2}, MEDIUM/LOW findings map to {3}.":
      "クリーンな結果(「no known finding」)は、DBotScore {0}にマッピングされ、{1}にはマッピングされません。「No known finding」は、RelayShieldが実際に照会したソースで何も検出されなかったことを意味します。安全であることが検証された保証ではなく、「Good」として扱うと、基になるデータが裏付ける以上の確実性を示してしまいます。CRITICAL/HIGHの検出結果は{2}、MEDIUM/LOWの検出結果は{3}にマッピングされます。",
    "Build a query by selecting fields operators and relevant values. You can always add an additional condition by selecting the {0} button on the right. For more information on how to use the search editor see {1}.":
      "フィールド、演算子、関連する値を選択してクエリを作成します。右側の{0}ボタンを選択すると、いつでも条件を追加できます。検索エディターの使い方の詳細については、{1}を参照してください。",
    "By default, the {0} parameter is set to 70. This means that for every file with a severity of over 70 the Dbot score will be set to {1}. This parameter is configurable.":
      "デフォルトでは、{0}パラメーターは70に設定されています。つまり、重大度が70を超えるすべてのファイルについて、Dbotスコアは{1}に設定されます。このパラメーターは構成可能です。",
    "Content in the Splunk content pack (such as mappers, layout, playbooks, incident fields, and the incident type). Therefore, you will need to create your own content. See the {0} for information.":
      "Splunkコンテンツパック(マッパー、レイアウト、Playbook、インシデントフィールド、インシデントタイプなど)のコンテンツです。そのため、独自のコンテンツを作成する必要があります。詳細については、{0}を参照してください。",
    "Copy the API key from the confirmation page. It begins with {0}. The key is also emailed to the address you entered.":
      "確認ページからAPIキーをコピーします。キーは {0} で始まります。キーは、入力したアドレスにもメールで送信されます。",
    "Copy the query value and paste it as the value for the {0} argument for both search commands. For example:":
      "query の値をコピーし、両方の検索コマンドの {0} 引数の値として貼り付けます。例:",
    "Create a Java Key Store and upload it to the instance by accessing from the upper menu: {0} > {1} > {2}. The private key will be used as an integration parameter.":
      "上部メニューから {0} > {1} > {2} の順にアクセスして、Java Key Storeを作成し、インスタンスにアップロードします。秘密鍵はインテグレーションのパラメーターとして使用されます。",
    "Create a summary index in Splunk. For more information, click {0}.":
      "Splunkでサマリーインデックスを作成します。詳細については、{0}をクリックしてください。",
    "Enter your username and password, and append the One Time Password (OTP) that you currently see on your mobile device to your password without any extra spaces. For example, if your password is {0} and the current OTP code is {1}, enter {2}.":
      "ユーザー名とパスワードを入力し、モバイルデバイスに現在表示されているワンタイムパスワード(OTP)を、余分なスペースを入れずにパスワードの末尾に付加します。たとえば、パスワードが {0} で現在のOTPコードが {1} の場合は、{2} と入力します。",
    "For anything else, contact {0}.":
      "その他のお問い合わせは、{0}までご連絡ください。",
    "For assistance, contact Panorays support at {0}.":
      "サポートが必要な場合は、Panoraysサポート({0})までご連絡ください。",
    "For full instructions, see the {0}.":
      "詳細な手順については、{0}を参照してください。",
    "For mirroring the {0} field, the usernames need to be transformed to the corresponding names in Cortex and Splunk.":
      "{0}フィールドをミラーリングするには、ユーザー名をCortexとSplunkの対応する名前に変換する必要があります。",
    "For more information about creating an OAuth app click {0}.":
      "OAuthアプリの作成の詳細については、{0}をクリックしてください。",
    "For using OAuth 2.0 see the above instructions. The OTP code should be appended to the password parameter in the {0} command.":
      "OAuth 2.0の使用については、上記の手順を参照してください。OTPコードは、{0}コマンドのパスワードパラメーターの末尾に付加する必要があります。",
    "From the {0} page, click {1}.":
      "{0}ページで、{1}をクリックします。",
    "From the left-side navigation menu, click {0}.":
      "左側のナビゲーションメニューから{0}をクリックします。",
    "From the top navigation bar, click {0}.":
      "上部のナビゲーションバーから{0}をクリックします。",
    "Go to the {0}.":
      "{0}にアクセスします。",
    "If the {0} and {1} fields are configured, the integration will automatically perform the initial login and renew the refresh token when it expires — no manual commands are needed. Otherwise, you will have to run the {2} command for the initial login and again each time the refresh token expires.":
      "{0}フィールドと{1}フィールドが構成されている場合、インテグレーションは最初のログインを自動的に実行し、リフレッシュトークンの有効期限が切れると更新します。手動でのコマンド実行は不要です。それ以外の場合は、最初のログイン時と、リフレッシュトークンの有効期限が切れるたびに、{2}コマンドを実行する必要があります。",
    "If you did note provide {0} and {1} in step 3, run the {2} command from the Cortex CLI and fill in the username and password of the ServiceNow integration instance. This step generates an access token to the ServiceNow instance and is required only the first time after configuring a new integration instance in Cortex. If you provided {3} and {4}, this step is handled automatically.":
      "手順3で{0}と{1}を指定しなかった場合は、Cortex CLIから{2}コマンドを実行し、ServiceNowインテグレーションインスタンスのユーザー名とパスワードを入力します。この手順により、ServiceNowインスタンスへのアクセストークンが生成されます。この手順が必要なのは、Cortexで新しいインテグレーションインスタンスを構成した後の初回のみです。{3}と{4}を指定した場合、この手順は自動的に処理されます。",
    "In case of inconsistent authentication issues when using username & password, try to use {0} as the username. this will set the integration to use basic authentication when connecting to the Splunk server. For example: TestUser@_basic":
      "ユーザー名とパスワードを使用した際に認証の問題が一貫して発生する場合は、ユーザー名として {0} を使用してみてください。これにより、インテグレーションがSplunkサーバーへの接続時にBasic認証を使用するように設定されます。例: TestUser@_basic",
    "In order for the mirroring to work, the {0} parameter needs to be set before the incident is fetched.":
      "ミラーリングを機能させるには、インシデントがフェッチされる前に{0}パラメーターを設定しておく必要があります。",
    "In order to activate them check the {0} checkbox, and then check the relevant boxes for each fetch type you want.":
      "これらを有効にするには、{0}チェックボックスをオンにし、フェッチするタイプごとに該当するチェックボックスをオンにします。",
    "In order to refresh token / discover auth types of the account / create new access & secret keys, you are required to provide: App ID, Account email address & password, and BaseUrl is set to {0}, based on your {1}. These parameters support the following integration commands: mimecast-login -> fetches new access key & secret key mimecast-discover -> lists supported auth types of user mimecast-refresh-token -> refreshes the validity duration of access key & secret key (3 days)":
      "トークンの更新、アカウントの認証タイプの検出、新しいアクセスキーとシークレットキーの作成を行うには、App ID、アカウントのメールアドレスとパスワードを指定する必要があります。BaseUrlは{0}に設定されます({1}に基づく)。これらのパラメーターは、次のインテグレーションコマンドをサポートします: mimecast-login -> 新しいアクセスキーとシークレットキーをフェッチ mimecast-discover -> ユーザーがサポートする認証タイプを一覧表示 mimecast-refresh-token -> アクセスキーとシークレットキーの有効期間を更新(3日間)",
    "In the {0} parameter, select which Splunk event types to ingest. Default is {1}. Add {2} to also fetch Splunk investigations (select both to fetch them together).":
      "{0}パラメーターで、取り込むSplunkのイベントタイプを選択します。デフォルトは{1}です。Splunkの調査もフェッチするには、{2}を追加します(両方を選択すると、まとめてフェッチされます)。",
    "In the Enrichment Types field, select {0}, {1} and {2}. This enrichment provides additional information about assets, drilldown, and identities that are related to the notable events you ingest. Multiple drilldown searches enrichment is supported from Enterprise Security v7.2.0. For more information, see {3}.":
      "Enrichment Typesフィールドで、{0}、{1}、{2}を選択します。このエンリッチメントにより、取り込むnotable eventに関連するアセット、ドリルダウン、アイデンティティの追加情報が提供されます。複数のドリルダウン検索のエンリッチメントは、Enterprise Security v7.2.0以降でサポートされています。詳細については、{3}を参照してください。",
    "Keep the {0} as-is, since we use the `notable` macro when ingesting Finding events. You can create a more granular search by specifying specific conditions, for example specific security domain or event ID.":
      "Finding eventの取り込み時には `notable` マクロを使用するため、{0}はそのままにしてください。特定のセキュリティドメインやイベントIDなど、特定の条件を指定して、より詳細な検索を作成できます。",
    "Keep the default values for the Finding {0} and {1}.":
      "Findingの{0}と{1}は、デフォルト値のままにしてください。",
    "Leave {0} at {1} unless you have been given a dedicated endpoint.":
      "専用のエンドポイントが提供されている場合を除き、{0}は{1}のままにしてください。",
    "Locate the Mimecast API 2.0 tile and select {0}.":
      "Mimecast API 2.0タイルを探し、{0}を選択します。",
    "Log in to your ServiceNow instance and create an endpoint for Cortex to access your instance (see {0} for more information).":
      "ServiceNowインスタンスにログインし、Cortexがインスタンスにアクセスするためのエンドポイントを作成します(詳細については{0}を参照)。",
    "Make sure you have provided the Client ID and Client Secret, and that the BaseUrl is set to {0}.":
      "クライアントIDとクライアントシークレットを指定し、BaseUrlが{0}に設定されていることを確認してください。",
    "Notice: Submitting indicators using the {0} command of this integration might make the indicator data publicly available. See the vendor’s documentation for more details.":
      "注意: このインテグレーションの{0}コマンドを使用してインジケーターを送信すると、インジケーターのデータが公開される可能性があります。詳細については、ベンダーのドキュメントを参照してください。",
    "Optional: Check the {0} integration parameter to close the Cortex incident when the corresponding finding is closed on the Splunk side. By default, only Findings closed with a “Closed” label will be mirrored. You can specify specific statuses (comma-separated) in the {1}, and enable the {2} option to add statuses marked as “End Status” in Splunk, and to add additional statuses to the mirroring process.":
      "オプション: Splunk側で対応するfindingがクローズされたときにCortexインシデントをクローズするには、{0}インテグレーションパラメーターをオンにします。デフォルトでは、「Closed」ラベルでクローズされたFindingのみがミラーリングされます。{1}に特定のステータス(カンマ区切り)を指定できます。また、{2}オプションを有効にすると、Splunkで「End Status」とマークされたステータスや追加のステータスをミラーリング処理に追加できます。",
    "Optional: Check the {0} integration parameter to close the Cortex incident when the corresponding notable is closed on the Splunk side. By default, only Notables closed with a “Closed” label will be mirrored. You can specify specific statuses (comma-separated) in the {1}, and enable the {2} option to add statuses marked as “End Status” in Splunk, and to add additional statuses to the mirroring process.":
      "オプション: Splunk側で対応するnotableがクローズされたときにCortexインシデントをクローズするには、{0}インテグレーションパラメーターをオンにします。デフォルトでは、「Closed」ラベルでクローズされたNotableのみがミラーリングされます。{1}に特定のステータス(カンマ区切り)を指定できます。また、{2}オプションを有効にすると、Splunkで「End Status」とマークされたステータスや追加のステータスをミラーリング処理に追加できます。",
    "Optional: Check the {0} integration parameter to close the Splunk finding when the corresponding Cortex incident is closed. {1}":
      "オプション: 対応するCortexインシデントがクローズされたときにSplunkのfindingをクローズするには、{0}インテグレーションパラメーターをオンにします。{1}",
    "Optional: Check the {0} integration parameter to close the Splunk notable when the corresponding Cortex incident is closed.":
      "オプション: 対応するCortexインシデントがクローズされたときにSplunkのnotableをクローズするには、{0}インテグレーションパラメーターをオンにします。",
    "The drilldown search does not support Splunk’s advanced syntax. For example: Splunk filters ({0}, {1}, etc.)":
      "ドリルダウン検索は、Splunkの高度な構文をサポートしていません。例: Splunkフィルター({0}、{1}など)",
    "The grant type used to get an access token is {0}. See the {1} for more information.":
      "アクセストークンの取得に使用される付与タイプは{0}です。詳細については、{1}を参照してください。",
    "The integration allows for fetching Splunk {0} and {1} events using default queries. The queries can be changed and modified to support different Splunk use cases.":
      "このインテグレーションでは、デフォルトのクエリを使用して、Splunkの{0}イベントと{1}イベントをフェッチできます。クエリは、Splunkのさまざまなユースケースに対応するように変更・編集できます。",
    "The integration sends data to TypeSafe’s hosted API. Review your organization’s data-handling requirements before including incident evidence, personal data, credentials, or other sensitive content in {0}.":
      "このインテグレーションは、TypeSafeのホスト型APIにデータを送信します。インシデントのエビデンス、個人データ、認証情報、その他の機密性の高いコンテンツを{0}に含める前に、組織のデータ取り扱い要件を確認してください。",
    "These instructions explain how to build a query, which you can use as the value for the {0} argument. You can use this argument in the {1} and {2} commands.":
      "これらの手順では、{0}引数の値として使用できるクエリの作成方法を説明します。この引数は、{1}コマンドと{2}コマンドで使用できます。",
    "This integration only reads data (company findings, supplier findings, and the supplier list) - it never creates, updates, or deletes anything in Panorays. The read-only {0} role is sufficient for both {1} and {2} scopes, including reading across your entire supplier portfolio.":
      "このインテグレーションはデータの読み取りのみを行い(企業の検出結果、サプライヤーの検出結果、サプライヤーリスト)、Panoraysでは何も作成、更新、削除しません。読み取り専用の{0}ロールで、サプライヤーポートフォリオ全体の読み取りを含め、{1}と{2}の両方のスコープに対応できます。",
    "This integration uses {0}.":
      "このインテグレーションでは、{0}を使用します。",
    "To export the query, click the {0} button.":
      "クエリをエクスポートするには、{0}ボタンをクリックします。",
    "To use API 2.0, you need to generate a {0} and {1} from the Mimecast admin console:":
      "API 2.0を使用するには、Mimecast管理コンソールから{0}と{1}を生成する必要があります:",
    "To use this integration you need a RelayShield API key. RelayShield authenticates every request with a single API key sent in the {0} header. There are no OAuth flows, tenant IDs, or additional permissions to grant.":
      "このインテグレーションを使用するには、RelayShield APIキーが必要です。RelayShieldは、すべてのリクエストを、{0}ヘッダーで送信される単一のAPIキーで認証します。OAuthフロー、テナントID、付与が必要な追加の権限はありません。",
    "Type the {0} and {1}.":
      "{0}と{1}を入力します。",
    "Under Classifier, select {0}. The classifier routes Finding events to the {1} incident type and Investigation events to the {2} incident type.":
      "Classifierで、{0}を選択します。このClassifierは、Findingイベントを{1}インシデントタイプに、Investigationイベントを{2}インシデントタイプにルーティングします。",
    "Under Mapper (incoming), select {0}.":
      "Mapper (incoming)で、{0}を選択します。",
    "Under Mapper (outgoing), select {0}.":
      "Mapper (outgoing)で、{0}を選択します。",
    "Visit {0}.":
      "{0}にアクセスします。",
    "When running the {0} command, a refresh token is generated and will be used to produce new access tokens after the current access token has expired.":
      "{0}コマンドを実行すると、リフレッシュトークンが生成され、現在のアクセストークンの有効期限が切れた後に新しいアクセストークンを生成するために使用されます。",
    "Will need to change the {0} integration parameter to the following query (or a fetch query of their own that uses the `notable` macro):":
      "{0}インテグレーションパラメーターを、次のクエリ(または `notable` マクロを使用する独自のフェッチクエリ)に変更する必要があります:",
    "You can go to the {0} parameter and select the query to fetch the findings from Splunk. Make sure to provide a query which uses the `notable` macro, See the default query as an example.":
      "{0}パラメーターに移動して、Splunkからfindingをフェッチするクエリを選択できます。`notable` マクロを使用するクエリを必ず指定してください。デフォルトのクエリを例として参照してください。",
    "You can go to the {0} parameter and select the query to fetch the notables from Splunk. Make sure to provide a query which uses the `notable` macro, See the default query as an example.":
      "{0}パラメーターに移動して、Splunkからnotableをフェッチするクエリを選択できます。`notable` マクロを使用するクエリを必ず指定してください。デフォルトのクエリを例として参照してください。",
    "API Access Policy should be configured as global in order to cover all available resources and not just now/table":
      "APIアクセスポリシーは、now/tableだけでなく利用可能なすべてのリソースを対象にするため、グローバルとして構成する必要があります",
    "Findings scope":
      "Findingのスコープ",
    "Select Add Site License.":
      "Add Site Licenseを選択します。",
    "Select the Assets > Site Licenses tab.":
      "Assets > Site Licensesタブを選択します。",
    "Select the Enable action in Site Licenses.":
      "Site Licensesの[Enable]アクションを選択します。",
    "The BotJID in the Chat subscription section on the Features page of your App Dashboard.":
      "App DashboardのFeaturesページにあるChat subscriptionセクションのBotJID。",
    "Zoom Integration":
      "Zoomインテグレーション",

    // --- Batch: Integration docs, parameter labels, tooltips and table descriptions (06:04 export, Collector 0.2.0 full re-collection) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    "Manual Mode":
      "手動モード",
    "(For Cortex) For use with HTTPS - the certificate that the service should use. (For Cortex and Cortex XSIAM) Custom certificates are not supported.":
      "(Cortexの場合) HTTPSで使用します。サービスが使用する証明書です。(CortexおよびCortex XSIAMの場合) カスタム証明書はサポートされていません。",
    "(For Cortex) For use with HTTPS - the private key that the service should use. <br> (For Cortex and Cortex XSIAM) When using an engine, configure a private API key. Not supported on the Cortex 8 or Cortex XSIAM server.":
      "(Cortexの場合) HTTPSで使用します。サービスが使用する秘密鍵です。<br> (CortexおよびCortex XSIAMの場合) エンジンを使用する場合は、プライベートAPIキーを構成してください。Cortex 8またはCortex XSIAMサーバーではサポートされていません。",
    "(Optional: Add additional request headers in the field “Additional request headers” as key:value pairs, one request header per line)":
      "(オプション: 「Additional request headers」フィールドに、キーと値のペア(key:value)として追加のリクエストヘッダーを追加します。1行につき1つのリクエストヘッダーを指定します)",
    "(Optional: If you want incidents to be created automatically out of the retrieved data, activate the checkbox “Fetches issues” in the “Collect” section of the setup)":
      "(オプション: 取得したデータからインシデントを自動的に作成する場合は、セットアップの「Collect」セクションで「Fetches issues」チェックボックスを有効にします)",
    "A comma-separated list of AWS Organization accounts to use when running EC2 commands. A role name for cross-organization account access must be provided to use this feature.":
      "EC2コマンドの実行時に使用するAWS Organizationアカウントのカンマ区切りリストです。この機能を使用するには、組織間アカウントアクセス用のロール名を指定する必要があります。",
    "A successful API call returns status=“success” along with the API key within the key element:":
      "API呼び出しが成功すると、key要素内のAPIキーとともにstatus=“success”が返されます:",
    "Access Type (Impersonation is deprecated as of February 2025)":
      "アクセスタイプ(Impersonationは2025年2月以降非推奨です)",
    "Additional request headers":
      "追加のリクエストヘッダー",
    "After providing the mandatory details, click Test* to test the configuration.":
      "必須の詳細を入力したら、Test*をクリックして構成をテストします。",
    "After this time the connection pool will be refreshed":
      "この時間が経過すると、接続プールが更新されます",
    "AIOps Authentication:":
      "AIOps認証:",
    "And one of the following:":
      "および次のいずれか:",
    "ANY.RUN API-KEY without prefix":
      "プレフィックスなしのANY.RUN API-KEY",
    "API Base URL":
      "API基本URL",
    "API URL":
      "API URL",
    "Authentication method available:":
      "利用可能な認証方法:",
    "Authentication methods configuration:":
      "認証方法の構成:",
    "Authorize the API client for the required scopes. You use these scopes in the POST request to the /oauth/token endpoint. The Required Scopes are:":
      "必要なスコープに対してAPIクライアントを承認します。これらのスコープは、/oauth/tokenエンドポイントへのPOSTリクエストで使用します。必須スコープは次のとおりです:",
    "Available options:":
      "利用可能なオプション:",
    "AWS Default Region":
      "AWSデフォルトリージョン",
    "AWS organization accounts":
      "AWS Organizationアカウント",
    "Base domain for the ANY.RUN connection. By default, the domain is any.run.":
      "ANY.RUN接続のベースドメインです。デフォルトでは、ドメインはany.runです。",
    "Base domain for the ANY.RUN connection. Enter only the domain (e.g. any.run), without a scheme or trailing slash.":
      "ANY.RUN接続のベースドメインです。スキームや末尾のスラッシュを付けず、ドメインのみを入力してください(例: any.run)。",
    "Before configuring this integration, you need:":
      "このインテグレーションを構成する前に、次のものが必要です:",
    "Bot Type Converted to Single-Tenant":
      "シングルテナントに変換されたボットタイプ",
    "Broker CA certificates":
      "Broker CA証明書",
    "Broker CA certificates (‘brokercerts.crt’ file)":
      "Broker CA証明書(‘brokercerts.crt’ファイル)",
    "Broker CA certificates content (see `brokercerts.crt` in Integration Tips)":
      "Broker CA証明書の内容(インテグレーションのヒントの`brokercerts.crt`を参照)",
    "Broker list properties file (‘brokerlist.properties’ file)":
      "Brokerリストプロパティファイル(‘brokerlist.properties’ファイル)",
    "Broker URLs":
      "Broker URL",
    "Cache 404 TTL":
      "404キャッシュのTTL",
    "Cache Default TTL":
      "デフォルトのキャッシュTTL",
    "Caps the number of Darkmon records ingested as incidents per fetch cycle to protect the war room from sudden backlogs.":
      "フェッチサイクルごとにインシデントとして取り込まれるDarkmonレコードの数に上限を設け、突発的なバックログからWarroomを保護します。",
    "Choose the instance configuration base URL based on the server location:":
      "サーバーの場所に基づいて、インスタンス構成のベースURLを選択します:",
    "Choose the tag to add to an entry to mirror it as a comment in Jira.":
      "エントリをJiraのコメントとしてミラーリングするために、エントリに追加するタグを選択します。",
    "Choose the tag to add to an entry to mirror it as an attachment in Jira.":
      "エントリをJiraの添付ファイルとしてミラーリングするために、エントリに追加するタグを選択します。",
    "Ciphers":
      "暗号スイート",
    "Clear, Deep, and Dark Web - tailored to your assets.":
      "クリアWeb、ディープWeb、ダークWeb。お客様のアセットに合わせて調整されます。",
    "Click “Add API Client”.":
      "“Add API Client”をクリックします。",
    "Click “Save”.":
      "“Save”をクリックします。",
    "Click on “CONNECT CORTEX XSOAR”":
      "“CONNECT CORTEX XSOAR”をクリックします",
    "Configure a SpecterOps BloodHound Enterprise integration instance by providing the following mandatory details:":
      "次の必須の詳細を入力して、SpecterOps BloodHound Enterpriseのインテグレーションインスタンスを構成します:",
    "Configure the instance by providing following mandatory details:":
      "次の必須の詳細を入力して、インスタンスを構成します:",
    "Confirm that the pre-filled URL matches the correct API endpoint for your Anomali ThreatStream instance.":
      "事前入力されたURLが、Anomali ThreatStreamインスタンスの正しいAPIエンドポイントと一致していることを確認します。",
    "Connect to an OAuth provider and create an OAuth application registry by accessing All→System OAuth→Application Registry:":
      "OAuthプロバイダーに接続し、All→System OAuth→Application Registryにアクセスして、OAuthアプリケーションレジストリを作成します:",
    "Content metadata":
      "コンテンツメタデータ",
    "Cortex version 6.0.0 and below:":
      "Cortexバージョン6.0.0以前:",
    "Create an account in Prisma SASE UI:":
      "Prisma SASE UIでアカウントを作成します:",
    "Create user if does not exist":
      "ユーザーが存在しない場合は作成",
    "Darkmon incident types to fetch":
      "フェッチするDarkmonインシデントタイプ",
    "Deprecation Note:":
      "非推奨に関する注意:",
    "Developer Contributed Integration":
      "開発者提供の統合",
    "Device group - Panorama instances only (write shared for Shared location)":
      "デバイスグループ - Panoramaインスタンスのみ(共有の場所の場合は shared と入力)",
    "Domain (used in Multi Domain Server)":
      "ドメイン(Multi Domain Serverで使用)",
    "DOMAIN\\USERNAME (e.g. DEMISTO.INT\\admin)":
      "DOMAIN\\USERNAME(例: DEMISTO.INT\\admin)",
    "Each enriched incident contains the following fields in the incident context:":
      "拡充された各インシデントのインシデントコンテキストには、次のフィールドが含まれます:",
    "Enable the “Allow Multiple Logins” checkbox for the relevant user.":
      "該当するユーザーの“Allow Multiple Logins”チェックボックスを有効にします。",
    "Enable to automatically tag indicators with Analyst1 entity type classifications (e.g., \"Analyst1: Indicator\", \"Analyst1: Asset\", \"Analyst1: In Private Range\"). Tags help identify how Analyst1 classifies each indicator.":
      "Analyst1のエンティティタイプ分類(例: \"Analyst1: Indicator\"、\"Analyst1: Asset\"、\"Analyst1: In Private Range\")でインジケーターに自動的にタグを付けるには、有効にします。タグは、Analyst1が各インジケーターをどのように分類しているかを把握するのに役立ちます。",
    "Exchange Server Hostname or IP address":
      "Exchange Serverのホスト名またはIPアドレス",
    "Exchange Server Version (On-Premise only. Supported versions: 2007, 2010, 2010_SP2, 2013, 2013_SP1, 2016, and 2019)":
      "Exchange Serverのバージョン(オンプレミスのみ。サポートされるバージョン: 2007、2010、2010_SP2、2013、2013_SP1、2016、2019)",
    "Fetch attachments for a Jira ticket.":
      "Jiraチケットの添付ファイルをフェッチします。",
    "Fetch comments for a Jira ticket.":
      "Jiraチケットのコメントをフェッチします。",
    "Fetch incidents only for devices with the device families selected":
      "選択したデバイスファミリーのデバイスについてのみ、インシデントをフェッチします",
    "Fetch incidents only for devices with the tags selected":
      "選択したタグが付いたデバイスについてのみ、インシデントをフェッチします",
    "Fetch incidents:":
      "インシデントのフェッチ:",
    "Fetch Incidents:":
      "インシデントのフェッチ:",
    "Filter the Detections by “Create Incidents for Prioritized Detections”, “Create Incidents for Escalated Detections”:":
      "“Create Incidents for Prioritized Detections”、“Create Incidents for Escalated Detections”で検出結果をフィルタリングします:",
    "Finding Environment":
      "検出環境",
    "First fetch query time range when starting from a clean state. Accepts ISO timestamps or relative durations (e.g. \"3 days\", \"12 hours\").":
      "クリーンな状態から開始する場合の最初のフェッチのクエリ時間範囲です。ISOタイムスタンプまたは相対的な期間(例: \"3 days\"、\"12 hours\")を指定できます。",
    "Following new fields are introduced in the response of the incident to enable the mirroring:":
      "ミラーリングを有効にするため、インシデントのレスポンスに次の新しいフィールドが追加されています:",
    "For detailed instructions, refer to the official Splunk documentation:":
      "詳細な手順については、Splunkの公式ドキュメントを参照してください:",
    "For example:":
      "例:",
    "For the OAuth method:":
      "OAuth方式の場合:",
    "For the URL argument, take a look here:":
      "URL引数については、こちらを参照してください:",
    "For VMware Carbon Black EDR:":
      "VMware Carbon Black EDRの場合:",
    "For VMware Carbon Black Endpoint Standard:":
      "VMware Carbon Black Endpoint Standardの場合:",
    "Format: server.analyst1.com (do not include http:// or https://)":
      "形式: server.analyst1.com(http:// または https:// は含めないでください)",
    "Gather additional information about the threat model from remote APIs.":
      "リモートAPIから脅威モデルに関する追加情報を収集します。",
    "Generate API token":
      "APIトークンの生成",
    "Get an API key":
      "APIキーの取得",
    "Go to classifier":
      "分類子に移動",
    "Go to incoming mapper":
      "受信マッパーに移動",
    "If MFA is enabled for your user, follow the next steps:":
      "ユーザーに対してMFAが有効になっている場合は、次の手順に従います:",
    "If MFA is enabled for your user, perform the following steps:":
      "ユーザーに対してMFAが有効になっている場合は、次の手順を実行します:",
    "If set to false, iam-create-user command will be skipped, and user will not be created.":
      "false に設定すると、iam-create-user コマンドはスキップされ、ユーザーは作成されません。",
    "If the connection test was successful, click “Save & Exit”":
      "接続テストが成功した場合は、“保存して終了”をクリックします",
    "If this parameter is given, the commands will run with the UPN mailbox instead of the default target mailbox.":
      "このパラメーターを指定すると、コマンドはデフォルトのターゲットメールボックスではなく、UPNのメールボックスで実行されます。",
    "If true, the user is created if the user profile doesn't exist in AD. Used in IAM commands only.":
      "true の場合、ADにユーザープロファイルが存在しないときにユーザーが作成されます。IAMコマンドでのみ使用されます。",
    "In order to connect to Microsoft Graph Services using either Cortex Azure App or the Self-Deployed Azure App:":
      "Cortex Azure AppまたはSelf-Deployed Azure Appを使用してMicrosoft Graph Servicesに接続するには:",
    "In order to create an instance of the Microsoft Teams Webhook in Cortex, complete the following:":
      "CortexでMicrosoft Teams Webhookのインスタンスを作成するには、次の手順を実行します:",
    "In order to create the API Key go to:":
      "APIキーを作成するには、次に移動します:",
    "In order to use multiple values for the same filter and get alerts that have one of the values, state them several time, for example:":
      "同じフィルターに複数の値を使用し、いずれかの値に一致するアラートを取得するには、値を複数回指定します。例:",
    "In Terraform Enterprise:":
      "Terraform Enterpriseでの操作:",
    "In the Azure Application you created give the following application permission:":
      "作成したAzureアプリケーションに、次のアプリケーション権限を付与します:",
    "In the Cortex Xsoar configuration window:":
      "Cortex Xsoarの構成ウィンドウで:",
    "In the Silent Push Profile menu, click Organization, and go to the API tab.":
      "Silent PushのProfileメニューで、Organizationをクリックし、API タブに移動します。",
    "Joe Security Url":
      "Joe SecurityのURL",
    "Log in to your Zoom admin user account, and follow these steps:":
      "Zoomの管理者ユーザーアカウントにログインし、次の手順に従います:",
    "Make sure you have the following parameters:":
      "次のパラメーターがあることを確認してください:",
    "Max concurrent command calls":
      "コマンド呼び出しの最大同時実行数",
    "Max. Polling Time (in seconds):":
      "最大ポーリング時間(秒):",
    "Maximum number of incidents per fetch. The default value is 200.":
      "1回のフェッチあたりのインシデントの最大数。デフォルト値は200です。",
    "More information about National clouds can be found here - https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud":
      "ナショナルクラウドの詳細については、こちらを参照してください - https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud",
    "Navigate to one of the following:":
      "次のいずれかに移動します:",
    "Navigate to User Settings. (Vertical ellipsis available on the top right corner).":
      "User Settingsに移動します(右上の縦の省略記号から開けます)。",
    "Next, you need to extract the private.key. You can do this using the following commands:":
      "次に、private.key を抽出する必要があります。これは次のコマンドで実行できます:",
    "NGINX Global Directives":
      "NGINXのグローバルディレクティブ",
    "NGINX global directives to be passed on the command line using the -g option. Each directive should end with `;`. For example: `worker_processes 4; timer_resolution 100ms;`. Advanced configuration to be used only if instructed by Cortex Support.":
      "コマンドラインで -g オプションを使用して渡すNGINXのグローバルディレクティブです。各ディレクティブは `;` で終了する必要があります。例: `worker_processes 4; timer_resolution 100ms;`。高度な構成であり、Cortexサポートから指示があった場合にのみ使用してください。",
    "NGINX Read Timeout":
      "NGINXの読み取りタイムアウト",
    "NGINX Server Conf":
      "NGINXサーバー構成",
    "NGINX server configuration to be used instead of the default NGINX_SERVER_CONF used in the integration code. Advanced configuration to be used only if instructed by Cortex Support.":
      "統合のコードで使用されるデフォルトの NGINX_SERVER_CONF の代わりに使用するNGINXサーバー構成です。高度な構成であり、Cortexサポートから指示があった場合にのみ使用してください。",
    "NGNIX read timeout in seconds.":
      "NGINXの読み取りタイムアウト(秒)です。",
    "NTLM authentication":
      "NTLM認証",
    "OAuth2 Client Credentials":
      "OAuth2クライアント認証情報",
    "Override Authentication Type (NTLM, Basic, or Digest).":
      "認証タイプを上書きします(NTLM、Basic、またはDigest)。",
    "Override the Darkmon TIP API base URL only if your tenant points at a non-default endpoint. The default value already targets the production Darkmon TIP service (https://api.darkmon.com/tip/2025.1). Leave blank to use the default.":
      "テナントがデフォルト以外のエンドポイントを指している場合にのみ、Darkmon TIP APIのベースURLを上書きします。デフォルト値は、本番環境のDarkmon TIPサービス(https://api.darkmon.com/tip/2025.1)をすでに対象としています。デフォルトを使用する場合は空白のままにします。",
    "Panorama / Pan-OS Authentication:":
      "Panorama / Pan-OS認証:",
    "Panorama: Configure a device group":
      "Panorama: デバイスグループを設定する",
    "Paste the API key into the settings of this integration in the field “API Key”":
      "APIキーを、このインテグレーションの設定の「API Key」フィールドに貼り付けます。",
    "Port is optional (e.g https://sonar.example.com:9000)":
      "ポートは省略可能です(例: https://sonar.example.com:9000)",
    "Post to a channel when a webhook request is received":
      "Webhookリクエストを受信したときにチャンネルに投稿します",
    "PrivateLink service URL.":
      "PrivateLinkサービスのURL。",
    "Product version id":
      "製品バージョンID",
    "Product versions name":
      "製品バージョン名",
    "Production vs development":
      "本番環境と開発環境の違い",
    "Products id":
      "製品ID",
    "Products name":
      "製品名",
    "Public Folder":
      "パブリックフォルダー",
    "Redact secrets in War Room output":
      "War Roomの出力内のシークレットを編集して非表示にする",
    "Required Permissions:":
      "必要な権限:",
    "Requited. Not relevant for deprecated GSuite Apps setup - see Help section":
      "必須です。非推奨のGSuite Appsセットアップには関係ありません。ヘルプセクションを参照してください。",
    "Result name":
      "結果名",
    "Result short name":
      "結果の短縮名",
    "Result vendor url (only human readable)":
      "結果のベンダーURL(人が読める形式のみ)",
    "Retries":
      "リトライ回数",
    "Role name for cross-organization account access":
      "組織間アカウントアクセス用のロール名",
    "Role Session Duration":
      "ロールセッションの期間",
    "Run as a separate process (protects against memory depletion)":
      "別のプロセスとして実行する(メモリ枯渇を防止します)",
    "Search query for fetching alerts. The default fetch query is \"alert\".":
      "アラートをフェッチするための検索クエリです。デフォルトのフェッチクエリは \"alert\" です。",
    "Select Fetches incidents.":
      "[Fetches incidents]を選択します。",
    "Select how to authenticate with the Analyst1 API. Basic Authentication uses username/password. OAuth2 uses client_id/client_secret from an API Key.":
      "Analyst1 APIの認証方法を選択します。Basic認証ではユーザー名とパスワードを使用します。OAuth2ではAPIキーのclient_idとclient_secretを使用します。",
    "Select the authentication method.":
      "認証方法を選択します。",
    "Select the Incident Mirroring Direction:":
      "インシデントのミラーリング方向を選択します:",
    "Select this checkbox if you are using a US Government cloud account.":
      "米国政府機関向けクラウドアカウントを使用している場合は、このチェックボックスをオンにします。",
    "Server port. If not specified, the default port is 389 for LDAP, 636 for LDAPS, or 3268 for global catalog servers.":
      "サーバーポート。指定しない場合、デフォルトのポートはLDAPが389、LDAPSが636、グローバルカタログサーバーが3268です。",
    "SSL Version":
      "SSLバージョン",
    "Start fetching incidents from the specified time.":
      "指定した時刻からインシデントのフェッチを開始します。",
    "STS PrivateLink URL.":
      "STS PrivateLinkのURL。",
    "STS Region":
      "STSリージョン",
    "Supported authentication methods:":
      "サポートされている認証方法:",
    "The account identifier can be found using the user blade at the bottom left. Hover over the account you wish to onboard and select the copy option at the top right.":
      "アカウントIDは、左下のユーザーブレードで確認できます。オンボードするアカウントにカーソルを合わせ、右上のコピーオプションを選択します。",
    "The account identifier is usually of the format: [organization].[account]":
      "アカウントIDは通常、[organization].[account]の形式です。",
    "The API key must be entitled to the endpoints backing the commands you intend to run:":
      "APIキーには、実行するコマンドの基盤となるエンドポイントへの権限が付与されている必要があります:",
    "The AWS region used to create the STS client. Set this explicitly when STS calls must target a fixed region regardless of the command's target region.":
      "STSクライアントの作成に使用するAWSリージョンです。コマンドの対象リージョンに関係なく、STS呼び出しを特定のリージョンに向ける必要がある場合は、明示的に設定します。",
    "The base URL. For a cloud instance, use the default URL as configured. For an OnPrem instance, use your respective domain.":
      "ベースURLです。クラウドインスタンスの場合は、設定されているデフォルトのURLを使用します。オンプレミスインスタンスの場合は、それぞれのドメインを使用します。",
    "The default Kibana space ID to use for es-kibana-* commands. Used to derive the Kibana base URL from the Server URL. If a space_id argument is provided to a command, it overrides this value. See https://www.elastic.co/docs/deploy-manage/manage-spaces for more information.":
      "es-kibana-*コマンドで使用するデフォルトのKibanaスペースIDです。サーバーURLからKibanaのベースURLを導出するために使用されます。コマンドにspace_id引数が指定された場合は、この値が上書きされます。詳細については、https://www.elastic.co/docs/deploy-manage/manage-spaces を参照してください。",
    "The default TTL for responses in the cache.":
      "キャッシュ内のレスポンスのデフォルトTTLです。",
    "The field selected in the \"Issue Field to fetch by\" can't be used in the query.":
      "\"Issue Field to fetch by\"で選択したフィールドは、クエリで使用できません。",
    "The following are the required managed modules for this integration:":
      "このインテグレーションに必要なマネージドモジュールは次のとおりです:",
    "The following commands require the API access to be configured:":
      "次のコマンドを使用するには、APIアクセスを設定する必要があります:",
    "The following commands require the SSH access to be configured:":
      "次のコマンドを使用するには、SSHアクセスを設定する必要があります:",
    "The following scopes are required for the Okta v2 integration to work properly:":
      "Okta v2インテグレーションを正常に動作させるには、次のスコープが必要です:",
    "The incidents are fetched according to a number of different optional log type queries. The log types are:":
      "インシデントは、複数の任意のログタイプクエリに従ってフェッチされます。ログタイプは次のとおりです:",
    "The integration supports three types of authorization:":
      "このインテグレーションは、3種類の認可をサポートしています:",
    "The integration supports two types of authorization:":
      "このインテグレーションは、2種類の認可をサポートしています:",
    "The integration uses the supplied username and password to obtain a bearer token from Elasticsearch via the Get token API. Before using Bearer Authentication, ensure the token service is enabled on your Elasticsearch cluster:":
      "このインテグレーションは、指定されたユーザー名とパスワードを使用して、Get token APIによりElasticsearchからベアラートークンを取得します。Bearer認証を使用する前に、Elasticsearchクラスターでトークンサービスが有効になっていることを確認してください:",
    "The Kibana server used by the es-kibana-* commands and by fetching and mirroring security alerts and cases. Required for on-premises (self-managed) deployments, where Kibana is usually hosted separately from Elasticsearch (for example, https://kibana.example.com:5601). If left empty, the Kibana URL is derived from the Server URL, which is supported only for Elastic Cloud deployments whose hostname contains \".es.\" (the segment is replaced with \".kb.\").":
      "es-kibana-*コマンド、およびセキュリティアラートとケースのフェッチおよびミラーリングで使用するKibanaサーバーです。Kibanaが通常Elasticsearchとは別にホストされるオンプレミス(セルフマネージド)環境では必須です(例: https://kibana.example.com:5601)。空の場合、KibanaのURLはサーバーURLから導出されますが、これはホスト名に \".es.\" を含むElastic Cloudデプロイメントでのみサポートされます(この部分が \".kb.\" に置き換えられます)。",
    "The maximum allowed value is dictated by the Jira property 'jira.search.views.default.max'. If you specify a value that is higher than this number, your search results will be truncated. Default value is 50":
      "最大許容値は、Jiraプロパティ 'jira.search.views.default.max' によって決まります。この値より大きい値を指定すると、検索結果が切り捨てられます。デフォルト値は50です。",
    "The maximum number of concurrent calls to allow when running a command on all accounts provided in \"AWS Organization accounts to access\".":
      "\"AWS Organization accounts to access\"に指定したすべてのアカウントでコマンドを実行する際に許可される同時呼び出しの最大数です。",
    "The maximum number of retry attempts when connection or throttling errors are encountered. Set to 0 to disable retries. The default value is 5 and the limit is 10. Note: Increasing the number of retries will increase the execution time.":
      "接続エラーまたはスロットリングエラーが発生した場合の最大リトライ回数です。リトライを無効にするには0を設定します。デフォルト値は5、上限は10です。注: リトライ回数を増やすと、実行時間が長くなります。",
    "The parameter can be saved as 000-000 and added as an argument to each command, but Test button will fail.":
      "パラメーターは000-000として保存し、各コマンドの引数として追加できますが、Testボタンは失敗します。",
    "The parameter can be saved as 000-000 and added as an argument to each command.":
      "パラメーターは000-000として保存し、各コマンドの引数として追加できます。",
    "The role name used to access accounts in the organization. This role name must exist in the accounts provided in \"AWS Organization accounts\" and be assumable with the credentials provided.":
      "組織内のアカウントへのアクセスに使用するロール名です。このロール名は、\"AWS Organization accounts\"に指定したアカウントに存在し、指定した認証情報で引き受け可能である必要があります。",
    "The SSL\\TLS version to use in SSL or Start TLS connections types. Default is None. It is recommended to select the TLS_CLIENT option, which auto-negotiate the highest protocol version that both the client and server support, and configure the context client-side connections.":
      "SSLまたはStart TLS接続タイプで使用するSSL\\TLSバージョンです。デフォルトはNoneです。TLS_CLIENTオプションを選択することをお勧めします。このオプションは、クライアントとサーバーの両方がサポートする最も高いプロトコルバージョンを自動的にネゴシエートし、クライアント側接続のコンテキストを構成します。",
    "The time in seconds till a timeout exception is reached. You can specify just the read timeout (for example 60) or also the connect timeout followed after a comma (for example 60,10). If a connect timeout is not specified, a default of 10 second will be used.":
      "タイムアウト例外が発生するまでの時間(秒)です。読み取りタイムアウトのみ(例: 60)、またはカンマに続けて接続タイムアウトも(例: 60,10)指定できます。接続タイムアウトを指定しない場合は、デフォルトの10秒が使用されます。",
    "The time range to consider for the initial data fetch in format: <number> <unit>. This parameter is only relevant when selecting to fetch by created time, or updated time. Default is 3 days. For example: 2 minutes, 2 hours, 2 days, 2 months, 2 years":
      "初回のデータフェッチで対象とする時間範囲を、<number> <unit>の形式で指定します。このパラメーターは、作成時刻または更新時刻でフェッチする場合にのみ有効です。デフォルトは3日です。例: 2 minutes、2 hours、2 days、2 months、2 years",
    "The TTL for 404 responses in the cache.":
      "キャッシュ内の404レスポンスのTTLです。",
    "There are three ways to authenticate to the Microsoft Graph Services:":
      "Microsoft Graphサービスへの認証方法は3つあります。",
    "There is only one application authentication method available:":
      "使用できるアプリケーション認証方法は1つのみです。",
    "These parameters support the following integration commands:":
      "これらのパラメーターは、次のインテグレーションコマンドをサポートしています。",
    "This field is ignored if other required fields are not provided (for example both the access token and the private key).":
      "必須フィールドの一部が指定されていない場合(たとえば、アクセストークンと秘密鍵の両方)、このフィールドは無視されます。",
    "This field is used to configure the Jira Cloud.":
      "このフィールドは、Jira Cloudの設定に使用されます。",
    "This integration supports sending messages to additional Teams via a workflow. There are 2 methods for this:":
      "このインテグレーションは、ワークフローを介して追加のTeamsにメッセージを送信することをサポートしています。これには2つの方法があります。",
    "This integration supports three authentication methods:":
      "このインテグレーションは、3つの認証方法をサポートしています。",
    "This integration supports two authentication methods:":
      "このインテグレーションは、2つの認証方法をサポートしています。",
    "This is how the field (e.g, created date) is applied to the query: created >= {created date in last run} ORDER BY created ASC":
      "フィールド(例: 作成日)がクエリにどのように適用されるかを示します: created >= {created date in last run} ORDER BY created ASC",
    "This parameter is dismissed if \"id\" is not chosen in \"Issue Field to Fetch by\". This will only fetch Jira issues that are part of the same project as the issue that is configured in this parameter. If this value is 0, then the fetch mechanism will automatically start the fetch from the smallest ID with respect to the fetch query.":
      "このパラメーターは、「Issue Field to Fetch by」で「id」が選択されていない場合は無視されます。このパラメーターで設定された課題と同じプロジェクトに属するJira課題のみをフェッチします。この値が0の場合、フェッチメカニズムはフェッチクエリに基づいて最小のIDから自動的にフェッチを開始します。",
    "This parameter is dismissed while \"Use created field to fetch incidents\" is checked.":
      "「Use created field to fetch incidents」がオンの場合、このパラメーターは無視されます。",
    "This section explains how to configure the instance of ANY.RUN TI Lookup in Cortex.":
      "このセクションでは、CortexでANY.RUN TI Lookupのインスタンスを設定する方法を説明します。",
    "This token is used for both OAuth 1.0 and personal access token authentication methods.":
      "このトークンは、OAuth 1.0とパーソナルアクセストークンの両方の認証方法で使用されます。",
    "This will be in the following format: https://customer-portal.asimily.com.":
      "形式は次のようになります: https://customer-portal.asimily.com。",
    "TIM customers that upgraded to version 6.2 or above, can have this value pre-configured in their main account so no additional input is needed. To use this feature, upgrade your license so it includes the license key.":
      "バージョン6.2以降にアップグレードしたTIMのお客様は、この値をメインアカウントにあらかじめ設定できるため、追加の入力は不要です。この機能を使用するには、ライセンスキーが含まれるようにライセンスをアップグレードしてください。",
    "Timeout (in seconds) for HTTP requests to Exchange Server":
      "Exchange ServerへのHTTPリクエストのタイムアウト(秒)",
    "To configure the integration, you’ll need:":
      "インテグレーションを設定するには、次のものが必要です。",
    "To configure the integration:":
      "インテグレーションを設定するには:",
    "To configure this integration, you will need:":
      "このインテグレーションを設定するには、次のものが必要です。",
    "To connect to the Microsoft Defender XDR:":
      "Microsoft Defender XDRに接続するには:",
    "To create an API key in Kibana:":
      "KibanaでAPIキーを作成するには:",
    "To create an instance of the Microsoft Teams integration in Cortex, complete the following:":
      "CortexでMicrosoft Teamsインテグレーションのインスタンスを作成するには、次の手順を実行します。",
    "To enable asset fetching:":
      "アセットのフェッチを有効にするには:",
    "To fetch Vectra RUX Events Detections follow the next steps:":
      "Vectra RUX Events Detectionsをフェッチするには、次の手順に従います。",
    "To generate an API key, make a POST request to the firewall’s hostname or IP addresses using the administrative credentials and type=keygen:":
      "APIキーを生成するには、管理者の認証情報とtype=keygenを使用して、ファイアウォールのホスト名またはIPアドレスにPOSTリクエストを送信します。",
    "To generate the files needed for SSL, you will need to create a Kafka client keystore. You can use the script at:":
      "SSLに必要なファイルを生成するには、Kafkaクライアントキーストアを作成する必要があります。次の場所にあるスクリプトを使用できます。",
    "To get your Vectra Client ID and Client Secret Key, follow these steps:":
      "VectraのクライアントIDとクライアントシークレットキーを取得するには、次の手順に従います。",
    "To learn more about Zendesk roles refer to:":
      "Zendeskのロールの詳細については、次を参照してください。",
    "To obtain an API key, run the following CURL command and copy the key:":
      "APIキーを取得するには、次のCURLコマンドを実行してキーをコピーします。",
    "To reduce the number of lookups made to the AbuseIPDB API, this option can be selected to gracefully skip enrichment of any IP addresses allocated for private networks.":
      "AbuseIPDB APIへのルックアップ数を減らすため、このオプションを選択すると、プライベートネットワークに割り当てられたIPアドレスのエンリッチメントを正常にスキップできます。",
    "To set up mirroring:":
      "ミラーリングを設定するには:",
    "To use OAuth 2.0 authorization follow the next steps:":
      "OAuth 2.0認証を使用するには、次の手順に従います。",
    "To use OAuth 2.0 authorization perform the following steps:":
      "OAuth 2.0認証を使用するには、次の手順を実行します。",
    "To use Splunk token authentication, enter the text:":
      "Splunkトークン認証を使用するには、次のテキストを入力します。",
    "To use the mattermost integration:":
      "mattermostインテグレーションを使用するには:",
    "Troubleshooting: Override Agent (Advanced)":
      "トラブルシューティング: Override Agent(詳細設定)",
    "Two application authentication methods are available:":
      "2つのアプリケーション認証方法を使用できます。",
    "URL of the Hatching service will be either:":
      "HatchingサービスのURLは次のいずれかです。",
    "Use the \"API Token (Recommended)\" parameter instead.":
      "代わりに「API Token (Recommended)」パラメーターを使用してください。",
    "Use the Akamai WAF integration to manage common sets of lists used by various Akamai security products and features.":
      "Akamai WAFインテグレーションを使用して、さまざまなAkamaiセキュリティ製品や機能で使用される共通のリストセットを管理します。",
    "Use the following account credentials to get an access token:":
      "次のアカウント認証情報を使用してアクセストークンを取得します。",
    "Use the SplunkPy v2 integration to:":
      "SplunkPy v2インテグレーションを使用して、次のことを行います。",
    "Used in the IAM commands.":
      "IAMコマンドで使用されます。",
    "Used to impersonate a Google workspace user, so the spreadsheets is created in the associated Google Drive and is easily accessible from a UI. This parameter is used during the authentication process.":
      "Google Workspaceユーザーになりすますために使用されます。これにより、スプレッドシートが関連付けられたGoogleドライブに作成され、UIから簡単にアクセスできます。このパラメーターは認証プロセス中に使用されます。",
    "Users who wish to enrich or mirror fetched notables and have already used the integration in the past:":
      "これまでにインテグレーションを使用していて、フェッチされたnotableをエンリッチまたはミラーリングしたいユーザー:",
    "Verify base DN on every command":
      "コマンドごとにベースDNを検証する",
    "Version id":
      "バージョンID",
    "Version name":
      "バージョン名",
    "Vulnerability description (only human readable)":
      "脆弱性の説明(人間が読める形式のみ)",
    "Vulnerability discovery date":
      "脆弱性の発見日",
    "Vulnerability keywords":
      "脆弱性のキーワード",
    "Vulnerability published date":
      "脆弱性の公開日",
    "Vulnerability solution (only human readable)":
      "脆弱性の解決策(人間が読める形式のみ)",
    "Vulnerability solution date":
      "脆弱性の解決策の日付",
    "Vulnerability title (only human readable)":
      "脆弱性のタイトル(人間が読める形式のみ)",
    "What is the top level object to search in (usually a project or organization in format of organization/XX).":
      "検索対象の最上位オブジェクト(通常は、organization/XXの形式のプロジェクトまたは組織)。",
    "What you get":
      "提供される内容",
    "When enabled, replaces password/card-number values in markdown table output with '***'. Raw values remain in rawJSON for playbook automation. Disable only in non-production debugging contexts.":
      "有効にすると、Markdownテーブル出力内のパスワード/カード番号の値が '***' に置き換えられます。元の値は、Playbookの自動化のためにrawJSONに保持されます。本番環境以外のデバッグ時にのみ無効にしてください。",
    "Which Darkmon record kinds the integration ingests as XSOAR incidents. Defaults to the high-signal trio. Lower-signal kinds (e.g. Ransomware Mention) are typically better handled via the monitoring playbooks rather than native fetch.":
      "インテグレーションがXSOARインシデントとして取り込むDarkmonレコードの種類です。デフォルトでは、シグナルの強い上位3種類が対象です。シグナルの弱い種類(例: Ransomware Mention)は、ネイティブのフェッチよりも監視用Playbookで処理する方が一般的に適しています。",
    "XSOAR Verdict to set when Analyst1 Risk Score is \"Critical\".":
      "Analyst1 Risk Scoreが「Critical」の場合に設定するXSOARの判定です。",
    "XSOAR Verdict to set when Analyst1 Risk Score is \"High\".":
      "Analyst1 Risk Scoreが「High」の場合に設定するXSOARの判定です。",
    "XSOAR Verdict to set when Analyst1 Risk Score is \"Low\".":
      "Analyst1 Risk Scoreが「Low」の場合に設定するXSOARの判定です。",
    "XSOAR Verdict to set when Analyst1 Risk Score is \"Lowest\".":
      "Analyst1 Risk Scoreが「Lowest」の場合に設定するXSOARの判定です。",
    "XSOAR Verdict to set when Analyst1 Risk Score is \"Moderate\".":
      "Analyst1 Risk Scoreが「Moderate」の場合に設定するXSOARの判定です。",
    "XSOAR Verdict to set when Analyst1 Risk Score is \"Unknown\" or not present.":
      "Analyst1 Risk Scoreが「Unknown」または存在しない場合に設定するXSOARの判定です。",
    "BaseUrl - API url":
      "BaseUrl - APIのURL",
    "SPLUNK user key":
      "Splunkユーザーキー",
    "IP values related to the offense are returned from the API as ID values. Enable this parameter the IDs to IP values.":
      "オフェンスに関連するIP値は、APIからID値として返されます。このパラメーターを有効にすると、IDがIP値に変換されます。",

    // --- Batch: Integration docs as joined sentences (06:04 export, Collector 0.2.0 full re-collection) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    "(Optional) Add a {0}.":
      "(オプション){0}を追加します。",
    "(Optional) If no API token is displayed, click the {0} button to create a new one.":
      "(オプション)APIトークンが表示されていない場合は、{0}ボタンをクリックして新しいトークンを作成します。",
    "(Optional) Test the created integration instance by running the {0} command.":
      "(オプション){0}コマンドを実行して、作成したインテグレーションインスタンスをテストします。",
    "(Recommended) Enter the ServiceNow account {0} and {1} in the integration instance configuration. The integration will then automatically perform the initial OAuth login on first use and will automatically renew the refresh token when it expires.":
      "(推奨)インテグレーションインスタンスの設定に、ServiceNowアカウントの{0}と{1}を入力します。これにより、インテグレーションは初回使用時に初期OAuthログインを自動的に実行し、リフレッシュトークンの有効期限が切れると自動的に更新します。",
    "{0} - Available under PingOne Dashboard → Environment Properties.":
      "{0} - PingOneダッシュボード → Environment Propertiesで確認できます。",
    "{0} - Each Microsoft Graph Security alert is fetched individually.":
      "{0} - Microsoft Graph Securityの各アラートが個別にフェッチされます。",
    "{0} - Each Microsoft Graph Security incident is fetched individually, with all associated alerts embedded within it and stored as raw JSON. This provides a single grouped incident containing its underlying alerts, rather than multiple separate alerts.":
      "{0} - Microsoft Graph Securityの各インシデントが個別にフェッチされ、関連するすべてのアラートが埋め込まれた状態で生のJSONとして保存されます。これにより、複数の個別のアラートではなく、基になるアラートを含む1つのグループ化されたインシデントが提供されます。",
    "{0} - fully dynamic over every Darkmon data type, future-proof for new feature types added to the platform.":
      "{0} - Darkmonのあらゆるデータタイプに対して完全に動的で、プラットフォームに追加される新しい機能タイプにも将来にわたって対応できます。",
    "{0} - list protected emails and pull every leak associated with each.":
      "{0} - 保護対象のメールアドレスを一覧表示し、それぞれに関連するすべての漏洩情報を取得します。",
    "{0} - OAuth credentials for API access.":
      "{0} - APIアクセス用のOAuth認証情報。",
    "{0} - Select your PingOne region (US, EU, or Asia).":
      "{0} - PingOneのリージョン(US、EU、またはAsia)を選択します。",
    "{0} — NGFW or WildFire API.":
      "{0} — NGFWまたはWildFire API。",
    "{0} — Retrieve a paginated list of all CVEs monitored by ThreatMon.":
      "{0} — ThreatMonが監視しているすべてのCVEのページ分割された一覧を取得します。",
    "{0} — Retrieve CVEs affecting products the company is subscribed to.":
      "{0} — 企業がサブスクライブしている製品に影響するCVEを取得します。",
    "{0} — Submit a Black Market Monitoring data removal request for a specific finding.":
      "{0} — 特定の検出結果に対するBlack Market Monitoringのデータ削除リクエストを送信します。",
    "{0} — Submit a takedown request for an eligible Threatmon finding.":
      "{0} — 対象となるThreatmonの検出結果に対するテイクダウンリクエストを送信します。",
    "{0} — the base URL of the Tenzai API (e.g. {1}).":
      "{0} — Tenzai APIのベースURL(例: {1})。",
    "{0} — the Tenzai partner API key from the step above.":
      "{0} — 上記の手順で取得したTenzaiパートナーAPIキー。",
    "{0} — Update the status of a specific Threatmon incident using its unique ID.":
      "{0} — 一意のIDを使用して、特定のThreatmonインシデントのステータスを更新します。",
    "{0} — XSOAR TIM API Key.":
      "{0} — XSOAR TIM APIキー。",
    "{0} (articles + company-specific mentions).":
      "{0}(記事と企業固有の言及)。",
    "{0} (CVE feed with CVSS, exploitation status, source identifier).":
      "{0}(CVSS、悪用状況、ソース識別子を含むCVEフィード)。",
    "{0} (Recommended).":
      "{0}(推奨)。",
    "{0} always uses {1}. If {2} is configured. The integration will authenticate using {3} when the command is called. This should have no effect on other commands.":
      "{0}は常に{1}を使用します。{2}が設定されている場合。コマンドの呼び出し時、インテグレーションは{3}を使用して認証します。他のコマンドには影響しないはずです。",
    "{0} and {1}":
      "{0}と{1}",
    "{0} and {1}.":
      "{0}と{1}。",
    "{0} and follow the instructions to create an OAuth client":
      "{0}して、手順に従ってOAuthクライアントを作成します",
    "{0} and replace the {1} in the URL with {2}.":
      "{0}、URL内の{1}を{2}に置き換えます。",
    "{0} Choose the {1} for fetching attack paths (Default is 10 mins).":
      "{0} アタックパスをフェッチするための{1}を選択します(デフォルトは10分)。",
    "{0} discovery (leaked accounts, bank cards, combo lists, public breaches, compromised employee accounts).":
      "{0}の検出(漏洩したアカウント、銀行カード、コンボリスト、公開された侵害、侵害された従業員アカウント)。",
    "{0} Do not enable {1} on the same instance. Configure one instance for the long-running Spotlight fetch, and a separate instance for the regular assets fetch.":
      "{0}同じインスタンスで{1}を有効にしないでください。長時間実行されるSpotlightのフェッチ用に1つのインスタンスを、通常のアセットのフェッチ用に別のインスタンスを設定してください。",
    "{0} for IPs, domains, URLs, file hashes, and emails, with first-class {1} + {2} outputs.":
      "IP、ドメイン、URL、ファイルハッシュ、メールに対する{0}。{1} + {2}の出力にネイティブ対応しています。",
    "{0} For support, please contact the Threatmon team at: {1}":
      "{0} サポートが必要な場合は、Threatmonチームまでお問い合わせください: {1}",
    "{0} If you are using the integration to rasterize un-trusted URLs or HTML content, such as those obtained via external emails, we recommend following the instructions at the {1} or {2} or {3} under the Block Internal Network Access section.":
      "{0} 外部メールなどから取得した信頼できないURLやHTMLコンテンツをラスタライズするためにこのインテグレーションを使用する場合は、Block Internal Network Accessセクションにある{1}、{2}、または{3}の手順に従うことをお勧めします。",
    "{0} ingestion into Cortex Threat Intel Management.":
      "Cortex Threat Intel Managementへの{0}取り込み。",
    "{0} is deprecated. Use the {1}integration instead.":
      "{0}は非推奨です。代わりに{1}インテグレーションを使用してください。",
    "{0} Optionally, you can choose {1} type and use the {2} and {3} fields to enter the API key ID and API key.":
      "{0} 必要に応じて、{1}タイプを選択し、{2}フィールドと{3}フィールドにAPIキーIDとAPIキーを入力できます。",
    "{0} supports {1} only when retrieving messages from a channel. Retrieving messages from a chat requires {2}.":
      "{0}は、チャネルからメッセージを取得する場合にのみ{1}をサポートします。チャットからメッセージを取得するには{2}が必要です。",
    "{0} The {1} option is deprecated. No available replacement.":
      "{0} {1}オプションは非推奨です。代替はありません。",
    "{0} The {1} selection is ignored in this mode, and CNAPP Alerts are not collected. To collect CNAPP Alerts, use a separate instance with the regular assets fetch.":
      "{0} このモードでは{1}の選択は無視され、CNAPPアラートは収集されません。CNAPPアラートを収集するには、通常のアセットのフェッチを行う別のインスタンスを使用してください。",
    "{0} This is a beta Integration that has been deprecated. The Integration uses an unsupported scraping API. We do not recommend using this integration in production environments. Some commands may not work as expected. Use the {1} Integration instead.":
      "{0} これはベータ版のインテグレーションで、非推奨になっています。このインテグレーションはサポートされていないスクレイピングAPIを使用します。本番環境での使用は推奨しません。一部のコマンドが期待どおりに動作しない場合があります。代わりに{1}インテグレーションを使用してください。",
    "{0} to the service account - Deprecated. {1} permissions to the Exchange Server. {2} to the {3}.":
      "サービスアカウントへの{0} - 非推奨。Exchange Serverへの{1}権限。{2}(対象: {3})。",
    "{0}, {1}, {2} and {3}":
      "{0}、{1}、{2}、{3}",
    "{0}: a textual name for the integration instance.":
      "{0}: インテグレーションインスタンスのテキスト名。",
    "{0}: Access the Settings page from the top navigation bar.":
      "{0}: 上部のナビゲーションバーから設定ページにアクセスします。",
    "{0}: Active Prisma SASE account with Strata Cloud Manager access":
      "{0}: Strata Cloud Managerへのアクセス権を持つ有効なPrisma SASEアカウント",
    "{0}: By default, the integration retrieves all event detections across all entity types (Account and Host) and all detection statuses (Open, Acknowledged, Escalated, Paused). This includes both prioritized and non-prioritized detections.":
      "{0}: デフォルトでは、インテグレーションはすべてのエンティティタイプ(AccountおよびHost)とすべての検出ステータス(Open、Acknowledged、Escalated、Paused)にわたるすべてのイベント検出を取得します。これには、優先度の高い検出と優先度の低い検出の両方が含まれます。",
    "{0}: Choose specific indicator types to collect (IP, Domain, URL, File)":
      "{0}: 収集する特定のインジケータータイプ(IP、Domain、URL、File)を選択します",
    "{0}: Click the {1} button.":
      "{0}: {1}ボタンをクリックします。",
    "{0}: Configure the reliability level for feed context (default: A++ - Reputation script)":
      "{0}: フィードコンテキストの信頼性レベルを設定します(デフォルト: A++ - Reputation script)",
    "{0}: Configure the reliability level for threat intelligence context (default: A++ - Reputation script)":
      "{0}: 脅威インテリジェンスコンテキストの信頼性レベルを設定します(デフォルト: A++ - Reputation script)",
    "{0}: Create an OAuth2 client in Strata Cloud Manager with Prisma AIRS AI Red Teaming API permissions":
      "{0}: Strata Cloud Managerで、Prisma AIRS AI Red Teaming APIの権限を持つOAuth2クライアントを作成します",
    "{0}: Create an OAuth2 client in Strata Cloud Manager with Prisma AIRS AI Runtime Security API permissions":
      "{0}: Strata Cloud Managerで、Prisma AIRS AI Runtime Security APIの権限を持つOAuth2クライアントを作成します",
    "{0}: Create an OAuth2 client in Strata Cloud Manager with Prisma AIRS AI Supply Chain Security API permissions":
      "{0}: Strata Cloud Managerで、Prisma AIRS AI Supply Chain Security APIの権限を持つOAuth2クライアントを作成します",
    "{0}: Enable “Create Incidents for Escalated Detections” to retrieve all escalated detections, regardless of their priority level.":
      "{0}: “Create Incidents for Escalated Detections”を有効にすると、優先度に関係なくエスカレーションされたすべての検出を取得します。",
    "{0}: Enable “Create Incidents for Prioritized Detections” to filter out non-prioritized detections. Incidents will be created only for prioritized event detections.":
      "{0}: “Create Incidents for Prioritized Detections”を有効にすると、優先度の低い検出が除外されます。インシデントは、優先度の高いイベント検出に対してのみ作成されます。",
    "{0}: Enable automatic creation of indicators from relationships":
      "{0}: リレーションシップからのインジケーターの自動作成を有効にします",
    "{0}: Enable automatic creation of relationships between indicators and threat objects based on returned associations":
      "{0}: 返された関連付けに基づく、インジケーターと脅威オブジェクト間のリレーションシップの自動作成を有効にします",
    "{0}: Enable both “Create Incidents for Prioritized Detections” and “Create Incidents for Escalated Detections”. This configuration retrieves detections that are either prioritized or escalated.":
      "{0}: “Create Incidents for Prioritized Detections”と“Create Incidents for Escalated Detections”の両方を有効にします。この設定では、優先度が高い、またはエスカレーションされた検出を取得します。",
    "{0}: Fill in the {1} and {2} fields. An organization admin can create these from the {3} tab on the {4} page in Doppel Vision. V2 is recommended: new Doppel API capabilities are added to V2 only.":
      "{0}: {1}フィールドと{2}フィールドに入力します。組織の管理者は、Doppel Visionの{3}タブ({4}ページ内)からこれらを作成できます。V2を推奨します。新しいDoppel APIの機能はV2にのみ追加されます。",
    "{0}: Generate an {1} through {2} -> {3} -> {4} -> {5}.":
      "{0}: {1}を生成します({2} -> {3} -> {4} -> {5})。",
    "{0}: In the Settings page, select the {1} tab.":
      "{0}: 設定ページで{1}タブを選択します。",
    "{0}: Record your API client secret somewhere safe. For security purposes, it’s only shown when you create or reset the API client. If you lose your secret, you must reset it, which removes access for any integrations that still use the previous secret. 6. Add the {1} and {2} to Cortex. Note: For more information see the {3}":
      "{0}: APIクライアントシークレットは安全な場所に記録してください。セキュリティ上の理由から、APIクライアントの作成時またはリセット時にのみ表示されます。シークレットを紛失した場合はリセットする必要があり、以前のシークレットを使用しているインテグレーションはアクセスできなくなります。 6. {1}と{2}をCortexに追加します。 注記: 詳細については{3}を参照してください",
    "{0}: Select {1}.":
      "{0}: {1}を選択します。",
    "{0}: Select which types of objects to fetch (Indicators, Threat Objects, or both)":
      "{0}: フェッチするオブジェクトのタイプ(インジケーター、脅威オブジェクト、または両方)を選択します",
    "{0}: Since QRadar API v19, The timestamp fields should be provided as milliseconds epoch format instead of seconds.":
      "{0}: QRadar API v19以降、タイムスタンプフィールドは秒ではなくミリ秒のエポック形式で指定する必要があります。",
    "{0}: the “Test” button is not supported for this integration. To verify that authentication was configured correctly, run the {1} command.":
      "{0}: このインテグレーションでは“テスト”ボタンはサポートされていません。認証が正しく設定されていることを確認するには、{1}コマンドを実行してください。",
    "{0}: The Server URL ({1}) is a global endpoint and does not require regional configuration.":
      "{0}: サーバーURL({1})はグローバルエンドポイントであり、リージョン構成は不要です。",
    "{0}: The Server URL ({1}) is a global endpoint and does not require regional configuration. Only the Scanner API base URL is region-specific.":
      "{0}: サーバーURL({1})はグローバルエンドポイントであり、リージョン構成は不要です。リージョン固有なのはScanner APIのベースURLのみです。",
    "{0}: these are the actual certificates, not request certificates.":
      "{0}: これらは実際の証明書であり、リクエスト証明書ではありません。",
    "{0}: These are the actual certificates, not request certificates.":
      "{0}: これらは実際の証明書であり、リクエスト証明書ではありません。",
    "{0}: This is different from the OAuth2 Client ID/Secret used for management operations":
      "{0}: これは、管理操作に使用されるOAuth2クライアントID/シークレットとは異なります",
    "{0}: This option is relevant only if the integration is running on Azure VM.":
      "{0}: このオプションは、インテグレーションがAzure VM上で実行されている場合にのみ関係します。",
    "{0}: To create an API key, you must have the {1} role.":
      "{0}: APIキーを作成するには、{1}ロールが必要です。",
    "{0}: Use the same {1} and {2} that you would use to log into FortiGate itself.":
      "{0}: FortiGate自体へのログインに使用するものと同じ{1}と{2}を使用します。",
    "{0}: When authenticating with the Cortex application, sign in with the same user you want to integrate with. Since this user must grant consent for the app’s permissions, they must be an {1}. To let a non-admin user use the app instead, after an admin has consented to the application once, go to the {2} > {3}, find the app, and set {4} to {5}. This way, other users can obtain the Cortex application credentials without needing to sign in or consent themselves. Alternatively, you can use a {6}.":
      "{0}: Cortexアプリケーションで認証する際は、統合したいユーザーと同じユーザーでサインインします。このユーザーはアプリの権限に同意する必要があるため、{1}である必要があります。代わりに管理者以外のユーザーがアプリを使用できるようにするには、管理者がアプリケーションに一度同意した後、{2} > {3}に移動してアプリを見つけ、{4}を{5}に設定します。これにより、他のユーザーはサインインや同意をしなくても、Cortexアプリケーションの認証情報を取得できます。または、{6}を使用することもできます。",
    "{0}: When enabled, the integration will only use read-only tools, preventing any write operations to GitHub.":
      "{0}: 有効にすると、インテグレーションは読み取り専用ツールのみを使用し、GitHubへの書き込み操作を防止します。",
    "{0}: When pooling is enabled, the number of active open database connections will equal the number of active running {1} Docker containers.":
      "{0}: プーリングが有効な場合、アクティブなオープンデータベース接続の数は、実行中のアクティブな{1} Dockerコンテナーの数と等しくなります。",
    "{0}: When using the Authorization Code flow, make sure the user you authenticate with has the required role permissions. See {1} as an example.":
      "{0}: Authorization Codeフローを使用する場合は、認証するユーザーに必要なロール権限があることを確認してください。例として{1}を参照してください。",
    "{0}: Within a few seconds, a new API key will appear in the table. Click the {1} button next to the key to copy it securely.":
      "{0}: 数秒以内に、新しいAPIキーがテーブルに表示されます。キーの横にある{1}ボタンをクリックして、安全にコピーします。",
    "{0}: Your Prisma SASE TSG ID (found in Strata Cloud Manager settings)":
      "{0}: Prisma SASEのTSG ID(Strata Cloud Managerの設定で確認できます)",
    "Access the {0}.":
      "{0}にアクセスします。",
    "Active subscription at {0}":
      "{0}での有効なサブスクリプション",
    "Add a string of JSON to the integration parameter denoted {0}":
      "{0}で示されるインテグレーションパラメーターにJSON文字列を追加します",
    "AdvancedHunting.Read.All - Application - See section 4 in {0}":
      "AdvancedHunting.Read.All - アプリケーション - {0}のセクション4を参照してください",
    "After creating the procedure, fill in ‘Fetch events query’ the value: ‘call {0}’ with your procedure name.":
      "プロシージャの作成後、‘Fetch events query’に‘call {0}’という値を入力します(プロシージャ名を指定してください)。",
    "After creating the procedure, fill in ‘Fetch events query’ the value: ‘EXEC {0}’ with your procedure name.":
      "プロシージャの作成後、‘Fetch events query’に‘EXEC {0}’という値を入力します(プロシージャ名を指定してください)。",
    "After providing the mandatory details, click {0} to test the configuration.":
      "必須の詳細を入力したら、{0}をクリックして構成をテストします。",
    "All API plans are subject to a rate limit of 1 request per second - {0}":
      "すべてのAPIプランにはレート制限(1秒あたり1リクエスト)が適用されます - {0}",
    "All ZIA API calls use {0}.":
      "すべてのZIA API呼び出しで{0}を使用します。",
    "Alternatively, create an API key via the {0}.":
      "または、{0}を使用してAPIキーを作成します。",
    "API reference: {0}":
      "APIリファレンス: {0}",
    "Append the email ID of the service account created and click {0} to save.":
      "作成したサービスアカウントのメールIDを追加し、{0}をクリックして保存します。",
    "Attach the .cer file to your Azure App. See the following {0} for an example.":
      ".cerファイルをAzureアプリにアタッチします。例については、次の{0}を参照してください。",
    "By default, secrets such as passwords and card numbers are redacted from War Room markdown output. Raw values remain available to playbooks via context for automation. Disable {0} only when troubleshooting in non-production environments.":
      "デフォルトでは、パスワードやカード番号などのシークレットはWar Roomのマークダウン出力でマスクされます。未加工の値は、自動化のためにコンテキスト経由でPlaybookから引き続き利用できます。{0}は、本番以外の環境でのトラブルシューティング時にのみ無効にしてください。",
    "Choose one of the API versions listed under {0} column in the line corresponding to your QRadar version.":
      "QRadarのバージョンに対応する行の、{0}列に記載されているAPIバージョンのいずれかを選択します。",
    "Choose the {0} tab, and click the {1} checkbox.":
      "{0}タブを選択し、{1}チェックボックスをクリックします。",
    "Choose the {0} type from the {1} dropdown list.":
      "{0}タイプを、{1}ドロップダウンリストから選択します。",
    "Click the button in the top-right corner and select {0}.":
      "右上隅のボタンをクリックし、{0}を選択します。",
    "Click your {0} in the top navigation bar.":
      "上部のナビゲーションバーにある{0}をクリックします。",
    "Click your username, and select {0}.":
      "ユーザー名をクリックし、{0}を選択します。",
    "Comma-separated list of URL categories to treat as suspicious. Default: {0}.":
      "不審として扱うURLカテゴリのカンマ区切りリストです。デフォルト: {0}。",
    "Confirm that {0} is set to {1} in your Elasticsearch configuration (this is the default when TLS is enabled).":
      "Elasticsearchの構成で{0}が{1}に設定されていることを確認します(TLSが有効な場合のデフォルトです)。",
    "Connect Cortex to {0} for real-time intelligence from the Clear, Deep, and Dark Web - tailored to your assets.":
      "Cortexを{0}に接続して、Clear Web、Deep Web、Dark Webからのリアルタイムのインテリジェンスを、お客様のアセットに合わせて取得します。",
    "Copy the Client ID and Client Secret into the {0} and {1} integration parameter fields.":
      "Client IDとClient Secretを、{0}と{1}のインテグレーションパラメーターフィールドにコピーします。",
    "Copy the generated {0} into the integration instance and save.":
      "生成された{0}をインテグレーションインスタンスにコピーして保存します。",
    "Copy the key when it is shown — it is displayed only once. You paste it into the {0} field of this integration instance, where it is stored encrypted.":
      "キーが表示されたらコピーします。表示されるのは一度だけです。このインテグレーションインスタンスの{0}フィールドに貼り付けると、暗号化されて保存されます。",
    "Create a Personal Access Token for the new account ({0})":
      "新しいアカウント用のPersonal Access Tokenを作成します({0})",
    "Create API credentials such as Client ID and Client Secret. For more information, see the {0}.":
      "APIの認証情報(Client IDやClient Secretなど)を作成します。詳細については、{0}を参照してください。",
    "Doppel Tenant URL that you can use for calling the {0}. e.g. ,{1}":
      "{0}の呼び出しに使用できるDoppelテナントURLです。例: {1}",
    "Duplicate the {0} mapper and/or the {1} mapper.":
      "{0}マッパーまたは{1}マッパー(あるいはその両方)を複製します。",
    "Enter a {0}.":
      "{0}を入力します。",
    "Enter a descriptive name for the token and click {0}.":
      "トークンのわかりやすい名前を入力し、{0}をクリックします。",
    "Enter the desired name for the created app (e.g., “Cortex”), and click {0}.":
      "作成したアプリの任意の名前(例: “Cortex”)を入力し、{0}をクリックします。",
    "Enter your {0} URL (e.g., {1}).":
      "{0}のURLを入力します(例: {1})。",
    "Example: “CREATE PROCEDURE {0} @timestamp DATETIME AS SELECT * FROM TABLE_NAME WHERE timestamp >= @timestamp order by timestamp”":
      "例: “CREATE PROCEDURE {0} @timestamp DATETIME AS SELECT * FROM TABLE_NAME WHERE timestamp >= @timestamp order by timestamp”",
    "Example: “CREATE PROCEDURE {0}(IN ts DATETIME, IN l INT) BEGIN SELECT * FROM TABLE_NAME WHERE timestamp >= ts order by timestamp asc limit l; END”":
      "例: “CREATE PROCEDURE {0}(IN ts DATETIME, IN l INT) BEGIN SELECT * FROM TABLE_NAME WHERE timestamp >= ts order by timestamp asc limit l; END”",
    "Finally, you need to extract the CA certificate: {0}":
      "最後に、CA証明書を抽出する必要があります: {0}",
    "First, navigate to your {0}.":
      "まず、{0}に移動します。",
    "Follow the instructions in this {0} to create your own client_id, client_secret, tsg_id.":
      "この{0}の手順に従って、独自のclient_id、client_secret、tsg_idを作成します。",
    "Follow these steps for {0} configuration:":
      "{0}の構成については、次の手順に従ってください:",
    "Follow this guide to generate access keys: {0}. For the URL argument, take a look here: {1} For a list of possible values for the {2} parameter, refer to the {3} column in this {4} article.":
      "アクセスキーを生成するには、このガイドに従ってください: {0}。URL引数については、こちらを参照してください: {1} {2}パラメーターに指定可能な値の一覧については、{3}列(この{4}の記事内)を参照してください。",
    "For {0} {1} enter: {2}":
      "{0}が{1}の場合は、次のように入力します: {2}",
    "For information about Google’s API Key requirements and pricing, see {0}.":
      "GoogleのAPIキーの要件と料金の詳細については、{0}を参照してください。",
    "For more information about creating an JWT app click {0}.":
      "JWTアプリの作成の詳細については、{0}をクリックしてください。",
    "For more information about registering a calling bot see the {0}.":
      "通話ボットの登録の詳細については、{0}を参照してください。",
    "For more information about this integration, visit {0}.":
      "このインテグレーションの詳細については、{0}をご覧ください。",
    "For more information about Threatmon, visit: {0}":
      "Threatmonの詳細については、次をご覧ください: {0}",
    "For more information about Zendesk V2 integration, see the {0}":
      "Zendesk V2インテグレーションの詳細については、{0}を参照してください",
    "For more information on getting your Slack access token, see the {0}":
      "Slackのアクセストークンの取得方法については、{0}を参照してください",
    "For more information on how to create the above credentials, see {0}.":
      "上記の認証情報の作成方法の詳細については、{0}を参照してください。",
    "For more information, see the ‘{0}’ official documentation article.":
      "詳細については、公式ドキュメントの記事‘{0}’を参照してください。",
    "For more information, visit the {0}.":
      "詳細については、{0}をご覧ください。",
    "For on-premise WildFire appliances, use the appliance IP or hostname with the {0} path (e.g., {1}).":
      "オンプレミスのWildFireアプライアンスの場合は、アプライアンスのIPアドレスまたはホスト名に{0}パスを付けて使用します(例: {1})。",
    "For testing completion of authorization process run the {0} command.":
      "認可プロセスの完了をテストするには、{0}コマンドを実行します。",
    "For the {0} field refer to the {1} on how to retrieve it":
      "{0}フィールドの取得方法については、{1}を参照してください",
    "For the {0} parameter use your Sysdig SaaS url, refer to the {1} for a list of them based on the region.":
      "{0}パラメーターには、お使いのSysdig SaaSのURLを使用します。リージョンごとの一覧については{1}を参照してください。",
    "For using OAuth 2.0 see the instructions above. The OTP code should be appended to the password parameter in the {0} command.":
      "OAuth 2.0を使用する場合は、上記の手順を参照してください。OTPコードは、{0}コマンドのpasswordパラメーターの末尾に追加する必要があります。",
    "From the left sidebar, navigate to {0}.":
      "左側のサイドバーで{0}に移動します。",
    "Generate a {0} in ZIdentity when creating the API client.":
      "ZIdentityでAPIクライアントを作成する際に、{0}を生成します。",
    "Generate a key of type {0}.":
      "タイプ{0}のキーを生成します。",
    "Go to the {0} -> {1}":
      "{0} -> {1}に移動します",
    "Go to the {0} and follow the procedure in the Creating a Service Account section. After you create a service account, a Service Account Private Key file is downloaded. You will need this file when configuring an instance of the integration.":
      "{0}にアクセスし、「Creating a Service Account」セクションの手順に従います。サービスアカウントを作成すると、サービスアカウントの秘密鍵ファイルがダウンロードされます。このファイルは、インテグレーションのインスタンスを構成するときに必要になります。",
    "Go to the {0} tab, and click {1} on the authorization with type of OAuth 2.0 (3LO).":
      "{0}タブに移動し、OAuth 2.0(3LO)タイプの認可で{1}をクリックします。",
    "Go to the {0} tab.":
      "{0}タブに移動します。",
    "Go to your {0}.":
      "ご利用の{0}に移動します。",
    "Go to your Carbon Black console. This should be the URL in {0}.":
      "Carbon Blackコンソールにアクセスします。これは{0}のURLである必要があります。",
    "If enabled, the integration will automatically activate configuration changes after each write command. If disabled, use the {0} command manually.":
      "有効にすると、インテグレーションは書き込みコマンドの実行後に構成の変更を自動的にアクティブ化します。無効にした場合は、{0}コマンドを手動で使用してください。",
    "If the {0} and {1} fields are configured, the integration will automatically perform the initial login and renew the refresh token when it expires. Otherwise, you have to run the {2} command for the initial login and again each time the refresh token expires.":
      "{0}フィールドと{1}フィールドが構成されている場合、インテグレーションは初回ログインを自動的に実行し、リフレッシュトークンの有効期限が切れると更新します。構成されていない場合は、初回ログイン時と、リフレッシュトークンの有効期限が切れるたびに、{2}コマンドを実行する必要があります。",
    "If there is no API token displayed, click the {0} button to create a new one.":
      "APIトークンが表示されない場合は、{0}ボタンをクリックして新しいトークンを作成します。",
    "If you use {0} to separate your data, set the {1} parameter in the instance configuration. All {2} commands will then operate within that space by default. You can also override the space per-command using the {3} argument.":
      "データを分離するために{0}を使用している場合は、インスタンス構成で{1}パラメーターを設定します。その場合、すべての{2}コマンドはデフォルトでそのスペース内で動作します。{3}引数を使用して、コマンドごとにスペースを上書きすることもできます。",
    "Import Living off the land binaries from {0} into the Threat Intelligence Management(TIM) module for security investigations and threat hunting activities.":
      "セキュリティ調査や脅威ハンティング活動のために、{0}からLiving off the land binariesをThreat Intelligence Management(TIM)モジュールにインポートします。",
    "In addition, provide a pre-defined risk plan (for example, {0}).":
      "さらに、事前定義されたリスクプランを指定します(例: {0})。",
    "In both options below, the {0} is used.":
      "以下の両方のオプションで、{0}が使用されます。",
    "In GitHub, click your {0} (upper-right), then {1}.":
      "GitHubで、{0}(右上)をクリックし、{1}をクリックします。",
    "In order to connect to Microsoft Risky User using either {0} or the {1}:":
      "{0}または{1}のいずれかを使用してMicrosoft Risky Userに接続するには:",
    "In order to use the following commands, you must use the {0}:":
      "次のコマンドを使用するには、{0}を使用する必要があります:",
    "In order to use this integration, you need to enter your Okta API token in the {0} integration instance parameter. For information on getting your Okta API token, see the {1}.":
      "このインテグレーションを使用するには、Okta APIトークンを{0}インテグレーションインスタンスパラメーターに入力する必要があります。Okta APIトークンの取得方法については、{1}を参照してください。",
    "In the {0} dialog box, click {1}. Make sure to copy the generated private key (in PEM format) to somewhere safe, and click {2}.":
      "{0}ダイアログボックスで{1}をクリックします。生成された秘密鍵(PEM形式)を安全な場所にコピーしてから、{2}をクリックしてください。",
    "In the {0} drop-down menu, select a permission to apply for the credential tokens. Define the desired permissions. To use the API credential to grant read-only access on individual {1} resources, select either the User or Editor permission on {2}.":
      "{0}ドロップダウンメニューで、認証情報トークンに適用する権限を選択します。必要な権限を定義します。API認証情報を使用して個々の{1}リソースへの読み取り専用アクセスを付与するには、{2}でUserまたはEditor権限を選択します。",
    "In the {0} field, enter the application (client) ID.":
      "{0}フィールドにアプリケーション(クライアント)IDを入力します。",
    "In the {0} field, enter the application redirect URI.":
      "{0}フィールドにアプリケーションのリダイレクトURIを入力します。",
    "In the {0} field, enter the client secret.":
      "{0}フィールドにクライアントシークレットを入力します。",
    "In the {0} field, enter the directory (tenant) ID.":
      "{0}フィールドにディレクトリ(テナント)IDを入力します。",
    "In the {0} field, select the {1} option.":
      "{0}フィールドで{1}オプションを選択します。",
    "In the {0} field, type {1}.":
      "{0}フィールドに{1}と入力します。",
    "In the {0} field, type your API token.":
      "{0}フィールドにAPIトークンを入力します。",
    "In the Admin Console, go to {0} > {1}.":
      "Admin Consoleで、{0} > {1}に移動します。",
    "In the Admin Console, select {0} > {1} from the menu, and then select the {2} tab.":
      "Admin Consoleで、メニューから{0} > {1}を選択し、{2}タブを選択します。",
    "In the app configuration page, under the {0} tab and the {1} section, select {2} for the {3} option.":
      "アプリ構成ページの{0}タブの{1}セクションで、{2}を{3}オプションに対して選択します。",
    "In the console, go to {0} > {1} .":
      "コンソールで{0} > {1}に移動します。",
    "In the dropdown list under “Role”, select {0}.":
      "「Role」ドロップダウンリストで{0}を選択します。",
    "In the instance configuration, under the {0} field select the {1} option.":
      "インスタンス構成の{0}フィールドで{1}オプションを選択します。",
    "In the integration settings pane in your tenant, check the {0} checkbox.":
      "テナントのインテグレーション設定ペインで、{0}チェックボックスをオンにします。",
    "In the left sidebar, click {0}.":
      "左側のサイドバーで{0}をクリックします。",
    "In the management interface, create a role of type API. Select the APIs under {0} for the role and assign an administrator that role.":
      "管理インターフェースで、タイプがAPIのロールを作成します。{0}にあるAPIをそのロールに対して選択し、管理者にそのロールを割り当てます。",
    "In this method, the {0} is used.":
      "この方法では、{0}が使用されます。",
    "In XSOAR, create the custom indicator and incident field, for example, {0}.":
      "XSOARで、カスタムのインジケーターフィールドとインシデントフィールドを作成します(例: {0})。",
    "In your ServiceNow instance, navigate to {0} and ensure an MCP server is configured (or use the preconfigured {1}).":
      "ServiceNowインスタンスで{0}に移動し、MCPサーバーが構成されていることを確認します(または、事前構成済みの{1}を使用します)。",
    "Incident.Read.All - Application - See section 4 in {0}":
      "Incident.Read.All - Application - {0}のセクション4を参照",
    "Incident.ReadWrite.All - Application - See section 4 in {0}":
      "Incident.ReadWrite.All - Application - {0}のセクション4を参照",
    "Insert a {0}.":
      "{0}を挿入します。",
    "Log in to the {0} with an account that has {1}.":
      "{0}に、{1}を持つアカウントでログインします。",
    "Log in to your {0} account.":
      "{0}アカウントにログインします。",
    "Log in to your ServiceNow instance and create an endpoint for Cortex to access your instance. (See {0} for more information).":
      "ServiceNowインスタンスにログインし、Cortexがインスタンスにアクセスするためのエンドポイントを作成します。(詳細については{0}を参照してください。)",
    "Make a note of the {0} and {1}. These will be used to configure the integration.":
      "{0}と{1}を書き留めてください。これらはインテグレーションの構成に使用されます。",
    "Make sure you have your SecneurX API-Key. You can obtain the API-Key by sending an email to {0}.":
      "SecneurXのAPIキーがあることを確認してください。{0}にメールを送信すると、APIキーを取得できます。",
    "McAfee ePO has a highly flexible and powerful permissions system. The permissions required for the user that uses this integration depend on which operations they need to perform. The API user should have the same permissions a regular user would have in order to access the data via the UI. It is possible to view the exact permissions needed for a specific command by running the {0} command. The {1} command’s output will include help information for the specific command including required permissions. More info about McAfee ePO’s permissions model is available {2}.":
      "McAfee ePOには、非常に柔軟で強力な権限システムがあります。このインテグレーションを使用するユーザーに必要な権限は、実行する必要がある操作によって異なります。APIユーザーには、UI経由でデータにアクセスするために通常のユーザーが持つ権限と同じ権限が必要です。特定のコマンドに必要な正確な権限は、{0}コマンドを実行すると確認できます。{1}コマンドの出力には、必要な権限を含む、その特定のコマンドのヘルプ情報が含まれます。McAfee ePOの権限モデルの詳細は{2}で確認できます。",
    "Microsoft 365 Germany Endpoint: {0}":
      "Microsoft 365 Germanyエンドポイント: {0}",
    "Microsoft integrations (Graph and Azure) in Cortex use Entra ID applications to authenticate with Microsoft APIs. These integrations use OAuth 2.0 and OpenID Connect standard-compliant authentication services, which use an Application to sign-in or delegate authentication. For more information, see the {0}.":
      "CortexのMicrosoftインテグレーション(GraphおよびAzure)は、Entra IDアプリケーションを使用してMicrosoft APIで認証します。これらのインテグレーションは、OAuth 2.0およびOpenID Connectの標準に準拠した認証サービスを使用します。これらのサービスは、アプリケーションを使用してサインインまたは認証を委任します。詳細については、{0}を参照してください。",
    "Microsoft Operated by 21Vianet Endpoint: {0}":
      "Microsoft Operated by 21Vianetエンドポイント: {0}",
    "More information can be found on {0}.":
      "詳細については{0}を参照してください。",
    "Name your token and click {0}.":
      "トークンに名前を付けて、{0}をクリックします。",
    "Navigate to the {0} or {1} section (refer to your Magnet Automate version documentation for the exact location).":
      "{0}または{1}セクションに移動します(正確な場所については、お使いのMagnet Automateのバージョンのドキュメントを参照してください)。",
    "Navigate to your {0}.":
      "{0}に移動します。",
    "Next to the {0} label, make sure the {1} option is selected, and that the {2} option is not selected.":
      "{0}ラベルの横で、{1}オプションが選択され、{2}オプションが選択されていないことを確認します。",
    "Next to the {0} label, uncheck the {1} option if it’s selected.":
      "{0}ラベルの横にある{1}オプションが選択されている場合は、オフにします。",
    "Next, log in to your {0} account.":
      "次に、{0}アカウントにログインします。",
    "Note your {0} (e.g., {1} if your login URL is {2}).":
      "{0}を書き留めてください(例: {1}、ログインURLが{2}の場合)。",
    "Note: If you’re uncertain which API version to use, it is recommended to use the latest API version listed in the {0} column in the line corresponding to your QRadar version.":
      "注: 使用するAPIバージョンが不明な場合は、お使いのQRadarバージョンに対応する行の{0}列に記載されている最新のAPIバージョンを使用することをお勧めします。",
    "Note: SaaS Security API currently allows you to mirror out only closed incidents, and only their {0} and {1} fields.":
      "注: SaaS Security APIでは現在、クローズされたインシデントのみ、およびその{0}フィールドと{1}フィールドのみをミラーリング(送信)できます。",
    "Notice: Submitting indicators using the {0} command of this integration might make the indicator data publicly available. See the vendor’s documentation for more details":
      "注意: このインテグレーションの{0}コマンドを使用してインジケーターを送信すると、インジケーターデータが公開される可能性があります。詳細については、ベンダーのドキュメントを参照してください",
    "On large tenants a full Spotlight collection can take many hours - longer than the maximum execution time allowed for a single assets fetch. In such cases, the fetch is terminated before it completes. Enable the {0} parameter (under the {1} section, {2}) to run the Spotlight fetch in a long-running container instead, which is not bound by that execution time limit and lets a cycle run to completion. A new cycle starts every 24 hours, or immediately after the previous one ends if it ran longer.":
      "大規模なテナントでは、Spotlightの完全な収集に数時間かかることがあり、1回のアセットのフェッチに許可されている最大実行時間を超える場合があります。その場合、フェッチは完了前に終了されます。代わりに長時間実行コンテナーでSpotlightのフェッチを実行するには、{0}パラメーター({1}セクション、{2})を有効にします。このコンテナーは実行時間の制限を受けず、サイクルを最後まで実行できます。新しいサイクルは24時間ごとに開始されます。前のサイクルがそれより長くかかった場合は、終了後すぐに開始されます。",
    "On premise administrators: Edit the {0} file and set the following key to true: com.proofpoint.admin.apigui.enable=t":
      "オンプレミスの管理者: {0}ファイルを編集し、次のキーをtrueに設定します: com.proofpoint.admin.apigui.enable=t",
    "On the opened page, click {0}.":
      "開いたページで{0}をクリックします。",
    "Open the {0}.":
      "{0}を開きます。",
    "Open the main menu and go to {0} > {1}.":
      "メインメニューを開き、{0} > {1}に移動します。",
    "Open your Google Admin console (at {0}).":
      "Google Admin console({0})を開きます。",
    "Optional: To revoke all currently valid API keys, follow this {0}":
      "オプション: 現在有効なすべてのAPIキーを失効させるには、この{0}に従ってください",
    "Optionally set the {0} (must match your deployment profile region) and {1}":
      "必要に応じて、{0}(デプロイプロファイルのリージョンと一致する必要があります)と{1}を設定します",
    "Please note the default timeout for queries is 30 seconds. To increase the timeout set the following parameter in the {0} field: {1} (notice the space in the name of the parameter) with the desired timeout in seconds. For example to set a timeout of 120 seconds use: {2}.":
      "クエリのデフォルトのタイムアウトは30秒です。タイムアウトを延長するには、{0}フィールドに次のパラメーターを設定します: {1}(パラメーター名にスペースが含まれている点に注意してください)。値には、目的のタイムアウトを秒単位で指定します。たとえば、タイムアウトを120秒に設定するには、次を使用します: {2}。",
    "Preconfigured template attachments can be supported by using {0}":
      "事前構成済みのテンプレート添付ファイルは、{0}を使用することでサポートできます",
    "Provide your {0} (TSG ID)":
      "{0}(TSG ID)を指定します",
    "Providing additional filters should be done in the following format: {0}. For example: {1}.":
      "追加のフィルターは、次の形式で指定します: {0}。例: {1}。",
    "Rasterize Mode: It is possible to rasterize either via Chrome WebDriver or Chrome Headless CLI. WebDriver supports more options than Headless CLI. Such as support for the {0} option in the {1} command. There are some urls that do not rasterize well with WebDriver and may succeed with Headless CLI. Thus, it is recommended to use the {2} mode, which will use WebDriver as a start and fallback to Headless CLI if it fails.":
      "ラスタライズモード: ChromeのWebDriverまたはChrome Headless CLIのいずれかでラスタライズできます。WebDriverは、Headless CLIよりも多くのオプションをサポートしています。たとえば、{0}オプション({1}コマンド)のサポートがあります。WebDriverでは適切にラスタライズされないものの、Headless CLIでは成功する場合があるURLもあります。そのため、まずWebDriverを使用し、失敗した場合はHeadless CLIにフォールバックする{2}モードの使用をお勧めします。",
    "Review the requested permissions on GitLab, and click {0}.":
      "GitLabで要求されている権限を確認し、{0}をクリックします。",
    "Save the integration and note the {0} and {1}.":
      "インテグレーションを保存し、{0}と{1}を書き留めます。",
    "See {0} for more information.":
      "詳細については、{0}を参照してください。",
    "See {0} regarding this requirement.":
      "この要件については、{0}を参照してください。",
    "Select a {0}.":
      "{0}を選択します。",
    "Select an {0} for the token.":
      "トークンの{0}を選択します。",
    "Select an {0}, then fill in only that version’s fields. Fields labeled with the other version are ignored.":
      "{0}を選択し、そのバージョンのフィールドのみを入力します。もう一方のバージョンのラベルが付いたフィールドは無視されます。",
    "Select your User Assigned Managed Identity -> copy the Client ID -> put it in the {0} filed in the instance configuration.":
      "User Assigned Managed Identityを選択 -> Client IDをコピー -> インスタンス構成の{0}フィールドに入力します。",
    "Sends a POST request to {0} with {1}, {2}, and {3}.":
      "{0}に、{1}、{2}、{3}を指定してPOSTリクエストを送信します。",
    "Set up ZIdentity, link your service tenants, and create API Clients with the right roles and resources — {0}.":
      "ZIdentityをセットアップし、サービステナントをリンクし、適切なロールとリソースを持つAPIクライアントを作成します — {0}。",
    "Sign in to your Darkmon tenant, go to {0}, and create a key with the scopes your XSOAR instance needs. Paste it into the {1} field below.":
      "Darkmonテナントにサインインし、{0}に移動して、XSOARインスタンスに必要なスコープを持つキーを作成します。そのキーを下の{1}フィールドに貼り付けます。",
    "Sign in to your Okta organization as a user {0}.":
      "{0}ユーザーとしてOkta組織にサインインします。",
    "The {0} advanced parameter is available for cases where the automatic agent detection fails (e.g., API requests return errors or the {1} button fails due to an incorrect agent header). By default, the integration auto-detects the correct agent based on the platform. Only change this setting if instructed to do so by support or if auto-detection is not working correctly.":
      "{0}詳細パラメーターは、エージェントの自動検出が失敗する場合(たとえば、APIリクエストがエラーを返す場合や、エージェントヘッダーが正しくないために{1}ボタンが失敗する場合)のために用意されています。デフォルトでは、インテグレーションはプラットフォームに基づいて正しいエージェントを自動検出します。この設定は、サポートから指示された場合、または自動検出が正しく機能しない場合にのみ変更してください。",
    "The {0} and {1} commands are only supported when using the {2} with {3} permission type.":
      "{0}コマンドと{1}コマンドは、{2}で{3}権限タイプを使用する場合にのみサポートされます。",
    "The {0} and the {1} integration parameters should be left blank.":
      "{0}と{1}のインテグレーションパラメーターは空白のままにしてください。",
    "The {0} command requires some JSON format arguments. Please make sure the inputed JSONs have uniqe characters (such as {1}) escaped before entering them (e.g. {2}).":
      "{0}コマンドには、JSON形式の引数がいくつか必要です。入力するJSONの特殊文字({1}など)が、入力前にエスケープされていることを確認してください(例: {2})。",
    "The {0} corresponds to the {1} in the integration credentials field.":
      "{0}は、インテグレーションの認証情報フィールドの{1}に対応します。",
    "The {0} integration parameter should be set according to the requested OAuth2 permissions types to grant access to in Microsoft identity platform, for more details see the {1}.":
      "{0}インテグレーションパラメーターは、Microsoft identity platformでアクセスを許可するために要求するOAuth2権限タイプに従って設定する必要があります。詳細については、{1}を参照してください。",
    "The {0} integration parameter should be set to {1} (the Cortex Azure app ID).":
      "{0}インテグレーションパラメーターには{1}(Cortex AzureアプリのID)を設定する必要があります。",
    "The {0} parameter is required by both.":
      "{0}パラメーターは両方で必要です。",
    "The {0} parameter specifies if a new user should be created when the User Profile passed was not found in the 3rd-party integration.":
      "{0}パラメーターは、渡されたユーザープロファイルがサードパーティのインテグレーションで見つからなかった場合に、新しいユーザーを作成するかどうかを指定します。",
    "The API connection requires the {0} and {1} parameters as well as a {2} or {3}.":
      "API接続には、{0}パラメーターと{1}パラメーター、および{2}または{3}が必要です。",
    "The default language used for OCR is English. To configure additional languages, in the {0} parameter specify a CSV list of language codes. For example, to set the integration for English and French, set this value: {1}. To see all supported language codes,run the following command:":
      "OCRに使用されるデフォルトの言語は英語です。追加の言語を構成するには、{0}パラメーターに言語コードのCSVリストを指定します。たとえば、インテグレーションを英語とフランス語に設定するには、次の値を設定します: {1}。サポートされているすべての言語コードを表示するには、次のコマンドを実行します:",
    "The integration uses the OAuth 2.0 {0} grant type:":
      "このインテグレーションはOAuth 2.0の{0}グラントタイプを使用します:",
    "The legacy content search solution is {0}. Content searches are now performed within the context of an eDiscovery case.":
      "従来のコンテンツ検索ソリューションは{0}です。コンテンツ検索は、eDiscoveryケースのコンテキスト内で実行されるようになりました。",
    "The pack ships pointing at the production endpoint. To target your dev or staging environment, set {0} to your dev URL on this instance only.":
      "パックは本番エンドポイントを指す状態で提供されます。開発環境またはステージング環境を対象にするには、このインスタンスでのみ{0}を開発用URLに設定します。",
    "The Server URL assigned to your organization. For example, {0}.":
      "組織に割り当てられたサーバーURLです。例: {0}。",
    "The SSH connection requires the {0}, {1} and {2} are provided.":
      "SSH接続には、{0}、{1}、{2}の指定が必要です。",
    "The vsys is located in the Firewall URL; e.g, {0}":
      "vsysはファイアウォールのURLに含まれています。例: {0}",
    "There are 3 different authentication {0}":
      "認証には3種類の{0}があります",
    "There are 3 different authentication {0}.":
      "認証には3種類の{0}があります。",
    "There are two different authentication methods for {0}:":
      "{0}には2種類の認証方法があります:",
    "This API enables you to use the Google Admin API. In order to enable the API, you need to create an account service private key JSON file and copy its content as the value for the {0} parameter field.":
      "このAPIを使用すると、Google Admin APIを利用できます。APIを有効にするには、アカウントのサービス秘密鍵JSONファイルを作成し、その内容を{0}パラメーターフィールドの値としてコピーする必要があります。",
    "This integration connects to the Zscaler Internet Access (ZIA) API using {0} authentication via ZIdentity, replacing the legacy session-based authentication.":
      "このインテグレーションは、ZIdentity経由の{0}認証を使用してZscaler Internet Access(ZIA)APIに接続します。従来のセッションベース認証に代わるものです。",
    "This integration is deprecated. Use the Microsoft Graph Security integration for supported replacement functionality. For a list of command replacements, see the {0}.":
      "このインテグレーションは非推奨です。サポートされている代替機能については、Microsoft Graph Securityインテグレーションを使用してください。コマンドの置き換え一覧については、{0}を参照してください。",
    "This integration uses the {0} mechanism to periodically collect assets and vulnerabilities from Rapid7 InsightVM.":
      "このインテグレーションは、{0}メカニズムを使用して、Rapid7 InsightVMからアセットと脆弱性を定期的に収集します。",
    "This is a long-running integration. For more information about long-running integrations, check out the {0} article.":
      "これは長時間実行されるインテグレーションです。長時間実行されるインテグレーションの詳細については、{0}の記事を参照してください。",
    "To access the {0} by instance name, set up the {1} and {2} values in the {3} page ({4} > {5} > {6} > {7}).":
      "インスタンス名で{0}にアクセスするには、{1}と{2}の値を{3}ページ({4} > {5} > {6} > {7})で設定します。",
    "To add mirroring in both environments, in the Incident Mirroring Direction field, select {0}. Outgoing mirroring is recommended for Cortex version 6.2 and above. If you enable mirroring, you need to add the timezone of the Splunk server (in minutes). For example, if using GMT and the timezone is GMT {1}180. For UTC, set the timezone to 0. Set this only if the Splunk server is different than the Cortex server. This is relevant only for fetching notable events.":
      "両方の環境にミラーリングを追加するには、「インシデントのミラーリング方向」フィールドで{0}を選択します。Cortexバージョン6.2以降では、送信ミラーリングを推奨します。ミラーリングを有効にする場合は、Splunkサーバーのタイムゾーン(分単位)を追加する必要があります。たとえば、GMTを使用していて、タイムゾーンがGMT {1}180の場合です。UTCの場合は、タイムゾーンを0に設定します。この設定は、SplunkサーバーがCortexサーバーと異なる場合にのみ行ってください。これは、notableイベントのフェッチにのみ関連します。",
    "To allow access to Microsoft Defender Advanced Threat Protection, an admin has to approve our app using an admin consent flow, by clicking on the following {0}. After authorizing the Cortex app, you will get an {1}, {2}, and {3}, which you then need to insert in the integration instance settings corresponding fields.":
      "Microsoft Defender Advanced Threat Protectionへのアクセスを許可するには、管理者が管理者の同意フローを使用して、次の{0}をクリックし、アプリを承認する必要があります。Cortexアプリを承認すると、{1}、{2}、{3}が取得されます。これらをインテグレーションインスタンス設定の対応するフィールドに入力する必要があります。",
    "To configure this integration, you need an {0} and a {1} from the iZOOlogic platform.":
      "このインテグレーションを構成するには、iZOOlogicプラットフォームの{0}と{1}が必要です。",
    "To connect the McAfee TIE using the DXL TIE client, you need to create certificates and configure DXL. For more information, see the {0}. After you complete this configuration, you will have the following files.":
      "DXL TIEクライアントを使用してMcAfee TIEに接続するには、証明書を作成し、DXLを構成する必要があります。詳細については、{0}を参照してください。この構成が完了すると、次のファイルが作成されます。",
    "To create, modify, and delete Safe Links policies, you need to be a member of the {0} or {1} role groups.":
      "Safe Linksポリシーを作成、変更、削除するには、{0}または{1}のロールグループのメンバーである必要があります。",
    "To enable the Shodan integration you need to have an API key, which you can get for free by creating a Shodan account {0} Once you have an API key you insert it into the {1} field and click the {2} button.":
      "Shodanインテグレーションを有効にするには、APIキーが必要です。APIキーは、Shodanアカウントを作成すると無料で取得できます({0})。APIキーを取得したら、{1}フィールドに入力し、{2}ボタンをクリックします。",
    "To execute the command either provide the value of the Admin email in the integration configuration or provide the value of the {0} argument for the command or provide the admin role to the created service account’s email by performing the following steps:":
      "コマンドを実行するには、インテグレーション設定で管理者のメールアドレスの値を指定するか、コマンドの{0}引数の値を指定するか、次の手順を実行して、作成したサービスアカウントのメールアドレスに管理者ロールを付与します:",
    "To generate an API key, login to Netcraft and go to the {0}":
      "APIキーを生成するには、Netcraftにログインして{0}に移動します",
    "To generate tokens, browse to {0} and follow the instructions":
      "トークンを生成するには、{0}にアクセスし、指示に従います",
    "To get an API client ID and secret, contact {0}.":
      "APIクライアントIDとシークレットを取得するには、{0}にお問い合わせください。",
    "To get the {0}, {1}, {2} and {3} parameters, in the Azure Portal, go to {4} and click the {5} tab.":
      "{0}、{1}、{2}、{3}パラメーターを取得するには、Azure Portalで{4}に移動し、{5}タブをクリックします。",
    "To get your API key, here is a {0} to Tavily UI.":
      "APIキーを取得するには、Tavily UIへの{0}をご利用ください。",
    "To manage permissions in the Microsoft Defender XDR portal, go to {0} or https://security.microsoft.com/securitypermissions. You need to be a global administrator or a member of the Organization Management role group in the Microsoft Defender XDR portal. Specifically, the Role Management role allows users to view, create, and modify role groups in the Microsoft Defender XDR portal, and by default, that role is assigned only to the Organization Management role group.":
      "Microsoft Defender XDRポータルで権限を管理するには、{0}、またはhttps://security.microsoft.com/securitypermissions に移動します。Microsoft Defender XDRポータルのグローバル管理者、またはOrganization Managementロールグループのメンバーである必要があります。具体的には、Role Managementロールによって、ユーザーはMicrosoft Defender XDRポータルでロールグループを表示、作成、変更できます。このロールは、デフォルトではOrganization Managementロールグループにのみ割り当てられています。",
    "To mirror offenses with events, enable the {0} parameter and set {1} to {2}.":
      "イベント付きのオフェンスをミラーリングするには、{0}パラメーターを有効にし、{1}を{2}に設定します。",
    "To obtain an API Key, run the following REST command and copy the key: {0}":
      "APIキーを取得するには、次のRESTコマンドを実行してキーをコピーします: {0}",
    "To reset fetch incidents, run {0} - this will reset the fetch to its initial state (will try to fetch first available offense).":
      "インシデントのフェッチをリセットするには、{0}を実行します。これにより、フェッチが初期状態にリセットされます(利用可能な最初のオフェンスのフェッチを試みます)。",
    "To reset fetch incidents, run the {0} command - This will reset the fetch to its initial state. (Will try to fetch the first available offense).":
      "インシデントのフェッチをリセットするには、{0}コマンドを実行します。これにより、フェッチが初期状態にリセットされます。(利用可能な最初のオフェンスのフェッチを試みます。)",
    "To retrieve the Egress API key from Panorama - Click “Generate API Key” under {0}":
      "PanoramaからEgress APIキーを取得するには、{0}の「Generate API Key」をクリックします",
    "To start fetching incidents, enable the parameter {0} - this will start a long running process that’ll fetch incidents periodically. Depending on the system load, {1}.":
      "インシデントのフェッチを開始するには、パラメーター{0}を有効にします。これにより、インシデントを定期的にフェッチする長時間実行プロセスが開始されます。システム負荷によっては、{1}。",
    "To use {0}:":
      "{0}を使用するには:",
    "To use a {0} , you need to add a {1}.":
      "{0}を使用するには、{1}を追加する必要があります。",
    "To use a self-configured Azure application, you need to add a new Azure App Registration in the Azure Portal. For more details, follow {0}.":
      "自己構成のAzureアプリケーションを使用するには、Azure Portalで新しいAzure App Registrationを追加する必要があります。詳細については、{0}の手順に従ってください。",
    "To use a self-configured Azure application, you need to add a new Azure App Registration in the Azure Portal. To add an app registration, refer to steps 1-6 under the {0} section of the integration documentation {1}.":
      "自己構成のAzureアプリケーションを使用するには、Azure Portalで新しいAzure App Registrationを追加する必要があります。アプリ登録を追加するには、インテグレーションのドキュメントの{0}セクションの手順1~6を参照してください({1})。",
    "To use ServiceNow in XSOAR, ensure your user account has the {0}, {1} roles or any other role required to permit working with the {2} table. These roles are required in order to make API calls. However, they may not suffice for viewing records in some tables.":
      "XSOARでServiceNowを使用するには、ユーザーアカウントに{0}、{1}ロール、または{2}テーブルでの作業を許可するために必要なその他のロールがあることを確認してください。API呼び出しを行うには、これらのロールが必要です。ただし、一部のテーブルのレコードを表示するには不十分な場合があります。",
    "To use the {0} command, ensure the {1} has one of the following roles assigned:":
      "{0}コマンドを使用するには、{1}に次のいずれかのロールが割り当てられていることを確認してください:",
    "To use the {0} command, you need to authorize the client (Cortex) to run the command. Follow the {1} to do so. In step 4, instead of selecting {2}, select {3}.":
      "{0}コマンドを使用するには、クライアント(Cortex)にコマンドの実行を許可する必要があります。{1}に従って許可してください。手順4では、{2}を選択する代わりに{3}を選択します。",
    "To use the {0} command, you need to authorize the client (Demisto) to run the command. Follow the instructions in the {1}. In step #4, instead of selecting {2}, select {3}.":
      "{0}コマンドを使用するには、クライアント(Demisto)にコマンドの実行を許可する必要があります。{1}の手順に従ってください。手順4では、{2}を選択する代わりに{3}を選択します。",
    "To use the full capabilities of this integration, make sure your user has the following permissions: {0}, {1}, {2}.":
      "このインテグレーションの全機能を使用するには、ユーザーに次の権限があることを確認してください: {0}、{1}、{2}。",
    "To use the integration commands, ensure the {0} has one of the following roles assigned:":
      "インテグレーションのコマンドを使用するには、{0}に次のいずれかのロールが割り当てられていることを確認してください:",
    "To use the integration with an API token, you first need to change the {0} field to {1}. Following this step, you can now enter the API Token into the {2} field - this value will be used as an API key.":
      "APIトークンでインテグレーションを使用するには、まず{0}フィールドを{1}に変更する必要があります。この手順の後、APIトークンを{2}フィールドに入力できます。この値はAPIキーとして使用されます。",
    "To view and run Office 365 unified audit log searches, admins or users must be assigned the {0} or {1} role in {2}.":
      "Office 365の統合監査ログ検索を表示および実行するには、管理者またはユーザーに、{0}または{1}ロールが{2}で割り当てられている必要があります。",
    "To view logs concerning the creation of the indicator list and its current status add the {0} suffix to the list URL.":
      "インジケーターリストの作成と現在のステータスに関するログを表示するには、リストURLに{0}サフィックスを追加します。",
    "Under {0}, click {1}.":
      "{0}で{1}をクリックします。",
    "Under {0}, select the necessary permissions. Choose minimal permissions.":
      "{0}で、必要な権限を選択します。最小限の権限を選択してください。",
    "Under {0}, select which repositories the token can access. Choose minimal access.":
      "{0}で、トークンがアクセスできるリポジトリを選択します。最小限のアクセスを選択してください。",
    "Under the {0} tab, grant the required scopes mentioned above for the app.":
      "{0}タブで、上記のアプリに必要なスコープを付与します。",
    "Under the newly added {0} section, click {1}.":
      "新しく追加された{0}セクションで、{1}をクリックします。",
    "US Government Department of Defence (DoD) Endpoint: {0}":
      "米国政府国防総省(DoD)エンドポイント: {0}",
    "US Government GCC-High Endpoint: {0}":
      "米国政府GCC-Highエンドポイント: {0}",
    "Use {0} to check acceptance, {1} to review it, and {2} to accept.":
      "承諾状況の確認には{0}、内容の確認には{1}、承諾には{2}を使用します。",
    "Use Cortex’s credentials store with a {0} and {1} as the {2} and {3} in case you are using Enterprise DLP through a SASE platform.":
      "SASEプラットフォーム経由でEnterprise DLPを使用する場合は、Cortexの認証情報ストアで、{0}と{1}をそれぞれ{2}と{3}として使用します。",
    "Use the {0} integration to enrich indicators with threat intelligence context from Palo Alto Networks Unit 42’s research team.":
      "{0}インテグレーションを使用して、Palo Alto Networks Unit 42の調査チームによる脅威インテリジェンスのコンテキストでインジケーターをエンリッチします。",
    "Use the {0} integration to fetch indicators and threat objects from Palo Alto Networks Unit 42’s comprehensive threat feed. This integration provides continuous access to high-quality indicators of compromise (IOCs) and contextual threat intelligence.":
      "{0}インテグレーションを使用して、Palo Alto Networks Unit 42の包括的な脅威フィードからインジケーターと脅威オブジェクトをフェッチします。このインテグレーションにより、高品質な侵害指標(IOC)とコンテキスト情報を含む脅威インテリジェンスに継続的にアクセスできます。",
    "Use the {0} parameter to control what this integration ingests. You can select {1}, {2}, or both:":
      "このインテグレーションが取り込む対象を制御するには、{0}パラメーターを使用します。{1}、{2}、またはその両方を選択できます:",
    "Use the {0} parameter to filter cases by the required severity and the {1} parameter to filter cases by the required status.":
      "必要な重大度でケースをフィルターするには{0}パラメーターを、必要なステータスでケースをフィルターするには{1}パラメーターを使用します。",
    "Use the {0} to link Microsoft Defender XDR with Cortex.":
      "{0}を使用して、Microsoft Defender XDRをCortexにリンクします。",
    "Use the {0} to link Microsoft Graph Services with Cortex.":
      "{0}を使用して、Microsoft Graph ServicesをCortexにリンクします。",
    "Use the appropriate server URL in the {0} parameter based on your region or cloud environment:":
      "リージョンまたはクラウド環境に応じて、{0}パラメーターに適切なサーバーURLを使用します:",
    "Use this {0} to log in to the Joe Security platform.":
      "この{0}を使用して、Joe Securityプラットフォームにログインします。",
    "Using a national cloud endpoint is supported by setting the {0} parameter to one of the following options:":
      "ナショナルクラウドのエンドポイントは、{0}パラメーターを次のいずれかのオプションに設定することでサポートされます:",
    "Visit {0} for a list of all possible fields to be used in the filter.":
      "フィルターで使用できるすべてのフィールドの一覧については、{0}を参照してください。",
    "Visit {0} for explanation about filter syntax.":
      "フィルター構文の説明については、{0}を参照してください。",
    "Visit the {0} for a full list of available API versions according to the QRadar version.":
      "QRadarのバージョンごとに利用可能なAPIバージョンの完全な一覧については、{0}を参照してください。",
    "When encountering connectivity or authorization errors, it is necessary to include the IP addresses corresponding to the relevant region in the CrowdStrike Falcon allow list. These IP addresses can be found in the {0} by searching for {1}.":
      "接続エラーまたは認可エラーが発生した場合は、該当リージョンに対応するIPアドレスをCrowdStrike Falconの許可リストに追加する必要があります。これらのIPアドレスは、{0}で{1}を検索すると確認できます。",
    "When encountering HTTP 429 response error code from CrowdStrike Falcon, use an engine as explained in this {0}.":
      "CrowdStrike FalconからHTTP 429レスポンスエラーコードが返された場合は、この{0}の説明に従ってエンジンを使用します。",
    "When mirroring offenses with events it is advised to set the {0} to a small value.":
      "イベント付きのオフェンスをミラーリングする場合は、{0}を小さい値に設定することをお勧めします。",
    "When switching from the {0} to the {1} do as follow: Save the instance, run the {2} command and follow the instructions mentioned there. Once done, test the validity of your instance by running the {3} command. When switching from the {4} to the {5}, test the validity of the instance by clicking the ‘Test’ button.":
      "{0}から{1}に切り替える場合は、次の手順を実行します。インスタンスを保存し、{2}コマンドを実行して、そこに記載されている手順に従います。完了したら、{3}コマンドを実行してインスタンスの有効性をテストします。{4}から{5}に切り替える場合は、「テスト」ボタンをクリックしてインスタンスの有効性をテストします。",
    "When using {0}, the connection should be tested using the {1} command.":
      "{0}を使用する場合は、{1}コマンドを使用して接続をテストする必要があります。",
    "When using the {0} for this integration, you should log in as an administrator or a user with administrative privileges ({1} or {2}) after running the {3} command and the login window appears. For more information, see {4}.":
      "このインテグレーションで{0}を使用する場合は、管理者または管理者権限を持つユーザー({1}または{2})として、{3}コマンドを実行してログインウィンドウが表示された後にログインする必要があります。詳細については、{4}を参照してください。",
    "When using the {0}, make sure the user you authenticate with has the relevant roles in Azure AD in order to execute the operation. To verify that authentication was configured correctly, run the {1} command.":
      "{0}を使用する場合は、認証に使用するユーザーが、操作を実行するためにAzure ADで関連するロールを持っていることを確認してください。認証が正しく構成されたことを確認するには、{1}コマンドを実行します。",
    "Whether to output {0} formats as textual web pages.":
      "{0}形式をテキストのWebページとして出力するかどうか。",
    "You can apply additional (optional) filters for the fetch-incident query using the {0} integration parameter. For more information on how to use the filter syntax, see the {1} and {2}.":
      "{0}インテグレーションパラメーターを使用して、フェッチインシデントクエリに追加の(オプションの)フィルターを適用できます。フィルター構文の使用方法の詳細については、{1}と{2}を参照してください。",
    "You can apply additional (optional) filters for the fetch-incident query using the {0} integration parameter. For more information on how to use the filter syntax:":
      "{0}インテグレーションパラメーターを使用して、フェッチインシデントクエリに追加の(オプションの)フィルターを適用できます。フィルター構文の使用方法の詳細については、次を参照してください:",
    "You can narrow what is fetched using the {0} and {1} parameters. These accept an OData {2} expression, for example {3}. For the supported syntax and operators, see {4}.":
      "{0}および{1}パラメーターを使用して、フェッチ対象を絞り込めます。これらのパラメーターにはOData {2}式を指定できます(例: {3})。サポートされている構文と演算子については、{4}を参照してください。",
    "You can use an existing Terraform user or team token, or create a new one (organization tokens are not supported). Ensure the user or team has {0} and {1} permissions for the HCP Terraform organization and workspaces to integrate.":
      "既存のTerraformユーザートークンまたはチームトークンを使用するか、新しく作成できます(組織トークンはサポートされていません)。統合するHCP Terraformの組織とワークスペースに対して、ユーザーまたはチームに{0}および{1}の権限があることを確認してください。",
    "You can use an existing Terraform user or team token, or create a new one (organization tokens are not supported). Ensure the user or team has {0} and {1} permissions for the Terraform Enterprise organization and workspaces to integrate.":
      "既存のTerraformユーザートークンまたはチームトークンを使用するか、新しく作成できます(組織トークンはサポートされていません)。統合するTerraform Enterpriseの組織とワークスペースに対して、ユーザーまたはチームに{0}および{1}の権限があることを確認してください。",
    "You find more information about SIGNL4 at {0}.":
      "SIGNL4の詳細については、{0}を参照してください。",
    "You must have the {0} configured in the ZIA Admin Portal.":
      "ZIA Admin Portalで{0}を構成しておく必要があります。",

    // --- Batch: Missed items reported by user (tooltips and standalone Deprecated.) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    "This value will only be used when no arguments were given to the ad-get-user command.":
      "この値は、ad-get-userコマンドに引数が指定されていない場合にのみ使用されます。",
    "if no offenses are found within the range of first fetch, will be set to fetch the earliest offense.":
      "最初のフェッチの範囲内にオフェンスが見つからない場合は、最も古いオフェンスをフェッチするように設定されます。",
    "Source of WildFire API Key - other = NGFW, WildFire API - pcc = Prisma Cloud Compute - prismaaccessapi = Prisma Access - xsoartim = XSOAR TIM API Key":
      "WildFire APIキーのソース - other = NGFW、WildFire API - pcc = Prisma Cloud Compute - prismaaccessapi = Prisma Access - xsoartim = XSOAR TIM APIキー",
    "Deprecated.":
      "非推奨です。",

    // --- Batch: Login page strings (08:49 export) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    "By signing in, you agree to our Terms and acknowledge our Privacy Statement.":
      "サインインすることで、利用規約に同意し、プライバシーに関する声明を確認したものとみなされます。",
    "Sign-in with CSP":
      "CSPでサインイン",
    "Sign-in with SSO":
      "SSOでサインイン",
    "Welcome to Cortex":
      "Cortexへようこそ",
    "You’re backed by the world’s most trusted security platform.":
      "世界で最も信頼されているセキュリティプラットフォームがあなたを支えます。",

    // --- Batch: Slack access token sentence (single and two-sentence block variants) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    "In order to use this integration, you need to enter your Slack access token in the {0} integration instance parameter.":
      "このインテグレーションを使用するには、Slackアクセストークンを{0}インテグレーションインスタンスパラメーターに入力する必要があります。",
    "In order to use this integration, you need to enter your Slack access token in the {0} integration instance parameter. The simplest way to acquire this token is for an Org Owner to create a new Slack app, add the admin OAuth scope, install the app, and use the generated token.":
      "このインテグレーションを使用するには、Slackアクセストークンを{0}インテグレーションインスタンスパラメーターに入力する必要があります。このトークンを取得する最も簡単な方法は、Org Ownerが新しいSlackアプリを作成し、admin OAuthスコープを追加してアプリをインストールし、生成されたトークンを使用することです。",
    "Cisco Umbrella Investigate enables you to research domains, IPs, and URLs observed by the Umbrella resolvers.":
      "Cisco Umbrella Investigateを使用すると、Umbrellaリゾルバーで観測されたドメイン、IP、URLを調査できます。",
    "command in the War Room and follow the instruction.":
      "コマンドをWar Roomで実行し、指示に従います。",
    "command to test the connection and the authorization process.":
      "コマンドで、接続と認可プロセスをテストします。",
    "Default Workspace ID (the UUID of the workspace, e.g. 123e4567-e89b-12d3-a456-426614174000)":
      "デフォルトのワークスペースID(ワークスペースのUUID。例: 123e4567-e89b-12d3-a456-426614174000)",
    "Default Workspace Name":
      "デフォルトのワークスペース名",
    "Deprecated. Use Cisco Secure Malware Analytics (Threat Grid) v2 instead.":
      "非推奨です。代わりにCisco Secure Malware Analytics (Threat Grid) v2を使用してください。",
    "Enter your Client ID in the":
      "クライアントIDを入力します:",
    "Enter your redirect URI in the":
      "リダイレクトURIを入力します:",
    "Follow these steps for client-credentials configuration.":
      "クライアント資格情報の構成については、次の手順に従います。",
    "For more details about the authentication used in this integration, see":
      "この統合で使用される認証の詳細については、次を参照してください:",
    "Full documentation for this integration is available in the":
      "この統合の完全なドキュメントは、次で参照できます:",
    "Get the Additional Instance Parameters":
      "追加のインスタンスパラメーターを取得",
    "IAM integration for Clarizen. Handles user account auto-provisioning to Clarizen.":
      "Clarizen向けのIAM統合です。Clarizenへのユーザーアカウントの自動プロビジョニングを処理します。",
    "ID / Client ID":
      "ID / クライアントID",
    "Key / Client Secret":
      "キー / クライアントシークレット",
    "Token / Tenant ID":
      "トークン / テナントID",
    "In the instance configuration, select the":
      "インスタンス構成で、次を選択します:",
    "In the self-deployed mode, you can authenticate by using one of the following flows:":
      "セルフデプロイモードでは、次のいずれかのフローを使用して認証できます:",
    "Locking mechanism that prevents concurrent execution of different tasks":
      "異なるタスクの同時実行を防止するロックメカニズム",
    "Microsoft Integrations - Authentication":
      "Microsoft統合 - 認証",
    "page of the app.":
      "ページ(アプリ内)。",
    "Redirect URI":
      "リダイレクトURI",
    "reference docs":
      "リファレンスドキュメント",
    "Save the integration settings.":
      "統合設定を保存します。",
    "Self-Deployed Application Authentication guide":
      "セルフデプロイアプリケーション認証ガイド",
    "Server URL (e.g., https://management.azure.com)":
      "サーバーURL(例: https://management.azure.com)",
    "Subscription ID":
      "サブスクリプションID",
    "The Certificate Thumbprint is used for certificate authentication as it appears on the":
      "証明書のサムプリントは証明書認証に使用されます。次に表示される値を指定します:",
    "The private key of the registered certificate, used for certificate authentication.":
      "登録済み証明書の秘密鍵で、証明書認証に使用されます。",
    "Used for certificate authentication. The private key of the registered certificate.":
      "証明書認証に使用されます。登録済み証明書の秘密鍵です。",
    "There are two authentication methods available:":
      "利用できる認証方法は2つあります:",
    "to configure and enable authentication.":
      "認証を構成して有効にします。",
    "To use a self-configured Azure application, you need to add a new Azure App Registration in the Azure Portal. To add the registration, go to the":
      "自己構成のAzureアプリケーションを使用するには、Azureポータルで新しいAzureアプリ登録を追加する必要があります。登録を追加するには、次に移動します:",
    "Use a self-deployed Azure application - Authorization Code flow":
      "セルフデプロイのAzureアプリケーションを使用 - 認可コードフロー",
    "Use a self-deployed Azure application - Client Credentials Authorization Flow":
      "セルフデプロイのAzureアプリケーションを使用 - クライアント資格情報による認可フロー",
    "Use a self-deployed Azure application - Client Credentials Flow":
      "セルフデプロイのAzureアプリケーションを使用 - クライアント資格情報フロー",
    "Use Core REST APIs.":
      "Core REST APIを使用します。",
    "Use Gov Account Settings":
      "政府機関アカウントの設定を使用",
    "Use the Code42 integration to identify potential data exfiltration from insider threats while speeding investigation and response by providing fast access to file events and metadata across physical and cloud environments.":
      "Code42統合を使用して、内部脅威による潜在的なデータ流出を特定し、物理環境とクラウド環境全体のファイルイベントとメタデータへ迅速にアクセスすることで、調査と対応を迅速化します。",
    "Workspace ID":
      "ワークスペースID",
    "Workspace Name":
      "ワークスペース名",
    "Workspace Settings":
      "ワークスペース設定",

    // --- Batch: strings from the Collector export #3 (Azure Key Vault / Azure Compute / Azure Risky Users docs, Azure Event Hub & Azure DevOps wizards) ---
    // Fragments such as "and", "or", "The", "Set", "In the", "Run the", "Go to the", "Select the" are intentionally NOT registered.
    ": In Azure, go to Organization Settings → Security → Policies → toggle \"Third-party application access via OAuth\" ON. (":
      ": Azureで、Organization Settings → Security → Policies の順に移動し、「Third-party application access via OAuth」をONにします。(",
    "(Client ID)":
      "(クライアントID)",
    "(Client Secret (for Client Credentials mode))":
      "(クライアントシークレット(クライアント資格情報モード用))",
    "Add consumer group":
      "コンシューマーグループを追加",
    "After authorizing the Demisto app, you will receive an ID, Token, and Key, which needs to be added to the integration instance configuration’s corresponding fields. After giving consent, the application must have a role assigned, so it can access the relevant resources per subscription.":
      "Demistoアプリを認可すると、ID、トークン、キーが発行されます。これらは、統合インスタンス構成の対応するフィールドに追加する必要があります。同意後、アプリケーションには、サブスクリプションごとに関連リソースへアクセスできるよう、ロールを割り当てる必要があります。",
    "After saving the client secret, the value of the client secret is displayed.":
      "クライアントシークレットを保存すると、クライアントシークレットの値が表示されます。",
    "After the Azure Key Vault integration instance is created, the credentials will be fetched":
      "Azure Key Vault統合インスタンスが作成されると、認証情報がフェッチされ、",
    "to the Cortex credentials store in the following format:":
      "Cortexの認証情報ストアに次の形式で保存されます:",
    "At the end of the process you’ll see a message that you’ve logged in successfully.":
      "プロセスの最後に、ログインに成功したことを示すメッセージが表示されます。",
    "Authenticate with your personal Microsoft account. Simple setup via OAuth redirect.":
      "個人のMicrosoftアカウントで認証します。OAuthリダイレクトによる簡単なセットアップです。",
    "Authentication Type":
      "認証タイプ",
    "Authentication Type.":
      "認証タイプ。",
    "Authentication Using the Client Credentials Flow (recommended)":
      "クライアント資格情報フローを使用した認証(推奨)",
    "Authentication Using the Device Flow":
      "デバイスフローを使用した認証",
    "Authorization":
      "認可",
    "Authorize":
      "認可",
    "Authorize Cortex for Azure Key Vault":
      "Azure Key Vault用にCortexを認可",
    "Application ID":
      "アプリケーションID",
    "Azure app registration article":
      "Azureアプリ登録に関する記事",
    "Azure Cloud":
      "Azureクラウド",
    "Azure DevOps auth with Entra ID Prerequisites:":
      "Entra IDによるAzure DevOps認証の前提条件:",
    "Azure Key Vault - permission user_impersonation of type Delegated":
      "Azure Key Vault - タイプDelegatedの権限user_impersonation",
    "Azure Managed Identities":
      "AzureマネージドID",
    "Azure Managed Identities Authentication":
      "AzureマネージドID認証",
    "Azure Managed Identities client ID":
      "AzureマネージドIDのクライアントID",
    "Azure Managed Identities Client ID":
      "AzureマネージドIDのクライアントID",
    "Azure Portal":
      "Azureポータル",
    "Azure Service Management - permission user_impersonation of type Delegated":
      "Azure Service Management - タイプDelegatedの権限user_impersonation",
    "Check Fetches credentials parameter.":
      "「認証情報をフェッチ」パラメーターをオンにします。",
    "Choose Authentication Method":
      "認証方法を選択",
    "Client Secret (for Client Credentials mode)":
      "クライアントシークレット(クライアント資格情報モード用)",
    "command - a ‘Success’ message should be printed to the war-room.":
      "コマンド - War Roomに「Success」メッセージが出力されます。",
    "Configure Account":
      "アカウントを構成",
    "Configure Azure Risky Users on Cortex Navigate to":
      "CortexでAzure Risky Usersを構成します。次に移動します:",
    "Confirm your Azure DevOps organization is connected to Microsoft Entra ID. (":
      "Azure DevOps組織がMicrosoft Entra IDに接続されていることを確認します。(",
    "consumer group":
      "コンシューマーグループ",
    "Copy the Application ID and store it in the Client ID parameter.":
      "アプリケーションIDをコピーし、Client IDパラメーターに保存します。",
    "Copy the Directory (tenant) ID and enter it in the Tenant ID parameter.":
      "Directory (tenant) IDをコピーし、Tenant IDパラメーターに入力します。",
    "Copy the Subscription ID and enter it in the Subscription ID parameter.":
      "Subscription IDをコピーし、Subscription IDパラメーターに入力します。",
    "Copy this value and enter it in the Client Secret parameter.":
      "この値をコピーし、Client Secretパラメーターに入力します。",
    "Copy your resource group name and enter it in the Resource Group Name parameter.":
      "リソースグループ名をコピーし、Resource Group Nameパラメーターに入力します。",
    "Cortex App":
      "Cortexアプリ",
    "Cortex Azure App":
      "Cortex Azureアプリ",
    "Cortex XSOAR Application":
      "Cortex XSOARアプリケーション",
    "Credential Name: KEY_VAULT_NAME/SECRET_NAME":
      "認証情報名: KEY_VAULT_NAME/SECRET_NAME",
    "Credentials Fetch Mode":
      "認証情報のフェッチモード",
    "Debug/Verbose logging is recommended only during troubleshooting. Logging can affect the performance of the integration. Recommended usage is to turn logging on during setup and troubleshooting, and then turn it off in production.":
      "デバッグ/詳細ログの使用は、トラブルシューティング中のみ推奨されます。ログ記録は統合のパフォーマンスに影響する可能性があります。セットアップとトラブルシューティング中はログ記録をオンにし、本番環境ではオフにすることをお勧めします。",
    "Debug/Verbose logging is recommended only during troubleshooting. Logging can affect the performance of the integration. Recommended usage is to turn logging on during setup and troubleshooting, and then turn it off in production. These settings only affect the integration log. The server log is not affected.":
      "デバッグ/詳細ログの使用は、トラブルシューティング中のみ推奨されます。ログ記録は統合のパフォーマンスに影響する可能性があります。セットアップとトラブルシューティング中はログ記録をオンにし、本番環境ではオフにすることをお勧めします。これらの設定は統合ログにのみ影響します。サーバーログには影響しません。",
    "These settings only affect the integration log. The server log is not affected.":
      "これらの設定は統合ログにのみ影響します。サーバーログには影響しません。",
    "Default Resource Group Name":
      "デフォルトのリソースグループ名",
    "Default Subscription ID":
      "デフォルトのサブスクリプションID",
    "Depending on the authentication method that you use, the integration parameters might change.":
      "使用する認証方法によっては、統合のパラメーターが変わる場合があります。",
    "device authorization grant flow":
      "デバイス認可付与フロー",
    "Device authorization grant flow":
      "デバイス認可付与フロー",
    "Device Code":
      "デバイスコード",
    "Enable Azure Event Hub Log Collection":
      "Azure Event Hubログ収集を有効化",
    "Enter account connection string":
      "アカウント接続文字列を入力",
    "Enter event hub connection string":
      "イベントハブ接続文字列を入力",
    "Enter Product":
      "プロダクトを入力",
    "Enter Vendor":
      "ベンダーを入力",
    "Enter your Client Secret in the":
      "クライアントシークレットを入力します:",
    "Enter your Client/Application ID in the":
      "クライアント/アプリケーションIDを入力します:",
    "Enter your Tenant ID in the":
      "テナントIDを入力します:",
    "field in the instance configuration.":
      "(インスタンス構成のフィールド)。",
    "field in the instance settings.":
      "(インスタンス設定のフィールド)。",
    "Entra ID — Choose Identity Type":
      "Entra ID — IDタイプを選択",
    "event hub connection string":
      "イベントハブ接続文字列",
    "External Credentials Vault (on-demand)":
      "外部認証情報ボールト(オンデマンド)",
    "Fetch credentials from Azure Key Vault":
      "Azure Key Vaultから認証情報をフェッチ",
    "Fetches credentials":
      "認証情報をフェッチ",
    "Fill in the required parameters.":
      "必須パラメーターを入力します。",
    "Fill Key Vault names to fetch secrets from.":
      "シークレットのフェッチ元となるKey Vault名を入力します。",
    "Fill secret names to fetch.":
      "フェッチするシークレット名を入力します。",
    "Follow one of these steps for authentication based on Azure Managed Identities:":
      "AzureマネージドIDに基づく認証には、次のいずれかの手順に従います:",
    "Follow the instructions that appear.":
      "表示される指示に従います。",
    "Follow these steps for a":
      "手順に従います:",
    "Follow these steps for a self-deployed configuration:":
      "セルフデプロイ構成の手順に従います:",
    "self-deployed configuration":
      "セルフデプロイ構成",
    "For information about Azure Managed Identities see":
      "AzureマネージドIDの詳細については、次を参照してください:",
    "For more information, see the integration documentation.":
      "詳細については、統合のドキュメントを参照してください。",
    "From App registrations in Azure AD, select your application.":
      "Azure ADのApp registrationsで、アプリケーションを選択します。",
    "Get client ID and tenant ID values":
      "クライアントIDとテナントIDの値を取得",
    "Get client secret value":
      "クライアントシークレットの値を取得",
    "Get Subscription ID and the Resource Group values":
      "サブスクリプションIDとリソースグループの値を取得",
    "Host URL (e.g. https://management.azure.com)":
      "ホストURL(例: https://management.azure.com)",
    "if your security policy does not allow secrets to be stored inside the Cortex credentials store. In this mode, the credentials picker in other integrations will list the configured secrets by name (KEY_VAULT_NAME/SECRET_NAME), but no secret values are pulled from Azure Key Vault. When a playbook or command actually executes an integration that uses one of those credentials, the secret value is fetched live from Azure Key Vault and is passed in memory only. Nothing is persisted in Cortex.":
      "セキュリティポリシーでシークレットをCortexの認証情報ストア内に保存できない場合に使用します。このモードでは、他の統合の認証情報ピッカーに、構成済みのシークレットが名前(KEY_VAULT_NAME/SECRET_NAME)で一覧表示されますが、シークレットの値はAzure Key Vaultから取得されません。プレイブックまたはコマンドが、それらの認証情報のいずれかを使用する統合を実際に実行すると、シークレットの値はAzure Key Vaultからリアルタイムで取得され、メモリ内でのみ渡されます。Cortexには何も保持されません。",
    "In order to fetch credentials to the Cortex credentials store,you should follow the next steps:":
      "認証情報をCortexの認証情報ストアにフェッチするには、次の手順に従います:",
    "In order to use the Cortex Azure application,":
      "Cortex Azureアプリケーションを使用するには、",
    "In the Azure portal, select Entra ID.":
      "Azureポータルで、Entra IDを選択します。",
    "In the Azure portal, select Resource groups.":
      "Azureポータルで、Resource groupsを選択します。",
    "The default mode":
      "デフォルトのモード",
    "keeps the existing behavior: The secret values are fetched and stored in the Cortex credentials store.":
      "は既存の動作を維持します。シークレットの値が取得され、Cortexの認証情報ストアに保存されます。",
    "Key Vault names - a comma separated list of Key Vaults to fetch secrets from.":
      "Key Vault名 - シークレットのフェッチ元となるKey Vaultのカンマ区切りリスト。",
    "Learn how":
      "方法を確認",
    "link new tab icon":
      "新しいタブで開くリンクのアイコン",
    "Make sure the following permissions are granted for the app registration:":
      "アプリ登録に次の権限が付与されていることを確認します:",
    "Make sure to provide the following permissions for the app to work with Azure Risky Users:":
      "アプリがAzure Risky Usersで動作するように、次の権限を付与してください:",
    "Manage policies":
      "ポリシーの管理",
    "Managed Identities":
      "マネージドID",
    "Managed identities for Azure resources":
      "AzureリソースのマネージドID",
    "Microsoft article":
      "Microsoftの記事",
    "Microsoft Entra ID authentication":
      "Microsoft Entra ID認証",
    "Microsoft integrations (Graph and Azure) in Cortex use Entra ID applications to authenticate with Microsoft APIs. These integrations use OAuth 2.0 and OpenID Connect standard-compliant authentication services, which use an Application to sign-in or delegate authentication. For more information, see the Microsoft identity platform overview.":
      "Cortexの Microsoft統合(GraphおよびAzure)は、Entra IDアプリケーションを使用してMicrosoft APIで認証します。これらの統合は、OAuth 2.0とOpenID Connectの標準に準拠した認証サービスを使用しており、アプリケーションを使用してサインインまたは認証の委任を行います。詳細については、Microsoft identity platformの概要を参照してください。",
    "Note: This option is relevant only if the integration is running on Azure VM.":
      "注: このオプションは、統合がAzure VM上で実行されている場合にのみ関係します。",
    "Only necessary in case a Samples Feed is fetched.":
      "サンプルフィードをフェッチする場合にのみ必要です。",
    "Password: SECRET_VALUE":
      "パスワード: SECRET_VALUE",
    "Username: SECRET_NAME":
      "ユーザー名: SECRET_NAME",
    "Provide a description of the secret, and a duration. When done, select Add.":
      "シークレットの説明と有効期間を入力します。完了したら、Addを選択します。",
    "Relevant only for sample feeds. JSON styled AutoFocus query, an example can be found in the description (?) section. mandatory for Samples Feed.":
      "サンプルフィードにのみ関係します。JSON形式のAutoFocusクエリです。例は説明(?)セクションに記載されています。サンプルフィードでは必須です。",
    "Required Permissions":
      "必要な権限",
    "Save the instance.":
      "インスタンスを保存します。",
    "Search for AzureRiskyUsers.":
      "AzureRiskyUsersを検索します。",
    "Secret names - a comma separated list of secrets to fetch.":
      "シークレット名 - フェッチするシークレットのカンマ区切りリスト。",
    "See documentation":
      "ドキュメントを参照",
    "Select Certificates & secrets.":
      "Certificates & secretsを選択します。",
    "Select Client secrets -> New client secret.":
      "Client secrets -> New client secretを選択します。",
    "Select Repositories":
      "リポジトリを選択",
    "Select this checkbox if you are using a self-deployed Azure application.":
      "セルフデプロイのAzureアプリケーションを使用する場合は、このチェックボックスをオンにします。",
    "Select your resource group name.":
      "リソースグループ名を選択します。",
    "Select your User Assigned Managed Identity -> copy the Client ID -> paste it in the":
      "ユーザー割り当てマネージドIDを選択 -> クライアントIDをコピー -> 次に貼り付けます:",
    "Self-Deployed App":
      "セルフデプロイアプリ",
    "Self-Deployed Application":
      "セルフデプロイアプリケーション",
    "Self-Deployed Authentication":
      "セルフデプロイ認証",
    "Self-Deployed Azure App":
      "セルフデプロイのAzureアプリ",
    "Service Principal":
      "サービスプリンシパル",
    "storage account connection string":
      "ストレージアカウント接続文字列",
    "Store in Cortex":
      "Cortexに保存",
    "Support for MSA users through Microsoft Entra OAuth is still in progress on Microsoft's side. (":
      "Microsoft Entra OAuthによるMSAユーザーのサポートは、Microsoft側で現在対応中です。(",
    "Supports CSV values.":
      "CSV値をサポートします。",
    "Tenant ID (for Client Credentials mode)":
      "テナントID(クライアント資格情報モード用)",
    "The mode for fetching credentials. Set to \"External Credentials Vault (on-demand)\" if your security policy does not allow secrets to be stored inside the Cortex credentials store. In this mode, the credentials picker in other integrations lists the configured secrets by name (KEY_VAULT_NAME/SECRET_NAME), but no secret values are pulled from Azure Key Vault. When a playbook or command executes an integration that uses one of those credentials, the secret value is fetched live from Azure Key Vault and is passed in memory only.":
      "認証情報のフェッチモードです。セキュリティポリシーでシークレットをCortexの認証情報ストア内に保存できない場合は、「External Credentials Vault (on-demand)」に設定します。このモードでは、他の統合の認証情報ピッカーに、構成済みのシークレットが名前(KEY_VAULT_NAME/SECRET_NAME)で一覧表示されますが、シークレットの値はAzure Key Vaultから取得されません。プレイブックまたはコマンドが、それらの認証情報のいずれかを使用する統合を実行すると、シークレットの値はAzure Key Vaultからリアルタイムで取得され、メモリ内でのみ渡されます。",
    "There are 2 application authentication methods available:":
      "利用できるアプリケーション認証方法は2つあります:",
    "This parameter can be overridden by the resource_group argument in any command.":
      "このパラメーターは、任意のコマンドのresource_group引数で上書きできます。",
    "To allow us access to Azure Compute, an administrator has to approve the Demisto app using an admin consent flow, by clicking":
      "Azure Computeへのアクセスを許可するには、管理者が管理者の同意フローを使用してDemistoアプリを承認する必要があります。次をクリックします:",
    "To use a self-configured Azure application, add a new Azure App Registration in the Azure Portal. To add the registration, see the":
      "自己構成のAzureアプリケーションを使用するには、Azureポータルで新しいAzureアプリ登録を追加します。登録を追加するには、次を参照してください:",
    "To use a self-configured Azure application, you need to add a new Azure App Registration in the Azure Portal, with mobile and desktop flows enabled.":
      "自己構成のAzureアプリケーションを使用するには、Azureポータルで、モバイルおよびデスクトップフローを有効にした新しいAzureアプリ登録を追加する必要があります。",
    "To use a self-configured Azure application, you need to add a new Azure App Registration in the Azure Portal. To add the registration, refer to the following":
      "自己構成のAzureアプリケーションを使用するには、Azureポータルで新しいAzureアプリ登録を追加する必要があります。登録を追加するには、次を参照してください:",
    "To use System Assigned Managed Identity":
      "システム割り当てマネージドIDを使用するには",
    "To use User Assigned Managed Identity":
      "ユーザー割り当てマネージドIDを使用するには",
    "Token (received from the admin consent - see Detailed Instructions (?) section)":
      "トークン(管理者の同意から取得 - 詳細な手順(?)セクションを参照)",
    "Use a self-deployed Azure Application":
      "セルフデプロイのAzureアプリケーションを使用",
    "Use an application identity (not tied to a person). Requires Entra ID admin to grant consent.":
      "アプリケーションID(個人に紐付かないID)を使用します。Entra IDの管理者による同意の付与が必要です。",
    "Use Azure Managed Identities":
      "AzureマネージドIDを使用",
    "use the Client ID - (application_id) (":
      "Client ID - (application_id)を使用します(",
    "User Authentication":
      "ユーザー認証",
    "Worldwide":
      "全世界",
  },

  patterns: [
    // "1 Instance Configured" / "14 Instances Configured" -> "1 件のインスタンスが設定済み"
    { re: /^(\d+)\s+Instances? Configured$/, tpl: "$1 件のインスタンスが設定済み" },
    // "4/10 connected" -> "4/10 接続済み"
    { re: /^(\d+\/\d+)\s+connected$/, tpl: "$1 接続済み" },
    // "1 selected out of 4" -> "4件中1件選択中"
    { re: /^([\d,]+)\s+selected out of\s+([\d,]+)$/, tpl: "$2件中$1件選択中" },
    // "19 Warnings," -> "19 件の警告,"
    { re: /^(\d+)\s+Warnings,?$/, tpl: "$1 件の警告," },
    // "Found 2 deployed connectors. For all clusters go to" -> "デプロイ済みのコネクタが2件見つかりました。すべてのクラスターを確認するには、以下に移動してください:"
    { re: /^Found (\d+) deployed connectors\. For all clusters go to$/, tpl: "デプロイ済みのコネクタが$1件見つかりました。すべてのクラスターを確認するには、以下に移動してください:" },
    // "433 Errors" -> "433 件のエラー"
    { re: /^(\d+)\s+Errors$/, tpl: "$1 件のエラー" },
    // "1 result" -> "1 件の結果"
    { re: /^(\d+)\s+result$/, tpl: "$1 件の結果" },
    // "( 2 Mapped )" -> "( マッピング済み 2 件 )"
    { re: /^\(\s*(\d+)\s+Mapped\s*\)$/, tpl: "( マッピング済み $1 件 )" },
    // "Integration Author: ANY.RUN" -> "統合の作成者: ANY.RUN"
    { re: /^Integration Author:\s*(.+)$/, tpl: "統合の作成者: $1" },
  ],

  skip: [],
};
