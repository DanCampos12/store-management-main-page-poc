/* eslint-disable @typescript-eslint/ban-types */
import { Component, Vue } from 'vue-property-decorator'
import UsersInfoComponent from '@/components/UsersInfoComponent.vue'
import { Mutation, State } from 'vuex-class'

@Component({
  components: {
    UsersInfoComponent
  }
})
export default class Home extends Vue {
  @State('userCounter') readonly userCounter!: number
  @Mutation('setUserCounter') readonly setUserCounter!: (value: number) => void

  userCounterControler: Record<string, Function> = {
    'user:added': () => true,
    'user:removed': () => true
  }

  mounted (): void {
    this.userCounterControler['user:added'] = () => { this.setUserCounter(this.userCounter + 1) }
    this.userCounterControler['user:removed'] = () => { this.setUserCounter(this.userCounter - 1) }
    window.addEventListener('message', this.onMessageReceived)
  }

  beforeDestroy (): void {
    window.removeEventListener('message', this.onMessageReceived)
  }

  onMessageReceived (message: MessageEvent): void {
    if (!Object.keys(this.userCounterControler).includes(message.data)) return
    this.userCounterControler[message.data]()
  }
}
