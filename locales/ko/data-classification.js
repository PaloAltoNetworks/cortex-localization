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

const dictionaryDataClassification = {
  exact: {
    // --- Data Patterns tab ---
    "Add Pattern": "패턴 추가",
    "Data Pattern Name": "데이터 패턴 이름",
    "Enter data pattern name": "데이터 패턴 이름 입력",
    "Enter context words": "컨텍스트 단어 입력",
    "Enter regex": "정규식 입력",
    "Enter test string here": "여기에 테스트 문자열 입력",
    "Geo": "지역",
    "Select Geos": "지역 선택",
    "Last Updated By": "마지막 업데이트한 사용자",
    "Add description": "설명 추가",
    "Apply data patterns to the data profile:": "데이터 프로필에 데이터 패턴 적용:",
    "Built-in Data Pattern": "기본 제공 데이터 패턴",
    "Context Words": "컨텍스트 단어",
    "Create New Data Pattern": "새 데이터 패턴 생성",
    "Custom patterns are added as OR statements to custom profiles only. You can edit it later from the data profile page.":
      "사용자 지정 패턴은 사용자 지정 프로필에만 OR 조건으로 추가됩니다. 나중에 데이터 프로필 페이지에서 편집할 수 있습니다.",
    "Enter an integer from 10 to 150.": "10에서 150 사이의 정수를 입력하세요.",
    "Enter your test string, and we will highlight any matches based on the regex you configure.":
      "테스트 문자열을 입력하면 구성한 정규식과 일치하는 부분이 강조 표시됩니다.",
    "Full Masking": "전체 마스킹",
    "No results found.": "결과를 찾을 수 없습니다.",
    "Partial Masking": "부분 마스킹",
    "Proximity": "근접도",
    "Regular Expression (Regex)": "정규식(Regex)",
    "Show Advanced Options": "고급 옵션 표시",
    "Hide Advanced Options": "고급 옵션 숨기기",
    "Test": "테스트",
    "Test Data Pattern": "데이터 패턴 테스트",
    "Test results appear here": "테스트 결과가 여기에 표시됩니다",
    "Uses the Rust regular expression syntax.": "Rust 정규식 구문을 사용합니다.",
    "masking level": "마스킹 수준",

    // --- Data Topics tab (translated in full since there are few entries) ---
    "Topic Name": "토픽 이름",
    "Last Updated At": "마지막 업데이트 일시",
    "Business Continuity Plans": "비즈니스 연속성 계획",
    "CVs": "이력서",
    "Corporate Filings": "법인 제출 서류",
    "Financial Transactions & Payroll": "금융 거래 및 급여",
    "Legal Agreements": "법적 계약서",
    "Medical Certificates and Records": "의료 증명서 및 기록",
    "Tax Documents": "세무 문서",
    "Business continuity and disaster recovery plans. These strategic documents outline procedures for maintaining operations during disruptions.":
      "비즈니스 연속성 및 재해 복구 계획. 이러한 전략 문서는 중단 발생 시 운영을 유지하기 위한 절차를 설명합니다.",
    "Financial transaction records including invoices, receipts, and payment confirmations, as well as Employee compensation records including salary details, deductions, and payment history.":
      "송장, 영수증, 결제 확인서를 포함한 금융 거래 기록과 급여 세부 정보, 공제 및 지급 내역을 포함한 직원 보상 기록.",
    "Formal contracts and service terms between parties. These files define legal obligations related to business operations.":
      "당사자 간의 공식 계약서 및 서비스 약관. 이러한 파일은 비즈니스 운영과 관련된 법적 의무를 정의합니다.",
    "Official corporate registration documents, annual reports, and regulatory filings. These records are essential for legal compliance and corporate governance.":
      "공식 법인 등기 서류, 연례 보고서 및 규제 기관 제출 서류. 이러한 기록은 법규 준수와 기업 지배 구조에 필수적입니다.",
    "Private health information and clinical documentation for individuals. This sensitive data requires high-level protection to maintain patient confidentiality and regulatory compliance.":
      "개인의 비공개 건강 정보 및 임상 문서. 이 민감한 데이터는 환자 기밀 유지와 규제 준수를 위해 높은 수준의 보호가 필요합니다.",
    "Professional profiles detailing candidate work history and qualifications. These documents contain personal information and are subject to privacy regulations.":
      "지원자의 경력 및 자격을 자세히 기술한 전문 프로필. 이러한 문서에는 개인 정보가 포함되어 있으며 개인정보 보호 규정의 적용을 받습니다.",
    "Tax filings, returns, and related financial documents. These contain sensitive financial data subject to regulatory requirements.":
      "세금 신고서, 환급 신청서 및 관련 재무 문서. 여기에는 규제 요건이 적용되는 민감한 재무 데이터가 포함되어 있습니다.",

    // --- Data Profiles tab (translated in full since there are few entries;
    // PCI/PHI/PII/GDPR/CCPA are left in English as industry-standard abbreviations) ---
    "Built-in Data Profile": "기본 제공 데이터 프로필",
    "Cloud, SaaS": "클라우드, SaaS",
    "Cloud, SaaS, Endpoints, APIs": "클라우드, SaaS, 엔드포인트, API",
    "Condition": "조건",
    "Data Location": "데이터 위치",
    "Data Profile Name": "데이터 프로필 이름",
    "View Condition": "조건 보기",
    "Create New Data Profile": "새 데이터 프로필 생성",
    "Select Data Location": "데이터 위치 선택",
    "Set Conditions": "조건 설정",
    "The displayed filters are based on your previous selections.": "표시된 필터는 이전 선택 항목을 기반으로 합니다.",
    "Your selection determines the available condition filters.": "선택 항목에 따라 사용 가능한 조건 필터가 결정됩니다.",
    "CCN (Credit Card Numbers)": "CCN(신용카드 번호)",
    "Intellectual Property - Code": "지적 재산 - 코드",

    // --- Global Settings tab ---
    "Collect Masked Data Patterns": "마스킹된 데이터 패턴 수집",
    "Collects samples of data patterns that are masked by the Classification Engine.":
      "분류 엔진에서 마스킹한 데이터 패턴의 샘플을 수집합니다.",
    "OCR (Optical Character Recognition)": "OCR(광학 문자 인식)",
    "OCR extracts text from images. Disabling this option reduces overall scanning time.":
      "OCR은 이미지에서 텍스트를 추출합니다. 이 옵션을 사용 중지하면 전체 스캔 시간이 단축됩니다.",
  },

  patterns: [],

  skip: [
    // The Data Profiles screen's "Description" column (each profile's description text) is
    // excluded from translation by request (its exact-dictionary entry has been removed).
  ],
};
