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

const dictionaryCommon = {
  exact: {
    "Score": "점수",
    "CVSS": "CVSS",
    "EPSS": "EPSS",
    "Vulnerability": "취약점",
    "Assets": "자산",
    "Publish Date": "게시일",
    "Display": "표시",
    "Collapse": "접기",
    "Expand": "펼치기",
    "Added on": "추가 날짜",
    "Add filters": "필터 추가",
    "Clear All": "모두 지우기",
    "Click to open list": "클릭하여 목록 열기",
    "Click to filter": "클릭하여 필터링",
    "Actions": "작업",
    "Critical": "심각",
    "High": "높음",
    "Medium": "중간",
    "Low": "낮음",
    "Status": "상태",
    "Category": "카테고리",
    "Severity": "심각도",
    "Refresh": "새로 고침",
    "Search": "검색",
    "Settings": "설정",
    "Help": "도움말",
    "Dashboard": "대시보드",
    "Dashboards": "대시보드 목록",
    "Dashboards & Reports": "대시보드 및 보고서",
    "Dashboards Manager": "대시보드 관리자",
    "Cases": "케이스",
    "Cases & Issues": "케이스 및 이슈",
    "Issue": "이슈",
    "Issues": "이슈",
    "Open": "열림",
    "Closed": "종료됨",

    // --- Left navigation (common to all dashboards) ---
    "Action Center": "작업 센터",
    "Agentic Assistant Hub": "에이전틱 어시스턴트 허브",
    "AI Prompts": "AI 프롬프트",
    "AI Security": "AI 보안",
    "All Assets": "모든 자산",
    "All Endpoints": "모든 엔드포인트",
    "Analytics Rules": "분석 규칙",
    "Application Security": "애플리케이션 보안",
    "Attack Surface": "공격 표면",
    "Attack Surface Issues": "공격 표면 이슈",
    "Automation": "자동화",
    "Automation Rules": "자동화 규칙",
    "Back to main": "메인으로 돌아가기",
    "BIOC": "BIOC",
    "IOC": "IOC",
    "Case Configuration": "케이스 구성",
    "Code to Cloud Coverage": "Code to Cloud 적용 범위",
    "Compliance": "규정 준수",
    "Configurations": "구성",
    "Correlations": "상관관계",
    "Data Security": "데이터 보안",
    "Detection Rules": "탐지 규칙",
    "Device Control Violations": "디바이스 제어 위반",
    "Disk Encryption Visibility": "디스크 암호화 가시성",
    "Endpoints": "엔드포인트",
    "File Integrity Monitoring": "파일 무결성 모니터링",
    "Forensics": "포렌식",
    "Graph Search": "그래프 검색",
    "Groups": "그룹",
    "Host Firewall": "호스트 방화벽",
    "Host Insights": "호스트 인사이트",
    "Identity Security": "ID 보안",
    "Installations": "설치",
    "Inventory": "인벤토리",
    "Investigation & Response": "조사 및 대응",
    "Kubernetes Security": "Kubernetes 보안",
    "Live Terminal": "라이브 터미널",
    "Modules": "모듈",
    "Playbooks": "Playbook",
    "Playground": "플레이그라운드",
    "Policy Management": "정책 관리",
    "Posture Management": "보안 태세 관리",
    "Query Center": "쿼리 센터",
    "Query Templates": "쿼리 템플릿",
    "Reports": "보고서",
    "Response": "대응",
    "Risk Scores": "위험 점수",
    "Rules & Policies": "규칙 및 정책",
    "Scheduled Queries": "예약된 쿼리",
    "Scripts": "스크립트",
    "Supply Chain Security": "공급망 보안",
    "Tenant Navigator": "테넌트 탐색기",
    "Threat Management": "위협 관리",
    "Vulnerability Management": "취약점 관리",
    "XQL Search": "XQL 검색",
    "Select": "선택",
    "Select..": "선택..",

    // --- Widget common empty/error states ---
    "Feature Unavailable": "기능을 사용할 수 없음",
    "Inadequate License": "라이선스 부족",
    "No Permissions": "권한 없음",
    "No Results Found": "결과를 찾을 수 없음",
    "No data": "데이터 없음",
    "No data is available as the dataset configured for this widget doesn't exist.":
      "이 위젯에 구성된 데이터 세트가 존재하지 않아 사용 가능한 데이터가 없습니다.",
    "Private Widget": "비공개 위젯",
    "This asset is not associated with any groups": "이 자산은 어떤 그룹과도 연결되어 있지 않습니다",
    "This widget has been deleted.": "이 위젯은 삭제되었습니다.",
    "This widget is unavailable.": "이 위젯은 사용할 수 없습니다.",
    "Widget Deleted": "위젯 삭제됨",
    "You do not have permission to view this private widget":
      "이 비공개 위젯을 볼 권한이 없습니다",
    "You don't have the license required to view this widget.":
      "이 위젯을 보는 데 필요한 라이선스가 없습니다.",
    "You don't have the permissions required to view this widget.":
      "이 위젯을 보는 데 필요한 권한이 없습니다.",

    // --- ag-Grid common UI ---
    "Drag here to set column labels": "여기로 끌어 열 레이블 설정",
    "Drag here to set row groups": "여기로 끌어 행 그룹 설정",
    "Pin Column": "열 고정",
    "Hide Column": "열 숨기기",
    "Autosize column": "열 너비 자동 조정",
    "Autosize all columns": "모든 열 너비 자동 조정",
    "Row Height": "행 높이",
    "Column Fit": "열 맞춤",
    "Compact": "좁게",
    "Specious": "넓게",
    "Fit Content": "콘텐츠에 맞춤",
    "Distribute": "균등 분배",
    "Fill Content": "콘텐츠로 채우기",
    "Details": "세부 정보",
    "Discover Now": "지금 검색",
    "Copy text to clipboard": "텍스트를 클립보드에 복사",
    "Copy entire row": "행 전체 복사",
    "Show empty rows": "빈 행 표시",
    "Hide empty rows": "빈 행 숨기기",
    "Include empty values": "빈 값 포함",
    "Open in VirusTotal": "VirusTotal에서 열기",
    "Open in Agentic Assistant": "Agentic Assistant에서 열기",
    "Open in Editor": "편집기에서 열기",
    "Duplicate": "복제",
    "Share": "공유",
    "Change owner": "소유자 변경",
    "Revert": "되돌리기",
    "View saved filters": "저장된 필터 보기",
    "Export filters": "필터 내보내기",
    "View Examples": "예제 보기",
    "Edit": "편집",
    "Save as New": "새로 저장",
    "(Clear Selection)": "(선택 해제)",
    "Username": "사용자 이름",
    "Password": "비밀번호",
    "View": "보기",
    "Cards view": "카드 보기",
    "Learn more": "자세히 알아보기",
    "Export to file": "파일로 내보내기",
    "Type your search here": "여기에 검색어를 입력하세요",
    "Search by name or description": "이름 또는 설명으로 검색",
    "here": "여기",
    "Please fill out this field.": "이 필드를 입력하세요.",
    "Discard changes?": "변경 사항을 폐기하시겠습니까?",
    "Unsaved Changes": "저장되지 않은 변경 사항",
    "You have unsaved changes. Are you sure you want to leave? All unsaved data will be lost.":
      "저장되지 않은 변경 사항이 있습니다. 페이지를 나가시겠습니까? 저장되지 않은 데이터는 모두 손실됩니다.",
    "Unsaved changes will be lost.": "저장되지 않은 변경 사항은 손실됩니다.",
    "Discard": "폐기",
    "Changes will not be saved.": "변경 사항이 저장되지 않습니다.",
    "Discard changes": "변경 사항 폐기",
    "Changes were not saved, if you proceed you will lose your changes":
      "변경 사항이 저장되지 않았습니다. 계속하면 변경 내용이 손실됩니다",
    "Press SPACE to select this row": "스페이스 키를 눌러 이 행 선택",
    "Press SPACE to deselect this row": "스페이스 키를 눌러 이 행 선택 해제",
    "You must enter name": "이름을 입력하세요",
    "Enter Name": "이름 입력",
    "Enter Email": "이메일 입력",
    "Search in table...": "테이블에서 검색...",
    // "Search...": the placeholder of generic search boxes. Most of them do a substring match against
    // mislead the user into thinking Japanese input works, so this entry is removed (left untranslated,
    // showing the original English).
    "Define a value here...": "여기에 값을 입력하세요...",
    "Remove filters": "필터 제거",
    "Save filters": "필터 저장",
    "Save Filter": "필터 저장",
    "filter name": "필터 이름",
    "Share this filter": "이 필터 공유",
    "Show filter panel": "필터 패널 표시",
    "Hide filter panel": "필터 패널 숨기기",
    "Group ID": "그룹 ID",
    "Installers": "설치 프로그램",
    "Command and Control": "명령 및 제어",
    "Credential Access": "자격 증명 액세스",
    "Defense Impairment": "방어 기능 손상",
    "Discovery": "탐색",
    "Execution": "실행",
    "Exfiltration": "유출",
    "Initial Access": "초기 액세스",
    "Lateral Movement": "측면 이동",
    "Persistence": "지속성",
    "Privilege Escalation": "권한 상승",
    "Reconnaissance": "정찰",
    "Resource Development": "리소스 개발",
    "Add description here": "여기에 설명 추가",
    "Specify description": "설명을 입력하세요",
    "Remove description": "설명 제거",
    "Enter description": "설명을 입력하세요",
    "Hide Widgets": "위젯 숨기기",
    "Show Widgets": "위젯 표시",

    // --- Warnings/links common to multiple dashboards ---
    "License Violation warning": "라이선스 위반 경고",
    "See Data Ingestion": "데이터 수집 보기",
    "Open Issues": "열린 이슈",
    "Compliance Score": "규정 준수 점수",
    "Not Applicable": "해당 없음",
    "not applicable": "해당 없음",
    "Other": "기타",
    "Workloads": "워크로드",
    "cloud account": "클라우드 계정",
    "Cloud": "클라우드",
    "Identity": "ID",
    "Network": "네트워크",
    "from last month": "지난달 대비",
    "MTTR": "평균 수정 시간",
    "Last 24H": "지난 24시간",
    "Last 30D": "지난 30일",
    "Custom": "사용자 지정",
    "Security Services": "보안 서비스",
    "Notifications": "알림",
    "Cortex CLOUD License": "Cortex CLOUD 라이선스",
    "Cortex - Analytics": "Cortex - 분석",
    "Management Audit Logs": "관리 감사 로그",
    "Agent Audit Logs": "에이전트 감사 로그",
    "XDR Collector Audit Logs": "XDR 수집기 감사 로그",
    "Health Issues": "상태 이슈",
    "Issue Exception & Exclusion": "이슈 예외 및 제외",
    "Data Sources & Integrations": "데이터 소스 및 통합",

    // --- Tooltip (shown on hover, inside ngb-popover-window) ---
    "Connecting a data source does not imply that all detectors in the same category will be relevant for that source. Rule applicability should be assessed based on the specific context.":
      "데이터 소스를 연결해도 같은 카테고리의 모든 탐지 항목이 해당 소스와 관련되는 것은 아닙니다. 규칙 적용 여부는 구체적인 상황에 따라 판단하세요.",

    // --- "Select tactics and techniques" modal (the MITRE ATT&CK matrix, shared across screens) ---
    // The individual technique/sub-technique names (each cell's variable text) are instead made
    // eligible for AI (dynamic) translation on the content.js side.
    "Select tactics and techniques": "전술 및 기법 선택",
    "sub-technique": "하위 기법",
    // Screen-reader-only labels for icons (not visible on screen).
    "mitre logo": "MITRE 로고",
    "free search": "자유 검색",
  },

  patterns: [
    // <u-file-upload-dropzone-hint> file-upload component; the format/extension part is left untranslated)
    { re: /^Supported format:\s*(.+)$/, tpl: "지원 형식: $1" },

    { re: /^([\d,]+)\s+results$/, tpl: "결과 $1건" },

    { re: /^\+\s*(\d+)\s+[Mm]ore$/, tpl: "외 $1개" },

    { re: /^(\d+)\s+selected$/i, tpl: "$1개 선택됨" },

    { re: /^selected out of\s+([\d,]+)$/i, tpl: "개 선택됨 (전체 $1개 중)" },

    { re: /^(\d[\d,.]*[KkMm]?)\s+Impacted Assets$/, tpl: "영향받는 자산 $1개" },

    { re: /^Notifications\s+(\(.+\))$/, tpl: "알림 $1" },

    { re: /^(\d[\d,.]*)\s+days$/, tpl: "$1일" },

    // Ingestion-quota-exceeded warning (the date/day-count parts are dynamic).
    {
      re: /^Based on a (\d+) day average calculation from (.+) to (.+), your daily default ingestion quota is exceeded\. Increase your license limit or reduce your daily ingestion; otherwise, you can expect data processing delays or data not being collected by the application$/,
      tpl: "$1일 평균 계산($2~$3)에 따르면 일일 기본 수집 할당량을 초과했습니다. 라이선스 한도를 늘리거나 일일 수집량을 줄이세요. 그렇지 않으면 데이터 처리가 지연되거나 애플리케이션에서 데이터가 수집되지 않을 수 있습니다.",
    },

    // ag-Grid's right-click menu: "Show rows with 'X'" / "Hide rows with 'X'".
    { re: /^Show rows with\s+(['"].*['"])$/, tpl: "$1 포함 행 표시" },
    { re: /^Hide rows with\s+(['"].*['"])$/, tpl: "$1 포함 행 숨기기" },
    // ag-Grid's date-column filter: "Show rows N days prior to 'X'" / "Show rows N days after 'X'".
    { re: /^Show rows\s+(\d+)\s+days prior to\s+(['"].*['"])$/, tpl: "$2 이전 $1일간의 행 표시" },
    { re: /^Show rows\s+(\d+)\s+days after\s+(['"].*['"])$/, tpl: "$2 이후 $1일간의 행 표시" },
    // XIF editor heading: "User defined rules (Last updated on Jun 4th 2026)".
    { re: /^User defined rules\s*\(Last updated on\s+(.+)\)$/, tpl: "사용자 정의 규칙 (마지막 업데이트: $1)" },
  ],

  skip: [
    // Excludes only a per-finding text combining a CVE number with an asset/host name
    // (e.g. "CVE-2022-1471 vulnerability in org.yaml_snakeyaml at rsam-mas-tl-jenkins-docker").
    // Skipping anything that merely starts with "CVE-" would also wrongly skip Supply Chain
    // Attacks' own descriptions (e.g. for MongoBleed, React2Shell, Log4Shell), which likewise
    // start with a CVE number, even though those already have a dictionary entry.
    /^CVE-\d{4}-\d+ vulnerability in/,
    // Malware-detection messages and other text too complex to templatize.
    /Malware was detected in/i,
    /during RUNTIME scanning/i,
    // Internal ag-Grid component/class names.
    /^AG-[A-Z-]+$/,
    // Dynamic "last updated" display that includes a time (a pattern-based rule may be worth
    // adding for this later).
    /^Last updated on/,
    // SVG metadata left behind by the Sketch design tool.
    /^Created with Sketch\.$/,
    /^Generator: Sketch/,
    // Date/time timestamp text (fully dynamic).
    /^[A-Z][a-z]{2}\s+\d{1,2}(st|nd|rd|th)\s+\d{4}\s+\d{2}:\d{2}:\d{2}$/,
    // Date/time timestamp text (a different format), e.g. "August 28, 2026 at 11:02:33 AM UTC".
    /^[A-Z][a-z]+\s+\d{1,2},\s+\d{4}\s+at\s+\d{1,2}:\d{2}:\d{2}\s+[AP]M\s+UTC$/,
    // Cloud region codes (technical identifiers — not translated).
    /^[a-z]{2}-[a-z]+-\d+$/,
    /^global$/,
  ],
};
