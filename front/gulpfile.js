const { src, dest } = require('gulp');
const pug = require('gulp-pug');

exports.taskPug = () => {
  return src('./src/pages/**/*.pug')
    .pipe(
      pug({
        pretty:true
      })
    )
    .pipe(dest('./build'));
};
