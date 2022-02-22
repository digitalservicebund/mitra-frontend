<script setup lang="ts">
  import FileUpload from "primevue/fileupload"
  import type { FileUploadUploaderEvent } from "primevue/fileupload"
  import { ref } from "vue"
  import { useRouter } from "vue-router"
  import Contract from "../../domain/Contract"
  import LoadEntityFromStorage from "../../domain/LoadEntityFromStorage"
  import Playbook from "../../domain/Playbook"
  import { makePlaybookStorageService } from "../../provide"
  import { useSession } from "../../session"
  import NavigateToHome from "../NavigateToHome.vue"

  const session = useSession()

  const storage: LoadEntityFromStorage<Playbook, File> =
    makePlaybookStorageService()

  const upload = async (event: FileUploadUploaderEvent) => {
    const file: File | File[] = event?.files
    const playbook = await storage.load(file instanceof Array ? file[0] : file)
    const contract: Contract = Contract.fromPlaybook(playbook)
    session.rememberContract(contract)
    await router.push(`/mitra-frontend/contract/${contract.id}`)
  }

  const chooseLabel = ref("Computer durchsuchen")
  const router = useRouter()
</script>

<template>
  <NavigateToHome />
  <main id="open-playbook">
    <h2 class="font-bold mb-4">Neuen Vertrag erstellen</h2>
    <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
    <label for="upload-playbook"
      >Wählen Sie ein Playbook von Ihrer Festplatte aus.
      <div class="mt-4">
        <FileUpload
          title="Playbook auswählen"
          :choose-label="chooseLabel"
          :show-upload-button="false"
          :show-cancel-button="false"
          :custom-upload="true"
          :auto="true"
          accept=".json"
          @uploader="upload"
        >
          <template #empty>
            <p>Datei in diesen Bereich ziehen.</p>
          </template>
        </FileUpload>
      </div>
    </label>
  </main>
</template>
