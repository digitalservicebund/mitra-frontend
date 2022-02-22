<script setup lang="ts">
  import FileUpload from "primevue/fileupload"
  import type { FileUploadUploaderEvent } from "primevue/fileupload"
  import { ref } from "vue"
  import { useRouter } from "vue-router"
  import Contract from "../../domain/Contract"
  import LoadEntityFromStorage from "../../domain/LoadEntityFromStorage"
  import { makeContractStorageService } from "../../provide"
  import { useSession } from "../../session"
  import NavigateToHome from "../NavigateToHome.vue"

  const session = useSession()

  const storage: LoadEntityFromStorage<Contract, File> =
    makeContractStorageService()

  const upload = async (event: FileUploadUploaderEvent) => {
    const file: File | File[] = event?.files
    const contract = await storage.load(file instanceof Array ? file[0] : file)
    session.rememberContract(contract)
    await router.push(`/mitra-frontend/contract/${contract.id}`)
  }

  const chooseLabel = ref("Computer durchsuchen")
  const router = useRouter()
</script>

<template>
  <NavigateToHome />
  <section id="open-contract">
    <h2 class="font-bold mb-4">Vertrag bearbeiten</h2>
    <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
    <label for="upload-contract"
      >Wählen Sie einen Vertrag von Ihrer Festplatte aus.
      <div class="mt-4">
        <FileUpload
          title="Vertrag auswählen"
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
  </section>
</template>
