import Vue from 'vue'
import router from "@/router"
import App from './App.vue'

import showMessage from "@/utils/showMessage"
import "@/style/reset.less"

import "@/mock"
Vue.config.productionTip = false
Vue.prototype.$showMessage = showMessage
var aa = new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
console.log(aa);