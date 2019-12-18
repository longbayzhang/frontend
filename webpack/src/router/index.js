import Vue from 'vue'
import Router from 'vue-router'
import LeftMenu from '@/components/LeftMenu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LeftMenu',
      component: LeftMenu
    }
  ]
})
