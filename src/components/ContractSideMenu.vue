<script setup lang="ts">
  import { ref, defineProps } from "vue"
  import { Module } from "../domain/Playbook"
  import PanelMenu from "primevue/panelmenu"

  const props = defineProps<{ modules: Module[] }>()

  type MenuItem = {
    label: string
    icon?: string
    url?: string
    command?: () => void
    items?: MenuItem[]
  }

  const generateMenuItems = (modules: Module[]): MenuItem[] => {
    return [
      {
        label: "Startseite",
        url: "/",
      },
      {
        label: "Module",
        items: modules.map((module, index) => {
          return { label: `${index + 1}. ${module.text}`, url: "#" }
        }),
      },
      {
        label: "Fragenübersicht",
        url: "#",
      },
      {
        label: "TO-DOs",
        url: "#",
      },
      {
        label: "Notizen",
        url: "#",
      },
      {
        label: "Speichern",
        icon: "pi pi-fw pi-download",
        url: "#",
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
