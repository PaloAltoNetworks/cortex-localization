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

const dictionaryForensics = {
  exact: {
    // --- Forensics (investigation & evidence collection) screen ---
    "Forensic Investigations": "포렌식 조사",
    "Investigation": "조사",
    "Evidence Collections": "증거 수집",
    "New Issues": "새 이슈",
    "New Investigation": "새 조사",
    "Create New Investigation": "새 조사 생성",
    "investigation Name": "조사 이름",
    "Your investigation Name": "조사 이름 입력",
    "Save & Start A Collection": "저장 및 수집 시작",
    "Available to adopt": "채택 가능",
    "Override Report mode?": "Report 모드를 재정의하시겠습니까?",
    "Allow agents to block file hashes even when the Malware Profile is set to Report":
      "멀웨어 프로필이 Report로 설정된 경우에도 에이전트가 파일 해시를 차단하도록 허용합니다",
    "Override": "재정의",
    "Endpoint name or IP": "엔드포인트 이름 또는 IP",
    "TOTAL ITEMS": "전체 항목",
    "NEW ISSUES": "새 이슈",
    "LAST RECEIVED": "마지막 수신",

    // --- Command history / search-results grid columns ---
    "Command History": "명령 기록",
    "Collection ID": "수집 ID",
    "Command": "명령",
    "File Created": "파일 생성 일시",
    "File Modified": "파일 수정 일시",
    "Generated Time": "생성 일시",
    "Investigation ID": "조사 ID",
    "Line": "줄",
    "Result ID": "결과 ID",
    "Row UUID": "행 UUID",
    "Search ID": "검색 ID",
    "User SID": "사용자 SID",

    "Legacy Forensics": "레거시 포렌식",
    "Legacy Artifact Collections - Windows": "레거시 아티팩트 수집 - Windows",
    "Timezone and Timestamp": "시간대 및 타임스탬프",
    "*This is a global application change, you can review in":
      "*이는 애플리케이션 전체에 적용되는 변경 사항입니다. 다음 위치에서 검토할 수 있습니다:",
    "Example:": "예:",
    "Archive History": "보관 기록",

    // --- Remote access tool logs / artifact screen ---
    "Remote Access": "원격 액세스",
    "Connection ID": "연결 ID",
    "Connection Type": "연결 유형",
    "Message": "메시지",
    "Source Host": "소스 호스트",
    "Source Row UUID": "소스 행 UUID",
    "Alias": "별칭",
    "AnyDesk Id": "AnyDesk ID",
    "Log Accessed": "로그 액세스 일시",
    "Log Created": "로그 생성 일시",
    "Log File": "로그 파일",
    "Log Modified": "로그 수정 일시",
    // Sidebar list of evidence types (LogMeIn/TeamViewer are left untranslated as brand names;
    // AnyDesk ~ / User Access Logging are translated since they are descriptive names).
    "AnyDesk Connection Logs": "AnyDesk 연결 로그",
    "AnyDesk Trace Logs": "AnyDesk 추적 로그",
    "User Access Logging": "사용자 액세스 로깅",

    // --- Artifact-detail common columns (deleted file/entry type) ---
    "Accessed": "액세스 일시",
    "Deleted": "삭제 일시",
    "Entry Created": "항목 생성 일시",
    "Entry Modified": "항목 수정 일시",
    "Original Path": "원래 경로",
    "Deleted Data": "삭제된 데이터",
    "Entry": "항목",
    "Key Last Modified": "키 마지막 수정 일시",
    "MRU Order": "MRU 순서",
    "Value Path": "값 경로",
    "Context": "컨텍스트",
    "Executable Name": "실행 파일 이름",
    "Executable Path": "실행 파일 경로",

    // --- "File Access" artifact sidebar (All/Jumplists/OpenSavePidlMRU/Recent Files/ShellBags/
    // TypedPaths). OpenSavePidlMRU, ShellBags, and TypedPaths are literal Windows registry key
    // names, and are referenced by these same English names even in Japanese forensics work,
    // so they are left untranslated.
    "File Access": "파일 액세스",
    "Jumplists": "점프 목록",
    "Recent Files": "최근 파일",

    // --- "Network Data" artifact sidebar ---
    "Network Data": "네트워크 데이터",
    "Interface": "인터페이스",
    "ARP Cache": "ARP 캐시",
    "DNS Cache": "DNS 캐시",
    "Hosts File": "hosts 파일",

    // --- "System Statistics" artifact sidebar, and the foreground/background usage-metric columns ---
    "System Statistics": "시스템 통계",
    "Application Resource Usage": "애플리케이션 리소스 사용량",
    "Network Connectivity Usage": "네트워크 연결 사용량",
    "Network Data Usage": "네트워크 데이터 사용량",
    "Background Bytes Read": "백그라운드 읽은 바이트",
    "Background Bytes Written": "백그라운드 쓴 바이트",
    "Background Context Switches": "백그라운드 컨텍스트 전환 수",
    "Background Cycle Time": "백그라운드 사이클 시간",
    "Background Num Read Operations": "백그라운드 읽기 작업 수",
    "Background Num Write Operations": "백그라운드 쓰기 작업 수",
    "Background Number Of Flushes": "백그라운드 플러시 수",
    "Face Time": "포그라운드 시간",
    "Foreground Bytes Read": "포그라운드 읽은 바이트",
    "Foreground Bytes Written": "포그라운드 쓴 바이트",
    "Foreground Context Switches": "포그라운드 컨텍스트 전환 수",
    "Foreground Cycle Time": "포그라운드 사이클 시간",
    "Foreground Num Read Operations": "포그라운드 읽기 작업 수",
    "Foreground Num Write Operations": "포그라운드 쓰기 작업 수",
    "Foreground Number Of Flushes": "포그라운드 플러시 수",
    "User Searches": "사용자 검색",

    // --- "Execution history"-type artifact sidebar (All/Amcache/Background Activity Monitor/
    // CidSizeMRU/LastVisitedPidlMRU/Prefetch/Recentfilecache/Shimcache/UserAssist/Windows
    // Activities). Amcache, CidSizeMRU, LastVisitedPidlMRU, Prefetch, Recentfilecache, Shimcache,
    // and UserAssist are literal Windows registry key/feature names, referenced by these same
    // English names even in Japanese forensics work, so they are left untranslated. Background
    // Activity Monitor and Windows Activities are translated since they are descriptive names.
    "Background Activity Monitor": "백그라운드 활동 모니터",
    "Windows Activities": "Windows 활동",

    // --- "Network Indicators"/"Data Access" tabs, detail-panel column headers ---
    "Network Indicators": "네트워크 지표",
    "Data Access": "데이터 액세스",
    "Earliest Activity": "최초 활동",
    "Latest Activity": "최근 활동",
    "Log Search": "로그 검색",
    "Browser History": "브라우저 기록",

    // --- Collections (triage/hunt collection creation wizard) ---
    "Exports": "내보내기",
    "Export all": "모두 내보내기",
    "Collections": "수집",
    "New Collection": "새 수집",
    "New Triage Collection": "새 분류 수집",
    "triage collection name": "분류 수집 이름",
    "Add Collection Name": "수집 이름 추가",
    "triage type": "분류 유형",
    "Select triage type": "분류 유형 선택",
    "No endpoints. Please add triage type onlineif you would like to automate triage collections on specified endpoints.":
      "엔드포인트가 없습니다. 지정한 엔드포인트에서 분류 수집을 자동화하려면 온라인 분류 유형을 추가하세요.",
    "Please hit Next to continue": "계속하려면 \"Next\"를 클릭하세요",
    "Save Collection and Exit": "수집 저장 후 종료",
    "Volatiles": "휘발성 데이터",
    "File Collections": "파일 수집",
    "Custom File Collections": "사용자 지정 파일 수집",
    "Complete Configuration": "구성 완료",
    "Save new preset": "새 사전 설정 저장",
    "Select Presets (macOS)": "사전 설정 선택(macOS)",
    "Offline": "오프라인",
    "Online": "온라인",
    "Select Presets (Windows)": "사전 설정 선택(Windows)",
    "Select Presets (Linux)": "사전 설정 선택(Linux)",
    "No Collections Yet": "아직 수집이 없습니다",
    "Start adding collections": "수집 추가 시작",
    "hunt collection name": "헌트 수집 이름",
    "New Hunt Collection": "새 헌트 수집",
    "maximum concurrent endpoints": "최대 동시 엔드포인트 수",
    "One-Time Collection": "일회성 수집",
    "Repeat Collection Every": "수집 반복 간격",
    "Valid range time must be at least 1 hr. Scheduled hunts are executed based on the time zone of the agent":
      "유효한 범위는 1시간 이상이어야 합니다. 예약된 헌트는 에이전트의 시간대를 기준으로 실행됩니다",

    // --- Investigation screen: automation/Playbook configuration, and
    // endpoint response-action result display ---
    "New Playbook": "새 플레이북",
    "Hide Script Helper": "스크립트 도우미 숨기기",
    "Upload a file": "파일 업로드",
    "Edit Automation Rule": "자동화 규칙 편집",
    "To add rule conditions, select a field and its value using the filter or right-click on a table cell to select that field and value.":
      "규칙 조건을 추가하려면 필터를 사용하여 필드와 값을 선택하거나 테이블 셀을 마우스 오른쪽 버튼으로 클릭하여 해당 필드와 값을 선택하세요.",
    "Select Automation": "자동화 선택",
    "Action Last Update": "작업 마지막 업데이트",
    "Scanning Complete": "스캔 완료",
    "Hash": "해시",
    "FILE PATHS": "파일 경로",
    "Download definitions file": "정의 파일 다운로드",
    // "investigation" is kept lowercase to match the actual displayed text (a casing
    // "Close User" (case-closing) terminology.
    "Edit investigation": "조사 편집",
    "Close investigation": "조사 종료",
    "Add Name": "이름 추가",
    // A time-unit dropdown option (e.g. "Hrs"/"Days") in a schedule input such as
    // "Repeat Collection Every".
    "Hrs": "시간",
    "Invalid time range selected, Please enter a valid range, minimum 1 hour.":
      "잘못된 시간 범위가 선택되었습니다. 최소 1시간 이상의 유효한 범위를 입력하세요.",

    // --- Investigation screen: the comment section, moving values to the
    // allow/block list, and the "Isolate endpoint" action ---
    "Add comment": "댓글 추가",
    "Enter a comment": "댓글 입력",
    "Edit comment": "댓글 편집",
    // "case" is kept lowercase to match the actual displayed text (a casing inconsistency
    // in the product). Edits the ID of the case associated with this investigation, shown in
    // the investigation's detail panel.
    "Edit case ID": "케이스 ID 편집",
    // Moves a hash/indicator from within an investigation to the allow list. A different
    // action from xql-search.js's "Add to allow list", so added as a separate entry.
    "Move to allow list": "허용 목록으로 이동",
    // Same as above, but moving to the block list instead.
    "Move to block list": "차단 목록으로 이동",
    "Value is already added to block list": "값이 이미 차단 목록에 추가되어 있습니다",

    // --- The "Isolate endpoint" action from within an investigation ---
    "ISOLATE ENDPOINTS": "엔드포인트 격리",
    // Followed immediately by a separate element giving the target count (e.g. "1 endpoint",
    // handled in patterns below). Since the sentence is split across two elements, this part
    // alone doesn't form a fully self-contained translation, but reads naturally once the count
    // follows the colon in the actual UI.
    "You are about to isolate": "다음을 격리하려고 합니다:",
    // Similar to endpoint-policy-management.js's "Isolation will block host network access,
    // except for traffic to Cortex XDR." but says "endpoint" instead of "host" and has no
    // trailing period (added as a separate entry to exact-match the actual displayed text).
    "Isolation will block endpoint network access, except for traffic to Cortex XDR":
      "격리하면 Cortex XDR로의 트래픽을 제외한 엔드포인트 네트워크 액세스가 차단됩니다",
    "Edit isolation comment": "격리 댓글 편집",
    // The original text says "Cancel isolate?" rather than the more natural "Cancel
    // isolation?", but kept verbatim here to exact-match what's actually displayed.
    "Cancel isolate?": "격리를 취소하시겠습니까?",
    "Note: Cancellation is not guaranteed if the action is in progress by the time the request is processed.":
      "참고: 요청이 처리될 때 작업이 이미 진행 중이면 취소가 보장되지 않습니다.",
    "Cancel action": "작업 취소",
    // Alongside the generic "Cancel action", there are per-action-type cancel buttons/confirm
    // dialogs. Like "Cancel isolate?" (for isolation), these are the file-retrieval-specific
    // cancel action (see "files retrieval" in general-settings.js's lowercase action-name list).
    "Cancel files retrieval": "파일 가져오기 취소",
    "Cancel files retrieval?": "파일 가져오기를 취소하시겠습니까?",
    // A separate label (no question mark), used on a button etc., distinct from the "Cancel
    // isolate?" confirmation-dialog text above.
    "Cancel isolation": "격리 취소",
    // Updates the expiration of a pending action (isolation, file retrieval, etc.) — the same
    // concept as general-settings.js's "Action Center Expiration" (expiration can be set
    // within 1-30 days from creation; updating it only affects actions in "pending" status).
    "Update expiration": "만료 업데이트",
  },

  patterns: [
    // The action-type name (variable) is managed separately from the lowercase action-name list
    // elsewhere (e.g. "resume endpoint protection" in general-settings.js), so it is left
    // untranslated here.
    { re: /^Detailed Results - (.+) \(ID (\d+)\)$/, tpl: "상세 결과 - $1(ID $2)" },
    // Target count in the "Isolate endpoint" / "Cancel action" dialogs (e.g. "1 endpoint",
    // "5 endpoints").
    { re: /^(\d+)\s+endpoints?$/, tpl: "엔드포인트 $1개" },
    { re: /^This pending action will be canceled for\s+(\d+)\s+endpoints?\.$/,
      tpl: "이 보류 중인 작업이 엔드포인트 $1개에 대해 취소됩니다." },
    // The endpoint name (an identifier) is left untranslated.
    { re: /^Changing isolation comment for\s+(.+)$/, tpl: "$1의 격리 댓글 변경 중" },
  ],

  skip: [],
};
