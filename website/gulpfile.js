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
  gulp.src(["build/static/css/*"]).pipe(gulp.dest("../static/css"));
  gulp.src(["build/static/js/*"]).pipe(gulp.dest("../static/js"));
  gulp.src(["build/static/media/*"]).pipe(gulp.dest("../static/media"));
  gulp.src(["build/bootstrap/css/*"]).pipe(gulp.dest("../bootstrap/css"));
  gulp.src(["build/bootstrap/fonts/*"]).pipe(gulp.dest("../bootstrap/fonts"));
  gulp.src(["build/bootstrap/js/*"]).pipe(gulp.dest("../bootstrap/js"));
});

gulp.task("default", gulp.parallel("copy"));
