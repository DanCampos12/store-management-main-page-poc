import Vue from 'vue'
import AppComponent from './AppComponent.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(AppComponent)
}).$mount('#app')
