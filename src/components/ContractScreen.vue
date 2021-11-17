<script setup lang="ts">
  import Playbook from "../domain/Playbook"
  import PlaybookRepository from "../domain/PlaybookRepository"
  import AppHeader from "./AppHeader.vue"
  import Contract from "./Contract.vue"
  import { makePlaybookRepository } from "../provide"

  // Primary adapter using the port (PlaybookRepository interface)
  const repository: PlaybookRepository = makePlaybookRepository()
  const playbook: Playbook = repository.findById("test-playbook")
</script>

<template>
  <AppHeader />
  <Contract :playbook="playbook" />
</template>
