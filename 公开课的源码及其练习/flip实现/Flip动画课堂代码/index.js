var nextNumber = 1;
var duration = 500;
/**
 * 根据css选择器获取元素
 * @param {*} selector
 * @returns
 */
function $(selector) {
    return document.querySelector(selector);
}

var container = $('.container');

/**
 * 生成一些div，填充容器
 */
function init() {
    while (nextNumber <= 100) {
        var div = document.createElement('div');
        div.className = 'item';
        div.innerText = nextNumber;
        container.appendChild(div);
        nextNumber++;
    }
}

init();

/**
 * 生成一个最小值到最大值（不可取）之间的随机整数
 * @param {*} min
 * @param {*} max
 */
function getRandom(min, max) {
    /* 
      Math.random()    0~1
      Math.random() * (max - min)   0 ~ (max-min)
      Math.floor(Math.random() * (max - min))   0 ~ (max-min)
      Math.floor(Math.random() * (max - min)) + min    min ~ max
    */
    return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * 在一个随机位置添加一个元素
 */
function add() {
    // flip.js提供的函数，传入一个容器，它可以监控容器中的所有子元素，返回一个flipper动画对象
    var flipper = createFillper(container, duration);

    var div = document.createElement('div');
    div.className = 'item';
    div.style.background = '#008c8c';
    div.style.color = '#fff';
    div.innerText = nextNumber++;

    // 将div加入到容器的随机位置
    var index = getRandom(0, container.children.length);
    container.insertBefore(div, container.children[index]);

    // 新增的元素有一段动画
    div.animate([{ opacity: 0 }, { opacity: 1 }], { duration: duration });
    // 调用move方法，发生flip的2、3、4步骤
    flipper.move();
}
/**
 * 随机删除一个元素
 */
function remove() {
    var flipper = createFillper(container, duration);
    var index = getRandom(0, container.children.length);
    var ele = container.children[index];
    ele.style.background = '#f40';
    var animation = ele.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: duration,
    });
    animation.onfinish = function() {
        ele.remove();
        flipper.move();
    };
}

/**
 * 随机排序
 */
function shuffle() {
    var flipper = createFillper(container, duration);
    for (var i = 0; i < container.children.length; i++) {
        var item1 = container.children[i];
        var j = getRandom(0, container.children.length); // 产生一个随机位置
        var item2 = container.children[j];
        // i和j两个位置的元素交换
        if (i !== j) {
            var item2Next = item2.nextElementSibling; // 拿到item2的下一个元素
            container.insertBefore(item2, item1);
            container.insertBefore(item1, item2Next);
        }
    }
    flipper.move();
}

$('#btnAdd').onclick = add;
$('#btnRemove').onclick = remove;
$('#btnShuffle').onclick = shuffle;