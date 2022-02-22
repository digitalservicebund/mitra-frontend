<script setup lang="ts">
  import Checkbox from "primevue/checkbox"
  import { ref } from "vue"
  import { MultipleChoiceAnswerStep } from "../../domain/Step"

  const props = defineProps<{ step: MultipleChoiceAnswerStep }>()

  const answer = ref(props.step.answer.value.selected)
  // TODO: here in labels we need to turn placeholders into editable boxes
  // => Where do we keep the values? A choice must somehow maintain them?
  const labels = props.step.choices.map((choice) => choice.text)

  // TODO: when handling change we must read and provide values from editable placeholder fields as well
  const handleChange = () => props.step.completeWith(answer.value)
</script>

<template>
  <ul class="mb-4">
    <li
      v-for="(label, index) in labels"
      :key="index"
      class="p-field-checkbox flex flex-row items-center pt-1 pb-1"
    >
      <Checkbox
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
