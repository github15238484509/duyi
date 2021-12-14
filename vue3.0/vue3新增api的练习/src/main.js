import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from "./router/index.js"
import "nprogress/nprogress.css"
import "./utils/reactive.js"
createApp(App).use(router).mount('#app')
