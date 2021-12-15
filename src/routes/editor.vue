<!-- Pages are solely responsible for providing a route -->
<script setup lang="ts">
  import EditorJS from "@editorjs/editorjs"
  import List from "@editorjs/list"
  import Table from "@editorjs/table"
  import Underline from "@editorjs/underline"
  import Editor from "@tinymce/tinymce-vue"

  new EditorJS({
    holder: "editor",
    inlineToolbar: ["bold", "italic", "underline", "link"],
    tools: {
      list: {
        class: List,
      },
      table: {
        class: Table,
      },
      underline: {
        class: Underline,
      },
    },
  })
</script>

<template>
  <h1>EditorJS</h1>
  <div id="editor"></div>
  <h1>TinyMCE</h1>
  <editor
    api-key="no-api-key"
    :init="{
      height: 500,
      menubar: false,
      plugins: [
        'advlist autolink lists link image charmap print preview anchor',
        'searchreplace visualblocks code fullscreen',
        'insertdatetime media table paste code help wordcount',
      ],
      toolbar:
        'undo redo | bold italic underline | \
           alignleft aligncenter alignright alignjustify | \
           bullist numlist outdent indent | table | removeformat | help',
    }"
  />
</template>

<style>
  #editor {
    border: 1px solid #ccc;
  }
</style>
