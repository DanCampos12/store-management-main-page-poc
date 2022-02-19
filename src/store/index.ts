import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    assetCounter: 0
  },
  mutations: {
    setAssetCounter (state, value: number) {
      state.assetCounter = value
    }
  },
  actions: {
  },
  modules: {
  }
})
