import Vue from 'vue'
import router from "@/router"
import App from './App.vue'
import store from "@/store"
import '@/filter'

import showMessage from "@/utils/showMessage"
import "@/style/reset.less"

import "@/mock"


// 自定义指令
import Loading from "@/directive/Loading"
import Lazy from "@/directive/Lazy"
Vue.directive("loading", Loading)
Vue.directive("lazy", Lazy)

Vue.config.productionTip = false
Vue.prototype.$showMessage = showMessage

store.dispatch("setting/getSetting")
new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')

import { getAbout } from "@/api"
console.log(getAbout);
getAbout().then(res => {
    console.log(res);
})