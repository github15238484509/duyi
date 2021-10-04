// 封装的 DOM 查询函数
function $(selector) {
    return document.querySelector(selector);
}

// 接下来我们来获取 DOM 节点
var imgBox = $('.imgBox'); // 图片容器
var imgBlock = $('.imgBlock'); // 可以拖动的图片块
var imgGap = $('.imgGap'); // 图片缺口 
var title = $('.imgContainer h3'); // 获取标题
var slider = $('.slider'); // 滑块条
var btn = $('#btn'); // 拖动的滑块
var span = $('.slider span'); // 滑块条中间的文字

// 程序主函数
function main(){
    // 1. 随机生成背景图片
    var imgArr = ['t1.png','t2.png','t3.png','t4.png','t5.png']; // 背景图数组
    // 进来的时候应该从上面的数组中随机获取一张背景图
    var randomImg = Math.floor(Math.random() * imgArr.length);

    // 这里会用到 ES6 的字符串模板的知识
    // var name = "xiejie"
    // console.log("Hello," + name + "bye bye");
    // console.log(`Hello,${name}bye bye`);

    // 接下来我们就要设置背景图了
    imgBox.style.backgroundImage = `url('../img/${imgArr[randomImg]}')`;
    imgBlock.style.backgroundImage = `url('../img/${imgArr[randomImg]}')`;

    // 计算拖动图块和空缺图块的位置
    var heightRange = imgBox.offsetHeight - imgBlock.offsetHeight; // top 的最大值
    var widthRange = imgBox.offsetWidth / 2 - imgBlock.offsetWidth; // left 的最大值

    // 生成随机的 left 和 top 值
    var top = Math.random() * heightRange;
    var left = Math.random() * widthRange + imgBox.offsetWidth / 2;

    // 接下来设置图片缺口的 left 和 top 值
    imgGap.style.left = left + "px";
    imgGap.style.top = top + "px";

    // 设置可以拖动的图块的 left 和 top 值
    imgBlock.style.left = "0px";
    imgBlock.style.top = top + "px";
    imgBlock.style.backgroundPositionY = -top + "px";
    imgBlock.style.backgroundPositionX = -left + "px";

    // 初始化工作相关的代码

    // 拖动事件
    btn.onmousedown = function(e){
        // 设置拖动图块
        imgBlock.style.opacity = 1;
        imgBlock.style.transition = 'none'
        
        // 设置标题
        title.innerHTML = '拖动图片完成验证';
        title.style.color = 'black';

        // 设置滑动条的文字不可见
        span.style.opacity = 0;

        btn.style.transition = 'none';

        // 为整个滑动条添加鼠标移动效果
        slider.onmousemove = function(ev){
            // 我们需要实时的获取到方块最新的 left 值
            var newLeft = ev.clientX - slider.offsetLeft - e.offsetX;

            // 这里还需要做一个边界的判断
            if(newLeft < -2){
                newLeft = -2;
            }
            if(newLeft > (imgBox.offsetWidth - imgBlock.offsetWidth)){
                newLeft = imgBox.offsetWidth - imgBlock.offsetWidth + "px"
            }

            imgBlock.style.left = newLeft + "px";
            btn.style.left = newLeft + "px";
        }

        // 鼠标抬起事件
        document.onmouseup = function(){
            // 判断两个盒子是否重合，其实就是判断两个盒子的 left
            var diffLeft = imgGap.offsetLeft - imgBlock.offsetLeft; // 获取到两个盒子的 left 差值
            if(diffLeft < 5 && diffLeft > -5){
                // 验证成功
                imgBlock.style.opacity = 0;
                imgGap.style.opacity = 0;

                // 设置 title
                title.innerHTML = "验证成功";
                title.style.color = "red";
                // 删除所有的事件
                slider.onmousemove = btn.onmousedown = document.onmouseup = null;
            } else {
                // 验证失败，拖动的图块和下方的滑块要回到初始位置
                imgBlock.style.left = "0px";
                btn.style.left = "-2px"
                slider.onmousemove = document.onmouseup = null;
                // 添加过渡效果
                imgBlock.style.transition = 'all .5s';
                btn.style.transition = 'all .5s';

                // 设置 title
                title.innerHTML = "验证失败";
                title.style.color = "green";

                span.style.opacity = 1;
            }
        }
    }

}

main();