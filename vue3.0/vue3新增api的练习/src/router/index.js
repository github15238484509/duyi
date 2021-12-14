import routes from "./rule"
import { createRouter, createWebHashHistory } from "vue-router"
export default new createRouter({
    routes,
    history: createWebHashHistory()
})