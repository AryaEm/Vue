import { createRouter, createWebHistory } from 'vue-router'
import rumah from '../views/page/rumah.vue'
import kamar from '../views/page/kamar.vue'

const routes = [
  {
    path: '/rumah',
    component: rumah
  },
  {
    path: '/kamar',
    component: kamar
  }
]

const router = createRouter({
  history: createWebHistory (),
  routes
})

export default router
