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
    "Explore Cortex Agentic Assistant": "Cortex Agentic Assistant を探索",
    "Fully executed plans": "完全に実行されたプラン",
    "Incomplete plans": "未完了のプラン",
    "No plans recorded": "記録されたプランがありません",
    "Plans": "プラン",
    "User Prompts": "ユーザープロンプト",
    "Automation rules": "自動化ルール",
    "Last 7D": "過去7日間",

    // --- エージェント作成/編集ウィザード ---
    // --- Agent creation/edit wizard ---
    "Agent Name": "エージェント名",
    "Specify Agent Name": "エージェント名を入力",
    "Select color": "色を選択",
    "Write a short explanation on what is the common context of the selected actions":
      "選択したアクションに共通する内容を簡潔に説明してください",
    "Specific Instructions": "具体的な指示",
    "More information": "詳細情報",
    "Type here...": "ここに入力...",
    "Add the rules this agent must follow—tone, decision bounds, safety checks, and output format. Keep it less than 3k characters.":
      "このエージェントが従うべきルール(トーン、判断の範囲、安全確認、出力形式など)を追加してください。3,000文字未満で入力してください。",
    "Who has access to Agent": "エージェントへのアクセス権を持つユーザー",
    "Only me": "自分のみ",
    "Public Agent": "パブリックエージェント",
    "Conversation Starters": "会話のきっかけ",
    "up to 4 items": "最大4件",
    "Add conversation starter": "会話のきっかけを追加",
    "Create agent": "エージェントを作成",
    "Build a New Agent": "新しいエージェントを構築",
    "Agent Details": "エージェント詳細",
    "Access Control": "アクセス制御",
    // 実際のDOMでは上記2文が1つのテキストノード(白抜き文字はwhite-space:pre、改行区切り)
    // として存在するため、照合時の改行→半角スペース正規化を踏まえ、2文を1つの
    // キーにまとめて登録している(2文を別々のエントリにすると、どちらも部分一致にしか
    // ならず一致しない)。
    // In the actual DOM, the two sentences above live in a single text node (separated by a
    // newline, white-space: pre), so — given that matching normalizes newlines to a single
    // space — they're registered as one combined key (registering them as two separate entries
    // would leave both as partial matches that never match).
    "Define which roles and actions the agent has access to. Selecting a role auto-selects its actions. Deselecting an action clears the role.":
      "このエージェントがアクセスできるロールとアクションを定義します。\nロールを選択すると、そのロールに含まれるアクションが自動的に選択されます。アクションの選択を解除すると、ロールの選択も解除されます。",
    "Selected Roles": "選択済みのロール",
    "Selected Actions": "選択済みのアクション",
    "New Action": "新しいアクション",
    "What the AI agent is supposed to be or act as. Defines its identity and primary function. Example: \"SOC Tier 1 Analyst: as a Tier 1 analyst you are responsible for triage alerts and conclude if an alert is a true or false positive\" or \"Incident Response Analyst: as an incident response Analyst you are responsible for investigating and conduct forensics of relevant artifacts related to an incident and provide conclusions about the incident and TTP's used by the threat actor.\"":
      "このAIエージェントが何であるべきか、どのように振る舞うべきかを示します。エージェントのアイデンティティと主な役割を定義します。例:「SOC Tier 1 アナリスト:Tier 1 アナリストとして、アラートのトリアージを行い、そのアラートが真陽性か偽陽性かを判断する責任を負います」または「インシデントレスポンスアナリスト:インシデントレスポンスアナリストとして、インシデントに関連する証跡の調査とフォレンジックを行い、インシデントおよび脅威アクターが使用したTTPについて結論を示す責任を負います」",
    "The specific rules and behavioral guidelines that tell the agent how to operate and respond. Example: \"Follow the NIST framework, provide clear and concise recommendations. used critical thinking when conducting analysis\"":
      "エージェントがどのように動作し応答するかを示す、具体的なルールと行動指針です。例:「NISTフレームワークに従い、明確で簡潔な推奨事項を提示する。分析を行う際はクリティカルシンキングを用いる」",
    "Output Structure": "出力形式",
    "How the agent should format and organize its responses. Example: \"Json, Markdown, Array, enum\"":
      "エージェントが応答をどのような形式・構成で出力すべきかを示します。例:「Json、Markdown、配列、enum」",
    "Delete Agent": "エージェントを削除",

    // --- アクション登録ウィザード(Register Action) ---
    // --- Action registration wizard (Register Action) ---
    "Start chat": "チャットを開始",
    "Register action": "アクションを登録",
    "Action Details": "アクション詳細",
    "Structuring your content as an Action lets the agent select and execute the intended item based on context, standardizing behavior and ensuring accuracy.":
      "コンテンツをアクションとして構造化することで、エージェントは文脈に基づいて意図した項目を選択・実行できるようになり、動作の標準化と精度の向上につながります。",
    "Type of content:": "コンテンツの種類:",
    "AI Prompt": "AIプロンプト",
    "Select Content:": "コンテンツを選択:",
    "Select the Script you want to register as an action": "アクションとして登録するスクリプトを選択してください",
    "Select the Command you want to register as an action": "アクションとして登録するコマンドを選択してください",
    "Select the AI Prompt you want to register as an action": "アクションとして登録するAIプロンプトを選択してください",
    "Provide a title": "タイトルを入力",
    "Provide a concise title that shows what the Action does": "このアクションの内容を示す簡潔なタイトルを入力してください",
    "Goal:": "目的:",
    "describe how the outcome is achieved": "結果がどのように達成されるかを記述してください",
    "Mark Action as sensitive to require user approval": "ユーザーの承認を必須にする場合は、このアクションをセンシティブとして設定してください",
    "Few-shot examples:": "Few-shotの例:",
    "Include examples that illustrate how and when the Action is invoked": "このアクションがどのように、どのような場合に呼び出されるかを示す例を入力してください",
    "Add Example": "例を追加",
    "Provide clear descriptions for each argument to guide Agentix in correctly mapping inputs and outputs. This ensures the action is executed as intended.":
      "各引数について明確な説明を記載し、Agentixが入力と出力を正しくマッピングできるようにしてください。これにより、アクションが意図したとおりに実行されます。",
    "The selected item has no parameters to define": "選択した項目には定義するパラメータがありません",
    "Mark as non-sensitive": "ノンセンシティブとして設定",
    "Mark as sensitive": "センシティブとして設定",
    "Delete Action": "アクションを削除",
  },

  patterns: [
    // "Are you sure you want to delete auenoyama-test?" (削除確認ダイアログ、エージェント名は可変)
    // "Are you sure you want to delete auenoyama-test?" (delete-confirmation dialog; the agent name varies)
    { re: /^Are you sure you want to delete (.+)\?$/, tpl: "「$1」を削除してもよろしいですか?" },
    // "Arguments (1)" / "Outputs (1)" (アクション登録ウィザードの見出し、件数は可変)
    // "Arguments (1)" / "Outputs (1)" (headings in the Register Action wizard; the count varies)
    { re: /^Arguments \((\d+)\)$/, tpl: "引数 ($1)" },
    { re: /^Outputs \((\d+)\)$/, tpl: "出力 ($1)" },
  ],

  skip: [],
};
