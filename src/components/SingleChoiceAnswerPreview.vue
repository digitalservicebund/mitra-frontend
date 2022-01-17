<script setup lang="ts">
  import { SingleChoiceAnswerStep } from "../domain/Step"

  defineProps<{ step: SingleChoiceAnswerStep }>()
</script>

<template>
  <div class="mb-4">
    {{ step.print() }}
  </div>
</template>
