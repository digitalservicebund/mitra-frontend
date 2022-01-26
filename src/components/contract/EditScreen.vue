<script setup lang="ts">
  import Button from "primevue/button"
  import Dialog from "primevue/dialog"
  import InputText from "primevue/inputtext"
  import { onMounted, ref } from "vue"
  import Contract from "../../domain/Contract"
  import ContractRepository from "../../domain/ContractRepository"
  import { Answer, Step } from "../../domain/Step"
  import Storage from "../../domain/Storage"
  import {
    makeContractRepository,
    makeContractStorageService,
  } from "../../provide"
  import { useSession } from "../../session"
  import EditStep from "./EditStep.vue"
  import ContractPreview from "./Preview.vue"
  import ContractSideMenu from "./SideMenu.vue"

  const props = defineProps<{ id: string }>()

  const session = useSession()

  const storage: Storage<Contract, File> = makeContractStorageService()
  const contractRepository: ContractRepository = makeContractRepository()
  const contract: Contract = contractRepository.findById(props.id)
  session.rememberCurrentStep(contract, contract.path[0])

  const placeholder = contract.title || "Unbenannter Vertrag"
  const contractTitle = ref(placeholder)
  const titleInput = ref(placeholder)
  const displayTitleDialog = ref(false)

  const editTitle = () => {
    titleInput.value = contractTitle.value
    displayTitleDialog.value = true
  }

  const updateTitle = () => {
    displayTitleDialog.value = false
    if (titleInput.value !== placeholder) {
      contractTitle.value = titleInput.value
      contract.title = titleInput.value
    }
  }

  const highlightText = (event: Event) => {
    const target = event.target as HTMLInputElement
    target?.select()
  }

  const handleSave = () => {
    storage.save(contract)
  }

  const handleNavigate = (step: Step<Answer>) => {
    session.rememberCurrentStep(contract, step)
  }

  onMounted(() => {
    if (!contract.title) {
      editTitle()
    }
  })
</script>

<template>
  <div class="flex h-full">
    <nav class="flex-none">
      <ContractSideMenu
        :contract="contract"
        @save="handleSave"
        @navigate="handleNavigate"
      />
    </nav>

    <main class="flex-1 p-8">
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

      <header>
        <Button class="p-button-link" @click="editTitle">
          <span>{{ contractTitle }}</span>
        </Button>
      </header>

      <transition name="fade" mode="out-in">
        <EditStep :contract="contract" />
      </transition>
    </main>

    <ContractPreview :contract="contract" class="flex-1 bg-slate-100" />
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
