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
  ],

  skip: [],
};
