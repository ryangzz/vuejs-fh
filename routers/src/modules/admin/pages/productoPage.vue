<template>
  {{ this.pokemon?.name || 'No pokemon' }}
</template>
<script>
export default{
  data() {
    return {
      pokemon:null
    }
  },
  props:{
    id:{
      type:Number,
      requerid:true,
    }
  },
  methods: {
    async getPokemon(){
      try {
        this.pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`).then(resp=>{
          return resp.json()
        });
        console.log(this.pokemon);
      } catch (error) {
        this.$router.push('/');
        console.log(error);
      }
    }
  },
  created() {
    this.getPokemon()
  },
  watch:{
    id(){
      this.getPokemon();
    }
  }
}
</script>