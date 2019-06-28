import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMask from 'v-mask'
import 'tiny-date-picker/tiny-date-picker.min.css'
import './main.css'
import './global-base-components.js'

Vue.use(VueMask)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
