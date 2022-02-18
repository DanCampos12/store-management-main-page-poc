import { Component, Vue } from 'vue-property-decorator'
import UserListComponent from '@/components/UserListComponent.vue'

@Component({
  components: {
    UserListComponent
  }
})
export default class Home extends Vue {

}
