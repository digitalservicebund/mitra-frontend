<script setup lang="ts">
  import BoldExtension from "@tiptap/extension-bold"
  import DocumentExtension from "@tiptap/extension-document"
  import ItalicExtension from "@tiptap/extension-italic"
  import ListItemExtension from "@tiptap/extension-list-item"
  import OrderedListExtension from "@tiptap/extension-ordered-list"
  import ParagraphExtension from "@tiptap/extension-paragraph"
  import TextExtension from "@tiptap/extension-text"
  import UnderlineExtension from "@tiptap/extension-underline"
  import { useEditor, EditorContent } from "@tiptap/vue-3"
  import { onBeforeUnmount, watch } from "vue"
  import { RichTextAnswerStep } from "../domain/Step"

  const props = defineProps<{ step: RichTextAnswerStep }>()

  const editor = useEditor({
    extensions: [
      BoldExtension,
      DocumentExtension,
      ItalicExtension,
      ListItemExtension,
      OrderedListExtension,
      ParagraphExtension,
      TextExtension,
      UnderlineExtension,
    ],
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
