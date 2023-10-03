const { src, dest } = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass')(require('sass'));

exports.taskPug = () => {
  return src('./src/pages/**/*.pug')
    .pipe(
      pug({
        pretty:true
      })
    )
    .pipe(dest('./build'));
};

exports.buildStyles = () => {
  return src('./src/style/index.sass')
    .pipe(
      sass().on('error', sass.logError)
      )
    .pipe(dest('./build/style'));
};