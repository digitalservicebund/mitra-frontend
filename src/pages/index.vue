<script setup lang="ts">
  import Header from "../components/Header.vue"
</script>

<template>
  <Header />
  <section>
    <h2 class="font-black mt-8 mb-2">Verträge</h2>
    <div class="flex flex-row">
      <p class="flex flex-col w-48 mr-2 opacity-60">
        <span
          class="
            flex flex-col
            items-center
            justify-center
            h-48
            material-icons-outlined
            border
            text-6xl
          "
          aria-hidden="true"
          >description</span
        >
        Vertrag bearbeiten
      </p>
      <p class="flex flex-col w-48 mr-2">
        <router-link to="/mitra-frontend/contract" class="block"
          ><span
            class="
              flex flex-col
              items-center
              justify-center
              h-48
              material-icons-outlined
              border
              text-6xl
              hover:bg-gray-50
            "
            aria-hidden="true"
            >cloud</span
          >
          Neuer Vertrag
        </router-link>
      </p>
      <p class="flex flex-col w-48 mr-2 opacity-60">
        <span
          class="
            flex flex-col
            items-center
            justify-center
            h-48
            material-icons-outlined
            border
            text-6xl
          "
          aria-hidden="true"
          >add</span
        >
        Neuer Vertrag aus lokaler Datei
      </p>
    </div>
  </section>
  <section>
    <h2 class="font-black mt-8 mb-2">Playbooks</h2>
    <div class="flex flex-row">
      <p class="flex flex-col w-48 mr-2 opacity-60">
        <span
          class="
            flex flex-col
            items-center
            justify-center
            h-48
            material-icons-outlined
            border
            text-6xl
          "
          aria-hidden="true"
          >smart_display</span
        >
        Playbook bearbeiten
      </p>
      <p class="flex flex-col w-48 mr-2 opacity-60">
        <span
          class="
            flex flex-col
            items-center
            justify-center
            h-48
            material-icons-outlined
            border
            text-6xl
          "
          aria-hidden="true"
          >add</span
        >
        Neues Playbook
      </p>
    </div>
  </section>
</template>
