<script setup lang="ts">
  import Playbook from "../../domain/Playbook"
  import PlaybookRepository from "../../domain/PlaybookRepository"
  import { makePlaybookRepository } from "../../provide"

  const props = defineProps<{ playbookId: string; moduleId: string }>()

  const playbookRepository: PlaybookRepository = makePlaybookRepository()
  const playbook: Playbook = playbookRepository.findById(props.playbookId)

  const module = playbook.findModuleById(props.moduleId)
</script>

<template>
  <h1>{{ module.text }}</h1>
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
</template>
