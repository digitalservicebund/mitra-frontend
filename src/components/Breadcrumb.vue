<script setup lang="ts">
  import PrimeBreadcrumb from "primevue/breadcrumb"
  import type { MenuItem } from "primevue/menuitem"
  import { computed } from "vue"
  import Module from "../domain/Module"
  import Playbook from "../domain/Playbook"
  import { useSession } from "../session"

  const session = useSession()
  const props = defineProps<{ items: (Module | Playbook)[] }>()

  const breadcrumbTopLevel: MenuItem = {
    to: `/mitra-frontend/${session.entryPoint}`,
    label: "Startseite",
  }

  const breadcrumbItems = computed(() => {
    return props.items.map((item, i) => {
      if (item instanceof Playbook) {
        return {
          label: item.title,
          disabled: i + 1 < props.items.length ? false : true,
          to: `/mitra-frontend/playbook/${item.id}`,
        }
      } else if (item instanceof Module) {
        return {
          label: item.title,
          disabled: i + 1 < props.items.length ? false : true,
          to: `/mitra-frontend/playbook/${props.items[i - 1].id}/module/${
            item.id
          }`,
        }
      }
    })
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
          :href="href"
          :class="{
            'active-link': isActive,
          }"
          @click="navigate"
        >
          {{ item.label }}
        </a>
      </router-link>
    </template>
  </PrimeBreadcrumb>
</template>
