var config = require("../config.js");
var gulp = require("gulp");
var del = require("del");

const copyImagesClean = function () {
  return del("./images/**/*", { cwd: config.path.output });
};

const copyImages = function () {
  return gulp.src("./images/**/*", { cwd: config.path.input })
    .pipe(gulp.dest("./images", { cwd: config.path.output }));
};

gulp.task("copy-images", gulp.series(copyImagesClean,copyImages));