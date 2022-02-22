<script setup lang="ts">
  import { ref } from "vue"
  import Contract from "../../domain/Contract"
  import Module from "../../domain/Module"
  import Storage from "../../domain/Storage"
  import { makeContractStorageService } from "../../provide"
  import { useSession } from "../../session"
  import Breadcrumb from "../Breadcrumb.vue"
  import InplaceEditable from "../InplaceEditable.vue"
  import Metadata from "../Metadata.vue"
  import SideMenu from "../SideMenu.vue"
  import EditStep from "./EditStep.vue"
  import ContractPreview from "./Preview.vue"

  const props = defineProps<{ id: string }>()

  const session = useSession()

  const storage: Storage<Contract, File> = makeContractStorageService()
  const contract = ref(session.contracts[props.id][0])

  const handleUpdateTitle = (newTitle: string) => {
    contract.value.title = newTitle
    session.refresh({ contract: contract.value })
  }

  const handleSave = () => {
    storage.save(contract.value)
  }

  const handleNavigate = (module: Module) => {
    session.rememberContract(contract.value, module.steps[0])
  }
</script>

<template>
  <div class="flex h-full">
    <nav class="flex-none">
      <SideMenu
        :title="contract.title"
        :navigatable="contract"
        @save="handleSave"
        @navigate="handleNavigate"
      />
    </nav>

    <main class="flex-1 px-8">
      <header class="edit">
        <Breadcrumb :current-title="contract.title" :parent-items="[]" />
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
          <EditStep
            :key="session.lastEditedStep(contract.id)?.id"
            :contract="contract"
          />
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
