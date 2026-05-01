import { createRouter, createWebHistory } from 'vue-router'
import ProductsView from '../views/ProductsView.vue'
import HomeView from '../views/HomeView.vue'

const routes = [ 
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/productos',
    name: 'ProductsView',
    component: ProductsView
  },
  {
    path: '/contact',
    name: 'ContactView',
    component: () => import('../views/ContactView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router