import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import "@/style/reset.less"

import Home from '@/views/Home'
import Blog from '@/views/Blog'
import Message from '@/views/Message'
import About from '@/views/About'
import Project from '@/views/Project'
const router = new VueRouter({
  routes: [
    {
      name: 'Home',
      path: '/',
      component: Home
    },
    {
      name: 'Blog',
      path: '/blog',
      component: Blog
    },
    {
      name: 'Message',
      path: '/message',
      component: Message
    },
    {
      name: 'About',
      path: '/about',
      component: About
    },
    {
      name: 'Project',
      path: '/project',
      component: Project
    },
  ]
})


Vue.use(VueRouter)
Vue.config.productionTip = false

var aa =  new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
console.log(aa);