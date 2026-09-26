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

const dictionaryDataBroker = {
  exact: {
    // --- Broker VMs / Clusters tab ---
    "Add": "추가",
    "Add Broker": "브로커 추가",
    "Add Cluster": "클러스터 추가",
    "Apps": "앱",
    "Brokers": "브로커",
    "Configuration Status": "구성 상태",
    "Device Name": "디바이스 이름",
    "Device ID": "디바이스 ID",
    "All interfaces": "모든 인터페이스",
    "External Interface": "외부 인터페이스",
    "Download": "다운로드",
    "Generate Token": "토큰 생성",
    "Local Agent Settings": "로컬 에이전트 설정",
    "Network Mapper": "네트워크 매퍼",
    "Registry Scanner": "레지스트리 스캐너",
    "Up to date": "최신 상태",
    "must be rebooted to finish installing important updates":
      "중요 업데이트 설치를 완료하려면 재부팅해야 합니다",
    "CPU Usage": "CPU 사용률",
    "Disk Usage": "디스크 사용률",
    "Memory Usage": "메모리 사용률",
    "Please change the date or filters to view results.": "결과를 보려면 날짜 또는 필터를 변경하세요.",
    "Done": "완료",
    "Generating Token...": "토큰 생성 중...",
    "Notice! This token will not be accessible once you close this window":
      "참고! 이 창을 닫으면 이 토큰에 다시 액세스할 수 없습니다",
    "VM token": "VM 토큰",

    // --- Add Cluster screen ---
    "Cluster Configurations": "클러스터 구성",
    "Configure the cluster automatic upgrade settings": "클러스터 자동 업그레이드 설정 구성",
    "Define listening port and protocol for the Load Balancer Health-Check":
      "로드 밸런서 상태 확인을 위한 수신 포트 및 프로토콜을 정의하세요",
    "Define the Load Balancer FQDN": "로드 밸런서 FQDN을 정의하세요",
    "Define the cluster name": "클러스터 이름을 정의하세요",
    "Load Balancer FQDN": "로드 밸런서 FQDN",
    "Load Balancer Health-Check": "로드 밸런서 상태 확인",
    "Port": "포트",
    "Specific": "특정",
    "Use Default (Enabled)": "기본값 사용(사용)",
    "Auto Upgrade": "자동 업그레이드",
    "auto upgrade": "자동 업그레이드",
    "protocol": "프로토콜",
    "schedule": "일정",
    "days in week": "요일",

    // --- Engines tab ---
    "Create New Engine": "새 엔진 생성",
    "No Results": "결과 없음",
    "Allow running multiple engines on the same machine": "동일한 머신에서 여러 엔진 실행 허용",
    "Engine name": "엔진 이름",
    "Installer Type": "설치 프로그램 유형",
    "JSON formatted configuration": "JSON 형식 구성",
    "Name is required and must be unique": "이름은 필수이며 고유해야 합니다",
    "Shell": "셸",
  },

  patterns: [
    { re: /^(\d+)\s+brokers?$/, tpl: "브로커 $1개" },
    { re: /^(\d+)\s+days? selected$/, tpl: "$1일 선택됨" },
  ],

  skip: [],
};
