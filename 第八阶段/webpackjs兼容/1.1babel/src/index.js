const { async } = require("regenerator-runtime");

const a = 123;
() => {
    console.log(1);
}
() => {
    console.log(this);
}
var [b, c, d, e] = [1, 2, 3, 4]

new Promise((resolve, reject) => {
    console.log(444);
    resolve()
})
async function test() {
    await 2
}
console.log(test());