'use strict';

var gulp = require('gulp');
var requireDir = require('require-dir');
var browserSync = require('browser-sync').create();

process.setMaxListeners(0);

global.paths = {
    'partials': './src/**/*.{html,svg}',
    'html': './dist/**/*.html',
    'scss': './src/scss/**/*.scss',
    'css': './dist/css',
    'src': './src',
    'dist': './dist'
};

global.browserSync = browserSync;

requireDir('./gulp', { recurse: false });
gulp.task('default', gulp.series('serve'));