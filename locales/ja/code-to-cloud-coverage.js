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

const dictionaryCodeToCloudCoverage = {
  exact: {
    // --- Code to Cloud カバレッジ画面 ---
    // --- Code to Cloud coverage screen ---
    "Artifact type": "アーティファクトタイプ",
    "Artifacts traced from runtime": "ランタイムから追跡されたアーティファクト",
    "Infrastructure": "インフラストラクチャ",
    "Cloud assets traced from runtime": "ランタイムから追跡されたクラウド資産",
    "Cloud assets fully traced cloud-to-code": "クラウドからコードまで完全に追跡されたクラウド資産",
    "Cloud assets lack YOR tags; manual tagging needed": "クラウド資産にYORタグがありません。手動でのタグ付けが必要です",
    "Tagging Needed": "タグ付けが必要",
    "View Cloud assets without YOR tag": "YORタグのないクラウド資産を表示",
    "Cloud assets without YOR TAG": "YORタグのないクラウド資産",
    "Calculate to": "計算先",
    "Artifacts traced from source": "ソースから追跡されたアーティファクト",
    "VCS Repos lack connected pipelines to trace to build": "VCSリポジトリにビルドまで追跡するための接続済みパイプラインがありません",
    "View repositories": "リポジトリを表示",
    "Repos with no traced pipelines": "追跡されたパイプラインがないリポジトリ",
    "VCS Repos lack registry connection for trace to deploy": "VCSリポジトリにデプロイまで追跡するためのレジストリ接続がありません",
    "Repos with no traced artifact registries": "追跡されたアーティファクトレジストリがないリポジトリ",
    "Build": "ビルド",
    "Calculate from": "計算元",
    "Cloud → Code": "Cloud → Code",
    "Code → Cloud": "Code → Cloud",
    "Container Images not traced beyond Deploy": "デプロイより先まで追跡されていないコンテナイメージ",
    "Container images lack VCS repos to trace to Code": "コンテナイメージにコードまで追跡するためのVCSリポジトリがありません",
    "Container images lack pipelines to trace to Build": "コンテナイメージにビルドまで追跡するためのパイプラインがありません",
    "Deployment": "デプロイ",
    "Flow Direction": "フローの方向",
    "Onboard CI/CD instances": "CI/CDインスタンスをオンボード",
    "Onboard Container Registries": "コンテナレジストリをオンボード",
    "Onboard VCS Organization/repo": "VCS組織/リポジトリをオンボード",
    "Onboarding suggested": "オンボードが推奨されています",
    "Recommended Next Steps": "推奨される次のステップ",
    "Runtime Images not traced": "追跡されていないランタイムイメージ",
    "Runtime Images not traced beyond pipeline": "パイプラインより先まで追跡されていないランタイムイメージ",
    "Runtime artifacts": "ランタイムアーティファクト",
    "Runtime artifacts fully traced cloud-to-code": "クラウドからコードまで完全に追跡されたランタイムアーティファクト",
    "Runtime images lack registries to trace to Deploy": "ランタイムイメージにデプロイまで追跡するためのレジストリがありません",
    "Steps required to improve traceability": "トレーサビリティを改善するために必要な手順",
    "VM instances lack pipelines to trace to Build": "VMインスタンスにビルドまで追跡するためのパイプラインがありません",
    "VM instances not traced beyond Runtime": "ランタイムより先まで追跡されていないVMインスタンス",
    "View Runtime Images traced only to pipeline": "パイプラインまでのみ追跡されたランタイムイメージを表示",
    "View Untraced Container Images": "未追跡のコンテナイメージを表示",
    "View Untraced VM Instances": "未追跡のVMインスタンスを表示",
    "What is being traced": "何が追跡されているか",
    "Untraced": "未追跡",
    "No repositories detected": "リポジトリが検出されませんでした",
    // 原文ママ("not transferred")。他の項目は"not traced"(未追跡)という
    // 表現だが、この項目だけ異なる単語が使われている。実際の表示テキストと
    // 完全一致させるためそのまま採用。
    // Kept verbatim ("not transferred"). Other items use "not traced", but this one uses a
    // different word; kept as-is to exact-match the actual displayed text.
    "Cloud Assets not transferred": "転送されていないクラウド資産",
    "IaC resource traced from code": "コードから追跡されたIaCリソース",
    "No runtime detected": "ランタイムが検出されませんでした",
    "No pipelines detected": "パイプラインが検出されませんでした",
    "No deployment detected": "デプロイが検出されませんでした",
    "Artifacts transferred": "転送されたアーティファクト",
    "Artifacts not transferred": "転送されていないアーティファクト",
    "Repositories not transferred": "転送されていないリポジトリ",
    "IaC resources not transferred": "転送されていないIaCリソース",
    "Repositories transferred": "転送されたリポジトリ",
    "Cloud Assets transferred": "転送されたクラウド資産",
    "IaC resources transferred": "転送されたIaCリソース",
    "IaC resources lack YOR tags to trace to runtime": "IaCリソースにランタイムまで追跡するためのYORタグがありません",
    "Tagged IaC resources lack cloud accounts for Runtime trace": "タグ付け済みのIaCリソースにランタイム追跡用のクラウドアカウントがありません",
    "View IaC resources without YOR tag": "YORタグのないIaCリソースを表示",
    "View untraced tagged IaC resources": "未追跡のタグ付きIaCリソースを表示",
    "Onboard Cloud Accounts": "クラウドアカウントをオンボード",
    // 実際のDOMでは件数(例: "829")がハイライト用の別のspanに、"/ 1244"部分と
    // ラベル部分がAngularのコメントノード(<!---->)を挟んでさらに別々の
    // テキストノードに分かれている。そのためこのラベル部分だけが独立した
    // テキストノードとして辞書と照合されるので、完全一致で登録する。
    // In the actual DOM, the count (e.g. "829") sits in its own highlight span,
    // and the "/ 1244" part and the label are further split into separate text
    // nodes by an Angular comment node (<!---->) in between. So this label
    // reaches the dictionary as its own isolated text node — register it as
    // an exact match rather than a fraction pattern.
    // "wo"は"without"の略記(原文ママ)。表示上の意味に合わせて訳文を作成する。
    // "wo" is shorthand for "without" as displayed in the product; translated by meaning.
    "IaC resources wo YOR": "YORタグなしのIaCリソース",
    "IaC resources with YOR but not traced": "YORタグはあるが未追跡のIaCリソース",
  },

  patterns: [
    // "2 / 162.7K Cloud assets fully traced cloud-to-code" -> "2 / 162.7K クラウドからコードまで完全に追跡されたクラウド資産"
    // 冒頭の分数(件数)部分は可変のため未翻訳のまま維持する。
    // The leading fraction (count) part is variable and left untranslated.
    { re: /^([\d,.]+\s*\/\s*[\d,.]+[A-Za-z]*)\s+Cloud assets fully traced cloud-to-code$/,
      tpl: "$1 クラウドからコードまで完全に追跡されたクラウド資産" },
    // "4 / 1.2K IaC resources fully traced code-to-cloud" -> "4 / 1.2K コードからクラウドまで完全に追跡されたIaCリソース"
    { re: /^([\d,.]+\s*\/\s*[\d,.]+[A-Za-z]*)\s+IaC resources fully traced code-to-cloud$/,
      tpl: "$1 コードからクラウドまで完全に追跡されたIaCリソース" },
    // "/ 94 Repositories fully traced code-to-cloud" -> "/ 94 コードからクラウドまで完全に追跡されたリポジトリ"
    // 分子(件数)部分は別要素で表示されており、このテキストノードには"/ 94"の
    // 部分のみが含まれる。可変のため未翻訳のまま維持する。
    // The numerator is rendered in a separate sibling element; this text node only
    // contains the "/ 94" part, which is variable and left untranslated.
    { re: /^(\/\s*[\d,.]+[A-Za-z]*)\s+Repositories fully traced code-to-cloud$/,
      tpl: "$1 コードからクラウドまで完全に追跡されたリポジトリ" },
    // "/ 7.5K Runtime artifacts fully traced cloud-to-code" -> "/ 7.5K クラウドからコードまで完全に追跡されたランタイムアーティファクト"
    { re: /^(\/\s*[\d,.]+[A-Za-z]*)\s+Runtime artifacts fully traced cloud-to-code$/,
      tpl: "$1 クラウドからコードまで完全に追跡されたランタイムアーティファクト" },
    // "/ 1.2K IaC resources fully traced code-to-cloud" -> "/ 1.2K コードからクラウドまで完全に追跡されたIaCリソース"
    { re: /^(\/\s*[\d,.]+[A-Za-z]*)\s+IaC resources fully traced code-to-cloud$/,
      tpl: "$1 コードからクラウドまで完全に追跡されたIaCリソース" },
    // "/ 162.7K Cloud assets fully traced cloud-to-code" -> "/ 162.7K クラウドからコードまで完全に追跡されたクラウド資産"
    { re: /^(\/\s*[\d,.]+[A-Za-z]*)\s+Cloud assets fully traced cloud-to-code$/,
      tpl: "$1 クラウドからコードまで完全に追跡されたクラウド資産" },
  ],

  skip: [],
};
