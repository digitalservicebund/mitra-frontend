<script setup lang="ts">
  import { TextAnswerStep } from "../domain/Step"

  defineProps<{ step: TextAnswerStep }>()
</script>

<template>
  <div class="mb-4">
    {{ step.print() }}
  </div>
</template>
