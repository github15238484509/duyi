import * as map from "./map.js"

const game = document.getElementById("game")

function createddiv(value, left, top) {
    var div = document.createElement("div")
    div.className = "item"
    div.style.left = left * 45 + 'px'
    div.style.top = top * 45 + 'px'
    if (value === map.SPACE) {
        return div
    } else if (value === map.PLAYER) {
        div.classList.add("player")
        return div
    } else if (value === map.WALL) {
        div.classList.add("wall")
        return div
    } else if (value === map.BOX) {
        div.classList.add("box")
        return div
    }
}

function ceratedbox(value, left, top) {
    var div = createddiv(value, left, top)
    console.log(div);
    game.appendChild(div)
}
export function render() {
    game.innerHTML = ""
    for (let i = 0; i < map.rowNumber; i++) {
        for (let j = 0; j < map.colNumber; j++) {
            ceratedbox(map.content[i][j], i, j)
        }
    }
}