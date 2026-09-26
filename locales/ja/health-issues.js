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

const dictionaryHealthIssues = {
  exact: {
    "Integration Instance - Command": "インテグレーションインスタンス - コマンド",
    "Legacy health issues": "レガシー健全性のイシュー",
    "Data Ingestion Health": "データ取り込みの健全性",
    "There are no Ingestion Health issues": "取り込みの健全性のイシューはありません",
    "Observation Time": "観測時刻",
    "Note: The table data will reload automatically when you close this panel.": "注: このパネルを閉じると、テーブルデータは自動的に再読み込みされます。",
  },

  patterns: [
    // "Detected 1 out of" -> "検出済み: 1 / "(直後の「283 件の結果」と繋がる)
    { re: /^Detected\s+(\d+)\s+out of$/, tpl: "検出済み: $1 / " },
    // "Warning: Integration command 'setIssueSeverity' on integration 'Builtin' instance 'Builtin' ran for 16 minutes as part of investigation '5808252', exceeding the recommended threshold of 15 minutes. Performance may be affected."
    { re: /^Warning: Integration command '(.+)' on integration '(.+)' instance '(.+)' ran for (\d+) minutes? as part of investigation '(.+)', exceeding the recommended threshold of (\d+) minutes?\. Performance may be affected\.$/,
      tpl: "警告: インテグレーション「$2」のインスタンス「$3」上のインテグレーションコマンド「$1」は、調査「$5」の一環として$4分間実行され、推奨しきい値の$6分を超過しました。パフォーマンスに影響する可能性があります。" },
  ],

  skip: [],
};
