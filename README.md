# Cortex Localization

> **⚠️ License Notice — Read before downloading or using this tool**
> This software is published by Palo Alto Networks, Inc. as open source under the **[Apache License 2.0](./LICENSE)**. It is provided **"AS IS"**, without warranty of any kind, and is **not officially supported** as part of Palo Alto Networks' products or services. By downloading or using this tool, you agree to the terms of the license.
>
> **⚠️ ライセンスに関する通知 — ダウンロード・利用前に必ずお読みください**
> 本ソフトウェアはパロアルトネットワークス社(Palo Alto Networks, Inc.)がオープンソースとして公開するものであり、**[Apache License 2.0](./LICENSE)** の下で提供されます。**現状有姿(AS IS)** で提供され、いかなる保証もなく、同社の製品・サービスの一部としての**正式なサポート対象ではありません**。本ツールをダウンロード・利用することで、本ライセンスの条件に同意したものとみなされます。

**[English](#english)** | **[日本語](#日本語)**

---

## English

A Chrome extension that automatically localizes the Web UI of Palo Alto Networks' Cortex products (Cortex Cloud / XSIAM / XDR) to match the browser's language setting.

Translation is handled by two independent mechanisms.

1. **Fixed dictionary translation (always on)**: Exact-match replacement using a prepared English → target-language mapping. No external communication occurs.
2. **Dynamic Translation (optional, can be toggled on/off)**: This feature was implemented so the extension can also handle dynamic text that the fixed dictionary can't cover. It uses Chrome's built-in on-device AI translation feature (the `Translator` API) to translate text not covered by the fixed dictionary (case names, issue names, descriptions, remediation steps, etc.). All processing happens on-device; nothing is sent to an external server. The target language is determined automatically from the browser's language setting, the same as the fixed dictionary, and can be toggled on/off at any time from the extension's popup. If organizational policy does not allow AI translation, the feature itself can be disabled at the build level via `dynamic-translation-config.js` (details below).

### Supported Browsers

Verified on:
Google Chrome, Microsoft Edge

Dynamic Translation requires Google Chrome version 138 or later.

### Main Specifications

- Covers all Cortex Cloud regions (`*.xdr.<region>.paloaltonetworks.com`)
- When a page finishes loading, `background.js` (a Manifest V3 service worker) determines the browser's language and injects the matching dictionary files and `content.js` into the page's isolated world
- `content.js` scans the page's text nodes (including attributes such as `title` and `placeholder`), matches them against the dictionary, and replaces matches. It keeps tracking DOM changes made by the SPA (Angular) via a `MutationObserver`
- Dictionary files are split by screen/feature, making it easy to add or fix translations for a specific screen only
- Each dictionary file has three kinds of rules
  - `exact`: exact match
  - `patterns`: regex + template-based conversion for text containing variable parts such as counts or dates
  - `skip`: patterns of text that must never be translated, such as tenant-specific dynamic content
- What is included in or excluded from Dynamic Translation is managed entirely through two CSS selector constants in `content.js`; no dictionary file changes are needed
  - `RAW_IDENTIFIER_SELECTOR`: areas always excluded from fixed-dictionary translation (identifiers, free text, and other places prone to mistranslation via exact/partial matching). Even if an element is included here, it can still be a Dynamic Translation target when Dynamic Translation is on (exclusion from the fixed dictionary and eligibility for Dynamic Translation are determined independently)
  - `MT_ELIGIBLE_SELECTOR`: areas eligible for AI translation when Dynamic Translation is on
- Dynamic Translation's target language is automatically kept in sync with the fixed dictionary's language: the locale code determined by `background.js`'s `resolveLocale()` is passed into the isolated world as `window.__CORTEX_LOCALE`. If the browser's language isn't one of the supported locales, `resolveLocale()` returns `null` and nothing is injected at all, so the page is left untranslated
- Fixed dictionaries are also provided for Korean, Spanish, French, and German under `locales/`, alongside Japanese, and all five are registered in `background.js`'s `LOCALE_MODULES`. Dynamic Translation is available for these languages as well
- Areas where translation would break meaning or is prone to mistranslation — such as the XQL query input field (Monaco Editor) and user-authored Playbook/Script/Prompt content — are intentionally excluded from translation

### Chrome APIs Used by Dynamic Translation

Dynamic Translation uses only the following two Chrome built-in on-device AI APIs:

- `Translator` API: translates free-form text not covered by the fixed dictionary
- `LanguageDetector` API: determines whether text is already written in the target language (e.g. Japanese), to avoid translating it a second time

Both require a model download on first use, but the translation processing itself is done entirely on-device, so Dynamic Translation generates no network traffic.

### Folder Structure

```
.
├── manifest.json                    # Extension manifest (Manifest V3)
├── background.js                    # Determines the browser's language and injects the matching dictionary files
├── content.js                       # Scans page text, matches/replaces against the dictionary, and performs translation
├── dynamic-translation-config.js    # Build flags to disable/permanently enable Dynamic Translation
├── popup.html                       # Settings popup shown when the toolbar icon is clicked (Dynamic Translation on/off)
├── popup.js                         # Saves the popup's settings to chrome.storage.local
├── LICENSE                          # License
└── locales/
    ├── ja/                          # Japanese dictionary (one file per screen/feature)
    │   ├── common.js
    │   ├── cases-screen.js
    │   ├── xql-search.js
    │   └── ...(70+ files)
    ├── ko/                          # Korean dictionary (same file layout as ja/)
    ├── es/                          # Spanish dictionary (same file layout as ja/)
    ├── fr/                          # French dictionary (same file layout as ja/)
    └── de/                          # German dictionary (same file layout as ja/)
```

### Usage

1. Download this repository as a ZIP, or `git clone` it
2. Open `chrome://extensions` in Chrome
3. Enable "Developer mode" in the top right
4. Click "Load unpacked" and select this repository's folder
5. Open a Cortex Cloud tenant and it will be automatically translated according to the browser's language setting
6. (Optional) To also AI-translate case names, issue descriptions, etc., click the extension's toolbar icon and turn on "Translate dynamic items using Chrome Translation API" (the first time it's turned on, Chrome downloads the translation model, which takes a little time)

