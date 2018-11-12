var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');

gulp.task('github', function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});

gulp.task('deploy', gulp.series('css', 'copy', 'fileinclude', 'github'));