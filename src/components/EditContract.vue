<script setup lang="ts">
  import Contract from "../domain/Contract"

  defineProps<{ contract: Contract }>()
</script>

<template>
  <section v-for="module in contract.playbook.modules" :key="module.text">
    <h3>
      <strong>{{ module.text }}</strong>
    </h3>
    <div v-for="step in module.steps" :key="step.text">
      {{ step.text }}
    </div>
  </section>
</template>
