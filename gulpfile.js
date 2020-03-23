const { src, dest, parallel } = require('gulp');
const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const webpack = require('gulp-webpack');

function css() {
    return src('css/*.css')
        .pipe(minifyCSS())
        .pipe(dest('dist/css'));
}

function js() {
    return src('src/*.js')
        .pipe(webpack())
        .pipe(concat('tetris.min.js'))
        .pipe(uglify())
        .pipe(dest('dist'));
}

exports.js = js;
exports.css = css;
exports.default = parallel(css, js);
