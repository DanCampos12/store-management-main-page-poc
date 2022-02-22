import { UserCounterControlers } from '@/models'
import Vue from 'vue'
import Vuex, { Commit } from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userCounter: 0,
    userListBroadcast: new BroadcastChannel('user-list'),
    userCounterControlers: new UserCounterControlers()
  },
  mutations: {
    setUserCounter (state, value: number) {
      state.userCounter = value
    },
    addUser (state) {
      state.userCounter++
    },
    removeUser (state) {
      state.userCounter--
    }
  },
  actions: {
    createUserListBroadcastListener ({ commit }: { commit: Commit }) {
      this.state.userListBroadcast.onmessage = (message) => {
        const notification = message.data.notification as keyof UserCounterControlers
        const data = message.data.value
        commit(this.state.userCounterControlers[notification], data)
      }
    }
  },
  modules: {
  }
})
