<script setup lang="ts">
  import Button from "primevue/button"
  import ContextMenu from "primevue/contextmenu"
  import Inplace from "primevue/inplace"
  import InputText from "primevue/inputtext"
  import { ref } from "vue"
  import { Answer } from "../../domain/Answer"
  import { Step } from "../../domain/Step"

  const props = defineProps<{ step: Step<Answer> }>()
  const emit = defineEmits<{
    (e: "addStep"): void
    (e: "duplicateStep"): void
    (e: "deleteStep"): void
    (e: "updateStep", updatedStep: Step<Answer>): void
  }>()

  const editableTitle = ref(props.step.text)
  const editTitle = ref<InstanceType<typeof Inplace>>()

  const updateTitle = () => {
    const updatedStep: Step<Answer> = props.step
    updatedStep.text = editableTitle.value
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ;(editTitle.value as any).close()
    emit("updateStep", updatedStep)
  }

  const menu = ref()
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
    menu.value.show(event)
  }
</script>

<template>
  <details open>
    <summary class="text-lg relative">
      <header class="edit">
        <Inplace ref="editTitle" :closable="false">
          <template #display>
            <h2 class="block text-lg">{{ editableTitle }}</h2>
          </template>
          <template #content>
            <InputText
              v-model="editableTitle"
              v-focus
              class="text-lg"
              aria-label="Titel ändern"
              @keyup.enter="updateTitle"
              @blur="updateTitle"
            />
          </template>
        </Inplace>
        <div class="text-slate-400 ml-3">Erklärungstext (optional)</div>
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
