<script setup lang="ts">
  import { ref } from "vue"
  import InputText from "primevue/inputtext"

  const props = defineProps<{ answer: string; text: string }>()
  const emit = defineEmits<{
    (e: "answerChanged", answer: string): void
  }>()

  const editableAnswer = ref(props.answer)
</script>

<template>
  <div class="mb-4">
    {{ text }}
  </div>
  <div class="mb-4">
    <InputText
      v-model="editableAnswer"
      :title="text"
      class="w-full"
      type="text"
      @input="emit('answerChanged', editableAnswer)"
    />
  </div>
</template>
