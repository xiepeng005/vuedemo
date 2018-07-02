import Vue from 'vue'
import App from './trade'
import MintUI from 'mint-ui'
import router from './router'
import 'lib-flexible/flexible'
import 'mint-ui/lib/style.css'
Vue.config.productionTip = false
/* eslint-disable no-new */
Vue.use(MintUI)
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
