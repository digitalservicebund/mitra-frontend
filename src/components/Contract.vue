<script setup lang="ts">
  import { defineProps } from "vue"
  import Playbook from "../domain/Playbook"

  defineProps<{ playbook: Playbook }>()
</script>

<template>
  <div v-for="step in playbook.steps" :key="step">
    {{ step }}
  </div>
</template>
