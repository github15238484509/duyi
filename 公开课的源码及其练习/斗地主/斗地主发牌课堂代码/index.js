var container = document.querySelector('.game');
// 一些需要的尺寸
var size = {
  containerWidth: 1000,
  containerHeight: 700,
  pokerWidth: 105,
  pokerHeight: 150,
};
/**
 * 创建一张扑克牌的构造函数
 * @param {number} value 扑克牌的点数
 * @param {number} color 扑克牌的花色
 */
function Poker(value, color) {
  this.value = value;
  this.color = color;
  // 为这张扑克牌创建一个图片元素
  this.img = document.createElement('img');
  this.img.src = './img/' + value + '_' + color + '.jpg';
  container.appendChild(this.img);
}

Poker.prototype.setPosition = function (x, y) {
  this.img.style.left = x + 'px';
  this.img.style.top = y + 'px';
};

/**
 * 牌堆
 * startX, startY： 第一张牌的坐标
 * increaseX, increaseY: 后一张相对于前一张的偏移量
 */
function Deck(startX, startY, increaseX, increaseY) {
  this.pokers = []; // 牌堆中的扑克牌
  this.startX = startX;
  this.startY = startY;
  this.increaseX = increaseX;
  this.increaseY = increaseY;
}

// 将牌堆中的扑克牌按照正确的位置排列
Deck.prototype.render = function () {
  for (var i = 0; i < this.pokers.length; i++) {
    var poker = this.pokers[i];
    var x = this.startX + i * this.increaseX;
    var y = this.startY + i * this.increaseY;
    poker.setPosition(x, y);
  }
};

// 对牌堆中的牌进行重新排序
Deck.prototype.sort = function () {
  // 根据面值，得到一个可以比较大小的值
  function _getCompareValue(value) {
    if (value <= 2) {
      return value + 13;
    }
    if (value >= 14) {
      return value + 2;
    }
    return value;
  }
  // 排序数组
  this.pokers.sort(function (a, b) {
    // a是poker对象，b也是poker对象，它们的大小比较
    var value1 = _getCompareValue(a.value),
      value2 = _getCompareValue(b.value);
    return value2 - value1;
  });

  // 重新设置zIndex
  for (var i = 0; i < this.pokers.length; i++) {
    this.pokers[i].img.style.zIndex = i + 1;
  }

  // 重新渲染
  this.render();
};

var initDeck = new Deck(
  size.containerWidth / 2 - size.pokerWidth / 2, // 起始x坐标
  size.containerHeight / 2 - size.pokerHeight / 2, // 起始y坐标
  0.2,
  0.2
); // 初始牌堆
var players = [
  new Deck(0, 35, 0, 30),
  new Deck(207.5, 550, 30, 0),
  new Deck(895, 35, 0, 30),
]; // 3个玩家的牌堆
var tailDeck = new Deck(297.5, 0, 150, 0); // 地主家的三张牌

/**
 * 创建54张扑克牌，加入到初始牌堆
 */
function init() {
  // 创建A->K
  for (var i = 1; i <= 13; i++) {
    for (var j = 1; j <= 4; j++) {
      initDeck.pokers.push(new Poker(i, j));
    }
  }
  // 创建大小王
  initDeck.pokers.push(new Poker(14, 1));
  initDeck.pokers.push(new Poker(15, 1));

  // 打乱扑克牌的顺序
  initDeck.pokers.sort(function () {
    return Math.random() - 0.5; // -0.5 ~ 0.5
  });

  // 循环重新设置zIndex
  for (var i = 0; i < initDeck.pokers.length; i++) {
    var img = initDeck.pokers[i].img;
    img.style.zIndex = 1000 - i;
  }

  initDeck.render();
}

init();
var playerIndex = 0; // 目前应该发给哪个玩家
/**
 * 发一张牌
 * 发牌的本质，就是牌从一个牌堆(initDeck)变动到另一个牌堆(?)
 */
function deal() {
  var targetDeck; // 发到哪一个牌堆（目标）
  if (initDeck.pokers.length <= 3) {
    targetDeck = tailDeck;
  } else {
    // 发给玩家
    targetDeck = players[playerIndex];
    // 轮换到下一个玩家
    playerIndex = (playerIndex + 1) % 3;
  }
  // targetDeck 就是目标牌堆
  // 发牌
  // 1. 移除初始牌堆的第一张牌
  var poker = initDeck.pokers.shift();
  // 2. 把这张牌加入到目标牌堆
  targetDeck.pokers.push(poker);
  // 3. 重新排列目标牌堆
  targetDeck.render();
  // 4. 等牌过去了之后（300ms），将它的zIndex重新设置
  var zIndex = targetDeck.pokers.length;
  setTimeout(function () {
    poker.img.style.zIndex = zIndex;
  }, 300);
}
var timerId; // 计时器的Id
container.onclick = function () {
  if (timerId) {
    // 目前已经有计时器了（已经在发牌了）
    return;
  }
  timerId = setInterval(function () {
    deal();
    // 还有没有牌可发
    if (initDeck.pokers.length === 0) {
      // 无牌可发，结束发牌
      clearInterval(timerId);
      // 等待最后一张牌动画结束
      setTimeout(function () {
        // 排序
        for (var i = 0; i < players.length; i++) {
          players[i].sort();
        }
      }, 300);
    }
  }, 50);
};
