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

const dictionaryDataManagement = {
  exact: {
    // --- Dataset Management screen ---
    "Cold Range": "콜드 범위",
    "Dataset": "데이터 세트",
    "Dataset Name": "데이터 세트 이름",
    "Dataset Views": "데이터 세트 뷰",
    "Hot Range": "핫 범위",
    "Hot Storage License": "핫 스토리지 라이선스",
    "Log Update Type": "로그 업데이트 유형",
    "Logs": "로그",
    "Lookup": "조회",
    "Raw": "Raw",
    "System Audit": "시스템 감사",
    "Total Days Stored": "총 저장 일수",
    "Total Size Stored": "총 저장 크기",
    "Average Daily Size": "일일 평균 크기",
    "Average Event Size": "평균 이벤트 크기",
    "Data tier": "데이터 계층",
    "Default Query Target": "기본 쿼리 대상",
    "Source Query": "소스 쿼리",
    "TTL": "TTL",
    "TTL(minutes)": "TTL(분)",
    "Total Events": "총 이벤트 수",
    "Is Valid": "유효 여부",
    "Related Tables": "관련 테이블",
    "New Dataset View": "새 데이터 세트 뷰",
    "Dataset View Name": "데이터 세트 뷰 이름",
    "Created At": "생성 일시",
    "Add Lookup": "조회 추가",
    "Upload a csv, tsv, or json file (max. 30MB) to be used as a dataset":
      "데이터 세트로 사용할 csv, tsv 또는 json 파일(최대 30MB)을 업로드하세요",
    "Drag and Drop a file here": "여기에 파일을 끌어서 놓기",
    "browse": "찾아보기",
    "your files": "파일 선택",
    "Define dataset name": "데이터 세트 이름 정의",

    // --- Parsing Rules screen ---
    "User Defined": "사용자 정의",
    "Default Rules": "기본 규칙",
    "Both": "둘 다",
    "Simulate": "시뮬레이션",
    "Event ID": "이벤트 ID",
    "Input Logs": "입력 로그",
    "Line number": "줄 번호",
    "Logs output": "로그 출력",
    "No output logs": "출력 로그 없음",
    "Output Logs": "출력 로그",
    "Raw log": "원시 로그",
    "Show more": "더 보기",
    "Success": "성공",
    "XQL Samples": "XQL 샘플",
    "Sample time": "샘플 시간",
    "Layout": "레이아웃",
    "Filters": "필터",
    "Restore default layout": "기본 레이아웃 복원",
    "APPEARANCE": "모양",
    "LOG FORMAT": "로그 형식",
    "TREE": "트리",
    "Search column": "열 검색",
    "Remove all": "모두 제거",
    "Add all": "모두 추가",
    "You can change your parsing rules and try again": "구문 분석 규칙을 변경한 후 다시 시도하세요",

    // --- Compute Units Usage screen ---
    "API Query": "API 쿼리",
    "Agent and LLM consumption is currently shown for informational purposes only and does not impact your Compute Unit balance.":
      "에이전트 및 LLM 소비량은 현재 정보 제공 목적으로만 표시되며 컴퓨팅 유닛 잔액에는 영향을 주지 않습니다.",
    "Agentic Assistant": "에이전틱 어시스턴트",
    "Agents & LLM": "에이전트 및 LLM",
    "Compute Unit Usage": "컴퓨팅 유닛 사용량",
    "Compute units": "컴퓨팅 유닛",
    "Consumption by category over time": "시간 경과에 따른 카테고리별 소비량",
    "Daily limit": "일일 한도",
    "LLM Task": "LLM 작업",
    "Notebook": "노트북",
    "Queries": "쿼리",
    "Set daily limit": "일일 한도 설정",
    "Set a daily limit to manage your compute unit consumption. This helps distribute your annual quota over time and prevent early depletion.":
      "일일 한도를 설정하여 컴퓨팅 유닛 소비량을 관리하세요. 이를 통해 연간 할당량을 기간에 걸쳐 분배하고 조기 소진을 방지할 수 있습니다.",
    "Queries limit": "쿼리 한도",
    "No limit": "제한 없음",
    "This is your": "이것은 다음입니다:",
    "Timestamp": "타임스탬프",
    "Total annual usage": "총 연간 사용량",
    "Trigger Type": "트리거 유형",
    "Unused": "미사용",
    "Usage by type": "유형별 사용량",
    "XQL Queries": "XQL 쿼리",
    "Billable": "청구 대상",
    "Trigger/PAPI Key ID": "트리거/PAPI 키 ID",
    "Query/Prompt": "쿼리/프롬프트",
  },

  patterns: [
    { re: /^Cortex GB hot retention:\s*(\d+)\s*days$/, tpl: "Cortex GB 핫 보존 기간: $1일" },
    { re: /^Cortex EP hot retention:\s*(\d+)\s*days$/, tpl: "Cortex EP 핫 보존 기간: $1일" },
    { re: /^Cortex EP issues and cases hot retention:\s*(\d+)\s*days$/, tpl: "Cortex EP 이슈 및 케이스 핫 보존 기간: $1일" },
    { re: /^Cortex GB issues and cases hot retention:\s*(\d+)\s*days$/, tpl: "Cortex GB 이슈 및 케이스 핫 보존 기간: $1일" },
    { re: /^IN VIEW\s+(\(\d+\))$/, tpl: "표시 중 $1" },
    { re: /^ADD COLUMNS\s+(\(\d+\))$/, tpl: "열 추가 $1" },
    // "Divide annual quota evenly" and "[55 per day]" render as separate text
    // nodes, so each is pattern-matched individually.
    { re: /^Divide annual quota evenly$/, tpl: "연간 할당량 균등 분배" },
    { re: /^(\d+)% of annual quota$/, tpl: "연간 할당량의 $1%" },
    { re: /^\[(\d+) per day\]$/, tpl: "[일일 $1개]" },
  ],

  skip: [],
};
