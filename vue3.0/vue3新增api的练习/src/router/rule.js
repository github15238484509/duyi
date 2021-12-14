import Product from "../view/Product.vue"
import { defineAsyncComponent } from "vue"
import Async from "../view/Async.vue"
// import Home from "../components/Home.vue"
// import About from "../components/About.vue"
import { asyncViewComponent, getAsyncPage, delay } from "../utils"
import NProgress from "nprogress";
NProgress.configure({
    minimum: 0.1,
    showSpinner: false,
    easing: 'ease',
    trickleSpeed: 800
})
// const Async = asyncViewComponent("../view/Async.vue")
// const Home = getAsyncPage("../components/Home.vue")
// const About = getAsyncPage("../components/About.vue")
export default [
    {
        path: "/",
        component: Product,
        meta: {
            keepAlive: true
        }
    },
    {
        path: "/async",
        component: Async,
        children: [{
            path: "home",
            component: defineAsyncComponent( () => import('../components/Home.vue'))
            // component: getAsyncPage("../components/Home.vue")
        },
        {
            path: "about",
            component: async () => {
                NProgress.start();
                await delay()
                const result = await import("../components/About.vue")
                NProgress.done();
                return result
            }
        },
        ],
        meta: {
            keepAlive: false
        }
    }
]