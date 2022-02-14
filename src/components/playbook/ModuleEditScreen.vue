<script setup lang="ts">
  import Button from "primevue/button"
  import { ref, Ref } from "vue"
  import { useRouter } from "vue-router"
  import { Answer } from "../../domain/Answer"
  import Module from "../../domain/Module"
  import Playbook from "../../domain/Playbook"
  import PlaybookRepository from "../../domain/PlaybookRepository"
  import { Step, TextAnswerStep } from "../../domain/Step"
  import Storage from "../../domain/Storage"
  import {
    makePlaybookRepository,
    makePlaybookStorageService,
  } from "../../provide"
  import Breadcrumb from "../Breadcrumb.vue"
  import InplaceEditable from "../InplaceEditable.vue"
  import SideMenu from "../SideMenu.vue"
  import StepCard from "./StepCard.vue"

  const props = defineProps<{ playbookId: string; moduleId: string }>()
  const router = useRouter()

  const playbookRepository: PlaybookRepository = makePlaybookRepository()
  const storage: Storage<Playbook, File> = makePlaybookStorageService()

  const playbook = ref(
    playbookRepository.findById(props.playbookId)
  ) as Ref<Playbook>
  const module = ref(playbook.value.findModuleById(props.moduleId))

  const handleUpdateTitle = (newTitle: string) => {
    module.value.title = newTitle
    playbookRepository.save(playbook.value)
  }

  const handleSave = () => {
    storage.save(playbook.value)
  }

  const handleNavigate = async (module: Module) => {
    await router.push(
      `/mitra-frontend/playbook/${playbook.value.id}/module/${module.id}/`
    )
  }

  const removeModule = async () => {
    playbook.value.removeModule(module.value)
    playbookRepository.save(playbook.value)
    await router.push(`/mitra-frontend/playbook/${playbook.value.id}/`)
  }

  const addStep = (index?: number): void => {
    index
      ? module.value.addStep(new TextAnswerStep("Neue Frage"), index)
      : module.value.addStep(new TextAnswerStep("Neue Frage"))
    playbookRepository.save(playbook.value)
  }

  const duplicateStep = (step: Step<Answer>): void => {
    module.value.duplicateStep(step)
    playbookRepository.save(playbook.value)
  }

  const deleteStep = (step: Step<Answer>): void => {
    module.value.removeStep(step)
    playbookRepository.save(playbook.value)
  }

  const updateStep = (step: Step<Answer>, updatedStep: Step<Answer>): void => {
    const index: number = module.value.steps.indexOf(step)
    module.value.steps[index] = updatedStep
    playbookRepository.save(playbook.value)
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
        <Breadcrumb :current-title="module.title" :parent-items="[playbook]" />
        <p><small>Modul</small></p>
        <InplaceEditable
          :editable="module.title"
          h1
          button
          @update="handleUpdateTitle"
        />
        <Button
          type="button"
          class="inline-flex align-top"
          @click="removeModule"
        >
          <span class="material-icons-outlined text-base" aria-hidden="true">
            delete
          </span>
          Modul löschen
        </Button>
      </header>
      <section class="mt-16">
        <h2 class="font-bold text-lg">Fragen</h2>
        <p v-if="module.steps.length === 0">
          Für dieses Modul wurden noch keine Fragen erstellt.
        </p>
        <Button
          v-if="module.steps.length === 0"
          type="button"
          class="mt-8"
          @click="addStep()"
        >
          <span class="material-icons-outlined text-base" aria-hidden="true">
            add
          </span>
          Neue Frage
        </Button>
        <ol v-else>
          <li
            v-for="(step, index) in module.steps"
            :key="step.id"
            class="mt-4 border p-4 shadow-md"
          >
            <StepCard
              :step="step"
              @add-step="addStep(index + 1)"
              @delete-step="deleteStep(step)"
              @duplicate-step="duplicateStep(step)"
              @update-step="updateStep(step, $event)"
            />
          </li>
        </ol>
      </section>
    </main>
  </div>
</template>
