import Vue from './vue.browser.js'
import App from "./App.js"
new Vue({
    render: h => h(App)
}).$mount("#app")