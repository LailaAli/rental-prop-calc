const gulp = require('gulp');
const jshint = require('gulp-jshint');
const jscs = require('gulp-jscs');
const minifyHtml = require('gulp-minify-html');
const angularTemplatecache = require('gulp-angular-templatecache');
const useref = require('gulp-useref');
const ngAnnotate = require('gulp-ng-annotate');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const del = require('del');

const config = {
  js: 'js/**/*.js',
  images: 'images/*.*',
  fonts: 'fonts/*.*',
  html: 'templates/*.html',
  temp: 'temp/'
};

const dist = {
  path: 'dist/',
  images: 'images/',
  fonts: 'fonts/'
};

//Helper Tasks
gulp.task('clean-images', function() {
  del(dist.path + dist.images);
});

gulp.task('clean-fonts', function() {
  del(dist.path + dist.fonts);
});

gulp.task('clean-js', function() {
  del(dist.path + dist.js);
});

gulp.task('clean-styles', function() {
  del(dist.path + dist.css);
});


// Custom Tasks

gulp.task('default', function() {
  return gulp.src('src/**/*.js') /** 1 **/
    .pipe(jshint()) /** 2 **/
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'))
    .pipe(gulp.src('vendor/**/*.js', {passthrough: true})) /** 3 **/
    .pipe(uglify())
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest('dest'));
});

gulp.task('vet', function() {
  return gulp
    .src([config.js])
    .pipe(jshint())
    .pipe(jscs())
    .pipe(
      jshint.reporter('jshint-stylish'),
      { verbose: true }
    )
    .pipe(jshint.reporter('fail'));
});

gulp.task('templatecache', function() {
  return gulp
    .src(config.html)
    .pipe(minifyHtml({ empty: true }))
    .pipe(
      angularTemplatecache('templates.js', {
        module: 'todomvc',
        standAlone: false,
        root: 'templates/'
      })
    )
    .pipe(gulp.dest(config.temp));
});

gulp.task(
  'useref',
  gulp.series(['default', 'clean-js', 'clean-styles'], function() {
    const assets = useref.assets();

    return gulp
      .src('index.html')
      .pipe(assets)
      .pipe(assets.restore())
      .pipe(useref())
      .pipe(gulp.dest('dist'));
  })
);

gulp.task(
  'minifyjs',
  gulp.series(['useref', 'templatecache'], function() {
    return gulp
      .src(['dist/js/scripts.js', 'temp/templates.js'])
      .pipe(concat('scripts.js'))
      .pipe(ngAnnotate())
      .pipe(uglify())
      .pipe(gulp.dest('dist/js/'));
  })
);

gulp.task(
  'copy-images',
  gulp.series(['clean-images'], function() {
    return gulp.src([config.images]).pipe(gulp.dest(dist.path + dist.images));
  })
);

gulp.task(
  'copy-fonts',
  gulp.series(['clean-fonts'], function() {
    return gulp.src([config.fonts]).pipe(gulp.dest(dist.path + dist.fonts));
  })
);

gulp.task(
  // name of task
  'build',
  // gulp.series: tasks that need to run before this task
  gulp.series(['copy-fonts', 'copy-images', 'minifyjs'], function() {
    del(config.temp);
  })
);
