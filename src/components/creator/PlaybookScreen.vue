<script setup lang="ts">
  import Playbook from "../../domain/Playbook"
  import PlaybookRepository from "../../domain/PlaybookRepository"
  // import Storage from "../../domain/Storage"
  import { makePlaybookRepository } from "../../provide"

  const props = defineProps<{ id: string }>()

  // const storage: Storage<Playbook, File> = makePlaybookStorageService()
  const playbookRepository: PlaybookRepository = makePlaybookRepository()
  const playbook: Playbook = playbookRepository.findById(props.id)
</script>

<template>
  <main id="playbook-screen" class="flex h-full">
    <ul>
      <li v-for="module in playbook.modules" :key="module.text">
        {{ module.text }}
      </li>
    </ul>
  </main>
</template>
