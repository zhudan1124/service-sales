var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    notify = require('gulp-notify');

// 如果需要通过scss文件编译css，就使用这段代码
gulp.task('styles', function() {
  return gulp.src('static/css/*.scss')
    .pipe(sass({ style: 'expanded', }))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('dist/css'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(gulp.dest('dist/css'))
    .pipe(notify({ message: '生成CSS完毕！' }));
});


// 目标目录清理
gulp.task('clean', function() {
    return gulp.src(['dist'], {read: false})
        .pipe(clean());
});

// 预设任务，执行清理后，
gulp.task('default', ['clean'], function() {
    gulp.start('styles');
});
