<script setup lang="ts">
  import Button from "primevue/button"
  import Inplace from "primevue/inplace"
  import InputText from "primevue/inputtext"
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
  import Metadata from "../Metadata.vue"
  import SideMenu from "../SideMenu.vue"

  const props = defineProps<{ id: string }>()

  const router = useRouter()

  const storage: Storage<Playbook, File> = makePlaybookStorageService()
  const playbookRepository: PlaybookRepository = makePlaybookRepository()
  const playbook: Playbook = playbookRepository.findById(props.id)

  const editableTitle = ref(playbook.title)
  const editTitle = ref<InstanceType<typeof Inplace>>()

  const startTitleEditing = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ;(editTitle.value as any).open()
  }

  const updateTitle = () => {
    playbook.title = editableTitle.value
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ;(editTitle.value as any).close()
  }

  const handleSave = () => {
    storage.save(playbook)
  }

  const handleNavigate = async (module: Module) => {
    await router.push(
      `/mitra-frontend/playbook/${playbook.id}/module/${module.id}`
    )
  }

  const addNewModule = async () => {
    const module = new Module("Unbenanntes Modul")
    playbook.addModules(module)
    playbookRepository.save(playbook)
    await router.push(
      `/mitra-frontend/playbook/${playbook.id}/module/${module.id}`
    )
  }
</script>

<template>
  <div class="flex h-full">
    <nav class="flex-none">
      <SideMenu
        :title="editableTitle"
        :navigatable="playbook"
        @save="handleSave"
        @navigate="handleNavigate"
      />
    </nav>

    <main class="flex-1 px-8">
      <header class="edit">
        <Breadcrumb :items="[playbook]" />
        <p><small>Playbook</small></p>
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
