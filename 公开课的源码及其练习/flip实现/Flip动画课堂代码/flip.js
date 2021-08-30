var createFillper = (function () {
  // 一些辅助函数
  /**
   * 根据元素的集合，得到一个由 元素<-->位置 组成的映射关系
   *
   * @param {*} elems
   */
  function getPostions(elems) {
    var map = new Map(); // 生成一个映射地图
    for (var i = 0; i < elems.length; i++) {
      var rect = elems[i].getBoundingClientRect(); // 得到元素相对于视口的矩形
      map.set(elems[i], { left: rect.left, top: rect.top });
    }
    return map;
  }

  /**
   * 完成动画的最后两个阶段：翻转和播放动画
   *
   * @param {*} ele 要应用动画的元素
   * @param {*} firstMap 起始位置地图
   * @param {*} lastMap 结束位置地图
   * @param {*} duration 动画播放的时间
   */
  function revertAndPlay(ele, firstMap, lastMap, duration) {
    var first = firstMap.get(ele); // map对象中有一个方法get，根据键获取值
    var last = lastMap.get(ele);
    // 排除不需要应用动画的情况
    if (
      !first ||
      !last ||
      (first.left === last.left && first.top === last.top)
    ) {
      return;
    }
    // 应用动画
    // 3. revert 反转
    var leftDis = first.left - last.left; // 横向反转距离
    var topDis = first.top - last.top; // 纵向反转距离
    // 4. 播放动画
    ele.animate(
      [
        { transform: 'translate(' + leftDis + 'px, ' + topDis + 'px)' },
        {
          transform: '',
        },
      ],
      { duration: duration }
    );
  }

  /* 
  该函数用于产生一个flipper对象
  */
  return function (container, duration) {
    // 1. 记录container容器中每一个子元素的起始位置
    var firstMap = getPostions(container.children);
    return {
      move: function () {
        //2. 记录container容器中每一个子元素的结束位置
        var lastMap = getPostions(container.children);
        for (var i = 0; i < container.children.length; i++) {
          var ele = container.children[i]; // 拿到要应用动画的元素
          revertAndPlay(ele, firstMap, lastMap, duration);
        }
      },
    };
  };
})();
