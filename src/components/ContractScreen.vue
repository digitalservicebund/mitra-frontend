<script setup lang="ts">
  import Contract from "../domain/Contract"
  import PlaybookRepository from "../domain/PlaybookRepository"
  import ContractRepository from "../domain/ContractRepository"
  import EditContract from "./EditContract.vue"
  import ContractSideMenu from "./ContractSideMenu.vue"
  import { makePlaybookRepository, makeContractRepository } from "../provide"
  import Button from "primevue/button"
  import Dialog from "primevue/dialog"
  import InputText from "primevue/inputtext"
  import { onMounted, ref } from "vue"

  // Primary adapter using the port (PlaybookRepository interface)
  const playbookRepository: PlaybookRepository = makePlaybookRepository()
  // Secondary adapter using the port (ContactRepository interface)
  const contractRepository: ContractRepository = makeContractRepository()
  const contract: Contract = Contract.fromPlaybook(playbookRepository.load())

  const placeholder = "Unbenannter Vertrag"
  const contractTitle = ref(placeholder)
  const titleInput = ref(placeholder)
  const displayTitleDialog = ref(false)

  const editTitle = () => {
    titleInput.value = contractTitle.value
    displayTitleDialog.value = true
  }

  const updateTitle = () => {
    displayTitleDialog.value = false
    contractTitle.value = titleInput.value
    contract.name = titleInput.value
  }

  const highlightText = (event: Event) => {
    const target = event.target as HTMLInputElement
    target?.select()
  }

  const saveContract = async () => {
    await contractRepository.save(contract)
  }

  onMounted(editTitle)
</script>

<template>
  <div class="flex">
    <div class="flex-col">
      <ContractSideMenu :modules="contract.getModules" />
    </div>

    <div class="flex-col p-8">
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
          v-focus
          title="Titel des Vertrags"
          type="text"
          @focus="highlightText"
          @keyup.enter="updateTitle"
        />
        <template #footer>
          <Button label="OK" icon="pi pi-check" @click="updateTitle"></Button>
        </template>
      </Dialog>

      <section>
        <Button class="p-button-link" @click="editTitle">
          <span>{{ contractTitle }}</span>
        </Button>
        <Button class="p-button-link" @click="saveContract">
          <span>Speichern</span>
        </Button>
      </section>

      <EditContract :contract="contract" />
    </div>
  </div>
</template>

<style>
  #dialog-contract-title {
    width: 40vw;
  }

  #input-contract-title {
    width: 100%;
  }
</style>
