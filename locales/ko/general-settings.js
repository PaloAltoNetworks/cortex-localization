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

const dictionaryGeneralSettings = {
  exact: {
    "Server Settings": "서버 설정",
    "Issue Management": "이슈 관리",
    "Result": "결과",
    "Source IP": "소스 IP",
    "Subtype": "하위 유형",
    "Update Issue": "이슈 업데이트",
    "User Roles": "사용자 역할",

    "Default User Notifications": "기본 사용자 알림",
    "Case assigned": "케이스 할당됨",
    "Case resolved": "케이스 해결됨",
    "Issue assigned": "이슈 할당됨",
    "Issue resolved": "이슈 해결됨",
    "Notifications exclude actions performed by the user.": "알림에는 사용자 본인이 수행한 작업이 포함되지 않습니다.",
    "Create New Forwarding Configuration": "새 전달 구성 생성",
    "Add Forwarding Configuration": "전달 구성 추가",
    "Define": "정의",
    "Forward Destination": "전달 대상",
    "Review and Create": "검토 및 생성",
    "log type": "로그 유형",
    "Define the forwarding scope by using the filter or right-click on a table cell to select the fields and values.":
      "필터를 사용하거나 테이블 셀을 마우스 오른쪽 버튼으로 클릭하여 필드와 값을 선택해 전달 범위를 정의하세요.",
    "Add Application": "애플리케이션 추가",
    "Alert": "경고",
    "Connected Integrations": "연결된 통합",
    "Minutes": "분",
    "Select name": "이름 선택",
    "Use Auto Generated Subject": "자동 생성된 제목 사용",
    "channel name": "채널 이름",
    "distribution list": "배포 목록",
    "format": "형식",
    "grouping timeframe": "그룹화 기간",
    "instance name": "인스턴스 이름",
    "notification timezone": "알림 시간대",
    "subject": "제목",
    "Configuration Scope": "구성 범위",
    "Destination Type": "대상 유형",
    "Forward Type": "전달 유형",
    "excluded": "제외됨",
    "Enforce query privacy": "쿼리 개인 정보 보호 적용",
    "Enforce query privacy for non-admins": "관리자가 아닌 사용자에게 쿼리 개인 정보 보호 적용",
    "Limit non-admin users and API keys to viewing and managing their own query activity.":
      "관리자가 아닌 사용자와 API 키가 자신의 쿼리 활동만 보고 관리할 수 있도록 제한합니다.",
    "Query Limits": "쿼리 한도",
    "Unlimited": "무제한",
    "<Max>": "<최대값>",
    "Query limits govern user-initiated queries, excluding those from playbooks and correlations, to enhance query performance and efficiency. These limits are tenant-wide, unless specific roles and groups are excluded.":
      "쿼리 한도는 쿼리 성능과 효율성을 높이기 위해 플레이북 및 상관 분석의 쿼리를 제외한 사용자가 시작한 쿼리에 적용됩니다. 특정 역할 및 그룹을 제외하지 않는 한 이 한도는 테넌트 전체에 적용됩니다.",
    "Excluded User Groups or Roles": "제외된 사용자 그룹 또는 역할",
    "Select Group": "그룹 선택",
    "concurrent queries per user": "사용자당 동시 쿼리 수",
    "query timeout (minutes)": "쿼리 시간 제한(분)",
    "Administration": "관리",
    "General": "일반",
    "Global Settings": "전역 설정",
    "Access Management": "액세스 관리",
    "Access Management.": "액세스 관리.",
    "Roles": "역할",
    "User Groups": "사용자 그룹",
    "Authentication Settings": "인증 설정",
    "API Keys": "API 키",
    "API Keys.": "API 키.",
    "Security Settings": "보안 설정",
    "Exception Management": "예외 관리",
    "Automation Exclusion Center": "자동화 제외 센터",
    "Data Management": "데이터 관리",
    "Data Collection": "데이터 수집",
    "Data Broker": "데이터 브로커",
    "Broker VMs": "Broker VM",
    "Dataset Management": "데이터 세트 관리",
    "Query Management": "쿼리 관리",
    "Parsing Rules": "구문 분석 규칙",
    "Lists": "목록",
    "IP Labels": "IP 레이블",
    "External Dynamic List Integration": "외부 동적 목록 통합",
    "Integrations": "통합",
    "External Applications": "외부 애플리케이션",
    "Marketplace": "마켓플레이스",
    "Credentials": "자격 증명",
    "Cloud Identity Engine": "클라우드 ID 엔진",
    "Identity Configuration": "ID 구성",
    "Impersonation Role": "가장 역할",
    "Agent Configurations": "에이전트 구성",
    "Agents & LLM Experience": "에이전트 및 LLM 환경",
    "AI Configuration": "AI 구성",
    "AI Case Summarization": "AI 케이스 요약",
    "Enable AI case summarization capabilities": "AI 케이스 요약 기능 사용 설정",
    "Application Configuration": "애플리케이션 구성",
    "AppSec Issues Configuration": "AppSec 이슈 구성",
    "Artifact and Asset Views": "아티팩트 및 자산 보기",
    "Automation Email Appearance": "자동화 이메일 모양",
    "Case display modes": "케이스 표시 모드",
    "Case Sensitivity (case_sensitive)": "대/소문자 구분 (case_sensitive)",
    "Caching": "캐싱",
    "Enable Cases Caching": "케이스 캐싱 사용 설정",
    "Enable Issues Caching": "이슈 캐싱 사용 설정",
    "Improve performance on the Cases page by enabling a temporary cache.":
      "임시 캐시를 사용 설정하여 케이스 페이지의 성능을 개선합니다.",
    "Improve performance on the Issues page by enabling a temporary cache.":
      "임시 캐시를 사용 설정하여 이슈 페이지의 성능을 개선합니다.",
    "Compute Unit Consumption": "컴퓨팅 단위 소비량",
    "Email Contacts": "이메일 연락처",
    "Define the list of contact emails for Cortex communication":
      "Cortex 커뮤니케이션용 연락처 이메일 목록을 정의합니다",
    "Endpoint Scoping Mode": "엔드포인트 범위 지정 모드",
    "Engines": "엔진",
    "Exceptions Require Approval": "예외에 승인 필요",
    "Approval Required": "승인 필요",
    "This setting allows for checks and balances across your organization. If you turn this off, exception requests will be activated immediately, no approval needed.":
      "이 설정을 사용하면 조직 전체에서 견제와 균형을 유지할 수 있습니다. 이 설정을 끄면 예외 요청이 승인 없이 즉시 활성화됩니다.",
    "Add New Approver": "새 승인자 추가",
    "List of Approvers": "승인자 목록",
    "New Approver Email": "새 승인자 이메일",
    "New Approver Name": "새 승인자 이름",
    "External Issue Mapping": "외부 이슈 매핑",
    "Full-size logo": "전체 크기 로고",
    "Replace the default logo in communication task emails with a custom logo to match your organization branding.":
      "커뮤니케이션 작업 이메일의 기본 로고를 조직 브랜딩에 맞는 사용자 지정 로고로 바꿉니다.",
    "Recommended dimensions: 50px by 50px. Max file size 100 KB.":
      "권장 크기: 50px x 50px. 최대 파일 크기 100KB.",
    "Google Maps Key": "Google Maps 키",
    "Issue SLA Rules": "이슈 SLA 규칙",
    "AppSec Critical Issues Time to Resolve SLA": "AppSec 심각 이슈 해결 시간 SLA",
    "AppSec High Issues Time to Resolve SLA": "AppSec 높음 이슈 해결 시간 SLA",
    "AppSec Low Issues Time to Resolve SLA": "AppSec 낮음 이슈 해결 시간 SLA",
    "AppSec Medium Issues Time to Resolve SLA": "AppSec 중간 이슈 해결 시간 SLA",
    "Create SLA Rule": "SLA 규칙 생성",
    "Finding Sources = Cortex AppSec and Severity = Critical": "발견 소스 = Cortex AppSec 및 심각도 = 심각",
    "Finding Sources = Cortex AppSec and Severity = High": "발견 소스 = Cortex AppSec 및 심각도 = 높음",
    "Finding Sources = Cortex AppSec and Severity = Low": "발견 소스 = Cortex AppSec 및 심각도 = 낮음",
    "Finding Sources = Cortex AppSec and Severity = Medium": "발견 소스 = Cortex AppSec 및 심각도 = 중간",
    "Last Modified Date": "마지막 수정 날짜",
    "SLA Goal": "SLA 목표",
    "Create a query to select the issues affected by this rule:": "이 규칙의 영향을 받는 이슈를 선택하는 쿼리를 생성하세요:",
    "Criteria": "기준",
    "New SLA Rule": "새 SLA 규칙",
    "Preview the Results": "결과 미리 보기",
    "SLA Rules": "SLA 규칙",
    "Set the Conditions for the SLA Rule": "SLA 규칙 조건 설정",
    "Matching Issues": "일치하는 이슈",
    "SLA Rules automatically set the starting countdown value for issues that match the rule’s query criteria. Use them to define the time goals or deadlines that tasks or milestones need to be completed by. For more detailed information read the":
      "SLA 규칙은 규칙의 쿼리 기준과 일치하는 이슈에 대해 카운트다운 시작 값을 자동으로 설정합니다. 작업 또는 마일스톤을 완료해야 하는 목표 시간이나 기한을 정의하는 데 사용하세요. 자세한 내용은 다음을 참조하세요:",
    "SLA Fields documentation": "SLA 필드 문서",
    "SLA Rule Name": "SLA 규칙 이름",
    "Enter a name for your SLA rule": "SLA 규칙 이름을 입력하세요",
    "Describe the purpose of this SLA rule": "이 SLA 규칙의 목적을 설명하세요",
    "Enter 0 or greater": "0 이상을 입력하세요",
    "Enter 0 to 23": "0~23을 입력하세요",
    "Enter 0 to 59": "0~59를 입력하세요",
    "days": "일",
    "hours": "시간",
    "Define the cases target MTTR per case severity": "케이스 심각도별 목표 MTTR을 정의합니다",
    "Keyboard Shortcuts": "키보드 단축키",
    "Select shortcut to open Cortex Assistant.": "Cortex Assistant를 여는 단축키를 선택하세요.",
    "Select shortcut to open artifact and asset views of hash or IP address values.":
      "해시 또는 IP 주소 값의 아티팩트 및 자산 보기를 여는 단축키를 선택하세요.",
    "Object Setup": "개체 설정",
    "Outposts": "아웃포스트",
    "Password Protection (for downloaded files)": "암호 보호(다운로드한 파일용)",
    "Note: Scroll down to the Define Password Protection for Download Files topic.":
      "참고: \"다운로드 파일에 대한 암호 보호 정의\" 항목까지 아래로 스크롤하세요.",
    "Profiles": "프로필",
    "Sync Profiles": "동기화 프로필",
    "Enable Scope Based Access Control": "범위 기반 액세스 제어 사용 설정",
    "Scope-Based Access Control (SBAC)": "범위 기반 액세스 제어 (SBAC)",
    "Scope-Based Access Control (SBAC) enforces access restrictions on users. Before enabling this setting, ensure that User Group and Users are granted the required access by assigning their scopes in Settings > Configurations >":
      "범위 기반 액세스 제어(SBAC)는 사용자에게 액세스 제한을 적용합니다. 이 설정을 사용하기 전에 설정 > 구성 > 에서 범위를 할당하여 User Group 및 Users에 필요한 액세스 권한이 부여되었는지 확인하세요:",
    ". For API Keys, assign scopes in Settings > Configurations > Integrations >":
      ". API 키의 경우 설정 > 구성 > 통합 > 에서 범위를 할당하세요:",
    "Threat Intelligence": "위협 인텔리전스",
    "Timestamp Format": "타임스탬프 형식",
    "Select a timestamp format that will be displayed in data tables":
      "데이터 테이블에 표시할 타임스탬프 형식을 선택하세요",
    "Timezone": "시간대",
    "Select in which time zone to display your Cortex CLOUD data":
      "Cortex CLOUD 데이터를 표시할 시간대를 선택하세요",
    "Upgrade Helper": "업그레이드 도우미",
    "XDR Collectors": "XDR 수집기",
    "XQL Configuration": "XQL 구성",
    "These settings control your XQL queries in the system.": "이 설정은 시스템의 XQL 쿼리를 제어합니다.",
    "This change will impact the default behavior of all your XQL configurations except for BIOCs.":
      "이 변경 사항은 BIOC를 제외한 모든 XQL 구성의 기본 동작에 영향을 줍니다.",
    "Allow users to switch to legacy mode. When disabled, only default mode is available.":
      "사용자가 레거시 모드로 전환할 수 있도록 허용합니다. 사용 안 함으로 설정하면 기본 모드만 사용할 수 있습니다.",
    "Enable legacy mode": "레거시 모드 사용 설정",
    "Enable Agentic Assistant and natural-language capabilities (LLM).":
      "에이전틱 어시스턴트 및 자연어 기능(LLM)을 사용 설정합니다.",
    "While Agentic Assistant experience is currently free, we will notify you before any fees are applied, giving you the opportunity to opt out.":
      "에이전틱 어시스턴트 환경은 현재 무료이지만, 요금이 부과되기 전에 알려 드리며 옵트아웃할 수 있는 기회를 제공합니다.",
    "When enabled, cases use an AI-generated name and summary. When disabled, the system or user name and description are displayed.":
      "사용 설정하면 케이스에 AI가 생성한 이름과 요약이 사용됩니다. 사용 안 함으로 설정하면 시스템 또는 사용자 이름과 설명이 표시됩니다.",
    "Will only affect newly retrieved files by Cortex XDR agent v. 8.1 and higher.":
      "Cortex XDR 에이전트 v. 8.1 이상에서 새로 검색한 파일에만 영향을 줍니다.",
    "Read-only": "읽기 전용",
    "Restrictive": "제한적",
    "Save": "저장",
    "For more information, see": "자세한 내용은 다음을 참조하세요",
    "You can also": "다음 작업도 할 수 있습니다",
    "7 Days": "7일",
    "Allowed Domains": "허용된 도메인",
    "Allowed Sessions": "허용된 세션",
    "Approved IP Ranges": "승인된 IP 범위",
    "Approved User Email Domains (user@domain.com)": "승인된 사용자 이메일 도메인 (user@domain.com)",
    "As user login expiration (8 hours)": "사용자 로그인 만료와 동일 (8시간)",
    "user login expiration": "사용자 로그인 만료",
    "dashboard expiration": "대시보드 만료",
    "deactivate inactive user": "비활성 사용자 비활성화",
    "+Add": "+추가",
    "The value selected, controls how frequently the Cortex tenant will refresh the Cortex Access Token from the CSP. To increase the frequency users have to re-authenticate, the CSP session duration should be reduced.":
      "선택한 값은 Cortex 테넌트가 CSP에서 Cortex 액세스 토큰을 새로 고치는 빈도를 제어합니다. 사용자가 다시 인증해야 하는 빈도를 높이려면 CSP 세션 기간을 줄여야 합니다.",
    "When setting Approved Domains in parallel to Approved IP Ranges, only users that belong to one of the approved domains and using one of the approved IP ranges, will be able to access the Cortex XDR server":
      "승인된 도메인을 승인된 IP 범위와 함께 설정하면, 승인된 도메인 중 하나에 속하고 승인된 IP 범위 중 하나를 사용하는 사용자만 Cortex XDR 서버에 액세스할 수 있습니다",
    "Set Uninstall Password": "제거 암호 설정",
    "Broker VM": "Broker VM",
    "Cancel": "취소",
    "Configure expiration time period": "만료 기간 구성",
    "permission reset timeframe": "권한 재설정 기간",
    "Control Cortex tenant Same-Site Cookie Policy. Lax allows the cookie to be sent on some cross-site requests,":
      "Cortex 테넌트의 Same-Site 쿠키 정책을 제어합니다. Lax는 일부 교차 사이트 요청에서 쿠키 전송을 허용합니다.",
    "Disable access for users that haven't logged in for a long period of time":
      "장기간 로그인하지 않은 사용자의 액세스 사용 중지",
    "Disabled (Default)": "사용 안 함(기본값)",
    "Enable Auto Logout": "자동 로그아웃 사용 설정",
    "Same-Site Cookie Policy": "Same-Site 쿠키 정책",
    "Session Expiration": "세션 만료",
    "Strict": "엄격",
    "Strict does not allow the cookie to be sent on a cross-site request.":
      "Strict는 교차 사이트 요청에서 쿠키 전송을 허용하지 않습니다.",
    "The following domains and external IPs and ranges are allowed to access the server":
      "다음 도메인과 외부 IP 및 범위에서 서버에 액세스할 수 있습니다",
    "User Expiration": "사용자 만료",
    "Action Center Expiration": "작업 센터 만료",
    "Expiration can be set within 1-30 days from the creation time Updating the expiration will impact actions in \u201cpending\u201d status only":
      "만료는 생성 시점부터 1~30일 이내로 설정할 수 있습니다. 만료를 업데이트하면 \"보류 중\" 상태의 작업에만 영향을 줍니다",
    "Enabling this feature will remove any duplicate entries based on the defined parameters, leaving only one entry - the last endpoint reporting to the server. The deleted endpoint data is retained for 90 days since its last connection. If a deleted endpoint reconnects it will recover its existing data.":
      "이 기능을 사용 설정하면 정의된 매개변수를 기준으로 중복 항목이 제거되고, 서버에 마지막으로 보고한 엔드포인트 항목 하나만 남습니다. 삭제된 엔드포인트 데이터는 마지막 연결 시점부터 90일 동안 보존됩니다. 삭제된 엔드포인트가 다시 연결되면 기존 데이터가 복구됩니다.",
    "Custom Mail Subject": "사용자 지정 메일 제목",
    "Email Grouping Time Frame (Minutes)": "이메일 그룹화 기간(분)",
    "Forward issues as soon as possible": "이슈를 가능한 한 빨리 전달",
    "Log Forward Type": "로그 전달 유형",
    "Output Method": "출력 방법",
    "Time Zone": "시간대",
    "abort malware scan": "멀웨어 스캔 중단",
    "agent database cleanup": "에이전트 데이터베이스 정리",
    "agent uninstall": "에이전트 제거",
    "cancel endpoint isolation": "엔드포인트 격리 취소",
    "change managing server": "관리 서버 변경",
    "collect detailed host firewall logs": "상세 호스트 방화벽 로그 수집",
    "delete quarantined file": "격리된 파일 삭제",
    "destroy files": "파일 파기",
    "endpoint script execution": "엔드포인트 스크립트 실행",
    "file search": "파일 검색",
    "files retrieval": "파일 가져오기",
    "isolate": "격리",
    "malware scan": "멀웨어 스캔",
    "memory collection": "메모리 수집",
    "pause endpoint protection": "엔드포인트 보호 일시 중지",
    "quarantine": "파일 격리",
    "registry search": "레지스트리 검색",
    "remediation": "수정 조치",
    "restart agent": "에이전트 다시 시작",
    "restore quarantine": "격리 복원",
    "resume endpoint protection": "엔드포인트 보호 재개",
    "retrieve alert data": "경고 데이터 가져오기",
    "set temporary token": "임시 토큰 설정",
    "support file retrieval": "지원 파일 가져오기",
    "terminate causality (cgo)": "인과 관계 종료 (cgo)",
    "terminate process": "프로세스 종료",
    "unblock ip address": "IP 주소 차단 해제",
    "xdr collector support file retrieval": "XDR 수집기 지원 파일 가져오기",
    "xdr collector uninstall": "XDR 수집기 제거",
    "xdr collector upgrade": "XDR 수집기 업그레이드",
    "Advanced Analysis": "고급 분석",
    "Agent Status": "에이전트 상태",
    "Agent upgrade": "에이전트 업그레이드",
    "Content Management": "콘텐츠 관리",
    "Cortex XDR Log Collection": "Cortex XDR 로그 수집",
    "Critical Environment Versions": "중요 환경 버전",
    "Endpoint Administration Cleanup": "엔드포인트 관리 정리",
    "Global uninstall password": "전역 제거 암호",
    "Informative BTP Issues": "정보성 BTP 이슈",
    "Learn More": "자세히 알아보기",
    "Make reason field mandatory": "사유 필드 필수로 설정",
    "Number of Agents": "에이전트 수",
    "One-time cleanup": "일회성 정리",
    "Password Strength": "암호 강도",
    "Periodic duplicate cleanup": "주기적 중복 정리",
    "Require Reason for Live Terminal": "Live Terminal 사용 시 사유 필수",
    "Restore default": "기본값 복원",
    "Time Interval": "시간 간격",
    "WildFire Analysis for Benign Verdict": "양성 판정에 대한 WildFire 분석",
    "XDR Calculator for Recommended Bandwidth": "권장 대역폭용 XDR 계산기",
    "XDR Collector": "XDR 수집기",
    "Mbps (Megabits per second)": "Mbps(초당 메가비트)",
    "Host IP (IPv4 only)": "호스트 IP(IPv4만)",
    "Mac Address": "MAC 주소",
    "Enable WildFire analysis scoring for files with Benign verdicts.":
      "양성 판정을 받은 파일에 대해 WildFire 분석 점수 산정을 사용 설정합니다.",
    "Enable bandwidth control": "대역폭 제어 사용 설정",
    "Enable minor content version updates": "마이너 콘텐츠 버전 업데이트 사용 설정",
    "Enable Critical Environment Versions to be Created and Installed in the Tenant":
      "테넌트에서 중요 환경 버전 생성 및 설치 사용 설정",
    "Configure Cortex XDR to collect logs to maintain stability":
      "안정성 유지를 위해 로그를 수집하도록 Cortex XDR 구성",
    "Configure Cortex to automatically upload issue data and apply Advanced Analysis exceptions":
      "이슈 데이터를 자동으로 업로드하고 고급 분석 예외를 적용하도록 Cortex 구성",
    "Configure the Cortex XDR Agent Versions Used in the tenant":
      "테넌트에서 사용하는 Cortex XDR 에이전트 버전 구성",
    "Configure the Cortex XDR Agent license revocation and deletion period":
      "Cortex XDR 에이전트 라이선스 해지 및 삭제 기간 구성",
    "Configure the Cortex XDR agent upgrade scheduler and number of parallel upgrades":
      "Cortex XDR 에이전트 업그레이드 스케줄러 및 병렬 업그레이드 수 구성",
    "Configure the Endpoint Administration periodic cleanup settings":
      "엔드포인트 관리 주기적 정리 설정 구성",
    "Configure the Palo Alto Networks content update cadence and bandwidth allocation within your organization":
      "조직 내 Palo Alto Networks 콘텐츠 업데이트 주기 및 대역폭 할당 구성",
    "Disabling this capability takes immediate effect on new hashes, fresh agent installations, and existing security policies.":
      "이 기능을 사용 중지하면 새 해시, 새 에이전트 설치 및 기존 보안 정책에 즉시 적용됩니다.",
    "Enable Cortex XDR agents to collect logs necessary to maintain the stability of your Cortex XDR agent and improve performance -":
      "Cortex XDR 에이전트의 안정성을 유지하고 성능을 개선하는 데 필요한 로그를 Cortex XDR 에이전트가 수집하도록 사용 설정 -",
    "Note that it could take up to a week to take effect on existing agents in your environment pending agent caching.":
      "에이전트 캐싱으로 인해 환경의 기존 에이전트에 적용되기까지 최대 1주일이 걸릴 수 있습니다.",
    "Note: this configuration affects only standard endpoints and does not impact the VDI or Temporary Session agent status.":
      "참고: 이 구성은 표준 엔드포인트에만 영향을 주며 VDI 또는 임시 세션 에이전트 상태에는 영향을 주지 않습니다.",
    "Otherwise, the content updates in your network occur only on major releases.":
      "그렇지 않으면 네트워크의 콘텐츠 업데이트는 메이저 릴리스에서만 이루어집니다.",
    "This calculation is based on connected agents and includes an overhead for large content update. For additional information":
      "이 계산은 연결된 에이전트를 기준으로 하며 대규모 콘텐츠 업데이트에 대한 오버헤드가 포함됩니다. 추가 정보는",
    "This setting controls whether the reason field for starting a Live Terminal session is mandatory or optional.":
      "이 설정은 Live Terminal 세션 시작 시 사유 필드를 필수로 할지 선택 사항으로 할지 제어합니다.",
    "To enforce immediate protection against the latest threats, enable minor content updates.":
      "최신 위협에 대한 즉각적인 보호를 적용하려면 마이너 콘텐츠 업데이트를 사용 설정하세요.",
    "we recommend you to allocate the minimum of 20 Mbps.": "최소 20Mbps를 할당할 것을 권장합니다.",
    "1 lower-case letter": "소문자 1개",
    "1 number": "숫자 1개",
    "1 of the following special characters: !@#%": "다음 특수 문자 중 1개: !@#%",
    "1 upper-case letter": "대문자 1개",
    "The password must be 8 to 32 characters and must contain at least:":
      "암호는 8~32자여야 하며 다음을 하나 이상 포함해야 합니다:",
    "All actions should be editable between 1-30 days": "모든 작업은 1~30일 사이로 편집할 수 있어야 합니다",
    "*When selecting more than one parameter, duplications will be removed only if containing all selected parameters":
      "*둘 이상의 매개변수를 선택하면 선택한 모든 매개변수를 포함하는 경우에만 중복이 제거됩니다",
    "Set the default uninstall password for all agents in the system":
      "시스템의 모든 에이전트에 대한 기본 제거 암호를 설정합니다",
    "agent deletion (days)": "에이전트 삭제(일)",
    "amount of parallel upgrades": "병렬 업그레이드 수",
    "confirm password": "암호 확인",
    "connection lost (days)": "연결 끊김(일)",
    "define password": "암호 정의",
    "security content updates": "보안 콘텐츠 업데이트",
    "Palo Alto Networks - Cortex support": "Palo Alto Networks - Cortex 지원",
    "During the first week of a new Cortex XDR agent release rollout, only a single batch of agents is upgraded. After that, auto-upgrades continue to be deployed across your network with the number of parallel upgrades as configured. Consider network bandwidth when determining the number of parallel upgrades in your environment.":
      "새 Cortex XDR 에이전트 릴리스 롤아웃의 첫 주에는 에이전트 한 배치만 업그레이드됩니다. 그 이후에는 구성된 병렬 업그레이드 수에 따라 네트워크 전체에 자동 업그레이드가 계속 배포됩니다. 환경의 병렬 업그레이드 수를 결정할 때 네트워크 대역폭을 고려하세요.",
    "Note! Critical Environment Versions are designed for sensitive and highly regulated environments and do not contain all updates and content existing in standard versions. It is recommended to restrict the use of these versions to the required minimum.":
      "참고! 중요 환경 버전은 민감하고 규제가 엄격한 환경을 위해 설계되었으며 표준 버전에 있는 모든 업데이트와 콘텐츠가 포함되어 있지 않습니다. 이러한 버전의 사용은 필요한 최소한으로 제한하는 것이 좋습니다.",
    "Enable Cortex to automatically upload defined issue data files for advanced analysis. Advanced Analysis increases the Cortex exploit protection module accuracy":
      "고급 분석을 위해 정의된 이슈 데이터 파일을 Cortex가 자동으로 업로드하도록 사용 설정합니다. 고급 분석은 Cortex 익스플로잇 방지 모듈의 정확도를 높입니다",
    "Automatically apply Advanced Analysis exceptions to your Global Exceptions list. This will apply all Advanced Analysis exceptions suggested by Cortex, regardless of the issue data file source":
      "고급 분석 예외를 전역 예외 목록에 자동으로 적용합니다. 이슈 데이터 파일 소스와 관계없이 Cortex가 제안한 모든 고급 분석 예외가 적용됩니다",
    "For optimized performance and reduced bandwidth consumption, ensure you install new agents with the distribution package available for Windows Cortex XDR agents 7.3 and later. Otherwise, if you distribute the agent installer via SCCM, it is recommended to configure the bandwidth you allocate in your organization for the Palo Alto Network":
      "성능을 최적화하고 대역폭 소비를 줄이려면 Windows Cortex XDR 에이전트 7.3 이상에서 사용할 수 있는 배포 패키지로 새 에이전트를 설치하세요. 그렇지 않고 SCCM을 통해 에이전트 설치 프로그램을 배포하는 경우, 조직에서 Palo Alto Networks에 할당하는 대역폭을 구성하는 것이 좋습니다.",
    "When enabled, Cortex displays unique and informative BTP rule names and descriptions. While multiple issue names have been completely revised, the issue descriptions will include both the new descriptions and the previous descriptions that existed previously to better support the transition.":
      "사용 설정하면 Cortex에서 고유하고 이해하기 쉬운 BTP 규칙 이름과 설명을 표시합니다. 여러 이슈 이름이 완전히 개정되었지만, 원활한 전환을 위해 이슈 설명에는 새 설명과 이전 설명이 모두 포함됩니다.",
    "Note: If you have any Cortex filters, starring policies, exclusion policies, scoring rules, log forwarding queries, or automations rules configured for XSOAR / 3rd party SIEM, we advise you update those to support the changes before activating the feature (for example, change the query to include the previous description that is still available in the new description, instead of looking for an exact match).":
      "참고: XSOAR/타사 SIEM용으로 구성된 Cortex 필터, 별표 표시 정책, 제외 정책, 점수 산정 규칙, 로그 전달 쿼리 또는 자동화 규칙이 있는 경우, 이 기능을 활성화하기 전에 변경 사항을 지원하도록 업데이트하는 것이 좋습니다(예: 정확히 일치하는 항목을 찾는 대신 새 설명에도 여전히 포함된 이전 설명을 포함하도록 쿼리 변경).",
  },

  patterns: [
    { re: /^Distribution list\s+(\(\d+\))$/, tpl: "배포 목록 $1" },
    { re: /^(\d+)\s+hours?$/, tpl: "$1시간" },
    { re: /^Use configured timezone\s+(\(.+\))$/, tpl: "구성된 시간대 사용 $1" },
    { re: /^(\d+)\s+minutes?$/, tpl: "$1분" },
    { re: /^Results Preview - Matched\s+([\d,]+)\s+out of\s+([\d,]+)\s+Issues$/, tpl: "결과 미리 보기 - 이슈 $2건 중 $1건 일치" },
    { re: /^domain name\s+(\(\d+\))$/, tpl: "도메인 이름 $1" },
    { re: /^(\d+)\s+days?$/, tpl: "$1일" },
    { re: /^(\d+)\s+Items?$/, tpl: "항목 $1개" },
  ],

  skip: [
    // SLA rule condition summary (e.g. "Matches all issues."). Excluded from translation by
    // request, since the text differs per rule.
    /^Matches .+\.$/,
    // The SLA Rules screen's "Description" column (e.g. "Default Critical Issues Time to
    // Resolve SLA") is likewise excluded from translation by request (its exact-dictionary
    // entry has been removed).
  ],
};
