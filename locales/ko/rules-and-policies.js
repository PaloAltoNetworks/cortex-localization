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

const dictionaryRulesAndPolicies = {
  exact: {
    "Auto resolve": "자동 해결",
    "AI and Machine Learning": "AI 및 머신 러닝",
    "Validate Code": "코드 검증",
    "Cloud Type:": "클라우드 유형:",
    "Issues Count:": "이슈 수:",
    "Findings Count:": "발견 사항 수:",
    "Cases Count:": "케이스 수:",
    "Asset Types:": "자산 유형:",
    "Mode:": "모드:",
    "Remove the krbtgt service from the account's msDS-AllowedToDelegateTo attribute immediately. In Active Directory Users and Computers, open the account properties, go to the Delegation tab, and remove any entries referencing the krbtgt service. There is no legitimate reason for an account to have constrained delegation to krbtgt. Investigate whether this configuration was set maliciously as it could indicate a persistence mechanism.":
      "계정의 msDS-AllowedToDelegateTo 특성에서 krbtgt 서비스를 즉시 제거하세요. Active Directory 사용자 및 컴퓨터에서 계정 속성을 열고 [위임] 탭으로 이동한 다음 krbtgt 서비스를 참조하는 항목을 모두 제거하세요. 계정이 krbtgt에 대한 제한된 위임을 가질 정당한 이유는 없습니다. 이 구성이 악의적으로 설정되었는지 조사하세요. 지속성 메커니즘을 나타낼 수 있습니다.",
    "No Compliance Controls Assigned": "할당된 규정 준수 컨트롤 없음",
    "This rule currently has no assigned compliance controls. To assign controls, edit the rule and add the required compliance controls.":
      "이 규칙에는 현재 할당된 규정 준수 컨트롤이 없습니다. 컨트롤을 할당하려면 규칙을 편집하여 필요한 규정 준수 컨트롤을 추가하세요.",
    "Certain dynamic filter conditions such as asset fields, are calculated at runtime and not displayed as a part of the policy preview.":
      "자산 필드와 같은 일부 동적 필터 조건은 런타임에 계산되므로 정책 미리 보기에 표시되지 않습니다.",
    "Enter CVE or vulnerability IDs here...": "여기에 CVE 또는 취약점 ID를 입력하세요...",
    "Enter an Asset Group name here...": "여기에 자산 그룹 이름을 입력하세요...",
    "Enter an asset name or Asset ID here...": "여기에 자산 이름 또는 자산 ID를 입력하세요...",
    "Start typing to search...": "검색하려면 입력을 시작하세요...",
    "Ignored CVEs and Assets": "무시된 CVE 및 자산",
    "Ignored Items": "무시된 항목",
    "Ignored Vulnerabilities": "무시된 취약점",
    "Ignored Asset Groups": "무시된 자산 그룹",
    "Ignored Assets": "무시된 자산",
    "Preview": "미리 보기",
    "Select CVEs, Asset Groups, and Assets to ignore from vulnerability policy evaluation.":
      "취약점 정책 평가에서 무시할 CVE, 자산 그룹 및 자산을 선택하세요.",
    "No Issues will be generated for the following CVEs and vulnerabilities. Findings for these CVEs and vulnerabilities will still appear in the Vulnerability Findings view and will still be counted in dashboards based on Findings data.":
      "다음 CVE 및 취약점에 대해서는 이슈가 생성되지 않습니다. 이러한 CVE 및 취약점의 발견 사항은 계속 Vulnerability Findings 보기에 표시되며, 발견 사항 데이터 기반 대시보드에서도 계속 집계됩니다.",
    "Vulnerability IDs": "취약점 ID",
    "No Issues will be generated for the following Asset Groups. Findings for these Asset Groups will still appear in the Vulnerability Findings view and will still be counted in dashboards based on Findings data.":
      "다음 자산 그룹에 대해서는 이슈가 생성되지 않습니다. 이러한 자산 그룹의 발견 사항은 계속 Vulnerability Findings 보기에 표시되며, 발견 사항 데이터 기반 대시보드에서도 계속 집계됩니다.",
    "No Issues will be generated for the following Assets. Findings for these Assets will still appear in the Vulnerability Findings view and will still be counted in dashboards based on Findings data.":
      "다음 자산에 대해서는 이슈가 생성되지 않습니다. 이러한 자산의 발견 사항은 계속 Vulnerability Findings 보기에 표시되며, 발견 사항 데이터 기반 대시보드에서도 계속 집계됩니다.",
    "Vulnerability Policies - Prevention": "Vulnerability Policies - 방지",
    "Kubernetes Runtime Protection": "Kubernetes 런타임 보호",
    "These actions are available for Findings on Kubernetes clusters with Kubernetes Admission Controller activated.":
      "이 작업은 Kubernetes Admission Controller가 활성화된 Kubernetes 클러스터의 발견 사항에 사용할 수 있습니다.",
    "Learn how to increase coverage.": "적용 범위를 늘리는 방법을 알아보세요.",
    "Kubernetes Pod Actions": "Kubernetes Pod 작업",
    "Do nothing": "아무 작업 안 함",
    "Prevent new deployment requests": "새 배포 요청 방지",
    "Is Malicious": "악성 여부",
    "Used In Code": "코드에서 사용됨",
    "Used In Deploy": "배포에서 사용됨",
    "Used In Runtime": "런타임에서 사용됨",
    "Package Subtype": "패키지 하위 유형",
    "Organization impact": "조직 영향",
    "Show alternatives": "대안 표시",
    "Assets by software development stage": "소프트웨어 개발 단계별 자산",
    "Image Size": "이미지 크기",
    "Runtime Function": "런타임 함수",
    "Trust Score": "신뢰 점수",
    "Package Symbols": "패키지 심볼",
    "Package Author": "패키지 작성자",
    "Finding First Observed": "발견 사항 최초 관찰",
    "Framework/Language": "프레임워크/언어",
    "Policies Count": "정책 수",
    "Mapped Cloud Security Rule": "매핑된 클라우드 보안 규칙",
    "Created Date": "생성 날짜",
    "Suppressions": "억제",
    "Resource Types": "리소스 유형",
    "Is Enabled": "사용 여부",
    "Rule Impact": "규칙 영향",
    "Select Category": "카테고리 선택",
    "Add Rule Name": "규칙 이름 추가",
    "Mapped Runtime Rule": "매핑된 런타임 규칙",
    "Add label...": "레이블 추가...",
    "Select framework": "프레임워크 선택",
    "Select subcategory": "하위 카테고리 선택",
    "Set the general details for this rule": "이 규칙의 일반 세부 정보를 설정하세요",
    "Use Enter to apply a label": "Enter 키를 눌러 레이블 적용",
    "Enter a name for this rule": "이 규칙의 이름을 입력하세요",
    "Give this rule a brief description": "이 규칙에 대한 간단한 설명을 입력하세요",
    "Enter a remediation": "수정 조치 방법을 입력하세요",
    "Name is required": "이름은 필수입니다",
    "Description is required": "설명은 필수입니다",
    "Define the logic for your rule": "규칙의 로직을 정의하세요",
    "Back": "뒤로",
    "Generate Previerw": "미리 보기 생성",
    "No Preview": "미리 보기 없음",
    "To see potential matches, enter your query and click \"Generate Preview\".":
      "일치할 수 있는 결과를 보려면 쿼리를 입력하고 \"Generate Preview\"를 클릭하세요.",
    "Create Issue": "이슈 생성",
    "Generate Preview": "미리 보기 생성",
    "Rule name is required": "규칙 이름은 필수입니다",
    "Give this Rule a brief description...": "이 규칙에 대한 간단한 설명을 입력하세요...",
    "Select issue severity": "이슈 심각도 선택",
    "Enable Remediation": "수정 조치 사용",
    "(Optional)": "(선택 사항)",
    "Assign a Configuration Rule To Custom Compliance Controls": "사용자 지정 규정 준수 컨트롤에 구성 규칙 할당",
    "You can assign a configuration rule to one or more custom compliance controls to tailor compliance checks to your organization's needs.":
      "하나 이상의 사용자 지정 규정 준수 컨트롤에 구성 규칙을 할당하여 조직의 요구 사항에 맞게 규정 준수 검사를 조정할 수 있습니다.",
    "Add actions to take once a rule has been violated.": "규칙 위반 시 수행할 작업을 추가하세요.",
    "Compliance Controls (": "규정 준수 컨트롤 (",
    "Be Advised": "참고",
    "Switching modes will remove any unsaved edits. Continue?": "모드를 전환하면 저장되지 않은 편집 내용이 모두 제거됩니다. 계속하시겠습니까?",
    "Rule Logic": "규칙 로직",
    "Define logic for your rule": "규칙의 로직을 정의하세요",
    "Define the logic for your rule.": "규칙의 로직을 정의하세요.",
    "Simple Mode": "단순 모드",
    "Advanced Mode": "고급 모드",
    "instructions": "지침",
    "Define your rule's query. Be sure to follow the": "규칙의 쿼리를 정의하세요. 반드시 다음을 따르세요:",
    "Run query to populate values": "쿼리를 실행하여 값 채우기",
    "Query validation failed.": "쿼리 검증에 실패했습니다.",
    "Query validated successfully.": "쿼리가 성공적으로 검증되었습니다.",
    "Affected Asset Type:": "영향받는 자산 유형:",
    "The rule must end with a 'fields' stage.": "규칙은 'fields' 단계로 끝나야 합니다.",
    "Add details for this Config Rule": "이 Config Rule의 세부 정보 추가",
    "Add details for this Data Rule": "이 Data Rule의 세부 정보 추가",
    "Create Data Rule": "Data Rule 생성",
    "Add details for this Identity Rule": "이 Identity Rule의 세부 정보 추가",
    "Create Identity Rule": "Identity Rule 생성",
    "Create Network Exposure Rule": "Network Exposure Rule 생성",
    "Add details for this Network Exposure Rule": "이 Network Exposure Rule의 세부 정보 추가",
    "Add details for this AI Rule": "이 AI Rule의 세부 정보 추가",
    "Create AI Rule": "AI Rule 생성",
    "Create Attack Path (Legacy) Rule": "Attack Path (Legacy) Rule 생성",
    "Add details for this Attack Path (Legacy) Rule": "이 Attack Path (Legacy) Rule의 세부 정보 추가",
    "Enter a name for this Rule...": "이 규칙의 이름을 입력하세요...",
    "Base Images Rules": "베이스 이미지 규칙",
    "Create rules to automatically identify your base images": "베이스 이미지를 자동으로 식별하는 규칙을 생성하세요",
    "Match Count": "일치 수",
    "No base image rules yet": "아직 베이스 이미지 규칙이 없습니다",
    "Create Base Image Rule": "베이스 이미지 규칙 생성",
    "Edit Base Image Rule": "베이스 이미지 규칙 편집",
    // Verbatim from the product ("Operation system" — likely a typo for "Operating system" — kept as-is
    // to match the real DOM text).
    "Operation system": "운영 체제",
    "Define actions for when this rule is violated": "이 규칙이 위반될 때 수행할 작업을 정의하세요",
    "Disable Rule": "규칙 사용 중지",
    "Disabling rule will resolve the open issues matching the rule.":
      "규칙을 사용 중지하면 해당 규칙과 일치하는 열린 이슈가 해결됩니다.",
    "Delete Rule": "규칙 삭제",
    "The selected rule will be deleted. However, any issues previously generated by these rules will remain open until resolved.":
      "선택한 규칙이 삭제됩니다. 단, 이 규칙으로 이전에 생성된 이슈는 해결될 때까지 열린 상태로 유지됩니다.",
    "Run preview": "미리 보기 실행",
    "Preview your results": "결과 미리 보기",
    "Generate preview to see matches": "미리 보기를 생성하여 일치 항목 확인",
    "This rule will automatically apply to all current and future matches": "이 규칙은 현재 및 향후 모든 일치 항목에 자동으로 적용됩니다",
    "Enter registry": "레지스트리를 입력하세요",
    "Registry is required": "레지스트리는 필수입니다",
    "Enter repository": "리포지토리를 입력하세요",
    "Repository is required": "리포지토리는 필수입니다",
    "Delete Rule?": "규칙을 삭제하시겠습니까?",
    "The selected rule will be deleted. Are you sure you want to proceed?": "선택한 규칙이 삭제됩니다. 계속하시겠습니까?",
    "Based on your query results, the suggested asset-identifying fields appear here. Generated issues will be linked to asset identified by the selected field":
      "쿼리 결과를 기반으로 제안된 자산 식별 필드가 여기에 표시됩니다. 생성된 이슈는 선택한 필드로 식별된 자산에 연결됩니다",
    "The final 'fields' stage is missing the required 'asset_id' (or 'xdm.asset.id') field.":
      "마지막 'fields' 단계에 필수 'asset_id'(또는 'xdm.asset.id') 필드가 없습니다.",
    "The final 'fields' stage is missing the required 'asset_type_id' (or 'xdm.asset.type.id') field.":
      "마지막 'fields' 단계에 필수 'asset_type_id'(또는 'xdm.asset.type.id') 필드가 없습니다.",
    "Filter stage with xdm.asset.type.id is required": "xdm.asset.type.id가 포함된 filter 단계가 필요합니다",
    "Last evaluated": "마지막 평가 일시",
    "Detection Rules IDs": "탐지 규칙 ID",
    "Action Taken On Missing Information": "정보 누락 시 수행할 작업",
    "Policy name is required.": "정책 이름은 필수입니다.",
    "Add Policy name": "정책 이름 추가",
    "This policy name already exists.": "이 정책 이름은 이미 존재합니다.",
    "No rules selected yet": "아직 선택된 규칙이 없습니다",
    "Add rules": "규칙 추가",
    "Rule Remediation": "규칙 수정 조치",
    "User Rule Remediation": "사용자 규칙 수정 조치",
    "Add rules to policy": "정책에 규칙 추가",
    "Learn about the Prevent action's power, behavior, and prerequisites": "Prevent 작업의 기능, 동작 및 사전 요구 사항 알아보기",
    "Applicable assets": "적용 가능한 자산",
    "Available actions": "사용 가능한 작업",
    "Scope Selection Method": "범위 선택 방법",
    "Default Asset Scopes": "기본 자산 범위",
    "Assets Scope": "자산 범위",
    "All Cloud Workload Hosts (VM Instances)": "모든 클라우드 워크로드 호스트(VM 인스턴스)",
    "Open Asset Inventory": "자산 인벤토리 열기",
    "Asset types not listed above will not be evaluated.": "위에 나열되지 않은 자산 유형은 평가되지 않습니다.",
    "This selection applies the policy and its detection rules to": "이 선택 항목은 정책과 해당 탐지 규칙을 다음에 적용합니다:",
    "asset types available at": "자산 유형 중 다음에서 사용 가능한 항목:",
    "SDLC Stage.": "SDLC 단계.",
    "When Asset Groups are selected, this policy applies only to": "자산 그룹을 선택하면 이 정책은 다음에만 적용됩니다:",
    "Cloud Workload Container Images, Container Instances, Hosts (VM Instances), Serverless Functions or Kubernetes Workloads":
      "클라우드 워크로드 컨테이너 이미지, 컨테이너 인스턴스, 호스트(VM 인스턴스), 서버리스 함수 또는 Kubernetes 워크로드",
    "asset types in those groups that are available at the": "해당 그룹의 자산 유형 중 다음에서 사용 가능한 항목:",
    "Other asset types in the Asset Groups are not evaluated.": "자산 그룹의 기타 자산 유형은 평가되지 않습니다.",
    "Select an Action": "작업 선택",
    "Issue Severity": "이슈 심각도",
    "Add remediation guidance": "수정 조치 지침 추가",
    "Issues are automatically resolved when the finding is no longer applicable to the asset or when the affected asset is removed from the inventory.":
      "발견 사항이 더 이상 자산에 해당하지 않거나 영향받는 자산이 인벤토리에서 제거되면 이슈가 자동으로 해결됩니다.",
    "Preview Selection": "선택 항목 미리 보기",
    "Selected Asset Preview": "선택한 자산 미리 보기",
    "Add labels...": "레이블 추가...",
    "Maximum of 50 labels": "레이블 최대 50개",
    "Start Timestamp": "시작 타임스탬프",
    "End Timestamp": "종료 타임스탬프",
    "Last Modified By": "마지막 수정자",
    "Findings Count": "발견 사항 수",
    "Issues Count": "이슈 수",
    "Cases Count": "케이스 수",
    "Compliance Standards": "규정 준수 표준",
    "Last Execution Time": "마지막 실행 시간",
    "SaaS Pillar": "SaaS 영역",
    "All Matching Filter Criteria": "모든 필터 조건 일치",
    "From Rules List": "규칙 목록에서",
    "Select rules for this Policy": "이 정책의 규칙 선택",
    "Select which rules to be alerted on by using the options available below": "아래 옵션을 사용하여 경고를 받을 규칙을 선택하세요",
    "Add details for this Policy": "이 정책의 세부 정보 추가",
    "View selected": "선택 항목 보기",
    "Making this selection will likely create a large volume of issues. For a more relevant and high fidelity issues, use a filtered selection.":
      "이 항목을 선택하면 대량의 이슈가 생성될 수 있습니다. 관련성과 정확도가 더 높은 이슈를 얻으려면 필터링된 선택을 사용하세요.",
    "Select which scope to be alerted on by using the options available below": "아래 옵션을 사용하여 경고를 받을 범위를 선택하세요",
    "From Asset Groups": "자산 그룹에서",
    "Create a Policy for Issue creation": "이슈 생성용 정책 생성",
    "Create a Policy for Prevention": "방지용 정책 생성",
    "From Cloud Accounts": "클라우드 계정에서",
    "Define the detection rule by specifying the criteria to match relevant Malware findings. You can also add exclusion criteria to filter out any Malware findings that meet specific conditions you want to exclude from this policy.":
      "관련 멀웨어 발견 사항과 일치하는 조건을 지정하여 탐지 규칙을 정의하세요. 이 정책에서 제외하려는 특정 조건을 충족하는 멀웨어 발견 사항을 걸러내는 제외 조건을 추가할 수도 있습니다.",
    "Set a name and description for the policy.": "정책의 이름과 설명을 설정하세요.",
    "Enter a name for your policy": "정책 이름을 입력하세요",
    "Enter a description": "설명을 입력하세요",
    "CVE Publish Date": "CVE 게시일",
    "CVE Description": "CVE 설명",
    "Package PURL": "패키지 PURL",
    "Package File Creation Time": "패키지 파일 생성 시간",
    "Package Licenses": "패키지 라이선스",
    "Layer ID": "레이어 ID",
    "Image": "이미지",
    "Is derived": "파생 여부",
    "Image Name": "이미지 이름",
    "Volume Asset IDs": "볼륨 자산 ID",
    "Volume Path": "볼륨 경로",
    "Platform ID": "플랫폼 ID",
    "Vulnerability Source Asset ID": "취약점 소스 자산 ID",
    "Vulnerability Source Asset": "취약점 소스 자산",
    "Kubernetes Cluster Name": "Kubernetes 클러스터 이름",
    "Kubernetes Namespace Name": "Kubernetes 네임스페이스 이름",
    "AST Intrusion Level": "AST 침입 수준",
    "Affected Services": "영향받는 서비스",
    "Affected Service Versions": "영향받는 서비스 버전",
    "Authentication Status": "인증 상태",
    "AST Vulnerability Status": "AST 취약점 상태",
    "Create a query to select the Findings to take an action on": "작업을 수행할 발견 사항을 선택하는 쿼리를 생성하세요",
    "Create a query to select the Findings to take an action on.": "작업을 수행할 발견 사항을 선택하는 쿼리를 생성하세요.",
    "Limit the assets the policy applies to by setting a scope.": "범위를 설정하여 정책이 적용되는 자산을 제한하세요.",
    "Scope to Asset Groups": "자산 그룹으로 범위 지정",
    "Choose one or more Asset Groups if you want to limit this Policy to Findings from those specific Assets.":
      "이 정책을 특정 자산의 발견 사항으로 제한하려면 하나 이상의 자산 그룹을 선택하세요.",
    "Create new Asset Group": "새 자산 그룹 생성",
    "The selected actions will be executed automatically when a finding matches a policy.": "발견 사항이 정책과 일치하면 선택한 작업이 자동으로 실행됩니다.",
    "Global Actions": "전역 작업",
    "These actions are available for all Findings.": "이 작업은 모든 발견 사항에 사용할 수 있습니다.",
    "Set Issue Severity": "이슈 심각도 설정",
    "Create an Issue for each matching Finding.": "일치하는 발견 사항마다 이슈를 생성합니다.",
    "Ignore matching Findings, do not create Issues": "일치하는 발견 사항을 무시하고 이슈를 생성하지 않음",
    "Use Default CVE Severity": "기본 CVE 심각도 사용",
    "Last Triggered": "마지막 트리거 일시",
    "Related Detection Rules": "관련 탐지 규칙",
    "Is Custom": "사용자 지정 여부",
    "Asset Group IDs": "자산 그룹 ID",
    "Override Issue Severity": "이슈 심각도 재정의",
    "Is Editable": "편집 가능 여부",
    "Is Cloneable": "복제 가능 여부",
    "Suggestion ID": "제안 ID",
    "Triggers & Actions": "트리거 및 작업",
    "Application Security policies define how to respond to code, image, and misconfiguration findings. You can either block the risk (prevent) or create an issue for remediation (detect). Use them to enforce consistent, automated responses to risks before they reach production":
      "Application Security 정책은 코드, 이미지 및 잘못된 구성 발견 사항에 대응하는 방법을 정의합니다. 위험을 차단(방지)하거나 수정 조치를 위한 이슈를 생성(탐지)할 수 있습니다. 이를 사용하여 위험이 프로덕션에 도달하기 전에 일관되고 자동화된 대응을 적용하세요",
    "Code & Image scanners": "코드 및 이미지 스캐너",
    "Scans your code and images for security issues throughout the development lifecycle.":
      "개발 수명 주기 전반에 걸쳐 코드와 이미지의 보안 이슈를 스캔합니다.",
    "CI/CD configuration scanner": "CI/CD 구성 스캐너",
    "Scans your CI/CD and Version Control System (VCS) environments for insecure configurations.":
      "CI/CD 및 버전 관리 시스템(VCS) 환경에서 안전하지 않은 구성을 스캔합니다.",
    "Drift detection scanner": "드리프트 탐지 스캐너",
    "Specify the conditions define this policy. When you select multiple finding types, only common filters are available. To apply specific filters for each finding type, use the \"OR\" operator to create separate conditions groups.":
      "이 정책을 정의하는 조건을 지정하세요. 여러 발견 사항 유형을 선택하면 공통 필터만 사용할 수 있습니다. 발견 사항 유형별로 특정 필터를 적용하려면 \"OR\" 연산자를 사용하여 별도의 조건 그룹을 생성하세요.",
    "Finding Type": "발견 사항 유형",
    "Add filter": "필터 추가",
    "Add condition group": "조건 그룹 추가",
    "Shared": "공유됨",
    "Shared filters": "공유 필터",
    "Finding Category": "발견 사항 카테고리",
    "The category of detected security findings. A category can include multiple finding types.":
      "탐지된 보안 발견 사항의 카테고리입니다. 하나의 카테고리에 여러 발견 사항 유형이 포함될 수 있습니다.",
    "Code filters": "코드 필터",
    "Indicates whether a finding is part of the security technical debt or newly introduced. Backlog: Findings that existed before the Cortex scanner was first enabled or before a third-party scanner was first ingested for the repository. New: Findings detected afterward.":
      "발견 사항이 보안 기술 부채의 일부인지 새로 발생한 것인지 나타냅니다. Backlog: Cortex 스캐너가 처음 사용 설정되기 전 또는 리포지토리에 대해 서드 파티 스캐너 데이터가 처음 수집되기 전부터 존재하던 발견 사항. New: 그 이후에 탐지된 발견 사항.",
    "Filters findings by their assigned risk impact level to (e.g., Critical, High, Medium, or Low).":
      "할당된 위험 영향 수준(예: 심각, 높음, 중간, 낮음)으로 발견 사항을 필터링합니다.",
    "Respect Developer Suppression": "개발자 억제 준수",
    "AppSec Rule": "AppSec 규칙",
    "AppSec Rule Label": "AppSec 규칙 레이블",
    "AppSec Rule Category": "AppSec 규칙 카테고리",
    "Has An Automated Fix": "자동 수정 있음",
    "Iac Tag": "IaC 태그",
    "Compliance Controls": "규정 준수 컨트롤",
    "Specific security controls related to the finding within a compliance standard (e.g., \"Encryption at Rest\"":
      "규정 준수 표준 내에서 발견 사항과 관련된 특정 보안 컨트롤입니다(예: \"Encryption at Rest\"",
    "Filters findings based on specific regulatory frameworks like PCI-DSS, SOC2, or HIPAA.":
      "PCI-DSS, SOC2, HIPAA 등 특정 규제 프레임워크를 기준으로 발견 사항을 필터링합니다.",
    "Filters Infrastructure-as-Code (IaC) resources based on metadata tags (e.g., Environment: Production, Owner: DevOps).":
      "메타데이터 태그(예: Environment: Production, Owner: DevOps)를 기준으로 Infrastructure-as-Code(IaC) 리소스를 필터링합니다.",
    "Identifies findings that can be resolved automatically via a generated Pull Request or an automated patch.":
      "생성된 풀 리퀘스트 또는 자동 패치를 통해 자동으로 해결할 수 있는 발견 사항을 식별합니다.",
    "Secret Validity": "시크릿 유효성",
    "Filters based on whether the detected secret is still active and usable by an attacker (e.g., Valid, Invalid, No Validation, or Unavailable).":
      "탐지된 시크릿이 여전히 활성 상태이고 공격자가 사용할 수 있는지 여부(예: Valid, Invalid, No Validation, Unavailable)를 기준으로 필터링합니다.",
    "Repository File Path": "리포지토리 파일 경로",
    "Filters based on the specific location of a file within your source code repository.":
      "소스 코드 리포지토리 내 파일의 특정 위치를 기준으로 필터링합니다.",
    "Image filters": "이미지 필터",
    "Secret Type": "시크릿 유형",
    "Filters findings by the category of the exposed secret or the service it belongs to (e.g., AWS Access Key, Stripe API Token, SSH Private Key, or Password).":
      "노출된 시크릿의 카테고리 또는 해당 시크릿이 속한 서비스(예: AWS Access Key, Stripe API Token, SSH Private Key, Password)로 발견 사항을 필터링합니다.",
    "Targets specific files or directories located within a container image filesystem.":
      "컨테이너 이미지 파일 시스템 내의 특정 파일 또는 디렉터리를 대상으로 합니다.",
    "Filters by the specific name of a file discovered in a scan (e.g., id_rsa, passwd, or config.yaml).":
      "스캔에서 발견된 파일의 특정 이름(예: id_rsa, passwd, config.yaml)으로 필터링합니다.",
    "File Size": "파일 크기",
    "Filters based on the total data size of the file (e.g., files larger than 100MB or exactly 0KB).":
      "파일의 전체 데이터 크기(예: 100MB보다 큰 파일 또는 정확히 0KB인 파일)를 기준으로 필터링합니다.",
    "File Line": "파일 행",
    "Identifies the specific line number within a file where the finding was detected (e.g., line 42).":
      "발견 사항이 있는 파일 내의 특정 행 번호(예: 42행)를 식별합니다.",
    "File Owner Name": "파일 소유자 이름",
    "Filters by the username of the account that owns the file on the system (e.g., root, admin, or www-data).":
      "시스템에서 파일을 소유한 계정의 사용자 이름(예: root, admin, www-data)으로 필터링합니다.",
    "File Group Name": "파일 그룹 이름",
    "Filters by the name of the primary group assigned to the file (e.g., sudo, docker, or users).":
      "파일에 할당된 기본 그룹의 이름(예: sudo, docker, users)으로 필터링합니다.",
    "File Group ID": "파일 그룹 ID",
    "Filters by the numeric Group ID (GID) assigned to the file (e.g., GID 1001).":
      "파일에 할당된 숫자 그룹 ID(GID)(예: GID 1001)로 필터링합니다.",
    "File Permissions - owner": "파일 권한 - 소유자",
    "Filters by the specific access rights granted to the file's owner (e.g., rwx, rw, or r).":
      "파일 소유자에게 부여된 특정 액세스 권한(예: rwx, rw, r)으로 필터링합니다.",
    "File Permissions - group": "파일 권한 - 그룹",
    "Filters by the access rights granted to members of the file's assigned group (e.g., r, rw or rwx).":
      "파일에 할당된 그룹의 구성원에게 부여된 액세스 권한(예: r, rw, rwx)으로 필터링합니다.",
    "File Permissions - others": "파일 권한 - 기타",
    "Filters by \"World\" permissions—access granted to any user on the system (e.g., checking for rw to find publicly writable files).":
      "\"World\" 권한(시스템의 모든 사용자에게 부여된 액세스 권한)으로 필터링합니다(예: 누구나 쓸 수 있는 파일을 찾기 위해 rw 확인).",
    "File Owner ID": "파일 소유자 ID",
    "Filters by the numeric User ID (UID) of the file owner (e.g., UID 0 for root).":
      "파일 소유자의 숫자 사용자 ID(UID)(예: root의 경우 UID 0)로 필터링합니다.",
    "Filters for vulnerabilities with known, documented exploits available in the wild (e.g., CISA KEV list).":
      "실제로 악용이 확인되고 문서화된 익스플로잇이 존재하는 취약점으로 필터링합니다(예: CISA KEV 목록).",
    "CVE ID": "CVE ID",
    "Filters by the unique Common Vulnerabilities and Exposures identifier associated with the finding (e.g., CVE-2021-44228).":
      "발견 사항과 연결된 고유한 Common Vulnerabilities and Exposures 식별자(예: CVE-2021-44228)로 필터링합니다.",
    "Filters by the Common Vulnerability Scoring System impact level, often derived from a numerical score (e.g., Critical, High, Medium, or Low).":
      "대개 숫자 점수에서 산출되는 Common Vulnerability Scoring System 영향 수준(예: Critical, High, Medium, Low)으로 필터링합니다.",
    "Filters findings based on their numerical CVSS score, typically ranging from 0.0 to 10.0 (e.g., values greater than or equal to 7.5).":
      "일반적으로 0.0~10.0 범위인 숫자 CVSS 점수(예: 7.5 이상인 값)를 기준으로 발견 사항을 필터링합니다.",
    "Filters based on the Exploit Prediction Scoring System probability score, which estimates the likelihood of a vulnerability being exploited in the next 30 days (e.g., scores higher than 0.1).":
      "향후 30일 이내에 취약점이 악용될 가능성을 추정하는 Exploit Prediction Scoring System 확률 점수(예: 0.1보다 높은 점수)를 기준으로 필터링합니다.",
    "Has A Fix": "수정 사항 있음",
    "Filter findings with a documented resolution or patch available.": "문서화된 해결 방법 또는 패치를 사용할 수 있는 발견 사항을 필터링합니다.",
    "Is Kev": "KEV 여부",
    "Filters for vulnerabilities listed in the CISA Known Exploited Vulnerabilities catalog, which are confirmed to be actively exploited in the wild.":
      "실제로 활발하게 악용되는 것으로 확인된, CISA Known Exploited Vulnerabilities 카탈로그에 등재된 취약점으로 필터링합니다.",
    "CVE Fix Available Date": "CVE 수정 사용 가능 날짜",
    "Filters based on the date a fix or patch was first released for the vulnerability (e.g., fixes released within the last 30 days).":
      "해당 취약점에 대한 수정 또는 패치가 처음 릴리스된 날짜(예: 최근 30일 이내에 릴리스된 수정)를 기준으로 필터링합니다.",
    "Package Version": "패키지 버전",
    "Targets specific versions or ranges of a software package (e.g., 1.2.3 or <2.0.0).":
      "소프트웨어 패키지의 특정 버전 또는 버전 범위(예: 1.2.3 또는 <2.0.0)를 대상으로 합니다.",
    "Filters by the name of the specific library or software component (e.g., openssl, lodash, or log4j-core).":
      "특정 라이브러리 또는 소프트웨어 구성 요소의 이름(예: openssl, lodash, log4j-core)으로 필터링합니다.",
    "Filters based on the date the vulnerability was officially added to the CVE registry.":
      "해당 취약점이 CVE 레지스트리에 공식적으로 추가된 날짜를 기준으로 필터링합니다.",
    "Targets specific characteristics of a vulnerability's impact or ease of use (e.g., Remote Execution, DoS - High, or Attack Complexity: Low).":
      "취약점의 영향 또는 악용 용이성에 관한 특정 특성(예: Remote Execution, DoS - High, Attack Complexity: Low)을 대상으로 합니다.",
    "Filters findings by searching for specific keywords or technical details within the official vulnerability summary (e.g., searching for \"buffer overflow,\" \"zero-day,\" or \"unauthenticated access\").":
      "공식 취약점 요약에서 특정 키워드나 기술적 세부 정보(예: \"buffer overflow\", \"zero-day\", \"unauthenticated access\" 검색)를 검색하여 발견 사항을 필터링합니다.",
    "Identifies the specific version(s) of a package or software where the vulnerability has been patched (e.g., 1.2.4, 2.0.1).":
      "해당 취약점이 패치된 패키지 또는 소프트웨어의 특정 버전(예: 1.2.4, 2.0.1)을 식별합니다.",
    "Grace Period": "유예 기간",
    "The number of days a finding is allowed to exist before it begins blocking PRs or builds. This is calculated from the Fix Date (for fixable issues) or the Publish Date (if no fix is available).":
      "발견 사항이 PR 또는 빌드를 차단하기 시작하기 전까지 허용되는 일수입니다. 수정 가능한 이슈는 수정 날짜부터, 수정을 사용할 수 없는 경우에는 게시 날짜부터 계산됩니다.",
    "Package Popularity": "패키지 인기도",
    "Identifies packages based on their adoption metrics (e.g., GitHub stars, download counts). Low popularity can often signal higher supply chain risk.":
      "채택 지표(예: GitHub 스타 수, 다운로드 수)를 기준으로 패키지를 식별합니다. 인기도가 낮으면 공급망 위험이 높다는 신호일 수 있습니다.",
    "Package Deprecated": "패키지 사용 중단됨",
    "Filters for packages that have been officially marked as \"deprecated\" or \"end-of-life\" by their maintainers":
      "관리자가 공식적으로 \"deprecated(사용 중단)\" 또는 \"end-of-life(지원 종료)\"로 표시한 패키지로 필터링합니다",
    "Package Maintained": "패키지 유지 관리 상태",
    "Filters based on the activity level of the package's repository, such as the frequency of recent commits or bug fixes":
      "최근 커밋이나 버그 수정 빈도 등 패키지 리포지토리의 활동 수준을 기준으로 필터링합니다",
    "Evaluates the long-term viability of a package based on community health, update frequency, and maintenance history":
      "커뮤니티 상태, 업데이트 빈도, 유지 관리 이력을 기준으로 패키지의 장기적인 지속 가능성을 평가합니다",
    "Package Dependency": "패키지 종속성",
    "Allows you to filter by the specific relationship of a package—whether it is a direct dependency or a transitive (indirect) one":
      "패키지의 구체적인 관계(직접 종속성인지 전이적(간접) 종속성인지)로 필터링할 수 있습니다",
    "Is AI/ML": "AI/ML 여부",
    "Identifies libraries and frameworks specifically associated with Artificial Intelligence and Machine Learning (e.g., PyTorch, TensorFlow).":
      "인공지능 및 머신러닝과 특별히 관련된 라이브러리와 프레임워크(예: PyTorch, TensorFlow)를 식별합니다.",
    "Affected Software": "영향받는 소프트웨어",
    "Filters findings based on the specific software components, applications, or libraries impacted by a vulnerability (e.g., OpenSSL)":
      "취약점의 영향을 받는 특정 소프트웨어 구성 요소, 애플리케이션 또는 라이브러리(예: OpenSSL)를 기준으로 발견 사항을 필터링합니다",
    "A boolean (True/False) indicator that identifies whether a vulnerability was inherited from the base image or introduced by the application layers (e.g., True means the flaw exists in the parent image, such as node:alpine or ubuntu:latest).":
      "취약점이 기본 이미지에서 상속되었는지 애플리케이션 레이어에서 도입되었는지를 나타내는 부울(True/False) 표시기입니다(예: True는 node:alpine 또는 ubuntu:latest 같은 상위 이미지에 결함이 있음을 의미합니다).",
    "Filters findings based on the specific filesystem layer of a container image, identified by its unique SHA-256 hash.":
      "고유한 SHA-256 해시로 식별되는 컨테이너 이미지의 특정 파일 시스템 레이어를 기준으로 발견 사항을 필터링합니다.",
    "The broad name of the OS (e.g., Linux, Windows).": "OS의 일반적인 이름입니다(예: Linux, Windows).",
    "The specific flavor of the OS (e.g., Ubuntu, RedHat, Debian).": "OS의 구체적인 종류입니다(예: Ubuntu, RedHat, Debian).",
    "The specific version or \"point release\" of the distribution (e.g., 22.04 or 8.5).":
      "배포판의 구체적인 버전 또는 \"포인트 릴리스\"입니다(예: 22.04 또는 8.5).",
    "Filters based on when the package file was first generated or built.": "패키지 파일이 처음 생성되거나 빌드된 시점을 기준으로 필터링합니다.",
    "Groups OS versions by their common ancestry (e.g., Debian-based, RHEL-based).":
      "공통 계보(예: Debian 기반, RHEL 기반)에 따라 OS 버전을 그룹화합니다.",
    "Filters by the specific legal license assigned to a package (e.g., MIT, Apache 2.0).":
      "패키지에 할당된 특정 라이선스(예: MIT, Apache 2.0)로 필터링합니다.",
    "Filters by the Package URL (PURL), a standardized way to identify packages across different ecosystems (e.g., pkg:npm/lodash@4.17.21).":
      "여러 에코시스템에서 패키지를 식별하는 표준화된 방법인 Package URL(PURL)(예: pkg:npm/lodash@4.17.21)로 필터링합니다.",
    "The ecosystem the package belongs to (e.g., npm, PyPI, Maven, Go, or OS-level packages).":
      "패키지가 속한 에코시스템입니다(예: npm, PyPI, Maven, Go 또는 OS 수준 패키지).",
    "Filters by the specific underlying hardware or cloud architecture (e.g., x86_64, arm64).":
      "기반이 되는 특정 하드웨어 또는 클라우드 아키텍처(예: x86_64, arm64)로 필터링합니다.",
    "Image Provider": "이미지 공급자",
    "Identifies the source or registry where the package was retrieved (e.g., Docker Hub, JFrog Artifactory, or AWS ECR).":
      "패키지를 가져온 소스 또는 레지스트리(예: Docker Hub, JFrog Artifactory, AWS ECR)를 식별합니다.",
    "Filters by the action required to resolve a vulnerability": "취약점을 해결하는 데 필요한 작업으로 필터링합니다",
    "Filters by the unique identifier for a specific category of finding (finding type id)":
      "특정 발견 사항 범주의 고유 식별자(finding type id)로 필터링합니다",
    "License Type": "라이선스 유형",
    "Filters by the specific name of the legal license assigned to a package (e.g., MPL-2.0, MS-RL, or Sendmail-8.23).":
      "패키지에 할당된 특정 라이선스 이름(예: MPL-2.0, MS-RL, Sendmail-8.23)으로 필터링합니다.",
    "License Category": "라이선스 범주",
    "Groups packages by their legal risk or permission category (e.g., Non permissive, Strong copyleft, Weak copyleft).":
      "법적 위험 또는 허용 범주(예: Non permissive, Strong copyleft, Weak copyleft)에 따라 패키지를 그룹화합니다.",
    "Maintained": "유지 관리 여부",
    "Popularity": "인기도",
    "Filters by the specific Common Weakness Enumeration identifier assigned to a software flaw (e.g., CWE-79 for Cross-Site Scripting or CWE-89 for SQL Injection).":
      "소프트웨어 결함에 할당된 특정 Common Weakness Enumeration 식별자(예: 크로스 사이트 스크립팅의 CWE-79, SQL 인젝션의 CWE-89)로 필터링합니다.",
    "Language": "언어",
    "Filters findings based on the programming language of the source code where the issue was detected (e.g., Java, Python, Go, or JavaScript).":
      "이슈가 탐지된 소스 코드의 프로그래밍 언어(예: Java, Python, Go, JavaScript)를 기준으로 발견 사항을 필터링합니다.",
    "OWASP Category": "OWASP 범주",
    "Maps findings to the \"Top 10\" web application security risks defined by the Open Web Application Security Project (e.g., A01:2021-Broken Access Control).":
      "발견 사항을 Open Web Application Security Project가 정의한 웹 애플리케이션 보안 위험 \"Top 10\"(예: A01:2021-Broken Access Control)에 매핑합니다.",
    "Identifies the origin of the data or the specific tool that reported the finding (e.g., semgrep, checkmarx or other specific third-party security integration).":
      "데이터의 출처 또는 발견 사항을 보고한 특정 도구(예: semgrep, checkmarx 또는 기타 특정 타사 보안 통합)를 식별합니다.",
    "Filters findings based on the specific scanning engine or technique used to identify them":
      "발견 사항을 식별하는 데 사용된 특정 스캔 엔진 또는 기법을 기준으로 발견 사항을 필터링합니다",
    "File SHA256": "파일 SHA256",
    "Create asset groups": "자산 그룹 생성",
    "Build images do not support application-related filters.": "빌드 이미지는 애플리케이션 관련 필터를 지원하지 않습니다.",
    "Select either a predefined asset group or apply dynamic filters to target relevant assets. If no selection is made, all assets within your granted scope are included. The policy scope is determined by your SBAC permissions at the time the policy is saved (creation or update). Changes to your SBAC do not automatically modify existing policies.":
      "사전 정의된 자산 그룹을 선택하거나 동적 필터를 적용하여 관련 자산을 대상으로 지정하세요. 아무것도 선택하지 않으면 부여된 범위 내의 모든 자산이 포함됩니다. 정책 범위는 정책이 저장되는 시점(생성 또는 업데이트)의 SBAC 권한에 따라 결정됩니다. SBAC가 변경되어도 기존 정책이 자동으로 수정되지는 않습니다.",
    "Application Business Criticality": "애플리케이션 비즈니스 중요도",
    "Application Business Owner": "애플리케이션 비즈니스 소유자",
    "Image Names": "이미지 이름",
    "Source Branch": "소스 브랜치",
    "Repository Id": "리포지토리 ID",
    "Is Public Repository": "공개 리포지토리 여부",
    "Has Deployed Assets": "배포된 자산 있음",
    "Has Internet-exposed deployed assets": "인터넷에 노출된 배포 자산 있음",
    "Has deployed assets with Access to sensitive data": "민감한 데이터에 액세스할 수 있는 배포 자산 있음",
    "Has deployed assets with privileged capabilities": "권한 있는 기능을 가진 배포 자산 있음",
    "Image Architecture": "이미지 아키텍처",
    "Organization URL": "조직 URL",
    "Automated security scanning that runs every 12 hours or on manual request, according to the repository scan configuration.":
      "리포지토리 스캔 구성에 따라 12시간마다 또는 수동 요청 시 실행되는 자동 보안 스캔입니다.",
    "Block CI": "CI 차단",
    "Block PR": "PR 차단",
    "PR Comment": "PR 댓글",
    "Registry Image Scan": "레지스트리 이미지 스캔",
    "Report CI": "CI 보고",
    "Security scanning of container images in the registry.": "레지스트리에 있는 컨테이너 이미지의 보안 스캔입니다.",
    "Security scans triggered during the CI pipeline after a container image is built from code.":
      "코드에서 컨테이너 이미지가 빌드된 후 CI 파이프라인 중에 트리거되는 보안 스캔입니다.",
    "Security scans triggered during the CI pipeline to evaluate source code.":
      "소스 코드를 평가하기 위해 CI 파이프라인 중에 트리거되는 보안 스캔입니다.",
    "Security scans triggered when a pull request or merge request is created or updated in your version control system.":
      "버전 관리 시스템에서 풀 리퀘스트 또는 머지 리퀘스트가 생성되거나 업데이트될 때 트리거되는 보안 스캔입니다.",
    "Select the triggers that enforce this policy. For each trigger, select at least one action to take when the conditions and scope are met.":
      "이 정책을 적용할 트리거를 선택하세요. 각 트리거에 대해 조건과 범위가 충족될 때 수행할 작업을 하나 이상 선택하세요.",
    "Your policy is ready. Review the details and click Done to enable it.": "정책이 준비되었습니다. 세부 정보를 검토하고 \"완료\"를 클릭하여 사용 설정하세요.",
    "Application Security Policy": "Application Security 정책",
    "Code & Image Scanner policy": "코드 및 이미지 스캐너 정책",
    "Important": "중요",
    "Override severity": "심각도 재정의",
    "Keep finding's severity": "발견 사항의 심각도 유지",
    "every 12 hours": "12시간마다",
    "Based on your coverage and findings, we recommend the following prevention policies. You can apply them as suggested, review and edit them using View details, or dismiss a recommendation. If dismissed, a new recommendation may appear.":
      "적용 범위와 발견 사항을 바탕으로 다음 방지 정책을 권장합니다. 제안된 대로 적용하거나, \"세부 정보 보기\"에서 검토 및 편집하거나, 권장 사항을 해제할 수 있습니다. 해제하면 새 권장 사항이 표시될 수 있습니다.",
    "Dismiss": "해제",
    "View Assets >": "자산 보기 >",
    // The body text AND title of each recommendation card (previously registered here — titles like
    // "Block KEV vulnerabilities", and the body as fixed exact-match/pattern entries) have been removed
    // from this dictionary file: content.js now excludes both
    // cas-recommendations-panel p[ucardcontent] and cas-recommendations-panel u-card-title from the
    // fixed dictionary and makes them eligible for AI (dynamic) translation instead, so a title without
    // a fixed-dictionary entry doesn't stay in English while the body is translated.
    "Select severity": "심각도 선택",
    "Show rule definition": "규칙 정의 표시",
    "Rule definition": "규칙 정의",
    "Rule settings": "규칙 설정",
    "Select scanner": "스캐너 선택",
    "Agentless disk-scan": "에이전트리스 디스크 스캔",
    "Scan storage snapshots for risks without requiring a resident agent": "상주 에이전트 없이 스토리지 스냅샷의 위험을 스캔합니다",
    "Scan cluster resources and configurations for compliance and security risks via the Kubernetes API":
      "Kubernetes API를 통해 클러스터 리소스와 구성에서 규정 준수 및 보안 위험을 스캔합니다",
    "XDR agent": "XDR 에이전트",
    "Offering a tailored approach to compliance validation by executing user-defined Python scripts":
      "사용자 정의 Python 스크립트를 실행하여 규정 준수 검증에 맞춤화된 접근 방식을 제공합니다",
    "Refresh Needed": "새로 고침 필요",
    "The page might be outdated or the session is expired": "페이지가 오래되었거나 세션이 만료되었을 수 있습니다",
    "Select the scanner type to execute the custom detection rule and its associated script":
      "사용자 지정 탐지 규칙과 관련 스크립트를 실행할 스캐너 유형을 선택하세요",
    "Select operating system": "운영 체제 선택",
    "Input file(s) path": "입력 파일 경로",
    "Input file(s) path is required": "입력 파일 경로는 필수입니다",
    "Add remediation steps here": "여기에 수정 조치 단계 추가",
    "Severity is required": "심각도는 필수입니다",
    "Kubernetes Resources is required": "Kubernetes 리소스는 필수입니다",
    "Select Kubernetes Resources": "Kubernetes 리소스 선택",
    "Review custom code execution agreement": "사용자 지정 코드 실행 동의서 검토",
    "You understand and agree that the Python scripts you provided for this \"Custom Code Execution\" capability will be executed in your cloud environment(s). By clicking \"I agree\", you acknowledge and agree to the following terms and conditions:":
      "이 \"Custom Code Execution\" 기능을 위해 제공한 Python 스크립트가 고객의 클라우드 환경에서 실행된다는 것을 이해하고 이에 동의합니다. \"I agree\"를 클릭하면 다음 이용 약관을 인정하고 이에 동의하게 됩니다:",
    "This capability is solely for the purpose of enabling you to define the compliance check rules for your cloud environment(s). Any other purposes are expressly prohibited.":
      "이 기능은 고객이 클라우드 환경에 대한 규정 준수 검사 규칙을 정의할 수 있도록 하는 목적으로만 제공됩니다. 그 밖의 목적으로 사용하는 것은 명시적으로 금지됩니다.",
    "Any actions involving": "고객의 클라우드 환경에 대해 다음 작업을 수행하는 것은 엄격히 금지됩니다:",
    "WRITE, MODIFY": "WRITE, MODIFY",
    ", or": ", 또는",
    "operations of your cloud environment(s) are strictly prohibited. It is your responsibility to ensure that your custom Python scripts only perform read-only operations of your cloud environment(s) explicitly for compliance check purposes.":
      ". 사용자 지정 Python 스크립트가 규정 준수 검사 목적으로만 클라우드 환경에 대해 읽기 전용 작업을 수행하도록 보장하는 것은 고객의 책임입니다.",
    "You are solely responsible for the quality, content, use, and execution results of your Python script. You assume all risks and liabilities arising from executing your Python script(s), including any potential errors, damages, or consequences resulting from its use.":
      "고객은 Python 스크립트의 품질, 내용, 사용 및 실행 결과에 대해 전적으로 책임을 집니다. 고객은 Python 스크립트 실행으로 인해 발생하는 모든 위험과 책임(사용으로 인한 잠재적 오류, 손해 또는 결과 포함)을 부담합니다.",
    "I agree": "동의함",
    "Custom code execution approved": "사용자 지정 코드 실행이 승인됨",
    "View agreement": "동의서 보기",
    "Attack Path is now powered by the Graph engine.": "이제 Attack Path가 Graph 엔진으로 구동됩니다.",
    "Same concept, more powerful. Existing": "개념은 같지만 더 강력해졌습니다. 기존",
    "rules continue to work and can still be created.": "규칙은 계속 작동하며 새로 만들 수도 있습니다.",
    "Graph rules leverage graph queries to monitor your environment for complex attack paths and potential breach paths":
      "Graph 규칙은 그래프 쿼리를 활용하여 복잡한 공격 경로와 잠재적 침해 경로가 있는지 환경을 모니터링합니다",
    "Configuration rules monitor your resource configurations for potential policy violations":
      "Configuration 규칙은 잠재적인 정책 위반이 있는지 리소스 구성을 모니터링합니다",
    "Data rules protect against malware and enable data classification": "Data 규칙은 멀웨어로부터 보호하고 데이터 분류를 지원합니다",
    "Identity rules monitor the identities in your cloud environment for excess-or-unused permissions":
      "Identity 규칙은 클라우드 환경의 ID에 과도하거나 사용되지 않는 권한이 있는지 모니터링합니다",
    "Network exposure rules detect assets exposed to the Internet": "Network exposure 규칙은 인터넷에 노출된 자산을 탐지합니다",
    "AI rules monitor your AI ecosystem for risks and misconfigurations": "AI 규칙은 AI 에코시스템에 위험이나 잘못된 구성이 있는지 모니터링합니다",
    "Attack path detection using the previous rule engine. We recommend Graph for new rules":
      "이전 규칙 엔진을 사용한 공격 경로 탐지입니다. 새 규칙에는 Graph를 권장합니다",
    "Define the rule (Rego)": "규칙 정의(Rego)",
    "For more information about the syntax": "구문에 대한 자세한 내용은",
    "read here": "여기를 참조하세요",
    "Assign compliance controls": "규정 준수 제어 할당",
    "You can assign a rule to one or more custom compliance controls to tailor compliance checks to your organization's needs.":
      "조직의 요구 사항에 맞게 규정 준수 검사를 조정하기 위해 하나 이상의 사용자 지정 규정 준수 제어에 규칙을 할당할 수 있습니다.",
    "Add controls": "제어 추가",
    "Rule settings → Assign controls": "규칙 설정 → 제어 할당",
    "Apply selection": "선택 항목 적용",
    "Critical severity": "심각 심각도",
    "High severity": "높음 심각도",
    "Medium severity": "중간 심각도",
    "Low severity": "낮음 심각도",
    "(Critical severity)": "(심각 심각도)",
    "(High severity)": "(높음 심각도)",
    "(Medium severity)": "(중간 심각도)",
    "(Low severity)": "(낮음 심각도)",
    "(Keep finding's severity)": "(발견 사항의 심각도 유지)",
    "(every 12 hours)": "(12시간마다)",
    "Use default severity": "기본 심각도 사용",
    "Third-party scanners can create issues only. They cannot perform blocking actions.":
      "타사 스캐너는 이슈 생성만 할 수 있습니다. 차단 작업은 수행할 수 없습니다.",
    "Filters findings by the file's unique cryptographic hash (e.g., searching for a specific infected binary or verifying file integrity across images).":
      "파일의 고유한 암호화 해시(예: 감염된 특정 바이너리 검색 또는 이미지 간 파일 무결성 확인)로 발견 사항을 필터링합니다.",
    "Malware Verdict": "멀웨어 판정",
    "Malware Verdict indicates whether detected software is confirmed malicious (Malware) or potentially unwanted and risky (Grayware).":
      "멀웨어 판정은 탐지된 소프트웨어가 악성으로 확인되었는지(Malware), 아니면 잠재적으로 원치 않고 위험한 소프트웨어인지(Grayware)를 나타냅니다.",
    "Filters by a specific, unique finding identifier": "특정 고유 발견 사항 식별자로 필터링합니다",
    "Determines whether findings suppressed by developers are considered during policy evaluation. Yes: Suppressed findings are excluded from policy evaluation. No: All findings are evaluated by the policy, including developer-suppressed ones.":
      "개발자가 억제한 발견 사항을 정책 평가 시 고려할지 여부를 결정합니다. 예: 억제된 발견 사항은 정책 평가에서 제외됩니다. 아니요: 개발자가 억제한 발견 사항을 포함한 모든 발견 사항이 정책에 따라 평가됩니다.",
    "Filters findings generated by a specific AppSec detection rule.": "특정 AppSec 탐지 규칙에서 생성된 발견 사항을 필터링합니다.",
    "Could not parse detection rule": "탐지 규칙을 구문 분석할 수 없습니다",
    "Filters findings based on labels attached to the matched AppSec rules, allowing you to filter and select multiple rules at once.":
      "일치하는 AppSec 규칙에 연결된 레이블을 기준으로 발견 사항을 필터링하여 여러 규칙을 한 번에 필터링하고 선택할 수 있습니다.",
    "Filters based on the category of findings generated by the rule.": "규칙에서 생성된 발견 사항의 범주를 기준으로 필터링합니다.",
    "Scans your cloud environments to detect configuration drift between deployed resources and their IaC definitions.":
      "클라우드 환경을 스캔하여 배포된 리소스와 해당 IaC 정의 간의 구성 드리프트를 탐지합니다.",
    "Exclude any items that match this query:": "이 쿼리와 일치하는 항목 제외:",
    "Add filters": "필터 추가",
    "Results Preview": "결과 미리 보기",
    "Back to Policies": "정책으로 돌아가기",
    "Vulnerability Issue Policies": "취약점 이슈 정책",
    "Vulnerability Policy": "취약점 정책",
    "Vulnerability Policies": "취약점 정책",
    "Choose Actions": "작업 선택",

    // --- Vulnerability Policies - Issue Creation screen ---
    "Vulnerability Policies - Issue Creation": "취약점 정책 - 이슈 생성",
    "Add Policy": "정책 추가",
    "Exclusions": "제외",
    "Globally Ignored CVEs, Assets, and Asset Groups": "전역적으로 무시된 CVE, 자산 및 자산 그룹",
    "Issue Creation": "이슈 생성",
    "Match Criteria": "일치 기준",
    "Prevention": "방지",
    "disabled": "사용 안 함",
    "CVE Default": "CVE 기본값",
    "CVEs Confirmed Vulnerable Externally": "외부에서 취약한 것으로 확인된 CVE",
    "CVEs with 80%+ EPSS Scores": "EPSS 점수가 80% 이상인 CVE",
    "CVEs with CVSS Critical Severity": "CVSS 심각도가 심각인 CVE",
    "CVEs with CVSS High Severity": "CVSS 심각도가 높음인 CVE",
    "CVEs with CVSS Medium Severity": "CVSS 심각도가 중간인 CVE",
    "CVSS Severity = Critical": "CVSS 심각도 = 심각",
    "CVSS Severity = High": "CVSS 심각도 = 높음",
    "CVSS Severity = Medium": "CVSS 심각도 = 중간",
    "EPSS Score >= 80%": "EPSS 점수 >= 80%",
    "Finding Sources Contains Cortex Attack Surface Testing":
      "발견 소스에 Cortex Attack Surface Testing 포함",
    "Package In Use = Yes": "패키지 사용 중 = 예",

    // --- Rules and Policies screen ---
    "Create dynamic groups by applying asset filters, or build static groups by selecting assets manually.":
      "자산 필터를 적용하여 동적 그룹을 생성하거나 자산을 수동으로 선택하여 정적 그룹을 만드세요.",
    "The selected policy will be deleted.": "선택한 정책이 삭제됩니다.",
    "The following text will be displayed as part of the issue remediation guidance":
      "다음 텍스트는 이슈 수정 조치 지침의 일부로 표시됩니다",
    "Delete Policy": "정책 삭제",
    "Disable Policy": "정책 사용 중지",
    "Disabling policy will resolve the open issues matching the policy.":
      "정책을 사용 중지하면 정책과 일치하는 열린 이슈가 해결됩니다.",
    "Deleting policy will resolve the open issues in this policy scope.":
      "정책을 삭제하면 이 정책 범위의 열린 이슈가 해결됩니다.",
    "Grace Period (Deployment)": "유예 기간 (배포)",
    "Number of days to allow before blocking": "차단하기 전까지 허용할 일수",
    "The selected policies will be disabled. Are you sure you want to proceed?":
      "선택한 정책이 사용 중지됩니다. 계속하시겠습니까?",
    "The policy will no longer evaluate against findings": "이 정책은 더 이상 발견 사항에 대해 평가하지 않습니다",
    "The selected policies will be deleted. Are you sure you want to proceed?":
      "선택한 정책이 삭제됩니다. 계속하시겠습니까?",
    // Kept verbatim (the sentence ends abruptly at "try adjusting your search to find.").
    // This is a distinct variant from the similar string in asset-inventory-screen.js
    // ("...to find what you're looking for.") with a different ending, so it is
    // registered as its own entry.
    "We couldn’t find what you’re looking for, try adjusting your search to find.":
      "찾으시는 항목을 찾을 수 없습니다. 검색 조건을 조정하여 다시 시도하세요.",
    "Created by:": "생성자:",
    "Modified by:": "수정자:",
    "Created on:": "생성 날짜:",
    "Modified on:": "수정 날짜:",
    "Total": "합계",
    "Edit policy": "정책 편집",
    "Duplicate policy": "정책 복제",
    "View Policy Details": "정책 세부 정보 보기",
    "Export policy": "정책 내보내기",
    "You are about to delete 1 policy": "정책 1개를 삭제하려고 합니다",
    "* Choosing delete you will also save other unsaved changes in the policy screen":
      "* 삭제를 선택하면 정책 화면에서 저장되지 않은 다른 변경 사항도 저장됩니다",
    "Delete and Save": "삭제 및 저장",
    "Delete Custom Detection Rule": "사용자 지정 탐지 규칙 삭제",
    "Data types": "데이터 유형",
    "Severity for Compliance": "규정 준수용 심각도",
    "Rule Details": "규칙 세부 정보",
    "Rule Definition (Rego)": "규칙 정의 (Rego)",
    "Rule Definition (Python)": "규칙 정의 (Python)",
    "Inputs": "입력",
  },

  patterns: [
    { re: /^Based on the categorization, finding type will be "(.+)"$/, tpl: "분류에 따라 발견 사항 유형은 \"$1\"(으)로 지정됩니다" },
    { re: /^The (\[.*\]) dataset is not supported for the '(.+)' rule type\.$/, tpl: "$1 데이터 세트는 \"$2\" 규칙 유형에서 지원되지 않습니다." },
    { re: /^Provided xdm\.asset\.type\.id (\[.*\]) is invalid\.$/, tpl: "지정한 xdm.asset.type.id $1이(가) 잘못되었습니다." },
    { re: /^Maximum of 50 labels \((\d+)\/50\)$/, tpl: "레이블 최대 50개 ($1/50)" },
    { re: /^Step (\d+)\/(\d+)$/, tpl: "단계 $1/$2" },
    { re: /^Condition Group\s+(\d+)$/, tpl: "조건 그룹 $1" },
    // (Removed: a pattern for "We found the application "X" with no critical/high vulnerabilities.
    // ..." used to live here. See the comment in the exact block above — this text now goes through AI
    // translation via content.js's cas-recommendations-panel p[ucardcontent] exclusion instead.)
    { re: /^(\d+)\s+selected asset groups$/, tpl: "선택한 자산 그룹: $1개" },
    { re: /^(\d+)\s+Selected rules$/, tpl: "선택한 규칙: $1개" },
    { re: /^Total\s+([\d,]+)\s+rules selected$/, tpl: "선택한 규칙 합계: $1개" },
    { re: /^(\d+)\s+selected predefined asset scopes$/, tpl: "선택한 사전 정의 자산 범위: $1개" },
    { re: /^There are currently ([\d,]+) Issues generated from these policies\.$/,
      tpl: "현재 이 정책에서 생성된 이슈는 $1건입니다." },
    // "There are currently 0 Issues generated from these policies. No new Issues will be generated from these policies after disabling."
    { re: /^There are currently ([\d,]+) Issues generated from these policies\. No new Issues will be generated from these policies after disabling\.$/,
      tpl: "현재 이 정책에서 생성된 이슈는 $1건입니다. 사용 중지하면 이 정책에서 더 이상 새 이슈가 생성되지 않습니다." },
    // The rule name (an identifier) is left untranslated.
    { re: /^The selected rule, (.+), will be disabled\.$/, tpl: "선택한 규칙 \"$1\"이(가) 사용 중지됩니다." },
    // "The selected rule, MCP Server, will be enabled. As a result, 0 estimated issues will be generated."
    { re: /^The selected rule, (.+), will be enabled\. As a result, ([\d,]+) estimated issues will be generated\.$/,
      tpl: "선택한 규칙 \"$1\"이(가) 사용 설정됩니다. 그 결과 약 $2건의 이슈가 생성될 것으로 예상됩니다." },
    { re: /^You are about to delete ([\d,]+) polic(?:y|ies)$/, tpl: "정책 $1개를 삭제하려고 합니다" },
    { re: /^([\d,]+) Polic(?:y|ies) will be disabled$/, tpl: "정책 $1개가 사용 중지됩니다" },
    { re: /^([\d,]+) Polic(?:y|ies) will be enabled$/, tpl: "정책 $1개가 사용 설정됩니다" },
    // The policy name (an identifier) is left untranslated.
    { re: /^Policy (.+) will be deleted$/, tpl: "정책 \"$1\"이(가) 삭제됩니다" },
    { re: /^Are you sure you want to delete the rule (.+)\?$/, tpl: "규칙 \"$1\"을(를) 삭제하시겠습니까?" },
    // The rule name (an identifier) is left untranslated.
    { re: /^Rule (.+) will be deleted$/, tpl: "규칙 \"$1\"이(가) 삭제됩니다" },
    { re: /^([\d,]+) Rules? will be disabled$/, tpl: "규칙 $1개가 사용 중지됩니다" },
    { re: /^([\d,]+) Rules? will be enabled$/, tpl: "규칙 $1개가 사용 설정됩니다" },
    // "This is a Python-based rule. The Logic cannot be edited but can be viewed for Terraform"
    // The target type (e.g. Terraform — the language/resource kind the rule applies to) is variable.
    { re: /^This is a Python-based rule\. The Logic cannot be edited but can be viewed for (.+)$/,
      tpl: "Python 기반 규칙입니다. 로직은 편집할 수 없지만 $1에 대해 볼 수 있습니다." },
    { re: /^Executables \((\d+)\)$/, tpl: "실행 파일 ($1)" },
  ],

  skip: [],
};
