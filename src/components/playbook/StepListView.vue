<script setup lang="ts">
  import Button from "primevue/button"
  import ContextMenu from "primevue/contextmenu"
  import { ref } from "vue"
  import { Answer } from "../../domain/Answer"
  import { Step } from "../../domain/Step"

  defineProps<{ step: Step<Answer> }>()
  const emit = defineEmits<{
    (e: "addStep"): void
    (e: "deleteStep"): void
  }>()

  const menu = ref()
  const items = [
    {
      label: "Neue Frage",
      command: () => emit("addStep"),
    },
    {
      label: "Frage duplizieren",
    },
    {
      label: "Frage löschen",
      command: () => emit("deleteStep"),
    },
  ]

  const openMenu = (event: Event) => {
    console.log(menu.value)
    menu.value.show(event)
  }
</script>

<template>
  <details open>
    <summary class="text-lg relative">
      <h3>{{ step.text }}</h3>
      <span class="text-slate-400">Erklärungstext (optional)</span>
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
    </summary>
  </details>
</template>
