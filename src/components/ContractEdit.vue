<script setup lang="ts">
  import { onBeforeMount, onBeforeUpdate, ref } from "vue"
  import Contract from "../domain/Contract"
  import Button from "primevue/button"
  import InputText from "primevue/inputtext"

  const props = defineProps<{ contract: Contract }>()

  const currentStepId = ref(props.contract.currentStepId)
  const currentModule = ref()
  const currentStep = ref()
  const answer = ref()

  const prev = () => {
    props.contract.updateCurrentStepAnswer(answer.value)
    props.contract.prevStep()
    currentStepId.value = props.contract.currentStepId
    answer.value = props.contract.getCurrentStepAnswer()
  }

  const next = () => {
    props.contract.updateCurrentStepAnswer(answer.value)
    props.contract.nextStep()
    currentStepId.value = props.contract.currentStepId
    answer.value = props.contract.getCurrentStepAnswer()
  }

  function updateRefs() {
    return () => {
      currentModule.value = props.contract.getCurrentModule()
      currentStep.value = props.contract.getCurrentStep()
    }
  }

  onBeforeMount(updateRefs())
  onBeforeUpdate(updateRefs())
</script>

<template>
  <section :key="currentStepId">
    <h3>
      {{ currentModule?.text }}
    </h3>
    <div class="contract-step">
      <div class="question-block">
        {{ currentStep?.text }}
      </div>
      <div class="answer-block">
        <InputText
          v-model="answer"
          class="answer-input-text"
          :title="currentStep?.text"
          type="text"
        />
      </div>
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

  .contract-step div {
    margin-bottom: 1em;
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

  .answer-input-text {
    width: 100%;
  }
</style>
