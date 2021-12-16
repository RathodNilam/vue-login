import Vue from 'vue'
import App from './App.vue'
// import axios from 'axios'
// import VueAxios from 'vue-axios'

// import router from './router'
import { BootstrapVue } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'


Vue.config.productionTip = false
Vue.use(BootstrapVue)
// Vue.use(VueAxios, axios)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
