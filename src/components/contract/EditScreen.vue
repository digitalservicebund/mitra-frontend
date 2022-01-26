<script setup lang="ts">
  import Breadcrumb from "primevue/breadcrumb"
  import Button from "primevue/button"
  import Inplace from "primevue/inplace"
  import InputText from "primevue/inputtext"
  import type { MenuItem } from "primevue/menuitem"
  import { Ref, ref } from "vue"
  import Contract from "../../domain/Contract"
  import ContractRepository from "../../domain/ContractRepository"
  import { Answer, Step } from "../../domain/Step"
  import Storage from "../../domain/Storage"
  import {
    makeContractRepository,
    makeContractStorageService,
  } from "../../provide"
  import { useSession } from "../../session"
  import SideMenu from "../SideMenu.vue"
  import EditStep from "./EditStep.vue"
  import ContractPreview from "./Preview.vue"

  const props = defineProps<{ id: string }>()

  const session = useSession()

  const storage: Storage<Contract, File> = makeContractStorageService()
  const contractRepository: ContractRepository = makeContractRepository()
  const contract: Contract = contractRepository.findById(props.id)
  session.rememberCurrentStep(contract, contract.path[0])

  const editableTitle = ref(contract.title)
  const editTitle = ref()

  const breadcrumbTopLevel: MenuItem = {
    to: `/mitra-frontend/${session.entryPoint}`,
    label: "Startseite",
  }
  const breadcrumbItems: Ref<MenuItem[]> = ref([
    {
      label: editableTitle.value,
      disabled: true,
    },
  ])

  const startTitleEditing = () => {
    editTitle.value.open()
  }

  const updateTitle = () => {
    contract.title = editableTitle.value
    editTitle.value.close()
  }

  const handleSave = () => {
    storage.save(contract)
  }

  const handleNavigate = (step: Step<Answer>) => {
    session.rememberCurrentStep(contract, step)
  }
</script>

<template>
  <div class="flex h-full">
    <nav class="flex-none">
      <SideMenu
        :navigatable="contract"
        @save="handleSave"
        @navigate="handleNavigate"
      />
    </nav>
    <main id="contract-outline" class="flex-1 px-8">
      <header>
        <Breadcrumb
          :home="breadcrumbTopLevel"
          :model="breadcrumbItems"
          class="mb-4"
        />
        <p><small>Vertrag</small></p>
        <Inplace ref="editTitle" :closable="false">
          <template #display>
            <h1 class="font-bold text-xl">{{ editableTitle }}</h1>
          </template>
          <template #content>
            <InputText
              v-model="editableTitle"
              v-focus
              class="mr-1"
              @keyup.enter="updateTitle"
              @blur="updateTitle"
            />
          </template>
        </Inplace>
        <Button type="button" @click="startTitleEditing">
          <span class="material-icons-outlined text-base" aria-hidden="true">
            edit
          </span>
          Ändern
        </Button>
      </header>
      <section class="mt-16">
        <transition name="fade" mode="out-in">
          <EditStep :contract="contract" />
        </transition>
      </section>
    </main>

    <ContractPreview :contract="contract" class="flex-1 bg-slate-100" />
  </div>
</template>

<style scoped>
  #contract-outline header {
    height: 150px;
  }
  #contract-outline .p-inplace {
    display: inline-flex;
  }
  #contract-outline .p-breadcrumb-chevron::before {
    direction: ltr;
    display: inline-block;
    font-family: "Material Icons Outlined";
    font-size: 22px;
    font-style: normal;
    font-weight: normal;
    letter-spacing: normal;
    line-height: 1;
    text-transform: none;
    white-space: nowrap;
    word-wrap: normal;
    font-feature-settings: "liga";
    content: " chevron_right ";
    -webkit-font-feature-settings: "liga";
    -webkit-font-smoothing: antialiased;
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
