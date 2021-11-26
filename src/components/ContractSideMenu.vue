<script setup lang="ts">
  import { ref, onMounted } from "vue"
  import type { RouteRecordName } from "vue-router"
  import PanelMenu from "primevue/panelmenu"
  import Module from "../domain/Module"

  const props = defineProps<{ modules: Module[] }>()
  const emit = defineEmits<{
    (e: "save"): void
  }>()

  type MenuItem = {
    label: string
    to?: { name: RouteRecordName }
    icon?: string
    command?: () => void
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
        icon: "pi pi-fw pi-download",
        command: () => emit("save"),
      },
    ]
  }

  const menuItems = ref(generateMenuItems(props.modules))

  // temporary accessibility fix for same IDs in PrimeVue's PanelMenu component
  onMounted(() => {
    const panels = document.querySelectorAll(".p-panelmenu-panel")
    panels.forEach((panel, index) => {
      const content = panel.querySelector(".p-toggleable-content")
      content?.id && (content.id += `_${index + 1}`)

      const header = panel.querySelector(".p-panelmenu-header-link")
      if (header?.id) {
        header.id += `_${index + 1}`
        content?.setAttribute("aria-labelledby", header.id)
      } else {
        content?.removeAttribute("aria-labelledby")
      }
    })
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
