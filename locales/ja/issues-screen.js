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

const dictionaryIssuesScreen = {
  exact: {
    "All Issues": "すべてのイシュー",
    "Backward Scan Status": "後方スキャンステータス",
    "Create Issue Exclusion Rule": "イシュー除外ルールを作成",
    "Rule status": "ルールステータス",
    "Rule Conditions (from filter)": "ルール条件(フィルターから)",
    "Your changes will be lost. Do you want to cancel and exit the wizard?": "変更内容は失われます。ウィザードをキャンセルして終了しますか?",
    "Filters are still in edit mode. Click anywhere on the page to apply your filters.": "フィルターはまだ編集モードです。ページ内の任意の場所をクリックすると、フィルターが適用されます。",
    "Apply rule on existing issues": "既存のイシューにルールを適用",
    "Existing issues matching the rule’s conditions will also be excluded": "ルールの条件に一致する既存のイシューも除外されます",
    "Define conditions to automatically exclude issues": "イシューを自動的に除外する条件を定義してください",
    "Search": "検索",
    "Value": "値",
    "All Issue Exception & Exclusion Rules": "すべてのイシュー例外・除外ルール",
    "Do you want to create an Exception or an Exclusion?": "例外と除外のどちらを作成しますか?",
    "Create new exception": "新しい例外を作成",
    "Exceptions grant Issues a time-limited grace period for a specific duration, pausing SLA timers.":
      "例外は、イシューに特定の期間だけ猶予を与え、その間SLAタイマーを一時停止します。",
    "Create new exclusion": "新しい除外を作成",
    "Exclusions permanently suppress Issues. No new Issues matching this criteria will be added to the Issue list view.":
      "除外は、イシューを永続的に抑制します。この条件に一致する新しいイシューは、イシュー一覧ビューに追加されなくなります。",
    "Requestor Name": "申請者名",
    "Approver Name": "承認者名",
    "Date Created": "作成日",
    "Decision Date": "決定日",
    "Decision Justification": "決定の根拠",
    "Requestor Email": "申請者のメールアドレス",
    "Approver Email": "承認者のメールアドレス",
    "Add Exception": "例外を追加",
    "Disabled": "無効",
    "Exception Rules": "例外ルール",
    "Exclusion Rules": "除外ルール",
    "Impacted Issues": "影響を受けるイシュー",
    "Justification Category": "根拠カテゴリ",
    "Status": "ステータス",
    "There are no Issue Exception rules": "イシュー例外ルールはありません",
    "You are about to perform issue exclusion": "イシューの除外を実行しようとしています",
    "Create issue exception rule": "イシュー例外ルールを作成",
    "Scan types": "スキャンタイプ",
    "Usage": "使用状況",
    "Scanned Branch": "スキャン対象ブランチ",
    "Scan Date": "スキャン日",
    "Scan Health": "スキャンヘルス",
    "Scan Category": "スキャンカテゴリ",
    "Pull Request ID": "プルリクエストID",
    "Commit": "コミット",
    "Git User": "Gitユーザー",
    "PR Status": "PRステータス",
    "Blocking Policies": "ブロックポリシー",
    "Pull Request Title": "プルリクエストタイトル",
    "Blocking Policies IDs": "ブロックポリシーID",
    "Blocking Policies Names": "ブロックポリシー名",
    "CI Status": "CIステータス",
    "Tool Id": "ツールID",
    "Risk Factors details": "リスク要因の詳細",
    "Status modified by": "ステータス変更者",
    "Status modified date": "ステータス変更日",
    "Link": "リンク",
    "Logo": "ロゴ",
    "In catalog": "カタログ内",
    "Risk factors last update": "リスク要因の最終更新",
    "Last update": "最終更新",
    "cves": "CVE",
    "Choose cases to link the issues to": "イシューをリンクするケースを選択してください",
    "Urgent Issues Exceeding SLA": "SLAを超過した緊急のイシュー",
    "Valid Secrets Detected": "有効なシークレットが検出されました",
    "High Issues Exceeding SLA": "SLAを超過した高のイシュー",
    "High Issues in Direct Dependencies": "直接依存関係内の高のイシュー",
    "High Issues Involving Strong Copyleft Licenses": "強いコピーレフトライセンスに関わる高のイシュー",
    "Resolved - Known Issue": "解決済み - 既知のイシュー",
    "Resolved - Duplicate Issue": "解決済み - 重複したイシュー",
    "Resolved - False Positive": "解決済み - 誤検知",
    "Resolved - Other": "解決済み - その他",
    "Resolved - True Positive": "解決済み - 正しい検知",
    "Resolved - Security Testing": "解決済み - セキュリティテスト",
    "Resolved - Dismissed": "解決済み - 却下",
    "Resolved - Fixed": "解決済み - 修正済み",
    "Resolved - Risk Accepted": "解決済み - リスク許容",
    "IaC Drifts": "IaCドリフト",
    "Severity Breakdown": "重要度の内訳",
    "Code IaC Resource": "コードのIaCリソース",
    "No data available to display in the chart": "チャートに表示できるデータがありません",
    "Resolve Issue Id": "イシューIDを解決",
    "mark this issue as": "このイシューを以下としてマーク:",
    "Enter comment...": "コメントを入力してください...",
    "Select from list": "リストから選択",
    "Urgency Details": "緊急度の詳細",
    "Create application": "アプリケーションを作成",
    "Application Criticality": "アプリケーションの重要度",
    "Missing code-to-cloud traceability.": "Code-to-Cloudトレーサビリティが不足しています。",
    "Urgency may change once the full runtime path is established": "完全なランタイムパスが確立されると、緊急度が変わる可能性があります",
    "Urgency not updated. We couldn't calculate urgency this time. We'll try again with the next periodic scan.":
      "緊急度は更新されませんでした。今回は緊急度を計算できませんでした。次回の定期スキャンで再試行します。",
    "Backlog Status:": "バックログステータス:",
    "Choose a reason": "理由を選択してください",
    "Create Exception Rule": "例外ルールを作成",
    "Enter the date that the Exception will end and the SLA Timer will start to tick down again on.":
      "例外が終了し、SLAタイマーが再びカウントダウンを開始する日付を入力してください。",
    "Form": "フォーム",
    "None provided": "指定なし",
    "Optionally for your reference, enter a ticket or a record number for any external exception tracking or auditing systems you use.":
      "任意で、参考のために、外部の例外追跡システムや監査システムで使用しているチケット番号やレコード番号を入力してください。",
    "Provide a reason why there is a business need to defer fixing the security Issues that match this rule.":
      "このルールに一致するセキュリティイシューの修正を延期する必要があるビジネス上の理由を入力してください。",
    "Use Exception Rules to suppress issues that cannot be resolved within SLA bounds due to valid business justifications.":
      "正当なビジネス上の理由によりSLA期間内に解決できないイシューを抑制するには、例外ルールを使用してください。",
    "When an issue matches the rule criteria, its SLA timer pauses for the specified duration.":
      "イシューがルールの条件に一致すると、そのSLAタイマーは指定された期間一時停止します。",
    "internal id": "内部ID",
    "Approver": "承認者",
    "Exception End Date": "例外終了日",
    "Exception Period": "例外期間",
    "Justification": "根拠",
    "External Exception ID": "外部例外ID",
    "Reason Category": "理由カテゴリ",
    "Match Criteria and Results": "一致条件と結果",
    "Change Issue Assignee": "イシューの担当者を変更",
    "Assign to me": "自分に割り当てる",
    "Select a user to assign": "割り当てるユーザーを選択してください",
    "Select the action you want to run when the rule conditions are met.": "ルールの条件が満たされた際に実行するアクションを選択してください。",
    "Everywhere": "すべての場所",
    "Select cases": "ケースを選択",
    "Uncheck cases to unlink them from the issue": "ケースのチェックを外すと、イシューからのリンクが解除されます",
    "View related case": "関連するケースを表示",
    "Show workplan": "ワークプランを表示",
    "Investigate": "調査",
    "Exclude issue": "イシューを除外",
    "Except issue": "イシューを例外化",
    "Exclude issues": "イシューを除外",
    "Except issues": "イシューを例外化",
    "Link to case": "ケースにリンク",
    "Unlink from case": "ケースからのリンクを解除",
    "Change status": "ステータスを変更",
    "Change severity": "重要度を変更",
    "Change assignee": "担当者を変更",
    "Investigate causality chain": "因果連鎖を調査",
    "Run automation": "自動化を実行",
    "Manage Issue": "イシューを管理",
    "Open views": "ビューを開く",
    "Create case": "ケースを作成",
    "AppSec Issues": "AppSecイシュー",
    "CSPM Scanner": "CSPMスキャナー",
    "Detection Method": "検出方法",
    "Findings": "検出結果",
    "Issue Domain": "イシュードメイン",
    "Name": "名前",
    "Observation Time": "観測時刻",
    "Resolution Reason": "解決理由",

    // --- 「検出方法」「イシュードメイン」フィルタの選択肢一覧 ---
    // --- "Detection method"/"Issue domain" filter option list ---
    // ブランド名・固有の製品名・略語はそのまま(翻訳しても表記が変わらない
    // ため辞書には追加していない): AURL, XDR BIOC, XDR Analytics BIOC,
    // XDR Analytics, XDR IOC, DLP, ASM, PAN NGFW, XDR Managed Threat
    // Hunting, Prisma Browser, Prisma Cloud, Prisma Cloud Compute
    // Brand names, specific product names, and abbreviations are left as-is (translating them
    // would not change their spelling, so they are not in the dictionary): AURL, XDR BIOC,
    // XDR Analytics BIOC, XDR Analytics, XDR IOC, DLP, ASM, PAN NGFW, XDR Managed Threat
    // Hunting, Prisma Browser, Prisma Cloud, Prisma Cloud Compute
    "Agentless Disk Scanner": "エージェントレスディスクスキャナー",
    "AI Security Posture": "AIセキュリティポスチャー",
    "API Posture Scanner": "APIポスチャースキャナー",
    "API Traffic Monitor": "APIトラフィックモニター",
    "AppSec Policy": "AppSecポリシー",
    "CAS CVE Scanner": "CAS CVEスキャナー",
    "CAS Drift Scanner": "CASドリフトスキャナー",
    "IaC Scanner": "IaCスキャナー",
    "CAS License Scanner": "CASライセンススキャナー",
    "CAS Malicious Package Scanner": "CAS悪意のあるパッケージスキャナー",
    "SAST Scanner": "SASTスキャナー",
    "CAS Secret Scanner": "CASシークレットスキャナー",
    "CIEM Scanner": "CIEMスキャナー",
    "CLI Scanner": "CLIスキャナー",
    "Cloud Network Analyzer": "クラウドネットワークアナライザー",
    "Custom Issue": "カスタムイシュー",
    "Data Policy": "データポリシー",
    "SaaS Attachments": "SaaS添付ファイル",
    "Graph Engine": "グラフエンジン",
    "Health": "ヘルス",
    "Indicator Matching": "インジケーターマッチング",
    "IoT Security": "IoTセキュリティ",
    "Kubernetes Scanner": "Kubernetesスキャナー",
    "MIRRORING": "ミラーリング",
    "Posture Policy": "ポスチャーポリシー",
    "User Reported Phishing": "ユーザー報告フィッシング",
    "Hunting": "ハンティング",
    "Posture": "ポスチャー",

    "AWS EC2 instance not configured with Instance Metadata Service v2 (IMDSv2)":
      "AWS EC2インスタンスがInstance Metadata Service v2 (IMDSv2)で構成されていません",

    // --- カラム選択メニュー ---
    // --- Column-selection menu ---
    "Excluded": "除外済み",
    "Case IDs": "ケースID",
    "Insert Time": "登録日時",
    "Resolution Status Modified": "解決ステータス変更日時",
    "Remediation": "修復方法",
    "Impact": "影響",
    "Extended Description": "詳細説明",
    "Initial Evidence": "初期の証跡",
    "Excepted": "例外化済み",
    "Remaining Exception Period": "例外期間の残り",
    "Agentic AI response status": "エージェント型AI対応ステータス",
    "Agentic AI response": "エージェント型AIの対応",
    "Recommendation": "推奨事項",
    "Last Modified": "最終変更日時",
    "Compliance Standard": "コンプライアンス基準",
    "Compliance Category": "コンプライアンスカテゴリ",
    "Compliance Control": "コンプライアンスコントロール",

    // --- イシュー詳細パネル(証跡・因果関係タブ等) ---
    // --- Issue detail panel (Evidence/Causality tabs, etc.) ---
    // "Critical Vulnerabilities (CVSS)"はvulnerability-management.jsに
    // 既に登録済み(辞書は全ファイルでグローバルにマージされるため、
    // ここに重複追加していない)。
    // "Critical Vulnerabilities (CVSS)" is already registered in vulnerability-management.js
    // (all files' dictionaries are merged globally, so it is not duplicated here).
    "No associated standards or controls": "関連する基準またはコントロールがありません",
    "Automations browser": "Automationブラウザ",
    "Type `:` to use Emojis": "`:` を入力して絵文字を使用",
    "Focus on the CLI field using `ctrl+;`": "`ctrl+;` でCLI入力欄にフォーカス",
    "Navigate quickly with `ctrl+k` (default)": "`ctrl+k` で素早く移動(デフォルト)",
    "Toggle markdown box on CLI using `ctrl+m`": "`ctrl+m` でCLIのMarkdownボックスを切り替え",
    "There are no Cases": "ケースはありません",
    "Asset Risk": "資産リスク",
    "The value of and risks posed to your organization by the compromise of this asset":
      "この資産が侵害された場合に組織に及ぼす価値とリスク",
    "Internet Reachable Asset": "インターネットから到達可能な資産",
    "This asset is publicly exposed to the internet.": "この資産はインターネットに公開されています。",
    "Evidence graph is not supported for this detection rule type": "この検出ルールタイプではエビデンスグラフはサポートされていません",
    "Enable prompt protection in the content filter": "コンテンツフィルターでプロンプト保護を有効にする",
    "Related Affected Assets": "関連する影響を受ける資産",
    "Enforce the Agent to Use Guardrails": "エージェントにガードレールの使用を強制する",
    "Number of hits": "ヒット数",
    "Process Execution": "プロセス実行",
    "Initiator Details": "起動元の詳細",
    "Name (initiated by)": "名前(起動元)",
    "Path (initiator path)": "パス(起動元のパス)",
    "CMD (initiator CMD)": "CMD(起動元のCMD)",
    "PID (initiator PID)": "PID(起動元のPID)",
    "TID (initiator TID)": "TID(起動元のTID)",
    "Signature": "署名",
    "Signature Unavailable": "署名が利用できません",
    // MD5, SHA256はハッシュ形式の名称のためそのまま(辞書に追加していない)。
    // MD5 and SHA256 are hash-format names, left as-is (not added to the dictionary).
    "Target Process": "対象プロセス",
    "Causality Group Owner Details": "因果グループ所有者の詳細",
    "OS Parent": "OS親プロセス",
    "Occurrence Count": "発生回数",

    "Snippet": "スニペット",
    "Objects Count": "オブジェクト数",
    "Records Count": "レコード数",
    "There are no Findings": "検出結果はありません",
    "Data Findings": "データの検出結果",
    "Configuration Findings": "構成の検出結果",
    "Identity Findings": "アイデンティティの検出結果",
    "Posture Findings": "ポスチャーの検出結果",
    "Malware Findings": "マルウェアの検出結果",
    "Additional Details": "追加の詳細",
    "Showing a partial graph": "グラフの一部のみを表示しています",
    "Due to the high volume of results, only a portion of the data is shown.":
      "結果が大量にあるため、データの一部のみが表示されています。",

    // --- イシュー詳細パネル(AIセキュリティ/CAS系イシューの概要タブ) ---
    // --- Issue detail panel (AI Security/CAS-type issue overview tab) ---
    // 「トリガールール」リンク(title属性・リンクテキスト双方に表示)。
    // A "trigger rule" link (shown in both its title attribute and its link text).
    "Identity Posture Rule": "アイデンティティポスチャールール",
    // MITRE ATT&CKのテクニック名(戦術名"Initial Access"→"初期アクセス"は
    // 既に他画面向けの辞書に登録済みのため、ここではテクニック名のみ追加)。
    // A MITRE ATT&CK technique name (the tactic name "Initial Access" → "初期アクセス" is
    // already registered in another screen's dictionary, so only the technique name is added here).
    "Drive-by Compromise": "ドライブバイコンプロマイズ",
    // AIセキュリティポスチャー(DSPM)イシューの証跡テーブルに表示される
    // 攻撃手法列の値(table-widget内。列見出し自体は既に翻訳済み)。
    // A value in the "attack technique" column of an AI Security Posture (DSPM) issue's evidence
    // table (inside table-widget; the column heading itself is already translated).
    "Indirect Attack": "間接攻撃",
    "Jailbreak": "ジェイルブレイク",
    // 同イシューの証跡セクションの見出し(説明文自体はテナント非依存の
    // 固定文だが、pan-highlight-text配下のためRAW_IDENTIFIER_SELECTOR側の
    // 既存の除外方針により固定辞書には追加していない。見出しのみ追加)。
    // The same issue's evidence-section heading (the description text itself is a fixed,
    // tenant-independent string, but it sits under pan-highlight-text, which the existing
    // RAW_IDENTIFIER_SELECTOR exclusion policy keeps out of the fixed dictionary — so only the
    // heading is added here).
    "Prompt Injection": "プロンプトインジェクション",
    // 「検出ロジック」欄に表示される、イシューの検出ルール名(汎用・
    // インスタンス非依存の名称。イシュー名そのもの(xdr-issue-focus-area-
    // header h3 span[utitle]内)は既存の除外方針により対象外のため、
    // それとは別のフィールドに表示されるこちらの汎用名のみ追加)。
    // The issue's detection-rule name shown in the "Detection logic" field (a generic,
    // instance-independent name). The issue name itself (inside xdr-issue-focus-area-header h3
    // span[utitle]) is excluded by the existing policy, so only this generic name — shown in a
    // separate field — is added here.
    "AI deployment missing prompt attack protection": "AIデプロイメントにプロンプト攻撃対策がありません",
    // "Potential dependency confusion due to package name or scope ... available
    // in registry"は、パッケージ名(case-tracker等)が実際には必ず本文中に
    // 埋め込まれて表示される(完全一致にはならない)ため、下のpatterns側の
    // 正規表現エントリで対応している(固定辞書=exactには追加していない)。
    // "Potential dependency confusion due to package name or scope ... available in registry"
    // always has an actual package name (e.g. case-tracker) embedded in the text, so it never
    // matches exactly; it is instead handled by the regex entry under "patterns" below (not added
    // to the fixed "exact" dictionary).
    "Package Management": "パッケージ管理",
    "Dependency Chains": "依存関係チェーン",
    // コードエビデンス(コミット情報)のラベル(先頭の "| " はセパレーターの
    // 一部として同じテキストノードに含まれている)。
    // Code-evidence (commit info) labels — the leading "| " is included in the same text node as
    // part of the separator.
    "| Commit Hash": "| コミットハッシュ",
    "| Commit Time": "| コミット時刻",
  },

  patterns: [
    // "Open in GitHub" -> "GitHubで開く" / "Open in GitLab" -> "GitLabで開く"
    // 元は"Open in GitHub"のみの固定文言だったが、GitLab等の他のリポジトリ
    // プロバイダーでも同じ文言が出ることが判明したため、プロバイダー名を
    // 可変にしたパターンに変更した。
    // Originally a fixed "Open in GitHub" entry, but the same phrasing turned out
    // to appear for other repository providers too (e.g. GitLab), so this was
    // changed to a pattern with the provider name as a variable.
    { re: /^Open in (.+)$/, tpl: "$1で開く" },
    // "Rules that affect over 100000 issues cannot be created" -> "100000件を超えるイシューに影響するルールは作成できません"
    { re: /^Rules that affect over (\d+) issues cannot be created$/, tpl: "$1件を超えるイシューに影響するルールは作成できません" },
    // 'Select an Automation to run on selected issue 4970057, "..."' -> '選択したイシュー4970057「...」に対して実行するAutomationを選択してください'
    { re: /^Select an Automation to run on selected issue (\d+), "(.+)"$/, tpl: "選択したイシュー$1「$2」に対して実行するAutomationを選択してください" },
    // 'tyamasaki-test-rule-01(Network Exposure) was added to the case because it relates to the same asset'
    // -> 'tyamasaki-test-rule-01(Network Exposure)は同じ資産に関連するため、ケースに追加されました'
    { re: /^(.+?)\((.+?)\) was added to the case because it relates to the same asset$/, tpl: "$1($2)は同じ資産に関連するため、ケースに追加されました" },
    // "The automation '7caa89a2-e4c5-4496-8653-cf1e2989f705' encountered an error."
    // -> "自動化「7caa89a2-e4c5-4496-8653-cf1e2989f705」でエラーが発生しました。"
    // (自動化の名前・IDが動的に埋め込まれる。引用符は原文がタイプ
    // グラフィック・クオート(U+2018/U+2019)を使用しているため、
    // それに合わせている。)
    // (The automation's name/ID is embedded dynamically. The quote characters match the source
    // text, which uses typographic quotes U+2018/U+2019.)
    { re: /^The automation ‘(.+?)’ encountered an error\.$/, tpl: "自動化「$1」でエラーが発生しました。" },
    // 「検出ロジック」欄に表示される、Dependency Confusion系イシューの
    // 検出ルール名。パッケージ名(case-tracker等)が本文中に埋め込まれる。
    // The detection-rule name for a Dependency Confusion-type issue, shown in the "Detection
    // logic" field. A package name (e.g. case-tracker) is embedded in the text.
    // "Potential dependency confusion due to package name or scope case-tracker available in registry"
    // -> "パッケージ名またはスコープ「case-tracker」がレジストリで利用可能なため、依存関係の混同(Dependency Confusion)が発生する可能性があります"
    {
      re: /^Potential dependency confusion due to package name or scope (.+?) available in registry$/,
      tpl: "パッケージ名またはスコープ「$1」がレジストリで利用可能なため、依存関係の混同(Dependency Confusion)が発生する可能性があります",
    },
    // GitHub関連イシューの「修正(Fix)」提案の一文(ユーザー名/組織名/
    // GitHub App名が動的に埋め込まれる)。<u-label>要素のテキストとして
    // 表示されている。
    // A GitHub-related issue's "Fix" suggestion sentence (a user name, org name, or GitHub App
    // name is embedded dynamically). Rendered as a <u-label> element's text.
    // "Fix - User account sreerajnair95 in GitHub is missing 2FA"
    // -> "修正 - GitHubのユーザーアカウント「sreerajnair95」で2FAが設定されていません"
    { re: /^Fix - User account (.+?) in GitHub is missing 2FA$/, tpl: "修正 - GitHubのユーザーアカウント「$1」で2FAが設定されていません" },
    // "Fix - 2FA is not enforced in the tinystepstudio GitHub organization."
    // -> "修正 - GitHub組織「tinystepstudio」で2FAが強制されていません。"
    { re: /^Fix - 2FA is not enforced in the (.+?) GitHub organization\.$/, tpl: "修正 - GitHub組織「$1」で2FAが強制されていません。" },
    // "Fix - Unrestricted usage of GitHub Actions allowed across the organization tinystepstudio."
    // -> "修正 - 組織「tinystepstudio」全体でGitHub Actionsの無制限使用が許可されています。"
    {
      re: /^Fix - Unrestricted usage of GitHub Actions allowed across the organization (.+?)\.$/,
      tpl: "修正 - 組織「$1」全体でGitHub Actionsの無制限使用が許可されています。",
    },
    // "Fix - Excessive GitHub App cortex-appsec-eu permissions"
    // -> "修正 - GitHub App「cortex-appsec-eu」の権限が過剰です"
    { re: /^Fix - Excessive GitHub App (.+?) permissions$/, tpl: "修正 - GitHub App「$1」の権限が過剰です" },
    // "Fix - Deprecated package uuid used in NPM project in GitHub repository"
    // -> "修正 - GitHubリポジトリのNPMプロジェクトで使用されている非推奨パッケージ「uuid」"
    // (パッケージ名・リポジトリ種別(GitHub/GitLab/Bitbucket等)の両方が動的に埋め込まれる)
    // (Both the package name and the repository type — GitHub/GitLab/Bitbucket, etc. — are
    // embedded dynamically.)
    {
      re: /^Fix - Deprecated package (.+?) used in NPM project in (.+?) repository$/,
      tpl: "修正 - $2リポジトリのNPMプロジェクトで使用されている非推奨パッケージ「$1」",
    },
    // 「作業計画」タブのAutomation候補名としての依存関係混同(先頭に"Fix - "が
    // 付く点が、検出ロジック欄に表示される汎用名(上のパターンを参照)との違い)。
    // "Fix - Potential dependency confusion due to package name or scope case-tracker available in registry"
    // -> "修正 - パッケージ名またはスコープ「case-tracker」がレジストリで利用可能なため、依存関係の混同(Dependency Confusion)が発生する可能性があります"
    // Dependency confusion as an Automation candidate name on the "Action plan" tab (it differs
    // from the generic name shown in the "Detection logic" field, see the pattern above, by the
    // leading "Fix - ").
    {
      re: /^Fix - Potential dependency confusion due to package name or scope (.+?) available in registry$/,
      tpl: "修正 - パッケージ名またはスコープ「$1」がレジストリで利用可能なため、依存関係の混同(Dependency Confusion)が発生する可能性があります",
    },
    // "Fix - CVE-2019-18888 in symfony/http-foundation, version: 3.4.x-dev"
    // -> "修正 - symfony/http-foundation(バージョン: 3.4.x-dev)の脆弱性CVE-2019-18888"
    // (CVE番号・パッケージ名・バージョンの3つが動的に埋め込まれる。CVE以外の
    // 脆弱性ID形式にも備え、1つ目のキャプチャは"CVE-"に限定していない)
    // (The CVE number, package name, and version are all embedded dynamically. The first capture
    // group is not restricted to "CVE-" specifically, to also allow for other vulnerability-ID formats.)
    {
      re: /^Fix - (.+?) in (.+?), version: (.+)$/,
      tpl: "修正 - $2(バージョン: $3)の脆弱性$1",
    },
  ],

  skip: [],
};
