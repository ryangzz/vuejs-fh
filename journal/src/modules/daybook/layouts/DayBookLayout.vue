<template>
  <nav-bar></nav-bar>
  <div class="d-flex">
    <div class="col-4">
      <entry-list></entry-list>
    </div>
    <div class="col">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import { defineAsyncComponent } from 'vue';

export default{
  name:"navBarDayBook",
  components:{
    'nav-bar':defineAsyncComponent(()=> import('../components/navBar.vue')),
    'entry-list':defineAsyncComponent(()=> import('../components/entryList.vue')),
  }
}
</script>