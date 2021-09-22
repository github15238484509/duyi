(function () {
  // - 找到图片容器
  var itemLists = document.querySelectorAll('.item');  // - ie8以上的浏览器

  var init = function () {
    setTimeout(function () {
      document.querySelector('.wrapper').classList.remove('init');
    },200)
    initEvents();
  }

  var initEvents = function () {
    itemLists.forEach(function (node) {
      node.addEventListener('click', onItemClick);
    })
    document.querySelectorAll('.masker-container').forEach(function (node) {
      node.addEventListener('click', onCloseBtnClick)
    })
  }

  //- 关闭按钮事件函数
  onCloseBtnClick = function (e) {
    //- 阻止事件冒泡
    e.stopPropagation();
    // console.log(this)
    //- 找到指定的父节点，item 的父节点
    this.closest('.item').classList.remove('on')
    document.querySelector('.wrapper').classList.remove('active')
  }

  // -图片容器点击事件函数
  var onItemClick = function () {
    this.parentNode.classList.add('active')
    itemLists.forEach(function (node) { node.classList.remove('on') })
    this.classList.add('on')
  }


  init();
})()