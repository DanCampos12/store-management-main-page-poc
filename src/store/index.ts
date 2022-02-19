import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userCounter: 3
  },
  mutations: {
    setUserCounter (state, value: number) {
      state.userCounter = value
    }
  },
  actions: {
  },
  modules: {
  }
})
