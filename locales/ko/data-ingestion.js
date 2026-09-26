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

const dictionaryDataIngestion = {
  exact: {
    "Data Ingestion": "데이터 수집",

    "All": "전체",
    "All Sources": "모든 소스",
    "Cloud Logging": "클라우드 로깅",
    "Current Day Ingested": "오늘 수집량",
    "Daily Consumption": "일일 사용량",
    "Detailed Ingestion": "상세 수집",
    "Found": "발견됨",
    "Ingestion Rate": "수집 속도",
    "Last Day Ingested": "전날 수집량",
    "Last Seen": "마지막 확인",
    "Note: graph display is limited to top 100 results per day.":
      "참고: 그래프 표시는 하루 상위 100개 결과로 제한됩니다.",
    "Product": "제품",
    "ProductS": "제품",
    "Products": "제품",
    "Vendor": "공급업체",
    "Vendors": "공급업체",
    "results": "결과",
    "no filter": "필터 없음",
  },

  patterns: [
    { re: /^(\d+)\s+selected$/, tpl: "$1개 선택됨" },
  ],

  skip: [],
};
