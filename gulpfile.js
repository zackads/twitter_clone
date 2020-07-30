let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
let rename = require('gulp-rename');
let sass = require('gulp-sass');
let uglify = require('gulp-uglify-es').default;
let concat = require('gulp-concat');

// watches the files and automatically updates them when save is clicked

gulp.task('watch', () => {
  return gulp.watch(['scss/**/*.scss', 'js/*.js', '!js/*.min.js', '!js/all.js'],
  gulp.parallel(['minify-sass', 'uglify-scripts']));
});

// compresses css file

gulp.task('minify-css', () => {
    return gulp.src('css/styles.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('./css/'));
  });

// converts sass to css 

gulp.task('sass', function () {
  return gulp.src('./scss/styles.scss')
      .pipe(sass())
      .pipe(rename('styles.css'))
      .pipe(gulp.dest('./css/'));
  });

// combines sass convertor and css compressor together in series 

  gulp.task('minify-sass', gulp.series('sass', 'minify-css'));

// compresses js files

gulp.task('uglify', function () {
  return gulp.src(['js/*.js', '!js/*.min.js', '!js/all.js'])
      .pipe(rename({suffix: '.min'}))
      .pipe(uglify())
      .pipe(gulp.dest('./js/'));
});

// concatinate compressed js files together

gulp.task('scripts', function() {
  return gulp.src('./js/*.min.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./js/'));
});

// combines js compressor and js concatinator together in series 

gulp.task('uglify-scripts', gulp.series('uglify', 'scripts'));