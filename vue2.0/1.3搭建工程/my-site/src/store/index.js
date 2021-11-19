import Vue from "vue";
import Vuex from "Vuex"
import setting from "./setting"
Vue.use(Vuex)
const state = {
    count: 0
}
const mutations = {
    increment(state, preload = 1) {
        state.count += preload
    },
    decrement(state, preload = 1) {
        state.count -= preload
    }
}
const actions = {
    increment(context, one) {
        return new Promise((resove) => {
            setTimeout(() => {
                context.commit("increment", one)
                resove(context.state.count)
            }, 1000);
        })
    },
    decrement(context) {

    }


}
const modules={
    setting


}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    modules
})