import { User } from '@/models'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [
      { id: 0, name: 'Danilo Campos' },
      { id: 1, name: 'Rafael Neves' }
    ] as User[]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
