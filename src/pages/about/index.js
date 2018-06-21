import Vue from 'vue'
import About from './About'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { About },
  template: '<About/>'
})
