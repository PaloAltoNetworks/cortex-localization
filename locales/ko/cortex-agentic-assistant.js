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

const dictionaryCortexAgenticAssistant = {
  exact: {
    "Explore Cortex Agentic Assistant": "Cortex Agentic Assistant 살펴보기",
    "Fully executed plans": "완전히 실행된 계획",
    "Incomplete plans": "완료되지 않은 계획",
    "No plans recorded": "기록된 계획 없음",
    "Plans": "계획",
    "User Prompts": "사용자 프롬프트",
    "Automation rules": "자동화 규칙",
    "Last 7D": "최근 7일",

    // --- Agent creation/edit wizard ---
    "Agent Name": "에이전트 이름",
    "Specify Agent Name": "에이전트 이름 입력",
    "Select color": "색상 선택",
    "Write a short explanation on what is the common context of the selected actions":
      "선택한 작업의 공통 맥락을 간단히 설명하세요",
    "Specific Instructions": "구체적인 지침",
    "More information": "추가 정보",
    "Type here...": "여기에 입력...",
    "Add the rules this agent must follow—tone, decision bounds, safety checks, and output format. Keep it less than 3k characters.":
      "이 에이전트가 따라야 할 규칙(어조, 판단 범위, 안전 검사, 출력 형식)을 추가하세요. 3,000자 미만으로 작성하세요.",
    "Who has access to Agent": "에이전트에 액세스할 수 있는 사용자",
    "Only me": "나만",
    "Public Agent": "공개 에이전트",
    "Conversation Starters": "대화 시작 문구",
    "up to 4 items": "최대 4개",
    "Add conversation starter": "대화 시작 문구 추가",
    "Create agent": "에이전트 생성",
    "Build a New Agent": "새 에이전트 구축",
    "Agent Details": "에이전트 세부 정보",
    "Access Control": "액세스 제어",
    // In the actual DOM, the two sentences above live in a single text node (separated by a
    // newline, white-space: pre), so — given that matching normalizes newlines to a single
    // space — they're registered as one combined key (registering them as two separate entries
    // would leave both as partial matches that never match).
    "Define which roles and actions the agent has access to. Selecting a role auto-selects its actions. Deselecting an action clears the role.":
      "에이전트가 액세스할 수 있는 역할과 작업을 정의합니다.\n역할을 선택하면 해당 작업이 자동으로 선택됩니다. 작업 선택을 해제하면 역할 선택도 해제됩니다.",
    "Selected Roles": "선택한 역할",
    "Selected Actions": "선택한 작업",
    "New Action": "새 작업",
    "What the AI agent is supposed to be or act as. Defines its identity and primary function. Example: \"SOC Tier 1 Analyst: as a Tier 1 analyst you are responsible for triage alerts and conclude if an alert is a true or false positive\" or \"Incident Response Analyst: as an incident response Analyst you are responsible for investigating and conduct forensics of relevant artifacts related to an incident and provide conclusions about the incident and TTP's used by the threat actor.\"":
      "AI 에이전트가 무엇이 되어야 하는지 또는 어떤 역할로 행동해야 하는지를 나타냅니다. 에이전트의 정체성과 주요 기능을 정의합니다. 예: \"SOC Tier 1 분석가: Tier 1 분석가로서 경고를 분류하고 경고가 참 양성인지 거짓 양성인지 판단할 책임이 있습니다\" 또는 \"인시던트 대응 분석가: 인시던트 대응 분석가로서 인시던트와 관련된 아티팩트를 조사하고 포렌식을 수행하며, 인시던트와 위협 행위자가 사용한 TTP에 대한 결론을 제공할 책임이 있습니다.\"",
    "The specific rules and behavioral guidelines that tell the agent how to operate and respond. Example: \"Follow the NIST framework, provide clear and concise recommendations. used critical thinking when conducting analysis\"":
      "에이전트가 어떻게 작동하고 응답해야 하는지 알려 주는 구체적인 규칙과 행동 지침입니다. 예: \"NIST 프레임워크를 따르고 명확하고 간결한 권장 사항을 제공합니다. 분석 시 비판적 사고를 활용합니다\"",
    "Output Structure": "출력 구조",
    "How the agent should format and organize its responses. Example: \"Json, Markdown, Array, enum\"":
      "에이전트가 응답의 형식을 지정하고 구성하는 방법입니다. 예: \"Json, Markdown, Array, enum\"",
    "Delete Agent": "에이전트 삭제",

    // --- Action registration wizard (Register Action) ---
    "Start chat": "채팅 시작",
    "Register action": "작업 등록",
    "Action Details": "작업 세부 정보",
    "Structuring your content as an Action lets the agent select and execute the intended item based on context, standardizing behavior and ensuring accuracy.":
      "콘텐츠를 작업으로 구조화하면 에이전트가 맥락에 따라 의도한 항목을 선택하고 실행할 수 있어 동작이 표준화되고 정확성이 보장됩니다.",
    "Type of content:": "콘텐츠 유형:",
    "AI Prompt": "AI 프롬프트",
    "Select Content:": "콘텐츠 선택:",
    "Select the Script you want to register as an action": "작업으로 등록할 스크립트를 선택하세요",
    "Select the Command you want to register as an action": "작업으로 등록할 명령을 선택하세요",
    "Select the AI Prompt you want to register as an action": "작업으로 등록할 AI 프롬프트를 선택하세요",
    "Provide a title": "제목 입력",
    "Provide a concise title that shows what the Action does": "작업이 수행하는 내용을 보여 주는 간결한 제목을 입력하세요",
    "Goal:": "목표:",
    "describe how the outcome is achieved": "결과를 달성하는 방법을 설명하세요",
    "Mark Action as sensitive to require user approval": "사용자 승인이 필요하도록 작업을 민감으로 표시",
    "Few-shot examples:": "퓨샷 예시:",
    "Include examples that illustrate how and when the Action is invoked": "작업이 언제 어떻게 호출되는지 보여 주는 예시를 포함하세요",
    "Add Example": "예시 추가",
    "Provide clear descriptions for each argument to guide Agentix in correctly mapping inputs and outputs. This ensures the action is executed as intended.":
      "Agentix가 입력과 출력을 올바르게 매핑할 수 있도록 각 인수에 대한 명확한 설명을 제공하세요. 이렇게 하면 작업이 의도한 대로 실행됩니다.",
    "The selected item has no parameters to define": "선택한 항목에는 정의할 매개변수가 없습니다",
    "Mark as non-sensitive": "민감하지 않음으로 표시",
    "Mark as sensitive": "민감으로 표시",
    "Delete Action": "작업 삭제",
  },

  patterns: [
    // "Are you sure you want to delete auenoyama-test?" (delete-confirmation dialog; the agent name varies)
    { re: /^Are you sure you want to delete (.+)\?$/, tpl: "\"$1\"을(를) 삭제하시겠습니까?" },
    // "Arguments (1)" / "Outputs (1)" (headings in the Register Action wizard; the count varies)
    { re: /^Arguments \((\d+)\)$/, tpl: "인수 ($1)" },
    { re: /^Outputs \((\d+)\)$/, tpl: "출력 ($1)" },
  ],

  skip: [],
};
