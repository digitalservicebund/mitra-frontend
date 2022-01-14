<script setup lang="ts">
  import Button from "primevue/button"
  import { computed, ref } from "vue"
  import Contract from "../domain/Contract"
  import {
    Answer,
    MultipleChoiceAnswerStep,
    RichTextAnswerStep,
    SingleChoiceAnswerStep,
    Step,
    TextAnswerStep,
  } from "../domain/Step"
  import { useSession } from "../session"
  import MultipleChoiceAnswerStepComponent from "./MultipleChoiceAnswerStep.vue"
  import RichTextAnswerStepComponent from "./RichTextAnswerStep.vue"
  import SingleChoiceAnswerStepComponent from "./SingleChoiceAnswerStep.vue"
  import TextAnswerStepComponent from "./TextAnswerStep.vue"

  const props = defineProps<{ contract: Contract }>()

  const session = useSession()

  const currentStep = ref(session.cache.get(props.contract))
  session.$subscribe((mutation, session) => {
    currentStep.value = session.cache.get(props.contract)
  })

  const currentStepComponent = computed(() => {
    const step = currentStep.value as Step<Answer>
    if (step.type === TextAnswerStep.TYPE) {
      return TextAnswerStepComponent
    }
    if (step.type === RichTextAnswerStep.TYPE) {
      return RichTextAnswerStepComponent
    }
    if (step.type === SingleChoiceAnswerStep.TYPE) {
      return SingleChoiceAnswerStepComponent
    }
    if (step.type === MultipleChoiceAnswerStep.TYPE) {
      return MultipleChoiceAnswerStepComponent
    }
    return null // unknown type, don't render anything
  })

  const hasPreviousStep = computed(
    () =>
      props.contract.previousStepInPathAt(currentStep.value as Step<Answer>) !==
      undefined
  )

  const hasNextStep = computed(
    () =>
      props.contract.nextStepInPathAt(currentStep.value as Step<Answer>) !==
      undefined
  )

  const currentModule = computed(() => {
    return props.contract.getModuleFor(currentStep.value as Step<Answer>)
  })

  const previous = () => {
    const step = props.contract.previousStepInPathAt(
      currentStep.value as Step<Answer>
    )
    if (step) {
      currentStep.value = step
      session.rememberCurrentStep(props.contract, step)
    }
  }

  const next = () => {
    const step = props.contract.nextStepInPathAt(
      currentStep.value as Step<Answer>
    )
    if (step) {
      currentStep.value = step
      session.rememberCurrentStep(props.contract, step)
    }
  }
</script>

<template>
  <section :key="currentStep?.id">
    <h3 class="font-bold">
      {{ currentModule?.text }}
    </h3>
    <component :is="currentStepComponent" :step="currentStep" />
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
  </section>
</template>

<style scoped>
  .p-button {
    min-width: 8vw;
  }
</style>
