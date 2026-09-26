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

const dictionaryNta = {
  exact: {
    "DNS Activity": "DNS 활동",
    "DNS Response Codes": "DNS 응답 코드",
    "Daily DNS Queries": "일일 DNS 쿼리",
    "Daily Threats": "일일 위협",
    "Dataset Unavailable": "데이터 세트를 사용할 수 없음",
    "FAILED TO RUN QUERY": "쿼리를 실행하지 못했습니다",
    "From Zone": "출발 영역",
    "GB Sent and Received": "송수신 GB",
    "Geo Locations": "지리적 위치",
    "HTTP Activity": "HTTP 활동",
    "HTTP Content Type": "HTTP 콘텐츠 유형",
    "HTTP Method": "HTTP 메서드",
    "HTTP Response Code": "HTTP 응답 코드",
    "HTTP User Agent": "HTTP 사용자 에이전트",
    "Network Zones": "네트워크 영역",
    "Overview": "개요",
    "Recent Threats": "최근 위협",
    "The required dataset for this widget is not available.":
      "이 위젯에 필요한 데이터 세트를 사용할 수 없습니다.",
    "Threat Category": "위협 범주",
    "Threat Severity": "위협 심각도",
    "Threat Sources": "위협 소스",
    "Threats": "위협",
    "To Zone": "대상 영역",
    "Top App-IDs": "상위 App-ID",
    "Top Geo Locations": "상위 지리적 위치",
    "Transport Protocols": "전송 프로토콜",
    "URL Activity": "URL 활동",
    "URL Categories": "URL 범주",
    "URL Risk": "URL 위험",
    "Volume": "볼륨",
    "Zones": "영역",
  },

  patterns: [
    { re: /^unknown field (\w+)\.$/, tpl: "알 수 없는 필드 $1." },
    { re: /^\+\s*(\d+)\s+more$/, tpl: "외 $1개" },
  ],

  skip: [],
};
