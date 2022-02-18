import { User } from '@/models'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [
      { id: 0, name: 'User - 1' },
      { id: 1, name: 'User - 2' }
    ] as User[]
  },
  mutations: {
    addUser (state, user: User) {
      state.users.push(user)
    }
  },
  actions: {
  },
  modules: {
  }
})
