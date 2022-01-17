<script setup lang="ts">
  import StarterKit from "@tiptap/starter-kit"
  import { useEditor, EditorContent } from "@tiptap/vue-3"
  import { watch } from "vue"
  import { RichTextAnswerStep } from "../domain/Step"

  const props = defineProps<{ step: RichTextAnswerStep }>()

  const editor = useEditor({
    extensions: [StarterKit],
    editable: false,
    content: props.step.print(),
  })

  watch(
    props.step,
    (current) => editor.value?.commands.setContent(current.print()),
    { deep: true }
  )
</script>

<template>
  <div class="mb-4">
    <editor-content :editor="editor" />
  </div>
</template>
