const path = require('path')
const fs = require('fs')
const readPath = path.join(__dirname, "./write.txt")
const writePath = path.join(__dirname, "./writeCopy.txt")
var readStream = fs.createReadStream(readPath)
var writeStream = fs.createWriteStream(writePath, {
    flags: 'a'
})


readStream.pipe(writeStream)


// readStream.on("data", (chunk) => {
//     var falgs = writeStream.write(chunk)
//     if (!falgs) {
//         readStream.pause()
//     }
// })
// writeStream.on('drain', () => {
//     readStream.resume()
// })
// readStream.on('end', () => {
//     console.log('读完了');
//     writeStream.close()
// })
// writeStream.on('close', () => {
//     console.log('写 close');
// })