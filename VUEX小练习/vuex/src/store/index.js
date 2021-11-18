import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    
  },
  mutations: {
    changeName(state,preload){
        console.log(4444);
    }
  },
  actions: {
  },
  modules: {
    userInfo: {
      namespaced: true,
      state: () => {
        return {
          name: ''
        }
      },
      mutations:{
        changeName(state,preload){
          console.log(state);
          console.log(preload);
          console.log(this);
          state.name = preload
        }
      }
    },
  }
})
