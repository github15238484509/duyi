const fs = require('fs')
const path = require('path')

exports.fileInfo = class fileInfo {
    constructor(filePath, fileName, size, isFile, birthTime) {
        this.filePath = filePath
        this.fileName = fileName
        this.size = size
        this.isFile = isFile
        this.birthTime = birthTime
    }
    async getChilden() {
        let childen = []
        if (!this.isFile) {
            let childenLsit = await fs.promises.readdir(this.filePath)
            for (let index = 0; index < childenLsit.length; index++) {
                var filepath = path.join(this.filePath, childenLsit[index])
                let result = await fileInfo.create(filepath)
                childen.push(result)
            }
        }
        return childen
    }
    static async create(filePath) {
        const info = await fs.promises.stat(filePath)
        let name = path.basename(filePath)
        let size = info.size
        let isFile = info.isFile()
        let birthTime = info.birthtime
        return new fileInfo(filePath, name, size, isFile, birthTime)
    }
}
async function test() {
    let FilePath = path.resolve(__dirname)
    var fileinfo = await fileInfo.create(FilePath)
    console.log(fileinfo);
    var childen = await fileinfo.getChilden()
    console.log(childen);
}
// test()