<script setup lang="ts">
  import { defineProps } from "vue"
  import Playbook from "../domain/Playbook"

  defineProps<{ playbook: Playbook }>()
</script>

<template>
  <section v-for="module in playbook.modules" :key="module.text">
    <h3>
      <strong>{{ module.text }}</strong>
    </h3>
    <div v-for="step in module.steps" :key="step.text">
      {{ step.text }}
    </div>
  </section>
</template>
