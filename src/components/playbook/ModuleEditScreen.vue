<script setup lang="ts">
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
  import SideMenu from "../SideMenu.vue"

  const props = defineProps<{ playbookId: string; moduleId: string }>()
  const router = useRouter()

  const playbookRepository: PlaybookRepository = makePlaybookRepository()
  const playbook: Playbook = playbookRepository.findById(props.playbookId)
  const storage: Storage<Playbook, File> = makePlaybookStorageService()

  const module = playbook.findModuleById(props.moduleId)

  const handleSave = () => {
    storage.save(playbook)
  }

  const handleNavigate = async (module: Module) => {
    await router.push(
      `/mitra-frontend/playbook/${playbook.id}/module/${module.id}`
    )
  }
</script>

<template>
  <div class="flex h-full">
    <nav class="flex-none">
      <SideMenu
        :title="playbook.title"
        :navigatable="playbook"
        @save="handleSave"
        @navigate="handleNavigate"
      />
    </nav>
    <main>
      <header class="edit">
        <Breadcrumb :items="[playbook, module]" />
        <h1>{{ module.title }}</h1>
      </header>
      <section class="mt-16">
        <h2 class="font-bold text-lg">Fragen</h2>
        <ol>
          <li
            v-for="step in module.steps"
            :key="step.id"
            class="mt-4 border p-4 shadow-md"
          >
            <details open>
              <summary class="text-lg">{{ step.text }}</summary>
              <p>Typ: {{ step.type }}</p>
            </details>
          </li>
        </ol>
      </section>
    </main>
  </div>
</template>
