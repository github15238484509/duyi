const fs = require("fs")
const path = require('path')
const writePath = path.join(__dirname, "./write.txt")
const writeStream = fs.createWriteStream(writePath, {
    flags: 'w',
    encoding: 'utf-8',
    highWaterMark: 1
})
writeStream.on("open", (e) => {
    console.log('open', e);
})
writeStream.on('close', (e) => {
    console.log('close', e);
})

writeStream.on('drain', () => {
    console.log(5555);
    write()
})
var i = 0

function write() {
    var flags = true
    while (i < 1024 * 1024 *10 && flags) {
        flags = writeStream.write('a')
        i++
    }
}
write()