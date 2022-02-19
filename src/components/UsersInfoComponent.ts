import { Component, Vue } from 'vue-property-decorator'
import { State } from 'vuex-class'

@Component
export default class UsersInfoComponent extends Vue {
  @State('assetCounter') readonly assetCounter!: number
}
