<script setup lang="ts">
  import Header from "../components/Header.vue"
</script>

<template>
  <Header />
  <section>
    <h2 class="font-black mt-8 mb-2">Verträge</h2>
    <div class="flex flex-row">
      <p class="h-48 w-48 border p-4 mr-2 opacity-60">Vertrag bearbeiten</p>
      <p class="flex h-48 w-48 mr-2">
        <router-link to="/mitra-frontend/contract" class="flex-1 p-4 border"
          >Neuer Vertrag</router-link
        >
      </p>
      <p class="h-48 w-48 border p-4 opacity-60">
        Neuer Vertrag aus lokaler Datei
      </p>
    </div>
  </section>
  <section>
    <h2 class="font-black mt-8 mb-2">Playbooks</h2>
    <div class="flex flex-row">
      <p class="h-48 w-48 border p-4 mr-2 opacity-60">Playbook bearbeiten</p>
      <p class="h-48 w-48 border p-4 opacity-60">Neues Playbook</p>
    </div>
  </section>
</template>
