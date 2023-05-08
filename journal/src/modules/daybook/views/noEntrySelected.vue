<template>
  <div class="d-flex justify-content-center">
    <h1 class="aling-self-center"> No hay nada seleccionado</h1>    
  </div>
  <fab-component></fab-component>
</template>
<script>
import {defineAsyncComponent} from 'vue';
export default{
  name:'noEntrySelected',
  components:{
    'fab-component':defineAsyncComponent(()=>import('@/modules/daybook/components/FabComponent.vue'))
  }
}
</script>
<style lang="scss">
div{
  height: 100%;
}
</style>