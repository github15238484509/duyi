const { watch, series, dest, src } = require('gulp')
const HtmlClean = require("gulp-htmlclean")
const uglify = require("gulp-uglify")
const StriptDebug = require("gulp-strip-debug")
const less = require("gulp-less")
const CleanCss = require("gulp-cleancss")
const connect = require("gulp-connect")
const folder = {
    entry: "src/",
    output: "dist/"
}


function html() {
    return src(folder.entry + 'html/*')
        .pipe(HtmlClean())
        .pipe(dest(folder.output + 'html'))
        .pipe(connect.reload())
}


function js() {
    return src(folder.entry + 'js/*')
        .pipe(StriptDebug())
        .pipe(uglify())
        .pipe(dest(folder.output + 'js'))
        .pipe(connect.reload())
}

function css() {
    return src(folder.entry + 'css/*')
        .pipe(less())
        .pipe(CleanCss())
        .pipe(dest(folder.output + 'css'))
        .pipe(connect.reload())
}

function image(cd) {
    return src(folder.entry + 'image/*')
        .pipe(dest(folder.output + 'image'))
        .pipe(connect.reload())
}

function server(cd) {
    connect.server({
        port: "9527",
        livereload: true
    })
    cd()
}
watch(folder.entry, {}, function(cd) {
    html();
    js();
    css();
    image();
    cd();
})

exports.default = series(html, js, css, image, server)