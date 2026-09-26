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

// Build-time switch for the AI dynamic translation feature (Chrome's
// built-in on-device Translator API). Set this to false if your
// organization's policy does not allow using AI translation at all.
//
// When set to false:
//   - The popup's "Translate dynamic items using Chrome Translation API"
//     checkbox is always OFF and disabled, with a note explaining why.
//   - content.js never calls the Translator API, regardless of the value
//     stored in chrome.storage.local.
//
// This does not affect the fixed-dictionary translation, which is
// always on and unaffected by this flag.
const CORTEX_DYNAMIC_TRANSLATION_ENABLED = true;

// Build-time switch to force AI dynamic translation to always be ON,
// with no popup toggle shown to the user at all (e.g., for an
// organization that wants dynamic translation always active, with no
// per-user control needed).
//
// When set to true:
//   - The toolbar icon shows no popup at all (same as when
//     CORTEX_DYNAMIC_TRANSLATION_ENABLED is false), since there is
//     nothing left for the user to toggle.
//   - content.js always treats dynamic translation as enabled,
//     ignoring whatever value is stored in chrome.storage.local under
//     "mtEnabled", and ignores any later change to that value.
//
// This flag has no effect if CORTEX_DYNAMIC_TRANSLATION_ENABLED is
// false — that flag always takes precedence and disables dynamic
// translation entirely.
const CORTEX_DYNAMIC_TRANSLATION_ALWAYS_ON = false;
