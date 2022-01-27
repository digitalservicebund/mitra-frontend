<script setup lang="ts">
  import Breadcrumb from "primevue/breadcrumb"
  import Button from "primevue/button"
  import Inplace from "primevue/inplace"
  import InputText from "primevue/inputtext"
  import type { MenuItem } from "primevue/menuitem"
  import { computed, ref } from "vue"
  import Playbook from "../../domain/Playbook"
  import PlaybookRepository from "../../domain/PlaybookRepository"
  import { Answer, Step } from "../../domain/Step"
  import Storage from "../../domain/Storage"
  import {
    makePlaybookRepository,
    makePlaybookStorageService,
  } from "../../provide"
  import { useSession } from "../../session"
  import SideMenu from "../SideMenu.vue"

  const props = defineProps<{ id: string }>()

  const session = useSession()

  const storage: Storage<Playbook, File> = makePlaybookStorageService()
  const playbookRepository: PlaybookRepository = makePlaybookRepository()
  const playbook: Playbook = playbookRepository.findById(props.id)
  const breadcrumbTopLevel: MenuItem = {
    to: `/mitra-frontend/${session.entryPoint}`,
    label: "Startseite",
  }

  const editableTitle = ref(playbook.title)
  const editTitle = ref()
  const breadcrumbItems = computed(() => [
    {
      label: editableTitle.value,
      disabled: true,
    },
  ])

  const startTitleEditing = () => {
    editTitle.value.open()
  }

  const updateTitle = () => {
    playbook.title = editableTitle.value
    editTitle.value.close()
  }

  const handleSave = () => {
    storage.save(playbook)
  }

  const handleNavigate = (step: Step<Answer>) => {
    session.rememberCurrentStep(playbook, step)
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
        <Breadcrumb
          :home="breadcrumbTopLevel"
          :model="breadcrumbItems"
          class="mb-4"
        />
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
                <summary class="text-lg">{{ module.text }}</summary>
                <p>{{ module.steps.length }} Fragen</p>
              </details>
            </li>
          </router-link>
        </ol>
      </section>
    </main>
  </div>
</template>
