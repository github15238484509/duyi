import * as util from "./util"
import { duration } from "./createele"
const box = document.getElementById('box')
const center = document.getElementById('center')
const body = document.body

function createspan(num, color) {
    const span = document.createElement("span")
    span.innerHTML = num
    if (util.isprime(num)) {
        span.style.color = color
    }
    box.appendChild(span)
}

function createcenter(num, color) {
    center.innerHTML = num
    if (util.isprime(num)) {
        const div = document.createElement("div")
        div.innerHTML = num
        div.className = "center"
        div.style.color = color
        body.appendChild(div)
        div.addEventListener("transitionend", function() {
            this.remove()
        })
        div.offsetHeight
        div.style.transform = ` translate(${util.random(-200,200)}px,${util.random(-200,200)}px)`
        div.style.opacity = 0
    }
}
const itme = new duration(100)
itme.callbakc = function(num) {
    const color = util.getColor();
    createspan(num, color)
    createcenter(num, color)
    body.scrollIntoView(false, {
        behavior: 'smooth'
    })
}
let flage = true
itme.start()
window.onclick = function() {
    if (flage) {
        itme.stop()
        flage = false
    } else {
        itme.start()
        flage = true
    }
}