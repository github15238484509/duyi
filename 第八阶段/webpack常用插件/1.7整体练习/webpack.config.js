const base = require("./webpack.base")
const dev = require("./webpack.dev")
const pro = require("./webpack.pro")
module.exports = function(env) {
    console.log(env.prod);
    if (env.prod) {
        return {
            ...base,
            ...pro
        }
    } else {
        return {
            ...base,
            ...dev
        }
    }
}