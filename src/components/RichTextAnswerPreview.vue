<script setup lang="ts">
  import { useEditor, EditorContent } from "@tiptap/vue-3"
  import { onBeforeUnmount, watch } from "vue"
  import { RichTextAnswerStep } from "../domain/Step"
  import RichTextEditorConfig from "./RichTextEditorConfig"

  const props = defineProps<{ step: RichTextAnswerStep }>()

  const editor = useEditor({
    ...RichTextEditorConfig,
    editable: false,
    content: props.step.print(),
  })

  watch(
    props.step,
    (current) => editor.value?.commands.setContent(current.print()),
    { deep: true }
  )

  onBeforeUnmount(() => editor.value?.destroy())
</script>

<template>
  <div class="mb-4">
    <editor-content :editor="editor" />
  </div>
</template>
