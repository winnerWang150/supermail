import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'vant/lib/index.css'
import bus from '@/common/bus'
import * as util from '@/common/utils'
Vue.prototype.$utils = util
Vue.prototype.$bus = bus
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
