<template>
  <div class="entry-container mb-3 pointer p-2" @click="$router.push({name:'entry', params:{id:10 }})">
    
    <div class="entry-title d-flex">
      <span>15</span><span>Julio</span><span>2021, jueves</span>
    </div>
    <div class="entry-description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam doloremque laborum voluptatibus, hic placeat quis blanditiis ut ullam. Repellendus beatae quia placeat, id libero exercitationem consequatur pariatur quisquam ipsum autem?
    </div>
  </div >
</template>
<style lang="scss" scoped>
.entry-container{
  border-bottom: 1px solid #2c3e50;
  transition: 0.2 all ease-in;
  &:hover{
    background-color: lighten($color: grey, $amount: 45);
  }
  .entry-description{
    font-size: 12px;
  }
}

</style>