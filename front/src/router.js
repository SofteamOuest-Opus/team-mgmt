import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/teams',
      name: 'teams',
      component: () => import('./views/TeamList.vue')
    }
  ]
})
