function sort(arr) {
    arr.sort((a, b) => {
        return Math.random() - 0.5
    })
}

function print(arr) {
    var str = ""
    for (const key of arr) {
        str += " " + key.toString()
    }
    return str
}
module.exports = {
    sort,
    print
}