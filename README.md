# 静的サイトチーム開発の演習

## 開発に必要なツール

- yarn
- Node.js(ver:14.17.0)

yarnやnodeの管理系ツールの導入については以下を参照。  
https://github.com/yutakawano/digsmile/issues/5

## ディレクトリ構成について

本リポジトリの各ディレクトリの詳細です。  

```
README.md => 本リポジトリの説明
gulpfile.js => タスクランナーGulpに関する設定ファイル
images/ => 各種イメージ画像
index.html => TOPページ
package.json => パッケージ管理
src/ => Gulpのコンパイル元のscssなどを管理
yarn.lock => yarnの依存関係
```

## Gulpの実行方法

`yarn exec gulp`を実行するとscssファイルの監視が始まります。  
監視後は、scssの変更を保存する度にcssへコンパイルされます。  

コンパイルされたcssは`./css/`以下へコンパイルされます。  
※cssディレクトリに関しては、リポジトリでの管理対象から外す予定です。
