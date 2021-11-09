<script setup lang="ts">
  import Header from "../components/Header.vue"
</script>

<template>
  <Header />
  <section>
    <router-link to="/mitra-frontend/contract">Neuer Vertrag</router-link>
  </section>
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
