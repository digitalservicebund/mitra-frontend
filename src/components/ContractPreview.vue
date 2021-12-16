<script setup lang="ts">
  import { useStore } from "../infra/Session"

  const session = useStore()
  const contract = session.lastWorkedOnContract
</script>

<template>
  <section>
    <h3 class="p-2 font-bold bg-white">Vorschau Vertragstext</h3>
    <article v-for="step in contract?.getSteps()" :key="step.id" class="p-2">
      {{ step.answer.toString() }}
    </article>
  </section>
</template>
