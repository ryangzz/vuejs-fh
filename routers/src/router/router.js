import { createRouter, createWebHashHistory } from "vue-router";
import isAuthenticated from './auth-guard.js';
const routes  = [
  {
    path:'/', redirect:{name:'login'}
  },
  {path:'/login', name:'login', component:()=>import('@/modules/auth/pages/loginPage.vue')},
  {
    path:'/admin', name:"home",component:()=> import('@/modules/admin/layout/adminLayout.vue'),
    beforeEnter: [isAuthenticated],
    children:[
      {
        path:'producto/:id',
        component:()=> import('@/modules/admin/pages/productoPage.vue'),
        name:'producto',
        props:(route)=>{
          const {id} = route.params;
          return isNaN(id) ? {id:0}:{id:id*1};
        }
      },
    
    ]  
  },
  {
    path:'/web',
    name:'web',
    beforeEnter:[isAuthenticated],
    component:()=>(import('@/modules/web/layout/webLayout.vue')),
    children:[
      {
        path:'home',
        name:'home-web',
        component:()=>import('@/modules/web/pages/homePage.vue')
      },
      {
        path:'about',
        name:'about-web',
        component:()=>import('@/modules/web/pages/aboutPage.vue')
      },
      {
        path:'',
        name:'reditect-web-home',
        redirect:{name:'web'}
      }
    ]
  },
  {path:'/:pathMath(.*)*', component:()=>import('@/modules/shared/pages/notFoundPage.vue')},
];

const router = createRouter({
  history:createWebHashHistory(),
  routes
})

export default router;