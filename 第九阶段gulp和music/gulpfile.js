const { series, parallel } = require("gulp")

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