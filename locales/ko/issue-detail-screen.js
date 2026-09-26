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

const dictionaryIssueDetailScreen = {
  exact: {
    "Affected Assets": "영향받는 자산",
    "Action:": "작업:",
    "Assignee:": "담당자:",
    "Cloud Configuration Issue Rule": "클라우드 구성 이슈 규칙",
    "Cloud Configuration Layout": "클라우드 구성 레이아웃",
    "Compute Policy": "컴퓨팅 정책",
    "Copy issue URL": "이슈 URL 복사",
    "Created:": "생성됨:",
    "Detected (Scanned)": "탐지됨(스캔됨)",
    "Detection Logic": "탐지 로직",
    "Evidence": "증거",
    "Issue Layout:": "이슈 레이아웃:",
    "Linked Cases": "연결된 케이스",
    "No Changes": "변경 사항 없음",
    "Open in new tab": "새 탭에서 열기",
    "Press SPACE to select this row": "스페이스 키를 눌러 이 행 선택",
    "Resolution": "해결",
    "Status:": "상태:",
    "Triggered by rule:": "트리거한 규칙:",
    "Updated:": "업데이트됨:",
    "War Room": "워룸",
    "Work Plan": "작업 계획",

    // --- Built-in rule names (fixed catalog) ---
    "Auditd unmonitored file permission changes found":
      "Auditd에서 모니터링되지 않는 파일 권한 변경 발견",
    "Auditd unmonitored kernel module loading and unloading found":
      "Auditd에서 모니터링되지 않는 커널 모듈 로드 및 언로드 발견",
    "Auditd unmonitored network configuration changes found":
      "Auditd에서 모니터링되지 않는 네트워크 구성 변경 발견",
    "Linux host with ICMP packet redirect enabled found":
      "ICMP 패킷 리디렉션이 사용 설정된 Linux 호스트 발견",
    "Linux host with unrestricted default user umask found":
      "기본 사용자 umask가 제한되지 않은 Linux 호스트 발견",
    "Linux host without AIDE service found": "AIDE 서비스가 없는 Linux 호스트 발견",
    "Minimum days between password changes is misconfigured":
      "암호 변경 간 최소 일수가 잘못 구성됨",
  },

  patterns: [
    { re: /^Open for (\d+)\s+minutes?$/, tpl: "$1분 동안 열림" },
    { re: /^Open for (\d+)\s+hours?$/, tpl: "$1시간 동안 열림" },
    { re: /^Open for (\d+)\s+days?$/, tpl: "$1일 동안 열림" },
  ],

  skip: [],
};
