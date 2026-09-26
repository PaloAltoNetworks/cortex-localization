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

const dictionaryDataBroker = {
  exact: {
    // --- Broker VMs / Clusters タブ ---
    // --- Broker VMs / Clusters tab ---
    "Add": "追加",
    "Add Broker": "ブローカーを追加",
    "Add Cluster": "クラスターを追加",
    "Apps": "アプリ",
    "Brokers": "ブローカー",
    "Configuration Status": "構成ステータス",
    "Device Name": "デバイス名",
    "Device ID": "デバイスID",
    "All interfaces": "すべてのインターフェース",
    "External Interface": "外部インターフェース",
    "Download": "ダウンロード",
    "Generate Token": "トークンを生成",
    "Local Agent Settings": "ローカルエージェント設定",
    "Network Mapper": "ネットワークマッパー",
    "Registry Scanner": "レジストリスキャナー",
    "Up to date": "最新",
    "must be rebooted to finish installing important updates":
      "重要な更新のインストールを完了するには再起動が必要です",
    "CPU Usage": "CPU使用率",
    "Disk Usage": "ディスク使用率",
    "Memory Usage": "メモリ使用率",
    "Please change the date or filters to view results.": "結果を表示するには、日付またはフィルターを変更してください。",
    "Done": "完了",
    "Generating Token...": "トークンを生成中...",
    "Notice! This token will not be accessible once you close this window":
      "注意! このウィンドウを閉じると、このトークンには二度とアクセスできなくなります",
    "VM token": "VMトークン",

    // --- Add Cluster 画面 ---
    // --- Add Cluster screen ---
    "Cluster Configurations": "クラスター設定",
    "Configure the cluster automatic upgrade settings": "クラスターの自動アップグレード設定を構成する",
    "Define listening port and protocol for the Load Balancer Health-Check":
      "ロードバランサーのヘルスチェック用にリッスンポートとプロトコルを定義してください",
    "Define the Load Balancer FQDN": "ロードバランサーのFQDNを定義してください",
    "Define the cluster name": "クラスター名を定義してください",
    "Load Balancer FQDN": "ロードバランサーFQDN",
    "Load Balancer Health-Check": "ロードバランサーのヘルスチェック",
    "Port": "ポート",
    "Specific": "特定",
    "Use Default (Enabled)": "デフォルトを使用(有効)",
    "Auto Upgrade": "自動アップグレード",
    "auto upgrade": "自動アップグレード",
    "protocol": "プロトコル",
    "schedule": "スケジュール",
    "days in week": "曜日",

    // --- Engines タブ ---
    // --- Engines tab ---
    "Create New Engine": "新しいエンジンを作成",
    "No Results": "結果がありません",
    "Allow running multiple engines on the same machine": "同じマシンで複数のエンジンの実行を許可する",
    "Engine name": "エンジン名",
    "Installer Type": "インストーラータイプ",
    "JSON formatted configuration": "JSON形式の設定",
    "Name is required and must be unique": "名前は必須で、一意である必要があります",
    "Shell": "シェル",
  },

  patterns: [
    // "1 broker" / "3 brokers" -> "ブローカー 1 台" / "ブローカー 3 台"
    { re: /^(\d+)\s+brokers?$/, tpl: "ブローカー $1 台" },
    // "7 days selected" -> "7日選択中"
    { re: /^(\d+)\s+days? selected$/, tpl: "$1日選択中" },
  ],

  skip: [],
};
