<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
  <button class="btn btn-success" @click="$router.push({name:'no-entry'})"> daybook</button>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
}
</script>
