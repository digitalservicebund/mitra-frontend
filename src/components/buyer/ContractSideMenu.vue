<script setup lang="ts">
  import Menu from "primevue/menu"
  import type { MenuItem } from "primevue/menuitem"
  import { ref } from "vue"
  import Contract from "../../domain/Contract"
  import Module from "../../domain/Module"
  import { Answer, Step } from "../../domain/Step"
  import { useSession } from "../../session"

  const props = defineProps<{ contract: Contract }>()
  const emit = defineEmits<{
    (e: "save"): void
    (e: "navigate", step: Step<Answer>): void
  }>()

  const session = useSession()

  const withHighlight = (item: MenuItem, module: Module) => {
    return module.path.find((step) =>
      step.equals(session.cache.get(props.contract))
    )
      ? { ...item, class: "font-bold" }
      : item
  }

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
          return withHighlight(
            {
              label: `${index + 1}. ${module.text}`,
              command: () => emit("navigate", module.path[0]),
            },
            module
          )
        }),
      },
      {
        label: "Speichern",
        icon: "pi pi-fw pi-download",
        command: () => emit("save"),
      },
    ]
  }

  session.$subscribe(() => {
    menuItems.value = generateMenuItems(props.contract.modules)
  })

  const menuItems = ref(generateMenuItems(props.contract.modules))
</script>

<template>
  <Menu :model="menuItems" class="w-70" />
</template>

<style>
  .p-menu .p-menuitem-link .p-menuitem-icon:not(.pi):empty {
    display: none;
  }
</style>
