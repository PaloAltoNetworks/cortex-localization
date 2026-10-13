#!/usr/bin/env bash
# Build an installable ZIP of the extension: manifest.json sits at the ZIP root, so after unzipping the folder
# can be selected directly with "Load unpacked" in chrome://extensions.
#
# Usage:  scripts/build-release.sh [label]
#   label  Used in the file name. Defaults to the "version" in manifest.json.
# Output: dist/cortex-localization-<label>.zip  (set DIST_DIR to write somewhere else)
set -euo pipefail
cd "$(dirname "$0")/.."

LABEL="${1:-$(python3 -c "import json; print(json.load(open('manifest.json'))['version'])")}"
DIST_DIR="${DIST_DIR:-dist}"
OUT="${DIST_DIR}/cortex-localization-${LABEL}.zip"
STAGE="${DIST_DIR}/stage"

# Only the files the extension needs at runtime (no .git, backups, scripts, workflows, previous builds).
FILES=(manifest.json background.js content.js dynamic-translation-config.js popup.html popup.js LICENSE README.md)

rm -rf "$STAGE" "$OUT"
mkdir -p "$STAGE"
for f in "${FILES[@]}"; do cp "$f" "$STAGE/"; done
cp -R locales "$STAGE/locales"
find "$STAGE" \( -name '*.bak*' -o -name '.DS_Store' \) -delete

(cd "$STAGE" && zip -qr -X "../$(basename "$OUT")" .)
rm -rf "$STAGE"

# Sanity checks: manifest.json is at the root and everything it references is inside the ZIP.
python3 - "$OUT" <<'PY'
import json, sys, zipfile
z = zipfile.ZipFile(sys.argv[1])
names = set(z.namelist())
assert 'manifest.json' in names, 'manifest.json is not at the ZIP root'
m = json.loads(z.read('manifest.json'))
need = [m['background']['service_worker'], m['action']['default_popup']]
for n in need:
    assert n in names, f'missing in ZIP: {n}'
assert any(n.startswith('locales/ja/') for n in names), 'locales/ missing'
print(f'OK: {sys.argv[1]}  (version {m["version"]}, {len(names)} entries)')
PY
