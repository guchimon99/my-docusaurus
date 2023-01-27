---
sidebar_position: 2
---

---
sidebar_position: 2
---

# サイトを翻訳する

docs/intro.md をフランス語に翻訳してみましょう。

## i18n を設定する

`docusaurus.config.js` を変更して `fr` ロケールのサポートを追加します。

```js title="docusaurus.config.js"
module.exports = {
   国際化: {
     defaultLocale: 'en',
     ロケール: ['en', 'fr'],
   }、
};
```

## ドキュメントを翻訳する

「docs/intro.md」ファイルを「i18n/fr」フォルダーにコピーします。

```バッシュ
mkdir -p i18n/fr/docusaurus-plugin-content-docs/current/

cp docs/intro.md i18n/fr/docusaurus-plugin-content-docs/current/intro.md
```

`i18n/fr/docusaurus-plugin-content-docs/current/intro.md` をフランス語に翻訳します。

## ローカライズされたサイトを開始する

フランス語ロケールでサイトを開始します。

```バッシュ
npm run start -- --locale fr
```

ローカライズされたサイトは [http://localhost:3000/fr/](http://localhost:3000/fr/) でアクセスでき、`Getting Started` ページは翻訳されています。

：：：注意

開発中は、同時に 1 つのロケールしか使用できません。

:::

## ロケール ドロップダウンを追加する

言語間をシームレスにナビゲートするには、ロケール ドロップダウンを追加します。

「docusaurus.config.js」ファイルを変更します。

```js title="docusaurus.config.js"
module.exports = {
   テーマ構成: {
     ナビゲーションバー: {
       項目: [
         // ハイライト開始
         {
           タイプ: 'localeDropdown',
         }、
         // ハイライト終了
       ]、
     }、
   }、
};
```

ロケール ドロップダウンがナビゲーション バーに表示されるようになりました。

![ロケール ドロップダウン](./img/localeDropdown.png)

## ローカライズされたサイトを構築する

特定のロケール用にサイトを構築します。

```バッシュ
npm run build -- --locale fr
```

または、一度にすべてのロケールを含めるようにサイトを構築します。

```バッシュ
npm ラン ビルド
```