After updating the extension itself or its dictionary files, go to `chrome://extensions`, "Remove" the extension once, then "Load unpacked" again (a simple reload may not pick up changes to the service worker, `background.js`).

### How to Add Translations

#### Updating an Existing File

1. Open the target file under `locales/<language-code>/` and add an entry to `exact` (exact match), `patterns` (text with variable parts), or `skip` (text that must not be translated)
2. Reload the extension and confirm the change is reflected on the target screen

#### Adding a New File

1. Create a new file under `locales/<language-code>/` and write the dictionary in the same format as the other files (an object with `exact`/`patterns`/`skip`, defined under a unique variable name)
2. Add the new file's name to `DICTIONARY_FILES` in `background.js` (the file list shared by `ja`/`ko`/`es`/`fr`/`de` in `LOCALE_MODULES`)
3. Add an existence check for the new variable name (`typeof dictionaryXxx !== 'undefined' ? dictionaryXxx : null`) to the `mergeDictionaries(...)` call in `content.js`
4. Reload the extension and confirm

To make free-form text that can't go in the fixed dictionary (e.g. descriptions that differ per tenant) eligible for Dynamic Translation, add a CSS selector to `RAW_IDENTIFIER_SELECTOR` / `MT_ELIGIBLE_SELECTOR` in `content.js` instead of a dictionary file.

### How to Add a New Language

