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

  const contractTitle = ref("Unbenannter Vertrag")
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
    id="dialog-contract-title"
    v-model:visible="displayTitleDialog"
    :closable="false"
    :modal="true"
    header="Wie wollen Sie den Vertrag benennen?"
  >
    <InputText
      id="input-contract-title"
      v-model="contractTitle"
      title="Titel des Vertrags"
      type="text"
      @focus="$event.target.select()"
      @keyup.enter="closeTitleDialog"
    />
    <template #footer>
      <Button label="OK" icon="pi pi-check" @click="closeTitleDialog"></Button>
    </template>
  </Dialog>

  <section>
    <Button class="p-button-link" @click="openTitleDialog">
      <span> {{ contractTitle }} </span>
    </Button>
  </section>
  <Contract :title="contractTitle" :playbook="playbook" />
</template>

<style>
  #dialog-contract-title {
    width: 40vw;
  }
  #input-contract-title {
    width: 100%;
  }
</style>
