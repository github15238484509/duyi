var str = "阿道夫静安寺开放的接口垃圾啊水上飞机"
var str1 = "a4121032453dfsa"

/**
 * 
 * @param {String} str 字符串
 * @param {Number} padStart  前面保留几位
 * @param {Number} padEnd  后面保留几位
 * @param {String} type 匹配后转换成什么  
 */
function formatStr(str, padStart = 1, padEnd = 1, type = "...") {
    var length = str.length;
    if ((padStart + padEnd) >= length) {
        return ""
    }
    var reg = ".{" + padStart + "}(.+?).{" + padEnd + "}$"
    return str.replace(new RegExp(reg),
        function (a, b) {
            return a.replace(b, type)
        })
}

console.log(formatStr(str1, 5, 4))