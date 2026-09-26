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
    "Exclude": "제외",
    "List:": "목록:",
    "Allow Override Policy": "재정의 정책 허용",
    "Domain Blocking": "도메인 차단",
    "EndPoint Isolation": "엔드포인트 격리",
    "IP Blocking": "IP 차단",
    "Quarantine File": "파일 격리",
    "User Hard Remediation": "사용자 하드 수정 조치",
    "User Soft Remediation": "사용자 소프트 수정 조치",
    "Excludes trusted or critical IPs and networks from automated IP blocking. Supports both full IPs and CIDR ranges.":
      "신뢰할 수 있거나 중요한 IP 및 네트워크를 자동 IP 차단에서 제외합니다. 전체 IP와 CIDR 범위를 모두 지원합니다.",
    "Excludes trusted or critical domains from automated domain blockage.":
      "신뢰할 수 있거나 중요한 도메인을 자동 도메인 차단에서 제외합니다.",
    "Excludes trusted or critical files from automated file quarantine actions. Specify full path and hash for accuracy.":
      "신뢰할 수 있거나 중요한 파일을 자동 파일 격리 작업에서 제외합니다. 정확성을 위해 전체 경로와 해시를 지정하세요.",
    "Excludes trusted or critical machines from automated endpoint isolation.":
      "신뢰할 수 있거나 중요한 머신을 자동 엔드포인트 격리에서 제외합니다.",
    "Excludes trusted or critical users from being blocked through hard remediation. Hard remediation requires an admin to restore user access.":
      "신뢰할 수 있거나 중요한 사용자가 하드 수정 조치로 차단되지 않도록 제외합니다. 하드 수정 조치에서는 관리자가 사용자 액세스를 복원해야 합니다.",
    "Excludes trusted or critical users from being blocked through soft remediation. Soft remediation allows users to regain access through steps such as two factor authentication.":
      "신뢰할 수 있거나 중요한 사용자가 소프트 수정 조치로 차단되지 않도록 제외합니다. 소프트 수정 조치에서는 사용자가 2단계 인증 등의 절차를 통해 액세스를 되찾을 수 있습니다.",
  },

  patterns: [],

  skip: [],
};
