import getComponentDom from "./getComponentDom";
import cssType from "./showMessage.module.less";
import Icon from "@/components/Icon"



/**
 * 
 *  @param {String} content 消息内容
 * @param {String} type 消息类型  info  error  success  warn
 * @param {Number} duration 多久后消失
 * @param {HTMLElement} container 容器，消息会显示到该容器的正中；如果不传，则显示到页面正中
 */
export default function showMessage(options = {}) {
    const duration = options.duration || 1500;
    const content = options.content || '';
    const type = options.type || "info";
    const container = options.container || document.body

    const icon = getComponentDom(Icon, { type })
    icon.classList.add(cssType['icon'])
    const div = document.createElement("div")
    div.innerHTML = `${icon.outerHTML} ${content}`
    div.classList.add(cssType['box-container'], cssType["module_" + type])

    if (container !== document.body) {
        if (container.style.position !== 'static') {
            container.style.position = "relative"
        }
    }

    container.appendChild(div)
    div.clientHeight
    div.style.transform = "translate(-50%,-50%)"
    div.style.opacity = "1"
    setTimeout(() => {
        div.style.transform = "translate(-50%,-50%) translateY(-30px)"
        div.style.opacity = "0"
        div.addEventListener("transitionend", () => {
            console.log(44444);
            div.remove()
        }, { once: true })
    }, duration);
}