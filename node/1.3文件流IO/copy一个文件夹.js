const path = require("path")
const fs = require("fs")
const {
    fileInfo
} = require("./读取一个目录的所有文件.js")
const originPath = path.join(__dirname)
const targetPath = path.join(__dirname, "../", "555")

async function copy(targetPath, originPath) {
    const copyInfo = await fileInfo.create(originPath)
    console.log(targetPath, originPath);
    if (!copyInfo.isFile) { //false 表示是文件夹
        let mkdir = path.join(targetPath)
        try {
            await fs.promises.mkdir(mkdir)
            let childenList = await copyInfo.getChilden()
            for (let i = 0; i < childenList.length; i++) {
                let chilPath = path.join(childenList[i].filePath)
                let newPath = ''
                if (!childenList[i].isFile) {
                    newPath = path.join(targetPath, copyInfo.fileName + '_Copy', childenList[i].fileName + '_Copy')
                } else {
                    newPath = path.join(targetPath, copyInfo.fileName + '_Copy', 'Copy_' + childenList[i].fileName)
                }
                if (!childenList[i].isFile) {
                    console.log(targetPath, newPath);
                    // copy(newPath, chilPath)
                }
                // copy(newPath, chilPath)
            }
        } catch (error) {
            let childenList = await copyInfo.getChilden()
            for (let i = 0; i < childenList.length; i++) {
                let chilPath = path.join(childenList[i].filePath)
                let newPath = ''
                if (!childenList[i].isFile) {
                    newPath = path.join(targetPath, copyInfo.fileName + '_Copy', childenList[i].fileName + '_Copy')
                } else {
                    newPath = path.join(targetPath, copyInfo.fileName + '_Copy', 'Copy_' + childenList[i].fileName)
                }
                if (!childenList[i].isFile) {
                    console.log(targetPath, newPath);
                    copy(newPath, chilPath)
                }
                // copy(newPath, chilPath)
            }
        }
    } else {
        let originDir = path.join(originPath)
        let mkdir = path.join(targetPath)
        var data = await fs.promises.readFile(originDir, "utf-8")
        // console.log(mkdir);
        fs.promises.writeFile(mkdir, data)
    }
}
// copy(targetPath, originPath)
async function Copy(originPath,back) {
    const copyInfo = await fileInfo.create(originPath)
    if (!copyInfo.isFile) { //是文件夹
        let newFolder = path.join(copyInfo.filePath, "../",back, 'copyFolder_' + copyInfo.fileName)
        createFolder(newFolder)
        let childen = await copyInfo.getChilden()
        for (let i = 0; i < childen.length; i++) {
            Copy(childen[i].filePath,back+'../')
        }
    } else { //不是文件夹
        let newFolder = path.join(copyInfo.filePath, "../",back, 'copyFile_' + copyInfo.fileName)
        let current = copyInfo.filePath
        createFile(current, newFolder)
    }
}

function createFolder(newFolder) {
    fs.mkdir(newFolder,()=>{
        console.log("ok");
    })
}
async function createFile(origin, target) {
    let result = await fs.promises.readFile(origin)
    fs.writeFile(target, result)
}

// Copy(originPath,'')