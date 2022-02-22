var ground = new Ground(positionX, positionY, tr*squareWidth, td*squareWidth);
// console.log(ground);

ground.init = function(){
  // 主要初始化 ground 对象的 dom 元素
  this.viewContent.style.position = "absolute";
  this.viewContent.style.left = this.x + "px";
  this.viewContent.style.top = this.y + "px";
  this.viewContent.style.width = this.width + "px";
  this.viewContent.style.height = this.height + "px";
  this.viewContent.style.background = "orange";

  document.body.appendChild(this.viewContent);
}

ground.init();