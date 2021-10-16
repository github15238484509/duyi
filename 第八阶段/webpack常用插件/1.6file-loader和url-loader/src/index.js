const url = require("./assets/1.jpg").default
console.log(444);
console.log(url);
const img = new Image()
img.src = url
img.onload = function() {
    document.body.appendChild(this)
}