<script setup lang="ts">
  import StarterKit from "@tiptap/starter-kit"
  import { useEditor, EditorContent } from "@tiptap/vue-3"
  import { ref } from "vue"
  import { RichTextAnswerStep } from "../domain/Step"

  const props = defineProps<{ step: RichTextAnswerStep }>()

  const answer = ref(props.step.answer.toString())

  const editor = useEditor({
    extensions: [StarterKit],
    content: answer.value,
    onUpdate: ({ editor }) => {
      answer.value = editor.getHTML()
      props.step.answer.setValue(editor.getHTML())
    },
    editorProps: {
      attributes: {
        class: "m-2 focus:outline-none",
      },
    },
  })
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
