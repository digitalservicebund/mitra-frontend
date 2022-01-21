<!-- Pages are solely responsible for providing a route -->
<script setup lang="ts">
  import { onBeforeMount } from "vue"
  import { useRouter } from "vue-router"
  import Contract from "../../domain/Contract"
  import ContractRepository from "../../domain/ContractRepository"
  import { makeContractRepository, makePlaybookRepository } from "../../provide"

  const contractRepository: ContractRepository = makeContractRepository()
  const contract: Contract = Contract.fromPlaybook(
    makePlaybookRepository().findById("db2a1d38-01fb-4ea2-bc6f-b5213413c809")
  )
  contractRepository.save(contract)

  onBeforeMount(async () => {
    const router = useRouter()
    await router.push(`/mitra-frontend/contract/${contract.id}`)
  })
</script>

<template>
  <div></div>
</template>
