export default{
  name:"daybook",
  component:()=>import(/* webpackChunkName: "dayBookLayout" */ '@/modules/daybook/layouts/DayBookLayout.vue'),
  children:[
    {
      path:'', name:'no-entry',
      component:()=>import(/* webpackChunkName: "dayBookLayout-noentry" */ '@/modules/daybook/views/noEntrySelected.vue'),
    },
    {
      path:':id', name:'entry',
      component:()=>import(/* webpackChunkName: "dayBookLayout-entrySelected" */ '@/modules/daybook/views/entryView.vue'),
      
    }
  ]
}