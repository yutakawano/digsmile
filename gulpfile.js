const { watch, series, src, dest } = require('gulp');

const scss            = require('gulp-sass');
const autoprefixer    = require('gulp-autoprefixer');
const plumber         = require('gulp-plumber');
const sourcemaps      = require('gulp-sourcemaps');

function scssCompile() {
  return src('src/scss/*.scss')
  .pipe(plumber())
  .pipe(sourcemaps.init())
  .pipe(scss.sync({outputStyle: 'compressed'}).on('error', scss.logError))
  .pipe(sourcemaps.init({loadMaps: true}))
  .pipe(autoprefixer({cascade: false}))
  .pipe(sourcemaps.write())
  .pipe(dest('./css/'));
}

exports.default = function() {
  watch('src/scss/*.scss', { ignoreInitial: false }, series(scssCompile));
};
