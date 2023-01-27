---
sidebar_position: 1
---

# ドキュメントのバージョンを管理する

Docusaurus は、ドキュメントの複数のバージョンを管理できます。

## ドキュメント バージョンを作成する

プロジェクトのバージョン 1.0 をリリースします。

```バッシュ
npm run docusaurus docs:version 1.0
```

`docs` フォルダが `versioned_docs/version-1.0` にコピーされ、`versions.json` が作成されます。

ドキュメントには 2 つのバージョンがあります。

- バージョン 1.0 ドキュメントの場合は、`http://localhost:3000/docs/` の `1.0`
- `http://localhost:3000/docs/next/` の `current` で **近日リリース予定のドキュメント**

## バージョンのドロップダウンを追加

バージョン間をシームレスに移動するには、バージョン ドロップダウンを追加します。

「docusaurus.config.js」ファイルを変更します。

```js title="docusaurus.config.js"
module.exports = {
   テーマ構成: {
     ナビゲーションバー: {
       項目: [
         // ハイライト開始
         {
           タイプ: 'docsVersionDropdown',
         }、
         // ハイライト終了
       ]、
     }、
   }、
};
```

docs version ドロップダウンがナビゲーション バーに表示されます。

![ドキュメント バージョン ドロップダウン](./img/docsVersionDropdown.png)

## 既存のバージョンを更新する

バージョン管理されたドキュメントをそれぞれのフォルダーで編集できます。

- `versioned_docs/version-1.0/hello.md` は `http://localhost:3000/docs/hello` を更新します
- `docs/hello.md` は `http://localhost:3000/docs/next/hello` を更新します
