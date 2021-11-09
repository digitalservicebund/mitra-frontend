<script setup lang="ts">
  import Playbook from "../domain/Playbook"
  import Header from "../components/Header.vue"
  import Contract from "../components/Contract.vue"
  import repository from "../adapter/InMemoryPlaybookRepository"

  const playbook: Playbook = repository.findById("test")
</script>

<template>
  <Header />
  <Contract :playbook="playbook" />
</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  h1 {
    margin: 0;
  }
</style>
