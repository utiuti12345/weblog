var config = require("../config.js");
var gulp = require("gulp");
var del = require("del");
var uglify = require("gulp-uglify");

const minifyJavascriptClean = function () {
  return del("./javascripts/**/*", { cwd: config.path.output });
};

const minifyJavascript = function () {
  return gulp.src("./javascripts/**/*", { cwd: config.path.input })
    .pipe(uglify(config.uglify))
    .pipe(gulp.dest("./javascripts", { cwd: config.path.output }));
};

gulp.task("minify-javascripts", gulp.series(minifyJavascriptClean,minifyJavascript));