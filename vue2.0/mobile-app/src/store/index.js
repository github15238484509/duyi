import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shop: {}
  },
  mutations: {
    formatShop(state) {
      var result = localStorage.getItem("goods") || "{}"
      result = JSON.parse(result)
      state.shop = result
    }
  },
  getters: {
    getShopNum: (state) => (id) => {
      return state.shop[id] || 0
    }
  },
  actions: {},
  modules: {}
})