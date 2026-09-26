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

const dictionaryCompliance = {
  exact: {
    // --- Compliance > Standards Catalog screen ---
    "Standards Catalog": "표준 카탈로그",
    "Create Standard": "표준 생성",
    "Create New Standard": "새 표준 생성",
    "Assign Controls": "컨트롤 할당",
    "Select Controls": "컨트롤 선택",
    "Create New Control": "새 컨트롤 생성",
    "Control name": "컨트롤 이름",
    "Sub category": "하위 카테고리",
    "Select custom standards": "사용자 지정 표준 선택",
    "Delete custom standard?": "사용자 지정 표준을 삭제하시겠습니까?",
    "Delete Custom Control": "사용자 지정 컨트롤 삭제",

    // --- Compliance > Assessment Profiles screen ---
    "Assessment Profiles": "평가 프로필",
    "Asset Group Name": "자산 그룹 이름",
    "Create New Assessment": "새 평가 생성",
    "Enabled": "사용",
    "Report Frequency (UTC)": "보고서 빈도 (UTC)",
    "Report Targets": "보고서 대상",
    "Standard Name": "표준 이름",
    "Yes": "예",
    "New Assessment Profile": "새 평가 프로필",
    "Standards and Asset Group": "표준 및 자산 그룹",
    "Configure the profile name and report settings.": "프로필 이름과 보고서 설정을 구성하세요.",
    "Generate a scheduled report": "예약된 보고서 생성",
    "Report Types": "보고서 유형",
    "Add profile name": "프로필 이름 추가",
    "Select a compliance standard and asset group.": "규정 준수 표준과 자산 그룹을 선택하세요.",
    "Select standard": "표준 선택",
    "Review your assessment profile configuration.": "평가 프로필 구성을 검토하세요.",
    "Assessment Profile ID": "평가 프로필 ID",

    // --- Assessment Profiles grid row actions ---
    "View Asset Group": "자산 그룹 보기",
    "View Assessment Results": "평가 결과 보기",
    "Export to PDF": "PDF로 내보내기",
    "Export to CSV": "CSV로 내보내기",
    "Delete Report": "보고서 삭제",
  },

  patterns: [
    { re: /^at (\d{1,2}:\d{2}) every day$/, tpl: "매일 $1에" },
    // The body text of the custom standard/control delete-confirmation dialog. The name
    // (an identifier) is left untranslated.
    { re: /^You are about to delete "(.+)"$/, tpl: "\"$1\"을(를) 삭제하려고 합니다" },
    // The original text has a typo, "want do delete" instead of "want to delete", but is kept
    // verbatim here to exact-match what's actually displayed.
    { re: /^Are you sure you want do delete "(.+)"\?$/, tpl: "\"$1\"을(를) 삭제하시겠습니까?" },
    { re: /^This will disable assessment profile "(.+)"$/, tpl: "평가 프로필 \"$1\"을(를) 사용 중지합니다" },
    { re: /^This will delete profile "(.+)" permanently$/, tpl: "프로필 \"$1\"을(를) 영구적으로 삭제합니다" },
  ],

  skip: [],
};
