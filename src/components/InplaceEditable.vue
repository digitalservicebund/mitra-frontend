<script setup lang="ts">
  import Inplace from "primevue/inplace"
  import InputText from "primevue/inputtext"
  import { ref } from "vue"

  const props = defineProps<{ editable?: string; placeholder?: string }>()
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
</script>

<template>
  <Inplace
    ref="edit"
    :closable="false"
    :class="[editable ? '' : 'text-slate-400']"
  >
    <template #display>
      <h2 class="block text-lg">
        {{ editable || placeholder || "Klicken zum Bearbeiten" }}
      </h2>
    </template>
    <template #content>
      <InputText
        v-model="editable"
        v-focus
        class="text-lg"
        aria-label="Eigenschaft ändern"
        @keyup.enter="update"
        @blur="update"
      />
    </template>
  </Inplace>
</template>
