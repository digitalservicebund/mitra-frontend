<script setup lang="ts">
  import { MultipleChoiceAnswerStep } from "../../domain/Step"

  defineProps<{ step: MultipleChoiceAnswerStep }>()
</script>

<template>
  <div class="mb-4">
    {{ step.print() }}
  </div>
</template>
