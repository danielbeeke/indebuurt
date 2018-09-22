'use strict';

let gulp = require('gulp');
let reload = global.browserSync.reload;
let url = require('url');
let fs = require('fs');
let fileinclude = require('gulp-file-include');

gulp.task('browsersync', () => {
  global.browserSync.init({
    server: [global.paths.dist],
    ghostMode: true,
  });

  gulp.watch(global.paths.partials, gulp.series('fileinclude'));
  gulp.watch([global.paths.html]).on('change', reload);
  gulp.watch(global.paths.scss, gulp.series('css'));
});

gulp.task('fileinclude', function() {
  return gulp.src(['./src/index.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('serve', gulp.series('fileinclude', 'css', 'browsersync'));
