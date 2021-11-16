export default function deteFormat(time, isS = false) {
    const date = new Date(+time)
    var yeat = date.getFullYear()
    var month = date.getMonth()
    var day = date.getDay()
    month = month.toString().padStart(2, "0")
    day = day.toString().padStart(2, "0")
    var str = `${yeat}-${month}-${day}`
    if (isS) {
        var hours = date.getHours()
        var Minutes = date.getMinutes()
        var seconds = date.getSeconds()
        hours = hours.toString().padStart(2, "0")
        Minutes = Minutes.toString().padStart(2, "0")
        seconds = seconds.toString().padStart(2, "0")
        return str + ` ${hours}:${Minutes}:${seconds}`
    } else {
        return str
    }
}