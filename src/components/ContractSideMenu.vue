<script setup lang="ts">
  import { ref, onMounted } from "vue"
  import type { RouteRecordName } from "vue-router"
  import PanelMenu from "primevue/panelmenu"
  import Module from "../domain/Module"

  const props = defineProps<{ modules: Module[] }>()

  type MenuItem = {
    label: string
    to?: { name: RouteRecordName }
    icon?: string
    items?: MenuItem[]
  }

  const generateMenuItems = (modules: Module[]): MenuItem[] => {
    return [
      {
        label: "Startseite",
        to: { name: "mitra-frontend" },
      },
      {
        label: "Module",
        items: modules.map((module, index) => {
          return {
            label: `${index + 1}. ${module.text}`,
            to: { name: "mitra-frontend" },
          }
        }),
      },
      {
        label: "Fragenübersicht",
        to: { name: "mitra-frontend" },
      },
      {
        label: "TO-DOs",
        to: { name: "mitra-frontend" },
      },
      {
        label: "Notizen",
        to: { name: "mitra-frontend" },
      },
      {
        label: "Speichern",
        to: { name: "mitra-frontend" },
        icon: "pi pi-fw pi-download",
      },
    ]
  }

  const menuItems = ref(generateMenuItems(props.modules))

  // temporary accessibility fix for same IDs in PrimeVue's PanelMenu component
  onMounted(() => {
    const createdItems = document.querySelectorAll(".p-toggleable-content")
    createdItems.forEach(
      (item, index) => item.id && (item.id += `_${index + 1}`)
    )
  })
</script>

<template>
  <nav>
    <PanelMenu :model="menuItems" class="w-70" />
  </nav>
</template>

<style>
  .p-panelmenu {
    width: 15em;
  }
</style>
