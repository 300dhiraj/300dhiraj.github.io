const gulp = require("gulp");
const exec = require("child_process").exec;

gulp.task("build", function() {
  exec("npm run-script build", function(err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    console.log(err);
  });
});

gulp.task("copy", function() {
  return gulp.src(["build/*"]).pipe(gulp.dest("../"));
});

gulp.task("default", gulp.parallel("copy"));
