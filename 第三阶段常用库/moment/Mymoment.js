//获取当前月分有多少天
function getCurrentMonth(moment) {
    return moment.daysInMonth()
}
// 获取当前月份第一天星期几
function getCurrentWeek(moment) {
    return moment.clone().startOf("month").weekday()
}

function setTime() {
    document.querySelector(".demo1").innerHTML = moment().format("HH:mm:s")
    document.querySelector(".demo2").innerHTML = moment().format("YYYY年MM月DD日")
}
setTime()
setInterval(setTime, 1000)

function renderDate(mo) {
    var ul = document.querySelector("ul")
    var date = document.querySelector(".date")
    var week = getCurrentWeek(mo)
    console.log(week);
    week == 0 ? week = 7 : week = week
    var perMonth = getCurrentMonth(mo.clone().subtract(1, "month"))
    var nextDate = 1
    var str = ""
    for (let i = 0; i < 42; i++) {
        if (i < (week - 1)) {
            str += `<li class="color">
          <span>${perMonth - (week - 2) + i}</span>
      </li>`
        } else if (i >= (perMonth + week - 1)) {
            str += `<li class="color">
                <span>${nextDate}</span>
            </li>`
            nextDate++
        } else {
            console.log(mo.get("year"));
            var active = ""
            if (mo.date() == (i - week + 2) && mo.get("year") == moment().get("year") && mo.get("month") == moment().get("month")) {
                active = "active"
            } else {
                active = ""
            }
            str += `<li class="${active}">
            <span>${i - week + 2}</span>
        </li>`
        }

    }
    date.innerHTML = mo.format("YYYY年MM月")
    ul.innerHTML = str
}
var curren = moment()

renderDate(curren)
var up = document.querySelectorAll(".btn span")[0]
var down = document.querySelectorAll(".btn span")[1]

up.onclick = function() {
    renderDate(curren.subtract(1, "month"))
}
down.onclick = function() {
    renderDate(curren.add(1, "month"))

}