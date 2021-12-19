import routes from "./rule"
import { createRouter, createWebHashHistory, createWebHistory } from "vue-router"
export default new createRouter({
    routes,
    history: createWebHistory()
})