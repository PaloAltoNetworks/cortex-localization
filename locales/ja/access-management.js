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

const dictionaryAccessManagement = {
  exact: {
    "Direct Role": "直接ロール",
    "Download example file": "サンプルファイルをダウンロード",
    "Email": "メールアドレス",
    "Import": "インポート",
    "Import Multiple User Roles": "複数のユーザーロールをインポート",
    "Show Hidden Users": "非表示のユーザーを表示",
    "Hide Hidden Users": "非表示のユーザーを隠す",
    "This list shows users with a Cortex User role in Customer Support Portal":
      "このリストは、Customer Support PortalでCortexユーザーロールを持つユーザーを表示しています",
    "User Name": "ユーザー名",
    "User Type": "ユーザータイプ",
    "Group Roles": "グループロール",
    "Last Login Time": "最終ログイン日時",
    "First Name": "名",
    "New Role": "新しいロール",
    "Role Name": "ロール名",
    "Define name here": "ここに名前を入力してください",
    "Add role description": "ロールの説明を追加",
    "Enable dataset access management": "データセットのアクセス管理を有効にする",
    "New Group": "新しいグループ",
    "Import AD Group": "ADグループをインポート",
    "To Import AD groups, enable the Cloud Identity Engine in the Configurations> Integrations> Cloud Identity Engine page":
      "ADグループをインポートするには、設定 > 統合 > クラウドアイデンティティエンジンのページでクラウドアイデンティティエンジンを有効にしてください",
    "Role": "ロール",
    "Nested Groups": "ネストされたグループ",
    "IdP Groups": "IdPグループ",
    "Insert Time": "登録日時",
    "Update Time": "更新日時",
    "New User Group": "新しいユーザーグループ",
    "Use the Scope tab to ensure that required access scope is granted":
      "必要なアクセス範囲が付与されていることを、「範囲」タブで確認してください",
    "Enter nested group(s)": "ネストされたグループを入力してください",
    "Enter user(s)": "ユーザーを入力してください",
    "All cases and issues": "すべてのケースとイシュー",
    "No cases and issues": "ケースとイシューなし",
    "Select asset groups": "アセットグループを選択",
    "Select the specific asset groups to which this user group will have access.":
      "このユーザーグループがアクセスできる、個別のアセットグループを選択してください。",
    "Select domains": "ドメインを選択",
    "Select specific (at least one required)": "個別に選択(少なくとも1つ必要)",
    "Enter description...": "説明を入力してください...",
    "saml group mapping": "SAMLグループマッピング",
    "Add IdP groups": "IdPグループを追加",
    "Provide access to assets listed under Inventory → All Assets, and to view their related Cases, Issues, and Findings. Only Asset Groups relevant for scoping are available for selection. Note that the visibility of Security domain Issues that refers to assets with agents is controlled by the Endpoint scoping configuration.":
      "インベントリ → すべての資産に一覧表示されている資産へのアクセス権、およびそれに関連するケース、イシュー、検出結果を閲覧する権限を付与します。選択できるのは、スコープ設定に関連するアセットグループのみです。エージェントが導入された資産を参照するSecurityドメインのイシューの可視性は、エンドポイントのスコープ設定によって制御される点にご注意ください。",
    "Provide access to Endpoint Groups and Endpoint Tags to view their related Agent management and Enterprise policies. Note that the configuration may impact the visibility of related Security domain Cases and Issues, but will not affect asset visibility.":
      "エンドポイントグループおよびエンドポイントタグへのアクセス権を付与し、それに関連するエージェント管理およびEnterpriseポリシーを閲覧できるようにします。この設定は、関連するSecurityドメインのケースおよびイシューの可視性に影響する場合がありますが、資産の可視性には影響しない点にご注意ください。",
    "Allow access to cases and issues that are not referencing known assets or endpoints.":
      "既知の資産・エンドポイントを参照していないケースおよびイシューへのアクセスを許可します。",
    "No tags and groups": "タグ・グループなし",
    "All groups, All tags": "すべてのグループ、すべてのタグ",
    "All tags": "すべてのタグ",
    "All groups": "すべてのグループ",
    "No groups": "グループなし",
    "No tags": "タグなし",
    "Endpoint Groups": "エンドポイントグループ",
    "Endpoint Tags": "エンドポイントタグ",
    "Select specific": "個別に選択",
    "Select endpoint groups": "エンドポイントグループを選択",
    "Select endpoint tags": "エンドポイントタグを選択",
    "Collapse all": "すべて折りたたむ",
    "Configure who can grant additional access by sharing individual instances of dashboards and saved queries with other users. Account Administrators and Instance Administrators can always share.":
      "ダッシュボードや保存済みクエリの個々のインスタンスを他のユーザーと共有することで追加のアクセス権を付与できるユーザーを設定します。アカウント管理者およびインスタンス管理者は常に共有できます。",
    "Editors can also Share objects with others": "編集者もオブジェクトを他のユーザーと共有できます",
    "Granular Access Settings": "きめ細かなアクセス設定",
    "Owners and editors can change the general access": "所有者と編集者は一般アクセス設定を変更できます",
    "Owners can Share objects they created": "所有者は自分が作成したオブジェクトを共有できます",
    "Add SSO Connection": "SSO接続を追加",
    "Communication Task Authentication": "通知タスクの認証",
    "Configure internal Cortex tenant user login authentication using your organization's identity provider (IdP).":
      "組織のアイデンティティプロバイダー(IdP)を使用して、内部Cortexテナントのユーザーログイン認証を設定します。",
    "Login Options": "ログインオプション",
    "SSO Enabled": "SSO有効",
    "SSO Integration": "SSO統合",
    "Click here": "こちらをクリックして",
    "to review SSO authentication errors": "SSO認証エラーを確認",
    "Advanced Settings": "詳細設定",
    "Relay State": "リレーステート",
    "SP Logout URL": "SPログアウトURL",
    "Service Provider Public Certificate": "サービスプロバイダー公開証明書",
    "Service Provider Private Key (Pem Format)": "サービスプロバイダー秘密鍵(Pem形式)",
    "Remove SAML RequestedAuthnContext": "SAML RequestedAuthnContextを削除",
    "Force Authentication": "認証を強制",
    "Single Sign-On URL": "シングルサインオンURL",
    "Audience URI (SP Entity ID)": "オーディエンスURI (SPエンティティID)",
    "Metadata URL": "メタデータURL",
    "Default Role": "デフォルトロール",
    "IdP Attributes Mapping": "IdP属性マッピング",
    "Group Membership": "グループメンバーシップ",
    "Last Name": "姓",
    "Configure external (non-Cortex) user authentication to answer a survey sent via a communication task.":
      "通知タスクを通じて送信されるアンケートに回答するための、外部(Cortex以外の)ユーザー認証を設定します。",
    "Enable Communication task SSO Connection": "通知タスクのSSO接続を有効にする",
    "IdP Issuer ID": "IdP発行者ID",
    "IdP SSO URL": "IdP SSO URL",
    "IdP Single Logout URL": "IdPシングルログアウトURL",
    "x.509 certificate": "x.509証明書",
    "The metadata provides information about the IdP's capabilities, endpoints, keys, and more.":
      "メタデータには、IdPの機能・エンドポイント・キーなどの情報が含まれています。",
    "Metadata URL examples:": "メタデータURLの例:",
    "Associate this IdP with a specific domain (i.e. domain.com).":
      "このIdPを特定のドメイン(例: domain.com)に関連付けます。",
    "When logging in, users are redirected to the IdP associated with their email domain or to the default IdP if no association exists.":
      "ログイン時、ユーザーはメールドメインに関連付けられたIdPにリダイレクトされます。関連付けがない場合はデフォルトのIdPにリダイレクトされます。",
    "The name of the field/attribute that is used to store the user's last name in your Identity Provider":
      "アイデンティティプロバイダーでユーザーの姓を格納するために使用されるフィールド/属性の名前",
    "The name of the field/attribute that is used to store the user's first name in your Identity Provider":
      "アイデンティティプロバイダーでユーザーの名を格納するために使用されるフィールド/属性の名前",
    "The name of the field/attribute that is used to store the user's email address in your Identity Provider":
      "アイデンティティプロバイダーでユーザーのメールアドレスを格納するために使用されるフィールド/属性の名前",
    "Prompts users to reauthenticate log in, if requested by the Idp.":
      "IdPから要求された場合、ユーザーに再ログイン認証を求めます。",
    "Allows users to log in by using additional authentication methods.":
      "ユーザーが追加の認証方法を使ってログインできるようにします。",
    "Key pair for SAML request signing (mostly required for ADFS)": "SAMLリクエスト署名用の鍵ペア(主にADFSで必要です)",
    "The URL of the landing page used after SSO login to the Cortex console.":
      "SSOログイン後、Cortexコンソールで使用されるランディングページのURLです。",
    "In most cases, this field should be left blank": "ほとんどの場合、この項目は空欄のままにしてください",
    "firstName": "名",
    "lastName": "姓",

    // --- Manage permissions 画面(権限カテゴリ一覧) ---
    // --- Manage permissions screen (permission category list) ---
    "3rd Party Tools": "サードパーティツール",
    "Agent Administrations": "エージェント管理",
    "Agent Extension Policies": "エージェント拡張ポリシー",
    "Agent Groups": "エージェントグループ",
    "Agent Installations": "エージェントインストール",
    "Agent Prevention Policies": "エージェント防止ポリシー",
    "Agent Profiles": "エージェントプロファイル",
    "Agent Scripts Library": "エージェントスクリプトライブラリ",
    "Alert Notifications": "アラート通知",
    "AppSec Collector": "AppSecコレクター",
    "AppSec Rules": "AppSecルール",
    "Asset Roles Configuration": "アセットロール設定",
    "Auditing": "監査",
    "Automations": "自動化",
    "Broker Service": "ブローカーサービス",
    "CI CD Scans": "CI/CDスキャン",
    "CLI Tool": "CLIツール",
    "Case Properties": "ケースプロパティ",
    "Cases and Issues": "ケースとイシュー",
    "Catalog and Assessment Profiles": "カタログと評価プロファイル",
    "Cloud Consumption Command Center": "クラウド消費コマンドセンター",
    "Cloud Security Command Center": "クラウドセキュリティコマンドセンター",
    "Command Center Dashboards": "コマンドセンターダッシュボード",
    "Compute Policies": "コンピュートポリシー",
    "Conditional Access Policy": "条件付きアクセスポリシー",
    "Cortex Agentic Assistant": "Cortex エージェント型アシスタント",
    "Cortex XDR - analytics": "Cortex XDR - アナリティクス",
    "Create Role": "ロールを作成",
    "Data-in-motion Rules": "データ移動中ルール",
    "Datasets (Disabled)": "データセット(無効)",
    "Detections": "検出",
    "Device Control": "デバイス制御",
    "Endpoint Applications": "エンドポイントアプリケーション",
    "Endpoint Applications Groups": "エンドポイントアプリケーショングループ",
    "Endpoint DLP Settings": "エンドポイントDLP設定",
    "Exception Approver Admin": "例外承認者管理者",
    "Exception Management Admin": "例外管理の管理者",
    "Exclusion List": "除外リスト",
    "Fields and Types": "フィールドとタイプ",
    "General Configuration": "一般設定",
    "General Setting": "一般設定",
    "Generic Collector": "汎用コレクター",
    "Global Exceptions": "グローバル例外",
    "Identity Security Runtime": "アイデンティティセキュリティランタイム",
    "Ingestion Monitoring": "取り込み監視",
    "Integrations Permissions": "統合の権限",
    "Issue Exclusions": "イシューの除外",
    "Jobs": "ジョブ",
    "Layouts": "レイアウト",
    "Log Collections": "ログ収集",
    "Long Running HTTP Integrations configuration": "長時間実行HTTP統合の設定",
    "Macro Library": "マクロライブラリ",
    "On-demand Analytics": "オンデマンド分析",
    "PR Scans": "PRスキャン",
    "Periodic": "定期",
    "Public API": "パブリックAPI",
    "Query Library": "クエリライブラリ",
    "Scans": "スキャン",
    "Supply Chain Catalog": "サプライチェーンカタログ",
    "Supply Chain Tools": "サプライチェーンツール",
    "Support": "サポート",
    "Sync Profile": "同期プロファイル",
    "Trusted Entities": "信頼できるエンティティ",
    "View/Edit": "表示/編集",
  },

  patterns: [
    // "0 Asset groups" -> "アセットグループ 0件"
    { re: /^(\d+)\s+Asset groups$/, tpl: "アセットグループ $1件" },
    // "0 Domains" -> "ドメイン 0件"
    { re: /^(\d+)\s+Domains$/, tpl: "ドメイン $1件" },
    // "1 Group , 1 Tag" -> "1 グループ、1 タグ"
    { re: /^(\d+)\s+Groups?\s*,\s*(\d+)\s+Tags?$/, tpl: "$1 グループ、$2 タグ" },
    // "1 Group" (単独) -> "1 グループ"
    { re: /^(\d+)\s+Groups?$/, tpl: "$1 グループ" },
    // "1 Tag" (単独) -> "1 タグ"
    { re: /^(\d+)\s+Tags?$/, tpl: "$1 タグ" },
    // "All groups, 1 Tag" -> "すべてのグループ、1 タグ"
    { re: /^All groups\s*,\s*(\d+)\s+Tags?$/, tpl: "すべてのグループ、$1 タグ" },
    // "1 Group, All tags" -> "1 グループ、すべてのタグ"
    { re: /^(\d+)\s+Groups?\s*,\s*All tags$/, tpl: "$1 グループ、すべてのタグ" },
  ],

  skip: [],
};
