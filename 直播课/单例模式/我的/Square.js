/**
 * 
 * @param {*} x  
 * @param {*} y 
 * @param {*} width 
 * @param {*} height 
 * @param {*} dom 
 */

function Square(x, y, width, height, dom) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.dom = dom || document.createElement("div");
    this.backgroundColor = "";
}
Square.prototype.updataPostion = function (x, y) {
    this.x = x;
    this.y = y;
    this.render()
}
Square.prototype.updataBackground = function (color) {
    this.backgroundColor = color
}
Square.prototype.render = function () {
    this.dom.style.backgroundColor = this.backgroundColor;
    this.dom.style.position = "absolute";
    this.dom.style.left = this.x + 'px'
    this.dom.style.top = this.y + 'px'
    this.dom.style.height = this.height + 'px'
    this.dom.style.width = this.width + 'px'
}