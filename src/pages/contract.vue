<script setup lang="ts">
  import Playbook from "../domain/Playbook"
  import PlaybookRepository from "../domain/PlaybookRepository"
  import Header from "../components/Header.vue"
  import Contract from "../components/Contract.vue"
  import { makePlaybookRepository } from "../provide"

  // Primary adapter using the port (PlaybookRepository interface)
  const repository: PlaybookRepository = makePlaybookRepository()
  const playbook: Playbook = repository.findById("test-playbook")
</script>

<template>
  <Header />
  <Contract :playbook="playbook" />
</template>
