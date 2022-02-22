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
}
Square.prototype.updataBackground = function (color) {
    this.backgroundColor = color
}