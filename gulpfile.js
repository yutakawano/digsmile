const { watch, series, src, dest } = require('gulp');

const scss                               = require('gulp-sass');
const autoprefixer                       = require('gulp-autoprefixer');
const plumber                            = require('gulp-plumber');

function scssCompile() {
  return src('src/scss/*.scss')
  .pipe(plumber())
  .pipe(scss.sync().on('error', scss.logError))
  .pipe(autoprefixer({
    cascade: false
  }))
  .pipe(dest('./css/'));
}

exports.default = function() {
  watch('src/scss/*.scss', { ignoreInitial: false }, series(scssCompile));
};
