import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import "@/style/reset.less"
import router from "@/router"
import showMessage from "@/utils/showMessage"
showMessage()


Vue.use(VueRouter)
Vue.config.productionTip = false

var aa = new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
console.log(aa);