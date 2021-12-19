const gulp = require('gulp');

// 导入各种个样的插件
// 插件就是帮助我们做各种各样的事情（打包、压缩...）

const autoprefixer = require("gulp-autoprefixer"); // CSS 代码添加前缀
const uglify = require("gulp-uglify"); // 压缩 JS 代码
const htmlmin = require("gulp-htmlmin"); // 压缩 HTML 代码
const babel = require("gulp-babel"); // ES6 代码转换
const cssmin = require("gulp-cssmin");

// 配置各种各种任务

const htmlHandler = function () {
    return gulp.src('./src/html/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true, // 表示移出空格
            removeEmptyAttributes: true, // 表示移出空的属性(仅限于原生属性)
            collapseBooleanAttributes: true, // 移出 checked 类似的布尔值属性
            removeAttributeQuotes: true, // 移出属性上的双引号
            minifyCSS: true, // 压缩内嵌式 css 代码(只能基本压缩, 不能自动添加前缀)
            minifyJS: true, // 压缩内嵌式 JS 代码(只能基本压缩, 不能进行转码)
            removeStyleLinkTypeAttributes: true, // 移出 style 和 link 标签上的 type 属性
            removeScriptTypeAttributes: true, // 移出 script 标签上默认的 type 属性
        })) // 管道方法，接收一个流进行处理，返回处理后的流
        .pipe(gulp.dest('./dist/html'));
}

// 配置 CSS
const cssminHandler = function(){
    return gulp.src('./src/css/*.css')
            .pipe(autoprefixer())
            .pipe(cssmin())
            .pipe(gulp.dest('./dist/css'))
}

// 配置 JS
const jsHandler = function(){
    return gulp.src('./src/js/*.js')
            .pipe(babel({
                presets : ['@babel/env']
            }))
            .pipe(uglify())
            .pipe(gulp.dest('./dist/js'))
}

const imgHandler = function () {
    return gulp.src('./src/images/**')
        .pipe(gulp.dest('./dist/images'))
}

// 导出
module.exports.default = gulp.parallel(htmlHandler, cssminHandler, jsHandler, imgHandler)