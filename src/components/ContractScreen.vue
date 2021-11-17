<script setup lang="ts">
  import Playbook from "../domain/Playbook"
  import PlaybookRepository from "../domain/PlaybookRepository"
  import AppHeader from "./AppHeader.vue"
  import Contract from "./Contract.vue"
  import { makePlaybookRepository } from "../provide"
  import Button from "primevue/button"
  import Dialog from "primevue/dialog"
  import InputText from "primevue/inputtext"
  import { onMounted, ref } from "vue"

  const contractTitle = ref("")
  const displayTitleDialog = ref(false)
  const openTitleDialog = () => {
    displayTitleDialog.value = true
  }
  const closeTitleDialog = () => {
    displayTitleDialog.value = false
  }
  onMounted(() => openTitleDialog())

  // Primary adapter using the port (PlaybookRepository interface)
  const repository: PlaybookRepository = makePlaybookRepository()
  const playbook: Playbook = repository.findById("test-playbook")
</script>

<template>
  <AppHeader />
  <Dialog
    v-model:visible="displayTitleDialog"
    :closable="false"
    :modal="true"
    header="Wie wollen Sie den Vertrag benennen?"
  >
    <InputText
      id="contract-title"
      v-model="contractTitle"
      title="Titel des Vertrags"
      type="text"
    />
    <template #footer>
      <Button label="OK" icon="pi pi-check" @click="closeTitleDialog"></Button>
    </template>
  </Dialog>

  <Contract :title="contractTitle" :playbook="playbook" />
</template>

<style scoped>
  .p-dialog {
    width: 40vw;
  }
  .p-inputtext {
    width: 100%;
  }
</style>
