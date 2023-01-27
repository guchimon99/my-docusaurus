# 環境変数

Typesense で十分な権限を持ったAPIキーを発行して環境変数に入れる。

`./.env`

```
TYPESENSE_API_KEY={YOUR_API_KEY}
TYPESENSE_HOST={YOUR_TYPESENSE_HOST}
TYPESENSE_PORT=443
TYPESENSE_PROTOCOL=https
```

# スクレイパーの実行

## `config.json`

以下の項目を中心に必要な項目を書き換える

```json
{
  ...
  "start_urls": [
    "https://yoursite.com/"
  ],
  "sitemap_urls": [
    "https://yoursite.com/sitemap.xml"
  ],
  ...
}
```

## 実行

- `/typesense` のディレクトリで実行する。
- Docker が必要

```
# sh run-scraper.sh
```
