const { src, dest, watch } = require('gulp');
const pug = require('gulp-pug');

const views = () => {
    return src('./src/layout/components/**/*.pug')
        .pipe(
            pug({
                pretty:true
            })
        )
    .pipe(dest('./build'));
};

watch('./src/layout/components/**/*.pug', views);

exports.default = views