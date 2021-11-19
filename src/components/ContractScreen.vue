<script setup lang="ts">
  import Playbook from "../domain/Playbook"
  import PlaybookRepository from "../domain/PlaybookRepository"
  import AppHeader from "./AppHeader.vue"
  import EditContract from "./EditContract.vue"
  import { makePlaybookRepository } from "../provide"
  import Button from "primevue/button"
  import Dialog from "primevue/dialog"
  import InputText from "primevue/inputtext"
  import { onMounted, ref } from "vue"

  const contractTitle = ref("Unbenannter Vertrag")
  const titleInput = ref()
  const displayTitleDialog = ref(false)

  const editTitle = () => {
    titleInput.value = contractTitle.value
    displayTitleDialog.value = true
  }
  const saveTitle = () => {
    displayTitleDialog.value = false
    contractTitle.value = titleInput.value
  }

  const highlightText = (event: Event) => {
    const target = event.target as HTMLInputElement
    target?.select()
  }
  onMounted(() => editTitle())

  // Primary adapter using the port (PlaybookRepository interface)
  const repository: PlaybookRepository = makePlaybookRepository()
  const playbook: Playbook = repository.findById("test-playbook")
</script>

<template>
  <AppHeader />
  <Dialog
    id="dialog-contract-title"
    v-model:visible="displayTitleDialog"
    :modal="true"
    :dismissable-mask="true"
    header="Wie wollen Sie den Vertrag benennen?"
  >
    <InputText
      id="input-contract-title"
      v-model="titleInput"
      title="Titel des Vertrags"
      type="text"
      @focus="highlightText"
      @keyup.enter="saveTitle"
    />
    <template #footer>
      <Button label="OK" icon="pi pi-check" @click="saveTitle"></Button>
    </template>
  </Dialog>

  <section>
    <Button class="p-button-link" @click="editTitle">
      <span> {{ contractTitle }} </span>
    </Button>
  </section>
  <EditContract :title="contractTitle" :playbook="playbook" />
</template>

<style>
  #dialog-contract-title {
    width: 40vw;
  }
  #input-contract-title {
    width: 100%;
  }
</style>
