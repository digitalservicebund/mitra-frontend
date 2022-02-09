<script setup lang="ts">
  import Breadcrumb from "primevue/breadcrumb"
  import Button from "primevue/button"
  import Inplace from "primevue/inplace"
  import InputText from "primevue/inputtext"
  import type { MenuItem } from "primevue/menuitem"
  import { computed, ref } from "vue"
  import Contract from "../../domain/Contract"
  import ContractRepository from "../../domain/ContractRepository"
  import Module from "../../domain/Module"
  import Storage from "../../domain/Storage"
  import {
    makeContractRepository,
    makeContractStorageService,
  } from "../../provide"
  import { useSession } from "../../session"
  import Metadata from "../Metadata.vue"
  import SideMenu from "../SideMenu.vue"
  import EditStep from "./EditStep.vue"
  import ContractPreview from "./Preview.vue"

  const props = defineProps<{ id: string }>()

  const session = useSession()

  const storage: Storage<Contract, File> = makeContractStorageService()
  const contractRepository: ContractRepository = makeContractRepository()
  const contract: Contract = contractRepository.findById(props.id)
  session.rememberContract(contract)
  const breadcrumbTopLevel: MenuItem = {
    to: `/mitra-frontend/${session.entryPoint}`,
    label: "Startseite",
  }

  const editableTitle = ref(contract.title)
  const editTitle = ref<InstanceType<typeof Inplace>>()
  const breadcrumbItems = computed(() => [
    {
      label: editableTitle.value,
      disabled: true,
    },
  ])

  const startTitleEditing = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ;(editTitle.value as any).open()
  }

  const updateTitle = () => {
    contract.title = editableTitle.value
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ;(editTitle.value as any).close()
  }

  const handleSave = () => {
    storage.save(contract)
  }

  const handleNavigate = (module: Module) => {
    session.rememberContract(contract, module.steps[0])
  }
</script>

<template>
  <div class="flex h-full">
    <nav class="flex-none">
      <SideMenu
        :title="editableTitle"
        :navigatable="contract"
        @save="handleSave"
        @navigate="handleNavigate"
      />
    </nav>

    <main class="flex-1 px-8">
      <header class="edit">
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
              aria-label="Titel ändern"
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
        <Metadata v-bind="contract.metadata" />
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
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
