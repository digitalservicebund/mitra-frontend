<script setup lang="ts">
  import Button from "primevue/button"
  import ContextMenu from "primevue/contextmenu"
  import Dropdown, { DropdownChangeEvent } from "primevue/dropdown"
  import { ref, Ref } from "vue"
  import { Answer } from "../../domain/Answer"
  import { Step, TextAnswerStep, RichTextAnswerStep } from "../../domain/Step"
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

  const dropdownTypes = [TextAnswerStep, RichTextAnswerStep].map((step) => {
    return {
      modelValue: step.TYPE,
      name: step.LABEL,
    }
  })
  const selectedType = ref(
    dropdownTypes.find((type) => type.modelValue === props.step.type)
  )
  const handleUpdateType = (e: Event) => {
    emit(
      "updateStep",
      (() => {
        const newType = (e as unknown as DropdownChangeEvent).value.modelValue
        if (newType === RichTextAnswerStep.TYPE) {
          return new RichTextAnswerStep(props.step.prompt, {
            description: props.step.description,
            id: props.step.id,
          })
        }
        if (newType === TextAnswerStep.TYPE) {
          return new TextAnswerStep(props.step.prompt, {
            description: props.step.description,
            id: props.step.id,
          })
        }
        throw new Error("Unknown step type")
      })()
    )
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
  <details closed @keyup.prevent>
    <summary class="text-lg relative">
      <header class="edit">
        <InplaceEditable :editable="step.prompt" @update="handleUpdateTitle" />
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
    <div class="relative edit">
      <div class="mb-2">
        <InplaceEditable
          :editable="step.description"
          placeholder="Erklärungstext (optional)"
          @update="handleUpdateDescription"
        />
      </div>
      <div>
        <Dropdown
          v-model="selectedType"
          :options="dropdownTypes"
          option-label="name"
          aria-label="Fragentyp"
          placeholder="Fragentyp auswählen"
          @change="handleUpdateType"
        />
      </div>
    </div>
  </details>
</template>
