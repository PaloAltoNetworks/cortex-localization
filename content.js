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

(() => {
  'use strict';

  // Merge multiple dictionary objects into one (exact entries overwrite; patterns/skip arrays are concatenated).
  function mergeDictionaries(...dicts) {
    const merged = { exact: {}, patterns: [], skip: [] };
    for (const d of dicts) {
      if (!d) continue;
      Object.assign(merged.exact, d.exact || {});
      merged.patterns.push(...(d.patterns || []));
      merged.skip.push(...(d.skip || []));
    }
    return merged;
  }

  // Merge all loaded per-screen dictionaries (ignore variables that are undefined, i.e. not loaded).
  const dictionary = mergeDictionaries(
    typeof dictionaryCommon !== 'undefined' ? dictionaryCommon : null,
    typeof dictionaryCloudCommandCenter !== 'undefined' ? dictionaryCloudCommandCenter : null,
    typeof dictionaryVulnerabilityManagement !== 'undefined' ? dictionaryVulnerabilityManagement : null,
    typeof dictionaryCompliance !== 'undefined' ? dictionaryCompliance : null,
    typeof dictionaryCodeToCloudCoverage !== 'undefined' ? dictionaryCodeToCloudCoverage : null,
    typeof dictionaryRulesAndPolicies !== 'undefined' ? dictionaryRulesAndPolicies : null,
    typeof dictionaryCaseManagement !== 'undefined' ? dictionaryCaseManagement : null,
    typeof dictionaryAspmCommandCenter !== 'undefined' ? dictionaryAspmCommandCenter : null,
    typeof dictionaryCortexAgenticAssistant !== 'undefined' ? dictionaryCortexAgenticAssistant : null,
    typeof dictionaryDataSecurityCommandCenter !== 'undefined' ? dictionaryDataSecurityCommandCenter : null,
    typeof dictionaryApiSecurityManagement !== 'undefined' ? dictionaryApiSecurityManagement : null,
    typeof dictionaryAssetInventory !== 'undefined' ? dictionaryAssetInventory : null,
    typeof dictionaryCloudSecurityAssessment !== 'undefined' ? dictionaryCloudSecurityAssessment : null,
    typeof dictionaryComplianceOverview !== 'undefined' ? dictionaryComplianceOverview : null,
    typeof dictionaryComplianceViolation !== 'undefined' ? dictionaryComplianceViolation : null,
    typeof dictionaryCortexCloudConsumption !== 'undefined' ? dictionaryCortexCloudConsumption : null,
    typeof dictionaryDataIngestion !== 'undefined' ? dictionaryDataIngestion : null,
    typeof dictionaryKspm !== 'undefined' ? dictionaryKspm : null,
    typeof dictionaryMitreAttackFrameworkCoverage !== 'undefined' ? dictionaryMitreAttackFrameworkCoverage : null,
    typeof dictionaryNta !== 'undefined' ? dictionaryNta : null,
    typeof dictionaryApplicationSecurity !== 'undefined' ? dictionaryApplicationSecurity : null,
    typeof dictionaryDataSecurity !== 'undefined' ? dictionaryDataSecurity : null,
    typeof dictionaryIdentitySecurity !== 'undefined' ? dictionaryIdentitySecurity : null,
    typeof dictionaryCdrCommandCenter !== 'undefined' ? dictionaryCdrCommandCenter : null,
    typeof dictionaryAgentManagement !== 'undefined' ? dictionaryAgentManagement : null,
    typeof dictionaryUnmanagedCloudServices !== 'undefined' ? dictionaryUnmanagedCloudServices : null,
    typeof dictionaryCasesScreen !== 'undefined' ? dictionaryCasesScreen : null,
    typeof dictionaryIssuesScreen !== 'undefined' ? dictionaryIssuesScreen : null,
    typeof dictionaryCaseScoring !== 'undefined' ? dictionaryCaseScoring : null,
    typeof dictionaryFeaturedFieldsHosts !== 'undefined' ? dictionaryFeaturedFieldsHosts : null,
    typeof dictionaryFeaturedFieldsUsers !== 'undefined' ? dictionaryFeaturedFieldsUsers : null,
    typeof dictionaryFeaturedFieldsIpAddresses !== 'undefined' ? dictionaryFeaturedFieldsIpAddresses : null,
    typeof dictionaryExposureManagement !== 'undefined' ? dictionaryExposureManagement : null,
    typeof dictionaryControlsCatalog !== 'undefined' ? dictionaryControlsCatalog : null,
    typeof dictionaryAssessmentResults !== 'undefined' ? dictionaryAssessmentResults : null,
    typeof dictionaryReportsScreen !== 'undefined' ? dictionaryReportsScreen : null,
    typeof dictionaryAssetInventoryScreen !== 'undefined' ? dictionaryAssetInventoryScreen : null,
    typeof dictionaryAssetInventoryIdentityNetwork !== 'undefined' ? dictionaryAssetInventoryIdentityNetwork : null,
    typeof dictionaryAssetInventoryGroups !== 'undefined' ? dictionaryAssetInventoryGroups : null,
    typeof dictionaryDataSecurity !== 'undefined' ? dictionaryDataSecurity : null,
    typeof dictionaryXdrFieldPicker !== 'undefined' ? dictionaryXdrFieldPicker : null,
    typeof dictionaryAiSecurityModule !== 'undefined' ? dictionaryAiSecurityModule : null,
    typeof dictionaryCloudPostureSecurityRules !== 'undefined' ? dictionaryCloudPostureSecurityRules : null,
    typeof dictionaryCloudWorkloadRules !== 'undefined' ? dictionaryCloudWorkloadRules : null,
    typeof dictionaryCloudWorkloadPolicies !== 'undefined' ? dictionaryCloudWorkloadPolicies : null,
    typeof dictionaryCloudPostureSecurityPolicies !== 'undefined' ? dictionaryCloudPostureSecurityPolicies : null,
    typeof dictionaryAttackSurfaceRules !== 'undefined' ? dictionaryAttackSurfaceRules : null,
    typeof dictionaryAttackSurfaceAssets !== 'undefined' ? dictionaryAttackSurfaceAssets : null,
    typeof dictionaryAppsecPolicies !== 'undefined' ? dictionaryAppsecPolicies : null,
    typeof dictionarySupplyChainAttacks !== 'undefined' ? dictionarySupplyChainAttacks : null,
    typeof dictionaryPackageExplorer !== 'undefined' ? dictionaryPackageExplorer : null,
    typeof dictionaryGeneralSettings !== 'undefined' ? dictionaryGeneralSettings : null,
    typeof dictionaryIssueDetailScreen !== 'undefined' ? dictionaryIssueDetailScreen : null,
    typeof dictionaryCortexAnalytics !== 'undefined' ? dictionaryCortexAnalytics : null,
    typeof dictionaryDataBroker !== 'undefined' ? dictionaryDataBroker : null,
    typeof dictionaryXdrCollector !== 'undefined' ? dictionaryXdrCollector : null,
    typeof dictionaryLicense !== 'undefined' ? dictionaryLicense : null,
    typeof dictionaryHealthIssues !== 'undefined' ? dictionaryHealthIssues : null,
    typeof dictionaryEndpointPolicyManagement !== 'undefined' ? dictionaryEndpointPolicyManagement : null,
    typeof dictionaryEndpointPolicyProfile !== 'undefined' ? dictionaryEndpointPolicyProfile : null,
    typeof dictionaryDataClassification !== 'undefined' ? dictionaryDataClassification : null,
    typeof dictionaryDataCollection !== 'undefined' ? dictionaryDataCollection : null,
    typeof dictionaryIdentityConfiguration !== 'undefined' ? dictionaryIdentityConfiguration : null,
    typeof dictionaryDataManagement !== 'undefined' ? dictionaryDataManagement : null,
    typeof dictionaryAutomationExclusionCenter !== 'undefined' ? dictionaryAutomationExclusionCenter : null,
    typeof dictionaryIntegrations !== 'undefined' ? dictionaryIntegrations : null,
    typeof dictionaryObjectSetup !== 'undefined' ? dictionaryObjectSetup : null,
    typeof dictionaryAccessManagement !== 'undefined' ? dictionaryAccessManagement : null,
    typeof dictionaryAttackSurfaceData !== 'undefined' ? dictionaryAttackSurfaceData : null,
    typeof dictionaryApplicationConfigurations !== 'undefined' ? dictionaryApplicationConfigurations : null,
    typeof dictionaryUpgradeHelper !== 'undefined' ? dictionaryUpgradeHelper : null,
    typeof dictionaryMarketplace !== 'undefined' ? dictionaryMarketplace : null,
    typeof dictionaryXqlSearch !== 'undefined' ? dictionaryXqlSearch : null,
    typeof dictionaryThreatManagement !== 'undefined' ? dictionaryThreatManagement : null,
    typeof dictionaryForensics !== 'undefined' ? dictionaryForensics : null
  );

  // Parent tags excluded from translation
  const SKIP_PARENT_TAGS = new Set(['SCRIPT', 'STYLE', 'NOSCRIPT', 'TEXTAREA', 'INPUT']);

  // Areas always excluded from fixed-dictionary translation (RAW_IDENTIFIER_SELECTOR).
  // Policy: exclude entire areas of "raw identifiers/free text" where exact/partial word matching would cause mistranslations.
  // The following (group 1) are code/query/generic panel areas always excluded from both the fixed dictionary and AI translation.
  // - .monaco-editor, .CodeMirror, [class*="monaco-editor"]: code input fields such as XQL queries. Translating would break query syntax.
  // - .helper-card: XQL Helper reference cards (prevents mistranslation from partial matches with dictionaries meant for other screens).
  // - query-form: Graph Search's query condition panel (excluded entirely since it lists raw XQL field names).
  // - .task-library-panel: contents of the Playbook editor's "Task Library" panel (the open button itself is still translated).
  // - .joint-paper: the Playbook editor's canvas body (rendered by JointJS).
  // - .playbook-tabs-container-wrapper: the Playbook editor's tab bar.
  // - .playbook-right-panel: the Playbook editor's right-side panel (including Playbook Settings).
  // - #right-shoulder: contents of the Debugger Panel (the open button is translated; the JSON inside is tenant-specific so excluded).
  // - .xsoar-object-library-content: contents of the Scripts Library panel (the panel title itself is translated).
  // - .integration-shoulder: detail settings panel for an individual script/integration.
  // - .agentix-right-panel: the script/prompt test-run panel.
  // - .prompts-container: the individual Prompt editing screen.
  // - .war-room-dropzone: the Case War Room/Playground file drag-and-drop area.
  // - bioc-indicator: the "Condition" column in the Automation Rules list (a dynamic condition summary that differs per rule).
  // - xdr-file-retrieval-field .list-wrapper: user-added file path list in the "Retrieve files" wizard.
  // - secdo-generic-list .list-items: generic list of values the user added, e.g. in filter conditions.
  // - .single-closed-filter-content: the value portion of a collapsed display of an applied filter.
  // - xdr-filter-header: the entire panel for specifying filter conditions.
  // - pan-graph-query-builder: the entire condition builder for Custom Rule (Simple Mode).
  // - cspm-json-rule-collapsinator, cspm-json-rule-flat-renderer, cspm-json-rule-property-picker: raw JSON in the Custom Rule "JSON Rule" tab.
  // - pan-json-viewer-line: the generic raw JSON viewer.
  // - u-tag-grid span: display of user-added tags (chips) in a tag input field.
  // - pan-key-value-tags-cell-renderer: the "Tags" column in the Asset Inventory list.
  //
  // The following (group 2) are identifiers/names/free text that happen to collide with the fixed dictionary.
  // The fixed dictionary always excludes them because exact/partial matching would mistranslate them, but the
  // Translator API translates whole sentences and doesn't have the same problem. So dynamic translation (AI
  // translation / MT_ELIGIBLE_SELECTOR) generally does target these (except items individually marked "always excluded").
  // - .dataset-item, cas-recommended-policy-renderer, [role="gridcell"][col-id="RULE_NAME"],
  //   query-name-editor > .name-container > span.ng-star-inserted:not(.placeholder), pan-policy-name-cell-renderer,
  //   pan-data-profiles-cell-renderer, dspm-data-pattern-name-cell-renderer, [role="gridcell"][col-id="xdm__asset__name"]:
  //   free-text identifiers/names the user entered, such as the "Name" column in various list grids.
  //   (dspm-data-pattern-name-cell-renderer is also not added to MT_ELIGIBLE_SELECTOR and is always excluded, per user instruction.)
  // - asm-inventory-origin-statement, asm-inventory-origin-statement ~ ul, idn-top-identity-issue,
  //   cspm-rule-side-panel-remediation-tab, .notification-content: asset attribution evidence, Top Issues
  //   problem titles, remediation step text, notification body (all tenant-specific free text).
  // - u-grid[pangridloadmetric="case"] [role="gridcell"][col-id="NAME"]: the "Case name" column in the case list
  //   (col-id="NAME" is also used by other grids, so scoped under a <u-grid> with pangridloadmetric="case").
  // - xdr-case-header h1: the heading on the case detail screen (the same case name).
  // - xdr-case-issues-feed u-timeline-title p: the title of each issue in the case detail "Issues" feed.
  // - [pangridloadmetric="issue"] [role="gridcell"][col-id="alert_name"] .text: the "Name" column (detection
  //   pattern name) in the "Issues and Insights" tab grid. This grid is used by both u-grid and secdo-grid, so
  //   it's scoped only by the pangridloadmetric attribute (no tag name) to match on either screen.
  // - xdr-incident-creation-desc .ite-entity-name: an issue name embedded within the "Timeline" tab's description.
  //   Now redundant with .timeline-event-desc below (which already covers this ancestor) and, per user
  //   instruction, also no longer added to MT_ELIGIBLE_SELECTOR — kept here only for clarity.
  // - xdr-record-data-drawer u-icon[panseverityicon] + span: each issue name in the "Grouped Records" detail drawer.
  // - xdr-issue-focus-area-header h3 span[utitle]: the issue name in the issue focus area (detail panel) heading.
  // - cspm-rules [role="gridcell"][col-id="name"]: the "Rule name" column in the cloud security rules list.
  // - [role="gridcell"][col-id="RULE_NAME"]: the "Rule name" column in the cloud workload rules list.
  // - pan-compliance-control-rules-tab [role="gridcell"][col-id="NAME"]: the "Rule name" column in the compliance
  //   control detail "Rules" tab (col-id="NAME" is also used by other grids, so scoped under this component).
  // - cspm-rule-side-pan-header h3[data-testid="cspm-rule-title"],
  //   .pan-drawer-with-cards-container:has(cspm-rule-side-pan) .pan-drawer-card-toggle-title:
  //   the rule's own name in the cloud security rule detail side panel (both the heading and the collapsible
  //   drawer tab; the latter is a generic drawer component's title, so scoped to the CSPM rule side panel via :has()).
  // - cspm-rule-side-panel-details-tab [aria-label="Rule Description"]: the "Description" field (free text) on the same side panel.
  // - cas-top-item [class*="font-bold"]: the item title in AppSec's "Top issues/policies to address" widget.
  // - u-grid[pangridloadmetric="issue"] [role="gridcell"][col-id="alert_category"]: the "Category" column in the "Issues" list.
  //   Important: this column is matched against real (English) data via a free-text "Contains" filter, so
  //   translating the display would make Japanese filter values fail to match the real data, returning zero
  //   results (verified on a live instance). Excluded from both the fixed dictionary and AI translation.
  // - .markdown-content: the generic area for Markdown-formatted guidance/remediation steps. Always excluded on
  //   the fixed-dictionary side to keep translation of the whole block consistent when dynamic translation is ON.
  // - pan-fix-details p[utext]:not([color="placeholder"]): each Step's body text under "Manual Steps". Excluded
  //   because actual UI element names etc. within the body can exactly match other fixed-dictionary entries,
  //   causing partial Japanese to leak in.
  // - xdr-action-description-renderer: the "Description" column in the Action Center "All Actions" list.
  //   Excluded entirely because fixed action-type wording mixes with dynamic values (endpoint name/version
  //   number) and connecting words within a single cell.
  // - xdr-mitre-matrix .matrix-cell.technique: technique/sub-technique names (400+) in each cell of the
  //   "Select tactics and techniques" modal (MITRE ATT&CK); some cells are single words and risk colliding with
  //   the exact-match dictionary. Tactic names (column headers) are few, stable, and already translated
  //   individually via the fixed dictionary (common.js), so they're not affected.
  // - secdo-inline-edit: a generic inline-edit component (e.g. a query's "Add Description..." field). Excluded
  //   from both the fixed dictionary and AI translation (also not added to MT_ELIGIBLE_SELECTOR) because it's
  //   contenteditable text the user is actively typing/editing; translating it would overwrite input in progress.
  // - .script-helper-items: the command/script reference list (function names, descriptions, argument names,
  //   argument descriptions) in the Script Helper panel's "API Docs" tab. Argument names are often single words
  //   like "user" that exactly match generic fixed-dictionary entries and get unintentionally translated, so
  //   it's excluded from both the fixed dictionary and AI translation (not added to MT_ELIGIBLE_SELECTOR either,
  //   since the same kind of identifiers appear mixed into the descriptions too, which sentence-level AI
  //   translation could also mistranslate).
  // - input[u-search-input]: the placeholder attribute ("Search") of the app-wide generic search box. Most
  //   search boxes do a partial match against real (English) data, so typing Japanese wouldn't match anything.
  //   Translating just the placeholder to "検索" would be misleading, so only this attribute is excluded
  //   (other "Search" text elsewhere is still translated via the dictionary as usual).
  // - pan-assessment-profile-wizard-summary span[variant="sm-normal"]: the value-side spans (profile name,
  //   description, standard, asset group name) listing entered content in the confirmation step of the "New
  //   Assessment Profile" creation wizard. Excluded from both the fixed dictionary and AI translation as
  //   tenant-specific free text (the label side is distinguished by the variant attribute and not targeted).
  // - [role="gridcell"][col-id="DESCRIPTION"]: the "Description" column in list grids (e.g. Assessment Profiles).
  //   User-entered free text; excluded broadly rather than scoped to one screen. Since free text can be
  //   translated safely by AI, it's also added to MT_ELIGIBLE_SELECTOR.
  // - cas-recommendations-panel p[ucardcontent], cas-recommendations-panel u-card-title: the body and title of
  //   each card in the "AI Recommendations" panel. Both are unified under AI translation so new recommendation
  //   phrasing is kept up with (targeting only one would mix translated and original text).
  // - [role="gridcell"][col-id="RULE_DESCRIPTION"]: the "Description" column in the cloud workload rules list
  //   (a long free-text string that differs per rule). Excluded for the same reason as the DESCRIPTION column.
  // - [role="gridcell"][col-id="RULE_REMEDIATION"]: the "Remediation" column in the same grid. Excluded for the same reason.
  // - cspm-rules [role="gridcell"][col-id="description"], xdr-asm-rules [role="gridcell"][col-id="DESCRIPTION"],
  //   xdr-asm-rules [role="gridcell"][col-id="REMEDIATION_GUIDANCE"],
  //   [pangridloadmetric="issue"] [role="gridcell"][col-id="alert_description"] .rule-inner-content,
  //   [role="gridcell"][col-id="CVE_DESCRIPTION"], xdr-record-data-drawer p[color="placeholder"] + p[color="bold"],
  //   pan-highlight-text span[utext], xdr-case-description, xdr-case-issues-feed p[uhovercardtrigger],
  //   xdr-case-timeline-list p[utext], #vulnerability-description, cas-description-evidence,
  //   dspm-issue-evidence div[class*="max-w-[800px]"],
  //   div:has(a[href^="/configuration/market/browse/"]) > p[utext][color="placeholder"], top-incidents-widget .text-value:
  //   a batch exclusion of various "Description"-type free text across screens (CSPM/ASM rules, CVEs, cases,
  //   issues, vulnerabilities, Marketplace integrations, evidence panels, etc.), all already targeted by AI
  //   translation via MT_ELIGIBLE_SELECTOR.
  // - json-tree-view .json-tree-data: the tree display part of "raw data (JSON)" modals such as asset detail.
  //   It shows API field path names plus tenant-specific real data (resource names, counts, IDs, etc.), and part
  //   of that real data can coincidentally exact-match UI wording from other screens (e.g. "AWS IAM Role" ->
  //   "AWS IAMロール"), a confirmed bug where just that value gets translated and ends up mixed with other
  //   values in the same array. Not targeted by either the fixed dictionary or AI translation (the header
  //   portion is unaffected and translated normally).
  // - dspm-ai-asset-instructions p[utext][variant="xs-normal"]: the value portion of the "Description and
  //   Instructions" accordion in the AI agent asset detail panel (free text per agent; instructions can be a long system prompt).
  // - pan-panel-section[header="Description"] p: the body text of the "Description" section in the supply
  //   chain tool panel (free text that differs per tool; the heading is unaffected).
  // - pan-panel-section[header="Highlights"] p: the body text of the "Highlights" section in the Package
  //   Explorer (free text that differs per package; the heading is unaffected).
  // - .p-dropdown-filter: the placeholder of PrimeNG's dropdown/multiselect filter input. Never translated
  //   (regardless of dynamic translation ON/OFF), per user instruction. Also not added to MT_ELIGIBLE_SELECTOR.
  // - dspm-data-profiles-view-modal pan-tags-list: the "Data Profile Name" name tag itself in the data profile
  //   detail modal. Never translated (including custom profile names), per user instruction. Also not added to the MT target.
  // - cwp-policies-wizard-summary span[color="placeholder"] + span[data-tooltip-trigger],
  //   cwp-policies-wizard-summary span[color="placeholder"] + div span[utext]: the "Name" and "Description"
  //   field values (tenant free input) in the cloud workload protection policy creation wizard's confirmation step.
  // - [role="gridcell"][col-id="ISSUE_NAME"]: the "Name" column in the vulnerability Issues list (free text
  //   combining CVE ID, package name, and asset name, differing per row).
  // - [role="gridcell"][col-id="REMEDIATION"]: the "Remediation" column in the same grid (free text differing per row).
  // - label[for^="arguments-"] span[data-slot="label"], label[for^="outputs-"] span[data-slot="label"]:
  //   the names of the "Arguments"/"Outputs" themselves in the action registration wizard (technical identifiers
  //   from the script/command definition, not natural language). Scoped by an id prefix match; never translated
  //   per user instruction, and also not added to the MT target.
  // - pan-agents-hub-agent-card p[data-tooltip-trigger][variant="md-medium"],
  //   pan-agents-hub-agent-card section p[utext][variant="sm-normal"]: the "Name" and "Description" of each
  //   agent in the AI agent hub's agent card list (free text including both built-in and custom agents; the
  //   "Author" field is a separate element and unaffected).
  // - pan-agents-hub-action-card p[data-tooltip-trigger][variant="md-medium"],
  //   pan-agents-hub-action-card section p[utext][variant="sm-normal"]: the "Name" and "Description" of each
  //   action in the same hub's "Actions" tab action card list (same structure and reasoning as the agent tab).
  // - button[role="checkbox"][aria-describedby$="-description"] + label + p[id$="-description"]: the
  //   description text of each built-in action (100+) in the action selection wizard. With no specific tag to
  //   key off, matched generically by structure (checkbox -> label -> description, as siblings).
  // - xdr-case-task-pending p: the description of a pending automation task shown on the case screen (free text
  //   that differs per task type; can appear multiple times, once per pending task card).
  // - pan-action-cards-list u-label[data-slot="label"]: the title of each recommended-fix action card in the
  //   issue focus area's "Work Plan" resolution tab (free text that differs per issue; can appear multiple
  //   times, once per recommended action).
  // - .timeline-event-desc: the description sentence of each event in the case "Timeline" tab (covers every
  //   event-type renderer, e.g. xdr-auto-update-desc, xdr-alerts-added-desc, xdr-incident-creation-desc). Per
  //   user instruction, always excluded (also NOT added to MT_ELIGIBLE_SELECTOR) because AI translation
  //   accuracy on this sentence was poor, so it stays in English regardless of dynamic translation ON/OFF.
  const RAW_IDENTIFIER_SELECTOR ='.monaco-editor, .CodeMirror, [class*="monaco-editor"], .helper-card, query-form, .task-library-panel, .joint-paper, .playbook-tabs-container-wrapper, .playbook-right-panel, #right-shoulder, .xsoar-object-library-content, .integration-shoulder, .agentix-right-panel, .prompts-container, .war-room-dropzone, bioc-indicator, xdr-file-retrieval-field .list-wrapper, secdo-generic-list .list-items, .single-closed-filter-content, xdr-filter-header, pan-graph-query-builder, cspm-json-rule-collapsinator, cspm-json-rule-flat-renderer, cspm-json-rule-property-picker, pan-json-viewer-line, u-tag-grid span, pan-key-value-tags-cell-renderer, .dataset-item, cas-recommended-policy-renderer, [role="gridcell"][col-id="RULE_NAME"], query-name-editor > .name-container > span.ng-star-inserted:not(.placeholder), pan-policy-name-cell-renderer, pan-data-profiles-cell-renderer, dspm-data-pattern-name-cell-renderer, [role="gridcell"][col-id="xdm__asset__name"], asm-inventory-origin-statement, asm-inventory-origin-statement ~ ul, idn-top-identity-issue, cspm-rule-side-panel-remediation-tab, .notification-content, u-grid[pangridloadmetric="case"] [role="gridcell"][col-id="NAME"], xdr-case-header h1, xdr-case-issues-feed u-timeline-title p, [pangridloadmetric="issue"] [role="gridcell"][col-id="alert_name"] .text, xdr-incident-creation-desc .ite-entity-name, xdr-record-data-drawer u-icon[panseverityicon] + span, xdr-issue-focus-area-header h3 span[utitle], cspm-rules [role="gridcell"][col-id="name"], cas-top-item [class*="font-bold"], u-grid[pangridloadmetric="issue"] [role="gridcell"][col-id="alert_category"], .markdown-content, pan-fix-details p[utext]:not([color="placeholder"]), xdr-action-description-renderer, xdr-mitre-matrix .matrix-cell.technique, secdo-inline-edit, .script-helper-items, input[u-search-input], pan-assessment-profile-wizard-summary span[variant="sm-normal"], [role="gridcell"][col-id="DESCRIPTION"], cas-recommendations-panel p[ucardcontent], cas-recommendations-panel u-card-title, [role="gridcell"][col-id="RULE_DESCRIPTION"], cspm-rules [role="gridcell"][col-id="description"], xdr-asm-rules [role="gridcell"][col-id="DESCRIPTION"], xdr-asm-rules [role="gridcell"][col-id="REMEDIATION_GUIDANCE"], [pangridloadmetric="issue"] [role="gridcell"][col-id="alert_description"] .rule-inner-content, [role="gridcell"][col-id="CVE_DESCRIPTION"], xdr-record-data-drawer p[color="placeholder"] + p[color="bold"], pan-highlight-text span[utext], xdr-case-description, xdr-case-issues-feed p[uhovercardtrigger], xdr-case-timeline-list p[utext], #vulnerability-description, cas-description-evidence, dspm-issue-evidence div[class*="max-w-[800px]"], div:has(a[href^="/configuration/market/browse/"]) > p[utext][color="placeholder"], top-incidents-widget .text-value, json-tree-view .json-tree-data, dspm-ai-asset-instructions p[utext][variant="xs-normal"], pan-panel-section[header="Description"] p, pan-panel-section[header="Highlights"] p, .p-dropdown-filter, [role="gridcell"][col-id="XDM_FINDING_NAME"], [role="gridcell"][col-id="XDM_FINDING_DESCRIPTION"], dspm-data-profiles-view-modal p[color="placeholder"] + p[utext], dspm-data-profiles-view-modal pan-tags-list, [role="gridcell"][col-id="name"]:has(pan-data-profiles-cell-renderer) + [role="gridcell"][col-id="description"], [role="gridcell"][col-id="name"]:has(dspm-data-pattern-name-cell-renderer) + [role="gridcell"][col-id="description"], pan-compliance-control-rules-tab [role="gridcell"][col-id="NAME"], cspm-rule-side-pan-header h3[data-testid="cspm-rule-title"], .pan-drawer-with-cards-container:has(cspm-rule-side-pan) .pan-drawer-card-toggle-title, cspm-rule-side-panel-details-tab [aria-label="Rule Description"], [role="gridcell"][col-id="RULE_REMEDIATION"], cwp-policies-wizard-summary span[color="placeholder"] + span[data-tooltip-trigger], cwp-policies-wizard-summary span[color="placeholder"] + div span[utext], [role="gridcell"][col-id="ISSUE_NAME"], [role="gridcell"][col-id="REMEDIATION"], pan-agents-hub-agent-card p[data-tooltip-trigger][variant="md-medium"], pan-agents-hub-agent-card section p[utext][variant="sm-normal"], button[role="checkbox"][aria-describedby$="-description"] + label + p[id$="-description"], pan-agents-hub-action-card p[data-tooltip-trigger][variant="md-medium"], pan-agents-hub-action-card section p[utext][variant="sm-normal"], label[for^="arguments-"] span[data-slot="label"], label[for^="outputs-"] span[data-slot="label"], xdr-case-task-pending p, pan-action-cards-list u-label[data-slot="label"], .timeline-event-desc';

  /**
   * Determine whether an element (or a text node's parent) is inside an area excluded from the fixed dictionary.
   * Note: even when true, it may still not be excluded from AI translation (dynamic translation) — that's judged separately.
   */
  function isInsideCodeEditor(element) {
    return !!(element && element.closest && element.closest(RAW_IDENTIFIER_SELECTOR));
  }

  // The area targeted for fallback translation by AI translation (Chrome's built-in Translator API). Only when
  // dynamic translation is ON, text that didn't match the dictionary is sent here to the Translator API. Many
  // entries overlap with RAW_IDENTIFIER_SELECTOR (excluded by the fixed dictionary but allowed for AI
  // translation). Due to translation-accuracy issues, we no longer target "everything that used to be excluded"
  // uniformly; targets are specified individually, selector by selector.
  const MT_ELIGIBLE_SELECTOR = [
    // The "Case name" column in the case list grid.
    'u-grid[pangridloadmetric="case"] [role="gridcell"][col-id="NAME"]',
    // The description on the case detail screen (long free text; also excluded on the fixed-dictionary side).
    'xdr-case-description',
    // The heading on the case detail screen (the case name).
    'xdr-case-header h1',
    // The title of each issue in the case detail "Issues" feed.
    'xdr-case-issues-feed u-timeline-title p',
    // The description of each issue in the same feed (shown as a hover card; also excluded on the fixed-dictionary side).
    'xdr-case-issues-feed p[uhovercardtrigger]',
    // The description of each record in the case detail "Activity History" (also excluded on the fixed-dictionary side).
    'xdr-case-timeline-list p[utext]',
    // The "Name" column (detection pattern name) in the "Issues and Insights" tab grid.
    '[pangridloadmetric="issue"] [role="gridcell"][col-id="alert_name"] .text',
    // The "Description" column of the same grid (free text shown as a hover card; also excluded on the fixed-dictionary side).
    '[pangridloadmetric="issue"] [role="gridcell"][col-id="alert_description"] .rule-inner-content',
    // The manual remediation steps (numbered free text) in the "Select Action" modal. :not([color]) excludes the Step number label.
    'pan-fix-details p[utext]:not([color])',
    // The description in the "Grouped Records" detail drawer (also excluded on the fixed-dictionary side).
    'xdr-record-data-drawer p[color="placeholder"] + p[color="bold"]',
    // Each issue name in the same drawer's "Issues" list.
    'xdr-record-data-drawer u-icon[panseverityicon] + span',
    // The issue name in the issue focus area (detail panel) heading.
    'xdr-issue-focus-area-header h3 span[utitle]',
    // The free text in the "Description" field on the same panel (also excluded on the fixed-dictionary side).
    'pan-highlight-text span[utext]',
    // The "Rule name" column in the cloud security rules list.
    'cspm-rules [role="gridcell"][col-id="name"]',
    // The "Description" column of the same grid (long free text; already excluded on the fixed-dictionary side too).
    'cspm-rules [role="gridcell"][col-id="description"]',
    // The "Rule name" column in the cloud workload rules list.
    '[role="gridcell"][col-id="RULE_NAME"]',
    // The "Description" column of the same grid (also excluded on the fixed-dictionary side).
    '[role="gridcell"][col-id="RULE_DESCRIPTION"]',
    // The "Remediation" column of the same grid (also excluded on the fixed-dictionary side).
    '[role="gridcell"][col-id="RULE_REMEDIATION"]',
    // The "Policy name" column in the AppSec policy list (already excluded via RAW_IDENTIFIER_SELECTOR).
    'cas-recommended-policy-renderer',
    // The "Description" column in the attack surface rules list (also excluded on the fixed-dictionary side).
    'xdr-asm-rules [role="gridcell"][col-id="DESCRIPTION"]',
    // The "Remediation Guidance" column of the same grid (also excluded on the fixed-dictionary side).
    'xdr-asm-rules [role="gridcell"][col-id="REMEDIATION_GUIDANCE"]',
    // The item title (template text) in the dashboard's "Top active threats/posture cases to address" widget.
    'dspm-widget-list-item p[utext]',
    // The "Description" column in the case management dashboard's "Top open cases" widget (also excluded on the fixed-dictionary side).
    'top-incidents-widget .text-value',
    // The item title in the AI security dashboard's "Top AI threats/posture issues to address" widget.
    // :not([color]) excludes the widget's date/time display row.
    'dspm-ai-top-ai-issues-widget p[utext]:not([color])',
    // The item title in AppSec's "Top issues/policies to address" widget (cas-top-item).
    'cas-top-item [class*="font-bold"]',
    // The detection date/time display row ("First discovered on ...", etc.; template text) within the same item.
    'cas-top-item [class*="text-dep-on-background-secondary"]',
    // The item title in the data security dashboard's "Top data security issues to address" widget
    // (same structure as dspm-ai-top-ai-issues-widget but a different tag, so specified separately). :not([color]) excludes the date/time display row.
    'dspm-top-issues-widget p[utext]:not([color])',
    // The "CVE description" column in the vulnerability management CVE list (also excluded on the fixed-dictionary side).
    '[role="gridcell"][col-id="CVE_DESCRIPTION"]',
    // Each notification body in the Notification Center (always excluded on the fixed-dictionary side; targeted here for AI translation only when dynamic translation is ON).
    '.notification-content',
    // The title/body of the generic "inline message" banner. Per user instruction, a "static-first" policy
    // (not added to RAW_IDENTIFIER_SELECTOR; dictionary matches take priority and only unmatched text falls back to AI translation).
    'u-inline-message-title',
    'u-inline-message-description',
    // The filter value/field selection dropdown panel (PrimeNG p-multiselect). The displayed label is only
    // cosmetic, since selection is done by the internal value, so translating it doesn't affect searching.
    // Dictionary matches take priority; only unmatched text is targeted.
    '.secdo-filter-dropdown-panel-v2',
    // The value part of "CISA Required Action" in the vulnerability detail panel (free text that differs per CVE).
    'pan-panel-property[name="CISA Action Required"] .field-value',
    // The "Vulnerability Description" section in the vulnerability detail panel (also excluded on the fixed-dictionary side); the heading itself is unaffected.
    '#vulnerability-description',
    // The description of each Marketplace integration (free text that differs per integration; also excluded on the fixed-dictionary side).
    'div:has(a[href^="/configuration/market/browse/"]) > p[utext][color="placeholder"]',
    // The generic area for Markdown-formatted guidance/remediation steps (always excluded on the fixed-dictionary side; see the comment above for details).
    '.markdown-content',
    // The attack-technique description within the DSPM evidence display in the issue detail panel (also excluded on the fixed-dictionary side).
    'dspm-issue-evidence div[class*="max-w-[800px]"]',
    // (Note: each Step body under Manual Steps is already covered above by 'pan-fix-details p[utext]:not([color])'.)
    // NOTE: 'pan-pxo-renderer[extensionkey="panel-evidence-section"] p' used to be here, intended only for the
    // "Remediation" field's recommended-action description in the issue detail panel's "Evidence" tab. It was
    // removed per user instruction because the selector matches every <p> in that whole evidence panel, not
    // just that one field — it was also sweeping up static field labels (Exploitable, Fix Available, CVSS
    // Severity, EPSS Score, Vulnerability ID, Policy, Package Name, File Path, Detected OS, etc.) into Dynamic
    // Translation, when the issue detail panel should only send the issue name and description to AI
    // translation. If a genuinely tenant-specific "Remediation" description under this panel needs AI
    // translation, target it with a narrower, more specific selector instead of the whole panel's <p> tags.
    // The description evidence within "Code Evidence" (also excluded on the fixed-dictionary side).
    'cas-description-evidence',
    // The function/keyword reference cards in XQL Search's "XQL Helper" panel (always excluded on the fixed-dictionary side).
    '.helper-card',
    // The "Description" column in the Action Center "All Actions" list (excluded entirely on the fixed-dictionary side).
    'xdr-action-description-renderer',
    // Each playbook card in the Playbook catalog (Card Explorer) — name, By/Pack label, and description (none added to the fixed dictionary).
    'xdr-playbook-catalog-card',
    // The technique name in each cell (400+) of the "Select tactics and techniques" modal (MITRE ATT&CK).
    'xdr-mitre-matrix .matrix-cell.technique',
    // The "Description" column in list grids (e.g. Assessment Profiles; always excluded on the fixed-dictionary side).
    '[role="gridcell"][col-id="DESCRIPTION"]',
    // The body and title of each card in the "AI Recommendations" panel (always excluded on the fixed-dictionary
    // side; both are targeted since targeting only one would mix translated and original text).
    'cas-recommendations-panel p[ucardcontent]',
    'cas-recommendations-panel u-card-title',
    // The value part of the "Agent Description and Instructions" accordion in the AI agent asset detail panel (also excluded on the fixed-dictionary side).
    'dspm-ai-asset-instructions p[utext][variant="xs-normal"]',
    // The body text of the "Description" section in the supply chain tool panel (heading not included).
    'pan-panel-section[header="Description"] p',
    // The body text of the "Highlights" section in the Package Explorer (heading not included).
    'pan-panel-section[header="Highlights"] p',
    // The description of each card in the supply chain attacks list. Known attacks exact-match the fixed
    // dictionary in supply-chain-attacks.js, which takes priority (this selector is not added to
    // RAW_IDENTIFIER_SELECTOR so it doesn't interfere with the fixed dictionary). Only descriptions of new,
    // not-yet-registered attacks fall back here when dynamic translation is ON.
    'cas-attacks-card p[utext]',
    // The body text of the "Description" section in the supply chain attack detail panel (same attack
    // description as above, same policy). Heading not affected.
    'cas-description-section p[utext]',
    // The "Basis for Attribution" section on the asset detail screen (a statement plus the reason list <ul>
    // right after it). Tenant-specific free text, already excluded from the fixed dictionary via RAW_IDENTIFIER_SELECTOR.
    'asm-inventory-origin-statement, asm-inventory-origin-statement ~ ul',
    // The "Name" and "Description" columns in the Findings list grid (also excluded on the fixed-dictionary side).
    '[role="gridcell"][col-id="XDM_FINDING_NAME"]',
    '[role="gridcell"][col-id="XDM_FINDING_DESCRIPTION"]',
    // The value right after the "Description" label in the data profile detail modal (also excluded on the fixed-dictionary side).
    'dspm-data-profiles-view-modal p[color="placeholder"] + p[utext]',
    // The "Description" column in the data profile list grid. Scoped to col-id="description" right after the
    // "Name" column (pan-data-profiles-cell-renderer) so the same col-id in other grids isn't mistakenly
    // included (also excluded on the fixed-dictionary side).
    '[role="gridcell"][col-id="name"]:has(pan-data-profiles-cell-renderer) + [role="gridcell"][col-id="description"]',
    // The "Description" column in the data topic list grid. Per user instruction under a "static-first"
    // policy, unlike the Data Profile description this is NOT excluded on the RAW_IDENTIFIER_SELECTOR side.
    // Scoped to col-id="description" right after the "Name" column (dspm-data-topic-name-cell-renderer).
    '[role="gridcell"][col-id="name"]:has(dspm-data-topic-name-cell-renderer) + [role="gridcell"][col-id="description"]',
    // The "Description" column in the data pattern list grid. Scoped to col-id="description" right after the
    // "Name" column (dspm-data-pattern-name-cell-renderer; the pattern name itself is always excluded; also excluded on the fixed-dictionary side).
    '[role="gridcell"][col-id="name"]:has(dspm-data-pattern-name-cell-renderer) + [role="gridcell"][col-id="description"]',
    // The "Rule name" column in the compliance control detail "Rules" tab grid (also excluded on the fixed-dictionary side).
    'pan-compliance-control-rules-tab [role="gridcell"][col-id="NAME"]',
    // The rule's own name in the cloud security rule detail side panel (heading and collapsible drawer tab; also excluded on the fixed-dictionary side).
    'cspm-rule-side-pan-header h3[data-testid="cspm-rule-title"]',
    '.pan-drawer-with-cards-container:has(cspm-rule-side-pan) .pan-drawer-card-toggle-title',
    // The "Description" field on the same side panel (also excluded on the fixed-dictionary side).
    'cspm-rule-side-panel-details-tab [aria-label="Rule Description"]',
    // The values of the "Name" and "Description" fields in the CWP policy creation wizard's confirmation step
    // (also excluded on the fixed-dictionary side). Scoped using the immediately preceding placeholder-colored
    // label as a cue, so other values (e.g. "Evaluation Stage") aren't mistakenly included.
    'cwp-policies-wizard-summary span[color="placeholder"] + span[data-tooltip-trigger]',
    'cwp-policies-wizard-summary span[color="placeholder"] + div span[utext]',
    // The "Name" column in the vulnerability Issue list grid (also excluded on the fixed-dictionary side).
    '[role="gridcell"][col-id="ISSUE_NAME"]',
    // The "Remediation" column of the same grid (also excluded on the fixed-dictionary side).
    '[role="gridcell"][col-id="REMEDIATION"]',
    // The "Name" and "Description" in the AI agent hub's agent card list (also excluded on the fixed-dictionary side).
    'pan-agents-hub-agent-card p[data-tooltip-trigger][variant="md-medium"]',
    'pan-agents-hub-agent-card section p[utext][variant="sm-normal"]',
    // The description of each built-in action in the action selection wizard (matched by structure; also excluded on the fixed-dictionary side).
    'button[role="checkbox"][aria-describedby$="-description"] + label + p[id$="-description"]',
    // The "Name" and "Description" in the same hub's "Actions" tab action card list (also excluded on the fixed-dictionary side).
    'pan-agents-hub-action-card p[data-tooltip-trigger][variant="md-medium"]',
    'pan-agents-hub-action-card section p[utext][variant="sm-normal"]',
    // The description of a pending automation task on the case screen (also excluded on the fixed-dictionary side; can appear multiple times, once per pending task card).
    'xdr-case-task-pending p',
    // The title of each recommended-fix action card in the "Work Plan" resolution tab (also excluded on the fixed-dictionary side; can appear multiple times, once per recommended action).
    'pan-action-cards-list u-label[data-slot="label"]',
  ].join(', ');

  /**
   * Determine whether an element is within the AI-translation (dynamic translation) target area (MT_ELIGIBLE_SELECTOR).
   */
  function isMtEligible(element) {
    // Always false if dynamic translation itself is disabled by the build flag (belt-and-suspenders).
    if (!DYNAMIC_TRANSLATION_ALLOWED) return false;
    // Guard against closest('') throwing when MT_ELIGIBLE_SELECTOR is an empty string.
    if (!MT_ELIGIBLE_SELECTOR) return false;
    return !!(element && element.closest && element.closest(MT_ELIGIBLE_SELECTOR));
  }

  // A case-insensitive fallback index (lowercased key -> translation) used when no exact match is found.
  const exactLowerLookup = new Map();
  for (const [key, value] of Object.entries(dictionary.exact)) {
    const lowerKey = key.toLowerCase();
    if (!exactLowerLookup.has(lowerKey)) {
      exactLowerLookup.set(lowerKey, value);
    }
  }

  // A set containing only the fixed dictionary's "translations" (values). For selectors that are targeted by
  // both the fixed dictionary and AI translation (MT_ELIGIBLE_SELECTOR) (e.g. the supply chain attacks list),
  // Japanese text already written by the fixed dictionary can get processed again as a text node, e.g. after
  // an Angular re-render. That Japanese text wouldn't match a dictionary key (English) and could be mistaken
  // for untranslated text, so this set detects "text that is already the fixed dictionary's own translation"
  // and excludes it from AI translation.
  const dictionaryOutputValues = new Set(Object.values(dictionary.exact));

  /**
   * Match a single piece of text against the dictionary and return the translation. Returns null if there's no match (unknown text/skip target).
   */
  function translateText(rawText) {
    // Trim leading/trailing whitespace and normalize newlines/tabs/runs of spaces to a single space before
    // matching, since Angular template formatting can mix in newlines/tabs even when text looks like one line.
    // Also explicitly strip invisible characters that \s doesn't match, such as zero-width space (U+200B).
    const text = rawText
      .replace(/[​-‍﻿]/g, '')
      .trim()
      .replace(/\s+/g, ' ');
    if (!text) return null;

    // 1. Skip targets (text that's too dynamic to translate reliably)
    for (const skipPattern of dictionary.skip) {
      if (skipPattern.test(text)) return null;
    }

    // 2. Exact match
    if (Object.prototype.hasOwnProperty.call(dictionary.exact, text)) {
      return dictionary.exact[text];
    }

    // 3. Number + fixed-wording pattern
    for (const { re, tpl } of dictionary.patterns) {
      const match = text.match(re);
      if (match) {
        return tpl.replace(/\$(\d)/g, (_, i) => match[Number(i)] ?? '');
      }
    }

    // 4. Fallback for cases that differ only in letter case
    const lowerMatch = exactLowerLookup.get(text.toLowerCase());
    if (lowerMatch !== undefined) {
      return lowerMatch;
    }

    return null; // Unknown text
  }

  // ── AI translation (dynamic translation) feature ──────────────────────────────────────────
  // Dynamically translates free text that didn't match the dictionary, using Chrome's built-in Translator API. Toggled ON/OFF from the popup.

  // Build flag that disables the dynamic translation feature entirely. Setting CORTEX_DYNAMIC_TRANSLATION_ENABLED
  // to false in dynamic-translation-config.js (injected before content.js) forces it permanently OFF regardless
  // of the popup's ON/OFF setting (a switch to disable the feature itself, e.g. for internal policy). Falls
  // back to the safe side (true) when not injected.
  const DYNAMIC_TRANSLATION_ALLOWED =
    typeof CORTEX_DYNAMIC_TRANSLATION_ENABLED === 'undefined'
      ? true
      : CORTEX_DYNAMIC_TRANSLATION_ENABLED;

  // Build flag that forces dynamic translation permanently ON. Setting CORTEX_DYNAMIC_TRANSLATION_ALWAYS_ON to
  // true treats mtEnabled as always true regardless of the popup or chrome.storage.local value
  // (DYNAMIC_TRANSLATION_ALLOWED being false still takes priority over this).
  const DYNAMIC_TRANSLATION_ALWAYS_ON =
    typeof CORTEX_DYNAMIC_TRANSLATION_ALWAYS_ON === 'undefined'
      ? false
      : CORTEX_DYNAMIC_TRANSLATION_ALWAYS_ON;

  // The current ON/OFF setting. Loaded from chrome.storage.local, and changes are also watched. Always false
  // if ALLOWED is false, and always fixed to true if ALWAYS_ON is true.
  let mtEnabled = false;

  // Creating a Translator instance has a cost, so it's created only once on first use and the promise is cached for reuse.
  let translatorPromise = null;

  // The LanguageDetector instance is likewise created only once on first use and reused.
  let languageDetectorPromise = null;

  // Set to true when Translator.create()/LanguageDetector.create() failed with NotAllowedError, meaning the
  // on-device model hasn't been downloaded yet and the call wasn't made inside a user gesture. content.js's
  // own first attempt always runs automatically (page load / MutationObserver), with no such gesture, so it
  // fails this way on a fresh Chrome profile. Rather than requiring the user to notice this and reload the
  // page, a listener on the very first genuine interaction with the page (see retryModelCreationOnUserGesture
  // below) retries creation from inside that gesture, which Chrome accepts as authorization to start the
  // download. The user doesn't need to do or notice anything special; translation simply resumes once the
  // download finishes.
  let translatorNeedsGesture = false;
  let languageDetectorNeedsGesture = false;

  // Cache so the same source text isn't sent to the API repeatedly.
  const mtCache = new Map();

  // Tracks nodes that currently have a translation request in flight, to prevent duplicate requests for the same node.
  const mtPending = new WeakSet();

  // The minimum confidence at which the language LanguageDetector determines is considered to match the target
  // language (getMtTargetLanguage()). Since detect() returns candidates ordered by confidence (0.0-1.0), if the
  // top candidate matches the target language and its confidence is at or above this value, we judge the text
  // as "already written in the target language" and skip AI translation.
  const LANGUAGE_DETECTOR_CONFIDENCE_THRESHOLD = 0.6;

  // Among text targeted for dynamic translation, if hiragana/katakana/kanji make up at least this fraction, we
  // judge it as "free text the tenant originally wrote in Japanese" and skip AI translation (displaying the
  // original text as-is, in Japanese). Since the Translator API is created with sourceLanguage fixed to 'en',
  // Japanese free text containing Latin letters (AWS/IAM, etc.) — such as description text for Data Topics/Data
  // Profiles/Data Patterns, which tenants can write directly in Japanese — could be misidentified as English,
  // sent for translation, and produce broken results; this threshold prevents that. Used only as a fallback in
  // environments where the LanguageDetector API isn't available (LanguageDetector's judgment is normally
  // preferred; see isLikelyAlreadyJapanese()).
  const JAPANESE_RATIO_SKIP_THRESHOLD = 0.2;

  // Records content written by AI translation. Prevents the MutationObserver from detecting its own writes and
  // running AI translation on them again (mistranslating Japanese into Japanese).
  const mtOutputText = new WeakMap();

  // Records the original text (English) right before it's rewritten by AI translation. Used to restore this
  // original text when dynamic translation is turned OFF.
  const mtOriginalText = new WeakMap();

  /**
   * Determine the dynamic translation ON/OFF setting (returns the fixed value if pinned by a build flag; otherwise reads chrome.storage.local).
   */
  function loadMtSetting() {
    if (!DYNAMIC_TRANSLATION_ALLOWED) return Promise.resolve(false);
    if (DYNAMIC_TRANSLATION_ALWAYS_ON) return Promise.resolve(true);
    return new Promise((resolve) => {
      try {
        chrome.storage.local.get({ mtEnabled: false }, (result) => {
          resolve(!!result.mtEnabled);
        });
      } catch (err) {
        resolve(false);
      }
    });
  }

  try {
    chrome.storage.onChanged.addListener((changes, area) => {
      if (!DYNAMIC_TRANSLATION_ALLOWED) return;
      // In always-ON mode the popup itself shouldn't exist and there should be no way to rewrite
      // chrome.storage.local, but just in case, ignore the change and keep mtEnabled fixed to true.
      if (DYNAMIC_TRANSLATION_ALWAYS_ON) return;
      if (area !== 'local' || !('mtEnabled' in changes)) return;
      mtEnabled = !!changes.mtEnabled.newValue;
      if (mtEnabled) {
        // The moment it's turned ON, rescan untranslated text on screen (no page reload needed).
        walkAndTranslate(document.body);
      } else {
        // The moment it's turned OFF, revert parts rewritten by AI translation back to the original text
        // (English) — otherwise Japanese would remain only in the already-translated spots.
        revertDynamicTranslations(document.body);
      }
    });
  } catch (err) {
    // In environments where chrome.storage isn't available, leave dynamic translation permanently OFF.
  }

  /**
   * The target language for AI translation. Reads background.js's resolveLocale() result (window.__CORTEX_LOCALE)
   * and matches it to the same language as the fixed dictionary (falls back to 'ja' when unset).
   */
  function getMtTargetLanguage() {
    return (typeof window !== 'undefined' && window.__CORTEX_LOCALE) || 'ja';
  }

  /**
   * Get (or create) an instance of Chrome's built-in Translator API. Since creating it has a cost, the promise
   * is cached and reused.
   */
  /**
   * The actual Translator.create() call, factored out so both the normal (gesture-less) first attempt and the
   * user-gesture retry (retryModelCreationOnUserGesture) share the same logic.
   */
  async function createTranslatorInstance() {
    if (typeof Translator === 'undefined') return null;
    const targetLanguage = getMtTargetLanguage();
    const availability = await Translator.availability({
      sourceLanguage: 'en',
      targetLanguage,
    });
    if (availability === 'unavailable') return null;
    return await Translator.create({ sourceLanguage: 'en', targetLanguage });
  }

  /**
   * Logs a Translator/LanguageDetector creation failure at the right severity. A NotAllowedError on the very
   * first (automatic, gesture-less) attempt is an expected, self-healing state — retryModelCreationOnUserGesture
   * below recovers from it on the page's first click/keypress — not a real problem.
   *
   * chrome://extensions' per-extension error list turns out to also list console.warn() calls (with a yellow
   * warning icon instead of a red error one), not just console.error() and uncaught exceptions as one might
   * expect. So warn-level was not enough to keep this expected, self-recovering condition off that list; it's
   * logged at 'debug' instead, which chrome://extensions does not surface at all. console.debug() output is
   * hidden by DevTools' console filter unless "Verbose" is enabled, which is the right visibility level for a
   * diagnostic detail that isn't actionable by whoever is looking at the extension's health. Anything else is a
   * genuine, unexpected failure and stays at 'error'.
   */
  function logModelCreationFailure(label, err) {
    // err.name/err.message are included directly in the log text (not just the raw err object) because
    // console output copy-pasted as plain text (e.g. from a bug report) otherwise shows only
    // "[object DOMException]", hiding the one detail needed to tell an expected NotAllowedError apart from a
    // genuine failure.
    const detail = err ? ` [${err.name || 'Error'}] ${err.message || ''}` : '';
    if (err && err.name === 'NotAllowedError') {
      console.debug(`[cortex-ja] ${label}の初期化を保留しました(初回はユーザー操作後に自動でリトライします):${detail}`, err);
    } else {
      console.error(`[cortex-ja] ${label}の初期化に失敗しました:${detail}`, err);
    }
  }

  async function getTranslator() {
    // mtEnabled should always be fixed to false, but re-check DYNAMIC_TRANSLATION_ALLOWED just in case (belt-and-suspenders).
    if (!DYNAMIC_TRANSLATION_ALLOWED) return null;
    if (!translatorPromise) {
      translatorPromise = createTranslatorInstance().catch((err) => {
        if (err && err.name === 'NotAllowedError') translatorNeedsGesture = true;
        logModelCreationFailure('Translator', err);
        return null;
      });
    }
    return translatorPromise;
  }

  /**
   * The actual LanguageDetector.create() call, factored out for the same reason as createTranslatorInstance().
   */
  async function createLanguageDetectorInstance() {
    if (typeof LanguageDetector === 'undefined') return null;
    const availability = await LanguageDetector.availability();
    if (availability === 'unavailable') return null;
    return await LanguageDetector.create();
  }

  /**
   * Get (or create) an instance of Chrome's built-in LanguageDetector API. Cached the same way as Translator.
   */
  async function getLanguageDetector() {
    // As with Translator, don't even create the instance if DYNAMIC_TRANSLATION_ALLOWED is false (belt-and-suspenders).
    if (!DYNAMIC_TRANSLATION_ALLOWED) return null;
    if (!languageDetectorPromise) {
      languageDetectorPromise = createLanguageDetectorInstance().catch((err) => {
        if (err && err.name === 'NotAllowedError') languageDetectorNeedsGesture = true;
        logModelCreationFailure('LanguageDetector', err);
        return null;
      });
    }
    return languageDetectorPromise;
  }

  /**
   * Called synchronously from inside a real user-gesture event (pointerdown/keydown/click) so that Chrome
   * treats the resulting Translator.create()/LanguageDetector.create() call as authorized to start the
   * first-time on-device model download (avoids "NotAllowedError: Requires a user gesture..."). Only actually
   * does anything if a previous gesture-less attempt already failed for that reason
   * (translatorNeedsGesture / languageDetectorNeedsGesture); otherwise it's a cheap no-op on every click/keydown.
   * Once the model becomes available, the page is rescanned so text that was left untranslated gets picked up
   * without the user needing to reload.
   */
  function retryModelCreationOnUserGesture() {
    if (translatorNeedsGesture && typeof Translator !== 'undefined') {
      translatorNeedsGesture = false;
      translatorPromise = createTranslatorInstance()
        .then((translator) => {
          if (translator) walkAndTranslate(document.body);
          return translator;
        })
        .catch((err) => {
          if (err && err.name === 'NotAllowedError') translatorNeedsGesture = true;
          logModelCreationFailure('Translator(ユーザー操作時の再試行)', err);
          return null;
        });
    }

    if (languageDetectorNeedsGesture && typeof LanguageDetector !== 'undefined') {
      languageDetectorNeedsGesture = false;
      languageDetectorPromise = createLanguageDetectorInstance().catch((err) => {
        if (err && err.name === 'NotAllowedError') languageDetectorNeedsGesture = true;
        logModelCreationFailure('LanguageDetector(ユーザー操作時の再試行)', err);
        return null;
      });
    }
  }

  // Listen (capture phase, so a page script calling stopPropagation() on its own elements can't block this)
  // for the first genuine user interaction with the page, to retry the model download from inside a real
  // gesture. Cheap to keep registered permanently: once both flags are false it's just two boolean checks.
  ['pointerdown', 'keydown', 'click'].forEach((eventName) => {
    document.addEventListener(eventName, retryModelCreationOnUserGesture, { capture: true, passive: true });
  });

  /**
   * Use the LanguageDetector API to determine whether text is already written in AI translation's target language (getMtTargetLanguage()).
   * @return {!Promise<?boolean>} true/false if it could be determined. null if LanguageDetector isn't available (the caller falls back).
   */
  async function isAlreadyTargetLanguage(text) {
    const detector = await getLanguageDetector();
    if (!detector) return null;
    try {
      const results = await detector.detect(text);
      if (!results || !results.length) return false;
      const target = getMtTargetLanguage().toLowerCase();
      const top = results[0];
      // detectedLanguage can carry a region subtag like "ja-JP", so compare only the primary language tag before the hyphen.
      const topPrimary = (top.detectedLanguage || '').split('-')[0].toLowerCase();
      return topPrimary === target && top.confidence >= LANGUAGE_DETECTOR_CONFIDENCE_THRESHOLD;
    } catch (err) {
      const detail = err ? ` [${err.name || 'Error'}] ${err.message || ''}` : '';
      console.error(`[cortex-ja] LanguageDetectorでの判定に失敗しました:${detail}`, err);
      return null;
    }
  }

  /**
   * Fallback check used when the LanguageDetector API isn't available. Estimates "whether the text is already
   * written in Japanese" from the ratio of hiragana/katakana/kanji characters (see JAPANESE_RATIO_SKIP_THRESHOLD).
   * Always false if the target language isn't ja.
   */
  function isLikelyAlreadyJapanese(normalized) {
    if (getMtTargetLanguage() !== 'ja') return false;
    const japaneseCharCount = (normalized.match(/[぀-ゟ゠-ヿ一-鿿]/g) || []).length;
    const nonSpaceLength = normalized.replace(/\s/g, '').length;
    return nonSpaceLength > 0 && japaneseCharCount / nonSpaceLength >= JAPANESE_RATIO_SKIP_THRESHOLD;
  }

  /**
   * Write an AI translation result into a text node. Leading/trailing whitespace (indentation, etc.) is carried over from the original text.
   */
  function applyMtResult(node, rawOriginal, translated) {
    const leading = rawOriginal.match(/^\s*/)[0];
    const trailing = rawOriginal.match(/\s*$/)[0];
    const newText = leading + translated + trailing;
    mtOutputText.set(node, newText);
    mtOriginalText.set(node, rawOriginal);
    if (newText !== node.textContent) {
      node.textContent = newText;
    }
  }

  /**
   * Called when AI translation (dynamic translation) is turned OFF. Walks the subtree under the root and
   * reverts only the text nodes AI translation rewrote back to the original English (dictionary-translated text is left untouched here).
   */
  function revertDynamicTranslations(root) {
    if (!(root instanceof Element) && !(root instanceof Document)) return;

    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      const original = mtOriginalText.get(node);
      if (original === undefined) continue;
      // Don't touch it if the content has already changed for some other reason (e.g. an Angular re-render). Only revert it when it's exactly the AI translation result.
      if (node.textContent === mtOutputText.get(node)) {
        node.textContent = original;
      }
      mtOutputText.delete(node);
      mtOriginalText.delete(node);
    }
  }

  /**
   * Queue a text node for AI translation (dynamic translation). Applies immediately if already cached;
   * otherwise requests it from the Translator API. Before sending, checks with the LanguageDetector API
   * whether the text is "already written in the target language" and, if so, doesn't send it and keeps the original text.
   */
  async function queueDynamicTranslation(node, rawOriginal) {
    const normalized = rawOriginal
      .replace(/[​-‍﻿]/g, '')
      .trim()
      .replace(/\s+/g, ' ');
    if (!normalized) return;
    // Text with no Latin letters (numbers, symbols, Japanese-only, etc.) doesn't need translating.
    if (!/[A-Za-z]/.test(normalized)) return;
    if (mtPending.has(node)) return;

    const cached = mtCache.get(normalized);
    if (cached !== undefined) {
      applyMtResult(node, rawOriginal, cached);
      return;
    }

    mtPending.add(node);
    try {
      // Even if it contains Latin letters, free text already written in the target language (e.g. a
      // Description the tenant wrote directly in Japanese) should be skipped and not sent for translation.
      // Use LanguageDetector's judgment if available, otherwise the character-ratio fallback judgment (isLikelyAlreadyJapanese).
      const detectorVerdict = await isAlreadyTargetLanguage(normalized);
      const alreadyTargetLanguage = detectorVerdict !== null ? detectorVerdict : isLikelyAlreadyJapanese(normalized);
      if (alreadyTargetLanguage) return;

      const translator = await getTranslator();
      const result = translator ? await translator.translate(normalized) : null;
      if (result == null) return;
      mtCache.set(normalized, result);
      // Don't write the result if, while waiting for it, translation got turned OFF, the node was removed, or the content changed.
      if (mtEnabled && node.isConnected && node.textContent === rawOriginal) {
        applyMtResult(node, rawOriginal, result);
      }
    } catch (err) {
      const detail = err ? ` [${err.name || 'Error'}] ${err.message || ''}` : '';
      console.error(`[cortex-ja] 動的翻訳に失敗しました:${detail}`, err);
    } finally {
      mtPending.delete(node);
    }
  }

  /**
   * Process a single text node. Preserves leading/trailing whitespace (indentation, etc.) while replacing only the content.
   *
   * Note: the mechanism of "once translated, mark the parent element and never process it again" was removed
   * because it caused a bug where, when Angular later re-rendered the same element's text, it reverted to
   * English and was never retranslated. Since text that's already been translated to Japanese won't
   * match a dictionary key (English) or a regex pattern in the first place, no matter how many times it's
   * processed, no retranslation or infinite loop occurs.
   */
  function processTextNode(node) {
    const parent = node.parentElement;
    if (!parent) return;
    if (SKIP_PARENT_TAGS.has(parent.tagName)) return;

    const original = node.textContent;

    // Do nothing if this is exactly the content already written by AI translation (prevents reprocessing triggered by the write's own mutation event).
    if (mtOutputText.get(node) === original) return;

    // Fixed-dictionary translation is never performed under RAW_IDENTIFIER_SELECTOR (exact/partial word
    // matching would mistranslate). This check is independent of whether it's an AI translation target.
    const dictionaryExcluded = isInsideCodeEditor(parent);

    if (!dictionaryExcluded) {
      const translated = translateText(original);
      if (translated !== null) {
        const leading = original.match(/^\s*/)[0];
        const trailing = original.match(/\s*$/)[0];
        const newText = leading + translated + trailing;
        // Don't rewrite if the content is already the same (avoids an unnecessary mutation event).
        if (newText !== original) {
          node.textContent = newText;
        }
        return;
      }
    }

    // If the dictionary couldn't translate it (or it wasn't a target), and the user has AI translation ON and
    // this area is an AI translation target, try a fallback translation via the Translator API (regardless of
    // whether it's under RAW_IDENTIFIER_SELECTOR).
    //
    // However, don't send this text to AI translation if it's exactly a fixed-dictionary translation
    // (dictionaryOutputValues). In areas targeted by both the fixed dictionary and AI translation (e.g. the
    // supply chain attacks list), Japanese text the fixed dictionary already wrote can come back through here
    // again after an Angular re-render, and sending that to AI translation would overwrite the correctly
    // fixed-translated wording.
    if (
      mtEnabled &&
      isMtEligible(parent) &&
      !dictionaryOutputValues.has(
        original.replace(/[​-‍﻿]/g, '').trim().replace(/\s+/g, ' ')
      )
    ) {
      queueDynamicTranslation(node, original);
      return;
    }

    if (!dictionaryExcluded && window.__CORTEX_JA_DEBUG__) {
      // Log unknown text (for expanding the dictionary)
      const trimmed = original.trim();
      if (trimmed) {
        console.debug('[cortex-ja] untranslated:', JSON.stringify(trimmed));
      }
    }
  }

  // The list of attributes targeted for dictionary lookup and rewriting, for title/placeholder-style attributes
  // (text that doesn't appear as an ordinary text node under native browser rendering).
  const TEXT_ATTRIBUTES = ['title', 'placeholder', 'data-placeholder', 'data-tooltip', 'utooltip'];

  /**
   * Match a single title/placeholder-style attribute's value against the dictionary and rewrite it if it matches.
   */
  function processTextAttribute(element, attrName) {
    if (!element.hasAttribute || !element.hasAttribute(attrName)) return;
    if (isInsideCodeEditor(element)) return;
    const original = element.getAttribute(attrName);
    if (!original) return;
    const translated = translateText(original);
    if (translated !== null && translated !== original) {
      element.setAttribute(attrName, translated);
    }
  }

  /**
   * Call processTextAttribute for every attribute listed in TEXT_ATTRIBUTES.
   */
  function processTextAttributes(element) {
    for (const attrName of TEXT_ATTRIBUTES) {
      processTextAttribute(element, attrName);
    }
  }

  /**
   * Walk every text node under the given root.
   */
  function walkAndTranslate(root) {
    if (!(root instanceof Element) && !(root instanceof Document)) return;

    if (root instanceof Element) {
      processTextAttributes(root);
    }
    if (root.querySelectorAll) {
      root.querySelectorAll(TEXT_ATTRIBUTES.map((a) => `[${a}]`).join(',')).forEach(processTextAttributes);
    }

    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent) return NodeFilter.FILTER_REJECT;
        if (SKIP_PARENT_TAGS.has(parent.tagName)) return NodeFilter.FILTER_REJECT;
        // Even within an area excluded from the fixed dictionary (isInsideCodeEditor), let it through if it's an AI translation target (isMtEligible). Excluded only when neither applies.
        if (isInsideCodeEditor(parent) && !isMtEligible(parent)) return NodeFilter.FILTER_REJECT;
        if (!node.textContent.trim()) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      },
    });

    let node;
    while ((node = walker.nextNode())) {
      processTextNode(node);
    }
  }

  /**
   * MutationObserver: handles parts Angular renders/updates dynamically. Rescans only added nodes to keep the performance impact down.
   *
   * Note: some Angular CDK dialogs/popovers don't add and remove their elements each time; they keep the
   * element in the DOM and control show/hide purely by toggling an attribute like data-state="open"/"closed".
   * In that case the text inside is scanned only once, and reopening it later never fires a "node added"
   * event, so it's left untranslated. To handle this, changes to visibility-related attributes are also
   * watched, and the changed element's contents are rescanned.
   */
  const VISIBILITY_ATTRIBUTES = ['data-state', 'aria-hidden', 'hidden', 'title', 'placeholder', 'data-placeholder', 'data-tooltip', 'utooltip'];

  /**
   * Start a MutationObserver that continuously scans and translates nodes Angular adds/changes dynamically.
   */
  function observeMutations() {
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const addedNode of mutation.addedNodes) {
          if (addedNode.nodeType === Node.ELEMENT_NODE) {
            walkAndTranslate(addedNode);
          } else if (addedNode.nodeType === Node.TEXT_NODE) {
            processTextNode(addedNode);
          }
        }

        if (
          mutation.type === 'characterData' &&
          mutation.target.nodeType === Node.TEXT_NODE
        ) {
          processTextNode(mutation.target);
        }

        if (
          mutation.type === 'attributes' &&
          mutation.target.nodeType === Node.ELEMENT_NODE
        ) {
          walkAndTranslate(mutation.target);
        }
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
      attributeFilter: VISIBILITY_ATTRIBUTES,
    });

    return observer;
  }

  /**
   * The extension's initialization routine. Loads the dynamic translation setting, does the first full translation pass, and starts the MutationObserver.
   */
  async function init() {
    // Load the AI translation (dynamic translation) ON/OFF setting up front.
    mtEnabled = await loadMtSetting();
    walkAndTranslate(document.body);
    observeMutations();
    // For debugging: a hook to manually rescan everything from the console (used to verify MutationObserver detection).
    window.__cortexJaRescan = () => walkAndTranslate(document.body);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
