<script setup lang="ts">
  import Playbook from "../../domain/Playbook"
  import PlaybookRepository from "../../domain/PlaybookRepository"
  import { makePlaybookRepository } from "../../provide"

  const props = defineProps<{ id: string }>()

  const playbookRepository: PlaybookRepository = makePlaybookRepository()
  const playbook: Playbook = playbookRepository.findById(props.id)
</script>

<template>
  <header>
    <h1>{{ playbook.title }}</h1>
  </header>
  <main>
    <section>
      <ol>
        <li v-for="module in playbook.modules" :key="module.id">
          {{ module.text }}
        </li>
      </ol>
    </section>
  </main>
</template>
