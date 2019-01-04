import Vue from 'vue'
import Router from 'vue-router'
import Full from '@/containers/Full'

// Views
import Dashboard from '@/views/templates/Dashboard'
import AdminDashboard from '@/views/pages/admin/Dashboard'

// Views - Pages
import Page404 from '@/views/pages/Page404'
import Page500 from '@/views/pages/Page500'
import Login from '@/components/Login'
import Register from '@/components/Register'
import axios from 'axios';
import VueAxios from 'vue-axios'

import Vuex from 'vuex'
Vue.use(Vuex);
import store from '../store'

// Sample route
// import sample from '@/views/sample'

// Pages
// Containers

// import Register from './pages/Register'
// import Register from '@/views/pages/Register'
// import Login from './pages/Login'
// import Dashboard from './pages/user/Dashboard'

Vue.use(Router)

Vue.use(VueAxios, axios);
axios.defaults.baseURL = 'http://localhost:8000'
// Routes
const routes = [
  {
    path     : '/',
    name     : 'home',
    component: Full,
    meta     : { auth: undefined },
  },
  {
    path     : '/register',
    name     : 'register',
    component: Register,
    meta     : { auth: false },
  },
  {
    path     : '/login',
    name     : 'login',
    component: Login,
    meta     : { auth: false },
  },
  // USER ROUTES
  {
    path     : '/dashboard',
    name     : 'dashboard',
    component: Dashboard,
    meta     : { auth: true },
  },
  // ADMIN ROUTES
  {
    path     : '/admin',
    name     : 'admin.dashboard',
    component: AdminDashboard,
    meta     : {
      auth: {
        roles            : 2, redirect         : { name: 'login' }, forbiddenRedirect: '/403',
      },
    },
  },
  {
    path     : '/pages',
    redirect : '/pages/404',
    name     : 'Pages',
    component: { render (c) { return c('router-view') } },
    children : [
      {
        path     : '404',
        name     : 'Page404',
        component: Page404,
      },
      {
        path     : '500',
        name     : 'Page500',
        component: Page500,
      },
    ],
  },
]

const router = new Router({
  history: true,
  mode   : 'history',
  routes,
})
// App.router = Vue.router
Vue.router = router

Vue.use(require('@websanova/vue-auth'), {
  auth  : require('@websanova/vue-auth/drivers/auth/bearer.js'),
  http  : require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
  router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
})

Vue.router.beforeEach((to, from, next) => {
  const authRequired = to.matched.some((route) => route.meta.auth)
  let authed = store.getters.isLoggedin(store.state)
  if (authRequired && !authed) {
    next('/api/login')
  } else {
    next()
  }
})
export default router
