import cssModule from "./Loading.module.less"
function createImage() {
    const img = document.createElement("img")
    img.src = "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0100f559b24b15a801211d257118b2.gif%402o.png&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639363304&t=10b247a786a9f86e92a68ed5d31b342e"
    img.className = cssModule.center
    img.setAttribute("data-loading", "loading")
    return img
}
function getLoading(el) {
    const img = el.querySelector("img[data-loading=loading]")
    return img
}

export default function (el, binding) {
    const cur = getLoading(el)
    if (binding.value) {
        if (!cur) {
            const img = createImage();
            el.appendChild(img);
        }
    } else {
        if (cur) {
            cur.remove();
        }
    }
}