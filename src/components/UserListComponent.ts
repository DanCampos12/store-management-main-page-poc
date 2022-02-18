import { User } from '@/models'
import { Component, Vue } from 'vue-property-decorator'
import { State } from 'vuex-class'

@Component
export default class UserListComponent extends Vue {
  @State('users') readonly users!: User[]
}
