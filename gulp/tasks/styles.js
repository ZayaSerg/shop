module.exports = function() {
  $.gulp.task("styles:build", () => {
    return $.gulp
      .src("./dev/static/styles/styles.scss")
      .pipe(
        $.gp.sass({
          outputStyle: "compressed"
        })
      )
      .pipe(
        $.gp.autoprefixer({
          browsers: ["last 3 version"]
        })
      )
      .pipe($.gp.csscomb())
      .pipe($.gp.csso())
      .pipe($.gulp.dest("./build/static/css/"));
  });

  $.gulp.task("styles:dev", () => {
    return (
      $.gulp
        .src("./dev/static/styles/styles.scss")
        // .src("./dev/static/styles/main.styl")
        .pipe($.gp.sourcemaps.init())
        .pipe(
          $.gp.sass({
            // outputStyle: "compressed"
            /*          "include css": true*/
            /*          outputStyle: 'compressed'*/
          })
        )
        .on(
          "error",
          $.gp.notify.onError(function(error) {
            return {
              title: "Styles",
              message: error.message
            };
          })
        )
        .pipe($.gp.sourcemaps.write())
        .pipe(
          $.gp.autoprefixer({
            browsers: ["last 3 version"]
          })
        )
        .pipe($.gulp.dest("./build/static/css/"))
        .pipe(
          $.browserSync.reload({
            stream: true
          })
        )
    );
  });
};
