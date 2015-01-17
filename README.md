# memo-app

写真と位置情報つきでメモを残せるアプリです。同様のアプリを作るときのテンプレートとしてお使いください。

Firefox OS アプリとしても動作します。ホスト型でも動作します。
公開される場合は、app/manifest.webapp の修正しなければならないことにご留意ください。

## 初期設定

アプリ作成するため必要な最低限の作業は次のとおりです。

* node.js をインストールする
* gulp をインストールする
* npm を利用して、依存するライブラリーをインストールする

Mac OS 上で、node.js のインストール後に必要なコマンドを次に示します。

    % sudo npm install -g glup
    % cd レポジトリのディレクトリ
    % npm install

## タスク

このテンプレートに含まれるgulpのタスクを列挙します。

* server：サーバーの起動
* lint：JSファイルの文法チェック。対象となるファイルは app/js以下の全JSファイル
* watch：app/js以下の全JSファイルの変更を監視し、変更があれば文法チェックを行う

なおデフォルトではserverとwatchのタスクが起動します。デフォルトのタスクは、ターミナルより次のように引数なしでgulpコマンドを実行します。

    % gulp


## Intel's App Framework

このテンプレートはUIに[IntelのApp Framework](http://app-framework-software.intel.com/)を利用しています。

UIの各コンポーネントの利用方法は[Component Menu](http://app-framework-software.intel.com/components.php)を参照してください。

なおこのテンプレートでは次のコンポーネントを利用しています。

* Header
* Footer
* List (with Icons)
* Buttons
* Panel

## 画像について

app/imgに配置されているアイコン用画像はFirefoxのWebIDEによって作成されたものです。

## データの保存について

[localForage](https://github.com/mozilla/localForage)を利用しています。
保存したデータはIndexedDBに格納されます。
IndexedDBが利用できない場合は、WebStorage(local storage)に保存されます。
