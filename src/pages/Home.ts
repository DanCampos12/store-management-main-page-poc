import { Component, Vue } from 'vue-property-decorator'
import UsersInfoComponent from '@/components/UsersInfoComponent.vue'

@Component({
  components: {
    UsersInfoComponent
  }
})
export default class Home extends Vue {
}
