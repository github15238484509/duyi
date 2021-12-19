import { defineAsyncComponent, h } from "vue"
import Loading from "../components/Loading.vue"
import Error from "../components/Error.vue"
import NProgress from "nprogress";


export function asyncViewComponent(path) {
    return defineAsyncComponent({
        loader: async () => {
            // await delay()
            return import(path)
        },
        loadingComponent: Loading,
    })
}
export function getAsyncPage(path) {
    return defineAsyncComponent({
        loader: async () => {
            NProgress.start();
            await delay();
            const comp = await import(path);
            NProgress.done();
            return comp;
        },
        loadingComponent: Loading, // 当promise在pending状态时，将显示这里的组件
    });
}



export function asyncComponent(path) {
    return defineAsyncComponent({
        loader: async () => {
            await delay()
            if (Math.random() > 0.5) {
                // throw TypeError("")
            }
            return import(path)
        },
        loadingComponent: Loading,
        errorComponent: {
            render() {
                return h(Error, "出错了")
            }
        }
    })
}
export function random(min = 1000, max = 5000) {
    return Math.floor(Math.random() * max + min)
}
export function delay(time = 1000) {
    return new Promise(resolve => {
        time = random()
        setTimeout(() => {
            resolve()
        }, time)
    })
}

