import Vue from 'vue'
import App from './App.vue'
import "@/style/reset.less"
import router from "@/router"
import showMessage from "@/utils/showMessage"


Vue.config.productionTip = false
Vue.prototype.$showMessage = showMessage
var aa = new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
console.log(aa);