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

const dictionaryAutomationExclusionCenter = {
  exact: {
    "Exclude": "除外",
    "List:": "リスト:",
    "Allow Override Policy": "上書きポリシーを許可",
    "Domain Blocking": "ドメインブロック",
    "EndPoint Isolation": "エンドポイント分離",
    "IP Blocking": "IPブロック",
    "Quarantine File": "ファイルの隔離",
    "User Hard Remediation": "ユーザーのハード修復",
    "User Soft Remediation": "ユーザーのソフト修復",
    "Excludes trusted or critical IPs and networks from automated IP blocking. Supports both full IPs and CIDR ranges.":
      "信頼できる、または重要なIP・ネットワークを、自動IPブロックの対象から除外します。完全なIPアドレスとCIDR範囲の両方に対応しています。",
    "Excludes trusted or critical domains from automated domain blockage.":
      "信頼できる、または重要なドメインを、自動ドメインブロックの対象から除外します。",
    "Excludes trusted or critical files from automated file quarantine actions. Specify full path and hash for accuracy.":
      "信頼できる、または重要なファイルを、自動ファイル隔離処理の対象から除外します。正確性のため、完全なパスとハッシュ値を指定してください。",
    "Excludes trusted or critical machines from automated endpoint isolation.":
      "信頼できる、または重要なマシンを、自動エンドポイント分離の対象から除外します。",
    "Excludes trusted or critical users from being blocked through hard remediation. Hard remediation requires an admin to restore user access.":
      "信頼できる、または重要なユーザーを、ハード修復によるブロックの対象から除外します。ハード修復では、ユーザーアクセスの復旧に管理者による対応が必要になります。",
    "Excludes trusted or critical users from being blocked through soft remediation. Soft remediation allows users to regain access through steps such as two factor authentication.":
      "信頼できる、または重要なユーザーを、ソフト修復によるブロックの対象から除外します。ソフト修復では、2要素認証などの手順によってユーザー自身でアクセスを復旧できます。",
  },

  patterns: [],

  skip: [],
};
