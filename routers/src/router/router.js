import { createRouter, createWebHashHistory } from "vue-router";
const routes  = [
  {path:'/', component:()=>import('@/modules/auth/pages/loginPage.vue')},
  {
    path:'/admin/producto/:id',
    component:()=>import('@/modules/admin/pages/productoPage.vue'),
    name:'producto',
    props:(route)=>{
      const {id} = route.params;
      return isNaN(id) ? {id:0}:{id:id*1};
    }
  },
  {path:'/admin', component:()=> import('@/modules/admin/pages/homePage.vue')},
  {path:'/:pathMath(.*)*', component:()=>import('@/modules/shared/pages/notFoundPage.vue')},
];

const router = createRouter({
  history:createWebHashHistory(),
  routes
})

export default router;