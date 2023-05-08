<template>
<div class="entry-list-container">
    <div class="px-2 pt-2 d-inline">
      <input type="text" name="enter" id="enter" placeholder="Buscar Entrada" class="form-control">
    </div>
    <div class="entry-scrollarea">
      <h2 v-for="x in 100" :key="x"><entry-component></entry-component></h2>
    </div>
</div>
</template>

<script>
import {defineAsyncComponent} from 'vue';
export default{
  name:'EntryList',
  components:{
    'entry-component':defineAsyncComponent(()=> import('./entryComponent.vue'))
  }
}
</script>
<style lang="scss" scoped>
.entry-list-container{
  border-right: 1px solid #2c3e50;
  height: calc(100vh - 56px);
}
.entry-scrollarea{
  height: calc(100vh - 120px);
  overflow: auto;
}
</style>