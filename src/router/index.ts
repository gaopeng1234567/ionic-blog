import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue'
import Index from '../views/Index.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/Index'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Index',
    name:'Index',
    component: Index
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
