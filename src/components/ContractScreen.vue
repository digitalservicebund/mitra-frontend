<script setup lang="ts">
  import Contract from "../domain/Contract"
  import ContractRepository from "../domain/ContractRepository"
  import ContractEdit from "./ContractEdit.vue"
  import ContractSideMenu from "./ContractSideMenu.vue"
  import { makeContractRepository, makeContractStore } from "../provide"
  import Button from "primevue/button"
  import Dialog from "primevue/dialog"
  import InputText from "primevue/inputtext"
  import { onMounted, ref } from "vue"

  const props = defineProps<{ id: string }>()

  // Secondary adapter using the port (ContactRepository interface)
  const contractRepository: ContractRepository = makeContractRepository()
  const contractStore = makeContractStore()
  const contract: Contract = contractStore.load(props.id)

  const placeholder = contract.title ? contract.title : "Unbenannter Vertrag"
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
    contract.title = titleInput.value
  }

  const highlightText = (event: Event) => {
    const target = event.target as HTMLInputElement
    target?.select()
  }

  const saveContract = async () => {
    await contractRepository.save(contract)
  }

  onMounted(() => {
    if (!contract.title) {
      editTitle()
    }
  })
</script>

<template>
  <div class="flex">
    <div class="flex-col">
      <ContractSideMenu :modules="contract.getModules()" @save="saveContract" />
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
      </section>

      <transition name="fade" mode="out-in">
        <ContractEdit :contract="contract" />
      </transition>
    </div>
  </div>
</template>

<style scoped>
  #dialog-contract-title {
    width: 40vw;
  }

  #input-contract-title {
    width: 100%;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
