<!-- Pages are solely responsible for providing a route -->
<script setup lang="ts">
  import { onBeforeMount } from "vue"
  import { useRouter } from "vue-router"
  import Contract from "../../domain/Contract"
  import { makePlaybookRepository } from "../../provide"
  import { useSession } from "../../session"

  const session = useSession()

  const contract: Contract = Contract.fromPlaybook(
    makePlaybookRepository().findById("db2a1d38-01fb-4ea2-bc6f-b5213413c809")
  )
  session.rememberContract(contract)

  onBeforeMount(
    async () =>
      await useRouter().replace(`/mitra-frontend/contract/${contract.id}`)
  )
</script>

<template>
  <div></div>
</template>
