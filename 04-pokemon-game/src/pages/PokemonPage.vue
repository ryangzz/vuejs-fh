<template>
    <h1>Que pokemon es?</h1>
    <image-pokemon-component :pokemonid="27" :showPokemon="true"></image-pokemon-component>
    <options-pokemon-component></options-pokemon-component>
</template>
  
<script>
import ImagePokemonComponent from '@/components/ImagePokemonComponent.vue';
import OptionsPokemonComponent from '@/components/OptionsPokemonComponent.vue';
  export default{
    name:"PokemonPage",
    data() {
      return {
        
      }
    },
    components:{
      'image-pokemon-component':ImagePokemonComponent,
      'options-pokemon-component':OptionsPokemonComponent,
    }
  }
</script>
  
<style>
  
</style>