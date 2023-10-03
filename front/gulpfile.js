const {src, dest, watch, task, parallel, series} = require('gulp');

const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass')(require('sass'));

task(
    'pug',
    () => src('src/pages/**/*.pug')
        .pipe(pug({pretty:true}))
        .pipe(dest('build'))
);

task(
    'sass',
    () => src('src/style/index.sass')
        .pipe(sass({pretty:true}))
        .pipe(dest('build/style'))
);

task(
    'watch',
    () => {
        watch('src/**/*.pug', series('pug'));
        watch('src/**/*.sass', series('sass'));
    }
);

task(
    'default',
    gulp.series (
        parallel('pug'),
        parallel('sass'),
        parallel( 'watch')
    )
);