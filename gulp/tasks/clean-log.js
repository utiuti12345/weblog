var config = require("../config.js");
var gulp = require("gulp");
var del = require("del");

const cleanLog = function(){
  return del("./**/*",{ cwd: config.path.log });
};

gulp.task("clean-log",gulp.series(cleanLog));