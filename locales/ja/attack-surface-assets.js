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

const dictionaryAttackSurfaceAssets = {
  exact: {
    "Affected Page": "影響を受けるページ",
    "Appears on Page": "ページに表示",
    "HSTS": "HSTS",
    "Login": "ログイン",
    "No": "いいえ",
    "Purpose": "目的",
    "Required": "必須",
    "Submit Action URL": "送信先アクションURL",
    "Unknown": "不明",
    "Data Type": "データタイプ",
    "ID": "ID",
    "Name": "名前",
    "Other": "その他",
    "Result": "結果",
    "Script": "スクリプト",
    "Secure": "セキュア",
    "Status": "ステータス",
    "Tags": "タグ",
    "Technologies": "テクノロジー",
    "Type": "タイプ",
    "Version": "バージョン",
    "Web": "Web",
    "Asset Category": "アセットカテゴリ",
    "Asset Groups": "アセットグループ",
    "Asset ID": "アセットID",
    "Asset Id": "アセットID",
    "Categories": "カテゴリ",
    "Compliance": "コンプライアンス",
    "Configurations": "設定",
    "Configured Host": "設定済みホスト",
    "Contains": "含む",
    "Detected On": "検出日",
    "Externally Detected Provider": "外部で検出されたプロバイダー",
    "Exploitable": "悪用可能",
    "Fail": "不合格",
    "First Observed": "初回観測",
    "Geo Region for IP": "IPの地理的リージョン",
    "HTML Analysis": "HTML分析",
    "Hosting Services": "ホスティングサービス",
    "Has Issue": "イシューの有無",
    "Load balancers": "ロードバランサー",
    "Most Recent Screenshot": "最新のスクリーンショット",
    "Open Site in New Tab": "サイトを新しいタブで開く",
    "Other Websites": "その他のウェブサイト",
    "Other Websites Owned by Your Organization Hosted on the Same IP in the Last 30 Days":
      "過去30日間に同じIPでホストされている、貴社が所有するその他のウェブサイト",
    "PaaS": "PaaS",
    "Pass": "合格",
    "Port": "ポート",
    "Properties": "プロパティ",
    "Protocol Downgrade": "プロトコルダウングレード",
    "Redirects never downgrade from HTTPS to HTTP.": "リダイレクトはHTTPSからHTTPへダウングレードしません。",
    "Root Page HTTP Status Code": "ルートページのHTTPステータスコード",
    "Security Best Practice Analysis": "セキュリティベストプラクティス分析",
    "Security Best Practices Analysis": "セキュリティベストプラクティス分析",
    "Security Practice": "セキュリティプラクティス",
    "Service Name": "サービス名",
    "Services Hosting this Website": "このウェブサイトをホストしているサービス",
    "Sets valid Referrer-Policy Header": "有効なReferrer-Policyヘッダーを設定",
    "Technologies Detected in the Last 10 Days": "過去10日間で検出された技術",
    "Third Party Resources Detected in the Last 10 days": "過去10日間で検出されたサードパーティリソース",
    "Third Party URLs": "サードパーティURL",
    "This website uses HTTPS which encrypts data in transit between browser and server.":
      "このウェブサイトはHTTPSを使用しており、ブラウザとサーバー間の通信データを暗号化しています。",
    "Website": "ウェブサイト",
    "Website Details": "ウェブサイトの詳細",
  },

  patterns: [
    // "Captured Sep 11th 2026 from" -> "Sep 11th 2026に以下から取得:"
    { re: /^Captured (.+) from$/, tpl: "$1に以下から取得:" },
  ],

  skip: [],
};
