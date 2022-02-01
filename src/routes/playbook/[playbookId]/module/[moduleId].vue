<!-- Pages are solely responsible for providing a route -->
<script setup lang="ts">
  import Screen from "../../../../components/playbook/ModuleEditScreen.vue"

  defineProps<{ playbookId: string; moduleId: string }>()
</script>

<template>
  <Screen :key="moduleId" :playbook-id="playbookId" :module-id="moduleId" />
</template>
