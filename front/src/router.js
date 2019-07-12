import Vue from 'vue';
import Router from 'vue-router';
import store from 'plugin-vuejs-keycloak';
import security from 'plugin-vuejs-keycloak/security';

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: '',
      meta: { requiresAuth: true, roles: ['user'] },
      component: () => import('./views/TeamList.vue')
    },
    {
      path: '/teams-list',
      name: 'teams-list',
      meta: { requiresAuth: true, roles: ['user'] },
      component: () => import('./views/TeamList.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log('before each');
  console.log(to);
  if (to.meta.requiresAuth) {
    const auth = store.state.security.auth;
    console.log(auth);
    if (!auth.authenticated) {
      console.log('auth.authenticated');
      security.init(next, to.meta.roles);
    }
    else {
      if (to.meta.roles) {
        if (security.roles(to.meta.roles[0])) {
          next();
        }
      }
      else {
        next();
      }
    }
  }
  else {
    next();
  }
})

export default router;