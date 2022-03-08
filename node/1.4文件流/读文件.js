const fs = require("fs")
const path = require('path')
const readStream = fs.createReadStream(path.join(__dirname, "package.json"), {
    encoding: "utf-8",
    highWaterMark: 2
})
var str = ''
readStream.on('error',(e)=>{
    console.log('error',e);
})
readStream.on('open', (data) => {
    console.log('open', data);
})
readStream.on("data", (chunk) => {
    str += chunk
    readStream.pause()
    setTimeout(()=>{
        readStream.resume()
    },10)
})
readStream.on("end", () => {
    console.log('over', str);
})
readStream.on('close', (e) => {
    console.log('close', e);
})
