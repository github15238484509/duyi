const axios = require("axios")
const cheerio = require("cheerio")
const fs = require("fs")
async function getMove() {
    const result = await axios("https://movie.douban.com/chart")
    const $ = cheerio.load(result.data);
    let trs = $("tr.item")
    var arr = []
    for (let i = 0; i < trs.length; i++) {
        var data = moveOjb($(trs[i]))
        arr.push(data)
    }
    fs.writeFile("./a.json", JSON.stringify(arr), function() {
        console.log("ok");
    })
}

function moveOjb(str) {
    let name = str.find(".pl2 a").text().split("/")[0].trim()
    let imgurl = str.find(".nbg img").attr("src")
    let detail = str.find(".pl").text().split("/")[0].trim()
    return {
        name,
        imgurl,
        detail
    }
}

module.exports = getMove