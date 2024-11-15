# このリポジトリについて
Vue.jsの概要や各要件に対しての実装方法を学ぶための学習用として作成しています。

## 更新履歴やcommitメッセージの記載方法について

### commitメッセージの書き方
リポジトリにプッシュする際のcommitメッセージとして、以下の表記例を元に更新履歴を残していきます。<br>
■ルール<br>
検証用サーバーにアップ時のURL末尾:主たる作業内容<br>
■例<br>
vue_lesson01_6:ホバーアニメーションや詳細ページへの導線を追加

### 更新履歴の残し方
プッシュする毎に本mdファイルの「更新履歴」欄に、commitメッセージ毎に作業内容詳細を残していきます。<br>ただし、作業内容全てを事細かに記すのは大変なため、各作業で編集した具体的なファイル名を記載しつつ、1作業分は長くても2、3行程度でまとめます。<br>
新しい履歴ほど上に来るように追記をしていきます。

■例<br>
・hogehoge.cssにアニメーションのためのスタイルを追加。<br>
・hogehoge.vueに対してfugafugaData.jsからデータ読み込み処理、および条件分岐による表示の分類処理を追加。<br>
・複数のvueファイルに類似処理が記載されていたため、特定の1ファイルに類似処理を統合。そのファイルから、各vueファイルにimportする形で処理を実行できるよう変更。

### ToDoの残し方
・今後の作業予定を簡単な理由をつけて箇条書きで記します。

#### 備考
リポジトリへのcommitメッセージの残し方や、更新履歴の残し方については今後、変更する可能性があります。その際には、「運用履歴」欄に変更点を記載していきます。

# 運用履歴
20241115:Markdown形式による更新履歴の追記運用開始

# 更新履歴
※リポジトリ作成後、途中からとはなりますが以下に追記していきます。

### 20241115 vue_lesson01_7:vue_lesson01_6の開発環境上で表示されていたwarnの解消
[作業内容]<br>
・下記warnの解消のため、Piniaの導入予定であったが、導入せずに記述内容を書き換えて対処できたため、落着とした(SinglePage.vue内のwarnの元となった記述の削除)。
> vue-router.mjs:51 [Vue Router warn]: Discarded invalid param(s) "hogehogehoge" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.<br>
・ArchiveMediaListButton.vueは現時点では不要なため削除した。

### 20241115 vue_lesson01_6:ホバーアニメーションや詳細ページへの導線を追加
[作業内容]<br>
・index.html内のtitleテキストをvue_lesson01_6に変更
・SinglePage.vueのタグ箇所に対して、RouterLinkを設置。クリック後、一覧ページへ遷移するよう実装。
・MainVisual.vueにてSwiperで表示させる各要素を自動取得＆自動出力する方式に変更。catData.js内各データの「pickup:true」となっているデータのみ表示できるように切り替えた。
・(style.css)ArchiveMediaListItem.vue内の各画像に対してホバーアニメーションを追加。
・(style.css)ArchiveTagListItem.vue内のタグ要素に対してホバーアニメーションを追加。

# ToDo
**・詳細記事の情報をデータベースに格納し、各操作にあわせて呼び出して表示できるようにしていく**<br>
→バックエンドの処理をLaravel、データベースはMySQLとして実装していく予定。

**[完了]**
**・Piniaを導入＆本ライブラリを使用して開発環境上のwarnが表示されないよう、データの管理をしていく**<br>
→vue_lesson01_7の作業内容の通り、Piniaを導入せずとも解消できたため、上記作業についてはいったん落着とする。
