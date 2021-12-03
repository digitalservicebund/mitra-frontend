<script setup lang="ts">
  import { ref, computed } from "vue"
  import Contract from "../domain/Contract"
  import {
    InformationalStep,
    Step,
    StepType,
    TextAnswerStep,
  } from "../domain/Step"
  import InformationalStepComponent from "./InformationalStep.vue"
  import TextAnswerStepComponent from "./TextAnswerStep.vue"
  import Button from "primevue/button"

  const props = defineProps<{ contract: Contract }>()

  const currentStep = ref(props.contract.getAllSteps()[0])

  const currentStepComponent = computed(() => {
    if (currentStep.value === undefined) {
      return null
    }
    const step = currentStep.value as Step<StepType>
    const type = step.getType()
    if (type === TextAnswerStep.TYPE) {
      return TextAnswerStepComponent
    }
    if (type === InformationalStep.TYPE) {
      return InformationalStepComponent
    }
    return null // unknown type, don't render anything
  })

  const hasPreviousStep = computed(() => steps.findIndex(lookupCurrentStep) > 0)

  const hasNextStep = computed(
    () => steps.findIndex(lookupCurrentStep) < steps.length - 1
  )

  const currentModule = computed(() => {
    return props.contract.getModuleFor(currentStep.value as Step<StepType>)
  })

  const steps: Step<StepType>[] = props.contract.getAllSteps()

  const lookupCurrentStep = (step: Step<StepType>) =>
    step.equals(currentStep.value as Step<StepType>)

  const previous = () => {
    const currentIndex = steps.findIndex(lookupCurrentStep)
    if (currentIndex > 0) {
      currentStep.value = steps[currentIndex - 1]
    }
  }

  const next = () => {
    const currentIndex = steps.findIndex(lookupCurrentStep)
    if (currentIndex < steps.length - 1) {
      currentStep.value = steps[currentIndex + 1]
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
