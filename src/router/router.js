import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/allstate',
    name: 'allState',
    component: () => import(/* webpackChunkName: "about" */ '../views/allState.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
