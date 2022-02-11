function getMap(tr, td) {
    var map = new Array(tr)
    for (let x = 0; x < tr; x++) {
        map[x] = new Array(td)
        // for (let y = 0; y < td; y++) {
        //     map[x][y] = null;
        // }
    }
    return map
}
var map = getMap(tr, td)
// console.log(map);