import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import userInfo from './userInfo'
export default new Vuex.Store({
  strict: true,
  modules: {
    userInfo
  }
})
