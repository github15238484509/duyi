import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home/index.vue'
import UserProfile from '@/views/UserProfile.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: "/home",
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        children: [{
            path: '/',
            component: UserProfile
        }, ]
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Login.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router