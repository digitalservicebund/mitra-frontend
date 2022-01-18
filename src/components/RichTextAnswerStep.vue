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
  <div class="rich-text-editor mb-4">
    <div v-if="editor" class="border">
      <button
        class="p-2"
        title="Fett"
        aria-label="Fett"
        @click="editor?.chain().focus().toggleBold().run()"
      >
        <span class="material-icons-outlined text-base" aria-hidden="true">
          format_bold
        </span>
      </button>
      <button
        class="p-2"
        title="Kursiv"
        aria-label="Kursiv"
        @click="editor?.chain().focus().toggleItalic().run()"
      >
        <span class="material-icons-outlined text-base" aria-hidden="true">
          format_italic
        </span>
      </button>
      <button
        class="p-2"
        title="Unterstrichen"
        aria-label="Unterstrichen"
        @click="editor?.chain().focus().toggleUnderline().run()"
      >
        <span class="material-icons-outlined text-base" aria-hidden="true">
          format_underlined
        </span>
      </button>
      <button
        class="p-2"
        title="Liste"
        aria-label="Liste"
        @click="editor?.chain().focus().toggleOrderedList().run()"
      >
        <span class="material-icons-outlined text-base" aria-hidden="true">
          format_list_bulleted
        </span>
      </button>
      <button
        class="p-2"
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
      <button class="p-2" @click="editor?.chain().focus().deleteTable().run()">
        delete table
      </button>
      <button class="p-2" @click="editor?.chain().focus().addRowAfter().run()">
        insert row
      </button>
      <button class="p-2" @click="editor?.chain().focus().deleteRow().run()">
        delete row
      </button>

      <button
        class="p-2"
        @click="editor?.chain().focus().addColumnAfter().run()"
      >
        insert column
      </button>
      <button class="p-2" @click="editor?.chain().focus().deleteColumn().run()">
        delete column
      </button>
    </div>
    <editor-content
      :editor="editor"
      class="border border-neutral-300 min-h-[250px]"
    />
  </div>
</template>
