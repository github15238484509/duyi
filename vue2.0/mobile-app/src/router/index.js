import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from "@/view/Home/Home.vue"
import Classify from "@/view/Home/Classify.vue"
import Shop from "@/view/Home/Shop.vue"
import Readme from "@/view/Readme"
Vue.use(VueRouter)

const routes = [{
    path: '/home',
    component: Home,
    children: [{
        path: 'calssify',
        component: Classify
    }, {
        path: 'shop',
        component: Shop
    }]
}, {
    path: "/readme",
    component: Readme
}, {
    path: "*",
    redirect: '/home/calssify'
}]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router