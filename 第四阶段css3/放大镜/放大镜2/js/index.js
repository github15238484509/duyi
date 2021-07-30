// 封装获取 DOM 节点的元素
function $(selector){
    return document.querySelector(selector);
}

function $$(selector){
    return document.querySelectorAll(selector);
}

// 接下来，我们需要做一些初始化的工作
var imgs = {
    // 小图
    small : ['imgA_1.jpg','imgB_1.jpg','imgC_1.jpg'],
    // 中图
    middle : ['imgA_2.jpg','imgB_2.jpg','imgC_2.jpg'],
    // 大图
    large : ['imgA_3.jpg','imgB_3.jpg','imgC_3.jpg'],
}

// 获取一些 DOM 节点
var container = $('.container'); // 获取到整个容器
var smallImg = $('.smallImg'); // 获取到缩略图节点
var middleImg = $('.middleImg'); // 获取到缩中图节点
var largeImg = $('.largeImg'); // 获取到大图节点
var enlarge = $('.enlarge'); // 获取到遮罩层节点

// 该函数负责进行初始化操作
function init(){
    // 其实主要就是初始化缩略图

    // 1. 初始化 li
    var result = imgs.small.map(function(item,index){
        return `
            <li style="background:url('../images/${item}') no-repeat;background-size:cover;" data-id="${index}"></li>
        `;
    }).join('')
    smallImg.innerHTML = result;

    // 2. 给第一个 li 添加黑框
    $('.smallImg li').style.border = '2px solid black';
}

// 绑定事件
function bindEvent(){
    // 通过分析，我们知道，一共有两个事件 1. 缩略图的点击事件   2. 中图的鼠标移动事件

    // 1. 缩略图的点击事件
    smallImg.onclick = function(e){
        if(e.target.nodeName === 'LI'){
            // 添加黑框，思路：先把所有的黑框去掉，然后给当前的 li 添加上黑框
            var lis = $$('.smallImg li');
            for(var i=0;i<lis.length;i++){
                lis[i].style.border = 'none';
            }
            e.target.style.border = '2px solid black';

            // 获取下标
            var index = e.target.dataset.id;

            // 改变中图和大图
            middleImg.style.background = `url('../images/${imgs.middle[index]}') no-repeat center/cover`;
            largeImg.style.background = `url('../images/${imgs.large[index]}') no-repeat`;
        }
    }

    // 2. 中图绑定鼠标的移动事件
    middleImg.onmousemove = function(e){
        // 1. 让遮罩层和大图显示出来
        enlarge.style.opacity = 1;
        largeImg.style.opacity = 1;

        // 计算遮罩层的位置
        // 鼠标到浏览器的边距 - 中图到浏览器的边距 - 遮罩层宽度的一半
        var left = e.clientX - middleImg.offsetLeft - enlarge.offsetWidth/2;
         // 鼠标到浏览器的边距 - 中图到浏览器的边距 - 遮罩层高度的一半
        var top = e.clientY - middleImg.offsetTop - enlarge.offsetHeight/2;

        // 还要进行边界的判断
        if(left <=0){
            left = 0;
        }
        if(left >= middleImg.offsetWidth - enlarge.offsetWidth){
            left = middleImg.offsetWidth - enlarge.offsetWidth;
        }
        if(top<=0){
            top = 0;
        }
        if(top >= middleImg.offsetHeight - enlarge.offsetHeight){
            top = middleImg.offsetHeight - enlarge.offsetHeight;
        }

        // 修改遮罩层的 left 和 top 值
        enlarge.style.left = left + 'px';
        enlarge.style.top = top + 'px';

        // 修改右边的大图
        largeImg.style.backgroundPositionX = -left + 'px';
        largeImg.style.backgroundPositionY = -top + 'px';
    }

    // 3. 鼠标移出的时候
    middleImg.onmouseleave = function(){
        // 要做的事情就是隐藏大图和遮罩层
        enlarge.style.opacity = 0;
        largeImg.style.opacity = 0;
    }
}

// 主函数
function main(){
    // 1. 做初始化的操作
    init();

    // 2. 绑定事件
    bindEvent();
}

main();