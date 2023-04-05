<template>
  <nav>
  <ul>
  <router-link to="/">Login</router-link>
  <router-link to="/admin">Admin</router-link>
  <router-link :to="{name:'producto', params:{id:1}}">productos</router-link>
  </ul>
  </nav>
</template>
<script>
export default{
  name:"menu",
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