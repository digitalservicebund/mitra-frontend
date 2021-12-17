<script setup lang="ts">
  import { ref } from "vue"
  import Menu from "primevue/menu"
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
        icon: "pi pi-angle-left",
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
  <Menu :model="menuItems" class="w-70" />
</template>

<style>
  .p-menu .p-menuitem-link .p-menuitem-icon:not(.pi):empty {
    display: none;
  }
</style>
