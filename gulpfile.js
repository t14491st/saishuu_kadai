var gulp = require("gulp");
var app = require("./lib/server");
var jshint = require('gulp-jshint');

// start-server：サーバの起動タスク
gulp.task("start-server", function() {
  console.log(process.cwd() + "/app");  
  console.log(app);
  var server = app.create({
    port:8080,
    documentRoot: "./app"
  });
  server.start();
});

// lint：JavaScriptの文法チェックを行うタスク
gulp.task("lint", function () {
  return gulp.src("app/js/**/*.js")
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

// watch：ファイルの変更を監視して list を起動
gulp.task("watch",function(){
  gulp.watch(["app/js/**/*.js"], ["lint"]);
});

// デフォルトのタスクを指定
gulp.task("default", ["start-server", "watch"]);
