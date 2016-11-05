var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var rename      = require("gulp-rename");
var uglify      = require('gulp-uglify');

// define tasks here
gulp.task('default', function(){
  // run tasks here
  // set up watch handlers here
});

// create a task that ensures the `js` task is complete before
// reloading browsers
gulp.task('js-watch', function (done) {
    browserSync.reload();
    done();
});

gulp.task('uglify', function() {
  gulp.src('js/windowsize.js')
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('js'))
});

gulp.task('serve', function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    gulp.watch(["js/windowsize.js", "index.html"], ['js-watch']);
});