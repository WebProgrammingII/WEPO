var gulp = require('gulp');
var path = require('path');
var less = require('gulp-less');
var browserSync = require('browser-sync').create();

gulp.task('default', function () {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('*.html').on('change', browserSync.reload);
    gulp.watch('./css/*.less').on('change', function () {
        gulp.src('./css/**/*.less').pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        })).pipe(gulp.dest('./public'));
        browserSync.reload();
    });
});
