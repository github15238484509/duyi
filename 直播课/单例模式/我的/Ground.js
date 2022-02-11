var Ground = Tool.signal(Tool.extends(Square))
var ground = new Ground(groundX, groundY, groundWidht, groundHeight)
ground.updataBackground(groundColor)
ground.init = function () {
    this.dom.style.backgroundColor = this.backgroundColor;
    this.dom.style.position = "absolute";
    this.dom.style.left = this.x + 'px'
    this.dom.style.top = this.y + 'px'
    this.dom.style.height = this.height + 'px'
    this.dom.style.width = this.width + 'px'
    document.body.appendChild(this.dom)

    console.log(map);
    for (let i = 0; i < map.length; i++) {
        
    }

}
ground.init()