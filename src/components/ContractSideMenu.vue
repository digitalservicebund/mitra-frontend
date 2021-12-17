<script setup lang="ts">
  import { ref } from "vue"
  import PanelMenu from "primevue/panelmenu"
  import type { MenuItem } from "primevue/menuitem"
  import Module from "../domain/Module"
  import { Answer, Step } from "../domain/Step"

  const props = defineProps<{ modules: Module[] }>()
  const emit = defineEmits<{
    (e: "save"): void
    (e: "navigate", step: Step<Answer>): void
  }>()

  const generateMenuItems = (modules: Module[]): MenuItem[] => {
    return [
      {
        label: "Startseite",
        to: "/mitra-frontend/",
      },
      {
        label: "Module",
        items: modules.map((module, index) => {
          return {
            label: `${index + 1}. ${module.text}`,
            command: () => emit("navigate", module.steps[0]),
          }
        }),
      },
      {
        label: "Speichern",
        icon: "pi pi-fw pi-download",
        command: () => emit("save"),
      },
    ]
  }

  const menuItems = ref(generateMenuItems(props.modules))
</script>

<template>
  <PanelMenu :model="menuItems" class="w-70" />
</template>

<style scoped>
  .p-panelmenu {
    width: 15em;
  }
</style>
