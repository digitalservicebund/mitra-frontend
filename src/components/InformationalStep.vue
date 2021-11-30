<script setup lang="ts">
  defineProps<{ text: string }>()
</script>

<template>
  <p class="mb-4">
    {{ text }}
  </p>
</template>
