import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
import Homepage2 from '@/components/Homepage2'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/homepage2',
      name: 'Homepage2',
      component: Homepage2
    },

  ]
})
