import { Component, Vue } from 'vue-property-decorator'
import { Action } from 'vuex-class'

@Component
export default class AppComponent extends Vue {
  @Action('createUserListBroadcastListener')
  readonly createUserListBroadcastListener!: () => void

  created (): void {
    document.title = 'POC Gerenciamento de Estados'
    this.createUserListBroadcastListener()
  }
}
