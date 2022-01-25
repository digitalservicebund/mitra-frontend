<script setup lang="ts">
  import Breadcrumb from "primevue/breadcrumb"
  import Inplace from "primevue/inplace"
  import InputText from "primevue/inputtext"
  import type { MenuItem } from "primevue/menuitem"
  import { Ref, ref } from "vue"
  import Playbook from "../../domain/Playbook"
  import PlaybookRepository from "../../domain/PlaybookRepository"
  import { Answer, Step } from "../../domain/Step"
  import Storage from "../../domain/Storage"
  import {
    makePlaybookRepository,
    makePlaybookStorageService,
  } from "../../provide"
  import { useSession } from "../../session"
  import PlaybookSideMenu from "./PlaybookSideMenu.vue"

  const props = defineProps<{ id: string }>()

  const session = useSession()

  const storage: Storage<Playbook, File> = makePlaybookStorageService()
  const playbookRepository: PlaybookRepository = makePlaybookRepository()
  const playbook: Playbook = playbookRepository.findById(props.id)

  const editableTitle = ref(playbook.title)
  const edittitle = ref()

  const breadcrumbTopLevel: MenuItem = {
    to: "/mitra-frontend/",
    label: "Startseite",
  }
  const breadcrumbItems: Ref<MenuItem[]> = ref([
    {
      label: editableTitle.value,
      disabled: true,
    },
  ])

  const updateTitle = () => {
    playbook.title = editableTitle.value
    edittitle.value.close()
  }

  const handleSave = () => {
    storage.save(playbook)
  }

  const handleNavigate = (step: Step<Answer>) => {
    session.rememberCurrentStep(playbook, step)
  }
</script>

<template>
  <header>
    <Breadcrumb :home="breadcrumbTopLevel" :model="breadcrumbItems" />
    <Inplace ref="edittitle" :closable="true">
      <template #display>
        <h1 class="font-bold text-xl">{{ editableTitle }}</h1>
      </template>
      <template #content>
        <InputText v-model="editableTitle" @keyup.enter="updateTitle" />
      </template>
    </Inplace>
  </header>
  <div class="flex h-full">
    <nav class="flex-none">
      <PlaybookSideMenu
        :playbook="playbook"
        @save="handleSave"
        @navigate="handleNavigate"
      />
    </nav>
    <main class="flex-1 p-8">
      <section>
        <h2 class="font-bold text-lg">Module</h2>
        <ol>
          <li
            v-for="module in playbook.modules"
            :key="module.id"
            class="mt-4 border p-4 shadow-md"
          >
            <details open>
              <summary class="text-lg">{{ module.text }}</summary>
              <p>{{ module.steps.length }} Fragen</p>
            </details>
          </li>
        </ol>
      </section>
    </main>
  </div>
</template>

<style scoped>
  .p-inplace-display h1 {
    display: inherit;
  }
  header {
    height: 100px;
  }
</style>
