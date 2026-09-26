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

const dictionaryDataSecurityCommandCenter = {
  exact: {
    "Data Security Command Center": "데이터 보안 커맨드 센터",

    "AI Assets": "AI 자산",
    "Alerted Policy Violations": "경고가 발생한 정책 위반",
    "Automated": "자동",
    "Automated Issues": "자동화된 이슈",
    "Data Assets Discovered": "검색된 데이터 자산",
    "Developer Secrets": "개발자 시크릿",
    "Endpoint": "엔드포인트",
    "Manual": "수동",
    "No active threats created yet": "아직 생성된 활성 위협이 없습니다",
    "No policy violations found": "정책 위반이 없습니다",
    "On-Prem": "온프레미스",
    "Powered by Sensitive Data": "Sensitive Data 기반",
    "Prevented Policy Violations": "방지된 정책 위반",
    "Resolved Issues": "해결된 이슈",
    "Sensitive": "민감",
    "Sensitive Data Assets": "민감한 데이터 자산",
  },

  patterns: [
    { re: /^(\d[\d,.]*[KkMm]?)\s+Assets$/, tpl: "자산 $1개" },
    { re: /^(\d[\d,.]*[KkMm]?)\s+Databases$/, tpl: "데이터베이스 $1개" },
    { re: /^(\d[\d,.]*[KkMm]?)\s+Datastores$/, tpl: "데이터 저장소 $1개" },
    { re: /^(\d[\d,.]*[KkMm]?)\s+Endpoints$/, tpl: "엔드포인트 $1개" },
    { re: /^(\d[\d,.]*[KkMm]?)\s+Data Store Services$/, tpl: "데이터 저장소 서비스 $1개" },
  ],

  skip: [],
};
