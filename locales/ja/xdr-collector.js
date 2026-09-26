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

const dictionaryXdrCollector = {
  exact: {
    "Collection Configurations": "収集構成",
    "Collector upgrade": "コレクターのアップグレード",
    "Collectors Configurations": "コレクター構成",
    "Configure the Cortex collector upgrade scheduler and number of parallel upgrades":
      "Cortexコレクターのアップグレードスケジューラーと並列アップグレード数を設定する",
    "Collection Administration": "収集管理",
    "Collector Alias": "コレクターのエイリアス",
    "Collector Version": "コレクターバージョン",
    "Connected, Disconnected": "接続済み, 切断済み",
    "IP Address": "IPアドレス",
    "XDR Collectors Administration": "XDRコレクター管理",
    "Assigned Policy": "割り当てられたポリシー",
    "Auto Upgrade Status": "自動アップグレードステータス",
    "Filebeat Status": "Filebeatステータス",
    "Filebeat Version": "Filebeatバージョン",
    "Group Names": "グループ名",
    "Install Date": "インストール日",
    "Last Used Proxy": "最後に使用したプロキシ",
    "Last Used Proxy Port": "最後に使用したプロキシポート",
    "Winlogbeat Status": "Winlogbeatステータス",
    "Winlogbeat Version": "Winlogbeatバージョン",
    "Add Group": "グループを追加",
    "Click 'Add Group' to create a new collection group": "「グループを追加」をクリックして新しい収集グループを作成してください",
    "Filter": "フィルター",
    "Group Name": "グループ名",
    "Group Type": "グループタイプ",
    "Members Count": "メンバー数",
    "No Collection Groups": "収集グループがありません",
    "XDR Collectors Groups": "XDRコレクターグループ",
    "Create Dynamic Group": "動的グループを作成",
    "Create New Collection Group": "新しい収集グループを作成",
    "Disable": "無効化",
    "No Collectors found": "コレクターが見つかりません",
    "Please enter a group name": "グループ名を入力してください",
    "Select field": "フィールドを選択",
    "Uninstalled": "アンインストール済み",
    "Value": "値",
    "XDR Collectors Endpoints": "XDRコレクターエンドポイント",
    "Use filters and / or manually select endpoints to create a": "フィルターを使用するか、手動でエンドポイントを選択して、以下を作成してください:",
    "static group": "静的グループ",
    "Click 'Create' to generate a new installation": "「作成」をクリックして新しいインストールを生成してください",
    "Create": "作成",
    "No Collection Installations": "収集インストールがありません",
    "Platform": "プラットフォーム",
    "XDR Collectors Installations": "XDRコレクターインストール",
    "Create Collection Installation": "収集インストールを作成",
    "Create New Installer": "新しいインストーラーを作成",
    "description (optional)": "説明(任意)",
    "Add profile": "プロファイルを追加",
    "Collection Profiles": "収集プロファイル",
    "Default collector settings profile for Linux": "Linux用のデフォルトコレクター設定プロファイル",
    "Default collector settings profile for Windows": "Windows用のデフォルトコレクター設定プロファイル",
    "Default profile for Windows collector": "Windowsコレクター用のデフォルトプロファイル",
    "Default profile for Winlogbeat collector": "Winlogbeatコレクター用のデフォルトプロファイル",
    "Default profile for linux collector": "linuxコレクター用のデフォルトプロファイル",
    "Usage Count": "使用数",
    "XDR Collectors Profiles": "XDRコレクタープロファイル",
    "New Profile": "新しいプロファイル",
    "Next": "次へ",
    "Profile": "プロファイル",
    "Select Platform": "プラットフォームを選択",
    "Add name here": "ここに名前を入力",
    "Configure automatic upgrade for the Cortex collector release.": "Cortexコレクターリリースの自動アップグレードを設定します。",
    "General Information": "一般情報",
    "Please insert a name": "名前を入力してください",
    "Use Default (Disabled)": "デフォルトを使用(無効)",
    "collector auto-upgrade": "コレクターの自動アップグレード",
    "profile name": "プロファイル名",
    "Define here your Filebeat configuration file (YAML) parameters":
      "ここでFilebeat設定ファイル(YAML)のパラメータを定義してください",
    "Filebeat Configuration File": "Filebeat設定ファイル",
    "For more information about defining the parameters, see the instructions":
      "パラメータの定義方法の詳細については、手順を参照してください",
    "Select template...": "テンプレートを選択...",
    "You can add more than one template to the configuration file.":
      "設定ファイルには複数のテンプレートを追加できます。",
    "You can also combine and edit templates.": "テンプレートを組み合わせて編集することもできます。",
    "Define here your Winlogbeat configuration file (YAML) parameters":
      "ここでWinlogbeat設定ファイル(YAML)のパラメータを定義してください",
    "Winlogbeat Configuration File": "Winlogbeat設定ファイル",
    "Any": "任意",
    "Target": "対象",
    "Linux Default": "Linuxデフォルト",
    "Windows Default": "Windowsデフォルト",
    "macOS Default": "macOSデフォルト",
    "Default Policy Rule for all Linux collectors": "すべてのLinuxコレクターに対するデフォルトポリシールール",
    "Default Policy Rule for all Windows collectors": "すべてのWindowsコレクターに対するデフォルトポリシールール",
    "XDR Collectors Policies": "XDRコレクターポリシー",
    "Back": "戻る",
    "Create New Policy": "新しいポリシーを作成",
    "Summary": "概要",
    "Notice: there was no filter applied and the current selection targets all endpoints on this platform":
      "注意: フィルターが適用されていないため、現在の選択はこのプラットフォームのすべてのエンドポイントを対象としています",
    "Architecture": "アーキテクチャ",
    "Collector ID": "コレクターID",
    "Installation Package": "インストールパッケージ",
    "OS Version": "OSバージョン",
    "Proxy": "プロキシ",
    "collector settings": "コレクター設定",
  },

  patterns: [],

  skip: [],
};
