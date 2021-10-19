const a = 123;
() => {
    console.log(1);
}
() => {
    console.log(this);
}
var [b, c, d, e] = [1, 2, 3, 4]
new Promise((resolve, reject) => {
    resolve(1)
})
a = async() => {
    await 2
}
console.log(a);