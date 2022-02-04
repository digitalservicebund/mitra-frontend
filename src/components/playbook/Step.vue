<script setup lang="ts">
  import Button from "primevue/button"
  import ContextMenu from "primevue/contextmenu"
  import { ref } from "vue"
  import { Answer } from "../../domain/Answer"
  import { Step } from "../../domain/Step"

  defineProps<{ step: Step<Answer> }>()

  const menu = ref()
  const items = [
    {
      label: "Neue Frage",
    },
    {
      label: "Frage duplizieren",
    },
    {
      label: "Frage löschen",
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
      {{ step.text }}
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
    <p>Typ: {{ step.type }}</p>
  </details>
</template>
