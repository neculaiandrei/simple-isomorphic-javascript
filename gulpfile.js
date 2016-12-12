var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('js', function () {
    return browserify({
        entries: 'main.js',
    })
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('public'));
});

gulp.task('html', function () {
    return gulp.src('index.html')
               .pipe(gulp.dest('public'));
});

gulp.task('default', ['js', 'html']);