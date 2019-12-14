import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/products',
    name: 'products',
    
    component: () => import( '../views/Products.vue')
  },{
    path: '/spareParts',
    name: 'spareParts',
    
    component: () => import( '../views/SpareParts.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    
    component: () => import( '../views/Contact.vue')
  },
  {
    path: '/login',
    name: 'login',
    
    component: () => import( '../views/logIn.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
