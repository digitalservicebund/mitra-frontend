<script setup lang="ts">
  import { onMounted, ref } from "vue"
  import Button from "primevue/button"
  import ContractEdit from "./ContractEdit.vue"
  import ContractPreview from "./ContractPreview.vue"
  import ContractSideMenu from "./ContractSideMenu.vue"
  import Dialog from "primevue/dialog"
  import InputText from "primevue/inputtext"
  import ContractRepository from "../domain/ContractRepository"
  import Contract from "../domain/Contract"
  import { Answer, Step } from "../domain/Step"
  import Storage from "../domain/Storage"
  import { useSession } from "../session"
  import {
    makeContractRepository,
    makeContractStorageService,
    makePlaybookRepository,
  } from "../provide"

  const props = defineProps<{ id: string }>()

  const session = useSession()

  const storage: Storage<Contract, File> = makeContractStorageService()
  const contractRepository: ContractRepository = makeContractRepository()
  const contract: Contract =
    props.id === "cloud-contract"
      ? Contract.fromPlaybook(
          makePlaybookRepository().findById(
            "db2a1d38-01fb-4ea2-bc6f-b5213413c809"
          )
        )
      : contractRepository.findById(props.id)
  session.rememberCurrentStep(contract, contract.getAllSteps()[0])

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

  const saveContract = () => {
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
        @save="saveContract"
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
        <ContractEdit :contract="contract" />
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
