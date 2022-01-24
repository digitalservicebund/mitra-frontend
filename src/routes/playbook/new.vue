<!-- Pages are solely responsible for providing a route -->
<script setup lang="ts">
  import { onBeforeMount } from "vue"
  import { useRouter } from "vue-router"
  import Playbook from "../../domain/Playbook"
  import PlaybookRepository from "../../domain/PlaybookRepository"
  import { makePlaybookRepository } from "../../provide"

  const playbookRepository: PlaybookRepository = makePlaybookRepository()
  const playbook: Playbook = new Playbook("")

  playbookRepository.save(playbook)

  onBeforeMount(async () => {
    const router = useRouter()
    await router.push(`/mitra-frontend/playbook/${playbook.id}`)
  })
</script>

<template>
  <div></div>
</template>
