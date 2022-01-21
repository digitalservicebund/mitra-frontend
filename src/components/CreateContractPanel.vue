<script setup lang="ts">
  import Card from "primevue/card"
</script>

<template>
  <section>
    <h2 class="font-black mt-8 mb-2">Vertrag erstellen</h2>
    <div class="flex flex-row">
      <Card>
        <template #content>
          <router-link to="/mitra-frontend/open-contract" class="block">
            <span
              class="material-icons-outlined hover:bg-gray-50"
              aria-hidden="true"
              >description</span
            >
            Vertrag weiter bearbeiten
          </router-link>
        </template>
      </Card>
      <Card>
        <template #content>
          <router-link to="/mitra-frontend/contract/new" class="block">
            <span
              class="material-icons-outlined hover:bg-gray-50"
              aria-hidden="true"
              >cloud</span
            >
            Neuer EVB-IT Cloud Vertrag
          </router-link>
        </template>
      </Card>
      <Card>
        <template #content>
          <router-link
            to="/mitra-frontend/contract/open-playbook"
            class="block"
          >
            <span
              class="material-icons-outlined hover:bg-gray-50"
              aria-hidden="true"
              >add</span
            >
            Neuer Vertrag aus lokaler Datei
          </router-link>
        </template>
      </Card>
    </div>
  </section>
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
    @apply flex flex-col items-center justify-center h-48 border border-slate-200 mb-2 text-6xl;
  }
</style>