1. Create a `locales/<language-code>/` folder and place translated dictionary files there using the same file names as `locales/ja/` (you don't need to translate every screen at once)
2. Add the language code and an array of the translated files to `LOCALE_MODULES` in `background.js` (if the new language covers the exact same files as the existing five, it can reference the shared `DICTIONARY_FILES` array instead of writing out its own)
3. No changes to `manifest.json` or `content.js` are required

Dynamic Translation's target language also switches automatically to the language code above (via `window.__CORTEX_LOCALE`), so no additional configuration is needed. However, Dynamic Translation will not work if the `Translator` API itself does not support that language.

### Permanently Enabling/Disabling Dynamic Translation

The two build flags in `dynamic-translation-config.js` let you pin Dynamic Translation's behavior. Neither can be overridden by the user from the popup.

#### To pin it permanently OFF

```js
const CORTEX_DYNAMIC_TRANSLATION_ENABLED = false;
```

- Clicking the toolbar icon no longer shows a popup at all
- `content.js` also stops calling Dynamic Translation / the `Translator` API (it is always treated as OFF regardless of the value stored in `chrome.storage.local`)
- Fixed dictionary translation (always on) is unaffected

#### To pin it permanently ON

```js
const CORTEX_DYNAMIC_TRANSLATION_ALWAYS_ON = true;
```

- Since there is no longer a user-facing setting to toggle, clicking the toolbar icon shows no popup
- `content.js` always treats Dynamic Translation as ON, regardless of the value stored in `chrome.storage.local`
- If `CORTEX_DYNAMIC_TRANSLATION_ENABLED` is `false`, that setting takes precedence, and Dynamic Translation stays disabled regardless of this flag's value

### Known Limitations

- On-screen search/filter fields search internally against the original (English) data, so entering Japanese may not match
- Some columns are intentionally excluded from translation because their filter is a free-text partial match (Contains) against the displayed text, and translating them would make it impossible to construct a matching filter value from what's shown on screen (e.g., the "Category" column in the issue list)
- Tenant-specific dynamic content, such as Playbook/Script/Prompt content and raw XQL field names, is intentionally excluded from translation
- Because this uses a fixed-dictionary approach, text not in the dictionary or text that changes due to a Cortex Cloud UI update will not be translated
- Dynamic Translation only covers areas explicitly registered in `MT_ELIGIBLE_SELECTOR`; unsupported screens/areas remain in English
- Dynamic Translation depends on Chrome's `Translator` API (on-device AI translation), so it will not work on unsupported Chrome versions or in environments where the translation model cannot be downloaded

### Disclaimer

This extension is published as open source software by Palo Alto Networks, Inc., but it is not officially supported as part of the company's products or services. It is provided "AS IS" as set out in [LICENSE](./LICENSE), without warranty of any kind. Palo Alto Networks, Inc. is not liable for any damages arising from use of this extension.

### Support

This extension is an open source project that is not officially supported by Palo Alto Networks. For bug reports or requests to add or fix translations, please use this repository's GitHub (Issues/Pull Requests).

### License

This project is licensed under the following license.

[Apache License 2.0](./LICENSE)

See the LICENSE file for details.

---

## 日本語

パロアルトネットワークス(Palo Alto Networks)の Cortex 製品(Cortex Cloud / XSIAM / XDR)の Web UI を、ブラウザの言語設定に合わせて自動的にローカライズする Chrome 拡張機能です。

翻訳は2つの独立した仕組みで行われます。

1. **固定辞書翻訳(常時ON)**: あらかじめ用意した英語→対象言語の対応表による完全一致の置き換えです。外部への通信は発生しません。
2. **ダイナミック トランスレーション (動的翻訳) 任意、ON/OFF切り替え可能**: 固定辞書ではカバーできない動的な文章などを拡張機能で対応するために実装した機能です。Chrome に内蔵されたオンデバイスAI翻訳機能(`Translator` API)を使い、固定辞書でカバーできない文章(ケース名、イシュー名、説明文、修復方法など)を翻訳します。処理はすべて端末上で行われ、外部サーバーへは送信されません。翻訳先の言語は固定辞書と同じくブラウザの言語設定から自動決定され、拡張機能のポップアップからいつでもON/OFFを切り替えられます。組織のポリシー上AI翻訳自体を許可できない場合は、`dynamic-translation-config.js` でビルドレベルから機能自体を無効化できます(詳細は後述)。

### サポートブラウザ

動作確認を行ったブラウザは以下です。
Google Chrome, Microsoft Edge

ダイナミック トランスレーションはGoogle Chrome Version 138以降。

### 主な仕様

- 対象は Cortex Cloud の全リージョン(`*.xdr.<region>.paloaltonetworks.com`)
- ページ読み込み完了時に `background.js`(Manifest V3 Service Worker)がブラウザの言語を判定し、対応する辞書ファイルと `content.js` をページの isolated world に注入する
- `content.js` がページ内のテキストノード(`title` や `placeholder` などの属性も含む)を走査し、辞書と照合して一致した箇所を置き換える。SPA(Angular)によるDOMの動的な変化にも `MutationObserver` で追従し続ける
- 辞書ファイルは画面・機能ごとに分割されており、特定の画面だけの追加・修正が行いやすい
- 辞書の各ファイルは3種類のルールを持つ
  - `exact`: 完全一致
  - `patterns`: 件数や日付などの可変部分を含む文言のための、正規表現+テンプレートによる変換
  - `skip`: テナント固有の動的な内容など、絶対に翻訳してはいけない文言のパターン
- ダイナミック トランスレーションの対象/除外は `content.js` 内の2つのCSSセレクタ定数だけで管理しており、辞書ファイルの変更は不要
  - `RAW_IDENTIFIER_SELECTOR`: 固定辞書による翻訳を常に除外する領域(識別子・自由文など、完全一致/部分一致によって誤訳が起きやすい箇所)。ダイナミック トランスレーションONの場合はここに含まれていても別途翻訳対象になり得る(固定辞書の除外とダイナミック トランスレーションの対象は独立して判定される)
  - `MT_ELIGIBLE_SELECTOR`: ダイナミック トランスレーションONの場合にAI翻訳の対象となる領域
- ダイナミック トランスレーションの翻訳先言語は、`background.js` の `resolveLocale()` が判定した言語コードを `window.__CORTEX_LOCALE` として isolated world に渡し、固定辞書と同じ言語に自動的に合わせている。ブラウザの言語が対応言語のいずれにも一致しない場合は `resolveLocale()` が `null` を返し、何も注入されないため、そのページは無翻訳(元の言語のまま)になる
- `locales/` 配下には日本語に加えて韓国語・スペイン語・フランス語・ドイツ語の固定辞書も用意しており、5言語すべてが `background.js` の `LOCALE_MODULES` に登録済み。ダイナミック トランスレーションもこれらの言語で利用できる
- XQLクエリ入力欄(Monaco Editor)や、ユーザーが作成したPlaybook/Script/Promptの内容など、翻訳すると意味が壊れたり誤訳が起きやすい領域は意図的に翻訳対象から除外している

### ダイナミック トランスレーションで使用しているChrome API

ダイナミック トランスレーションは、Chromeに内蔵されたオンデバイスAI機能である以下の2つのAPIのみを使用している。

- `Translator` API: 固定辞書でカバーできない自由文を翻訳する
- `LanguageDetector` API: テキストが既に翻訳先言語(日本語など)で書かれているかどうかを判定し、二重に翻訳しないようにする

いずれも初回利用時にモデルのダウンロードが発生するが、翻訳処理自体はすべて端末上(オンデバイス)で行われるため、動的な翻訳によって外部へのネットワーク通信が発生することはない。

### フォルダ構成

```
.
├── manifest.json                    # 拡張機能のマニフェスト(Manifest V3)
├── background.js                    # ブラウザの言語を判定し、対応する辞書ファイルを注入する
├── content.js                       # ページ内のテキストを走査し、辞書照合・置き換え・翻訳を行う
├── dynamic-translation-config.js    # ダイナミック トランスレーション(動的翻訳)機能を無効化/常時ONにするビルドフラグ
├── popup.html                       # ツールバーアイコンをクリックした時の設定ポップアップ(ダイナミック トランスレーションON/OFF)
├── popup.js                         # ポップアップの設定を chrome.storage.local に保存する
├── LICENSE                          # ライセンス
└── locales/
    ├── ja/                          # 日本語辞書(画面・機能ごとに1ファイル)
    │   ├── common.js
    │   ├── cases-screen.js
    │   ├── xql-search.js
    │   └── ...(70ファイル以上)
    ├── ko/                          # 韓国語辞書(ja/と同じファイル構成)
    ├── es/                          # スペイン語辞書(ja/と同じファイル構成)
    ├── fr/                          # フランス語辞書(ja/と同じファイル構成)
    └── de/                          # ドイツ語辞書(ja/と同じファイル構成)
```

### 使い方

1. このリポジトリをZIPでダウンロード、または `git clone` する
2. Chrome で `chrome://extensions` を開く
3. 右上の「デベロッパーモード」を有効にする
4. 「パッケージ化されていない拡張機能を読み込む」をクリックし、このリポジトリのフォルダを選択する
5. Cortex Cloud のテナントを開くと、ブラウザの言語設定に応じて自動的に翻訳される
6. (任意)ケース名やイシューの説明などもAI翻訳したい場合は、拡張機能のツールバーアイコンをクリックし「Translate dynamic items using Chrome Translation API」をONにする(初回ONの際にChromeが翻訳モデルをダウンロードするため、少し時間がかかる)

拡張機能本体や辞書ファイルを更新した後は、`chrome://extensions` で一度拡張機能を「削除」してから再度「パッケージ化されていない拡張機能を読み込む」を行ってください(単なる再読み込みではService Worker (`background.js`) の変更が反映されないことがあります)。

### 翻訳を追加する手順

#### 既存ファイルを更新する場合

1. `locales/<言語コード>/` 配下の対象ファイルを開き、`exact`(完全一致)・`patterns`(可変部分を含む文言)・`skip`(翻訳してはいけない文言)のいずれかに追記する
2. 拡張機能を再読み込みし、対象画面で反映されているか確認する

#### 新しいファイルを追加する場合

1. `locales/<言語コード>/` に新しいファイルを作成し、他のファイルと同じ形式(`exact`/`patterns`/`skip` を持つオブジェクトをユニークな変数名で定義)で辞書を記述する
2. `background.js` の `DICTIONARY_FILES`(`LOCALE_MODULES` で `ja`/`ko`/`es`/`fr`/`de` が共有しているファイル一覧)に、作成したファイル名を追加する
3. `content.js` の `mergeDictionaries(...)` 呼び出しに、追加した変数名の存在チェック(`typeof dictionaryXxx !== 'undefined' ? dictionaryXxx : null`)を追加する
4. 拡張機能を再読み込みして確認する

固定辞書に載せられない自由文(テナントごとに異なる説明文など)をダイナミック トランスレーションの対象にしたい場合は、辞書ファイルではなく `content.js` の `RAW_IDENTIFIER_SELECTOR` / `MT_ELIGIBLE_SELECTOR` にCSSセレクタを追加する。

### 新しい言語を追加する手順

1. `locales/<言語コード>/` フォルダを作成し、`locales/ja/` と同じファイル名で翻訳済みの辞書ファイルを配置する(すべての画面を一度に翻訳する必要はない)
2. `background.js` の `LOCALE_MODULES` に、その言語コードと翻訳したファイルの配列を追加する(既存5言語と全く同じファイル構成であれば、独自の配列を書く代わりに共通の `DICTIONARY_FILES` を参照させることもできる)
3. `manifest.json` や `content.js` の変更は不要

ダイナミック トランスレーションの翻訳先言語も、上記の言語コードに自動的に切り替わる(`window.__CORTEX_LOCALE` 経由)ため、追加の設定は不要。ただし `Translator` API自体がその言語に対応していない場合、ダイナミック トランスレーションは動作しない。

### ダイナミック トランスレーションの恒久的な有効化・無効化

`dynamic-translation-config.js` の2つのビルドフラグで、ダイナミック トランスレーションの挙動を固定できる。いずれもポップアップからユーザーが上書きすることはできない。

#### 常時OFFに固定する場合

```js
const CORTEX_DYNAMIC_TRANSLATION_ENABLED = false;
```

- ツールバーアイコンをクリックしてもポップアップ自体が表示されなくなる
- `content.js` 側でもダイナミック トランスレーション・`Translator` APIの呼び出しが行われなくなる(`chrome.storage.local` に保存されている値に関わらず常にOFFとして扱われる)
- 固定辞書翻訳(常時ON)には影響しない

#### 常時ONに固定する場合

```js
const CORTEX_DYNAMIC_TRANSLATION_ALWAYS_ON = true;
```

- ユーザーが切り替えられる設定自体が存在しなくなるため、ツールバーアイコンをクリックしてもポップアップは表示されない
- `content.js` は `chrome.storage.local` に保存されている値に関わらず、常にダイナミック トランスレーションがONとして扱う
- `CORTEX_DYNAMIC_TRANSLATION_ENABLED` が `false` の場合はそちらが優先され、このフラグの値に関わらずダイナミック トランスレーションは無効のままになる

### 既知の制限

- 画面内の検索・フィルター欄は内部的に原文(英語)のデータに対して検索するため、日本語で入力しても一致しないことがある
- 一部の列は、フィルターが表示テキストに対する自由文の部分一致(Contains)であるため、翻訳すると画面の表示から一致するフィルター値を組み立てられなくなるという理由で、意図的に翻訳対象から除外している(例: イシュー一覧の「カテゴリ」列)
- Playbook/Script/Promptの内容や、生のXQLフィールド名などのテナント固有の動的な内容は、意図的に翻訳対象から除外している
- 固定辞書方式のため、辞書に無い文言やCortex Cloud側のUI更新で変化した文言は翻訳されない
- ダイナミック トランスレーションは `MT_ELIGIBLE_SELECTOR` に明示的に登録された領域のみが対象で、未対応の画面・領域は英語のまま
- ダイナミック トランスレーションはChromeの `Translator` API(オンデバイスAI翻訳)に依存するため、対応していないChromeバージョンや翻訳モデルをダウンロードできない環境では動作しない

### 免責事項

本拡張機能はパロアルトネットワークス社(Palo Alto Networks, Inc.)がオープンソースソフトウェアとして公開するものですが、同社の製品・サービスの一部としての正式なサポート対象ではありません。[LICENSE](./LICENSE)に定めるとおり現状有姿(AS IS)で提供され、いかなる保証もありません。本拡張機能の利用により生じたいかなる損害についても、同社は責任を負いません。

### サポート

本拡張機能はパロアルトネットワークスの正式なサポート対象外のオープンソースプロジェクトです。不具合や翻訳の追加・修正のご要望は、本リポジトリのGitHub(Issue/Pull Request)にてお願いします。

### ライセンス

このプロジェクトは、以下のライセンスに基づいてライセンスされています。

[Apache License 2.0](./LICENSE)

詳細はLICENSEファイルを参照してください。
