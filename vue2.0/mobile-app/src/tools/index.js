import Vue from "vue";
import Transfrom from "./Transfrom"

const Move = Vue.extend(Transfrom)

/**
 * 
 * @param {*} width 宽度
 * @param {*} height 高度
 * @param {*} left left
 * @param {*} top top
 * @param {*} moveX 移动到的位置的left
 * @param {*} moveY 移动到的位置top
 */
export default function (
    width,
    height,
    left,
    top,
    moveX,
    moveY,
    src
) {

    var el = document.createElement("div")
    var app = new Move({
        el,
        data() {
            return {
                width,
                height,
                left,
                top,
                moveX,
                moveY,
                src,
                scale: 1,
                opacity: 1
            }
        },
        mounted() {
            setTimeout(() => {
                this.left = this.moveX
                this.top = this.moveY
                this.scale = 0.3
                this.opacity = 0
            }, 0);

        }

    })
    document.body.appendChild(app.$el)
    setTimeout(() => {
        app.$el.remove()
    }, 1000);
}