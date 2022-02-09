<script setup lang="ts">
  import type { MenuItem } from "primevue/menuitem"
  import PanelMenu from "primevue/panelmenu"
  import { computed, shallowRef } from "vue"
  import Contract from "../domain/Contract"
  import Module from "../domain/Module"
  import Playbook from "../domain/Playbook"
  import { useSession } from "../session"

  const props =
    defineProps<{ title: string; navigatable: Contract | Playbook }>()
  const emit = defineEmits<{
    (e: "save"): void
    (e: "navigate", module: Module): void
  }>()

  const session = useSession()

  const navigatablePathSegment = () => {
    const [, segment] = location.pathname.match(/\/(playbook|contract)\//) || []
    return segment
  }

  const withHighlight = (item: MenuItem, module: Module) => {
    return module.path.find((step) => step.equals(session.lastEditedStep))
      ? { ...item, style: "font-weight:bold" }
      : item
  }

  const modules = shallowRef(props.navigatable.modules)
  const menuItems = computed(() => [
    {
      label: "Startseite",
      icon: "pi pi-angle-left",
      to: `/mitra-frontend/${session.entryPoint}`,
    },
    {
      key: "1",
      label: props.title,
      icon: "pi pi-angle-down",
      to: `/mitra-frontend/${navigatablePathSegment()}/${props.navigatable.id}`,
      items: modules.value.map((module) =>
        withHighlight(
          {
            label: module.title,
            command: () => emit("navigate", module),
          },
          module
        )
      ),
    },
    {
      label: "Speichern",
      icon: "pi pi-download",
      command: () => emit("save"),
    },
  ])
</script>

<template>
  <PanelMenu :model="menuItems" :expanded-keys="{ '1': true }" class="w-64" />
</template>
