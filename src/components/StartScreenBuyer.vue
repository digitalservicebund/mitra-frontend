<script setup lang="ts">
  import { useSession } from "../session"
  import CreateContractPanel from "./CreateContractPanel.vue"

  const session = useSession()
  session.rememberEntryPoint("einkauf")
</script>

<template>
  <main id="index" class="grid grid-rows-2 justify-center">
    <CreateContractPanel />
  </main>
</template>
