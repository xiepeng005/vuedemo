import Vue from 'vue'
import Router from 'vue-router'
import dayTrade from './dayTrade/dayTrade'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/trade/',
      name: 'dayTrade',
      component: dayTrade
    },
    {
      path: '/trade/dayTrade',
      name: 'dayTrade',
      component: dayTrade
    }
  ]
})
