<template>
<menu-app></menu-app>
<router-view></router-view>
</template>

<script>
import menu from '@/modules/shared/components/menuShared.vue';
export default {
  name: 'App',
  components:{
    'menu-app':menu
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
