<template>
  <a v-if="isExternal" :href="this.link.to" target="_blank" class="normal-link">{{ link.desc }}</a>
  <router-link v-else :to="link.to" v-slot="{href, isActive}">
    <a :href="href" :class="isActive ? 'is-active':'normal-link'">{{ link.desc }}</a>
  </router-link>
</template>

<script>

export default{
  name:'custonlink',
  props:{
    link:{
      type: Object,
      required:true
    }
  },
  computed:{
    isExternal(){
      return (typeof this.link.to == 'string') ? this.link.to.startsWith("http") : false;
    }
  },
  mounted() {
    console.log(this.link);
  },
}
</script>

<style scoped>
.is-active {
  color: #42b883; /* Color verde de Vue.js */
  font-weight: bold; /* Fuente en negrita para destacar */
}
.normal-link{
  color: #a9a9a9; /* Tono gris para el texto del link */
  text-decoration: none; /* Quita la subrayado del link */
}


.normal-link:hover {
  color: #fff; /* Cambia el color del texto al blanco al pasar el ratón por encima */
  background-color: #a9a9a9; /* Color de fondo gris para indicar el hover */
}

</style>