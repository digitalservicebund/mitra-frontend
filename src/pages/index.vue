<script setup lang="ts">
  import Header from "../components/Header.vue"
</script>

<template>
  <Header />
  <section>
    <h2>Verträge</h2>
    <p>Vertrag bearbeiten</p>
    <p>
      <router-link to="/mitra-frontend/contract">Neuer Vertrag</router-link>
    </p>
    <p>Neuer Vertrag aus lokaler Datei</p>
  </section>
  <section>
    <h2>Playbooks</h2>
    <p>Playbook bearbeiten</p>
    <p>Neues Playbook</p>
  </section>
</template>
