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

const dictionaryGeneralSettings = {
  exact: {
    "Server Settings": "サーバー設定",
    "Issue Management": "イシュー管理",
    "Result": "結果",
    "Source IP": "送信元IP",
    "Subtype": "サブタイプ",
    "Update Issue": "イシューを更新",
    "User Roles": "ユーザーロール",

    "Default User Notifications": "デフォルトのユーザー通知",
    "Case assigned": "ケースが割り当てられた",
    "Case resolved": "ケースが解決された",
    "Issue assigned": "イシューが割り当てられた",
    "Issue resolved": "イシューが解決された",
    "Notifications exclude actions performed by the user.": "通知には、そのユーザー自身が行った操作は含まれません。",
    "Create New Forwarding Configuration": "新しい転送設定を作成",
    "Add Forwarding Configuration": "転送設定を追加",
    "Define": "定義",
    "Forward Destination": "転送先",
    "Review and Create": "確認して作成",
    "log type": "ログタイプ",
    "Define the forwarding scope by using the filter or right-click on a table cell to select the fields and values.":
      "フィルターを使用するか、テーブルのセルを右クリックしてフィールドと値を選択することで、転送範囲を定義してください。",
    "Add Application": "アプリケーションを追加",
    "Alert": "アラート",
    "Connected Integrations": "接続済み統合",
    "Minutes": "分",
    "Select name": "名前を選択",
    "Use Auto Generated Subject": "自動生成された件名を使用",
    "channel name": "チャンネル名",
    "distribution list": "配布リスト",
    "format": "形式",
    "grouping timeframe": "グループ化の時間枠",
    "instance name": "インスタンス名",
    "notification timezone": "通知のタイムゾーン",
    "subject": "件名",
    "Configuration Scope": "構成範囲",
    "Destination Type": "宛先タイプ",
    "Forward Type": "転送タイプ",
    "excluded": "除外済み",
    "Enforce query privacy": "クエリのプライバシーを強制",
    "Enforce query privacy for non-admins": "管理者以外に対してクエリのプライバシーを強制",
    "Limit non-admin users and API keys to viewing and managing their own query activity.":
      "管理者以外のユーザーおよびAPIキーが、自分自身のクエリ操作のみ閲覧・管理できるように制限します。",
    "Query Limits": "クエリの上限",
    "Unlimited": "無制限",
    "<Max>": "<最大値>",
    "Query limits govern user-initiated queries, excluding those from playbooks and correlations, to enhance query performance and efficiency. These limits are tenant-wide, unless specific roles and groups are excluded.":
      "クエリの上限は、Playbookや相関分析によるクエリを除き、ユーザーが実行したクエリを対象に、クエリのパフォーマンスと効率を高めるために適用されます。特定のロールやグループが除外されていない限り、この上限はテナント全体に適用されます。",
    "Excluded User Groups or Roles": "除外するユーザーグループまたはロール",
    "Select Group": "グループを選択",
    "concurrent queries per user": "ユーザーごとの同時実行クエリ数",
    "query timeout (minutes)": "クエリタイムアウト(分)",
    "Administration": "管理",
    "General": "一般",
    "Global Settings": "グローバル設定",
    "Access Management": "アクセス管理",
    "Access Management.": "アクセス管理。",
    "Roles": "ロール",
    "User Groups": "ユーザーグループ",
    "Authentication Settings": "認証設定",
    "API Keys": "APIキー",
    "API Keys.": "APIキー。",
    "Security Settings": "セキュリティ設定",
    "Exception Management": "例外管理",
    "Automation Exclusion Center": "自動化除外センター",
    "Data Management": "データ管理",
    "Data Collection": "データ収集",
    "Data Broker": "データブローカー",
    "Broker VMs": "Broker VM",
    "Dataset Management": "データセット管理",
    "Query Management": "クエリ管理",
    "Parsing Rules": "解析ルール",
    "Lists": "リスト",
    "IP Labels": "IPラベル",
    "External Dynamic List Integration": "外部動的リスト統合",
    "Integrations": "統合",
    "External Applications": "外部アプリケーション",
    "Marketplace": "マーケットプレイス",
    "Credentials": "認証情報",
    "Cloud Identity Engine": "クラウドアイデンティティエンジン",
    "Identity Configuration": "アイデンティティ設定",
    "Impersonation Role": "偽装ロール",
    "Agent Configurations": "エージェント設定",
    "Agents & LLM Experience": "エージェントとLLMエクスペリエンス",
    "AI Configuration": "AI設定",
    "AI Case Summarization": "AIケース要約",
    "Enable AI case summarization capabilities": "AIケース要約機能を有効にする",
    "Application Configuration": "アプリケーション設定",
    "AppSec Issues Configuration": "AppSecイシュー設定",
    "Artifact and Asset Views": "アーティファクトとアセットビュー",
    "Automation Email Appearance": "自動化メールの外観",
    "Case display modes": "ケース表示モード",
    "Case Sensitivity (case_sensitive)": "大文字小文字の区別 (case_sensitive)",
    "Caching": "キャッシュ",
    "Enable Cases Caching": "ケースキャッシュを有効にする",
    "Enable Issues Caching": "イシューのキャッシュを有効にする",
    "Improve performance on the Cases page by enabling a temporary cache.":
      "一時キャッシュを有効にすることで、ケースページのパフォーマンスを改善します。",
    "Improve performance on the Issues page by enabling a temporary cache.":
      "一時キャッシュを有効にすることで、イシューページのパフォーマンスを改善します。",
    "Compute Unit Consumption": "コンピュートユニット消費量",
    "Email Contacts": "メール連絡先",
    "Define the list of contact emails for Cortex communication":
      "Cortexからの連絡用メールアドレスのリストを定義します",
    "Endpoint Scoping Mode": "エンドポイントスコープモード",
    "Engines": "エンジン",
    "Exceptions Require Approval": "例外には承認が必要",
    "Approval Required": "承認が必要",
    "This setting allows for checks and balances across your organization. If you turn this off, exception requests will be activated immediately, no approval needed.":
      "この設定により、組織全体でのチェック体制を確保できます。オフにすると、例外リクエストは承認なしで即座に有効化されます。",
    "Add New Approver": "承認者を追加",
    "List of Approvers": "承認者リスト",
    "New Approver Email": "新しい承認者のメールアドレス",
    "New Approver Name": "新しい承認者の名前",
    "External Issue Mapping": "外部イシューマッピング",
    "Full-size logo": "フルサイズロゴ",
    "Replace the default logo in communication task emails with a custom logo to match your organization branding.":
      "組織のブランディングに合わせて、通知メールのデフォルトロゴをカスタムロゴに置き換えます。",
    "Recommended dimensions: 50px by 50px. Max file size 100 KB.":
      "推奨サイズ: 50px x 50px。最大ファイルサイズ100KB。",
    "Google Maps Key": "Google Maps キー",
    "Issue SLA Rules": "イシューのSLAルール",
    "AppSec Critical Issues Time to Resolve SLA": "AppSecクリティカルイシューの解決目標SLA",
    "AppSec High Issues Time to Resolve SLA": "AppSec高重要度イシューの解決目標SLA",
    "AppSec Low Issues Time to Resolve SLA": "AppSec低重要度イシューの解決目標SLA",
    "AppSec Medium Issues Time to Resolve SLA": "AppSec中重要度イシューの解決目標SLA",
    "Create SLA Rule": "SLAルールを作成",
    "Finding Sources = Cortex AppSec and Severity = Critical": "検出元 = Cortex AppSec かつ 重要度 = 重大",
    "Finding Sources = Cortex AppSec and Severity = High": "検出元 = Cortex AppSec かつ 重要度 = 高",
    "Finding Sources = Cortex AppSec and Severity = Low": "検出元 = Cortex AppSec かつ 重要度 = 低",
    "Finding Sources = Cortex AppSec and Severity = Medium": "検出元 = Cortex AppSec かつ 重要度 = 中",
    "Last Modified Date": "最終更新日",
    "SLA Goal": "SLA目標",
    "Create a query to select the issues affected by this rule:": "このルールの対象となるイシューを選択するクエリを作成してください:",
    "Criteria": "条件",
    "New SLA Rule": "新しいSLAルール",
    "Preview the Results": "結果をプレビュー",
    "SLA Rules": "SLAルール",
    "Set the Conditions for the SLA Rule": "SLAルールの条件を設定",
    "Matching Issues": "一致するイシュー",
    "SLA Rules automatically set the starting countdown value for issues that match the rule’s query criteria. Use them to define the time goals or deadlines that tasks or milestones need to be completed by. For more detailed information read the":
      "SLAルールは、ルールのクエリ条件に一致するイシューに対して、カウントダウンの開始値を自動的に設定します。タスクやマイルストーンの達成目標時間や期限を定義するために使用できます。詳細については以下を参照してください:",
    "SLA Fields documentation": "SLAフィールドのドキュメント",
    "SLA Rule Name": "SLAルール名",
    "Enter a name for your SLA rule": "SLAルールの名前を入力してください",
    "Describe the purpose of this SLA rule": "このSLAルールの目的を説明してください",
    "Enter 0 or greater": "0以上を入力してください",
    "Enter 0 to 23": "0〜23を入力してください",
    "Enter 0 to 59": "0〜59を入力してください",
    "days": "日",
    "hours": "時間",
    "Define the cases target MTTR per case severity": "ケースの重要度ごとに目標MTTRを定義します",
    "Keyboard Shortcuts": "キーボードショートカット",
    "Select shortcut to open Cortex Assistant.": "Cortex Assistantを開くショートカットを選択してください。",
    "Select shortcut to open artifact and asset views of hash or IP address values.":
      "ハッシュまたはIPアドレスのアーティファクト/アセットビューを開くショートカットを選択してください。",
    "Object Setup": "オブジェクト設定",
    "Outposts": "アウトポスト",
    "Password Protection (for downloaded files)": "パスワード保護(ダウンロードファイル用)",
    "Note: Scroll down to the Define Password Protection for Download Files topic.":
      "注: 「ダウンロードファイルのパスワード保護の定義」の項目までスクロールしてください。",
    "Profiles": "プロファイル",
    "Sync Profiles": "同期プロファイル",
    "Enable Scope Based Access Control": "スコープベースアクセス制御を有効にする",
    "Scope-Based Access Control (SBAC)": "スコープベースアクセス制御 (SBAC)",
    "Scope-Based Access Control (SBAC) enforces access restrictions on users. Before enabling this setting, ensure that User Group and Users are granted the required access by assigning their scopes in Settings > Configurations >":
      "スコープベースアクセス制御(SBAC)は、ユーザーへのアクセス制限を適用します。この設定を有効にする前に、設定 > 構成 > の該当箇所でUser GroupおよびUsersに必要なアクセス権が付与されていることを確認してください:",
    ". For API Keys, assign scopes in Settings > Configurations > Integrations >":
      "。APIキーの場合は、設定 > 構成 > 統合 > の該当箇所でスコープを割り当ててください:",
    "Threat Intelligence": "脅威インテリジェンス",
    "Timestamp Format": "タイムスタンプ形式",
    "Select a timestamp format that will be displayed in data tables":
      "データテーブルに表示するタイムスタンプ形式を選択してください",
    "Timezone": "タイムゾーン",
    "Select in which time zone to display your Cortex CLOUD data":
      "Cortex CLOUDのデータを表示するタイムゾーンを選択してください",
    "Upgrade Helper": "アップグレードヘルパー",
    "XDR Collectors": "XDRコレクター",
    "XQL Configuration": "XQL設定",
    "These settings control your XQL queries in the system.": "これらの設定はシステム内のXQLクエリを制御します。",
    "This change will impact the default behavior of all your XQL configurations except for BIOCs.":
      "この変更は、BIOCを除くすべてのXQL設定のデフォルト動作に影響します。",
    "Allow users to switch to legacy mode. When disabled, only default mode is available.":
      "ユーザーがレガシーモードに切り替えることを許可します。無効にすると、デフォルトモードのみ使用可能になります。",
    "Enable legacy mode": "レガシーモードを有効にする",
    "Enable Agentic Assistant and natural-language capabilities (LLM).":
      "エージェント型アシスタントと自然言語機能(LLM)を有効にします。",
    "While Agentic Assistant experience is currently free, we will notify you before any fees are applied, giving you the opportunity to opt out.":
      "エージェント型アシスタントの体験は現在無料ですが、料金が発生する前に通知し、オプトアウトの機会を提供します。",
    "When enabled, cases use an AI-generated name and summary. When disabled, the system or user name and description are displayed.":
      "有効にすると、ケースにはAIが生成した名前と要約が使用されます。無効にすると、システムまたはユーザーの名前と説明が表示されます。",
    "Will only affect newly retrieved files by Cortex XDR agent v. 8.1 and higher.":
      "Cortex XDRエージェント v.8.1以降によって新たに取得されたファイルにのみ影響します。",
    "Read-only": "読み取り専用",
    "Restrictive": "制限あり",
    "Save": "保存",
    "For more information, see": "詳細については、こちらを参照してください",
    "You can also": "また、以下も可能です",
    "7 Days": "7日間",
    "Allowed Domains": "許可されたドメイン",
    "Allowed Sessions": "許可されたセッション",
    "Approved IP Ranges": "承認されたIP範囲",
    "Approved User Email Domains (user@domain.com)": "承認されたユーザーのメールドメイン (user@domain.com)",
    "As user login expiration (8 hours)": "ユーザーログイン有効期限として (8時間)",
    "user login expiration": "ユーザーログイン有効期限",
    "dashboard expiration": "ダッシュボードの有効期限",
    "deactivate inactive user": "非アクティブユーザーを無効化",
    "+Add": "+ 追加",
    "The value selected, controls how frequently the Cortex tenant will refresh the Cortex Access Token from the CSP. To increase the frequency users have to re-authenticate, the CSP session duration should be reduced.":
      "選択された値は、CortexテナントがCSPからCortexアクセストークンを更新する頻度を制御します。ユーザーの再認証頻度を上げるには、CSPセッションの有効期間を短くしてください。",
    "When setting Approved Domains in parallel to Approved IP Ranges, only users that belong to one of the approved domains and using one of the approved IP ranges, will be able to access the Cortex XDR server":
      "承認されたドメインを承認されたIP範囲と併用して設定した場合、承認されたドメインのいずれかに属し、かつ承認されたIP範囲のいずれかを使用しているユーザーのみが、Cortex XDRサーバーにアクセスできます",
    "Set Uninstall Password": "アンインストールパスワードを設定",
    "Broker VM": "Broker VM",
    "Cancel": "キャンセル",
    "Configure expiration time period": "有効期限を設定",
    "permission reset timeframe": "権限リセットの期間",
    "Control Cortex tenant Same-Site Cookie Policy. Lax allows the cookie to be sent on some cross-site requests,":
      "Cortexテナントのサイト内Cookieポリシーを制御します。Laxは一部のクロスサイトリクエストでCookieの送信を許可します。",
    "Disable access for users that haven't logged in for a long period of time":
      "長期間ログインしていないユーザーのアクセスを無効化する",
    "Disabled (Default)": "無効(デフォルト)",
    "Enable Auto Logout": "自動ログアウトを有効にする",
    "Same-Site Cookie Policy": "サイト内Cookieポリシー",
    "Session Expiration": "セッションの有効期限",
    "Strict": "厳格",
    "Strict does not allow the cookie to be sent on a cross-site request.":
      "厳格モードでは、クロスサイトリクエストでのCookie送信を許可しません。",
    "The following domains and external IPs and ranges are allowed to access the server":
      "以下のドメインおよび外部IP・範囲からサーバーへのアクセスが許可されています",
    "User Expiration": "ユーザーの有効期限",
    "Action Center Expiration": "アクションセンターの有効期限",
    "Expiration can be set within 1-30 days from the creation time Updating the expiration will impact actions in \u201cpending\u201d status only":
      "有効期限は作成時から1〜30日の間で設定できます。有効期限の更新は「保留中」ステータスのアクションにのみ影響します",
    "Enabling this feature will remove any duplicate entries based on the defined parameters, leaving only one entry - the last endpoint reporting to the server. The deleted endpoint data is retained for 90 days since its last connection. If a deleted endpoint reconnects it will recover its existing data.":
      "この機能を有効にすると、定義されたパラメータに基づいて重複エントリが削除され、最後にサーバーに報告してきたエンドポイントの1件のみが残ります。削除されたエンドポイントのデータは、最終接続から90日間保持されます。削除されたエンドポイントが再接続した場合、既存のデータが復元されます。",
    "Custom Mail Subject": "カスタムメール件名",
    "Email Grouping Time Frame (Minutes)": "メールのグループ化時間枠(分)",
    "Forward issues as soon as possible": "イシューをできるだけ早く転送",
    "Log Forward Type": "ログ転送タイプ",
    "Output Method": "出力方法",
    "Time Zone": "タイムゾーン",
    "abort malware scan": "マルウェアスキャンを中止",
    "agent database cleanup": "エージェントデータベースのクリーンアップ",
    "agent uninstall": "エージェントのアンインストール",
    "cancel endpoint isolation": "エンドポイント分離を取り消し",
    "change managing server": "管理サーバーを変更",
    "collect detailed host firewall logs": "詳細なホストファイアウォールログを収集",
    "delete quarantined file": "隔離されたファイルを削除",
    "destroy files": "ファイルを破棄",
    "endpoint script execution": "エンドポイントスクリプトの実行",
    "file search": "ファイル検索",
    "files retrieval": "ファイルの取得",
    "isolate": "分離",
    "malware scan": "マルウェアスキャン",
    "memory collection": "メモリ収集",
    "pause endpoint protection": "エンドポイント保護を一時停止",
    "quarantine": "隔離",
    "registry search": "レジストリ検索",
    "remediation": "修復",
    "restart agent": "エージェントを再起動",
    "restore quarantine": "隔離を復元",
    "resume endpoint protection": "エンドポイント保護を再開",
    "retrieve alert data": "アラートデータを取得",
    "set temporary token": "一時トークンを設定",
    "support file retrieval": "サポートファイルの取得",
    "terminate causality (cgo)": "コーザリティを終了 (cgo)",
    "terminate process": "プロセスを終了",
    "unblock ip address": "IPアドレスのブロックを解除",
    "xdr collector support file retrieval": "XDRコレクターのサポートファイル取得",
    "xdr collector uninstall": "XDRコレクターのアンインストール",
    "xdr collector upgrade": "XDRコレクターのアップグレード",
    "Advanced Analysis": "高度な分析",
    "Agent Status": "エージェントステータス",
    "Agent upgrade": "エージェントのアップグレード",
    "Content Management": "コンテンツ管理",
    "Cortex XDR Log Collection": "Cortex XDRログ収集",
    "Critical Environment Versions": "重要環境バージョン",
    "Endpoint Administration Cleanup": "エンドポイント管理のクリーンアップ",
    "Global uninstall password": "グローバルアンインストールパスワード",
    "Informative BTP Issues": "情報提供BTPイシュー",
    "Learn More": "詳細を見る",
    "Make reason field mandatory": "理由フィールドを必須にする",
    "Number of Agents": "エージェント数",
    "One-time cleanup": "1回限りのクリーンアップ",
    "Password Strength": "パスワード強度",
    "Periodic duplicate cleanup": "定期的な重複クリーンアップ",
    "Require Reason for Live Terminal": "ライブターミナルに理由を必須にする",
    "Restore default": "デフォルトに戻す",
    "Time Interval": "時間間隔",
    "WildFire Analysis for Benign Verdict": "良性判定に対するWildFire分析",
    "XDR Calculator for Recommended Bandwidth": "推奨帯域幅のXDR計算ツール",
    "XDR Collector": "XDRコレクター",
    "Mbps (Megabits per second)": "Mbps(メガビット毎秒)",
    "Host IP (IPv4 only)": "ホストIP(IPv4のみ)",
    "Mac Address": "MACアドレス",
    "Enable WildFire analysis scoring for files with Benign verdicts.":
      "良性判定のファイルに対してWildFire分析スコアリングを有効にします。",
    "Enable bandwidth control": "帯域幅制御を有効にする",
    "Enable minor content version updates": "マイナーコンテンツバージョン更新を有効にする",
    "Enable Critical Environment Versions to be Created and Installed in the Tenant":
      "テナント内で重要環境バージョンの作成とインストールを有効にする",
    "Configure Cortex XDR to collect logs to maintain stability":
      "安定性を維持するためCortex XDRがログを収集するよう設定する",
    "Configure Cortex to automatically upload issue data and apply Advanced Analysis exceptions":
      "イシューデータを自動アップロードし、高度な分析の例外を適用するようCortexを設定する",
    "Configure the Cortex XDR Agent Versions Used in the tenant":
      "テナントで使用するCortex XDRエージェントバージョンを設定する",
    "Configure the Cortex XDR Agent license revocation and deletion period":
      "Cortex XDRエージェントのライセンス失効・削除期間を設定する",
    "Configure the Cortex XDR agent upgrade scheduler and number of parallel upgrades":
      "Cortex XDRエージェントのアップグレードスケジューラーと並列アップグレード数を設定する",
    "Configure the Endpoint Administration periodic cleanup settings":
      "エンドポイント管理の定期クリーンアップ設定を構成する",
    "Configure the Palo Alto Networks content update cadence and bandwidth allocation within your organization":
      "組織内でのPalo Alto Networksコンテンツ更新頻度と帯域幅割り当てを設定する",
    "Disabling this capability takes immediate effect on new hashes, fresh agent installations, and existing security policies.":
      "この機能を無効にすると、新しいハッシュ、新規エージェントインストール、既存のセキュリティポリシーに即座に反映されます。",
    "Enable Cortex XDR agents to collect logs necessary to maintain the stability of your Cortex XDR agent and improve performance -":
      "Cortex XDRエージェントの安定性維持とパフォーマンス向上に必要なログの収集を有効にする -",
    "Note that it could take up to a week to take effect on existing agents in your environment pending agent caching.":
      "エージェントのキャッシュにより、既存のエージェントへの反映に最大1週間かかる場合があります。",
    "Note: this configuration affects only standard endpoints and does not impact the VDI or Temporary Session agent status.":
      "注: この設定は標準エンドポイントのみに影響し、VDIまたは一時セッションのエージェントステータスには影響しません。",
    "Otherwise, the content updates in your network occur only on major releases.":
      "そうでない場合、ネットワーク内のコンテンツ更新はメジャーリリース時のみ行われます。",
    "This calculation is based on connected agents and includes an overhead for large content update. For additional information":
      "この計算は接続中のエージェントに基づいており、大規模なコンテンツ更新のオーバーヘッドを含みます。詳細については",
    "This setting controls whether the reason field for starting a Live Terminal session is mandatory or optional.":
      "この設定は、ライブターミナルセッション開始時の理由フィールドが必須か任意かを制御します。",
    "To enforce immediate protection against the latest threats, enable minor content updates.":
      "最新の脅威に対する即時保護を強制するには、マイナーコンテンツ更新を有効にしてください。",
    "we recommend you to allocate the minimum of 20 Mbps.": "最低20 Mbpsの割り当てを推奨します。",
    "1 lower-case letter": "小文字1文字",
    "1 number": "数字1文字",
    "1 of the following special characters: !@#%": "以下の特殊文字のいずれか1文字: !@#%",
    "1 upper-case letter": "大文字1文字",
    "The password must be 8 to 32 characters and must contain at least:":
      "パスワードは8〜32文字で、以下を少なくとも含む必要があります:",
    "All actions should be editable between 1-30 days": "すべてのアクションは1〜30日の間で編集可能である必要があります",
    "*When selecting more than one parameter, duplications will be removed only if containing all selected parameters":
      "*複数のパラメータを選択した場合、選択したすべてのパラメータを含む場合のみ重複が削除されます",
    "Set the default uninstall password for all agents in the system":
      "システム内のすべてのエージェントに対するデフォルトのアンインストールパスワードを設定します",
    "agent deletion (days)": "エージェント削除までの日数",
    "amount of parallel upgrades": "並列アップグレード数",
    "confirm password": "パスワードの確認",
    "connection lost (days)": "接続断からの日数",
    "define password": "パスワードを設定",
    "security content updates": "セキュリティコンテンツの更新",
    "Palo Alto Networks - Cortex support": "Palo Alto Networksサポート",
    "During the first week of a new Cortex XDR agent release rollout, only a single batch of agents is upgraded. After that, auto-upgrades continue to be deployed across your network with the number of parallel upgrades as configured. Consider network bandwidth when determining the number of parallel upgrades in your environment.":
      "新しいCortex XDRエージェントリリースの展開開始から最初の1週間は、1バッチ分のエージェントのみがアップグレードされます。その後は、設定された並列アップグレード数に従ってネットワーク全体に自動アップグレードが継続的に展開されます。環境内の並列アップグレード数を決める際はネットワーク帯域幅を考慮してください。",
    "Note! Critical Environment Versions are designed for sensitive and highly regulated environments and do not contain all updates and content existing in standard versions. It is recommended to restrict the use of these versions to the required minimum.":
      "注意! 重要環境バージョンは、機密性が高く規制の厳しい環境向けに設計されており、標準バージョンに含まれるすべての更新・コンテンツを含んでいるわけではありません。これらのバージョンの使用は、必要最小限にとどめることを推奨します。",
    "Enable Cortex to automatically upload defined issue data files for advanced analysis. Advanced Analysis increases the Cortex exploit protection module accuracy":
      "定義済みのイシューデータファイルを高度な分析のために自動アップロードするようCortexを有効にします。高度な分析により、Cortexのエクスプロイト防止モジュールの精度が向上します",
    "Automatically apply Advanced Analysis exceptions to your Global Exceptions list. This will apply all Advanced Analysis exceptions suggested by Cortex, regardless of the issue data file source":
      "高度な分析の例外をグローバル例外リストに自動的に適用します。これにより、イシューデータファイルのソースにかかわらず、Cortexが提案するすべての高度な分析の例外が適用されます",
    "For optimized performance and reduced bandwidth consumption, ensure you install new agents with the distribution package available for Windows Cortex XDR agents 7.3 and later. Otherwise, if you distribute the agent installer via SCCM, it is recommended to configure the bandwidth you allocate in your organization for the Palo Alto Network":
      "パフォーマンスを最適化し帯域幅の消費を抑えるため、Windows版Cortex XDRエージェント7.3以降で提供される配布パッケージを使って新規エージェントをインストールしてください。SCCM経由でエージェントインストーラーを配布する場合は、組織内でPalo Alto Networksに割り当てる帯域幅を設定することを推奨します。",
    "When enabled, Cortex displays unique and informative BTP rule names and descriptions. While multiple issue names have been completely revised, the issue descriptions will include both the new descriptions and the previous descriptions that existed previously to better support the transition.":
      "有効にすると、Cortexは一意で分かりやすいBTPルール名と説明を表示します。複数のイシュー名が全面的に改訂されている一方で、イシューの説明には移行を円滑にするため、新しい説明と以前から存在していた説明の両方が含まれます。",
    "Note: If you have any Cortex filters, starring policies, exclusion policies, scoring rules, log forwarding queries, or automations rules configured for XSOAR / 3rd party SIEM, we advise you update those to support the changes before activating the feature (for example, change the query to include the previous description that is still available in the new description, instead of looking for an exact match).":
      "注: XSOAR/サードパーティ製SIEM向けに設定されたCortexフィルター、お気に入り登録ポリシー、除外ポリシー、スコアリングルール、ログ転送クエリ、自動化ルールがある場合は、この機能を有効化する前に、変更に対応できるよう更新することを推奨します(例: 完全一致で検索するのではなく、新しい説明に含まれている以前の説明を対象に含むようクエリを変更するなど)。",
  },

  patterns: [
    // "Distribution list (3)" -> "配布リスト (3)"
    { re: /^Distribution list\s+(\(\d+\))$/, tpl: "配布リスト $1" },
    // "6 hours" / "8 hours" -> "6時間" / "8時間"
    { re: /^(\d+)\s+hours?$/, tpl: "$1時間" },
    // "Use configured timezone (UTC +09 - Asia/Tokyo)" -> "設定済みのタイムゾーンを使用 (UTC +09 - Asia/Tokyo)"
    { re: /^Use configured timezone\s+(\(.+\))$/, tpl: "設定済みのタイムゾーンを使用 $1" },
    // "10 minutes" -> "10分"
    { re: /^(\d+)\s+minutes?$/, tpl: "$1分" },
    // "Results Preview - Matched 4390851 out of 4390851 Issues" -> "結果プレビュー - 4390851件中4390851件が一致"
    { re: /^Results Preview - Matched\s+([\d,]+)\s+out of\s+([\d,]+)\s+Issues$/, tpl: "結果プレビュー - $2件中$1件が一致" },
    // "domain name (0)" -> "ドメイン名 (0)"
    { re: /^domain name\s+(\(\d+\))$/, tpl: "ドメイン名 $1" },
    // "1 day" -> "1日"
    { re: /^(\d+)\s+days?$/, tpl: "$1日" },
    // "1 Item" / "2 Items" -> "1 件" / "2 件"
    { re: /^(\d+)\s+Items?$/, tpl: "$1 件" },
  ],

  skip: [
    // SLAルールの条件要約文(例: "Matches all issues.")。ルールごとに
    // 内容が変わる説明文のため、要望により翻訳対象から除外する。
    // SLA rule condition summary (e.g. "Matches all issues."). Excluded from translation by
    // request, since the text differs per rule.
    /^Matches .+\.$/,
    // SLA Rules画面の「説明」列(例: "Default Critical Issues Time to
    // Resolve SLA")も、要望により翻訳対象から除外している(対応する
    // exact エントリを削除済み)。
    // The SLA Rules screen's "Description" column (e.g. "Default Critical Issues Time to
    // Resolve SLA") is likewise excluded from translation by request (its exact-dictionary
    // entry has been removed).
  ],
};
