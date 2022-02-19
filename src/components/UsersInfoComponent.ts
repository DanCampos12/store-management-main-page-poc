import { Component, Vue } from 'vue-property-decorator'
import { State } from 'vuex-class'

@Component
export default class UsersInfoComponent extends Vue {
  @State('userCounter') readonly userCounter!: number
}
