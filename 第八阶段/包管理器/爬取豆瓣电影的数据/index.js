const axios = require("axios")
const cheerio = require("cheerio")
const fs = require("fs")

async function getMoveStr() {
    const result = await axios("https://movie.douban.com/chart")
    moveOjb(result.data)
        // fs.writeFile("./a.json", JSON.stringify(result), function() {
        //     console.log("ok");
        // })
}

function moveOjb(str) {
    const $ = cheerio.load(str);
    var result = $("tr.item")
    console.log(result.length);
    for (let i = 0; i < result.length; i++) {
        console.log(result[i].txt());
    }
}
getMoveStr()