/**
 * 
 *  单对象的编程
 *  
 * 
 */

var drawingBoard = {
    cavs: document.getElementById('cavs'), //画板
    ctx: document.getElementById('cavs').getContext('2d'), //获得笔触
    colorBtn: document.getElementById('colorChange'),
    lineRuler: document.getElementById('lineRuler'),
    btn_container: document.getElementsByTagName('ul')[0],
    imgArr: [],
    bool: false,
    init: function() {
        this.ctx.lineCap = 'round'; //线条其实和结尾样式 柔和 
        this.ctx.lineJoin = 'round'; //转弯

        this.drawing(); //作画
        this.btnsFn(); //按钮区域的功能
    },
    drawing: function() {
        var self = this;
        var cavs = this.cavs;
        var c_left = cavs.offsetLeft; //画板距离屏幕左边的距离
        var c_top = cavs.offsetTop; //画板距离屏幕顶边的距离
        this.cavs.onmousedown = function(e) { //鼠标按下事件
            // e.pageX 鼠标距离浏览器左边的坐标距离
            var c_x = e.pageX - c_left;
            var c_y = e.pageY - c_top;
            self.ctx.beginPath(); //开启新的路径
            self.ctx.moveTo(c_x, c_y);

            var img = self.ctx.getImageData(0, 0, self.cavs.offsetWidth, self.cavs.offsetHeight);
            self.imgArr.push(img);
            console.log(self.imgArr);


            self.cavs.onmousemove = function(e) { //鼠标移动
                self.ctx.lineTo(e.pageX - c_left, e.pageY - c_top);
                self.ctx.stroke();
            }

            self.cavs.onmouseup = function() {
                self.cavs.onmousemove = null;
                self.ctx.closePath();
            }

            self.cavs.onmouseleave = function() {
                self.cavs.onmousemove = null;
                self.ctx.closePath();
            }



        }

    },
    btnsFn: function() {
        var self = this;
        this.colorBtn.onchange = function() { //颜色的改变
            console.log(this.value);
            self.ctx.strokeStyle = this.value;
        }

        this.lineRuler.onchange = function() {
            console.log(this.value);
            self.ctx.lineWidth = this.value;
        }

        //其他三个按钮 

        this.btn_container.onclick = function(e) {
            console.log(e.target.id);
            switch (e.target.id) {
                case 'cleanBoard':
                    //清屏
                    self.ctx.clearRect(0, 0, self.cavs.offsetWidth, self.cavs.offsetHeight);
                    if (self.imgArr.length > 0) { //判断图片数组里是否有图片，有的话就清空，防止撤销
                        self.imgArr.splice(0, self.imgArr.length);
                        console.log(self.imgArr);
                    }
                    break;
                case 'eraser':
                    //橡皮
                    self.ctx.strokeStyle = '#ffffff';
                    break;

                case 'rescind':
                    //撤销
                    if (self.imgArr.length > 0) {
                        self.ctx.putImageData(self.imgArr.pop(), 0, 0);
                    }


                    break;
            }




        }







    }

}
drawingBoard.init(); //函数入口