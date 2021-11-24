<script setup lang="ts">
  import { ref, defineProps } from "vue"
  import type { RouteRecordName } from "vue-router"
  import { Module } from "../domain/Playbook"
  import PanelMenu from "primevue/panelmenu"

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
