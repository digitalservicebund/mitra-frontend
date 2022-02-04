<script setup lang="ts">
  import { Answer } from "../../domain/Answer"
  import { Step } from "../../domain/Step"

  defineProps<{ step: Step<Answer> }>()
</script>

<template>
  <details open>
    <summary class="text-lg">{{ step.text }}</summary>
    <p>Typ: {{ step.type }}</p>
  </details>
</template>
