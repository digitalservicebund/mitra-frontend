<script setup lang="ts">
  import { useSession } from "../session"

  const entryPoint = useSession().entryPoint
  console.log(entryPoint)
</script>

<template>
  <router-link :to="`/mitra-frontend/${entryPoint}`" class="block mb-4">
    <span
      class="material-icons-outlined text-lg align-bottom mr-1"
      aria-hidden="true"
      >arrow_back</span
    >
    <span class="text-lg">Startseite</span>
  </router-link>
</template>
