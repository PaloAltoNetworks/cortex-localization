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

const dictionaryDataSecurity = {
  exact: {
    "AI Workspaces": "AIワークスペース",
    "Data exposure issues highlight unsafe and over permissive exposure of sensitive data. Sensitive data that is publicly or widely exposed is at significantly higher risk for exfiltration and misuse.":
      "データ露出イシューは、機密データの安全でない過剰な露出を示します。パブリックまたは広く露出している機密データは、窃取や悪用のリスクが著しく高くなります。",
    "Data footprint findings highlight duplicate or redundant data remnants and assets across the environment. These data remnants can be considered for deletion or consolidation.":
      "データフットプリント検出結果は、環境全体にわたる重複または冗長なデータの残存物や資産を示します。これらのデータ残存物は、削除や統合を検討することができます。",
    "Sensitive data objects are atomic data units containing sensitive data. An object can be a file, a column in a database, and more.":
      "機密データオブジェクトとは、機密データを含む最小単位のデータのことです。オブジェクトには、ファイルやデータベースの列などが含まれます。",
    "Assets that contain large amounts of sensitive data and are at high level of risk often carry the largest risk for the organization. Focusing remediation efforts based on data impact can improve efficiency and pace of risk remediation":
      "大量の機密データを含み、リスクレベルが高い資産は、多くの場合、組織にとって最大のリスクとなります。データへの影響度に基づいて修復対応の優先順位を決めることで、リスク修復の効率とペースを改善できます",
    "AI Data Assets": "AIデータ資産",
    "Aggregative Assets Count": "資産の集計数",
    "Assets Count by Category": "カテゴリ別資産数",
    "Assets Discovered": "検出された資産",
    "Backups": "バックアップ",
    "Based on object count": "オブジェクト数に基づく",
    "Data Footprint Findings": "データフットプリント検出結果",
    "Disks": "ディスク",
    "Empty Storage Assets": "空のストレージ資産",
    "Exposed sensitive objects": "露出している機密オブジェクト",
    "Exposure Issues": "露出イシュー",
    "Exposure Issues and Footprint Findings": "露出イシューとフットプリント検出結果",
    "Managed": "管理対象",
    "Objects": "オブジェクト",
    "Only": "のみ",
    "Open to world": "全世界に公開",
    "Public objects in private storage": "非公開ストレージ内の公開オブジェクト",
    "SaaS Assets": "SaaS資産",
    "Sensitive Asset Types": "機密資産タイプ",
    "Sensitive Backups": "機密バックアップ",
    "Services": "サービス",
    "Shared with foreign project": "外部プロジェクトと共有",
    "Storage Asset with Shadow Backups": "シャドウバックアップを持つストレージ資産",
    "Storage Buckets": "ストレージバケット",
    "Top 5 Sensitive Asset Types": "機密資産タイプ トップ5",
    "Top Assets at Risk": "リスクのある資産トップ",
    "Top Data Security Issues": "対処すべき主要なデータセキュリティイシュー",
    "Top sensitive regions": "機密リージョントップ",
    "Total sensitive objects": "機密オブジェクトの合計",
    "View All": "すべて表示",
    "View All Services": "すべてのサービスを表示",
    "Zoom in": "ズームイン",
    "Zoom out": "ズームアウト",
    "AWS Secret Access Key": "AWSシークレットアクセスキー",
    "Adobe API key": "Adobe APIキー",
    "Amazon DynamoDB Table": "Amazon DynamoDBテーブル",
    "Azure Storage Account": "Azureストレージアカウント",
    "Azure Storage Account Key": "Azureストレージアカウントキー",
    "Base64 Basic Authentication": "Base64ベーシック認証",
    "Braintree Access Token": "Braintreeアクセストークン",
    "CIDR": "CIDR",
    "Card Security Code": "カードセキュリティコード",
    "Cardholder PIN": "カード保有者のPIN",
    "Credit Card Expiration Date": "クレジットカード有効期限",
    "Credit Card Number (JCB)": "クレジットカード番号(JCB)",
    "DataDog Token": "DataDogトークン",
    "Database Connection String": "データベース接続文字列",
    "Date of Birth": "生年月日",
    "Docker Swarm Join Token": "Docker Swarm参加トークン",
    "Driver's License Number": "運転免許証番号",
    "Dropbox App Key": "Dropboxアプリキー",
    "EBS Volume": "EBSボリューム",
    "Encoded Password": "エンコードされたパスワード",
    "Encrypted Password": "暗号化されたパスワード",
    "FTP Connection String": "FTP接続文字列",
    "Fingerprint": "指紋",
    "Gender": "性別",
    "Google API Key": "Google APIキー",
    "Google Cloud Storage Bucket": "Google Cloud Storageバケット",
    "Google Compute Engine Disk": "Google Compute Engineディスク",
    "Healthcare Common Procedure Coding Systemt (HCPCS)": "Healthcare Common Procedure Coding System (HCPCS)",
    "IBAN (Global)": "IBAN(グローバル)",
    "IPv4 Mapped Address": "IPv4マップアドレス",
    "Identification Number (Indonesia)": "身分証明書番号(インドネシア)",
    "Internal CIDR": "内部CIDR",
    "Internal IP Address": "内部IPアドレス",
    "Json Web Token (JWT)": "JSON Web Token (JWT)",
    "Latitude": "緯度",
    "License Plate Number": "ナンバープレート番号",
    "Longitude": "経度",
    "Marital Status": "婚姻状況",
    "Middle Name": "ミドルネーム",
    "National Health Index Number (New Zealand)": "国民保健番号(ニュージーランド)",
    "OpenWeatherMap Token": "OpenWeatherMapトークン",
    "Phone Number (UK)": "電話番号(英国)",
    "Political View": "政治的見解",
    "Postgres Username": "Postgresユーザー名",
    "reCAPTCHA Site Key": "reCAPTCHAサイトキー",
    "Religious Beliefs": "宗教的信条",
    "S3 Access Point": "S3アクセスポイント",
    "S3 Bucket": "S3バケット",
    "SWIFT Code (Global)": "SWIFTコード(グローバル)",
    "Salary": "給与",
    "Sexual Orientation": "性的指向",
    "Slack App-level Token": "Slackアプリレベルトークン",
    "Slack Bot Token": "Slackボットトークン",
    "Social Security Number (US)": "社会保障番号(米国)",
    "Sumo Logic Access ID": "Sumo LogicアクセスID",
    "Twilio Account ID": "Twilio アカウントID",
    "Vehicle ID Number (Global)": "車両識別番号(グローバル)",
    "Zip Code": "郵便番号",
    "Top Data Security Issues to Address": "対処すべき主要なデータセキュリティイシュー",
    "Remediate the most pressing issues to improve your data security posture": "データセキュリティポスチャーを改善するために、最も重要なイシューを修復してください",
    "Show All Issues": "すべてのイシューを表示",
    "Sensitive Messages Discovered Last 7 days": "過去7日間で検出された機密メッセージ",
    "Data Patterns": "データパターン",
    "Asset Data Issue Count": "資産のデータイシュー数",
    "Show Full Map": "全体マップを表示",
    "Objects at Risk": "リスクのあるオブジェクト",
    "Active Regions": "有効なリージョン",
    "AWS Access Key Id": "AWSアクセスキーID",
    "Billing": "請求",
    "City": "市区町村",
    "Country": "国",
    "Last Found": "最終検出",
    "Misc. Secret": "その他のシークレット",
    "Object At Risk": "リスクのあるオブジェクト",
    "PII": "PII",
    "Private Key": "秘密鍵",
    "Street Address": "番地",
    "US Phone Number": "米国電話番号",
    "US State": "米国州",
    "Tables Affected by Data Security Issues": "データセキュリティイシューの影響を受けているテーブル",
    "Tables Inventory": "テーブルインベントリ",
    "Data Patten Name": "データパターン名",
    "Row Percentage": "行の割合",
    "Tables With Sensitive Data": "機密データを含むテーブル",
    "Sensitive Tables Discovered Last 7 days": "過去7日間で検出された機密テーブル",
    "Table Name": "テーブル名",
    "Field Count": "フィールド数",
    "Schema Name": "スキーマ名",
    "Table ID": "テーブルID",
    "Asset Issue Count": "資産のイシュー数",
    "Field": "フィールド",
    "Rows": "行",
    "Files with sensitive data exposure": "機密データが露出しているファイル",
    "Message Name": "メッセージ名",
    "External Sensitive Messages": "外部の機密メッセージ",
    "External messages with sensitive data": "機密データを含む外部メッセージ",
    "Messages Inventory": "メッセージインベントリ",
    "Identities with Access": "アクセス権を持つアイデンティティ",
    "Message ID": "メッセージID",
    "Message Size Bytes": "メッセージサイズ(バイト)",
    "Message URL": "メッセージURL",
    "Last Modified Time": "最終更新日時",
    "Message Thread": "メッセージスレッド",
    "Owner ID": "所有者ID",
    "Owner Name": "所有者名",
    "Message Public URL": "メッセージの公開URL",
    "Message Type": "メッセージタイプ",
    "Messages": "メッセージ",
    "Asset": "資産",
    "CCPA": "CCPA",
    "Credit Card Number (Mastercard)": "クレジットカード番号(Mastercard)",
    "Credit Card Number (Visa)": "クレジットカード番号(Visa)",
    "Document": "ドキュメント",
    "Files Inventory": "ファイルインベントリ",
    "PCI": "PCI",
    "Sensitive Files Discovered Last 7 days": "過去7日間で検出された機密ファイル",
    "Affected by Data Security Issues": "データセキュリティイシューの影響を受けている",
    "Assets Inventory": "資産インベントリ",
    "Columns": "列",
    "Data Pattern Inventory": "データパターンインベントリ",
    "Data Security Detection Rules": "データセキュリティ検出ルール",
    "Data Security Issues": "データセキュリティイシュー",
    "Field Type": "フィールドタイプ",
    "Fields": "フィールド",
    "Fields Affected by Data Security Issues": "データセキュリティイシューの影響を受けているフィールド",
    "Fields Inventory": "フィールドインベントリ",
    "Fields With Patterns": "パターンを持つフィールド",
    "Fields With Patterns Discovered Last 7 days": "過去7日間でパターンが検出されたフィールド",
    "First and Last Name": "姓名",
    "Objects Inventory": "オブジェクトインベントリ",
    "Table size": "テーブルサイズ",
    "Tables": "テーブル",
    "Shadow Backups": "シャドウバックアップ",
    "External Sensitive Assets": "外部の機密資産",
    "Public Sensitive Assets": "パブリック機密資産",
    "View Assets": "資産を表示",
    "Pivot to Control": "コントロールに移動",
    "Permission scope": "権限スコープ",
    "Edit Data Topic": "データトピックを編集",
    "Enable Data Pattern": "データパターンを有効化",
    "Enabling it can cause changes in your data profile results and stop detection of this data pattern":
      "有効にすると、データプロファイルの結果に変化が生じ、このデータパターンの検出が停止する可能性があります",
    "Field ID": "フィールドID",
    "Data Topic name": "データトピック名",
    "Disable Data Topic": "データトピックを無効化",
    "Disabling it can cause changes in your data profile results and stop detection of this data topic":
      "無効にすると、データプロファイルの結果に変化が生じ、このデータトピックの検出が停止する可能性があります",
    "Disabling it can cause changes in your data profile results and stop detection of this data pattern":
      "無効にすると、データプロファイルの結果に変化が生じ、このデータパターンの検出が停止する可能性があります",
    "Disable Data Profile": "データプロファイルを無効化",
    "Enable Data Profile": "データプロファイルを有効化",
    "Disable Data Pattern": "データパターンを無効化",
    "Some of the data classification parameters are disabled.": "一部のデータ分類パラメータが無効になっています。",
    "Data Profile Details": "データプロファイルの詳細",
    "Some of the data classification parameters (data patterns, data topics) are disabled in this data profile":
      "このデータプロファイルでは、一部のデータ分類パラメータ(データパターン、データトピック)が無効になっています",
    "To enable them, go to the data classification settings pages or \"Enable all\".":
      "有効にするには、データ分類の設定ページに移動するか、「すべて有効化」をクリックしてください。",
    "Enable all": "すべて有効化",
  },

  patterns: [
    // "3.4K AWS Assets" -> "AWS資産 3.4K件"
    { re: /^([\d.,]+[KMB]?)\s+(AWS|Azure|GCP)\s+Assets$/, tpl: "$2資産 $1件" },
    // "Nationality (Japan)" -> "国籍(Japan)"
    { re: /^Nationality \((.+)\)$/, tpl: "国籍($1)" },
    // "Nationality" (bare) -> "国籍"
    { re: /^Nationality$/, tpl: "国籍" },
    // "First Discovered on Sep 8, 2026, 10:22 PM" -> "初回検出日: Sep 8, 2026, 10:22 PM"
    { re: /^First Discovered on (.+)$/, tpl: "初回検出日: $1" },
    // "2M Objects at Risk" -> "リスクのあるオブジェクト 2M件"
    { re: /^([\d.,]+[KMB]?)\s+Objects at Risk$/, tpl: "リスクのあるオブジェクト $1件" },
    // "79 Regions Found" -> "リージョンが79件見つかりました"
    { re: /^([\d,]+)\s+Regions Found$/, tpl: "リージョンが$1件見つかりました" },
    // "79 active regions" -> "有効なリージョン 79件"
    { re: /^([\d,]+)\s+active regions$/, tpl: "有効なリージョン $1件" },
    // "44 Tables With Sensitive Data" -> "機密データを含むテーブル 44件"
    { re: /^([\d,]+)\s+Tables With Sensitive Data$/, tpl: "機密データを含むテーブル $1件" },
    // "0 Sensitive Tables Discovered Last 7 days" -> "過去7日間で検出された機密テーブル 0件"
    { re: /^([\d,]+)\s+Sensitive Tables Discovered Last 7 days$/, tpl: "過去7日間で検出された機密テーブル $1件" },
    // "0 External messages with sensitive data" -> "機密データを含む外部メッセージ 0件"
    { re: /^([\d,]+)\s+External messages with sensitive data$/, tpl: "機密データを含む外部メッセージ $1件" },
    // "N Sensitive Messages Discovered Last 7 days" -> "過去7日間で検出された機密メッセージ N件"
    { re: /^([\d,]+)\s+Sensitive Messages Discovered Last 7 days$/, tpl: "過去7日間で検出された機密メッセージ $1件" },
    // "191,773 Sensitive Files Discovered Last 7 days" -> "過去7日間で検出された機密ファイル 191,773件"
    { re: /^([\d,]+)\s+Sensitive Files Discovered Last 7 days$/, tpl: "過去7日間で検出された機密ファイル $1件" },
    // "1,173 Shadow Backups" -> "シャドウバックアップ 1,173件"
    { re: /^([\d,]+)\s+Shadow Backups$/, tpl: "シャドウバックアップ $1件" },
    // "0 Files with sensitive data exposure" -> "機密データが露出しているファイル 0件"
    { re: /^([\d,]+)\s+Files with sensitive data exposure$/, tpl: "機密データが露出しているファイル $1件" },
    // "111 Fields With Patterns" -> "パターンを持つフィールド 111件"
    { re: /^(\d[\d,]*)\s+Fields With Patterns$/, tpl: "パターンを持つフィールド $1件" },
    // "0 Fields With Patterns Discovered Last 7 days" -> "過去7日間でパターンが検出されたフィールド 0件"
    { re: /^(\d[\d,]*)\s+Fields With Patterns Discovered Last 7 days$/, tpl: "過去7日間でパターンが検出されたフィールド $1件" },
    // "0 Affected by Data Security Issues" -> "データセキュリティイシューの影響を受けている 0件"
    { re: /^(\d[\d,]*)\s+Affected by Data Security Issues$/, tpl: "データセキュリティイシューの影響を受けている $1件" },
    // "0 Public Sensitive Assets" -> "パブリック機密資産 0件"
    { re: /^(\d[\d,]*)\s+Public Sensitive Assets$/, tpl: "パブリック機密資産 $1件" },
    // "0 External Sensitive Assets" -> "外部の機密資産 0件"
    { re: /^(\d[\d,]*)\s+External Sensitive Assets$/, tpl: "外部の機密資産 $1件" },
    // "Backups older than 90d" -> "90日以上前のバックアップ"
    // (経過日数のしきい値は設定によって変わりうるため可変にしている)
    // (The elapsed-day threshold can vary depending on configuration, so it's kept as a variable.)
    { re: /^Backups older than (\d+)d$/, tpl: "$1日以上前のバックアップ" },
    // "0 Sensitive Backups" -> "機密バックアップ 0件"
    { re: /^(\d[\d,]*)\s+Sensitive Backups$/, tpl: "機密バックアップ $1件" },
    // "122 Backups older than 90d" -> "90日以上前のバックアップ 122件"
    // (件数・経過日数のしきい値いずれも可変)
    // (Both the count and the elapsed-day threshold are variable.)
    { re: /^(\d[\d,]*)\s+Backups older than (\d+)d$/, tpl: "$2日以上前のバックアップ $1件" },
    // "This data pattern is being used by 1 Data Profile:" -> "このデータパターンは1件のデータプロファイルで使用されています:"
    { re: /^This data pattern is being used by (\d[\d,]*) Data Profiles?:$/, tpl: "このデータパターンは$1件のデータプロファイルで使用されています:" },
    // "This data topic is being used by 0 Data Profiles:" -> "このデータトピックは0件のデータプロファイルで使用されています:"
    { re: /^This data topic is being used by (\d[\d,]*) Data Profiles?:$/, tpl: "このデータトピックは$1件のデータプロファイルで使用されています:" },
    // "Are you sure you want to disable the following Data Profiles? GDPR"
    // -> "以下のデータプロファイルを無効化してもよろしいですか? GDPR"
    // (対象のデータプロファイル名は選択によって変わるため可変にしている)
    // (The target Data Profile name(s) vary depending on the selection, so kept as a variable.)
    { re: /^Are you sure you want to disable the following Data Profiles\? (.+)$/, tpl: "以下のデータプロファイルを無効化してもよろしいですか? $1" },
    // "Are you sure you want to enable the following Data Profiles? CCN (Credit Card Numbers)"
    // -> "以下のデータプロファイルを有効化してもよろしいですか? CCN (Credit Card Numbers)"
    { re: /^Are you sure you want to enable the following Data Profiles\? (.+)$/, tpl: "以下のデータプロファイルを有効化してもよろしいですか? $1" },
  ],

  skip: [],
};
