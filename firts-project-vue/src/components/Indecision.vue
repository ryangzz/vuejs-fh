<template>
  <img :src="image" alt="bg" v-if="image">
  <div class="bg-dark"></div>
  <div class="indecision-container">
    <input type="text" name="pregunta" id="pregunta" placeholder="Hazme una pregunta" v-model="question">
    <p>Recuerda terminar un signo de interrogacion (?)</p>
    <div v-if="quiestionValid">
      <h2>{{question}}</h2>
      <h1>{{answer}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name:'Indecision',
  data() {
    return {
      question:'',
      answer:'',
      image:null,
      quiestionValid:false
    }
  },
  methods:{
    async getAnswer(){
      try {
        this.answer = "Pensado ...";
      const { answer, image }  = await fetch("https://yesno.wtf/api").then(resp=> resp.json());
      this.answer = answer, this.image = image;
      } catch (error) {
        this.answer = "No se pudo cargar Api";
        this.image = null;
      }
    }
  },
  watch:{
    question(newValue){
      this.quiestionValid = false;
      console.log(newValue);
      if (!newValue.includes("?")) return
      this.getAnswer();
      this.quiestionValid = true
    }
  },
}
</script>

<style scoped>

    img, .bg-dark {
        height: 100vh;
        left: 0px;
        max-height: 100%;
        max-width: 100%;
        position: fixed;
        top: 0px;
        width: 100vw;
    }

    .bg-dark {
        background-color: rgba(0, 0, 0, 0.4);
    }

    .indecision-container {
        position: relative;
        z-index: 99;
    }
    
    input {
        width: 250px;
        padding: 10px 15px;
        border-radius: 5px;
        border: none;
    }
    input:focus {
        outline: none;
    }

    p {
        color: white;
        font-size: 20px;
        margin-top: 0px;
    }

    h1, h2 {
        color: white;
    }
    
    h2 {
        margin-top: 150px;
    }

</style>