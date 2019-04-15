var config = require("../config.js");
var gulp = require("gulp");
var del = require("del");

const copyJqueryClean = function () {
  return del("./third_party/jquery/**/*", { cwd: config.path.output });
};
const copyPopperClean = function () {
  return del("./third_party/popper.js/**/*", { cwd: config.path.output });
};
const copyBootStrapClean = function () {
  return del("./third_party/bootstrap/**/*", { cwd: config.path.output });
};
const copyFontAwesomeClean = function () {
  return del("./third_party/font-awesome/**/*", { cwd: config.path.output });
};

// jquery,popper.js,bootstrap,font-awesome
const copyjquery = function () {
  return gulp.src("./jquery/dist/**/*", { cwd: config.path.node_modules })
    .pipe(gulp.dest("./third_party/jquery", { cwd: config.path.output }));
};

const copypopper = function () {
  return gulp.src("./popper.js/dist/**/*", { cwd: config.path.node_modules })
    .pipe(gulp.dest("./third_party/popper.js", { cwd: config.path.output }));
};

const copybootstrap = function () {
  return gulp.src("./bootstrap/dist/**/*", { cwd: config.path.node_modules })
    .pipe(gulp.dest("./third_party/bootstrap", { cwd: config.path.output }));
};

const copyfontawesome = function () {
  return gulp.src("./font-awesome/**/*", { cwd: config.path.node_modules })
    .pipe(gulp.dest("./third_party/font-awesome", { cwd: config.path.output }));
};

gulp.task("copy-third_party_jquery", gulp.series(copyJqueryClean,copyjquery));
gulp.task("copy-third_party_popper.js", gulp.series(copyPopperClean,copypopper));
gulp.task("copy-third_party_bootstrap", gulp.series(copyBootStrapClean,copybootstrap));
gulp.task("copy-third_party_font-awesome", gulp.series(copyFontAwesomeClean,copyfontawesome));

gulp.task("copy-third_party",gulp.series("copy-third_party_jquery","copy-third_party_popper.js","copy-third_party_bootstrap","copy-third_party_font-awesome"));