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
  gulp.src(["build/*"]).pipe(gulp.dest("../"));
  gulp.src(["build/static/*"]).pipe(gulp.dest("../static"));
});

gulp.task("default", gulp.parallel("copy"));
