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

const dictionaryHealthIssues = {
  exact: {
    "Integration Instance - Command": "통합 인스턴스 - 명령",
    "Legacy health issues": "레거시 상태 이슈",
    "Data Ingestion Health": "데이터 수집 상태",
    "There are no Ingestion Health issues": "수집 상태 이슈가 없습니다",
    "Observation Time": "관찰 시간",
    "Note: The table data will reload automatically when you close this panel.": "참고: 이 패널을 닫으면 테이블 데이터가 자동으로 다시 로드됩니다.",
  },

  patterns: [
    { re: /^Detected\s+(\d+)\s+out of$/, tpl: "탐지됨: $1 / " },
    // "Warning: Integration command 'setIssueSeverity' on integration 'Builtin' instance 'Builtin' ran for 16 minutes as part of investigation '5808252', exceeding the recommended threshold of 15 minutes. Performance may be affected."
    { re: /^Warning: Integration command '(.+)' on integration '(.+)' instance '(.+)' ran for (\d+) minutes? as part of investigation '(.+)', exceeding the recommended threshold of (\d+) minutes?\. Performance may be affected\.$/,
      tpl: "경고: 통합 '$2'의 인스턴스 '$3'에서 통합 명령 '$1'이(가) 조사 '$5'의 일부로 $4분 동안 실행되어 권장 임계값 $6분을 초과했습니다. 성능에 영향을 줄 수 있습니다." },
  ],

  skip: [],
};
