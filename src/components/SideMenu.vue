<script setup lang="ts">
  import type { MenuItem } from "primevue/menuitem"
  import PanelMenu from "primevue/panelmenu"
  import { ref } from "vue"
  import Contract from "../domain/Contract"
  import Module from "../domain/Module"
  import Playbook from "../domain/Playbook"
  import { Answer, Step } from "../domain/Step"
  import { useSession } from "../session"

  const props = defineProps<{ navigatable: Contract | Playbook }>()
  const emit = defineEmits<{
    (e: "save"): void
    (e: "navigate", step: Step<Answer>): void
  }>()

  const session = useSession()

  const navigatablePathSegment = () => {
    const [, segment] = location.pathname.match(/\/(playbook|contract)\//) || []
    return segment
  }

  const withHighlight = (item: MenuItem, module: Module) => {
    return module.path.find((step) =>
      step.equals(session.cache.get(props.navigatable.id))
    )
      ? { ...item, style: "font-weight:bold" }
      : item
  }

  const generateMenuItems = (modules: Module[]): MenuItem[] => {
    return [
      {
        label: "Startseite",
        icon: "pi pi-angle-left",
        to: `/mitra-frontend/${session.entryPoint}`,
      },
      {
        key: "1",
        label: props.navigatable.title,
        to: `/mitra-frontend/${navigatablePathSegment()}/${
          props.navigatable.id
        }`,
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
    menuItems.value = generateMenuItems(props.navigatable.modules)
  })

  const menuItems = ref(generateMenuItems(props.navigatable.modules))
</script>

<template>
  <PanelMenu :model="menuItems" :expanded-keys="{ '1': true }" class="w-64" />
</template>

<style>
  .p-menu .p-menuitem-link .p-menuitem-icon:not(.pi):empty {
    display: none;
  }
</style>
