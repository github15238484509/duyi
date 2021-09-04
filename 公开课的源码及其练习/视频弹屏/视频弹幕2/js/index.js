// 封装 DOM 查询方法
function $(selector){
    return document.querySelector(selector);
}

function $$(selector){
    return document.querySelectorAll(selector);
}

// 默认弹幕
var bulletArr = ["666牛逼", "索隆帅出天际", "啊~~~~~~", "三刀流奥义", "大千世界", "帅帅帅", "牛逼牛逼☆", "神仙画质", "狮子歌歌"];
// 随机颜色
var randomColor = ["skyblue", "coral", "seagreen", "palevioletred", "hotpink", "indianred", "white"];
 
var video = $('#video'); // 获取视频盒子容器
var vd = $('#vd');
var isPause = false; // 是否暂停，如果暂停值为 true，没有暂停就是 false
var switchButton = $('#switchButton'); // switch 开关

/**
 * 
 * @param {最小值} start 
 * @param {最大值} end 
 */
function random(start, end){
    // 公式：Math.floor(Math.random() * 可能性数 + 第一个可能值)
    return Math.floor(Math.random() * (end - start + 1) + start);
}

/**
 * 
 * @param {弹幕，是一个字符串} bullet 
 * @param {标记，是一个布尔值} flag 
 */
function render(bullet, flag){
    // 分析：生成的弹幕最终就是一个 DOM 节点
    // 1. 所以，我们首先第一步，就是生成一个 DOM 节点
    var span = document.createElement("span"); // 创建一个新的 span <span></span>
    span.innerHTML = bullet;

    // 接下来我们需要设置 span 的 left 和 top 值
    span.style.left = video.offsetWidth + "px"
    span.style.top = random(0, video.offsetHeight - 40) + "px"

    span.style.fontSize = random(20, 30) + "px"
    span.style.color = randomColor[random(0, randomColor.length-1)]

    if(flag){
        span.style.border = "3px solid #fff";
    }

    video.appendChild(span);

    // 2. 移动 DOM 节点
    var speed = random(5, 10);
    // 使用定时器
    var stopTimer = null;
    stopTimer = setInterval(function(){
        // 移动之前需要做一个判断，看一下 span 还在不在
        // 因为完全有可能用户关闭了弹幕，span 已经被全部删除了
        // 如果 span 已经没了，那么我们就把这个计时器关闭掉
        if($$('#video>span').length !== 0){
            // 说明还有弹幕
            if(!isPause){
                span.style.left = parseInt(span.style.left) - speed + "px"
            }
    
            // 我们还需要做一个判断，如果弹幕已经飘出去，需要删除
            if(parseInt(span.style.left) < -span.offsetWidth){
                clearInterval(stopTimer);
                video.removeChild(span);
            }
        } else {
            // 说明已经没有弹幕了
            clearInterval(stopTimer);
        }
    },50)

}

/**
 * 从随机弹幕中取一条弹幕
 */
var stopBulletTimer = null
function randomBulletPlay(){
    stopBulletTimer = setInterval(function(){
        // 从默认弹幕中取一条，扔到 render 函数里面
        render(bulletArr[random(0, bulletArr.length - 1)]);
    },200)
}

/**
 * 监听视频的播放时间，当视频播放时会触发
 */
vd.onplay = function(){
    if(switchButton.checked){
        randomBulletPlay()
    }
    isPause = false;
}

/**
 * 监听视频暂停事件，当时暂停的时候，会触发
 */
vd.onpause = function(){
    isPause = true;
    // 暂停的时候，也需要停止产生随机的弹幕
    if(stopBulletTimer){
        clearInterval(stopBulletTimer)
    }
}

/**
 * switch 开关改变状态的时候会触发
 */
switchButton.onchange = function(){
    if(switchButton.checked){
        // 说明用户打开了弹幕
        if(!isPause && vd.currentTime !== 0){
            randomBulletPlay();
        }
    } else {
        // 说明用户关闭了弹幕
        // 1. 停止随机生成弹幕  2. 已有的弹幕要全部清除
        if(stopBulletTimer){
            clearInterval(stopBulletTimer);
            var spans = $$('#video>span'); // 获取所有的弹幕
            // 移除掉弹幕
            for(var i=0;i<spans.length;i++){
                video.removeChild(spans[i]);
            }
        }
    }
}

// 用户发送弹幕
$('#sendBulletBtn').onclick = function(){
    // 获取用户输入的值，扔到 render 函数里面
    if($('#bulletContent').value && switchButton.checked && !isPause && vd.currentTime !== 0){
        // 只要我一调用 render，就会生成一条弹幕
        render($('#bulletContent').value, true);
    }
    $('#bulletContent').value = "";
}
