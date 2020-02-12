import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AllIosIcon from 'vue-ionicons/dist/ionicons-ios.js'
 
Vue.use(AllIosIcon)

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
  },
  {
    path: '/About',
    name: 'About',
    
    component: () => import( '../views/About.vue')
  },
  {
    path: '/Profile',
    name: 'Profile',
    
    component: () => import( '../views/Profile.vue')
  },
  {
    path: '/Chat',
    name: 'Chat',
    
    component: () => import( '../views/Chat.vue')
  },
  {
    path: '/Spare1',
    name: 'Spare1',
    
    component: () => import( '../views/Spare1.vue')
  },
  {
    path: '/spare2',
    name: 'spare2',
    
    component: () => import( '../views/spare2.vue')
  },
  {
    path: '/spare3',
    name: 'spare3',
    
    component: () => import( '../views/spare3.vue')
  },
  {
    path: '/spare4',
    name: 'spare4',
    
    component: () => import( '../views/spare4.vue')
  },
  {
    path: '/spare5',
    name: 'spare5',
    
    component: () => import( '../views/spare5.vue')
  },
  {
    path: '/spare6',
    name: 'spare6',
    
    component: () => import( '../views/spare6.vue')
  },
  {
    path: '/spare7',
    name: 'spare7',
    
    component: () => import( '../views/spare7.vue')
  },
  {
    path: '/spare8',
    name: 'spare8',
    
    component: () => import( '../views/spare8.vue')
  },
  {
    path: '/spare9',
    name: 'spare9',
    
    component: () => import( '../views/spare9.vue')
  },
  {
    path: '/spare10',
    name: 'spare10',
    
    component: () => import( '../views/spare10.vue')
  },
  {
    path: '/spare11',
    name: 'spare11',
    
    component: () => import( '../views/spare11.vue')
  },
  {
    path: '/spare12',
    name: 'spare12',
    
    component: () => import( '../views/spare12.vue')
  },
  {
    path: '/spare13',
    name: 'spare13',
    
    component: () => import( '../views/spare13.vue')
  },
  {
    path: '/spare14',
    name: 'spare14',
    
    component: () => import( '../views/spare14.vue')
  },
  {
    path: '/spare15',
    name: 'spare15',
    
    component: () => import( '../views/spare15.vue')
  },
  {
    path: '/spare16',
    name: 'spare16',
    
    component: () => import( '../views/spare16.vue')
  },
  {
    path: '/spare17',
    name: 'spare17',
    
    component: () => import( '../views/spare17.vue')
  },
  {
    path: '/spare18',
    name: 'spare18',
    
    component: () => import( '../views/spare18.vue')
  },
  {
    path: '/spare19',
    name: 'spare19',
    
    component: () => import( '../views/spare19.vue')
  },
  {
    path: '/spare20',
    name: 'spare20',
    
    component: () => import( '../views/spare20.vue')
  },
  {
    path: '/spare21',
    name: 'spare21',
    
    component: () => import( '../views/spare21.vue')
  },
  {
    path: '/spare22',
    name: 'spare22',
    
    component: () => import( '../views/spare22.vue')
  },
  {
    path: '/spare23',
    name: 'spare23',
    
    component: () => import( '../views/spare23.vue')
  },
  {
    path: '/product1',
    name: 'product1',
    
    component: () => import( '../views/product1.vue')
  },
  {
    path: '/freezer',
    name: 'freezer',
    
    component: () => import( '../views/freezer.vue')
  },
  {
    path: '/construction',
    name: 'construction',
    
    component: () => import( '../views/construction.vue')
  },
  {
    path: '/product2',
    name: 'product2',
    
    component: () => import( '../views/product2.vue')
  },
  {
    path: '/earth',
    name: 'earth',
    
    component: () => import( '../views/earth.vue')
  },
  {
    path: '/crawler',
    name: 'crawler',
    
    component: () => import( '../views/crawler.vue')
  },
  {
    path: '/articulated',
    name: 'articulated',
    
    component: () => import( '../views/articulated.vue')
  },
  {
    path: '/wheel',
    name: 'wheel',
    
    component: () => import( '../views/wheel.vue')
  },
  {
    path: '/tractor',
    name: 'tractor',
    
    component: () => import( '../views/tractor.vue')
  },
  {
    path: '/telescopic',
    name: 'telescopic',
    
    component: () => import( '../views/telescopic.vue')
  },
  {
    path: '/loader',
    name: 'loader',
    
    component: () => import( '../views/loader.vue')
  },
  {
    path: '/pipe',
    name: 'pipe',
    
    component: () => import( '../views/pipe.vue')
  },
  {
    path: '/pontoon',
    name: 'pontoon',
    
    component: () => import( '../views/pontoon.vue')
  },
  {
    path: '/duty',
    name: 'duty',
    
    component: () => import( '../views/duty.vue')
  },
  {
    path: '/attachment',
    name: 'attachment',
    
    component: () => import( '../views/attachment.vue')
  },
  {
    path: '/customer',
    name: 'customer',
    
    component: () => import( '../views/customer.vue')
  },
  {
    path: '/side',
    name: 'side',
    
    component: () => import( '../views/side.vue')
  },
  {
    path: '/wine',
    name: 'wine',
    
    component: () => import( '../views/wine.vue')
  },
  {
    path: '/accessories',
    name: 'accessories',
    
    component: () => import( '../views/accessories.vue')
  },
  {
    path: '/hotel',
    name: 'hotel',
    
    component: () => import( '../views/hotel.vue')
  },
  {
    path: '/bakery',
    name: 'bakery',
    
    component: () => import( '../views/bakery.vue')
  },
  {
    path: '/retail',
    name: 'retail',
    
    component: () => import( '../views/retail.vue')
  },
  {
    path: '/industry',
    name: 'industry',
    
    component: () => import( '../views/industry.vue')
  },
  {
    path: '/mining',
    name: 'mining',
    
    component: () => import( '../views/mining.vue')
  },
  {
    path: '/mobile',
    name: 'mobile',
    
    component: () => import( '../views/mobile.vue')
  },
  {
    path: '/material',
    name: 'material',
    
    component: () => import( '../views/material.vue')
  },
  {
    path: '/maritime',
    name: 'maritime',
    
    component: () => import( '../views/maritime.vue')
  },
  {
    path: '/aero',
    name: 'aero',
    
    component: () => import( '../views/aero.vue')
  },
  {
    path: '/gear',
    name: 'gear',
    
    component: () => import( '../views/gear.vue')
  },
  {
    path: '/combust',
    name: 'combust',
    
    component: () => import( '../views/combust.vue')
  },
  {
    path: '/hotelgroup',
    name: 'hotelgroup',
    
    component: () => import( '../views/hotelgroup.vue')
  },
  {
    path: '/deep',
    name: 'deep',
    
    component: () => import( '../views/deep.vue')
  },
  {
    path: '/tower',
    name: 'tower',
    
    component: () => import( '../views/tower.vue')
  },
  {
    path: '/concrete',
    name: 'concrete',
    
    component: () => import( '../views/concrete.vue')
  },
  {
    path: '/problem',
    name: 'problem',
    
    component: () => import( '../views/problem.vue')
  }




]

const router = new VueRouter({
  routes
})

export default router
