const Poker = require('./poker')
const util = require('./util')
var pokers = []
for (let i = 1; i <= 13; i++) {
    for (let j = 1; j <= 4; j++) {
        pokers.push(new Poker(j, i))
    }
}
pokers.push(new Poker(null, 14), new Poker(null, 15))
util.sort(pokers)
const poker1 = pokers.slice(0, 17)
const poker2 = pokers.slice(17, 34)
const poker3 = pokers.slice(34, 51)
const dipai = pokers.slice(51)
console.log(util.print(poker1));
console.log(util.print(poker2));
console.log(util.print(poker3));
console.log(util.print(dipai));