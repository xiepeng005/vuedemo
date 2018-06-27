// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
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
