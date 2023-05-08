import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import dayBookRoute from '@/modules/daybook/router';
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/daybook',
    ...dayBookRoute
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
