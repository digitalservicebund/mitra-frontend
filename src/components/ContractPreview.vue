<script setup lang="ts">
  import { useStore } from "../infra/Session"

  const session = useStore()
  const contract = session.lastWorkedOnContract
</script>

<template>
  <section>
    <h3 class="p-2 font-bold bg-white">Vorschau Vertragstext</h3>
    <article v-for="module in contract?.modules" :key="module.id" class="p-2">
      <h4 class="font-bold">{{ module.text }}</h4>
      <div v-for="step in module.steps" :key="step.id" class="mt-2">
        {{ step.answer.toString() }}
      </div>
    </article>
  </section>
</template>
