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

  const checkbox = document.getElementById('mtEnabled');
  const label = document.getElementById('mtEnabledLabel');
  const status = document.getElementById('status');
  const note = document.getElementById('note');

  // If CORTEX_DYNAMIC_TRANSLATION_ENABLED (defined in
  // dynamic-translation-config.js, loaded before popup.js) is false, the
  // dynamic translation feature itself has been disabled by the build flag
  // (e.g. for an organization that doesn't allow AI translation at all). In
  // that case, keep the checkbox permanently OFF and disabled, and show why.
  const dynamicTranslationAllowed =
    typeof CORTEX_DYNAMIC_TRANSLATION_ENABLED === 'undefined'
      ? true
      : CORTEX_DYNAMIC_TRANSLATION_ENABLED;

  if (!dynamicTranslationAllowed) {
    checkbox.checked = false;
    checkbox.disabled = true;
    if (label) label.classList.add('disabled');
    if (note) {
      note.classList.add('disabled-note');
      note.textContent =
        'Dynamic AI translation has been disabled by this extension’s configuration (dynamic-translation-config.js). Only the fixed dictionary translation is applied.';
    }
    return;
  }

  // When CORTEX_DYNAMIC_TRANSLATION_ALWAYS_ON is true in
  // dynamic-translation-config.js, dynamic translation is pinned permanently
  // on and there is no setting to toggle. background.js normally keeps this
  // popup from being shown at all in that case, but this handles it the
  // same way here too, just in case.
  const dynamicTranslationAlwaysOn =
    typeof CORTEX_DYNAMIC_TRANSLATION_ALWAYS_ON === 'undefined'
      ? false
      : CORTEX_DYNAMIC_TRANSLATION_ALWAYS_ON;

  if (dynamicTranslationAlwaysOn) {
    checkbox.checked = true;
    checkbox.disabled = true;
    if (label) label.classList.add('disabled');
    if (note) {
      note.textContent =
        'Dynamic AI translation is always enabled by this extension’s configuration (dynamic-translation-config.js). This setting cannot be changed here.';
    }
    return;
  }

  // Translator.create() throws NotAllowedError unless it's called within a
  // user gesture (e.g. a click) when the on-device model hasn't been
  // downloaded yet. content.js calls it automatically on page load, with no
  // gesture, so we warm up the model here instead — inside the user gesture
  // of opening this popup / clicking the checkbox — the first time. Once
  // downloaded, availability becomes "available" and content.js's own
  // (gesture-less) calls succeed from then on.
  const SUPPORTED_LOCALES = ['ja', 'ko', 'es', 'fr', 'de'];

  function resolveLocale() {
    const uiLanguage = chrome.i18n.getUILanguage() || '';
    const lang = uiLanguage.split('-')[0].toLowerCase();
    return SUPPORTED_LOCALES.includes(lang) ? lang : null;
  }

  function warmUpTranslationModels() {
    const targetLanguage = resolveLocale();
    // Unsupported browser language: content.js won't inject a dictionary or
    // run Dynamic Translation for this tab either, so there's nothing to
    // warm up.
    if (!targetLanguage) return;

    if (typeof Translator !== 'undefined') {
      Translator.create({
        sourceLanguage: 'en',
        targetLanguage,
        monitor(m) {
          m.addEventListener('downloadprogress', (e) => {
            status.textContent = `Downloading the translation model... ${Math.round(e.loaded * 100)}%`;
            status.style.display = 'block';
          });
        },
      })
        .then(() => {
          if (status.textContent.startsWith('Downloading')) {
            status.textContent = 'Translation model ready.';
            window.setTimeout(() => {
              status.style.display = 'none';
              status.textContent = 'Settings saved.';
            }, 2000);
          }
        })
        .catch((err) => {
          console.error('[cortex-ja] Translatorモデルの初期化(ウォームアップ)に失敗しました:', err);
        });
    }

    if (typeof LanguageDetector !== 'undefined') {
      LanguageDetector.create().catch((err) => {
        console.error('[cortex-ja] LanguageDetectorモデルの初期化(ウォームアップ)に失敗しました:', err);
      });
    }
  }

  chrome.storage.local.get({ mtEnabled: false }, (result) => {
    checkbox.checked = !!result.mtEnabled;
    // Opening the popup itself is also the result of a user gesture
    // (clicking the icon), so if it's already ON, try warming up here too
    // (this also retries a previous download that failed).
    if (checkbox.checked) {
      warmUpTranslationModels();
    }
  });

  checkbox.addEventListener('change', () => {
    chrome.storage.local.set({ mtEnabled: checkbox.checked }, () => {
      // content.js watches chrome.storage.onChanged, so this also takes
      // effect in already-open tabs without needing a reload.
      status.textContent = 'Settings saved.';
      status.style.display = 'block';
      window.setTimeout(() => {
        status.style.display = 'none';
      }, 1500);
    });

    if (checkbox.checked) {
      warmUpTranslationModels();
    }
  });
})();
