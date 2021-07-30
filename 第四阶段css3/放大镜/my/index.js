function $(el) {
    return document.querySelector(el)
}

console.log($(".bg").offsetHeight);

$(".middle").onmousemove = function(e) {
    var left = e.clientX - this.offsetLeft - $(".bg").offsetWidth / 2
    var top = e.clientY - this.offsetTop - $(".bg").offsetHeight / 2
    if (left <= 0) {
        left = 0
    }
    if (left >= this.offsetWidth - $(".bg").offsetWidth) {
        left = this.offsetWidth - $(".bg").offsetWidth
    }
    if (top <= 0) {
        top = 0
    }
    if (top >= this.offsetHeight - $(".bg").offsetHeight) {
        top = this.offsetHeight - $(".bg").offsetHeight
    }
    console.log(top);

    $(".bg").style.left = left + 'px'
    $(".bg").style.top = top + 'px'

    // bgdiv可以移动的最大距离
    // 移动的距离为：left
    // 移动的最大距离为：this.offsetHeight - $(".bg").offsetHeight
    // 移动的百分比为 ：left/this.offsetHeight - $(".bg").offsetHeight

    // lager下的img移动的最大距离为


    $(".lager img").style.left = -(left / (this.offsetHeight - $(".bg").offsetHeight)) * 100 + '%'
    $(".lager img").style.top = -(top / (this.offsetHeight - $(".bg").offsetHeight)) * 100 + '%'

    //下面的50平应100的话刚好出去
    // $(".lager img").style.transform = `translate(${-(left / (this.offsetWidth - $(".bg").offsetWidth)) * 50 + '%'},${-(top / (this.offsetHeight - $(".bg").offsetHeight)) * 50 + '%'})`

}