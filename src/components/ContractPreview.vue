<script setup lang="ts">
  import { ref } from "vue"
  import Contract from "../domain/Contract"
  import {
    Step,
    Answer,
    TextAnswerStep,
    RichTextAnswerStep,
    SingleChoiceAnswerStep,
    MultipleChoiceAnswerStep,
  } from "../domain/Step"
  import MultipleChoiceAnswerPreview from "./MultipleChoiceAnswerPreview.vue"
  import RichTextAnswerPreview from "./RichTextAnswerPreview.vue"
  import SingleChoiceAnswerPreview from "./SingleChoiceAnswerPreview.vue"
  import TextAnswerPreview from "./TextAnswerPreview.vue"

  const props = defineProps<{ contract: Contract }>()

  const modules = ref(props.contract.modules)

  const stepAnswerPreviewComponent = (step: Step<Answer>) => {
    if (step.type === TextAnswerStep.TYPE) {
      return TextAnswerPreview
    }
    if (step.type === RichTextAnswerStep.TYPE) {
      return RichTextAnswerPreview
    }
    if (step.type === SingleChoiceAnswerStep.TYPE) {
      return SingleChoiceAnswerPreview
    }
    if (step.type === MultipleChoiceAnswerStep.TYPE) {
      return MultipleChoiceAnswerPreview
    }
    console.error("Step type unknown, cannot render preview component", step)
    throw new Error("Step type unknown")
  }
</script>

<template>
  <section>
    <h3 class="p-2 font-bold bg-white">Vorschau Vertragstext</h3>
    <article v-for="module in modules" :key="module.id" class="p-2">
      <h4 class="font-bold">{{ module.text }}</h4>
      <div v-for="step in module.path" :key="step.id" class="mt-2">
        <component :is="stepAnswerPreviewComponent(step)" :step="step" />
      </div>
    </article>
  </section>
</template>
