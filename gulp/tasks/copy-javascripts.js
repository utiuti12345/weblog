var config = require("../config.js");
var gulp = require("gulp");
var del = require("del");

const copyJavascriptsClean = function () {
  return del("./javascripts/**/*", { cwd: config.path.output });
};

const copyJavascripts = function () {
  return gulp.src("./javascripts/**/*", { cwd: config.path.input })
    .pipe(gulp.dest("./javascripts", { cwd: config.path.output }));
};

gulp.task("copy-javascripts", gulp.series(copyJavascriptsClean,copyJavascripts));