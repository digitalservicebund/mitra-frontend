<script setup lang="ts">
  import { ref } from "vue"
  import RadioButton from "primevue/radiobutton"
  import { SingleChoiceAnswerStep } from "../domain/Step"

  const props = defineProps<{ step: SingleChoiceAnswerStep }>()
  const choice = ref(props.step.answer.value)

  const handleChange = () => props.step.answer.setValue(choice.value)
</script>

<template>
  <div class="mb-4">
    {{ step.text }}
  </div>
  <ul class="mb-4">
    <li
      v-for="(possibleChoice, index) in step.getChoices()"
      :key="index"
      class="p-field-radiobutton flex flex-row items-center pt-1 pb-1"
    >
      <RadioButton
        :id="`choice-${index}`"
        v-model="choice"
        name="choice"
        :value="index"
        @change="handleChange"
      />
      <!-- eslint-disable vuejs-accessibility/label-has-for : ESLint not able to detect dynamically generated for attributed, label tested e2e! -->
      <label class="pl-2" :for="`choice-${index}`">{{ possibleChoice }}</label>
    </li>
  </ul>
</template>
