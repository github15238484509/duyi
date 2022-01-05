import Vue from 'vue'
import Vuex from 'vuex'
import user from "./user"

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true, //严格模式开启
    state: {},
    mutations: {},
    actions: {},
    modules: {
        user: user
    }
})