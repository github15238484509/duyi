/**
 * 
 * @param {*} start 
 * @param {*} end 
 * @param {dom元素} dom 
 * @param {dom元素的属性} property 
 */
export function speed(start, end, dom, property) {
    var speed = 100;
    var dis = 0;
    if (end < 0) {
        speed *= -1;
    }
    clearInterval(timer);
    var timer = setInterval(() => {
        dis += speed;
        dom[property] = start + dis;
        if (Math.abs(dis) >= Math.abs(end)) {
            dom[property] = start + end;
            clearInterval(timer);
        }
    }, 60);
}