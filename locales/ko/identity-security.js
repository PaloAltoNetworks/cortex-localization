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

const dictionaryIdentitySecurity = {
  exact: {
    "Administrative": "관리자 권한",
    "Identity Overview": "ID 개요",
    "Identity Asset Inventory": "ID 자산 인벤토리",
    "Cloud Unified Human Identities": "클라우드 통합 인간 ID",
    "Empty Groups": "빈 그룹",
    "Cloud Groups": "클라우드 그룹",
    "SaaS Groups": "SaaS 그룹",
    "On-Premises Groups": "온프레미스 그룹",
    "On premises Unified Human Identities": "온프레미스 통합 인간 ID",
    "Secrets": "시크릿",
    "MFA Disabled": "MFA 사용 안 함",
    "SaaS Unified Human Identities": "SaaS 통합 인간 ID",
    "SaaS Human Identities": "SaaS 인간 ID",
    "On-premises Human Identities": "온프레미스 인간 ID",
    "Weak Passwords": "취약한 비밀번호",
    "Team Membership": "팀 멤버십",
    "Who does it grant access to?": "누구에게 액세스 권한을 부여합니까?",
    "Last Commit": "마지막 커밋",
    "This widget show the riskiest identities with the highest score combination of risks. Fixing such identity will improve the overall score.":
      "이 위젯은 위험 조합 점수가 가장 높은, 가장 위험한 ID를 표시합니다. 이러한 ID를 수정하면 전체 점수가 개선됩니다.",
    "In this widget, you can find information about your Admin Identities. We identify identity as admin if it meets the following criteria:":
      "이 위젯에서 관리자 ID에 대한 정보를 확인할 수 있습니다. 다음 기준을 충족하는 ID를 관리자로 식별합니다:",
    "• Has one of the Built-in Admin policies": "• 기본 제공 관리자 정책 중 하나가 있음",
    "• Has custom policies with administrative permissions": "• 관리자 권한이 있는 사용자 지정 정책이 있음",
    "In addition to the access, we take into consideration the level on which this access was granted for the identity":
      "액세스 권한 외에도 해당 액세스 권한이 ID에 부여된 수준도 고려합니다",
    "This widget provides an overview of your assets at risk and enables you to quickly and easily identify the riskiest identity asset categories, helping you prioritize and address the most critical security vulnerabilities first.":
      "이 위젯은 위험에 처한 자산의 개요를 제공하며, 가장 위험한 ID 자산 범주를 빠르고 쉽게 식별하여 가장 심각한 보안 취약점부터 우선적으로 해결할 수 있도록 도와줍니다.",
    "Admins Only": "관리자만",
    "Admins Summary": "관리자 요약",
    "AWS IAM Role": "AWS IAM 역할",
    "AWS IAM Role has role chaining permissions to admin":
      "AWS IAM 역할에 관리자로의 역할 체이닝 권한이 있습니다",
    "Config": "구성",
    "Got even more time?": "시간이 더 있으신가요?",
    "Human Identities": "인간 ID",
    "IAM Identity Asset Inventory": "IAM ID 자산 인벤토리",
    "Identities with excessive policies": "과도한 정책이 있는 ID",
    "Identities with unused permissions": "사용하지 않는 권한이 있는 ID",
    "Identity Security Findings": "ID 보안 발견 사항",
    "Inactive identities": "비활성 ID",
    "List": "목록",
    "Management Group": "관리 그룹",
    "Non-Human Identities": "비인간 ID",
    "Number of admins from total number of Identities": "전체 ID 중 관리자 수",
    "Policies": "정책",
    "Read": "읽기",
    "Resource": "리소스",
    "Resource Group": "리소스 그룹",
    "Risk Assessments": "위험 평가",
    "Show all issues >": "모든 이슈 표시 >",
    "Subscription": "구독",
    "Top Critical Issues to Address": "해결해야 할 주요 심각 이슈",
    "Top Identities at Risk": "위험에 처한 상위 ID",
    "Top Issues to improve your Identity Security": "ID 보안 개선을 위한 주요 이슈",
    "Unified Human Identities": "통합 인간 ID",
    "View policies": "정책 보기",
    "We’ve identified the most pressing vulnerabilities to help secure your identity.":
      "ID 보안을 강화하는 데 도움이 되도록 가장 시급한 취약점을 식별했습니다.",
    "Write": "쓰기",
      // Widgets on the identity/user detail drill-down page.
    "Case Breakdown": "케이스 분류",
    "Total open cases within the selected timeframe": "선택한 기간 내 열린 케이스 총 수",
    "Risk Score Trend": "위험 점수 추이",
    "There is no data to display at this time.": "현재 표시할 데이터가 없습니다.",
    "Points Added": "추가된 포인트",
    "View User Details": "사용자 세부정보 보기",
    "View in XQL": "XQL에서 보기",
    "Authentication Attempts": "인증 시도",
    "Failed Logins": "로그인 실패",
    "Risk Assessment": "위험 평가",
    "Common User Locations": "일반적인 사용자 위치",
    "Common Operating Systems": "일반적인 운영 체제",
    "Activity Timeline": "활동 타임라인",
    "Issues & Insights Heatmap": "이슈 및 인사이트 히트맵",
    "SaaS Logs": "SaaS 로그",
  },
  patterns: [
    { re: /^([\d,]+)\s+Empty Groups$/, tpl: "빈 그룹 $1개" },
    { re: /^([\d,]+)\s+MFA Disabled$/, tpl: "MFA 사용 안 함 $1개" },
    { re: /^([\d,]+)\s+Weak Passwords$/, tpl: "취약한 비밀번호 $1개" },
    { re: /^([\d,]+)\s+Service Accounts$/, tpl: "서비스 계정 $1개" },
    { re: /^([\d,]+)\s+Secrets$/, tpl: "시크릿 $1개" },
    { re: /^([\d,]+)\s+Admin$/, tpl: "관리자 $1명" },
    { re: /^([\d,]+)\s+Sensitive Access$/, tpl: "민감한 액세스 $1개" },
    { re: /^([\d,]+)\s+Inactive$/, tpl: "비활성 $1개" },
    { re: /^Where can this (.+) access\?$/, tpl: "이 $1은(는) 어디에 액세스할 수 있습니까?" },
    { re: /^This identity has access to (\d+) assets?$/, tpl: "이 ID는 자산 $1개에 액세스할 수 있습니다" },
    { re: /^(\d+)\s+Tactics?$/, tpl: "전술 $1개" },
    { re: /^(\d+)\s+Techniques?$/, tpl: "기법 $1개" },
    { re: /^(\d[\d,]*)\s+issues$/, tpl: "이슈 $1건" },
    { re: /^(\d[\d,]*)\s+admins at risk$/, tpl: "위험에 처한 관리자 $1명" },
  ],

  skip: [
    // Chart-library attribution text.
    /^Created with Highcharts/,
  ],
};
