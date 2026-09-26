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

const dictionaryRulesAndPolicies = {
  exact: {
    "Auto resolve": "自動解決",
    "AI and Machine Learning": "AI・機械学習",
    "Validate Code": "コードを検証",
    "Cloud Type:": "クラウドタイプ:",
    "Issues Count:": "イシュー数:",
    "Findings Count:": "検出結果数:",
    "Cases Count:": "ケース数:",
    "Asset Types:": "資産タイプ:",
    "Mode:": "モード:",
    "Remove the krbtgt service from the account's msDS-AllowedToDelegateTo attribute immediately. In Active Directory Users and Computers, open the account properties, go to the Delegation tab, and remove any entries referencing the krbtgt service. There is no legitimate reason for an account to have constrained delegation to krbtgt. Investigate whether this configuration was set maliciously as it could indicate a persistence mechanism.":
      "アカウントのmsDS-AllowedToDelegateTo属性から、krbtgtサービスを直ちに削除してください。Active Directoryユーザーとコンピューターで、アカウントのプロパティを開き、[委任]タブに移動して、krbtgtサービスを参照しているエントリをすべて削除してください。アカウントがkrbtgtへの制約付き委任を持つ正当な理由はありません。この設定が悪意を持って行われたものかどうかを調査してください。永続化の手口を示している可能性があります。",
    "No Compliance Controls Assigned": "割り当てられたコンプライアンスコントロールがありません",
    "This rule currently has no assigned compliance controls. To assign controls, edit the rule and add the required compliance controls.":
      "このルールには現在、割り当てられたコンプライアンスコントロールがありません。コントロールを割り当てるには、ルールを編集して必要なコンプライアンスコントロールを追加してください。",
    "Certain dynamic filter conditions such as asset fields, are calculated at runtime and not displayed as a part of the policy preview.":
      "アセットフィールドなど、一部の動的なフィルター条件は実行時に計算されるため、ポリシープレビューの一部としては表示されません。",
    "Enter CVE or vulnerability IDs here...": "ここにCVEまたは脆弱性IDを入力してください...",
    "Enter an Asset Group name here...": "ここにアセットグループ名を入力してください...",
    "Enter an asset name or Asset ID here...": "ここに資産名または資産IDを入力してください...",
    "Start typing to search...": "検索するには入力を開始してください...",
    "Ignored CVEs and Assets": "無視されたCVEと資産",
    "Ignored Items": "無視された項目",
    "Ignored Vulnerabilities": "無視された脆弱性",
    "Ignored Asset Groups": "無視されたアセットグループ",
    "Ignored Assets": "無視された資産",
    "Preview": "プレビュー",
    "Select CVEs, Asset Groups, and Assets to ignore from vulnerability policy evaluation.":
      "脆弱性ポリシー評価から除外するCVE、アセットグループ、資産を選択してください。",
    "No Issues will be generated for the following CVEs and vulnerabilities. Findings for these CVEs and vulnerabilities will still appear in the Vulnerability Findings view and will still be counted in dashboards based on Findings data.":
      "以下のCVEおよび脆弱性についてはイシューが生成されません。これらのCVEおよび脆弱性の検出結果は、引き続きVulnerability Findingsビューに表示され、検出結果データに基づくダッシュボードでも引き続きカウントされます。",
    "Vulnerability IDs": "脆弱性ID",
    "No Issues will be generated for the following Asset Groups. Findings for these Asset Groups will still appear in the Vulnerability Findings view and will still be counted in dashboards based on Findings data.":
      "以下のアセットグループについてはイシューが生成されません。これらのアセットグループの検出結果は、引き続きVulnerability Findingsビューに表示され、検出結果データに基づくダッシュボードでも引き続きカウントされます。",
    "No Issues will be generated for the following Assets. Findings for these Assets will still appear in the Vulnerability Findings view and will still be counted in dashboards based on Findings data.":
      "以下の資産についてはイシューが生成されません。これらの資産の検出結果は、引き続きVulnerability Findingsビューに表示され、検出結果データに基づくダッシュボードでも引き続きカウントされます。",
    "Vulnerability Policies - Prevention": "Vulnerability Policies - 防止",
    "Kubernetes Runtime Protection": "Kubernetesランタイム保護",
    "These actions are available for Findings on Kubernetes clusters with Kubernetes Admission Controller activated.":
      "これらのアクションは、Kubernetes Admission Controllerが有効化されているKubernetesクラスター上の検出結果に対して利用可能です。",
    "Learn how to increase coverage.": "カバレッジを高める方法について確認してください。",
    "Kubernetes Pod Actions": "Kubernetes Podアクション",
    "Do nothing": "何もしない",
    "Prevent new deployment requests": "新規デプロイリクエストを防止",
    "Is Malicious": "悪意があるかどうか",
    "Used In Code": "コードで使用中",
    "Used In Deploy": "デプロイで使用中",
    "Used In Runtime": "ランタイムで使用中",
    "Package Subtype": "パッケージサブタイプ",
    "Organization impact": "組織への影響",
    "Show alternatives": "代替案を表示",
    "Assets by software development stage": "ソフトウェア開発ステージ別資産",
    "Image Size": "イメージサイズ",
    "Runtime Function": "ランタイム関数",
    "Trust Score": "信頼スコア",
    "Package Symbols": "パッケージシンボル",
    "Package Author": "パッケージ作成者",
    "Finding First Observed": "検出結果の初回観測日",
    "Framework/Language": "フレームワーク/言語",
    "Policies Count": "ポリシー数",
    "Mapped Cloud Security Rule": "マッピングされたクラウドセキュリティルール",
    "Created Date": "作成日",
    "Suppressions": "抑制",
    "Resource Types": "リソースタイプ",
    "Is Enabled": "有効かどうか",
    "Rule Impact": "ルールの影響",
    "Select Category": "カテゴリを選択",
    "Add Rule Name": "ルール名を追加",
    "Mapped Runtime Rule": "マッピングされたランタイムルール",
    "Add label...": "ラベルを追加...",
    "Select framework": "フレームワークを選択",
    "Select subcategory": "サブカテゴリを選択",
    "Set the general details for this rule": "このルールの一般的な詳細を設定してください",
    "Use Enter to apply a label": "Enterキーでラベルを適用",
    "Enter a name for this rule": "このルールの名前を入力してください",
    "Give this rule a brief description": "このルールの簡単な説明を入力してください",
    "Enter a remediation": "修復方法を入力してください",
    "Name is required": "名前は必須です",
    "Description is required": "説明は必須です",
    "Define the logic for your rule": "ルールのロジックを定義してください",
    "Back": "戻る",
    "Generate Previerw": "プレビューを生成",
    "No Preview": "プレビューなし",
    "To see potential matches, enter your query and click \"Generate Preview\".":
      "一致する可能性のある結果を確認するには、クエリを入力して「Generate Preview」をクリックしてください。",
    "Create Issue": "イシューを作成",
    "Generate Preview": "プレビューを生成",
    "Rule name is required": "ルール名は必須です",
    "Give this Rule a brief description...": "このルールの簡単な説明を入力してください...",
    "Select issue severity": "イシューの重要度を選択",
    "Enable Remediation": "修復を有効にする",
    "(Optional)": "(任意)",
    "Assign a Configuration Rule To Custom Compliance Controls": "設定ルールをカスタムコンプライアンスコントロールに割り当て",
    "You can assign a configuration rule to one or more custom compliance controls to tailor compliance checks to your organization's needs.":
      "組織のニーズに合わせてコンプライアンスチェックを調整するために、1つ以上のカスタムコンプライアンスコントロールに設定ルールを割り当てることができます。",
    "Add actions to take once a rule has been violated.": "ルールに違反した際に実行するアクションを追加してください。",
    "Compliance Controls (": "コンプライアンスコントロール (",
    "Be Advised": "ご注意ください",
    "Switching modes will remove any unsaved edits. Continue?": "モードを切り替えると、保存されていない変更は削除されます。続行しますか?",
    "Rule Logic": "ルールロジック",
    "Define logic for your rule": "ルールのロジックを定義してください",
    "Define the logic for your rule.": "ルールのロジックを定義してください。",
    "Simple Mode": "シンプルモード",
    "Advanced Mode": "詳細モード",
    "instructions": "手順",
    "Define your rule's query. Be sure to follow the": "ルールのクエリを定義してください。必ず以下の",
    "Run query to populate values": "クエリを実行して値を入力",
    "Query validation failed.": "クエリの検証に失敗しました。",
    "Query validated successfully.": "クエリの検証に成功しました。",
    "Affected Asset Type:": "影響を受けるアセットタイプ:",
    "The rule must end with a 'fields' stage.": "ルールは「fields」ステージで終わる必要があります。",
    "Add details for this Config Rule": "このConfig Ruleの詳細を追加",
    "Add details for this Data Rule": "このData Ruleの詳細を追加",
    "Create Data Rule": "Data Ruleを作成",
    "Add details for this Identity Rule": "このIdentity Ruleの詳細を追加",
    "Create Identity Rule": "Identity Ruleを作成",
    "Create Network Exposure Rule": "Network Exposure Ruleを作成",
    "Add details for this Network Exposure Rule": "このNetwork Exposure Ruleの詳細を追加",
    "Add details for this AI Rule": "このAI Ruleの詳細を追加",
    "Create AI Rule": "AI Ruleを作成",
    "Create Attack Path (Legacy) Rule": "Attack Path (Legacy) Ruleを作成",
    "Add details for this Attack Path (Legacy) Rule": "このAttack Path (Legacy) Ruleの詳細を追加",
    "Enter a name for this Rule...": "このルールの名前を入力してください...",
    "Base Images Rules": "ベースイメージルール",
    "Create rules to automatically identify your base images": "ベースイメージを自動的に識別するルールを作成してください",
    "Match Count": "一致件数",
    "No base image rules yet": "ベースイメージルールはまだありません",
    "Create Base Image Rule": "ベースイメージルールを作成",
    "Edit Base Image Rule": "ベースイメージルールを編集",
    // 原文ママ("Operating system"のtypoと思われるが、実機表示の通り"Operation system"をキーにしている)。
    // Verbatim from the product ("Operation system" — likely a typo for "Operating system" — kept as-is
    // to match the real DOM text).
    "Operation system": "オペレーティングシステム",
    "Define actions for when this rule is violated": "このルールに違反した場合のアクションを定義してください",
    "Disable Rule": "ルールを無効化",
    "Disabling rule will resolve the open issues matching the rule.":
      "ルールを無効化すると、そのルールに一致するオープンなイシューが解決されます。",
    "Delete Rule": "ルールを削除",
    "The selected rule will be deleted. However, any issues previously generated by these rules will remain open until resolved.":
      "選択したルールが削除されます。ただし、これらのルールによって過去に生成されたイシューは、解決されるまでオープンのままになります。",
    "Run preview": "プレビューを実行",
    "Preview your results": "結果をプレビュー",
    "Generate preview to see matches": "プレビューを生成して一致結果を確認",
    "This rule will automatically apply to all current and future matches": "このルールは、現在および今後のすべての一致結果に自動的に適用されます",
    "Enter registry": "レジストリを入力してください",
    "Registry is required": "レジストリは必須です",
    "Enter repository": "リポジトリを入力してください",
    "Repository is required": "リポジトリは必須です",
    "Delete Rule?": "ルールを削除しますか?",
    "The selected rule will be deleted. Are you sure you want to proceed?": "選択したルールが削除されます。続行してもよろしいですか?",
    "Based on your query results, the suggested asset-identifying fields appear here. Generated issues will be linked to asset identified by the selected field":
      "クエリの結果に基づき、提案されるアセット識別フィールドがここに表示されます。生成されるイシューは、選択されたフィールドで識別されたアセットにリンクされます",
    "The final 'fields' stage is missing the required 'asset_id' (or 'xdm.asset.id') field.":
      "最後の「fields」ステージに、必須の「asset_id」(または「xdm.asset.id」)フィールドがありません。",
    "The final 'fields' stage is missing the required 'asset_type_id' (or 'xdm.asset.type.id') field.":
      "最後の「fields」ステージに、必須の「asset_type_id」(または「xdm.asset.type.id」)フィールドがありません。",
    "Filter stage with xdm.asset.type.id is required": "xdm.asset.type.idを含むfilterステージが必須です",
    "Last evaluated": "最終評価日時",
    "Detection Rules IDs": "検出ルールID",
    "Action Taken On Missing Information": "情報が欠落している場合に実行されるアクション",
    "Policy name is required.": "ポリシー名は必須です。",
    "Add Policy name": "ポリシー名を追加",
    "This policy name already exists.": "このポリシー名は既に存在します。",
    "No rules selected yet": "まだルールが選択されていません",
    "Add rules": "ルールを追加",
    "Rule Remediation": "ルールの修復",
    "User Rule Remediation": "ユーザールールの修復",
    "Add rules to policy": "ポリシーにルールを追加",
    "Learn about the Prevent action's power, behavior, and prerequisites": "Preventアクションの機能、動作、前提条件について詳しくは",
    "Applicable assets": "対象となる資産",
    "Available actions": "利用可能なアクション",
    "Scope Selection Method": "スコープ選択方法",
    "Default Asset Scopes": "デフォルトのアセットスコープ",
    "Assets Scope": "アセットスコープ",
    "All Cloud Workload Hosts (VM Instances)": "すべてのクラウドワークロードホスト(VMインスタンス)",
    "Open Asset Inventory": "資産インベントリを開く",
    "Asset types not listed above will not be evaluated.": "上記に記載されていない資産タイプは評価されません。",
    "This selection applies the policy and its detection rules to": "この選択により、ポリシーとその検出ルールが適用される対象は、",
    "asset types available at": "資産タイプのうち、利用可能な対象は、",
    "SDLC Stage.": "のSDLCステージです。",
    "When Asset Groups are selected, this policy applies only to": "アセットグループが選択されている場合、このポリシーは以下にのみ適用されます:",
    "Cloud Workload Container Images, Container Instances, Hosts (VM Instances), Serverless Functions or Kubernetes Workloads":
      "クラウドワークロードのコンテナイメージ、コンテナインスタンス、ホスト(VMインスタンス)、サーバーレス関数、またはKubernetesワークロード",
    "asset types in those groups that are available at the": "それらのグループ内の資産タイプのうち、利用可能な対象は、",
    "Other asset types in the Asset Groups are not evaluated.": "アセットグループ内のその他の資産タイプは評価されません。",
    "Select an Action": "アクションを選択",
    "Issue Severity": "イシューの重要度",
    "Add remediation guidance": "修復ガイダンスを追加",
    "Issues are automatically resolved when the finding is no longer applicable to the asset or when the affected asset is removed from the inventory.":
      "検出結果が資産に該当しなくなった場合、または影響を受けた資産がインベントリから削除された場合、イシューは自動的に解決されます。",
    "Preview Selection": "選択内容をプレビュー",
    "Selected Asset Preview": "選択した資産のプレビュー",
    "Add labels...": "ラベルを追加...",
    "Maximum of 50 labels": "最大50個のラベル",
    "Start Timestamp": "開始タイムスタンプ",
    "End Timestamp": "終了タイムスタンプ",
    "Last Modified By": "最終更新者",
    "Findings Count": "検出結果数",
    "Issues Count": "イシュー数",
    "Cases Count": "ケース数",
    "Compliance Standards": "コンプライアンス基準",
    "Last Execution Time": "最終実行日時",
    "SaaS Pillar": "SaaSピラー",
    "All Matching Filter Criteria": "すべてのフィルター条件に一致",
    "From Rules List": "ルール一覧から",
    "Select rules for this Policy": "このポリシーのルールを選択",
    "Select which rules to be alerted on by using the options available below": "以下のオプションを使用して、アラートを発生させるルールを選択してください",
    "Add details for this Policy": "このポリシーの詳細を追加",
    "View selected": "選択済みを表示",
    "Making this selection will likely create a large volume of issues. For a more relevant and high fidelity issues, use a filtered selection.":
      "この選択を行うと、大量のイシューが生成される可能性があります。より関連性が高く精度の高いイシューにするには、絞り込んだ選択を使用してください。",
    "Select which scope to be alerted on by using the options available below": "以下のオプションを使用して、アラートを発生させるスコープを選択してください",
    "From Asset Groups": "アセットグループから",
    "Create a Policy for Issue creation": "イシュー作成用のポリシーを作成",
    "Create a Policy for Prevention": "防止用のポリシーを作成",
    "From Cloud Accounts": "クラウドアカウントから",
    "Define the detection rule by specifying the criteria to match relevant Malware findings. You can also add exclusion criteria to filter out any Malware findings that meet specific conditions you want to exclude from this policy.":
      "関連するマルウェア検出結果に一致する条件を指定して、検出ルールを定義してください。また、このポリシーから除外したい特定の条件に一致するマルウェア検出結果を除外するための、除外条件を追加することもできます。",
    "Set a name and description for the policy.": "ポリシーの名前と説明を設定してください。",
    "Enter a name for your policy": "ポリシーの名前を入力してください",
    "Enter a description": "説明を入力してください",
    "CVE Publish Date": "CVE公開日",
    "CVE Description": "CVEの説明",
    "Package PURL": "パッケージPURL",
    "Package File Creation Time": "パッケージファイル作成日時",
    "Package Licenses": "パッケージライセンス",
    "Layer ID": "レイヤーID",
    "Image": "イメージ",
    "Is derived": "派生かどうか",
    "Image Name": "イメージ名",
    "Volume Asset IDs": "ボリューム資産ID",
    "Volume Path": "ボリュームパス",
    "Platform ID": "プラットフォームID",
    "Vulnerability Source Asset ID": "脆弱性ソース資産ID",
    "Vulnerability Source Asset": "脆弱性ソース資産",
    "Kubernetes Cluster Name": "Kubernetesクラスター名",
    "Kubernetes Namespace Name": "Kubernetesネームスペース名",
    "AST Intrusion Level": "AST侵入レベル",
    "Affected Services": "影響を受けるサービス",
    "Affected Service Versions": "影響を受けるサービスバージョン",
    "Authentication Status": "認証ステータス",
    "AST Vulnerability Status": "AST脆弱性ステータス",
    "Create a query to select the Findings to take an action on": "アクションを実行する検出結果を選択するクエリを作成してください",
    "Create a query to select the Findings to take an action on.": "アクションを実行する検出結果を選択するクエリを作成してください。",
    "Limit the assets the policy applies to by setting a scope.": "スコープを設定して、このポリシーが適用される資産を制限してください。",
    "Scope to Asset Groups": "アセットグループにスコープを設定",
    "Choose one or more Asset Groups if you want to limit this Policy to Findings from those specific Assets.":
      "このポリシーを特定の資産からの検出結果に限定したい場合は、1つ以上のアセットグループを選択してください。",
    "Create new Asset Group": "新しいアセットグループを作成",
    "The selected actions will be executed automatically when a finding matches a policy.": "選択したアクションは、検出結果がポリシーに一致すると自動的に実行されます。",
    "Global Actions": "グローバルアクション",
    "These actions are available for all Findings.": "これらのアクションはすべての検出結果で利用できます。",
    "Set Issue Severity": "イシューの重要度を設定",
    "Create an Issue for each matching Finding.": "一致する検出結果ごとにイシューを作成します。",
    "Ignore matching Findings, do not create Issues": "一致する検出結果を無視し、イシューを作成しません",
    "Use Default CVE Severity": "デフォルトのCVE重要度を使用",
    "Last Triggered": "最終トリガー日時",
    "Related Detection Rules": "関連する検出ルール",
    "Is Custom": "カスタムかどうか",
    "Asset Group IDs": "アセットグループID",
    "Override Issue Severity": "イシューの重要度を上書き",
    "Is Editable": "編集可能かどうか",
    "Is Cloneable": "複製可能かどうか",
    "Suggestion ID": "提案ID",
    "Triggers & Actions": "トリガーとアクション",
    "Application Security policies define how to respond to code, image, and misconfiguration findings. You can either block the risk (prevent) or create an issue for remediation (detect). Use them to enforce consistent, automated responses to risks before they reach production":
      "Application Securityポリシーは、コード、イメージ、設定ミスの検出結果への対応方法を定義します。リスクをブロックする(防止)か、修復のためのイシューを作成する(検出)かを選択できます。これらを使用することで、リスクが本番環境に到達する前に、一貫した自動対応を強制できます",
    "Code & Image scanners": "コード&イメージスキャナー",
    "Scans your code and images for security issues throughout the development lifecycle.":
      "開発ライフサイクル全体を通じて、コードとイメージのセキュリティイシューをスキャンします。",
    "CI/CD configuration scanner": "CI/CD設定スキャナー",
    "Scans your CI/CD and Version Control System (VCS) environments for insecure configurations.":
      "CI/CD環境とバージョン管理システム(VCS)環境の安全でない設定をスキャンします。",
    "Drift detection scanner": "ドリフト検出スキャナー",
    "Specify the conditions define this policy. When you select multiple finding types, only common filters are available. To apply specific filters for each finding type, use the \"OR\" operator to create separate conditions groups.":
      "このポリシーを定義する条件を指定してください。複数の検出結果タイプを選択した場合、共通のフィルターのみ使用可能です。検出結果タイプごとに個別のフィルターを適用するには、「OR」演算子を使用して条件グループを分けて作成してください。",
    "Finding Type": "検出結果タイプ",
    "Add filter": "フィルターを追加",
    "Add condition group": "条件グループを追加",
    "Shared": "共有",
    "Shared filters": "共有フィルター",
    "Finding Category": "検出結果カテゴリ",
    "The category of detected security findings. A category can include multiple finding types.":
      "検出されたセキュリティ検出結果のカテゴリです。1つのカテゴリに複数の検出結果タイプを含めることができます。",
    "Code filters": "コードフィルター",
    "Indicates whether a finding is part of the security technical debt or newly introduced. Backlog: Findings that existed before the Cortex scanner was first enabled or before a third-party scanner was first ingested for the repository. New: Findings detected afterward.":
      "検出結果がセキュリティの技術的負債の一部か、新たに発生したものかを示します。Backlog: Cortexスキャナーが最初に有効化される前、またはそのリポジトリでサードパーティ製スキャナーが最初に取り込まれる前から存在していた検出結果。New: それ以降に検出された検出結果。",
    "Filters findings by their assigned risk impact level to (e.g., Critical, High, Medium, or Low).":
      "割り当てられたリスク影響度レベル(重大、高、中、低など)で検出結果をフィルターします。",
    "Respect Developer Suppression": "開発者による抑制を尊重",
    "AppSec Rule": "AppSecルール",
    "AppSec Rule Label": "AppSecルールラベル",
    "AppSec Rule Category": "AppSecルールカテゴリ",
    "Has An Automated Fix": "自動修正の有無",
    "Iac Tag": "IaCタグ",
    "Compliance Controls": "コンプライアンスコントロール",
    "Specific security controls related to the finding within a compliance standard (e.g., \"Encryption at Rest\"":
      "コンプライアンス基準内で、検出結果に関連する特定のセキュリティコントロールです(例:「Encryption at Rest」",
    "Filters findings based on specific regulatory frameworks like PCI-DSS, SOC2, or HIPAA.":
      "PCI-DSS、SOC2、HIPAAなどの特定の規制フレームワークに基づいて検出結果をフィルターします。",
    "Filters Infrastructure-as-Code (IaC) resources based on metadata tags (e.g., Environment: Production, Owner: DevOps).":
      "メタデータタグ(例: Environment: Production、Owner: DevOps)に基づいて、Infrastructure-as-Code(IaC)リソースをフィルターします。",
    "Identifies findings that can be resolved automatically via a generated Pull Request or an automated patch.":
      "生成されたプルリクエストまたは自動パッチによって自動的に解決できる検出結果を特定します。",
    "Secret Validity": "シークレットの有効性",
    "Filters based on whether the detected secret is still active and usable by an attacker (e.g., Valid, Invalid, No Validation, or Unavailable).":
      "検出されたシークレットが依然として有効で、攻撃者が使用可能かどうか(例: Valid、Invalid、No Validation、Unavailable)に基づいてフィルターします。",
    "Repository File Path": "リポジトリのファイルパス",
    "Filters based on the specific location of a file within your source code repository.":
      "ソースコードリポジトリ内のファイルの特定の場所に基づいてフィルターします。",
    "Image filters": "イメージフィルター",
    "Secret Type": "シークレットタイプ",
    "Filters findings by the category of the exposed secret or the service it belongs to (e.g., AWS Access Key, Stripe API Token, SSH Private Key, or Password).":
      "公開されたシークレットのカテゴリ、またはそれが属するサービス(例: AWS Access Key、Stripe API Token、SSH Private Key、Password)で検出結果をフィルターします。",
    "Targets specific files or directories located within a container image filesystem.":
      "コンテナイメージファイルシステム内にある特定のファイルまたはディレクトリを対象とします。",
    "Filters by the specific name of a file discovered in a scan (e.g., id_rsa, passwd, or config.yaml).":
      "スキャンで発見されたファイルの特定の名前(例: id_rsa、passwd、config.yaml)でフィルターします。",
    "File Size": "ファイルサイズ",
    "Filters based on the total data size of the file (e.g., files larger than 100MB or exactly 0KB).":
      "ファイルの総データサイズ(例: 100MBより大きいファイル、または正確に0KBのファイル)に基づいてフィルターします。",
    "File Line": "ファイル行",
    "Identifies the specific line number within a file where the finding was detected (e.g., line 42).":
      "検出結果が見つかったファイル内の特定の行番号(例: 42行目)を特定します。",
    "File Owner Name": "ファイル所有者名",
    "Filters by the username of the account that owns the file on the system (e.g., root, admin, or www-data).":
      "システム上でそのファイルを所有するアカウントのユーザー名(例: root、admin、www-data)でフィルターします。",
    "File Group Name": "ファイルグループ名",
    "Filters by the name of the primary group assigned to the file (e.g., sudo, docker, or users).":
      "そのファイルに割り当てられたプライマリグループの名前(例: sudo、docker、users)でフィルターします。",
    "File Group ID": "ファイルグループID",
    "Filters by the numeric Group ID (GID) assigned to the file (e.g., GID 1001).":
      "そのファイルに割り当てられた数値のグループID(GID)(例: GID 1001)でフィルターします。",
    "File Permissions - owner": "ファイル権限 - 所有者",
    "Filters by the specific access rights granted to the file's owner (e.g., rwx, rw, or r).":
      "そのファイルの所有者に付与された特定のアクセス権(例: rwx、rw、r)でフィルターします。",
    "File Permissions - group": "ファイル権限 - グループ",
    "Filters by the access rights granted to members of the file's assigned group (e.g., r, rw or rwx).":
      "そのファイルに割り当てられたグループのメンバーに付与されたアクセス権(例: r、rw、rwx)でフィルターします。",
    "File Permissions - others": "ファイル権限 - その他",
    "Filters by \"World\" permissions—access granted to any user on the system (e.g., checking for rw to find publicly writable files).":
      "「World」権限(システム上の任意のユーザーに付与されたアクセス権)でフィルターします(例: 公開書き込み可能なファイルを見つけるためにrwを確認する)。",
    "File Owner ID": "ファイル所有者ID",
    "Filters by the numeric User ID (UID) of the file owner (e.g., UID 0 for root).":
      "ファイル所有者の数値のユーザーID(UID)(例: rootの場合はUID 0)でフィルターします。",
    "Filters for vulnerabilities with known, documented exploits available in the wild (e.g., CISA KEV list).":
      "実際に悪用が確認され、文書化されたエクスプロイトが存在する脆弱性でフィルターします(例: CISA KEVリスト)。",
    "CVE ID": "CVE ID",
    "Filters by the unique Common Vulnerabilities and Exposures identifier associated with the finding (e.g., CVE-2021-44228).":
      "検出結果に関連付けられた一意のCommon Vulnerabilities and Exposures識別子(例: CVE-2021-44228)でフィルターします。",
    "Filters by the Common Vulnerability Scoring System impact level, often derived from a numerical score (e.g., Critical, High, Medium, or Low).":
      "多くの場合、数値スコアから算出されるCommon Vulnerability Scoring Systemの影響度レベル(例: Critical、High、Medium、Low)でフィルターします。",
    "Filters findings based on their numerical CVSS score, typically ranging from 0.0 to 10.0 (e.g., values greater than or equal to 7.5).":
      "通常0.0から10.0の範囲となる数値のCVSSスコア(例: 7.5以上の値)に基づいて検出結果をフィルターします。",
    "Filters based on the Exploit Prediction Scoring System probability score, which estimates the likelihood of a vulnerability being exploited in the next 30 days (e.g., scores higher than 0.1).":
      "今後30日以内に脆弱性が悪用される可能性を推定する、Exploit Prediction Scoring Systemの確率スコア(例: 0.1より高いスコア)に基づいてフィルターします。",
    "Has A Fix": "修正の有無",
    "Filter findings with a documented resolution or patch available.": "文書化された解決策またはパッチが利用可能な検出結果をフィルターします。",
    "Is Kev": "KEVかどうか",
    "Filters for vulnerabilities listed in the CISA Known Exploited Vulnerabilities catalog, which are confirmed to be actively exploited in the wild.":
      "CISA Known Exploited Vulnerabilitiesカタログに掲載されている、実際に積極的な悪用が確認されている脆弱性でフィルターします。",
    "CVE Fix Available Date": "CVE修正利用可能日",
    "Filters based on the date a fix or patch was first released for the vulnerability (e.g., fixes released within the last 30 days).":
      "その脆弱性に対する修正またはパッチが最初にリリースされた日付(例: 過去30日以内にリリースされた修正)に基づいてフィルターします。",
    "Package Version": "パッケージバージョン",
    "Targets specific versions or ranges of a software package (e.g., 1.2.3 or <2.0.0).":
      "ソフトウェアパッケージの特定のバージョンまたはバージョン範囲(例: 1.2.3または<2.0.0)を対象とします。",
    "Filters by the name of the specific library or software component (e.g., openssl, lodash, or log4j-core).":
      "特定のライブラリまたはソフトウェアコンポーネントの名前(例: openssl、lodash、log4j-core)でフィルターします。",
    "Filters based on the date the vulnerability was officially added to the CVE registry.":
      "その脆弱性が正式にCVEレジストリに追加された日付に基づいてフィルターします。",
    "Targets specific characteristics of a vulnerability's impact or ease of use (e.g., Remote Execution, DoS - High, or Attack Complexity: Low).":
      "脆弱性の影響や悪用の容易さに関する特定の特性(例: Remote Execution、DoS - High、Attack Complexity: Low)を対象とします。",
    "Filters findings by searching for specific keywords or technical details within the official vulnerability summary (e.g., searching for \"buffer overflow,\" \"zero-day,\" or \"unauthenticated access\").":
      "公式の脆弱性概要内の特定のキーワードや技術的な詳細(例:「buffer overflow」「zero-day」「unauthenticated access」を検索)を検索して、検出結果をフィルターします。",
    "Identifies the specific version(s) of a package or software where the vulnerability has been patched (e.g., 1.2.4, 2.0.1).":
      "その脆弱性が修正されたパッケージまたはソフトウェアの特定のバージョン(例: 1.2.4、2.0.1)を特定します。",
    "Grace Period": "猶予期間",
    "The number of days a finding is allowed to exist before it begins blocking PRs or builds. This is calculated from the Fix Date (for fixable issues) or the Publish Date (if no fix is available).":
      "検出結果がPRやビルドのブロックを開始するまでに許容される日数です。修正可能なイシューについては修正日から、修正が利用できない場合は公開日から計算されます。",
    "Package Popularity": "パッケージの人気度",
    "Identifies packages based on their adoption metrics (e.g., GitHub stars, download counts). Low popularity can often signal higher supply chain risk.":
      "採用状況の指標(例: GitHubのスター数、ダウンロード数)に基づいてパッケージを特定します。人気度が低いことは、多くの場合サプライチェーンリスクの高さを示唆します。",
    "Package Deprecated": "パッケージの非推奨",
    "Filters for packages that have been officially marked as \"deprecated\" or \"end-of-life\" by their maintainers":
      "メンテナーによって正式に「非推奨(deprecated)」または「サポート終了(end-of-life)」とマークされたパッケージでフィルターします",
    "Package Maintained": "パッケージのメンテナンス状況",
    "Filters based on the activity level of the package's repository, such as the frequency of recent commits or bug fixes":
      "そのパッケージのリポジトリの活動レベル(直近のコミットやバグ修正の頻度など)に基づいてフィルターします",
    "Evaluates the long-term viability of a package based on community health, update frequency, and maintenance history":
      "コミュニティの健全性、更新頻度、メンテナンス履歴に基づいて、パッケージの長期的な存続可能性を評価します",
    "Package Dependency": "パッケージの依存関係",
    "Allows you to filter by the specific relationship of a package—whether it is a direct dependency or a transitive (indirect) one":
      "パッケージの具体的な関係(直接依存か、推移的(間接的)依存か)でフィルターできます",
    "Is AI/ML": "AI/MLかどうか",
    "Identifies libraries and frameworks specifically associated with Artificial Intelligence and Machine Learning (e.g., PyTorch, TensorFlow).":
      "人工知能・機械学習に特化して関連するライブラリやフレームワーク(例: PyTorch、TensorFlow)を特定します。",
    "Affected Software": "影響を受けるソフトウェア",
    "Filters findings based on the specific software components, applications, or libraries impacted by a vulnerability (e.g., OpenSSL)":
      "脆弱性の影響を受ける特定のソフトウェアコンポーネント、アプリケーション、ライブラリ(例: OpenSSL)に基づいて検出結果をフィルターします",
    "A boolean (True/False) indicator that identifies whether a vulnerability was inherited from the base image or introduced by the application layers (e.g., True means the flaw exists in the parent image, such as node:alpine or ubuntu:latest).":
      "脆弱性がベースイメージから継承されたものか、アプリケーションレイヤーで発生したものかを示す真偽値(True/False)です(例: Trueの場合、node:alpineやubuntu:latestなどの親イメージにその欠陥が存在することを意味します)。",
    "Filters findings based on the specific filesystem layer of a container image, identified by its unique SHA-256 hash.":
      "一意のSHA-256ハッシュで識別される、コンテナイメージの特定のファイルシステムレイヤーに基づいて検出結果をフィルターします。",
    "The broad name of the OS (e.g., Linux, Windows).": "OSの大まかな名称です(例: Linux、Windows)。",
    "The specific flavor of the OS (e.g., Ubuntu, RedHat, Debian).": "OSの具体的な種類です(例: Ubuntu、RedHat、Debian)。",
    "The specific version or \"point release\" of the distribution (e.g., 22.04 or 8.5).":
      "そのディストリビューションの具体的なバージョン、いわゆる「ポイントリリース」です(例: 22.04や8.5)。",
    "Filters based on when the package file was first generated or built.": "パッケージファイルが最初に生成またはビルドされた時期に基づいてフィルターします。",
    "Groups OS versions by their common ancestry (e.g., Debian-based, RHEL-based).":
      "共通の系統(例: Debian系、RHEL系)によってOSバージョンをグループ化します。",
    "Filters by the specific legal license assigned to a package (e.g., MIT, Apache 2.0).":
      "パッケージに割り当てられた特定のライセンス(例: MIT、Apache 2.0)でフィルターします。",
    "Filters by the Package URL (PURL), a standardized way to identify packages across different ecosystems (e.g., pkg:npm/lodash@4.17.21).":
      "さまざまなエコシステム間でパッケージを識別するための標準化された方法であるPackage URL(PURL)(例: pkg:npm/lodash@4.17.21)でフィルターします。",
    "The ecosystem the package belongs to (e.g., npm, PyPI, Maven, Go, or OS-level packages).":
      "そのパッケージが属するエコシステムです(例: npm、PyPI、Maven、Go、またはOSレベルのパッケージ)。",
    "Filters by the specific underlying hardware or cloud architecture (e.g., x86_64, arm64).":
      "基盤となる特定のハードウェアまたはクラウドアーキテクチャ(例: x86_64、arm64)でフィルターします。",
    "Image Provider": "イメージプロバイダー",
    "Identifies the source or registry where the package was retrieved (e.g., Docker Hub, JFrog Artifactory, or AWS ECR).":
      "そのパッケージを取得した提供元やレジストリ(例: Docker Hub、JFrog Artifactory、AWS ECR)を特定します。",
    "Filters by the action required to resolve a vulnerability": "その脆弱性を解決するために必要なアクションでフィルターします",
    "Filters by the unique identifier for a specific category of finding (finding type id)":
      "特定の検出結果カテゴリの一意の識別子(finding type id)でフィルターします",
    "License Type": "ライセンスタイプ",
    "Filters by the specific name of the legal license assigned to a package (e.g., MPL-2.0, MS-RL, or Sendmail-8.23).":
      "パッケージに割り当てられた特定のライセンス名(例: MPL-2.0、MS-RL、Sendmail-8.23)でフィルターします。",
    "License Category": "ライセンスカテゴリ",
    "Groups packages by their legal risk or permission category (e.g., Non permissive, Strong copyleft, Weak copyleft).":
      "法的リスクや許諾のカテゴリ(例: Non permissive、Strong copyleft、Weak copyleft)によってパッケージをグループ化します。",
    "Maintained": "メンテナンスされているかどうか",
    "Popularity": "人気度",
    "Filters by the specific Common Weakness Enumeration identifier assigned to a software flaw (e.g., CWE-79 for Cross-Site Scripting or CWE-89 for SQL Injection).":
      "ソフトウェアの欠陥に割り当てられた特定のCommon Weakness Enumeration識別子(例: クロスサイトスクリプティングのCWE-79、SQLインジェクションのCWE-89)でフィルターします。",
    "Language": "言語",
    "Filters findings based on the programming language of the source code where the issue was detected (e.g., Java, Python, Go, or JavaScript).":
      "イシューが検出されたソースコードのプログラミング言語(例: Java、Python、Go、JavaScript)に基づいて検出結果をフィルターします。",
    "OWASP Category": "OWASPカテゴリ",
    "Maps findings to the \"Top 10\" web application security risks defined by the Open Web Application Security Project (e.g., A01:2021-Broken Access Control).":
      "検出結果を、Open Web Application Security Projectが定義するWebアプリケーションセキュリティリスクの「Top 10」(例: A01:2021-Broken Access Control)にマッピングします。",
    "Identifies the origin of the data or the specific tool that reported the finding (e.g., semgrep, checkmarx or other specific third-party security integration).":
      "そのデータの発生元、またはその検出結果を報告した特定のツール(例: semgrep、checkmarx、その他の特定のサードパーティ製セキュリティ連携)を特定します。",
    "Filters findings based on the specific scanning engine or technique used to identify them":
      "検出結果の特定に使用された特定のスキャンエンジンや技術に基づいて検出結果をフィルターします",
    "File SHA256": "ファイルSHA256",
    "Create asset groups": "アセットグループを作成",
    "Build images do not support application-related filters.": "ビルドイメージはアプリケーション関連のフィルターに対応していません。",
    "Select either a predefined asset group or apply dynamic filters to target relevant assets. If no selection is made, all assets within your granted scope are included. The policy scope is determined by your SBAC permissions at the time the policy is saved (creation or update). Changes to your SBAC do not automatically modify existing policies.":
      "事前定義されたアセットグループを選択するか、動的フィルターを適用して対象となる資産を指定してください。何も選択しない場合、付与されたスコープ内のすべての資産が対象になります。ポリシーのスコープは、ポリシーが保存された時点(作成または更新時)のSBAC権限によって決まります。SBACへの変更が、既存のポリシーに自動的に反映されることはありません。",
    "Application Business Criticality": "アプリケーションのビジネス重要度",
    "Application Business Owner": "アプリケーションのビジネスオーナー",
    "Image Names": "イメージ名",
    "Source Branch": "ソースブランチ",
    "Repository Id": "リポジトリID",
    "Is Public Repository": "公開リポジトリかどうか",
    "Has Deployed Assets": "デプロイ済みの資産があるか",
    "Has Internet-exposed deployed assets": "インターネットに公開されたデプロイ済み資産があるか",
    "Has deployed assets with Access to sensitive data": "機密データへのアクセス権を持つデプロイ済み資産があるか",
    "Has deployed assets with privileged capabilities": "特権を持つデプロイ済み資産があるか",
    "Image Architecture": "イメージアーキテクチャ",
    "Organization URL": "組織のURL",
    "Automated security scanning that runs every 12 hours or on manual request, according to the repository scan configuration.":
      "リポジトリのスキャン設定に従って、12時間ごとまたは手動リクエスト時に実行される自動セキュリティスキャンです。",
    "Block CI": "CIをブロック",
    "Block PR": "PRをブロック",
    "PR Comment": "PRコメント",
    "Registry Image Scan": "レジストリイメージスキャン",
    "Report CI": "CIをレポート",
    "Security scanning of container images in the registry.": "レジストリ内のコンテナイメージのセキュリティスキャンです。",
    "Security scans triggered during the CI pipeline after a container image is built from code.":
      "コードからコンテナイメージがビルドされた後、CIパイプライン中にトリガーされるセキュリティスキャンです。",
    "Security scans triggered during the CI pipeline to evaluate source code.":
      "ソースコードを評価するために、CIパイプライン中にトリガーされるセキュリティスキャンです。",
    "Security scans triggered when a pull request or merge request is created or updated in your version control system.":
      "バージョン管理システムでプルリクエストまたはマージリクエストが作成・更新された際にトリガーされるセキュリティスキャンです。",
    "Select the triggers that enforce this policy. For each trigger, select at least one action to take when the conditions and scope are met.":
      "このポリシーを適用するトリガーを選択してください。各トリガーについて、条件とスコープが満たされたときに実行するアクションを少なくとも1つ選択してください。",
    "Your policy is ready. Review the details and click Done to enable it.": "ポリシーの準備ができました。詳細を確認し、「完了」をクリックして有効にしてください。",
    "Application Security Policy": "Application Securityポリシー",
    "Code & Image Scanner policy": "コード&イメージスキャナーポリシー",
    "Important": "重要",
    "Override severity": "重要度を上書き",
    "Keep finding's severity": "検出結果の重要度を維持",
    "every 12 hours": "12時間ごと",
    "Based on your coverage and findings, we recommend the following prevention policies. You can apply them as suggested, review and edit them using View details, or dismiss a recommendation. If dismissed, a new recommendation may appear.":
      "カバレッジと検出結果に基づき、以下の防止ポリシーを推奨します。提案どおりに適用することも、「詳細を表示」で確認・編集することも、推奨事項を却下することもできます。却下すると、新しい推奨事項が表示される場合があります。",
    "Dismiss": "却下",
    "View Assets >": "資産を表示 >",
    // 各推奨カードの本文とタイトル(旧: "Block KEV vulnerabilities"等の
    // タイトル、および本文の固定文字列/パターンをここに直接登録していた)は、
    // content.js側でcas-recommendations-panel p[ucardcontent] /
    // u-card-titleを固定辞書から除外しAI翻訳(動的翻訳)対象に変更したため、
    // この辞書ファイルからは削除した(本文だけをAI翻訳対象にすると、固定
    // 辞書にあるタイトルだけ訳文になり、辞書に無い新しいタイトルは原文の
    // ままになって混在してしまうため)。
    // The body text AND title of each recommendation card (previously registered here — titles like
    // "Block KEV vulnerabilities", and the body as fixed exact-match/pattern entries) have been removed
    // from this dictionary file: content.js now excludes both
    // cas-recommendations-panel p[ucardcontent] and cas-recommendations-panel u-card-title from the
    // fixed dictionary and makes them eligible for AI (dynamic) translation instead, so a title without
    // a fixed-dictionary entry doesn't stay in English while the body is translated.
    "Select severity": "重要度を選択",
    "Show rule definition": "ルール定義を表示",
    "Rule definition": "ルール定義",
    "Rule settings": "ルール設定",
    "Select scanner": "スキャナーを選択",
    "Agentless disk-scan": "エージェントレスディスクスキャン",
    "Scan storage snapshots for risks without requiring a resident agent": "常駐エージェントを必要とせずに、ストレージスナップショットのリスクをスキャンします",
    "Scan cluster resources and configurations for compliance and security risks via the Kubernetes API":
      "Kubernetes API経由で、コンプライアンスおよびセキュリティリスクについてクラスターのリソースと設定をスキャンします",
    "XDR agent": "XDRエージェント",
    "Offering a tailored approach to compliance validation by executing user-defined Python scripts":
      "ユーザー定義のPythonスクリプトを実行することで、コンプライアンス検証に合わせたアプローチを提供します",
    "Refresh Needed": "更新が必要です",
    "The page might be outdated or the session is expired": "ページが古くなっているか、セッションの有効期限が切れている可能性があります",
    "Select the scanner type to execute the custom detection rule and its associated script":
      "カスタム検出ルールとそれに関連するスクリプトを実行するスキャナータイプを選択してください",
    "Select operating system": "オペレーティングシステムを選択",
    "Input file(s) path": "入力ファイルのパス",
    "Input file(s) path is required": "入力ファイルのパスは必須です",
    "Add remediation steps here": "ここに修復手順を追加",
    "Severity is required": "重要度は必須です",
    "Kubernetes Resources is required": "Kubernetesリソースは必須です",
    "Select Kubernetes Resources": "Kubernetesリソースを選択",
    "Review custom code execution agreement": "カスタムコード実行に関する同意事項の確認",
    "You understand and agree that the Python scripts you provided for this \"Custom Code Execution\" capability will be executed in your cloud environment(s). By clicking \"I agree\", you acknowledge and agree to the following terms and conditions:":
      "この「Custom Code Execution」機能のために提供したPythonスクリプトが、お客様のクラウド環境で実行されることを理解し、同意するものとします。「I agree」をクリックすることで、以下の利用規約に同意し、承諾したことになります:",
    "This capability is solely for the purpose of enabling you to define the compliance check rules for your cloud environment(s). Any other purposes are expressly prohibited.":
      "この機能は、お客様のクラウド環境のコンプライアンスチェックルールを定義できるようにすることのみを目的としています。それ以外の目的での使用は明示的に禁止されています。",
    "Any actions involving": "以下の操作を、お客様のクラウド環境に対して実行することは固く禁止されています:",
    "WRITE, MODIFY": "WRITE、MODIFY",
    ", or": "、または",
    "operations of your cloud environment(s) are strictly prohibited. It is your responsibility to ensure that your custom Python scripts only perform read-only operations of your cloud environment(s) explicitly for compliance check purposes.":
      "。カスタムPythonスクリプトが、コンプライアンスチェックの目的でのみ、クラウド環境に対する読み取り専用の操作を行うことを保証するのはお客様の責任です。",
    "You are solely responsible for the quality, content, use, and execution results of your Python script. You assume all risks and liabilities arising from executing your Python script(s), including any potential errors, damages, or consequences resulting from its use.":
      "お客様のPythonスクリプトの品質、内容、使用、および実行結果について、お客様が単独で責任を負うものとします。お客様は、Pythonスクリプトの実行から生じるすべてのリスクと責任(使用に起因する潜在的なエラー、損害、結果を含む)を負うものとします。",
    "I agree": "同意する",
    "Custom code execution approved": "カスタムコード実行が承認されました",
    "View agreement": "同意事項を表示",
    "Attack Path is now powered by the Graph engine.": "Attack Pathは現在Graphエンジンによって強化されています。",
    "Same concept, more powerful. Existing": "コンセプトは同じで、より強力になりました。既存の",
    "rules continue to work and can still be created.": "ルールは引き続き動作し、新規作成も可能です。",
    "Graph rules leverage graph queries to monitor your environment for complex attack paths and potential breach paths":
      "Graphルールはグラフクエリを活用して、複雑な攻撃パスや潜在的な侵害パスについて環境を監視します",
    "Configuration rules monitor your resource configurations for potential policy violations":
      "Configurationルールは、ポリシー違反の可能性についてリソース設定を監視します",
    "Data rules protect against malware and enable data classification": "Dataルールはマルウェアから保護し、データ分類を可能にします",
    "Identity rules monitor the identities in your cloud environment for excess-or-unused permissions":
      "Identityルールは、クラウド環境内のIDについて、過剰または未使用の権限を監視します",
    "Network exposure rules detect assets exposed to the Internet": "Network exposureルールは、インターネットに公開された資産を検出します",
    "AI rules monitor your AI ecosystem for risks and misconfigurations": "AIルールは、リスクや設定ミスについてAIエコシステムを監視します",
    "Attack path detection using the previous rule engine. We recommend Graph for new rules":
      "従来のルールエンジンを使用した攻撃パスの検出です。新規ルールにはGraphを推奨します",
    "Define the rule (Rego)": "ルールを定義(Rego)",
    "For more information about the syntax": "構文の詳細については",
    "read here": "こちらをご覧ください",
    "Assign compliance controls": "コンプライアンスコントロールを割り当て",
    "You can assign a rule to one or more custom compliance controls to tailor compliance checks to your organization's needs.":
      "組織のニーズに合わせてコンプライアンスチェックを調整するために、1つ以上のカスタムコンプライアンスコントロールにルールを割り当てることができます。",
    "Add controls": "コントロールを追加",
    "Rule settings → Assign controls": "ルール設定 → コントロールを割り当て",
    "Apply selection": "選択内容を適用",
    "Critical severity": "重大な重要度",
    "High severity": "高い重要度",
    "Medium severity": "中程度の重要度",
    "Low severity": "低い重要度",
    "(Critical severity)": "(重大な重要度)",
    "(High severity)": "(高い重要度)",
    "(Medium severity)": "(中程度の重要度)",
    "(Low severity)": "(低い重要度)",
    "(Keep finding's severity)": "(検出結果の重要度を維持)",
    "(every 12 hours)": "(12時間ごと)",
    "Use default severity": "デフォルトの重要度を使用",
    "Third-party scanners can create issues only. They cannot perform blocking actions.":
      "サードパーティ製スキャナーはイシューを作成することのみ可能です。ブロック操作を実行することはできません。",
    "Filters findings by the file's unique cryptographic hash (e.g., searching for a specific infected binary or verifying file integrity across images).":
      "ファイルの一意の暗号学的ハッシュ(例: 特定の感染したバイナリを検索する、またはイメージ間でファイルの整合性を検証する)で検出結果をフィルターします。",
    "Malware Verdict": "マルウェア判定",
    "Malware Verdict indicates whether detected software is confirmed malicious (Malware) or potentially unwanted and risky (Grayware).":
      "マルウェア判定は、検出されたソフトウェアが悪意のあるものと確認された(Malware)のか、それとも潜在的に迷惑でリスクのあるもの(Grayware)なのかを示します。",
    "Filters by a specific, unique finding identifier": "特定の一意な検出結果識別子でフィルターします",
    "Determines whether findings suppressed by developers are considered during policy evaluation. Yes: Suppressed findings are excluded from policy evaluation. No: All findings are evaluated by the policy, including developer-suppressed ones.":
      "開発者によって抑制された検出結果を、ポリシー評価の対象にするかどうかを決定します。はい: 抑制された検出結果はポリシー評価から除外されます。いいえ: 開発者によって抑制されたものを含め、すべての検出結果がポリシーによって評価されます。",
    "Filters findings generated by a specific AppSec detection rule.": "特定のAppSec検出ルールによって生成された検出結果をフィルターします。",
    "Could not parse detection rule": "検出ルールを解析できませんでした",
    "Filters findings based on labels attached to the matched AppSec rules, allowing you to filter and select multiple rules at once.":
      "一致するAppSecルールに付けられたラベルに基づいて検出結果をフィルターし、複数のルールをまとめてフィルター・選択できるようにします。",
    "Filters based on the category of findings generated by the rule.": "そのルールによって生成された検出結果のカテゴリに基づいてフィルターします。",
    "Scans your cloud environments to detect configuration drift between deployed resources and their IaC definitions.":
      "クラウド環境をスキャンし、デプロイ済みリソースとそのIaC定義との間の設定ドリフトを検出します。",
    "Exclude any items that match this query:": "このクエリに一致する項目を除外:",
    "Add filters": "フィルターを追加",
    "Results Preview": "結果のプレビュー",
    "Back to Policies": "ポリシーに戻る",
    "Vulnerability Issue Policies": "脆弱性イシューポリシー",
    "Vulnerability Policy": "脆弱性ポリシー",
    "Vulnerability Policies": "脆弱性ポリシー",
    "Choose Actions": "アクションを選択",

    // --- Vulnerability Policies - Issue Creation 画面 ---
    // --- Vulnerability Policies - Issue Creation screen ---
    "Vulnerability Policies - Issue Creation": "脆弱性ポリシー - イシュー作成",
    "Add Policy": "ポリシーを追加",
    "Exclusions": "除外",
    "Globally Ignored CVEs, Assets, and Asset Groups": "グローバルに無視されたCVE、資産、アセットグループ",
    "Issue Creation": "イシュー作成",
    "Match Criteria": "一致条件",
    "Prevention": "防止",
    "disabled": "無効",
    "CVE Default": "CVEデフォルト",
    "CVEs Confirmed Vulnerable Externally": "外部で脆弱性が確認されたCVE",
    "CVEs with 80%+ EPSS Scores": "EPSSスコア80%以上のCVE",
    "CVEs with CVSS Critical Severity": "CVSS重要度が重大のCVE",
    "CVEs with CVSS High Severity": "CVSS重要度が高のCVE",
    "CVEs with CVSS Medium Severity": "CVSS重要度が中のCVE",
    "CVSS Severity = Critical": "CVSS重要度 = 重大",
    "CVSS Severity = High": "CVSS重要度 = 高",
    "CVSS Severity = Medium": "CVSS重要度 = 中",
    "EPSS Score >= 80%": "EPSSスコア >= 80%",
    "Finding Sources Contains Cortex Attack Surface Testing":
      "検出元に Cortex Attack Surface Testing を含む",
    "Package In Use = Yes": "パッケージ使用中 = はい",

    // --- ルールとポリシー画面 ---
    // --- Rules and Policies screen ---
    "Create dynamic groups by applying asset filters, or build static groups by selecting assets manually.":
      "アセットフィルターを適用して動的グループを作成するか、資産を手動で選択して静的グループを作成してください。",
    "The selected policy will be deleted.": "選択したポリシーが削除されます。",
    "The following text will be displayed as part of the issue remediation guidance":
      "以下のテキストは、イシューの修復ガイダンスの一部として表示されます",
    "Delete Policy": "ポリシーを削除",
    "Disable Policy": "ポリシーを無効化",
    "Disabling policy will resolve the open issues matching the policy.":
      "ポリシーを無効化すると、そのポリシーに一致するオープンなイシューが解決されます。",
    "Deleting policy will resolve the open issues in this policy scope.":
      "ポリシーを削除すると、このポリシーのスコープ内のオープンなイシューが解決されます。",
    "Grace Period (Deployment)": "猶予期間 (デプロイ)",
    "Number of days to allow before blocking": "ブロックするまでに許容する日数",
    "The selected policies will be disabled. Are you sure you want to proceed?":
      "選択したポリシーが無効化されます。続行してもよろしいですか?",
    "The policy will no longer evaluate against findings": "このポリシーは、検出結果に対して評価されなくなります",
    "The selected policies will be deleted. Are you sure you want to proceed?":
      "選択したポリシーが削除されます。続行してもよろしいですか?",
    // 原文ママ("try adjusting your search to find."で文が終わっている)。
    // asset-inventory-screen.jsにある類似文言("...to find what you're looking for.")とは
    // 語尾が異なる別バリアントのため、別エントリとして登録する。
    // Kept verbatim (the sentence ends abruptly at "try adjusting your search to find.").
    // This is a distinct variant from the similar string in asset-inventory-screen.js
    // ("...to find what you're looking for.") with a different ending, so it is
    // registered as its own entry.
    "We couldn’t find what you’re looking for, try adjusting your search to find.":
      "お探しのものが見つかりませんでした。検索条件を調整してもう一度お試しください。",
    "Created by:": "作成者:",
    "Modified by:": "更新者:",
    "Created on:": "作成日:",
    "Modified on:": "更新日:",
    "Total": "合計",
    "Edit policy": "ポリシーを編集",
    "Duplicate policy": "ポリシーを複製",
    "View Policy Details": "ポリシーの詳細を表示",
    "Export policy": "ポリシーをエクスポート",
    "You are about to delete 1 policy": "1件のポリシーを削除しようとしています",
    "* Choosing delete you will also save other unsaved changes in the policy screen":
      "※ 削除を選択すると、ポリシー画面の他の未保存の変更も保存されます",
    "Delete and Save": "削除して保存",
    "Delete Custom Detection Rule": "カスタム検出ルールを削除",
    "Data types": "データタイプ",
    "Severity for Compliance": "コンプライアンス用の重要度",
    "Rule Details": "ルールの詳細",
    "Rule Definition (Rego)": "ルール定義 (Rego)",
    "Rule Definition (Python)": "ルール定義 (Python)",
    "Inputs": "入力",
  },

  patterns: [
    // 'Based on the categorization, finding type will be "..."' -> '分類に基づき、検出タイプは「...」になります'
    { re: /^Based on the categorization, finding type will be "(.+)"$/, tpl: "分類に基づき、検出タイプは「$1」になります" },
    // "The ['cloud_audit_logs'] dataset is not supported for the 'config' rule type." -> "['cloud_audit_logs'] データセットは「config」ルールタイプではサポートされていません。"
    { re: /^The (\[.*\]) dataset is not supported for the '(.+)' rule type\.$/, tpl: "$1 データセットは「$2」ルールタイプではサポートされていません。" },
    // "Provided xdm.asset.type.id [] is invalid." -> "指定されたxdm.asset.type.id [] は無効です。"
    { re: /^Provided xdm\.asset\.type\.id (\[.*\]) is invalid\.$/, tpl: "指定されたxdm.asset.type.id $1 は無効です。" },
    // "Maximum of 50 labels (0/50)" -> "最大50個のラベル (0/50)"
    { re: /^Maximum of 50 labels \((\d+)\/50\)$/, tpl: "最大50個のラベル ($1/50)" },
    // "Step 1/3" -> "手順 1/3"
    { re: /^Step (\d+)\/(\d+)$/, tpl: "手順 $1/$2" },
    // "Condition Group 1" -> "条件グループ 1"
    { re: /^Condition Group\s+(\d+)$/, tpl: "条件グループ $1" },
    // (旧: "We found the application "X" with no critical/high vulnerabilities. ..."用の
    // パターンをここに置いていたが、content.js側でcas-recommendations-panel
    // p[ucardcontent]をAI翻訳対象に変更したため削除。詳細は上のexactブロック内の
    // コメントを参照。)
    // (Removed: a pattern for "We found the application "X" with no critical/high vulnerabilities.
    // ..." used to live here. See the comment in the exact block above — this text now goes through AI
    // translation via content.js's cas-recommendations-panel p[ucardcontent] exclusion instead.)
    // "1 selected asset groups" -> "選択済みのアセットグループ: 1件"
    { re: /^(\d+)\s+selected asset groups$/, tpl: "選択済みのアセットグループ: $1件" },
    // "1 Selected rules" -> "選択済みルール: 1件"
    { re: /^(\d+)\s+Selected rules$/, tpl: "選択済みルール: $1件" },
    // "Total 1 rules selected" -> "選択済みルールの合計: 1件"
    { re: /^Total\s+([\d,]+)\s+rules selected$/, tpl: "選択済みルールの合計: $1件" },
    // "1 selected predefined asset scopes" -> "選択済みの事前定義済みアセットスコープ: 1件"
    { re: /^(\d+)\s+selected predefined asset scopes$/, tpl: "選択済みの事前定義済みアセットスコープ: $1件" },
    // "There are currently 0 Issues generated from these policies." -> "現在、これらのポリシーから生成されているイシューは0件です。"
    { re: /^There are currently ([\d,]+) Issues generated from these policies\.$/,
      tpl: "現在、これらのポリシーから生成されているイシューは$1件です。" },
    // "There are currently 0 Issues generated from these policies. No new Issues will be generated from these policies after disabling."
    { re: /^There are currently ([\d,]+) Issues generated from these policies\. No new Issues will be generated from these policies after disabling\.$/,
      tpl: "現在、これらのポリシーから生成されているイシューは$1件です。無効化すると、これらのポリシーから新しいイシューは生成されなくなります。" },
    // "The selected rule, MCP Server, will be disabled." -> "選択したルール「MCP Server」が無効化されます。"
    // ルール名(識別子)部分は未翻訳のまま維持する。
    // The rule name (an identifier) is left untranslated.
    { re: /^The selected rule, (.+), will be disabled\.$/, tpl: "選択したルール「$1」が無効化されます。" },
    // "The selected rule, MCP Server, will be enabled. As a result, 0 estimated issues will be generated."
    // -> "選択したルール「MCP Server」が有効化されます。これにより、推定0件のイシューが生成されます。"
    { re: /^The selected rule, (.+), will be enabled\. As a result, ([\d,]+) estimated issues will be generated\.$/,
      tpl: "選択したルール「$1」が有効化されます。これにより、推定$2件のイシューが生成されます。" },
    // "You are about to delete 2 policies" -> "2件のポリシーを削除しようとしています"
    { re: /^You are about to delete ([\d,]+) polic(?:y|ies)$/, tpl: "$1件のポリシーを削除しようとしています" },
    // "1 Policy will be disabled" -> "1件のポリシーが無効化されます"
    { re: /^([\d,]+) Polic(?:y|ies) will be disabled$/, tpl: "$1件のポリシーが無効化されます" },
    // "1 Policy will be enabled" -> "1件のポリシーが有効化されます"
    { re: /^([\d,]+) Polic(?:y|ies) will be enabled$/, tpl: "$1件のポリシーが有効化されます" },
    // "Policy testtest will be deleted" -> "ポリシー「testtest」が削除されます"
    // ポリシー名(識別子)部分は未翻訳のまま維持する。
    // The policy name (an identifier) is left untranslated.
    { re: /^Policy (.+) will be deleted$/, tpl: "ポリシー「$1」が削除されます" },
    // "Are you sure you want to delete the rule testtest?" -> "ルール「testtest」を削除してもよろしいですか?"
    { re: /^Are you sure you want to delete the rule (.+)\?$/, tpl: "ルール「$1」を削除してもよろしいですか?" },
    // "Rule auenoyama-test will be deleted" -> "ルール「auenoyama-test」が削除されます"
    // ルール名(識別子)部分は未翻訳のまま維持する。
    // The rule name (an identifier) is left untranslated.
    { re: /^Rule (.+) will be deleted$/, tpl: "ルール「$1」が削除されます" },
    // "1 Rule will be disabled" -> "1件のルールが無効化されます"
    { re: /^([\d,]+) Rules? will be disabled$/, tpl: "$1件のルールが無効化されます" },
    // "1 Rule will be enabled" -> "1件のルールが有効化されます"
    { re: /^([\d,]+) Rules? will be enabled$/, tpl: "$1件のルールが有効化されます" },
    // "This is a Python-based rule. The Logic cannot be edited but can be viewed for Terraform"
    // -> "これはPythonベースのルールです。ロジックは編集できませんが、Terraform用のロジックとして表示できます。"
    // 対象タイプ(Terraform等、ルールの適用対象言語/リソース種別)部分が可変。
    // The target type (e.g. Terraform — the language/resource kind the rule applies to) is variable.
    { re: /^This is a Python-based rule\. The Logic cannot be edited but can be viewed for (.+)$/,
      tpl: "これはPythonベースのルールです。ロジックは編集できませんが、$1用のロジックとして表示できます。" },
    // "Executables (1)" -> "実行ファイル (1)"
    { re: /^Executables \((\d+)\)$/, tpl: "実行ファイル ($1)" },
  ],

  skip: [],
};
