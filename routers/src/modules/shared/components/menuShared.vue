<template>
  <nav>
  <ul>
      <custom-link v-for="(link, key) of links" :key="key" :link="link"></custom-link>
  </ul>
  </nav>
</template>
<script>
import { defineAsyncComponent } from 'vue';
export default{
  name:"menuu",
  data() {
    return {
      links:[
        {to:"/login", name:"login", desc:"Login"},
        {to:"/admin", name:"home", desc:"Admin"},
        {to:{name:'producto', params:{id:1}}, desc:"Productos" },
        {to:{name:'web',  }, desc:"web"},
        {to:{name:'home-web', }, desc:"Home web"},
        {to:{name:'about-web', }, desc:"About web"},
        {to:'https://www.google.com', desc:"Google" },
      ]
    }
  },
  components:{
    'custom-link':defineAsyncComponent(()=>import('@/modules/shared/components/customLink.vue')),
  }
}
</script>
<style scoped>
nav {
  background-color: #fff;
  border-bottom: 1px solid #ddd;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

li {
  margin: 0;
  padding: 0;
}

a {
  display: block;
  padding: 10px 15px;
  color: #333;
  text-decoration: none;
}

a:hover {
  background-color: #f5f5f5;
}
.router-link-exact-active {
  color: green;
}
</style>