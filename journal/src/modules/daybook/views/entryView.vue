<template>
<div class="entry-title d-flex justify-content-between p-2">
  <div>
    <span class="text-success fs-3 fw-bold">15</span><span class="mx-1 fs-3">Julios</span><span class="mx-2 fs-4 fw-ligth">2021, jueves</span>
  </div>
  <div>
    <button class="btn btn-danger mx-2">
      Borrar <i class="fa fa-trash"></i>
    </button>
    <button class="btn btn-primary mx-2">
      Subir Foto <i class="fa fa-upload"></i>
    </button>
  </div>
</div>
<hr>
<div class="d-flex flex-column px-3 h-75">
<textarea name="entry" id="entry" placeholder="¿Qué estas pensano hoy?"></textarea>
</div>
<fab-component :icon="'fa-save'"></fab-component>
<img src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="entry-image" class="img-thumbnail">
</template>
<script>
import {defineAsyncComponent} from 'vue';
export default{
  name:'entryView',
  components:{
    'fab-component':defineAsyncComponent(()=>import('@/modules/daybook/components/FabComponent.vue'))
  }
}
</script>
<style lang="scss" scoped>
textarea{
  font-size: 20px;
  border: none;
  height: 100%;
  &:focus{
    outline: none;
  }
}
img{
  width: 200px;
  position: fixed;
  bottom: 150px;
  right: 20px;
  box-shadow: 0px 5px 10px rgba($color: #000000, $alpha:0.2);
}
</style>