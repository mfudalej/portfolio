var gulp = require('gulp'),
    sass = require('gulp-sass'),
//    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename');




gulp.task('sass', function() {
    gulp.src('src/sass/main.scss')
    .pipe(sass().on('error', sass.logError))
//    .pipe(autoprefixer())
    .pipe(rename("style.css"))
    .pipe(gulp.dest('src/css/'));
});

gulp.task('watch', function () {
    gulp.watch('src/sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);