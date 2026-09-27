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

// These two values are duplicated directly here rather than loaded via
// importScripts('dynamic-translation-config.js'). importScripts()
// occasionally failed with an unexplained "Failed to execute
// 'importScripts'...failed to load" error from Chrome itself on some
// Windows setups, so the service worker now holds its own copy of these
// two values instead. content.js still gets dynamic-translation-config.js
// injected directly, as before. When changing these values, update BOTH
// dynamic-translation-config.js and this copy.
const CORTEX_DYNAMIC_TRANSLATION_ENABLED = true;
const CORTEX_DYNAMIC_TRANSLATION_ALWAYS_ON = false;

/**
 * When the AI dynamic-translation feature itself is disabled by the build
 * flag, clicking the extension's toolbar icon shows no popup at all (e.g.
 * for an organization that doesn't even want the AI translation feature to
 * be visible). Setting popup to '' (empty string) makes a click fire
 * chrome.action.onClicked instead of opening a popup, and since no listener
 * is registered for that event, nothing happens (i.e., nothing is shown).
 *
 * The popup is likewise hidden when CORTEX_DYNAMIC_TRANSLATION_ALWAYS_ON is
 * true — not because dynamic translation is off, but because it is pinned
 * permanently on and there is no user-facing setting left to toggle.
 *
 * @return {void}
 */
function syncActionPopup() {
  const alwaysOn =
    typeof CORTEX_DYNAMIC_TRANSLATION_ALWAYS_ON === 'undefined'
      ? false
      : CORTEX_DYNAMIC_TRANSLATION_ALWAYS_ON;
  const showPopup = CORTEX_DYNAMIC_TRANSLATION_ENABLED && !alwaysOn;
  chrome.action.setPopup({
    popup: showPopup ? 'popup.html' : '',
  });
}
syncActionPopup();
chrome.runtime.onInstalled.addListener(syncActionPopup);
chrome.runtime.onStartup.addListener(syncActionPopup);

// The dictionary files shared by every currently-registered locale. Adding a new
// screen's dictionary file only needs to happen once here, since ja/ko/es/fr/de all
// register the same file list (see LOCALE_MODULES below).
const DICTIONARY_FILES = [
  'common.js',
  'cloud-command-center.js',
  'vulnerability-management.js',
  'compliance.js',
  'code-to-cloud-coverage.js',
  'rules-and-policies.js',
  'case-management.js',
  'aspm-command-center.js',
  'cortex-agentic-assistant.js',
  'data-security-command-center.js',
  'api-security-management.js',
  'asset-inventory.js',
  'cloud-security-assessment.js',
  'compliance-overview.js',
  'compliance-violation.js',
  'cortex-cloud-consumption.js',
  'data-ingestion.js',
  'kspm.js',
  'mitre-attack-framework-coverage.js',
  'nta.js',
  'application-security.js',
  'data-security.js',
  'identity-security.js',
  'cdr-command-center.js',
  'agent-management.js',
  'unmanaged-cloud-services.js',
  'cases-screen.js',
  'issues-screen.js',
  'case-scoring.js',
  'featured-fields-hosts.js',
  'featured-fields-users.js',
  'featured-fields-ip-addresses.js',
  'exposure-management.js',
  'controls-catalog.js',
  'assessment-results.js',
  'reports-screen.js',
  'asset-inventory-screen.js',
  'asset-inventory-identity-network.js',
  'asset-inventory-groups.js',
  'xdr-field-picker.js',
  'ai-security-module.js',
  'cloud-posture-security-rules.js',
  'cloud-workload-rules.js',
  'cloud-workload-policies.js',
  'cloud-posture-security-policies.js',
  'attack-surface-rules.js',
  'attack-surface-assets.js',
  'appsec-policies.js',
  'supply-chain-attacks.js',
  'package-explorer.js',
  'general-settings.js',
  'issue-detail-screen.js',
  'cortex-analytics.js',
  'data-broker.js',
  'xdr-collector.js',
  'license.js',
  'health-issues.js',
  'endpoint-policy-management.js',
  'endpoint-policy-profile.js',
  'data-classification.js',
  'data-collection.js',
  'identity-configuration.js',
  'data-management.js',
  'automation-exclusion-center.js',
  'integrations.js',
  'object-setup.js',
  'access-management.js',
  'attack-surface-data.js',
  'application-configurations.js',
  'upgrade-helper.js',
  'marketplace.js',
  'xql-search.js',
  'threat-management.js',
  'forensics.js',
];

