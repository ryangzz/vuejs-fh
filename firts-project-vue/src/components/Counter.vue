<template>
  <h2>{{title}}</h2>
  <p>{{upNumber}}<sup>2</sup></p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  <p data-id="counter">{{counter}}</p>
</template>

<script>
export default {
  name:"counter",
  props:{
    title:{type:String, default:'Hola soy el contador'},
    start:{
      type:Number,
      default:1
    }
  },
  data() {
    return {
      counter:1
    }
  },
  methods: {
    increment(){
      this.counter += 1;
    },
    decrement(){
      this.counter -= 1;
    }
  },
  computed:{
    upNumber(){
      return this.counter * this.counter;
    }
  }
}
</script>

<style>
button {
  background-color: #41b883;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

button:hover {
  background-color: #3a8e81;
}
</style>