import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// FIXME: Replace with registry
const routes = [
  {
    path: '',
    component: () => import('patients/App')
  },
  {
    path: '/patients',
    component: () => import('patients/App')
  }
]
  
const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
