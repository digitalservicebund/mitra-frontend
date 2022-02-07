<script setup lang="ts">
  import RadioButton from "primevue/radiobutton"
  import { ref } from "vue"
  import { SingleChoiceAnswerStep } from "../../domain/Step"

  const props = defineProps<{ step: SingleChoiceAnswerStep }>()

  const answer = ref(props.step.answer.value)
  const labels = props.step.choices.map((choice) => choice.text)

  const handleChange = () => props.step.answer.setValue(answer.value)
</script>

<template>
  <ul class="mb-4">
    <li
      v-for="(label, index) in labels"
      :key="index"
      class="p-field-radiobutton flex flex-row items-center pt-1 pb-1"
    >
      <RadioButton
        :id="`choice-${index}`"
        v-model="answer"
        name="choice"
        :value="index"
        @change="handleChange"
      />
      <!-- eslint-disable vuejs-accessibility/label-has-for : ESLint not able to detect dynamically generated for attributed, label tested e2e! -->
      <label class="pl-2" :for="`choice-${index}`">{{ label }}</label>
    </li>
  </ul>
</template>
