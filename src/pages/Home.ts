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

  iFrameLoaded = false

  onIframeLoad (): void {
    this.iFrameLoaded = true
  }
}
