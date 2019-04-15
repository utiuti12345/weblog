var config = require("../config.js");
var gulp = require("gulp");
var del = require("del");
var sass = require("gulp-sass");

const compileSassClean = function () {
  return del("./stylesheets/**/*", { cwd: config.path.output });
};

const compileSass = function () {
  return gulp.src("./stylesheets/**/*.scss", { cwd: config.path.input })
    .pipe(sass(config.sass))
    .pipe(gulp.dest("./stylesheets", { cwd: config.path.output }));
};

gulp.task("compile-sass", gulp.series(compileSassClean,compileSass));