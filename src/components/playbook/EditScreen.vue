<script setup lang="ts">
  import Button from "primevue/button"
  import { ref } from "vue"
  import { useRouter } from "vue-router"
  import Module from "../../domain/Module"
  import Playbook from "../../domain/Playbook"
  import PlaybookRepository from "../../domain/PlaybookRepository"
  import Storage from "../../domain/Storage"
  import {
    makePlaybookRepository,
    makePlaybookStorageService,
  } from "../../provide"
  import Breadcrumb from "../Breadcrumb.vue"
  import InplaceEditable from "../InplaceEditable.vue"
  import Metadata from "../Metadata.vue"
  import SideMenu from "../SideMenu.vue"

  const props = defineProps<{ id: string }>()

  const router = useRouter()

  const storage: Storage<Playbook, File> = makePlaybookStorageService()
  const playbookRepository: PlaybookRepository = makePlaybookRepository()
  const playbook = ref(playbookRepository.findById(props.id))

  const handleUpdateTitle = (newTitle: string) => {
    playbook.value.title = newTitle
    playbookRepository.save(playbook.value as Playbook)
  }

  const handleSave = () => {
    storage.save(playbook.value as Playbook)
  }

  const handleNavigate = async (module: Module) => {
    await router.push(
      `/mitra-frontend/playbook/${playbook.value.id}/module/${module.id}`
    )
  }

  const addNewModule = async () => {
    const module = new Module()
    playbook.value.addModules(module)
    playbookRepository.save(playbook.value as Playbook)
    await router.push(
      `/mitra-frontend/playbook/${playbook.value.id}/module/${module.id}`
    )
  }
</script>

<template>
  <div class="flex h-full">
    <nav class="flex-none">
      <SideMenu
        :title="playbook.title"
        :navigatable="(playbook as Playbook)"
        @save="handleSave"
        @navigate="handleNavigate"
      />
    </nav>

    <main class="flex-1 px-8">
      <header class="edit">
        <Breadcrumb :current-title="playbook.title" :parent-items="[]" />
        <p><small>Playbook</small></p>
        <InplaceEditable
          :editable="playbook.title"
          button
          h1
          @update="handleUpdateTitle"
        />
        <Metadata v-bind="playbook.metadata" />
      </header>
      <section class="mt-16">
        <h2 class="font-bold text-lg">Module</h2>
        <ol>
          <router-link
            v-for="module in playbook.modules"
            :key="module.id"
            :to="`/mitra-frontend/playbook/${playbook.id}/module/${module.id}`"
            class="block"
          >
            <li class="mt-4 border p-4 shadow-md">
              <details open>
                <summary class="text-lg">{{ module.title }}</summary>
                <p>{{ module.steps.length }} Fragen</p>
              </details>
            </li>
          </router-link>
        </ol>
        <Button type="button" class="mt-8" @click="addNewModule">
          <span class="material-icons-outlined text-base" aria-hidden="true">
            add
          </span>
          Neues Modul
        </Button>
      </section>
    </main>
  </div>
</template>
