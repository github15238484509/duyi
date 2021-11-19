import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from "@/store"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      auth: true
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/user',
    name: 'User',
    meta: {
      auth: true
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/User.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  if(to.meta.auth){
    const status = store.getters["userInfo/status"]
    if(status=="loading"){
      next({
        path: "/loading",
        query: {
          returnurl: to.fullPath,
        },
      });
    }else if(status=="login"){
      next()
    }else{
      next({
        path: "/login",
        query: {
          returnurl: to.fullPath,
        },
      });
    }
  }
  next()
})
export default router
