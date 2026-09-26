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

const dictionaryKspm = {
  exact: {
    "BETA": "ベータ",
    "Node selector": "ノードセレクター",
    "Type node": "ノードを入力",
    "Add tag...": "タグを追加...",
    "Cases opened on your K8S environment": "K8S環境で発生したケース",
    "Cloud account": "クラウドアカウント",
    "Cluster name": "クラスター名",
    "Clusters": "クラスター",
    "Clusters Protection Coverage": "クラスター保護カバレッジ",
    "Clusters with detected malware in one or more of their resources": "1つ以上のリソースでマルウェアが検出されたクラスター",
    "Clusters with the highest number of high-severity vulnerabilities ranked by CVSS score": "CVSSスコアでランク付けした重要度の高い脆弱性の数が最も多いクラスター",
    "Deploy": "デプロイ",
    "Fully Protected": "完全に保護済み",
    "Kubernetes Assets Overview": "Kubernetes資産の概要",
    "Kubernetes Issues and Cases": "Kubernetesのイシューとケース",
    "Malware Detected": "マルウェアを検出",
    "Max CVSS": "最大CVSS",
    "Namespaces": "ネームスペース",
    "No malware detected in the last scan": "直近のスキャンでマルウェアは検出されませんでした",
    "Nodes": "ノード",
    "Open Graph": "グラフを開く",
    "Private Encryption Key": "秘密鍵",
    "Real-time Protection": "リアルタイム保護",
    "Secrets detected in Clusters": "クラスターで検出されたシークレット",
    "Select...": "選択...",
    "Top Clusters by vulnerabilities": "脆弱性別クラスタートップ",
    "Unprotected": "未保護",
    "Unprotected clusters": "未保護のクラスター",
    "Vulnerabilities": "脆弱性",
    "Apply": "適用",
    "Monitors workloads in real time to detect and block malicious activity, instantly preventing attacks as they happen.":
      "ワークロードをリアルタイムで監視して悪意のある活動を検出・ブロックし、攻撃の発生を即座に阻止します。",
    "Protect your Kubernetes estate with a lightweight posture management solution for continuous discovery, policy enforcement, and proactive scanning of vulnerabilities, secrets, malware, compliance, and misconfigurations.":
      "軽量なポスチャー管理ソリューションにより、Kubernetes環境全体を継続的に検出し、ポリシーを適用し、脆弱性・シークレット・マルウェア・コンプライアンス・設定ミスを事前にスキャンして保護します。",
    "Edit Posture management": "ポスチャー管理を編集",
    "Enable failure policies to be configured and applied at runtime by the Kubernetes admission controller, ensuring API requests are blocked when the admission fails.":
      "失敗ポリシーを設定・適用できるようにすることで、Kubernetesアドミッションコントローラーが実行時にAPIリクエストを処理し、アドミッションが失敗した場合にリクエストをブロックするようにします。",
    "Enforce policies for the Kubernetes admission controller to ensure compliant resources enter the cluster.":
      "Kubernetesアドミッションコントローラーにポリシーを適用し、準拠したリソースのみがクラスターに入るようにします。",
    "Every": "毎",
    "Fail": "失敗",
    "Failure policy": "失敗ポリシー",
    "Ignore": "無視",
    "Policy enforcement by the admission controller": "アドミッションコントローラーによるポリシー適用",
    "Registry scanning (OpenShift only)": "レジストリスキャン(OpenShiftのみ)",
    "Scan cadence": "スキャン頻度",
    "Scan container registry images stored in the OpenShift Container Platform registry for vulnerabilities, malware and secrets":
      "OpenShift Container Platformレジストリに保存されたコンテナレジストリイメージを、脆弱性・マルウェア・シークレットについてスキャンします",

    // --- Kubernetes資産のインベントリ/リソースエクスプローラー ---
    // --- Kubernetes assets inventory / Resource Explorer ---
    "Dive deeper into your environment": "環境をさらに深く掘り下げる",
    "Select a cloud provider to enter your Kubernetes assets and their relationships, all the way down to workloads, images, and hosts.":
      "クラウドプロバイダーを選択すると、ワークロード・イメージ・ホストに至るまで、Kubernetes資産とその関係性を確認できます。",
    "Scan Method": "スキャン方法",
    "Connectivity Status": "接続ステータス",
    "K8s Distribution": "K8sディストリビューション",
    "There’s nothing here, yet": "まだここには何もありません",
    "Posture management capability is not deployed yet, resulting in limited inventory visibility":
      "ポスチャー管理機能がまだデプロイされていないため、インベントリの可視性が制限されています",
    "K8s Connector Not Active": "K8sコネクタが非アクティブ",
    "The Kubernetes Connector is not active in this cluster. Please, verify if the connector is deployed and running.":
      "このクラスターでKubernetesコネクタが有効になっていません。コネクタがデプロイされ、実行されているかご確認ください。",
    "Last Communicated": "最終通信",
    "K8s Category": "K8sカテゴリ",
    "Assets per Namespace": "ネームスペースごとの資産数",
    "Assets per K8S Category": "K8sカテゴリごとの資産数",
    "Resource Explorer": "リソースエクスプローラー",
    "Container Image Vulnerability Findings": "コンテナイメージの脆弱性検出結果",
    "Kubernetes Nodes Vulnerability Findings": "Kubernetesノードの脆弱性検出結果",
    "Total Number of Vulnerability Findings": "脆弱性検出結果の総数",
    "Number of Scanned Images": "スキャン済みイメージ数",
    "Top 3 Most Vulnerable Images": "脆弱性が最も多いイメージ トップ3",
    "No Data Available": "データがありません",
    "Number of Scanned Nodes": "スキャン済みノード数",
    "Top 3 Most Vulnerable Nodes": "脆弱性が最も多いノード トップ3",
    "Node Name": "ノード名",
    "Node Type": "ノードタイプ",
    "Kubernetes clusters distribution": "Kubernetesクラスターの分布",
    "Kubernetes version distribution": "Kubernetesバージョンの分布",
    "Healthy": "正常",
    "Need update": "更新が必要",
    "Deploy connector": "コネクタをデプロイ",

    // --- 小文字表記のカラムヘッダー ---
    // --- Lowercase column headers ---
    "clusters": "クラスター",
  },

  patterns: [
    // "Secrets were found in N Clusters" -> "N 件のクラスターでシークレットが見つかりました"
    { re: /^Secrets were found in (\d+)\s+Clusters$/, tpl: "$1 件のクラスターでシークレットが見つかりました" },
    // "26 Clusters" (件数表示のスタットタイル) -> "クラスター 26件"
    // "26 Clusters" (a count stat tile) -> "クラスター 26件"
    { re: /^(\d[\d,]*)\s+Clusters$/, tpl: "クラスター $1件" },
    // "3 Healthy" / "3 Need update" (コネクタ健全性の件数表示スタットタイル)
    // "3 Healthy" / "3 Need update" (connector-health count stat tiles)
    { re: /^(\d[\d,]*)\s+Healthy$/, tpl: "正常 $1件" },
    { re: /^(\d[\d,]*)\s+Need update$/, tpl: "更新が必要 $1件" },
  ],

  skip: [],
};