const LOCALE_MODULES = {
  ja: DICTIONARY_FILES,
  ko: DICTIONARY_FILES,
  es: DICTIONARY_FILES,
  fr: DICTIONARY_FILES,
  de: DICTIONARY_FILES,
  // Example: to add an English fixed dictionary, add it the same way.
  // en: ['common.js', 'cloud-command-center.js', ...],
};

// The same target domains declared under content_scripts. Checked again here manually,
// separately from host_permissions.
const SUPPORTED_HOST_PATTERN =
  /^https:\/\/[^/]+\.xdr\.(us|eu|br|ca|fi|fr|fa|de|il|it|nl|pl|qa|qt|sa|za|es|ch|uk|au|dl|in|id|jp|sg|kr|tw)\.paloaltonetworks\.com\//;

/**
 * Determines which locale dictionary to use, based on the browser's UI
 * language. Returns null when the language isn't one of LOCALE_MODULES'
 * keys, so the page is left untranslated (e.g. an English browser viewing
 * the already-English UI).
 *
 * @return {?string} The locale key to use (e.g. 'ja'), or null if unsupported.
 */
function resolveLocale() {
  const uiLanguage = chrome.i18n.getUILanguage() || '';
  const lang = uiLanguage.split('-')[0].toLowerCase();
  return Object.prototype.hasOwnProperty.call(LOCALE_MODULES, lang) ? lang : null;
}

/**
 * Injects the resolved locale's dictionary files and content.js into the
 * given tab. Does nothing for an unsupported host, or a page load that has
 * already been injected.
 *
 * @param {number} tabId The target tab's ID.
 * @param {string} url The target tab's current URL.
 * @return {!Promise<void>}
 */
async function injectForTab(tabId, url) {
  if (!SUPPORTED_HOST_PATTERN.test(url)) return;

  const locale = resolveLocale();
  if (!locale) return; // Unsupported browser language: leave the page untranslated.

  // Guards against injecting twice into the same page load. Each dictionary
  // file declares its variable with const, so injecting into the same
  // isolated world a second time would throw an "already been declared"
  // error. This also passes resolveLocale()'s result to the isolated world
  // as window.__CORTEX_LOCALE, which content.js's AI dynamic translation
  // (Translator API) uses as its target language, keeping it in sync with
  // the fixed dictionary's language.
  //
  // chrome.tabs.onUpdated and chrome.scripting.executeScript race independently, so by the
  // time this runs the tab may already have navigated away, closed, or be showing a browser
  // error page (e.g. "Frame with ID 0 is showing error page") even though its URL still
  // matched SUPPORTED_HOST_PATTERN. There's nothing to inject into in that case, so this is
  // expected and not logged as an error.
  let alreadyInjected;
  try {
    const [{ result } = {}] = await chrome.scripting.executeScript({
      target: { tabId },
      world: 'ISOLATED',
      func: (loc) => {
        window.__CORTEX_LOCALE = loc;
        if (window.__cortexI18nInjected) return true;
        window.__cortexI18nInjected = true;
        return false;
      },
      args: [locale],
    });
    alreadyInjected = result;
  } catch (err) {
    console.debug('[cortex-i18n] skipped injection (tab navigated away or is showing an error page):', err);
    return;
  }
  if (alreadyInjected) return;

  const files = LOCALE_MODULES[locale].map((name) => `locales/${locale}/${name}`);
  // dynamic-translation-config.js defines the build flags
  // (CORTEX_DYNAMIC_TRANSLATION_ENABLED, etc.) that gate the AI dynamic
  // translation feature. It must be injected before content.js.
  files.push('dynamic-translation-config.js');
  files.push('content.js');

  try {
    await chrome.scripting.executeScript({
      target: { tabId },
      world: 'ISOLATED',
      files,
    });
  } catch (err) {
    console.error('[cortex-i18n] failed to inject dictionaries:', err);
  }
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status !== 'complete') return;
  if (!tab.url) return;
  injectForTab(tabId, tab.url);
});
