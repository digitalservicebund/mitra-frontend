<script setup lang="ts">
  import InputText from "primevue/inputtext"
  import { ref } from "vue"
  import { TextAnswerStep } from "../../domain/Step"

  const props = defineProps<{ step: TextAnswerStep }>()

  const answer = ref(props.step.answer.toString())

  const handleInput = () => props.step.answer.setValue(answer.value)
</script>

<template>
  <div class="mb-4">
    <InputText
      v-model="answer"
      :title="step.text"
      class="w-full"
      type="text"
      @input="handleInput"
    />
  </div>
</template>
