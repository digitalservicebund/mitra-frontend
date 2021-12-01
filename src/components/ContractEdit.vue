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

  const currentStep = ref(props.contract.getFirstUnansweredStep())

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

  const steps: Step<StepType>[] = props.contract.getAllSteps()

  const lookupCurrentStep = (step: Step<StepType>) =>
    step.id === currentStep.value?.id

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

  const hasPreviousStep = computed(() => steps.findIndex(lookupCurrentStep) > 0)

  const hasNextStep = computed(
    () => steps.findIndex(lookupCurrentStep) < steps.length - 1
  )

  const currentModule = computed(() => {
    return props.contract.getModuleFor(currentStep.value as Step<StepType>)
  })
</script>

<template>
  <section :key="currentStep?.id">
    <h3>
      {{ currentModule?.text }}
    </h3>
    <div class="contract-step">
      <component
        :is="currentStepComponent"
        :step="currentStep"
        @answer-changed="currentStep?.setAnswer($event)"
      />
      <div class="step-navigation">
        <Button
          v-if="hasPreviousStep"
          label="Zurück"
          class="p-button-outlined prev-button"
          @click="previous"
        />
        <Button
          v-if="hasNextStep"
          label="Weiter"
          class="p-button-outlined next-button"
          @click="next"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
  h3 {
    font-weight: bold;
  }

  .contract-step {
    width: 30vw;
  }

  .step-navigation {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .step-navigation Button {
    min-width: 8vw;
  }

  .step-navigation .prev-button {
    grid-column: 1;
  }

  .step-navigation .next-button {
    grid-column: 3;
  }
</style>
