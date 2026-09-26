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

const dictionaryAttackSurfaceAssets = {
  exact: {
    "Affected Page": "영향받는 페이지",
    "Appears on Page": "표시되는 페이지",
    "HSTS": "HSTS",
    "Login": "로그인",
    "No": "아니요",
    "Purpose": "목적",
    "Required": "필수",
    "Submit Action URL": "제출 작업 URL",
    "Unknown": "알 수 없음",
    "Data Type": "데이터 유형",
    "ID": "ID",
    "Name": "이름",
    "Other": "기타",
    "Result": "결과",
    "Script": "스크립트",
    "Secure": "보안됨",
    "Status": "상태",
    "Tags": "태그",
    "Technologies": "기술",
    "Type": "유형",
    "Version": "버전",
    "Web": "Web",
    "Asset Category": "자산 범주",
    "Asset Groups": "자산 그룹",
    "Asset ID": "자산 ID",
    "Asset Id": "자산 ID",
    "Categories": "범주",
    "Compliance": "규정 준수",
    "Configurations": "구성",
    "Configured Host": "구성된 호스트",
    "Contains": "포함",
    "Detected On": "탐지일",
    "Externally Detected Provider": "외부에서 탐지된 공급자",
    "Exploitable": "익스플로잇 가능",
    "Fail": "실패",
    "First Observed": "최초 관찰",
    "Geo Region for IP": "IP의 지리적 리전",
    "HTML Analysis": "HTML 분석",
    "Hosting Services": "호스팅 서비스",
    "Has Issue": "이슈 여부",
    "Load balancers": "로드 밸런서",
    "Most Recent Screenshot": "최근 스크린샷",
    "Open Site in New Tab": "새 탭에서 사이트 열기",
    "Other Websites": "기타 웹사이트",
    "Other Websites Owned by Your Organization Hosted on the Same IP in the Last 30 Days":
      "최근 30일간 동일한 IP에서 호스팅된, 조직이 소유한 기타 웹사이트",
    "PaaS": "PaaS",
    "Pass": "통과",
    "Port": "포트",
    "Properties": "속성",
    "Protocol Downgrade": "프로토콜 다운그레이드",
    "Redirects never downgrade from HTTPS to HTTP.": "리디렉션이 HTTPS에서 HTTP로 다운그레이드되지 않습니다.",
    "Root Page HTTP Status Code": "루트 페이지 HTTP 상태 코드",
    "Security Best Practice Analysis": "보안 모범 사례 분석",
    "Security Best Practices Analysis": "보안 모범 사례 분석",
    "Security Practice": "보안 사례",
    "Service Name": "서비스 이름",
    "Services Hosting this Website": "이 웹사이트를 호스팅하는 서비스",
    "Sets valid Referrer-Policy Header": "유효한 Referrer-Policy 헤더 설정",
    "Technologies Detected in the Last 10 Days": "최근 10일간 탐지된 기술",
    "Third Party Resources Detected in the Last 10 days": "최근 10일간 탐지된 타사 리소스",
    "Third Party URLs": "타사 URL",
    "This website uses HTTPS which encrypts data in transit between browser and server.":
      "이 웹사이트는 HTTPS를 사용하여 브라우저와 서버 간 전송 중인 데이터를 암호화합니다.",
    "Website": "웹사이트",
    "Website Details": "웹사이트 세부 정보",
  },

  patterns: [
    { re: /^Captured (.+) from$/, tpl: "$1에 캡처한 출처:" },
  ],

  skip: [],
};
