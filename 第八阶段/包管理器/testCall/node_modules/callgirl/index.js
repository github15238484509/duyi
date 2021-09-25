const config = require("./index.json")

function call() {
    console.log(config.name);
}
module.exports = call