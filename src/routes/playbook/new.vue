<!-- Pages are solely responsible for providing a route -->
<script setup lang="ts">
  import { onBeforeMount } from "vue"
  import { useRouter } from "vue-router"
  import Playbook from "../../domain/Playbook"
  import { useSession } from "../../session"

  const session = useSession()

  const playbook: Playbook = new Playbook()
  session.rememberPlaybook(playbook)

  onBeforeMount(
    async () =>
      await useRouter().replace(`/mitra-frontend/playbook/${playbook.id}`)
  )
</script>

<template>
  <div></div>
</template>
