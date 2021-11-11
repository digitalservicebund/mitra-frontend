<script setup lang="ts">
  import Header from "../components/Header.vue"
</script>

<template>
  <Header />
  <section>
    <h2 class="font-black mt-8 mb-2">Verträge</h2>
    <div class="flex flex-row">
      <p class="card opacity-60">
        <span class="card-icon material-icons-outlined" aria-hidden="true"
          >description</span
        >
        Vertrag bearbeiten
      </p>
      <p class="card">
        <router-link to="/mitra-frontend/contract" class="block"
          ><span
            class="card-icon material-icons-outlined hover:bg-gray-50"
            aria-hidden="true"
            >cloud</span
          >
          Neuer Vertrag
        </router-link>
      </p>
      <p class="card opacity-60">
        <span class="card-icon material-icons-outlined" aria-hidden="true"
          >add</span
        >
        Neuer Vertrag aus lokaler Datei
      </p>
    </div>
  </section>
  <section>
    <h2 class="font-black mt-8 mb-2">Playbooks</h2>
    <div class="flex flex-row">
      <p class="card opacity-60">
        <span class="card-icon material-icons-outlined" aria-hidden="true"
          >smart_display</span
        >
        Playbook bearbeiten
      </p>
      <p class="card opacity-60">
        <span class="card-icon material-icons-outlined" aria-hidden="true"
          >add</span
        >
        Neues Playbook
      </p>
    </div>
  </section>
</template>

<style>
  @layer components {
    .card {
      @apply flex flex-col w-48 mr-2;
    }
    .card-icon {
      @apply flex flex-col items-center justify-center h-48 border text-6xl;
    }
  }
</style>
