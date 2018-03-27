var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('default', function () {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch([ '*.html', 'css/*.css' ]).on('change', browserSync.reload);
});
