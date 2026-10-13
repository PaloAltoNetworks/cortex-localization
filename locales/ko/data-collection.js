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

const dictionaryDataCollection = {
  exact: {
    "Add New": "새로 추가",
    "Enter client ID": "클라이언트 ID 입력",
    "Enter password": "암호 입력",
    "Choose Outpost": "Outpost 선택",
    "Organization ID": "조직 ID",
    "Include": "포함",
    "Enter OU IDs to exclude from scan": "스캔에서 제외할 OU ID 입력",
    "Specify OUs": "OU 지정",
    "Specify Accounts": "계정 지정",
    "Enter account IDs to exclude from scan": "스캔에서 제외할 계정 ID 입력",
    "Specify Folders": "폴더 지정",
    "Specify Projects": "프로젝트 지정",
    "Enter folder IDs to exclude from scan": "스캔에서 제외할 폴더 ID 입력",
    "Enter project IDs to exclude from scan": "스캔에서 제외할 프로젝트 ID 입력",
    "Enter Customer IDs for discovery enhancements": "검색 기능 향상을 위한 고객 ID 입력",
    "Specify Management Groups": "관리 그룹 지정",
    "Enter management group IDs to exclude from scan": "스캔에서 제외할 관리 그룹 ID 입력",
    "Specify Subscriptions": "구독 지정",
    "Enter subscription IDs to exclude from scan": "스캔에서 제외할 구독 ID 입력",
    "To complete setup, provide these details during template execution in the Azure Portal:":
      "설정을 완료하려면 Azure Portal에서 템플릿을 실행할 때 다음 세부 정보를 입력하세요:",
    "Event Hub namespace": "Event Hub 네임스페이스",
    "Must belong to the onboarded subscription": "온보딩된 구독에 속해야 합니다",
    "Create an outpost for this tenant": "이 테넌트용 Outpost 생성",
    "Allow connection to private registries": "프라이빗 레지스트리에 대한 연결 허용",
    "Allow connection to private serverless functions": "프라이빗 서버리스 함수에 대한 연결 허용",
    "Enabling this feature requires additional permissions. Download and run the Terraform template to apply.":
      "이 기능을 사용하려면 추가 권한이 필요합니다. 적용하려면 Terraform 템플릿을 다운로드하여 실행하세요.",
    "Requires additional cloud service provider permissions": "추가 클라우드 서비스 공급자 권한이 필요합니다",
    "Choose an outpost to use for this instance. Only outposts connected to above tenant ID will be presented. To create a new outpost click":
      "이 인스턴스에 사용할 Outpost를 선택하세요. 위 테넌트 ID에 연결된 Outpost만 표시됩니다. 새 Outpost를 생성하려면 다음을 클릭하세요:",
    "Tenant ID is required to approve Cortex as an enterprise application in the Azure tenant":
      "Azure 테넌트에서 Cortex를 엔터프라이즈 애플리케이션으로 승인하려면 테넌트 ID가 필요합니다",
    "Select this option to onboard only Microsoft Entra ID data for identity security without full tenant onboarding. Scan mode and scope modifications will not be available.":
      "전체 테넌트를 온보딩하지 않고 ID 보안용 Microsoft Entra ID 데이터만 온보딩하려면 이 옵션을 선택하세요. 스캔 모드 및 범위 수정은 사용할 수 없습니다.",
    "Event Hub name": "Event Hub 이름",
    "After onboarding, these values will be available as read-only in the instance settings.":
      "온보딩 후에는 인스턴스 설정에서 이 값을 읽기 전용으로 확인할 수 있습니다.",
    "Importing replaces the current list.": "가져오면 현재 목록이 대체됩니다.",
    "Additional security capabilities can be enabled in addition to the below built in capabilities:":
      "아래 기본 제공 기능 외에 추가 보안 기능을 사용 설정할 수 있습니다:",
    "Cloud security posture management": "클라우드 보안 태세 관리",
    "AI security posture management": "AI 보안 태세 관리",
    "Discover, classify and protect sensitive data in your cloud environment": "클라우드 환경에서 민감한 데이터를 검색, 분류 및 보호합니다",
    "Requires additional cloud provider permissions": "추가 클라우드 공급자 권한이 필요합니다",
    "Scan Serverless functions for vulnerabilities": "서버리스 함수의 취약점 스캔",
    "Automate response to issues using playbooks and Quick Actions": "Playbook 및 Quick Actions를 사용하여 이슈 대응 자동화",
    "Enable or disable Agentless Disk Scanning.": "에이전트리스 디스크 스캔을 사용 설정하거나 사용 중지합니다.",
    "Existing and newly discovered clusters are continuously scanned agentlessly for deep Kubernetes inventory context alongside security insights (e.g. compliance & misconfigurations)":
      "기존 클러스터와 새로 검색된 클러스터는 보안 인사이트(예: 규정 준수 및 잘못된 구성)와 함께 심층적인 Kubernetes 인벤토리 컨텍스트를 얻기 위해 에이전트 없이 지속적으로 스캔됩니다",
    "Select outpost account": "Outpost 계정 선택",
    "When enabled, Cortex sends unknown files to WildFire for analysis. The file types sent for analysis depend on the platform type. WildFire accepts files up to 300MB in size.":
      "사용 설정하면 Cortex가 알 수 없는 파일을 분석을 위해 WildFire로 전송합니다. 분석을 위해 전송되는 파일 유형은 플랫폼 유형에 따라 다릅니다. WildFire는 최대 300MB 크기의 파일을 허용합니다.",
    "Hide Preferences": "기본 설정 숨기기",
    "Enable automation to streamline incident response. this may required additional cloud service provider permissions.":
      "인시던트 대응을 간소화하려면 자동화를 사용 설정하세요. 추가 클라우드 서비스 공급자 권한이 필요할 수 있습니다.",
    "Scan container registry images for vulnerabilities, malware and secrets": "컨테이너 레지스트리 이미지에서 취약점, 멀웨어 및 시크릿 스캔",
    "This feature requires data egress, which incurs standard data transfer fees.": "이 기능에는 데이터 송신(egress)이 필요하며 표준 데이터 전송 요금이 발생합니다.",
    "Publisher": "게시자",
    "Choose and configure capabilities to fit your needs": "필요에 맞게 기능을 선택하고 구성하세요",
    "Edit, add or remove capabilities to fit your needs": "필요에 맞게 기능을 편집, 추가 또는 제거하세요",
    "Deployment removal": "배포 제거",
    "Default settings": "기본 설정",
    "Edit profile": "프로필 편집",
    "Kubernetes connect": "Kubernetes 연결",
    "Connector Status": "커넥터 상태",
    "Collectors": "수집기",
    "Count Received (Last 24h)": "수신 건수(지난 24시간)",
    "Last Communication": "마지막 통신",
    "Connector Version": "커넥터 버전",
    "Data source": "데이터 소스",
    "K8s Platform": "K8s 플랫폼",
    "Last Scan": "마지막 스캔",
    "Serverless": "서버리스",
    "Update": "업데이트",
    "Cluster resource identifier": "클러스터 리소스 식별자",
    "Enter cluster resource identifier": "클러스터 리소스 식별자 입력",
    "The resource identifier must be specified for GKE or EKS clusters with metadata service disabled, for AKS clusters with non-default nodes managed resource group and for Fargate clusters":
      "메타데이터 서비스가 사용 중지된 GKE 또는 EKS 클러스터, 기본값이 아닌 노드 관리 리소스 그룹을 사용하는 AKS 클러스터 및 Fargate 클러스터의 경우 리소스 식별자를 지정해야 합니다",
    "Basic authentication is only supported for posture management.": "기본 인증은 보안 태세 관리에서만 지원됩니다.",
    "Notice! Assigning tags may impact scoped permissions in the system.":
      "주의! 태그를 할당하면 시스템의 범위 지정 권한에 영향을 줄 수 있습니다.",
    "Initial scanning configuration": "초기 스캔 구성",
    "Configure the initial preference for scanning your registry. Any newly discovered registry, repository or image in the account will be scanned by default.":
      "레지스트리 스캔에 대한 초기 기본 설정을 구성합니다. 계정에서 새로 검색된 모든 레지스트리, 리포지토리 또는 이미지는 기본적으로 스캔됩니다.",
    "Latest tag": "최신 태그",
    "Days modified": "수정 후 경과 일수",
    "Tags created/updated in last": "다음 기간 내 생성/업데이트된 태그",
    "Onboard your OCI tenancy to Cortex Cloud. Security scanning is performed in the Cortex Cloud environment.":
      "OCI 테넌시를 Cortex Cloud에 온보딩합니다. 보안 스캔은 Cortex Cloud 환경에서 수행됩니다.",
    "Enter an instance name or leave it empty to be auto populated": "인스턴스 이름을 입력하거나 비워 두면 자동으로 채워집니다",
    "Define scope of scans by including/excluding compartments or regions": "컴파트먼트 또는 리전을 포함/제외하여 스캔 범위 정의",
    "Modify Scope by Compartments": "컴파트먼트별로 범위 수정",
    "Scope modification will impact the compartments and their sub-compartments": "범위 수정은 컴파트먼트 및 해당 하위 컴파트먼트에 영향을 줍니다",
    "OCI region": "OCI 리전",
    "Choose region": "리전 선택",
    "Bucket Name": "버킷 이름",
    "Enter bucket name": "버킷 이름 입력",
    "Compartment OCID": "컴파트먼트 OCID",
    "Enable Amazon S3 Log Collection": "Amazon S3 로그 수집 사용",
    "Enable Azure Network Watcher Log Collection": "Azure Network Watcher 로그 수집 사용",
    "Enable GCP Pub/Sub Log Collection": "GCP Pub/Sub 로그 수집 사용",
    "Enter the full GCP Pub/Sub subscription name": "전체 GCP Pub/Sub 구독 이름을 입력하세요",
    "Upload the JSON file containing your service account key": "서비스 계정 키가 포함된 JSON 파일을 업로드하세요",
    "Enhanced Cloud Protection": "향상된 클라우드 보호",
    "Use flow logs in analytics": "분석에 흐름 로그 사용",
    "Save & Generate Token": "저장 및 토큰 생성",
    "subscription name": "구독 이름",
    "Define the following parameters": "다음 매개변수를 정의하세요",
    ", see": ", 참조:",
    "Applies to these capabilities": "다음 기능에 적용됩니다",
    "Automation and Remediation": "자동화 및 수정 조치",
    "Connection": "연결",
    "Drag & Drop or Browse file to upload": "파일을 끌어서 놓거나 찾아보기를 통해 업로드",
    "Engine": "엔진",
    "Engine Group": "엔진 그룹",
    "Enter the credentials to securely authorize the connection": "연결을 안전하게 승인하기 위한 자격 증명을 입력하세요",
    "Google Workspace Admin Email": "Google Workspace 관리자 이메일",
    "Identity Posture": "ID 보안 태세",
    "Manage and monitor Google Workspace directory resources including users, groups, organizational units, domains, and roles via the Admin SDK Directory API":
      "Admin SDK Directory API를 통해 사용자, 그룹, 조직 단위, 도메인, 역할 등 Google Workspace 디렉터리 리소스를 관리하고 모니터링합니다",
    "No engine": "엔진 없음",
    "OAuth with customer created service principal": "고객이 생성한 서비스 주체를 사용하는 OAuth",
    "Run automation and remediation actions against Google Drive": "Google Drive에 대해 자동화 및 수정 조치 작업 실행",
    "Scan and protect Google Workspace data across Drive, Gmail, and shared resources": "Drive, Gmail 및 공유 리소스 전반에서 Google Workspace 데이터 스캔 및 보호",
    "Select capabilities": "기능 선택",
    "Server-to-server authentication using JWT Bearer assertion with a service account credentials file":
      "서비스 계정 자격 증명 파일과 함께 JWT Bearer 어설션을 사용하는 서버 간 인증",
    "Set your preferred authentication setup": "선호하는 인증 설정을 지정하세요",
    "The Google Workspace admin email used for domain-wide delegation. This account must have super admin privileges.":
      "도메인 전체 위임에 사용되는 Google Workspace 관리자 이메일입니다. 이 계정에는 최고 관리자 권한이 있어야 합니다.",
    "Trust any certificate (not secure)": "모든 인증서 신뢰(안전하지 않음)",
    "Use system proxy settings": "시스템 프록시 설정 사용",
    "This field cannot be changed after it is added. To change it, exit the wizard and start again":
      "이 필드는 추가한 후에는 변경할 수 없습니다. 변경하려면 마법사를 종료하고 다시 시작하세요",
    "Workload Federated Identity": "워크로드 페더레이션 ID",
    "Access Key": "액세스 키",
    "STS AssumeRole": "STS AssumeRole",
    "SQS URL": "SQS URL",
    "Enter SQS URL": "SQS URL 입력",
    "Role ARN": "역할 ARN",
    "Enter role ARN": "역할 ARN 입력",
    "AWS Client ID": "AWS 클라이언트 ID",
    "AWS Client Secret": "AWS 클라이언트 시크릿",
    "External ID": "외부 ID",
    "Audience": "대상(Audience)",
    "Enter audience": "대상(Audience) 입력",
    "Select log type": "로그 유형 선택",
    "Copy service account identifier": "서비스 계정 식별자 복사",
    "Identifier": "식별자",
    "Enable": "사용",
    "Enter a compartment's OCID": "컴파트먼트의 OCID 입력",
    "Delayed": "지연",
    "Edit Profile settings": "프로필 설정 편집",
    "Enable auto upgrade to ensure the installed set of capabilities is upgraded as new versions are available.":
      "새 버전이 제공될 때 설치된 기능 세트가 업그레이드되도록 자동 업그레이드를 사용 설정하세요.",
    "Explore and tailor Kubernetes security capabilities to simplify deployment and ensure seamless integration with your infrastructure. Easily strengthen and optimize your Kubernetes environment's security":
      "Kubernetes 보안 기능을 살펴보고 조정하여 배포를 간소화하고 인프라와 원활하게 통합하세요. Kubernetes 환경의 보안을 손쉽게 강화하고 최적화할 수 있습니다",
    "HTTP proxy IP": "HTTP 프록시 IP",
    "If network traffic must route through a proxy gateway, configure the required settings here, including the proxy URL, authentication method, and other relevant parameters.":
      "네트워크 트래픽이 프록시 게이트웨이를 통해 라우팅되어야 하는 경우 프록시 URL, 인증 방법 및 기타 관련 매개변수를 포함한 필수 설정을 여기에서 구성하세요.",
    "Immediate": "즉시",
    "Latest available version (GA)": "사용 가능한 최신 버전(GA)",
    "Namespace": "네임스페이스",
    "Supported Kubernetes distributions": "지원되는 Kubernetes 배포판",
    "To see the list of supported versions,": "지원되는 버전 목록을 보려면",
    "Upgrade rollout": "업그레이드 롤아웃",
    "Upgrade strategy": "업그레이드 전략",
    "What time?": "몇 시에?",
    "Which days?": "어느 요일에?",
    "Latest available version (GA) / Immediate / On any day (At any time)":
      "사용 가능한 최신 버전(GA) / 즉시 / 모든 요일(언제든지)",
    "Profile settings": "프로필 설정",
    "Read more": "자세히 보기",
    "Realtime protection": "실시간 보호",
    "Capabilities": "기능",
    "Cloud Services": "클라우드 서비스",
    "Count (Last 24h)": "건수(지난 24시간)",
    "Data Enrichment & Threat Intelligence": "데이터 보강 및 위협 인텔리전스",
    "Deprecated": "사용 중단됨",
    "Forensics & Malware Analysis": "포렌식 및 멀웨어 분석",
    "Image OCR": "이미지 OCR",
    "Indicators detection": "지표 탐지",
    "Instances Status": "인스턴스 상태",
    "Mail Sender": "메일 발신자",
    "Messaging": "메시징",
    "Messaging and Conferencing": "메시징 및 회의",
    "Open Source": "오픈 소스",
    "Pack Version": "팩 버전",
    "Rasterize": "래스터화",
    "Update Available": "업데이트 가능",
    "Utilities": "유틸리티",
    "Add Another Instance": "다른 인스턴스 추가",
    "Add Data Sources or Integrations": "데이터 소스 또는 통합 추가",
    "Create Integration": "통합 생성",
    "More Details": "자세한 정보",
    "Account": "계정",
    "Add Instance": "인스턴스 추가",
    "Additional Security Capabilities": "추가 보안 기능",
    "Authentication Method": "인증 방법",
    "Cloud Scan": "클라우드 스캔",
    "Cloud Service Provider": "클라우드 서비스 공급자",
    "Cloud Tags": "클라우드 태그",
    "Contains": "포함",
    "Error": "오류",
    "Instance ID": "인스턴스 ID",
    "Outpost": "Outpost",
    "Outpost ID": "Outpost ID",
    "Pending": "보류 중",
    "Scan Mode": "스캔 모드",
    "Update Status": "업데이트 상태",
    "Warning": "경고",
    "Account Name": "계정 이름",
    "Account Type": "계정 유형",
    "Agentless Disk Scanning": "에이전트리스 디스크 스캔",
    "All granted": "모두 부여됨",
    "Audit Logs": "감사 로그",
    "Cloud Instances": "클라우드 인스턴스",
    "Coverage": "적용 범위",
    "Scan Coverage": "스캔 적용 범위",
    "Data Security Scanning": "데이터 보안 스캔",
    "Data Sources": "데이터 소스",
    "Discovery Engine": "검색 엔진",
    "Environment": "환경",
    "High Coverage": "높은 적용 범위",
    "Permissions": "권한",
    "Registry Scanning": "레지스트리 스캔",
    "Resources Tags": "리소스 태그",
    "Security Capabilities": "보안 기능",
    "Serverless Scanning": "서버리스 스캔",
    "Scan With Outpost": "Outpost로 스캔",
    "Scanning is done in the Cortex cloud environment.": "스캔은 Cortex 클라우드 환경에서 수행됩니다.",
    "Scanning is done on infrastructure deployed to a cloud account owned by you. This mode require additional cloud provider permissions and may incur additional cloud costs.":
      "스캔은 고객이 소유한 클라우드 계정에 배포된 인프라에서 수행됩니다. 이 모드에는 추가 클라우드 공급자 권한이 필요하며 추가 클라우드 비용이 발생할 수 있습니다.",
    "Show advanced settings": "고급 설정 표시",
    "View required permissions": "필요한 권한 보기",
    "Organizational Unit": "조직 단위",
    "Add Tag": "태그 추가",
    "After onboarding, view these values in the cloud instance settings.":
      "온보딩 후 클라우드 인스턴스 설정에서 이 값을 확인하세요.",
    "Automatically provisions all required cloud resources and permissions via IaC template.":
      "IaC 템플릿을 통해 필요한 모든 클라우드 리소스와 권한을 자동으로 프로비저닝합니다.",
    "Choose logs to collect. To benefit from all security capabilities all log types should be collected -":
      "수집할 로그를 선택하세요. 모든 보안 기능을 활용하려면 모든 로그 유형을 수집해야 합니다 -",
    "CloudTrail Bucket Name:": "CloudTrail 버킷 이름:",
    "Collect Audit Logs": "감사 로그 수집",
    "Data security posture management": "데이터 보안 태세 관리",
    "Define scope of scans by including/excluding OUs, Accounts or Regions":
      "OU, 계정 또는 리전을 포함/제외하여 스캔 범위 정의",
    "Deployment Guide": "배포 가이드",
    "Deployment Method": "배포 방법",
    "Edit Preferences": "기본 설정 편집",
    "Enable additional security add-ons. This may require additional cloud provider permissions":
      "추가 보안 애드온을 사용 설정합니다. 추가 클라우드 공급자 권한이 필요할 수 있습니다",
    "For full control over the onboarding process, follow our":
      "온보딩 프로세스를 완전히 제어하려면 다음을 따르세요:",
    "Hide advanced settings": "고급 설정 숨기기",
    "KMS Key ARN (Optional):": "KMS 키 ARN(선택 사항):",
    "Log Collection Configuration": "로그 수집 구성",
    "Modify Scope by Regions": "리전별로 범위 수정",
    "Modify by OU/Account": "OU/계정별로 수정",
    "Must reside within the account you are onboarding": "온보딩 중인 계정 내에 있어야 합니다",
    "Note": "참고",
    "Collect data events (currently support lambda & S3)": "데이터 이벤트 수집(현재 lambda 및 S3 지원)",
    "Automated collection creates new, dedicated AWS resources (CloudTrail, S3 bucket, and notification services). This can lead to significant infrastructure costs in high-volume environments.":
      "자동 수집은 새로운 전용 AWS 리소스(CloudTrail, S3 버킷 및 알림 서비스)를 생성합니다. 데이터 양이 많은 환경에서는 상당한 인프라 비용이 발생할 수 있습니다.",
    "Region must match the deployment region": "리전은 배포 리전과 일치해야 합니다",
    "SNS Topic ARN:": "SNS 토픽 ARN:",
    "Scope Modifications": "범위 수정",
    "Send samples to detonation in WildFire. Supported in: Registry Scanning.":
      "샘플을 WildFire로 보내 폭파(detonation) 분석합니다. 지원 대상: 레지스트리 스캔.",
    "Serverless functions scanning": "서버리스 함수 스캔",
    "The following labels are added to any new resource created by Cortex in the cloud environment":
      "클라우드 환경에서 Cortex가 생성하는 모든 새 리소스에 다음 레이블이 추가됩니다",
    "To complete setup, enter these resource details during template execution in the AWS Console":
      "설정을 완료하려면 AWS 콘솔에서 템플릿을 실행할 때 다음 리소스 세부 정보를 입력하세요",
    "Upload unknown files to WildFire": "알 수 없는 파일을 WildFire에 업로드",
    "(Keeping this enabled is strongly recommended)": "(사용 설정 상태로 유지할 것을 강력히 권장합니다)",
    ". This may require additional cloud provider permissions.":
      ". 추가 클라우드 공급자 권한이 필요할 수 있습니다.",
    "for provisioning all required resources yourself.": "(필요한 모든 리소스를 직접 프로비저닝하는 경우)",
    "Close": "닫기",
    "Connect to AWS to execute the template.": "템플릿을 실행하려면 AWS에 연결하세요.",
    "Cortex has created your instance in pending state and your authentication template is available.":
      "Cortex가 인스턴스를 보류 상태로 생성했으며 인증 템플릿을 사용할 수 있습니다.",
    "Download CloudFormation": "CloudFormation 다운로드",
    "Download the template and execute it in your cloud service provider.":
      "템플릿을 다운로드하여 클라우드 서비스 공급자에서 실행하세요.",
    "Execute in AWS": "AWS에서 실행",
    "For more information,": "자세한 내용은",
    "Generate Template": "템플릿 생성",
    "Template Delete": "템플릿 삭제",
    "Template has been deleted.": "템플릿이 삭제되었습니다.",
    "DON'T FORGET": "잊지 마세요",
    "To finalize the process, you will need to choose a connection method.":
      "프로세스를 완료하려면 연결 방법을 선택해야 합니다.",
    "Next steps": "다음 단계",
    "Note: If you select": "참고: 다음을 선택하는 경우",
    "To complete the process, execute the template in AWS using one of the following methods.":
      "프로세스를 완료하려면 다음 방법 중 하나를 사용하여 AWS에서 템플릿을 실행하세요.",
    "To complete the process, execute the template in AWS": "프로세스를 완료하려면 AWS에서 템플릿을 실행하세요",
    "To configure flow or DNS log ingestion use": "흐름 또는 DNS 로그 수집을 구성하려면 다음을 사용하세요:",
    "View all data sources and their instances in": "모든 데이터 소스와 해당 인스턴스 보기:",
    "When the discovery scan is complete, view cloud assets in": "검색 스캔이 완료되면 다음에서 클라우드 자산을 확인하세요:",
    "When you're done": "완료되면",
    ", you must already be logged in to AWS.": ", 미리 AWS에 로그인되어 있어야 합니다.",
    "view documentation": "문서 보기",
    "read more in documentation": "문서에서 자세히 보기",
    "tag key": "태그 키",
    "tag value": "태그 값",
    "ARE YOU SURE?": "계속하시겠습니까?",
    "Clear": "지우기",
    "Cloud Labels": "클라우드 레이블",
    "Collect Audit Logs (GCP Pub/Sub)": "감사 로그 수집(GCP Pub/Sub)",
    "Connect to GCP workspace": "GCP 워크스페이스에 연결",
    "Define scope of scans by including/excluding Folders, Projects or Regions":
      "폴더, 프로젝트 또는 리전을 포함/제외하여 스캔 범위 정의",
    "Discovery Enhancements": "검색 기능 향상",
    "Download Terraform": "Terraform 다운로드",
    "GCP Pub/Sub connector": "GCP Pub/Sub 커넥터",
    "To complete the process, execute the template in GCP": "프로세스를 완료하려면 GCP에서 템플릿을 실행하세요",
    "To configure flow and DNS log ingestion use": "흐름 및 DNS 로그 수집을 구성하려면 다음을 사용하세요:",
    ". Download this setup file and run it on your cloud service provider account.":
      ". 이 설정 파일을 다운로드하여 클라우드 서비스 공급자 계정에서 실행하세요.",
    "Modify by Folder/Project": "폴더/프로젝트별로 수정",
    "Project Id": "프로젝트 ID",
    "Project Name": "프로젝트 이름",
    "Project Type": "프로젝트 유형",
    "Update and Resolve": "업데이트 및 해결",
    "Manually connect an instance": "인스턴스 수동 연결",
    "View Details": "세부 정보 보기",
    "Re-download Connection Template": "연결 템플릿 다시 다운로드",
    "1. To create the service principal, you must have the Entra ID Cloud Application Administrator role (or higher) in the Azure tenant you are onboarding.":
      "1. 서비스 주체를 생성하려면 온보딩하려는 Azure 테넌트에서 Entra ID Cloud Application Administrator 역할(또는 그 이상)이 있어야 합니다.",
    "2. Open Azure Cloud Shell in the tenant you are onboarding, or open a local terminal with the Azure CLI installed, and log in to the target tenant before executing the command below.":
      "2. 온보딩하려는 테넌트에서 Azure Cloud Shell을 열거나 Azure CLI가 설치된 로컬 터미널을 열고, 아래 명령을 실행하기 전에 대상 테넌트에 로그인하세요.",
    "3. Run the following command:": "3. 다음 명령을 실행하세요:",
    "4. Verify the service principal was created": "4. 서비스 주체가 생성되었는지 확인하세요",
    "Collect Audit Logs (Event Hub)": "감사 로그 수집(Event Hub)",
    "Create Cortex service principal": "Cortex 서비스 주체 생성",
    "This service principal is Cortex's primary runtime identity in your tenant. Cortex uses it to read your Azure resources and to perform actions for the capabilities you enable. When you enter your Azure tenant ID, Cortex checks if the service principal already exists. If it is not found, follow the steps below.":
      "이 서비스 주체는 테넌트에서 Cortex의 기본 런타임 ID입니다. Cortex는 이를 사용하여 Azure 리소스를 읽고 사용 설정한 기능에 대한 작업을 수행합니다. Azure 테넌트 ID를 입력하면 Cortex가 서비스 주체가 이미 있는지 확인합니다. 찾을 수 없는 경우 아래 단계를 따르세요.",
    "Define scope of scans by including/excluding Management Groups, Subscriptions or Regions":
      "관리 그룹, 구독 또는 리전을 포함/제외하여 스캔 범위 정의",
    "Documentation": "문서",
    "For more information, see the": "자세한 내용은 다음을 참조하세요:",
    "To complete the process, execute the template in Azure": "프로세스를 완료하려면 Azure에서 템플릿을 실행하세요",
    "To configure flow log ingestion use": "흐름 로그 수집을 구성하려면 다음을 사용하세요:",
    "Modify by Management Group/Subscription": "관리 그룹/구독별로 수정",
    "Onboard Microsoft Entra ID only": "Microsoft Entra ID만 온보딩",
    "Tenant": "테넌트",
    "Tenant ID": "테넌트 ID",
    "All Outposts": "모든 Outpost",
    "New Outpost": "새 Outpost",
    "Outpost Account ID": "Outpost 계정 ID",
    "Outpost Account Name": "Outpost 계정 이름",
    "Create AWS Outpost": "AWS Outpost 생성",
    "Custom Outpost": "사용자 지정 Outpost",
    "Keep control of your network architecture. You provide the VPC and Subnets, and we’ll use Terraform to deploy the IAM roles, storage, and compute resources directly into your existing infrastructure.":
      "네트워크 아키텍처에 대한 제어권을 유지하세요. VPC와 서브넷을 제공하면 Terraform을 사용하여 IAM 역할, 스토리지 및 컴퓨팅 리소스를 기존 인프라에 직접 배포합니다.",
    "Use a predefined script to deploy all roles and resources, as well as configurations, to a dedicated account owned by you.":
      "사전 정의된 스크립트를 사용하여 모든 역할, 리소스 및 구성을 고객이 소유한 전용 계정에 배포합니다.",
    "We are preparing your Amazon Web Services outpost account. Your next step is to create the connection to Amazon Web Services.":
      "Amazon Web Services Outpost 계정을 준비하고 있습니다. 다음 단계로 Amazon Web Services에 대한 연결을 생성하세요.",
    "Create GCP Outpost": "GCP Outpost 생성",
    "Create Azure Outpost": "Azure Outpost 생성",
    "We are preparing your Google Cloud Platform outpost account. Your next step is to create the connection to Google Cloud Platform.":
      "Google Cloud Platform Outpost 계정을 준비하고 있습니다. 다음 단계로 Google Cloud Platform에 대한 연결을 생성하세요.",
    "We are preparing your Microsoft Azure outpost account. Your next step is to create the connection to Microsoft Azure.":
      "Microsoft Azure Outpost 계정을 준비하고 있습니다. 다음 단계로 Microsoft Azure에 대한 연결을 생성하세요.",
    "Recommended": "권장",
    "Number of instances": "인스턴스 수",
    "Partition": "파티션",
    "Features": "기능",
    "Select a dedicated account for the outpost (free from other resources)":
      "Outpost 전용 계정 선택(다른 리소스가 없는 계정)",
    "Onboard only one outpost for each account": "계정당 하나의 Outpost만 온보딩하세요",
    "The tenant ID format is valid, but we couldn't connect to the account because the required configuration is missing.":
      "테넌트 ID 형식은 유효하지만 필요한 구성이 누락되어 계정에 연결할 수 없습니다.",
    "To maximize security coverage, include collection of audit logs (Event Hub). This may require additional cloud service provider permissions.":
      "보안 적용 범위를 극대화하려면 감사 로그(Event Hub) 수집을 포함하세요. 추가 클라우드 서비스 공급자 권한이 필요할 수 있습니다.",
    "Verify": "확인",
    "Read more in documentation.": "문서에서 자세히 알아보세요.",
    "Select additional coverage. This may require additional actions in the respected cloud provider destination to establish trust.":
      "추가 적용 범위를 선택하세요. 신뢰 관계를 설정하려면 해당 클라우드 공급자 대상에서 추가 작업이 필요할 수 있습니다.",
    "Send samples to detonation in WildFire. Supported in Registry Scanning.":
      "샘플을 WildFire로 보내 폭파(detonation) 분석합니다. 지원 대상: 레지스트리 스캔.",
    "To maximize security coverage, include collection of audit logs (GCP Pub/Sub). This may require additional cloud service provider permissions.":
      "보안 적용 범위를 극대화하려면 감사 로그(GCP Pub/Sub) 수집을 포함하세요. 추가 클라우드 서비스 공급자 권한이 필요할 수 있습니다.",
    "Delete": "삭제",
    "If you delete it, running authentication templates of this pending instance will not create a valid instance, and will result in unused permissions.":
      "삭제하면 이 보류 중인 인스턴스의 인증 템플릿을 실행해도 유효한 인스턴스가 생성되지 않으며 사용되지 않는 권한이 남게 됩니다.",
    "confirm": "확인",

    // --- External Issues Mapping screen (vendor/product names are proper nouns, left in English) ---
    "Filter Rule": "필터 규칙",
    "Mapping Statistics": "매핑 통계",
    "Rule Origin": "규칙 출처",
    "Vendor Product": "공급업체 제품",
    "( Mapping is disabled )": "( 매핑 사용 안 함 )",

    // --- 데이터 소스 연결 마법사(Google Workspace / Office 365 / 클라우드 제공업체 설명 / 3rd Party AppSec Collector / ANY.RUN) ---
    "About": "소개",
    "Google Workspace productivity and collaboration suite integration for data security, identity monitoring, and compliance":
      "데이터 보안, ID 모니터링, 규정 준수를 위한 Google Workspace 생산성 및 협업 제품군 통합",
    "Name and configure the instance capabilities": "인스턴스 기능의 이름을 지정하고 구성하세요",
    "Enter a unique name for this instance": "이 인스턴스의 고유한 이름을 입력하세요",
    "Select Recommended to use the suggested authentication method for all selected capabilities. Select Advanced to configure your preferred authentication methods separately for each capability":
      "선택한 모든 기능에 권장 인증 방법을 사용하려면 권장을 선택하세요. 기능별로 원하는 인증 방법을 개별적으로 구성하려면 고급을 선택하세요",
    "Enable Office 365 Log Collection": "Office 365 로그 수집 활성화",
    "tenant domain": "테넌트 도메인",
    "Enter domain name": "도메인 이름을 입력하세요",
    "application client id": "애플리케이션 클라이언트 ID",
    "Enter the application client ID": "애플리케이션 클라이언트 ID를 입력하세요",
    "Enter client secret": "클라이언트 암호를 입력하세요",
    "Scan and protect Salesforce data including files, attachments, and records":
      "파일, 첨부 파일, 레코드를 포함한 Salesforce 데이터를 스캔하고 보호합니다",
    "Automate identity lifecycle management including user provisioning, updates, and access control":
      "사용자 프로비저닝, 업데이트, 접근 제어를 포함한 ID 수명주기 관리를 자동화합니다",
    "Maintain visibility and control over SaaS-based identities, including users, groups, roles, and granular permissions.":
      "사용자, 그룹, 역할, 세분화된 권한을 포함한 SaaS 기반 ID에 대한 가시성과 제어를 유지합니다.",
    "Find your domain: Copy the URL from your browser's address bar while logged into Salesforce.":
      "도메인 확인 방법: Salesforce에 로그인한 상태에서 브라우저 주소 표시줄의 URL을 복사하세요.",
    "Domain URL": "도메인 URL",
    "Exiting now will discard all changes. This action cannot be undone.":
      "지금 종료하면 모든 변경 사항이 취소됩니다. 이 작업은 되돌릴 수 없습니다.",
    "Exit": "종료",
    "Collect logs and data from Alibaba Cloud, a leading cloud computing platform.":
      "주요 클라우드 컴퓨팅 플랫폼인 Alibaba Cloud에서 로그와 데이터를 수집합니다.",
    "Collect logs and data from Amazon Web Services (AWS).": "Amazon Web Services(AWS)에서 로그와 데이터를 수집합니다.",
    "Collect logs and data from Google Cloud Platform (GCP).": "Google Cloud Platform(GCP)에서 로그와 데이터를 수집합니다.",
    "Kubernetes automates deployment, scaling, and management of containerized apps. Connect your clusters by deploying Cortex connectors.":
      "Kubernetes는 컨테이너화된 앱의 배포, 확장, 관리를 자동화합니다. Cortex 커넥터를 배포하여 클러스터를 연결하세요.",
    "Collect logs and data from Azure, Microsoft’s cloud computing platform.":
      "Microsoft의 클라우드 컴퓨팅 플랫폼인 Azure에서 로그와 데이터를 수집합니다.",
    "Collects logs and data from Office 365 Management Activity API and Microsoft Graph API.":
      "Office 365 Management Activity API 및 Microsoft Graph API에서 로그와 데이터를 수집합니다.",
    "Collect logs and data from OCI, Oracle’s cloud infrastructure platform.":
      "Oracle의 클라우드 인프라 플랫폼인 OCI에서 로그와 데이터를 수집합니다.",
    "Salesforce CRM services for data security, identity management, automation, remediation and SaaS Posture Security":
      "데이터 보안, ID 관리, 자동화, 복구 및 SaaS 포스처 보안을 위한 Salesforce CRM 서비스",
    "3rd Party AppSec Collector": "제3자 AppSec 수집기",
    "Name your collector": "수집기의 이름을 지정하세요",
    "Test file (optional)": "테스트 파일(선택 사항)",
    "Create your 3rd Party AppSec Collector": "제3자 AppSec 수집기 생성",
    "Ingest SARIF output third-party AppSec tools and unify all scan in one central view (applicable for SAST findings)":
      "제3자 AppSec 도구의 SARIF 출력을 수집하여 모든 스캔을 하나의 중앙 보기로 통합합니다(SAST 결과에 적용)",
    "What do you need to do": "수행해야 할 작업",
    "Name your collector instance.": "수집기 인스턴스의 이름을 지정하세요.",
    "Generate an API key and integrate the provided API key and URL into your chosen process.":
      "API 키를 생성하고 제공된 API 키와 URL을 원하는 프로세스에 통합하세요.",
    "(Optional) Test your SARIF file.": "(선택 사항) SARIF 파일을 테스트하세요.",
    "Use a clear, descriptive name to identify this collector easily.":
      "이 수집기를 쉽게 식별할 수 있도록 명확하고 알아보기 쉬운 이름을 사용하세요.",
    "Generate Your Secure Ingestion API Key": "보안 수집 API 키 생성",
    "Generate an API key to securely send SARIF results to your collector.":
      "SARIF 결과를 수집기로 안전하게 전송하기 위한 API 키를 생성합니다.",
    "Deprecated. Use ANY.RUN TI Feeds, ANY.RUN TI Lookup, ANY.RUN Cloud Sandbox instead.":
      "사용이 중단되었습니다. 대신 ANY.RUN TI Feeds, ANY.RUN TI Lookup, ANY.RUN Cloud Sandbox를 사용하세요.",
    "Server URL": "서버 URL",
    "Partner Contributed Integration": "파트너 제공 통합",
    "Support and maintenance for this integration are provided by the author. Please use the following contact details:":
      "이 통합의 지원 및 유지보수는 작성자가 제공합니다. 다음 연락처 정보를 이용하세요:",
    "How to configure": "구성 방법",
    // NOTE: The 5 "How to configure" steps below render each UI term (Settings, Integrations, Add instance,
    // Username, Password, Test) as its own <strong> element, splitting each step's sentence into several text
    // nodes. A single flat-sentence dictionary entry can never match that (translateText() only ever sees one
    // leaf text node at a time), so each step is instead translated fragment-by-fragment here, relying on the
    // already-existing standalone translations of those bolded terms to fill in the bolded parts. The
    // resulting sentences are necessarily a bit more literal than a hand-written translation (DOM order can't
    // be rearranged to match natural word order), but they are fully localized with no English left over.
    "Navigate to": "이동:",
    // NOTE: the vendor's actual name includes the period ("ANY.RUN"), confirmed from the live page's DOM — a
    // version of this key without the period ("ANYRUN") was tried first based on a hand-copied description and
    // never matched.
    "Search for ANY.RUN.": "ANY.RUN을 검색하세요.",
    "to create and configure a new integration instance.": "하여 새 통합 인스턴스를 생성하고 구성합니다.",
    "If using API Key authentication method, insert the text": "API 키 인증 방식을 사용하는 경우 텍스트",
    "into the": "를",
    "parameter and the API key you have into the": "매개변수에 입력하고, 보유한 API 키를",
    "to validate the URLs, token, and connection.": "하여 URL, 토큰, 연결을 확인합니다.",
    // ANY.RUN's actual steps 4-5 ("Insert ANY.RUN API-KEY into the <strong>Password</strong> parameter." /
    // "Please use "ANY.RUN" as username.") turned out to be simpler than the generic Username+Password
    // instructions above — those apply to some other connector's wizard, not this one. Step 5 has no bolded
    // term, so it's a normal flat-sentence entry; step 4 still needs the fragment treatment since "Password" is
    // bolded.
    "Insert ANY.RUN API-KEY into the": "ANY.RUN API 키를",
    // Generic/short fragment, paired specifically with "Insert ANY.RUN API-KEY into the" above. If a future
    // addition elsewhere needs "parameter." with different phrasing, split this out to a more specific key.
    "parameter.": "매개변수에 입력하세요.",
    "Please use “ANY.RUN” as username.": "사용자 이름으로 “ANY.RUN”을 사용하세요.",
    "View Integration Documentation": "통합 문서 보기",
    "Select Content": "콘텐츠 선택",
    "The selected items will automatically be set up. You can add or edit these items later on.":
      "선택한 항목은 자동으로 설정됩니다. 이 항목은 나중에 추가하거나 편집할 수 있습니다.",
    "Customize": "사용자 지정",
    "Connecting this data source will automatically install and update any required dependencies.":
      "이 데이터 소스를 연결하면 필요한 종속성이 자동으로 설치 및 업데이트됩니다.",
    "Required Dependencies:": "필수 종속성:",

    // --- Additional wording for the ANY.RUN / Generic AppSec collector wizard pages ---
    "Generic AppSec collector to ingest code scan data": "코드 스캔 데이터를 수집하는 범용 AppSec 수집기",
    "ANY.RUN Sandbox is an online interactive sandbox for malware analysis, a tool for detection, monitoring, and research of cyber threats in real time.":
      "ANY.RUN Sandbox는 악성코드 분석을 위한 온라인 대화형 샌드박스로, 사이버 위협을 실시간으로 탐지, 모니터링 및 조사하기 위한 도구입니다.",
    "New Data Source": "새 데이터 소스",
    "Root URL": "루트 URL",
    "This section explains how to configure the instance of ANY.RUN Cloud Sandbox in Cortex.":
      "이 섹션에서는 Cortex에서 ANY.RUN Cloud Sandbox 인스턴스를 구성하는 방법을 설명합니다.",
    "API-KEY from your ANY.RUN account is required.": "ANY.RUN 계정의 API 키가 필요합니다.",

    // --- ARIA Packet Intelligence (partner-contributed integration) instance setup page ---
    "The ARIA Cybesecurity Solutions Software-Defined Security (SDS) platform integrates with Cortex to add robustness when responding to incidents. The combination of ARIA hardware, in the form of a Secure Intelligent Adapter (SIA), and software, specifically Packet Intelligence and SDS orchestrator (SDSo), provides the elements required to react instantly when an incident is detected. When integrated with the ARIA solution, you can create playbooks that instruct one or more SIAs to add, modify, or delete rules automatically. These rule changes, which take effect immediately, can block conversations, redirect packets to a recorder or VLAN, or perform a variety of other actions.":
      "ARIA Cybersecurity Solutions의 Software-Defined Security(SDS) 플랫폼은 Cortex와 통합되어 인시던트 대응 시 견고성을 높여 줍니다. ARIA 하드웨어(Secure Intelligent Adapter(SIA))와 소프트웨어(구체적으로 Packet Intelligence 및 SDS 오케스트레이터(SDSo))를 결합하면 인시던트가 탐지되었을 때 즉시 대응하는 데 필요한 요소를 제공합니다. ARIA 솔루션과 통합하면 하나 이상의 SIA에 규칙을 자동으로 추가, 수정 또는 삭제하도록 지시하는 Playbook을 만들 수 있습니다. 이러한 규칙 변경은 즉시 적용되며 통신을 차단하거나, 패킷을 레코더 또는 VLAN으로 리디렉션하거나, 그 밖의 다양한 작업을 수행할 수 있습니다.",
    "Name should be unique, this name is taken":
      "이름은 고유해야 합니다. 이 이름은 이미 사용 중입니다",
    "SDSo Base URL (e.g. http://<IP address or FQDN of SDSo Node>:7443)":
      "SDSo 기본 URL(예: http://<IP address or FQDN of SDSo Node>:7443)",
    "Single engine:":
      "단일 엔진:",
    "Users should install SDSo onto a server according to the instructions in Software-Defined Security Installation Guide. During the installation process you can determine the IP address or FQDN of your SDSo instance which is used in the SDSo Base URL. You should also install an SIA according to the Secure Intelligent Adapter Installation Guide. For more information on connecting an SDSo and SIA see the Software-Defined Security Orchestrator User Guide. In addition, you must deploy the PI security service to your SIA, see the Packet Intelligence User Guide for more information.":
      "사용자는 Software-Defined Security Installation Guide의 지침에 따라 서버에 SDSo를 설치해야 합니다. 설치 과정에서 SDSo 기본 URL에 사용되는 SDSo 인스턴스의 IP 주소 또는 FQDN을 확인할 수 있습니다. 또한 Secure Intelligent Adapter Installation Guide에 따라 SIA를 설치해야 합니다. SDSo와 SIA 연결에 대한 자세한 내용은 Software-Defined Security Orchestrator User Guide를 참조하세요. 또한 PI 보안 서비스를 SIA에 배포해야 하며, 자세한 내용은 Packet Intelligence User Guide를 참조하세요.",
    "No recommendations are available":
      "사용 가능한 추천 항목이 없습니다",

    // --- AWS - EC2 integration instance setup page ---
    // NOTE: the trailing link text "AWS Integrations - Authentication" is a doc title and is intentionally left in English.
    "Amazon Web Services Elastic Compute Cloud (EC2).":
      "Amazon Web Services Elastic Compute Cloud(EC2).",
    "Switch to credentials":
      "자격 증명으로 전환",
    "Secret Key":
      "시크릿 키",
    "AWS STS Regional Endpoints":
      "AWS STS 리전 엔드포인트",
    "Before you can use AWS EC2, you need to perform several configuration steps in your AWS environment.":
      "AWS EC2를 사용하려면 AWS 환경에서 몇 가지 구성 단계를 수행해야 합니다.",
    "Prerequisites":
      "사전 요구 사항",
    "Attach an instance profile with the required permissions to the Cortex server or engine that is running on your AWS environment.":
      "필요한 권한이 있는 인스턴스 프로파일을 AWS 환경에서 실행 중인 Cortex 서버 또는 엔진에 연결하세요.",
    "Instance profile requires minimum permission: sts:AssumeRole.":
      "인스턴스 프로파일에는 최소 권한으로 sts:AssumeRole이 필요합니다.",
    "Instance profile requires permission to assume the roles needed by the AWS integrations.":
      "인스턴스 프로파일에는 AWS 통합에 필요한 역할을 맡을 수 있는 권한이 필요합니다.",
    "Configure AWS Settings":
      "AWS 설정 구성",
    "Create an IAM Role for the Instance Profile.":
      "인스턴스 프로파일용 IAM 역할을 생성하세요.",
    "Attach a Role to the Instance Profile.":
      "인스턴스 프로파일에 역할을 연결하세요.",
    "Configure the Necessary IAM Roles that the AWS Integration Can Assume.":
      "AWS 통합이 맡을 수 있는 필요한 IAM 역할을 구성하세요.",
    "For detailed instructions, see the":
      "자세한 지침은 다음을 참조하세요:",

    // --- AWS - IAM (user lifecycle management) integration instance setup page ---
    "Integrate with AWS's services to execute CRUD and Group operations for employee lifecycle processes.":
      "AWS 서비스와 통합하여 직원 라이프사이클 프로세스를 위한 CRUD 및 그룹 작업을 실행합니다.",
    "Base URL":
      "기본 URL",
    "Authentication Token":
      "인증 토큰",
    "Allow creating users":
      "사용자 생성 허용",
    "Allow updating users":
      "사용자 업데이트 허용",
    "Allow enabling users":
      "사용자 활성화 허용",
    "Allow disabling users":
      "사용자 비활성화 허용",
    "Automatically create user if not found in update command":
      "업데이트 명령에서 사용자를 찾을 수 없는 경우 자동으로 사용자 생성",
    "Incoming Mapper":
      "수신 매퍼",

    // --- AWS - Identity and Access Management integration instance setup page ---
    "Amazon Web Services Identity and Access Management (IAM).":
      "Amazon Web Services Identity and Access Management(IAM).",
    "Role Session Name":
      "역할 세션 이름",

    // --- AWS CodeBuild data-source wizard (Step 1: Add Environment Variables) ---
    "Add Environment Variables":
      "환경 변수 추가",
    "Configure Subscription":
      "구독 구성",
    "Before you begin, you'll need to add your API key and API ID to your AWS Secrets Manager. Please copy and use the secret names suggested below as the secret keys. If needed, you can generate a new token using the link below, copy and use the generated values as your secrets values.":
      "시작하기 전에 AWS Secrets Manager에 API 키와 API ID를 추가해야 합니다. 아래에 제안된 시크릿 이름을 시크릿 키로 복사하여 사용하세요. 필요한 경우 아래 링크를 사용하여 새 토큰을 생성하고, 생성된 값을 시크릿 값으로 복사하여 사용할 수 있습니다.",
    "Create the following secrets on your AWS Secrets Manager. Ensure that the IAM service role associated with your CodeBuild project has the necessary permissions to read the Cortex API key and key ID from AWS Secrets Manager.":
      "AWS Secrets Manager에서 다음 시크릿을 생성하세요. CodeBuild 프로젝트에 연결된 IAM 서비스 역할에 AWS Secrets Manager에서 Cortex API 키와 키 ID를 읽는 데 필요한 권한이 있는지 확인하세요.",
    "Choose the architecture your CI tool runs on:":
      "CI 도구가 실행되는 아키텍처를 선택하세요:",
    "Select architecture":
      "아키텍처 선택",

    // --- AWS CodeCommit data-source wizard ---
    // NOTE: the steps below are split by <b>/<button> into several text nodes, so each sentence is translated
    // fragment-by-fragment (DOM order is fixed). AWS console labels / CloudFormation parameter names inside the
    // bold elements (e.g. "CloudFormation > Stacks", "Resource Name Prefix:", "Select Repositories") are left in English.
    "This integration enables you to effectively detect, analyze and remediate security issues.":
      "이 통합을 통해 보안 문제를 효과적으로 탐지, 분석 및 해결할 수 있습니다.",
    "Download the":
      "다음 항목 다운로드:",
    "CloudFormation template":
      "CloudFormation 템플릿",
    ", alternatively, copy the link and send it to your administrator for the next steps.":
      ". 또는 링크를 복사하여 관리자에게 보내 다음 단계를 진행하도록 요청하세요.",
    "In your AWS console, navigate to":
      "AWS 콘솔에서 다음으로 이동하세요:",
    "Click on":
      "그런 다음 다음을 클릭하세요:",
    ". Upload the template file and hit next. Provide the stack name. Note that the following parameters will be pre populated:":
      ". 템플릿 파일을 업로드하고 Next를 클릭하세요. 스택 이름을 입력하세요. 다음 매개변수는 미리 채워져 있습니다:",
    "You can modify the default value.":
      "기본값을 수정할 수 있습니다.",
    "DO NOT change this ID.":
      "이 ID는 변경하지 마세요.",
    "After the stack is created, navigate to":
      "스택이 생성된 후 다음으로 이동하세요:",
    ", and verify that the integration is displayed.":
      ". 통합이 표시되는지 확인하세요.",
    "Select Repositories: In the":
      "리포지토리 선택: 통합을 완료하려면",
    "menu choose":
      "메뉴에서",
    "to complete the integration.":
      "를 선택하세요.",

    // --- AbuseIPDB integration instance setup page ---
    // NOTE: the "A+ ... F" source-reliability scale is the standard option list of the "Source Reliability" dropdown shared by many integrations.
    "Central repository to report and identify IP addresses that have been associated with malicious activity online. Check the Detailed Information section for more information on how to configure the integration.":
      "온라인에서 악의적인 활동과 연관된 IP 주소를 신고하고 식별하기 위한 중앙 저장소입니다. 통합 구성 방법에 대한 자세한 내용은 상세 정보 섹션을 확인하세요.",
    "AbuseIP server URL":
      "AbuseIP 서버 URL",
    "API Key (v2)":
      "API 키(v2)",
    "Abuse.ch Hunting API URL":
      "Abuse.ch Hunting API URL",
    "Abuse.ch Hunting API Key":
      "Abuse.ch Hunting API 키",
    "Collect":
      "수집",
    "Source Reliability":
      "소스 신뢰도",
    "A+ - 3rd party enrichment":
      "A+ - 서드파티 보강",
    "A - Completely reliable":
      "A - 완전히 신뢰할 수 있음",
    "B - Usually reliable":
      "B - 대체로 신뢰할 수 있음",
    "C - Fairly reliable":
      "C - 어느 정도 신뢰할 수 있음",
    "D - Not usually reliable":
      "D - 대체로 신뢰할 수 없음",
    "E - Unreliable":
      "E - 신뢰할 수 없음",
    "F - Reliability cannot be judged":
      "F - 신뢰도를 판단할 수 없음",
    "Disable reputation lookups for private IP addresses":
      "사설 IP 주소에 대한 평판 조회 비활성화",
    "Minimum score threshold":
      "최소 점수 임계값",
    "Minimum score from AbuseIPDB for the IP to be considered malicious. (Must be above 20).":
      "IP가 악성으로 간주되기 위한 AbuseIPDB의 최소 점수입니다. (20보다 커야 합니다).",
    "Searching an entire subnet far back in time (e.g. Days=365) will likely cause a server timeout, and you will receive a 500 Internal Server Error response from AbuseIPDB server.":
      "서브넷 전체를 아주 오래 전까지 검색하면(예: Days=365) 서버 시간 초과가 발생할 가능성이 높으며, AbuseIPDB 서버에서 500 Internal Server Error 응답을 받게 됩니다.",
    "Report Categories":
      "신고 카테고리",
    "Selected items were set up on first connection. You can change these items via the original pages.":
      "선택한 항목은 첫 연결 시 설정되었습니다. 원래 페이지에서 이러한 항목을 변경할 수 있습니다.",

    // --- Active Directory Query (deprecated) integration instance setup page ---
    "Deprecated. Use the Active Directory Query v2 integration instead.":
      "더 이상 사용되지 않습니다. 대신 Active Directory Query v2 통합을 사용하세요.",
    "Server IP (e.g. 192.168.0.1)":
      "서버 IP(예: 192.168.0.1)",
    "Base DN (e.g. DC=domain,DC=com)":
      "기본 DN(예: DC=domain,DC=com)",
    "Security Type (none/ssl/tls)":
      "보안 유형(none/ssl/tls)",
    "Page Size":
      "페이지 크기",
    "Do not validate server certificate (insecure)":
      "서버 인증서 검증 안 함(안전하지 않음)",
    "Full path for CA certificate of Active Directory server (type pem)":
      "Active Directory 서버 CA 인증서의 전체 경로(pem 형식)",
    "There are no additional instructions for this integration.":
      "이 통합에는 추가 지침이 없습니다.",

    // --- Active Directory Query v2 integration instance setup page ---
    "The Active Directory Query integration enables you to access and manage Active Directory objects (users, contacts, and computers).":
      "Active Directory Query 통합을 통해 Active Directory 개체(사용자, 연락처, 컴퓨터)에 액세스하고 관리할 수 있습니다.",
    "Server IP address (for example, 192.168.0.1)":
      "서버 IP 주소(예: 192.168.0.1)",
    "Base DN (for example \"dc=company,dc=com\")":
      "기본 DN(예: \"dc=company,dc=com\")",
    "Secure Connection":
      "보안 연결",
    "Outgoing Mapper":
      "발신 매퍼",
    "Group CN for terminated employees":
      "퇴사한 직원의 그룹 CN",
    "Active Directory search uses paging. You set the page size by specifying the ‘page size’ parameter in the instance settings.":
      "Active Directory 검색은 페이징을 사용합니다. 인스턴스 설정에서 '페이지 크기' 매개변수를 지정하여 페이지 크기를 설정합니다.",

    // --- Agari Phishing Defense (Partner Contribution) integration instance setup page ---
    // NOTE: the docs sentences are split by inline links into several text nodes, so they are translated
    // fragment-by-fragment ("Quick Start", "this", "page." etc. are link texts / sentence tails).
    "Agari Phishing Defense stops phishing, BEC, and other identity deception attacks that trick employees into harming your business.":
      "Agari Phishing Defense는 직원을 속여 비즈니스에 피해를 입히는 피싱, BEC 및 기타 신원 위장 공격을 차단합니다.",
    "URL to connect to Agari":
      "Agari에 연결하기 위한 URL",
    "API Key":
      "API 키",
    "Fetches issues":
      "이슈 가져오기",
    "Maximum number of incidents to fetch every time":
      "매번 가져올 최대 인시던트 수",
    "First fetch time interval":
      "첫 번째 가져오기 시간 간격",
    "Policy action taken":
      "수행된 정책 조치",
    "Exclude alerts":
      "경고 제외",
    "System Alert":
      "시스템 경고",
    "Fetches policy events as per the filter to limit the amount of data. Can be applied to specific fields.":
      "데이터 양을 제한하기 위해 필터에 따라 정책 이벤트를 가져옵니다. 특정 필드에 적용할 수 있습니다.",
    "To use this integration, simply follow the":
      "이 통합을 사용하려면",
    "Quick Start":
      "빠른 시작",
    "steps to enable API access.":
      "단계를 따라 API 액세스를 활성화하세요.",
    "Contact us":
      "문의하기",
    "if you don’t have an Agari account.":
      "(Agari 계정이 없는 경우).",
    "Syntax to filter policy events":
      "정책 이벤트를 필터링하는 구문",
    "To filter by applying the valid syntax you can refer to":
      "유효한 구문을 적용하여 필터링하려면",
    "this":
      "이",
    "page.":
      "페이지를 참조하세요.",

    // --- Akamai WAF integration instance setup page ---
    // NOTE: the link text "Akamai Control Panel" (product console name) is intentionally left in English.
    "Use the Akamai WAF integration to manage common sets of lists used by various Akamai security products and features. This is the modified version where a new command \"akamai-update-network-list-elements\" was added by the SA.":
      "Akamai WAF 통합을 사용하여 다양한 Akamai 보안 제품 및 기능에서 사용하는 공통 목록 집합을 관리합니다. 이 버전은 SA가 새 명령 \"akamai-update-network-list-elements\"를 추가한 수정 버전입니다.",
    "Server URL (e.g., https://example.net)":
      "서버 URL(예: https://example.net)",
    "Client token":
      "클라이언트 토큰",
    "Access token":
      "액세스 토큰",
    "Client secret":
      "클라이언트 시크릿",
    "The Network Lists API enables you to manage a common set of lists for use in various Akamai security products such as Kona Site Defender, Web App Protector, and Bot Manager. Network lists are shared sets of IP addresses, CIDR blocks, or broad geographic areas. In addition to managing your own lists, you can also access read-only lists that Akamai dynamically updates for you.":
      "Network Lists API를 사용하면 Kona Site Defender, Web App Protector, Bot Manager와 같은 다양한 Akamai 보안 제품에서 사용할 공통 목록 집합을 관리할 수 있습니다. 네트워크 목록은 IP 주소, CIDR 블록 또는 광범위한 지리적 영역의 공유 집합입니다. 자체 목록을 관리하는 것 외에도 Akamai가 동적으로 업데이트하는 읽기 전용 목록에 액세스할 수도 있습니다.",
    "To generate API keys go to the":
      "API 키를 생성하려면 다음으로 이동하세요:",
    ". For detailed instructions, see the integration documention.":
      ". 자세한 지침은 통합 문서를 참조하세요.",

    // --- Analyst1 (Partner Contribution) integration instance setup page ---
    // NOTE: the docs lists/sentences are split by <b>/<code> into several text nodes, so they are translated
    // fragment-by-fragment. The lone connectors "and" / "or" / "to" between bold items are intentionally NOT registered
    // (too generic: they would also hit AND/OR/To labels elsewhere via the case-insensitive fallback) and stay in English.
    "This integration utilizes Analyst1's system to enrich XSOAR indicators with data provided by the Analyst1 REST API, such as actor and malware information, activity and reported dates, evidence and hit counts, and more.":
      "이 통합은 Analyst1 시스템을 활용하여 Analyst1 REST API에서 제공하는 데이터(행위자 및 악성코드 정보, 활동일 및 보고일, 증거 및 적중 횟수 등)로 XSOAR 지표를 보강합니다.",
    "Basic Authentication":
      "기본 인증",
    "Client ID/Username":
      "클라이언트 ID/사용자 이름",
    "Client Secret/Password":
      "클라이언트 시크릿/비밀번호",
    "Domain of Analyst1 server to use":
      "사용할 Analyst1 서버의 도메인",
    "Log Level:":
      "로그 수준:",
    "Off":
      "끄기",
    "Do not use in CLI by default":
      "기본적으로 CLI에서 사용하지 않음",
    "Risk Score Mapping: Lowest":
      "위험 점수 매핑: 최저",
    "Benign":
      "무해",
    "Risk Score Mapping: Low":
      "위험 점수 매핑: 낮음",
    "Risk Score Mapping: Moderate":
      "위험 점수 매핑: 중간",
    "Suspicious":
      "의심스러움",
    "Risk Score Mapping: High":
      "위험 점수 매핑: 높음",
    "Risk Score Mapping: Critical":
      "위험 점수 매핑: 심각",
    "Risk Score Mapping: Unknown":
      "위험 점수 매핑: 알 수 없음",
    "Apply Analyst1 entity-type tags to indicators":
      "Analyst1 엔터티 유형 태그를 지표에 적용",
    "Indicator Expiration Method":
      "지표 만료 방법",
    "Indicator Type":
      "지표 유형",
    "Analyst1 Integration Configuration":
      "Analyst1 통합 구성",
    "This integration connects XSOAR to the Analyst1 threat intelligence platform to enrich indicators and manage sensor taskings.":
      "이 통합은 XSOAR를 Analyst1 위협 인텔리전스 플랫폼에 연결하여 지표를 보강하고 센서 작업을 관리합니다.",
    "Configuration Parameters":
      "구성 매개변수",
    "Server Configuration":
      "서버 구성",
    "Domain of Analyst1 server":
      "Analyst1 서버의 도메인",
    ": Enter your Analyst1 server domain in the format":
      ": 다음 형식으로 Analyst1 서버 도메인을 입력하세요:",
    "Do not include":
      "다음은 포함하지 마세요:",
    "This integration supports two authentication methods. Select one via the":
      "이 통합은 두 가지 인증 방법을 지원합니다. 다음",
    "dropdown.":
      "드롭다운에서 하나를 선택하세요.",
    "Basic Authentication (default)":
      "기본 인증(기본값)",
    "Enter the":
      "다음을 입력하세요:",
    "for an Analyst1 account that has the REST role assigned.":
      "(REST 역할이 할당된 Analyst1 계정의 것).",
    "In Analyst1, create (or open) an API Key.":
      "Analyst1에서 API 키를 생성(또는 열기)하세요.",
    "Copy the":
      "다음을 복사하세요:",
    "Client ID":
      "클라이언트 ID",
    "from the API Key.":
      "(API 키에서).",
    "In XSOAR, set":
      "XSOAR에서 다음을 설정하세요:",
    "Enter the Client ID in the":
      "클라이언트 ID를 다음",
    "field and the Client Secret in the":
      "필드에, 클라이언트 시크릿을 다음",
    "field.":
      "필드에 입력하세요.",
    "Risk Score Mapping (Optional)":
      "위험 점수 매핑(선택 사항)",
    "The integration includes configurable risk score mapping parameters that control how Analyst1 risk scores map to XSOAR verdicts:":
      "이 통합에는 Analyst1 위험 점수를 XSOAR 판정에 매핑하는 방식을 제어하는 구성 가능한 위험 점수 매핑 매개변수가 포함되어 있습니다:",
    "Lowest":
      "최저",
    ": Default mapping is Benign":
      ": 기본 매핑은 무해",
    ": Default mapping is Unknown":
      ": 기본 매핑은 알 수 없음",
    "Moderate":
      "중간",
    ": Default mapping is Suspicious":
      ": 기본 매핑은 의심스러움",
    ": Default mapping is Malicious":
      ": 기본 매핑은 악성",
    "These can be customized based on your organization’s risk tolerance and threat response procedures.":
      "이러한 설정은 조직의 위험 허용 수준과 위협 대응 절차에 따라 사용자 지정할 수 있습니다.",
    "Entity Type Tags (Optional)":
      "엔터티 유형 태그(선택 사항)",
    "Enable “Apply Analyst1 entity-type tags to indicators” to automatically tag indicators with Analyst1 entity classifications such as:":
      "“Analyst1 엔터티 유형 태그를 지표에 적용”을 활성화하면 다음과 같은 Analyst1 엔터티 분류로 지표에 자동으로 태그가 지정됩니다:",
    "For assistance with this integration, contact Analyst1 support:":
      "이 통합에 대한 지원이 필요하면 Analyst1 지원팀에 문의하세요:",

    // --- Anomali Security Analytics Alerts (Partner Contribution) integration instance setup page ---
    // NOTE: the product title, support email and URL are intentionally left in English.
    "The Anomali Security Analytics pack allows users to manage security alerts by interacting directly with the Anomali Security Analytics platform. It supports creating search jobs, monitoring their status, retrieving results, and updating alert statuses or comments, streamlining integration with Palo Alto XSOAR.":
      "Anomali Security Analytics 팩을 사용하면 Anomali Security Analytics 플랫폼과 직접 상호 작용하여 보안 경고를 관리할 수 있습니다. 검색 작업 생성, 상태 모니터링, 결과 검색, 경고 상태 또는 댓글 업데이트를 지원하여 Palo Alto XSOAR와의 통합을 간소화합니다.",
    "Switch to username and password":
      "사용자 이름과 비밀번호로 전환",
    "(Username, API Key)":
      "(사용자 이름, API 키)",
    "No credentials":
      "자격 증명 없음",
    "Fetch query":
      "가져오기 쿼리",
    "Maximum incidents to fetch.":
      "가져올 최대 인시던트 수입니다.",
    "First fetch time":
      "첫 번째 가져오기 시간",
    "Incidents Fetch Interval":
      "인시던트 가져오기 간격",
    "To access Anomali Security Analysis Alerts using the API, you must obtain an API key from your Anomali Security Analytics account. Please refer to the Anomali documentation or contact your administrator to get the API credentials. Once obtained, configure the integration by entering the API key in the integration setup page.":
      "API를 사용하여 Anomali Security Analysis Alerts에 액세스하려면 Anomali Security Analytics 계정에서 API 키를 발급받아야 합니다. API 자격 증명을 얻는 방법은 Anomali 문서를 참조하거나 관리자에게 문의하세요. 발급받은 후 통합 설정 페이지에서 API 키를 입력하여 통합을 구성하세요.",

    // --- Anomali ThreatStream (Deprecated) integration instance setup page ---
    // NOTE: the product title is intentionally left in English.
    "Deprecated. Use Anomali ThreatStream v3 instead. Use Anomali ThreatStream to query and submit threats":
      "더 이상 사용되지 않습니다. 대신 Anomali ThreatStream v3를 사용하세요. Anomali ThreatStream을 사용하여 위협을 쿼리하고 제출합니다",
    "Server URL (e.g. https://192.168.0.1)":
      "서버 URL(예: https://192.168.0.1)",

    // --- Anomali ThreatStream Feed integration instance setup page ---
    // NOTE: the product title and the doc URL are intentionally left in English. The last key is the text node before the
    // <a> link ("register at <link>."), so its translation has no trailing punctuation (the "." after the link is a separate node).
    "Use the Anomali ThreatStream Feed Integration to fetch indicators from the Anomali ThreatStream.":
      "Anomali ThreatStream Feed 통합을 사용하여 Anomali ThreatStream에서 지표를 가져옵니다.",
    "Server URL (e.g., https://www.test.com)":
      "서버 URL(예: https://www.test.com)",
    "Fetches indicators":
      "지표 가져오기",
    "Classifier":
      "분류기",
    "Mapper (incoming)":
      "매퍼(수신)",
    "Fetch by":
      "가져오기 기준",
    "Modified Time":
      "수정 시간",
    "Feed Fetch Interval":
      "피드 가져오기 간격",
    "Anomali ThreatStream Feed Integration Help":
      "Anomali ThreatStream Feed 통합 도움말",
    "Anomali ThreatStream is a leading threat intelligence platform designed to help organizations collect, analyze, and act on vast amounts of threat data. This integration allows you to automatically fetch Indicators of Compromise (IOCs) such as IPs, domains, URLs, and file hashes directly into your security operations platform, enhancing your ability to detect and respond to cyber threats.":
      "Anomali ThreatStream은 조직이 방대한 위협 데이터를 수집, 분석하고 이에 대응할 수 있도록 설계된 선도적인 위협 인텔리전스 플랫폼입니다. 이 통합을 사용하면 IP, 도메인, URL, 파일 해시와 같은 침해 지표(IOC)를 보안 운영 플랫폼으로 자동으로 가져올 수 있어 사이버 위협을 탐지하고 대응하는 능력이 향상됩니다.",
    "How to Configure Your Integration":
      "통합 구성 방법",
    "API Key: Paste the API key you retrieved from your Anomali ThreatStream account into this field. To access ThreatStream using the API, you need a user ID and API key. To get these credentials, register at":
      "API 키: Anomali ThreatStream 계정에서 가져온 API 키를 이 필드에 붙여 넣으세요. API를 사용하여 ThreatStream에 액세스하려면 사용자 ID와 API 키가 필요합니다. 이러한 자격 증명을 얻으려면 다음 주소에서 등록하세요",

    // --- Anomali ThreatStream Feed: additions (per-sentence halves of the two docs paragraphs, in case the paragraph is split
    // into separate text nodes at the line break; plus title/data-tooltip attribute strings: tooltips, "Go to ..." button, clear icon) ---
    "Anomali ThreatStream is a leading threat intelligence platform designed to help organizations collect, analyze, and act on vast amounts of threat data.":
      "Anomali ThreatStream은 조직이 방대한 위협 데이터를 수집, 분석하고 이에 대응할 수 있도록 설계된 선도적인 위협 인텔리전스 플랫폼입니다.",
    "This integration allows you to automatically fetch Indicators of Compromise (IOCs) such as IPs, domains, URLs, and file hashes directly into your security operations platform, enhancing your ability to detect and respond to cyber threats.":
      "이 통합을 사용하면 IP, 도메인, URL, 파일 해시와 같은 침해 지표(IOC)를 보안 운영 플랫폼으로 자동으로 가져올 수 있어 사이버 위협을 탐지하고 대응하는 능력이 향상됩니다.",
    "API Key: Paste the API key you retrieved from your Anomali ThreatStream account into this field.":
      "API 키: Anomali ThreatStream 계정에서 가져온 API 키를 이 필드에 붙여 넣으세요.",
    "To access ThreatStream using the API, you need a user ID and API key. To get these credentials, register at":
      "API를 사용하여 ThreatStream에 액세스하려면 사용자 ID와 API 키가 필요합니다. 이러한 자격 증명을 얻으려면 다음 주소에서 등록하세요",
    "Classifier determines the type of issue that is created for events ingested from this integration instance.":
      "분류기는 이 통합 인스턴스에서 수집된 이벤트에 대해 생성되는 이슈의 유형을 결정합니다.",
    "Mapping determines how event fields are mapped to the Cortex CLOUD issue's fields.":
      "매핑은 이벤트 필드를 Cortex CLOUD 이슈의 필드에 매핑하는 방식을 결정합니다.",
    "Go to Classification & Mapping page":
      "분류 및 매핑 페이지로 이동",
    "Cancel Selection":
      "선택 취소",

    // --- Anomali ThreatStream v2 (Deprecated) integration instance setup page ---
    // NOTE: the product title is intentionally left in English. The docs paragraph is already registered (ThreatStream Feed page).
    "Deprecated. Use Anomali ThreatStream v3 integration instead.":
      "더 이상 사용되지 않습니다. 대신 Anomali ThreatStream v3 통합을 사용하세요.",
    "Threshold of the indicator.":
      "지표의 임계값입니다.",

    // --- Anomali ThreatStream v3 integration instance setup page ---
    // NOTE: product title / doc h1 / URL are intentionally left in English. The docs paragraph is split by inline <span>s and by line
    // breaks, so it is registered line-by-line and fragment-by-fragment ("If the indicator" + "confidence" + "...").
    // "confidence" is a generic one-word key: the case-insensitive fallback will also translate a standalone "Confidence" elsewhere.
    "Use Anomali ThreatStream to query and submit threats.":
      "Anomali ThreatStream을 사용하여 위협을 쿼리하고 제출합니다.",
    "Default DBOT score for indicators with low confidence":
      "신뢰도가 낮은 지표의 기본 DBOT 점수",
    "Remote API":
      "원격 API",
    "URL threshold":
      "URL 임계값",
    "IP threshold":
      "IP 임계값",
    "Domain threshold":
      "도메인 임계값",
    "File threshold":
      "파일 임계값",
    "Email threshold":
      "이메일 임계값",
    "Include inactive results":
      "비활성 결과 포함",
    "Create relationships":
      "관계 생성",
    "Configure Indicator Threshold Parameters":
      "지표 임계값 매개변수 구성",
    "Each indicator has a threshold parameter that impacts the indicator’s DBotScore calculation.":
      "각 지표에는 지표의 DBotScore 계산에 영향을 주는 임계값 매개변수가 있습니다.",
    "The indicator DBotScore is calculated based on the threshold parameter as follows:":
      "지표 DBotScore는 임계값 매개변수에 따라 다음과 같이 계산됩니다.",
    "If the indicator":
      "지표의",
    "confidence":
      "신뢰도",
    "value is above the threshold parameter value, the Score is set to 3 (Malicious)":
      "값이 임계값 매개변수 값보다 높으면 점수가 3(악성)으로 설정됩니다",
    "Otherwise the DBotScore is set to 1 (Good).":
      "그렇지 않으면 DBotScore가 1(양호)로 설정됩니다.",
    "If the threshold parameter value is not specified, the DBotScore is calculated as follows:":
      "임계값 매개변수 값이 지정되지 않은 경우 DBotScore는 다음과 같이 계산됩니다.",
    "> 65, the DBotScore value is set to 3 (Malicious).":
      "이(가) 65보다 크면 DBotScore 값이 3(악성)으로 설정됩니다.",
    "is between 25 and 65, the DBotScore value is set to 2 (Suspicious).":
      "이(가) 25에서 65 사이이면 DBotScore 값이 2(의심)로 설정됩니다.",
    "< 25, the DBotScore value is set to 1 (Good).":
      "이(가) 25보다 작으면 DBotScore 값이 1(양호)로 설정됩니다.",

    // --- Batch: strings reported as still untranslated (user list) + Apollo.io SSPM connector wizard ---
    // NOTE: multi-line doc paragraphs (AbuseIPDB / Akamai) are registered LINE-BY-LINE here in addition to the joined forms above,
    // because the live DOM exposes them as separate lines/text nodes; each line translation concatenates naturally.
    // "Previous" is a generic one-word key (also reached through the case-insensitive fallback).
    "TI Lookup is a searchable database of IOCs, IOAs, IOBs, and events for threat hunting and a service for browsing malicious files by their content.":
      "TI Lookup은 위협 헌팅을 위한 IOC, IOA, IOB 및 이벤트의 검색 가능한 데이터베이스이자 악성 파일을 콘텐츠별로 탐색하는 서비스입니다.",
    "You have unsaved changes.":
      "저장되지 않은 변경 사항이 있습니다.",
    "Are you sure you want to leave?":
      "페이지를 나가시겠습니까?",
    "Previous":
      "이전",
    "Use the following sample as a reference for buildspec.yaml configuration:":
      "buildspec.yaml 구성의 참고용으로 다음 샘플을 사용하세요:",
    "Integrate Application Security with your AWS CodeBuild to gain comprehensive visibility into your CodeBuild platform.":
      "Application Security를 AWS CodeBuild와 통합하여 CodeBuild 플랫폼에 대한 포괄적인 가시성을 확보하세요.",
    "Integrate Application Security with your AWS CodeCommit to gain comprehensive visibility into your CodeCommit platform.":
      "Application Security를 AWS CodeCommit과 통합하여 CodeCommit 플랫폼에 대한 포괄적인 가시성을 확보하세요.",
    "Searching an entire subnet far back in time (e.g. Days=365) will likely cause a server timeout,":
      "전체 서브넷을 아주 먼 과거까지 검색하면(예: Days=365) 서버 시간 초과가 발생할 가능성이 높으며,",
    "and you will receive a 500 Internal Server Error response from AbuseIPDB server.":
      "AbuseIPDB 서버에서 500 Internal Server Error 응답을 받게 됩니다.",
    "The Network Lists API enables you to manage a common set of lists for use in various Akamai security products such as":
      "Network Lists API를 사용하면 다양한 Akamai 보안 제품에서 사용하는 공통 목록 집합을 관리할 수 있습니다. 해당 제품은 다음과 같습니다:",
    "Kona Site Defender, Web App Protector, and Bot Manager.":
      "Kona Site Defender, Web App Protector, Bot Manager.",
    "Network lists are shared sets of IP addresses, CIDR blocks, or broad geographic areas. In addition to managing your":
      "네트워크 목록은 IP 주소, CIDR 블록 또는 광범위한 지리적 영역의 공유 집합입니다. 사용자 고유의 목록을 관리하는 것 외에도",
    "own lists, you can also access read-only lists that Akamai dynamically updates for you.":
      "Akamai가 동적으로 업데이트하는 읽기 전용 목록에도 액세스할 수 있습니다.",
    "Collects generic data from Amazon Simple Storage Service (Amazon S3).":
      "범용 데이터를 Amazon Simple Storage Service(Amazon S3)에서 수집합니다.",
    "There are some unsaved changes":
      "저장되지 않은 변경 사항이 있습니다",
    "Are you sure you want to close this window?":
      "이 창을 닫으시겠습니까?",
    "No, take me back":
      "아니요, 돌아가기",
    "Yes, I am sure":
      "예, 확실합니다",
    "To access ThreatStream using the API, you need a user ID and API key. To get these credentials, register at http://ui.threatstream.com.":
      "API를 사용하여 ThreatStream에 액세스하려면 사용자 ID와 API 키가 필요합니다. 이러한 자격 증명을 얻으려면 다음 주소에서 등록하세요 http://ui.threatstream.com.",
    "Confidence Threshold":
      "신뢰도 임계값",
    "Detect, monitor and alert on settings of your SaaS application.":
      "SaaS 애플리케이션의 설정을 탐지, 모니터링하고 경고합니다.",
    "Instance URL":
      "인스턴스 URL",
    "Security Posture":
      "보안 태세",
    "The Apollo.io API base URL. This is typically https://api.apollo.io for all accounts.":
      "Apollo.io API 기본 URL입니다. 일반적으로 모든 계정에서 https://api.apollo.io입니다.",
    "Your Apollo.io API key. Navigate to Settings → Integrations → API in your Apollo.io account to generate one. SSPM requires this key to authenticate to the Apollo.io API.":
      "Apollo.io API 키입니다. Apollo.io 계정에서 설정 → 통합 → API로 이동하여 생성하세요. SSPM이 Apollo.io API에 인증하려면 이 키가 필요합니다.",

    // --- Batch: strings from the Collector export (Jira / Asimily Insight docs, marketplace card descriptions, SVG icon titles) ---
    // Fragments (", found on ...", ": Enable to ...", "Leave the" etc.) are registered as-is because the live DOM splits sentences at inline elements.
    // Jira terminology follows Jira own localisation (ja 課題 / es incidencias / fr tickets / de Vorgänge); Cortex "incident" keeps the Cortex term.
    "- Enter the API token. To generate an API token, see":
      "- API 토큰을 입력합니다. API 토큰을 생성하려면 다음을 참조하세요:",
    "- Enter your user email.":
      "- 사용자 이메일을 입력합니다.",
    "– Represents anomaly alerts.":
      "– 이상 징후 알림을 나타냅니다.",
    "– Represents vulnerabilities.":
      "– 취약점을 나타냅니다.",
    ", found on the left side menu.":
      ", 왼쪽 메뉴에 있습니다.",
    ", which are required in the configuration screen. Copy these values and paste them into the respective fields in the configuration screen.":
      ", 구성 화면에서 필요합니다. 이 값을 복사하여 구성 화면의 해당 필드에 붙여 넣으세요.",
    ", which will be used to integrate Cortex with Jira:":
      ", Cortex와 Jira를 통합하는 데 사용됩니다:",
    ": Asimily API user credentials. To create a new user, go to":
      ": Asimily API 사용자 자격 증명입니다. 새 사용자를 만들려면 다음으로 이동하세요:",
    ": Base URL of the Asimily Insight portal. Format:":
      ": Asimily Insight 포털의 기본 URL입니다. 형식:",
    ": Choose a log level from the dropdown.":
      ": 드롭다운에서 로그 수준을 선택합니다.",
    ": Default Classifier and Mapper provided as":
      ": 다음으로 제공되는 기본 분류기 및 매퍼:",
    ": Enable to fetch anomaly alerts.":
      ": 이상 징후 알림을 가져오려면 활성화합니다.",
    ": Enable to fetch device vulnerability incidents.":
      ": 디바이스 취약점 인시던트를 가져오려면 활성화합니다.",
    ": Enable to fetch incidents from Asimily Insight into Cortex.":
      ": Asimily Insight의 인시던트를 Cortex로 가져오려면 활성화합니다.",
    ": Filter to only fetch anomalies of the selected criticality.":
      ": 선택한 심각도의 이상 징후만 가져오도록 필터링합니다.",
    ": Filter to only fetch CVEs above the specified score threshold.":
      ": 지정한 점수 임계값을 초과하는 CVE만 가져오도록 필터링합니다.",
    ": Only fetch incidents for devices with specified tags.":
      ": 지정한 태그가 있는 디바이스의 인시던트만 가져옵니다.",
    ": Only fetch incidents for specified device families.":
      ": 지정한 디바이스 제품군의 인시던트만 가져옵니다.",
    ": Set how often incidents should be fetched (e.g.,":
      ": 인시던트를 가져오는 빈도를 설정합니다(예:",
    ". The OProxy URL is a client side web page that provides an easy interface to copy the authorization code from the response to the integration configuration during the authorization flow. Optionally, if you don’t want to use the OProxy URL, you can use a localhost URL on an unused local port, for example:":
      ". OProxy URL은 인증 흐름 중에 응답에서 통합 구성으로 인증 코드를 쉽게 복사할 수 있는 인터페이스를 제공하는 클라이언트 측 웹 페이지입니다. OProxy URL을 사용하지 않으려면 사용하지 않는 로컬 포트의 localhost URL을 사용할 수 있습니다. 예:",
    ". You will then need to copy the code from the URL address bar in the response.":
      ". 그런 다음 응답의 URL 주소 표시줄에서 코드를 복사해야 합니다.",
    "(Client ID, Client Secret)":
      "(클라이언트 ID, 클라이언트 시크릿)",
    "(Personal Access Token)":
      "(개인 액세스 토큰)",
    ") that will drop incoming incidents if it is a duplicate. It will search all past incidents with all status. The script can be used for configuring Pre-Process Rules to avoid duplication.":
      ")가 포함되어 있습니다. 이 스크립트는 수신 인시던트가 중복되면 삭제하며, 모든 상태의 과거 인시던트를 모두 검색합니다. 전처리 규칙을 구성하여 중복을 방지하는 데 사용할 수 있습니다.",
    "), this means there may be new devices included to fetch incidents or there will be new incidents included for existing devices. It is strongly recommended to":
      "), 이는 인시던트를 가져올 새 디바이스가 포함되었거나 기존 디바이스에 새 인시던트가 포함될 수 있음을 의미합니다. 다음을 강력히 권장합니다:",
    "1. Basic Authentication:":
      "1. 기본 인증:",
    "3. Private Access Token":
      "3. 비공개 액세스 토큰",
    "a. Click":
      "a. 다음을 클릭합니다:",
    "b. Click":
      "b. 다음을 클릭합니다:",
    "Add comments":
      "댓글 추가",
    "Add User":
      "사용자 추가",
    "Admin page":
      "관리 페이지",
    "and follow the steps.":
      "그런 다음 단계를 따릅니다.",
    "API token (Deprecated)":
      "API 토큰(사용 중단됨)",
    "API token (Recommended)":
      "API 토큰(권장)",
    "API User Name":
      "API 사용자 이름",
    "API Username":
      "API 사용자 이름",
    "Application link":
      "애플리케이션 링크",
    "Application links":
      "애플리케이션 링크",
    "As of June 2019, Basic authentication with passwords for Jira is no longer supported, please use basic authentication using API Token or use OAuth 1.0. To use basic authentication, follow":
      "2019년 6월부터 Jira에서는 비밀번호를 사용한 기본 인증이 더 이상 지원되지 않습니다. API 토큰을 사용한 기본 인증을 사용하거나 OAuth 1.0을 사용하세요. 기본 인증을 사용하려면 다음을 따르세요:",
    "Asimily Insight Integration":
      "Asimily Insight 통합",
    "Asimily Portal URL":
      "Asimily 포털 URL",
    "Authentication Methods":
      "인증 방법",
    "Authorization code":
      "인증 코드",
    "AutoFocus documentation":
      "AutoFocus 문서",
    "Azure Resource Graph integration is designed to allow for executing Azure Resource Graph commands, like querying resource data.":
      "Azure Resource Graph 통합은 리소스 데이터 쿼리와 같은 Azure Resource Graph 명령을 실행할 수 있도록 설계되었습니다.",
    "Azure Risky Users provides access to all at-risk users and risk detections in the Azure AD environment.":
      "Azure Risky Users는 Azure AD 환경의 모든 위험 사용자와 위험 탐지에 대한 액세스를 제공합니다.",
    "back icon":
      "뒤로 아이콘",
    "cases and issues icon":
      "케이스 및 이슈 아이콘",
    "dashboards reports icon":
      "대시보드 및 보고서 아이콘",
    "favorites icon":
      "즐겨찾기 아이콘",
    "help icon":
      "도움말 아이콘",
    "inventory icon":
      "인벤토리 아이콘",
    "investigation response icon":
      "조사 및 대응 아이콘",
    "lock filled icon":
      "잠금(채움) 아이콘",
    "modules icon":
      "모듈 아이콘",
    "notification bell icon":
      "알림 벨 아이콘",
    "posture management icon":
      "보안 태세 관리 아이콘",
    "resize handle icon":
      "크기 조정 핸들 아이콘",
    "settings icon":
      "설정 아이콘",
    "tenent navigator icon":
      "테넌트 탐색기 아이콘",
    "threat management icon":
      "위협 관리 아이콘",
    "Basic Authentication permissions":
      "기본 인증 권한",
    "Brandefense is a Cyber Intelligence Platform that responds directly and effectively to today's complex cyber threats.":
      "Brandefense는 오늘날의 복잡한 사이버 위협에 직접적이고 효과적으로 대응하는 사이버 인텔리전스 플랫폼입니다.",
    "Browse projects":
      "프로젝트 찾아보기",
    "By default, the key expires one week from today. If you’d like to change the expiration date, pick a new date under Expires on. You’re unable to select a date longer than a year from the date of creation.":
      "기본적으로 키는 오늘부터 1주일 후에 만료됩니다. 만료 날짜를 변경하려면 Expires on에서 새 날짜를 선택하세요. 생성일로부터 1년을 초과하는 날짜는 선택할 수 없습니다.",
    "Bypass exclusion list":
      "제외 목록 우회",
    "Callback URL":
      "콜백 URL",
    "Classic Scopes":
      "클래식 범위",
    "Classifier and Mapper":
      "분류기 및 매퍼",
    "Classifiers & Mappers":
      "분류기 및 매퍼",
    "Click Create API key in the top right.":
      "오른쪽 상단의 Create API key를 클릭합니다.",
    "Click Create to save the API key.":
      "Create를 클릭하여 API 키를 저장합니다.",
    "Click Done and you’ll see the key in your list of API keys.":
      "Done을 클릭하면 API 키 목록에 키가 표시됩니다.",
    "Click the Jira Administration tab (the gear icon found in the top right corner) and click":
      "Jira Administration 탭(오른쪽 상단의 톱니바퀴 아이콘)을 클릭한 다음 다음을 클릭합니다:",
    "Client ID, Client Secret":
      "클라이언트 ID, 클라이언트 시크릿",
    "Cloud authentication":
      "클라우드 인증",
    "Cloud ID of your Jira instance (See below)":
      "Jira 인스턴스의 Cloud ID(아래 참조)",
    "Cloud Scopes":
      "클라우드 범위",
    "Collects logs from Microsoft Azure Event Hub.":
      "Microsoft Azure Event Hub에서 로그를 수집합니다.",
    "Comment entry tag":
      "댓글 항목 태그",
    "Configure Pre-Process Rules":
      "전처리 규칙 구성",
    "Configure the integration":
      "통합 구성",
    "Configure your Jira instance based on the type of your deployment:":
      "배포 유형에 따라 Jira 인스턴스를 구성합니다:",
    "Consumer key (OAuth 1.0)":
      "컨슈머 키(OAuth 1.0)",
    "Copy the generated Authorization code into the integration instance and save the integration instance.":
      "생성된 인증 코드를 통합 인스턴스에 복사하고 통합 인스턴스를 저장합니다.",
    "Copy the values for your Organization ID and API key. You’ll need those to access your organization later.":
      "조직 ID와 API 키 값을 복사합니다. 나중에 조직에 액세스할 때 필요합니다.",
    "Create and Manage Azure Virtual Machines.":
      "Azure 가상 머신을 만들고 관리합니다.",
    "Create attachments":
      "첨부 파일 만들기",
    "Create issues":
      "이슈 만들기",
    "Delete issues":
      "이슈 삭제",
    "Deprecated. No available replacement.":
      "사용 중단되었습니다. 사용 가능한 대체 항목이 없습니다.",
    "Deprecated. Use the Atlassian Jira v3 integration instead":
      "사용 중단되었습니다. 대신 Atlassian Jira v3 통합을 사용하세요",
    "Deprecated. Use the Check Point Firewall v2 integration instead. Manage Check Point firewall via API":
      "사용 중단되었습니다. 대신 Check Point Firewall v2 통합을 사용하세요. API를 통해 Check Point 방화벽을 관리합니다",
    "Deprecated. Use the VMware Carbon Black App Control v2 integration instead.":
      "사용 중단되었습니다. 대신 VMware Carbon Black App Control v2 통합을 사용하세요.",
    "Deprecated. Use the VMware Carbon Black EDR integration instead.":
      "사용 중단되었습니다. 대신 VMware Carbon Black EDR 통합을 사용하세요.",
    "Deprecated. Use Unit 42 Feed integration instead.":
      "사용 중단되었습니다. 대신 Unit 42 Feed 통합을 사용하세요.",
    "Deprecated. Use Unit 42 Intel Objects Feed instead. Use the AutoFocus Tags Feed integration to fetch indicators from AutoFocus Tags.":
      "사용 중단되었습니다. 대신 Unit 42 Intel Objects Feed를 사용하세요. AutoFocus Tags Feed 통합을 사용하여 AutoFocus Tags에서 지표를 가져옵니다.",
    "Developer console":
      "개발자 콘솔",
    "Device Family Filter":
      "디바이스 제품군 필터",
    "Device Family Filter for Fetch Operation":
      "가져오기 작업용 디바이스 제품군 필터",
    "Device Tags Filter":
      "디바이스 태그 필터",
    "Device Tags Filter for Fetch Operation":
      "가져오기 작업용 디바이스 태그 필터",
    "Directory ID":
      "디렉터리 ID",
    "Edit issues":
      "이슈 편집",
    "Enable/Disable CRUD Commands":
      "CRUD 명령 사용/사용 안 함",
    "Ensure that you possess the necessary permissions by navigating to":
      "다음으로 이동하여 필요한 권한이 있는지 확인하세요:",
    "Enter a name that you’ll remember to identify the API key.":
      "API 키를 식별할 수 있도록 기억하기 쉬운 이름을 입력합니다.",
    "External application":
      "외부 애플리케이션",
    "Fetch Anomaly Alerts":
      "이상 징후 알림 가져오기",
    "Fetch Anomaly Criticality":
      "가져올 이상 징후 심각도",
    "Fetch attachments":
      "첨부 파일 가져오기",
    "Fetch comments":
      "댓글 가져오기",
    "Fetch CVE Score":
      "가져올 CVE 점수",
    "Fetch Device CVEs":
      "디바이스 CVE 가져오기",
    "Fetch incidents":
      "인시던트 가져오기",
    "Fetching incidents by creation time (using the Created field), instead of using IDs, is done by checking the “Use created field to fetch incidents” checkbox.":
      "ID를 사용하는 대신 '생성 필드를 사용하여 인시던트 가져오기' 확인란을 선택하면 생성 시간(Created 필드)을 기준으로 인시던트를 가져올 수 있습니다.",
    "fields empty and fill in the following fields:":
      "필드를 비워 두고 다음 필드를 입력합니다:",
    "File entry tag":
      "파일 항목 태그",
    "Fill in the required details as explained in the page, by inserting a":
      "페이지에 설명된 대로 다음을 삽입하여 필요한 세부 정보를 입력합니다:",
    "Fill in the required fields:":
      "필수 필드를 입력합니다:",
    "For both instances (Cloud ID & OnPrem), use the":
      "두 인스턴스(Cloud ID 및 OnPrem) 모두 다음을 사용합니다:",
    "For fetching incidents, please update the query param according to":
      "인시던트를 가져오려면 다음에 따라 쿼리 매개변수를 업데이트하세요:",
    "For more information see the":
      "자세한 내용은 다음을 참조하세요:",
    "from the Playground and follow its instructions.":
      "Playground에서 실행하고 해당 지침을 따르세요.",
    "from the Playground to verify that everything is configured correctly.":
      "Playground에서 실행하여 모든 항목이 올바르게 구성되었는지 확인합니다.",
    "From your organization at admin.atlassian.com:":
      "admin.atlassian.com의 조직에서:",
    "Gets Daily Threat Feed from AutoFocus.":
      "AutoFocus에서 일일 위협 피드를 가져옵니다.",
    "Go to the integration instance configuration.":
      "통합 인스턴스 구성으로 이동합니다.",
    "Granular Scopes":
      "세분화된 범위",
    "High Only":
      "높음만",
    "If you modify any of the fetch filters (":
      "가져오기 필터를 하나라도 수정하면(",
    "If you wish the first run to start from a specific time, use “Issue index to start fetching incidents from” param.":
      "첫 실행을 특정 시간부터 시작하려면 '인시던트 가져오기를 시작할 이슈 인덱스' 매개변수를 사용하세요.",
    "Incident Fetch Interval":
      "인시던트 가져오기 간격",
    "Incident Types":
      "인시던트 유형",
    "Incoming":
      "수신",
    "Indicator Reputation":
      "지표 평판",
    "Insert the generated token in the":
      "생성된 토큰을 다음에 삽입합니다:",
    "Integrate Asimily Insight to ingest security anomalies, CVEs, and leverage detailed asset data for streamlined incident investigation.":
      "Asimily Insight를 통합하여 보안 이상 징후와 CVE를 수집하고, 상세한 자산 데이터를 활용해 인시던트 조사를 간소화합니다.",
    "Integrate Checkmarx to gain a unified overview of your application security posture.":
      "Checkmarx를 통합하여 애플리케이션 보안 태세에 대한 통합된 개요를 확인합니다.",
    "Integrate with Atlassian's services to execute CRUD operations for employee lifecycle processes.":
      "Atlassian 서비스와 통합하여 직원 수명 주기 프로세스에 대한 CRUD 작업을 실행합니다.",
    "Issue Field to fetch by":
      "가져오기 기준 이슈 필드",
    "Issue index to start fetching incidents from":
      "인시던트 가져오기를 시작할 이슈 인덱스",
    "Jira URL, for example: https://demisto.atlassian.net/":
      "Jira URL(예: https://demisto.atlassian.net/)",
    "JQL documentation":
      "JQL 문서",
    "Leave empty":
      "비워 둠",
    "Leave the":
      "해당",
    "Link issues":
      "이슈 연결",
    "Locate permissions for the tasks listed below:":
      "아래에 나열된 작업에 대한 권한을 찾습니다:",
    "Log Analytics is a service that helps you collect and analyze data generated by resources in your cloud and on-premises environments.":
      "Log Analytics는 클라우드 및 온프레미스 환경의 리소스에서 생성된 데이터를 수집하고 분석하는 데 도움이 되는 서비스입니다.",
    "Log in to Jira as a user with":
      "다음 권한이 있는 사용자로 Jira에 로그인합니다:",
    "Log Level":
      "로그 수준",
    "Manage Binalyze AIR forensic acquisition, endpoint isolation, triage, cases, tasks, assets, repositories, and evidence artifacts from Cortex.":
      "Cortex에서 Binalyze AIR 포렌식 수집, 엔드포인트 격리, 트리아지, 케이스, 작업, 자산, 리포지토리 및 증거 아티팩트를 관리합니다.",
    "Max incidents per fetch":
      "가져오기당 최대 인시던트 수",
    "Mirror incoming incidents":
      "수신 인시던트 미러링",
    "Mirror outgoing incidents":
      "발신 인시던트 미러링",
    "Notifies you if login credentials to your company are being sold on the dark web.":
      "회사의 로그인 자격 증명이 다크 웹에서 판매되고 있는 경우 알려 줍니다.",
    "OAuth 2.0 integration":
      "OAuth 2.0 통합",
    "on the Asimily Insight portal.":
      "(Asimily Insight 포털에서).",
    "on the left side bar. Your Cloud ID will appear in the URL:":
      "(왼쪽 사이드바). Cloud ID가 URL에 표시됩니다:",
    "Once the link is created, you will be able to see":
      "링크가 생성되면 다음을 볼 수 있습니다:",
    "Onboard your Azure DevOps SaaS to the Cortex Application Security module to gain comprehensive visibility into your Azure DevOps platform assets and scan your repositories’ code, configurations, and CI/CD pipelines for security issues.":
      "Azure DevOps SaaS를 Cortex Application Security 모듈에 온보딩하면 Azure DevOps 플랫폼 자산을 포괄적으로 파악하고 리포지토리의 코드, 구성 및 CI/CD 파이프라인에서 보안 문제를 스캔할 수 있습니다.",
    "Onboard your Bitbucket Data Center on-prem to the Cortex Application Security module to gain comprehensive visibility into your Bitbucket Data Center platform assets and scan your repositories’ code for security issues.":
      "Bitbucket Data Center 온프레미스를 Cortex Application Security 모듈에 온보딩하면 Bitbucket Data Center 플랫폼 자산을 포괄적으로 파악하고 리포지토리의 코드에서 보안 문제를 스캔할 수 있습니다.",
    "Onboard your Bitbucket SaaS to the Cortex Application Security module to gain comprehensive visibility into your Bitbucket platform assets and scan your repositories’ code for security issues.":
      "Bitbucket SaaS를 Cortex Application Security 모듈에 온보딩하면 Bitbucket 플랫폼 자산을 포괄적으로 파악하고 리포지토리의 코드에서 보안 문제를 스캔할 수 있습니다.",
    "OnPrem authentication":
      "OnPrem 인증",
    "OnPrem Scopes":
      "OnPrem 범위",
    "page, and choose the App you want to integrate with your instance. It must be of type OAuth 2.0. For creating a new app with type OAuth 2.0, click":
      "페이지에서 인스턴스와 통합할 앱을 선택합니다. 앱 유형은 OAuth 2.0이어야 합니다. 유형이 OAuth 2.0인 새 앱을 만들려면 다음을 클릭합니다:",
    "Password (Deprecated - Use API token)":
      "비밀번호(사용 중단됨 - API 토큰 사용)",
    "Personal Access Token":
      "개인 액세스 토큰",
    "Private key (PKCS8 format)":
      "개인 키(PKCS8 형식)",
    "Project Settings":
      "프로젝트 설정",
    "Query (in JQL) for fetching incidents":
      "인시던트를 가져오기 위한 쿼리(JQL)",
    "Query (in JQL) for fetching incidents.":
      "인시던트를 가져오기 위한 쿼리(JQL).",
    "Receives network flow logs from Microsoft Azure Network Watcher.":
      "Microsoft Azure Network Watcher에서 네트워크 흐름 로그를 수신합니다.",
    "Reset Now":
      "지금 재설정",
    "Reset the “last run” timestamp":
      "'마지막 실행' 타임스탬프 재설정",
    "Resetting the “Last Run” Timestamp":
      "'마지막 실행' 타임스탬프 재설정",
    "Run the integration command":
      "통합 명령 실행",
    "SaaS Posture Security":
      "SaaS 보안 태세",
    "Save & Exit":
      "저장 후 종료",
    "Save the integration instance.":
      "통합 인스턴스를 저장합니다.",
    "scope, in order to retrieve refresh tokens.":
      "범위(새로 고침 토큰을 가져오기 위해).",
    "Select Settings and then API keys.":
      "Settings를 선택한 다음 API keys를 선택합니다.",
    "The integration can fetch the following incident types:":
      "이 통합은 다음 인시던트 유형을 가져올 수 있습니다:",
    "The integration includes a preprocessing script (":
      "이 통합에는 전처리 스크립트(",
    "The integration retrieves asset information, anomaly alerts, and CVEs from Asimily Insight—either through scheduled updates or on-demand queries—making it necessary to define a preprocessing rule that discards incoming incidents if they are duplicates.":
      "이 통합은 예약된 업데이트 또는 주문형 쿼리를 통해 Asimily Insight에서 자산 정보, 이상 징후 알림, CVE를 가져오므로, 수신 인시던트가 중복되면 삭제하는 전처리 규칙을 정의해야 합니다.",
    "The Traffic Light Protocol (TLP) designation to apply to indicators fetched from the feed":
      "피드에서 가져온 지표에 적용할 Traffic Light Protocol(TLP) 지정",
    "There are 2 authentication methods:":
      "인증 방법은 두 가지입니다:",
    "This ensures that incidents related to newly included devices and updated filters are correctly fetched.":
      "이렇게 하면 새로 포함된 디바이스 및 업데이트된 필터와 관련된 인시던트가 올바르게 가져와집니다.",
    "this tutorial":
      "이 튜토리얼",
    "This will fetch all tickets in your system (including past tickets) that are in Open status and in project soc. After the first run, it will create incidents only for new tickets.":
      "이렇게 하면 시스템에서 Open 상태이면서 프로젝트 soc에 속한 모든 티켓(과거 티켓 포함)을 가져옵니다. 첫 실행 이후에는 새 티켓에 대해서만 인시던트가 생성됩니다.",
    "Time range for initial data fetch":
      "초기 데이터 가져오기 시간 범위",
    "to get the Access Token. Authorizing using OAuth1.0, requires Access Token, Private Key, and Consumer Key.":
      "액세스 토큰을 가져옵니다. OAuth1.0을 사용한 인증에는 액세스 토큰, 개인 키, 컨슈머 키가 필요합니다.",
    "to get the API token.":
      "API 토큰을 가져옵니다.",
    "To obtain the Authorization code, follow these steps:":
      "인증 코드를 얻으려면 다음 단계를 따르세요:",
    "to obtain your Access Tokens. Authorizing using a PAT requires the Access Token only.":
      "액세스 토큰을 얻습니다. PAT를 사용한 인증에는 액세스 토큰만 필요합니다.",
    "To reset:":
      "재설정하려면:",
    "To use a Private Access Token, please follow":
      "비공개 액세스 토큰을 사용하려면 다음을 따르세요:",
    "To use OAuth1.0 follow":
      "OAuth1.0을 사용하려면 다음을 따르세요:",
    "Traffic Light Protocol Color":
      "Traffic Light Protocol 색상",
    "Transition issues":
      "이슈 전환",
    "Update the project you want to fetch from, using:":
      "가져올 프로젝트를 다음을 사용하여 업데이트합니다:",
    "Use created field to fetch incidents":
      "생성 필드를 사용하여 인시던트 가져오기",
    "Use the Azure Key Vault integration to safeguard and manage cryptographic keys and secrets used by cloud applications and services.":
      "Azure Key Vault 통합을 사용하여 클라우드 애플리케이션 및 서비스에서 사용하는 암호화 키와 비밀을 보호하고 관리합니다.",
    "Use the Jira integration to manage issues, create Cortex incidents from Jira projects, and mirror issues to existing issue incidents in Cortex. The integration now supports both OnPrem, and Cloud instances.":
      "Jira 통합을 사용하여 이슈를 관리하고, Jira 프로젝트에서 Cortex 인시던트를 만들고, 이슈를 Cortex의 기존 이슈 인시던트에 미러링합니다. 이제 이 통합은 OnPrem 및 클라우드 인스턴스를 모두 지원합니다.",
    "Use this integration to connect securely with an Atlassian Cloud Model Context Protocol (MCP) server and access its tools in real time.":
      "이 통합을 사용하여 Atlassian Cloud Model Context Protocol(MCP) 서버에 안전하게 연결하고 해당 도구에 실시간으로 액세스합니다.",
    "Use this integration to read information and send commands to the Check Point Firewall server.":
      "이 통합을 사용하여 Check Point Firewall 서버의 정보를 읽고 명령을 보냅니다.",
    "Username (Basic Authentication)":
      "사용자 이름(기본 인증)",
    "When creating Jira issues through XSOAR, using the mirroring function, make sure that you exclude those issues when fetching incidents. To exclude these issues, tag the relevant issues with a dedicated label and exclude that label from the JQL query (Labels!=).":
      "XSOAR에서 미러링 기능을 사용하여 Jira 이슈를 만들 때는 인시던트를 가져올 때 해당 이슈를 제외해야 합니다. 이러한 이슈를 제외하려면 관련 이슈에 전용 레이블을 지정하고 JQL 쿼리(Labels!=)에서 해당 레이블을 제외하세요.",
    "You can authenticate using one of the following methods:":
      "다음 방법 중 하나를 사용하여 인증할 수 있습니다:",
    "You can enable and filter these incidents with the following options:":
      "다음 옵션으로 이러한 인시던트를 활성화하고 필터링할 수 있습니다:",
    "You can select which CRUD commands are enabled in the integration instance configuration settings. By default, all commands are enabled.":
      "통합 인스턴스 구성 설정에서 사용할 CRUD 명령을 선택할 수 있습니다. 기본적으로 모든 명령이 사용 설정되어 있습니다.",
    "Your Jira server URL":
      "Jira 서버 URL",

    // --- Batch: strings from the Collector export #2 (AutoFocus Feed docs, marketplace card descriptions, feed tooltips) ---
    // Fragments such as "and", "or", "The", "Click the", "Go to the", "From the" are intentionally NOT registered.
    "Activate the API":
      "API 활성화",
    "Activating AutoFocus Licenses":
      "AutoFocus 라이선스 활성화",
    "Add your authorization code":
      "인증 코드 추가",
    "AutoFocus documentation - Get Tag Details":
      "AutoFocus 문서 - 태그 세부 정보 가져오기",
    "AutoFocus documentation - Get Tags":
      "AutoFocus 문서 - 태그 가져오기",
    "AutoFocus Endpoint URL":
      "AutoFocus 엔드포인트 URL",
    "Custom Feed info:":
      "사용자 지정 피드 정보:",
    "Samples Feed info:":
      "샘플 피드 정보:",
    "Enter the authorization code.":
      "인증 코드를 입력합니다.",
    "Enter this API key when configuring the AutoFocus integration in Cortex.":
      "Cortex에서 AutoFocus 통합을 구성할 때 이 API 키를 입력합니다.",
    "For more info on activating the license, see":
      "라이선스 활성화에 대한 자세한 내용은 다음을 참조하세요:",
    "For more information about generating URL and adding filter options for custom feeds, please read":
      "사용자 지정 피드의 URL 생성 및 필터 옵션 추가에 대한 자세한 내용은 다음을 읽어 보세요:",
    "From the left-side navigation menu, select":
      "왼쪽 탐색 메뉴에서 다음을 선택합니다:",
    "Get Your API Key":
      "API 키 가져오기",
    "Gets Custom and Sample feeds from AutoFocus.":
      "AutoFocus에서 사용자 지정 피드와 샘플 피드를 가져옵니다.",
    "Indicator Feed":
      "지표 피드",
    "Onboard your CircleCI SaaS service for comprehensive Application Security: Integrate Cortex CLI scans for your code, and secure your CI/CD pipelines.":
      "포괄적인 Application Security를 위해 CircleCI SaaS 서비스를 온보딩합니다. 코드에 대한 Cortex CLI 스캔을 통합하고 CI/CD 파이프라인을 보호합니다.",
    "Only necessary in case a Custom Feed is fetched. Can also support a CSV of Custom feed URLs.":
      "사용자 지정 피드를 가져오는 경우에만 필요합니다. 사용자 지정 피드 URL의 CSV도 지원할 수 있습니다.",
    "Palo Alto Networks support site":
      "Palo Alto Networks 지원 사이트",
    "Protect your cloud assets and private network.":
      "클라우드 자산과 프라이빗 네트워크를 보호합니다.",
    "Query - A JSON styled AutoFocus query. For example:":
      "Query - JSON 형식의 AutoFocus 쿼리입니다. 예:",
    "Query and upload samples to Cisco threat grid.":
      "샘플을 쿼리하고 Cisco Threat Grid에 업로드합니다.",
    "Reliability of the source providing the intelligence data":
      "인텔리전스 데이터를 제공하는 소스의 신뢰성",
    "Samples Feed Query":
      "샘플 피드 쿼리",
    "Samples Feed Scope Type":
      "샘플 피드 범위 유형",
    "Scalable visibility and security analytics.":
      "확장 가능한 가시성 및 보안 분석입니다.",
    "Scope Type - Either":
      "범위 유형 - 다음 중 하나",
    "Secure Malware Analytics (formerly Threat Grid) combines advanced sandboxing with threat intelligence into one unified solution to protect organizations from malware.":
      "Secure Malware Analytics(이전 명칭 Threat Grid)는 고급 샌드박싱과 위협 인텔리전스를 하나의 통합 솔루션으로 결합하여 조직을 맬웨어로부터 보호합니다.",
    "Select the API Key link.":
      "API Key 링크를 선택합니다.",
    "Select values":
      "값 선택",
    "The Custom Feed URL should be in this form:":
      "사용자 지정 피드 URL은 다음 형식이어야 합니다:",
    "The Security Management Appliance (SMA) is used to centralize services from Email Security Appliances (ESAs) and Web Security Appliances (WSAs).":
      "Security Management Appliance(SMA)는 Email Security Appliance(ESA)와 Web Security Appliance(WSA)의 서비스를 중앙에서 관리하는 데 사용됩니다.",
    "The URL for the custom feed to fetch":
      "가져올 사용자 지정 피드의 URL",
    "To connect a custom AutoFocus feed you need to provide the Custom Feed URL.":
      "사용자 지정 AutoFocus 피드에 연결하려면 사용자 지정 피드 URL을 제공해야 합니다.",
    "To connect to a sample AutoFocus feed you need to provide the following parameters:":
      "샘플 AutoFocus 피드에 연결하려면 다음 매개변수를 제공해야 합니다:",
    "To get your API key, you need to add an authorization code, and then activate the API.":
      "API 키를 얻으려면 인증 코드를 추가한 다음 API를 활성화해야 합니다.",
    "Use system proxy settings is enabled only when an engine is selected":
      "'시스템 프록시 설정 사용'은 엔진을 선택한 경우에만 사용할 수 있습니다",
    "Use the AutoFocus Tags Feed integration to fetch indicators from AutoFocus Tags.":
      "AutoFocus Tags Feed 통합을 사용하여 AutoFocus Tags에서 지표를 가져옵니다.",
    "Use the Cisco Adaptive Security Appliance Software integration to manage interfaces, rules, and network objects.":
      "Cisco Adaptive Security Appliance Software 통합을 사용하여 인터페이스, 규칙, 네트워크 개체를 관리합니다.",
    "Use the Cisco Firepower integration for unified management of firewalls, application control, intrusion prevention, URL filtering, and advanced malware protection.":
      "Cisco Firepower 통합을 사용하여 방화벽, 애플리케이션 제어, 침입 방지, URL 필터링, 고급 맬웨어 방어를 통합 관리합니다.",
    "When removed from the feed":
      "피드에서 제거되었을 때",
    "When selected, the exclusion list is ignored for indicators from this feed. This means that if an indicator from this feed is on the exclusion list, the indicator might still be added to the system.":
      "선택하면 이 피드의 지표에 대해 제외 목록이 무시됩니다. 즉, 이 피드의 지표가 제외 목록에 있더라도 해당 지표가 시스템에 추가될 수 있습니다.",

    // --- Batch: strings from the Collector export #4 (Azure Log Analytics / Microsoft self-deployed auth docs, marketplace card descriptions) ---
    // Fragments such as "and", "or the", "Follow the", "Go to the", "Run the", "Select the", "To get the", "To use the" are intentionally NOT registered.
    ": These credentials are valid for a single instance only.":
      ": 이 자격 증명은 단일 인스턴스에서만 유효합니다.",
    "(Certificate Thumbprint)":
      "(인증서 지문)",
    "(Client Secret)":
      "(클라이언트 시크릿)",
    "After authorizing the Cortex app, you will get an ID, Token, and Key which should be inserted in the integration instance settings fields.":
      "Cortex 앱을 승인하면 ID, 토큰, 키가 제공되며, 이를 통합 인스턴스 설정 필드에 입력해야 합니다.",
    "and allow Cortex access to Azure Log Analytics, an administrator has to approve our app using an admin consent flow by clicking this":
      "Cortex가 Azure Log Analytics에 액세스할 수 있도록 하려면 관리자가 관리자 동의 흐름을 사용하여 앱을 승인해야 합니다. 다음을 클릭합니다:",
    "Anthropic Claude AI integration for data security scanning and content analysis":
      "데이터 보안 스캔 및 콘텐츠 분석을 위한 Anthropic Claude AI 통합",
    "Application redirect URI (for self-deployed mode)":
      "애플리케이션 리디렉션 URI(자체 배포 모드용)",
    "Authorization Code flow":
      "인증 코드 흐름",
    "Client Credentials flow":
      "클라이언트 자격 증명 흐름",
    "Client Credentials Flow":
      "클라이언트 자격 증명 흐름",
    "Azure Resource Graph is an Azure service designed to extend Azure Resource Management by providing efficient and performant resource exploration with the ability to query at scale across a given set of resources.":
      "Azure Resource Graph는 Azure Resource Management를 확장하도록 설계된 Azure 서비스로, 효율적이고 성능이 뛰어난 리소스 탐색과 지정한 리소스 집합 전체에 대한 대규모 쿼리를 제공합니다.",
    "Azure Service Management - permission":
      "Azure Service Management - 권한",
    "Log Analytics API - permission":
      "Log Analytics API - 권한",
    "of type":
      "유형:",
    "Check when authenticating using the Authorization Code flow.":
      "인증 코드 흐름을 사용하여 인증하는 경우 선택합니다.",
    "Check when authenticating using the Client Credentials flow.":
      "클라이언트 자격 증명 흐름을 사용하여 인증하는 경우 선택합니다.",

    // --- Batch: strings from the user-reported screenshot (Azure auth type description) ---
    // Fragments such as "and", "or the", "Follow the", "Go to the", "Run the", "Select the", "To get the", "To use the" are intentionally NOT registered.
    "Type of authentication - could be Client Credentials Authorization Flow (recommended) or Device Code Flow.":
      "인증 유형 - 클라이언트 자격 증명 인증 흐름(권장) 또는 디바이스 코드 흐름을 사용할 수 있습니다.",

    // --- Batch: strings from the Collector export #5 (v0.1.1: tooltips, Brandefense/Binalyze/Bitbucket docs, marketplace card descriptions, data-source table) ---
    // Fragments such as "and", "or the", "Follow the", "Go to the", "Run the", "Select the", "To get the", "To use the" are intentionally NOT registered.
    "— For asset-related commands":
      "— 자산 관련 명령용",
    "— For creating incidents":
      "— 인시던트 생성용",
    "— For CTI threat search capability":
      "— CTI 위협 검색 기능용",
    "— For incident fetching and queries":
      "— 인시던트 가져오기 및 쿼리용",
    "— For indicator retrieval":
      "— 지표 검색용",
    "— For intelligence reports":
      "— 인텔리전스 보고서용",
    "— For IoC and threat intelligence data":
      "— IoC 및 위협 인텔리전스 데이터용",
    "— For phishing monitoring":
      "— 피싱 모니터링용",
    "(API Key)":
      "(API 키)",
    "A Brandefense account with API access enabled.":
      "API 액세스가 활성화된 Brandefense 계정.",
    "An API Bearer Token generated from the Brandefense platform.":
      "Brandefense 플랫폼에서 생성한 API Bearer 토큰.",
    "Add":
      "추가",
    "Binalyze AIR Server URL":
      "Binalyze AIR 서버 URL",
    "Bitbucket Data Center (On-Prem)":
      "Bitbucket Data Center(온프레미스)",
    "Choose from repository list":
      "리포지토리 목록에서 선택",
    "Community Contributed Integration":
      "커뮤니티 제공 통합",
    "Comprehensive integration with Databricks workspace APIs for managing clusters, jobs, SQL, pipelines, Unity Catalog, MLflow, IAM, and more.":
      "클러스터, 작업, SQL, 파이프라인, Unity Catalog, MLflow, IAM 등을 관리하기 위한 Databricks 워크스페이스 API와의 포괄적인 통합입니다.",
    "Configure Domain":
      "도메인 구성",
    "Connect Docker Hub Container Registry with Cortex Cloud to scan and secure your container images, ensuring comprehensive security and compliance.":
      "Docker Hub 컨테이너 레지스트리를 Cortex Cloud에 연결하여 컨테이너 이미지를 스캔하고 보호함으로써 포괄적인 보안과 규정 준수를 보장합니다.",
    "Connector name":
      "커넥터 이름",
    "Copy the generated token and paste it into the":
      "생성된 토큰을 복사하여 통합 구성의",
    "field in the integration configuration.":
      "필드에 붙여넣으세요.",
    "Copy the token.":
      "토큰을 복사합니다.",
    "Create a Personal Access Token":
      "개인 액세스 토큰 생성",
    "Create a new API token with the minimum required permissions.":
      "필요한 최소 권한으로 새 API 토큰을 생성합니다.",
    "Cribl Search allows you to query, retrieve, and manage search jobs, datasets, and saved searches across your Cribl Cloud deployment.":
      "Cribl Search를 사용하면 Cribl Cloud 배포 전반의 검색 작업, 데이터셋, 저장된 검색을 쿼리, 검색 및 관리할 수 있습니다.",
    "Delete instance":
      "인스턴스 삭제",
    "Edit instance":
      "인스턴스 편집",
    "e.g acme.atlassian.com":
      "예: acme.atlassian.com",
    "Enable unified image, code, and API security scanning, analysis and remediation from your command line":
      "명령줄에서 이미지, 코드, API 보안 스캔, 분석 및 해결을 통합적으로 수행할 수 있도록 합니다",
    "Endpoint detection and response to manage and query malops, connections and processes.":
      "Malop, 연결 및 프로세스를 관리하고 쿼리하기 위한 엔드포인트 탐지 및 대응입니다.",
    "Enter the Binalyze AIR Server URL and API Key.":
      "Binalyze AIR 서버 URL과 API 키를 입력합니다.",
    "Fetching Issue Types":
      "이슈 유형 가져오기",
    "File threat intelligence":
      "파일 위협 인텔리전스",
    "First time fetching":
      "최초 가져오기",
    "Go to the API token or integrations section.":
      "API 토큰 또는 통합 섹션으로 이동합니다.",
    "In Cortex, create a Binalyze AIR Extended integration instance.":
      "Cortex에서 Binalyze AIR Extended 통합 인스턴스를 생성합니다.",
    "In order to complete the onboarding, the domain path should be approved in the Platform Egress. A request was send on your behalf and once approved you will be able to onboard again":
      "온보딩을 완료하려면 Platform Egress에서 도메인 경로를 승인해야 합니다. 사용자를 대신하여 요청이 전송되었으며, 승인되면 다시 온보딩할 수 있습니다.",
    "Incident":
      "인시던트",
    "Incident Category":
      "인시던트 카테고리",
    "Incident Module":
      "인시던트 모듈",
    "Incident Rules":
      "인시던트 규칙",
    "Incident Status":
      "인시던트 상태",
    "Integration with DFIRe (Digital Forensics and Incident Response) platform for case management and IOC indicator tracking.":
      "케이스 관리 및 IOC 지표 추적을 위한 DFIRe(Digital Forensics and Incident Response) 플랫폼과의 통합입니다.",
    "Intelligence":
      "인텔리전스",
    "Intelligence Category":
      "인텔리전스 카테고리",
    "Intelligence Search":
      "인텔리전스 검색",
    "Locking mechanism that prevents concurrent execution of different tasks.":
      "서로 다른 작업이 동시에 실행되는 것을 방지하는 잠금 메커니즘입니다.",
    "Log in to Binalyze AIR.":
      "Binalyze AIR에 로그인합니다.",
    "Log in to your Brandefense account at":
      "다음 URL에서 Brandefense 계정에 로그인합니다:",
    "Malware dynamic analysis sandboxing.":
      "악성코드 동적 분석 샌드박싱입니다.",
    "Manage Endpoints using Cylance protect.":
      "Cylance Protect를 사용하여 엔드포인트를 관리합니다.",
    "Max Results":
      "최대 결과 수",
    "Maximum incidents per fetch":
      "가져오기당 최대 인시던트 수",
    "Maximum number of incidents to fetch per cycle.":
      "주기당 가져올 인시던트의 최대 수입니다.",
    "No support or maintenance is provided by the author. Customers are encouraged to engage with the user community for questions and guidance at the":
      "작성자는 지원이나 유지 관리를 제공하지 않습니다. 질문이나 안내가 필요한 경우 다음 사용자 커뮤니티를 이용하시기 바랍니다:",
    "Ownership Type":
      "소유 유형",
    "Pack also helps with integration with Cortex and provides pre-made playbooks/templates to ease integration use.":
      "이 팩은 Cortex와의 통합에도 도움이 되며, 통합 사용을 쉽게 해 주는 사전 제작된 플레이북/템플릿을 제공합니다.",
    "Paste your Bitbucket Server / Data Center repository URL into the 'Base URL' field below. Project Admin permissions are required.":
      "Bitbucket Server / Data Center 리포지토리 URL을 아래의 '기본 URL' 필드에 붙여넣으세요. Project Admin 권한이 필요합니다.",
    "Reliability of the source providing the intelligence data.":
      "인텔리전스 데이터를 제공하는 소스의 신뢰성입니다.",
    "Repositories were last updated on":
      "리포지토리 마지막 업데이트:",
    "Review the requested permissions, and select":
      "요청된 권한을 검토한 후",
    "to connect Prisma Cloud to Bitbucket.":
      "을(를) 선택하여 Prisma Cloud를 Bitbucket에 연결합니다.",
    "selected":
      "선택됨",
    "Selected":
      "선택됨",
    "Selection Options":
      "선택 옵션",
    "Server URL (e.g. https://api.brandefense.io)":
      "서버 URL(예: https://api.brandefense.io)",
    "Setup":
      "설정",
    "Stay ahead of cyber threats with Darkmon TIP - real-time threat intelligence from the Clear, Deep, and Dark Web tailored to your assets.":
      "Darkmon TIP으로 사이버 위협보다 앞서 나가세요. 클리어 웹, 딥 웹, 다크 웹의 실시간 위협 인텔리전스를 사용자의 자산에 맞춰 제공합니다.",
    "Stay ahead of cyber threats with Darkmon TIP - real-time threat intelligence from the Clear, Deep, and Dark Web tailored to your assets. Pack also helps with integration with Cortex and provides pre-made playbooks/templates to ease integration use.":
      "Darkmon TIP으로 사이버 위협보다 앞서 나가세요. 클리어 웹, 딥 웹, 다크 웹의 실시간 위협 인텔리전스를 사용자의 자산에 맞춰 제공합니다. 이 팩은 Cortex와의 통합에도 도움이 되며, 통합 사용을 쉽게 해 주는 사전 제작된 플레이북/템플릿을 제공합니다.",
    "Steps":
      "단계",
    "Sync Now":
      "지금 동기화",
    "Table data is being updated":
      "테이블 데이터를 업데이트하는 중입니다",
    "The Binalyze AIR Server URL, for example https://air.example.com.":
      "Binalyze AIR 서버의 URL입니다(예: https://air.example.com).",
    "The CrowdStrike Falcon OAuth 2 API (formerly the Falcon Firehose API), enables fetching and resolving detections, searching devices, getting behaviors by ID, containing hosts, and lifting host containment.":
      "CrowdStrike Falcon OAuth 2 API(이전 명칭: Falcon Firehose API)를 사용하면 탐지 항목을 가져오고 해결하고, 디바이스를 검색하고, ID로 동작을 조회하고, 호스트를 격리하고, 호스트 격리를 해제할 수 있습니다.",
    "The Databricks Data Intelligence Platform":
      "Databricks Data Intelligence Platform",
    "This integration uses the Cortex API to access all the core services and capabilities of the Cortex platform.":
      "이 통합은 Cortex API를 사용하여 Cortex 플랫폼의 모든 핵심 서비스와 기능에 액세스합니다.",
    "This parameter allows you to filter fetching by issue type.":
      "이 매개변수를 사용하면 이슈 유형별로 가져오기를 필터링할 수 있습니다.",
    "This parameter allows you to filter intelligence values by categories.":
      "이 매개변수를 사용하면 카테고리별로 인텔리전스 값을 필터링할 수 있습니다.",
    "This parameter allows you to filter intelligence values with keyword search.":
      "이 매개변수를 사용하면 키워드 검색으로 인텔리전스 값을 필터링할 수 있습니다.",
    "This parameter will request and show the incident's related module category.":
      "이 매개변수는 인시던트와 관련된 모듈 카테고리를 요청하여 표시합니다.",
    "This parameter will request and show the incident's related module.":
      "이 매개변수는 인시던트와 관련된 모듈을 요청하여 표시합니다.",
    "This parameter will request and show the incident's related template. Don't select any to get all alerts.":
      "이 매개변수는 인시던트와 관련된 템플릿을 요청하여 표시합니다. 모든 알림을 가져오려면 아무것도 선택하지 마세요.",
    "This parameter will request incident's by status.":
      "이 매개변수는 상태별로 인시던트를 요청합니다.",
    "Use the CyberArk EPM integration to activate and deactivate CyberArk EPM risk plans for specific endpoints.":
      "CyberArk EPM 통합을 사용하여 특정 엔드포인트의 CyberArk EPM 위험 계획을 활성화하거나 비활성화합니다.",
    "Use this integration to connect Cortex to Binalyze AIR for endpoint forensic acquisition, triage, case, task, repository, and isolation operations.":
      "이 통합을 사용하여 Cortex를 Binalyze AIR에 연결하고 엔드포인트 포렌식 수집, 트리아지, 케이스, 작업, 리포지토리 및 격리 작업을 수행합니다.",

    // --- Batch: strings from the Collector export #6 (Cisco/CircleCI/Doppel/EWS/Entra ID docs, tooltips, marketplace card descriptions) ---
    // Fragments such as "and", "or the", "Follow the", "Go to the", "Run the", "Select the", "To get the", "To use the" are intentionally NOT registered.
    ": There is no need to enter a value in the":
      ": 다음",
    "field. It can be left blank. (Visible only on 6.0.2 and lower versions).":
      "필드에 값을 입력할 필요가 없습니다. 비워 둘 수 있습니다. (6.0.2 이하 버전에서만 표시됩니다.)",
    "(API token)":
      "(API 토큰)",
    "(Stealthwatch Cloud API key. Should be in the form of \"ApiKey <username>:<apikey>\")":
      "(Stealthwatch Cloud API 키입니다. \"ApiKey <username>:<apikey>\" 형식이어야 합니다)",
    "Stealthwatch Cloud API key. Should be in the form of \"ApiKey <username>:<apikey>\"":
      "Stealthwatch Cloud API 키입니다. \"ApiKey <username>:<apikey>\" 형식이어야 합니다",
    "Access to Cisco SMA":
      "Cisco SMA 액세스",
    "Access your Cisco Umbrella account dashboard.":
      "Cisco Umbrella 계정 대시보드에 액세스합니다.",
    "Add the following environment variables:":
      "다음 환경 변수를 추가합니다:",
    "API Secret":
      "API 시크릿",
    "API token":
      "API 토큰",
    "API Token":
      "API 토큰",
    "API Version(Support values: v1, v2, v3)":
      "API 버전(지원되는 값: v1, v2, v3)",
    "Authentication from a REST API Client":
      "REST API 클라이언트에서의 인증",
    "Base URL, e.g., https://XXX.eu.iphmx.com":
      "기본 URL(예: https://XXX.eu.iphmx.com)",
    "Before you begin, you'll need to create a new context in CircleCI named \"cortex-secrets\" and add your API key and API ID as environment variables.":
      "시작하기 전에 CircleCI에서 \"cortex-secrets\"라는 이름의 새 컨텍스트를 만들고 API 키와 API ID를 환경 변수로 추가해야 합니다.",
    "Please copy and use the variable names suggested below.":
      "아래에 제안된 변수 이름을 복사하여 사용하세요.",
    "If needed, you can generate a new token using the link below, copy and use the generated values as your secrets values.":
      "필요한 경우 아래 링크를 사용하여 새 토큰을 생성하고, 생성된 값을 복사하여 시크릿 값으로 사용할 수 있습니다.",
    "Before you begin, you'll need to create a new context in CircleCI named \"cortex-secrets\" and add your API key and API ID as environment variables. Please copy and use the variable names suggested below. If needed, you can generate a new token using the link below, copy and use the generated values as your secrets values.":
      "시작하기 전에 CircleCI에서 \"cortex-secrets\"라는 이름의 새 컨텍스트를 만들고 API 키와 API ID를 환경 변수로 추가해야 합니다. 아래에 제안된 변수 이름을 복사하여 사용하세요. 필요한 경우 아래 링크를 사용하여 새 토큰을 생성하고, 생성된 값을 복사하여 시크릿 값으로 사용할 수 있습니다.",
    "By clicking Authorize, you authorize Palo Alto Networks to: (i) ingest data and perform actions such as suppression on your behalf and (ii) process this data to deliver services to you. You confirm that you have the right to provide this authorization.":
      "\"승인\"을 클릭하면 사용자는 Palo Alto Networks에 (i) 사용자를 대신하여 데이터를 수집하고 억제 등의 작업을 수행하는 것과 (ii) 이 데이터를 처리하여 사용자에게 서비스를 제공하는 것을 승인하게 됩니다. 사용자는 이 승인을 제공할 권리가 있음을 확인합니다.",
    "c. Provide a":
      "c. 토큰의",
    "for your token (e.g., “Cortex Integration”).":
      "을(를) 지정합니다(예: \"Cortex Integration\").",
    "CI/CD System Scan":
      "CI/CD 시스템 스캔",
    "Code Scan":
      "코드 스캔",
    "Enable CI/CD system scanning":
      "CI/CD 시스템 스캔 사용",
    "System scanning":
      "시스템 스캔",
    "Configure Job":
      "작업 구성",
    "Map repositories":
      "리포지토리 매핑",
    "Connect Checkmarx One":
      "Checkmarx One 연결",
    "Sign in to Checkmarx One":
      "Checkmarx One에 로그인",
    "CircleCI personal API token":
      "CircleCI 개인 API 토큰",
    "Personal API token":
      "개인 API 토큰",
    "Copy the personal API token to clipboard and paste it here.":
      "개인 API 토큰을 클립보드에 복사하여 여기에 붙여넣습니다.",
    "Create a personal API token in CircleCI.":
      "CircleCI에서 개인 API 토큰을 생성합니다.",
    "Create a dedicated user in the organization’s VCS to integrate CircleCI with Cortex, to prevent the integration breaking if the user leaves the organization":
      "사용자가 조직을 떠날 경우 통합이 중단되는 것을 방지하기 위해, 조직의 VCS에 전용 사용자를 만들어 CircleCI와 Cortex를 통합합니다",
    "Ensure that the dedicated user follows all the organization’s projects in CircleCI":
      "전용 사용자가 CircleCI에서 조직의 모든 프로젝트를 팔로우하고 있는지 확인합니다",
    "Login to CircleCI with your version control system (VCS) user credentials.":
      "버전 관리 시스템(VCS) 사용자 자격 증명으로 CircleCI에 로그인합니다.",
    "To enable Cortex Application Security visibility across all CircleCI projects, you must log in to CircleCI using your VCS credentials Note: the CircleCI user base is integrated with the VCS, which means that CircleCI users inherit the permissions granted to VCS users.":
      "모든 CircleCI 프로젝트에서 Cortex Application Security 가시성을 활성화하려면 VCS 자격 증명을 사용하여 CircleCI에 로그인해야 합니다. 참고: CircleCI 사용자 기반은 VCS와 통합되어 있으므로 CircleCI 사용자는 VCS 사용자에게 부여된 권한을 상속합니다.",
    "Cisco recommends that you use different accounts for interfacing with the API and the Firepower User Interface. Credentials cannot be used for both interfaces simultaneously, and will be logged out without warning if used for both.":
      "Cisco는 API와 Firepower 사용자 인터페이스에 서로 다른 계정을 사용할 것을 권장합니다. 자격 증명은 두 인터페이스에서 동시에 사용할 수 없으며, 둘 다에서 사용하면 경고 없이 로그아웃됩니다.",
    "Collect logs and data from Dropbox.":
      "Dropbox에서 로그와 데이터를 수집합니다.",
    "Configuring Cisco ASA":
      "Cisco ASA 구성",
    "Connect to Cisco Umbrella:":
      "Cisco Umbrella에 연결:",
    "DBot Score Suspicious Threshold (-100 to 100)":
      "DBot 점수 의심 임계값(-100~100)",
    "Score Malicious Threshold (-100 to 100)":
      "악성 점수 임계값(-100~100)",
    "Default is 50. Maximum is 100.":
      "기본값은 50이며 최댓값은 100입니다.",
    "Make sure the malicious threshold is less than the suspicious threshold.":
      "악성 임계값이 의심 임계값보다 작은지 확인하세요.",
    "Make sure the suspicious threshold is greater than the malicious threshold.":
      "의심 임계값이 악성 임계값보다 큰지 확인하세요.",
    "Deprecated. Use ***EWS Extension Online Powershell v3*** instead.":
      "사용 중단되었습니다. 대신 ***EWS Extension Online Powershell v3***을(를) 사용하세요.",
    "Deprecated. Use the Elasticsearch v2 integration instead.":
      "사용 중단되었습니다. 대신 Elasticsearch v2 통합을 사용하세요.",
    "Doppel is a Modern Digital Risk Protection Solution, that detects the phishing and brand cyber attacks on the emerging channels. Doppel scans millions of channels online which includes, social media, domains, paid ads, dark web, emerging channels, etc. Doppel can identify the malicious content and cyber threats, and enables their customers to take down the digital risks proactively.":
      "Doppel은 신흥 채널에서 발생하는 피싱 및 브랜드 사이버 공격을 탐지하는 최신 디지털 리스크 보호 솔루션입니다. Doppel은 소셜 미디어, 도메인, 유료 광고, 다크 웹, 신흥 채널 등 온라인상의 수백만 개 채널을 스캔합니다. Doppel은 악성 콘텐츠와 사이버 위협을 식별하여 고객이 디지털 리스크를 선제적으로 제거할 수 있도록 지원합니다.",
    "The Cortex pack for Doppel mirrors the alerts created by Doppel as Cortex incidents. The pack also contains the commands to perform different operations on Doppel alerts.":
      "Doppel용 Cortex 팩은 Doppel에서 생성한 알림을 Cortex 인시던트로 미러링합니다. 이 팩에는 Doppel 알림에 대해 다양한 작업을 수행하기 위한 명령도 포함되어 있습니다.",
    "Doppel is a Modern Digital Risk Protection Solution, that detects the phishing and brand cyber attacks on the emerging channels. Doppel scans millions of channels online which includes, social media, domains, paid ads, dark web, emerging channels, etc. Doppel can identify the malicious content and cyber threats, and enables their customers to take down the digital risks proactively. The Cortex pack for Doppel mirrors the alerts created by Doppel as Cortex incidents. The pack also contains the commands to perform different operations on Doppel alerts.":
      "Doppel은 신흥 채널에서 발생하는 피싱 및 브랜드 사이버 공격을 탐지하는 최신 디지털 리스크 보호 솔루션입니다. Doppel은 소셜 미디어, 도메인, 유료 광고, 다크 웹, 신흥 채널 등 온라인상의 수백만 개 채널을 스캔합니다. Doppel은 악성 콘텐츠와 사이버 위협을 식별하여 고객이 디지털 리스크를 선제적으로 제거할 수 있도록 지원합니다. Doppel용 Cortex 팩은 Doppel에서 생성한 알림을 Cortex 인시던트로 미러링합니다. 이 팩에는 Doppel 알림에 대해 다양한 작업을 수행하기 위한 명령도 포함되어 있습니다.",
    "e.g., 2022-01-01T00:00:00.000Z, 12 hours, 7 days, 3 months, now.":
      "예: 2022-01-01T00:00:00.000Z, 12 hours, 7 days, 3 months, now.",
    "Timestamp in ISO format or <number> <time unit>,":
      "ISO 형식의 타임스탬프 또는 \"<number> <time unit>\" 형식,",
    "Timestamp in ISO format or <number> <time unit>, e.g., 2022-01-01T00:00:00.000Z, 12 hours, 7 days, 3 months, now.":
      "ISO 형식의 타임스탬프 또는 \"<number> <time unit>\" 형식(예: 2022-01-01T00:00:00.000Z, 12 hours, 7 days, 3 months, now).",
    "First fetch":
      "최초 가져오기",
    "First fetch timestamp (<number> <time unit>, e.g., 12 hours, 7 days).":
      "최초 가져오기 타임스탬프(<number> <time unit>, 예: 12 hours, 7 days).",
    "Enable sftp on your server CheckPoint guide to walk you through: https://supportcenter.checkpoint.com/supportcenter/portal?eventSubmit_doGoviewsolutiondetails=&solutionid=sk82281":
      "서버에서 sftp를 활성화합니다. 절차는 CheckPoint 가이드를 참조하세요: https://supportcenter.checkpoint.com/supportcenter/portal?eventSubmit_doGoviewsolutiondetails=&solutionid=sk82281",
    "Enter instance display name here":
      "여기에 인스턴스 표시 이름을 입력하세요",
    "Example: Tenant name":
      "예: 테넌트 이름",
    "Tenant name":
      "테넌트 이름",
    "The unique string generated in the IAM portal":
      "IAM 포털에서 생성된 고유 문자열",
    "Entra ID Groups integration (formely Azure Active Directory Groups) enables you to create and manage different types of groups and group functionality according to your requirements.":
      "Entra ID Groups 통합(이전 명칭: Azure Active Directory Groups)을 사용하면 요구 사항에 따라 다양한 유형의 그룹과 그룹 기능을 만들고 관리할 수 있습니다.",
    "The Entra ID Users integration (formerly Azure Active Directory Users) is a Unified gateway to security insights - all from a unified Microsoft Graph User API.":
      "Entra ID Users 통합(이전 명칭: Azure Active Directory Users)은 통합 Microsoft Graph User API를 통해 보안 인사이트에 접근할 수 있는 통합 게이트웨이입니다.",
    "Use the Entra ID Applications integration (formerly Azure Active Directory Applications) to manage authorized applications.":
      "Entra ID Applications 통합(이전 명칭: Azure Active Directory Applications)을 사용하여 승인된 애플리케이션을 관리합니다.",
    "Use the Entra ID Identity And Access integration to manage roles and members (formerly Azure Active Directory Identity And Access).":
      "Entra ID Identity And Access 통합을 사용하여 역할과 멤버를 관리합니다(이전 명칭: Azure Active Directory Identity And Access).",
    "Exchange Web Services and Office 365 (mail).":
      "Exchange Web Services 및 Office 365(메일).",
    "Exchange Web Services mail sender. Note: this integration supports Office 365 basic authentication only. If you are using Office 365, we recommend using the EWS O365 Integration instead, which supports modern authentication (oauth2). Deprecated. Use EWS v2 instead":
      "Exchange Web Services 메일 발신기입니다. 참고: 이 통합은 Office 365 기본 인증만 지원합니다. Office 365를 사용하는 경우 최신 인증(oauth2)을 지원하는 EWS O365 통합을 대신 사용하는 것이 좋습니다. 사용 중단되었습니다. 대신 EWS v2를 사용하세요",
    "The new EWS O365 integration uses OAuth 2.0 protocol and can be used with Exchange Online and Office 365 (mail).":
      "새로운 EWS O365 통합은 OAuth 2.0 프로토콜을 사용하며 Exchange Online 및 Office 365(메일)에서 사용할 수 있습니다.",
    "Use the EWS Extension Online Powershell v3 integration to get information about mailboxes and users in your organization. This integration can also retrieve and modify Tenant Allow/Block Lists.":
      "EWS Extension Online Powershell v3 통합을 사용하여 조직의 사서함과 사용자에 대한 정보를 가져옵니다. 이 통합은 테넌트 허용/차단 목록을 검색하고 수정할 수도 있습니다.",
    "Feed Name":
      "피드 이름",
    "Filter by":
      "필터 기준",
    "Filter operator":
      "필터 연산자",
    "Filter value":
      "필터 값",
    "Recipient filter operator":
      "수신자 필터 연산자",
    "Recipient filter value":
      "수신자 필터 값",
    "Message field by which to filter the results.":
      "결과를 필터링할 메시지 필드입니다.",
    "Operator on the message field.":
      "메시지 필드에 대한 연산자입니다.",
    "Recipient filter value to fetch by message field.":
      "메시지 필드로 가져올 수신자 필터 값입니다.",
    "Recipient operator filter.":
      "수신자 연산자 필터입니다.",
    "The value to search for.":
      "검색할 값입니다.",
    "The date or number of days from when to start fetching indicators.":
      "지표 가져오기를 시작할 날짜 또는 일 수입니다.",
    "The Traffic Light Protocol (TLP) designation to apply to indicators fetched from the feed.":
      "피드에서 가져온 지표에 적용할 Traffic Light Protocol(TLP) 지정입니다.",
    "HTTP requests timeout in seconds. The default is 60 seconds.":
      "HTTP 요청 시간 제한(초)입니다. 기본값은 60초입니다.",
    "Server URL for Cisco Stealthwatch console e.g.: https://ip:port/.":
      "Cisco Stealthwatch 콘솔의 서버 URL입니다(예: https://ip:port/).",
    "Getting Credentials":
      "자격 증명 가져오기",
    "How to configure the integration:":
      "통합 구성 방법:",
    "Step 1: Obtain Cisco Umbrella Investigate API Key & Secret":
      "1단계: Cisco Umbrella Investigate API 키 및 시크릿 가져오기",
    "Step 2: Configure Cortex Credentials":
      "2단계: Cortex 자격 증명 구성",
    "Navigate to API Keys:":
      "API 키로 이동:",
    "If you are using ASAv (Cisco Adaptive Security Virtual Appliance) don’t forget to check the ASAv box.":
      "ASAv(Cisco Adaptive Security Virtual Appliance)를 사용하는 경우 ASAv 확인란을 선택해야 합니다.",
    "Is ASAv":
      "ASAv 사용",
    "In the Smart Console, enable the web api: Management & Setting → Blades → Management API, Advanced Setting → All IP address":
      "Smart Console에서 웹 API를 활성화합니다: Management & Setting → Blades → Management API, Advanced Setting → All IP address",
    "In time zone configuration settings, set the following:":
      "시간대 구성 설정에서 다음과 같이 설정합니다:",
    "In your threat grid instance, click your user name at the right top corner.":
      "Threat Grid 인스턴스에서 오른쪽 상단의 사용자 이름을 클릭합니다.",
    "The time zone should be configured to GMT +00:00.":
      "시간대는 GMT +00:00으로 구성해야 합니다.",
    "Require users to enter additional password":
      "사용자에게 추가 비밀번호 입력 요구",
    "Select my account.":
      "내 계정을 선택합니다.",
    "Select region":
      "리전 선택",
    "Server Port (e.g. 4434)":
      "서버 포트(예: 4434)",
    "Server URL (e.g. example.net or 8.8.8.8)":
      "서버 URL(예: example.net 또는 8.8.8.8)",
    "Server URL (e.g., https://192.168.0.1)":
      "서버 URL(예: https://192.168.0.1)",
    "Stealthwatch's server URL":
      "Stealthwatch 서버 URL",
    "Supports FMC 6.2.3 and above":
      "FMC 6.2.3 이상을 지원합니다",
    "Search for and analyze data in real time.":
      "데이터를 실시간으로 검색하고 분석합니다.",
    "Search for and analyze data in real time. Supports version 6 and later.":
      "데이터를 실시간으로 검색하고 분석합니다. 버전 6 이상을 지원합니다.",
    "Supports version 6 and later.":
      "버전 6 이상을 지원합니다.",
    "The first time you connect to the REST API you may receive an error that the connection is not secure due to an invalid certificate. Add an exception in your browser to use the certificate and accept the connection.":
      "REST API에 처음 연결할 때 인증서가 유효하지 않아 연결이 안전하지 않다는 오류가 표시될 수 있습니다. 이 경우 브라우저에서 예외를 추가하여 해당 인증서를 사용하고 연결을 수락하세요.",
    "The user role should have access privilages to the following:":
      "사용자 역할에는 다음에 대한 액세스 권한이 있어야 합니다:",
    "The username and password credentials are used to authenticate with the Cisco SMA API for the provided instance URL.":
      "사용자 이름과 비밀번호 자격 증명은 제공된 인스턴스 URL의 Cisco SMA API 인증에 사용됩니다.",
    "The username and password required by this integration are the same as the credentials used to login into the Cisco Stelathwatch console.":
      "이 통합에 필요한 사용자 이름과 비밀번호는 Cisco Stealthwatch 콘솔에 로그인할 때 사용하는 자격 증명과 동일합니다.",
    "Under the API Key section in the left you will see your API.":
      "왼쪽의 API 키 섹션에 사용자의 API가 표시됩니다.",
    "Use Docker V2 connector in Cortex Cloud to scan and secure container images from any container registry that supports the Docker V2 protocol, ensuring comprehensive security and compliance.":
      "Cortex Cloud에서 Docker V2 커넥터를 사용하여 Docker V2 프로토콜을 지원하는 모든 컨테이너 레지스트리의 컨테이너 이미지를 스캔하고 보호함으로써 포괄적인 보안과 규정 준수를 보장합니다.",
    "User Credentials":
      "사용자 자격 증명",
    "When using Cortex credentials, insert your API key as the credential username and your API secret as the password.":
      "Cortex 자격 증명을 사용하는 경우 API 키를 자격 증명 사용자 이름으로, API 시크릿을 비밀번호로 입력합니다.",
    "With Token Based Authentication you obtain a token by providing your username and password. You use this token to access an HTTP service for a limited time period without the need for the username and password with every request. In other words, to eliminate the need for authenticating with your username and password with each request.":
      "토큰 기반 인증에서는 사용자 이름과 비밀번호를 제공하여 토큰을 가져옵니다. 이 토큰을 사용하면 요청할 때마다 사용자 이름과 비밀번호를 입력하지 않아도 제한된 기간 동안 HTTP 서비스에 액세스할 수 있습니다. 즉, 요청마다 사용자 이름과 비밀번호로 인증할 필요가 없어집니다.",
    "OAuth Client":
      "OAuth 클라이언트",
    "Use the generated API key as the":
      "생성된 API 키를 다음 항목으로 사용합니다:",
    "Use the generated API secret as the":
      "생성된 API 시크릿을 다음 항목으로 사용합니다:",

    // --- Batch: strings from the Collector export #7 (Code42/Contentful/Claude/Cortex CLI wizard, parameter labels and tooltips) ---
    // Fragments such as "and", "or the", "Follow the", "Go to the", "Run the", "Select the", "To get the", "To use the" are intentionally NOT registered.
    "(API Key ID, API Key)":
      "(API 키 ID, API 키)",
    "Adjust and refine your configuration settings":
      "구성 설정을 조정하고 세부적으로 설정합니다",
    "After this API Client is set up, use the API Client ID and Secret (in the “password” field) to configure the Code42 integration.":
      "이 API 클라이언트를 설정한 후 API 클라이언트 ID와 시크릿(\"password\" 필드)을 사용하여 Code42 통합을 구성합니다.",
    "Alert severities to fetch when fetching incidents":
      "인시던트를 가져올 때 함께 가져올 알림 심각도",
    "Alerts to fetch per run; note that increasing this value may result in slow performance if too many results are returned at once":
      "실행당 가져올 알림 수입니다. 이 값을 늘리면 한 번에 반환되는 결과가 너무 많을 경우 성능이 저하될 수 있습니다",
    "Anthropic Claude (Standard Connector)":
      "Anthropic Claude(표준 커넥터)",
    "API Client ID":
      "API 클라이언트 ID",
    "API Client Secret":
      "API 클라이언트 시크릿",
    "API Gateway URL for your Code42 environment":
      "Code42 환경의 API 게이트웨이 URL",
    "API Key ID":
      "API 키 ID",
    "Authenticate":
      "인증",
    "Authenticate using an Anthropic Claude Compliance Access Key (sk-ant-api01-...)":
      "Anthropic Claude 규정 준수 액세스 키(sk-ant-api01-...)를 사용하여 인증합니다",
    "Base marketplace url":
      "기본 마켓플레이스 URL",
    "Capabilities status":
      "기능 상태",
    "Cisco Umbrella Investigate base URL.":
      "Cisco Umbrella Investigate의 기본 URL입니다.",
    "Code42 provides simple, fast detection and response to everyday data loss from insider threats by focusing on customer data on endpoints and the cloud.":
      "Code42는 엔드포인트와 클라우드의 고객 데이터에 집중하여 내부자 위협으로 인한 일상적인 데이터 유출에 대해 간단하고 빠른 탐지 및 대응을 제공합니다.",
    "Compliance Access Key":
      "규정 준수 액세스 키",
    "Configure":
      "구성",
    "Contentful Access Token":
      "Contentful 액세스 토큰",
    "Copy":
      "복사",
    "Copy and paste the key.":
      "키를 복사하여 붙여넣습니다.",
    "Copy the command and paste it into your terminal or download it.":
      "명령을 복사하여 터미널에 붙여넣거나 다운로드합니다.",
    "Core Server URL":
      "Core 서버 URL",
    "Cortex integrates with CI/CD pipelines, helping organizations shift-left. Use the Cortex CLI command line tool to scan container images for vulnerabilities, malware, and secrets. To run and authenticate Cortex CLI, follow the steps below.":
      "Cortex는 CI/CD 파이프라인과 통합되어 조직의 시프트 레프트를 지원합니다. Cortex CLI 명령줄 도구를 사용하여 컨테이너 이미지의 취약성, 멀웨어, 시크릿을 스캔합니다. Cortex CLI를 실행하고 인증하려면 아래 단계를 따르세요.",
    "create an API Client":
      "API 클라이언트를 생성",
    "Create instance":
      "인스턴스 생성",
    "Default timeout (seconds) for wait on locks to be released":
      "잠금이 해제될 때까지 대기하는 기본 시간 제한(초)",
    "First fetch time range (<number> <time unit>, e.g., 1 hour, 30 minutes)":
      "최초 가져오기 시간 범위(<number> <time unit>, 예: 1 hour, 30 minutes)",
    "For Cortex or Cortex XSIAM, use the Copy API URL button on the API Keys page. For Cortex, use the server URL.":
      "Cortex 또는 Cortex XSIAM의 경우 API Keys 페이지의 Copy API URL 버튼을 사용합니다. Cortex의 경우 서버 URL을 사용합니다.",
    "From the ID column, copy the Key ID.":
      "ID 열에서 키 ID를 복사합니다.",
    "Generate an API Key and API Key ID":
      "API 키 및 API 키 ID 생성",
    "Go to Settings -> Configurations -> API Keys.":
      "Settings -> Configurations -> API Keys로 이동합니다.",
    "Include the list of files in returned incidents.":
      "반환되는 인시던트에 파일 목록을 포함합니다.",
    "Instance configuration completed":
      "인스턴스 구성이 완료되었습니다",
    "Latest version":
      "최신 버전",
    "Make sure your API key has the proper permissions. For more information, please refer to the":
      "API 키에 적절한 권한이 있는지 확인하세요. 자세한 내용은 다음을 참조하세요:",
    "Marketplace content packs":
      "마켓플레이스 콘텐츠 팩",
    "Please follow the documentation below for step by step guide on how to onboard your Contentful instance":
      "Contentful 인스턴스를 온보딩하는 단계별 가이드는 아래 문서를 따르세요",
    "Review your instance configuration":
      "인스턴스 구성을 검토하세요",
    "Run automated actions and remediation commands against the connected service.":
      "연결된 서비스에 대해 자동화된 작업과 해결 명령을 실행합니다.",
    "SaaS Posture Configuration Monitoring":
      "SaaS 포스처 구성 모니터링",
    "Scan and protect data across the Claude service":
      "Claude 서비스 전반의 데이터를 스캔하고 보호합니다",
    "Select OS":
      "OS 선택",
    "Start typing..":
      "입력을 시작하세요..",
    "Sub capabilities":
      "하위 기능",
    "Sync integration cache":
      "통합 캐시 동기화",
    "The access token is used to authenticate requests to the Contentful Management API. It must have the required permissions to access your organization's configuration.":
      "액세스 토큰은 Contentful Management API에 대한 요청을 인증하는 데 사용됩니다. 조직의 구성에 액세스하는 데 필요한 권한이 있어야 합니다.",
    "The Core Locking integration allows prevention of concurrent execution of scripts or commands, using a wait-lock-release flow (mutex).":
      "Core Locking 통합을 사용하면 대기-잠금-해제 흐름(뮤텍스)을 통해 스크립트 또는 명령의 동시 실행을 방지할 수 있습니다.",
    "To authenticate with Cortex CLI, grant it executable permissions and then copy the API key and API key ID below and substitute it with $[CORTEX_API_KEY] and $[CORTEX_API_KEY_ID].":
      "Cortex CLI로 인증하려면 실행 권한을 부여한 다음 아래의 API 키와 API 키 ID를 복사하여 $[CORTEX_API_KEY] 및 $[CORTEX_API_KEY_ID]를 대체합니다.",
    "To configure this integration, you will need to":
      "이 통합을 구성하려면",
    "within the Code42 console with the following permissions:":
      "해야 합니다. Code42 콘솔에서 다음 권한을 부여하세요:",
    "Use tenant":
      "테넌트 사용",
    "Use the lock name argument to support multiple locks in different flows.":
      "lock name 인수를 사용하면 서로 다른 흐름에서 여러 잠금을 지원할 수 있습니다.",
    "Verification pending":
      "확인 대기 중",
    "Verification Pending":
      "확인 대기 중",
    "Whether API calls should be made to the current tenant instead of the main tenant.":
      "메인 테넌트 대신 현재 테넌트에 API 호출을 수행할지 여부를 지정합니다.",
    "Whether authentication should be using \"Standard\" API key or \"Advanced\" API key. For XSOAR version < 8.0.0, choose \"Standard\".":
      "인증에 \"Standard\" API 키를 사용할지 \"Advanced\" API 키를 사용할지 지정합니다. XSOAR 버전이 8.0.0 미만인 경우 \"Standard\"를 선택하세요.",
    "Whether to sync the integration cache with the database (Available from Cortex).":
      "통합 캐시를 데이터베이스와 동기화할지 여부를 지정합니다(Cortex에서 사용 가능).",
    "With upload results permissions":
      "업로드 결과 권한 포함",

    // --- Batch: strings from the Collector export #8 (CrowdStrike/CyberArk EPM/Cybereason/Cribl parameter labels, tooltips and integration card descriptions) ---
    // Fragments such as "and", "The", "In the", "by searching for", "Do not enable", "To get an API client ID and secret, contact" are intentionally NOT registered.
    "(Application ID, Application Secret)":
      "(애플리케이션 ID, 애플리케이션 시크릿)",
    "(Client ID, Secret)":
      "(클라이언트 ID, 시크릿)",
    "(Credentials, Password)":
      "(자격 증명, 비밀번호)",
    "(Tenant API Key)":
      "(테넌트 API 키)",
    "(Deprecated) Required for local(EPM) authentication only. This parameter is deprecated and no longer used.":
      "(사용 중단) 로컬(EPM) 인증에만 필요합니다. 이 매개변수는 사용 중단되었으며 더 이상 사용되지 않습니다.",
    "Advanced threat protection with added local management controls.":
      "로컬 관리 제어 기능이 추가된 고급 위협 방어입니다.",
    "Advanced: Time in minutes to look back when fetching events and detections":
      "고급: 이벤트 및 탐지를 가져올 때 거슬러 올라갈 시간(분)",
    "Advanced: Time in minutes to look back when fetching incidents and detections":
      "고급: 인시던트 및 탐지를 가져올 때 거슬러 올라갈 시간(분)",
    "An Identity and Access Management integration template.":
      "ID 및 액세스 관리 통합 템플릿입니다.",
    "Application Secret":
      "애플리케이션 시크릿",
    "Asset types to fetch":
      "가져올 자산 유형",
    "Assets are collected and stored in datasets.":
      "자산은 수집되어 데이터 세트에 저장됩니다.",
    "Assets Fetch Interval":
      "자산 가져오기 간격",
    "Authenticate with an API token":
      "API 토큰으로 인증",
    "Check this box to Enable Polling for Cybereason EPP Malops.":
      "이 확인란을 선택하면 Cybereason EPP Malop 폴링이 활성화됩니다.",
    "Choose what event types to fetch - You can choose any combination. Note: Records from the detection endpoint of the CrowdStrike Falcon UI could be of types: 'Endpoint Detection' and 'OFP Detection'.":
      "가져올 이벤트 유형을 선택합니다. 원하는 조합을 선택할 수 있습니다. 참고: CrowdStrike Falcon UI의 탐지 엔드포인트 레코드 유형은 'Endpoint Detection' 및 'OFP Detection'일 수 있습니다.",
    "Choose what incident types to fetch - You can choose any combination. Note:":
      "가져올 인시던트 유형을 선택합니다. 원하는 조합을 선택할 수 있습니다. 참고:",
    "Choose what incident types to fetch - You can choose any combination. Note: Records from the detection endpoint of the CrowdStrike Falcon UI could be of types: 'Endpoint Detection' and 'OFP Detection'.":
      "가져올 인시던트 유형을 선택합니다. 원하는 조합을 선택할 수 있습니다. 참고: CrowdStrike Falcon UI의 탐지 엔드포인트 레코드 유형은 'Endpoint Detection' 및 'OFP Detection'일 수 있습니다.",
    "Records from the detection endpoint of the CrowdStrike Falcon UI could be of types: 'Endpoint Detection' and 'OFP Detection'.":
      "CrowdStrike Falcon UI의 탐지 엔드포인트 레코드 유형은 'Endpoint Detection' 및 'OFP Detection'일 수 있습니다.",
    "client_id: Service username (configured as OAuth confidential client).":
      "client_id: 서비스 사용자 이름(OAuth 기밀 클라이언트로 구성됨).",
    "client_secret: Service user password for OAuth2 authentication.":
      "client_secret: OAuth2 인증용 서비스 사용자 비밀번호.",
    "Collect logs and data from Google Workspace.":
      "Google Workspace에서 로그와 데이터를 수집합니다.",
    "Collects logs and data from a Google Cloud Platform (GCP) Pub/Sub.":
      "Google Cloud Platform(GCP) Pub/Sub에서 로그와 데이터를 수집합니다.",
    "Connect GitLab Container Registry with Cortex Cloud to scan and secure your container images, ensuring comprehensive security and compliance.":
      "GitLab Container Registry를 Cortex Cloud에 연결하여 컨테이너 이미지를 스캔하고 보호함으로써 포괄적인 보안과 규정 준수를 보장합니다.",
    "Connect Harbor Container Registry with Cortex Cloud to scan and secure your container images, ensuring comprehensive security and compliance.":
      "Harbor Container Registry를 Cortex Cloud에 연결하여 컨테이너 이미지를 스캔하고 보호함으로써 포괄적인 보안과 규정 준수를 보장합니다.",
    "Detections from On-Demand Scans filter query":
      "온디맨드 스캔의 탐지 필터 쿼리",
    "Deprecated - We recommend using GSuite Admin instead. Google apps Admin API, or GSuite":
      "사용 중단되었습니다. 대신 GSuite Admin을 사용하는 것이 좋습니다. Google apps Admin API 또는 GSuite",
    "Deprecated. Use FireEyeHX v2 instead.":
      "사용 중단되었습니다. 대신 FireEyeHX v2를 사용하세요.",
    "Deprecated. Use IBM QRadar v2 or IBM QRadar v3 instead.":
      "사용 중단되었습니다. 대신 IBM QRadar v2 또는 IBM QRadar v3를 사용하세요.",
    "Deprecated. Use the IBM QRadar v3 integration instead. Fetch offenses from QRadar using Cortex. Supports API versions until 10.0. You can fetch the offenses with their related events and assets by creating a comma-separated list of event fields.":
      "사용 중단되었습니다. 대신 IBM QRadar v3 통합을 사용하세요. Cortex를 사용하여 QRadar에서 오펜스를 가져옵니다. 10.0까지의 API 버전을 지원합니다. 이벤트 필드의 쉼표로 구분된 목록을 만들어 관련 이벤트 및 자산과 함께 오펜스를 가져올 수 있습니다.",
    "Endpoint detection and response to manage and query Cybereason Malops, Connections , Processes and many more.":
      "Cybereason Malop, 연결, 프로세스 등을 관리하고 쿼리하기 위한 엔드포인트 탐지 및 대응입니다.",
    "Endpoint Detections filter query":
      "엔드포인트 탐지 필터 쿼리",
    "Endpoint Information":
      "엔드포인트 정보",
    "EPM Region-based tenant URL":
      "EPM 리전 기반 테넌트 URL",
    "Event Fetch types":
      "이벤트 가져오기 유형",
    "Events Fetch Interval":
      "이벤트 가져오기 간격",
    "ExtraHop Reveal(x) for Cortex is a network detection and response solution that provides complete visibility of network communications at enterprise scale, real-time threat detections backed by machine learning, and guided investigation workflows that simplify response.":
      "ExtraHop Reveal(x) for Cortex는 엔터프라이즈 규모의 네트워크 통신에 대한 완전한 가시성, 머신 러닝 기반의 실시간 위협 탐지, 대응을 간소화하는 가이드형 조사 워크플로를 제공하는 네트워크 탐지 및 대응 솔루션입니다.",
    "F5 Silverline Threat Intelligence is a cloud-based service incorporating external IP reputation and reducing threat-based communications. By identifying IP addresses and security categories associated with malicious activity, this managed service integrates dynamic lists of threatening IP addresses with the Silverline cloud-based platform, adding context-based security to policy decisions.":
      "F5 Silverline Threat Intelligence는 외부 IP 평판을 통합하고 위협 기반 통신을 줄이는 클라우드 기반 서비스입니다. 악성 활동과 관련된 IP 주소 및 보안 카테고리를 식별하여, 이 관리형 서비스는 위협적인 IP 주소의 동적 목록을 Silverline 클라우드 기반 플랫폼과 통합하고 정책 결정에 컨텍스트 기반 보안을 추가합니다.",
    "Fetch Asset types":
      "자산 유형 가져오기",
    "Fetch assets":
      "자산 가져오기",
    "Fetch Assets":
      "자산 가져오기",
    "Fetch assets and vulnerabilities":
      "자산 및 취약성 가져오기",
    "Fetch by \"MALOP UPDATE TIME\" (Fetching by Malop creation time is no longer supported)":
      "\"MALOP UPDATE TIME\"으로 가져오기(Malop 생성 시간별 가져오기는 더 이상 지원되지 않습니다)",
    "Fetch events":
      "이벤트 가져오기",
    "FireEye Email Security (EX) series protects against breaches caused by advanced email attacks.":
      "FireEye Email Security(EX) 시리즈는 고급 이메일 공격으로 인한 침해로부터 보호합니다.",
    "FireEye Endpoint Security is an integrated solution that detects and protects endpoints against known and unknown threats. This integration provides access to information about endpoints, acquisitions, alerts, indicators, and containment. You can extract critical data and effectively operate the security operations automated playbook.":
      "FireEye Endpoint Security는 알려진 위협과 알려지지 않은 위협으로부터 엔드포인트를 탐지하고 보호하는 통합 솔루션입니다. 이 통합을 통해 엔드포인트, 수집, 알림, 지표 및 격리에 대한 정보에 액세스할 수 있습니다. 중요한 데이터를 추출하고 보안 운영 자동화 플레이북을 효과적으로 운영할 수 있습니다.",
    "First fetch timestamp (<number> <time unit>, e.g., 12 hours, 7 days, 3 months, 1 year)":
      "첫 번째 가져오기 타임스탬프(<숫자> <시간 단위>, 예: 12 hours, 7 days, 3 months, 1 year)",
    "First fetch timestamp (<number> <time unit>, e.g., 12 hours, 7 days)":
      "첫 번째 가져오기 타임스탬프(<숫자> <시간 단위>, 예: 12 hours, 7 days)",
    "Flashpoint Vulnerability Feed Integration allows importing vulnerability intelligence from the Flashpoint platform, empowering teams to reduce exposure windows by identifying high-risk vulnerabilities weeks before public sources. This includes independent research, zero-day disclosures, analyst recommendations, affected and non-affected versions, and over 105,000 vulnerabilities not found in the public NVD/CVE feeds database.":
      "Flashpoint Vulnerability Feed Integration을 사용하면 Flashpoint 플랫폼에서 취약성 인텔리전스를 가져올 수 있으며, 공개 소스보다 몇 주 앞서 고위험 취약성을 식별하여 팀이 노출 기간을 줄일 수 있습니다. 여기에는 독자적인 연구, 제로데이 공개, 분석가 권장 사항, 영향을 받는 버전과 받지 않는 버전, 공개 NVD/CVE 피드 데이터베이스에 없는 105,000개 이상의 취약성이 포함됩니다.",
    "FortiGate provides flawless convergence that can scale to any location: remote office, branch, campus, data center, and cloud. FortiGate always delivered on the concept of hybrid mesh firewalls with FortiManager for unified management and consistent security across complex hybrid environments. The Fortinet FortiOS operating system provides deep visibility and security across a variety of form factors.":
      "FortiGate는 원격 사무실, 지사, 캠퍼스, 데이터 센터, 클라우드 등 모든 위치로 확장할 수 있는 완벽한 컨버전스를 제공합니다. FortiGate는 복잡한 하이브리드 환경 전반에서 통합 관리와 일관된 보안을 제공하는 FortiManager와 함께 하이브리드 메시 방화벽 개념을 항상 실현해 왔습니다. Fortinet FortiOS 운영 체제는 다양한 폼 팩터에 걸쳐 심층적인 가시성과 보안을 제공합니다.",
    "Freshservice is a service management solution that allows customers to manage service requests, incidents, change requests tasks, and problem investigation.":
      "Freshservice는 고객이 서비스 요청, 인시던트, 변경 요청 작업, 문제 조사를 관리할 수 있는 서비스 관리 솔루션입니다.",
    "G Suite or Google Workspace Admin is an integration to perform an action on IT infrastructure, create users, update settings, and more administrative tasks.":
      "G Suite 또는 Google Workspace Admin은 IT 인프라에 대한 작업 수행, 사용자 생성, 설정 업데이트 등 다양한 관리 작업을 수행하는 통합입니다.",
    "Gmail API and user management (This integration replaces the Gmail functionality in the GoogleApps API and G Suite integration).":
      "Gmail API 및 사용자 관리(이 통합은 GoogleApps API 및 G Suite 통합의 Gmail 기능을 대체합니다).",
    "Gmail API using OAuth 2.0.":
      "OAuth 2.0을 사용하는 Gmail API입니다.",
    "Google Compute Engine delivers virtual machines running in Google's innovative data centers and worldwide fiber network. Compute Engine's tooling and workflow support enable scaling from single instances to global, load-balanced cloud computing.":
      "Google Compute Engine은 Google의 혁신적인 데이터 센터와 전 세계 광케이블 네트워크에서 실행되는 가상 머신을 제공합니다. Compute Engine의 도구 및 워크플로 지원을 통해 단일 인스턴스에서 전 세계 로드 밸런싱 클라우드 컴퓨팅까지 확장할 수 있습니다.",
    "Google Sheets is a spreadsheet program that is part of the free web-based Google applications to create and format spreadsheets. Use this integration to create and modify spreadsheets.":
      "Google Sheets는 스프레드시트를 만들고 서식을 지정하는 무료 웹 기반 Google 애플리케이션의 일부인 스프레드시트 프로그램입니다. 이 통합을 사용하여 스프레드시트를 만들고 수정합니다.",
    "HTTP Timeout":
      "HTTP 제한 시간",
    "IBM QRadar SIEM helps security teams accurately detect and prioritize threats across the enterprise, supports API versions 10.1 and above. Provides intelligent insights that enable teams to respond quickly to reduce the impact of incidents.":
      "IBM QRadar SIEM은 보안 팀이 전사적으로 위협을 정확하게 탐지하고 우선순위를 지정할 수 있도록 지원하며, API 버전 10.1 이상을 지원합니다. 팀이 신속하게 대응하여 인시던트의 영향을 줄일 수 있도록 지능형 인사이트를 제공합니다.",
    "Identity URL":
      "아이덴티티 URL",
    "IDP Detections filter query":
      "IDP 탐지 필터 쿼리",
    "In new Cuckoo installations, a random API token is automatically generated for you, and located in the cuckoo.conf file. In order to authenticate with an API token, insert ‘__token’ in the “Username” textbox, and the token itself in the “Password” textbox.":
      "새로운 Cuckoo 설치에서는 임의의 API 토큰이 자동으로 생성되어 cuckoo.conf 파일에 위치합니다. API 토큰으로 인증하려면 \"Username\" 텍스트 상자에 '__token'을 입력하고 \"Password\" 텍스트 상자에 토큰 자체를 입력합니다.",
    "In order to use the CrowdStrike Falcon integration, the API client and secret must have the following scopes and permissions:":
      "CrowdStrike Falcon 통합을 사용하려면 API 클라이언트와 시크릿에 다음 범위와 권한이 있어야 합니다.",
    "Incident Fetch types":
      "인시던트 가져오기 유형",
    "Integrate Application Security with your HCP Terraform organization to gain visibility into your Terraform runs.":
      "Application Security를 HCP Terraform 조직과 통합하여 Terraform 실행에 대한 가시성을 확보합니다.",
    "Integrate with Envoy Identity Access Management services to execute CRUD operations to employee lifecycle processes.":
      "Envoy Identity Access Management 서비스와 통합하여 직원 수명 주기 프로세스에 대한 CRUD 작업을 실행합니다.",
    "Integrate with Exceed LMS Identity Access Management services to execute CRUD operations to employee lifecycle processes.":
      "Exceed LMS Identity Access Management 서비스와 통합하여 직원 수명 주기 프로세스에 대한 CRUD 작업을 실행합니다.",
    "Integrate with GitHub services to perform Identity Lifecycle Management operations.":
      "GitHub 서비스와 통합하여 ID 수명 주기 관리 작업을 수행합니다.",
    "Integration to GitHub API.":
      "GitHub API 통합입니다.",
    "Integration version of the httpv2 automation used to send HTTP requests for API calls to endpoints not associated with an existing XSOAR integration.":
      "기존 XSOAR 통합과 연결되지 않은 엔드포인트에 대한 API 호출용 HTTP 요청을 보내는 데 사용되는 httpv2 자동화의 통합 버전입니다.",
    "IOA filter query":
      "IOA 필터 쿼리",
    "IOM filter query":
      "IOM 필터 쿼리",
    "Log events are collected and stored in datasets.":
      "로그 이벤트는 수집되어 데이터 세트에 저장됩니다.",
    "Long running instance":
      "장기 실행 인스턴스",
    "Long running instance for Spotlight vulnerabilities":
      "Spotlight 취약성용 장기 실행 인스턴스",
    "Manage identity and access control for Google Cloud Platform resources.":
      "Google Cloud Platform 리소스의 ID 및 액세스 제어를 관리합니다.",
    "Mobile Detections filter query":
      "모바일 탐지 필터 쿼리",
    "NGSIEM automated leads fetch query":
      "NGSIEM 자동화 리드 가져오기 쿼리",
    "NGSIEM cases fetch query":
      "NGSIEM 케이스 가져오기 쿼리",
    "NGSIEM Detection fetch query":
      "NGSIEM 탐지 가져오기 쿼리",
    "NGSIEM incidents fetch query":
      "NGSIEM 인시던트 가져오기 쿼리",
    "OFP Detections filter query":
      "OFP 탐지 필터 쿼리",
    "Onboard your GitHub Enterprise on-prem to the Cortex Application Security module to gain comprehensive visibility into your GitHub Enterprise platform assets and scan your repositories’ code, configurations, and CI/CD pipelines for security issues.":
      "온프레미스 GitHub Enterprise를 Cortex Application Security 모듈에 온보딩하여 GitHub Enterprise 플랫폼 자산에 대한 포괄적인 가시성을 확보하고 리포지토리의 코드, 구성, CI/CD 파이프라인에서 보안 문제를 스캔합니다.",
    "Onboard your GitHub SaaS to the Cortex Application Security module to gain comprehensive visibility into your GitHub platform assets and scan your repositories’ code, configurations, and CI/CD pipelines for security issues.":
      "GitHub SaaS를 Cortex Application Security 모듈에 온보딩하여 GitHub 플랫폼 자산에 대한 포괄적인 가시성을 확보하고 리포지토리의 코드, 구성, CI/CD 파이프라인에서 보안 문제를 스캔합니다.",
    "Onboard your GitLab SaaS to the Cortex Application Security module to gain comprehensive visibility into your GitLab platform assets and scan your repositories’ code, configurations, and CI/CD pipelines for security issues.":
      "GitLab SaaS를 Cortex Application Security 모듈에 온보딩하여 GitLab 플랫폼 자산에 대한 포괄적인 가시성을 확보하고 리포지토리의 코드, 구성, CI/CD 파이프라인에서 보안 문제를 스캔합니다.",
    "Onboard your GitLab Self Managed on-prem to the Cortex Application Security module to gain comprehensive visibility into your GitLab Self Managed platform assets and scan your repositories’ code, configurations, and CI/CD pipelines for security issues.":
      "온프레미스 GitLab Self Managed를 Cortex Application Security 모듈에 온보딩하여 GitLab Self Managed 플랫폼 자산에 대한 포괄적인 가시성을 확보하고 리포지토리의 코드, 구성, CI/CD 파이프라인에서 보안 문제를 스캔합니다.",
    "Only one collection mode per instance.":
      "인스턴스당 수집 모드는 하나만 사용할 수 있습니다.",
    "Organization Permissions":
      "조직 권한",
    "Perform malware dynamic analysis.":
      "악성코드 동적 분석을 수행합니다.",
    "Prerequisites for OAuth 2.0 Authentication":
      "OAuth 2.0 인증 사전 요구 사항",
    "Recon filter query":
      "Recon 필터 쿼리",
    "Reliability of the source providing the intelligence data. Currently used for “CVE” reputation command.":
      "인텔리전스 데이터를 제공하는 소스의 신뢰도입니다. 현재 \"CVE\" 평판 명령에 사용됩니다.",
    "Required API client scopes":
      "필요한 API 클라이언트 범위",
    "Send push notifications to mobile app":
      "모바일 앱으로 푸시 알림을 보냅니다",
    "Server URL (e.g., https://api.crowdstrike.com)":
      "서버 URL(예: https://api.crowdstrike.com)",
    "Service username (configured as OAuth confidential client).":
      "서비스 사용자 이름(OAuth 기밀 클라이언트로 구성됨).",
    "Spotlight asset and vulnerability collection retrieves only vulnerabilities updated within the last 100 days, keeping each collection focused on recent data.":
      "Spotlight 자산 및 취약성 수집은 지난 100일 이내에 업데이트된 취약성만 검색하여 각 수집이 최신 데이터에 집중되도록 합니다.",
    "Spotlight vulnerabilities only.":
      "Spotlight 취약성만 해당됩니다.",
    "Submit a high volume of samples to run in a sandbox and view reports.":
      "대량의 샘플을 샌드박스에서 실행하도록 제출하고 보고서를 확인합니다.",
    "Supported asset types include:":
      "지원되는 자산 유형은 다음과 같습니다.",
    "Supported in Cortex and Cortex Platform.":
      "Cortex 및 Cortex Platform에서 지원됩니다.",
    "Supported in Cortex and Cortex Platform. Input a value between 1-500. Default is 15.":
      "Cortex 및 Cortex Platform에서 지원됩니다. 1~500 사이의 값을 입력합니다. 기본값은 15입니다.",
    "Tenant API Key":
      "테넌트 API 키",
    "tenant_url: The tenant URL for EPM region (e.g., https://api-na.epm.cyberark.cloud)":
      "tenant_url: EPM 리전의 테넌트 URL(예: https://api-na.epm.cyberark.cloud)",
    "The Application ID of the OAuth2 Server web app configured in Identity Administration.":
      "Identity Administration에서 구성된 OAuth2 Server 웹 앱의 애플리케이션 ID입니다.",
    "The asset sources to ingest into the Cortex Unified Asset Inventory.":
      "Cortex Unified Asset Inventory로 수집할 자산 소스입니다.",
    "The base URL assigned to your organization: https://${workspaceName}-${organizationId}.cribl.cloud":
      "조직에 할당된 기본 URL: https://${workspaceName}-${organizationId}.cribl.cloud",
    "The Cortex Core - IOCs integration uses the Cortex API for detection and response, by natively integrating network, endpoint, and cloud data to stop sophisticated attacks.":
      "Cortex Core - IOCs 통합은 네트워크, 엔드포인트, 클라우드 데이터를 기본적으로 통합하여 정교한 공격을 차단하며, 탐지 및 대응에 Cortex API를 사용합니다.",
    "The CyberArk Identity FQDN for OAuth2 authentication (e.g., https://abc1234.id.cyberark.cloud).":
      "OAuth2 인증용 CyberArk Identity FQDN입니다(예: https://abc1234.id.cyberark.cloud).",
    "The fetch interval for assets and vulnerabilities. It is recommended to set it to 1 hour.":
      "자산 및 취약성 가져오기 간격입니다. 1시간으로 설정하는 것이 좋습니다.",
    "The Illusive Attack Management API allows customers to retrieve detected incidents with a forensics timeline, attack surface insights, collect forensics on-demand, and manage a variety of operations with regard to deceptive entities, deception policies, and more.":
      "Illusive Attack Management API를 사용하면 고객은 포렌식 타임라인이 포함된 탐지된 인시던트를 검색하고, 공격 표면 인사이트를 확인하고, 온디맨드로 포렌식을 수집하고, 기만 엔터티 및 기만 정책 등과 관련된 다양한 작업을 관리할 수 있습니다.",
    "The Indicator of Attack (IOA) fetch query. This is an FQL filter that is combined with the time-range filter using AND. For example: cloud_provider:'aws'. For more information, see the Falcon Query Language (FQL) documentation at: https://www.falconpy.io/Usage/Falcon-Query-Language.html.":
      "Indicator of Attack(IOA) 가져오기 쿼리입니다. AND를 사용하여 시간 범위 필터와 결합되는 FQL 필터입니다. 예: cloud_provider:'aws'. 자세한 내용은 Falcon Query Language(FQL) 설명서를 참조하세요: https://www.falconpy.io/Usage/Falcon-Query-Language.html.",
    "The tenant URL for EPM region (e.g., https://api-na.epm.cyberark.cloud).":
      "EPM 리전의 테넌트 URL입니다(예: https://api-na.epm.cyberark.cloud).",
    "The timeout of the HTTP requests sent to Cortex API (in seconds).":
      "Cortex API로 전송되는 HTTP 요청의 제한 시간입니다(초 단위).",
    "THF Polygon is a Malware Detonation & Research platform designed for deep dynamic analysis and enhanced indicators extraction. THF Polygon analyzes submitted files and urls and extracts deep IOCs that appear when malicious code is triggered and executed. Polygon could be used either for application-level tasks (like smtp-based mail filtering) and analytical purposes (files/urls analysis for verdict, report and indicators).":
      "THF Polygon은 심층 동적 분석과 향상된 지표 추출을 위해 설계된 악성코드 격발 및 조사 플랫폼입니다. THF Polygon은 제출된 파일과 URL을 분석하고 악성 코드가 트리거되어 실행될 때 나타나는 심층 IOC를 추출합니다. Polygon은 애플리케이션 수준 작업(SMTP 기반 메일 필터링 등)과 분석 목적(판정, 보고서, 지표를 위한 파일/URL 분석) 모두에 사용할 수 있습니다.",
    "Third Party Detection fetch query":
      "서드파티 탐지 가져오기 쿼리",
    "This integration is enabled by default for the new CrowdStrike Raptor version.":
      "이 통합은 새로운 CrowdStrike Raptor 버전에서 기본적으로 활성화되어 있습니다.",
    "This integration was integrated and tested with version 23.2.1 of Cybereason Server":
      "이 통합은 Cybereason Server 버전 23.2.1에서 통합 및 테스트되었습니다",
    "To authenticate to EPM with OAuth2, provide the following:":
      "OAuth2로 EPM에 인증하려면 다음을 제공합니다.",
    "To specify an endpoint, use the following command arguments:":
      "엔드포인트를 지정하려면 다음 명령 인수를 사용합니다.",
    "token_url: The CyberArk Identity FQDN for OAuth2 authentication (e.g., https://abc1234.id.cyberark.cloud)":
      "token_url: OAuth2 인증용 CyberArk Identity FQDN(예: https://abc1234.id.cyberark.cloud)",
    "Troubleshooting":
      "문제 해결",
    "Use Falcon Query Language (FQL) to filter results. For more information, see the [FQL Syntax Documentation](https://www.falconpy.io/Usage/Falcon-Query-Language.html).":
      "Falcon Query Language(FQL)를 사용하여 결과를 필터링합니다. 자세한 내용은 [FQL Syntax Documentation](https://www.falconpy.io/Usage/Falcon-Query-Language.html)을 참조하세요.",
    "Use the Cortex Github Action to integrate with your GitHub Workflows and gain visibility into your workflows.":
      "Cortex Github Action을 사용하여 GitHub 워크플로와 통합하고 워크플로에 대한 가시성을 확보합니다.",
    "Use the Falcon Query Language to refine the data collected. For more information, refer to the FQL syntax documentation: https://www.falconpy.io/Usage/Falcon-Query-Language.html":
      "Falcon Query Language를 사용하여 수집되는 데이터를 세분화합니다. 자세한 내용은 FQL 구문 설명서를 참조하세요: https://www.falconpy.io/Usage/Falcon-Query-Language.html",
    "Use the Generic Export Indicators Service integration to provide an endpoint with a list of indicators as a service for the system indicators.":
      "Generic Export Indicators Service 통합을 사용하여 시스템 지표를 위한 서비스로 지표 목록을 엔드포인트에 제공합니다.",
    "Use the Generic SQL integration to run SQL queries on the following databases: MySQL, PostgreSQL, Microsoft SQL Server, Oracle, Teradata and Trino.":
      "Generic SQL 통합을 사용하여 다음 데이터베이스에서 SQL 쿼리를 실행합니다: MySQL, PostgreSQL, Microsoft SQL Server, Oracle, Teradata, Trino.",
    "Use the Google Maps API.":
      "Google Maps API를 사용합니다.",
    "Use this integration to connect securely with a GitHub Model Context Protocol (MCP) server and access its tools in real time.":
      "이 통합을 사용하여 GitHub Model Context Protocol(MCP) 서버에 안전하게 연결하고 해당 도구에 실시간으로 액세스합니다.",
    "Use this integration to connect to an MCP server and automatically discover its available tools.":
      "이 통합을 사용하여 MCP 서버에 연결하고 사용 가능한 도구를 자동으로 검색합니다.",
    "Use this parameter to determine the look-back period for searching for events that were created before the last run time and did not match the query when they were created.":
      "이 매개변수를 사용하여 마지막 실행 시간 이전에 생성되었고 생성 당시 쿼리와 일치하지 않았던 이벤트를 검색할 거슬러 올라갈 기간을 결정합니다.",
    "Use this parameter to determine the look-back period for searching for incidents that were created before the last run time and did not match the query when they were created.":
      "이 매개변수를 사용하여 마지막 실행 시간 이전에 생성되었고 생성 당시 쿼리와 일치하지 않았던 인시던트를 검색할 거슬러 올라갈 기간을 결정합니다.",
    "Username (Only if your cuckoo service requires HTTP auth)":
      "사용자 이름(cuckoo 서비스에서 HTTP 인증이 필요한 경우에만)",
    "Web App ID":
      "웹 앱 ID",
    "web_app_id: The Application ID of the OAuth2 Server web app configured in Identity Administration.":
      "web_app_id: Identity Administration에서 구성된 OAuth2 Server 웹 앱의 애플리케이션 ID.",
    "When using this parameter, note that:":
      "이 매개변수를 사용할 때는 다음 사항에 유의하세요.",

    // --- Batch: strings from the Collector export #9 (integration card descriptions, error/maintenance messages, dashboard widget titles) ---
    // Fragments such as "and", "The", "In the", "by searching for", "Do not enable", "To get an API client ID and secret, contact" are intentionally NOT registered.
    "A utility for testing incident fetching with mock JSON data.":
      "모의 JSON 데이터로 인시던트 가져오기를 테스트하기 위한 유틸리티입니다.",
    "Access the full set of possibilities the JoeSandbox Cloud provides via the RESTful Web API v2.":
      "RESTful Web API v2를 통해 JoeSandbox Cloud에서 제공하는 모든 기능에 액세스합니다.",
    "Agent Content Version Breakdown (Top 5)":
      "에이전트 콘텐츠 버전 분석(상위 5개)",
    "Agent Version Breakdown (Top 5)":
      "에이전트 버전 분석(상위 5개)",
    "Top Hosts (Top 10 | Last 30 days)":
      "상위 호스트(상위 10개 | 최근 30일)",
    "Collect and assess security posture of the Snowflake data cloud.":
      "Snowflake 데이터 클라우드의 보안 태세를 수집하고 평가합니다.",
    "Collect logs and data from Salesforce.":
      "Salesforce에서 로그와 데이터를 수집합니다.",
    "Collects logs and data from Okta identity and access management service.":
      "Okta ID 및 액세스 관리 서비스에서 로그와 데이터를 수집합니다.",
    "Connect JFrog Container Registry with Cortex Cloud to scan and secure your container images, ensuring robust artifact management and enhanced security.":
      "JFrog Container Registry를 Cortex Cloud에 연결하여 컨테이너 이미지를 스캔하고 보호함으로써 견고한 아티팩트 관리와 강화된 보안을 보장합니다.",
    "Connect OpenShift Internal Registry with Cortex Cloud using the Kubernetes datasource to scan and secure your container images, ensuring comprehensive security and compliance.":
      "Kubernetes 데이터 소스를 사용하여 OpenShift Internal Registry를 Cortex Cloud에 연결하여 컨테이너 이미지를 스캔하고 보호함으로써 포괄적인 보안과 규정 준수를 보장합니다.",
    "Connect Sonatype Nexus Registry with Cortex Cloud to scan and secure your container images, ensuring comprehensive security and compliance.":
      "Sonatype Nexus Registry를 Cortex Cloud에 연결하여 컨테이너 이미지를 스캔하고 보호함으로써 포괄적인 보안과 규정 준수를 보장합니다.",
    "Deprecated. Use Joe Security v2 instead.":
      "사용 중단되었습니다. 대신 Joe Security v2를 사용하세요.",
    "Enterprise Mobility Management (EMM) for Apple devices (Mac, iPhone, Apple TV, iPad). Can be used to control various configurations via different policies, install and uninstall applications, lock devices, smart groups searches, and more.":
      "Apple 기기(Mac, iPhone, Apple TV, iPad)용 EMM(Enterprise Mobility Management)입니다. 다양한 정책을 통한 여러 구성 제어, 애플리케이션 설치 및 제거, 기기 잠금, 스마트 그룹 검색 등에 사용할 수 있습니다.",
    "Error Occurred":
      "오류가 발생했습니다",
    "Failed getting content pack recommended":
      "추천 콘텐츠 팩을 가져오지 못했습니다",
    "failed to get content items status":
      "콘텐츠 항목 상태를 가져오지 못했습니다",
    "Failed to retrieve data source":
      "데이터 소스를 검색하지 못했습니다",
    "Integrate Application Security with your Terraform Enterprise organization to gain visibility into your Terraform runs.":
      "Application Security를 Terraform Enterprise 조직과 통합하여 Terraform 실행에 대한 가시성을 확보합니다.",
    "Integrate Semgrep to gain a unified overview of your application security posture.":
      "Semgrep을 통합하여 애플리케이션 보안 태세에 대한 통합 개요를 확인합니다.",
    "Integrate Snyk to gain a unified overview of your application security posture.":
      "Snyk를 통합하여 애플리케이션 보안 태세에 대한 통합 개요를 확인합니다.",
    "Integrate SonarQube to gain a unified overview of your application security posture.":
      "SonarQube를 통합하여 애플리케이션 보안 태세에 대한 통합 개요를 확인합니다.",
    "Integrate Veracode to gain a unified overview of your application security posture.":
      "Veracode를 통합하여 애플리케이션 보안 태세에 대한 통합 개요를 확인합니다.",
    "Microsoft Entra ID (formerly Azure AD) integration for identity & access posture monitoring":
      "ID 및 액세스 태세 모니터링을 위한 Microsoft Entra ID(이전 Azure AD) 통합",
    "MongoDB Atlas cloud database platform":
      "MongoDB Atlas 클라우드 데이터베이스 플랫폼",
    "Multi-service security integration for Microsoft 365 including OneDrive, SharePoint, Teams, and Entra ID.":
      "OneDrive, SharePoint, Teams, Entra ID를 포함한 Microsoft 365용 멀티 서비스 보안 통합입니다.",
    "New data is being collected":
      "새 데이터를 수집하는 중입니다",
    "Onboard your Jenkins server for comprehensive Application Security: Integrate Cortex CLI scans for your code, and secure your CI/CD pipelines.":
      "Jenkins 서버를 온보딩하여 포괄적인 Application Security를 구현합니다. 코드에 대한 Cortex CLI 스캔을 통합하고 CI/CD 파이프라인을 보호합니다.",
    "Please try again later":
      "나중에 다시 시도하세요",
    "Select dashboard":
      "대시보드 선택",
    "Show Less":
      "간단히 보기",
    "Something went wrong...":
      "문제가 발생했습니다...",
    "Sorry, something went wrong...":
      "죄송합니다. 문제가 발생했습니다...",
    "The Cortex Core IR integration uses the Cortex API for detection and response, by natively integrating network, endpoint, and cloud data to stop sophisticated attacks.":
      "Cortex Core IR 통합은 네트워크, 엔드포인트, 클라우드 데이터를 기본적으로 통합하여 정교한 공격을 차단하며, 탐지 및 대응에 Cortex API를 사용합니다.",
    "Under Maintenance":
      "점검 중",

    // --- Batch: strings from the Collector export #10 (dashboard picker/empty-state strings, Cylance deprecation notice) ---
    // Fragments such as "and", "The", "In the", "by searching for", "Do not enable", "To get an API client ID and secret, contact" are intentionally NOT registered.
    "+ Create new dashboard":
      "+ 새 대시보드 만들기",
    "Command Centers":
      "커맨드 센터",
    "Common Dashboards":
      "공통 대시보드",
    "Troubleshooting Instances":
      "인스턴스 문제 해결",
    "Troubleshooting Playbooks":
      "플레이북 문제 해결",
    "Automation Insights":
      "자동화 인사이트",
    "Connect Data Sources":
      "데이터 소스 연결",
    "Get started with Cortex Cloud by connecting your cloud environment as data sources.":
      "클라우드 환경을 데이터 소스로 연결하여 Cortex Cloud를 시작하세요.",
    "Ready to Secure Your Cloud?":
      "클라우드를 보호할 준비가 되셨나요?",
    "Scanning in Progress...":
      "스캔 진행 중...",
    "Your top priority vulnerabilities will be here shortly":
      "우선순위가 가장 높은 취약성이 곧 여기에 표시됩니다",
    "Deprecated. This service has been discontinued for external users by Cylance. No available replacement.":
      "사용 중단되었습니다. 이 서비스는 Cylance에서 외부 사용자에게 더 이상 제공되지 않습니다. 사용 가능한 대체 서비스는 없습니다.",

    // --- Batch: strings from the Collector export #11 (Databricks/Doppel integration docs and parameters, Databricks posture wizard, Bitbucket cards) ---
    // Fragments such as "and", "The", "In the", "by searching for", "Do not enable", "To get an API client ID and secret, contact" are intentionally NOT registered.
    "“403 Forbidden” errors on specific commands:":
      "특정 명령에서 발생하는 \"403 Forbidden\" 오류:",
    "“Test failed” when configuring the integration:":
      "통합을 구성할 때 \"Test failed\"가 표시되는 경우:",
    "(API Key (V1))":
      "(API 키(V1))",
    "(Client ID (V2), Client Secret (V2))":
      "(클라이언트 ID(V2), 클라이언트 시크릿(V2))",
    "(User API Key (V1))":
      "(사용자 API 키(V1))",
    "API Key (V1)":
      "API 키(V1)",
    "User API Key (V1)":
      "사용자 API 키(V1)",
    "Client ID (V2)":
      "클라이언트 ID(V2)",
    "Client Secret (V2)":
      "클라이언트 시크릿(V2)",
    "Organization Code (V1)":
      "조직 코드(V1)",
    "Doppel Tenant URL":
      "Doppel 테넌트 URL",
    "Attach alert screenshots to incidents":
      "알림 스크린샷을 인시던트에 첨부",
    "Check “First fetch time” — a very short window may miss older events":
      "\"First fetch time\"을 확인하세요. 기간이 너무 짧으면 오래된 이벤트를 놓칠 수 있습니다",
    "Check that the token has permission to access SQL Warehouses (used for connectivity test)":
      "토큰에 SQL Warehouses에 액세스할 권한이 있는지 확인하세요(연결 테스트에 사용됨)",
    "Confirm “Fetch types” is set to at least one of: SQL Alerts, Failed Jobs":
      "\"Fetch types\"가 SQL Alerts, Failed Jobs 중 하나 이상으로 설정되어 있는지 확인하세요",
    "Copy the token immediately — it will not be shown again":
      "토큰을 즉시 복사하세요. 다시 표시되지 않습니다",
    "Databricks Free Edition does not support all APIs (e.g., SCIM, cluster creation). Commands targeting unsupported features will return 403":
      "Databricks Free Edition은 모든 API(예: SCIM, 클러스터 생성)를 지원하지 않습니다. 지원되지 않는 기능을 대상으로 하는 명령은 403을 반환합니다",
    "Ensure the Personal Access Token is valid and has not expired":
      "개인 액세스 토큰이 유효하고 만료되지 않았는지 확인하세요",
    "For SQL Alerts, verify alerts exist and have been triggered in your workspace":
      "SQL Alerts의 경우 워크스페이스에 알림이 존재하고 트리거되었는지 확인하세요",
    "Increase the HTTP timeout in the integration instance advanced settings if needed":
      "필요한 경우 통합 인스턴스 고급 설정에서 HTTP 제한 시간을 늘리세요",
    "Log in to your Databricks workspace":
      "Databricks 워크스페이스에 로그인합니다",
    "Some APIs require admin-level permissions. Verify your token’s user has the required role":
      "일부 API에는 관리자 수준 권한이 필요합니다. 토큰의 사용자에게 필요한 역할이 있는지 확인하세요",
    "How to Generate a Personal Access Token":
      "개인 액세스 토큰 생성 방법",
    "Test Configuration":
      "구성 테스트",
    "Databricks Workspace URL":
      "Databricks 워크스페이스 URL",
    "Fetch incidents returns no results:":
      "인시던트 가져오기에서 결과가 반환되지 않는 경우:",
    "Timeout errors on large queries:":
      "대규모 쿼리에서 발생하는 시간 초과 오류:",
    "Fetch incidents timeout":
      "인시던트 가져오기 제한 시간",
    "Fetch types":
      "가져오기 유형",
    "Number of incidents for each fetch.":
      "가져오기마다의 인시던트 수.",
    "Polling interval":
      "폴링 간격",
    "Issue type (if classifier doesn't exist)":
      "이슈 유형(분류기가 없는 경우)",
    "No issue type":
      "이슈 유형 없음",
    "Issue type will be set by this field if a Classifier does not exist. If a classifier is selected, it will take precedence.":
      "분류기가 없는 경우 이 필드에서 이슈 유형이 설정됩니다. 분류기가 선택된 경우 해당 분류기가 우선합니다.",
    "Default polling interval value for `demisto-lock-get`, can be overridden by the \"polling_interval\" argument.":
      "`demisto-lock-get`의 기본 폴링 간격 값이며 \"polling_interval\" 인수로 재정의할 수 있습니다.",
    "Due to API limitations, the maximum is 100.":
      "API 제한으로 인해 최댓값은 100입니다.",
    "e.g., 3 days, 1 week":
      "예: 3 days, 1 week",
    "The Doppel API version to use. V1 authenticates with a static API Key; V2 authenticates with OAuth 2.0 client credentials (Client ID and Client Secret). New Doppel API capabilities are added to V2 only, so V2 is recommended.":
      "사용할 Doppel API 버전입니다. V1은 고정 API 키로 인증하고, V2는 OAuth 2.0 클라이언트 자격 증명(클라이언트 ID 및 클라이언트 시크릿)으로 인증합니다. 새로운 Doppel API 기능은 V2에만 추가되므로 V2를 권장합니다.",
    "The Doppel server URL that will be used for calling the APIs.":
      "API 호출에 사용되는 Doppel 서버 URL입니다.",
    "The interval specifies the cadence with which the Doppel alerts be fetched.":
      "이 간격은 Doppel 알림을 가져오는 주기를 지정합니다.",
    "The Organization Code to use for connection with Doppel. Applies to API Version V1 only; V2 scopes requests to your organization automatically.":
      "Doppel 연결에 사용할 조직 코드입니다. API 버전 V1에만 적용되며, V2는 요청이 자동으로 조직으로 범위 지정됩니다.",
    "The time limit in seconds for fetch incidents to run. Leave this empty to cancel the timeout limit.":
      "인시던트 가져오기를 실행할 수 있는 제한 시간(초)입니다. 비워 두면 제한 시간이 해제됩니다.",
    "Types of events to fetch as incidents.":
      "인시던트로 가져올 이벤트 유형.",
    "Whether incoming mirroring downloads the alert screenshot and attaches it to the incident as a War Room file entry whenever the screenshot version changes. Screenshots are stored in your Cortex instance. The doppel-get-alert-screenshot command works regardless of this setting.":
      "수신 미러링에서 스크린샷 버전이 변경될 때마다 알림 스크린샷을 다운로드하여 War Room 파일 항목으로 인시던트에 첨부할지 여부입니다. 스크린샷은 Cortex 인스턴스에 저장됩니다. doppel-get-alert-screenshot 명령은 이 설정과 관계없이 작동합니다.",
    "Details for Doppel workflow":
      "Doppel 워크플로 세부 정보",
    "Credentials for the API Version you select (see below).":
      "선택한 API 버전의 자격 증명(아래 참조).",
    "Reach out to Doppel to get access to the above information.":
      "위 정보에 액세스하려면 Doppel에 문의하세요.",
    "Name of the instance.":
      "인스턴스 이름.",
    "Doppel is a Modern Digital Risk Protection Solution, that detects the phishing and brand cyber attacks on the emerging channels. Doppel scans millions of channels online which includes, social media, domains, paid ads, dark web, emerging channels, etc. Doppel can identify the malicious content and cyber threats, and enables their customers to take down the digital risks proactively. The Cortex pack for Doppel provides mirrors the alerts created by Doppel as Cortex incidents. The pack also contains the commands to perform different operations on Doppel alerts.":
      "Doppel은 신흥 채널에서 피싱 및 브랜드 사이버 공격을 탐지하는 최신 디지털 리스크 보호 솔루션입니다. Doppel은 소셜 미디어, 도메인, 유료 광고, 다크 웹, 신흥 채널 등 온라인상의 수백만 개 채널을 스캔합니다. Doppel은 악성 콘텐츠와 사이버 위협을 식별하고 고객이 디지털 리스크를 사전에 제거할 수 있도록 지원합니다. Doppel용 Cortex 팩은 Doppel에서 생성된 알림을 Cortex 인시던트로 미러링합니다. 이 팩에는 Doppel 알림에 대해 다양한 작업을 수행하는 명령도 포함되어 있습니다.",
    "The Demisto Locking integration allows prevention of concurrent execution of scripts or commands, using a wait-lock-release flow (mutex).":
      "Demisto Locking 통합을 사용하면 대기-잠금-해제 흐름(뮤텍스)으로 스크립트 또는 명령의 동시 실행을 방지할 수 있습니다.",
    "Allow access by IP's":
      "IP별 액세스 허용",
    "Applicable Broker VMs":
      "해당 Broker VM",
    "Both cloud and region will be used for scanning and can incur cost and compliance if selected incorrectly.":
      "클라우드와 리전이 모두 스캔에 사용되며, 잘못 선택하면 비용 및 규정 준수 문제가 발생할 수 있습니다.",
    "Choose regions":
      "리전 선택",
    "Databricks Account ID":
      "Databricks 계정 ID",
    "Databricks Instance":
      "Databricks 인스턴스",
    "Define static IPs and cloud regions for the connector if required by your security settings.":
      "보안 설정에서 필요한 경우 커넥터의 고정 IP와 클라우드 리전을 정의합니다.",
    "Enter instance name":
      "인스턴스 이름 입력",
    "Establish Connection":
      "연결 설정",
    "For Container Registries with network policies, it is required to allow access from the following IP addresses:":
      "네트워크 정책이 있는 컨테이너 레지스트리의 경우 다음 IP 주소에서의 액세스를 허용해야 합니다.",
    "Insert Account ID":
      "계정 ID 입력",
    "Insert Application id":
      "애플리케이션 ID 입력",
    "Integrate Cloud Security with your Databricks Account to gain comprehensive visibility into any data and posture risk existing in your Databricks environment.This integration enables automated scanning of all assets in Databricks,including data classification and risk assessment.":
      "Cloud Security를 Databricks 계정과 통합하여 Databricks 환경에 존재하는 모든 데이터와 태세 리스크에 대한 포괄적인 가시성을 확보합니다. 이 통합을 통해 데이터 분류 및 리스크 평가를 포함하여 Databricks의 모든 자산을 자동으로 스캔할 수 있습니다.",
    "Invalid account ID":
      "유효하지 않은 계정 ID",
    "My Databricks account protected by network policies":
      "네트워크 정책으로 보호되는 내 Databricks 계정",
    "Scan with Broker VM":
      "Broker VM으로 스캔",
    "Scanning in private networks is done using broker VM infrastructure":
      "프라이빗 네트워크에서의 스캔은 브로커 VM 인프라를 사용하여 수행됩니다",
    "Scanning is done on infrastructure deployed to a cloud account owned by you. This mode requires additional cloud provider permissions and may incur additional cloud costs.":
      "스캔은 사용자가 소유한 클라우드 계정에 배포된 인프라에서 수행됩니다. 이 모드에는 추가 클라우드 공급자 권한이 필요하며 추가 클라우드 비용이 발생할 수 있습니다.",
    "Select a cloud provider and region in order to retrieve an IP address.":
      "IP 주소를 가져오려면 클라우드 공급자와 리전을 선택하세요.",
    "Select Cloud provider":
      "클라우드 공급자 선택",
    "Select Cluster":
      "클러스터 선택",
    "Verify Connection":
      "연결 확인",

    // --- Batch: fragment strings for the Databricks integration doc page (fragments whose neighbouring nodes are known; registered as a set so the sentence reads correctly) ---
    // Fragments such as "and", "The", "In the", "by searching for", "Do not enable", "To get an API client ID and secret, contact" are intentionally NOT registered.
    "A Databricks workspace with a valid URL (e.g.,":
      "유효한 URL이 있는 Databricks 워크스페이스(예:",
    "A Personal Access Token (PAT) with at minimum":
      "최소한 다음 권한이 있는 개인 액세스 토큰(PAT):",
    "access. Admin-level permissions are required for IAM (SCIM), IP access lists, and global init script commands":
      "액세스. IAM(SCIM), IP 액세스 목록 및 전역 init 스크립트 명령에는 관리자 수준 권한이 필요합니다",
    "Click your username in the top-right corner and select":
      "오른쪽 위의 사용자 이름을 클릭하고 다음을 선택합니다:",
    "Enter a description and optional lifetime, then click":
      "설명과 수명(선택 사항)을 입력한 다음 클릭합니다:",
    "Verify the Workspace URL is correct (no trailing slash, includes":
      "워크스페이스 URL이 올바른지 확인합니다(후행 슬래시 없음, 다음 포함:",
    ": Your workspace URL (e.g.,":
      ": 워크스페이스 URL(예:",
    ": The PAT generated above":
      ": 위에서 생성한 PAT",
    ": Enable to pull SQL alerts and failed job runs as incidents":
      ": 활성화하면 SQL 알림과 실패한 작업 실행을 인시던트로 가져옵니다",
    "SQL Statement Execute may time out for long-running queries. Use":
      "SQL Statement Execute는 장기 실행 쿼리에서 시간 초과될 수 있습니다. 다음을 사용하여",
    "to poll for results":
      "결과를 폴링합니다",

    // --- Batch: EWS O365 / Exchange Online / Dropbox / Elasticsearch integration doc page (Collector export 2026-10-11 09:38) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    "Action Required":
      "조치 필요",
    "App authentication":
      "앱 인증",
    "Important note: Retirement of RBAC Application Impersonation":
      "중요 공지: RBAC Application Impersonation 사용 중단",
    "Microsoft EWS Retirement and EwsAllowedAppIds":
      "Microsoft EWS 사용 중단 및 EwsAllowedAppIds",
    "Permissions Needed":
      "필요한 권한",
    "Set up the Third Party System":
      "서드파티 시스템 설정",
    "Verify that the admin account has sufficient Exchange Online permissions":
      "관리자 계정에 충분한 Exchange Online 권한이 있는지 확인",
    "For customers using a Self-Deployed Application":
      "자체 배포 애플리케이션을 사용하는 고객",
    "For customers using the Cortex Application authentication method":
      "Cortex Application 인증 방법을 사용하는 고객",
    "(For full details, complete timelines, and PowerShell scripts for safely appending to an existing allow list, refer to the official Microsoft documentation:":
      "(자세한 내용, 전체 일정, 기존 허용 목록에 안전하게 추가하기 위한 PowerShell 스크립트는 Microsoft 공식 문서를 참조하세요:",
    "After authorizing the Demisto app, you will get an ID, Token, and Key, which needs to be added to the integration instance configuration’s corresponding fields.":
      "Demisto 앱을 승인하면 ID, 토큰, 키가 발급되며, 이를 통합 인스턴스 구성의 해당 필드에 추가해야 합니다.",
    "As of February 2025, the Impersonation access type of the integration is deprecated by Microsoft, read about it":
      "2025년 2월부터 통합의 Impersonation 액세스 유형은 Microsoft에서 사용 중단되었습니다. 자세한 내용은",
    "As part of this transition, Microsoft is moving away from unrestricted EWS access and has introduced a new tenant-level allow list called":
      "이 전환의 일환으로 Microsoft는 제한 없는 EWS 액세스에서 벗어나 새로운 테넌트 수준 허용 목록을 도입했습니다. 이름:",
    "Assign Azure AD roles to the application.":
      "Azure AD 역할을 애플리케이션에 할당합니다.",
    "Assign custom role groups to the application using service principals.":
      "서비스 주체를 사용하여 사용자 지정 역할 그룹을 애플리케이션에 할당합니다.",
    "Attach the .cer file to your Azure app.":
      ".cer 파일을 Azure 앱에 첨부합니다.",
    "Attach the .cer file to your Azure App.":
      ".cer 파일을 Azure 앱에 첨부합니다.",
    "Authentication Type (NTLM, Basic, or Digest). For Office 365 use Basic.":
      "인증 유형(NTLM, Basic 또는 Digest). Office 365에는 Basic을 사용합니다.",
    "Authentication: Email address (for Office 365) or DOMAIN\\USERNAME (e.g. DEMISTO.INT\\admin)":
      "인증: 이메일 주소(Office 365의 경우) 또는 DOMAIN\\USERNAME(예: DEMISTO.INT\\admin)",
    "Connect to Exchange Online PowerShell and add the Application ID.":
      "Exchange Online PowerShell에 연결하고 애플리케이션 ID를 추가합니다.",
    "Copy the contents of the .txt file and paste it in the Certificate parameter of the integration’s instance.":
      ".txt 파일의 내용을 복사하여 통합 인스턴스의 Certificate 매개변수에 붙여넣습니다.",
    "Create the application:":
      "애플리케이션을 만듭니다:",
    "Create the certificate in Cortex XSOAR/XSIAM.":
      "Cortex XSOAR/XSIAM에서 인증서를 만듭니다.",
    "Default is to filter by received-time, which works well if the folder is an \"Inbox\". But for a folder emails are dragged into for attention, if we filter by received-time, out-of-order processing of emails means some are ignored. Filtering by modified-time works better for such a scenario. This works best if any modifications (such as tagging) happens before moving the email into the folder, such that the move into the folder is the last modification, and triggers Cortex to fetch it as an incident.":
      "기본값은 수신 시간으로 필터링하며, 폴더가 \"받은 편지함\"인 경우에 적합합니다. 그러나 주의가 필요한 이메일을 끌어다 놓는 폴더에서는 수신 시간으로 필터링하면 이메일이 순서 없이 처리되어 일부가 무시됩니다. 이러한 시나리오에서는 수정 시간으로 필터링하는 것이 더 효과적입니다. 이 방법은 수정(예: 태그 지정)을 이메일을 폴더로 이동하기 전에 수행하여 폴더로의 이동이 마지막 수정이 되고 Cortex가 이를 인시던트로 가져오도록 할 때 가장 효과적입니다.",
    "Default version is used when accessing the EWS API to determine the API version.":
      "EWS API에 액세스할 때 API 버전을 결정하기 위해 기본 버전이 사용됩니다.",
    "Directory and metadata:":
      "디렉터리 및 메타데이터:",
    "Log collection:":
      "로그 수집:",
    "Inventory data snapshots are collected every 10 minutes.":
      "인벤토리 데이터 스냅샷은 10분마다 수집됩니다.",
    "Download the certificateBase34.txt file.":
      "certificateBase34.txt 파일을 다운로드합니다.",
    "Email address from which to fetch incidents":
      "인시던트를 가져올 이메일 주소",
    "Enable Dropbox Log Collection":
      "Dropbox 로그 수집 사용",
    "Enter a unique name for this DropBox instance":
      "이 DropBox 인스턴스의 고유한 이름 입력",
    "Enter DropBox Access Code for authenticating requests":
      "요청 인증에 사용할 DropBox 액세스 코드 입력",
    "Enter DropBox app key for authenticating requests":
      "요청 인증에 사용할 DropBox 앱 키 입력",
    "Enter DropBox App Secret for authenticating requests":
      "요청 인증에 사용할 DropBox 앱 시크릿 입력",
    "access code":
      "액세스 코드",
    "app key":
      "앱 키",
    "app secret":
      "앱 시크릿",
    "Ensure EWS is enabled for your tenant.":
      "테넌트에서 EWS가 활성화되어 있는지 확인하세요.",
    "Elastic version 2.* or 5.*":
      "Elastic 버전 2.* 또는 5.*",
    "Exchange Online URL":
      "Exchange Online URL",
    "Exchange URL or Server IP address":
      "Exchange URL 또는 서버 IP 주소",
    "ID / Application ID":
      "ID / 애플리케이션 ID",
    "ID can be received from the admin consent procedure - see Detailed Instructions.":
      "ID는 관리자 동의 절차에서 받을 수 있습니다. 자세한 지침을 참조하세요.",
    "Token can be received from the admin consent procedure - see Detailed Instructions.":
      "토큰은 관리자 동의 절차에서 받을 수 있습니다. 자세한 지침을 참조하세요.",
    "Follow your preferred method’s guide on how to use the admin consent flow in order to receive your authentication information:":
      "관리자 동의 흐름을 사용하여 인증 정보를 받는 방법은 원하는 방법의 가이드를 따르세요:",
    "For Office 365, use https://outlook.office365.com/EWS/Exchange.asmx (default) as the Server URL.":
      "Office 365의 경우 서버 URL로 https://outlook.office365.com/EWS/Exchange.asmx (기본값)를 사용합니다.",
    "For the integration to work, the Azure AD application’s service principal must have the correct permissions assigned in the Exchange Online role groups.":
      "통합이 작동하려면 Azure AD 애플리케이션의 서비스 주체에 Exchange Online 역할 그룹에서 올바른 권한이 할당되어 있어야 합니다.",
    "Has impersonation rights":
      "Impersonation 권한 있음",
    "Mark fetched emails as read":
      "가져온 이메일을 읽음으로 표시",
    "Skip unparsable emails during fetch incidents":
      "인시던트 가져오기 중 구문 분석할 수 없는 이메일 건너뛰기",
    "Trust server certificate":
      "서버 인증서 신뢰",
    "Use a self deployed Azure Application":
      "자체 배포된 Azure 애플리케이션 사용",
    "Use legacy attachment name":
      "레거시 첨부 파일 이름 사용",
    "If this is the only application you are allowing, run the following command (replace":
      "이 애플리케이션만 허용하는 경우 다음 명령을 실행합니다(",
    "with your actual Application Client ID):":
      "을 실제 Application Client ID로 바꿉니다):",
    "In Azure, go to Entra ID (Overview blade) and copy the":
      "Azure에서 Entra ID(개요 블레이드)로 이동하여 다음을 복사합니다:",
    "In Cortex XSOAR/XSIAM, in the integration instance configuration, enter your saved password in the":
      "Cortex XSOAR/XSIAM의 통합 인스턴스 구성에서 저장한 비밀번호를 다음에 입력합니다:",
    "In Cortex XSOAR/XSIAM, in the integration instance configuration, paste the application ID in":
      "Cortex XSOAR/XSIAM의 통합 인스턴스 구성에서 애플리케이션 ID를 다음에 붙여넣습니다:",
    "In Cortex XSOAR/XSIAM, in the integration instance configuration, paste the Domain name in":
      "Cortex XSOAR/XSIAM의 통합 인스턴스 구성에서 도메인 이름을 다음에 붙여넣습니다:",
    "In order to function as expected, set the following permissions:":
      "예상대로 작동하려면 다음 권한을 설정하세요:",
    "In the Add assignments flyout that opens, find and select the app that you created in Step 1.":
      "열리는 [Add assignments] 플라이아웃에서 1단계에서 만든 앱을 찾아 선택합니다.",
    "In the Certificates tab, upload the publickey.cer file.":
      "[Certificates] 탭에서 publickey.cer 파일을 업로드합니다.",
    "In the Cortex XSOAR/XSIAM Playground, download the publickey.cer file":
      "Cortex XSOAR/XSIAM Playground에서 publickey.cer 파일을 다운로드합니다",
    "In the integration instance configuration, paste the text in the":
      "통합 인스턴스 구성에서 텍스트를 다음에 붙여넣습니다:",
    "In the left menu of the newly created application, click":
      "새로 만든 애플리케이션의 왼쪽 메뉴에서 다음을 클릭합니다:",
    "In the Azure app, navigate to":
      "Azure 앱에서 다음으로 이동합니다:",
    "In the Azure application, in the left menu, click":
      "Azure 애플리케이션의 왼쪽 메뉴에서 다음을 클릭합니다:",
    "In the Request API permissions page, click":
      "[Request API permissions] 페이지에서 다음을 클릭합니다:",
    "In the left sidebar, select:":
      "왼쪽 사이드바에서 다음을 선택합니다:",
    "In the top bar, select:":
      "상단 표시줄에서 다음을 선택합니다:",
    "Index time field, used to sort and limit data":
      "데이터 정렬 및 제한에 사용되는 인덱스 시간 필드",
    "Index/indexes to fetch incidents from (comma separated)":
      "인시던트를 가져올 인덱스(쉼표로 구분)",
    "Key / Application Secret":
      "키 / 애플리케이션 시크릿",
    "Log in using an admin account that can manage role assignments for the Azure AD application (for example, a Global Administrator or Privileged Role Administrator).":
      "Azure AD 애플리케이션의 역할 할당을 관리할 수 있는 관리자 계정(예: 전역 관리자 또는 권한 있는 역할 관리자)으로 로그인합니다.",
    "Mailbox to run commands on and to fetch incidents from.":
      "명령을 실행하고 인시던트를 가져올 사서함.",
    "Mailbox to run commands on and to fetch incidents from. To use this functionality, your account must have delegation for the account specified. For more information, see https://xsoar.pan.dev/docs/reference/integrations/ewso365#additional-information":
      "명령을 실행하고 인시던트를 가져올 사서함. 이 기능을 사용하려면 계정에 지정된 계정에 대한 위임이 있어야 합니다. 자세한 내용은 https://xsoar.pan.dev/docs/reference/integrations/ewso365#additional-information 을 참조하세요.",
    "Maximum number of incidents per fetch (up to 200). Performance might be affected by a value higher than 50.":
      "가져오기당 최대 인시던트 수(최대 200). 50보다 큰 값을 사용하면 성능에 영향을 줄 수 있습니다.",
    "Member Devices":
      "멤버 디바이스",
    "Name of the folder from which to fetch incidents":
      "인시던트를 가져올 폴더 이름",
    "Name of the folder from which to fetch incidents (supports Exchange Folder ID and sub-folders e.g. Inbox/Phishing)":
      "인시던트를 가져올 폴더 이름(Exchange 폴더 ID 및 하위 폴더 지원, 예: Inbox/Phishing)",
    "Supports Exchange Folder ID and sub-folders e.g. Inbox/Phishing.":
      "Exchange 폴더 ID 및 하위 폴더를 지원합니다(예: Inbox/Phishing).",
    "Note - for more information go to the official":
      "참고: 자세한 내용은 공식 다음 페이지를 참조하세요:",
    "Note: Remember your password since you will need it to create your integration instance.":
      "참고: 통합 인스턴스를 만들 때 필요하므로 비밀번호를 기억해 두세요.",
    "Note: The information in the Playground is sensitive information. You should delete the information by running the following command:":
      "참고: Playground의 정보는 민감한 정보입니다. 다음 명령을 실행하여 정보를 삭제해야 합니다:",
    "Open the downloaded txt file and copy the text.":
      "다운로드한 txt 파일을 열고 텍스트를 복사합니다.",
    "Open the Microsoft Purview Portal: https://purview.microsoft.com/":
      "Microsoft Purview 포털을 엽니다: https://purview.microsoft.com/",
    "Palo Alto Networks is making the necessary updates to align our shared Application ID with Microsoft’s new requirements, so you do not need to run the steps above. However, because this change is enforced and controlled entirely by Microsoft, we cannot validate the changes in advance or guarantee uninterrupted functionality. Palo Alto Networks is not responsible for any disruptions resulting from this rollout. We recommend verifying that your integration continues to function as expected once the October 2026 enforcement takes effect.":
      "Palo Alto Networks는 공유 Application ID를 Microsoft의 새로운 요구 사항에 맞추기 위해 필요한 업데이트를 진행하고 있으므로 위 단계를 실행할 필요가 없습니다. 다만 이 변경은 전적으로 Microsoft가 시행하고 통제하므로 변경 사항을 사전에 검증하거나 중단 없는 기능을 보장할 수 없습니다. Palo Alto Networks는 이번 롤아웃으로 인한 중단에 대해 책임을 지지 않습니다. 2026년 10월 시행이 시작된 후에도 통합이 예상대로 계속 작동하는지 확인하는 것이 좋습니다.",
    "You are responsible for updating your tenant configuration before the October 2026 enforcement takes effect. To ensure this integration continues to function without disruption, you must add the Entra Application (Client) ID used by this integration to your Exchange Online tenant’s allow list.":
      "2026년 10월 시행이 시작되기 전에 테넌트 구성을 업데이트할 책임은 사용자에게 있습니다. 이 통합이 중단 없이 계속 작동하도록 하려면 이 통합에서 사용하는 Entra Application(클라이언트) ID를 Exchange Online 테넌트의 허용 목록에 추가해야 합니다.",
    "Query to fetch incidents by (Lucene style)":
      "인시던트를 가져올 쿼리(Lucene 스타일)",
    "Sender Mailbox":
      "발신자 사서함",
    "Server URL (e.g. http://192.168.0.1:9200)":
      "서버 URL(예: http://192.168.0.1:9200)",
    "Server Version (2007, 2010, 2010_SP2, 2013, or 2016)":
      "서버 버전(2007, 2010, 2010_SP2, 2013 또는 2016)",
    "The application ID from the Azure portal":
      "Azure 포털의 애플리케이션 ID",
    "The organization used in app-only authentication":
      "앱 전용 인증에 사용되는 조직",
    "The organization used in app-only authentication.":
      "앱 전용 인증에 사용되는 조직.",
    "There are two application authentication methods available.":
      "사용할 수 있는 애플리케이션 인증 방법은 두 가지입니다.",
    "This command replaces the entire allow list. If you already have other approved EWS applications, first read the current list and append the new ID so that you don’t overwrite existing entries.":
      "이 명령은 허용 목록 전체를 대체합니다. 이미 승인된 다른 EWS 애플리케이션이 있는 경우 기존 항목을 덮어쓰지 않도록 먼저 현재 목록을 읽고 새 ID를 추가하세요.",
    "Time format as kept in ElasticSearch, leave empty to use default":
      "ElasticSearch에 저장된 시간 형식입니다. 기본값을 사용하려면 비워 두세요",
    "Time format is goland style format. For more details, look at:":
      "시간 형식은 Goland 스타일 형식입니다. 자세한 내용은 다음을 참조하세요:",
    "To allow access to EWS O365, an administrator has to approve the Demisto app using an admin consent flow, by clicking on the following":
      "EWS O365에 대한 액세스를 허용하려면 관리자가 관리자 동의 흐름을 사용하여 Demisto 앱을 승인해야 합니다. 다음 링크를 클릭하세요:",
    "To avoid disruptions, it is imperative that administrators begin transitioning their applications immediately.":
      "중단을 방지하려면 관리자가 즉시 애플리케이션 전환을 시작하는 것이 필수적입니다.",
    "To create the application, follow the instructions in this":
      "애플리케이션을 만들려면 다음 지침을 따르세요:",
    "To identify accounts using the ApplicationImpersonation role use the Exchange Online PowerShell command:":
      "ApplicationImpersonation 역할을 사용하는 계정을 식별하려면 다음 Exchange Online PowerShell 명령을 사용합니다:",
    "To obtain the access code, click":
      "액세스 코드를 가져오려면",
    "and sign in with your Dropbox Business account credentials.":
      "을 클릭하고 Dropbox Business 계정 자격 증명으로 로그인합니다.",
    "To use this integration, you need to connect an application with a certificate.":
      "이 통합을 사용하려면 인증서로 애플리케이션을 연결해야 합니다.",
    "Under Exchange, click the":
      "Exchange에서 다음을 클릭합니다:",
    "We highly recommend using the":
      "사서함 작업에는 다음을 사용하는 것이 좋습니다:",
    "integration for mailbox operations such as reading, searching, and managing emails and attachments, as Microsoft itself recommends transitioning from EWS to Graph-based APIs.":
      "통합(이메일 및 첨부 파일 읽기, 검색, 관리 등). Microsoft 자체에서도 EWS에서 Graph 기반 API로 전환할 것을 권장하기 때문입니다.",
    "What time field should we filter incidents by?":
      "어떤 시간 필드로 인시던트를 필터링할까요?",
    "When 'Mark fetched emails as read' is enabled and emails are fetched by modification time, emails will be re-fetched in the next cycle after being marked as read (due to metadata changes). This is expected behavior.":
      "'Mark fetched emails as read'가 활성화되어 있고 이메일이 수정 시간으로 가져와지는 경우, 읽음으로 표시된 이메일은 (메타데이터 변경으로 인해) 다음 주기에 다시 가져와집니다. 이는 예상된 동작입니다.",
    "You have two options:":
      "두 가지 옵션이 있습니다:",
    "Search for the following role groups:":
      "다음 역할 그룹을 검색합니다:",
    "If not listed, click":
      "목록에 없는 경우 다음을 클릭합니다:",
    "On the Assignments page that opens, select":
      "열리는 [Assignments] 페이지에서 다음을 선택합니다:",
    "On the Roles and administrators page that opens, find and select one of the supported roles by clicking on the":
      "열리는 [Roles and administrators] 페이지에서 지원되는 역할 중 하나를 찾아 다음을 클릭하여 선택합니다:",
    "Microsoft has announced the final phase of Exchange Web Services (EWS) retirement in Exchange Online, with phased disablement beginning in October 2026.":
      "Microsoft는 Exchange Online에서 Exchange Web Services(EWS) 사용 중단의 최종 단계를 발표했으며, 2026년 10월부터 단계적으로 비활성화가 시작됩니다.",
    "application used for authentication":
      "인증에 사용되는 애플리케이션",

    // --- Batch: follow-up for the 09:38 export: items missed in the previous batch (EWS Extension Online PowerShell doc, Elasticsearch DQ label) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    "Use DQ syntax to map elastic JSON struct to incident fields, use :: as mapping seperator":
      "DQ 구문을 사용하여 Elastic JSON 구조를 인시던트 필드에 매핑하고, 매핑 구분자로 ::를 사용합니다",
    ". Starting in October 2026, Microsoft will block all EWS traffic by default. Applications will only be able to access EWS if their specific Application (Client) ID is explicitly added to this allow list by the tenant administrator.":
      ". 2026년 10월부터 Microsoft는 기본적으로 모든 EWS 트래픽을 차단합니다. 애플리케이션은 테넌트 관리자가 해당 애플리케이션의 고유한 Application(클라이언트) ID를 이 허용 목록에 명시적으로 추가한 경우에만 EWS에 액세스할 수 있습니다.",
    "Deprecated. Use EWS v2 instead.":
      "사용 중단되었습니다. 대신 EWS v2를 사용하세요.",
    "Deprecated. Use EWS Extension Online Powershell v3 instead.":
      "사용 중단되었습니다. 대신 EWS Extension Online Powershell v3를 사용하세요.",
    "Deprecated. Use":
      "사용 중단되었습니다. 대신",
    "instead.":
      "을(를) 사용하세요.",
    "- Client Credential Flow.":
      "- 클라이언트 자격 증명 흐름.",
    "– a highly privileged security role that also provides full access.":
      "– 전체 액세스 권한도 제공하는 높은 권한의 보안 역할.",
    "– the most privileged role and fully supported for this integration.":
      "– 가장 높은 권한의 역할이며 이 통합에서 완전히 지원됩니다.",
    ". Assign the following API permission to the application:":
      ". 다음 API 권한을 애플리케이션에 할당합니다:",
    "Run the":
      "다음",
    "command in Cortex to acquire the certificate.":
      "명령을 Cortex에서 실행하여 인증서를 가져옵니다.",
    "command in the Playground to acquire the certificate.":
      "명령을 Playground에서 실행하여 인증서를 가져옵니다.",
    "Open the role and verify that the":
      "역할을 열고",
    "service principal of the Azure AD application used by the integration":
      "통합에서 사용하는 Azure AD 애플리케이션의 서비스 주체",
    "is listed.":
      "가 목록에 표시되는지 확인합니다.",
    "The role":
      "역할",
    "is eligible for this integration.":
      "은(는) 이 통합에 사용할 수 있습니다.",
    "Search for":
      "검색 상자에서",
    "in the Search box.":
      "을(를) 검색합니다.",
    ", give the application a name (for example:":
      ", 애플리케이션에 이름을 지정합니다(예:",
    ") and click":
      ") 후 다음을 클릭합니다:",
    ", search for":
      ", 다음을 검색합니다:",
    "and assign the required roles.":
      "그런 다음 필요한 역할을 할당합니다.",
    "and copy the Application (client) ID.":
      "그런 다음 애플리케이션(클라이언트) ID를 복사합니다.",
    "Fore more information check the":
      "자세한 내용은 다음을 참조하세요:",
    "Microsoft Documentation.":
      "Microsoft 문서.",
    "guide":
      "가이드",
    "Azure AD portal":
      "Azure AD 포털",

    // --- Batch: Elasticsearch v2 / Kibana / Microsoft Graph (Entra ID) integration doc page (Collector export 2026-10-12 07:23) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    "- API Key Auth: Enter the API Key ID and API Key.":
      "- API Key Auth: API Key ID와 API Key를 입력합니다.",
    "- Basic Auth: Enter Username and Password.":
      "- Basic Auth: 사용자 이름과 비밀번호를 입력합니다.",
    "- Bearer Auth: Enter Username and Password.":
      "- Bearer Auth: 사용자 이름과 비밀번호를 입력합니다.",
    "- Index":
      "- 인덱스",
    "- Index time field":
      "- 인덱스 시간 필드",
    "- Query String or Raw Query":
      "- 쿼리 문자열 또는 Raw Query",
    "— Bulk-update the status of security detection alerts (open, acknowledged, closed).":
      "— 보안 탐지 알림의 상태를 일괄 업데이트합니다(열림, 확인됨, 닫힘).",
    "— Create, update, delete, and import/export value lists used in detection rules.":
      "— 탐지 규칙에서 사용하는 값 목록을 생성, 업데이트, 삭제하고 가져오기/내보내기합니다.",
    "— Create, update, delete, and list Kibana cases; add comments, attach files, and link alerts to cases.":
      "— Kibana 케이스를 생성, 업데이트, 삭제 및 나열하고, 댓글을 추가하고, 파일을 첨부하고, 알림을 케이스에 연결합니다.",
    "— List rule types, retrieve rules, enable/disable rules, mute/unmute alerts.":
      "— 규칙 유형을 나열하고, 규칙을 가져오고, 규칙을 사용/사용 안 함으로 설정하고, 알림을 음소거/음소거 해제합니다.",
    "— Manage Kibana exception lists and their items, including Elastic Endpoint exceptions.":
      "— Elastic Endpoint 예외를 포함하여 Kibana 예외 목록과 해당 항목을 관리합니다.",
    ", the required privilege is also scoped to the feature that owns the object:":
      ", 필요한 권한도 해당 개체를 소유한 기능으로 범위가 지정됩니다:",
    ". The level required depends on the operation:":
      ". 필요한 수준은 작업에 따라 다릅니다:",
    "Objects owned by":
      "다음이 소유한 개체:",
    "(e.g. SIEM detection rules, Security cases) require the":
      "(예: SIEM 탐지 규칙, Security 케이스)에는 다음이 필요합니다:",
    "(e.g. Stack Rules) require the":
      "(예: Stack Rules)에는 다음이 필요합니다:",
    "require the":
      "에는 다음이 필요합니다:",
    "feature privilege.":
      "기능 권한.",
    "feature privileges":
      "기능 권한",
    "(for example,":
      "(예:",
    "). Kibana is usually hosted separately from Elasticsearch, so this URL cannot be derived from the Elasticsearch":
      "). Kibana는 일반적으로 Elasticsearch와 별도로 호스팅되므로 이 URL은 다음 Elasticsearch 설정에서 파생할 수 없습니다:",
    "<number> <time unit>, e.g., 12 hours, 7 days":
      "<number> <time unit>(예: 12 hours, 7 days)",
    "3 formats supported:":
      "3가지 형식이 지원됩니다:",
    "A detailed explanation on how to register an app can be found":
      "앱을 등록하는 방법에 대한 자세한 설명은 다음에서 확인할 수 있습니다:",
    "Additional Configuration Parameters Details":
      "추가 구성 매개변수 세부 정보",
    "After authorizing the Cortex XSAOR app, you will get an ID, Token, and Key which needs to be added to the integration instance configuration’s corresponding fields.":
      "Cortex XSOAR 앱을 승인하면 ID, 토큰, 키가 발급되며, 이를 통합 인스턴스 구성의 해당 필드에 추가해야 합니다.",
    "Alerts to Fetch":
      "가져올 알림",
    "Allow secret generators commands execution":
      "시크릿 생성기 명령 실행 허용",
    "Allows raw DSL queries. For more information about Query DSL see":
      "원시 DSL 쿼리를 허용합니다. Query DSL에 대한 자세한 내용은 다음을 참조하세요:",
    "API Client ID created in the User management UI.":
      "User management UI에서 만든 API Client ID입니다.",
    "API Client Secret created in the User management UI.":
      "User management UI에서 만든 API Client Secret입니다.",
    "API Key Authentication":
      "API 키 인증",
    "Application ID (Client ID for Client credentials mode)":
      "애플리케이션 ID(Client credentials 모드의 클라이언트 ID)",
    "Application redirect URI (for Authorization Code flow mode)":
      "애플리케이션 리디렉션 URI(Authorization Code 흐름 모드용)",
    "Application redirect URI (for Self Deployed - Authorization Code Flow)":
      "애플리케이션 리디렉션 URI(자체 배포 - Authorization Code 흐름용)",
    "Apply the filter to fetch policy events having actions such as \"deliver\", \"mark-spam\", \"move\", \"inbox\", \"delete\", \"none\". Fetches all types of actions by default.":
      "\"deliver\", \"mark-spam\", \"move\", \"inbox\", \"delete\", \"none\" 등의 작업이 있는 정책 이벤트를 가져오도록 필터를 적용합니다. 기본적으로 모든 유형의 작업을 가져옵니다.",
    "Authentication Based on Azure Managed Identities":
      "Azure 관리 ID 기반 인증",
    "Authentication based on Entra ID applications":
      "Entra ID 애플리케이션 기반 인증",
    "Authorization code (for Authorization Code flow mode - received from the authorization step. see Detailed Instructions)":
      "인증 코드(Authorization Code 흐름 모드용 - 승인 단계에서 받음. 자세한 지침 참조)",
    "Authorization code (for Self Deployed - Authorization Code Flow)":
      "인증 코드(자체 배포 - Authorization Code 흐름용)",
    "Authorization type":
      "인증 유형",
    "Azure AD endpoint":
      "Azure AD 엔드포인트",
    "Azure AD endpoint associated with a national cloud.":
      "국가 클라우드와 연결된 Azure AD 엔드포인트입니다.",
    "Bearer Authentication":
      "Bearer 인증",
    "Click the":
      "다음 버튼을 클릭합니다:",
    "button and you will be prompted to grant Cortex permissions for your Entra ID Users.":
      ". 그러면 Entra ID 사용자에 대한 Cortex 권한을 부여하라는 메시지가 표시됩니다.",
    "button and you will receive your ID, token, and key. You will need to enter these when you configure the Entra ID Users integration instance in Cortex.":
      ". ID, 토큰, 키가 발급됩니다. Cortex에서 Entra ID Users 통합 인스턴스를 구성할 때 이를 입력해야 합니다.",
    "By default, Microsoft Entra ID Protection risk level is used as Cortex XSOAR/XSIAM issue severity. Select this option to override original risk level reported by Microsoft Entra ID Protection.":
      "기본적으로 Microsoft Entra ID Protection 위험 수준이 Cortex XSOAR/XSIAM 이슈 심각도로 사용됩니다. 이 옵션을 선택하면 Microsoft Entra ID Protection에서 보고한 원래 위험 수준을 재정의합니다.",
    "Checking this box will allow running commands that generate and print secrets. Make sure to add restrictions to the related commands. For more information please refer to the following guide - <MFA guide>":
      "이 확인란을 선택하면 시크릿을 생성하고 출력하는 명령을 실행할 수 있습니다. 관련 명령에 제한을 추가해야 합니다. 자세한 내용은 다음 가이드를 참조하세요 - <MFA guide>",
    "Client Credentials Flow (Recommended)":
      "Client Credentials 흐름(권장)",
    "Client Secret (required for Client Credentials mode)":
      "클라이언트 시크릿(Client Credentials 모드에서 필수)",
    "Close Mirrored Elasticsearch Incident":
      "미러링된 Elasticsearch 인시던트 닫기",
    "Close Mirrored XSOAR Incident":
      "미러링된 XSOAR 인시던트 닫기",
    "Comma-separated list of fields to fetch (the `_source` field is always included).":
      "가져올 필드의 쉼표로 구분된 목록(`_source` 필드는 항상 포함됩니다).",
    "Detection Alerts":
      "탐지 알림",
    "Device Code Flow":
      "Device Code 흐름",
    "Elastic Cloud deployments:":
      "Elastic Cloud 배포:",
    "Example: created_at.after(2020-11-11T09:16:44Z) or id.eq(537557694)":
      "예: created_at.after(2020-11-11T09:16:44Z) 또는 id.eq(537557694)",
    "Syntax: field.operator(operand) {and/or field.operator(operand)}":
      "구문: field.operator(operand) {and/or field.operator(operand)}",
    "Syntax: field.operator(operand) {and/or field.operator(operand)} Example: created_at.after(2020-11-11T09:16:44Z) or id.eq(537557694)":
      "구문: field.operator(operand) {and/or field.operator(operand)} 예: created_at.after(2020-11-11T09:16:44Z) 또는 id.eq(537557694)",
    "Exception Lists & Items":
      "예외 목록 및 항목",
    "Exclude alerts while fetching policy events of type 'Message Alert' or 'System Alert'.":
      "'Message Alert' 또는 'System Alert' 유형의 정책 이벤트를 가져올 때 알림을 제외합니다.",
    "Fetch alerts for case":
      "케이스의 알림 가져오기",
    "Fetch Cases":
      "케이스 가져오기",
    "Fetch cases by Severity":
      "심각도별 케이스 가져오기",
    "Fetch cases by Status":
      "상태별 케이스 가져오기",
    "Fetch incident types":
      "가져올 인시던트 유형",
    "Fetch Security Alerts":
      "보안 알림 가져오기",
    "Fetching security alerts requires:":
      "보안 알림을 가져오려면 다음이 필요합니다:",
    "field (DSL query). The index must follow one of these patterns:":
      "필드(DSL 쿼리). 인덱스는 다음 패턴 중 하나를 따라야 합니다:",
    "Fields to Fetch":
      "가져올 필드",
    "First fetch timestamp":
      "첫 번째 가져오기 타임스탬프",
    "For further information about type mapping, see":
      "유형 매핑에 대한 자세한 내용은 다음을 참조하세요:",
    "For information, see":
      "자세한 내용은 다음을 참조하세요:",
    "For more info about API Key management see":
      "API 키 관리에 대한 자세한 내용은 다음을 참조하세요:",
    "For more info see":
      "자세한 내용은 다음을 참조하세요:",
    "For more information about the Lucene syntax, see the link in the help section.":
      "Lucene 구문에 대한 자세한 내용은 도움말 섹션의 링크를 참조하세요.",
    "For more information see the link in the help section.":
      "자세한 내용은 도움말 섹션의 링크를 참조하세요.",
    "ID or Client ID":
      "ID 또는 클라이언트 ID",
    "Key or Client Secret":
      "키 또는 클라이언트 시크릿",
    "Token or Tenant ID":
      "토큰 또는 테넌트 ID",
    "Incident Mirroring Direction":
      "인시던트 미러링 방향",
    "Index time field":
      "인덱스 시간 필드",
    "Index to fetch incidents from":
      "인시던트를 가져올 인덱스",
    "Kibana Integration":
      "Kibana 통합",
    "Kibana Server URL":
      "Kibana 서버 URL",
    "Kibana Spaces":
      "Kibana 스페이스",
    "Kibana Spaces (optional)":
      "Kibana 스페이스(선택 사항)",
    "Map JSON fields into labels":
      "JSON 필드를 레이블에 매핑",
    "Max Fetch Incidents Returned":
      "반환되는 가져오기 인시던트 최대 수",
    "Microsoft integrations (Graph and Azure) in Cortex use Entra ID applications to authenticate with Microsoft APIs. These integrations use OAuth 2.0 and OpenID Connect standard compliant authentication services, which use an application to sign in or delegate authentication. For more information, see the Microsoft identity platform overview.":
      "Cortex의 Microsoft 통합(Graph 및 Azure)은 Entra ID 애플리케이션을 사용하여 Microsoft API로 인증합니다. 이러한 통합은 OAuth 2.0 및 OpenID Connect 표준을 준수하는 인증 서비스를 사용하며, 애플리케이션을 사용하여 로그인하거나 인증을 위임합니다. 자세한 내용은 Microsoft identity platform overview를 참조하세요.",
    "Mirroring is only available for Elasticsearch Security Alerts and Cases.":
      "미러링은 Elasticsearch Security Alert 및 Case에서만 사용할 수 있습니다.",
    "Not all fields can be used for sorting in Elasticsearch. Sorting is only supported for fields of the following types:":
      "Elasticsearch에서는 모든 필드를 정렬에 사용할 수 있는 것은 아닙니다. 정렬은 다음 유형의 필드에서만 지원됩니다:",
    "Note: Depending on the authentication method that you use, the integration parameters might change.":
      "참고: 사용하는 인증 방법에 따라 통합 매개변수가 달라질 수 있습니다.",
    "On-premises (self-managed) deployments:":
      "온프레미스(자체 관리) 배포:",
    "Operations covered":
      "포함되는 작업",
    "Override Microsoft Entra ID Protection risk level":
      "Microsoft Entra ID Protection 위험 수준 재정의",
    "POST / PUT / PATCH / DELETE — create, update, delete, and change-state commands":
      "POST / PUT / PATCH / DELETE — 생성, 업데이트, 삭제 및 상태 변경 명령",
    "Privilege level":
      "권한 수준",
    "Query String":
      "쿼리 문자열",
    "Query String is queried using the Lucene syntax. For more information about the Lucene syntax see":
      "쿼리 문자열은 Lucene 구문을 사용하여 쿼리됩니다. Lucene 구문에 대한 자세한 내용은 다음을 참조하세요:",
    "Query string uses the Lucene syntax.":
      "쿼리 문자열은 Lucene 구문을 사용합니다.",
    "Query string uses the Lucene syntax. For more information about the Lucene syntax, see the link in the help section. The query will be used when fetching incidents. Index time field will be used as a filter in the query. The integration test button doesn't fully test the fetch incidents validity. To verify that the instance is set up correctly for fetching incidents, run the '!es-integration-health-check' command.":
      "쿼리 문자열은 Lucene 구문을 사용합니다. Lucene 구문에 대한 자세한 내용은 도움말 섹션의 링크를 참조하세요. 쿼리는 인시던트를 가져올 때 사용됩니다. 인덱스 시간 필드는 쿼리의 필터로 사용됩니다. 통합 테스트 버튼은 인시던트 가져오기의 유효성을 완전히 테스트하지 않습니다. 인스턴스가 인시던트 가져오기에 맞게 올바르게 설정되었는지 확인하려면 '!es-integration-health-check' 명령을 실행하세요.",
    "Raw Query allows raw DSL queries and will override the 'Query String' Lucene syntax string.":
      "Raw Query에서는 원시 DSL 쿼리를 사용할 수 있으며 'Query String' Lucene 구문 문자열을 재정의합니다.",
    "Raw Query allows raw DSL queries and will override the 'Query String' Lucene syntax string. Results will not be filtered or sorted. Use additional parameters in the raw query for these purposes. For more information see the link in the help section. The integration test button doesn't fully test the fetch incidents validity. To verify that the instance is set up correctly for fetching incidents, run the '!es-integration-health-check' command.":
      "Raw Query에서는 원시 DSL 쿼리를 사용할 수 있으며 'Query String' Lucene 구문 문자열을 재정의합니다. 결과는 필터링되거나 정렬되지 않습니다. 이러한 목적에는 원시 쿼리에 추가 매개변수를 사용하세요. 자세한 내용은 도움말 섹션의 링크를 참조하세요. 통합 테스트 버튼은 인시던트 가져오기의 유효성을 완전히 테스트하지 않습니다. 인스턴스가 인시던트 가져오기에 맞게 올바르게 설정되었는지 확인하려면 '!es-integration-health-check' 명령을 실행하세요.",
    "Results will not be filtered or sorted. Use additional parameters in the raw query for these purposes.":
      "결과는 필터링되거나 정렬되지 않습니다. 이러한 목적에는 원시 쿼리에 추가 매개변수를 사용하세요.",
    "The integration test button doesn't fully test the fetch incidents validity. To verify that the instance is set up correctly for fetching incidents, run the '!es-integration-health-check' command.":
      "통합 테스트 버튼은 인시던트 가져오기의 유효성을 완전히 테스트하지 않습니다. 인스턴스가 인시던트 가져오기에 맞게 올바르게 설정되었는지 확인하려면 '!es-integration-health-check' 명령을 실행하세요.",
    "The query will be used when fetching incidents. Index time field will be used as a filter in the query.":
      "쿼리는 인시던트를 가져올 때 사용됩니다. 인덱스 시간 필드는 쿼리의 필터로 사용됩니다.",
    "Relevant only if the integration is running on Azure VM. If selected, authenticates based on the value provided for the Azure Managed Identities Client ID field. If no value is provided for the Azure Managed Identities Client ID field, authenticates based on the System Assigned Managed Identity. For additional information, see the Help tab.":
      "인테그레이션이 Azure VM에서 실행되는 경우에만 해당됩니다. 선택하면 Azure Managed Identities Client ID 필드에 제공된 값을 기준으로 인증합니다. Azure Managed Identities Client ID 필드에 값이 제공되지 않으면 시스템 할당 관리 ID를 기준으로 인증합니다. 자세한 내용은 도움말 탭을 참조하세요.",
    "Required Kibana Privileges":
      "필요한 Kibana 권한",
    "Select the authentication type and enter the appropriate credentials:":
      "인증 유형을 선택하고 적절한 자격 증명을 입력합니다:",
    "Select the authentication type and enter the appropriate credentials: - Basic Auth: Enter Username and Password. - Bearer Auth: Enter Username and Password. - API Key Auth: Enter the API Key ID and API Key.":
      "인증 유형을 선택하고 적절한 자격 증명을 입력합니다: - Basic Auth: 사용자 이름과 비밀번호를 입력합니다. - Bearer Auth: 사용자 이름과 비밀번호를 입력합니다. - API Key Auth: API Key ID와 API Key를 입력합니다.",
    "Select what type of Identity alert from MSGraph you want to ingest.":
      "수집할 MSGraph의 Identity 알림 유형을 선택합니다.",
    "Server URL (e.g., https://graph.microsoft.com)":
      "서버 URL(예: https://graph.microsoft.com)",
    "Severity of the Cortex XSOAR/XSIAM issue to be created if Microsoft Entra ID Protection risk level override has been selected. Severity will be the same for all Microsoft Entra ID Protection alerts.":
      "Microsoft Entra ID Protection 위험 수준 재정의를 선택한 경우 생성되는 Cortex XSOAR/XSIAM 이슈의 심각도입니다. 심각도는 모든 Microsoft Entra ID Protection 알림에서 동일합니다.",
    "Simple-Date - A plain date string. You must specify the format in which the date is stored. For more information about time formatting, see":
      "Simple-Date - 일반 날짜 문자열입니다. 날짜가 저장된 형식을 지정해야 합니다. 시간 형식에 대한 자세한 내용은 다음을 참조하세요:",
    "Suppress Errors for Non Found Groups":
      "찾을 수 없는 그룹의 오류 숨기기",
    "Suppress Errors for Non Found Users":
      "찾을 수 없는 사용자의 오류 숨기기",
    "Tenant ID (required for Client Credentials mode)":
      "테넌트 ID(Client Credentials 모드에서 필수)",
    "This integration includes a set of":
      "이 통합에는 다음과 같은 일련의",
    "that let you interact with Kibana directly from Cortex — no separate Kibana integration required.":
      "이 포함되어 있어 Cortex에서 직접 Kibana와 상호작용할 수 있습니다. 별도의 Kibana 통합은 필요하지 않습니다.",
    "The “Test” button does not fully validate the fetch incidents functionality. To ensure the instance is correctly fetching incidents, run the":
      "[Test] 버튼은 인시던트 가져오기 기능을 완전히 검증하지 않습니다. 인스턴스가 인시던트를 올바르게 가져오고 있는지 확인하려면 다음을 실행하세요:",
    "The case severities to fetch. If none is chosen, all severity levels will be returned. Relevant only for incident type Elasticsearch Case.":
      "가져올 케이스의 심각도입니다. 아무것도 선택하지 않으면 모든 심각도 수준이 반환됩니다. 인시던트 유형 Elasticsearch Case에만 해당됩니다.",
    "The case statuses to fetch. If none is chosen, in-progress and open will be returned. Relevant only for incident type Elasticsearch Case.":
      "가져올 케이스의 상태입니다. 아무것도 선택하지 않으면 in-progress와 open이 반환됩니다. 인시던트 유형 Elasticsearch Case에만 해당됩니다.",
    "The Elasticsearch server to which the integration connects. Ensure that the URL includes the correct Elasticsearch port. The default port for Elasticsearch v7 and below is 9200. Use the Server URL for on-premises deployments.":
      "통합이 연결하는 Elasticsearch 서버입니다. URL에 올바른 Elasticsearch 포트가 포함되어 있는지 확인하세요. Elasticsearch v7 이하의 기본 포트는 9200입니다. 온프레미스 배포에는 Server URL을 사용합니다.",
    "The Elasticsearch v2 integration supports Elasticsearch 6.0.0 and later.":
      "Elasticsearch v2 통합은 Elasticsearch 6.0.0 이상을 지원합니다.",
    "The maximum number of incidents per request from Entra ID. Default is 50.":
      "Entra ID에서 요청당 가져오는 최대 인시던트 수입니다. 기본값은 50입니다.",
    "The maximum number of results per fetch":
      "가져오기당 최대 결과 수",
    "The mirroring direction. Mirroring works only for incident types Elasticsearch Security Alert and Elasticsearch Case.":
      "미러링 방향입니다. 미러링은 인시던트 유형 Elasticsearch Security Alert 및 Elasticsearch Case에서만 작동합니다.",
    "The time field used for sorting and limiting results. If using a nested field, separate field names with dot notation.":
      "결과 정렬 및 제한에 사용되는 시간 필드입니다. 중첩 필드를 사용하는 경우 필드 이름을 점 표기법으로 구분합니다.",
    "The time range to consider for the initial data fetch in the format <number> <unit>. For example, 1 hour, 2 hours, 6 hours, 12 hours, 24 hours, 48 hours, etc.":
      "초기 데이터 가져오기에서 고려할 시간 범위입니다. 형식은 <number> <unit>입니다. 예: 1 hour, 2 hours, 6 hours, 12 hours, 24 hours, 48 hours 등.",
    "The time range to consider for the initial data fetch. (<number> <unit>, e.g., 2 minutes, 2 hours, 2 days, 2 months, 2 years). Default is 3 days.":
      "초기 데이터 가져오기에서 고려할 시간 범위입니다. (<number> <unit>, 예: 2 minutes, 2 hours, 2 days, 2 months, 2 years). 기본값은 3 days입니다.",
    "The type of incident to fetch from Elasticsearch (Security Alert, Case, or other entity).":
      "Elasticsearch에서 가져올 인시던트 유형(Security Alert, Case 또는 기타 엔터티)입니다.",
    "There are two application authentication methods available:":
      "사용할 수 있는 애플리케이션 인증 방법은 두 가지입니다:",
    "There are two different authentication methods for self-deployed configuration:":
      "자체 배포 구성에는 두 가지 인증 방법이 있습니다:",
    "This integration was integrated and tested with versions 6.6.2, 7.3, 8.4.1 of Elasticsearch.":
      "이 통합은 Elasticsearch 버전 6.6.2, 7.3, 8.4.1에서 통합 및 테스트되었습니다.",
    "Time field type":
      "시간 필드 유형",
    "Timestamp-Milliseconds - A numeric value representing the number of milliseconds since the Unix epoch. Example: ‘1572164838123’":
      "Timestamp-Milliseconds - Unix 에포크 이후 경과한 밀리초 수를 나타내는 숫자 값입니다. 예: ‘1572164838123’",
    "Timestamp-Second - A numeric value representing the number of seconds since the Unix epoch (00:00:00 UTC on 1 January 1970). Example: ‘1572164838’":
      "Timestamp-Second - Unix 에포크(1970년 1월 1일 00:00:00 UTC) 이후 경과한 초 수를 나타내는 숫자 값입니다. 예: ‘1572164838’",
    "To allow access to Entra ID Groups, an administrator has to approve the Cortex app using an admin consent flow, by clicking this":
      "Entra ID 그룹에 대한 액세스를 허용하려면 관리자가 관리자 동의 흐름을 사용하여 Cortex 앱을 승인해야 합니다. 다음 링크를 클릭하세요:",
    "To connect to Microsoft Graph Identity & Access using either Cortex Graph app or the Self-Deployed Graph app:":
      "Cortex Graph 앱 또는 자체 배포 Graph 앱을 사용하여 Microsoft Graph Identity & Access에 연결하려면:",
    "To connect to Microsoft Graph Services using either the Cortex Azure app or the self-deployed Azure app:":
      "Cortex Azure 앱 또는 자체 배포 Azure 앱을 사용하여 Microsoft Graph Services에 연결하려면:",
    "To use a self-configured Azure application, you need to add a new Azure app registration in the Azure portal. To add the registration, see this":
      "자체 구성한 Azure 애플리케이션을 사용하려면 Azure 포털에서 새 Azure 앱 등록을 추가해야 합니다. 등록을 추가하는 방법은 다음을 참조하세요:",
    "To use a self-configured Azure application, you need to add a new Azure App Registration in the Azure Portal. To add the registration.":
      "자체 구성한 Azure 애플리케이션을 사용하려면 Azure 포털에서 새 Azure 앱 등록을 추가해야 합니다. 등록을 추가하는 방법은 다음을 참조하세요:",
    "To use Microsoft Graph Services, you need to configure authentication. There are three authentication methods available:":
      "Microsoft Graph Services를 사용하려면 인증을 구성해야 합니다. 사용할 수 있는 인증 방법은 세 가지입니다:",
    "To use the Cortex Azure application, use the default application ID (597c0375-766f-4e6d-ad2a-f48117044ac5).":
      "Cortex Azure 애플리케이션을 사용하려면 기본 애플리케이션 ID(597c0375-766f-4e6d-ad2a-f48117044ac5)를 사용합니다.",
    "To use the Cortex Azure application, use the default application ID (6b071e63-f701-454b-9e54-ede4c96483e6).":
      "Cortex Azure 애플리케이션을 사용하려면 기본 애플리케이션 ID(6b071e63-f701-454b-9e54-ede4c96483e6)를 사용합니다.",
    "To use this integration, you need to configure authentication. There are three authentication methods available:":
      "이 통합을 사용하려면 인증을 구성해야 합니다. 사용할 수 있는 인증 방법은 세 가지입니다:",
    "Type of authentication - could be Client Credentials Authorization Flow (recommended) or Device Flow":
      "인증 유형 - Client Credentials Authorization Flow(권장) 또는 Device Flow를 사용할 수 있습니다",
    "Use a self-deployed Azure application and authenticate using the Client Credentials flow.":
      "자체 배포된 Azure 애플리케이션을 사용하고 Client Credentials 흐름으로 인증합니다.",
    "Use Client Credentials Authorization Flow":
      "Client Credentials Authorization Flow 사용",
    "Use this option when required to customize the URL to the Microsoft Graph User endpoint. More information can be found here - https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud":
      "Microsoft Graph User 엔드포인트의 URL을 사용자 지정해야 할 때 이 옵션을 사용합니다. 자세한 내용은 여기를 참조하세요 - https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud",
    "Value Lists":
      "값 목록",
    "We recommend using the Client Credentials flow.":
      "Client Credentials 흐름을 사용하는 것이 좋습니다.",
    "What you can do with Kibana commands":
      "Kibana 명령으로 할 수 있는 작업",
    "When selecting the Custom option, the Server URL parameter must be filled. More information about National clouds can be found here - https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud":
      "Custom 옵션을 선택하는 경우 Server URL 매개변수를 입력해야 합니다. 국가 클라우드에 대한 자세한 내용은 여기를 참조하세요 - https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud",
    "When using the Authorization Code flow, make sure the user you authenticate with has the relevant roles in Azure AD in order to execute the operation.":
      "Authorization Code 흐름을 사용하는 경우 인증에 사용하는 사용자가 작업을 실행하기 위해 Azure AD에서 관련 역할을 가지고 있는지 확인하세요.",
    "Whether closing the Cortex incident is mirrored in Elasticsearch.":
      "Cortex 인시던트 닫기를 Elasticsearch에 미러링할지 여부입니다.",
    "Whether closing the Elasticsearch alert or case is mirrored in Cortex.":
      "Elasticsearch 알림 또는 케이스 닫기를 Cortex에 미러링할지 여부입니다.",
    "Whether to fetch alerts associated with each Elasticsearch Case. You must have read privileges for the Cases feature in the Management, Observability, or Security section of the Kibana feature privileges.":
      "각 Elasticsearch Case와 연결된 알림을 가져올지 여부입니다. Kibana 기능 권한의 Management, Observability 또는 Security 섹션에 있는 Cases 기능에 대한 읽기 권한이 있어야 합니다.",
    "You can authenticate either by Entra ID applications or by Azure Managed Identities.":
      "Entra ID 애플리케이션 또는 Azure 관리 ID 중 하나로 인증할 수 있습니다.",
    "You need to grant Cortex authorization to access Entra ID Users.":
      "Entra ID 사용자에 액세스하려면 Cortex에 권한을 부여해야 합니다.",

    // --- Batch: Elasticsearch v2 / Kibana URL setup list: fragments with a known neighbouring structure (follow-up to the 07:23 export) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    "Kibana URL":
      "Kibana URL",
    "parameter to the address of your Kibana server, including the port if it is not the default (e.g.":
      "매개변수를 Kibana 서버 주소로 설정합니다. 기본 포트가 아니면 포트도 포함합니다(예:",
    "You can leave":
      "다음 매개변수를 비워 둘 수 있습니다:",
    "empty. The URL is then derived automatically from the":
      ". 이 경우 URL은 다음에서 자동으로 파생됩니다:",
    ", by replacing the":
      ". 호스트 이름의",
    "segment of the hostname with":
      "세그먼트를 다음으로 바꿉니다:",
    "becomes":
      "은(는) 다음이 됩니다:",
    "When":
      "매개변수",
    "is set, it always takes precedence over the derivation from the":
      "이(가) 설정되어 있으면 다음에서의 파생보다 항상 우선합니다:",

    // --- Batch: Microsoft Graph / Azure Managed Identity setup steps: fragments with a known neighbouring structure (follow-up to the 07:23 export) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    "In order to use the":
      "다음",
    "command, you must use with the Authorization Code flow.":
      "명령을 사용하려면 Authorization Code 흐름을 사용해야 합니다.",
    "Select the":
      "체크박스",
    "checkbox and leave the":
      "을(를) 선택하고",
    "field empty.":
      "필드는 비워 둡니다.",

    // --- Batch: ExtraHop Reveal(x) / Flashpoint Ignite / F5 Silverline / FireEye HX / Kenna / McAfee / Envoy / Microsoft integration docs and parameter tooltips (07:55 export) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    ". Each API call fetches a maximum of 200 detection events.":
      ". 각 API 호출은 최대 200개의 탐지 이벤트를 가져옵니다.",
    "Advanced Filter":
      "고급 필터",
    "api_admin role.":
      "api_admin 역할.",
    "api_analyst role.":
      "api_analyst 역할.",
    "Applies a filter to the list of detections based on a JSON-specific query.":
      "JSON 전용 쿼리를 기반으로 탐지 목록에 필터를 적용합니다.",
    "Applies a filter to the list of detections based on a JSON-specific query. Example for detections: { \"categories\": [\"sec.attack\"], \"risk_score_min\": 51 } If the categories and category are not specified, then categories will be set to [\"sec.attack\"]. The category field is deprecated by the API, so please use the categories field instead. For a complete reference to the Extrahop detections filter fields, please refer to the ExtraHop REST API documentation at https://docs.extrahop.com/current/rest-api-guide/":
      "JSON 전용 쿼리를 기반으로 탐지 목록에 필터를 적용합니다. 탐지 예시: { \"categories\": [\"sec.attack\"], \"risk_score_min\": 51 } categories와 category를 지정하지 않으면 categories는 [\"sec.attack\"]으로 설정됩니다. category 필드는 API에서 사용 중단되었으므로 대신 categories 필드를 사용하세요. ExtraHop 탐지 필터 필드에 대한 전체 참조는 ExtraHop REST API 문서(https://docs.extrahop.com/current/rest-api-guide/)를 참조하세요.",
    "Applies a filter to the list of detections or metrics based on a JSON-specific query.":
      "JSON 전용 쿼리를 기반으로 탐지 또는 메트릭 목록에 필터를 적용합니다.",
    "As the F5 Silverline API does not support fetch incidents for now, we retrieve alerts via a log collector.":
      "F5 Silverline API는 현재 인시던트 가져오기를 지원하지 않으므로 로그 수집기를 통해 알림을 가져옵니다.",
    "Attack Types":
      "공격 유형",
    "Backfill vulnerabilities by providing date or relative timestamp.":
      "날짜 또는 상대 타임스탬프를 지정하여 취약성을 백필합니다.",
    "Backfill vulnerabilities by providing date or relative timestamp. Formats accepted: 2 minutes, 2 hours, 2 days, 2 weeks, 2 months, 2 years, yyyy-mm-dd, yyyy-mm-ddTHH:MM:SSZ. Default: 3 days.":
      "날짜 또는 상대 타임스탬프를 지정하여 취약성을 백필합니다. 허용되는 형식: 2 minutes, 2 hours, 2 days, 2 weeks, 2 months, 2 years, yyyy-mm-dd, yyyy-mm-ddTHH:MM:SSZ. 기본값: 3 days.",
    "Formats accepted: 2 minutes, 2 hours, 2 days, 2 weeks, 2 months, 2 years, yyyy-mm-dd, yyyy-mm-ddTHH:MM:SSZ.":
      "허용되는 형식: 2 minutes, 2 hours, 2 days, 2 weeks, 2 months, 2 years, yyyy-mm-dd, yyyy-mm-ddTHH:MM:SSZ.",
    "Default: 3 days.":
      "기본값: 3 days.",
    "Click on the":
      "다음",
    "button and paste it into the “API Key” parameter. Then, click on the":
      "버튼을 클릭하고 “API Key” 매개변수에 붙여넣습니다. 그런 다음 다음",
    "button to save the generated token and close the token generation page.":
      "버튼을 클릭하여 생성된 토큰을 저장하고 토큰 생성 페이지를 닫습니다.",
    "Click on your profile icon on the top right and select the":
      "오른쪽 상단의 프로필 아이콘을 클릭하고 드롭다운에서",
    "option from the dropdown. Alternatively, click on":
      "옵션을 선택합니다. 또는",
    "to be taken directly to the Generate Token page.":
      "을(를) 클릭하여 Generate Token 페이지로 바로 이동합니다.",
    "Enter the required details (i.e., Token Name, Ignite Username) and click on":
      "필요한 세부 정보(예: Token Name, Ignite Username)를 입력하고 다음을 클릭합니다:",
    "If you already have an API key you can find it there.":
      "이미 API 키가 있는 경우 그곳에서 확인할 수 있습니다.",
    "If you do not have an API Key, generate one by clicking":
      "API 키가 없는 경우 다음을 클릭하여 생성합니다:",
    "Login/Register at":
      "다음에서 로그인/등록합니다:",
    "Configure an API account on Flashpoint Ignite":
      "Flashpoint Ignite에서 API 계정 구성",
    "Configure an instance for ExtraHop Reveal(x)":
      "ExtraHop Reveal(x) 인스턴스 구성",
    "Due to a known limitation, clicking the":
      "알려진 제한 사항으로 인해",
    "button several times in quick succession may result in an “Unauthorized” error, even after a successful result was initially returned. It is enough to receive one success message to verify that the configuration is correct. “Unauthorized” error messages received from repeated clicking of the instance configuration":
      "버튼을 짧은 시간에 여러 번 클릭하면 처음에 성공 결과가 반환된 후에도 “Unauthorized” 오류가 발생할 수 있습니다. 구성이 올바른지 확인하려면 성공 메시지를 한 번 받는 것으로 충분합니다. 인스턴스 구성의",
    "button do not affect the validity of the instance if the initial response was successful.":
      "버튼을 반복해서 클릭하여 받은 “Unauthorized” 오류 메시지는 초기 응답이 성공한 경우 인스턴스의 유효성에 영향을 주지 않습니다.",
    "Complete the following configuration options:":
      "다음 구성 옵션을 완료합니다:",
    "Connect to McAfee TIE using the McAfee DXL client.":
      "McAfee DXL 클라이언트를 사용하여 McAfee TIE에 연결합니다.",
    "Create relationships between indicators as part of Enrichment.":
      "보강의 일부로 지표 간의 관계를 생성합니다.",
    "CWE IDs":
      "CWE ID",
    "Deprecated. Use McAfee ePO v2 instead.":
      "사용 중단되었습니다. 대신 McAfee ePO v2를 사용하세요.",
    "Deprecated. Use McAfee Threat Intelligence Exchange V2 integration instead.":
      "사용 중단되었습니다. 대신 McAfee Threat Intelligence Exchange V2 통합을 사용하세요.",
    "Deprecated. Use the Kafka v2 integration instead.":
      "사용 중단되었습니다. 대신 Kafka v2 통합을 사용하세요.",
    "Deprecated. Use the Mattermost v2 integration instead.":
      "사용 중단되었습니다. 대신 Mattermost v2 통합을 사용하세요.",
    "Deprecated. Use the McAfee ESM v2 integration instead.":
      "사용 중단되었습니다. 대신 McAfee ESM v2 통합을 사용하세요.",
    "Enter a unique":
      "인스턴스의 고유한",
    "for the instance.":
      "을(를) 입력합니다.",
    "Envoy Integration consists of a set of API endpoints that allow customers to automate provisioning of users.":
      "Envoy 통합은 고객이 사용자 프로비저닝을 자동화할 수 있는 일련의 API 엔드포인트로 구성됩니다.",
    "Example for detections:":
      "탐지 예시:",
    "Fetch limit":
      "가져오기 한도",
    "Fetching F5 Silverline Alerts":
      "F5 Silverline 알림 가져오기",
    "Filter by associated product names (case-insensitive).":
      "연결된 제품 이름으로 필터링합니다(대/소문자 구분 안 함).",
    "Filter by associated vendor names (case-insensitive).":
      "연결된 공급업체 이름으로 필터링합니다(대/소문자 구분 안 함).",
    "Filter by Attack type classification.":
      "공격 유형 분류로 필터링합니다.",
    "Filter by CWE IDs assigned by Mitre.":
      "Mitre에서 할당한 CWE ID로 필터링합니다.",
    "Filter by location type classification.":
      "위치 유형 분류로 필터링합니다.",
    "Filter by lower limit of the CVSS v2 score. Prioritizes Flashpoint generated scores when possible. Example value 7.0":
      "CVSS v2 점수의 하한으로 필터링합니다. 가능한 경우 Flashpoint에서 생성한 점수를 우선합니다. 값 예시: 7.0",
    "Filter by lower limit of the CVSS v2 score. Prioritizes Flashpoint generated scores when possible. Example value 7.0 Note: Value must be a float between 0 and 10.":
      "CVSS v2 점수의 하한으로 필터링합니다. 가능한 경우 Flashpoint에서 생성한 점수를 우선합니다. 값 예시: 7.0 참고: 값은 0에서 10 사이의 부동 소수점 수여야 합니다.",
    "Filter by lower limit of the CVSS v3 score. Prioritizes Flashpoint generated scores when possible. Example value 7.0":
      "CVSS v3 점수의 하한으로 필터링합니다. 가능한 경우 Flashpoint에서 생성한 점수를 우선합니다. 값 예시: 7.0",
    "Filter by lower limit of the CVSS v3 score. Prioritizes Flashpoint generated scores when possible. Example value 7.0 Note: Value must be a float between 0 and 10.":
      "CVSS v3 점수의 하한으로 필터링합니다. 가능한 경우 Flashpoint에서 생성한 점수를 우선합니다. 값 예시: 7.0 참고: 값은 0에서 10 사이의 부동 소수점 수여야 합니다.",
    "Filter by lower limit of the CVSS v4 score. Prioritizes Flashpoint generated scores when possible. Example value 7.0":
      "CVSS v4 점수의 하한으로 필터링합니다. 가능한 경우 Flashpoint에서 생성한 점수를 우선합니다. 값 예시: 7.0",
    "Filter by lower limit of the CVSS v4 score. Prioritizes Flashpoint generated scores when possible. Example value 7.0 Note: Value must be a float between 0 and 10.":
      "CVSS v4 점수의 하한으로 필터링합니다. 가능한 경우 Flashpoint에서 생성한 점수를 우선합니다. 값 예시: 7.0 참고: 값은 0에서 10 사이의 부동 소수점 수여야 합니다.",
    "Filter by upper limit of the CVSS v2 score. Prioritizes Flashpoint generated scores when possible. Example value 10.0":
      "CVSS v2 점수의 상한으로 필터링합니다. 가능한 경우 Flashpoint에서 생성한 점수를 우선합니다. 값 예시: 10.0",
    "Filter by upper limit of the CVSS v2 score. Prioritizes Flashpoint generated scores when possible. Example value 10.0 Note: Value must be a float between 0 and 10.":
      "CVSS v2 점수의 상한으로 필터링합니다. 가능한 경우 Flashpoint에서 생성한 점수를 우선합니다. 값 예시: 10.0 참고: 값은 0에서 10 사이의 부동 소수점 수여야 합니다.",
    "Filter by upper limit of the CVSS v3 score. Prioritizes Flashpoint generated scores when possible. Example value 10.0":
      "CVSS v3 점수의 상한으로 필터링합니다. 가능한 경우 Flashpoint에서 생성한 점수를 우선합니다. 값 예시: 10.0",
    "Filter by upper limit of the CVSS v3 score. Prioritizes Flashpoint generated scores when possible. Example value 10.0 Note: Value must be a float between 0 and 10.":
      "CVSS v3 점수의 상한으로 필터링합니다. 가능한 경우 Flashpoint에서 생성한 점수를 우선합니다. 값 예시: 10.0 참고: 값은 0에서 10 사이의 부동 소수점 수여야 합니다.",
    "Filter by upper limit of the CVSS v4 score. Prioritizes Flashpoint generated scores when possible. Example value 10.0":
      "CVSS v4 점수의 상한으로 필터링합니다. 가능한 경우 Flashpoint에서 생성한 점수를 우선합니다. 값 예시: 10.0",
    "Filter by upper limit of the CVSS v4 score. Prioritizes Flashpoint generated scores when possible. Example value 10.0 Note: Value must be a float between 0 and 10.":
      "CVSS v4 점수의 상한으로 필터링합니다. 가능한 경우 Flashpoint에서 생성한 점수를 우선합니다. 값 예시: 10.0 참고: 값은 0에서 10 사이의 부동 소수점 수여야 합니다.",
    "Filter by lower limit of the EPSS v3 score. Example value 0.5":
      "EPSS v3 점수의 하한으로 필터링합니다. 값 예시: 0.5",
    "Filter by lower limit of the EPSS v3 score. Example value 0.5 Note: Value must be a float between 0 and 1.":
      "EPSS v3 점수의 하한으로 필터링합니다. 값 예시: 0.5 참고: 값은 0에서 1 사이의 부동 소수점 수여야 합니다.",
    "Filter by upper limit of the EPSS v3 score. Example value 1.0":
      "EPSS v3 점수의 상한으로 필터링합니다. 값 예시: 1.0",
    "Filter by upper limit of the EPSS v3 score. Example value 1.0 Note: Value must be a float between 0 and 1.":
      "EPSS v3 점수의 상한으로 필터링합니다. 값 예시: 1.0 참고: 값은 0에서 1 사이의 부동 소수점 수여야 합니다.",
    "Note: Value must be a float between 0 and 1.":
      "참고: 값은 0에서 1 사이의 부동 소수점 수여야 합니다.",
    "Note: Value must be a float between 0 and 10.":
      "참고: 값은 0에서 10 사이의 부동 소수점 수여야 합니다.",
    "Filter by Ransomware score.":
      "랜섬웨어 점수로 필터링합니다.",
    "Filter by reference types.":
      "참조 유형으로 필터링합니다.",
    "Filter by reference values. Use with Reference Types to filter by specific reference type.":
      "참조 값으로 필터링합니다. 특정 참조 유형으로 필터링하려면 Reference Types와 함께 사용합니다.",
    "Filter by severity, which is calculated based on CVSS values.":
      "CVSS 값을 기반으로 계산된 심각도로 필터링합니다.",
    "Filter by Tags":
      "태그로 필터링",
    "Filter vulnerabilities by tags.":
      "태그로 취약성을 필터링합니다.",
    "FireEye Endpoint Security is an integrated solution that detects what others miss and protects endpoints against known and unknown threats. The HX Cortex integration provides access to information about endpoints, acquisitions, alerts, indicators, and containment. Customers can extract critical data and effectively operate a security operations automated playbook":
      "FireEye Endpoint Security는 다른 솔루션이 놓치는 위협을 탐지하고 알려진 위협과 알려지지 않은 위협으로부터 엔드포인트를 보호하는 통합 솔루션입니다. HX Cortex 통합은 엔드포인트, 수집, 알림, 지표 및 격리에 대한 정보에 대한 액세스를 제공합니다. 고객은 중요한 데이터를 추출하고 보안 운영 자동화 플레이북을 효과적으로 운영할 수 있습니다",
    "First fetch timestamp (<number> <time unit>, e.g., 12 hours, 3 days)":
      "첫 번째 가져오기 타임스탬프(<number> <time unit>, 예: 12 hours, 3 days)",
    "For a complete reference to the Extrahop detections filter fields, please refer to the ExtraHop REST API documentation at":
      "ExtraHop 탐지 필터 필드에 대한 전체 참조는 다음 ExtraHop REST API 문서를 참조하세요:",
    "For example: 10 minutes, 5 hours, 8 days, 2 weeks, 8 months, 2021-12-31, 01 Mar 2021, 01 Feb 2021 04:45:33, 2022-04-17T14:05:44Z":
      "예: 10 minutes, 5 hours, 8 days, 2 weeks, 8 months, 2021-12-31, 01 Mar 2021, 01 Feb 2021 04:45:33, 2022-04-17T14:05:44Z",
    "If configuring an instance for ExtraHop Reveal(x) 360, select":
      "ExtraHop Reveal(x) 360용 인스턴스를 구성하는 경우 다음을 선택합니다:",
    "If configuring an instance for ExtraHop Reveal(x) Enterprise, unselect":
      "ExtraHop Reveal(x) Enterprise용 인스턴스를 구성하는 경우 다음의 선택을 해제합니다:",
    "If the categories and category are not specified, then categories will be set to [\"sec.attack\"]. The category field is deprecated by the API, so please use the categories field instead.":
      "categories와 category를 지정하지 않으면 categories는 [\"sec.attack\"]으로 설정됩니다. category 필드는 API에서 사용 중단되었으므로 대신 categories 필드를 사용하세요.",
    "In F5 Silverline portal, go to":
      "F5 Silverline 포털에서 다음으로 이동합니다:",
    "In order to fetch alerts, follow the instructions":
      "알림을 가져오려면 다음 지침을 따르세요:",
    "Indicates whether to allow connections without verifying SSL certificate's validity.":
      "SSL 인증서의 유효성을 확인하지 않고 연결을 허용할지 여부를 나타냅니다.",
    "Indicates whether to use XSOAR's system proxy settings to connect to the API.":
      "API에 연결할 때 XSOAR의 시스템 프록시 설정을 사용할지 여부를 나타냅니다.",
    "Info level for fetched alerts":
      "가져온 알림의 정보 수준",
    "Integrated advanced threat detection: Enhancing protection from network edge to endpoint.":
      "통합 고급 위협 탐지: 네트워크 엣지에서 엔드포인트까지 보호를 강화합니다.",
    "Integration instance settings":
      "통합 인스턴스 설정",
    "Specifies the type of incident to be created for detection events ingested by this instance if a":
      "이 인스턴스에서 수집한 탐지 이벤트에 대해 생성할 인시던트 유형을 지정합니다(",
    "is not specified.":
      "을(를) 지정하지 않은 경우).",
    "Known Limitations":
      "알려진 제한 사항",
    "KOI is an endpoint security platform that provides visibility and control over browser extensions, SaaS applications, and web-based threats.":
      "KOI는 브라우저 확장 프로그램, SaaS 애플리케이션 및 웹 기반 위협에 대한 가시성과 제어를 제공하는 엔드포인트 보안 플랫폼입니다.",
    "Locations":
      "위치",
    "Magnet Automate is an orchestration and automation platform that accelerates your digital forensics investigations by automating workflows and integrating with various forensic tools.":
      "Magnet Automate는 워크플로를 자동화하고 다양한 포렌식 도구와 통합하여 디지털 포렌식 조사를 가속화하는 오케스트레이션 및 자동화 플랫폼입니다.",
    "Max incidents to fetch":
      "가져올 최대 인시던트 수",
    "Maximum CVSS v2 Score":
      "최대 CVSS v2 점수",
    "Maximum CVSS v3 Score":
      "최대 CVSS v3 점수",
    "Maximum CVSS v4 Score":
      "최대 CVSS v4 점수",
    "Maximum EPSS v3 Score":
      "최대 EPSS v3 점수",
    "Minimum CVSS v2 Score":
      "최소 CVSS v2 점수",
    "Minimum CVSS v3 Score":
      "최소 CVSS v3 점수",
    "Minimum CVSS v4 Score":
      "최소 CVSS v4 점수",
    "Minimum EPSS v3 Score":
      "최소 EPSS v3 점수",
    "Microsoft 365 Defender is a unified pre- and post-breach enterprise defense suite that natively coordinates detection, prevention, investigation, and response across endpoints, identities, email, and applications to provide integrated protection against sophisticated attacks.":
      "Microsoft 365 Defender는 엔드포인트, ID, 이메일 및 애플리케이션 전반에서 탐지, 예방, 조사 및 대응을 기본적으로 조율하여 정교한 공격에 대한 통합 보호를 제공하는, 침해 전후를 아우르는 통합 엔터프라이즈 방어 제품군입니다.",
    "Microsoft Defender for Endpoint (previously Microsoft Defender Advanced Threat Protection (ATP)) is a unified platform for preventative protection, post-breach detection, automated investigation, and response.":
      "Microsoft Defender for Endpoint(이전 Microsoft Defender Advanced Threat Protection (ATP))는 예방적 보호, 침해 후 탐지, 자동 조사 및 대응을 위한 통합 플랫폼입니다.",
    "Microsoft Graph grants Cortex authorized access to a user's Microsoft Outlook mail data in a personal account or organization account.":
      "Microsoft Graph는 개인 계정 또는 조직 계정에 있는 사용자의 Microsoft Outlook 메일 데이터에 대한 승인된 액세스 권한을 Cortex에 부여합니다.",
    "Microsoft Intune is a Microsoft cloud-based management solution that provides for mobile device and operating system management.":
      "Microsoft Intune은 모바일 디바이스 및 운영 체제 관리를 제공하는 Microsoft의 클라우드 기반 관리 솔루션입니다.",
    "On Cloud":
      "클라우드",
    "Product Names":
      "제품 이름",
    "Vendor Names":
      "공급업체 이름",
    "Ransomware Score":
      "랜섬웨어 점수",
    "Reference Types":
      "참조 유형",
    "Reference Values":
      "참조 값",
    "Provides the tags to be added to the indicators. Supports CSV values.":
      "지표에 추가할 태그를 제공합니다. CSV 값을 지원합니다.",
    "Select if the instance connects to an ExtraHop Reveal(x) 360 system. Leave unselected if connecting to ExtraHop Reveal(x) Enterprise. Default value is false.":
      "인스턴스가 ExtraHop Reveal(x) 360 시스템에 연결하는 경우 선택합니다. ExtraHop Reveal(x) Enterprise에 연결하는 경우 선택하지 않은 상태로 둡니다. 기본값은 false입니다.",
    "Select to disable running commands through the Cortex CLI on this instance of the integration.":
      "이 통합 인스턴스에서 Cortex CLI를 통한 명령 실행을 사용하지 않도록 하려면 선택합니다.",
    "Select to enable this instance to fetch detection events. Otherwise, select":
      "이 인스턴스에서 탐지 이벤트를 가져오도록 하려면 선택합니다. 그렇지 않으면 다음을 선택합니다:",
    "Send email notifications to users":
      "사용자에게 이메일 알림을 보냅니다",
    "Send emails implemented in Python with embedded image support.":
      "포함된 이미지를 지원하는 Python으로 구현된 이메일 전송 기능입니다.",
    "Send messages and notifications to your team members.":
      "팀원에게 메시지와 알림을 보냅니다.",
    "Server URL (e.g. https://192.168.0.1:3000)":
      "서버 URL(예: https://192.168.0.1:3000)",
    "Server URL (e.g., https://192.168.0.1:3000)":
      "서버 URL(예: https://192.168.0.1:3000)",
    "Server URL to connect to Flashpoint Ignite.":
      "Flashpoint Ignite에 연결할 서버 URL입니다.",
    "Specifies how detection events ingested by this instance are mapped to Cortex incident fields.":
      "이 인스턴스에서 수집한 탐지 이벤트를 Cortex 인시던트 필드에 매핑하는 방법을 지정합니다.",
    "Specifies how often the instance fetches detection events. Because each API call fetches a maximum of 200 detection events, we recommend specifying one minute intervals to fetch all detection events.":
      "인스턴스가 탐지 이벤트를 가져오는 빈도를 지정합니다. 각 API 호출은 최대 200개의 탐지 이벤트를 가져오므로 모든 탐지 이벤트를 가져오려면 1분 간격을 지정하는 것이 좋습니다.",
    "Specifies the beginning timestamp from which to start fetching detection events.":
      "탐지 이벤트 가져오기를 시작할 시작 타임스탬프를 지정합니다.",
    "Specifies the level of logging to enable for this instance of the integration.":
      "이 통합 인스턴스에서 사용할 로깅 수준을 지정합니다.",
    "Specifies the type of incident to be created for detection events ingested by this instance.":
      "이 인스턴스에서 수집한 탐지 이벤트에 대해 생성할 인시던트 유형을 지정합니다.",
    "Specifies whether to allow connections without verifying SSL certificate’s validity.":
      "SSL 인증서의 유효성을 확인하지 않고 연결을 허용할지 여부를 지정합니다.",
    "Specifies whether to run the instance of the integration on a single engine.":
      "통합 인스턴스를 단일 엔진에서 실행할지 여부를 지정합니다.",
    "Specifies whether to use XSOAR system proxy settings to connect to the API.":
      "API에 연결할 때 XSOAR 시스템 프록시 설정을 사용할지 여부를 지정합니다.",
    "Supported formats: N minutes, N hours, N days, N weeks, N months, N years, yyyy-mm-dd, yyyy-mm-ddTHH:MM:SSZ":
      "지원되는 형식: N minutes, N hours, N days, N weeks, N months, N years, yyyy-mm-dd, yyyy-mm-ddTHH:MM:SSZ",
    "The API key required for authentication if connecting to ExtraHop Reveal(x) Enterprise.":
      "ExtraHop Reveal(x) Enterprise에 연결하는 경우 인증에 필요한 API 키입니다.",
    "The API key to use for the connection.":
      "연결에 사용할 API 키입니다.",
    "The client ID generated on your ExtraHop system that is required for authentication if connecting to ExtraHop Reveal(x) 360.":
      "ExtraHop Reveal(x) 360에 연결하는 경우 인증에 필요한, ExtraHop 시스템에서 생성된 클라이언트 ID입니다.",
    "The client secret generated on your ExtraHop system that is required for authentication if connecting to ExtraHop Reveal(x) 360.":
      "ExtraHop Reveal(x) 360에 연결하는 경우 인증에 필요한, ExtraHop 시스템에서 생성된 클라이언트 시크릿입니다.",
    "The Microsoft Management Activity API integration enables you to subscribe or unsubscribe to different audits, receive their content, and fetch new content as incidents.":
      "Microsoft Management Activity API 통합을 사용하면 다양한 감사를 구독하거나 구독 취소하고, 해당 콘텐츠를 수신하고, 새 콘텐츠를 인시던트로 가져올 수 있습니다.",
    "The URL of the ExtraHop system this instance will connect to.":
      "이 인스턴스가 연결할 ExtraHop 시스템의 URL입니다.",
    "The URL of your FireEye account.":
      "FireEye 계정의 URL입니다.",
    "The UTC date or relative timestamp from where to start fetching incidents.":
      "인시던트 가져오기를 시작할 UTC 날짜 또는 상대 타임스탬프입니다.",
    "The UTC date or relative timestamp from where to start fetching incidents. Supported formats: N minutes, N hours, N days, N weeks, N months, N years, yyyy-mm-dd, yyyy-mm-ddTHH:MM:SSZ For example: 10 minutes, 5 hours, 8 days, 2 weeks, 8 months, 2021-12-31, 01 Mar 2021, 01 Feb 2021 04:45:33, 2022-04-17T14:05:44Z":
      "인시던트 가져오기를 시작할 UTC 날짜 또는 상대 타임스탬프입니다. 지원되는 형식: N minutes, N hours, N days, N weeks, N months, N years, yyyy-mm-dd, yyyy-mm-ddTHH:MM:SSZ 예: 10 minutes, 5 hours, 8 days, 2 weeks, 8 months, 2021-12-31, 01 Mar 2021, 01 Feb 2021 04:45:33, 2022-04-17T14:05:44Z",
    "There are two types of permissions":
      "권한에는 두 가지 유형이 있습니다",
    "This integration enables using Elastic Security for SIEM for security operations management and searching Elastic logs. This pack is to be used in combination with the Elasticsearch v2 integration.":
      "이 통합을 사용하면 보안 운영 관리와 Elastic 로그 검색에 Elastic Security for SIEM을 사용할 수 있습니다. 이 팩은 Elasticsearch v2 통합과 함께 사용해야 합니다.",
    "To configure an instance of F5 Silverline, you need to obtain the following information.":
      "F5 Silverline 인스턴스를 구성하려면 다음 정보를 확보해야 합니다.",
    "To configure the integration, enter your credentials in the following fields:":
      "통합을 구성하려면 다음 필드에 자격 증명을 입력합니다:",
    "To set up an instance, you need to add the following:":
      "인스턴스를 설정하려면 다음을 추가해야 합니다:",
    "Unified gateway to security insights - all from a unified Microsoft Graph Security API.":
      "보안 인사이트로 연결되는 통합 게이트웨이 - 모두 통합된 Microsoft Graph Security API에서 제공됩니다.",
    "Use the integration to get logs from the O365 service.":
      "이 통합을 사용하여 O365 서비스에서 로그를 가져옵니다.",
    "Use the Kenna v2 integration to search and update vulnerabilities, schedule a run connector, and manage tags and attributes.":
      "Kenna v2 통합을 사용하여 취약성을 검색 및 업데이트하고, 커넥터 실행을 예약하고, 태그와 속성을 관리합니다.",
    "Use the Lastline v2 integration to provide threat analysts and incident response teams with the advanced malware isolation and inspection environment needed to safely execute advanced malware samples, and understand their behavior.":
      "Lastline v2 통합을 사용하여 위협 분석가와 인시던트 대응팀에 고급 악성코드 샘플을 안전하게 실행하고 그 동작을 이해하는 데 필요한 고급 악성코드 격리 및 검사 환경을 제공합니다.",
    "Use the Microsoft Graph API integration to interact with Microsoft APIs that do not have dedicated integrations in Cortex, for example, Mail Single-User, etc.":
      "Microsoft Graph API 통합을 사용하여 Cortex에 전용 통합이 없는 Microsoft API와 상호작용합니다(예: Mail Single-User 등).",
    "Use the Microsoft Search API in Microsoft Graph to search content stored in OneDrive or SharePoint: files, folders, lists, list items, or sites.":
      "Microsoft Graph의 Microsoft Search API를 사용하여 OneDrive 또는 SharePoint에 저장된 콘텐츠(파일, 폴더, 목록, 목록 항목 또는 사이트)를 검색합니다.",
    "Use the MITRE ATT&CK® feed to fetch MITRE’s Adversarial Tactics, Techniques, and Common Knowledge (ATT&CK®) content. MITRE ATT&CK is a globally-accessible knowledge base of adversary tactics and techniques based on real-world observations. The ATT&CK knowledge base is used as a foundation for the development of specific threat models and methodologies in the private sector, in government, and in the cybersecurity product and service community.":
      "MITRE ATT&CK® 피드를 사용하여 MITRE의 Adversarial Tactics, Techniques, and Common Knowledge(ATT&CK®) 콘텐츠를 가져옵니다. MITRE ATT&CK는 실제 관찰을 기반으로 한 공격자 전술 및 기술에 대한, 전 세계에서 액세스할 수 있는 지식 베이스입니다. ATT&CK 지식 베이스는 민간 부문, 정부, 사이버 보안 제품 및 서비스 커뮤니티에서 특정 위협 모델과 방법론을 개발하는 기반으로 사용됩니다.",
    "User Name and Password":
      "사용자 이름 및 비밀번호",
    "When you have api_analyst permissions, you cannot approve a containment for the host.":
      "api_analyst 권한이 있는 경우 호스트에 대한 격리를 승인할 수 없습니다.",
    "You can use with fireeye-hx-host-containment command for sending a containment request.":
      "격리 요청을 보내기 위해 fireeye-hx-host-containment 명령과 함께 사용할 수 있습니다.",
    "Your F5 Silverline server URL":
      "F5 Silverline 서버 URL",
    "Your server URL":
      "서버 URL",
    "Your username and password when logging in to your FireEye account.":
      "FireEye 계정에 로그인할 때 사용하는 사용자 이름과 비밀번호입니다.",

    // --- Batch: GCP service account setup / Freshservice / Forcepoint / FortiGate / Glean integration docs and parameters (08:29 export) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    ", add the users or groups that are allowed to use and manage the service account.":
      ", 서비스 계정을 사용하고 관리할 수 있는 사용자 또는 그룹을 추가합니다.",
    ", select the IAM roles to grant to the service account.":
      ", 서비스 계정에 부여할 IAM 역할을 선택합니다.",
    ", then click":
      ", 그런 다음 클릭합니다:",
    ". Note that you must have permission to add members to the organization or project for the":
      ". 다음 멤버를 추가하려면 조직 또는 프로젝트에 멤버를 추가할 수 있는 권한이 있어야 합니다:",
    "(Account username, Password)":
      "(계정 사용자 이름, 비밀번호)",
    "A list of the required permissions for every command can be found below.":
      "각 명령에 필요한 권한 목록은 아래에서 확인할 수 있습니다.",
    "A new API key will be generated for you. Copy the generated API key and keep it secure.":
      "새 API 키가 생성됩니다. 생성된 API 키를 복사하여 안전하게 보관하세요.",
    "Account username":
      "계정 사용자 이름",
    "Add a member and roles to a project or organization. In the":
      "프로젝트 또는 조직에 멤버와 역할을 추가합니다.",
    "Add a title, description, and ID and ensure the role is marked for General Availability.":
      "제목, 설명, ID를 추가하고 역할이 General Availability로 표시되어 있는지 확인합니다.",
    "Add the required permissions by clicking":
      "다음을 클릭하여 필요한 권한을 추가합니다:",
    "After choosing an authentication method, click":
      "인증 방법을 선택한 후 다음을 클릭합니다:",
    "At the top-left, click the navigation menu >":
      "왼쪽 상단에서 탐색 메뉴를 클릭한 다음",
    "Check the Version 8.5.5 or later flag to switch to use these newer api endpoints.":
      "이 새로운 API 엔드포인트를 사용하도록 전환하려면 Version 8.5.5 or later 플래그를 선택합니다.",
    "Click on your profile icon in the top-right corner and select “Profile settings” from the dropdown menu.":
      "오른쪽 상단의 프로필 아이콘을 클릭하고 드롭다운 메뉴에서 “Profile settings”를 선택합니다.",
    "Click the down arrow in the top menu bar for the project.":
      "상단 메뉴 막대에서 프로젝트의 아래쪽 화살표를 클릭합니다.",
    "Click the email address for the service account you created.":
      "생성한 서비스 계정의 이메일 주소를 클릭합니다.",
    "Click the navigation menu and select":
      "탐색 메뉴를 클릭하고 다음을 선택합니다:",
    "Command Name":
      "명령 이름",
    "Command Required Permissions":
      "명령에 필요한 권한",
    "Could not authorize":
      "권한을 부여할 수 없습니다",
    "Create a Custom Role":
      "사용자 지정 역할 만들기",
    "Create a Project":
      "프로젝트 만들기",
    "Create a Service Account":
      "서비스 계정 만들기",
    "Create a Service Account & Service Account Key":
      "서비스 계정 및 서비스 계정 키 만들기",
    "Create a Service Account Key":
      "서비스 계정 키 만들기",
    "Credentials and Password":
      "자격 증명 및 비밀번호",
    "drop-down list, select":
      "드롭다운 목록에서 다음을 선택합니다:",
    "drop-down list, select an organization that contains the GCP project(s) that you want the integration to monitor.":
      "드롭다운 목록에서 통합이 모니터링할 GCP 프로젝트가 포함된 조직을 선택합니다.",
    "drop-down list, select the required roles.":
      "드롭다운 목록에서 필요한 역할을 선택합니다.",
    "Enable Google Workspace APIs":
      "Google Workspace API 사용 설정",
    "Enter an API token and your Server URL.":
      "API 토큰과 서버 URL을 입력합니다.",
    "Enter your Server URL -":
      "서버 URL을 입력합니다 -",
    "Fetch tasks for each ticket type and consider them in the mirroring (requires an additional API request per ticket).":
      "티켓 유형별로 작업을 가져와 미러링에 반영합니다(티켓당 추가 API 요청이 필요합니다).",
    "Fetch tickets tasks":
      "티켓 작업 가져오기",
    "field, paste the email address of the created service account.":
      "필드에 생성한 서비스 계정의 이메일 주소를 붙여넣습니다.",
    "First alert created date to fetch. e.g., \"1 min ago\",\"2 weeks ago\",\"3 months ago\"":
      "가져올 첫 번째 알림의 생성 날짜입니다. 예: \"1 min ago\",\"2 weeks ago\",\"3 months ago\"",
    "Follow these instructions to retrieve the API token.":
      "API 토큰을 가져오려면 다음 지침을 따르세요.",
    "Follow these instructions to successfully instantiate an instance of the Freshservice integration.":
      "Freshservice 통합 인스턴스를 성공적으로 생성하려면 다음 지침을 따르세요.",
    "Forcepoint version 8.5.5 or later":
      "Forcepoint 버전 8.5.5 이상",
    "Forcepoint’s API calls to delete URLs/IPs from a category and to delete the category itself have changed. See":
      "카테고리에서 URL/IP를 삭제하고 카테고리 자체를 삭제하는 Forcepoint API 호출이 변경되었습니다. 다음을 참조하세요:",
    "Forcepoint’s documentation":
      "Forcepoint 설명서",
    "FortiGate always delivered on the concept of hybrid mesh firewalls with FortiManager for unified management and consistent security across complex hybrid environments.":
      "FortiGate는 복잡한 하이브리드 환경 전반에서 통합 관리와 일관된 보안을 제공하기 위해 FortiManager와 함께 하이브리드 메시 방화벽 개념을 꾸준히 제공해 왔습니다.",
    "FortiGate provides flawless convergence that can scale to any location: remote office, branch, campus, data center, and cloud.":
      "FortiGate는 원격 사무실, 지사, 캠퍼스, 데이터 센터, 클라우드 등 모든 위치로 확장할 수 있는 완벽한 융합을 제공합니다.",
    "Freshservice URL (make sure your URL includes your unique environment name).":
      "Freshservice URL(URL에 고유한 환경 이름이 포함되어 있는지 확인하세요).",
    "Glean Configure Connection":
      "Glean 연결 구성",
    "Grant Permissions":
      "권한 부여",
    "Grant Role Access to Service Account":
      "서비스 계정에 역할 액세스 권한 부여",
    "How to Achieve Authentication":
      "인증 방법",
    "If prompted, select a project, or create a new one.":
      "메시지가 표시되면 프로젝트를 선택하거나 새로 만듭니다.",
    "If the Freshworks Freshservice name for your company is, for example, ‘taltal’, then the Server URL configuration parameter you would enter would be ‘https://taltal.freshservice.com’.":
      "예를 들어 회사의 Freshworks Freshservice 이름이 ‘taltal’인 경우 입력해야 하는 서버 URL 구성 매개변수는 ‘https://taltal.freshservice.com’입니다.",
    "Important Updates for Version 8.5.5 and Later":
      "버전 8.5.5 이상의 중요 업데이트",
    "In order to use the integration capabilities, you need to enable Google Workspace APIs.":
      "통합 기능을 사용하려면 Google Workspace API를 사용 설정해야 합니다.",
    "In order to use the integration, in the first stage, you need to create a project.":
      "통합을 사용하려면 먼저 첫 단계에서 프로젝트를 만들어야 합니다.",
    "In the left sidebar, click on “API Key”.":
      "왼쪽 사이드바에서 “API Key”를 클릭합니다.",
    "In the list of search results, click the API you want to enable.":
      "검색 결과 목록에서 사용 설정할 API를 클릭합니다.",
    "In the search field, enter the name of the API you want to enable and press":
      "검색 필드에 사용 설정할 API의 이름을 입력하고 다음을 누릅니다:",
    "Incident impacts to fetch. The default is All. You can choose multiple impacts.":
      "가져올 인시던트 영향입니다. 기본값은 All입니다. 여러 영향을 선택할 수 있습니다.",
    "Incident priorities to fetch. The default is All. You can choose multiple priorities.":
      "가져올 인시던트 우선순위입니다. 기본값은 All입니다. 여러 우선순위를 선택할 수 있습니다.",
    "Information about how to create project can be found":
      "프로젝트를 만드는 방법에 대한 정보는 여기에서 확인할 수 있습니다:",
    "Instance Setup":
      "인스턴스 설정",
    "Integrate Cloud Security with your Glean Account to gain comprehensive visibility into any data and posture risk existing in your Glean environment. This integration enables automated scanning of all assets in Glean, including data classification and risk assessment.":
      "Cloud Security를 Glean 계정과 통합하여 Glean 환경에 존재하는 모든 데이터 및 태세 위험을 포괄적으로 파악합니다. 이 통합을 통해 데이터 분류 및 위험 평가를 포함하여 Glean의 모든 자산을 자동으로 스캔할 수 있습니다.",
    "Keep this window open for the duration of the onboarding.":
      "온보딩이 진행되는 동안 이 창을 열어 두세요.",
    "Log in to your Freshservice account as an administrator.":
      "관리자로 Freshservice 계정에 로그인합니다.",
    "Maximum number of incidents per fetch. Default is 100.":
      "가져오기 1회당 최대 인시던트 수입니다. 기본값은 100입니다.",
    "More information about creating the required resources can be found here:":
      "필요한 리소스를 만드는 방법에 대한 자세한 내용은 여기에서 확인할 수 있습니다:",
    "Note that the API key is generated with different permissions. For using the ‘Test’ button to validate the credentials, your API token will need at least the view tickets permission.":
      "API 키는 서로 다른 권한으로 생성된다는 점에 유의하세요. ‘Test’ 버튼을 사용하여 자격 증명을 검증하려면 API 토큰에 최소한 티켓 보기 권한이 필요합니다.",
    "Note: You must provide at least one of these authentication methods (username/password or API key), but not both simultaneously.":
      "참고: 이러한 인증 방법(사용자 이름/비밀번호 또는 API 키) 중 하나 이상을 제공해야 하지만 둘 다 동시에 제공할 수는 없습니다.",
    "On the API Key page, click on the “Generate Key” button.":
      "API Key 페이지에서 “Generate Key” 버튼을 클릭합니다.",
    "Please enable the following APIs:":
      "다음 API를 사용 설정하세요:",
    "Please provide the downloaded file content in the integration":
      "다운로드한 파일의 내용을 통합의",
    "instance parameter.":
      "인스턴스 매개변수에 입력하세요.",
    "Required grant ‘Service Account Key Admin’ role permission":
      "‘Service Account Key Admin’ 역할 권한 부여가 필요합니다",
    "Service Account Private Key file content (JSON)":
      "서비스 계정 비공개 키 파일 내용(JSON)",
    "Service Account Private Key file content (JSON).":
      "서비스 계정 비공개 키 파일 내용(JSON)입니다.",
    "The Fortinet FortiOS operating system provides deep visibility and security across a variety of form factors.":
      "Fortinet FortiOS 운영 체제는 다양한 폼 팩터 전반에서 깊은 가시성과 보안을 제공합니다.",
    "The Glean account is not recognized.":
      "Glean 계정을 인식할 수 없습니다.",
    "The risk of the tickets to fetch. Available only for the 'Change Request' ticket type.":
      "가져올 티켓의 위험도입니다. 'Change Request' 티켓 유형에서만 사용할 수 있습니다.",
    "The status of the tickets to fetch. Since each ticket type has its own unique set of statuses, select only statuses that match the selected ticket type(s).":
      "가져올 티켓의 상태입니다. 각 티켓 유형에는 고유한 상태 집합이 있으므로 선택한 티켓 유형과 일치하는 상태만 선택하세요.",
    "The urgency of the tickets to fetch. Available only for the 'Incident/Service Request' ticket type. The default is All. You can choose multiple urgencies.":
      "가져올 티켓의 긴급도입니다. 'Incident/Service Request' 티켓 유형에서만 사용할 수 있습니다. 기본값은 All입니다. 여러 긴급도를 선택할 수 있습니다.",
    "The URL of your Forcepoint instance, without the port number.":
      "Forcepoint 인스턴스의 URL입니다(포트 번호 제외).",
    "There are no permissions required for making this API call.":
      "이 API 호출에는 필요한 권한이 없습니다.",
    "Ticket Impact":
      "티켓 영향",
    "Ticket Priority":
      "티켓 우선순위",
    "Ticket Risk":
      "티켓 위험도",
    "Ticket Status":
      "티켓 상태",
    "Ticket type to fetch as incidents.":
      "인시던트로 가져올 티켓 유형입니다.",
    "Ticket Urgency":
      "티켓 긴급도",
    "To authenticate with FortiGate, you can use one of two methods:":
      "FortiGate에서 인증하려면 다음 두 가지 방법 중 하나를 사용할 수 있습니다:",
    "To configure an instance of the integration in Cortex, you need to supply the Service Account Private Key file content.":
      "Cortex에서 통합 인스턴스를 구성하려면 서비스 계정 비공개 키 파일 내용을 제공해야 합니다.",
    "To set up an instance, add the following.":
      "인스턴스를 설정하려면 다음을 추가합니다.",
    "To successfully onboard the account, try again or contact support.":
      "계정을 성공적으로 온보딩하려면 다시 시도하거나 지원팀에 문의하세요.",
    "Under Service account details, type a name, ID, and description for the service account, then click":
      "Service account details에서 서비스 계정의 이름, ID, 설명을 입력한 다음 클릭합니다:",
    "Username/Password Authentication":
      "사용자 이름/비밀번호 인증",
    "Verifying connection...":
      "연결을 확인하는 중...",
    "You can grant the permissions by predefined roles or by creating a custom role.":
      "사전 정의된 역할을 사용하거나 사용자 지정 역할을 만들어 권한을 부여할 수 있습니다.",
    "You have to grant the required permissions to the created Service Account in order to use in the integration command.":
      "통합 명령에서 사용하려면 생성한 서비스 계정에 필요한 권한을 부여해야 합니다.",
    "Your credentials (username) and password for logging in to your Forcepoint instance.":
      "Forcepoint 인스턴스에 로그인하기 위한 자격 증명(사용자 이름)과 비밀번호입니다.",
    "Your new public/private key pair is generated and downloaded to your machine; it serves as the only copy of the private key. You are responsible for storing it securely. If you lose this key pair, you will need to generate a new one.":
      "새 공개/비공개 키 쌍이 생성되어 사용 중인 컴퓨터에 다운로드됩니다. 이것이 비공개 키의 유일한 사본입니다. 안전하게 보관할 책임은 사용자에게 있습니다. 이 키 쌍을 분실하면 새로 생성해야 합니다.",

    // --- Batch: Generic Export Indicators Service / Generic SQL / MCP authentication docs and integration card descriptions (08:43 export) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    "- Bypass SSL certificate verification (Default:":
      "- SSL 인증서 검증을 건너뜁니다(기본값:",
    "- Check this box if API calls to this endpoint require authentication (":
      "- 이 엔드포인트에 대한 API 호출에 인증이 필요한 경우 이 확인란을 선택합니다(",
    "- Check this box if API key or authentication credentials are provided as part of the HTTP header (":
      "- API 키 또는 인증 자격 증명이 HTTP 헤더의 일부로 제공되는 경우 이 확인란을 선택합니다(",
    "- For a header-based call, this would appear in the header as 'X-PAN-KEY': KEY_HERE":
      "- 헤더 기반 호출의 경우 헤더에 'X-PAN-KEY': KEY_HERE로 표시됩니다",
    "- For a parameterized call, this would be appended to the URL as &X-PAN-KEY=KEY_HERE -":
      "- 매개변수화된 호출의 경우 URL에 &X-PAN-KEY=KEY_HERE로 추가됩니다 -",
    "- Integration instance name":
      "- 통합 인스턴스 이름",
    "- Leave blank when using an API key":
      "- API 키를 사용하는 경우 비워 둡니다",
    "- Leverage the proxy settings configured on the XSOAR server":
      "- XSOAR 서버에 구성된 프록시 설정을 사용합니다",
    "- The base server URL for the API endpoint without the trailing slash (":
      "- 후행 슬래시가 없는 API 엔드포인트의 기본 서버 URL(",
    "- The password (when using HTTP basic authentication) or API key to use for API calls with this integration instance":
      "- 이 통합 인스턴스의 API 호출에 사용할 비밀번호(HTTP 기본 인증 사용 시) 또는 API 키",
    "- The value to use to identify the API key field as part of the HTTP header or API Key parameter in the URL":
      "- API 키 필드를 HTTP 헤더 또는 URL의 API 키 매개변수의 일부로 식별하는 데 사용할 값",
    "- Username for HTTP basic authentication.":
      "- HTTP 기본 인증의 사용자 이름입니다.",
    "- When fetching by either ID or timestamp.":
      "- ID 또는 타임스탬프로 가져오는 경우.",
    "- When the ID is unique but not necessarily ascending and timestamp is not unique.":
      "- ID는 고유하지만 반드시 오름차순은 아니고 타임스탬프는 고유하지 않은 경우.",
    ": Add custom headers to be sent with each API request. Enter each header on a new line in the format:":
      ": 각 API 요청과 함께 전송할 사용자 지정 헤더를 추가합니다. 각 헤더를 다음 형식으로 새 줄에 입력합니다:",
    ": If you are running the integration via an on-prem engine you must set the username and password fields in the integration instance. Otherwise, for normal usage, if you have set a default password in your tenant, you do not have to set a username and password in the integration instance":
      ": 온프레미스 엔진을 통해 통합을 실행하는 경우 통합 인스턴스에서 사용자 이름 및 비밀번호 필드를 설정해야 합니다. 그렇지 않은 일반적인 사용에서는 테넌트에 기본 비밀번호를 설정한 경우 통합 인스턴스에서 사용자 이름과 비밀번호를 설정할 필요가 없습니다",
    ": No authentication is used.":
      ": 인증을 사용하지 않습니다.",
    ": Provide the API Key to access the service REST API.":
      ": 서비스 REST API에 액세스하기 위한 API 키를 입력합니다.",
    ": Provide the API Token or API Key to access the service REST API.":
      ": 서비스 REST API에 액세스하기 위한 API 토큰 또는 API 키를 입력합니다.",
    ": Provide the Bearer Token to access the service REST API.":
      ": 서비스 REST API에 액세스하기 위한 Bearer 토큰을 입력합니다.",
    ": Provide the raw token to access the service REST API.":
      ": 서비스 REST API에 액세스하기 위한 raw 토큰을 입력합니다.",
    ": Provide the username and password for basic authentication.":
      ": 기본 인증을 위한 사용자 이름과 비밀번호를 입력합니다.",
    ": Required to obtain the access token. To get this code, run the":
      ": 액세스 토큰을 가져오는 데 필요합니다. 이 코드를 가져오려면 다음을 실행합니다:",
    ": Select the authentication method to use for connecting to the MCP server.":
      ": MCP 서버에 연결할 때 사용할 인증 방법을 선택합니다.",
    ": Select this option to trust any certificate. This is not recommended for production environments.":
      ": 이 옵션을 선택하면 모든 인증서를 신뢰합니다. 프로덕션 환경에서는 권장되지 않습니다.",
    ": Space-separated permission identifiers requested from the authorization server.":
      ": 권한 부여 서버에 요청하는 공백으로 구분된 권한 식별자입니다.",
    ": The base URL of the MCP server. This is a required parameter for all authentication types.":
      ": MCP 서버의 기본 URL입니다. 모든 인증 유형에 필요한 매개변수입니다.",
    ": The Client ID for your application.":
      ": 애플리케이션의 클라이언트 ID입니다.",
    ": The Client Secret for your application.":
      ": 애플리케이션의 클라이언트 시크릿입니다.",
    ": The External Dynamic List is not accessible via web browsers and you will receive an unauthorized error if accessing the External Dynamic List via a browser.":
      ": External Dynamic List는 웹 브라우저를 통해 액세스할 수 없으며, 브라우저를 통해 External Dynamic List에 액세스하면 승인되지 않음 오류가 표시됩니다.",
    ": The URI to which the authorization server redirects the user-agent after granting authorization. This is typically used in OAuth 2.0 Authorization Code flow. Default:":
      ": 권한 부여 후 권한 부여 서버가 사용자 에이전트를 리디렉션하는 URI입니다. 일반적으로 OAuth 2.0 Authorization Code 흐름에서 사용됩니다. 기본값:",
    ": The URL for the OAuth 2.0 authorization endpoint. If not provided, the default will be the origin of the":
      ": OAuth 2.0 권한 부여 엔드포인트의 URL입니다. 지정하지 않으면 기본값은 다음의 오리진입니다:",
    ": The URL for the OAuth 2.0 token endpoint. If not provided, the default will be the origin of the":
      ": OAuth 2.0 토큰 엔드포인트의 URL입니다. 지정하지 않으면 기본값은 다음의 오리진입니다:",
    ": Uses a Bearer token for authentication.":
      ": 인증에 Bearer 토큰을 사용합니다.",
    ": Uses a raw token for authentication.":
      ": 인증에 raw 토큰을 사용합니다.",
    ": Uses a single API token or key for authentication.":
      ": 인증에 단일 API 토큰 또는 키를 사용합니다.",
    ": Uses a username and password for authentication.":
      ": 인증에 사용자 이름과 비밀번호를 사용합니다.",
    ": Uses an API key for authentication.":
      ": 인증에 API 키를 사용합니다.",
    ": Uses OAuth 2.0 Dynamic Client Registration.":
      ": OAuth 2.0 Dynamic Client Registration을 사용합니다.",
    ": Uses the OAuth 2.0 Authorization Code flow for authentication.":
      ": 인증에 OAuth 2.0 Authorization Code 흐름을 사용합니다.",
    ": Uses the OAuth 2.0 Client Credentials flow for authentication.":
      ": 인증에 OAuth 2.0 Client Credentials 흐름을 사용합니다.",
    "\"No known finding\" from any command means nothing was flagged in the sources":
      "“No known finding”은 어떤 명령에서든 조회된 소스에서 아무것도 플래그되지 않았음을 의미합니다",
    "(Optional) limit :limit (It’s possible if the database supports it)":
      "(선택 사항) limit :limit(데이터베이스에서 지원하는 경우 가능)",
    "* 0 - Do not collapse.":
      "* 0 - 축소하지 않음.",
    "* 1 - Collapse to ranges.":
      "* 1 - 범위로 축소합니다.",
    "* 2 - Collapse to CIDRs.":
      "* 2 - CIDR로 축소합니다.",
    "A search engine used for searching Internet-connected devices.":
      "인터넷에 연결된 디바이스를 검색하는 데 사용되는 검색 엔진입니다.",
    "Access the Generic Export Indicators Service by Instance Name (HTTPS)":
      "인스턴스 이름으로 Generic Export Indicators Service에 액세스(HTTPS)",
    "Add comment to empty list":
      "빈 목록에 주석 추가",
    "Add custom headers to be sent with each API request.":
      "각 API 요청과 함께 전송할 사용자 지정 헤더를 추가합니다.",
    "Add custom headers to be sent with each API request. Enter each header on a new line in the format: HeaderName: HeaderValue.":
      "각 API 요청과 함께 전송할 사용자 지정 헤더를 추가합니다. 각 헤더를 HeaderName: HeaderValue 형식으로 새 줄에 입력합니다.",
    "Add HSTS header":
      "HSTS 헤더 추가",
    "Advanced Parameters":
      "고급 매개변수",
    "Advanced: Use Legacy Queries":
      "고급: 레거시 쿼리 사용",
    "Agentless, Workload-Deep, Context-Aware Security and Compliance for AWS, Azure, and GCP.":
      "AWS, Azure, GCP를 위한 에이전트리스, 워크로드 심층, 컨텍스트 인식 보안 및 규정 준수.",
    "Alert and notify users using PagerDuty.":
      "PagerDuty를 사용하여 사용자에게 알림을 보냅니다.",
    "Analyse retro hunts, read live hunt notifications and download files from VirusTotal.":
      "VirusTotal에서 레트로 헌트를 분석하고, 라이브 헌트 알림을 읽고, 파일을 다운로드합니다.",
    "Analyzes suspicious hashes, URLs, domains, and IP addresses.":
      "의심스러운 해시, URL, 도메인, IP 주소를 분석합니다.",
    "API call is authenticated":
      "API 호출 인증됨",
    "API call is authenticated (Default: False)":
      "API 호출 인증됨(기본값: False)",
    "API key supplied in header":
      "API 키를 헤더에 제공",
    "API Key supplied in header":
      "API 키를 헤더에 제공",
    "API Token / API Key":
      "API 토큰 / API 키",
    "Append string to list":
      "목록 끝에 문자열 추가",
    "argument":
      "인수",
    "Authentication Header":
      "인증 헤더",
    "Authorization Endpoint":
      "권한 부여 엔드포인트",
    "Base API Endpoint URL (https:// with no trailing slash)":
      "기본 API 엔드포인트 URL(후행 슬래시 없는 https://)",
    "Base Server URL":
      "기본 서버 URL",
    "Bind Variables":
      "바인드 변수",
    "By default, the integration does not pool database connections. Thus, a connection is created and closed for each command run by the integration. When connection pooling is enabled, each Docker container will maintain a single connection open for the time specified in the the":
      "기본적으로 통합은 데이터베이스 연결을 풀링하지 않습니다. 따라서 통합이 실행하는 각 명령마다 연결이 생성되고 닫힙니다. 연결 풀링을 사용하면 각 Docker 컨테이너는 다음에 지정된 시간 동안 단일 연결을 열어 둡니다:",
    "CIDRs with a lower network prefix bits number are not included. For example - if the number is 8, then 0.0.0.0/2 is excluded from the list.":
      "네트워크 접두사 비트 수가 더 낮은 CIDR은 포함되지 않습니다. 예를 들어 숫자가 8이면 0.0.0.0/2는 목록에서 제외됩니다.",
    "Close an issue":
      "이슈 닫기",
    "Cloud based Security Network DVR.":
      "클라우드 기반 보안 네트워크 DVR입니다.",
    "Cloud-based service for logs & metrics management.":
      "로그 및 메트릭 관리를 위한 클라우드 기반 서비스입니다.",
    "Collect information and take action on remote endpoints in real time with VMware Carbon Black EDR (Live Response API) (formerly known as Carbon Black Enterprise Live Response).":
      "VMware Carbon Black EDR(Live Response API)(이전 명칭 Carbon Black Enterprise Live Response)를 사용하여 원격 엔드포인트의 정보를 실시간으로 수집하고 조치를 취합니다.",
    "command and follow its instructions.":
      "명령을 실행하고 안내에 따릅니다.",
    "command for the first time to initialize the export process.":
      "명령을 처음 실행하여 내보내기 프로세스를 초기화합니다.",
    "Connection Arguments":
      "연결 인수",
    "Connection Arguments (ex: arg1=val1&arg2=val2)":
      "연결 인수(예: arg1=val1&arg2=val2)",
    "Connection Pool Time to Live":
      "연결 풀 수명",
    "Connection Pool Time to Live (seconds)":
      "연결 풀 수명(초)",
    "Connection Pooling":
      "연결 풀링",
    "Converts URLs, PDF files, and emails to an image file or PDF file.":
      "URL, PDF 파일, 이메일을 이미지 파일 또는 PDF 파일로 변환합니다.",
    "Custom headers":
      "사용자 지정 헤더",
    "Database host":
      "데이터베이스 호스트",
    "Default it set to false (key is provided as a parameter). Unchecking this will pass the API key as a call header":
      "기본값은 false입니다(키가 매개변수로 제공됨). 선택을 해제하면 API 키가 호출 헤더로 전달됩니다",
    "Default ports":
      "기본 포트",
    "Deprecated - We recommend using the Remote Access v2 integration instead.":
      "사용 중단되었습니다. 대신 Remote Access v2 통합을 사용하는 것이 좋습니다.",
    "Deprecated. Use Analyst1 integration instead.":
      "사용 중단되었습니다. 대신 Analyst1 통합을 사용하세요.",
    "Deprecated. Use Jamf v2 instead. Jamf device management. Please note, this integration is currently only compatible with the Jamf V1 API.":
      "사용 중단되었습니다. 대신 Jamf v2을(를) 사용하세요. Jamf 디바이스 관리입니다. 이 통합은 현재 Jamf V1 API와만 호환됩니다.",
    "Deprecated. Use O365 Defender SafeLinks instead. Enables URL scanning, rewriting inbound email messages in the mail flow, time-of-click URL verification, and links in email messages and other locations.":
      "사용 중단되었습니다. 대신 O365 Defender SafeLinks을(를) 사용하세요. URL 검사, 메일 흐름에서 수신 이메일 메시지 재작성, 클릭 시 URL 검증, 이메일 메시지 및 기타 위치의 링크 보호를 지원합니다.",
    "Deprecated. Use Proofpoint Protection Server V2 instead.":
      "사용 중단되었습니다. 대신 Proofpoint Protection Server V2을(를) 사용하세요.",
    "Deprecated. Use SlackV3 instead.":
      "사용 중단되었습니다. 대신 SlackV3을(를) 사용하세요.",
    "Deprecated. Use The Generic SQL integration instead.":
      "사용 중단되었습니다. 대신 The Generic SQL 통합을 사용하세요.",
    "Deprecated. Use the Microsoft Graph Security integration instead. This integration allows you to manage and interact with Microsoft security and compliance content search.":
      "사용 중단되었습니다. 대신 Microsoft Graph Security 통합을 사용하세요. 이 통합을 사용하면 Microsoft 보안 및 규정 준수 콘텐츠 검색을 관리하고 상호작용할 수 있습니다.",
    "Deprecated. Use the Okta v2 integration instead.":
      "사용 중단되었습니다. 대신 Okta v2 통합을 사용하세요.",
    "Deprecated. Use the PagerDuty v2 integration instead.":
      "사용 중단되었습니다. 대신 PagerDuty v2 통합을 사용하세요.",
    "Deprecated. Use the Palo Alto Networks AutoFocus v2 integration instead. Palo Alto Networks AutoFocus enables you to distinguish the most important threats from everyday commodity attacks.":
      "사용 중단되었습니다. 대신 Palo Alto Networks AutoFocus v2 통합을 사용하세요. Palo Alto Networks AutoFocus를 사용하면 가장 중요한 위협을 일상적인 범용 공격과 구분할 수 있습니다.",
    "Deprecated. Use the Prisma Cloud v2 integration instead.":
      "사용 중단되었습니다. 대신 Prisma Cloud v2 통합을 사용하세요.",
    "Deprecated. Use the Rapid7 Nexpose integration instead.":
      "사용 중단되었습니다. 대신 Rapid7 Nexpose 통합을 사용하세요.",
    "Deprecated. Use the Server Message Block (SMB) v2 integration instead.":
      "사용 중단되었습니다. 대신 Server Message Block (SMB) v2 통합을 사용하세요.",
    "Deprecated. Use the ServiceNow v2 integration instead.":
      "사용 중단되었습니다. 대신 ServiceNow v2 통합을 사용하세요.",
    "Deprecated. Use the Slack v2 integration instead.":
      "사용 중단되었습니다. 대신 Slack v2 통합을 사용하세요.",
    "Deprecated. Use the Unit 42 Intelligence integration instead.":
      "사용 중단되었습니다. 대신 Unit 42 Intelligence 통합을 사용하세요.",
    "Deprecated. Use the Zendesk v2 integration instead.":
      "사용 중단되었습니다. 대신 Zendesk v2 통합을 사용하세요.",
    "Deprecated. Use VirusTotalV3 integration instead.":
      "사용 중단되었습니다. 대신 VirusTotalV3 통합을 사용하세요.",
    "Deprecated. Use VMware Carbon Black EDR v2 instead.":
      "사용 중단되었습니다. 대신 VMware Carbon Black EDR v2을(를) 사용하세요.",
    "Discover and remediate AI application vulnerabilities with Palo Alto Networks Prisma AIRS AI Red Teaming: targets, adapters, scans, attack reports, prompt sets, and custom attacks.":
      "Palo Alto Networks Prisma AIRS AI Red Teaming으로 AI 애플리케이션 취약성을 발견하고 修복합니다: 타겟, 어댑터, 스캔, 공격 보고서, 프롬프트 세트, 사용자 지정 공격.",
    "Does this API call require authentication (Basic, API key, etc.)?":
      "이 API 호출에 인증(기본, API 키 등)이 필요합니까?",
    "Dynamically retrieve and add to allow list IPs Prisma Access uses to egress traffic to the internet and SaaS apps.":
      "Prisma Access가 인터넷 및 SaaS 앱으로 트래픽을 송신하는 데 사용하는 IP를 동적으로 가져와 허용 목록에 추가합니다.",
    "e.g., X-PAN-KEY: API_KEY_HERE (X-PAN-KEY is the value specified in this field)":
      "예: X-PAN-KEY: API_KEY_HERE(X-PAN-KEY는 이 필드에 지정된 값입니다)",
    "Enabling this prevents automatic list refresh.":
      "이 옵션을 사용하면 목록이 자동으로 새로 고쳐지지 않습니다.",
    "Enforce ASCII only":
      "ASCII만 적용",
    "Enrich indicators with Unit 42 threat intelligence context including verdicts, threat object associations, and relationships.":
      "판정, 위협 객체 연결, 관계를 포함한 Unit 42 위협 인텔리전스 컨텍스트로 지표를 보강합니다.",
    "Enter each header on a new line in the format: HeaderName: HeaderValue.":
      "각 헤더를 HeaderName: HeaderValue 형식으로 새 줄에 입력합니다.",
    "Enter the exact column's incident name (if empty - it's the Fetch Column).":
      "인시던트 이름에 사용할 열의 정확한 이름입니다(비어 있으면 가져오기 열이 사용됩니다).",
    "Enter the exact column's name to fetch (ID column or timestamp column).":
      "가져올 열의 정확한 이름입니다(ID 열 또는 타임스탬프 열).",
    "Example":
      "예시",
    "Exclude top level domainGlobs":
      "최상위 도메인 Glob 제외",
    "Exported Fields":
      "내보낼 필드",
    "Failover time should be about 1 minute plus the container startup time.":
      "페일오버 시간은 약 1분에 컨테이너 시작 시간을 더한 시간입니다.",
    "Fetch Column":
      "가져오기 열",
    "Fetch events query":
      "이벤트 가져오기 쿼리",
    "Fetch Incidents query Notes":
      "인시던트 가져오기 쿼리 참고 사항",
    "Fetch Limit (Default / Max - 50, Recommended less than 50)":
      "가져오기 한도(기본값/최대 - 50, 50 미만 권장)",
    "Fetch parameters, ts (timestamp) or id and l (limit), will be added by the fetch mechanism.":
      "가져오기 매개변수인 ts(타임스탬프) 또는 id와 l(한도)은 가져오기 메커니즘에 의해 추가됩니다.",
    "Fetch parameters, ts (timestamp) or ID and l (limit), will be added by the fetch mechanism.":
      "가져오기 매개변수인 ts(타임스탬프) 또는 ID와 l(한도)은 가져오기 메커니즘에 의해 추가됩니다.",
    "Fetches and manages incidents from iZOOlogic, enabling automated ingestion, incident creation, and advanced filtering for brand protection and threat management.":
      "iZOOlogic에서 인시던트를 가져와 관리하며, 브랜드 보호 및 위협 관리를 위한 자동 수집, 인시던트 생성, 고급 필터링을 지원합니다.",
    "Files and Directories management with an SMB server. Supports SMB2 and SMB3 protocols.":
      "SMB 서버의 파일 및 디렉터리 관리입니다. SMB2 및 SMB3 프로토콜을 지원합니다.",
    "Fill in ‘Fetch Column’ with your exact timestamp column name, and fill in the ‘ID column name’ with your exact ID column name.":
      "‘Fetch Column’에 타임스탬프 열의 정확한 이름을, ‘ID column name’에 ID 열의 정확한 이름을 입력합니다.",
    "Fill only the ‘Fetch Column’ with the exact column name to fetch (ID column or timestamp column).":
      "‘Fetch Column’에만 가져올 열의 정확한 이름(ID 열 또는 타임스탬프 열)을 입력합니다.",
    "First fetch interval (in days)":
      "첫 번째 가져오기 간격(일)",
    "First fetch timestamp or First fetch ID":
      "첫 번째 가져오기 타임스탬프 또는 첫 번째 가져오기 ID",
    "For example to test via curl with an instance with instance name:":
      "curl로 인스턴스 이름이 있는 인스턴스를 테스트하는 예시:",
    "For example, if `Server URL` is `https://example.com/mcp`, the default `Authorization Endpoint` will be `https://example.com/oauth2/authorize`.":
      "예를 들어 `Server URL`이 `https://example.com/mcp`이면 기본 `Authorization Endpoint`는 `https://example.com/oauth2/authorize`가 됩니다.",
    "For example, if `Server URL` is `https://example.com/mcp`, the default `Token Endpoint` will be `https://example.com/oauth2/token`.":
      "예를 들어 `Server URL`이 `https://example.com/mcp`이면 기본 `Token Endpoint`는 `https://example.com/oauth2/token`이 됩니다.",
    "For use with JSON and CSV formats - select specific XSOAR fields to export (comma separated list). If given the value 'all' - all XSOAR fields are exported (in large quantities this can cause a performance issue). If left empty - only value and type are exported.":
      "JSON 및 CSV 형식에서 사용합니다. 내보낼 특정 XSOAR 필드를 선택합니다(쉼표로 구분된 목록). 값을 'all'로 지정하면 모든 XSOAR 필드가 내보내집니다(대량인 경우 성능 문제가 발생할 수 있음). 비워 두면 값과 유형만 내보내집니다.",
    "For use with McAfee Web Gateway format - set the indicator list type.":
      "McAfee Web Gateway 형식에서 사용합니다. 지표 목록 유형을 설정합니다.",
    "For use with PAN-OS (text) format - collapse method for IPs (none, range, CIDR).":
      "PAN-OS(텍스트) 형식에서 사용합니다. IP 축소 방법(none, range, CIDR)입니다.",
    "For use with PAN-OS (text) format - if selected, any URL entry that is not compliant with PAN-OS URL format is dropped instead of rewritten.":
      "PAN-OS(텍스트) 형식에서 사용합니다. 선택하면 PAN-OS URL 형식을 준수하지 않는 URL 항목은 다시 작성되지 않고 삭제됩니다.",
    "For use with PAN-OS (text) format - String to add to beginning of published list. Supports newline characters (\\n).":
      "PAN-OS(텍스트) 형식에서 사용합니다. 게시되는 목록의 시작 부분에 추가할 문자열입니다. 줄바꿈 문자(\\n)를 지원합니다.",
    "For use with PAN-OS (text) format - String to add to end of published list. Supports newline characters (\\n).":
      "PAN-OS(텍스트) 형식에서 사용합니다. 게시되는 목록의 끝에 추가할 문자열입니다. 줄바꿈 문자(\\n)를 지원합니다.",
    "For use with Symantec ProxySG format - set the categories that should be listed in the output (comma separated list). If not set, lists all existing categories.":
      "Symantec ProxySG 형식에서 사용합니다. 출력에 나열할 카테고리를 설정합니다(쉼표로 구분된 목록). 설정하지 않으면 기존의 모든 카테고리가 나열됩니다.",
    "For use with Symantec ProxySG format - set the default category for the output.":
      "Symantec ProxySG 형식에서 사용합니다. 출력의 기본 카테고리를 설정합니다.",
    "format. If set, will ignore URLs which are not compliant with PAN-OS URL format instead of being re-written.":
      "형식. 설정하면 PAN-OS URL 형식을 준수하지 않는 URL을 다시 작성하지 않고 무시합니다.",
    "format. The categories which will be exported. Indicators not in these categories will be classified as the default category.":
      "형식. 내보낼 카테고리입니다. 이 카테고리에 속하지 않는 지표는 기본 카테고리로 분류됩니다.",
    "format. The default category for the exported indicators.":
      "형식. 내보낸 지표의 기본 카테고리입니다.",
    "format. The type indicated on the top of the exported list. Supports: string, applcontrol, dimension, category, ip, mediatype, number and regex.":
      "형식. 내보낸 목록의 맨 위에 표시되는 유형입니다. 지원: string, applcontrol, dimension, category, ip, mediatype, number 및 regex.",
    "format. Whether to collapse IPs.":
      "형식. IP를 축소할지 여부입니다.",
    "Forward requests to long-running integrations":
      "장기 실행 통합으로 요청 전달",
    "Fully automated malware dynamic analysis sandboxing.":
      "완전 자동화된 악성코드 동적 분석 샌드박싱입니다.",
    "Generates a Palo Alto Networks WildFire PDF report. For internal use with the TIM Sample Analysis feature.":
      "Palo Alto Networks WildFire PDF 보고서를 생성합니다. TIM 샘플 분석 기능에서 내부적으로 사용합니다.",
    "Generic MCP Integration Description":
      "Generic MCP 통합 설명",
    "GenericAPICall Integration":
      "GenericAPICall 통합",
    "Get actionable threat analysis and intelligence from HPE’s cloud-based, standards-compliant sharing platform":
      "HPE의 클라우드 기반 표준 준수 공유 플랫폼에서 실행 가능한 위협 분석 및 인텔리전스를 확보합니다",
    "Get the download count for each release in a repository":
      "리포지토리의 각 릴리스에 대한 다운로드 수 가져오기",
    "GitHub app installation ID":
      "GitHub 앱 설치 ID",
    "GitHub app integration ID":
      "GitHub 앱 통합 ID",
    "Header example":
      "헤더 예시",
    "How often to refresh the list (e.g., less than 1 minute, 5 minutes, 12 hours, 7 days, 3 months, 1 year). For performance reasons, we do not recommend setting this value at less than 1 minute.":
      "목록을 새로 고치는 빈도입니다(예: 1분 미만, 5 minutes, 12 hours, 7 days, 3 months, 1 year). 성능상의 이유로 이 값을 1분 미만으로 설정하는 것은 권장하지 않습니다.",
    "ID Column name - in case of fetching by 'ID and timestamp'":
      "ID 열 이름 - 'ID and timestamp'로 가져오는 경우",
    "If selected, CSV format appears in a textual webpage instead of initiating a file download.":
      "선택하면 CSV 형식이 파일 다운로드를 시작하는 대신 텍스트 웹 페이지로 표시됩니다.",
    "If selected, it will force the list to contain only ASCII chars (non-ASCII URLs will be dropped).":
      "선택하면 목록에 ASCII 문자만 포함되도록 강제합니다(ASCII가 아닌 URL은 삭제됩니다).",
    "If selected, ports in URLs are removed. For example, 'www.example.com:9999/path' becomes 'www.example.com/path'.":
      "선택하면 URL에서 포트가 제거됩니다. 예를 들어 'www.example.com:9999/path'는 'www.example.com/path'가 됩니다.",
    "If selected, strips the protocol from URLs (http/https).":
      "선택하면 URL에서 프로토콜(http/https)을 제거합니다.",
    "If selected, the comment \"# Empty list\" is added to an empty list.":
      "선택하면 빈 목록에 주석 \"# Empty list\"가 추가됩니다.",
    "If selected, URLs are truncated to no more than 254 characters.":
      "선택하면 URL이 254자 이하로 잘립니다.",
    "If set, will strip protocols off URLs.":
      "설정하면 URL에서 프로토콜을 제거합니다.",
    "If set. will strip ports off URLs, otherwise will ignore URLs with ports.":
      "설정하면 URL에서 포트를 제거합니다. 그렇지 않으면 포트가 포함된 URL을 무시합니다.",
    "If the app server running the container fails, the container should restart on a different app server.":
      "컨테이너를 실행하는 앱 서버에 장애가 발생하면 컨테이너가 다른 앱 서버에서 다시 시작됩니다.",
    "If the port value is empty, a default port will be selected according to the database type.":
      "포트 값이 비어 있으면 데이터베이스 유형에 따라 기본 포트가 선택됩니다.",
    "If you have several Generic Export Indicators Service integration instances, make sure to use":
      "Generic Export Indicators Service 통합 인스턴스가 여러 개인 경우 반드시 다음을 사용하세요:",
    "Important Notes:":
      "중요 참고 사항:",
    "In “route” listen mode, a request received by any of the app servers will be redirected to the one currently running the NGINX container.":
      "“route” 수신 대기 모드에서는 어떤 앱 서버가 받은 요청이든 현재 NGINX 컨테이너를 실행 중인 서버로 리디렉션됩니다.",
    "Incident Name":
      "인시던트 이름",
    "Indicator Query":
      "지표 쿼리",
    "inline argument, the number of exported indicators is limited to 100,000 for performance reasons. To export more than 100,000 indicators, create a new integration instance with the desired Indicator Query and List Size.":
      "인라인 인수에서는 성능상의 이유로 내보내는 지표 수가 100,000개로 제한됩니다. 100,000개가 넘는 지표를 내보내려면 원하는 Indicator Query와 List Size로 새 통합 인스턴스를 만듭니다.",
    "inline argument, use separate EDL instances (one per query) and set a default query for each to improve performance.":
      "인라인 인수에서는 성능을 개선하기 위해 쿼리마다 별도의 EDL 인스턴스(쿼리당 하나)를 사용하고 각각에 기본 쿼리를 설정합니다.",
    "Integrate with Okta's Identity Access Management service to execute CRUD operations to employee lifecycle processes.":
      "Okta의 Identity Access Management 서비스와 통합하여 직원 라이프사이클 프로세스에 대한 CRUD 작업을 실행합니다.",
    "Integrate with Oracle's services to execute CRUD and Group operations for employee lifecycle processes.":
      "Oracle 서비스와 통합하여 직원 라이프사이클 프로세스에 대한 CRUD 및 그룹 작업을 실행합니다.",
    "Integrate with Palo Alto Networks Prisma AIRS for AI security capabilities including runtime scanning, red teaming, AI supply chain security, and DLP configuration.":
      "Palo Alto Networks Prisma AIRS와 통합하여 런타임 스캔, 레드 팀 운영, AI 공급망 보안, DLP 구성 등의 AI 보안 기능을 사용합니다.",
    "Integrate with Prisma Access to monitor the status of the Service, alert and take actions.":
      "Prisma Access와 통합하여 서비스 상태를 모니터링하고 알림 및 조치를 수행합니다.",
    "Integrate with Salesforce Fusion Identity Access Management service to execute CRUD (create, read, update, and delete) operations for employee lifecycle processes.":
      "Salesforce Fusion Identity Access Management 서비스와 통합하여 직원 라이프사이클 프로세스에 대한 CRUD(생성, 읽기, 업데이트, 삭제) 작업을 실행합니다.",
    "Integrate with SAP's services to execute CRUD operations for employee lifecycle processes.":
      "SAP 서비스와 통합하여 직원 라이프사이클 프로세스에 대한 CRUD 작업을 실행합니다.",
    "Integrate with ServiceNow's services to execute CRUD operations for employee lifecycle processes.":
      "ServiceNow 서비스와 통합하여 직원 라이프사이클 프로세스에 대한 CRUD 작업을 실행합니다.",
    "Integrate with Slack's services to execute CRUD operations for employee lifecycle processes.":
      "Slack 서비스와 통합하여 직원 라이프사이클 프로세스에 대한 CRUD 작업을 실행합니다.",
    "Integrates with the PingOne Management API to unlock, create, delete and update users.":
      "PingOne Management API와 통합하여 사용자 잠금 해제, 생성, 삭제 및 업데이트를 수행합니다.",
    "Integration for sending notifications to a Microsoft Teams channel via a workflow of type `Post to a channel when a webhook request is received`.":
      "`Post to a channel when a webhook request is received` 유형의 워크플로를 통해 Microsoft Teams 채널로 알림을 보내는 통합입니다.",
    "Integration with Okta's cloud-based identity management service.":
      "Okta의 클라우드 기반 ID 관리 서비스와의 통합입니다.",
    "Integration with Threatmon for vulnerability threat intelligence.":
      "취약성 위협 인텔리전스를 위한 Threatmon과의 통합입니다.",
    "Internal page size used when querying Cortex for the indicators. Value can be up to 10,000 due to performance limitations.":
      "Cortex에서 지표를 쿼리할 때 사용하는 내부 페이지 크기입니다. 성능 제한으로 인해 값은 최대 10,000까지 가능합니다.",
    "IP Collapsing":
      "IP 축소",
    "Is the API key used for each call provided in the header or as a parameter?":
      "각 호출에 사용되는 API 키가 헤더로 제공됩니까, 매개변수로 제공됩니까?",
    "Is the API key used for each call provided in the header or as a parameter? Default it set to false (key is provided as a parameter). Unchecking this will pass the API key as a call header":
      "각 호출에 사용되는 API 키가 헤더로 제공됩니까, 매개변수로 제공됩니까? 기본값은 false입니다(키가 매개변수로 제공됨). 선택을 해제하면 API 키가 호출 헤더로 전달됩니다",
    "IT service management.":
      "IT 서비스 관리입니다.",
    "List all issues":
      "모든 이슈 나열",
    "List Size":
      "목록 크기",
    "Listen Port":
      "수신 대기 포트",
    "Lists all of the security vulnerabilities for various products (OS,Applications) etc).":
      "다양한 제품(OS, 애플리케이션) 등의 모든 보안 취약성을 나열합니다.",
    "Make sure to add as parameters the fetch parameter and the limit.":
      "매개변수로 가져오기 매개변수와 한도를 반드시 추가하세요.",
    "Make sure to add as parameters the fetch parameter.":
      "매개변수로 가져오기 매개변수를 반드시 추가하세요.",
    "Make sure you run the":
      "다음 명령을 반드시 실행하세요:",
    "Malware analysis sandboxing.":
      "악성코드 분석 샌드박싱입니다.",
    "Manage Palo Alto Networks Firewall and Panorama. Use this pack to manage Prisma Access through Panorama. For more information, see the Panorama documentation.":
      "Palo Alto Networks Firewall 및 Panorama를 관리합니다. 이 팩을 사용하여 Panorama를 통해 Prisma Access를 관리합니다. 자세한 내용은 Panorama 설명서를 참조하세요.",
    "Manage teams and members in Microsoft Teams.":
      "Microsoft Teams의 팀과 멤버를 관리합니다.",
    "Maximum number of items in the list.":
      "목록의 최대 항목 수입니다.",
    "Maximum Size of CIDR Block (by mask bit)":
      "CIDR 블록의 최대 크기(마스크 비트 기준)",
    "McAfee Gateway: Indicator List Type":
      "McAfee Gateway: 지표 목록 유형",
    "Microsoft Graph lets your app get authorized access to a user's Outlook mail data in a personal or organization account.":
      "Microsoft Graph를 사용하면 앱이 개인 또는 조직 계정에 있는 사용자의 Outlook 메일 데이터에 대한 승인된 액세스 권한을 얻을 수 있습니다.",
    "Microsoft Graph lets your app get authorized access to a user's Teams app in a personal or organization account.":
      "Microsoft Graph를 사용하면 앱이 개인 또는 조직 계정에 있는 사용자의 Teams 앱에 대한 승인된 액세스 권한을 얻을 수 있습니다.",
    "Modify Request Parameters Through the URL":
      "URL을 통해 요청 매개변수 수정",
    "Netcraft takedown, submission and screenshot management.":
      "Netcraft 테이크다운, 제출, 스크린샷 관리입니다.",
    "No Authorization":
      "인증 없음",
    "Note: Other SQL databases are currently not supported by the fetch incidents.":
      "참고: 다른 SQL 데이터베이스는 현재 인시던트 가져오기에서 지원되지 않습니다.",
    "O365 Outlook Calendar enables you to create and manage different calendars and events according to your requirements.":
      "O365 Outlook Calendar를 사용하면 요구 사항에 따라 다양한 캘린더와 이벤트를 만들고 관리할 수 있습니다.",
    "On-premise firewall by Sophos enables you to manage your firewall, respond to threats, and monitor what’s happening on your network.":
      "Sophos의 온프레미스 방화벽을 사용하면 방화벽을 관리하고, 위협에 대응하고, 네트워크에서 일어나는 일을 모니터링할 수 있습니다.",
    "Option to remove top level domainGlobs from the list. For example - *.com.":
      "목록에서 최상위 도메인 Glob를 제거하는 옵션입니다. 예: *.com.",
    "Outbound Format":
      "아웃바운드 형식",
    "Palo Alto Networks Best Practice Assessment (BPA) analyzes NGFW and Panorama configurations and compares them to the best practices.":
      "Palo Alto Networks Best Practice Assessment(BPA)는 NGFW 및 Panorama 구성을 분석하고 모범 사례와 비교합니다.",
    "Palo Alto Networks Enterprise DLP discovers and protects company data across every data channel and repository. Integrated Enterprise DLP enables data protection and compliance everywhere without complexity.":
      "Palo Alto Networks Enterprise DLP는 모든 데이터 채널과 리포지토리에서 회사 데이터를 검색하고 보호합니다. 통합 Enterprise DLP를 사용하면 복잡함 없이 어디에서나 데이터 보호와 규정 준수를 구현할 수 있습니다.",
    "PAN-OS: drop invalid URL entries":
      "PAN-OS: 유효하지 않은 URL 항목 삭제",
    "parameter (default: 600 seconds). After the time to live expires, and upon execution of a new command, the database connection will close and a new connection will be created.":
      "매개변수(기본값: 600초). 수명이 만료된 후 새 명령을 실행하면 데이터베이스 연결이 닫히고 새 연결이 생성됩니다.",
    "parameter configured in the instance configuration.":
      "인스턴스 구성에 설정된 매개변수입니다.",
    "Parameterized example":
      "매개변수화된 예시",
    "Password/API Key":
      "비밀번호/API 키",
    "Prepend string to list":
      "목록 앞에 문자열 추가",
    "Prisma Cloud secures infrastructure, workloads and applications, across the entire cloud-native technology stack.":
      "Prisma Cloud는 클라우드 네이티브 기술 스택 전반에서 인프라, 워크로드 및 애플리케이션을 보호합니다.",
    "Proofpoint email security appliance.":
      "Proofpoint 이메일 보안 어플라이언스입니다.",
    "Protect your web application using Signal Sciences.":
      "Signal Sciences를 사용하여 웹 애플리케이션을 보호합니다.",
    "Provides commands for interaction with Prisma SASE API.":
      "Prisma SASE API와 상호작용하기 위한 명령을 제공합니다.",
    "Provides URL scanning and rewriting of inbound email messages in mail flow, and time-of-click verification of URLs and links in email messages and other locations.":
      "메일 흐름에서 수신 이메일 메시지의 URL 검사 및 재작성과 이메일 메시지 및 기타 위치에 있는 URL과 링크에 대한 클릭 시 검증을 제공합니다.",
    "Queries examples":
      "쿼리 예시",
    "Refresh Rate":
      "새로 고침 빈도",
    "RelayShield real-time identity-compromise and agent-security threat intelligence.":
      "RelayShield의 실시간 ID 침해 및 에이전트 보안 위협 인텔리전스입니다.",
    "RelayShield real-time identity-compromise and agent-security threat intelligence. Implements the generic `domain`/`ip`/`email` reputation commands (auto-invoked by existing enrichment playbooks) plus RelayShield-specific commands for MCP server registry risk, certificate expiry, and supply-chain vendor risk. \"No known finding\" from any command means nothing was flagged in the sources RelayShield actually queried. It is deliberately never mapped to a \"Good\" DBotScore, since that would claim more certainty than the data supports. See the README's DBotScore section for the exact mapping.":
      "RelayShield의 실시간 ID 침해 및 에이전트 보안 위협 인텔리전스입니다. 일반 `domain`/`ip`/`email` 평판 명령(기존 보강 플레이북에서 자동 호출됨)과 MCP 서버 레지스트리 위험, 인증서 만료, 공급망 공급업체 위험에 대한 RelayShield 전용 명령을 구현합니다. 명령에서 \"No known finding\"이 반환되면 RelayShield가 실제로 조회한 소스에서 아무것도 플래그되지 않았음을 의미합니다. 데이터가 뒷받침하는 것보다 더 큰 확실성을 나타내게 되므로 의도적으로 DBotScore \"Good\"에 매핑되지 않습니다. 정확한 매핑은 README의 DBotScore 섹션을 참조하세요.",
    "Retrieve and monitor internal security findings for your organization, and critical findings across your supplier (third-party) portfolio, from the Panorays platform to automate incident response within Cortex.":
      "Panorays 플랫폼에서 조직의 내부 보안 결과와 공급업체(서드파티) 포트폴리오 전반의 중요 결과를 가져와 모니터링하여 Cortex 내 인시던트 대응을 자동화합니다.",
    "RiskSense is a cloud-based platform that provides vulnerability management and prioritization to measure and control cybersecurity risk.":
      "RiskSense는 사이버 보안 위험을 측정하고 제어하기 위한 취약성 관리 및 우선순위 지정을 제공하는 클라우드 기반 플랫폼입니다.",
    "Run queries on Splunk and fetch Notable Events (Splunk ES versions up to 8.2).":
      "Splunk에서 쿼리를 실행하고 Notable Events를 가져옵니다(Splunk ES 8.2까지의 버전).",
    "Run queries on Splunk and fetch Splunk ES Findings and Investigations (Splunk ES 8.2+).":
      "Splunk에서 쿼리를 실행하고 Splunk ES Findings 및 Investigations를 가져옵니다(Splunk ES 8.2 이상).",
    "SaaS Security API is a cloud-based service that you can connect directly to your sanctioned SaaS applications using the cloud app’s API to provide data classification, sharing and permission visibility, and threat detection. This Content Pack provides insights into risks posed by data exposure and policy violations and enables you to use Cortex to effectively manage the incidents discovered by SaaS Security API.":
      "SaaS Security API는 클라우드 앱의 API를 사용하여 승인된 SaaS 애플리케이션에 직접 연결할 수 있는 클라우드 기반 서비스로, 데이터 분류, 공유 및 권한 가시성, 위협 탐지를 제공합니다. 이 콘텐츠 팩은 데이터 노출 및 정책 위반으로 인한 위험에 대한 인사이트를 제공하고 SaaS Security API가 발견한 인시던트를 Cortex에서 효과적으로 관리할 수 있도록 합니다.",
    "SailPoint IdentityIQ context pack enables XSOAR customers to utilize the deep, enriched contextual data in the SailPoint predictive identity platform to better drive identity-aware security practices.":
      "SailPoint IdentityIQ 컨텍스트 팩을 사용하면 XSOAR 고객은 SailPoint 예측형 ID 플랫폼의 깊이 있고 풍부한 컨텍스트 데이터를 활용하여 ID 인식 보안 관행을 더욱 강화할 수 있습니다.",
    "Scan and govern AI models with Palo Alto Networks Prisma AIRS AI Supply Chain Security: model scans, evaluations, violations, labels, model groups, and security rules.":
      "Palo Alto Networks Prisma AIRS AI Supply Chain Security로 AI 모델을 스캔하고 관리합니다: 모델 스캔, 평가, 위반, 레이블, 모델 그룹, 보안 규칙.",
    "Search for specific issues":
      "특정 이슈 검색",
    "Select an Issue or Pull requests to Fetch":
      "가져올 이슈 또는 풀 리퀘스트 선택",
    "Send messages and notifications to your Slack team.":
      "Slack 팀에 메시지와 알림을 보냅니다.",
    "Separate pairs using":
      "쌍을 구분하려면 다음을 사용합니다:",
    "Server Name":
      "서버 이름",
    "ServiceNow CMDB is a service‑centric foundation that proactively analyzes service‑impacting changes, identifies issues, and eliminates outages.":
      "ServiceNow CMDB는 서비스에 영향을 미치는 변경 사항을 사전에 분석하고, 문제를 식별하며, 중단을 제거하는 서비스 중심의 기반입니다.",
    "Show CSV format as Text":
      "CSV 형식을 텍스트로 표시",
    "SIGNL4 offers critical alerting, incident response and service dispatching for operating critical infrastructure. It alerts you persistently via app push, SMS text, voice calls, and email including tracking, escalation, on-call duty scheduling and collaboration.":
      "SIGNL4는 중요 인프라 운영을 위한 핵심 알림, 인시던트 대응, 서비스 디스패치를 제공합니다. 앱 푸시, SMS 문자, 음성 통화, 이메일로 지속적으로 알리며 추적, 에스컬레이션, 온콜 당번 일정 관리, 협업도 지원합니다.",
    "Space-separated permission identifiers.":
      "공백으로 구분된 권한 식별자입니다.",
    "Specify arguments for the configuration of an instance name-value pairs, for example:":
      "인스턴스 구성에 대한 인수를 이름-값 쌍으로 지정합니다. 예:",
    "Specify the value to use when passing the API key as a header or parameter value.":
      "API 키를 헤더 또는 매개변수 값으로 전달할 때 사용할 값을 지정합니다.",
    "Specify the value to use when passing the API key as a header or parameter value. e.g., X-PAN-KEY: API_KEY_HERE (X-PAN-KEY is the value specified in this field) - For a parameterized call, this would be appended to the URL as &X-PAN-KEY=KEY_HERE - - For a header-based call, this would appear in the header as 'X-PAN-KEY': KEY_HERE":
      "API 키를 헤더 또는 매개변수 값으로 전달할 때 사용할 값을 지정합니다. 예: X-PAN-KEY: API_KEY_HERE(X-PAN-KEY는 이 필드에 지정된 값입니다) - 매개변수화된 호출의 경우 URL에 &X-PAN-KEY=KEY_HERE로 추가됩니다 - - 헤더 기반 호출의 경우 헤더에 'X-PAN-KEY': KEY_HERE로 표시됩니다",
    "SQL DB":
      "SQL DB",
    "Strip ports from URLs":
      "URL에서 포트 제거",
    "Strip protocols from URLs":
      "URL에서 프로토콜 제거",
    "Symantec Messaging Gateway protects against spam, malware, targeted attacks and provides advanced content filtering, data loss prevention, and email encryption.":
      "Symantec Messaging Gateway는 스팸, 악성코드, 표적 공격으로부터 보호하고 고급 콘텐츠 필터링, 데이터 유출 방지, 이메일 암호화를 제공합니다.",
    "Symantec ProxySG: Default Category":
      "Symantec ProxySG: 기본 카테고리",
    "Symantec ProxySG: Listed Categories":
      "Symantec ProxySG: 나열할 카테고리",
    "Tavily is a web service that provides real-time web search and retrieval capabilities through an API, enabling developers to fetch and extract relevant information from the internet in structured formats like JSON.":
      "Tavily는 API를 통해 실시간 웹 검색 및 검색 기능을 제공하는 웹 서비스로, 개발자가 인터넷에서 관련 정보를 JSON 같은 구조화된 형식으로 가져와 추출할 수 있게 합니다.",
    "The fetch parameter should be the same as the column name, the limit is handled outside the query.":
      "가져오기 매개변수는 열 이름과 같아야 하며, 한도는 쿼리 외부에서 처리됩니다.",
    "The following are procedure examples for different SQL databases:":
      "다음은 다양한 SQL 데이터베이스의 프로시저 예시입니다:",
    "The format of the exported list.":
      "내보내는 목록의 형식입니다.",
    "The Generic Export Indicators Service is a long-running integration. For more information about long-running integrations, check out the":
      "Generic Export Indicators Service는 장기 실행 통합입니다. 장기 실행 통합에 대한 자세한 내용은 다음을 참조하세요:",
    "The Generic SQL query or procedure to fetch according to.":
      "페치할 기준이 되는 Generic SQL 쿼리 또는 프로시저입니다.",
    "The Generic SQL query/procedure.":
      "Generic SQL 쿼리/프로시저입니다.",
    "The integration supports the following workflows:":
      "이 통합은 다음 워크플로를 지원합니다:",
    "The maximum number of entries in the output. If no value is provided, will use the value specified in the":
      "출력의 최대 항목 수입니다. 값을 지정하지 않으면 다음에 지정된 값을 사용합니다:",
    "The name of the requested repository":
      "요청된 리포지토리의 이름",
    "The name to use for the server in tool names. If not provided, the default name returned by the server will be used.":
      "도구 이름에서 서버에 사용할 이름입니다. 지정하지 않으면 서버가 반환하는 기본 이름이 사용됩니다.",
    "The output format. Supports":
      "출력 형식입니다. 지원:",
    "The Prisma Cloud IAM API consists of a set of API endpoints that allow customers to perform CRUD operation on their user profiles.":
      "Prisma Cloud IAM API는 고객이 자신의 사용자 프로필에 대해 CRUD 작업을 수행할 수 있는 일련의 API 엔드포인트로 구성됩니다.",
    "The procedure should contain conditions on the fetch parameter: (In the example provided, ‘timestamp’ is a fetch parameter)":
      "프로시저에는 가져오기 매개변수에 대한 조건이 포함되어야 합니다(제공된 예시에서는 ‘timestamp’가 가져오기 매개변수입니다)",
    "The procedure should contain conditions on the fetch parameter: (In the example provided, ‘ts’ is a fetch timestamp parameter)":
      "프로시저에는 가져오기 매개변수에 대한 조건이 포함되어야 합니다(제공된 예시에서는 ‘ts’가 가져오기 타임스탬프 매개변수입니다)",
    "The query to run to update the indicators list. To view expected results, run the following command from the Cortex CLI `!findIndicators query=<your query>`. An empty value may load unwanted indicators. See integration docs for troubleshooting information.":
      "지표 목록을 업데이트하기 위해 실행할 쿼리입니다. 예상 결과를 보려면 Cortex CLI에서 다음 명령을 실행합니다: `!findIndicators query=<your query>`. 값이 비어 있으면 원치 않는 지표가 로드될 수 있습니다. 문제 해결 정보는 통합 설명서를 참조하세요.",
    "The query used to retrieve indicators from the system. If you are using this argument, no more than 100,000 can be exported through the EDL.":
      "시스템에서 지표를 검색하는 데 사용하는 쿼리입니다. 이 인수를 사용하는 경우 EDL을 통해 최대 100,000개까지만 내보낼 수 있습니다.",
    "The REST API URL":
      "REST API URL",
    "The SailPoint Identity Security platform can be configured either on-prem/single tenant SaaS, or multi-tenant. This package is intended to be used with the SaaS, multi-tenant solution, IdentityNow.":
      "SailPoint Identity Security 플랫폼은 온프레미스/단일 테넌트 SaaS 또는 멀티 테넌트로 구성할 수 있습니다. 이 패키지는 SaaS 멀티 테넌트 솔루션인 IdentityNow에서 사용하도록 만들어졌습니다.",
    "The starting entry index from which to export the indicators when index 0 is the first position.":
      "인덱스 0을 첫 번째 위치로 할 때 지표 내보내기를 시작할 시작 항목 인덱스입니다.",
    "The ThreatX integration allows automated enforcement and intel gathering actions.":
      "ThreatX 통합을 통해 자동화된 시행 및 인텔리전스 수집 작업이 가능합니다.",
    "The URL for the OAuth 2.0 authorization endpoint. If not provided, the default will be the origin of the `Server URL` followed by `/oauth2/authorize`.":
      "OAuth 2.0 권한 부여 엔드포인트의 URL입니다. 지정하지 않으면 기본값은 `Server URL`의 오리진 뒤에 `/oauth2/authorize`를 붙인 것입니다.",
    "The URL for the OAuth 2.0 authorization endpoint. If not provided, the default will be the origin of the `Server URL` followed by `/oauth2/authorize`. For example, if `Server URL` is `https://example.com/mcp`, the default `Authorization Endpoint` will be `https://example.com/oauth2/authorize`.":
      "OAuth 2.0 권한 부여 엔드포인트의 URL입니다. 지정하지 않으면 기본값은 `Server URL`의 오리진 뒤에 `/oauth2/authorize`를 붙인 것입니다. 예를 들어 `Server URL`이 `https://example.com/mcp`이면 기본 `Authorization Endpoint`는 `https://example.com/oauth2/authorize`가 됩니다.",
    "The URL for the OAuth 2.0 token endpoint. If not provided, the default will be the origin of the `Server URL` followed by `/oauth2/token`.":
      "OAuth 2.0 토큰 엔드포인트의 URL입니다. 지정하지 않으면 기본값은 `Server URL`의 오리진 뒤에 `/oauth2/token`을 붙인 것입니다.",
    "The URL for the OAuth 2.0 token endpoint. If not provided, the default will be the origin of the `Server URL` followed by `/oauth2/token`. For example, if `Server URL` is `https://example.com/mcp`, the default `Token Endpoint` will be `https://example.com/oauth2/token`.":
      "OAuth 2.0 토큰 엔드포인트의 URL입니다. 지정하지 않으면 기본값은 `Server URL`의 오리진 뒤에 `/oauth2/token`을 붙인 것입니다. 예를 들어 `Server URL`이 `https://example.com/mcp`이면 기본 `Token Endpoint`는 `https://example.com/oauth2/token`이 됩니다.",
    "There are two options to fetch incidents, determined by the ‘Fetch by’ configuration:":
      "인시던트를 가져오는 방법은 두 가지이며 ‘Fetch by’ 구성에 따라 결정됩니다:",
    "There are two options to use to bind variables:":
      "변수를 바인딩하는 방법은 두 가지입니다:",
    "This does not happen in “port” listen mode, that’s why “route” mode should be used.":
      "“port” 수신 대기 모드에서는 이 문제가 발생하지 않으므로 “route” 모드를 사용해야 합니다.",
    "This integration allows the security operations center to create and manage incidents based on Vectra Events Detections.":
      "이 통합을 통해 보안 운영 센터는 Vectra Events Detections를 기반으로 인시던트를 생성하고 관리할 수 있습니다.",
    "This integration allows you to connect securely with any MCP server and access its tools in real time.":
      "이 통합을 사용하면 모든 MCP 서버에 안전하게 연결하고 해당 도구에 실시간으로 액세스할 수 있습니다.",
    "This integration allows you to manage and interact with Microsoft security and compliance content search.":
      "이 통합을 사용하면 Microsoft 보안 및 규정 준수 콘텐츠 검색을 관리하고 상호작용할 수 있습니다.",
    "This integration is configured automatically as part of the Okta Standard Connector. Do not configure this integration directly — set it up from the connector page instead.":
      "이 통합은 Okta Standard Connector의 일부로 자동 구성됩니다. 이 통합을 직접 구성하지 말고 대신 커넥터 페이지에서 설정하세요.",
    "This integration provides a method for executing HTTP API calls to specific API endpoints used in one-off scenarios not covered by other XSOAR integrations. This integration supports unauthenticated and authenticated API calls over HTTPS, using API key and basic HTTP authentication methods.":
      "이 통합은 다른 XSOAR 통합에서 다루지 않는 일회성 시나리오에서 사용되는 특정 API 엔드포인트에 대해 HTTP API 호출을 실행하는 방법을 제공합니다. API 키와 HTTP 기본 인증 방식을 사용하여 HTTPS를 통한 인증되지 않은 API 호출과 인증된 API 호출을 모두 지원합니다.",
    "This integration transfers files between Cortex and a remote machine and executes commands on the remote machine.":
      "이 통합은 Cortex와 원격 머신 간에 파일을 전송하고 원격 머신에서 명령을 실행합니다.",
    "This is a feed integration for extracting indicators from ServiceNow.":
      "ServiceNow에서 지표를 추출하기 위한 피드 통합입니다.",
    "This is the Orion Malware integration. Analyzes hash and files with static and dynamic analysis.":
      "Orion Malware 통합입니다. 정적 및 동적 분석으로 해시와 파일을 분석합니다.",
    "To generate your personal access token, visit:":
      "개인용 액세스 토큰을 생성하려면 다음을 방문하세요:",
    "TrendAI™ Apex One central automation to manage agents and User-Defined Suspicious Objects.":
      "TrendAI™ Apex One 중앙 자동화로 에이전트와 사용자 정의 의심 객체를 관리합니다.",
    "Troubleshoot":
      "문제 해결",
    "Truncate URL length":
      "URL 길이 자르기",
    "Unit 42 Feed integration provides threat intelligence from Palo Alto Networks Unit 42 research team.":
      "Unit 42 Feed 통합은 Palo Alto Networks Unit 42 연구팀의 위협 인텔리전스를 제공합니다.",
    "Update an issue":
      "이슈 업데이트",
    "Update list on demand only":
      "요청 시에만 목록 업데이트",
    "Use an SSL connection":
      "SSL 연결 사용",
    "Use both bind variable names and values, for example:":
      "바인드 변수 이름과 값을 모두 사용합니다. 예:",
    "Use Connection Pooling":
      "연결 풀링 사용",
    "Use LDAP (Teradata only)":
      "LDAP 사용(Teradata만 해당)",
    "Use only bind variable values, for example:":
      "바인드 변수 값만 사용합니다. 예:",
    "Use the following arguments in the URL to change the request:":
      "요청을 변경하려면 URL에서 다음 인수를 사용합니다:",
    "Use the Mimecast integration to manage email security, continuity, and archiving services.":
      "Mimecast 통합을 사용하여 이메일 보안, 연속성 및 아카이빙 서비스를 관리합니다.",
    "Use the O365 File Management (Onedrive/Sharepoint/Teams) integration to enable your app to get authorized access to files in OneDrive, SharePoint, and MS Teams across your entire organization. This integration requires admin consent.":
      "O365 File Management(OneDrive/SharePoint/Teams) 통합을 사용하여 앱이 조직 전체의 OneDrive, SharePoint 및 MS Teams에 있는 파일에 승인된 액세스 권한을 얻을 수 있도록 합니다. 이 통합에는 관리자 동의가 필요합니다.",
    "Use the Proofpoint Threat Response integration to orchestrate and automate incident response.":
      "Proofpoint Threat Response 통합을 사용하여 인시던트 대응을 오케스트레이션하고 자동화합니다.",
    "Use The ServiceNow IT Service Management (ITSM) solution to modernize the way you manage and deliver services to your users.":
      "ServiceNow IT Service Management(ITSM) 솔루션을 사용하여 사용자에게 서비스를 관리하고 제공하는 방식을 혁신합니다.",
    "Use the SpecterOpsBloodHoundEnterprise integration to retrieve attack path findings from BloodHound Enterprise to streamline incident creation and investigation.":
      "SpecterOpsBloodHoundEnterprise 통합을 사용하여 BloodHound Enterprise에서 공격 경로 결과를 가져와 인시던트 생성 및 조사를 간소화합니다.",
    "Use the Workday IAM Integration as part of the IAM premium pack.":
      "IAM 프리미엄 팩의 일부로 Workday IAM 통합을 사용합니다.",
    "Use the Zoom integration to manage your Zoom users and meetings.":
      "Zoom 통합을 사용하여 Zoom 사용자와 미팅을 관리합니다.",
    "Use this feed integration to fetch VirusTotal Livehunt notifications as indicators.":
      "이 피드 통합을 사용하여 VirusTotal Livehunt 알림을 지표로 가져옵니다.",
    "Use this feed integration to fetch VirusTotal Retrohunt matches.":
      "이 피드 통합을 사용하여 VirusTotal Retrohunt 일치 항목을 가져옵니다.",
    "Use this integration to connect securely with a ServiceNow Model Context Protocol (MCP) server and access its tools in real time.":
      "이 통합을 사용하여 ServiceNow Model Context Protocol(MCP) 서버에 안전하게 연결하고 해당 도구에 실시간으로 액세스합니다.",
    "Use TypeSafe Jev typed judgments and calibrated probabilities in Cortex XSIAM and XSOAR playbooks.":
      "Cortex XSIAM 및 XSOAR 플레이북에서 TypeSafe Jev의 유형화된 판정과 보정된 확률을 사용합니다.",
    "Username (Blank when using API key)":
      "사용자 이름(API 키 사용 시 비워 둠)",
    "Username & Password":
      "사용자 이름 및 비밀번호",
    "Username of the repository owner, for example: github.com/repos/{_owner_}/{repo}/issues":
      "리포지토리 소유자의 사용자 이름입니다. 예: github.com/repos/{_owner_}/{repo}/issues",
    "Uses the Sysdig agent to respond to malicious activity by triggering different actions at the host or container level, such as killing a container, quarantining a file, or performing a system capture.":
      "Sysdig 에이전트를 사용하여 컨테이너 종료, 파일 격리, 시스템 캡처 수행 등 호스트 또는 컨테이너 수준에서 다양한 작업을 트리거하여 악성 활동에 대응합니다.",
    "Validate Cortex ASM-discovered exposures with Tenzai's agentic penetration testing. Create a scan for an exposure, poll it to completion, and fetch the verdict and evidence back into the Cortex issue.":
      "Tenzai의 에이전트형 침투 테스트로 Cortex ASM이 발견한 노출을 검증합니다. 노출에 대한 스캔을 생성하고, 완료될 때까지 폴링한 다음, 판정 결과와 증거를 Cortex 이슈로 다시 가져옵니다.",
    "VMware Carbon Black App Control (formerly known as Carbon Black Enterprise Protection) is a next-generation endpoint threat prevention solution to deliver a portfolio of protection policies, real-time visibility across environments, and comprehensive compliance rule sets in a single platform. This integration only supports Carbon Black on-premise APIs.":
      "VMware Carbon Black App Control(이전 명칭 Carbon Black Enterprise Protection)은 보호 정책, 환경 전반의 실시간 가시성, 포괄적인 규정 준수 규칙 세트를 단일 플랫폼에서 제공하는 차세대 엔드포인트 위협 방지 솔루션입니다. 이 통합은 Carbon Black 온프레미스 API만 지원합니다.",
    "VMware Carbon Black EDR (formerly known as Carbon Black Response).":
      "VMware Carbon Black EDR(이전 명칭 Carbon Black Response)입니다.",
    "Vulnerability management solution to help reduce threat exposure.":
      "위협 노출을 줄이는 데 도움이 되는 취약성 관리 솔루션입니다.",
    "When ‘Fetch by’ is ‘ID and timestamp’, handling the ID occurs internally and has no reference in the query.":
      "‘Fetch by’가 ‘ID and timestamp’인 경우 ID 처리는 내부적으로 이루어지며 쿼리에서는 참조되지 않습니다.",
    "When ‘Fetch by’ is ‘Unique ascending ID’ or ‘Unique timestamp’, make sure to create the procedure with ‘>’ and not ‘>=’ in the condition on the timestamp/id field.":
      "‘Fetch by’가 ‘Unique ascending ID’ 또는 ‘Unique timestamp’인 경우 타임스탬프/ID 필드의 조건에 ‘>=’가 아니라 ‘>’를 사용하여 프로시저를 만들어야 합니다.",
    "When enabled, the integration queries the server using full queries (overwrites the \"Exported Fields\" parameter). Advanced configuration to be used only if instructed by Cortex Support, or you have encountered log errors in the form of: msgpack: invalid code.":
      "사용하면 통합이 전체 쿼리를 사용하여 서버에 쿼리합니다(\"Exported Fields\" 매개변수를 덮어씀). Cortex 지원팀에서 안내한 경우 또는 msgpack: invalid code. 형식의 로그 오류가 발생한 경우에만 사용하는 고급 구성입니다.",
    "When Running in On-Demand Mode":
      "온디맨드 모드에서 실행하는 경우",
    "When set to true and the certificate and private key are provided, the HSTS header is added to all requests.":
      "true로 설정하고 인증서와 개인 키가 제공되면 모든 요청에 HSTS 헤더가 추가됩니다.",
    "When using more than one server in High Availability (HA) mode, the External Dynamic List (EDL) should be configured to listen on a route, not on a port.":
      "고가용성(HA) 모드에서 여러 서버를 사용하는 경우 External Dynamic List(EDL)는 포트가 아니라 라우트에서 수신 대기하도록 구성해야 합니다.",
    "When using queries, there are two requirements, and the third one depends on the database.":
      "쿼리를 사용할 때는 두 가지 요구 사항이 있으며 세 번째 요구 사항은 데이터베이스에 따라 다릅니다.",
    "Workday offers enterprise-level software solutions for financial management, human resources, and planning.":
      "Workday는 재무 관리, 인사, 계획을 위한 엔터프라이즈급 소프트웨어 솔루션을 제공합니다.",
    "XQL Query Engine enables you to run XQL queries on your data sources.":
      "XQL Query Engine을 사용하면 데이터 소스에서 XQL 쿼리를 실행할 수 있습니다.",
    "XSOAR Indicator Page Size":
      "XSOAR 지표 페이지 크기",
    "You can access the External Dynamic List at the following url:":
      "External Dynamic List는 다음 URL에서 액세스할 수 있습니다:",
    "Zscaler Internet Access via ZIdentity OAuth 2.0. Provides URL/IP/domain classification, denylist and allowlist management, URL category management, sandbox reporting, user and group management, and IP destination group management using OAuth 2.0 client credentials authentication through ZIdentity.":
      "ZIdentity OAuth 2.0을 통한 Zscaler Internet Access입니다. ZIdentity를 통한 OAuth 2.0 클라이언트 자격 증명 인증을 사용하여 URL/IP/도메인 분류, 거부 목록 및 허용 목록 관리, URL 카테고리 관리, 샌드박스 보고, 사용자 및 그룹 관리, IP 대상 그룹 관리를 제공합니다.",
    "Zscaler is a cloud security solution built for performance and flexible scalability. This integration enables you to manage URL and IP address allow lists and block lists, manage and update categories, get Sandbox reports, create, manage, and update IP destination groups and manually log in, log out, and activate changes in a Zscaler session.":
      "Zscaler는 성능과 유연한 확장성을 위해 구축된 클라우드 보안 솔루션입니다. 이 통합을 사용하면 URL 및 IP 주소 허용 목록과 차단 목록을 관리하고, 카테고리를 관리 및 업데이트하고, 샌드박스 보고서를 가져오고, IP 대상 그룹을 생성, 관리 및 업데이트하고, Zscaler 세션에서 수동으로 로그인, 로그아웃 및 변경 사항 활성화를 수행할 수 있습니다.",

    // --- Batch: Google Workspace / GitHub / GitLab / Terraform / Polygon integration docs and parameters (09:14 export) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    "A maximum of 200 emails per fetch (even if a higher number is configured). Default is 50.":
      "가져오기 1회당 최대 200개의 이메일입니다(더 큰 숫자가 구성되어 있어도 마찬가지입니다). 기본값은 50입니다.",
    "A maximum of 200 emails per fetch (even if a higher number is configured). The default is 50.":
      "가져오기 1회당 최대 200개의 이메일입니다(더 큰 숫자가 구성되어 있어도 마찬가지입니다). 기본값은 50입니다.",
    "A unique identifier of the customer's Google account.":
      "고객의 Google 계정에 대한 고유 식별자입니다.",
    "Add the following variables to the GitHub actions credential store:":
      "GitHub Actions 자격 증명 저장소에 다음 변수를 추가합니다:",
    "Admin Email":
      "관리자 이메일",
    "Advanced Configuration Parameters":
      "고급 구성 매개변수",
    "Allows you to specify the e-mail address from which to send e-mails from.":
      "이메일을 보낼 발신 이메일 주소를 지정할 수 있습니다.",
    "API Key was generated in 2.":
      "API 키는 2에서 생성되었습니다.",
    "API to Authorize":
      "승인할 API",
    "Application Authorization Flow":
      "애플리케이션 권한 부여 흐름",
    "Auth Code (run the !gmail-auth-link command to start the auth flow - see Help section)":
      "인증 코드(인증 흐름을 시작하려면 !gmail-auth-link 명령 실행 - 도움말 섹션 참조)",
    "Auth Redirect URI":
      "인증 리디렉션 URI",
    "Authorize Application Security to access your GitHub (SaaS) account.":
      "Application Security가 GitHub(SaaS) 계정에 액세스하도록 승인합니다.",
    "Authorize Cortex GitHub App":
      "Cortex GitHub App 승인",
    "Automatically create user if not found in update and enable commands":
      "업데이트 및 활성화 명령에서 사용자를 찾을 수 없는 경우 사용자를 자동으로 생성",
    "Before you begin, you'll need to add your API key and API ID to the GitHub Actions secrets.":
      "시작하기 전에 API 키와 API ID를 GitHub Actions 시크릿에 추가해야 합니다.",
    "Before you begin, you'll need to add your API key and API ID to the GitHub Actions secrets. Please copy and use the variable names suggested below. If needed, you can generate a new token using the link below, copy and use the generated values as your secrets values.":
      "시작하기 전에 API 키와 API ID를 GitHub Actions 시크릿에 추가해야 합니다. 아래에 제안된 변수 이름을 복사하여 사용하세요. 필요한 경우 아래 링크를 사용하여 새 토큰을 생성하고 생성된 값을 복사하여 시크릿 값으로 사용할 수 있습니다.",
    "Choose GitHub App Type":
      "GitHub App 유형 선택",
    "Click the role you want to assign (the appropriate role).":
      "할당할 역할(적절한 역할)을 클릭합니다.",
    "Commands and its scopes":
      "명령 및 해당 범위",
    "Configure a service account and retrieve its key in JSON format by following the steps mentioned here:":
      "서비스 계정을 구성하고 여기에 설명된 단계에 따라 해당 키를 JSON 형식으로 가져옵니다:",
    "Configure a service account for Google Sheets - (per project)":
      "Google Sheets용 서비스 계정 구성 - (프로젝트별)",
    "Configure an API account on G Suite Admin":
      "G Suite 관리에서 API 계정 구성",
    "create a Service Account file with a Private Key and authorize the API":
      "개인 키가 포함된 서비스 계정 파일을 생성하고 API를 승인합니다",
    "Create a Fine-grained Personal Access Token":
      "Fine-grained Personal Access Token 생성",
    "Create an API token":
      "API 토큰 생성",
    "Customer ID":
      "고객 ID",
    "Cxxxxxxxx is your Immutable Google Apps ID (customerId).":
      "Cxxxxxxxx는 변경 불가능한 Google Apps ID(customerId)입니다.",
    "Default reports language":
      "기본 보고서 언어",
    "Default Search Scope":
      "기본 검색 범위",
    "Default to US (app.terraform.io)":
      "US(app.terraform.io)를 기본값으로",
    "Email - Associate to Google Drive":
      "이메일 - Google Drive와 연결",
    "Email of user":
      "사용자 이메일",
    "Email of user with admin capabilities":
      "관리자 권한이 있는 사용자의 이메일",
    "Email of user with admin privileges":
      "관리자 권한이 있는 사용자의 이메일",
    "Emails":
      "이메일",
    "Enable Google Workspace Log Collection":
      "Google Workspace 로그 수집 활성화",
    "Enable Read-Only Tools":
      "읽기 전용 도구 활성화",
    "Enabled Toolsets":
      "활성화된 툴셋",
    "Events query (e.g. \"from:Demisto\")":
      "이벤트 쿼리(예: \"from:Demisto\")",
    "Events query (e.g., \"from:example@demisto.com\")":
      "이벤트 쿼리(예: \"from:example@demisto.com\")",
    "Events search query":
      "이벤트 검색 쿼리",
    "Events user key":
      "이벤트 사용자 키",
    "Events user key (e.g. example@demisto.com)":
      "이벤트 사용자 키(예: example@demisto.com)",
    "Existing Customer Owned GitHub App":
      "고객 소유의 기존 GitHub App",
    "First fetch timestamp, in days.":
      "첫 번째 가져오기 타임스탬프(일 단위)입니다.",
    "Follow the steps here to create such a private key and authorize the API for usage:":
      "다음 단계에 따라 이러한 개인 키를 생성하고 사용할 API를 승인합니다:",
    "For detailed documentation on available toolsets, refer to:":
      "사용 가능한 툴셋에 대한 자세한 설명서는 다음을 참조하세요:",
    "For the email user param, please choose a user with admin permissions and make sure that you follow the steps to perform Google Apps Domain-Wide Delegation of Authority.":
      "이메일 사용자 매개변수에는 관리자 권한이 있는 사용자를 선택하고 Google Apps Domain-Wide Delegation of Authority 단계를 반드시 수행하세요.",
    "For the email user parameter, select a user with admin permissions and make sure that you follow the steps to perform Google Apps Domain-Wide Delegation of Authority.":
      "이메일 사용자 매개변수에는 관리자 권한이 있는 사용자를 선택하고 Google Apps Domain-Wide Delegation of Authority 단계를 반드시 수행하세요.",
    "Function":
      "함수",
    "Go to Admin roles.":
      "Admin roles로 이동합니다.",
    "Google documentation":
      "Google 설명서",
    "Google Sheets Integration":
      "Google Sheets 통합",
    "Google Sheets is a spreadsheet program that is part of the free cloud-based Google Docs Editors suite offered by Google.":
      "Google Sheets는 Google이 제공하는 무료 클라우드 기반 Google Docs Editors 제품군에 포함된 스프레드시트 프로그램입니다.",
    "Google’s API Documentation":
      "Google API 설명서",
    "Grant the Compute Admin permission to the Service Account to enable the Service Account to perform certain Google Cloud API commands.":
      "서비스 계정에 Compute Admin 권한을 부여하여 서비스 계정이 특정 Google Cloud API 명령을 수행할 수 있도록 합니다.",
    "If a non-admin user is the user for the integration’s parameter, the test button will fail on a 403 error.":
      "통합 매개변수의 사용자가 관리자가 아닌 경우 테스트 버튼이 403 오류로 실패합니다.",
    "If no toolsets are selected, GitHub's default toolsets 'context', 'repos', 'issues', 'pull_requests', and 'users' will be enabled.":
      "툴셋을 선택하지 않으면 GitHub의 기본 툴셋 'context', 'repos', 'issues', 'pull_requests', 'users'가 활성화됩니다.",
    "Immutable Google Apps ID":
      "변경 불가능한 Google Apps ID",
    "In Cortex, configure an instance of the Google Cloud Compute integration. For the Service Account Private Key parameter, add the Service Account Private Key file contents (JSON).":
      "Cortex에서 Google Cloud Compute 통합의 인스턴스를 구성합니다. Service Account Private Key 매개변수에는 서비스 계정 개인 키 파일의 내용(JSON)을 추가합니다.",
    "In order to fetch user roles, please authrize this api too:":
      "사용자 역할을 가져오려면 이 API도 승인하세요:",
    "In order to revoke user roles, please authrize this api too:":
      "사용자 역할을 해지하려면 이 API도 승인하세요:",
    "In order to revoke/fetch user role, you will need the Immutable Google Apps ID param.":
      "사용자 역할을 해지/가져오려면 Immutable Google Apps ID 매개변수가 필요합니다.",
    "In order to search user mailboxes, please authrize this api too:":
      "사용자 사서함을 검색하려면 이 API도 승인하세요:",
    "In order to to fetch mobile info, please authrize this api too:":
      "모바일 정보를 가져오려면 이 API도 승인하세요:",
    "In order to to fetch user security tokens, please authrize this api too:":
      "사용자 보안 토큰을 가져오려면 이 API도 승인하세요:",
    "In order to to preform actions on chorme devices, please authrize this api too:":
      "Chrome 기기에 대한 작업을 수행하려면 이 API도 승인하세요:",
    "In order to to preform actions on mobile devices, please authrize this api too:":
      "모바일 기기에 대한 작업을 수행하려면 이 API도 승인하세요:",
    "It is necessary to authrize the next API’s for that service account:":
      "해당 서비스 계정에 대해 다음 API를 승인해야 합니다:",
    "Mailbox actions do not require admin previleges.":
      "사서함 작업에는 관리자 권한이 필요하지 않습니다.",
    "Maximum number of emails to pull per fetch":
      "가져오기 1회당 가져올 최대 이메일 수",
    "Must be a valid URL":
      "유효한 URL이어야 합니다",
    "Navigate to Profile and click Generate auth token.":
      "Profile로 이동하여 Generate auth token을 클릭합니다.",
    "Open THF Huntbox web interface. (It may be like https://huntbox.group-ib.com)":
      "Huntbox 웹 인터페이스를 엽니다(https://huntbox.group-ib.com 과 같을 수 있습니다).",
    "Organization domain URL":
      "조직 도메인 URL",
    "Please follow the documentation below for step by step guide on how to onboard your GitLab instance":
      "GitLab 인스턴스를 온보딩하는 단계별 가이드는 아래 설명서를 참조하세요",
    "Precedence of this will be admin_email in the command argument > admin email in the integration configuration > admin role provided to the service account.":
      "우선순위는 명령 인수의 admin_email > 통합 구성의 관리자 이메일 > 서비스 계정에 부여된 관리자 역할 순입니다.",
    "Provide at least one of the scopes mentioned for each command.":
      "각 명령에 대해 언급된 범위 중 하나 이상을 제공하세요.",
    "Raise error an empty result":
      "빈 결과에 대해 오류 발생",
    "Register":
      "등록",
    "Review the requested permissions and select repository access for Application Security:":
      "요청된 권한을 검토하고 Application Security의 리포지토리 액세스를 선택합니다:",
    "Revoke/Fetch User Roles":
      "사용자 역할 해지/가져오기",
    "See the Help tab for details on the Immutable Google Apps ID.":
      "Immutable Google Apps ID에 대한 자세한 내용은 도움말 탭을 참조하세요.",
    "Select a GitHub organization where you want to install Application Security.":
      "Application Security를 설치할 GitHub 조직을 선택합니다.",
    "Select Organization":
      "조직 선택",
    "Select Workspaces":
      "워크스페이스 선택",
    "Send as":
      "보내는 사람으로",
    "Server URL (e.g., https://huntbox.group-ib.com)":
      "서버 URL(예: https://huntbox.group-ib.com)",
    "Service Account Key":
      "서비스 계정 키",
    "Service account private key file contents (JSON)":
      "서비스 계정 개인 키 파일 내용(JSON)",
    "Service Account Private Key file contents (JSON)":
      "서비스 계정 개인 키 파일 내용(JSON)",
    "Terraform Region":
      "Terraform 리전",
    "the Integration Documentation":
      "통합 설명서",
    "The Personal Access Token is used to authenticate requests to the GitLab REST API. It must have the required permissions to access your organization's configuration.":
      "개인 액세스 토큰(Personal Access Token)은 GitLab REST API에 대한 요청을 인증하는 데 사용됩니다. 조직의 구성에 액세스하는 데 필요한 권한이 있어야 합니다.",
    "The required admin permissions are only used for user actions (i.e., creating users, getting user informations, deleting users):":
      "필요한 관리자 권한은 사용자 작업(사용자 생성, 사용자 정보 가져오기, 사용자 삭제 등)에만 사용됩니다:",
    "The scope for this API":
      "이 API의 범위",
    "There you will see URLs in the format:":
      "다음 형식의 URL이 표시됩니다:",
    "This section explains how to configure the instance of Polygon in Cortex.":
      "이 섹션에서는 Cortex에서 Polygon 인스턴스를 구성하는 방법을 설명합니다.",
    "To allow Cortex to access Gmail, you will need to create an OAuth2 App and approve the authorization flow. Please see the full documentation at:":
      "Cortex가 Gmail에 액세스하도록 하려면 OAuth2 앱을 생성하고 권한 부여 흐름을 승인해야 합니다. 전체 설명서는 다음을 참조하세요:",
    "To create a new token:":
      "새 토큰을 만들려면:",
    "To get an Immutable Google Apps ID (or customerId):":
      "Immutable Google Apps ID(customerId)를 가져오려면:",
    "Token":
      "토큰",
    "Transporter Connection":
      "트랜스포터 연결",
    "Use the Google Maps Geocoding API.":
      "Google Maps Geocoding API를 사용합니다.",
    "Use this integration to create, get, modify, and format spreadsheets.":
      "이 통합을 사용하여 스프레드시트를 생성, 가져오기, 수정 및 서식 지정합니다.",
    "Use this to specify the email account to search for messages with the search query. By default, the integration uses the email address specified in the credentials.":
      "검색 쿼리로 메시지를 검색할 이메일 계정을 지정합니다. 기본적으로 통합은 자격 증명에 지정된 이메일 주소를 사용합니다.",
    "Used for searching emails in the inbox. The query language follows the Gmail query specification. For example, \"from:example@demisto.com is:unread\".":
      "받은편지함의 이메일을 검색하는 데 사용됩니다. 쿼리 언어는 Gmail 쿼리 사양을 따릅니다. 예: \"from:example@demisto.com is:unread\".",
    "User or Team Token":
      "사용자 또는 팀 토큰",
    "user settings":
      "사용자 설정",
    "User's Service Account JSON":
      "사용자의 서비스 계정 JSON",
    "When enabled, limits tools to read-only operations preventing any write/modification actions.":
      "활성화하면 도구를 읽기 전용 작업으로 제한하여 쓰기/수정 작업을 방지합니다.",
    "You must be signed in as a super administrator for this task.":
      "이 작업을 수행하려면 슈퍼 관리자로 로그인해야 합니다.",
    "You will see there URLs in the format:":
      "거기에 다음 형식의 URL이 표시됩니다:",
    "Your private GitLab instance URL. For example, https://gitlab.example.com.":
      "프라이빗 GitLab 인스턴스 URL입니다. 예: https://gitlab.example.com.",
    "Your server URL is the same as your Huntbox web interface URL.":
      "서버 URL은 Huntbox 웹 인터페이스 URL과 동일합니다.",

    // --- Batch: Integration docs, parameter labels and tooltips for many integrations (12:04 export) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    "(default) — Auto-detect based on the platform.":
      "(기본값) — 플랫폼에 따라 자동으로 감지합니다.",
    "(e.g., https://192.168.0.1)":
      "(예: https://192.168.0.1)",
    "(For Cortex) For use with HTTPS - the certificate that the service should use. (For Cortex and Cortex XSIAM) Custom certificates are supported only using engine.":
      "(Cortex의 경우) HTTPS와 함께 사용하며, 서비스에서 사용해야 하는 인증서입니다. (Cortex 및 Cortex XSIAM의 경우) 사용자 지정 인증서는 엔진을 사용하는 경우에만 지원됩니다.",
    "(For Cortex) For use with HTTPS - the private key that the service should use. (For Cortex and Cortex XSIAM) When using an engine, configure a private API key. Not supported on the Cortex or Cortex XSIAM server.":
      "(Cortex의 경우) HTTPS와 함께 사용하며, 서비스에서 사용해야 하는 개인 키입니다. (Cortex 및 Cortex XSIAM의 경우) 엔진을 사용하는 경우 프라이빗 API 키를 구성하세요. Cortex 또는 Cortex XSIAM 서버에서는 지원되지 않습니다.",
    "(for runtime scanning operations only)":
      "(런타임 스캔 작업에만 해당)",
    "(if not already enabled)":
      "(아직 사용 설정되지 않은 경우)",
    "(OAuth2 credentials for the management API)":
      "(관리 API용 OAuth2 자격 증명)",
    "(optional) Configure a classifier and a mapper":
      "(선택 사항) 분류기와 매퍼를 구성합니다",
    "(Optional) Create custom fields.":
      "(선택 사항) 사용자 지정 필드를 생성합니다.",
    "2FA Token":
      "2FA 토큰",
    "A comma-separated list of Application IDs. Run the ***saas-security-get-apps*** command to return the **Application ID**, **Name**, and **Type** for all applications.":
      "애플리케이션 ID의 쉼표로 구분된 목록입니다. ***saas-security-get-apps*** 명령을 실행하면 모든 애플리케이션의 **Application ID**, **Name**, **Type**이 반환됩니다.",
    "A comma-separated list of ciphers to use. If none of the specified ciphers are agreed to by the server, an error message specifying the supported ciphers is returned.":
      "사용할 암호 목록(쉼표로 구분)입니다. 지정한 암호가 서버에서 하나도 허용되지 않으면 지원되는 암호를 안내하는 오류 메시지가 반환됩니다.",
    "A comma-separated list of data profile names to request an exemption. Use \"*\" to allow everything.":
      "예외를 요청할 데이터 프로필 이름의 쉼표로 구분된 목록입니다. 모두 허용하려면 \"*\"를 사용하세요.",
    "A comma-separated list of incident types to fetch from iZOOlogic.":
      "iZOOlogic에서 가져올 인시던트 유형의 쉼표로 구분된 목록입니다.",
    "A comma-separated list of key algorithms to use. If none of the specified key algorithms are agreed to by the server, an error message specifying the supported key algorithms is returned.":
      "사용할 키 알고리즘의 쉼표로 구분된 목록입니다. 지정한 키 알고리즘이 서버에서 하나도 허용되지 않으면 지원되는 키 알고리즘을 안내하는 오류 메시지가 반환됩니다.",
    "A comma-separated list of Splunk status labels to mirror as closed Cortex incident (Example: Resolved,False-Positive).":
      "종료된 Cortex 인시던트로 미러링할 Splunk 상태 레이블의 쉼표로 구분된 목록입니다(예: Resolved,False-Positive).",
    "A command fails with a quota or payment error.":
      "명령이 할당량 또는 결제 오류로 실패합니다.",
    "A command returns “no known finding” for an indicator you expect to be flagged.":
      "플래그가 지정될 것으로 예상되는 지표에 대해 명령이 “no known finding”을 반환합니다.",
    "A CSV list of broker URLs in the format: [ssl://]<hostname>[:port]) Get the hostname and port from the `brokerlist.properties` file (in instructions). The broker should be reachable from Demisto server.":
      "[ssl://]<hostname>[:port]) 형식의 브로커 URL CSV 목록입니다. 호스트 이름과 포트는 `brokerlist.properties` 파일(지침 내)에서 가져옵니다. 브로커는 Demisto 서버에서 접근할 수 있어야 합니다.",
    "A CSV of language codes of the language to use for OCR (leave empty to use defaults).":
      "OCR에 사용할 언어의 언어 코드 CSV입니다(비워 두면 기본값이 사용됩니다).",
    "A space-separated list of scopes that you want to consent to.":
      "동의할 범위의 공백으로 구분된 목록입니다.",
    "A Tenzai license is required to use this integration.":
      "이 통합을 사용하려면 Tenzai 라이선스가 필요합니다.",
    "A valid Magnet Automate instance.":
      "유효한 Magnet Automate 인스턴스.",
    "About team member product roles and access":
      "팀원의 제품 역할 및 액세스 정보",
    "Access ID - can be created in Sumo Logic under \"Settings\"":
      "액세스 ID - Sumo Logic의 \"Settings\"에서 생성할 수 있습니다",
    "Access key - can be created in Sumo Logic under \"Settings\"":
      "액세스 키 - Sumo Logic의 \"Settings\"에서 생성할 수 있습니다",
    "Access the Panorama UI.":
      "Panorama UI에 접속합니다.",
    "Access to Threatmon’s external API endpoints.":
      "Threatmon의 외부 API 엔드포인트에 대한 액세스.",
    "Access tokens are cached in the integration context and automatically refreshed when they expire.":
      "액세스 토큰은 통합 컨텍스트에 캐시되며 만료되면 자동으로 갱신됩니다.",
    "Access Your API Key":
      "API 키 액세스",
    "Access Your Kenna API Key":
      "Kenna API 키 액세스",
    "Access your VMRay environment.":
      "VMRay 환경에 접속합니다.",
    "Account ID (OAuth)":
      "계정 ID(OAuth)",
    "Account identifier":
      "계정 식별자",
    "Add a incident name to be used for the created incident (if a mapper is not used)":
      "생성되는 인시던트에 사용할 인시던트 이름을 추가합니다(매퍼를 사용하지 않는 경우)",
    "Add an instance of the integration and add the Workflow URL for the Teams channel.":
      "통합 인스턴스를 추가하고 Teams 채널의 Workflow URL을 추가합니다.",
    "Add and map the custom field to the necessary mapper(s).":
      "사용자 지정 필드를 추가하고 필요한 매퍼에 매핑합니다.",
    "Add Custom Indicator Fields":
      "사용자 지정 지표 필드 추가",
    "Add or create a service account with the proper privileges.":
      "적절한 권한이 있는 서비스 계정을 추가하거나 생성합니다.",
    "Add or remove Chrome options used to rasterize. Use for advanced troubleshooting. See Help.":
      "래스터화에 사용되는 Chrome 옵션을 추가하거나 제거합니다. 고급 문제 해결에 사용합니다. 도움말을 참조하세요.",
    "Add relevant scopes.":
      "관련 범위를 추가합니다.",
    "Add the Demisto Bot to a Team":
      "팀에 Demisto Bot을 추가합니다",
    "Add the integration instance in Cortex":
      "Cortex에서 통합 인스턴스를 추가합니다",
    "Add this tag to an entry to mirror it as a comment from Splunk.":
      "이 태그를 항목에 추가하면 Splunk의 댓글로 미러링됩니다.",
    "Add this tag to an entry to mirror it as a comment to Splunk.":
      "이 태그를 항목에 추가하면 Splunk로 댓글로 미러링됩니다.",
    "Additional connection parameters":
      "추가 연결 매개변수",
    "Additional malicious verdicts":
      "추가 악성 판정",
    "Additional Password":
      "추가 비밀번호",
    "Additional Resources":
      "추가 리소스",
    "Additional Splunk status labels to close on mirror (Incoming Mirroring)":
      "미러링 시 종료할 추가 Splunk 상태 레이블(수신 미러링)",
    "Address Type":
      "주소 유형",
    "After adding the Cortex app, you will get an Access Token and Bot Token, which should be inserted in the integration instance configuration’s corresponding fields.":
      "Cortex 앱을 추가하면 액세스 토큰과 봇 토큰이 제공되며, 이를 통합 인스턴스 구성의 해당 필드에 입력해야 합니다.",
    "After authorizing the Cortex app, you will get an ID, Token, and Key which need to be added to the relevant integration instance settings fields.":
      "Cortex 앱을 승인하면 ID, 토큰, 키가 제공되며, 이를 해당 통합 인스턴스 설정 필드에 추가해야 합니다.",
    "After authorizing the Cortex app, you will get an ID, Token, and Key which should be inserted in the relevant integration instance settings fields.":
      "Cortex 앱을 승인하면 ID, 토큰, 키가 제공되며, 이를 해당 통합 인스턴스 설정 필드에 입력해야 합니다.",
    "After you configure an integration instance, the first fetch will sychronize all Workday users (employees) in XSOAR by creating a User Profile indicator for each employee. The User Profile indicators store all employee profiles data, such as the employee’s name, street address, phone number, email address, etc.":
      "통합 인스턴스를 구성하면 첫 번째 가져오기에서 각 직원에 대한 User Profile 지표를 생성하여 모든 Workday 사용자(직원)가 XSOAR에 동기화됩니다. User Profile 지표에는 직원의 이름, 주소, 전화번호, 이메일 주소 등 모든 직원 프로필 데이터가 저장됩니다.",
    "After you successfully execute a command, a DBot message appears in the War Room with the command details.":
      "명령을 성공적으로 실행하면 명령 세부 정보가 포함된 DBot 메시지가 War Room에 표시됩니다.",
    "AIOps integration":
      "AIOps 통합",
    "Algorithm to sign generated JWT tokens with. Doesn't affect integration's functionality. Required and used if OAuth 2.0 is used for authentication. See detailed instructions on the 'Help' tab.":
      "생성된 JWT 토큰에 서명하는 데 사용할 알고리즘입니다. 통합의 기능에는 영향을 주지 않습니다. 인증에 OAuth 2.0을 사용하는 경우 필수이며 사용됩니다. 자세한 지침은 'Help' 탭을 참조하세요.",
    "An administrator must have a role that includes access to a specific REST API.":
      "관리자에게는 특정 REST API에 대한 액세스가 포함된 역할이 있어야 합니다.",
    "An API key generated from the Magnet Automate interface.":
      "Magnet Automate 인터페이스에서 생성한 API 키.",
    "Analyze files and URLs using the SecneurX Analysis for accurate threat intelligence and high-quality IOCs.":
      "SecneurX Analysis를 사용하여 파일과 URL을 분석하고 정확한 위협 인텔리전스와 고품질 IOC를 확보합니다.",
    "Analyze retro hunts, read live hunt notification,s and download files from VirusTotal.":
      "VirusTotal에서 레트로 헌트를 분석하고, 라이브 헌트 알림을 읽고, 파일을 다운로드합니다.",
    "Another point to note is that Splunk’s searches are based on the occurrence time behind the scenes. Meaning, Splunk itself uses occurrence time as its determining factor for bucket division and search.":
      "또 한 가지 유의할 점은 Splunk의 검색이 내부적으로 발생 시간을 기준으로 한다는 것입니다. 즉, Splunk 자체가 버킷 분할과 검색의 판단 기준으로 발생 시간을 사용합니다.",
    "Any tags removed from the Vectra entity will not be removed in the XSOAR incident, as XSOAR doesn’t allow the removal of the tags field via the backend. However, tags removed from the XSOAR incident UI will be removed from the Vectra entity.":
      "Vectra 엔터티에서 제거된 태그는 XSOAR 인시던트에서 제거되지 않습니다. XSOAR에서는 백엔드를 통한 태그 필드 제거를 허용하지 않기 때문입니다. 단, XSOAR 인시던트 UI에서 제거된 태그는 Vectra 엔터티에서 제거됩니다.",
    "API 1.0 Authentication":
      "API 1.0 인증",
    "API 2.0 Authentication":
      "API 2.0 인증",
    "API Access":
      "API 액세스",
    "API Client ID and API Client Secret":
      "API 클라이언트 ID 및 API 클라이언트 시크릿",
    "API connection":
      "API 연결",
    "API Host":
      "API 호스트",
    "API Key (CB Defense)":
      "API 키(CB Defense)",
    "API Key (Deprecated)":
      "API 키(사용 중단됨)",
    "API Key (JWT-Deprecated)":
      "API 키(JWT-사용 중단됨)",
    "API Key (Recommended)":
      "API 키(권장)",
    "API key and API token are generate by Lastline and given at the subscription time.":
      "API 키와 API 토큰은 Lastline에서 생성하며 구독 시 제공됩니다.",
    "API Key Auth":
      "API 키 인증",
    "API Key Auth (http_api_key)":
      "API 키 인증(http_api_key)",
    "API Key for accessing Lastline APIs":
      "Lastline API에 액세스하기 위한 API 키",
    "API Key Secret":
      "API 키 시크릿",
    "API Key Type":
      "API 키 유형",
    "API Permissions in Microsoft Graph":
      "Microsoft Graph의 API 권한",
    "API Port":
      "API 포트",
    "API Port (e.g 443)":
      "API 포트(예: 443)",
    "API Secret (JWT-Deprecated)":
      "API 시크릿(JWT-사용 중단됨)",
    "API Token (CB Response)":
      "API 토큰(CB Response)",
    "API Token (see detailed instructions)":
      "API 토큰(자세한 지침 참조)",
    "API Token (see Detailed Instructions)":
      "API 토큰(자세한 지침 참조)",
    "API Token for accessing Lastline APIs":
      "Lastline API에 액세스하기 위한 API 토큰",
    "API tokens have the same permissions as the user who creates them, and if the permissions of a user change, so do the permissions of the API token.":
      "API 토큰은 이를 생성한 사용자와 동일한 권한을 가지며, 사용자의 권한이 변경되면 API 토큰의 권한도 함께 변경됩니다.",
    "API version of QRadar (e.g., '12.0'). Minimum API version is 10.1. Since QRadar API v19, The timestamp fields should be provided as milliseconds epoch format instead of seconds.":
      "QRadar의 API 버전입니다(예: '12.0'). 최소 API 버전은 10.1입니다. QRadar API v19부터 타임스탬프 필드는 초가 아닌 밀리초 에포크 형식으로 제공해야 합니다.",
    "App ID":
      "앱 ID",
    "App Token":
      "앱 토큰",
    "App-only authentication":
      "앱 전용 인증",
    "Application ID / Client ID":
      "애플리케이션 ID / 클라이언트 ID",
    "Application ID or Client ID":
      "애플리케이션 ID 또는 클라이언트 ID",
    "Application redirect URI":
      "애플리케이션 리디렉션 URI",
    "Application Redirect URI":
      "애플리케이션 리디렉션 URI",
    "Application redirect URI (for authorization code mode)":
      "애플리케이션 리디렉션 URI(인증 코드 모드용)",
    "Application redirect URI (for Authorization Code mode)":
      "애플리케이션 리디렉션 URI(인증 코드 모드용)",
    "Application redirect URI (required for self-deployed Azure app)":
      "애플리케이션 리디렉션 URI(자체 배포 Azure 앱에 필요)",
    "Application Secret (Required for using Self Deployed Azure app)":
      "애플리케이션 시크릿(자체 배포 Azure 앱을 사용하는 경우 필수)",
    "Argument Name":
      "인수 이름",
    "As an alternative to Okta API tokens, you can interact with Okta APIs using scoped OAuth 2.0 access tokens for a number of Okta endpoints.":
      "Okta API 토큰 대신 범위가 지정된 OAuth 2.0 액세스 토큰을 사용하여 여러 Okta 엔드포인트의 Okta API와 상호 작용할 수 있습니다.",
    "As soon as the instance is set-up, the first pull will get the alarms generated in the last 10 minutes. After that, new alarms will be fetched every other minute, starting the last pull index.":
      "인스턴스 설정이 완료되면 첫 번째 풀에서 지난 10분 동안 생성된 알람을 가져옵니다. 그 이후에는 마지막 풀 인덱스부터 2분마다 새 알람을 가져옵니다.",
    "As the enrichment process is asynchronous, fetching enriched incidents takes longer. The integration was tested with 20+ notables simultaneously that were fetched and enriched after approximately ~4min.":
      "보강 프로세스가 비동기식이므로 보강된 인시던트를 가져오는 데 더 오래 걸립니다. 이 통합은 20개 이상의 notable을 동시에 가져와 보강하는 조건에서 테스트되었으며 약 4분이 소요되었습니다.",
    "Asset enrichment lookup tables":
      "자산 보강 조회 테이블",
    "Asset search enrichment":
      "자산 검색 보강",
    "Assign Prisma AIRS AI Red Teaming API permissions":
      "Prisma AIRS AI Red Teaming API 권한을 할당합니다",
    "Assign Prisma AIRS AI Runtime Security API permissions":
      "Prisma AIRS AI Runtime Security API 권한을 할당합니다",
    "Assign Prisma AIRS AI Supply Chain Security API permissions":
      "Prisma AIRS AI Supply Chain Security API 권한을 할당합니다",
    "Audit log type filter":
      "감사 로그 유형 필터",
    "Authenticate using an API-Key":
      "API 키를 사용한 인증",
    "Authentication Configuration":
      "인증 구성",
    "Authentication Flow":
      "인증 흐름",
    "Authentication URL":
      "인증 URL",
    "Authentication using API Token":
      "API 토큰을 사용한 인증",
    "Authentication using Azure Managed Identities":
      "Azure 관리 ID를 사용한 인증",
    "Authentication using OAuth 2.0 Authentication":
      "OAuth 2.0 인증을 사용한 인증",
    "Authentication Using the Authorization Code Flow (Delegated Permissions)":
      "인증 코드 흐름을 사용한 인증(위임된 권한)",
    "Authentication Using the Client Credentials Flow (Application Permissions)":
      "클라이언트 자격 증명 흐름을 사용한 인증(애플리케이션 권한)",
    "Authentication Using the User - Authorization Code Flow":
      "사용자를 사용한 인증 - 인증 코드 흐름",
    "Authorization code (for self-deployed mode)":
      "인증 코드(자체 배포 모드용)",
    "Authorization code (required for self-deployed Azure app)":
      "인증 코드(자체 배포 Azure 앱에 필요)",
    "Authorization code (run msgraph-generate-login-url command)":
      "인증 코드(msgraph-generate-login-url 명령 실행)",
    "Authorization Code flow (Delegated Permissions)":
      "인증 코드 흐름(위임된 권한)",
    "Authorization code on behalf of a user, used with self deployed Azure Applications.":
      "사용자를 대신한 인증 코드입니다. 자체 배포 Azure 애플리케이션과 함께 사용됩니다.",
    "Authorize Cortex for Entra ID Users (Self deployed Azure App)":
      "Entra ID 사용자에 대한 Cortex 승인(자체 배포 Azure 앱)",
    "Auto Activate Changes":
      "변경 사항 자동 활성화",
    "Auto Logout":
      "자동 로그아웃",
    "Automatically fetch and ingest Threatmon alarms as XSOAR incidents.":
      "Threatmon 알람을 자동으로 가져와 XSOAR 인시던트로 수집합니다.",
    "Available integrations":
      "사용 가능한 통합",
    "Base Command":
      "기본 명령",
    "Base url to Shodan API":
      "Shodan API의 기본 URL",
    "Based on what data needs to be pulled in through the integration, update the Domain Security Policy Permissions as well as Business Process Security Policy Permissions.":
      "통합을 통해 가져와야 하는 데이터에 따라 도메인 보안 정책 권한과 비즈니스 프로세스 보안 정책 권한을 업데이트합니다.",
    "Basic Auth":
      "기본 인증",
    "Basic Auth (http)":
      "기본 인증(http)",
    "Basic authentication - Fill in the email and password.":
      "기본 인증 - 이메일과 비밀번호를 입력합니다.",
    "Basic authentication - Fill in the Email and password.":
      "기본 인증 - 이메일과 비밀번호를 입력합니다.",
    "Basic authentication - Fill in the User Principal Name (UPN) and password.":
      "기본 인증 - 사용자 계정 이름(UPN)과 비밀번호를 입력합니다.",
    "Basic authorization using username and password.":
      "사용자 이름과 비밀번호를 사용한 기본 인증.",
    "Bearer Auth":
      "Bearer 인증",
    "Bearer Auth (http)":
      "Bearer 인증(http)",
    "Before creating an API client, ensure that you create an API role with all the required privileges as mentioned in the integration documentation. Then, associate the API client with that role.":
      "API 클라이언트를 생성하기 전에 통합 설명서에 명시된 모든 필수 권한이 포함된 API 역할을 생성해야 합니다. 그런 다음 해당 역할에 API 클라이언트를 연결합니다.",
    "Before you configure the integration, retrieve the API key from your Joe Security environment.":
      "통합을 구성하기 전에 Joe Security 환경에서 API 키를 가져오세요.",
    "BloodHound Enterprise Domain":
      "BloodHound Enterprise 도메인",
    "BloodHound Enterprise Domain (for example, https://example.bloodhoundenterprise.io)":
      "BloodHound Enterprise 도메인(예: https://example.bloodhoundenterprise.io)",
    "BloodHound Enterprise Domain URL":
      "BloodHound Enterprise 도메인 URL",
    "BloodHound Enterprise reduces risk in Active Directory and Microsoft Azure environments by continuously identifying and quantifying attack paths that attackers use to escalate privileges. The SpecterOps BloodHound Enterprise integration enables automated retrieval of attack path findings from BloodHound into Cortex, streamlining incident creation and investigation.":
      "BloodHound Enterprise는 공격자가 권한을 상승시키는 데 사용하는 공격 경로를 지속적으로 식별하고 정량화하여 Active Directory 및 Microsoft Azure 환경의 위험을 줄입니다. SpecterOps BloodHound Enterprise 통합을 사용하면 BloodHound에서 공격 경로 결과를 자동으로 가져와 Cortex로 수집할 수 있으며, 인시던트 생성 및 조사를 간소화합니다.",
    "Bot Client ID":
      "봇 클라이언트 ID",
    "Bot Client ID ((Team Chat App))":
      "봇 클라이언트 ID((Team Chat App))",
    "Bot Client Secret (Team Chat App)":
      "봇 클라이언트 시크릿(Team Chat App)",
    "Bot display name in Slack":
      "Slack에서의 봇 표시 이름",
    "Bot display name in Slack (Cortex by default)":
      "Slack에서의 봇 표시 이름(기본값은 Cortex)",
    "Bot icon in Slack - Image URL (Cortex icon by default)":
      "Slack의 봇 아이콘 - 이미지 URL(기본값: Cortex 아이콘)",
    "Bot ID":
      "봇 ID",
    "Bot Message":
      "봇 메시지",
    "Bot Password":
      "봇 비밀번호",
    "Bot Secret ID":
      "봇 시크릿 ID",
    "Bot Token":
      "봇 토큰",
    "Build a playbook and assign it as the default for this incident type.":
      "Playbook을 빌드하고 이 인시던트 유형의 기본값으로 지정하세요.",
    "Build a query to return relevant alerts.":
      "관련 경고를 반환하는 쿼리를 작성하세요.",
    "By clicking \"Authorize\", you hereby authorize Palo Alto Networks to (i) ingest data and perform actions such as suppression on behalf of you to and from Semgrep's public API, and (ii) further process such data to deliver our services to you. You confirm that you have the right to provide such authorization.":
      "\"승인\"을 클릭하면 (i) 사용자를 대신하여 Semgrep의 퍼블릭 API와 데이터를 주고받으며 데이터를 수집하고 억제와 같은 작업을 수행하고, (ii) 사용자에게 서비스를 제공하기 위해 해당 데이터를 추가로 처리하도록 Palo Alto Networks에 권한을 부여하게 됩니다. 사용자는 이러한 권한을 부여할 권리가 있음을 확인합니다.",
    "By clicking \"Authorize\", you hereby authorize Palo Alto Networks to (i) ingest data and perform actions such as suppression on behalf of you to and from Snyk's public API, and (ii) further process such data to deliver our services to you. You confirm that you have the right to provide such authorization.":
      "\"승인\"을 클릭하면 (i) 사용자를 대신하여 Snyk의 퍼블릭 API와 데이터를 주고받으며 데이터를 수집하고 억제와 같은 작업을 수행하고, (ii) 사용자에게 서비스를 제공하기 위해 해당 데이터를 추가로 처리하도록 Palo Alto Networks에 권한을 부여하게 됩니다. 사용자는 이러한 권한을 부여할 권리가 있음을 확인합니다.",
    "By clicking \"Authorize\", you hereby authorize Palo Alto Networks to (i) ingest data and perform actions such as suppression on behalf of you to and from SonarQube's public API, and (ii) further process such data to deliver our services to you. You confirm that you have the right to provide such authorization.":
      "\"승인\"을 클릭하면 (i) 사용자를 대신하여 SonarQube의 퍼블릭 API와 데이터를 주고받으며 데이터를 수집하고 억제와 같은 작업을 수행하고, (ii) 사용자에게 서비스를 제공하기 위해 해당 데이터를 추가로 처리하도록 Palo Alto Networks에 권한을 부여하게 됩니다. 사용자는 이러한 권한을 부여할 권리가 있음을 확인합니다.",
    "By clicking \"Authorize\", you hereby authorize Palo Alto Networks to (i) ingest data and perform actions such as suppression on behalf of you to and from Veracode's public API, and (ii) further process such data to deliver our services to you. You confirm that you have the right to provide such authorization.":
      "\"승인\"을 클릭하면 (i) 사용자를 대신하여 Veracode의 퍼블릭 API와 데이터를 주고받으며 데이터를 수집하고 억제와 같은 작업을 수행하고, (ii) 사용자에게 서비스를 제공하기 위해 해당 데이터를 추가로 처리하도록 Palo Alto Networks에 권한을 부여하게 됩니다. 사용자는 이러한 권한을 부여할 권리가 있음을 확인합니다.",
    "By default, SSL verification is enabled. If selected, the connection isn’t secure and all requests return an SSL error because the certificate cannot be verified.":
      "기본적으로 SSL 검증이 활성화되어 있습니다. 이 옵션을 선택하면 인증서를 검증할 수 없으므로 연결이 안전하지 않게 되며 모든 요청에서 SSL 오류가 반환됩니다.",
    "By default, the integration fetches incidents in an open state.":
      "기본적으로 통합은 열린 상태의 인시던트를 가져옵니다.",
    "By default, the Kafka instance uses a non SSL connection. Turnning on the insecure flag, or providing any certificate will switch to SSL connection.":
      "기본적으로 Kafka 인스턴스는 SSL이 아닌 연결을 사용합니다. insecure 플래그를 켜거나 인증서를 제공하면 SSL 연결로 전환됩니다.",
    "CA certificate of Kafka server (type pem)":
      "Kafka 서버의 CA 인증서(pem 형식)",
    "Certificate (Required for HTTPS)":
      "인증서(HTTPS에 필수)",
    "Certificate Password":
      "인증서 비밀번호",
    "Certificate Thumbprint (can be used instead of Client Secret)":
      "인증서 지문(Client Secret 대신 사용 가능)",
    "Certificate Thumbprint (optional for self-deployed Azure app)":
      "인증서 지문(자체 배포된 Azure 앱의 경우 선택 사항)",
    "Chat and channel monitoring, data security scanning, and security posture for Teams":
      "Teams용 채팅 및 채널 모니터링, 데이터 보안 스캔, 보안 태세",
    "Check “Fetches-incidents” radio button":
      "\"Fetches-incidents\" 라디오 버튼을 선택합니다",
    "Check this box to use OAuth 2.0 authentication. See (?) for more information.":
      "OAuth 2.0 인증을 사용하려면 이 확인란을 선택합니다. 자세한 내용은 (?)를 참조하세요.",
    "Check Trust any certificate (not secure) checkbox":
      "\"모든 인증서 신뢰(안전하지 않음)\" 확인란을 선택합니다",
    "Choose a device group name.":
      "디바이스 그룹 이름을 선택합니다.",
    "Choose if to check “Fetch Existing Alerts” and/or “Also Fetch Informational Alerts” checkboxes":
      "\"Fetch Existing Alerts\" 및/또는 \"Also Fetch Informational Alerts\" 확인란을 선택할지 여부를 선택합니다",
    "Choose max fetch (up to 200)":
      "최대 가져오기 수를 선택합니다(최대 200).",
    "Choose Orca Alert - Classification as your classifier":
      "분류기로 \"Orca Alert - Classification\"을 선택합니다",
    "Choose Orca Mapper as your mapper":
      "매퍼로 \"Orca Mapper\"를 선택합니다",
    "Choose which Microsoft 365 services to connect. Each service maps to specific Microsoft Graph API permissions.":
      "연결할 Microsoft 365 서비스를 선택하세요. 각 서비스는 특정 Microsoft Graph API 권한에 매핑됩니다.",
    "Choose your API version":
      "API 버전을 선택하세요",
    "Chrome options (Advanced. See [?])":
      "Chrome 옵션(고급. [?] 참조)",
    "Classification description (only human readable)":
      "분류 설명(사람이 읽을 수 있는 형식만 해당)",
    "Classification long name":
      "분류 긴 이름",
    "Classifiers and Mappers":
      "분류기 및 매퍼",
    "Clear the “Query only application events configured in IAM Configuration” checkbox to use a custom fetch query filter expression. The expression must be in SCIM syntax, and include the add and remove event types, as well as the application ID.":
      "사용자 지정 가져오기 쿼리 필터 표현식을 사용하려면 \"Query only application events configured in IAM Configuration\" 확인란의 선택을 해제하세요. 표현식은 SCIM 구문이어야 하며 추가 및 제거 이벤트 유형과 애플리케이션 ID를 포함해야 합니다.",
    "Click “Test” button to make sure Api Key is valid and then click the “Done” button":
      "\"Test\" 버튼을 클릭하여 API 키가 유효한지 확인한 다음 \"Done\" 버튼을 클릭합니다",
    "Click “Test” to validate the connection.":
      "\"Test\"를 클릭하여 연결을 검증합니다.",
    "Click the data from the Splunk fields to map it to Cortex.":
      "Splunk 필드의 데이터를 클릭하여 Cortex에 매핑합니다.",
    "Click the fetched data.":
      "가져온 데이터를 클릭합니다.",
    "Click the username in the upper-right corner.":
      "오른쪽 위 모서리의 사용자 이름을 클릭합니다.",
    "Click your classifier.":
      "분류기를 클릭합니다.",
    "Click your mapper.":
      "매퍼를 클릭합니다.",
    "Client authentication":
      "클라이언트 인증",
    "Client certificate (‘client.crt’ file)":
      "클라이언트 인증서('client.crt' 파일)",
    "Client certificate (type pem)":
      "클라이언트 인증서(pem 형식)",
    "Client certificate key (type pem)":
      "클라이언트 인증서 키(pem 형식)",
    "Client certificates":
      "클라이언트 인증서",
    "Client certificates content (see `client.crt` in Integration Tips)":
      "클라이언트 인증서 내용(통합 팁의 `client.crt` 참조)",
    "Client credentials":
      "클라이언트 자격 증명",
    "Client Credentials":
      "클라이언트 자격 증명",
    "Client GUID":
      "클라이언트 GUID",
    "Client Id (for OAuth 2.0)":
      "클라이언트 ID(OAuth 2.0용)",
    "Client ID (OAuth)":
      "클라이언트 ID(OAuth)",
    "Client ID and Client Secret":
      "클라이언트 ID 및 클라이언트 시크릿",
    "Client Id for OAuth 2.0":
      "OAuth 2.0용 클라이언트 ID",
    "Client ID/JWT Audience (aud)":
      "클라이언트 ID/JWT 대상(aud)",
    "Client Name":
      "클라이언트 이름",
    "Client private key":
      "클라이언트 개인 키",
    "Client private key (‘client.key’ file)":
      "클라이언트 개인 키('client.key' 파일)",
    "Client private key content (e.g. `client.key`)":
      "클라이언트 개인 키 내용(예: `client.key`)",
    "Client Secret (for OAuth 2.0)":
      "클라이언트 시크릿(OAuth 2.0용)",
    "Client Secret (OAuth)":
      "클라이언트 시크릿(OAuth)",
    "Client Secret for OAuth 2.0":
      "OAuth 2.0용 클라이언트 시크릿",
    "Client Secret Key":
      "클라이언트 시크릿 키",
    "Client type":
      "클라이언트 유형",
    "Close Detection on Incident Closure":
      "인시던트 종료 시 탐지 종료",
    "Close Mirrored Cortex Incidents (Incoming Mirroring)":
      "미러링된 Cortex 인시던트 종료(수신 미러링)",
    "Close Mirrored Prisma Cloud Alert":
      "미러링된 Prisma Cloud 경고 종료",
    "Close Mirrored Splunk ES Events (Outgoing Mirroring)":
      "미러링된 Splunk ES 이벤트 종료(발신 미러링)",
    "Close Mirrored Splunk Notable Event":
      "미러링된 Splunk Notable Event 종료",
    "Cloud Name (i.e., <https://zsapi.zscalertwo.net>)":
      "클라우드 이름(예: <https://zsapi.zscalertwo.net>)",
    "Collect Configuration":
      "구성 수집",
    "Collect Logs":
      "로그 수집",
    "Comma-separated configuration for advanced parameters values. e.g. EVENTS_INTERVAL_SECS=20,FETCH_SLEEP=5":
      "고급 매개변수 값에 대한 쉼표로 구분된 구성입니다. 예: EVENTS_INTERVAL_SECS=20,FETCH_SLEEP=5",
    "Comma-separated finding statuses to fetch. Known values are OPEN, REOPENED, and DONE. The default excludes DONE so that remediated findings do not create incidents, while still covering findings that were reopened. Only applies when Findings scope is \"Supplier Findings\". Leave empty to fetch all statuses.":
      "가져올 결과 상태를 쉼표로 구분하여 지정합니다. 알려진 값은 OPEN, REOPENED, DONE입니다. 기본값은 DONE을 제외하므로 해결된 결과로는 인시던트가 생성되지 않으며, 다시 열린 결과는 계속 포함됩니다. Findings scope가 \"Supplier Findings\"인 경우에만 적용됩니다. 모든 상태를 가져오려면 비워 두세요.",
    "Command Example":
      "명령 예시",
    "Comment tag from Splunk":
      "Splunk에서 가져온 댓글 태그",
    "Comment tag to Splunk":
      "Splunk로 보내는 댓글 태그",
    "Commercial Region (https://analysiscenter.veracode.com/)":
      "상업용 리전(https://analysiscenter.veracode.com/)",
    "Common parameters":
      "공통 매개변수",
    "Configuration Steps":
      "구성 단계",
    "Configure a JWT signing key by accessing: All→System OAuth→JWT Keys using the keystore from above and keep the Key ID as it will be used as kid integration parameter.":
      "다음 경로로 이동하여 JWT 서명 키를 구성합니다: All→System OAuth→JWT Keys. 위의 키 저장소를 사용하고, Key ID는 `kid` 통합 매개변수로 사용되므로 기록해 둡니다.",
    "Configure additional integration instances, adding the workflow URL for each Team. You can then send notifications to multiple teams at once, or select the integration instance to use via the playbook task editor.":
      "추가 통합 인스턴스를 구성하고 각 팀의 워크플로 URL을 추가합니다. 그러면 여러 팀에 동시에 알림을 보내거나 Playbook 작업 편집기에서 사용할 통합 인스턴스를 선택할 수 있습니다.",
    "Configure Integration":
      "통합 구성",
    "Configure Microsoft Teams on Cortex or Cortex XSIAM":
      "Cortex 또는 Cortex XSIAM에서 Microsoft Teams를 구성합니다",
    "Configure the classification. Make sure that your non ES incident fields are associated with your custom incident type.":
      "분류를 구성합니다. ES가 아닌 인시던트 필드가 사용자 지정 인시던트 유형과 연결되어 있는지 확인하세요.",
    "Configure the default threshold for each indicator type in the instance settings.":
      "인스턴스 설정에서 지표 유형별 기본 임계값을 구성합니다.",
    "Configure the instance":
      "인스턴스 구성",
    "Configure the Instance to Fetch Attack Paths from BloodHound Enterprise":
      "BloodHound Enterprise에서 공격 경로를 가져오도록 인스턴스 구성",
    "Configure the integration instance in Cortex":
      "Cortex에서 통합 인스턴스 구성",
    "Configure the integration to fetch incidents (see the Integration documentation for details).":
      "인시던트를 가져오도록 통합을 구성합니다(자세한 내용은 통합 문서를 참조하세요).",
    "Configure the mapping. Make sure to map your non ES fields accordingly and make sure that these incident fields are associated with their custom incident type.":
      "매핑을 구성합니다. ES가 아닌 필드를 적절하게 매핑하고, 이러한 인시던트 필드가 해당 사용자 지정 인시던트 유형과 연결되어 있는지 확인하세요.",
    "Configure VulnDB on Cortex":
      "Cortex에서 VulnDB 구성",
    "Configure Your MongoDB Atlas Instance":
      "MongoDB Atlas 인스턴스 구성",
    "Connect SonarQube":
      "SonarQube 연결",
    "Connect Veracode":
      "Veracode 연결",
    "Connection Method":
      "연결 방법",
    "Connection Security":
      "연결 보안",
    "Connection URI":
      "연결 URI",
    "Connector ID (CB Defense)":
      "커넥터 ID(CB Defense)",
    "Content types to fetch":
      "가져올 콘텐츠 유형",
    "Context Output":
      "컨텍스트 출력",
    "Copy the Access Token to the “Personal Access Token” field":
      "액세스 토큰을 \"Personal Access Token\" 필드에 복사합니다",
    "Copy the API key.":
      "API 키를 복사합니다.",
    "Copy the Client ID and Client Secret":
      "클라이언트 ID와 클라이언트 시크릿을 복사합니다",
    "Copy the Client ID and Client Secret Key to a safe place.":
      "클라이언트 ID와 클라이언트 시크릿 키를 안전한 곳에 복사해 둡니다.",
    "Copy the generated API token. This would be required to be configured while adding the RiskSense instance on Cortex.":
      "생성된 API 토큰을 복사합니다. 이 토큰은 Cortex에 RiskSense 인스턴스를 추가할 때 구성해야 합니다.",
    "Copy the Runtime API Key for scanner operations":
      "스캐너 작업용 Runtime API 키를 복사합니다",
    "Copy your API key.":
      "API 키를 복사합니다.",
    "Copy your Terraform Enterprise server domain":
      "Terraform Enterprise 서버 도메인을 복사합니다",
    "Corporation Name (should match the pattern [0-9a-z_.-]+)":
      "코퍼레이션 이름([0-9a-z_.-]+ 패턴과 일치해야 함)",
    "Cortex Severity":
      "Cortex 심각도",
    "Cortex Tenant":
      "Cortex 테넌트",
    "Cortex uses the Workday integration to fetch reports and create XSOAR incidents that correspond to the CRUD operation(s) in the report. For example, if you run a full report that includes 5 new employees, 3 terminated employees, and 10 employee profiles that were updated, 18 unique incidents would be created in XSOAR.":
      "Cortex는 Workday 통합을 사용하여 보고서를 가져오고 보고서의 CRUD 작업에 해당하는 XSOAR 인시던트를 생성합니다. 예를 들어 신규 직원 5명, 퇴직 직원 3명, 업데이트된 직원 프로필 10개가 포함된 전체 보고서를 실행하면 고유한 인시던트 18개가 XSOAR에 생성됩니다.",
    "Create a JWT provider with a JWT signing key by accessing: All→System OAuth→JWT providers. Claim Name sub in Standard Claims has to be existing non-admin servicenow user with all necessary roles.":
      "다음 경로로 이동하여 JWT 서명 키가 있는 JWT 공급자를 생성합니다: All→System OAuth→JWT providers. Standard Claims의 Claim Name `sub`는 필요한 모든 역할을 가진 기존의 비관리자 ServiceNow 사용자여야 합니다.",
    "Create a local user with a sufficient role.":
      "충분한 역할을 가진 로컬 사용자를 생성합니다.",
    "Create a new instance":
      "새 인스턴스 생성",
    "Create a new Mattermost user (to act as the Mattermost Bot)":
      "새 Mattermost 사용자를 생성합니다(Mattermost 봇 역할)",
    "Create a new service account or OAuth2 client":
      "새 서비스 계정 또는 OAuth2 클라이언트를 생성합니다",
    "Create a workflow in Microsoft Teams.":
      "Microsoft Teams에서 워크플로를 생성합니다.",
    "Create an image or PDF file from a URL or HTML body.":
      "URL 또는 HTML 본문에서 이미지 또는 PDF 파일을 생성합니다.",
    "Create an Integration System Security Group (Unconstrained) using the ‘Create Security Group’ task":
      "'Create Security Group' 작업을 사용하여 Integration System Security Group(Unconstrained)을 생성합니다",
    "Create an JWT app.":
      "JWT 앱을 생성합니다.",
    "Create an Server-to-Server OAuth app.":
      "Server-to-Server OAuth 앱을 생성합니다.",
    "Create API Access Policy or add Authentication profile to existing Policy by accessing: All→System Web Services→API Access Policies→Rest API Access Policies":
      "다음 경로로 이동하여 API Access Policy를 생성하거나 기존 정책에 Authentication profile을 추가합니다: All→System Web Services→API Access Policies→Rest API Access Policies",
    "Create Incidents for Escalated Detections":
      "에스컬레이션된 탐지에 대한 인시던트 생성",
    "Create Incidents for Prioritized Detections":
      "우선순위가 지정된 탐지에 대한 인시던트 생성",
    "Create Indicators from Relationships":
      "관계에서 지표 생성",
    "Create OAuth2 Client in Strata Cloud Manager":
      "Strata Cloud Manager에서 OAuth2 클라이언트를 생성합니다",
    "Create the Demisto Bot in Microsoft Teams":
      "Microsoft Teams에서 Demisto Bot을 생성합니다",
    "Creating an API Key":
      "API 키 생성",
    "Creating or updating the encryption master key of Palo Alto Networks Firewall or Panorama invalidates the current API key and requires obtaining a new one. All subsequent commands will raise an “Invalid Credential” error until a new API key is obtained and the integration instance is updated accordingly.":
      "Palo Alto Networks Firewall 또는 Panorama의 암호화 마스터 키를 생성하거나 업데이트하면 현재 API 키가 무효화되므로 새 키를 받아야 합니다. 새 API 키를 받아 통합 인스턴스를 업데이트할 때까지 이후의 모든 명령에서 \"Invalid Credential\" 오류가 발생합니다.",
    "Crowdsourced Yara Rules Threshold":
      "크라우드소싱 Yara 규칙 임계값",
    "CSV of the Splunk lookup tables from which to take the Asset enrichment data.":
      "자산 보강 데이터를 가져올 Splunk 조회 테이블의 CSV입니다.",
    "CSV of the Splunk lookup tables from which to take the Identity enrichment data.":
      "ID 보강 데이터를 가져올 Splunk 조회 테이블의 CSV입니다.",
    "Currently, OpenSSH keys are not supported. Only RSA keys (.PEM files) are supported.":
      "현재 OpenSSH 키는 지원되지 않습니다. RSA 키(.PEM 파일)만 지원됩니다.",
    "Custom New Incident Welcome Message":
      "사용자 지정 새 인시던트 환영 메시지",
    "Customer name":
      "고객 이름",
    "Customer Name":
      "고객 이름",
    "CVE- is a constant string":
      "`CVE-`는 고정 문자열입니다",
    "Data profiles to allow exemption":
      "예외를 허용할 데이터 프로필",
    "Date Format in Workday Report":
      "Workday 보고서의 날짜 형식",
    "Date or relative timestamp to start fetching incidents from, in the format of <number> <time unit>. For example, 2 minutes, 12 hours, 6 days, 2 weeks, 3 months, 1 year, ISO timestamp. Default is 3 days.":
      "인시던트 가져오기를 시작할 날짜 또는 상대 타임스탬프이며, 형식은 <number> <time unit>입니다. 예: 2 minutes, 12 hours, 6 days, 2 weeks, 3 months, 1 year, ISO 타임스탬프. 기본값은 3 days입니다.",
    "Date YYYY-MM-dd finishing date (latest)":
      "종료 날짜 YYYY-MM-dd(가장 최근)",
    "Date YYYY-MM-dd starting date (earliest)":
      "시작 날짜 YYYY-MM-dd(가장 오래된)",
    "DBotScore mapping":
      "DBotScore 매핑",
    "Deactivation date field":
      "비활성화 날짜 필드",
    "Deactive User URL":
      "사용자 비활성화 URL",
    "Dedicated Slack channel to receive notifications":
      "알림을 받을 전용 Slack 채널",
    "Default ‘wait-time’ is 20 seconds.":
      "기본 'wait-time'은 20초입니다.",
    "Default Behavior":
      "기본 동작",
    "Default Hostname or IP Address":
      "기본 호스트 이름 또는 IP 주소",
    "Default max total wait for results (in milliseconds)":
      "결과 대기 총 시간의 기본 최대값(밀리초)",
    "Default maximum number of records to retrieve":
      "검색할 레코드 수의 기본 최대값",
    "Default requestor ID for adding people to incidents":
      "인시던트에 사용자를 추가할 때의 기본 요청자 ID",
    "Default team":
      "기본 팀",
    "Default Tenant Services Group ID to use for API calls. Example: 1234567890.":
      "API 호출에 사용할 기본 Tenant Services Group ID입니다. 예: 1234567890.",
    "Default ticket type for running ticket commands and fetching incidents":
      "티켓 명령 실행 및 인시던트 가져오기에 사용할 기본 티켓 유형",
    "Default user":
      "기본 사용자",
    "Define a query to determine which offenses to fetch. e.g. status=OPEN. See ? for more details.":
      "가져올 오펜스를 결정하는 쿼리를 정의합니다. 예: status=OPEN. 자세한 내용은 ?를 참조하세요.",
    "Defining a broad rule-set will cause the integration to create multiple redundant incidents.":
      "광범위한 규칙 집합을 정의하면 통합에서 중복된 인시던트가 여러 개 생성됩니다.",
    "Delegated user authentication":
      "위임된 사용자 인증",
    "Dependencies (Python packages)":
      "종속성(Python 패키지)",
    "Depending on the authentication method you use, the integration parameters might change.":
      "사용하는 인증 방법에 따라 통합 매개변수가 달라질 수 있습니다.",
    "Depending on the selected authentication method, you may need to create a dedicated application or use a dedicated user account for the integration. Each method requires specific permissions and configuration steps to ensure Security & Compliance commands can be executed successfully.":
      "선택한 인증 방법에 따라 통합 전용 애플리케이션을 만들거나 전용 사용자 계정을 사용해야 할 수 있습니다. Security & Compliance 명령을 성공적으로 실행하려면 각 방법마다 특정 권한과 구성 단계가 필요합니다.",
    "Depending on the system load, the initial fetch might take a long time.":
      "시스템 부하에 따라 최초 가져오기에 오랜 시간이 걸릴 수 있습니다.",
    "Deprecated starting from version 10.35.0 of Jamf.":
      "Jamf 버전 10.35.0부터 사용 중단되었습니다.",
    "Deprecated. Use O365 - Security And Compliance - Content Search v2 instead.":
      "사용 중단되었습니다. 대신 O365 - Security And Compliance - Content Search v2을(를) 사용하세요.",
    "Deprecated. Use the Slack v3 integration instead.":
      "사용 중단되었습니다. 대신 Slack v3 통합을 사용하세요.",
    "Detailed Instructions…":
      "자세한 지침…",
    "Details for Silent Push workflow":
      "Silent Push 워크플로 세부 정보",
    "Detection Close Reason for Incident Closure":
      "인시던트 종료 시 탐지 종료 사유",
    "Detection close reason to set in Vectra when closing incidents in XSOAR. Default value is 'Remediated'.":
      "XSOAR에서 인시던트를 종료할 때 Vectra에 설정할 탐지 종료 사유입니다. 기본값은 'Remediated'입니다.",
    "Detection close reason to set in Vectra when closing incidents in XSOAR. Default value is 'Remediated'. Note: This parameter is only used when close detection on incident closer is 'checked' and the mirroring direction is set to 'Outgoing' or 'Incoming And Outgoing'.":
      "XSOAR에서 인시던트를 종료할 때 Vectra에 설정할 탐지 종료 사유입니다. 기본값은 'Remediated'입니다. 참고: 이 매개변수는 close detection on incident closer가 'checked'이고 미러링 방향이 'Outgoing' 또는 'Incoming And Outgoing'으로 설정된 경우에만 사용됩니다.",
    "Detection Status for Incident Reopen":
      "인시던트 다시 열기 시 탐지 상태",
    "Detection status to set in Vectra when incident is reopened in XSOAR. Default value is 'Escalated'.":
      "XSOAR에서 인시던트를 다시 열 때 Vectra에 설정할 탐지 상태입니다. 기본값은 'Escalated'입니다.",
    "Detection status to set in Vectra when incident is reopened in XSOAR. Default value is 'Escalated'. Note: This parameter is only used when open detection on incident reopen is 'checked' and the mirroring direction is set to 'Outgoing' or 'Incoming And Outgoing'.":
      "XSOAR에서 인시던트를 다시 열 때 Vectra에 설정할 탐지 상태입니다. 기본값은 'Escalated'입니다. 참고: 이 매개변수는 open detection on incident reopen이 'checked'이고 미러링 방향이 'Outgoing' 또는 'Incoming And Outgoing'으로 설정된 경우에만 사용됩니다.",
    "Determines when employees are synced from Workday, i.e., when are the User Profile in XSOAR, and the users in the applications, created. Set to 0 to sync hires on their hire date. Leave empty to sync the hires immediately.":
      "Workday에서 직원을 동기화하는 시점, 즉 XSOAR의 사용자 프로필과 애플리케이션의 사용자가 생성되는 시점을 결정합니다. 입사일에 신규 입사자를 동기화하려면 0으로 설정하세요. 신규 입사자를 즉시 동기화하려면 비워 두세요.",
    "Determines when to enable the Active Directory accounts of employees. Set to 0 to enable the Active Directory accounts on their hire date. Leave empty to enable the accounts immediately. Note that this is effective only when the employees are already synced to XSOAR, so you should set a number lower, or equal to, the value in the *Number of days before hire date to sync hires* parameter.":
      "직원의 Active Directory 계정을 활성화하는 시점을 결정합니다. 입사일에 Active Directory 계정을 활성화하려면 0으로 설정하세요. 계정을 즉시 활성화하려면 비워 두세요. 이 설정은 직원이 이미 XSOAR에 동기화된 경우에만 적용되므로, *Number of days before hire date to sync hires* 매개변수의 값보다 작거나 같은 숫자를 설정해야 합니다.",
    "Determines whether to return all results, which can number in the thousands. If “true”, returns all results and overrides the _fullResponse_, _long_ arguments (if set to “false”) in a command. If “false”, the _fullResponse_, _long_ arguments in the command determines how results are returned.":
      "수천 건에 달할 수 있는 모든 결과를 반환할지 여부를 결정합니다. “true”인 경우 모든 결과를 반환하며 명령의 _fullResponse_, _long_ 인수(“false”로 설정된 경우)를 재정의합니다. “false”인 경우 명령의 _fullResponse_, _long_ 인수에 따라 결과 반환 방식이 결정됩니다.",
    "Disable Automatic Notifications":
      "자동 알림 비활성화",
    "DLP API Base URL":
      "DLP API 기본 URL",
    "DLP API base URL for DLP management operations (dictionaries, patterns, filtering profiles). Default is the global DLP endpoint. Change only if using a regional or custom DLP endpoint.":
      "DLP 관리 작업(사전, 패턴, 필터링 프로필)을 위한 DLP API 기본 URL입니다. 기본값은 글로벌 DLP 엔드포인트입니다. 리전별 또는 사용자 지정 DLP 엔드포인트를 사용하는 경우에만 변경하세요.",
    "DLP Regions":
      "DLP 리전",
    "Do not check for Cortex version 8":
      "Cortex 버전 8을 확인하지 않음",
    "Domain Controller":
      "도메인 컨트롤러",
    "Domain Malicious Threshold. Minimum number of positive results from VT scanners to consider the Domain malicious.":
      "도메인 악성 임곗값. 도메인을 악성으로 간주하기 위해 필요한 VT 스캐너의 양성 결과 최소 개수입니다.",
    "Domain of illuminate server to use (format - server.that_you_use.com - No http/https)":
      "사용할 illuminate 서버의 도메인(형식 - server.that_you_use.com - http/https 제외)",
    "Domain Popularity Ranking Threshold":
      "도메인 인기도 순위 임곗값",
    "Domain Relationships":
      "도메인 관계",
    "Domain Suspicious Threshold. Minimum number of positive and suspicious results from VT scanners to consider the Domain suspicious.":
      "도메인 의심 임곗값. 도메인을 의심스러운 것으로 간주하기 위해 필요한 VT 스캐너의 양성 및 의심 결과 최소 개수입니다.",
    "Domain Threshold. Minimum number of positive results from VT scanners to consider the domain malicious.":
      "도메인 임곗값. 도메인을 악성으로 간주하기 위해 필요한 VT 스캐너의 양성 결과 최소 개수입니다.",
    "Drag the value to the appropriate incident type.":
      "값을 해당하는 인시던트 유형으로 끌어다 놓습니다.",
    "DXL documentation":
      "DXL 문서",
    "Each access token enables the bearer to perform specific actions on specific Okta endpoints, with that ability controlled by which scopes the access token contains.":
      "각 액세스 토큰을 통해 소유자는 특정 Okta 엔드포인트에서 특정 작업을 수행할 수 있으며, 이 권한은 액세스 토큰에 포함된 스코프에 의해 제어됩니다.",
    "Each log type has its own query field in the instance configuration.":
      "각 로그 유형에는 인스턴스 구성에 고유한 쿼리 필드가 있습니다.",
    "Each report has a unique URL, which you enter as one of the integration instance parameters. If you want to fetch multiple reports, each report will require its own integration instance.":
      "각 보고서에는 고유한 URL이 있으며, 이를 통합 인스턴스 매개변수 중 하나로 입력합니다. 여러 보고서를 가져오려면 보고서마다 별도의 통합 인스턴스가 필요합니다.",
    "Elastic API Port":
      "Elastic API 포트",
    "Email (Password for basic authentication only)":
      "이메일(기본 인증의 경우에만 비밀번호)",
    "Email / User Principal Name (Required)":
      "이메일/사용자 계정 이름(필수)",
    "Email address of the XSOAR delegated Teams user (e.g. \"example@demisto.com\")":
      "XSOAR 위임된 Teams 사용자의 이메일 주소(예: \"example@demisto.com\")",
    "Email address to associate for this integration.":
      "이 통합에 연결할 이메일 주소입니다.",
    "Enable Cortex Assistant AI integration in Slack. When enabled, users can mention the bot to interact with AI agents for security analysis, threat intelligence, and automated responses.":
      "Slack에서 Cortex Assistant AI 통합을 활성화합니다. 활성화하면 사용자가 봇을 멘션하여 AI 에이전트와 상호작용하고 보안 분석, 위협 인텔리전스, 자동화된 대응을 이용할 수 있습니다.",
    "Enable Incident Mirroring":
      "인시던트 미러링 사용",
    "Enable Okta Authentication Log and Configuration Collection":
      "Okta 인증 로그 및 구성 수집 사용",
    "Enable Outbound File Mirroring":
      "발신 파일 미러링 사용",
    "Enable permissions.":
      "권한을 활성화합니다.",
    "Enable score analyzing by Crowdsourced Yara Rules, Sigma, and IDS":
      "Crowdsourced Yara Rules, Sigma, IDS를 통한 점수 분석 사용",
    "Enable Splunk statuses marked as “End Status” to close on mirror (Incoming Mirroring)":
      "“End Status”로 표시된 Splunk 상태를 미러링 시 종료하도록 설정(수신 미러링)",
    "Enable this to fetch assets that correlate to the fetched offenses.":
      "이 옵션을 활성화하면 가져온 오펜스와 연관된 자산을 가져옵니다.",
    "Enable TLS on the HTTP interface of your Elasticsearch cluster (required for the token service).":
      "Elasticsearch 클러스터의 HTTP 인터페이스에서 TLS를 활성화합니다(토큰 서비스에 필요).",
    "Enable Token Authentication":
      "토큰 인증 사용",
    "Enabled AI assistant":
      "AI 어시스턴트 사용",
    "Enabling this checkbox closes the detection in Vectra when the incident is closed in XSOAR.":
      "이 확인란을 선택하면 XSOAR에서 인시던트가 종료될 때 Vectra에서 탐지가 종료됩니다.",
    "Enabling this checkbox closes the detection in Vectra when the incident is closed in XSOAR. Note: This parameter is only used when the mirroring direction is set to 'Outgoing' or 'Incoming And Outgoing'.":
      "이 확인란을 선택하면 XSOAR에서 인시던트가 종료될 때 Vectra에서 탐지가 종료됩니다. 참고: 이 매개변수는 미러링 방향이 'Outgoing' 또는 'Incoming And Outgoing'으로 설정된 경우에만 사용됩니다.",
    "Enabling this checkbox generates incidents for escalated events detections. If not selected, incidents are created for all events detections.":
      "이 확인란을 선택하면 에스컬레이션된 이벤트 탐지에 대해 인시던트가 생성됩니다. 선택하지 않으면 모든 이벤트 탐지에 대해 인시던트가 생성됩니다.",
    "Enabling this checkbox generates incidents for prioritized events detections. If not selected, incidents are created for all events detections.":
      "이 확인란을 선택하면 우선순위가 지정된 이벤트 탐지에 대해 인시던트가 생성됩니다. 선택하지 않으면 모든 이벤트 탐지에 대해 인시던트가 생성됩니다.",
    "Enabling this checkbox opens the detection in Vectra when the incident is reopened in XSOAR.":
      "이 확인란을 선택하면 XSOAR에서 인시던트가 다시 열릴 때 Vectra에서 탐지가 열립니다.",
    "Enabling this checkbox opens the detection in Vectra when the incident is reopened in XSOAR. Note: This parameter is only used when the mirroring direction is set to 'Outgoing' or 'Incoming And Outgoing'.":
      "이 확인란을 선택하면 XSOAR에서 인시던트가 다시 열릴 때 Vectra에서 탐지가 열립니다. 참고: 이 매개변수는 미러링 방향이 'Outgoing' 또는 'Incoming And Outgoing'으로 설정된 경우에만 사용됩니다.",
    "Endpoint URI":
      "엔드포인트 URI",
    "Enrichment Timeout (Minutes)":
      "보강 제한 시간(분)",
    "Enrichment types":
      "보강 유형",
    "Enrichment Types":
      "보강 유형",
    "Ensure Appropriate Role":
      "적절한 역할 확인",
    "Enter a meaningful name and a description for the API, and click Create Key.":
      "API의 알아보기 쉬운 이름과 설명을 입력한 후 Create Key를 클릭합니다.",
    "Enter a name for the API key and configure the desired settings.":
      "API 키의 이름을 입력하고 원하는 설정을 구성합니다.",
    "Enter a value for the UPN parameter in the integration configuration.":
      "통합 구성의 UPN 매개변수에 값을 입력합니다.",
    "Enter connection parameters. (Server URL, Client ID & Client Secret Key)":
      "연결 매개변수를 입력합니다. (Server URL, Client ID, Client Secret Key)",
    "Enter the email address the key should be issued to and submit the signup form.":
      "키를 발급받을 이메일 주소를 입력하고 가입 양식을 제출합니다.",
    "Enter the relevant tag name for mirror notes.":
      "미러링 노트에 사용할 관련 태그 이름을 입력합니다.",
    "Enter your Customer Name and API Key provided by the ThreatX SOC. You can request your Customer Name and API Key by opening a support ticket via support@threatx.com.":
      "ThreatX SOC에서 제공한 Customer Name과 API Key를 입력합니다. support@threatx.com으로 지원 티켓을 열어 Customer Name과 API Key를 요청할 수 있습니다.",
    "Entity Types":
      "엔티티 유형",
    "Environment ID":
      "환경 ID",
    "Environment ID is available under the PingOne Dashboard->Environment Properties.":
      "환경 ID는 PingOne Dashboard->Environment Properties에서 확인할 수 있습니다.",
    "Escape URLs":
      "URL 이스케이프",
    "Even if the password is incorrect, the integration will attempt to authenticate using it.":
      "비밀번호가 올바르지 않더라도 통합은 해당 비밀번호로 인증을 시도합니다.",
    "Event fields to return from the events query (CAUTION this parameter is correlated to the incoming mapper, and changing the values may adversely affect mapping)":
      "이벤트 쿼리에서 반환할 이벤트 필드(주의: 이 매개변수는 수신 매퍼와 연관되어 있으므로 값을 변경하면 매핑에 악영향을 줄 수 있습니다)",
    "Event types to fetch":
      "가져올 이벤트 유형",
    "Events will be fetched only for User Profiles with a Source Priority value less than or equal to the value of this parameter.":
      "이벤트는 Source Priority 값이 이 매개변수의 값보다 작거나 같은 사용자 프로필에 대해서만 가져옵니다.",
    "Exact name of the rule or ruleset you want to filter on. Leave empty to receive all.":
      "필터링할 규칙 또는 규칙 집합의 정확한 이름입니다. 모두 수신하려면 비워 두세요.",
    "Existing users":
      "기존 사용자",
    "Exploit publish date":
      "익스플로잇 게시일",
    "Extensive Logging":
      "상세 로깅",
    "Feed Types":
      "피드 유형",
    "Fetch":
      "가져오기",
    "Fetch aggregate records (instead of messages)":
      "집계 레코드 가져오기(메시지 대신)",
    "Fetch Alert Severity Threshold Higher Than":
      "가져올 알림 심각도 임곗값(이보다 높은 항목)",
    "Fetch Alerts":
      "알림 가져오기",
    "Fetch backwards window - the time overlap for each fetch to account for the gap between event creation and indexing on Splunk. This helps prevent data gaps caused by ingestion lag.":
      "가져오기 역방향 기간 - Splunk에서 이벤트 생성과 인덱싱 사이의 시간 차이를 고려하기 위한 각 가져오기의 중복 시간입니다. 이를 통해 수집 지연으로 인한 데이터 누락을 방지할 수 있습니다.",
    "Fetch backwards window - this backward window is for cases where there is a gap between the event occurrence time and the event index time on the server.":
      "가져오기 역방향 기간 - 이 역방향 기간은 이벤트 발생 시간과 서버의 이벤트 인덱스 시간 사이에 차이가 있는 경우에 사용합니다.",
    "Fetch delta - The delta time in each batch. e.g. 1 hour, 3 minutes.":
      "가져오기 델타 - 각 배치의 시간 간격입니다. 예: 1 hour, 3 minutes.",
    "Fetch emails in HTML format":
      "HTML 형식의 이메일 가져오기",
    "Fetch event types":
      "가져올 이벤트 유형",
    "Fetch events (logs) from Splunk into Cortex":
      "Splunk에서 이벤트(로그)를 Cortex로 가져옵니다",
    "Fetch incident query":
      "인시던트 가져오기 쿼리",
    "Fetch incident with specific states.":
      "특정 상태의 인시던트를 가져옵니다.",
    "Fetch Incidents Filtering":
      "인시던트 가져오기 필터링",
    "Fetch incidents type":
      "가져올 인시던트 유형",
    "Fetch incidents using a manual query filter expression":
      "수동 쿼리 필터 표현식을 사용하여 인시던트 가져오기",
    "Fetch incidents using an “IAM - Configuration” incident":
      "“IAM - Configuration” 인시던트를 사용하여 인시던트 가져오기",
    "Fetch Interval (minutes)":
      "가져오기 간격(분)",
    "Fetch limit - maximum number of incidents per fetch":
      "가져오기 한도 - 가져오기당 최대 인시던트 수",
    "Fetch Limit (Max.- 200, Recommended less than 50)":
      "가져오기 한도(최대 200, 50 미만 권장)",
    "Fetch Limit (Recommended less than 200)":
      "가져오기 한도(200 미만 권장)",
    "Fetch limit (recommended value is less than 200)":
      "가져오기 한도(권장 값은 200 미만)",
    "Fetch limit per type":
      "유형별 가져오기 한도",
    "Fetch mode":
      "가져오기 모드",
    "Fetch Only Escalated Detections":
      "에스컬레이션된 탐지만 가져오기",
    "Fetch only incidents with forensics":
      "포렌식 데이터가 있는 인시던트만 가져오기",
    "Fetch only incidents with matching Application IDs":
      "일치하는 애플리케이션 ID가 있는 인시던트만 가져오기",
    "Fetch only incidents with matching severity":
      "일치하는 심각도의 인시던트만 가져오기",
    "Fetch only incidents with matching state":
      "일치하는 상태의 인시던트만 가져오기",
    "Fetch only incidents with matching status":
      "일치하는 상태의 인시던트만 가져오기",
    "Fetch Only Prioritized Detections":
      "우선순위가 지정된 탐지만 가져오기",
    "Fetch Prioritized and Escalated Detections":
      "우선순위가 지정된 탐지와 에스컬레이션된 탐지 가져오기",
    "Fetch Samples":
      "샘플 가져오기",
    "Fetch specific incident types. Default value is \"All\".":
      "특정 인시던트 유형을 가져옵니다. 기본값은 \"All\"입니다.",
    "Fetch Splunk Enterprise Security Findings and Investigations into Cortex.":
      "Splunk Enterprise Security Findings와 Investigations를 Cortex로 가져옵니다.",
    "Fetch Threatmon alarms into Cortex.":
      "Threatmon 알람을 Cortex로 가져옵니다.",
    "Fetched Incidents Data":
      "가져온 인시던트 데이터",
    "Fetches assets":
      "자산을 가져옵니다",
    "Fetches incidents":
      "인시던트를 가져옵니다",
    "Fetches only incidents with matching **All**, **Closed**, or **Open** state. If nothing is selected, **All** states will be used.":
      "**All**, **Closed**, **Open** 상태와 일치하는 인시던트만 가져옵니다. 아무것도 선택하지 않으면 **All** 상태가 사용됩니다.",
    "Fetching events":
      "이벤트 가져오기",
    "File hashes":
      "파일 해시",
    "File Malicious Threshold. Minimum number of positive results from VT scanners to consider the file malicious.":
      "파일 악성 임곗값. 파일을 악성으로 간주하기 위해 필요한 VT 스캐너의 양성 결과 최소 개수입니다.",
    "File Relationships":
      "파일 관계",
    "File security scanning, DLP policy enforcement, and sensitive content detection for OneDrive":
      "OneDrive용 파일 보안 검사, DLP 정책 적용, 민감한 콘텐츠 탐지",
    "File Suspicious Threshold. Minimum number of positive and suspicious results from VT scanners to consider the file suspicious.":
      "파일 의심 임곗값. 파일을 의심스러운 것으로 간주하기 위해 필요한 VT 스캐너의 양성 및 의심 결과 최소 개수입니다.",
    "File Threshold. Minimum number of positive results from VT scanners to consider the file malicious.":
      "파일 임곗값. 파일을 악성으로 간주하기 위해 필요한 VT 스캐너의 양성 결과 최소 개수입니다.",
    "File transfer and execute commands via ssh, on remote machines":
      "SSH를 통해 원격 머신에서 파일 전송 및 명령 실행",
    "Fill anything in the “Username” fill box. Use you API key in the password fill box.":
      "“Username” 입력란에는 아무 값이나 입력합니다. 비밀번호 입력란에는 API 키를 사용합니다.",
    "Fill in the ‘UPN Password’ parameter - the user’s Microsoft 365 password (the regular sign-in password for that UPN).":
      "‘UPN Password’ 매개변수에 사용자의 Microsoft 365 비밀번호(해당 UPN의 일반 로그인 비밀번호)를 입력합니다.",
    "Fill in the ‘UPN’ parameter in the integration configuration.":
      "통합 구성의 ‘UPN’ 매개변수를 입력합니다.",
    "Fill in the UPN parameter in the integration configuration.":
      "통합 구성의 UPN 매개변수를 입력합니다.",
    "Fill in the UPN, App ID, and Tenant ID parameters in the integration configuration.":
      "통합 구성의 UPN, App ID, Tenant ID 매개변수를 입력합니다.",
    "Filter audit logs by type(s). If not specified, all audit log types will be fetched.":
      "유형별로 감사 로그를 필터링합니다. 지정하지 않으면 모든 유형의 감사 로그를 가져옵니다.",
    "Filter by entity type. If not selected, it will fetch all events detections.":
      "엔티티 유형별로 필터링합니다. 선택하지 않으면 모든 이벤트 탐지를 가져옵니다.",
    "Filter by killchain stage":
      "킬 체인 단계별 필터링",
    "Filter by threat category":
      "위협 카테고리별 필터링",
    "Filter by threat level (LOW, MEDIUM, or HIGH)":
      "위협 수준별 필터링(LOW, MEDIUM 또는 HIGH)",
    "Filter the Detections by the “Entity Type”(Account and Host).":
      "“Entity Type”(Account 및 Host)별로 탐지를 필터링합니다.",
    "Firewall: Configure the vsys":
      "방화벽: vsys 구성",
    "First fetch time range":
      "최초 가져오기 시간 범위",
    "First fetch timestamp (<number> <time unit>, e.g., 12 hours, 7 days) or a date or epoch timestamp.":
      "최초 가져오기 타임스탬프(<number> <time unit>, 예: 12 hours, 7 days) 또는 날짜나 에포크 타임스탬프입니다.",
    "First fetch timestamp (<number> <time unit>. For example, 12 hours, 7 days)":
      "최초 가져오기 타임스탬프(<number> <time unit>. 예: 12 hours, 7 days)",
    "First fetch timestamp (e.g., 7 days)":
      "최초 가져오기 타임스탬프(예: 7 days)",
    "First fetch timestamp (Investigations)":
      "최초 가져오기 타임스탬프(Investigations)",
    "Follow these instructions to find an API key that corresponds to a particular Carbon Black user account.":
      "특정 Carbon Black 사용자 계정에 해당하는 API 키를 찾으려면 다음 지침을 따르세요.",
    "Follow these steps to add custom fields to the User Profile indicator.":
      "User Profile 지표에 사용자 지정 필드를 추가하려면 다음 단계를 따르세요.",
    "Following link describes the process of how one can obtain a Personal Access Token in IdentityNow.":
      "다음 링크에서는 IdentityNow에서 개인 액세스 토큰을 가져오는 방법을 설명합니다.",
    "For an API key, go to your user profile at your ThreatCentral account, and press Manage API Keys, where you can generate a new API key.":
      "API 키를 얻으려면 ThreatCentral 계정의 사용자 프로필로 이동하여 Manage API Keys를 누르면 새 API 키를 생성할 수 있습니다.",
    "For API 1.0":
      "API 1.0용",
    "For API 2.0":
      "API 2.0용",
    "For data removal: the authenticated company must have remaining Black Market Data Removal credits.":
      "데이터 삭제의 경우: 인증된 회사에 Black Market Data Removal 크레딧이 남아 있어야 합니다.",
    "For detailed documentation, see the integration README.":
      "자세한 문서는 통합 README를 참조하세요.",
    "For example, \"example@mail.com\"":
      "예: \"example@mail.com\"",
    "For example, using the “malicious_executables” will fetch only notifications caught by malicious_executables ruleset.":
      "예를 들어 “malicious_executables”를 사용하면 malicious_executables 규칙 집합에서 포착한 알림만 가져옵니다.",
    "For example: 01 Oct 2025, 01 Mar 2021 04:45:33, 2025-12-17T14:05:44Z.":
      "예: 01 Oct 2025, 01 Mar 2021 04:45:33, 2025-12-17T14:05:44Z.",
    "For information on getting your Okta API token, see the Okta documentation.":
      "Okta API 토큰을 가져오는 방법은 Okta 문서를 참조하세요.",
    "For more information about the service activation, visit the following link: https://docs.paloaltonetworks.com/ngfw/aiops/about/activate-aiops-for-ngfw#activate-aiops-for-ngfw_section_xjs_p55_fyb":
      "서비스 활성화에 대한 자세한 내용은 다음 링크를 참조하세요: https://docs.paloaltonetworks.com/ngfw/aiops/about/activate-aiops-for-ngfw#activate-aiops-for-ngfw_section_xjs_p55_fyb",
    "For more information regarding the JSON objects, please see Proofpoint TRAP documentation under “JSON Alert Source 2.0”.":
      "JSON 객체에 대한 자세한 내용은 Proofpoint TRAP 문서의 “JSON Alert Source 2.0”을 참조하세요.",
    "For Recorded Future Sandbox, the token is provided by going to the Recorded Future Portal -> Tools -> Malware Analysis -> API Keys":
      "Recorded Future Sandbox의 경우 토큰은 Recorded Future Portal -> Tools -> Malware Analysis -> API Keys에서 받을 수 있습니다",
    "For secure access to Prisma Cloud API, you need a Prisma Cloud API access key. An access key includes an Access Key ID and a Secret Key.":
      "Prisma Cloud API에 안전하게 액세스하려면 Prisma Cloud API 액세스 키가 필요합니다. 액세스 키는 Access Key ID와 Secret Key로 구성됩니다.",
    "For sending messages using the ChatBot app and mirroring":
      "ChatBot 앱을 사용한 메시지 전송 및 미러링의 경우",
    "For the configuration, you should configure the server details and credentials either as parameters or as command arguments.":
      "구성에서는 서버 세부 정보와 자격 증명을 매개변수 또는 명령 인수로 구성해야 합니다.",
    "For the configuration, you should either configure server details as parameters, or as command inputs.":
      "구성에서는 서버 세부 정보를 매개변수 또는 명령 입력으로 구성해야 합니다.",
    "For the JWT method (deprecated)":
      "JWT 방식의 경우(사용 중단됨)",
    "For XSOAR users below 6.0.0 version, using ‘Pull from instance’ option when creating a new mapper is not supported.":
      "6.0.0 미만 버전의 XSOAR 사용자의 경우, 새 매퍼를 만들 때 ‘Pull from instance’ 옵션은 지원되지 않습니다.",
    "Force Encryption":
      "암호화 강제",
    "Force encryption on the connection, requires SMBv3 or newer on the remote server. Default is \"false\".":
      "연결에서 암호화를 강제합니다. 원격 서버에서 SMBv3 이상이 필요합니다. 기본값은 \"false\"입니다.",
    "Format: `https://{hostName}:{port}`":
      "형식: `https://{hostName}:{port}`",
    "From `brokercerts.crt` file.":
      "`brokercerts.crt` 파일에서 가져옵니다.",
    "From `client.crt` file.":
      "`client.crt` 파일에서 가져옵니다.",
    "From `client.key` file. Make sure that the type of the field is not `encrypted` when filling it out.":
      "`client.key` 파일에서 가져옵니다. 입력할 때 필드 유형이 `encrypted`가 아닌지 확인하세요.",
    "Full Incident Enrichment":
      "전체 인시던트 보강",
    "Full Incident Enrichment - Clear this checkbox to disable QRadar offense enrichment performed in fetch-incidents. This might help if you encounter a timeout while fetching new incidents.":
      "전체 인시던트 보강 - 이 확인란의 선택을 해제하면 fetch-incidents에서 수행되는 QRadar 오펜스 보강이 비활성화됩니다. 새 인시던트를 가져오는 동안 제한 시간 초과가 발생하는 경우 도움이 될 수 있습니다.",
    "Fully Qualified Domain Name (FQDN) - used in EHLO":
      "정규화된 도메인 이름(FQDN) - EHLO에서 사용됩니다",
    "Generate a RiskSense API Token":
      "RiskSense API 토큰 생성",
    "Generate a self-signed certificate":
      "자체 서명 인증서 생성",
    "Generate an API key, copy it, and then paste it in the integration configuration.":
      "API 키를 생성하고 복사한 다음 통합 구성에 붙여넣습니다.",
    "Get a VirusTotal API Key":
      "VirusTotal API 키 얻기",
    "Get incident attachments":
      "인시던트 첨부 파일 가져오기",
    "Get the BloodHound Enterprise API Token ID and Token Key":
      "BloodHound Enterprise API 토큰 ID 및 토큰 키 얻기",
    "Get token API documentation":
      "토큰 API 문서 가져오기",
    "Get Your Okta API Token":
      "Okta API 토큰 얻기",
    "Get Your Slack API Token":
      "Slack API 토큰 얻기",
    "Get your Tenzai API key":
      "Tenzai API 키 얻기",
    "Getting Access":
      "액세스 얻기",
    "Go to the Okta IAM integration instance and in the mapper textbox, replace the name of the default mapper with the custom mapper you created.":
      "Okta IAM 통합 인스턴스로 이동하여 매퍼 텍스트 상자에서 기본 매퍼의 이름을 생성한 사용자 지정 매퍼로 바꿉니다.",
    "Go to the ServiceNow IAM integration instance and in the mapper textbox, replace the name of the default mapper with the custom mapper you created.":
      "ServiceNow IAM 통합 인스턴스로 이동하여 매퍼 텍스트 상자에서 기본 매퍼의 이름을 생성한 사용자 지정 매퍼로 바꿉니다.",
    "Grant the Demisto Bot Permissions in Microsoft Graph":
      "Microsoft Graph에서 Demisto Bot에 권한을 부여합니다",
    "Granting JWT to admin is not allowed.":
      "관리자에게 JWT를 부여하는 것은 허용되지 않습니다.",
    "Host name that should appear in certificate":
      "인증서에 표시되어야 하는 호스트 이름",
    "Host URL":
      "호스트 URL",
    "Hostname, IP address, or server URL":
      "호스트 이름, IP 주소 또는 서버 URL",
    "Hours before first fetch to retrieve incidents":
      "첫 번째 가져오기 이전에 인시던트를 가져올 시간 수",
    "How many hours ago":
      "몇 시간 전인지",
    "How many incidents to fetch each time":
      "매번 가져올 인시던트 수",
    "How to Build a Query":
      "쿼리 작성 방법",
    "How to Create a Splunk Authentication Token":
      "Splunk 인증 토큰 생성 방법",
    "How to fetch assets and vulnerabilities":
      "자산 및 취약점을 가져오는 방법",
    "How to get your Panorays API Key":
      "Panorays API 키를 얻는 방법",
    "How to get your Vectra Client ID and Client Secret Key":
      "Vectra 클라이언트 ID 및 클라이언트 시크릿 키를 얻는 방법",
    "How To get your VMRay API Key":
      "VMRay API 키를 얻는 방법",
    "How to retrieve a Palo Alto Networks WildFire Reports API key":
      "Palo Alto Networks WildFire 보고서 API 키를 가져오는 방법",
    "How to retrieve a WildFire API key":
      "WildFire API 키를 가져오는 방법",
    "However, there is a trade-off: the larger the window, the longer fetch queries will take to complete.":
      "그러나 트레이드오프가 있습니다. 창이 클수록 가져오기 쿼리가 완료되는 데 더 오래 걸립니다.",
    "However, there is obviously a price - the larger the window, the longer it will take for fetch queries to complete.":
      "그러나 분명히 대가가 따릅니다. 창이 클수록 가져오기 쿼리가 완료되는 데 더 오래 걸립니다.",
    "However, they may not suffice for viewing records in some tables.":
      "그러나 일부 테이블의 레코드를 보기에는 충분하지 않을 수 있습니다.",
    "HR use Workday to manage CRUD operations for employees in the organization. It is standard practice for HR to generate reports for these CRUD operations. For example, running a weekly report that captures all new employees and terminated employees, or a daily report that captures updates to existing employee profiles (e.g., new mailing address or phone number).":
      "HR은 Workday를 사용하여 조직 내 직원에 대한 CRUD 작업을 관리합니다. HR에서 이러한 CRUD 작업에 대한 보고서를 생성하는 것은 표준 관행입니다. 예를 들어, 모든 신규 직원과 퇴직 직원을 포함하는 주간 보고서나 기존 직원 프로필의 업데이트(예: 새 우편 주소 또는 전화번호)를 포함하는 일일 보고서를 실행합니다.",
    "HTTP request timeout (seconds)":
      "HTTP 요청 시간 제한(초)",
    "HTTP Request Timeout (Specify the time interval in seconds. All the RiskSense API calls would timeout if the response is not returned within the configured time interval).":
      "HTTP 요청 시간 제한(시간 간격을 초 단위로 지정합니다. 구성된 시간 간격 내에 응답이 반환되지 않으면 모든 RiskSense API 호출이 시간 초과됩니다).",
    "Human Readable Output":
      "사람이 읽을 수 있는 출력",
    "IAM Configuration":
      "IAM 구성",
    "ID (received from the admin consent - see Detailed Instructions (?)":
      "ID(관리자 동의에서 받음 - 자세한 지침 참조(?)",
    "Identify the fields list from the Splunk query and save it to a local file.":
      "Splunk 쿼리에서 필드 목록을 확인하고 로컬 파일에 저장합니다.",
    "Identity enrichment lookup tables":
      "ID 보강 조회 테이블",
    "Identity posture management, directory sync, and security posture monitoring for Entra ID":
      "Entra ID의 ID 보안 상태 관리, 디렉터리 동기화, 보안 상태 모니터링",
    "Identity search enrichment":
      "ID 검색 보강",
    "IdentityIQ Server URL (e.g. https://identityiq-server.com/identityiq)":
      "IdentityIQ 서버 URL(예: https://identityiq-server.com/identityiq)",
    "IdentityNow Server URL (e.g. https://org.api.identitynow.com)":
      "IdentityNow 서버 URL(예: https://org.api.identitynow.com)",
    "If both body and htmlBody are provided, we will create an alternative envelope":
      "body와 htmlBody가 모두 제공되면 대체 엔벨로프를 생성합니다",
    "If checked, the fetch incidents command will sample (at most) five incidents. Use only to sample incidents for classification & mapping.":
      "선택하면 인시던트 가져오기 명령이 (최대) 5개의 인시던트를 샘플링합니다. 분류 및 매핑을 위해 인시던트를 샘플링하는 경우에만 사용하세요.",
    "If enabled, the integration will activate the command changes after each execution. If disabled, use the 'zia-activate-changes' command to activate Zscaler command changes.":
      "활성화하면 통합이 각 실행 후 명령 변경 사항을 활성화합니다. 비활성화한 경우 'zia-activate-changes' 명령을 사용하여 Zscaler 명령 변경 사항을 활성화하세요.",
    "If enabled, the integration will activate the command changes after each execution. If disabled, use the 'zscaler-activate-changes' command to activate Zscaler command changes.":
      "활성화하면 통합이 각 실행 후 명령 변경 사항을 활성화합니다. 비활성화한 경우 'zscaler-activate-changes' 명령을 사용하여 Zscaler 명령 변경 사항을 활성화하세요.",
    "If enabled, the integration will log out after executing each command.":
      "활성화하면 통합이 각 명령을 실행한 후 로그아웃합니다.",
    "If Fetch incidents is checked, make sure to enter at least one search field.":
      "인시던트 가져오기를 선택한 경우 하나 이상의 검색 필드를 입력해야 합니다.",
    "If not provided, \"host\" or \"system\" should be provided in the command's arguments.":
      "제공하지 않으면 명령의 인수에 \"host\" 또는 \"system\"을 제공해야 합니다.",
    "If not set, Client ID will be used.":
      "설정하지 않으면 클라이언트 ID가 사용됩니다.",
    "If nothing is selected, **All** severities will be used.":
      "아무것도 선택하지 않으면 **모든** 심각도가 사용됩니다.",
    "If nothing is selected, **All** statuses will be used.":
      "아무것도 선택하지 않으면 **모든** 상태가 사용됩니다.",
    "If the Detection Status is updated in the Vectra Detection, it will be reflected in the XSOAR incident, or vice versa.":
      "Vectra Detection에서 Detection Status가 업데이트되면 XSOAR 인시던트에 반영되며, 그 반대의 경우도 마찬가지입니다.",
    "If the integration was already set with look back > 0, and the look-back is not being increased at any point of time, then those incident duplications would not occur.":
      "통합이 이미 룩백 > 0으로 설정되어 있고 룩백을 어느 시점에도 늘리지 않는다면, 이러한 인시던트 중복은 발생하지 않습니다.",
    "If the second method is used, the system will automatically attempt to generate a token. If this attempt fails, it will then revert to using the first method.":
      "두 번째 방법을 사용하면 시스템이 자동으로 토큰 생성을 시도합니다. 이 시도가 실패하면 첫 번째 방법을 사용하도록 되돌아갑니다.",
    "If the server details were configured both as parameters and as command arguments, the commands argument will be used to set the connection.":
      "서버 세부 정보가 매개변수와 명령 인수 모두로 구성된 경우, 명령 인수가 연결을 설정하는 데 사용됩니다.",
    "If true, will not raise an error if the image is corrupt and could not be processed.":
      "true이면 이미지가 손상되어 처리할 수 없는 경우에도 오류가 발생하지 않습니다.",
    "If you are a multi-tenant user and the body parameters of your login call include a user name and password instead of an access key ID and secret key, then you will also need to provide the Customer name":
      "멀티 테넌트 사용자이고 로그인 호출의 본문 매개변수에 액세스 키 ID와 시크릿 키 대신 사용자 이름과 비밀번호가 포함된 경우 Customer name도 제공해야 합니다",
    "If you are a multi-tenant user you will also need to provide the customerName.":
      "멀티 테넌트 사용자인 경우 customerName도 제공해야 합니다.",
    "If you previously had an API V1 configured based on the credentials obtained from this method, refer to the link above to gain new credentials with the relevant permissions.":
      "이전에 이 방법으로 얻은 자격 증명을 기반으로 API V1을 구성했다면, 위의 링크를 참조하여 관련 권한이 있는 새 자격 증명을 얻으세요.",
    "If you want to close a detection in Vectra when the incident is closed in XSOAR, check the “Close Detection on Incident Closure” option. This option is only used when the mirroring direction is set to ‘Outgoing’ or ‘Incoming And Outgoing’.":
      "XSOAR에서 인시던트가 종료될 때 Vectra에서 탐지를 종료하려면 “Close Detection on Incident Closure” 옵션을 선택합니다. 이 옵션은 미러링 방향이 ‘Outgoing’ 또는 ‘Incoming And Outgoing’으로 설정된 경우에만 사용됩니다.",
    "If you want to reopen a detection in Vectra when the incident is reopened in XSOAR, check the “Open Detection on Incident Reopen” option. This option is only used when the mirroring direction is set to ‘Outgoing’ or ‘Incoming And Outgoing’.":
      "XSOAR에서 인시던트가 다시 열릴 때 Vectra에서 탐지를 다시 열려면 “Open Detection on Incident Reopen” 옵션을 선택합니다. 이 옵션은 미러링 방향이 ‘Outgoing’ 또는 ‘Incoming And Outgoing’으로 설정된 경우에만 사용됩니다.",
    "If you want to set the language to en-US, use en-GB instead.":
      "언어를 en-US로 설정하려면 대신 en-GB를 사용하세요.",
    "If you want to use the mirror mechanism and you’re using custom mappers, then the incoming mapper must contain the following fields: dbotMirrorDirection, dbotMirrorId, dbotMirrorInstance, and dbotMirrorTags.":
      "미러링 메커니즘을 사용하고 사용자 지정 매퍼를 사용하는 경우 수신 매퍼에 다음 필드가 포함되어야 합니다: dbotMirrorDirection, dbotMirrorId, dbotMirrorInstance 및 dbotMirrorTags.",
    "If you wish to configure a mapper, wait for the integration to perform the first fetch successfully. This is to make the fetch mechanism logic stable.":
      "매퍼를 구성하려면 통합이 첫 번째 가져오기를 성공적으로 수행할 때까지 기다리세요. 이는 가져오기 메커니즘 로직을 안정화하기 위한 것입니다.",
    "Image scanning":
      "이미지 스캔",
    "Implement OAuth for Okta":
      "Okta용 OAuth 구현",
    "Implemented in Python to support extensions.":
      "확장 기능을 지원하기 위해 Python으로 구현되었습니다.",
    "Import from offset":
      "오프셋에서 가져오기",
    "Import from partition":
      "파티션에서 가져오기",
    "Import from topic":
      "토픽에서 가져오기",
    "Important note: resetting the integration cache removes all data about teams, channels, members saved in the integration context. Performing this step requires removing the bot from all teams it was added to.":
      "중요 참고 사항: 통합 캐시를 재설정하면 통합 컨텍스트에 저장된 팀, 채널, 멤버에 대한 모든 데이터가 제거됩니다. 이 단계를 수행하려면 봇이 추가된 모든 팀에서 봇을 제거해야 합니다.",
    "Important Notes":
      "중요 참고 사항",
    "Important: If you want to use the mirror mechanism, the incoming mapper must contain the following fields: dbotMirrorDirection, dbotMirrorId, dbotMirrorInstance":
      "중요: 미러링 메커니즘을 사용하려면 수신 매퍼에 다음 필드가 포함되어야 합니다: dbotMirrorDirection, dbotMirrorId, dbotMirrorInstance",
    "Important: The limit value can range from 10 to 200 and must be in multiples of 10.":
      "중요: limit 값은 10~200 범위일 수 있으며 10의 배수여야 합니다.",
    "In case access is required to an instance in the cloud, use the PEM file provided by the cloud provider.":
      "클라우드의 인스턴스에 대한 액세스가 필요한 경우 클라우드 공급자가 제공한 PEM 파일을 사용하세요.",
    "In order to add a rule name, use the filter name “alertRule.name”. In order to add a policy name, use the filter name “policy.name”.":
      "규칙 이름을 추가하려면 필터 이름 “alertRule.name”을 사용하세요. 정책 이름을 추가하려면 필터 이름 “policy.name”을 사용하세요.",
    "In order to configure the SIGNL4 pack in Cortex you just need the SIGNL4 team or integration secret (Password). You can find the same in your SIGNL4 web portal under Teams or under Integrations -> Installed -> Inbound Webhook. It is the last part of your webhook URL.":
      "Cortex에서 SIGNL4 팩을 구성하려면 SIGNL4 팀 또는 통합 시크릿(비밀번호)만 있으면 됩니다. SIGNL4 웹 포털의 Teams 또는 Integrations -> Installed -> Inbound Webhook에서 확인할 수 있습니다. 웹후크 URL의 마지막 부분입니다.",
    "In order to ensure the mirroring works as expected, mappers are required, both for incoming and outgoing, to map the expected fields in Cortex and Splunk.":
      "미러링이 예상대로 작동하도록 하려면 Cortex와 Splunk의 예상 필드를 매핑하기 위해 수신 및 발신 모두에 대한 매퍼가 필요합니다.",
    "In order to use the Cortex application, use the default application ID.":
      "Cortex 애플리케이션을 사용하려면 기본 애플리케이션 ID를 사용하세요.",
    "In order to use the Cortex Azure application, use the default application ID (3307a0ab-612c-47af-b3b5-8208247562db).":
      "Cortex Azure 애플리케이션을 사용하려면 기본 애플리케이션 ID(3307a0ab-612c-47af-b3b5-8208247562db)를 사용하세요.",
    "In order to use the rest of the commands, you are required to provide: App ID, App Key, Access Key & Secret Key.":
      "나머지 명령을 사용하려면 App ID, App Key, Access Key & Secret Key를 제공해야 합니다.",
    "In order to use this integration, you need to enter your Zoom credentials in the relevant integration instance parameters.":
      "이 통합을 사용하려면 관련 통합 인스턴스 매개변수에 Zoom 자격 증명을 입력해야 합니다.",
    "In PEM format. Required and used if OAuth 2.0 is used for authentication. See detailed instructions on the 'Help' tab.":
      "PEM 형식입니다. 인증에 OAuth 2.0을 사용하는 경우 필수이며 사용됩니다. 자세한 지침은 'Help' 탭을 참조하세요.",
    "In some hosted ElasticSearch environments, the standard ElasticSearch client is not supported. If you encounter any related client issues, please consider using the OpenSearch client type.":
      "일부 호스팅된 ElasticSearch 환경에서는 표준 ElasticSearch 클라이언트가 지원되지 않습니다. 클라이언트 관련 문제가 발생하면 OpenSearch 클라이언트 유형을 사용해 보세요.",
    "In Splunk, there is often a delay between the time an incident is created (the event’s “occurrence time”) and the time it is actually searchable in Splunk and visible in the index (the event’s “index time”).":
      "Splunk에서는 인시던트가 생성된 시간(이벤트의 “occurrence time”)과 실제로 Splunk에서 검색 가능하고 인덱스에서 확인할 수 있게 되는 시간(이벤트의 “index time”) 사이에 지연이 발생하는 경우가 많습니다.",
    "In Strata Cloud Manager, navigate to AI Security > API Applications":
      "Strata Cloud Manager에서 AI Security > API Applications로 이동합니다",
    "In the Silent Push Profile menu, click Organisation, and go to the API tab.":
      "Silent Push Profile 메뉴에서 Organisation을 클릭하고 API 탭으로 이동합니다.",
    "In the Summary indexing section, select the summary index, and enter the {key:value} pair for Cortex classification.":
      "Summary indexing 섹션에서 요약 인덱스를 선택하고 Cortex 분류를 위한 {key:value} 쌍을 입력합니다.",
    "In this case, all connections to Microsoft Security and Compliance PowerShell will use interactive delegated authentication.":
      "이 경우 Microsoft Security and Compliance PowerShell에 대한 모든 연결에서 대화형 위임 인증이 사용됩니다.",
    "Incident Asset Enrichment":
      "인시던트 자산 보강",
    "Incident Asset Enrichment - When enabled, fetched offenses will also contain correlated assets.":
      "인시던트 자산 보강 - 활성화하면 가져온 오펜스에 상관 관계가 있는 자산도 포함됩니다.",
    "Incident Enrichment (Asset) - When enabled, fetched offenses will also contain correlated assets.":
      "인시던트 보강(자산) - 활성화하면 가져온 오펜스에 상관 관계가 있는 자산도 포함됩니다.",
    "Incident Enrichment (IP) - When enabled, fetched incidents IP values (local source addresses and local destination addresses) will be fetched from QRadar instead of their ID values.":
      "인시던트 보강(IP) - 활성화하면 가져온 인시던트의 IP 값(로컬 소스 주소 및 로컬 대상 주소)이 ID 값 대신 QRadar에서 가져와집니다.",
    "Incident IP Enrichment":
      "인시던트 IP 보강",
    "Incident IP Enrichment - When enabled, fetched incidents IP values (local source addresses and local destination addresses) will be fetched from QRadar instead of their ID values.":
      "인시던트 IP 보강 - 활성화하면 가져온 인시던트의 IP 값(로컬 소스 주소 및 로컬 대상 주소)이 ID 값 대신 QRadar에서 가져와집니다.",
    "Incident management — Retrieve and change the incident status.":
      "인시던트 관리 — 인시던트 상태를 검색하고 변경합니다.",
    "Incident Mirroring":
      "인시던트 미러링",
    "Incident statuses to fetch":
      "가져올 인시던트 상태",
    "Incident Type":
      "인시던트 유형",
    "Incidents":
      "인시던트",
    "Incidents channel":
      "인시던트 채널",
    "Incidents Filter":
      "인시던트 필터",
    "Incoming - Any changes in Splunk findings (finding’s status, status_label, urgency, comments, and owner) will be reflected in Cortex incidents.":
      "수신 - Splunk findings(finding의 status, status_label, urgency, comments, owner)의 모든 변경 사항이 Cortex 인시던트에 반영됩니다.",
    "Incoming - Any changes in Splunk notables (notable’s status, status_label, urgency, comments, and owner) will be reflected in Cortex incidents.":
      "수신 - Splunk notables(notable의 status, status_label, urgency, comments, owner)의 모든 변경 사항이 Cortex 인시던트에 반영됩니다.",
    "Incoming - Mirrors changes from the Vectra RUX Detection into the Cortex incident.":
      "수신 - Vectra RUX Detection의 변경 사항을 Cortex 인시던트로 미러링합니다.",
    "Incoming and Outgoing":
      "수신 및 발신",
    "Incoming And Outgoing - Changes in Cortex incidents and Splunk findings will be reflected in both directions.":
      "수신 및 발신 - Cortex 인시던트와 Splunk findings의 변경 사항이 양방향으로 반영됩니다.",
    "Incoming And Outgoing - Changes in Cortex incidents and Splunk notables will be reflected in both directions.":
      "수신 및 발신 - Cortex 인시던트와 Splunk notables의 변경 사항이 양방향으로 반영됩니다.",
    "Incoming And Outgoing - Mirrors changes both Incoming and Outgoing directions on incidents.":
      "수신 및 발신 - 인시던트의 수신 및 발신 방향 모두에서 변경 사항을 미러링합니다.",
    "Indicator Field":
      "지표 필드",
    "Indicator Thresholds":
      "지표 임계값",
    "Indicator Types":
      "지표 유형",
    "Indicators with positive results equal to or higher than half of the threshold value, and lower than the threshold, will be considered suspicious.":
      "양성 결과가 임계값의 절반 이상이고 임계값보다 낮은 지표는 의심스러운 것으로 간주됩니다.",
    "Indicators with positive results equal to or higher than the threshold will be considered malicious.":
      "양성 결과가 임계값 이상인 지표는 악성으로 간주됩니다.",
    "Ingest Incidents from a SIEM Using Splunk article":
      "Splunk를 사용하여 SIEM에서 인시던트 수집하기 문서",
    "Ingests Vectra AI detections as Cortex incidents enriched with entity-level risk prioritization from Attack Signal Intelligence. Priority is persistent and updates as threats evolve - high-risk detections stay surfaced until resolved. Bidirectional synchronization keeps incident state aligned across both platforms in real time.":
      "Vectra AI 탐지를 Attack Signal Intelligence의 엔티티 수준 위험 우선순위 지정으로 보강된 Cortex 인시던트로 수집합니다. 우선순위는 지속되며 위협이 진화함에 따라 업데이트됩니다. 위험도가 높은 탐지는 해결될 때까지 계속 표시됩니다. 양방향 동기화를 통해 두 플랫폼 간에 인시던트 상태가 실시간으로 일치하게 유지됩니다.",
    "Initial Fetch":
      "초기 가져오기",
    "Initial Fetch Interval (In minutes, used only for first fetch or after Reset last run)":
      "초기 가져오기 간격(분 단위, 첫 번째 가져오기 또는 Reset last run 이후에만 사용됨)",
    "Initial fetching history (in minutes)":
      "초기 가져오기 기록(분 단위)",
    "Input the API key to access the sandbox.":
      "샌드박스에 액세스하기 위한 API 키를 입력합니다.",
    "Input the url of SecneurX Analysis server.":
      "SecneurX Analysis 서버의 URL을 입력합니다.",
    "Install the Workflows app in Microsoft Teams":
      "Microsoft Teams에 Workflows 앱 설치",
    "Instance Configuration":
      "인스턴스 구성",
    "Instance Date Format":
      "인스턴스 날짜 형식",
    "Integrate Cloud Security with your MongoDB Atlas Account to gain comprehensive visibility into any data and posture risk existing in your MongoDB Atlas environment. This integration enables automated scanning of all assets in MongoDB Atlas, including data classification and risk assessment.":
      "Cloud Security를 MongoDB Atlas 계정과 통합하면 MongoDB Atlas 환경에 존재하는 모든 데이터 및 태세 위험에 대한 포괄적인 가시성을 확보할 수 있습니다. 이 통합을 통해 데이터 분류 및 위험 평가를 포함하여 MongoDB Atlas의 모든 자산을 자동으로 스캔할 수 있습니다.",
    "Integrate Cloud Security with your Snowflake Account to gain comprehensive visibility into any data and posture risk existing in your Snowflake environment.This integration enables automated scanning of all assets in Snowflake,including data classification and risk assessment.":
      "Cloud Security를 Snowflake 계정과 통합하면 Snowflake 환경에 존재하는 모든 데이터 및 태세 위험에 대한 포괄적인 가시성을 확보할 수 있습니다. 이 통합을 통해 데이터 분류 및 위험 평가를 포함하여 Snowflake의 모든 자산을 자동으로 스캔할 수 있습니다.",
    "Integration documentation":
      "통합 문서",
    "Integration flow":
      "통합 흐름",
    "Integration with Intel Security’s ePolicy Orchestrator using the official API.":
      "공식 API를 사용한 Intel Security의 ePolicy Orchestrator와의 통합입니다.",
    "Interactive terminal mode":
      "대화형 터미널 모드",
    "Investigations fetch query":
      "조사 가져오기 쿼리",
    "IP Malicious Threshold. Minimum number of positive results from VT scanners to consider the IP malicious.":
      "IP 악성 임계값. IP를 악성으로 간주하기 위한 VT 스캐너의 최소 양성 결과 수입니다.",
    "IP Relationships":
      "IP 관계",
    "IP Suspicious Threshold. Minimum number of positive and suspicious results from VT scanners to consider the IP suspicious.":
      "IP 의심 임계값. IP를 의심스러운 것으로 간주하기 위한 VT 스캐너의 양성 및 의심 결과의 최소 수입니다.",
    "IP Threshold. Minimum number of positive results from VT scanners to consider the IP malicious.":
      "IP 임계값. IP를 악성으로 간주하기 위한 VT 스캐너의 최소 양성 결과 수입니다.",
    "IP Threshold. Minimum risk score from ThreatX to consider the IP malicious.":
      "IP 임계값. IP를 악성으로 간주하기 위한 ThreatX의 최소 위험 점수입니다.",
    "JWT Authentication":
      "JWT 인증",
    "JWT Authentication.":
      "JWT 인증.",
    "JWT Signing Algorithm":
      "JWT 서명 알고리즘",
    "Keep the defaults for fetch limit, first fetch timestamp, earliest time to fetch, and latest time to fetch.":
      "가져오기 한도, 첫 번째 가져오기 타임스탬프, 가져올 가장 이른 시간, 가져올 가장 늦은 시간은 기본값을 유지합니다.",
    "Keep the Get notable events EQ query as is, as we use the Notable macro when ingesting events. You can create a more granular search by specifying specific conditions such as specific security domain, event ID, etc.":
      "이벤트를 수집할 때 Notable 매크로를 사용하므로 Get notable events EQ 쿼리는 그대로 유지하세요. 특정 보안 도메인, 이벤트 ID 등과 같은 특정 조건을 지정하여 보다 세분화된 검색을 만들 수 있습니다.",
    "Kenna API key":
      "Kenna API 키",
    "Key (received from the admin consent - see Detailed Instructions (?)":
      "키(관리자 동의에서 받음 - 자세한 지침 참조(?)",
    "Key Algorithms":
      "키 알고리즘",
    "Key Features":
      "주요 기능",
    "Key ID":
      "키 ID",
    "Key or Client Secret (can be used instead of Certificate Thumbprint and Private Key)":
      "키 또는 클라이언트 시크릿(인증서 지문 및 개인 키 대신 사용할 수 있음)",
    "Kibana API Port":
      "Kibana API 포트",
    "Languages":
      "언어",
    "Last Incident ID (for initial fetch)":
      "마지막 인시던트 ID(초기 가져오기용)",
    "Last Run":
      "마지막 실행",
    "Lastly, copy the API key.":
      "마지막으로 API 키를 복사합니다.",
    "Limit of indicators to fetch from livehunt notification. Max 40.":
      "livehunt 알림에서 가져올 지표의 한도입니다. 최대 40.",
    "Limit of indicators to fetch from retrohunt job results.":
      "retrohunt 작업 결과에서 가져올 지표의 한도입니다.",
    "Limitations":
      "제한 사항",
    "Limitions":
      "제한 사항",
    "List of domains to block":
      "차단할 도메인 목록",
    "Lists all of the security vulnerabilities for various products (OS,Applications) etc)":
      "다양한 제품(OS, 애플리케이션 등)의 모든 보안 취약점을 나열합니다",
    "Located in the Firewall URL; by default of PAN-OS it is vsys1":
      "방화벽 URL에 있으며, PAN-OS의 기본값은 vsys1입니다",
    "Located in the Panorama UI. Go to Panorama, Device Groups and select the desired Device Group":
      "Panorama UI에 있습니다. Panorama, Device Groups로 이동하여 원하는 Device Group을 선택합니다",
    "Log access — Access log files. You can either provide the client log access API or add a syslog receiver.":
      "로그 액세스 — 로그 파일에 액세스합니다. 클라이언트 로그 액세스 API를 제공하거나 syslog 수신기를 추가할 수 있습니다.",
    "Log in to Kibana.":
      "Kibana에 로그인합니다.",
    "Log in to the Carbon Black console as the user for which you want to get the API key.":
      "API 키를 가져오려는 사용자로 Carbon Black 콘솔에 로그인합니다.",
    "Log in to the Vectra UI as this local user.":
      "이 로컬 사용자로 Vectra UI에 로그인합니다.",
    "Log in to your (Kenna account)[https://app.kennasecurity.com].":
      "(Kenna 계정)[https://app.kennasecurity.com]에 로그인합니다.",
    "Log in to your BloodHound Enterprise (BHE) tenant.":
      "BloodHound Enterprise(BHE) 테넌트에 로그인합니다.",
    "Log in to your Magnet Automate interface.":
      "Magnet Automate 인터페이스에 로그인합니다.",
    "Log in to your Panorays platform.":
      "Panorays 플랫폼에 로그인합니다.",
    "Log in to your Splunk instance as an administrator":
      "관리자로 Splunk 인스턴스에 로그인합니다",
    "Log in to your VirusTotal console.":
      "VirusTotal 콘솔에 로그인합니다.",
    "Log Type Query":
      "로그 유형 쿼리",
    "Log Type Query Examples":
      "로그 유형 쿼리 예시",
    "Log Type Query.":
      "로그 유형 쿼리.",
    "Login to the RiskSense platform.":
      "RiskSense 플랫폼에 로그인합니다.",
    "Long running instance enabled":
      "장기 실행 인스턴스 사용",
    "Lookback Parameter Notes":
      "룩백 매개변수 참고 사항",
    "Mail server hostname or IP address":
      "메일 서버 호스트 이름 또는 IP 주소",
    "Maintain a consistent incident lifecycle between Threatmon and XSOAR.":
      "Threatmon과 XSOAR 간에 일관된 인시던트 수명 주기를 유지합니다.",
    "Make sure the toggle at the bottom is switched on.":
      "하단의 토글이 켜져 있는지 확인하세요.",
    "Manage PingOne users and their authentication settings through the PingOne Management API.":
      "PingOne Management API를 통해 PingOne 사용자와 해당 인증 설정을 관리합니다.",
    "Map the severity of each indicator that will be synced to Cortex.":
      "Cortex로 동기화되는 각 지표의 심각도를 매핑합니다.",
    "Mapping limitations for XSOAR users below 6.0.0":
      "6.0.0 미만 XSOAR 사용자를 위한 매핑 제한 사항",
    "Mattermost server address (e.g. https://1.2.3.4:8065)":
      "Mattermost 서버 주소(예: https://1.2.3.4:8065)",
    "Max fetch":
      "최대 가져오기 수",
    "Max Fetch":
      "최대 가져오기 수",
    "Max incidents per fetch (for each selected Log Type Query)":
      "가져오기당 최대 인시던트 수(선택한 각 로그 유형 쿼리별)",
    "Max number of events per incident":
      "인시던트당 최대 이벤트 수",
    "Maximum API requests per minute":
      "분당 최대 API 요청 수",
    "Maximum events to fetch per fetch":
      "가져오기당 가져올 최대 이벤트 수",
    "Maximum incidents per fetch per type":
      "가져오기당 유형별 최대 인시던트 수",
    "Maximum investigations per fetch":
      "가져오기당 최대 조사 수",
    "Maximum is limited to 200.":
      "최대값은 200으로 제한됩니다.",
    "Maximum number of assets to fetch":
      "가져올 최대 자산 수",
    "Maximum number of entries returned from the query, to avoid slow response.":
      "응답 지연을 방지하기 위해 쿼리에서 반환되는 최대 항목 수입니다.",
    "Maximum number of events per fetch":
      "가져오기당 최대 이벤트 수",
    "Maximum number of events to fetch per type per fetch cycle (default: 5000).":
      "가져오기 주기당 유형별로 가져올 최대 이벤트 수(기본값: 5000).",
    "Maximum number of incidents per fetch":
      "가져오기당 최대 인시던트 수",
    "Maximum number of incidents to fetch":
      "가져올 최대 인시던트 수",
    "Maximum Number Of Incidents To Fetch":
      "가져올 최대 인시던트 수",
    "Maximum number of incidents to fetch per run":
      "실행당 가져올 최대 인시던트 수",
    "Maximum time to wait for a page to load (in seconds)":
      "페이지 로드를 기다리는 최대 시간(초)",
    "Maximum time to wait for a rate limiting call in seconds":
      "속도 제한 호출을 기다리는 최대 시간(초)",
    "McAfee ePO Server URI":
      "McAfee ePO 서버 URI",
    "MCP Server Name":
      "MCP 서버 이름",
    "Methods to Authenticate Microsoft Defender XDR":
      "Microsoft Defender XDR 인증 방법",
    "MFA can be used both when using basic authorization and when using OAuth 2.0 authorization, however we strongly recommend using OAuth 2.0 when using MFA.":
      "MFA는 기본 권한 부여와 OAuth 2.0 권한 부여 모두에서 사용할 수 있지만, MFA를 사용할 때는 OAuth 2.0을 사용할 것을 강력히 권장합니다.",
    "MFA can be used both when using basic authorization and when using OAuth 2.0 authorization, however, we strongly recommend using OAuth 2.0 when using MFA.":
      "MFA는 기본 권한 부여와 OAuth 2.0 권한 부여 모두에서 사용할 수 있지만, MFA를 사용할 때는 OAuth 2.0을 사용할 것을 강력히 권장합니다.",
    "Microsoft 365 Defender context":
      "Microsoft 365 Defender 컨텍스트",
    "Microsoft documentation":
      "Microsoft 설명서",
    "Microsoft integrations (Graph and Azure) in Cortex use Entra ID applications to authenticate with Microsoft APIs. These integrations use OAuth 2.0 and OpenID Connect standard-compliant authentication services, which use an application to sign in or delegate authentication. For more information, see the Microsoft identity platform overview.":
      "Cortex의 Microsoft 통합(Graph 및 Azure)은 Entra ID 애플리케이션을 사용하여 Microsoft API에 인증합니다. 이러한 통합은 OAuth 2.0 및 OpenID Connect 표준을 준수하는 인증 서비스를 사용하며, 애플리케이션을 사용하여 로그인하거나 인증을 위임합니다. 자세한 내용은 Microsoft identity platform overview를 참조하세요.",
    "Microsoft integrations (Graph and Azure) in Cortex use Entra ID applications to authenticate with Microsoft APIs. These integrations use OAuth 2.0 and OpenID Connect standard-compliant authentication services, which use an Application to sign in or delegate authentication. For more information, see the Microsoft identity platform overview.":
      "Cortex의 Microsoft 통합(Graph 및 Azure)은 Entra ID 애플리케이션을 사용하여 Microsoft API에 인증합니다. 이러한 통합은 OAuth 2.0 및 OpenID Connect 표준을 준수하는 인증 서비스를 사용하며, 애플리케이션을 사용하여 로그인하거나 인증을 위임합니다. 자세한 내용은 Microsoft identity platform overview를 참조하세요.",
    "Microsoft Management Activity API (O365/Azure Events) should be used to retrieve content records from the various Microsoft Management Activity content types.":
      "Microsoft Management Activity API(O365/Azure 이벤트)를 사용하여 다양한 Microsoft Management Activity 콘텐츠 유형에서 콘텐츠 레코드를 검색해야 합니다.",
    "Microsoft Teams Documentation":
      "Microsoft Teams 설명서",
    "Microsoft workflow URL":
      "Microsoft 워크플로 URL",
    "Microsoft’s technical blog":
      "Microsoft 기술 블로그",
    "Might have to slightly change the existing logic for some of their custom entities configured for Splunk (Playbooks, Mappers, Pre-Processing Rules, Scripts, Classifiers, etc.) in order for them to work with the modified structure of the fetched events.":
      "Splunk용으로 구성된 일부 사용자 지정 엔터티(Playbook, 매퍼, 사전 처리 규칙, 스크립트, 분류자 등)는 가져온 이벤트의 수정된 구조에서 작동하도록 기존 로직을 약간 변경해야 할 수 있습니다.",
    "Mimecast Documentation":
      "Mimecast 설명서",
    "Mimecast uses quotas per period of time (i.e. rate limits) that apply to every API function, per registered App. A typical quota is a number of API calls per unit of time (but could also be expressed as the size of data returned, etc.). When the quota has been exhausted, further requests will fail until the new time period restarts the count of API calls. The rate limit reset value is the length of time in milliseconds before a minimum of 1 API will be permitted.":
      "Mimecast는 등록된 앱별로 모든 API 함수에 적용되는 기간당 할당량(즉, 속도 제한)을 사용합니다. 일반적인 할당량은 단위 시간당 API 호출 횟수입니다(단, 반환되는 데이터 크기 등으로 표현될 수도 있음). 할당량이 소진되면 새 기간이 시작되어 API 호출 횟수 집계가 재개될 때까지 이후 요청은 실패합니다. 속도 제한 재설정 값은 최소 1개의 API 호출이 허용되기까지의 시간(밀리초)입니다.",
    "Mimecast uses quotas per period of time (i.e., rate limits) that apply to every API function, per registered app. A typical quota is a number of API calls per unit of time (but could also be expressed as the size of data returned, etc.). When the quota has been exhausted, further requests will fail until the new time period restarts the count of API calls. The rate limit reset value is the length of time in milliseconds before a minimum of one API will be permitted.":
      "Mimecast는 등록된 앱별로 모든 API 함수에 적용되는 기간당 할당량(즉, 속도 제한)을 사용합니다. 일반적인 할당량은 단위 시간당 API 호출 횟수입니다(단, 반환되는 데이터 크기 등으로 표현될 수도 있음). 할당량이 소진되면 새 기간이 시작되어 API 호출 횟수 집계가 재개될 때까지 이후 요청은 실패합니다. 속도 제한 재설정 값은 최소 1개의 API 호출이 허용되기까지의 시간(밀리초)입니다.",
    "Min severity [1-4] 1=low":
      "최소 심각도 [1-4] 1=낮음",
    "Mirror Offense and Events":
      "오펜스 및 이벤트 미러링",
    "Mirror tag for notes":
      "노트 미러링 태그",
    "Mirroring Direction":
      "미러링 방향",
    "Mirroring offenses with events":
      "이벤트가 포함된 오펜스 미러링",
    "Mirroring Options":
      "미러링 옵션",
    "Model (optional free text override)":
      "모델(선택 사항, 자유 텍스트 재정의)",
    "MongoDB Atlas (Posture) Instance":
      "MongoDB Atlas(Posture) 인스턴스",
    "MongoDB Atlas Organization ID":
      "MongoDB Atlas 조직 ID",
    "More information can be found on https://cortex.marketplace.pan.dev/marketplace/details/MicrosoftDefenderAdvancedThreatProtection/":
      "자세한 내용은 https://cortex.marketplace.pan.dev/marketplace/details/MicrosoftDefenderAdvancedThreatProtection/에서 확인할 수 있습니다",
    "Most fields are optional and we allow empty subject and empty body":
      "대부분의 필드는 선택 사항이며 제목과 본문을 비워 둘 수 있습니다",
    "My API Key":
      "내 API 키",
    "My MongoDB Atlas account is protected by network policies":
      "내 MongoDB Atlas 계정은 네트워크 정책으로 보호됩니다",
    "My Snowflake account is protected by network policies":
      "내 Snowflake 계정은 네트워크 정책으로 보호됩니다",
    "Name of the folder from which to fetch incidents (supports Folder ID and sub-folders e.g., Inbox/Phishing)":
      "인시던트를 가져올 폴더 이름(폴더 ID 및 하위 폴더 지원, 예: Inbox/Phishing)",
    "Name of the folder or sub-folder from which to fetch incidents":
      "인시던트를 가져올 폴더 또는 하위 폴더 이름",
    "Name of the instance":
      "인스턴스 이름",
    "New notes from the Vectra Detection will be created as notes in the XSOAR incident. Updates to existing notes in the Vectra Detection will create new notes in the XSOAR incident.":
      "Vectra Detection의 새 노트는 XSOAR 인시던트에 노트로 생성됩니다. Vectra Detection의 기존 노트에 대한 업데이트는 XSOAR 인시던트에 새 노트를 생성합니다.",
    "New notes from the XSOAR incident will be created as notes in the Vectra Detection. Updates to existing notes in the XSOAR incident will not be reflected in the Vectra Detection.":
      "XSOAR 인시던트의 새 노트는 Vectra Detection에 노트로 생성됩니다. XSOAR 인시던트의 기존 노트에 대한 업데이트는 Vectra Detection에 반영되지 않습니다.",
    "Newly fetched incidents will be mirrored in the chosen direction.":
      "새로 가져온 인시던트는 선택한 방향으로 미러링됩니다.",
    "None - Turns off incident mirroring.":
      "없음 - 인시던트 미러링을 끕니다.",
    "Note for the autofocus-sample-analysis Command":
      "autofocus-sample-analysis 명령에 대한 참고 사항",
    "Note that the default query values has some example text in it, make sure to enter a valid query.":
      "기본 쿼리 값에는 예시 텍스트가 포함되어 있으므로 반드시 유효한 쿼리를 입력하세요.",
    "Note: Cortex recommends you use the Query only application events configured in IAM Configuration option to generate the fetch-incidents query filter. The following following method should be used primarily for debugging purposes.":
      "참고: fetch-incidents 쿼리 필터를 생성하려면 \"Query only application events configured in IAM Configuration\" 옵션을 사용할 것을 Cortex에서 권장합니다. 다음 방법은 주로 디버깅 목적으로 사용해야 합니다.",
    "Note: If you are using a custom incident type, you also need to create custom corresponding incoming and outgoing mappers.":
      "참고: 사용자 지정 인시던트 유형을 사용하는 경우 이에 해당하는 사용자 지정 수신 매퍼와 발신 매퍼도 만들어야 합니다.",
    "Note: If you have a TIM license that is up-to-date, you do not need to set up an API key.":
      "참고: 최신 TIM 라이선스가 있는 경우 API 키를 설정할 필요가 없습니다.",
    "Note: In the example, Splunk Generic is a custom incident type.":
      "참고: 이 예시에서 Splunk Generic은 사용자 지정 인시던트 유형입니다.",
    "Note: JWT authentication method was deprecated by Zoom from June 2023 and not available anymore.":
      "참고: JWT 인증 방법은 2023년 6월부터 Zoom에서 사용 중단되었으며 더 이상 사용할 수 없습니다.",
    "NOTE: The enrichment and mirroring mechanisms use a new default fetch query.":
      "참고: 보강 및 미러링 메커니즘은 새로운 기본 가져오기 쿼리를 사용합니다.",
    "Note: The integration is supported in Cortex and Cortex XSIAM without using an engine.":
      "참고: 이 통합은 엔진을 사용하지 않고 Cortex 및 Cortex XSIAM에서 지원됩니다.",
    "Note: This is a beta Integration, which lets you implement and test pre-release software. Since the integration is beta, it might contain bugs. Updates to the integration during the beta phase might include non-backward compatible features. We appreciate your feedback on the quality and usability of the integration to help us identify issues, fix them, and continually improve.":
      "참고: 이 통합은 베타 통합으로, 출시 전 소프트웨어를 구현하고 테스트할 수 있습니다. 베타 통합이므로 버그가 포함되어 있을 수 있습니다. 베타 단계 중 통합 업데이트에는 이전 버전과 호환되지 않는 기능이 포함될 수 있습니다. 문제를 파악하고 수정하며 지속적으로 개선할 수 있도록 통합의 품질과 사용성에 대한 의견을 보내 주시면 감사하겠습니다.",
    "Note: This parameter is only used when close detection on incident closer is 'checked' and the mirroring direction is set to 'Outgoing' or 'Incoming And Outgoing'.":
      "참고: 이 매개변수는 close detection on incident closer가 'checked'이고 미러링 방향이 'Outgoing' 또는 'Incoming And Outgoing'으로 설정된 경우에만 사용됩니다.",
    "Note: This parameter is only used when open detection on incident reopen is 'checked' and the mirroring direction is set to 'Outgoing' or 'Incoming And Outgoing'.":
      "참고: 이 매개변수는 open detection on incident reopen이 'checked'이고 미러링 방향이 'Outgoing' 또는 'Incoming And Outgoing'으로 설정된 경우에만 사용됩니다.",
    "Note: This parameter is only used when the mirroring direction is set to 'Outgoing' or 'Incoming And Outgoing'.":
      "참고: 이 매개변수는 미러링 방향이 'Outgoing' 또는 'Incoming And Outgoing'으로 설정된 경우에만 사용됩니다.",
    "Note: This will not affect existing incidents.":
      "참고: 기존 인시던트에는 영향을 주지 않습니다.",
    "Note: When upgrading from v1 (MITRE IDs Feed) to v2 (MITRE ATT&CK) - disabling the MITRE IDs Feed indicator type, and instance are important for the smooth flow of the upgrade.":
      "참고: v1(MITRE IDs Feed)에서 v2(MITRE ATT&CK)로 업그레이드할 때는 원활한 업그레이드를 위해 MITRE IDs Feed 지표 유형과 인스턴스를 비활성화하는 것이 중요합니다.",
    "Notice: Submitting indicators using the following commands of this integration might make the indicator data publicly available.":
      "알림: 이 통합의 다음 명령을 사용하여 지표를 제출하면 지표 데이터가 공개적으로 제공될 수 있습니다.",
    "Notifications channel":
      "알림 채널",
    "Notifications channel (You will need to invite the Demisto Bot user to this channel)":
      "알림 채널(이 채널에 Demisto Bot 사용자를 초대해야 합니다)",
    "Number of addresses to enrich per API call":
      "API 호출당 보강할 주소 수",
    "Number of connection error retries":
      "연결 오류 재시도 횟수",
    "Number of days before hire date to enable Active Directory account":
      "Active Directory 계정을 활성화할 입사일 이전 일수",
    "Number of days before hire date to sync hires":
      "신규 입사자를 동기화할 입사일 이전 일수",
    "Number of Events Per Enrichment Type":
      "보강 유형별 이벤트 수",
    "Number of incidents per fetch.":
      "가져오기당 인시던트 수.",
    "Number of maximum Chrome instances to keep running simultaneously.":
      "동시에 계속 실행할 최대 Chrome 인스턴스 수.",
    "Number of maximum tabs each Chrome will be allowed to open.":
      "각 Chrome에서 열 수 있는 최대 탭 수.",
    "Number of offenses to pull per API call":
      "API 호출당 가져올 오펜스 수",
    "Number of offenses to pull per API call (max 50)":
      "API 호출당 가져올 오펜스 수(최대 50)",
    "OAuth 2.0 Authorization":
      "OAuth 2.0 권한 부여",
    "OAuth 2.0 authorization.":
      "OAuth 2.0 권한 부여.",
    "OAuth2 Credentials":
      "OAuth2 자격 증명",
    "Obtain the API Key":
      "API 키 얻기",
    "Obtaining API Credentials":
      "API 자격 증명 얻기",
    "OCR engine.":
      "OCR 엔진.",
    "Offense Enrichment":
      "오펜스 보강",
    "Offenses":
      "오펜스",
    "Okta API Scopes":
      "Okta API 범위",
    "Okta API tokens are used to authenticate requests to Okta APIs.":
      "Okta API 토큰은 Okta API에 대한 요청을 인증하는 데 사용됩니다.",
    "Okta documentation":
      "Okta 설명서",
    "Okta URL (https://<domain>.okta.com)":
      "Okta URL(https://<domain>.okta.com)",
    "Only applies when Findings scope is \"Supplier Findings\". Only findings with these severities create incidents.":
      "Findings scope가 \"Supplier Findings\"인 경우에만 적용됩니다. 이러한 심각도를 가진 결과만 인시던트를 생성합니다.",
    "Only fetch events with this text in the name":
      "이름에 이 텍스트가 포함된 이벤트만 가져오기",
    "Only use Features that are available in On-Premise installations":
      "온프레미스 설치에서 사용할 수 있는 기능만 사용",
    "Open Detection on Incident Reopen":
      "인시던트 다시 열기 시 탐지 열기",
    "Open the Google Authenticator application on your mobile device and make note of the number. The number refreshes every 30 seconds.":
      "모바일 기기에서 Google Authenticator 애플리케이션을 열고 표시된 숫자를 기록해 둡니다. 숫자는 30초마다 새로 고쳐집니다.",
    "Open the Illusive Management console, navigate to Settings > General, and locate the API KEYS section. Generate a new API key with all permissions and copy the token at the end of the process.":
      "Illusive Management console을 열고 Settings > General로 이동하여 API KEYS 섹션을 찾습니다. 모든 권한이 있는 새 API 키를 생성하고 프로세스가 끝날 때 토큰을 복사합니다.",
    "OpenDXL documentation":
      "OpenDXL 설명서",
    "Optional":
      "선택 사항",
    "Optional - Welcome message when creating new incidents using the bot. If left empty (default option) the current default welcome message will be used, i.e., \"Successfully created incident <incident_name>. View it on: <incident_link>\". If the parameter is set to \"no_welcome_message\" value, no message will be displayed. Any non-empty string value set will be used as the custom new incident welcome message.":
      "선택 사항 - 봇을 사용하여 새 인시던트를 생성할 때의 환영 메시지입니다. 비워 두면(기본 옵션) 현재 기본 환영 메시지가 사용됩니다. 예: \"Successfully created incident <incident_name>. View it on: <incident_link>\". 매개변수를 \"no_welcome_message\" 값으로 설정하면 메시지가 표시되지 않습니다. 비어 있지 않은 문자열 값을 설정하면 해당 값이 사용자 지정 새 인시던트 환영 메시지로 사용됩니다.",
    "Other Sources of WildFire API keys":
      "WildFire API 키의 다른 출처",
    "Outgoing - Any changes in Cortex incidents (finding’s status (not status_label), urgency, comments, and owner) will be reflected in Splunk findings.":
      "Outgoing - Cortex 인시던트의 모든 변경 사항(결과의 상태(status_label 제외), 긴급도, 댓글, 소유자)이 Splunk 결과에 반영됩니다.",
    "Outgoing - Any changes in Cortex incidents (notable’s status (not status_label), urgency, comments, and owner) will be reflected in Splunk notables.":
      "Outgoing - Cortex 인시던트의 모든 변경 사항(notable의 상태(status_label 제외), 긴급도, 댓글, 소유자)이 Splunk notable에 반영됩니다.",
    "Outgoing - Mirrors changes from the Cortex incident to the Vectra RUX Detection.":
      "Outgoing - Cortex 인시던트의 변경 사항을 Vectra RUX Detection에 미러링합니다.",
    "Output results of V1 commands to the context data in the old format":
      "V1 명령의 결과를 이전 형식으로 컨텍스트 데이터에 출력",
    "Override Agent":
      "에이전트 재정의",
    "Override the agent header sent with WildFire API requests. auto = auto-detect based on platform (XSOAR/XSIAM), xdr = Cortex XSIAM, xsoartim = XSOAR TIM, pcc = Prisma Cloud Compute, prismaaccessapi = Prisma Access, other = NGFW":
      "WildFire API 요청과 함께 전송되는 에이전트 헤더를 재정의합니다. auto = 플랫폼(XSOAR/XSIAM)에 따라 자동 감지, xdr = Cortex XSIAM, xsoartim = XSOAR TIM, pcc = Prisma Cloud Compute, prismaaccessapi = Prisma Access, other = NGFW",
    "Package resolution for code scanning":
      "코드 스캔용 패키지 확인",
    "Palo Alto Networks documentation":
      "Palo Alto Networks 설명서",
    "Palo Alto recommends that you configure Splunk to produce basic alerts that the SplunkPy integration can ingest, by creating a summary index in which alerts are stored. The SplunkPy integration can then query that index for incident ingestion. It is not recommended to use the Cortex application with Splunk for routine event consumption because this method is not able to be monitored and is not scalable.":
      "Palo Alto에서는 알림이 저장되는 요약 인덱스를 생성하여 SplunkPy 통합이 수집할 수 있는 기본 알림을 생성하도록 Splunk를 구성할 것을 권장합니다. 그러면 SplunkPy 통합이 해당 인덱스를 쿼리하여 인시던트를 수집할 수 있습니다. 이 방법은 모니터링할 수 없고 확장 가능하지 않으므로 일상적인 이벤트 수집에 Splunk와 함께 Cortex 애플리케이션을 사용하는 것은 권장되지 않습니다.",
    "Palo Alto recommends that you configure Splunk to produce basic alerts that the SplunkPy v2 integration can ingest, by creating a summary index in which alerts are stored. The SplunkPy v2 integration can then query that index for incident ingestion. It is not recommended to use the Cortex application with Splunk for routine event consumption because this method is not able to be monitored and is not scalable.":
      "Palo Alto에서는 알림이 저장되는 요약 인덱스를 생성하여 SplunkPy v2 통합이 수집할 수 있는 기본 알림을 생성하도록 Splunk를 구성할 것을 권장합니다. 그러면 SplunkPy v2 통합이 해당 인덱스를 쿼리하여 인시던트를 수집할 수 있습니다. 이 방법은 모니터링할 수 없고 확장 가능하지 않으므로 일상적인 이벤트 수집에 Splunk와 함께 Cortex 애플리케이션을 사용하는 것은 권장되지 않습니다.",
    "PAN support":
      "PAN 지원",
    "Pan-OS/Panorama API Key":
      "Pan-OS/Panorama API 키",
    "Pan-OS/Panorama Server URL":
      "Pan-OS/Panorama 서버 URL",
    "Panorays PAPI base URL":
      "Panorays PAPI 기본 URL",
    "Parameter":
      "매개변수",
    "Password - Used to generate the certificate":
      "비밀번호 - 인증서 생성에 사용됩니다",
    "Password (Required for Basic authentication only)":
      "비밀번호(기본 인증에만 필요)",
    "Password / Access Key Secret":
      "비밀번호 / 액세스 키 시크릿",
    "Password / Client Secret":
      "비밀번호 / 클라이언트 시크릿",
    "Paste the Api Token copied from Orca":
      "Orca에서 복사한 API 토큰을 붙여넣습니다",
    "Paste your Terraform Enterprise token and domain name in the fields below":
      "아래 필드에 Terraform Enterprise 토큰과 도메인 이름을 붙여넣습니다",
    "PingOne has 3 regions, US, EU and Asia.":
      "PingOne에는 US, EU, Asia의 3개 리전이 있습니다.",
    "PingOne Region":
      "PingOne 리전",
    "Please make sure you have the correct role so you have permissions to work with the relevant table.":
      "관련 테이블에서 작업할 권한이 있도록 올바른 역할이 있는지 확인하세요.",
    "Please refer to the documentation for a list of known endpoints.":
      "알려진 엔드포인트 목록은 설명서를 참조하세요.",
    "Port (e.g 443)":
      "포트(예: 443)",
    "Preferred Vendor Threshold. The minimum number of highly trusted vendors required to consider a domain, IP address, URL, or file as malicious.":
      "우선 벤더 임계값. 도메인, IP 주소, URL 또는 파일을 악성으로 간주하는 데 필요한 신뢰도 높은 벤더의 최소 수입니다.",
    "Preferred Vendors List. CSV list of vendors which are considered more trustworthy.":
      "우선 벤더 목록. 더 신뢰할 수 있는 것으로 간주되는 벤더의 CSV 목록입니다.",
    "Preferred Vendors List. CSV list of vendors who are considered more trustworthy.":
      "우선 벤더 목록. 더 신뢰할 수 있는 것으로 간주되는 벤더의 CSV 목록입니다.",
    "Premium Subscription":
      "프리미엄 구독",
    "Premium Subscription Only: Relationship Malicious Files Threshold":
      "프리미엄 구독 전용: 관계 악성 파일 임계값",
    "Premium Subscription Only: Relationship Suspicious Files Threshold":
      "프리미엄 구독 전용: 관계 의심 파일 임계값",
    "Prerequisite":
      "사전 요구 사항",
    "Prerequisite - Connect to McAfee Threat Intelligence Exchange (TIE) using the DXL TIE Client":
      "사전 요구 사항 - DXL TIE Client를 사용하여 McAfee Threat Intelligence Exchange(TIE)에 연결",
    "Prerequisites in order to support JWT":
      "JWT를 지원하기 위한 사전 요구 사항",
    "Prisma Access & NGFW Configuration":
      "Prisma Access 및 NGFW 구성",
    "Prisma Access API Key from Panorama":
      "Panorama의 Prisma Access API 키",
    "Prisma Cloud service tenant admin console URL. The URL for the Prisma Cloud service varies depending on the cluster on which your tenant is deployed. For more information see: https://pan.dev/prisma-cloud/api/cspm/api-urls/.":
      "Prisma Cloud 서비스 테넌트 관리자 콘솔 URL입니다. Prisma Cloud 서비스의 URL은 테넌트가 배포된 클러스터에 따라 다릅니다. 자세한 내용은 다음을 참조하세요: https://pan.dev/prisma-cloud/api/cspm/api-urls/.",
    "Private Key (Required for HTTPS)":
      "개인 키(HTTPS에 필요)",
    "Private url is https://private.tria.ge/api/v0/":
      "비공개 URL은 https://private.tria.ge/api/v0/입니다",
    "Proofpoint on Demand (PoD) administrators must file a support ticket to Proofpoint support to obtain a role with access to an API.":
      "Proofpoint on Demand(PoD) 관리자는 API에 액세스할 수 있는 역할을 얻으려면 Proofpoint 지원팀에 지원 티켓을 제출해야 합니다.",
    "Proofpoint Protection Server Version (e.g., 8.14.2)":
      "Proofpoint Protection Server 버전(예: 8.14.2)",
    "Provide a Client Name and Role, then click “Generate Credentials”.":
      "Client Name과 Role을 입력한 다음 \"Generate Credentials\"를 클릭합니다.",
    "Provide a name for the token and set an expiration time (optional)":
      "토큰 이름을 입력하고 만료 시간을 설정합니다(선택 사항)",
    "Provide server URL and API Token.":
      "서버 URL과 API 토큰을 입력합니다.",
    "Provide server URL, ‘Live Response’ API key and connector.":
      "서버 URL, 'Live Response' API 키 및 커넥터를 입력합니다.",
    "Provides a list of versions by product name or id":
      "제품 이름 또는 ID로 버전 목록을 제공합니다",
    "Provides all or specific vendor details to include vendor name and id":
      "벤더 이름과 ID를 포함하여 전체 또는 특정 벤더의 세부 정보를 제공합니다",
    "Provides full details about a specific vulnerability by id":
      "ID로 특정 취약점에 대한 전체 세부 정보를 제공합니다",
    "Provides full details about a specific vulnerability by vendor and product id":
      "벤더 ID와 제품 ID로 특정 취약점에 대한 전체 세부 정보를 제공합니다",
    "Provides full details about a specific vulnerability by vendor and product name":
      "벤더 이름과 제품 이름으로 특정 취약점에 대한 전체 세부 정보를 제공합니다",
    "Provides full details about vulnerabilities by cve id":
      "CVE ID로 취약점에 대한 전체 세부 정보를 제공합니다",
    "Provides full details about vulnerabilities by product id":
      "제품 ID로 취약점에 대한 전체 세부 정보를 제공합니다",
    "Provides full details about vulnerabilities by vendor id":
      "벤더 ID로 취약점에 대한 전체 세부 정보를 제공합니다",
    "Provides the recent vulnerabilities by dates or hours":
      "날짜 또는 시간별 최근 취약점을 제공합니다",
    "Provides the versions for the specified product by product name or id":
      "제품 이름 또는 ID로 지정한 제품의 버전을 제공합니다",
    "Proxy URL":
      "프록시 URL",
    "Proxy URL password":
      "프록시 URL 비밀번호",
    "Proxy URL Password":
      "프록시 URL 비밀번호",
    "Proxy URL to use in Slack API calls":
      "Slack API 호출에 사용할 프록시 URL",
    "Proxy URL username":
      "프록시 URL 사용자 이름",
    "Proxy URL Username":
      "프록시 URL 사용자 이름",
    "Public key / Private key":
      "공개 키 / 비공개 키",
    "PUBLIC KEYS":
      "공개 키",
    "Push events from Cortex to Splunk":
      "Cortex에서 Splunk로 이벤트 푸시",
    "QRadar API Version":
      "QRadar API 버전",
    "QRadar API versions page":
      "QRadar API 버전 페이지",
    "QRadar filter documentation":
      "QRadar 필터 문서",
    "QRadar Filter Syntax Documentation":
      "QRadar 필터 구문 문서",
    "QRadar offense documentation":
      "QRadar 오펜스 문서",
    "QRadar Offense Documentation":
      "QRadar 오펜스 문서",
    "Quarantine management — Quarantine assets and restore quarantined assets.":
      "격리 관리 — 자산을 격리하고 격리된 자산을 복원합니다.",
    "Query all CVEs monitored by ThreatMon, including CVSS v2, v3, v3.1, and v4 scores.":
      "CVSS v2, v3, v3.1, v4 점수를 포함하여 ThreatMon에서 모니터링하는 모든 CVE를 쿼리합니다.",
    "Query and response with Carbon Black endpoint detection and response.":
      "Carbon Black 엔드포인트 탐지 및 대응을 통한 쿼리 및 응답.",
    "Query CVEs affecting products the company is subscribed to.":
      "회사가 구독 중인 제품에 영향을 미치는 CVE를 쿼리합니다.",
    "Query Example":
      "쿼리 예시",
    "Query to fetch offenses":
      "오펜스를 가져오는 쿼리",
    "Query URL":
      "쿼리 URL",
    "Rasterize Mode":
      "래스터라이즈 모드",
    "Rate Limiting":
      "속도 제한",
    "Rate Limits":
      "속도 제한",
    "Recommended for private/on-prem.":
      "프라이빗/온프레미스 환경에 권장됩니다.",
    "Red Teaming operations require accepting the End User License Agreement.":
      "Red Teaming 작업을 수행하려면 최종 사용자 사용권 계약에 동의해야 합니다.",
    "Redirect URL":
      "리디렉션 URL",
    "Refresh Token":
      "리프레시 토큰",
    "Reliability of the source providing intelligence data":
      "인텔리전스 데이터를 제공하는 소스의 신뢰도",
    "Request data removal for Black Market Monitoring findings directly from XSOAR playbooks.":
      "XSOAR Playbook에서 직접 Black Market Monitoring 결과에 대한 데이터 삭제를 요청합니다.",
    "Request timeout":
      "요청 시간 제한",
    "Request Timeout":
      "요청 시간 제한",
    "Request timeout (in seconds)":
      "요청 시간 제한(초 단위)",
    "Request timeout (in seconds).":
      "요청 시간 제한(초 단위).",
    "Require Demonstrating Proof of Possession (DPoP) header in token requests":
      "토큰 요청에서 DPoP(Demonstrating Proof of Possession) 헤더 필요",
    "Required and used if more than one key is used for signing JWT tokens.":
      "JWT 토큰 서명에 둘 이상의 키를 사용하는 경우 필수이며 사용됩니다.",
    "Required and used if OAuth 2.0 is used for authentication. See detailed instructions on the 'Help' tab.":
      "인증에 OAuth 2.0을 사용하는 경우 필수이며 사용됩니다. 자세한 지침은 '도움말' 탭을 참조하세요.",
    "Required Scopes":
      "필수 스코프",
    "Required when choosing an external engine. You must enable Long running instance to run the web server on this port from within Cortex. Requires a unique port for each long-running integration instance. Do not use the same port for multiple instances.":
      "외부 엔진을 선택하는 경우 필수입니다. Cortex 내에서 이 포트로 웹 서버를 실행하려면 장기 실행 인스턴스를 활성화해야 합니다. 장기 실행 통합 인스턴스마다 고유한 포트가 필요합니다. 여러 인스턴스에서 동일한 포트를 사용하지 마세요.",
    "Requirements":
      "요구 사항",
    "Requires a server URL, and an API key":
      "서버 URL과 API 키가 필요합니다",
    "Reset the “last run”":
      "“last run” 재설정",
    "Resetting the enriching fetch mechanism":
      "보강 가져오기 메커니즘 재설정",
    "Retrieve Your API Key":
      "API 키 가져오기",
    "Retry requests when API is rate limited":
      "API 속도 제한 시 요청 재시도",
    "Return Errors":
      "오류 반환",
    "Return Errors: If this checkbox is not selected, a warning will be returned instead of an error entry.":
      "오류 반환: 이 확인란을 선택하지 않으면 오류 항목 대신 경고가 반환됩니다.",
    "Run the command":
      "명령을 실행합니다",
    "Run this query to fetch new events as incidents":
      "이 쿼리를 실행하여 새 이벤트를 인시던트로 가져옵니다",
    "Runtime API Key":
      "런타임 API 키",
    "Save changes":
      "변경 사항 저장",
    "Save intrusion sets as threat actor indicator types":
      "침입 세트를 위협 행위자 지표 유형으로 저장",
    "Scanner API Base URL":
      "스캐너 API 기본 URL",
    "Scanner API base URL for runtime scanning operations. Default is US region. For other regions: EU: https://service-de.api.aisecurity.paloaltonetworks.com, IN: https://service-in.api.aisecurity.paloaltonetworks.com, SG: https://service-sg.api.aisecurity.paloaltonetworks.com. This must match the region selected during deployment profile creation.":
      "런타임 스캔 작업용 스캐너 API 기본 URL입니다. 기본값은 미국 리전입니다. 다른 리전: EU: https://service-de.api.aisecurity.paloaltonetworks.com, IN: https://service-in.api.aisecurity.paloaltonetworks.com, SG: https://service-sg.api.aisecurity.paloaltonetworks.com. 이 값은 배포 프로필을 만들 때 선택한 리전과 일치해야 합니다.",
    "Scope (Required for using Cortex Azure app)":
      "스코프(Cortex Azure 앱을 사용하는 경우 필수)",
    "Search and Compliance URL":
      "검색 및 규정 준수 URL",
    "Search for SplunkPy and select your integration instance.":
      "SplunkPy를 검색하고 통합 인스턴스를 선택합니다.",
    "Search for SplunkPy v2 and select your integration instance.":
      "SplunkPy v2를 검색하고 통합 인스턴스를 선택합니다.",
    "Search for VulnDB.":
      "VulnDB를 검색합니다.",
    "Seconds to sleep between checking for results":
      "결과 확인 사이의 대기 시간(초)",
    "Secret token":
      "시크릿 토큰",
    "Secret Token":
      "시크릿 토큰",
    "Secret Token(Team Chat App)":
      "시크릿 토큰(Team Chat App)",
    "See detailed instructions on the 'Help' tab.":
      "자세한 지침은 '도움말' 탭을 참조하세요.",
    "See the vendor’s documentation for more details.":
      "자세한 내용은 공급업체 문서를 참조하세요.",
    "Select Scan Type":
      "스캔 유형 선택",
    "Select SSL certificate validation and Proxy if required.":
      "필요한 경우 SSL 인증서 검증과 프록시를 선택합니다.",
    "Select the “Detection Close Reason for Incident Closure” option if you want to set the detection close reason in Vectra when the incident is closed in XSOAR. Default value is ‘Remediated’. This option is only used when the “Close Detection on Incident Closure” option is checked and the mirroring direction is set to ‘Outgoing’ or ‘Incoming And Outgoing’.":
      "XSOAR에서 인시던트가 닫힐 때 Vectra에서 탐지 종료 사유를 설정하려면 “Detection Close Reason for Incident Closure” 옵션을 선택합니다. 기본값은 ‘Remediated’입니다. 이 옵션은 “Close Detection on Incident Closure” 옵션이 선택되어 있고 미러링 방향이 ‘Outgoing’ 또는 ‘Incoming And Outgoing’으로 설정된 경우에만 사용됩니다.",
    "Select the “Detection Status for Incident Reopen” option if you want to set the detection status in Vectra when the incident is reopened in XSOAR. Default value is ‘Escalated’. This option is only used when the “Open Detection on Incident Reopen” option is checked and the mirroring direction is set to ‘Outgoing’ or ‘Incoming And Outgoing’.":
      "XSOAR에서 인시던트가 다시 열릴 때 Vectra에서 탐지 상태를 설정하려면 “Detection Status for Incident Reopen” 옵션을 선택합니다. 기본값은 ‘Escalated’입니다. 이 옵션은 “Open Detection on Incident Reopen” 옵션이 선택되어 있고 미러링 방향이 ‘Outgoing’ 또는 ‘Incoming And Outgoing’으로 설정된 경우에만 사용됩니다.",
    "Select the date format of your ServiceNow instance. Mandatory when using the `Use Display Value` option. More details under the troubleshooting section in the documentation of the integration. The integration supports the ServiceNow default time format (full form) `HH:mm:ss` with support to `a` notation for AM/PM.":
      "ServiceNow 인스턴스의 날짜 형식을 선택합니다. `Use Display Value` 옵션을 사용하는 경우 필수입니다. 자세한 내용은 통합 문서의 문제 해결 섹션을 참조하세요. 이 통합은 ServiceNow 기본 시간 형식(전체 형식) `HH:mm:ss`를 지원하며 AM/PM을 나타내는 `a` 표기도 지원합니다.",
    "Select the field that determines when to trigger a termination incident for deactivated employees.":
      "비활성화된 직원에 대한 퇴사 인시던트를 트리거할 시점을 결정하는 필드를 선택합니다.",
    "Select the list of relationships to retrieve from the API. Note that relationships that are signed with * key are available only for the VirusTotal premium API key.":
      "API에서 가져올 관계 목록을 선택합니다. * 표시가 있는 관계는 VirusTotal 프리미엄 API 키에서만 사용할 수 있습니다.",
    "Select this checkbox if to use OAuth 2.0 authentication. See (?) for more information.":
      "OAuth 2.0 인증을 사용하려면 이 확인란을 선택합니다. 자세한 내용은 (?)를 참조하세요.",
    "Select this checkbox to retrieve comments and work notes without accessing the `sys_field_journal` table.":
      "이 확인란을 선택하면 `sys_field_journal` 테이블에 액세스하지 않고 댓글과 작업 노트를 가져옵니다.",
    "Select this checkbox to retrieve the body of an email in HTML format. If this checkbox is not selected, a psuedo-text representation of HTML emails will be returned and some functionality in other packs (e.g., email previews in the Email Communication pack) may not provide their full capabilities.":
      "이 확인란을 선택하면 이메일 본문을 HTML 형식으로 가져옵니다. 이 확인란을 선택하지 않으면 HTML 이메일의 의사 텍스트 표현이 반환되며, 다른 팩의 일부 기능(예: Email Communication 팩의 이메일 미리 보기)이 모든 기능을 제공하지 못할 수 있습니다.",
    "Select this checkbox to use JWT authentication. See (?) for more information.":
      "JWT 인증을 사용하려면 이 확인란을 선택합니다. 자세한 내용은 (?)를 참조하세요.",
    "Select this option if the bot was originally created as multi-tenant and later converted to single-tenant. The system will detect the bot type automatically in all other standard cases.":
      "봇이 처음에 멀티 테넌트로 생성되었다가 나중에 단일 테넌트로 변환된 경우 이 옵션을 선택합니다. 그 밖의 모든 표준적인 경우에는 시스템이 봇 유형을 자동으로 감지합니다.",
    "Select which domains you would like to pull indicators from. Additionally, each domain has a subset of “concepts”. Most of the domains have all of the concepts, with the exception of the “PRE-ATT&CK” domain. There are only a small subset of “concepts” within this domain. Any concept that does not exist will be skipped.":
      "지표를 가져올 도메인을 선택합니다. 또한 각 도메인에는 “개념”의 하위 집합이 있습니다. 대부분의 도메인에는 모든 개념이 있지만 “PRE-ATT&CK” 도메인은 예외입니다. 이 도메인에는 “개념”이 일부만 있습니다. 존재하지 않는 개념은 건너뜁니다.",
    "Select which event types to fetch from KOI.":
      "KOI에서 가져올 이벤트 유형을 선택합니다.",
    "Select which log types to fetch.":
      "가져올 로그 유형을 선택합니다.",
    "Select which log types to fetch. Selecting 'All' will use all the log type queries in the fetch. To choose a specific set of queries, select their log types from the dropdown (make sure the 'All' option is unselected).":
      "가져올 로그 유형을 선택합니다. 'All'을 선택하면 가져오기에서 모든 로그 유형 쿼리를 사용합니다. 특정 쿼리 집합을 선택하려면 드롭다운에서 해당 로그 유형을 선택합니다('All' 옵션이 선택 해제되어 있어야 합니다).",
    "Select which record types to fetch. You can select Alerts, Incidents, or both.":
      "가져올 레코드 유형을 선택합니다. 알림, 인시던트 또는 둘 다 선택할 수 있습니다.",
    "Select your instance.":
      "인스턴스를 선택합니다.",
    "Selecting 'All' will use all the log type queries in the fetch.":
      "'All'을 선택하면 가져오기에서 모든 로그 유형 쿼리를 사용합니다.",
    "Selecting “All” will use all the log type queries in the fetch.":
      "“All”을 선택하면 가져오기에서 모든 로그 유형 쿼리를 사용합니다.",
    "Self-serve pay-as-you-go keys are entitled to all six by default.":
      "셀프 서비스 종량제 키에는 기본적으로 6개 모두가 부여됩니다.",
    "Send emails including support for rich emails with HTML and embedded files.":
      "HTML 및 포함된 파일이 있는 리치 이메일 지원을 포함하여 이메일을 보냅니다.",
    "Send notifications about incidents to the dedicated channel":
      "인시던트에 대한 알림을 전용 채널로 전송",
    "Sender address":
      "발신자 주소",
    "Sender address can be specified as 'user@host.com' or 'Full Name <user@host.com>'":
      "발신자 주소는 'user@host.com' 또는 'Full Name <user@host.com>' 형식으로 지정할 수 있습니다",
    "Server Address":
      "서버 주소",
    "Server base URL":
      "서버 기본 URL",
    "Server base URL (e.g., https://192.168.0.1/publicapi)":
      "서버 기본 URL(예: https://192.168.0.1/publicapi)",
    "Server Host or IP":
      "서버 호스트 또는 IP",
    "Server Host or IP (e.g., 10.1.1.9 or panorama.my.domain)":
      "서버 호스트 또는 IP(예: 10.1.1.9 또는 panorama.my.domain)",
    "Server IP / Hostname (e.g. 1.2.3.4)":
      "서버 IP / 호스트 이름(예: 1.2.3.4)",
    "Server NetBIOS (AD) Name":
      "서버 NetBIOS(AD) 이름",
    "Server Port":
      "서버 포트",
    "Server URL (e.g. 'https://api.zoom.us/v2/')":
      "서버 URL(예: 'https://api.zoom.us/v2/')",
    "Server URL (e.g. https://192.168.0.1:20013)":
      "서버 URL(예: https://192.168.0.1:20013)",
    "Server URL (e.g. https://analysis.lastline.com)":
      "서버 URL(예: https://analysis.lastline.com)",
    "Server URL (e.g. https://api.kennasecurity.com)":
      "서버 URL(예: https://api.kennasecurity.com)",
    "Server URL (e.g. https://example.net)":
      "서버 URL(예: https://example.net)",
    "Server URL (e.g. https://vxsuz5.manage.trendmicro.com)":
      "서버 URL(예: https://vxsuz5.manage.trendmicro.com)",
    "Server URL (e.g., 'https://api.zoom.us/v2/')":
      "서버 URL(예: 'https://api.zoom.us/v2/')",
    "Server URL (e.g., https://192.0.2.0:8080)":
      "서버 URL(예: https://192.0.2.0:8080)",
    "Server URL (e.g., https://192.168.0.1:10000)":
      "서버 URL(예: https://192.168.0.1:10000)",
    "Server URL (e.g., https://api.securitycenter.microsoft.com)":
      "서버 URL(예: https://api.securitycenter.microsoft.com)",
    "Server URL (e.g., https://cloud.vmray.com)":
      "서버 URL(예: https://cloud.vmray.com)",
    "Server URL (e.g., https://demisto.zendesk.com)":
      "서버 URL(예: https://demisto.zendesk.com)",
    "Server URL (e.g., https://xxxxxxxx.pphosted.com:10000)":
      "서버 URL(예: https://xxxxxxxx.pphosted.com:10000)",
    "Server URL used to enter the Sophos XG Firewall web console. e.g., https://ip:port/":
      "Sophos XG Firewall 웹 콘솔에 접속하는 데 사용하는 서버 URL입니다. 예: https://ip:port/",
    "Service Key (for triggering events only)":
      "서비스 키(이벤트 트리거 전용)",
    "Service Key (for triggering, acknowledging and resolving events only)":
      "서비스 키(이벤트 트리거, 확인, 해결 전용)",
    "ServiceNow API Version (e.g. 'v1')":
      "ServiceNow API 버전(예: 'v1')",
    "ServiceNow API Version (e.g. 'v1'). Specify this value to use an endpoint version other than the latest.":
      "ServiceNow API 버전(예: 'v1'). 최신 버전이 아닌 엔드포인트 버전을 사용하려면 이 값을 지정합니다.",
    "ServiceNow docs":
      "ServiceNow 문서",
    "ServiceNow Instance":
      "ServiceNow 인스턴스",
    "ServiceNow Instance URL":
      "ServiceNow 인스턴스 URL",
    "ServiceNow ticket column to be set as the incident name. Default is the incident number":
      "인시던트 이름으로 설정할 ServiceNow 티켓 열. 기본값은 인시던트 번호입니다",
    "ServiceNow URL (https://<domain>.service-now.com)":
      "ServiceNow URL(https://<domain>.service-now.com)",
    "ServiceNow URL, in the format https://company.service-now.com/":
      "ServiceNow URL. 형식: https://company.service-now.com/",
    "ServiceNowGenericFeed fetches records from a ServiceNow CMDB API endpoint and ingests them as indicators into Cortex TIM with user desired tags.":
      "ServiceNowGenericFeed는 ServiceNow CMDB API 엔드포인트에서 레코드를 가져와 사용자가 원하는 태그와 함께 지표로 Cortex TIM에 수집합니다.",
    "Set the “Detection Close Reason for Incident Closure” option to set the detection close reason in Vectra when the incident is closed in XSOAR. Default value is ‘Benign’. This option is only used when the “Close Detection on Incident Closure” option is checked and the mirroring direction is set to ‘Outgoing’ or ‘Incoming And Outgoing’.":
      "XSOAR에서 인시던트가 닫힐 때 Vectra에서 탐지 종료 사유를 설정하려면 “Detection Close Reason for Incident Closure” 옵션을 설정합니다. 기본값은 ‘Benign’입니다. 이 옵션은 “Close Detection on Incident Closure” 옵션이 선택되어 있고 미러링 방향이 ‘Outgoing’ 또는 ‘Incoming And Outgoing’으로 설정된 경우에만 사용됩니다.",
    "Set the “Detection Status for Incident Reopen” option to set the detection status in Vectra when the incident is reopened in XSOAR. Default value is ‘Escalated’. This option is only used when the “Open Detection on Incident Reopen” option is checked and the mirroring direction is set to ‘Outgoing’ or ‘Incoming And Outgoing’.":
      "XSOAR에서 인시던트가 다시 열릴 때 Vectra에서 탐지 상태를 설정하려면 “Detection Status for Incident Reopen” 옵션을 설정합니다. 기본값은 ‘Escalated’입니다. 이 옵션은 “Open Detection on Incident Reopen” 옵션이 선택되어 있고 미러링 방향이 ‘Outgoing’ 또는 ‘Incoming And Outgoing’으로 설정된 경우에만 사용됩니다.",
    "Set the DBot Score Threshold to a number between 1 and 100 (default is 70). Any IP addresses associated with an Entity queried with a ThreatX score greater than or equal to the DBot Score Threshold will be assigned a DBot Score of 3 (Malicious).":
      "DBot Score Threshold를 1에서 100 사이의 숫자로 설정합니다(기본값은 70). ThreatX 점수가 DBot Score Threshold 이상인 상태로 쿼리된 엔터티와 연결된 모든 IP 주소에는 DBot Score 3(Malicious)이 할당됩니다.",
    "Set the fetch interval and enable fetching":
      "가져오기 간격을 설정하고 가져오기를 활성화합니다",
    "Set the Incidents Fetch Interval to a maximum of 15 minutes if the number of incidents is expected to exceed the specified max fetch limit in each fetch cycle.":
      "각 가져오기 주기에서 인시던트 수가 지정된 최대 가져오기 제한을 초과할 것으로 예상되는 경우 Incidents Fetch Interval을 최대 15분으로 설정합니다.",
    "Set up a SpecterOps BloodHound Enterprise integration instance":
      "SpecterOps BloodHound Enterprise 통합 인스턴스 설정",
    "Sets the AWS_STS_REGIONAL_ENDPOINTS environment variable to specify the AWS STS endpoint resolution logic. By default, this option is set to “legacy” in AWS. Leave empty if the environment variable is already set using server configuration.":
      "AWS_STS_REGIONAL_ENDPOINTS 환경 변수를 설정하여 AWS STS 엔드포인트 확인 로직을 지정합니다. 기본적으로 AWS에서는 이 옵션이 “legacy”로 설정됩니다. 서버 구성을 사용해 환경 변수가 이미 설정된 경우에는 비워 둡니다.",
    "Setting the lookback parameter will fetch duplicated incidents in the event that incidents that fall out during the given look-back time were already fetched.":
      "lookback 매개변수를 설정하면 지정된 룩백 시간 동안 범위를 벗어난 인시던트가 이미 가져온 경우 중복된 인시던트를 가져오게 됩니다.",
    "Setup Instructions":
      "설정 지침",
    "Setup Steps":
      "설정 단계",
    "Sever URLs":
      "서버 URL",
    "Shodan is a search engine for Internet-connected devices. Unlike traditional search engines that index websites, Shodan indexes information about the devices connected to the internet, such as servers, routers, webcams, and other IoT devices.":
      "Shodan은 인터넷에 연결된 디바이스를 위한 검색 엔진입니다. 웹사이트를 색인화하는 기존 검색 엔진과 달리 Shodan은 서버, 라우터, 웹캠 및 기타 IoT 디바이스 등 인터넷에 연결된 디바이스에 대한 정보를 색인화합니다.",
    "Should anyone be allowed to create incidents by DM":
      "누구나 DM으로 인시던트를 생성할 수 있도록 허용",
    "Sigma and Intrusion Detection Rules Threshold":
      "Sigma 및 침입 탐지 규칙 임계값",
    "Sign in to Okta Admin Console.":
      "Okta Admin Console에 로그인합니다.",
    "Sign in to the Tenzai application.":
      "Tenzai 애플리케이션에 로그인합니다.",
    "Site security monitoring, external sharing controls, and document compliance for SharePoint":
      "SharePoint의 사이트 보안 모니터링, 외부 공유 제어, 문서 규정 준수",
    "Skip on corrupted images":
      "손상된 이미지 건너뛰기",
    "Slack (Deprecated)":
      "Slack(사용 중단됨)",
    "Slack API access token":
      "Slack API 액세스 토큰",
    "Slack API bot token":
      "Slack API 봇 토큰",
    "Slack API Token for channel creation":
      "채널 생성용 Slack API 토큰",
    "Slack Bot API token":
      "Slack 봇 API 토큰",
    "Slack Documentation":
      "Slack 문서",
    "Slack v2 (Deprecated)":
      "Slack v2(사용 중단됨)",
    "Slack V3 utilizes “Socket Mode” to enable the integration to communicate directly with Slack for mirroring.":
      "Slack V3는 “Socket Mode”를 활용하여 통합이 미러링을 위해 Slack과 직접 통신할 수 있도록 합니다.",
    "SMTP Port":
      "SMTP 포트",
    "SMTP Sender":
      "SMTP 발신자",
    "Snow documentation":
      "Snow 문서",
    "Source Priority Level":
      "소스 우선순위 수준",
    "Specify a unique name for the API client.":
      "API 클라이언트의 고유한 이름을 지정합니다.",
    "Splunk Token":
      "Splunk 토큰",
    "Splunk token-based authentication":
      "Splunk 토큰 기반 인증",
    "SSH Certificate":
      "SSH 인증서",
    "SSH connection":
      "SSH 연결",
    "SSH Credentials for CLI":
      "CLI용 SSH 자격 증명",
    "SSH credentials should be your username and password for the PAN-OS CLI - they can be tested using a standalone SSH client to verify that you are able to connect to the CLI on the SSH port.":
      "SSH 자격 증명은 PAN-OS CLI의 사용자 이름과 비밀번호여야 합니다. 독립 실행형 SSH 클라이언트를 사용하여 테스트하면 SSH 포트에서 CLI에 연결할 수 있는지 확인할 수 있습니다.",
    "SSH Port":
      "SSH 포트",
    "Step 1: Login and add your authorization code":
      "1단계: 로그인하고 권한 부여 코드 추가",
    "Step 2: Activate the API.":
      "2단계: API를 활성화합니다.",
    "Steps to follow":
      "따라야 할 단계",
    "Subdomain":
      "하위 도메인",
    "Submission Server URL":
      "제출 서버 URL",
    "Submit Black Market Monitoring data removal requests — checks company credit rights and returns an appropriate error if the quota is exceeded.":
      "Black Market Monitoring 데이터 삭제 요청을 제출합니다. 회사의 크레딧 권한을 확인하고 할당량을 초과한 경우 적절한 오류를 반환합니다.",
    "Submit takedown requests for eligible findings (Phishing Domains, Rogue Mobile Apps, Fake Social Media Accounts).":
      "해당되는 발견 사항(피싱 도메인, 악성 모바일 앱, 가짜 소셜 미디어 계정)에 대한 테이크다운 요청을 제출합니다.",
    "Submit takedown requests for eligible threat findings.":
      "해당되는 위협 발견 사항에 대한 테이크다운 요청을 제출합니다.",
    "Sumo Logic URL (region specific), for example: https://api.us2.sumologic.com/api/":
      "Sumo Logic URL(리전별)(예: https://api.us2.sumologic.com/api/)",
    "Supplier finding severities":
      "공급업체 발견 사항 심각도",
    "Supplier finding statuses":
      "공급업체 발견 사항 상태",
    "Supplier Findings":
      "공급업체 발견 사항",
    "Support for Multiple Teams":
      "여러 팀 지원",
    "Support for template replacement variables using {var} syntax":
      "{var} 구문을 사용하는 템플릿 대체 변수를 지원합니다",
    "Supported Authentication Methods":
      "지원되는 인증 방법",
    "Supported formats: 2 minutes, 2 hours, 2 days, 2 weeks, 2 months, 2 years, yyyy-mm-dd, yyyy-mm-ddTHH:MM:SSZ.":
      "지원되는 형식: 2 minutes, 2 hours, 2 days, 2 weeks, 2 months, 2 years, yyyy-mm-dd, yyyy-mm-ddTHH:MM:SSZ.",
    "Supported Indicators":
      "지원되는 지표",
    "Supported REST API versions":
      "지원되는 REST API 버전",
    "Supports automated playbooks for streamlined response.":
      "간소화된 대응을 위한 자동화된 Playbook을 지원합니다.",
    "Supports folder ID and sub-folders, for example Inbox/Phishing.":
      "폴더 ID와 하위 폴더를 지원합니다(예: Inbox/Phishing).",
    "Suppress errors for non found indicators":
      "찾을 수 없는 지표에 대한 오류 표시 안 함",
    "Sync Query":
      "동기화 쿼리",
    "Sync user profiles on first run":
      "첫 실행 시 사용자 프로필 동기화",
    "Sysdig Configuration":
      "Sysdig 구성",
    "Tag: The ruleset's name or the identifier for the YARA rule matching the file to fetch its notifications. Leave blank to fetch all.":
      "Tag: 파일의 알림을 가져오기 위해 일치하는 YARA 규칙의 규칙 세트 이름 또는 식별자입니다. 모두 가져오려면 비워 두세요.",
    "Takedown Server URL":
      "테이크다운 서버 URL",
    "Team name (e.g. my-team-name)":
      "팀 이름(예: my-team-name)",
    "Template - Panorama instances only":
      "템플릿 - Panorama 인스턴스에만 해당",
    "Tenant ID (Required for using Self Deployed Azure app)":
      "테넌트 ID(자체 배포 Azure 앱을 사용하는 경우 필수)",
    "Tenant Services Group ID":
      "테넌트 서비스 그룹 ID",
    "Tenzai App URL (e.g., https://app.tenzai.io)":
      "Tenzai 앱 URL(예: https://app.tenzai.io)",
    "Tenzai Server URL":
      "Tenzai 서버 URL",
    "Tenzai Server URL (e.g., https://api.tenzai.io)":
      "Tenzai 서버 URL(예: https://api.tenzai.io)",
    "Terminal Type":
      "터미널 유형",
    "Terms and Conditions":
      "이용 약관",
    "Test fails with a connection or timeout error.":
      "테스트가 연결 오류 또는 시간 초과 오류로 실패합니다.",
    "Test fails with an authorization error.":
      "테스트가 권한 부여 오류로 실패합니다.",
    "Test the connection":
      "연결 테스트",
    "Test the integration. If successful, you’ll see a test message in the channel.":
      "통합을 테스트합니다. 성공하면 채널에 테스트 메시지가 표시됩니다.",
    "The “Test” button does not fully validate all command functionality. To ensure the commands are working correctly, run each one and validate that API permissions are sufficient.":
      "“테스트” 버튼은 모든 명령 기능을 완전히 검증하지 않습니다. 명령이 올바르게 작동하는지 확인하려면 각 명령을 실행하고 API 권한이 충분한지 검증하세요.",
    "The amount of time to go back when performing the first fetch, or when creating a mapping using the Select Schema option.":
      "첫 번째 가져오기를 수행하거나 Select Schema 옵션을 사용하여 매핑을 만들 때 거슬러 올라갈 기간입니다.",
    "The API key can be found by going to your Hatching UI, clicking your account name in the top right, and the API key will be listed in the left hand side under “API Key”":
      "API 키는 Hatching UI에서 오른쪽 상단의 계정 이름을 클릭하면 확인할 수 있으며, 왼쪽의 “API Key” 아래에 표시됩니다",
    "The API key for authenticating with the KOI API. See the help section for instructions on creating an API key.":
      "KOI API 인증에 사용할 API 키입니다. API 키 생성 방법은 도움말 섹션을 참조하세요.",
    "The API Key to use for the connection":
      "연결에 사용할 API 키",
    "The API route of the requested information in ServiceNow":
      "ServiceNow에서 요청한 정보의 API 경로",
    "The authentication type and credentials to use: Basic Auth (Username and Password), Bearer Auth (Username and Password), or API Key Auth (API Key ID and API Key).":
      "사용할 인증 유형과 자격 증명: Basic Auth(사용자 이름 및 비밀번호), Bearer Auth(사용자 이름 및 비밀번호) 또는 API Key Auth(API 키 ID 및 API 키).",
    "The backwards window is a way for you to configure the longest delay you would like to support.":
      "백워드 윈도우를 사용하면 지원하려는 가장 긴 지연 시간을 구성할 수 있습니다.",
    "The base URL of the Tenzai API.":
      "Tenzai API의 기본 URL입니다.",
    "The base URL of the Tenzai web app, used to build a deep link (referenceUrl) to the scan results. Leave empty to derive it from the Tenzai Server URL (the API and web-app hosts mirror each other); set it only to override that.":
      "스캔 결과에 대한 딥링크(referenceUrl)를 만드는 데 사용하는 Tenzai 웹 앱의 기본 URL입니다. 비워 두면 Tenzai 서버 URL에서 파생됩니다(API와 웹 앱 호스트는 서로 대응됩니다). 재정의하려는 경우에만 설정하세요.",
    "The best value to set depends on the delays that you see in your system (consult with your Splunk expert / master), the number of events in your system, and other network properties.":
      "설정하기에 가장 적합한 값은 시스템에서 발생하는 지연 시간(Splunk 전문가/마스터와 상담하세요), 시스템의 이벤트 수 및 기타 네트워크 속성에 따라 달라집니다.",
    "The category of attack paths to fetch. Default is all.":
      "가져올 공격 경로의 범주입니다. 기본값은 모두입니다.",
    "The client machine name to identify the client to the server on a new connection.":
      "새 연결에서 서버에 클라이언트를 식별하기 위한 클라이언트 머신 이름입니다.",
    "The connection security. The `SSL/TLS` first establishes a secure `SSL/TLS` connection and conducts SMTP over that connection, and STARTTLS starts with unencrypted SMTP and then switches to SSL/TLS to ensure security.":
      "연결 보안입니다. `SSL/TLS`는 먼저 보안 `SSL/TLS` 연결을 설정한 후 해당 연결을 통해 SMTP를 수행하며, STARTTLS는 암호화되지 않은 SMTP로 시작한 다음 SSL/TLS로 전환하여 보안을 보장합니다.",
    "The date or relative timestamp from which to begin fetching events detections.":
      "이벤트 탐지 가져오기를 시작할 날짜 또는 상대 타임스탬프입니다.",
    "The date or relative timestamp from which to begin fetching events detections. Supported formats: 2 minutes, 2 hours, 2 days, 2 weeks, 2 months, 2 years, yyyy-mm-dd, yyyy-mm-ddTHH:MM:SSZ. For example: 01 Oct 2025, 01 Mar 2021 04:45:33, 2025-12-17T14:05:44Z.":
      "이벤트 탐지 가져오기를 시작할 날짜 또는 상대 타임스탬프입니다. 지원되는 형식: 2 minutes, 2 hours, 2 days, 2 weeks, 2 months, 2 years, yyyy-mm-dd, yyyy-mm-ddTHH:MM:SSZ. 예: 01 Oct 2025, 01 Mar 2021 04:45:33, 2025-12-17T14:05:44Z.",
    "The default Jev model. Use a pinned version when playbook thresholds have been validated against that version.":
      "기본 Jev 모델입니다. Playbook 임계값이 해당 버전을 기준으로 검증된 경우 고정된 버전을 사용하세요.",
    "The default region to use with the takedown Service.":
      "테이크다운 서비스에 사용할 기본 리전입니다.",
    "The default timeout (in seconds) for API calls. Default is 15 seconds.":
      "API 호출의 기본 제한 시간(초)입니다. 기본값은 15초입니다.",
    "The domain controller hostname. This is useful for environments with DFS servers as it is used to identify the DFS domain information automatically.":
      "도메인 컨트롤러 호스트 이름입니다. DFS 도메인 정보를 자동으로 식별하는 데 사용되므로 DFS 서버가 있는 환경에서 유용합니다.",
    "The eDiscovery APIs in Microsoft Graph only work with eDiscovery (Premium) cases.":
      "Microsoft Graph의 eDiscovery API는 eDiscovery (Premium) 케이스에서만 작동합니다.",
    "The environment from which to fetch attack paths. Default is all.":
      "공격 경로를 가져올 환경입니다. 기본값은 모두입니다.",
    "The fetched data may take up to 10 minutes to be ingested into the tenant after each fetch cycle.":
      "가져온 데이터는 각 가져오기 주기 후 테넌트에 수집되기까지 최대 10분이 걸릴 수 있습니다.",
    "The field needed from the ServiceNow response which contains the indicator value":
      "지표 값이 포함된 ServiceNow 응답에서 필요한 필드",
    "The filtering works the same way as in the Prisma Cloud UI. When providing several values for the same filter it gets only alerts that have one of these values, and when providing different values, it gets only alerts that have all the stated field values.":
      "필터링은 Prisma Cloud UI와 동일하게 작동합니다. 동일한 필터에 여러 값을 제공하면 해당 값 중 하나를 가진 알림만 가져오고, 서로 다른 필터에 값을 제공하면 지정한 모든 필드 값을 가진 알림만 가져옵니다.",
    "The following features are not supported in non-ES (Enterprise Security) Splunk.":
      "다음 기능은 ES(Enterprise Security)가 아닌 Splunk에서는 지원되지 않습니다.",
    "The format should be https://company.service-now.com/":
      "형식은 https://company.service-now.com/ 이어야 합니다",
    "The format should be: [ssl://]<hostname>[:port]. Get the hostname and port from the `brokerlist.properties` file. The broker should be reachable from the Cortex server.":
      "형식은 [ssl://]<hostname>[:port]이어야 합니다. 호스트 이름과 포트는 `brokerlist.properties` 파일에서 확인하세요. 브로커는 Cortex 서버에서 접근할 수 있어야 합니다.",
    "The FQDN/IP of the IdentityIQ server to connect":
      "연결할 IdentityIQ 서버의 FQDN/IP",
    "The FQDN/IP of the IdentityNow server to connect":
      "연결할 IdentityNow 서버의 FQDN/IP",
    "The generated incidents are notifications from vt-private-livehunt-notifications-list.":
      "생성되는 인시던트는 vt-private-livehunt-notifications-list의 알림입니다.",
    "The header of an external form hyperlink.":
      "외부 양식 하이퍼링크의 헤더입니다.",
    "The host URL. When using this parameter, select the Custom option for the Azure Cloud. More information about National clouds can be found here - https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud":
      "호스트 URL입니다. 이 매개변수를 사용할 때는 Azure Cloud에서 Custom 옵션을 선택하세요. 국가별 클라우드에 대한 자세한 내용은 여기에서 확인할 수 있습니다 - https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud",
    "The HTTP request timeout in seconds.":
      "HTTP 요청 제한 시간(초)입니다.",
    "The incident name to give to the created incident":
      "생성된 인시던트에 지정할 인시던트 이름",
    "The initial time to fetch from":
      "가져오기를 시작할 초기 시간",
    "The instance configuration URL based on the server location: <br/>US: https://api.aperture.paloaltonetworks.com<br/> EU: https://api.aperture-eu.paloaltonetworks.com<br/> APAC: https://api.aperture-apac.paloaltonetworks.com":
      "서버 위치에 따른 인스턴스 구성 URL: <br/>US: https://api.aperture.paloaltonetworks.com<br/> EU: https://api.aperture-eu.paloaltonetworks.com<br/> APAC: https://api.aperture-apac.paloaltonetworks.com",
    "The integration pulls the Mcafee SIEM triggered alarms that are unacknowledged.":
      "이 통합은 McAfee SIEM에서 트리거된 미확인 알람을 가져옵니다.",
    "The integration uses both the Panorama XML API and SSH into the PAN-OS CLI.":
      "이 통합은 Panorama XML API와 PAN-OS CLI에 대한 SSH를 모두 사용합니다.",
    "The integration uses the Panorama XML API.":
      "이 통합은 Panorama XML API를 사용합니다.",
    "The interval for fetching attack paths.":
      "공격 경로를 가져오는 간격입니다.",
    "The iZOOlogic API server URL.":
      "iZOOlogic API 서버 URL입니다.",
    "The Kafka brokers to connect to, as a comma separated list, in the form: ip:port,ip2:port2":
      "연결할 Kafka 브로커를 ip:port,ip2:port2 형식의 쉼표로 구분된 목록으로 지정합니다.",
    "The KOI API server URL.":
      "KOI API 서버 URL입니다.",
    "The max incidents per fetch parameter specifies the maximum number of incidents to fetch":
      "가져오기당 최대 인시던트 수 매개변수는 가져올 최대 인시던트 수를 지정합니다",
    "The maximum number of events detections to fetch each time. If the value is greater than 200, it will be considered as 200. The maximum is 200.":
      "한 번에 가져올 이벤트 탐지의 최대 수입니다. 값이 200보다 크면 200으로 간주됩니다. 최대값은 200입니다.",
    "The maximum number of incidents per fetch":
      "가져오기당 최대 인시던트 수",
    "The maximum number of incidents to fetch per Log Type Query. To ensure optimal efficiency, it is strongly advised to keep the limit as low as possible. The maximum is 5,000.":
      "로그 유형 쿼리당 가져올 최대 인시던트 수입니다. 최적의 효율을 위해 제한을 가능한 한 낮게 유지하는 것이 좋습니다. 최대값은 5,000입니다.",
    "The maximum number of incidents to fetch per type per fetch cycle.":
      "가져오기 주기당 유형별로 가져올 최대 인시던트 수입니다.",
    "The maximum number of incidents to retrieve per fetch cycle. Hard upper limit is 200. Increase if your environment ingests more PagerDuty incidents per fetch interval than the configured default.":
      "가져오기 주기당 검색할 최대 인시던트 수입니다. 하드 상한은 200입니다. 사용 중인 환경에서 가져오기 간격당 수집되는 PagerDuty 인시던트가 구성된 기본값보다 많은 경우 값을 늘리세요.",
    "The maximum number of items to fetch per type. Applies to both alerts and incidents. Note that when fetching incidents, no more than 50 can be fetched per cycle, due to a Microsoft limitation.":
      "유형별로 가져올 최대 항목 수입니다. 알림과 인시던트 모두에 적용됩니다. 인시던트를 가져올 때는 Microsoft 제한으로 인해 주기당 최대 50개까지만 가져올 수 있습니다.",
    "The message to send to the user to ask for feedback.":
      "피드백을 요청하기 위해 사용자에게 보낼 메시지입니다.",
    "The mirroring direction in which to mirror the detections. You can mirror 'Incoming' (from Vectra to XSOAR), 'Outgoing' (from XSOAR to Vectra), or in both directions.":
      "탐지를 미러링할 방향입니다. 'Incoming'(Vectra에서 XSOAR로), 'Outgoing'(XSOAR에서 Vectra로) 또는 양방향으로 미러링할 수 있습니다.",
    "The mirroring is strictly tied to Incident type “Vectra RUX Events Detection” & Incoming mapper “Vectra RUX - Incoming Mapper” If you want to change or use your custom incident type/mapper then make sure changes related to these are present.":
      "미러링은 인시던트 유형 “Vectra RUX Events Detection” 및 수신 매퍼 “Vectra RUX - Incoming Mapper”에 엄격하게 연결되어 있습니다. 사용자 지정 인시던트 유형/매퍼를 변경하거나 사용하려면 이와 관련된 변경 사항이 포함되어 있는지 확인하세요.",
    "The mirroring settings apply only for incidents that are fetched after applying the settings.":
      "미러링 설정은 설정을 적용한 후 가져온 인시던트에만 적용됩니다.",
    "The name of the lookup column containing the Cortex username.":
      "Cortex 사용자 이름이 포함된 조회 열의 이름입니다.",
    "The name of the lookup table containing the Splunk username.":
      "Splunk 사용자 이름이 포함된 조회 테이블의 이름입니다.",
    "The name of the lookup table in Splunk, containing the username's mapping data.":
      "사용자 이름 매핑 데이터가 포함된 Splunk의 조회 테이블 이름입니다.",
    "The name of the MCP server on the ServiceNow instance. Use `sn_mcp_server_default` for the preconfigured Quickstart Server.":
      "ServiceNow 인스턴스에 있는 MCP 서버의 이름입니다. 사전 구성된 Quickstart Server에는 `sn_mcp_server_default`를 사용하세요.",
    "The number of objects to process. Maximum value is 500":
      "처리할 개체 수입니다. 최대값은 500입니다",
    "The number of times to try and re-create connections with rapid7 instance when there are temporary connection errors":
      "일시적인 연결 오류가 발생할 때 rapid7 인스턴스와의 연결을 다시 만들기 위해 시도할 횟수",
    "The OAuth 2.0 client ID from ZIdentity.":
      "ZIdentity의 OAuth 2.0 클라이언트 ID입니다.",
    "The OAuth 2.0 client secret from ZIdentity.":
      "ZIdentity의 OAuth 2.0 클라이언트 보안 비밀입니다.",
    "The operations are accessed through port 10000.":
      "작업은 포트 10000을 통해 액세스합니다.",
    "The optional model name that overrides the selected model.":
      "선택한 모델을 재정의하는 선택적 모델 이름입니다.",
    "The Palo Alto Networks Best Practice Assessment (BPA) measures your usage of our Next-Generation Firewall (NGFW) and Panorama™ security management capabilities across your deployment, enabling you to make adjustments that maximize your return on investment and strengthen security.":
      "Palo Alto Networks Best Practice Assessment(BPA)는 배포 환경 전반에서 차세대 방화벽(NGFW) 및 Panorama™ 보안 관리 기능의 사용 현황을 측정하여, 투자 수익을 극대화하고 보안을 강화할 수 있도록 조정할 수 있게 해 줍니다.",
    "The Panorama integration now supports fetch incidents.":
      "이제 Panorama 통합에서 인시던트 가져오기를 지원합니다.",
    "The Panorays API permits 150 requests per minute and blocks the caller for one hour when that is exceeded. Keep this below 150.":
      "Panorays API는 분당 150개의 요청을 허용하며, 이를 초과하면 호출자를 1시간 동안 차단합니다. 150 미만으로 유지하세요.",
    "The parameter uses the AQL SELECT syntax. For more info see: https://www.ibm.com/support/knowledgecenter/en/SS42VS_7.3.3/com.ibm.qradar.doc/c_aql_intro.html":
      "이 매개변수는 AQL SELECT 구문을 사용합니다. 자세한 내용은 다음을 참조하세요: https://www.ibm.com/support/knowledgecenter/en/SS42VS_7.3.3/com.ibm.qradar.doc/c_aql_intro.html",
    "The per-request timeout for calls to the Tenzai API. Kept low so a stalled or unreachable host fails fast and the validation poll automation can reschedule instead of exceeding its execution timeout.":
      "Tenzai API 호출의 요청별 제한 시간입니다. 응답이 없거나 연결할 수 없는 호스트가 빠르게 실패하고 검증 폴링 자동화가 실행 제한 시간을 초과하지 않고 다시 예약될 수 있도록 낮게 유지됩니다.",
    "The port for the Elastic API.":
      "Elastic API의 포트입니다.",
    "The port for the Kibana API.":
      "Kibana API의 포트입니다.",
    "The port in Splunk server which is open to the REST API calls.":
      "REST API 호출을 위해 열려 있는 Splunk 서버의 포트입니다.",
    "The possible values for severities can be found under “policy.severity” entry. In order to add a severity, use the filter name “policy.severity”":
      "심각도에 사용할 수 있는 값은 “policy.severity” 항목에서 확인할 수 있습니다. 심각도를 추가하려면 필터 이름 “policy.severity”를 사용하세요.",
    "The queries that will be included during the fetch are decided according to the “Log Type” parameter (Multiple select dropdown).":
      "가져오기 중에 포함되는 쿼리는 “Log Type” 매개변수(다중 선택 드롭다운)에 따라 결정됩니다.",
    "The query to use when fetching incidents":
      "인시던트를 가져올 때 사용할 쿼리",
    "The query used to collect indicators to sync from Cortex.":
      "Cortex에서 동기화할 지표를 수집하는 데 사용하는 쿼리입니다.",
    "The raw JSON string to use as the sample data":
      "샘플 데이터로 사용할 원시 JSON 문자열",
    "The redirect URI registered in the ServiceNow OAuth Inbound Integration. Must match the URI configured on the ServiceNow side.":
      "ServiceNow OAuth Inbound Integration에 등록된 리디렉션 URI입니다. ServiceNow 측에 구성된 URI와 일치해야 합니다.",
    "The required information is automatically retrieved from your Cortex TIM license.":
      "필요한 정보는 Cortex TIM 라이선스에서 자동으로 검색됩니다.",
    "The scope of the rule-set should be narrowed to catch only indicators that you want to analyze by a playbook.":
      "규칙 세트의 범위는 Playbook으로 분석하려는 지표만 포함하도록 좁혀야 합니다.",
    "The Server URL assigned to your organization. For example, www.acme.zslogin.net.":
      "조직에 할당된 서버 URL입니다. 예: www.acme.zslogin.net.",
    "The server URL of your Magnet Automate instance.":
      "Magnet Automate 인스턴스의 서버 URL입니다.",
    "The ServiceNow instance URL (e.g., `https://dev12345.service-now.com`).":
      "ServiceNow 인스턴스 URL입니다(예: `https://dev12345.service-now.com`).",
    "The Silent Push platform focuses on proactive threat intelligence and threat hunting. It offers a comprehensive view of global internet-facing infrastructure, helping organizations detect and counteract cyber threats before they manifest.":
      "Silent Push 플랫폼은 선제적 위협 인텔리전스와 위협 헌팅에 중점을 둡니다. 전 세계 인터넷 노출 인프라에 대한 포괄적인 가시성을 제공하여, 조직이 사이버 위협이 현실화되기 전에 탐지하고 대응할 수 있도록 지원합니다.",
    "The simplest way to acquire this token is for an Org Owner to create a new Slack app, add the admin OAuth scope, install the app, and use the generated token.":
      "이 토큰을 얻는 가장 간단한 방법은 Org Owner가 새 Slack 앱을 만들고 admin OAuth 범위를 추가한 다음 앱을 설치하고 생성된 토큰을 사용하는 것입니다.",
    "The single mailbox this integration operates against. During authentication, ensure you are logged in to this email address. This mailbox is used by fetch-incidents and by all mail commands. Because this integration uses delegated permissions, it can only access this signed-in user's mailbox.":
      "이 통합이 작동하는 단일 사서함입니다. 인증 중에는 이 이메일 주소로 로그인되어 있는지 확인하세요. 이 사서함은 fetch-incidents 및 모든 메일 명령에서 사용됩니다. 이 통합은 위임된 권한을 사용하므로 로그인한 사용자의 사서함에만 액세스할 수 있습니다.",
    "The Splunk search query by which to fetch events. The default query fetches ES finding events. You can edit this query to fetch other types of events. Note, that to fetch ES finding events, make sure to include the \\`notable\\` macro in your query.":
      "이벤트를 가져오는 데 사용하는 Splunk 검색 쿼리입니다. 기본 쿼리는 ES finding 이벤트를 가져옵니다. 이 쿼리를 편집하여 다른 유형의 이벤트를 가져올 수 있습니다. ES finding 이벤트를 가져오려면 쿼리에 `notable` 매크로를 반드시 포함하세요.",
    "The Splunk search query by which to fetch events. The default query fetches ES notable events. You can edit this query to fetch other types of events. Note, that to fetch ES notable events, make sure to include the \\`notable\\` macro in your query.":
      "이벤트를 가져오는 데 사용하는 Splunk 검색 쿼리입니다. 기본 쿼리는 ES notable 이벤트를 가져옵니다. 이 쿼리를 편집하여 다른 유형의 이벤트를 가져올 수 있습니다. ES notable 이벤트를 가져오려면 쿼리에 `notable` 매크로를 반드시 포함하세요.",
    "The Splunk server URL. Port 8089 (Splunk's default REST API port) is used automatically. Only include the port in the URL if using a non-default port. Examples: 'https://splunk.example.com' (uses default port 8089) or 'https://splunk.example.com:8090' (uses custom port 8090).":
      "Splunk 서버 URL입니다. 포트 8089(Splunk의 기본 REST API 포트)가 자동으로 사용됩니다. 기본값이 아닌 포트를 사용하는 경우에만 URL에 포트를 포함하세요. 예: 'https://splunk.example.com'(기본 포트 8089 사용) 또는 'https://splunk.example.com:8090'(사용자 지정 포트 8090 사용).",
    "The Standard Authentication Profile of type Oauth should be already present in ServiceNow and has to be added to the Policy.":
      "OAuth 유형의 표준 인증 프로필이 ServiceNow에 이미 있어야 하며 정책에 추가되어야 합니다.",
    "The statuses of PagerDuty incidents to ingest. Include \"resolved\" to capture short-lived incidents that move to resolved between fetch cycles.":
      "수집할 PagerDuty 인시던트의 상태입니다. 가져오기 주기 사이에 해결됨으로 전환되는 단기 인시던트를 수집하려면 “resolved”를 포함하세요.",
    "The tag value should be used to mirror the detection note by adding the same tag in the notes.":
      "탐지 메모를 미러링하려면 메모에 동일한 태그를 추가하여 해당 태그 값을 사용해야 합니다.",
    "The Tennant Service Group must contain an active “AIOps for NGFW (Free)” application.":
      "테넌트 서비스 그룹에는 활성 상태의 “AIOps for NGFW (Free)” 애플리케이션이 포함되어 있어야 합니다.",
    "The Tennant Service Group must contain an active “AIOps for NGFW (Free)” application. For more information about the service activation, visit the following link: https://docs.paloaltonetworks.com/ngfw/aiops/about/activate-aiops-for-ngfw#activate-aiops-for-ngfw_section_xjs_p55_fyb":
      "테넌트 서비스 그룹에는 활성 상태의 “AIOps for NGFW (Free)” 애플리케이션이 포함되어 있어야 합니다. 서비스 활성화에 대한 자세한 내용은 다음 링크를 참조하세요: https://docs.paloaltonetworks.com/ngfw/aiops/about/activate-aiops-for-ngfw#activate-aiops-for-ngfw_section_xjs_p55_fyb",
    "The Test button does not ensure sufficient permissions for all integration commands.":
      "테스트 버튼은 모든 통합 명령에 대해 충분한 권한이 있음을 보장하지 않습니다.",
    "The Threatmon integration allows Cortex to connect with the Threatmon platform to automatically retrieve and update incident data. This integration is designed to help security teams streamline incident management workflows by synchronizing Threatmon alarms and their status directly into XSOAR.":
      "Threatmon 통합을 사용하면 Cortex가 Threatmon 플랫폼에 연결하여 인시던트 데이터를 자동으로 검색하고 업데이트할 수 있습니다. 이 통합은 Threatmon 알람과 해당 상태를 XSOAR로 직접 동기화하여 보안 팀의 인시던트 관리 워크플로를 간소화하도록 설계되었습니다.",
    "The ticket type can be: incident, problem, change_request, sc_request, sc_task or sc_req_item.":
      "티켓 유형은 incident, problem, change_request, sc_request, sc_task 또는 sc_req_item일 수 있습니다.",
    "The time range between create_after and created_before that is sent to the API when fetching older incidents. If timeout errors occur, consider changing this value.":
      "오래된 인시던트를 가져올 때 API로 전송되는 create_after와 created_before 사이의 시간 범위입니다. 제한 시간 초과 오류가 발생하면 이 값을 변경해 보세요.",
    "The time range for the initial data fetch. If timeout errors occur, consider changing this value.":
      "초기 데이터 가져오기의 시간 범위입니다. 제한 시간 초과 오류가 발생하면 이 값을 변경해 보세요.",
    "The timeout for HTTP(S) requests (in seconds) to the Proofpoint server.":
      "Proofpoint 서버에 대한 HTTP(S) 요청의 제한 시간(초)입니다.",
    "The timeout of the HTTP requests sent to Cortex (in seconds).":
      "Cortex로 보내는 HTTP 요청의 제한 시간(초)입니다.",
    "The timeout of the HTTP requests sent to McAfee ePO API (in seconds), the max timeout allowed is 300s.":
      "McAfee ePO API로 보내는 HTTP 요청의 제한 시간(초)입니다. 허용되는 최대 제한 시간은 300초입니다.",
    "The timeout of the HTTP requests sent to Microsoft Graph API (in seconds).":
      "Microsoft Graph API로 보내는 HTTP 요청의 제한 시간(초)입니다.",
    "The URL to use for the Submission Service.":
      "Submission Service에 사용할 URL입니다.",
    "The URL to use for the Takedown Service.":
      "Takedown Service에 사용할 URL입니다.",
    "The user must also have the “Allow Multiple Logins” capability.":
      "사용자에게는 “Allow Multiple Logins” 기능도 있어야 합니다.",
    "The value can be updated if necessary.":
      "필요한 경우 값을 업데이트할 수 있습니다.",
    "The value of kid in JWT Verifier Maps has to be the same as Key Id in JWT signing key.":
      "JWT Verifier Maps의 kid 값은 JWT signing key의 Key Id와 동일해야 합니다.",
    "The vsys is located in the Firewall URL; e.g., https://<server>#device::<vsys>::device/setup":
      "vsys는 방화벽 URL에 있습니다(예: https://<server>#device::<vsys>::device/setup)",
    "The webhook URL in the Teams channel.":
      "Teams 채널의 웹훅 URL입니다.",
    "There are 2 methods to authenticate.":
      "인증 방법은 2가지가 있습니다.",
    "There are two main use cases for the SplunkPy integration.":
      "SplunkPy 통합의 주요 사용 사례는 두 가지입니다.",
    "There are two main use cases for the SplunkPy v2 integration.":
      "SplunkPy v2 통합의 주요 사용 사례는 두 가지입니다.",
    "There is a limit to 1000 API calls per day with the free dev API key.":
      "무료 개발자 API 키에는 하루 1000회의 API 호출 제한이 있습니다.",
    "Therefore, we can’t use index time as our primary search key without making the searches inefficient.":
      "따라서 검색을 비효율적으로 만들지 않고는 인덱스 시간을 기본 검색 키로 사용할 수 없습니다.",
    "These roles are required to make API calls.":
      "API를 호출하려면 이러한 역할이 필요합니다.",
    "This article will help you configure your Splunk integration, set up a basic flow, and start ingesting incidents from Splunk to Cortex.":
      "이 문서는 Splunk 통합을 구성하고, 기본 플로우를 설정하고, Splunk에서 Cortex로 인시던트 수집을 시작하는 데 도움이 됩니다.",
    "This delay can be caused by an inefficient Splunk architecture, causing higher event indexing latency. However, it can also be “by design”, e.g., if some endpoints / machines that generate Splunk events are usually offline.":
      "이 지연은 비효율적인 Splunk 아키텍처로 인해 이벤트 인덱싱 지연 시간이 길어져서 발생할 수 있습니다. 그러나 Splunk 이벤트를 생성하는 일부 엔드포인트/머신이 보통 오프라인 상태인 경우처럼 “설계상” 발생하는 것일 수도 있습니다.",
    "This delay can be caused by an inefficient Splunk architecture, causing higher event indexing latency. However, it can also be “by design”, e.g., if some endpoints or machines that generate Splunk events are frequently offline.":
      "이 지연은 비효율적인 Splunk 아키텍처로 인해 이벤트 인덱싱 지연 시간이 길어져서 발생할 수 있습니다. 그러나 Splunk 이벤트를 생성하는 일부 엔드포인트/머신이 자주 오프라인 상태인 경우처럼 “설계상” 발생하는 것일 수도 있습니다.",
    "This enrichment provides additional information about assets, drilldown, and identities that are related to the finding events you ingest.":
      "이 보강 기능은 수집한 finding 이벤트와 관련된 자산, 드릴다운 및 ID에 대한 추가 정보를 제공합니다.",
    "This feature is available from Cortex version 6.0.0.":
      "이 기능은 Cortex 버전 6.0.0부터 사용할 수 있습니다.",
    "This feature is compliant with XSOAR version 6.0 and above.":
      "이 기능은 XSOAR 버전 6.0 이상과 호환됩니다.",
    "This feature is supported by Splunk Enterprise Security only.":
      "이 기능은 Splunk Enterprise Security에서만 지원됩니다.",
    "This field determines from which instance the XSOAR incident was created. It is a required field for XSOAR to enable mirroring support.":
      "이 필드는 XSOAR 인시던트가 어느 인스턴스에서 생성되었는지 결정합니다. XSOAR에서 미러링 지원을 사용하려면 필수 필드입니다.",
    "This field determines the mirroring direction for the incident. It is a required field for XSOAR to enable mirroring support.":
      "이 필드는 인시던트의 미러링 방향을 결정합니다. XSOAR에서 미러링 지원을 사용하려면 필수 필드입니다.",
    "This field determines what would be the tag needed to mirror the XSOAR entry out to Vectra RUX. It is a required field for XSOAR to enable mirroring support.":
      "이 필드는 XSOAR 항목을 Vectra RUX로 미러링하는 데 필요한 태그를 결정합니다. XSOAR에서 미러링 지원을 사용하려면 필수 필드입니다.",
    "This field is require when running as ‘long running instance’ - please set the max amount of events to fetch.":
      "이 필드는 ‘long running instance’로 실행할 때 필수입니다. 가져올 최대 이벤트 수를 설정하세요.",
    "This implies that new fetched events might have a slightly different structure than old events fetched so far.":
      "이는 새로 가져온 이벤트의 구조가 지금까지 가져온 이전 이벤트와 약간 다를 수 있음을 의미합니다.",
    "This integration allows 3 types of enrichments for fetched findings: Drilldown, Asset, and Identity.":
      "이 통합은 가져온 finding에 대해 Drilldown, Asset, Identity의 3가지 유형의 보강을 지원합니다.",
    "This integration allows 3 types of enrichments for fetched notables: Drilldown, Asset, and Identity.":
      "이 통합은 가져온 notable에 대해 Drilldown, Asset, Identity의 3가지 유형의 보강을 지원합니다.",
    "This integration can be used to pull indicators from ServiceNow with a given user query and add them to the Threat Intelligence Module.":
      "이 통합을 사용하면 지정한 사용자 쿼리로 ServiceNow에서 지표를 가져와 Threat Intelligence Module에 추가할 수 있습니다.",
    "This integration connects securely with a ServiceNow Model Context Protocol (MCP) server, allowing you to access its tools in real time.":
      "이 통합은 ServiceNow Model Context Protocol(MCP) 서버에 안전하게 연결하여 해당 도구에 실시간으로 액세스할 수 있게 해 줍니다.",
    "This integration currently supports fetching DLP incidents from “NGFW” and “Prisma Access” channels only.":
      "이 통합은 현재 “NGFW” 및 “Prisma Access” 채널의 DLP 인시던트 가져오기만 지원합니다.",
    "This integration enables Cortex to access and run commands on a terminal in a remote location (via SSH).":
      "이 통합을 사용하면 Cortex가 (SSH를 통해) 원격 위치의 터미널에 액세스하고 명령을 실행할 수 있습니다.",
    "This integration enables executing commands with different permission levels.":
      "이 통합을 사용하면 서로 다른 권한 수준으로 명령을 실행할 수 있습니다.",
    "This integration enables you to manage the features that are available in the Security & Compliance Center from Cortex XSOAR/XSIAM.":
      "이 통합을 사용하면 Cortex XSOAR/XSIAM에서 Security & Compliance Center에서 사용할 수 있는 기능을 관리할 수 있습니다.",
    "This integration enables you to manage the features that are available in the Security & Compliance Center from XSOAR.":
      "이 통합을 사용하면 XSOAR에서 Security & Compliance Center에서 사용할 수 있는 기능을 관리할 수 있습니다.",
    "This integration enables you to programmatically generate BPA data for both the free and premium instances of AIOps for NGFW.":
      "이 통합을 사용하면 AIOps for NGFW의 무료 및 프리미엄 인스턴스 모두에 대한 BPA 데이터를 프로그래밍 방식으로 생성할 수 있습니다.",
    "This integration enables you to run message traces and manage junk mail rules in Microsoft O365 - Exchange Online.":
      "이 통합을 사용하면 Microsoft O365 - Exchange Online에서 메시지 추적을 실행하고 스팸 메일 규칙을 관리할 수 있습니다.",
    "This integration is for uploading and downloading files from an SMB server.":
      "이 통합은 SMB 서버와 파일을 업로드하고 다운로드하기 위한 것입니다.",
    "This integration is set up by default on Cortex with the Threat Intel Module (TIM). It is designed for internal use with the TIM Sample Analysis feature. To run ad hoc CLI commands to generate WildFire reports, use the Palo Alto Networks WildFire v2 integration instead.":
      "이 통합은 Threat Intel Module(TIM)이 있는 Cortex에서 기본적으로 설정됩니다. TIM Sample Analysis 기능에서 내부적으로 사용하도록 설계되었습니다. 임시 CLI 명령을 실행하여 WildFire 보고서를 생성하려면 대신 Palo Alto Networks WildFire v2 통합을 사용하세요.",
    "This integration only supports Carbon Black Cloud on-premise APIs.":
      "이 통합은 Carbon Black Cloud 온프레미스 API만 지원합니다.",
    "This integration requires a Cortex Threat Intelligence Management (TIM) license.":
      "이 통합에는 Cortex Threat Intelligence Management(TIM) 라이선스가 필요합니다.",
    "This integration requires a Threat Intelligence Management (TIM) license.":
      "이 통합에는 Threat Intelligence Management(TIM) 라이선스가 필요합니다.",
    "This integration searches the unified audit log to view user and administrator activity in your organization.":
      "이 통합은 통합 감사 로그를 검색하여 조직 내 사용자 및 관리자 활동을 확인합니다.",
    "This integration supports a default Classifier (Panorama Classifier) and Mapper (Panorama Mapper) that handles incidents returned from the API.":
      "이 통합은 API에서 반환되는 인시던트를 처리하는 기본 Classifier(Panorama Classifier)와 Mapper(Panorama Mapper)를 지원합니다.",
    "This integration was integrated and tested with McAfee ePO v5.3.2 and v5.10.0 .":
      "이 통합은 McAfee ePO v5.3.2 및 v5.10.0에서 통합 및 테스트되었습니다.",
    "This integration was integrated and tested with version 1.0 of Prisma SASE API.":
      "이 통합은 Prisma SASE API 버전 1.0에서 통합 및 테스트되었습니다.",
    "This integration was integrated and tested with version 3.5 of Vectra API.":
      "이 통합은 Vectra API 버전 3.5에서 통합 및 테스트되었습니다.",
    "This integration was integrated and tested with version 8.11.12 of Proofpoint Protection Server.":
      "이 통합은 Proofpoint Protection Server 버전 8.11.12에서 통합 및 테스트되었습니다.",
    "This integration was integrated and tested with version xx of VulnDB":
      "이 통합은 VulnDB 버전 xx에서 통합 및 테스트되었습니다",
    "This is how the filter is applied to the query: “ORDERBYopened_at^opened_at>[Last Run]. To prevent duplicate incidents, this field is mandatory for fetching incidents.":
      "쿼리에 필터가 적용되는 방식은 다음과 같습니다: “ORDERBYopened_at^opened_at>[Last Run]. 중복 인시던트를 방지하려면 인시던트를 가져올 때 이 필드가 필수입니다.",
    "This method applies to Jamf versions 10.35.0 and above.":
      "이 방법은 Jamf 버전 10.35.0 이상에 적용됩니다.",
    "This method applies to Jamf versions 10.49.0 and above.":
      "이 방법은 Jamf 버전 10.49.0 이상에 적용됩니다.",
    "This parameter determines the size of the occurrence time “sliding window” we will support in our queries. For example, if set for 2 hours, we will always search for events that occurred up to 2 hours ago (and will of course ignore duplicates).":
      "이 매개변수는 쿼리에서 지원할 이벤트 발생 시간 “슬라이딩 윈도우”의 크기를 결정합니다. 예를 들어 2시간으로 설정하면 최대 2시간 전까지 발생한 이벤트를 항상 검색합니다(중복은 당연히 무시됩니다).",
    "This parameter will write additional data to the logs and should only be used when you are directed to by XSOAR support.":
      "이 매개변수는 추가 데이터를 로그에 기록합니다. XSOAR 지원 팀에서 지시한 경우에만 사용하세요.",
    "This section explains how to configure the instance of Hello IAM World in Cortex.":
      "이 섹션에서는 Cortex에서 Hello IAM World 인스턴스를 구성하는 방법을 설명합니다.",
    "This section explains how to fully configure the instance of Orca Security in Cortex.":
      "이 섹션에서는 Cortex에서 Orca Security 인스턴스를 완전히 구성하는 방법을 설명합니다.",
    "This section will help you configure your Splunk v2 integration, set up a basic flow, and start ingesting events from Splunk to Cortex XSIAM.":
      "이 섹션은 Splunk v2 통합을 구성하고, 기본 플로우를 설정하고, Splunk에서 Cortex XSIAM으로 이벤트 수집을 시작하는 데 도움이 됩니다.",
    "This value is mapped to the dbotMirrorTags incident field in Cortex, which defines how Cortex handles notes when you tag them in the War Room. This is required for mirroring notes from Cortex to Vectra RUX.":
      "이 값은 Cortex의 dbotMirrorTags 인시던트 필드에 매핑되며, War Room에서 메모에 태그를 지정할 때 Cortex가 메모를 처리하는 방식을 정의합니다. Cortex에서 Vectra RUX로 메모를 미러링하려면 이 값이 필요합니다.",
    "Threatmon API credentials (API key).":
      "Threatmon API 자격 증명(API 키).",
    "Threatmon Integration":
      "Threatmon 통합",
    "Threatmon is a threat intelligence and monitoring platform that provides actionable alerts to security teams. Integrating Threatmon with XSOAR enables more efficient triage, faster response times, and better visibility into your security operations.":
      "Threatmon은 보안 팀에 실행 가능한 알림을 제공하는 위협 인텔리전스 및 모니터링 플랫폼입니다. Threatmon을 XSOAR와 통합하면 더 효율적인 선별, 더 빠른 대응 시간, 보안 운영에 대한 더 나은 가시성을 확보할 수 있습니다.",
    "ThreatX Server URL (e.g., https://provision.threatx.io)":
      "ThreatX 서버 URL(예: https://provision.threatx.io)",
    "Threshold":
      "임계값",
    "Through the integration you can subscribe to new content types or stop your subscription, list the available content of each content type, and most importantly - fetch new content records from content types of your choice as Cortex incidents.":
      "이 통합을 통해 새 콘텐츠 유형을 구독하거나 구독을 중지하고, 각 콘텐츠 유형에서 사용 가능한 콘텐츠를 나열하고, 무엇보다 선택한 콘텐츠 유형의 새 콘텐츠 레코드를 Cortex 인시던트로 가져올 수 있습니다.",
    "Time between fetches (in seconds). The actual time will be the maximum between the selected value and the server configuration.":
      "가져오기 간격(초 단위)입니다. 실제 간격은 선택한 값과 서버 구성 중 더 큰 값입니다.",
    "Time to wait before taking a screenshot (in seconds)":
      "스크린샷을 찍기 전 대기 시간(초 단위)",
    "Time zone of the collector to fetch from (see detailed description)":
      "가져올 수집기의 시간대(자세한 설명 참조)",
    "Timeframe for first fetch (in seconds)":
      "첫 번째 가져오기 기간(초 단위)",
    "Timeout (in seconds) for HTTP requests to Zscaler":
      "Zscaler에 대한 HTTP 요청의 제한 시간(초 단위)",
    "Timestamp field to filter by (e.g., `opened_at`)":
      "필터링할 타임스탬프 필드(예: `opened_at`)",
    "Timestamp field to filter by (e.g., `opened_at`) This is how the filter is applied to the query: “ORDERBYopened_at^opened_at>[Last Run]. To prevent duplicate incidents, this field is mandatory for fetching incidents.":
      "필터링할 타임스탬프 필드(예: `opened_at`) 필터는 다음과 같이 쿼리에 적용됩니다: “ORDERBYopened_at^opened_at>[Last Run]. 중복 인시던트를 방지하려면 인시던트를 가져올 때 이 필드가 필수입니다.",
    "Timestamp field to filter by (e.g., `opened_at`) This is how the filter is applied to the query: \"ORDERBYopened_at^opened_at>[Last Run]\".":
      "필터링할 타임스탬프 필드(예: `opened_at`) 필터는 다음과 같이 쿼리에 적용됩니다: “ORDERBYopened_at^opened_at>[Last Run]”.",
    "Timestamp field to filter by (e.g., `opened_at`) This is how the filter is applied to the query: \"ORDERBYopened_at^opened_at>[Last Run]\". To prevent duplicate incidents, this field is mandatory for fetching incidents.":
      "필터링할 타임스탬프 필드(예: `opened_at`) 필터는 다음과 같이 쿼리에 적용됩니다: “ORDERBYopened_at^opened_at>[Last Run]”. 중복 인시던트를 방지하려면 인시던트를 가져올 때 이 필드가 필수입니다.",
    "Timezone of Nitro ESM server in minutes e.g. for gmt +3 set +180 (set only if different than Cortex XSOAR server)":
      "Nitro ESM 서버의 시간대(분 단위)입니다. 예를 들어 GMT+3인 경우 +180으로 설정합니다(Cortex XSOAR 서버와 다른 경우에만 설정).",
    "Tip":
      "팁",
    "To choose a specific set of queries, select their log types from the dropdown (make sure “All” option is unselected).":
      "특정 쿼리 집합을 선택하려면 드롭다운에서 로그 유형을 선택합니다(“All” 옵션이 선택 해제되어 있는지 확인하세요).",
    "To choose a specific set of queries, select their log types from the dropdown (make sure the 'All' option is unselected).":
      "특정 쿼리 집합을 선택하려면 드롭다운에서 로그 유형을 선택합니다('All' 옵션이 선택 해제되어 있는지 확인하세요).",
    "To configure this integration you can either use Email and Password, or the API token.":
      "이 통합을 구성하려면 이메일과 비밀번호 또는 API 토큰 중 하나를 사용할 수 있습니다.",
    "To generate the new token, press the “Generate” button under the API Tokens section and fill the required details.":
      "새 토큰을 생성하려면 “API Tokens” 섹션에서 “Generate” 버튼을 누르고 필요한 세부 정보를 입력합니다.",
    "To prevent duplicate incidents, this field is mandatory for fetching incidents.":
      "중복 인시던트를 방지하려면 인시던트를 가져올 때 이 필드가 필수입니다.",
    "To reduce the number of lookups made to the VT API, this option can be selected to gracefully skip enrichment of any IP addresses allocated for private networks.":
      "VT API에 대한 조회 횟수를 줄이려면 이 옵션을 선택하여 프라이빗 네트워크에 할당된 IP 주소의 보강을 원활하게 건너뛸 수 있습니다.",
    "To use a custom mapper, you must first duplicate the mapper and update the fields in the copy of the mapper. (Refer to the “Create a custom mapper consisting of the default Vectra RUX mapper” section for more information.)":
      "사용자 지정 매퍼를 사용하려면 먼저 매퍼를 복제하고 복제한 매퍼의 필드를 업데이트해야 합니다. (자세한 내용은 “Create a custom mapper consisting of the default Vectra RUX mapper” 섹션을 참조하세요.)",
    "To use ServiceNow on Cortex, ensure your user account has the rest_api_explorer and web_service_admin roles.":
      "Cortex에서 ServiceNow를 사용하려면 사용자 계정에 rest_api_explorer 및 web_service_admin 역할이 있는지 확인하세요.",
    "To use this integration, you need a VirusTotal API key.":
      "이 통합을 사용하려면 VirusTotal API 키가 필요합니다.",
    "To use this integration, you need to add a new Azure App Registration in the Azure Portal.":
      "이 통합을 사용하려면 Azure Portal에서 새 Azure 앱 등록을 추가해야 합니다.",
    "To use this integration, you will need to add a new Azure App Registration in the Azure Portal.":
      "이 통합을 사용하려면 Azure Portal에서 새 Azure 앱 등록을 추가해야 합니다.",
    "Token (received from the admin consent - see Detailed Instructions (?)":
      "토큰(관리자 동의에서 받음 - 자세한 지침(?) 참조",
    "Token Exchange":
      "토큰 교환",
    "Token Format":
      "토큰 형식",
    "Token ID":
      "토큰 ID",
    "Token ID and Token Key (credentials field)":
      "토큰 ID 및 토큰 키(자격 증명 필드)",
    "Token Key":
      "토큰 키",
    "Troubleshooting enrichment status":
      "보강 상태 문제 해결",
    "Trust any certificate (not secure). Make sure to mark this parameter if you want the SlackBlockBuilder script to send a response back to the incident context.":
      "모든 인증서를 신뢰합니다(안전하지 않음). SlackBlockBuilder 스크립트가 인시던트 컨텍스트로 응답을 다시 보내도록 하려면 이 매개변수를 선택하세요.",
    "Two-factor authentication (2FA) must be enabled on the console and configured for the account accessing the API.":
      "콘솔에서 2단계 인증(2FA)을 활성화하고 API에 액세스하는 계정에 대해 구성해야 합니다.",
    "Type of authentication - either Authorization Code (recommended) or Client Credentials.":
      "인증 유형입니다. Authorization Code(권장) 또는 Client Credentials 중 하나입니다.",
    "Type the Host -ip, username, password, and Port.":
      "호스트 IP, 사용자 이름, 비밀번호 및 포트를 입력합니다.",
    "Uncheck the “Close Detection on Incident Closure” option if you don’t want to close the detection in Vectra when the incident is closed in XSOAR. This option is only used when the mirroring direction is set to ‘Outgoing’ or ‘Incoming And Outgoing’.":
      "XSOAR에서 인시던트가 종료될 때 Vectra에서 탐지를 종료하지 않으려면 “Close Detection on Incident Closure” 옵션을 선택 해제합니다. 이 옵션은 미러링 방향이 'Outgoing' 또는 'Incoming And Outgoing'으로 설정된 경우에만 사용됩니다.",
    "Uncheck the “Open Detection on Incident Reopen” option if you don’t want to open the detection in Vectra when the incident is reopened in XSOAR. This option is only used when the mirroring direction is set to ‘Outgoing’ or ‘Incoming And Outgoing’.":
      "XSOAR에서 인시던트가 다시 열릴 때 Vectra에서 탐지를 열지 않으려면 “Open Detection on Incident Reopen” 옵션을 선택 해제합니다. 이 옵션은 미러링 방향이 'Outgoing' 또는 'Incoming And Outgoing'으로 설정된 경우에만 사용됩니다.",
    "Under Classifier, select “N/A”.":
      "Classifier에서 “N/A”를 선택합니다.",
    "Under Classifier, select N/A.":
      "Classifier에서 N/A를 선택합니다.",
    "Under Incident type, select “Vectra RUX Events Detection”.":
      "Incident type에서 “Vectra RUX Events Detection”을 선택합니다.",
    "Under Mapper (incoming), select “Vectra RUX - Incoming Mapper” for default mapping.":
      "기본 매핑을 사용하려면 Mapper (incoming)에서 “Vectra RUX - Incoming Mapper”를 선택합니다.",
    "Update “Max Fetch” & “First Fetch Time” based on your requirements.":
      "요구 사항에 따라 “Max Fetch” 및 “First Fetch Time”을 업데이트합니다.",
    "Update the status of existing Threatmon incidents (e.g., Open, In Progress, Resolved).":
      "기존 Threatmon 인시던트의 상태를 업데이트합니다(예: Open, In Progress, Resolved).",
    "Update the status of Threatmon incidents from within XSOAR.":
      "XSOAR 내에서 Threatmon 인시던트의 상태를 업데이트합니다.",
    "UPN Password":
      "UPN 비밀번호",
    "URL and Port":
      "URL 및 포트",
    "URL Malicious Threshold. Minimum number of positive results from VT scanners to consider the URL malicious.":
      "URL 악성 임계값입니다. URL을 악성으로 간주하기 위한 VT 스캐너의 양성 결과 최소 개수입니다.",
    "URL of the Vectra AI platform.":
      "Vectra AI 플랫폼의 URL입니다.",
    "URL Relationships":
      "URL 관계",
    "URL Suspicious Threshold. Minimum number of positive and suspicious results from VT scanners to consider the URL suspicious.":
      "URL 의심 임계값입니다. URL을 의심스러운 것으로 간주하기 위한 VT 스캐너의 양성 및 의심 결과 최소 개수입니다.",
    "URL Threshold. Minimum number of positive results from VT scanners to consider the URL malicious.":
      "URL 임계값입니다. URL을 악성으로 간주하기 위한 VT 스캐너의 양성 결과 최소 개수입니다.",
    "Use “Tag” to filter which notification tag to get.":
      "가져올 알림 태그를 필터링하려면 “Tag”를 사용합니다.",
    "Use API token instead of Username and Password":
      "사용자 이름과 비밀번호 대신 API 토큰 사용",
    "Use both values to configure the integration instance.":
      "두 값을 모두 사용하여 통합 인스턴스를 구성합니다.",
    "Use Display Value":
      "표시 값 사용",
    "Use Enterprise DLP API":
      "Enterprise DLP API 사용",
    "Use JWT Authentication":
      "JWT 인증 사용",
    "Use Live Response for VMware Carbon Black Endpoint Standard or VMware Carbon Black EDR (previously known as Carbon Black Defense and Carbon Black Response respectively).":
      "VMware Carbon Black Endpoint Standard 또는 VMware Carbon Black EDR(각각 이전 명칭 Carbon Black Defense 및 Carbon Black Response)에 Live Response를 사용합니다.",
    "Use OAuth 2.0 Authentication":
      "OAuth 2.0 인증 사용",
    "Use OAuth Login":
      "OAuth 로그인 사용",
    "Use secure requests protocol (HTTPS).":
      "보안 요청 프로토콜(HTTPS) 사용",
    "Use system proxy settings checkbox":
      "시스템 프록시 설정 사용 확인란",
    "Use system proxy settings: Select this checkbox to use the system’s proxy settings.":
      "시스템 프록시 설정 사용: 시스템의 프록시 설정을 사용하려면 이 확인란을 선택합니다.",
    "Use the \"API Key (Recommended)\" parameter instead.":
      "대신 “API Key (Recommended)” 매개변수를 사용하세요.",
    "Use the Client ID and Client Secret Key directly in this integration, or store them in the Cortex credentials store. In that case, the Client ID should be stored in the “username” field and the Client Secret Key should be stored in the “password” field.":
      "이 통합에서 Client ID와 Client Secret Key를 직접 사용하거나 Cortex 자격 증명 저장소에 저장합니다. 이 경우 Client ID는 “username” 필드에, Client Secret Key는 “password” 필드에 저장해야 합니다.",
    "Use the following naming convention: (demisto_fields_{type}).":
      "다음 명명 규칙을 사용합니다: (demisto_fields_{type}).",
    "Use the Microsoft Teams integration to send messages and notifications to your team members and create meetings.":
      "Microsoft Teams 통합을 사용하여 팀원에게 메시지와 알림을 보내고 회의를 만듭니다.",
    "Use the Microsoft Teams Webhook integration to send messages and notifications to Teams configured with an incoming webhook or a workflow. When using an adaptive card, the message will always include a link back to the investigation from which it was sent.":
      "Microsoft Teams Webhook 통합을 사용하여 수신 웹후크 또는 워크플로로 구성된 Teams에 메시지와 알림을 보냅니다. 적응형 카드를 사용하는 경우 메시지에는 항상 해당 메시지를 보낸 조사로 연결되는 링크가 포함됩니다.",
    "Use the Prisma Cloud integration to manage alerts from Microsoft Azure, Google Cloud Platform, and AWS.":
      "Prisma Cloud 통합을 사용하여 Microsoft Azure, Google Cloud Platform 및 AWS의 알림을 관리합니다.",
    "Use the SplunkPy integration to fetch incidents from Splunk ES, and query results by SID.":
      "SplunkPy 통합을 사용하여 Splunk ES에서 인시던트를 가져오고 SID로 쿼리 결과를 조회합니다.",
    "Use the system proxy settings to reach with the Vectra RUX API.":
      "Vectra RUX API에 연결하기 위해 시스템 프록시 설정을 사용합니다.",
    "Use the Workday IAM integration to fetch Workday reports and create corresponding incidents in Cortex. This integration is meant to be used as part of the IAM premium pack.":
      "Workday IAM 통합을 사용하여 Workday 보고서를 가져오고 Cortex에 해당 인시던트를 만듭니다. 이 통합은 IAM 프리미엄 팩의 일부로 사용하도록 설계되었습니다.",
    "Use the Zendesk V2 integration to perform operations related to users, tickets, attachments, and more.":
      "Zendesk V2 통합을 사용하여 사용자, 티켓, 첨부 파일 등과 관련된 작업을 수행합니다.",
    "Use these client_id, client_secret, tsg_id to authenticate to your AIOps instance.":
      "이 client_id, client_secret, tsg_id를 사용하여 AIOps 인스턴스에 인증합니다.",
    "Use this option when required to customize the URL to the Azure management endpoint. More information can be found here - https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud":
      "Azure 관리 엔드포인트의 URL을 사용자 지정해야 할 때 이 옵션을 사용합니다. 자세한 내용은 여기에서 확인할 수 있습니다 - https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud",
    "Use this option when required to customize the URL to the Entra ID endpoint. More information can be found here - https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud":
      "Entra ID 엔드포인트의 URL을 사용자 지정해야 할 때 이 옵션을 사용합니다. 자세한 내용은 여기에서 확인할 수 있습니다 - https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud",
    "Use this parameter with careful consideration.":
      "이 매개변수는 신중하게 고려하여 사용하세요.",
    "Use TLS for connection":
      "연결에 TLS 사용",
    "Use to query SQL Server, using a remote (TCP) connection to the DB.":
      "DB에 대한 원격(TCP) 연결을 사용하여 SQL Server를 쿼리할 때 사용합니다.",
    "Use when SonarQube is publicly accessible.":
      "SonarQube에 공개적으로 액세스할 수 있는 경우 사용합니다.",
    "Use your server URL, username and password in order to get your API-key.":
      "서버 URL, 사용자 이름 및 비밀번호를 사용하여 API 키를 가져옵니다.",
    "Used for certificate authentication. As appears in the \"Certificates & secrets\" page of the app.":
      "인증서 인증에 사용됩니다. 앱의 “Certificates & secrets” 페이지에 표시된 대로 입력합니다.",
    "User Email Address (Use for auto token refresh)":
      "사용자 이메일 주소(자동 토큰 갱신에 사용)",
    "User Token":
      "사용자 토큰",
    "Username (email address)":
      "사용자 이름(이메일 주소)",
    "Username (or '<username>/token' when using API key).":
      "사용자 이름(API 키를 사용하는 경우 '<username>/token').",
    "Username / Access Key ID":
      "사용자 이름 / 액세스 키 ID",
    "Username / API Key":
      "사용자 이름 / API 키",
    "Username / API Key (see '?')":
      "사용자 이름 / API 키('?' 참조)",
    "Users and Authentication":
      "사용자 및 인증",
    "Users Lookup table name":
      "사용자 조회 테이블 이름",
    "Users must be assigned to the admin role to use this integration.":
      "이 통합을 사용하려면 사용자에게 admin 역할이 할당되어 있어야 합니다.",
    "Uses the system proxy server to communicate with the integration. If not selected, the integration will not use the system proxy server.":
      "시스템 프록시 서버를 사용하여 통합과 통신합니다. 선택하지 않으면 통합에서 시스템 프록시 서버를 사용하지 않습니다.",
    "Using API Token authentication":
      "API 토큰 인증 사용",
    "Using Multi Factor Authentication (MFA)":
      "다단계 인증(MFA) 사용",
    "Using Multi-Factor Authentication (MFA)":
      "다단계 인증(MFA) 사용",
    "Using National Cloud":
      "내셔널 클라우드 사용",
    "Using the task ‘Create Integration system user’ create an account with username and password":
      "'Create Integration system user' 작업을 사용하여 사용자 이름과 비밀번호가 있는 계정을 만듭니다",
    "Validate the negotiation info when connecting to a share. More information can be found on https://docs.microsoft.com/en-us/archive/blogs/openspecification/smb3-secure-dialect-negotiation":
      "공유에 연결할 때 협상 정보를 검증합니다. 자세한 내용은 https://docs.microsoft.com/en-us/archive/blogs/openspecification/smb3-secure-dialect-negotiation 에서 확인할 수 있습니다",
    "Verbose (show log in case of error)":
      "자세한 로그(오류 발생 시 로그 표시)",
    "Verification Token(Team Chat App)":
      "확인 토큰(Team Chat App)",
    "Verify SSL":
      "SSL 확인",
    "VirusTotal has been updated to VirusTotal (API v3). Please use the updated version instead.":
      "VirusTotal이 VirusTotal (API v3)로 업데이트되었습니다. 대신 업데이트된 버전을 사용하세요.",
    "Vsys - Firewall instances only":
      "Vsys - 방화벽 인스턴스에만 해당",
    "When checked, no SSL certificates check will be done when interacting with the Vectra RUX API. It's insecure. (Default - unchecked)":
      "선택하면 Vectra RUX API와 상호 작용할 때 SSL 인증서 검사를 수행하지 않습니다. 안전하지 않습니다. (기본값: 선택 안 함)",
    "When ciphers are specified, the SSH connection will be established with the first cipher of the specified ciphers that the given host supports.":
      "암호를 지정하면 지정한 암호 중 해당 호스트에서 지원하는 첫 번째 암호로 SSH 연결이 설정됩니다.",
    "When fetch is enable you must provide this argument. Possible values are: new, open, assigned, closed or ignored.":
      "가져오기를 활성화하는 경우 이 인수를 제공해야 합니다. 가능한 값: new, open, assigned, closed 또는 ignored.",
    "When fetching supplier findings, a run that reaches this limit part-way through a supplier resumes on that same supplier next run, so the limit is honored without skipping findings.":
      "공급업체 결과를 가져올 때 공급업체 처리 도중 이 한도에 도달하면 다음 실행 시 같은 공급업체에서 다시 시작하므로 결과를 건너뛰지 않고 한도가 준수됩니다.",
    "When key algorithms are specified, the SSH connection will be established with the first key algorithm of the specified key algorithms that the given host supports.":
      "키 알고리즘을 지정하면 지정한 키 알고리즘 중 해당 호스트에서 지원하는 첫 번째 키 알고리즘으로 SSH 연결이 설정됩니다.",
    "When mirroring incidents, you can make changes in Vectra that will be reflected in Cortex, or vice versa.":
      "인시던트를 미러링하면 Vectra에서 변경한 내용이 Cortex에 반영되거나 그 반대로 반영될 수 있습니다.",
    "When running Live Response commands (e.g. ‘cb-process-kill’), it is possible to pass ‘wait-timeout’ argument to determine the number of seconds to wait for the command to be executed on Live Response side. Once the command has been executed or wait-time has expired - the command information will be returned to the war room.":
      "Live Response 명령(예: 'cb-process-kill')을 실행할 때 'wait-timeout' 인수를 전달하여 Live Response 측에서 명령이 실행될 때까지 기다릴 시간(초)을 지정할 수 있습니다. 명령이 실행되거나 대기 시간이 만료되면 명령 정보가 war room으로 반환됩니다.",
    "When selected, closing and re-opening the Cortex incident is mirrored in Prisma Cloud.":
      "선택하면 Cortex 인시던트의 종료 및 재개가 Prisma Cloud에 미러링됩니다.",
    "When selected, the hunting query result is also saved to the Microsoft 365 Defender context path. Relevant only for the msg-advanced-hunting command.":
      "선택하면 헌팅 쿼리 결과가 Microsoft 365 Defender 컨텍스트 경로에도 저장됩니다. msg-advanced-hunting 명령에만 해당됩니다.",
    "When selecting the Custom option, the Azure AD endpoint parameter must be filled. More information about National clouds can be found here - https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud":
      "Custom 옵션을 선택하는 경우 Azure AD endpoint 매개변수를 입력해야 합니다. 내셔널 클라우드에 대한 자세한 내용은 여기에서 확인할 수 있습니다 - https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud",
    "When selecting the Custom option, the Host URL parameter must be filled. More information about National clouds can be found here - https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud":
      "Custom 옵션을 선택하는 경우 Host URL 매개변수를 입력해야 합니다. 내셔널 클라우드에 대한 자세한 내용은 여기에서 확인할 수 있습니다 - https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud",
    "When selecting the Custom option, the Server URL parameter must be filled. More information can be found on the integration page - https://xsoar.pan.dev/docs/reference/integrations/microsoft-defender-advanced-threat-protection":
      "Custom 옵션을 선택하는 경우 Server URL 매개변수를 입력해야 합니다. 자세한 내용은 통합 페이지에서 확인할 수 있습니다 - https://xsoar.pan.dev/docs/reference/integrations/microsoft-defender-advanced-threat-protection",
    "When switching from the 'Authorization Code Flow' to the 'Client Credentials Flow', test the validity of the instance by clicking the 'Test' button.":
      "'Authorization Code Flow'에서 'Client Credentials Flow'로 전환하는 경우 'Test' 버튼을 클릭하여 인스턴스의 유효성을 테스트합니다.",
    "When switching from the 'Client Credentials Flow' to the 'Authorization Code Flow' do as follow: Save the instance, run the 'microsoft-teams-generate-login-url' command and follow the instructions mentioned there. Once done, test the validity of your instance by running the 'microsoft-teams-auth-test' command.":
      "'Client Credentials Flow'에서 'Authorization Code Flow'로 전환하는 경우 다음을 수행합니다. 인스턴스를 저장하고 'microsoft-teams-generate-login-url' 명령을 실행한 다음 해당 명령에 안내된 지침을 따릅니다. 완료되면 'microsoft-teams-auth-test' 명령을 실행하여 인스턴스의 유효성을 테스트합니다.",
    "When switching from the 'Client Credentials Flow' to the 'Authorization Code Flow' do as follow: Save the instance, run the 'microsoft-teams-generate-login-url' command and follow the instructions mentioned there. Once done, test the validity of your instance by running the 'microsoft-teams-auth-test' command. When switching from the 'Authorization Code Flow' to the 'Client Credentials Flow', test the validity of the instance by clicking the 'Test' button.":
      "'Client Credentials Flow'에서 'Authorization Code Flow'로 전환하는 경우 다음을 수행합니다. 인스턴스를 저장하고 'microsoft-teams-generate-login-url' 명령을 실행한 다음 해당 명령에 안내된 지침을 따릅니다. 완료되면 'microsoft-teams-auth-test' 명령을 실행하여 인스턴스의 유효성을 테스트합니다. 'Authorization Code Flow'에서 'Client Credentials Flow'로 전환하는 경우 'Test' 버튼을 클릭하여 인스턴스의 유효성을 테스트합니다.",
    "When using basic authorization, you will have to update your password with the current OTP every time the current code expires (30 seconds), hence we recommend using OAuth 2.0 authorization.":
      "기본 인증을 사용하는 경우 현재 코드가 만료될 때마다(30초마다) 비밀번호를 현재 OTP로 업데이트해야 합니다. 따라서 OAuth 2.0 인증을 사용하는 것이 좋습니다.",
    "When using basic authorization, you will have to update your password with the current OTP every time the current code expires (30 seconds), therefore we recommend using OAuth 2.0 authorization.":
      "기본 인증을 사용하는 경우 현재 코드가 만료될 때마다(30초마다) 비밀번호를 현재 OTP로 업데이트해야 합니다. 따라서 OAuth 2.0 인증을 사용하는 것이 좋습니다.",
    "Whether this instance fetches your own organization's findings or findings across your supplier portfolio. Configure a separate instance for each scope.":
      "이 인스턴스가 자체 조직의 결과를 가져올지, 공급업체 포트폴리오 전체의 결과를 가져올지 지정합니다. 범위마다 별도의 인스턴스를 구성하세요.",
    "Whether to add escaping before `=` chars in URLs. For further information, see the pack README":
      "URL의 `=` 문자 앞에 이스케이프를 추가할지 여부입니다. 자세한 내용은 팩 README를 참조하세요",
    "Whether to disable automatic notifications to the configured notifications channel.":
      "구성된 알림 채널에 대한 자동 알림을 비활성화할지 여부입니다.",
    "Whether to enable mirroring only from xsoar to slack, mark it if file mirroring is required in investigations.":
      "XSOAR에서 Slack으로의 미러링만 활성화할지 여부입니다. 조사에서 파일 미러링이 필요한 경우 선택하세요.",
    "Whether to trust any certificate (not secure).":
      "모든 인증서를 신뢰할지 여부입니다(안전하지 않음).",
    "Whether to use the system proxy settings.":
      "시스템 프록시 설정을 사용할지 여부입니다.",
    "WildFire Server URLs":
      "WildFire 서버 URL",
    "Workday Report URL":
      "Workday 보고서 URL",
    "Workday Reports":
      "Workday 보고서",
    "XSOAR API Key":
      "XSOAR API 키",
    "XSOAR user key":
      "XSOAR 사용자 키",
    "XSOAR will query for Orca Alerts/ Alert updates every 1 minute":
      "XSOAR은 1분마다 Orca 알림/알림 업데이트를 쿼리합니다",
    "You can also specify the threshold as an argument when running relevant commands.":
      "관련 명령을 실행할 때 임계값을 인수로 지정할 수도 있습니다.",
    "You can enable incident mirroring between Cortex incidents and Splunk findings.":
      "Cortex 인시던트와 Splunk 결과 간에 인시던트 미러링을 활성화할 수 있습니다.",
    "You can enable incident mirroring between Cortex incidents and Splunk notables.":
      "Cortex 인시던트와 Splunk notable 간에 인시던트 미러링을 활성화할 수 있습니다.",
    "You can execute these commands from the Cortex CLI, as part of an automation, or in a playbook.":
      "이 명령은 Cortex CLI에서, 자동화의 일부로 또는 플레이북에서 실행할 수 있습니다.",
    "You can store the additional workflow in a Cortex list, and use a transformer on the task in a playbook to send to a specific team.":
      "추가 워크플로를 Cortex 목록에 저장하고 플레이북의 작업에서 트랜스포머를 사용하여 특정 팀에 보낼 수 있습니다.",
    "You can use Prisma Cloud UI to generate this required access key.":
      "Prisma Cloud UI를 사용하여 필요한 이 액세스 키를 생성할 수 있습니다.",
    "You can use the following methods to authenticate Microsoft Defender XDR.":
      "다음 방법을 사용하여 Microsoft Defender XDR을 인증할 수 있습니다.",
    "You do not need to specify the classifier as all Splunk incidents are ingested as Splunk Notable Generic. As you become more familiar with Cortex, you can create custom incident types as needed instead of using the Splunk Notable Generic incident type.":
      "모든 Splunk 인시던트가 Splunk Notable Generic으로 수집되므로 분류자를 지정할 필요가 없습니다. Cortex에 익숙해지면 Splunk Notable Generic 인시던트 유형을 사용하는 대신 필요에 따라 사용자 지정 인시던트 유형을 만들 수 있습니다.",
    "You don’t need to install the packages, they are included in the Docker image.":
      "패키지는 Docker 이미지에 포함되어 있으므로 설치할 필요가 없습니다.",
    "You may also use the advanced search in Okta’s System Logs to generate the filter expression.":
      "Okta의 시스템 로그에서 고급 검색을 사용하여 필터 표현식을 생성할 수도 있습니다.",
    "You most enable or run mirror-investigation.":
      "mirror-investigation을 활성화하거나 실행해야 합니다.",
    "You must have an API subscription.":
      "API 구독이 필요합니다.",
    "You must have your client applications registered on your authorization server with the required scope and configured appropriately.":
      "클라이언트 애플리케이션이 필요한 범위와 함께 권한 부여 서버에 등록되어 있고 적절하게 구성되어 있어야 합니다.",
    "You need to create a separate integration instance for Palo Alto Networks Firewall and Palo Alto Networks. Unless specified otherwise, all commands are valid for both Firewall and Panorama.":
      "Palo Alto Networks Firewall과 Palo Alto Networks에 대해 각각 별도의 통합 인스턴스를 만들어야 합니다. 별도로 지정하지 않는 한 모든 명령은 Firewall과 Panorama 모두에서 유효합니다.",
    "You should have a non-admin user with all necessary roles (only non-admin roles) in addition to the existing role snc_platform_rest_api_access that is required to make API calls.":
      "API 호출에 필요한 기존 역할 snc_platform_rest_api_access 외에 필요한 모든 역할(관리자가 아닌 역할만)을 가진 비관리자 사용자가 있어야 합니다.",
    "Your API key can be found in your Orion Malware account user menu.":
      "API 키는 Orion Malware 계정의 사용자 메뉴에서 확인할 수 있습니다.",
    "Your API key can be found in your VirusTotal account user menu.":
      "API 키는 VirusTotal 계정의 사용자 메뉴에서 확인할 수 있습니다.",
    "Your API key carries all your privileges, so keep it secure and don’t share it with anyone.":
      "API 키에는 모든 권한이 포함되어 있으므로 안전하게 보관하고 다른 사람과 공유하지 마세요.",
    "Your PingOne Environment ID":
      "PingOne 환경 ID",
    "Your server URL (e.g., https://yourdomain.jamfcloud.com)":
      "서버 URL(예: https://yourdomain.jamfcloud.com)",
    "Zendesk address (e.g. https://demisto.zendesk.com)":
      "Zendesk 주소(예: https://demisto.zendesk.com)",
    "Zendesk integration requires the API key and a username.":
      "Zendesk 통합에는 API 키와 사용자 이름이 필요합니다.",
    "ZIdentity returns a Bearer access token.":
      "ZIdentity는 Bearer 액세스 토큰을 반환합니다.",

    // --- Batch: Splunk/ServiceNow/Mimecast/RelayShield/Panorays/TypeSafe etc. integration docs as joined sentences (16:09 export, Collector 0.2.0) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    "(Investigation only) If {0} is selected in step 8, configure the following Investigation-specific parameters:":
      "(조사 전용) 8단계에서 {0}을(를) 선택한 경우 다음 조사 전용 매개변수를 구성합니다:",
    "(Optional) Test the created instance by running the {0} command.":
      "(선택 사항) {0} 명령을 실행하여 생성한 인스턴스를 테스트합니다.",
    "(Recommended) Enter the ServiceNow account {0} and {1} in the integration instance configuration. When provided, the integration automatically performs the initial OAuth login on first use. It also automatically renews the refresh token when it expires.":
      "(권장) 통합 인스턴스 구성에 ServiceNow 계정의 {0} 및 {1}을(를) 입력합니다. 입력하면 통합이 처음 사용할 때 초기 OAuth 로그인을 자동으로 수행합니다. 또한 리프레시 토큰이 만료되면 자동으로 갱신합니다.",
    "{0} Check the balance and entitlements on your account at {1}.":
      "{0} 계정의 잔액과 사용 권한은 {1}에서 확인하세요.",
    "{0} Confirm the key was copied in full and begins with {1}. Keys are deactivated when the underlying subscription is cancelled.":
      "{0} 키가 완전히 복사되었고 {1}(으)로 시작하는지 확인하세요. 기반 구독이 취소되면 키가 비활성화됩니다.",
    "{0} This is a clean result, not an error. RelayShield reports only on sources it queried; see the DBotScore mapping above.":
      "{0} 이는 정상적인 결과이며 오류가 아닙니다. RelayShield는 조회한 소스에 대해서만 보고합니다. 위의 DBotScore 매핑을 참조하세요.",
    "{0}: Fetches the drilldown searches configured by the user in the rule name that triggered the finding event and performs this search. The results are stored in the context of the incident under the {1} field as follows: [{‘query_name’:<query_name>, ‘query_search’: <query_search>, ‘query_results’: [{result1}, {result2}, {result3}], ‘enrichment_status’: <enrichment_status>}].":
      "{0}: finding 이벤트를 트리거한 규칙 이름에 사용자가 구성한 드릴다운 검색을 가져와 이 검색을 수행합니다. 결과는 인시던트 컨텍스트의 {1} 필드에 다음 형식으로 저장됩니다: [{‘query_name’:<query_name>, ‘query_search’: <query_search>, ‘query_results’: [{result1}, {result2}, {result3}], ‘enrichment_status’: <enrichment_status>}].",
    "{0}: Keep the SPL query as-is unless you need to filter further. The query must include the {1} token. Do not modify or remove this token. To add custom filters, append extra URL parameters such as {2} after the placeholder.":
      "{0}: 추가로 필터링해야 하는 경우가 아니면 SPL 쿼리를 그대로 유지하세요. 쿼리에는 {1} 토큰이 포함되어야 합니다. 이 토큰을 수정하거나 제거하지 마세요. 사용자 지정 필터를 추가하려면 플레이스홀더 뒤에 {2} 같은 추가 URL 매개변수를 덧붙입니다.",
    "{0}: Select the enrichment types you want to enrich each fetched finding with. If none are selected, the integration will fetch findings as usual (without enrichment).":
      "{0}: 가져온 각 finding을 보강할 보강 유형을 선택합니다. 아무것도 선택하지 않으면 통합은 보강 없이 평소처럼 finding을 가져옵니다.",
    "{0}: Select the enrichment types you want to enrich each fetched notable with. If none are selected, the integration will fetch notables as usual (without enrichment).":
      "{0}: 가져온 각 notable을 보강할 보강 유형을 선택합니다. 아무것도 선택하지 않으면 통합은 보강 없이 평소처럼 notable을 가져옵니다.",
    "{0}: The maximal amount of events to fetch per enrichment type (Drilldown, Asset, and Identity). In a case of multiple drilldown enrichments the limit will apply for each drilldown search query. (default to 20).":
      "{0}: 보강 유형(Drilldown, Asset, Identity)별로 가져올 최대 이벤트 수입니다. 드릴다운 보강이 여러 개인 경우 한도는 각 드릴다운 검색 쿼리에 적용됩니다. (기본값은 20).",
    "{0}: The maximum number of investigations to fetch per cycle. Limited to 100 by the Splunk investigations endpoint.":
      "{0}: 주기당 가져올 최대 조사 수입니다. Splunk 조사 엔드포인트에 의해 100개로 제한됩니다.",
    "{0}: The query for the finding events enrichment (defined by default). If you decide to edit this, make sure to provide a query that uses the `notable` macro. See the default query as an example.":
      "{0}: finding 이벤트 보강용 쿼리입니다(기본적으로 정의됨). 편집하는 경우 `notable` 매크로를 사용하는 쿼리를 제공해야 합니다. 기본 쿼리를 예시로 참조하세요.",
    "{0}: The query for the notable events enrichment (defined by default). If you decide to edit this, make sure to provide a query that uses the `notable` macro. See the default query as an example.":
      "{0}: notable 이벤트 보강용 쿼리입니다(기본적으로 정의됨). 편집하는 경우 `notable` 매크로를 사용하는 쿼리를 제공해야 합니다. 기본 쿼리를 예시로 참조하세요.",
    "{0}: The relative time interval to look back during the initial investigation fetch (for example, {1}).":
      "{0}: 최초 조사 가져오기 시 거슬러 올라갈 상대 시간 간격입니다(예: {1}).",
    "{0}: The timeout for each enrichment (default is 5min). When the selected timeout was reached, finding events that were not enriched will be saved without the enrichment.":
      "{0}: 각 보강의 제한 시간입니다(기본값은 5분). 선택한 제한 시간에 도달하면 보강되지 않은 finding 이벤트는 보강 없이 저장됩니다.",
    "{0}: The timeout for each enrichment (default is 5min). When the selected timeout was reached, notable events that were not enriched will be saved without the enrichment.":
      "{0}: 각 보강의 제한 시간입니다(기본값은 5분). 선택한 제한 시간에 도달하면 보강되지 않은 notable 이벤트는 보강 없이 저장됩니다.",
    "{0}: whether the asset enrichment was successful.":
      "{0}: 자산 보강이 성공했는지 여부입니다.",
    "{0}: whether the drilldown enrichment was successful. In a case of multiple drilldown enrichments, the status is successful if at least one drilldown search enrichment was successful.":
      "{0}: 드릴다운 보강이 성공했는지 여부입니다. 드릴다운 보강이 여러 개인 경우 하나 이상의 드릴다운 검색 보강이 성공하면 상태는 성공입니다.",
    "{0}: whether the identity enrichment was successful.":
      "{0}: ID 보강이 성공했는지 여부입니다.",
    "A clean result (“no known finding”) is mapped to DBotScore {0}, never {1}. “No known finding” means nothing was flagged in the sources RelayShield actually queried. It is not a verified-safe guarantee, and treating it as “Good” would claim more certainty than the underlying data supports. CRITICAL/HIGH findings map to {2}, MEDIUM/LOW findings map to {3}.":
      "정상 결과(\"no known finding\")는 DBotScore {0}에 매핑되며 {1}에는 매핑되지 않습니다. \"No known finding\"은 RelayShield가 실제로 조회한 소스에서 아무것도 플래그되지 않았음을 의미합니다. 안전하다고 검증된 보증이 아니며, 이를 \"Good\"으로 처리하면 기반 데이터가 뒷받침하는 것보다 더 큰 확실성을 나타내게 됩니다. CRITICAL/HIGH 결과는 {2}에, MEDIUM/LOW 결과는 {3}에 매핑됩니다.",
    "Build a query by selecting fields operators and relevant values. You can always add an additional condition by selecting the {0} button on the right. For more information on how to use the search editor see {1}.":
      "필드, 연산자 및 관련 값을 선택하여 쿼리를 작성합니다. 오른쪽의 {0} 버튼을 선택하면 언제든지 조건을 추가할 수 있습니다. 검색 편집기 사용 방법에 대한 자세한 내용은 {1}을(를) 참조하세요.",
    "By default, the {0} parameter is set to 70. This means that for every file with a severity of over 70 the Dbot score will be set to {1}. This parameter is configurable.":
      "기본적으로 {0} 매개변수는 70으로 설정됩니다. 즉, 심각도가 70을 초과하는 모든 파일의 Dbot 점수가 {1}(으)로 설정됩니다. 이 매개변수는 구성할 수 있습니다.",
    "Content in the Splunk content pack (such as mappers, layout, playbooks, incident fields, and the incident type). Therefore, you will need to create your own content. See the {0} for information.":
      "Splunk 콘텐츠 팩의 콘텐츠(매퍼, 레이아웃, 플레이북, 인시던트 필드, 인시던트 유형 등)입니다. 따라서 자체 콘텐츠를 만들어야 합니다. 자세한 내용은 {0}을(를) 참조하세요.",
    "Copy the API key from the confirmation page. It begins with {0}. The key is also emailed to the address you entered.":
      "확인 페이지에서 API 키를 복사합니다. 키는 {0}(으)로 시작합니다. 키는 입력한 주소로도 이메일로 전송됩니다.",
    "Copy the query value and paste it as the value for the {0} argument for both search commands. For example:":
      "query 값을 복사하여 두 검색 명령의 {0} 인수 값으로 붙여넣습니다. 예:",
    "Create a Java Key Store and upload it to the instance by accessing from the upper menu: {0} > {1} > {2}. The private key will be used as an integration parameter.":
      "상단 메뉴에서 {0} > {1} > {2}에 액세스하여 Java Key Store를 만들고 인스턴스에 업로드합니다. 개인 키는 통합 매개변수로 사용됩니다.",
    "Create a summary index in Splunk. For more information, click {0}.":
      "Splunk에서 요약 인덱스를 만듭니다. 자세한 내용은 {0}을(를) 클릭하세요.",
    "Enter your username and password, and append the One Time Password (OTP) that you currently see on your mobile device to your password without any extra spaces. For example, if your password is {0} and the current OTP code is {1}, enter {2}.":
      "사용자 이름과 비밀번호를 입력하고, 모바일 기기에 현재 표시되는 일회용 비밀번호(OTP)를 공백 없이 비밀번호 뒤에 붙입니다. 예를 들어 비밀번호가 {0}이고 현재 OTP 코드가 {1}이면 {2}을(를) 입력합니다.",
    "For anything else, contact {0}.":
      "그 외의 문의는 {0}(으)로 연락하세요.",
    "For assistance, contact Panorays support at {0}.":
      "지원이 필요하면 Panorays 지원팀({0})에 문의하세요.",
    "For full instructions, see the {0}.":
      "전체 지침은 {0}을(를) 참조하세요.",
    "For mirroring the {0} field, the usernames need to be transformed to the corresponding names in Cortex and Splunk.":
      "{0} 필드를 미러링하려면 사용자 이름을 Cortex와 Splunk의 해당 이름으로 변환해야 합니다.",
    "For more information about creating an OAuth app click {0}.":
      "OAuth 앱 생성에 대한 자세한 내용은 {0}을(를) 클릭하세요.",
    "For using OAuth 2.0 see the above instructions. The OTP code should be appended to the password parameter in the {0} command.":
      "OAuth 2.0 사용에 대해서는 위의 지침을 참조하세요. OTP 코드는 {0} 명령의 비밀번호 매개변수 뒤에 붙여야 합니다.",
    "From the {0} page, click {1}.":
      "{0} 페이지에서 {1}을(를) 클릭합니다.",
    "From the left-side navigation menu, click {0}.":
      "왼쪽 탐색 메뉴에서 {0}을(를) 클릭합니다.",
    "From the top navigation bar, click {0}.":
      "상단 탐색 모음에서 {0}을(를) 클릭합니다.",
    "Go to the {0}.":
      "{0}(으)로 이동합니다.",
    "If the {0} and {1} fields are configured, the integration will automatically perform the initial login and renew the refresh token when it expires — no manual commands are needed. Otherwise, you will have to run the {2} command for the initial login and again each time the refresh token expires.":
      "{0} 및 {1} 필드가 구성되어 있으면 통합이 초기 로그인을 자동으로 수행하고 리프레시 토큰이 만료되면 갱신합니다. 수동 명령은 필요하지 않습니다. 그렇지 않으면 초기 로그인 시와 리프레시 토큰이 만료될 때마다 {2} 명령을 실행해야 합니다.",
    "If you did note provide {0} and {1} in step 3, run the {2} command from the Cortex CLI and fill in the username and password of the ServiceNow integration instance. This step generates an access token to the ServiceNow instance and is required only the first time after configuring a new integration instance in Cortex. If you provided {3} and {4}, this step is handled automatically.":
      "3단계에서 {0} 및 {1}을(를) 제공하지 않은 경우 Cortex CLI에서 {2} 명령을 실행하고 ServiceNow 통합 인스턴스의 사용자 이름과 비밀번호를 입력합니다. 이 단계는 ServiceNow 인스턴스에 대한 액세스 토큰을 생성하며, Cortex에서 새 통합 인스턴스를 구성한 후 처음에만 필요합니다. {3} 및 {4}을(를) 제공한 경우 이 단계는 자동으로 처리됩니다.",
    "In case of inconsistent authentication issues when using username & password, try to use {0} as the username. this will set the integration to use basic authentication when connecting to the Splunk server. For example: TestUser@_basic":
      "사용자 이름과 비밀번호를 사용할 때 인증 문제가 일관되지 않게 발생하면 사용자 이름으로 {0}을(를) 사용해 보세요. 이렇게 하면 통합이 Splunk 서버에 연결할 때 기본 인증을 사용하도록 설정됩니다. 예: TestUser@_basic",
    "In order for the mirroring to work, the {0} parameter needs to be set before the incident is fetched.":
      "미러링이 작동하려면 인시던트를 가져오기 전에 {0} 매개변수를 설정해야 합니다.",
    "In order to activate them check the {0} checkbox, and then check the relevant boxes for each fetch type you want.":
      "이를 활성화하려면 {0} 확인란을 선택한 다음 가져올 각 유형에 해당하는 확인란을 선택합니다.",
    "In order to refresh token / discover auth types of the account / create new access & secret keys, you are required to provide: App ID, Account email address & password, and BaseUrl is set to {0}, based on your {1}. These parameters support the following integration commands: mimecast-login -> fetches new access key & secret key mimecast-discover -> lists supported auth types of user mimecast-refresh-token -> refreshes the validity duration of access key & secret key (3 days)":
      "토큰을 갱신하고, 계정의 인증 유형을 검색하고, 새 액세스 키와 시크릿 키를 만들려면 App ID, 계정 이메일 주소 및 비밀번호를 제공해야 하며 BaseUrl은 {0}(으)로 설정됩니다({1} 기준). 이 매개변수는 다음 통합 명령을 지원합니다: mimecast-login -> 새 액세스 키와 시크릿 키를 가져옴 mimecast-discover -> 사용자가 지원하는 인증 유형을 나열 mimecast-refresh-token -> 액세스 키와 시크릿 키의 유효 기간을 갱신(3일)",
    "In the {0} parameter, select which Splunk event types to ingest. Default is {1}. Add {2} to also fetch Splunk investigations (select both to fetch them together).":
      "{0} 매개변수에서 수집할 Splunk 이벤트 유형을 선택합니다. 기본값은 {1}입니다. Splunk 조사도 가져오려면 {2}을(를) 추가합니다(둘 다 선택하면 함께 가져옵니다).",
    "In the Enrichment Types field, select {0}, {1} and {2}. This enrichment provides additional information about assets, drilldown, and identities that are related to the notable events you ingest. Multiple drilldown searches enrichment is supported from Enterprise Security v7.2.0. For more information, see {3}.":
      "Enrichment Types 필드에서 {0}, {1} 및 {2}을(를) 선택합니다. 이 보강은 수집하는 notable 이벤트와 관련된 자산, 드릴다운 및 ID에 대한 추가 정보를 제공합니다. 여러 드릴다운 검색 보강은 Enterprise Security v7.2.0부터 지원됩니다. 자세한 내용은 {3}을(를) 참조하세요.",
    "Keep the {0} as-is, since we use the `notable` macro when ingesting Finding events. You can create a more granular search by specifying specific conditions, for example specific security domain or event ID.":
      "finding 이벤트를 수집할 때 `notable` 매크로를 사용하므로 {0}은(는) 그대로 유지하세요. 특정 보안 도메인이나 이벤트 ID와 같은 특정 조건을 지정하여 더 세분화된 검색을 만들 수 있습니다.",
    "Keep the default values for the Finding {0} and {1}.":
      "Finding의 {0} 및 {1}은(는) 기본값을 유지하세요.",
    "Leave {0} at {1} unless you have been given a dedicated endpoint.":
      "전용 엔드포인트를 받은 경우가 아니면 {0}을(를) {1}(으)로 유지하세요.",
    "Locate the Mimecast API 2.0 tile and select {0}.":
      "Mimecast API 2.0 타일을 찾아 {0}을(를) 선택합니다.",
    "Log in to your ServiceNow instance and create an endpoint for Cortex to access your instance (see {0} for more information).":
      "ServiceNow 인스턴스에 로그인하고 Cortex가 인스턴스에 액세스할 수 있도록 엔드포인트를 만듭니다(자세한 내용은 {0} 참조).",
    "Make sure you have provided the Client ID and Client Secret, and that the BaseUrl is set to {0}.":
      "클라이언트 ID와 클라이언트 시크릿을 제공하고 BaseUrl이 {0}(으)로 설정되어 있는지 확인하세요.",
    "Notice: Submitting indicators using the {0} command of this integration might make the indicator data publicly available. See the vendor’s documentation for more details.":
      "알림: 이 통합의 {0} 명령을 사용하여 지표를 제출하면 지표 데이터가 공개적으로 제공될 수 있습니다. 자세한 내용은 공급업체 설명서를 참조하세요.",
    "Optional: Check the {0} integration parameter to close the Cortex incident when the corresponding finding is closed on the Splunk side. By default, only Findings closed with a “Closed” label will be mirrored. You can specify specific statuses (comma-separated) in the {1}, and enable the {2} option to add statuses marked as “End Status” in Splunk, and to add additional statuses to the mirroring process.":
      "선택 사항: Splunk 쪽에서 해당 finding이 닫힐 때 Cortex 인시던트를 닫으려면 {0} 통합 매개변수를 선택합니다. 기본적으로 \"Closed\" 레이블로 닫힌 Finding만 미러링됩니다. {1}에 특정 상태(쉼표로 구분)를 지정할 수 있으며, {2} 옵션을 사용하면 Splunk에서 \"End Status\"로 표시된 상태와 추가 상태를 미러링 프로세스에 추가할 수 있습니다.",
    "Optional: Check the {0} integration parameter to close the Cortex incident when the corresponding notable is closed on the Splunk side. By default, only Notables closed with a “Closed” label will be mirrored. You can specify specific statuses (comma-separated) in the {1}, and enable the {2} option to add statuses marked as “End Status” in Splunk, and to add additional statuses to the mirroring process.":
      "선택 사항: Splunk 쪽에서 해당 notable이 닫힐 때 Cortex 인시던트를 닫으려면 {0} 통합 매개변수를 선택합니다. 기본적으로 \"Closed\" 레이블로 닫힌 Notable만 미러링됩니다. {1}에 특정 상태(쉼표로 구분)를 지정할 수 있으며, {2} 옵션을 사용하면 Splunk에서 \"End Status\"로 표시된 상태와 추가 상태를 미러링 프로세스에 추가할 수 있습니다.",
    "Optional: Check the {0} integration parameter to close the Splunk finding when the corresponding Cortex incident is closed. {1}":
      "선택 사항: 해당 Cortex 인시던트가 닫힐 때 Splunk finding을 닫으려면 {0} 통합 매개변수를 선택합니다. {1}",
    "Optional: Check the {0} integration parameter to close the Splunk notable when the corresponding Cortex incident is closed.":
      "선택 사항: 해당 Cortex 인시던트가 닫힐 때 Splunk notable을 닫으려면 {0} 통합 매개변수를 선택합니다.",
    "The drilldown search does not support Splunk’s advanced syntax. For example: Splunk filters ({0}, {1}, etc.)":
      "드릴다운 검색은 Splunk의 고급 구문을 지원하지 않습니다. 예: Splunk 필터({0}, {1} 등)",
    "The grant type used to get an access token is {0}. See the {1} for more information.":
      "액세스 토큰을 가져오는 데 사용되는 권한 부여 유형은 {0}입니다. 자세한 내용은 {1}을(를) 참조하세요.",
    "The integration allows for fetching Splunk {0} and {1} events using default queries. The queries can be changed and modified to support different Splunk use cases.":
      "이 통합은 기본 쿼리를 사용하여 Splunk {0} 및 {1} 이벤트를 가져올 수 있습니다. 쿼리는 다양한 Splunk 사용 사례를 지원하도록 변경하고 수정할 수 있습니다.",
    "The integration sends data to TypeSafe’s hosted API. Review your organization’s data-handling requirements before including incident evidence, personal data, credentials, or other sensitive content in {0}.":
      "이 통합은 TypeSafe의 호스팅 API로 데이터를 전송합니다. 인시던트 증거, 개인 데이터, 자격 증명 또는 기타 민감한 콘텐츠를 {0}에 포함하기 전에 조직의 데이터 처리 요구 사항을 검토하세요.",
    "These instructions explain how to build a query, which you can use as the value for the {0} argument. You can use this argument in the {1} and {2} commands.":
      "이 지침은 {0} 인수의 값으로 사용할 수 있는 쿼리를 작성하는 방법을 설명합니다. 이 인수는 {1} 및 {2} 명령에서 사용할 수 있습니다.",
    "This integration only reads data (company findings, supplier findings, and the supplier list) - it never creates, updates, or deletes anything in Panorays. The read-only {0} role is sufficient for both {1} and {2} scopes, including reading across your entire supplier portfolio.":
      "이 통합은 데이터(회사 결과, 공급업체 결과, 공급업체 목록)를 읽기만 하며 Panorays에서 아무것도 생성, 업데이트 또는 삭제하지 않습니다. 읽기 전용 {0} 역할로 공급업체 포트폴리오 전체 읽기를 포함하여 {1} 및 {2} 범위 모두에 충분합니다.",
    "This integration uses {0}.":
      "이 통합은 {0}을(를) 사용합니다.",
    "To export the query, click the {0} button.":
      "쿼리를 내보내려면 {0} 버튼을 클릭합니다.",
    "To use API 2.0, you need to generate a {0} and {1} from the Mimecast admin console:":
      "API 2.0을 사용하려면 Mimecast 관리 콘솔에서 {0} 및 {1}을(를) 생성해야 합니다:",
    "To use this integration you need a RelayShield API key. RelayShield authenticates every request with a single API key sent in the {0} header. There are no OAuth flows, tenant IDs, or additional permissions to grant.":
      "이 통합을 사용하려면 RelayShield API 키가 필요합니다. RelayShield는 {0} 헤더로 전송되는 단일 API 키로 모든 요청을 인증합니다. OAuth 흐름, 테넌트 ID 또는 부여해야 하는 추가 권한은 없습니다.",
    "Type the {0} and {1}.":
      "{0} 및 {1}을(를) 입력합니다.",
    "Under Classifier, select {0}. The classifier routes Finding events to the {1} incident type and Investigation events to the {2} incident type.":
      "Classifier에서 {0}을(를) 선택합니다. 이 분류기는 Finding 이벤트를 {1} 인시던트 유형으로, Investigation 이벤트를 {2} 인시던트 유형으로 라우팅합니다.",
    "Under Mapper (incoming), select {0}.":
      "Mapper (incoming)에서 {0}을(를) 선택합니다.",
    "Under Mapper (outgoing), select {0}.":
      "Mapper (outgoing)에서 {0}을(를) 선택합니다.",
    "Visit {0}.":
      "{0}에 방문하세요.",
    "When running the {0} command, a refresh token is generated and will be used to produce new access tokens after the current access token has expired.":
      "{0} 명령을 실행하면 리프레시 토큰이 생성되며, 현재 액세스 토큰이 만료된 후 새 액세스 토큰을 생성하는 데 사용됩니다.",
    "Will need to change the {0} integration parameter to the following query (or a fetch query of their own that uses the `notable` macro):":
      "{0} 통합 매개변수를 다음 쿼리(또는 `notable` 매크로를 사용하는 자체 가져오기 쿼리)로 변경해야 합니다:",
    "You can go to the {0} parameter and select the query to fetch the findings from Splunk. Make sure to provide a query which uses the `notable` macro, See the default query as an example.":
      "{0} 매개변수로 이동하여 Splunk에서 finding을 가져올 쿼리를 선택할 수 있습니다. `notable` 매크로를 사용하는 쿼리를 반드시 제공하세요. 기본 쿼리를 예시로 참조하세요.",
    "You can go to the {0} parameter and select the query to fetch the notables from Splunk. Make sure to provide a query which uses the `notable` macro, See the default query as an example.":
      "{0} 매개변수로 이동하여 Splunk에서 notable을 가져올 쿼리를 선택할 수 있습니다. `notable` 매크로를 사용하는 쿼리를 반드시 제공하세요. 기본 쿼리를 예시로 참조하세요.",
    "API Access Policy should be configured as global in order to cover all available resources and not just now/table":
      "API 액세스 정책은 now/table뿐만 아니라 사용 가능한 모든 리소스를 포함하도록 글로벌로 구성해야 합니다",
    "Findings scope":
      "Finding 범위",
    "Select Add Site License.":
      "Add Site License를 선택합니다.",
    "Select the Assets > Site Licenses tab.":
      "Assets > Site Licenses 탭을 선택합니다.",
    "Select the Enable action in Site Licenses.":
      "Site Licenses에서 Enable 작업을 선택합니다.",
    "The BotJID in the Chat subscription section on the Features page of your App Dashboard.":
      "App Dashboard의 Features 페이지에 있는 Chat subscription 섹션의 BotJID입니다.",
    "Zoom Integration":
      "Zoom 통합",

    // --- Batch: Integration docs, parameter labels, tooltips and table descriptions (06:04 export, Collector 0.2.0 full re-collection) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    "Manual Mode":
      "수동 모드",
    "(For Cortex) For use with HTTPS - the certificate that the service should use. (For Cortex and Cortex XSIAM) Custom certificates are not supported.":
      "(Cortex의 경우) HTTPS와 함께 사용합니다. 서비스에서 사용할 인증서입니다. (Cortex 및 Cortex XSIAM의 경우) 사용자 지정 인증서는 지원되지 않습니다.",
    "(For Cortex) For use with HTTPS - the private key that the service should use. <br> (For Cortex and Cortex XSIAM) When using an engine, configure a private API key. Not supported on the Cortex 8 or Cortex XSIAM server.":
      "(Cortex의 경우) HTTPS와 함께 사용합니다. 서비스에서 사용할 개인 키입니다. <br> (Cortex 및 Cortex XSIAM의 경우) 엔진을 사용할 때는 비공개 API 키를 구성하세요. Cortex 8 또는 Cortex XSIAM 서버에서는 지원되지 않습니다.",
    "(Optional: Add additional request headers in the field “Additional request headers” as key:value pairs, one request header per line)":
      "(선택 사항: “Additional request headers” 필드에 key:value 쌍으로 추가 요청 헤더를 추가합니다. 한 줄에 요청 헤더 하나씩 입력합니다)",
    "(Optional: If you want incidents to be created automatically out of the retrieved data, activate the checkbox “Fetches issues” in the “Collect” section of the setup)":
      "(선택 사항: 가져온 데이터에서 인시던트를 자동으로 생성하려면 설정의 “Collect” 섹션에서 “Fetches issues” 체크박스를 활성화합니다)",
    "A comma-separated list of AWS Organization accounts to use when running EC2 commands. A role name for cross-organization account access must be provided to use this feature.":
      "EC2 명령을 실행할 때 사용할 AWS Organization 계정의 쉼표로 구분된 목록입니다. 이 기능을 사용하려면 조직 간 계정 액세스용 역할 이름을 제공해야 합니다.",
    "A successful API call returns status=“success” along with the API key within the key element:":
      "API 호출이 성공하면 key 요소 내에 API 키와 함께 status=“success”가 반환됩니다:",
    "Access Type (Impersonation is deprecated as of February 2025)":
      "액세스 유형(Impersonation은 2025년 2월부터 사용 중단되었습니다)",
    "Additional request headers":
      "추가 요청 헤더",
    "After providing the mandatory details, click Test* to test the configuration.":
      "필수 세부 정보를 입력한 후 Test*를 클릭하여 구성을 테스트합니다.",
    "After this time the connection pool will be refreshed":
      "이 시간이 지나면 연결 풀이 새로 고쳐집니다",
    "AIOps Authentication:":
      "AIOps 인증:",
    "And one of the following:":
      "그리고 다음 중 하나:",
    "ANY.RUN API-KEY without prefix":
      "접두사가 없는 ANY.RUN API-KEY",
    "API Base URL":
      "API 기본 URL",
    "API URL":
      "API URL",
    "Authentication method available:":
      "사용 가능한 인증 방법:",
    "Authentication methods configuration:":
      "인증 방법 구성:",
    "Authorize the API client for the required scopes. You use these scopes in the POST request to the /oauth/token endpoint. The Required Scopes are:":
      "필요한 범위에 대해 API 클라이언트를 승인합니다. 이러한 범위는 /oauth/token 엔드포인트에 대한 POST 요청에서 사용합니다. 필수 범위는 다음과 같습니다:",
    "Available options:":
      "사용 가능한 옵션:",
    "AWS Default Region":
      "AWS 기본 리전",
    "AWS organization accounts":
      "AWS Organization 계정",
    "Base domain for the ANY.RUN connection. By default, the domain is any.run.":
      "ANY.RUN 연결의 기본 도메인입니다. 기본적으로 도메인은 any.run입니다.",
    "Base domain for the ANY.RUN connection. Enter only the domain (e.g. any.run), without a scheme or trailing slash.":
      "ANY.RUN 연결의 기본 도메인입니다. 스킴이나 후행 슬래시 없이 도메인만 입력하세요(예: any.run).",
    "Before configuring this integration, you need:":
      "이 통합을 구성하기 전에 다음이 필요합니다:",
    "Bot Type Converted to Single-Tenant":
      "단일 테넌트로 변환된 봇 유형",
    "Broker CA certificates":
      "Broker CA 인증서",
    "Broker CA certificates (‘brokercerts.crt’ file)":
      "Broker CA 인증서(‘brokercerts.crt’ 파일)",
    "Broker CA certificates content (see `brokercerts.crt` in Integration Tips)":
      "Broker CA 인증서 내용(통합 팁의 `brokercerts.crt` 참조)",
    "Broker list properties file (‘brokerlist.properties’ file)":
      "Broker 목록 속성 파일(‘brokerlist.properties’ 파일)",
    "Broker URLs":
      "Broker URL",
    "Cache 404 TTL":
      "404 캐시 TTL",
    "Cache Default TTL":
      "기본 캐시 TTL",
    "Caps the number of Darkmon records ingested as incidents per fetch cycle to protect the war room from sudden backlogs.":
      "가져오기 주기마다 인시던트로 수집되는 Darkmon 레코드 수에 상한을 두어 갑작스러운 적체로부터 Warroom을 보호합니다.",
    "Choose the instance configuration base URL based on the server location:":
      "서버 위치에 따라 인스턴스 구성 기본 URL을 선택하세요:",
    "Choose the tag to add to an entry to mirror it as a comment in Jira.":
      "항목을 Jira의 댓글로 미러링하기 위해 항목에 추가할 태그를 선택하세요.",
    "Choose the tag to add to an entry to mirror it as an attachment in Jira.":
      "항목을 Jira의 첨부 파일로 미러링하기 위해 항목에 추가할 태그를 선택하세요.",
    "Ciphers":
      "암호 스위트",
    "Clear, Deep, and Dark Web - tailored to your assets.":
      "클리어 웹, 딥 웹, 다크 웹 - 사용자의 자산에 맞게 조정됩니다.",
    "Click “Add API Client”.":
      "“Add API Client”를 클릭합니다.",
    "Click “Save”.":
      "“Save”를 클릭합니다.",
    "Click on “CONNECT CORTEX XSOAR”":
      "“CONNECT CORTEX XSOAR”를 클릭합니다",
    "Configure a SpecterOps BloodHound Enterprise integration instance by providing the following mandatory details:":
      "다음 필수 세부 정보를 입력하여 SpecterOps BloodHound Enterprise 통합 인스턴스를 구성합니다:",
    "Configure the instance by providing following mandatory details:":
      "다음 필수 세부 정보를 입력하여 인스턴스를 구성합니다:",
    "Confirm that the pre-filled URL matches the correct API endpoint for your Anomali ThreatStream instance.":
      "미리 입력된 URL이 Anomali ThreatStream 인스턴스의 올바른 API 엔드포인트와 일치하는지 확인하세요.",
    "Connect to an OAuth provider and create an OAuth application registry by accessing All→System OAuth→Application Registry:":
      "OAuth 공급자에 연결하고 All→System OAuth→Application Registry에 액세스하여 OAuth 애플리케이션 레지스트리를 만듭니다:",
    "Content metadata":
      "콘텐츠 메타데이터",
    "Cortex version 6.0.0 and below:":
      "Cortex 버전 6.0.0 이하:",
    "Create an account in Prisma SASE UI:":
      "Prisma SASE UI에서 계정을 만듭니다:",
    "Create user if does not exist":
      "사용자가 없으면 생성",
    "Darkmon incident types to fetch":
      "가져올 Darkmon 인시던트 유형",
    "Deprecation Note:":
      "사용 중단 참고 사항:",
    "Developer Contributed Integration":
      "개발자 제공 통합",
    "Device group - Panorama instances only (write shared for Shared location)":
      "디바이스 그룹 - Panorama 인스턴스에만 해당(공유 위치의 경우 shared 입력)",
    "Domain (used in Multi Domain Server)":
      "도메인(Multi Domain Server에서 사용)",
    "DOMAIN\\USERNAME (e.g. DEMISTO.INT\\admin)":
      "DOMAIN\\USERNAME(예: DEMISTO.INT\\admin)",
    "Each enriched incident contains the following fields in the incident context:":
      "보강된 각 인시던트의 인시던트 컨텍스트에는 다음 필드가 포함됩니다:",
    "Enable the “Allow Multiple Logins” checkbox for the relevant user.":
      "해당 사용자의 “Allow Multiple Logins” 확인란을 활성화합니다.",
    "Enable to automatically tag indicators with Analyst1 entity type classifications (e.g., \"Analyst1: Indicator\", \"Analyst1: Asset\", \"Analyst1: In Private Range\"). Tags help identify how Analyst1 classifies each indicator.":
      "Analyst1 엔터티 유형 분류(예: \"Analyst1: Indicator\", \"Analyst1: Asset\", \"Analyst1: In Private Range\")로 지표에 자동으로 태그를 지정하려면 활성화합니다. 태그는 Analyst1이 각 지표를 어떻게 분류하는지 파악하는 데 도움이 됩니다.",
    "Exchange Server Hostname or IP address":
      "Exchange Server 호스트 이름 또는 IP 주소",
    "Exchange Server Version (On-Premise only. Supported versions: 2007, 2010, 2010_SP2, 2013, 2013_SP1, 2016, and 2019)":
      "Exchange Server 버전(온프레미스에만 해당. 지원되는 버전: 2007, 2010, 2010_SP2, 2013, 2013_SP1, 2016, 2019)",
    "Fetch attachments for a Jira ticket.":
      "Jira 티켓의 첨부 파일을 가져옵니다.",
    "Fetch comments for a Jira ticket.":
      "Jira 티켓의 댓글을 가져옵니다.",
    "Fetch incidents only for devices with the device families selected":
      "선택한 디바이스 제품군의 디바이스에 대해서만 인시던트를 가져옵니다",
    "Fetch incidents only for devices with the tags selected":
      "선택한 태그가 있는 디바이스에 대해서만 인시던트를 가져옵니다",
    "Fetch incidents:":
      "인시던트 가져오기:",
    "Fetch Incidents:":
      "인시던트 가져오기:",
    "Filter the Detections by “Create Incidents for Prioritized Detections”, “Create Incidents for Escalated Detections”:":
      "“Create Incidents for Prioritized Detections”, “Create Incidents for Escalated Detections”로 탐지 항목을 필터링합니다:",
    "Finding Environment":
      "발견 환경",
    "First fetch query time range when starting from a clean state. Accepts ISO timestamps or relative durations (e.g. \"3 days\", \"12 hours\").":
      "깨끗한 상태에서 시작할 때 첫 번째 가져오기의 쿼리 시간 범위입니다. ISO 타임스탬프 또는 상대 기간(예: \"3 days\", \"12 hours\")을 사용할 수 있습니다.",
    "Following new fields are introduced in the response of the incident to enable the mirroring:":
      "미러링을 사용하도록 인시던트 응답에 다음 새 필드가 추가되었습니다:",
    "For detailed instructions, refer to the official Splunk documentation:":
      "자세한 지침은 Splunk 공식 문서를 참조하세요:",
    "For example:":
      "예:",
    "For the OAuth method:":
      "OAuth 방식의 경우:",
    "For the URL argument, take a look here:":
      "URL 인수에 대해서는 여기를 참조하세요:",
    "For VMware Carbon Black EDR:":
      "VMware Carbon Black EDR의 경우:",
    "For VMware Carbon Black Endpoint Standard:":
      "VMware Carbon Black Endpoint Standard의 경우:",
    "Format: server.analyst1.com (do not include http:// or https://)":
      "형식: server.analyst1.com(http:// 또는 https://는 포함하지 마세요)",
    "Gather additional information about the threat model from remote APIs.":
      "원격 API에서 위협 모델에 대한 추가 정보를 수집합니다.",
    "Generate API token":
      "API 토큰 생성",
    "Get an API key":
      "API 키 가져오기",
    "Go to classifier":
      "분류기로 이동",
    "Go to incoming mapper":
      "수신 매퍼로 이동",
    "If MFA is enabled for your user, follow the next steps:":
      "사용자에 대해 MFA가 활성화되어 있는 경우 다음 단계를 따르세요:",
    "If MFA is enabled for your user, perform the following steps:":
      "사용자에 대해 MFA가 활성화되어 있는 경우 다음 단계를 수행하세요:",
    "If set to false, iam-create-user command will be skipped, and user will not be created.":
      "false로 설정하면 iam-create-user 명령이 건너뛰어지며 사용자가 생성되지 않습니다.",
    "If the connection test was successful, click “Save & Exit”":
      "연결 테스트에 성공하면 “저장 후 종료”를 클릭합니다",
    "If this parameter is given, the commands will run with the UPN mailbox instead of the default target mailbox.":
      "이 매개변수를 지정하면 명령이 기본 대상 사서함 대신 UPN 사서함으로 실행됩니다.",
    "If true, the user is created if the user profile doesn't exist in AD. Used in IAM commands only.":
      "true인 경우 AD에 사용자 프로필이 없으면 사용자가 생성됩니다. IAM 명령에서만 사용됩니다.",
    "In order to connect to Microsoft Graph Services using either Cortex Azure App or the Self-Deployed Azure App:":
      "Cortex Azure App 또는 Self-Deployed Azure App을 사용하여 Microsoft Graph Services에 연결하려면 다음을 수행합니다:",
    "In order to create an instance of the Microsoft Teams Webhook in Cortex, complete the following:":
      "Cortex에서 Microsoft Teams Webhook의 인스턴스를 생성하려면 다음을 수행합니다:",
    "In order to create the API Key go to:":
      "API 키를 생성하려면 다음으로 이동합니다:",
    "In order to use multiple values for the same filter and get alerts that have one of the values, state them several time, for example:":
      "동일한 필터에 여러 값을 사용하고 값 중 하나와 일치하는 알림을 가져오려면 값을 여러 번 지정합니다. 예:",
    "In Terraform Enterprise:":
      "Terraform Enterprise에서:",
    "In the Azure Application you created give the following application permission:":
      "생성한 Azure 애플리케이션에 다음 애플리케이션 권한을 부여합니다:",
    "In the Cortex Xsoar configuration window:":
      "Cortex Xsoar 구성 창에서:",
    "In the Silent Push Profile menu, click Organization, and go to the API tab.":
      "Silent Push의 Profile 메뉴에서 Organization을 클릭한 다음 API 탭으로 이동합니다.",
    "Joe Security Url":
      "Joe Security URL",
    "Log in to your Zoom admin user account, and follow these steps:":
      "Zoom 관리자 사용자 계정에 로그인한 후 다음 단계를 따르세요:",
    "Make sure you have the following parameters:":
      "다음 매개변수가 있는지 확인하세요:",
    "Max concurrent command calls":
      "최대 동시 명령 호출 수",
    "Max. Polling Time (in seconds):":
      "최대 폴링 시간(초):",
    "Maximum number of incidents per fetch. The default value is 200.":
      "가져오기당 최대 인시던트 수입니다. 기본값은 200입니다.",
    "More information about National clouds can be found here - https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud":
      "내셔널 클라우드에 대한 자세한 내용은 여기에서 확인할 수 있습니다 - https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud",
    "Navigate to one of the following:":
      "다음 중 하나로 이동합니다:",
    "Navigate to User Settings. (Vertical ellipsis available on the top right corner).":
      "User Settings로 이동합니다(오른쪽 상단의 세로 줄임표에서 사용할 수 있음).",
    "Next, you need to extract the private.key. You can do this using the following commands:":
      "다음으로 private.key를 추출해야 합니다. 다음 명령을 사용하여 추출할 수 있습니다:",
    "NGINX Global Directives":
      "NGINX 전역 지시문",
    "NGINX global directives to be passed on the command line using the -g option. Each directive should end with `;`. For example: `worker_processes 4; timer_resolution 100ms;`. Advanced configuration to be used only if instructed by Cortex Support.":
      "-g 옵션을 사용하여 명령줄에 전달할 NGINX 전역 지시문입니다. 각 지시문은 `;`로 끝나야 합니다. 예: `worker_processes 4; timer_resolution 100ms;`. 고급 구성이며 Cortex 지원팀에서 안내한 경우에만 사용하세요.",
    "NGINX Read Timeout":
      "NGINX 읽기 시간 제한",
    "NGINX Server Conf":
      "NGINX 서버 구성",
    "NGINX server configuration to be used instead of the default NGINX_SERVER_CONF used in the integration code. Advanced configuration to be used only if instructed by Cortex Support.":
      "통합 코드에서 사용되는 기본 NGINX_SERVER_CONF 대신 사용할 NGINX 서버 구성입니다. 고급 구성이며 Cortex 지원팀에서 안내한 경우에만 사용하세요.",
    "NGNIX read timeout in seconds.":
      "NGINX 읽기 시간 제한(초)입니다.",
    "NTLM authentication":
      "NTLM 인증",
    "OAuth2 Client Credentials":
      "OAuth2 클라이언트 자격 증명",
    "Override Authentication Type (NTLM, Basic, or Digest).":
      "인증 유형을 재정의합니다(NTLM, Basic 또는 Digest).",
    "Override the Darkmon TIP API base URL only if your tenant points at a non-default endpoint. The default value already targets the production Darkmon TIP service (https://api.darkmon.com/tip/2025.1). Leave blank to use the default.":
      "테넌트가 기본값이 아닌 엔드포인트를 가리키는 경우에만 Darkmon TIP API 기본 URL을 재정의하세요. 기본값은 이미 프로덕션 Darkmon TIP 서비스(https://api.darkmon.com/tip/2025.1)를 대상으로 합니다. 기본값을 사용하려면 비워 두세요.",
    "Panorama / Pan-OS Authentication:":
      "Panorama / Pan-OS 인증:",
    "Panorama: Configure a device group":
      "Panorama: 장치 그룹 구성",
    "Paste the API key into the settings of this integration in the field “API Key”":
      "API 키를 이 통합 설정의 \"API Key\" 필드에 붙여넣습니다.",
    "Port is optional (e.g https://sonar.example.com:9000)":
      "포트는 선택 사항입니다(예: https://sonar.example.com:9000)",
    "Post to a channel when a webhook request is received":
      "웹훅 요청을 수신하면 채널에 게시합니다",
    "PrivateLink service URL.":
      "PrivateLink 서비스 URL.",
    "Product version id":
      "제품 버전 ID",
    "Product versions name":
      "제품 버전 이름",
    "Production vs development":
      "프로덕션과 개발 환경 비교",
    "Products id":
      "제품 ID",
    "Products name":
      "제품 이름",
    "Public Folder":
      "공용 폴더",
    "Redact secrets in War Room output":
      "War Room 출력에서 시크릿 마스킹",
    "Required Permissions:":
      "필요한 권한:",
    "Requited. Not relevant for deprecated GSuite Apps setup - see Help section":
      "필수입니다. 사용 중단된 GSuite Apps 설정에는 해당되지 않습니다. 도움말 섹션을 참조하세요.",
    "Result name":
      "결과 이름",
    "Result short name":
      "결과 약칭",
    "Result vendor url (only human readable)":
      "결과 공급업체 URL(사람이 읽을 수 있는 형식만 해당)",
    "Retries":
      "재시도 횟수",
    "Role name for cross-organization account access":
      "조직 간 계정 액세스를 위한 역할 이름",
    "Role Session Duration":
      "역할 세션 기간",
    "Run as a separate process (protects against memory depletion)":
      "별도의 프로세스로 실행(메모리 고갈 방지)",
    "Search query for fetching alerts. The default fetch query is \"alert\".":
      "알림을 가져오기 위한 검색 쿼리입니다. 기본 가져오기 쿼리는 \"alert\"입니다.",
    "Select Fetches incidents.":
      "\"Fetches incidents\"를 선택합니다.",
    "Select how to authenticate with the Analyst1 API. Basic Authentication uses username/password. OAuth2 uses client_id/client_secret from an API Key.":
      "Analyst1 API 인증 방법을 선택하세요. Basic 인증은 사용자 이름/비밀번호를 사용합니다. OAuth2는 API 키의 client_id/client_secret을 사용합니다.",
    "Select the authentication method.":
      "인증 방법을 선택하세요.",
    "Select the Incident Mirroring Direction:":
      "인시던트 미러링 방향을 선택하세요:",
    "Select this checkbox if you are using a US Government cloud account.":
      "미국 정부 클라우드 계정을 사용하는 경우 이 확인란을 선택하세요.",
    "Server port. If not specified, the default port is 389 for LDAP, 636 for LDAPS, or 3268 for global catalog servers.":
      "서버 포트입니다. 지정하지 않으면 기본 포트는 LDAP의 경우 389, LDAPS의 경우 636, 글로벌 카탈로그 서버의 경우 3268입니다.",
    "SSL Version":
      "SSL 버전",
    "Start fetching incidents from the specified time.":
      "지정한 시간부터 인시던트 가져오기를 시작합니다.",
    "STS PrivateLink URL.":
      "STS PrivateLink URL.",
    "STS Region":
      "STS 리전",
    "Supported authentication methods:":
      "지원되는 인증 방법:",
    "The account identifier can be found using the user blade at the bottom left. Hover over the account you wish to onboard and select the copy option at the top right.":
      "계정 식별자는 왼쪽 하단의 사용자 블레이드에서 확인할 수 있습니다. 온보딩할 계정 위에 마우스를 올리고 오른쪽 상단의 복사 옵션을 선택하세요.",
    "The account identifier is usually of the format: [organization].[account]":
      "계정 식별자는 일반적으로 [organization].[account] 형식입니다.",
    "The API key must be entitled to the endpoints backing the commands you intend to run:":
      "API 키에는 실행하려는 명령의 기반이 되는 엔드포인트에 대한 권한이 부여되어 있어야 합니다:",
    "The AWS region used to create the STS client. Set this explicitly when STS calls must target a fixed region regardless of the command's target region.":
      "STS 클라이언트를 생성하는 데 사용되는 AWS 리전입니다. 명령의 대상 리전과 관계없이 STS 호출이 고정된 리전을 대상으로 해야 하는 경우 명시적으로 설정하세요.",
    "The base URL. For a cloud instance, use the default URL as configured. For an OnPrem instance, use your respective domain.":
      "기본 URL입니다. 클라우드 인스턴스의 경우 구성된 기본 URL을 사용하세요. 온프레미스 인스턴스의 경우 해당 도메인을 사용하세요.",
    "The default Kibana space ID to use for es-kibana-* commands. Used to derive the Kibana base URL from the Server URL. If a space_id argument is provided to a command, it overrides this value. See https://www.elastic.co/docs/deploy-manage/manage-spaces for more information.":
      "es-kibana-* 명령에 사용할 기본 Kibana 스페이스 ID입니다. 서버 URL에서 Kibana 기본 URL을 도출하는 데 사용됩니다. 명령에 space_id 인수를 제공하면 이 값을 재정의합니다. 자세한 내용은 https://www.elastic.co/docs/deploy-manage/manage-spaces 를 참조하세요.",
    "The default TTL for responses in the cache.":
      "캐시에 저장된 응답의 기본 TTL입니다.",
    "The field selected in the \"Issue Field to fetch by\" can't be used in the query.":
      "\"Issue Field to fetch by\"에서 선택한 필드는 쿼리에서 사용할 수 없습니다.",
    "The following are the required managed modules for this integration:":
      "이 통합에 필요한 관리형 모듈은 다음과 같습니다:",
    "The following commands require the API access to be configured:":
      "다음 명령을 사용하려면 API 액세스를 구성해야 합니다:",
    "The following commands require the SSH access to be configured:":
      "다음 명령을 사용하려면 SSH 액세스를 구성해야 합니다:",
    "The following scopes are required for the Okta v2 integration to work properly:":
      "Okta v2 통합이 올바르게 작동하려면 다음 범위가 필요합니다:",
    "The incidents are fetched according to a number of different optional log type queries. The log types are:":
      "인시던트는 여러 선택적 로그 유형 쿼리에 따라 가져옵니다. 로그 유형은 다음과 같습니다:",
    "The integration supports three types of authorization:":
      "이 통합은 세 가지 유형의 권한 부여를 지원합니다:",
    "The integration supports two types of authorization:":
      "이 통합은 두 가지 유형의 권한 부여를 지원합니다:",
    "The integration uses the supplied username and password to obtain a bearer token from Elasticsearch via the Get token API. Before using Bearer Authentication, ensure the token service is enabled on your Elasticsearch cluster:":
      "이 통합은 제공된 사용자 이름과 비밀번호를 사용하여 Get token API를 통해 Elasticsearch에서 베어러 토큰을 가져옵니다. Bearer 인증을 사용하기 전에 Elasticsearch 클러스터에서 토큰 서비스가 활성화되어 있는지 확인하세요:",
    "The Kibana server used by the es-kibana-* commands and by fetching and mirroring security alerts and cases. Required for on-premises (self-managed) deployments, where Kibana is usually hosted separately from Elasticsearch (for example, https://kibana.example.com:5601). If left empty, the Kibana URL is derived from the Server URL, which is supported only for Elastic Cloud deployments whose hostname contains \".es.\" (the segment is replaced with \".kb.\").":
      "es-kibana-* 명령과 보안 알림 및 케이스의 가져오기 및 미러링에 사용되는 Kibana 서버입니다. Kibana가 일반적으로 Elasticsearch와 별도로 호스팅되는 온프레미스(자체 관리) 배포에서는 필수입니다(예: https://kibana.example.com:5601). 비워 두면 Kibana URL은 서버 URL에서 도출되며, 이는 호스트 이름에 \".es.\"가 포함된 Elastic Cloud 배포에서만 지원됩니다(해당 세그먼트가 \".kb.\"로 대체됩니다).",
    "The maximum allowed value is dictated by the Jira property 'jira.search.views.default.max'. If you specify a value that is higher than this number, your search results will be truncated. Default value is 50":
      "허용되는 최대값은 Jira 속성 'jira.search.views.default.max'에 의해 결정됩니다. 이 값보다 큰 값을 지정하면 검색 결과가 잘립니다. 기본값은 50입니다.",
    "The maximum number of concurrent calls to allow when running a command on all accounts provided in \"AWS Organization accounts to access\".":
      "\"AWS Organization accounts to access\"에 제공된 모든 계정에서 명령을 실행할 때 허용되는 최대 동시 호출 수입니다.",
    "The maximum number of retry attempts when connection or throttling errors are encountered. Set to 0 to disable retries. The default value is 5 and the limit is 10. Note: Increasing the number of retries will increase the execution time.":
      "연결 오류 또는 제한(throttling) 오류가 발생할 때의 최대 재시도 횟수입니다. 재시도를 비활성화하려면 0으로 설정하세요. 기본값은 5이며 최대값은 10입니다. 참고: 재시도 횟수를 늘리면 실행 시간이 길어집니다.",
    "The parameter can be saved as 000-000 and added as an argument to each command, but Test button will fail.":
      "매개변수를 000-000으로 저장하고 각 명령의 인수로 추가할 수 있지만 Test 버튼은 실패합니다.",
    "The parameter can be saved as 000-000 and added as an argument to each command.":
      "매개변수를 000-000으로 저장하고 각 명령의 인수로 추가할 수 있습니다.",
    "The role name used to access accounts in the organization. This role name must exist in the accounts provided in \"AWS Organization accounts\" and be assumable with the credentials provided.":
      "조직의 계정에 액세스하는 데 사용되는 역할 이름입니다. 이 역할 이름은 \"AWS Organization accounts\"에 제공된 계정에 존재해야 하며 제공된 자격 증명으로 수임할 수 있어야 합니다.",
    "The SSL\\TLS version to use in SSL or Start TLS connections types. Default is None. It is recommended to select the TLS_CLIENT option, which auto-negotiate the highest protocol version that both the client and server support, and configure the context client-side connections.":
      "SSL 또는 Start TLS 연결 유형에서 사용할 SSL\\TLS 버전입니다. 기본값은 None입니다. 클라이언트와 서버가 모두 지원하는 가장 높은 프로토콜 버전을 자동으로 협상하고 클라이언트 측 연결의 컨텍스트를 구성하는 TLS_CLIENT 옵션을 선택하는 것이 좋습니다.",
    "The time in seconds till a timeout exception is reached. You can specify just the read timeout (for example 60) or also the connect timeout followed after a comma (for example 60,10). If a connect timeout is not specified, a default of 10 second will be used.":
      "타임아웃 예외가 발생할 때까지의 시간(초)입니다. 읽기 타임아웃만(예: 60) 또는 쉼표 뒤에 연결 타임아웃도(예: 60,10) 지정할 수 있습니다. 연결 타임아웃을 지정하지 않으면 기본값인 10초가 사용됩니다.",
    "The time range to consider for the initial data fetch in format: <number> <unit>. This parameter is only relevant when selecting to fetch by created time, or updated time. Default is 3 days. For example: 2 minutes, 2 hours, 2 days, 2 months, 2 years":
      "초기 데이터 가져오기에서 고려할 시간 범위를 <number> <unit> 형식으로 지정합니다. 이 매개변수는 생성 시간 또는 업데이트 시간으로 가져오기를 선택한 경우에만 관련이 있습니다. 기본값은 3일입니다. 예: 2 minutes, 2 hours, 2 days, 2 months, 2 years",
    "The TTL for 404 responses in the cache.":
      "캐시에 있는 404 응답의 TTL입니다.",
    "There are three ways to authenticate to the Microsoft Graph Services:":
      "Microsoft Graph 서비스에 인증하는 방법은 세 가지가 있습니다.",
    "There is only one application authentication method available:":
      "사용할 수 있는 애플리케이션 인증 방법은 하나뿐입니다.",
    "These parameters support the following integration commands:":
      "이 매개변수는 다음 통합 명령을 지원합니다.",
    "This field is ignored if other required fields are not provided (for example both the access token and the private key).":
      "다른 필수 필드가 제공되지 않으면(예: 액세스 토큰과 개인 키 모두) 이 필드는 무시됩니다.",
    "This field is used to configure the Jira Cloud.":
      "이 필드는 Jira Cloud를 구성하는 데 사용됩니다.",
    "This integration supports sending messages to additional Teams via a workflow. There are 2 methods for this:":
      "이 통합은 워크플로를 통해 추가 Teams로 메시지를 보내는 기능을 지원합니다. 방법은 두 가지가 있습니다.",
    "This integration supports three authentication methods:":
      "이 통합은 세 가지 인증 방법을 지원합니다.",
    "This integration supports two authentication methods:":
      "이 통합은 두 가지 인증 방법을 지원합니다.",
    "This is how the field (e.g, created date) is applied to the query: created >= {created date in last run} ORDER BY created ASC":
      "필드(예: 생성 날짜)가 쿼리에 적용되는 방식은 다음과 같습니다: created >= {created date in last run} ORDER BY created ASC",
    "This parameter is dismissed if \"id\" is not chosen in \"Issue Field to Fetch by\". This will only fetch Jira issues that are part of the same project as the issue that is configured in this parameter. If this value is 0, then the fetch mechanism will automatically start the fetch from the smallest ID with respect to the fetch query.":
      "이 매개변수는 \"Issue Field to Fetch by\"에서 \"id\"를 선택하지 않으면 무시됩니다. 이 매개변수에 구성된 이슈와 동일한 프로젝트에 속한 Jira 이슈만 가져옵니다. 이 값이 0이면 가져오기 메커니즘이 가져오기 쿼리를 기준으로 가장 작은 ID부터 자동으로 가져오기를 시작합니다.",
    "This parameter is dismissed while \"Use created field to fetch incidents\" is checked.":
      "\"Use created field to fetch incidents\"가 선택되어 있는 동안에는 이 매개변수가 무시됩니다.",
    "This section explains how to configure the instance of ANY.RUN TI Lookup in Cortex.":
      "이 섹션에서는 Cortex에서 ANY.RUN TI Lookup 인스턴스를 구성하는 방법을 설명합니다.",
    "This token is used for both OAuth 1.0 and personal access token authentication methods.":
      "이 토큰은 OAuth 1.0 및 개인 액세스 토큰 인증 방법 모두에 사용됩니다.",
    "This will be in the following format: https://customer-portal.asimily.com.":
      "형식은 다음과 같습니다: https://customer-portal.asimily.com",
    "TIM customers that upgraded to version 6.2 or above, can have this value pre-configured in their main account so no additional input is needed. To use this feature, upgrade your license so it includes the license key.":
      "버전 6.2 이상으로 업그레이드한 TIM 고객은 기본 계정에 이 값이 미리 구성되어 있을 수 있으므로 추가 입력이 필요하지 않습니다. 이 기능을 사용하려면 라이선스 키가 포함되도록 라이선스를 업그레이드하세요.",
    "Timeout (in seconds) for HTTP requests to Exchange Server":
      "Exchange Server에 대한 HTTP 요청 제한 시간(초)",
    "To configure the integration, you’ll need:":
      "통합을 구성하려면 다음이 필요합니다.",
    "To configure the integration:":
      "통합을 구성하려면:",
    "To configure this integration, you will need:":
      "이 통합을 구성하려면 다음이 필요합니다.",
    "To connect to the Microsoft Defender XDR:":
      "Microsoft Defender XDR에 연결하려면:",
    "To create an API key in Kibana:":
      "Kibana에서 API 키를 생성하려면:",
    "To create an instance of the Microsoft Teams integration in Cortex, complete the following:":
      "Cortex에서 Microsoft Teams 통합의 인스턴스를 생성하려면 다음을 완료하세요.",
    "To enable asset fetching:":
      "자산 가져오기를 활성화하려면:",
    "To fetch Vectra RUX Events Detections follow the next steps:":
      "Vectra RUX Events Detections를 가져오려면 다음 단계를 따르세요.",
    "To generate an API key, make a POST request to the firewall’s hostname or IP addresses using the administrative credentials and type=keygen:":
      "API 키를 생성하려면 관리자 자격 증명과 type=keygen을 사용하여 방화벽의 호스트 이름 또는 IP 주소로 POST 요청을 보내세요.",
    "To generate the files needed for SSL, you will need to create a Kafka client keystore. You can use the script at:":
      "SSL에 필요한 파일을 생성하려면 Kafka 클라이언트 키 저장소를 만들어야 합니다. 다음 위치의 스크립트를 사용할 수 있습니다.",
    "To get your Vectra Client ID and Client Secret Key, follow these steps:":
      "Vectra 클라이언트 ID와 클라이언트 시크릿 키를 가져오려면 다음 단계를 따르세요.",
    "To learn more about Zendesk roles refer to:":
      "Zendesk 역할에 대해 자세히 알아보려면 다음을 참조하세요.",
    "To obtain an API key, run the following CURL command and copy the key:":
      "API 키를 얻으려면 다음 CURL 명령을 실행하고 키를 복사하세요.",
    "To reduce the number of lookups made to the AbuseIPDB API, this option can be selected to gracefully skip enrichment of any IP addresses allocated for private networks.":
      "AbuseIPDB API에 대한 조회 횟수를 줄이기 위해 이 옵션을 선택하면 사설 네트워크에 할당된 IP 주소의 인리치먼트를 원활하게 건너뛸 수 있습니다.",
    "To set up mirroring:":
      "미러링을 설정하려면:",
    "To use OAuth 2.0 authorization follow the next steps:":
      "OAuth 2.0 인증을 사용하려면 다음 단계를 따르세요.",
    "To use OAuth 2.0 authorization perform the following steps:":
      "OAuth 2.0 인증을 사용하려면 다음 단계를 수행하세요.",
    "To use Splunk token authentication, enter the text:":
      "Splunk 토큰 인증을 사용하려면 다음 텍스트를 입력하세요.",
    "To use the mattermost integration:":
      "mattermost 통합을 사용하려면:",
    "Troubleshooting: Override Agent (Advanced)":
      "문제 해결: Override Agent(고급)",
    "Two application authentication methods are available:":
      "두 가지 애플리케이션 인증 방법을 사용할 수 있습니다.",
    "URL of the Hatching service will be either:":
      "Hatching 서비스의 URL은 다음 중 하나입니다.",
    "Use the \"API Token (Recommended)\" parameter instead.":
      "대신 \"API Token (Recommended)\" 매개변수를 사용하세요.",
    "Use the Akamai WAF integration to manage common sets of lists used by various Akamai security products and features.":
      "Akamai WAF 통합을 사용하여 다양한 Akamai 보안 제품 및 기능에서 사용하는 공통 목록 집합을 관리합니다.",
    "Use the following account credentials to get an access token:":
      "다음 계정 자격 증명을 사용하여 액세스 토큰을 가져옵니다.",
    "Use the SplunkPy v2 integration to:":
      "SplunkPy v2 통합을 사용하여 다음을 수행합니다.",
    "Used in the IAM commands.":
      "IAM 명령에서 사용됩니다.",
    "Used to impersonate a Google workspace user, so the spreadsheets is created in the associated Google Drive and is easily accessible from a UI. This parameter is used during the authentication process.":
      "Google Workspace 사용자를 가장하는 데 사용되며, 이를 통해 스프레드시트가 연결된 Google Drive에 생성되어 UI에서 쉽게 액세스할 수 있습니다. 이 매개변수는 인증 과정에서 사용됩니다.",
    "Users who wish to enrich or mirror fetched notables and have already used the integration in the past:":
      "이전에 통합을 사용한 적이 있고 가져온 notable을 인리치하거나 미러링하려는 사용자:",
    "Verify base DN on every command":
      "모든 명령에서 기본 DN 확인",
    "Version id":
      "버전 ID",
    "Version name":
      "버전 이름",
    "Vulnerability description (only human readable)":
      "취약성 설명(사람이 읽을 수 있는 형식만 해당)",
    "Vulnerability discovery date":
      "취약성 발견 날짜",
    "Vulnerability keywords":
      "취약성 키워드",
    "Vulnerability published date":
      "취약성 게시 날짜",
    "Vulnerability solution (only human readable)":
      "취약성 해결 방법(사람이 읽을 수 있는 형식만 해당)",
    "Vulnerability solution date":
      "취약성 해결 방법 날짜",
    "Vulnerability title (only human readable)":
      "취약성 제목(사람이 읽을 수 있는 형식만 해당)",
    "What is the top level object to search in (usually a project or organization in format of organization/XX).":
      "검색할 최상위 개체(일반적으로 organization/XX 형식의 프로젝트 또는 조직)입니다.",
    "What you get":
      "제공 내용",
    "When enabled, replaces password/card-number values in markdown table output with '***'. Raw values remain in rawJSON for playbook automation. Disable only in non-production debugging contexts.":
      "활성화하면 마크다운 표 출력의 비밀번호/카드 번호 값이 '***'(으)로 바뀝니다. 원시 값은 플레이북 자동화를 위해 rawJSON에 유지됩니다. 프로덕션이 아닌 디버깅 환경에서만 비활성화하세요.",
    "Which Darkmon record kinds the integration ingests as XSOAR incidents. Defaults to the high-signal trio. Lower-signal kinds (e.g. Ransomware Mention) are typically better handled via the monitoring playbooks rather than native fetch.":
      "통합이 XSOAR 인시던트로 수집하는 Darkmon 레코드 유형입니다. 기본값은 신호 강도가 높은 세 가지 유형입니다. 신호 강도가 낮은 유형(예: Ransomware Mention)은 기본 가져오기보다 모니터링 플레이북으로 처리하는 것이 일반적으로 더 적합합니다.",
    "XSOAR Verdict to set when Analyst1 Risk Score is \"Critical\".":
      "Analyst1 Risk Score가 \"Critical\"일 때 설정할 XSOAR 판정입니다.",
    "XSOAR Verdict to set when Analyst1 Risk Score is \"High\".":
      "Analyst1 Risk Score가 \"High\"일 때 설정할 XSOAR 판정입니다.",
    "XSOAR Verdict to set when Analyst1 Risk Score is \"Low\".":
      "Analyst1 Risk Score가 \"Low\"일 때 설정할 XSOAR 판정입니다.",
    "XSOAR Verdict to set when Analyst1 Risk Score is \"Lowest\".":
      "Analyst1 Risk Score가 \"Lowest\"일 때 설정할 XSOAR 판정입니다.",
    "XSOAR Verdict to set when Analyst1 Risk Score is \"Moderate\".":
      "Analyst1 Risk Score가 \"Moderate\"일 때 설정할 XSOAR 판정입니다.",
    "XSOAR Verdict to set when Analyst1 Risk Score is \"Unknown\" or not present.":
      "Analyst1 Risk Score가 \"Unknown\"이거나 없을 때 설정할 XSOAR 판정입니다.",
    "BaseUrl - API url":
      "BaseUrl - API URL",
    "SPLUNK user key":
      "Splunk 사용자 키",
    "IP values related to the offense are returned from the API as ID values. Enable this parameter the IDs to IP values.":
      "오펜스와 관련된 IP 값은 API에서 ID 값으로 반환됩니다. 이 매개변수를 활성화하면 ID가 IP 값으로 변환됩니다.",

    // --- Batch: Integration docs as joined sentences (06:04 export, Collector 0.2.0 full re-collection) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    "(Optional) Add a {0}.":
      "(선택 사항) {0}을(를) 추가합니다.",
    "(Optional) If no API token is displayed, click the {0} button to create a new one.":
      "(선택 사항) API 토큰이 표시되지 않으면 {0} 버튼을 클릭하여 새 토큰을 생성합니다.",
    "(Optional) Test the created integration instance by running the {0} command.":
      "(선택 사항) {0} 명령을 실행하여 생성한 통합 인스턴스를 테스트합니다.",
    "(Recommended) Enter the ServiceNow account {0} and {1} in the integration instance configuration. The integration will then automatically perform the initial OAuth login on first use and will automatically renew the refresh token when it expires.":
      "(권장) 통합 인스턴스 구성에 ServiceNow 계정의 {0} 및 {1}을(를) 입력합니다. 그러면 통합이 처음 사용할 때 초기 OAuth 로그인을 자동으로 수행하고, 리프레시 토큰이 만료되면 자동으로 갱신합니다.",
    "{0} - Available under PingOne Dashboard → Environment Properties.":
      "{0} - PingOne Dashboard → Environment Properties에서 확인할 수 있습니다.",
    "{0} - Each Microsoft Graph Security alert is fetched individually.":
      "{0} - 각 Microsoft Graph Security 경고가 개별적으로 가져와집니다.",
    "{0} - Each Microsoft Graph Security incident is fetched individually, with all associated alerts embedded within it and stored as raw JSON. This provides a single grouped incident containing its underlying alerts, rather than multiple separate alerts.":
      "{0} - 각 Microsoft Graph Security 인시던트가 개별적으로 가져와지며, 연결된 모든 경고가 포함된 상태로 원시 JSON으로 저장됩니다. 이를 통해 여러 개의 개별 경고 대신 기본 경고를 포함하는 하나의 그룹화된 인시던트가 제공됩니다.",
    "{0} - fully dynamic over every Darkmon data type, future-proof for new feature types added to the platform.":
      "{0} - 모든 Darkmon 데이터 유형에 대해 완전히 동적이며, 플랫폼에 추가되는 새로운 기능 유형에도 대응할 수 있습니다.",
    "{0} - list protected emails and pull every leak associated with each.":
      "{0} - 보호 대상 이메일을 나열하고 각 이메일과 관련된 모든 유출 정보를 가져옵니다.",
    "{0} - OAuth credentials for API access.":
      "{0} - API 액세스용 OAuth 자격 증명.",
    "{0} - Select your PingOne region (US, EU, or Asia).":
      "{0} - PingOne 리전(US, EU 또는 Asia)을 선택합니다.",
    "{0} — NGFW or WildFire API.":
      "{0} — NGFW 또는 WildFire API.",
    "{0} — Retrieve a paginated list of all CVEs monitored by ThreatMon.":
      "{0} — ThreatMon에서 모니터링하는 모든 CVE의 페이지 매김된 목록을 가져옵니다.",
    "{0} — Retrieve CVEs affecting products the company is subscribed to.":
      "{0} — 회사가 구독 중인 제품에 영향을 미치는 CVE를 가져옵니다.",
    "{0} — Submit a Black Market Monitoring data removal request for a specific finding.":
      "{0} — 특정 검색 결과에 대한 Black Market Monitoring 데이터 삭제 요청을 제출합니다.",
    "{0} — Submit a takedown request for an eligible Threatmon finding.":
      "{0} — 대상이 되는 Threatmon 검색 결과에 대한 테이크다운 요청을 제출합니다.",
    "{0} — the base URL of the Tenzai API (e.g. {1}).":
      "{0} — Tenzai API의 기본 URL(예: {1}).",
    "{0} — the Tenzai partner API key from the step above.":
      "{0} — 위 단계에서 얻은 Tenzai 파트너 API 키.",
    "{0} — Update the status of a specific Threatmon incident using its unique ID.":
      "{0} — 고유 ID를 사용하여 특정 Threatmon 인시던트의 상태를 업데이트합니다.",
    "{0} — XSOAR TIM API Key.":
      "{0} — XSOAR TIM API 키.",
    "{0} (articles + company-specific mentions).":
      "{0}(기사 및 회사별 언급).",
    "{0} (CVE feed with CVSS, exploitation status, source identifier).":
      "{0}(CVSS, 악용 상태, 소스 식별자가 포함된 CVE 피드).",
    "{0} (Recommended).":
      "{0}(권장).",
    "{0} always uses {1}. If {2} is configured. The integration will authenticate using {3} when the command is called. This should have no effect on other commands.":
      "{0}은(는) 항상 {1}을(를) 사용합니다. {2}이(가) 구성된 경우. 명령을 호출하면 통합이 {3}을(를) 사용하여 인증합니다. 다른 명령에는 영향을 미치지 않습니다.",
    "{0} and {1}":
      "{0} 및 {1}",
    "{0} and {1}.":
      "{0} 및 {1}.",
    "{0} and follow the instructions to create an OAuth client":
      "{0} 후 안내에 따라 OAuth 클라이언트를 생성합니다",
    "{0} and replace the {1} in the URL with {2}.":
      "{0} 그리고 URL의 {1}을(를) {2}(으)로 바꿉니다.",
    "{0} Choose the {1} for fetching attack paths (Default is 10 mins).":
      "{0} 공격 경로를 가져오는 {1}을(를) 선택합니다(기본값: 10분).",
    "{0} discovery (leaked accounts, bank cards, combo lists, public breaches, compromised employee accounts).":
      "{0} 검색(유출된 계정, 은행 카드, 콤보 리스트, 공개된 침해, 탈취된 직원 계정).",
    "{0} Do not enable {1} on the same instance. Configure one instance for the long-running Spotlight fetch, and a separate instance for the regular assets fetch.":
      "{0} 같은 인스턴스에서 {1}을(를) 활성화하지 마세요. 장기 실행 Spotlight 가져오기용 인스턴스 하나와 일반 자산 가져오기용 별도 인스턴스를 구성하세요.",
    "{0} for IPs, domains, URLs, file hashes, and emails, with first-class {1} + {2} outputs.":
      "IP, 도메인, URL, 파일 해시, 이메일에 대한 {0}. {1} + {2} 출력을 기본 지원합니다.",
    "{0} For support, please contact the Threatmon team at: {1}":
      "{0} 지원이 필요한 경우 Threatmon 팀에 문의하세요: {1}",
    "{0} If you are using the integration to rasterize un-trusted URLs or HTML content, such as those obtained via external emails, we recommend following the instructions at the {1} or {2} or {3} under the Block Internal Network Access section.":
      "{0} 외부 이메일 등을 통해 얻은 신뢰할 수 없는 URL 또는 HTML 콘텐츠를 래스터화하는 데 이 통합을 사용하는 경우, Block Internal Network Access 섹션의 {1}, {2} 또는 {3}에 있는 지침을 따르는 것이 좋습니다.",
    "{0} ingestion into Cortex Threat Intel Management.":
      "Cortex Threat Intel Management로의 {0} 수집.",
    "{0} is deprecated. Use the {1}integration instead.":
      "{0}은(는) 사용이 중단되었습니다. 대신 {1} 통합을 사용하세요.",
    "{0} Optionally, you can choose {1} type and use the {2} and {3} fields to enter the API key ID and API key.":
      "{0} 필요한 경우 {1} 유형을 선택하고 {2} 및 {3} 필드에 API 키 ID와 API 키를 입력할 수 있습니다.",
    "{0} supports {1} only when retrieving messages from a channel. Retrieving messages from a chat requires {2}.":
      "{0}은(는) 채널에서 메시지를 가져올 때만 {1}을(를) 지원합니다. 채팅에서 메시지를 가져오려면 {2}이(가) 필요합니다.",
    "{0} The {1} option is deprecated. No available replacement.":
      "{0} {1} 옵션은 사용이 중단되었습니다. 사용 가능한 대체 항목이 없습니다.",
    "{0} The {1} selection is ignored in this mode, and CNAPP Alerts are not collected. To collect CNAPP Alerts, use a separate instance with the regular assets fetch.":
      "{0} 이 모드에서는 {1} 선택이 무시되며 CNAPP 경고는 수집되지 않습니다. CNAPP 경고를 수집하려면 일반 자산 가져오기를 사용하는 별도의 인스턴스를 사용하세요.",
    "{0} This is a beta Integration that has been deprecated. The Integration uses an unsupported scraping API. We do not recommend using this integration in production environments. Some commands may not work as expected. Use the {1} Integration instead.":
      "{0} 이 통합은 사용이 중단된 베타 통합입니다. 이 통합은 지원되지 않는 스크래핑 API를 사용합니다. 프로덕션 환경에서는 이 통합을 사용하지 않는 것이 좋습니다. 일부 명령이 예상대로 작동하지 않을 수 있습니다. 대신 {1} 통합을 사용하세요.",
    "{0} to the service account - Deprecated. {1} permissions to the Exchange Server. {2} to the {3}.":
      "서비스 계정에 대한 {0} - 사용 중단됨. Exchange Server에 대한 {1} 권한. {2}(대상: {3}).",
    "{0}, {1}, {2} and {3}":
      "{0}, {1}, {2} 및 {3}",
    "{0}: a textual name for the integration instance.":
      "{0}: 통합 인스턴스의 텍스트 이름.",
    "{0}: Access the Settings page from the top navigation bar.":
      "{0}: 상단 탐색 모음에서 설정 페이지에 액세스합니다.",
    "{0}: Active Prisma SASE account with Strata Cloud Manager access":
      "{0}: Strata Cloud Manager에 액세스할 수 있는 활성 Prisma SASE 계정",
    "{0}: By default, the integration retrieves all event detections across all entity types (Account and Host) and all detection statuses (Open, Acknowledged, Escalated, Paused). This includes both prioritized and non-prioritized detections.":
      "{0}: 기본적으로 통합은 모든 엔티티 유형(Account 및 Host)과 모든 탐지 상태(Open, Acknowledged, Escalated, Paused)에 걸친 모든 이벤트 탐지를 가져옵니다. 여기에는 우선순위가 지정된 탐지와 우선순위가 지정되지 않은 탐지가 모두 포함됩니다.",
    "{0}: Choose specific indicator types to collect (IP, Domain, URL, File)":
      "{0}: 수집할 특정 지표 유형(IP, Domain, URL, File)을 선택합니다",
    "{0}: Click the {1} button.":
      "{0}: {1} 버튼을 클릭합니다.",
    "{0}: Configure the reliability level for feed context (default: A++ - Reputation script)":
      "{0}: 피드 컨텍스트의 신뢰도 수준을 구성합니다(기본값: A++ - Reputation script)",
    "{0}: Configure the reliability level for threat intelligence context (default: A++ - Reputation script)":
      "{0}: 위협 인텔리전스 컨텍스트의 신뢰도 수준을 구성합니다(기본값: A++ - Reputation script)",
    "{0}: Create an OAuth2 client in Strata Cloud Manager with Prisma AIRS AI Red Teaming API permissions":
      "{0}: Strata Cloud Manager에서 Prisma AIRS AI Red Teaming API 권한이 있는 OAuth2 클라이언트를 생성합니다",
    "{0}: Create an OAuth2 client in Strata Cloud Manager with Prisma AIRS AI Runtime Security API permissions":
      "{0}: Strata Cloud Manager에서 Prisma AIRS AI Runtime Security API 권한이 있는 OAuth2 클라이언트를 생성합니다",
    "{0}: Create an OAuth2 client in Strata Cloud Manager with Prisma AIRS AI Supply Chain Security API permissions":
      "{0}: Strata Cloud Manager에서 Prisma AIRS AI Supply Chain Security API 권한이 있는 OAuth2 클라이언트를 생성합니다",
    "{0}: Enable “Create Incidents for Escalated Detections” to retrieve all escalated detections, regardless of their priority level.":
      "{0}: “Create Incidents for Escalated Detections”을(를) 활성화하면 우선순위 수준에 관계없이 에스컬레이션된 모든 탐지를 가져옵니다.",
    "{0}: Enable “Create Incidents for Prioritized Detections” to filter out non-prioritized detections. Incidents will be created only for prioritized event detections.":
      "{0}: “Create Incidents for Prioritized Detections”을(를) 활성화하면 우선순위가 지정되지 않은 탐지가 필터링됩니다. 인시던트는 우선순위가 지정된 이벤트 탐지에 대해서만 생성됩니다.",
    "{0}: Enable automatic creation of indicators from relationships":
      "{0}: 관계로부터 지표 자동 생성을 활성화합니다",
    "{0}: Enable automatic creation of relationships between indicators and threat objects based on returned associations":
      "{0}: 반환된 연관 정보를 기반으로 지표와 위협 객체 간의 관계 자동 생성을 활성화합니다",
    "{0}: Enable both “Create Incidents for Prioritized Detections” and “Create Incidents for Escalated Detections”. This configuration retrieves detections that are either prioritized or escalated.":
      "{0}: “Create Incidents for Prioritized Detections”와(과) “Create Incidents for Escalated Detections”를 모두 활성화합니다. 이 구성은 우선순위가 지정되었거나 에스컬레이션된 탐지를 가져옵니다.",
    "{0}: Fill in the {1} and {2} fields. An organization admin can create these from the {3} tab on the {4} page in Doppel Vision. V2 is recommended: new Doppel API capabilities are added to V2 only.":
      "{0}: {1} 및 {2} 필드를 입력합니다. 조직 관리자는 Doppel Vision에서 {3} 탭({4} 페이지)에서 이를 생성할 수 있습니다. V2를 권장합니다. 새로운 Doppel API 기능은 V2에만 추가됩니다.",
    "{0}: Generate an {1} through {2} -> {3} -> {4} -> {5}.":
      "{0}: {1}을(를) 생성합니다({2} -> {3} -> {4} -> {5}).",
    "{0}: In the Settings page, select the {1} tab.":
      "{0}: 설정 페이지에서 {1} 탭을 선택합니다.",
    "{0}: Record your API client secret somewhere safe. For security purposes, it’s only shown when you create or reset the API client. If you lose your secret, you must reset it, which removes access for any integrations that still use the previous secret. 6. Add the {1} and {2} to Cortex. Note: For more information see the {3}":
      "{0}: API 클라이언트 시크릿을 안전한 곳에 기록해 두세요. 보안상의 이유로 API 클라이언트를 생성하거나 재설정할 때만 표시됩니다. 시크릿을 분실하면 재설정해야 하며, 이 경우 이전 시크릿을 계속 사용하는 모든 통합의 액세스가 제거됩니다. 6. {1} 및 {2}을(를) Cortex에 추가합니다. 참고: 자세한 내용은 {3}을(를) 참조하세요",
    "{0}: Select {1}.":
      "{0}: {1}을(를) 선택합니다.",
    "{0}: Select which types of objects to fetch (Indicators, Threat Objects, or both)":
      "{0}: 가져올 객체 유형(지표, 위협 객체 또는 둘 다)을 선택합니다",
    "{0}: Since QRadar API v19, The timestamp fields should be provided as milliseconds epoch format instead of seconds.":
      "{0}: QRadar API v19부터 타임스탬프 필드는 초 대신 밀리초 에포크 형식으로 제공해야 합니다.",
    "{0}: the “Test” button is not supported for this integration. To verify that authentication was configured correctly, run the {1} command.":
      "{0}: 이 통합에서는 “테스트” 버튼이 지원되지 않습니다. 인증이 올바르게 구성되었는지 확인하려면 {1} 명령을 실행하세요.",
    "{0}: The Server URL ({1}) is a global endpoint and does not require regional configuration.":
      "{0}: 서버 URL({1})은(는) 글로벌 엔드포인트이며 리전 구성이 필요하지 않습니다.",
    "{0}: The Server URL ({1}) is a global endpoint and does not require regional configuration. Only the Scanner API base URL is region-specific.":
      "{0}: 서버 URL({1})은(는) 글로벌 엔드포인트이며 리전 구성이 필요하지 않습니다. 리전별로 다른 것은 Scanner API 기본 URL뿐입니다.",
    "{0}: these are the actual certificates, not request certificates.":
      "{0}: 이것은 요청 인증서가 아니라 실제 인증서입니다.",
    "{0}: These are the actual certificates, not request certificates.":
      "{0}: 이것은 요청 인증서가 아니라 실제 인증서입니다.",
    "{0}: This is different from the OAuth2 Client ID/Secret used for management operations":
      "{0}: 관리 작업에 사용되는 OAuth2 클라이언트 ID/시크릿과는 다릅니다",
    "{0}: This option is relevant only if the integration is running on Azure VM.":
      "{0}: 이 옵션은 통합이 Azure VM에서 실행되는 경우에만 관련이 있습니다.",
    "{0}: To create an API key, you must have the {1} role.":
      "{0}: API 키를 생성하려면 {1} 역할이 있어야 합니다.",
    "{0}: Use the same {1} and {2} that you would use to log into FortiGate itself.":
      "{0}: FortiGate 자체에 로그인할 때 사용하는 것과 동일한 {1} 및 {2}을(를) 사용합니다.",
    "{0}: When authenticating with the Cortex application, sign in with the same user you want to integrate with. Since this user must grant consent for the app’s permissions, they must be an {1}. To let a non-admin user use the app instead, after an admin has consented to the application once, go to the {2} > {3}, find the app, and set {4} to {5}. This way, other users can obtain the Cortex application credentials without needing to sign in or consent themselves. Alternatively, you can use a {6}.":
      "{0}: Cortex 애플리케이션으로 인증할 때는 통합하려는 사용자와 동일한 사용자로 로그인합니다. 이 사용자는 앱의 권한에 동의해야 하므로 {1}(이)어야 합니다. 대신 관리자가 아닌 사용자가 앱을 사용할 수 있도록 하려면, 관리자가 애플리케이션에 한 번 동의한 후 {2} > {3}(으)로 이동하여 앱을 찾고 {4}을(를) {5}(으)로 설정합니다. 이렇게 하면 다른 사용자가 직접 로그인하거나 동의하지 않아도 Cortex 애플리케이션 자격 증명을 가져올 수 있습니다. 또는 {6}을(를) 사용할 수 있습니다.",
    "{0}: When enabled, the integration will only use read-only tools, preventing any write operations to GitHub.":
      "{0}: 활성화하면 통합이 읽기 전용 도구만 사용하여 GitHub에 대한 쓰기 작업을 방지합니다.",
    "{0}: When pooling is enabled, the number of active open database connections will equal the number of active running {1} Docker containers.":
      "{0}: 풀링이 활성화되면 활성 상태로 열려 있는 데이터베이스 연결 수는 실행 중인 활성 {1} Docker 컨테이너 수와 같습니다.",
    "{0}: When using the Authorization Code flow, make sure the user you authenticate with has the required role permissions. See {1} as an example.":
      "{0}: Authorization Code 플로우를 사용하는 경우 인증하는 사용자에게 필요한 역할 권한이 있는지 확인하세요. 예시는 {1}을(를) 참조하세요.",
    "{0}: Within a few seconds, a new API key will appear in the table. Click the {1} button next to the key to copy it securely.":
      "{0}: 몇 초 이내에 새 API 키가 테이블에 표시됩니다. 키 옆의 {1} 버튼을 클릭하여 안전하게 복사합니다.",
    "{0}: Your Prisma SASE TSG ID (found in Strata Cloud Manager settings)":
      "{0}: Prisma SASE TSG ID(Strata Cloud Manager 설정에서 확인)",
    "Access the {0}.":
      "{0}에 접속합니다.",
    "Active subscription at {0}":
      "{0}의 활성 구독",
    "Add a string of JSON to the integration parameter denoted {0}":
      "{0}(으)로 표시된 통합 매개변수에 JSON 문자열을 추가합니다",
    "AdvancedHunting.Read.All - Application - See section 4 in {0}":
      "AdvancedHunting.Read.All - 애플리케이션 - {0}의 섹션 4를 참조하세요",
    "After creating the procedure, fill in ‘Fetch events query’ the value: ‘call {0}’ with your procedure name.":
      "프로시저를 생성한 후 ‘Fetch events query’에 ‘call {0}’ 값을 입력합니다(프로시저 이름 사용).",
    "After creating the procedure, fill in ‘Fetch events query’ the value: ‘EXEC {0}’ with your procedure name.":
      "프로시저를 생성한 후 ‘Fetch events query’에 ‘EXEC {0}’ 값을 입력합니다(프로시저 이름 사용).",
    "After providing the mandatory details, click {0} to test the configuration.":
      "필수 세부 정보를 입력한 후 {0}을(를) 클릭하여 구성을 테스트합니다.",
    "All API plans are subject to a rate limit of 1 request per second - {0}":
      "모든 API 플랜에는 초당 1개 요청의 속도 제한이 적용됩니다 - {0}",
    "All ZIA API calls use {0}.":
      "모든 ZIA API 호출은 {0}을(를) 사용합니다.",
    "Alternatively, create an API key via the {0}.":
      "또는 {0}을(를) 통해 API 키를 생성합니다.",
    "API reference: {0}":
      "API 참조: {0}",
    "Append the email ID of the service account created and click {0} to save.":
      "생성한 서비스 계정의 이메일 ID를 추가하고 {0}을(를) 클릭하여 저장합니다.",
    "Attach the .cer file to your Azure App. See the following {0} for an example.":
      ".cer 파일을 Azure 앱에 첨부합니다. 예시는 다음 {0}을(를) 참조하세요.",
    "By default, secrets such as passwords and card numbers are redacted from War Room markdown output. Raw values remain available to playbooks via context for automation. Disable {0} only when troubleshooting in non-production environments.":
      "기본적으로 비밀번호 및 카드 번호와 같은 시크릿은 War Room 마크다운 출력에서 마스킹됩니다. 원시 값은 자동화를 위해 컨텍스트를 통해 Playbook에서 계속 사용할 수 있습니다. {0}은(는) 비운영 환경에서 문제를 해결할 때만 비활성화하세요.",
    "Choose one of the API versions listed under {0} column in the line corresponding to your QRadar version.":
      "QRadar 버전에 해당하는 행에서 {0} 열에 나열된 API 버전 중 하나를 선택합니다.",
    "Choose the {0} tab, and click the {1} checkbox.":
      "{0} 탭을 선택하고 {1} 체크박스를 클릭합니다.",
    "Choose the {0} type from the {1} dropdown list.":
      "{0} 유형을 {1} 드롭다운 목록에서 선택합니다.",
    "Click the button in the top-right corner and select {0}.":
      "오른쪽 상단의 버튼을 클릭하고 {0}을(를) 선택합니다.",
    "Click your {0} in the top navigation bar.":
      "상단 탐색 모음에서 {0}을(를) 클릭합니다.",
    "Click your username, and select {0}.":
      "사용자 이름을 클릭하고 {0}을(를) 선택합니다.",
    "Comma-separated list of URL categories to treat as suspicious. Default: {0}.":
      "의심스러운 것으로 처리할 URL 카테고리의 쉼표로 구분된 목록입니다. 기본값: {0}.",
    "Confirm that {0} is set to {1} in your Elasticsearch configuration (this is the default when TLS is enabled).":
      "Elasticsearch 구성에서 {0}이(가) {1}(으)로 설정되어 있는지 확인합니다(TLS가 활성화된 경우 기본값입니다).",
    "Connect Cortex to {0} for real-time intelligence from the Clear, Deep, and Dark Web - tailored to your assets.":
      "Cortex를 {0}에 연결하여 Clear Web, Deep Web, Dark Web의 실시간 인텔리전스를 자산에 맞춰 제공받습니다.",
    "Copy the Client ID and Client Secret into the {0} and {1} integration parameter fields.":
      "Client ID와 Client Secret을 {0} 및 {1} 통합 매개변수 필드에 복사합니다.",
    "Copy the generated {0} into the integration instance and save.":
      "생성된 {0}을(를) 통합 인스턴스에 복사하고 저장합니다.",
    "Copy the key when it is shown — it is displayed only once. You paste it into the {0} field of this integration instance, where it is stored encrypted.":
      "키가 표시되면 복사합니다. 한 번만 표시됩니다. 이 통합 인스턴스의 {0} 필드에 붙여넣으면 암호화되어 저장됩니다.",
    "Create a Personal Access Token for the new account ({0})":
      "새 계정용 Personal Access Token을 생성합니다({0})",
    "Create API credentials such as Client ID and Client Secret. For more information, see the {0}.":
      "Client ID 및 Client Secret과 같은 API 자격 증명을 생성합니다. 자세한 내용은 {0}을(를) 참조하세요.",
    "Doppel Tenant URL that you can use for calling the {0}. e.g. ,{1}":
      "{0} 호출에 사용할 수 있는 Doppel 테넌트 URL입니다. 예: {1}",
    "Duplicate the {0} mapper and/or the {1} mapper.":
      "{0} 매퍼 및/또는 {1} 매퍼를 복제합니다.",
    "Enter a {0}.":
      "{0}을(를) 입력합니다.",
    "Enter a descriptive name for the token and click {0}.":
      "토큰의 설명이 되는 이름을 입력하고 {0}을(를) 클릭합니다.",
    "Enter the desired name for the created app (e.g., “Cortex”), and click {0}.":
      "생성한 앱의 원하는 이름(예: “Cortex”)을 입력하고 {0}을(를) 클릭합니다.",
    "Enter your {0} URL (e.g., {1}).":
      "{0} URL을 입력합니다(예: {1}).",
    "Example: “CREATE PROCEDURE {0} @timestamp DATETIME AS SELECT * FROM TABLE_NAME WHERE timestamp >= @timestamp order by timestamp”":
      "예: “CREATE PROCEDURE {0} @timestamp DATETIME AS SELECT * FROM TABLE_NAME WHERE timestamp >= @timestamp order by timestamp”",
    "Example: “CREATE PROCEDURE {0}(IN ts DATETIME, IN l INT) BEGIN SELECT * FROM TABLE_NAME WHERE timestamp >= ts order by timestamp asc limit l; END”":
      "예: “CREATE PROCEDURE {0}(IN ts DATETIME, IN l INT) BEGIN SELECT * FROM TABLE_NAME WHERE timestamp >= ts order by timestamp asc limit l; END”",
    "Finally, you need to extract the CA certificate: {0}":
      "마지막으로 CA 인증서를 추출해야 합니다: {0}",
    "First, navigate to your {0}.":
      "먼저 {0}(으)로 이동합니다.",
    "Follow the instructions in this {0} to create your own client_id, client_secret, tsg_id.":
      "이 {0}의 지침에 따라 고유한 client_id, client_secret, tsg_id를 생성합니다.",
    "Follow these steps for {0} configuration:":
      "{0} 구성을 위해 다음 단계를 따르세요:",
    "Follow this guide to generate access keys: {0}. For the URL argument, take a look here: {1} For a list of possible values for the {2} parameter, refer to the {3} column in this {4} article.":
      "액세스 키를 생성하려면 이 가이드를 따르세요: {0}. URL 인수는 여기를 참조하세요: {1} {2} 매개변수에 가능한 값의 목록은 {3} 열(이 {4} 문서 내)을 참조하세요.",
    "For {0} {1} enter: {2}":
      "{0}이(가) {1}인 경우 다음을 입력합니다: {2}",
    "For information about Google’s API Key requirements and pricing, see {0}.":
      "Google의 API 키 요구 사항 및 가격에 대한 자세한 내용은 {0}을(를) 참조하세요.",
    "For more information about creating an JWT app click {0}.":
      "JWT 앱 생성에 대한 자세한 내용은 {0}을(를) 클릭하세요.",
    "For more information about registering a calling bot see the {0}.":
      "통화 봇 등록에 대한 자세한 내용은 {0}을(를) 참조하세요.",
    "For more information about this integration, visit {0}.":
      "이 통합에 대한 자세한 내용은 {0}을(를) 참조하세요.",
    "For more information about Threatmon, visit: {0}":
      "Threatmon에 대한 자세한 내용은 다음을 참조하세요: {0}",
    "For more information about Zendesk V2 integration, see the {0}":
      "Zendesk V2 통합에 대한 자세한 내용은 {0}을(를) 참조하세요",
    "For more information on getting your Slack access token, see the {0}":
      "Slack 액세스 토큰을 가져오는 방법은 {0}을(를) 참조하세요",
    "For more information on how to create the above credentials, see {0}.":
      "위 자격 증명을 만드는 방법에 대한 자세한 내용은 {0}을(를) 참조하세요.",
    "For more information, see the ‘{0}’ official documentation article.":
      "자세한 내용은 ‘{0}’ 공식 문서를 참조하세요.",
    "For more information, visit the {0}.":
      "자세한 내용은 {0}을(를) 참조하세요.",
    "For on-premise WildFire appliances, use the appliance IP or hostname with the {0} path (e.g., {1}).":
      "온프레미스 WildFire 어플라이언스의 경우 어플라이언스 IP 또는 호스트 이름에 {0} 경로를 붙여 사용합니다(예: {1}).",
    "For testing completion of authorization process run the {0} command.":
      "권한 부여 프로세스 완료를 테스트하려면 {0} 명령을 실행합니다.",
    "For the {0} field refer to the {1} on how to retrieve it":
      "{0} 필드를 가져오는 방법은 {1}을(를) 참조하세요",
    "For the {0} parameter use your Sysdig SaaS url, refer to the {1} for a list of them based on the region.":
      "{0} 매개변수에는 Sysdig SaaS URL을 사용하세요. 리전별 목록은 {1}을(를) 참조하세요.",
    "For using OAuth 2.0 see the instructions above. The OTP code should be appended to the password parameter in the {0} command.":
      "OAuth 2.0을 사용하는 경우 위의 지침을 참조하세요. OTP 코드는 {0} 명령의 password 매개변수 끝에 추가해야 합니다.",
    "From the left sidebar, navigate to {0}.":
      "왼쪽 사이드바에서 {0}(으)로 이동합니다.",
    "Generate a {0} in ZIdentity when creating the API client.":
      "ZIdentity에서 API 클라이언트를 만들 때 {0}을(를) 생성합니다.",
    "Generate a key of type {0}.":
      "{0} 유형의 키를 생성합니다.",
    "Go to the {0} -> {1}":
      "{0} -> {1}(으)로 이동합니다",
    "Go to the {0} and follow the procedure in the Creating a Service Account section. After you create a service account, a Service Account Private Key file is downloaded. You will need this file when configuring an instance of the integration.":
      "{0}에 접속하여 Creating a Service Account 섹션의 절차를 따릅니다. 서비스 계정을 생성하면 서비스 계정 비공개 키 파일이 다운로드됩니다. 통합 인스턴스를 구성할 때 이 파일이 필요합니다.",
    "Go to the {0} tab, and click {1} on the authorization with type of OAuth 2.0 (3LO).":
      "{0} 탭으로 이동하여 OAuth 2.0(3LO) 유형의 권한 부여에서 {1}을(를) 클릭합니다.",
    "Go to the {0} tab.":
      "{0} 탭으로 이동합니다.",
    "Go to your {0}.":
      "{0}(으)로 이동합니다.",
    "Go to your Carbon Black console. This should be the URL in {0}.":
      "Carbon Black 콘솔로 이동합니다. 이는 {0}의 URL이어야 합니다.",
    "If enabled, the integration will automatically activate configuration changes after each write command. If disabled, use the {0} command manually.":
      "활성화하면 통합이 각 쓰기 명령 후 구성 변경 사항을 자동으로 활성화합니다. 비활성화하면 {0} 명령을 수동으로 사용하세요.",
    "If the {0} and {1} fields are configured, the integration will automatically perform the initial login and renew the refresh token when it expires. Otherwise, you have to run the {2} command for the initial login and again each time the refresh token expires.":
      "{0} 및 {1} 필드가 구성되어 있으면 통합이 최초 로그인을 자동으로 수행하고 리프레시 토큰이 만료될 때 갱신합니다. 그렇지 않으면 최초 로그인 시와 리프레시 토큰이 만료될 때마다 {2} 명령을 실행해야 합니다.",
    "If there is no API token displayed, click the {0} button to create a new one.":
      "표시된 API 토큰이 없으면 {0} 버튼을 클릭하여 새 토큰을 생성합니다.",
    "If you use {0} to separate your data, set the {1} parameter in the instance configuration. All {2} commands will then operate within that space by default. You can also override the space per-command using the {3} argument.":
      "데이터를 분리하기 위해 {0}을(를) 사용하는 경우 인스턴스 구성에서 {1} 매개변수를 설정하세요. 그러면 모든 {2} 명령이 기본적으로 해당 스페이스 내에서 작동합니다. {3} 인수를 사용하여 명령별로 스페이스를 재정의할 수도 있습니다.",
    "Import Living off the land binaries from {0} into the Threat Intelligence Management(TIM) module for security investigations and threat hunting activities.":
      "보안 조사 및 위협 헌팅 활동을 위해 {0}의 Living off the land binaries를 Threat Intelligence Management(TIM) 모듈로 가져옵니다.",
    "In addition, provide a pre-defined risk plan (for example, {0}).":
      "또한 사전 정의된 위험 플랜을 지정합니다(예: {0}).",
    "In both options below, the {0} is used.":
      "아래의 두 옵션 모두 {0}이(가) 사용됩니다.",
    "In GitHub, click your {0} (upper-right), then {1}.":
      "GitHub에서 {0}(오른쪽 위)을(를) 클릭한 다음 {1}을(를) 클릭하세요.",
    "In order to connect to Microsoft Risky User using either {0} or the {1}:":
      "{0} 또는 {1}을(를) 사용하여 Microsoft Risky User에 연결하려면:",
    "In order to use the following commands, you must use the {0}:":
      "다음 명령을 사용하려면 {0}을(를) 사용해야 합니다:",
    "In order to use this integration, you need to enter your Okta API token in the {0} integration instance parameter. For information on getting your Okta API token, see the {1}.":
      "이 통합을 사용하려면 Okta API 토큰을 {0} 통합 인스턴스 매개변수에 입력해야 합니다. Okta API 토큰을 가져오는 방법에 대한 자세한 내용은 {1}을(를) 참조하세요.",
    "In the {0} dialog box, click {1}. Make sure to copy the generated private key (in PEM format) to somewhere safe, and click {2}.":
      "{0} 대화 상자에서 {1}을(를) 클릭합니다. 생성된 개인 키(PEM 형식)를 안전한 위치에 복사한 다음 {2}을(를) 클릭하세요.",
    "In the {0} drop-down menu, select a permission to apply for the credential tokens. Define the desired permissions. To use the API credential to grant read-only access on individual {1} resources, select either the User or Editor permission on {2}.":
      "{0} 드롭다운 메뉴에서 자격 증명 토큰에 적용할 권한을 선택합니다. 원하는 권한을 정의하세요. API 자격 증명을 사용하여 개별 {1} 리소스에 대한 읽기 전용 액세스 권한을 부여하려면 {2}에서 User 또는 Editor 권한을 선택하세요.",
    "In the {0} field, enter the application (client) ID.":
      "{0} 필드에 애플리케이션(클라이언트) ID를 입력하세요.",
    "In the {0} field, enter the application redirect URI.":
      "{0} 필드에 애플리케이션 리디렉션 URI를 입력하세요.",
    "In the {0} field, enter the client secret.":
      "{0} 필드에 클라이언트 시크릿을 입력하세요.",
    "In the {0} field, enter the directory (tenant) ID.":
      "{0} 필드에 디렉터리(테넌트) ID를 입력하세요.",
    "In the {0} field, select the {1} option.":
      "{0} 필드에서 {1} 옵션을 선택하세요.",
    "In the {0} field, type {1}.":
      "{0} 필드에 {1}을(를) 입력하세요.",
    "In the {0} field, type your API token.":
      "{0} 필드에 API 토큰을 입력하세요.",
    "In the Admin Console, go to {0} > {1}.":
      "Admin Console에서 {0} > {1}(으)로 이동하세요.",
    "In the Admin Console, select {0} > {1} from the menu, and then select the {2} tab.":
      "Admin Console의 메뉴에서 {0} > {1}을(를) 선택한 다음 {2} 탭을 선택하세요.",
    "In the app configuration page, under the {0} tab and the {1} section, select {2} for the {3} option.":
      "앱 구성 페이지의 {0} 탭, {1} 섹션에서 {2}을(를) {3} 옵션으로 선택하세요.",
    "In the console, go to {0} > {1} .":
      "콘솔에서 {0} > {1}(으)로 이동하세요.",
    "In the dropdown list under “Role”, select {0}.":
      "“Role” 아래의 드롭다운 목록에서 {0}을(를) 선택하세요.",
    "In the instance configuration, under the {0} field select the {1} option.":
      "인스턴스 구성의 {0} 필드에서 {1} 옵션을 선택하세요.",
    "In the integration settings pane in your tenant, check the {0} checkbox.":
      "테넌트의 통합 설정 창에서 {0} 확인란을 선택하세요.",
    "In the left sidebar, click {0}.":
      "왼쪽 사이드바에서 {0}을(를) 클릭하세요.",
    "In the management interface, create a role of type API. Select the APIs under {0} for the role and assign an administrator that role.":
      "관리 인터페이스에서 API 유형의 역할을 만듭니다. 해당 역할에 대해 {0} 아래의 API를 선택하고 관리자에게 그 역할을 할당하세요.",
    "In this method, the {0} is used.":
      "이 방법에서는 {0}이(가) 사용됩니다.",
    "In XSOAR, create the custom indicator and incident field, for example, {0}.":
      "XSOAR에서 사용자 지정 지표 및 인시던트 필드를 만드세요(예: {0}).",
    "In your ServiceNow instance, navigate to {0} and ensure an MCP server is configured (or use the preconfigured {1}).":
      "ServiceNow 인스턴스에서 {0}(으)로 이동하여 MCP 서버가 구성되어 있는지 확인하세요(또는 사전 구성된 {1}을(를) 사용하세요).",
    "Incident.Read.All - Application - See section 4 in {0}":
      "Incident.Read.All - Application - {0}의 섹션 4 참조",
    "Incident.ReadWrite.All - Application - See section 4 in {0}":
      "Incident.ReadWrite.All - Application - {0}의 섹션 4 참조",
    "Insert a {0}.":
      "{0}을(를) 삽입하세요.",
    "Log in to the {0} with an account that has {1}.":
      "{0}에 {1}이(가) 있는 계정으로 로그인하세요.",
    "Log in to your {0} account.":
      "{0} 계정에 로그인하세요.",
    "Log in to your ServiceNow instance and create an endpoint for Cortex to access your instance. (See {0} for more information).":
      "ServiceNow 인스턴스에 로그인하고 Cortex가 인스턴스에 액세스할 수 있도록 엔드포인트를 만드세요. (자세한 내용은 {0}을(를) 참조하세요.)",
    "Make a note of the {0} and {1}. These will be used to configure the integration.":
      "{0}와(과) {1}을(를) 기록해 두세요. 이 값은 통합을 구성하는 데 사용됩니다.",
    "Make sure you have your SecneurX API-Key. You can obtain the API-Key by sending an email to {0}.":
      "SecneurX API 키가 있는지 확인하세요. {0}(으)로 이메일을 보내 API 키를 받을 수 있습니다.",
    "McAfee ePO has a highly flexible and powerful permissions system. The permissions required for the user that uses this integration depend on which operations they need to perform. The API user should have the same permissions a regular user would have in order to access the data via the UI. It is possible to view the exact permissions needed for a specific command by running the {0} command. The {1} command’s output will include help information for the specific command including required permissions. More info about McAfee ePO’s permissions model is available {2}.":
      "McAfee ePO에는 매우 유연하고 강력한 권한 시스템이 있습니다. 이 통합을 사용하는 사용자에게 필요한 권한은 수행해야 하는 작업에 따라 다릅니다. API 사용자에게는 UI를 통해 데이터에 액세스하기 위해 일반 사용자가 가지는 것과 동일한 권한이 있어야 합니다. {0} 명령을 실행하면 특정 명령에 필요한 정확한 권한을 확인할 수 있습니다. {1} 명령의 출력에는 필요한 권한을 포함하여 해당 특정 명령에 대한 도움말 정보가 포함됩니다. McAfee ePO의 권한 모델에 대한 자세한 내용은 {2}에서 확인할 수 있습니다.",
    "Microsoft 365 Germany Endpoint: {0}":
      "Microsoft 365 Germany 엔드포인트: {0}",
    "Microsoft integrations (Graph and Azure) in Cortex use Entra ID applications to authenticate with Microsoft APIs. These integrations use OAuth 2.0 and OpenID Connect standard-compliant authentication services, which use an Application to sign-in or delegate authentication. For more information, see the {0}.":
      "Cortex의 Microsoft 통합(Graph 및 Azure)은 Entra ID 애플리케이션을 사용하여 Microsoft API로 인증합니다. 이러한 통합은 OAuth 2.0 및 OpenID Connect 표준을 준수하는 인증 서비스를 사용하며, 이 서비스는 애플리케이션을 사용하여 로그인하거나 인증을 위임합니다. 자세한 내용은 {0}을(를) 참조하세요.",
    "Microsoft Operated by 21Vianet Endpoint: {0}":
      "Microsoft Operated by 21Vianet 엔드포인트: {0}",
    "More information can be found on {0}.":
      "자세한 내용은 {0}에서 확인할 수 있습니다.",
    "Name your token and click {0}.":
      "토큰의 이름을 지정하고 {0}을(를) 클릭하세요.",
    "Navigate to the {0} or {1} section (refer to your Magnet Automate version documentation for the exact location).":
      "{0} 또는 {1} 섹션으로 이동하세요(정확한 위치는 사용 중인 Magnet Automate 버전 문서를 참조하세요).",
    "Navigate to your {0}.":
      "{0}(으)로 이동하세요.",
    "Next to the {0} label, make sure the {1} option is selected, and that the {2} option is not selected.":
      "{0} 레이블 옆에서 {1} 옵션이 선택되어 있고 {2} 옵션은 선택되어 있지 않은지 확인하세요.",
    "Next to the {0} label, uncheck the {1} option if it’s selected.":
      "{0} 레이블 옆의 {1} 옵션이 선택되어 있으면 선택을 해제하세요.",
    "Next, log in to your {0} account.":
      "다음으로 {0} 계정에 로그인하세요.",
    "Note your {0} (e.g., {1} if your login URL is {2}).":
      "{0}을(를) 기록해 두세요(예: {1}, 로그인 URL이 {2}인 경우).",
    "Note: If you’re uncertain which API version to use, it is recommended to use the latest API version listed in the {0} column in the line corresponding to your QRadar version.":
      "참고: 사용할 API 버전이 확실하지 않은 경우 사용 중인 QRadar 버전에 해당하는 행의 {0} 열에 나열된 최신 API 버전을 사용하는 것이 좋습니다.",
    "Note: SaaS Security API currently allows you to mirror out only closed incidents, and only their {0} and {1} fields.":
      "참고: SaaS Security API는 현재 종료된 인시던트와 해당 인시던트의 {0} 및 {1} 필드만 미러링 아웃할 수 있습니다.",
    "Notice: Submitting indicators using the {0} command of this integration might make the indicator data publicly available. See the vendor’s documentation for more details":
      "주의: 이 통합의 {0} 명령을 사용하여 지표를 제출하면 지표 데이터가 공개될 수 있습니다. 자세한 내용은 공급업체 문서를 참조하세요",
    "On large tenants a full Spotlight collection can take many hours - longer than the maximum execution time allowed for a single assets fetch. In such cases, the fetch is terminated before it completes. Enable the {0} parameter (under the {1} section, {2}) to run the Spotlight fetch in a long-running container instead, which is not bound by that execution time limit and lets a cycle run to completion. A new cycle starts every 24 hours, or immediately after the previous one ends if it ran longer.":
      "대규모 테넌트에서는 전체 Spotlight 수집에 여러 시간이 걸릴 수 있으며, 이는 단일 자산 가져오기에 허용되는 최대 실행 시간보다 깁니다. 이러한 경우 가져오기가 완료되기 전에 종료됩니다. 대신 장시간 실행 컨테이너에서 Spotlight 가져오기를 실행하려면 {0} 매개변수({1} 섹션, {2})를 활성화하세요. 이 컨테이너는 해당 실행 시간 제한을 받지 않으며 사이클을 끝까지 실행할 수 있습니다. 새 사이클은 24시간마다 시작되며, 이전 사이클이 더 오래 실행된 경우 종료 직후 바로 시작됩니다.",
    "On premise administrators: Edit the {0} file and set the following key to true: com.proofpoint.admin.apigui.enable=t":
      "온프레미스 관리자: {0} 파일을 편집하고 다음 키를 true로 설정하세요: com.proofpoint.admin.apigui.enable=t",
    "On the opened page, click {0}.":
      "열린 페이지에서 {0}을(를) 클릭하세요.",
    "Open the {0}.":
      "{0}을(를) 여세요.",
    "Open the main menu and go to {0} > {1}.":
      "기본 메뉴를 열고 {0} > {1}(으)로 이동하세요.",
    "Open your Google Admin console (at {0}).":
      "Google Admin console({0})을(를) 여세요.",
    "Optional: To revoke all currently valid API keys, follow this {0}":
      "선택 사항: 현재 유효한 모든 API 키를 취소하려면 이 {0}을(를) 따르세요",
    "Optionally set the {0} (must match your deployment profile region) and {1}":
      "필요에 따라 {0}(배포 프로필 리전과 일치해야 함) 및 {1}을(를) 설정하세요",
    "Please note the default timeout for queries is 30 seconds. To increase the timeout set the following parameter in the {0} field: {1} (notice the space in the name of the parameter) with the desired timeout in seconds. For example to set a timeout of 120 seconds use: {2}.":
      "쿼리의 기본 제한 시간은 30초입니다. 제한 시간을 늘리려면 {0} 필드에 다음 매개변수를 설정하고 원하는 제한 시간(초)을 지정하세요: {1}(매개변수 이름에 공백이 있다는 점에 유의하세요). 예를 들어 제한 시간을 120초로 설정하려면 다음을 사용하세요: {2}.",
    "Preconfigured template attachments can be supported by using {0}":
      "사전 구성된 템플릿 첨부 파일은 {0}을(를) 사용하여 지원할 수 있습니다",
    "Provide your {0} (TSG ID)":
      "{0}(TSG ID)을(를) 입력하세요",
    "Providing additional filters should be done in the following format: {0}. For example: {1}.":
      "추가 필터는 다음 형식으로 지정해야 합니다: {0}. 예: {1}.",
    "Rasterize Mode: It is possible to rasterize either via Chrome WebDriver or Chrome Headless CLI. WebDriver supports more options than Headless CLI. Such as support for the {0} option in the {1} command. There are some urls that do not rasterize well with WebDriver and may succeed with Headless CLI. Thus, it is recommended to use the {2} mode, which will use WebDriver as a start and fallback to Headless CLI if it fails.":
      "래스터화 모드: Chrome WebDriver 또는 Chrome Headless CLI를 통해 래스터화할 수 있습니다. WebDriver는 Headless CLI보다 더 많은 옵션을 지원합니다. 예를 들어 {0} 옵션({1} 명령)을 지원합니다. 일부 URL은 WebDriver에서는 래스터화가 잘 되지 않지만 Headless CLI에서는 성공할 수 있습니다. 따라서 WebDriver를 먼저 사용하고 실패하면 Headless CLI로 대체하는 {2} 모드를 사용하는 것이 좋습니다.",
    "Review the requested permissions on GitLab, and click {0}.":
      "GitLab에서 요청된 권한을 검토한 다음 {0}을(를) 클릭하세요.",
    "Save the integration and note the {0} and {1}.":
      "통합을 저장하고 {0}와(과) {1}을(를) 기록해 두세요.",
    "See {0} for more information.":
      "자세한 내용은 {0}을(를) 참조하세요.",
    "See {0} regarding this requirement.":
      "이 요구 사항에 대해서는 {0}을(를) 참조하세요.",
    "Select a {0}.":
      "{0}을(를) 선택하세요.",
    "Select an {0} for the token.":
      "토큰의 {0}을(를) 선택하세요.",
    "Select an {0}, then fill in only that version’s fields. Fields labeled with the other version are ignored.":
      "{0}을(를) 선택한 다음 해당 버전의 필드만 입력하세요. 다른 버전으로 레이블이 지정된 필드는 무시됩니다.",
    "Select your User Assigned Managed Identity -> copy the Client ID -> put it in the {0} filed in the instance configuration.":
      "User Assigned Managed Identity를 선택 -> Client ID를 복사 -> 인스턴스 구성의 {0} 필드에 입력하세요.",
    "Sends a POST request to {0} with {1}, {2}, and {3}.":
      "{0}에 {1}, {2}, {3}을(를) 포함하여 POST 요청을 보냅니다.",
    "Set up ZIdentity, link your service tenants, and create API Clients with the right roles and resources — {0}.":
      "ZIdentity를 설정하고 서비스 테넌트를 연결한 다음 적절한 역할과 리소스를 가진 API 클라이언트를 만드세요 — {0}.",
    "Sign in to your Darkmon tenant, go to {0}, and create a key with the scopes your XSOAR instance needs. Paste it into the {1} field below.":
      "Darkmon 테넌트에 로그인하고 {0}(으)로 이동하여 XSOAR 인스턴스에 필요한 범위를 가진 키를 만드세요. 아래 {1} 필드에 붙여넣으세요.",
    "Sign in to your Okta organization as a user {0}.":
      "{0} 사용자로 Okta 조직에 로그인하세요.",
    "The {0} advanced parameter is available for cases where the automatic agent detection fails (e.g., API requests return errors or the {1} button fails due to an incorrect agent header). By default, the integration auto-detects the correct agent based on the platform. Only change this setting if instructed to do so by support or if auto-detection is not working correctly.":
      "{0} 고급 매개변수는 자동 에이전트 감지가 실패하는 경우(예: 잘못된 에이전트 헤더로 인해 API 요청이 오류를 반환하거나 {1} 버튼이 실패하는 경우)를 위해 제공됩니다. 기본적으로 통합은 플랫폼에 따라 올바른 에이전트를 자동으로 감지합니다. 지원팀의 안내가 있거나 자동 감지가 올바르게 작동하지 않는 경우에만 이 설정을 변경하세요.",
    "The {0} and {1} commands are only supported when using the {2} with {3} permission type.":
      "{0} 및 {1} 명령은 {2}에서 {3} 권한 유형을 사용하는 경우에만 지원됩니다.",
    "The {0} and the {1} integration parameters should be left blank.":
      "{0} 및 {1} 통합 매개변수는 비워 두어야 합니다.",
    "The {0} command requires some JSON format arguments. Please make sure the inputed JSONs have uniqe characters (such as {1}) escaped before entering them (e.g. {2}).":
      "{0} 명령에는 JSON 형식의 인수가 필요합니다. 입력하는 JSON의 특수 문자({1} 등)를 입력하기 전에 이스케이프 처리했는지 확인하세요(예: {2}).",
    "The {0} corresponds to the {1} in the integration credentials field.":
      "{0}은(는) 통합 자격 증명 필드의 {1}에 해당합니다.",
    "The {0} integration parameter should be set according to the requested OAuth2 permissions types to grant access to in Microsoft identity platform, for more details see the {1}.":
      "{0} 통합 매개변수는 Microsoft identity platform에서 액세스를 허용하기 위해 요청하는 OAuth2 권한 유형에 따라 설정해야 합니다. 자세한 내용은 {1}을(를) 참조하세요.",
    "The {0} integration parameter should be set to {1} (the Cortex Azure app ID).":
      "{0} 통합 매개변수는 {1}(Cortex Azure 앱 ID)(으)로 설정해야 합니다.",
    "The {0} parameter is required by both.":
      "{0} 매개변수는 둘 다에서 필요합니다.",
    "The {0} parameter specifies if a new user should be created when the User Profile passed was not found in the 3rd-party integration.":
      "{0} 매개변수는 전달된 사용자 프로필이 타사 통합에서 발견되지 않은 경우 새 사용자를 만들지 여부를 지정합니다.",
    "The API connection requires the {0} and {1} parameters as well as a {2} or {3}.":
      "API 연결에는 {0} 및 {1} 매개변수와 {2} 또는 {3}이(가) 필요합니다.",
    "The default language used for OCR is English. To configure additional languages, in the {0} parameter specify a CSV list of language codes. For example, to set the integration for English and French, set this value: {1}. To see all supported language codes,run the following command:":
      "OCR에 사용되는 기본 언어는 영어입니다. 추가 언어를 구성하려면 {0} 매개변수에 언어 코드의 CSV 목록을 지정하세요. 예를 들어 통합을 영어와 프랑스어로 설정하려면 다음 값을 설정하세요: {1}. 지원되는 모든 언어 코드를 보려면 다음 명령을 실행하세요:",
    "The integration uses the OAuth 2.0 {0} grant type:":
      "이 통합은 OAuth 2.0 {0} 부여 유형을 사용합니다:",
    "The legacy content search solution is {0}. Content searches are now performed within the context of an eDiscovery case.":
      "레거시 콘텐츠 검색 솔루션은 {0} 상태입니다. 이제 콘텐츠 검색은 eDiscovery 케이스의 컨텍스트 내에서 수행됩니다.",
    "The pack ships pointing at the production endpoint. To target your dev or staging environment, set {0} to your dev URL on this instance only.":
      "팩은 프로덕션 엔드포인트를 가리키도록 제공됩니다. 개발 또는 스테이징 환경을 대상으로 하려면 이 인스턴스에서만 {0}을(를) 개발 URL로 설정하세요.",
    "The Server URL assigned to your organization. For example, {0}.":
      "조직에 할당된 서버 URL입니다. 예: {0}.",
    "The SSH connection requires the {0}, {1} and {2} are provided.":
      "SSH 연결을 사용하려면 {0}, {1}, {2}을(를) 제공해야 합니다.",
    "The vsys is located in the Firewall URL; e.g, {0}":
      "vsys는 방화벽 URL에 있습니다. 예: {0}",
    "There are 3 different authentication {0}":
      "인증 {0}이(가) 3가지 있습니다",
    "There are 3 different authentication {0}.":
      "인증 {0}이(가) 3가지 있습니다.",
    "There are two different authentication methods for {0}:":
      "{0}에는 두 가지 인증 방법이 있습니다:",
    "This API enables you to use the Google Admin API. In order to enable the API, you need to create an account service private key JSON file and copy its content as the value for the {0} parameter field.":
      "이 API를 사용하면 Google Admin API를 사용할 수 있습니다. API를 활성화하려면 계정 서비스 개인 키 JSON 파일을 생성하고 그 내용을 {0} 매개변수 필드의 값으로 복사해야 합니다.",
    "This integration connects to the Zscaler Internet Access (ZIA) API using {0} authentication via ZIdentity, replacing the legacy session-based authentication.":
      "이 통합은 ZIdentity를 통한 {0} 인증을 사용하여 Zscaler Internet Access(ZIA) API에 연결하며, 기존 세션 기반 인증을 대체합니다.",
    "This integration is deprecated. Use the Microsoft Graph Security integration for supported replacement functionality. For a list of command replacements, see the {0}.":
      "이 통합은 사용 중단되었습니다. 지원되는 대체 기능은 Microsoft Graph Security 통합을 사용하세요. 명령 대체 목록은 {0}을(를) 참조하세요.",
    "This integration uses the {0} mechanism to periodically collect assets and vulnerabilities from Rapid7 InsightVM.":
      "이 통합은 {0} 메커니즘을 사용하여 Rapid7 InsightVM에서 자산과 취약점을 주기적으로 수집합니다.",
    "This is a long-running integration. For more information about long-running integrations, check out the {0} article.":
      "이는 장기 실행 통합입니다. 장기 실행 통합에 대한 자세한 내용은 {0} 문서를 참조하세요.",
    "To access the {0} by instance name, set up the {1} and {2} values in the {3} page ({4} > {5} > {6} > {7}).":
      "인스턴스 이름으로 {0}에 액세스하려면 {1} 및 {2} 값을 {3} 페이지({4} > {5} > {6} > {7})에서 설정하세요.",
    "To add mirroring in both environments, in the Incident Mirroring Direction field, select {0}. Outgoing mirroring is recommended for Cortex version 6.2 and above. If you enable mirroring, you need to add the timezone of the Splunk server (in minutes). For example, if using GMT and the timezone is GMT {1}180. For UTC, set the timezone to 0. Set this only if the Splunk server is different than the Cortex server. This is relevant only for fetching notable events.":
      "두 환경 모두에서 미러링을 추가하려면 인시던트 미러링 방향 필드에서 {0}을(를) 선택하세요. 송신 미러링은 Cortex 버전 6.2 이상에서 권장됩니다. 미러링을 활성화하는 경우 Splunk 서버의 시간대를 분 단위로 추가해야 합니다. 예를 들어 GMT를 사용하고 시간대가 GMT {1}180인 경우입니다. UTC의 경우 시간대를 0으로 설정하세요. Splunk 서버가 Cortex 서버와 다른 경우에만 설정하세요. 이는 notable 이벤트를 가져오는 경우에만 해당됩니다.",
    "To allow access to Microsoft Defender Advanced Threat Protection, an admin has to approve our app using an admin consent flow, by clicking on the following {0}. After authorizing the Cortex app, you will get an {1}, {2}, and {3}, which you then need to insert in the integration instance settings corresponding fields.":
      "Microsoft Defender Advanced Threat Protection에 대한 액세스를 허용하려면 관리자가 다음 {0}을(를) 클릭하여 관리자 동의 흐름으로 앱을 승인해야 합니다. Cortex 앱을 승인하면 {1}, {2}, {3}을(를) 받게 되며, 이를 통합 인스턴스 설정의 해당 필드에 입력해야 합니다.",
    "To configure this integration, you need an {0} and a {1} from the iZOOlogic platform.":
      "이 통합을 구성하려면 iZOOlogic 플랫폼의 {0}와(과) {1}이(가) 필요합니다.",
    "To connect the McAfee TIE using the DXL TIE client, you need to create certificates and configure DXL. For more information, see the {0}. After you complete this configuration, you will have the following files.":
      "DXL TIE 클라이언트를 사용하여 McAfee TIE에 연결하려면 인증서를 생성하고 DXL을 구성해야 합니다. 자세한 내용은 {0}을(를) 참조하세요. 이 구성을 완료하면 다음 파일이 생성됩니다.",
    "To create, modify, and delete Safe Links policies, you need to be a member of the {0} or {1} role groups.":
      "Safe Links 정책을 생성, 수정, 삭제하려면 {0} 또는 {1} 역할 그룹의 구성원이어야 합니다.",
    "To enable the Shodan integration you need to have an API key, which you can get for free by creating a Shodan account {0} Once you have an API key you insert it into the {1} field and click the {2} button.":
      "Shodan 통합을 활성화하려면 API 키가 필요하며, Shodan 계정을 생성하면 무료로 받을 수 있습니다({0}). API 키를 받으면 {1} 필드에 입력하고 {2} 버튼을 클릭합니다.",
    "To execute the command either provide the value of the Admin email in the integration configuration or provide the value of the {0} argument for the command or provide the admin role to the created service account’s email by performing the following steps:":
      "명령을 실행하려면 통합 구성에서 관리자 이메일 값을 제공하거나, 명령의 {0} 인수 값을 제공하거나, 다음 단계를 수행하여 생성된 서비스 계정의 이메일에 관리자 역할을 부여하세요:",
    "To generate an API key, login to Netcraft and go to the {0}":
      "API 키를 생성하려면 Netcraft에 로그인하여 {0}(으)로 이동하세요",
    "To generate tokens, browse to {0} and follow the instructions":
      "토큰을 생성하려면 {0}(으)로 이동하여 안내를 따르세요",
    "To get an API client ID and secret, contact {0}.":
      "API 클라이언트 ID와 시크릿을 받으려면 {0}에 문의하세요.",
    "To get the {0}, {1}, {2} and {3} parameters, in the Azure Portal, go to {4} and click the {5} tab.":
      "{0}, {1}, {2} 및 {3} 매개변수를 가져오려면 Azure Portal에서 {4}(으)로 이동하여 {5} 탭을 클릭하세요.",
    "To get your API key, here is a {0} to Tavily UI.":
      "API 키를 받으려면 Tavily UI로 연결되는 {0}을(를) 사용하세요.",
    "To manage permissions in the Microsoft Defender XDR portal, go to {0} or https://security.microsoft.com/securitypermissions. You need to be a global administrator or a member of the Organization Management role group in the Microsoft Defender XDR portal. Specifically, the Role Management role allows users to view, create, and modify role groups in the Microsoft Defender XDR portal, and by default, that role is assigned only to the Organization Management role group.":
      "Microsoft Defender XDR 포털에서 권한을 관리하려면 {0} 또는 https://security.microsoft.com/securitypermissions (으)로 이동하세요. Microsoft Defender XDR 포털에서 글로벌 관리자이거나 Organization Management 역할 그룹의 구성원이어야 합니다. 구체적으로, Role Management 역할은 사용자가 Microsoft Defender XDR 포털에서 역할 그룹을 보고, 생성하고, 수정할 수 있도록 하며, 기본적으로 이 역할은 Organization Management 역할 그룹에만 할당됩니다.",
    "To mirror offenses with events, enable the {0} parameter and set {1} to {2}.":
      "이벤트가 포함된 오펜스를 미러링하려면 {0} 매개변수를 활성화하고 {1}을(를) {2}(으)로 설정하세요.",
    "To obtain an API Key, run the following REST command and copy the key: {0}":
      "API 키를 얻으려면 다음 REST 명령을 실행하고 키를 복사하세요: {0}",
    "To reset fetch incidents, run {0} - this will reset the fetch to its initial state (will try to fetch first available offense).":
      "인시던트 가져오기를 재설정하려면 {0}을(를) 실행하세요. 이렇게 하면 가져오기가 초기 상태로 재설정됩니다(사용 가능한 첫 번째 오펜스를 가져오려고 시도합니다).",
    "To reset fetch incidents, run the {0} command - This will reset the fetch to its initial state. (Will try to fetch the first available offense).":
      "인시던트 가져오기를 재설정하려면 {0} 명령을 실행하세요. 이렇게 하면 가져오기가 초기 상태로 재설정됩니다. (사용 가능한 첫 번째 오펜스를 가져오려고 시도합니다.)",
    "To retrieve the Egress API key from Panorama - Click “Generate API Key” under {0}":
      "Panorama에서 Egress API 키를 가져오려면 {0} 아래의 “Generate API Key”를 클릭하세요",
    "To start fetching incidents, enable the parameter {0} - this will start a long running process that’ll fetch incidents periodically. Depending on the system load, {1}.":
      "인시던트 가져오기를 시작하려면 {0} 매개변수를 활성화하세요. 그러면 인시던트를 주기적으로 가져오는 장기 실행 프로세스가 시작됩니다. 시스템 부하에 따라 {1}.",
    "To use {0}:":
      "{0}을(를) 사용하려면:",
    "To use a {0} , you need to add a {1}.":
      "{0}을(를) 사용하려면 {1}을(를) 추가해야 합니다.",
    "To use a self-configured Azure application, you need to add a new Azure App Registration in the Azure Portal. For more details, follow {0}.":
      "자체 구성한 Azure 애플리케이션을 사용하려면 Azure Portal에서 새 Azure App Registration을 추가해야 합니다. 자세한 내용은 {0}을(를) 따르세요.",
    "To use a self-configured Azure application, you need to add a new Azure App Registration in the Azure Portal. To add an app registration, refer to steps 1-6 under the {0} section of the integration documentation {1}.":
      "자체 구성한 Azure 애플리케이션을 사용하려면 Azure Portal에서 새 Azure App Registration을 추가해야 합니다. 앱 등록을 추가하려면 통합 설명서의 {0} 섹션에 있는 1~6단계를 참조하세요({1}).",
    "To use ServiceNow in XSOAR, ensure your user account has the {0}, {1} roles or any other role required to permit working with the {2} table. These roles are required in order to make API calls. However, they may not suffice for viewing records in some tables.":
      "XSOAR에서 ServiceNow를 사용하려면 사용자 계정에 {0}, {1} 역할 또는 {2} 테이블 작업을 허용하는 데 필요한 다른 역할이 있는지 확인하세요. API 호출을 하려면 이러한 역할이 필요합니다. 하지만 일부 테이블의 레코드를 보기에는 충분하지 않을 수 있습니다.",
    "To use the {0} command, ensure the {1} has one of the following roles assigned:":
      "{0} 명령을 사용하려면 {1}에 다음 역할 중 하나가 할당되어 있는지 확인하세요:",
    "To use the {0} command, you need to authorize the client (Cortex) to run the command. Follow the {1} to do so. In step 4, instead of selecting {2}, select {3}.":
      "{0} 명령을 사용하려면 클라이언트(Cortex)가 명령을 실행하도록 승인해야 합니다. 이를 위해 {1}을(를) 따르세요. 4단계에서는 {2}을(를) 선택하는 대신 {3}을(를) 선택하세요.",
    "To use the {0} command, you need to authorize the client (Demisto) to run the command. Follow the instructions in the {1}. In step #4, instead of selecting {2}, select {3}.":
      "{0} 명령을 사용하려면 클라이언트(Demisto)가 명령을 실행하도록 승인해야 합니다. {1}의 안내를 따르세요. 4단계에서는 {2}을(를) 선택하는 대신 {3}을(를) 선택하세요.",
    "To use the full capabilities of this integration, make sure your user has the following permissions: {0}, {1}, {2}.":
      "이 통합의 모든 기능을 사용하려면 사용자에게 다음 권한이 있는지 확인하세요: {0}, {1}, {2}.",
    "To use the integration commands, ensure the {0} has one of the following roles assigned:":
      "통합 명령을 사용하려면 {0}에 다음 역할 중 하나가 할당되어 있는지 확인하세요:",
    "To use the integration with an API token, you first need to change the {0} field to {1}. Following this step, you can now enter the API Token into the {2} field - this value will be used as an API key.":
      "API 토큰으로 통합을 사용하려면 먼저 {0} 필드를 {1}(으)로 변경해야 합니다. 이후 {2} 필드에 API 토큰을 입력할 수 있으며, 이 값은 API 키로 사용됩니다.",
    "To view and run Office 365 unified audit log searches, admins or users must be assigned the {0} or {1} role in {2}.":
      "Office 365 통합 감사 로그 검색을 보고 실행하려면 관리자 또는 사용자에게 {0} 또는 {1} 역할이 {2}에서 할당되어 있어야 합니다.",
    "To view logs concerning the creation of the indicator list and its current status add the {0} suffix to the list URL.":
      "지표 목록의 생성 및 현재 상태에 관한 로그를 보려면 목록 URL에 {0} 접미사를 추가하세요.",
    "Under {0}, click {1}.":
      "{0}에서 {1}을(를) 클릭합니다.",
    "Under {0}, select the necessary permissions. Choose minimal permissions.":
      "{0}에서 필요한 권한을 선택하세요. 최소한의 권한을 선택하세요.",
    "Under {0}, select which repositories the token can access. Choose minimal access.":
      "{0}에서 토큰이 액세스할 수 있는 리포지토리를 선택하세요. 최소한의 액세스를 선택하세요.",
    "Under the {0} tab, grant the required scopes mentioned above for the app.":
      "{0} 탭에서 위에 언급된 앱에 필요한 스코프를 부여하세요.",
    "Under the newly added {0} section, click {1}.":
      "새로 추가된 {0} 섹션에서 {1}을(를) 클릭하세요.",
    "US Government Department of Defence (DoD) Endpoint: {0}":
      "미국 정부 국방부(DoD) 엔드포인트: {0}",
    "US Government GCC-High Endpoint: {0}":
      "미국 정부 GCC-High 엔드포인트: {0}",
    "Use {0} to check acceptance, {1} to review it, and {2} to accept.":
      "수락 여부를 확인하려면 {0}, 검토하려면 {1}, 수락하려면 {2}을(를) 사용하세요.",
    "Use Cortex’s credentials store with a {0} and {1} as the {2} and {3} in case you are using Enterprise DLP through a SASE platform.":
      "SASE 플랫폼을 통해 Enterprise DLP를 사용하는 경우 Cortex의 자격 증명 저장소에서 {0}와(과) {1}을(를) 각각 {2}와(과) {3}(으)로 사용하세요.",
    "Use the {0} integration to enrich indicators with threat intelligence context from Palo Alto Networks Unit 42’s research team.":
      "{0} 통합을 사용하여 Palo Alto Networks Unit 42 연구팀의 위협 인텔리전스 컨텍스트로 지표를 보강하세요.",
    "Use the {0} integration to fetch indicators and threat objects from Palo Alto Networks Unit 42’s comprehensive threat feed. This integration provides continuous access to high-quality indicators of compromise (IOCs) and contextual threat intelligence.":
      "{0} 통합을 사용하여 Palo Alto Networks Unit 42의 포괄적인 위협 피드에서 지표와 위협 객체를 가져옵니다. 이 통합은 고품질 침해 지표(IOC)와 상황별 위협 인텔리전스에 지속적으로 액세스할 수 있도록 합니다.",
    "Use the {0} parameter to control what this integration ingests. You can select {1}, {2}, or both:":
      "이 통합이 수집하는 대상을 제어하려면 {0} 매개변수를 사용하세요. {1}, {2} 또는 둘 다 선택할 수 있습니다:",
    "Use the {0} parameter to filter cases by the required severity and the {1} parameter to filter cases by the required status.":
      "필요한 심각도로 케이스를 필터링하려면 {0} 매개변수를, 필요한 상태로 케이스를 필터링하려면 {1} 매개변수를 사용하세요.",
    "Use the {0} to link Microsoft Defender XDR with Cortex.":
      "{0}을(를) 사용하여 Microsoft Defender XDR을 Cortex와 연결하세요.",
    "Use the {0} to link Microsoft Graph Services with Cortex.":
      "{0}을(를) 사용하여 Microsoft Graph Services를 Cortex와 연결하세요.",
    "Use the appropriate server URL in the {0} parameter based on your region or cloud environment:":
      "리전 또는 클라우드 환경에 따라 {0} 매개변수에 적절한 서버 URL을 사용하세요:",
    "Use this {0} to log in to the Joe Security platform.":
      "이 {0}을(를) 사용하여 Joe Security 플랫폼에 로그인하세요.",
    "Using a national cloud endpoint is supported by setting the {0} parameter to one of the following options:":
      "{0} 매개변수를 다음 옵션 중 하나로 설정하면 국가별 클라우드 엔드포인트를 사용할 수 있습니다:",
    "Visit {0} for a list of all possible fields to be used in the filter.":
      "필터에서 사용할 수 있는 모든 필드 목록은 {0}을(를) 참조하세요.",
    "Visit {0} for explanation about filter syntax.":
      "필터 구문에 대한 설명은 {0}을(를) 참조하세요.",
    "Visit the {0} for a full list of available API versions according to the QRadar version.":
      "QRadar 버전별로 사용 가능한 API 버전의 전체 목록은 {0}을(를) 참조하세요.",
    "When encountering connectivity or authorization errors, it is necessary to include the IP addresses corresponding to the relevant region in the CrowdStrike Falcon allow list. These IP addresses can be found in the {0} by searching for {1}.":
      "연결 또는 권한 부여 오류가 발생하면 해당 리전에 해당하는 IP 주소를 CrowdStrike Falcon 허용 목록에 포함해야 합니다. 이 IP 주소는 {0}에서 {1}을(를) 검색하면 찾을 수 있습니다.",
    "When encountering HTTP 429 response error code from CrowdStrike Falcon, use an engine as explained in this {0}.":
      "CrowdStrike Falcon에서 HTTP 429 응답 오류 코드가 발생하면 이 {0}에 설명된 대로 엔진을 사용하세요.",
    "When mirroring offenses with events it is advised to set the {0} to a small value.":
      "이벤트가 포함된 오펜스를 미러링할 때는 {0}을(를) 작은 값으로 설정하는 것이 좋습니다.",
    "When switching from the {0} to the {1} do as follow: Save the instance, run the {2} command and follow the instructions mentioned there. Once done, test the validity of your instance by running the {3} command. When switching from the {4} to the {5}, test the validity of the instance by clicking the ‘Test’ button.":
      "{0}에서 {1}(으)로 전환하려면 다음과 같이 합니다. 인스턴스를 저장하고 {2} 명령을 실행한 다음 해당 안내를 따르세요. 완료되면 {3} 명령을 실행하여 인스턴스의 유효성을 테스트하세요. {4}에서 {5}(으)로 전환하는 경우 ‘테스트’ 버튼을 클릭하여 인스턴스의 유효성을 테스트하세요.",
    "When using {0}, the connection should be tested using the {1} command.":
      "{0}을(를) 사용할 때는 {1} 명령을 사용하여 연결을 테스트해야 합니다.",
    "When using the {0} for this integration, you should log in as an administrator or a user with administrative privileges ({1} or {2}) after running the {3} command and the login window appears. For more information, see {4}.":
      "이 통합에서 {0}을(를) 사용하는 경우, 관리자 또는 관리자 권한이 있는 사용자({1} 또는 {2})로 {3} 명령을 실행하여 로그인 창이 나타난 후 로그인해야 합니다. 자세한 내용은 {4}을(를) 참조하세요.",
    "When using the {0}, make sure the user you authenticate with has the relevant roles in Azure AD in order to execute the operation. To verify that authentication was configured correctly, run the {1} command.":
      "{0}을(를) 사용할 때는 인증에 사용하는 사용자에게 작업을 실행하기 위한 관련 역할이 Azure AD에 있는지 확인하세요. 인증이 올바르게 구성되었는지 확인하려면 {1} 명령을 실행하세요.",
    "Whether to output {0} formats as textual web pages.":
      "{0} 형식을 텍스트 웹 페이지로 출력할지 여부입니다.",
    "You can apply additional (optional) filters for the fetch-incident query using the {0} integration parameter. For more information on how to use the filter syntax, see the {1} and {2}.":
      "{0} 통합 매개변수를 사용하여 인시던트 가져오기 쿼리에 추가(선택 사항) 필터를 적용할 수 있습니다. 필터 구문 사용 방법에 대한 자세한 내용은 {1} 및 {2}을(를) 참조하세요.",
    "You can apply additional (optional) filters for the fetch-incident query using the {0} integration parameter. For more information on how to use the filter syntax:":
      "{0} 통합 매개변수를 사용하여 인시던트 가져오기 쿼리에 추가(선택 사항) 필터를 적용할 수 있습니다. 필터 구문 사용 방법에 대한 자세한 내용은 다음을 참조하세요:",
    "You can narrow what is fetched using the {0} and {1} parameters. These accept an OData {2} expression, for example {3}. For the supported syntax and operators, see {4}.":
      "{0} 및 {1} 매개변수를 사용하여 가져오는 대상을 좁힐 수 있습니다. 이 매개변수는 OData {2} 표현식을 허용하며, 예를 들면 {3}입니다. 지원되는 구문과 연산자는 {4}을(를) 참조하세요.",
    "You can use an existing Terraform user or team token, or create a new one (organization tokens are not supported). Ensure the user or team has {0} and {1} permissions for the HCP Terraform organization and workspaces to integrate.":
      "기존 Terraform 사용자 또는 팀 토큰을 사용하거나 새로 만들 수 있습니다(조직 토큰은 지원되지 않습니다). 통합할 HCP Terraform 조직 및 워크스페이스에 대해 사용자 또는 팀에 {0} 및 {1} 권한이 있는지 확인하세요.",
    "You can use an existing Terraform user or team token, or create a new one (organization tokens are not supported). Ensure the user or team has {0} and {1} permissions for the Terraform Enterprise organization and workspaces to integrate.":
      "기존 Terraform 사용자 또는 팀 토큰을 사용하거나 새로 만들 수 있습니다(조직 토큰은 지원되지 않습니다). 통합할 Terraform Enterprise 조직 및 워크스페이스에 대해 사용자 또는 팀에 {0} 및 {1} 권한이 있는지 확인하세요.",
    "You find more information about SIGNL4 at {0}.":
      "SIGNL4에 대한 자세한 내용은 {0}에서 확인할 수 있습니다.",
    "You must have the {0} configured in the ZIA Admin Portal.":
      "ZIA Admin Portal에서 {0}을(를) 구성해야 합니다.",

    // --- Batch: Missed items reported by user (tooltips and standalone Deprecated.) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    "This value will only be used when no arguments were given to the ad-get-user command.":
      "이 값은 ad-get-user 명령에 인수가 지정되지 않은 경우에만 사용됩니다.",
    "if no offenses are found within the range of first fetch, will be set to fetch the earliest offense.":
      "최초 가져오기 범위 내에서 오펜스가 발견되지 않으면 가장 오래된 오펜스를 가져오도록 설정됩니다.",
    "Source of WildFire API Key - other = NGFW, WildFire API - pcc = Prisma Cloud Compute - prismaaccessapi = Prisma Access - xsoartim = XSOAR TIM API Key":
      "WildFire API 키의 출처 - other = NGFW, WildFire API - pcc = Prisma Cloud Compute - prismaaccessapi = Prisma Access - xsoartim = XSOAR TIM API 키",
    "Deprecated.":
      "사용 중단되었습니다.",

    // --- Batch: Login page strings (08:49 export) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    "By signing in, you agree to our Terms and acknowledge our Privacy Statement.":
      "로그인하면 이용 약관에 동의하고 개인정보 처리방침을 확인한 것으로 간주됩니다.",
    "Sign-in with CSP":
      "CSP로 로그인",
    "Sign-in with SSO":
      "SSO로 로그인",
    "Welcome to Cortex":
      "Cortex에 오신 것을 환영합니다",
    "You’re backed by the world’s most trusted security platform.":
      "세계에서 가장 신뢰받는 보안 플랫폼이 여러분을 지원합니다.",

    // --- Batch: Slack access token sentence (single and two-sentence block variants) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    "In order to use this integration, you need to enter your Slack access token in the {0} integration instance parameter.":
      "이 통합을 사용하려면 Slack 액세스 토큰을 {0} 통합 인스턴스 매개변수에 입력해야 합니다.",
    "In order to use this integration, you need to enter your Slack access token in the {0} integration instance parameter. The simplest way to acquire this token is for an Org Owner to create a new Slack app, add the admin OAuth scope, install the app, and use the generated token.":
      "이 통합을 사용하려면 Slack 액세스 토큰을 {0} 통합 인스턴스 매개변수에 입력해야 합니다. 이 토큰을 얻는 가장 간단한 방법은 Org Owner가 새 Slack 앱을 만들고 admin OAuth 범위를 추가한 다음 앱을 설치하고 생성된 토큰을 사용하는 것입니다.",
    "Set the":
      "설정:",
    "Cisco Umbrella Investigate enables you to research domains, IPs, and URLs observed by the Umbrella resolvers.":
      "Cisco Umbrella Investigate를 사용하면 Umbrella 리졸버에서 관찰된 도메인, IP, URL을 조사할 수 있습니다.",
    "command in the War Room and follow the instruction.":
      "명령을 War Room에서 실행하고 안내를 따릅니다.",
    "command to test the connection and the authorization process.":
      "명령으로 연결 및 인증 프로세스를 테스트합니다.",
    "Default Workspace ID (the UUID of the workspace, e.g. 123e4567-e89b-12d3-a456-426614174000)":
      "기본 워크스페이스 ID(워크스페이스의 UUID, 예: 123e4567-e89b-12d3-a456-426614174000)",
    "Default Workspace Name":
      "기본 워크스페이스 이름",
    "Deprecated. Use Cisco Secure Malware Analytics (Threat Grid) v2 instead.":
      "사용 중단되었습니다. 대신 Cisco Secure Malware Analytics (Threat Grid) v2를 사용하세요.",
    "Enter your Client ID in the":
      "클라이언트 ID를 다음에 입력합니다:",
    "Enter your redirect URI in the":
      "리디렉션 URI를 다음에 입력합니다:",
    "Follow these steps for client-credentials configuration.":
      "클라이언트 자격 증명 구성은 다음 단계를 따릅니다.",
    "For more details about the authentication used in this integration, see":
      "이 통합에서 사용되는 인증에 대한 자세한 내용은 다음을 참조하세요:",
    "Full documentation for this integration is available in the":
      "이 통합의 전체 문서는 다음에서 확인할 수 있습니다:",
    "Get the Additional Instance Parameters":
      "추가 인스턴스 매개변수 가져오기",
    "IAM integration for Clarizen. Handles user account auto-provisioning to Clarizen.":
      "Clarizen용 IAM 통합입니다. Clarizen에 대한 사용자 계정 자동 프로비저닝을 처리합니다.",
    "ID / Client ID":
      "ID / 클라이언트 ID",
    "Key / Client Secret":
      "키 / 클라이언트 시크릿",
    "Token / Tenant ID":
      "토큰 / 테넌트 ID",
    "In the instance configuration, select the":
      "인스턴스 구성에서 다음을 선택합니다:",
    "In the self-deployed mode, you can authenticate by using one of the following flows:":
      "자체 배포 모드에서는 다음 흐름 중 하나를 사용하여 인증할 수 있습니다:",
    "Locking mechanism that prevents concurrent execution of different tasks":
      "서로 다른 작업의 동시 실행을 방지하는 잠금 메커니즘",
    "Microsoft Integrations - Authentication":
      "Microsoft 통합 - 인증",
    "page of the app.":
      "페이지(앱 내)입니다.",
    "Redirect URI":
      "리디렉션 URI",
    "reference docs":
      "참조 문서",
    "Save the integration settings.":
      "통합 설정을 저장합니다.",
    "Self-Deployed Application Authentication guide":
      "자체 배포 애플리케이션 인증 가이드",
    "Server URL (e.g., https://management.azure.com)":
      "서버 URL(예: https://management.azure.com)",
    "Subscription ID":
      "구독 ID",
    "The Certificate Thumbprint is used for certificate authentication as it appears on the":
      "인증서 지문은 인증서 인증에 사용되며 다음에 표시된 값을 사용합니다:",
    "The private key of the registered certificate, used for certificate authentication.":
      "등록된 인증서의 개인 키로, 인증서 인증에 사용됩니다.",
    "Used for certificate authentication. The private key of the registered certificate.":
      "인증서 인증에 사용됩니다. 등록된 인증서의 개인 키입니다.",
    "There are two authentication methods available:":
      "사용할 수 있는 인증 방법은 두 가지입니다:",
    "to configure and enable authentication.":
      "인증을 구성하고 사용하도록 설정합니다.",
    "To use a self-configured Azure application, you need to add a new Azure App Registration in the Azure Portal. To add the registration, go to the":
      "직접 구성한 Azure 애플리케이션을 사용하려면 Azure 포털에서 새 Azure 앱 등록을 추가해야 합니다. 등록을 추가하려면 다음으로 이동합니다:",
    "Use a self-deployed Azure application - Authorization Code flow":
      "자체 배포한 Azure 애플리케이션 사용 - 인증 코드 흐름",
    "Use a self-deployed Azure application - Client Credentials Authorization Flow":
      "자체 배포한 Azure 애플리케이션 사용 - 클라이언트 자격 증명 인증 흐름",
    "Use a self-deployed Azure application - Client Credentials Flow":
      "자체 배포한 Azure 애플리케이션 사용 - 클라이언트 자격 증명 흐름",
    "Use Core REST APIs.":
      "Core REST API를 사용합니다.",
    "Use Gov Account Settings":
      "정부 계정 설정 사용",
    "Use the Code42 integration to identify potential data exfiltration from insider threats while speeding investigation and response by providing fast access to file events and metadata across physical and cloud environments.":
      "Code42 통합을 사용하여 내부 위협으로 인한 잠재적인 데이터 유출을 식별하고, 물리 환경과 클라우드 환경 전반의 파일 이벤트 및 메타데이터에 빠르게 액세스하여 조사와 대응 속도를 높입니다.",
    "Workspace ID":
      "워크스페이스 ID",
    "Workspace Name":
      "워크스페이스 이름",
    "Workspace Settings":
      "워크스페이스 설정",

    // --- Batch: strings from the Collector export #3 (Azure Key Vault / Azure Compute / Azure Risky Users docs, Azure Event Hub & Azure DevOps wizards) ---
    // Fragments such as "and", "or", "The", "Set", "In the", "Run the", "Go to the", "Select the" are intentionally NOT registered.
    ": In Azure, go to Organization Settings → Security → Policies → toggle \"Third-party application access via OAuth\" ON. (":
      ": Azure에서 Organization Settings → Security → Policies로 이동하여 \"Third-party application access via OAuth\"를 켭니다. (",
    "(Client ID)":
      "(클라이언트 ID)",
    "(Client Secret (for Client Credentials mode))":
      "(클라이언트 시크릿(클라이언트 자격 증명 모드용))",
    "Add consumer group":
      "소비자 그룹 추가",
    "After authorizing the Demisto app, you will receive an ID, Token, and Key, which needs to be added to the integration instance configuration’s corresponding fields. After giving consent, the application must have a role assigned, so it can access the relevant resources per subscription.":
      "Demisto 앱을 승인하면 ID, 토큰, 키가 제공되며, 이를 통합 인스턴스 구성의 해당 필드에 추가해야 합니다. 동의한 후에는 구독별로 관련 리소스에 액세스할 수 있도록 애플리케이션에 역할을 할당해야 합니다.",
    "After saving the client secret, the value of the client secret is displayed.":
      "클라이언트 시크릿을 저장하면 클라이언트 시크릿 값이 표시됩니다.",
    "After the Azure Key Vault integration instance is created, the credentials will be fetched":
      "Azure Key Vault 통합 인스턴스가 생성되면 자격 증명을 가져와",
    "to the Cortex credentials store in the following format:":
      "Cortex 자격 증명 저장소에 다음 형식으로 저장됩니다:",
    "At the end of the process you’ll see a message that you’ve logged in successfully.":
      "프로세스가 끝나면 로그인에 성공했다는 메시지가 표시됩니다.",
    "Authenticate with your personal Microsoft account. Simple setup via OAuth redirect.":
      "개인 Microsoft 계정으로 인증합니다. OAuth 리디렉션을 통한 간편한 설정입니다.",
    "Authentication Type":
      "인증 유형",
    "Authentication Type.":
      "인증 유형.",
    "Authentication Using the Client Credentials Flow (recommended)":
      "클라이언트 자격 증명 흐름을 사용한 인증(권장)",
    "Authentication Using the Device Flow":
      "디바이스 흐름을 사용한 인증",
    "Authorization":
      "인증",
    "Authorize":
      "승인",
    "Authorize Cortex for Azure Key Vault":
      "Azure Key Vault용 Cortex 승인",
    "Application ID":
      "애플리케이션 ID",
    "Azure app registration article":
      "Azure 앱 등록 문서",
    "Azure Cloud":
      "Azure 클라우드",
    "Azure DevOps auth with Entra ID Prerequisites:":
      "Entra ID를 사용한 Azure DevOps 인증 사전 요구 사항:",
    "Azure Key Vault - permission user_impersonation of type Delegated":
      "Azure Key Vault - Delegated 유형의 user_impersonation 권한",
    "Azure Managed Identities":
      "Azure 관리 ID",
    "Azure Managed Identities Authentication":
      "Azure 관리 ID 인증",
    "Azure Managed Identities client ID":
      "Azure 관리 ID 클라이언트 ID",
    "Azure Managed Identities Client ID":
      "Azure 관리 ID 클라이언트 ID",
    "Azure Portal":
      "Azure 포털",
    "Azure Service Management - permission user_impersonation of type Delegated":
      "Azure Service Management - Delegated 유형의 user_impersonation 권한",
    "Check Fetches credentials parameter.":
      "'자격 증명 가져오기' 매개변수를 선택합니다.",
    "Choose Authentication Method":
      "인증 방법 선택",
    "Client Secret (for Client Credentials mode)":
      "클라이언트 시크릿(클라이언트 자격 증명 모드용)",
    "command - a ‘Success’ message should be printed to the war-room.":
      "명령 - War Room에 'Success' 메시지가 출력되어야 합니다.",
    "Configure Account":
      "계정 구성",
    "Configure Azure Risky Users on Cortex Navigate to":
      "Cortex에서 Azure Risky Users를 구성합니다. 다음으로 이동하세요:",
    "Confirm your Azure DevOps organization is connected to Microsoft Entra ID. (":
      "Azure DevOps 조직이 Microsoft Entra ID에 연결되어 있는지 확인합니다. (",
    "consumer group":
      "소비자 그룹",
    "Copy the Application ID and store it in the Client ID parameter.":
      "애플리케이션 ID를 복사하여 Client ID 매개변수에 저장합니다.",
    "Copy the Directory (tenant) ID and enter it in the Tenant ID parameter.":
      "Directory (tenant) ID를 복사하여 Tenant ID 매개변수에 입력합니다.",
    "Copy the Subscription ID and enter it in the Subscription ID parameter.":
      "Subscription ID를 복사하여 Subscription ID 매개변수에 입력합니다.",
    "Copy this value and enter it in the Client Secret parameter.":
      "이 값을 복사하여 Client Secret 매개변수에 입력합니다.",
    "Copy your resource group name and enter it in the Resource Group Name parameter.":
      "리소스 그룹 이름을 복사하여 Resource Group Name 매개변수에 입력합니다.",
    "Cortex App":
      "Cortex 앱",
    "Cortex Azure App":
      "Cortex Azure 앱",
    "Cortex XSOAR Application":
      "Cortex XSOAR 애플리케이션",
    "Credential Name: KEY_VAULT_NAME/SECRET_NAME":
      "자격 증명 이름: KEY_VAULT_NAME/SECRET_NAME",
    "Credentials Fetch Mode":
      "자격 증명 가져오기 모드",
    "Debug/Verbose logging is recommended only during troubleshooting. Logging can affect the performance of the integration. Recommended usage is to turn logging on during setup and troubleshooting, and then turn it off in production.":
      "디버그/상세 로깅은 문제 해결 중에만 사용하는 것이 좋습니다. 로깅은 통합의 성능에 영향을 줄 수 있습니다. 설정 및 문제 해결 중에는 로깅을 켜고 프로덕션 환경에서는 끄는 것이 좋습니다.",
    "Debug/Verbose logging is recommended only during troubleshooting. Logging can affect the performance of the integration. Recommended usage is to turn logging on during setup and troubleshooting, and then turn it off in production. These settings only affect the integration log. The server log is not affected.":
      "디버그/상세 로깅은 문제 해결 중에만 사용하는 것이 좋습니다. 로깅은 통합의 성능에 영향을 줄 수 있습니다. 설정 및 문제 해결 중에는 로깅을 켜고 프로덕션 환경에서는 끄는 것이 좋습니다. 이 설정은 통합 로그에만 영향을 줍니다. 서버 로그에는 영향을 주지 않습니다.",
    "These settings only affect the integration log. The server log is not affected.":
      "이 설정은 통합 로그에만 영향을 줍니다. 서버 로그에는 영향을 주지 않습니다.",
    "Default Resource Group Name":
      "기본 리소스 그룹 이름",
    "Default Subscription ID":
      "기본 구독 ID",
    "Depending on the authentication method that you use, the integration parameters might change.":
      "사용하는 인증 방법에 따라 통합 매개변수가 달라질 수 있습니다.",
    "device authorization grant flow":
      "디바이스 인증 부여 흐름",
    "Device authorization grant flow":
      "디바이스 인증 부여 흐름",
    "Device Code":
      "디바이스 코드",
    "Enable Azure Event Hub Log Collection":
      "Azure Event Hub 로그 수집 사용",
    "Enter account connection string":
      "계정 연결 문자열 입력",
    "Enter event hub connection string":
      "이벤트 허브 연결 문자열 입력",
    "Enter Product":
      "제품 입력",
    "Enter Vendor":
      "공급업체 입력",
    "Enter your Client Secret in the":
      "클라이언트 시크릿을 다음에 입력합니다:",
    "Enter your Client/Application ID in the":
      "클라이언트/애플리케이션 ID를 다음에 입력합니다:",
    "Enter your Tenant ID in the":
      "테넌트 ID를 다음에 입력합니다:",
    "field in the instance configuration.":
      "필드(인스턴스 구성)에 입력합니다.",
    "field in the instance settings.":
      "필드(인스턴스 설정)에 입력합니다.",
    "Entra ID — Choose Identity Type":
      "Entra ID — ID 유형 선택",
    "event hub connection string":
      "이벤트 허브 연결 문자열",
    "External Credentials Vault (on-demand)":
      "외부 자격 증명 볼트(온디맨드)",
    "Fetch credentials from Azure Key Vault":
      "Azure Key Vault에서 자격 증명 가져오기",
    "Fetches credentials":
      "자격 증명 가져오기",
    "Fill in the required parameters.":
      "필수 매개변수를 입력합니다.",
    "Fill Key Vault names to fetch secrets from.":
      "시크릿을 가져올 Key Vault 이름을 입력합니다.",
    "Fill secret names to fetch.":
      "가져올 시크릿 이름을 입력합니다.",
    "Follow one of these steps for authentication based on Azure Managed Identities:":
      "Azure 관리 ID 기반 인증을 위해 다음 단계 중 하나를 따릅니다:",
    "Follow the instructions that appear.":
      "표시되는 안내를 따릅니다.",
    "Follow these steps for a":
      "다음 단계를 따릅니다:",
    "Follow these steps for a self-deployed configuration:":
      "자체 배포 구성의 경우 다음 단계를 따릅니다:",
    "self-deployed configuration":
      "자체 배포 구성",
    "For information about Azure Managed Identities see":
      "Azure 관리 ID에 대한 자세한 내용은 다음을 참조하세요:",
    "For more information, see the integration documentation.":
      "자세한 내용은 통합 문서를 참조하세요.",
    "From App registrations in Azure AD, select your application.":
      "Azure AD의 App registrations에서 애플리케이션을 선택합니다.",
    "Get client ID and tenant ID values":
      "클라이언트 ID 및 테넌트 ID 값 가져오기",
    "Get client secret value":
      "클라이언트 시크릿 값 가져오기",
    "Get Subscription ID and the Resource Group values":
      "구독 ID 및 리소스 그룹 값 가져오기",
    "Host URL (e.g. https://management.azure.com)":
      "호스트 URL(예: https://management.azure.com)",
    "if your security policy does not allow secrets to be stored inside the Cortex credentials store. In this mode, the credentials picker in other integrations will list the configured secrets by name (KEY_VAULT_NAME/SECRET_NAME), but no secret values are pulled from Azure Key Vault. When a playbook or command actually executes an integration that uses one of those credentials, the secret value is fetched live from Azure Key Vault and is passed in memory only. Nothing is persisted in Cortex.":
      "보안 정책상 시크릿을 Cortex 자격 증명 저장소에 저장할 수 없는 경우에 사용합니다. 이 모드에서는 다른 통합의 자격 증명 선택기에 구성된 시크릿이 이름(KEY_VAULT_NAME/SECRET_NAME)으로 표시되지만 시크릿 값은 Azure Key Vault에서 가져오지 않습니다. 플레이북 또는 명령이 해당 자격 증명 중 하나를 사용하는 통합을 실제로 실행할 때 시크릿 값이 Azure Key Vault에서 실시간으로 가져와 메모리에서만 전달됩니다. Cortex에는 아무것도 유지되지 않습니다.",
    "In order to fetch credentials to the Cortex credentials store,you should follow the next steps:":
      "자격 증명을 Cortex 자격 증명 저장소로 가져오려면 다음 단계를 따르세요:",
    "In order to use the Cortex Azure application,":
      "Cortex Azure 애플리케이션을 사용하려면",
    "In the Azure portal, select Entra ID.":
      "Azure 포털에서 Entra ID를 선택합니다.",
    "In the Azure portal, select Resource groups.":
      "Azure 포털에서 Resource groups를 선택합니다.",
    "The default mode":
      "기본 모드",
    "keeps the existing behavior: The secret values are fetched and stored in the Cortex credentials store.":
      "는 기존 동작을 유지합니다. 시크릿 값을 가져와 Cortex 자격 증명 저장소에 저장합니다.",
    "Key Vault names - a comma separated list of Key Vaults to fetch secrets from.":
      "Key Vault 이름 - 시크릿을 가져올 Key Vault의 쉼표로 구분된 목록입니다.",
    "Learn how":
      "방법 알아보기",
    "link new tab icon":
      "새 탭 링크 아이콘",
    "Make sure the following permissions are granted for the app registration:":
      "앱 등록에 다음 권한이 부여되어 있는지 확인합니다:",
    "Make sure to provide the following permissions for the app to work with Azure Risky Users:":
      "앱이 Azure Risky Users와 함께 작동하도록 다음 권한을 부여해야 합니다:",
    "Manage policies":
      "정책 관리",
    "Managed Identities":
      "관리 ID",
    "Managed identities for Azure resources":
      "Azure 리소스용 관리 ID",
    "Microsoft article":
      "Microsoft 문서",
    "Microsoft Entra ID authentication":
      "Microsoft Entra ID 인증",
    "Microsoft integrations (Graph and Azure) in Cortex use Entra ID applications to authenticate with Microsoft APIs. These integrations use OAuth 2.0 and OpenID Connect standard-compliant authentication services, which use an Application to sign-in or delegate authentication. For more information, see the Microsoft identity platform overview.":
      "Cortex의 Microsoft 통합(Graph 및 Azure)은 Entra ID 애플리케이션을 사용하여 Microsoft API에 인증합니다. 이러한 통합은 OAuth 2.0 및 OpenID Connect 표준을 준수하는 인증 서비스를 사용하며, 애플리케이션을 통해 로그인하거나 인증을 위임합니다. 자세한 내용은 Microsoft identity platform 개요를 참조하세요.",
    "Note: This option is relevant only if the integration is running on Azure VM.":
      "참고: 이 옵션은 통합이 Azure VM에서 실행되는 경우에만 해당됩니다.",
    "Only necessary in case a Samples Feed is fetched.":
      "샘플 피드를 가져오는 경우에만 필요합니다.",
    "Password: SECRET_VALUE":
      "비밀번호: SECRET_VALUE",
    "Username: SECRET_NAME":
      "사용자 이름: SECRET_NAME",
    "Provide a description of the secret, and a duration. When done, select Add.":
      "시크릿에 대한 설명과 기간을 입력합니다. 완료되면 Add를 선택합니다.",
    "Relevant only for sample feeds. JSON styled AutoFocus query, an example can be found in the description (?) section. mandatory for Samples Feed.":
      "샘플 피드에만 해당됩니다. JSON 형식의 AutoFocus 쿼리이며, 예시는 설명(?) 섹션에서 확인할 수 있습니다. 샘플 피드에는 필수입니다.",
    "Required Permissions":
      "필수 권한",
    "Save the instance.":
      "인스턴스를 저장합니다.",
    "Search for AzureRiskyUsers.":
      "AzureRiskyUsers를 검색합니다.",
    "Secret names - a comma separated list of secrets to fetch.":
      "시크릿 이름 - 가져올 시크릿의 쉼표로 구분된 목록입니다.",
    "See documentation":
      "설명서 참조",
    "Select Certificates & secrets.":
      "Certificates & secrets를 선택합니다.",
    "Select Client secrets -> New client secret.":
      "Client secrets -> New client secret을 선택합니다.",
    "Select Repositories":
      "리포지토리 선택",
    "Select this checkbox if you are using a self-deployed Azure application.":
      "자체 배포한 Azure 애플리케이션을 사용하는 경우 이 확인란을 선택합니다.",
    "Select your resource group name.":
      "리소스 그룹 이름을 선택합니다.",
    "Select your User Assigned Managed Identity -> copy the Client ID -> paste it in the":
      "사용자 할당 관리 ID를 선택 -> 클라이언트 ID를 복사 -> 다음에 붙여 넣습니다:",
    "Self-Deployed App":
      "자체 배포 앱",
    "Self-Deployed Application":
      "자체 배포 애플리케이션",
    "Self-Deployed Authentication":
      "자체 배포 인증",
    "Self-Deployed Azure App":
      "자체 배포 Azure 앱",
    "Service Principal":
      "서비스 주체",
    "storage account connection string":
      "스토리지 계정 연결 문자열",
    "Store in Cortex":
      "Cortex에 저장",
    "Support for MSA users through Microsoft Entra OAuth is still in progress on Microsoft's side. (":
      "Microsoft Entra OAuth를 통한 MSA 사용자 지원은 Microsoft 측에서 아직 진행 중입니다. (",
    "Supports CSV values.":
      "CSV 값을 지원합니다.",
    "Tenant ID (for Client Credentials mode)":
      "테넌트 ID(클라이언트 자격 증명 모드용)",
    "The mode for fetching credentials. Set to \"External Credentials Vault (on-demand)\" if your security policy does not allow secrets to be stored inside the Cortex credentials store. In this mode, the credentials picker in other integrations lists the configured secrets by name (KEY_VAULT_NAME/SECRET_NAME), but no secret values are pulled from Azure Key Vault. When a playbook or command executes an integration that uses one of those credentials, the secret value is fetched live from Azure Key Vault and is passed in memory only.":
      "자격 증명을 가져오는 모드입니다. 보안 정책상 시크릿을 Cortex 자격 증명 저장소에 저장할 수 없는 경우 \"External Credentials Vault (on-demand)\"로 설정합니다. 이 모드에서는 다른 통합의 자격 증명 선택기에 구성된 시크릿이 이름(KEY_VAULT_NAME/SECRET_NAME)으로 표시되지만 시크릿 값은 Azure Key Vault에서 가져오지 않습니다. 플레이북 또는 명령이 해당 자격 증명 중 하나를 사용하는 통합을 실행할 때 시크릿 값이 Azure Key Vault에서 실시간으로 가져와 메모리에서만 전달됩니다.",
    "There are 2 application authentication methods available:":
      "사용할 수 있는 애플리케이션 인증 방법은 두 가지입니다:",
    "This parameter can be overridden by the resource_group argument in any command.":
      "이 매개변수는 모든 명령에서 resource_group 인수로 재정의할 수 있습니다.",
    "To allow us access to Azure Compute, an administrator has to approve the Demisto app using an admin consent flow, by clicking":
      "Azure Compute에 대한 액세스를 허용하려면 관리자가 관리자 동의 흐름을 사용하여 Demisto 앱을 승인해야 합니다. 다음을 클릭합니다:",
    "To use a self-configured Azure application, add a new Azure App Registration in the Azure Portal. To add the registration, see the":
      "직접 구성한 Azure 애플리케이션을 사용하려면 Azure 포털에서 새 Azure 앱 등록을 추가합니다. 등록을 추가하려면 다음을 참조하세요:",
    "To use a self-configured Azure application, you need to add a new Azure App Registration in the Azure Portal, with mobile and desktop flows enabled.":
      "직접 구성한 Azure 애플리케이션을 사용하려면 Azure 포털에서 모바일 및 데스크톱 흐름을 사용하도록 설정한 새 Azure 앱 등록을 추가해야 합니다.",
    "To use a self-configured Azure application, you need to add a new Azure App Registration in the Azure Portal. To add the registration, refer to the following":
      "직접 구성한 Azure 애플리케이션을 사용하려면 Azure 포털에서 새 Azure 앱 등록을 추가해야 합니다. 등록을 추가하려면 다음을 참조하세요:",
    "To use System Assigned Managed Identity":
      "시스템 할당 관리 ID를 사용하려면",
    "To use User Assigned Managed Identity":
      "사용자 할당 관리 ID를 사용하려면",
    "Token (received from the admin consent - see Detailed Instructions (?) section)":
      "토큰(관리자 동의에서 받음 - 자세한 지침(?) 섹션 참조)",
    "Use a self-deployed Azure Application":
      "자체 배포한 Azure 애플리케이션 사용",
    "Use an application identity (not tied to a person). Requires Entra ID admin to grant consent.":
      "애플리케이션 ID(개인에 연결되지 않음)를 사용합니다. Entra ID 관리자가 동의를 부여해야 합니다.",
    "Use Azure Managed Identities":
      "Azure 관리 ID 사용",
    "use the Client ID - (application_id) (":
      "Client ID - (application_id)를 사용합니다(",
    "User Authentication":
      "사용자 인증",
    "Worldwide":
      "전 세계",
  },

  patterns: [
    { re: /^(\d+)\s+Instances? Configured$/, tpl: "인스턴스 $1개 구성됨" },
    { re: /^(\d+\/\d+)\s+connected$/, tpl: "$1 연결됨" },
    { re: /^([\d,]+)\s+selected out of\s+([\d,]+)$/, tpl: "$2개 중 $1개 선택됨" },
    { re: /^(\d+)\s+Warnings,?$/, tpl: "경고 $1건," },
    { re: /^Found (\d+) deployed connectors\. For all clusters go to$/, tpl: "배포된 커넥터 $1개를 찾았습니다. 모든 클러스터를 보려면 다음으로 이동하세요:" },
    { re: /^(\d+)\s+Errors$/, tpl: "오류 $1건" },
    { re: /^(\d+)\s+result$/, tpl: "결과 $1개" },
    { re: /^\(\s*(\d+)\s+Mapped\s*\)$/, tpl: "( 매핑됨 $1개 )" },
    { re: /^Integration Author:\s*(.+)$/, tpl: "통합 작성자: $1" },
  ],

  skip: [],
};
