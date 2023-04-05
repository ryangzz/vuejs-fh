<template>
  <div class="pokemon-container">
    <img class="hidden-pokemon" :src="srcPokemon" alt="pokemon">
    <img v-if="showPokemon" class="fade-in" :src="srcPokemon" alt="pokemon">
  </div>
</template>
<script>
export default{
  name:"imagePokemon",
  props:{
    pokemonid:{
      type:Number,
      required:true,
      default:1
    },
    showPokemon:{
      type:Boolean,
      default:false,
      required:true
    }
  },
  computed:{
    srcPokemon(){
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonid}.svg`
    }
  }
}
</script>
<style scoped>
  /* Pokemon Picture */
.pokemon-container {
    height: 200px;
}
img {
  height: 200px;
  position: absolute;
  width: 100vw;
  margin-left: -50vw;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
.hidden-pokemon {
    filter: brightness(0);
}

</style>