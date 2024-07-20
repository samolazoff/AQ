const { src, dest, watch } = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass')(require('sass'));

const pugToHtml = () => {
    return src('./src/layout/components/**/*.pug')
        .pipe(
            pug({
                pretty:true
            })
        )
        .pipe(dest('./build'));
};

const cssToScss = () => {
    return src('./src/styles/index.scss')
        .pipe(
            sass({}).on('error', sass.logError)
        )
        .pipe(dest('./build/styles'))
};

watch('./src/layout/components/**/*.pug', pugToHtml);
watch(['./src/layout/**/*.scss'], cssToScss);

exports.default = pugToHtml;
exports.default = cssToScss;