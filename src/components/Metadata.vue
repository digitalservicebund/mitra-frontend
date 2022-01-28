<script setup lang="ts">
  defineProps<{ createdAt?: Date; savedAt?: Date }>()

  const locale = "de-DE"
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }
</script>

<template>
  <dl class="flex flex-col flex-wrap max-h-12 mt-4">
    <dt class="text-xs">Datei erstellt am</dt>
    <dd>
      <time v-if="createdAt" :datetime="createdAt.toISOString()">{{
        createdAt.toLocaleDateString(locale, options)
      }}</time>
      <span v-else>-</span>
    </dd>
    <dt class="text-xs">Zuletzt gespeichert am</dt>
    <dd>
      <time v-if="savedAt" :datetime="savedAt.toISOString()">{{
        savedAt.toLocaleDateString(locale, options)
      }}</time>
      <span v-else>-</span>
    </dd>
  </dl>
</template>
