const { series, parallel, src, dest, watch } = require("gulp")
const uglify = require("gulp-uglify")
const rename = require('gulp-rename')
watch("./src/css/*", {}, function(cd) {
    console.log('文件被修改了');
    cd()
})

function defaultTask(cb) {
    // place code for your default task here
    console.log('tmd');
    cb();
}

function say(cd) {
    console.log('sya执行了');
    cd()
}
exports.say = say;
exports.default = defaultTask;
exports.series = series(say, defaultTask)
exports.parallel = parallel(say, defaultTask)
exports.dist = function() {
    console.log('我要输出文件了');
    return src("./src/js/*.js")
        .pipe(dest("./dist/js"))
        .pipe(uglify())
        .pipe(rename({
            extname: ".min.js"
        }))
}