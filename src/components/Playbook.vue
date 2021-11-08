<!-- UI Component: Adapter -->
<script setup lang="ts">
  import { defineProps, toRefs } from "vue"
  import PlaybookRepository from "../domain/PlaybookRepository"

  const props = defineProps<{ repository: PlaybookRepository }>()

  const { repository } = toRefs(props)
  const playbook = repository.value.find("test")
</script>

<template>
  <div v-for="step in playbook.steps" :key="step">
    {{ step }}
  </div>
</template>
