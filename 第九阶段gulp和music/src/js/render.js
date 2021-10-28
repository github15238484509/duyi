(function(root) {
    //渲染img 渲染 背景如， 是否喜欢
    function renderImg(src, domInfo) {
        domInfo.record.src = src
        root.blurImg(src)
    }

    function renderInfo(data, domInfo) {
        domInfo.name.innerText = data.name
        domInfo.singer.innerText = data.singer
        domInfo.album.innerText = data.album
    }

    function renderIsLike(isLike, domInfo) {
        domInfo.controlBtns[0].className = isLike ? 'active' : ""
    }

    root.render = function(data, domInfo) {
        renderImg(data.image, domInfo)
        renderInfo(data, domInfo)
        renderIsLike(data.isLike, domInfo)
    }
})(window.player || (window.player = {}))