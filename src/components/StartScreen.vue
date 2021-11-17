<script setup lang="ts">
  import Card from "primevue/card"
  import AppHeader from "./AppHeader.vue"
</script>

<template>
  <AppHeader />
  <main id="index" class="grid grid-rows-2 justify-center">
    <section>
      <h2 class="font-black mt-8 mb-2">Verträge</h2>
      <div class="flex flex-row">
        <Card class="p-disabled">
          <template #content>
            <span class="material-icons-outlined" aria-hidden="true"
              >description</span
            >
            Vertrag bearbeiten
          </template>
        </Card>
        <Card>
          <template #content>
            <router-link to="/mitra-frontend/contract" class="block">
              <span
                class="material-icons-outlined hover:bg-gray-50"
                aria-hidden="true"
                >cloud</span
              >
              Neuer EVB-IT Cloud Vertrag
            </router-link>
          </template>
        </Card>
        <Card class="p-disabled">
          <template #content>
            <span class="material-icons-outlined" aria-hidden="true">add</span>
            Neuer Vertrag aus lokaler Datei
          </template>
        </Card>
      </div>
    </section>
    <section>
      <h2 class="font-black mt-8 mb-2">Playbooks</h2>
      <div class="flex flex-row">
        <Card class="p-disabled">
          <template #content>
            <span class="material-icons-outlined" aria-hidden="true"
              >smart_display</span
            >
            Playbook bearbeiten
          </template>
        </Card>
        <Card class="p-disabled">
          <template #content>
            <span class="material-icons-outlined" aria-hidden="true">add</span>
            Neues Playbook
          </template>
        </Card>
      </div>
    </section>
  </main>
</template>

<style>
  #index .p-card,
  #index .p-card-body,
  #index .p-card-content {
    /* Reset some out-of-the-box styling for Card component... */
    padding: 0;
    border: 0;
    box-shadow: none;
  }
  #index .p-card {
    @apply flex flex-col w-48 mr-2;
  }
  #index .p-card .material-icons-outlined {
    @apply flex flex-col items-center justify-center h-48 border mb-2 text-6xl;
  }
</style>
