<script setup lang="ts">
  import { onBeforeMount, onBeforeUpdate, ref, computed } from "vue"
  import Contract from "../domain/Contract"
  import { InformationalStep, TextAnswerStep } from "../domain/Step"
  import InformationalStepComponent from "./InformationalStep.vue"
  import TextAnswerStepComponent from "./TextAnswerStep.vue"
  import Button from "primevue/button"

  const props = defineProps<{ contract: Contract }>()

  const currentStepId = ref(props.contract.currentStepId)
  const currentModule = ref()
  const currentStep = ref()
  const answer = ref("")

  const currentStepComponent = computed(() => {
    const type = currentStep.value.constructor.TYPE
    if (type === TextAnswerStep.TYPE) {
      return TextAnswerStepComponent
    }
    if (type === InformationalStep.TYPE) {
      return InformationalStepComponent
    }
    return null // unknown type, don't render anything
  })

  const prev = () => {
    props.contract.updateCurrentStepAnswer(answer.value)
    props.contract.prevStep()
    currentStepId.value = props.contract.currentStepId
    answer.value = props.contract.getCurrentStepAnswer() || ""
  }

  const next = () => {
    props.contract.updateCurrentStepAnswer(answer.value)
    props.contract.nextStep()
    currentStepId.value = props.contract.currentStepId
    answer.value = props.contract.getCurrentStepAnswer() || ""
  }

  const updateRefs = () => {
    currentModule.value = props.contract.getCurrentModule()
    currentStep.value = props.contract.getCurrentStep()
  }

  onBeforeMount(updateRefs)
  onBeforeUpdate(updateRefs)
</script>

<template>
  <section :key="currentStepId">
    <h3>
      {{ currentModule?.text }}
    </h3>
    <div class="contract-step">
      <component
        :is="currentStepComponent"
        :answer="answer"
        :text="currentStep.text"
        @answer-changed="answer = $event"
      />
      <div class="step-navigation">
        <Button
          v-if="props.contract.hasPrev()"
          label="Zurück"
          class="p-button-outlined prev-button"
          @click="prev"
        />
        <Button
          v-if="props.contract.hasNext()"
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
