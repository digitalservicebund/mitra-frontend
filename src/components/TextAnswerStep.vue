<script setup lang="ts">
  import { ref } from "vue"
  import InputText from "primevue/inputtext"
  import { Step, TextAnswer } from "../domain/Step"

  const props = defineProps<{ step: Step<TextAnswer> }>()
  const emit = defineEmits<{
    (e: "answerChanged", answer: string): void
  }>()

  const editableAnswer = ref(props.step.getAnswer().toString())
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
