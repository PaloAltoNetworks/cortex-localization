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

const dictionaryKspm = {
  exact: {
    "BETA": "베타",
    "Node selector": "노드 선택기",
    "Type node": "노드 입력",
    "Add tag...": "태그 추가...",
    "Cases opened on your K8S environment": "K8S 환경에서 열린 케이스",
    "Cloud account": "클라우드 계정",
    "Cluster name": "클러스터 이름",
    "Clusters": "클러스터",
    "Clusters Protection Coverage": "클러스터 보호 적용 범위",
    "Clusters with detected malware in one or more of their resources": "하나 이상의 리소스에서 멀웨어가 탐지된 클러스터",
    "Clusters with the highest number of high-severity vulnerabilities ranked by CVSS score": "CVSS 점수로 순위를 매긴, 높은 심각도 취약점 수가 가장 많은 클러스터",
    "Deploy": "배포",
    "Fully Protected": "완전히 보호됨",
    "Kubernetes Assets Overview": "Kubernetes 자산 개요",
    "Kubernetes Issues and Cases": "Kubernetes 이슈 및 케이스",
    "Malware Detected": "멀웨어 탐지됨",
    "Max CVSS": "최대 CVSS",
    "Namespaces": "네임스페이스",
    "No malware detected in the last scan": "마지막 스캔에서 멀웨어가 탐지되지 않음",
    "Nodes": "노드",
    "Open Graph": "그래프 열기",
    "Private Encryption Key": "개인 암호화 키",
    "Real-time Protection": "실시간 보호",
    "Secrets detected in Clusters": "클러스터에서 탐지된 시크릿",
    "Select...": "선택...",
    "Top Clusters by vulnerabilities": "취약점 기준 상위 클러스터",
    "Unprotected": "보호되지 않음",
    "Unprotected clusters": "보호되지 않는 클러스터",
    "Vulnerabilities": "취약점",
    "Apply": "적용",
    "Monitors workloads in real time to detect and block malicious activity, instantly preventing attacks as they happen.":
      "워크로드를 실시간으로 모니터링하여 악성 활동을 탐지 및 차단하고 공격이 발생하는 즉시 방지합니다.",
    "Protect your Kubernetes estate with a lightweight posture management solution for continuous discovery, policy enforcement, and proactive scanning of vulnerabilities, secrets, malware, compliance, and misconfigurations.":
      "지속적인 검색, 정책 적용, 그리고 취약점, 시크릿, 멀웨어, 규정 준수, 잘못된 구성에 대한 사전 스캔을 제공하는 경량 보안 태세 관리 솔루션으로 Kubernetes 환경을 보호하세요.",
    "Edit Posture management": "보안 태세 관리 편집",
    "Enable failure policies to be configured and applied at runtime by the Kubernetes admission controller, ensuring API requests are blocked when the admission fails.":
      "Kubernetes 어드미션 컨트롤러가 런타임에 실패 정책을 구성하고 적용할 수 있도록 하여, 어드미션이 실패하면 API 요청이 차단되도록 합니다.",
    "Enforce policies for the Kubernetes admission controller to ensure compliant resources enter the cluster.":
      "Kubernetes 어드미션 컨트롤러에 대한 정책을 적용하여 규정을 준수하는 리소스만 클러스터에 들어오도록 합니다.",
    "Every": "매",
    "Fail": "실패",
    "Failure policy": "실패 정책",
    "Ignore": "무시",
    "Policy enforcement by the admission controller": "어드미션 컨트롤러에 의한 정책 적용",
    "Registry scanning (OpenShift only)": "레지스트리 스캔(OpenShift만 해당)",
    "Scan cadence": "스캔 주기",
    "Scan container registry images stored in the OpenShift Container Platform registry for vulnerabilities, malware and secrets":
      "OpenShift Container Platform 레지스트리에 저장된 컨테이너 레지스트리 이미지에서 취약점, 멀웨어 및 시크릿을 스캔합니다",

    // --- Kubernetes assets inventory / Resource Explorer ---
    "Dive deeper into your environment": "환경 자세히 살펴보기",
    "Select a cloud provider to enter your Kubernetes assets and their relationships, all the way down to workloads, images, and hosts.":
      "클라우드 공급자를 선택하면 워크로드, 이미지, 호스트에 이르기까지 Kubernetes 자산과 그 관계를 확인할 수 있습니다.",
    "Scan Method": "스캔 방법",
    "Connectivity Status": "연결 상태",
    "K8s Distribution": "K8s 배포판",
    "There’s nothing here, yet": "아직 여기에 아무것도 없습니다",
    "Posture management capability is not deployed yet, resulting in limited inventory visibility":
      "보안 태세 관리 기능이 아직 배포되지 않아 인벤토리 가시성이 제한됩니다",
    "K8s Connector Not Active": "K8s 커넥터 비활성",
    "The Kubernetes Connector is not active in this cluster. Please, verify if the connector is deployed and running.":
      "이 클러스터에서 Kubernetes 커넥터가 활성 상태가 아닙니다. 커넥터가 배포되어 실행 중인지 확인하세요.",
    "Last Communicated": "마지막 통신",
    "K8s Category": "K8s 범주",
    "Assets per Namespace": "네임스페이스별 자산",
    "Assets per K8S Category": "K8S 범주별 자산",
    "Resource Explorer": "리소스 탐색기",
    "Container Image Vulnerability Findings": "컨테이너 이미지 취약점 발견 사항",
    "Kubernetes Nodes Vulnerability Findings": "Kubernetes 노드 취약점 발견 사항",
    "Total Number of Vulnerability Findings": "전체 취약점 발견 사항 수",
    "Number of Scanned Images": "스캔된 이미지 수",
    "Top 3 Most Vulnerable Images": "가장 취약한 이미지 상위 3개",
    "No Data Available": "사용 가능한 데이터 없음",
    "Number of Scanned Nodes": "스캔된 노드 수",
    "Top 3 Most Vulnerable Nodes": "가장 취약한 노드 상위 3개",
    "Node Name": "노드 이름",
    "Node Type": "노드 유형",
    "Kubernetes clusters distribution": "Kubernetes 클러스터 분포",
    "Kubernetes version distribution": "Kubernetes 버전 분포",
    "Healthy": "정상",
    "Need update": "업데이트 필요",
    "Deploy connector": "커넥터 배포",

    // --- Lowercase column headers ---
    "clusters": "클러스터",
  },

  patterns: [
    { re: /^Secrets were found in (\d+)\s+Clusters$/, tpl: "클러스터 $1개에서 시크릿이 발견되었습니다" },
    { re: /^(\d[\d,]*)\s+Clusters$/, tpl: "클러스터 $1개" },
    // "3 Healthy" / "3 Need update" (connector-health count stat tiles)
    { re: /^(\d[\d,]*)\s+Healthy$/, tpl: "정상 $1개" },
    { re: /^(\d[\d,]*)\s+Need update$/, tpl: "업데이트 필요 $1개" },
  ],

  skip: [],
};
