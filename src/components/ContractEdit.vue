<script setup lang="ts">
  import { ref, computed } from "vue"
  import Contract from "../domain/Contract"
  import { Answer, Step, TextAnswerStep } from "../domain/Step"
  import TextAnswerStepComponent from "./TextAnswerStep.vue"
  import Button from "primevue/button"

  const props = defineProps<{ contract: Contract }>()

  const currentStep = ref(props.contract.getSteps()[0])

  const currentStepComponent = computed(() => {
    const step = currentStep.value as Step<Answer>
    if (step.type === TextAnswerStep.TYPE) {
      return TextAnswerStepComponent
    }
    return null // unknown type, don't render anything
  })

  const hasPreviousStep = computed(
    () =>
      props.contract.getPreviousStepFor(currentStep.value as Step<Answer>) !==
      undefined
  )

  const hasNextStep = computed(
    () =>
      props.contract.getNextStepFor(currentStep.value as Step<Answer>) !==
      undefined
  )

  const currentModule = computed(() => {
    return props.contract.getModuleFor(currentStep.value as Step<Answer>)
  })

  const previous = () => {
    const step = props.contract.getPreviousStepFor(
      currentStep.value as Step<Answer>
    )
    if (step) {
      currentStep.value = step
    }
  }

  const next = () => {
    const step = props.contract.getNextStepFor(
      currentStep.value as Step<Answer>
    )
    if (step) {
      currentStep.value = step
    }
  }
</script>

<template>
  <section :key="currentStep?.id">
    <h3 class="font-bold">
      {{ currentModule?.text }}
    </h3>
    <div class="w-[30vw]">
      <component
        :is="currentStepComponent"
        :step="currentStep"
        @answer-changed="currentStep?.setAnswer($event)"
      />
      <div class="grid grid-cols-3 col-span-full">
        <Button
          v-if="hasPreviousStep"
          label="Zurück"
          class="p-button-outlined col-start-1"
          @click="previous"
        />
        <Button
          v-if="hasNextStep"
          label="Weiter"
          class="p-button-outlined col-start-3"
          @click="next"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
  .p-button {
    min-width: 8vw;
  }
</style>
