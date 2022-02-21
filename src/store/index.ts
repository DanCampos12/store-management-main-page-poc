import { UserCounterControlers } from '@/models'
import Vue from 'vue'
import Vuex, { Commit } from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userCounter: 3,
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
        const messageReceived = message.data as keyof UserCounterControlers
        commit(this.state.userCounterControlers[messageReceived])
      }
    }
  },
  modules: {
  }
})
