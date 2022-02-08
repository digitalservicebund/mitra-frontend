<script setup lang="ts">
  import { useEditor, EditorContent, Editor } from "@tiptap/vue-3"
  import Menu from "primevue/menu"
  import { onBeforeUnmount, ref } from "vue"
  import { RichTextAnswerStep } from "../../domain/Step"
  import RichTextEditorConfig from "./RichTextEditorConfig"
  import { editorContentAsAnswerValue } from "./RichTextHelper"

  const props = defineProps<{ step: RichTextAnswerStep }>()

  const menu = ref<InstanceType<typeof Menu>>()

  const tableActions = [
    {
      label: "Tabelle einfügen",
      command: () =>
        editor.value
          ?.chain()
          .insertTable({
            rows: 3,
            cols: 3,
            withHeaderRow: false,
          })
          .focus()
          .run(),
    },
    {
      label: "Tabelle löschen",
      command: () => editor.value?.chain().focus().deleteTable().run(),
    },
    {
      label: "Zeile einfügen",
      command: () => editor.value?.chain().focus().addRowAfter().run(),
    },
    {
      label: "Zeile löschen",
      command: () => editor.value?.chain().focus().deleteRow().run(),
    },
    {
      label: "Spalte einfügen",
      command: () => editor.value?.chain().focus().addColumnAfter().run(),
    },
    {
      label: "Spalte löschen",
      command: () => editor.value?.chain().focus().deleteColumn().run(),
    },
  ]
  const toggleTableActionsMenu = (event: Event) => menu.value?.toggle(event)

  const editor = useEditor({
    ...RichTextEditorConfig,
    content: props.step.answer.value,
    editorProps: {
      attributes: {
        class: "border border-neutral-300 p-2 min-h-[250px] focus:outline-none",
        title: props.step.prompt,
        role: "textbox",
        "aria-multiline": "true",
      },
    },
    onUpdate: ({ editor }) =>
      props.step.answer.setValue(
        editorContentAsAnswerValue(editor as Editor, props.step)
      ),
  })

  onBeforeUnmount(() => editor.value?.destroy())
</script>

<template>
  <div class="mb-4">
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
        title="Tabelle"
        aria-label="Tabelle"
        aria-haspopup="true"
        @click="toggleTableActionsMenu"
      >
        <span class="material-icons-outlined text-base" aria-hidden="true">
          view_module
        </span>
      </button>
      <Menu ref="menu" :model="tableActions" :popup="true" />
    </div>
    <editor-content :editor="editor" />
  </div>
</template>
