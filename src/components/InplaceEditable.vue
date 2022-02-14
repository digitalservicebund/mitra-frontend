<script setup lang="ts">
  import Button from "primevue/button"
  import Inplace from "primevue/inplace"
  import InputText from "primevue/inputtext"
  import { ref } from "vue"

  const props = defineProps<{
    editable?: string
    placeholder?: string
    button?: boolean
    h1?: boolean
  }>()
  const emit = defineEmits<{
    (e: "update", newValue: string): void
  }>()

  const editable = ref(props.editable)
  const edit = ref<InstanceType<typeof Inplace>>()

  const update = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ;(edit.value as any).close()
    emit("update", editable.value || "")
  }

  const startEditing = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ;(edit.value as any).open()
  }
</script>

<template>
  <Inplace
    ref="edit"
    :closable="false"
    :class="[editable ? '' : 'text-slate-400', 'flex']"
  >
    <template #display>
      <h1 v-if="h1" class="mr-1 font-bold text-xl">
        {{ editable || placeholder || "Klicken zum Bearbeiten" }}
      </h1>
      <h2 v-else class="mr-1 inline-flex">
        {{ editable || placeholder || "Klicken zum Bearbeiten" }}
      </h2>
    </template>
    <template #content>
      <InputText
        v-model="editable"
        v-focus
        class="mr-1 mb-2"
        aria-label="Eigenschaft ändern"
        @keyup.enter="update"
        @blur="update"
      />
    </template>
  </Inplace>
  <Button
    v-if="button"
    type="button"
    class="mx-2 inline-flex align-top"
    @click="startEditing"
  >
    <span class="material-icons-outlined text-base" aria-hidden="true">
      edit
    </span>
    Ändern
  </Button>
</template>
