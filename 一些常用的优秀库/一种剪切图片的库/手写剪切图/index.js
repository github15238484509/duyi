var showbox = document.querySelector(".showbox")
var docu = document.documentElement

var orginX = 0;
var orginY = 0;

function down(e) {
    var startX = e.clientX
    var startY = e.clientY
    var endX = 0
    var endY = 0
    docu.addEventListener("mousemove", move)

    function move(e) {
        endX = e.clientX - startX + orginX;
        endY = e.clientY - startY + orginY;
        if (endX <= 0) {
            endX = 0
        }
        if (endY <= 0) {
            endY = 0
        }

        if (endX >= 250) {
            endX = 250
        }
        if (endY >= 250) {
            endY = 250
        }
        showbox.style.transform = `translate(${endX}px, ${endY}px)`
        drawImage(endX, endY)
    }

    function up(e) {
        orginX = endX
        orginY = endY
        docu.removeEventListener("mousemove", move)
        docu.removeEventListener("mouseup", up)
    }
    docu.addEventListener("mouseup", up)
}


showbox.addEventListener("mousedown", down)


var canvas = document.querySelector("canvas")
var img = document.querySelector(".img")
var save = document.querySelector(".save")
canvas.height = canvas.parentElement.offsetHeight
canvas.width = canvas.parentElement.offsetWidth
var ctx = canvas.getContext("2d")
drawImage()
function drawImage(x = 0, y = 0) {
    ctx.clearRect(0, 0, 500, 500)
    ctx.drawImage(img, x, y, 250, 250, 0, 0, 500, 500)
}
save.onclick = function () {
    canvas.toBlob(function (e) {
        var a = document.createElement("a")
        a.download = Math.random()+'.png'
        a.href = URL.createObjectURL(e)
        a.click()
    })
}