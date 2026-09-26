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

const dictionaryPackageExplorer = {
  exact: {
    "Deprecated packages": "사용 중단된 패키지",
    "Samples": "샘플",
    "Console URL": "콘솔 URL",
    "Public URL": "공개 URL",
    "Report false positive": "오탐 신고",
    "Layer IDs": "레이어 ID",
    "Origin Package Name": "원본 패키지 이름",
    "Symbols": "심볼",
    "PURL": "PURL",
    "Copy PURL": "PURL 복사",
    "Risk:": "위험:",
    "Source Package": "소스 패키지",
    "Binaries": "바이너리",
    "High-risk packages": "고위험 패키지",
    "Highlights": "주요 사항",
    "Package Type": "패키지 유형",
    "Packages currently classified as high operational risk":
      "현재 운영 위험이 높은 것으로 분류된 패키지",
    "Packages highlights": "패키지 주요 사항",
    "Total used packages by development stage": "개발 단계별 사용된 총 패키지",
    "Used In": "사용 위치",
  },

  patterns: [
    { re: /^(\d+)\s+Malicious packages$/, tpl: "악성 패키지 $1개" },
    { re: /^(\d+)\s+Deprecated packages$/, tpl: "사용 중단된 패키지 $1개" },
    { re: /^(\d+)\s+Code,\s+(\d+)\s+Runtime,\s+(\d+)\s+Deploy$/, tpl: "코드 $1개, 런타임 $2개, 배포 $3개" },
  ],

  skip: [],
};
