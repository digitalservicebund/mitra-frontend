<script setup lang="ts">
  import { ref } from "vue"
  import InputText from "primevue/inputtext"
  import { Step, StepType } from "../domain/Step"

  const props = defineProps<{ step: Step<StepType> }>()
  const emit = defineEmits<{
    (e: "answerChanged", answer: string): void
  }>()

  const editableAnswer = ref(props.step.getAnswer())
</script>

<template>
  <div class="mb-4">
    {{ step.text }}
  </div>
  <div class="mb-4">
    <InputText
      v-model="editableAnswer"
      :title="step.text"
      class="w-full"
      type="text"
      @input="emit('answerChanged', editableAnswer)"
    />
  </div>
</template>
