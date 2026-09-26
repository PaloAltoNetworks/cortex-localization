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

const dictionaryXdrCollector = {
  exact: {
    "Collection Configurations": "수집 구성",
    "Collector upgrade": "수집기 업그레이드",
    "Collectors Configurations": "수집기 구성",
    "Configure the Cortex collector upgrade scheduler and number of parallel upgrades":
      "Cortex 수집기 업그레이드 스케줄러 및 병렬 업그레이드 수 구성",
    "Collection Administration": "수집 관리",
    "Collector Alias": "수집기 별칭",
    "Collector Version": "수집기 버전",
    "Connected, Disconnected": "연결됨, 연결 끊김",
    "IP Address": "IP 주소",
    "XDR Collectors Administration": "XDR 수집기 관리",
    "Assigned Policy": "할당된 정책",
    "Auto Upgrade Status": "자동 업그레이드 상태",
    "Filebeat Status": "Filebeat 상태",
    "Filebeat Version": "Filebeat 버전",
    "Group Names": "그룹 이름",
    "Install Date": "설치 날짜",
    "Last Used Proxy": "마지막으로 사용한 프록시",
    "Last Used Proxy Port": "마지막으로 사용한 프록시 포트",
    "Winlogbeat Status": "Winlogbeat 상태",
    "Winlogbeat Version": "Winlogbeat 버전",
    "Add Group": "그룹 추가",
    "Click 'Add Group' to create a new collection group": "새 수집 그룹을 생성하려면 \"그룹 추가\"를 클릭하세요",
    "Filter": "필터",
    "Group Name": "그룹 이름",
    "Group Type": "그룹 유형",
    "Members Count": "구성원 수",
    "No Collection Groups": "수집 그룹 없음",
    "XDR Collectors Groups": "XDR 수집기 그룹",
    "Create Dynamic Group": "동적 그룹 생성",
    "Create New Collection Group": "새 수집 그룹 생성",
    "Disable": "사용 중지",
    "No Collectors found": "수집기를 찾을 수 없음",
    "Please enter a group name": "그룹 이름을 입력하세요",
    "Select field": "필드 선택",
    "Uninstalled": "제거됨",
    "Value": "값",
    "XDR Collectors Endpoints": "XDR 수집기 엔드포인트",
    "Use filters and / or manually select endpoints to create a": "필터를 사용하거나 엔드포인트를 수동으로 선택하여 다음을 생성하세요:",
    "static group": "정적 그룹",
    "Click 'Create' to generate a new installation": "새 설치를 생성하려면 \"생성\"을 클릭하세요",
    "Create": "생성",
    "No Collection Installations": "수집 설치 없음",
    "Platform": "플랫폼",
    "XDR Collectors Installations": "XDR 수집기 설치",
    "Create Collection Installation": "수집 설치 생성",
    "Create New Installer": "새 설치 프로그램 생성",
    "description (optional)": "설명(선택 사항)",
    "Add profile": "프로필 추가",
    "Collection Profiles": "수집 프로필",
    "Default collector settings profile for Linux": "Linux용 기본 수집기 설정 프로필",
    "Default collector settings profile for Windows": "Windows용 기본 수집기 설정 프로필",
    "Default profile for Windows collector": "Windows 수집기용 기본 프로필",
    "Default profile for Winlogbeat collector": "Winlogbeat 수집기용 기본 프로필",
    "Default profile for linux collector": "Linux 수집기용 기본 프로필",
    "Usage Count": "사용 횟수",
    "XDR Collectors Profiles": "XDR 수집기 프로필",
    "New Profile": "새 프로필",
    "Next": "다음",
    "Profile": "프로필",
    "Select Platform": "플랫폼 선택",
    "Add name here": "여기에 이름 추가",
    "Configure automatic upgrade for the Cortex collector release.": "Cortex 수집기 릴리스에 대한 자동 업그레이드를 구성합니다.",
    "General Information": "일반 정보",
    "Please insert a name": "이름을 입력하세요",
    "Use Default (Disabled)": "기본값 사용(사용 안 함)",
    "collector auto-upgrade": "수집기 자동 업그레이드",
    "profile name": "프로필 이름",
    "Define here your Filebeat configuration file (YAML) parameters":
      "여기에서 Filebeat 구성 파일(YAML) 매개변수를 정의하세요",
    "Filebeat Configuration File": "Filebeat 구성 파일",
    "For more information about defining the parameters, see the instructions":
      "매개변수 정의에 대한 자세한 내용은 지침을 참조하세요",
    "Select template...": "템플릿 선택...",
    "You can add more than one template to the configuration file.":
      "구성 파일에 템플릿을 둘 이상 추가할 수 있습니다.",
    "You can also combine and edit templates.": "템플릿을 결합하고 편집할 수도 있습니다.",
    "Define here your Winlogbeat configuration file (YAML) parameters":
      "여기에서 Winlogbeat 구성 파일(YAML) 매개변수를 정의하세요",
    "Winlogbeat Configuration File": "Winlogbeat 구성 파일",
    "Any": "모두",
    "Target": "대상",
    "Linux Default": "Linux 기본값",
    "Windows Default": "Windows 기본값",
    "macOS Default": "macOS 기본값",
    "Default Policy Rule for all Linux collectors": "모든 Linux 수집기에 대한 기본 정책 규칙",
    "Default Policy Rule for all Windows collectors": "모든 Windows 수집기에 대한 기본 정책 규칙",
    "XDR Collectors Policies": "XDR 수집기 정책",
    "Back": "뒤로",
    "Create New Policy": "새 정책 생성",
    "Summary": "요약",
    "Notice: there was no filter applied and the current selection targets all endpoints on this platform":
      "참고: 필터가 적용되지 않아 현재 선택 항목은 이 플랫폼의 모든 엔드포인트를 대상으로 합니다",
    "Architecture": "아키텍처",
    "Collector ID": "수집기 ID",
    "Installation Package": "설치 패키지",
    "OS Version": "OS 버전",
    "Proxy": "프록시",
    "collector settings": "수집기 설정",
  },

  patterns: [],

  skip: [],
};
