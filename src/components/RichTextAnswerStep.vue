<script setup lang="ts">
  import StarterKit from "@tiptap/starter-kit"
  import { useEditor, EditorContent } from "@tiptap/vue-3"
  import { onBeforeUnmount } from "vue"
  import { RichTextAnswerStep } from "../domain/Step"

  const props = defineProps<{ step: RichTextAnswerStep }>()

  const editor = useEditor({
    extensions: [StarterKit],
    content: props.step.print(),
    onUpdate: ({ editor }) => props.step.answer.setValue(editor.getHTML()),
    editorProps: {
      attributes: {
        class: "m-2 focus:outline-none",
      },
    },
  })

  onBeforeUnmount(() => editor.value?.destroy())
</script>

<template>
  <div class="mb-4">
    {{ step.text }}
  </div>
  <div class="mb-4">
    <editor-content
      :editor="editor"
      class="border rounded border-neutral-300"
    />
  </div>
</template>
