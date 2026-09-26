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
    "API Keys for external threat intel": "외부 위협 인텔리전스용 API 키",
    "SERVICE NAME": "서비스 이름",
    "license key": "라이선스 키",
    "Search credential...": "자격 증명 검색...",
    "Enter the connection details and click Verify to confirm that the S3 URI path is authorized in the gateway.":
      "연결 세부 정보를 입력하고 \"확인\"을 클릭하여 게이트웨이에서 S3 URI 경로가 승인되었는지 확인하세요.",
    "Enter the connection details and click Verify to confirm that the Queue URL path is authorized in the gateway.":
      "연결 세부 정보를 입력하고 \"확인\"을 클릭하여 게이트웨이에서 Queue URL 경로가 승인되었는지 확인하세요.",
    "Enter the connection details and click Verify to confirm that the Splunk HTTP event collector URL path is authorized in the gateway.":
      "연결 세부 정보를 입력하고 \"확인\"을 클릭하여 게이트웨이에서 Splunk HTTP 이벤트 수집기 URL 경로가 승인되었는지 확인하세요.",
    "Enter the connection details and click Verify to confirm that the Webhook URL path is authorized in the gateway.":
      "연결 세부 정보를 입력하고 \"확인\"을 클릭하여 게이트웨이에서 Webhook URL 경로가 승인되었는지 확인하세요.",
    "Connect": "연결",
    "Connect syslog server": "Syslog 서버 연결",
    "Ignore certificate errors": "인증서 오류 무시",
    "destination": "대상",
    "facility": "기능(facility)",
    "DOMAIN NAMES EDL URL:": "도메인 이름 EDL URL:",
    "Enable External Dynamic List": "외부 동적 목록 사용",
    "Enabling External Dynamic Lists (EDL) allows integration of your defined external Domain Names and IP Addresses lists with your firewall.":
      "외부 동적 목록(EDL)을 사용 설정하면 정의한 외부 도메인 이름 및 IP 주소 목록을 방화벽과 통합할 수 있습니다.",
    "External Dynamic List - PAN-OS": "외부 동적 목록 - PAN-OS",
    "External Dynamic List Credentials": "외부 동적 목록 자격 증명",
    "For more information on how EDL integrates with Palo Alto firewalls, see":
      "EDL이 Palo Alto 방화벽과 통합되는 방식에 대한 자세한 내용은 다음을 참조하세요:",
    "IP ADDRESSES EDL URL:": "IP 주소 EDL URL:",
    "Using an External Dynamic List in Policy": "정책에서 외부 동적 목록 사용",
    "Copy API URL": "API URL 복사",
    "New Key": "새 키",
    "User Email": "사용자 이메일",
    "API key can be used as-is (suitable for curl).": "API 키를 그대로 사용할 수 있습니다(curl에 적합).",
    "API key must be hashed with a random arbitrary number and a timestamp (this option is suitable for proprietary scripts and intended to prevent replay attacks).":
      "API 키를 임의의 난수 및 타임스탬프와 함께 해시해야 합니다(독점 스크립트에 적합하며 재전송 공격 방지를 위한 옵션).",
    "Advanced": "고급",
    "CLI Tools": "CLI 도구",
    "Components": "구성 요소",
    "Enable Expiration Date": "만료 날짜 사용",
    "Exceptions Configuration": "예외 구성",
    "Generate": "생성",
    "Generate API Key": "API 키 생성",
    "Notice!": "주의!",
    "This key will not be accessible once you close this window": "이 창을 닫으면 이 키에 다시 액세스할 수 없습니다",
    "Learn more.": "자세히 알아보기.",
    "No assets": "자산 없음",
    "No domains": "도메인 없음",
    "No endpoints": "엔드포인트 없음",
    "Provide access to Domains to view their related Cases and Issues. Users can only view cases or issues referencing assets and endpoints within their scope.":
      "도메인에 대한 액세스 권한을 제공하여 관련 케이스 및 이슈를 볼 수 있도록 합니다. 사용자는 자신의 범위 내 자산 및 엔드포인트를 참조하는 케이스 또는 이슈만 볼 수 있습니다.",
    "Scope Definition": "범위 정의",
    "Scope is applied to selected features in the system. For features where scoping is not applicable, role-based access control (RBAC) is used and can be configured under Settings > Configurations > Access Management":
      "범위는 시스템에서 선택한 기능에 적용됩니다. 범위 지정이 적용되지 않는 기능에는 역할 기반 액세스 제어(RBAC)가 사용되며 설정 > 구성 > 액세스 관리에서 구성할 수 있습니다",
    "Select Role": "역할 선택",
    "Select date and time": "날짜 및 시간 선택",
    "After downloading the MCP file, generate a new API key": "MCP 파일을 다운로드한 후 새 API 키를 생성하세요",
    "Download checksum file": "체크섬 파일 다운로드",
    "Download the file below to set up your Cortex MCP Server.": "Cortex MCP Server를 설정하려면 아래 파일을 다운로드하세요.",
    "MCP File": "MCP 파일",
    "To fully set up the Cortex MCP Server, please review and follow the instructions in the":
      "Cortex MCP Server를 완전히 설정하려면 다음의 지침을 검토하고 따르세요:",
    "directory service": "디렉터리 서비스",
    "Click": "클릭",
    "to add directory sync tenant": "하여 디렉터리 동기화 테넌트 추가",
    "Create one.": "생성하세요.",
    "New Credential": "새 자격 증명",
    "There are no Credential Sets to show here.": "표시할 자격 증명 세트가 없습니다.",
    "Credential Name": "자격 증명 이름",
    "Name must be unique, not empty, and must not contain ()": "이름은 고유해야 하고 비어 있지 않아야 하며 ()를 포함할 수 없습니다",
    "Workgroup": "작업 그룹",
  },

  patterns: [
    { re: /^Showing\s+(\d+\/\d+)\s+Instances$/, tpl: "인스턴스 $1개 표시 중" },
    { re: /^(\d+)\s+Connected$/, tpl: "연결됨 $1개" },
    { re: /^(\d+)\s+Errors?$/, tpl: "오류 $1건" },
  ],

  skip: [],
};
