<script setup lang="ts">
  import PrimeBreadcrumb from "primevue/breadcrumb"
  import type { MenuItem } from "primevue/menuitem"
  import { computed } from "vue"
  import Module from "../domain/Module"
  import Playbook from "../domain/Playbook"
  import { useSession } from "../session"

  const session = useSession()
  const props = defineProps<{
    currentTitle: string
    parentItems: (Module | Playbook)[]
  }>()

  const breadcrumbTopLevel: MenuItem = {
    to: `/mitra-frontend/${session.entryPoint}`,
    label: "Startseite",
  }

  const breadcrumbItems = computed(() => {
    const items: MenuItem[] = []
    let tmpRoute = `/mitra-frontend`

    const getRoute = (item: Playbook | Module, tmpRoute: string): string => {
      let route: string = tmpRoute
      if (item instanceof Playbook) {
        route += `/playbook/${item.id}`
      }
      if (item instanceof Module) {
        route += `/module/${item.id}`
      }
      return route
    }

    props.parentItems.map((item) => {
      tmpRoute = getRoute(item, tmpRoute)
      items.push({
        label: item.title,
        disabled: false,
        to: tmpRoute,
      })
    })

    items.push({
      label: props.currentTitle,
      disabled: true,
      to: "",
    })

    return items
  })
</script>

<template>
  <PrimeBreadcrumb
    :home="breadcrumbTopLevel"
    :model="(breadcrumbItems as MenuItem[])"
    class="mb-4"
  >
    <template #item="{ item }">
      <router-link v-slot="{ href, navigate, isActive }" :to="item.to" custom>
        <a
          v-if="item.to"
          :href="href"
          :class="{
            'active-link': isActive,
          }"
          @click="navigate"
        >
          {{ item.label }}
        </a>
        <span v-else>
          {{ item.label }}
        </span>
      </router-link>
    </template>
  </PrimeBreadcrumb>
</template>
