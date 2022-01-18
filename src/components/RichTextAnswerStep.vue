<script setup lang="ts">
  import { useEditor, EditorContent } from "@tiptap/vue-3"
  import { onBeforeUnmount } from "vue"
  import { RichTextAnswerStep } from "../domain/Step"
  import RichTextEditorConfig from "./RichTextEditorConfig"

  const props = defineProps<{ step: RichTextAnswerStep }>()

  const editor = useEditor({
    ...RichTextEditorConfig,
    content: props.step.print(),
    editorProps: {
      attributes: {
        class: "m-2 focus:outline-none",
        title: props.step.text,
        role: "textbox",
        "aria-multiline": "true",
      },
    },
    onUpdate: ({ editor }) => props.step.answer.setValue(editor.getHTML()),
  })

  onBeforeUnmount(() => editor.value?.destroy())
</script>

<template>
  <div class="mb-4">
    {{ step.text }}
  </div>
  <div class="mb-4">
    <div v-if="editor">
      <button
        :class="{
          'font-bold': editor.isActive('bold'),
          border: true,
          'p-2': true,
        }"
        @click="editor?.chain().focus().toggleBold().run()"
      >
        bold
      </button>
      <button
        :class="{
          'font-bold': editor.isActive('italic'),
          border: true,
          'p-2': true,
        }"
        @click="editor?.chain().focus().toggleItalic().run()"
      >
        italic
      </button>
      <button
        :class="{
          'font-bold': editor.isActive('underline'),
          border: true,
          'p-2': true,
        }"
        @click="editor?.chain().focus().toggleUnderline().run()"
      >
        underline
      </button>
      <button
        :class="{
          'font-bold': editor.isActive('orderedList'),
          border: true,
          'p-2': true,
        }"
        @click="editor?.chain().focus().toggleOrderedList().run()"
      >
        list
      </button>
      <button
        class="border p-2"
        @click="
          editor
            ?.chain()
            .focus()
            .insertTable({ rows: 3, cols: 3, withHeaderRow: false })
            .run()
        "
      >
        insert table
      </button>
      <button
        class="border p-2"
        @click="editor?.chain().focus().deleteTable().run()"
      >
        delete table
      </button>
      <button
        class="border p-2"
        @click="editor?.chain().focus().addRowAfter().run()"
      >
        insert row
      </button>
      <button
        class="border p-2"
        @click="editor?.chain().focus().deleteRow().run()"
      >
        delete row
      </button>

      <button
        class="border p-2"
        @click="editor?.chain().focus().addColumnAfter().run()"
      >
        insert column
      </button>
      <button
        class="border p-2"
        @click="editor?.chain().focus().deleteColumn().run()"
      >
        delete column
      </button>
    </div>
    <editor-content
      :editor="editor"
      class="border rounded border-neutral-300"
    />
  </div>
</template>

<style></style>
