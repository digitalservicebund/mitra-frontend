<script setup lang="ts">
  import { ref } from "vue"
  import InputText from "primevue/inputtext"
  import { Answer, TextAnswer, TextAnswerStep } from "../domain/Step"

  const props = defineProps<{ step: TextAnswerStep }>()
  const emit = defineEmits<{
    (e: "answerChanged", answer: Answer): void
  }>()

  const handleInput = () => {
    const answer = new TextAnswer(editableAnswer.value)
    emit("answerChanged", answer)
  }

  const editableAnswer = ref(props.step.answer.toString())
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
      @input="handleInput"
    />
  </div>
</template>
