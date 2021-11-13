import Vue from 'vue'
import router from "@/router"
import App from './App.vue'

import showMessage from "@/utils/showMessage"
import "@/style/reset.less"

import "@/mock"


// 自定义指令
import Loading from "@/directive/Loading"
Vue.directive("loading",Loading)

Vue.config.productionTip = false
Vue.prototype.$showMessage = showMessage
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')