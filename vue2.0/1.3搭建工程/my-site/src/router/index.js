import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from "./routes.js"

import  {setRouterTitle} from "@/utils/titleControl"

Vue.use(VueRouter)
const router = new VueRouter({
    routes,
    mode: "history",
})
router.afterEach((to)=>{
    if( to.meta.title){
        setRouterTitle(to.meta.title)
    }
})

export default router