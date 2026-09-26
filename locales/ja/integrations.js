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

const dictionaryIntegrations = {
  exact: {
    "API Keys for external threat intel": "外部脅威インテリジェンス用APIキー",
    "SERVICE NAME": "サービス名",
    "license key": "ライセンスキー",
    "Search credential...": "認証情報を検索...",
    "Enter the connection details and click Verify to confirm that the S3 URI path is authorized in the gateway.":
      "接続情報を入力し、「確認」をクリックして、S3 URIパスがゲートウェイで許可されていることを確認してください。",
    "Enter the connection details and click Verify to confirm that the Queue URL path is authorized in the gateway.":
      "接続情報を入力し、「確認」をクリックして、Queue URLパスがゲートウェイで許可されていることを確認してください。",
    "Enter the connection details and click Verify to confirm that the Splunk HTTP event collector URL path is authorized in the gateway.":
      "接続情報を入力し、「確認」をクリックして、Splunk HTTPイベントコレクターのURLパスがゲートウェイで許可されていることを確認してください。",
    "Enter the connection details and click Verify to confirm that the Webhook URL path is authorized in the gateway.":
      "接続情報を入力し、「確認」をクリックして、WebhookのURLパスがゲートウェイで許可されていることを確認してください。",
    "Connect": "接続",
    "Connect syslog server": "Syslogサーバーを接続",
    "Ignore certificate errors": "証明書エラーを無視",
    "destination": "宛先",
    "facility": "ファシリティ",
    "DOMAIN NAMES EDL URL:": "ドメイン名 EDL URL:",
    "Enable External Dynamic List": "外部動的リストを有効にする",
    "Enabling External Dynamic Lists (EDL) allows integration of your defined external Domain Names and IP Addresses lists with your firewall.":
      "外部動的リスト(EDL)を有効にすると、定義した外部のドメイン名リストおよびIPアドレスリストをファイアウォールと連携できます。",
    "External Dynamic List - PAN-OS": "外部動的リスト - PAN-OS",
    "External Dynamic List Credentials": "外部動的リストの認証情報",
    "For more information on how EDL integrates with Palo Alto firewalls, see":
      "EDLがPalo Altoファイアウォールとどのように連携するかについては、以下を参照してください",
    "IP ADDRESSES EDL URL:": "IPアドレス EDL URL:",
    "Using an External Dynamic List in Policy": "ポリシーでの外部動的リストの使用",
    "Copy API URL": "APIのURLをコピー",
    "New Key": "新しいキー",
    "User Email": "ユーザーのメールアドレス",
    "API key can be used as-is (suitable for curl).": "APIキーはそのまま使用できます(curlに適しています)。",
    "API key must be hashed with a random arbitrary number and a timestamp (this option is suitable for proprietary scripts and intended to prevent replay attacks).":
      "APIキーは、任意のランダムな数値とタイムスタンプでハッシュ化する必要があります(独自スクリプト向けのオプションで、リプレイ攻撃の防止を目的としています)。",
    "Advanced": "詳細",
    "CLI Tools": "CLIツール",
    "Components": "コンポーネント",
    "Enable Expiration Date": "有効期限を設定する",
    "Exceptions Configuration": "例外の設定",
    "Generate": "生成",
    "Generate API Key": "APIキーを生成",
    "Notice!": "注意!",
    "This key will not be accessible once you close this window": "このウィンドウを閉じると、このキーには二度とアクセスできなくなります",
    "Learn more.": "詳細はこちら。",
    "No assets": "資産がありません",
    "No domains": "ドメインがありません",
    "No endpoints": "エンドポイントがありません",
    "Provide access to Domains to view their related Cases and Issues. Users can only view cases or issues referencing assets and endpoints within their scope.":
      "ドメインへのアクセス権を付与すると、それに関連するケースおよびイシューを閲覧できるようになります。ユーザーは自身のスコープ内の資産・エンドポイントを参照するケースまたはイシューのみ閲覧できます。",
    "Scope Definition": "スコープの定義",
    "Scope is applied to selected features in the system. For features where scoping is not applicable, role-based access control (RBAC) is used and can be configured under Settings > Configurations > Access Management":
      "スコープは、システム内の選択した機能に適用されます。スコープが適用されない機能では、ロールベースアクセス制御(RBAC)が使用され、設定 > 構成 > アクセス管理から設定できます",
    "Select Role": "ロールを選択",
    "Select date and time": "日時を選択",
    "After downloading the MCP file, generate a new API key": "MCPファイルをダウンロードしたら、新しいAPIキーを生成してください",
    "Download checksum file": "チェックサムファイルをダウンロード",
    "Download the file below to set up your Cortex MCP Server.": "以下のファイルをダウンロードして、Cortex MCP Serverをセットアップしてください。",
    "MCP File": "MCPファイル",
    "To fully set up the Cortex MCP Server, please review and follow the instructions in the":
      "Cortex MCP Serverを完全にセットアップするには、以下の手順を確認して従ってください:",
    "directory service": "ディレクトリサービス",
    "Click": "クリックして",
    "to add directory sync tenant": "ディレクトリ同期テナントを追加",
    "Create one.": "作成してください。",
    "New Credential": "新しい認証情報",
    "There are no Credential Sets to show here.": "表示できる認証情報セットがありません。",
    "Credential Name": "認証情報の名前",
    "Name must be unique, not empty, and must not contain ()": "名前は一意で、空でなく、()を含んではいけません",
    "Workgroup": "ワークグループ",
  },

  patterns: [
    // "Showing 3/3 Instances" -> "3/3 件のインスタンスを表示中"
    { re: /^Showing\s+(\d+\/\d+)\s+Instances$/, tpl: "$1 件のインスタンスを表示中" },
    // "1 Connected" / "2 Connected" -> "接続済み 1 件"
    { re: /^(\d+)\s+Connected$/, tpl: "接続済み $1 件" },
    // "1 Error" -> "エラー 1 件"
    { re: /^(\d+)\s+Errors?$/, tpl: "エラー $1 件" },
  ],

  skip: [],
};
