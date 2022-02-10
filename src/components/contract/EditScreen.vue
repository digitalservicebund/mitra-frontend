<script setup lang="ts">
  import Breadcrumb from "primevue/breadcrumb"
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
  import InplaceEditable from "../InplaceEditable.vue"
  import Metadata from "../Metadata.vue"
  import SideMenu from "../SideMenu.vue"
  import EditStep from "./EditStep.vue"
  import ContractPreview from "./Preview.vue"

  const props = defineProps<{ id: string }>()

  const session = useSession()

  const storage: Storage<Contract, File> = makeContractStorageService()
  const contractRepository: ContractRepository = makeContractRepository()
  const contract = ref(contractRepository.findById(props.id))
  session.rememberContract(contract.value as Contract)
  const breadcrumbTopLevel: MenuItem = {
    to: `/mitra-frontend/${session.entryPoint}`,
    label: "Startseite",
  }

  const breadcrumbItems = computed(() => [
    {
      label: contract.value.title,
      disabled: true,
    },
  ])

  const handleUpdateTitle = (newTitle: string) => {
    contract.value.title = newTitle
  }

  const handleSave = () => {
    storage.save(contract.value as Contract)
  }

  const handleNavigate = (module: Module) => {
    session.rememberContract(contract.value as Contract, module.steps[0])
  }
</script>

<template>
  <div class="flex h-full">
    <nav class="flex-none">
      <SideMenu
        :title="contract.title"
        :navigatable="(contract as Contract)"
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
        <InplaceEditable
          :editable="contract.title"
          button
          h1
          @update="handleUpdateTitle"
        />
        <Metadata v-bind="contract.metadata" />
      </header>
      <section class="mt-16">
        <transition name="fade" mode="out-in">
          <EditStep :contract="(contract as Contract)" />
        </transition>
      </section>
    </main>

    <ContractPreview
      :contract="(contract as Contract)"
      class="flex-1 bg-slate-100"
    />
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
