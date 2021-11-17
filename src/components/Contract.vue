<script setup lang="ts">
  import { defineProps } from "vue"
  import Playbook from "../domain/Playbook"

  defineProps<{ title: string; playbook: Playbook }>()
</script>

<template>
  <header>
    <div>{{ title }}</div>
  </header>

  <h2>{{ playbook.name }}</h2>
  <section v-for="section in playbook.sections" :key="section.text">
    <h3>{{ section.text }}</h3>
    <div v-for="step in section.steps" :key="step.text">
      {{ step.text }}
    </div>
  </section>
</template>
