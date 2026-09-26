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

const dictionaryIssuesScreen = {
  exact: {
    "All Issues": "모든 이슈",
    "Backward Scan Status": "역방향 스캔 상태",
    "Create Issue Exclusion Rule": "이슈 제외 규칙 생성",
    "Rule status": "규칙 상태",
    "Rule Conditions (from filter)": "규칙 조건(필터 기준)",
    "Your changes will be lost. Do you want to cancel and exit the wizard?": "변경 사항이 손실됩니다. 취소하고 마법사를 종료하시겠습니까?",
    "Filters are still in edit mode. Click anywhere on the page to apply your filters.": "필터가 아직 편집 모드입니다. 필터를 적용하려면 페이지의 아무 곳이나 클릭하세요.",
    "Apply rule on existing issues": "기존 이슈에 규칙 적용",
    "Existing issues matching the rule’s conditions will also be excluded": "규칙 조건과 일치하는 기존 이슈도 제외됩니다",
    "Define conditions to automatically exclude issues": "이슈를 자동으로 제외할 조건을 정의하세요",
    "Search": "검색",
    "Value": "값",
    "All Issue Exception & Exclusion Rules": "모든 이슈 예외 및 제외 규칙",
    "Do you want to create an Exception or an Exclusion?": "예외를 생성하시겠습니까, 아니면 제외를 생성하시겠습니까?",
    "Create new exception": "새 예외 생성",
    "Exceptions grant Issues a time-limited grace period for a specific duration, pausing SLA timers.":
      "예외는 이슈에 특정 기간 동안 유예 기간을 부여하고 SLA 타이머를 일시 중지합니다.",
    "Create new exclusion": "새 제외 생성",
    "Exclusions permanently suppress Issues. No new Issues matching this criteria will be added to the Issue list view.":
      "제외는 이슈를 영구적으로 억제합니다. 이 기준과 일치하는 새 이슈는 이슈 목록 보기에 추가되지 않습니다.",
    "Requestor Name": "요청자 이름",
    "Approver Name": "승인자 이름",
    "Date Created": "생성 날짜",
    "Decision Date": "결정 날짜",
    "Decision Justification": "결정 근거",
    "Requestor Email": "요청자 이메일",
    "Approver Email": "승인자 이메일",
    "Add Exception": "예외 추가",
    "Disabled": "사용 안 함",
    "Exception Rules": "예외 규칙",
    "Exclusion Rules": "제외 규칙",
    "Impacted Issues": "영향받는 이슈",
    "Justification Category": "근거 범주",
    "Status": "상태",
    "There are no Issue Exception rules": "이슈 예외 규칙이 없습니다",
    "You are about to perform issue exclusion": "이슈 제외를 수행하려고 합니다",
    "Create issue exception rule": "이슈 예외 규칙 생성",
    "Scan types": "스캔 유형",
    "Usage": "사용량",
    "Scanned Branch": "스캔된 브랜치",
    "Scan Date": "스캔 날짜",
    "Scan Health": "스캔 상태",
    "Scan Category": "스캔 범주",
    "Pull Request ID": "풀 리퀘스트 ID",
    "Commit": "커밋",
    "Git User": "Git 사용자",
    "PR Status": "PR 상태",
    "Blocking Policies": "차단 정책",
    "Pull Request Title": "풀 리퀘스트 제목",
    "Blocking Policies IDs": "차단 정책 ID",
    "Blocking Policies Names": "차단 정책 이름",
    "CI Status": "CI 상태",
    "Tool Id": "도구 ID",
    "Risk Factors details": "위험 요소 세부 정보",
    "Status modified by": "상태 수정자",
    "Status modified date": "상태 수정 날짜",
    "Link": "링크",
    "Logo": "로고",
    "In catalog": "카탈로그에 있음",
    "Risk factors last update": "위험 요소 마지막 업데이트",
    "Last update": "마지막 업데이트",
    "cves": "CVE",
    "Choose cases to link the issues to": "이슈를 연결할 케이스를 선택하세요",
    "Urgent Issues Exceeding SLA": "SLA를 초과한 긴급 이슈",
    "Valid Secrets Detected": "유효한 시크릿 탐지됨",
    "High Issues Exceeding SLA": "SLA를 초과한 높음 이슈",
    "High Issues in Direct Dependencies": "직접 종속성의 높음 이슈",
    "High Issues Involving Strong Copyleft Licenses": "강력한 카피레프트 라이선스와 관련된 높음 이슈",
    "Resolved - Known Issue": "해결됨 - 알려진 이슈",
    "Resolved - Duplicate Issue": "해결됨 - 중복 이슈",
    "Resolved - False Positive": "해결됨 - 오탐",
    "Resolved - Other": "해결됨 - 기타",
    "Resolved - True Positive": "해결됨 - 정탐",
    "Resolved - Security Testing": "해결됨 - 보안 테스트",
    "Resolved - Dismissed": "해결됨 - 기각됨",
    "Resolved - Fixed": "해결됨 - 수정됨",
    "Resolved - Risk Accepted": "해결됨 - 위험 수용",
    "IaC Drifts": "IaC 드리프트",
    "Severity Breakdown": "심각도 분석",
    "Code IaC Resource": "코드 IaC 리소스",
    "No data available to display in the chart": "차트에 표시할 데이터가 없습니다",
    "Resolve Issue Id": "이슈 ID 해결",
    "mark this issue as": "이 이슈를 다음으로 표시:",
    "Enter comment...": "코멘트 입력...",
    "Select from list": "목록에서 선택",
    "Urgency Details": "긴급도 세부 정보",
    "Create application": "애플리케이션 생성",
    "Application Criticality": "애플리케이션 중요도",
    "Missing code-to-cloud traceability.": "Code-to-Cloud 추적성이 누락되었습니다.",
    "Urgency may change once the full runtime path is established": "전체 런타임 경로가 확립되면 긴급도가 변경될 수 있습니다",
    "Urgency not updated. We couldn't calculate urgency this time. We'll try again with the next periodic scan.":
      "긴급도가 업데이트되지 않았습니다. 이번에는 긴급도를 계산할 수 없었습니다. 다음 정기 스캔에서 다시 시도합니다.",
    "Backlog Status:": "백로그 상태:",
    "Choose a reason": "이유 선택",
    "Create Exception Rule": "예외 규칙 생성",
    "Enter the date that the Exception will end and the SLA Timer will start to tick down again on.":
      "예외가 종료되고 SLA 타이머가 다시 카운트다운을 시작할 날짜를 입력하세요.",
    "Form": "양식",
    "None provided": "제공되지 않음",
    "Optionally for your reference, enter a ticket or a record number for any external exception tracking or auditing systems you use.":
      "선택 사항으로, 참고용으로 사용 중인 외부 예외 추적 또는 감사 시스템의 티켓 또는 레코드 번호를 입력하세요.",
    "Provide a reason why there is a business need to defer fixing the security Issues that match this rule.":
      "이 규칙과 일치하는 보안 이슈의 수정을 연기해야 하는 비즈니스상의 이유를 입력하세요.",
    "Use Exception Rules to suppress issues that cannot be resolved within SLA bounds due to valid business justifications.":
      "타당한 비즈니스상의 근거로 인해 SLA 기한 내에 해결할 수 없는 이슈를 억제하려면 예외 규칙을 사용하세요.",
    "When an issue matches the rule criteria, its SLA timer pauses for the specified duration.":
      "이슈가 규칙 기준과 일치하면 해당 SLA 타이머가 지정된 기간 동안 일시 중지됩니다.",
    "internal id": "내부 ID",
    "Approver": "승인자",
    "Exception End Date": "예외 종료 날짜",
    "Exception Period": "예외 기간",
    "Justification": "근거",
    "External Exception ID": "외부 예외 ID",
    "Reason Category": "이유 범주",
    "Match Criteria and Results": "일치 기준 및 결과",
    "Change Issue Assignee": "이슈 담당자 변경",
    "Assign to me": "나에게 할당",
    "Select a user to assign": "할당할 사용자 선택",
    "Select the action you want to run when the rule conditions are met.": "규칙 조건이 충족될 때 실행할 작업을 선택하세요.",
    "Everywhere": "모든 위치",
    "Select cases": "케이스 선택",
    "Uncheck cases to unlink them from the issue": "이슈와의 연결을 해제하려면 케이스 선택을 해제하세요",
    "View related case": "관련 케이스 보기",
    "Show workplan": "작업 계획 표시",
    "Investigate": "조사",
    "Exclude issue": "이슈 제외",
    "Except issue": "이슈 예외 처리",
    "Exclude issues": "이슈 제외",
    "Except issues": "이슈 예외 처리",
    "Link to case": "케이스에 연결",
    "Unlink from case": "케이스에서 연결 해제",
    "Change status": "상태 변경",
    "Change severity": "심각도 변경",
    "Change assignee": "담당자 변경",
    "Investigate causality chain": "인과 관계 체인 조사",
    "Run automation": "자동화 실행",
    "Manage Issue": "이슈 관리",
    "Open views": "보기 열기",
    "Create case": "케이스 생성",
    "AppSec Issues": "AppSec 이슈",
    "CSPM Scanner": "CSPM 스캐너",
    "Detection Method": "탐지 방법",
    "Findings": "발견 사항",
    "Issue Domain": "이슈 도메인",
    "Name": "이름",
    "Observation Time": "관찰 시간",
    "Resolution Reason": "해결 이유",

    // --- "Detection method"/"Issue domain" filter option list ---
    // XDR Analytics, XDR IOC, DLP, ASM, PAN NGFW, XDR Managed Threat
    // Hunting, Prisma Browser, Prisma Cloud, Prisma Cloud Compute
    // Brand names, specific product names, and abbreviations are left as-is (translating them
    // would not change their spelling, so they are not in the dictionary): AURL, XDR BIOC,
    // XDR Analytics BIOC, XDR Analytics, XDR IOC, DLP, ASM, PAN NGFW, XDR Managed Threat
    // Hunting, Prisma Browser, Prisma Cloud, Prisma Cloud Compute
    "Agentless Disk Scanner": "에이전트리스 디스크 스캐너",
    "AI Security Posture": "AI 보안 태세",
    "API Posture Scanner": "API 보안 태세 스캐너",
    "API Traffic Monitor": "API 트래픽 모니터",
    "AppSec Policy": "AppSec 정책",
    "CAS CVE Scanner": "CAS CVE 스캐너",
    "CAS Drift Scanner": "CAS 드리프트 스캐너",
    "IaC Scanner": "IaC 스캐너",
    "CAS License Scanner": "CAS 라이선스 스캐너",
    "CAS Malicious Package Scanner": "CAS 악성 패키지 스캐너",
    "SAST Scanner": "SAST 스캐너",
    "CAS Secret Scanner": "CAS 시크릿 스캐너",
    "CIEM Scanner": "CIEM 스캐너",
    "CLI Scanner": "CLI 스캐너",
    "Cloud Network Analyzer": "클라우드 네트워크 분석기",
    "Custom Issue": "사용자 지정 이슈",
    "Data Policy": "데이터 정책",
    "SaaS Attachments": "SaaS 첨부 파일",
    "Graph Engine": "그래프 엔진",
    "Health": "상태",
    "Indicator Matching": "지표 매칭",
    "IoT Security": "IoT 보안",
    "Kubernetes Scanner": "Kubernetes 스캐너",
    "MIRRORING": "미러링",
    "Posture Policy": "보안 태세 정책",
    "User Reported Phishing": "사용자 신고 피싱",
    "Hunting": "헌팅",
    "Posture": "보안 태세",

    "AWS EC2 instance not configured with Instance Metadata Service v2 (IMDSv2)":
      "AWS EC2 인스턴스가 Instance Metadata Service v2(IMDSv2)로 구성되지 않음",

    // --- Column-selection menu ---
    "Excluded": "제외됨",
    "Case IDs": "케이스 ID",
    "Insert Time": "삽입 시간",
    "Resolution Status Modified": "해결 상태 수정 시간",
    "Remediation": "수정 조치",
    "Impact": "영향",
    "Extended Description": "확장 설명",
    "Initial Evidence": "초기 증거",
    "Excepted": "예외 처리됨",
    "Remaining Exception Period": "남은 예외 기간",
    "Agentic AI response status": "에이전틱 AI 대응 상태",
    "Agentic AI response": "에이전틱 AI 대응",
    "Recommendation": "권장 사항",
    "Last Modified": "마지막 수정 시간",
    "Compliance Standard": "규정 준수 표준",
    "Compliance Category": "규정 준수 범주",
    "Compliance Control": "규정 준수 컨트롤",

    // --- Issue detail panel (Evidence/Causality tabs, etc.) ---
    // "Critical Vulnerabilities (CVSS)" is already registered in vulnerability-management.js
    // (all files' dictionaries are merged globally, so it is not duplicated here).
    "No associated standards or controls": "연결된 표준 또는 컨트롤 없음",
    "Automations browser": "Automation 브라우저",
    "Type `:` to use Emojis": "`:`를 입력하여 이모지 사용",
    "Focus on the CLI field using `ctrl+;`": "`ctrl+;`를 사용하여 CLI 필드에 포커스",
    "Navigate quickly with `ctrl+k` (default)": "`ctrl+k`로 빠르게 이동(기본값)",
    "Toggle markdown box on CLI using `ctrl+m`": "`ctrl+m`을 사용하여 CLI에서 Markdown 상자 전환",
    "There are no Cases": "케이스가 없습니다",
    "Asset Risk": "자산 위험",
    "The value of and risks posed to your organization by the compromise of this asset":
      "이 자산이 침해될 경우 조직에 미치는 가치와 위험",
    "Internet Reachable Asset": "인터넷에서 접근 가능한 자산",
    "This asset is publicly exposed to the internet.": "이 자산은 인터넷에 공개적으로 노출되어 있습니다.",
    "Evidence graph is not supported for this detection rule type": "이 탐지 규칙 유형에서는 증거 그래프가 지원되지 않습니다",
    "Enable prompt protection in the content filter": "콘텐츠 필터에서 프롬프트 보호 사용 설정",
    "Related Affected Assets": "관련 영향받는 자산",
    "Enforce the Agent to Use Guardrails": "에이전트가 가드레일을 사용하도록 강제",
    "Number of hits": "적중 수",
    "Process Execution": "프로세스 실행",
    "Initiator Details": "시작자 세부 정보",
    "Name (initiated by)": "이름(시작자)",
    "Path (initiator path)": "경로(시작자 경로)",
    "CMD (initiator CMD)": "CMD(시작자 CMD)",
    "PID (initiator PID)": "PID(시작자 PID)",
    "TID (initiator TID)": "TID(시작자 TID)",
    "Signature": "서명",
    "Signature Unavailable": "서명을 사용할 수 없음",
    // MD5 and SHA256 are hash-format names, left as-is (not added to the dictionary).
    "Target Process": "대상 프로세스",
    "Causality Group Owner Details": "인과 관계 그룹 소유자 세부 정보",
    "OS Parent": "OS 상위 프로세스",
    "Occurrence Count": "발생 횟수",

    "Snippet": "스니펫",
    "Objects Count": "객체 수",
    "Records Count": "레코드 수",
    "There are no Findings": "발견 사항이 없습니다",
    "Data Findings": "데이터 발견 사항",
    "Configuration Findings": "구성 발견 사항",
    "Identity Findings": "ID 발견 사항",
    "Posture Findings": "보안 태세 발견 사항",
    "Malware Findings": "멀웨어 발견 사항",
    "Additional Details": "추가 세부 정보",
    "Showing a partial graph": "부분 그래프 표시 중",
    "Due to the high volume of results, only a portion of the data is shown.":
      "결과가 많아 데이터의 일부만 표시됩니다.",

    // --- Issue detail panel (AI Security/CAS-type issue overview tab) ---
    // A "trigger rule" link (shown in both its title attribute and its link text).
    "Identity Posture Rule": "ID 보안 태세 규칙",
    // already registered in another screen's dictionary, so only the technique name is added here).
    "Drive-by Compromise": "드라이브 바이 침해",
    // A value in the "attack technique" column of an AI Security Posture (DSPM) issue's evidence
    // table (inside table-widget; the column heading itself is already translated).
    "Indirect Attack": "간접 공격",
    "Jailbreak": "탈옥",
    // The same issue's evidence-section heading (the description text itself is a fixed,
    // tenant-independent string, but it sits under pan-highlight-text, which the existing
    // RAW_IDENTIFIER_SELECTOR exclusion policy keeps out of the fixed dictionary — so only the
    // heading is added here).
    "Prompt Injection": "프롬프트 인젝션",
    // The issue's detection-rule name shown in the "Detection logic" field (a generic,
    // instance-independent name). The issue name itself (inside xdr-issue-focus-area-header h3
    // span[utitle]) is excluded by the existing policy, so only this generic name — shown in a
    // separate field — is added here.
    "AI deployment missing prompt attack protection": "AI 배포에 프롬프트 공격 보호가 누락됨",
    // "Potential dependency confusion due to package name or scope ... available
    // "Potential dependency confusion due to package name or scope ... available in registry"
    // always has an actual package name (e.g. case-tracker) embedded in the text, so it never
    // matches exactly; it is instead handled by the regex entry under "patterns" below (not added
    // to the fixed "exact" dictionary).
    "Package Management": "패키지 관리",
    "Dependency Chains": "종속성 체인",
    // Code-evidence (commit info) labels — the leading "| " is included in the same text node as
    // part of the separator.
    "| Commit Hash": "| 커밋 해시",
    "| Commit Time": "| 커밋 시간",
  },

  patterns: [
    // Originally a fixed "Open in GitHub" entry, but the same phrasing turned out
    // to appear for other repository providers too (e.g. GitLab), so this was
    // changed to a pattern with the provider name as a variable.
    { re: /^Open in (.+)$/, tpl: "$1에서 열기" },
    { re: /^Rules that affect over (\d+) issues cannot be created$/, tpl: "이슈 $1건을 초과하여 영향을 주는 규칙은 생성할 수 없습니다" },
    { re: /^Select an Automation to run on selected issue (\d+), "(.+)"$/, tpl: "선택한 이슈 $1 \"$2\"에서 실행할 Automation을 선택하세요" },
    // 'tyamasaki-test-rule-01(Network Exposure) was added to the case because it relates to the same asset'
    { re: /^(.+?)\((.+?)\) was added to the case because it relates to the same asset$/, tpl: "$1($2)은(는) 동일한 자산과 관련되어 있어 케이스에 추가되었습니다" },
    // "The automation '7caa89a2-e4c5-4496-8653-cf1e2989f705' encountered an error."
    // (The automation's name/ID is embedded dynamically. The quote characters match the source
    // text, which uses typographic quotes U+2018/U+2019.)
    { re: /^The automation ‘(.+?)’ encountered an error\.$/, tpl: "자동화 \"$1\"에서 오류가 발생했습니다." },
    // The detection-rule name for a Dependency Confusion-type issue, shown in the "Detection
    // logic" field. A package name (e.g. case-tracker) is embedded in the text.
    // "Potential dependency confusion due to package name or scope case-tracker available in registry"
    {
      re: /^Potential dependency confusion due to package name or scope (.+?) available in registry$/,
      tpl: "레지스트리에서 사용 가능한 패키지 이름 또는 스코프 \"$1\"(으)로 인한 잠재적 종속성 혼동(Dependency Confusion)",
    },
    // A GitHub-related issue's "Fix" suggestion sentence (a user name, org name, or GitHub App
    // name is embedded dynamically). Rendered as a <u-label> element's text.
    // "Fix - User account sreerajnair95 in GitHub is missing 2FA"
    { re: /^Fix - User account (.+?) in GitHub is missing 2FA$/, tpl: "수정 - GitHub의 사용자 계정 \"$1\"에 2FA가 누락됨" },
    // "Fix - 2FA is not enforced in the tinystepstudio GitHub organization."
    { re: /^Fix - 2FA is not enforced in the (.+?) GitHub organization\.$/, tpl: "수정 - GitHub 조직 \"$1\"에서 2FA가 강제되지 않습니다." },
    // "Fix - Unrestricted usage of GitHub Actions allowed across the organization tinystepstudio."
    {
      re: /^Fix - Unrestricted usage of GitHub Actions allowed across the organization (.+?)\.$/,
      tpl: "수정 - 조직 \"$1\" 전체에서 GitHub Actions의 무제한 사용이 허용됩니다.",
    },
    // "Fix - Excessive GitHub App cortex-appsec-eu permissions"
    { re: /^Fix - Excessive GitHub App (.+?) permissions$/, tpl: "수정 - GitHub App \"$1\"의 과도한 권한" },
    // "Fix - Deprecated package uuid used in NPM project in GitHub repository"
    // (Both the package name and the repository type — GitHub/GitLab/Bitbucket, etc. — are
    // embedded dynamically.)
    {
      re: /^Fix - Deprecated package (.+?) used in NPM project in (.+?) repository$/,
      tpl: "수정 - $2 리포지토리의 NPM 프로젝트에서 사용되는 더 이상 사용되지 않는 패키지 \"$1\"",
    },
    // "Fix - Potential dependency confusion due to package name or scope case-tracker available in registry"
    // Dependency confusion as an Automation candidate name on the "Action plan" tab (it differs
    // from the generic name shown in the "Detection logic" field, see the pattern above, by the
    // leading "Fix - ").
    {
      re: /^Fix - Potential dependency confusion due to package name or scope (.+?) available in registry$/,
      tpl: "수정 - 레지스트리에서 사용 가능한 패키지 이름 또는 스코프 \"$1\"(으)로 인한 잠재적 종속성 혼동(Dependency Confusion)",
    },
    // "Fix - CVE-2019-18888 in symfony/http-foundation, version: 3.4.x-dev"
    // (The CVE number, package name, and version are all embedded dynamically. The first capture
    // group is not restricted to "CVE-" specifically, to also allow for other vulnerability-ID formats.)
    {
      re: /^Fix - (.+?) in (.+?), version: (.+)$/,
      tpl: "수정 - $2의 $1, 버전: $3",
    },
  ],

  skip: [],
};
