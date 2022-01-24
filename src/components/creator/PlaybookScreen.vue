<script setup lang="ts">
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

  const handleSave = () => {
    storage.save(playbook)
  }

  const handleNavigate = (step: Step<Answer>) => {
    session.rememberCurrentStep(playbook, step)
  }
</script>

<template>
  <header>
    <h1>{{ playbook.title || "Unbenanntes Playbook" }}</h1>
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
        <ol>
          <li v-for="module in playbook.modules" :key="module.id">
            {{ module.text }}
          </li>
        </ol>
      </section>
    </main>
  </div>
</template>
