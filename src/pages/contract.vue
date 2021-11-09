<script setup lang="ts">
  import Playbook from "../domain/Playbook"
  import Header from "../components/Header.vue"
  import Contract from "../components/Contract.vue"
  import repository from "../adapter/InMemoryPlaybookRepository"

  const playbook: Playbook = repository.findById("test")
</script>

<template>
  <Header />
  <Contract :playbook="playbook" />
</template>
