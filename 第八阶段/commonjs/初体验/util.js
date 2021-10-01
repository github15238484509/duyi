let count = 0;

function getCoun() {
    return count++
}
exports.name = "util"
module.exports.getCoun = getCoun