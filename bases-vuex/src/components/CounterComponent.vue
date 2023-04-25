<template>
  <h1>Contador</h1>
  <h2>{{ counter }}</h2>
  <button @click="increment">+1</button>
  <button @click="incrementBy(5)">+5</button><br>
  <button @click="getNumberRandom" :disabled="isLoading">Random</button>
  <h2>{{ $store.getters.exponent }}</h2>
</template>
<script>
import { mapState, mapActions } from 'vuex';
export default{
  name:'contador-component',
  computed:{
    ...mapState('counter',['counter', 'isLoading'])
  },
  methods:{
    increment(){
      this.$store.commit("counter/increment");
    },
    incrementBy(number){
      this.$store.commit("counter/incrementBy", number);

    },
    randomNumber(){
      this.$store.dispatch("counter/getNumberRandom");
    },
    ...mapActions('counter',{getNumberRandom:'getNumberRandom'})

  }
}
</script>