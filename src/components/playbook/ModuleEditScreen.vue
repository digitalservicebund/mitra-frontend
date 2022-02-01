<script setup lang="ts">
  import Button from "primevue/button"
  import Inplace from "primevue/inplace"
  import InputText from "primevue/inputtext"
  import { ref, Ref } from "vue"
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
  const storage: Storage<Playbook, File> = makePlaybookStorageService()

  let playbook: Ref<Playbook> = ref(
    playbookRepository.findById(props.playbookId)
  )
  let module = ref(playbook.value.findModuleById(props.moduleId))

  const editableTitle = ref(module.value.title)
  const editTitle = ref<InstanceType<typeof Inplace>>()

  const startTitleEditing = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ;(editTitle.value as any).open()
  }

  const updateTitle = () => {
    module.value.title = editableTitle.value
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ;(editTitle.value as any).close()
    playbookRepository.save(playbook.value)
  }

  const handleSave = () => {
    storage.save(playbook.value)
  }

  const handleNavigate = async (module: Module) => {
    await router.push({
      path: `/mitra-frontend/playbook/${playbook.value.id}/module/${module.id}/`,
    })
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

    <main class="flex-1 px-8">
      <header class="edit">
        <Breadcrumb :current-title="editableTitle" :parent-items="[playbook]" />
        <p><small>Modul</small></p>
        <Inplace ref="editTitle" :closable="false">
          <template #display>
            <h1 class="font-bold text-xl">{{ editableTitle }}</h1>
          </template>
          <template #content>
            <InputText
              v-model="editableTitle"
              v-focus
              class="mr-1"
              @keyup.enter="updateTitle"
              @blur="updateTitle"
            />
          </template>
        </Inplace>
        <Button type="button" @click="startTitleEditing">
          <span class="material-icons-outlined text-base" aria-hidden="true">
            edit
          </span>
          Ändern
        </Button>
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
