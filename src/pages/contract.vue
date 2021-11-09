<script setup lang="ts">
  import Header from "../components/Header.vue"
  import Playbook from "../components/Playbook.vue"
  import repository from "../adapter/InMemoryPlaybookRepository"
  import PlaybookRepository from "../domain/PlaybookRepository"

  const makeRepository: () => PlaybookRepository = () => repository
</script>

<template>
  <Header />
  <Playbook :repository="makeRepository()" />
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
