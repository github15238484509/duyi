const axios = require("axios")
const cheerio = require("cheerio")
async function getBookHtml(url) {
    const result = await axios.get(url)
    return result.data
}

async function getBookLink(id) {
    const result = await getBookHtml(`https://book.douban.com/latest?subcat=%E5%85%A8%E9%83%A8&p=${id}`)
    // console.log(result);
    const $ = cheerio.load(result)
    var links = $(".chart-dashed-list .media .media__img a")
    links = links.map((i, el) => {
        const href = el.attribs["href"];
        return href;
    }).get()
    return links
}
// getBookLink()

async function getBookInfo(url) {
    const result = await getBookHtml(url)
    const $ = cheerio.load(result)

    let name = $("#wrapper h1 ").text().trim();
    let imgurl = $("#mainpic .nbg ").attr().href;
    const spans = $("#info span.pl");
    let napublishDateme = spans.filter((i, ele) => {
        return $(ele).text().includes("出版年");
    });
    let publishDate = napublishDateme[0].nextSibling.data.trim()

    let author = $("#info span a")[0].children[0].data.trim();
    var data = {
        name,
        imgurl,
        publishDate,
        author
    }

    return data
}
// getBookInfo('https://book.douban.com/subject/35754129/')

const book = require("../models/Book")
async function mockBook(list) {
    await book.create(list)
    console.log('ok');
}
async function delay(time = 1000) {
    return new Promise(RESOVE => {
        setTimeout(() => {
            RESOVE()
        }, time)
    })
}

async function getBookPageList() {
    for (let i = 0; i < 100; i++) {
        let links = await getBookLink(i)
        await delay()
        for (let j = 0; j < links.length; j++) {
            var data = await getBookInfo(links[j])
            await delay()
            console.log(data);
            await mockBook(data)
            await delay()
        }
    }
}
// getBookPageList()