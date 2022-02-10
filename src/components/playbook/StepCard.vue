<script setup lang="ts">
  import Button from "primevue/button"
  import ContextMenu from "primevue/contextmenu"
  import { ref, Ref } from "vue"
  import { Answer } from "../../domain/Answer"
  import { Step } from "../../domain/Step"
  import InplaceEditable from "../InplaceEditable.vue"

  const props = defineProps<{ step: Step<Answer> }>()
  const emit = defineEmits<{
    (e: "addStep"): void
    (e: "duplicateStep"): void
    (e: "deleteStep"): void
    (e: "updateStep", updatedStep: Step<Answer>): void
  }>()

  const menu = ref<InstanceType<typeof ContextMenu>>()
  const items = [
    {
      label: "Neue Frage",
      command: () => emit("addStep"),
    },
    {
      label: "Frage duplizieren",
      command: () => emit("duplicateStep"),
    },
    {
      label: "Frage löschen",
      command: () => emit("deleteStep"),
    },
  ]
  const openMenu = (event: Event) => {
    ;(menu as Ref<ContextMenu>).value.show(event)
  }

  const handleUpdateTitle = (newTitle: string) => {
    const updatedStep: Step<Answer> = props.step
    updatedStep.prompt = newTitle
    emit("updateStep", updatedStep)
  }
  const handleUpdateDescription = (newDescription: string) => {
    const updatedStep: Step<Answer> = props.step
    updatedStep.description = newDescription
    emit("updateStep", updatedStep)
  }
</script>

<template>
  <details open>
    <summary class="text-lg relative">
      <header class="edit">
        <InplaceEditable :editable="step.prompt" @update="handleUpdateTitle" />
        <div></div>
        <InplaceEditable
          :editable="step.description"
          placeholder="Erklärungstext (optional)"
          @update="handleUpdateDescription"
        />
        <Button
          type="button"
          class="absolute top-0 right-0"
          aria-label="menu"
          aria-haspopup="menu"
          @contextmenu="openMenu"
          @click="openMenu"
          @keypress.m="openMenu"
        >
          <span class="material-icons-outlined text-base" aria-hidden="true">
            more_vert
          </span>
        </Button>
        <ContextMenu ref="menu" :model="items" />
      </header>
    </summary>
  </details>
</template>
